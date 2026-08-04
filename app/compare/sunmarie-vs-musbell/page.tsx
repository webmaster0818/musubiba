import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import A8Banner from "@/components/A8Banner";

export const metadata: Metadata = {
  title: "サンマリエとムスベルどっちがいい？料金総額・仲人サポート・会員数を徹底比較【2026年】",
  description:
    "サンマリエ（仲人型老舗・お見合い完全代行）とムスベル（複数連盟加盟のハイブリッド型）を比較。1年活動の総額はムスベル約217,800円〜が低め、成婚退会まで含めるとサンマリエ約521,400円〜と逆転する料金構造、お見合い料など別途費用の確認ポイント、サポートの型の違いまで検証済みの公表料金ベースで中立に整理します（最新の料金・条件は各公式サイトおよび無料相談でご確認ください）。",
  alternates: { canonical: "/compare/sunmarie-vs-musbell/" },
};

// 料金は当サイト各レビューの検証値（サンマリエ・ムスベルとも2026年時点の調査値）。最新・正確な料金は各公式サイトでご確認ください。
type Row = { item: string; sunmarie: string; musbell: string };
const rows: Row[] = [
  { item: "タイプ", sunmarie: "仲人型（1981年創業・40年以上の老舗）", musbell: "ハイブリッド型（仲人＋データマッチング・複数連盟加盟）" },
  { item: "会員数", sunmarie: "約8.7万人（自社会員＋連盟連携）", musbell: "複数連盟加盟で業界最大級（人数は公式参照・要確認）" },
  { item: "拠点", sunmarie: "全国対応（約30拠点）", musbell: "全国に拠点を展開（拠点数は公式参照）" },
  { item: "初期費用", sunmarie: "103,400円〜", musbell: "33,000円〜（プランにより115,500円〜の場合あり）" },
  { item: "月会費", sunmarie: "16,500円〜", musbell: "15,400円〜（要確認）" },
  { item: "成婚料", sunmarie: "220,000円", musbell: "330,000円（成婚退会時・要確認）" },
  { item: "お見合いの進め方", sunmarie: "仲人がセッティングを完全代行（日程調整・場所手配・当日フォロー）", musbell: "仲人の紹介＋データ検索を併用して自分でも探せる" },
  { item: "成婚率の公表", sunmarie: "非公開", musbell: "非公開" },
];

const totals = [
  { label: "1年活動の総額目安（成婚なし）", sunmarie: "約301,400円〜", musbell: "約217,800円〜" },
  { label: "1年で成婚退会した場合の総額目安", sunmarie: "約521,400円〜", musbell: "約547,800円〜" },
];

const faqs = [
  {
    q: "サンマリエとムスベル、料金が安いのはどっち？",
    a: "どの時点で比べるかで答えが変わる料金構造です。1年活動の総額目安（成婚なし）はムスベル約217,800円〜（初期33,000円〜＋月15,400円×12）で、サンマリエ約301,400円〜（初期103,400円〜＋月16,500円×12）より約8万円低めです。一方、成婚退会まで含めると成婚料の差（サンマリエ220,000円・ムスベル330,000円）が効いて、サンマリエ約521,400円〜、ムスベル約547,800円〜と順位が入れ替わります。さらにムスベルはプランにより初期費用115,500円〜の場合やお見合い料が別途かかる場合があるため、実質総額は両社の無料相談で「初期費用＋月会費×想定活動月数＋お見合い料等＋成婚料」の見積もりを取って比べるのが確実です（各公表料金にもとづく目安・2026年時点・要確認）。",
  },
  {
    q: "出会いの数（会員数）で選ぶならどっち？",
    a: "母数の大きさで選ぶならムスベルが目安です。BIU・良縁ネットなど複数の連盟に加盟し、業界最大級の会員基盤にアクセスできます（正確な人数は公式サイトで要確認）。サンマリエは自社会員に加え大手連盟と連携して約8.7万人の会員基盤で、人数を開示している分かりやすさがあります。ただし会員数が多いほど「絞りにくい」と感じる声もあるため、数の多さを活かすなら検索を併用できるムスベル、仲人の目利きで紹介を受けたいならサンマリエという選び方が現実的です。",
  },
  {
    q: "サポートの手厚さで選ぶならどっち？",
    a: "「お任せ度」で選ぶならサンマリエです。40年以上の仲人型老舗で、お見合いの日程調整・場所の手配・当日の流れの説明・お見合い後のフォローまで仲人が完全代行するため、婚活初心者でもお相手との会話に集中できます。ムスベルも専任仲人の紹介は受けられますが、データ検索を併用して自分から動ける設計が特徴で、「紹介を待つだけでなく自分でも探したい」人に合います。どちらも全国対応・オンライン相談が可能なので、無料相談で担当者との相性を確かめてから決めるのがおすすめです。",
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
          どちらも仲人サポートを受けながら全国で活動できる<strong>サンマリエ</strong>（1981年創業の仲人型老舗・お見合いセッティング完全代行）と<strong>ムスベル</strong>（複数連盟加盟・仲人＋データ検索のハイブリッド型）を、料金総額・会員数・サポートの型で中立に比較しました。1年活動の総額はムスベルが低め、成婚退会まで含めるとサンマリエが低めと<strong>比べる時点で順位が入れ替わる</strong>のがこの2社の特徴です。仲人にお任せで進めたいか、自分でも検索しながら幅広く出会いたいかで向き不向きが分かれます。どちらも無料相談から始められるため、迷ったら両方で総額見積もりを取って比べるのが確実です。
        </p>
        <p className="text-xs text-[#2C2C2C]/50 mb-8">
          ※料金は当サイト各レビューの検証値です（サンマリエ・ムスベルとも2026年時点の調査値・税込）。プラン・連盟・拠点により異なるため、最新の料金・契約条件は各公式サイトおよび無料相談で必ずご確認ください。
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">基本スペック比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">サンマリエ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">ムスベル</th>
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
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">実質総額を比較（公表料金ベース）— 比べる時点で順位が入れ替わる</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#FAF7F2]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">ケース</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">サンマリエ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">ムスベル</th>
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
            総額は「初期費用＋月会費×12ヶ月＋成婚料」の試算です。<strong>活動中の負担はムスベルが低め</strong>（初期33,000円〜、1年で約8万円差）ですが、<strong>成婚退会まで含めるとサンマリエが低め</strong>に逆転します。成婚料がサンマリエ220,000円・ムスベル330,000円と110,000円差あるためです。「成婚したら払う費用」まで含めた出口ベースで比較するのがこの2社では特に重要です。
          </p>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※上記は各社最安プラン基準の目安で、お見合い料・オプション等は含みません。ムスベルはプランにより初期費用115,500円〜の場合があり、お見合い料などが別途かかる場合があります。サンマリエもプランにより料金が異なります。実質総額は両社の無料相談で「初期費用＋月会費×想定活動月数＋お見合い料等の別途費用＋成婚料」の見積もりを取ってご確認ください（2026年時点の調査値・要確認）。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">サポートの「型」の違い — 完全代行の仲人型 vs 検索も使えるハイブリッド型</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
            サンマリエは<strong>仲人型の老舗</strong>で、お見合いの日程調整・場所の手配・当日の流れの説明・お見合い後のフォローまで仲人がセッティングを完全代行します。婚活に不慣れでも余計なストレスなくお相手との時間に集中できる「お任せ」設計です。一方ムスベルは<strong>仲人＋データマッチングのハイブリッド型</strong>で、専任仲人の紹介を受けつつ、複数連盟の会員データから自分でも検索・申込みができます。「待つ」と「攻める」を併用できる分、活動の主導権を自分で持ちたい人に向いた設計です。
          </p>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
            成婚率はどちらも非公開のため、数字での優劣比較はできません。無料相談で「直近1年の成婚退会数」や自分の年代・条件での活動イメージを直接質問し、担当者の提案の具体性で見極めるのがおすすめです。
          </p>
        </section>

        <section className="mb-10 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-medium text-[#8B7355] mb-3 tracking-wider">サンマリエが向いている人</h2>
            <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>お見合いのセッティングを完全代行でお任せしたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>成婚退会まで見据えた総額を抑えたい（成婚料220,000円）</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>40年以上の歴史がある老舗の安心感を重視したい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>会員数（約8.7万人）を開示している分かりやすさで選びたい</li>
            </ul>
            <p className="mt-4 text-sm"><Link href="/review/sunmarie/" className="text-[#8B7355] underline">サンマリエの評判・料金を詳しく見る</Link></p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-medium text-[#8B7355] mb-3 tracking-wider">ムスベルが向いている人</h2>
            <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>初期費用33,000円〜で活動中の負担を抑えて始めたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>複数連盟加盟の業界最大級の会員基盤から幅広く出会いたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>仲人の紹介だけでなくデータ検索でも自分から動きたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>地方在住で全国拠点の対面サポートを受けたい</li>
            </ul>
            <p className="mt-4 text-sm"><Link href="/review/musbell/" className="text-[#8B7355] underline">ムスベルの評判・料金を詳しく見る</Link></p>
          </div>
        </section>

        <A8Banner ad="sunmarie" />

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
            <li><Link href="/review/sunmarie/" className="text-[#8B7355] underline">サンマリエの評判・料金を見る（仲人型老舗・お見合い完全代行）</Link></li>
            <li><Link href="/review/musbell/" className="text-[#8B7355] underline">ムスベルの評判・口コミ・料金を見る（複数連盟・全国拠点）</Link></li>
            <li><Link href="/compare/ibj-vs-musbell/" className="text-[#8B7355] underline">IBJメンバーズとムスベルを比較する（直営と加盟店の違い・総額）</Link></li>
            <li><Link href="/compare/tulip-vs-musbell/" className="text-[#8B7355] underline">ブライダルチューリップとムスベルを比較する（料金・成婚率・サポート）</Link></li>
            <li><Link href="/compare/cheap/" className="text-[#8B7355] underline">安い結婚相談所を1年総額で比較する（初期費用＋月会費＋成婚料）</Link></li>
            <li><Link href="/compare/" className="text-[#8B7355] underline">結婚相談所の料金比較（13社一覧）を見る</Link></li>
          </ul>
        </section>
      </main>
    </>
  );
}
