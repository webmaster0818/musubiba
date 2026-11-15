import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 数値はすべて一次統計から転記（2026-11-15 確認）。
// ・平均初婚年齢・妻の年齢別初婚率・初婚の妻の年齢のピーク・都道府県別：厚生労働省「令和6年(2024)人口動態統計月報年計（概数）の概況」結果の概要（表9・表10-1・表10-2・図10）
// ・年齢別未婚率：国立社会保障・人口問題研究所「人口統計資料集（2024年版）」表6-24（総務省統計局『国勢調査報告』2020年・不詳補完値）
// ・年齢による入会条件・料金の違い：当サイトのレビューページの実査記録（リングベル 2026-10-26・Bridalチューリップ 2026-10-21 公式確認）

const MHLW_URL = "https://www.mhlw.go.jp/toukei/saikin/hw/jinkou/geppo/nengai24/index.html";
const IPSS_URL = "https://www.ipss.go.jp/syoushika/tohkei/Popular/Popular2024.asp?chap=6";

const ageTrend = [
  { year: "1995年", h: "28.5歳", w: "26.3歳" },
  { year: "2005年", h: "29.8歳", w: "28.0歳" },
  { year: "2015年", h: "31.1歳", w: "29.4歳" },
  { year: "2021年", h: "31.0歳", w: "29.5歳" },
  { year: "2022年", h: "31.1歳", w: "29.7歳" },
  { year: "2023年", h: "31.1歳", w: "29.7歳" },
  { year: "2024年", h: "31.1歳", w: "29.8歳" },
];

// 妻の初婚率（女性人口千対）
const firstMarriageRate = [
  { year: "1995年", a: "48.89", b: "70.64", c: "18.45", d: "3.84" },
  { year: "2005年", a: "34.12", b: "60.06", c: "24.41", d: "7.24" },
  { year: "2015年", a: "26.12", b: "58.09", c: "28.83", d: "11.44" },
  { year: "2024年", a: "15.07", b: "39.43", c: "20.14", d: "7.91" },
];

// 2020年国勢調査・年齢別未婚率（%）
const unmarried = [
  { age: "20〜24歳", m: "95.7", f: "93.0" },
  { age: "25〜29歳", m: "76.4", f: "65.8" },
  { age: "30〜34歳", m: "51.8", f: "38.5" },
  { age: "35〜39歳", m: "38.5", f: "26.2" },
  { age: "40〜44歳", m: "32.2", f: "21.3" },
  { age: "45〜49歳", m: "29.9", f: "19.2" },
];

export const metadata: Metadata = {
  title: "結婚適齢期は何歳？平均初婚年齢は夫31.1歳・妻29.8歳｜年齢別の初婚率と未婚率【2024年統計】",
  description:
    "結婚適齢期に公的な定義はありません。厚生労働省の人口動態統計（2024年）では平均初婚年齢は夫31.1歳・妻29.8歳、初婚の妻の年齢で最も多いのは26歳でした。年齢別の初婚率・未婚率の推移と、年齢で入会条件や料金が変わる結婚相談所の例を一次統計にもとづいて整理しています。",
  alternates: { canonical: "/knowledge/tekireiki/" },
};

const faqs = [
  {
    q: "結婚適齢期は何歳と決まっていますか？",
    a: "法律や統計で「結婚適齢期」を定めたものはありません。婚姻できる年齢は民法で18歳以上と定められていますが、それ以外に年齢の基準はありません。目安として参照されることが多いのは平均初婚年齢で、厚生労働省の人口動態統計（2024年・概数）では夫31.1歳、妻29.8歳でした。",
  },
  {
    q: "初婚の年齢で最も多いのは何歳ですか？",
    a: "厚生労働省の同統計によると、初婚の妻の年齢（各歳）の構成割合のピークは、20年前（2004年）と2024年のいずれも26歳です。ただし、年齢の低い層の割合が下がり、年齢の高い層の割合が上がる傾向にあると説明されています。平均値（29.8歳）とピーク（26歳）には差がある点にご注意ください。",
  },
  {
    q: "30代から婚活を始めるのは遅いですか？",
    a: "遅いかどうかを統計だけで判断することはできません。2024年の妻の初婚率（女性人口千対）は25〜29歳が39.43で最も高く、30〜34歳は20.14、35〜39歳は7.91です。一方で、30〜34歳と35〜39歳の初婚率は1995年（18.45・3.84）より高くなっています。結婚を希望する時期から逆算して、早めに動き始めることをおすすめします。",
  },
  {
    q: "年齢によって結婚相談所の条件は変わりますか？",
    a: "変わる相談所があります。当サイトの実査では、リングベルは入会資格を男性20〜44歳・女性20〜39歳としており（2026年10月26日公式確認）、Bridalチューリップは42歳以上を別プランとして入会金を150,800円（42歳未満は105,000円）に設定していました（2026年10月21日公式確認）。年齢の条件は相談所ごとに異なるため、入会前に公式サイトまたは無料相談でご確認ください。",
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
  headline: "結婚適齢期は何歳？平均初婚年齢と年齢別の初婚率・未婚率",
  description: "人口動態統計と国勢調査をもとに、平均初婚年齢・年齢別の初婚率と未婚率を整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-15",
  dateModified: "2026-11-15",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/tekireiki/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "結婚適齢期と平均初婚年齢", item: "https://mu-su-bi-ba.com/knowledge/tekireiki/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";

export default function KnowledgeTekireiki() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "結婚適齢期と平均初婚年齢" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          結婚適齢期は何歳？平均初婚年齢と年齢別の初婚率・未婚率【2024年統計】
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月15日（統計値は同日に厚生労働省・国立社会保障・人口問題研究所の公表資料で確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />結論：公的な「適齢期」はなく、目安は平均初婚年齢です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>法律や統計に「結婚適齢期」の定義はありません。目安としてよく使われる<strong>平均初婚年齢は、2024年で夫31.1歳・妻29.8歳</strong>です（厚生労働省 人口動態統計・概数）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>初婚の妻の年齢で<strong>最も多いのは26歳</strong>で、平均値より3歳ほど若い位置にあります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>妻の初婚率は<strong>25〜29歳が最も高い</strong>一方、30代の初婚率は1995年より高くなっています。結婚の年齢は全体として上がっています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>結婚相談所の中には、<strong>年齢で入会資格や料金が変わる</strong>ところがあります。年齢を気にされる場合は、統計よりも先に、検討中の相談所の条件を確認することをおすすめします。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">平均初婚年齢の推移</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            平均初婚年齢は、1995年から2015年までの20年間で夫が2.6歳、妻が3.1歳上がりました。2015年以降は夫31.0〜31.1歳でほぼ横ばいとなっており、妻は29.4歳から29.8歳へ緩やかに上がっています。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full min-w-[420px] text-sm border border-[#E5DCCF]">
              <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年</th><th className={th}>夫</th><th className={th}>妻</th></tr></thead>
              <tbody>
                {ageTrend.map((r) => (
                  <tr key={r.year} className="border-t border-[#E5DCCF]"><td className={td}>{r.year}</td><td className={td}>{r.h}</td><td className={td}>{r.w}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-2">
            都道府県別（2024年）では、平均初婚年齢が最も低いのは夫が山口県・佐賀県の30.1歳、妻が福井県・香川県の28.9歳、最も高いのは夫妻とも東京都で、夫32.2歳・妻30.7歳です。住んでいる地域によって2歳前後の差があります。
          </p>
          <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MHLW_URL} target="_blank" rel="noopener noreferrer" className="underline">厚生労働省「令和6年(2024)人口動態統計月報年計（概数）の概況」</a> 表10-1・表10-2（2026年11月15日確認）。各届出年に結婚生活に入ったものの集計です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">年齢別に見た妻の初婚率</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            初婚率は、その年齢の女性人口1,000人あたり何人が初婚したかを表す数値です。どの年も25〜29歳が最も高くなっていますが、20代の初婚率は大きく下がり、30〜34歳・35〜39歳は1995年より高くなっています。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
              <caption className="text-left text-sm font-medium text-[#2C2C2C] mb-2">妻の初婚率（女性人口千対）</caption>
              <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年</th><th className={th}>20〜24歳</th><th className={th}>25〜29歳</th><th className={th}>30〜34歳</th><th className={th}>35〜39歳</th></tr></thead>
              <tbody>
                {firstMarriageRate.map((r) => (
                  <tr key={r.year} className="border-t border-[#E5DCCF]"><td className={td}>{r.year}</td><td className={td}>{r.a}</td><td className={td}>{r.b}</td><td className={td}>{r.c}</td><td className={td}>{r.d}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/55">出典：同上 表9（2026年11月15日確認）。夫の年齢別初婚率は同資料に掲載がないため、本ページでは妻のみを掲載しています。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">年齢別の未婚率（2020年国勢調査）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            同じ年齢の人のうち、まだ結婚したことがない人の割合です。30〜34歳では男性の約半数、女性の約4割が未婚です。同年代の未婚者が一定数いることは、婚活を始める時期を考えるうえでの参考になります。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full min-w-[420px] text-sm border border-[#E5DCCF]">
              <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年齢</th><th className={th}>男性の未婚率</th><th className={th}>女性の未婚率</th></tr></thead>
              <tbody>
                {unmarried.map((r) => (
                  <tr key={r.age} className="border-t border-[#E5DCCF]"><td className={td}>{r.age}</td><td className={td}>{r.m}%</td><td className={td}>{r.f}%</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/55">出典：<a href={IPSS_URL} target="_blank" rel="noopener noreferrer" className="underline">国立社会保障・人口問題研究所「人口統計資料集（2024年版）」</a> 表6-24（総務省統計局『国勢調査報告』2020年・不詳補完値。2026年11月15日確認）。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">年齢で条件が変わる結婚相談所の例</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>統計上の年齢よりも実務に影響するのが、相談所ごとの年齢条件です。当サイトがレビューしている24社のうち、公式サイトで年齢による条件の違いを確認できた例は次のとおりです。</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>相談所</th><th className={th}>年齢による条件</th><th className={th}>確認日</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF]"><td className={td}><Link href="/review/ringbell/" className="text-[#A08447] underline">リングベル</Link></td><td className={td}>入会資格は男性20〜44歳・女性20〜39歳（男性は年収500万円以上）</td><td className={td}>2026年10月26日</td></tr>
                  <tr className="border-t border-[#E5DCCF]"><td className={td}><Link href="/review/bridal-tulip/" className="text-[#A08447] underline">Bridalチューリップ</Link></td><td className={td}>42歳以上は専用プランで、入会金150,800円（42歳未満のプランは105,000円）</td><td className={td}>2026年10月21日</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#2C2C2C]/55">※確認日は各レビューページに記載した公式サイトの確認日です。その他の相談所で年齢条件がないことを示すものではありません。入会前に公式サイトまたは無料相談でご確認ください。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/compare/30s/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">30代の結婚相談所比較</Link>
            <Link href="/knowledge/50s/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">50代の婚活の現状</Link>
            <Link href="/knowledge/flow/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">入会から成婚までの流れ</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">料金相場（24社実査）</Link>
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
