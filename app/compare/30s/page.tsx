import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "30代の結婚相談所おすすめ比較【2026年】男女別の選び方と料金で選ぶ4タイプ",
  description:
    "30代の婚活に適した結婚相談所を、料金・タイプ・サポートで比較しています。費用を抑えられるオンライン型から手厚い仲人型まで、30代男性・女性それぞれの選び方を解説します。成婚料0円の低コスト型や、ハイクラス向けも紹介しています。",
  alternates: { canonical: "/compare/30s/" },
};

type Agency = { slug: string; name: string; monthly: string; type: string; reason: string };
const agencies: Agency[] = [
  { slug: "naco-do", name: "naco-do（ナコード）", monthly: "16,800円", type: "オンライン", reason: "費用を重視する30代の方に適しています。成婚料0円・来店不要で、仕事と両立しやすい仕組みです。" },
  { slug: "en-konkatsu", name: "エン婚活エージェント", monthly: "16,500円", type: "オンライン", reason: "大手系で実績が豊富です。オンライン完結のため、忙しい30代の方でも続けやすいサービスです。" },
  { slug: "partner-agent", name: "パートナーエージェント", monthly: "14,300円〜", type: "仲人型（来店）", reason: "コンシェルジュによる手厚いサポートが特徴です。短期間での成婚を目指す30代の方に適しています。" },
  { slug: "onet", name: "オーネット", monthly: "16,500円〜", type: "ハイブリッド大手", reason: "会員数が多く、出会いの母数が大きい相談所です。30代の方にとって選択肢が豊富です。" },
];

const points = [
  { t: "30代は活動期間の効率を重視して選ぶことをおすすめします", d: "30代は、出会いから成婚までのスピードが重要になりやすい時期です。会員数（出会いの母数）と、お見合い調整・進捗管理を行うサポート体制を重視すると、限られた時間で効率よく活動できます。" },
  { t: "費用を重視する場合はオンライン型が適しています", d: "費用を抑えて長く続けたい場合は、月会費が安く成婚料0円のオンライン型（naco-do・エン婚活など）が候補です。来店不要で仕事と両立しやすい点も、30代の方に適しています。" },
  { t: "手厚いサポートを重視する場合は仲人型・大手が適しています", d: "自分のペースで進めることに不安がある方や、短期間での成婚を目指す方には、コンシェルジュが伴走する仲人型（パートナーエージェント）や、会員数の多い大手（オーネット）が向いています。" },
  { t: "男女別に意識したいポイント", d: "一般に、30代男性は年収・将来性、30代女性は年齢に対する出会いの早さがポイントになる傾向があります。いずれの場合も、会員数が多くサポートが手厚い相談所ほど、希望条件に合う相手と出会いやすくなります。" },
];

const faqs = [
  { q: "30代の婚活に結婚相談所は向いていますか？", a: "向いています。アプリや婚活パーティーに比べ、結婚相談所には結婚に真剣な会員が集まり、年齢・年収などの条件も確認されているため、効率よく結婚を前提とした出会いを探せます。出会いから成婚までのスピードを重視しやすい30代の方に適した方法です。" },
  { q: "30代でおすすめの結婚相談所は？", a: "費用を重視する場合はnaco-do（月会費16,800円・成婚料0円）やエン婚活エージェント、手厚いサポートや短期間での成婚を目指す場合はパートナーエージェント、出会いの母数を重視する場合はオーネットが候補です。費用と求めるサポート量で選ぶことをおすすめします（料金は2026年時点）。" },
  { q: "30代の結婚相談所の費用相場は？", a: "オンライン型は月会費7,000〜15,000円前後・成婚料0円、仲人型・大手は月会費15,000〜20,000円前後＋成婚料が目安です。初期費用＋月会費×活動月数＋成婚料の総額で比較することをおすすめします。詳しくは料金比較ページをご覧ください。" },
  { q: "30代後半から始めても間に合いますか？", a: "はい、30代後半からでも十分に活動できます。結婚相談所には30代後半・40代の会員も多く、年齢に合った相手を紹介してもらえます。年齢を意識する時期だからこそ、出会いの母数が多くサポートの手厚い相談所で、早めに活動を始めることをおすすめします。" },
];

export default function ThirtiesComparePage() {
  return (
    <>
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "料金比較", href: "/compare/" }, { name: "30代の結婚相談所比較" }]} />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-light mb-4 tracking-wide text-[#2C2C2C]">30代の結婚相談所おすすめ比較【2026年】</h1>
        <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-6">
          30代の婚活に向く結婚相談所を、<strong>料金・タイプ・サポート</strong>で比較しています。費用を抑えられるオンライン型から、短期間での成婚を目指せる手厚い仲人型まで、<strong>30代男女それぞれの選び方</strong>を解説します。
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">30代におすすめの結婚相談所 比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#FAF7F2] text-left">
                  <th className="px-3 py-3">相談所</th>
                  <th className="px-3 py-3">月会費</th>
                  <th className="px-3 py-3">タイプ</th>
                  <th className="px-3 py-3">30代におすすめの理由</th>
                </tr>
              </thead>
              <tbody>
                {agencies.map((a) => (
                  <tr key={a.slug} className="border-t border-gray-50 align-top">
                    <td className="px-3 py-3 font-medium"><Link href={`/review/${a.slug}/`} className="text-[#A08447] underline">{a.name}</Link></td>
                    <td className="px-3 py-3 whitespace-nowrap">{a.monthly}</td>
                    <td className="px-3 py-3 text-xs">{a.type}</td>
                    <td className="px-3 py-3 text-xs">{a.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-2">※料金は当サイト各レビューの調査値です（2026年時点）。最新の正確な料金は、各公式サイトでご確認ください。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">30代の結婚相談所の選び方</h2>
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
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">よくある質問</h2>
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
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（24社一覧）</Link></li>
            <li><Link href="/compare/online/" className="text-[#A08447] underline">オンライン結婚相談所おすすめ比較</Link></li>
            <li><Link href="/compare/musbell-vs-ringbell/" className="text-[#A08447] underline">ムスベルとリングベルを比較（料金総額・対象年代・特徴）</Link></li>
            <li><Link href="/review/musbell/" className="text-[#A08447] underline">ムスベルの評判・料金を見る</Link></li>
            <li><Link href="/review/naco-do/" className="text-[#A08447] underline">naco-doの口コミ・評判</Link></li>
          </ul>
        </section>
      </main>
    </>
  );
}
