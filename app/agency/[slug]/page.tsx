import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { loadAgencyDb, indexableAgencies, findBrand, shortAddress, AREA_LABELS, DB_PREFS, type Agency, type AgencyDb } from "@/lib/agencies";

/*
 * 相談所ごとの個別ページ(Google Places API実測データのみ・捏造ゼロ)。
 * 評点・件数はGoogleマップの実数をそのまま掲載し、当サイトの評価ではないことを明示。
 * 未提携の相談所の外部リンクはGoogleマップに限定(方針)。提携ブランドは自社レビューへ誘導。
 * 都道府県はDB_PREFS(tokyo/osaka…)を横断してslugから解決する。
 */

type Resolved = { a: Agency; db: AgencyDb; pref: string; prefName: string; areaHref: string };

export function generateStaticParams() {
  const params: { slug: string }[] = [];
  for (const { pref } of DB_PREFS) {
    const db = loadAgencyDb(pref);
    if (!db) continue;
    for (const a of indexableAgencies(db)) params.push({ slug: a.slug });
  }
  return params;
}

function resolve(slug: string): Resolved | null {
  for (const { pref, prefName, areaHref } of DB_PREFS) {
    const db = loadAgencyDb(pref);
    if (!db) continue;
    const a = indexableAgencies(db).find((x) => x.slug === slug);
    if (a) return { a, db, pref, prefName, areaHref };
  }
  return null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = resolve(decodeURIComponent(slug));
  if (!r) return {};
  const { a, db, prefName } = r;
  return {
    title: `${a.name}の口コミ評点・所在地【Googleマップ実数】${prefName}の結婚相談所`,
    description: `${a.name}(${prefName})のGoogleマップ実データ: 評点${a.rating ?? "－"}・口コミ${a.count}件(${db.surveyedAt}取得)。所在地・周辺の結婚相談所・選び方ガイドまで。評点は当サイトの評価ではなくGoogleマップの実数です。`,
    alternates: { canonical: `https://mu-su-bi-ba.com/agency/${encodeURIComponent(a.slug)}/` },
  };
}

export default async function AgencyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = resolve(decodeURIComponent(slug));
  if (!r) return null;
  const { a, db, prefName, areaHref } = r;
  const brand = findBrand(a.name);
  const primaryArea = a.areas[0];
  const nearby = indexableAgencies(db)
    .filter((x) => x.slug !== a.slug && x.areas.includes(primaryArea))
    .slice(0, 5);

  const faqs = [
    {
      q: `${a.name}の評点${a.rating ?? "－"}は誰がつけた評価ですか？`,
      a: `当サイトの評価ではなく、Googleマップに投稿された利用者の口コミ評点の実数です(${db.surveyedAt}取得時点で評点${a.rating ?? "－"}・${a.count}件)。当サイトでは口コミの創作・独自採点は行っていません。最新の評点・口コミ本文はGoogleマップでご確認ください。`,
    },
    {
      q: "料金やサービス内容はどこで確認できますか？",
      a: "料金・会員数・サポート内容は各相談所の公式情報・無料相談でご確認ください。結婚相談所の一般的な料金構造(初期費用・月会費・成婚料)と総額の考え方は当サイトの料金相場ガイドで解説しています。",
    },
  ];

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Breadcrumb items={[{ name: `${prefName}の結婚相談所`, href: areaHref }, { name: a.name }]} />
      <h1 className="text-2xl sm:text-3xl font-bold text-[#2C2C2C] mt-4 mb-3">{a.name}の口コミ評点・基本情報【Googleマップ実数】</h1>
      <p className="text-sm text-[#555] leading-relaxed mb-6">
        {prefName}の結婚相談所「{a.name}」のGoogleマップ実データをまとめたページです({db.surveyedAt}取得)。
        評点・口コミ件数は<strong>Googleマップの実数</strong>で、当サイトによる評価・創作ではありません。
      </p>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        <div className="bg-[#8B7355] text-white px-6 py-3.5 font-normal tracking-widest">基本情報(Googleマップ・{db.surveyedAt}取得)</div>
        <div className="divide-y divide-gray-50 text-sm">
          <div className="flex px-6 py-3.5"><span className="w-32 shrink-0 font-medium text-[#2C2C2C]/50">名称</span><span className="text-[#2C2C2C]">{a.name}</span></div>
          <div className="flex px-6 py-3.5"><span className="w-32 shrink-0 font-medium text-[#2C2C2C]/50">Gマップ評点</span><span className="text-[#2C2C2C] font-semibold">{a.rating ?? "－"} <span className="font-normal text-[#2C2C2C]/60">(口コミ{a.count}件)</span></span></div>
          <div className="flex px-6 py-3.5"><span className="w-32 shrink-0 font-medium text-[#2C2C2C]/50">所在地</span><span className="text-[#2C2C2C]">{shortAddress(a.address)}</span></div>
          <div className="flex px-6 py-3.5"><span className="w-32 shrink-0 font-medium text-[#2C2C2C]/50">検索エリア</span><span className="text-[#2C2C2C]">{a.areas.map((ar) => AREA_LABELS[ar] || ar).join("・")}</span></div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        {a.mapsUri && (
          <a href={a.mapsUri} target="_blank" rel="nofollow noopener noreferrer" className="inline-block rounded-lg bg-[#8B7355] px-6 py-3 text-sm font-bold text-white text-center hover:opacity-90">
            Googleマップで口コミ・地図を見る
          </a>
        )}
        {brand && (
          <Link href={brand.href} className="inline-block rounded-lg border border-[#8B7355] px-6 py-3 text-sm font-bold text-[#8B7355] text-center hover:bg-[#FAF7F2]">
            {brand.label}(当サイト)
          </Link>
        )}
      </div>

      {brand && (
        <p className="text-sm text-[#555] leading-relaxed mb-8 bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-4">
          この相談所は当サイトでレビュー記事を公開しているブランドの店舗です。料金体系・向いている人の詳細は<Link href={brand.href} className="text-[#8B7355] underline">{brand.label}</Link>をご覧ください。
        </p>
      )}

      <section className="mb-10">
        <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">はじめて結婚相談所を検討する方へ</h2>
        <p className="text-sm text-[#555] leading-relaxed mb-3">
          結婚相談所は「無料相談→入会(独身証明書等の書類)→プロフィール作成→お見合い→交際→成婚退会」という流れで進みます。
          費用は①入会時②毎月③成婚退会時の3タイミングで発生するのが標準形で、総額で比較するのが失敗しないコツです。
        </p>
        <p className="text-sm">
          <Link href="/knowledge/flow/" className="text-[#8B7355] underline">→ 入会から成婚までの流れ(初めての方向け)</Link>
          <span className="mx-2 text-gray-300">|</span>
          <Link href="/knowledge/cost/" className="text-[#8B7355] underline">→ 料金相場と総額の考え方</Link>
          <span className="mx-2 text-gray-300">|</span>
          <Link href="/knowledge/how-to-choose/" className="text-[#8B7355] underline">→ 選び方ガイド</Link>
        </p>
      </section>

      {nearby.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">{AREA_LABELS[primaryArea] || "同じエリア"}の他の結婚相談所</h2>
          <ul className="space-y-2 text-sm">
            {nearby.map((x) => (
              <li key={x.slug} className="bg-white rounded-lg border border-gray-100 px-4 py-3 flex flex-wrap items-center gap-x-3">
                <Link href={`/agency/${encodeURIComponent(x.slug)}/`} className="font-medium text-[#8B7355] underline">{x.name}</Link>
                <span className="text-[#2C2C2C]/60">評点{x.rating ?? "－"}・口コミ{x.count}件</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mb-10">
        <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">よくある質問</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="rounded-lg border border-gray-100 bg-white p-4">
              <summary className="cursor-pointer text-sm font-medium text-[#2C2C2C]/80">{f.q}</summary>
              <p className="text-sm text-[#2C2C2C]/60 leading-relaxed mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <p className="text-sm mb-8">
        <Link href={areaHref} className="text-[#8B7355] underline">→ {prefName}の結婚相談所一覧に戻る</Link>
        <span className="mx-2 text-gray-300">|</span>
        <Link href="/compare/" className="text-[#8B7355] underline">→ 大手結婚相談所の比較</Link>
      </p>

      <p className="text-xs text-[#999] leading-relaxed">
        ※出典: Googleマップ(Google Places API・{db.surveyedAt}時点)。評点・口コミ件数はその後変動する場合があります。掲載情報は実在確認できた店舗の実データのみで、料金・サービス内容の最新情報は各相談所へ直接ご確認ください。
      </p>
    </main>
  );
}
