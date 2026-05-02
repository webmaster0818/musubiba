import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "サンマリエの口コミ・評判｜料金・特徴・サポートを徹底解説【2024年】",
  description:
    "サンマリエの口コミ・評判を徹底調査。仲人型老舗・お見合いセッティング代行・月会費16,500円〜が特徴のサンマリエの料金やサポート体制を詳しく解説します。",
};

const overview = {
  name: "サンマリエ",
  type: "仲人型（老舗）",
  members: "約8.7万人",
  area: "全国対応（約30拠点）",
  initialFee: "103,400円〜",
  monthlyFee: "16,500円〜",
  matchingFee: "220,000円",
  age: "20〜60代（中心は30代〜40代）",
  successRate: "非公開",
};

const strengths = [
  {
    title: "40年以上の歴史を持つ仲人型老舗結婚相談所",
    desc: "1981年の創業以来40年以上の歴史を持つ老舗結婚相談所です。長年の実績とノウハウに基づいた仲人型のサポートが最大の特徴で、安心感と信頼性は業界でもトップクラスです。",
  },
  {
    title: "お見合いのセッティングを完全代行",
    desc: "日程調整、場所の手配、当日の流れの説明まで、お見合いに関するセッティングを全て代行してくれます。婚活初心者でも安心してお見合いに臨むことができ、余計なストレスなく活動に集中できます。",
  },
  {
    title: "連盟連携で約8.7万人の会員基盤にアクセス",
    desc: "自社会員に加え、大手結婚相談所連盟と連携しており、約8.7万人の会員基盤にアクセスできます。仲人型の手厚いサポートと大規模な会員ネットワークの両方を活用できます。",
  },
];

const pros = [
  "40年以上の歴史と実績による安心感",
  "お見合いのセッティングを完全代行",
  "連盟連携で約8.7万人と出会える",
];

const cons = [
  "初期費用10万円以上とやや高め",
  "成婚料22万円が発生する",
  "月会費も16,500円〜と安くはない",
];

const reviews = [
  {
    label: "30代男性・東京在住",
    stars: 5,
    date: "2024年7月",
    text: "お見合いのセッティングを全て代行してくれるので、仕事で忙しい自分にはありがたかったです。日程調整から場所の手配まで全て任せられるので、当日はお相手との会話に集中できました。仲人さんのアドバイスも的確で、入会から9ヶ月で成婚退会できました。",
  },
  {
    label: "40代男性・大阪在住",
    stars: 4,
    date: "2024年5月",
    text: "老舗の安心感があり、入会を決めました。仲人さんが非常に経験豊富で、自分の強みや改善点を的確に教えてくれました。料金は安くはありませんが、サポートの質を考えれば妥当だと思います。連盟連携でお相手の選択肢も十分にありました。",
  },
  {
    label: "30代男性・名古屋在住",
    stars: 4,
    date: "2024年3月",
    text: "婚活初心者で何をしていいか分からなかったのですが、サンマリエの仲人さんが一から丁寧に教えてくれました。プロフィール作成からお見合いの作法まで、手取り足取りサポートしてもらえます。料金は高めですが、それだけの価値はあると感じています。",
  },
];

const faqs = [
  {
    q: "サンマリエの入会条件はありますか？",
    a: "20歳以上の独身の方が入会可能です。男性は安定した収入があることが条件です。入会時には独身証明書、収入証明書、本人確認書類、卒業証明書が必要です。",
  },
  {
    q: "サンマリエのお見合いセッティング代行とは具体的に何をしてくれますか？",
    a: "お見合いの日程調整、場所（ホテルラウンジ等）の予約、当日の流れの説明、お見合い後のフォローまで一連の流れを仲人が代行します。会員はお相手との会話に集中するだけで済みます。",
  },
  {
    q: "サンマリエの無料相談では何ができますか？",
    a: "無料相談では、仲人との面談、サービスの説明、料金プランの案内、婚活に関するアドバイスが受けられます。来店またはオンラインで対応可能です。入会を強制されることはありません。",
  },
  {
    q: "サンマリエの退会方法を教えてください",
    a: "担当仲人に退会の意思を伝え、所定の手続きを行います。成婚退会の場合は成婚料220,000円が発生します。中途退会の場合、契約内容に応じた精算が行われます。",
  },
  {
    q: "サンマリエはオンラインでも活動できますか？",
    a: "カウンセリングやお見合いはオンラインでも対応可能です。来店が難しい方でも、ビデオ通話を通じて活動を進めることができます。ただし、対面でのサポートが充実しているため、可能であれば来店がおすすめです。",
  },
  {
    q: "サンマリエの成婚退会までの平均期間はどのくらいですか？",
    a: "個人差がありますが、活動開始から6ヶ月〜1年程度で成婚退会される方が多い傾向です。仲人のきめ細かいサポートにより、効率的に婚活を進められます。",
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
  { name: "ムスベル", path: "/review/musbell/" },
  { name: "リングベル", path: "/review/ringbell/" },
];

export default function SunmarieReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "サンマリエ" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          サンマリエの口コミ・評判｜料金・特徴・サポートを徹底解説
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">サンマリエの強み・特徴</h2>
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
          <h2 className="text-xl font-light mb-4 tracking-widest">サンマリエの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">40年以上の実績を持つ老舗の無料カウンセリングを受けてみましょう</p>
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
