import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 数値・条文はすべて一次情報から転記（2026-11-17 確認）。
// ・母子世帯の統計：厚生労働省「令和3年度 全国ひとり親世帯等調査結果の概要」（令和4年12月26日公表・推計値）。
//   原ページは国立国会図書館WARPに保存（こども家庭庁「全国ひとり親世帯等調査」ページからリンク）。
// ・再婚件数の割合：厚生労働省「令和7(2025)年人口動態統計月報年計（概数）の概況」結果の概要・図表4-6
// ・親権を行う者別の離婚件数：厚生労働省「令和4年度 離婚に関する統計」（人口動態統計特殊報告）第11-1表（令和2年）
//   子ありの件数・割合・年齢階級の合計は当サイトによる計算。
// ・児童扶養手当：児童扶養手当法 第3条第3項・第4条第2項・第9条第2項、同法施行令 第2条の4第5項（e-Gov法令検索）、
//   こども家庭庁「児童扶養手当制度の概要」（令和8年4月8日更新の資料。受給者数は令和7年3月）
// ・ひとり親控除：国税庁タックスアンサー No.1171（令和8年4月1日現在法令等）
// ・養育費・連れ子養子と親権：民法 第766条・第766条の3・第797条・第818条・第880条（e-Gov法令検索）、
//   法務省「民法等の一部を改正する法律（父母の離婚後等の子の養育に関する見直し）について」・同解説資料・養育費に関する法務省令の概要
// ・相談所のプラン：各社公式サイト（2026-11-17 確認）

const SURVEY_URL = "https://www.cfa.go.jp/policies/hitori-oya/reserch_single-parent_households";
const SURVEY_PDF = "https://warp.da.ndl.go.jp/20230423/20230404180946/http://www.mhlw.go.jp/content/11920000/001027754.pdf";
const VITAL_URL = "https://www.mhlw.go.jp/toukei/saikin/hw/jinkou/geppo/nengai25/index.html";
const RIKON_URL = "https://www.mhlw.go.jp/toukei/saikin/hw/jinkou/tokusyu/rikon22/index.html";
const CFA_TEATE_URL = "https://www.cfa.go.jp/policies/hitori-oya/fuyou-teate/";
const TEATE_LAW_URL = "https://laws.e-gov.go.jp/law/336AC0000000238";
const TEATE_REI_URL = "https://laws.e-gov.go.jp/law/336CO0000000405";
const NTA_URL = "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1171.htm";
const MINPO_URL = "https://laws.e-gov.go.jp/law/129AC0000000089";
const MOJ_URL = "https://www.moj.go.jp/MINJI/minji07_00357.html";
const MOJ_YOIKUHI_URL = "https://www.moj.go.jp/content/001452582.pdf";

const stats = [
  { item: "推計世帯数", v: "119.5万世帯（前回2016年度 123.2万世帯）" },
  { item: "母子世帯になった理由", v: "離婚 79.5%／死別 5.3%（離婚などの生別は合計 93.5%）" },
  { item: "調査時点の母の平均年齢／末子の平均年齢", v: "41.9歳／11.2歳" },
  { item: "母の就業率", v: "86.3%（就業者のうち正規の職員・従業員 48.8%、パート・アルバイト等 38.8%）" },
  { item: "母自身の平均年間収入（2020年）", v: "272万円（うち就労収入 236万円）" },
  { item: "世帯の平均年間収入（同居親族を含む・2020年）", v: "373万円（児童のいる世帯の平均所得を100とすると45.9）" },
  { item: "親と同居している世帯", v: "24.2%" },
  { item: "養育費の取り決めをしている（離婚の場合）", v: "46.7%" },
  { item: "養育費を現在も受けている（離婚した父親から）", v: "28.1%（額が決まっている世帯の平均月額 50,485円）" },
];

export const metadata: Metadata = {
  title: "シングルマザーの婚活・再婚｜母子世帯119.5万世帯の統計と、再婚で変わる児童扶養手当・ひとり親控除・養育費",
  description:
    "母子世帯は全国で推計119.5万世帯、母自身の平均年間収入は272万円、養育費を受けている世帯は28.1%です（厚生労働省 令和3年度調査）。公的な再婚率が公表されていない点と、再婚（事実婚を含む）で変わる児童扶養手当・ひとり親控除、養育費と連れ子養子のルールを一次情報で整理しています。",
  alternates: { canonical: "/knowledge/single-mother/" },
};

const faqs = [
  {
    q: "シングルマザーが再婚すると、児童扶養手当はどうなりますか？",
    a: "児童扶養手当法第4条第2項第4号により、子どもが「母の配偶者」に養育されているときは、その子についての手当は支給されません。同法第3条第3項で、ここでいう「配偶者」には婚姻届を出していない事実婚の相手も含まれます。再婚や同居によって事実婚と同様の状態になったときは、お住まいの市区町村の窓口に届け出てください。",
  },
  {
    q: "再婚すると、所得税のひとり親控除は受けられなくなりますか？",
    a: "国税庁の案内では、ひとり親控除の対象は原則として「その年の12月31日の現況で、婚姻をしていない」人で、事実上婚姻関係と同様の事情にあると認められる人がいないことなどの要件をすべて満たす人とされています。年の途中で再婚し、12月31日時点で婚姻している場合は、その年分は対象外になると考えられます。個別の判断は税務署にご確認ください。",
  },
  {
    q: "再婚したら、元夫からの養育費は受け取れなくなりますか？",
    a: "当サイトで確認した民法の条文には、母の再婚によって養育費が自動的に終了するという規定はありません。一方で、民法第766条第3項と第880条は、事情に変更が生じたときに家庭裁判所が取り決めを変更できると定めています。再婚相手と子の養子縁組をするかどうかで事情が変わることもあるため、具体的な扱いは当事者間の協議や家庭裁判所、弁護士などの専門家にご相談ください。",
  },
  {
    q: "シングルマザーの再婚率はどのくらいですか？",
    a: "厚生労働省などの公的統計では、「シングルマザーの再婚率」は公表されていません（2026年11月17日時点で当サイトが確認した範囲）。参考になる値として、2025年の婚姻のうち妻が再婚である割合は15.4%でした（人口動態統計・概数）。ただし、この割合には子どものいない女性の再婚も含まれます。",
  },
  {
    q: "シングルマザー向けのプランがある結婚相談所はありますか？",
    a: "あります。当サイトが2026年11月17日に公式サイトで確認したところ、パートナーエージェントが「シングルマザー応援プラン」（お子様の年齢が22歳までの方）、マリッジプロが18歳以下の子と同居するひとり親限定のプラン、マリアージュサロン ブーゼが「シングルマザー応援コース」を設けていました。料金と条件は変わることがあるため、各社の公式サイトでご確認ください。",
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
  headline: "シングルマザーの婚活・再婚｜母子世帯の統計と再婚で変わる制度",
  description: "母子世帯の統計（令和3年度全国ひとり親世帯等調査）、再婚に関する公的統計の範囲、再婚で変わる児童扶養手当・ひとり親控除、養育費と連れ子養子のルールを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-17",
  dateModified: "2026-11-17",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/single-mother/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "シングルマザーの婚活・再婚", item: "https://mu-su-bi-ba.com/knowledge/single-mother/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";

export default function KnowledgeSingleMother() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "シングルマザーの婚活・再婚" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          シングルマザーの婚活と再婚｜母子世帯の統計と、再婚前に確認したい手当・控除・養育費のルール
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月17日（統計・制度・条文は同日に厚生労働省・こども家庭庁・国税庁・法務省・e-Gov法令検索で確認。相談所のプランは同日に各社公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />再婚の前に「児童扶養手当」「ひとり親控除」「養育費」の扱いを確認しておくと、手続きで迷いません
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>母子世帯は全国で<strong>推計119.5万世帯</strong>。母自身の平均年間収入は272万円で、離婚した父親から養育費を現在も受けている世帯は28.1%です（厚生労働省 令和3年度調査）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>公的な「シングルマザーの再婚率」は公表されていません</strong>。2025年の婚姻のうち妻が再婚である割合は15.4%でした（子どものいない女性を含む値）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>子どもが<strong>母の配偶者（事実婚の相手を含む）に養育されると、児童扶養手当は支給されません</strong>（児童扶養手当法第4条第2項第4号・第3条第3項）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>所得税の<strong>ひとり親控除（35万円）は、12月31日時点で婚姻していないこと、事実婚の相手がいないことが要件</strong>です（国税庁）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>再婚で養育費が自動的に終わるという規定は民法にはありません。<strong>変更は協議または家庭裁判所の手続き</strong>によります（民法第766条第3項・第880条）。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">母子世帯の現状（令和3年度 全国ひとり親世帯等調査）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              厚生労働省が2021年11月1日時点で実施した調査の推計値です。母子世帯は、ひとり親世帯（母子世帯と父子世帯の合計134.4万世帯）の約89%を占めます（当サイトによる計算）。父子世帯との比較は<Link href="/knowledge/single-father/" className="text-[#A08447] underline">シングルファザーの再婚</Link>のページに掲載しています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>母子世帯</th></tr></thead>
                <tbody>
                  {stats.map((r) => (
                    <tr key={r.item} className="border-t border-[#E5DCCF] align-top"><td className={td}>{r.item}</td><td className={td}>{r.v}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              母の8割以上が就業していますが、正規の職員・従業員は就業者の半数弱で、母自身の平均年間収入は272万円にとどまります。養育費の取り決めをしていない理由は「相手と関わりたくない」が34.5%と最も多く挙げられています。再婚後の家計を考える際は、手当・控除・養育費の扱いがどう変わるかを、次の項目で確認しておくことをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SURVEY_PDF} target="_blank" rel="noopener noreferrer" className="underline">厚生労働省「令和3年度 全国ひとり親世帯等調査結果の概要」</a>（2022年12月26日公表。国立国会図書館インターネット資料収集保存事業で保存された原資料。<a href={SURVEY_URL} target="_blank" rel="noopener noreferrer" className="underline">こども家庭庁の調査ページ</a>からリンク）。2026年11月17日確認。令和3年度の結果は推計値で、収入は2020年の1年間の値です。次回調査は2026年11月1日に実施予定とされています。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">シングルマザーの再婚に関する公的統計の範囲</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              「シングルマザーの再婚率」「バツイチ子持ちの再婚率」に当たる数値は、厚生労働省の人口動態統計・全国ひとり親世帯等調査のいずれにも掲載されていません（2026年11月17日に当サイトが確認した範囲）。インターネット上で見られる再婚率の数値は、出典や算出方法をご確認のうえ参考にしてください。公的統計で確認できるのは次の値です。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>統計</th><th className={th}>値</th><th className={th}>読み方の注意</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>婚姻のうち妻が再婚である割合（2025年・概数）</td><td className={td}>15.4%（2024年 15.6%、2015年 16.8%）。2025年の婚姻件数は48万9,119組</td><td className={td}>子どもの有無は区別されていません</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>離婚のうち親権を行う子がいる離婚（2020年）</td><td className={td}>19万3,253件のうち11万1,335件（57.6%）</td><td className={td}>件数・割合は当サイトが第11-1表から計算</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>上記のうち妻が全児の親権を行う離婚（2020年）</td><td className={td}>9万4,291件（子がいる離婚の84.7%）</td><td className={td}>夫が全児 1万3,126件、夫妻で分け合う 3,918件</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>妻が全児の親権を行う離婚の、届出時の妻の年齢（2020年）</td><td className={td}>30〜44歳が5万3,118件（56.3%）。25〜29歳を含めると71.0%</td><td className={td}>割合は当サイトによる計算</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              離婚によって母子世帯となる方の多くは30代から40代前半で離婚届を出しています。結婚相談所の会員層と重なる年代であり、再婚を希望する場合に活動を始めやすい時期と考えられます。ただし、離婚後に再婚した人数を子どもの有無別に集計した公的統計はないため、子どものいる女性の再婚のしやすさを数値で示すことはできません。再婚全体の推移は<Link href="/knowledge/saikon/" className="text-[#A08447] underline">離婚後の再婚</Link>のページでまとめています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={VITAL_URL} target="_blank" rel="noopener noreferrer" className="underline">厚生労働省「令和7(2025)年人口動態統計月報年計（概数）の概況」</a> 結果の概要・図表4-6、<a href={RIKON_URL} target="_blank" rel="noopener noreferrer" className="underline">厚生労働省「令和4年度 離婚に関する統計」（人口動態統計特殊報告）</a> 第11-1表（いずれも2026年11月17日確認）。「親権を行う子」は、2022年3月までは20歳未満、同年4月からは18歳未満の未婚の子をいいます。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">再婚で変わる児童扶養手当とひとり親控除</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              児童扶養手当の受給者は2025年3月時点で777,962人、そのうち母は738,913人です（こども家庭庁）。2026年4月からの手当月額（見込額）は全部支給48,050円、一部支給48,040円〜11,340円です。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>制度</th><th className={th}>再婚・事実婚に関係する定め</th><th className={th}>根拠</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>児童扶養手当（母に支給されない場合）</td><td className={td}>児童が「母の配偶者」に養育されているとき、その児童についての手当は支給しない。「父と生計を同じくしているとき」も同様</td><td className={td}>児童扶養手当法 第4条第2項第3号・第4号</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>児童扶養手当（事実婚の扱い）</td><td className={td}>「配偶者」には、婚姻の届出をしていないが事実上婚姻関係と同様の事情にある者を含む</td><td className={td}>同法 第3条第3項</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>児童扶養手当（養育費の扱い）</td><td className={td}>母が監護する児童が父から受けた養育費は、その80%に相当する額を母の所得に加えて支給制限を判定する</td><td className={td}>同法 第9条第2項、同法施行令 第2条の4第5項</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>ひとり親控除（所得税・35万円）</td><td className={td}>原則として12月31日の現況で婚姻をしていない人のうち、事実上婚姻関係と同様の事情にある人がいないこと、生計を一にする子がいること、合計所得金額が500万円以下であることのすべてに当てはまる人が対象</td><td className={td}>国税庁 タックスアンサー No.1171</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              養育費の80%が所得に算入されるため、たとえば令和3年度調査の平均月額50,485円を1年間受け取った場合、手当の所得計算に加わる額は約48.5万円となります（50,485円×12か月×80%。当サイトによる試算で、実際の判定は市区町村が行います）。
            </p>
            <p>
              児童扶養手当とひとり親控除は、いずれも婚姻届の有無だけでなく、事実婚と同様の状態かどうかで判断されます。交際相手との同居を始める段階で、市区町村の窓口と税務署にご確認ください。ひとり親家庭向けの医療費助成など、自治体独自の制度にも同様の要件が設けられていることがあります。死別によって母子家庭となった方は、遺族年金の扱いを<Link href="/knowledge/shibetsu-saikon/" className="text-[#A08447] underline">死別後の再婚で確認したい手続き</Link>でご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CFA_TEATE_URL} target="_blank" rel="noopener noreferrer" className="underline">こども家庭庁「児童扶養手当について」・同「児童扶養手当制度の概要」（2026年4月8日更新の資料）</a>、<a href={TEATE_LAW_URL} target="_blank" rel="noopener noreferrer" className="underline">児童扶養手当法</a>・<a href={TEATE_REI_URL} target="_blank" rel="noopener noreferrer" className="underline">児童扶養手当法施行令</a>（e-Gov法令検索）、<a href={NTA_URL} target="_blank" rel="noopener noreferrer" className="underline">国税庁「No.1171 ひとり親控除」（令和8年4月1日現在法令等）</a>（いずれも2026年11月17日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">養育費と、再婚相手との養子縁組・親権</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              2026年4月1日に、父母の離婚後の子の養育に関する改正民法が施行されました（法務省）。養育費と連れ子養子に関係する主な定めは次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>定め</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>養育費の取り決めの変更</td><td className={td}>家庭裁判所は、必要があると認めるときは、子の監護に関する定めを変更できる（民法第766条第3項）。扶養の程度・方法の協議や審判の後に事情の変更が生じたときも、家庭裁判所が変更・取消しをできる（同第880条）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>法定養育費（取り決めがない場合）</td><td className={td}>取り決めをせずに協議離婚した場合、子を主に監護する親は、法務省令で定める額を請求できる（民法第766条の3）。法務省令の額は子1人につき月額2万円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>連れ子養子の後の親権者</td><td className={td}>養親（再婚相手）と、その配偶者である実親（母）が親権者となる（民法第818条第3項）。離婚後に共同親権を定めていた場合でも、他方の親（元夫）は親権者ではなくなる（法務省の解説資料）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>共同親権の場合の縁組の承諾</td><td className={td}>15歳未満の子の縁組は親権者が代わって承諾する（民法第797条第1項）。共同親権では父母が共同で承諾する必要があり、意見が対立する場合は家庭裁判所が、子の利益のため特に必要があると認めるときに限り、一方を親権行使者と定めることができる（同条第4項・法務省Q&amp;A）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              母の再婚や再婚相手との養子縁組によって、元夫の養育費の支払義務がどう変わるかについて、法律に一律の定めはなく、法務省の解説資料にも明示はありません（当サイトが確認した範囲）。取り決めを変更する場合は当事者間の協議によるか、家庭裁判所の手続きを利用することになります。具体的な見通しは、家庭裁判所や弁護士などの専門家にご相談ください。
            </p>
            <p>
              養子縁組に家庭裁判所の許可が要らないこと（民法第798条ただし書）や、縁組後の子の氏（同第810条）については、<Link href="/knowledge/single-father/" className="text-[#A08447] underline">シングルファザーの再婚</Link>のページで条文を掲載しています。母の場合も同じ条文が適用されます。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MINPO_URL} target="_blank" rel="noopener noreferrer" className="underline">民法（e-Gov法令検索）</a> 第766条・第766条の3・第797条・第818条・第880条、<a href={MOJ_URL} target="_blank" rel="noopener noreferrer" className="underline">法務省「民法等の一部を改正する法律（父母の離婚後等の子の養育に関する見直し）について」</a>・同ページ掲載の解説資料（2026年1月改訂）とQ&amp;A形式の解説資料（民法編）、<a href={MOJ_YOIKUHI_URL} target="_blank" rel="noopener noreferrer" className="underline">法務省「養育費に関する法務省令の概要」</a>（いずれも2026年11月17日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">シングルマザー向けのプランを設けている結婚相談所の例</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>当サイトが2026年11月17日に各社の公式サイトで確認した、シングルマザーを対象とするプランの例です。料金はいずれも公式サイトの税込表記です。</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>相談所</th><th className={th}>プランと公式サイトの記載</th><th className={th}>確認日</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/review/partner-agent/" className="text-[#A08447] underline">パートナーエージェント</Link></td><td className={td}>「シングルマザー応援プラン」。入会資格は「シングルマザーの方で、お子様の年齢が22歳までの方」。成婚料220,000円が別途必要</td><td className={td}>2026年11月17日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/review/marriage-pro/" className="text-[#A08447] underline">マリッジプロ</Link></td><td className={td}>18歳以下の子と同居するシングルマザー・シングルファーザー限定プラン。入会金30,000円、登録料・月会費無料、お見合い料3,000円、成婚料200,000円</td><td className={td}>2026年11月17日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/agency/マリアージュサロン-ブーゼ-6129/" className="text-[#A08447] underline">マリアージュサロン ブーゼ</Link></td><td className={td}>「20歳代応援コース／シングルマザー応援コース」。入会金33,000円、登録料33,000円、月会費13,200円、お見合い費無料、成婚料275,000円</td><td className={td}>2026年11月17日</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              ひとり親向けのプランは、子どもの年齢や同居の有無が条件になっている場合があります。子どもの有無をプロフィールにどう記載するか、活動できる曜日・時間帯にどこまで配慮があるかは相談所によって異なるため、無料相談で確認されることをおすすめします。婚歴のある方の入会条件を公表している相談所は<Link href="/knowledge/saikon/" className="text-[#A08447] underline">離婚後の再婚</Link>のページにも掲載しています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※記載のない相談所がシングルマザーの方を受け入れていないことを示すものではありません。料金・条件は変わることがあるため、ご利用前に各社の公式サイトにて最新情報をご確認ください。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/saikon/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">離婚後の再婚</Link>
            <Link href="/knowledge/single-father/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">シングルファザーの再婚</Link>
            <Link href="/knowledge/shibetsu-saikon/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">死別後の再婚</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の費用</Link>
            <Link href="/knowledge/jieikan/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">自衛隊員との婚活</Link>
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
