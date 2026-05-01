import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "マリッジプロの口コミ・評判｜料金・特徴・サポートを徹底解説【2024年】",
  description:
    "マリッジプロの口コミ・評判を徹底調査。プロカウンセラーによる手厚いサポートが特徴のマリッジプロの料金体系やサービス内容を詳しく解説します。",
};

const overview = {
  name: "マリッジプロ",
  type: "仲人型（プロカウンセラー特化）",
  members: "非公開（IBJ加盟店）",
  area: "東京・大阪を中心に展開",
  initialFee: "110,000円〜",
  monthlyFee: "16,500円〜",
  matchingFee: "220,000円",
  age: "20〜50代（中心は30代〜40代）",
  successRate: "非公開",
};

const strengths = [
  {
    title: "経験豊富なプロカウンセラーが専任で担当",
    desc: "婚活のプロフェッショナルであるカウンセラーが一人ひとりに専任で付き、入会から成婚まで一貫してサポートします。プロフィール作成、お見合い対策、交際中のアドバイスまで、あらゆる場面でプロの視点から支援を受けられます。",
  },
  {
    title: "婚活戦略の立案から実行までトータルサポート",
    desc: "漠然と活動するのではなく、会員一人ひとりの強みや課題を分析した上で婚活戦略を立案します。PDCAサイクルを回しながら、効率的に成婚へと導くプロフェッショナルなアプローチが特徴です。",
  },
  {
    title: "IBJ加盟で大規模な会員ネットワークにアクセス",
    desc: "IBJ（日本結婚相談所連盟）に加盟しているため、IBJネットワークの会員とお見合いが可能です。プロカウンセラーの手厚いサポートと大規模な会員基盤の両方を活用できます。",
  },
];

const pros = [
  "経験豊富なプロカウンセラーによる専任サポート",
  "婚活戦略の立案から実行まで一貫した支援",
  "IBJ加盟で大規模な会員ネットワークを活用可能",
];

const cons = [
  "初期費用・月会費ともにやや高め",
  "成婚料22万円が発生する",
  "店舗数が大手と比べて限定的",
];

const reviews = [
  {
    label: "30代男性・東京在住",
    stars: 5,
    date: "2024年7月",
    text: "他の結婚相談所で1年以上活動して結果が出なかったのですが、マリッジプロに乗り換えてからは半年で成婚できました。カウンセラーの方がプロフィールの改善点や、お見合いでの話し方まで具体的にアドバイスしてくれたのが大きかったです。料金は高めですが、結果が出たので大満足です。",
  },
  {
    label: "40代男性・大阪在住",
    stars: 4,
    date: "2024年5月",
    text: "40代での婚活に不安がありましたが、カウンセラーの方が自分の強みを引き出してくれて、前向きに活動できました。婚活戦略を一緒に考えてくれるので、やみくもに活動するよりも効率的でした。IBJの会員基盤も大きく、お見合いの機会は十分にありました。",
  },
  {
    label: "30代男性・東京在住",
    stars: 4,
    date: "2024年3月",
    text: "プロのカウンセラーに担当していただけるという点が決め手で入会しました。実際、カウンセリングの質は高く、自分では気づかなかった改善点を的確に指摘してもらえました。ただ、料金が高めなので、予算に余裕がある方向けだと感じます。",
  },
];

const faqs = [
  {
    q: "マリッジプロの入会条件はありますか？",
    a: "20歳以上の独身の方が入会可能です。男性は安定した収入があることが条件です。入会時には独身証明書、収入証明書、本人確認書類、学歴証明書が必要です。",
  },
  {
    q: "マリッジプロのプロカウンセラーとはどのような方ですか？",
    a: "婚活支援の専門資格を持ち、多数の成婚実績があるカウンセラーが担当します。会員の人柄や価値観を深く理解し、戦略的な婚活プランを立案・実行する専門家です。",
  },
  {
    q: "マリッジプロの無料相談では何ができますか？",
    a: "無料相談では、プロカウンセラーとの面談、サービスの説明、料金プランの案内、婚活に関する具体的なアドバイスが受けられます。入会を強制されることはありません。",
  },
  {
    q: "マリッジプロの退会方法を教えてください",
    a: "担当カウンセラーに退会の意思を伝え、所定の手続きを行います。成婚退会の場合は成婚料220,000円が発生します。中途退会の場合、契約内容に応じた精算が行われます。",
  },
  {
    q: "マリッジプロはオンラインでも活動できますか？",
    a: "カウンセリングはオンラインでも対応可能です。IBJのシステムを通じたお見合い申し込みもオンラインで行えます。お見合いは対面・オンラインの両方に対応しています。",
  },
  {
    q: "マリッジプロの成婚退会までの平均期間はどのくらいですか？",
    a: "個人差がありますが、プロカウンセラーの戦略的なサポートにより、活動開始から6ヶ月〜1年程度で成婚退会される方が多い傾向です。",
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
  { name: "パートナーエージェント", path: "/review/partner-agent/" },
  { name: "IBJメンバーズ", path: "/review/ibj/" },
  { name: "リングベル", path: "/review/ringbell/" },
  { name: "ムスベル", path: "/review/musbell/" },
];

export default function MarriageProReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "マリッジプロ" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          マリッジプロの口コミ・評判｜料金・特徴・サポートを徹底解説
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">マリッジプロの強み・特徴</h2>
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
          <h2 className="text-xl font-light mb-4 tracking-widest">マリッジプロの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">プロカウンセラーによる無料カウンセリングを体験してみましょう</p>
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
