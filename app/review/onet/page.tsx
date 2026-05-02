import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "オーネットの口コミ・評判｜料金・会員数・40年の実績を徹底解説【2024年】",
  description:
    "オーネットの口コミ・評判を徹底調査。月会費16,500円〜、会員数4.2万人、データマッチング型、40年の運営実績の特徴を詳しく解説します。",
};

const overview = {
  name: "オーネット",
  type: "データマッチング型",
  members: "約4.2万人（自社会員のみ）",
  area: "全国40店舗以上",
  initialFee: "116,600円〜",
  monthlyFee: "16,500円〜",
  matchingFee: "0円",
  age: "20〜50代（中心は30代）",
  successRate: "非公開",
};

const strengths = [
  {
    title: "40年以上の運営実績による信頼性",
    desc: "1980年の創業以来、40年以上にわたり結婚相談所を運営してきた業界の老舗。長年のノウハウと実績に基づいたサービスを提供しています。",
  },
  {
    title: "独自のデータマッチングシステム",
    desc: "希望条件や価値観に基づいた独自のマッチングシステムで、効率的にお相手を探すことができます。毎月6名以上の紹介が受けられます。",
  },
  {
    title: "成婚料0円の明朗会計",
    desc: "成婚退会時の成婚料が0円なので、トータルコストが分かりやすいのが特徴。予算計画が立てやすく、安心して活動できます。",
  },
];

const pros = [
  "40年以上の運営実績で信頼性が高い",
  "データマッチングで効率的に相手を探せる",
  "成婚料0円で追加費用の心配がない",
  "自社会員のみなので真剣度が高い",
];

const cons = [
  "会員数が大手と比べると少なめ",
  "カウンセラーのサポートは手厚くない",
  "仲人型のきめ細かいフォローは期待しづらい",
];

const reviews = [
  {
    label: "30代女性・東京在住",
    stars: 4,
    date: "2024年7月",
    text: "データマッチングで毎月紹介が届くので、自分から探す手間が少なく助かりました。仕事が忙しい中でも婚活を続けられたのはオーネットのシステムのおかげです。成婚料がかからないのも大きなポイントでした。",
  },
  {
    label: "40代男性・横浜在住",
    stars: 4,
    date: "2024年5月",
    text: "老舗ならではの安心感があり、入会を決めました。マッチングの精度は高く、価値観の合う方と出会えました。ただ、もう少しカウンセラーからの積極的なアドバイスがあると良かったと思います。",
  },
  {
    label: "30代男性・札幌在住",
    stars: 3,
    date: "2024年4月",
    text: "会員数が大手に比べるとやや少ないため、地方では選択肢が限られる印象でした。ただ、その分真剣に結婚を考えている方が多く、質の高い出会いができたと感じています。",
  },
  {
    label: "30代女性・名古屋在住",
    stars: 5,
    date: "2024年2月",
    text: "コスト面を重視してオーネットを選びました。成婚料0円は本当にありがたかったです。入会から10ヶ月で成婚退会できました。データマッチングの精度も高く、効率的な婚活ができました。",
  },
];

const faqs = [
  {
    q: "オーネットの入会条件はありますか？",
    a: "20歳以上の独身の方が入会可能です。男性は定職に就いていることが条件です。入会時には独身証明書、収入証明書、本人確認書類などが必要です。",
  },
  {
    q: "オーネットのデータマッチングとは何ですか？",
    a: "希望条件（年齢、地域、年収、学歴など）や価値観をもとに、コンピューターが相性の良い相手を自動的にマッチングするシステムです。毎月6名以上の紹介が受けられます。",
  },
  {
    q: "オーネットは本当に成婚料0円ですか？",
    a: "はい、オーネットでは成婚退会時の成婚料は0円です。入会金と月会費のみで活動できるため、トータルコストが明確です。",
  },
  {
    q: "オーネットと他の大手結婚相談所の違いは？",
    a: "オーネットは自社会員のみのデータマッチング型です。他社は複数の相談所の会員ネットワークを共有するため会員数が多い場合がありますが、オーネットは自社で完結するためサービスの一貫性があります。",
  },
  {
    q: "オーネットの無料相談では何ができますか？",
    a: "無料相談では、結婚チャンステストを受けることができます。自分の条件に合うお相手がどのくらいいるかを事前に確認でき、サービスの説明や料金案内も受けられます。",
  },
  {
    q: "オーネットの活動はオンラインでもできますか？",
    a: "はい、オンラインでのお見合いやカウンセリングに対応しています。来店が難しい方でも自宅からビデオ通話で活動を進めることができます。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const relatedServices = [
  { name: "ツヴァイ", path: "/review/zwei/" },
  { name: "パートナーエージェント", path: "/review/partner-agent/" },
  { name: "サンマリエ", path: "/review/sunmarie/" },
  { name: "エン婚活エージェント", path: "/review/en-konkatsu/" },
];

export default function OnetReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "オーネット" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          オーネットの口コミ・評判｜料金・会員数・40年の実績を徹底解説
        </h1>

        {/* Overview table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="bg-[#8B7355] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
          <div className="divide-y divide-gray-50">
            {Object.entries({
              サービス名: overview.name,
              タイプ: overview.type,
              会員数: overview.members,
              対応エリア: overview.area,
              初期費用: overview.initialFee,
              月会費: overview.monthlyFee,
              成婚料: overview.matchingFee,
              年齢層: overview.age,
              成婚率: overview.successRate,
            }).map(([k, v]) => (
              <div key={k} className="flex px-6 py-3.5 text-sm">
                <span className="w-28 shrink-0 font-medium text-[#2C2C2C]/50 tracking-wider">{k}</span>
                <span className="text-[#2C2C2C]">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            オーネットの強み・特徴
          </h2>
          <div className="space-y-6">
            {strengths.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-medium text-lg mb-2 text-[#8B7355] tracking-wider">{s.title}</h3>
                <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pros / Cons */}
        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="bg-green-50/50 rounded-xl p-6">
            <h3 className="font-medium text-green-800 mb-4 tracking-wider">メリット</h3>
            <ul className="space-y-2">
              {pros.map((p) => (
                <li key={p} className="text-sm text-[#2C2C2C]/70 flex gap-2">
                  <span className="text-green-500 shrink-0">+</span>{p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50/50 rounded-xl p-6">
            <h3 className="font-medium text-red-800 mb-4 tracking-wider">デメリット</h3>
            <ul className="space-y-2">
              {cons.map((c) => (
                <li key={c} className="text-sm text-[#2C2C2C]/70 flex gap-2">
                  <span className="text-red-400 shrink-0">-</span>{c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Reviews */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            口コミ・体験談
          </h2>
          <div className="space-y-4">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-[#2C2C2C]/70">{r.label}</span>
                  <span className="text-xs text-[#2C2C2C]/40">{r.date}</span>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <span key={si} className={`text-lg ${si < r.stars ? "text-amber-400" : "text-gray-200"}`}>&#9733;</span>
                  ))}
                </div>
                <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-[#333333] rounded-2xl p-10 text-white text-center mb-12">
          <h2 className="text-xl font-light mb-4 tracking-widest">オーネットの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">まずは結婚チャンステストを受けてみましょう</p>
          <Link href="/" className="inline-block bg-[#8B7355] hover:bg-[#7A6548] text-white font-normal py-3 px-8 rounded-full transition-colors tracking-widest">
            ランキングに戻る
          </Link>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-lg font-light mb-4 tracking-widest">他の結婚相談所も見る</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link key={s.name} href={s.path} className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm font-normal hover:border-[#8B7355] hover:text-[#8B7355] transition-colors tracking-wider">
                {s.name}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
