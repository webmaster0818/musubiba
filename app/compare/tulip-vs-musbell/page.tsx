import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import A8Banner from "@/components/A8Banner";

export const metadata: Metadata = {
  title: "ブライダルチューリップとムスベルどっちがいい？料金・成婚率・サポートを徹底比較【2026年】",
  description:
    "ブライダルチューリップとムスベルを、初期費用・月会費・成婚料・お見合い料・1年総額・成婚率の公表定義・店舗/オンライン対応で中立に比較。成婚まで含めた総額を抑えやすいチューリップと、初期費用が低く全国で活動しやすいムスベル、どちらが自分に合うかを検証済みの公表料金ベースで整理します（最新の料金・条件は各公式サイトおよび無料相談でご確認ください）。",
  alternates: { canonical: "/compare/tulip-vs-musbell/" },
};

// 料金は当サイト各レビューの検証値（チューリップ=2026年7月公式確認・税込／ムスベル=2026年時点の調査値）。最新・正確な料金は各公式サイトでご確認ください。
type Row = { item: string; tulip: string; musbell: string };
const rows: Row[] = [
  { item: "タイプ", tulip: "仲人型（IBJ・SCRUM・CONNECT-shipの3連盟加盟）", musbell: "ハイブリッド型（仲人＋データマッチング・複数連盟加盟）" },
  { item: "店舗・オンライン対応", tulip: "高田馬場サロン1拠点＋オンライン対応", musbell: "全国に拠点を展開（拠点数は公式参照）＋オンライン対応" },
  { item: "会員数", tulip: "紹介可能会員 約19万名（3連盟合計・2026年1月時点の公式表記）", musbell: "複数連盟加盟で業界最大級（人数は公式参照・要確認）" },
  { item: "初期費用（入会金）", tulip: "105,000円（42歳以上プランは150,800円）", musbell: "33,000円〜（プランにより115,500円〜の場合あり）" },
  { item: "月会費", tulip: "7,550円〜12,950円（プランにより異なる）", musbell: "15,400円〜（要確認）" },
  { item: "お見合い料", tulip: "6,100円または8,800円／件（都度払い）", musbell: "別途かかる場合あり（プラン・連盟により異なる・要確認）" },
  { item: "成婚料", tulip: "180,000円（全プラン共通）", musbell: "330,000円（成婚退会時・要確認）" },
  { item: "成婚率の公表", tulip: "60%以上（自社公称・定義公開：成婚退会者数÷全退会者数）", musbell: "非公開" },
];

const totals = [
  { label: "1年活動の総額目安（成婚なし）", tulip: "195,600円〜（Aプラン・お見合い料別）", musbell: "約217,800円〜" },
  { label: "1年で成婚した場合の総額目安", tulip: "約375,600円〜（お見合い料別）", musbell: "約547,800円〜" },
];

const faqs = [
  {
    q: "ブライダルチューリップとムスベル、料金が安いのはどっち？",
    a: "成婚まで含めた総額はブライダルチューリップのほうが抑えやすい目安です。成婚料がチューリップ180,000円・ムスベル330,000円と15万円差があり、1年で成婚した場合の総額目安はチューリップ約375,600円〜（お見合い料別）、ムスベル約547,800円〜です。一方、初期費用はムスベル33,000円〜（チューリップは105,000円）のほうが低く、始めやすさではムスベルに分があります。チューリップはお見合い料（6,100円または8,800円／件）が都度かかるため、活動量が多い人は件数込みで見積もってください（各公表料金にもとづく目安・要確認）。",
  },
  {
    q: "出会いの数（会員数）で選ぶならどっち？",
    a: "どちらも複数連盟加盟型で母集団は広いのが特徴です。ブライダルチューリップはIBJ・SCRUM・CONNECT-shipの3連盟で紹介可能会員約19万名（2026年1月時点の公式表記）と内訳を開示しています。ムスベルはBIU・良縁ネットなど複数連盟加盟で業界最大級の会員基盤としていますが、正確な人数は公式サイトでの確認が必要です。内訳の透明性で選ぶならチューリップ、仲人紹介とデータ検索を併用した幅広い探し方で選ぶならムスベルが目安です。",
  },
  {
    q: "地方在住で使いやすいのはどっち？",
    a: "対面サポート重視ならムスベルです。全国に拠点を展開しており、地方在住でも最寄り拠点で面談を受けられます。ブライダルチューリップの対面拠点は高田馬場の1ヶ所のみですが、面談・活動はオンラインに対応しており、面談回数無制限＋サブカウンセラー体制のサポートを遠方からも受けられます。オンライン完結で問題なければチューリップも十分選択肢になります。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function TulipVsMusbellPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "料金比較", href: "/compare/" }, { name: "ブライダルチューリップとムスベルを比較" }]} />

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-light mb-4 tracking-wide text-[#2C2C2C]">
          ブライダルチューリップとムスベルを比較【2026年】
        </h1>
        <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
          どちらも複数連盟に加盟し仲人サポートが受けられる<strong>ブライダルチューリップ</strong>（3連盟・高田馬場＋オンライン）と<strong>ムスベル</strong>（複数連盟・全国拠点のハイブリッド型）を、料金総額・成婚率の公表定義・サポート形式で中立に比較しました。成婚まで含めた総額を抑えたいか、初期費用の低さと全国対応で始めやすさを取るかで、向き不向きが分かれます。どちらも無料相談から始められるため、迷ったら両方で総額見積もりを取って比べるのが確実です。
        </p>
        <p className="text-xs text-[#2C2C2C]/50 mb-8">
          ※料金は当サイト各レビューの検証値です（ブライダルチューリップ=2026年7月に公式サイトで確認・税込／ムスベル=2026年時点の調査値）。プラン・連盟・拠点により異なるため、最新の料金・契約条件は各公式サイトおよび無料相談で必ずご確認ください。
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">基本スペック比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">ブライダルチューリップ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">ムスベル</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.item} className="border-t border-gray-50 align-top">
                    <td className="px-4 py-3 font-medium text-[#2C2C2C]/70 whitespace-nowrap">{r.item}</td>
                    <td className="px-4 py-3 text-center">{r.tulip}</td>
                    <td className="px-4 py-3 text-center">{r.musbell}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">総額の目安を比較（公表料金ベース）</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#FAF7F2]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">ケース</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">ブライダルチューリップ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">ムスベル</th>
                </tr>
              </thead>
              <tbody>
                {totals.map((t) => (
                  <tr key={t.label} className="border-t border-gray-50">
                    <td className="px-4 py-3 font-medium text-[#2C2C2C]/70">{t.label}</td>
                    <td className="px-4 py-3 text-center">{t.tulip}</td>
                    <td className="px-4 py-3 text-center">{t.musbell}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※総額は「初期費用＋月会費×12ヶ月＋成婚料」で試算した公表料金ベースの目安です（チューリップは42歳未満のAプラン基準・2026年7月公式確認、ムスベルは2026年時点の調査値）。チューリップはお見合い料（6,100円または8,800円／件）が都度かかるため、例えばお見合い月1件（年12件）なら年間73,200円〜105,600円が上乗せされます。ムスベルもお見合い料などが別途かかる場合があります。正確な総額は各社の無料相談での見積もりでご確認ください。成婚料の差（180,000円 vs 330,000円）が大きいため、成婚まで進んだ場合の総額はチューリップが抑えやすい傾向です。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">成婚率の「公表定義」で比べる</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
            ブライダルチューリップは<strong>成婚率60%以上・1年以内成婚率70%以上</strong>（いずれも自社公称）を公表し、算出定義（成婚率＝成婚退会者数÷全退会者数、2010年〜2026年1月の実績）まで開示しています。定義次第で数値が大きく変わる指標のため、定義を明示している点は判断材料として評価できます。一方、<strong>ムスベルは成婚率を非公開</strong>としています。非公開が悪いわけではありませんが、数字で比較したい場合は無料相談で「直近1年の成婚退会数」を直接質問するのがおすすめです。
          </p>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※チューリップの成婚率は第三者機関の検証値ではなく自社公称値です。分母が「全退会者」であり「入会者全体」ではない点にもご注意ください。
          </p>
        </section>

        <section className="mb-10 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-medium text-[#8B7355] mb-3 tracking-wider">ブライダルチューリップが向いている人</h2>
            <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>成婚まで含めた総額を抑えたい（成婚料180,000円）</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>月会費7,550円〜の低め月額で仲人型を始めたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>成婚率の定義など数字の根拠を開示する相談所を選びたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>面談回数無制限＋サブカウンセラーの体制で進めたい（オンライン対応）</li>
            </ul>
            <p className="mt-4 text-sm"><Link href="/review/bridal-tulip/" className="text-[#8B7355] underline">ブライダルチューリップの評判・料金を詳しく見る</Link></p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-medium text-[#8B7355] mb-3 tracking-wider">ムスベルが向いている人</h2>
            <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>初期費用33,000円〜で低く始めたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>地方在住で全国拠点の対面サポートを受けたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>仲人の紹介とデータ検索を併用して幅広く探したい</li>
            </ul>
            <p className="mt-4 text-sm"><Link href="/review/musbell/" className="text-[#8B7355] underline">ムスベルの評判・料金を詳しく見る</Link></p>
          </div>
        </section>

        <A8Banner ad="tulip" />

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white border border-gray-100 rounded-lg p-4">
                <summary className="font-medium text-[#2C2C2C] cursor-pointer">{f.q}</summary>
                <p className="text-sm text-[#2C2C2C]/70 mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-lg bg-[#FAF7F2] border border-gray-100 p-6">
          <h2 className="font-medium mb-3">関連ページ</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/review/bridal-tulip/" className="text-[#8B7355] underline">ブライダルチューリップの評判・料金を見る（3連盟・成婚率の定義まで検証）</Link></li>
            <li><Link href="/review/musbell/" className="text-[#8B7355] underline">ムスベルの評判・口コミ・料金を見る（複数連盟・全国拠点）</Link></li>
            <li><Link href="/compare/folli-vs-musbell/" className="text-[#8B7355] underline">フォリパートナーとムスベルを比較する（料金・成婚率・サポート）</Link></li>
            <li><Link href="/compare/musbell-vs-ringbell/" className="text-[#8B7355] underline">ムスベルとリングベルを比較する（料金総額・対象年代・特徴）</Link></li>
            <li><Link href="/compare/cheap/" className="text-[#8B7355] underline">安い結婚相談所を1年総額で比較する（初期費用＋月会費＋成婚料）</Link></li>
            <li><Link href="/compare/" className="text-[#8B7355] underline">結婚相談所の料金比較（13社一覧）を見る</Link></li>
          </ul>
        </section>
      </main>
    </>
  );
}
