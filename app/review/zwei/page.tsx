import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "ツヴァイの口コミ・評判｜料金・会員数・サポートを徹底解説【2024年】",
  description:
    "ツヴァイの口コミ・評判を徹底調査。月会費15,400円〜、会員数9.4万人、全国50店舗展開の特徴を詳しく解説します。",
};

const overview = {
  name: "ツヴァイ",
  type: "ハイブリッド型（データマッチング＋仲人型）",
  members: "約9.4万人",
  area: "全国50店舗",
  initialFee: "115,500円〜",
  monthlyFee: "15,400円〜",
  matchingFee: "0円〜220,000円",
  age: "20〜60代（中心は30代）",
  successRate: "非公開",
};

const strengths = [
  {
    title: "業界最大級9.4万人の会員基盤",
    desc: "複数の結婚相談所ネットワークと連携しており、業界最大級の出会いの選択肢があります。地方在住の方でもお相手が見つかりやすいのが特徴です。",
  },
  {
    title: "全国50店舗の圧倒的なアクセス",
    desc: "北海道から沖縄まで全国50店舗を展開。対面でのカウンセリングを受けやすく、転勤や引っ越しがあっても継続して活動できます。",
  },
  {
    title: "データマッチングと仲人の両方で出会える",
    desc: "AIを活用したデータマッチングに加え、専任アドバイザーによる紹介もあり、自分に合ったスタイルで婚活を進められます。",
  },
];

const pros = [
  "会員数が業界最大級で出会いの幅が広い",
  "全国展開で地方でも利用しやすい",
  "データマッチングと仲人型の両方を併用可能",
  "無料相談で相性診断が受けられる",
];

const cons = [
  "初期費用が11万円以上とやや高め",
  "店舗によってアドバイザーの質に差がある",
  "成婚料が最大22万円かかるプランもある",
];

const reviews = [
  {
    label: "30代女性・東京在住",
    stars: 5,
    date: "2024年8月",
    text: "会員数が多いおかげで本当にたくさんの方のプロフィールを見ることができました。担当アドバイザーの方も親身に相談に乗ってくださり、入会から8ヶ月で素敵な方と出会えました。料金は決して安くはないですが、それだけの価値はあったと感じています。",
  },
  {
    label: "40代男性・大阪在住",
    stars: 4,
    date: "2024年6月",
    text: "地方出身で東京に転勤してきたのですが、全国に店舗があるので安心して入会できました。データマッチングで紹介される方は希望条件に合っていることが多く、効率的に活動できました。ただ、もう少しアドバイザーからの積極的な提案が欲しかったです。",
  },
  {
    label: "30代男性・名古屋在住",
    stars: 4,
    date: "2024年4月",
    text: "他の結婚相談所と比較検討した結果、会員数の多さが決め手でツヴァイに入会しました。実際にお見合いの申し込みをたくさんいただけて、活動開始2ヶ月目にはお見合いが成立。1年以内に成婚退会できました。",
  },
  {
    label: "30代女性・福岡在住",
    stars: 3,
    date: "2024年3月",
    text: "地方在住なので選択肢が少ないかと思いましたが、ネットワーク連携のおかげで思ったより多くの方と出会えました。ただ、対面サポートの頻度がもう少し多いと嬉しかったです。オンラインでの対応は可能でしたが、やはり直接会って相談したい場面もありました。",
  },
];

const faqs = [
  {
    q: "ツヴァイの入会条件はありますか？",
    a: "20歳以上の独身の方が入会可能です。男性は定職に就いていることが条件となります。入会時には独身証明書、収入証明書、本人確認書類が必要です。",
  },
  {
    q: "ツヴァイの会員ネットワークとは何ですか？",
    a: "ツヴァイの自社会員に加え、提携先の結婚相談所連盟に加盟する他社の会員とも出会えるシステムです。これにより約9.4万人の会員基盤にアクセスできます。",
  },
  {
    q: "ツヴァイの無料相談では何ができますか？",
    a: "無料相談では、婚活に関するカウンセリング、サービスの説明、料金プランの案内に加え、無料の相性診断を受けることができます。入会を強制されることはありません。",
  },
  {
    q: "ツヴァイの退会方法を教えてください",
    a: "担当アドバイザーに退会の意思を伝え、所定の手続きを行います。成婚退会の場合は成婚料が発生するプランもあります。中途退会の場合、違約金は基本的にかかりません。",
  },
  {
    q: "ツヴァイはオンラインでも活動できますか？",
    a: "はい、オンラインでのお見合いやカウンセリングに対応しています。来店が難しい方でもビデオ通話を通じて活動を進めることができます。",
  },
  {
    q: "ツヴァイの成婚退会までの平均期間はどのくらいですか？",
    a: "個人差がありますが、活動開始から6ヶ月〜1年程度で成婚退会される方が多い傾向です。積極的に活動される方は3〜4ヶ月で成婚に至るケースもあります。",
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
  { name: "オーネット", path: "/review/onet/" },
  { name: "パートナーエージェント", path: "/review/partner-agent/" },
  { name: "サンマリエ", path: "/review/sunmarie/" },
  { name: "エン婚活エージェント", path: "/review/en-konkatsu/" },
];

export default function ZweiReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "ツヴァイ" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          ツヴァイの口コミ・評判｜料金・会員数・サポートを徹底解説
        </h1>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <img src="/ss-zwei.jpg" alt="ツヴァイ 公式サイト" className="w-full h-auto" />
          <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: 公式サイトより</p>
        </div>

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
            ツヴァイの強み・特徴
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
                  <span className="text-green-500 shrink-0">+</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50/50 rounded-xl p-6">
            <h3 className="font-medium text-red-800 mb-4 tracking-wider">デメリット</h3>
            <ul className="space-y-2">
              {cons.map((c) => (
                <li key={c} className="text-sm text-[#2C2C2C]/70 flex gap-2">
                  <span className="text-red-400 shrink-0">-</span>
                  {c}
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
                    <span key={si} className={`text-lg ${si < r.stars ? "text-amber-400" : "text-gray-200"}`}>
                      &#9733;
                    </span>
                  ))}
                </div>
                <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            よくある質問
          </h2>
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
          <h2 className="text-xl font-light mb-4 tracking-widest">ツヴァイの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">まずは無料相談で相性診断を受けてみましょう</p>
          <Link
            href="/"
            className="inline-block bg-[#8B7355] hover:bg-[#7A6548] text-white font-normal py-3 px-8 rounded-full transition-colors tracking-widest"
          >
            ランキングに戻る
          </Link>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-lg font-light mb-4 tracking-widest">他の結婚相談所も見る</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link
                key={s.name}
                href={s.path}
                className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm font-normal hover:border-[#8B7355] hover:text-[#8B7355] transition-colors tracking-wider"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
