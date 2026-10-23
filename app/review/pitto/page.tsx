import Link from "next/link";
import { ReviewVoices } from "@/components/ReviewFacts";
import Breadcrumb from "@/components/Breadcrumb";
import FeePosition from "@/components/FeePosition";
import AuthorBox from "@/components/AuthorBox";
import A8Banner from "@/components/A8Banner";
import FlowGuide from "@/components/FlowGuide";
import ReviewExtra from "@/components/ReviewExtra";

export const metadata = {
  title: "P!っと縁結び（ピッと縁結び）の口コミ・評判｜ピップ運営のIBJ加盟店・料金・入会条件【2026年10月】",
  description:
    "P!っと縁結び（ピッと縁結び）は、ピップ株式会社が2024年7月に開業したIBJ加盟の結婚相談所です。初期費用8.8万〜11万円・成婚料22万円の料金、4媒体の口コミの傾向と悪い口コミ、休会・解約規定を公式情報と照合して整理しています。",
};

const overview = {
  name: "P!っと縁結び",
  company: "ピップ株式会社（本社: 大阪市中央区。「ピップエレキバン」「スリムウォーク」で知られる企業本体が運営。相談所の所在地は東京都千代田区内神田3-3-7・JR神田駅徒歩1分）",
  type: "仲人型（専任カウンセラー＋IBJシステム紹介・AIマッチング活用）",
  federation: "IBJ正規加盟（2024年7月30日開業。IBJ登録会員数107,597名・2026年3月末時点の公式サイト掲載値）",
  area: "全国（東京拠点・オンライン面談/オンラインお見合い対応・東京周辺は対面相談も可）",
  initialFee: "初期費用88,000円〜110,000円（税込・プランにより異なる）",
  monthlyFee: "11,000円〜16,500円（税込・2プラン）",
  matchingFee: "220,000円（税込・全プラン共通）",
  successRate: "成婚率は非公表（成婚の定義は「婚約またはそれと同等の状態」）",
};

const strengths = [
  {
    title: "ピップエレキバンのピップ株式会社の本体が運営しています",
    desc: "P!っと縁結びは、磁気治療器「ピップエレキバン」や「スリムウォーク」で知られるピップ株式会社（1946年設立・本社大阪市）が、2024年7月30日に新規事業として開業した結婚相談所です（同日付の同社ニュースリリース）。公式サイトはピップのコーポレートドメイン（pipjapan.co.jp）のサブドメインで運営されており、名前貸しではなく企業本体の婚活支援事業であることが確認できます。",
  },
  {
    title: "IBJ正規加盟で約10.7万名の会員基盤を利用可能",
    desc: "日本結婚相談所連盟（IBJ）の正規加盟店であることが公式サイトに明記されており、IBJ登録会員107,597名（公式サイト掲載値）の中からお相手を探せます。IBJシステム内の紹介に加え、専任カウンセラーが直接お相手を探す「プロフィール交換会」を積極活用すると記載されています。",
  },
  {
    title: "お見合い料無料のベーシックプランと相談無制限のサポート",
    desc: "ベーシックプランはお見合い料が何回でも無料で、2ヶ月に1回の定期カウンセリング（1時間）に加えて30分以内の都度相談が無制限です。電話・メール・チャット・LINEでのサポートに対応し、Zoom等でのオンラインカウンセリング・オンラインお見合いも可能です。",
  },
];

const pros = [
  "広く知られたピップ株式会社の本体運営で、運営元の素性が明確",
  "IBJ正規加盟で紹介可能な会員基盤が大きい（107,597名・公式掲載値）",
  "ベーシックプランはお見合い料が無料（回数を気にせず会える）",
  "30分以内の都度相談が無制限で、LINE・チャットでも相談できる",
  "休会制度あり（月1,100円・最大3ヶ月）で活動を一時停止できる",
];

const cons = [
  "成婚料220,000円がかかる成功報酬型（成婚時の総額は要確認）",
  "自社の成婚率・成婚実績数は非公表（掲載データはIBJ全体の数値）",
  "エントリープランはお見合い料5,500円/回が別途かかる",
  "お見合いキャンセル1万円・当日変更/15分以上の遅刻2万円など違約金規定がある",
];

const faqs = [
  {
    q: "P!っと縁結びの運営会社はピップエレキバンのピップですか？",
    a: "はい。運営はピップ株式会社（本社: 大阪市中央区）で、「ピップエレキバン」「スリムウォーク」の製造販売で知られる企業本体です。同社は2024年7月30日付のニュースリリースで、IBJに加盟して婚活支援事業「P!っと縁結び」を開業したと発表しています。相談所の所在地は東京都千代田区内神田3-3-7（JR神田駅徒歩1分）で、公式サイトもピップのコーポレートドメイン（pipjapan.co.jp）のサブドメインで運営されています。",
  },
  {
    q: "P!っと縁結びの悪い口コミ・評判にはどのような内容がありますか？",
    a: "2026年10月23日に当サイトが確認した4媒体のうち、気になる点として挙げられていたのは「関東以外では対面相談ができない」「成婚料がやや高い」の2テーマ（比較記事「みんなの婚活体験談」掲載）と、「実店舗やカウンセラーの数が多い相談所を求める方には向かない」という指摘（訪問取材記事「婚活看護師みちこの申し送り。」）です。いずれも公式情報と一致しており、対面相談は東京周辺に限られ（公式FAQ）、成婚料は220,000円です（公式「プラン・料金」）。IBJ公式サイトのクチコミ9件のうち本文を確認できた5件には、不満を述べた内容は見当たりませんでした。ただし、口コミの総数が少ない段階であるため、傾向は今後変わる可能性があります。",
  },
  {
    q: "P!っと縁結びの口コミが少ないのはなぜですか？",
    a: "開業が2024年7月と比較的新しく、カウンセラーも2名の少人数体制であるためと考えられます。当サイトの確認時点（2026年10月23日）で、利用者の声を掲載している媒体はIBJ公式サイトのクチコミ（9件）と比較記事2件程度でした。また、比較記事・取材記事の多くは、P!っと縁結びの公式サイトの「お知らせ」でメディア掲載として紹介されている媒体です。口コミだけで判断せず、無料相談で料金・サポート体制を直接確認することをおすすめします。",
  },
  {
    q: "P!っと縁結びの入会条件を教えてください。",
    a: "公式FAQでは、男女とも20歳以上の独身者であること、経済的・身体的・精神的に支障がないこと、反社会的勢力の関係者でないことが条件とされています。離婚が成立していない場合は入会できません。入会時には住民票・独身証明書（いずれも3ヶ月以内の原本）、最終学歴証明書、収入証明書、写真付き本人確認書類などが必要です。",
  },
  {
    q: "P!っと縁結びはIBJに加盟していますか？",
    a: "はい。公式サイトに「『P!っと縁結び』はIBJ正規加盟店です」と明記されています。IBJ登録会員数107,597名（2026年3月末時点・公式サイト掲載値）のネットワークからお相手を探せます。なお、2026年7月16日の公式お知らせでは「IBJ会員数11万名突破」と告知されています。",
  },
  {
    q: "P!っと縁結びの料金はいくらですか？",
    a: "税込で、ベーシックプランが初期費用110,000円（入会金22,000円＋登録料33,000円＋活動サポート費55,000円）・月会費16,500円・お見合い料無料、エントリープランが初期費用88,000円・月会費11,000円・お見合い料5,500円/回です。成婚料は両プラン共通で220,000円です。料金は改定される場合があるため、最新の金額は必ず公式サイトでご確認ください。",
  },
  {
    q: "P!っと縁結びはオンラインで活動できますか？",
    a: "はい。全国対応で、Zoom等を使ったオンラインカウンセリングとオンラインお見合いに対応しています（公式FAQに記載）。日常の相談は電話・メール・チャット・LINEでも可能です。東京周辺の方は対面相談もできます。",
  },
  {
    q: "P!っと縁結びの休会・解約のルールはどうなっていますか？",
    a: "休会は月1,100円（税込）で最大3ヶ月まで利用でき、開始希望日の10日前までの申請が必要です。契約日から8日以内であればクーリング・オフにより無条件解除・全額返金となります。退会は10日前までにカウンセラーへ連絡し、所定の退会届を提出する必要があります。中途退会時に月会費の日割り返金はなく、お見合いキャンセル1万円・当日変更や15分以上の遅刻2万円などの違約金規定もあるため、契約書面で必ずご確認ください。",
  },
  {
    q: "P!っと縁結びの成婚率はどのくらいですか？",
    a: "自社の成婚率は公表されていません。公式サイトに掲載されているのはIBJ全体のデータ（会員数・年間成婚者数・活動日数の中央値など、出典はIBJ「成婚白書」等）です。なお成婚の定義は「婚約またはそれと同等の状態」とされています。",
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
  { name: "IBJメンバーズ", path: "/review/ibj-members/" },
  { name: "ウェルスマ", path: "/review/wellsma/" },
  { name: "サンマリエ", path: "/review/sunmarie/" },
  { name: "パートナーエージェント", path: "/review/partner-agent/" },
];

// 競合上位記事との差分（2026-10-14 競合比較で追加）
const REVIEW_EXTRA = {
  "name": "P!っと縁結び",
  "ratings": [
    {
      "media": "IBJ公式サイト P!っと縁結びのクチコミ",
      "score": "点数は転載していません",
      "count": "9件（本文表示5件）",
      "detail": "本文を確認できた5件はいずれも、カウンセラーの親身な対応に触れた内容です。現時点では件数が少ない状況です。IBJの相談所ページには成婚者エピソードが5件掲載されています。",
      "url": "https://www.ibjapan.com/area/tokyo/52018/"
    }
  ],
  "ratingNotes": [
    "IBJ公式サイト（日本結婚相談所連盟の運営サイト）の相談所ページに掲載されている口コミです。",
    "当サイトでは、第三者サイトの星評価・点数は転載せず、件数と内容の傾向のみを掲載しています。",
    "比較記事・取材記事を含む4媒体の傾向は、本ページの「口コミ・評判の掲載媒体とテーマ別の集計」で整理しています。"
  ],
  "fitYes": [
    "運営会社の素性が明確な相談所を選びたい方（ピップ株式会社の本体運営）",
    "お見合い料無料のベーシックプランで、月40名まで申し込みたい方",
    "費用を抑えて慎重に進めたい方（エントリープラン: 月会費11,000円・月20名まで）",
    "看護師など不規則なシフトで、オンライン中心に活動したい方"
  ],
  "fitNo": [
    "成婚料220,000円を避けたい方",
    "自社の成婚率を確認してから決めたい方（非公表）",
    "お見合いのキャンセル・遅刻の違約金規定を負担に感じる方"
  ],
  "entry": [
    [
      "料金（公式・税込）",
      "ベーシック: 初期費用110,000円（入会金22,000＋登録料33,000＋活動サポート費55,000）・月会費16,500円（月40名まで申込可）・お見合い料無料・成婚料220,000円・定期カウンセリング2ヶ月に1回。エントリー: 初期費用88,000円（活動サポート費33,000）・月会費11,000円（月20名まで）・お見合い料5,500円/回・成婚料220,000円・定期カウンセリング6ヶ月に1回。都度相談（30分以内）は両プランとも無制限です。"
    ],
    [
      "必要書類",
      "入会条件は男女とも20歳以上の独身者です（公式FAQ）。住民票・独身証明書（いずれも3ヶ月以内の原本）、最終学歴証明書（短大卒以上）、収入証明書、写真付き本人確認書類、プロフィール写真1枚以上（3ヶ月以内撮影）、国家資格証明書（該当者）。"
    ],
    [
      "中途解約",
      "クーリング・オフ（契約から8日以内）の場合は全額返金されます。その後も解除でき、サービス提供開始後は提供済みサービスの対価＋「2万円または契約残額の20%のいずれか低い額」、提供開始前は3万円までが請求されます。"
    ],
    [
      "追加費用",
      "プロフィール撮影代、婚活パーティーの参加費は別途必要です（公式FAQ）。"
    ]
  ],
  "entrySource": "P!っと縁結び公式「プラン・料金」（https://pi-enmusubi.pipjapan.co.jp/plan/）・よくあるご質問",
  "facts": [
    "IBJ AWARD 2026年上期 PREMIUMを受賞しています（2026年7月16日の公式お知らせ）。",
    "『日経トレンディ』2026年6月4日発売号の「最新 結婚相談所調査」特集に掲載されました（2026年6月10日の公式お知らせ）。",
    "入会金・初期費用50%OFF（ベーシックプランの初期費用110,000円→55,000円）の「婚活応援キャンペーン」は2026年8月10日〜10月10日受付分までの期間限定で、10月23日時点では終了しています。後継のキャンペーンは同日時点の公式お知らせでは告知されていません。",
    "2026年10月2日の公式お知らせで、ブログ「婚活看護師みちこの申し送り。」による訪問取材記事の掲載が告知されています。",
    "初期費用半額のキャンペーンは2026年5月14日〜6月30日にも実施されており（同社PR TIMES発表）、2026年は期間限定の割引が複数回行われています。入会時期によって初期費用が変わる可能性があるため、無料相談の際に実施中のキャンペーンをご確認ください。"
  ]
};

export default function PittoReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "P!っと縁結び" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          P!っと縁結び（ピッと縁結び）の口コミ・評判｜ピップ株式会社運営のIBJ正規加盟店を公式情報で検証
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月23日（料金・休会・解約規定は2026年10月23日に公式「プラン・料金」「よくあるご質問」で再確認。運営会社の本社所在地を訂正し、口コミ4媒体のテーマ別集計と悪い口コミのFAQを追加）</p>

        <div className="bg-white rounded-2xl p-6 mb-4 border border-gray-100">
          <h2 className="text-base font-medium text-[#A08447] mb-3 tracking-widest">P!っと縁結び（ピッと縁結び）とは</h2>
          <dl className="grid sm:grid-cols-[7rem_1fr] gap-x-4 gap-y-2 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <dt className="font-medium text-[#2C2C2C]/60">運営会社</dt>
            <dd>ピップ株式会社（「ピップエレキバン」の製造販売元・本社大阪市）。2024年7月30日に婚活支援事業として開業しています。</dd>
            <dt className="font-medium text-[#2C2C2C]/60">形態</dt>
            <dd>IBJ正規加盟の仲人型結婚相談所です。カウンセラー2名体制で、オンライン中心に全国対応しています（対面相談は東京周辺のみ）。</dd>
            <dt className="font-medium text-[#2C2C2C]/60">料金</dt>
            <dd>初期費用88,000円〜110,000円・月会費11,000円〜16,500円・成婚料220,000円（税込・2プラン）です。1年で成婚した場合の総額は、当サイトの試算でベーシックプラン528,000円、エントリープラン440,000円＋お見合い料です。</dd>
            <dt className="font-medium text-[#2C2C2C]/60">口コミ</dt>
            <dd>確認できた媒体は4つで、良い声は「カウンセラーの親身な対応」「大手企業運営の安心感」、気になる声は「対面相談のエリアが限られる」「成婚料が高め」に集中しています。件数はまだ少ない段階です。</dd>
          </dl>
          <p className="text-xs text-[#2C2C2C]/50 mt-3">出典: P!っと縁結び公式サイト（プラン・料金／よくあるご質問）、ピップ株式会社ニュースリリース（2024年7月30日）、IBJ公式サイト相談所ページ。2026年10月23日確認。</p>
        </div>

        {/* Conclusion box */}
        <div className="bg-[#F5F0EB] rounded-2xl p-6 mb-4 border border-[#A08447]/20">
          <h2 className="text-base font-medium text-[#A08447] mb-3 tracking-widest">P!っと縁結びが適している方</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
            P!っと縁結びは、<strong>「ピップエレキバン」のピップ株式会社が本体運営</strong>するIBJ正規加盟の結婚相談所です。専任カウンセラーの仲人型サポートを受けながらIBJの約10.7万名（公式掲載値）の会員基盤から相手を探すことができ、Zoom等でのオンライン面談・オンラインお見合いにも対応しています。運営元が明確な会社の相談所を選びたい方に適しています。
          </p>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
            料金は税込で初期費用88,000円〜110,000円・月会費11,000円〜16,500円・<strong>成婚料220,000円</strong>の成功報酬型です。月会費を抑えたエントリープランはお見合い料5,500円/回が別途かかるため、お見合い回数が多くなりそうな方はお見合い料無料のベーシックプランを軸に、総額で比較することをおすすめします。
          </p>
        </div>

        <A8Banner ad="pitto" />

        {/* Overview table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="bg-[#A08447] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
          <div className="divide-y divide-gray-50">
            {Object.entries({
              サービス名: overview.name,
              運営会社: overview.company,
              タイプ: overview.type,
              加盟連盟: overview.federation,
              対応エリア: overview.area,
              初期費用: overview.initialFee,
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
            P!っと縁結びの料金プラン（税込）
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">ベーシックプラン</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">エントリープラン</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">入会金</td><td className="px-4 py-3 text-center" colSpan={2}>22,000円（共通）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">登録料</td><td className="px-4 py-3 text-center" colSpan={2}>33,000円（共通）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">活動サポート費</td><td className="px-4 py-3 text-center">55,000円</td><td className="px-4 py-3 text-center">33,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用 計</td><td className="px-4 py-3 text-center font-medium">110,000円</td><td className="px-4 py-3 text-center font-medium">88,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">16,500円</td><td className="px-4 py-3 text-center">11,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">お見合い料</td><td className="px-4 py-3 text-center">無料</td><td className="px-4 py-3 text-center">5,500円/回</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">成婚料</td><td className="px-4 py-3 text-center" colSpan={2}>220,000円（共通）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">定期カウンセリング</td><td className="px-4 py-3 text-center">2ヶ月に1回（1時間）＋都度相談無制限</td><td className="px-4 py-3 text-center">6ヶ月に1回（1時間）＋都度相談無制限</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-[#FAFAF8] rounded-xl border border-gray-100 p-6 mt-6">
            <h3 className="font-medium text-[#A08447] mb-3 tracking-wider">1年活動して成婚した場合の総額試算（税込）</h3>
            <ul className="space-y-2 text-sm text-[#2C2C2C]/80 list-disc pl-5 mb-3">
              <li>ベーシックプラン: 初期費用110,000円＋月会費16,500円×12ヶ月（198,000円）＋成婚料220,000円＝<strong>528,000円</strong>（お見合い料は何回でも無料）</li>
              <li>エントリープラン: 初期費用88,000円＋月会費11,000円×12ヶ月（132,000円）＋成婚料220,000円＝<strong>440,000円</strong>＋お見合い料5,500円×回数</li>
            </ul>
            <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">※当サイトによる単純合計の試算です。エントリープランは月4回お見合いすると年264,000円のお見合い料が加わり、ベーシックプランより高くなる計算です。お見合い回数の見込みに応じて選ぶことをおすすめします。このほかプロフィール撮影代・婚活パーティ参加費が別途かかる場合があります（公式FAQに記載）。</p>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">
            ※2026年10月23日に公式「プラン・料金」ページ（pi-enmusubi.pipjapan.co.jp/plan/）で再確認した税込料金です（8月6日・10月14日の確認時点から変更ありません）。公式ページの注記では、活動サポート費は1年分の前受金とされています。料金は改定されることがあるため、最新の金額は必ず公式サイトでご確認ください。
          </p>
        </section>

        {/* Unique section: major-company-group operation */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            大手企業が運営する結婚相談所という選択肢
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            結婚相談所は開業のハードルが比較的低く、個人経営の相談所も多い業界です。個人経営が悪いわけではありませんが、「運営元の素性がはっきりしているか」を重視する方にとって、P!っと縁結びには事実として確認できる安心材料がいくつかあります。
          </p>
          <div className="bg-[#FAFAF8] rounded-xl border border-gray-100 p-6">
            <ul className="space-y-3 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">1.</span>運営はピップ株式会社の本体（子会社や別法人への名前貸しではなく、公式サイトがピップのコーポレートドメイン pipjapan.co.jp のサブドメインで運営されている）</li>
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">2.</span>ピップ株式会社は「ピップエレキバン」「スリムウォーク」の製造販売で知られ、100年を超える歴史を持つ企業（公式サイト記載）</li>
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">3.</span>ピップのコーポレートサイトの事業案内にも、ライフサポート事業として「婚活支援事業」が明記されている（一時的なキャンペーンではなく事業として位置づけ）</li>
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">4.</span>担当カウンセラー2名が公式サイトで実名紹介されており、誰がサポートするのかを入会前に確認できる</li>
            </ul>
          </div>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mt-4">
            同社は健康関連商品のメーカーとして「結婚による家族形成が心の安定と身心の健康につながる」という考え方を掲げており、婚活支援を本業（THE WELLNESS COMPANY）の延長として位置づけています。一方で、結婚相談所としてのサービス開始からの歴史や自社成婚実績の蓄積は公表されていないため、無料相談で運営体制や実績を直接確認することをおすすめします。
          </p>
        </section>

        {/* Strengths */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            P!っと縁結びの強み・特徴
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
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">P!っと縁結び</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">ウェルスマ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">エン婚活エージェント</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">88,000円〜110,000円</td><td className="px-4 py-3 text-center">49,800円</td><td className="px-4 py-3 text-center">10,780円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">11,000円〜16,500円</td><td className="px-4 py-3 text-center">11,800円〜</td><td className="px-4 py-3 text-center">14,300円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">成婚料</td><td className="px-4 py-3 text-center">220,000円</td><td className="px-4 py-3 text-center">149,800円</td><td className="px-4 py-3 text-center">0円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">仲人型（IBJ）</td><td className="px-4 py-3 text-center">オンライン仲人型（IBJ）</td><td className="px-4 py-3 text-center">オンライン完結型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">ピップ株式会社の本体運営</td><td className="px-4 py-3 text-center">完全オンラインの仲人型</td><td className="px-4 py-3 text-center">全額返金保証</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※比較各社の数値は当サイト各レビュー記事の調査時点の情報です。最新の料金は各社公式サイトでご確認ください。</p>
        </section>

        {/* Reviews / How to verify */}
        <ReviewVoices
          name="P!っと縁結び"
          checkedOn="2026年10月23日"
          reviewNote="「P!っと縁結び」「ピッと縁結び」「Pっと縁結び」はいずれも同じピップ株式会社の結婚相談所です。開業から2年余りのため口コミの総数は少なく、下記は4媒体に掲載された内容を当サイトがテーマ別に要約したものです（本文の転載は行っていません）。なお、当サイトの2026年10月14日のGoogleマップ調査では店舗としての口コミを確認できませんでしたが、Google上の口コミとして3件を紹介している比較記事（Sucma）があります。"
          good={[
            { text: "カウンセラーが親身に寄り添ってくれるという内容です。本文を確認できた5件すべてで触れられています。", source: "IBJ公式サイト P!っと縁結び相談所ページのクチコミ（9件中、本文表示5件）" },
            { text: "ピップ株式会社という大手企業が運営していることへの安心感を挙げる声です。", source: "みんなの婚活体験談（筆者によるクラウドワークス調査とされる口コミ）、Sucma（Google上の口コミとして紹介）" },
            { text: "担当者の連絡の速さや、活動計画を丁寧に立ててもらえた点を評価する声です。", source: "IBJ公式サイトのクチコミ、Sucma" },
            { text: "IBJ加盟で出会いの数が多いこと、オンラインで全国から活動できることを評価する声です。", source: "みんなの婚活体験談" },
          ]}
          bad={[
            { text: "関東以外では対面で相談できないという指摘です。公式FAQでも対面相談は東京周辺に限られています。", source: "みんなの婚活体験談" },
            { text: "成婚料がやや高いという指摘です。成婚料は両プラン共通で220,000円（税込）です。", source: "みんなの婚活体験談" },
            { text: "実店舗が多い相談所や、在籍カウンセラーが多い相談所を求める方には向かないという指摘です。", source: "婚活看護師みちこの申し送り。（訪問取材記事・広告を含む旨の記載あり）" },
          ]}
          caution={[
            "口コミの件数が少ないため、個人の感想が全体の傾向を大きく左右します。ご自身の条件に当てはまるかは、無料相談で確認することをおすすめします。",
            "比較記事・取材記事3媒体はいずれも、P!っと縁結びの公式サイトの「お知らせ」でメディア掲載として紹介されている媒体です。",
          ]}
        />

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            P!っと縁結びの口コミ・評判の掲載媒体とテーマ別の集計
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            当サイトでは2026年10月23日に「P!っと縁結び 口コミ」「ピッと縁結び 評判」で検索し、利用者の声を掲載している媒体を確認しました。上位の多くは運営会社の発表資料で、利用者の声を確認できたのは次の4媒体です。媒体の性質（運営元との関係）もあわせて掲載しています。
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-100">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-3 py-2 text-left font-medium whitespace-nowrap">媒体</th>
                  <th className="px-3 py-2 text-left font-medium">掲載内容と件数</th>
                  <th className="px-3 py-2 text-left font-medium">媒体の性質</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100 align-top"><td className="px-3 py-2 font-medium text-[#2C2C2C]/80"><a href="https://www.ibjapan.com/area/tokyo/52018/" target="_blank" rel="nofollow noopener noreferrer" className="underline">IBJ公式サイト 相談所ページ</a></td><td className="px-3 py-2">クチコミ9件（本文表示5件）、成婚者エピソード5件</td><td className="px-3 py-2 text-[#2C2C2C]/75">加盟先の連盟が運営するサイトです。</td></tr>
                <tr className="border-t border-gray-100 align-top"><td className="px-3 py-2 font-medium text-[#2C2C2C]/80"><a href="https://syohey.com/pitto-enmusubi-reviews/" target="_blank" rel="nofollow noopener noreferrer" className="underline">みんなの婚活体験談</a></td><td className="px-3 py-2">良い口コミ4テーマ・気になる口コミ2テーマ（各2件・計12件）、公式掲載の成婚事例3件の紹介</td><td className="px-3 py-2 text-[#2C2C2C]/75">個人の比較ブログです。口コミは筆者のクラウドワークス調査とされています。公式サイトのお知らせで掲載が告知されています。</td></tr>
                <tr className="border-t border-gray-100 align-top"><td className="px-3 py-2 font-medium text-[#2C2C2C]/80"><a href="https://hirorinyu.jp/dating-agency/pi-enmusubi/" target="_blank" rel="nofollow noopener noreferrer" className="underline">Sucma</a></td><td className="px-3 py-2">Google上の口コミ3件（良い3件・否定的0件。記事側が厳選と明記）</td><td className="px-3 py-2 text-[#2C2C2C]/75">婚活サービスの比較サイトです。公式サイトのお知らせで掲載が告知されています。</td></tr>
                <tr className="border-t border-gray-100 align-top"><td className="px-3 py-2 font-medium text-[#2C2C2C]/80"><a href="https://www.ns-konkatsu-michiko.com/pitto-enmusubi-interview/" target="_blank" rel="nofollow noopener noreferrer" className="underline">婚活看護師みちこの申し送り。</a></td><td className="px-3 py-2">訪問取材の記録（利用者の口コミではありません）。向いている人5項目・向いていない人3項目</td><td className="px-3 py-2 text-[#2C2C2C]/75">運営会社の協力による取材で、広告を含む旨が記載されています。公式サイトのお知らせ（2026年10月2日）で掲載が告知されています。</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="font-medium text-[#A08447] mb-3 tracking-wider">テーマ別の集計と公式情報との照合</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-3 py-2 text-left font-medium">テーマ</th>
                  <th className="px-3 py-2 text-left font-medium whitespace-nowrap">傾向</th>
                  <th className="px-3 py-2 text-left font-medium whitespace-nowrap">言及した媒体数</th>
                  <th className="px-3 py-2 text-left font-medium">公式情報との照合（当サイト確認）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100 align-top"><td className="px-3 py-2">カウンセラーの親身な対応</td><td className="px-3 py-2">良い</td><td className="px-3 py-2">3媒体</td><td className="px-3 py-2 text-[#2C2C2C]/75">カウンセラーは2名で、公式サイトで実名紹介されています。30分以内の都度相談は両プランとも無制限です。</td></tr>
                <tr className="border-t border-gray-100 align-top"><td className="px-3 py-2">大手企業運営の安心感</td><td className="px-3 py-2">良い</td><td className="px-3 py-2">3媒体</td><td className="px-3 py-2 text-[#2C2C2C]/75">ピップ株式会社の本体運営で、2024年7月30日に同社が開業を発表しています。</td></tr>
                <tr className="border-t border-gray-100 align-top"><td className="px-3 py-2">オンラインで全国から活動できる</td><td className="px-3 py-2">良い</td><td className="px-3 py-2">2媒体</td><td className="px-3 py-2 text-[#2C2C2C]/75">無料相談は基本オンラインで、Zoom等のオンラインお見合いに対応しています（公式FAQ）。</td></tr>
                <tr className="border-t border-gray-100 align-top"><td className="px-3 py-2">対面相談・拠点が限られる</td><td className="px-3 py-2">気になる</td><td className="px-3 py-2">2媒体</td><td className="px-3 py-2 text-[#2C2C2C]/75">対面相談は東京周辺のみです（公式FAQ）。拠点は東京・神田の1か所です。</td></tr>
                <tr className="border-t border-gray-100 align-top"><td className="px-3 py-2">成婚料が高め</td><td className="px-3 py-2">気になる</td><td className="px-3 py-2">1媒体</td><td className="px-3 py-2 text-[#2C2C2C]/75">成婚料は220,000円（税込）です。当サイトのIBJメンバーズのレビュー（2026年10月14日確認）でも成婚料は220,000円で、同じ金額です。一方、成婚料を低く設定した相談所もあるため、総額で比較することをおすすめします。</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mb-6 leading-relaxed">※媒体数は上記4媒体のうち、そのテーマに触れていた媒体の数です（当サイト集計・2026年10月23日確認）。口コミ本文は転載せず、内容をテーマ別に分類しています。第三者サイトの星評価・点数は掲載していません。</p>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            現時点では、運営元と関係のない第三者による口コミの蓄積はまだ少ない状況です。当サイトでは確認できない口コミを創作して掲載することは行わず、公式情報をもとにした入会前の見極め方を以下に整理しています。
          </p>
          <div className="bg-[#FAFAF8] rounded-xl border border-gray-100 p-6">
            <h3 className="font-medium text-[#A08447] mb-4 tracking-wider">無料相談で確認したい5つの見極めポイント</h3>
            <ul className="space-y-3 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">1.</span>最新の料金表（初期費用88,000円〜110,000円・月会費11,000円〜16,500円・成婚料220,000円の現行料金と一致するか）</li>
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">2.</span>自社としての活動会員数・成婚実績（公式サイトの数値はIBJ全体のもの。自社の実績を聞いて回答が具体的か）</li>
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">3.</span>担当カウンセラーは誰になるか（公式サイトで実名紹介されている2名の体制・相性を面談で確認）</li>
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">4.</span>違約金規定の詳細（お見合いキャンセル1万円・当日変更/15分以上の遅刻2万円・交際中止2万円の適用条件）</li>
              <li className="flex gap-2"><span className="text-[#A08447] shrink-0">5.</span>休会（月1,100円・最大3ヶ月・10日前申請）と中途退会時の費用の扱い（月会費の日割り返金なし。契約書面で必ず確認）</li>
            </ul>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本記事は2026年8月6日時点の公式サイト掲載情報を基に作成し、料金・よくあるご質問・お知らせは2026年10月23日に再確認しています。サービス内容・料金は変更される場合があります。</p>
        </section>

        {/* Compare links */}
              <FeePosition slug="pitto" />

<section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            P!っと縁結びと他社を比較して選ぶ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            P!っと縁結びがご自身に合うか迷われた場合は、同じIBJ会員基盤を使う相談所と、総額（成婚料込み）・サポート形式で比較することをおすすめします。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（一覧）を見る</Link></li>
            <li><Link href="/review/ibj-members/" className="text-[#A08447] underline">IBJメンバーズの評判・料金を見る</Link></li>
            <li><Link href="/review/wellsma/" className="text-[#A08447] underline">ウェルスマの評判・料金を見る</Link></li>
            <li><Link href="/review/sunmarie/" className="text-[#A08447] underline">サンマリエの評判・料金を見る</Link></li>
          </ul>
        </section>

        {/* FAQ */}

        <ReviewExtra {...REVIEW_EXTRA} checkedOn="2026年10月23日" />
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

        <A8Banner ad="pitto" />
        <AuthorBox />
      </article>
    </>
  );
}
