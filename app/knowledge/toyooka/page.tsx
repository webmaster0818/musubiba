import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-23 確認）。
// ・omiai事業（旧：縁むすびさん事業）の仕組み・申込条件・費用・必要なもの・FAQ：豊岡市「マッチングを望む方、まずは登録を」（令和8年9月24日更新）
// ・ハートリーフ事務局の窓口（アイティ4階みらい応援Room・平日と第2・第4日曜・予約制・2日前まで）：豊岡市「出会いに関する相談、お見合い登録はアイティ4階まで」（令和8年9月28日更新）
// ・オフコン（グループ参加型）：豊岡市「もっと気軽に出会いたい方へ」（令和8年9月24日更新）
// ・成婚数の年度別内訳（2016〜2025年度・累計178組）・はーとピー実績・omiai実績・Hapimariの2025年度実績：豊岡市「2025年度の結婚支援事業実績」（令和8年4月9日更新）
// ・北但合同イベント「あきことあきお」：豊岡市（令和8年8月7日更新）。カップル数はハートリーフとよおか イベントレポート
// ・全但合同イベント「たじま出逢い日和」：豊岡市 開催報告（令和8年5月27日更新）
// ・事務局の移転（2025年4月）：豊岡市 記者発表資料（資料3）
// ・恋とパンと庭（但東町・大石家住宅）：豊岡市 記者発表資料（資料9）
// ・出会い機会創出事業補助金（団体向け・1回上限5万円）：豊岡市（令和8年5月14日更新）
// ・受付中・過去のイベント：ハートリーフとよおか（豊岡市婚活プロジェクト）events・events-history・events/3497
// ・Hapimari（豊岡市社会福祉協議会）の登録要件・費用・相談日：hapi-mari.net（use・faq・about・news/1107）
// ・ひょうご出会いサポートセンターの登録手数料・入会条件・連絡先：habatan-hyogo.jp（はばタン会員TOP・よくあるご質問）、兵庫県（ページ番号47801）
// ・はばタン会員登録料の補助自治体（令和8年度）：同センター お知らせ（2026年8月24日）
// ・新温泉町の入会前相談会（令和8年11月8日）：兵庫県 記者発表（2026年10月19日）
// ・結婚に伴う新生活支援事業の県内実施市町（令和7年度）：兵庫県（2026年1月27日更新）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const CITY = "https://www.city.toyooka.lg.jp/kurashi/1025089/1003039";
const CITY_HUB_URL = `${CITY}/index.html`;
const OMIAI_URL = `${CITY}/1004702.html`;
const SOUDAN_URL = `${CITY}/1033172.html`;
const OFFCON_URL = `${CITY}/1038742.html`;
const JISSEKI_URL = `${CITY}/1026889.html`;
const AKIKO_URL = `${CITY}/1038570.html`;
const TAJIMA_URL = `${CITY}/1038121.html`;
const HOJO_URL = `${CITY}/1003043.html`;
const PRESS_KOIPAN_URL =
  "https://www.city.toyooka.lg.jp/_res/projects/default_project/_page_/001/037/732/20260401-10.pdf";
const PRESS_ITEN_URL =
  "https://www.city.toyooka.lg.jp/_res/projects/default_project/_page_/001/033/953/20250801-3.pdf";
const HR_TOP_URL = "https://heartreef-toyooka.jp/";
const HR_EVENTS_URL = "https://heartreef-toyooka.jp/events";
const HR_HISTORY_URL = "https://heartreef-toyooka.jp/events-history";
const HR_KOIEKI_URL = "https://heartreef-toyooka.jp/events/3497/";
const HAPI_USE_URL = "https://www.hapi-mari.net/use";
const HAPI_FAQ_URL = "https://www.hapi-mari.net/faq";
const HAPI_ABOUT_URL = "https://www.hapi-mari.net/about";
const HAPI_NEWS_URL = "https://www.hapi-mari.net/news/1107.html";
const HABATAN_TOP_URL = "https://habatan-hyogo.jp/pages/habatan_top";
const HABATAN_FAQ_URL = "https://habatan-hyogo.jp/pages/faq";
const HABATAN_SUBSIDY_URL =
  "https://habatan-hyogo.jp/blogs/news-topics/%E4%BB%A4%E5%92%8C8%E5%B9%B4%E5%BA%A6-%E3%81%AF%E3%81%B0%E3%82%BF%E3%83%B3%E4%BC%9A%E5%93%A1%E7%99%BB%E9%8C%B2%E6%96%99-%E8%A3%9C%E5%8A%A9%E9%87%91%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B";
const PREF_DEAI_URL = "https://web.pref.hyogo.lg.jp/kk17/h27deai01.html";
const PREF_SHINONSEN_URL = "https://web.pref.hyogo.lg.jp/kk17/20261019-2.html";
const PREF_SHINSEIKATSU_URL = "https://web.pref.hyogo.lg.jp/kf11/kekkonnshien.html";

// 豊岡市「2025年度の結婚支援事業実績」の成婚数内訳（2016〜2025年度の合計）
const seikonBreakdown = [
  { name: "omiai事業（旧：縁むすびさん）", note: "市の1対1お見合い", count: 51 },
  { name: "Hapimari", note: "豊岡市社会福祉協議会の結婚相談所", count: 51 },
  { name: "はーとピー", note: "市の婚活イベント", count: 68 },
  { name: "FREE・団体補助・その他", note: "民間団体の婚活事業などを含む", count: 8 },
];
const SEIKON_TOTAL = 178;

// 2026年度（4月以降）に豊岡市内で開かれた婚活イベント（いずれも終了）
const pastEvents = [
  {
    date: "2026年4月19日",
    name: "はーとピー第152回「恋とパンと庭」",
    href: PRESS_KOIPAN_URL,
    detail: "会場：但東町の国登録有形文化財「大石家住宅」。20〜40歳の独身男女・男女各12人",
  },
  {
    date: "2026年5月16日",
    name: "全但合同婚活イベント「たじま出逢い日和」",
    href: TAJIMA_URL,
    detail: "但馬の各市町から参加者を募集。申込みは100人を超え、40人が参加し、カップル7組",
  },
  {
    date: "2026年6月7日",
    name: "はーとピー第153回「Love green focus」",
    href: HR_HISTORY_URL,
    detail: "詳細はハートリーフとよおかの過去イベント一覧に掲載",
  },
  {
    date: "2026年7月25日",
    name: "はーとピー第154回「陽気なアモーレ」",
    href: HR_HISTORY_URL,
    detail: "詳細はハートリーフとよおかの過去イベント一覧に掲載",
  },
  {
    date: "2026年8月23日",
    name: "はーとピー第155回「オミクラ」",
    href: HR_HISTORY_URL,
    detail: "会場：豊岡稽古堂。28〜35歳・男女各6名（男性は豊岡市在住または在勤）。カップル3組",
  },
  {
    date: "2026年9月26日",
    name: "はーとピー第156回「アイスがとける頃に」",
    href: HR_HISTORY_URL,
    detail: "会場：但東町のdim store。20〜40歳・男女各9名（男性は豊岡市在住または在勤）。カップル6組",
  },
  {
    date: "2026年10月4日",
    name: "北但合同婚活イベント「あきことあきお」",
    href: AKIKO_URL,
    detail: "豊岡市・香美町・新温泉町の共催。会場：Alter Ego MATIC（豊岡市中央町）。20〜39歳・男女各15人・参加費2,000円。カップル11組",
  },
];

export const metadata: Metadata = {
  title: "豊岡市で婚活する方へ｜市のomiai事業と社協「Hapimari」は登録無料、10年で178組が成婚、但馬の合同イベントと県センターも比較",
  description:
    "豊岡市の結婚支援は、1対1のお見合い「omiai事業」と社会福祉協議会の「Hapimari」が登録無料で、婚活イベント「はーとピー」も市が開いています。2016〜2025年度の成婚178組の内訳、2026年度の市内イベント7件、受付中の催し、ひょうご出会いサポートセンター・民間との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/toyooka/" },
};

const faqs = [
  {
    q: "豊岡市の婚活支援に費用はかかりますか？",
    a: "市の「omiai事業」（1対1のお見合い）は無料で、お見合いのときの喫茶代金のみ自己負担です。豊岡市社会福祉協議会の結婚相談所「Hapimari」も、登録料と相談の費用はかからず、お見合いでの飲食代金のみ自費と案内されています。市の婚活イベント「はーとピー」は回ごとに参加費が設定されており、2026年10月の「あきことあきお」と12月の「恋駅きっぷ」はいずれも2,000円です。",
  },
  {
    q: "豊岡市外に住んでいても利用できますか？",
    a: "omiai事業は、男性は豊岡市内在住または在勤の方に限られますが、女性は居住地を問いません。Hapimariの登録要件は、男性は豊岡市在住または在勤、女性は但馬・丹後地域（宮津市を除く）・福知山市在住です。はーとピーは回によって条件が異なり、男性を市内在住・在勤者に限る回や、近隣の市町の方を優先する合同開催の回があります。",
  },
  {
    q: "omiai事業とHapimariは両方に登録できますか？",
    a: "豊岡市のomiai事業のページでは、Hapimariは全く別の事業のため、どちらにも加入できると案内されています。omiai事業は市のハートリーフ事務局と仲人ボランティア「縁むすびさん」が、Hapimariは社会福祉協議会の結婚相談員がお相手を探します。いずれも自分でプロフィールを検索する仕組みではありません。",
  },
  {
    q: "ひょうご出会いサポートセンターの登録料に豊岡市の補助はありますか？",
    a: "センターが公表している令和8年度のはばタン会員登録料の補助自治体（姫路市・加古川市・養父市など9市町）に、豊岡市は含まれていません。当サイトでは、2026年11月23日時点で豊岡市の公式サイトに登録料補助の案内を確認できませんでした。センターの登録手数料は年5,000円で、お見合い・成婚の費用はかかりません。",
  },
  {
    q: "豊岡市に結婚新生活支援（新婚世帯への補助）はありますか？",
    a: "兵庫県が公表している令和7年度の「結婚に伴う新生活支援事業」の実施市町一覧には、但馬地域では養父市・朝来市・香美町・新温泉町が掲載されていますが、豊岡市は掲載されていません。当サイトでは、2026年11月23日時点で豊岡市の公式サイトに同様の制度の案内を確認できませんでした。最新の状況は豊岡市役所にお問い合わせください。",
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
  headline: "豊岡市で婚活する方へ：市のomiai事業・はーとピー、社会福祉協議会のHapimari、但馬の合同イベントと、県センター・民間の結婚相談所との比較",
  description: "豊岡市の結婚支援（omiai事業・はーとピー・オフコン・ハートリーフ事務局の相談窓口）と社会福祉協議会のHapimari、2016〜2025年度の成婚数、2026年度の市内イベント、ひょうご出会いサポートセンター・民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-23",
  dateModified: "2026-11-23",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/toyooka/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "豊岡市の婚活（omiai事業・Hapimari）", item: "https://mu-su-bi-ba.com/knowledge/toyooka/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeToyooka() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "豊岡市の婚活（omiai事業・Hapimari）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          豊岡市で婚活する方へ：市のomiai事業・はーとピー、社会福祉協議会のHapimari、但馬の合同イベントと、県センター・民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月23日（市の事業・実績は同日に豊岡市公式サイトとハートリーフとよおか、Hapimariは豊岡市社会福祉協議会の公式サイト、県のセンターはひょうご出会いサポートセンター公式サイトと兵庫県公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />豊岡市には、登録無料の1対1のお見合いが2種類と、市が毎月のように開く婚活イベントがあります
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>市の<strong>「omiai事業」</strong>（旧：縁むすびさん事業）は、事務局が希望条件に合うお相手を紹介する1対1のお見合いで、<strong>費用は無料</strong>（喫茶代のみ自己負担）です。相談窓口はアイティ4階で、平日に加えて第2・第4日曜日も予約制で開いています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>豊岡市社会福祉協議会の結婚相談所<strong>「Hapimari」</strong>も、登録料・紹介料は無料です。市の集計では、2016〜2025年度の10年間に市の結婚支援事業等で<strong>178組</strong>が成婚し、うちomiai事業とHapimariが各51組、婚活イベント「はーとピー」が68組です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>2026年度は、但馬全域の合同イベント（5月）や北但1市2町の合同イベント（10月・カップル11組）を含め、<strong>市内で7件</strong>の婚活イベントが開かれました。<strong>12月12日には京丹後市と合同の40〜50歳向けイベント</strong>が受付中です（2026年11月23日時点）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>兵庫県の「ひょうご出会いサポートセンター」は年5,000円で、豊岡市は登録料の補助対象に入っていません。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">豊岡市で利用できる結婚支援の一覧</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              豊岡市では、くらし創造部地域づくり課の「ハートリーフ事務局」が結婚支援事業を担当しています。市の事業と、市が案内している社会福祉協議会・県の事業を、当サイトで次のとおり整理しました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>名称・運営</th><th className={th}>内容</th><th className={th}>費用</th><th className={th}>主な条件</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={OMIAI_URL} {...ext}>omiai事業</a><br />豊岡市</td><td className={td}>事務局が希望条件をもとにお相手を選んで紹介する1対1のお見合い。自分でプロフィールを閲覧して探すことはできない</td><td className={td}>無料（お見合いの喫茶代のみ自己負担）</td><td className={td}>20歳以上の独身で交際中の相手がいない方。男性は市内在住または在勤、女性は居住地を問わない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={HR_TOP_URL} {...ext}>はーとピー</a><br />豊岡市</td><td className={td}>市が企画する婚活イベント（マッチングあり）</td><td className={td}>回ごとに設定（例：2,000円）</td><td className={td}>対象年齢は原則20〜40歳。回によって年齢や男性の居住条件が異なる</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={OFFCON_URL} {...ext}>オフコン</a><br />豊岡市</td><td className={td}>友人や職場の仲間とグループを作って参加する出会いの場</td><td className={td}>登録料などは無料（開催時の飲食代は各自負担）</td><td className={td}>20歳以上の独身で交際中の相手がいない方。市内在住・在勤の方、またはその方の紹介の方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={HAPI_USE_URL} {...ext}>Hapimari</a><br />豊岡市社会福祉協議会</td><td className={td}>担当の結婚相談員がお相手を探して紹介する1対1のお見合い</td><td className={td}>登録料・紹介料・相談は無料（お見合いの飲食代のみ自費）</td><td className={td}>男性は豊岡市在住または在勤、女性は但馬・丹後地域（宮津市を除く）・福知山市在住</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンター</Link><br />兵庫県</td><td className={td}>スマートフォンで会員を検索してお見合いを申し込む仕組み。AIによる紹介もある</td><td className={td}>はばタン会員は登録手数料5,000円/年</td><td className={td}>20歳以上の独身で、兵庫県内に在住・在勤の方など</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              市はこのほか、市内の飲食店・団体が出会いイベントを開く場合に1回あたり上限5万円を補助する「豊岡市出会い機会創出事業補助金」を設けています（対象は20〜49歳の独身男女のイベント）。この補助金は主催する側への支援で、参加者への費用補助ではありません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_HUB_URL} {...ext}>豊岡市「婚活等事業・イベント」</a>・<a href={OMIAI_URL} {...ext}>「マッチングを望む方、まずは登録を」（令和8年9月24日更新）</a>・<a href={OFFCON_URL} {...ext}>「もっと気軽に出会いたい方へ」（令和8年9月24日更新）</a>・<a href={HOJO_URL} {...ext}>「豊岡市出会い機会創出事業補助金」の案内（令和8年5月14日更新）</a>・<a href={HR_TOP_URL} {...ext}>ハートリーフとよおか「はーとピー」</a>・<a href={HAPI_USE_URL} {...ext}>Hapimari「ご利用方法」</a>・<a href={HAPI_FAQ_URL} {...ext}>「よくある質問」</a>・<a href={HABATAN_TOP_URL} {...ext}>ひょうご出会いサポートセンター「はばタン会員TOP」</a>・<a href={HABATAN_FAQ_URL} {...ext}>「よくあるご質問」</a>（いずれも2026年11月23日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">omiai事業の登録の流れとハートリーフ事務局の窓口</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>利用規約を確認し、豊岡市公式LINEを友だち追加して、欲しい情報で「出会い・結婚」を選ぶ（ハートリーフ専用のメニューが表示される）</li>
              <li>メニューの手順で仮登録フォームを送信する（運転免許証などの画像の添付が必要）</li>
              <li>メニューの「ご予約」から本登録面談の日程を予約し、事務局で約30分の面談を受けて希望条件を伝える</li>
              <li>事務局が希望条件に合う方を探し、見つかればLINEで「居住地（市まで）・生年月・職業・趣味」が知らされる</li>
              <li>双方が「会いたい」と回答すると事務局が日程を調整し、お見合い後に双方が「また会いたい」となれば、事務局を通して連絡先を交換して仮交際となる</li>
            </ol>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>場所</td><td className={td}>アイティ4階 みらい応援Room（2025年4月に市役所本庁から移転）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>開設日</td><td className={td}>毎週月曜日〜金曜日、第2・第4日曜日（詳しい開設日は予約カレンダーで確認）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>相談時間</td><td className={td}>午前10時〜午後4時（予約優先）。窓口自体は午前9時〜午後5時。面談はおおむね30分〜1時間</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>予約</td><td className={td}>市公式LINEの「ご予約」から、2日前までに予約。男性は市内在住または在勤の方に限る</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>相談内容</td><td className={td}>omiai事業への登録のほか、恋愛相談も受け付け</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>問い合わせ</td><td className={td}>地域づくり課 移住定住・若者係（ハートリーフ事務局）0796-21-9100</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              omiai事業には、仲人ボランティアの「縁むすびさん」が協力しています。縁むすびさんが担当する登録者とお見合いする場合は、縁むすびさんが日程調整を行い、お見合いにも立ち会います。登録情報は匿名で扱われ、お相手に伝わるのはお見合いが決まってから名字のみと案内されています。再婚の方も登録できます。
            </p>
            <p>
              市の集計（2026年3月31日現在）では、omiai事業の結婚希望登録者は402人（男性264人・女性138人）、縁むすびさんは34人です。男性の登録者は女性の約1.9倍です（当サイト計算）。女性は居住地を問わず登録できます。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={OMIAI_URL} {...ext}>豊岡市「マッチングを望む方、まずは登録を」</a>・<a href={SOUDAN_URL} {...ext}>「出会いに関する相談、お見合い登録はアイティ4階まで（予約方法について）」（令和8年9月28日更新）</a>・<a href={JISSEKI_URL} {...ext}>「2025年度の結婚支援事業実績」（令和8年4月9日更新）</a>・<a href={PRESS_ITEN_URL} {...ext}>豊岡市 記者発表資料「事務局移転と相談体制の強化による登録者数等の増加」</a>（いずれも2026年11月23日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">豊岡市の結婚支援事業による成婚数（2016〜2025年度）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>豊岡市は、結婚支援事業を始めた2016年度からの成婚数を事業別に公表しています。2025年度は14組、10年間の累計は178組です。</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>事業</th><th className={th}>内容</th><th className={th}>成婚数（10年間）</th><th className={th}>割合（当サイト計算）</th></tr></thead>
                <tbody>
                  {seikonBreakdown.map((s) => (
                    <tr key={s.name} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{s.name}</td>
                      <td className={td}>{s.note}</td>
                      <td className={td}>{s.count}組</td>
                      <td className={td}>{Math.round((s.count / SEIKON_TOTAL) * 100)}%</td>
                    </tr>
                  ))}
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>合計</td><td className={td}>—</td><td className={td}>{SEIKON_TOTAL}組</td><td className={td}>100%</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              年度別の合計は13組〜24組で推移しており、年平均は約17.8組です（当サイト計算）。婚活イベント「はーとピー」は2013年11月から続いており、2026年3月31日時点で累計142回・マッチング成立654組・成婚73組（2025年度は10回・51組・3組）です。社会福祉協議会のHapimariは、2025年度にお見合い132件・成婚6件の実績があります。なお、市の注記では、omiai事業とHapimariの成婚数は縁むすびさん・結婚相談員が直接紹介したもののみを数えており、イベントの成婚数は報告のあったもののみを数えています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={JISSEKI_URL} {...ext}>豊岡市「2025年度の結婚支援事業実績」（令和8年4月9日更新。2026年11月23日確認）</a>。割合・年平均は当サイトが同ページの数値から計算しています。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">2026年度に豊岡市内で開かれた婚活イベント（7件・いずれも終了）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>豊岡市公式サイトとハートリーフとよおかに掲載されている、2026年4月以降に市内で開かれた婚活イベントです。</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日</th><th className={th}>名称</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  {pastEvents.map((e) => (
                    <tr key={e.name} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{e.date}（終了）</td>
                      <td className={td}><a href={e.href} {...ext}>{e.name}</a></td>
                      <td className={td}>{e.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              2026年度は、豊岡市単独のはーとピーに加えて、但馬地域の市町が合同で開く催しが始まっています。5月の「たじま出逢い日和」は初めての但馬合同の婚活イベントで、10月の「あきことあきお」は豊岡市・香美町・新温泉町の1市2町が協働し、但馬外からの参加も受け付けていました。会場も、市中心部の店舗のほか、但東町の文化財や店舗など市内各地に広がっています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PRESS_KOIPAN_URL} {...ext}>豊岡市 記者発表資料「文化財×婚活＠但東」</a>・<a href={TAJIMA_URL} {...ext}>豊岡市「【開催報告】全但合同婚活イベント『たじま出逢い日和』」（令和8年5月27日更新）</a>・<a href={AKIKO_URL} {...ext}>豊岡市「【北但合同婚活イベント】『あきことあきお』」（令和8年8月7日更新）</a>・<a href={HR_HISTORY_URL} {...ext}>ハートリーフとよおか 過去のイベント</a>・<a href={HR_TOP_URL} {...ext}>同 イベントレポート（カップル数）</a>（いずれも2026年11月23日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">受付中のイベント（2026年11月23日時点）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日・会場</th><th className={th}>名称</th><th className={th}>募集条件・参加費</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>2026年12月12日（土）12:30〜14:30・ぽっぽや（豊岡市日撫、コウノトリの郷駅）</td><td className={td}><a href={HR_KOIEKI_URL} {...ext}>特別イベント「恋駅きっぷ」（京丹後市と合同）</a></td><td className={td}>40〜50歳の独身男女・男女各9名（応募多数の場合は抽選）。男女とも豊岡市または京丹後市に在住・在勤の方を優先。参加費2,000円。募集は2026年12月6日まで</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              はーとピーの抽選結果やイベントの案内は、市公式LINEの「はーとピー」メニューを通じて届きます。募集状況は変わることがあるため、申込みの前にハートリーフとよおかのイベントページで最新の情報をご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={HR_EVENTS_URL} {...ext}>ハートリーフとよおか イベント一覧</a>・各イベントページ（上表のリンク先）・<a href={AKIKO_URL} {...ext}>豊岡市「あきことあきお」</a>（いずれも2026年11月23日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">社会福祉協議会の結婚相談所「Hapimari」</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              Hapimari（ハピマリ）は、豊岡市社会福祉協議会が運営する結婚相談所です。登録はスマートフォンからでき、担当の結婚相談員が電話や面談で希望を聞いたうえでお相手を探します。お相手が見つかると、原則として先に女性に男性のプロフィールが渡され、双方が希望した場合に相談員を通して日程を調整します。お見合いには双方の相談員が最初だけ立ち会うこともできます。
            </p>
            <p>
              相談日は第1・第3土曜日と第2・第4水曜日の13時30分〜16時（受付は15時30分まで）で、会場は豊岡健康福祉センター（豊岡市城南町）2階です。2026年11月は7日・11日・21日・25日に開かれ、事前予約は不要と案内されています。事務局の電話は0796-23-2573（平日8時30分〜17時30分）です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={HAPI_USE_URL} {...ext}>Hapimari「ご利用方法」</a>・<a href={HAPI_FAQ_URL} {...ext}>「よくある質問」</a>・<a href={HAPI_ABOUT_URL} {...ext}>「Hapimariとは」</a>・<a href={HAPI_NEWS_URL} {...ext}>お知らせ「11月の結婚相談日のご案内」（2026年10月26日）</a>（いずれも2026年11月23日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">ひょうご出会いサポートセンターと但馬地域の窓口</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              豊岡市の公式サイトでも、兵庫県の「ひょうご出会いサポートセンター」が案内されています。センターは、スマートフォンやパソコンからプロフィールの閲覧やお見合いの申込みを行う仕組みで、はばタン会員の登録手数料は年5,000円です（お見合い・成婚の費用はかかりません）。料金・入会条件・活動の流れの詳細は、当サイトの<Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンターの解説</Link>をご覧ください。
            </p>
            <p>
              センターと兵庫県の公式サイトに掲載されている連絡先は電話（050-1790-2805）とメールで、当サイトでは2026年11月23日時点で、但馬地域に常設の窓口があるという案内を確認できませんでした。お見合いは対面のほか、自宅からZoomでも行えます。但馬地域では、2026年11月8日に新温泉町で入会前相談会（当日の会員登録も受付）が開かれました（終了）。
            </p>
            <p>
              センターが公表している令和8年度のはばタン会員登録料の補助自治体は、姫路市・加古川市・西脇市・多可町・宍粟市・養父市・高砂市・上郡町・神河町の9市町で、但馬地域では養父市のみが含まれています。豊岡市は含まれていません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={`${CITY}/1011846.html`} {...ext}>豊岡市「『ひょうご出会いサポートセンター』の案内」</a>・<a href={HABATAN_TOP_URL} {...ext}>ひょうご出会いサポートセンター「はばタン会員TOP」</a>・<a href={HABATAN_FAQ_URL} {...ext}>「よくあるご質問」</a>・<a href={HABATAN_SUBSIDY_URL} {...ext}>お知らせ「令和8年度 はばタン会員登録料 補助金のお知らせ」（2026年8月24日）</a>・<a href={PREF_DEAI_URL} {...ext}>兵庫県「ひょうご出会いサポートセンター」</a>・<a href={PREF_SHINONSEN_URL} {...ext}>兵庫県 記者発表「入会前相談会を新温泉町で開催します！」（2026年10月19日）</a>（いずれも2026年11月23日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚後の新生活支援について</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              兵庫県は、世帯所得500万円未満で夫婦ともに婚姻日の年齢が39歳以下の新婚世帯に、新居の住居費・引越費用などを支援する市町へ補助を行っています（1世帯あたりの上限は夫婦ともに29歳以下で60万円、それ以外は30万円）。県が公表している令和7年度の実施市町一覧では、但馬地域から養父市・朝来市・香美町・新温泉町が掲載されていますが、豊岡市は掲載されていません。
            </p>
            <p>
              当サイトでは、2026年11月23日時点で豊岡市の公式サイトに結婚新生活支援の案内を確認できませんでした。県の一覧は令和7年度分のため、令和8年度以降の状況や市独自の制度の有無は、豊岡市役所でご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_SHINSEIKATSU_URL} {...ext}>兵庫県「結婚に伴う新生活支援事業について」（2026年1月27日更新。2026年11月23日確認）</a>。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な支援と民間の結婚相談所の費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>お相手の探し方</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>豊岡市 omiai事業</td><td className={td}>無料（喫茶代のみ）</td><td className={td}>事務局・縁むすびさんが紹介</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>豊岡市社会福祉協議会 Hapimari</td><td className={td}>無料（お見合いの飲食代のみ）</td><td className={td}>担当の結婚相談員が紹介</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>豊岡市 はーとピー</td><td className={td}>1回ごとの参加費（2026年10月・12月の回は2,000円）</td><td className={td}>イベントでのマッチング</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンター（はばタン会員）</Link></td><td className={td}>5,000円/年（豊岡市の補助なし）</td><td className={td}>会員自身の検索・AIによる紹介</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              豊岡市にお住まい・お勤めの方は、無料で利用できる1対1のお見合いが市と社会福祉協議会に1つずつあり、費用面では民間の結婚相談所より大幅に低く抑えられます。一方で、これらは地域内の登録者からの紹介が中心で、お相手を自分で検索する仕組みはありません。会員数の多い仕組みで探したい方は県のセンター、担当者による継続的な提案や交際中の助言を重視する方は民間の結婚相談所、という比べ方が目安になります。市内から利用できるオンライン型の結婚相談所や、神戸市・京都府北部の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。公的な支援の料金は、各公式サイトで2026年11月23日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/ueda/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">上田市の婚活</Link>
            <Link href="/knowledge/asahi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">旭市の婚活（旭市出会いコンシェルジュ）</Link>
            <Link href="/knowledge/miai-renai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">お見合い結婚と恋愛結婚の割合</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/hyogo-deai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ひょうご出会いサポートセンター（兵庫県）</Link>
            <Link href="/knowledge/fukuchiyama/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">福知山市の婚活（きょうと婚活応援センター）</Link>
            <Link href="/area/kobe/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">神戸の結婚相談所</Link>
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
