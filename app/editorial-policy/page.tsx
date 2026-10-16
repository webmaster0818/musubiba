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
      <Breadcrumb items={[{ name: "編集方針・掲載基準" }]} />
      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2C2C2C]">
        <h1 className="text-2xl md:text-3xl font-light mb-6 tracking-wide">編集方針・掲載基準</h1>
        <p className="text-sm leading-relaxed mb-8">
          ムスビバ（以下「当サイト」）は、後悔のない結婚相談所選びに役立つ情報の提供を目的とした比較メディアです。読者の皆さまが安心して判断できるよう、評価の考え方と情報の取り扱いについて、以下のとおり公開します。
        </p>

        <section className="mb-8">
          <h2 className="text-lg font-medium mb-3 border-l-4 border-[#A08447] pl-3">1. 提携の有無にかかわらず、同一の基準で評価します</h2>
          <p className="text-sm leading-relaxed mb-2">当サイトでは、各結婚相談所を提携の有無にかかわらず<strong>同一の基準</strong>で評価しています。主な評価軸は次のとおりです。</p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>料金体系の明瞭さ（入会金・月会費・成婚料・総額の分かりやすさ）</li>
            <li>サービス形態（仲人型／データマッチング型／オンライン型）と向き不向き</li>
            <li>会員数・出会いの母数、対応エリア</li>
            <li>サポート体制（カウンセリング・お見合い調整）</li>
            <li>契約・解約条件の明確さ</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-medium mb-3 border-l-4 border-[#A08447] pl-3">2. 公式情報にもとづく正確な情報提供に努めます</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>料金・成婚率・会員数などの数値は<strong>各社の公式サイト</strong>を中心に確認し、確認時点を併記しています。</li>
            <li>確認できない項目は推測で補わず、「非公表」「確認できず」「—」と表示しています。</li>
            <li>制度・料金は変更される場合があるため、お申し込み前に、各社の公式サイトにて最新情報をご確認ください。</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-medium mb-3 border-l-4 border-[#A08447] pl-3">3. 口コミ・体験談の創作は行いません</h2>
          <p className="text-sm leading-relaxed">
            当サイトでは、<strong>口コミ・体験談の創作は行いません</strong>。利用者の声を取り上げる場合は、公開されている評判の傾向を、出典を示したうえで良い点・気になる点の両面から要約しています。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-medium mb-3 border-l-4 border-[#A08447] pl-3">4. 内容を見直した場合にのみ更新日を改めます</h2>
          <p className="text-sm leading-relaxed">
            料金改定や新サービスを把握した際に内容を更新し、実際に内容を見直した場合にのみ更新日を改めます。日付のみの形式的な更新は行いません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-medium mb-3 border-l-4 border-[#A08447] pl-3">5. 提携（アフィリエイト広告）について開示します</h2>
          <p className="text-sm leading-relaxed">
            当サイトには、各結婚相談所への申込や公式サイトへの遷移によって当サイトが報酬を得るアフィリエイトリンクが含まれる場合があります。<strong>報酬の有無が掲載順位・評価に影響しないよう、評価基準は全社共通</strong>としています。
          </p>
        </section>

        <p className="text-sm mt-10">
          関連：<Link href="/about/" className="text-[#A08447] underline">運営方針について</Link> ／ <Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較</Link>
        </p>
      </main>
    </>
  );
}
