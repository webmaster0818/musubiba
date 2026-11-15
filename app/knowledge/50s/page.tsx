import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 数値はすべて一次統計・公式公表値から転記（2026-11-15 確認）。
// ・年齢別の配偶関係：国立社会保障・人口問題研究所「人口統計資料集（2024年版）」表6-24（総務省統計局『国勢調査報告』2020年・不詳補完値）
// ・50歳時の未婚割合：同 表6-23（45〜49歳と50〜54歳の未婚割合の平均値）
// ・相談所の年代別データ：当サイトのレビューページの実査記録（FIORE 2026-11-11・Bridalチューリップ 2026-10-21/10-25・流山おおたかの森 2026-10-27・リングベル 2026-10-26 公式確認）

const IPSS_URL = "https://www.ipss.go.jp/syoushika/tohkei/Popular/Popular2024.asp?chap=6";

const status = [
  { age: "50〜54歳", sex: "男性", mikon: 26.6, shibetsu: 0.6, ribetsu: 7.2 },
  { age: "50〜54歳", sex: "女性", mikon: 16.5, shibetsu: 2.0, ribetsu: 11.4 },
  { age: "55〜59歳", sex: "男性", mikon: 21.6, shibetsu: 1.2, ribetsu: 8.0 },
  { age: "55〜59歳", sex: "女性", mikon: 12.2, shibetsu: 3.8, ribetsu: 11.6 },
];
const single = (r: (typeof status)[number]) => (r.mikon + r.shibetsu + r.ribetsu).toFixed(1);

const at50 = [
  { year: "2000年", m: "12.57", f: "5.82" },
  { year: "2005年", m: "15.96", f: "7.25" },
  { year: "2010年", m: "20.14", f: "10.61" },
  { year: "2015年", m: "24.77", f: "14.89" },
  { year: "2020年", m: "28.25", f: "17.81" },
];

export const metadata: Metadata = {
  title: "50代の婚活の現状｜50代前半の独身は男性34.4%・女性29.9%（2020年国勢調査）と結婚相談所の年代別データ",
  description:
    "2020年国勢調査では、50〜54歳の男性の34.4%、女性の29.9%が未婚・死別・離別のいずれかで、配偶者がいない状態でした。50歳時の未婚割合の推移と、結婚相談所が公表している50代の成婚率・成婚者の声の年代内訳を、一次統計と公式サイトの実査にもとづいて整理しています。",
  alternates: { canonical: "/knowledge/50s/" },
};

const faqs = [
  {
    q: "50代で独身の人はどのくらいいますか？",
    a: "国立社会保障・人口問題研究所が国勢調査（2020年）から算出した値では、50〜54歳で配偶者がいない人（未婚・死別・離別の合計）の割合は男性34.4%、女性29.9%、55〜59歳では男性30.8%、女性27.6%でした。50代の約3人に1人は配偶者がいない計算になります。",
  },
  {
    q: "50代でも結婚相談所に入会できますか？",
    a: "入会できる相談所は多くありますが、年齢の上限を設けている相談所もあります。当サイトの実査では、リングベルは入会資格を男性20〜44歳・女性20〜39歳としていました（2026年10月26日公式確認）。年齢条件は相談所ごとに異なるため、入会前に公式サイトまたは無料相談でご確認ください。",
  },
  {
    q: "50代の成婚率は公表されていますか？",
    a: "年代別の成婚率を公表している相談所は多くありません。当サイトの実査では、結婚相談所フィオーレが公式ページで「50歳〜38.2%」と掲載していました（2026年11月11日確認）。ただし年代別の数値については集計期間や分母の記載がないため、目安としてご覧いただき、ご自身の年代の実績は無料相談で確認することをおすすめします。",
  },
  {
    q: "50代の婚活で最初に確認すべきことは何ですか？",
    a: "①その相談所に入会できる年齢か、②紹介を受けられる会員のうち同年代（または希望する年代）は何人か、③再婚の方が入会できるか、の3点です。50代は離別・死別を経験している人の割合が他の年代より高いため、再婚希望の会員の扱いも確認しておくと安心です。",
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
  headline: "50代の婚活の現状｜独身割合の統計と結婚相談所の年代別データ",
  description: "国勢調査にもとづく50代の配偶関係の内訳と、結婚相談所が公表している50代のデータを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-15",
  dateModified: "2026-11-15",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/50s/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "50代の婚活", item: "https://mu-su-bi-ba.com/knowledge/50s/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";

export default function Knowledge50s() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "50代の婚活" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          50代の婚活の現状｜独身割合の統計と結婚相談所の年代別データ
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月15日（統計値は同日に国立社会保障・人口問題研究所の公表資料で確認。相談所のデータは各レビューページの公式確認日を併記）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />結論：50代の約3人に1人は配偶者がいない状態です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>2020年国勢調査では、<strong>50〜54歳で配偶者がいない人は男性{single(status[0])}%・女性{single(status[1])}%</strong>でした（未婚・死別・離別の合計）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>50歳時の未婚割合は、2000年から2020年の20年間で<strong>男性12.57%→28.25%、女性5.82%→17.81%</strong>に上がりました。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>女性は<strong>離別が1割を超えます</strong>（50〜54歳11.4%）。50代の婚活では、初婚の方と再婚の方が同じ場で活動することが前提になります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>結婚相談所には<strong>年齢の上限を設けているところ</strong>があり、50代の成婚率を公表している相談所は限られます。入会前に年齢条件と同年代の会員数を確認することをおすすめします。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">50代の配偶関係の内訳（2020年国勢調査）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            各年齢層の人口に占める割合です。「配偶者なし計」は未婚・死別・離別を合計した値で、当サイトが算出しました。
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
          <p className="text-xs text-[#2C2C2C]/55">出典：<a href={IPSS_URL} target="_blank" rel="noopener noreferrer" className="underline">国立社会保障・人口問題研究所「人口統計資料集（2024年版）」</a> 表6-24（総務省統計局『国勢調査報告』2020年・不詳補完値。2026年11月15日確認）。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">50歳時の未婚割合の推移</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            50歳時の未婚割合は、45〜49歳と50〜54歳の未婚割合の平均値です。男女とも20年間で2倍以上になっており、50代で一度も結婚していない人は珍しい存在ではなくなっています。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full min-w-[420px] text-sm border border-[#E5DCCF]">
              <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年</th><th className={th}>男性</th><th className={th}>女性</th></tr></thead>
              <tbody>
                {at50.map((r) => (
                  <tr key={r.year} className="border-t border-[#E5DCCF]"><td className={td}>{r.year}</td><td className={td}>{r.m}%</td><td className={td}>{r.f}%</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/55">出典：同 表6-23（2015年・2020年は不詳補完値。2026年11月15日確認）。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚相談所が公表している50代のデータ</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>当サイトがレビューしている24社の公式サイトで確認できた、50代に関係するデータは次のとおりです。いずれも各社が公表している値で、当サイトが独自に調査した成婚率ではありません。</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>相談所</th><th className={th}>公表内容</th><th className={th}>確認日</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/review/fiore/" className="text-[#A08447] underline">フィオーレ</Link></td><td className={td}>年代別の成婚率として「50歳〜38.2%」（全体は52.0%）を掲載。年代別の数値は集計期間・分母の記載なし</td><td className={td}>2026年11月11日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/review/bridal-tulip/" className="text-[#A08447] underline">Bridalチューリップ</Link></td><td className={td}>42歳以上は専用プラン（入会金150,800円・2026年10月21日確認）。公式「お客様の声」205件のうち、50代は6件・60代は1件（当サイト集計）</td><td className={td}>2026年10月25日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/review/nagareyama-otakanomori/" className="text-[#A08447] underline">流山おおたかの森結婚相談所</Link></td><td className={td}>公式掲載の成婚者の声37件のうち、50代は3件・60代以上は3件</td><td className={td}>2026年10月27日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/review/ringbell/" className="text-[#A08447] underline">リングベル</Link></td><td className={td}>入会資格は男性20〜44歳・女性20〜39歳のため、50代は入会の対象外</td><td className={td}>2026年10月26日</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#2C2C2C]/55">※口コミ・成婚者の声の件数は、各社が掲載している件数を当サイトが年代別に数えたものです。掲載されている声は運営側が選んだものを含むため、年代ごとの成婚のしやすさを示すものではありません。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">無料相談で確認したい3つの質問</h2>
          <ol className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">1.</span><span><strong>入会できる年齢の上限はありますか</strong>：年齢によってプランや料金が変わる場合もあります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">2.</span><span><strong>私が希望する年代の会員は何人いますか</strong>：会員全体の人数ではなく、希望条件で絞り込んだ人数を確認することをおすすめします。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">3.</span><span><strong>50代で成婚した会員の実績はありますか</strong>：件数と時期を具体的に聞くと、その相談所の得意な年代が分かります。</span></li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/saikon/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">離婚後の再婚</Link>
            <Link href="/knowledge/senior/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">60代以上のシニア婚活</Link>
            <Link href="/knowledge/tekireiki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚適齢期と平均初婚年齢</Link>
            <Link href="/mens/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">男性向けの相談所比較</Link>
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
