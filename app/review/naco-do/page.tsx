import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "naco-do（ナコード）の口コミ・評判｜料金・特徴・サポートを徹底解説【2024年】",
  description:
    "naco-do（ナコード）の口コミ・評判を徹底調査。オンライン完結・月額6,980円〜・JBA/CONNECT-ship連携が特徴のナコードの料金やサポート体制を詳しく解説します。",
};

const overview = {
  name: "naco-do（ナコード）",
  type: "オンライン完結型",
  members: "約12.1万人（JBA・CONNECT-ship・良縁ネット連携）",
  area: "全国対応（オンライン）",
  initialFee: "29,800円",
  monthlyFee: "6,980円〜（1ヶ月プラン：16,800円）",
  matchingFee: "0円",
  age: "20〜50代（中心は20代後半〜30代）",
  successRate: "41.3%（自社発表）",
};

const strengths = [
  {
    title: "月額6,980円〜で業界最安クラスのオンライン結婚相談所",
    desc: "月額6,980円〜（6ヶ月プラン）と、結婚相談所としては破格の料金設定です。成婚料も0円のため、トータルコストを大幅に抑えて婚活を進められます。コスパ重視の方に最適な選択肢です。",
  },
  {
    title: "JBA・CONNECT-ship・良縁ネット連携で約12.1万人と出会える",
    desc: "JBA（日本結婚相談協会）、CONNECT-ship、良縁ネットの3つの連盟・プラットフォームと連携しており、約12.1万人の会員基盤にアクセスできます。低価格ながら出会いの選択肢は業界トップクラスです。",
  },
  {
    title: "完全オンライン完結で全国どこからでも活動可能",
    desc: "入会から活動、成婚退会まで全てオンラインで完結します。来店の必要がなく、スマートフォンやPCがあればどこからでも婚活を進められます。忙しいビジネスパーソンにも最適です。",
  },
];

const pros = [
  "月額6,980円〜・成婚料0円で業界最安クラス",
  "約12.1万人の大規模な会員基盤",
  "完全オンライン完結で来店不要",
];

const cons = [
  "対面でのサポートが受けられない",
  "オンライン完結のため対面慣れしていない方には向かない",
  "1ヶ月プランだと月額16,800円とやや割高",
];

const reviews = [
  {
    label: "30代男性・東京在住",
    stars: 5,
    date: "2024年8月",
    text: "月額6,980円で12万人以上の会員と出会えるのは驚きです。成婚料もかからないので、トータルコストが他社の半分以下で済みました。オンライン完結なので、仕事の合間にスマホでサクサク活動できるのも気に入っています。入会から5ヶ月でお付き合いが始まりました。",
  },
  {
    label: "20代男性・大阪在住",
    stars: 4,
    date: "2024年6月",
    text: "20代で結婚相談所は敷居が高いと思っていましたが、naco-doはオンライン完結で料金も安いので気軽に始められました。3つの連盟と連携しているので、お相手の選択肢が本当に多いです。カウンセラーとのやり取りもLINEで気軽にできるのが良かったです。",
  },
  {
    label: "30代男性・福岡在住",
    stars: 4,
    date: "2024年4月",
    text: "地方在住で婚活の選択肢が少なかったのですが、naco-doなら全国の会員と出会えるので助かりました。料金の安さも魅力ですが、カウンセラーのサポートも想像以上にしっかりしていました。オンラインお見合いにも対応しているので、遠方の方とも気軽に会えます。",
  },
];

const faqs = [
  {
    q: "naco-do（ナコード）の入会条件はありますか？",
    a: "20歳以上の独身の方が入会可能です。男性は安定した収入があることが条件です。入会時には独身証明書、収入証明書、本人確認書類が必要で、全てオンラインで提出できます。",
  },
  {
    q: "naco-doが連携しているJBA・CONNECT-shipとは何ですか？",
    a: "JBA（日本結婚相談協会）とCONNECT-shipは、複数の結婚相談所が会員データベースを共有するプラットフォームです。naco-doは良縁ネットとも連携しており、合計約12.1万人の会員と出会えます。",
  },
  {
    q: "naco-doの無料相談では何ができますか？",
    a: "オンラインでの無料カウンセリングが受けられます。サービスの説明、料金プランの案内、婚活に関するアドバイスを行います。ビデオ通話で気軽に相談でき、入会を強制されることはありません。",
  },
  {
    q: "naco-doの退会方法を教えてください",
    a: "マイページまたはカウンセラーを通じて退会手続きを行います。成婚料は0円なので、成婚退会時の追加費用はかかりません。中途退会の場合、プランの残期間に応じた精算が行われます。",
  },
  {
    q: "naco-doのお見合いはどのように行われますか？",
    a: "お見合いはオンライン（ビデオ通話）と対面の両方に対応しています。オンラインお見合いの場合、naco-do専用のビデオ通話システムを利用できます。対面の場合はカフェやホテルラウンジなどで行います。",
  },
  {
    q: "naco-doの成婚退会までの平均期間はどのくらいですか？",
    a: "個人差がありますが、活動開始から6ヶ月〜1年程度で成婚退会される方が多い傾向です。成婚率41.3%（自社発表）と高い実績があり、低コストで効率的な婚活が可能です。",
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
  { name: "エン婚活エージェント", path: "/review/en-konkatsu/" },
  { name: "ゼクシィ縁結びエージェント", path: "/review/zexy/" },
  { name: "結婚相談所セブン", path: "/review/seven/" },
];

export default function NacoDoReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "naco-do（ナコード）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          naco-do（ナコード）の口コミ・評判｜料金・特徴・サポートを徹底解説
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">ナコードの強み・特徴</h2>
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
          <h2 className="text-xl font-light mb-4 tracking-widest">naco-doの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">月額6,980円〜のオンライン婚活を無料カウンセリングで体験しましょう</p>
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
