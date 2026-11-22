import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-22 確認）。
// ・センターの開設日（平成28年1月12日）・委託先（一般社団法人高知県法人会連合会）・高知センターの所在地と電話・開設時間：こうち出会いサポートセンター公式トップ
// ・お引合せ成立数3,852件・交際成立数1,672組・成婚数149組（令和8年10月末時点・累計）、2年コース10,000円・半年コース3,000円（20代30代限定）、対面のお引合せ2,000円/人：同「高知で恋しよ!!マッチング」トップ
// ・必要書類、オンライン登録とセンター来所登録の流れ、退会時に返金なし、自宅閲覧45分、申込み1日1回1人・回答期限3日、お引合せ費用の内訳（茶菓子代1,000円・サポーター交通費1,000円）と当日キャンセル料2,000円、お友だち交際（最大3人・60日間）、真剣交際、成婚記念品：同「入会申込について」
// ・会員登録ができる方（県内在住、または県外在住で高知県への移住を希望する20歳以上の独身男女）、おためし会員（1か月・無料）、半年コースは39歳以下のみ選択可、登録期間：同「マッチング会員利用規約」（PDF・2026年9月15日作成）
// ・休会しても登録期間は延長されない、登録料の返金なし、結婚相談所によるプロフィール見直し（有料2,000円）、公開項目：同「登録に関する特記事項」
// ・高知センター・安芸センターの開設日・時間、駐車場の無料券：同「会場案内」。四万十センターは公式トップのHTML上でコメントアウトされており、会場案内にも掲載がないため記載していない
// ・オンライン本人確認、オンラインお引合せ（Zoom・センターが立会い）：同「よくあるご質問」
// ・お友だち交際制度（令和8年10月1日開始）：同お知らせ「【10/1～】お友だち交際制度スタート！」（2026年9月10日）
// ・半年コースの新設：同お知らせ「【高知で恋しよ!!マッチング】『半年コース（20～30代限定）』ご紹介♪」
// ・民間結婚相談所会員との相互マッチング（令和6年10月1日開始・こうち結婚推進協会）：同お知らせ「【令和6年10月1日開始】民間結婚相談所会員との相互マッチングについて」と掲載画像
// ・登録料の助成を行う市町村（21市町村）：同お知らせ「マッチングサイト入会登録料の助成について」。21市町村は当サイトが数えた値で、同「出張登録閲覧会」のお知らせ（2026年11月5日）の「県内21市町村」と一致
// ・出張登録閲覧会・スペシャル登録会の日程：同お知らせ（2026年11月5日）
// ・イベントの令和7年度平均マッチング率33％：同お知らせ「【11月・12月】イベント情報♪（R7マッチング率33％）」（2026年11月19日）
// ・イベントユーザー登録は無料：同「高知で恋しよ!!イベント」トップ
// ・婚活サポーターの実績（R7.3.31時点）と費用負担：同「婚活サポーター」
// ・高知県婚活交通費等助成制度（令和8年度）：同「令和８年度 高知県婚活交通費等助成制度」。移住婚サポート：同「移住婚サポート (交通費助成あり)」
// ・マイナンバーカードでの独身確認の再開（2026年11月6日）：同お知らせ
// ・安芸市の補助（10,000円）と同市ページ記載の成婚数143組（令和8年3月末時点）・会員数700名以上：安芸市「『高知で恋しよ！！マッチング』入会登録料補助のご案内について」（2026年4月27日）
// ・香南市の補助（令和7〜9年度・上限10,000円・イベントまたはマッチングに1回以上参加が条件）：香南市「こうち出会いサポートシステム入会登録料補助金のご案内」（2026年3月2日更新）
// ・香美市の若者出逢い応援事業（20〜39歳・費用の半額相当のkamicaマネー・上限3万円分）：香美市「若者出逢い応援事業」（2026年4月1日更新）
// ・土佐清水市・黒潮町・佐川町の補助：各市町の公式ページ
// ・高知市結婚新生活支援事業補助金（令和8年度・最大30万円、同居・近居45万円）：高知市チラシ（PDF）
// ・香川県・岡山県・栃木県のセンターの料金：当サイト /knowledge/takamatsu/・/knowledge/okayama/・/knowledge/tochigi/ の確認内容
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値
// ※事業の停止・休止のお知らせは、2026年11月22日時点のセンターのお知らせ欄に掲載されていない（マイナンバーカードでの独身確認は一時停止後、2026年11月6日に再開）。

const TOP_URL = "https://www.koishiyo.pref.kochi.lg.jp/";
const MATCHING_URL = "https://www.koishiyo.pref.kochi.lg.jp/matching/index.php";
const ENTRY_URL = "https://www.koishiyo.pref.kochi.lg.jp/matching/entry/index.php";
const FAQ_URL = "https://www.koishiyo.pref.kochi.lg.jp/matching/faq.php";
const ACCESS_URL = "https://www.koishiyo.pref.kochi.lg.jp/matching/access.php";
const REMARKS_URL = "https://www.koishiyo.pref.kochi.lg.jp/matching/remarks.php";
const KIYAKU_URL = "https://www.koishiyo.pref.kochi.lg.jp/matching/pdf/kaiinkiyaku.pdf";
const HALF_URL = "https://www.koishiyo.pref.kochi.lg.jp/archive/%e3%80%90%e9%ab%98%e7%9f%a5%e3%81%a7%e6%81%8b%e3%81%97%e3%82%88%e3%83%9e%e3%83%83%e3%83%81%e3%83%b3%e3%82%b0%e3%80%91%e3%80%8c%e5%8d%8a%e5%b9%b4%e3%82%b3%e3%83%bc%e3%82%b9%ef%bc%8820%ef%bd%9e30/";
const FRIEND_URL = "https://www.koishiyo.pref.kochi.lg.jp/archive/%e3%80%9010-1%ef%bd%9e%e3%80%91%e3%81%8a%e5%8f%8b%e3%81%a0%e3%81%a1%e4%ba%a4%e9%9a%9b%e5%88%b6%e5%ba%a6%e3%82%b9%e3%82%bf%e3%83%bc%e3%83%88%ef%bc%81/";
const SOGO_URL = "https://www.koishiyo.pref.kochi.lg.jp/archive/%e3%80%90%e4%bb%a4%e5%92%8c6%e5%b9%b410%e6%9c%881%e6%97%a5%e9%96%8b%e5%a7%8b%e3%80%91%e6%b0%91%e9%96%93%e7%b5%90%e5%a9%9a%e7%9b%b8%e8%ab%87%e6%89%80%e4%bc%9a%e5%93%a1%e3%81%a8%e3%81%ae%e7%9b%b8/";
const JOSEI_URL = "https://www.koishiyo.pref.kochi.lg.jp/archive/%E5%85%A5%E4%BC%9A%E7%99%BB%E9%8C%B2%E6%96%99%E3%81%AE%E5%8A%A9%E6%88%90%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/";
const SHUCCHO_URL = "https://www.koishiyo.pref.kochi.lg.jp/archive/%e3%80%9011%e6%9c%88%e3%83%bb12%e6%9c%88%e3%80%91%e3%80%8c%e9%ab%98%e7%9f%a5%e3%81%a7%e6%81%8b%e3%81%97%e3%82%88%e3%83%9e%e3%83%83%e3%83%81%e3%83%b3%e3%82%b0%e3%80%8d%e5%87%ba%e5%bc%b5%e7%99%bb/";
const EVENT_NEWS_URL = "https://www.koishiyo.pref.kochi.lg.jp/archive/%e3%80%9011%e6%9c%88%e3%83%bb12%e6%9c%88%e3%80%91%e3%82%a4%e3%83%99%e3%83%b3%e3%83%88%e6%83%85%e5%a0%b1%e2%99%aa%ef%bc%88r7%e3%83%9e%e3%83%83%e3%83%81%e3%83%b3%e3%82%b0%e7%8e%8733%ef%bc%85%ef%bc%89/";
const EVENT_URL = "https://www.koishiyo.pref.kochi.lg.jp/event/index.php";
const KONSAPO_URL = "https://www.koishiyo.pref.kochi.lg.jp/konsapo/";
const KOTSUHI_URL = "https://www.koishiyo.pref.kochi.lg.jp/archive/%E9%AB%98%E7%9F%A5%E7%9C%8C%E5%A9%9A%E6%B4%BB%E4%BA%A4%E9%80%9A%E8%B2%BB%E7%AD%89%E5%8A%A9%E6%88%90%E5%88%B6%E5%BA%A6/";
const IJU_URL = "https://www.koishiyo.pref.kochi.lg.jp/archive/%E3%80%90%E7%A7%BB%E4%BD%8F%E5%A9%9A%E3%80%91%E3%81%B8%E3%81%AE%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E9%96%8B%E5%A7%8B%EF%BC%88%E9%AB%98%E7%9F%A5%E7%9C%8C%EF%BC%89/";
const AKI_URL = "https://www.city.aki.kochi.jp/life/dtl.php?hdnKey=7464";
const KONAN_URL = "https://www.city.kochi-konan.lg.jp/soshikikarasagasu/chiikishienka/shiminkatsudo_community_kyodo/2/11468.html";
const KAMI_URL = "https://www.city.kami.lg.jp/soshiki/4/deaiouen.html";
const TOSASHIMIZU_URL = "https://www.city.tosashimizu.kochi.jp/kurashi/section/kikaku/13963.html";
const KUROSHIO_URL = "https://www.town.kuroshio.lg.jp/pb/previewid/47106";
const SAKAWA_URL = "https://www.town.sakawa.lg.jp/life/dtl.php?hdnKey=1875";
const KOCHI_CITY_SHINSEIKATSU_URL = "https://www.city.kochi.kochi.jp/uploaded/attachment/179773.pdf";

const fee2y = 10000;
const feeHalf = 3000;
const hikiawase = 2000;
const results = { hikiawase: 3852, kousai: 1672, seikon: 149 };

const joseiTowns = [
  "安芸市", "いの町", "馬路村", "大川村", "越知町", "香美市", "北川村", "黒潮町", "芸西村", "香南市", "佐川町",
  "東洋町", "土佐市", "土佐町", "土佐清水市", "奈半利町", "仁淀川町", "日高村", "三原村", "本山町", "安田町",
];

const muniDetails = [
  { name: "安芸市", detail: "10,000円（キャンペーン時は実際に支払った額）。市に住民票があり、市税等の滞納がなく、過去にこの補助を受けていない会員本人が対象", url: AKI_URL, label: "安芸市「『高知で恋しよ！！マッチング』入会登録料補助のご案内について」" },
  { name: "香南市", detail: "上限10,000円（上限に達するまで繰り返し申請可）。令和7年度〜令和9年度の3年間。令和7年4月1日以後に初めて登録・再登録し、登録後にイベントまたはマッチングに1回以上参加した市民が対象", url: KONAN_URL, label: "香南市「こうち出会いサポートシステム入会登録料補助金のご案内」" },
  { name: "土佐清水市", detail: "入会登録料（10,000円。キャンペーン時は実際に支払った額）。会員登録証の有効期間開始日から半年以内に申請。令和8年度の申請期限は令和9年3月31日", url: TOSASHIMIZU_URL, label: "土佐清水市「令和８年度 出会い結婚支援事業費補助金のお知らせ」" },
  { name: "黒潮町", detail: "上限10,000円（実際に支払った登録料）。令和7年4月1日以降に初めて登録した町民が対象", url: KUROSHIO_URL, label: "黒潮町「『こうち出会いサポートシステム入会登録料補助金』のご案内」" },
  { name: "佐川町", detail: "支払った入会登録料と同額。令和8年4月1日以降に初めて登録・再登録した町民が対象（過去に受給した方を除く）。申請は令和9年3月31日まで、予算に達した時点で終了", url: SAKAWA_URL, label: "佐川町「佐川町出会い結婚支援事業費補助金のご案内」" },
  { name: "香美市", detail: "「若者出逢い応援事業」として、20〜39歳の独身の市民に、申請年度内に支払った費用の半額相当のkamicaマネー（上限3万円分）を付与。対象は「高知で恋しよ!!マッチング」のほか、県内に営業所がある結婚相談所、認証を受けたインターネットマッチングサービス", url: KAMI_URL, label: "香美市「若者出逢い応援事業」" },
];

export const metadata: Metadata = {
  title: "高知県で結婚相談所を探す方へ｜こうち出会いサポートセンターは2年10,000円・20〜30代は半年3,000円、21市町村の登録料補助、成婚149組と民間との費用比較",
  description:
    "高知県の「こうち出会いサポートセンター」のマッチングは2年コース10,000円、20代・30代限定の半年コース3,000円で、対面のお引合せは1人2,000円です。入会条件と必要書類、高知・安芸の拠点、成婚149組などの実績、登録料を補助する21市町村、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/kochi/" },
};

const faqs = [
  {
    q: "こうち出会いサポートセンターの料金はいくらですか？",
    a: "「高知で恋しよ!!マッチング」の入会登録料は、2年コースが10,000円、20代・30代限定の半年コースが3,000円です（半年コースは39歳以下の方のみ選択可）。対面のお引合せでは、1人2,000円（茶菓子代1,000円、マッチングサポーターの交通費1,000円）をサポーターに渡します。登録料は退会理由にかかわらず返金されず、休会しても登録期間は延長されません（センター公式「入会申込について」「登録に関する特記事項」）。",
  },
  {
    q: "高知市に住んでいると、登録料の補助はありますか？",
    a: "センターの「マッチングサイト入会登録料の助成について」に掲載されている21市町村に、高知市は含まれていません（2026年11月22日確認）。高知市では、婚姻後の新生活を支援する「高知市結婚新生活支援事業補助金」（令和8年度、最大30万円、親世帯と同居・近居の場合は45万円、夫婦ともに39歳以下などの要件あり）が実施されています。",
  },
  {
    q: "高知県外に住んでいても登録できますか？",
    a: "マッチング会員利用規約では、会員登録ができるのは高知県内にお住まいの方、または県外在住で高知県への移住を希望される方で、結婚を誠実に希望し、自ら努力する20歳以上の独身男女とされています。県外在住の方の情報は、高知県UIターンサポートセンターと共有される場合があります。県外から婚活で来県した際の交通費・宿泊費の一部を助成する「高知県婚活交通費等助成制度」もあります。",
  },
  {
    q: "センターに行かなくても登録やお相手探しはできますか？",
    a: "できます。入会申込後に、オンラインで本人確認を行って登録する方法と、予約してセンターに来所して登録する方法を選べます。お相手の検索・閲覧は自宅のパソコンやスマートフォンからも可能で、自宅閲覧は1日のうち45分間です。お引合せは対面（マッチングサポーターが立会い）とオンライン（Zoom・センターが立会い）から選べます。",
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
  headline: "高知県で結婚相談所を探す方へ：こうち出会いサポートセンターの料金・入会条件と、市町村の登録料補助、民間の結婚相談所との比較",
  description: "高知県の「こうち出会いサポートセンター」（高知で恋しよ!!マッチング）の料金・入会条件・必要書類・拠点・実績・お引合せの流れ、登録料を補助する市町村、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-22",
  dateModified: "2026-11-22",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/kochi/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "高知県の結婚支援（こうち出会いサポートセンター）", item: "https://mu-su-bi-ba.com/knowledge/kochi/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeKochi() {
  const perYear2y = fee2y / 2;
  const halfForYear = feeHalf * 2;
  const seikonRate = ((results.seikon / results.kousai) * 100).toFixed(1);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "高知県の結婚支援（こうち出会いサポートセンター）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          高知県で結婚相談所を探す方へ：こうち出会いサポートセンターの料金・入会条件と、市町村の登録料補助、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月22日（料金・入会条件・拠点・実績・市町村の補助は同日にこうち出会いサポートセンター公式サイトと各市町の公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />高知県の「こうち出会いサポートセンター」は、2年10,000円（20〜30代は半年3,000円）で利用できます
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>「こうち出会いサポートセンター」は、高知県が平成28年1月12日に開設した結婚支援の窓口です（委託先：一般社団法人高知県法人会連合会）。1対1の出会いを支援するマッチングサイト<strong>「高知で恋しよ!!マッチング」</strong>と、出会いイベントの「高知で恋しよ!!イベント」を運営しています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>マッチングの入会登録料は<strong>2年コース{fee2y.toLocaleString()}円</strong>（1年あたり換算{perYear2y.toLocaleString()}円・当サイト算出）、<strong>20代・30代限定の半年コース{feeHalf.toLocaleString()}円</strong>です。対面のお引合せでは<strong>1人{hikiawase.toLocaleString()}円</strong>をマッチングサポーターに渡します。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>公式の実績は、令和8年10月末時点の累計で<strong>お引合せ成立{results.hikiawase.toLocaleString()}件・交際成立{results.kousai.toLocaleString()}組・成婚{results.seikon}組</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>入会登録料を助成する市町村は、センターの一覧で<strong>{joseiTowns.length}市町村</strong>です（当サイトが数えた値）。<strong>高知市は一覧に含まれていません</strong>。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">こうち出会いサポートセンターの料金と入会条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>高知県（委託先：一般社団法人高知県法人会連合会）。平成28年1月12日開設</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会登録料</td><td className={td}>2年コース：10,000円（2年間）／半年コース：3,000円（6か月・20代30代限定。39歳以下の方のみ選択可）／おためし会員：無料（1か月）。口座振込またはセンターへ持参。振込手数料は利用者負担</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>おためし会員の条件</td><td className={td}>本会員と同じ条件を満たし、かつ高知家の出会い・結婚・子育て応援団または県が開催するイベントに参加した方で、初めて「高知で恋しよ!!マッチング」に登録する方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お引合せの費用</td><td className={td}>対面：1人2,000円（茶菓子代1,000円、サポーター交通費1,000円）をサポーターに渡す。当日キャンセルの場合は、次回の閲覧来所時にキャンセル料2,000円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>返金・休会</td><td className={td}>登録料は退会理由にかかわらず返金なし（一度も閲覧やお引合せを利用しなくても返金なし）。休会はできるが登録期間は延長されない。登録期間が終わると自動的に退会</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会員になれる方</td><td className={td}>高知県内にお住まいの方、または県外在住で高知県への移住を希望される方で、結婚を誠実に希望し、自ら努力する20歳以上の独身男女。パソコンかスマートフォンでサイトを操作でき、センターからの身元確認や連絡に応対できること</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>独身証明書の原本（本籍地の市町村長が発行・3か月以内。戸籍抄本でも可。マイナンバーカードでオンラインの独身確認を行う場合は不要）、写真付き身分証の原本（運転免許証または個人番号カード）、写真（オンライン登録は本人確認時に撮影、来所登録はL判程度1〜2枚）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録の流れ</td><td className={td}>メールアドレスを登録して入会申込 → オンライン登録（本人確認書類と顔をスマートフォン等で撮影）か、予約してセンターで登録するかを選択 → 登録内容の確認と入金確認後にID・パスワードを発行し、マイページに電子会員登録証を表示</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              半年コースで1年間続ける場合は、登録を2回行うため登録料は計{halfForYear.toLocaleString()}円となり、2年コースの1年あたり換算額（{perYear2y.toLocaleString()}円）を上回ります（当サイト算出。2回目の登録時にも39歳以下であることが条件です）。1年以上続ける見込みがある場合は2年コース、まず短期間試したい20代・30代の方は半年コースという選び方になります。
            </p>
            <p>
              県外在住で移住を希望する方の情報は、高知県UIターンサポートセンターと共有される場合があります。なお、マイナンバーカードでの独身確認は一時停止されていましたが、2026年11月6日に再開されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TOP_URL} {...ext}>こうち出会いサポートセンター公式トップ</a>・<a href={MATCHING_URL} {...ext}>「高知で恋しよ!!マッチング」</a>・<a href={ENTRY_URL} {...ext}>「入会申込について」</a>・<a href={KIYAKU_URL} {...ext}>「マッチング会員利用規約」（PDF）</a>・<a href={REMARKS_URL} {...ext}>「登録に関する特記事項」</a>・<a href={FAQ_URL} {...ext}>「よくあるご質問」</a>・<a href={HALF_URL} {...ext}>お知らせ「半年コース（20～30代限定）ご紹介」</a>（いずれも2026年11月22日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">お引合せまでの流れと成婚実績</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>お相手のプロフィールを検索・閲覧する。センターでは1回最長45分、自宅のパソコンやスマートフォンでは1日のうち45分間利用できる</li>
              <li>お引合せを申し込む。申込みは1日1回1人までで、お相手の回答期限は当日を含めて最長3日間。承諾が得られるとお引合せ成立となる</li>
              <li>お引合せは、対面（高知家の出会い・結婚・子育て応援団の店舗で、マッチングサポーターが立会い）かオンライン（Zoom、センターが立会い）を選ぶ</li>
              <li>お引合せから4日以内に、お友だち交際に進むかどうかをマイページで回答する。お友だち交際は同時に3人まで、各60日間で、マイページのチャットでやり取りする（氏名・連絡先の交換は不可）</li>
              <li>双方が真剣交際を承諾すると、センターから氏名と連絡先が伝えられる。真剣交際の相手は1人のみで、サポーター（オンラインの場合はセンター）が交際を支援する</li>
              <li>結婚が決まると、成婚記念品（カタログギフト）と高知県知事からのお祝いメッセージが贈られ、センターが退会手続きを行う</li>
            </ol>
            <p>
              お友だち交際の仕組みは、令和8年10月1日から導入されました。それ以前は、申込みから成婚までの間はお相手の検索や新たな申込みができない仕組みでした。現在は、お引合せ成立からお友だち交際までの人数が合計3人になるまで、検索・申込みを続けられます。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>実績の項目</th><th className={th}>公表値</th><th className={th}>時点・出典</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お引合せ成立数</td><td className={td}>{results.hikiawase.toLocaleString()}件</td><td className={td}>令和8年10月末時点（累計）・マッチングサイト</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>交際成立数</td><td className={td}>{results.kousai.toLocaleString()}組</td><td className={td}>同上</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>成婚数</td><td className={td}>{results.seikon}組</td><td className={td}>同上</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>参考：令和7年3月末時点</td><td className={td}>お引合せ3,268件・交際1,416組・成婚124組</td><td className={td}>累計・センターのお知らせ（半年コースの紹介）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会員数</td><td className={td}>700名以上</td><td className={td}>安芸市の補助案内ページの記載（2026年4月27日掲載）。センター公式サイトでは会員数の記載を確認できませんでした</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              累計の成婚数を交際成立数で割ると約{seikonRate}％です（当サイト算出）。交際中の方や成婚報告をしていない方も分母に含まれるため、成婚の確率を示す値ではありません。民間の結婚相談所が公表する成婚率とは定義が異なるため、単純な比較はできない点にご注意ください。
            </p>
            <p>
              このほか、令和6年10月1日からは、相互マッチングに同意した会員を対象に、県と協定を結んだ「こうち結婚推進協会」所属の民間結婚相談所の会員からお引合せの申込みを受けられる仕組みが始まっています（会員側から民間相談所の会員へは申し込めません。お引合せ当日は民間相談所の職員が立ち会い、お引合せ費用2,000円を支払います）。令和7年7月1日からは、希望者が有料（2,000円）で結婚相談所にプロフィールの見直しを依頼できるサービスも始まっています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MATCHING_URL} {...ext}>「高知で恋しよ!!マッチング」</a>・<a href={ENTRY_URL} {...ext}>「入会申込について」</a>・<a href={FAQ_URL} {...ext}>「よくあるご質問」</a>・<a href={FRIEND_URL} {...ext}>お知らせ「【10/1～】お友だち交際制度スタート！」</a>・<a href={HALF_URL} {...ext}>お知らせ「半年コース（20～30代限定）ご紹介」</a>・<a href={SOGO_URL} {...ext}>お知らせ「民間結婚相談所会員との相互マッチングについて」</a>・<a href={REMARKS_URL} {...ext}>「登録に関する特記事項」</a>・<a href={AKI_URL} {...ext}>安芸市「入会登録料補助のご案内」</a>（いずれも2026年11月22日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">拠点の所在地と開設時間、出張登録会</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>拠点</th><th className={th}>所在地・電話</th><th className={th}>開設時間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>高知センター</td><td className={td}>高知市駅前町5番5号 大同生命高知ビル2階（高知駅前から徒歩1分）／088-821-8081</td><td className={td}>日・月 10:00〜17:00、火・水・木 13:00〜20:00（金・土・祝日は休み）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>安芸センター</td><td className={td}>会場は予約ごとに決定し個別に連絡。電話予約は高知センター（088-821-8081）</td><td className={td}>毎週日曜日 10:00〜17:00（最終予約16:00）。祝日は閉所。来所希望日の1週間前までに予約が必要で、予約がない場合は閉所</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              センターへの来所には、「高知で恋しよ!!マッチング」からの事前予約が必要です。高知センターへ来所するためにパークダイセイに駐車した場合は、1時間相当（100円券3枚）を上限に無料券が渡されます。
            </p>
            <p>
              センターは、県内の市町村での出張登録閲覧会と、プロによるヘアメイクと写真撮影が無料で付くスペシャル登録会も開催しています（いずれも事前予約制、費用は登録料のみ）。2026年12月は、安芸市（12月10日）、香美市（12月17日）、須崎市（12月23日）で出張登録閲覧会、香南市（12月6日）でスペシャル登録会が予定されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={ACCESS_URL} {...ext}>こうち出会いサポートセンター「会場案内」</a>・<a href={TOP_URL} {...ext}>公式トップ</a>・<a href={SHUCCHO_URL} {...ext}>お知らせ「【11月・12月】出張登録閲覧会&スペシャル登録会開催！」（2026年11月5日）</a>（いずれも2026年11月22日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">イベント・婚活サポーター・県外からの婚活への助成</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>制度</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>高知で恋しよ!!イベント</td><td className={td}>ユーザー登録は無料。出会いパーティー・体験ワークショップ・セミナーなどを掲載。令和7年度の平均マッチング率は33％（センターのお知らせ）。参加費はイベントごとに異なる</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>婚活サポーター</td><td className={td}>県の養成講座を受講したボランティアが、本人の希望を聞いてお相手探しとお引き合わせを行う（成婚までの世話は行わない）。サポート期間は原則6か月。飲食費、サポーターの交通費相当分（1人1,000円）などは自己負担。実績（R7.3.31時点）：相談13,980件（問い合わせ等を含む）・引き合わせ7,055件・成婚163件・登録サポーター83名</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>高知県婚活交通費等助成制度（令和8年度）</td><td className={td}>高知県へのU・Iターンを検討している独身の方が、マッチングのお引き合わせやイベント参加などで来県した際の往復交通費の半額相当（上限：北海道・東北・沖縄32,000円、関東・中部25,000円、近畿・九州15,000円、中国・四国5,000円）と宿泊費（1泊3,000円まで）を助成。対象期間は令和8年4月1日〜令和9年3月10日、申請回数の制限なし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>移住婚サポート</td><td className={td}>日本婚活支援協会や高知県UIターンサポートセンター等と連携し、県外在住の独身者のお引き合わせ・イベント参加と移住の情報提供を一体的に支援。窓口への登録は無料</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={EVENT_URL} {...ext}>「高知で恋しよ!!イベント」</a>・<a href={EVENT_NEWS_URL} {...ext}>お知らせ「【11月・12月】イベント情報♪（R7マッチング率33％）」</a>・<a href={KONSAPO_URL} {...ext}>「婚活サポーター」</a>・<a href={KOTSUHI_URL} {...ext}>「令和８年度 高知県婚活交通費等助成制度」</a>・<a href={IJU_URL} {...ext}>「移住婚サポート (交通費助成あり)」</a>（いずれも2026年11月22日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">登録料を補助している市町村（{joseiTowns.length}市町村）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              センターのお知らせ「マッチングサイト入会登録料の助成について」に掲載されている市町村は次の{joseiTowns.length}市町村です（当サイトが数えた値。五十音順）。高知市・南国市・四万十市などは掲載されていません。補助の金額や条件は市町村ごとに異なるため、詳細はお住まいの市町村の窓口でご確認ください。
            </p>
            <p className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-4">{joseiTowns.join("・")}</p>
            <p>当サイトが各市町の公式ページで内容を確認できた制度は次のとおりです。</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>市町</th><th className={th}>補助の内容</th></tr></thead>
                <tbody>
                  {muniDetails.map((m) => (
                    <tr key={m.name} className="border-t border-[#E5DCCF] align-top"><td className={td}>{m.name}</td><td className={td}>{m.detail}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              多くの市町は、登録料を支払った後に、会員登録証や領収書を添えて申請する方式です。市町村税の滞納がないことや、過去に同じ補助を受けていないことが要件となっている場合があります。高知市では登録料の補助は確認できませんでしたが、婚姻後の住宅賃借費用・引越し費用を補助する「高知市結婚新生活支援事業補助金」（令和8年度、最大30万円、親世帯と同居・近居の場合は45万円。夫婦ともに39歳以下、令和7年中の夫婦の所得合計500万円未満などの要件あり、申請期限は令和9年2月26日）が実施されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={JOSEI_URL} {...ext}>こうち出会いサポートセンター「マッチングサイト入会登録料の助成について」</a>・{muniDetails.map((m, i) => (<span key={m.name}>{i > 0 ? "・" : ""}<a href={m.url} {...ext}>{m.label}</a></span>))}・<a href={KOCHI_CITY_SHINSEIKATSU_URL} {...ext}>高知市「令和８年度 高知市結婚新生活支援事業補助金」（PDF）</a>（いずれも2026年11月22日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス・条件</th><th className={th}>1年目にかかる登録費用の目安</th><th className={th}>登録の有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>こうち出会いサポートセンター（2年コース）</td><td className={td}>10,000円（1年あたり換算5,000円）＋対面お引合せ1回2,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>同・半年コース（20代・30代）</td><td className={td}>3,000円（1年続ける場合は2回分で6,000円）＋対面お引合せ1回2,000円</td><td className={td}>6か月</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>同・補助のある市町に在住（安芸市・土佐清水市・黒潮町・佐川町など）</td><td className={td}>登録料は実質0円（支払った後に補助を申請）</td><td className={td}>2年または6か月</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/takamatsu/" className="text-[#A08447] underline">香川県「EN-MUSUかがわ」縁結びマッチング</Link></td><td className={td}>10,000円（令和9年3月31日までの新規登録は5,000円）＋お引合せ1回2,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/okayama/" className="text-[#A08447] underline">岡山県「おかやま縁むすびネット」</Link></td><td className={td}>10,000円（2027年3月31日まで無料）＋お引合せ1回2,000円（オンライン1,000円）</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/tochigi/" className="text-[#A08447] underline">栃木県「とちぎ結婚支援センター」</Link></td><td className={td}>10,000円（1年あたり換算5,000円）</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              上の表は、公式に公表されている登録料と市町の補助額から当サイトが整理した目安です。センターの費用には、お引合せやデートの際の交通費・飲食代などは含まれません。費用だけを比べると、こうち出会いサポートセンターは民間の結婚相談所よりも大幅に低く抑えられます。一方で、登録できる方は原則として高知県内在住の方、または高知県への移住を希望する方に限られ、来所での対応は拠点の開設時間内となります。
            </p>
            <p>
              民間の結婚相談所は、費用がかかる代わりに、担当者がお相手を提案したり、交際中の相談に継続的に応じたりするところが多くあります。高知県内から利用できるオンライン型の結婚相談所も選択肢になります。また、センターでは令和6年10月から民間結婚相談所の会員との相互マッチングも行われています。費用と支援の手厚さのどちらを重視するかを整理したうえで、センターと民間の結婚相談所を比べることをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。香川県・岡山県・栃木県の料金は、当サイトの各ページで各公式サイトの情報を確認した内容です。料金や補助の内容は変更される場合があります。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/tokushima/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">マリッサとくしま（徳島県）</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/knowledge/takamatsu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">EN-MUSUかがわ（香川県・高松市）</Link>
            <Link href="/knowledge/okayama/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">おかやま縁むすびネット（岡山県）</Link>
            <Link href="/knowledge/hyogo-deai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ひょうご出会いサポートセンター</Link>
            <Link href="/knowledge/tochigi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">とちぎ結婚支援センター（栃木県）</Link>
            <Link href="/knowledge/gunma/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">群馬県の結婚支援</Link>
            <Link href="/knowledge/oita/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">大分県の結婚支援</Link>
            <Link href="/area/osaka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">大阪の結婚相談所</Link>
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
