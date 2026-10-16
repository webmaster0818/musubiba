import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FeePosition from "@/components/FeePosition";
import AuthorBox from "@/components/AuthorBox";
import FlowGuide from "@/components/FlowGuide";
import BrandStores from "@/components/BrandStores";
import ReviewFacts from "@/components/ReviewFacts";

export const metadata = {
  title: "結婚相談所マーズカフェ（Marz cafe）の口コミ・評判｜料金3コース・成婚率72.5%の定義【2026年10月】",
  description:
    "東京・中野の結婚相談所マーズカフェの口コミ・評判を、掲載媒体を明記して整理しています。A/B/乗り換えの3コースの料金（2026年10月14日公式確認）、1年総額、成婚率72.5%の算出方法、運営会社（株式会社マーズ）についても掲載しています。",
};

const overview = {
  name: "結婚相談所マーズカフェ（Marz cafe）",
  type: "仲人型（IBJ・TMS加盟）",
  members: "約18万人（IBJ 104,859人＋TMS 87,430人・重複あり）",
  area: "東京・中野（Zoom面談で全国対応）",
  initialFee: "入会金66,000円＋登録料22,000円",
  monthlyFee: "7,700円（Aコース）／11,000円（Bコース）",
  matchingFee: "220,000円",
  age: "公式に年齢層の公表なし",
  successRate: "72.5%（2025年・成婚退会者÷全退会者／自社発表）",
};

const strengths = [
  {
    title: "成婚率72.5%を算出方法とあわせて公表",
    desc: "公式サイトは成婚率を「2025年1〜12月の成婚退会者÷全退会者＝72.5%」と定義を明記して公表し、成婚数は250人以上としています（2026年10月14日確認）。分母が「全退会者」の算出方法なので、他社の成婚率と比べるときは定義をそろえて比較することをおすすめします。",
  },
  {
    title: "IBJとTMSの2団体に加盟し約18万人から探せる",
    desc: "IBJ（104,859人・2025年12月時点）とTMS（87,430人・2023年11月時点）に加盟しています。両団体の会員は1〜2割が重複していると公式が注記しています。",
  },
  {
    title: "お見合い料の有無でコースを選べる",
    desc: "月会費7,700円でお見合い1件2,200円のAコースと、月会費11,000円でお見合い料0円のBコースがあり、どちらも申し込みは月100名まで、紹介は月3名以上、面談は無制限です。他社からの乗り換え限定コースは入会金が55,000円です。",
  },
];

const pros = [
  "成婚率72.5%を定義とあわせて公表している",
  "IBJ＋TMSで約18万人から探せる",
  "年中無休・10〜21時受付、Zoom面談で全国から相談できる",
];

const cons = [
  "成婚料220,000円で、1年総額は40万円台になる",
  "拠点は中野の1か所のみ",
  "Aコースはお見合いのたびに2,200円かかる",
];

const faqs = [
  {
    q: "マーズカフェの料金はいくらですか？",
    a: "Aコースは入会金66,000円＋登録料22,000円、月会費7,700円、お見合い料1件2,200円、成婚料220,000円です。Bコースは月会費11,000円でお見合い料0円です（その他はAコースと同じ）。乗り換え限定コースは入会金55,000円です（税込・2026年10月14日に公式サイトで確認）。",
  },
  {
    q: "マーズカフェの成婚率72.5%はどう計算されていますか？",
    a: "公式サイトでは「成婚退会者÷全退会者（2025年1月〜12月）」と定義しています。在籍会員全体を分母にした数字ではないため、他社の成婚率と比べる場合は定義の違いにご注意ください。",
  },
  {
    q: "マーズカフェの口コミ・評判を教えてください",
    a: "Googleマップの「結婚相談所マーズカフェ」には口コミ39件・評価5.0が掲載されています（当サイトが2026年8月に取得）。比較記事に掲載されたエキテン等の口コミでは、条件に合わせたアドバイスや気持ちに寄り添うサポートを評価する声が見られます。",
  },
  {
    q: "マーズカフェはカフェなのですか？",
    a: "いいえ、飲食店ではなく東京都中野区の結婚相談所です（運営は株式会社マーズ）。中野駅南口から徒歩3分のオルド中野ビル2Fにあります。",
  },
  {
    q: "マーズカフェはオンラインでも活動できますか？",
    a: "Zoomでの面談に全国から対応しています。受付は10:00〜21:00で定休日はありません（公式サイトより）。",
  },
  {
    q: "マーズカフェで成婚するまでの期間と費用の目安を教えてください",
    a: "公式サイトは、成婚者の活動期間の最頻値6か月・平均お見合い回数11回を前提に、合計378,400円（約38万円前後）という目安を掲載しています。",
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
  { name: "naco-do", path: "/review/naco-do/" },
  { name: "スマリッジ", path: "/review/smartread/" },
  { name: "エン婚活エージェント", path: "/review/en-konkatsu/" },
];

export default function MarsCafeReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "マーズカフェ" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          結婚相談所マーズカフェの口コミ・評判｜料金3コース・成婚率の定義・運営会社
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月14日（料金・実績は2026年10月14日に公式サイトで確認）</p>

        <p className="mb-6 text-sm">
          <a href="https://t.felmat.net/fmcl?ak=K2473Q.1.A49782R.Z1361712" target="_blank" rel="nofollow noopener noreferrer" className="text-[#A08447] underline hover:text-[#8A7239] tracking-wider">マーズカフェ の公式サイトはこちら</a>
        </p>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <img src="/ss-mars-cafe.jpg" alt="マーズカフェ 公式サイト" className="w-full h-auto" />
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
            マーズカフェの強み・特徴
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
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">マーズカフェ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">naco-do</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">エン婚活エージェント</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">7,700円〜11,000円</td><td className="px-4 py-3 text-center">16,800円</td><td className="px-4 py-3 text-center">14,300円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">88,000円</td><td className="px-4 py-3 text-center">29,800円</td><td className="px-4 py-3 text-center">10,780円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">会員数</td><td className="px-4 py-3 text-center">約18万人</td><td className="px-4 py-3 text-center">約12.1万人</td><td className="px-4 py-3 text-center">約3万人</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">仲人型</td><td className="px-4 py-3 text-center">オンライン完結型</td><td className="px-4 py-3 text-center">オンライン完結型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">成婚率72.5%（自社発表）</td><td className="px-4 py-3 text-center">低価格帯のオンライン型</td><td className="px-4 py-3 text-center">全額返金保証</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <ReviewFacts
          name="マーズカフェ"
          checkedOn="2026年10月14日"
          officialUrl="https://marzcafe.com/"
          feeHead={["項目", "Aコース", "Bコース", "乗り換え限定"]}
          feeRows={[
            ["入会金", "66,000円", "66,000円", "55,000円"],
            ["登録料", "22,000円", "22,000円", "22,000円"],
            ["月会費", "7,700円", "11,000円", "11,000円"],
            ["お見合い料", "2,200円／件", "0円", "0円"],
            ["成婚料", "220,000円", "220,000円", "220,000円"],
          ]}
          feeNotes={["金額は税込です。各コースとも、お見合い申し込みは月100名まで、紹介は月3名以上、面談は無制限です。", "公式の目安：活動6か月・お見合い11回で合計378,400円。"]}
          estimate={[
            { label: "Aコース（お見合い料は件数分を別途）", formula: "66,000円＋22,000円＋7,700円×12＋220,000円", total: "400,400円＋お見合い料" },
            { label: "Bコース", formula: "66,000円＋22,000円＋11,000円×12＋220,000円", total: "440,000円" },
          ]}
          company={[
            ["運営", "株式会社マーズ（運営組織名：マーズカフェ）"],
            ["代表", "増田修蔵"],
            ["設立", "2009年4月"],
            ["所在地", "東京都中野区中野2丁目28-3 オルド中野ビル2F（中野駅南口 徒歩3分）"],
            ["加盟", "IBJ・TMS"],
            ["受付", "10:00〜21:00・定休日なし"],
          ]}
          reviewNote="Googleマップの「結婚相談所マーズカフェ」は口コミ39件・評価5.0でした（当サイトが2026年8月18日に取得）。口コミ件数が少ない段階での評価のため、件数とあわせてご覧ください。"
          good={[
            { text: "一人ひとりの考えや条件に合わせてアドバイスしてくれるという声", source: "比較記事（M2W）に掲載のエキテン口コミ・独自アンケート" },
            { text: "不安な気持ちに寄り添い励ましてくれたという声", source: "同上" },
            { text: "他社から乗り換えて成婚できたという声", source: "同上" },
          ]}
          bad={[
            { text: "否定的な口コミは確認した範囲では見当たりませんでした。比較記事が挙げる注意点は「入会書類が多い」「Aコースはお見合い料がかかる」の2点です", source: "比較記事（M2W）" },
          ]}
          sources={[
            { name: "マーズカフェ 料金（公式）", url: "https://marzcafe.com/price/" },
            { name: "マーズカフェ 相談所概要（公式）", url: "https://marzcafe.com/company/" },
            { name: "M2W マーズカフェの口コミ・評判", url: "https://matching-two.com/marzcafe/" },
          ]}
        />

              <FeePosition slug="mars-cafe" />

<section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            マーズカフェと他社を比較して選ぶ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            マーズカフェがご自身に合うかを判断する際は、料金総額・会員数・サポート形式を他社と比較することをおすすめします。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（24社一覧）を見る</Link></li>
            <li><Link href="/review/zwei/" className="text-[#A08447] underline">ツヴァイの評判・料金を見る</Link></li>
            <li><Link href="/review/naco-do/" className="text-[#A08447] underline">naco-doの評判・料金を見る</Link></li>
            <li><Link href="/review/smartread/" className="text-[#A08447] underline">スマリッジの評判・料金を見る</Link></li>
          </ul>
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

        <div className="text-center mb-8">
          <a href="https://t.felmat.net/fmcl?ak=K2473Q.1.A49782R.Z1361712" target="_blank" rel="nofollow noopener noreferrer">
            <img src="https://t.felmat.net/fmimg/K2473Q.A49782R.Z1361712" width={300} height={250} alt="マーズカフェ" className="mx-auto max-w-full h-auto" />
          </a>
        </div>

        {/* CTA */}
        

        <section className="bg-[#333333] rounded-2xl p-10 text-white text-center mb-12">
          <h2 className="text-xl font-light mb-4 tracking-widest">マーズカフェの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">無料相談で、コースの違いと総額をご確認いただけます</p>
          <a href="https://t.felmat.net/fmcl?ak=K2473Q.1.A49782R.Z1361712" target="_blank" rel="nofollow noopener noreferrer" className="inline-block bg-[#A08447] hover:bg-[#8A7239] text-white font-normal py-3 px-8 rounded-full transition-colors tracking-widest">公式サイトへ</a>
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
      <BrandStores href="/review/mars-cafe/" brandName="マーズカフェ" />

      </article>
    </>
  );
}
