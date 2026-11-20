import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-20 確認）。
// ・帯広市農業者結婚推進協議会の構成（帯広市・帯広市農業委員会・帯広市川西農業協同組合・帯広大正農業協同組合）、令和2年度〜令和8年度の交流会の開催実績、問合せ先：帯広市「帯広の農業青年との交流」
// ・令和8年12月5日の交流会（会場・参加費2,000円・女性の対象概ね25〜45歳・男性概ね35〜45歳・定員6名・締切11月27日・事前企画）：帯広市「PrimeFarmersとめぐり逢えた冬2026」
// ・令和8年6月20日（参加費1,000円・女性20〜35歳・定員8名程度）・7月4日（参加費2,000円・女性25〜45歳・定員10名程度）の交流会：帯広市の各イベントページ
// ・令和7年度の帯広市交流会の男性の参加者負担額（5,000円／2,000円）、十勝16市町村の結婚支援事業の一覧（令和7年5月時点の開催計画）：北海道「道内市町村の結婚支援に係る取組みについて」十勝管内PDF
// ・結婚サポートセンター北海道コンカツ情報コンシェルの設立（平成27年9月1日）・事業内容・委託先（タメニー株式会社）・令和5年度の完全オンライン化・札幌の窓口廃止・開所時間：同センター「北海道コンカツ情報コンシェルについて」
// ・同センターが紹介・マッチングを行わないこと、個別オンライン相談会（無料・約40分）：同センター「個別オンライン相談会」
// ・道主催オンライン婚活イベント（参加費無料・各回男女8名程度・11月21日と12月11日の対象年齢）：北海道「オンライン婚活イベントの開催について」（2026年11月9日更新）
// ・北海道結婚応援フォーラム（11月27日・オンライン・無料・130名）：北海道「北海道結婚応援フォーラム開催情報」
// ・幕別町農業振興公社の交流会（12月4日・2,000円／1月30〜31日・女性5,000円）、上士幌町の交流イベント（11月28〜29日・無料）：同センターの各イベントページ
// ・おびしんキューピットの会員資格・仕組み・入会預り金10,000円（退会時全額返却）・必要書類・所在地：帯広信用金庫「結婚相談所おびしんキューピット」
// ・結婚新生活支援（令和8年度実施市町村のうち十勝管内12町村）：北海道「結婚･妊娠･共育ての相談機会提供･支援プログラム（旧結婚新生活支援事業）について」（2026年9月3日更新）
// ・佐賀県のセンターの料金：当サイト /knowledge/saga/ の確認内容
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const OBIHIRO_URL = "https://www.city.obihiro.hokkaido.jp/sangyo/nougyou/nougyouiinkai/kouryu/index.html";
const OBIHIRO_DEC_URL = "https://www.city.obihiro.hokkaido.jp/sangyo/nougyou/nougyouiinkai/kouryu/1024992.html";
const OBIHIRO_JUN_URL = "https://www.city.obihiro.hokkaido.jp/sangyo/nougyou/nougyouiinkai/kouryu/1023641.html";
const OBIHIRO_JUL_URL = "https://www.city.obihiro.hokkaido.jp/sangyo/nougyou/nougyouiinkai/kouryu/1023642.html";
const PREF_MARRIAGE_URL = "https://www.pref.hokkaido.lg.jp/hf/kms/2/marriage/";
const PREF_ONLINE_URL = "https://www.pref.hokkaido.lg.jp/hf/kms/online-event.html";
const PREF_FORUM_URL = "https://www.pref.hokkaido.lg.jp/hf/kms/kekkon-forum.html";
const PREF_MUNI_URL = "https://www.pref.hokkaido.lg.jp/hf/kms/dounai-konkatsu.html";
const PREF_TOKACHI_PDF = "https://www.pref.hokkaido.lg.jp/fs/1/1/7/3/2/2/0/2/_/12%E5%8D%81%E5%8B%9D.pdf";
const PREF_SHINSEIKATSU_URL = "https://www.pref.hokkaido.lg.jp/hf/kms/kekkon-sinseikatusien.html";
const KIC_TOP_URL = "https://hokkaido-kic.com/";
const KIC_ABOUT_URL = "https://hokkaido-kic.com/about/";
const KIC_ONLINE_URL = "https://hokkaido-kic.com/online/";
const KIC_MAKUBETSU_DEC_URL =
  "https://hokkaido-kic.com/event/%e3%81%be%e3%81%8f%e3%81%b9%e3%81%a4%e8%be%b2%e3%82%b3%e3%83%b3%e3%80%8c%e5%86%ac%e3%81%ae%e5%87%ba%e4%bc%9a%e3%81%84%e3%80%81%e6%98%a5%e3%81%ae%e5%ae%9f%e3%82%8a%e3%81%b8%e3%83%bc%e8%be%b2%e6%a5%ad-3";
const KIC_MAKUBETSU_JAN_URL =
  "https://hokkaido-kic.com/event/%e3%82%af%e3%83%a9%e3%83%96%e3%82%a2%e3%83%83%e3%83%97%e3%83%ab%e5%86%ac%e3%81%ae%e5%a9%9a%e6%b4%bb%e4%ba%a4%e6%b5%81%e4%bc%9a%e3%80%8c%e5%86%ac%e3%81%ae%e5%a9%9a%e6%b4%bb-in-%e9%98%bf%e5%af%92";
const KIC_KAMISHIHORO_URL =
  "https://hokkaido-kic.com/event/%e3%81%8b%e3%81%bf%e3%81%97%e3%81%bb%e3%82%8d%e8%be%b2%e6%a5%ad%e9%9d%92%e5%b9%b4%e3%81%a8%e6%a5%bd%e3%81%97%e3%82%80%e3%83%93%e3%83%a5%e3%83%83%e3%83%95%e3%82%a7%e3%83%87%e3%82%a3%e3%83%8a%e3%83%bc";
const OBISHIN_URL = "https://www.shinkin.co.jp/obishin/relationship/marriage/";

// 北海道「道内市町村における結婚支援事業に関する実施状況調査＜R7開催計画＞」十勝管内（令和7年5月時点）から転記
const tokachi = [
  { city: "帯広市", name: "帯広市農業青年交流会", target: "農業従事者", note: "帯広市在住の独身農業後継者と農業に興味のある女性との交流会。参加者負担額は男性5,000円または2,000円、女性1,000円" },
  { city: "音更町", name: "北海道十勝農業青年との交流会／ALLとかち札幌交流会／ガチコン", target: "農業従事者", note: "十勝の複数町による合同のマッチングパーティー。合同交流会は女性無料（男性は自己負担）。ガチコンは男性16,000円" },
  { city: "士幌町", name: "士幌町若者世代交流事業", target: "士幌町に関わりのある方", note: "町内の青年団体・企業に所属する方の団体同士の交流にかかる食糧費・使用料等の1/2を助成（通年）" },
  { city: "上士幌町", name: "上士幌交流会／帯広交流会", target: "農業従事者", note: "上士幌在住の独身農業後継者と、農業や十勝の自然に興味のある北海道在住女性との交流会" },
  { city: "鹿追町", name: "第32回北海道十勝農業青年との交流会", target: "農業従事者", note: "音更・士幌・鹿追・芽室の4町による実行委員会形式。大阪府で開催予定。一覧の参加者負担額は30,000円（男女の別は記載なし）" },
  { city: "新得町", name: "新得町出会いの場創出の連携に関する協定", target: "町内在住者", note: "帯広信用金庫・新得町商工会・新得町の3者協定。おびしんキューピットの入会預り金1万円（退会時返金）" },
  { city: "清水町", name: "グリーンパートナー受入事業", target: "農業従事者", note: "全国の独身女性に町内の独身農業男性を個別に紹介。女性の交通費は道外20,000円・道内おおむね200km以上10,000円を助成、宿泊費は実費分を助成" },
  { city: "芽室町", name: "農業青年向け各種交流会の開催", target: "農業従事者", note: "交流会（年2回）、結婚相談所トライアル・おびしんキューピットの周知、農業体験など。交流会は男性5,000円〜10,000円、女性0円〜" },
  { city: "中札内村", name: "農業後継者配偶者確保対策事業", target: "農業従事者", note: "村内の農業青年・村内農家の独身女性を対象に、婚活イベント・マッチングアプリ・結婚相談所の利用を予算の範囲内で助成" },
  { city: "更別村", name: "結婚相談事業／各種交流事業", target: "農業従事者", note: "関係者と連携した結婚相談（随時）、民間主催のパーティー参加費の一部助成" },
  { city: "大樹町", name: "農業青年向け各種交流会の開催", target: "農業従事者", note: "南十勝夢街道農業青年交流会、十勝農業青年婚活交流会「ガチコン」など。男女とも負担あり" },
  { city: "幕別町", name: "グリーンパートナー対策事業", target: "農業従事者", note: "公益財団法人幕別町農業振興公社による交流会（クラブアップル・農コン）。男性8,000円程度、女性2,000〜3,000円程度" },
  { city: "本別町", name: "グリーンサポートセンター運営事業", target: "農業従事者", note: "マッチング、セミナー（無料）、成婚記念品の贈呈、民間イベント参加費の1/2以内の助成" },
  { city: "足寄町", name: "陸別・足寄・本別町三町合同農業青年交流会", target: "農業従事者", note: "釧路市内で釧路圏在住の女性と交流。男性5,000円" },
  { city: "陸別町", name: "農業青年等結婚支援活動事業", target: "町内在住者", note: "町内在住の独身者と陸別町に興味・関心がある方との交流・マッチング等（日程未定）" },
  { city: "浦幌町", name: "十勝浦幌町農業男子との交流会／ライフアップセミナー", target: "農業従事者", note: "交流会は男性5,000円・女性無料。ライフプランを作成するセミナーは無料" },
];

export const metadata: Metadata = {
  title: "帯広・十勝で婚活する方へ｜北海道のセンターは紹介なし・帯広市の農業青年交流会は女性参加費1,000〜2,000円、十勝16市町村の公的な婚活事業",
  description:
    "帯広市の公的な婚活支援は、市・農業委員会・JAの協議会が開く農業青年交流会（女性の参加費1,000〜2,000円）が中心です。1対1の紹介を行わない北海道の結婚サポートセンター、十勝16市町村の婚活事業、帯広信用金庫の結婚相談所、民間との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/obihiro/" },
};

const faqs = [
  {
    q: "帯広市に公的な結婚相談所（1対1でお相手を紹介する窓口）はありますか？",
    a: "2026年11月20日時点で、帯広市や北海道が運営する1対1の紹介の窓口は確認できませんでした。北海道の結婚サポートセンター「北海道コンカツ情報コンシェル」は、婚活の相談とイベントの開催を行っており、お相手の紹介・マッチングは行わないと明記しています。十勝管内で1対1の紹介を行う窓口としては、帯広信用金庫が地域貢献として運営する「おびしんキューピット」があり、新得町が出会いの場の創出に関する協定を結んでいます。",
  },
  {
    q: "帯広市の農業青年交流会には誰が参加できますか？費用はいくらですか？",
    a: "帯広市農業者結婚推進協議会が、帯広市の独身農業男性と独身女性の交流会を開いています。2026年12月5日の交流会は、概ね25〜45歳の独身女性が対象で参加費は2,000円、定員6名（先着・初回参加優先）、申込みは11月27日までです。2026年6月20日の回は概ね20〜35歳の女性が対象で参加費1,000円でした。男性側の参加者は帯広市の農業者で、令和7年度の計画では男性の負担額は5,000円または2,000円とされていました。",
  },
  {
    q: "北海道の結婚サポートセンターでは何ができますか？",
    a: "北海道の委託を受けてタメニー株式会社が運営する「北海道コンカツ情報コンシェル」では、無料の個別オンライン相談会（約40分）、道主催のオンライン婚活イベント（参加費無料）、結婚応援フォーラムの開催、道内の市町村・団体の婚活イベント情報の掲載を行っています。令和5年度からは完全オンライン化しており、札幌市内にあった窓口は廃止されています。",
  },
  {
    q: "農業をしていない人が帯広・十勝で使える公的な婚活支援はありますか？",
    a: "十勝16市町村の結婚支援事業（北海道の取りまとめ、令和7年5月時点）のうち、13市町村は主な対象者を農業従事者としています。農業以外の方が参加できるものとしては、北海道主催のオンライン婚活イベント（2026年11月21日は20〜35歳、12月11日は30〜45歳が対象）や、十勝管内在住の20〜50歳が入会できるおびしんキューピットがあります。1対1の紹介を受けながら活動したい場合は、民間の結婚相談所も選択肢になります。",
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
  headline: "帯広市・十勝の公的な婚活支援：帯広市の農業青年交流会、北海道の結婚サポートセンター、十勝16市町村の婚活事業と民間の結婚相談所との比較",
  description: "帯広市の農業青年交流会の参加条件・費用、北海道の結婚サポートセンターの支援内容、十勝16市町村の結婚支援事業、帯広信用金庫の結婚相談所、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-20",
  dateModified: "2026-11-20",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/obihiro/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "帯広市・十勝の婚活支援", item: "https://mu-su-bi-ba.com/knowledge/obihiro/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeObihiro() {
  const farmCount = new Set(tokachi.filter((t) => t.target === "農業従事者").map((t) => t.city)).size;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "帯広市・十勝の婚活支援" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          帯広市・十勝で婚活する方へ：帯広市の農業青年交流会、北海道の結婚サポートセンター、十勝16市町村の婚活事業と民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月20日（帯広市の交流会、北海道の結婚支援事業、北海道コンカツ情報コンシェルの支援内容とイベント、帯広信用金庫の結婚相談所は同日に帯広市・北海道・各運営団体の公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />帯広市の公的な婚活支援は農業青年との交流会が中心で、北海道のセンターは1対1の紹介を行っていません
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>帯広市・帯広市農業委員会・市内2農協で組織する<strong>帯広市農業者結婚推進協議会</strong>が、帯広市の独身農業男性と独身女性の交流会を開いています。次回は<strong>2026年12月5日</strong>で、概ね25〜45歳の女性が対象、<strong>参加費2,000円</strong>・定員6名・申込みは11月27日までです。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>北海道の結婚サポートセンター「<strong>北海道コンカツ情報コンシェル</strong>」は、無料のオンライン相談とイベントの開催が中心で、<strong>お相手の紹介・マッチングは行っていません</strong>。道主催のオンライン婚活イベントは参加費無料です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>北海道の取りまとめ（令和7年5月時点）では、十勝管内の<strong>16市町村</strong>が結婚支援事業を計画しており、そのうち<strong>{farmCount}市町村は主な対象者を農業従事者</strong>としています（当サイト集計）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>十勝管内で1対1の紹介を受けられる窓口として、帯広信用金庫の「<strong>おびしんキューピット</strong>」（十勝管内在住の20〜50歳、入会預り金10,000円は退会時に全額返却）があります。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">帯広市の農業青年交流会（帯広市農業者結婚推進協議会）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              帯広市、帯広市農業委員会、帯広市川西農業協同組合、帯広大正農業協同組合の4者で組織する帯広市農業者結婚推進協議会は、帯広市の農業青年の結婚対策として、農業に興味のある独身女性と独身農業青年の交流事業を行っています。問合せ先は帯広市農業委員会事務局で、公式ページには令和2年度以降、毎年度の夏と冬を中心とした交流会の開催実績が掲載されています。2026年度（令和8年度）の開催・予定は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日・名称</th><th className={th}>女性の対象・定員</th><th className={th}>参加する農業男性</th><th className={th}>女性の参加費</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={OBIHIRO_JUN_URL} {...ext}>2026年6月20日「GreenFarmersと出逢う夏2026」</a>（終了）</td><td className={td}>概ね20〜35歳の独身女性・8名程度（先着順）</td><td className={td}>概ね20〜35歳</td><td className={td}>1,000円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={OBIHIRO_JUL_URL} {...ext}>2026年7月4日「PrimeFarmersとめぐり逢えた夏2026」</a>（終了）</td><td className={td}>概ね25〜45歳の独身女性・10名程度（先着順）</td><td className={td}>概ね35〜45歳</td><td className={td}>2,000円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={OBIHIRO_DEC_URL} {...ext}>2026年12月5日「PrimeFarmersとめぐり逢えた冬2026」</a>（募集中・11月27日締切）</td><td className={td}>概ね25〜45歳の独身女性・6名（先着・初回参加優先）</td><td className={td}>概ね35〜45歳</td><td className={td}>2,000円</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              12月5日の交流会は、帯広市西1条南11丁目のワインバルで18時から20時30分まで開かれます。交流会の前には、農家に嫁いだ女性に仕事や結婚生活について質問できる事前企画（参加無料・交流会の申込者が対象）が予定されています。いずれの回も、申込みの際のアンケートをもとに協議会がプロフィールシートを作成し、当日はそのシートを使って交流する形式です。6月・7月の回は、公式ページで定員に達したと案内されていました。
            </p>
            <p>
              男性側の参加費は各回のページに記載がありません。北海道が取りまとめた令和7年度の開催計画では、帯広市農業青年交流会の参加者負担額は男性5,000円または2,000円、女性1,000円とされています。この交流会は帯広市の農業者との出会いを目的とした事業で、農業以外の職業の男性が参加する事業ではありません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={OBIHIRO_URL} {...ext}>帯広市「帯広の農業青年との交流」</a>・表内の各イベントページ・<a href={PREF_TOKACHI_PDF} {...ext}>北海道「道内市町村における結婚支援事業に関する実施状況調査＜R7開催計画＞」十勝管内（PDF）</a>（いずれも2026年11月20日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">北海道の結婚サポートセンター「北海道コンカツ情報コンシェル」</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>北海道の委託事業（受託者：タメニー株式会社）。平成27年（2015年）9月1日設立。道の担当は保健福祉部子ども政策局子ども政策企画課</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>事業内容</td><td className={td}>結婚を希望する方への個別相談、結婚支援に関するフォーラムの開催、オンライン婚活イベントの開催、道内企業・市町村等と連携した取組み</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お相手の紹介</td><td className={td}>行っていない（公式サイトに「婚活におけるお相手様のご紹介・マッチングは行っておりません」と記載）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>相談の方法</td><td className={td}>令和5年度から完全オンライン化し、札幌市内の窓口は廃止。個別オンライン相談会（Zoom・約40分・無料）のほか、電話・メールでも受付</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>開所時間</td><td className={td}>木曜日〜月曜日 11:00〜18:00（火曜日・水曜日・年末年始は休所。祝日は開所し、翌日が休所）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              道が主催するオンライン婚活イベントは参加費無料（通信料は自己負担）で、各回男性8名程度・女性8名程度の定員です。2026年度は7月から毎月開かれており、2026年11月20日時点で残りの回は<strong>11月21日（20〜35歳が対象）</strong>と<strong>12月11日（30〜45歳が対象）</strong>です。対象は北海道在住の方、北海道に移住したい方、北海道に住んでいる方と出会いたい方です。募集状況は回ごとに変わるため、北海道の結婚サポートセンターの公式サイトでご確認ください。また、11月27日（金）16時からは「北海道結婚応援フォーラム」がオンラインで開かれます（無料・募集130名・後日のアーカイブ視聴あり）。
            </p>
            <p>
              センターの公式サイトには、道内の市町村や団体が開く婚活イベントの情報も掲載されています。2026年11月20日時点では、十勝管内の団体の催しとして、上士幌町の農業青年との1泊2日の交流イベント（11月28〜29日・20〜35歳の女性・参加費無料）、公益財団法人幕別町農業振興公社の食事会（12月4日・帯広市内で開催・概ね30〜40歳の女性・2,000円）と阿寒湖温泉での交流会（2027年1月30〜31日・概ね35歳までの女性・5,000円）が掲載されていました。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={KIC_ABOUT_URL} {...ext}>北海道コンカツ情報コンシェル「北海道コンカツ情報コンシェルについて」</a>・<a href={KIC_ONLINE_URL} {...ext}>「個別オンライン相談会」</a>・<a href={KIC_TOP_URL} {...ext}>公式トップページ</a>・<a href={KIC_KAMISHIHORO_URL} {...ext}>上士幌町のイベントページ</a>・<a href={KIC_MAKUBETSU_DEC_URL} {...ext}>幕別町12月4日のイベントページ</a>・<a href={KIC_MAKUBETSU_JAN_URL} {...ext}>幕別町1月30日のイベントページ</a>・<a href={PREF_ONLINE_URL} {...ext}>北海道「オンライン婚活イベントの開催について」</a>・<a href={PREF_FORUM_URL} {...ext}>北海道「北海道結婚応援フォーラム開催情報」</a>・<a href={PREF_MARRIAGE_URL} {...ext}>北海道「結婚支援」</a>（いずれも2026年11月20日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">十勝16市町村の結婚支援事業（令和7年5月時点の計画）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              北海道は、道内市町村の結婚支援事業の取組状況を管内ごとに取りまとめて公表しています。十勝管内では16市町村の事業が掲載されており、内容は次のとおりです。令和7年（2025年）5月時点の開催計画であり、道は事業が変更・中止となる可能性があるとしています。最新の内容は各市町村の担当窓口でご確認ください。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>市町村</th><th className={th}>事業名</th><th className={th}>主な対象者</th><th className={th}>内容・参加者負担額</th></tr></thead>
                <tbody>
                  {tokachi.map((t) => (
                    <tr key={t.city} className="border-t border-[#E5DCCF] align-top"><td className={td}>{t.city}</td><td className={td}>{t.name}</td><td className={td}>{t.target}</td><td className={td}>{t.note}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              16市町村のうち{farmCount}市町村は主な対象者を農業従事者としており、十勝の公的な婚活事業は、農業後継者と農業に関心のある女性との出会いの場づくりが中心です。農業以外の方が対象に含まれるのは、士幌町の若者世代交流事業（町内の青年団体・企業の交流への助成）と、新得町の協定（町内在住者）、陸別町の事業（町内在住の独身者と陸別町に関心のある方の交流）です。結婚相談所の利用を助成対象に含む事業として、中札内村の農業後継者配偶者確保対策事業があります（村内の農業青年・村内農家の独身女性が対象、予算の範囲内）。
            </p>
            <p>
              結婚後の新生活については、北海道の一覧（2026年9月3日更新）で、令和8年度に結婚新生活支援（新居の購入費・家賃・引越費用等の支援）を実施する市町村として、十勝管内では音更町・士幌町・上士幌町・鹿追町・新得町・清水町・芽室町・中札内村・更別村・広尾町・幕別町・足寄町の12町村が掲載されています。帯広市はこの一覧に含まれていません。支給額や要件は町村ごとに異なります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_MUNI_URL} {...ext}>北海道「道内市町村の結婚支援に係る取組みについて」</a>・<a href={PREF_TOKACHI_PDF} {...ext}>同 十勝管内（PDF・令和7年5月時点）</a>・<a href={PREF_SHINSEIKATSU_URL} {...ext}>北海道「結婚･妊娠･共育ての相談機会提供･支援プログラム（旧結婚新生活支援事業）について」</a>（いずれも2026年11月20日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">十勝管内で1対1の紹介を受けられる「おびしんキューピット」</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>帯広信用金庫（社会貢献活動として運営）。事務局は帯広市西2条南7丁目7番地2 帯広信用金庫第2ビル内、電話0155-67-7845（平日10:00〜18:00）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会員資格</td><td className={td}>十勝管内に住んでいる方／申込み時の年齢が原則20歳以上50歳以下／法的にも実生活上も独身／結婚したいという明確な意思がある／反社会的勢力ではない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>費用</td><td className={td}>入会預り金10,000円（退会時に全額返却）。公式ページにはそれ以外の料金の記載なし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>仕組み</td><td className={td}>希望に沿った方のプロフィールと写真を見て、会いたい方がいれば事務局が先方に連絡。了解が得られればお見合い（会場は帯広信用金庫第2ビル内）。双方が希望すれば3か月の交際期間を設け、その間に結婚を前提とした交際の継続か辞退かを決める</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類等</td><td className={td}>入会申込書・プロフィール・誓約書、戸籍謄本または独身証明書、最終学歴の卒業証書、収入証明書（源泉徴収票など）、申込書用写真1枚、プロフィール用写真2枚、印鑑、身分証明書</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              おびしんキューピットは自治体の事業ではありませんが、北海道の取りまとめでは、新得町が帯広信用金庫・新得町商工会と結んだ「出会いの場創出の連携に関する協定」の中で利用されており、芽室町も農業青年向け事業の中で周知しています。会員数や成婚数は公式ページに掲載されていないため、入会前の面談で確認することをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={OBISHIN_URL} {...ext}>帯広信用金庫「結婚相談所おびしんキューピット」</a>・<a href={PREF_TOKACHI_PDF} {...ext}>北海道 十勝管内の結婚支援事業一覧（PDF）</a>（いずれも2026年11月20日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な支援・他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>費用</th><th className={th}>1対1の紹介</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>北海道主催のオンライン婚活イベント</td><td className={td}>無料（通信料は自己負担）</td><td className={td}>なし（イベント形式）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>帯広市農業青年交流会</td><td className={td}>女性1,000円〜2,000円（2026年度の各回）</td><td className={td}>なし（交流会形式）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>おびしんキューピット（帯広信用金庫）</td><td className={td}>入会預り金10,000円（退会時に全額返却）</td><td className={td}>あり</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/saga/" className="text-[#A08447] underline">佐賀県「さが出会いサポートセンター」</Link>（参考）</td><td className={td}>5,000円/年</td><td className={td}>あり（県のマッチングシステム）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              佐賀県のように県が会員制のマッチングシステムを運営している地域もありますが、北海道の結婚サポートセンターは相談とイベントが中心で、会員登録をしてお相手の紹介を受ける仕組みはありません。帯広・十勝の公的な事業は費用を低く抑えられる一方で、多くは農業者との出会いを目的としており、開催は年に数回です。継続的にお相手の紹介を受けたい場合は、おびしんキューピットのほか、帯広から利用できるオンライン型の結婚相談所や、札幌市の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。佐賀県のセンターの料金は、センターの公式サイトで2026年11月19日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/area/sapporo/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">札幌・北海道の結婚相談所</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/knowledge/saga/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">さが出会いサポートセンター（佐賀県）</Link>
            <Link href="/knowledge/akita/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">あきた結婚支援センター（秋田県）</Link>
            <Link href="/knowledge/niigata/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">新潟市の婚活支援</Link>
            <Link href="/knowledge/kumamoto/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">くまもと出会いサポートセンター“Kumarry”（熊本県）</Link>
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
