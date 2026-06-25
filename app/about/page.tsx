import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "運営方針・このサイトについて｜結婚相談所比較メディア ムスビバ",
  description:
    "結婚相談所比較メディア「ムスビバ」の運営方針・ミッション・編集体制・収益モデルについて。中立的な比較情報の提供を目的とし、評価基準の公開とアフィリエイトの開示を徹底しています。",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "このサイトについて" }]} />
      <main className="max-w-3xl mx-auto px-4 py-10 text-[#2C2C2C]">
        <h1 className="text-2xl md:text-3xl font-light mb-6 tracking-wide">このサイトについて</h1>

        <section className="mb-8">
          <h2 className="text-lg font-medium mb-3 border-l-4 border-[#8B7355] pl-3">ミッション</h2>
          <p className="text-sm leading-relaxed">
            ムスビバは、「結婚相談所選びで後悔する人を減らす」ことを目的とした比較メディアです。料金体系が複雑で比較しづらい結婚相談所について、<strong>公式情報にもとづく中立的な比較</strong>を分かりやすく提供します。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-medium mb-3 border-l-4 border-[#8B7355] pl-3">編集体制</h2>
          <p className="text-sm leading-relaxed">
            婚活・結婚相談所の料金やサービスを継続的に調査する編集部が、各社公式情報を確認したうえで記事を作成・更新しています。料金・成婚率・会員数などの数値は確認時点を明記し、確定できない項目は推測で補わず正直に記載します。詳細は<Link href="/editorial-policy/" className="text-[#8B7355] underline">編集方針・掲載基準</Link>をご覧ください。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-medium mb-3 border-l-4 border-[#8B7355] pl-3">収益モデル（アフィリエイトの開示）</h2>
          <p className="text-sm leading-relaxed">
            当サイトは、各結婚相談所への申込・公式サイトへの遷移により報酬を得るアフィリエイト広告で運営しています。これにより無料で情報を提供していますが、<strong>報酬の有無は掲載順位・評価に影響させません</strong>（評価基準は全社共通）。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-medium mb-3 border-l-4 border-[#8B7355] pl-3">免責事項</h2>
          <p className="text-sm leading-relaxed">
            掲載情報は作成・更新時点のものであり、最新の料金・サービス内容は各社公式サイトでご確認ください。当サイトの情報を利用した結果生じた損害について、当サイトは責任を負いかねます。
          </p>
        </section>

        <p className="text-sm mt-10">
          関連：<Link href="/editorial-policy/" className="text-[#8B7355] underline">編集方針・掲載基準</Link> ／ <Link href="/compare/" className="text-[#8B7355] underline">結婚相談所の料金比較</Link>
        </p>
      </main>
    </>
  );
}
