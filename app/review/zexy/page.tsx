import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "ゼクシィ縁結びエージェントの口コミ・評判｜コスパ最強の理由を徹底解説【2024年】",
  description:
    "ゼクシィ縁結びエージェントの口コミ・評判を徹底調査。月会費9,900円〜、リクルート運営、オンライン対応の特徴を詳しく解説します。",
};

const overview = {
  name: "ゼクシィ縁結びエージェント",
  type: "ハイブリッド型（オンライン＋対面）",
  members: "約3.2万人（コネクトシップ含む）",
  area: "全国主要都市（約25店舗）",
  initialFee: "33,000円",
  monthlyFee: "9,900円〜",
  matchingFee: "0円",
  age: "20〜40代（中心は20代後半〜30代）",
  successRate: "非公開",
};

const strengths = [
  {
    title: "業界最安クラスの料金設定",
    desc: "入会金33,000円、月会費9,900円〜、成婚料0円という破格の料金設定。初期費用を抑えて婚活を始めたい方に最適です。トータルコストも業界最安水準です。",
  },
  {
    title: "リクルートグループ運営の安心感",
    desc: "「ゼクシィ」ブランドでおなじみのリクルートグループが運営。大手企業ならではの信頼性とサービス品質が期待できます。",
  },
  {
    title: "オンラインでも店舗でも活動可能",
    desc: "対面でのカウンセリングに加え、オンラインでのお見合いやビデオ通話でのサポートに対応。忙しい方でも場所を選ばず活動できます。",
  },
];

const pros = [
  "月会費9,900円〜で業界最安クラス",
  "成婚料0円でトータルコストが明確",
  "リクルートグループ運営で信頼性が高い",
  "オンラインでも柔軟に活動できる",
];

const cons = [
  "会員数は大手と比べると少なめ",
  "サポートの手厚さはやや控えめ",
  "地方の店舗数が限られている",
];

const reviews = [
  {
    label: "20代女性・東京在住",
    stars: 5,
    date: "2024年8月",
    text: "婚活を始めたいけど費用が心配で迷っていたところ、ゼクシィ縁結びエージェントの料金を見て即決しました。月1万円以下で結婚相談所に入会できるのは本当にありがたいです。カウンセラーの方も親切で、6ヶ月で素敵な方と出会えました。",
  },
  {
    label: "30代男性・大阪在住",
    stars: 4,
    date: "2024年6月",
    text: "リクルート運営という安心感が決め手でした。オンラインでお見合いができるので、仕事が忙しい中でも効率的に活動できました。料金が安い分、自分から積極的に動く必要はありますが、コスパは最高だと思います。",
  },
  {
    label: "30代女性・名古屋在住",
    stars: 4,
    date: "2024年4月",
    text: "入会金33,000円と月会費9,900円だけで活動できるのは本当に魅力的です。成婚料もかからないので、トータルコストがかなり抑えられました。ただ、大手と比べるとカウンセラーからの積極的な提案はやや少ないかもしれません。",
  },
  {
    label: "20代男性・福岡在住",
    stars: 3,
    date: "2024年2月",
    text: "コスパ重視で選びましたが、会員数がもう少し多いと嬉しかったです。ただ、コネクトシップで他社会員とも出会えるのはプラスでした。料金の安さを考えれば十分なサービスだと思います。",
  },
];

const faqs = [
  {
    q: "ゼクシィ縁結びエージェントの料金は本当に安いですか？",
    a: "はい、入会金33,000円、月会費9,900円〜（シンプルプラン）、成婚料0円です。一般的な結婚相談所と比べてかなりリーズナブルな料金設定となっています。",
  },
  {
    q: "ゼクシィ縁結びエージェントと婚活アプリの違いは？",
    a: "結婚相談所として独身証明書の提出が必須で、専任コーディネーターによるサポートがあります。婚活アプリと比べて真剣度の高い出会いが期待できます。",
  },
  {
    q: "オンラインだけで活動できますか？",
    a: "はい、オンラインでのお見合いやカウンセリングに対応しているため、来店せずに活動することも可能です。もちろん対面でのサポートも受けられます。",
  },
  {
    q: "ゼクシィ縁結びエージェントの会員層は？",
    a: "20代後半〜30代が中心で、比較的若い会員層が特徴です。リクルート運営のブランド力もあり、大卒以上の方が多い傾向です。",
  },
  {
    q: "コネクトシップとは何ですか？",
    a: "複数の結婚相談所が会員を共有するプラットフォームです。ゼクシィ縁結びエージェントの自社会員以外にも、他社の会員と出会えるチャンスがあります。",
  },
  {
    q: "ゼクシィ縁結びエージェントは途中退会できますか？",
    a: "はい、途中退会は可能です。月額制なので、退会したい月の所定期日までに手続きを行えば翌月から退会となります。違約金は基本的にかかりません。",
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
  { name: "オーネット", path: "/review/onet/" },
  { name: "パートナーエージェント", path: "/review/partner-agent/" },
  { name: "IBJメンバーズ", path: "/review/ibj/" },
];

export default function ZexyReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "ゼクシィ縁結びエージェント" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          ゼクシィ縁結びエージェントの口コミ・評判｜コスパ最強の理由を徹底解説
        </h1>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="bg-[#8B7355] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
          <div className="divide-y divide-gray-50">
            {Object.entries({
              サービス名: overview.name, タイプ: overview.type, 会員数: overview.members,
              対応エリア: overview.area, 初期費用: overview.initialFee, 月会費: overview.monthlyFee,
              成婚料: overview.matchingFee, 年齢層: overview.age, 成婚率: overview.successRate,
            }).map(([k, v]) => (
              <div key={k} className="flex px-6 py-3.5 text-sm">
                <span className="w-28 shrink-0 font-medium text-[#2C2C2C]/50 tracking-wider">{k}</span>
                <span className="text-[#2C2C2C]">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">ゼクシィ縁結びエージェントの強み・特徴</h2>
          <div className="space-y-6">
            {strengths.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-medium text-lg mb-2 text-[#8B7355] tracking-wider">{s.title}</h3>
                <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="bg-green-50/50 rounded-xl p-6">
            <h3 className="font-medium text-green-800 mb-4 tracking-wider">メリット</h3>
            <ul className="space-y-2">
              {pros.map((p) => (<li key={p} className="text-sm text-[#2C2C2C]/70 flex gap-2"><span className="text-green-500 shrink-0">+</span>{p}</li>))}
            </ul>
          </div>
          <div className="bg-red-50/50 rounded-xl p-6">
            <h3 className="font-medium text-red-800 mb-4 tracking-wider">デメリット</h3>
            <ul className="space-y-2">
              {cons.map((c) => (<li key={c} className="text-sm text-[#2C2C2C]/70 flex gap-2"><span className="text-red-400 shrink-0">-</span>{c}</li>))}
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">口コミ・体験談</h2>
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

        <section className="bg-[#333333] rounded-2xl p-10 text-white text-center mb-12">
          <h2 className="text-xl font-light mb-4 tracking-widest">ゼクシィ縁結びエージェントの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">月会費9,900円〜のコスパ最強婚活を始めましょう</p>
          <Link href="/" className="inline-block bg-[#8B7355] hover:bg-[#7A6548] text-white font-normal py-3 px-8 rounded-full transition-colors tracking-widest">ランキングに戻る</Link>
        </section>

        <section>
          <h2 className="text-lg font-light mb-4 tracking-widest">他の結婚相談所も見る</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link key={s.name} href={s.path} className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm font-normal hover:border-[#8B7355] hover:text-[#8B7355] transition-colors tracking-wider">{s.name}</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
