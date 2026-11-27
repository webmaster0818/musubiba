import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-27 確認）。
// ・市の「結婚支援」（共生社会推進課）に掲載されている記事が「2026縁活カフェを開催します！」の1件であること、縁活カフェの事業名（前橋結婚応援パートナー支援事業）・協働の形・2026年度の全8回の日程と会場・変更点：前橋市「結婚支援」一覧、同「2026縁活カフェを開催します！」（2026年5月21日更新）
// ・縁活カフェの対象（20〜30代の独身の方・年齢相談有）、各回の定員の目安と参加費：同ページ掲載「2026縁活カフェチラシ（年間）」（PDF・画像。当サイトが目視で転記）
// ・2026年に前橋市内で開かれた婚活イベントの日時・場所・対象・定員・費用、親向けの「こどもの結婚の悩み事相談会」の日時・場所：広報まえばし 令和8年1月号〜11月号のテキスト版（Word）を当サイトが全号検索して数えた値
// ・12月の前橋市内のイベント（料理を楽しむ縁活の募集状況、スポーツ婚活交流会の開催中止、お野菜食堂そらの婚活party）：ぐんまスマイルライフ「ぐんま赤い糸プロジェクト」イベント情報（2026年12月）と各イベントページ（件数は当サイトが数えた値）
// ・前橋市の旧「結婚支援」カテゴリの掲載記事（前橋みらい家族ラボ・前橋結婚手帖・ぐんま結婚応援パスポート）、前橋結婚手帖の内容（5テーマ・22のアクション）、市が示す未婚率・結婚希望85%・「特になし」57%：前橋市「前橋結婚手帖を発行しました」（2026年8月26日更新）・「前橋みらい家族ラボの活動報告」（2019年12月20日更新）
// ・2025年11月28日のカラオケ婚活イベント（参加料500円、25〜35歳、各10人）：前橋市 報道発表資料（令和7年10月30日）
// ・結婚新生活支援事業を実施している県内市町村の一覧（令和8年4月現在・15市町村、前橋市は含まれない）：ぐんまスマイルライフ「結婚・妊娠・共育ての相談機会提供・支援プログラム（旧：結婚新生活支援事業）」
// ・令和8年度補助金等一覧に新婚・結婚新生活の補助の項目がないこと：前橋市「補助金等一覧」（2026年4月1日更新）・「令和8年度補助金等一覧」（PDF。当サイトが全文検索）
// ・前橋市社会福祉協議会の公式サイトのメニューに結婚相談の項目がないこと、心配ごと相談所の相談内容：前橋市社会福祉協議会 トップページ・「心配ごと相談所」
// ・市営住宅の入居資格（親族等に事実上婚姻関係にある者・ぐんまパートナーシップ宣誓者を含む、市内在住・在勤要件の撤廃）：前橋市「入居申込みの資格」（2026年4月1日更新）
// ・人生記念樹の配布（結婚した人が対象の一つ）：広報まえばし 令和8年4月号
// ・群馬県の結婚支援の全体像（県営のお見合いセンターがないこと、あいぷろ・コンパスの仕組み、館林市・桐生市の結婚相談）：当サイト /knowledge/gunma/（2026-11-21確認）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const CITY = "https://www.city.maebashi.gunma.jp";
const KEKKON_INDEX_URL = `${CITY}/soshiki/shimin/kyouseishakaisuishinka/gyomu/5/kekkonsien/index.html`;
const ENKATSU_URL = `${CITY}/soshiki/shimin/kyouseishakaisuishinka/gyomu/5/kekkonsien/49596.html`;
const ENKATSU_PDF_URL = `${CITY}/material/files/group/185/enkatu.pdf`;
const OLD_KEKKON_INDEX_URL = `${CITY}/kurashi_tetsuzuki/4/6/index.html`;
const TECHO_URL = `${CITY}/kurashi_tetsuzuki/4/6/14586.html`;
const LAB_URL = `${CITY}/kurashi_tetsuzuki/4/6/14583.html`;
const PRESS_20251030_URL = `${CITY}/material/files/group/10/20251030_2.pdf`;
const HOJO_URL = `${CITY}/soshiki/zaimu/zaisei/gyomu/3/2/45853.html`;
const HOJO_PDF_URL = `${CITY}/material/files/group/12/R8hojokinlist0602.pdf`;
const SHIEI_URL = `${CITY}/soshiki/toshikeikakubu/kenchikujutaku/gyomu/2/2/5207.html`;
const KOHO_INDEX_URL = `${CITY}/gyosei/1/4/3/index.html`;
const KOHO_TEXT_URL = (ym: string) => `${CITY}/material/files/group/10/koho${ym}_all_text.docx`;
const KOHO_URL: Record<string, string> = {
  "1月号": `${CITY}/gyosei/1/4/3/r7/47889.html`,
  "2月号": `${CITY}/gyosei/1/4/3/r7/48099.html`,
  "4月号": `${CITY}/gyosei/1/4/3/r8/48780.html`,
  "5月号": `${CITY}/gyosei/1/4/3/r8/49439.html`,
  "6月号": `${CITY}/gyosei/1/4/3/r8/49905.html`,
  "7月号": `${CITY}/gyosei/1/4/3/r8/50146.html`,
  "8月号": `${CITY}/gyosei/1/4/3/r8/50482.html`,
  "9月号": `${CITY}/gyosei/1/4/3/r8/51031.html`,
  "11月号": KOHO_TEXT_URL("202611"),
};
const SHAKYO_URL = "https://www.mae-shakyo.or.jp/";
const SHAKYO_SHINPAI_URL = "https://www.mae-shakyo.or.jp/sien/soudan/soudan.html";
const AIPRO_URL = "https://smilelife.pref.gunma.jp/encounter/event/";
const AIPRO_EVENT_URL = (id: number) => `https://smilelife.pref.gunma.jp/encounter/event/${id}/`;
const SHINSEIKATSU_LIST_URL = "https://smilelife.pref.gunma.jp/encounter/konpass/business/";

// 2026年（1月〜12月）に広報まえばし・前橋市公式サイト・あいぷろに掲載された、前橋市内の公的機関・市と協働する団体の婚活イベント
// 状況は2026年11月27日時点。開催日を過ぎた回は「開催日経過」と記載（開催の有無・結果は当サイトでは確認していません）
const events2026 = [
  { date: "2026年1月23日（金）", name: "夜のカフェで縁活交流会", host: "縁活プロジェクトチーム", detail: "KINGPIN CAFE（大友町三丁目）。20歳代〜おおむね30歳代の独身男女、各15人（抽選）。男性3,500円・女性2,000円", status: "開催日経過", src: "1月号" },
  { date: "2026年2月6日（金）", name: "ボウリングで交流楽しんで", host: "申込みは「まえばしスポーツナビ」", detail: "エメラルドボウル（国領町二丁目）。県内在住の22〜39歳・40〜59歳の独身男女、各16人（各抽選）。女性500円・男性1,500円", status: "開催日経過", src: "1月号" },
  { date: "2026年3月14日（土）", name: "天使のランタン作りで縁活", host: "縁活プロジェクトチーム", detail: "みるこのカフェ（富士見町小暮）。20歳代〜おおむね30歳代の独身男女、各7人（抽選）。男性3,500円・女性2,000円", status: "開催日経過", src: "2月号" },
  { date: "2026年5月8日（金）", name: "縁活カフェ第1回（春の夜のカフェ交流会）", host: "縁活プロジェクトチーム（市と協働）", detail: "KINGPIN CAFE（大友町三丁目）。20歳代〜おおむね30歳代の独身男女、各15人（抽選）。男性3,500円・女性2,000円", status: "開催済（市公式）", src: "4月号" },
  { date: "2026年6月5日（金）", name: "縁活カフェ第2回（ホタルと縁活交流会）", host: "縁活プロジェクトチーム（市と協働）", detail: "環境システム荻窪公園。20歳代〜おおむね30歳代の独身男女、各15人（抽選）。男性3,500円・女性2,000円", status: "開催日経過", src: "5月号" },
  { date: "2026年7月11日（土）", name: "夏野菜ピザで出愛の輪〜縁結びinまえばし", host: "前橋市（問合せ：共生社会推進課）", detail: "永明市民サービスセンター。市内在住・在勤か近隣市町村在住の30〜40歳の独身男女、各10人（抽選）。男性2,000円・女性1,000円", status: "開催日経過", src: "6月号" },
  { date: "2026年7月31日（金）", name: "縁活カフェ第3回（結婚式場で夜の縁活交流会）", host: "縁活プロジェクトチーム（市と協働）", detail: "アメイジンググレイス前橋（小相木町）。20歳代〜おおむね30歳代の独身男女、各12人（抽選）。男性4,500円・女性2,500円", status: "開催日経過", src: "7月号" },
  { date: "2026年9月4日（金）", name: "縁活カフェ第4回（夜のたき火縁活カフェ）", host: "縁活プロジェクトチーム（市と協働）", detail: "はっぴーすまいる。（二之宮町）。20歳代〜おおむね30歳代の独身男女、各10人（抽選）。男性3,500円・女性2,000円", status: "開催日経過", src: "8月号" },
  { date: "2026年9月27日・10月18日・11月15日（日）", name: "まえばし出会い・自分磨き応援事業（全3回）", host: "前橋市（問合せ：共生社会推進課）", detail: "第1回は下川淵市民サービスセンター（男女別のメイク・ファッションセミナー）、第2回・第3回はアメイジンググレイス前橋。市内在住・在勤か近隣市町村在住の25〜35歳の独身男女で全3回に参加できる人、各10人（抽選）。女性4,000円・男性5,500円", status: "開催日経過", src: "9月号" },
  { date: "2026年10月3日（土）", name: "縁活カフェ第5回（カフェで楽しむ午後の縁活）", host: "縁活プロジェクトチーム（市と協働）", detail: "biko cafe karakaze（富田町）。20歳代〜おおむね30歳代の独身男女、各7人（抽選）。男性3,500円・女性2,000円", status: "開催日経過", src: "9月号" },
  { date: "2026年12月6日（日）", name: "縁活カフェ第6回（料理を楽しむ縁活）", host: "縁活プロジェクトチーム（市と協働）", detail: "道の駅まえばし赤城。20歳代〜おおむね30歳代の独身男女、各12人（抽選）。男性3,500円・女性2,000円", status: "あいぷろの掲載では、男性は定員に達し募集終了、女性は引き続き募集中", src: "11月号・あいぷろ" },
  { date: "2026年12月13日（日）", name: "スポーツ婚活交流会（ソフトバレーボール）", host: "公益財団法人前橋市まちづくり公社", detail: "広瀬スポーツ・カルチャーセンター。県内在住の25〜35歳の独身の方、男女各9人（抽選）。2,000円", status: "あいぷろの掲載で「開催中止」", src: "11月号・あいぷろ" },
];

export const metadata: Metadata = {
  title: "前橋市で結婚相談所を探す方へ｜市と協働の「縁活カフェ」は男性3,500円・女性2,000円、2026年の公的な婚活イベント12件と民間との費用比較",
  description:
    "前橋市では登録制の公的な結婚相談の案内は見当たらず、市は団体と協働する「縁活カフェ」（男性3,500円・女性2,000円が中心）や婚活イベントで出会いを支援しています。2026年の開催実績12件と12月の予定、親向け相談会、結婚新生活支援の状況、民間との費用の違いを整理しています。",
  alternates: { canonical: "/knowledge/maebashi/" },
};

const faqs = [
  {
    q: "前橋市に市営の結婚相談所はありますか？",
    a: "2026年11月27日時点で、前橋市公式サイトの「結婚支援」のページに、登録制でお相手を紹介する市の結婚相談の案内は見当たりませんでした。同ページに掲載されている記事は「2026縁活カフェを開催します！」の1件です。市の結婚支援は、団体と協働する縁活カフェや、市（共生社会推進課）が開く婚活イベントが中心です。前橋市社会福祉協議会の公式サイトのメニューにも、結婚相談の項目は見当たりませんでした。",
  },
  {
    q: "縁活カフェの参加費と対象年齢を教えてください。",
    a: "縁活カフェは、前橋の地域若者会議middle縁活プロジェクトチームと前橋市が協働して開く交流イベントです。年間チラシでは対象を20〜30代の独身の方（年齢は相談可）としており、参加費は多くの回で男性3,500円・女性2,000円です。2026年7月31日の結婚式場での回は男性4,500円・女性2,500円でした。2026年度は全8回で、2026年11月27日時点で残っているのは12月6日・2027年1月29日・2027年3月（日程未定）の3回です。",
  },
  {
    q: "40歳以上でも参加できる前橋市の婚活イベントはありますか？",
    a: "2026年に当サイトが確認した前橋市の公的なイベントは、多くが20代〜30代または25〜35歳を対象としていました。40歳以上が対象に含まれていたのは、7月11日の「夏野菜ピザで出愛の輪」（30〜40歳）と、2月6日のボウリング交流（40〜59歳の枠あり）です。民間主催では、12月18日に前橋市総社町で35〜50歳を対象とする婚活パーティーがあいぷろに掲載されています（募集期間は11月28日から）。",
  },
  {
    q: "子どもの結婚について親が相談できる場はありますか？",
    a: "広報まえばしには、未婚の子の結婚に悩む親向けの「こどもの結婚の悩み事相談会」が2026年1月号から11月号まで毎号掲載されています（問合せ先はグンマDEアイ縁活ラボ）。多くの回は水曜日の10時〜15時にミヤケン元気21で開かれ、予約が必要です。6月24日はK'BIXまえばし福祉会館で合同相談会（先着20人）として開かれました。費用は広報に記載がないため、申込みの際にご確認ください。",
  },
  {
    q: "前橋市に結婚新生活支援事業（新婚世帯の補助金）はありますか？",
    a: "群馬県の結婚・子育て応援ポータルサイトが掲載している、結婚新生活支援事業を実施する県内市町村の一覧（令和8年4月現在・15市町村）に、前橋市は含まれていません。前橋市の令和8年度補助金等一覧にも、新婚世帯の住居費・引越費用の補助の項目は見当たりませんでした。年度によって変わる可能性があるため、市役所にお問い合わせください。",
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
  headline: "前橋市で結婚相談所を探す方へ：市と協働の縁活カフェ、市の婚活イベント、親向け相談会、結婚新生活支援の状況と民間の結婚相談所との比較",
  description:
    "前橋市の縁活カフェ（前橋結婚応援パートナー支援事業）と市の婚活イベントの2026年の開催実績・参加費、12月の予定、親向けの結婚相談会、結婚新生活支援の状況、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-27",
  dateModified: "2026-11-27",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/maebashi/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "前橋市の結婚相談・婚活支援", item: "https://mu-su-bi-ba.com/knowledge/maebashi/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeMaebashi() {
  const enkatsuCount = events2026.filter((e) => e.host.startsWith("縁活プロジェクトチーム")).length;
  const cityCount = events2026.filter((e) => e.host.startsWith("前橋市")).length;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "前橋市の結婚相談・婚活支援" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          前橋市で結婚相談所を探す方へ：市と協働の縁活カフェ、市の婚活イベント、親向け相談会、結婚新生活支援の状況と民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月27日（市の事業は同日に前橋市公式サイト、2026年のイベントは広報まえばし 令和8年1月号〜11月号のテキスト版、12月のイベントは群馬県の結婚・子育て応援サイト「ぐんまスマイルライフ」で確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />前橋市では、市と協働する団体の「縁活カフェ」と市の婚活イベントが公的な出会いの場の中心です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>2026年11月27日時点で、前橋市公式サイトに<strong>登録制でお相手を紹介する市の結婚相談の案内は見当たりません</strong>でした。市は、前橋結婚応援パートナー支援事業として地域の若者団体と<strong>「縁活カフェ」</strong>を協働で開いているほか、市（共生社会推進課）が婚活イベントを開いています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>当サイトが広報まえばし 令和8年1月号〜11月号と県のイベントサイトから数えた、2026年の前橋市内の公的な婚活イベントは<strong>{events2026.length}件</strong>（縁活プロジェクトチームの交流会{enkatsuCount}件、市の事業{cityCount}件ほか）です。縁活カフェの参加費は多くの回で<strong>男性3,500円・女性2,000円</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>2026年11月27日時点で申込みを受け付けているのは、<strong>12月6日（日）の「料理を楽しむ縁活」</strong>（道の駅まえばし赤城、女性のみ募集中）です。12月13日のスポーツ婚活交流会は開催中止と掲載されています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>前橋市は、県が掲載している結婚新生活支援事業の実施市町村（令和8年4月現在）に含まれていません。担当者によるお相手の紹介や交際中の相談を求める場合は、民間の結婚相談所が選択肢になります。当サイトが料金を確認した22社の1年総額は<strong>125,400円〜709,500円</strong>です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">前橋市の結婚支援の担当と事業の構成</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              前橋市の結婚支援は、市民部 共生社会推進課 人権・男女共同参画係（電話027-898-6517）が担当しています。同課の「結婚支援」のページに2026年11月27日時点で掲載されている記事は「2026縁活カフェを開催します！」の1件で、個別の婚活イベントは広報まえばしで案内されています。当サイトで、市が直接または協働で行う事業を次のとおり整理しました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>事業</th><th className={th}>内容</th><th className={th}>費用</th><th className={th}>主な対象</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={ENKATSU_URL} {...ext}>縁活カフェ</a><br />前橋の地域若者会議middle縁活プロジェクトチームと市の協働</td><td className={td}>季節の交流イベントや講座を通じて、異性と円滑に接する力を身に付け、出会いの場をつくる事業（2026年度は全8回）</td><td className={td}>多くの回は男性3,500円・女性2,000円</td><td className={td}>20〜30代の独身の方（年齢は相談可）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>市の婚活イベント<br />前橋市（共生社会推進課）</td><td className={td}>2026年は「夏野菜ピザで出愛の輪」（7月11日）と「まえばし出会い・自分磨き応援事業」（全3回・9〜11月）を開催</td><td className={td}>7月の回は男性2,000円・女性1,000円、全3回の自分磨き応援事業は男性5,500円・女性4,000円</td><td className={td}>市内在住・在勤か近隣市町村在住の独身男女（回により30〜40歳・25〜35歳）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={TECHO_URL} {...ext}>前橋結婚手帖</a><br />前橋市（未来創造部 政策推進課）</td><td className={td}>結婚への障壁と解決策を、人生プラン・出会い・男女の仲・お金・決断の5つのテーマ、22の具体的なアクションとして整理した冊子（2021年3月に全編公開）</td><td className={td}>市公式サイトでPDFを公開</td><td className={td}>若い世代</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              市の公式サイトには、未来創造部 政策推進課が掲載していた旧「結婚支援」の分類も残っており、「前橋みらい家族ラボの活動報告」（2016年10月に発足した官民連携の活動体）、「前橋結婚手帖を発行しました」、ぐんま結婚応援パスポートの案内（2016年の事業開始時の内容）の3件が掲載されています。前橋結婚手帖のページでは、市内の25〜29歳で男性の約7割・女性の約6割、30〜34歳で男性の約5割・女性の約3割強が結婚していないこと、市の意識調査で市内の若年女性（20〜34歳）の結婚希望が85%、結婚に向けて取り組んだことの第1位が「特になし」（57%）であったことが紹介されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={KEKKON_INDEX_URL} {...ext}>前橋市「結婚支援」（共生社会推進課）</a>・<a href={ENKATSU_URL} {...ext}>「2026縁活カフェを開催します！」（2026年5月21日更新）</a>・<a href={OLD_KEKKON_INDEX_URL} {...ext}>前橋市「結婚支援」（旧分類）</a>・<a href={TECHO_URL} {...ext}>「前橋結婚手帖を発行しました」（2026年8月26日更新）</a>・<a href={LAB_URL} {...ext}>「前橋みらい家族ラボの活動報告」（2019年12月20日更新）</a>・広報まえばし 令和8年6月号・9月号（いずれも2026年11月27日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">2026年度の縁活カフェ（全8回）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              縁活カフェは、前橋市の「前橋結婚応援パートナー支援事業」として、前橋の地域若者会議middle縁活プロジェクトチームと市が協働して開いています。申込みと問い合わせは同プロジェクトチームが受け付けており、連絡先は市の案内ページと年間チラシに掲載されています。年間チラシでは、対象を20〜30代の独身の方（年齢は相談可）としています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>回</th><th className={th}>日時・会場</th><th className={th}>定員・参加費</th><th className={th}>状況（11月27日時点）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>第1回</td><td className={td}>2026年5月8日（金）19時〜21時／KINGPIN CAFE</td><td className={td}>男女各15人／男性3,500円・女性2,000円</td><td className={td}>開催済（市公式）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>第2回</td><td className={td}>2026年6月5日（金）19時〜21時30分／環境システム荻窪公園</td><td className={td}>男女各15人／男性3,500円・女性2,000円</td><td className={td}>開催日経過</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>第3回</td><td className={td}>2026年7月31日（金）19時15分〜21時15分／アメイジンググレイス前橋</td><td className={td}>男女各12人／男性4,500円・女性2,500円</td><td className={td}>開催日経過</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>第4回</td><td className={td}>2026年9月4日（金）19時〜21時／はっぴーすまいる。</td><td className={td}>男女各10人／男性3,500円・女性2,000円</td><td className={td}>開催日経過</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>第5回</td><td className={td}>2026年10月3日（土）13時〜15時／biko cafe karakaze</td><td className={td}>男女各7人／男性3,500円・女性2,000円</td><td className={td}>開催日経過</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>第6回</td><td className={td}>2026年12月6日（日）13時〜16時／道の駅まえばし赤城</td><td className={td}>男女各12人／男性3,500円・女性2,000円</td><td className={td}>あいぷろの掲載では男性は定員に達し募集終了、女性は引き続き募集中</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>第7回</td><td className={td}>2027年1月29日（金）19時〜21時／HANADAN CAFE</td><td className={td}>チラシでは男女各10人程度／男性3,500円・女性2,000円</td><td className={td}>2026年11月27日時点で募集の案内は未掲載</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>第8回</td><td className={td}>2027年3月のいずれかの土曜日 13時〜16時／みるこのカフェ</td><td className={td}>チラシでは男女各7人程度／男性3,500円・女性2,000円</td><td className={td}>日程未定</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              定員は広報まえばし（第1回〜第6回）と年間チラシ（第7回・第8回）の記載によります。第3回と第6回は、チラシの作成後に日程・内容が変更されたと市の案内ページに記載されています。12月6日の第6回は、男性参加者を中心に料理を作り、男女で食事をしながら交流する内容で、カップリングは行わないと案内されています。開催日の3日前から参加費全額のキャンセル料がかかります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={ENKATSU_URL} {...ext}>前橋市「2026縁活カフェを開催します！」（2026年5月21日更新）</a>・<a href={ENKATSU_PDF_URL} {...ext}>「2026縁活カフェチラシ（年間）」（PDF）</a>・広報まえばし 令和8年4月号・5月号・7月号・8月号・9月号・11月号・<a href={AIPRO_EVENT_URL(27450)} {...ext}>あいぷろ「料理を楽しむ縁活」</a>（いずれも2026年11月27日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">2026年に前橋市内で開催・予定された公的な婚活イベント（{events2026.length}件・当サイト集計）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              当サイトは、広報まえばし 令和8年1月号〜11月号のテキスト版をすべて検索し、前橋市内で開かれる独身男女向けの婚活イベントの記事を抜き出しました（8月号はテキスト版の第2版で確認）。12月のイベントは、群馬県の「ぐんま赤い糸プロジェクト（あいぷろ）」の掲載内容で状況を補っています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日</th><th className={th}>名称・主催等</th><th className={th}>会場・対象・参加費</th><th className={th}>状況（11月27日時点）</th></tr></thead>
                <tbody>
                  {events2026.map((e) => (
                    <tr key={e.date + e.name} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{e.date}</td>
                      <td className={td}>{e.name}<br />{e.host}<br />掲載：広報まえばし {e.src.split("・")[0]}{e.src.includes("あいぷろ") ? "・あいぷろ" : ""}</td>
                      <td className={td}>{e.detail}</td>
                      <td className={td}>{e.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              当サイトが{events2026.length}件を集計すると、前橋の地域若者会議middle縁活プロジェクトチームの交流会が{enkatsuCount}件（うち5月以降の6件が2026年度の縁活カフェ）、市（共生社会推進課）の事業が{cityCount}件で、ほかにスポーツを通じた交流が2件（2月のボウリング、12月のソフトバレーボール）でした。参加費は1回あたり500円〜4,500円で、全3回の自分磨き応援事業は女性4,000円・男性5,500円です。対象年齢は、縁活カフェが20代〜30代、市の事業が25〜35歳または30〜40歳で、40歳以上が対象に含まれていたのは7月11日の回（40歳まで）と2月6日のボウリング（40〜59歳の枠）でした。
            </p>
            <p>
              前年度には、市が株式会社コシダカホールディングス（共同運営企業：株式会社エウレカ）と、2025年11月28日にカラオケ店を会場とする婚活イベントを開いています（市内在住・在勤または近隣市町村在住の25〜35歳の独身男女各10人、参加料500円）。市の事業は年度ごとに内容が変わるため、広報まえばしと、あいぷろのイベント情報をあわせて確認することが実際的な方法です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={KOHO_INDEX_URL} {...ext}>前橋市「電子広報」</a>の広報まえばし 令和8年<a href={KOHO_URL["1月号"]} {...ext}>1月号</a>・<a href={KOHO_URL["2月号"]} {...ext}>2月号</a>・<a href={KOHO_URL["4月号"]} {...ext}>4月号</a>・<a href={KOHO_URL["5月号"]} {...ext}>5月号</a>・<a href={KOHO_URL["6月号"]} {...ext}>6月号</a>・<a href={KOHO_URL["7月号"]} {...ext}>7月号</a>・<a href={KOHO_URL["8月号"]} {...ext}>8月号</a>・<a href={KOHO_URL["9月号"]} {...ext}>9月号</a>・<a href={KOHO_URL["11月号"]} {...ext}>11月号（テキスト版）</a>・<a href={AIPRO_EVENT_URL(27725)} {...ext}>あいぷろ「スポーツ婚活交流会」</a>・<a href={PRESS_20251030_URL} {...ext}>前橋市 報道発表資料（令和7年10月30日）</a>（いずれも2026年11月27日確認）。開催日を過ぎた回の実施状況・参加人数は、当サイトでは確認していません。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">あいぷろに掲載されている前橋市内の12月のイベント</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              群馬県には会員登録制の県営お見合いセンターがなく、県の出会い支援は、協賛団体や市町村が開くイベントの情報を発信する「ぐんま赤い糸プロジェクト（あいぷろ）」が中心です。参加は主催者へ直接申し込み、参加費用は個人負担です。県全体の仕組みや、館林市・桐生市社会福祉協議会の結婚相談は、<Link href="/knowledge/gunma/" className="underline">群馬県の結婚支援のページ</Link>で整理しています。
            </p>
            <p>
              2026年11月27日にあいぷろのイベント情報を確認したところ、12月開催分は10件で、うち<strong>前橋市内の会場は3件</strong>でした（当サイトが数えた値）。12月6日の縁活カフェ第6回、12月13日のスポーツ婚活交流会（開催中止）のほか、12月18日（金）にお野菜食堂そら（総社町）主催の婚活パーティーが掲載されています。この回は35〜50歳の独身の方が対象で、男女各7名、参加費は男性4,500円・女性2,500円、募集期間は11月28日から12月17日正午までです。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={AIPRO_URL} {...ext}>ぐんまスマイルライフ「ぐんま赤い糸プロジェクト」イベント情報（2026年12月）</a>・<a href={AIPRO_EVENT_URL(27450)} {...ext}>「料理を楽しむ縁活」</a>・<a href={AIPRO_EVENT_URL(27725)} {...ext}>「スポーツ婚活交流会」</a>・<a href={AIPRO_EVENT_URL(27969)} {...ext}>「婚活party ちょっと早いXmas」</a>（いずれも2026年11月27日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">親向けの結婚相談会と、相談窓口の状況</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              広報まえばしには、未婚の子の結婚に悩む親向けの「こどもの結婚の悩み事相談会」が、2026年1月号から11月号まで毎号掲載されています（問合せ先はグンマDEアイ縁活ラボ）。当サイトが各号から日程を拾うと、1月28日・2月25日・3月25日・4月22日・5月27日・6月24日・7月22日・8月19日・9月23日・10月28日・11月25日の11回で、いずれも水曜日です。6月24日は{"K'BIXまえばし福祉会館"}での合同相談会（先着20人・10時30分〜12時）、ほかの回は10時〜15時の個別相談会で、会場はミヤケン元気21（1〜3月号の表記は前橋プラザ元気21）です。予約制で、費用は広報に記載がありません。独身の本人向けの登録制の相談ではありません。
            </p>
            <p>
              前橋市社会福祉協議会の公式サイトのメニューには、結婚相談の項目は見当たりませんでした。同会の心配ごと相談所（{"K'BIXまえばし福祉会館"}3階、平日13時〜16時）は、職業・生計・家族・離婚・財産・年金・住宅・法律などの相談を受け付けていますが、お相手を紹介する結婚相談ではありません。県内で登録制の公的な結婚相談を行っている館林市・桐生市社会福祉協議会の例は、<Link href="/knowledge/gunma/" className="underline">群馬県のページ</Link>をご覧ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={KOHO_INDEX_URL} {...ext}>広報まえばし 令和8年1月号〜11月号</a>（テキスト版）・<a href={SHAKYO_URL} {...ext}>前橋市社会福祉協議会</a>・<a href={SHAKYO_SHINPAI_URL} {...ext}>同「心配ごと相談所」</a>（いずれも2026年11月27日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚後の支援：結婚新生活支援事業の状況と市の制度</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              群馬県の結婚・子育て応援ポータルサイトは、新婚世帯の住居費・引越費用などを補助する結婚新生活支援事業（現在の名称は「結婚・妊娠・共育ての相談機会提供・支援プログラム」）を実施している県内市町村の一覧を掲載しています。令和8年4月現在の一覧は15市町村（沼田市・館林市・富岡市・安中市・みどり市と10町村）で、<strong>前橋市は含まれていません</strong>。前橋市の「令和8年度補助金等一覧」（給付金を含む）を当サイトで検索した範囲でも、新婚世帯向けの補助の項目は見当たりませんでした。実施の有無は年度によって変わる可能性があるため、市役所にお問い合わせください。
            </p>
            <p>
              このほか、前橋市の市営住宅の入居資格では、同居する親族等に事実上婚姻関係にある方やぐんまパートナーシップ宣誓者が含まれ、市内在住・在勤の要件は令和8年4月に撤廃されています（収入基準などほかの要件があります）。市の人生記念樹の配布（広報まえばし 令和8年4月号）では、前年度に結婚した市内在住の方が対象の一つになっていました。新婚・結婚予定のカップル向けの県の「ぐんま結婚応援パスポート（コンパス）」は、<Link href="/knowledge/gunma/" className="underline">群馬県のページ</Link>で整理しています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SHINSEIKATSU_LIST_URL} {...ext}>ぐんまスマイルライフ「結婚・妊娠・共育ての相談機会提供・支援プログラム（旧：結婚新生活支援事業）」</a>・<a href={HOJO_URL} {...ext}>前橋市「補助金等一覧」（2026年4月1日更新）</a>・<a href={HOJO_PDF_URL} {...ext}>「令和8年度補助金等一覧」（PDF）</a>・<a href={SHIEI_URL} {...ext}>前橋市「入居申込みの資格」（2026年4月1日更新）</a>・<a href={KOHO_URL["4月号"]} {...ext}>広報まえばし 令和8年4月号</a>（いずれも2026年11月27日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な支援と民間の結婚相談所の費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>特徴</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>縁活カフェ（市と協働）</td><td className={td}>1回あたり男性3,500円・女性2,000円（7月の回は男性4,500円・女性2,500円）</td><td className={td}>カフェや体験を通じた少人数の交流。年8回、20〜30代が中心</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>市の婚活イベント（共生社会推進課）</td><td className={td}>男性2,000円・女性1,000円（7月の回）、全3回で男性5,500円・女性4,000円（自分磨き応援事業）</td><td className={td}>2026年は2事業。抽選制で、対象は25〜35歳または30〜40歳</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/gunma/" className="text-[#A08447] underline">群馬県「あいぷろ」</Link></td><td className={td}>登録不要。各イベントの参加費は個人負担</td><td className={td}>出会いイベントの情報発信。お見合いの仲介は行っていない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>担当者によるお相手の提案や交際中の相談を行うところが多い</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用だけを比べると、前橋市の公的な婚活イベントは1回数千円で参加でき、民間の結婚相談所よりも大幅に低く抑えられます。一方で、前橋市では登録制の公的な結婚相談の案内が見当たらず、イベントは抽選制で定員が男女各7〜16人と少なく、対象年齢も40歳前後までの回がほとんどです。41歳以上の方や、継続的にお相手の紹介を受けたい方、交際中の相談をしたい方は、民間の結婚相談所が現実的な選択肢になります。まず縁活カフェや市のイベントなど低額の公的な機会を試し、頻度やサポートが足りないと感じた場合に民間を検討する、という順序が目安です。前橋市から利用できるオンライン型の結婚相談所や、埼玉県・東京都の結婚相談所も選択肢になります。入会前に1年間の総額を各社へ確認することをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。公的な支援の料金は、本ページの各出典（2026年11月27日確認）によります。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/wakayama/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">和歌山県の結婚支援</Link>
            <Link href="/knowledge/ichinomiya/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">一宮市の婚活支援</Link>
            <Link href="/knowledge/ono/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">小野市の結婚支援</Link>
            <Link href="/knowledge/kitami/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">北見市の婚活支援</Link>
            <Link href="/knowledge/gunma/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">群馬県の結婚支援（あいぷろ）</Link>
            <Link href="/knowledge/takasaki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">高崎市の結婚相談・婚活支援</Link>
            <Link href="/knowledge/tochigi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">栃木県の結婚支援</Link>
            <Link href="/knowledge/nagano/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">NAGANO ai MATCH（長野県）</Link>
            <Link href="/knowledge/niigata/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">新潟市の婚活（ハートマッチにいがた）</Link>
            <Link href="/knowledge/40s/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">42歳・40代の婚活の現状</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
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
