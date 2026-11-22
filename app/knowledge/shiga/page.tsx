import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-22 確認）。
// ・「しが結」の入会要件（県内在住・在勤または滋賀県に興味や移住希望がある方／独身／概ね50歳まで・未成年者と22歳以下の学生を除く）、利用登録料15,000円（2年間有効）・月会費と成婚料なし、令和8年度に登録料を助成する3市町（草津市・甲賀市・日野町）、登録方法、成婚退会の考え方と県からの贈り物、開所時間（木〜月 11時〜19時）、県庁内にセンターがないこと、独自に結婚支援事業を行う市町（甲賀市・高島市・東近江市・米原市・日野町）：滋賀県「結婚支援センター『しが・めぐりあいサポートセンター「しが結」』」（2026年11月13日更新）
// ・2022年10月開始、AIを活用したマッチングシステム、事業内容：しが結「しが結とは」
// ・AI紹介は毎週水曜日配信、条件検索による申込みは毎月3名、お見合い→お知り合い交際（複数可）→真剣交際（1対1）→成婚退会：しが結「初めての方へ」
// ・入会に必要なもの（写真付き身分証、3か月以内の独身証明書、直近の源泉徴収票など、3か月以内撮影の写真）：しが結「ご入会の流れ」
// ・アクティブ会員数990名・延べマッチング数4,916組・延べ交際成立数1,403組・成婚退会81組（いずれも令和8年7月31日時点）、出張登録会の持ち物：滋賀県 報道発表「『しが結』から本年7月、8月に2組のカップルがご卒業されました！」（2026年8月28日）
// ・令和8年1月31日時点の成婚退会70組：滋賀県 報道発表「『しが結』から1月中に5組のカップルがご卒業されました！」（2026年2月12日）
// ・京都府「きょうと婚活応援センター」との合同イベント（2025年7月・8月）：滋賀県 報道発表（2025年6月25日）
// ・2026年11月21日（大津市）・12月5日（甲賀市）・12月13日（京都市）の出張登録会の告知：しが結 トップページ「センターからのお知らせ」
// ・草津市結婚相談支援費補助金（7,500円・令和8年4月1日〜令和9年3月31日に本登録・先着50件程度・要件）：草津市（2026年4月1日更新）
// ・甲賀市結婚マッチングシステム補助金（1人15,000円・令和8年4月1日以降の登録・要件・必要書類）：甲賀市「甲賀市結婚マッチングシステム補助金」
// ・甲賀市の結婚相談（毎月第1・第3土曜 13時〜16時・まるーむ・登録も相談も無料・市外も可・令和9年1月1日から男性は市内在住・在勤に限る）：甲賀市「結婚相談」
// ・日野町結婚応援補助金（上限5,000円・要件）：日野町（2026年9月15日更新）
// ・東近江市結婚サポート連絡会（登録要件・サポート内容・受付・登録無料・登録期間・閲覧とマッチングの方法）：東近江市「結婚希望者の登録を受け付けています」（令和8年3月26日更新）・「東近江市結婚サポート連絡会 利用について」（PDF）
// ・米原市結婚相談所（月2回・登録と相談は無料・対象・必要書類・有効期限3年）：米原市「結婚相談窓口」（2026年4月1日更新）
// ・高島市「たかしま結びと育ちの応援団」の縁結び相談（高島市の委託事業・対象・登録無料・有効期間は年度末まで）：たかしま結びと育ちの応援団「出会い・結婚」・「縁結び相談利用規約」（PDF）
// ・栃木県・長野県・新潟県のセンター等の料金：当サイト /knowledge/tochigi/・/knowledge/nagano/・/knowledge/niigata/ の確認内容
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値
// ※交際成立率・成婚退会の割合・1年あたりの登録料は、上記の公表値から当サイトが算出した値。

const PREF_CENTER_URL = "https://www.pref.shiga.lg.jp/ja00/11635.html";
const PREF_STATS_URL = "https://www.pref.shiga.lg.jp/ja00/press-release/32742.html";
const PREF_STATS_JAN_URL = "https://www.pref.shiga.lg.jp/ja00/press-release/23640.html";
const PREF_KYOTO_URL = "https://www.pref.shiga.lg.jp/ja00/press-release/12429.html";
const YUI_TOP_URL = "https://shiga-yui.jp/";
const YUI_ABOUT_URL = "https://shiga-yui.jp/about/";
const YUI_GUIDE_URL = "https://shiga-yui.jp/guide/";
const YUI_ENTRY_URL = "https://shiga-yui.jp/entry/";
const KUSATSU_URL = "https://www.city.kusatsu.shiga.jp/kosodate/ninshinshussan/shienteate/kekkonnsoudan.html";
const KOKA_HOJO_URL = "https://www.city.koka.lg.jp/26340.htm";
const KOKA_SOUDAN_URL = "https://www.city.koka.lg.jp/6071.htm";
const HINO_URL = "https://www.town.shiga-hino.lg.jp/0000008224.html";
const HIGASHIOMI_URL = "https://www.city.higashiomi.shiga.jp/ijuu_teijuu/konkatsushien/1006824.html";
const HIGASHIOMI_PDF_URL = "https://www.city.higashiomi.shiga.jp/_res/projects/default_project/_page_/001/006/824/2025_kekkon_riyou.pdf";
const MAIBARA_URL = "https://www.city.maibara.lg.jp/soshiki/kodomo/kodomo/kekkon/504.html";
const TAKASHIMA_URL = "http://musubisodachi.jp/cat-marriage/";
const TAKASHIMA_KIYAKU_URL = "http://musubisodachi.jp/cat-marriage/pdf/enmusubi-kiyaku.pdf";

const fee = 15000;

// 令和8年7月31日時点の公表値（滋賀県 報道発表 2026年8月28日）
const stats = {
  active: 990,
  matching: 4916,
  matchingAi: 2224,
  matchingSearch: 2692,
  kousai: 1403,
  kousaiAi: 581,
  kousaiSearch: 822,
  seikon: 81,
  seikonAi: 28,
  seikonSearch: 53,
};
const seikonJan = 70; // 令和8年1月31日時点

const subsidies = [
  { town: "甲賀市", amount: 15000, note: "1人あたり15,000円。令和8年4月1日以降に登録した方。結婚後も市内に1年以上継続して住む意思があること等" },
  { town: "草津市", amount: 7500, note: "登録料15,000円の半額の7,500円。令和8年4月1日〜令和9年3月31日に本登録し登録料を支払った方。先着順50件程度、予算がなくなり次第終了" },
  { town: "日野町", amount: 5000, note: "上限5,000円。申請する年度にしが結に登録し、町の住民基本台帳に記録されている方。予算がなくなり次第終了する可能性あり" },
];

export const metadata: Metadata = {
  title: "滋賀県で結婚相談所を探す方へ｜県の「しが結」は登録料15,000円・2年間、甲賀市は全額・草津市は半額を補助、市の無料の結婚相談と民間との費用比較",
  description:
    "滋賀県の結婚支援センター「しが結」は利用登録料15,000円（2年間有効）で、月会費・成婚料はかかりません。会員数・成婚退会数の公表値、甲賀市・草津市・日野町の登録料補助、甲賀市・東近江市・米原市・高島市の無料の結婚相談、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/shiga/" },
};

const faqs = [
  {
    q: "しが結の料金はいくらですか？",
    a: "利用登録料は15,000円で、2年間有効です。月会費や成婚料はかかりません（滋賀県「結婚支援センター『しが・めぐりあいサポートセンター「しが結」』」）。令和8年度は、甲賀市（1人15,000円）、草津市（7,500円）、日野町（上限5,000円）が登録料の一部または全額を補助しています。補助の要件や申請期間は各市町のホームページでご確認ください。",
  },
  {
    q: "しが結にはどのような人が登録できますか？",
    a: "県の案内では、県内在住・在勤または滋賀県に興味や移住希望がある方、独身の方（本籍地の市町村が発行する独身証明書で確認）、年齢が概ね50歳までの方（未成年者と22歳以下の学生を除く）の3つをすべて満たす方が対象です。しが結の公式サイトでは、登録時の年齢は本人確認面談時の年齢とされています。",
  },
  {
    q: "しが結の会員数や成婚数はどのくらいですか？",
    a: "県の発表では、令和8年7月31日時点のアクティブ会員数（現在活動中の方）は990名、延べマッチング数は4,916組、延べ交際成立数は1,403組、これまでの成婚退会は81組です。しが結の成婚退会は、お二人が結婚に向けた意思を固めた時点での退会であり、婚姻届の提出と同じ意味ではないと県は説明しています。",
  },
  {
    q: "市町村の結婚相談は無料ですか？",
    a: "当サイトが確認した範囲では、甲賀市の結婚相談（登録も相談も無料）、東近江市結婚サポート連絡会（登録無料）、米原市結婚相談所（登録・相談は無料）、高島市のたかしま結びと育ちの応援団の縁結び相談（登録無料）は、いずれも無料で登録できます。対象となる方の住所の条件や相談日はそれぞれ異なりますので、利用前に各窓口へご確認ください。",
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
  headline: "滋賀県の公的な婚活支援「しが結」の料金・入会条件・会員数と、市町の登録料補助・無料の結婚相談、民間の結婚相談所との比較",
  description: "滋賀県の結婚支援センター「しが結」の料金・入会条件・会員数・成婚退会数、甲賀市・草津市・日野町の登録料補助、甲賀市・東近江市・米原市・高島市の結婚相談、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-22",
  dateModified: "2026-11-22",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/shiga/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "滋賀県の結婚支援（しが結・市町の結婚相談）", item: "https://mu-su-bi-ba.com/knowledge/shiga/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeShiga() {
  const perYear = fee / 2;
  const kousaiRate = ((stats.kousai / stats.matching) * 100).toFixed(1);
  const seikonRate = ((stats.seikon / stats.kousai) * 100).toFixed(1);
  const seikonSinceJan = stats.seikon - seikonJan;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "滋賀県の結婚支援（しが結・市町の結婚相談）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          滋賀県の結婚相談所選び：県の「しが結」の料金・入会条件・会員数、市町の登録料補助と無料の結婚相談、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月22日（料金・入会条件・会員数・市町の補助と結婚相談の条件は同日に滋賀県公式サイト、しが結公式サイト、草津市・甲賀市・日野町・東近江市・米原市の公式サイト、たかしま結びと育ちの応援団のサイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />滋賀県の「しが結」は、利用登録料15,000円で2年間利用できます
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>「しが・めぐりあいサポートセンター『しが結』」は、滋賀県が2022年10月に開設した<strong>オンライン型の結婚支援センター</strong>です。AIを活用したマッチングシステムでお相手の紹介・検索を行い、相談員に交際や結婚の相談ができます。県庁内に窓口はありません。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>利用登録料は<strong>{fee.toLocaleString()}円（2年間有効）</strong>で、<strong>月会費・成婚料はかかりません</strong>。1年あたりに換算すると{perYear.toLocaleString()}円です（当サイト算出）。<strong>令和8年7月31日時点</strong>のアクティブ会員数は{stats.active.toLocaleString()}名、これまでの成婚退会は{stats.seikon}組です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>令和8年度は、<strong>甲賀市が登録料の全額（15,000円）</strong>、<strong>草津市が半額（7,500円）</strong>、日野町が上限5,000円を補助しています。甲賀市・東近江市・米原市・高島市には、<strong>無料で登録できる市の結婚相談</strong>もあります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。しが結は費用を大きく抑えられる一方、登録できるのは県内在住・在勤または滋賀県に興味や移住希望がある、概ね50歳までの独身の方です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">しが結の料金と入会条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>開設</td><td className={td}>滋賀県（担当：子ども若者部 子ども若者政策・私学振興課）。2022年10月にスタートしたオンライン上のセンターで、県庁内にセンターはない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>料金</td><td className={td}>利用登録料15,000円（2年間有効）。月会費・成婚料なし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会の要件</td><td className={td}>次の1〜3をすべて満たす方。1．県内在住・在勤または滋賀県に興味や移住希望がある方　2．独身の方（本籍地の市町村が発行する独身証明書で確認）　3．年齢が概ね50歳までの方（未成年者と22歳以下の学生を除く。登録時の年齢は本人確認面談時の年齢）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要なもの</td><td className={td}>写真付きの身分証明書（運転免許証・パスポート・マイナンバーカードなど）、独身証明書（本籍地の市町村で発行される3か月以内のもの）、直近の源泉徴収票などの収入を確認できる書類、写真（3か月以内に撮影したもの）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録の流れ</td><td className={td}>しが結のホームページから仮登録 → 本人確認面談（オンラインまたは出張会員登録会で対面。いずれも予約制）→ 会員番号の通知 → マイページでプロフィール登録・必要書類のアップロード・利用登録料の支払い → 紹介開始</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>開所時間</td><td className={td}>木曜日〜月曜日 11時〜19時（火・水曜日と年末年始は休所。火・水曜日が祝日の場合は営業し、祝日の翌日を休所）。電話 050-1791-5830</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              出張会員登録会は県内各地で開催されており、当日の持ち物は写真付きの本人確認書類の原本のみで、利用登録料・独身証明書・収入証明書は持参不要と案内されています。しが結の公式サイトでは、2026年12月5日に甲賀市、12月13日に京都市で出張登録会を開催すると告知されています（2026年11月22日確認）。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_CENTER_URL} {...ext}>滋賀県「結婚支援センター『しが・めぐりあいサポートセンター「しが結」』」</a>・<a href={YUI_ABOUT_URL} {...ext}>しが結「しが結とは」</a>・<a href={YUI_ENTRY_URL} {...ext}>しが結「ご入会の流れ」</a>・<a href={YUI_TOP_URL} {...ext}>しが結 トップページ（センターからのお知らせ）</a>・<a href={PREF_STATS_URL} {...ext}>滋賀県 報道発表（2026年8月28日）</a>（いずれも2026年11月22日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">お見合いまでの流れと、会員数・成婚退会数</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>マイページでプロフィール・自己PR・希望条件を入力する（行動価値観テスト「EQアセスメントテスト」の受検は任意）</li>
              <li>AIによる紹介が毎週水曜日に配信される（紹介のない週もある）。条件検索で希望するお相手に申し込めるのは毎月3名まで</li>
              <li>お見合いが承諾されるとマイページで日程を調整し、お見合い後は翌日中に交際の可否を回答する</li>
              <li>お互いが希望すれば「お知り合い交際」に進む。この段階では複数の方との交際も可能</li>
              <li>合意のうえで1対1の「真剣交際」に進み、結婚に向けて意思が固まると成婚退会となる</li>
            </ol>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目（令和8年7月31日時点）</th><th className={th}>公表値</th><th className={th}>内訳</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>アクティブ会員数（現在活動中の方）</td><td className={td}>{stats.active.toLocaleString()}名</td><td className={td}>―</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>延べマッチング数</td><td className={td}>{stats.matching.toLocaleString()}組</td><td className={td}>AI紹介{stats.matchingAi.toLocaleString()}組、検索サービス{stats.matchingSearch.toLocaleString()}組</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>延べ交際成立数</td><td className={td}>{stats.kousai.toLocaleString()}組</td><td className={td}>AI紹介{stats.kousaiAi}組、検索サービス{stats.kousaiSearch}組</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>これまでの成婚退会</td><td className={td}>{stats.seikon}組</td><td className={td}>AI紹介{stats.seikonAi}組、検索サービス{stats.seikonSearch}組</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              当サイトが上の公表値から算出すると、延べマッチング数に対する延べ交際成立数の割合は約{kousaiRate}％、延べ交際成立数に対する成婚退会の割合は約{seikonRate}％です。いずれも延べ数をもとにした参考値で、登録会員に占める成婚者の割合ではありません。民間の結婚相談所が公表する成婚率とは定義が異なるため、単純な比較はできない点にご注意ください。また、成婚退会は令和8年1月31日時点の{seikonJan}組から7月31日時点の{stats.seikon}組へ、半年間で{seikonSinceJan}組増えています（当サイト算出）。
            </p>
            <p>
              県は、しが結の成婚退会は「婚姻届を提出された」という意味ではないと説明しています。成婚退会となったお二人には、県からお祝いのメッセージと、ワイン・わばらブーケ・信楽焼ペアカップのうち希望の1品が贈られます。2025年には、京都府の「きょうと婚活応援センター」と連携し、両センターの会員を対象とした婚活イベントを滋賀県と京都府で開催しました。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={YUI_GUIDE_URL} {...ext}>しが結「初めての方へ」</a>・<a href={PREF_STATS_URL} {...ext}>滋賀県 報道発表「『しが結』から本年7月、8月に2組のカップルがご卒業されました！」（2026年8月28日）</a>・<a href={PREF_STATS_JAN_URL} {...ext}>同「『しが結』から1月中に5組のカップルがご卒業されました！」（2026年2月12日）</a>・<a href={PREF_CENTER_URL} {...ext}>滋賀県「結婚支援センター『しが結』」</a>・<a href={PREF_KYOTO_URL} {...ext}>滋賀県 報道発表「【初開催！】府県の垣根を越えて素敵な縁を結びませんか？」（2025年6月25日）</a>（いずれも2026年11月22日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">しが結の登録料を補助している市町（令和8年度）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              県の案内では、令和8年度に「しが結」の利用登録料の一部助成を実施しているのは草津市・甲賀市・日野町の3市町です。各市町のホームページで確認した内容は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>市町</th><th className={th}>補助額</th><th className={th}>実質の自己負担（当サイト算出）</th><th className={th}>主な要件</th></tr></thead>
                <tbody>
                  {subsidies.map((s) => (
                    <tr key={s.town} className="border-t border-[#E5DCCF] align-top"><td className={td}>{s.town}</td><td className={td}>{s.amount.toLocaleString()}円{s.town === "日野町" ? "（上限）" : ""}</td><td className={td}>{(fee - s.amount).toLocaleString()}円</td><td className={td}>{s.note}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              いずれも、いったん登録料を支払った後に市町へ申請する方式です。草津市は、申請時に住民票の住所が市内にあり、結婚後も市内に住み続ける意思があることなどが要件で、申請先はさわやか保健センター2階のこども若者政策課です。甲賀市は、マイページで本人確認書類・独身証明書・写真・年収証明書の提出が済んでいることがわかる画面の印刷や住民票などを添えて申請します。いずれの補助も1人1回限りです。
            </p>
            <p>
              上記以外の市町にお住まいの方は、令和8年度の登録料補助を県の案内では確認できませんでした。補助の内容は年度ごとに変わる場合がありますので、申請前に各市町へご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_CENTER_URL} {...ext}>滋賀県「結婚支援センター『しが結』」</a>・<a href={KUSATSU_URL} {...ext}>草津市「草津市結婚相談支援費補助金」</a>・<a href={KOKA_HOJO_URL} {...ext}>甲賀市「甲賀市結婚マッチングシステム補助金」</a>・<a href={HINO_URL} {...ext}>日野町「しがめぐりあいサポートセンター『しが結』への登録費用補助制度のご案内」</a>（いずれも2026年11月22日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">市の結婚相談（甲賀市・東近江市・米原市・高島市）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              県のページで「独自で結婚支援事業を実施」している市町として紹介されているうち、登録制でお相手との引き合わせを行う結婚相談の内容を当サイトが確認できたのは次の4市です。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>窓口</th><th className={th}>費用</th><th className={th}>対象</th><th className={th}>相談日・会場</th><th className={th}>登録期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>甲賀市 結婚相談</td><td className={td}>登録も相談も無料</td><td className={td}>市外の方も登録・相談が可能。令和9年1月1日から、男性の登録は市内在住・在勤の方に限る</td><td className={td}>毎月第1・第3土曜日 13時〜16時、甲賀市まちづくり活動センター「まるーむ」。事前申込不要（初回は顔または全身の写真1枚を持参）</td><td className={td}>公式には記載がありません</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>東近江市結婚サポート連絡会</td><td className={td}>登録無料（対面時のサポーターのお茶代等は登録者負担）</td><td className={td}>市内在住または結婚後に市内に定住する意思のある、20歳以上の独身の方</td><td className={td}>平日9時〜16時に市役所企画課窓口。休日受付は月1回、市内のコミュニティセンター（事前予約制）</td><td className={td}>令和9年3月31日まで（更新は3回まで）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>米原市結婚相談所</td><td className={td}>登録・相談は無料</td><td className={td}>市内在住または結婚後に市内に住む意思のある、20歳以上の独身の方</td><td className={td}>毎月2回（第2日曜日・第4土曜日 9時30分〜正午）、市役所本庁舎3階会議室。原則事前予約制</td><td className={td}>登録日から3年間（更新可）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>高島市 たかしま結びと育ちの応援団（縁結び相談）</td><td className={td}>登録無料</td><td className={td}>高島市在住・在勤、または結婚後に高島市に住む意思のある独身の方。性別・年齢・結婚歴は問わない</td><td className={td}>応援団事務所（高島市新旭町旭）。電話 0740-28-7233</td><td className={td}>登録日からその年度末（3月31日）まで（更新の案内あり）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              東近江市は、まちづくり協議会等から推薦を受けた結婚支援担当者（サポーター）が対面に同席する仕組みで、登録者は事務局などで異性の登録シートを閲覧し、1回につき3名までマッチングを申し込めます。米原市は、市長が委嘱した市内在住の相談員が相談を受け、開設日に1回30分以内でお相手のプロフィールカードを閲覧して、1回につき1人までお会いする機会を調整します。登録には独身証明書（発行から3か月以内）と写真、顔写真入りの本人確認書類が必要です。
            </p>
            <p>
              高島市の縁結び相談は、高島市の委託事業として「たかしま結びと育ちの応援団」が実施しており、サポートグループ「縁結びグループ結人」のサポーターが引き合わせや交際のフォローを行います。受付時間はサイトと利用規約で記載が異なるため、来所前に電話でご確認ください。日野町も県のページで独自の結婚支援事業を行う町として紹介されていますが、当サイトが確認できたのは前述の登録料補助のみです。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={KOKA_SOUDAN_URL} {...ext}>甲賀市「結婚相談」</a>・<a href={HIGASHIOMI_URL} {...ext}>東近江市「結婚希望者の登録を受け付けています」</a>・<a href={HIGASHIOMI_PDF_URL} {...ext}>「東近江市結婚サポート連絡会 利用について」（PDF）</a>・<a href={MAIBARA_URL} {...ext}>米原市「結婚相談窓口」</a>・<a href={TAKASHIMA_URL} {...ext}>たかしま結びと育ちの応援団「出会い・結婚」</a>・<a href={TAKASHIMA_KIYAKU_URL} {...ext}>「縁結び相談利用規約」（PDF）</a>・<a href={PREF_CENTER_URL} {...ext}>滋賀県「結婚支援センター『しが結』」</a>（いずれも2026年11月22日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス・条件</th><th className={th}>登録費用の目安</th><th className={th}>登録の有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>しが結（通常）</td><td className={td}>15,000円（1年あたり換算7,500円）。月会費・成婚料なし</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>同・甲賀市在住（市の補助を利用）</td><td className={td}>実質0円（登録料を支払った後に補助）</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>同・草津市在住（市の補助を利用）</td><td className={td}>実質7,500円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>同・日野町在住（町の補助を利用）</td><td className={td}>実質10,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>甲賀市・東近江市・米原市・高島市の結婚相談</td><td className={td}>登録無料</td><td className={td}>窓口ごとに異なる（上の表を参照）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/tochigi/" className="text-[#A08447] underline">栃木県「とちぎ結婚支援センター」</Link></td><td className={td}>入会登録料10,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/nagano/" className="text-[#A08447] underline">長野県「NAGANO ai MATCH」</Link></td><td className={td}>システム登録料10,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/niigata/" className="text-[#A08447] underline">新潟県「ハートマッチにいがた」</Link></td><td className={td}>20〜39歳は入会登録料無料、40歳以上11,000円。お引合せごとに1人2,100円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              上の表は、公式に公表されている登録料と市町の補助額から当サイトが整理した目安です。しが結の費用には、お見合いの際の交通費や飲食代などは含まれません。費用だけを比べると、しが結や市の結婚相談は民間の結婚相談所よりも大幅に低く抑えられます。一方で、しが結は概ね50歳までという年齢の目安があり、相談員への相談は開所時間内に限られます。市の結婚相談は、対象となる住所や相談日が限られます。
            </p>
            <p>
              民間の結婚相談所は、費用がかかる代わりに、担当者がお相手を提案したり、交際中の相談に継続的に応じたりするところが多くあります。滋賀県内から利用できるオンライン型の結婚相談所や、京都府・大阪府の結婚相談所も選択肢になります。費用と支援の手厚さのどちらを重視するかを整理したうえで、公的な窓口と民間の結婚相談所を比べることをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。栃木県・長野県・新潟県の料金は、当サイトの各ページで各公式サイトの情報を確認した内容です。料金や補助の内容は変更される場合があります。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/fukui/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ふく恋（福井県）</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/area/kyoto/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">京都の結婚相談所</Link>
            <Link href="/area/osaka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">大阪の結婚相談所</Link>
            <Link href="/knowledge/fukuchiyama/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">福知山市の婚活支援（京都府）</Link>
            <Link href="/knowledge/mie/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">みえむすび（三重県）</Link>
            <Link href="/knowledge/gifu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">おみサポ・ぎふ（岐阜県）</Link>
            <Link href="/knowledge/hyogo-deai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ひょうご出会いサポートセンター（兵庫県）</Link>
            <Link href="/knowledge/ishikawa/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">いしかわ結婚支援センター（石川県）</Link>
            <Link href="/knowledge/tochigi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">とちぎ結婚支援センター（栃木県）</Link>
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
