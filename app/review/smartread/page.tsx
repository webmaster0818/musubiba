import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FeePosition from "@/components/FeePosition";
import AuthorBox from "@/components/AuthorBox";
import FlowGuide from "@/components/FlowGuide";
import ReviewFacts from "@/components/ReviewFacts";

export const metadata = {
  title: "スマリッジ（smarriage）の口コミ・評判｜悪い口コミの傾向・料金・返金保証の条件【2026年10月】",
  description:
    "スマリッジの口コミ・評判を、口コミサイト掲載9件のテーマ別集計で整理しています。登録料6,600円・月会費9,900円・成婚料0円（2026年10月23日公式確認）、全額返金保証の対象外条件、割引別の1年総額、悪い口コミの傾向も掲載しています。",
};

const overview = {
  name: "スマリッジ",
  type: "オンライン完結型",
  members: "ご紹介可能会員数5万人以上／利用事業者会員数 約51,000人（いずれも2026年10月時点・公式）",
  area: "全国対応（オンライン）",
  initialFee: "6,600円",
  monthlyFee: "9,900円（割引適用で毎月1,100円引き）",
  matchingFee: "0円",
  age: "満20歳以上65歳未満の独身の方（U28割引は20〜28歳）",
  successRate: "1年以内の成婚率69%（2026年10月時点・公式。算出の詳細は下記）",
};

/*
 * 2026-10-23 追加: 口コミのテーマ別集計。
 * 出典は jm-h.com「スマリッジの口コミと評判」に掲載の全9件（2022年7月5日〜2026年9月30日投稿）。
 * 当サイトで1件ずつ読み、論点ごとに数えた（1件に複数の論点を含むため合計は9を超える）。
 * 本文の転載・媒体の星評価の転記はしない。
 */
const reviewThemes: { theme: string; count: number; side: "良い面" | "気になる面" }[] = [
  { theme: "料金の安さ・費用対効果に納得している", count: 8, side: "良い面" },
  { theme: "担当アドバイザーの返信・相談への対応を評価している", count: 4, side: "良い面" },
  { theme: "お見合い・交際・成婚に進んだと記載している", count: 3, side: "良い面" },
  { theme: "コネクトシップの画面・操作・連絡窓口が分かりにくい", count: 5, side: "気になる面" },
  { theme: "仲介が少なく、手厚いサポートを求める方には合わない（電話相談がない等）", count: 4, side: "気になる面" },
  { theme: "コンタクト成立後、お相手の日程調整が進まない", count: 3, side: "気になる面" },
  { theme: "コンタクトのキャンセル料・退会時の未消化案件の扱い", count: 3, side: "気になる面" },
  { theme: "待ち合わせ場所（駅・ホテルラウンジ）の決まり方", count: 2, side: "気になる面" },
  { theme: "全額返金保証の適用条件", count: 1, side: "気になる面" },
  { theme: "休会制度の開始時期・休会中の料金", count: 1, side: "気になる面" },
];

/* 全額返金保証の対象外条件（公式 料金案内の返金規約。2026年5月14日時点の掲載内容をInternet Archiveで確認） */
const refundExclusions = [
  "保証期間の満了日までに退会した場合",
  "契約成立日から1ヶ月以内に、マイページ上で紹介可能な状態にならなかった場合",
  "保証期間の満了日までに、会員の希望で紹介中止を申し出た場合",
  "保証期間中の各月に、紹介を受けたにもかかわらず自身の意思で会うことを希望しなかった場合（申し込まない・紹介を断る・相手からの申し出を断る等）",
  "保証期間の満了日以降、運営会社からの連絡に1ヶ月以上返答がない場合",
  "保証期間の満了日までに、希望条件を大きく変更した場合",
  "保証期間中の月会費の支払いが遅れた場合",
  "U28割引・エリア割引・シングル親割引・のりかえ割・おかえり割のいずれかが適用されている場合",
  "会員数の少ない地域での活動であることを承諾した場合",
  "保証期間の満了日の時点で、回答待ちなどの進行中の案件がある場合",
];

const strengths = [
  {
    title: "登録料6,600円・月会費9,900円・成婚料0円のワンプラン",
    desc: "料金は1プランのみで、公式サイトの半年間の費用イメージは66,000円です（2026年10月14日確認）。成婚料がかからないため、1年活動して成婚退会しても総額は125,400円の計算です。当サイトの24社料金データでも初期費用は最も低い水準です。",
  },
  {
    title: "IBJ online／コネクトシップの2つから活動先を選べる",
    desc: "IBJ online（チームサポート・お見合い申込み毎月40名まで）と、コネクトシップ（担当制・お見合い申込み毎月10名まで＋自動マッチングによる紹介毎月最大6名）の2つのプラットフォームで活動できます。お見合いの申し受けは無制限です。ご紹介可能会員数は5万人以上、利用事業者会員数は約51,000人（いずれも2026年10月時点・公式）と公表されています。",
  },
  {
    title: "手続きから相談までオンラインで完結します",
    desc: "入会手続きからカウンセリング、お見合いの申し込みまで、すべてオンラインで完結します。来店の必要がないため、仕事が忙しい方や地方在住の方でも場所を選ばず活動できます。",
  },
];

const pros = [
  "登録料6,600円・成婚料0円で1年総額125,400円の計算",
  "3ヶ月でコンタクト（お見合い）が成立しなければ登録料と月会費3ヶ月分を返金する保証あり（適用条件あり）",
  "完全オンライン完結で来店不要",
  "独身証明書の提出率100%（2026年10月時点・公式）",
];

const cons = [
  "対面でのサポートが受けられない",
  "全額返金保証は割引・のりかえ割と併用できず、IBJ onlineでの活動は判定の対象外",
  "コネクトシップの画面や日程調整の操作性を指摘する口コミが多い（9件中5件）",
  "コンタクト成立後にお相手との日程調整が進まないという口コミがある（9件中3件）",
];

const faqs = [
  {
    q: "スマリッジの悪い口コミ・評判にはどのような内容がありますか？",
    a: "口コミサイト（jm-h.com）に掲載されている9件（2022年7月〜2026年9月投稿）を当サイトで分類すると、コネクトシップの画面・操作・連絡窓口が分かりにくいという内容が5件、仲介が少なく手厚いサポートを求める方には合わないという内容が4件、コンタクト成立後にお相手の日程調整が進まないという内容が3件、コンタクトのキャンセル料や退会時の未消化案件の扱いに関する内容が3件でした（1件に複数の論点を含みます）。一方で、9件中8件が料金の安さには納得していると記載しています（2026年10月23日確認）。口コミは投稿者個人の見解で、当サイトでは事実関係を確認していません。",
  },
  {
    q: "スマリッジは「会えない」という評判は本当ですか？",
    a: "口コミには、コンタクト成立後にお相手が日程調整に応じず、会うまで進まなかったという声があります（9件中3件）。一方で、お見合い・交際・成婚に進んだと記載している口コミも3件あります。仕組みとしては、コネクトシップの申込みが毎月10名・紹介が毎月最大6名、IBJ onlineの申込みが毎月40名までで、申し受けは無制限です（2026年10月23日公式確認）。会えるかどうかは地域・年齢・希望条件によって変わるため、無料相談でご自身の条件に合う会員の状況を確認することをおすすめします。",
  },
  {
    q: "公式サイトの「1年以内の成婚率69%」はどのような数値ですか？",
    a: "公式サイトのトップページに「1年以内の成婚率69%（2026年10月時点）」と掲載されており、注記は「直近1年以内に成婚した会員の方を対象に算出」です（2026年10月23日確認）。分母（どの会員を母数にしたか）や成婚の定義は同じページに記載がないため、他社の成婚率とそのまま比較することはおすすめしません。成婚率の算出方法は相談所ごとに異なります。",
  },
  {
    q: "スマリッジの入会条件はありますか？",
    a: "公式の入会資格では、満20歳以上65歳未満の独身の方で、結婚または結婚につながる交際を希望していることが条件です。男性は定職に就き、一定の安定した収入があることが求められます（女性は必須ではありません）。活動にあたっては、本人確認書類・独身証明書・収入証明書・学歴証明書（高専・短大卒以上）・資格証明書類（資格を要する職業の方）の提出が必要です（2026年5月時点の公式掲載内容。2026年10月23日は公式の下層ページがメンテナンス中で再確認できませんでした）。",
  },
  {
    q: "現在スマリッジに入会できますか？",
    a: "公式サイトは2026年10月22日から、PHPの脆弱性公表を受けた予防的なメンテナンスを行っており、新規会員登録・マイページへのログイン・各種申込みフォーム・トップページ以外の閲覧を停止しています。停止期間は数日程度の見込みで、情報漏洩などの被害は確認されていないと告知されています（2026年10月23日確認）。入会を検討される方は、公式サイトで再開のお知らせをご確認ください。",
  },
  {
    q: "コネクトシップとは何ですか？",
    a: "複数の結婚相談所が会員データベースを共有するプラットフォームです。スマリッジではコネクトシップのお見合い（コンタクト）成立は毎月8件まで無料、9件目以降は1件1,100円です（2026年10月14日公式確認）。",
  },
  {
    q: "スマリッジの無料相談では何ができますか？",
    a: "公式サイトのトップページに「無料の入会相談」の案内があります。ただし2026年10月31日時点では、システムメンテナンスのため新規入会と各種申込みフォームが停止されており、相談の内容を説明する下層ページも閲覧できません（出典：https://s-marriage.jp/・2026年10月31日確認）。相談の進め方は、メンテナンス終了後に公式サイトでご確認ください。",
  },
  {
    q: "スマリッジの退会方法を教えてください",
    a: "公式の利用規約では、毎月15日までに申し出ると当月末で退会となり、月の途中で退会しても日割り計算はありません。休会は毎月15日までにメールで申し出ると翌月1日から1ヶ月単位で可能で、休会中の月会費は4,400円です（2026年10月21日 公式利用規約で確認）。口コミでは、退会時にコンタクト成立後の未消化案件があり、キャンセル料の負担を求められたという声もあるため、退会前に進行中の案件を確認しておくことをおすすめします。成婚料は0円のため、成婚退会時の追加費用はかかりません。",
  },
  {
    q: "スマリッジは対面でのお見合いもできますか？",
    a: "はい。お見合い自体は対面で行うことも可能です。お見合いの日程調整やセッティングはオンラインで行いますが、実際のお見合いはカフェやホテルラウンジにて対面で実施できます。",
  },
  {
    q: "スマリッジの成婚退会までの平均期間はどのくらいですか？",
    a: "公式サイトに平均期間の公表は見当たりませんでした（2026年10月14日確認）。月会費制で成婚料が0円のため、期間が延びた分だけ月会費9,900円が加算されます。",
  },
  {
    q: "スマリッジの全額返金保証の条件は？",
    a: "紹介可能な状態になった月から3ヶ月目の末日までにコネクトシップでのコンタクト（お見合い）が成立しなかった場合、登録料と3ヶ月分の月会費が返金されます。期間中の退会、紹介を自分から断った場合、U28・エリア・シングル親・のりかえ等の割引を使った場合は対象外で、申し出は期間満了の翌日から2週間以内です（2026年10月14日公式確認）。IBJ onlineでの申込みやトライアルデートの成立は判定に含まれず、適用は1回のみです。対象外となる10項目は本ページの「全額返金保証の対象外条件」でご確認ください。",
  },
  {
    q: "スマリッジは料金が安い分、サービス内容に問題はありませんか？",
    a: "運営はSEモバイル・アンド・オンライン株式会社（東証スタンダード上場のSEH&Iグループ）です。安さの理由は来店型の店舗を持たないオンライン専業である点と、サポートがチーム制（IBJ online）または担当制（コネクトシップ）に絞られている点です。手厚い仲人型サポートを求める方には、物足りない可能性があります。",
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
  { name: "naco-do", path: "/review/naco-do/" },
  { name: "エン婚活エージェント", path: "/review/en-konkatsu/" },
  { name: "フィオーレ", path: "/review/fiore/" },
  { name: "マーズカフェ", path: "/review/mars-cafe/" },
];

export default function SmartreadReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "スマリッジ" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          スマリッジ（smarriage）の口コミ・評判｜悪い口コミの傾向・料金・返金保証の条件
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月23日（料金・会員数・実績値は2026年10月23日に公式サイトで確認。返金保証規約・割引条件・入会資格は、公式の下層ページがメンテナンス中のため2026年10月14日の確認内容と2026年5月時点の公式掲載内容によります）</p>

        <div className="bg-[#FAFAF8] border border-[#A08447]/30 rounded-xl p-5 mb-6 text-sm text-[#2C2C2C]/80 leading-relaxed">
          <p className="font-medium text-[#2C2C2C] mb-1">公式サイトのメンテナンスについて（2026年10月23日確認）</p>
          <p>
            スマリッジの公式サイトは2026年10月22日から、PHPの脆弱性公表を受けた予防的なメンテナンスを行っており、新規会員登録・マイページへのログイン・各種申込みフォーム・トップページ以外の閲覧を停止しています。停止期間は数日程度の見込みと告知されています。入会を検討される方は、公式サイトで再開のお知らせをご確認ください。
          </p>
        </div>

        <section className="mb-8 bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-lg font-medium mb-3 tracking-wider text-[#2C2C2C]">スマリッジの口コミ・評判の概要</h2>
          <ul className="space-y-2 text-sm text-[#2C2C2C]/80 leading-relaxed list-disc pl-5">
            <li>口コミサイト（jm-h.com）掲載の9件を当サイトで分類すると、料金の安さに納得している声が8件と最も多く、気になる点ではコネクトシップの画面・操作の分かりにくさ（5件）、仲介の少なさ（4件）、日程調整が進まない（3件）が挙がっています（2026年10月23日確認）。</li>
            <li>料金は登録料6,600円・月会費9,900円・成婚料0円で、割引なしで1年活動した場合の総額は125,400円の計算です（2026年10月23日公式確認）。</li>
            <li>全額返金保証は、コネクトシップで3ヶ月間コンタクトが成立しなかった場合が対象です。割引の利用やIBJ onlineでの活動は対象外となるため、利用前に10項目の対象外条件をご確認ください。</li>
            <li>自分で申込みや日程調整を進められる方には費用を抑えやすい一方、担当者に活動を主導してほしい方には、仲人型の相談所との比較をおすすめします。</li>
          </ul>
        </section>

        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=J112188.1.Z162495D.Z1361712" target="_blank" rel="nofollow noopener noreferrer" className="text-[#A08447] hover:underline font-medium">
            スマリッジ の公式サイトはこちら
          </a>
        </p>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <img src="/ss-smartread.jpg" alt="スマリッジ 公式サイト" className="w-full h-auto" />
          <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: 公式サイトより</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="bg-[#A08447] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
          <div className="divide-y divide-gray-50">
            {Object.entries({
              サービス名: overview.name,
              タイプ: overview.type,
              会員数: overview.members,
              対応エリア: overview.area,
              初期費用: overview.initialFee,
              月会費: overview.monthlyFee,
              成婚料: overview.matchingFee,
              年齢層: overview.age,
              成婚率: overview.successRate,
            }).map(([k, v]) => (
              <div key={k} className="flex px-6 py-3.5 text-sm">
                <span className="w-28 shrink-0 font-medium text-[#2C2C2C]/50 tracking-wider">{k}</span>
                <span className="text-[#2C2C2C]">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            スマリッジの強み・特徴
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
            <h3 className="font-medium text-red-800 mb-4 tracking-wider">デメリット</h3>
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

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            スマリッジの口コミをテーマ別に集計した結果
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            口コミ評判サイト jm-h.com の「スマリッジの口コミと評判」に掲載されている全9件（2022年7月〜2026年9月投稿）を当サイトで1件ずつ読み、論点ごとに件数を数えました（2026年10月23日確認）。1件に複数の論点を含むため、合計は9件を超えます。本文の転載と媒体の点数の転記は控えています。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C] whitespace-nowrap">区分</th>
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">口コミの論点</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C] whitespace-nowrap">件数（9件中）</th>
                </tr>
              </thead>
              <tbody>
                {reviewThemes.map((t) => (
                  <tr key={t.theme} className="border-t border-gray-50">
                    <td className={`px-4 py-3 whitespace-nowrap ${t.side === "良い面" ? "text-green-700" : "text-red-700"}`}>{t.side}</td>
                    <td className="px-4 py-3">{t.theme}</td>
                    <td className="px-4 py-3 text-center">{t.count}件</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="font-medium mb-3 tracking-wider text-[#2C2C2C]">口コミ掲載媒体の状況（2026年10月23日確認）</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">媒体</th>
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">件数・投稿期間・留意点</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">口コミ評判サイト jm-h.com</td><td className="px-4 py-3">9件（2022年7月〜2026年9月投稿）。上の表はこの9件の集計です</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">M2W（matching-two.com）</td><td className="px-4 py-3">170件（2020年9月〜2023年4月投稿）。投稿は2023年4月までのため、現在の料金・仕組みと異なる内容を含む可能性があります</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">みん評</td><td className="px-4 py-3">当サイトからは閲覧できませんでした（アクセス制限）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">Googleマップ</td><td className="px-4 py-3">店舗を持たないオンライン専業のため、店舗の口コミはありません</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
            否定的な口コミの多くは、スマリッジ自体よりも、活動の場であるコネクトシップの操作性や、お相手との日程調整に関するものです。公式サイトは店舗を持たず活動とサポートをオンライン化することで費用を抑えていると説明しており、担当者が日程調整まで代行する仲人型の相談所とはサポートの範囲が異なります。口コミは投稿者個人の見解で、当サイトでは事実関係を確認していません。
          </p>
        </section>

        <ReviewFacts
          name="スマリッジ"
          checkedOn="2026年10月23日"
          officialUrl="https://s-marriage.jp/"
          feeHead={["項目", "金額", "補足"]}
          feeRows={[
            ["登録料", "6,600円", "のりかえ割（他社で1年以内に活動）の対象者は無料。トップページに「今だけ！登録料0円」と表示（期間・条件の記載なし）"],
            ["月会費", "9,900円", "U28・エリア・シングル親の各割引で毎月1,100円引き（併用可・申請制）"],
            ["お見合い料", "IBJ online：0円／コネクトシップ：月8件まで0円・9件目から1件1,100円", "コネクトシップは「コンタクトし放題」月3,300円のオプションあり"],
            ["成婚料", "0円", "IBJ online・コネクトシップ共通"],
            ["休会中の月会費", "4,400円", "1ヶ月単位（2026年10月21日 公式利用規約で確認）"],
          ]}
          feeNotes={[
            "公式サイトの半年間の費用イメージは66,000円です。",
            "オプション（2026年5月時点の公式料金案内）：独身証明書取得サポート2,200円、紹介人数アップ（毎月最大8名に）2,200円、ピックアップ会員掲載1,100円、MYPR申込数5件アップ8,800円、婚活スタート講座（40分）4,400円、電話相談（30分）3,300円、オンライン面談（50分）8,800円。2026年10月23日は公式の下層ページがメンテナンス中のため再確認できませんでした。",
            "エリア割引の対象は、2026年5月時点の公式料金案内で青森・岩手・秋田・宮城・山形・福島・新潟・富山・石川・福井・山梨・長野・岐阜・三重・鳥取・島根・岡山・山口・徳島・香川・愛媛・高知・佐賀・長崎・熊本・大分・宮崎・鹿児島・沖縄の29県在住の方です。割引はコネクトシップ会員のみが対象です。",
          ]}
          estimate={[
            { label: "割引なし", formula: "6,600円＋9,900円×12＋0円", total: "125,400円" },
            { label: "U28割引のみ", formula: "6,600円＋8,800円×12＋0円", total: "112,200円" },
            { label: "U28割引＋エリア割引", formula: "6,600円＋7,700円×12＋0円", total: "99,000円" },
            { label: "3つの割引を併用", formula: "6,600円＋6,600円×12＋0円", total: "85,800円" },
            { label: "のりかえ割（登録料0円）", formula: "0円＋9,900円×12＋0円", total: "118,800円" },
          ]}
          company={[
            ["運営", "SEモバイル・アンド・オンライン株式会社（東証スタンダード上場 SEH&Iグループ）"],
            ["形態", "オンライン専業（店舗なし）"],
            ["活動先", "IBJ online（チームサポート）／コネクトシップ（担当制）"],
            ["会員数", "ご紹介可能会員数5万人以上／利用事業者会員数 約51,000人（2026年10月時点・公式）"],
            ["公表実績", "1年以内の成婚率69%・累計お見合い成立数5万件以上・独身証明書提出率100%（2026年10月時点・公式）"],
            ["第三者認証", "IMS結婚相手紹介サービス業認証・MCSA・プライバシーマーク・JMIC（公式掲載）"],
          ]}
          good={[
            { text: "料金の安さ・費用対効果に納得しているという声（9件中8件）", source: "jm-h.com 掲載の9件を当サイトで分類（2026年10月23日確認）" },
            { text: "担当アドバイザーの返信や相談への対応を評価する声（9件中4件）", source: "同上" },
            { text: "お見合い・交際・成婚に進んだという記載（9件中3件）", source: "同上" },
          ]}
          bad={[
            { text: "コネクトシップの画面・操作・連絡窓口が分かりにくいという声（9件中5件）", source: "jm-h.com 掲載の9件を当サイトで分類（2026年10月23日確認）" },
            { text: "仲介が少なく、手厚いサポートを求める方には合わないという声（9件中4件）", source: "同上" },
            { text: "コンタクト成立後の日程調整が進まない、キャンセル料を自己負担したという声（各9件中3件）", source: "同上" },
          ]}
          reviewNote="スマリッジの口コミは、口コミ評判サイト jm-h.com に9件（2022年7月〜2026年9月投稿）、M2W（matching-two.com）に170件（2020年9月〜2023年4月投稿）が掲載されています（2026年10月23日確認）。店舗がないため、Googleマップの口コミはありません。M2Wの投稿は2023年4月までのため、ここでは投稿時期が新しいjm-h.comの9件を中心に傾向をまとめています。"
          caution={[
            "名前が似た別サービス（スマ婚＝結婚式、スマ留＝留学）の口コミと混同しないようにしてください。",
            "割引を利用した場合、全額返金保証は対象外になります。1年総額を比較する際は、返金保証の利用を予定するかどうかもあわせてご検討ください。",
          ]}
          sources={[
            { name: "スマリッジ 料金案内（公式）", url: "https://s-marriage.jp/price/", note: "全額返金保証・割引の条件。2026年10月23日はメンテナンス中で閲覧不可" },
            { name: "スマリッジ メンテナンスのお知らせ（公式）", url: "https://s-marriage.jp/maintenance/index.html", note: "2026年10月23日確認" },
            { name: "スマリッジの口コミと評判（jm-h.com）", url: "https://jm-h.com/kuchikomi-smarriage", note: "9件・2026年10月23日確認" },
            { name: "スマリッジの口コミ・評判まとめ（M2W）", url: "https://matching-two.com/s-marriage/", note: "170件・2026年10月23日確認" },
          ]}
        />

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            スマリッジの全額返金保証の対象外条件
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            紹介可能な状態になった月を起算月として、3ヶ月目の末日までにコネクトシップでのコンタクト（会員双方がコンタクト希望の意思を示すこと）が成立しなかった場合に、登録料と3ヶ月分の月会費が返金されます。IBJ onlineでの申込み・トライアルデートの成立は判定に含まれません。申し出は期間満了日の翌日から2週間以内、適用は1回のみです。次のいずれかに当てはまる場合は対象外です。
          </p>
          <ol className="space-y-2 text-sm text-[#2C2C2C]/80 leading-relaxed list-decimal pl-6 mb-4">
            {refundExclusions.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ol>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            出典：スマリッジ公式 料金案内の全額返金保証規約（2026年5月14日時点の掲載内容をInternet Archiveで確認。基本条件と申し出期限は2026年10月14日に公式サイトで確認済み）。2026年10月23日は公式の下層ページがメンテナンス中で閲覧できなかったため、最新の規約は公式サイトでご確認ください。口コミには、コンタクトが1件成立したことで保証の対象外となったという声もあります（jm-h.com・9件中1件）。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 tracking-widest">他社との比較</h2>
          <p className="text-xs text-[#2C2C2C]/50 mb-3">※スマリッジは2026年10月23日、naco-do・エン婚活エージェントは2026年10月14日に各社公式サイトで確認した数値です。会員数の算出範囲と時点は各社で異なります（詳細は各レビューページに記載）。1年総額は登録料（初期費用）＋月会費×12ヶ月＋成婚料の単純計算で、お見合い料・オプションは含みません。最新情報は各レビューページをご確認ください。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">スマリッジ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">naco-do</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">エン婚活エージェント</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">9,900円</td><td className="px-4 py-3 text-center">16,800円</td><td className="px-4 py-3 text-center">16,500円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">6,600円</td><td className="px-4 py-3 text-center">66,000円</td><td className="px-4 py-3 text-center">33,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">成婚料</td><td className="px-4 py-3 text-center">0円</td><td className="px-4 py-3 text-center">0円</td><td className="px-4 py-3 text-center">0円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">1年総額（単純計算）</td><td className="px-4 py-3 text-center">125,400円</td><td className="px-4 py-3 text-center">267,600円</td><td className="px-4 py-3 text-center">231,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">会員数</td><td className="px-4 py-3 text-center">約51,000人（利用事業者会員数）</td><td className="px-4 py-3 text-center">19.1万人（3連盟）</td><td className="px-4 py-3 text-center">17.4万人以上（紹介可能人数）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">オンライン完結型</td><td className="px-4 py-3 text-center">オンライン完結型</td><td className="px-4 py-3 text-center">オンライン完結型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">成婚料0円・返金保証</td><td className="px-4 py-3 text-center">3連盟連携</td><td className="px-4 py-3 text-center">全額返金保証</td></tr>
              </tbody>
            </table>
          </div>
        </section>


        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            スマリッジと他社の比較
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            スマリッジが自分に合うか迷う場合は、料金総額・会員数・サポート形式を他社と比較することをおすすめします。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（24社一覧）を見る</Link></li>
            <li><Link href="/review/naco-do/" className="text-[#A08447] underline">naco-doの評判・料金を見る</Link></li>
            <li><Link href="/review/en-konkatsu/" className="text-[#A08447] underline">エン婚活エージェントの評判・料金を見る</Link></li>
            <li><Link href="/review/fiore/" className="text-[#A08447] underline">フィオーレの評判・料金を見る</Link></li>
            <li><Link href="/review/wellsma/" className="text-[#A08447] underline">ウェルスマの評判・料金を見る（オンラインでも専任仲人のサポートを希望する方向け・月会費11,800円〜）</Link></li>
          </ul>
        </section>

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

        

        <section className="bg-[#333333] rounded-2xl p-10 text-white text-center mb-12">
          <h2 className="text-xl font-light mb-4 tracking-widest">スマリッジの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">オンライン婚活の進め方は、無料相談で確認できます</p>
          <div className="mb-6">
            <a href="https://t.felmat.net/fmcl?ak=J112188.1.Z162495D.Z1361712" target="_blank" rel="nofollow noopener noreferrer">
              <img src="https://t.felmat.net/fmimg/J112188.Z162495D.Z1361712" width="300" height="250" alt="スマリッジ" className="mx-auto rounded-lg" />
            </a>
          </div>
          <a
            href="https://t.felmat.net/fmcl?ak=J112188.1.Z162495D.Z1361712"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-[#A08447] hover:bg-[#8A7239] text-white font-normal py-3 px-8 rounded-full transition-colors tracking-widest"
          >
            公式サイトへ
          </a>
        </section>

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
      <AuthorBox />
            <FeePosition slug="smartread" />
</article>
    </>
  );
}
