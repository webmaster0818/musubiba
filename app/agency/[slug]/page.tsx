import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import PartnerPicks from "@/components/PartnerPicks";
import { loadAgencyDb, indexableAgencies, findBrand, sameBrandAgencies, shortAddress, AREA_LABELS, DB_PREFS, type Agency, type AgencyDb } from "@/lib/agencies";
import { agencyOfficial, officialCheckedLabel, type AgencyOfficial, type Sourced } from "@/data/agency-official";

/*
 * 相談所ごとの個別ページ(Google Places API実測データのみ・捏造ゼロ)。
 * 評点・件数はGoogleマップの実数をそのまま掲載し、当サイトの評価ではないことを明示。
 * 未提携の相談所の外部リンクはGoogleマップに限定(方針)。提携ブランドは自社レビューへ誘導。
 * 都道府県はDB_PREFS(tokyo/osaka…)を横断してslugから解決する。
 */

function SourceLine({ url }: { url: string }) {
  return <span className="block text-xs text-[#999] mt-1 break-all">出典: {url}</span>;
}

function OfficialInfo({ name, o }: { name: string; o: AgencyOfficial }) {
  const rows: { label: string; s: Sourced }[] = [];
  if (o.federation) rows.push({ label: "加盟連盟", s: o.federation });
  if (o.hours) rows.push({ label: o.hours.label ?? "営業時間", s: o.hours });
  if (o.holiday) rows.push({ label: "定休日", s: o.holiday });
  return (
    <section className="mb-8">
      <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">{name}の公式情報</h2>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-3">
        <div className="bg-[#A08447] text-white px-6 py-3.5 font-normal tracking-widest">公式サイトの記載({officialCheckedLabel(o)})</div>
        <div className="divide-y divide-gray-50 text-sm">
          {o.note && (
            <div className="px-6 py-3.5 text-[#2C2C2C]">{o.note.value}<SourceLine url={o.note.sourceUrl} /></div>
          )}
          {rows.map((r) => (
            <div key={r.label} className="flex px-6 py-3.5">
              <span className="w-32 shrink-0 font-medium text-[#2C2C2C]/50">{r.label}</span>
              <span className="text-[#2C2C2C]">{r.s.value}<SourceLine url={r.s.sourceUrl} /></span>
            </div>
          ))}
        </div>
      </div>
      {o.fees && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-3">
          <div className="bg-[#FAF7F2] text-[#2C2C2C] px-6 py-3.5 font-medium border-b border-[#E5DCCF]">料金(公式サイトの料金表より)</div>
          {o.fees.plans.map((p) => (
            <div key={p.name} className="border-b border-gray-100 last:border-b-0">
              <p className="px-6 pt-3.5 pb-1 text-sm font-semibold text-[#A08447]">{p.name}</p>
              <div className="divide-y divide-gray-50 text-sm">
                {p.rows.map((r) => (
                  <div key={r.label} className="flex px-6 py-2.5">
                    <span className="w-32 shrink-0 font-medium text-[#2C2C2C]/50">{r.label}</span>
                    <span className="text-[#2C2C2C]">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="px-6 py-3 text-xs text-[#999] leading-relaxed bg-[#FAF7F2]">
            ※{o.fees.taxNote}
            <span className="block break-all">出典: {o.fees.sourceUrl}</span>
          </p>
        </div>
      )}
      <p className="text-xs text-[#999] leading-relaxed">
        ※上記は当サイトが公式サイトで確認した記載です。公式サイトで確認できなかった項目は掲載しておりません。料金や営業時間は変更される場合がありますので、ご利用前に公式サイトにて最新情報をご確認ください。
      </p>
    </section>
  );
}

type Resolved ={ a: Agency; db: AgencyDb; pref: string; prefName: string; areaHref: string };

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

// 名称が長い店舗は160字を超えるため、超える場合だけ「所在地、…比較まで。」の一文を省く。
function agencyDescription(a: Agency, prefName: string, surveyedAt: string, hasSameBrand: boolean): string {
  const head = `${a.name}(${prefName})の評判を、Googleマップの実データで確認できます。${surveyedAt}取得時点の評点は${a.rating ?? "－"}、口コミは${a.count}件です。`;
  const tail = "評点は当サイトの評価ではなく、Googleマップに表示される実数です。";
  const full = `${head}所在地や、同じエリアの相談所${hasSameBrand ? "・同じブランドの他店舗" : ""}との比較も掲載しています。${tail}`;
  return full.length <= 160 ? full : `${head}${tail}`;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = resolve(decodeURIComponent(slug));
  if (!r) return {};
  const { a, db, prefName } = r;
  return {
    // GSC実測(2026-09)では、この種のページへの流入クエリは「◯◯ 評判」「◯◯ レビュー」
    // 「◯◯ 口コミ」の形がほとんどだった。titleに「評判」が入っていなかったため追加し、
    // 検証できる実数(評点・件数)を前に出す。
    title: `${a.name}の評判・口コミ【Googleマップ評点${a.rating ?? "－"}／${a.count}件】${prefName}の結婚相談所`,
    description: agencyDescription(a, prefName, db.surveyedAt, sameBrandAgencies(a.name, a.slug, 1).length > 0),
    alternates: { canonical: `https://mu-su-bi-ba.com/agency/${encodeURIComponent(a.slug)}/` },
  };
}

export default async function AgencyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = resolve(decodeURIComponent(slug));
  if (!r) return null;
  const { a, db, pref, prefName, areaHref } = r;
  const brand = findBrand(a.name);
  const official = agencyOfficial(a.slug);
  const primaryArea = a.areas[0];
  const main = indexableAgencies(db);
  // 常に先頭5件だと上位店舗にしかリンクが集まらず、残りの店舗ページは一覧からしか
  // 張られない(実質孤立)。自店舗の位置から後ろへ巡回して5件取り、全店舗に導線が回るようにする。
  const inArea = main.filter((x) => x.areas.includes(primaryArea));
  const selfIdx = inArea.findIndex((x) => x.slug === a.slug);
  const nearby = Array.from({ length: Math.min(5, inArea.length - 1) }, (_, i) => inArea[(selfIdx + 1 + i) % inArea.length]);
  const sameBrand = sameBrandAgencies(a.name, a.slug, 8);

  // 実測DBからの機械集計(創作値なし): 県内順位・平均評点・件数中央値
  const sorted = [...main].sort((x, y) => (y.count || 0) - (x.count || 0));
  const rank = sorted.findIndex((x) => x.slug === a.slug) + 1;
  // 県内の口コミ件数順で前後の店舗(巡回)。エリアに1店舗しかない店舗にも導線が届くようにする。
  const prevByCount = sorted.length > 1 ? sorted[(rank - 2 + sorted.length) % sorted.length] : null;
  const nextByCount = sorted.length > 2 ? sorted[rank % sorted.length] : null;
  const ratings = main.filter((x) => typeof x.rating === "number").map((x) => x.rating as number);
  const avgRating = ratings.length ? ratings.reduce((s, v) => s + v, 0) / ratings.length : 0;
  const counts = main.map((x) => x.count || 0).sort((x, y) => x - y);
  const medCount = counts.length ? (counts.length % 2 ? counts[(counts.length - 1) / 2] : Math.round((counts[counts.length / 2 - 1] + counts[counts.length / 2]) / 2)) : 0;
  const mapQuery = encodeURIComponent(`${a.name} ${shortAddress(a.address)}`);

  const faqs = [
    {
      q: `${a.name}の評点${a.rating ?? "－"}は、誰が付けた評価ですか？`,
      a: `当サイトの評価ではなく、Googleマップに投稿された利用者の口コミ評点の実数です(${db.surveyedAt}取得時点で評点${a.rating ?? "－"}、口コミ${a.count}件)。当サイトでは口コミの創作・独自採点は行っていません。最新の評点および口コミ本文は、Googleマップにてご確認ください。`,
    },
    {
      q: "料金やサービス内容はどこで確認できますか？",
      a: "料金・会員数・サポート内容は、各相談所の公式サイトまたは無料相談にてご確認ください。結婚相談所の一般的な料金構造(初期費用・月会費・成婚料)と総額の考え方は、当サイトの料金相場ガイドで解説しています。",
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
        掲載している評点・口コミ件数は<strong>Googleマップに表示される実数</strong>で、当サイトによる評価や創作ではありません。
      </p>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        <div className="bg-[#A08447] text-white px-6 py-3.5 font-normal tracking-widest">基本情報(Googleマップ・{db.surveyedAt}取得)</div>
        <div className="divide-y divide-gray-50 text-sm">
          <div className="flex px-6 py-3.5"><span className="w-32 shrink-0 font-medium text-[#2C2C2C]/50">名称</span><span className="text-[#2C2C2C]">{a.name}</span></div>
          <div className="flex px-6 py-3.5"><span className="w-32 shrink-0 font-medium text-[#2C2C2C]/50">Googleマップ評点</span><span className="text-[#2C2C2C] font-semibold">{a.rating ?? "－"} <span className="font-normal text-[#2C2C2C]/60">(口コミ{a.count}件)</span></span></div>
          <div className="flex px-6 py-3.5"><span className="w-32 shrink-0 font-medium text-[#2C2C2C]/50">所在地</span><span className="text-[#2C2C2C]">{shortAddress(a.address)}</span></div>
          <div className="flex px-6 py-3.5"><span className="w-32 shrink-0 font-medium text-[#2C2C2C]/50">検索エリア</span><span className="text-[#2C2C2C]">{a.areas.map((ar) => AREA_LABELS[ar] || ar).join("・")}</span></div>
        </div>
      </div>

      {/* 公式情報(2026-10-30)。data/agency-official.ts に登録した店舗だけに出す(未登録の店舗は何も出力しない)。
          出典URLは文字で示し、リンクにはしない(未提携社の外部リンクはGoogleマップに限定する方針のため)。 */}
      {official && <OfficialInfo name={a.name} o={official} />}

      <section className="mb-8">
        <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">データで見る{a.name}</h2>
        <div className="grid grid-cols-3 gap-3 mb-3">
          <div className="bg-white rounded-xl border border-gray-100 p-4 text-center">
            <p className="text-xl font-bold text-[#A08447]">{rank}位<span className="text-xs font-normal text-[#555]">/{main.length}件</span></p>
            <p className="text-xs text-[#555] mt-1">{prefName}内の口コミ件数順位</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4 text-center">
            <p className="text-xl font-bold text-[#A08447]">{a.rating ?? "－"}<span className="text-xs font-normal text-[#555]">（平均{avgRating.toFixed(2)}）</span></p>
            <p className="text-xs text-[#555] mt-1">評点({prefName}の収録平均と比較)</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-4 text-center">
            <p className="text-xl font-bold text-[#A08447]">{a.count}件<span className="text-xs font-normal text-[#555]">（中央値{medCount}件）</span></p>
            <p className="text-xs text-[#555] mt-1">口コミ件数({prefName}の中央値と比較)</p>
          </div>
        </div>
        <p className="text-xs text-[#999] leading-relaxed mb-4">
          ※当サイトが{prefName}で実在を確認した、口コミ3件以上の{main.length}件({db.surveyedAt}取得)を対象に、機械的に集計しています。評点は高評価が集まりやすい傾向があるため、件数(実績の量)と口コミ本文をあわせてご確認いただくことをおすすめします。
        </p>
        {(prevByCount || nextByCount) && (
          <p className="text-sm text-[#555] leading-relaxed mb-4">
            {prefName}内で口コミ件数が近い相談所:
            {prevByCount && (
              <> <Link href={`/agency/${encodeURIComponent(prevByCount.slug)}/`} className="text-[#A08447] underline">{prevByCount.name}</Link>({prevByCount.count}件)</>
            )}
            {prevByCount && nextByCount && <span className="mx-2 text-gray-300">|</span>}
            {nextByCount && (
              <><Link href={`/agency/${encodeURIComponent(nextByCount.slug)}/`} className="text-[#A08447] underline">{nextByCount.name}</Link>({nextByCount.count}件)</>
            )}
          </p>
        )}
        <div className="rounded-xl overflow-hidden border border-gray-100">
          <iframe
            src={`https://maps.google.com/maps?q=${mapQuery}&output=embed&z=16`}
            className="w-full h-64"
            loading="lazy"
            title={`${a.name}の地図`}
          />
        </div>
      </section>

      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        {a.mapsUri && (
          <a href={a.mapsUri} target="_blank" rel="nofollow noopener noreferrer" className="inline-block rounded-lg bg-[#A08447] px-6 py-3 text-sm font-bold text-white text-center hover:opacity-90">
            Googleマップで口コミ・地図を見る
          </a>
        )}
        {brand && (
          <Link href={brand.href} className="inline-block rounded-lg border border-[#A08447] px-6 py-3 text-sm font-bold text-[#A08447] text-center hover:bg-[#FAF7F2]">
            {brand.label}(当サイト)
          </Link>
        )}
      </div>

      {brand && (
        <p className="text-sm text-[#555] leading-relaxed mb-8 bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-4">
          この相談所は当サイトでレビュー記事を公開しているブランドの店舗です。料金体系や、どのような方に適しているかについては<Link href={brand.href} className="text-[#A08447] underline">{brand.label}</Link>をご覧ください。
        </p>
      )}

      {/* 提携先への導線(2026-10-08)。GSC上、このサイトの流入の76%がこの個別ページに
          来ているのに受け皿が無かったため設置。未提携社の外部リンクを出さない方針は不変。 */}
      <PartnerPicks pref={pref} seed={a.slug} prefName={prefName} agencyName={a.name} selfReviewHref={brand?.href} />

      <section className="mb-10">
        <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">はじめて結婚相談所を検討する方へ</h2>
        <p className="text-sm text-[#555] leading-relaxed mb-3">
          結婚相談所は「無料相談→入会(独身証明書等の書類)→プロフィール作成→お見合い→交際→成婚退会」という流れで進みます。
          費用は①入会時、②毎月、③成婚退会時の3つの時点で発生するのが一般的なため、総額で比較することをおすすめします。
        </p>
        <p className="text-sm">
          <Link href="/knowledge/flow/" className="text-[#A08447] underline">→ 入会から成婚までの流れ(初めての方向け)</Link>
          <span className="mx-2 text-gray-300">|</span>
          <Link href="/knowledge/cost/" className="text-[#A08447] underline">→ 料金相場と総額の考え方</Link>
          <span className="mx-2 text-gray-300">|</span>
          <Link href="/knowledge/how-to-choose/" className="text-[#A08447] underline">→ 選び方ガイド</Link>
        </p>
      </section>

      {nearby.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">{AREA_LABELS[primaryArea] || "同じエリア"}の他の結婚相談所</h2>
          <ul className="space-y-2 text-sm">
            {nearby.map((x) => (
              <li key={x.slug} className="bg-white rounded-lg border border-gray-100 px-4 py-3 flex flex-wrap items-center gap-x-3">
                <Link href={`/agency/${encodeURIComponent(x.slug)}/`} className="font-medium text-[#A08447] underline">{x.name}</Link>
                <span className="text-[#2C2C2C]/60">評点{x.rating ?? "－"}・口コミ{x.count}件</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 同じブランドの他店舗。GSC上、流入は「ツヴァイ 京都店」「ツヴァイ 仙台店」のように
          同ブランドの別店舗名で分散して発生しているため、ブランド横断で回遊できるようにする。
          件数はGoogleマップ実数。 */}
      {sameBrand.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">同じブランドの他店舗</h2>
          <p className="text-sm text-[#2C2C2C]/60 leading-relaxed mb-3">
            同じブランドでも、店舗によって口コミの評点・件数は異なります（Googleマップ実数・{db.surveyedAt}取得）。
          </p>
          <ul className="space-y-2 text-sm">
            {sameBrand.map((x) => (
              <li key={x.slug} className="bg-white rounded-lg border border-gray-100 px-4 py-3 flex flex-wrap items-center gap-x-3">
                <Link href={`/agency/${encodeURIComponent(x.slug)}/`} className="font-medium text-[#A08447] underline">{x.name}</Link>
                <span className="text-xs text-[#2C2C2C]/45">{x.prefName}</span>
                <span className="text-[#2C2C2C]/60">評点{x.rating ?? "－"}・口コミ{x.count}件</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mb-10">
        <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">よくある質問</h2>
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
        <Link href={areaHref} className="text-[#A08447] underline">→ {prefName}の結婚相談所一覧に戻る</Link>
        <span className="mx-2 text-gray-300">|</span>
        <Link href="/compare/" className="text-[#A08447] underline">→ 大手結婚相談所の比較</Link>
      </p>

      <p className="text-xs text-[#999] leading-relaxed">
        ※出典: Googleマップ(Google Places API・{db.surveyedAt}時点)。評点・口コミ件数はその後変動する場合があります。掲載しているのは実在を確認できた店舗の実データのみです。料金・サービス内容の最新情報は、各相談所へ直接ご確認ください。
      </p>
    </main>
  );
}
