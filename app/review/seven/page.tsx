import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "結婚相談所セブンの口コミ・評判｜料金・特徴・サポートを徹底解説【2024年】",
  description:
    "結婚相談所セブンの口コミ・評判を徹底調査。低価格×高品質・成果報酬型が特徴のセブンの料金体系やサポート内容を詳しく解説します。",
};

const overview = {
  name: "結婚相談所セブン",
  type: "成果報酬型",
  members: "非公開（連盟加盟店）",
  area: "東京を中心に展開",
  initialFee: "30,000円〜",
  monthlyFee: "7,700円〜",
  matchingFee: "100,000円〜（成果報酬）",
  age: "20〜50代（中心は30代）",
  successRate: "非公開",
};

const strengths = [
  {
    title: "成果報酬型で結果が出なければコストを抑えられる",
    desc: "成果報酬型の料金体系を採用しており、お見合い成立やお付き合い開始時に費用が発生する仕組みです。結果が出なければ月会費のみで活動できるため、コストリスクを抑えた婚活が可能です。",
  },
  {
    title: "月会費7,700円〜の圧倒的な低価格",
    desc: "初期費用30,000円〜、月会費7,700円〜と業界でもトップクラスの低価格を実現しています。婚活にかける予算が限られている方でも、無理なく始められる料金設定です。",
  },
  {
    title: "低価格ながら質の高いサポート体制",
    desc: "安さだけでなく、結婚相談所連盟加盟店としての会員ネットワークと、カウンセラーによる個別サポートを両立しています。低価格でも妥協のないサービスを提供している点が評価されています。",
  },
];

const pros = [
  "成果報酬型でコストリスクが低い",
  "月会費7,700円〜で業界最安クラス",
  "連盟加盟で大規模な会員基盤にアクセス可能",
];

const cons = [
  "成果報酬のため成婚時のトータルコストはやや高くなる場合がある",
  "店舗数が限られている",
  "大手と比べると知名度が低い",
];

const reviews = [
  {
    label: "30代男性・東京在住",
    stars: 5,
    date: "2024年8月",
    text: "月会費の安さが魅力で入会しました。成果報酬型なので、結果が出なければ大きな出費にならないという安心感があります。連盟加盟なのでお相手の選択肢も十分で、カウンセラーの方も丁寧にサポートしてくれました。コスパ最高の結婚相談所だと思います。",
  },
  {
    label: "30代男性・神奈川在住",
    stars: 4,
    date: "2024年6月",
    text: "他の結婚相談所と比較して圧倒的に安いので、まず試してみるという感覚で入会しました。安いからといってサービスが悪いということはなく、しっかりとしたサポートを受けられました。お見合いも定期的にセッティングしてもらえて満足しています。",
  },
  {
    label: "40代男性・東京在住",
    stars: 4,
    date: "2024年4月",
    text: "40代で婚活費用が気になっていましたが、セブンの成果報酬型は理にかなっていると感じました。結果が出た時だけ費用が発生するので、モチベーションにもつながります。連盟の会員基盤もあり、紹介される方の質は高かったです。",
  },
];

const faqs = [
  {
    q: "結婚相談所セブンの入会条件はありますか？",
    a: "20歳以上の独身の方が入会可能です。男性は安定した収入があることが条件です。入会時には独身証明書、収入証明書、本人確認書類が必要です。",
  },
  {
    q: "成果報酬型とはどのような料金体系ですか？",
    a: "月会費は低額に設定されており、お見合い成立やお付き合い開始、成婚退会などの成果が出た段階で追加の費用が発生する仕組みです。結果が出なければ低コストで活動を続けられます。",
  },
  {
    q: "セブンの無料相談では何ができますか？",
    a: "無料相談では、カウンセラーとの面談、サービスの説明、料金プランの詳細案内、婚活に関するアドバイスが受けられます。入会を強制されることはありません。",
  },
  {
    q: "セブンの退会方法を教えてください",
    a: "担当カウンセラーに退会の意思を伝え、所定の手続きを行います。成婚退会の場合は成果報酬としての成婚料が発生します。中途退会の場合、違約金は基本的にかかりません。",
  },
  {
    q: "セブンはオンラインでも活動できますか？",
    a: "連盟のシステムを通じてオンラインでの活動が可能です。お見合いもオンライン対応しています。カウンセリングも対面・オンラインの両方で対応しています。",
  },
  {
    q: "セブンの成婚退会までの平均期間はどのくらいですか？",
    a: "個人差がありますが、活動開始から6ヶ月〜1年程度で成婚退会される方が多い傾向です。成果報酬型のため、焦らず自分のペースで活動しやすい環境です。",
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
  { name: "スマリード", path: "/review/smartread/" },
  { name: "フィオーレ", path: "/review/fiore/" },
  { name: "naco-do", path: "/review/naco-do/" },
  { name: "エン婚活エージェント", path: "/review/en-konkatsu/" },
];

export default function SevenReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "結婚相談所セブン" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          結婚相談所セブンの口コミ・評判｜料金・特徴・サポートを徹底解説
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">セブンの強み・特徴</h2>
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
          <h2 className="text-xl font-light mb-4 tracking-widest">セブンの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">成果報酬型の婚活を無料相談で詳しく聞いてみましょう</p>
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
