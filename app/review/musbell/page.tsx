import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "ムスベルの口コミ・評判｜料金・特徴・サポートを徹底解説【2024年】",
  description:
    "ムスベルの口コミ・評判を徹底調査。全国対応・仲人型+データ型ハイブリッド・月会費15,400円〜が特徴のムスベルの料金やサポート体制を詳しく解説します。",
};

const overview = {
  name: "ムスベル",
  type: "ハイブリッド型（仲人＋データマッチング）",
  members: "約16万人（複数連盟加盟）",
  area: "全国対応（約40拠点）",
  initialFee: "33,000円〜",
  monthlyFee: "15,400円〜",
  matchingFee: "330,000円",
  age: "20〜60代（中心は30代〜40代）",
  successRate: "非公開",
};

const strengths = [
  {
    title: "複数連盟加盟で約16万人の業界最大級の会員基盤",
    desc: "BIU、良縁ネットなど複数の結婚相談所連盟に加盟しており、業界最大級の会員基盤にアクセスできます。圧倒的な出会いの選択肢が最大の強みです。",
  },
  {
    title: "仲人型とデータマッチングのハイブリッド対応",
    desc: "専任の仲人によるきめ細かい紹介に加え、データマッチングも併用できるハイブリッド型です。自分に合ったスタイルで婚活を進められ、出会いの質と量を両立しています。",
  },
  {
    title: "全国約40拠点で地方でも安心して活動可能",
    desc: "全国約40拠点を展開しており、地方在住の方でも対面でのカウンセリングが受けられます。転勤や引っ越しがあっても最寄りの拠点でサポートを継続できます。",
  },
];

const pros = [
  "約16万人の業界最大級の会員基盤",
  "仲人型+データマッチングの両方が使える",
  "全国約40拠点で地方でも利用可能",
];

const cons = [
  "成婚料33万円と業界でも高め",
  "プランによっては初期費用が高額になる",
  "カウンセラーの質に拠点差がある場合がある",
];

const reviews = [
  {
    label: "30代男性・名古屋在住",
    stars: 5,
    date: "2024年8月",
    text: "会員数16万人は圧倒的です。複数の連盟に加盟しているので、他の結婚相談所では出会えなかった方とお見合いできました。仲人さんも親身にサポートしてくれて、入会から7ヶ月で成婚退会できました。成婚料は高めですが、これだけの出会いがあれば納得です。",
  },
  {
    label: "40代男性・仙台在住",
    stars: 4,
    date: "2024年5月",
    text: "地方在住で出会いが少なかったのですが、ムスベルは全国展開で会員数も多いため、地方でもしっかり活動できました。仲人さんが地域の事情も理解してくれて、現実的なマッチングを提案してくれたのが良かったです。",
  },
  {
    label: "30代男性・東京在住",
    stars: 4,
    date: "2024年3月",
    text: "複数の連盟に加盟しているので、出会いの幅が広いのが魅力でした。データマッチングで自分でも探せるし、仲人さんからの紹介もあるので、二重のルートで相手を探せます。ただ、成婚料が33万円と高いので、覚悟は必要です。",
  },
];

const faqs = [
  {
    q: "ムスベルの入会条件はありますか？",
    a: "20歳以上の独身の方が入会可能です。男性は安定した収入があることが条件です。入会時には独身証明書、収入証明書、本人確認書類、卒業証明書が必要です。",
  },
  {
    q: "ムスベルが加盟している連盟はどこですか？",
    a: "BIU（日本ブライダル連盟）、良縁ネットなど複数の連盟に加盟しています。これにより大規模な会員基盤にアクセスできます。",
  },
  {
    q: "ムスベルの無料相談では何ができますか？",
    a: "無料相談では、専任カウンセラーとの面談、サービスの詳細説明、料金プランの案内、婚活に関するアドバイスが受けられます。入会を強制されることはありません。",
  },
  {
    q: "ムスベルの退会方法を教えてください",
    a: "担当カウンセラーに退会の意思を伝え、所定の手続きを行います。成婚退会の場合は成婚料330,000円が発生します。中途退会の場合、契約内容に応じた精算が行われます。",
  },
  {
    q: "ムスベルはオンラインでも活動できますか？",
    a: "はい、オンラインでのカウンセリングやお見合いに対応しています。全国どこからでも活動を進められますが、初回面談は来店が推奨されています。",
  },
  {
    q: "ムスベルの成婚退会までの平均期間はどのくらいですか？",
    a: "個人差がありますが、活動開始から6ヶ月〜1年程度で成婚退会される方が多い傾向です。会員数が多いため、出会いのチャンスも豊富で比較的スムーズに進む方が多いです。",
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
  { name: "フィオーレ", path: "/review/fiore/" },
  { name: "サンマリエ", path: "/review/sunmarie/" },
  { name: "リングベル", path: "/review/ringbell/" },
];

export default function MusbellReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "ムスベル" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          ムスベルの口コミ・評判｜料金・特徴・サポートを徹底解説
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">ムスベルの強み・特徴</h2>
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
          <h2 className="text-xl font-light mb-4 tracking-widest">ムスベルの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">業界最大級の会員基盤を持つムスベルの無料カウンセリングを体験しましょう</p>
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
