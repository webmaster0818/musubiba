import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-24 確認）。
// ・婚活支援補助金（はばタン会員の登録料・更新料5,000円、20〜39歳、申請期間・先着順・オンライン申請・問い合わせ先）：加古川市「令和8年度 婚活支援補助金のお知らせ」（2026年4月8日更新）
// ・市の「婚活支援」カテゴリに掲載されている記事が上記の1件のみであること：加古川市「婚活支援」一覧ページ
// ・婚活支援補助金の開始経緯（令和6年6月1日受付開始・95人分47万5,000円の予算）：加古川市「定例記者会見（令和6年5月23日）」
// ・市主催「うどん作りで婚活しよう」と同日の登録相談会（2026年1月18日・総合文化センター）：加古川市「広報かこがわ 2025年12月号」テキスト版、ひょうご出会いサポートセンター イベント情報
// ・結婚新生活支援補助金（対象費用・最大60万円/30万円・申請期間・申請先）：加古川市「令和8年度結婚新生活支援補助金（最大60万円）のお知らせ」（2026年8月10日更新）
// ・同補助金の対象要件（婚姻届の期間・所得500万円未満・39歳以下・2年以上居住の意思など）：加古川市「令和8年度 補助対象要件チェックシート」（PDF）
// ・婚姻件数948件（令和5年度）・新生活支援の申請見込108世帯・総事業費・令和7年度12月までの実績33世帯・令和6年度の支給率87.6%：加古川市「令和8年度地域少子化対策重点推進交付金実施計画書」（PDF）
// ・ひょうご出会いサポートセンターの登録手数料・会員数（R7年度実績）・累積成婚数・入会条件・連絡先：habatan-hyogo.jp（はばタン会員TOP・よくあるご質問）、兵庫県（kk17/h27deai01）
// ・登録料を補助する9市町（令和8年度）：同センター お知らせ（2026年8月24日）
// ・加古川市内・東播磨の婚活イベントと出張登録会：同センター イベント情報（東播磨タグ）の各ページ、兵庫県 記者発表（2026年8月24日 播磨町、2026年10月19日 高砂市）
// ・東播磨県民局・加古川市社会福祉協議会の婚活事業：2026-11-24 時点で公式情報を確認できず（本文に記載）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const CITY = "https://www.city.kakogawa.lg.jp/soshikikarasagasu/kodomo/kodomoseisaku";
const KONKATSU_INDEX_URL = `${CITY}/konkatusien/index.html`;
const HOJO_URL = `${CITY}/konkatusien/43157.html`;
const SHINSEIKATSU_URL = `${CITY}/kekkonshinseikatsu/31177.html`;
const YOUKEN_PDF_URL = "https://www.city.kakogawa.lg.jp/material/files/group/46/R08_kekkon_youken.pdf";
const JISSHI_PDF_URL = "https://www.city.kakogawa.lg.jp/material/files/group/46/R8jissikeikakusyo.pdf";
const PRESS_R6_URL =
  "https://www.city.kakogawa.lg.jp/soshikikarasagasu/kikakubu/kikakubukohoka/kisyahoudou/press/reiwa6nendo/43353.html";
const KOHO_202512_URL =
  "https://www.city.kakogawa.lg.jp/soshikikarasagasu/kikakubu/kikakubukohoka/kouhou/kohokakogawa/kohokakogawabakkunanba/reiwa7nen/tekisutoban/48892.html";
const HABATAN_TOP_URL = "https://habatan-hyogo.jp/pages/habatan_top";
const HABATAN_FAQ_URL = "https://habatan-hyogo.jp/pages/faq";
const HABATAN_SUBSIDY_URL =
  "https://habatan-hyogo.jp/blogs/news-topics/%E4%BB%A4%E5%92%8C8%E5%B9%B4%E5%BA%A6-%E3%81%AF%E3%81%B0%E3%82%BF%E3%83%B3%E4%BC%9A%E5%93%A1%E7%99%BB%E9%8C%B2%E6%96%99-%E8%A3%9C%E5%8A%A9%E9%87%91%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B";
const HABATAN_EAST_URL = "https://habatan-hyogo.jp/blogs/event/tagged/%E6%9D%B1%E6%92%AD%E7%A3%A8";
const PREF_DEAI_URL = "https://web.pref.hyogo.lg.jp/kk17/h27deai01.html";
const PREF_HARIMA_URL = "https://web.pref.hyogo.lg.jp/kk17/20260824.html";
const PREF_TAKASAGO_URL = "https://web.pref.hyogo.lg.jp/kk17/20261019.html";

const EV = "https://habatan-hyogo.jp/blogs/event/";
const EV_KOIHIROI_2025 = `${EV}%E4%B8%89%E7%94%B0%E5%B8%82%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88-10-11-%E5%9C%9F-%E3%81%AE%E3%81%94%E6%A1%88%E5%86%85-backup`;
const EV_20261205 = `${EV}%E5%8A%A0%E5%8F%A4%E5%B7%9D%E5%B8%82%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88-12-5-%E5%9C%9F-%E3%81%AE%E3%81%94%E6%A1%88%E5%86%85`;

// ひょうご出会いサポートセンターのイベント情報（東播磨）に掲載された、加古川市内で開かれた婚活イベント・登録会
// 2025年度（2025年4月〜2026年3月）と2026年度（2026年4月〜）。当サイトで1件ずつ確認して整理
const cityEvents = [
  {
    fy: "2025年度",
    date: "2025年6月7日（土）",
    name: "ひょうご出会いサポートセンター 出張登録会",
    host: "ひょうご出会いサポートセンター",
    detail: "会場：加古川市民交流ひろば（カピル21ビル5階）。参加無料。はばタン会員の登録面談を実施",
    href: `${EV}%E5%8A%A0%E5%8F%A4%E5%B7%9D%E5%B8%82-%E3%81%B2%E3%82%87%E3%81%86%E3%81%94%E5%87%BA%E4%BC%9A%E3%81%84%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E5%87%BA%E5%BC%B5%E7%99%BB%E9%8C%B2%E4%BC%9A-6-7-%E5%9C%9F-1`,
  },
  {
    fy: "2025年度",
    date: "2025年6月28日（土）",
    name: "ボドゲtoスポーツde素敵な出会いを！",
    host: "加古川市立日岡山体育館",
    detail: "25〜40歳・男女各10名・参加費1,500円",
    href: `${EV}%E5%B8%82%E7%94%BA%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88-%E5%8A%A0%E5%8F%A4%E5%B7%9D%E5%B8%826-28-%E5%9C%9F-%E3%81%AE%E3%81%94%E6%A1%88%E5%86%85`,
  },
  {
    fy: "2025年度",
    date: "2025年10月18日（土）",
    name: "ゴミ拾いをしながら交流する婚活イベント",
    host: "民間の婚活支援団体",
    detail: "会場：加古川市尾上町。22〜39歳・男女各10名・参加費 男性4,000円／女性2,000円",
    href: EV_KOIHIROI_2025,
  },
  {
    fy: "2025年度",
    date: "2025年11月29日（土）",
    name: "ゴミ拾いをしながら交流する婚活イベント",
    host: "民間の婚活支援団体",
    detail: "会場：かわのまちリビング（加古川町寺家町）。22〜39歳・男女各10名・参加費 男性4,000円／女性2,000円",
    href: EV_KOIHIROI_2025,
  },
  {
    fy: "2025年度",
    date: "2025年12月6日（土）",
    name: "ボドゲtoスポーツde素敵な出会いを！2025冬",
    host: "加古川市立日岡山体育館",
    detail: "25〜40歳・男女各5名・参加費1,500円",
    href: `${EV}%E5%8A%A0%E5%8F%A4%E5%B7%9D%E5%B8%82%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88-12-6-%E5%9C%9F-%E3%81%AE%E3%81%94%E6%A1%88%E5%86%85`,
  },
  {
    fy: "2025年度",
    date: "2026年1月18日（日）",
    name: "うどんDE婚活（加古川市×丸亀製麺）と出張登録相談会",
    host: "加古川市（こども政策課）",
    detail: "会場：加古川総合文化センター。20歳〜おおむね40歳・男女各10名（抽選）・参加無料。同日に予約不要の登録相談会",
    href: `${EV}%E5%8A%A0%E5%8F%A4%E5%B7%9D%E5%B8%82-%E4%B8%B8%E4%BA%80%E8%A3%BD%E9%BA%BA%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88-1-18-%E6%97%A5-%E3%81%AE%E3%81%94%E6%A1%88%E5%86%85`,
  },
  {
    fy: "2026年度",
    date: "2026年6月6日（土）",
    name: "ゆるスポ恋活＆ビューティー体験 2026夏",
    host: "加古川市立日岡山体育館",
    detail: "25〜40歳・各7名・参加費1,500円",
    href: `${EV}%E5%8A%A0%E5%8F%A4%E5%B7%9D%E5%B8%82%E3%82%A4%E3%83%99%E3%83%B3%E3%83%886-6-%E5%9C%9F-%E3%81%AE%E3%81%94%E6%A1%88%E5%86%85`,
  },
  {
    fy: "2026年度",
    date: "2026年9月19日（土）",
    name: "ゆるスポ恋活",
    host: "加古川市立日岡山体育館",
    detail: "23〜35歳・男女各7名・参加費 男性2,500円／女性1,500円",
    href: `${EV}%E5%8A%A0%E5%8F%A4%E5%B7%9D%E5%B8%82%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88-9-19-%E5%9C%9F-%E3%81%AE%E3%81%94%E6%A1%88%E5%86%85`,
  },
  {
    fy: "2026年度",
    date: "2026年10月25日（日）",
    name: "ゴミ拾いをしながら交流する婚活イベント",
    host: "民間の婚活支援団体",
    detail: "22〜39歳・男女各12名・参加費 男性4,000円／女性2,000円（8月31日までは市内在住・在勤者を優先）",
    href: `${EV}%E5%8A%A0%E5%8F%A4%E5%B7%9D%E5%B8%82%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88-10-25-%E6%97%A5-%E3%81%AE%E3%81%94%E6%A1%88%E5%86%85`,
  },
  {
    fy: "2026年度",
    date: "2026年12月5日（土）",
    name: "GAME×BEAUTY×LOVE",
    host: "加古川市立日岡山体育館",
    detail: "23〜35歳・男女各3名・参加費 男性2,500円／女性1,500円。受付期間は11月27日まで",
    href: EV_20261205,
  },
];

export const metadata: Metadata = {
  title: "加古川市で結婚相談所を探す方へ｜県センターの登録料5,000円は20〜39歳なら市が全額補助、2026年度の市内婚活イベント4件・新婚補助は最大60万円",
  description:
    "加古川市には市独自の結婚相談所はなく、兵庫県のひょうご出会いサポートセンターの登録料5,000円を市が補助しています（20〜39歳）。2026年度に市内で開かれる婚活イベント4件、東播磨の出張登録会、結婚新生活支援補助金（最大60万円）、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/kakogawa/" },
};

const faqs = [
  {
    q: "加古川市に市営の結婚相談所はありますか？",
    a: "2026年11月24日時点で、加古川市の公式サイトの「婚活支援」に掲載されているのは、兵庫県の「ひょうご出会いサポートセンター」の登録料を補助する婚活支援補助金の1件のみで、市が運営する1対1のお見合い事業（市営の結婚相談所）の案内は確認できませんでした。市は県のセンターの利用を後押しする形をとっており、このほか市主催の出会いイベントを開くことがあります（2026年1月18日の「うどん作りで婚活しよう」など）。",
  },
  {
    q: "婚活支援補助金はいくらで、誰が対象ですか？",
    a: "ひょうご出会いサポートセンターの有料会員「はばタン会員」の登録手数料または更新手数料5,000円が補助されます。対象は、申請時点で加古川市に住民登録があり、20歳以上39歳以下の独身で、市税の滞納がなく、暴力団員でない方です。令和8年度は2026年4月1日〜2027年3月31日の登録・更新分が対象で、申請期間は2026年6月1日〜2027年3月31日（先着順・予算額に達した時点で終了）です。かこがわオンライン申請システムから申請でき、問い合わせ先はこども政策課（079-427-9397）です。",
  },
  {
    q: "40歳以上でもひょうご出会いサポートセンターを利用できますか？",
    a: "センターの入会条件は、結婚を希望する20歳以上の独身の方で、兵庫県内に在住・在勤の方などとされており、年齢の上限は示されていません。ただし、加古川市の婚活支援補助金の対象は39歳以下のため、40歳以上の方は登録手数料5,000円（年額）を自己負担することになります。",
  },
  {
    q: "加古川市内にひょうご出会いサポートセンターの窓口はありますか？",
    a: "センターの連絡先は電話（050-1790-2805）とメールで、入会の手続きはオンラインで行い、登録面談もオンラインで受けられます。当サイトでは、2026年11月24日時点で加古川市内や東播磨地域に常設の窓口があるという案内を確認できませんでした。センターは各地で出張登録会を開いており、加古川市内では2025年6月7日と2026年1月18日に開かれました。2026年度は、東播磨地域では明石市（6月20日）・播磨町（9月12日）・高砂市（11月7日）で開かれています（いずれも終了）。",
  },
  {
    q: "加古川市の結婚新生活支援補助金はいくらもらえますか？",
    a: "婚姻日時点で夫婦ともに29歳以下の場合は最大60万円、それ以外で夫婦ともに39歳以下の場合は最大30万円です。対象は、住宅の取得・賃借・リフォームの費用と引越費用で、2026年1月1日〜2027年3月31日に婚姻届が受理され、夫婦の合計所得金額が500万円未満であることなどが条件です。申請期間は2026年6月1日〜2027年3月31日（必着・先着順）で、こども政策課への持参または郵送で申請します。",
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
  headline: "加古川市で結婚相談所を探す方へ：市の婚活支援補助金、ひょうご出会いサポートセンター、市内の婚活イベント、結婚新生活支援と民間の結婚相談所との比較",
  description:
    "加古川市の婚活支援補助金（ひょうご出会いサポートセンターの登録料5,000円）、市内で開かれた婚活イベントと出張登録会、結婚新生活支援補助金、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-24",
  dateModified: "2026-11-24",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/kakogawa/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "加古川市の婚活（婚活支援補助金）", item: "https://mu-su-bi-ba.com/knowledge/kakogawa/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeKakogawa() {
  const fy2025 = cityEvents.filter((e) => e.fy === "2025年度").length;
  const fy2026 = cityEvents.filter((e) => e.fy === "2026年度").length;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "加古川市の婚活（婚活支援補助金）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          加古川市で結婚相談所を探す方へ：市の婚活支援補助金、ひょうご出会いサポートセンター、市内の婚活イベント、結婚新生活支援と民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月24日（市の事業は同日に加古川市公式サイト、県のセンターとイベントはひょうご出会いサポートセンター公式サイトと兵庫県公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />加古川市の公的な結婚相談は、県のセンターを市が登録料補助で後押しする形です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>加古川市には、市が運営する1対1のお見合い事業（市営の結婚相談所）の案内はありません（2026年11月24日時点）。代わりに、兵庫県の<strong>「ひょうご出会いサポートセンター」</strong>のはばタン会員の<strong>登録料・更新料5,000円を市が補助</strong>しています。対象は市内在住の<strong>20〜39歳</strong>の独身の方です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>センターは、スマートフォンで会員を検索してお見合いを申し込む仕組みで、令和7年度のはばタン会員は3,351人です。補助を使えば、20〜39歳の加古川市民は実質0円で利用できます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>センターのイベント情報に掲載された加古川市内の婚活イベント・登録会は、当サイトの集計で<strong>2025年度{fy2025}件、2026年度{fy2026}件</strong>です。2026年度の4件のうち、12月5日の市立日岡山体育館のイベントは掲載上11月27日まで受付中です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>結婚後は、新居の住居費や引越費用に使える<strong>結婚新生活支援補助金（最大60万円）</strong>があります。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">加古川市から利用できる公的な結婚支援の一覧</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              加古川市では、こども部こども政策課が婚活支援と結婚新生活支援を担当しています。市の事業と、市が案内している県のセンターを、当サイトで次のとおり整理しました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>名称・運営</th><th className={th}>内容</th><th className={th}>費用</th><th className={th}>主な条件</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンター</Link><br />兵庫県</td><td className={td}>はばタン会員（お見合い会員）は、スマートフォンで会員を検索してお見合いを申し込む。AIによる紹介もある。あいサポ会員（イベント会員）はイベント情報を受け取る無料会員</td><td className={td}>はばタン会員は登録手数料5,000円/年（お見合い・成婚の費用なし）。あいサポ会員は無料</td><td className={td}>結婚を希望する20歳以上の独身で、兵庫県内に在住・在勤の方など</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={HOJO_URL} {...ext}>婚活支援補助金</a><br />加古川市</td><td className={td}>はばタン会員の登録手数料・更新手数料を補助（年1回申請可）</td><td className={td}>5,000円を補助（登録手数料と同額）</td><td className={td}>市内に住民登録があり、20〜39歳の独身で、市税の滞納がない方など</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={KOHO_202512_URL} {...ext}>市主催の出会いイベント</a><br />加古川市</td><td className={td}>市が企画する出会いイベント。2026年1月18日は「うどん作りで婚活しよう」を開催</td><td className={td}>2026年1月の回は無料</td><td className={td}>2026年1月の回は20歳〜おおむね40歳の独身男女・男女各10人（抽選）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={SHINSEIKATSU_URL} {...ext}>結婚新生活支援補助金</a><br />加古川市</td><td className={td}>婚姻に伴う住宅の取得・賃借・リフォーム費用と引越費用を補助</td><td className={td}>最大60万円（夫婦とも29歳以下）／最大30万円（夫婦とも39歳以下）</td><td className={td}>夫婦の合計所得金額500万円未満、夫婦とも市に住民登録など</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              加古川市の公式サイトの「婚活支援」に掲載されている記事は、2026年11月24日時点で婚活支援補助金の1件です。当サイトでは同日時点で、東播磨県民局や加古川市社会福祉協議会が加古川市民向けに結婚相談・お見合い事業を行っているという公式の案内も確認できませんでした。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={KONKATSU_INDEX_URL} {...ext}>加古川市「婚活支援」</a>・<a href={HOJO_URL} {...ext}>「令和8年度 婚活支援補助金のお知らせ」（2026年4月8日更新）</a>・<a href={SHINSEIKATSU_URL} {...ext}>「令和8年度結婚新生活支援補助金（最大60万円）のお知らせ」（2026年8月10日更新）</a>・<a href={KOHO_202512_URL} {...ext}>「広報かこがわ 2025年12月号」</a>・<a href={HABATAN_TOP_URL} {...ext}>ひょうご出会いサポートセンター「はばタン会員TOP」</a>・<a href={HABATAN_FAQ_URL} {...ext}>「よくあるご質問」</a>（いずれも2026年11月24日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">婚活支援補助金（ひょうご出会いサポートセンターの登録料補助）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容（令和8年度）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>補助の対象</td><td className={td}>はばタン会員の登録日または更新日が2026年4月1日〜2027年3月31日の登録手数料・更新手数料</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>補助金額</td><td className={td}>5,000円（年1回申請可。令和7年度に申請した方も令和8年度分として再申請可）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象者</td><td className={td}>申請時点で、加古川市に住民登録がある／20歳以上39歳以下で独身／市税の滞納がない／暴力団員でない、のすべてを満たす方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申請期間</td><td className={td}>2026年6月1日〜2027年3月31日（先着順。予算額に達した時点で受付終了）。年間更新料を支払った後に申請</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申請方法</td><td className={td}>かこがわオンライン申請システム</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>問い合わせ</td><td className={td}>こども政策課（市役所本館1階）079-427-9397</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              この補助金は、2024年6月1日に受付を始めた制度です。市長の定例記者会見（2024年5月23日）では、初年度の予算は95人分・47万5,000円と説明されています。センターが公表している令和8年度の登録料補助自治体は、姫路市・加古川市・西脇市・多可町・宍粟市・養父市・高砂市・上郡町・神河町の9市町です。このうち更新料も補助の対象としているのは、姫路市（ポイント給付）・加古川市・西脇市・高砂市の4市です（当サイトで同お知らせから集計）。
            </p>
            <p>
              補助は登録料の支払い後に申請する方式のため、まずセンターに入会し、手数料を支払ってから市に申請します。センターの入会には、独身証明書または戸籍抄（謄）本（3か月以内）と写真付き身分証明書が必要です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={HOJO_URL} {...ext}>加古川市「令和8年度 婚活支援補助金のお知らせ」（2026年4月8日更新）</a>・<a href={PRESS_R6_URL} {...ext}>「定例記者会見（令和6年5月23日）」</a>・<a href={HABATAN_SUBSIDY_URL} {...ext}>ひょうご出会いサポートセンター お知らせ「令和8年度 はばタン会員登録料 補助金のお知らせ」（2026年8月24日）</a>・<a href={HABATAN_FAQ_URL} {...ext}>「よくあるご質問」</a>（いずれも2026年11月24日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">ひょうご出会いサポートセンターの概要と東播磨での出張登録会</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              センターは、兵庫県が設置している結婚支援の窓口です。はばタン会員に登録すると、自宅のスマートフォンからお相手を検索してお見合いを申し込み、お見合いは対面またはオンライン（Zoom）で行います。登録手数料は年5,000円で、お見合い・成婚の際の費用はかかりません。センターの公表値では、令和7年度実績のはばタン会員登録者は3,351人（男性1,920人・女性1,431人）、累積成婚数は2,300組（イベント等による成婚を含む）です。料金・活動の流れの詳細は、当サイトの<Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンターの解説</Link>をご覧ください。
            </p>
            <p>
              連絡先は電話（050-1790-2805）とメールで、営業時間は月曜・木曜・金曜が12時30分〜19時30分、土曜・日曜が10時〜17時です（火曜・水曜・祝日・年末年始は休み）。当サイトでは、2026年11月24日時点で東播磨地域に常設の窓口があるという案内を確認できませんでした。入会後の登録面談はオンラインで受けられるほか、各地の出張登録会に参加すると面談が不要になります。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日</th><th className={th}>場所</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>2026年6月20日（土・終了）</td><td className={td}>明石市（ウィズあかし）</td><td className={td}>出張登録会・相談会</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>2026年9月12日（土・終了）</td><td className={td}>播磨町（中央公民館）</td><td className={td}>出張登録会・会員向け相談会</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>2026年11月7日（土・終了）</td><td className={td}>高砂市（市役所分庁舎）</td><td className={td}>入会前相談会（家族のみの参加も可）・出張登録会</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              2026年度に東播磨地域で開かれたセンターの出張登録会は上表の3回で、加古川市内での開催は2026年11月24日時点で掲載されていません。2025年度は、加古川市内で2025年6月7日（加古川市民交流ひろば）と2026年1月18日（加古川総合文化センター・市の出会いイベントと同日）に開かれました。今後の日程は、センターのイベント情報と公式LINEで案内されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={HABATAN_TOP_URL} {...ext}>ひょうご出会いサポートセンター「はばタン会員TOP」</a>・<a href={HABATAN_FAQ_URL} {...ext}>「よくあるご質問」</a>・<a href={HABATAN_EAST_URL} {...ext}>イベント情報（東播磨）</a>・<a href={PREF_DEAI_URL} {...ext}>兵庫県「ひょうご出会いサポートセンター」</a>・<a href={PREF_HARIMA_URL} {...ext}>兵庫県 記者発表「出張登録会・相談会を播磨町で開催します！」（2026年8月24日）</a>・<a href={PREF_TAKASAGO_URL} {...ext}>兵庫県 記者発表「入会前相談会・出張登録会を高砂市で開催します！」（2026年10月19日）</a>（いずれも2026年11月24日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">加古川市内で開かれた婚活イベント・登録会（2025〜2026年度・当サイト集計）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              ひょうご出会いサポートセンターのイベント情報（東播磨）に掲載されたもののうち、加古川市内を会場とする婚活イベントと登録会を、当サイトで1件ずつ確認して整理しました。2025年度は{fy2025}件（同日開催の市のイベントと登録相談会は1件として数えています）、2026年度は11月24日時点で{fy2026}件です。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日</th><th className={th}>名称</th><th className={th}>主催</th><th className={th}>対象・定員・参加費</th></tr></thead>
                <tbody>
                  {cityEvents.map((e) => (
                    <tr key={e.date + e.name} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{e.date}</td>
                      <td className={td}><a href={e.href} {...ext}>{e.name}</a></td>
                      <td className={td}>{e.host}</td>
                      <td className={td}>{e.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              加古川市内では、市立日岡山体育館がスポーツやボードゲームを取り入れた少人数の婚活イベントを年2〜3回開いており、上表の{cityEvents.length}件のうち5件を占めます。定員は男女各3〜10名で、参加費は1,500円〜2,500円です。市（こども政策課）が主催した出会いイベントは、2026年1月18日の「うどん作りで婚活しよう」で、参加費は無料でした。2026年度の市主催イベントは、11月24日時点で市の公式サイトとセンターのイベント情報に掲載されていません。
            </p>
            <p>
              近隣では、2025年5月17日に高砂市・加古川市・播磨町・稲美町の4市町が合同で婚活イベントを開いており（会場は高砂市役所分庁舎・参加無料）、稲美町でも2026年6月13日に商工会主催の婚活イベントが開かれました。2026年12月5日のイベントは定員が男女各3名と少ないため、申込み前に主催者のページで募集状況をご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={HABATAN_EAST_URL} {...ext}>ひょうご出会いサポートセンター イベント情報（東播磨）</a>と上表の各ページ・<a href={KOHO_202512_URL} {...ext}>加古川市「広報かこがわ 2025年12月号」</a>（いずれも2026年11月24日確認）。件数・割合は当サイトが掲載ページから数えたもので、センターに掲載されていない催しは含まれません。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚新生活支援補助金（最大60万円）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容（令和8年度）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>補助金額</td><td className={td}>夫婦とも29歳以下（婚姻日時点）：最大60万円／それ以外で夫婦とも39歳以下：最大30万円（1,000円未満切り捨て）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象費用</td><td className={td}>2026年4月1日〜2027年3月31日に夫婦が支払った、住宅取得費用（建物部分のみ）・住宅賃借費用（賃料・共益費は1か月分）・リフォーム費用・引越費用（運送業許可のある事業者への支払い）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>主な要件</td><td className={td}>2026年1月1日〜2027年3月31日に婚姻届が受理／申請時に夫婦とも市に住民登録／2025年の夫婦の合計所得金額が500万円未満（貸与型奨学金の返済額は控除可）／市に2年以上居住する意思がある、など</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申請期間・方法</td><td className={td}>2026年6月1日〜2027年3月31日（必着・先着順）。こども政策課（市役所本館1階）へ持参または郵送</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              市の令和8年度の実施計画書では、この補助金の申請見込みを108世帯（うち夫婦とも29歳以下が70世帯）、総事業費を26,999,000円としています。前年度（令和7年度）は12月までの実績が33世帯で、年度全体の見込みは100世帯でした。令和6年度は、支給見込世帯数に対する支給実績の割合が87.6%です。同計画書には、加古川市の婚姻件数が948件（令和5年度）と記載されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SHINSEIKATSU_URL} {...ext}>加古川市「令和8年度結婚新生活支援補助金（最大60万円）のお知らせ」（2026年8月10日更新）</a>・<a href={YOUKEN_PDF_URL} {...ext}>「令和8年度 補助対象要件チェックシート」（PDF）</a>・<a href={JISSHI_PDF_URL} {...ext}>「令和8年度地域少子化対策重点推進交付金実施計画書」（PDF）</a>（いずれも2026年11月24日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な支援と民間の結婚相談所の費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>お相手の探し方</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンター（はばタン会員）</Link>・加古川市民で20〜39歳</td><td className={td}>5,000円/年を市が補助（実質0円）</td><td className={td}>会員自身の検索・AIによる紹介</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>同・40歳以上の加古川市民</td><td className={td}>5,000円/年（自己負担）</td><td className={td}>同上</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>市内の婚活イベント（市立体育館など）</td><td className={td}>1回あたり無料〜4,000円（2025〜2026年度の掲載分）</td><td className={td}>イベントでのマッチング</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              20〜39歳の加古川市民は、市の補助を使うと県のセンターを自己負担なしで利用でき、費用面では民間の結婚相談所より大幅に低く抑えられます。一方で、センターは会員自身が検索して申し込む仕組みが中心で、担当者による継続的な紹介や交際中の助言を受けたい方には、民間の結婚相談所が選択肢になります。加古川駅から通いやすい神戸方面の結婚相談所や、自宅から活動できるオンライン型と比べて検討するのが目安です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。神戸・兵庫の結婚相談所は<Link href="/area/kobe/" className="underline">神戸の結婚相談所</Link>で整理しています。公的な支援の料金は、各公式サイトで2026年11月24日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/miki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">三木市の婚活（みきで愛サポートセンター）</Link>
            <Link href="/knowledge/40s/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">42歳・40代の婚活の現状</Link>
            <Link href="/area/kobe/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">神戸・兵庫の結婚相談所</Link>
            <Link href="/knowledge/hyogo-deai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ひょうご出会いサポートセンター（兵庫県）</Link>
            <Link href="/knowledge/toyooka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">豊岡市の婚活（omiai事業・Hapimari）</Link>
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
