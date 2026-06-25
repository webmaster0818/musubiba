import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

export const metadata = {
  title: "FIORE（フィオーレ）の口コミ・評判｜料金・特徴・サポートを徹底解説【2026年】",
  description:
    "FIORE（フィオーレ）の口コミ・評判を徹底調査。関西中心・成婚率業界トップクラスが特徴のフィオーレの料金やサポート体制を詳しく解説します。",
};

const overview = {
  name: "FIORE（フィオーレ）",
  type: "ハイブリッド型（仲人＋データマッチング）",
  members: "約8.5万人",
  area: "関西中心（大阪・京都・神戸・姫路など）",
  initialFee: "33,000円〜",
  monthlyFee: "8,800円〜",
  matchingFee: "110,000円〜",
  age: "20〜50代（中心は30代）",
  successRate: "52.8%（自社発表）",
};

const strengths = [
  {
    title: "成婚率52.8%と業界トップクラスの実績",
    desc: "フィオーレの成婚率は52.8%（自社発表）と業界でもトップクラスの数値を誇ります。カウンセラーによる丁寧なサポートと、連盟ネットワークの活用が高い成婚率の要因となっています。",
  },
  {
    title: "連盟連携で約8.5万人の出会いが可能",
    desc: "大手結婚相談所連盟と連携しており、自社会員だけでなく連盟加盟他社の会員ともお見合いが可能です。関西圏以外のお相手との出会いも広がります。",
  },
  {
    title: "関西圏に根ざした運営で地元婚活に強い",
    desc: "大阪・京都・神戸・姫路など関西圏を中心に店舗を展開。地域に密着した運営で、関西で結婚相手を探したい方に特に強いサポートを提供しています。",
  },
];

const pros = [
  "成婚率52.8%と業界トップクラスの実績",
  "連盟連携で約8.5万人と出会える",
  "初期費用33,000円〜と始めやすい料金設定",
];

const cons = [
  "関西圏以外の店舗が少ない",
  "成婚料が別途発生する",
  "地方在住の場合は来店が必要になることがある",
];

const reviews = [
  {
    label: "30代男性・大阪在住",
    stars: 5,
    date: "2024年8月",
    text: "関西で婚活するならフィオーレが一番だと思います。成婚率が高いと聞いて入会しましたが、実際にカウンセラーのサポートが手厚く、連盟連携で紹介される方も多かったです。入会から8ヶ月で素敵な方と出会い、成婚退会できました。",
  },
  {
    label: "30代男性・京都在住",
    stars: 4,
    date: "2024年6月",
    text: "初期費用が安いので始めやすかったです。連盟連携のおかげで、関西圏だけでなく東京の方ともお見合いできました。カウンセラーの方が婚活のコツを丁寧に教えてくれて、プロフィール写真の選び方まで細かくアドバイスをもらえました。",
  },
  {
    label: "40代男性・神戸在住",
    stars: 4,
    date: "2024年4月",
    text: "40代での婚活は不安でしたが、フィオーレのカウンセラーが励ましてくれて前向きに活動できました。関西密着なので、同じ生活圏の方を紹介してもらえるのが良かったです。成婚料は発生しましたが、結果が出たので満足しています。",
  },
  {
    label: "30代女性・大阪在住",
    stars: 5,
    date: "2025年10月",
    text: "関西で評判の良い相談所を探していてフィオーレに入会しました。女性カウンセラーの方が親身に相談に乗ってくれて、プロフィール写真の撮り方やお見合い時の服装まで細かくアドバイスしてもらえました。成婚率の高さに惹かれて入会しましたが、実際に7ヶ月で素敵な方と出会えました。",
  },
  {
    label: "40代女性・京都在住",
    stars: 4,
    date: "2025年8月",
    text: "40代で再婚を目指して入会しました。フィオーレは関西密着なので、生活圏が近い方を紹介してもらえるのが良いですね。連盟連携で思った以上に多くの方のプロフィールを見ることができました。カウンセラーの方が再婚ならではの不安にも寄り添ってくれて安心でした。",
  },
];

const faqs = [
  {
    q: "FIORE（フィオーレ）の入会条件はありますか？",
    a: "20歳以上の独身の方が入会可能です。男性は定職に就いていることが条件となります。入会時には独身証明書、収入証明書、本人確認書類が必要です。",
  },
  {
    q: "フィオーレの成婚率52.8%はどのように算出されていますか？",
    a: "フィオーレの成婚率は、一定期間内に活動した会員のうち成婚退会した方の割合として算出されています。ただし、各社で算出方法が異なるため、単純な比較は難しい面があります。",
  },
  {
    q: "フィオーレの無料相談では何ができますか？",
    a: "無料相談では、カウンセラーとの面談、サービスの説明、料金プランの案内、婚活に関するアドバイスが受けられます。店舗またはオンラインで対応可能です。",
  },
  {
    q: "フィオーレの退会方法を教えてください",
    a: "担当カウンセラーに退会の意思を伝え、所定の手続きを行います。成婚退会の場合は成婚料が発生します。中途退会の場合、契約期間に応じた精算が行われます。",
  },
  {
    q: "フィオーレは関西以外でも利用できますか？",
    a: "連盟連携を通じて全国の会員とお見合いが可能です。ただし、店舗は関西圏が中心のため、対面カウンセリングは関西での利用がメインとなります。オンライン対応も一部行っています。",
  },
  {
    q: "フィオーレの成婚退会までの平均期間はどのくらいですか？",
    a: "個人差がありますが、活動開始から5ヶ月〜1年程度で成婚退会される方が多い傾向です。成婚率の高さからもわかるように、比較的スムーズに成果が出やすい環境です。",
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
  { name: "ムスベル", path: "/review/musbell/" },
  { name: "ツヴァイ", path: "/review/zwei/" },
  { name: "パートナーエージェント", path: "/review/partner-agent/" },
  { name: "サンマリエ", path: "/review/sunmarie/" },
];

export default function FioreReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "FIORE（フィオーレ）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          FIORE（フィオーレ）の口コミ・評判｜料金・特徴・サポートを徹底解説
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年5月</p>

        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=T8680S.1.X1309788.Z1361712" target="_blank" rel="nofollow noopener noreferrer" className="text-[#8B7355] hover:underline font-medium">
            フィオーレ の公式サイトはこちら
          </a>
        </p>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <img src="/ss-fiore.jpg" alt="FIORE（フィオーレ） 公式サイト" className="w-full h-auto" />
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">フィオーレの強み・特徴</h2>
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
          <h2 className="text-xl font-light mb-6 tracking-widest">他社との比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">フィオーレ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">ツヴァイ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">サンマリエ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">8,800円〜</td><td className="px-4 py-3 text-center">15,400円〜</td><td className="px-4 py-3 text-center">16,500円〜</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">33,000円〜</td><td className="px-4 py-3 text-center">115,500円〜</td><td className="px-4 py-3 text-center">103,400円〜</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">会員数</td><td className="px-4 py-3 text-center">約8.5万人</td><td className="px-4 py-3 text-center">約9.4万人</td><td className="px-4 py-3 text-center">約8.7万人</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">ハイブリッド型</td><td className="px-4 py-3 text-center">ハイブリッド型</td><td className="px-4 py-3 text-center">仲人型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">成婚率52.8%</td><td className="px-4 py-3 text-center">全国50店舗</td><td className="px-4 py-3 text-center">老舗40年以上</td></tr>
              </tbody>
            </table>
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

        {/* マッチングシミュレーション CTA */}
        <section className="bg-gradient-to-r from-[#8B7355] to-[#C9B99A] rounded-2xl p-8 text-white text-center mb-8">
          <h2 className="text-lg font-light mb-3 tracking-widest">結婚相手マッチングシミュレーション</h2>
          <p className="text-white/70 text-sm mb-6 tracking-wider">あなたに合う理想のお相手が何人いるか、無料でシミュレーションできます</p>
          <a href="https://t.felmat.net/fmcl?ak=O8781X.1.R131784K.Z1361712" target="_blank" rel="nofollow noopener noreferrer">
            <img src="https://t.felmat.net/fmimg/O8781X.R131784K.Z1361712" width="300" height="250" alt="フィオーレ マッチングシミュレーション" className="mx-auto rounded-lg mb-4" />
          </a>
          <a href="https://t.felmat.net/fmcl?ak=O8781X.1.R131784K.Z1361712" target="_blank" rel="nofollow noopener noreferrer" className="inline-block bg-white text-[#8B7355] font-normal py-3 px-8 rounded-full transition-colors tracking-widest hover:bg-gray-100">無料シミュレーションを試す</a>
        </section>

        <section className="bg-[#333333] rounded-2xl p-10 text-white text-center mb-12">
          <h2 className="text-xl font-light mb-4 tracking-widest">フィオーレの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">まずは無料相談で成婚率トップクラスのサポートを体験しましょう</p>
          <div className="mb-6">
            <a href="https://t.felmat.net/fmcl?ak=T8680S.1.X1309788.Z1361712" target="_blank" rel="nofollow noopener noreferrer">
              <img src="https://t.felmat.net/fmimg/T8680S.X1309788.Z1361712" width="300" height="250" alt="フィオーレ" className="mx-auto rounded-lg" />
            </a>
          </div>
          <a href="https://t.felmat.net/fmcl?ak=T8680S.1.X1309788.Z1361712" target="_blank" rel="nofollow noopener noreferrer" className="inline-block bg-[#8B7355] hover:bg-[#7A6548] text-white font-normal py-3 px-8 rounded-full transition-colors tracking-widest">公式サイトへ</a>
        </section>

        <section>
          <h2 className="text-lg font-light mb-4 tracking-widest">他の結婚相談所も見る</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link key={s.name} href={s.path} className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm font-normal hover:border-[#8B7355] hover:text-[#8B7355] transition-colors tracking-wider">{s.name}</Link>
            ))}
          </div>
        </section>
      <AuthorBox />
      </article>
    </>
  );
}
