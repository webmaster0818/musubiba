import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "結婚相談所の入会から成婚までの流れ・活動期間の目安【2026年】",
  description:
    "結婚相談所の入会から成婚退会までの流れを、無料相談・入会・お見合い・仮交際・真剣交際・成婚のステップごとに解説。活動期間の一般的な目安や、スムーズに進めるためのコツもわかりやすくまとめました。各社の詳細は個別レビューでご確認いただけます。",
  alternates: { canonical: "/knowledge/flow/" },
};

const faqs = [
  {
    q: "入会から成婚までどのくらいかかりますか？",
    a: "個人差が大きいですが、一般的には活動開始からおおよそ6ヶ月〜1年程度で成婚退会される方が多いとされます。早い方では数ヶ月、じっくり活動される方は1年以上かかることもあります。会員層や活動の積極性、相性によって変わります。",
  },
  {
    q: "お見合いから交際までどう進みますか？",
    a: "一般的には、お見合いで両者が「もっと知りたい」と合意すると仮交際に進みます。複数人と同時に仮交際できる相談所が多く、その後お互いに一人に絞って真剣交際へ進み、結婚の意思が固まると成婚退会となります。呼び方や進め方は相談所により異なります。",
  },
  {
    q: "仮交際と真剣交際の違いは何ですか？",
    a: "仮交際は複数の相手と並行してお付き合いを進める段階、真剣交際はお互いに一人に絞って結婚を前提に交際を深める段階を指すのが一般的です。真剣交際に入ると原則として他の相手との交際は終了します。",
  },
  {
    q: "活動をスムーズに進めるコツはありますか？",
    a: "プロフィールを丁寧に整える、お見合いの申し込み・受諾を積極的に行う、担当カウンセラーに悩みを相談する、フィードバックを次に活かすことなどが挙げられます。活動期間が長引くと費用も積み上がるため、早めに動くことも一つのポイントです。",
  },
  {
    q: "成婚退会とはどういう状態を指しますか？",
    a: "多くの相談所では、お互いに結婚の意思が固まった段階を「成婚」とし、退会手続きを行います。ただし成婚の定義（婚約・交際成立など）は相談所ごとに異なる場合があるため、入会前に確認しておくと安心です。",
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
  headline: "結婚相談所の入会から成婚までの流れ・活動期間の目安【2026年】",
  description:
    "結婚相談所の入会から成婚退会までの流れをステップごとに解説。活動期間の一般的な目安とスムーズに進めるコツをまとめました。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-07-01",
  dateModified: "2026-07-01",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/flow/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "入会から成婚までの流れ", item: "https://mu-su-bi-ba.com/knowledge/flow/" },
  ],
};

const steps = [
  { n: 1, t: "無料相談・カウンセリング", d: "サービス内容や料金の説明を受け、婚活の希望をヒアリングしてもらいます。入会を強制されることはなく、相性や雰囲気を確認する場です。複数社を比較検討するのがおすすめです。" },
  { n: 2, t: "入会・書類提出・プロフィール作成", d: "独身証明書・本人確認書類などの必要書類を提出し、プロフィールを作成します。写真やプロフィールの充実度は出会いの数に影響しやすい重要な準備です。" },
  { n: 3, t: "お相手探し・お見合いの申し込み", d: "紹介やデータ検索でお相手を探し、お見合いを申し込みます。仲人型ではカウンセラーからの紹介、データマッチング型では自分で検索して申し込むのが中心です。" },
  { n: 4, t: "お見合い", d: "実際に会って会話し、お互いの印象を確かめます。両者が「もっと知りたい」と合意すると次の交際段階へ進みます。" },
  { n: 5, t: "仮交際", d: "複数の相手と並行してお付き合いを進める段階です。デートを重ねながら相性を見極めます。カウンセラーに相談しながら進められます。" },
  { n: 6, t: "真剣交際", d: "お互いに一人に絞り、結婚を前提に交際を深めます。原則として他の相手との交際は終了します。" },
  { n: 7, t: "成婚退会", d: "結婚の意思が固まった段階で成婚退会となります。成婚料が発生する相談所ではこのタイミングで支払います。成婚の定義は相談所ごとに異なる場合があります。" },
];

const relatedLinks = [
  { href: "/compare/", label: "結婚相談所の料金比較（13社一覧）でサポート内容を見比べる" },
  { href: "/review/musbell/", label: "ムスベルの評判・料金を見る（活動サポートの特徴）" },
  { href: "/review/ringbell/", label: "リングベルの評判・料金を見る（仲人型・地域密着）" },
  { href: "/review/marriage-pro/", label: "マリッジプロの評判・料金を見る（プロカウンセラー専任）" },
  { href: "/knowledge/cost/", label: "結婚相談所の料金相場・総額の目安を見る" },
  { href: "/knowledge/how-to-choose/", label: "結婚相談所の選び方｜タイプ別の違いを見る" },
];

export default function KnowledgeFlow() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "入会から成婚までの流れ" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          結婚相談所の入会から成婚までの流れ・活動期間の目安
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年7月</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#8B7355] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#8B7355] rounded-full" />結論：流れを知れば婚活の見通しが立つ
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span>一般的な流れは<strong>無料相談 → 入会 → お相手探し → お見合い → 仮交際 → 真剣交際 → 成婚退会</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span>入会から成婚までの活動期間は<strong>おおよそ6ヶ月〜1年程度</strong>が一つの目安（個人差が大きい）。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span>活動が長引くと<strong>月会費が積み上がる</strong>ため、流れを理解して早めに動くことが費用面でも有利です。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span>各社のサポート内容は<Link href="/compare/" className="text-[#8B7355] underline">料金比較</Link>や個別レビューで確認できます。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※流れの呼び方・成婚の定義・期間は相談所により異なります。詳細は各公式サイトおよび無料相談でご確認ください。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">入会から成婚までの7ステップ</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.n} className="bg-white rounded-xl border border-gray-100 p-5 flex gap-4">
                <span className="bg-[#8B7355] text-white font-medium w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0">{s.n}</span>
                <div>
                  <h3 className="font-medium text-[#8B7355] tracking-wider mb-1">{s.t}</h3>
                  <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">活動期間の目安</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            入会から成婚退会までの活動期間は個人差が大きいものの、一般的にはおおよそ6ヶ月〜1年程度で成婚される方が多いとされます。会員層との相性、活動の積極性、希望条件の広さなどによって前後します。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2] w-40">短めのケース</td><td className="px-4 py-3">数ヶ月程度で成婚に至る場合もある</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">一般的な目安</td><td className="px-4 py-3">おおよそ6ヶ月〜1年程度</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">じっくり活動するケース</td><td className="px-4 py-3">1年以上かかることもある</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">※上記は一般的な目安で、成婚を保証するものではありません。月会費は活動期間に比例して積み上がるため、<Link href="/knowledge/cost/" className="text-[#8B7355] underline">料金相場の記事</Link>とあわせて総額を把握しておくと安心です。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">活動をスムーズに進めるためのコツ</h2>
          <div className="space-y-3">
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-medium text-[#2C2C2C] mb-1">プロフィール・写真を丁寧に整える</h3>
              <p className="text-sm text-[#2C2C2C]/70">最初の印象を左右する重要な準備です。カウンセラーのアドバイスを受けながら充実させると、お見合いの成立につながりやすくなります。</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-medium text-[#2C2C2C] mb-1">お見合いの申し込み・受諾を積極的に行う</h3>
              <p className="text-sm text-[#2C2C2C]/70">出会いの数は活動量に比例しやすい部分です。条件を広げすぎず狭めすぎず、バランスよく行動することが大切です。</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-medium text-[#2C2C2C] mb-1">カウンセラーに相談し、フィードバックを活かす</h3>
              <p className="text-sm text-[#2C2C2C]/70">うまくいかないときこそ、担当者に相談して次に活かすことが成婚への近道です。サポートの手厚さは相談所選びの重要な観点でもあります（<Link href="/knowledge/how-to-choose/" className="text-[#8B7355] underline">選び方の記事</Link>を参照）。</p>
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">関連ページ・サポート内容を見比べる</h2>
          <ul className="space-y-2 text-sm">
            {relatedLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className="text-[#8B7355] underline">{l.label}</Link></li>
            ))}
          </ul>
        </section>

        <section className="bg-[#333333] rounded-2xl p-10 text-white text-center mb-12">
          <h2 className="text-xl font-light mb-4 tracking-widest">サポート内容で相談所を選ぶ</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">主要13社のサポート・料金・タイプを一覧で比較できます</p>
          <Link href="/compare/" className="inline-block bg-[#8B7355] hover:bg-[#7A6548] text-white font-normal py-3 px-8 rounded-full transition-colors tracking-widest">料金比較を見る</Link>
        </section>

        <AuthorBox />
      </article>
    </>
  );
}
