import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-23 確認）。
// ・上田市結婚支援ネットワーク実行委員会の構成団体・取組、令和8年度のイベント（10/18・11/1・11/29・メタバース）、令和7年度・令和6年度のイベント、公式LINE、R7結婚新生活支援の終了：上田市「結婚支援」（2026年11月14日更新）
// ・令和7年度のイベント詳細：上田市 各イベントページ（115102・116146・116153）。支援者のための婚活セミナー（2026年1月22日）：同 122434
// ・結婚新生活支援事業（令和8年度）の対象・支給要件・補助額・申請期間・申請先：上田市「令和8年度結婚新生活支援事業」（2026年6月15日更新）
// ・事業費・KPI・婚姻件数（R6）・新婚補助の見込世帯数とR7申請状況：上田市「令和8年度地域少子化対策重点推進事業」（2026年7月1日更新）掲載の実施計画書PDF2点
// ・上田市社協の結婚相談（上田・丸子の2か所、登録・相談無料、相談日時、電話、NAGANO ai MATCH登録受付10,000円/2年）：上田市社会福祉協議会「相談事業」
// ・上小地域の公的相談所の登録要件・期間・料金・相談日：チアフルながの 各相談所ページ（621・15078・605・620・581・622）
// ・東信地域のイベント（11/25メタバース、11/29、12/5友活交流会、12/5小海町、12/13南相木村）：チアフルながの イベント一覧・各イベントページ
// ・NAGANO ai MATCHの登録料・利用条件・女性キャンペーン：NAGANO ai MATCH公式ページ、チアフルながの お知らせ（2026年5月8日）。一時停止と再開：同 お知らせ（2026年11月2日更新）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const CITY_URL = "https://www.city.ueda.nagano.jp/soshiki/iju/2485.html";
const CITY_EVENT_URL = (id: number) => `https://www.city.ueda.nagano.jp/soshiki/iju/${id}.html`;
const SUBSIDY_URL = "https://www.city.ueda.nagano.jp/soshiki/iju/2182.html";
const PLAN_URL = "https://www.city.ueda.nagano.jp/soshiki/iju/1039.html";
const PLAN_PDF_URL = "https://www.city.ueda.nagano.jp/uploaded/attachment/82982.pdf";
const PLAN_PDF2_URL = "https://www.city.ueda.nagano.jp/uploaded/attachment/82983.pdf";
const SHAKYO_URL = "https://www.ueda-shakyo.or.jp/?page_id=415";
const CHEERFUL_EVENT_URL = (id: number) => `https://www.cheerful-nagano.com/marriage/event/${id}/`;
const CHEERFUL_COUNSEL_URL = (id: number) => `https://www.cheerful-nagano.com/marriage/counseling/${id}/`;
const AIMATCH_URL = "https://www.nagano-aimatch.jp/matching/";
const CAMPAIGN_URL = "https://www.cheerful-nagano.com/news-marriage/31543/";
const OUTAGE_URL = "https://www.cheerful-nagano.com/news-marriage/32953/";

// 2026年11月23日時点で日程が掲載されている、上田市・東信地域のイベント
const upcomingEvents = [
  {
    date: "2026年11月25日（水）19:30〜20:00",
    name: "イントロクイズ（メタバース交流）",
    url: CHEERFUL_EVENT_URL(33058),
    org: "上田市結婚支援ネットワーク実行委員会",
    detail: "オンライン（メタバース空間）。会費無料、男女各50名・先着順。39歳以下（昭和62年以降生まれ）の独身の方。男性は上田地域定住自立圏に在住・在勤の方、女性は地域を問わない。申込みは公式LINEから、11月25日18時まで",
  },
  {
    date: "2026年11月29日（日）13:30〜16:30",
    name: "39歳以下向け婚活イベント（ワインセミナー・交流会）",
    url: CITY_URL,
    org: "上田地域定住自立圏",
    detail: "とうみワイン＆ビアミュージアム（東御市）。男女各20名・抽選。会費は男性2,000円・女性1,500円。上田駅温泉口から送迎バスあり。男性の申込みは11月13日、女性の申込みは11月23日で締切",
  },
  {
    date: "2026年12月5日（土）19:00〜21:00",
    name: "友活交流会",
    url: CHEERFUL_EVENT_URL(32807),
    org: "上田市社会福祉協議会",
    detail: "上田市中央の飲食店。40〜55歳の独身の方、男女各12人・抽選。会費は男性6,000円・女性2,000円（事前振込）。男性は上田市在住者を優先。申込みは11月3日で締切済み",
  },
  {
    date: "2026年12月13日（日）",
    name: "スイーツな出逢い",
    url: CHEERFUL_EVENT_URL(32740),
    org: "南相木村",
    detail: "ヴィーナスコート佐久平（佐久市）。20〜45歳の独身の方、男女各10名・抽選。会費は男性2,000円・女性1,000円。男性は南相木村在住・在勤・移住に関心のある方を優先、女性は地域制限なし。締切は12月9日",
  },
];

// 令和7年度以降に上田市・上田地域定住自立圏が開いた婚活イベント（終了分）
const pastEvents = [
  { date: "2025年10月4日（土）・10月19日（日）・11月9日（日）", name: "35歳以下向け（セミナー＋交流会2回）", place: "上田市役所／菅平高原のホテル／上田市天神のホテル", fee: "交流会 男性2,000円・女性1,000円", cap: "男女各30名", url: CITY_EVENT_URL(115102) },
  { date: "2025年11月30日（日）", name: "39歳以下向け【上田地域定住自立圏主催】", place: "上田市天神のホテル", fee: "男性2,000円・女性1,500円", cap: "男女各20名", url: CITY_EVENT_URL(116153) },
  { date: "2025年12月7日（日）", name: "36〜45歳向け（身だしなみ・パーソナルカラーセミナー＋交流会）", place: "上田市天神のホテル", fee: "男性3,000円・女性2,000円", cap: "男女各15名", url: CITY_EVENT_URL(116146) },
  { date: "2026年1月22日（木）", name: "支援者のための婚活セミナー（親御さん・結婚相談員向け）", place: "サントミューゼ（上田市天神）", fee: "無料", cap: "30名程度", url: CITY_EVENT_URL(122434) },
  { date: "2026年10月18日（日）", name: "29歳以下向け婚活イベント", place: "上田市天神の飲食店", fee: "男性2,500円・女性2,000円", cap: "男女各20名", url: CITY_URL },
  { date: "2026年11月1日（日）", name: "39歳以下向け婚活イベント（ピザ作り体験）", place: "菅平高原のホテル", fee: "男性2,500円・女性2,000円", cap: "男女各20名", url: CITY_URL },
];

// 上田地域定住自立圏の長野県内市町村にある公的結婚相談所（チアフルながの掲載）
const counselors = [
  { name: "上田市社会福祉協議会", id: 621, req: "18歳以上の独身の方", term: "2年", day: "上田地区センター：隔週水曜日・第2土曜日、丸子地区センター：第4土曜日（いずれも10:00〜15:00、受付14:30まで）※上田市社協の相談事業ページによる" },
  { name: "東御市社会福祉協議会 結婚相談所", id: 15078, req: "18歳以上の独身の方", term: "5年", day: "第2・第4日曜日 9:00〜12:00（東御市中央公民館）" },
  { name: "青木村社会福祉協議会 青木村結婚相談所", id: 605, req: "18歳以上の独身の方", term: "期限なし", day: "毎月第3日曜日 13:00〜16:00" },
  { name: "長和町社会福祉協議会 長和町結婚相談所", id: 620, req: "20歳以上の独身の方（男性は町内在住、または町内で就労する方）", term: "期限なし", day: "毎月第3日曜日 原則13:30〜16:00" },
  { name: "立科町結婚情報センター", id: 581, req: "18歳以上で結婚を希望する独身の方", term: "3年", day: "毎月第2日曜日 13:30〜15:30" },
  { name: "坂城町社会福祉協議会", id: 622, req: "18歳以上の独身の方（男性は長野圏域・上小圏域在住）", term: "2年", day: "毎月第1土曜日（年8回の規定日）9:00〜11:00・要予約" },
];

export const metadata: Metadata = {
  title: "上田市で婚活する方へ｜市の婚活イベントは参加費1,000〜3,000円、社協の結婚相談は登録無料、新婚世帯に最大60万円の補助と民間との費用比較",
  description:
    "上田市は「上田市結婚支援ネットワーク実行委員会」で年齢別の婚活イベントやメタバース交流を開いています。令和7年度以降の開催実績と参加費、上田市社会福祉協議会の無料の結婚相談、上小地域の公的相談所、新婚世帯への補助（最大60万円）、民間との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/ueda/" },
};

const faqs = [
  {
    q: "上田市の婚活イベントにはいくらかかりますか？",
    a: "上田市・上田地域定住自立圏が令和7年度以降に開いた交流会の参加費は、男性2,000円〜3,000円、女性1,000円〜2,000円です（2026年11月29日の東御市会場のイベントは男性2,000円・女性1,500円）。メタバース交流と支援者向けセミナーは無料です。参加費は参加決定後の事前払いで、支払後に辞退した場合は返金されないと案内されています。",
  },
  {
    q: "上田市外に住んでいても参加できますか？",
    a: "市の婚活イベントは、男性は上田地域定住自立圏（上田市・東御市・青木村・長和町・坂城町・立科町・嬬恋村）に在住または在勤の方が対象で、女性は地域を問わず参加できるものが中心です。ただし、上田市内在住・在勤の方やメタバース交流の参加者が優先される回があります。条件は回ごとに異なるため、各イベントの案内でご確認ください。",
  },
  {
    q: "上田市で結婚相談を受けられる窓口はどこですか？",
    a: "上田市社会福祉協議会が、上田地区センター（結婚相談の電話0268-22-3082）と丸子地区センター（0268-42-0033）の2か所で結婚相談を行っています。2か所は情報を共有しており、どちらでも受け付けています。登録・相談は無料です。",
  },
  {
    q: "NAGANO ai MATCHには上田市で登録できますか？",
    a: "上田市社会福祉協議会は、県のマッチングシステム「NAGANO ai MATCH」の利用団体で、システムへの登録も受け付けています。システム登録料は10,000円（2年間）で、令和9年3月31日までは新規登録の女性先着200名を対象に1年間無料となるキャンペーンが実施されています。料金や申込みのルールの詳細は、当サイトの長野県のページで整理しています。",
  },
  {
    q: "上田市の結婚新生活支援事業補助金はいくらですか？",
    a: "令和8年度は、婚姻日の年齢が夫婦ともに29歳以下の世帯は上限60万円、夫婦ともに39歳以下の世帯は上限30万円です。令和8年1月1日から令和9年3月31日に婚姻届が受理され、上田市に住民票があり、夫婦の令和7年分の所得の合計が500万円未満であることなどが条件です。令和8年度からは、ライフデザイン等の講座の受講などの支給要件が加わりました。申請期間は令和9年2月末頃までで、予算額に達した時点で終了します。",
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
  headline: "上田市で婚活する方へ：市の婚活イベントの開催実績と参加費、上田市社会福祉協議会の結婚相談、新婚世帯への補助、民間の結婚相談所との比較",
  description: "上田市結婚支援ネットワーク実行委員会の婚活イベント・メタバース交流の開催実績と参加費、上田市社会福祉協議会と上小地域の公的結婚相談所、NAGANO ai MATCHの要点、上田市結婚新生活支援事業補助金、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-23",
  dateModified: "2026-11-23",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/ueda/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "上田市の婚活（市の婚活イベント・社協の結婚相談）", item: "https://mu-su-bi-ba.com/knowledge/ueda/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeUeda() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "上田市の婚活（市の婚活イベント・社協の結婚相談）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          上田市で婚活する方へ：市の婚活イベントの開催実績と参加費、上田市社会福祉協議会の結婚相談、新婚世帯への補助、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月23日（イベント・補助制度・事業計画は同日に上田市公式サイト、結婚相談は上田市社会福祉協議会公式サイトと長野県の結婚・子育て応援サイト「チアフルながの」、NAGANO ai MATCHは公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />上田市では、市の婚活イベントと社会福祉協議会の無料の結婚相談を組み合わせて利用できます
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>上田市は、社会福祉協議会・JA・商工団体などと「上田市結婚支援ネットワーク実行委員会」をつくり、<strong>年齢別の婚活イベント</strong>と<strong>メタバース（仮想空間）での交流</strong>を開いています。令和7年度以降の交流会の参加費は<strong>男性2,000円〜3,000円・女性1,000円〜2,000円</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>2026年11月23日時点では、<strong>11月29日（日）に39歳以下向けのイベント</strong>（東御市会場・申込みは締切済み）と、毎週水曜日のメタバース交流の予定が掲載されています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>個別の結婚相談は、<strong>上田市社会福祉協議会（上田・丸子の2か所）が登録・相談無料</strong>で受け付けています。県の「NAGANO ai MATCH」への登録もここでできます（システム登録料10,000円・2年間）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>結婚後は、夫婦ともに39歳以下などの条件で住居費・引越費用などを<strong>最大30万円（夫婦ともに29歳以下は最大60万円）</strong>補助する制度があります。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">上田市の結婚支援の体制と、令和8年度の事業計画</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              上田市の結婚支援は、市の移住交流推進課が事務局を務める「上田市結婚支援ネットワーク実行委員会」が中心です。構成団体は、上田市社会福祉協議会、信州うえだ農業協同組合、上田商工会議所、上田市商工会、真田町商工会、上田法人会です。また、39歳以下向けのイベントの一部は、上田市を中心市とする「上田地域定住自立圏」（上田市・東御市・青木村・長和町・坂城町・立科町・嬬恋村）の主催で開かれています。
            </p>
            <p>上田市が公表している令和8年度の実施計画書から、当サイトが要点を抜き出すと次のとおりです。</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容（令和8年度実施計画書）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>上田市結婚支援事業の総事業費</td><td className={td}>2,400,000円（委託料）。事業開始は平成27年度</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>主な内容</td><td className={td}>年齢別セミナー・交流会（年2回・男女各15名×2回）、公式LINEでの婚活イベント情報の発信、メタバース空間での交流（100名程度）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>出会いの場・セミナーの参加者数</td><td className={td}>265人（令和5年度）→ 目標300人（令和12年度）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>公式LINEの登録者数</td><td className={td}>799人（令和7年度）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>1回のイベントでのマッチング数</td><td className={td}>3.5件（令和7年度）→ 目標4件（令和8年度）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>上田市の婚姻件数（参考）</td><td className={td}>553件（令和6年度）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              計画書では、これまでの課題として交流会の内容の固定化を挙げ、セミナーの内容を変えることや、メタバースで第一印象だけでない交流を図ること、他の自治体や民間団体のイベント情報も公式LINEで発信することを今年度の取組としています。1回のイベントのマッチング数は令和7年度の平均で3.5件のため、参加は出会いのきっかけの一つと考え、相談所の利用と組み合わせることをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_URL} {...ext}>上田市「結婚支援」（2026年11月14日更新）</a>・<a href={PLAN_URL} {...ext}>上田市「令和8年度地域少子化対策重点推進事業」（2026年7月1日更新）</a>掲載の<a href={PLAN_PDF_URL} {...ext}>実施計画書（結婚支援事業）</a>（いずれも2026年11月23日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">上田市・東信地域で日程が掲載されているイベント（2026年11月23日時点・4件）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日時</th><th className={th}>名称・主催</th><th className={th}>会場・対象・会費</th></tr></thead>
                <tbody>
                  {upcomingEvents.map((e) => (
                    <tr key={e.name} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{e.date}</td>
                      <td className={td}><a href={e.url} {...ext}>{e.name}</a><br />主催：{e.org}</td>
                      <td className={td}>{e.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              メタバース交流は、7月末から12月中旬まで開設されている仮想空間に、アバターで参加する取組です。上田市の案内では、自由交流を毎週月・水・金曜日の20時〜21時、セミナーを毎月第1・第3水曜日、ゲーム大会を毎月第2・第4水曜日に予定しています。参加は、上田市結婚支援ネットワーク実行委員会の公式LINEを友だち追加し、メニューから申し込みます。メタバースの参加者は、市の29歳以下・39歳以下向けの交流イベントに優先的に参加できます。
            </p>
            <p>
              12月5日の友活交流会は申込みが締め切られています。このほか東信地域では、12月5日に小海町社会福祉協議会のイベント（松原湖高原、申込みは11月20日で締切）も掲載されています。募集状況は変わることがあるため、申込みの前に各ページで最新の情報をご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_URL} {...ext}>上田市「結婚支援」</a>・<a href="https://www.cheerful-nagano.com/marriage/event/" {...ext}>チアフルながの イベント情報一覧</a>・各イベントページ（上表のリンク先）・<a href={CHEERFUL_EVENT_URL(32871)} {...ext}>小海町社会福祉協議会のイベントページ</a>（いずれも2026年11月23日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">令和7年度以降に上田市・定住自立圏が開いたイベント（6件・いずれも終了）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日</th><th className={th}>対象・内容</th><th className={th}>会場</th><th className={th}>定員</th><th className={th}>参加費</th></tr></thead>
                <tbody>
                  {pastEvents.map((e) => (
                    <tr key={e.date} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{e.date}</td>
                      <td className={td}><a href={e.url} {...ext}>{e.name}</a></td>
                      <td className={td}>{e.place}</td>
                      <td className={td}>{e.cap}</td>
                      <td className={td}>{e.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              上田市の婚活イベントは、29歳以下・35歳以下・39歳以下・36〜45歳といった<strong>年齢を区切った回</strong>が中心で、身だしなみやコミュニケーションのセミナーと交流会を組み合わせる形式が多く見られます。会場は上田市中心部のホテル・飲食店のほか、菅平高原のホテルも使われています。男性は上田地域定住自立圏に在住・在勤の方、女性は地域を問わない（上田市内在住・在勤の方を優先する回あり）という条件が共通しています。応募者が多い場合は抽選で、2025年11月30日の回は応募多数のため受付期間の途中で締め切られました。
            </p>
            <p>
              46歳以上の方を対象とした市の婚活イベントは、令和7年度以降の掲載分には見当たりませんでした。40〜55歳の方は、上田市社会福祉協議会の友活交流会のような催しが選択肢になります。独身のお子さんを持つ親御さんや結婚相談員向けには、2026年1月22日に無料のセミナーが開かれています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_URL} {...ext}>上田市「結婚支援」</a>・上田市 各イベントページ（上表のリンク先）（いずれも2026年11月23日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">上田市社会福祉協議会の結婚相談と、上小地域の公的結婚相談所</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              上田市社会福祉協議会は、上田地区センターと丸子地区センターの2か所で、情報を共有しながら結婚相談を行っています。登録・相談は無料で、お見合い料・成婚料もかかりません。県内広域での紹介を希望する方は、ここで県のマッチングシステム「NAGANO ai MATCH」への登録もできます。電話は上田地区センターの結婚相談が0268-22-3082、丸子地区センターが0268-42-0033です。
            </p>
            <p>上田地域定住自立圏のうち長野県内の市町村にある公的結婚相談所を、チアフルながのの掲載内容で比べると次のとおりです。いずれもNAGANO ai MATCHのシステム利用団体で、登録料・お見合い料・成婚料は「なし」と記載されています。</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>相談所</th><th className={th}>登録要件</th><th className={th}>登録期間</th><th className={th}>相談日時</th></tr></thead>
                <tbody>
                  {counselors.map((c) => (
                    <tr key={c.id} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}><a href={CHEERFUL_COUNSEL_URL(c.id)} {...ext}>{c.name}</a></td>
                      <td className={td}>{c.req}</td>
                      <td className={td}>{c.term}</td>
                      <td className={td}>{c.day}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              東御市・青木村・長和町・立科町の相談所は、情報交換や合同イベントなどで連携していると案内しています。上田市社会福祉協議会の上田地区センターの相談日は、チアフルながのでは「カレンダー通り」と記載されていますが、同協議会の相談事業ページでは隔週水曜日と第2土曜日と案内されています。月ごとに変わる場合があるため、来所の前に相談日程表または電話でご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SHAKYO_URL} {...ext}>上田市社会福祉協議会「相談事業」</a>・チアフルながの 各相談所ページ（上表のリンク先）（いずれも2026年11月23日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">県の「NAGANO ai MATCH」の要点</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>利用できる方</td><td className={td}>結婚を希望する満18歳以上の独身の方で、システムを利用できる公的結婚相談所に登録している方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>システム登録料</td><td className={td}>10,000円（2年間）。相談所の登録料等が別にかかる場合がある（上田市社協は登録料なし）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>キャンペーン</td><td className={td}>令和8年5月1日〜令和9年3月31日、新規登録の女性先着200名は1年間無料（更新は対象外）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>上田市での登録先</td><td className={td}>上田市社会福祉協議会（上田地区センター・丸子地区センター）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              NAGANO ai MATCHは、プログラム言語の脆弱性の公表を受けて2026年10月22日からサービスを一時停止し、11月4日13時に再開しました。停止期間の14日分は会員の有効期限が自動で延長されると案内されています。申込みのルールや県全体の実績は、<Link href="/knowledge/nagano/" className="underline">長野県の結婚支援（NAGANO ai MATCH）のページ</Link>で整理しています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={AIMATCH_URL} {...ext}>ながの結婚マッチングシステム「NAGANO ai MATCH」</a>・<a href={CAMPAIGN_URL} {...ext}>チアフルながの「先着！新規女性200名様限定女性無料キャンペーン」（2026年5月8日）</a>・<a href={OUTAGE_URL} {...ext}>同「NAGANO ai MATCH サービス停止に伴う会員様への対応について」（2026年11月2日更新）</a>・<a href={SHAKYO_URL} {...ext}>上田市社会福祉協議会「相談事業」</a>（いずれも2026年11月23日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚後の支援：上田市結婚新生活支援事業補助金（令和8年度）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象世帯</td><td className={td}>令和8年1月1日〜令和9年3月31日に婚姻届が受理され、上田市に住民票があり、婚姻日の年齢が夫婦ともに39歳以下、夫婦の令和7年分の所得の合計が500万円未満（貸与型奨学金の返済額は控除可）の世帯。市町村税の滞納がなく、他の公的制度の家賃補助を受けていないこと</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>支給要件（令和8年度から追加）</td><td className={td}>ライフデザイン支援・プレコンセプションケア・共家事または共育てに関する講座の受講、または医療機関への妊娠・出産に関する相談のいずれか</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象経費</td><td className={td}>令和8年4月1日〜令和9年3月31日に支払った新規の住宅賃貸費用（賃料・共益費は同居開始月と翌月分）、住宅取得費用、結婚に伴うリフォーム費用、引越費用</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>補助額</td><td className={td}>夫婦ともに29歳以下：上限60万円／夫婦ともに39歳以下：上限30万円（補助率10分の10）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申請</td><td className={td}>令和8年7月1日〜令和9年2月末頃。予算額に達した時点で終了。事前に連絡のうえ、上田市役所本庁舎3階の移住交流推進課へ書類を持参</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              令和8年度の実施計画書では、総事業費を5,100,000円、新規の支給を14世帯（夫婦ともに29歳以下3世帯、その他11世帯）と見込んでいます。一方で、令和7年度は12月までに25世帯の申請があったと記載されており、予算に達して早めに締め切られる可能性があります。対象となる方は、早めに移住交流推進課（0268-71-6734）へご相談ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SUBSIDY_URL} {...ext}>上田市「令和8年度結婚新生活支援事業」（2026年6月15日更新）</a>・<a href={PLAN_PDF2_URL} {...ext}>令和8年度地域少子化対策重点推進交付金 実施計画書（結婚新生活支援事業）</a>（いずれも2026年11月23日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な支援と民間の結婚相談所の費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>特徴</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>上田市社会福祉協議会の結婚相談</td><td className={td}>登録・相談・お見合い・成婚とも無料（登録期間2年）</td><td className={td}>相談員による相談。上田・丸子の2か所</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/nagano/" className="text-[#A08447] underline">長野県「NAGANO ai MATCH」</Link></td><td className={td}>システム登録料10,000円（2年間。新規女性先着200名は1年間無料）</td><td className={td}>県内の登録者を自分で検索して申し込む</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>上田市・定住自立圏の婚活イベント</td><td className={td}>1回あたり男性2,000円〜3,000円・女性1,000円〜2,000円（令和7年度以降）</td><td className={td}>年齢別・抽選制。年に数回</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>担当者によるお相手の提案や交際中の相談を行うところが多い</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用だけを比べると、上田市の公的な支援は民間の結婚相談所よりも大幅に低く抑えられます。一方で、市のイベントは年齢で区切られた年数回の開催で抽選があり、社会福祉協議会の相談日は月数回に限られます。民間の結婚相談所は、費用がかかる代わりに、担当者が継続的にお相手を提案したり、交際中の相談に応じたりするところが多くあります。まず無料の公的な窓口とイベントを使い、活動の頻度やサポートが足りないと感じた場合に民間を検討する、という順序が目安になります。上田市から利用できるオンライン型の結婚相談所も選択肢です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。公的な支援の料金は、本ページの各出典（2026年11月23日確認）によります。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/toyooka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">豊岡市の婚活（omiai事業・Hapimari）</Link>
            <Link href="/knowledge/hachinohe/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">八戸市の婚活（AI（あい）であう）</Link>
            <Link href="/knowledge/miai-renai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">お見合い結婚と恋愛結婚の割合</Link>
            <Link href="/knowledge/nagano/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">NAGANO ai MATCH（長野県）</Link>
            <Link href="/knowledge/matsumoto/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">松本市の結婚支援</Link>
            <Link href="/knowledge/gunma/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">群馬県の結婚支援</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/knowledge/yamanashi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">山梨県の結婚支援</Link>
            <Link href="/knowledge/niigata/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">新潟市の婚活（ハートマッチにいがた）</Link>
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
