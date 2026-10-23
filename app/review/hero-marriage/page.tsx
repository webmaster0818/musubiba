import Link from "next/link";
import { ReviewVoices } from "@/components/ReviewFacts";
import Breadcrumb from "@/components/Breadcrumb";
import FeePosition from "@/components/FeePosition";
import AuthorBox from "@/components/AuthorBox";
import A8Banner from "@/components/A8Banner";
import FlowGuide from "@/components/FlowGuide";
import ReviewExtra from "@/components/ReviewExtra";

export const metadata = {
  title: "ヒーローマリッジの口コミ・評判｜IBJ口コミ42件をテーマ別に集計・料金・運営会社を検証【男性専門・2026年10月】",
  description:
    "男性専門の結婚相談所ヒーローマリッジ（株式会社アルファブル運営・IBJ加盟・2023年開業）の口コミ・評判を、IBJ公式サイトの口コミ42件のテーマ別集計と公式情報で検証しています。初期費用165,000円・月会費14,300円〜・成婚料220,000円（税込）の総額目安と、悪い口コミの内容を解説します。",
  alternates: { canonical: "/review/hero-marriage/" },
};

const overview = {
  name: "ヒーローマリッジ",
  company: "株式会社アルファブル（東京都中野区中央3-20-2・特定商取引法表記で確認）。2023年開業（同社の2025年3月13日配信プレスリリースの記載）",
  type: "男性専門・仲人型（IBJ＝日本結婚相談所連盟 加盟）",
  members: "IBJの相談所ページに「100名以上の会員が在籍」と表記（2026年10月23日確認・正確な人数は非公開）。お見合いの申込先はIBJの会員ネットワーク",
  area: "東京・新宿の拠点「ヒーローベース」（公式表記「東京・新宿にて営業中」）＋全国オンライン対応",
  initialFee: "165,000円（入会金33,000＋登録料66,000＋活動サポート費66,000・税込）",
  monthlyFee: "14,300円〜27,500円（税込・3プラン）",
  omiaiFee: "0円",
  matchingFee: "220,000円（税込・自社イベント経由の成婚は50%割引と公式記載）",
  successRate: "非公開（公式サイトに成婚率の数値記載なし・2026年10月14日確認）",
  award: "IBJの相談所ページの受賞歴：IBJ AWARD BEST ROOKIE（2023年下期・2024年上期／下期）、IBJ AWARD PREMIUM（2025年上期／下期・2026年上期）（2026年10月23日確認）",
};

const strengths = [
  {
    title: "男性専門の結婚相談所として男性の婚活課題に特化",
    desc: "ヒーローマリッジは会員を男性に限定した男性専門の結婚相談所です。プロフィール作成・写真・お見合いでの立ち居振る舞いなど、男性がつまずきやすいポイントに絞ったサポート設計を公式に掲げています。男女両方を扱う相談所と違い、ノウハウが男性向けに集約されているのが特徴です。",
  },
  {
    title: "プロカメラマン撮影が何度でも無料、写真のABテストにも対応",
    desc: "公式サイトによれば、プロフィール写真はプロカメラマンによる撮影が何度でも無料で、複数の写真でABテストを行い反応の良い写真を採用する仕組みがあります。写真撮影が有料オプション（1〜3万円程度）の相談所も多い中、撮り直し無料は費用面のメリットです。",
  },
  {
    title: "データにもとづく「ロジカル婚活」と月3名の紹介",
    desc: "感覚ではなくデータ・検証を重視する「ロジカル婚活」を公式に打ち出しており、毎月3名の紹介とLINEでの日常的なサポートが受けられます。お見合い申込みは月200件まで可能で、IBJの全国会員ネットワークが対象です。",
  },
  {
    title: "開業以来、IBJ AWARDを毎期受賞（IBJの相談所ページで確認）",
    desc: "IBJの相談所ページに掲載されている受賞歴は、IBJ AWARD BEST ROOKIE（2023年下期・2024年上期・2024年下期）と IBJ AWARD PREMIUM（2025年上期・2025年下期・2026年上期）の計6期です（2026年10月23日確認）。公式サイトでは「5期連続受賞」と表記しています（2026年10月14日確認）。IBJ AWARDはIBJが成婚数などの基準で加盟相談所を表彰する制度で、受賞歴は活動実態を知るうえで1つの参考になります。ただし成婚率そのものを示す指標ではありません。",
  },
];

const pros = [
  "男性専門でサポートノウハウが男性向けに特化している",
  "プロカメラマン撮影が何度でも無料＋写真ABテストあり",
  "お見合い料0円・申込みは月200件まで可能",
  "IBJ加盟で全国の会員ネットワークからお相手を探せる",
  "自社イベント経由の成婚は成婚料50%割引の記載あり",
];

const cons = [
  "成婚率の公式数値が公開されていない",
  "成婚料220,000円は業界内でも高めの水準",
  "契約は6ヶ月自動更新のため、中途解約時の条件確認が必要",
  "対面拠点は東京・新宿の「ヒーローベース」1ヶ所で、地方は対面サポートを受けにくい",
  "口コミはIBJ公式サイトの42件が中心で、同一・ほぼ同一の文面が4組含まれる",
  "IBJの口コミ42件のうち6件は、サポート不足・年収面の助言・担当変更などへの不満に触れている",
];

const faqs = [
  {
    q: "ヒーローマリッジとはどのような結婚相談所ですか？",
    a: "株式会社アルファブル（東京都中野区）が運営する、男性専門の結婚相談所です。2023年に開業し（同社の2025年3月13日配信プレスリリースの記載）、IBJ（日本結婚相談所連盟）に加盟しています。活動はオンライン面談・LINE相談が中心で全国から入会でき、東京・新宿に対面拠点「ヒーローベース」があります。料金は初期費用165,000円・月会費14,300円〜27,500円・成婚料220,000円（税込・お見合い料0円）です。成婚率は公表されていません。",
  },
  {
    q: "ヒーローマリッジの悪い口コミ・評判にはどのような内容がありますか？",
    a: "IBJ公式サイトの相談所ページに掲載されている口コミ42件（2026年10月23日確認）を当サイトで分類すると、不満や注意点に触れた投稿は6件でした。内訳は、サポートが不十分だったという内容4件、年収に関する助言や「年収が高くないと成婚は難しい」という趣旨の内容4件、お見合い相手への不満（会員の質や真剣交際に進めなかったこと）3件、費用負担への不満1件、成婚直前の担当変更と引継ぎへの不満1件、動画コンテンツが大手より少ないという指摘1件です（1件に複数の論点を含みます）。なお、サポート不足・年収に関する4件のうち2件は同じ投稿者によるほぼ同一の文面です。口コミは投稿者個人の見解で、当サイトでは事実関係を確認していません。",
  },
  {
    q: "ヒーローマリッジの良い口コミ・評判にはどのような内容がありますか？",
    a: "同じIBJの口コミ42件（2026年10月23日確認）では、担当アドバイザーの相談対応・月1回の面談・LINE相談などサポートを評価する投稿が24件と最も多く、成婚または交際成立に触れた投稿が12件、会員交流会などのイベントに触れた投稿が5件、オンラインで完結できる点や遠方から利用できた点に触れた投稿が4件でした（重複投稿を含み、1件に複数の論点を含みます）。",
  },
  {
    q: "ヒーローマリッジの料金は総額いくらかかりますか？",
    a: "公式公表の料金（税込・2026年10月14日確認）は、入会金165,000円（全プラン共通。ヒーローマリッジ登録費用・IBJシステム登録費用・活動までの事務手続きサポート費用）＋月会費（ライト14,300円／スタンダード16,500円／プロ27,500円）＋成婚料220,000円で、お見合い料は0円です。スタンダードプランで1年活動して成婚した場合の総額目安は約583,000円（165,000＋16,500×12＋220,000）です。ご利用前に、公式サイトおよび無料相談にて最新の料金・契約条件をご確認ください。",
  },
  {
    q: "ヒーローマリッジの成婚率はどのくらいですか？",
    a: "2026年10月14日時点の当サイト調査では、公式サイトに成婚率の数値は公開されていません。「グループ累計支援男性数46,000人以上」という数字が掲載されていますが、これは運営グループ全体の支援人数で、ヒーローマリッジ単体の成婚実績を示すものではない点に注意が必要です。IBJの相談所ページには成婚者エピソード5件とIBJ AWARDの受賞歴（2023年下期〜2026年上期の6期）が掲載されています（2026年10月23日確認）。成婚実績の詳細は無料相談で直接確認することをおすすめします。",
  },
  {
    q: "運営会社はどこですか？",
    a: "特定商取引法にもとづく表記によれば、運営は株式会社アルファブル（東京都中野区中央3-20-2）です。公式サイトのトップページには法人名の記載がないため、契約前に特商法ページで運営者情報・解約条件を確認しておくと安心です。",
  },
  {
    q: "契約期間や解約の条件はどうなっていますか？",
    a: "公式情報によれば契約は6ヶ月ごとの自動更新で、契約書面受領日から8日以内であればクーリングオフが可能です。結婚相談所は特定商取引法の特定継続的役務提供に該当するため、中途解約時の精算ルールも法律で定められています。自動更新のタイミングと中途解約時の返金条件は、契約前に書面にてご確認ください。",
  },
  {
    q: "女性でも入会できますか？",
    a: "ヒーローマリッジは男性専門の結婚相談所のため、入会対象は男性です。女性の方は、当サイトの料金比較一覧などから男女両方に対応した相談所をご検討ください。",
  },
  {
    q: "オンラインだけで活動できますか？",
    a: "公式サイトでは全国オンライン対応を掲げており、地方在住でも活動可能とされています。東京・新宿の拠点「ヒーローベース」は公式サイトで「営業中」と表記されており、模擬お見合いや身だしなみチェックを対面で受けられます（2026年10月14日確認）。",
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
  { name: "マリッジプロ", path: "/review/marriage-pro/" },
  { name: "ムスベル", path: "/review/musbell/" },
  { name: "naco-do", path: "/review/naco-do/" },
  { name: "ブライダルチューリップ", path: "/review/bridal-tulip/" },
  { name: "料金比較一覧", path: "/compare/" },
];

// 競合上位記事との差分（2026-10-14 競合比較で追加）
const REVIEW_EXTRA = {
  "name": "ヒーローマリッジ",
  "ratingNotes": [
    "IBJ公式サイト（日本結婚相談所連盟の運営サイト）の相談所ページに、口コミ42件と成婚者エピソード5件が掲載されています（2026年10月23日確認。10月14日時点は40件）。当サイトでは点数ではなく内容をテーマ別に集計し、本ページの「IBJ公式サイトの口コミ42件をテーマ別に集計」に掲載しています。",
    "「ヒーローマリッジ 口コミ」で上位に表示される比較記事の多くは、Googleマップや公式X（旧Twitter）の投稿を数件引用する形式で、件数や集計方法を示した記事は確認できませんでした（2026年10月23日当サイト調査）。"
  ],
  "fitYes": [
    "恋愛・婚活の経験が少なく、写真・服装・会話から改善したい男性",
    "データを見ながら申し込みや振り返りを進めたい人",
    "新宿の拠点（ヒーローベース）で模擬お見合いや身だしなみチェックを受けたい人",
    "全国からオンラインで活動したい男性"
  ],
  "fitNo": [
    "女性（男性専門のため入会できません）",
    "成婚料220,000円を含む総額を抑えたい人",
    "細かい改善指導より自分のペースで進めたい人"
  ],
  "facts": [
    "公式サイトのトップページには成婚者3人の活動データが掲載されています。E.S.様（33歳・大阪）申込33・申受61・お見合い21・仮交際7（お見合い成立率22.3%）／K.F.様（23歳・愛知）申込84・申受0・お見合い5・仮交際2（同6.0%）／H.T.様（28歳・福岡）申込137・申受2・お見合い18・仮交際6（同13.0%）。在籍の数値はそれぞれ166・152・241（単位の記載なし）。",
    "東京・新宿の拠点「ヒーローベース」は「Now Open 東京・新宿にて営業中」と表記されています（模擬お見合い・身だしなみチェック等）。",
    "「1人も会えなかったら返金保証」（保証条件あり・詳細は無料相談）の記載があります。",
    "プロカメラマン撮影・撮影A/Bテスト・プロフィール作成は無料で、リアル模擬お見合いは3,000円、買物同行は入会時1回無料です。",
    "グループ累計支援男性数46,000人以上、IBJ AWARD 5期連続受賞を掲げています（自社公称）。"
  ]
};

export default function HeroMarriageReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "ヒーローマリッジ" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          ヒーローマリッジの口コミ・評判｜料金・成婚実績を公式情報で検証
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月23日（料金は2026年10月14日に公式サイトで確認し、10月23日にIBJの相談所ページで同額を確認。口コミ件数・受賞歴は10月23日確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />ヒーローマリッジとは（運営会社・形態・料金・口コミの傾向）
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>運営・形態</strong>：株式会社アルファブル（東京都中野区）が2023年に開業した、IBJ加盟の<strong>男性専門の結婚相談所</strong>です。オンライン面談・LINE相談を中心に全国で活動でき、東京・新宿に対面拠点「ヒーローベース」があります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>特徴</strong>：何度でも無料のプロカメラマン撮影と写真ABテスト、データを重視する「ロジカル婚活」、月3名の紹介とLINEサポートを主なサービスとしています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>料金</strong>：初期費用165,000円＋月会費14,300〜27,500円＋成婚料220,000円（税込・お見合い料0円）。<strong>スタンダードプランで1年成婚した場合の総額目安は約58.3万円</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>適している方</strong>：写真・プロフィールを重点的に改善したい男性、感覚ではなくデータにもとづいて婚活を進めたい男性、オンライン中心で活動したい男性に適しています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>口コミの傾向</strong>：IBJ公式サイトの口コミ42件（2026年10月23日確認）では、アドバイザーのサポートを評価する投稿が24件と最も多い一方、サポート不足や年収面の助言への不満に触れた投稿も6件あります（<a href="#review-themes" className="underline text-[#A08447]">テーマ別の集計</a>）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>注意点</strong>：<strong>成婚率の公式数値は非公開</strong>のため、実績の確認は無料相談での質問が中心になります（確認のポイントは本文で説明しています）。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本ページの料金・実績等は公式サイトの公表情報（2026年10月14日確認・税込）と、IBJの相談所ページ（2026年10月23日確認）にもとづきます。ご利用前に、<strong>公式サイトおよび無料相談</strong>にて最新の数値・契約条件をご確認ください。</p>
        </div>

        <A8Banner ad="hero" />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="bg-[#A08447] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
          <div className="divide-y divide-gray-50">
            {Object.entries({
              サービス名: overview.name,
              運営会社: overview.company,
              タイプ: overview.type,
              会員数: overview.members,
              対応エリア: overview.area,
              初期費用: overview.initialFee,
              月会費: overview.monthlyFee,
              お見合い料: overview.omiaiFee,
              成婚料: overview.matchingFee,
              成婚率: overview.successRate,
              受賞歴: overview.award,
            }).map(([k, v]) => (
              <div key={k} className="flex px-6 py-3.5 text-sm">
                <span className="w-28 shrink-0 font-medium text-[#2C2C2C]/50 tracking-wider">{k}</span>
                <span className="text-[#2C2C2C]">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">ヒーローマリッジの強み・特徴</h2>
          <div className="space-y-6">
            {strengths.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-medium text-lg mb-2 text-[#A08447] tracking-wider">{s.title}</h3>
                <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="bg-green-50/50 rounded-xl p-6">
            <h3 className="font-medium text-green-800 mb-4 tracking-wider">メリット</h3>
            <ul className="space-y-2">
              {pros.map((p) => (<li key={p} className="text-sm text-[#2C2C2C]/70 flex gap-2"><span className="text-green-500 shrink-0">+</span>{p}</li>))}
            </ul>
          </div>
          <div className="bg-red-50/50 rounded-xl p-6">
            <h3 className="font-medium text-red-800 mb-4 tracking-wider">デメリット・注意点</h3>
            <ul className="space-y-2">
              {cons.map((c) => (<li key={c} className="text-sm text-[#2C2C2C]/70 flex gap-2"><span className="text-red-400 shrink-0">-</span>{c}</li>))}
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">料金プランと総額の目安（税込・2026年10月14日公式再確認）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            初期費用と成婚料は全プラン共通で、月会費が3プランに分かれています。お見合い料は0円のため、<strong>初期費用＋月会費×活動月数＋成婚料</strong>で総額を見積もれます。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">初期費用（全プラン共通）</td><td className="px-4 py-3">165,000円（入会金33,000＋登録料66,000＋活動サポート費66,000）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">月会費（ライト）</td><td className="px-4 py-3">14,300円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">月会費（スタンダード）</td><td className="px-4 py-3">16,500円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">月会費（プロ）</td><td className="px-4 py-3">27,500円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">お見合い料</td><td className="px-4 py-3">0円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">成婚料</td><td className="px-4 py-3">220,000円（自社イベント経由の成婚は50%割引＝110,000円と公式記載）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">スタンダード1年活動（成婚なし）</td><td className="px-4 py-3">約363,000円（初期165,000＋月16,500×12）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">スタンダード1年で成婚した場合</td><td className="px-4 py-3 font-medium">約583,000円（上記＋成婚料220,000）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※金額はすべて税込・2026年10月14日に公式サイトの料金プラン欄で確認した公表値です。2026年10月23日にIBJの相談所ページでも、スタンダードプランの初期費用165,000円・月会費16,500円・成婚料220,000円・お見合い料0円が同額で掲載されていることを確認しました。契約は6ヶ月ごとの自動更新、契約書面受領日から8日以内はクーリングオフ可能とされています。プランごとのサポート内容の違い・中途解約時の精算条件は、無料相談および契約書面にてご確認ください。相場との比較は<Link href="/knowledge/cost/" className="underline text-[#A08447]">料金相場の解説</Link>も参考になります。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">成婚実績の読み方</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            2026年10月14日時点の当サイト調査では、ヒーローマリッジの<strong>成婚率を示す公式数値は公開されていません</strong>。公式サイトには「グループ累計支援男性数46,000人以上」という数字がありますが、これは運営グループ全体の支援人数で、<strong>ヒーローマリッジ単体の成婚実績を示すものではありません</strong>。一方で、IBJの相談所ページに掲載されたIBJ AWARDの受賞歴（2023年下期〜2026年上期の6期・2026年10月23日確認。公式サイトの表記は「5期連続」）は、活動実態を知るうえで1つの参考になります。
          </p>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
            成婚率は相談所ごとに計算方法（分母の取り方）が異なるため、数値がある場合でも定義の確認が欠かせません。数値が非公開の場合は、無料相談で「直近1年の成婚退会数」「ご自身と近い条件の会員の活動事例」を具体的に質問し、回答の具体性で判断することをおすすめします。
          </p>
        </section>

        <ReviewVoices
          name="ヒーローマリッジ"
          checkedOn="2026年10月14日"
          reviewNote="ヒーローマリッジは新宿の「ヒーローベース」と全国オンライン対応で運営されており、当サイトのGoogleマップ調査（13都道府県）では口コミのある店舗は確認できませんでした。2026年10月14日に公式サイトを再確認し、料金（入会金165,000円・月会費14,300円〜27,500円・成婚退会費220,000円）に7月からの変更がないこと、「1人も会えなかったら返金保証（条件あり）」の記載、グループ累計支援男性数46,000人以上（ページ内に44,000人以上の表記も混在）を確認しました。"
        />

        <section id="review-themes" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">IBJ公式サイトの口コミ42件をテーマ別に集計（2026年10月23日確認）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            ヒーローマリッジの口コミがまとまって掲載されている媒体は、IBJ公式サイトの相談所ページです。当サイトでは掲載中の42件（投稿時期の表示は「1年前」〜「2日前」）を全件確認し、本文の内容をテーマ別に分類しました。1件に複数の論点がある場合は、それぞれのテーマで数えています。本文のない投稿は4件で、残る38件が集計対象です。
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
                <tr className="border-t border-gray-50"><td className="px-4 py-3">アドバイザーのサポートを評価</td><td className="px-4 py-3">24件</td><td className="px-4 py-3">月1回の面談、LINEでの随時相談、マニュアル・セミナー、異性との接し方への助言などに触れた投稿</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">成婚・交際成立に言及</td><td className="px-4 py-3">12件</td><td className="px-4 py-3">成婚退会した、または交際に至ったという投稿。活動期間に触れたものは約5ヶ月〜約1年</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">会員交流会・イベント</td><td className="px-4 py-3">5件</td><td className="px-4 py-3">男性会員同士の交流会やオフラインイベントに触れた投稿</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">オンライン完結・遠方からの利用</td><td className="px-4 py-3">4件</td><td className="px-4 py-3">店舗に通わずに活動できた点や、地方から利用できた点に触れた投稿</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">出会いへの満足（成婚の記載なし）</td><td className="px-4 py-3">3件</td><td className="px-4 py-3">普段の生活では出会えない相手と出会えたという短い投稿</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">写真・プロフィール支援</td><td className="px-4 py-3">2件</td><td className="px-4 py-3">毎月の写真撮影やプロフィール作成の支援に触れた投稿</td></tr>
                <tr className="border-t border-gray-50 bg-red-50/40"><td className="px-4 py-3">不満・注意点に触れた投稿</td><td className="px-4 py-3">6件</td><td className="px-4 py-3">サポート不足 4件／年収に関する助言・「年収が高くないと難しい」という趣旨 4件／お見合い相手への不満（会員の質・真剣交際に進めない） 3件／費用負担 1件／成婚直前の担当変更と引継ぎ 1件／動画コンテンツが大手より少ない 1件（重複あり）</td></tr>
              </tbody>
            </table>
          </div>
          <ul className="space-y-1 text-xs text-[#2C2C2C]/60 leading-relaxed">
            <li>※出典：<a href="https://www.ibjapan.com/area/tokyo/62664/review/" target="_blank" rel="nofollow noopener noreferrer" className="underline">IBJ公式サイト ヒーローマリッジのクチコミ一覧</a>（2026年10月23日に全5ページを確認）。分類は当サイトによるもので、口コミの本文は転載していません。</li>
            <li>※同一またはほぼ同一の文面の投稿が4組（8件）あり、上の件数はそれらを含めて数えています。不満に触れた6件のうち2件も、同じ投稿者によるほぼ同一の文面です。</li>
            <li>※投稿者の年齢・属性はほとんど表示されておらず、投稿日も相対表記のみです。口コミは投稿者個人の見解で、当サイトでは事実関係を確認していません。</li>
          </ul>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mt-4">
            集計からは、担当者による伴走型のサポートを評価する声が多い一方、サポートの手厚さの感じ方には個人差があり、年収などの条件面で活動が難しかったと感じた方もいることがわかります。入会前の無料相談では、ご自身の年齢・年収に近い会員のお見合い成立状況と、担当者が変わる場合の引継ぎ方法を確認しておくことをおすすめします。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">口コミ・評判の掲載状況と確認のポイント</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            2026年7月時点の当サイト調査では出典を確認できる口コミの一次情報は見つかりませんでしたが、10月14日の再調査で、IBJ公式サイトの相談所ページに口コミが掲載されていることを確認しました（10月14日時点40件、10月23日時点42件）。内容のテーマ別の集計は前述の表をご参照ください。当サイトでは実在しない口コミの作成・掲載は行っていません。以下では、公式情報をもとに検討時の確認ポイントを整理しています。
          </p>
          <ul className="space-y-3 text-sm text-[#2C2C2C]/70">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">1.</span><span><strong>客観的事実を確認する</strong>：IBJ加盟、特商法ページの運営者情報（株式会社アルファブル）、料金内訳の公開など、検証可能な情報は揃っています。トップページには法人名の記載がないため、特商法ページにて運営者情報をご確認ください。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">2.</span><span><strong>無料相談で「数字」を質問する</strong>：成婚率が非公開のため、直近の成婚退会数・お見合い成立率・ご自身と近い年齢層の活動事例を具体的に聞き、回答の具体性を判断材料にすることをおすすめします。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">3.</span><span><strong>契約条件を書面で確認する</strong>：6ヶ月自動更新の更新タイミング、中途解約時の精算、成婚の定義（IBJ準拠か）、成婚料の割引条件（自社イベント経由50%割引）の適用要件を書面にてご確認ください。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">4.</span><span><strong>写真サポートの実際を確かめる</strong>：「何度でも無料」の撮影の予約の取りやすさや、ABテストの運用実態は、無料相談で具体的に質問しておくと安心です。</span></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他社と比較して選ぶ</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            男性専門という特化型がご自身に合うかを判断する際は、仲人型の大手やオンライン型と料金総額・サポート体制を比較することをおすすめします。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較一覧を見る</Link></li>
            <li><Link href="/review/marriage-pro/" className="text-[#A08447] underline">マリッジプロの評判・料金を見る（プロカウンセラー特化）</Link></li>
            <li><Link href="/review/musbell/" className="text-[#A08447] underline">ムスベルの評判・料金を見る（複数連盟加盟の仲人型大手）</Link></li>
            <li><Link href="/review/naco-do/" className="text-[#A08447] underline">naco-doの評判・料金を見る（オンライン完結・低価格帯）</Link></li>
          </ul>
        </section>

        <ReviewExtra {...REVIEW_EXTRA} checkedOn="2026年10月23日" />
        <FlowGuide name={overview.name} initialFee={overview.initialFee} monthlyFee={overview.monthlyFee} matchingFee={overview.matchingFee} />

              <FeePosition slug="hero-marriage" />

<section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">よくある質問</h2>
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

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚相談所の基礎知識で判断材料を増やす</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/knowledge/cost/" className="text-[#A08447] underline">結婚相談所の料金相場は？初期費用・月会費・成婚料の目安</Link></li>
            <li><Link href="/knowledge/how-to-choose/" className="text-[#A08447] underline">結婚相談所の選び方｜仲人型とデータマッチング型の違い</Link></li>
            <li><Link href="/knowledge/flow/" className="text-[#A08447] underline">結婚相談所の入会から成婚までの流れ・活動期間の目安</Link></li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-light mb-4 tracking-widest">他の結婚相談所も見る</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link key={s.name} href={s.path} className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm font-normal hover:border-[#A08447] hover:text-[#A08447] transition-colors tracking-wider">{s.name}</Link>
            ))}
          </div>
        </section>

      <A8Banner ad="hero" />

        <section className="mb-12">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">男性の婚活で比較したい相談所</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            男性専門のヒーローマリッジと比較するなら、<Link href="/review/bridal-tulip/" className="text-[#A08447] underline">ブライダルチューリップ</Link>（高田馬場・3連盟で紹介可能会員約19万名）も候補になります。月会費7,550円〜と費用を抑えて始められる仲人型で、男性の入会も受け付けています。料金体系や成婚料の違いは、各レビューにてご比較ください。男性会員の費用の実額や男性向けサポートを軸に複数社を比較したい方は、<Link href="/mens/" className="text-[#A08447] underline">男性の結婚相談所おすすめ比較（男性向けハブ）</Link>もあわせてご覧ください。
          </p>
          <A8Banner ad="tulip-men" />
        </section>

      <AuthorBox />
      </article>
    </>
  );
}
