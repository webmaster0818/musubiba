import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";
import A8Banner from "@/components/A8Banner";
import FlowGuide from "@/components/FlowGuide";

export const metadata = {
  title: "ブライダルチューリップの評判は？料金3プラン・成婚率の定義まで公式情報で検証",
  description:
    "ブライダルチューリップ（株式会社ナウい運営・高田馬場）の評判・料金を公式情報で検証。IBJ・SCRUM・CONNECT-shipの3連盟で紹介可能会員約19万名、入会金105,000円〜・成婚料180,000円（税込・2026年7月確認）の料金3プラン、成婚率60%以上（自社公称）の算出定義まで正直に解説します。",
  alternates: { canonical: "/review/bridal-tulip/" },
};

const overview = {
  name: "ブライダルチューリップ",
  company: "株式会社ナウい（東京都豊島区高田3-10-22＝高田馬場）",
  type: "仲人型（IBJ・SCRUM・CONNECT-shipの3連盟に加盟）",
  members: "紹介可能会員数 約19万名（IBJ約10.5万＋SCRUM約6.7万＋CONNECT-ship約2.1万・2026年1月時点の公式表記）",
  area: "高田馬場サロン1拠点＋オンライン対応",
  initialFee: "入会金105,000円（42歳以上プランは150,800円・税込）",
  monthlyFee: "7,550円〜12,950円（税込・プランにより異なる）",
  omiaiFee: "6,100円または8,800円／件（プランにより異なる）",
  matchingFee: "180,000円（税込・全プラン共通）",
  successRate: "60%以上（自社公称・定義は本文参照）",
};

const strengths = [
  {
    title: "3連盟加盟で紹介可能会員は約19万名（2026年1月時点・公式表記）",
    desc: "IBJ（約10.5万名）に加え、SCRUM（約6.7万名）・CONNECT-ship（約2.1万名）にも加盟し、公式表記で合計約19万名のネットワークからお相手を探せます。IBJ単独加盟の相談所より母集団が広いのが構造的な強みです（各連盟の会員数は2026年1月時点の公式表記・重複会員を含む可能性があります）。",
  },
  {
    title: "面談回数無制限＋サブカウンセラーの「100人100通り」サポート",
    desc: "公式サイトでは「100人100通り」の個別サポートを掲げ、カウンセラーとの面談は回数無制限です。メイン担当に加えてサブカウンセラーが付く体制のため、一人の担当者との相性にすべてが依存しにくい設計になっています。",
  },
  {
    title: "AIマッチングとオンライン対応で活動を効率化",
    desc: "検索だけでなくAIによるお相手のマッチング提案があり、面談・活動はオンラインにも対応しています。拠点は高田馬場の1拠点ですが、遠方でもオンラインで活動を進められます。",
  },
  {
    title: "成婚率の「定義」を公開している透明性",
    desc: "成婚率60%以上・1年以内成婚率70%以上という数値について、算出定義（成婚率＝成婚退会者数÷全退会者数、1年以内成婚率＝成婚退会者のうち1年以内に成婚した割合・2010年〜2026年1月の実績）を公式に示しています。成婚率は定義次第で大きく変わる指標のため、定義を明示している点は評価できます（数値自体は自社公称です）。",
  },
];

const pros = [
  "3連盟加盟で紹介可能会員が約19万名と母集団が広い",
  "月会費7,550円〜と仲人型では低めの月額から始められる",
  "面談回数無制限＋サブカウンセラー体制",
  "成婚料180,000円は仲人型の相場（20万円前後）よりやや低め",
  "成婚率の算出定義を公式に開示している",
];

const cons = [
  "お見合い料（6,100円または8,800円／件）が都度かかり、活動量次第で総額が増える",
  "42歳以上は専用プランで入会金が150,800円と高くなる",
  "対面拠点は高田馬場の1ヶ所のみ",
  "成婚率60%以上は自社公称値であり、第三者機関の検証値ではない",
  "運営会社は結婚相談以外にEC等の複数事業を手がけており、専業ではない",
];

const faqs = [
  {
    q: "ブライダルチューリップの料金プランを教えてください",
    a: "税込・2026年7月確認の公式料金では3プランあります。42歳未満向けのAプラン（じっくり型）は入会金105,000円・月会費7,550円・お見合い料8,800円／件。同じく42歳未満向けのBプラン（活発型）は入会金105,000円・月会費12,950円・お見合い料6,100円／件。42歳以上プランは入会金150,800円・月会費11,250円・お見合い料8,800円／件です。成婚料は全プラン共通180,000円、お見合い申込みは月30件まで可能です。",
  },
  {
    q: "成婚率60%以上というのは本当ですか？",
    a: "成婚率60%以上・1年以内成婚率70%以上は公式サイトが公表する自社公称値です。定義は「成婚率＝成婚退会者数÷全退会者数」「1年以内成婚率＝成婚退会者のうち1年以内に成婚した割合」で、2010年〜2026年1月の実績とされています。定義が公開されている点は誠実ですが、第三者機関による検証値ではないため、参考値として捉え、無料相談で直近の実績を確認することをおすすめします。",
  },
  {
    q: "AプランとBプランはどちらを選ぶべきですか？",
    a: "月のお見合い回数で損益分岐が変わります。月会費の差は5,400円（12,950−7,550円）、お見合い料の差は1件2,700円（8,800−6,100円）のため、単純計算では月2件までならAプラン、月3件以上お見合いするならBプランのほうが総額を抑えやすい構造です。自分の活動ペースを無料相談で相談してから決めるのがおすすめです。",
  },
  {
    q: "運営会社はどんな会社ですか？",
    a: "運営は株式会社ナウい（東京都豊島区高田3-10-22）で、拠点は高田馬場です。結婚相談所のほかにEC等の複数事業を手がける企業です。相談所専業ではない点が気になる場合は、無料相談でサポート体制（カウンセラー人数・面談の実施形式）を確認しておくと安心です。",
  },
  {
    q: "地方在住でも利用できますか？",
    a: "対面拠点は高田馬場の1ヶ所ですが、オンライン面談に対応しているため遠方でも活動は可能です。お見合い自体はIBJなど連盟のシステム・オンラインお見合いを通じて行えます。対応の詳細は無料相談でご確認ください。",
  },
  {
    q: "最短でどのくらいで成婚できますか？",
    a: "公式サイトには最短44日での成婚事例が掲載されています（自社公称）。ただしこれは最も早い事例であり、全員に当てはまるものではありません。活動期間は個人差が大きいため、保証されるものではない点にご注意ください。",
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
  { name: "ムスベル", path: "/review/musbell/" },
  { name: "naco-do", path: "/review/naco-do/" },
  { name: "ヒーローマリッジ", path: "/review/hero-marriage/" },
  { name: "料金比較一覧", path: "/compare/" },
];

export default function BridalTulipReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "ブライダルチューリップ" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          ブライダルチューリップの評判は？料金3プラン・成婚率の定義まで公式情報で検証
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年7月（料金・実績は2026年7月に公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#8B7355] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#8B7355] rounded-full" />結論：ブライダルチューリップはこんな人に向く
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>特徴</strong>：IBJ・SCRUM・CONNECT-shipの<strong>3連盟加盟で紹介可能会員約19万名</strong>（2026年1月時点・公式表記）。面談回数無制限＋サブカウンセラーの手厚い仲人型です。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>料金</strong>：入会金105,000円〜＋月7,550円〜＋お見合い料6,100円〜／件＋成婚料180,000円（税込・3プラン）。月会費を抑えてお見合い都度払いにするか、その逆かを選べる構造です。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>実績</strong>：成婚率60%以上・1年以内成婚率70%以上（<strong>自社公称</strong>・定義＝成婚退会者数÷全退会者数、うち1年以内成婚の割合・2010年〜2026年1月実績）、成婚480組以上、最短44日。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>注意点</strong>：お見合い料が都度かかるため活動量で総額が変動します。第三者の口コミ一次情報は少なく、判断は無料相談での確認が中心になります（本文で見極めポイントを解説）。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本ページの料金・実績等は公式サイトの公表情報（2026年7月確認・税込）にもとづきます。最新かつ正確な数値・契約条件は<strong>公式サイトおよび無料相談</strong>で必ずご確認ください。</p>
        </div>

        <A8Banner ad="tulip" />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="bg-[#8B7355] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
          <div className="divide-y divide-gray-50">
            {Object.entries({
              サービス名: overview.name,
              運営会社: overview.company,
              タイプ: overview.type,
              会員数: overview.members,
              対応エリア: overview.area,
              入会金: overview.initialFee,
              月会費: overview.monthlyFee,
              お見合い料: overview.omiaiFee,
              成婚料: overview.matchingFee,
              成婚率: overview.successRate,
            }).map(([k, v]) => (
              <div key={k} className="flex px-6 py-3.5 text-sm">
                <span className="w-28 shrink-0 font-medium text-[#2C2C2C]/50 tracking-wider">{k}</span>
                <span className="text-[#2C2C2C]">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">ブライダルチューリップの強み・特徴</h2>
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
            <h3 className="font-medium text-red-800 mb-4 tracking-wider">デメリット・注意点</h3>
            <ul className="space-y-2">
              {cons.map((c) => (<li key={c} className="text-sm text-[#2C2C2C]/70 flex gap-2"><span className="text-red-400 shrink-0">-</span>{c}</li>))}
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">料金3プランと総額の目安（税込・2026年7月公式確認）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            プランは年齢と活動ペースで3つに分かれます。<strong>お見合い料が都度払い</strong>のため、総額は「入会金＋月会費×活動月数＋お見合い料×件数＋成婚料」で見積もりましょう。お見合い申込みは月30件まで、面談は回数無制限です。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">Aプラン（42歳未満・じっくり）</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">Bプラン（42歳未満・活発）</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">42歳以上プラン</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">入会金</td><td className="px-4 py-3 text-center">105,000円</td><td className="px-4 py-3 text-center">105,000円</td><td className="px-4 py-3 text-center">150,800円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">7,550円</td><td className="px-4 py-3 text-center">12,950円</td><td className="px-4 py-3 text-center">11,250円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">お見合い料</td><td className="px-4 py-3 text-center">8,800円／件</td><td className="px-4 py-3 text-center">6,100円／件</td><td className="px-4 py-3 text-center">8,800円／件</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">成婚料</td><td className="px-4 py-3 text-center" colSpan={3}>180,000円（全プラン共通）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">1年で成婚した場合の目安<br className="hidden sm:block" />（お見合い月1件＝年12件と仮定）</td><td className="px-4 py-3 text-center">約481,200円</td><td className="px-4 py-3 text-center">約513,600円</td><td className="px-4 py-3 text-center">約571,400円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※金額はすべて税込・2026年7月に公式サイトで確認した公表値です。総額目安は「入会金＋月会費×12＋お見合い料×12件＋成婚料180,000円」の当サイト試算で、お見合い件数により変動します。月のお見合いが3件以上ならBプランのほうが総額を抑えやすい構造です。仲人型の一般的な相場は<Link href="/knowledge/cost/" className="underline text-[#8B7355]">料金相場の解説</Link>をご参照ください。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">成婚率60%以上の「定義」を正しく読む</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            ブライダルチューリップは<strong>成婚率60%以上・1年以内成婚率70%以上</strong>（いずれも自社公称）を公表しており、算出定義も開示しています。定義は「<strong>成婚率＝成婚退会者数÷全退会者数</strong>」「<strong>1年以内成婚率＝成婚退会者のうち1年以内に成婚した割合</strong>」で、2010年〜2026年1月の実績とされています。累計の成婚実績は480組以上、最短成婚は44日（いずれも自社公称）です。
          </p>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
            注意したいのは、この定義が「退会者のうち成婚した人の割合」であり、「入会者全体のうち成婚した人の割合」ではない点です。分母の取り方によって成婚率は大きく変わるため、他社の成婚率と単純比較はできません。定義を開示している姿勢は業界内では誠実な部類ですが、数値は第三者検証値ではない参考値として捉え、無料相談で直近1年の実績を確認するのがおすすめです。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">口コミ・評判はある？見極め方（正直な解説）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            当サイトの調査（2026年7月時点）では、ブライダルチューリップについて<strong>出典を確認できる口コミの一次情報は確認できませんでした</strong>。当サイトは実在しない口コミを作成・掲載しない方針のため、代わりに公式情報から検討時の見極めポイントを整理します。
          </p>
          <ul className="space-y-3 text-sm text-[#2C2C2C]/70">
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">1.</span><span><strong>客観的事実を確認する</strong>：3連盟（IBJ・SCRUM・CONNECT-ship）加盟、料金・成婚率定義の開示、運営会社情報（株式会社ナウい・高田馬場）など、検証可能な情報は公開されています。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">2.</span><span><strong>無料相談で「直近の数字」を質問する</strong>：公称成婚率は2010年からの累計実績のため、直近1年の成婚退会数・自分と近い年齢層の活動事例を具体的に聞き、回答の具体性を判断材料にします。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">3.</span><span><strong>お見合い料込みの総額を試算する</strong>：月何件お見合いする想定か、その場合の年間総額はいくらかを面談で一緒に試算してもらい、想定外の出費がない構造かを確認しましょう。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">4.</span><span><strong>契約条件を書面で確認する</strong>：中途退会時の精算・休会制度・成婚の定義（どの時点で成婚料が発生するか）を必ず書面で確認しましょう。</span></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">他社と比較して選ぶ</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            ブライダルチューリップが自分に合うか迷ったら、月会費固定型・オンライン型と「お見合い料込みの総額」で見比べるのがおすすめです。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#8B7355] underline">結婚相談所の料金比較一覧を見る</Link></li>
            <li><Link href="/review/zwei/" className="text-[#8B7355] underline">ツヴァイの評判・料金を見る（大手・全国拠点）</Link></li>
            <li><Link href="/review/musbell/" className="text-[#8B7355] underline">ムスベルの評判・料金を見る（複数連盟加盟の仲人型大手）</Link></li>
            <li><Link href="/compare/tulip-vs-musbell/" className="text-[#8B7355] underline">ブライダルチューリップとムスベルを比較する（料金・成婚率・サポート）</Link></li>
            <li><Link href="/review/naco-do/" className="text-[#8B7355] underline">naco-doの評判・料金を見る（オンライン完結・低価格帯）</Link></li>
          </ul>
        </section>

        <FlowGuide name={overview.name} initialFee={overview.initialFee} monthlyFee={overview.monthlyFee} matchingFee={overview.matchingFee} />

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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">結婚相談所の基礎知識で判断材料を増やす</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/knowledge/cost/" className="text-[#8B7355] underline">結婚相談所の料金相場は？初期費用・月会費・成婚料の目安</Link></li>
            <li><Link href="/knowledge/how-to-choose/" className="text-[#8B7355] underline">結婚相談所の選び方｜仲人型とデータマッチング型の違い</Link></li>
            <li><Link href="/knowledge/flow/" className="text-[#8B7355] underline">結婚相談所の入会から成婚までの流れ・活動期間の目安</Link></li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-light mb-4 tracking-widest">他の結婚相談所も見る</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link key={s.name} href={s.path} className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm font-normal hover:border-[#8B7355] hover:text-[#8B7355] transition-colors tracking-wider">{s.name}</Link>
            ))}
          </div>
        </section>

      <A8Banner ad="tulip" />
      <AuthorBox />
      </article>
    </>
  );
}
