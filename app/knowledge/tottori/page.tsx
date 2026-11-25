import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-25 確認）。
// ・えんトリーの会費無償化（平成27年設立、令和7年4月1日新規入会・更新分から、従来1万円/2年間の新規登録料・更新料が対象、性別・年齢を問わず全員、お見合い費用1,000円/人は引き続き必要）：鳥取県「えんトリー会費を無償化します！（令和7年4月1日～）」
// ・3センターの開設日（鳥取・米子 平成27年12月16日、倉吉 平成30年4月28日）、登録対象者（県内在住・県内勤務・鳥取県への移住希望の20歳以上の未婚の男女）、登録費用 無料（2年間有効）：鳥取県「えんトリー(とっとり出会いサポートセンター)登録者募集中！！」
// ・3センターの所在地・電話・開所時間・休業日、利用は事前予約制、鳥取センターに無料駐車場なし：えんトリー公式「センターについて」
// ・会員数974名（男633・女341）と年代別内訳、成婚数393組、2026年10月のお見合い成立数（マッチング29組・ナコード53組）・カップル成立数（マッチング13組・ナコード21組）、山陰連携の成婚数（累計17組）・山陰連携希望者726名、運営 (一社)鳥取県法人会連合会（県委託）：えんトリー公式「成婚数・会員状況」（2026年10月末時点の表示）。割合は当サイト算出
// ・入会登録料無料・2年毎に更新手続き、お見合い料1回1人1,000円（サポーター又は縁ナビ交通費）、飲食代は自己負担、2回目以降はサポーター立会いなし、成婚時に県知事から記念品、交際不成立後の再開は通常約1週間後：えんトリー公式「よくある質問」
// ・必要書類（独身証明書原本3か月以内・戸籍抄本コピーで代用可、顔写真付き公的身分証、縦型L判写真1枚・任意で全身写真1点、三親等内の血族による代理登録）：えんトリー公式「会員登録に必要なもの」
// ・入会申込の流れ、会員登録ができる方、登録期間2年・自動退会、禁止行為、カップリングを約束しない旨。入会規約本文の「入会登録料10,000円」の記載：えんトリー公式「入会申込」ページ（入会規約）
// ・山陰連携（しまコ）、AIからのおすすめ、チャット（お見合い日の5日前から）、オンラインお見合い（県外の方とのみ・Zoom）、自宅閲覧、性格診断マッチング：えんトリー公式「えんトリー・マッチングシステム 6つの特徴」
// ・ナコード（縁結びナビゲーターによる紹介、利用条件、お見合い1回1人1,000円、原則双方の縁ナビが同席）：えんトリー公式「えんトリー・ナコード」
// ・マイナンバーカードによる独身確認（2026年3月30日開始）：えんトリー公式 お知らせ（2026年3月29日）
// ・自宅閲覧からのお引合せ申込み（12月18日13時から最大3名）、返答期限を5日以内から3日以内に短縮、システム停止日程：えんトリー公式 お知らせ（2026年11月18日）
// ・三朝町（12月11日・12日、町内在住・在勤者が対象、計8枠）・琴浦町（12月13日、7枠）の出張登録・相談会：えんトリー公式 お知らせ（2026年11月4日）・市町村カテゴリ一覧
// ・出会いサポーター（ボランティア、県内居住、交通費1回1,000円支給）：鳥取県「えんトリー『出会いサポーター(ボランティア)』募集」
// ・(株)オミカレとの連携協定（令和6年3月30日締結、カップル成立500組を目指す「カップル倍増プロジェクト」）：鳥取県「婚活情報サービス事業者の株式会社オミカレと出会い・結婚支援に関する連携協定を締結しました」
// ・結婚新生活支援（世帯所得500万円未満・夫婦とも39歳以下、上限60万円/30万円、実施市町村 倉吉市・岩美町・若桜町・八頭町・北栄町・伯耆町）：鳥取県「結婚・妊娠・共育ての相談機会提供・支援プログラム（旧：結婚新生活支援事業）」
// ・若桜町婚活支援補助金（結婚相談所・婚活サイトの登録料・利用料、婚活イベント参加費の1/2・上限1万円、1年度1回・通算3回、事業開始の10日前までに申請）：若桜町「若桜町婚活支援補助金」（2023年9月28日更新）・同「若桜町婚活支援補助金交付要綱」（令和3年4月1日施行・Word）
// ・麒麟のまち婚活サポートセンター（圏域7市町、年会費・登録料無料、イベント参加費1,000円〜3,000円程度、運営事務局の電話）：若桜町「鳥取県内の婚活サポートセンターのご紹介」（2026年10月14日更新）
// ・鳥取県西部地域振興協議会（西部9市町村・事務局 米子市）の婚活・繋がりづくりイベント（令和8年4月1日〜令和9年3月31日）：米子市「地域少子化対策重点推進交付金 実施計画書（米子市婚活連携事業）」（PDF）
// ・岡山県・高知県・徳島県のセンターの料金：当サイト /knowledge/okayama/・/knowledge/kochi/・/knowledge/tokushima/ の確認内容
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値
// ・鳥取市の結婚相談所登録料補助、鳥取市公式サイト上の麒麟のまち婚活サポートセンターの現行ページ：2026-11-25 時点で確認できず（本文に記載）

const PREF_KEKKON_URL = "https://www.pref.tottori.lg.jp/kekkon/";
const PREF_ENTRY_URL = "https://www.pref.tottori.lg.jp/259769.htm";
const PREF_FREE_URL = "https://www.pref.tottori.lg.jp/321847.htm";
const PREF_SUPPORTER_URL = "https://www.pref.tottori.lg.jp/259770.htm";
const PREF_OMIKARE_URL = "https://www.pref.tottori.lg.jp/317189.htm";
const PREF_SHINSEIKATSU_URL = "https://www.pref.tottori.lg.jp/262195.htm";
const ENTRY_TOP_URL = "https://entry-tottori.jp/";
const ENTRY_STATUS_URL = "https://entry-tottori.jp/membership-status/";
const ENTRY_ABOUT_URL = "https://entry-tottori.jp/about/";
const ENTRY_FAQ_URL = "https://entry-tottori.jp/faq/";
const ENTRY_NECESSARY_URL = "https://entry-tottori.jp/necessary/";
const ENTRY_REGISTER_URL = "https://entry-tottori.jp/register/";
const ENTRY_FEATURE_URL = "https://entry-tottori.jp/feature/";
const ENTRY_NACODE_URL = "https://entry-tottori.jp/entry-nacode/";
const ENTRY_MYNA_URL = "https://entry-tottori.jp/important/9163/";
const ENTRY_HOME_CHANGE_URL = "https://entry-tottori.jp/important/7081/";
const ENTRY_MISASA_URL = "https://entry-tottori.jp/news/10252/";
const ENTRY_KOTOURA_URL = "https://entry-tottori.jp/news/10247/";
const ENTRY_MUNI_URL = "https://entry-tottori.jp/category/municipalities/";
const WAKASA_HOJO_URL = "https://www.town.wakasa.tottori.jp/soshikikarasagasu/kikakuseisakuka/1/kikakuseisakukakari/konkatsu/1239.html";
const WAKASA_YOUKOU_URL = "https://www.town.wakasa.tottori.jp/material/files/group/5/74497178.docx";
const WAKASA_CENTERS_URL = "https://www.town.wakasa.tottori.jp/soshikikarasagasu/kikakuseisakuka/1/kikakuseisakukakari/konkatsu/1240.html";
const YONAGO_PLAN_URL = "https://www.city.yonago.lg.jp/secure/61932/kohyo2_r.pdf";

const omiaiFee = 1000;
const members = 974;
const male = 633;
const female = 341;
const marriages = 393;
const sanin = 726;
const omiaiOct = { matching: 29, nacode: 53 };
const coupleOct = { matching: 13, nacode: 21 };

const ages = [
  { band: "20代", total: 120, m: 68, f: 52 },
  { band: "30代", total: 427, m: 251, f: 176 },
  { band: "40代", total: 273, m: 196, f: 77 },
  { band: "50代以上", total: 154, m: 118, f: 36 },
];

const venues = [
  { name: "鳥取センター", addr: "鳥取市二階町3丁目204 アイシン二階町ビル2F", tel: "0857-30-5151", hours: "火〜木 10:00〜19:00、土・日・祝 10:00〜18:00（月・金曜、12月29日〜1月3日は休業）" },
  { name: "米子センター", addr: "米子市加茂町2丁目180 国際ファミリープラザ4F", tel: "0859-30-3443", hours: "火〜木 10:00〜19:00、土・日・祝 10:00〜18:00（月・金曜、12月29日〜1月3日は休業）" },
  { name: "倉吉センター", addr: "倉吉市明治町1032番地19 打吹回廊1階", tel: "080-1646-1899", hours: "水・木・土・日 10:00〜17:00（月・火・金曜、12月29日〜1月3日は休業）" },
];

export const metadata: Metadata = {
  title: "鳥取県で結婚相談所を探す方へ｜県の「えんトリー」は2025年4月から登録無料・お見合い1回1,000円、会員974名・成婚393組と民間との費用比較",
  description:
    "鳥取県の「えんトリー（とっとり出会いサポートセンター）」は2025年4月から入会登録料が無料で、お見合いは1回1人1,000円です。会員974名・成婚393組（2026年10月末時点）、3センターの開所時間と必要書類、若桜町の婚活補助、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/tottori/" },
};

const faqs = [
  {
    q: "えんトリー（とっとり出会いサポートセンター）の料金はいくらですか？",
    a: "鳥取県は、令和7年（2025年）4月1日の新規入会・更新分から、えんトリーの新規登録料・更新料（従来は2年間で1万円）を無償化しています。性別・年齢を問わず全員が対象です。登録は2年間有効で、2年ごとに更新手続きが必要です。お見合いのときは、同席する出会いサポーターまたは縁結びナビゲーターの交通費として1回につき1人1,000円がかかり、飲食代などは自己負担です。",
  },
  {
    q: "鳥取県外に住んでいても登録できますか？",
    a: "えんトリーに登録できるのは、結婚を希望する20歳以上の独身の方で、鳥取県内に住んでいる方、県内に勤めている方、または鳥取県への移住を希望している方です。県外に住んでいて県内に勤務先もない場合は、移住を希望していることが条件になります。登録は、ウェブで入会申込みと来所予約をしたうえで、県内3か所のセンターに必要書類を持参して行います。",
  },
  {
    q: "独身証明書がなくても登録できますか？",
    a: "えんトリーは2026年3月30日から、マイナンバーカードによる独身確認サービスを導入しています。マイナンバーカードと対応するスマートフォンなどがあれば、マイナポータルアプリを使ってオンラインで独身確認ができ、独身証明書を取得する必要はありません。顔写真付きの身分証とプロフィール用の写真は、これまでどおり提出が必要です。独身証明書のかわりに、3か月以内に発行された戸籍抄本のコピー（本籍欄が見えないもの）でも代用できます。",
  },
  {
    q: "マッチングシステムとナコードは何が違いますか？",
    a: "マッチングシステムは、会員が自分でプロフィールを閲覧してお見合いを申し込む仕組みで、お見合いには出会いサポーター（ボランティア）が同席します。ナコードは、地域で仲人をしているボランティアの縁結びナビゲーター（縁ナビ）が、未婚者情報交換会などでお相手を探してお見合いをセッティングする仕組みで、原則として双方の縁ナビが同席します。どちらもお見合い1回につき1人1,000円で、併用する場合はお見合い・交際を同時に複数の方と進めることはできません。",
  },
  {
    q: "鳥取県内の市町村で、結婚相談所の費用を補助しているところはありますか？",
    a: "若桜町が「若桜町婚活支援補助金」で、結婚相談所や婚活サイトの登録料・利用料、婚活イベントの参加費の2分の1（上限1万円）を補助しています。対象は町内に住民登録がある満20歳以上の未婚の方で、1年度に1回・通算3回まで、登録や申込みの10日前までに申請が必要です。当サイトでは、2026年11月25日時点で、このほかの市町村による結婚相談所の登録料補助は確認できませんでした。お住まいの市町村の窓口にお問い合わせください。",
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
  headline: "鳥取県の公的な婚活支援「えんトリー（とっとり出会いサポートセンター）」の料金・入会条件と、市町村の支援、民間の結婚相談所との比較",
  description: "鳥取県の「えんトリー（とっとり出会いサポートセンター）」の料金・入会条件・必要書類・センターの開所時間・会員数と成婚数、若桜町の婚活支援補助金、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-25",
  dateModified: "2026-11-25",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/tottori/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "鳥取県の結婚支援（えんトリー）", item: "https://mu-su-bi-ba.com/knowledge/tottori/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

const pct = (a: number, b: number) => ((a / b) * 100).toFixed(1);

export default function KnowledgeTottori() {
  const maleRatio = pct(male, members);
  const mfRatio = (male / female).toFixed(1);
  const saninRatio = pct(sanin, members);
  const omiaiTotal = omiaiOct.matching + omiaiOct.nacode;
  const coupleTotal = coupleOct.matching + coupleOct.nacode;
  const coupleRate = pct(coupleTotal, omiaiTotal);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "鳥取県の結婚支援（えんトリー）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          鳥取県の結婚相談所選び：県の「えんトリー（とっとり出会いサポートセンター）」の料金・入会条件、市町村の支援と、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月25日（料金・入会条件・センター・会員数・市町村の支援は同日にえんトリー公式サイト、鳥取県公式サイト、若桜町公式サイト、米子市の公表資料で確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />鳥取県の「えんトリー」は、2025年4月から入会登録料が無料で、お見合い1回1人1,000円で利用できます
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>「えんトリー（とっとり出会いサポートセンター）」は、鳥取県が開設した公的な婚活支援センターです。会員が自分でお相手を探す<strong>マッチングシステム</strong>と、ボランティアの仲人がお相手を探す<strong>ナコード</strong>があり、お見合いにはボランティアが同席します。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>令和7年（2025年）4月1日から、<strong>新規登録料・更新料が無料</strong>になりました（従来は2年間で1万円）。かかるのは<strong>お見合い1回につき1人{omiaiFee.toLocaleString()}円</strong>（同席者の交通費）と飲食代です。登録できるのは、<strong>20歳以上の独身で、鳥取県内に在住・在勤、または鳥取県への移住を希望する方</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>公式サイトの表示では、2026年10月末時点で<strong>会員{members}名（男性{male}名・女性{female}名）、成婚数{marriages}組</strong>です。男性が会員の{maleRatio}％を占め、女性の約{mfRatio}倍です（当サイト算出）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>センターは<strong>鳥取・米子・倉吉の3か所</strong>で、来所は予約制です。島根県の「しまコ」との<strong>山陰連携</strong>を希望すると、島根県の連携希望会員ともお見合いができます。市町村の支援では、<strong>若桜町</strong>が結婚相談所の登録料などの2分の1（上限1万円）を補助しています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。えんトリーは費用を大きく抑えられる一方、登録と申込みにセンターへの来所が必要で、開所日も限られます。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">えんトリーの料金と入会条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>鳥取県が開設（平成27年設立）。県の委託により一般社団法人鳥取県法人会連合会が運営</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会登録料・更新料</td><td className={td}>無料（令和7年4月1日の新規入会・更新分から。従来は2年間で1万円）。性別・年齢を問わず全員が対象</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お見合いの費用</td><td className={td}>1回につき1人1,000円（同席する出会いサポーターまたは縁結びナビゲーターの交通費）。飲食代などは自己負担</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録できる方</td><td className={td}>結婚を希望し自ら努力する20歳以上の独身の方で、鳥取県内に在住・在勤、または鳥取県への移住を希望する方。原則としてインターネットとメールが使えること</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要なもの</td><td className={td}>独身証明書の原本（発行から3か月以内。3か月以内の戸籍抄本のコピーで代用可。マイナンバーカードによるオンラインの独身確認も可）、顔写真付きの公的な身分証明書の原本（運転免許証・マイナンバーカード・パスポート等）、写真1枚（本人のみ・無帽・縦型L判・3か月以内に撮影。任意で全身写真1点を追加可）。特設会場では証明書類の原本とコピーが必要</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録の流れ</td><td className={td}>利用規約に同意 → メールアドレスを登録し、返信メールのURLから氏名・生年月日などを入力 → 初回の来所予約 → 必要書類を持ってセンターへ行き、プロフィールと希望条件を入力して会員登録完了。本人の来所が難しい場合は、三親等内の血族に限り代理登録が可能（閲覧やお見合いの代理は不可）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録期間</td><td className={td}>登録日から2年間。期間が終わると自動的に退会となり、続ける場合は改めて登録手続きが必要。休会しても登録期間は延長されない。結婚が決まるとセンターが退会処理を行い、県知事から成婚記念品が贈られる</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              なお、2026年11月25日時点で、えんトリー公式サイトの入会申込みページに掲載されている入会規約の本文には「入会登録料10,000円」という記載が残っています。一方、鳥取県の案内ページ、えんトリー公式サイトのトップページと「よくある質問」では入会登録料は無料と案内されているため、当サイトでは無料として整理しています。入会前に気になる場合は、各センターにご確認ください。
            </p>
            <p>
              入会規約では、結婚している方や交際中の異性がいる方の登録、結婚相手を探す以外の目的での登録、お見合いの無断キャンセルなどを禁止行為と定め、該当した場合は登録を抹消するとしています。また、えんトリーは出会いの場を提供するもので、カップリングを必ず約束するものではないと明記されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_FREE_URL} {...ext}>鳥取県「えんトリー会費を無償化します！（令和7年4月1日～）」</a>・<a href={PREF_ENTRY_URL} {...ext}>同「えんトリー(とっとり出会いサポートセンター)登録者募集中！！」</a>・<a href={ENTRY_FAQ_URL} {...ext}>えんトリー公式「よくある質問」</a>・<a href={ENTRY_NECESSARY_URL} {...ext}>同「会員登録に必要なもの」</a>・<a href={ENTRY_REGISTER_URL} {...ext}>同「入会申込」（入会規約）</a>・<a href={ENTRY_MYNA_URL} {...ext}>同 お知らせ「マイナンバーカードによる独身確認サービスを開始します」（2026年3月29日）</a>（いずれも2026年11月25日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">マッチングシステムとナコードの違い、お見合いまでの流れ</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>マッチングシステム</th><th className={th}>ナコード</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お相手の探し方</td><td className={td}>会員が自分でプロフィールを閲覧し、お見合いを申し込む。AIによるおすすめ、性格診断によるマッチングもある</td><td className={td}>縁結びナビゲーター（地域で仲人をするボランティア）が、未婚者情報交換会などでお相手を探す</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お見合いの同席者</td><td className={td}>出会いサポーター（ボランティア）</td><td className={td}>原則として双方の縁結びナビゲーター。当人同士だけのお見合いは不可</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お見合いの費用</td><td className={td}>1回につき1人1,000円＋飲食代</td><td className={td}>1回につき1人1,000円＋飲食代</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>2026年10月のお見合い成立数</td><td className={td}>{omiaiOct.matching}組</td><td className={td}>{omiaiOct.nacode}組</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>2026年10月のカップル成立数</td><td className={td}>{coupleOct.matching}組</td><td className={td}>{coupleOct.nacode}組</td></tr>
                </tbody>
              </table>
            </div>
            <ol className="list-decimal pl-5 space-y-2">
              <li>センターのタブレット端末、または自宅のパソコン・スマートフォン（写真を含む一部の項目を除くプロフィール）でお相手を探す。申込みを受けた側は期限内に返事をする</li>
              <li>お見合いが成立すると、センターが担当の出会いサポーターとお見合い場所を決め、サポーターが日時を調整する。お見合い日の5日前からは、お相手とチャットでメッセージをやり取りできる</li>
              <li>お見合い当日は出会いサポーターが同席して会話をサポートする。2回目以降はサポーターの立会いはなく、名前と連絡先を伝えたうえで各自の責任で会う</li>
              <li>交際に至らなかった場合は、通常約1週間後から利用を再開できる。結婚が決まったら担当の出会いサポーターに報告する</li>
            </ol>
            <p>
              2026年11月18日のお知らせでは、12月18日（金）13時から、自宅閲覧で検索したお相手に1回最大3名（第1〜第3希望）までお引合せを申し込めるようになり、これまでの「プロフィール開示申込み」は廃止されると案内されています。同時に、お見合いの申込みに対する返答期限が「5日以内」から「3日以内」に短縮されます。12月17日（木）13時〜18日（金）13時はシステムが停止します。
            </p>
            <p>
              2026年10月は、マッチングシステムとナコードを合わせてお見合いが{omiaiTotal}組成立し、カップル成立は{coupleTotal}組でした。1か月分の数値から当サイトが算出すると、お見合い成立数に対するカップル成立数の割合は約{coupleRate}％です。ただし、当月のカップル成立が当月のお見合いから生まれたものとは限らないため、目安としてご覧ください。オンラインお見合い（Zoom）は鳥取県外の方とのお見合いに限られ、県内在住者同士は対象外です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={ENTRY_FEATURE_URL} {...ext}>えんトリー公式「えんトリー・マッチングシステム 6つの特徴」</a>・<a href={ENTRY_NACODE_URL} {...ext}>同「えんトリー・ナコード」</a>・<a href={ENTRY_FAQ_URL} {...ext}>同「よくある質問」</a>・<a href={ENTRY_HOME_CHANGE_URL} {...ext}>同 お知らせ「【重要】自宅閲覧のお引合せ申込方法が変わります」（2026年11月18日）</a>・<a href={ENTRY_STATUS_URL} {...ext}>同「成婚数・会員状況」</a>（いずれも2026年11月25日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公表されている会員数・成婚数と年代別の内訳</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年代</th><th className={th}>会員数</th><th className={th}>男性</th><th className={th}>女性</th><th className={th}>全体に占める割合（当サイト算出）</th></tr></thead>
                <tbody>
                  {ages.map((a) => (
                    <tr key={a.band} className="border-t border-[#E5DCCF] align-top"><td className={td}>{a.band}</td><td className={td}>{a.total}名</td><td className={td}>{a.m}名</td><td className={td}>{a.f}名</td><td className={td}>{pct(a.total, members)}％</td></tr>
                  ))}
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>合計</td><td className={td}>{members}名</td><td className={td}>{male}名</td><td className={td}>{female}名</td><td className={td}>100％</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              えんトリー公式サイトの「成婚数・会員状況」では、2026年10月末時点の会員数を{members}名、成婚数を{marriages}組と表示しています。成婚数の集計の起点は、同ページには記載がありません。会員の年代は30代が最も多く、40代以上（40代と50代以上の合計）も全体の{pct(273 + 154, members)}％を占めます。どの年代でも男性が女性より多く、40代では男性が女性の約{(196 / 77).toFixed(1)}倍、50代以上では約{(118 / 36).toFixed(1)}倍です（いずれも当サイト算出）。
            </p>
            <p>
              島根県の「しまコ」との山陰連携を希望しているえんトリー会員は{sanin}名で、会員全体の{saninRatio}％です（当サイト算出）。山陰連携による成婚数は累計17組と表示されています。山陰連携を希望すると、えんトリーの休業日（月曜・金曜）に、しまね縁結びサポートセンターの窓口でえんトリーの閲覧ができます（当面は、えんトリー米子センターとしまね縁結びサポートセンター松江センターに限る）。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={ENTRY_STATUS_URL} {...ext}>えんトリー公式「成婚数・会員状況」（2026年10月末時点の表示）</a>・<a href={ENTRY_FEATURE_URL} {...ext}>同「えんトリー・マッチングシステム 6つの特徴」</a>（いずれも2026年11月25日確認）。割合・倍率は当サイトが公表値から算出したもので、センターが公表している数値ではありません。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">センターの所在地と開所時間、出張登録会</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>センター</th><th className={th}>所在地</th><th className={th}>電話</th><th className={th}>開所時間・休業日</th></tr></thead>
                <tbody>
                  {venues.map((v) => (
                    <tr key={v.name} className="border-t border-[#E5DCCF] align-top"><td className={td}>{v.name}</td><td className={td}>{v.addr}</td><td className={td}>{v.tel}</td><td className={td}>{v.hours}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              センターの利用には事前の予約が必要で、マイページから来所予約をしてから来所します。鳥取センターには無料駐車場や割引提携の駐車場がないため、車で行く場合は近隣の有料駐車場を利用します。鳥取・米子センターは平成27年12月16日、倉吉センターは平成30年4月28日に開設されました。
            </p>
            <p>
              えんトリーは、市町村と協力して出張登録・閲覧・婚活個別相談会を開いています。2026年12月は、三朝町で12月11日（金）17:00〜20:15（三朝町総合文化ホール）と12月12日（土）10:00〜13:15（三朝温泉ほっとプラ座）に計8枠（町内在住・在勤の方が対象）、琴浦町で12月13日（日）10:00〜16:00（まなびタウンとうはく）に7枠が予定されています。いずれも参加費は無料・予約制で、ご家族やご友人の相談も受け付けています。2026年度は、ほかに北栄町・琴浦町・湯梨浜町・智頭町でも開かれました。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={ENTRY_ABOUT_URL} {...ext}>えんトリー公式「センターについて」</a>・<a href={PREF_ENTRY_URL} {...ext}>鳥取県「えんトリー(とっとり出会いサポートセンター)登録者募集中！！」</a>・<a href={ENTRY_MISASA_URL} {...ext}>えんトリー公式 お知らせ「12月11日・12日【中部】三朝町×えんトリー出張登録・閲覧・婚活個別相談会」</a>・<a href={ENTRY_KOTOURA_URL} {...ext}>同「12月13日【中部】琴浦町×えんトリー出張登録・閲覧・婚活個別相談会」</a>・<a href={ENTRY_MUNI_URL} {...ext}>同 お知らせ（市町村）一覧</a>（いずれも2026年11月25日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">市町村の支援：若桜町の婚活支援補助金と地域の婚活サポートセンター</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>名称・実施主体</th><th className={th}>内容</th><th className={th}>費用・支援額</th><th className={th}>主な条件</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={WAKASA_HOJO_URL} {...ext}>若桜町婚活支援補助金</a><br />若桜町</td><td className={td}>結婚相談所やインターネット上の婚活サイト等の登録料・利用料、婚活イベントの参加費を補助</td><td className={td}>補助対象経費の2分の1（上限1万円。千円未満切り捨て）</td><td className={td}>申請時に町内に住民登録がある満20歳以上の未婚の方で、町税等の滞納がなく、町のアンケート等に協力できる方。1年度に1回・通算3回まで。登録日・申込日の10日前までに申請</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>麒麟のまち婚活サポートセンター<br />麒麟のまち圏域</td><td className={td}>10〜40人規模の婚活イベントの開催、恋愛・結婚に関するアドバイス</td><td className={td}>年会費・登録料は無料。イベント参加時に1,000円〜3,000円程度</td><td className={td}>20歳以上の独身で、麒麟のまち圏域（鳥取市・岩美町・若桜町・智頭町・八頭町・兵庫県香美町・新温泉町）に在住・在勤、または移住を検討している方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>鳥取県西部地域振興協議会<br />西部9市町村（事務局：米子市）</td><td className={td}>婚活・繋がりづくりイベント、スキルアップセミナーなど（令和8年4月1日〜令和9年3月31日の計画）</td><td className={td}>公表資料に参加費の記載なし</td><td className={td}>個別のイベントごとに定められる</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              若桜町の補助は、結婚相談所への登録より前に申請する方式で、申請書と事業計画及び収支予算書に、登録する結婚相談所の概要が分かるものを添えて企画政策課（0858-82-2231）に提出します。民間の結婚相談所の登録料だけでなく、月々の利用料も補助の対象に含まれます。
            </p>
            <p>
              麒麟のまち婚活サポートセンターの内容は、若桜町の「鳥取県内の婚活サポートセンターのご紹介」（2026年10月14日更新）にもとづいています。当サイトでは、2026年11月25日時点で鳥取市の公式サイト上に同センターの現行の案内ページを確認できなかったため、最新の内容は運営事務局（070-5675-5557）にご確認ください。また、同日時点で、若桜町以外の市町村が結婚相談所の登録料を補助しているという公式の案内は確認できませんでした。
            </p>
            <p>
              結婚後の支援として、倉吉市・岩美町・若桜町・八頭町・北栄町・伯耆町が、新婚世帯の住宅取得・賃借・リフォーム費用や引越費用を補助しています。県の案内では、世帯所得500万円未満で夫婦ともに婚姻日の年齢が39歳以下の世帯が対象で、上限は夫婦ともに29歳以下なら60万円、それ以外は30万円です（対象・上限額は市町村によって異なります）。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={WAKASA_HOJO_URL} {...ext}>若桜町「若桜町婚活支援補助金」（2023年9月28日更新）</a>・<a href={WAKASA_YOUKOU_URL} {...ext}>同「若桜町婚活支援補助金交付要綱」（Word）</a>・<a href={WAKASA_CENTERS_URL} {...ext}>同「鳥取県内の婚活サポートセンターのご紹介」（2026年10月14日更新）</a>・<a href={YONAGO_PLAN_URL} {...ext}>米子市「地域少子化対策重点推進交付金 実施計画書（米子市婚活連携事業）」（PDF）</a>・<a href={PREF_SHINSEIKATSU_URL} {...ext}>鳥取県「結婚・妊娠・共育ての相談機会提供・支援プログラム（旧：結婚新生活支援事業）」</a>（いずれも2026年11月25日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">県のその他の取組：ボランティアの募集と民間事業者との連携</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              えんトリーのお見合いに同席する出会いサポーターは、県内に住むボランティアです。研修（2時間程度）を受けて認定され、月に1〜2回程度お見合いに立ち会います。サポーターには交通費として1回あたり1,000円が支給され、会員が支払うお見合い料はこの交通費に充てられます。縁結びナビゲーターも随時募集されています。
            </p>
            <p>
              鳥取県は、カップル成立500組を目指す「カップル倍増プロジェクト」を掲げており、令和6年3月30日に婚活イベント情報サイトを運営する株式会社オミカレと「出会い・結婚支援に関する連携協定」を締結しました。県の発表では、大規模なマッチングイベントの開催や、オミカレ会員とえんトリー会員の相互交流などを進める予定とされています。このほか、えんトリーは異業種・事業所間交流会「えとりん」を主催しており、県の「出会い・結婚支援担当」のページでは、婚活イベント情報のメール配信の登録も受け付けています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_SUPPORTER_URL} {...ext}>鳥取県「えんトリー『出会いサポーター(ボランティア)』募集」</a>・<a href={PREF_OMIKARE_URL} {...ext}>同「婚活情報サービス事業者の株式会社オミカレと出会い・結婚支援に関する連携協定を締結しました」</a>・<a href={PREF_KEKKON_URL} {...ext}>同「出会い・結婚支援担当」</a>・<a href={ENTRY_TOP_URL} {...ext}>えんトリー公式トップページ</a>（いずれも2026年11月25日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス・条件</th><th className={th}>登録費用</th><th className={th}>お見合い等の費用・特徴</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>えんトリー（鳥取県）</td><td className={td}>0円（2年間有効・更新も無料）</td><td className={td}>お見合い1回につき1人1,000円＋飲食代</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/okayama/" className="text-[#A08447] underline">岡山県「おかやま縁むすびネット」</Link></td><td className={td}>10,000円/2年（2027年3月31日まで無料）</td><td className={td}>お引合せ1回2,000円（オンライン1,000円）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/kochi/" className="text-[#A08447] underline">高知県「こうち出会いサポートセンター」</Link></td><td className={td}>2年コース10,000円。20代・30代限定の半年コース3,000円</td><td className={td}>市町村による登録料の補助あり</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/tokushima/" className="text-[#A08447] underline">徳島県「マリッサとくしま」</Link></td><td className={td}>10,000円/2年</td><td className={td}>成婚料なし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>同・若桜町の補助を利用（町内在住の方のみ）</td><td className={td}>登録料・利用料の2分の1（上限1万円）が補助の対象</td><td className={td}>1年度に1回・通算3回まで。事前申請が必要</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              上の表は、公式に公表されている料金から当サイトが整理した目安です。えんトリーの費用はお見合いの回数に応じて1回1,000円ずつ増えます。例えば、2年間に5回お見合いをした場合の費用は5,000円です（当サイトの試算。交際中の飲食代などは含みません）。登録料が無料になったことで、近隣県の公的センターと比べても登録時の負担は小さく、民間の結婚相談所との差は大きくなっています。
            </p>
            <p>
              一方で、えんトリーでは登録とお見合いの申込みにセンターへの来所が必要で（12月18日以降は自宅閲覧からの申込みも可能になる予定です）、センターの開所日は鳥取・米子が週5日、倉吉が週4日です。会員は男性が多く、女性の約{mfRatio}倍という構成も踏まえておく必要があります（当サイト算出）。民間の結婚相談所は、費用がかかる代わりに、担当者がお相手を提案したり、交際中の相談に継続的に応じたりするところが多くあります。鳥取県内から利用できるオンライン型の結婚相談所や、広島・神戸方面の結婚相談所も選択肢になります。費用と支援の手厚さのどちらを重視するかを整理したうえで比べることをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。岡山県・高知県・徳島県の料金は、当サイトの各ページで各公式サイトの情報を確認した内容です。料金や補助の内容は変更される場合があります。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/yamaguchi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">やまぐち結婚応縁センター（山口県）</Link>
            <Link href="/knowledge/ota/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">大田区の婚活支援（東京都）</Link>
            <Link href="/knowledge/chikugo/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">八女・筑後結婚サポートセンター（筑後市）</Link>
            <Link href="/knowledge/nakatsu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">中津市の婚活支援（大分県）</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/okayama/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">おかやま縁むすびネット（岡山県）</Link>
            <Link href="/knowledge/hyogo-deai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ひょうご出会いサポートセンター（兵庫県）</Link>
            <Link href="/knowledge/kochi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">こうち出会いサポートセンター（高知県）</Link>
            <Link href="/knowledge/tokushima/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">マリッサとくしま（徳島県）</Link>
            <Link href="/area/hiroshima/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">広島の結婚相談所</Link>
            <Link href="/knowledge/40s/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">40代の婚活の現状</Link>
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
