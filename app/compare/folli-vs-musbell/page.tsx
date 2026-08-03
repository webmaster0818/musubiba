import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import A8Banner from "@/components/A8Banner";

export const metadata: Metadata = {
  title: "フォリパートナーとムスベルどっちがいい？料金・成婚率・サポートを徹底比較【2026年】",
  description:
    "東京フォリパートナーとムスベルを、初期費用・月会費・成婚料・お見合い料・1年総額・成婚率の公表定義・店舗/オンライン対応で中立に比較。成婚率71.5%（自社公称・定義公表あり）で首都圏5店舗のフォリパートナーと、初期費用が低く全国拠点のムスベル、どちらが自分に合うかを検証済みの公表料金ベースで整理します（最新の料金・条件は各公式サイトおよび無料相談でご確認ください）。",
  alternates: { canonical: "/compare/folli-vs-musbell/" },
};

// 料金は当サイト各レビューの検証値（フォリパートナー=2026年7月31日公式確認・税込／ムスベル=2026年時点の調査値）。最新・正確な料金は各公式サイトでご確認ください。
type Row = { item: string; folli: string; musbell: string };
const rows: Row[] = [
  { item: "タイプ", folli: "仲人型（IBJ正規加盟・優良認定加盟店）", musbell: "ハイブリッド型（仲人＋データマッチング・複数連盟加盟）" },
  { item: "店舗・オンライン対応", folli: "東京4店舗＋横浜1店舗＋Zoomで全国対応", musbell: "全国に拠点を展開（拠点数は公式参照）＋オンライン対応" },
  { item: "初期費用", folli: "110,000円〜250,000円（ライトコース110,000円）", musbell: "33,000円〜（プランにより115,500円〜の場合あり）" },
  { item: "月会費", folli: "16,500円〜22,000円（コースにより異なる）", musbell: "15,400円〜（要確認）" },
  { item: "お見合い料", folli: "全コース0円", musbell: "別途かかる場合あり（プラン・連盟により異なる・要確認）" },
  { item: "成婚料", folli: "250,000円〜300,000円（ライトコース250,000円）", musbell: "330,000円（成婚退会時・要確認）" },
  { item: "サポート体制", folli: "少人数担当制（1名30名程度まで）・毎月1〜3名の紹介人数保証", musbell: "仲人の紹介とデータ検索を併用できるハイブリッド型" },
  { item: "成婚率の公表", folli: "71.5%（自社公称・定義公表：直近1年の成婚退会者÷全退会者）", musbell: "非公開" },
];

const totals = [
  { label: "1年活動の総額目安（成婚なし）", folli: "308,000円（ライトコース）", musbell: "約217,800円〜" },
  { label: "1年で成婚した場合の総額目安", folli: "約558,000円（ライトコース）", musbell: "約547,800円〜" },
];

const faqs = [
  {
    q: "フォリパートナーとムスベル、料金が安いのはどっち？",
    a: "1年活動の総額目安（成婚なし）はムスベル約217,800円〜、フォリパートナー308,000円（ライトコース）で、初期費用の低さ（33,000円〜 vs 110,000円〜）からムスベルのほうが始めやすい料金です。ただし成婚料はフォリパートナー250,000円（ライト）・ムスベル330,000円のため、1年で成婚した場合の総額目安は約558,000円と約547,800円〜でほぼ並びます。フォリパートナーは全コースお見合い料0円、ムスベルはお見合い料が別途かかる場合があるため、活動量が多い人は件数込みで見積もると差が縮まることもあります（各公表料金にもとづく目安・要確認）。",
  },
  {
    q: "成婚率で選ぶならどっち？",
    a: "数字の根拠を確認して選びたいならフォリパートナーです。成婚率71.5%（自社公称）を「直近1年〈2025年7月〜2026年7月〉の成婚退会者÷全退会者（相談所以外での成婚を除く）」という算出定義つきで公表しています。ムスベルは成婚率非公開です。なおフォリパートナーの広告にある「会員数・成婚数No.1」は加盟先のIBJ連盟自体の実績（日本マーケティングリサーチ機構調べ）であり、フォリパートナー単体のNo.1ではない点は理解した上で比較してください。",
  },
  {
    q: "地方在住ならどっちが使いやすい？",
    a: "対面サポート重視ならムスベルです。全国に拠点を展開しており、最寄り拠点で面談を受けられます。フォリパートナーの店舗は東京4店舗＋横浜1店舗と首都圏中心ですが、Zoom面談で全国から利用できます。首都圏在住なら店舗面談＋少人数担当制のフォリパートナー、それ以外の地域で対面にこだわるならムスベルが目安です。",
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

export default function FolliVsMusbellPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "料金比較", href: "/compare/" }, { name: "フォリパートナーとムスベルを比較" }]} />

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-light mb-4 tracking-wide text-[#2C2C2C]">
          フォリパートナーとムスベルを比較【2026年】
        </h1>
        <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
          どちらも仲人サポートが受けられる<strong>東京フォリパートナー</strong>（IBJ正規加盟・首都圏5店舗＋Zoom）と<strong>ムスベル</strong>（複数連盟加盟・全国拠点のハイブリッド型）を、料金総額・成婚率の公表定義・サポート形式で中立に比較しました。成婚率の根拠と少人数担当の手厚さで選ぶか、初期費用の低さと全国対応・出会いの幅で選ぶかで、向き不向きが分かれます。どちらも無料相談から始められるため、迷ったら両方で総額見積もりを取って比べるのが確実です。
        </p>
        <p className="text-xs text-[#2C2C2C]/50 mb-8">
          ※料金は当サイト各レビューの検証値です（フォリパートナー=2026年7月31日に公式サイトで確認・税込／ムスベル=2026年時点の調査値）。プラン・コース・拠点により異なるため、最新の料金・契約条件は各公式サイトおよび無料相談で必ずご確認ください。
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">基本スペック比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">フォリパートナー</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">ムスベル</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.item} className="border-t border-gray-50 align-top">
                    <td className="px-4 py-3 font-medium text-[#2C2C2C]/70 whitespace-nowrap">{r.item}</td>
                    <td className="px-4 py-3 text-center">{r.folli}</td>
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
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">フォリパートナー</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">ムスベル</th>
                </tr>
              </thead>
              <tbody>
                {totals.map((t) => (
                  <tr key={t.label} className="border-t border-gray-50">
                    <td className="px-4 py-3 font-medium text-[#2C2C2C]/70">{t.label}</td>
                    <td className="px-4 py-3 text-center">{t.folli}</td>
                    <td className="px-4 py-3 text-center">{t.musbell}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※総額は「初期費用＋月会費×12ヶ月＋成婚料」で試算した公表料金ベースの目安です（フォリパートナーはライトコース基準・2026年7月31日公式確認、ムスベルは2026年時点の調査値）。フォリパートナーは全コースお見合い料0円・オプション（担当指名等）は別途、ムスベルはお見合い料などが別途かかる場合があります。1年活動まではムスベルが安く、成婚まで進むと成婚料の差（250,000円 vs 330,000円）でほぼ並ぶ構造です。正確な総額は各社の無料相談での見積もりでご確認ください。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">成婚率の「公表定義」と No.1 表記の読み方</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
            フォリパートナーは<strong>成婚率71.5%</strong>（自社公称）を「直近1年〈2025年7月〜2026年7月〉の成婚退会者÷全退会者（相談所以外での成婚を除く）」という算出定義つきで公表しており、IBJサミット2023の成婚数・成婚率2部門TOP7表彰、IBJ Award 2025受賞という加盟店単体の実績もあります。一方、<strong>ムスベルは成婚率を非公開</strong>としています。非公開が悪いわけではありませんが、数字で比較したい場合は無料相談で直近の成婚実績を直接質問するのがおすすめです。
          </p>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
            注意点として、フォリパートナーの広告にある「会員数・成婚数No.1」は<strong>加盟先のIBJ（日本結婚相談所連盟）自体の実績（日本マーケティングリサーチ機構調べ）</strong>を指し、フォリパートナー単体が業界No.1という意味ではありません。連盟の規模はどのIBJ加盟店でも共通のため、比較の決め手は成婚率の定義・担当体制・料金内訳といった相談所固有の情報で見るのが正解です。
          </p>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※成婚率は自社公称値であり、第三者機関の検証値ではありません。各社で算出定義が異なるため、数値の単純比較はできません。
          </p>
        </section>

        <section className="mb-10 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-medium text-[#8B7355] mb-3 tracking-wider">フォリパートナーが向いている人</h2>
            <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>成婚率の算出定義など数字の根拠を示す相談所を選びたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>お見合い料0円で回数を気にせず活動したい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>毎月の紹介人数保証・少人数担当制の手厚さを重視したい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>首都圏（東京・横浜）で店舗面談を受けたい（Zoomで全国も可）</li>
            </ul>
            <p className="mt-4 text-sm"><Link href="/review/folli-partner/" className="text-[#8B7355] underline">フォリパートナーの評判・料金を詳しく見る</Link></p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-medium text-[#8B7355] mb-3 tracking-wider">ムスベルが向いている人</h2>
            <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>初期費用33,000円〜で低く始めたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>地方在住で全国拠点の対面サポートを受けたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>複数連盟の会員基盤から仲人紹介＋データ検索で幅広く探したい</li>
            </ul>
            <p className="mt-4 text-sm"><Link href="/review/musbell/" className="text-[#8B7355] underline">ムスベルの評判・料金を詳しく見る</Link></p>
          </div>
        </section>

        <A8Banner ad="folli" />

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
            <li><Link href="/review/folli-partner/" className="text-[#8B7355] underline">フォリパートナーの評判・料金を見る（成婚率71.5%の定義・5コース料金を検証）</Link></li>
            <li><Link href="/review/musbell/" className="text-[#8B7355] underline">ムスベルの評判・口コミ・料金を見る（複数連盟・全国拠点）</Link></li>
            <li><Link href="/compare/tulip-vs-musbell/" className="text-[#8B7355] underline">ブライダルチューリップとムスベルを比較する（料金・成婚率・サポート）</Link></li>
            <li><Link href="/compare/musbell-vs-ringbell/" className="text-[#8B7355] underline">ムスベルとリングベルを比較する（料金総額・対象年代・特徴）</Link></li>
            <li><Link href="/compare/cheap/" className="text-[#8B7355] underline">安い結婚相談所を1年総額で比較する（初期費用＋月会費＋成婚料）</Link></li>
            <li><Link href="/compare/" className="text-[#8B7355] underline">結婚相談所の料金比較（13社一覧）を見る</Link></li>
          </ul>
        </section>
      </main>
    </>
  );
}
