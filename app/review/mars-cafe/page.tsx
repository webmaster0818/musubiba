import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FeePosition from "@/components/FeePosition";
import AuthorBox from "@/components/AuthorBox";
import FlowGuide from "@/components/FlowGuide";
import BrandStores from "@/components/BrandStores";
import ReviewFacts from "@/components/ReviewFacts";

export const metadata = {
  title: "結婚相談所マーズカフェ（Marz cafe）の口コミ・評判｜エキテン13件の集計・料金3コース・成婚率72.5%の定義【2026年10月】",
  description:
    "東京・中野の結婚相談所マーズカフェの口コミ・評判を、掲載媒体を明記して整理しています。エキテンの口コミ13件の集計、3コースの料金と2団体加盟オプション（2026年10月22日公式確認）、1年総額、成婚率72.5%の算出方法、運営会社も掲載しています。",
};

const overview = {
  name: "結婚相談所マーズカフェ（Marz cafe）",
  type: "仲人型（IBJ・TMS加盟）",
  members: "IBJ 104,859人。TMS（87,430人）にも加盟すると約18万人（2団体加盟は月額＋2,200円のオプション・重複あり）",
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
    title: "IBJとTMSの2団体に加盟し、オプションで約18万人から探せる",
    desc: "IBJ（104,859人・2025年12月時点）とTMS（87,430人・2023年11月時点）に加盟しています。両団体の会員は1〜2割が重複していると公式が注記しています。なお、料金ページでは2団体で活動する場合を「オプション」とし、月額費に2,200円を加算（最初の2か月は無料）としています（2026年10月22日確認）。公式サイトは、IBJの「最優秀成婚賞」を2019年から6年連続で受賞し、IBJ AWARD（2025年下半期）で10期連続の受賞と掲載しています。",
  },
  {
    title: "お見合い料の有無でコースを選べる",
    desc: "月会費7,700円でお見合い1件2,200円のAコースと、月会費11,000円でお見合い料0円のBコースがあり、どちらも申し込みは月100名まで、紹介は月3名以上、面談は無制限です。他社からの乗り換え限定コースは入会金が55,000円です。",
  },
];

const pros = [
  "成婚率72.5%を定義とあわせて公表している",
  "IBJ＋TMSで約18万人から探せる（TMS併用は月額＋2,200円）",
  "年中無休・10〜21時受付、Zoom面談で全国から相談できる",
];

const cons = [
  "成婚料220,000円で、1年総額は40万円台になる",
  "拠点は中野の1か所のみ",
  "Aコースはお見合いのたびに2,200円かかる",
  "2団体（IBJ＋TMS）で活動する場合は月額費に2,200円が加算される（最初の2か月は無料）",
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
    a: "Googleマップの「結婚相談所マーズカフェ」には口コミ39件・評価5.0が掲載されています（当サイトが2026年8月に取得）。エキテンの口コミ13件（2026年10月22日確認・2019〜2023年投稿）は、初回面談で問題点を率直に指摘された、交際が途切れたときに励まされた、といったカウンセラーの対応に関する内容が中心で、否定的な内容の投稿は確認できませんでした。",
  },
  {
    q: "マーズカフェの2団体加盟（IBJ＋TMS）に追加料金はかかりますか？",
    a: "料金ページでは、2団体加盟の場合は月額費に2,200円を加算し、最初の2か月は無料としています。休会費はIBJのみの場合で月額300円です（2026年10月22日に公式サイトで確認）。",
  },
  {
    q: "マーズカフェの口コミでは、成婚までの期間はどのくらいですか？",
    a: "エキテンに掲載されている口コミ13件（2019〜2023年投稿）のうち、活動期間に触れている9件を当サイトで集計すると、6か月以内が4件、7か月〜1年が4件、1年半が1件でした。投稿は成婚退会した方のものが中心で、全会員の平均ではありません。",
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
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月28日（料金は2026年10月28日に公式サイトで再確認・10月22日から変更なし。月別の成婚退会者数は公式トップページのお知らせを10月28日に集計）</p>

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

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            エキテンの口コミ13件を当サイトで集計
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            口コミサイト「エキテン」に掲載されているマーズカフェの口コミ13件（投稿日2019年1月〜2023年7月）を、当サイトが2026年10月22日に確認し、活動期間と費用に触れた記述を数えました。本文は転載せず、件数のみを掲載しています。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">集計項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">件数</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">投稿年（2019年／2020年／2021年／2022年／2023年）</td><td className="px-4 py-3 text-center">3／3／3／3／1件</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">成婚・婚約までの活動期間に触れている口コミ</td><td className="px-4 py-3 text-center">9件</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">　うち6か月以内（3か月・4か月・5か月・半年）</td><td className="px-4 py-3 text-center">4件</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">　うち7か月〜1年（7か月×2・1年以内・1年近く）</td><td className="px-4 py-3 text-center">4件</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">　うち1年超（1年半）</td><td className="px-4 py-3 text-center">1件</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">費用の総額に触れている口コミ（「20万円ちょっと」「25万円くらい」・いずれも2019〜2020年投稿）</td><td className="px-4 py-3 text-center">2件</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">否定的な内容の口コミ</td><td className="px-4 py-3 text-center">0件</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">相談所からの返信が付いている口コミ</td><td className="px-4 py-3 text-center">13件</td></tr>
              </tbody>
            </table>
          </div>
          <ul className="text-xs text-[#2C2C2C]/60 leading-relaxed space-y-1">
            <li>※ 投稿は成婚・婚約に至った方のものが中心で、退会者全体の傾向を示すものではありません。</li>
            <li>※ 費用に触れた2件は現在の料金（入会金66,000円・登録料22,000円・成婚料220,000円）より前の投稿です。現在の総額は料金表と1年総額の試算をご確認ください。</li>
            <li>※ 出典：<a href="https://www.ekiten.jp/shop_19195293/review/" target="_blank" rel="noopener noreferrer" className="underline">エキテン「結婚相談所マーズカフェ」の口コミ</a>（2026年10月22日確認）</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            公式のお知らせから集計した月別の成婚退会者数
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            マーズカフェは、公式トップページのお知らせで毎月の成婚退会者数を男女別に公表しています。当サイトが2026年10月28日に確認し、2025年1月〜2026年9月分を集計しました。<strong>2025年は年間38名（男性19名・女性19名）、2026年は1〜9月で26名（男性13名・女性13名）</strong>で、1か月あたり2〜5名で推移しています。2025年1〜9月の28名と比べると、2026年の同時期は26名です。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">月</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">2025年</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">2026年</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">1月</td><td className="px-4 py-3 text-center">3名（男性1・女性2）</td><td className="px-4 py-3 text-center">3名（男性1・女性2）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">2月</td><td className="px-4 py-3 text-center">4名（男性3・女性1）</td><td className="px-4 py-3 text-center">2名（男性1・女性1）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">3月</td><td className="px-4 py-3 text-center">3名（男性1・女性2）</td><td className="px-4 py-3 text-center">2名（男性1・女性1）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">4月</td><td className="px-4 py-3 text-center">3名（男性2・女性1）</td><td className="px-4 py-3 text-center">3名（男性2・女性1）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">5月</td><td className="px-4 py-3 text-center">2名（男性1・女性1）</td><td className="px-4 py-3 text-center">4名（男性2・女性2）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">6月</td><td className="px-4 py-3 text-center">3名（男性1・女性2）</td><td className="px-4 py-3 text-center">4名（男性2・女性2）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">7月</td><td className="px-4 py-3 text-center">4名（男性2・女性2）</td><td className="px-4 py-3 text-center">2名（男性1・女性1）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">8月</td><td className="px-4 py-3 text-center">3名（男性1・女性2）</td><td className="px-4 py-3 text-center">3名（男性1・女性2）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">9月</td><td className="px-4 py-3 text-center">3名（男性2・女性1）</td><td className="px-4 py-3 text-center">3名（男性2・女性1）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">10月</td><td className="px-4 py-3 text-center">2名（男性1・女性1）</td><td className="px-4 py-3 text-center">－</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">11月</td><td className="px-4 py-3 text-center">3名（男性2・女性1）</td><td className="px-4 py-3 text-center">－</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">12月</td><td className="px-4 py-3 text-center">5名（男性2・女性3）</td><td className="px-4 py-3 text-center">－</td></tr>
                <tr className="border-t border-gray-100 bg-[#FAF7F2]"><td className="px-4 py-3 font-medium">合計</td><td className="px-4 py-3 text-center font-medium">38名（男性19・女性19）</td><td className="px-4 py-3 text-center font-medium">26名（1〜9月・男性13・女性13）</td></tr>
              </tbody>
            </table>
          </div>
          <ul className="text-xs text-[#2C2C2C]/60 leading-relaxed space-y-1">
            <li>※ 人数は公式のお知らせ（例：2026年10月1日「9月は3名(男性2名・女性1名)が成婚退会されました」）の記載をそのまま集計したものです。成婚率72.5%（2025年1〜12月の全退会者に占める成婚退会者の割合・公式）の算出に使われた退会者総数は公表されていません。</li>
            <li>※ 公式サイトの「成婚STORY」は2026年10月22日に123件目が掲載されています。</li>
            <li>※ 出典：<a href="https://marzcafe.com/" target="_blank" rel="noopener noreferrer" className="underline">マーズカフェ公式サイト（お知らせ）</a>（2026年10月28日確認）</li>
          </ul>
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
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">会員数</td><td className="px-4 py-3 text-center">約18万人（2団体加盟時）</td><td className="px-4 py-3 text-center">約12.1万人</td><td className="px-4 py-3 text-center">約3万人</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">仲人型</td><td className="px-4 py-3 text-center">オンライン完結型</td><td className="px-4 py-3 text-center">オンライン完結型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">成婚率72.5%（自社発表）</td><td className="px-4 py-3 text-center">低価格帯のオンライン型</td><td className="px-4 py-3 text-center">全額返金保証</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <ReviewFacts
          name="マーズカフェ"
          checkedOn="2026年10月22日"
          officialUrl="https://marzcafe.com/"
          feeHead={["項目", "Aコース", "Bコース", "乗り換え限定"]}
          feeRows={[
            ["入会金", "66,000円", "66,000円", "55,000円"],
            ["登録料", "22,000円", "22,000円", "22,000円"],
            ["月会費", "7,700円", "11,000円", "11,000円"],
            ["お見合い料", "2,200円／件", "0円", "0円"],
            ["成婚料", "220,000円", "220,000円", "220,000円"],
          ]}
          feeNotes={["金額は税込です。各コースとも、お見合い申し込みは月100名まで、紹介は月3名以上、面談は無制限です。", "公式の目安：活動6か月・お見合い11回で合計378,400円。", "オプション：2団体加盟（IBJ＋TMS）は月額費＋2,200円（最初の2か月は無料）、休会費はIBJのみ月額300円。"]}
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
            { name: "エキテン 結婚相談所マーズカフェの口コミ（2026年10月22日確認）", url: "https://www.ekiten.jp/shop_19195293/review/" },
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
