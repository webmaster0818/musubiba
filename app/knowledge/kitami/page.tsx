import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-27 確認）。
// ・北見市の結婚支援事業（青少年課による出会いの場の提供・創出、令和8年8月29日「出会いのつどい～ワイン編～」の会場・参加者男性5名女性4名、令和8年3月8日「出会いのつどい～スイーツなひととき～」の会場・参加者男性7名女性7名、問合せ先）：北見市「結婚支援事業」
// ・北見市の結婚支援事業の対象（男女概ね20〜39歳の市内在住者（予定））・事業内容・問合せ先、オホーツク管内7市町の結婚支援事業（令和7年5月時点の開催計画）：北海道「道内市町村の結婚支援に係る取組みについて」（2025年6月12日更新）オホーツク管内PDF
// ・北見市の出生数・婚姻率（人口千対）の推移（平成29年〜令和4年、出典は北海道人口動態総覧）、若者世代（18〜29歳）WEBアンケートで「婚活支援、結婚支援」を選んだ割合20.1%、結婚を希望する方への情報提供や婚活イベント等の支援の位置付け、計画期間：北見市「北見市こども・若者計画【本編】」（PDF）・「北見市こども・若者計画」ページ
// ・結婚新生活支援（令和8年度実施61市町村、オホーツク管内6町村。北見市は掲載なし）：北海道「結婚･妊娠･共育ての相談機会提供･支援プログラム（旧結婚新生活支援事業）について」（2026年9月3日更新）
// ・北海道コンカツ情報コンシェルの設立・事業内容・委託先・窓口廃止とオンライン化：同センター「わたしたちについて」
// ・同センターが紹介・マッチングを行わないこと、個別オンライン相談会（無料・約40分）：同センター「個別オンライン相談会」
// ・道主催オンライン婚活イベント（2026年12月11日・30〜45歳・男女最大各8名・無料・締切12月6日）：同センターのイベントページ
// ・あばしり農コン（2026年12月19日・網走市・45歳位までの女性8名・女性無料・締切12月14日・JAオホーツク網走主催）、くんねっぷ農コンin札幌（11月28〜29日・締切11月23日・女性無料）：同センターの各イベントページ
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const KITAMI_KEKKON_URL = "https://www.city.kitami.lg.jp/administration/education/detail.php?content=14276";
const KITAMI_PLAN_URL = "https://www.city.kitami.lg.jp/administration/life/detail.php?content=14099";
const KITAMI_PLAN_PDF_URL = "https://www.city.kitami.lg.jp/common/img/content/content_20260325_145634.pdf";
const PREF_MUNI_URL = "https://www.pref.hokkaido.lg.jp/hf/kms/dounai-konkatsu.html";
const PREF_OKHOTSK_PDF =
  "https://www.pref.hokkaido.lg.jp/fs/1/1/7/3/2/1/9/6/_/11%E3%82%AA%E3%83%9B%E3%83%BC%E3%83%84%E3%82%AF.pdf";
const PREF_SHINSEIKATSU_URL = "https://www.pref.hokkaido.lg.jp/hf/kms/kekkon-sinseikatusien.html";
const KIC_ABOUT_URL = "https://hokkaido-kic.com/about/";
const KIC_ONLINE_URL = "https://hokkaido-kic.com/online/";
const KIC_EVENT_LIST_URL = "https://hokkaido-kic.com/event_list/";
const KIC_DEC11_URL =
  "https://hokkaido-kic.com/event/%ef%bc%bc%e5%8c%97%e6%b5%b7%e9%81%93%e4%b8%bb%e5%82%ac%ef%bc%8f%e3%82%a4%e3%83%a4%e3%83%bc%e3%82%a8%e3%83%b3%e3%83%89%e3%83%bb%e3%83%80%e3%82%a4%e3%82%a2%e3%83%aa%e3%83%bcde%e7%b8%81%e7%b5%90%e3%81%b3";
const KIC_ABASHIRI_URL = "https://hokkaido-kic.com/event/%e3%81%82%e3%81%b0%e3%81%97%e3%82%8a%e8%be%b2%e3%82%b3%e3%83%b3-2";
const KIC_KUNNEPPU_URL =
  "https://hokkaido-kic.com/event/%e3%81%8f%e3%82%93%e3%81%ad%e3%81%a3%e3%81%b7%e8%be%b2%e3%82%b3%e3%83%b3in%e6%9c%ad%e5%b9%8c%ef%bd%9e%e3%83%aa%e3%82%a2%e3%83%ab%e8%84%b1%e5%87%ba%e3%82%b2%e3%83%bc%e3%83%a0%ef%bd%9e";

// 北見市「結婚支援事業」に掲載された開催結果（2026年11月27日時点の掲載分）
const kitamiEvents = [
  {
    fy: "令和8年度",
    date: "2026年8月29日（土）17:00〜19:00",
    name: "出会いのつどい～ワイン編～グラスの向こうに、恋見つけた",
    venue: "ワインバー クラシック（北見市北5条西3丁目スカイビル6階）",
    men: 5,
    women: 4,
    program: "ウエルカムドリンク、自己紹介タイム、ワインと料理（ビュッフェ形式）＆トークタイム、抽選会",
  },
  {
    fy: "令和7年度",
    date: "2026年3月8日（日）14:00〜16:00",
    name: "出会いのつどい～スイーツなひととき～",
    venue: "東児童センター（北見市公園町14番地2）",
    men: 7,
    women: 7,
    program: "自己紹介、カードゲーム、ロールケーキチャレンジ、フリータイム",
  },
];

// 北海道「道内市町村における結婚支援事業に関する実施状況調査＜R7開催計画＞」オホーツク管内（令和7年5月時点）から転記
const okhotsk = [
  { city: "北見市", name: "未定（懇親会）", target: "男女：概ね20〜39歳の市内在住者（予定）", note: "懇親会の開催による出会いの場の提供。実施日・参加者負担額は未定。問合せ先は子ども未来部青少年課" },
  { city: "美幌町", name: "オホーツク3町出会いふれあいツアー／3町合同婚活パーティー／農業婚活「農業に、ストレート婚活」お見合い ほか", target: "3町在住者・町内農業者", note: "網走郡下の農業青年との交流パーティー、町のホームページから申し込めるWEBお見合いなど。WEBお見合い等は無料、その他は未定" },
  { city: "津別町", name: "オホーツク3町出会いふれあいツアー（美幌町・津別町・大空町共催）", target: "3町在住の未婚農業青年", note: "網走郡下の農業青年と、応募した女性との交流パーティー。12月上旬予定、参加者負担額は未定" },
  { city: "小清水町", name: "小清水町婚活プロジェクト事業", target: "男性：町内在住または町内企業に勤める20〜40代の独身の方／女性：20〜40代の独身の方", note: "交流事業（ふれあいParty in こしみず）の開催。実施日・参加者負担額は未定" },
  { city: "訓子府町", name: "婚活事業", target: "町内農業後継者", note: "対面による交流会（令和7年7月・11月）。男性5,000円程度、女性は無料" },
  { city: "湧別町", name: "地域体験型結婚活動支援事業", target: "男性：町内在住の農林漁業者等の後継者／女性：道内在住者", note: "地域体験ツアー型の婚活イベント（令和7年10月）。宿泊・飲食代は実費" },
  { city: "雄武町", name: "婚活支援事業", target: "農業従事者", note: "婚活交流会等の出会いの場の提供。実施日・参加者負担額は未定" },
];

export const metadata: Metadata = {
  title: "北見市の婚活支援｜市の「出会いのつどい」（概ね20〜39歳・2026年8月は男女9名参加）と道の無料オンライン婚活、民間との費用比較",
  description:
    "北見市の公的な婚活支援は、市青少年課が開く「出会いのつどい」（2026年8月29日は男女9名が参加）が中心です。北海道の結婚サポートセンター、オホーツク管内の町の婚活事業、結婚新生活支援の実施状況、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/kitami/" },
};

const faqs = [
  {
    q: "北見市に市営の結婚相談所（1対1でお相手を紹介する窓口）はありますか？",
    a: "2026年11月27日時点で、北見市の公式サイトに掲載されている結婚支援事業は、子ども未来部青少年課による出会いの場の提供・創出（「出会いのつどい」などの交流イベント）で、市が運営する1対1の紹介・お見合いの窓口は確認できませんでした。北海道の結婚サポートセンター「北海道コンカツ情報コンシェル」も、婚活の相談とイベントの開催が中心で、お相手の紹介・マッチングは行わないと明記しています。",
  },
  {
    q: "北見市の「出会いのつどい」には誰が参加できますか？次回はいつですか？",
    a: "北海道が取りまとめた令和7年度の開催計画では、北見市の事業の対象は「男女：概ね20歳〜39歳までの市内在住者（予定）」とされています。市の公式ページには、2026年3月8日（男性7名・女性7名）と2026年8月29日（男性5名・女性4名）の開催結果が掲載されています。2026年11月27日時点で、次回の日程と参加費は市の公式ページで確認できませんでした。開催予定は青少年課育成担当（0157-33-1846）にお問い合わせください。",
  },
  {
    q: "北見市で結婚新生活支援（新居の家賃や引越費用の補助）は受けられますか？",
    a: "北海道が公表している令和8年度の実施市町村一覧（2026年9月3日更新・61市町村）に、北見市は掲載されていません。オホーツク管内で掲載されているのは、美幌町・小清水町・訓子府町・湧別町・滝上町・西興部村の6町村です。支給額や要件は町村ごとに異なるため、各町村の窓口でご確認ください。",
  },
  {
    q: "北見市から参加できる北海道主催の婚活イベントはありますか？",
    a: "北海道主催のオンライン婚活イベントは参加費無料で、自宅から参加できます。2026年12月11日（金）19時30分からの回は、30〜45歳の独身で北海道在住または北海道への移住を希望する方が対象で、男女最大各8名、申込みは12月6日（日）まで（応募多数の場合は抽選）です（2026年11月27日時点で受付中）。",
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
  headline: "北見市の公的な婚活支援：市の「出会いのつどい」、北海道の結婚サポートセンター、オホーツク管内の婚活事業と民間の結婚相談所との比較",
  description:
    "北見市青少年課の結婚支援事業（出会いのつどい）の開催結果と対象、北海道の結婚サポートセンターとオンライン婚活イベント、オホーツク管内の町の婚活事業、結婚新生活支援の実施状況、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-27",
  dateModified: "2026-11-27",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/kitami/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "北見市の婚活支援", item: "https://mu-su-bi-ba.com/knowledge/kitami/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeKitami() {
  const totalMen = kitamiEvents.reduce((s, e) => s + e.men, 0);
  const totalWomen = kitamiEvents.reduce((s, e) => s + e.women, 0);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "北見市の婚活支援" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          北見市で婚活する方へ：市の「出会いのつどい」、北海道の結婚サポートセンター、オホーツク管内の婚活事業と民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月27日（北見市の結婚支援事業と計画、北海道の結婚支援事業、北海道コンカツ情報コンシェルの支援内容とイベントは、同日に北見市・北海道・同センターの公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />北見市の公的な婚活支援は、市青少年課の交流イベント「出会いのつどい」が中心です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>北見市は、子ども未来部<strong>青少年課</strong>の結婚支援事業として、若者が集い交流する出会いの場を設けています。市の公式ページには、<strong>2026年3月8日</strong>（男性7名・女性7名）と<strong>2026年8月29日</strong>（男性5名・女性4名）の「出会いのつどい」の開催結果が掲載されています。北海道の取りまとめでは、対象は<strong>概ね20〜39歳の市内在住者</strong>（予定）とされています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>市が運営する1対1の紹介・お見合いの窓口は、2026年11月27日時点で確認できませんでした。北海道の結婚サポートセンターも<strong>お相手の紹介・マッチングは行っていません</strong>。道主催のオンライン婚活イベントは<strong>参加費無料</strong>で、12月11日の回（30〜45歳）は12月6日まで受付中です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>新居の家賃や引越費用を補助する<strong>結婚新生活支援</strong>は、北海道の令和8年度実施市町村一覧に<strong>北見市の掲載がありません</strong>（オホーツク管内では美幌町・小清水町など6町村）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>継続してお相手の紹介を受けたい場合は民間の結婚相談所が選択肢になります。当サイトが料金を確認した22社の1年総額は125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">北見市の結婚支援事業「出会いのつどい」（青少年課）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              北見市子ども未来部青少年課は、結婚支援事業として、さまざまなテーマで若者が集い交流できる出会いの場の提供・創出を行っています。市の公式ページに掲載されている開催結果は次のとおりです（2026年11月27日時点）。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日・名称</th><th className={th}>会場</th><th className={th}>当日の参加者</th><th className={th}>主な内容</th></tr></thead>
                <tbody>
                  {kitamiEvents.map((e) => (
                    <tr key={e.date} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{e.date}<br />{e.name}（{e.fy}・終了）</td>
                      <td className={td}>{e.venue}</td>
                      <td className={td}>男性{e.men}名・女性{e.women}名</td>
                      <td className={td}>{e.program}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              掲載されている2回の参加者は、当サイトの集計で合計{totalMen + totalWomen}名（男性{totalMen}名・女性{totalWomen}名）です。参加者は1回あたり9〜14名で、1回目は児童センターでのカードゲームやロールケーキチャレンジ、2回目はワインバーでのビュッフェ形式の料理を囲んだトークタイムと、回ごとに会場と内容が異なります。
            </p>
            <p>
              市の公式ページには、参加の対象年齢・参加費・次回の日程は掲載されていません。北海道が取りまとめた令和7年度の開催計画（令和7年5月時点）では、北見市の事業は「懇親会の開催による出会いの場を提供」とされ、対象は「男女：概ね20歳～39歳までの市内在住者（予定）」、実施日と参加者負担額は「未定」と記載されています。次回の予定は、青少年課育成担当（電話0157-33-1846）にお問い合わせください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={KITAMI_KEKKON_URL} {...ext}>北見市「結婚支援事業」</a>・<a href={PREF_OKHOTSK_PDF} {...ext}>北海道「道内市町村における結婚支援事業に関する実施状況調査＜R7開催計画＞」オホーツク管内（PDF）</a>（いずれも2026年11月27日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">北見市の婚姻の状況と、市の計画での結婚支援の位置付け</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              北見市が令和8年度から令和11年度までの4年間を期間として策定した「北見市こども・若者計画」には、北海道人口動態総覧をもとにした出生数・出生率・婚姻率の推移が掲載されています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年</th><th className={th}>婚姻率（人口千対）</th><th className={th}>出生数</th><th className={th}>出生率（人口千対）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF]"><td className={td}>平成29年（2017年）</td><td className={td}>4.5</td><td className={td}>760人</td><td className={td}>6.4</td></tr>
                  <tr className="border-t border-[#E5DCCF]"><td className={td}>平成30年（2018年）</td><td className={td}>4.2</td><td className={td}>755人</td><td className={td}>6.4</td></tr>
                  <tr className="border-t border-[#E5DCCF]"><td className={td}>令和元年（2019年）</td><td className={td}>3.8</td><td className={td}>699人</td><td className={td}>6.0</td></tr>
                  <tr className="border-t border-[#E5DCCF]"><td className={td}>令和2年（2020年）</td><td className={td}>4.1</td><td className={td}>611人</td><td className={td}>5.3</td></tr>
                  <tr className="border-t border-[#E5DCCF]"><td className={td}>令和3年（2021年）</td><td className={td}>3.6</td><td className={td}>595人</td><td className={td}>5.2</td></tr>
                  <tr className="border-t border-[#E5DCCF]"><td className={td}>令和4年（2022年）</td><td className={td}>3.1</td><td className={td}>546人</td><td className={td}>4.8</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              婚姻率は平成29年の4.5から令和4年の3.1に下がっており、計画では「婚姻率の低下に合わせて、出生率も減少傾向にあります」と説明されています。計画策定のために市が行ったWEBアンケート（回答570件）では、「北見市が特に力を入れるべきだと思うもの」（複数回答）として「婚活支援、結婚支援」を選んだ割合が、若者世代（18〜29歳・324人）で20.1%、高校生世代（246人）で20.7%でした。
            </p>
            <p>
              計画では、結婚を希望する方が希望に応じて結婚という選択ができるよう、情報提供や婚活イベント等の支援を行うとしており、担当課の一つに青少年課が挙げられています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={KITAMI_PLAN_PDF_URL} {...ext}>北見市「北見市こども・若者計画【本編】」（PDF）</a>（婚姻率等は同計画p.6、アンケートはp.15）・<a href={KITAMI_PLAN_URL} {...ext}>北見市「北見市こども・若者計画」</a>（いずれも2026年11月27日確認）。表の値は計画のグラフに記載された数値を当サイトで転記したものです。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">北海道の結婚サポートセンターと、北見市から参加できるイベント</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              北海道は、結婚サポートセンター「北海道コンカツ情報コンシェル」をタメニー株式会社への委託により運営しています（平成27年9月1日設立）。事業内容は、結婚を希望する方への個別相談、結婚支援に関するフォーラムの開催、オンライン婚活イベントの開催、道内企業・市町村等と連携した取組みです。札幌市内にあった窓口は廃止されてオンライン化されており、北見市からも無料の個別オンライン相談会（Zoom・約40分程度）を利用できます。公式サイトには「婚活におけるお相手様のご紹介・マッチングは行っておりません」と記載されています。センターの制度の詳細は、当サイトの<Link href="/knowledge/obihiro/" className="text-[#A08447] underline">帯広・十勝の婚活支援</Link>でも整理しています。
            </p>
            <p>
              センターのイベント情報に掲載されている催しのうち、北海道主催のものと、オホーツク管内の町・JAが主催するものは次のとおりです（2026年11月27日時点）。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日・名称</th><th className={th}>対象・定員</th><th className={th}>会場</th><th className={th}>参加費・募集状況</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={KIC_DEC11_URL} {...ext}>2026年12月11日（金）19:30〜「イヤーエンド・ダイアリーde縁結び」</a>（北海道主催）</td><td className={td}>30〜45歳の独身で、北海道在住または北海道への移住を希望する方。男女最大各8名</td><td className={td}>オンライン</td><td className={td}>無料（通信費は自己負担）。12月6日まで受付（応募多数の場合は抽選）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={KIC_ABASHIRI_URL} {...ext}>2026年12月19日（土）18:00〜「あばしり農コン」</a>（JAオホーツク網走主催）</td><td className={td}>45歳位までの独身女性8名（網走市・大空町東藻琴の農業青年との交流）</td><td className={td}>網走市南3条西2丁目</td><td className={td}>女性無料。12月14日締切（定員になり次第締切）。締切後・参加確定後のキャンセル料5,000円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={KIC_KUNNEPPU_URL} {...ext}>2026年11月28日（土）〜29日（日）「くんねっぷ農コンin札幌」</a>（訓子府町農業担い手対策推進委員会主催）</td><td className={td}>35歳位までの独身女性5名（訓子府町の農業青年との交流）</td><td className={td}>札幌市内</td><td className={td}>女性無料。募集は11月23日に締め切られました</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              オホーツク管内の町・JAが主催する催しは、町の農業青年と女性との出会いを目的とするもので、募集対象は女性のみです。上表のうち北見市在住の男性が参加できるものは、北海道主催のオンライン婚活イベントです。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={KIC_ABOUT_URL} {...ext}>北海道コンカツ情報コンシェル「わたしたちについて」</a>・<a href={KIC_ONLINE_URL} {...ext}>「個別オンライン相談会」</a>・<a href={KIC_EVENT_LIST_URL} {...ext}>「イベント・パーティー情報」</a>と表内の各イベントページ（いずれも2026年11月27日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">オホーツク管内7市町の結婚支援事業と結婚新生活支援</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              北海道は、道内市町村の結婚支援事業の取組状況を管内ごとに公表しています。オホーツク管内で掲載されているのは次の7市町です。令和7年（2025年）5月時点の開催計画で、道は事業が変更・中止となる可能性があるとしています。最新の内容は各市町の問合せ先でご確認ください。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>市町</th><th className={th}>事業名</th><th className={th}>対象者</th><th className={th}>内容・参加者負担額</th></tr></thead>
                <tbody>
                  {okhotsk.map((o) => (
                    <tr key={o.city} className="border-t border-[#E5DCCF] align-top"><td className={td}>{o.city}</td><td className={td}>{o.name}</td><td className={td}>{o.target}</td><td className={td}>{o.note}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              7市町のうち、農業者以外の住民も対象に含まれるのは北見市（市内在住者）と小清水町（町内在住または町内企業に勤める方）です。美幌町・津別町・訓子府町・湧別町・雄武町の事業は、農業青年や農林漁業者等の後継者との出会いを目的としています。
            </p>
            <p>
              結婚後の新生活については、北海道の一覧（2026年9月3日更新）で、令和8年度に結婚新生活支援（新居の購入費・家賃・リフォーム費用・引越費用等の支援）を実施する市町村は61市町村です。オホーツク管内では美幌町・小清水町・訓子府町・湧別町・滝上町・西興部村の6町村が掲載されており、北見市は含まれていません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_MUNI_URL} {...ext}>北海道「道内市町村の結婚支援に係る取組みについて」（2025年6月12日更新）</a>・<a href={PREF_OKHOTSK_PDF} {...ext}>同 オホーツク管内（PDF・令和7年5月時点）</a>・<a href={PREF_SHINSEIKATSU_URL} {...ext}>北海道「結婚･妊娠･共育ての相談機会提供･支援プログラム（旧結婚新生活支援事業）について」（2026年9月3日更新）</a>（いずれも2026年11月27日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な支援と民間の結婚相談所の費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>費用</th><th className={th}>1対1の紹介</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>北見市「出会いのつどい」</td><td className={td}>市の公式ページに記載なし（2026年11月27日時点）</td><td className={td}>なし（交流会形式）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>北海道コンカツ情報コンシェルの個別オンライン相談会</td><td className={td}>無料</td><td className={td}>なし（相談のみ）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>北海道主催のオンライン婚活イベント</td><td className={td}>無料（通信費は自己負担）</td><td className={td}>なし（イベント形式）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>オホーツク管内の町・JAの農業青年との交流会（女性）</td><td className={td}>無料（2026年11〜12月の掲載分）</td><td className={td}>なし（交流会形式）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              北見市と北海道の公的な支援は費用を低く抑えられる一方で、交流イベントや相談が中心で、開催回数も限られます。担当者からお相手の紹介を継続して受けたい場合や、交際中の助言を受けたい場合は、民間の結婚相談所が選択肢になります。北見市から利用する場合は、自宅から活動できるオンライン型の結婚相談所や、札幌市の結婚相談所と比べて検討するのが目安です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。公的な支援の費用は、各公式サイトで2026年11月27日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/wakayama/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">和歌山県の結婚支援</Link>
            <Link href="/knowledge/ichinomiya/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">一宮市の婚活支援</Link>
            <Link href="/knowledge/maebashi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">前橋市の婚活支援</Link>
            <Link href="/knowledge/ono/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">小野市の結婚支援</Link>
            <Link href="/knowledge/obihiro/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">帯広・十勝の婚活支援</Link>
            <Link href="/area/sapporo/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">札幌・北海道の結婚相談所</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/flow/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の流れ</Link>
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
