import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-20 確認）。
// ・対象（配偶者のいない結婚の意思がある方・市外在住も可・家族の相談可）・費用（相談・登録料・会費・成功報酬なし）・利用の流れ・相談日時と場所・LINE相談・NAGANO ai MATCH女性無料キャンペーンの案内・国の地域少子化対策重点推進交付金の活用：松本市「結婚支援事業のご案内」（2026年5月8日更新）
// ・登録の対象（18歳以上）・有効期間5年（自動延長なし）・提出書類・紹介とお見合いの進め方・NAGANO ai MATCH登録料（2年間で1万円）・11月22日の休み：松本市「松本市結婚支援登録のご案内」（2026年9月30日更新）
// ・登録者数（居住地別・年代別、令和8年3月31日時点）・成婚実績（令和2〜7年度）：松本市「結婚支援の状況（登録者・成婚者）」（2026年5月25日更新）
// ・相談場所の変更（令和7年4月から なんなんひろば2階、専用電話0263-25-1000）：松本市「相談場所・相談日・電話番号変更のお知らせ」
// ・担当課（若者参画課）・補助金は相談窓口で受けない旨：松本市「松本市結婚支援」トップ
// ・「まつもと結い旅」（四賀地区・市街地）の日時・対象・料金・参加人数・マッチング数・事前講座・委託先：松本市 イベントページ・各開催レポート
// ・「いちごと、ひらめきと。」（2026年11月22日）：松本市 イベントページ（2026年9月30日更新）
// ・結婚新生活支援事業補助金（令和8年度）の要件・補助額・受付：松本市「松本市結婚新生活支援事業補助金」（2026年6月24日更新）。講座受講要件：同「ライフデザイン等に関する講座のご案内」
// ・チアフルながのでの掲載（松本市役所 結婚支援＝システム利用団体、登録期間5年・登録料等なし・相談日時。松本市社協＝市の委託で年2回のイベント）：チアフルながの 各相談所ページ
// ・NAGANO ai MATCHの制度の要点：当サイト /knowledge/nagano/（2026-11-18 確認）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const CITY_TOP_URL = "https://www.city.matsumoto.nagano.jp/site/kekkon-shien/";
const GUIDE_URL = "https://www.city.matsumoto.nagano.jp/site/kekkon-shien/3471.html";
const REGISTER_URL = "https://www.city.matsumoto.nagano.jp/site/kekkon-shien/3472.html";
const STATS_URL = "https://www.city.matsumoto.nagano.jp/site/kekkon-shien/150121.html";
const MOVE_URL = "https://www.city.matsumoto.nagano.jp/site/kekkon-shien/163499.html";
const YUITABI_URL = "https://www.city.matsumoto.nagano.jp/site/kekkon-shien/190137.html";
const YUITABI_SHIGA_REPORT_URL = "https://www.city.matsumoto.nagano.jp/site/kekkon-shien/186914.html";
const YUITABI_CITY_REPORT_URL = "https://www.city.matsumoto.nagano.jp/site/kekkon-shien/194670.html";
const ICHIGO_URL = "https://www.city.matsumoto.nagano.jp/site/kekkon-shien/214810.html";
const SUBSIDY_URL = "https://www.city.matsumoto.nagano.jp/site/benricho/55355.html";
const COURSE_URL = "https://www.city.matsumoto.nagano.jp/site/kekkon-shien/201753.html";
const CHEERFUL_CITY_URL = "https://www.cheerful-nagano.com/marriage/counseling/599/";
const CHEERFUL_SHAKYO_URL = "https://www.cheerful-nagano.com/marriage/counseling/582/";

// 令和8年3月31日時点（松本市「結婚支援の状況」）
const byArea = [
  { label: "松本市内", m: 151, f: 98 },
  { label: "市外（県内）", m: 85, f: 41 },
  { label: "県外", m: 13, f: 13 },
];
const byAge = [
  { label: "20代", m: 15, f: 18 },
  { label: "30代", m: 106, f: 73 },
  { label: "40代", m: 76, f: 45 },
  { label: "50代以上", m: 52, f: 16 },
];
const seikon = [
  { year: "令和2年度", kumi: 3, nin: 6 },
  { year: "令和3年度", kumi: 3, nin: 7 },
  { year: "令和4年度", kumi: 3, nin: 6 },
  { year: "令和5年度", kumi: 3, nin: 5 },
  { year: "令和6年度", kumi: 5, nin: 11 },
  { year: "令和7年度", kumi: 7, nin: 7 },
];

export const metadata: Metadata = {
  title: "松本市で結婚相談所を探す方へ｜市の結婚支援は登録料・成婚料なしで5年有効、登録者401名・令和7年度成婚7組と民間との費用比較",
  description:
    "松本市の結婚支援は、相談・登録料・会費・成功報酬がかからず、登録の有効期間は5年です。相談日時、必要書類、登録者401名の居住地・年代の内訳（令和8年3月31日時点）、成婚実績、市の出会いイベント、結婚新生活支援補助金、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/matsumoto/" },
};

const faqs = [
  {
    q: "松本市の結婚支援（結婚相談）は費用がかかりますか？",
    a: "松本市の案内では、相談はもちろん、登録した場合の登録料や会費、成功報酬は一切かからないとしています。ただし、イベントへの参加や、長野県全体でお相手を探す「ながの結婚マッチングシステム（NAGANO ai MATCH）」の利用には別途費用がかかります。NAGANO ai MATCHの登録料は、通常2年間で1万円です。",
  },
  {
    q: "松本市外に住んでいても相談・登録できますか？",
    a: "できます。市の案内では、配偶者のいない結婚の意思がある方であれば、松本市にお住まいの方でもそれ以外の方でも相談できるとしています。登録は18歳以上で配偶者のない結婚意思のある方であれば可能です。令和8年3月31日時点の登録者401名のうち、市外（県内）は126名、県外は26名です。遠方の方はオンラインでの面談も相談できます。",
  },
  {
    q: "家族が代わりに相談することはできますか？",
    a: "市の「結婚支援事業のご案内」では、ご家族の方からの相談も可能としています。ただし、登録には本人の写真・本人確認書類・独身であることが確認できる書類などの提出が必要です。",
  },
  {
    q: "相談窓口はどこにあり、いつ開いていますか？",
    a: "なんなんひろば2階の結婚相談室（松本市芳野4番1号）です。相談日は月・水・木曜日、第2土曜日、第4日曜日（祝日を除く）の午前9時から午後5時までで、面談は事前予約制です。電話は結婚支援専用番号0263-25-1000で、なんなんひろばの電話番号では結婚支援につながりません。令和8年11月22日（日）はイベントのため休みと案内されています。",
  },
  {
    q: "結婚新生活支援事業補助金は結婚相談の窓口で申請できますか？",
    a: "できません。市の結婚支援のページでは、補助金については結婚支援の相談窓口では受け付けていないと案内しています。補助金はなんなんひろばで、来館日を予約したうえで申請します（令和8年度の受付は令和9年3月31日まで、予算に達し次第締切）。",
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
  headline: "松本市の結婚支援（市の結婚相談）の料金・登録条件・登録者数と、出会いイベント・結婚新生活支援補助金、民間の結婚相談所との比較",
  description: "松本市の結婚支援の費用・登録条件・必要書類・相談日時と、登録者の居住地・年代の内訳、成婚実績、市の出会いイベント、結婚新生活支援事業補助金、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-20",
  dateModified: "2026-11-20",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/matsumoto/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "松本市の結婚支援（市の結婚相談）", item: "https://mu-su-bi-ba.com/knowledge/matsumoto/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeMatsumoto() {
  const sum = (rows: { m: number; f: number }[]) => rows.reduce((a, r) => ({ m: a.m + r.m, f: a.f + r.f }), { m: 0, f: 0 });
  const tot = sum(byArea);
  const total = tot.m + tot.f;
  const inCity = byArea[0].m + byArea[0].f;
  const inCityShare = ((inCity / total) * 100).toFixed(1);
  const thirties = byAge[1].m + byAge[1].f;
  const thirtiesShare = ((thirties / total) * 100).toFixed(1);
  const ratio = (tot.m / tot.f).toFixed(1);
  const kumiTotal = seikon.reduce((a, r) => a + r.kumi, 0);
  const latest = seikon[seikon.length - 1];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "松本市の結婚支援（市の結婚相談）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          松本市の結婚相談所選び：市の結婚支援の料金・登録条件・登録者数と、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月20日（費用・登録条件・相談日時・登録者数・成婚実績・イベント・補助金は同日に松本市公式サイト、長野県の結婚・子育て応援サイト「チアフルながの」で確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />松本市の結婚支援は、相談・登録料・会費・成功報酬がかからず、登録の有効期間は5年です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>松本市は、若者参画課が<strong>市の結婚支援（結婚相談・お相手の紹介・イベント・セミナー）</strong>を行っています。窓口は<strong>なんなんひろば2階の結婚相談室</strong>で、相談日は月・水・木曜日と第2土曜日・第4日曜日（祝日を除く）、面談は予約制です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>相談・登録料・会費・成功報酬は<strong>かかりません</strong>。登録は18歳以上で配偶者のない方が対象で、<strong>有効期間は5年</strong>です。松本市外にお住まいの方も相談・登録できます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>登録者は<strong>{total}名（男性{tot.m}名・女性{tot.f}名、令和8年3月31日時点）</strong>で、年代別では30代が{thirties}名と最も多くなっています。市の結婚支援で出会って成婚した組数は<strong>令和7年度{latest.kumi}組</strong>、令和2〜7年度の合計{kumiTotal}組です（合計は当サイト算出）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>登録者は希望すれば、長野県全体でお相手を探す<Link href="/knowledge/nagano/" className="underline">NAGANO ai MATCH</Link>も利用できます（登録料は通常2年間で1万円）。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">松本市の結婚支援の料金と登録条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>実施</td><td className={td}>松本市（担当：若者参画課）。業務内容は結婚相談・イベントの開催・セミナーの開催。国の「地域少子化対策重点推進交付金」を活用して実施</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>相談できる方</td><td className={td}>配偶者のいない、結婚の意思がある方（松本市にお住まいの方でも、それ以外の方でも可）。家族からの相談も可能</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録できる方</td><td className={td}>18歳以上で配偶者のない、結婚の意思がある方。配偶者がいないことがわかる公的書類を提出した方のみ登録できる。暴力団及び暴力団関係者の登録は不可</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>費用</td><td className={td}>相談・登録料・会費・成功報酬はかからない。イベント参加とNAGANO ai MATCHの利用は別途費用がかかる</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録の有効期間</td><td className={td}>5年。自動延長はなく、続けて利用する場合は再登録が必要</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録に必要な書類</td><td className={td}>登録申込記入表（身上書）、本人の写真、本人確認書類の写し（運転免許証等）、独身であることが確認できる書類、承諾書（外部団体への紹介を希望する場合）。様式・提出方法は初回相談時に案内。提出書類は返却されない</td></tr>
                </tbody>
              </table>
            </div>
            <ol className="list-decimal pl-5 space-y-2">
              <li>電話（0263-25-1000）・電子メール・LINEで初回相談を申し込む（面談は事前予約制。遠方の方はオンライン対応も相談可）</li>
              <li>初回相談を受け、お相手の紹介を希望する場合は書類を提出して結婚支援事業に登録する</li>
              <li>相談員が条件の合うお相手を探して紹介し、お二人の都合に合わせてお見合い等を設定する</li>
              <li>交際はお二人で進め、進捗や結婚が決まった場合の日程は相談員に報告する。お断りをしたい場合も相談できる</li>
            </ol>
            <p>
              当サイトが確認した長野県のNAGANO ai MATCHが会員ご自身でシステムを検索して申し込む仕組みであるのに対し、松本市の結婚支援は相談員がお相手を探して紹介する形をとっています。ただし市は、紹介はできるだけ条件の合うお相手を見つけるよう努めているものの、必ずしも紹介に至るとは限らないと明記しています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={GUIDE_URL} {...ext}>松本市「結婚支援事業のご案内」</a>（2026年5月8日更新）・<a href={REGISTER_URL} {...ext}>「松本市結婚支援登録のご案内」</a>（2026年9月30日更新）・<a href={CITY_TOP_URL} {...ext}>「松本市結婚支援」</a>・<a href={CHEERFUL_CITY_URL} {...ext}>チアフルながの「松本市役所 結婚支援」</a>（いずれも2026年11月20日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">相談窓口の場所・日時と連絡方法</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>場所</td><td className={td}>なんなんひろば2階 結婚相談室（〒399-0002 松本市芳野4番1号）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>相談日</td><td className={td}>月・水・木曜日、第2土曜日、第4日曜日（祝日を除く）。令和8年11月22日（日）はイベントのため休み</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>時間</td><td className={td}>午前9時〜午後5時（担当者不在の場合もある）。面談は事前予約制</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>電話</td><td className={td}>0263-25-1000（結婚支援専用番号）。なんなんひろばの電話番号では結婚支援につながらない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>そのほかの連絡方法</td><td className={td}>電子メール（市の問い合わせフォーム）、LINE（友だち登録後にメッセージで相談希望を伝える）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              相談場所・相談日・電話番号は令和7年4月に変更されています。以前の案内を見て連絡する場合はご注意ください。土日に相談できるのは第2土曜日と第4日曜日のみのため、平日に時間を取りにくい方は早めに予約することをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MOVE_URL} {...ext}>松本市「相談場所・相談日・電話番号変更のお知らせ（令和7年4月から）」</a>・<a href={REGISTER_URL} {...ext}>「松本市結婚支援登録のご案内」</a>（いずれも2026年11月20日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">登録者数（居住地別・年代別）と成婚実績</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>居住地（令和8年3月31日時点）</th><th className={th}>男性</th><th className={th}>女性</th><th className={th}>計</th></tr></thead>
                <tbody>
                  {byArea.map((r) => (
                    <tr key={r.label} className="border-t border-[#E5DCCF] align-top"><td className={td}>{r.label}</td><td className={td}>{r.m}名</td><td className={td}>{r.f}名</td><td className={td}>{r.m + r.f}名</td></tr>
                  ))}
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>計</td><td className={td}>{tot.m}名</td><td className={td}>{tot.f}名</td><td className={td}>{total}名</td></tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年代（令和8年3月31日時点）</th><th className={th}>男性</th><th className={th}>女性</th><th className={th}>計</th></tr></thead>
                <tbody>
                  {byAge.map((r) => (
                    <tr key={r.label} className="border-t border-[#E5DCCF] align-top"><td className={td}>{r.label}</td><td className={td}>{r.m}名</td><td className={td}>{r.f}名</td><td className={td}>{r.m + r.f}名</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年度</th><th className={th}>成婚組数（松本市結婚支援で出会って成婚した組数）</th><th className={th}>登録者と非登録者の成婚人数</th></tr></thead>
                <tbody>
                  {seikon.map((r) => (
                    <tr key={r.year} className="border-t border-[#E5DCCF] align-top"><td className={td}>{r.year}</td><td className={td}>{r.kumi}組</td><td className={td}>{r.nin}人</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              登録者{total}名のうち松本市内にお住まいの方は{inCity}名（{inCityShare}%）で、市外（県内）・県外の方も登録しています。年代別では30代が{thirties}名（{thirtiesShare}%）と最も多く、20代は男女合わせて{byAge[0].m + byAge[0].f}名です。男女比は女性1人に対して男性約{ratio}人で、50代以上は男性{byAge[3].m}名に対し女性{byAge[3].f}名です（割合・比率は当サイト算出）。
            </p>
            <p>
              成婚組数は令和2〜5年度が各3組、令和6年度が5組、令和7年度が7組です。市の表には「登録者と非登録者の成婚人数」の欄も設けられていますが、この欄の集計方法について公式ページに詳しい説明はありません。数値の意味を確かめたい方は、相談の際に市へご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={STATS_URL} {...ext}>松本市「結婚支援の状況（登録者・成婚者）」</a>（2026年5月25日更新・2026年11月20日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">松本市の出会いイベントと松本市社会福祉協議会</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日</th><th className={th}>イベント・会場</th><th className={th}>対象・料金・結果</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={YUITABI_SHIGA_REPORT_URL} {...ext}>2025年10月26日</a></td><td className={td}>まつもと結い旅＠四賀地区（四賀化石館ほか。なんなんひろばからバスで移動）</td><td className={td}>28〜40歳の独身男女 各12名。参加は男性9名・女性8名で、7組がマッチング（重複あり）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={YUITABI_CITY_REPORT_URL} {...ext}>2026年2月11日</a></td><td className={td}>まつもと結い旅＠市街地（松本市第三地区公民館・石井味噌）</td><td className={td}>28〜40歳の独身男女 各12名（抽選制）。料金は男性4,000円・女性2,000円。参加は男性11名・女性12名で、9組がマッチング（重複あり）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={ICHIGO_URL} {...ext}>2026年11月22日</a></td><td className={td}>いちごと、ひらめきと。（浅間温泉わいわい広場ほか）</td><td className={td}>松本市に在住または通勤している35歳未満の独身の方、定員12名（男女各6名）。参加費2,000円。申込み受付は11月10日で終了</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              まつもと結い旅には松本市の結婚相談員が同行し、1対1のトークタイムで参加者お一人ずつと話す時間が設けられています。開催前には、参加を迷っている方向けの無料の講座（2025年9月23日・松本市立博物館、2026年1月25日・松本市中央公民館（Mウィング））も開かれました。イベントの運営は株式会社ながのアド・ビューロへの委託です。
            </p>
            <p>
              また、県の結婚・子育て応援サイト「チアフルながの」では、松本市社会福祉協議会が松本市からの委託を受けて、出会いの場づくりとして年2回のイベントを開催していると案内されています（松本市双葉4-16、0263-27-3381）。当サイトでは、2026年11月20日時点で同協議会の公式サイトに婚活イベントの個別案内を確認できませんでした。開催予定は同協議会または市の結婚支援窓口へお問い合わせください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={YUITABI_URL} {...ext}>松本市「松本市×出会いイベント『まつもと結い旅』」</a>・表内の各開催レポート・イベントページ・<a href={CHEERFUL_SHAKYO_URL} {...ext}>チアフルながの「松本市社会福祉協議会」</a>（いずれも2026年11月20日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚後の支援：松本市結婚新生活支援事業補助金（令和8年度）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象の婚姻日</td><td className={td}>婚姻届受理日またはパートナーシップ宣誓日が令和8年1月1日〜令和9年3月31日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>年齢・所得</td><td className={td}>婚姻日等にお二人とも39歳以下。お二人の令和7年分の所得の合計が500万円未満（貸与型奨学金の年間返還額は控除して計算）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>そのほかの要件</td><td className={td}>対象の住居が松本市内にあり、申請時にお二人ともその住所に住民登録があること。申請日までにお二人ともライフデザイン等の講座を受講済み（動画視聴も可）であること。市税の滞納がないこと など</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>補助対象経費</td><td className={td}>住宅取得費用（建物の購入費のみ）、住宅賃借費用（賃料・共益費・敷金・礼金・仲介手数料）、業者を利用した引越費用・リフォーム費用。対象の支払期間は令和8年4月1日〜令和9年3月31日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>補助額</td><td className={td}>お二人とも29歳以下：上限60万円＋市独自の上乗せ上限10万円（住宅取得・リフォーム費用のみ）で最大70万円。お二人とも39歳以下：上限30万円＋上乗せ上限10万円で最大40万円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>受付</td><td className={td}>令和8年7月1日〜令和9年3月31日、なんなんひろばで来館日を予約して申請（月・水・木・金曜日 午前9時〜午後5時）。予算に達し次第締切</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              この補助金は結婚相談の窓口では受け付けていないため、申請や問い合わせは補助金のページに掲載された方法で行います。2月〜3月は予約が集中すると案内されているため、対象となる方は早めの申請をおすすめします。要件や対象経費の詳細は年度によって変わる場合があるため、最新の内容は市の公式ページでご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SUBSIDY_URL} {...ext}>松本市「松本市結婚新生活支援事業補助金」</a>（2026年6月24日更新）・<a href={COURSE_URL} {...ext}>「ライフデザイン等に関する講座のご案内」</a>・<a href={CITY_TOP_URL} {...ext}>「松本市結婚支援」</a>（いずれも2026年11月20日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">県のNAGANO ai MATCH・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>登録の有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>松本市の結婚支援</td><td className={td}>相談・登録料・会費・成功報酬なし（イベント参加費は別途）</td><td className={td}>5年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/nagano/" className="text-[#A08447] underline">長野県「NAGANO ai MATCH」</Link>（松本市で登録した方が希望する場合）</td><td className={td}>システム登録料10,000円（令和8年5月1日〜令和9年3月31日は新規女性先着200名が1年間無料）</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              松本市の結婚支援に登録した方は、市の相談員による紹介に加えて、県のマッチングシステムで長野県全体のお相手を検索することもできます。NAGANO ai MATCHの申込みのルールや県全体の実績は、<Link href="/knowledge/nagano/" className="underline">長野県の結婚支援のページ</Link>で整理しています。なお、市の案内では、NAGANO ai MATCHの利用登録には市での結婚相談が必要とされています。
            </p>
            <p>
              費用だけを比べると、市の結婚支援は民間の結婚相談所よりも大幅に低く抑えられます。一方で、紹介は必ず行われるとは限らず、相談日も週3日と月2回の土日に限られます。民間の結婚相談所は、費用がかかる代わりに、担当者による継続的なお相手の提案や交際中の相談に応じるところが多くあります。松本市内から利用できるオンライン型の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。NAGANO ai MATCHの料金・キャンペーンは、松本市「結婚支援事業のご案内」「松本市結婚支援登録のご案内」（2026年11月20日確認）と当サイト長野県ページ（2026年11月18日確認）の内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/nagano/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">NAGANO ai MATCH（長野県）</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/knowledge/niigata/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ハートマッチにいがた（新潟県）</Link>
            <Link href="/knowledge/ishikawa/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">いしかわ結婚支援センター（石川県）</Link>
            <Link href="/knowledge/fukuchiyama/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">福知山市の婚活（京都府）</Link>
            <Link href="/area/tokyo/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">東京の結婚相談所</Link>
            <Link href="/knowledge/gifu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">おみサポ・ぎふ（岐阜県）</Link>
            <Link href="/knowledge/yamanashi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">山梨県の結婚支援</Link>
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
