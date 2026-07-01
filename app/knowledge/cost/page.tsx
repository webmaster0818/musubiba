import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "結婚相談所の料金相場は？初期費用・月会費・成婚料の目安【2026年】",
  description:
    "結婚相談所の料金相場を初期費用・月会費・お見合い料・成婚料に分けて解説。オンライン型と仲人型でどれくらい違うのか、1年活動した場合の総額の目安、費用を抑えるポイントまでわかりやすくまとめました。金額は目安で、正確な料金は各公式でご確認ください。",
  alternates: { canonical: "/knowledge/cost/" },
};

const faqs = [
  {
    q: "結婚相談所の料金は総額でいくらくらいかかりますか？",
    a: "タイプや活動期間により幅がありますが、1年間活動して成婚した場合でおおよそ30万〜60万円程度が一般的な目安とされます。オンライン型は総額を抑えやすく、仲人型・大手型は手厚いサポートの分だけ高くなる傾向があります。成婚料の有無で総額は大きく変わるため、事前に無料相談で見積もりを確認するのがおすすめです（金額は目安・各社で異なります）。",
  },
  {
    q: "初期費用の相場はどのくらいですか？",
    a: "初期費用（入会金・登録料・活動初期費用などの合計）は、オンライン型で数千円〜数万円、仲人型・大手型で10万〜30万円程度が一般的な目安とされます。名称や内訳は各社で異なるため、何が含まれるかを確認することが大切です。",
  },
  {
    q: "月会費はどのくらいが相場ですか？",
    a: "月会費はオンライン型で月7,000〜10,000円前後、仲人型・大手型で月15,000〜20,000円前後が一つの目安です。サポートの手厚さや紹介人数の多さによって料金帯が変わります。",
  },
  {
    q: "成婚料は必ずかかりますか？",
    a: "成婚料は成婚退会時に支払う費用で、10万〜30万円程度が一般的な目安ですが、成婚料が0円の相談所もあります。月会費が安くても成婚料が高い場合は総額が上がることがあるため、成婚料の有無と金額もあわせて確認しましょう。",
  },
  {
    q: "費用を抑えるにはどうすればいいですか？",
    a: "月会費だけでなく総額（初期費用＋月会費×活動月数＋お見合い料＋成婚料）で比較すること、活動期間を短く保てるようサポートを活用すること、成婚料0円やオンライン型を検討することなどが挙げられます。複数社の無料相談を受けて見積もりを比べるのも有効です。",
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
  headline: "結婚相談所の料金相場は？初期費用・月会費・成婚料の目安【2026年】",
  description:
    "結婚相談所の料金相場を初期費用・月会費・お見合い料・成婚料に分けて解説。総額の目安と費用を抑えるポイントをまとめました。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-07-01",
  dateModified: "2026-07-01",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/cost/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "料金相場", item: "https://mu-su-bi-ba.com/knowledge/cost/" },
  ],
};

const relatedLinks = [
  { href: "/compare/", label: "結婚相談所の料金比較（13社一覧）で実際の料金を見比べる" },
  { href: "/review/musbell/", label: "ムスベルの料金・評判を見る（成婚料を含む総額の目安）" },
  { href: "/review/ringbell/", label: "リングベルの料金・評判を見る（仲人型・地域密着）" },
  { href: "/review/marriage-pro/", label: "マリッジプロの料金・評判を見る（成婚料の考え方の参考に）" },
  { href: "/knowledge/how-to-choose/", label: "結婚相談所の選び方｜タイプ別の違いを見る" },
  { href: "/knowledge/flow/", label: "入会から成婚までの流れ・活動期間の目安を見る" },
];

export default function KnowledgeCost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "料金相場" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          結婚相談所の料金相場は？初期費用・月会費・成婚料の目安【2026年】
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年7月</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#8B7355] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#8B7355] rounded-full" />結論：料金は「総額」で考えるのが基本
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span>結婚相談所の費用は<strong>初期費用＋月会費＋お見合い料＋成婚料</strong>の合計で決まります。月会費だけで比べないのがポイントです。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span>1年活動して成婚した場合の総額は、一般に<strong>おおよそ30万〜60万円程度</strong>が一つの目安とされます（タイプ・期間で変動）。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>オンライン型は費用を抑えやすく</strong>、仲人型・大手型はサポートが手厚い分だけ高くなる傾向があります。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span>各社の具体的な料金は<Link href="/compare/" className="text-[#8B7355] underline">料金比較ページ</Link>や個別レビューで確認できます。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本ページの金額は一般的な相場の目安です。実際の料金・内訳・時期は各社・プランにより異なるため、正確な金額は各<strong>公式サイトおよび無料相談</strong>でご確認ください。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">結婚相談所の料金は4つの費用でできている</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            結婚相談所の料金は、大きく分けて次の4種類の費用で構成されています。名称や内訳は相談所ごとに異なりますが、この枠組みで整理すると比較しやすくなります。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2] w-32">初期費用</td><td className="px-4 py-3">入会金・登録料・活動初期費用などの合計。数千円〜30万円程度と幅がある（目安）。</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">月会費</td><td className="px-4 py-3">活動している間、毎月かかる費用。おおむね月7,000〜20,000円前後（目安）。</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">お見合い料</td><td className="px-4 py-3">お見合い1回ごとにかかる費用。無料の相談所も多い（1回数千円程度の場合あり）。</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">成婚料</td><td className="px-4 py-3">成婚退会時に支払う費用。10万〜30万円程度（目安）。0円の相談所もある。</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">※上記の金額は一般的な相場の目安です。同じ名称でも含まれる内容が異なることがあるため、内訳を確認することが大切です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">費用項目ごとの相場の目安</h2>

          <h3 className="font-medium text-lg mb-2 text-[#8B7355] tracking-wider">初期費用の目安</h3>
          <p className="text-sm text-[#2C2C2C]/70 leading-relaxed mb-6">
            オンライン型では数千円〜数万円と手頃な傾向がありますが、仲人型・大手型では10万〜30万円程度になることもあります。初期費用にはプロフィール作成や写真撮影のサポートが含まれる場合もあり、金額だけでなく内容も確認しましょう。
          </p>

          <h3 className="font-medium text-lg mb-2 text-[#8B7355] tracking-wider">月会費の目安</h3>
          <p className="text-sm text-[#2C2C2C]/70 leading-relaxed mb-6">
            月会費はオンライン型で月7,000〜10,000円前後、仲人型・大手型で月15,000〜20,000円前後が一般的な目安です。専任カウンセラーによる手厚いサポートや紹介人数の多さは、月会費に反映されやすい部分です。
          </p>

          <h3 className="font-medium text-lg mb-2 text-[#8B7355] tracking-wider">成婚料の目安</h3>
          <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">
            成婚料は10万〜30万円程度が一般的な目安ですが、成婚料が0円の相談所もあります。成婚料は「成婚したときに支払う費用」であるため、活動費（初期費用・月会費）と分けて考えると総額を把握しやすくなります。成婚料を含む具体的な金額例は<Link href="/review/musbell/" className="text-[#8B7355] underline">ムスベルのレビュー</Link>や<Link href="/review/marriage-pro/" className="text-[#8B7355] underline">マリッジプロのレビュー</Link>で確認できます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">1年活動した場合の総額イメージ</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            料金は総額で比較するのが基本です。あくまで相場感をつかむための目安ですが、タイプ別に1年活動したときのイメージを整理しました。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">タイプ</th>
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">1年活動の総額の目安</th>
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">オンライン型</td><td className="px-4 py-3">おおよそ10万〜25万円程度</td><td className="px-4 py-3 text-xs">低価格で自分のペースで活動しやすい</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">仲人型・大手型</td><td className="px-4 py-3">おおよそ30万〜60万円程度</td><td className="px-4 py-3 text-xs">手厚いサポート。成婚料が加わる場合が多い</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">※上記は一般的な相場から算出したおおよその目安です。実際の総額は活動期間・お見合い料・成婚料の有無・プランにより大きく変わります。正確な総額は各社の無料相談での見積もりでご確認ください。各社の具体的な料金は<Link href="/compare/" className="text-[#8B7355] underline">料金比較ページ</Link>をご覧ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">費用を抑える・ムダにしないためのポイント</h2>
          <div className="space-y-3">
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-medium text-[#2C2C2C] mb-1">ポイント①：月会費ではなく総額で比較する</h3>
              <p className="text-sm text-[#2C2C2C]/70">月会費が安くても成婚料が高いと総額が上がることがあります。「初期費用＋月会費×想定活動月数＋お見合い料＋成婚料」で比べましょう。</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-medium text-[#2C2C2C] mb-1">ポイント②：活動期間を意識する</h3>
              <p className="text-sm text-[#2C2C2C]/70">月会費は活動が長引くほど積み上がります。サポートを活用して効率よく活動することが、結果的に費用を抑えることにつながります。<Link href="/knowledge/flow/" className="text-[#8B7355] underline">活動の流れと期間の目安</Link>もあわせて確認しましょう。</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-medium text-[#2C2C2C] mb-1">ポイント③：複数社の無料相談で見積もりを比べる</h3>
              <p className="text-sm text-[#2C2C2C]/70">同じ「仲人型」でも料金やサポート内容は相談所ごとに異なります。複数社の無料相談を受け、総額とサポートのバランスを比較すると納得して選べます。</p>
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">関連ページ・実際の料金をチェック</h2>
          <ul className="space-y-2 text-sm">
            {relatedLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className="text-[#8B7355] underline">{l.label}</Link></li>
            ))}
          </ul>
        </section>

        <section className="bg-[#333333] rounded-2xl p-10 text-white text-center mb-12">
          <h2 className="text-xl font-light mb-4 tracking-widest">料金を見比べて相談所を選ぶ</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">主要13社の月会費・初期費用・タイプを一覧で比較できます</p>
          <Link href="/compare/" className="inline-block bg-[#8B7355] hover:bg-[#7A6548] text-white font-normal py-3 px-8 rounded-full transition-colors tracking-widest">料金比較を見る</Link>
        </section>

        <AuthorBox />
      </article>
    </>
  );
}
