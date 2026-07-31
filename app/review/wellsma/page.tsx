import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";
import A8Banner from "@/components/A8Banner";

export const metadata = {
  title: "ウェルスマの評判は？月11,800円〜のオンライン仲人型を公式情報で検証【成婚率の定義まで】",
  description:
    "ウェルスマ（完全オンラインの結婚相談所）の料金・成婚率86.1%の定義・IBJ加盟状況を公式情報ベースで検証。口コミの一次情報の有無まで正直に整理し、入会前に確認すべきポイントを解説します。",
};

const overview = {
  name: "ウェルスマ",
  company: "合同会社アクチュアライゼーション（東京都渋谷区渋谷3-2-4・代表 細川佑太朗）",
  type: "オンライン仲人型（完全オンライン・来店不要）",
  federation: "IBJ正規加盟（会員数10.8万名・2024年末時点の公式掲載値）",
  area: "全国（実店舗なし・Zoom/LINEで完結）",
  initialFee: "49,800円（税込・全プラン共通）",
  monthlyFee: "11,800円〜19,800円（税込・3プラン）",
  matchingFee: "149,800円（税込・全プラン共通）",
  successRate: "1年以内成婚率86.1%（自社公称・定義は本文参照）",
};

const strengths = [
  {
    title: "完全オンラインで来店不要（Zoom/LINE完結）",
    desc: "ウェルスマは実店舗を持たない完全オンライン型の結婚相談所です。カウンセリングはZoom、日常のやり取りはLINEで完結するため、店舗への来店が不要です。地方在住の方や、仕事が忙しく店舗に通う時間が取りにくい方でも活動しやすい仕組みです。",
  },
  {
    title: "専任カウンセラーがつく仲人型サポート",
    desc: "オンライン完結でありながら、データマッチングだけの放置型ではなく、専任カウンセラーが伴走する仲人型のサポート体制をとっています。プランによってサポートの手厚さが異なるため、自分に必要なサポート量に合わせて月会費を選べます。",
  },
  {
    title: "IBJ正規加盟で約10.8万名のネットワークを利用可能",
    desc: "日本結婚相談所連盟（IBJ）の正規加盟店であり、IBJ会員10.8万名（2024年末時点の公式掲載値）の中からお相手を探せます。また、公式サイトには結婚相手紹介サービス業の認証マークである「マル適マークCMS」の認証を受けている旨が記載されています。",
  },
];

const pros = [
  "月会費11,800円〜と仲人型としては始めやすい料金水準",
  "完全オンラインなので全国どこからでも活動できる",
  "IBJ加盟で紹介可能な会員基盤が大きい（10.8万名・2024年末公式掲載値）",
  "マル適マークCMS認証の記載があり運営の透明性を確認しやすい",
];

const cons = [
  "実店舗がないため対面でのカウンセリングは受けられない",
  "成婚率86.1%は自社公称値で、分母が成婚退会者である点に注意が必要",
  "オンライン活動に慣れていない方はツール操作の負担を感じる可能性がある",
];

const faqs = [
  {
    q: "ウェルスマは店舗に行かずに入会から成婚まで完結できますか？",
    a: "はい。ウェルスマは実店舗を持たない完全オンライン型の結婚相談所で、カウンセリングはZoom、日常の相談はLINEで行う仕組みです。来店は不要で、全国どこからでも活動できます。",
  },
  {
    q: "ウェルスマの「1年以内成婚率86.1%」とはどういう意味ですか？",
    a: "自社公称値で、定義は「2025年1〜12月の成婚退会者のうち、活動開始から1年以内に成婚した人の割合」です。分母は全会員ではなく成婚退会者である点に注意してください。全会員に対する成婚の割合を示す数値ではありません。",
  },
  {
    q: "ウェルスマの料金はいくらですか？",
    a: "税込で入会金49,800円（全プラン共通）、月会費はマイペースプラン11,800円・サポートプラン15,800円・プレミアムプラン19,800円の3種類、成婚料は149,800円（全プラン共通）です。料金は改定される場合があるため、最新の金額は必ず公式サイトでご確認ください。",
  },
  {
    q: "ウェルスマはどの連盟に加盟していますか？",
    a: "日本結婚相談所連盟（IBJ）の正規加盟店です。IBJの会員数は10.8万名（2024年末時点の公式掲載値）で、この会員ネットワークからお相手を探せます。",
  },
  {
    q: "ウェルスマで成婚までにかかる期間はどのくらいですか？",
    a: "自社公称値として「成婚まで平均7.9ヶ月」「年間成婚100名以上」が公式サイトに掲載されています。あくまで平均値であり、活動期間には個人差があります。",
  },
  {
    q: "ウェルスマの口コミは信頼できますか？",
    a: "当サイトの調査では、出典を確認できる口コミの一次情報は確認できませんでした。ネット上の口コミ記事には旧料金など古い情報が混ざっている場合もあるため、無料相談で最新の料金・サポート内容を直接確認することをおすすめします。",
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
  { name: "エクセレンス青山", path: "/review/excellence-aoyama/" },
  { name: "naco-do", path: "/review/naco-do/" },
  { name: "スマリッジ", path: "/review/smartread/" },
  { name: "エン婚活エージェント", path: "/review/en-konkatsu/" },
];

export default function WellsmaReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "ウェルスマ" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          ウェルスマの評判は？月11,800円〜のオンライン仲人型を公式情報で検証
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年7月（料金・実績は2026年7月31日時点の公式サイト掲載情報を基に作成）</p>

        {/* Conclusion box */}
        <div className="bg-[#F5F0EB] rounded-2xl p-6 mb-4 border border-[#8B7355]/20">
          <h2 className="text-base font-medium text-[#8B7355] mb-3 tracking-widest">結論：ウェルスマはこんな人に向く相談所</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
            ウェルスマは、<strong>来店不要の完全オンライン</strong>で専任カウンセラーの仲人型サポートを受けられるIBJ正規加盟の結婚相談所です。月会費11,800円〜（税込）と仲人型としては始めやすい水準で、店舗に通う時間が取れない方・地方在住の方に向いています。
          </p>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
            公称の「1年以内成婚率86.1%」は<strong>分母が成婚退会者</strong>（2025年1〜12月の成婚退会者のうち1年以内に成婚した割合）である点に注意が必要です。全会員に対する成婚割合ではないため、数字の定義を理解したうえで検討しましょう。
          </p>
        </div>

        <A8Banner ad="wellsma" />

        {/* Overview table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="bg-[#8B7355] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
          <div className="divide-y divide-gray-50">
            {Object.entries({
              サービス名: overview.name,
              運営会社: overview.company,
              タイプ: overview.type,
              加盟連盟: overview.federation,
              対応エリア: overview.area,
              入会金: overview.initialFee,
              月会費: overview.monthlyFee,
              成婚料: overview.matchingFee,
              成婚実績: overview.successRate,
            }).map(([k, v]) => (
              <div key={k} className="flex px-6 py-3.5 text-sm">
                <span className="w-28 shrink-0 font-medium text-[#2C2C2C]/50 tracking-wider">{k}</span>
                <span className="text-[#2C2C2C]">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            ウェルスマの料金プラン（税込）
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">マイペースプラン</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">サポートプラン</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">プレミアムプラン</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">入会金</td><td className="px-4 py-3 text-center" colSpan={3}>49,800円（全プラン共通）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">11,800円</td><td className="px-4 py-3 text-center">15,800円</td><td className="px-4 py-3 text-center">19,800円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">成婚料</td><td className="px-4 py-3 text-center" colSpan={3}>149,800円（全プラン共通）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">
            ※2026年7月31日時点の公式サイト掲載の税込料金です。ネット上の古い記事には現行と異なる旧料金が掲載されている場合があります。料金は改定されることがあるため、最新の金額は必ず公式サイトでご確認ください。
          </p>
        </section>

        {/* Success rate definition */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            成婚率86.1%の「定義」を正しく理解する
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            ウェルスマが公式サイトで掲げる実績（いずれも自社公称値）は次のとおりです。
          </p>
          <ul className="space-y-2 text-sm text-[#2C2C2C]/80 mb-4 list-disc pl-5">
            <li>1年以内成婚率 86.1%</li>
            <li>成婚まで平均 7.9ヶ月</li>
            <li>年間成婚 100名以上</li>
          </ul>
          <div className="bg-[#FAFAF8] rounded-xl border border-gray-100 p-6">
            <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
              ここで重要なのは「1年以内成婚率86.1%」の定義です。この数値は<strong>「2025年1〜12月の成婚退会者のうち、活動開始から1年以内に成婚した人の割合」</strong>であり、<strong>分母は全会員ではなく成婚退会者</strong>です。
            </p>
            <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
              つまり「入会した人の86.1%が成婚できる」という意味ではなく、「成婚して退会した人の86.1%が1年以内に決まっている」＝成婚した人の活動期間が短い傾向を示す数値です。結婚相談所業界では成婚率の算出方法が各社バラバラなため、定義を確認せずに他社の成婚率と単純比較しないよう注意しましょう。
            </p>
          </div>
        </section>

        {/* Strengths */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            ウェルスマの強み・特徴
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
            <h3 className="font-medium text-red-800 mb-4 tracking-wider">デメリット・注意点</h3>
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

        {/* Comparison */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 tracking-widest">他社との比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">ウェルスマ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">naco-do</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">エン婚活エージェント</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">49,800円</td><td className="px-4 py-3 text-center">29,800円</td><td className="px-4 py-3 text-center">10,780円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">11,800円〜</td><td className="px-4 py-3 text-center">6,980円〜</td><td className="px-4 py-3 text-center">14,300円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">成婚料</td><td className="px-4 py-3 text-center">149,800円</td><td className="px-4 py-3 text-center">0円</td><td className="px-4 py-3 text-center">0円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">オンライン仲人型</td><td className="px-4 py-3 text-center">オンライン完結型</td><td className="px-4 py-3 text-center">オンライン完結型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">専任カウンセラーの仲人型</td><td className="px-4 py-3 text-center">業界最安クラス</td><td className="px-4 py-3 text-center">全額返金保証</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※比較各社の数値は当サイト各レビュー記事の調査時点の情報です。最新の料金は各社公式サイトでご確認ください。</p>
        </section>

        {/* Reviews / How to verify */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            ウェルスマの評判・口コミについて（正直な調査結果）
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            当サイトで「ウェルスマ 評判」「ウェルスマ 口コミ」を調査しましたが、<strong>出典を確認できる口コミの一次情報は確認できませんでした</strong>。ネット上には口コミを紹介する記事もありますが、出典が示されていないものや、現行と異なる旧料金が記載された古い情報も見られます。そのため当サイトでは、確認できない口コミを掲載する代わりに、公式情報をもとにした「入会前の見極め方」を整理します。
          </p>
          <div className="bg-[#FAFAF8] rounded-xl border border-gray-100 p-6">
            <h3 className="font-medium text-[#8B7355] mb-4 tracking-wider">無料相談で確認したい5つの見極めポイント</h3>
            <ul className="space-y-3 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">1.</span>最新の料金表（入会金49,800円・月会費11,800円〜・成婚料149,800円の現行料金と一致するか）</li>
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">2.</span>プランごとのサポート内容の違い（マイペース／サポート／プレミアムで何が変わるか）</li>
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">3.</span>成婚率86.1%の算出定義の説明が公式掲載どおりか（分母＝成婚退会者）</li>
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">4.</span>専任カウンセラーとの連絡頻度・返信スピードの目安（オンライン型で最重要）</li>
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">5.</span>中途退会時の手続き・費用の扱い（契約書面で必ず確認）</li>
            </ul>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本記事は2026年7月31日時点の公式サイト掲載情報を基に作成しています。サービス内容・料金は変更される場合があります。</p>
        </section>

        {/* Compare links */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            ウェルスマと他社を比較して選ぶ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            ウェルスマが自分に合うか迷ったら、料金総額（成婚料込み）・会員基盤・サポート形式を他社と見比べるのがおすすめです。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#8B7355] underline">結婚相談所の料金比較（一覧）を見る</Link></li>
            <li><Link href="/review/naco-do/" className="text-[#8B7355] underline">naco-doの評判・料金を見る</Link></li>
            <li><Link href="/review/smartread/" className="text-[#8B7355] underline">スマリッジの評判・料金を見る</Link></li>
            <li><Link href="/review/en-konkatsu/" className="text-[#8B7355] underline">エン婚活エージェントの評判・料金を見る</Link></li>
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

        {/* Editor note */}
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

        {/* Related */}
        <section className="mb-8">
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

        <A8Banner ad="wellsma" />
        <AuthorBox />
      </article>
    </>
  );
}
