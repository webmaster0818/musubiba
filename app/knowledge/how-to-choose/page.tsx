import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "結婚相談所の選び方｜仲人型とデータマッチング型の違い・失敗しないコツ",
  description:
    "結婚相談所の選び方を、仲人型・データマッチング型・ハイブリッド型のタイプ別に解説。それぞれの特徴と向いている人、料金やサポートの比較ポイント、失敗しないためのチェックリストをわかりやすくまとめました。各社の詳細は個別レビューで確認できます。",
  alternates: { canonical: "/knowledge/how-to-choose/" },
};

const faqs = [
  {
    q: "仲人型とデータマッチング型はどちらがおすすめですか？",
    a: "一概にどちらが良いとは言えず、婚活のスタイルによって向き不向きがあります。専任カウンセラーに相談しながら進めたい人は仲人型、自分のペースで効率よく相手を探したい人はデータマッチング型が向く傾向です。両方を組み合わせたハイブリッド型もあります。無料相談で自分に合うか確認するのがおすすめです。",
  },
  {
    q: "ハイブリッド型とは何ですか？",
    a: "仲人によるサポート・紹介と、システム上でのデータマッチングの両方を利用できるタイプです。カウンセラーの支援を受けつつ、自分でも相手を検索して活動できるため、サポートと自由度のバランスを取りたい人に向いています。",
  },
  {
    q: "会員数が多い相談所を選べば良いですか？",
    a: "会員数は出会いの選択肢の広さに関わる重要な要素ですが、それだけで選ぶのは避けたほうが無難です。会員層（年齢・エリア・目的）が自分に合うか、サポート体制や料金が納得できるかもあわせて確認しましょう。会員数の定義は相談所ごとに異なる場合があります。",
  },
  {
    q: "成婚率で選んでも大丈夫ですか？",
    a: "成婚率は参考になりますが、計算方法（分母の取り方）が相談所ごとに異なるため、数字の大小だけで単純比較するのは難しい面があります。成婚率はあくまで一つの目安とし、サポート内容や相性もあわせて総合的に判断しましょう。",
  },
  {
    q: "失敗しないために入会前に確認すべきことは？",
    a: "料金の総額と内訳、会員層が自分に合うか、担当カウンセラーとの相性、活動の進め方やサポート範囲、退会・休会の条件などです。複数社の無料相談を受けて比較すると、ミスマッチを避けやすくなります。",
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
  headline: "結婚相談所の選び方｜仲人型とデータマッチング型の違い・失敗しないコツ",
  description:
    "結婚相談所の選び方を、仲人型・データマッチング型・ハイブリッド型のタイプ別に解説。失敗しないためのチェックポイントをまとめました。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-07-01",
  dateModified: "2026-07-01",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/how-to-choose/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "選び方", item: "https://mu-su-bi-ba.com/knowledge/how-to-choose/" },
  ],
};

const relatedLinks = [
  { href: "/compare/", label: "結婚相談所の料金比較（13社一覧）でタイプ別に見比べる" },
  { href: "/review/musbell/", label: "ムスベルの評判・料金を見る（仲人＋データ併用のハイブリッド型）" },
  { href: "/review/ringbell/", label: "リングベルの評判・料金を見る（仲人型・地域密着）" },
  { href: "/review/marriage-pro/", label: "マリッジプロの評判・料金を見る（プロカウンセラー専任）" },
  { href: "/knowledge/cost/", label: "結婚相談所の料金相場・総額の目安を見る" },
  { href: "/knowledge/flow/", label: "入会から成婚までの流れ・活動期間の目安を見る" },
];

export default function KnowledgeHowToChoose() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "選び方" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          結婚相談所の選び方｜仲人型とデータマッチング型の違い・失敗しないコツ
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年7月</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#8B7355] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#8B7355] rounded-full" />結論：まず「タイプ」を知ってから比較する
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span>結婚相談所は大きく<strong>仲人型・データマッチング型・ハイブリッド型</strong>に分けられ、サポートの手厚さと自由度が異なります。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>相談しながら進めたいなら仲人型</strong>、<strong>自分のペースで探したいならデータマッチング型</strong>が向く傾向があります。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span>会員数・成婚率は<strong>あくまで一つの目安</strong>。会員層・料金・カウンセラーとの相性も含めて総合的に選びましょう。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span>タイプ別の実例は<Link href="/compare/" className="text-[#8B7355] underline">料金比較</Link>や個別レビューで確認できます。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本ページは一般的な傾向をまとめたものです。各社のサービス内容・料金は異なるため、詳細は公式サイトおよび無料相談でご確認ください。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">結婚相談所の3つのタイプと違い</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            結婚相談所は運営スタイルによって主に3つのタイプに分けられます。それぞれ、サポートの手厚さ・自由度・料金の傾向が異なります。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">タイプ</th>
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">特徴</th>
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">料金の傾向</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">仲人型</td><td className="px-4 py-3 text-xs">専任カウンセラーが相手紹介や交際をサポート。手厚い支援が受けられる。</td><td className="px-4 py-3 text-xs">高めの傾向</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">データマッチング型</td><td className="px-4 py-3 text-xs">条件をもとにシステムが相手を紹介。自分のペースで効率よく活動しやすい。</td><td className="px-4 py-3 text-xs">比較的抑えやすい</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">ハイブリッド型</td><td className="px-4 py-3 text-xs">仲人サポートとデータマッチングの両方を利用できる。バランス重視。</td><td className="px-4 py-3 text-xs">中間の傾向</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">※タイプの呼び方や区分は相談所によって異なる場合があります。料金の傾向は一般的な目安です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">タイプ別・向いている人</h2>

          <h3 className="font-medium text-lg mb-2 text-[#8B7355] tracking-wider">仲人型が向いている人</h3>
          <p className="text-sm text-[#2C2C2C]/70 leading-relaxed mb-6">
            自分から積極的にアプローチするのが苦手な人、婚活の進め方に不安があり相談しながら進めたい人、対面での手厚いサポートを重視する人に向いています。仲人型の例は<Link href="/review/ringbell/" className="text-[#8B7355] underline">リングベルのレビュー</Link>などで確認できます。
          </p>

          <h3 className="font-medium text-lg mb-2 text-[#8B7355] tracking-wider">データマッチング型が向いている人</h3>
          <p className="text-sm text-[#2C2C2C]/70 leading-relaxed mb-6">
            費用を抑えたい人、自分のペースで多くの相手を検索して活動したい人、オンライン中心で活動したい人に向いています。<Link href="/compare/" className="text-[#8B7355] underline">料金比較ページ</Link>でオンライン型・低価格の相談所を見比べられます。
          </p>

          <h3 className="font-medium text-lg mb-2 text-[#8B7355] tracking-wider">ハイブリッド型が向いている人</h3>
          <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">
            サポートも欲しいが自分でも相手を探したい人、出会いの数と質のバランスを取りたい人に向いています。仲人とデータマッチングを併用できる例は<Link href="/review/musbell/" className="text-[#8B7355] underline">ムスベルのレビュー</Link>で確認できます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">失敗しないためのチェックポイント</h2>
          <div className="space-y-3">
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-medium text-[#2C2C2C] mb-1">①料金は総額と内訳を確認する</h3>
              <p className="text-sm text-[#2C2C2C]/70">月会費だけでなく、初期費用・お見合い料・成婚料を含めた総額で比較します。詳しくは<Link href="/knowledge/cost/" className="text-[#8B7355] underline">料金相場の記事</Link>を参考にしてください。</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-medium text-[#2C2C2C] mb-1">②会員層が自分に合うか確認する</h3>
              <p className="text-sm text-[#2C2C2C]/70">年齢層・エリア・活動の目的が自分と合っているかは重要です。会員数の多さだけでなく、自分に合う相手がいるかという視点で見ましょう。</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-medium text-[#2C2C2C] mb-1">③カウンセラーとの相性を確認する</h3>
              <p className="text-sm text-[#2C2C2C]/70">仲人型・ハイブリッド型では担当カウンセラーの存在が大きく影響します。無料相談で対応や相性を確かめておくと安心です。</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-medium text-[#2C2C2C] mb-1">④退会・休会の条件を確認する</h3>
              <p className="text-sm text-[#2C2C2C]/70">契約期間や途中退会・休会の条件は相談所ごとに異なります。入会前に確認しておくと、後々のトラブルを避けやすくなります。</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-[#FAFAF8] rounded-xl border border-gray-100">
                <summary className="cursor-pointer px-6 py-4 font-normal text-[#2C2C2C] flex items-center justify-between tracking-wider">
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-[#8B7355] text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-[#2C2C2C]/60 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">関連ページ・タイプ別に相談所を見る</h2>
          <ul className="space-y-2 text-sm">
            {relatedLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className="text-[#8B7355] underline">{l.label}</Link></li>
            ))}
          </ul>
        </section>

        <section className="bg-[#333333] rounded-2xl p-10 text-white text-center mb-12">
          <h2 className="text-xl font-light mb-4 tracking-widest">タイプ別に相談所を比較する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">主要13社をタイプ・料金・特徴で一覧比較できます</p>
          <Link href="/compare/" className="inline-block bg-[#8B7355] hover:bg-[#7A6548] text-white font-normal py-3 px-8 rounded-full transition-colors tracking-widest">料金比較を見る</Link>
        </section>

        <AuthorBox />
      </article>
    </>
  );
}
