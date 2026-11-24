import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 数値はすべて一次統計・公式公表値から転記（2026-11-24 確認）。
// ・年齢別の配偶関係と40〜44歳の未婚割合の推移：国立社会保障・人口問題研究所「人口統計資料集（2024年版）」表6-24（総務省統計局『国勢調査報告』。2015年・2020年は不詳補完値）
// ・未婚者に対する初婚率：同 表6-9（2020年。不詳補完値にもとづく）
// ・各歳別の婚姻件数（初婚・再婚別）：厚生労働省「人口動態統計（確定数）」保管統計表 婚姻 第1表「婚姻件数，届出時の年齢（各歳）・夫－妻・初婚－再婚別」
//   令和7年（2025年）＝e-Stat stat_infid=000040503822（2026-09-30公開）、令和6年（2024年）＝stat_infid=000040320546（2025-09-16公開）
// ・IBJの会員の年代構成：IBJ「数字でIBJチェック！」（2026年9月時点の会員データ）
// ・IBJ「成婚白書」2023年度版（PDF。成婚しやすさの年齢による違い、40代以降の男性の相手との年齢差）
// ・相談所の年齢条件・年代別データ：当サイトのレビューページの実査記録（FIORE 2026-11-11・Bridalチューリップ 2026-10-21/10-25・流山おおたかの森 2026-10-27・リングベル 2026-10-26 公式確認）
// ・民間の費用：当サイト /knowledge/cost/ の24社実査値

const IPSS_URL = "https://www.ipss.go.jp/syoushika/tohkei/Popular/Popular2024.asp?chap=6";
const ESTAT_2025_URL = "https://www.e-stat.go.jp/stat-search/files?layout=dataset&stat_infid=000040503822";
const ESTAT_2024_URL = "https://www.e-stat.go.jp/stat-search/files?layout=dataset&stat_infid=000040320546";
const IBJ_DATA_URL = "https://www.ibjapan.com/ibj/data/";
const IBJ_HAKUSHO_URL = "https://www.ibjapan.jp/information/wp-content/uploads/2024/04/2023IBJseikon_hakusyo.pdf";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

const status = [
  { age: "40〜44歳", sex: "男性", mikon: 32.2, shibetsu: 0.2, ribetsu: 4.5 },
  { age: "40〜44歳", sex: "女性", mikon: 21.3, shibetsu: 0.5, ribetsu: 7.7 },
  { age: "45〜49歳", sex: "男性", mikon: 29.9, shibetsu: 0.4, ribetsu: 5.8 },
  { age: "45〜49歳", sex: "女性", mikon: 19.2, shibetsu: 1.0, ribetsu: 9.9 },
];
const single = (r: (typeof status)[number]) => (r.mikon + r.shibetsu + r.ribetsu).toFixed(1);

const trend = [
  { year: "1990年", m: "11.8", f: "5.8" },
  { year: "2000年", m: "18.7", f: "8.6" },
  { year: "2010年", m: "28.6", f: "17.4" },
  { year: "2015年", m: "31.9", f: "20.5" },
  { year: "2020年", m: "32.2", f: "21.3" },
];

// 令和7年（2025年）人口動態統計（確定数）保管統計表 婚姻 第1表（届出時の年齢）
const byAge = [
  { age: 40, mFirst: 5049, mRe: 2689, fFirst: 3548, fRe: 2045 },
  { age: 41, mFirst: 4252, mRe: 2510, fFirst: 2855, fRe: 1902 },
  { age: 42, mFirst: 3366, mRe: 2496, fFirst: 2241, fRe: 1839 },
  { age: 43, mFirst: 2934, mRe: 2413, fFirst: 1811, fRe: 1706 },
  { age: 44, mFirst: 2489, mRe: 2263, fFirst: 1415, fRe: 1637 },
];
const reShare = (first: number, re: number) => ((re / (first + re)) * 100).toFixed(1);
const fmt = (n: number) => n.toLocaleString("ja-JP");

const rates = [
  { age: "35〜39歳", m: "27.19", f: "33.45" },
  { age: "40〜44歳", m: "13.29", f: "13.30" },
  { age: "45〜49歳", m: "5.68", f: "4.55" },
];

export const metadata: Metadata = {
  title: "42歳・40代の婚活の現状｜40代前半の未婚は男性32.2%・女性21.3%、42歳で初婚した人は2025年に男性3,366人・女性2,241人",
  description:
    "2020年国勢調査では、40〜44歳の未婚割合は男性32.2%・女性21.3%でした。2025年の人口動態統計（確定数）では、42歳で婚姻届を出した男性の42.6%・女性の45.1%が再婚です。40代の結婚相談所の年齢条件と、相談所が公表している年代別データもあわせて整理しています。",
  alternates: { canonical: "/knowledge/40s/" },
};

const faqs = [
  {
    q: "42歳で独身の人はどのくらいいますか？",
    a: "国立社会保障・人口問題研究所が国勢調査（2020年）から算出した値では、40〜44歳の未婚割合は男性32.2%・女性21.3%でした。死別・離別を含めて配偶者がいない人の割合は、男性36.9%・女性29.5%です（当サイト算出）。各歳別の値ではないため、42歳を含む5歳幅の目安としてご覧ください。",
  },
  {
    q: "42歳で初婚の人は1年に何人いますか？",
    a: "厚生労働省の人口動態統計（2025年・確定数）では、婚姻届を出したときに42歳だった人のうち、初婚の人は男性3,366人・女性2,241人でした。2024年は男性3,591人・女性2,325人です。年齢は婚姻届を出したときの年齢で、結婚生活に入ったときの年齢とは異なる場合があります。",
  },
  {
    q: "42歳で結婚する人は再婚が多いのですか？",
    a: "2025年の人口動態統計で、婚姻届を出したときに42歳だった人の再婚の割合は男性42.6%・女性45.1%でした（当サイト算出）。40歳では男性34.8%・女性36.6%、44歳では男性47.6%・女性53.6%で、年齢が上がるほど再婚の割合が高くなります。40代の婚活では、初婚の方と再婚の方が同じ場で活動することを前提にすると、相手の条件を考えやすくなります。",
  },
  {
    q: "42歳で結婚相談所に入会できますか？年齢で料金は変わりますか？",
    a: "多くの相談所で入会できますが、年齢で条件が変わる相談所があります。当サイトの実査では、リングベルの入会資格は男性20〜44歳・女性20〜39歳で、42歳の女性は対象外でした（2026年10月26日公式確認）。Bridalチューリップは42歳以上を別プランとしており、入会金は150,800円（42歳未満のプランは105,000円）でした（2026年10月21日公式確認）。入会前に公式サイトまたは無料相談でご確認ください。",
  },
  {
    q: "40代の成婚率は公表されていますか？",
    a: "年代別の成婚率を公表している相談所は多くありません。当サイトの実査では、結婚相談所フィオーレが公式ページで「40〜44歳50.6%／45〜49歳47.7%」と掲載していました（2026年11月11日確認）。ただし、年代別の数値には集計期間や分母の記載がないため、目安としてご覧ください。",
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
  headline: "42歳・40代の婚活の現状｜未婚割合と各歳別の初婚・再婚の件数",
  description: "国勢調査にもとづく40代の配偶関係の内訳と、人口動態統計の各歳別の婚姻件数、結婚相談所が公表している40代のデータを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-24",
  dateModified: "2026-11-24",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/40s/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "42歳・40代の婚活", item: "https://mu-su-bi-ba.com/knowledge/40s/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";

export default function Knowledge40s() {
  const a42 = byAge[2];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "42歳・40代の婚活" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          42歳・40代の婚活の現状｜未婚割合と各歳別の初婚・再婚の件数
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月24日（統計値は同日に国立社会保障・人口問題研究所・e-Statの公表資料で確認。相談所のデータは各レビューページの公式確認日を併記）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />結論：40代前半の未婚は男性約3人に1人、女性約5人に1人です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>2020年国勢調査では、<strong>40〜44歳の未婚割合は男性32.2%・女性21.3%</strong>でした。死別・離別を含めた配偶者がいない人は男性{single(status[0])}%・女性{single(status[1])}%です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>2025年に<strong>42歳で初婚の婚姻届を出した人は男性{fmt(a42.mFirst)}人・女性{fmt(a42.fFirst)}人</strong>でした（人口動態統計・確定数）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>42歳で婚姻届を出した人の<strong>再婚の割合は男性{reShare(a42.mFirst, a42.mRe)}%・女性{reShare(a42.fFirst, a42.fRe)}%</strong>で、40代の結婚では初婚と再婚がほぼ半々です（当サイト算出）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>結婚相談所には<strong>42歳以上で料金が変わる、または入会できない</strong>ところがあります。入会前に年齢条件と同年代の会員数を確認することをおすすめします。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">40代の配偶関係の内訳（2020年国勢調査）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            各年齢層の人口に占める割合です。「配偶者なし計」は未婚・死別・離別を合計した値で、当サイトが算出しました。国勢調査の公表値は5歳幅のため、42歳だけの値ではなく40〜44歳の値を示しています。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full min-w-[620px] text-sm border border-[#E5DCCF]">
              <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年齢</th><th className={th}>性別</th><th className={th}>未婚</th><th className={th}>死別</th><th className={th}>離別</th><th className={th}>配偶者なし計</th></tr></thead>
              <tbody>
                {status.map((r) => (
                  <tr key={r.age + r.sex} className="border-t border-[#E5DCCF]"><td className={td}>{r.age}</td><td className={td}>{r.sex}</td><td className={td}>{r.mikon}%</td><td className={td}>{r.shibetsu}%</td><td className={td}>{r.ribetsu}%</td><td className={`${td} font-medium`}>{single(r)}%</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            男性は未婚の割合が高く、女性は離別の割合が男性より高いという違いがあります。40〜44歳の女性では、離別（7.7%）が男性（4.5%）の約1.7倍です。
          </p>
          <p className="text-xs text-[#2C2C2C]/55">出典：<a href={IPSS_URL} {...ext}>国立社会保障・人口問題研究所「人口統計資料集（2024年版）」</a> 表6-24（総務省統計局『国勢調査報告』2020年・不詳補完値。2026年11月24日確認）。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">40〜44歳の未婚割合の推移</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            1990年から2020年の30年間で、40〜44歳の未婚割合は男性で約2.7倍、女性で約3.7倍になりました。2015年から2020年にかけては男女とも1ポイント未満の上昇にとどまっています。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full min-w-[420px] text-sm border border-[#E5DCCF]">
              <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年</th><th className={th}>男性</th><th className={th}>女性</th></tr></thead>
              <tbody>
                {trend.map((r) => (
                  <tr key={r.year} className="border-t border-[#E5DCCF]"><td className={td}>{r.year}</td><td className={td}>{r.m}%</td><td className={td}>{r.f}%</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/55">出典：同 表6-24（2015年・2020年は不詳補完値。2026年11月24日確認）。倍率は当サイト算出。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">40〜44歳で婚姻届を出した人の数（2025年・各歳別）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            厚生労働省の人口動態統計（確定数）の保管統計表から、婚姻届を出したときの年齢が40〜44歳の人を、初婚・再婚別に抜き出しました。「再婚の割合」は当サイトが算出した値です。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full min-w-[680px] text-sm border border-[#E5DCCF]">
              <thead>
                <tr className="bg-[#FAF7F2] text-left"><th className={th}>届出時の年齢</th><th className={th}>男性 初婚</th><th className={th}>男性 再婚</th><th className={th}>男性 再婚の割合</th><th className={th}>女性 初婚</th><th className={th}>女性 再婚</th><th className={th}>女性 再婚の割合</th></tr>
              </thead>
              <tbody>
                {byAge.map((r) => (
                  <tr key={r.age} className={`border-t border-[#E5DCCF]${r.age === 42 ? " bg-[#FAF7F2]" : ""}`}>
                    <td className={`${td}${r.age === 42 ? " font-medium" : ""}`}>{r.age}歳</td>
                    <td className={td}>{fmt(r.mFirst)}人</td><td className={td}>{fmt(r.mRe)}人</td><td className={td}>{reShare(r.mFirst, r.mRe)}%</td>
                    <td className={td}>{fmt(r.fFirst)}人</td><td className={td}>{fmt(r.fRe)}人</td><td className={td}>{reShare(r.fFirst, r.fRe)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-3 text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            <p>40〜44歳の合計では、初婚が男性18,090人・女性11,870人、再婚が男性12,371人・女性9,129人でした。35〜39歳の初婚（男性42,729人・女性34,115人）と比べると、男性は約4割、女性は約3分の1の人数です（当サイト集計）。</p>
            <p>42歳を前年と比べると、2024年は初婚が男性3,591人・女性2,325人、再婚が男性2,497人・女性1,851人で、2025年は初婚が男女とも前年より少なくなっています。1年分の増減のため、傾向として読む場合は複数年の値をご確認ください。</p>
          </div>
          <p className="text-xs text-[#2C2C2C]/55">出典：厚生労働省「人口動態統計（確定数）」保管統計表 婚姻 第1表「婚姻件数，届出時の年齢（各歳）・夫－妻・初婚－再婚別」（<a href={ESTAT_2025_URL} {...ext}>令和7年（2025年）</a>・<a href={ESTAT_2024_URL} {...ext}>令和6年（2024年）</a>、e-Stat。2026年11月24日確認）。年齢は婚姻届を出したときの年齢です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">未婚の人が1年間に初婚する割合（2020年）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            その年齢層の未婚の人1,000人のうち、1年間に初婚した人の数です。40〜44歳は男女とも約13人で、35〜39歳の半分以下でした。率は年齢層全体の平均であり、婚活をしている人に限った値ではありません。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full min-w-[420px] text-sm border border-[#E5DCCF]">
              <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年齢</th><th className={th}>男性（‰）</th><th className={th}>女性（‰）</th></tr></thead>
              <tbody>
                {rates.map((r) => (
                  <tr key={r.age} className="border-t border-[#E5DCCF]"><td className={td}>{r.age}</td><td className={td}>{r.m}</td><td className={td}>{r.f}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/55">出典：<a href={IPSS_URL} {...ext}>国立社会保障・人口問題研究所「人口統計資料集（2024年版）」</a> 表6-9（2020年・不詳補完値にもとづく。2026年11月24日確認）。‰は1,000人あたりの人数です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚相談所の会員に占める40代</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>IBJが公表している2026年9月時点の会員データでは、<strong>40代前半は男性会員の17.9%・女性会員の14.8%</strong>、40代後半は男性11.9%・女性6.5%でした。40代は男性会員の約3割、女性会員の約2割を占めています（当サイト算出）。</p>
            <p>同社の「成婚白書」2023年度版は、活動会員に占める比率と成婚者に占める比率を比べた「成婚しやすさ」が、女性は35歳以降、男性は40歳以降で平均を下回ると記載しています。また、40代以降の男性は年齢差4歳以上の女性と成婚している一方、女性は20代を除き相手との年齢差が最大3歳以内にとどまるとしています。2023年の実績にもとづく分析のため、現在の傾向とは異なる可能性があります。</p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={IBJ_DATA_URL} {...ext}>IBJ「数字でIBJチェック！」</a>（2026年9月時点の会員データ）、<a href={IBJ_HAKUSHO_URL} {...ext}>IBJ「成婚白書」2023年度版（PDF）</a>。いずれも2026年11月24日確認。IBJ加盟相談所の会員のデータで、相談所全体の値ではありません。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">42歳前後で条件が変わる相談所と40代のデータ</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>当サイトがレビューしている24社の公式サイトで確認できた、40代に関係する条件とデータは次のとおりです。いずれも各社が公表している値で、当サイトが独自に調査した成婚率ではありません。</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>相談所</th><th className={th}>公表内容</th><th className={th}>確認日</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/review/bridal-tulip/" className="text-[#A08447] underline">Bridalチューリップ</Link></td><td className={td}>42歳以上は専用プラン（入会金150,800円・月会費11,250円・お見合い料8,800円／件）。42歳未満のプランは入会金105,000円。公式「お客様の声」205件のうち40代は65件（男性48件・女性17件、当サイト集計）</td><td className={td}>2026年10月21日・25日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/review/ringbell/" className="text-[#A08447] underline">リングベル</Link></td><td className={td}>入会資格は男性20〜44歳・女性20〜39歳（男性は年収500万円以上）。42歳の場合、男性は対象、女性は対象外</td><td className={td}>2026年10月26日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/review/fiore/" className="text-[#A08447] underline">フィオーレ</Link></td><td className={td}>年代別の成婚率として「40〜44歳50.6%／45〜49歳47.7%」（全体は52.0%）を掲載。年代別の数値は集計期間・分母の記載なし</td><td className={td}>2026年11月11日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/review/nagareyama-otakanomori/" className="text-[#A08447] underline">流山おおたかの森結婚相談所</Link></td><td className={td}>公式掲載の成婚者の声37件のうち、40代は3件（当サイト集計）</td><td className={td}>2026年10月27日</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#2C2C2C]/55">※成婚者の声の件数は、各社が掲載している件数を当サイトが年代別に数えたものです。掲載されている声は運営側が選んだものを含むため、年代ごとの成婚のしやすさを示すものではありません。その他の相談所で年齢条件がないことを示すものでもありません。</p>
            <p>民間の結婚相談所の費用は、当サイトが24社の公式サイトを実査した結果、3項目（初期費用・月会費・成婚料）をすべて公表している22社で、1年で成婚退会した場合の総額が125,400円〜709,500円（中央値399,200円）でした。詳しくは<Link href="/knowledge/cost/" className="text-[#A08447] underline">結婚相談所の料金比較</Link>をご覧ください。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">無料相談で確認したい3つの質問</h2>
          <ol className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">1.</span><span><strong>年齢によって入会資格や料金は変わりますか</strong>：42歳を境にプランが変わる相談所もあるため、入会時の年齢で適用される料金を確認することをおすすめします。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">2.</span><span><strong>私が希望する年代の会員は何人いますか</strong>：会員全体の人数ではなく、希望する年齢幅や再婚の可否で絞り込んだ人数を確認すると、活動の見通しを立てやすくなります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">3.</span><span><strong>40代で成婚した会員の実績はありますか</strong>：件数と時期、初婚・再婚の内訳を聞くと、その相談所の得意な層が分かります。</span></li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/kakogawa/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">加古川市の婚活（20〜39歳の登録料補助）</Link>
            <Link href="/knowledge/50s/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">50代の婚活の現状</Link>
            <Link href="/compare/30s/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">30代向けの相談所比較</Link>
            <Link href="/mens/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">男性向けの相談所比較</Link>
            <Link href="/knowledge/saikon/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">離婚後の再婚</Link>
            <Link href="/knowledge/tekireiki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚適齢期と平均初婚年齢</Link>
            <Link href="/knowledge/seikon-ritsu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">成婚率の見方</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">24社の料金比較</Link>
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
