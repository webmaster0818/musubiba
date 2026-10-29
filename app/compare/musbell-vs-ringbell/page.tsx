import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { FEE_CHECKED, jpDate, planFee, yen, type PlanFee } from "@/data/fees";

// 料金は共通データ data/fees.ts（PLAN_FEES・FEE_CHECKED）から計算する。金額をこのページに直書きしない。
// 2026-10-26: リングベルを公式サイト（ringbell-marriage.com）で確認し、旧調査値（月会費13,200円〜・入会金88,000円〜・成婚料220,000円・仲人型/地域密着）を公式の記載に置き換え。
const mC = planFee("musbell", "カジュアルコース");
const rB = planFee("ringbell", "ベーシック");
const rH = planFee("ringbell", "ハイブリッド");
const rC = planFee("ringbell", "コミットメント");
const y1 = (p: PlanFee) => p.initial + p.monthly * 12;
const musbellChecked = jpDate(FEE_CHECKED["musbell"].date);
const ringbellChecked = jpDate(FEE_CHECKED["ringbell"].date);

export const metadata: Metadata = {
  title: "ムスベルとリングベルの比較【2026年】料金総額・対象年代・特徴の違い",
  description:
    "ムスベルとリングベルを、月会費・初期費用・成婚料・総額目安・対象年代・タイプの観点から中立的に比較しています。全国に拠点がある複数連盟加盟のムスベルと、IBJ加盟のオンライン結婚相談所リングベルの違いを、各公式サイトで確認した料金にもとづいて整理しています。",
  alternates: { canonical: "/compare/musbell-vs-ringbell/" },
};

type Row = { item: string; musbell: string; ringbell: string };
const rows: Row[] = [
  { item: "タイプ", musbell: "ハイブリッド型（仲人＋データマッチング）", ringbell: "IBJ加盟のオンライン結婚相談所（担当コンシェルジュ制）" },
  { item: "対応エリア", musbell: "全国対応（拠点数は公式サイト参照）", ringbell: "全国（手続きからサポートまでオンラインで完結）" },
  { item: "会員数", musbell: "94,763人（JBU・BIU・IBJ・TMSの4連盟・公式掲載の2024年10月時点の値）", ringbell: "IBJの会員111,160名（2026年9月末時点・公式記載）。他連盟はオプションで追加可能" },
  { item: "初期費用", musbell: `${yen(mC.initial)}〜（初期費用33,000円＋入会金148,500円・カジュアルコース）`, ringbell: `入会金${yen(rB.initial)}（ベーシック）／${yen(rH.initial)}（ハイブリッド）／${yen(rC.initial)}（コミットメント）` },
  { item: "月会費", musbell: "16,500円〜（エクセレントコースは17,000円）", ringbell: `${yen(rB.monthly)}（全プラン共通）` },
  { item: "お見合い料", musbell: "カジュアルコースは11,000円/回（他コースは無料）", ringbell: "なし（公式記載）" },
  { item: "成婚料", musbell: `${yen(mC.success)}（成婚退会時・全コース共通）`, ringbell: `${yen(rB.success)}（ベーシック）／${yen(rH.success)}（ハイブリッド・コミットメント）` },
  { item: "対象年代", musbell: "20〜60代（中心は30代〜40代）", ringbell: "入会資格は男性20〜44歳・女性20〜39歳（男性は年収500万円以上）" },
  { item: "成婚率", musbell: "非公開", ringbell: "54.8%（担当コンシェルジュが付くIBJ系プランの入会者のうち、2026年8月時点までの退会者に占める成婚退会者の割合・自社集計）" },
];

const totals = [
  { label: "1年活動の総額目安（成婚なし）", musbell: `約${yen(y1(mC))}〜`, ringbell: `約${yen(y1(rB))}（ベーシック）／約${yen(y1(rH))}（ハイブリッド）／約${yen(y1(rC))}（コミットメント）` },
  { label: "1年で成婚した場合の総額目安", musbell: `約${yen(y1(mC) + mC.success)}〜`, ringbell: `約${yen(y1(rB) + rB.success)}（ベーシック）／約${yen(y1(rH) + rH.success)}（ハイブリッド）／約${yen(y1(rC) + rC.success)}（コミットメント）` },
];

const faqs = [
  {
    q: "ムスベルとリングベルでは、料金が安くなるのはどちらですか？",
    a: `各公式サイトの料金では、リングベルのベーシック・ハイブリッドプランのほうが安くなる目安です。1年で成婚した場合の総額は、ムスベル（カジュアルコース）が約${yen(y1(mC) + mC.success)}〜、リングベルがベーシック約${yen(y1(rB) + rB.success)}・ハイブリッド約${yen(y1(rH) + rH.success)}・コミットメント約${yen(y1(rC) + rC.success)}です。ただし、リングベルのコミットメントプランは入会金が${yen(rC.initial)}のため、成婚しないまま1年活動した場合の総額（約${yen(y1(rC))}）はムスベルのカジュアルコース（約${yen(y1(mC))}〜・お見合い料を除く）を上回ります。ムスベルのカジュアルコースはお見合い1回ごとに11,000円がかかり、リングベルはお見合い料がかかりません。料金はムスベルが${musbellChecked}、リングベルが${ringbellChecked}に公式サイトで確認した値です。`,
  },
  {
    q: "会員数（出会いの多さ）で選ぶ場合、どちらが適していますか？",
    a: "ムスベルは公式サイトでJBU・BIU・IBJ・TMSの4連盟が利用でき、会員数94,763人と掲載しています（2024年10月時点の値）。リングベルはIBJの会員111,160名（2026年9月末時点）と出会えると公式サイトに記載しており、IBJ以外の連盟もオプションで追加できます。両社の数値は時点と集計範囲が異なるため、ご自身の条件に合う会員数は各社の無料相談でご確認ください。",
  },
  {
    q: "地方在住でも利用しやすいのはどちらですか？",
    a: "ムスベルは全国に拠点を展開しており、対面でのサポートを受けやすい相談所です。リングベルは入会手続きからサポートまでオンラインで完結し、お住まいの地域を問わず利用できると公式サイトに記載しています（お見合いは基本的に対面で、双方が合意すればオンラインでも実施できます）。対面での面談を重視する場合はムスベル、来店せずに活動したい場合はリングベルが適しています。",
  },
  {
    q: "最終的にどちらを選べばよいですか？",
    a: "複数連盟の会員から探したい方、対面での仲人サポートを受けたい方、40代後半以降の方にはムスベルが適しています。リングベルの入会資格は男性20〜44歳・女性20〜39歳（男性は年収500万円以上）です。この条件に当てはまり、オンラインで活動したい方、総額を抑えたい方にはリングベルが適しています。どちらも無料相談で総額の見積もりと担当者との相性を確認したうえで決めることをおすすめします。",
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

export default function MusbellVsRingbellPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "料金比較", href: "/compare/" }, { name: "ムスベルとリングベルを比較" }]} />

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-light mb-4 tracking-wide text-[#2C2C2C]">
          ムスベルとリングベルを比較【2026年】
        </h1>
        <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
          <strong>ムスベル</strong>（全国に拠点がある複数連盟加盟のハイブリッド型）と<strong>リングベル</strong>（IBJ加盟のオンライン結婚相談所）を、料金総額・対象年代・特徴の観点から中立的に比較しています。対面での仲人サポートを重視するか、オンラインでの活動と総額の抑えやすさを重視するかで、向き不向きが分かれます。
        </p>
        <p className="text-xs text-[#2C2C2C]/50 mb-8">
          ※料金はムスベルが{musbellChecked}、リングベルが{ringbellChecked}に各公式サイトで確認した値（税込）です。最新の料金・条件は、各公式サイトおよび無料相談でご確認ください。
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">基本スペック比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">ムスベル</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">リングベル</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.item} className="border-t border-gray-50 align-top">
                    <td className="px-4 py-3 font-medium text-[#2C2C2C]/70 whitespace-nowrap">{r.item}</td>
                    <td className="px-4 py-3 text-center">{r.musbell}</td>
                    <td className="px-4 py-3 text-center">{r.ringbell}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">総額の目安を比較（公表料金ベース）</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#FAF7F2]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">ケース</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">ムスベル</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">リングベル</th>
                </tr>
              </thead>
              <tbody>
                {totals.map((t) => (
                  <tr key={t.label} className="border-t border-gray-50">
                    <td className="px-4 py-3 font-medium text-[#2C2C2C]/70">{t.label}</td>
                    <td className="px-4 py-3 text-center">{t.musbell}</td>
                    <td className="px-4 py-3 text-center">{t.ringbell}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※総額は「初期費用＋月会費×12ヶ月＋成婚料」で試算した目安です。ムスベルはカジュアルコース基準で、お見合い料11,000円/回は含みません。リングベルはお見合い料がかかりません（お見合い時の飲食代・交通費は実費）。成婚まで進んだ場合はリングベルのどのプランもムスベルより総額が低くなります。成婚しないまま1年活動した場合は、リングベルのコミットメントプランがムスベルのカジュアルコースを上回ります。
          </p>
        </section>

        <section className="mb-10 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-medium text-[#A08447] mb-3 tracking-wider">ムスベルが向いている方</h2>
            <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>複数の連盟の会員から相手を探したい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>地方在住で全国対応・対面サポートを受けたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>仲人の紹介とデータ検索を併用したい</li>
            </ul>
            <p className="mt-4 text-sm"><Link href="/review/musbell/" className="text-[#A08447] underline">ムスベルの評判・料金を詳しく見る</Link></p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-medium text-[#A08447] mb-3 tracking-wider">リングベルが向いている方</h2>
            <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>来店せずにオンラインで活動したい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>入会資格（男性20〜44歳・女性20〜39歳）に当てはまる</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>成婚まで進んだ場合の総額を抑えたい</li>
            </ul>
            <p className="mt-4 text-sm"><Link href="/review/ringbell/" className="text-[#A08447] underline">リングベルの評判・料金を詳しく見る</Link></p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">よくある質問</h2>
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
            <li><Link href="/review/musbell/" className="text-[#A08447] underline">ムスベルの評判・口コミ・料金を見る</Link></li>
            <li><Link href="/review/ringbell/" className="text-[#A08447] underline">リングベルの評判・口コミ・料金を見る</Link></li>
            <li><Link href="/review/marriage-pro/" className="text-[#A08447] underline">マリッジプロの評判・口コミ・料金を見る（20代・30代専門・新宿）</Link></li>
            <li><Link href="/compare/cheap/" className="text-[#A08447] underline">安い結婚相談所を1年総額で比較する（初期費用＋月会費＋成婚料）</Link></li>
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（24社一覧）を見る</Link></li>
          </ul>
        </section>
      </main>
    </>
  );
}
