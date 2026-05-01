import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "マーズカフェの口コミ・評判｜料金・特徴・サポートを徹底解説【2024年】",
  description:
    "マーズカフェの口コミ・評判を徹底調査。カフェ型の気軽な婚活相談所として注目されるマーズカフェの料金・サポート体制・雰囲気を詳しく解説します。",
};

const overview = {
  name: "マーズカフェ",
  type: "カフェ型（カジュアル相談所）",
  members: "非公開",
  area: "東京・大阪を中心に展開",
  initialFee: "33,000円〜",
  monthlyFee: "11,000円〜",
  matchingFee: "110,000円",
  age: "20〜40代（中心は20代後半〜30代）",
  successRate: "非公開",
};

const strengths = [
  {
    title: "カフェのようなリラックス空間で婚活相談",
    desc: "従来の結婚相談所にありがちな堅苦しい雰囲気ではなく、カフェのようなおしゃれな空間でカウンセリングを受けられます。初めての婚活でも緊張せずに相談できる環境が整っています。",
  },
  {
    title: "初期費用を抑えた始めやすい料金設定",
    desc: "初期費用33,000円〜、月会費11,000円〜と、大手結婚相談所と比較してリーズナブルな料金設定です。婚活を気軽にスタートしたい方に適しています。",
  },
  {
    title: "20代〜30代の若い世代に特化したマッチング",
    desc: "会員の中心層が20代後半〜30代のため、同世代のパートナーを探しやすい環境です。価値観の合う相手と出会える確率が高いのが特徴です。",
  },
];

const pros = [
  "カフェ型の気軽な雰囲気で婚活をスタートできる",
  "初期費用・月会費ともにリーズナブル",
  "若い世代の会員が多く同世代と出会いやすい",
];

const cons = [
  "会員数が大手と比べると限定的",
  "展開エリアが都市部に限られる",
  "仲人型ほどの手厚いサポートは期待しにくい",
];

const reviews = [
  {
    label: "30代男性・東京在住",
    stars: 4,
    date: "2024年7月",
    text: "結婚相談所というと堅い印象がありましたが、マーズカフェはカフェのような空間で気軽に相談できました。カウンセラーの方もフレンドリーで、婚活初心者の自分でもリラックスして活動を始められました。料金も良心的で、コスパは良いと思います。",
  },
  {
    label: "20代男性・大阪在住",
    stars: 5,
    date: "2024年5月",
    text: "20代で結婚相談所は早いかと思いましたが、同世代の会員が多くて安心しました。雰囲気が良いので、毎回のカウンセリングが楽しみでした。入会から半年で交際に発展し、今では成婚退会を見据えています。",
  },
  {
    label: "30代男性・東京在住",
    stars: 3,
    date: "2024年3月",
    text: "雰囲気は最高ですが、会員数がもう少し多ければという印象です。紹介される人数が限られるため、選択肢の幅という点では大手に劣ります。ただ、紹介される方の質は高く、真剣に婚活している方が多い印象でした。",
  },
];

const faqs = [
  {
    q: "マーズカフェの入会条件はありますか？",
    a: "20歳以上の独身の方が入会可能です。男性は安定した収入があることが条件となります。入会時には独身証明書、本人確認書類、収入証明書が必要です。",
  },
  {
    q: "マーズカフェのカフェ型とはどういう意味ですか？",
    a: "従来の結婚相談所のような事務所的な空間ではなく、カフェのようなリラックスできる空間でカウンセリングやお見合いを行うスタイルです。初めての方でも緊張せずに利用できます。",
  },
  {
    q: "マーズカフェの無料相談では何ができますか？",
    a: "無料相談では、婚活に関するカウンセリング、サービスの説明、料金プランの案内を受けられます。カフェのような空間で気軽に相談でき、入会を強制されることはありません。",
  },
  {
    q: "マーズカフェの退会方法を教えてください",
    a: "担当カウンセラーに退会の意思を伝え、所定の手続きを行います。成婚退会の場合は成婚料が発生します。中途退会の場合、違約金は基本的にかかりません。",
  },
  {
    q: "マーズカフェはオンラインでも活動できますか？",
    a: "一部オンライン対応もありますが、基本的にはカフェ型の対面カウンセリングが中心です。お見合いもカフェスペースで行われることが多いです。",
  },
  {
    q: "マーズカフェの成婚退会までの平均期間はどのくらいですか？",
    a: "個人差がありますが、活動開始から6ヶ月〜1年程度で成婚退会される方が多い傾向です。カジュアルな雰囲気で活動しやすいため、比較的スムーズに進む方もいます。",
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
  { name: "naco-do", path: "/review/naco-do/" },
  { name: "スマリード", path: "/review/smartread/" },
  { name: "ゼクシィ縁結びエージェント", path: "/review/zexy/" },
];

export default function MarsCafeReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "マーズカフェ" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          マーズカフェの口コミ・評判｜料金・特徴・サポートを徹底解説
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
            マーズカフェの強み・特徴
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
          <h2 className="text-xl font-light mb-4 tracking-widest">マーズカフェの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">まずは無料相談でカフェ型の婚活を体験してみましょう</p>
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
