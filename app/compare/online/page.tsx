import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "オンライン結婚相談所おすすめ比較【2026年】来店不要・成婚料0円の安い4社を徹底比較",
  description:
    "来店不要で活動できるオンライン結婚相談所を、月会費・初期費用・成婚料・特徴で比較。naco-do・スマリード・エン婚活など成婚料0円の低コスト型を中心に、忙しい人や地方在住でも始めやすいオンライン型の選び方を解説します。",
  alternates: { canonical: "/compare/online/" },
};

// 料金は各レビューの調査値（2026年時点）。最新・正確な料金は各公式でご確認ください。
type Agency = { slug: string; name: string; monthly: string; matchingFee: string; type: string; point: string };
const agencies: Agency[] = [
  { slug: "naco-do", name: "naco-do（ナコウド）", monthly: "6,980円〜", matchingFee: "0円", type: "完全オンライン", point: "オンライン型の代表格。月会費が安く成婚料も0円。来店不要でスマホ完結。" },
  { slug: "smartread", name: "スマリード", monthly: "9,900円", matchingFee: "0円", type: "完全オンライン", point: "初期費用6,600円・成婚料0円とトータルが安い。シンプルな料金体系。" },
  { slug: "en-konkatsu", name: "エン婚活エージェント", monthly: "14,300円", matchingFee: "0円", type: "完全オンライン", point: "大手エン・ジャパン系で実績豊富。成婚料0円・来店不要。" },
  { slug: "fiore", name: "フィオーレ", monthly: "8,800円〜", matchingFee: "110,000円", type: "オンライン対応（ハイブリッド）", point: "オンラインと来店を選べる。仲人サポートも受けたい人向け。" },
];

const points = [
  { t: "来店不要で時間・場所を選ばない", d: "登録・お見合い調整・面談までオンラインで完結する相談所が増えています。仕事が忙しい人、近くに店舗がない地方在住の人でも始めやすいのが最大の利点です。" },
  { t: "成婚料0円・低コストが多い", d: "オンライン型は店舗コストが少ないぶん、月会費が安く成婚料0円のところが多いのが特徴。総額（初期費用＋月会費×活動月数＋成婚料）で比べると、仲人型より大幅に安くなるケースがあります。" },
  { t: "サポートは「データマッチング中心」", d: "オンライン型はAI・データマッチングで自分でも相手を探す形が中心です。手厚い仲人の対面サポートを重視するなら、ハイブリッド型（フィオーレ等）や仲人型も選択肢になります。" },
];

const faqs = [
  { q: "オンライン結婚相談所と店舗型の違いは？", a: "オンライン型は登録から面談までスマホ・PCで完結し、来店が不要です。店舗コストが少ないため月会費が安く成婚料0円のところが多い一方、サポートはデータマッチング中心になります。店舗型・仲人型は対面の手厚いサポートが受けられますが、料金は高めです。" },
  { q: "オンライン結婚相談所で一番安いのは？", a: "月会費ではnaco-doが6,980円〜と安く、成婚料も0円です。スマリードは初期費用6,600円・月9,900円・成婚料0円でトータルが安い設計。総額は活動月数で変わるため、初期費用＋月会費×活動月数＋成婚料で比較するのがおすすめです（料金は2026年時点）。" },
  { q: "オンラインでもちゃんと成婚できる？", a: "できます。オンライン型でも会員数の多い連盟に加盟していれば出会いの母数は十分で、データマッチングで効率的に相手を探せます。ただし自分で活動を進める主体性が求められるため、手厚く伴走してほしい人は仲人型・ハイブリッド型が向いています。" },
  { q: "地方在住でもオンライン結婚相談所は使える？", a: "使えます。来店不要のオンライン型は全国どこからでも同じサービスを受けられるため、近くに結婚相談所の店舗がない地方在住の方に特におすすめです。お見合いもオンラインで実施できる相談所が多くあります。" },
];

export default function OnlineComparePage() {
  return (
    <>
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "料金比較", href: "/compare/" }, { name: "オンライン結婚相談所比較" }]} />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-light mb-4 tracking-wide text-[#2C2C2C]">オンライン結婚相談所おすすめ比較【2026年】</h1>
        <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-6">
          来店不要で活動できる<strong>オンライン結婚相談所</strong>を、月会費・成婚料・タイプで比較しました。店舗コストが少ないぶん<strong>月会費が安く・成婚料0円</strong>のところが多く、忙しい人や地方在住の人でも始めやすいのが特徴です。
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">オンライン結婚相談所 比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#FAF7F2] text-left">
                  <th className="px-3 py-3">相談所</th>
                  <th className="px-3 py-3">月会費</th>
                  <th className="px-3 py-3">成婚料</th>
                  <th className="px-3 py-3">タイプ</th>
                </tr>
              </thead>
              <tbody>
                {agencies.map((a) => (
                  <tr key={a.slug} className="border-t border-gray-50">
                    <td className="px-3 py-3 font-medium"><Link href={`/review/${a.slug}/`} className="text-[#8B7355] underline">{a.name}</Link></td>
                    <td className="px-3 py-3 whitespace-nowrap">{a.monthly}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{a.matchingFee}</td>
                    <td className="px-3 py-3 text-xs">{a.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-2">※料金は当サイト各レビューの調査値（2026年時点）。最新・正確な料金は各公式サイトでご確認ください。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">各社の特徴</h2>
          <div className="space-y-3">
            {agencies.map((a) => (
              <div key={a.slug} className="border border-gray-100 rounded-lg p-4">
                <h3 className="font-medium mb-1"><Link href={`/review/${a.slug}/`} className="hover:text-[#8B7355]">{a.name}</Link>（{a.type}）</h3>
                <p className="text-sm text-[#2C2C2C]/70">{a.point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">オンライン結婚相談所の選び方（3つのポイント）</h2>
          <div className="space-y-4">
            {points.map((p, i) => (
              <div key={p.t} className="border border-gray-100 rounded-lg p-4">
                <h3 className="font-medium mb-1">{i + 1}. {p.t}</h3>
                <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="border border-gray-100 rounded-lg p-4">
                <summary className="font-medium text-[#2C2C2C] cursor-pointer">{f.q}</summary>
                <p className="text-sm text-[#2C2C2C]/70 mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
        </section>

        <section className="rounded-lg bg-[#FAF7F2] border border-gray-100 p-6">
          <h2 className="font-medium mb-3">関連ページ</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#8B7355] underline">結婚相談所の料金比較（13社一覧）</Link></li>
            <li><Link href="/review/naco-do/" className="text-[#8B7355] underline">naco-doの口コミ・評判</Link></li>
            <li><Link href="/review/en-konkatsu/" className="text-[#8B7355] underline">エン婚活エージェントの口コミ・評判</Link></li>
          </ul>
        </section>
      </main>
    </>
  );
}
