import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-27 確認）。
// ・小野市の公式サイトに、市が運営する結婚相談・婚活イベント・はばタン会員登録料補助の案内がないこと：
//   小野市公式サイトのうち企画政策グループ・協働参画グループ・プロジェクト推進グループ・子育て支援課・市民課・社会福祉課・
//   くらし安心グループ・いきいき社会創造課・まちづくり課の掲載ページ（計1,312ページ）と移住・定住ページ、
//   移住定住パンフレット「住むなら！やっぱりおの」を当サイトで確認（2026-11-27 時点で該当なし）
// ・婚姻届の届出先・必要なもの・問い合わせ先：小野市「婚姻届のご案内」（2024年3月1日更新）
// ・独身証明書300円・戸籍抄本450円（本籍地で交付）・広域交付450円：小野市「市民課発行証明（手数料一覧）」（2024年3月1日更新）
// ・婚姻件数の推移（平成14年度291件〜令和6年度117件）・人口46,597人（2025年3月31日現在）：「令和7年版小野市統計書」（資料 市民課）
// ・婚姻 1日あたり0.32件（令和6年度）：小野市「小野市の1日（統計パンフレット）」
// ・結婚新生活支援事業の県内実施市町（令和7年度26市町、小野市は含まれない。平成28〜令和6年度の一覧にも含まれない）：
//   兵庫県「結婚に伴う新生活支援事業について」（2026年1月27日更新）
// ・地域少子化対策重点推進交付金の県内市町の事業実施状況（20市町、小野市は含まれない）：兵庫県「地域少子化対策重点推進交付金事業について」（2026年1月27日更新）
// ・ひょうご出会いサポートセンターの登録手数料・会員数（R7年度実績）・入会条件・必要書類：habatan-hyogo.jp（はばタン会員TOP・よくあるご質問）
// ・はばタン会員登録料の補助自治体（令和8年度・9市町、小野市は含まれない）・連絡先・営業時間：同センター お知らせ（2026年8月24日）
// ・北播磨タグの掲載30件（2026年2月12日〜11月27日掲載）の開催市町の内訳、出張登録会3回、受付中の三木市内イベント：
//   同センター イベント情報（北播磨）のフィード（2026-11-27 取得）と各イベントページ
// ・みきで愛（出会い）サポートセンターの対象（50歳未満、市外は三木市に縁がある方など）・費用：同センター「よくある質問」
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const CITY = "https://www.city.ono.hyogo.jp";
const CITY_KONIN_URL = `${CITY}/soshikikarasagasu/shiminfukushibu_shiminka/gyomuannai/7/2797.html`;
const CITY_FEE_URL = `${CITY}/soshikikarasagasu/shiminfukushibu_shiminka/gyomuannai/3/2872.html`;
const CITY_TOKEI_URL = `${CITY}/onoshinokoto/tokei_kiroku_opendata/tokei/5637.html`;
const CITY_TOKEISHO_PDF = `${CITY}/material/files/group/7/R7toukeisyo.pdf`;
const CITY_PANFU_URL = `${CITY}/onoshinokoto/tokei_kiroku_opendata/tokei/5636.html`;
const CITY_IJU_URL = `${CITY}/kurashi_fukushi/iju_teiju/7651.html`;
const PREF_SHINSEIKATSU_URL = "https://web.pref.hyogo.lg.jp/kf11/kekkonnshien.html";
const PREF_SHOSHI_URL = "https://web.pref.hyogo.lg.jp/kf11/syoushitaisaku-h28.html";
const HABATAN_TOP_URL = "https://habatan-hyogo.jp/pages/habatan_top";
const HABATAN_FAQ_URL = "https://habatan-hyogo.jp/pages/faq";
const HABATAN_SUBSIDY_URL =
  "https://habatan-hyogo.jp/blogs/news-topics/%E4%BB%A4%E5%92%8C8%E5%B9%B4%E5%BA%A6-%E3%81%AF%E3%81%B0%E3%82%BF%E3%83%B3%E4%BC%9A%E5%93%A1%E7%99%BB%E9%8C%B2%E6%96%99-%E8%A3%9C%E5%8A%A9%E9%87%91%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B";
const HABATAN_KITA_URL = "https://habatan-hyogo.jp/blogs/event/tagged/%E5%8C%97%E6%92%AD%E7%A3%A8";
const MD_FAQ_URL = "https://www.mikideai.jp/faq.html";

const EV = "https://habatan-hyogo.jp/blogs/event/";
const EV_KASAI_0719 = `${EV}%E5%8A%A0%E8%A5%BF%E5%B8%82-%E3%81%B2%E3%82%87%E3%81%86%E3%81%94%E5%87%BA%E4%BC%9A%E3%81%84%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E5%87%BA%E5%BC%B5%E7%99%BB%E9%8C%B2%E7%9B%B8%E8%AB%87%E4%BC%9A-7-19-%E6%97%A5`;
const EV_NISHIWAKI_0809 = `${EV}%E8%A5%BF%E8%84%87%E5%B8%82-%E3%81%B2%E3%82%87%E3%81%86%E3%81%94%E5%87%BA%E4%BC%9A%E3%81%84%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E5%87%BA%E5%BC%B5%E7%99%BB%E9%8C%B2%E7%9B%B8%E8%AB%87%E4%BC%9A-8-9-%E6%97%A5`;
const EV_MIKI_1025 = `${EV}%E4%B8%89%E6%9C%A8%E5%B8%82-%E3%81%B2%E3%82%87%E3%81%86%E3%81%94%E5%87%BA%E4%BC%9A%E3%81%84%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E5%87%BA%E5%BC%B5%E7%99%BB%E9%8C%B2%E4%BC%9A-10-25-%E6%97%A5`;
const EV_MIKI_1211 = `${EV}%E4%B8%89%E6%9C%A8%E5%B8%82%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88-12-12-%E5%9C%9F-%E3%81%AE%E3%81%94%E6%A1%88%E5%86%85`;
const EV_MIKI_1219 = `${EV}%E4%B8%89%E6%9C%A8%E5%B8%82%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88-12-19-%E5%9C%9F-%E3%81%AE%E3%81%94%E6%A1%88%E5%86%85`;
const EV_MIKI_1227 = `${EV}%E4%B8%89%E6%9C%A8%E5%B8%82%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88-12-27-%E6%97%A5-%E3%81%AE%E3%81%94%E6%A1%88%E5%86%85`;

// 「令和7年版小野市統計書」2 人口動態（資料 市民課、単位：件、年度）から当サイトで抜粋
const marriages: { fy: string; count: number }[] = [
  { fy: "平成14年度（2002年度）", count: 291 },
  { fy: "平成19年度（2007年度）", count: 240 },
  { fy: "平成24年度（2012年度）", count: 222 },
  { fy: "平成29年度（2017年度）", count: 201 },
  { fy: "令和元年度（2019年度）", count: 140 },
  { fy: "令和2年度（2020年度）", count: 152 },
  { fy: "令和3年度（2021年度）", count: 153 },
  { fy: "令和4年度（2022年度）", count: 129 },
  { fy: "令和5年度（2023年度）", count: 116 },
  { fy: "令和6年度（2024年度）", count: 117 },
];

// ひょうご出会いサポートセンター イベント情報（北播磨）のフィードに掲載されていた30件（2026年2月12日〜11月27日掲載）の開催市町（当サイト集計）
const kitaFeed: { city: string; count: number }[] = [
  { city: "三木市", count: 24 },
  { city: "西脇市", count: 2 },
  { city: "加西市", count: 2 },
  { city: "加東市", count: 1 },
  { city: "三田市", count: 1 },
  { city: "小野市", count: 0 },
];
const KITA_TOTAL = kitaFeed.reduce((s, r) => s + r.count, 0);

export const metadata: Metadata = {
  title: "小野市で結婚相談所を探す方へ｜県のひょうご出会いサポートセンター（年5,000円・市の補助なし）が中心、婚姻件数は令和6年度117件",
  description:
    "小野市には市が運営する結婚相談やはばタン会員登録料の補助の案内がなく、結婚新生活支援事業も令和7年度の県内実施市町に含まれていません。県のひょうご出会いサポートセンター（年5,000円）の使い方、北播磨の催し、市の婚姻件数の推移、民間との費用差を公式情報で整理しています。",
  alternates: { canonical: "/knowledge/ono/" },
};

const faqs = [
  {
    q: "小野市に市営の結婚相談所はありますか？",
    a: "当サイトでは、2026年11月27日時点で、小野市の公式サイトに市が運営する結婚相談（お見合いの紹介）や市主催の婚活イベントの案内を確認できませんでした。小野市にお住まい・お勤めの方が利用できる公的な結婚相談は、兵庫県の「ひょうご出会いサポートセンター」が中心です。はばタン会員の登録手数料は年5,000円で、お見合い・成婚の費用はかかりません。",
  },
  {
    q: "ひょうご出会いサポートセンターの登録料に小野市の補助はありますか？",
    a: "センターが公表している令和8年度のはばタン会員登録料の補助自治体は、姫路市・加古川市・西脇市・多可町・宍粟市・養父市・高砂市・上郡町・神河町の9市町で、小野市は含まれていません。小野市の公式サイトでも、2026年11月27日時点で登録料補助の案内を確認できませんでした。小野市民の方は登録手数料5,000円（年額）を自己負担することになります。",
  },
  {
    q: "小野市に結婚新生活支援（新婚世帯への補助）はありますか？",
    a: "兵庫県が公表している結婚新生活支援事業の実施市町（令和7年度・26市町）に小野市は含まれておらず、県のページには「記載のある市町以外は、今年度、結婚新生活支援事業を実施していません」と記載されています。平成28年度から令和6年度までの実施市町の一覧にも小野市は含まれていません。令和8年度の実施市町一覧は、2026年11月27日時点で県のページに掲載されていません。",
  },
  {
    q: "小野市に住んでいても、近隣の三木市の結婚相談やイベントを利用できますか？",
    a: "三木市の「みきで愛（出会い）サポートセンター」は、未成年者を除く50歳未満の独身の方を市内外問わず受け付けていますが、市外の方は三木市内に勤務している、三木市出身であるなど三木市に縁がある方か、三木市に住んでみたい方が対象です。三木市内のイベントは回ごとに条件が異なり、2026年12月11日の回は「結婚後三木市に住む意思のある方」が対象です。12月19日・12月27日の回は、掲載ページの参加資格に居住地の条件が記載されていません。",
  },
  {
    q: "ひょうご出会いサポートセンターの入会に必要な書類と費用を教えてください。",
    a: "独身証明書または戸籍抄（謄）本（3か月以内）、写真付き身分証明書、健康保険証、写真（はばタン会員のみ）が必要です。独身証明書は本籍地の市区町村で発行され、本籍地が小野市の場合、手数料は300円で、請求できるのは本人のみです（委任状不可）。戸籍抄本は450円です。これに登録手数料5,000円（年額）を加えると、小野市に本籍がある方の初年度の費用は5,300円が目安です（当サイト計算）。",
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
  headline: "小野市で結婚相談所を探す方へ：市の結婚支援の状況、ひょうご出会いサポートセンターの利用、北播磨の婚活イベント、婚姻件数の推移と民間の結婚相談所との比較",
  description:
    "小野市の公的な結婚支援の状況（市の結婚相談・登録料補助・結婚新生活支援）、ひょうご出会いサポートセンターを小野市から利用する際の費用、北播磨の婚活イベントの掲載状況、市の婚姻件数の推移、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-27",
  dateModified: "2026-11-27",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/ono/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "小野市の結婚相談・婚活支援", item: "https://mu-su-bi-ba.com/knowledge/ono/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeOno() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "小野市の結婚相談・婚活支援" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          小野市で結婚相談所を探す方へ：市の結婚支援の状況、ひょうご出会いサポートセンターの利用、北播磨の婚活イベント、婚姻件数の推移と民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月27日（市の事業と統計は同日に小野市公式サイト、県の事業は兵庫県公式サイト、県のセンターとイベントはひょうご出会いサポートセンター公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />小野市の公的な結婚相談は、県のひょうご出会いサポートセンターが中心です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>当サイトでは、2026年11月27日時点で、小野市の公式サイトに<strong>市が運営する結婚相談・市主催の婚活イベント・県センターの登録料補助</strong>の案内を確認できませんでした。三木市の「みきで愛（出会い）サポートセンター」のような市の結婚相談窓口は、小野市では案内されていません。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>小野市民が利用できる公的な結婚相談は、兵庫県の<strong>「ひょうご出会いサポートセンター」</strong>です。はばタン会員の登録手数料は<strong>年5,000円</strong>で、登録料を補助する令和8年度の9市町に小野市は含まれていません。本籍が小野市の方は、独身証明書（300円）と合わせて初年度<strong>5,300円</strong>が目安です（当サイト計算）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>結婚後の住居費などを補助する<strong>結婚新生活支援事業</strong>は、県が公表している令和7年度の実施市町（26市町）に小野市が含まれていません。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>市の統計書によると、小野市の婚姻件数は<strong>平成14年度の291件から令和6年度の117件</strong>へ、約4割の水準まで減っています。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">小野市から利用できる公的な結婚支援の一覧</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              小野市の事業と、小野市から利用できる県・近隣市の事業を、当サイトで次のとおり整理しました。小野市の欄は、市の公式サイトの掲載ページを当サイトで確認した結果です。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>事業</th><th className={th}>小野市の状況（2026年11月27日時点）</th><th className={th}>小野市民が利用できる主な代わりの手段</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>市が運営する結婚相談（お見合いの紹介）</td><td className={td}>市の公式サイトに案内なし</td><td className={td}><Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンター</Link>（はばタン会員 年5,000円）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>市主催の婚活イベント</td><td className={td}>市の公式サイトに案内なし。県センターの北播磨のイベント情報にも小野市内の開催は掲載なし（2026年2月12日以降の掲載30件）</td><td className={td}>北播磨の他市（三木市・西脇市・加西市・加東市）で開かれるイベント。参加条件は回ごとに異なる</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>県センターの登録料補助</td><td className={td}><a href={HABATAN_SUBSIDY_URL} {...ext}>令和8年度の補助自治体（9市町）</a>に含まれない</td><td className={td}>—（登録手数料は自己負担）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>結婚新生活支援事業（新婚世帯の住居費・引越費用の補助）</td><td className={td}><a href={PREF_SHINSEIKATSU_URL} {...ext}>令和7年度の県内実施市町（26市町）</a>に含まれない</td><td className={td}>—（実施は市町ごとで、居住する市町の事業が対象）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              当サイトでは、小野市の公式サイトのうち企画政策グループ・協働参画グループ・プロジェクト推進グループ・子育て支援課・市民課・社会福祉課などの掲載ページ（計1,312ページ）と移住・定住のページ、<a href={CITY_IJU_URL} {...ext}>移住定住パンフレット「住むなら！やっぱりおの」</a>を確認しましたが、結婚相談・婚活支援・新婚世帯への補助の案内は見当たりませんでした。兵庫県が公表している地域少子化対策重点推進交付金の県内市町の事業実施状況（20市町）にも、小野市は含まれていません。市の事業は年度途中に始まることがあるため、最新の状況は小野市役所（代表 0794-63-1000）でご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={HABATAN_SUBSIDY_URL} {...ext}>ひょうご出会いサポートセンター お知らせ「令和8年度 はばタン会員登録料 補助金のお知らせ」（2026年8月24日）</a>・<a href={HABATAN_KITA_URL} {...ext}>イベント情報（北播磨）</a>・<a href={PREF_SHINSEIKATSU_URL} {...ext}>兵庫県「結婚に伴う新生活支援事業について」（2026年1月27日更新）</a>・<a href={PREF_SHOSHI_URL} {...ext}>兵庫県「地域少子化対策重点推進交付金事業について」（2026年1月27日更新）</a>・<a href={CITY_IJU_URL} {...ext}>小野市「住むなら！やっぱりおの」</a>（いずれも2026年11月27日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">小野市の婚姻件数の推移（市の統計書より）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              「令和7年版小野市統計書」の人口動態（資料 市民課）に掲載されている婚姻の件数を、当サイトで抜粋しました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年度</th><th className={th}>婚姻件数</th></tr></thead>
                <tbody>
                  {marriages.map((m) => (
                    <tr key={m.fy} className="border-t border-[#E5DCCF] align-top"><td className={td}>{m.fy}</td><td className={td}>{m.count}件</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              婚姻件数は平成14年度の291件から令和6年度の117件へ減っており、令和6年度は平成14年度の約40%の水準です。10年前の平成26年度（193件）と比べると約39%の減少です（いずれも当サイト計算）。令和6年度の117件は、市の統計パンフレット「小野市の1日」では1日あたり0.32件と紹介されています。統計書の人口（2025年3月31日現在 46,597人）で割ると、人口千人あたり約2.5件です（当サイト計算の目安）。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_TOKEISHO_PDF} {...ext}>小野市「令和7年版小野市統計書」（PDF）</a>（<a href={CITY_TOKEI_URL} {...ext}>小野市統計資料</a>、2026年4月14日更新）・<a href={CITY_PANFU_URL} {...ext}>「小野市の1日（統計パンフレット）」</a>（いずれも2026年11月27日確認）。統計書の件数は市民課の資料によるもので、国の人口動態統計の値とは集計方法が異なる場合があります。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">ひょうご出会いサポートセンターを小野市から利用する場合</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              センターのはばタン会員は、スマートフォンで会員を検索してお見合いを申し込む仕組みで、登録手数料は年5,000円です（お見合い・成婚の費用はかかりません）。令和7年度実績のはばタン会員登録者は3,351人（男性1,920人・女性1,431人）です。入会条件は、結婚を希望する20歳以上の独身の方で、兵庫県内に在住・在勤の方などです。料金・活動の流れの詳細は、当サイトの<Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンターの解説</Link>をご覧ください。
            </p>
            <p>
              入会には、独身証明書または戸籍抄（謄）本（3か月以内）、写真付き身分証明書、健康保険証、写真が必要です。独身証明書は本籍地の市区町村で発行されます。小野市に本籍がある方の手数料は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>書類・費用</th><th className={th}>金額</th><th className={th}>備考</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>独身証明書（小野市市民課）</td><td className={td}>300円</td><td className={td}>婚姻していないことの証明。請求できるのは本人のみ（委任状不可）。マイナンバーカードによるオンライン請求も可</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>戸籍個人事項証明書（戸籍抄本）</td><td className={td}>450円</td><td className={td}>本籍地で交付。本籍地以外での広域交付（戸籍謄本）も450円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>はばタン会員 登録手数料</td><td className={td}>5,000円/年</td><td className={td}>小野市は登録料補助の対象外</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>初年度の合計の目安（独身証明書を使う場合）</td><td className={td}>5,300円</td><td className={td}>当サイト計算。写真の撮影費や通信費は含みません</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              センターの連絡先は電話（050-1790-2805）とメールで、営業時間は月曜・木曜・金曜が12時30分〜19時30分、土曜・日曜が10時〜17時です（火曜・水曜・祝日・年末年始は休み）。入会後の面談はオンラインで予約でき、各地で出張登録会も開かれています。2026年度に北播磨で開かれた出張登録会は次の3回で、いずれも終了しています。小野市内での開催は、2026年11月27日時点でイベント情報に掲載されていません。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日</th><th className={th}>会場</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>2026年7月19日（日・終了）</td><td className={td}><a href={EV_KASAI_0719} {...ext}>加西市（アスティアかさい）</a></td><td className={td}>入会前相談会（家族のみの参加も可）・出張登録相談会</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>2026年8月9日（日・終了）</td><td className={td}><a href={EV_NISHIWAKI_0809} {...ext}>西脇市（西脇市役所）</a></td><td className={td}>出張登録会・会員向け相談会（参加無料）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>2026年10月25日（日・終了）</td><td className={td}><a href={EV_MIKI_1025} {...ext}>三木市（青山公民館）</a></td><td className={td}>出張登録会（参加無料）</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={HABATAN_TOP_URL} {...ext}>ひょうご出会いサポートセンター「はばタン会員TOP」</a>・<a href={HABATAN_FAQ_URL} {...ext}>「よくあるご質問」</a>・<a href={HABATAN_SUBSIDY_URL} {...ext}>お知らせ（2026年8月24日）</a>・上表の各イベントページ・<a href={CITY_FEE_URL} {...ext}>小野市「市民課発行証明（手数料一覧）」（2024年3月1日更新）</a>（いずれも2026年11月27日確認）。本籍地が小野市以外の方は、本籍地の市区町村の手数料をご確認ください。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">北播磨で開かれる婚活イベントの掲載状況（当サイト集計）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              ひょうご出会いサポートセンターのイベント情報（北播磨）のフィードに、2026年11月27日時点で掲載されていた{KITA_TOTAL}件（2026年2月12日〜11月27日に掲載）を、開催市町ごとに数えました。婚活イベントのほか、センターの出張登録会を含みます。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[420px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催市町</th><th className={th}>掲載件数</th></tr></thead>
                <tbody>
                  {kitaFeed.map((r) => (
                    <tr key={r.city} className="border-t border-[#E5DCCF] align-top"><td className={td}>{r.city}</td><td className={td}>{r.count}件</td></tr>
                  ))}
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>合計</td><td className={td}>{KITA_TOTAL}件</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              掲載の8割（{KITA_TOTAL}件中24件）が三木市内の開催で、小野市内を会場とするものはありませんでした。2026年11月27日時点で申込締切前の三木市内のイベントは次の3件です。三木市の窓口・イベントの全体像は、当サイトの<Link href="/knowledge/miki/" className="text-[#A08447] underline">三木市の婚活（みきで愛サポートセンター）</Link>で整理しています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日（2026年）</th><th className={th}>名称・主催</th><th className={th}>対象・参加費</th><th className={th}>申込締切</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>12月11日（金）</td><td className={td}><a href={EV_MIKI_1211} {...ext}>金曜夜のクリスマス婚活</a><br />みきで愛サポートセンター サポーター部会</td><td className={td}>結婚後三木市に住む意思のある、独身で30〜40歳の方・合計10名（抽選）。2,500円（軽食付き）</td><td className={td}>12月3日17時</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>12月19日（土）</td><td className={td}><a href={EV_MIKI_1219} {...ext}>Christmas Night 恋活Dinner Party IN みき 2026</a></td><td className={td}>28〜70歳の独身男女を4グループに分けて実施・最大96名。男性6,500円・女性3,500円</td><td className={td}>12月17日17時</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>12月27日（日）</td><td className={td}><a href={EV_MIKI_1227} {...ext}>三木市で恋活</a><br />はりま縁結び委員会（みきで愛婚活応援団）</td><td className={td}>独身の30〜48歳・男女各12名（先着順）。男性4,000円・女性500円</td><td className={td}>12月21日</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              12月11日の回は、参加対象が「結婚後三木市に住む意思のある」方に限られています。12月19日・12月27日の回は、掲載ページの参加資格に居住地の条件が記載されていません。なお、三木市の「みきで愛（出会い）サポートセンター」の結婚相談は、市外の方の場合、三木市内に勤務している、三木市出身であるなど三木市に縁がある方か、三木市に住んでみたい方が対象です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={HABATAN_KITA_URL} {...ext}>ひょうご出会いサポートセンター イベント情報（北播磨）</a>と上表の各ページ・<a href={MD_FAQ_URL} {...ext}>みきで愛（出会い）サポートセンター「よくある質問」</a>（いずれも2026年11月27日確認）。件数はフィードに掲載されていた記事を当サイトが数えたもので、センターに掲載されていない催しは含まれません。募集状況は変わることがあるため、申込みの前に各イベントページでご確認ください。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な支援と民間の結婚相談所の費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>お相手の探し方</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンター（はばタン会員）</Link>・小野市民</td><td className={td}>5,000円/年（小野市の補助なし）。本籍が小野市の方は独身証明書300円を加えて初年度5,300円が目安</td><td className={td}>会員自身の検索・AIによる紹介</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>近隣（三木市内）の婚活イベント</td><td className={td}>1回ごとの参加費（2026年12月の受付中3件は500円〜6,500円）</td><td className={td}>イベントでのマッチング</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              小野市には市の結婚相談や登録料補助がないため、公的な仕組みを使う場合は県のセンターが基本になります。センターは年5,000円と民間の結婚相談所より大幅に費用を抑えられる一方、会員自身が検索して申し込む仕組みが中心です。担当者による継続的な紹介や交際中の助言を重視する方は民間の結婚相談所、という比べ方が目安になります。小野市からは、神戸方面の結婚相談所や、自宅から活動できるオンライン型の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。神戸・兵庫の結婚相談所は<Link href="/area/kobe/" className="underline">神戸の結婚相談所</Link>で整理しています。公的な支援の料金は、各公式サイトで2026年11月27日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚が決まった後の手続き（婚姻届）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              小野市での婚姻届は、夫と妻が届出人となり、本籍地または所在地の市区町村に提出します。必要なものは婚姻届と届出人の本人確認書類（マイナンバーカード・運転免許証・パスポートなど）で、2024年3月1日から戸籍謄本の添付は不要になりました。戸籍の届出では住所は変わらないため、転居する場合は別に住民異動の届出が必要です。問い合わせ先は、小野市 市民福祉部 市民課 市民係（0794-63-1005）です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_KONIN_URL} {...ext}>小野市「婚姻届のご案内」（2024年3月1日更新）</a>（2026年11月27日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/wakayama/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">和歌山県の結婚支援</Link>
            <Link href="/knowledge/ichinomiya/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">一宮市の婚活支援</Link>
            <Link href="/knowledge/maebashi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">前橋市の婚活支援</Link>
            <Link href="/knowledge/kitami/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">北見市の婚活支援</Link>
            <Link href="/knowledge/hyogo-deai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ひょうご出会いサポートセンター（兵庫県）</Link>
            <Link href="/knowledge/miki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">三木市の婚活（みきで愛サポートセンター）</Link>
            <Link href="/knowledge/kakogawa/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">加古川市の婚活（婚活支援補助金）</Link>
            <Link href="/knowledge/toyooka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">豊岡市の婚活（omiai事業・Hapimari）</Link>
            <Link href="/area/kobe/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">神戸の結婚相談所</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/knowledge/flow/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の流れ</Link>
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
