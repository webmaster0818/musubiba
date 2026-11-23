import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 数値はすべて一次資料から転記（2026-11-23 確認）。
// ・見合い結婚・恋愛結婚・ネットの構成割合の推移（結婚年次別）：国立社会保障・人口問題研究所『現代日本の結婚と出産―第16回出生動向基本調査（独身者調査ならびに夫婦調査）報告書』（2023年8月公表）第Ⅱ部 図表5-2-1
// ・知り合ったきっかけの内訳（第15回・第16回a・b）：同 図表5-2-2（本文の数値と注記を含む）
// ・妻の初婚年齢別の見合い結婚の割合（30〜34歳13.3%・35歳以上26.9%）：同 図表5-2-3 本文。知り合った年齢35歳以上で見合い結婚が4割：同 図表5-2-4 本文
// ・結婚形態別の平均知り合い年齢・平均初婚年齢・平均交際期間（第16回）：同 図表5-1-1（グラフ上の表示値と注）
// ・「見合いで」「結婚相談所で」の内訳：第16回出生動向基本調査 単純集計表（夫婦調査）問3
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const SURVEY_URL = "https://www.ipss.go.jp/ps-doukou/j/doukou16/doukou16_gaiyo.asp";
const REPORT_URL = "https://www.ipss.go.jp/ps-doukou/j/doukou16/JNFS16_Report04.pdf";
const FREQ_URL = "https://www.ipss.go.jp/ps-doukou/j/doukou16/JNFS16C_FreqTable.html";

// 図表5-2-1 結婚年次別にみた、恋愛結婚・見合い結婚の構成割合（初婚どうしの夫婦・%）
const trend = [
  { year: "1930〜39年", renai: "13.4", miai: "69.0", net: "—" },
  { year: "1940〜44年", renai: "14.6", miai: "69.1", net: "—" },
  { year: "1945〜49年", renai: "21.4", miai: "59.8", net: "—" },
  { year: "1950〜54年", renai: "33.0", miai: "54.0", net: "—" },
  { year: "1955〜59年", renai: "36.2", miai: "53.9", net: "—" },
  { year: "1960〜64年", renai: "41.1", miai: "49.8", net: "—" },
  { year: "1965〜69年", renai: "48.6", miai: "44.9", net: "—" },
  { year: "1970〜74年", renai: "61.5", miai: "33.0", net: "—" },
  { year: "1975〜79年", renai: "66.7", miai: "30.4", net: "—" },
  { year: "1980〜84年", renai: "72.6", miai: "24.9", net: "—" },
  { year: "1985〜89年", renai: "80.2", miai: "17.7", net: "—" },
  { year: "1990〜94年", renai: "84.8", miai: "12.7", net: "—" },
  { year: "1995〜99年", renai: "87.2", miai: "7.7", net: "—" },
  { year: "2000〜04年", renai: "87.4", miai: "6.2", net: "—" },
  { year: "2005〜09年", renai: "88.0", miai: "5.3", net: "—" },
  { year: "2010〜14年", renai: "87.9", miai: "5.3", net: "—" },
  { year: "2015〜18年", renai: "84.9", miai: "8.1", net: "6.1" },
  { year: "2019〜21年（6月）", renai: "74.8", miai: "9.8", net: "15.1" },
];

// 図表5-2-2 調査別にみた、夫と妻が知り合ったきっかけの構成割合（%）
const routes = [
  { name: "職場や仕事で", r15: "28.2", a: "28.2", b: "21.4" },
  { name: "友人・兄弟姉妹を通じて", r15: "30.8", a: "27.0", b: "25.9" },
  { name: "学校で", r15: "11.7", a: "14.2", b: "14.1" },
  { name: "街なかや旅先で", r15: "5.7", a: "4.9", b: "5.8" },
  { name: "サークル・クラブ・習いごとで", r15: "4.8", a: "4.7", b: "4.5" },
  { name: "アルバイトで", r15: "3.8", a: "4.1", b: "4.0" },
  { name: "見合い結婚（見合い・結婚相談所）", r15: "6.4", a: "8.6", b: "9.0" },
  { name: "ネット（SNS・アプリ等）で", r15: "—", a: "6.0", b: "13.6" },
];

export const metadata: Metadata = {
  title: "お見合い結婚と恋愛結婚の割合｜見合いは9.8%、ネットの15.1%が上回る（出生動向基本調査）",
  description:
    "国立社会保障・人口問題研究所の第16回出生動向基本調査では、2019〜21年に結婚した初婚どうしの夫婦のうち見合い結婚は9.8%、恋愛結婚は74.8%、ネットで知り合った夫婦は15.1%でした。1930年代からの推移、知り合ったきっかけの内訳、結婚相談所での出会いの割合を報告書の図表番号つきで整理しています。",
  alternates: { canonical: "/knowledge/miai-renai/" },
};

const faqs = [
  {
    q: "現在、お見合い結婚の割合はどのくらいですか？",
    a: "国立社会保障・人口問題研究所の第16回出生動向基本調査（2021年6月実施）では、2019年から2021年6月までに結婚した初婚どうしの夫婦のうち、見合い結婚は9.8%、恋愛結婚は74.8%、ネット（SNS・アプリ等）で知り合った夫婦は15.1%でした（報告書 図表5-2-1）。調査では、知り合ったきっかけが「見合いで（親せき・上役などの紹介も含む）」または「結婚相談所で（オンラインを含む）」の結婚を見合い結婚としています。",
  },
  {
    q: "恋愛結婚が見合い結婚を上回ったのはいつごろですか？",
    a: "同調査の結婚年次別の集計では、1960〜64年の結婚は見合い結婚49.8%・恋愛結婚41.1%でしたが、1965〜69年の結婚で恋愛結婚48.6%・見合い結婚44.9%となり、恋愛結婚が上回りました（報告書 図表5-2-1）。その後、見合い結婚は2005〜14年に5.3%まで下がり、2015年以降は8.1%・9.8%とやや上昇しています。",
  },
  {
    q: "結婚相談所で知り合って結婚した夫婦はどのくらいいますか？",
    a: "出生動向基本調査では、結婚相談所での出会いは「見合い結婚」に含めて集計されており、報告書の図表では単独の割合は示されていません。夫婦調査の単純集計表（問3、初婚どうしの夫婦5,482組・結婚年を限定しない集計）では、「見合いで」が3.8%、「結婚相談所で（オンラインを含む）」が2.6%でした。最近の結婚に限った結婚相談所単独の割合は、当サイトでは2026年11月23日時点で公表資料から確認できませんでした。",
  },
  {
    q: "お見合い結婚は恋愛結婚より離婚しにくいのですか？",
    a: "公的統計では比較できません。出生動向基本調査の夫婦調査は調査時点で夫婦である方を対象とする調査で、離婚した夫婦の出会い方は集計されていません。当サイトでは、知り合ったきっかけ別に離婚率を集計した公的統計を2026年11月23日時点で確認できませんでした。見合い結婚と恋愛結婚のどちらが離婚しにくいかを示す根拠はないため、当サイトでは比較を掲載していません。",
  },
  {
    q: "マッチングアプリなどネットで知り合って結婚した夫婦はどのくらいいますか？",
    a: "第16回調査で新たに設けられた選択肢「ネット（インターネット）で」（SNS、ウェブサイト、アプリ等によるやりとりがきっかけ）は、2015年7月〜2018年6月の結婚で6.0%、2018年7月〜2021年6月の結婚で13.6%でした（報告書 図表5-2-2）。ただし、2020年は婚姻数が大きく減った時期にあたり、報告書では構成割合の上昇が必ずしも発生の増加を意味しないと注意書きがあります。",
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
  headline: "お見合い結婚と恋愛結婚の割合の推移：出生動向基本調査で見る、夫婦が知り合ったきっかけ",
  description: "国立社会保障・人口問題研究所の第16回出生動向基本調査をもとに、見合い結婚・恋愛結婚・ネットでの出会いの割合の推移と、知り合ったきっかけの内訳、結婚形態別の交際期間を整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-23",
  dateModified: "2026-11-23",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/miai-renai/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "お見合い結婚と恋愛結婚の割合", item: "https://mu-su-bi-ba.com/knowledge/miai-renai/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeMiaiRenai() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "お見合い結婚と恋愛結婚の割合" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          お見合い結婚と恋愛結婚の割合の推移：出生動向基本調査で見る、夫婦が知り合ったきっかけ
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月23日（統計値は同日に国立社会保障・人口問題研究所「第16回出生動向基本調査」の報告書・単純集計表で確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />結論：最近の結婚では見合い結婚は約1割、恋愛結婚は約7.5割です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>第16回出生動向基本調査では、2019〜21年（6月）に結婚した初婚どうしの夫婦のうち、<strong>見合い結婚は9.8%、恋愛結婚は74.8%、ネットで知り合った夫婦は15.1%</strong>でした。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>1930年代の結婚では見合い結婚が約7割でしたが、<strong>1965〜69年の結婚で恋愛結婚が見合い結婚を上回りました</strong>。見合い結婚は2005〜14年に5.3%まで下がり、2015年以降はやや上昇しています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>調査では、<strong>結婚相談所での出会いは「見合い結婚」に含まれます</strong>。妻の初婚年齢が35歳以上の夫婦では、最近の結婚の26.9%が見合い結婚でした。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>見合い結婚と恋愛結婚の<strong>離婚のしやすさは、公的統計では比較できません</strong>。当サイトでは根拠のない比較は掲載していません。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">調査の概要と「見合い結婚」の定義</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              出生動向基本調査は、国立社会保障・人口問題研究所が結婚と夫婦の出生の動向を把握するために定期的に実施している全国調査です。第16回調査は2021年6月に実施され、夫婦調査の有効票数は6,834票（有効回収率72.7%）でした。調査の対象は、全国1,000調査区に住む妻の年齢が55歳未満の夫婦で、回答者は妻です。
            </p>
            <p>
              調査では「あなた方ご夫婦はどのようなきっかけでお知り合いになりましたか」という設問の回答をもとに、結婚を次のように分類しています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>分類</th><th className={th}>含まれる回答</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>見合い結婚</td><td className={td}>「見合いで（親せき・上役などの紹介も含む）」「結婚相談所で（オンラインを含む）」</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>恋愛結婚</td><td className={td}>「学校で」「職場や仕事の関係で」「幼なじみ・隣人関係」「学校以外のサークル活動やクラブ活動・習いごとで」「友人や兄弟姉妹を通じて」「街なかや旅行先で」「アルバイトで」</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>ネット（インターネット）で</td><td className={td}>第16回で新設された選択肢。SNS、ウェブサイト、アプリ等によるやりとりがきっかけで知り合った場合（上記以外の場合に回答）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              このため、結婚相談所で出会った夫婦は「見合い結婚」として集計されています。また、知人の紹介は「友人や兄弟姉妹を通じて」に該当すれば恋愛結婚、親せきや上役の紹介であれば見合い結婚に分類されます。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SURVEY_URL} {...ext}>国立社会保障・人口問題研究所「第16回出生動向基本調査（結婚と出産に関する全国調査）」</a>・<a href={REPORT_URL} {...ext}>同 報告書 第Ⅱ部「夫婦調査の結果」</a> 図表5-2-1・5-2-2の注（いずれも2026年11月23日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">見合い結婚と恋愛結婚の割合の推移（1930年代〜2021年）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              結婚した年ごとに見ると、1930〜44年の結婚では見合い結婚が約7割を占めていました。1965〜69年の結婚で恋愛結婚（48.6%）が見合い結婚（44.9%）を初めて上回り、1990年代後半以降は恋愛結婚が8割台後半で推移しました。2015年以降は「ネットで」知り合った夫婦が増え、最新の2019〜21年（6月）の結婚では、ネット（15.1%）が見合い結婚（9.8%）を上回っています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm border border-[#E5DCCF]">
                <caption className="text-left text-sm font-medium text-[#2C2C2C] mb-2">結婚年次別にみた構成割合（初婚どうしの夫婦・%）</caption>
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>結婚年</th><th className={th}>恋愛結婚</th><th className={th}>見合い結婚</th><th className={th}>ネットで</th></tr></thead>
                <tbody>
                  {trend.map((r) => (
                    <tr key={r.year} className="border-t border-[#E5DCCF]"><td className={td}>{r.year}</td><td className={td}>{r.renai}</td><td className={td}>{r.miai}</td><td className={td}>{r.net}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#2C2C2C]/55">
              出典：<a href={REPORT_URL} {...ext}>国立社会保障・人口問題研究所『現代日本の結婚と出産―第16回出生動向基本調査（独身者調査ならびに夫婦調査）報告書』第Ⅱ部</a> 図表5-2-1「結婚年次別にみた、恋愛結婚・見合い結婚の構成割合」（グラフ上の表示値を転記。2026年11月23日確認）。第7回〜第16回調査の結果を結婚年ごとに並べたものです。「ネットで」は第16回の新設選択肢のため2015年以降のみです。第11回〜第15回の「その他」の自由記述から抽出した「メディアを通じて」（0.1〜1.3%）と、その他・不詳は掲載を省略しています。
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">夫婦が知り合ったきっかけの内訳</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              きっかけをさらに細かく見ると、「職場や仕事で」と「友人・兄弟姉妹を通じて」が長く上位を占めてきました。2018年7月〜2021年6月の結婚では「職場や仕事で」が21.4%に減り、見合い結婚は9.0%、ネットは13.6%に増えています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-sm border border-[#E5DCCF]">
                <caption className="text-left text-sm font-medium text-[#2C2C2C] mb-2">調査別にみた、夫と妻が知り合ったきっかけの構成割合（%）</caption>
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>きっかけ</th><th className={th}>第15回（2015年調査）</th><th className={th}>2015年7月〜2018年6月の結婚</th><th className={th}>2018年7月〜2021年6月の結婚</th></tr></thead>
                <tbody>
                  {routes.map((r) => (
                    <tr key={r.name} className="border-t border-[#E5DCCF]"><td className={td}>{r.name}</td><td className={td}>{r.r15}</td><td className={td}>{r.a}</td><td className={td}>{r.b}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              上の表は調査時点から過去5年間（第16回は過去6年間を2期に分割）に結婚した夫婦の集計で、前の表（結婚年次別）とは期間の区切り方が異なるため、値が少し異なります。また、2018年7月〜2021年6月は新型コロナウイルス感染拡大で婚姻数が減った時期を含みます。報告書では、2020年の妻50歳未満の初婚数が前年の38万件から33万件へ減少したことを挙げ、この期間の構成割合の上昇は必ずしも発生の増加を意味しないと注意しています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">
              出典：<a href={REPORT_URL} {...ext}>同報告書 第Ⅱ部</a> 図表5-2-2「調査別にみた、夫と妻が知り合ったきっかけの構成割合」と本文（2026年11月23日確認）。対象は初婚どうしの夫婦で、客体数は第15回894組、2015年7月〜2018年6月の結婚486組、2018年7月〜2021年6月の結婚398組です。表に掲載していない「幼なじみ・隣人」（第16回は1.2%・1.3%）、「メディアを通じて」（第15回1.0%）、その他・不詳は省略しています。
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚相談所での出会いはどのくらいか</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              報告書の図表では、「見合いで」と「結婚相談所で」は合算して「見合い結婚」として示されており、結婚相談所単独の割合は掲載されていません。研究所が公表している夫婦調査の単純集計表では、知り合ったきっかけの回答が選択肢ごとに示されています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>知り合ったきっかけ（選択肢）</th><th className={th}>回答数</th><th className={th}>割合</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF]"><td className={td}>見合いで（親せき・上役などの紹介も含む）</td><td className={td}>206組</td><td className={td}>3.8%</td></tr>
                  <tr className="border-t border-[#E5DCCF]"><td className={td}>結婚相談所で（オンラインを含む）</td><td className={td}>141組</td><td className={td}>2.6%</td></tr>
                  <tr className="border-t border-[#E5DCCF]"><td className={td}>（1〜9以外で）ネット（インターネット）で</td><td className={td}>197組</td><td className={td}>3.6%</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              この単純集計は、結婚した年を限定せず、回答した初婚どうしの夫婦5,482組全体（結婚生活を始めた年は1990年代〜2021年が中心）を集計したものです。最近の結婚だけを対象にした値ではないため、上の推移表の値とは直接比べられません。最近の結婚に限った結婚相談所単独の割合は、当サイトでは2026年11月23日時点で公表資料から確認できませんでした。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={FREQ_URL} {...ext}>国立社会保障・人口問題研究所「第16回出生動向基本調査 単純集計表（夫婦調査）」</a> 問3「夫婦が知り合ったきっかけ」（2026年11月23日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">年齢・交際期間で見た見合い結婚と恋愛結婚の違い</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              見合い結婚は、恋愛結婚に比べて知り合ったときの年齢が高く、交際期間が短い傾向があります。第16回調査（調査時点から過去5年間に結婚した初婚どうしの夫婦）の平均値は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>結婚形態</th><th className={th}>妻の平均知り合い年齢</th><th className={th}>妻の平均初婚年齢</th><th className={th}>平均交際期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF]"><td className={td}>恋愛結婚</td><td className={td}>23.8歳</td><td className={td}>28.6歳</td><td className={td}>4.9年</td></tr>
                  <tr className="border-t border-[#E5DCCF]"><td className={td}>見合い結婚</td><td className={td}>31.7歳</td><td className={td}>33.2歳</td><td className={td}>1.5年</td></tr>
                  <tr className="border-t border-[#E5DCCF]"><td className={td}>ネットで</td><td className={td}>26.2歳</td><td className={td}>29.1歳</td><td className={td}>2.8年</td></tr>
                  <tr className="border-t border-[#E5DCCF]"><td className={td}>全体</td><td className={td}>24.9歳</td><td className={td}>29.1歳</td><td className={td}>4.3年</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              夫の平均知り合い年齢は恋愛結婚25.3歳、見合い結婚33.9歳、ネット27.8歳です。また、妻の初婚年齢別に見ると、2018年7月〜2021年6月の結婚では、見合い結婚の割合が妻の初婚年齢30〜34歳で13.3%、35歳以上で26.9%でした。知り合ったときの妻の年齢が35歳以上の夫婦では、見合い結婚が約4割を占めています。年齢が高い層ほど、見合いや結婚相談所での出会いが一定の割合を占めていることが分かります。
            </p>
            <p>
              なお、見合い結婚の客体数は62組、妻の初婚年齢35歳以上の客体数は52組と少ないため、数値には幅があると考えるのが妥当です。ここでの平均初婚年齢は調査対象夫婦の値で、人口動態統計の平均初婚年齢（<Link href="/knowledge/tekireiki/" className="text-[#A08447] underline">結婚適齢期と平均初婚年齢</Link>で掲載）とは集計対象が異なります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">
              出典：<a href={REPORT_URL} {...ext}>同報告書 第Ⅱ部</a> 図表5-1-1「調査・結婚形態別にみた、平均知り合い年齢、平均初婚年齢、平均交際期間」（グラフ上の表示値と注）・図表5-2-3「調査・妻の初婚年齢別にみた、夫妻が知り合ったきっかけの構成割合」本文・図表5-2-4「調査・妻の夫と知り合った年齢別にみた、夫妻が知り合ったきっかけの構成割合」本文（いずれも2026年11月23日確認）。図表5-1-1の第16回の客体数は全結婚656組・恋愛結婚517組・見合い結婚62組・ネット73組です。
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">離婚率などの比較について</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              「見合い結婚は離婚しにくい」「恋愛結婚のほうが長続きする」といった比較を見かけることがありますが、公的統計で裏付けることはできません。出生動向基本調査の夫婦調査は、調査時点で夫婦である方（妻の年齢55歳未満）を対象としており、離婚した夫婦の出会い方は集計されていません。当サイトでは、知り合ったきっかけ別に離婚率を集計した公的統計を2026年11月23日時点で確認できませんでした。
            </p>
            <p>
              このため当サイトでは、結婚形態による結婚生活の満足度や離婚のしやすさの比較は掲載していません。結婚相談所の利用を検討する際は、統計上の印象ではなく、相談所ごとの料金やサポート内容で比べることをおすすめします。
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚相談所を利用する場合の費用と選び方</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              出生動向基本調査で「見合い結婚」に分類される出会いのうち、現在は結婚相談所が主な窓口の一つです。結婚相談所は、入会時に独身証明書などで身元を確認し、結婚を前提とした会員同士でお見合いを組む点が、ネットでの出会いとの違いです。一方で、費用は相談所によって大きく異なります。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>当サイトの実査値</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>1年で成婚退会した場合の総額</td><td className={td}>125,400円〜709,500円（中央値399,200円）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象</td><td className={td}>当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              担当者がお相手を提案する仲人型か、会員自身が検索して申し込むデータマッチング型かによって、サポートの内容と費用が変わります。相談所の種類ごとの違いは<Link href="/knowledge/how-to-choose/" className="text-[#A08447] underline">結婚相談所の選び方</Link>、料金の内訳と各社の総額は<Link href="/knowledge/cost/" className="text-[#A08447] underline">結婚相談所の料金</Link>で整理しています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/ueda/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">上田市の婚活</Link>
            <Link href="/knowledge/how-to-choose/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の選び方</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/tekireiki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚適齢期と平均初婚年齢</Link>
            <Link href="/knowledge/flow/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">入会から成婚までの流れ</Link>
            <Link href="/knowledge/seikon-ritsu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の成婚率</Link>
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
