import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-24 確認）。
// ・たかさき縁結び応援団補助金の目的・対象事業・対象団体・補助対象経費・上限10万円・申請先：高崎市「たかさき縁結び応援団補助金」（2026年3月16日更新）、同「募集要項」（PDF）の事業要件5項目（20歳以上の独身男女、参加者20人以上、男女比、半数以上が市内在住・在勤、原則市内開催）・事業期間
// ・令和7年度に補助を受けた婚活イベント6件（名称・団体・開催日）：高崎市「令和7年度の婚活イベント」（2026年3月16日更新）。各回の会場・対象・参加費・定員は同ページ掲載のちらし（PDF・画像）を当サイトが目視で転記
// ・「婚活イベントに参加したい方は、広報高崎などをご覧ください」の案内：高崎市「男女共同参画」（2025年4月1日更新）
// ・令和8年（2026年）の広報高崎に掲載された婚活イベント（3月号・4月号・10月号）と補助金の募集記事（5月号）：広報高崎 令和8年1月号〜11月号のテキスト版を当サイトが全号検索して数えた値
// ・11月号の各種相談ガイドに結婚相談の項目がないこと：広報高崎 令和8年11月号（テキスト版）
// ・男女共同参画センターの相談の内容：高崎市「男女共同参画相談」（2025年4月1日更新）
// ・市営住宅の入居資格（同居しようとする親族に婚約者を含む）：高崎市「市営住宅の入居資格について」（2026年4月1日更新）
// ・あいぷろに2026年11月24日時点で掲載されている11月24日以降のイベント（11件、うち高崎市内会場4件）、お見合い大作戦PART49の募集内容：ぐんまスマイルライフ「ぐんま赤い糸プロジェクト」イベント情報（11月・12月）・各イベントページ（件数は当サイトが数えた値）
// ・群馬県の結婚支援の全体像（県営のお見合いセンターがないこと等）：当サイト /knowledge/gunma/（2026-11-21確認）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const SUBSIDY_URL = "https://www.city.takasaki.gunma.jp/page/1632.html";
const SUBSIDY_PDF_URL = "https://www.city.takasaki.gunma.jp/uploaded/attachment/1717.pdf";
const R7_EVENTS_URL = "https://www.city.takasaki.gunma.jp/page/6695.html";
const DANJO_URL = "https://www.city.takasaki.gunma.jp/page/5365.html";
const DANJO_SOUDAN_URL = "https://www.city.takasaki.gunma.jp/page/5382.html";
const KOHO_URL = "https://www.city.takasaki.gunma.jp/page/2882.html";
const KOHO_R8_URL = "https://www.city.takasaki.gunma.jp/page/79134.html";
const KOHO_PAGE_URL = (id: number) => `https://www.city.takasaki.gunma.jp/page/${id}.html`;
const SHIEI_URL = "https://www.city.takasaki.gunma.jp/page/5771.html";
const ATTACH_URL = (id: number) => `https://www.city.takasaki.gunma.jp/uploaded/attachment/${id}.pdf`;
const AIPRO_URL = "https://smilelife.pref.gunma.jp/encounter/event/";
const AIPRO_EVENT_URL = (id: number) => `https://smilelife.pref.gunma.jp/encounter/event/${id}/`;

// 令和7年度に「たかさき縁結び応援団補助金」の交付を受けた婚活イベント（高崎市公式の一覧とちらしから転記）
const r7Events = [
  { date: "2025年4月19日（土）", name: "お見合い大作戦Part41 たけのこほり体験と椎茸の駒うち体験", org: "NPO法人ふるさと再生ネットワーク", place: "かぐや姫の里（吉井町上奥平）", target: "20〜45歳の独身男女", fee: "男性3,000円・女性2,000円", pdf: 37914 },
  { date: "2025年10月19日（日）", name: "BBQ婚活Party", org: "ママのもの作り学校", place: "観音山ファミリーパーク", target: "男女各15名・先着順", fee: "男性8,000円・女性5,000円", pdf: 37927 },
  { date: "2025年10月26日（日）", name: "お見合い大作戦Part42 花の寄せ植え体験", org: "NPO法人ふるさと再生ネットワーク", place: "ふれあいの里（吉井町池）", target: "20〜45歳の独身男女", fee: "男性2,500円・女性1,500円", pdf: 37920 },
  { date: "2025年11月23日（日）", name: "みんな大好きパスタで縁結び", org: "高崎勤労青少年福祉員会", place: "高崎市勤労青少年ホーム（並榎町）", target: "20〜45歳の高崎市在住・在勤の独身の方、男女各10名（抽選）", fee: "1人1,000円（ホーム利用証のない方は登録料520円が別途）", pdf: 37924 },
  { date: "2025年12月7日（日）", name: "お見合い大作戦Part43 そば打ち体験と試食会", org: "NPO法人ふるさと再生ネットワーク", place: "西部コミュニティセンター（吉井町長根）", target: "20〜45歳の独身男女", fee: "男性2,500円・女性1,500円", pdf: 37928 },
  { date: "2026年3月29日（日）", name: "お見合い大作戦Part44 多胡碑見学とバドミントン交流会", org: "NPO法人ふるさと再生ネットワーク", place: "吉井運動公園体育館ほか", target: "20〜45歳の独身男女、男女各先着12人（広報高崎3月号）", fee: "男性2,500円・女性1,500円", pdf: 37929 },
];

// 令和8年（2026年）の広報高崎とあいぷろに掲載された、高崎市内の公的機関・市の補助事業の実績がある団体の婚活イベント
const r8Events = [
  { date: "2026年4月18日（土）", name: "婚活イベント・たけのこほりと椎茸の駒うち体験", org: "NPO法人ふるさと再生ネットワーク", detail: "かぐや姫の里（吉井町上奥平）。20〜45歳の独身の方、男女各先着15人。男性3,000円・女性2,000円", status: "終了", src: "広報高崎 4月号", url: KOHO_PAGE_URL(85926) },
  { date: "2026年10月24日（土）", name: "婚活イベント〜棚田稲刈り体験", org: "NPO法人ふるさと再生ネットワーク", detail: "かぐや姫の里（吉井町上奥平）。稲刈り体験とバーベキュー。20〜45歳の独身の方、男女各先着15人。男性2,500円・女性1,500円", status: "終了", src: "広報高崎 10月号", url: KOHO_PAGE_URL(97141) },
  { date: "2026年11月29日（日）", name: "勤労青少年ホームの婚活イベント", org: "高崎市勤労青少年ホーム", detail: "料亭暢神荘（椿町）。ティーパーティーやお見合いルーレット。市内在住か在勤の20〜45歳の独身の方、男女各10人（抽選）。男性3,000円・女性2,000円（初めて同ホームを利用する方は登録手数料520円）", status: "申込みは11月6日で締切", src: "広報高崎 10月号", url: KOHO_PAGE_URL(97141) },
  { date: "2026年12月5日（土）", name: "森コンinくらぶち", org: "田舎DE婚活実行委員会（はまゆう山荘内）", detail: "はまゆう山荘（倉渕町川浦）。モルック体験や石窯ピザ作り。26〜45歳の独身の方、男女各16人（抽選）。男性3,000円・女性2,000円。JR高崎駅東口から無料送迎バスあり（要予約）", status: "申込みは10月31日で締切", src: "広報高崎 10月号", url: KOHO_PAGE_URL(97141) },
  { date: "2026年12月20日（日）", name: "お見合い大作戦PART49 そば打ち体験と試食会", org: "NPO法人ふるさと再生ネットワーク", detail: "西部コミュニティセンター（吉井町長根）。25〜45歳の独身男女、男女各15名。男性2,500円・女性1,500円（開催日の5日前からキャンセル料が全額発生）。募集期間は10月6日〜12月10日", status: "11月24日時点で男性は定員到達、女性は募集中", src: "あいぷろ", url: AIPRO_EVENT_URL(27465) },
];

export const metadata: Metadata = {
  title: "高崎市の結婚相談・婚活支援｜市の結婚相談窓口は見当たらず婚活イベントを補助（令和7年度6件・参加費1,000円〜）と民間との費用比較",
  description:
    "高崎市では、市の結婚相談窓口の案内は見当たらず、市は「たかさき縁結び応援団補助金」（上限10万円）で団体の婚活イベントを支援しています。令和7年度の6件と2026年の開催状況、参加費、群馬県「あいぷろ」の高崎市内イベント、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/takasaki/" },
};

const faqs = [
  {
    q: "高崎市に市営の結婚相談所はありますか？",
    a: "2026年11月24日時点で、高崎市公式サイトと広報高崎（令和8年11月号）の各種相談ガイドに、結婚相談の窓口の案内は見当たりませんでした。市の結婚支援は、婚活イベントを開く企業・団体に経費を補助する「たかさき縁結び応援団補助金」が中心です。市の男女共同参画のページでは、婚活イベントに参加したい方に広報高崎などを見るよう案内しています。",
  },
  {
    q: "高崎市の婚活イベントの参加費はいくらですか？",
    a: "市の補助を受けた令和7年度の6件では、男性2,500円〜8,000円・女性1,500円〜5,000円で、勤労青少年ホームの回は1人1,000円でした。2026年に広報高崎・あいぷろで当サイトが確認した高崎市内の公的機関や補助実績のある団体の回は、男性2,500円〜3,000円・女性1,500円〜2,000円です。食事代や体験の材料費を含む金額が多く、回によって異なります。",
  },
  {
    q: "高崎市外に住んでいても参加できますか？",
    a: "NPO法人ふるさと再生ネットワークの「お見合い大作戦」や「森コンinくらぶち」の案内には、住所の条件の記載はありません。一方、勤労青少年ホームの婚活イベントは市内在住か在勤の方が対象です。なお、市の補助金の要件として、参加者の半数以上が市内在住か在勤であることが定められています。申込みの前に各イベントの案内でご確認ください。",
  },
  {
    q: "群馬県の公的なお見合い・マッチングは高崎市でも使えますか？",
    a: "群馬県には、長野県や新潟県のような会員登録制の県営お見合いセンターやマッチングシステムの案内がありません。県は出会いイベントの情報を発信する「ぐんま赤い糸プロジェクト（あいぷろ）」を行っており、2026年11月24日時点で高崎市内を会場とするイベントが4件掲載されています。県全体の仕組みは当サイトの群馬県のページで整理しています。",
  },
  {
    q: "高崎市に結婚新生活支援事業の補助金はありますか？",
    a: "新婚世帯の住居費や引越費用を補助する結婚新生活支援事業の案内は、2026年11月24日に当サイトが高崎市公式サイトで確認した範囲では見当たりませんでした。実施の有無は年度によって変わる可能性があるため、市役所にお問い合わせください。なお、市営住宅の入居資格の「同居しようとする親族」には婚約者が含まれます。",
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
  headline: "高崎市の結婚相談・婚活支援：たかさき縁結び応援団補助金と婚活イベントの開催実績・参加費、あいぷろの高崎市内イベント、民間の結婚相談所との比較",
  description: "高崎市のたかさき縁結び応援団補助金、令和7年度・2026年の婚活イベントの開催実績と参加費、群馬県「あいぷろ」に掲載された高崎市内のイベント、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-24",
  dateModified: "2026-11-24",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/takasaki/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "高崎市の結婚相談・婚活支援", item: "https://mu-su-bi-ba.com/knowledge/takasaki/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeTakasaki() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "高崎市の結婚相談・婚活支援" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          高崎市の結婚相談・婚活支援：たかさき縁結び応援団補助金と婚活イベントの開催実績・参加費、あいぷろの高崎市内イベント、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月24日（補助金・イベント一覧・相談窓口は同日に高崎市公式サイト、2026年のイベントは広報高崎 令和8年1月号〜11月号のテキスト版、あいぷろは群馬県の結婚・子育て応援サイト「ぐんまスマイルライフ」で確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />高崎市では、市が補助する婚活イベントへの参加が公的な出会いの場の中心です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>2026年11月24日時点で、高崎市公式サイトと広報高崎の相談ガイドに<strong>市の結婚相談窓口（登録制のお見合い）の案内は見当たりません</strong>でした。市は、婚活イベントを開く企業・団体に<strong>最大10万円を補助する「たかさき縁結び応援団補助金」</strong>で出会いの場づくりを支援しています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>令和7年度に補助を受けた婚活イベントは<strong>6件</strong>で、参加費は<strong>男性2,500円〜8,000円・女性1,500円〜5,000円</strong>（勤労青少年ホームの回は1人1,000円）でした。多くは20〜45歳の独身の方が対象です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>2026年11月24日時点で申込みを受け付けているのは、<strong>12月20日（日）の「お見合い大作戦PART49」</strong>（吉井町・男性2,500円・女性1,500円、女性のみ募集中）です。群馬県の「あいぷろ」には、ほかに民間主催の高崎市内のイベントも掲載されています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>担当者によるお相手の紹介や交際中の相談を求める場合は、民間の結婚相談所が選択肢になります。当サイトが料金を確認した22社の1年総額は<strong>125,400円〜709,500円</strong>です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">高崎市の結婚支援の仕組み：たかさき縁結び応援団補助金</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              高崎市は、晩婚化・未婚化への取組として、公益活動を通じて独身男女の出会いの場をつくる企業・団体を支援しています。窓口は市民部人権男女共同参画課（市役所9階、電話027-321-1228）です。市が直接お見合いを仲介するのではなく、地域の団体が開くイベントに経費を補助する仕組みのため、利用者は各イベントの主催者に直接申し込みます。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容（募集要項）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象となる事業</td><td className={td}>環境保全・美化、高齢者・障害者・子ども等の支援、地域の歴史・文化の伝承や地域の魅力向上などの公益活動に、結婚を希望する男女の交流や出会いの機会を組み合わせた事業</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>事業の要件</td><td className={td}>20歳以上の独身男女が参加すること、参加者の総数が20人以上、男女の比率に著しい差がないこと、参加者の半数以上が高崎市内に居住または勤務していること、原則として高崎市内で実施すること</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象となる団体</td><td className={td}>高崎市内に拠点がある企業・NPO法人・団体（任意団体を含む）で、公益事業の実績があるもの。主たる目的が営利事業と認められるものは対象外</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>補助金の額</td><td className={td}>講師謝金・施設使用料・バス借上料・参加者の飲食費（原則として補助対象経費の半分まで）などについて、原則10万円を上限に審査委員会の審査を経て決定</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              補助の要件に「参加者の半数以上が市内在住・在勤」とあるため、補助を受けたイベントは高崎市に住む方・働く方が参加しやすい設計になっています。ただし、個々のイベントの参加条件は主催者が定めるため、市外の方が参加できる回もあります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SUBSIDY_URL} {...ext}>高崎市「たかさき縁結び応援団補助金」（2026年3月16日更新）</a>・<a href={SUBSIDY_PDF_URL} {...ext}>同「募集要項」（PDF）</a>・<a href={DANJO_URL} {...ext}>高崎市「男女共同参画」（2025年4月1日更新）</a>（いずれも2026年11月24日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">令和7年度に市の補助を受けた婚活イベント（6件・いずれも終了）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>高崎市の「令和7年度の婚活イベント」に掲載された6件の内容を、各回のちらしから当サイトが転記すると次のとおりです。</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日</th><th className={th}>名称・主催</th><th className={th}>会場</th><th className={th}>対象・定員</th><th className={th}>参加費</th></tr></thead>
                <tbody>
                  {r7Events.map((e) => (
                    <tr key={e.pdf} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{e.date}</td>
                      <td className={td}><a href={ATTACH_URL(e.pdf)} {...ext}>{e.name}</a><br />主催：{e.org}</td>
                      <td className={td}>{e.place}</td>
                      <td className={td}>{e.target}</td>
                      <td className={td}>{e.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              当サイトが6件を集計すると、主催はNPO法人ふるさと再生ネットワークが4件、ママのもの作り学校と高崎勤労青少年福祉員会が各1件でした。会場は6件中4件が吉井地域（かぐや姫の里・ふれあいの里・西部コミュニティセンター・吉井運動公園体育館）で、たけのこほり・花の寄せ植え・そば打ちなどの体験と昼食を組み合わせた形式が中心です。対象年齢の記載がある5件は、いずれも上限が45歳でした。
            </p>
            <p>
              NPO法人ふるさと再生ネットワークのちらしには、「お見合い大作戦」シリーズで過去104組のカップルが誕生したと記載されています（2026年12月の回のあいぷろ掲載ページでは114組）。これは主催団体の発表で、成婚に至った数かどうかは記載されていません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={R7_EVENTS_URL} {...ext}>高崎市「令和7年度の婚活イベント」（2026年3月16日更新）</a>・同ページ掲載の各ちらし（上表のリンク先）・<a href={KOHO_PAGE_URL(83343)} {...ext}>広報高崎 令和8年3月号</a>（いずれも2026年11月24日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">2026年に広報高崎・あいぷろに掲載された高崎市内の婚活イベント（5件）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              令和8年度のイベント一覧は、2026年11月24日時点で高崎市公式サイトに掲載されていません。そこで当サイトは、広報高崎の令和8年1月号〜11月号のテキスト版をすべて検索し、婚活イベントの記事を数えました。掲載は3月号（1件）・4月号（1件）・10月号（3件）で、ほかに5月号に縁結び応援団補助金の募集記事がありました。このうち2026年4月以降の回に、あいぷろに掲載されている12月20日の回を加えると次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日</th><th className={th}>名称・主催</th><th className={th}>会場・対象・参加費</th><th className={th}>募集状況（11月24日時点）</th></tr></thead>
                <tbody>
                  {r8Events.map((e) => (
                    <tr key={e.date} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{e.date}</td>
                      <td className={td}><a href={e.url} {...ext}>{e.name}</a><br />主催・問い合わせ先：{e.org}<br />掲載：{e.src}</td>
                      <td className={td}>{e.detail}</td>
                      <td className={td}>{e.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              2026年の5件の参加費は男性2,500円〜3,000円・女性1,500円〜2,000円で、令和7年度とほぼ同じ水準です。市の結婚相談窓口の案内がないため、高崎市で公的な出会いの場を探す場合は、毎月1日発行の広報高崎の「催し」欄と、あいぷろのイベント情報を確認することが実際的な方法になります。上記のうち、市の補助金の交付を受けているかどうかは、2026年の回については公式に一覧が公表されていないため、当サイトでは確認できていません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={KOHO_URL} {...ext}>高崎市「広報高崎」</a>・<a href={KOHO_R8_URL} {...ext}>令和8年広報高崎（1月号〜11月号）</a>の各号テキスト版・<a href={AIPRO_EVENT_URL(27465)} {...ext}>あいぷろ「お見合い大作戦PART49」</a>（いずれも2026年11月24日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">群馬県「あいぷろ」に掲載されている高崎市内・近隣のイベント</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              群馬県には会員登録制の県営お見合いセンターがなく、県の出会い支援は、協賛団体や市町村が開くイベントの情報を発信する「ぐんま赤い糸プロジェクト（あいぷろ）」が中心です。参加は主催者へ直接申し込み、参加費用は個人負担です。仕組みや協賛団体の内訳は、<Link href="/knowledge/gunma/" className="underline">群馬県の結婚支援のページ</Link>で整理しています。
            </p>
            <p>
              2026年11月24日にあいぷろのイベント情報を確認したところ、同日以降の開催分は11件（11月1件・12月10件、2027年1月以降は0件）で、うち<strong>高崎市内の会場は4件</strong>でした（当サイトが数えた値）。内訳は、上表の12月20日の「お見合い大作戦PART49」のほか、株式会社アニバーサリープレゼント主催の3件（11月29日・12月12日の群馬の森 多目的室、12月13日のホテルココ・グラン高崎）です。
            </p>
            <p>
              高崎市の近隣では、12月6日に富岡市（貫前神社ほか、25〜39歳、居住地は問わない、11月24日時点で女性を募集中）と安中市（碓氷川熱帯植物園、25〜45歳、市内外問わない、募集終了）の主催イベントが掲載されています。市が主催する回は高崎市外の方も参加できるものがあるため、近隣の市町村の回もあわせて確認すると機会を増やせます。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={AIPRO_URL} {...ext}>ぐんまスマイルライフ「ぐんま赤い糸プロジェクト」イベント情報（2026年11月・12月）</a>・<a href={AIPRO_EVENT_URL(27745)} {...ext}>富岡市のイベントページ</a>・<a href={AIPRO_EVENT_URL(27748)} {...ext}>安中市のイベントページ</a>（いずれも2026年11月24日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">高崎市の相談窓口と、結婚後の住まいの支援</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              高崎市の男女共同参画センター（市民活動センター・ソシアス内）は、男女共同参画にかかわること、就労や社会参加、DVなどの相談を無料で受け付けていますが、お相手の紹介を行う結婚相談ではありません。広報高崎 令和8年11月号の各種相談ガイドにも、結婚相談の項目はありませんでした。高崎市社会福祉協議会による結婚相談の案内も、当サイトでは確認できていません。県内では、館林市や桐生市社会福祉協議会が登録制の無料の結婚相談を行っています（<Link href="/knowledge/gunma/" className="underline">群馬県のページ</Link>参照）。
            </p>
            <p>
              結婚後の支援として、多くの市町村が実施している結婚新生活支援事業（新婚世帯の住居費・引越費用の補助）は、2026年11月24日に当サイトが高崎市公式サイトで確認した範囲では案内が見当たりませんでした。年度によって変わる可能性があるため、市役所でご確認ください。なお、高崎市の市営住宅の入居資格のうち「同居を予定する親族」には、内縁・婚約者が含まれると案内されています（収入基準などほかの要件があります）。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={DANJO_SOUDAN_URL} {...ext}>高崎市「男女共同参画相談」（2025年4月1日更新）</a>・<a href={KOHO_PAGE_URL(99284)} {...ext}>広報高崎 令和8年11月号</a>・<a href={SHIEI_URL} {...ext}>高崎市「市営住宅の入居資格について」（2026年4月1日更新）</a>（いずれも2026年11月24日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な支援と民間の結婚相談所の費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>特徴</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>高崎市内の婚活イベント（市の補助事業・公的機関の回）</td><td className={td}>1回あたり男性2,500円〜8,000円・女性1,500円〜5,000円（令和7年度。勤労青少年ホームの回は1人1,000円）</td><td className={td}>体験＋昼食＋自由交流の形式が中心。年に数回、主に20〜45歳</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/gunma/" className="text-[#A08447] underline">群馬県「あいぷろ」</Link></td><td className={td}>登録不要。各イベントの参加費は個人負担</td><td className={td}>出会いイベントの情報発信。お見合いの仲介は行っていない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>担当者によるお相手の提案や交際中の相談を行うところが多い</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用だけを比べると、高崎市内の公的な婚活イベントは1回数千円で参加でき、民間の結婚相談所よりも大幅に低く抑えられます。一方で、高崎市では登録制の公的な結婚相談の案内が見当たらず、イベントは年に数回で、対象年齢の上限が45歳の回が多いという制約があります。46歳以上の方や、継続的にお相手の紹介を受けたい方、交際中の相談をしたい方は、民間の結婚相談所が現実的な選択肢になります。まず無料・低額の公的な機会を試し、頻度やサポートが足りないと感じた場合に民間を検討する、という順序が目安です。高崎市から利用できるオンライン型の結婚相談所も選択肢になります。入会前に1年間の総額を各社へ確認することをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。公的な支援の料金は、本ページの各出典（2026年11月24日確認）によります。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/tsukuba/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">つくば市の婚活（であイバ）</Link>
            <Link href="/knowledge/40s/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">42歳・40代の婚活の現状</Link>
            <Link href="/knowledge/gunma/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">群馬県の結婚支援（あいぷろ）</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/tochigi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">栃木県の結婚支援</Link>
            <Link href="/knowledge/nagano/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">NAGANO ai MATCH（長野県）</Link>
            <Link href="/knowledge/niigata/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">新潟市の婚活（ハートマッチにいがた）</Link>
            <Link href="/knowledge/ueda/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">上田市の婚活</Link>
            <Link href="/knowledge/toyooka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">豊岡市の婚活（omiai事業・Hapimari）</Link>
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
