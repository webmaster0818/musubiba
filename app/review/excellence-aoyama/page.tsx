import Link from "next/link";
import BrandStores from "@/components/BrandStores";
import { ReviewVoices } from "@/components/ReviewFacts";
import Breadcrumb from "@/components/Breadcrumb";
import FeePosition from "@/components/FeePosition";
import AuthorBox from "@/components/AuthorBox";
import A8Banner from "@/components/A8Banner";
import FlowGuide from "@/components/FlowGuide";
import ReviewExtra from "@/components/ReviewExtra";

export const metadata = {
  title: "エクセレンス青山の口コミ・評判｜IBJ口コミ41件をテーマ別に集計・4連盟33万人・料金コース【2026年10月】",
  description:
    "エクセレンス青山（南青山のエグゼクティブ向け結婚相談所）の口コミ・評判を、IBJ公式サイトの口コミ41件（平均4.5）の全件テーマ別集計と星1の4件の内容で整理しています。料金コース（2026年10月25日公式確認）、4連盟の会員数の内訳、成婚率85.7%（2019年実績）の注意点、解約条件も掲載しています。",
};

const overview = {
  name: "エクセレンス青山",
  company: "有限会社ランドコム（東京都港区南青山2-2-8 DFビル・2003年8月設立・代表 馬場正浩）",
  type: "仲人型（医師・経営者などエグゼクティブ向け）",
  federation: "IBJ・BIU・TMS・NNRの4連盟加盟（紹介可能 約33万人・各連盟の時点表記あり）",
  area: "東京・南青山1拠点（オンライン相談可・火曜定休）",
  initialFee: "55,000円〜220,000円（税込・コースによる）",
  monthlyFee: "7,700円（税込・スタンダードコース）",
  matchingFee: "220,000円（税込・全コース共通）",
  successRate: "85.7%（自社公称・2019年実績・定義は本文参照）",
};

const strengths = [
  {
    title: "業界25年・4連盟加盟で紹介可能約33万人のネットワーク",
    desc: "運営の有限会社ランドコムは2003年8月設立で、業界歴25年の老舗です。IBJ・BIU・TMS・NNRの4つの連盟に加盟しており、紹介可能な会員は合計約33万人です（各連盟公表値・時点表記あり）。複数連盟を横断してお相手を探せるのは、単一連盟のみ加盟の相談所にはない強みです。IBJ AWARD PREMIUMの受賞歴もあります。",
  },
  {
    title: "医師・経営者などハイクラス層に向けた専属カウンセラーの仲人型",
    desc: "エクセレンス青山は医師・経営者などのエグゼクティブ層を主な対象とした仲人型の結婚相談所です。専属カウンセラーが活動に伴走する体制で、コースによってお見合い料や入会金の設定が異なります。",
  },
  {
    title: "青山1拠点＋オンライン相談で忙しい人にも対応",
    desc: "店舗は東京・南青山の1拠点（火曜定休）ですが、オンライン相談にも対応しています。多忙で来店の時間が取りにくいエグゼクティブ層でも相談しやすい体制です。",
  },
];

const pros = [
  "4連盟加盟（IBJ/BIU/TMS/NNR）で紹介可能約33万人と母集団が大きい",
  "2003年設立・業界25年の運営実績とIBJ AWARD PREMIUM受賞歴",
  "月会費7,700円（スタンダード）と月々の負担を抑えた料金設計",
  "20代限定トライアル11,000円（1ヶ月）で若年層は試しやすい",
];

const cons = [
  "公称成婚率85.7%は2019年（1〜12月）の実績で、データが古い点に注意",
  "お見合い料が都度発生する料金体系（スタンダードは女性5,500円/回・男性8,800円/回）",
  "実店舗は青山の1拠点のみで、対面中心で活動したい地方在住者には不便",
];

const faqs = [
  {
    q: "エクセレンス青山はどの連盟に加盟していますか？",
    a: "IBJ（日本結婚相談所連盟）・BIU（日本ブライダル連盟）・TMS（全国結婚相談事業者連盟）・NNR（日本仲人連盟）の4連盟に加盟しており、紹介可能な会員は合計約33万人です（各連盟の公表値・時点表記あり）。複数連盟を横断してお相手探しができます。",
  },
  {
    q: "エクセレンス青山の成婚率85.7%はどう見ればよいですか？",
    a: "自社公称値で、定義は「成婚退会者÷総退会者」（男性会員対象）、対象期間は2019年1〜12月の実績です。7年前のデータであり最新の実績を示すものではない点、また算出定義が他社と異なる場合がある点にご注意ください。最新の実績は無料相談で直接確認することをおすすめします。",
  },
  {
    q: "エクセレンス青山の料金は男女で違いますか？",
    a: "スタンダードコースでは入会金55,000円・月会費7,700円は男女共通ですが、お見合い料が女性5,500円/回・男性8,800円/回と異なります（いずれも税込）。成婚料は男女・コース共通で220,000円です。",
  },
  {
    q: "お見合い料がかからないコースはありますか？",
    a: "公式の料金ページ（2026年10月21日確認）では、女性のプライム・エグゼクティブ、男性のエグゼクティブ、ラグジュアリーコースで、お見合い料が月4名まで無料（5名以降は1名5,500円）です。男性のプライムコースはお見合い料5,500円/回で、無料の対象ではありません。お見合い回数が多くなりそうな方は、スタンダードコースとの総額を比較することをおすすめします。",
  },
  {
    q: "20代でも入会しやすいプランはありますか？",
    a: "20代限定のトライアルコースが11,000円（税込・1ヶ月）で用意されています。エグゼクティブ向け相談所を低コストで試せる位置づけのコースです。適用条件の詳細は公式サイトでご確認ください。",
  },
  {
    q: "エクセレンス青山は来店しないと利用できませんか？",
    a: "店舗は東京・南青山の1拠点（火曜定休）ですが、オンライン相談にも対応しています。遠方の方や多忙な方には、まずオンラインでのご相談をおすすめします。",
  },
  {
    q: "エクセレンス青山に悪い口コミはありますか？",
    a: "IBJ公式サイトの口コミ41件のうち、星1は4件です（2026年10月25日確認）。入会前のカウンセリングで年収に関する助言の伝え方に配慮がなかったという内容が2件（本文が完全に一致する投稿）、カウンセラーの口調が強く、お見合い申込み後のフォローを感じなかったという内容が1件、仮交際中の相手会員の行動への不満が1件です。いずれも「8ヵ月前」〜「1年前」の表示で、残る37件は星4以上です。",
  },
  {
    q: "解約・返金の条件を教えてください",
    a: "公式「よくあるご質問」（2026年10月25日確認）によると、理由を問わずいつでも解約できます。契約書面の受領から8日以内であれば解約金はかからず、払い込んだ入会金等は全額返還されます。8日を過ぎた後の解約は、法の定める計算式にもとづいて返戻金を計算し返金すると記載されています。スタンダード・プライム・ラグジュアリーの各コースは1年間で、2年目以降は自動更新（更新料なし）です。",
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
  { name: "ウェルスマ", path: "/review/wellsma/" },
  { name: "パートナーエージェント", path: "/review/partner-agent/" },
  { name: "ツヴァイ", path: "/review/zwei/" },
  { name: "サンマリエ", path: "/review/sunmarie/" },
];

// 競合上位記事との差分（2026-10-14 競合比較で追加）
const REVIEW_EXTRA = {
  "name": "エクセレンス青山",
  "ratings": [
    {
      "media": "IBJ公式サイト エクセレンス青山のクチコミ",
      "score": "平均4.5",
      "count": "41件",
      "detail": "星5が36件（88%）・星4が1件（2%）・星1が4件（10%）（2026年10月25日に全件を確認）。テーマ別の集計は本ページの「IBJ口コミ41件のテーマ別集計」をご覧ください。",
      "url": "https://www.ibjapan.com/area/tokyo/66626/"
    }
  ],
  "ratingNotes": [
    "IBJ公式サイト（日本結婚相談所連盟の運営サイト）の相談所ページに掲載されている口コミです。星5と星1に分かれているため、低評価の内容もあわせて確認することをおすすめします。",
    "「エクセレンス青山 評判」の上位は、相談所提供のPR記事や同じ「青山」を含む別業種のページが中心で、件数を確認できる口コミはIBJのページでした。"
  ],
  "fitYes": [
    "医師・経営者などハイクラス層の相手を探したい人",
    "IBJ・BIU・TMS・NNRの4連盟で母数を広げたい人",
    "南青山の店舗に通える人",
    "20代で、まず1ヶ月11,000円のトライアルで試したい人"
  ],
  "fitNo": [
    "お見合い料がかからないコースだけで比較したい人（スタンダードはお見合いごとに費用がかかります）",
    "来店せずに入会まで完結したい人",
    "最新の成婚率データを重視する人（公称85.7%は2019年実績）"
  ],
  "entry": [
    [
      "入会資格",
      "公式の規定にもとづき、21歳以上（男性は23歳以上）で現在独身の方が対象です。公的機関が発行する独身証明書が必要です。"
    ],
    [
      "入会までの流れ",
      "公式の入会案内では、南青山の店舗での無料見学・「無料カウンセリング」の後、必要書類の確認を経て入会する流れです（オンラインでの「無料カウンセリング」の案内もあります）。書類に虚偽がある場合は入会できません。"
    ],
    [
      "トライアル",
      "20代限定のコースです。初期費用11,000円で1ヶ月利用でき、本会員からのお見合い申し込みも受けられます（会員制パーティーは参加不可）。男性は婚活ファッションのスタイリングが無料です。"
    ],
    [
      "キャンペーン",
      "月中の「無料オンラインカウンセリング」で入会金が10%OFFとなり、エグゼクティブ/プライムコースは提携写真館の基本撮影料が無料です（2026年10月14日時点の公式トップの告知）。"
    ]
  ],
  "entrySource": "エクセレンス青山公式「ご入会案内」「お試し入会」・公式トップ",
  "facts": [
    "公式「ご成婚者様の声」の1ページ目には20件が掲載されています。成婚年月の記載がある20件のうち19件が2026年（2026年10月が2件）、婚歴の記載がある19件のうち再婚・再再婚は3件でした（2026年10月21日確認。1ページ目は更新されるため、件数は確認日時点のものです）。"
  ],
  "factsTitle": "エクセレンス青山の公式「ご成婚者様の声」の掲載状況"
};

export default function ExcellenceAoyamaReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "エクセレンス青山" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          エクセレンス青山の口コミ・評判｜4連盟33万人・料金コース・成婚率の注意点まで検証
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月25日（料金・解約条件・4連盟の会員数を2026年10月25日に公式サイトで再確認。IBJ公式サイトの口コミ41件のテーマ別集計を追加）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-6">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />エクセレンス青山とは（運営・加盟連盟・口コミの傾向）
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>運営・形態</strong>：有限会社ランドコム（2003年8月設立・東京都港区南青山）が運営する、医師・経営者などエグゼクティブ層向けの<strong>仲人型結婚相談所</strong>です。店舗は南青山の1拠点で、オンライン面談にも対応しています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>加盟連盟</strong>：IBJ（107,597名・2026年3月時点）、BIU（約62,000名）、TMS（84,752名・2025年6月時点）、NNR（84,000名以上・2025年1月時点）の4連盟に加盟しています。公式サイトは各連盟の公開会員数をもとに算出しており、連盟間の重複を含む場合があると注記しています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>口コミの傾向</strong>：IBJ公式サイトの口コミ41件（平均4.5）では、成婚の報告が18件、カウンセラーの親身さ・丁寧さに触れた投稿が16件です。星1の4件は、入会前カウンセリングでの伝え方やカウンセラーの口調への不満が中心です（<a href="#review-themes" className="underline text-[#A08447]">テーマ別の集計</a>）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>解約</strong>：契約書面の受領から8日以内は入会金等を全額返還、8日以降は法定の計算式にもとづいて返金されます（公式FAQ）。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※会員数は公式トップ、解約条件は公式「よくあるご質問」で2026年10月25日に確認した掲載値です。</p>
        </div>

        {/* Conclusion box */}
        <div className="bg-[#F5F0EB] rounded-2xl p-6 mb-4 border border-[#A08447]/20">
          <h2 className="text-base font-medium text-[#A08447] mb-3 tracking-widest">エクセレンス青山の特徴と適している方</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
            エクセレンス青山は、医師・経営者など<strong>ハイクラス層向けの仲人型結婚相談所</strong>です。IBJ・BIU・TMS・NNRの<strong>4連盟加盟で紹介可能約33万人</strong>という母集団の広さと、業界25年の運営実績（2003年設立・IBJ AWARD PREMIUM受賞歴あり）が特徴で、条件を広げてお相手を探したいエグゼクティブ層に向いています。
          </p>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
            一方、公称成婚率85.7%は<strong>2019年（1〜12月）の実績で、定義は「成婚退会者÷総退会者・男性会員対象」</strong>です。データが古い点と、スタンダードコースではお見合い料が都度発生する点は、入会前にご確認ください。
          </p>
        </div>

        <A8Banner ad="excellence" />

        {/* Overview table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="bg-[#A08447] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
          <div className="divide-y divide-gray-50">
            {Object.entries({
              サービス名: overview.name,
              運営会社: overview.company,
              タイプ: overview.type,
              加盟連盟: overview.federation,
              店舗: overview.area,
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            エクセレンス青山の料金コース（税込）
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            エクセレンス青山の料金は<strong>コース制で、スタンダードコースは男女でお見合い料が異なります</strong>。成婚料はコース・男女共通で220,000円です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">コース</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">入会金</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">月会費</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">お見合い料</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">成婚料</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">スタンダード（女性）</td><td className="px-4 py-3 text-center">55,000円</td><td className="px-4 py-3 text-center">7,700円</td><td className="px-4 py-3 text-center">5,500円/回</td><td className="px-4 py-3 text-center">220,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">スタンダード（男性）</td><td className="px-4 py-3 text-center">55,000円</td><td className="px-4 py-3 text-center">7,700円</td><td className="px-4 py-3 text-center">8,800円/回</td><td className="px-4 py-3 text-center">220,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">プライム（女性）</td><td className="px-4 py-3 text-center">110,000円</td><td className="px-4 py-3 text-center">14,300円</td><td className="px-4 py-3 text-center">月4名まで無料（5名以降5,500円/名）</td><td className="px-4 py-3 text-center">220,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">プライム（男性）</td><td className="px-4 py-3 text-center">110,000円</td><td className="px-4 py-3 text-center">7,700円</td><td className="px-4 py-3 text-center">5,500円/回</td><td className="px-4 py-3 text-center">220,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">エグゼクティブ（女性・2年間）</td><td className="px-4 py-3 text-center">220,000円</td><td className="px-4 py-3 text-center">7,700円</td><td className="px-4 py-3 text-center">月4名まで無料（5名以降5,500円/名）</td><td className="px-4 py-3 text-center">220,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">エグゼクティブ（男性・2年間）</td><td className="px-4 py-3 text-center">220,000円</td><td className="px-4 py-3 text-center">11,000円</td><td className="px-4 py-3 text-center">月4名まで無料（5名以降5,500円/名）</td><td className="px-4 py-3 text-center">220,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">ラグジュアリー（男女とも）</td><td className="px-4 py-3 text-center">55,000円</td><td className="px-4 py-3 text-center">22,000円（月5名紹介）／33,000円（月10名紹介）。本交際中は11,000円</td><td className="px-4 py-3 text-center">月4名まで無料（5名以降5,500円/名）</td><td className="px-4 py-3 text-center">220,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">20代限定トライアル</td><td className="px-4 py-3 text-center" colSpan={3}>11,000円（1ヶ月）</td><td className="px-4 py-3 text-center">220,000円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">
            ※2026年10月21日に公式の料金ページで確認し、10月25日にも同じ金額であることを再確認した税込料金です（以前「公式サイト参照」としていたプライム・エグゼクティブの月会費は、今回の確認で公式に男女別の金額が載っていたため反映しました）。このほか、女性限定の花形プラン・医師/歯科医師向けのドクターコース（いずれもプライムの初期費用が66,000円になる特別限定）、誕生月の方の入会金10%OFFなどのキャンペーンが告知されています（併用不可）。料金は改定される場合があるため、最新の金額・条件は必ず公式サイトまたは無料相談でご確認ください。
          </p>
        </section>

        {/* Success rate caution */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            成婚率85.7%を参照する際の注意点
          </h2>
          <div className="bg-[#FAFAF8] rounded-xl border border-gray-100 p-6">
            <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
              エクセレンス青山が掲げる成婚率85.7%は自社公称値で、定義は<strong>「成婚退会者÷総退会者」（男性会員対象）、対象期間は2019年1〜12月の実績</strong>です。
            </p>
            <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
              ご注意いただきたいのは、この数値が<strong>2019年の実績で、2026年現在から見るとデータが古い</strong>という点です。当時から会員構成や市場環境は変化している可能性があるため、この数値だけで現在の成婚しやすさを判断するのは適切ではありません。
            </p>
            <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
              また、成婚率の算出方法は業界で統一されておらず、「成婚退会者÷総退会者」という定義は他社の「全会員に対する成婚割合」等とは異なります。他社の成婚率と単純比較せず、無料相談で直近の成婚実績を直接質問することをおすすめします。
            </p>
          </div>
        </section>

        {/* Strengths */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            エクセレンス青山の強み・特徴
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
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">エクセレンス青山</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">ウェルスマ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">naco-do</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">55,000円〜</td><td className="px-4 py-3 text-center">49,800円</td><td className="px-4 py-3 text-center">29,800円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">7,700円〜</td><td className="px-4 py-3 text-center">11,800円〜</td><td className="px-4 py-3 text-center">16,800円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">成婚料</td><td className="px-4 py-3 text-center">220,000円</td><td className="px-4 py-3 text-center">149,800円</td><td className="px-4 py-3 text-center">0円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">紹介可能会員</td><td className="px-4 py-3 text-center">約33万人（4連盟）</td><td className="px-4 py-3 text-center">約10.8万人（IBJ）</td><td className="px-4 py-3 text-center">約12.1万人</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">仲人型（ハイクラス向け）</td><td className="px-4 py-3 text-center">オンライン仲人型</td><td className="px-4 py-3 text-center">オンライン完結型</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※比較各社の数値は当サイト各レビュー記事の調査時点の情報（会員数は各連盟・各社公表値）です。お見合い料の有無など料金体系が異なるため、総額での比較をおすすめします。</p>
        </section>

        {/* Reviews / How to verify */}
        <ReviewVoices
          name="エクセレンス青山"
          checkedOn="2026年10月25日"
          reviewNote="Googleマップの「結婚相談所エクセレンス青山」には口コミ31件・評価4.6がありました（当サイトが2026年8月18日に取得）。2026年10月14日に公式サイトを再確認し、スタンダード（入会金55,000円・月会費7,700円・成婚料220,000円）ほかの料金に変更はありませんでした。キャンペーンとして、男性限定プレミアムコースの初期費用5,500円（通常33,000円・毎月先着10名）、月中の「無料オンラインカウンセリング」で入会金10%OFFなどが告知されています（併用不可）。定休日は公式サイト内で火曜・水曜の表記が混在しているため、来店前にご確認ください。"
        />


        <section id="review-themes" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">エクセレンス青山のIBJ口コミ41件のテーマ別集計（2026年10月25日確認）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            エクセレンス青山の口コミが最も多く掲載されている媒体は、IBJ公式サイトの相談所ページです。当サイトでは掲載中の41件（全5ページ）を全件確認し、本文に各テーマの語句を含む投稿の件数を数えました。1件に複数のテーマが含まれる場合は、それぞれで数えています。本文のない投稿1件を除く40件が集計対象です。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">テーマ</th>
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C] whitespace-nowrap">件数</th>
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">内容の傾向</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">成婚の報告</td><td className="px-4 py-3">18件</td><td className="px-4 py-3">成婚退会した、または成婚予定であるという投稿</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">カウンセラーの親身さ・丁寧さ</td><td className="px-4 py-3">16件</td><td className="px-4 py-3">初回カウンセリングから成婚までの相談対応に触れた投稿</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">お見合い・交際中の助言</td><td className="px-4 py-3">11件</td><td className="px-4 py-3">お見合いや仮交際がうまくいかなかったときの相談・進捗に応じた助言に触れた投稿</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">返信・レスポンス</td><td className="px-4 py-3">9件</td><td className="px-4 py-3">連絡への返信の早さに触れた投稿</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">料金・オンライン</td><td className="px-4 py-3">各2件</td><td className="px-4 py-3">料金やオンライン対応に触れた投稿は少数です</td></tr>
                <tr className="border-t border-gray-50 bg-red-50/40"><td className="px-4 py-3">星1の投稿</td><td className="px-4 py-3">4件</td><td className="px-4 py-3">入会前カウンセリングで、年収に関する助言の伝え方に配慮がなかった 2件（本文が完全に一致）／カウンセラーの口調が強く、お見合い申込み後のフォローを感じなかった 1件／仮交際中の相手会員の行動への不満 1件</td></tr>
              </tbody>
            </table>
          </div>
          <ul className="space-y-1 text-xs text-[#2C2C2C]/60 leading-relaxed">
            <li>※出典：<a href="https://www.ibjapan.com/area/tokyo/66626/review/" target="_blank" rel="nofollow noopener noreferrer" className="underline">IBJ公式サイト エクセレンス青山のクチコミ一覧</a>（2026年10月25日に全5ページを確認）。分類は当サイトによる語句の集計で、口コミの本文は転載していません。</li>
            <li>※投稿時期は相対表記のみで、直近1年以内（「〇ヵ月前」以内の表示）の投稿は19件（星5が16件・星1が3件）、残る22件は「1年前」〜「4年前」の表示です。</li>
            <li>※本文が完全に一致する投稿が3組（7件）あり、上の件数はそれらを含めて数えています。口コミは投稿者個人の見解で、当サイトでは事実関係を確認していません。</li>
            <li>※IBJ公式サイトの同じ相談所ページ内で、成婚実績の表記が「700組以上」と「800組以上」に分かれています（2026年10月25日確認）。当サイトでは組数を実績として扱っていません。</li>
          </ul>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mt-4">
            件数は41件と多くありませんが、星5の投稿の多くは成婚の報告とカウンセラーの伴走に触れており、星1の投稿は入会前カウンセリングの伝え方や担当者の口調に集中しています。率直な助言を求めるか、配慮のある伝え方を重視するかで評価が分かれやすい傾向がうかがえるため、無料カウンセリングで担当予定のカウンセラーと実際に話し、相性を確認することをおすすめします。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            エクセレンス青山の評判・口コミに関する当サイトの調査結果
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            当サイトで「エクセレンス青山 評判」「エクセレンス青山 口コミ」を調査しました。件数がまとまっている媒体はIBJ公式サイトのクチコミ（41件・テーマ別の集計は前述）とGoogleマップ（31件・2026年8月18日取得）です。比較記事には体験談を掲載したものもありますが、投稿元や投稿時期が示されていないものが多いため、当サイトでは引用していません。以下では、公式情報をもとにした「入会前の見極め方」を整理しています。
          </p>
          <div className="bg-[#FAFAF8] rounded-xl border border-gray-100 p-6">
            <h3 className="font-medium text-[#A08447] mb-4 tracking-wider">無料相談で確認したい5つの見極めポイント</h3>
            <ul className="space-y-3 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">1.</span>直近の成婚実績（公称85.7%は2019年実績のため、最新年の実績と算出定義を必ず質問する）</li>
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">2.</span>お見合い料込みの想定総額（月に何回お見合いする想定か。回数次第でプライムコースとの損益分岐が変わる）</li>
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">3.</span>コースごとの月会費・お見合い料が男女で違う点（例：プライムは女性が月14,300円・お見合い月4名まで無料、男性が月7,700円・お見合い5,500円/回）</li>
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">4.</span>4連盟（IBJ/BIU/TMS/NNR）をどう使い分けて紹介してくれるのかの具体的な運用</li>
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">5.</span>担当カウンセラーとの相性（専属仲人型は担当者次第で活動の質が大きく変わるため、面談で必ず確認）</li>
            </ul>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本記事は2026年7月31日時点の公式サイト掲載情報を基に作成し、料金は2026年10月21日・10月25日、解約条件と4連盟の会員数は2026年10月25日に公式サイトで再確認しています。サービス内容・料金は変更される場合があります。</p>
        </section>

        {/* Compare links */}
              <FeePosition slug="excellence-aoyama" />

<section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            エクセレンス青山と他社を比較して選ぶ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            エクセレンス青山が自分に合うか迷ったら、お見合い料込みの総額・紹介可能な会員数・サポート形式を他社と見比べることをおすすめします。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（一覧）を見る</Link></li>
            <li><Link href="/review/wellsma/" className="text-[#A08447] underline">ウェルスマの評判・料金を見る</Link></li>
            <li><Link href="/review/partner-agent/" className="text-[#A08447] underline">パートナーエージェントの評判・料金を見る</Link></li>
            <li><Link href="/review/sunmarie/" className="text-[#A08447] underline">サンマリエの評判・料金を見る</Link></li>
          </ul>
        </section>

        {/* FAQ */}

        <ReviewExtra {...REVIEW_EXTRA} checkedOn="2026年10月25日" />
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

        

        {/* Related */}
        <section className="mb-8">
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

        <A8Banner ad="excellence" />
        <AuthorBox />
        <BrandStores href="/review/excellence-aoyama/" brandName="エクセレンス青山" />
      </article>
    </>
  );
}
