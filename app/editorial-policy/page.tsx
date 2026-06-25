import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "編集方針・掲載基準｜結婚相談所比較メディア ムスビバ",
  description:
    "ムスビバの編集方針と掲載基準を公開しています。結婚相談所の評価軸、料金・成婚率などの情報源、口コミの扱い、更新方針、提携（アフィリエイト）の開示について明記しています。",
  alternates: { canonical: "/editorial-policy/" },
};

export default function EditorialPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "編集方針・掲載基準" }]} />
      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2C2C2C]">
        <h1 className="text-2xl md:text-3xl font-light mb-6 tracking-wide">編集方針・掲載基準</h1>
        <p className="text-sm leading-relaxed mb-8">
          ムスビバ（以下「当サイト」）は、結婚相談所選びで後悔しないための情報提供を目的とした比較メディアです。読者が安心して判断できるよう、評価の考え方と情報の扱いを以下のとおり公開します。
        </p>

        <section className="mb-8">
          <h2 className="text-lg font-medium mb-3 border-l-4 border-[#8B7355] pl-3">1. 評価・掲載の基準</h2>
          <p className="text-sm leading-relaxed mb-2">各結婚相談所は、提携の有無に関わらず<strong>同一の基準</strong>で評価します。主な評価軸は次のとおりです。</p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>料金体系の明瞭さ（入会金・月会費・成婚料・総額の分かりやすさ）</li>
            <li>サービス形態（仲人型／データマッチング型／オンライン型）と向き不向き</li>
            <li>会員数・出会いの母数、対応エリア</li>
            <li>サポート体制（カウンセリング・お見合い調整）</li>
            <li>契約・解約条件の明確さ</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-medium mb-3 border-l-4 border-[#8B7355] pl-3">2. 情報源と正確性</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>料金・成婚率・会員数などの数値は、<strong>各社公式サイト</strong>を中心に確認し、確認時点を併記します。</li>
            <li>確定できない項目は推測で埋めず「公式要確認」「—」と明記します。</li>
            <li>制度・料金は変動するため、申込前に各社公式での再確認を推奨しています。</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-medium mb-3 border-l-4 border-[#8B7355] pl-3">3. 口コミの扱い</h2>
          <p className="text-sm leading-relaxed">
            当サイトは、<strong>口コミ・体験談を創作しません</strong>。利用者の声を扱う場合は、公開されている評判の傾向を、出典を示したうえで良い点・気になる点の両面から要約します。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-medium mb-3 border-l-4 border-[#8B7355] pl-3">4. 更新方針</h2>
          <p className="text-sm leading-relaxed">
            料金改定や新サービスを把握した際に内容を更新し、実際に内容を見直した場合のみ更新日を改めます。日付だけの形式的な更新は行いません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-medium mb-3 border-l-4 border-[#8B7355] pl-3">5. 提携（アフィリエイト）の開示</h2>
          <p className="text-sm leading-relaxed">
            当サイトには、各結婚相談所への申込・公式サイト遷移により当サイトが報酬を得るアフィリエイトリンクが含まれる場合があります。ただし<strong>報酬の有無が掲載順位・評価に影響しないよう、評価基準は全社共通</strong>としています。
          </p>
        </section>

        <p className="text-sm mt-10">
          関連：<Link href="/about/" className="text-[#8B7355] underline">運営方針について</Link> ／ <Link href="/compare/" className="text-[#8B7355] underline">結婚相談所の料金比較</Link>
        </p>
      </main>
    </>
  );
}
