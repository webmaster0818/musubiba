import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FeePosition from "@/components/FeePosition";
import AuthorBox from "@/components/AuthorBox";
import FlowGuide from "@/components/FlowGuide";
import BrandStores from "@/components/BrandStores";

export const metadata = {
  title: "ツヴァイの口コミ・評判｜料金・会員数・サポートを解説【2026年】",
  description:
    "ツヴァイの口コミ・評判と料金を解説しています。ご紹介プランは入会初期費用118,800円・月会費15,950円・成婚料0円、IBJプランは月会費18,700円です（2026年10月23日公式確認）。会員数11.7万人・全国54店舗の内訳も掲載しています。",
};

// 2026-10-23: 公式サイト（料金プランページ／トップページ）で再確認し、料金改定後の2プラン・会員数・店舗数に更新。
// 旧記載（月会費15,400円・初期費用115,500円・約9.4万人・全国50店舗）は公式と一致しないため差し替え。
const overview = {
  name: "ツヴァイ",
  type: "ハイブリッド型（データマッチング＋仲人型・IBJ加盟）",
  members: "11.7万人（ZWEI登録会員25,949名とIBJ会員109,712名の合計から重複18,866名を除いた人数・2026年6月末時点の公式発表）",
  area: "全国54店舗（公式発表）",
  initialFee: "118,800円（ご紹介プラン）／129,800円（IBJプラン）",
  monthlyFee: "15,950円（ご紹介プラン）／18,700円（IBJプラン）",
  matchingFee: "ご紹介プランは0円／IBJプランはIBJ会員と成婚した場合のみ220,000円（ツヴァイ会員同士は0円）",
  age: "公式に年齢層の公表なし（20代割あり）",
  successRate: "公式に成婚率の公表なし（2025年の成婚組数3,628組と公表）",
};

const strengths = [
  {
    title: "ツヴァイ会員とIBJ会員を合わせた11.7万人から探せる",
    desc: "ツヴァイはIBJの加盟相談所です。公式発表の会員数11.7万人は、ZWEI登録会員とIBJ会員の合計から重複を除いた人数（2026年6月末時点）です。",
  },
  {
    title: "全国54店舗で対面の相談を受けやすい",
    desc: "公式サイトでは全国54店舗を展開していると公表しています。転勤や引っ越しがあっても、近くの店舗で相談を続けやすい環境です。",
  },
  {
    title: "成婚料0円のプランとIBJプランを選べる",
    desc: "自分で動いて費用を抑えるご紹介プラン（成婚料0円）と、IBJ会員とのお見合いが何度でも0円でカウンセラーが伴走するIBJプランがあります。",
  },
];

const pros = [
  "ツヴァイ会員とIBJ会員を合わせた11.7万人から探せる",
  "全国54店舗で対面の相談を受けやすい",
  "ご紹介プランは成婚料0円",
  "20代割・のりかえ割など入会費用の割引制度がある",
];

const cons = [
  "入会初期費用は118,800円からで、初期負担は軽くない",
  "IBJプランでIBJ会員と成婚した場合は成婚料220,000円がかかる",
  "店舗によってアドバイザーの対応に差を感じるという声がある",
];

const faqs = [
  {
    q: "ツヴァイの料金はいくらですか？",
    a: "公式サイトの料金（税込・2026年10月23日確認）は、ご紹介プランが入会初期費用118,800円・月会費15,950円・成婚料0円、IBJプランが入会初期費用129,800円・月会費18,700円・成婚料220,000円です。IBJプランの成婚料は、IBJ会員と成婚した場合のみかかり、ツヴァイ会員同士の成婚は0円です。活動休止期間中の月会費は1,650円です。",
  },
  {
    q: "ツヴァイで1年活動するといくらかかりますか？",
    a: "ご紹介プランで1年間活動した場合、入会初期費用118,800円＋月会費15,950円×12ヶ月＝310,200円で、成婚料はかかりません。IBJプランでは129,800円＋18,700円×12ヶ月＝354,200円で、IBJ会員と成婚した場合は成婚料220,000円を加えて574,200円が目安です（オプションを除く当サイトの試算）。",
  },
  {
    q: "ツヴァイの割引制度はありますか？",
    a: "公式サイトでは、20代割（ご紹介プランの入会初期費用60,500円・月会費12,100円）、のりかえ割（入会料金85,800円・IBJ加盟店からののりかえは対象外）、再入会割（59,400円）、医療に従事する女性向けのメディカルワーカー割（107,800円）を案内しています（2026年10月23日確認）。",
  },
  {
    q: "ツヴァイの会員数は何人ですか？",
    a: "公式サイトでは11.7万人と公表しています。これは2026年6月末時点のZWEI登録会員数25,949名とIBJ会員数109,712名の合計から、重複18,866名を除いた人数です。",
  },
  {
    q: "ツヴァイの入会条件はありますか？",
    a: "20歳以上の独身の方が対象です。入会時には独身証明書・収入証明書・本人確認書類などの提出が必要です。詳しい条件は公式サイトまたは無料相談でご確認ください。",
  },
  {
    q: "ツヴァイはオンラインでも活動できますか？",
    a: "公式サイトではマッチング無料体験の予約を受け付けており、店舗での相談に加えてオンラインでの活動にも対応しています。詳しい活動方法は無料相談でご確認ください。",
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
          ツヴァイの口コミ・評判｜料金・会員数・サポートを解説
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月23日（料金・会員数は2026年10月23日に公式サイトで確認）</p>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <img src="/ss-zwei.jpg" alt="ツヴァイ 公式サイト" className="w-full h-auto" />
          <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: 公式サイトより</p>
        </div>

        {/* Overview table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="bg-[#A08447] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            ツヴァイの強み・特徴
          </h2>
          <div className="space-y-6">
            {strengths.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-medium text-lg mb-2 text-[#A08447] tracking-wider">{s.title}</h3>
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
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">ツヴァイ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">オーネット</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">パートナーエージェント</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">15,950円〜</td><td className="px-4 py-3 text-center">13,200円〜</td><td className="px-4 py-3 text-center">14,300円〜</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">118,800円〜</td><td className="px-4 py-3 text-center">99,000円〜</td><td className="px-4 py-3 text-center">99,000円〜（登録料込み）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">会員数</td><td className="px-4 py-3 text-center">11.7万人（IBJ会員を含む）</td><td className="px-4 py-3 text-center">12.1万人（IBJ会員を含む）</td><td className="px-4 py-3 text-center">192,000人（3連盟の合計）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">ハイブリッド型</td><td className="px-4 py-3 text-center">データマッチング型</td><td className="px-4 py-3 text-center">仲人型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">全国54店舗・ご紹介プランは成婚料0円</td><td className="px-4 py-3 text-center">オーネット会員同士の成婚は成婚料0円</td><td className="px-4 py-3 text-center">成婚料220,000円</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            ツヴァイの評判・口コミの傾向
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            「ツヴァイ 評判」「ツヴァイ 口コミ」で調べる方向けに、寄せられる声の<strong>良い評判・気になる評判</strong>を傾向ごとに整理しています。感じ方には個人差があるため、実際の評判は無料相談で直接確認することをおすすめします。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50/50 rounded-xl p-6">
              <h3 className="font-medium text-green-800 mb-4 tracking-wider">良い評判の傾向</h3>
              <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>会員数が多く出会いの幅が広いという声が見られます</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>全国展開で地方在住でも利用しやすいと評価する傾向があります</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>データマッチングと仲人型を併用できる点を評価する声が多い傾向です</li>
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            ツヴァイと他社の比較
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            ツヴァイが自分に合うか迷う場合は、料金総額・会員数・サポート形式を他社と比較することをおすすめします。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（24社一覧）を見る</Link></li>
            <li><Link href="/review/onet/" className="text-[#A08447] underline">オーネットの評判・料金を見る</Link></li>
            <li><Link href="/review/partner-agent/" className="text-[#A08447] underline">パートナーエージェントの評判・料金を見る</Link></li>
            <li><Link href="/review/sunmarie/" className="text-[#A08447] underline">サンマリエの評判・料金を見る</Link></li>
            <li><Link href="/review/wellsma/" className="text-[#A08447] underline">ウェルスマの評判・料金を見る（店舗に通わずIBJ会員と出会えるオンライン仲人型）</Link></li>
            <li><Link href="/review/excellence-aoyama/" className="text-[#A08447] underline">エクセレンス青山の評判・料金を見る（4連盟・エグゼクティブ向け仲人型）</Link></li>
          </ul>
        </section>

        {/* 口コミの傾向(編集部要約) */}
              <FeePosition slug="zwei" />

<section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">口コミの傾向（当サイトによる要約・2026年9月5日取得）</h2>
          <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-6 space-y-3 text-sm leading-relaxed text-[#555]">
            <p><span className="font-medium text-[#A08447]">よく見られる好意的な声</span>：「約1年で成婚退会できた」「担当カウンセラーが前向きに支えてくれた」という成婚報告と担当者への感謝が中心です。「条件・価値観・コンサルタント紹介など複数の出会い方を使い分けられる」点を効率面で評価する声や、面談を対面・電話・Webで調整できた柔軟さへの言及もあります。IBJプラン併用で成婚したという報告も複数あります。</p>
            <p><span className="font-medium text-rose-700">気になる声</span>：最も多い不満は<span className="font-medium">「問い合わせへの返信が遅い」「こちらから相談しない限り放っておかれる」</span>というサポートの受け身さです。手厚い介入を希望する方よりも、自分で活動を進め、必要な時だけ相談したい方に適した仕組みといえます。成婚退会後のトラブル（婚約解消）に触れた声もあります。成婚退会は入籍を意味するものではない点は、結婚相談所全般に共通する注意点です。</p>
            <p className="text-xs text-[#999]">※Googleマップの複数店舗(東京銀座・大阪・名古屋)の直近口コミをPlaces APIで取得し、当サイトが内容を確認したうえで傾向を要約したものです（本文の転載は行っていません）。個々の体験は店舗・担当者・時期により異なります。</p>
          </div>
        </section>

        {/* FAQ */}

        <FlowGuide name={overview.name} initialFee={overview.initialFee} monthlyFee={overview.monthlyFee} matchingFee={overview.matchingFee} />
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            よくある質問
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-[#FAFAF8] rounded-xl border border-gray-100">
                <summary className="cursor-pointer px-6 py-4 font-normal text-[#2C2C2C] flex items-center justify-between tracking-wider">
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-[#A08447] text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-[#2C2C2C]/60 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        

        <section className="bg-[#333333] rounded-2xl p-10 text-white text-center mb-12">
          <h2 className="text-xl font-light mb-4 tracking-widest">ツヴァイの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">マッチング無料体験の予約は公式サイトから行えます</p>
          <Link
            href="/"
            className="inline-block bg-[#A08447] hover:bg-[#8A7239] text-white font-normal py-3 px-8 rounded-full transition-colors tracking-widest"
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
                className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm font-normal hover:border-[#A08447] hover:text-[#A08447] transition-colors tracking-wider"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </section>
      <AuthorBox />
      <BrandStores href="/review/zwei/" brandName="ツヴァイ" />

      </article>
    </>
  );
}
