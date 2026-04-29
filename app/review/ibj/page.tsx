import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "IBJメンバーズの口コミ・評判｜会員数8.5万人のネットワークを徹底解説【2024年】",
  description:
    "IBJメンバーズの口コミ・評判を徹底調査。月会費17,050円〜、会員数8.5万人、少人数制サポート、成婚主義の特徴を詳しく解説します。",
};

const overview = {
  name: "IBJメンバーズ",
  type: "仲人型（少人数制サポート）",
  members: "約8.5万人（IBJネットワーク）",
  area: "東京・横浜・大阪・名古屋など都市部",
  initialFee: "181,500円〜",
  monthlyFee: "17,050円〜",
  matchingFee: "220,000円",
  age: "20〜40代（中心は30代前半）",
  successRate: "50.4%（主要コース・1年以内）",
};

const strengths = [
  {
    title: "IBJネットワークで8.5万人の出会い",
    desc: "日本最大級の結婚相談所ネットワークであるIBJの直営店として、約8.5万人の会員データベースにアクセス可能。豊富な選択肢の中からお相手を探せます。",
  },
  {
    title: "少人数制で手厚い個別サポート",
    desc: "カウンセラー1人あたりの担当会員数を限定し、一人ひとりにきめ細かいサポートを提供。プロフィール作成から交際フォローまで丁寧にサポートします。",
  },
  {
    title: "成婚主義の徹底した結果重視",
    desc: "「成婚」を最終目標に掲げ、カウンセラーの評価も成婚実績に連動。結果にコミットした運営で、高い成婚率を実現しています。",
  },
];

const pros = [
  "IBJネットワーク直営で8.5万人と出会える",
  "少人数制で一人ひとりに手厚いサポート",
  "成婚主義で結果にコミットした運営",
  "お見合い申し込み可能数が業界トップクラス",
];

const cons = [
  "初期費用18万円以上と高額",
  "成婚料22万円がかかる",
  "店舗が都市部に集中しており地方は不便",
];

const reviews = [
  {
    label: "30代女性・東京在住",
    stars: 5,
    date: "2024年9月",
    text: "IBJのネットワークは本当にすごいです。毎日たくさんの方のプロフィールを見ることができ、お見合いの申し込みもスムーズでした。カウンセラーの方が少人数制で担当してくれるので、相談しやすく心強かったです。料金は高めですが、8ヶ月で成婚できたので十分価値がありました。",
  },
  {
    label: "30代男性・横浜在住",
    stars: 4,
    date: "2024年7月",
    text: "会員数が多いので、自分の希望条件に合う方がたくさんいました。カウンセラーの方が交際中も細かくアドバイスしてくれて、自然にお付き合いを進められました。ただ、成婚料22万円は正直痛かったです。",
  },
  {
    label: "30代女性・大阪在住",
    stars: 4,
    date: "2024年5月",
    text: "少人数制のサポートが良かったです。カウンセラーの方が自分の性格や好みをしっかり理解してくれて、的確な方を紹介してもらえました。IBJのシステムも使いやすく、効率的に活動できました。",
  },
  {
    label: "40代男性・名古屋在住",
    stars: 3,
    date: "2024年3月",
    text: "会員数の多さは魅力ですが、その分競争も激しいと感じました。特に人気のある方にはなかなかお見合いを受けてもらえないこともありました。カウンセラーのサポートは良かったので、アドバイスを参考にプロフィールを改善していきました。",
  },
];

const faqs = [
  {
    q: "IBJメンバーズとIBJ加盟店の違いは何ですか？",
    a: "IBJメンバーズはIBJの直営店です。IBJ加盟店は独立した結婚相談所がIBJのネットワークに加盟しているものです。直営店はIBJの運営方針に沿った均一なサービスが受けられます。",
  },
  {
    q: "IBJメンバーズの料金は高くないですか？",
    a: "初期費用181,500円〜、月会費17,050円〜、成婚料220,000円と業界では高めの設定です。ただし、少人数制の手厚いサポートと8.5万人の会員ネットワークを考慮すると、費用対効果は高いと言えます。",
  },
  {
    q: "IBJメンバーズの成婚率はどのくらいですか？",
    a: "主要コースの1年以内の成婚率は50.4%と公表されています。業界内でも高い水準で、少人数制サポートと成婚主義の運営が実績につながっています。",
  },
  {
    q: "お見合い申し込みは何件までできますか？",
    a: "コースによって異なりますが、月間最大20〜40件のお見合い申し込みが可能です。IBJのシステムで気になる方に直接申し込みができます。",
  },
  {
    q: "IBJメンバーズの店舗はどこにありますか？",
    a: "東京（新宿・銀座など）、横浜、大阪、名古屋などの都市部に店舗があります。地方にお住まいの方はオンラインでの対応も可能です。",
  },
  {
    q: "IBJメンバーズは途中退会できますか？",
    a: "はい、途中退会は可能です。契約期間中の退会については、入会時に詳しい説明がありますので、事前に確認することをおすすめします。",
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
  { name: "ゼクシィ縁結びエージェント", path: "/review/zexy/" },
];

export default function IBJReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "IBJメンバーズ" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          IBJメンバーズの口コミ・評判｜会員数8.5万人のネットワークを徹底解説
        </h1>

        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mb-10">
          <div className="bg-[#0D9488] text-white px-6 py-3 font-bold">基本情報</div>
          <div className="divide-y">
            {Object.entries({
              サービス名: overview.name, タイプ: overview.type, 会員数: overview.members,
              対応エリア: overview.area, 初期費用: overview.initialFee, 月会費: overview.monthlyFee,
              成婚料: overview.matchingFee, 年齢層: overview.age, 成婚率: overview.successRate,
            }).map(([k, v]) => (
              <div key={k} className="flex px-6 py-3 text-sm">
                <span className="w-28 shrink-0 font-medium text-gray-600">{k}</span>
                <span className="text-gray-800">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-6 border-l-4 border-[#0D9488] pl-4">IBJメンバーズの強み・特徴</h2>
          <div className="space-y-6">
            {strengths.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-lg mb-2 text-[#0D9488]">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="font-bold text-green-800 mb-4">メリット</h3>
            <ul className="space-y-2">
              {pros.map((p) => (<li key={p} className="text-sm text-gray-700 flex gap-2"><span className="text-green-500 shrink-0">+</span>{p}</li>))}
            </ul>
          </div>
          <div className="bg-red-50 rounded-xl p-6">
            <h3 className="font-bold text-red-800 mb-4">デメリット</h3>
            <ul className="space-y-2">
              {cons.map((c) => (<li key={c} className="text-sm text-gray-700 flex gap-2"><span className="text-red-400 shrink-0">-</span>{c}</li>))}
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-6 border-l-4 border-[#0D9488] pl-4">口コミ・体験談</h2>
          <div className="space-y-4">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700">{r.label}</span>
                  <span className="text-xs text-gray-400">{r.date}</span>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <span key={si} className={`text-lg ${si < r.stars ? "text-amber-400" : "text-gray-200"}`}>&#9733;</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-6 border-l-4 border-[#0D9488] pl-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-xl border border-gray-200">
                <summary className="cursor-pointer px-6 py-4 font-medium text-gray-800 flex items-center justify-between">
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-[#0D9488] text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#134E4A] to-[#0D9488] rounded-2xl p-8 text-white text-center mb-10">
          <h2 className="text-xl font-bold mb-3">IBJメンバーズの無料相談を予約する</h2>
          <p className="text-white/70 text-sm mb-6">8.5万人のネットワークであなたの理想のお相手を探しましょう</p>
          <Link href="/" className="inline-block bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold py-3 px-8 rounded-full transition-colors">ランキングに戻る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">他の結婚相談所も見る</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link key={s.name} href={s.path} className="bg-white border border-gray-200 rounded-lg p-4 text-center text-sm font-medium hover:border-[#0D9488] hover:text-[#0D9488] transition-colors">{s.name}</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
