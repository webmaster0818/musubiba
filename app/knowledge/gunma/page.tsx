import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-21 確認）。
// ・県のポータルサイト「出会い・結婚」に掲載されている事業（あいぷろ・コンパス・婚活体験レポーター・オリジナル婚姻届）。会員登録制のお見合い事業の案内がないこと：群馬県結婚・子育て応援ポータルサイト「ぐんまスマイルライフ」出会い・結婚（当サイトが同日にページ内の掲載項目を確認）
// ・あいぷろの仕組み（協賛団体・市町村等が主催、主催者へ直接申込み、本人確認、参加費用は個人負担）、2026年11月21日以降のイベント掲載4件・うち公的団体の主催1件（榛東村）：同「ぐんま赤い糸プロジェクト」（件数は当サイトが数えた値）
// ・協賛団体の登録要件（設立1年以上、営利を求めない、結婚相談所など見合い・結婚のあっせんを主とする企業等ではないこと、登録料無料、登録期間）・フレンズ団体の定義：群馬県「ぐんま赤い糸プロジェクト事業実施要綱」（PDF）
// ・協賛団体19団体（令和8年8月現在）と所在地：同「あいぷろ協賛団体一覧」（PDF）。市町村別・業種別の内訳は当サイトが数えた値
// ・県の婚活体験レポート集（令和7年3月公開・6組8名）、結婚相談所についての県の説明：群馬県「『婚活体験レポーター』の記事を公開します」・同「婚活体験レポート集 表紙・はじめに・目次」（PDF）
// ・ぐんま結婚応援パスポート「コンパス」（無料、対象、交付方法、有効期間、平成28年10月導入、iPASS・とちマリとの相互利用）：群馬県「コンパス」チラシ（PDF）・報道資料「群馬県オリジナル婚姻届を配布します！」（令和8年10月30日・PDF）
// ・東京都との結婚支援の広報連携：ぐんまスマイルライフ「東京都との結婚支援に係る相互連携について」（2026年10月23日）
// ・館林市の婚活応援相談（登録制、相談日、会場、利用料無料、必要書類、予約先）：館林市「婚活応援相談」（2025年6月16日更新）
// ・桐生市社会福祉協議会の結婚相談（対象者、開催日時、会場、必要書類、登録期間3年、相談無料、郵送登録、あいぷろとの連携、水曜日の再開）：桐生市社会福祉協議会「結婚相談」・「結婚相談の再開について」（2026年2月16日）・「登録方法」「相談のしくみ」（PDF）
// ・桐生市社協のクリスマスミニ婚活パーティー（2026年12月13日・参加費500円・55歳以下・男女各5名）：同「R8クリスマスミニ婚活パーティーちらし」（PDF）
// ・伊勢崎市社会福祉協議会の結婚相談所の休止（令和8年4月から当面の間、新規登録は令和7年11月10日以降受付なし、理由）：伊勢崎市社会福祉協議会「結婚相談所 相談業務の休止について（お知らせ）」（PDF）
// ・館林市の結婚新生活支援補助金（上限60万円/30万円、夫婦とも39歳以下・所得500万円未満）：館林市「令和7年度 館林市結婚新生活支援事業」チラシ（PDF）
// ・長野県・新潟県のセンター等の料金：当サイト /knowledge/nagano/・/knowledge/niigata/ の確認内容
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const PORTAL_URL = "https://smilelife.pref.gunma.jp/encounter/";
const AIPRO_URL = "https://smilelife.pref.gunma.jp/encounter/event/";
const AIPRO_YOUKOU_URL = "https://www.pref.gunma.jp/uploaded/attachment/717246.pdf";
const AIPRO_LIST_URL = "https://smilelife.pref.gunma.jp/wp/wp-content/themes/smilelife/page/aipro8.8.2.pdf";
const REPORT_URL = "https://www.pref.gunma.jp/page/665173.html";
const REPORT_PDF_URL = "https://smilelife.pref.gunma.jp/wp/wp-content/uploads/2025/03/00_表紙・はじめに・目次.pdf";
const KONPASS_URL = "https://smilelife.pref.gunma.jp/encounter/konpass/";
const KONPASS_PDF_URL = "https://www.pref.gunma.jp/uploaded/attachment/684427.pdf";
const KONIN_PRESS_URL = "https://www.pref.gunma.jp/uploaded/attachment/718475.pdf";
const TOKYO_URL = "https://smilelife.pref.gunma.jp/news/27733/";
const TATEBAYASHI_URL = "https://www.city.tatebayashi.gunma.jp/s021/kurashi/190/030/20200107121000.html";
const TATEBAYASHI_SHINSEIKATSU_URL = "https://www.city.tatebayashi.gunma.jp/s035/kurashi/210/tirashi.pdf";
const KIRYU_URL = "https://kiryu-csw.net/publics/index/31/";
const KIRYU_RESTART_URL = "https://kiryu-csw.net/publics/index/1/detail=1/b_id=5/r_id=1032/";
const KIRYU_HOWTO_URL = "https://kiryu-csw.net/relays/download/31/117/100/3146/?file=/files/libs/3146/202606020849303128.pdf";
const KIRYU_SHIKUMI_URL = "https://kiryu-csw.net/relays/download/31/118/101/3147/?file=/files/libs/3147/202606020850176990.pdf";
const KIRYU_PARTY_URL = "https://kiryu-csw.net/relays/download/31/690/848/3285/?file=/files/libs/3285/20260928153458829.pdf";
const ISESAKI_URL = "https://ise-shakyo.or.jp/welfare-consultation/files/consultation_marriage_202511.pdf";

// あいぷろ協賛団体一覧（令和8年8月現在）の所在地を当サイトが市町村別に数えた値
const sponsorsByCity = [
  { city: "前橋市", n: 6 },
  { city: "高崎市", n: 5 },
  { city: "伊勢崎市", n: 2 },
  { city: "桐生市", n: 1 },
  { city: "太田市", n: 1 },
  { city: "沼田市", n: 1 },
  { city: "藤岡市", n: 1 },
  { city: "安中市", n: 1 },
  { city: "中之条町", n: 1 },
];
const sponsorTotal = 19;
const sponsorWedding = 4; // 会社概要に「ウェディング」等の婚礼事業の記載がある団体
const sponsorNpo = 4; // 名称が「NPO法人」の団体

export const metadata: Metadata = {
  title: "群馬県で結婚相談所を探す方へ｜県営のお見合いセンターはなく出会いイベント「あいぷろ」（協賛19団体）が中心、館林市・桐生市の無料の結婚相談と民間との費用比較",
  description:
    "群馬県には会員登録制の県営お見合いセンターがなく、県は出会いイベント事業「あいぷろ」（協賛19団体）と結婚応援パスポートを実施しています。館林市・桐生市社会福祉協議会の無料の結婚相談、伊勢崎市社協の休止、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/gunma/" },
};

const faqs = [
  {
    q: "群馬県に、県が運営する結婚相談所（お見合いセンター）はありますか？",
    a: "2026年11月21日時点で、群馬県の結婚・子育て応援ポータルサイト「ぐんまスマイルライフ」の「出会い・結婚」のページに、会員登録制のお見合い（マッチング）事業の案内はありません。県の結婚支援として案内されているのは、出会いイベントの情報を発信する「ぐんま赤い糸プロジェクト（あいぷろ）」、新婚・結婚予定のカップル向けの「ぐんま結婚応援パスポート（コンパス）」、婚活体験レポート集などです。お見合いの仲介は、館林市や桐生市社会福祉協議会などの市町村単位の結婚相談で行われています。",
  },
  {
    q: "館林市・桐生市の結婚相談は無料ですか？",
    a: "館林市の婚活応援相談は、市の案内で利用料が無料とされています。桐生市社会福祉協議会の結婚相談は、案内資料で相談は無料と記載されています。いずれも独身証明書や写真を用意して登録し、相談員を通じてお見合いを行う仕組みです。登録の条件や相談日は変更される場合がありますので、利用前に各窓口へご確認ください。",
  },
  {
    q: "桐生市・館林市以外に住んでいても登録できますか？",
    a: "桐生市社会福祉協議会の結婚相談は、成人の独身者が対象で、男性は桐生市・みどり市に在住または桐生市に在勤の方に限られます。女性には住所の条件が設けられていません。館林市の婚活応援相談は、対象を「結婚を希望する独身男女」としており、住所の条件は市の案内ページに記載がありません。詳しくは各窓口にお問い合わせください。",
  },
  {
    q: "あいぷろのイベントに参加費はかかりますか？",
    a: "県の案内では、あいぷろのイベントの参加費用は個人負担です。イベントは県に登録した協賛団体や市町村等が主催し、参加の申込みは主催者へ直接行います。当日は運転免許証等で本人確認が行われます。参加費や年齢・住所の条件はイベントごとに異なるため、各イベントの案内でご確認ください。",
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
  headline: "群馬県の公的な婚活支援：県の出会いイベント「あいぷろ」・結婚応援パスポート・市町村の結婚相談と、民間の結婚相談所との比較",
  description: "群馬県の「ぐんま赤い糸プロジェクト（あいぷろ）」、ぐんま結婚応援パスポート、館林市・桐生市社会福祉協議会の結婚相談と、民間の結婚相談所の費用を整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/gunma/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "群馬県の結婚支援（あいぷろ・市町村の結婚相談）", item: "https://mu-su-bi-ba.com/knowledge/gunma/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeGunma() {
  const maebashiTakasaki = sponsorsByCity.filter((s) => s.city === "前橋市" || s.city === "高崎市").reduce((a, s) => a + s.n, 0);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "群馬県の結婚支援（あいぷろ・市町村の結婚相談）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          群馬県の結婚相談所選び：県の出会いイベント「あいぷろ」・市町村の無料の結婚相談と、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月21日（県の事業内容・協賛団体一覧・市町村の結婚相談の条件は同日に群馬県公式サイト、ぐんまスマイルライフ、館林市公式サイト、桐生市・伊勢崎市の社会福祉協議会の公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />群馬県には県営のお見合いセンターがなく、お見合いの仲介は市町村単位の結婚相談で行われています
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>県の結婚・子育て応援ポータルサイト「ぐんまスマイルライフ」には、<strong>会員登録制のお見合い（マッチング）事業の案内はありません</strong>（2026年11月21日確認）。県の出会い支援は、協賛団体や市町村が主催するイベントを紹介する<strong>「ぐんま赤い糸プロジェクト（あいぷろ）」</strong>が中心です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>あいぷろの協賛団体は<strong>{sponsorTotal}団体</strong>（令和8年8月現在）で、うち{maebashiTakasaki}団体が前橋市・高崎市にあります（当サイトが数えた値）。イベントの参加費用は個人負担です。結婚相談所など、見合い・結婚のあっせんを主とする企業は協賛団体に登録できません。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>登録制でお見合いを仲介する公的な窓口として、<strong>館林市の婚活応援相談（利用料無料）</strong>と<strong>桐生市社会福祉協議会の結婚相談（相談無料・登録期間3年）</strong>があります。伊勢崎市社会福祉協議会の結婚相談所は<strong>令和8年4月から休止</strong>しています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。公的な窓口は費用を抑えられる一方、対象地域や相談日が限られます。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">県の出会い支援「ぐんま赤い糸プロジェクト（あいぷろ）」</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>事業の内容</td><td className={td}>結婚を希望する方に出会いの機会（イベント等）を提供する県の事業。県に登録した「協賛団体」と、市町村・社会福祉協議会などの「フレンズ団体」が主催するイベントを、ポータルサイト「ぐんまスマイルライフ」に掲載して発信する</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>参加の流れ</td><td className={td}>ポータルサイトでイベント情報を確認する（LINEでも新着情報を配信）→ 主催者へ直接申し込む → 当日、受付で運転免許証等を提示して本人確認を受ける</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>参加費</td><td className={td}>個人負担（金額はイベントごとに異なる）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>協賛団体の要件</td><td className={td}>県内の企業・店舗・団体で、設立から1年以上が経過していること、事業の実施において営利を求めないこと、結婚相談所など見合い・結婚のあっせん等を主とする企業等ではないこと等。登録料は無料、登録期間は毎年4月1日から1年間</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>協賛団体数</td><td className={td}>{sponsorTotal}団体（令和8年8月現在）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>担当</td><td className={td}>群馬県 生活こども部 生活こども課</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              当サイトが県の「あいぷろ協賛団体一覧（令和8年8月現在）」の所在地を数えたところ、19団体の市町村別の内訳は次のとおりです。会社概要にウェディング（婚礼）事業の記載がある団体が{sponsorWedding}団体、NPO法人が{sponsorNpo}団体で、料理教室・飲食店・リサイクルショップなど婚活以外を本業とする団体も含まれています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>協賛団体の所在地</th><th className={th}>団体数（当サイト集計）</th></tr></thead>
                <tbody>
                  {sponsorsByCity.map((s) => (
                    <tr key={s.city} className="border-t border-[#E5DCCF] align-top"><td className={td}>{s.city}</td><td className={td}>{s.n}団体</td></tr>
                  ))}
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>計</td><td className={td}>{sponsorTotal}団体</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              2026年11月21日にあいぷろのイベント情報ページを確認したところ、同日以降の11月開催分として4件が掲載されており、うち公的な団体の主催は榛東村の1件でした（当サイトが数えた値）。開催件数は時期によって変わりますので、目安としてご覧ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={AIPRO_URL} {...ext}>ぐんまスマイルライフ「ぐんま赤い糸プロジェクト」</a>・<a href={AIPRO_YOUKOU_URL} {...ext}>群馬県「ぐんま赤い糸プロジェクト事業実施要綱」（PDF）</a>・<a href={AIPRO_LIST_URL} {...ext}>「あいぷろ協賛団体一覧（令和8年8月現在）」（PDF）</a>（いずれも2026年11月21日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">市町村の結婚相談（館林市・桐生市・伊勢崎市）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>館林市 婚活応援相談</th><th className={th}>桐生市社会福祉協議会 結婚相談</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象</td><td className={td}>結婚を希望する独身男女</td><td className={td}>成人の独身者。男性は桐生市・みどり市に在住または桐生市に在勤の方（女性は住所の条件なし）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>費用</td><td className={td}>利用料無料</td><td className={td}>相談は無料（登録料の記載なし）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>相談日</td><td className={td}>第2日曜日 13:00〜16:00（男性のみ）、第4日曜日 13:00〜16:00（女性のみ）。事前予約制で、相談日の1週間前の金曜日から受付</td><td className={td}>第1・第3土曜日 13:30〜15:30、第2・第4水曜日 18:30〜20:30（受付は終了の30分前まで。祝日・年末年始を除く）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会場</td><td className={td}>総合福祉センター</td><td className={td}>桐生市総合福祉センター 3階 301会議室</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>全身写真2枚、証明写真（縦4cm×横3cm）1枚、独身証明書、身分証明書</td><td className={td}>独身証明書1通、スナップ写真2枚（郵送での登録も可）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録期間</td><td className={td}>公式には記載がありません</td><td className={td}>登録日から3年間（再登録可）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>仕組み</td><td className={td}>登録者の中から会ってみたい相手を探し、館林市社会福祉協議会が委嘱した婚活応援支援員が調整。両者が合意すると相談員の立ち会いでお見合い</td><td className={td}>相談員に希望を伝え、相談員が相手に連絡。相手が登録カードを確認して返事をし、合意すれば相談員が日程を調整して開設時間中にお見合い</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>問合せ</td><td className={td}>館林市社会福祉協議会 地域福祉課（0276-75-7111）</td><td className={td}>桐生市社会福祉協議会（0277-46-4165）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              桐生市社会福祉協議会は、第2・第4水曜日の相談を一時中止していましたが、令和8年3月11日から再開しています。同会は、2026年12月13日にクリスマスミニ婚活パーティー（55歳以下の独身者・男女各5名・参加費500円、申込期限11月27日）も開催します。桐生市社協の結婚相談は、あいぷろと連携していると案内されています。
            </p>
            <p>
              伊勢崎市社会福祉協議会の結婚相談所は、新たな登録者が増えずに減少・固定化したこと、若い世代ではマッチングアプリの活用が主流になっていることを理由に、<strong>令和8年4月から当面の間、相談業務を休止</strong>しています。令和7年11月10日以降、新規登録は受け付けていません。問い合わせ先は同会の地域福祉推進課（0270-25-4546）です。
            </p>
            <p>
              県内のほかの市町村の結婚相談については、当サイトでは公式の一覧を確認できていません。お住まいの市町村役場や社会福祉協議会に、結婚相談の有無をお問い合わせください。結婚後の費用については、館林市など多くの市町村が新婚世帯の住居費・引越費用を補助する結婚新生活支援事業を実施しています（館林市の令和7年度の例：婚姻日に夫婦とも39歳以下・所得合計500万円未満の世帯に、夫婦とも29歳以下は上限60万円、それ以外は上限30万円）。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TATEBAYASHI_URL} {...ext}>館林市「婚活応援相談」</a>・<a href={KIRYU_URL} {...ext}>桐生市社会福祉協議会「結婚相談」</a>・<a href={KIRYU_RESTART_URL} {...ext}>「結婚相談の再開について」</a>・<a href={KIRYU_HOWTO_URL} {...ext}>「登録方法」（PDF）</a>・<a href={KIRYU_SHIKUMI_URL} {...ext}>「相談のしくみ」（PDF）</a>・<a href={KIRYU_PARTY_URL} {...ext}>「クリスマスミニ婚活パーティー」チラシ（PDF）</a>・<a href={ISESAKI_URL} {...ext}>伊勢崎市社会福祉協議会「結婚相談所 相談業務の休止について（お知らせ）」（PDF）</a>・<a href={TATEBAYASHI_SHINSEIKATSU_URL} {...ext}>館林市「令和7年度 館林市結婚新生活支援事業」（PDF）</a>（いずれも2026年11月21日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚応援パスポート「コンパス」と、県のその他の取組</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>ぐんま結婚応援パスポート（コンパス）</td><td className={td}>新婚・結婚予定のカップルに無料で配付されるカード。協賛店舗で提示すると割引やプレゼントなどの特典を受けられる。2人のどちらかが県内に居住・通学・通勤していることが条件</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>受け取り方</td><td className={td}>県内市町村の窓口に業務時間内に婚姻届を提出した場合はその窓口で交付。それ以外の方は県庁への持参・郵送・電子申請で申請</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>有効期間</td><td className={td}>新婚カップルは結婚した日から2年間、結婚予定カップルは発行日から2年間（合わせて最長4年間）。茨城県「iPASS」・栃木県「とちマリ」の協賛店舗でも利用可</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>婚活体験レポート集</td><td className={td}>県が、各種婚活サービスを利用した県民（独身者・成婚者）6組8名に取材してまとめたもの（令和7年3月公開）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>東京都との連携</td><td className={td}>東京都の結婚応援キャンペーンを契機に、両都県のサイトで結婚支援イベントの情報を相互に発信（2026年10月発表）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              コンパスは平成28年10月に群馬県が初めて導入した制度で、令和8年は10周年としてオリジナル婚姻届も配布されています。県の婚活体験レポート集では、結婚相談所について「“出会い”だけでなく、会員に“結婚”してもらうことに重きを置いている場合が多い」と説明されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={KONPASS_URL} {...ext}>ぐんまスマイルライフ「ぐんま結婚応援パスポート」</a>・<a href={KONPASS_PDF_URL} {...ext}>群馬県「コンパス」チラシ（PDF）</a>・<a href={KONIN_PRESS_URL} {...ext}>群馬県 報道資料「群馬県オリジナル婚姻届を配布します！」（令和8年10月30日・PDF）</a>・<a href={REPORT_URL} {...ext}>群馬県「『婚活体験レポーター』の記事を公開します」</a>・<a href={REPORT_PDF_URL} {...ext}>「婚活体験レポート集 表紙・はじめに・目次」（PDF）</a>・<a href={TOKYO_URL} {...ext}>ぐんまスマイルライフ「東京都との結婚支援に係る相互連携について」</a>・<a href={PORTAL_URL} {...ext}>ぐんまスマイルライフ「出会い・結婚」</a>（いずれも2026年11月21日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>特徴</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>群馬県「あいぷろ」</td><td className={td}>登録不要。イベントの参加費は個人負担（例：桐生市社協のミニ婚活パーティー500円）</td><td className={td}>出会いイベントの情報発信。お見合いの仲介は行っていない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>館林市 婚活応援相談</td><td className={td}>利用料無料</td><td className={td}>登録制・相談員の立ち会いでお見合い。相談日は月2回（男女別）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>桐生市社会福祉協議会 結婚相談</td><td className={td}>相談無料</td><td className={td}>登録期間3年。男性は桐生市・みどり市在住または桐生市在勤</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/nagano/" className="text-[#A08447] underline">長野県「NAGANO ai MATCH」</Link></td><td className={td}>システム登録料10,000円（2年間）</td><td className={td}>市町村などの公的結婚相談所に登録して使うマッチングシステム</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/niigata/" className="text-[#A08447] underline">新潟県「ハートマッチにいがた」</Link></td><td className={td}>20〜39歳は入会登録料無料、40歳以上11,000円（2年間）。お引合せごとに1人2,100円</td><td className={td}>にいがた出会いサポートセンターのマッチングシステム。登録期間2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              群馬県では、長野県や新潟県のような県単位のマッチングシステムがなく、公的な登録制の結婚相談は館林市・桐生市などの一部の地域に限られます。対象地域に住んでいる方は、まず無料の結婚相談を利用し、あわせてあいぷろのイベントに参加する方法が費用を抑えられます。対象地域外の方や、担当者によるお相手の提案・交際中の継続的な相談を求める方は、民間の結婚相談所が選択肢になります。群馬県内から利用できるオンライン型の結婚相談所や、埼玉県・東京都の結婚相談所も選択肢になります。入会前に1年間の総額を各社へ確認することをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。長野県・新潟県の料金は、各公式サイトで2026年11月18日に確認した内容で、変更される場合があります。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/nagano/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">NAGANO ai MATCH（長野県）</Link>
            <Link href="/knowledge/niigata/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ハートマッチにいがた（新潟県）</Link>
            <Link href="/knowledge/yamanashi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">山梨県の結婚支援</Link>
            <Link href="/knowledge/gifu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">おみサポ・ぎふ（岐阜県）</Link>
            <Link href="/knowledge/tochigi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">とちぎ結婚支援センター（栃木県）</Link>
            <Link href="/area/saitama/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">埼玉の結婚相談所</Link>
            <Link href="/area/tokyo/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">東京の結婚相談所</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
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
