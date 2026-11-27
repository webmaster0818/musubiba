import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-27 確認）。
// ・一宮市の婚活支援事業ページの掲載内容（いち婚ポータル・公募型プロポーザル審査結果・実施計画書・あいこんナビ・あいマリへのリンク）：一宮市「婚活支援事業」（ページID 1061175）
// ・いち婚の受託候補事業者（RunLand株式会社）・応募2社・委託期間（契約締結日〜2027年3月31日）・担当（青少年課、木曽川庁舎3階、0586-84-0017）：一宮市「一宮市婚活支援事業『いち婚』における公募型プロポーザルの審査結果について」（2026年6月23日更新）
// ・婚活支援事業（令和6年度開始・年3回・定員120人・18〜39歳・男性は愛知県在住/在勤/在学）、ユースプラスセミナー開催事業（オンライン年2回各100人・対面年1回30人）、KPI（婚活イベント参加人数 R6年度115人→R8年度目標120人、満足度など）、婚姻件数1,606件・婚姻率4.258・合計特殊出生率1.15（いずれもR6年）：一宮市「令和8年度愛知県地域少子化対策重点推進事業費補助金 実施計画書」（PDF）
// ・2016年から3年間「いち恋」として実施、2024年度に「いち婚」として再開（9月・11月・12月の3回、男女各20名予定）：一宮市「定例市長記者会見録（2024年7月19日）」（PDF）
// ・2026年度のいち婚3回・ユースプラスセミナーの日程・対象・定員・参加費・応募期間：いち婚イベントポータルサイト（主催 一宮市・運営委託 RunLand株式会社）と各イベントページ、ユースプラスセミナーのページとお知らせ（2026年11月25日 申込期限延長）
// ・あいち結婚サポートセンター（あいマリ）の料金（無料）・入会条件・必要書類・登録有効期間・AI紹介/申込の上限・開所時間・会員数等（2026年10月31日時点）：あいマリ「トップ」「初めての方へ」「よくあるご質問」「利用規約」
// ・あいマリの開設（2024年11月）とWINTERマッチングキャンペーン：あいマリ お知らせ（2026年11月24日）
// ・あいマリの出張登録会（12月13日 名古屋市、12月19日 東浦町）：あいマリ イベント情報
// ・あいこんナビの位置づけ：あいち出会いサポートポータルサイト「あいこんナビ」トップ
// ・結婚新生活支援：一宮市公式サイトの「結婚・離婚」「一宮市に住む」ページ・上記実施計画書に掲載を確認できず（本文に記載）。愛知県公式サイトは2026-11-27時点でアクセス制限により閲覧できず
// ・一宮市内の民間結婚相談所の件数：当サイトの愛知県結婚相談所データ（Googleマップ、2026年8月23日取得・113件）から住所が一宮市のものを集計
// ・岐阜県のおみサポ・ぎふの県外在住者の扱い：当サイト /knowledge/gifu/（2026-11-20 確認）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const CITY = "https://www.city.ichinomiya.aichi.jp";
const KONKATSU_URL = `${CITY}/kodomokatei/seishounen/1061175/index.html`;
const PROPOSAL_URL = `${CITY}/kodomokatei/seishounen/1061175/1062018.html`;
const PLAN_PDF_URL = `${CITY}/_res/projects/default_project/_page_/001/061/175/keikakuhyou26.pdf`;
const KAIKEN_2024_PDF_URL = `${CITY}/_res/projects/default_project/_page_/001/062/781/20240719kaikenroku.pdf`;
const CITY_MARRIAGE_URL = `${CITY}/bamen/1010927.html`;
const CITY_HOUSING_URL = `${CITY}/sougouseisaku/seisaku/1044355/1010163/1026513/1026519.html`;
const ICHIKON_URL = "https://ichikon.net/";
const EV_BBQ_URL = "https://d1.ichikon.net/";
const EV_SWEETS_URL = "https://d2.ichikon.net/";
const EV_BUS_URL = "https://d3.ichikon.net/";
const SEMINAR_URL = "https://d1.ichinomiya-youth.com/";
const SEMINAR_EXTEND_URL = "https://d1.ichinomiya-youth.com/post-265/";
const AIMARI_TOP_URL = "https://ai-mari.pref.aichi.jp/";
const AIMARI_BEGINNER_URL = "https://ai-mari.pref.aichi.jp/beginner";
const AIMARI_FAQ_URL = "https://ai-mari.pref.aichi.jp/faq";
const AIMARI_KIYAKU_URL = "https://ai-mari.pref.aichi.jp/kiyaku";
const AIMARI_EVENT_URL = "https://ai-mari.pref.aichi.jp/event";
const AIMARI_CAMPAIGN_URL =
  "https://ai-mari.pref.aichi.jp/%e3%81%82%e3%81%84%e3%81%a1%e7%b5%90%e5%a9%9a%e3%82%b5%e3%83%9d%e3%83%bc%e3%83%88%e3%82%bb%e3%83%b3%e3%82%bf%e3%83%bc%e3%80%8c%e3%81%82%e3%81%84%e3%83%9e%e3%83%aa%ef%bd%97%ef%bd%89%ef%bd%8e%ef%bd%94/";
const AICONNAVI_URL = "https://www.aiconnavi.jp/";

// 令和8年度実施計画書（一宮市）
const marriages = 1606; // 婚姻件数（令和6年）
const marriageRate = 4.258; // 婚姻率（令和6年）
const participantsR6 = 115; // 婚活イベント参加人数（令和6年度）
const participantsTarget = 120; // 同 目標値（令和8年度）
const planCapacity = 120; // 計画書上の婚活イベント定員（男女各20人×3回）

// いち婚 2026年度の3回（いち婚イベントポータルサイトと各イベントページで確認）
const ichikonEvents = [
  {
    no: "第1弾",
    name: "100人で紡ぐBBQコン",
    date: "2026年10月17日（土）",
    status: "開催済み",
    place: "ウッドデザインパークいちのみや 紡",
    age: "18〜39歳",
    capacity: 104,
    capacityLabel: "男女各52名",
    fee: "男性4,500円／女性2,500円",
    period: "2026年8月5日〜10月4日（終了）",
    href: EV_BBQ_URL,
  },
  {
    no: "第2弾",
    name: "スイーツ de 恋はじめ",
    date: "2027年1月16日（土）",
    status: "受付中",
    place: "オリナス一宮",
    age: "23〜35歳",
    capacity: 56,
    capacityLabel: "男女各28名",
    fee: "男性2,500円／女性1,500円",
    period: "2026年10月23日〜2027年1月3日（抽選結果発表 1月6日）",
    href: EV_SWEETS_URL,
  },
  {
    no: "第3弾",
    name: "一宮といちごの恋バスツアー",
    date: "2027年2月13日（土）",
    status: "受付中",
    place: "オリナス一宮（集合・解散）",
    age: "28〜39歳",
    capacity: 40,
    capacityLabel: "男女各20名",
    fee: "男性3,600円／女性2,000円",
    period: "2026年11月25日〜2027年1月31日（抽選結果発表 2月3日）",
    href: EV_BUS_URL,
  },
];

export const metadata: Metadata = {
  title: "一宮市で結婚相談所を探す方へ｜市の婚活イベント「いち婚」は参加費1,500〜4,500円、県のあいマリは登録無料（18〜概ね49歳）と民間との費用比較",
  description:
    "一宮市の公的な婚活支援は、市の婚活イベント「いち婚」（2026年度3回・参加費1,500〜4,500円）と、愛知県の登録無料のあいち結婚サポートセンター（18〜概ね49歳）が中心です。条件・日程と民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/ichinomiya/" },
};

const faqs = [
  {
    q: "一宮市に市営の結婚相談所はありますか？",
    a: "2026年11月27日時点で、一宮市の「婚活支援事業」のページに掲載されているのは、市の婚活イベント「いち婚」のポータルサイト、実施計画書、愛知県の「あいこんナビ」と「あいち結婚サポートセンター（あいマリ）」へのリンクで、市が運営する1対1のお見合い事業（市営の結婚相談所）の案内は確認できませんでした。会員登録してお相手の紹介を受ける公的な窓口としては、愛知県のあいマリ（無料）が利用できます。",
  },
  {
    q: "「いち婚」には誰が参加できますか？",
    a: "2026年度の3回はいずれも、男性は一宮市内に在住・在勤・在学の独身の方、女性は住所を問わず独身の方が対象です。年齢は回ごとに異なり、第1弾が18〜39歳、第2弾が23〜35歳、第3弾が28〜39歳です。応募者が多い場合は抽選となり、当日は顔写真付きの本人確認書類が必要です。市外在住で市内在勤・在学として申し込む方は、在職証明書（社員証等）または在学証明書（学生証等）も必要です。",
  },
  {
    q: "あいち結婚サポートセンター（あいマリ）の料金と入会条件を教えてください。",
    a: "入会金・月会費・紹介料・成婚料などの費用はかかりません。必要書類の取得手数料、通信料、お見合いやデートの飲食代は自己負担です。入会条件は、結婚を希望し自ら努力する意思のある18歳から概ね49歳までの独身の方で、愛知県内に在住・在勤・在学の方または今後愛知県に移住する意思のある方などです。独身証明書（発行から3か月以内）、顔写真付き身分証明書、所得を確認できる書類、本人の写真が必要で、登録の有効期間は本登録から2年間です。",
  },
  {
    q: "あいマリの窓口は一宮市内にありますか？",
    a: "あいマリはオンライン上のセンターで、入会申込はWEBのみ、本人確認の面談はオンラインまたは出張登録会で行います。2026年11月27日時点でイベント情報に掲載されている出張登録会は、12月13日（名古屋市青少年交流プラザ本館ユースクエア）と12月19日（東浦町）で、一宮市内での開催は掲載されていませんでした。問い合わせは電話（052-898-4224）またはメールで受け付けています。",
  },
  {
    q: "一宮市に結婚新生活支援の補助金はありますか？",
    a: "2026年11月27日時点で、一宮市公式サイトの「結婚・離婚」「一宮市に住む」のページと、市の令和8年度の地域少子化対策の実施計画書（婚活支援事業とユースプラスセミナー開催事業の2事業）には、新婚世帯の住居費や引越費用を補助する結婚新生活支援事業の掲載を確認できませんでした。制度の有無は年度によって変わることがあるため、申請を検討する場合は市役所にお問い合わせください。",
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
  headline: "一宮市で結婚相談所を探す方へ：市の婚活イベント「いち婚」、ユースプラスセミナー、あいち結婚サポートセンターの条件と民間の結婚相談所との比較",
  description:
    "一宮市の婚活イベント「いち婚」2026年度3回の日程・対象・参加費、ユースプラスセミナー、愛知県のあいち結婚サポートセンター（あいマリ）の料金・入会条件、婚姻件数、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-27",
  dateModified: "2026-11-27",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/ichinomiya/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "一宮市の婚活支援（いち婚・あいマリ）", item: "https://mu-su-bi-ba.com/knowledge/ichinomiya/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeIchinomiya() {
  const totalCapacity = ichikonEvents.reduce((s, e) => s + e.capacity, 0);
  const perMonth = (marriages / 12).toFixed(0);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "一宮市の婚活支援（いち婚・あいマリ）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          一宮市で結婚相談所を探す方へ：市の婚活イベント「いち婚」、ユースプラスセミナー、あいち結婚サポートセンターの条件と民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月27日（市の事業は同日に一宮市公式サイトといち婚イベントポータルサイト、県のセンターはあいち結婚サポートセンター公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />一宮市の公的な婚活支援は、市の婚活イベントと県の無料のオンライン結婚支援センターの組み合わせです
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>一宮市の婚活支援事業のページには、市が運営する1対1のお見合い事業（市営の結婚相談所）の案内はありません（2026年11月27日時点）。市は青少年課が担当する婚活イベント<strong>「いち婚」</strong>と、婚活の基本を学ぶ<strong>ユースプラスセミナー</strong>を実施しています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>2026年度のいち婚は<strong>全3回・参加費1,500円〜4,500円</strong>で、男性は一宮市内に在住・在勤・在学の方、女性は住所を問わず独身の方が対象です。2026年11月27日時点で、1月16日の第2弾と2月13日の第3弾が受付中です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>会員登録してお相手の紹介を受けたい場合は、愛知県の<strong>あいち結婚サポートセンター（あいマリ）</strong>が利用できます。入会金・月会費・成婚料は<strong>無料</strong>で、対象は18歳から概ね49歳までの独身の方です。2026年10月31日時点の会員数は4,836名です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>一宮市の婚姻件数は<strong>令和6年に{marriages.toLocaleString("ja-JP")}件</strong>です。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">一宮市から利用できる公的な婚活支援の一覧</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              一宮市では、子ども家庭部青少年課が婚活支援事業を担当しています。市の事業と、市の婚活支援事業のページで案内されている愛知県の事業を、当サイトで次のとおり整理しました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>名称・運営</th><th className={th}>内容</th><th className={th}>費用</th><th className={th}>主な条件</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={ICHIKON_URL} {...ext}>いち婚</a><br />一宮市（運営委託：RunLand株式会社）</td><td className={td}>市主催の婚活イベント。2026年度は全3回</td><td className={td}>1回 男性2,500円〜4,500円／女性1,500円〜2,500円</td><td className={td}>男性は市内在住・在勤・在学の独身、女性は独身。年齢は回ごとに設定（18〜39歳の範囲）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={SEMINAR_URL} {...ext}>ユースプラスセミナー</a><br />一宮市</td><td className={td}>婚活の進め方などを学ぶセミナー。2026年11月29日の回はZoomのウェビナー形式</td><td className={td}>無料</td><td className={td}>11月29日の回は18〜39歳で愛知県内に在住・在勤・在学の独身の方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={AIMARI_TOP_URL} {...ext}>あいち結婚サポートセンター（あいマリ）</a><br />愛知県</td><td className={td}>オンライン型の結婚支援センター。AIによる紹介と会員自身の検索でお見合いを申し込み、相談員がスマートフォン等を介して相談に対応</td><td className={td}>入会金・月会費・紹介料・成婚料なし</td><td className={td}>18歳から概ね49歳までの独身で、愛知県内に在住・在勤・在学または移住の意思がある方など</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={AICONNAVI_URL} {...ext}>あいこんナビ</a><br />愛知県</td><td className={td}>市町村や民間非営利団体が実施する婚活イベントの情報を県が掲載するポータルサイト</td><td className={td}>閲覧は無料（イベント参加費は各主催者による）</td><td className={td}>イベントごとに異なる</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={KONKATSU_URL} {...ext}>一宮市「婚活支援事業」</a>・<a href={ICHIKON_URL} {...ext}>いち婚イベントポータルサイト</a>・<a href={SEMINAR_URL} {...ext}>ユースプラスセミナー「何から始める？婚活の基本」</a>・<a href={AIMARI_BEGINNER_URL} {...ext}>あいち結婚サポートセンター「初めての方へ」</a>・<a href={AIMARI_FAQ_URL} {...ext}>「よくあるご質問」</a>・<a href={AICONNAVI_URL} {...ext}>あいこんナビ</a>（いずれも2026年11月27日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">一宮市の婚活イベント「いち婚」（2026年度）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>回・開催日</th><th className={th}>名称・会場</th><th className={th}>対象年齢・定員</th><th className={th}>参加費</th><th className={th}>応募期間</th></tr></thead>
                <tbody>
                  {ichikonEvents.map((e) => (
                    <tr key={e.no} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{e.no}<br />{e.date}（{e.status}）</td>
                      <td className={td}><a href={e.href} {...ext}>{e.name}</a><br />{e.place}</td>
                      <td className={td}>{e.age}<br />{e.capacityLabel}</td>
                      <td className={td}>{e.fee}</td>
                      <td className={td}>{e.period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              参加条件は3回とも共通で、男性は一宮市内に在住・在勤・在学の独身の方、女性は住所を問わず独身の方です。応募者が多い場合は抽選で決まり、当選者には事前の解説動画のURLが送られます。参加費はクレジットカード（PayPal）または銀行振込で支払います。第1弾では、女性の応募が定員を超えた場合に参加者の半数が市内在住者となるよう抽選を行うと案内されていました。
            </p>
            <p>
              2026年度の3回の募集人数を合計すると<strong>{totalCapacity}人</strong>で、市の令和8年度の実施計画書に記載された婚活イベントの定員（{planCapacity}人：男女各20人×3回）を上回る規模です（当サイトが各イベントページの応募人数から集計）。対象年齢は回ごとに異なり、3回すべてが対象となるのは28〜35歳の方です。23〜27歳の方は第1弾と第2弾、36〜39歳の方は第1弾と第3弾、18〜22歳の方は第1弾のみが対象で、第1弾は終了しているため、2026年11月27日時点で申し込めるのは23〜39歳の方です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={ICHIKON_URL} {...ext}>いち婚イベントポータルサイト</a>・<a href={EV_BBQ_URL} {...ext}>第1弾</a>・<a href={EV_SWEETS_URL} {...ext}>第2弾</a>・<a href={EV_BUS_URL} {...ext}>第3弾</a>の各イベントページ・<a href={PLAN_PDF_URL} {...ext}>一宮市「令和8年度愛知県地域少子化対策重点推進事業費補助金 実施計画書」（PDF）</a>（いずれも2026年11月27日確認）。申込状況は変わるため、申込み前に各イベントページでご確認ください。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">いち婚の経緯と実施体制</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>時期</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>2016年から3年間</td><td className={td}>「いち恋」の名称で婚活事業を実施。コロナ禍の期間は、青年文化教室に婚活に役立つ講座を組み込んで継続</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>2024年度</td><td className={td}>「いち婚」として婚活イベントを再開。18〜39歳を対象に、9月・11月・12月の3回（各回男女20名ずつの予定）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>2026年6月</td><td className={td}>2026年度の運営事業者を公募型プロポーザルで選定（応募2社、6月16日に書類審査）。受託候補事業者はRunLand株式会社、委託期間は契約締結日から2027年3月31日まで</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              市の実施計画書では、婚活イベントの参加人数は令和6年度が{participantsR6}人で、令和8年度の目標を{participantsTarget}人としています。参加者アンケートにもとづく指標として、事業への満足度82%、「希望どおりの結婚に向けて後押ししてくれた」と感じた人の割合75%（いずれも令和7年度）が記載されています。また、会場が市内に限られイベントの幅を広げにくいことを課題に挙げ、一部のイベントを市外で実施することも検討するとしています。
            </p>
            <p>
              イベントに関する問い合わせは運営委託先のRunLand株式会社（058-374-7005、平日9時〜17時）、事業全般については一宮市青少年課（木曽川庁舎3階、0586-84-0017）が窓口です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={KAIKEN_2024_PDF_URL} {...ext}>一宮市「定例市長記者会見録」（2024年7月19日）（PDF）</a>・<a href={PROPOSAL_URL} {...ext}>「一宮市婚活支援事業『いち婚』における公募型プロポーザルの審査結果について」（2026年6月23日更新）</a>・<a href={PLAN_PDF_URL} {...ext}>「令和8年度 実施計画書」（PDF）</a>・<a href={ICHIKON_URL} {...ext}>いち婚イベントポータルサイト</a>（いずれも2026年11月27日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">ユースプラスセミナー（婚活の基本を学ぶオンライン講座）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>名称</td><td className={td}>一宮市主催 ユースプラスセミナー「何から始める？婚活の基本」</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>開催日時</td><td className={td}>2026年11月29日（日）10時30分〜12時（Zoomのウェビナー形式。画面・音声はオフで参加）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象・定員</td><td className={td}>18〜39歳で愛知県内に在住・在勤・在学の独身の方（当初の「一宮市内」から拡大）。100名</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>参加費</td><td className={td}>無料</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申込期限</td><td className={td}>当初は2026年11月23日まで。定員に空きがあるため、11月27日（金）17時まで延長すると11月25日に案内されていました</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              このセミナーは、市の令和8年度の新規事業「ユースプラスセミナー開催事業」の一つです。実施計画書では、オンライン形式のセミナーを年2回（各回100人）、対面式のセミナーを年1回（30人）開く計画で、いずれも18〜39歳の独身の方を対象としています。2回目以降の日程は、2026年11月27日時点でセミナーのページに掲載されていませんでした。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SEMINAR_URL} {...ext}>ユースプラスセミナー「何から始める？婚活の基本」</a>・<a href={SEMINAR_EXTEND_URL} {...ext}>お知らせ「ご参加のご案内の送付と、申込期限延長のお知らせ」（2026年11月25日）</a>・<a href={PLAN_PDF_URL} {...ext}>一宮市「令和8年度 実施計画書」（PDF）</a>（いずれも2026年11月27日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">あいち結婚サポートセンター（あいマリ）の料金・入会条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>愛知県（2024年11月開設のオンライン型の結婚支援センター）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>料金</td><td className={td}>入会金・月会費・紹介料・成婚料なし。必要書類の取得手数料、通信料、お見合い・デートの飲食代は自己負担</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会条件</td><td className={td}>(1)結婚を希望し自ら努力する意思のある18歳から概ね49歳までの独身の方　(2)愛知県内に在住・在勤・在学の方、または今後愛知県に移住する意思のある方　(3)システムにアクセスできるスマートフォンやPC等をお持ちの方　(4)自らスマートフォン等を操作でき、メールアドレスをお持ちの方　など</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>独身証明書（発行から3か月以内。戸籍抄（謄）本でも可）、顔写真付き身分証明書、所得を確認できる書類（所得証明書・源泉徴収票など）、本人の写真（バストアップ1枚は必須）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会の流れ</td><td className={td}>WEBで仮登録→オンラインまたは出張登録会で本人確認の面談→マイページで書類のアップロード・プロフィール登録→センターの確認後に本登録</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お相手の探し方</td><td className={td}>AIによる紹介（毎週水曜日、月最大4人）と、条件検索による申込み（月4人まで）。お見合いは対面またはオンライン（Zoom）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録の有効期間</td><td className={td}>本人確認が完了した月から2年後の同月末まで</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>相談員の対応時間</td><td className={td}>月・木・金曜日 12時〜20時、土・日曜日・祝日 10時〜18時（火・水曜日と年末年始は休所）。電話 052-898-4224</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              センターの公表値では、2026年10月31日時点で会員数4,836名、マッチング数（累計）6,253組、成婚数（累計）62組です。2026年12月1日から2027年3月31日までは「あいマリWINTERマッチングキャンペーン」として、条件検索でお見合いを申し込める人数が月4名から月6名に拡大されます。対象は既存会員と、2027年1月31日までに入会申込をした方です。
            </p>
            <p>
              本人確認の面談は、オンラインのほか出張登録会でも受けられます。2026年11月27日時点でセンターのイベント情報に掲載されている出張登録会は、12月13日（日）の名古屋市青少年交流プラザ本館ユースクエアと、12月19日（土）の東浦町での開催で、一宮市内での開催は掲載されていませんでした。一宮市のいち婚の第2弾・第3弾も、センターのイベント情報に掲載されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={AIMARI_TOP_URL} {...ext}>あいち結婚サポートセンター トップページ</a>・<a href={AIMARI_BEGINNER_URL} {...ext}>「初めての方へ」</a>・<a href={AIMARI_FAQ_URL} {...ext}>「よくあるご質問」</a>・<a href={AIMARI_KIYAKU_URL} {...ext}>「利用規約」</a>・<a href={AIMARI_CAMPAIGN_URL} {...ext}>お知らせ「あいマリWINTERマッチングキャンペーンのお知らせ」（2026年11月24日）</a>・<a href={AIMARI_EVENT_URL} {...ext}>「イベント情報」</a>（いずれも2026年11月27日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">一宮市の婚姻件数と結婚後の支援</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>指標</th><th className={th}>値</th><th className={th}>時点</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>婚姻件数</td><td className={td}>{marriages.toLocaleString("ja-JP")}件</td><td className={td}>令和6年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>婚姻率</td><td className={td}>{marriageRate}</td><td className={td}>令和6年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>合計特殊出生率</td><td className={td}>1.15</td><td className={td}>令和6年</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              令和6年の婚姻件数{marriages.toLocaleString("ja-JP")}件は、1か月あたり約{perMonth}件に相当します（当サイト算出）。婚姻率の算出方法（人口千人あたりかどうか）は計画書に記載がないため、他の自治体との比較には注意が必要です。
            </p>
            <p>
              結婚後の支援について、2026年11月27日時点で、一宮市公式サイトの<a href={CITY_MARRIAGE_URL} {...ext}>「結婚・離婚」</a>と<a href={CITY_HOUSING_URL} {...ext}>「一宮市に住む」</a>のページ、および市の令和8年度の実施計画書（婚活支援事業とユースプラスセミナー開催事業の2事業）には、新婚世帯の住居費や引越費用を補助する結婚新生活支援事業の掲載を確認できませんでした。「一宮市に住む」のページでは、住宅取得の支援として、市と包括連携協定を結ぶ金融機関によるローンの優遇措置などが案内されています。制度の有無は年度によって変わることがあるため、申請を検討する場合は市役所にお問い合わせください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PLAN_PDF_URL} {...ext}>一宮市「令和8年度愛知県地域少子化対策重点推進事業費補助金 実施計画書」（PDF）</a>・<a href={CITY_MARRIAGE_URL} {...ext}>「結婚・離婚」</a>・<a href={CITY_HOUSING_URL} {...ext}>「一宮市に住む」（2026年7月30日更新）</a>（いずれも2026年11月27日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な支援と民間の結婚相談所の費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>お相手の探し方</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>一宮市「いち婚」</td><td className={td}>1回 1,500円〜4,500円（2026年度の3回）</td><td className={td}>イベントでの交流</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>一宮市 ユースプラスセミナー</td><td className={td}>無料</td><td className={td}>お相手の紹介はなし（婚活の進め方を学ぶ講座）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>あいち結婚サポートセンター（あいマリ）</td><td className={td}>入会金・月会費・成婚料なし（書類の取得手数料・飲食代などは実費）</td><td className={td}>AIによる紹介・会員自身の検索、相談員によるオンラインの相談</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の方式による（担当者の紹介・会員検索など）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用を抑えて会員登録型の婚活をする場合は、愛知県内に在住・在勤・在学の概ね49歳までの方であれば、無料のあいマリが選択肢になります。あいマリは相談員がオンラインで相談に応じますが、お見合いの申込みは会員ご自身で進める部分が大きい仕組みです。担当者による継続的なお相手の提案や、対面での交際中の助言を重視する場合は、民間の結婚相談所と比較して検討するのが目安です。
            </p>
            <p>
              当サイトが2026年8月23日にGoogleマップのデータで調べた愛知県内の結婚相談所113件のうち、住所が一宮市内のものは3件でした。一宮市内のほか、名古屋駅周辺の相談所や自宅から活動できるオンライン型も含めて比較する場合は、<Link href="/area/nagoya/" className="underline">名古屋・愛知の結婚相談所</Link>をご覧ください。岐阜県の「おみサポ・ぎふ」は、当サイトが2026年11月20日に確認した時点で、女性のおためし会員は県外在住の方も登録できると案内されていました（<Link href="/knowledge/gifu/" className="underline">岐阜県の結婚支援</Link>）。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。一宮市内の件数は、Googleマップの業種データにもとづく当サイトの集計で、すべての相談所を網羅したものではありません。公的な支援の料金は、各公式サイトで2026年11月27日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/wakayama/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">和歌山県の結婚支援</Link>
            <Link href="/knowledge/maebashi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">前橋市の婚活支援</Link>
            <Link href="/knowledge/ono/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">小野市の結婚支援</Link>
            <Link href="/knowledge/kitami/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">北見市の婚活支援</Link>
            <Link href="/area/nagoya/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">名古屋・愛知の結婚相談所</Link>
            <Link href="/knowledge/gifu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">おみサポ・ぎふ（岐阜県）</Link>
            <Link href="/knowledge/mie/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">三重県の結婚支援</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/how-to-choose/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の選び方</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/compare/cheap/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">料金の安い結婚相談所</Link>
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
