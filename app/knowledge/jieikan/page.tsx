import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 数値・条文はすべて一次情報から転記（2026-11-17 確認）。
// ・定員・現員・女性の内数：令和7年版防衛白書 資料64（2025年3月31日現在）。女性比率・区分別比率・男性人数は当サイトによる計算。
// ・女性自衛官の推移・目標、女性比率5.7%（2015年3月末）：令和7年版防衛白書 第IV部第3章第3節2
// ・若年定年・任期制の説明、採用上限年齢、退職・再就職、定年引き上げの検討、生活環境改善、指定場所生活調整金：同 第IV部第3章第1節1・3・4・6
// ・託児施設・緊急登庁支援・男性育休の目標：同 第IV部第3章第3節1
// ・営舎内居住義務：自衛隊法第55条、自衛隊法施行規則第51条〜第55条（e-Gov法令検索）
// ・任用期間：自衛隊法第36条／定年年齢：自衛隊法施行令第60条・別表第九（e-Gov法令検索）
// ・特別職の国家公務員：国家公務員法第2条第3項第16号（e-Gov法令検索）
// 防衛白書はHTML版（防衛省「防衛白書」アーカイブ）の本文・資料画像で確認。

const WP_STAFF_URL = "https://www.mod.go.jp/j/press/wp/wp2025/html/ns064000.html";
const WP_WOMEN_URL = "https://www.mod.go.jp/j/press/wp/wp2025/html/n430302000.html";
const WP_WLB_URL = "https://www.mod.go.jp/j/press/wp/wp2025/html/n430301000.html";
const WP_RECRUIT_URL = "https://www.mod.go.jp/j/press/wp/wp2025/html/n430101000.html";
const WP_PAY_URL = "https://www.mod.go.jp/j/press/wp/wp2025/html/n430103000.html";
const WP_LIFE_URL = "https://www.mod.go.jp/j/press/wp/wp2025/html/n430104000.html";
const WP_RETIRE_URL = "https://www.mod.go.jp/j/press/wp/wp2025/html/n430106000.html";
const SDF_LAW_URL = "https://laws.e-gov.go.jp/law/329AC0000000165";
const SDF_ORDER_URL = "https://laws.e-gov.go.jp/law/329CO0000000179";
const SDF_RULE_URL = "https://laws.e-gov.go.jp/law/329M50000002040";

const staff = [
  { item: "幹部", n: "43,434人", f: "2,888人", r: "6.6%" },
  { item: "准尉", n: "4,699人", f: "132人", r: "2.8%" },
  { item: "曹", n: "139,572人", f: "11,141人", r: "8.0%" },
  { item: "士（非任期制）", n: "20,552人", f: "3,516人", r: "17.1%" },
  { item: "士（任期制）", n: "11,995人", f: "2,369人", r: "19.7%" },
  { item: "合計", n: "220,252人", f: "20,046人", r: "9.1%" },
];

const teinen = [
  { rank: "将・将補", age: "60歳" },
  { rank: "1佐", age: "58歳" },
  { rank: "2佐・3佐", age: "57歳" },
  { rank: "1尉・2尉・3尉・准尉・曹長・1曹", age: "56歳" },
  { rank: "2曹・3曹", age: "55歳" },
];

export const metadata: Metadata = {
  title: "自衛隊員との婚活｜自衛官22万人・女性9.1%の内訳と、営舎内居住・定年・任期制のルール",
  description:
    "自衛官の現員は220,252人、うち女性は20,046人（9.1%）です（令和7年版防衛白書・2025年3月31日現在）。曹長以下の営舎内居住義務、階級別の定年年齢（55〜60歳）、2年・3年の任期制など、自衛隊員との結婚を考える際に知っておきたい制度を、防衛白書と法令の条文にもとづいて整理しています。",
  alternates: { canonical: "/knowledge/jieikan/" },
};

const faqs = [
  {
    q: "自衛官と結婚したら、一緒に暮らせますか？",
    a: "自衛隊法施行規則第51条により、陸曹長・海曹長・空曹長以下の自衛官は防衛大臣が指定する営舎に居住することが原則ですが、防衛大臣の定めるところにより許可を受けた者は営舎外に居住できます。幹部自衛官と准尉は営舎外に居住するものとされています（同第53条）。ただし、勤務のため特に必要があるときは営舎内居住を命じられることがあり（同第55条）、艦艇の乗組員は船舶内に居住します（同第52条）。許可の具体的な基準は法令に記載がないため、お相手を通じて所属部隊の扱いをご確認ください。",
  },
  {
    q: "自衛官の定年は何歳ですか？",
    a: "自衛隊法施行令別表第九で階級ごとに定められており、2曹・3曹は55歳、1曹から1尉までと准尉・曹長は56歳、2佐・3佐は57歳、1佐は58歳、将・将補は60歳です（医師や警務官など一部の職は60歳）。防衛白書（令和7年版）は、多くの自衛官が50代半ば以降で退職し、その多くは再就職が必要であると説明しています。",
  },
  {
    q: "任期制自衛官とは何ですか？",
    a: "陸士長・1士・2士は2年、海と空の士長・1士・2士は3年を任用期間として任用される自衛官です（自衛隊法第36条第1項）。任期満了後も志願すれば、引き続き2年を任用期間として任用されることがあります（同条第4項）。2025年3月31日現在の任期制自衛官は11,995人です（令和7年版防衛白書 資料64）。",
  },
  {
    q: "自衛官は公務員ですか？",
    a: "防衛省の職員は、国家公務員法第2条第3項第16号により特別職の国家公務員とされています。国家公務員法の規定は、別段の定めがない限り特別職には適用されないとされており（同条第5項）、自衛官の任用・定年・服務などは自衛隊法などで定められています。",
  },
  {
    q: "自衛官との出会いを探せる結婚相談所はありますか？",
    a: "当サイトの相談所データベース（Googleマップの公開情報をもとに作成）には、店舗名に「自衛官」を含む相談所が1件（東京都豊島区のAddOne Marriage）掲載されています。同社の公式サイトのページタイトルでは「東京都と長崎県の結婚相談所（IBJ正規加盟店）」と案内されています（2026年11月17日確認）。会員に自衛官が何人いるかなどの情報は当サイトでは確認できていないため、無料相談で直接お問い合わせください。",
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
  headline: "自衛隊員との婚活｜自衛官の人数と、結婚前に知っておきたい居住・定年・任期制のルール",
  description: "令和7年版防衛白書の定員・現員データ（女性の内数を含む）と、営舎内居住義務・定年年齢・任期制などの法令の定めを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-17",
  dateModified: "2026-11-17",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/jieikan/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "自衛隊員との婚活", item: "https://mu-su-bi-ba.com/knowledge/jieikan/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";

export default function KnowledgeJieikan() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "自衛隊員との婚活" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          自衛隊員との婚活｜自衛官の人数・男女比と、結婚前に知っておきたい居住・定年・任期制のルール
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月17日（人数・制度は同日に令和7年版防衛白書とe-Gov法令検索で確認。比率は当サイトによる計算）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />自衛官との結婚では「住む場所」「定年後の働き方」「任期」の3点を早めに確認することをおすすめします
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>自衛官の現員は<strong>220,252人</strong>。うち女性は20,046人（9.1%）、男性は約20.0万人です（2025年3月31日現在・令和7年版防衛白書）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>曹長以下の自衛官は、原則として営舎（駐屯地・基地内の居住場所）に住む義務</strong>があり、営舎外に住むには許可が必要です（自衛隊法施行規則第51条）。幹部・准尉は営舎外に住むものとされています（同第53条）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>定年は階級ごとに<strong>55歳〜60歳</strong>です（自衛隊法施行令別表第九）。防衛白書は、多くの自衛官が50代半ば以降で退職し、その多くは再就職が必要であると説明しています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>士の一部は<strong>2年または3年の任期制</strong>で、任期制自衛官は20代から30代半ばで退職するとされています（自衛隊法第36条・防衛白書）。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">自衛官の人数と男女の内訳（2025年3月31日現在）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              防衛白書の資料では、現員に占める女性の人数が階級区分ごとに「内数」として掲載されています。当サイトでこの内数から区分ごとの女性比率を計算したものが下表です。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>区分</th><th className={th}>現員</th><th className={th}>うち女性</th><th className={th}>女性比率（当サイト計算）</th></tr></thead>
                <tbody>
                  {staff.map((r) => (
                    <tr key={r.item} className="border-t border-[#E5DCCF]"><td className={td}>{r.item}</td><td className={td}>{r.n}</td><td className={td}>{r.f}</td><td className={td}>{r.r}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              全体では男性が約9割（200,206人）を占めます。区分別に見ると、女性の比率は士で18.1%（任期制と非任期制の合計）と高く、幹部では6.6%です。陸上自衛隊の現員は131,293人で、全体の59.6%にあたります（海上41,818人・航空42,608人・統合幕僚監部等4,533人）。定員247,154人に対する充足率は89.1%で、現員は2020年度末の232,509人から4年連続で減少しています。
            </p>
            <p>
              女性自衛官の比率は、2015年3月末の約5.7%から2025年3月末の約9.1%へ上昇しています。防衛省は、2030年度までに全自衛官に占める女性の割合を12%以上とする目標を掲げており、2024年には航空自衛隊が女性自衛官の採用枠を撤廃しました。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={WP_STAFF_URL} target="_blank" rel="noopener noreferrer" className="underline">防衛省「令和7年版防衛白書」資料64 自衛官の定員と現員、自衛官の定員と現員の推移（過去10年間）</a>（2025年3月31日現在。現員の女性は内数）、<a href={WP_WOMEN_URL} target="_blank" rel="noopener noreferrer" className="underline">同 第IV部第3章第3節2「女性の活躍推進のための改革」</a>。いずれも2026年11月17日確認。比率・男性の人数は当サイトによる計算です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">住む場所のルール（営舎内居住義務）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              自衛隊法第55条は「自衛官は、防衛省令で定めるところに従い、防衛大臣が指定する場所に居住しなければならない」と定めています。具体的な内容は自衛隊法施行規則に次のとおり定められています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>対象</th><th className={th}>施行規則の定め</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>陸曹長・海曹長・空曹長以下</td><td className={td}>防衛大臣の指定する集団的居住場所（営舎）に居住しなければならない。ただし、防衛大臣の定めるところに従い、許可を受けた者は営舎外に居住できる（第51条）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>艦艇などの乗組員（陸上・海上自衛官）</td><td className={td}>防衛大臣の指定する船舶内に居住しなければならない（第52条）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>幹部自衛官・准尉</td><td className={td}>防衛大臣の定めるところに従い、営舎外に居住するものとする（第53条）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>幹部・准尉・許可を得て営舎外に住む自衛官</td><td className={td}>勤務のため特に必要があるときは、いつでも営舎内に居住を命ずることができる（第55条）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              営舎外居住の許可の基準は「防衛大臣の定めるところ」に委ねられており、施行規則の条文には記載されていません。令和7年版防衛白書は「曹長以下の自衛官は、原則、営舎内居住が義務づけられているところ、私生活との両立の観点から、営舎外に居住できる者の範囲を見直した」と説明しています。結婚後の住まいを考える際は、お相手を通じて所属部隊での扱いをご確認ください。
            </p>
            <p>
              同白書では、入隊後に営舎内などで集団生活を送る自衛官に対し、採用後6年間で120万円を給付する「指定場所生活調整金」の新設や、営舎内居室の個室化を進める方針も示されています。
            </p>
            <p>
              転勤（異動）の頻度や時期については、当サイトでは公的な統計を確認できていません。勤務地の希望の出し方や異動の見通しは職種・階級によって異なると考えられるため、交際の段階でお相手に確認しておくことをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SDF_LAW_URL} target="_blank" rel="noopener noreferrer" className="underline">自衛隊法（e-Gov法令検索）</a> 第55条、<a href={SDF_RULE_URL} target="_blank" rel="noopener noreferrer" className="underline">自衛隊法施行規則（e-Gov法令検索）</a> 第51条〜第55条、<a href={WP_LIFE_URL} target="_blank" rel="noopener noreferrer" className="underline">令和7年版防衛白書 第IV部第3章第1節4「生活・勤務環境の改善」</a>、<a href={WP_PAY_URL} target="_blank" rel="noopener noreferrer" className="underline">同 第1節3</a>（いずれも2026年11月17日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">定年（若年定年制）と任期制</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              自衛官は、精強性を保つため「若年定年制」と「任期制」という、一般の公務員とは異なる人事管理が行われています（令和7年版防衛白書）。階級ごとの定年年齢は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>階級（陸・海・空共通）</th><th className={th}>定年年齢</th></tr></thead>
                <tbody>
                  {teinen.map((r) => (
                    <tr key={r.rank} className="border-t border-[#E5DCCF]"><td className={td}>{r.rank}</td><td className={td}>{r.age}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              統合幕僚長などの職にある将は62歳、医師・歯科医師・薬剤師、音楽演奏、情報分析などに指定された自衛官や警務官（1佐以下）は60歳です（別表第九 備考）。防衛白書によると、2020年から2024年にかけて1佐から3曹までの定年が2歳ずつ引き上げられ、さらに一般隊員の定年を2028年度以降に2歳程度引き上げることが検討されていました。最新の決定内容は防衛省の発表でご確認ください。
            </p>
            <p>
              任期制については、陸士長・1士・2士は2年、海と空の士長・1士・2士は3年が任用期間です（自衛隊法第36条第1項）。任期満了後に志願すれば、引き続き2年を任用期間として任用されることがあります（同条第4項）。防衛白書は、任期制自衛官は20代から30代半ばで退職し、多くの自衛官は生活基盤の確保のために再就職が必要であると説明しています。定年退職後は、65歳に達するまで再任用される制度もあります。
            </p>
            <p>
              結婚後の家計を考える際は、お相手の階級（任期制か非任期制か）と定年の年齢、退職後の働き方の見通しを話し合っておくと、将来の計画を立てやすくなります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SDF_ORDER_URL} target="_blank" rel="noopener noreferrer" className="underline">自衛隊法施行令（e-Gov法令検索）</a> 第60条・別表第九、<a href={SDF_LAW_URL} target="_blank" rel="noopener noreferrer" className="underline">自衛隊法</a> 第36条、<a href={WP_RECRUIT_URL} target="_blank" rel="noopener noreferrer" className="underline">令和7年版防衛白書 第IV部第3章第1節1</a>、<a href={WP_RETIRE_URL} target="_blank" rel="noopener noreferrer" className="underline">同 第1節6「退職、再就職などの取組」</a>（いずれも2026年11月17日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">家庭と仕事の両立に関する制度</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>防衛白書の記載</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>男性の育児休暇・休業</td><td className={td}>こどもが生まれた全ての男性職員が1か月以上を目途に育児に伴う休暇・休業を取得できることを目指している</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>庁内託児施設</td><td className={td}>全国8か所の駐屯地などに整備</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>緊急登庁支援</td><td className={td}>災害派遣などの際に、駐屯地などで職員のこどもを一時的に預かる施策を推進</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>勤務時間</td><td className={td}>早出遅出勤務・フレックスタイム制を導入。職務の特殊性で不可能な業務を除き、全ての機関でテレワークが実施可能</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>中途退職者の再採用</td><td className={td}>育児・介護により中途退職した職員を再度採用できる制度を整備</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              これらは防衛省・自衛隊全体の取組として示されたものです。実際に利用できる制度や託児施設の有無は勤務地によって異なるため、具体的な状況はお相手にご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={WP_WLB_URL} target="_blank" rel="noopener noreferrer" className="underline">令和7年版防衛白書 第IV部第3章第3節1「ワークライフバランス推進のための働き方改革」</a>（2026年11月17日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">自衛官との出会いを結婚相談所で探す場合</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              当サイトの相談所データベース（Googleマップの公開情報をもとに作成）では、店舗名に「自衛官」を含む相談所は<Link href="/agency/AddOne-Marriage-自衛官-ひとり親に強い結婚相談所-b309/" className="text-[#A08447] underline">AddOne Marriage</Link>（東京都豊島区）の1件でした（2026年11月17日時点）。同社公式サイトのページタイトルでは「東京都と長崎県の結婚相談所（IBJ正規加盟店）」と案内されています（2026年11月17日確認）。会員に占める自衛官の人数など、自衛官向けの具体的な取組は当サイトでは確認できていません。
            </p>
            <p>
              当サイトがレビューしている24社のページでは、自衛官を対象とした専用プランや割引は掲載しておりません（各社の最新の取り扱いは公式サイトでご確認ください）。自衛官の会員がどの程度いるかは相談所や加盟する連盟によって異なると考えられるため、無料相談の際に、希望する職業の会員の状況を質問することをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※掲載情報は変わることがあるため、料金・条件は各社の公式サイトと無料相談でご確認ください。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/how-to-choose/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">タイプ別の選び方</Link>
            <Link href="/knowledge/flow/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">入会から成婚までの流れ</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/single-father/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">シングルファザーの再婚</Link>
            <Link href="/knowledge/single-mother/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">シングルマザーの婚活と再婚</Link>
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
