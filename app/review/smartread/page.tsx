import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "スマリードの口コミ・評判｜料金・特徴・サポートを徹底解説【2024年】",
  description:
    "スマリードの口コミ・評判を徹底調査。オンライン完結型・低価格・コネクトシップ連携が特徴のスマリードの料金やサポート体制を詳しく解説します。",
};

const overview = {
  name: "スマリード",
  type: "オンライン完結型",
  members: "約3万人（コネクトシップ連携含む）",
  area: "全国対応（オンライン）",
  initialFee: "6,600円",
  monthlyFee: "9,900円〜",
  matchingFee: "0円",
  age: "20〜50代（中心は30代）",
  successRate: "非公開",
};

const strengths = [
  {
    title: "業界最安クラスの料金設定でコスパ抜群",
    desc: "初期費用6,600円、月会費9,900円〜、成婚料0円という破格の料金設定です。一般的な結婚相談所と比較して年間コストを大幅に抑えられるため、婚活にかける予算が限られている方でも安心して始められます。",
  },
  {
    title: "コネクトシップ連携で約3万人の会員と出会える",
    desc: "大手結婚相談所が参加するコネクトシップ（CONNECT-ship）と連携しており、自社会員だけでなく他社の会員ともマッチングが可能です。低価格ながら出会いの選択肢が広いのが魅力です。",
  },
  {
    title: "完全オンライン完結で忙しい方にも最適",
    desc: "入会手続きからカウンセリング、お見合いの申し込みまで全てオンラインで完結します。来店の必要がないため、仕事が忙しい方や地方在住の方でも場所を選ばず活動できます。",
  },
];

const pros = [
  "初期費用6,600円・成婚料0円で業界最安クラス",
  "コネクトシップ連携で出会いの幅が広い",
  "完全オンライン完結で来店不要",
];

const cons = [
  "対面でのサポートが受けられない",
  "自社会員数は大手ほど多くない",
  "カウンセラーとの関係構築に時間がかかる場合がある",
];

const reviews = [
  {
    label: "30代男性・東京在住",
    stars: 5,
    date: "2024年8月",
    text: "コストを抑えて婚活したかったので、スマリードを選びました。成婚料0円は本当に助かります。コネクトシップ連携のおかげで紹介される方の数も多く、入会から4ヶ月で真剣交際に発展しました。オンラインだけで完結するのも、仕事で忙しい自分には合っていました。",
  },
  {
    label: "30代男性・大阪在住",
    stars: 4,
    date: "2024年6月",
    text: "他の結婚相談所と比べて圧倒的に安いので、まず試してみようという気持ちで入会しました。オンライン完結なので気軽に始められましたし、コネクトシップの会員も含めるとお相手の選択肢は十分にあります。ただ、対面サポートがないので、初めての婚活だと不安に感じる方もいるかもしれません。",
  },
  {
    label: "40代男性・福岡在住",
    stars: 4,
    date: "2024年4月",
    text: "地方在住で近くに結婚相談所がなかったので、オンライン完結型のスマリードは非常に助かりました。料金も安く、コネクトシップを通じて都市部の方ともマッチングできました。カウンセラーの対応も丁寧で、ビデオ通話でのカウンセリングも違和感なく利用できました。",
  },
];

const faqs = [
  {
    q: "スマリードの入会条件はありますか？",
    a: "20歳以上の独身の方が入会可能です。男性は定職に就いていることが条件となります。入会時には独身証明書、収入証明書、本人確認書類などの提出が必要です。",
  },
  {
    q: "コネクトシップとは何ですか？",
    a: "複数の結婚相談所が会員データベースを共有するプラットフォームです。スマリードの自社会員だけでなく、コネクトシップに参加する他社の会員ともお見合いが可能になります。",
  },
  {
    q: "スマリードの無料相談では何ができますか？",
    a: "オンラインでの無料カウンセリングを受けられます。婚活に関する相談、サービスの説明、料金プランの案内を行います。入会を強制されることはありません。",
  },
  {
    q: "スマリードの退会方法を教えてください",
    a: "マイページから退会手続きを行うか、担当カウンセラーに退会の意思を伝えて手続きを進めます。成婚料は0円のため、成婚退会時の追加費用はかかりません。",
  },
  {
    q: "スマリードは対面でのお見合いもできますか？",
    a: "はい、お見合い自体は対面で行うことも可能です。お見合いの日程調整やセッティングはオンラインで行いますが、実際のお見合いはカフェやホテルラウンジで対面実施できます。",
  },
  {
    q: "スマリードの成婚退会までの平均期間はどのくらいですか？",
    a: "個人差がありますが、活動開始から6ヶ月〜1年程度で成婚退会される方が多い傾向です。低コストで長期活動しやすいため、焦らず自分のペースで進められます。",
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
  { name: "naco-do", path: "/review/naco-do/" },
  { name: "エン婚活エージェント", path: "/review/en-konkatsu/" },
  { name: "フィオーレ", path: "/review/fiore/" },
  { name: "マーズカフェ", path: "/review/mars-cafe/" },
];

export default function SmartreadReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "スマリード" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          スマリードの口コミ・評判｜料金・特徴・サポートを徹底解説
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            スマリードの強み・特徴
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

        <section className="bg-[#333333] rounded-2xl p-10 text-white text-center mb-12">
          <h2 className="text-xl font-light mb-4 tracking-widest">スマリードの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">まずは無料カウンセリングでオンライン婚活を体験しましょう</p>
          <Link
            href="/"
            className="inline-block bg-[#8B7355] hover:bg-[#7A6548] text-white font-normal py-3 px-8 rounded-full transition-colors tracking-widest"
          >
            ランキングに戻る
          </Link>
        </section>

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
