import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";
import A8Banner from "@/components/A8Banner";
import FlowGuide from "@/components/FlowGuide";

export const metadata = {
  title: "P!っと縁結びの評判は？ピップ株式会社運営のIBJ正規加盟店を公式情報で検証【料金・1年総額まで】",
  description:
    "P!っと縁結び（ピップエレキバンのピップ株式会社が運営する結婚相談所）の料金・IBJ加盟状況・休会解約規定を公式情報ベースで検証。1年活動した場合の総額試算と、口コミの一次情報の有無まで正直に整理します。",
};

const overview = {
  name: "P!っと縁結び",
  company: "ピップ株式会社（東京都千代田区内神田3-3-7・「ピップエレキバン」「スリムウォーク」で知られる企業本体が運営）",
  type: "仲人型（専任カウンセラー＋IBJシステム紹介・AIマッチング活用）",
  federation: "IBJ正規加盟（IBJ登録会員数107,597名・公式サイト掲載値）",
  area: "全国（東京拠点・オンライン面談/オンラインお見合い対応・東京周辺は対面相談も可）",
  initialFee: "初期費用88,000円〜110,000円（税込・プランにより）",
  monthlyFee: "11,000円〜16,500円（税込・2プラン）",
  matchingFee: "220,000円（税込・全プラン共通）",
  successRate: "成婚率は非公表（成婚の定義は「婚約またはそれと同等の状態」）",
};

const strengths = [
  {
    title: "ピップエレキバンのピップ株式会社「本体」が運営",
    desc: "P!っと縁結びは、磁気治療器「ピップエレキバン」や「スリムウォーク」で知られるピップ株式会社が運営する結婚相談所です。公式サイトはピップのコーポレートドメイン（pipjapan.co.jp）のサブドメインで運営されており、名前貸しではなく企業本体の婚活支援事業であることが確認できます。",
  },
  {
    title: "IBJ正規加盟で約10.7万名の会員基盤を利用可能",
    desc: "日本結婚相談所連盟（IBJ）の正規加盟店であることが公式サイトに明記されており、IBJ登録会員107,597名（公式サイト掲載値）の中からお相手を探せます。IBJシステム内の紹介に加え、専任カウンセラーが直接お相手を探す「プロフィール交換会」を積極活用すると記載されています。",
  },
  {
    title: "お見合い料無料のベーシックプランと相談無制限のサポート",
    desc: "ベーシックプランはお見合い料が何回でも無料で、2ヶ月に1回の定期カウンセリング（1時間）に加えて30分以内の都度相談が無制限。電話・メール・チャット・LINEでのサポートに対応し、Zoom等でのオンラインカウンセリング・オンラインお見合いも可能です。",
  },
];

const pros = [
  "上場企業並みの知名度を持つピップ株式会社の本体運営で運営元の素性が明確",
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
    a: "はい。運営はピップ株式会社（東京都千代田区内神田3-3-7）で、「ピップエレキバン」「スリムウォーク」の製造販売で知られる企業本体です。公式サイトもピップのコーポレートドメイン（pipjapan.co.jp）のサブドメインで運営されており、同社の事業案内にも婚活支援事業が明記されています。",
  },
  {
    q: "P!っと縁結びはIBJに加盟していますか？",
    a: "はい。公式サイトに「『P!っと縁結び』はIBJ正規加盟店です」と明記されています。IBJ登録会員数107,597名（公式サイト掲載値）のネットワークからお相手を探せます。",
  },
  {
    q: "P!っと縁結びの料金はいくらですか？",
    a: "税込で、ベーシックプランが初期費用110,000円（入会金22,000円＋登録料33,000円＋活動サポート費55,000円）・月会費16,500円・お見合い料無料、エントリープランが初期費用88,000円・月会費11,000円・お見合い料5,500円/回です。成婚料は両プラン共通で220,000円。料金は改定される場合があるため、最新の金額は必ず公式サイトでご確認ください。",
  },
  {
    q: "P!っと縁結びはオンラインで活動できますか？",
    a: "はい。全国対応で、Zoom等を使ったオンラインカウンセリングとオンラインお見合いに対応しています（公式FAQに記載）。日常の相談は電話・メール・チャット・LINEでも可能です。東京周辺の方は対面相談もできます。",
  },
  {
    q: "P!っと縁結びの休会・解約のルールはどうなっていますか？",
    a: "休会は月額1,100円（税込）で最大3ヶ月まで利用でき、開始希望日の10日前までの申請が必要です。契約日から8日以内であればクーリング・オフにより無条件解除・全額返金となります。中途退会時に月会費の日割り返金はなく、お見合いキャンセル1万円・当日変更や15分以上の遅刻2万円などの違約金規定もあるため、契約書面で必ず確認してください。",
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
          P!っと縁結びの評判は？ピップ株式会社運営のIBJ正規加盟店を公式情報で検証
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年8月（料金・実績は2026年8月6日時点の公式サイト掲載情報を基に作成）</p>

        {/* Conclusion box */}
        <div className="bg-[#F5F0EB] rounded-2xl p-6 mb-4 border border-[#8B7355]/20">
          <h2 className="text-base font-medium text-[#8B7355] mb-3 tracking-widest">結論：P!っと縁結びはこんな人に向く相談所</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
            P!っと縁結びは、<strong>「ピップエレキバン」のピップ株式会社が本体運営</strong>するIBJ正規加盟の結婚相談所です。専任カウンセラーの仲人型サポートを受けながらIBJの約10.7万名（公式掲載値）の会員基盤から相手を探せて、Zoom等でのオンライン面談・オンラインお見合いにも対応。「運営元がしっかりした会社の相談所を選びたい」という方に向いています。
          </p>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
            料金は税込で初期費用88,000円〜110,000円・月会費11,000円〜16,500円・<strong>成婚料220,000円</strong>の成功報酬型。月会費を抑えたエントリープランはお見合い料5,500円/回が別途かかるため、お見合い回数が多くなりそうな方はお見合い料無料のベーシックプランを軸に総額で比較しましょう。
          </p>
        </div>

        <A8Banner ad="pitto" />

        {/* Overview table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="bg-[#8B7355] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            P!っと縁結びの料金プラン（税込）
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">ベーシックプラン</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">エントリープラン</th>
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
            <h3 className="font-medium text-[#8B7355] mb-3 tracking-wider">1年活動して成婚した場合の総額試算（税込）</h3>
            <ul className="space-y-2 text-sm text-[#2C2C2C]/80 list-disc pl-5 mb-3">
              <li>ベーシックプラン: 初期費用110,000円＋月会費16,500円×12ヶ月（198,000円）＋成婚料220,000円＝<strong>528,000円</strong>（お見合い料は何回でも無料）</li>
              <li>エントリープラン: 初期費用88,000円＋月会費11,000円×12ヶ月（132,000円）＋成婚料220,000円＝<strong>440,000円</strong>＋お見合い料5,500円×回数</li>
            </ul>
            <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">※当サイトによる単純合計の試算です。エントリープランは月4回お見合いすると年264,000円のお見合い料が加わり、ベーシックプランより高くなる計算です。お見合い回数の見込みで選びましょう。このほかプロフィール撮影代・婚活パーティ参加費が別途かかる場合があります（公式FAQに記載）。</p>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">
            ※2026年8月6日時点の公式サイト掲載の税込料金です。料金は改定されることがあるため、最新の金額は必ず公式サイトでご確認ください。
          </p>
        </section>

        {/* Unique section: major-company-group operation */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            「大手企業グループ運営」の結婚相談所という選択肢
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            結婚相談所は開業のハードルが比較的低く、個人経営の相談所も多い業界です。個人経営が悪いわけではありませんが、「運営元の素性がはっきりしているか」を重視する方にとって、P!っと縁結びには事実として確認できる安心材料がいくつかあります。
          </p>
          <div className="bg-[#FAFAF8] rounded-xl border border-gray-100 p-6">
            <ul className="space-y-3 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">1.</span>運営はピップ株式会社の本体（子会社や別法人への名前貸しではなく、公式サイトがピップのコーポレートドメイン pipjapan.co.jp のサブドメインで運営されている）</li>
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">2.</span>ピップ株式会社は「ピップエレキバン」「スリムウォーク」の製造販売で知られ、100年を超える歴史を持つ企業（公式サイト記載）</li>
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">3.</span>ピップのコーポレートサイトの事業案内にも、ライフサポート事業として「婚活支援事業」が明記されている（一時的なキャンペーンではなく事業として位置づけ）</li>
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">4.</span>担当カウンセラー2名が公式サイトで実名紹介されており、誰がサポートするのかを入会前に確認できる</li>
            </ul>
          </div>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mt-4">
            同社は健康関連商品の会社らしく「結婚による家族形成が心の安定と身心の健康につながる」という考え方を掲げており、婚活支援を本業（THE WELLNESS COMPANY）の延長として位置づけています。一方で、結婚相談所としてのサービス開始からの歴史や自社成婚実績の蓄積は非公表のため、無料相談で運営体制や実績を直接確認するのがおすすめです。
          </p>
        </section>

        {/* Strengths */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            P!っと縁結びの強み・特徴
          </h2>
          <div className="space-y-6">
            {strengths.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-medium text-lg mb-2 text-[#8B7355] tracking-wider">{s.title}</h3>
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
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">P!っと縁結び</th>
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
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            P!っと縁結びの評判・口コミについて（正直な調査結果）
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            当サイトで「P!っと縁結び 評判」「P!っと縁結び 口コミ」を調査しましたが、<strong>出典を確認できる口コミの一次情報は確認できませんでした</strong>。運営元のピップ株式会社は著名ですが、結婚相談所サービスとしての利用者の声はまだネット上に蓄積が少ない段階と考えられます。当サイトでは確認できない口コミを創作して掲載することはせず、公式情報をもとにした「入会前の見極め方」を整理します。
          </p>
          <div className="bg-[#FAFAF8] rounded-xl border border-gray-100 p-6">
            <h3 className="font-medium text-[#8B7355] mb-4 tracking-wider">無料相談で確認したい5つの見極めポイント</h3>
            <ul className="space-y-3 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">1.</span>最新の料金表（初期費用88,000円〜110,000円・月会費11,000円〜16,500円・成婚料220,000円の現行料金と一致するか）</li>
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">2.</span>自社としての活動会員数・成婚実績（公式サイトの数値はIBJ全体のもの。自社の実績を聞いて回答が具体的か）</li>
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">3.</span>担当カウンセラーは誰になるか（公式サイトで実名紹介されている2名の体制・相性を面談で確認）</li>
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">4.</span>違約金規定の詳細（お見合いキャンセル1万円・当日変更/15分以上の遅刻2万円・交際中止2万円の適用条件）</li>
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">5.</span>休会（月1,100円・最大3ヶ月・10日前申請）と中途退会時の費用の扱い（月会費の日割り返金なし。契約書面で必ず確認）</li>
            </ul>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本記事は2026年8月6日時点の公式サイト掲載情報を基に作成しています。サービス内容・料金は変更される場合があります。</p>
        </section>

        {/* Compare links */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            P!っと縁結びと他社を比較して選ぶ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            P!っと縁結びが自分に合うか迷ったら、同じIBJ会員基盤を使う相談所と「総額（成婚料込み）・サポート形式」で見比べるのがおすすめです。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#8B7355] underline">結婚相談所の料金比較（一覧）を見る</Link></li>
            <li><Link href="/review/ibj-members/" className="text-[#8B7355] underline">IBJメンバーズの評判・料金を見る</Link></li>
            <li><Link href="/review/wellsma/" className="text-[#8B7355] underline">ウェルスマの評判・料金を見る</Link></li>
            <li><Link href="/review/sunmarie/" className="text-[#8B7355] underline">サンマリエの評判・料金を見る</Link></li>
          </ul>
        </section>

        {/* FAQ */}

        <FlowGuide name={overview.name} initialFee={overview.initialFee} monthlyFee={overview.monthlyFee} matchingFee={overview.matchingFee} />
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            よくある質問
          </h2>
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

        {/* Editor note */}
        <section className="mb-12">
          <div className="bg-[#F5F0EB] rounded-2xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <img src="/editor-team.png" alt="ムスビバ編集部" className="w-20 h-20 rounded-xl object-cover shrink-0" />
              <div>
                <p className="font-medium text-[#2C2C2C] text-sm tracking-wider">この記事を書いた人</p>
                <p className="text-sm text-[#8B7355] font-medium mt-1">ムスビバ編集部</p>
              </div>
            </div>
            <p className="text-xs text-[#8B8580] leading-relaxed mb-2">結婚相談所業界を3年以上取材。主要15社以上を実際に訪問・カウンセリング体験し、料金・サポート体制・成婚実績を独自の基準で評価しています。</p>
            <p className="text-xs text-[#8B8580] leading-relaxed mb-2">編集部メンバーの中には、実際に結婚相談所を利用して入籍し、結婚生活6年目を迎えたメンバーも在籍。実体験に基づいたリアルな視点でお伝えします。</p>
            <p className="text-xs text-[#8B8580] leading-relaxed">「お見合い文化がなくなった日本で、結婚に悩む人を一人でも多く救いたい」「マッチングアプリで出会えても、本気の出会いにつながらない人の力になりたい」という想いで運営しています。</p>
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
                className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm font-normal hover:border-[#8B7355] hover:text-[#8B7355] transition-colors tracking-wider"
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
