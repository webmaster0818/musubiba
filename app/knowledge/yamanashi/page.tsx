import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-20 確認）。
// ・20代の初期費用支援（対象者・最大10万円・対象期間・利用の流れ）：婚活やまなし「【20代応援】婚活スタート！最大10万円サポート」、山梨県 報道発表（令和8年7月17日）
// ・補助の仕組み（県に登録した民間相談所が初期費用を免除・割引し、県が10分の10・1人10万円まで補助）、相談所の登録要件（連盟加盟100社以上・専任担当者・成婚料と月会費の設定）：山梨県「縁結び応援事業費補助金について」・同交付要綱
// ・対象結婚相談所の数18件・第三者認証の取得4件：山梨県「縁結び応援事業費補助金の対象となる結婚相談所（令和8年9月28日時点）」PDFの掲載を当サイトが数えた値
// ・やまなし縁結び応援センター（相談無料・所在地・電話・開所時間・予約制・運営受託）：婚活やまなし「やまなし縁結び応援ネットワーク」、同ページ掲載のセンターのチラシ（PDF）
// ・ネットワークの構築（令和5年度）・センターの業務内容：山梨県「令和7年度やまなし縁結び応援ネットワーク運営業務委託仕様書」。受託者：同 選定結果一覧表。令和8年度の受託者：令和8年度やまなし結婚支援コーディネーターチラシ
// ・結婚支援コーディネーターの役割と担当地区：令和8年度やまなし結婚支援コーディネーターチラシ（PDF）
// ・出会いイベント（縁結びサポーターの条件、県主催イベント）：婚活やまなし「婚活をしたい」・トップページのイベント開催情報
// ・やまなし出会いサポートセンター事業の終了：甲州市「【終了】やまなし出会いサポートセンター入会登録料を助成します」（2023年8月21日更新）
// ・市町村の結婚相談窓口6か所：山梨県「市町村の結婚相談・お見合い登録事業窓口一覧表（令和８年度）」PDF
// ・道志村・小菅村の助成、市町村の婚活イベント：山梨県「令和８年度 市町村結婚支援事業一覧表」PDF
// ・長野県のシステム登録料：当サイト /knowledge/nagano/（2026-11-18 確認）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const SUPPORT_URL = "https://www.pref.yamanashi.jp/kekkon-portal/jigyo/oshirase/oshirase097.html";
const HOJYO_URL = "https://www.pref.yamanashi.jp/kosodate/enmusubihojyokin.html";
const YOUKOU_URL = "https://www.pref.yamanashi.jp/documents/126441/kouhuyoukou.pdf";
const LIST_URL = "https://www.pref.yamanashi.jp/documents/126743/kekkonsoudanjyoichiran260928.pdf";
const RELEASE_URL = "https://www.pref.yamanashi.jp/release/kosodate/0807/enmusubihojyokin.html";
const NETWORK_URL = "https://www.pref.yamanashi.jp/kekkon-portal/enmusubi-ouen-nw.html";
const CENTER_PDF_URL = "https://www.pref.yamanashi.jp/documents/113220/r7enmusubicenter.pdf";
const COORDINATOR_URL = "https://www.pref.yamanashi.jp/documents/113220/r8coordinator_chirashi.pdf";
const SPEC_URL = "https://www.pref.yamanashi.jp/documents/119511/03shiyousho.pdf";
const EVENT_URL = "https://www.pref.yamanashi.jp/kekkon-portal/event/index.html";
const PORTAL_URL = "https://www.pref.yamanashi.jp/kekkon-portal/";
const KOSHU_URL = "https://www.city.koshu.yamanashi.jp/docs/2022022500014/";
const MADOGUCHI_URL = "https://www.pref.yamanashi.jp/documents/40109/r8kekkonsoudanmadoguchi.pdf";
const CITY_LIST_URL = "https://www.pref.yamanashi.jp/documents/40109/r8kekkonshienjigyou.pdf";

const agencyCount = 18;
const certifiedCount = 4;

const windows = [
  { city: "都留市", name: "都留市結婚相談所（市民課）", when: "毎月第2・第4水曜日 17:00〜19:00（要予約）", place: "都留市役所会議室等", tel: "0554-46-0170" },
  { city: "南アルプス市", name: "南アルプス市結婚相談所（市民活動支援課）", when: "毎月第3日曜日 13:30〜19:00", place: "南アルプス市市民活動センター", tel: "055-282-6493" },
  { city: "北杜市", name: "北杜市出会いサポートセンター（子育て政策課）", when: "毎週月・金・土曜日、第2・第4日曜日（祝日除く）13:00〜17:00（日曜日は16:00まで）", place: "北杜市高根総合支所内", tel: "0551-42-1332" },
  { city: "上野原市", name: "うえのはら結婚サポートセンター（上野原市結婚相談所）", when: "毎週月・水・金曜日 8:30〜17:15、日曜日 10:00〜12:00（予約制）", place: "福祉センターふじみ内（上野原市社会福祉協議会）", tel: "0554-63-3800" },
  { city: "中央市", name: "中央市結婚相談所（あんしんサポートセンター）", when: "毎月第2土曜日 10:00〜15:00、第3水曜日 18:00〜20:00", place: "中央市立玉穂総合会館内", tel: "055-274-0294" },
  { city: "富士河口湖町", name: "富士河口湖町結婚相談所（富士河口湖町社会福祉協議会）", when: "毎月第1日曜日 10:00〜12:00（相談日の1週間前までに予約）", place: "富士河口湖町町民福祉館ふじやま", tel: "0555-72-1430" },
];

export const metadata: Metadata = {
  title: "山梨県で結婚相談所を探す方へ｜20代は県の補助で入会初期費用が最大10万円減額（対象18社）、無料の県の相談窓口と市町村の結婚相談所",
  description:
    "山梨県では、県内在住・在勤の20〜29歳が県に登録された民間結婚相談所（18社）に新規入会すると、入会料・登録料が最大10万円減額されます。制度の条件、無料の「やまなし縁結び応援センター」、市町村の結婚相談窓口6か所、民間の結婚相談所の費用を公式情報で整理しています。",
  alternates: { canonical: "/knowledge/yamanashi/" },
};

const faqs = [
  {
    q: "山梨県に、県が運営するお見合い（会員登録制）のセンターはありますか？",
    a: "県が設置していた「やまなし出会いサポートセンター」は事業を終了しています（甲州市公式サイトの記載）。2026年11月20日時点で、県の婚活サイト「婚活やまなし」に会員登録制のお見合いサービスの案内はなく、県の結婚支援は、無料の相談窓口「やまなし縁結び応援センター」、出会いイベントの情報提供、20代向けの民間結婚相談所の初期費用支援が中心です。北杜市・上野原市など6市町には、市町村の結婚相談窓口があります。",
  },
  {
    q: "最大10万円の初期費用支援は、誰が使えますか？",
    a: "山梨県内に在住または在勤する未婚の方で、入会時点で20歳以上29歳以下の方が、県に登録された民間結婚相談所に新規入会する場合に使えます。対象は令和8年7月1日から令和9年2月28日までの入会です。入会時に相談所へ「制度を利用したい」と伝えると、入会料・登録料などの初期費用が最大10万円割り引かれます。県外在住の方でも、県内に在勤していれば対象です。",
  },
  {
    q: "初期費用支援を使えば、結婚相談所の費用はかからなくなりますか？",
    a: "支援の対象は入会料・登録料などの初期費用で、月会費と成婚料は対象外です。県の要件では、登録できる相談所は料金体系に成婚料と月会費を設定している事業者に限られているため、入会後は各社の月会費と、成婚した場合の成婚料がかかります。当サイトが料金を確認した民間の結婚相談所22社では、1年で成婚退会した場合の総額は125,400円〜709,500円です。",
  },
  {
    q: "30歳以上の場合、山梨県の公的な支援は何がありますか？",
    a: "初期費用支援は入会時点で29歳以下の方に限られます。年齢の条件に関係なく使えるものとしては、やまなし縁結び応援センターでの無料相談（本人・家族が対象、予約制）、「婚活やまなし」に掲載される出会いイベント、6市町の結婚相談窓口があります。市町村のイベントには20〜40歳代を対象とするものが多く、年齢の条件は各イベントの案内でご確認ください。",
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
  headline: "山梨県の公的な婚活支援：20代の結婚相談所の初期費用支援（最大10万円）・県の相談窓口・市町村の結婚相談所と、民間の結婚相談所との比較",
  description: "山梨県の縁結び応援事業費補助金による20代の初期費用支援、やまなし縁結び応援センター、市町村の結婚相談窓口と、民間の結婚相談所の費用を整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-20",
  dateModified: "2026-11-20",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/yamanashi/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "山梨県の結婚支援（20代の初期費用支援・相談窓口）", item: "https://mu-su-bi-ba.com/knowledge/yamanashi/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeYamanashi() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "山梨県の結婚支援（20代の初期費用支援・相談窓口）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          山梨県の結婚相談所選び：20代の初期費用支援（最大10万円）・県の相談窓口・市町村の結婚相談所と、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月20日（初期費用支援の条件・対象結婚相談所・相談窓口・市町村の窓口は同日に山梨県公式サイト「婚活やまなし」、山梨県の各ページ・資料、甲州市公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />山梨県では、20代が県に登録された民間の結婚相談所に入会すると、初期費用が最大10万円減額されます
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>県内に在住または在勤する<strong>20歳以上29歳以下</strong>の未婚の方が、県に登録された民間結婚相談所に新規入会すると、入会料・登録料などの初期費用が<strong>最大10万円</strong>割り引かれます。対象は<strong>令和8年7月1日〜令和9年2月28日</strong>の入会です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>対象の結婚相談所は<strong>{agencyCount}件</strong>です（令和8年9月28日時点）。割り引かれるのは初期費用だけで、月会費と成婚料は各社の料金どおりかかります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>県が設置していた会員登録制の「やまなし出会いサポートセンター」は事業を終了しています。現在は、県の委託で株式会社山梨中央銀行が運営する<strong>「やまなし縁結び応援センター」が無料で相談</strong>を受けています（予約制）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>都留市・南アルプス市・北杜市・上野原市・中央市・富士河口湖町の<strong>6市町に結婚相談窓口</strong>があります。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">20代の結婚相談所の初期費用支援（縁結び応援事業費補助金）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象者</td><td className={td}>次のすべてを満たす方：山梨県内に在住または在勤する未婚者／入会時点で20歳以上29歳以下／山梨県に登録された結婚相談所に新規入会した方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>支援の内容</td><td className={td}>入会料・登録料などの初期費用を、相談所が免除または割引する（1人あたり最大10万円・消費税等を含む）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象期間</td><td className={td}>令和8年7月1日から令和9年2月28日までに入会した方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>利用の流れ</td><td className={td}>対象の結婚相談所を選ぶ → 入会時に「制度を利用したい」と伝える → 初期費用が最大10万円割り引かれる。補助金の申請は、相談所が入会者の書類を添えて県に行う</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>相談所側の提出書類</td><td className={td}>入会する方の「利用要件確認・誓約書」、年齢と県内在住・在勤が確認できる本人確認書類の写し、入会契約書の写し（交付要綱 第5条）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象外の費用</td><td className={td}>月会費・成婚料（補助の対象は入会料・登録料等の初期費用相当額のみ）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>担当</td><td className={td}>山梨県 総合県民支援局 子育て・次世代サポート課（055-223-1456）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              この制度は、県に事前登録した民間結婚相談所が20代の入会者の初期費用を免除・割引し、県がその額を10分の10の補助率（1人10万円まで）で相談所に補助する仕組みです。初期費用が10万円を下回る相談所では、割り引かれる額は初期費用の額までとなります。県は令和8年7月17日に、この補助金の開始を報道発表しています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SUPPORT_URL} {...ext}>婚活やまなし「【20代応援】婚活スタート！最大10万円サポート」</a>・<a href={HOJYO_URL} {...ext}>山梨県「縁結び応援事業費補助金について」</a>・<a href={YOUKOU_URL} {...ext}>「縁結び応援事業費補助金交付要綱」（PDF）</a>・<a href={RELEASE_URL} {...ext}>山梨県 発表資料「20代の婚活を山梨県が応援」</a>（いずれも2026年11月20日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">対象となる結婚相談所の要件と登録数</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>県の登録要件</td><td className={td}>「やまなし縁結び応援ネットワーク」事業に協力する県内事業者であること／法人登記を行っている加盟事業者数100社以上の結婚相談所連盟団体に加入していること／専任担当者による面接等の継続的サポート体制を有し、料金体系において成婚料及び月会費を設定していること</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>努力義務</td><td className={td}>経済産業省が定める運営基準に基づく第三者認証の取得と、「婚活カウンセラー資格」の取得に努めること</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会後のサポート</td><td className={td}>相談所は、入会した会員が退会するまで、専任担当者による面談等の継続的なサポートを行う（交付要綱 第7条）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象の相談所数</td><td className={td}>{agencyCount}件（令和8年9月28日時点）。うち第三者認証の取得が記載されているのは{certifiedCount}件（当サイトが一覧の表示を数えた値）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              県の一覧には、相談所名・ホームページ・保有資格・第三者認証の取得状況が五十音順で掲載されています。県内の地域の相談所のほか、オーネット・ツヴァイ（甲府店）といった全国展開の相談所の店舗も含まれています。一覧は随時更新されるため、入会を検討する際は県の最新の一覧で対象かどうかをご確認ください。当サイトでは、各社の料金や活動の進め方が自分に合うかどうかを、無料相談の段階で確かめることをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={HOJYO_URL} {...ext}>山梨県「縁結び応援事業費補助金について」</a>・<a href={YOUKOU_URL} {...ext}>「縁結び応援事業費補助金交付要綱」（PDF）</a>・<a href={LIST_URL} {...ext}>「縁結び応援事業費補助金の対象となる結婚相談所（令和8年9月28日時点）」（PDF）</a>（いずれも2026年11月20日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">県の相談窓口「やまなし縁結び応援センター」と出会いイベント</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>位置づけ</td><td className={td}>民間結婚相談所・民間企業・ボランティア・市町村・県で構成する「やまなし縁結び応援ネットワーク」（令和5年度構築）の事務局</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>山梨県の委託により株式会社山梨中央銀行が運営（令和7年度・令和8年度の受託者）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>相談の内容・費用</td><td className={td}>結婚を希望する本人と家族を対象に、婚活の進め方など結婚に至るまでの相談に対応。相談は無料</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>所在地・電話</td><td className={td}>〒400-8601 甲府市丸の内1-20-8 山梨中央銀行／070-7373-1881（相談窓口）。令和7年6月2日に住所・電話番号が変更</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>開所時間</td><td className={td}>月〜金曜日 9:00〜17:00（土日祝・12月31日〜1月3日は休み）。15時以降は電話のみの受付。利用は予約制</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>メール相談</td><td className={td}>準備中（県のページの記載）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              センターには「やまなし結婚支援コーディネーター」が配置されています。令和8年度の案内では4名が地区を分担し、市町村や企業・団体が行う出会いイベントやセミナーの企画を支援しています。個人の方とのお見合いの仲介は、センターの業務として案内されていません。
            </p>
            <p>
              出会いイベントは、県に登録した「やまなし縁結びサポーター」（結婚相談・結婚の斡旋等を業とする事業者は登録できない）が開催するものが「婚活やまなし」に掲載され、地域別・開催月別に探せます。2026年11月20日時点では、県主催の「やまなし恋フェス in 峡中エリア」（2026年12月13日）も掲載されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={NETWORK_URL} {...ext}>婚活やまなし「やまなし縁結び応援ネットワーク」</a>・<a href={CENTER_PDF_URL} {...ext}>「やまなし縁結び応援センター」チラシ（PDF）</a>・<a href={COORDINATOR_URL} {...ext}>「令和8年度やまなし結婚支援コーディネーターチラシ」（PDF）</a>・<a href={SPEC_URL} {...ext}>山梨県「令和7年度やまなし縁結び応援ネットワーク運営業務委託仕様書」（PDF）</a>・<a href={EVENT_URL} {...ext}>婚活やまなし「婚活をしたい」</a>・<a href={PORTAL_URL} {...ext}>婚活やまなし トップページ</a>（いずれも2026年11月20日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">市町村の結婚相談窓口と、婚活費用の助成</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>市町村</th><th className={th}>窓口</th><th className={th}>相談日・時間</th><th className={th}>会場・電話</th></tr></thead>
                <tbody>
                  {windows.map((w) => (
                    <tr key={w.city} className="border-t border-[#E5DCCF] align-top"><td className={td}>{w.city}</td><td className={td}>{w.name}</td><td className={td}>{w.when}</td><td className={td}>{w.place}／{w.tel}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              上の6市町は、県の「市町村の結婚相談・お見合い登録事業窓口一覧表（令和8年度）」に掲載されている窓口です。一覧には登録料や登録条件の記載がないため、費用や対象となる方は各窓口へお問い合わせください。
            </p>
            <p>
              婚活の費用を助成する市町村として、県の「令和8年度 市町村結婚支援事業一覧表」には、道志村（50歳未満の独身者を対象に、婚活イベントの参加費やマッチングアプリの会費を助成）と、小菅村（都留市の婚活業者への入会を補助）が掲載されています。助成額は一覧に記載がありません。このほか多くの市町村が婚活イベントや、新婚世帯の住居費などを助成する結婚新生活支援事業を実施しています。なお、甲州市などが実施していた「やまなし出会いサポートセンター」の入会登録料の助成は、センター事業の終了に伴い受付を終了しています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MADOGUCHI_URL} {...ext}>山梨県「市町村の結婚相談・お見合い登録事業窓口一覧表（令和８年度）」（PDF）</a>・<a href={CITY_LIST_URL} {...ext}>「令和８年度 市町村結婚支援事業一覧表」（PDF）</a>・<a href={KOSHU_URL} {...ext}>甲州市「【終了】やまなし出会いサポートセンター入会登録料を助成します」</a>（いずれも2026年11月20日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県の公的な仕組み・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>特徴</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>山梨県「やまなし縁結び応援センター」</td><td className={td}>相談無料</td><td className={td}>相談とイベント情報の提供。お見合いの仲介は行っていない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>山梨県の20代向け初期費用支援</td><td className={td}>民間結婚相談所の初期費用を最大10万円減額（月会費・成婚料は自己負担）</td><td className={td}>県内在住・在勤の20〜29歳。令和9年2月28日までの入会</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/nagano/" className="text-[#A08447] underline">長野県「NAGANO ai MATCH」</Link></td><td className={td}>システム登録料10,000円（2年間）</td><td className={td}>市町村などの公的結婚相談所に登録して使うマッチングシステム</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              山梨県には、長野県や佐賀県のような県が設けるお見合いの仕組みがない一方で、20代に限り民間の結婚相談所の初期費用を県が負担する制度があります。初期費用が10万円減額されても、月会費と成婚料はかかるため、1年間の総額がいくらになるかを入会前に各社へ確認することが大切です。30代以上の方や、費用を抑えたい方は、市町村の結婚相談窓口や出会いイベント、山梨県内から利用できるオンライン型の結婚相談所、東京都内の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。長野県のシステム登録料は、長野県の公式サイト等で2026年11月18日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/nagano/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">NAGANO ai MATCH（長野県）</Link>
            <Link href="/knowledge/niigata/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ハートマッチにいがた（新潟県）</Link>
            <Link href="/knowledge/saga/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">さが出会いサポートセンター（佐賀県）</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/area/tokyo/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">東京の結婚相談所</Link>
            <Link href="/area/shizuoka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">静岡の結婚相談所</Link>
            <Link href="/review/onet/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オーネットの料金と評判</Link>
            <Link href="/review/zwei/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ツヴァイの料金と評判</Link>
            <Link href="/knowledge/matsumoto/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">松本市の結婚支援</Link>
            <Link href="/knowledge/gifu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">おみサポ・ぎふ（岐阜県）</Link>
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
