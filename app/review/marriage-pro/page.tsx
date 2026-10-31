import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FeePosition from "@/components/FeePosition";
import AuthorBox from "@/components/AuthorBox";
import FlowGuide from "@/components/FlowGuide";

export const metadata = {
  title: "マリッジプロ（婚活サロン marriage pro）の評判・口コミ・料金｜新宿・成婚率80.4%【2026年10月】",
  description:
    "婚活サロン marriage pro（マリッジプロ・東京都新宿区）の評判・口コミ・料金を解説しています。月会費9,000〜13,000円・成婚料180,000〜220,000円（プラン別・2026年10月26日公式確認）、2025年成婚率80.4%の定義、公式「お客様の声」の内容を整理しています。",
};

const overview = {
  name: "マリッジプロ",
  type: "仲人型（IBJ加盟・20代30代専門）",
  members: "自社の会員数の公表なし（IBJ加盟・IBJの会員ネットワークを利用）",
  area: "東京都新宿区西新宿8-11-10 星野ビル3階（公式サイト記載・来店またはオンライン面談随時可）",
  initialFee: "80,000〜110,000円（入会金30,000〜60,000円＋登録料50,000円・プラン別・税込／2026年10月26日公式確認）",
  monthlyFee: "9,000〜13,000円（男性13,000円／女性12,000円／U-28 11,000円／地方9,000円・税込）",
  matchingFee: "180,000〜220,000円（男性・女性・地方220,000円／U-28 180,000円・成婚退会時・税込）",
  age: "20代・30代専門（入会者の97%以上が20〜30代・公式サイト記載・2026年10月26日確認）",
  successRate: "80.4%（2025年・成婚退会者数÷全退会者数／平均活動期間7.9ヶ月・公式サイト記載・2026年10月26日確認）",
};

// 2026-10-29: 4項目とも公式サイトの「選ばれる理由」（トップ）・「弊社の強み」（/merit/）・会社概要（/counselor/）の記載で確認し、出典URLを付けた。
// 旧3項目の「専任で担当」「婚活戦略の立案・PDCA」は公式のサービス説明に記載がない（prop-p.com 全484URLを検索。「専任」は2023年の成婚者インタビュー1件の個人の感想のみ）ため 10/27 に削除済み。
const STRENGTH_CHECKED = "2026年10月29日";
const strengths: { title: string; desc: string; sources: { label: string; href: string }[] }[] = [
  {
    title: "20代・30代専門で、同世代カウンセラーの男女チームが担当",
    desc: "公式サイトでは「入会される方の97％以上が『20〜30代』」と記載し、同世代カウンセラーの男女チームで客観的かつ多角的なサポートを提供すると案内しています。カウンセラー紹介には、代表カウンセラー（男性）とチーフカウンセラー（女性）の2名が掲載されています。また、少人数制サポート（カウンセラー1人あたり30名まで）を採用していると記載しています。",
    sources: [
      { label: "公式トップ「marriage proが選ばれる理由」", href: "https://prop-p.com/" },
      { label: "弊社の強み（POINT 02・04）", href: "https://prop-p.com/merit/" },
      { label: "カウンセラー紹介・会社概要", href: "https://prop-p.com/counselor/" },
    ],
  },
  {
    title: "「10ヶ月成婚」を掲げ、成婚率・活動期間を公表",
    desc: "公式サイトでは相談所理念を「成婚ファースト」とし、「どんな方でも10ヶ月で成婚を目指します」と記載しています。2025年の成婚者は38名、成婚率は80.4%（注記は「2025年の成婚退会者数÷全退会者社数」）、平均活動期間は7.9ヶ月（最頻値4ヶ月・男性8.2ヶ月・女性7.8ヶ月）、開業以来の累計成婚100名突破（2026年7月26日に100名）を公表しています。成婚率の分母は退会者のため、入会者のうち成婚する割合を示す数値ではありません。",
    sources: [
      { label: "公式トップ", href: "https://prop-p.com/" },
      { label: "弊社の強み（POINT 03）", href: "https://prop-p.com/merit/" },
      { label: "お知らせ「開業以来、累計100名のご成婚となりました」", href: "https://prop-p.com/2026100-2/" },
    ],
  },
  {
    title: "LINE相談は24時間365日、面談は回数制限なし",
    desc: "公式サイトでは、LINE相談は24時間365日対応、面談は随時可能（無料・制限なし）、お見合い申込は100件以上と記載しています。新宿のオフィスでは完全個室の会議室で対応し、営業時間は11:00〜22:30です。オンラインでの対応も案内しています。",
    sources: [
      { label: "弊社の強み（POINT 05・06）", href: "https://prop-p.com/merit/" },
      { label: "公式トップ（営業時間）", href: "https://prop-p.com/" },
    ],
  },
  {
    title: "IBJ加盟で、IBJの会員ネットワークを利用可能",
    desc: "会社概要の加盟連盟はIBJ（日本結婚相談所連盟）で、公式トップでは「東証プライム上場企業のIBJの正規加盟店」と記載しています。お相手探しはIBJの会員ネットワークが対象です。公式トップではIBJ AWARD 2021〜2025の受賞を掲載しており、2026年7月11日のお知らせではIBJ AWARD 2026上期（PREMIUM部門）の受賞を発表しています。",
    sources: [
      { label: "カウンセラー紹介・会社概要", href: "https://prop-p.com/counselor/" },
      { label: "公式トップ", href: "https://prop-p.com/" },
      { label: "お知らせ「IBJ AWARD 2026上期 受賞のお知らせ」", href: "https://prop-p.com/2026710-2/" },
    ],
  },
];

const pros = [
  "20代・30代専門で、同世代カウンセラーの男女チームが担当",
  "2025年成婚率80.4%・平均活動期間7.9ヶ月を定義つきで公表",
  "LINE相談24時間365日・面談回数の制限なし・22:30まで営業",
  "IBJ加盟でIBJの会員ネットワークを利用できる",
];

const cons = [
  "入会金＋登録料の初期費用が8〜11万円かかる",
  "成婚料18〜22万円が成婚退会時に発生する",
  "拠点は新宿のみ（オンライン面談は随時可能）",
];

const faqs = [
  {
    q: "マリッジプロの評判・口コミはどうですか？",
    a: "公式サイトの「お客様の声」には4件（29歳女性・34歳男性・36歳女性・38歳女性）が掲載されており、無料相談で勧誘がなかったこと、年代の近い担当者の服装やデートプランの助言、証明書類の提出によるルールの明確さに触れた内容です。また「成婚者インタビュー」は#55まで公開されています（2026年10月27日確認）。いずれも相談所が掲載している声のため、第三者の口コミとあわせ、無料相談で担当者との相性を確認することをおすすめします。",
  },
  {
    q: "マリッジプロの料金は総額いくらかかりますか？",
    a: "公式サイトの料金（税込・2026年10月26日確認）は、男性プランで入会金60,000円＋登録料50,000円＋月会費13,000円＋成婚料220,000円です（お見合い料は無料・申込100件/月）。1年活動して成婚した場合の総額目安は約486,000円です。女性プランは初期費用100,000円＋月会費12,000円＋成婚料220,000円（同・約464,000円）です。U-28（28歳以下女性）・地方プラン・ひとり親限定プランのほか、1年以内にIBJ日本結婚相談所連盟に所属していた方を対象とした乗換えプランも用意されています。ご利用前に、公式サイトにて最新の料金をご確認ください。",
  },
  {
    q: "マリッジプロの入会条件はありますか？",
    a: "公式サイトでは、入会時の必要書類として、身分証明書・住民票・独身証明書・収入証明（男性は必須、女性は任意）・勤務先が確認できる書類・卒業証明書（短大卒以上の方のみ）が案内されています（公式サイト記載・2026年10月26日確認）。20代・30代専門の相談所のため、年齢などの入会条件は無料相談でご確認ください。",
  },
  {
    q: "マリッジプロのカウンセラーはどのような方ですか？",
    a: "公式サイトでは、会員と同世代のカウンセラーが男女のチームでサポートすると案内されています。プロフィール作成、お見合いやデートの会話のアドバイス、ファッションのアドバイスのほか、LINEでの相談に24時間365日対応しています（公式サイト記載・2026年10月26日確認）。",
  },
  {
    q: "マリッジプロの無料相談では何ができますか？",
    a: "公式サイトの「ご成婚までの流れ」では、無料相談で婚活の状況や悩みのヒアリング、結婚相談所の仕組みと活動方法の説明、デモ画面による相談所システムの紹介を行うと案内しています。あわせて「しつこい営業や強引な勧誘は一切いたしません」と記載し、入会手続きは「弊社の方針、料金にご納得頂いてから」としています（出典：https://prop-p.com/flow/・2026年10月31日確認）。",
  },
  {
    q: "マリッジプロの退会方法を教えてください",
    a: "成婚の場合は、成婚退会手続きを行って成婚退会となり（出典：https://prop-p.com/flow/）、プランに応じた成婚料（180,000〜220,000円・税込）が発生します。中途で契約を解除する場合について、公式サイトの「料金・サポート内容」では、入会契約から8日以内であれば無条件で解除でき、支払い済みの料金は全額返金されると記載しています。8日を過ぎた後も解除は可能で、請求額はサービス提供開始前であれば3万円、提供開始後であれば提供されたサービスの対価に相当する額と、2万円または契約残額の20%のいずれか低い額の合計としています（出典：https://prop-p.com/price/）。退会の申し出方法は公式サイトに記載がないため、入会時の契約書面または相談所にご確認ください（2026年10月31日確認）。",
  },
  {
    q: "マリッジプロはオンラインでも活動できますか？",
    a: "面談は来店またはオンラインで随時受けられ、回数の制限はありません。お見合いの申し込みはIBJのシステム・アプリから行います（公式サイト記載・2026年10月26日確認）。",
  },
  {
    q: "マリッジプロの成婚退会までの平均期間はどのくらいですか？",
    a: "公式サイトでは、2025年の平均活動期間を7.9ヶ月（最頻値4ヶ月）と記載しています。2025年の成婚者は38名、成婚率は80.4%（成婚退会者数÷全退会者数）です（公式サイト記載・2026年10月26日確認）。期間には個人差があります。",
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
  { name: "流山おおたかの森結婚相談所", path: "/review/nagareyama-otakanomori/" },
  { name: "パートナーエージェント", path: "/review/partner-agent/" },
  { name: "フィオーレ", path: "/review/fiore/" },
  { name: "リングベル", path: "/review/ringbell/" },
  { name: "ムスベル", path: "/review/musbell/" },
  { name: "Code For Marriage", path: "/review/code-for-marriage/" },
];

export default function MarriageProReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "マリッジプロ" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          マリッジプロ（婚活サロン marriage pro）の口コミ・評判｜新宿・料金・成婚率80.4%
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月27日（料金は2026年10月26日、成婚実績・お客様の声・会社概要は2026年10月27日に<a href="https://prop-p.com/" target="_blank" rel="noopener noreferrer" className="underline">公式サイト</a>で確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />マリッジプロの特徴と適している方
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>どんな相談所か</strong>：東京都新宿区西新宿（東京メトロ丸ノ内線「西新宿駅」徒歩2分）の20代・30代専門のIBJ加盟相談所です。正式名称は「婚活サロン marriage pro」で、運営はプロパティプロフェッショナル株式会社です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>実績</strong>：<strong>2025年の成婚率80.4%</strong>（成婚退会者数÷全退会者数）・成婚者38名・平均活動期間7.9ヶ月、開業以来の累計成婚100名突破を公式に掲載しています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>料金</strong>：月会費9,000〜13,000円＋成婚料180,000〜220,000円（プラン別・お見合い料無料・2026年10月26日公式確認）。男性プランで1年成婚した場合の総額目安は<strong>約48.6万円</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>評判・口コミ</strong>：公式「お客様の声」4件は、勧誘のない無料相談、同世代の担当者による服装・デートプランの助言、ルールの明確さに触れています。相談所が掲載した声である点にご留意ください（<a href="#reviews" className="underline text-[#A08447]">詳細</a>）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>適している方</strong>：20代・30代で同世代のカウンセラーに相談したい方、平日夜（22:30まで）や新宿での対面・オンラインで相談したい方に適しています。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本ページの料金・実績は公式サイトの公表情報にもとづきます（料金は2026年10月26日、実績・会社概要は2026年10月27日確認）。ご利用前に、<strong>公式サイトおよび無料相談</strong>にて最新の数値・契約条件をご確認ください。</p>
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
            <div className="flex px-6 py-3.5 text-sm">
              <span className="w-28 shrink-0 font-medium text-[#2C2C2C]/50 tracking-wider">運営会社</span>
              <span className="text-[#2C2C2C]">プロパティプロフェッショナル株式会社（公式サイトの会社概要に記載）</span>
            </div>
            <div className="flex px-6 py-3.5 text-sm">
              <span className="w-28 shrink-0 font-medium text-[#2C2C2C]/50 tracking-wider">公式サイト</span>
              <span className="text-[#2C2C2C]"><a href="https://prop-p.com/" target="_blank" rel="noopener noreferrer" className="text-[#A08447] underline">婚活サロン marriage pro（prop-p.com）</a></span>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">マリッジプロの強み・特徴</h2>
          <div className="space-y-6">
            {strengths.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-medium text-lg mb-2 text-[#A08447] tracking-wider">{s.title}</h3>
                <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">{s.desc}</p>
                <p className="text-xs text-[#2C2C2C]/50 mt-3 leading-relaxed">
                  出典：{s.sources.map((src, j) => (
                    <span key={src.href + j}>{j > 0 && "／"}<a href={src.href} target="_blank" rel="noopener noreferrer" className="underline">{src.label}</a></span>
                  ))}（{STRENGTH_CHECKED}確認）
                </p>
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
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">マリッジプロ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">パートナーエージェント</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">フィオーレ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">9,000円〜13,000円</td><td className="px-4 py-3 text-center">18,700円〜</td><td className="px-4 py-3 text-center">8,800円〜</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">80,000円〜110,000円</td><td className="px-4 py-3 text-center">137,500円〜</td><td className="px-4 py-3 text-center">33,000円〜</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">会員数</td><td className="px-4 py-3 text-center">非公開</td><td className="px-4 py-3 text-center">約2.9万人</td><td className="px-4 py-3 text-center">約8.5万人</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">仲人型</td><td className="px-4 py-3 text-center">仲人型</td><td className="px-4 py-3 text-center">ハイブリッド型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">20代・30代専門</td><td className="px-4 py-3 text-center">成婚率は公式参照</td><td className="px-4 py-3 text-center">成婚率は公式参照</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-3 leading-relaxed">※料金・会員数・成婚率は各社の公表値・当サイト調査にもとづく目安です。成婚率は各社で算出基準が異なるため、最新の正確な数値は各社公式サイトでご確認ください（2026年時点）。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">マリッジプロの料金プランと総額の目安</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            「マリッジプロ 料金」で確認しておきたいのは、月会費だけでなく<strong>入会から成婚までにかかる総額</strong>です。公表されている料金をもとに、1年間活動した場合の総額の目安を整理しています。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">男性プラン</td><td className="px-4 py-3">入会金60,000円＋登録料50,000円／月会費13,000円／成婚料220,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">女性プラン</td><td className="px-4 py-3">入会金50,000円＋登録料50,000円／月会費12,000円／成婚料220,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">U-28プラン（28歳以下・女性のみ）</td><td className="px-4 py-3">入会金30,000円＋登録料50,000円／月会費11,000円／成婚料180,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">地方プラン（首都圏・大阪以外）</td><td className="px-4 py-3">入会金45,000円＋登録料50,000円／月会費9,000円／成婚料220,000円（東京・神奈川・千葉・埼玉・愛知・大阪・京都の方とお見合いをしない方が対象）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">乗換えプラン（1年以内にIBJ日本結婚相談所連盟に所属していた方）</td><td className="px-4 py-3">男性: 入会金30,000円＋登録料50,000円／月会費11,000円／成婚料220,000円・女性: 入会金20,000円＋登録料50,000円／月会費9,800円／成婚料200,000円（申込200件/月）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">ひとり親限定プラン</td><td className="px-4 py-3">入会金30,000円・登録料/月会費無料／お見合い料3,000円／成婚料200,000円（18歳以下の子と同居のシングルマザー・ファーザー対象）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">共通</td><td className="px-4 py-3">お見合い料無料（ひとり親プラン除く）・申込100件/月（不足時は無料で100件追加可）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">1年で成婚した場合の総額目安</td><td className="px-4 py-3 font-medium">男性: 約486,000円（110,000＋13,000×12＋220,000）／女性: 約464,000円（100,000＋12,000×12＋220,000）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※すべて税込で、マリッジプロ公式サイトの<a href="https://prop-p.com/price/" target="_blank" rel="noopener noreferrer" className="underline">料金・サポート内容ページ</a>にて2026年10月26日に確認した現行料金です。成婚料は「結婚相談所以外の方との成婚時には発生しない」と公式に明記されています。クーリングオフ（契約から8日以内・全額返金）と中途解約の精算ルールも公式に記載があります。成婚料が総額に占める割合が大きいため、「成婚したら払う費用」として事前に把握しておくことが大切です。
          </p>
        </section>

        <section className="mb-12" id="reviews">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">マリッジプロの評判・口コミ（公式掲載の声の内容）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            公式サイトの<a href="https://prop-p.com/voice/" target="_blank" rel="noopener noreferrer" className="underline text-[#A08447]">お客様の声</a>に掲載されている4件の内容を、当サイトで論点ごとに整理しました（2026年10月27日確認・本文の転載は行っていません）。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead><tr className="bg-[#FAF7F2] text-left"><th className="px-4 py-3">掲載者</th><th className="px-4 py-3">触れている点</th></tr></thead>
              <tbody>
                {[
                  ["29歳女性・会社員・東京都", "無料相談で他の婚活サービスの長所も説明された／2回目の面談で約3時間話を聞いてもらい入会を決めた"],
                  ["34歳男性・会社員・東京都", "アプリから移行／年代の近い男性担当者の服装・髪型の助言／デートプランの提案"],
                  ["36歳女性・会社員・神奈川県", "3社目の無料相談で初めて勧誘がなかった／年代の近い女性担当者の助言"],
                  ["38歳女性・公務員・東京都", "知人の紹介で入会／ルールと証明書類の提出による安心感"],
                ].map(([k, v]) => (
                  <tr key={k} className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2] whitespace-nowrap">{k}</td><td className="px-4 py-3">{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
            4件のうち3件が「担当者の年代が近いこと」に触れており、公式が掲げる「同世代カウンセラー」の方針と一致しています。成婚者については、公式サイトの<a href="https://prop-p.com/married-interview/" target="_blank" rel="noopener noreferrer" className="underline text-[#A08447]">成婚者インタビュー</a>が#55（2026年10月4日公開）まで掲載されています。
          </p>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">※いずれも相談所が掲載している声のため、否定的な評価は含まれていません。料金面では、初期費用8〜11万円・成婚料18〜22万円がかかる点も踏まえ、無料相談で担当者との相性と契約条件をご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">マリッジプロと他社を比較して選ぶ</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            手厚い仲人サポートを求める場合は、料金総額や対象エリア・特徴を他社と比較して選ぶことをおすすめします。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/review/musbell/" className="text-[#A08447] underline">ムスベルの評判・料金を見る（全国・複数連盟加盟）</Link></li>
            <li><Link href="/review/ringbell/" className="text-[#A08447] underline">リングベルの評判・料金を見る（IBJ加盟のオンライン結婚相談所）</Link></li>
            <li><Link href="/compare/musbell-vs-ringbell/" className="text-[#A08447] underline">ムスベルとリングベルを比較する（料金総額・対象年代・特徴）</Link></li>
            <li><Link href="/compare/cheap/" className="text-[#A08447] underline">安い結婚相談所を1年総額で比較する（初期費用＋月会費＋成婚料）</Link></li>
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（24社一覧）を見る</Link></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚相談所の基礎知識で判断材料を増やす</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">マリッジプロがご自身に合うかを判断する際は、料金の相場やタイプの違い、活動の流れといった基礎知識もあわせて確認すると判断しやすくなります。</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/knowledge/cost/" className="text-[#A08447] underline">結婚相談所の料金相場は？初期費用・月会費・成婚料の目安</Link></li>
            <li><Link href="/knowledge/how-to-choose/" className="text-[#A08447] underline">結婚相談所の選び方｜仲人型とデータマッチング型の違い</Link></li>
            <li><Link href="/knowledge/flow/" className="text-[#A08447] underline">結婚相談所の入会から成婚までの流れ・活動期間の目安</Link></li>
          </ul>
        </section>

        <FlowGuide name={overview.name} initialFee={overview.initialFee} monthlyFee={overview.monthlyFee} matchingFee={overview.matchingFee} />

              <FeePosition slug="marriage-pro" />

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
          <h2 className="text-xl font-light mb-4 tracking-widest">マリッジプロの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">カウンセラーによる無料相談をご利用いただけます</p>
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
      </article>
    </>
  );
}
