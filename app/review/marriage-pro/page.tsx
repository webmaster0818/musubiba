import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

export const metadata = {
  title: "マリッジプロの評判・口コミ・料金｜プロカウンセラーの実態を中立解説【2026年】",
  description:
    "マリッジプロの評判・口コミ・料金を実態ベースで解説。月会費16,500円〜＋成婚料220,000円の総額目安、プロカウンセラーによる戦略的サポートの特徴、向いている人まで中立にまとめました。最新の料金・会員数は公式サイトでご確認ください。",
};

const overview = {
  name: "マリッジプロ",
  type: "仲人型（プロカウンセラー特化）",
  members: "非公開（連盟加盟店・要確認）",
  area: "東京・大阪を中心に展開（拠点は公式サイト参照）",
  initialFee: "110,000円〜（プランにより変動・要確認）",
  monthlyFee: "16,500円〜（要確認）",
  matchingFee: "220,000円（成婚退会時・要確認）",
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
    title: "結婚相談所連盟加盟で大規模な会員ネットワークにアクセス",
    desc: "大手結婚相談所連盟に加盟しているため、連盟ネットワークの会員とお見合いが可能です。プロカウンセラーの手厚いサポートと大規模な会員基盤の両方を活用できます。",
  },
];

const pros = [
  "経験豊富なプロカウンセラーによる専任サポート",
  "婚活戦略の立案から実行まで一貫した支援",
  "連盟加盟で大規模な会員ネットワークを活用可能",
];

const cons = [
  "初期費用・月会費ともにやや高め",
  "成婚料22万円が発生する",
  "店舗数が大手と比べて限定的",
];

const faqs = [
  {
    q: "マリッジプロの評判・口コミはどうですか？",
    a: "「プロカウンセラーのサポートが手厚い」「婚活戦略を一緒に立ててくれる」「プロフィールやお見合い対策が具体的」といった良い評判がある一方、「初期費用・月会費が高め」「店舗が東京・大阪中心で地方は通いにくい」という気になる声もあります。感じ方には個人差があるため、実際の評判は無料相談で確認することをおすすめします。",
  },
  {
    q: "マリッジプロの料金は総額いくらかかりますか？",
    a: "公表料金にもとづくと、初期費用110,000円〜＋月会費16,500円〜＋成婚料220,000円が基本です。1年活動して成婚した場合の総額目安は約52万円〜です。プラン・連盟により異なり、お見合い料が別途かかる場合もあるため、正確な総額は無料相談での見積もりでご確認ください（2026年時点・要確認）。",
  },
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
    a: "カウンセリングはオンラインでも対応可能です。連盟のシステムを通じたお見合い申し込みもオンラインで行えます。お見合いは対面・オンラインの両方に対応しています。",
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
  { name: "フィオーレ", path: "/review/fiore/" },
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
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年6月</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#8B7355] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#8B7355] rounded-full" />結論：マリッジプロはこんな人に向く相談所
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>評判・口コミ</strong>：プロカウンセラーによる戦略的な手厚いサポートを評価する声が中心。一方で初期費用・月会費がやや高めという声もあります。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>特徴</strong>：婚活のプロが専任で担当し、<strong>プロフィール改善・お見合い対策・婚活戦略の立案</strong>まで一貫サポート。連盟加盟で会員ネットワークも活用できます。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>料金</strong>：月会費16,500円〜＋成婚料220,000円。1年で成婚した場合の総額目安は<strong>約52万円〜</strong>（公表料金にもとづく試算・要確認）。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>向く人</strong>：他社で結果が出ず手厚いサポートを求める人、自分の課題を客観的に分析してほしい人、東京・大阪で対面サポートを受けたい人。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本ページの料金・会員数等は当サイトの調査・公表情報にもとづく目安です（2026年時点）。最新かつ正確な数値・契約条件は<strong>公式サイトおよび無料相談</strong>で必ずご確認ください。</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <img src="/ss-marriage-pro.jpg" alt="マリッジプロ 公式サイト" className="w-full h-auto" />
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
          <h2 className="text-xl font-light mb-6 tracking-widest">他社との比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">マリッジプロ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">パートナーエージェント</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">フィオーレ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">16,500円〜</td><td className="px-4 py-3 text-center">18,700円〜</td><td className="px-4 py-3 text-center">8,800円〜</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">110,000円〜</td><td className="px-4 py-3 text-center">137,500円〜</td><td className="px-4 py-3 text-center">33,000円〜</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">会員数</td><td className="px-4 py-3 text-center">非公開</td><td className="px-4 py-3 text-center">約2.9万人</td><td className="px-4 py-3 text-center">約8.5万人</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">仲人型</td><td className="px-4 py-3 text-center">仲人型</td><td className="px-4 py-3 text-center">ハイブリッド型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">プロカウンセラー</td><td className="px-4 py-3 text-center">成婚率は公式参照</td><td className="px-4 py-3 text-center">成婚率は公式参照</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-3 leading-relaxed">※料金・会員数・成婚率は各社の公表値・当サイト調査にもとづく目安です。成婚率は各社で算出基準が異なるため、最新の正確な数値は各社公式サイトでご確認ください（2026年時点）。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">マリッジプロの料金プランと総額の目安</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            「マリッジプロ 料金」で気になるのは、月会費だけでなく<strong>入会から成婚までにかかる総額</strong>です。公表されている料金をもとに、1年間活動した場合の総額の目安を整理しました。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">初期費用</td><td className="px-4 py-3">110,000円〜</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">月会費</td><td className="px-4 py-3">16,500円〜</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">成婚料</td><td className="px-4 py-3">220,000円（成婚退会時）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">1年活動の総額目安（成婚なし）</td><td className="px-4 py-3">約308,000円〜（初期110,000＋月16,500×12）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">1年で成婚した場合の総額目安</td><td className="px-4 py-3 font-medium">約528,000円〜（上記＋成婚料220,000）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※月会費・初期費用はプラン・連盟により異なります。お見合い料などが別途かかる場合があります。上記は公表料金にもとづく目安で、正確な総額は無料相談での見積もりをご確認ください（金額は2026年時点）。成婚料が総額に占める割合が大きいため、「成婚したら払う費用」として事前に把握しておくのが大切です。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">マリッジプロの評判・口コミの傾向まとめ</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            「マリッジプロ 評判」「マリッジプロ 口コミ」で調べる方向けに、寄せられる声の<strong>良い評判・気になる評判</strong>を傾向ごとに整理しました。個別の体験談は下のセクションに掲載しています。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50/50 rounded-xl p-6">
              <h3 className="font-medium text-green-800 mb-4 tracking-wider">良い評判の傾向</h3>
              <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>プロカウンセラーのサポートが手厚いという声</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>プロフィール・お見合い対策が具体的で改善につながった</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>他社で結果が出ず乗り換えて成婚できたという声</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>連盟加盟で出会いの機会は十分にあった</li>
              </ul>
            </div>
            <div className="bg-red-50/50 rounded-xl p-6">
              <h3 className="font-medium text-red-800 mb-4 tracking-wider">気になる評判の傾向</h3>
              <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
                <li className="flex gap-2"><span className="text-red-400 shrink-0">-</span>初期費用・月会費がやや高めと感じる声</li>
                <li className="flex gap-2"><span className="text-red-400 shrink-0">-</span>店舗が東京・大阪中心で地方は通いにくい</li>
                <li className="flex gap-2"><span className="text-red-400 shrink-0">-</span>会員数が非公開で出会いの規模が分かりにくい</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※上記は当サイトが収集・整理した口コミ傾向です。感じ方には個人差があり、評価は担当者・プランによっても異なります。実際の評判は無料相談で直接確認することをおすすめします。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">マリッジプロと他社を比較して選ぶ</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            手厚い仲人サポートを求める場合は、料金総額や対象エリア・特徴を他社と見比べて選ぶのがおすすめです。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/review/musbell/" className="text-[#8B7355] underline">ムスベルの評判・料金を見る（全国・複数連盟加盟）</Link></li>
            <li><Link href="/review/ringbell/" className="text-[#8B7355] underline">リングベルの評判・料金を見る（仲人型・地域密着）</Link></li>
            <li><Link href="/compare/musbell-vs-ringbell/" className="text-[#8B7355] underline">ムスベルとリングベルを比較する（料金総額・対象年代・特徴）</Link></li>
            <li><Link href="/compare/" className="text-[#8B7355] underline">結婚相談所の料金比較（13社一覧）を見る</Link></li>
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
      <AuthorBox />
      </article>
    </>
  );
}
