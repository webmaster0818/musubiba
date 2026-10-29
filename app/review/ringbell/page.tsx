import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";
import FlowGuide from "@/components/FlowGuide";
import BrandStores from "@/components/BrandStores";

export const metadata = {
  title: "リングベル（結婚相談所）の口コミ・評判｜料金・成婚料を中立的に解説【2026年】",
  description:
    "リングベル（結婚相談所）の口コミ・評判を中立的な立場で整理しています。月会費17,600円・入会金55,000〜242,000円・成婚料109,800〜220,000円（プラン別・2026年10月26日公式確認）の総額目安、評判の傾向、入会条件やオンライン対応について解説しています。",
};

const overview = {
  name: "リングベル",
  type: "IBJ加盟のオンライン結婚相談所（担当コンシェルジュ制）",
  members: "自社の会員数の公表なし（IBJの会員111,160名〔2026年9月末時点〕と出会えると公式サイトに記載）",
  area: "全国（入会手続きからサポートまでオンラインで完結／本社 大阪市中央区・東京オフィス 港区浜松町）",
  initialFee: "55,000〜242,000円（入会金・ベーシック55,000円／ハイブリッド88,000円／コミットメント242,000円・税込／2026年10月26日公式確認）",
  monthlyFee: "17,600円（全プラン共通・税込）",
  matchingFee: "109,800〜220,000円（ベーシック109,800円／ハイブリッド・コミットメント220,000円・成婚退会時・税込）",
  age: "入会資格は男性20〜44歳・女性20〜39歳（男性は年収500万円以上）",
  successRate: "54.8%（担当コンシェルジュが付くIBJ系プランの入会者のうち、2026年8月時点までの退会者に占める成婚退会者の割合・全期間累計・自社集計）",
};

const strengths = [
  {
    title: "入会手続きからサポートまでオンラインで完結",
    desc: "公式サイトでは、入会手続きからサポートまでオンラインで完結し、お住まいの地域を問わず利用できると案内されています。お見合いは基本的に対面で行い、お相手と双方が合意すればオンラインでも実施できます（公式サイト記載・2026年10月26日確認）。",
  },
  {
    title: "IBJ正規加盟で、他の連盟もオプションで追加可能",
    desc: "IBJの会員111,160名（2026年9月末時点）から希望条件で相手を検索できます。お見合いの申し込みは全プラン月100件までで、IBJ以外の連盟もオプションで追加できます（公式サイト記載・2026年10月26日確認）。",
  },
  {
    title: "担当コンシェルジュへのLINE相談は全プラン無制限",
    desc: "活動中の相談は、担当コンシェルジュにLINEで回数の制限なく行えます。面談の頻度はベーシックが2〜3ヶ月に1回程度、ハイブリッドとコミットメントが月1回で、ハイブリッド以上は成婚に向けた婚活プラン設計が含まれます（公式サイト記載・2026年10月26日確認）。",
  },
];

const pros = [
  "入会手続きからサポートまでオンラインで完結し、地域を問わず利用できる",
  "担当コンシェルジュへのLINE相談が全プランで無制限",
  "お見合い料がかからず、ベーシックプランは成婚料109,800円",
];

const cons = [
  "入会資格に年齢の上限（男性44歳・女性39歳）と、男性の年収条件（500万円以上）がある",
  "月会費は全プランとも17,600円で、月会費が1万円前後の相談所と比べると毎月の負担は大きい",
  "成婚料はハイブリッド・コミットメントプランで22万円",
];

const faqs = [
  {
    q: "リングベル（結婚相談所）の評判・口コミはどうですか？",
    a: "当サイトが2026年10月26日に確認した範囲では、第三者サイトに掲載されているリングベルの利用者の口コミは、オリコン顧客満足度の結婚相談所ページの1件（20代女性・接客やサービスに満足したという内容）です。件数が少ないため、傾向としての評価は控えています。公式サイトには成婚者の声が掲載されています。",
  },
  {
    q: "リングベルの料金は総額いくらかかりますか？",
    a: "公式サイトの料金（税込・2026年10月26日確認）は、入会金がベーシック55,000円・ハイブリッド88,000円・コミットメント242,000円、月会費は全プラン共通で17,600円、成婚料はベーシック109,800円・ハイブリッドとコミットメント220,000円です。お見合い料は公式サイトで「お見合いのたびに弊社へお支払いいただく費用はありません」と案内されています。1年で成婚した場合の総額目安は、ベーシックで約376,000円、ハイブリッドで約519,200円です。お見合い時の飲食代・交通費、プロフィール写真の撮影費用は別途実費となります。ご利用前に、公式サイトにて最新の料金をご確認ください。",
  },
  {
    q: "リングベルの入会条件はありますか？",
    a: "公式サイトでは、独身の方（独身証明書の提出が全員必須）、男性は満20歳以上44歳以下・女性は満20歳以上39歳以下、男性は年収500万円以上かつ安定した職業の方を入会資格としており、入会時に審査があります（公式サイト記載・2026年10月26日確認）。必要書類は身分証明書・独身証明書・住民票のほか、男性は収入証明書が必須です。",
  },
  {
    q: "リングベルの「オンライン結婚相談所」とはどのようなサービスですか？",
    a: "契約などの手続きや担当コンシェルジュのサポートをオンライン（LINE・オンライン面談）で受ける形式です。お相手はIBJのアプリで検索して申し込むほか、お気に入り紹介やAIによる自社マッチングもあります。お見合いやデートは基本的に対面で行います（公式サイト記載・2026年10月26日確認）。",
  },
  {
    q: "リングベルの無料相談では何ができますか？",
    a: "無料相談はオンラインで60分程度行われ、サービス内容や料金プラン、ご自身に合うプランの説明を受けられます（公式サイト記載・2026年10月26日確認）。",
  },
  {
    q: "リングベルの退会方法を教えてください",
    a: "担当コンシェルジュに退会の意思を伝え、所定の手続きを行います。成婚退会の場合はプランに応じた成婚料（109,800円または220,000円）が発生します。中途退会の場合、契約内容に応じた精算が行われます。",
  },
  {
    q: "リングベルはオンラインでも活動できますか？",
    a: "はい。入会手続きからサポートまでオンラインで完結します。お見合いは基本的に対面ですが、お相手と双方が合意すればオンラインでも行え、日程調整やZoomの設定はコンシェルジュが行います（公式サイト記載・2026年10月26日確認）。",
  },
  {
    q: "リングベルの成婚退会までの平均期間はどのくらいですか？",
    a: "公式サイトでは、成婚までの期間を平均6.7ヶ月、成婚した方の89.5%が入会から1年以内に成婚していると記載しています（公式サイト記載・2026年10月26日確認）。いずれも自社集計の値で、期間には個人差があります。",
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
  { name: "サンマリエ", path: "/review/sunmarie/" },
  { name: "パートナーエージェント", path: "/review/partner-agent/" },
  { name: "マリッジプロ", path: "/review/marriage-pro/" },
  { name: "ムスベル", path: "/review/musbell/" },
  { name: "流山おおたかの森結婚相談所", path: "/review/nagareyama-otakanomori/" },
];

export default function RingbellReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "リングベル" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          リングベルの口コミ・評判｜料金・特徴・サポートを解説
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月26日（料金は公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />リングベルが適している方
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>特徴</strong>：IBJ加盟のオンライン結婚相談所で、入会手続きからサポートまでオンラインで完結します。担当コンシェルジュへのLINE相談は全プラン無制限です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>料金</strong>：入会金55,000円〜＋月会費17,600円＋成婚料109,800円〜です（プラン別・2026年10月26日公式確認）。ベーシックプランで1年で成婚した場合の総額目安は<strong>約376,000円</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>注意点</strong>：入会資格は男性20〜44歳・女性20〜39歳で、男性は年収500万円以上が条件です。月会費は全プラン17,600円です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>適している方</strong>：来店せずにオンラインで活動したい方、お住まいの地域を問わずIBJの会員から相手を探したい方、お見合い料をかけずに活動したい方です。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本ページの料金等は当サイトの調査・公表情報にもとづく目安です（2026年時点）。最新かつ正確な数値・契約条件は<strong>公式サイトおよび無料相談</strong>で必ずご確認ください。</p>
        </div>

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
            <div className="flex px-6 py-3.5 text-sm">
              <span className="w-28 shrink-0 font-medium text-[#2C2C2C]/50 tracking-wider">運営会社</span>
              <span className="text-[#2C2C2C]">株式会社RINGBELL（公式サイトの特定商取引法に基づく表記に記載）</span>
            </div>
            <div className="flex px-6 py-3.5 text-sm">
              <span className="w-28 shrink-0 font-medium text-[#2C2C2C]/50 tracking-wider">公式サイト</span>
              <span className="text-[#2C2C2C]"><a href="https://ringbell-marriage.com/" target="_blank" rel="noopener noreferrer" className="text-[#A08447] underline">リングベル（ringbell-marriage.com）</a></span>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">リングベルの強み・特徴</h2>
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
              {pros.map((p) => (
                <li key={p} className="text-sm text-[#2C2C2C]/70 flex gap-2"><span className="text-green-500 shrink-0">+</span>{p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50/50 rounded-xl p-6">
            <h3 className="font-medium text-red-800 mb-4 tracking-wider">デメリット</h3>
            <ul className="space-y-2">
              {cons.map((c) => (
                <li key={c} className="text-sm text-[#2C2C2C]/70 flex gap-2"><span className="text-red-400 shrink-0">-</span>{c}</li>
              ))}
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
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">リングベル</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">サンマリエ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">パートナーエージェント</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">17,600円</td><td className="px-4 py-3 text-center">16,500円〜</td><td className="px-4 py-3 text-center">18,700円〜</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">55,000円〜</td><td className="px-4 py-3 text-center">165,000円（入会金＋初期活動費）</td><td className="px-4 py-3 text-center">137,500円〜</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">会員数</td><td className="px-4 py-3 text-center">111,160名（IBJ・2026年9月末）</td><td className="px-4 py-3 text-center">101,240名（IBJ）</td><td className="px-4 py-3 text-center">約2.9万人</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">オンライン型（IBJ加盟）</td><td className="px-4 py-3 text-center">仲人型</td><td className="px-4 py-3 text-center">仲人型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">オンライン完結</td><td className="px-4 py-3 text-center">お見合い代行</td><td className="px-4 py-3 text-center">成婚率27%</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">リングベルの料金プランと総額の目安</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            「リングベル 料金」で気になるのは、月会費だけでなく<strong>入会から成婚までにかかる総額</strong>です。公表されている料金をもとに、1年間活動した場合の総額の目安を整理しています。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">ベーシック</td><td className="px-4 py-3">入会金55,000円／月会費17,600円／成婚料109,800円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">ハイブリッド</td><td className="px-4 py-3">入会金88,000円／月会費17,600円／成婚料220,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">コミットメント</td><td className="px-4 py-3">入会金242,000円／月会費17,600円／成婚料220,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">共通</td><td className="px-4 py-3">お見合い料なし（公式記載）・20代割（入会時点で20〜29歳の方は入会金から22,000円割引）・休会中の月会費2,200円・契約期間1年（自動更新・更新料なし）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">1年活動の総額目安（成婚なし）</td><td className="px-4 py-3">ベーシック: 約266,200円（55,000＋17,600×12）／ハイブリッド: 約299,200円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">1年で成婚した場合の総額目安</td><td className="px-4 py-3 font-medium">ベーシック: 約376,000円（上記＋成婚料109,800）／ハイブリッド: 約519,200円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">※すべて税込で、リングベル公式サイトの<a href="https://ringbell-marriage.com/price" target="_blank" rel="noopener noreferrer" className="underline">料金プランページ</a>にて2026年10月26日に確認した料金です。お見合い時の飲食代・交通費、プロフィール写真の撮影費用は別途実費となります。正確な総額は無料相談での見積もりをご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">リングベルの口コミ・評判の傾向</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            当サイトが2026年10月26日に確認した範囲では、第三者サイトに掲載されているリングベルの利用者の口コミは、オリコン顧客満足度の結婚相談所ページの1件（20代女性・接客やサービスに満足したという内容）です。件数が少ないため、良い評判・気になる評判の傾向としての整理は控えています。公式サイトには成婚者の声（インタビュー）が掲載されています。
          </p>
          <p className="text-xs text-[#2C2C2C]/50 mt-3">※当サイトでは口コミの創作は行っていません。最新の条件は公式サイト・無料相談でご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">リングベルと他社を比較して選ぶ</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            結婚相談所は、料金総額やサポートの形式（対面・オンライン）が相談所ごとに異なります。リングベルがご自身に合うかどうか、他社と比較して検討することをおすすめします。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/musbell-vs-ringbell/" className="text-[#A08447] underline">ムスベルとリングベルを比較する（料金総額・対象年代・特徴）</Link></li>
            <li><Link href="/review/musbell/" className="text-[#A08447] underline">ムスベルの評判・料金を見る（全国・複数連盟加盟）</Link></li>
            <li><Link href="/review/marriage-pro/" className="text-[#A08447] underline">マリッジプロの評判・料金を見る（20代・30代専門・新宿）</Link></li>
            <li><Link href="/review/bridal-tulip/" className="text-[#A08447] underline">ブライダルチューリップの評判・料金を見る（3連盟・月会費7,550円〜の仲人型）</Link></li>
            <li><Link href="/review/wellsma/" className="text-[#A08447] underline">ウェルスマの評判・料金を見る（来店不要のオンライン仲人型・月会費11,800円〜）</Link></li>
            <li><Link href="/compare/cheap/" className="text-[#A08447] underline">安い結婚相談所を1年総額で比較する（初期費用＋月会費＋成婚料）</Link></li>
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（24社一覧）を見る</Link></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">判断に役立つ結婚相談所の基礎知識</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">リングベルがご自身に合うか迷われた場合は、料金の相場やタイプの違い、活動の流れといった基礎知識もあわせて確認すると判断しやすくなります。</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/knowledge/cost/" className="text-[#A08447] underline">結婚相談所の料金相場は？初期費用・月会費・成婚料の目安</Link></li>
            <li><Link href="/knowledge/how-to-choose/" className="text-[#A08447] underline">結婚相談所の選び方｜仲人型とデータマッチング型の違い</Link></li>
            <li><Link href="/knowledge/flow/" className="text-[#A08447] underline">結婚相談所の入会から成婚までの流れ・活動期間の目安</Link></li>
          </ul>
        </section>

        <FlowGuide name={overview.name} initialFee={overview.initialFee} monthlyFee={overview.monthlyFee} matchingFee={overview.matchingFee} />

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
          <h2 className="text-xl font-light mb-4 tracking-widest">リングベルの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">オンラインの無料相談で、サービス内容と料金プランをご確認いただけます</p>
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
      <BrandStores href="/review/ringbell/" brandName="リングベル" />

      </article>
    </>
  );
}
