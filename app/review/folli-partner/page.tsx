import Link from "next/link";
import BrandStores from "@/components/BrandStores";
import { ReviewVoices } from "@/components/ReviewFacts";
import Breadcrumb from "@/components/Breadcrumb";
import FeePosition from "@/components/FeePosition";
import AuthorBox from "@/components/AuthorBox";
import A8Banner from "@/components/A8Banner";
import FlowGuide from "@/components/FlowGuide";
import ReviewExtra from "@/components/ReviewExtra";

export const metadata = {
  title: "東京フォリパートナーの口コミ・評判｜IBJ口コミ4.8（87件）・成婚率71.5%の定義・5コース料金【2026年10月】",
  description:
    "東京フォリパートナー（IBJ正規加盟・優良認定加盟店）の評判を、公式の公表情報にもとづいて検証しています。成婚率71.5%（自社公称）の算出定義、ライト〜メンズ5コースの税込料金と1年総額目安、広告の「No.1」表記がIBJ連盟の実績であることの読み方、中途解約条件について整理しています。",
};

const overview = {
  name: "東京フォリパートナー（FOLLI PARTNER）",
  company: "株式会社フォリパートナー（東京都渋谷区代々木1-25-5）",
  type: "仲人型（IBJ正規加盟・優良認定加盟店）",
  founded: "2014年9月設立（結婚相談所事業は2009年から）・代表 守部弘昭・資本金1,000万円",
  area: "東京4店舗（代々木本店/神田・秋葉原/日本橋・茅場町/青山）＋横浜1店舗＋Zoomで全国対応",
  initialFee: "110,000円〜250,000円（コース別・税込）",
  monthlyFee: "16,500円〜22,000円（コース別・税込）",
  matchingFee: "250,000円〜300,000円（コース別・税込）",
  omiaiFee: "全コース0円",
  successRate:
    "71.5%（自社公称。直近1年〈公式の算出期間の表記は2025年10月〜2026年10月・2026年10月21日確認〉の成婚退会者÷全退会者〈相談所以外での成婚を除く〉）",
};

const plans = [
  { name: "ライト", initial: "110,000円", monthly: "16,500円", seikon: "250,000円", total: "約558,000円" },
  { name: "スタンダード", initial: "150,000円", monthly: "18,700円", seikon: "260,000円", total: "約634,400円" },
  { name: "スーペリア", initial: "250,000円", monthly: "22,000円", seikon: "300,000円", total: "約814,000円" },
  { name: "リスタート（再婚向け）", initial: "220,000円", monthly: "22,000円", seikon: "280,000円", total: "約764,000円" },
  { name: "メンズ", initial: "180,000円", monthly: "22,000円", seikon: "280,000円", total: "約724,000円" },
];

const strengths = [
  {
    title: "成婚率71.5%を算出定義とあわせて公表（自社公称）",
    desc: "公表されている成婚率71.5%は「直近1年（公式の算出期間の表記は2025年10月〜2026年10月。同じ公式サイト内に「2025年9月〜2026年9月実績」の表記も残っています・2026年10月21日確認）の成婚退会者÷全退会者（相談所以外での成婚を除く）」という算出定義が明示されています。在籍300名以上の大手基準での算出で、定義を示さずに高い数字だけを掲げる相談所と比べて検証しやすいのが特徴です。平均成婚期間は10ヶ月（自社公称）とされています。",
  },
  {
    title: "マーケティングの考え方を取り入れた婚活設計と少人数担当制",
    desc: "市場分析の考え方を婚活に応用した「戦略的な婚活設計」を掲げ、カウンセラー1名あたりの担当会員を30名程度までに抑える少人数担当制をとっています。担当あたりの人数を絞ることで、活動計画の立案やお見合い後のフィードバックに時間をかけやすい体制です。",
  },
  {
    title: "毎月の紹介人数保証と全コースお見合い料無料",
    desc: "コース別に毎月1〜3名の紹介人数保証があり、「入会したのに紹介がない」という事態を防ぐ設計です。また全コースでお見合い料が0円のため、お見合いの回数を気にせず活動できます。料金は初期費用・月会費・成婚料の3項目のみと明示されています。",
  },
  {
    title: "IBJサミット・IBJ Awardの受賞実績",
    desc: "IBJサミット2023では成婚数・成婚率の2部門でTOP7表彰、さらに「IBJ AWARD 2026上期」を受賞したと公式サイトで告知しています（2026年7月9日のお知らせ）。IBJ加盟店の中での相対的な実績を第三者（IBJ連盟）の表彰制度で確認できる点は、数字の裏付けとして参考になります。",
  },
];

const pros = [
  "成婚率71.5%（自社公称）を算出定義とあわせて公表しており、検証しやすい",
  "全コースお見合い料0円・料金は初期/月会費/成婚料の3項目のみで明確",
  "コース別に毎月1〜3名の紹介人数保証がある",
  "カウンセラー1名につき30名程度までの少人数担当制",
  "東京4店舗＋横浜1店舗に加えZoomで全国対応",
];

const cons = [
  "広告の「会員数・成婚数No.1」はIBJ連盟自体の実績で、フォリパートナー単体のNo.1ではない点に注意が必要",
  "成婚料が250,000円〜300,000円と、成婚料無料のオンライン型より総額は高くなりやすい",
  "店舗は東京・横浜のみで、対面サポートを受けられるのは首都圏中心",
  "利用者の口コミの一次情報（出典を確認できる投稿）は当サイトでは未確認",
];

const faqs = [
  {
    q: "フォリパートナーの成婚率71.5%はどうやって算出されていますか？",
    a: "自社公称の数値で、算出定義は「直近1年（公式の算出期間の表記は2025年10月〜2026年10月・2026年10月21日確認）の成婚退会者÷全退会者（相談所以外での成婚を除く）」です。在籍300名以上の大手基準での算出とされています。なお一部の紹介記事に見られる「成婚率68%」は旧数値です。最新の数値と定義は無料相談で直接確認することをおすすめします。",
  },
  {
    q: "広告の「会員数・成婚数No.1」はフォリパートナーがNo.1という意味ですか？",
    a: "いいえ。この表記はフォリパートナーが加盟するIBJ（日本結婚相談所連盟）自体の実績（日本マーケティングリサーチ機構調べ）を指すもので、フォリパートナー単体が業界No.1という意味ではありません。IBJ加盟店の多くが同様の表記を使っているため、「どの主体のNo.1なのか」を確認して読むことが大切です。",
  },
  {
    q: "フォリパートナーのお見合い料はかかりますか？",
    a: "全コースでお見合い料は0円です。料金は初期費用・月会費・成婚料の3項目のみで、コースにより初期費用110,000円〜250,000円、月会費16,500円〜22,000円、成婚料250,000円〜300,000円（いずれも税込）です。別途、担当カウンセラー指名11,000円、撮影同行16,500円などのオプションがあります。",
  },
  {
    q: "フォリパートナーの会員期間と2年目以降の費用を教えてください",
    a: "会員期間は12ヶ月です。2年目以降は月会費のみで活動を継続できます（初期費用の再納入は不要）。",
  },
  {
    q: "途中で退会した場合、違約金はかかりますか？",
    a: "契約書面の受領日を含めて8日以内であればクーリングオフが可能です。中途解約の場合の負担は、サービス提供前であれば3万円のみとされています。契約条件の詳細は、入会前の説明時に書面にてご確認ください。",
  },
  {
    q: "フォリパートナーは地方在住でも利用できますか？",
    a: "店舗は東京4店舗（代々木本店・神田/秋葉原・日本橋/茅場町・青山）と横浜1店舗ですが、Zoomでの面談に対応しており全国から利用できます。対面での手厚い面談を重視する場合は、通える範囲に店舗があるかをご確認ください。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const relatedServices = [
  { name: "nikoブライダル", path: "/review/niko-bridal/" },
  { name: "ツヴァイ", path: "/review/zwei/" },
  { name: "naco-do", path: "/review/naco-do/" },
  { name: "エン婚活エージェント", path: "/review/en-konkatsu/" },
];

// 競合上位記事との差分（2026-10-14 競合比較で追加）
const REVIEW_EXTRA = {
  "name": "東京フォリパートナー",
  "ratings": [
    {
      "media": "IBJ公式サイト 東京フォリパートナーのクチコミ",
      "score": "平均4.8",
      "count": "87件",
      "detail": "星5が92%・星4が6%・星2と星1が各1%。",
      "url": "https://www.ibjapan.com/area/tokyo/70545/"
    }
  ],
  "ratingNotes": [
    "IBJ公式サイト（日本結婚相談所連盟の運営サイト）の相談所ページに掲載されている口コミです。",
    "「フォリパートナー 口コミ」の検索上位には件数を確認できる比較記事がほとんどなく、件数を確認できたのはIBJ公式サイトのページでした。"
  ],
  "fitYes": [
    "東京・横浜のサロンに通える人、またはZoomで十分な人",
    "担当1人あたり30名程度の少人数担当制を重視する人",
    "お見合い料0円で、毎月の紹介人数保証がほしい人",
    "外国籍の人・再婚の人（公式FAQで入会可と明記）"
  ],
  "fitNo": [
    "成婚料250,000〜300,000円を避けたい人",
    "首都圏から離れていて対面サポートを重視する人",
    "広告の「No.1」表記をフォリパートナー単体の実績として重視していた人（同表記はIBJ連盟の実績です）"
  ],
  "entry": [
    [
      "入会資格",
      "20歳以上の独身の方が対象です。男性は安定した収入があることが条件です。面談・カウンセリングと審査を経て入会となります。年齢の上限はありません（IBJの入会規定）。"
    ],
    [
      "必要書類",
      "住民票（3ヶ月以内の原本）、独身証明書（3ヶ月以内の原本）、写真付き身分証明書のコピー、最終学歴証明書（短大卒以上）、収入証明書（源泉徴収票・確定申告書等）などが必要です。"
    ],
    [
      "外国籍・再婚",
      "外国籍の方も入会できます（語学に強いカウンセラーが在籍）。婚歴のある方も入会できます。"
    ]
  ],
  "entrySource": "東京フォリパートナー公式「よくある質問」"
};

export default function FolliPartnerReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "東京フォリパートナー" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          東京フォリパートナーの口コミ・評判｜成婚率71.5%の算出定義・5コース料金・No.1表記の読み方を検証
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月21日（料金・成婚率の算出期間・受賞歴を公式サイトで再確認）</p>

        {/* 結論box */}
        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />東京フォリパートナーの特徴と適している方
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>特徴</strong>：IBJ正規加盟・優良認定加盟店の仲人型相談所です。<strong>成婚率71.5%（自社公称）を算出定義とあわせて公表</strong>（直近1年の成婚退会者÷全退会者・相談所以外での成婚を除く）しており、IBJサミット2023で成婚数/成婚率2部門TOP7表彰、IBJ AWARD 2026上期も受賞しています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>料金</strong>：5コース制で初期費用110,000円〜・月会費16,500円〜・成婚料250,000円〜（税込・全コースお見合い料0円）。<strong>スタンダードで1年活動した場合の総額目安は約63.4万円</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>注意点</strong>：広告で見かける「会員数・成婚数No.1」は<strong>IBJ連盟自体の実績（日本マーケティングリサーチ機構調べ）で、フォリパートナー単体のNo.1ではありません</strong>。この点を踏まえてご検討ください（詳細は本文で説明しています）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>適している方</strong>：首都圏（東京・横浜）で店舗面談を受けたい方、数字の算出根拠を示す相談所を選びたい方、お見合いの回数を気にせず活動したい方に適しています。Zoomに対応しているため、地方からも利用できます。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本ページの料金・実績は公式公表情報（2026年7月31日確認・税込）にもとづきます。成婚率等は自社公称値です。ご利用前に、<strong>公式サイトおよび無料相談</strong>にて最新の数値・契約条件をご確認ください。</p>
        </div>

        <A8Banner ad="folli" />

        {/* Overview table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="bg-[#A08447] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
          <div className="divide-y divide-gray-50">
            {Object.entries({
              サービス名: overview.name,
              運営会社: overview.company,
              タイプ: overview.type,
              設立: overview.founded,
              店舗: overview.area,
              初期費用: overview.initialFee,
              月会費: overview.monthlyFee,
              成婚料: overview.matchingFee,
              お見合い料: overview.omiaiFee,
              成婚率: overview.successRate,
            }).map(([k, v]) => (
              <div key={k} className="flex px-6 py-3.5 text-sm">
                <span className="w-28 shrink-0 font-medium text-[#2C2C2C]/50 tracking-wider">{k}</span>
                <span className="text-[#2C2C2C]">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* No.1表記の読み方 */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            「会員数・成婚数No.1」表記の読み方
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            フォリパートナーの広告では「会員数・成婚数No.1」という表記を目にすることがあります。この<strong>No.1は、フォリパートナーが加盟するIBJ（日本結婚相談所連盟）自体の実績（日本マーケティングリサーチ機構調べ）を指します</strong>。フォリパートナー単体が結婚相談所業界でNo.1という意味ではありません。
          </p>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            これはフォリパートナーに限ったことではなく、IBJ加盟店の多く（全国4,000社以上）が同様の連盟実績を広告に使用しています。そのため「No.1」の部分は<strong>どのIBJ加盟店に入会しても共通して得られる会員ネットワークの規模</strong>を表しており、相談所ごとの違いはそこには表れません。
          </p>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
            相談所を比較する際は、連盟の実績ではなく<strong>その相談所固有の情報</strong>（成婚率の算出定義、担当制の体制、料金の内訳、解約条件）で判断することをおすすめします。フォリパートナーの場合、成婚率71.5%（自社公称・定義公表あり）やIBJサミット2023のTOP7表彰、IBJ AWARD 2026上期受賞といった「加盟店単体としての実績」が比較対象になります。
          </p>
        </section>

        {/* 料金 */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            料金プラン（税込・全コースお見合い料0円）
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">コース</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">初期費用</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">月会費</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">成婚料</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">1年活動の総額目安</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((p) => (
                  <tr key={p.name} className="border-t border-gray-50">
                    <td className="px-4 py-3 font-medium text-[#2C2C2C]/70">{p.name}</td>
                    <td className="px-4 py-3 text-center">{p.initial}</td>
                    <td className="px-4 py-3 text-center">{p.monthly}</td>
                    <td className="px-4 py-3 text-center">{p.seikon}</td>
                    <td className="px-4 py-3 text-center">{p.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="space-y-2 text-sm text-[#2C2C2C]/70 mb-4">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span>総額目安は「初期費用＋月会費12ヶ月＋成婚料」を単純に合算した金額です（当サイト算出）。オプション費用は含みません。</li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span>毎月の紹介人数保証があります（コース別に1〜3名）。</li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span>オプションの例として、担当カウンセラー指名11,000円、プロフィール撮影同行16,500円などがあります。</li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span>会員期間は12ヶ月です。2年目以降は月会費のみで継続できます。</li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span>クーリングオフは契約書面受領日を含む8日以内です。中途解約の負担は、サービス提供前であれば3万円のみです。</li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">※2026年7月31日確認時点の税込価格です。改定される場合があるため、ご契約前に、公式サイトにて最新の料金表をご確認ください。</p>
        </section>

        {/* Strengths */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            東京フォリパートナーの強み・特徴
          </h2>
          <div className="space-y-6">
            {strengths.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-medium text-lg mb-2 text-[#A08447] tracking-wider">{s.title}</h3>
                <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pros / Cons */}
        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="bg-green-50/50 rounded-xl p-6">
            <h3 className="font-medium text-green-800 mb-4 tracking-wider">メリット</h3>
            <ul className="space-y-2">
              {pros.map((p) => (
                <li key={p} className="text-sm text-[#2C2C2C]/70 flex gap-2">
                  <span className="text-green-500 shrink-0">+</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50/50 rounded-xl p-6">
            <h3 className="font-medium text-red-800 mb-4 tracking-wider">デメリット・注意点</h3>
            <ul className="space-y-2">
              {cons.map((c) => (
                <li key={c} className="text-sm text-[#2C2C2C]/70 flex gap-2">
                  <span className="text-red-400 shrink-0">-</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 他社との比較 */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 tracking-widest">他社との比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">フォリパートナー</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">nikoブライダル</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">naco-do</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">110,000円〜（スタンダード150,000円）</td><td className="px-4 py-3 text-center">110,000円</td><td className="px-4 py-3 text-center">29,800円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">16,500円〜22,000円</td><td className="px-4 py-3 text-center">13,200円</td><td className="px-4 py-3 text-center">16,800円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">仲人型（IBJ・首都圏5店舗＋Zoom）</td><td className="px-4 py-3 text-center">仲人型（IBJ・大阪1名運営）</td><td className="px-4 py-3 text-center">オンライン完結型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">成婚率の公表</td><td className="px-4 py-3 text-center">71.5%（自社公称・定義公表あり）</td><td className="px-4 py-3 text-center">56.3%（自社公称・定義公表あり）</td><td className="px-4 py-3 text-center">—</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">紹介人数保証・お見合い料0円</td><td className="px-4 py-3 text-center">出張面談・お見合い料無料</td><td className="px-4 py-3 text-center">低価格帯のオンライン型</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-3 leading-relaxed">※各社の数値は当サイトの各レビュー記事の調査時点の情報です。成婚率は各社とも自社公称値であり算出定義が異なるため、数値の単純比較はできません。</p>
        </section>

        {/* 評判・口コミについて */}
        <ReviewVoices
          name="東京フォリパートナー"
          checkedOn="2026年10月21日"
          reviewNote="Googleマップの「結婚相談所 東京フォリパートナー」には口コミ58件・評価4.9が掲載されていました（当サイトが2026年8月18日に取得）。2026年10月14日に公式の料金ページを再確認し、ライト（初期費用110,000円・月会費16,500円・成婚料250,000円・紹介1名以上/月）〜スーペリア（250,000円・22,000円・300,000円・3名以上/月）の5コース、全コースお見合い料0円・2年目以降の更新料無料は変更ありませんでした。店舗は代々木（本店）・神田秋葉原・日本橋茅場町・青山・横浜湘南で、Zoom相談は全国対応です。"
        />

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            東京フォリパートナーの評判・口コミについて
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            「フォリパートナー 評判」「フォリパートナー 口コミ」で検索する方が多い一方、当サイトの調査時点では、<strong>出典を確認できる利用者の口コミの一次情報は確認できませんでした</strong>。第三者のまとめ記事には体験談風の記述が見られますが、投稿元をたどれないため当サイトでは引用していません（なお一部の紹介記事にある「成婚率68%」は旧数値で、現在の公表値は71.5%〈自社公称〉です）。
          </p>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            そのため本ページでは、公式の公表情報をもとに<strong>入会前にご自身で確認いただきたいポイント</strong>を整理しています。無料相談で以下の点を直接確認することで、口コミに頼らずにご自身との相性を判断できます。
          </p>
          <div className="bg-[#FAFAF8] rounded-xl border border-gray-100 p-6">
            <h3 className="font-medium text-[#A08447] mb-4 tracking-wider">無料相談で確認したい5つのポイント</h3>
            <ul className="space-y-3 text-sm text-[#2C2C2C]/70 leading-relaxed">
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">1.</span><span><strong>成婚率の最新値と定義</strong>：公表されている71.5%の算出期間（2026年10月21日時点の公式表記は2025年10月〜2026年10月）と定義（成婚退会者÷全退会者）を口頭でも確認し、説明が一貫しているかをご確認ください。</span></li>
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">2.</span><span><strong>担当カウンセラーの受け持ち人数</strong>：公称の「1名30名程度まで」がご自身の担当予定者にも当てはまるかをご確認ください。</span></li>
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">3.</span><span><strong>紹介人数保証の条件</strong>：検討中のコースで毎月何名の紹介が保証されるか（コース別1〜3名）、保証が適用されない条件があるかをご確認ください。</span></li>
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">4.</span><span><strong>総額とオプションの線引き</strong>：初期費用・月会費・成婚料の3項目以外に発生しうる費用（指名11,000円・撮影同行16,500円など）を書面でご確認ください。</span></li>
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">5.</span><span><strong>解約条件</strong>：クーリングオフ（8日以内）と中途解約（サービス提供前3万円のみ）の条件を契約書面でご確認ください。</span></li>
            </ul>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※当サイトは出典を確認できない体験談・口コミを掲載しない方針です。実際のサポートの質は担当者やコースによっても異なるため、無料相談にてご自身でご確認ください。</p>
        </section>

        {/* 他社比較リンク */}
              <FeePosition slug="folli-partner" />

<section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            東京フォリパートナーと他社を比較して選ぶ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            フォリパートナーがご自身に合うかを判断する際は、料金総額・成婚率の算出定義・サポート形式を他社と比較することをおすすめします。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（24社一覧）を見る</Link></li>
            <li><Link href="/compare/folli-vs-musbell/" className="text-[#A08447] underline">フォリパートナーとムスベルを比較する（料金・成婚率・サポート）</Link></li>
            <li><Link href="/review/niko-bridal/" className="text-[#A08447] underline">nikoブライダルの評判・料金を見る</Link></li>
            <li><Link href="/review/zwei/" className="text-[#A08447] underline">ツヴァイの評判・料金を見る</Link></li>
            <li><Link href="/review/naco-do/" className="text-[#A08447] underline">naco-doの評判・料金を見る</Link></li>
          </ul>
        </section>

        {/* FAQ */}

        <ReviewExtra {...REVIEW_EXTRA} checkedOn="2026年10月21日" />
        <FlowGuide name={overview.name} initialFee={overview.initialFee} monthlyFee={overview.monthlyFee} matchingFee={overview.matchingFee} />
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            よくある質問
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-[#FAFAF8] rounded-xl border border-gray-100">
                <summary className="cursor-pointer px-6 py-4 font-normal text-[#2C2C2C] flex items-center justify-between tracking-wider">
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-[#A08447] text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-[#2C2C2C]/60 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-lg font-light mb-4 tracking-widest">他の結婚相談所も見る</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link
                key={s.name}
                href={s.path}
                className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm font-normal hover:border-[#A08447] hover:text-[#A08447] transition-colors tracking-wider"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </section>
      <A8Banner ad="folli" />
      <AuthorBox />
        <BrandStores href="/review/folli-partner/" brandName="東京フォリパートナー" />
      </article>
    </>
  );
}
