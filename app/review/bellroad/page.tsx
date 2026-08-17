import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";
import A8Banner from "@/components/A8Banner";
import FlowGuide from "@/components/FlowGuide";

export const metadata = {
  title: "ベルロード縁結びサポートの評判は？月9,800円のサブスク婚活を公式情報で検証【IBJ加盟】",
  description:
    "ベルロード縁結びサポート（IBJ加盟のオンライン結婚相談所）の料金・「婚活のサブスク」の内実・運営会社を公式情報ベースで検証。月9,800円（税込）に含まれるサービス、成婚料8万円、解約・休会規定、口コミの一次情報の有無まで正直に整理します。",
};

const overview = {
  name: "ベルロード縁結びサポート",
  company: "株式会社IDM（滋賀県彦根市中央町2番26号 彦根市役所中央町別館4階・運営責任者 犬井大輔）",
  type: "オンライン完結のサブスク型（スマートフォンで活動完結）",
  federation: "IBJ（日本結婚相談所連盟）正規加盟",
  area: "全国（オンライン完結。彦根本店・銀座営業所あり）",
  initialFee: "30,000円（税込・入会時のみ）",
  monthlyFee: "9,800円（税込・1ヶ月プラン。3ヶ月27,600円／6ヶ月49,800円の前払いプランあり）",
  matchingFee: "80,000円（税込・成婚退会時のみ）",
  successRate: "成婚期間平均7ヶ月・99%がお見合い実施（自社公称。成婚率の％数値は公表なし）",
};

const strengths = [
  {
    title: "月9,800円（税込）の定額サブスクで追加費用が少ない",
    desc: "ベルロード縁結びサポートの料金は入会金30,000円＋プラン費（1ヶ月プラン9,800円）＋成婚料80,000円のみのシンプル構成です。お見合い料・更新料は一切かからず、システムの利用頻度やお見合い回数に関係なく定額で活動できます。写真撮影同行や服装チェックといった付帯サービスを省き、仲人サポートをオンラインに絞ることで低価格を実現していると公式サイトに明記されています。",
  },
  {
    title: "IBJ正規加盟で9万人以上の会員検索が可能",
    desc: "日本結婚相談所連盟（IBJ）の正規加盟店で、スマートフォンから90,000人以上（公式サイト掲載値）の会員検索システムを利用できます。IBJ加盟店はどの相談所でも同じ会員データベース・同じIBJアプリを使うため、低価格でも「出会える相手の母数」は大手仲人型と同じです。会員は独身証明書・本人確認書類の提出が必須です。",
  },
  {
    title: "定額の中に仲人紹介・AI紹介・申込50件/月まで込み",
    desc: "プラン料金のみで、お見合い申し込み50件/月・申し受け無制限・お見合い日程調整100件/月・仲人からの紹介1名/月・AIからの紹介2名/月・仲人チャット相談無制限・検索システム無制限が全て使えます。プランによるサービス内容の違いはなく、期間（1ヶ月/3ヶ月/6ヶ月）だけが異なる仕組みです。",
  },
];

const pros = [
  "月9,800円（税込）で仲人紹介・AI紹介・申込50件/月まで定額に含まれる",
  "IBJ加盟で検索可能な会員基盤が大きい（9万人以上・公式掲載値）",
  "お見合い料・更新料0円で活動量が増えても費用が読みやすい",
  "オンライン完結・スマホのみで全国どこからでも活動できる",
  "長期前払いなら実質月8,300円（6ヶ月プラン49,800円）まで下がる",
];

const cons = [
  "成婚料80,000円が別途かかる（オンライン型には成婚料0円の相談所もある）",
  "成婚率のパーセンテージは公表されておらず実績の定量比較がしにくい",
  "中途解約してもプラン費用・初期費用の返金はない（クーリングオフ8日以内を除く）",
  "休会してもプラン費用の減額・期間延長はない",
  "写真撮影同行など対面の手厚いサポートは提供範囲外",
];

const faqs = [
  {
    q: "ベルロード縁結びサポートの料金はいくらですか？",
    a: "税込で入会金30,000円（入会時のみ）、プラン費は1ヶ月プラン9,800円・3ヶ月プラン27,600円（実質9,200円/月）・6ヶ月プラン49,800円（実質8,300円/月）、成婚料は80,000円（成婚退会時のみ）です。お見合い料・更新料は一切かかりません。2026年8月6日時点の公式サイト掲載情報のため、最新の金額は公式サイトでご確認ください。",
  },
  {
    q: "ベルロード縁結びサポートはIBJ（日本結婚相談所連盟）に加盟していますか？",
    a: "はい。公式サイトに「IBJ加盟オンライン結婚相談所」「IBJ正規加盟結婚相談所」と明記されています。IBJ加盟店共通の会員検索システム（公式掲載で90,000人以上）とIBJアプリを利用して活動します。",
  },
  {
    q: "「婚活のサブスク」には何が含まれますか？",
    a: "プラン料金のみで、お見合い申し込み50件/月・お見合い申し受け無制限・お見合い日程調整100件/月・仲人からの紹介1名/月・AIからの紹介2名/月・仲人へのチャット相談無制限・検索システム無制限が利用できます。プランによるサービス内容の違いはありません。",
  },
  {
    q: "ベルロード縁結びサポートは店舗に行かずに活動できますか？",
    a: "はい。検索・申し込み・仲人への相談まで全てスマートフォンで行えるオンライン完結型です。運営は滋賀県彦根市の株式会社IDMで、彦根本店と銀座営業所（いずれも予約制）もあります。支払い方法はクレジット決済のみです。",
  },
  {
    q: "解約・休会はできますか？返金はありますか？",
    a: "契約日から8日以内は無条件で解約できます（クーリングオフ）。それ以降も中途解約は可能ですが、初期費用・プラン費用の返金はありません。プランは都度自動更新のため、退会する場合は契約満了日の1日前までに連絡が必要です。休会はプロフィール非公開化のみで、プラン費用の減額や期間延長はありません。",
  },
  {
    q: "ベルロード縁結びサポートの成婚率はどのくらいですか？",
    a: "成婚率のパーセンテージは公表されていません（2026年8月6日時点の当サイト調査）。公式サイトに掲載されている実績は「成婚期間平均7ヶ月」「99%がお見合い実施」（いずれも自社公称）です。成婚の定義は「互いに結婚する意思を持つこと（プロポーズの受諾）」とFAQに明記されています。",
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
  { name: "naco-do", path: "/review/naco-do/" },
  { name: "スマリッジ", path: "/review/smartread/" },
  { name: "エン婚活エージェント", path: "/review/en-konkatsu/" },
];

export default function BellroadReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "ベルロード縁結びサポート" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          ベルロード縁結びサポートの評判は？月9,800円のサブスク婚活を公式情報で検証
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年8月（料金・実績は2026年8月6日時点の公式サイト掲載情報を基に作成）</p>

        {/* Conclusion box */}
        <div className="bg-[#F5F0EB] rounded-2xl p-6 mb-4 border border-[#8B7355]/20">
          <h2 className="text-base font-medium text-[#8B7355] mb-3 tracking-widest">結論：ベルロード縁結びサポートはこんな人に向く相談所</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
            ベルロード縁結びサポートは、<strong>月9,800円（税込・1ヶ月プラン）の定額サブスク</strong>でIBJの会員基盤（公式掲載で9万人以上）を使えるオンライン完結型の結婚相談所です。お見合い料・更新料0円で、仲人紹介1名/月・AI紹介2名/月・申込50件/月まで定額に含まれるため、「大手連盟の出会いの母数を、月1万円以下で使いたい」人に向いています。
          </p>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
            一方で<strong>成婚料80,000円（税込）が別途かかり、成婚率の％数値は公表されていません</strong>。また中途解約時のプラン費用返金はなく、プランは自動更新です。月額の安さだけでなく、成婚時総額と解約規定まで理解したうえで検討しましょう。
          </p>
        </div>

        {/* Overview table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="bg-[#8B7355] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
          <div className="divide-y divide-gray-50">
            {Object.entries({
              サービス名: overview.name,
              運営会社: overview.company,
              タイプ: overview.type,
              加盟連盟: overview.federation,
              対応エリア: overview.area,
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

        <A8Banner ad="bellroad" />

        {/* Pricing */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            ベルロード縁結びサポートの料金プラン（税込）
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            プランは契約期間（1ヶ月/3ヶ月/6ヶ月）の違いのみで、<strong>サービス内容は全プラン共通</strong>です。長期前払いほど実質月額が下がります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">1ヶ月プラン</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">3ヶ月プラン（一番人気）</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">6ヶ月プラン</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">入会金</td><td className="px-4 py-3 text-center" colSpan={3}>30,000円（入会時のみ・全プラン共通）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">プラン費</td><td className="px-4 py-3 text-center">9,800円</td><td className="px-4 py-3 text-center">27,600円<br /><span className="text-xs text-[#8B7355]">実質9,200円/月</span></td><td className="px-4 py-3 text-center">49,800円<br /><span className="text-xs text-[#8B7355]">実質8,300円/月</span></td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">お見合い料</td><td className="px-4 py-3 text-center" colSpan={3}>0円（更新料も0円）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">成婚料</td><td className="px-4 py-3 text-center" colSpan={3}>80,000円（成婚退会時のみ・全プラン共通）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">
            ※2026年8月6日時点の公式サイト掲載の税込料金です。お見合い時の交通費・お茶代は実費、支払いはクレジット決済のみです。料金は改定されることがあるため、最新の金額は必ず公式サイトでご確認ください。
          </p>

          <div className="bg-[#FAFAF8] rounded-xl border border-gray-100 p-6 mt-6">
            <h3 className="font-medium text-[#8B7355] mb-3 tracking-wider">1年活動した場合の総額試算</h3>
            <ul className="space-y-2 text-sm text-[#2C2C2C]/80 list-disc pl-5 mb-3">
              <li>1年総額（成婚料なし）: 入会金30,000円＋9,800円×12ヶ月＝<strong>147,600円</strong></li>
              <li>1年活動して成婚退会した場合: 147,600円＋成婚料80,000円＝<strong>227,600円</strong></li>
              <li>6ヶ月プラン×2回で1年活動し成婚した場合: 30,000円＋49,800円×2＋80,000円＝<strong>209,600円</strong></li>
            </ul>
            <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
              ※当サイトの<Link href="/compare/cheap/" className="text-[#8B7355] underline">安い結婚相談所の総額比較</Link>と同じ計算方式（初期費用＋月会費×12＋成婚料）です。お見合い料0円のため活動量が増えても総額は変わりません。
            </p>
          </div>
        </section>

        {/* Subscription vs traditional */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            「サブスク型」と従来型の結婚相談所は何が違う？
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            ベルロード縁結びサポートが掲げる「婚活のサブスク」とは、<strong>システム利用頻度やお見合い回数に関係なく、プラン費だけの定額で活動できる</strong>という意味です。従来型（店舗仲人型）との違いは次のとおりです。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">サブスク型（ベルロード）</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">従来型（店舗仲人型の一般的傾向）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">費用構造</td><td className="px-4 py-3 text-center">定額（入会金3万円＋月9,800円〜。お見合い料・更新料0円）</td><td className="px-4 py-3 text-center">初期費用10万円前後〜＋月会費＋（相談所により）お見合い料</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">サポート形式</td><td className="px-4 py-3 text-center">チャット中心のオンライン仲人</td><td className="px-4 py-3 text-center">来店面談・対面サポート中心</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">付帯サービス</td><td className="px-4 py-3 text-center">写真同行・服装チェック等は省略し低価格化</td><td className="px-4 py-3 text-center">写真撮影・講座等が含まれる場合が多い</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">出会いの母数</td><td className="px-4 py-3 text-center" colSpan={2}>IBJ加盟店同士なら同じ会員データベース（公式掲載で9万人以上）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
            重要なのは、<strong>IBJ加盟店であれば会員データベースとIBJアプリはどの相談所でも共通</strong>だという点です（ベルロード公式サイトにも同旨の記載があります）。つまり「出会える相手の母数」は大手仲人型と変わらず、違いは料金とサポートの手厚さに集約されます。手厚い対面伴走が不要でコストを抑えたい人にはサブスク型が合理的ですが、写真撮影やお見合い練習まで任せたい人は従来型のほうが合います。オンライン型どうしの比較は<Link href="/compare/online/" className="text-[#8B7355] underline">オンライン結婚相談所の比較</Link>も参考にしてください。
          </p>
        </section>

        {/* Strengths */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            ベルロード縁結びサポートの強み・特徴
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
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">ベルロード縁結びサポート</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">ウェルスマ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">スマリッジ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">30,000円</td><td className="px-4 py-3 text-center">49,800円</td><td className="px-4 py-3 text-center">6,600円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">9,800円（実質8,300円〜）</td><td className="px-4 py-3 text-center">11,800円〜</td><td className="px-4 py-3 text-center">9,900円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">成婚料</td><td className="px-4 py-3 text-center">80,000円</td><td className="px-4 py-3 text-center">149,800円</td><td className="px-4 py-3 text-center">0円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">連盟・会員基盤</td><td className="px-4 py-3 text-center">IBJ（9万人以上・公式掲載値）</td><td className="px-4 py-3 text-center">IBJ（10.8万名・2024年末公式掲載値）</td><td className="px-4 py-3 text-center">コネクトシップ等</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">オンライン・サブスク型</td><td className="px-4 py-3 text-center">オンライン仲人型</td><td className="px-4 py-3 text-center">オンライン完結型</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※比較各社の数値は当サイト各レビュー記事の調査時点の情報です。最新の料金は各社公式サイトでご確認ください。</p>
        </section>

        {/* Reviews / How to verify */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            ベルロード縁結びサポートの評判・口コミについて（正直な調査結果）
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            当サイトで「ベルロード縁結びサポート 評判」「ベルロード縁結びサポート 口コミ」を調査しましたが、<strong>出典を確認できる口コミの一次情報は確認できませんでした</strong>（2026年8月6日時点）。ネット上には紹介記事が複数ありますが、出典の示されていない口コミや古い情報が混在しています。そのため当サイトでは、確認できない口コミを掲載する代わりに、公式情報をもとにした「入会前の見極め方」を整理します。
          </p>
          <div className="bg-[#FAFAF8] rounded-xl border border-gray-100 p-6">
            <h3 className="font-medium text-[#8B7355] mb-4 tracking-wider">無料相談で確認したい5つの見極めポイント</h3>
            <ul className="space-y-3 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">1.</span>最新の料金表（入会金30,000円・1ヶ月プラン9,800円・成婚料80,000円の現行料金と一致するか）</li>
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">2.</span>自動更新の仕組みと退会連絡の期限（契約満了日の1日前まで。プラン費用の返金はない）</li>
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">3.</span>仲人チャット相談の返信スピード・対応時間の目安（オンライン型で最重要）</li>
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">4.</span>仲人紹介1名/月・AI紹介2名/月の紹介品質（自分の希望条件がどこまで反映されるか）</li>
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">5.</span>自分の居住エリアのIBJ会員数（公式FAQから都道府県別会員数を確認できる）</li>
            </ul>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本記事は2026年8月6日時点の公式サイト（online.bell-road.com・bell-road.com）掲載情報および特定商取引法に基づく表記を基に作成しています。サービス内容・料金は変更される場合があります。</p>
        </section>

        {/* Compare links */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            ベルロード縁結びサポートと他社を比較して選ぶ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            月額は安くても成婚料の有無で総額は逆転します。成婚料込みの総額と会員基盤をあわせて比較するのがおすすめです。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/cheap/" className="text-[#8B7355] underline">安い結婚相談所の1年総額比較を見る</Link></li>
            <li><Link href="/compare/online/" className="text-[#8B7355] underline">オンライン結婚相談所の比較を見る</Link></li>
            <li><Link href="/review/wellsma/" className="text-[#8B7355] underline">ウェルスマ（IBJ加盟オンライン仲人型）の評判・料金を見る</Link></li>
            <li><Link href="/review/smartread/" className="text-[#8B7355] underline">スマリッジ（成婚料0円）の評判・料金を見る</Link></li>
          </ul>
        </section>

        <A8Banner ad="bellroad" />

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

        <AuthorBox />
      </article>
    </>
  );
}
