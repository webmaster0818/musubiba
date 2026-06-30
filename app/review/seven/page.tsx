import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

export const metadata = {
  title: "結婚相談所セブンの口コミ・評判｜料金・特徴・サポートを徹底解説【2026年】",
  description:
    "結婚相談所セブンの口コミ・評判を徹底調査。低価格×高品質・成果報酬型が特徴のセブンの料金体系やサポート内容を詳しく解説します。",
};

const overview = {
  name: "結婚相談所セブン",
  type: "成果報酬型",
  members: "非公開（連盟加盟店）",
  area: "東京を中心に展開",
  initialFee: "30,000円〜",
  monthlyFee: "7,700円〜",
  matchingFee: "100,000円〜（成果報酬）",
  age: "20〜50代（中心は30代）",
  successRate: "非公開",
};

const strengths = [
  {
    title: "成果報酬型で結果が出なければコストを抑えられる",
    desc: "成果報酬型の料金体系を採用しており、お見合い成立やお付き合い開始時に費用が発生する仕組みです。結果が出なければ月会費のみで活動できるため、コストリスクを抑えた婚活が可能です。",
  },
  {
    title: "月会費7,700円〜の圧倒的な低価格",
    desc: "初期費用30,000円〜、月会費7,700円〜と業界でもトップクラスの低価格を実現しています。婚活にかける予算が限られている方でも、無理なく始められる料金設定です。",
  },
  {
    title: "低価格ながら質の高いサポート体制",
    desc: "安さだけでなく、結婚相談所連盟加盟店としての会員ネットワークと、カウンセラーによる個別サポートを両立しています。低価格でも妥協のないサービスを提供している点が評価されています。",
  },
];

const pros = [
  "成果報酬型でコストリスクが低い",
  "月会費7,700円〜で業界最安クラス",
  "連盟加盟で大規模な会員基盤にアクセス可能",
];

const cons = [
  "成果報酬のため成婚時のトータルコストはやや高くなる場合がある",
  "店舗数が限られている",
  "大手と比べると知名度が低い",
];

const faqs = [
  {
    q: "結婚相談所セブンの入会条件はありますか？",
    a: "20歳以上の独身の方が入会可能です。男性は安定した収入があることが条件です。入会時には独身証明書、収入証明書、本人確認書類が必要です。",
  },
  {
    q: "成果報酬型とはどのような料金体系ですか？",
    a: "月会費は低額に設定されており、お見合い成立やお付き合い開始、成婚退会などの成果が出た段階で追加の費用が発生する仕組みです。結果が出なければ低コストで活動を続けられます。",
  },
  {
    q: "セブンの無料相談では何ができますか？",
    a: "無料相談では、カウンセラーとの面談、サービスの説明、料金プランの詳細案内、婚活に関するアドバイスが受けられます。入会を強制されることはありません。",
  },
  {
    q: "セブンの退会方法を教えてください",
    a: "担当カウンセラーに退会の意思を伝え、所定の手続きを行います。成婚退会の場合は成果報酬としての成婚料が発生します。中途退会の場合、違約金は基本的にかかりません。",
  },
  {
    q: "セブンはオンラインでも活動できますか？",
    a: "連盟のシステムを通じてオンラインでの活動が可能です。お見合いもオンライン対応しています。カウンセリングも対面・オンラインの両方で対応しています。",
  },
  {
    q: "セブンの成婚退会までの平均期間はどのくらいですか？",
    a: "個人差がありますが、活動開始から6ヶ月〜1年程度で成婚退会される方が多い傾向です。成果報酬型のため、焦らず自分のペースで活動しやすい環境です。",
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
  { name: "スマリード", path: "/review/smartread/" },
  { name: "フィオーレ", path: "/review/fiore/" },
  { name: "naco-do", path: "/review/naco-do/" },
  { name: "エン婚活エージェント", path: "/review/en-konkatsu/" },
];

export default function SevenReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "結婚相談所セブン" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          結婚相談所セブンの口コミ・評判｜料金・特徴・サポートを徹底解説
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年5月</p>

        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=M6895M.1.Y109522N.Z1361712" target="_blank" rel="nofollow noopener noreferrer" className="text-[#8B7355] hover:underline font-medium">
            セブン結婚相談所 の公式サイトはこちら
          </a>
          <img src="https://t.felmat.net/fmimp/M6895M.Y109522N.Z1361712" width="1" height="1" alt="" className="inline" />
        </p>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <img src="/ss-seven.jpg" alt="結婚相談所セブン 公式サイト" className="w-full h-auto" />
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">セブンの強み・特徴</h2>
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
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">結婚相談所セブン</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">naco-do</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">スマリード</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">7,700円〜</td><td className="px-4 py-3 text-center">6,980円〜</td><td className="px-4 py-3 text-center">9,900円〜</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">30,000円〜</td><td className="px-4 py-3 text-center">29,800円</td><td className="px-4 py-3 text-center">6,600円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">会員数</td><td className="px-4 py-3 text-center">非公開</td><td className="px-4 py-3 text-center">約12.1万人</td><td className="px-4 py-3 text-center">約3万人</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">成果報酬型</td><td className="px-4 py-3 text-center">オンライン完結型</td><td className="px-4 py-3 text-center">オンライン完結型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">成果報酬型</td><td className="px-4 py-3 text-center">3連盟連携</td><td className="px-4 py-3 text-center">業界最安クラス</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            結婚相談所セブンの評判・口コミの傾向まとめ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            「結婚相談所セブン 評判」「結婚相談所セブン 口コミ」で調べる方向けに、寄せられる声の<strong>良い評判・気になる評判</strong>を傾向ごとに整理しました。感じ方には個人差があるため、実際の評判は無料相談で直接確認することをおすすめします。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50/50 rounded-xl p-6">
              <h3 className="font-medium text-green-800 mb-4 tracking-wider">良い評判の傾向</h3>
              <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>成果報酬型のため、結果が出るまでコストを抑えやすいという声が多い傾向です</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>月会費7,700円〜という業界最安クラスの料金を評価する声が見られます</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>連盟加盟で大規模な会員基盤にアクセスできる点を挙げる声があります</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>低価格ながらカウンセラーの個別サポートを受けられたという声もあります</li>
              </ul>
            </div>
            <div className="bg-red-50/50 rounded-xl p-6">
              <h3 className="font-medium text-red-800 mb-4 tracking-wider">気になる評判の傾向</h3>
              <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
                <li className="flex gap-2"><span className="text-red-400 shrink-0">-</span>成果報酬のため成婚時のトータルコストはやや高くなる場合があるという声があります</li>
                <li className="flex gap-2"><span className="text-red-400 shrink-0">-</span>店舗数が限られている点を気にする声が見られます</li>
                <li className="flex gap-2"><span className="text-red-400 shrink-0">-</span>大手と比べると知名度が低いと感じる声もあります</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※上記は当サイトが収集・整理した口コミ傾向です。感じ方には個人差があり、評価は担当者・プランによっても異なります。特定の個人の体験談ではなく一般的な傾向としてご参照ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            結婚相談所セブンと他社を比較して選ぶ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            結婚相談所セブンが自分に合うか迷ったら、料金総額・会員数・サポート形式を他社と見比べるのがおすすめです。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#8B7355] underline">結婚相談所の料金比較（13社一覧）を見る</Link></li>
            <li><Link href="/review/smartread/" className="text-[#8B7355] underline">スマリードの評判・料金を見る</Link></li>
            <li><Link href="/review/naco-do/" className="text-[#8B7355] underline">naco-doの評判・料金を見る</Link></li>
            <li><Link href="/review/en-konkatsu/" className="text-[#8B7355] underline">エン婚活エージェントの評判・料金を見る</Link></li>
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
          <h2 className="text-xl font-light mb-4 tracking-widest">セブンの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">成果報酬型の婚活を無料相談で詳しく聞いてみましょう</p>
          <a href="https://t.felmat.net/fmcl?ak=M6895M.1.Y109522N.Z1361712" target="_blank" rel="nofollow noopener noreferrer" className="inline-block bg-[#8B7355] hover:bg-[#7A6548] text-white font-normal py-3 px-8 rounded-full transition-colors tracking-widest">公式サイトへ</a>
          <img src="https://t.felmat.net/fmimp/M6895M.Y109522N.Z1361712" width="1" height="1" alt="" className="inline" />
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
