import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import A8Banner from "@/components/A8Banner";

export const metadata: Metadata = {
  title: "サンマリエとムスベルの比較｜料金総額・仲人サポート・会員数の違い【2026年】",
  description:
    "サンマリエ（仲人型老舗・お見合い完全代行）とムスベル（複数連盟加盟のハイブリッド型）を比較。1年総額はほぼ同水準（約38〜39万円）で、成婚退会まで含めるとサンマリエが約10万円低い料金構造とサポートの違いを、公式料金にもとづいて整理しています。最新情報は各公式サイトでご確認ください。",
  alternates: { canonical: "/compare/sunmarie-vs-musbell/" },
};

// 料金は当サイト各レビューの検証値（サンマリエ=2026年10月14日・ムスベル=2026年10月23日に公式サイトで確認）。最新・正確な料金は各公式サイトでご確認ください。
type Row = { item: string; sunmarie: string; musbell: string };
const rows: Row[] = [
  { item: "タイプ", sunmarie: "仲人型（1981年創業・40年以上の老舗）", musbell: "ハイブリッド型（仲人＋データマッチング・複数連盟加盟）" },
  { item: "会員数", sunmarie: "101,240名（IBJで活動中・2025年8月時点）", musbell: "94,763人（JBU・BIU・IBJ・TMSの4連盟・公式掲載の2024年10月時点の値）" },
  { item: "拠点", sunmarie: "全国23店舗＋オンライン相談", musbell: "全国に拠点を展開（拠点数は公式サイト参照）" },
  { item: "初期費用", sunmarie: "165,000円（入会金33,000円＋初期活動費132,000円・ベーシック）", musbell: "181,500円〜（初期費用33,000円＋入会金148,500円・カジュアルコース）" },
  { item: "月会費", sunmarie: "18,700円（全コース共通）", musbell: "16,500円〜（エクセレントコースは17,000円）" },
  { item: "成婚料", sunmarie: "220,000円", musbell: "330,000円（成婚退会時・全コース共通）" },
  { item: "お見合いの進め方", sunmarie: "仲人がセッティングを完全代行（日程調整・場所手配・当日フォロー）", musbell: "仲人の紹介＋データ検索を併用して自分でも探せる" },
  { item: "成婚率の公表", sunmarie: "非公開", musbell: "非公開" },
];

const totals = [
  { label: "1年活動の総額目安（成婚なし）", sunmarie: "約389,400円", musbell: "約379,500円〜" },
  { label: "1年で成婚退会した場合の総額目安", sunmarie: "約609,400円", musbell: "約709,500円〜" },
];

const faqs = [
  {
    q: "サンマリエとムスベルでは、料金が安くなるのはどちらですか？",
    a: "成婚退会まで含めると、サンマリエのほうが安くなる目安です。1年活動の総額目安（成婚なし）はムスベル約379,500円〜（カジュアルコース：初期181,500円＋月16,500円×12）、サンマリエ約389,400円（ベーシック：初期165,000円＋月18,700円×12）でほぼ並びます。成婚料の差（サンマリエ220,000円・ムスベル330,000円）が加わると、サンマリエ約609,400円、ムスベル約709,500円〜で約10万円の差になります。ムスベルのカジュアルコースはお見合い1回ごとに11,000円がかかるため、活動量が多い方はお見合いの件数を含めて見積もってください（料金はサンマリエ2026年10月14日・ムスベル2026年10月23日に公式サイトで確認）。",
  },
  {
    q: "出会いの数（会員数）で選ぶ場合、どちらが適していますか？",
    a: "母数の大きさで選ぶ場合は、ムスベルが適しています。公式サイトではJBU・BIU・IBJ・TMSの4連盟が利用できると記載し、会員数94,763人（2024年10月時点の値）を掲載しています。サンマリエは自社会員に加えIBJで活動中の会員101,240名（2025年8月時点）という人数を公式に示しており、人数を開示している分かりやすさがあります。ただし、会員数が多いほどお相手を絞り込みにくいと感じる方もいます。数の多さを活かしたい方には検索を併用できるムスベル、仲人の見立てで紹介を受けたい方にはサンマリエが適しています。",
  },
  {
    q: "サポートの手厚さで選ぶ場合、どちらが適していますか？",
    a: "仲人に任せられる範囲の広さで選ぶ場合は、サンマリエが適しています。40年以上の仲人型老舗で、お見合いの日程調整・場所の手配・当日の流れの説明・お見合い後のフォローまで仲人が完全代行するため、婚活初心者でもお相手との会話に集中できます。ムスベルも専任仲人の紹介は受けられますが、データ検索を併用して自分から動ける設計が特徴で、紹介を待つだけでなく自分でも探したい方に適しています。どちらも全国対応・オンライン相談が可能なため、無料相談で担当者との相性を確かめたうえで決めることをおすすめします。",
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

export default function SunmarieVsMusbellPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "料金比較", href: "/compare/" }, { name: "サンマリエとムスベルを比較" }]} />

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-light mb-4 tracking-wide text-[#2C2C2C]">
          サンマリエとムスベルを比較【2026年】
        </h1>
        <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
          どちらも仲人サポートを受けながら全国で活動できる<strong>サンマリエ</strong>（1981年創業の仲人型老舗・お見合いセッティング完全代行）と<strong>ムスベル</strong>（複数連盟加盟・仲人＋データ検索のハイブリッド型）を、料金総額・会員数・サポートの型の観点から中立的に比較しています。1年活動の総額はムスベルが低く、成婚退会まで含めるとサンマリエが低くなるなど、<strong>比べる時点によって順位が入れ替わる</strong>点がこの2社の特徴です。仲人に任せて進めたいか、自分でも検索しながら幅広く出会いたいかで向き不向きが分かれます。どちらも無料相談から始められるため、迷われた場合は両社で総額の見積もりを取り、比較することをおすすめします。
        </p>
        <p className="text-xs text-[#2C2C2C]/50 mb-8">
          ※料金は当サイト各レビューの検証値です（サンマリエ=2026年10月14日・ムスベル=2026年10月23日に公式サイトで確認・税込）。プラン・連盟・拠点により異なるため、最新の料金・契約条件は各公式サイトおよび無料相談で必ずご確認ください。
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">基本スペック比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">サンマリエ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">ムスベル</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.item} className="border-t border-gray-50 align-top">
                    <td className="px-4 py-3 font-medium text-[#2C2C2C]/70 whitespace-nowrap">{r.item}</td>
                    <td className="px-4 py-3 text-center">{r.sunmarie}</td>
                    <td className="px-4 py-3 text-center">{r.musbell}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">実質総額の比較（公表料金ベース）：比べる時点によって順位が入れ替わります</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#FAF7F2]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">ケース</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">サンマリエ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">ムスベル</th>
                </tr>
              </thead>
              <tbody>
                {totals.map((t) => (
                  <tr key={t.label} className="border-t border-gray-50">
                    <td className="px-4 py-3 font-medium text-[#2C2C2C]/70">{t.label}</td>
                    <td className="px-4 py-3 text-center">{t.sunmarie}</td>
                    <td className="px-4 py-3 text-center">{t.musbell}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
            総額は「初期費用＋月会費×12ヶ月＋成婚料」の試算です。<strong>1年活動の時点では2社がほぼ並び</strong>（ムスベル約379,500円〜・サンマリエ約389,400円）、<strong>成婚退会まで含めるとサンマリエのほうが約10万円低く</strong>なります。成婚料がサンマリエ220,000円・ムスベル330,000円と、110,000円の差があるためです。この2社では、成婚時に支払う費用まで含めて比較することが特に重要です。
          </p>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※上記は各社最安プラン基準の目安で、お見合い料・オプション等は含みません。ムスベルはカジュアルコース基準で、レギュラーコースは入会時費用363,000円、カジュアルコースはお見合い料11,000円/回がかかります。サンマリエはベーシック基準です。実質総額は両社の無料相談で「初期費用＋月会費×想定活動月数＋お見合い料等の別途費用＋成婚料」の見積もりを取ってご確認ください（サンマリエ=2026年10月14日・ムスベル=2026年10月23日に公式サイトで確認）。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">サポートの型の違い：完全代行の仲人型と、検索も使えるハイブリッド型</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
            サンマリエは<strong>仲人型の老舗</strong>で、お見合いの日程調整・場所の手配・当日の流れの説明・お見合い後のフォローまで仲人がセッティングを完全代行します。婚活に不慣れな方でも、お相手との時間に集中しやすい設計です。一方ムスベルは<strong>仲人＋データマッチングのハイブリッド型</strong>で、専任仲人の紹介を受けつつ、複数連盟の会員データから自分でも検索・申込みができます。紹介を待つ活動と自分から申し込む活動を併用できるため、活動の主導権をご自身で持ちたい方に適しています。
          </p>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
            成婚率はどちらも非公開のため、数字での優劣比較はできません。無料相談で「直近1年の成婚退会数」や自分の年代・条件での活動イメージを直接質問し、担当者の提案の具体性で判断することをおすすめします。
          </p>
        </section>

        <section className="mb-10 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-medium text-[#A08447] mb-3 tracking-wider">サンマリエが向いている方</h2>
            <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>お見合いのセッティングを完全代行でお任せしたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>成婚退会まで見据えた総額を抑えたい（成婚料220,000円）</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>40年以上の歴史がある老舗の安心感を重視したい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>会員数（IBJ 101,240名）を開示している分かりやすさで選びたい</li>
            </ul>
            <p className="mt-4 text-sm"><Link href="/review/sunmarie/" className="text-[#A08447] underline">サンマリエの評判・料金を詳しく見る</Link></p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-medium text-[#A08447] mb-3 tracking-wider">ムスベルが向いている方</h2>
            <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>4連盟（JBU・BIU・IBJ・TMS）の会員から相手を探したい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>カジュアルコースでお見合い相手を厳選して活動したい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>仲人の紹介だけでなくデータ検索でも自分から動きたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>地方在住で全国拠点の対面サポートを受けたい</li>
            </ul>
            <p className="mt-4 text-sm"><Link href="/review/musbell/" className="text-[#A08447] underline">ムスベルの評判・料金を詳しく見る</Link></p>
          </div>
        </section>

        <A8Banner ad="sunmarie" />

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
            <li><Link href="/review/sunmarie/" className="text-[#A08447] underline">サンマリエの評判・料金を見る（仲人型老舗・お見合い完全代行）</Link></li>
            <li><Link href="/review/musbell/" className="text-[#A08447] underline">ムスベルの評判・口コミ・料金を見る（複数連盟・全国拠点）</Link></li>
            <li><Link href="/compare/ibj-vs-musbell/" className="text-[#A08447] underline">IBJメンバーズとムスベルを比較する（直営と加盟店の違い・総額）</Link></li>
            <li><Link href="/compare/tulip-vs-musbell/" className="text-[#A08447] underline">ブライダルチューリップとムスベルを比較する（料金・成婚率・サポート）</Link></li>
            <li><Link href="/compare/cheap/" className="text-[#A08447] underline">安い結婚相談所を1年総額で比較する（初期費用＋月会費＋成婚料）</Link></li>
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（24社一覧）を見る</Link></li>
          </ul>
        </section>
      </main>
    </>
  );
}
