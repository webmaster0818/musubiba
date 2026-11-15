import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 数値・条文はすべて一次情報から転記（2026-11-15 確認）。
// ・再婚禁止期間の廃止・嫡出推定の見直し：法務省「民法等の一部を改正する法律（令和4年法律第102号）について」
// ・条文：民法 第772条・第798条（e-Gov法令検索）。第733条（再婚禁止期間）は「削除」
// ・再婚件数の割合・離婚件数：厚生労働省「令和6年(2024)人口動態統計月報年計（概数）の概況」表11・結果の概要
// ・年齢別の離別割合：国立社会保障・人口問題研究所「人口統計資料集（2024年版）」表6-24（国勢調査2020年・不詳補完値）
// ・相談所の再婚の扱い：当サイトのレビューページの実査記録（各行に確認日）。オリコン再婚目的部門のサンマリエの得点は 2026-11-15 に再確認

const MOJ_URL = "https://www.moj.go.jp/MINJI/minji07_00315.html";
const MINPO_URL = "https://laws.e-gov.go.jp/law/129AC0000000089";
const MHLW_URL = "https://www.mhlw.go.jp/toukei/saikin/hw/jinkou/geppo/nengai24/index.html";
const IPSS_URL = "https://www.ipss.go.jp/syoushika/tohkei/Popular/Popular2024.asp?chap=6";

const remarriageShare = [
  { year: "1995年", h: "13.2", w: "11.6" },
  { year: "2005年", h: "18.2", w: "16.0" },
  { year: "2015年", h: "19.7", w: "16.8" },
  { year: "2021年", h: "19.1", w: "16.6" },
  { year: "2022年", h: "18.6", w: "16.0" },
  { year: "2023年", h: "18.5", w: "16.0" },
  { year: "2024年", h: "17.9", w: "15.6" },
];

const divorced = [
  { age: "30〜34歳", m: "2.0", f: "3.9" },
  { age: "35〜39歳", m: "3.3", f: "5.8" },
  { age: "40〜44歳", m: "4.5", f: "7.7" },
  { age: "45〜49歳", m: "5.8", f: "9.9" },
  { age: "50〜54歳", m: "7.2", f: "11.4" },
  { age: "55〜59歳", m: "8.0", f: "11.6" },
];

export const metadata: Metadata = {
  title: "離婚後の再婚｜女性の再婚禁止期間は2024年4月に廃止・婚姻の夫17.9%、妻15.6%が再婚【人口動態統計】",
  description:
    "女性の再婚禁止期間は民法改正により2024年4月1日に廃止され、離婚後すぐに再婚できるようになりました。2024年の婚姻のうち夫の17.9%・妻の15.6%が再婚です。法改正の内容、年齢別の離別割合、子連れ再婚の養子縁組のルール、再婚の扱いを公表している結婚相談所を一次情報にもとづいて整理しています。",
  alternates: { canonical: "/knowledge/saikon/" },
};

const faqs = [
  {
    q: "離婚後、女性はすぐに再婚できますか？",
    a: "できます。民法改正により、女性の再婚禁止期間は2024年4月1日に廃止されました（法務省）。民法第733条は現在「削除」となっています。あわせて、離婚などから300日以内に生まれた子であっても、母が再婚した後に生まれた子は再婚後の夫の子と推定するルールに改められました（民法第772条第3項）。",
  },
  {
    q: "再婚する人はどのくらいいますか？",
    a: "厚生労働省の人口動態統計（2024年・概数）では、全婚姻件数に占める再婚の割合は夫が17.9%、妻が15.6%でした。1995年（夫13.2%・妻11.6%）より高い水準ですが、2015年（夫19.7%・妻16.8%）をピークに緩やかに下がっています。",
  },
  {
    q: "再婚相手の子どもと養子縁組をするには、家庭裁判所の許可が必要ですか？",
    a: "民法第798条では、未成年者を養子とするには家庭裁判所の許可が必要とされていますが、「自己又は配偶者の直系卑属を養子とする場合は、この限りでない」と定められています。このため、配偶者の子（いわゆる連れ子）を養子とする場合は、家庭裁判所の許可は不要です。手続きの詳細は市区町村の戸籍窓口でご確認ください。",
  },
  {
    q: "バツイチでも結婚相談所に入会できますか？",
    a: "入会できる相談所が多くあります。当サイトの実査では、パートナーエージェントが「再婚の方も入会できます」（2026年10月24日公式確認）、東京フォリパートナーが公式FAQで婚歴のある方の入会可を明記し、再婚向けの「リスタート」コースを設けていました（2026年10月25日公式確認）。パートナーエージェントやリングベルのように、入会時に独身証明書の提出を求める相談所があります。",
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
  headline: "離婚後の再婚｜再婚禁止期間の廃止と再婚の統計",
  description: "2024年4月の民法改正の内容、再婚件数の割合、子連れ再婚の養子縁組のルール、再婚の扱いを公表している結婚相談所を整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-15",
  dateModified: "2026-11-15",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/saikon/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "離婚後の再婚", item: "https://mu-su-bi-ba.com/knowledge/saikon/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";

export default function KnowledgeSaikon() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "離婚後の再婚" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          離婚後の再婚｜再婚禁止期間の廃止と、再婚の統計・結婚相談所での扱い
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月15日（法令・統計値は同日に法務省・厚生労働省・e-Gov法令検索で確認。相談所の情報は各行に公式確認日を併記）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />結論：離婚後は男女ともすぐに再婚でき、再婚は婚姻の6件に1件程度です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>女性の再婚禁止期間は2024年4月1日に廃止</strong>されました。離婚後に待機期間を置く必要はありません（法務省）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>2024年の婚姻のうち、<strong>夫の17.9%・妻の15.6%が再婚</strong>でした（厚生労働省 人口動態統計・概数）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>配偶者の子（連れ子）を養子にする場合、<strong>未成年でも家庭裁判所の許可は不要</strong>です（民法第798条ただし書）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>結婚相談所では、<strong>再婚の方の入会可を明記</strong>している相談所や、<strong>再婚向けのコース</strong>を設けている相談所があります。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">2024年4月の民法改正で変わったこと</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>改正後の内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>再婚禁止期間</td><td className={td}>女性の再婚禁止期間を廃止（民法第733条は「削除」）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>再婚後に生まれた子の父</td><td className={td}>婚姻の解消等の日から300日以内に生まれた子であっても、母が前夫以外の男性と再婚した後に生まれた子は、再婚後の夫の子と推定（民法第772条第3項）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>施行日</td><td className={td}>2024年（令和6年）4月1日</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              改正後は男女とも、離婚が成立すれば待機期間を置かずに婚姻届を提出できます。改正の経過措置など詳しい内容は、法務省のページでご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MOJ_URL} target="_blank" rel="noopener noreferrer" className="underline">法務省「民法等の一部を改正する法律（令和4年法律第102号）について」</a>・<a href={MINPO_URL} target="_blank" rel="noopener noreferrer" className="underline">民法（e-Gov法令検索）</a>（いずれも2026年11月15日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">再婚の割合の推移</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            全婚姻件数のうち、夫・妻がそれぞれ再婚である割合です。2024年の婚姻件数は48万5,063組、離婚件数は18万5,895組でした。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full min-w-[420px] text-sm border border-[#E5DCCF]">
              <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年</th><th className={th}>夫が再婚</th><th className={th}>妻が再婚</th></tr></thead>
              <tbody>
                {remarriageShare.map((r) => (
                  <tr key={r.year} className="border-t border-[#E5DCCF]"><td className={td}>{r.year}</td><td className={td}>{r.h}%</td><td className={td}>{r.w}%</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MHLW_URL} target="_blank" rel="noopener noreferrer" className="underline">厚生労働省「令和6年(2024)人口動態統計月報年計（概数）の概況」</a> 表11・結果の概要（2026年11月15日確認）。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">年齢別の離別割合（2020年国勢調査）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            各年齢層の人口のうち、離婚して現在配偶者がいない人の割合です。年齢が上がるほど高くなり、50代の女性では1割を超えます。結婚相談所で同年代の相手を探す場合、再婚の方と出会う機会は年齢とともに増えると考えられます。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full min-w-[420px] text-sm border border-[#E5DCCF]">
              <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年齢</th><th className={th}>男性</th><th className={th}>女性</th></tr></thead>
              <tbody>
                {divorced.map((r) => (
                  <tr key={r.age} className="border-t border-[#E5DCCF]"><td className={td}>{r.age}</td><td className={td}>{r.m}%</td><td className={td}>{r.f}%</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/55">出典：<a href={IPSS_URL} target="_blank" rel="noopener noreferrer" className="underline">国立社会保障・人口問題研究所「人口統計資料集（2024年版）」</a> 表6-24（総務省統計局『国勢調査報告』2020年・不詳補完値。2026年11月15日確認）。離婚後に再婚した人は「有配偶」に含まれるため、この表には含まれません。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">再婚の扱いを公表している結婚相談所</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>当サイトがレビューしている24社の公式サイト・公表資料で確認できた、再婚に関する記載は次のとおりです。</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>相談所</th><th className={th}>確認できた内容</th><th className={th}>確認日</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/review/folli-partner/" className="text-[#A08447] underline">東京フォリパートナー</Link></td><td className={td}>公式FAQで婚歴のある方の入会可を明記。再婚向けの「リスタート」コース（入会金220,000円・月会費22,000円・成婚料280,000円、お見合い申込み上限は月150名）</td><td className={td}>2026年10月25日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/review/partner-agent/" className="text-[#A08447] underline">パートナーエージェント</Link></td><td className={td}>入会条件の説明で「再婚の方も入会できます」と記載（独身証明書が必要）</td><td className={td}>2026年10月24日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/review/sunmarie/" className="text-[#A08447] underline">サンマリエ</Link></td><td className={td}>オリコン顧客満足度調査の部門別得点で「再婚目的」71.2点・1位</td><td className={td}>2026年11月15日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/review/ibj-members/" className="text-[#A08447] underline">IBJメンバーズ</Link></td><td className={td}>オリコン顧客満足度調査の部門別得点で「再婚目的」69.5点・2位</td><td className={td}>2026年10月24日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/review/bellroad/" className="text-[#A08447] underline">ベルロード縁結びサポート</Link></td><td className={td}>公式サイトに「再婚希望の方へ」のページあり。公式掲載の成婚者の声6件のうち再婚は2件</td><td className={td}>2026年11月11日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/review/excellence-aoyama/" className="text-[#A08447] underline">エクセレンス青山</Link></td><td className={td}>公式「成婚者様の声」1ページ目で婚歴の記載がある19件のうち、再婚・再再婚は3件</td><td className={td}>2026年10月21日</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#2C2C2C]/55">※オリコンの得点は各社のオリコン顧客満足度ページの掲載値です。成婚者の声の件数は、各社が掲載している声を当サイトが数えたもので、運営側が選んだ声を含みます。記載のない相談所が再婚の方を受け入れていないことを示すものではありません。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/shibetsu-saikon/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">死別後の再婚</Link>
            <Link href="/knowledge/50s/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">50代の婚活の現状</Link>
            <Link href="/knowledge/senior/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">60代以上のシニア婚活</Link>
            <Link href="/knowledge/how-to-choose/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">タイプ別の選び方</Link>
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
