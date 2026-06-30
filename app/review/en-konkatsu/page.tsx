import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

export const metadata = {
  title: "エン婚活エージェントの口コミ・評判｜料金・特徴・サポートを徹底解説【2026年】",
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
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年5月</p>

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
          <h2 className="text-xl font-light mb-6 tracking-widest">他社との比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">エン婚活エージェント</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">naco-do</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">スマリード</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">14,300円</td><td className="px-4 py-3 text-center">6,980円〜</td><td className="px-4 py-3 text-center">9,900円〜</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">10,780円</td><td className="px-4 py-3 text-center">29,800円</td><td className="px-4 py-3 text-center">6,600円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">会員数</td><td className="px-4 py-3 text-center">約3万人</td><td className="px-4 py-3 text-center">約12.1万人</td><td className="px-4 py-3 text-center">約3万人</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">オンライン完結型</td><td className="px-4 py-3 text-center">オンライン完結型</td><td className="px-4 py-3 text-center">オンライン完結型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">全額返金保証</td><td className="px-4 py-3 text-center">3連盟連携</td><td className="px-4 py-3 text-center">業界最安クラス</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            エン婚活エージェントの評判・口コミの傾向まとめ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            「エン婚活エージェント 評判」「エン婚活エージェント 口コミ」で調べる方向けに、寄せられる声の<strong>良い評判・気になる評判</strong>を傾向ごとに整理しました。感じ方には個人差があるため、実際の評判は無料相談で直接確認することをおすすめします。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50/50 rounded-xl p-6">
              <h3 className="font-medium text-green-800 mb-4 tracking-wider">良い評判の傾向</h3>
              <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>全額返金保証があり安心してスタートできたという声が見られます</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>月額14,300円・成婚料0円のシンプルな料金体系を評価する声が多い傾向です</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>来店不要のオンライン完結型で活動しやすいという声があります</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>コネクトシップ連携で出会いの機会を確保しやすいという声が見られます</li>
              </ul>
            </div>
            <div className="bg-red-50/50 rounded-xl p-6">
              <h3 className="font-medium text-red-800 mb-4 tracking-wider">気になる評判の傾向</h3>
              <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
                <li className="flex gap-2"><span className="text-red-400 shrink-0">-</span>会員数は大手と比べると少なめという指摘が見られます</li>
                <li className="flex gap-2"><span className="text-red-400 shrink-0">-</span>対面でのサポートが受けられない点を不安視する声があります</li>
                <li className="flex gap-2"><span className="text-red-400 shrink-0">-</span>毎月の紹介人数に上限がある点を物足りないとする声が見られます</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※上記は当サイトが収集・整理した口コミ傾向です。感じ方には個人差があり、評価は担当者・プランによっても異なります。特定の個人の体験談ではなく一般的な傾向としてご参照ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            エン婚活エージェントと他社を比較して選ぶ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            エン婚活エージェントが自分に合うか迷ったら、料金総額・会員数・サポート形式を他社と見比べるのがおすすめです。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#8B7355] underline">結婚相談所の料金比較（13社一覧）を見る</Link></li>
            <li><Link href="/review/mars-cafe/" className="text-[#8B7355] underline">マーズカフェの評判・料金を見る</Link></li>
            <li><Link href="/review/naco-do/" className="text-[#8B7355] underline">naco-doの評判・料金を見る</Link></li>
            <li><Link href="/review/smartread/" className="text-[#8B7355] underline">スマリードの評判・料金を見る</Link></li>
          </ul>
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
      <AuthorBox />
      </article>
    </>
  );
}
