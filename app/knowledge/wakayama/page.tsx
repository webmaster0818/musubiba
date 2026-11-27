import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-27 確認）。
// ・わかやま出会いのＷＡ～輪～（令和8年度は計5回のイベントを想定・現在申込受付中のイベントなし・12月半ばに情報公開予定・県内市町村イベント（印南町 12月13日、締切12月1日）・問い合わせ先）：和歌山県こども未来課「わかやま出会いのＷＡ～輪～（出会いの場創出事業）」
// ・こども未来課の新着情報・掲載している結婚関連ページ（出会いの場創出事業・新婚世帯支援情報・結婚・子育て意識調査）：和歌山県「こども未来課」トップページ
// ・出会いの場創出事業の規模（大規模イベント100名規模1回・小規模30名規模4回）・9月海南市/10月和歌山市の予定・県民意向調査・政策班の電話：和歌山県 記者発表「令和8年度出会いの場創出事業を開始します」（2026年5月26日）
// ・委託先（タメニー株式会社・評価点316点/390点満点）・その他提案者：和歌山県「令和8年度『出会いの場の創出事業』企画・運営業務委託プロポーザルについて」
// ・同事業の総事業費6,606,000円・新規（事業開始年度 令和8年度）・参加対象・開催回数4回程度/参加人数160人程度・KPI（引き合わせ成立者数24組）・婚姻件数2,966件/婚姻率3.4/合計特殊出生率1.24（いずれも令和6年）：和歌山県「令和8年度 地域少子化対策重点推進交付金実施計画書（出会いの場の創出事業）」PDF
// ・平成25年度から県主催の会員限定婚活イベントを毎年10回実施・累計会員数2,000人超・わかやま婚活応援隊：和歌山県「令和2年度 地域少子化対策重点推進交付金 実施計画書」PDF（過去の事業として記載）
// ・県内市町村の新婚世帯支援（家賃・引越・住宅購入費などを支援する19市町と各上限額）：和歌山県「和歌山県内の新婚世帯支援情報」（掲載日の記載なし）
// ・わかやまKoiむすび お見合い応援プロジェクト（令和4年4月30日発足・令和8年2月18日休止・新規登録停止・世話人の仕組み・登録/紹介無料・縁結び会 年4回程度・事務局連絡先）：わかやまKoiむすび公式サイト（主催：和歌山市、事務局：テレビ和歌山内）。市公式サイトの同事業ページは2026-11-27時点で404
// ・和歌山市結婚新生活支援事業（上限30万円/60万円・対象要件・講座受講・対象経費・受付期間・申請方法・問い合わせ先）：和歌山市「和歌山市結婚新生活支援事業」（令和8年11月12日更新）
// ・印南町の婚活交流イベント「恋していなみ」（2026年12月13日・男女各15名・参加費2,000円・締切12月1日・主催 印南町役場企画産業課）：テレビ和歌山 イベントページ（県のページからリンク）
// ・三重県「みえむすび」の登録要件（三重県在住・在勤・在学もしくはゆかりのある方）：当サイト /knowledge/mie/（2026-11-17 確認）
// ・ひょうご出会いサポートセンターの入会条件（兵庫県内在住・在勤の方など）：当サイト /knowledge/hyogo-deai/・/knowledge/kakogawa/（2026-11-24 確認）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const PREF = "https://www.pref.wakayama.lg.jp/prefg/040200";
const PREF_TOP_URL = `${PREF}/katop_index.html`;
const PREF_DEAI_URL = `${PREF}/d00222386.html`;
const PREF_PROPOSAL_URL = `${PREF}/d00222070.html`;
const PREF_PLAN_R8_URL = `${PREF}/toppeji2_d/fil/R8deainobanosousyutsu.pdf`;
const PREF_PLAN_R2_URL = `${PREF}/toppeji2_d/fil/R2kouhyou.pdf`;
const PREF_SHINKON_URL = `${PREF}/d00207398.html`;
const PREF_PRESS_URL = "https://www.pref.wakayama.lg.jp/chiji/press_animation/press_animation_backn_d/fil/0526_1.pdf";
const WAKAKOI_URL = "https://wakakoi.telewaka.tv/";
const CITY_SHINKON_URL = "https://www.city.wakayama.wakayama.jp/kurashi/kosodate/1012927/1052803.html";
const INAMI_EVENT_URL = "https://www.tv-wakayama.co.jp/event/koishite-inami/";

// 和歌山県「令和8年度 地域少子化対策重点推進交付金実施計画書（出会いの場の創出事業）」の参考指標（令和6年）
const marriages = 2966; // 婚姻件数
const marriageRate = 3.4; // 婚姻率
const tfr = 1.24; // 合計特殊出生率

// 和歌山県「和歌山県内の新婚世帯支援情報」の①（家賃、引越費用、住宅購入費用などへの支援）に掲載された市町と内容
// 当サイトで1件ずつ転記。上限額は県の一覧の記載どおりで、最新の要件は各市町の公式サイトで確認が必要
const shinkonList = [
  { name: "和歌山市", cover: "引越・家賃・住宅購入", age: "夫婦とも39歳以下", income: "500万円未満", max: "60万円（夫婦とも29歳以下）／30万円" },
  { name: "海南市", cover: "引越・家賃・住宅購入（ほかに空家リフォーム支援）", age: "夫婦とも39歳以下", income: "制限なし", max: "60万円（住宅取得は90万円）／30万円（住宅取得は80万円）" },
  { name: "橋本市", cover: "引越・家賃・住宅取得（ほかに地域優良賃貸住宅の家賃助成）", age: "夫婦とも39歳以下", income: "500万円未満", max: "30万円" },
  { name: "有田市", cover: "引越・家賃・住宅購入", age: "夫婦とも39歳以下", income: "制限なし", max: "60万円／30万円" },
  { name: "御坊市", cover: "住宅購入", age: "夫婦とも39歳以下", income: "500万円未満", max: "60万円／30万円" },
  { name: "田辺市", cover: "引越・家賃・住宅購入", age: "夫婦とも39歳以下", income: "500万円未満", max: "60万円／30万円" },
  { name: "新宮市", cover: "引越・家賃・住宅購入・リフォーム（パートナーも対象）", age: "夫婦・パートナーとも39歳以下", income: "500万円未満", max: "60万円／30万円" },
  { name: "紀の川市", cover: "引越・家賃", age: "夫婦とも39歳以下", income: "500万円未満", max: "30万円" },
  { name: "岩出市", cover: "住宅購入", age: "夫婦とも39歳以下", income: "500万円未満", max: "60万円／30万円" },
  { name: "紀美野町", cover: "引越・家賃（ほかに定住促進補助金）", age: "夫婦とも49歳以下", income: "制限なし", max: "30万円" },
  { name: "九度山町", cover: "新築・建売住宅の購入支援、家賃補助（婚姻3年以内で夫婦とも40歳未満など）", age: "家賃補助は夫婦とも40歳未満など", income: "記載なし", max: "一覧に金額の記載なし" },
  { name: "湯浅町", cover: "引越・家賃・住宅購入・リフォーム", age: "夫婦とも39歳以下", income: "制限なし", max: "60万円／30万円" },
  { name: "広川町", cover: "引越・家賃・住宅購入・リフォーム", age: "夫婦とも39歳以下", income: "制限なし", max: "60万円／30万円" },
  { name: "由良町", cover: "家賃（結婚5年以内）、マイホーム取得支援（100万円）", age: "家賃はいずれかが40歳未満", income: "制限なし", max: "家賃30万円" },
  { name: "みなべ町", cover: "引越・家賃", age: "夫婦とも49歳以下", income: "500万円未満", max: "60万円／30万円" },
  { name: "日高川町", cover: "引越・家賃・住宅購入", age: "夫婦とも39歳以下", income: "500万円未満", max: "60万円／30万円" },
  { name: "すさみ町", cover: "引越・家賃", age: "夫婦とも39歳以下", income: "500万円未満", max: "60万円／30万円" },
  { name: "那智勝浦町", cover: "引越・家賃・住宅購入・リフォーム", age: "夫婦とも39歳以下", income: "制限なし", max: "60万円" },
  { name: "串本町", cover: "引越・家賃・住宅購入・リフォーム", age: "夫婦とも39歳以下", income: "500万円未満", max: "60万円／30万円" },
];

export const metadata: Metadata = {
  title: "和歌山県で結婚相談所を探す方へ｜和歌山市の無料お見合い事業は2026年2月に休止、県の出会いイベントと新婚補助最大60万円、民間との費用比較",
  description:
    "和歌山県の公式サイトでは会員登録制の結婚支援センターの案内を確認できず、和歌山市の無料お見合い事業「わかやまKoiむすび」は2026年2月18日に休止しました。県の出会いイベント、19市町の新婚補助、民間の結婚相談所との費用差を公式情報で整理しています。",
  alternates: { canonical: "/knowledge/wakayama/" },
};

const faqs = [
  {
    q: "和歌山県に県の結婚相談所（結婚支援センター）はありますか？",
    a: "2026年11月27日時点で、和歌山県こども未来課の公式ページに、会員登録をしてお相手を検索・紹介する県の結婚支援センターやマッチングシステムの案内は確認できませんでした。県の結婚支援は、令和8年度に新たに始めた「わかやま出会いのＷＡ～輪～（出会いの場創出事業）」による交流イベントの開催が中心です。他県のように登録料を払って長期間活動する県の仕組みは、当サイトの確認では見つかりませんでした。",
  },
  {
    q: "和歌山市のお見合い事業「わかやまKoiむすび」は今も利用できますか？",
    a: "利用できません。わかやまKoiむすびの公式サイトでは、令和4年4月30日に発足した同事業について、社会状況の変化や民間事業者による婚活サービスの充実・多様化に伴い事業の在り方を見直した結果、令和8年2月18日をもって休止し、世話人・独身者の募集を終了したと案内しています。新規登録の受付も停止しています。",
  },
  {
    q: "和歌山県の出会いイベントにはいつ申し込めますか？",
    a: "県の「わかやま出会いのＷＡ～輪～」のページでは、2026年11月27日時点で「現在申込受付中のイベントはございません」とし、12月半ばに情報を公開する予定と案内しています。令和8年度は計5回のイベントを想定しています。同じページでは、印南町が主催する婚活交流イベント（2026年12月13日、申込締切12月1日）も紹介されています。",
  },
  {
    q: "和歌山県内の市町村に、結婚相談所の登録料を補助する制度はありますか？",
    a: "2026年11月27日時点で、和歌山県や県内市町村の公式ページで、結婚相談所の登録料を補助する制度の案内は確認できませんでした。県がまとめている新婚世帯支援情報に掲載されているのは、結婚後の家賃・引越費用・住宅購入費用などの補助で、和歌山市を含む19市町が掲載されています。",
  },
  {
    q: "和歌山市の結婚新生活支援事業はいくら補助されますか？",
    a: "1世帯あたり30万円が上限で、婚姻日の年齢が夫婦ともに29歳以下の場合は60万円が上限です（千円未満切り捨て）。対象は令和8年1月1日から令和9年3月31日までに婚姻した夫婦で、夫婦ともに39歳以下、令和8年度（令和7年分）の夫婦の所得合計が500万円未満、市が指定する講座の受講などの要件をすべて満たす方です。受付期間は令和8年6月1日から令和9年3月31日までで、電子申請または市役所東庁舎2階の子育て支援課の窓口で申請します。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "和歌山県で結婚相談所を探す方へ：県の出会いイベント、休止した和歌山市のお見合い事業、市町村の新婚補助と民間の結婚相談所との比較",
  description:
    "和歌山県の出会いの場創出事業（わかやま出会いのＷＡ～輪～）、2026年2月に休止した和歌山市のわかやまKoiむすび、県内19市町の新婚世帯支援、和歌山市の結婚新生活支援事業、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-27",
  dateModified: "2026-11-27",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/wakayama/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "和歌山県の結婚支援（県・和歌山市）", item: "https://mu-su-bi-ba.com/knowledge/wakayama/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeWakayama() {
  const perMonth = Math.round(marriages / 12).toLocaleString();
  const max60 = shinkonList.filter((s) => s.max.startsWith("60万円")).length;
  const max30 = shinkonList.filter((s) => s.max.startsWith("30万円") || s.max.startsWith("家賃30万円")).length;
  const noIncomeLimit = shinkonList.filter((s) => s.income === "制限なし").length;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "和歌山県の結婚支援（県・和歌山市）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          和歌山県で結婚相談所を探す方へ：県の出会いイベント、休止した和歌山市のお見合い事業、市町村の新婚補助と民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月27日（県の事業は同日に和歌山県公式サイト、和歌山市の事業は和歌山市公式サイトとわかやまKoiむすび公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />和歌山県の公的な結婚支援は、県の交流イベントと結婚後の住居費補助が中心です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>2026年11月27日時点で、和歌山県の公式サイトに、会員登録をしてお相手を検索・紹介する<strong>県の結婚支援センターやマッチングシステムの案内はありません</strong>。県は令和8年度から、交流イベントを開く<strong>「わかやま出会いのＷＡ～輪～」</strong>を新たに始めています（令和8年度は計5回を想定）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>和歌山市が実施していた、世話人がお相手を紹介する無料のお見合い事業<strong>「わかやまKoiむすび」は、2026年2月18日に休止</strong>し、新規登録の受付を停止しています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>県の出会いイベントは、11月27日時点で申込受付中のものがなく、<strong>12月半ばに情報公開予定</strong>です。県のページでは、印南町の婚活交流イベント（12月13日開催・参加費2,000円・申込締切12月1日）が紹介されています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>結婚後は、和歌山市の結婚新生活支援事業で<strong>最大60万円</strong>の補助があり、県の一覧では<strong>{shinkonList.length}市町</strong>が新婚世帯の住居費などを支援しています。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">和歌山県内で利用できる公的な結婚支援の一覧</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              和歌山県では、共生社会推進部こども家庭局こども未来課が結婚支援を担当しています。県と和歌山市の事業を、2026年11月27日時点の公式情報にもとづき次のとおり整理しました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>名称・運営</th><th className={th}>内容</th><th className={th}>費用</th><th className={th}>2026年11月27日時点の状況</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={PREF_DEAI_URL} {...ext}>わかやま出会いのＷＡ～輪～</a><br />和歌山県（出会いの場創出事業）</td><td className={td}>県内各地で結婚を希望する独身者向けの交流イベントを開催。会員登録制ではなく、イベントごとに申込フォームから申し込む</td><td className={td}>イベントごとに異なる（当サイトでは県主催イベントの参加費を確認できませんでした）</td><td className={td}>申込受付中のイベントなし。12月半ばに情報公開予定</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={WAKAKOI_URL} {...ext}>わかやまKoiむすび（お見合い応援プロジェクト）</a><br />和歌山市</td><td className={td}>研修を受けたボランティアの世話人が、登録した独身者の中からお相手を探して引き合わせる</td><td className={td}>登録・紹介は無料（飲食代・交通費は自己負担）</td><td className={td}>2026年2月18日に休止。新規登録の受付を停止</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={CITY_SHINKON_URL} {...ext}>和歌山市結婚新生活支援事業</a><br />和歌山市</td><td className={td}>婚姻に伴う住宅の購入費・建築費、賃借費、引越費用を補助</td><td className={td}>上限30万円（夫婦とも29歳以下は60万円）</td><td className={td}>令和8年度分を受付中（2027年3月31日まで）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={PREF_SHINKON_URL} {...ext}>県内市町村の新婚世帯支援</a><br />和歌山市を含む{shinkonList.length}市町</td><td className={td}>家賃・引越費用・住宅購入費用などを補助</td><td className={td}>市町ごとに異なる（下の表を参照）</td><td className={td}>各市町の公式サイトで確認が必要</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              県のこども未来課のページに掲載されている結婚関連の案内は、2026年11月27日時点で、出会いの場創出事業、同事業の委託先選定（プロポーザル）、県内の新婚世帯支援情報、結婚・子育て意識調査の結果です。結婚相談所の登録料を補助する県・市町村の制度は、当サイトの確認では見つかりませんでした。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_TOP_URL} {...ext}>和歌山県「こども未来課」</a>・<a href={PREF_DEAI_URL} {...ext}>「わかやま出会いのＷＡ～輪～（出会いの場創出事業）」</a>・<a href={PREF_SHINKON_URL} {...ext}>「和歌山県内の新婚世帯支援情報」</a>・<a href={WAKAKOI_URL} {...ext}>わかやまKoiむすび公式サイト</a>・<a href={CITY_SHINKON_URL} {...ext}>和歌山市「和歌山市結婚新生活支援事業」（令和8年11月12日更新）</a>（いずれも2026年11月27日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">県の出会いの場創出事業「わかやま出会いのＷＡ～輪～」（令和8年度）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>事業の位置付け</td><td className={td}>令和8年度に始めた新規事業（実施期間：2026年4月1日〜2027年3月31日）。未婚化・晩婚化の流れを変えるため、結婚を希望する方に多様な出会いの場を設ける</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>イベントの規模</td><td className={td}>記者発表（2026年5月26日）では、大規模イベント（100名規模）を1回、小規模イベント（30名規模）を4回。婚活パーティーの形態に限らず、気軽に参加できる交流機会とする</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>記者発表時点の予定</td><td className={td}>9月：海南市（30名規模・梅酒づくり体験等）、10月：和歌山市（100名規模・ホテルで開催）。10月以降は場所・内容とも調整中とされていた</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>参加対象（実施計画書）</td><td className={td}>県内在住・在勤・在学、および県内に移住意思のある独身の男女</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>現在の募集</td><td className={td}>2026年11月27日時点で申込受付中のイベントなし。12月半ばに情報公開予定</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>企画・運営の委託先</td><td className={td}>タメニー株式会社（プロポーザルの評価点316点／390点満点）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>問い合わせ</td><td className={td}>和歌山県 共生社会推進部 こども家庭局 こども未来課（政策班 073-441-2492）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              県の実施計画書では、この事業の総事業費を6,606,000円（全額が委託料）とし、成果目標に「イベントの参加者数160人」「交流イベントにおける引き合わせ成立者数24組」などを掲げています。なお、同計画書では開催回数を「4回程度」としていますが、県のイベントページでは令和8年度に計5回のイベントを想定していると案内しています。
            </p>
            <p>
              和歌山県は以前にも、平成25年度から県主催の会員限定婚活イベントを毎年10回開いており、令和2年度の計画書では累計会員数が2,000人を超えたと記載されています。令和8年度の出会いの場創出事業は、計画書で「新規」の事業とされており、参加にあたって会員登録が必要という案内は、2026年11月27日時点の県のページでは確認できませんでした。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_DEAI_URL} {...ext}>和歌山県「わかやま出会いのＷＡ～輪～（出会いの場創出事業）」</a>・<a href={PREF_PRESS_URL} {...ext}>記者発表「令和8年度出会いの場創出事業を開始します」（2026年5月26日）</a>・<a href={PREF_PROPOSAL_URL} {...ext}>「令和8年度『出会いの場の創出事業』企画・運営業務委託プロポーザルについて」</a>・<a href={PREF_PLAN_R8_URL} {...ext}>「地域少子化対策重点推進交付金 実施計画書（出会いの場の創出事業）」（PDF）</a>・<a href={PREF_PLAN_R2_URL} {...ext}>令和2年度の同計画書（PDF）</a>（いずれも2026年11月27日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">県内で受付中の婚活イベント（2026年11月27日時点）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日</th><th className={th}>名称・会場</th><th className={th}>対象・定員・参加費</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>2026年12月13日（日）13時〜16時30分</td><td className={td}><a href={INAMI_EVENT_URL} {...ext}>恋していなみ〜ここから始まる、新しいご縁〜 第2回婚活交流イベント</a>（印南町防災福祉センター）</td><td className={td}>男性は印南町在住または勤務する概ね25〜45歳の独身者、女性は概ね25〜45歳の独身者。男女各15名（応募多数の場合は抽選）。参加費2,000円。申込締切は12月1日（火）。主催は印南町役場企画産業課</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              上表は、和歌山県の「わかやま出会いのＷＡ～輪～」のページに「県内市町村イベント」として2026年11月27日時点で掲載されていたものです。女性は町外在住の方も対象です。県主催イベントの次回の日程は、12月半ばに県のページで公開される予定です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_DEAI_URL} {...ext}>和歌山県「わかやま出会いのＷＡ～輪～」</a>・<a href={INAMI_EVENT_URL} {...ext}>テレビ和歌山「恋していなみ〜ここから始まる、新しいご縁〜」</a>（いずれも2026年11月27日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">和歌山市の「わかやまKoiむすび」は2026年2月に休止しました</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容（公式サイトの掲載）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>主催・事務局</td><td className={td}>主催：和歌山市。事務局：わかやまKoiむすび企画運営業務事務局（テレビ和歌山内）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>発足・休止</td><td className={td}>令和4年4月30日に発足。令和8年2月18日をもって休止し、世話人・独身者の募集を終了</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>休止の理由</td><td className={td}>近年の社会状況の変化や民間事業者による婚活サービスの充実・多様化に伴い、事業の在り方を見直したため</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>仕組み（休止前）</td><td className={td}>登録後に世話人と相談し、世話人同士が集まる「縁結び会（年4回程度）」でお相手を探す。お見合いには原則として世話人が立ち会う</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>費用（休止前）</td><td className={td}>登録・紹介は無料。お見合い時や世話人との相談時の飲食代・交通費は各自負担</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              世話人は、民生委員をされている方など、所定の研修を受講したボランティアの方と案内されていました。和歌山市公式サイトの「結婚」のページに掲載されている案内は、2026年11月27日時点で、結婚新生活支援事業とオリジナル婚姻届の2件です。インターネット上で和歌山市の無料のお見合い事業の案内を見かけた場合は、休止前の情報である可能性があります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={WAKAKOI_URL} {...ext}>わかやまKoiむすび お見合い応援プロジェクト公式サイト</a>（2026年11月27日確認。和歌山市公式サイト内の同事業のページは同日時点で表示されませんでした）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">和歌山市結婚新生活支援事業（令和8年度・最大60万円）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>補助金額</td><td className={td}>1世帯あたり上限30万円。婚姻日の年齢が夫婦ともに29歳以下の場合は上限60万円（千円未満切り捨て）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象の婚姻日</td><td className={td}>令和8年1月1日〜令和9年3月31日に婚姻した夫婦</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>主な要件</td><td className={td}>申請時に市内の対象住宅に住民票がある／夫婦ともに婚姻日の年齢が39歳以下／夫婦と世帯構成員に市税の滞納がない／令和8年度（令和7年1月〜12月分）の夫婦の所得合計が500万円未満（奨学金の返済額は控除可）／過去に同種の補助を受けていない、など</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>講座の受講</td><td className={td}>夫婦のいずれもが、ライフデザイン支援講座、プレコンセプションケアに関する講座、医療機関への妊娠・出産に係る相談、共家事・共育て講座のいずれかを行っていること</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>補助対象経費</td><td className={td}>令和8年4月1日〜令和9年3月31日に支払った、住宅の購入費・建築費（建物代のみ）、賃借費（賃料・共益費は3か月分が上限、敷金・礼金・仲介手数料）、引越費用（運輸局の許可を受けた業者への運送費用）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>受付期間・方法</td><td className={td}>令和8年6月1日〜令和9年3月31日。電子申請（24時間、最終日は17時15分まで）または和歌山市役所東庁舎2階 子育て支援課の窓口（平日8時30分〜17時15分）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>問い合わせ</td><td className={td}>和歌山市 福祉局 こども未来部 子育て支援課（073-435-1329）</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_SHINKON_URL} {...ext}>和歌山市「和歌山市結婚新生活支援事業」（令和8年11月12日更新）</a>（2026年11月27日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">県内{shinkonList.length}市町の新婚世帯支援（県の一覧から当サイトで整理）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              和歌山県の「和歌山県内の新婚世帯支援情報」に、家賃・引越費用・住宅購入費用などを支援する市町村として掲載されているのは{shinkonList.length}市町です。当サイトで上限額を数えると、上限60万円以上の区分がある市町が{max60}、上限30万円の市町が{max30}、所得制限がないと記載されている市町が{noIncomeLimit}です。海南市は住宅取得の場合の上限を90万円（夫婦ともに29歳以下）としており、由良町は新婚世帯に限らず町内で新築・建売住宅を取得した方に100万円を補助するマイホーム取得支援事業も掲載しています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>市町</th><th className={th}>支援の対象</th><th className={th}>年齢</th><th className={th}>夫婦の所得</th><th className={th}>上限（夫婦とも29歳以下／それ以外）</th></tr></thead>
                <tbody>
                  {shinkonList.map((s) => (
                    <tr key={s.name} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{s.name}</td>
                      <td className={td}>{s.cover}</td>
                      <td className={td}>{s.age}</td>
                      <td className={td}>{s.income}</td>
                      <td className={td}>{s.max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              県の一覧には掲載日の記載がなく、各市町の年度ごとの要件（婚姻日の期間・講座受講など）は反映されていない場合があります。申請の前に、お住まいの市町の公式サイトで最新の内容をご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_SHINKON_URL} {...ext}>和歌山県「和歌山県内の新婚世帯支援情報」</a>（2026年11月27日確認）。件数は当サイトが同ページの記載から数えたものです。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">和歌山県の婚姻件数と出生率</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>指標</th><th className={th}>値</th><th className={th}>時点</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>婚姻件数</td><td className={td}>{marriages.toLocaleString()}件</td><td className={td}>令和6年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>婚姻率</td><td className={td}>{marriageRate}</td><td className={td}>令和6年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>合計特殊出生率</td><td className={td}>{tfr}</td><td className={td}>令和6年</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              令和6年の婚姻件数{marriages.toLocaleString()}件は、1か月あたり約{perMonth}件に相当します（当サイト算出）。県は実施計画書のなかで、婚姻件数や婚姻率の低下に歯止めをかけるため、令和8年度から出会いの場の創出に取り組むとしています。婚姻率の算出方法は計画書に記載がないため、他の資料と比べる際はご注意ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_PLAN_R8_URL} {...ext}>和歌山県「地域少子化対策重点推進交付金 実施計画書（出会いの場の創出事業）」の参考指標</a>（2026年11月27日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な支援と民間の結婚相談所の費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>お相手の探し方</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>県の出会いイベント（わかやま出会いのＷＡ～輪～）</td><td className={td}>イベントごとに異なる（次回は12月半ばに公開予定）</td><td className={td}>イベントでの交流</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>市町村の婚活イベント（例：印南町 12月13日）</td><td className={td}>参加費2,000円</td><td className={td}>イベントでの交流</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>和歌山市のわかやまKoiむすび</td><td className={td}>登録・紹介無料（2026年2月18日に休止）</td><td className={td}>世話人による紹介（休止中）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の方式による（担当者の紹介・会員検索など）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              和歌山県には、2026年11月27日時点で、登録して継続的にお相手を探せる県や和歌山市の公的な仕組みがありません。公的な支援はイベント単位の出会いの場が中心となるため、継続的にお相手の紹介を受けたい方や交際中の相談をしたい方には、民間の結婚相談所が主な選択肢になります。和歌山市内から通いやすい大阪方面の結婚相談所や、自宅から活動できるオンライン型と比べて、サポートの範囲と総額で検討するのが目安です。
            </p>
            <p>
              近隣県の公的な結婚支援センターは、その県に在住・在勤していることなどを登録の条件としている場合があります。たとえば、三重県の「みえむすび」は三重県在住・在勤・在学もしくは三重県にゆかりのある方、ひょうご出会いサポートセンターは兵庫県内に在住・在勤の方などを対象としています。県外のセンターの利用を検討する場合は、各センターの登録要件をご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。大阪の結婚相談所は<Link href="/area/osaka/" className="underline">大阪の結婚相談所</Link>で整理しています。みえむすびの登録要件は当サイト<Link href="/knowledge/mie/" className="underline">三重県のページ</Link>（2026年11月17日確認）、ひょうご出会いサポートセンターの入会条件は当サイト<Link href="/knowledge/hyogo-deai/" className="underline">兵庫県のページ</Link>（2026年11月24日確認）の内容です。公的な支援の内容は、各公式サイトで2026年11月27日に確認しました。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/ichinomiya/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">一宮市の婚活支援</Link>
            <Link href="/knowledge/maebashi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">前橋市の婚活支援</Link>
            <Link href="/knowledge/ono/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">小野市の結婚支援</Link>
            <Link href="/knowledge/kitami/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">北見市の婚活支援</Link>
            <Link href="/area/osaka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">大阪の結婚相談所</Link>
            <Link href="/knowledge/mie/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">三重県の結婚支援（みえむすび）</Link>
            <Link href="/knowledge/hyogo-deai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ひょうご出会いサポートセンター（兵庫県）</Link>
            <Link href="/knowledge/tokushima/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">徳島県の結婚支援（マリッサとくしま）</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/how-to-choose/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の選び方</Link>
            <Link href="/knowledge/flow/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の流れ</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/compare/cheap/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">料金の安い結婚相談所</Link>
            <Link href="/compare/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">24社の料金比較</Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="border border-[#E5DCCF] rounded-xl">
                <summary className="cursor-pointer px-5 py-4 text-sm font-medium text-[#2C2C2C]">{f.q}</summary>
                <p className="px-5 pb-5 text-sm text-[#2C2C2C]/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <AuthorBox />
      </article>
    </>
  );
}
