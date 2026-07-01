import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "結婚相談所の基礎知識｜料金相場・選び方・活動の流れ【2026年】| ムスビバ",
  description:
    "結婚相談所の料金相場、仲人型とデータマッチング型の選び方、入会から成婚までの流れをわかりやすく解説。はじめての婚活で知っておきたい基礎知識をまとめました。各社の詳しい料金・評判は個別レビューでご確認いただけます。",
  alternates: { canonical: "/knowledge/" },
};

const articles = [
  {
    href: "/knowledge/cost/",
    title: "結婚相談所の料金相場は？初期費用・月会費・成婚料の目安【2026年】",
    desc: "初期費用・月会費・成婚料の一般的な相場レンジを整理。総額の考え方と、費用を抑えるポイントを解説します。",
  },
  {
    href: "/knowledge/how-to-choose/",
    title: "結婚相談所の選び方｜仲人型とデータマッチング型の違い・失敗しないコツ",
    desc: "仲人型・データマッチング型・ハイブリッド型の違いと、自分に合うタイプの見極め方をわかりやすく解説します。",
  },
  {
    href: "/knowledge/flow/",
    title: "結婚相談所の入会から成婚までの流れ・活動期間の目安",
    desc: "無料相談から入会、お見合い、交際、成婚退会までの一般的なステップと、活動期間の目安を紹介します。",
  },
];

const relatedLinks = [
  { href: "/compare/", label: "結婚相談所の料金比較（13社一覧）を見る" },
  { href: "/review/musbell/", label: "ムスベルの評判・料金を見る（全国・複数連盟加盟）" },
  { href: "/review/ringbell/", label: "リングベルの評判・料金を見る（仲人型・地域密着）" },
  { href: "/review/marriage-pro/", label: "マリッジプロの評判・料金を見る（プロカウンセラー専任）" },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
  ],
};

export default function KnowledgeHub() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識" }]} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-6 tracking-wider text-[#2C2C2C]">
          結婚相談所の基礎知識
        </h1>
        <p className="text-sm text-[#2C2C2C]/70 leading-relaxed mb-4">
          はじめて結婚相談所を検討する方に向けて、料金の相場・タイプの選び方・活動の流れといった基礎知識をまとめました。全体像をつかんだうえで、各社の料金や評判は個別のレビューページや料金比較で見比べるのがおすすめです。
        </p>
        <p className="text-xs text-[#2C2C2C]/50 mb-10 leading-relaxed">
          ※本カテゴリの内容は一般的な傾向・目安をまとめたものです。料金や条件は各社・プラン・時期により異なります。最新かつ正確な情報は各公式サイトおよび無料相談でご確認ください。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">基礎知識の記事一覧</h2>
          <div className="space-y-4">
            {articles.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="block bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#8B7355] transition-colors"
              >
                <h3 className="font-medium text-lg text-[#8B7355] tracking-wider mb-2">{a.title}</h3>
                <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">{a.desc}</p>
                <p className="text-xs text-[#8B7355] mt-3 font-medium">記事を読む →</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">気になる相談所を比較・チェックする</h2>
          <p className="text-sm text-[#2C2C2C]/70 leading-relaxed mb-4">
            基礎知識をつかんだら、実際の相談所の料金や評判を見比べてみましょう。料金比較や個別レビューで、自分の条件に合う相談所を探せます。
          </p>
          <ul className="space-y-2 text-sm">
            {relatedLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[#8B7355] underline">{l.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-[#333333] rounded-2xl p-10 text-white text-center mb-12">
          <h2 className="text-xl font-light mb-4 tracking-widest">まずはランキングから探す</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">料金・成婚率・サポート体制で厳選した結婚相談所ランキングをチェックしましょう</p>
          <Link href="/" className="inline-block bg-[#8B7355] hover:bg-[#7A6548] text-white font-normal py-3 px-8 rounded-full transition-colors tracking-widest">ランキングを見る</Link>
        </section>

        <AuthorBox />
      </main>
    </>
  );
}
