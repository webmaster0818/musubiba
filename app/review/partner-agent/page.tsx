import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "パートナーエージェントの口コミ・評判｜成婚率27%の秘密を徹底解説【2024年】",
  description:
    "パートナーエージェントの口コミ・評判を徹底調査。月会費18,700円〜、成婚率27%、専任コンシェルジュ制度の特徴を詳しく解説します。",
};

const overview = {
  name: "パートナーエージェント",
  type: "仲人型（専任コンシェルジュ制）",
  members: "約2.9万人（CONNECT-ship含む）",
  area: "全国主要都市（約30店舗）",
  initialFee: "137,500円〜",
  monthlyFee: "18,700円〜",
  matchingFee: "55,000円",
  age: "20〜50代（中心は30代）",
  successRate: "27%（業界トップクラス）",
};

const strengths = [
  {
    title: "業界トップクラスの成婚率27%",
    desc: "独自の成婚メソッドと専任コンシェルジュによる手厚いサポートにより、業界トップクラスの成婚率27%を実現。結果にこだわった運営が特徴です。",
  },
  {
    title: "専任コンシェルジュによる徹底サポート",
    desc: "一人ひとりに専任のコンシェルジュがつき、プロフィール作成からお見合いのアドバイス、交際中のフォローまで一貫してサポートします。",
  },
  {
    title: "PDCAサイクルで婚活を最適化",
    desc: "定期的な面談で活動を振り返り、改善点を見つけながら婚活を進めるPDCAサイクルを導入。計画的に成婚を目指せます。",
  },
];

const pros = [
  "成婚率27%で業界トップクラスの実績",
  "専任コンシェルジュが手厚くサポート",
  "PDCAサイクルで計画的に婚活できる",
  "1年以内の成婚を目指す明確なプラン",
];

const cons = [
  "月会費18,700円〜と他社より高め",
  "会員数は大手と比べると少なめ",
  "店舗が主要都市に限られる",
];

const reviews = [
  {
    label: "30代女性・東京在住",
    stars: 5,
    date: "2024年8月",
    text: "コンシェルジュの方が本当に親身になってくれました。デートの服装からお見合いでの話題まで細かくアドバイスをいただき、自信を持って婚活に取り組めました。入会から7ヶ月で素敵な方と出会い、成婚退会できました。",
  },
  {
    label: "30代男性・大阪在住",
    stars: 4,
    date: "2024年6月",
    text: "他社と比べて料金は高めですが、コンシェルジュのサポートの質は圧倒的に良かったです。毎月の面談で自分の課題を客観的に分析してもらえたのが大きかったです。PDCAを回すことで効率的に活動できました。",
  },
  {
    label: "40代女性・名古屋在住",
    stars: 4,
    date: "2024年4月",
    text: "40代での婚活に不安がありましたが、コンシェルジュの方が年齢に合った戦略を一緒に考えてくれました。会員数は多くないですが、紹介の精度が高く、お見合いの成立率が良かったです。",
  },
  {
    label: "30代男性・福岡在住",
    stars: 3,
    date: "2024年2月",
    text: "サポートの質は非常に高いですが、地方だと会員数が限られるのが少し残念でした。CONNECT-shipで他社の会員とも出会えますが、やはり都市部の方が選択肢は多いと思います。",
  },
];

const faqs = [
  {
    q: "パートナーエージェントの成婚率27%は本当ですか？",
    a: "はい、パートナーエージェントが公表している成婚率です。年間で入会した会員のうち、1年以内に成婚退会した割合として算出されています。ただし、成婚率の定義は各社で異なるため、他社との単純比較には注意が必要です。",
  },
  {
    q: "専任コンシェルジュはどんなサポートをしてくれますか？",
    a: "プロフィール作成のアドバイス、お相手の紹介、お見合いの日程調整、交際中のフォロー、プロポーズのサポートまで、婚活のあらゆる場面でサポートしてくれます。定期的な面談もあります。",
  },
  {
    q: "CONNECT-shipとは何ですか？",
    a: "パートナーエージェントを含む複数の結婚相談所が連携し、会員同士がお見合いできるプラットフォームです。これにより、自社会員以外とも出会いの機会があります。",
  },
  {
    q: "パートナーエージェントの料金プランを教えてください",
    a: "主なプランは初期費用137,500円〜、月会費18,700円〜、成婚料55,000円です。コースによって料金が異なるため、無料相談で詳しく確認することをおすすめします。",
  },
  {
    q: "パートナーエージェントは途中退会できますか？",
    a: "はい、途中退会は可能です。活動期間や契約内容によって手続きが異なるため、入会前に退会条件を確認しておくことをおすすめします。",
  },
  {
    q: "パートナーエージェントの対応エリアは？",
    a: "東京、横浜、大阪、名古屋、福岡など全国の主要都市に約30店舗を展開しています。オンラインでのカウンセリングにも対応しています。",
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
  { name: "サンマリエ", path: "/review/sunmarie/" },
  { name: "エン婚活エージェント", path: "/review/en-konkatsu/" },
];

export default function PartnerAgentReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "パートナーエージェント" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          パートナーエージェントの口コミ・評判｜成婚率27%の秘密を徹底解説
        </h1>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <img src="/ss-partner-agent.jpg" alt="パートナーエージェント 公式サイト" className="w-full h-auto" />
          <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: 公式サイトより</p>
        </div>

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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">パートナーエージェントの強み・特徴</h2>
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
              {pros.map((p) => (
                <li key={p} className="text-sm text-[#2C2C2C]/70 flex gap-2"><span className="text-green-500 shrink-0">+</span>{p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50/50 rounded-xl p-6">
            <h3 className="font-medium text-red-800 mb-4 tracking-wider">デメリット</h3>
            <ul className="space-y-2">
              {cons.map((c) => (
                <li key={c} className="text-sm text-[#2C2C2C]/70 flex gap-2"><span className="text-red-400 shrink-0">-</span>{c}</li>
              ))}
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
          <h2 className="text-xl font-light mb-4 tracking-widest">パートナーエージェントの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">成婚率No.1のサポートを体験してみましょう</p>
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
