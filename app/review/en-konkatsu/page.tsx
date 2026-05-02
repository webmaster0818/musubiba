import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "エン婚活エージェントの口コミ・評判｜料金・特徴・サポートを徹底解説【2024年】",
  description:
    "エン婚活エージェントの口コミ・評判を徹底調査。月額14,300円・来店不要・全額返金保証が特徴のエン婚活エージェントの料金やサポート体制を詳しく解説します。",
};

const overview = {
  name: "エン婚活エージェント",
  type: "オンライン完結型",
  members: "約3万人（コネクトシップ連携）",
  area: "全国対応（オンライン）",
  initialFee: "10,780円",
  monthlyFee: "14,300円",
  matchingFee: "0円",
  age: "20〜50代（中心は30代）",
  successRate: "非公開（6ヶ月以上活動で30%以上が成婚）",
};

const strengths = [
  {
    title: "全額返金保証で安心してスタートできる",
    desc: "3ヶ月以内にコンタクト（お見合い）が成立しなかった場合、登録料と3ヶ月分の月会費を全額返金する保証制度があります。結果が出なければ費用が戻ってくるため、リスクを抑えて婚活を始められます。",
  },
  {
    title: "月額14,300円で来店不要のオンライン完結型",
    desc: "月額14,300円、初期費用10,780円、成婚料0円というシンプルな料金体系です。入会から活動まで全てオンラインで完結し、来店の必要がありません。エン・ジャパングループ運営の信頼感もあります。",
  },
  {
    title: "コネクトシップ連携で約3万人の会員と出会える",
    desc: "大手結婚相談所も参加するコネクトシップと連携しており、約3万人の会員基盤にアクセスできます。毎月6名以上の紹介と10名までの検索申込みが可能で、出会いの機会は十分に確保されています。",
  },
];

const pros = [
  "全額返金保証で安心してスタートできる",
  "月額14,300円・成婚料0円のシンプル料金",
  "来店不要のオンライン完結型",
];

const cons = [
  "会員数は大手と比べると少なめ",
  "対面でのサポートが受けられない",
  "毎月の紹介人数に上限がある",
];

const reviews = [
  {
    label: "30代男性・東京在住",
    stars: 5,
    date: "2024年8月",
    text: "全額返金保証があるので、安心して始められました。実際に入会してみると、毎月6名以上紹介してもらえて、コンタクト（お見合い）も定期的に成立しました。料金もシンプルで分かりやすく、成婚料0円なのが本当にありがたいです。エン・ジャパンの運営なので信頼感もあります。",
  },
  {
    label: "30代男性・大阪在住",
    stars: 4,
    date: "2024年6月",
    text: "仕事が忙しくて来店する時間がなかったので、オンライン完結型のエン婚活エージェントを選びました。スマホでサクサク活動でき、専任のアドバイザーとはメールや電話でいつでも相談できます。料金も良心的で、コスパの良い結婚相談所だと思います。",
  },
  {
    label: "40代男性・福岡在住",
    stars: 4,
    date: "2024年4月",
    text: "40代での婚活に不安がありましたが、全額返金保証があるので思い切って入会しました。コネクトシップ連携のおかげで、地方でもお相手の選択肢がありました。アドバイザーの方もオンラインながら親身に対応してくれて安心でした。",
  },
];

const faqs = [
  {
    q: "エン婚活エージェントの入会条件はありますか？",
    a: "20歳以上の独身の方が入会可能です。男性は安定した収入があることが条件です。入会時には独身証明書、収入証明書、本人確認書類が必要で、全てオンラインで提出できます。",
  },
  {
    q: "全額返金保証の条件を教えてください",
    a: "入会後3ヶ月以内にコンタクト（お見合い）が成立しなかった場合、登録料と3ヶ月分の月会費が全額返金されます。ただし、会員自身が活動に必要な手続きを行っていることが条件です。",
  },
  {
    q: "エン婚活エージェントの無料相談では何ができますか？",
    a: "オンラインでの無料カウンセリングが受けられます。サービスの説明、料金プランの案内、婚活に関するアドバイスを行います。入会を強制されることはありません。",
  },
  {
    q: "エン婚活エージェントの退会方法を教えてください",
    a: "マイページまたは担当アドバイザーを通じて退会手続きを行います。成婚料は0円なので、成婚退会時の追加費用はかかりません。中途退会の場合も違約金は基本的にかかりません。",
  },
  {
    q: "毎月どのくらいの紹介がありますか？",
    a: "毎月6名以上の紹介が保証されています。加えて、自分から検索して毎月10名までお見合いの申し込みが可能です。合わせて月16名以上の出会いのチャンスがあります。",
  },
  {
    q: "エン婚活エージェントの成婚退会までの平均期間はどのくらいですか？",
    a: "個人差がありますが、活動開始から6ヶ月〜1年程度で成婚退会される方が多い傾向です。6ヶ月以上活動した方の30%以上が成婚しているとされています。",
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
  { name: "マーズカフェ", path: "/review/mars-cafe/" },
  { name: "naco-do", path: "/review/naco-do/" },
  { name: "スマリード", path: "/review/smartread/" },
  { name: "オーネット", path: "/review/onet/" },
];

export default function EnKonkatsuReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "エン婚活エージェント" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          エン婚活エージェントの口コミ・評判｜料金・特徴・サポートを徹底解説
        </h1>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <img src="/ss-en-konkatsu.jpg" alt="エン婚活エージェント 公式サイト" className="w-full h-auto" />
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">エン婚活エージェントの強み・特徴</h2>
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
          <h2 className="text-xl font-light mb-4 tracking-widest">エン婚活エージェントの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">全額返金保証付きの婚活を無料カウンセリングで詳しく聞いてみましょう</p>
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
