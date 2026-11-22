import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-22 確認）。
// ・入会登録料10,000円（2年間）・お引合せ料2,000円（オンラインは無料）・閲覧方法（センターのタブレット／自宅、1日1回45分）・登録の流れ・成婚記念品：とくしまマリッジサポートセンター（マリッサとくしま）「マッチング」
// ・入会条件（県内在住・在勤・移住希望、18歳以上の独身、年齢上限なし）・会員期間2年・途中退会時の返金なし・成婚料なし：同「マッチング」のQ&A
// ・申込み1回3人まで・意思確認の期間・回答期限4日・当日キャンセル料4,000円・お引合せ後3日以内の回答・交際成立後の連絡先の伝達・自宅閲覧の時間帯：同「マッチング会員利用規約」（2025年1月4日改訂・PDF）
// ・健康保険証を必要書類から削除（2025年1月4日改訂）：同 お知らせ「マッチング会員利用規約一部改訂のお知らせ」（2024年12月28日）
// ・必要書類（独身証明書・写真付き身分証・プロフィール写真・誓約書・登録料）と代理登録：同「会員登録に必要な書類等」（PDF）
// ・お引合せ料の改定（2024年10月1日に1,700円→2,000円）：同 お知らせ（2024年9月1日）
// ・所在地・開所時間・休館日・駐車場：同「会場案内」・トップページ
// ・マッチング会員数・メルマガ会員数・イベント会員数・カップル成立数・成婚者数（10月末）：同 お知らせ「10月末♥マッチング会員数等報告」（2026年11月7日）
// ・マッチング体験会（2026年11月27日）：同 お知らせ（2026年10月26日）
// ・システムのメンテナンス告知（2026年11月19日）以外に事業の休止・変更のお知らせがないこと：同 トップページのお知らせ欄（当サイトが同日に確認）
// ・県の委託で運営、令和8年度の委託期間、登録期間2年・登録料10,000円の定め、マッチング会員1,000人以上・成婚30組以上の目標、県南部・県西部の出張窓口（各12回）、委託費用の上限24,625千円：徳島県「令和8年度とくしまマリッジサポートセンター運営事業委託業務 仕様書」「同 企画提案募集要項」（PDF）
// ・登録に年齢制限・所得制限なし：徳島県「令和8年度結婚意識に関する調査研究事業委託業務仕様書」（PDF）
// ・市町村の結婚支援事業一覧（掲載23市町村、徳島市の掲載なし）・各市町村の登録料補助の内容：マリッサとくしま「市町村結婚支援事業一覧」（掲載数・補助の市町村数は当サイトが数えた値）
// ・阿波市（全額・1回限り・イベント参加費の補助）：阿波市「出逢い応援事業について」（2026年4月1日公開）
// ・勝浦町（全額・上限10,000円・イベント参加費上限2,000円）：勝浦町「出逢い応援事業」（2025年5月29日公開）
// ・三好市（1/2・上限5,000円・1回限り）：三好市「マリッサとくしまマッチング会員登録補助事業」
// ・海陽町（1/2・1回まで）：海陽町「『マリッサとくしま』マッチングシステム会員登録補助事業」（2025年6月9日公開）
// ・東みよし町（10,000円を全額・1回まで）：東みよし町「未婚男女の出逢いを応援」
// ・香川県・岡山県・大分県のセンターの料金：当サイト /knowledge/takamatsu/・/knowledge/okayama/・/knowledge/oita/ の確認内容
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const TOP_URL = "https://www.msc-tokushima.jp/";
const MATCHING_URL = "https://www.msc-tokushima.jp/matching";
const ACCESS_URL = "https://www.msc-tokushima.jp/matching/info.php";
const TERMS_URL = "https://www.msc-tokushima.jp/app/wp-content/uploads/2024/12/【R7.1改訂溶込】マッチング会員利用規約.pdf";
const TERMS_NEWS_URL = "https://www.msc-tokushima.jp/matchings/789/";
const DOCS_URL = "https://www.msc-tokushima.jp/app/wp-content/themes/msc-tokushima/pdf/matching_syorui.pdf";
const FEE_NEWS_URL = "https://www.msc-tokushima.jp/matchings/308/";
const MEMBERS_URL = "https://www.msc-tokushima.jp/info/2698/";
const TAIKEN_URL = "https://www.msc-tokushima.jp/info/2673/";
const SHIEN_URL = "https://www.msc-tokushima.jp/company/shienjigyo_list.php";
const PREF_SPEC_URL = "https://www.pref.tokushima.lg.jp/file/attachment/1037986.pdf";
const PREF_YOUKOU_URL = "https://www.pref.tokushima.lg.jp/file/attachment/1037985.pdf";
const PREF_SURVEY_URL = "https://www.pref.tokushima.lg.jp/file/attachment/1037959.pdf";
const AWA_URL = "https://www.city.awa.lg.jp/docs/2023020100022/";
const KATSUURA_URL = "http://www.town.katsuura.lg.jp/docs/2022062000024/";
const MIYOSHI_URL = "https://www.miyoshi.i-tokushima.jp/docs/709170.html";
const KAIYO_URL = "https://www.town.kaiyo.lg.jp/docs/2024110700016";
const HIGASHIMIYOSHI_URL = "https://www.town.higashimiyoshi.lg.jp/docs/4105281.html";

// マリッサとくしま お知らせ「10月末♥マッチング会員数等報告」（2026年11月7日）
const stats = { members: 616, m: 382, f: 234, mailmag: 3146, eventUsers: 4450, eventM: 2018, eventF: 2432, couples: 3172, seikon: 206 };

// マリッサとくしま「市町村結婚支援事業一覧」に掲載されたマッチング登録料の補助（当サイトが一覧から抜き出した値）
const subsidies = [
  { town: "阿波市", detail: "登録料の全額（申請は1回限り）。マリッサとくしまの応援企業・団体が主催するカップリングのある婚活イベントの参加費も半額相当を補助（上限は市・市指定管理者の主催2,000円、それ以外1,000円）", src: "市公式で確認" },
  { town: "三好市", detail: "実際に支払った登録料の2分の1（上限5,000円）。1人につき1回限り、登録した年度内に申請", src: "市公式で確認" },
  { town: "勝浦町", detail: "登録料の全額（上限10,000円）。応援企業・団体が主催する婚活イベントの参加費も1回あたり上限2,000円を補助", src: "町公式で確認" },
  { town: "上勝町", detail: "「かみかつQぴっと」が登録料の全額を補助", src: "一覧の記載" },
  { town: "佐那河内村", detail: "県内の結婚活動サポート事業者が運営するマッチングシステムの入会料・会員登録料を1回につき上限1万円まで補助（回数制限なし。千円未満切り捨て）", src: "一覧の記載" },
  { town: "石井町", detail: "県内に事業所を置く結婚サポート事業者のマッチングサービスの入会・会員登録料の2分の1（1人2回まで・合計3万円が上限）。対象は18歳から50歳までの独身の方", src: "一覧の記載" },
  { town: "海陽町", detail: "登録料の2分の1（補助対象者1人に対し1回まで）。キャンペーン等で登録料が変わった場合は個人負担が5,000円となるよう補助", src: "町公式で確認" },
  { town: "松茂町", detail: "登録料の2分の1。松茂町に住民票があり、1年以上居住している方", src: "一覧の記載" },
  { town: "上板町", detail: "登録料の2分の1", src: "一覧の記載" },
  { town: "東みよし町", detail: "登録料10,000円（2年間）を予算の範囲内で全額補助（1人1回まで）", src: "町公式で確認" },
];
const listedTowns = 23; // 一覧に掲載されている市町村の数（県内24市町村のうち、徳島市の掲載なし）

export const metadata: Metadata = {
  title: "徳島県で結婚相談所を探す方へ｜県の「マリッサとくしま」は2年1万円・成婚料なし、10市町村の登録料補助と民間との費用比較",
  description:
    "徳島県のマリッサとくしまは徳島駅前のアミコ東館にあり、1対1のマッチングの入会登録料は2年間10,000円、成婚料はかかりません。登録条件と必要書類、お引合せの費用、会員616名・成婚者数206組、10市町村の登録料補助、民間との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/tokushima/" },
};

const faqs = [
  {
    q: "マリッサとくしまのマッチングの料金はいくらですか？",
    a: "公式サイトでは、入会登録料は10,000円（2年間）です。成婚料は一切かからないと案内されています。お引合せのたびに1人2,000円がかかり、オンラインでのお引合せは無料です。登録後に一度も閲覧やお引合せを利用しなくても、退会時の返金はありません。お引合せ当日にキャンセルした場合は、キャンセル料として一律4,000円がかかります。",
  },
  {
    q: "徳島市に登録料の補助はありますか？",
    a: "マリッサとくしまの「市町村結婚支援事業一覧」には23市町村が掲載されていますが、徳島市は掲載されていません（2026年11月22日確認）。登録料の補助が掲載されているのは、阿波市・三好市・勝浦町・上勝町・佐那河内村・石井町・海陽町・松茂町・上板町・東みよし町の10市町村です。徳島市独自の制度の有無は、徳島市の担当窓口でご確認ください。",
  },
  {
    q: "県外に住んでいても登録できますか？何歳まで登録できますか？",
    a: "登録できるのは、結婚を希望する18歳以上の独身の方で、徳島県内にお住まいの方、県内にお勤めの方、または徳島県への移住を希望される方です。公式サイトのQ&Aでは、18歳以上であれば年齢の上限はないと案内されています。原則としてインターネットに接続でき、本人のメールアドレスを登録できることも条件です。",
  },
  {
    q: "一度に何人まで申し込めますか？",
    a: "利用規約では、お引合せの申込みは1回につき3人までです。希望順にお相手へ申込みが送られ、お相手は原則4日以内に返事をします。意思確認の間はほかの会員のプロフィールを閲覧できず、3人に申し込んだ場合は最長で合計15日間閲覧できないと規約に記載されています。一度申し込むとキャンセルはできません。",
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
  headline: "徳島県で結婚相談所を探す方へ：県の「マリッサとくしま」の料金・登録条件と市町村の登録料補助、民間の結婚相談所との比較",
  description: "徳島県のとくしまマリッジサポートセンター（マリッサとくしま）のマッチングの料金・登録条件・利用規約・会員数と成婚者数、県内市町村の登録料補助、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-22",
  dateModified: "2026-11-22",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/tokushima/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "徳島県の結婚支援（マリッサとくしま）", item: "https://mu-su-bi-ba.com/knowledge/tokushima/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeTokushima() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "徳島県の結婚支援（マリッサとくしま）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          徳島県で結婚相談所を探す方へ：県の「マリッサとくしま」の料金・登録条件と市町村の登録料補助、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月22日（料金・登録条件・利用規約・会員数・市町村の補助は同日にマリッサとくしま公式サイト、委託の内容は徳島県公式サイト、各市町の補助は阿波市・三好市・勝浦町・海陽町・東みよし町の公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />徳島県の「マリッサとくしま」は、2年間10,000円・成婚料なしで1対1のお引合せを利用できます
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>徳島県は、県の委託により「とくしまマリッジサポートセンター（マリッサとくしま）」を運営しています。センターは<strong>JR徳島駅から徒歩3分のアミコ東館7階</strong>にあります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>1対1の「マッチング」の入会登録料は<strong>2年間10,000円</strong>で、<strong>成婚料はかかりません</strong>。お引合せのたびに1人2,000円がかかり、オンラインでのお引合せは無料です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>公式サイトのお知らせでは、マッチング会員は<strong>{stats.members}名</strong>（男性{stats.m}名・女性{stats.f}名）、<strong>成婚者数は{stats.seikon}組</strong>です（10月末の報告）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>阿波市・勝浦町・東みよし町など<strong>{subsidies.length}市町村</strong>が登録料の全額または半額などを補助しています（当サイトが数えた値）。徳島市は市町村の一覧に掲載されていません。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">マリッサとくしまのマッチングの料金と登録条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>徳島県（県の委託により運営。令和8年度の委託期間は令和8年4月1日〜令和9年3月31日）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会登録料</td><td className={td}>10,000円（登録期間2年間）。登録後に一度も閲覧やお引合せを利用しなくても、退会時の返金はなし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>成婚料</td><td className={td}>なし（結婚が決まった場合はマリッサとくしまへの報告を求められる）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お引合せ料</td><td className={td}>1人2,000円（2024年10月1日に1,700円から改定）。オンラインでのお引合せは無料。当日キャンセルの場合はキャンセル料4,000円（銀行振込）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録できる方</td><td className={td}>結婚を希望する18歳以上の独身の方（年齢の上限なし）／徳島県内にお住まいの方、県内にお勤めの方、または徳島県への移住を希望される方／原則としてインターネットに接続でき、本人のメールアドレスを登録できる方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>主な必要書類</td><td className={td}>本籍地の市町村長が発行する独身証明書の原本（発行日から3か月以内。戸籍抄本での代用も可）、写真付きの身分証の原本（運転免許証・マイナンバーカード等）、プロフィール写真1点（3か月以内に撮影した上半身の写真。任意で全身写真1点を追加可）、マッチング会員誓約書（センターで用意）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              登録は、ウェブサイトから入会を申し込み、来所予約をしたうえで、必要書類を持参してセンターで手続きします。本人による登録が難しい場合は、三親等以内の血族が委任状を持参して代理登録できますが、プロフィールの閲覧やお引合せは代理人が行うことはできません。
            </p>
            <p>
              健康保険証は、2025年1月4日改訂の利用規約で必要書類から削除されています。一方で、公式サイトのマッチングのQ&Aには健康保険証の記載が残っています（2026年11月22日確認）。来所前に必要書類をセンターへご確認ください。県の資料では、登録に年齢制限・所得制限はないとされています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MATCHING_URL} {...ext}>マリッサとくしま「マッチング」</a>・<a href={TERMS_URL} {...ext}>「マッチング会員利用規約」（PDF）</a>・<a href={DOCS_URL} {...ext}>「会員登録に必要な書類等」（PDF）</a>・<a href={TERMS_NEWS_URL} {...ext}>お知らせ「マッチング会員利用規約一部改訂のお知らせ」（2024年12月28日）</a>・<a href={FEE_NEWS_URL} {...ext}>お知らせ「お引合せ料価格改定のお知らせ」（2024年9月1日）</a>・<a href={PREF_SPEC_URL} {...ext}>徳島県「令和8年度とくしまマリッジサポートセンター運営事業委託業務 仕様書」（PDF）</a>・<a href={PREF_SURVEY_URL} {...ext}>徳島県「令和8年度結婚意識に関する調査研究事業委託業務仕様書」（PDF）</a>（いずれも2026年11月22日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">お引合せから交際までの流れと利用規約のルール</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>活動は、プロフィールの閲覧、お引合せの申込み、お引合せ、カップリング成立（交際）、結婚の順に進みます。</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>ルール</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>プロフィールの閲覧</td><td className={td}>センターのタブレット端末（マイページから事前予約・1日1回45分）または自宅のスマートフォン等（8:00〜23:59の間に1日1回・最長45分。閲覧できるプロフィールに制限あり）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申込みの上限</td><td className={td}>1回につき希望順位をつけて3人まで。意思確認の間はすべての登録者のプロフィールを閲覧できない（3人に申し込んだ場合、最長で合計15日間）。申込み後のキャンセルは不可</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申込みへの回答</td><td className={td}>申込みを受けた方は原則4日以内に返事をする。返事がないまま4日を過ぎると無効</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お引合せ</td><td className={td}>スタッフまたはボランティアの「阿波の縁むすびサポーター」が立ち会い、センターが指定する応援企業・団体の店舗、またはオンラインで個別に行う。オンラインは双方が希望した場合のみ</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お引合せ後の回答</td><td className={td}>翌日から原則3日以内に、もう一度会いたいかどうかをスタッフまたはサポーターに伝える</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>個人情報の交換</td><td className={td}>交際が成立するまでは行わない。交際成立後、マッチングシステムから氏名と連絡先が双方に伝えられ、スタッフまたはサポーターが交際フォローを始める</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              入籍日が決まったら担当のサポーターとマリッサとくしまに報告し、成婚記念品を受け取って退会する流れです。お相手探しは会員ご自身がシステムで行う仕組みのため、担当者からお相手の提案や継続的な助言を受けたい方は、民間の結婚相談所のサポート内容とあわせて比べることをおすすめします。マリッサとくしまでは、入会を検討している方向けに、2026年11月27日にマッチング体験会（登録方法の説明・システムのデモ体験）を開催すると案内しています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TERMS_URL} {...ext}>マリッサとくしま「マッチング会員利用規約」（PDF）</a>・<a href={MATCHING_URL} {...ext}>「マッチング」</a>・<a href={TAIKEN_URL} {...ext}>お知らせ「11月27日（金）『マッチング体験会』開催のお知らせ」（2026年10月26日）</a>（いずれも2026年11月22日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">センターの所在地と開所日時、会員数・成婚者数</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>所在地</td><td className={td}>徳島市寺島本町西1丁目5番地 アミコ東館7階（JR徳島駅から徒歩3分）／088-656-1002</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>開所日時</td><td className={td}>月・火・金 12:00〜20:00、土・日・祝 10:00〜18:00。水曜・木曜は休み（祝日の場合は開所）。年末年始（12/29〜1/3）は休み</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>駐車場</td><td className={td}>専用駐車場の案内はなく、徳島駅前西地下駐車場・アミコラインパーク（有料）が案内されている</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>出張窓口</td><td className={td}>県の令和8年度の仕様書で、県南部圏域・県西部圏域の公共施設等に、会員登録と閲覧を行う出張窓口をそれぞれ原則月1回以上（各12回）開設することとされている</td></tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目（10月末の報告）</th><th className={th}>人数・組数</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>マッチング会員数</td><td className={td}>{stats.members}名（男性{stats.m}名・女性{stats.f}名）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>イベント会員数</td><td className={td}>{stats.eventUsers.toLocaleString()}名（男性{stats.eventM.toLocaleString()}名・女性{stats.eventF.toLocaleString()}名）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>メルマガ会員数</td><td className={td}>{stats.mailmag.toLocaleString()}名（男性1,618名・女性1,528名）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>カップル成立数</td><td className={td}>{stats.couples.toLocaleString()}組</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>成婚者数</td><td className={td}>{stats.seikon}組</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              マッチング会員は男性が女性の約1.6倍です。カップル成立数・成婚者数の集計期間はお知らせに明記されていないため、当サイトでは目安として掲載しています。なお、公式サイトのトップページには「マッチング会員数 約800名前後で推移」との表示もあり、10月末の報告の人数とは異なります。県の令和8年度の仕様書では、マッチング会員登録者数1,000人以上（令和8年度末時点）、成婚組数30組以上が目標とされています。
            </p>
            <p>
              2026年11月22日に公式サイトのお知らせ欄を確認したところ、事業の休止や料金の変更のお知らせはありませんでした（同月19日に、とくしま結婚支援システムのメンテナンスの告知があります）。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={ACCESS_URL} {...ext}>マリッサとくしま「会場案内」</a>・<a href={TOP_URL} {...ext}>マリッサとくしま トップページ</a>・<a href={MEMBERS_URL} {...ext}>お知らせ「10月末♥マッチング会員数等報告！！」（2026年11月7日）</a>・<a href={PREF_SPEC_URL} {...ext}>徳島県「令和8年度とくしまマリッジサポートセンター運営事業委託業務 仕様書」（PDF）</a>・<a href={PREF_YOUKOU_URL} {...ext}>同「企画提案募集要項」（PDF）</a>（いずれも2026年11月22日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">県内市町村のマッチング登録料の補助</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              マリッサとくしまの「市町村結婚支援事業一覧」には、県内24市町村のうち{listedTowns}市町村の取組が掲載されています。当サイトがこの一覧からマッチングの登録料の補助を抜き出したところ、次の{subsidies.length}市町村が該当しました（2026年11月22日確認）。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>市町村</th><th className={th}>補助の内容</th><th className={th}>確認した情報</th></tr></thead>
                <tbody>
                  {subsidies.map((s) => (
                    <tr key={s.town} className="border-t border-[#E5DCCF] align-top"><td className={td}>{s.town}</td><td className={td}>{s.detail}</td><td className={td}>{s.src}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              全額の補助を受けられる市町村にお住まいの方は、登録料の自己負担なしでマッチングを始められます。ただし、多くの市町村で「1回限り」「予算の範囲内」「登録した年度内に申請」などの条件があり、申請先も市町村の窓口です。佐那河内村と石井町は、マリッサとくしまに限らず、県内の事業者が運営するマッチングサービスを補助の対象としています。
            </p>
            <p>
              徳島市は一覧に掲載されておらず、当サイトでは徳島市の登録料補助を確認できていません。鳴門市・小松島市・美馬市などは、一覧で婚活イベントの開催や結婚新生活支援（住居費・引越費用の補助）が案内されています。補助の内容は年度ごとに変わる場合がありますので、登録前にお住まいの市町村へご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SHIEN_URL} {...ext}>マリッサとくしま「市町村結婚支援事業一覧」</a>・<a href={AWA_URL} {...ext}>阿波市「出逢い応援事業について」</a>・<a href={MIYOSHI_URL} {...ext}>三好市「マリッサとくしまマッチング会員登録補助事業」</a>・<a href={KATSUURA_URL} {...ext}>勝浦町「出逢い応援事業」</a>・<a href={KAIYO_URL} {...ext}>海陽町「『マリッサとくしま』マッチングシステム会員登録補助事業」</a>・<a href={HIGASHIMIYOSHI_URL} {...ext}>東みよし町「未婚男女の出逢いを応援」</a>（いずれも2026年11月22日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>登録の有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>徳島県「マリッサとくしま」マッチング</td><td className={td}>10,000円＋お引合せ1回2,000円（オンラインは無料）。成婚料なし</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/takamatsu/" className="text-[#A08447] underline">香川県「EN-MUSUかがわ」縁結びマッチング</Link></td><td className={td}>10,000円（令和9年3月31日までの新規登録は5,000円）＋お引合せ1回2,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/okayama/" className="text-[#A08447] underline">岡山県「おかやま縁むすびネット」</Link></td><td className={td}>10,000円（2027年3月31日まで無料）＋お引合せ1回2,000円（オンライン1,000円）</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/oita/" className="text-[#A08447] underline">大分県「OITAえんむす部」</Link></td><td className={td}>10,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用だけを比べると、マリッサとくしまは民間の結婚相談所よりも大幅に低く抑えられます。たとえば2年間で対面のお引合せを5回利用した場合でも、登録料10,000円とお引合せ料10,000円の計20,000円が目安で、登録料を全額補助する市町村にお住まいの方はさらに負担が下がります。一方で、お相手探しは会員ご自身が行い、申込みは1回3人までといった上限があります。民間の結婚相談所は、費用がかかる代わりに、担当者によるお相手の提案や交際中の相談などを行うところが多くあります。徳島県内から利用できるオンライン型の結婚相談所や、兵庫県・大阪府の結婚相談所も選択肢になります。入会前に1年間の総額を各社へ確認することをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。香川県のセンターの料金は2026年11月19日、岡山県・大分県のセンターの料金は2026年11月18日に、各センターの公式サイトで確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/kochi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">こうち出会いサポートセンター（高知県）</Link>
            <Link href="/knowledge/takamatsu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">高松市の婚活（EN-MUSUかがわ）</Link>
            <Link href="/knowledge/okayama/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">おかやま縁むすびネット（岡山県）</Link>
            <Link href="/knowledge/hyogo-deai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ひょうご出会いサポートセンター（兵庫県）</Link>
            <Link href="/knowledge/oita/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">OITAえんむす部（大分県）</Link>
            <Link href="/area/kobe/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">神戸の結婚相談所</Link>
            <Link href="/area/osaka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">大阪の結婚相談所</Link>
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
