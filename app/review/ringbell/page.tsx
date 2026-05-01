import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "リングベルの口コミ・評判｜料金・特徴・サポートを徹底解説【2024年】",
  description:
    "リングベルの口コミ・評判を徹底調査。仲人型・地域密着・丁寧なサポートが特徴のリングベルの料金体系やサービス内容を詳しく解説します。",
};

const overview = {
  name: "リングベル",
  type: "仲人型（地域密着）",
  members: "非公開",
  area: "関東・関西を中心に展開",
  initialFee: "88,000円〜",
  monthlyFee: "13,200円〜",
  matchingFee: "220,000円",
  age: "20〜50代（中心は30代〜40代）",
  successRate: "非公開",
};

const strengths = [
  {
    title: "仲人による手厚い1対1サポート",
    desc: "専任の仲人が入会から成婚まで一貫してサポートします。お相手の紹介だけでなく、デートのアドバイスや交際中のフォローなど、きめ細かい支援が受けられるのが最大の特徴です。",
  },
  {
    title: "地域密着で地元の出会いに強い",
    desc: "地域に根ざした運営を行っており、地元での出会いを重視する方に最適です。地域のネットワークを活かした紹介が可能で、生活圏が近いお相手と出会いやすい環境が整っています。",
  },
  {
    title: "会員一人ひとりに合わせた丁寧なカウンセリング",
    desc: "大手のように画一的なマッチングではなく、仲人が会員の人柄や価値観を深く理解した上で紹介を行います。数よりも質を重視した出会いを提供しています。",
  },
];

const pros = [
  "専任仲人による手厚い個別サポート",
  "地域密着で地元の出会いに強い",
  "質を重視した丁寧な紹介スタイル",
];

const cons = [
  "会員数が大手と比べると少ない",
  "展開エリアが限定的",
  "成婚料が22万円とやや高め",
];

const reviews = [
  {
    label: "30代男性・埼玉在住",
    stars: 5,
    date: "2024年7月",
    text: "大手の結婚相談所ではなかなかうまくいかず、仲人型のリングベルに切り替えました。担当の仲人さんが本当に親身になってくれて、自分では気づかなかった魅力を引き出してくれました。紹介される方の質が高く、入会から10ヶ月で成婚退会できました。",
  },
  {
    label: "40代男性・千葉在住",
    stars: 4,
    date: "2024年5月",
    text: "地元で結婚相手を探したかったので、地域密着型のリングベルを選びました。仲人さんが地域の事情をよく理解していて、生活圏が近い方を紹介してくれました。紹介人数は多くありませんが、一人ひとりが真剣に結婚を考えている方ばかりで安心できました。",
  },
  {
    label: "30代男性・横浜在住",
    stars: 4,
    date: "2024年3月",
    text: "仲人さんの人柄が良く、毎回のカウンセリングが心強かったです。大手と比べると紹介される人数は少ないですが、マッチングの精度は高いと感じました。成婚料は高めですが、それだけのサポートを受けられたので納得しています。",
  },
];

const faqs = [
  {
    q: "リングベルの入会条件はありますか？",
    a: "20歳以上の独身の方が入会可能です。男性は安定した収入があることが条件です。入会時には独身証明書、収入証明書、本人確認書類が必要です。",
  },
  {
    q: "リングベルの仲人型とはどのようなサービスですか？",
    a: "専任の仲人が会員一人ひとりの人柄や希望条件を深く理解し、相性の良いお相手を紹介するスタイルです。データマッチングとは異なり、人の目で判断した質の高い紹介が特徴です。",
  },
  {
    q: "リングベルの無料相談では何ができますか？",
    a: "無料相談では、仲人との面談、サービス内容の説明、料金プランの案内、婚活に関するアドバイスが受けられます。入会を強制されることはありません。",
  },
  {
    q: "リングベルの退会方法を教えてください",
    a: "担当仲人に退会の意思を伝え、所定の手続きを行います。成婚退会の場合は成婚料220,000円が発生します。中途退会の場合、契約内容に応じた精算が行われます。",
  },
  {
    q: "リングベルはオンラインでも活動できますか？",
    a: "基本的には対面でのカウンセリング・紹介が中心ですが、遠方の方向けにオンラインカウンセリングにも対応しています。お見合いは対面が推奨されています。",
  },
  {
    q: "リングベルの成婚退会までの平均期間はどのくらいですか？",
    a: "個人差がありますが、活動開始から6ヶ月〜1年半程度で成婚退会される方が多い傾向です。仲人が丁寧にサポートするため、じっくり活動される方にも向いています。",
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
  { name: "サンマリエ", path: "/review/sunmarie/" },
  { name: "パートナーエージェント", path: "/review/partner-agent/" },
  { name: "マリッジプロ", path: "/review/marriage-pro/" },
  { name: "ムスベル", path: "/review/musbell/" },
];

export default function RingbellReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "リングベル" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          リングベルの口コミ・評判｜料金・特徴・サポートを徹底解説
        </h1>

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

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">リングベルの強み・特徴</h2>
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
          <h2 className="text-xl font-light mb-4 tracking-widest">リングベルの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">まずは仲人との無料面談で婚活の第一歩を踏み出しましょう</p>
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
