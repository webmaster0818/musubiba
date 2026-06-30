import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

export const metadata = {
  title: "ツヴァイの口コミ・評判｜料金・会員数・サポートを徹底解説【2026年】",
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
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年5月</p>

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
          <h2 className="text-xl font-light mb-6 tracking-widest">他社との比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">ツヴァイ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">オーネット</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">パートナーエージェント</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">15,400円〜</td><td className="px-4 py-3 text-center">16,500円〜</td><td className="px-4 py-3 text-center">18,700円〜</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">115,500円〜</td><td className="px-4 py-3 text-center">116,600円〜</td><td className="px-4 py-3 text-center">137,500円〜</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">会員数</td><td className="px-4 py-3 text-center">約9.4万人</td><td className="px-4 py-3 text-center">約4.2万人</td><td className="px-4 py-3 text-center">約2.9万人</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">ハイブリッド型</td><td className="px-4 py-3 text-center">データマッチング型</td><td className="px-4 py-3 text-center">仲人型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">全国50店舗</td><td className="px-4 py-3 text-center">成婚料0円</td><td className="px-4 py-3 text-center">成婚率27%</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            ツヴァイの評判・口コミの傾向まとめ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            「ツヴァイ 評判」「ツヴァイ 口コミ」で調べる方向けに、寄せられる声の<strong>良い評判・気になる評判</strong>を傾向ごとに整理しました。感じ方には個人差があるため、実際の評判は無料相談で直接確認することをおすすめします。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50/50 rounded-xl p-6">
              <h3 className="font-medium text-green-800 mb-4 tracking-wider">良い評判の傾向</h3>
              <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>会員数が業界最大級で出会いの幅が広いという声が見られます</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>全国展開で地方在住でも利用しやすいと評価する傾向があります</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>データマッチングと仲人型を併用できる点を評価する声が多い傾向です</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>無料相談で相性診断が受けられる点を好意的に捉える傾向があります</li>
              </ul>
            </div>
            <div className="bg-red-50/50 rounded-xl p-6">
              <h3 className="font-medium text-red-800 mb-4 tracking-wider">気になる評判の傾向</h3>
              <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
                <li className="flex gap-2"><span className="text-red-400 shrink-0">-</span>初期費用が11万円以上とやや高めに感じるという声があります</li>
                <li className="flex gap-2"><span className="text-red-400 shrink-0">-</span>店舗によってアドバイザーの質に差を感じるという指摘が見られます</li>
                <li className="flex gap-2"><span className="text-red-400 shrink-0">-</span>プランによっては成婚料が最大22万円かかる点を気にする声があります</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※上記は当サイトが収集・整理した口コミ傾向です。感じ方には個人差があり、評価は担当者・プランによっても異なります。特定の個人の体験談ではなく一般的な傾向としてご参照ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            ツヴァイと他社を比較して選ぶ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            ツヴァイが自分に合うか迷ったら、料金総額・会員数・サポート形式を他社と見比べるのがおすすめです。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#8B7355] underline">結婚相談所の料金比較（13社一覧）を見る</Link></li>
            <li><Link href="/review/onet/" className="text-[#8B7355] underline">オーネットの評判・料金を見る</Link></li>
            <li><Link href="/review/partner-agent/" className="text-[#8B7355] underline">パートナーエージェントの評判・料金を見る</Link></li>
            <li><Link href="/review/sunmarie/" className="text-[#8B7355] underline">サンマリエの評判・料金を見る</Link></li>
          </ul>
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
        <section className="mb-12">
          <div className="bg-[#F5F0EB] rounded-2xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <img src="/editor-team.png" alt="ムスビバ編集部" className="w-20 h-20 rounded-xl object-cover shrink-0" />
              <div>
                <p className="font-medium text-[#2C2C2C] text-sm tracking-wider">この記事を書いた人</p>
                <p className="text-sm text-[#8B7355] font-medium mt-1">ムスビバ編集部</p>
              </div>
            </div>
            <p className="text-xs text-[#8B8580] leading-relaxed mb-2">結婚相談所業界を3年以上取材。主要15社以上を実際に訪問・カウンセリング体験し、料金・サポート体制・成婚実績を独自の基準で評価しています。</p>
            <p className="text-xs text-[#8B8580] leading-relaxed mb-2">編集部メンバーの中には、実際に結婚相談所を利用して入籍し、結婚生活6年目を迎えたメンバーも在籍。実体験に基づいたリアルな視点でお伝えします。</p>
            <p className="text-xs text-[#8B8580] leading-relaxed">「お見合い文化がなくなった日本で、結婚に悩む人を一人でも多く救いたい」「マッチングアプリで出会えても、本気の出会いにつながらない人の力になりたい」という想いで運営しています。</p>
          </div>
        </section>

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
      <AuthorBox />
      </article>
    </>
  );
}
