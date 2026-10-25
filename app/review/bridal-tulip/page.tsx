import Link from "next/link";
import BrandStores from "@/components/BrandStores";
import { ReviewVoices } from "@/components/ReviewFacts";
import Breadcrumb from "@/components/Breadcrumb";
import FeePosition from "@/components/FeePosition";
import AuthorBox from "@/components/AuthorBox";
import A8Banner from "@/components/A8Banner";
import FlowGuide from "@/components/FlowGuide";
import ReviewExtra from "@/components/ReviewExtra";
import { PLAN_FEES, planTotal, yen } from "@/data/fees";

// 料金表と1年総額の目安は共通データ data/fees.ts（PLAN_FEES）から計算する
const TULIP_PLANS = PLAN_FEES.filter((p) => p.slug === "bridal-tulip");

export const metadata = {
  title: "ブライダルチューリップ（Bridalチューリップ）の口コミ・評判｜IBJ口コミ268件をテーマ別に集計・料金3プラン【2026年10月】",
  description:
    "ブライダルチューリップ（高田馬場）の口コミ・評判を、IBJ公式サイトの口コミ268件（平均4.8）の全件テーマ別集計、星1の8件の内容、公式「お客様の声」205件の男女・年代別内訳で整理しています。料金3プラン（2026年10月25日公式再確認）、成婚率60%以上（自社公称）の算出定義も解説しています。",
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
    desc: "IBJ（約10.5万名）に加え、SCRUM（約6.7万名）・CONNECT-ship（約2.1万名）にも加盟し、公式表記で合計約19万名のネットワークからお相手を探せます。IBJ単独加盟の相談所より母集団が広い点に強みがあります（各連盟の会員数は2026年1月時点の公式表記・重複会員を含む可能性があります）。",
  },
  {
    title: "面談回数無制限＋サブカウンセラーの「100人100通り」サポート",
    desc: "公式サイトでは「100人100通り」の個別サポートを掲げ、カウンセラーとの面談は回数無制限です。メイン担当に加えてサブカウンセラーが付く体制のため、1人の担当者との相性にすべてが左右されにくくなっています。",
  },
  {
    title: "AIマッチングとオンライン対応で活動を効率化",
    desc: "検索だけでなくAIによるお相手のマッチング提案があり、面談・活動はオンラインにも対応しています。拠点は高田馬場の1拠点ですが、遠方でもオンラインで活動を進められます。",
  },
  {
    title: "成婚率の算出定義を公開しています",
    desc: "成婚率60%以上・1年以内成婚率70%以上という数値について、算出定義（成婚率＝成婚退会者数÷全退会者数、1年以内成婚率＝成婚退会者のうち1年以内に成婚した割合・2010年〜2026年1月の実績）を公式に示しています。成婚率は定義次第で大きく変わる指標のため、定義を明示している点は評価できます（数値自体は自社公称です）。",
  },
];

const pros = [
  "3連盟加盟で紹介可能会員が約19万名と母集団が広い",
  "月会費7,550円〜と、仲人型としては低めの月会費から始められる",
  "面談回数無制限＋サブカウンセラー体制",
  "成婚料180,000円は仲人型の相場（20万円前後）よりやや低め",
  "成婚率の算出定義を公式に開示している",
];

const cons = [
  "お見合い料（6,100円または8,800円／件）が都度かかり、活動量次第で総額が増える",
  "42歳以上は専用プランで入会金が150,800円と高くなる",
  "対面拠点は高田馬場の1ヶ所のみ",
  "成婚率60%以上は自社公称値で、第三者機関の検証値ではない",
  "運営会社は結婚相談以外にEC等の複数事業を手がけており、専業ではない",
];

const faqs = [
  {
    q: "ブライダルチューリップの料金プランを教えてください",
    a: "税込・公式料金（2026年10月21日確認）では3プランあります。42歳未満向けのAプラン（じっくり型）は入会金105,000円・月会費7,550円・お見合い料8,800円／件。同じく42歳未満向けのBプラン（活発型）は入会金105,000円・月会費12,950円・お見合い料6,100円／件。42歳以上プランは入会金150,800円・月会費11,250円・お見合い料8,800円／件です。このほか、交際・連絡先交換が1件成立するごとに「直コンタクト事務手数料及び交際開始アドバイス料」がかかります（Aプラン20,300円・Bプラン0円・42歳以上プラン10,100円／件、2026年10月21日公式確認）。成婚料は全プラン共通180,000円、お見合い申込みは月30件まで（20件単位で追加でき、月200件が上限）です。",
  },
  {
    q: "成婚率60%以上という数値はどのように算出されていますか？",
    a: "成婚率60%以上・1年以内成婚率70%以上は公式サイトが公表する自社公称値です。定義は「成婚率＝成婚退会者数÷全退会者数」「1年以内成婚率＝成婚退会者のうち1年以内に成婚した割合」で、2010年〜2026年1月の実績とされています。定義が公開されている点は誠実ですが、第三者機関による検証値ではないため、参考値として捉え、無料相談で直近の実績を確認することをおすすめします。",
  },
  {
    q: "AプランとBプランはどちらを選ぶべきですか？",
    a: "お見合いと交際の件数で損益分岐が変わります。1年間の月会費の差は64,800円（月5,400円×12）です。一方、Aプランはお見合い1件ごとに2,700円（8,800−6,100円）、交際成立1件ごとに20,300円（Bプランは0円）がBプランより多くかかります。このため、1年間で「お見合い件数×2,700円＋交際成立件数×20,300円」が64,800円を超えるとBプランのほうが安くなります（例：お見合い12件・交際成立2件で73,000円）。交際成立時の費用は2026年10月21日に公式料金表で確認したもので、当サイトの以前の試算には含めていませんでした。ご自身の活動ペースを無料相談で伝えたうえで決めることをおすすめします。",
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
    a: "公式サイトには最短44日での成婚事例が掲載されています（自社公称）。ただしこれは最も早い事例で、全員に当てはまるものではありません。活動期間は個人差が大きいため、保証されるものではない点にご注意ください。",
  },
  {
    q: "ブライダルチューリップに悪い口コミはありますか？",
    a: "IBJ公式サイトの口コミ268件のうち、星1は8件です（2026年10月25日確認、星2・星3は0件）。本文のある6件では、担当者の対応・回答の質への不満が3件、写真変更後に半年間お見合いが組めなかったという内容が1件、無料カウンセリングが営業中心だったという内容が1件、断った後の勧誘電話への不満が1件でした。本文のある星1はいずれも「2年前」〜「9年前」の表示で、直近1年以内の星1は本文のない1件のみです。",
  },
  {
    q: "途中で退会できますか？費用はかかりますか？",
    a: "公式FAQ（2026年10月25日確認）では、退会はいつでも可能とされています。ただし、契約期間内に成婚以外の理由で退会する場合は、タイミングによって中途解約費が発生する場合があると記載されています。具体的な金額は公式サイトに掲載がないため、契約前に書面で確認することをおすすめします。",
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

// 競合上位記事との差分（2026-10-14 競合比較で追加）
const REVIEW_EXTRA = {
  "name": "ブライダルチューリップ",
  "ratings": [
    {
      "media": "IBJ公式サイト Bridalチューリップのクチコミ",
      "score": "平均4.8",
      "count": "268件",
      "detail": "星5が244件（91%）・星4が16件（6%）・星1が8件（3%）（2026年10月25日に全件を確認）。IBJの相談所ページには成婚者エピソードも18件掲載されています。",
      "url": "https://www.ibjapan.com/area/tokyo/80557/"
    },
    {
      "media": "エキテン Bridalチューリップの口コミ",
      "score": "4.55",
      "count": "54件",
      "detail": "表示されている最新20件は2017年7月〜2025年9月の投稿で、すべてに店舗からの返信が付いています（2026年10月25日確認）。",
      "url": "https://www.ekiten.jp/shop_6003276/review/"
    }
  ],
  "ratingNotes": [
    "IBJ公式サイト（日本結婚相談所連盟の運営サイト）の相談所ページに掲載されている口コミです。星5の比率が高いため、星1の内容や本文の具体性もあわせて確認することをおすすめします。",
    "上位の検索結果は相談所側の情報（エキテンの店舗ページ・PR表記のインタビュー記事）が中心で、件数を確認できる口コミはIBJのページが最多でした。"
  ],
  "fitYes": [
    "月会費を抑えつつ、仲人型のサポートを受けたい人",
    "高田馬場に通える人、またはオンライン面談で十分な人",
    "まず14日間のお試し会員（5,500円）でシステムを確認したい人",
    "担当者を変えられる制度・サブカウンセラー制度を重視する人"
  ],
  "fitNo": [
    "お見合い料（1件6,100円または8,800円）がかからない相談所がよい人",
    "42歳以上で、入会金150,800円のプランを避けたい人",
    "複数の店舗から選びたい人（対面拠点は高田馬場の1ヶ所）"
  ],
  "facts": [
    "14日間お試し会員制度: 5,500円（税込・14日間）。プロフィール作成・お相手検索・担当カウンセラーとの面談ができ、期間中にお見合いが決まった場合は正式入会が必要です。",
    "担当以外のカウンセラーからも面談でアドバイスを受けられる「サブカウンセラー制度」と「担当者変更制度」があります。",
    "公式トップに「1年以内の成婚率70%以上」（成婚退会者数÷全退会者数で算出した成婚率のうち1年以内に成婚した割合・2010年〜2026年1月実績）、「登録から最短44日の成婚実績」の記載があります。"
  ]
};

export default function BridalTulipReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "ブライダルチューリップ" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          ブライダルチューリップの口コミ・評判｜料金3プラン・成婚率の定義まで公式情報で検証
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月25日（料金表を2026年10月25日に公式サイトで再確認・変更なし。IBJ公式サイトの口コミ268件のテーマ別集計と、公式「お客様の声」205件の内訳を追加）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />ブライダルチューリップの特徴と適している方
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>特徴</strong>：IBJ・SCRUM・CONNECT-shipの<strong>3連盟に加盟し、紹介可能会員は約19万名</strong>です（2026年1月時点・公式表記）。面談回数無制限とサブカウンセラー制度を備えた、サポートの手厚い仲人型です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>料金</strong>：入会金105,000円〜＋月会費7,550円〜＋お見合い料6,100円〜／件＋交際成立時の手数料0円〜20,300円／件＋成婚料180,000円（税込・3プラン）です。月会費を抑えてお見合い・交際ごとに払うか、その逆かを選べる構造です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>実績</strong>：成婚率60%以上・1年以内成婚率70%以上（<strong>自社公称</strong>・定義＝成婚退会者数÷全退会者数、うち1年以内成婚の割合・2010年〜2026年1月実績）、成婚500組以上（2010年1月〜2026年10月の実績）、最短成婚44日と公表されています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>口コミの傾向</strong>：IBJ公式サイトの口コミ268件（平均4.8）では、カウンセラーの親身さ・丁寧さに触れた投稿が96件、成婚の報告が72件です。星1は8件で、担当者の対応への不満が中心です（<a href="#review-themes" className="underline text-[#A08447]">テーマ別の集計</a>）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>注意点</strong>：お見合い料と交際成立時の手数料が都度かかるため、活動量で総額が変動します。成婚以外の理由で契約期間内に退会する場合は、中途解約費が発生する場合があります（公式FAQ）。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本ページの料金は2026年10月21日（10月25日に再確認・変更なし）、成婚実績は2026年10月21日、紹介可能会員数は2026年10月14日に公式サイトで確認した公表情報（税込）にもとづきます。最新かつ正確な数値・契約条件は<strong>公式サイトおよび無料相談</strong>で必ずご確認ください。</p>
        </div>

        <A8Banner ad="tulip" />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="bg-[#A08447] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">ブライダルチューリップの強み・特徴</h2>
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
            <h3 className="font-medium text-red-800 mb-4 tracking-wider">デメリット・注意点</h3>
            <ul className="space-y-2">
              {cons.map((c) => (<li key={c} className="text-sm text-[#2C2C2C]/70 flex gap-2"><span className="text-red-400 shrink-0">-</span>{c}</li>))}
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">料金3プランと総額の目安（税込・2026年10月21日公式確認）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            プランは年齢と活動ペースで3つに分かれます。<strong>お見合い料が都度払い</strong>のため、総額は「入会金＋月会費×活動月数＋お見合い料×件数＋交際成立時の手数料×件数＋成婚料」で見積もることをおすすめします。お見合い申込みは月30件まで（20件単位で追加でき、月200件が上限）、面談は回数無制限です。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">Aプラン（42歳未満・じっくり）</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">Bプラン（42歳未満・活発）</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">42歳以上プラン</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">入会金</td>{TULIP_PLANS.map((p) => <td key={p.plan} className="px-4 py-3 text-center">{yen(p.initial)}</td>)}</tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td>{TULIP_PLANS.map((p) => <td key={p.plan} className="px-4 py-3 text-center">{yen(p.monthly)}</td>)}</tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">お見合い料</td>{TULIP_PLANS.map((p) => <td key={p.plan} className="px-4 py-3 text-center">{yen(p.perOmiai)}／件</td>)}</tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">交際成立時の手数料<br className="hidden sm:block" />（直コンタクト事務手数料・交際開始アドバイス料）</td>{TULIP_PLANS.map((p) => <td key={p.plan} className="px-4 py-3 text-center">{yen(p.perKosai ?? 0)}／件</td>)}</tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">成婚料</td><td className="px-4 py-3 text-center" colSpan={3}>180,000円（全プラン共通）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">1年で成婚した場合の目安<br className="hidden sm:block" />（お見合い月1件＝年12件・交際成立1件と仮定）</td>{TULIP_PLANS.map((p) => <td key={p.plan} className="px-4 py-3 text-center">約{yen(planTotal(p))}</td>)}</tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※金額はすべて税込・2026年10月21日に公式サイトで確認した公表値です。総額目安は「入会金＋月会費×12＋お見合い料×12件＋交際成立時の手数料×1件＋成婚料180,000円」の当サイト試算で、お見合い・交際の件数により変動します。交際成立時の手数料は10月21日の確認で新たに反映しました（以前の目安はAプラン約481,200円・42歳以上プラン約571,400円で、この手数料を含んでいませんでした）。仲人型の一般的な相場は<Link href="/knowledge/cost/" className="underline text-[#A08447]">料金相場の解説</Link>をご参照ください。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">成婚率60%以上の算出定義と読み方</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            ブライダルチューリップは<strong>成婚率60%以上・1年以内成婚率70%以上</strong>（いずれも自社公称）を公表しており、算出定義も開示しています。定義は「<strong>成婚率＝成婚退会者数÷全退会者数</strong>」「<strong>1年以内成婚率＝成婚退会者のうち1年以内に成婚した割合</strong>」で、2010年〜2026年1月の実績とされています。累計の成婚実績は500組以上（2010年1月〜2026年10月）、最短成婚は44日（いずれも自社公称）です。
          </p>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
            ご注意いただきたいのは、この定義が「退会者のうち成婚した人の割合」で、「入会者全体のうち成婚した人の割合」ではない点です。分母の取り方によって成婚率は大きく変わるため、他社の成婚率と単純比較はできません。定義を開示している姿勢は業界内では誠実な部類ですが、数値は第三者検証値ではない参考値として捉え、無料相談で直近1年の実績を確認することをおすすめします。
          </p>
        </section>

        <ReviewVoices
          name="ブライダルチューリップ"
          checkedOn="2026年10月25日"
          reviewNote="Googleマップの「Bridalチューリップ」（高田馬場）には口コミ113件・評価4.6がありました（当サイトが2026年8月18日に取得）。公式サイトの料金（Aプラン入会金105,000円・月会費7,550円・お見合い費8,800円/件・成婚料180,000円など）と、IBJ約10.5万名・SCRUM約6.7万名・CONNECT-ship約2.1万名（2026年1月時点）の紹介可能会員数は2026年10月14日に再確認し、7月時点から変更はありませんでした。料金表は2026年10月21日にも公式サイトで再確認し、交際成立時の手数料を反映しています。"
        />


        <section id="review-themes" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">ブライダルチューリップのIBJ口コミ268件のテーマ別集計（2026年10月25日確認）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            ブライダルチューリップの口コミが最も多く掲載されている媒体は、IBJ公式サイトの相談所ページです。当サイトでは掲載中の268件（全27ページ）を全件確認し、本文に各テーマの語句を含む投稿の件数を数えました。1件に複数のテーマが含まれる場合は、それぞれで数えています。本文のない投稿13件を除く255件が集計対象です。
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
                <tr className="border-t border-gray-50"><td className="px-4 py-3">カウンセラーの親身さ・丁寧さ</td><td className="px-4 py-3">96件</td><td className="px-4 py-3">担当カウンセラーの相談対応や励ましに触れた投稿</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">成婚の報告</td><td className="px-4 py-3">72件</td><td className="px-4 py-3">成婚退会した、または成婚予定であるという投稿</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">お見合い・交際中の助言</td><td className="px-4 py-3">36件</td><td className="px-4 py-3">お見合いや交際の進め方への助言に触れた投稿</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">料金</td><td className="px-4 py-3">12件</td><td className="px-4 py-3">料金の安さ・良心的な価格に触れた投稿</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">他社と比較して選んだ</td><td className="px-4 py-3">12件</td><td className="px-4 py-3">複数の相談所を比較した、または他の婚活方法から移ったという投稿</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">強引な勧誘・押し付けがない</td><td className="px-4 py-3">11件</td><td className="px-4 py-3">入会前のカウンセリングで強引な勧誘がなかったという投稿</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">返信・オンライン</td><td className="px-4 py-3">7件・5件</td><td className="px-4 py-3">返信の早さやオンライン対応に触れた投稿は少数です</td></tr>
                <tr className="border-t border-gray-50 bg-red-50/40"><td className="px-4 py-3">星1の投稿</td><td className="px-4 py-3">8件</td><td className="px-4 py-3">本文のある6件の内訳：担当者の対応・回答の質への不満 3件／写真変更後に半年間お見合いが組めなかった 1件／無料カウンセリングが営業中心だった 1件／断った後の勧誘電話 1件。本文のある6件はいずれも「2年前」〜「9年前」の表示です</td></tr>
              </tbody>
            </table>
          </div>
          <ul className="space-y-1 text-xs text-[#2C2C2C]/60 leading-relaxed">
            <li>※出典：<a href="https://www.ibjapan.com/area/tokyo/80557/review/" target="_blank" rel="nofollow noopener noreferrer" className="underline">IBJ公式サイト Bridalチューリップのクチコミ一覧</a>（2026年10月25日に全27ページを確認）。分類は当サイトによる語句の集計で、口コミの本文は転載していません。</li>
            <li>※投稿時期は相対表記のみで、直近1年以内（「〇ヵ月前」以内の表示）の投稿は57件（星5が56件・星1が1件）、残る211件は「1年前」〜「9年前」の表示です（最多は「3年前」の60件）。</li>
            <li>※本文が完全に一致する投稿が10組（21件）あり、上の件数はそれらを含めて数えています。口コミは投稿者個人の見解で、当サイトでは事実関係を確認していません。</li>
          </ul>

          <h3 className="font-medium text-[#A08447] mt-8 mb-3 tracking-wider">公式「お客様の声」205件の内訳（2026年10月25日確認）</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">項目</th>
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">集計結果</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 whitespace-nowrap">性別</td><td className="px-4 py-3">男性130件・女性75件</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 whitespace-nowrap">年代</td><td className="px-4 py-3">20代13件・30代120件・40代65件・50代6件・60代1件（40代以上は72件で全体の約35%）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 whitespace-nowrap">性別×年代の上位</td><td className="px-4 py-3">30代男性70件・30代女性50件・40代男性48件・40代女性17件</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 whitespace-nowrap">成婚年月</td><td className="px-4 py-3">2020年3月〜2026年7月（2025年10月以降の成婚は21件）</td></tr>
              </tbody>
            </table>
          </div>
          <ul className="space-y-1 text-xs text-[#2C2C2C]/60 leading-relaxed">
            <li>※出典：Bridalチューリップ公式サイト「お客様の声」（成婚者の性別・年代・成婚年月の表記を当サイトで集計）。運営会社が掲載するもののため、不満の声は含まれません。公式トップでは、2026年7月7日に累計成婚者数が500組（1,000名）に達したと告知されています。</li>
          </ul>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mt-4">
            IBJの口コミは星5が9割を占め、担当者の伴走を評価する声が中心です。一方、低評価の投稿は担当者の対応の質に集中しており、公式が担当者変更制度・サブカウンセラー制度を設けている理由とも重なります。公式の成婚者の声では40代以上が約35%を占めており、42歳以上プラン（専属のベテランカウンセラーが担当）の対象年代での成婚事例も一定数掲載されています。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">口コミ・評判の状況と見極め方</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            2026年7月時点の当サイト調査では出典を確認できる口コミは見つかりませんでしたが、その後の再調査で、IBJ公式サイト（268件）・Googleマップ（113件・2026年8月18日取得）・エキテン（54件）に口コミが掲載されていることを確認しました。IBJの全件の集計は前述の表をご参照ください。当サイトは実在しない口コミを作成・掲載しない方針です。以下では、公式情報から検討時の見極めポイントを整理しています。
          </p>
          <ul className="space-y-3 text-sm text-[#2C2C2C]/70">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">1.</span><span><strong>客観的事実を確認する</strong>：3連盟（IBJ・SCRUM・CONNECT-ship）加盟、料金・成婚率定義の開示、運営会社情報（株式会社ナウい・高田馬場）など、検証可能な情報は公開されています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">2.</span><span><strong>無料相談で「直近の数字」を質問する</strong>：公称成婚率は2010年からの累計実績のため、直近1年の成婚退会数・自分と近い年齢層の活動事例を具体的に聞き、回答の具体性を判断材料にします。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">3.</span><span><strong>お見合い料込みの総額を試算する</strong>：月何件お見合いする想定か、その場合の年間総額はいくらかを面談で一緒に試算してもらい、想定外の出費が生じない構造かをご確認ください。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">4.</span><span><strong>契約条件を書面で確認する</strong>：中途退会時の精算（公式FAQでは、成婚以外の理由での契約期間内の退会はタイミングにより中途解約費が発生する場合があるとされています）・休会制度・成婚の定義（公式FAQではプロポーズの承諾や同居の決定など）を必ず書面でご確認ください。</span></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他社と比較して選ぶ</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            ブライダルチューリップが自分に合うか迷ったら、月会費固定型・オンライン型と「お見合い料込みの総額」で見比べることをおすすめします。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較一覧を見る</Link></li>
            <li><Link href="/review/zwei/" className="text-[#A08447] underline">ツヴァイの評判・料金を見る（大手・全国拠点）</Link></li>
            <li><Link href="/review/musbell/" className="text-[#A08447] underline">ムスベルの評判・料金を見る（複数連盟加盟の仲人型大手）</Link></li>
            <li><Link href="/compare/tulip-vs-musbell/" className="text-[#A08447] underline">ブライダルチューリップとムスベルを比較する（料金・成婚率・サポート）</Link></li>
            <li><Link href="/review/naco-do/" className="text-[#A08447] underline">naco-doの評判・料金を見る（オンライン完結・低価格帯）</Link></li>
          </ul>
        </section>

        <ReviewExtra {...REVIEW_EXTRA} checkedOn="2026年10月25日" />
        <FlowGuide name={overview.name} initialFee={overview.initialFee} monthlyFee={overview.monthlyFee} matchingFee={overview.matchingFee} />

              <FeePosition slug="bridal-tulip" />

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

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚相談所の基礎知識で判断材料を増やす</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/knowledge/cost/" className="text-[#A08447] underline">結婚相談所の料金相場は？初期費用・月会費・成婚料の目安</Link></li>
            <li><Link href="/knowledge/how-to-choose/" className="text-[#A08447] underline">結婚相談所の選び方｜仲人型とデータマッチング型の違い</Link></li>
            <li><Link href="/knowledge/flow/" className="text-[#A08447] underline">結婚相談所の入会から成婚までの流れ・活動期間の目安</Link></li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-light mb-4 tracking-widest">他の結婚相談所も見る</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link key={s.name} href={s.path} className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm font-normal hover:border-[#A08447] hover:text-[#A08447] transition-colors tracking-wider">{s.name}</Link>
            ))}
          </div>
        </section>

      <A8Banner ad="tulip" />
      <AuthorBox />
        <BrandStores href="/review/bridal-tulip/" brandName="ブライダルチューリップ" />
      </article>
    </>
  );
}
