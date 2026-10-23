import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FeePosition from "@/components/FeePosition";
import AuthorBox from "@/components/AuthorBox";
import FlowGuide from "@/components/FlowGuide";
import BrandStores from "@/components/BrandStores";

export const metadata = {
  title: "ムスベルの評判・口コミ・料金｜「やばい」と検索される理由を解説【2026年】",
  description:
    "ムスベルの評判・口コミ・料金を解説しています。3コースの入会時費用181,500円〜484,000円・月会費16,500円〜・成婚料330,000円（2026年10月23日公式確認）と1年総額、「やばい」と検索される理由、4連盟が使える特徴を整理しています。",
};

const overview = {
  name: "ムスベル",
  type: "ハイブリッド型（仲人＋データマッチング）",
  members: "94,763人（4連盟の合計として公式サイトに掲載・2024年10月時点の値）",
  area: "全国対応（拠点数は公式サイト参照）",
  initialFee: "初期費用33,000円＋入会金148,500円（カジュアル）／330,000円（レギュラー）／451,000円（エクセレント）",
  monthlyFee: "16,500円（カジュアル・レギュラー）／17,000円（エクセレント）",
  matchingFee: "330,000円（成婚退会時・全コース共通）",
  age: "20〜60代（中心は30代〜40代）",
  successRate: "非公開",
};

const strengths = [
  {
    title: "複数の結婚相談所連盟に加盟した会員基盤",
    desc: "公式サイトでは、JBU・BIU・IBJ・TMSの4連盟を利用できると記載しています（一部の連盟は地域により利用不可、または別途オプション費用が必要）。1つの連盟のみに加盟する相談所と比べて、出会いの選択肢を広げやすい点が特徴です（公式掲載の会員数は94,763人・2024年10月時点の値）。",
  },
  {
    title: "仲人型とデータマッチングのハイブリッド対応",
    desc: "専任の仲人によるきめ細かい紹介に加え、データマッチングも併用できるハイブリッド型です。ご自身に合ったスタイルで婚活を進められ、出会いの質と量の両立を図っています。",
  },
  {
    title: "全国に拠点を展開し、地方でも活動しやすい体制",
    desc: "全国に拠点を展開しており、地方在住の方でも対面でのカウンセリングが受けられます。転勤や引っ越しがあっても最寄りの拠点でサポートを継続できます（拠点数は公式サイト参照）。",
  },
];

const pros = [
  "4つの連盟の会員ネットワークを利用できる（公式掲載の会員数は94,763人）",
  "仲人型+データマッチングの両方が使える",
  "全国に拠点があり地方でも利用可能",
];

const cons = [
  "成婚料33万円は業界でも高めの水準",
  "入会時費用は最も安いカジュアルコースでも181,500円かかる",
  "カジュアルコースはお見合い1回ごとに11,000円かかる",
  "拠点によりカウンセラーの対応に差が出る場合がある",
];

const faqs = [
  {
    q: "ムスベルが「やばい」と検索されるのはなぜですか？",
    a: "「ムスベル やばい」と検索されることがありますが、詐欺的という意味ではなく、成婚料330,000円を含む総額への不安が主な理由と考えられます。ムスベルは全国展開・複数連盟加盟の正規の結婚相談所です。無料相談で料金体系を確認しておくことで、入会後のミスマッチを防げます（料金は2026年10月23日に公式サイトで確認した値です）。",
  },
  {
    q: "ムスベルの評判・口コミはどうですか？",
    a: "「出会いの選択肢が多い」「地方でも活動しやすい」「仲人とデータ検索を併用できる」といった良い評判がある一方、「総額が高い」「会員が多く絞りにくい」という気になる声もあります。感じ方には個人差があるため、実際の評判は無料相談で確認することをおすすめします。",
  },
  {
    q: "ムスベルの料金は総額いくらかかりますか？",
    a: "公式サイトの料金（税込・2026年10月23日確認）は、カジュアルコースが初期費用33,000円＋入会金148,500円・月会費16,500円・お見合い料11,000円/回、レギュラーコースが初期費用33,000円＋入会金330,000円・月会費16,500円（お見合い料無料）、エクセレントコースが初期費用33,000円＋入会金451,000円・月会費17,000円です。成婚料は全コース共通で330,000円、更新時は更新料55,000円がかかります。カジュアルコースで1年活動して成婚した場合の総額目安は約709,500円（お見合い料を除く）です。",
  },
  {
    q: "ムスベルの入会条件はありますか？",
    a: "20歳以上の独身の方が入会可能です。男性は安定した収入があることが条件です。入会時には独身証明書、収入証明書、本人確認書類、卒業証明書が必要です。",
  },
  {
    q: "ムスベルが加盟している連盟はどこですか？",
    a: "公式サイトでは、JBU・BIU・IBJ・TMSの4連盟を利用できると記載しています。一部の連盟は地域により利用できず、利用に別途オプション申込と費用が必要な連盟もあります（2026年10月23日確認）。",
  },
  {
    q: "ムスベルの無料相談では何ができますか？",
    a: "無料相談では、専任カウンセラーとの面談、サービスの詳細説明、料金プランの案内、婚活に関するアドバイスが受けられます。入会を強制されることはありません。",
  },
  {
    q: "ムスベルの退会方法を教えてください",
    a: "担当カウンセラーに退会の意思を伝え、所定の手続きを行います。成婚退会の場合は成婚料330,000円が発生します。中途退会の場合、契約内容に応じた精算が行われます。",
  },
  {
    q: "ムスベルはオンラインでも活動できますか？",
    a: "はい、オンラインでのカウンセリングやお見合いに対応しています。全国どこからでも活動を進められますが、初回面談は来店が推奨されています。",
  },
  {
    q: "ムスベルの成婚退会までの平均期間はどのくらいですか？",
    a: "個人差がありますが、活動開始から6ヶ月〜1年程度で成婚退会される方が多い傾向です。会員数が多いため出会いの機会が豊富で、比較的スムーズに活動が進む方も多く見られます。",
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
  { name: "フィオーレ", path: "/review/fiore/" },
  { name: "サンマリエ", path: "/review/sunmarie/" },
  { name: "リングベル", path: "/review/ringbell/" },
  { name: "nikoブライダル（大阪）", path: "/review/niko-bridal/" },
];

export default function MusbellReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "ムスベル" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          ムスベルの口コミ・評判｜料金・特徴・サポートを解説
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月23日（料金は2026年10月23日に公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />ムスベルの特徴と適している方
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>評判・口コミ</strong>：複数連盟加盟による「出会いの多さ」と仲人サポートを評価する声が中心です。一方で成婚料を含む総額の高さを指摘する声もあります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>「やばい」と検索される理由</strong>：詐欺的という意味ではなく、<strong>成婚料330,000円を含む総額への不安</strong>が主な理由と考えられます。ムスベルは正規の結婚相談所です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>料金</strong>：入会時費用181,500円〜＋月会費16,500円〜＋成婚料330,000円。カジュアルコースで1年で成婚した場合の総額目安は<strong>約70.9万円</strong>です（2026年10月23日公式確認・お見合い料を除く試算）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>適している方</strong>：会員数の多さを重視する方、地方在住で対面サポートを受けたい方、仲人とデータ検索を併用したい方に適しています。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本ページの料金は2026年10月23日に公式サイトで確認した値（税込）です。会員数は公式サイト掲載の2024年10月時点の値です。ご利用前に、<strong>公式サイトおよび無料相談</strong>にて最新の数値・契約条件をご確認ください。</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <img src="/ss-musbell.jpg" alt="ムスベル 公式サイト" className="w-full h-auto" />
          <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: 公式サイトより</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="bg-[#A08447] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">ムスベルの強み・特徴</h2>
          <div className="space-y-6">
            {strengths.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-medium text-lg mb-2 text-[#A08447] tracking-wider">{s.title}</h3>
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
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">ムスベル</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">ツヴァイ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">サンマリエ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">16,500円〜</td><td className="px-4 py-3 text-center">15,950円〜</td><td className="px-4 py-3 text-center">18,700円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">181,500円〜（初期費用＋入会金）</td><td className="px-4 py-3 text-center">118,800円〜</td><td className="px-4 py-3 text-center">165,000円（入会金＋初期活動費）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">会員数</td><td className="px-4 py-3 text-center">94,763人（4連盟・2024年10月時点の掲載値）</td><td className="px-4 py-3 text-center">11.7万人（IBJ会員を含む）</td><td className="px-4 py-3 text-center">101,240名（IBJ）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">ハイブリッド型</td><td className="px-4 py-3 text-center">ハイブリッド型</td><td className="px-4 py-3 text-center">仲人型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">4連盟を利用可能</td><td className="px-4 py-3 text-center">全国54店舗</td><td className="px-4 py-3 text-center">1981年創業・23店舗</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">ムスベルの料金プランと総額の目安</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            「ムスベル 料金」で確認しておきたいのは、月会費だけでなく<strong>入会から成婚までにかかる総額</strong>です。公表されている料金をもとに、1年間活動した場合の総額の目安を整理しています。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">初期費用</td><td className="px-4 py-3">181,500円〜（初期費用33,000円＋入会金148,500円・カジュアルコース。レギュラーは363,000円、エクセレントは484,000円）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">月会費</td><td className="px-4 py-3">16,500円〜（エクセレントは17,000円）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">成婚料</td><td className="px-4 py-3">330,000円（成婚退会時）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">1年活動の総額目安（成婚なし）</td><td className="px-4 py-3">約379,500円〜（初期181,500＋月16,500×12・カジュアルコース）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">1年で成婚した場合の総額目安</td><td className="px-4 py-3 font-medium">約709,500円〜（上記＋成婚料330,000）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※金額はすべて税込で、2026年10月23日にムスベル公式サイトの「コース・料金」ページで確認した値です。カジュアルコースはお見合い1回ごとに11,000円がかかり、更新時には更新料55,000円がかかります。一部の連盟の利用には別途オプション費用が必要です。成婚料が総額に占める割合が大きいため、「成婚したら払う費用」として事前に把握しておくことが大切です。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">「ムスベル やばい」と検索される理由</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            「ムスベル やばい」と検索されることがありますが、これは詐欺的という意味ではなく、<strong>料金（特に成婚料）への不安</strong>が主な理由と考えられます。以下に、事実をもとに整理しています。
          </p>
          <div className="space-y-3">
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-medium text-[#2C2C2C] mb-1">理由①：成婚料33万円は業界でも高めの水準</h3>
              <p className="text-sm text-[#2C2C2C]/70">ムスベルは成婚退会時に成婚料330,000円が発生します。入会時費用181,500円〜・月会費16,500円〜と合わせ、活動が長引くほど総額が上がるため「高い＝やばい」と感じる方がいます。一方で、4連盟の会員から探せる点や専任仲人の少人数担当制を重視する方もおり、費用に見合うかどうかは、何を重視するかによって異なります。</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-medium text-[#2C2C2C] mb-1">理由②：複数連盟加盟により会員数が多く、相手を選びにくい</h3>
              <p className="text-sm text-[#2C2C2C]/70">複数の結婚相談所連盟に加盟し出会いの幅が広い反面、「相手が多くて絞れない」と戸惑う声もあります。仲人による紹介とデータ検索を併用し、担当カウンセラーに条件を相談して絞り込むことをおすすめします。</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-medium text-[#2C2C2C] mb-1">まとめ：料金体系を理解したうえでの検討をおすすめします</h3>
              <p className="text-sm text-[#2C2C2C]/70">ムスベルは全国に拠点を持ち、複数の連盟に加盟する正規の結婚相談所です（拠点数・会員数は公式参照）。「やばい」と検索される主な理由は、成婚料を含む総額への不安です。<strong>無料相談で総額（初期費用＋月会費×想定活動月数＋成婚料）の見積もりを確認</strong>しておくことで、入会後のミスマッチを防げます。</p>
            </div>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-3">※料金は2026年10月23日に公式サイトで確認した値です。契約条件は公式サイトおよび無料相談でご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">ムスベルの評判・口コミの傾向まとめ</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            「ムスベル 評判」「ムスベル 口コミ」で調べる方に向けて、寄せられている声を<strong>良い評判・気になる評判</strong>の傾向ごとに整理しています。個別の体験談は下のセクションに掲載しています。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50/50 rounded-xl p-6">
              <h3 className="font-medium text-green-800 mb-4 tracking-wider">良い評判の傾向</h3>
              <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>複数連盟加盟で「他社では会えない人と出会えた」という声</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>全国展開のため地方在住でも活動しやすいという声</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>仲人の紹介とデータ検索の両方を使えるという声</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>担当カウンセラーが親身という声</li>
              </ul>
            </div>
            <div className="bg-red-50/50 rounded-xl p-6">
              <h3 className="font-medium text-red-800 mb-4 tracking-wider">気になる評判の傾向</h3>
              <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
                <li className="flex gap-2"><span className="text-red-400 shrink-0">-</span>成婚料を含めた総額が高いと感じる声</li>
                <li className="flex gap-2"><span className="text-red-400 shrink-0">-</span>会員数が多く「相手を絞りにくい」という声</li>
                <li className="flex gap-2"><span className="text-red-400 shrink-0">-</span>カウンセラーの対応に拠点・担当者差を感じる声</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※上記は当サイトが収集・整理した口コミ傾向です。感じ方には個人差があり、評価は担当者・プランによっても異なります。実際の評判は無料相談で直接確認することをおすすめします。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">ムスベルと他社を比較して選ぶ</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            ムスベルがご自身に合うかを判断する際は、同じく仲人サポートのある相談所と総額・特徴を比較することをおすすめします。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/ibj-vs-musbell/" className="text-[#A08447] underline">IBJメンバーズとムスベルを比較する（IBJ直営と加盟店の違い・成婚までの総額）</Link></li>
            <li><Link href="/compare/sunmarie-vs-musbell/" className="text-[#A08447] underline">サンマリエとムスベルを比較する（仲人型どうしの実質総額・サポートの型）</Link></li>
            <li><Link href="/compare/musbell-vs-ringbell/" className="text-[#A08447] underline">ムスベルとリングベルを比較する（料金総額・対象年代・特徴）</Link></li>
            <li><Link href="/compare/tulip-vs-musbell/" className="text-[#A08447] underline">ブライダルチューリップとムスベルを比較する（料金・成婚率・サポート）</Link></li>
            <li><Link href="/compare/folli-vs-musbell/" className="text-[#A08447] underline">フォリパートナーとムスベルを比較する（料金・成婚率・サポート）</Link></li>
            <li><Link href="/review/ringbell/" className="text-[#A08447] underline">リングベルの評判・料金を見る（仲人型・地域密着）</Link></li>
            <li><Link href="/review/marriage-pro/" className="text-[#A08447] underline">マリッジプロの評判・料金を見る（プロカウンセラー専任）</Link></li>
            <li><Link href="/review/folli-partner/" className="text-[#A08447] underline">フォリパートナーの評判・料金を見る（同じIBJ仲人型・毎月の紹介人数保証付き）</Link></li>
            <li><Link href="/review/wellsma/" className="text-[#A08447] underline">ウェルスマの評判・料金を見る（仲人サポートを月11,800円〜のオンラインで受けたい方向け）</Link></li>
            <li><Link href="/compare/cheap/" className="text-[#A08447] underline">安い結婚相談所を1年総額で比較する（初期費用＋月会費＋成婚料）</Link></li>
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（24社一覧）を見る</Link></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚相談所の基礎知識で判断材料を増やす</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">ムスベルがご自身に合うかを判断する際は、料金の相場やタイプの違い、活動の流れといった基礎知識もあわせて確認すると判断しやすくなります。</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/knowledge/cost/" className="text-[#A08447] underline">結婚相談所の料金相場は？初期費用・月会費・成婚料の目安</Link></li>
            <li><Link href="/knowledge/how-to-choose/" className="text-[#A08447] underline">結婚相談所の選び方｜仲人型とデータマッチング型の違い</Link></li>
            <li><Link href="/knowledge/flow/" className="text-[#A08447] underline">結婚相談所の入会から成婚までの流れ・活動期間の目安</Link></li>
          </ul>
        </section>

        <FlowGuide name={overview.name} initialFee={overview.initialFee} monthlyFee={overview.monthlyFee} matchingFee={overview.matchingFee} />

              <FeePosition slug="musbell" />

<section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">よくある質問</h2>
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

        

        <section className="bg-[#333333] rounded-2xl p-10 text-white text-center mb-12">
          <h2 className="text-xl font-light mb-4 tracking-widest">ムスベルの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">複数連盟に加盟するムスベルの無料相談をご利用いただけます</p>
          <Link href="/" className="inline-block bg-[#A08447] hover:bg-[#8A7239] text-white font-normal py-3 px-8 rounded-full transition-colors tracking-widest">ランキングに戻る</Link>
        </section>

        <section>
          <h2 className="text-lg font-light mb-4 tracking-widest">他の結婚相談所も見る</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link key={s.name} href={s.path} className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm font-normal hover:border-[#A08447] hover:text-[#A08447] transition-colors tracking-wider">{s.name}</Link>
            ))}
          </div>
        </section>
      <AuthorBox />
      <BrandStores href="/review/musbell/" brandName="ムスベル" />

      </article>
    </>
  );
}
