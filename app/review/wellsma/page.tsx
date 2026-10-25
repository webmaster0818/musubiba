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
  title: "ウェルスマの口コミ・評判｜IBJ口コミ224件をテーマ別に集計・月会費11,800円〜・成婚率86.1%の定義【2026年10月】",
  description:
    "ウェルスマ（IBJ加盟の完全オンライン仲人型結婚相談所）の口コミ・評判を、IBJ公式サイトの口コミ224件（平均4.5）の全件テーマ別集計と、星3以下15件の内容で整理しています。料金（2026年10月25日公式確認）、成婚率86.1%の定義、解約・休会・プラン変更の条件も掲載しています。",
};

const overview = {
  name: "ウェルスマ",
  company: "合同会社アクチュアライゼーション（東京都渋谷区渋谷3-2-4・代表 細川佑太朗）",
  type: "オンライン仲人型（完全オンライン・来店不要）",
  federation: "IBJ正規加盟（IBJ会員110,885名（公式トップの表記・2026年10月21日確認。有料オプションのIBJ Online会員35,665名を合わせると最大約14.6万人））",
  area: "全国（実店舗なし・Zoom/LINEで完結）",
  initialFee: "49,800円（税込・全プラン共通）",
  monthlyFee: "11,800円〜19,800円（税込・3プラン）",
  matchingFee: "149,800円（税込・全プラン共通）",
  successRate: "1年以内成婚率86.1%（自社公称・定義は本文参照）",
};

const strengths = [
  {
    title: "完全オンラインで来店不要（Zoom/LINE完結）",
    desc: "ウェルスマは実店舗を持たない完全オンライン型の結婚相談所です。カウンセリングはZoom、日常のやり取りはLINEで完結するため、店舗への来店が不要です。地方在住の方や、仕事が忙しく店舗に通う時間が取りにくい方でも活動しやすい仕組みです。",
  },
  {
    title: "専任カウンセラーが付く仲人型サポート",
    desc: "オンライン完結でありながら、データマッチングのみの形式ではなく、専任カウンセラーが伴走する仲人型のサポート体制をとっています。プランによってサポートの手厚さが異なるため、自分に必要なサポート量に合わせて月会費を選べます。",
  },
  {
    title: "IBJ正規加盟・IBJ会員110,885名のネットワーク",
    desc: "日本結婚相談所連盟（IBJ）の正規加盟店で、IBJ会員110,885名（2026年10月21日に公式トップで確認）の中からお相手を探せます。また、公式サイトには結婚相手紹介サービス業の認証マークである「マル適マークCMS」の認証を受けている旨が記載されています。",
  },
];

const pros = [
  "月会費11,800円〜と仲人型としては始めやすい料金水準",
  "完全オンラインのため全国どこからでも活動できる",
  "IBJ加盟で紹介可能な会員基盤が大きい（IBJ会員110,885名・2026年10月21日公式確認）",
  "マル適マークCMS認証の記載があり、運営の透明性を確認しやすい",
];

const cons = [
  "実店舗がないため対面でのカウンセリングは受けられない",
  "成婚率86.1%は自社公称値で、分母が成婚退会者である点に注意が必要",
  "オンライン活動に慣れていない方はツール操作の負担を感じる可能性がある",
];

const faqs = [
  {
    q: "ウェルスマは店舗に行かずに入会から成婚まで完結できますか？",
    a: "はい。ウェルスマは実店舗を持たない完全オンライン型の結婚相談所で、カウンセリングはZoom、日常の相談はLINEで行う仕組みです。来店は不要で、全国どこからでも活動できます。",
  },
  {
    q: "ウェルスマの「1年以内成婚率86.1%」とはどういう意味ですか？",
    a: "自社公称値で、定義は「2025年1〜12月の成婚退会者のうち、活動開始から1年以内に成婚した人の割合」です。分母は全会員ではなく成婚退会者である点にご注意ください。全会員に対する成婚の割合を示す数値ではありません。",
  },
  {
    q: "ウェルスマの料金はいくらですか？",
    a: "税込で入会金49,800円（全プラン共通）、月会費はマイペースプラン11,800円・サポートプラン15,800円・プレミアムプラン19,800円の3種類、成婚料は149,800円（全プラン共通）です。料金は改定される場合があるため、最新の金額は必ず公式サイトでご確認ください。",
  },
  {
    q: "ウェルスマはどの連盟に加盟していますか？",
    a: "日本結婚相談所連盟（IBJ）の正規加盟店です。公式トップでは、IBJ会員110,885名と、有料オプションのIBJ Online会員35,665名を合わせた最大約14.6万人のネットワークと案内しています（2026年10月21日確認）。",
  },
  {
    q: "ウェルスマで成婚までにかかる期間はどのくらいですか？",
    a: "自社公称値として「成婚まで平均7.9ヶ月」「年間成婚100名以上」が公式サイトに掲載されています。あくまで平均値で、活動期間には個人差があります。",
  },
  {
    q: "ウェルスマの口コミは信頼できますか？",
    a: "件数がまとまっている媒体は、IBJ公式サイトの相談所ページ（224件・平均4.5、2026年10月25日確認）とGoogleマップ（163件・評価4.5、2026年8月18日取得）です。IBJの224件を当サイトで全件確認したところ、本文が完全に一致する投稿が7組（14件）ありました。比較記事の中には出典が示されていない体験談や旧料金が混ざっているものもあるため、媒体と投稿時期を確認したうえで参考にすることをおすすめします。",
  },
  {
    q: "ウェルスマに悪い口コミはありますか？",
    a: "IBJ公式サイトの口コミ224件のうち、星3以下は15件（星3が9件・星2が3件・星1が3件、2026年10月25日確認）です。本文のある13件では、サポートは必要最低限で自分から動く必要があるという内容が5件、返信がない・質問への対応が不十分だったという内容が3件、IBJアプリやシステムの使いにくさ・不具合に触れた内容が3件でした（重複あり）。一方で、星3のうち3件は不満点の記載がない好意的な内容です。",
  },
  {
    q: "解約・休会・プラン変更の条件を教えてください",
    a: "公式FAQ（2026年10月25日確認）によると、契約期間の縛りはなく、中途解約料はかかりません。退会は特定商取引法に則って対応すると記載されています。休会は3ヶ月×2回まで可能で、休会中はシステム利用料2,200円/月がかかります。プラン変更は変更希望月の前月20日までの申請で翌月から適用され、変更手数料5,500円（税込）がかかり、変更後3ヶ月間は再変更できません。月会費は日割りされず、入会月はプロフィールを公開しなければ月会費は発生しません。",
  },
  {
    q: "ウェルスマの入会条件は？",
    a: "公式FAQ（2026年10月25日確認）では、満20歳以上65歳未満の独身者（事実上の婚姻関係にある方がいないこと）で、男性は定職に就いていること、1年以内をめどに結婚につながる交際を希望していること、身分証明書・独身証明書・学歴証明書などを提出できることが条件です。",
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
  { name: "エクセレンス青山", path: "/review/excellence-aoyama/" },
  { name: "naco-do", path: "/review/naco-do/" },
  { name: "スマリッジ", path: "/review/smartread/" },
  { name: "エン婚活エージェント", path: "/review/en-konkatsu/" },
];

// 競合上位記事との差分（2026-10-14 競合比較で追加）
const REVIEW_EXTRA = {
  "name": "ウェルスマ",
  "ratings": [
    {
      "media": "IBJ公式サイト ウェルスマのクチコミ",
      "score": "平均4.5",
      "count": "224件",
      "detail": "星5が157件（70%）・星4が52件・星3が9件・星2が3件・星1が3件（2026年10月25日に全件を確認）。テーマ別の集計は本ページの「IBJ口コミ224件のテーマ別集計」をご覧ください。",
      "url": "https://www.ibjapan.com/area/tokyo/00290/"
    }
  ],
  "ratingNotes": [
    "IBJ公式サイト（日本結婚相談所連盟の運営サイト）の相談所ページに掲載されている口コミです。ウェルスマの公式サイトは「IBJクチコミランキング 全国4,777社中 第8位」（IBJ公式サイトの口コミが多い順ランキング・2026年4月時点）と表記しています。",
    "「ウェルスマ 口コミ」の検索上位には、件数を確認できる比較記事がほとんどありません。件数を確認できたのはIBJのページです。"
  ],
  "fitYes": [
    "来店せずZoom・LINEで活動を完結したい方",
    "仲人型のサポートを月会費11,800円〜で受けたい方",
    "プランごとの申込人数・紹介人数の違いを理解して選びたい方"
  ],
  "fitNo": [
    "対面のカウンセリングを受けたい方",
    "成婚料149,800円を避け、成婚料0円のサービスを選びたい方",
    "オンラインツールの操作に負担を感じる方"
  ],
  "facts": [
    "プラン別のお申込み人数（月）: マイペース30名・サポート60名・プレミアム100名（活動状況に応じて最大200名）。申し受けはいずれのプランも無制限です。",
    "紹介人数（月）: マイペースはなし、サポートは3名、プレミアムは6名＋都度です。",
    "相談手段: マイペースはLINE、サポート・プレミアムはLINE/電話/ビデオ通話です。サポート以上は分析活動レポート付き、プレミアムは成婚戦略面談付きです。",
    "「年間100名以上が成婚」と公表されています（2025年度実績・自社公称）。"
  ],
  "factsTitle": "ウェルスマのプラン別の違い（公式）",
  "outdated": [
    {
      "seen": "月額9,800円〜・7万人以上の会員から月5名を紹介",
      "source": "2021年9月30日のプレスリリース（サービス一新時）",
      "now": "月会費11,800円／15,800円／19,800円の3プラン、紹介人数はプランにより0名・3名・6名＋都度です（2026年10月25日に公式トップで再確認）。IBJ会員は110,885名です（2026年10月21日に公式トップで確認）。"
    }
  ]
};

export default function WellsmaReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "ウェルスマ" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          ウェルスマの口コミ・評判｜月会費11,800円〜のオンライン仲人型を公式情報で検証
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月25日（料金・プラン内容・解約規定を2026年10月25日に公式サイトで再確認。IBJ公式サイトの口コミ224件のテーマ別集計を追加）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-6">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />ウェルスマとは（運営・料金・口コミの傾向）
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>運営・形態</strong>：合同会社アクチュアライゼーション（東京都渋谷区・代表 細川佑太朗）が運営する、IBJ正規加盟の<strong>完全オンライン仲人型の結婚相談所</strong>です。店舗はなく、面談はZoom、日常の相談はLINEで行います。マル適マークCMSを取得し、IBJ AWARD PREMIUM（2022年・2023年）を受賞しています（IBJ公式サイトの相談所ページの表記）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>料金</strong>：初期費用49,800円＋月会費11,800円〜19,800円（3プラン）＋成婚料149,800円（税込）。お見合い料はかかりません。<strong>マイペースプランで1年活動して成婚した場合の総額目安は341,200円</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>口コミの傾向</strong>：IBJ公式サイトの口コミ224件（平均4.5）では、カウンセラーの親身さ・丁寧さに触れた投稿が108件、料金の安さに触れた投稿が110件と多い一方、星3以下の15件には「サポートは必要最低限」「返信がない」という内容が含まれます（<a href="#review-themes" className="underline text-[#A08447]">テーマ別の集計</a>）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>解約・休会</strong>：契約期間の縛り・中途解約料はなく、休会は3ヶ月×2回まで（システム利用料2,200円/月）です（公式FAQ）。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※料金・プラン内容は公式トップ、解約・休会は公式「よくあるご質問」、運営会社は公式「会社概要」で2026年10月25日に確認した掲載値です。総額目安は49,800円＋11,800円×12ヶ月＋149,800円の単純計算です。</p>
        </div>

        {/* Conclusion box */}
        <div className="bg-[#F5F0EB] rounded-2xl p-6 mb-4 border border-[#A08447]/20">
          <h2 className="text-base font-medium text-[#A08447] mb-3 tracking-widest">ウェルスマが適している方</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
            ウェルスマは、<strong>来店不要の完全オンライン</strong>で専任カウンセラーの仲人型サポートを受けられるIBJ正規加盟の結婚相談所です。月会費11,800円〜（税込）と仲人型としては始めやすい水準で、店舗に通う時間が取れない方・地方在住の方に向いています。
          </p>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
            公称の「1年以内成婚率86.1%」は<strong>分母が成婚退会者</strong>（2025年1〜12月の成婚退会者のうち1年以内に成婚した割合）である点に注意が必要です。全会員に対する成婚割合ではないため、数字の定義を理解したうえでご検討ください。
          </p>
        </div>

        <A8Banner ad="wellsma" />

        {/* Overview table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="bg-[#A08447] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
          <div className="divide-y divide-gray-50">
            {Object.entries({
              サービス名: overview.name,
              運営会社: overview.company,
              タイプ: overview.type,
              加盟連盟: overview.federation,
              対応エリア: overview.area,
              入会金: overview.initialFee,
              月会費: overview.monthlyFee,
              成婚料: overview.matchingFee,
              成婚実績: overview.successRate,
            }).map(([k, v]) => (
              <div key={k} className="flex px-6 py-3.5 text-sm">
                <span className="w-28 shrink-0 font-medium text-[#2C2C2C]/50 tracking-wider">{k}</span>
                <span className="text-[#2C2C2C]">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            ウェルスマの料金プラン（税込）
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">マイペースプラン</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">サポートプラン</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">プレミアムプラン</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">入会金</td><td className="px-4 py-3 text-center" colSpan={3}>49,800円（全プラン共通）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">11,800円</td><td className="px-4 py-3 text-center">15,800円</td><td className="px-4 py-3 text-center">19,800円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">成婚料</td><td className="px-4 py-3 text-center" colSpan={3}>149,800円（全プラン共通）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">
            ※2026年7月31日時点の公式サイト掲載の税込料金です（2026年10月14日・10月25日の再確認時点でも変更はありません）。ネット上の古い記事には現行と異なる旧料金が掲載されている場合があります。料金は改定されることがあるため、最新の金額は必ず公式サイトでご確認ください。
          </p>
        </section>

        {/* Success rate definition */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            成婚率86.1%の定義について
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            ウェルスマが公式サイトで掲げる実績（いずれも自社公称値）は次のとおりです。
          </p>
          <ul className="space-y-2 text-sm text-[#2C2C2C]/80 mb-4 list-disc pl-5">
            <li>1年以内成婚率 86.1%</li>
            <li>成婚まで平均 7.9ヶ月</li>
            <li>年間成婚 100名以上</li>
          </ul>
          <div className="bg-[#FAFAF8] rounded-xl border border-gray-100 p-6">
            <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
              ここで重要なのは「1年以内成婚率86.1%」の定義です。この数値は<strong>「2025年1〜12月の成婚退会者のうち、活動開始から1年以内に成婚した人の割合」</strong>で、<strong>分母は全会員ではなく成婚退会者</strong>です。
            </p>
            <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
              つまり、入会した人の86.1%が成婚できるという意味ではありません。成婚して退会した人の86.1%が1年以内に成婚しており、成婚した人の活動期間が短い傾向を示す数値です。結婚相談所業界では成婚率の算出方法が各社で異なるため、定義を確認せずに他社の成婚率と単純に比較しないようご注意ください。
            </p>
          </div>
        </section>

        {/* Strengths */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            ウェルスマの強み・特徴
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

        {/* Comparison */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 tracking-widest">他社との比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">ウェルスマ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">naco-do</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">エン婚活エージェント</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">49,800円</td><td className="px-4 py-3 text-center">29,800円</td><td className="px-4 py-3 text-center">10,780円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">11,800円〜</td><td className="px-4 py-3 text-center">16,800円</td><td className="px-4 py-3 text-center">14,300円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">成婚料</td><td className="px-4 py-3 text-center">149,800円</td><td className="px-4 py-3 text-center">0円</td><td className="px-4 py-3 text-center">0円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">オンライン仲人型</td><td className="px-4 py-3 text-center">オンライン完結型</td><td className="px-4 py-3 text-center">オンライン完結型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">専任カウンセラーの仲人型</td><td className="px-4 py-3 text-center">3連盟連携</td><td className="px-4 py-3 text-center">全額返金保証</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※比較各社の数値は当サイト各レビュー記事の調査時点の情報です。最新の料金は各社公式サイトでご確認ください。</p>
        </section>

        {/* Reviews / How to verify */}
        <ReviewVoices
          name="ウェルスマ"
          checkedOn="2026年10月25日"
          reviewNote="Googleマップの「結婚相談所ウェルスマ」には口コミが163件あり、評価は4.5でした（当サイトが2026年8月18日に取得）。2026年10月14日に公式サイトを再確認し、料金（入会金49,800円・月会費11,800円〜19,800円・成婚料149,800円・お見合い料なし）は7月から変更ありません。会員数はIBJ 110,885名＋IBJオンライン会員35,665名（オンラインは有料オプション）、2025年の成婚退会者のうち1年以内に成婚した割合86.1%・平均在籍7.9ヶ月と公表されています。"
        />


        <section id="review-themes" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">ウェルスマのIBJ口コミ224件のテーマ別集計（2026年10月25日確認）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            ウェルスマの口コミが最も多く掲載されている媒体は、IBJ公式サイトの相談所ページです。当サイトでは掲載中の224件（全23ページ）を全件確認し、本文に各テーマの語句（例：「返信」「レスポンス」）を含む投稿の件数を数えました。1件に複数のテーマが含まれる場合は、それぞれで数えています。本文のない投稿3件を除く221件が集計対象です。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">テーマ</th>
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C] whitespace-nowrap">件数</th>
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">内容の傾向</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">料金の安さ</td><td className="px-4 py-3">110件</td><td className="px-4 py-3">「リーズナブル」「良心的」など、IBJ加盟店の中で料金が安い点に触れた投稿</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">カウンセラーの親身さ・丁寧さ</td><td className="px-4 py-3">108件</td><td className="px-4 py-3">入会前の無料相談や担当カウンセラーの説明・相談対応に触れた投稿</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">オンライン・LINE・Zoom</td><td className="px-4 py-3">104件</td><td className="px-4 py-3">来店せずに手続き・相談が完結する点に触れた投稿</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">返信・レスポンス</td><td className="px-4 py-3">73件</td><td className="px-4 py-3">大半は返信の早さを評価する内容で、返信がない・遅いという不満も一部に含まれます</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">プロフィール作成</td><td className="px-4 py-3">70件</td><td className="px-4 py-3">自己紹介文の添削やカウンセラーPRの作成支援に触れた投稿</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">成婚の報告</td><td className="px-4 py-3">66件</td><td className="px-4 py-3">成婚退会した、または成婚予定であるという投稿</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">他社と比較して選んだ</td><td className="px-4 py-3">59件</td><td className="px-4 py-3">複数の相談所を比較した、または他社から移籍したという投稿</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">強引な勧誘・押し付けがない</td><td className="px-4 py-3">11件</td><td className="px-4 py-3">無料相談で勧誘やプランの押し付けがなかったという投稿</td></tr>
                <tr className="border-t border-gray-50 bg-red-50/40"><td className="px-4 py-3">星3以下の投稿</td><td className="px-4 py-3">15件</td><td className="px-4 py-3">本文のある13件の内訳：サポートは必要最低限・自分から動く必要がある 5件／返信がない・質問への対応が不十分 3件／IBJアプリ・システムの使いにくさや不具合 3件／活動前の説明不足 1件（重複あり）。星3のうち3件は、不満点の記載がない好意的な内容です</td></tr>
              </tbody>
            </table>
          </div>
          <ul className="space-y-1 text-xs text-[#2C2C2C]/60 leading-relaxed">
            <li>※出典：<a href="https://www.ibjapan.com/area/tokyo/00290/review/" target="_blank" rel="nofollow noopener noreferrer" className="underline">IBJ公式サイト ウェルスマのクチコミ一覧</a>（2026年10月25日に全23ページを確認）。分類は当サイトによる語句の集計で、口コミの本文は転載していません。</li>
            <li>※投稿時期は相対表記のみで、直近1年以内（「〇ヵ月前」以内の表示）の投稿は83件（うち星3以下11件）、残る141件は「1年前」〜「3年前」の表示です。</li>
            <li>※本文が完全に一致する投稿が7組（14件）あり、上の件数はそれらを含めて数えています。口コミは投稿者個人の見解で、当サイトでは事実関係を確認していません。</li>
            <li>※公式サイトの成婚者インタビュー「幸せレポート」は90件が掲載されています（2026年10月25日確認・一覧8ページ）。運営会社が掲載するもののため、不満の声は含まれません。</li>
          </ul>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mt-4">
            集計からは、料金の安さとオンラインで完結する手軽さ、担当カウンセラーの対応を評価する声が多いことがわかります。一方、低評価の投稿では「自分から相談しないとフォローがない」という趣旨が繰り返し見られ、公式が説明するマイペースプラン（紹介なし・LINE相談のみ）の位置づけと一致しています。手厚い伴走を希望する方は、サポートプラン以上の紹介人数・相談手段と、担当者の返信の目安を無料相談でご確認ください。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            ウェルスマの評判・口コミの調査結果
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            当サイトで「ウェルスマ 評判」「ウェルスマ 口コミ」を調査しました。件数がまとまっている媒体はIBJ公式サイトのクチコミ（224件・テーマ別の集計は前述）とGoogleマップ（163件・2026年8月18日取得）です。比較記事の中には独自アンケートや体験談を掲載したものもありますが、出典や回答者の条件が示されていないものや、現行と異なる旧料金が記載された古い情報も見られます。そのため当サイトでは、確認できる媒体の件数と内容の傾向に加えて、公式情報にもとづく入会前の確認ポイントを整理しています。
          </p>
          <div className="bg-[#FAFAF8] rounded-xl border border-gray-100 p-6">
            <h3 className="font-medium text-[#A08447] mb-4 tracking-wider">無料相談で確認したい5つのポイント</h3>
            <ul className="space-y-3 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">1.</span>最新の料金表（入会金49,800円・月会費11,800円〜・成婚料149,800円の現行料金と一致するか）</li>
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">2.</span>プランごとのサポート内容の違い（マイペース／サポート／プレミアムで何が変わるか）</li>
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">3.</span>成婚率86.1%の算出定義の説明が公式掲載どおりか（分母＝成婚退会者）</li>
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">4.</span>専任カウンセラーとの連絡頻度・返信スピードの目安（オンライン型では特に重要）</li>
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">5.</span>中途退会時の手続き・費用の扱い（公式FAQでは中途解約料なし。特定商取引法に基づく表示の精算方法とあわせて契約書面で確認）</li>
            </ul>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本記事は2026年7月31日時点の公式サイト掲載情報を基に作成し、料金・プラン内容・FAQ・特定商取引法に基づく表示は2026年10月25日、IBJ会員数は2026年10月21日に公式サイトで再確認しています。サービス内容・料金は変更される場合があります。</p>
        </section>

        {/* Compare links */}
              <FeePosition slug="wellsma" />

<section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            ウェルスマと他社の比較
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            ウェルスマが自分に合うか迷う場合は、料金総額（成婚料込み）・会員基盤・サポート形式を他社と比較することをおすすめします。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（一覧）を見る</Link></li>
            <li><Link href="/review/naco-do/" className="text-[#A08447] underline">naco-doの評判・料金を見る</Link></li>
            <li><Link href="/review/smartread/" className="text-[#A08447] underline">スマリッジの評判・料金を見る</Link></li>
            <li><Link href="/review/en-konkatsu/" className="text-[#A08447] underline">エン婚活エージェントの評判・料金を見る</Link></li>
          </ul>
        </section>

        {/* FAQ */}

        <ReviewExtra {...REVIEW_EXTRA} checkedOn="2026年10月25日" />
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
        <section className="mb-8">
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

        <A8Banner ad="wellsma" />
        <AuthorBox />
        <BrandStores href="/review/wellsma/" brandName="ウェルスマ" />
      </article>
    </>
  );
}
