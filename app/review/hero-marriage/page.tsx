import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";
import A8Banner from "@/components/A8Banner";

export const metadata = {
  title: "ヒーローマリッジの評判は？料金・成婚実績の実態を公式情報で検証【男性専門の結婚相談所】",
  description:
    "男性専門の結婚相談所ヒーローマリッジ（株式会社アルファブル運営・IBJ加盟）の評判・料金を公式情報で検証。初期費用165,000円・月会費14,300円〜・成婚料220,000円（税込・2026年7月確認）の総額目安、プロカメラマン撮影無料などの特徴、成婚率が非公開である点まで正直に解説します。",
  alternates: { canonical: "/review/hero-marriage/" },
};

const overview = {
  name: "ヒーローマリッジ",
  company: "株式会社アルファブル（東京都中野区中央3-20-2・特定商取引法表記で確認）",
  type: "男性専門・仲人型（IBJ＝日本結婚相談所連盟 加盟）",
  members: "IBJ会員ネットワークを利用（相談所単体の会員数は非公開）",
  area: "新宿サロン（2026年7月OPEN予定と公式表記）＋全国オンライン対応",
  initialFee: "165,000円（入会金33,000＋登録料66,000＋活動サポート費66,000・税込）",
  monthlyFee: "14,300円〜27,500円（税込・3プラン）",
  omiaiFee: "0円",
  matchingFee: "220,000円（税込・自社イベント経由の成婚は50%割引と公式記載）",
  successRate: "非公開（公式サイトに成婚率の数値記載なし・2026年7月確認）",
};

const strengths = [
  {
    title: "男性専門の結婚相談所として男性の婚活課題に特化",
    desc: "ヒーローマリッジは会員を男性に限定した男性専門の結婚相談所です。プロフィール作成・写真・お見合いでの立ち居振る舞いなど、男性がつまずきやすいポイントに絞ったサポート設計を公式に掲げています。男女両方を扱う相談所と違い、ノウハウが男性向けに集約されているのが特徴です。",
  },
  {
    title: "プロカメラマン撮影が何度でも無料＋写真のABテスト",
    desc: "公式サイトによれば、プロフィール写真はプロカメラマンによる撮影が何度でも無料で、複数の写真でABテストを行い反応の良い写真を採用する仕組みがあります。写真撮影が有料オプション（1〜3万円程度）の相談所も多い中、撮り直し無料は費用面のメリットです。",
  },
  {
    title: "データにもとづく「ロジカル婚活」と月3名の紹介",
    desc: "感覚ではなくデータ・検証を重視する「ロジカル婚活」を公式に打ち出しており、毎月3名の紹介とLINEでの日常的なサポートが受けられます。お見合い申込みは月200件まで可能で、IBJの全国会員ネットワークが対象です。",
  },
  {
    title: "IBJ AWARDを4期連続受賞（自社公称）",
    desc: "公式サイトではIBJ AWARDの4期連続受賞を掲げています（自社公称）。IBJ AWARDはIBJが成婚数などの基準で加盟相談所を表彰する制度で、受賞歴は活動実態の一つの参考になります。ただし受賞基準の詳細や対象期間は公式で確認することをおすすめします。",
  },
];

const pros = [
  "男性専門でサポートノウハウが男性向けに特化している",
  "プロカメラマン撮影が何度でも無料＋写真ABテストあり",
  "お見合い料0円・申込みは月200件まで可能",
  "IBJ加盟で全国の会員ネットワークからお相手を探せる",
  "自社イベント経由の成婚は成婚料50%割引の記載あり",
];

const cons = [
  "成婚率の公式数値が公開されていない",
  "成婚料220,000円は業界内でも高めの水準",
  "契約は6ヶ月自動更新のため、中途解約時の条件確認が必要",
  "新宿サロンは2026年7月OPEN予定表記で、対面拠点の実績はこれから",
  "第三者による口コミの一次情報がWeb上にほとんど確認できない",
];

const faqs = [
  {
    q: "ヒーローマリッジの料金は総額いくらかかりますか？",
    a: "公式公表の料金（税込・2026年7月確認）は、初期費用165,000円（入会金33,000＋登録料66,000＋活動サポート費66,000）＋月会費（ライト14,300円／スタンダード16,500円／プロ27,500円）＋成婚料220,000円で、お見合い料は0円です。スタンダードプランで1年活動して成婚した場合の総額目安は約583,000円（165,000＋16,500×12＋220,000）です。最新の料金・契約条件は必ず公式サイトと無料相談でご確認ください。",
  },
  {
    q: "ヒーローマリッジの成婚率はどのくらいですか？",
    a: "2026年7月時点の当サイト調査では、公式サイトに成婚率の数値は公開されていません。「グループ累計支援男性数44,000人以上」という数字が掲載されていますが、これは運営グループ全体の支援人数であり、ヒーローマリッジ単体の成婚実績を示すものではない点に注意が必要です。成婚実績の詳細は無料相談で直接確認することをおすすめします。",
  },
  {
    q: "運営会社はどこですか？",
    a: "特定商取引法にもとづく表記によれば、運営は株式会社アルファブル（東京都中野区中央3-20-2）です。公式サイトのトップページには法人名の記載がないため、契約前に特商法ページで運営者情報・解約条件を確認しておくと安心です。",
  },
  {
    q: "契約期間や解約の条件はどうなっていますか？",
    a: "公式情報によれば契約は6ヶ月ごとの自動更新で、契約書面受領日から8日以内であればクーリングオフが可能です。結婚相談所は特定商取引法の特定継続的役務提供に該当するため、中途解約時の精算ルールも法律で定められています。自動更新のタイミングと中途解約時の返金条件は、契約前に書面で必ず確認しましょう。",
  },
  {
    q: "女性でも入会できますか？",
    a: "ヒーローマリッジは男性専門の結婚相談所のため、入会対象は男性です。女性の方は、当サイトの料金比較一覧などから男女両方に対応した相談所をご検討ください。",
  },
  {
    q: "オンラインだけで活動できますか？",
    a: "公式サイトでは全国オンライン対応を掲げており、地方在住でも活動可能とされています。新宿サロンは2026年7月OPEN予定の表記のため、対面希望の場合は現在の面談形式（オンライン／対面）を無料相談時に確認してください。",
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
  { name: "マリッジプロ", path: "/review/marriage-pro/" },
  { name: "ムスベル", path: "/review/musbell/" },
  { name: "naco-do", path: "/review/naco-do/" },
  { name: "ブライダルチューリップ", path: "/review/bridal-tulip/" },
  { name: "料金比較一覧", path: "/compare/" },
];

export default function HeroMarriageReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "ヒーローマリッジ" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          ヒーローマリッジの評判は？料金・成婚実績の実態を公式情報で検証
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年7月（料金・実績は2026年7月に公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#8B7355] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#8B7355] rounded-full" />結論：ヒーローマリッジはこんな人に向く
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>特徴</strong>：IBJ加盟の<strong>男性専門</strong>結婚相談所。プロカメラマン撮影何度でも無料＋写真ABテスト、データ重視の「ロジカル婚活」、月3名紹介＋LINEサポートが柱です。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>料金</strong>：初期165,000円＋月14,300〜27,500円＋成婚料220,000円（税込・お見合い料0円）。<strong>スタンダードプランで1年成婚した場合の総額目安は約58.3万円</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>向く人</strong>：写真・プロフィールを徹底改善したい男性、感覚論ではなくデータで婚活を進めたい男性、オンライン中心で活動したい男性。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>注意点</strong>：<strong>成婚率の公式数値は非公開</strong>で、第三者の口コミも少ないため、判断材料は無料相談での確認が中心になります（本文で見極めポイントを解説）。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本ページの料金・実績等は公式サイトの公表情報（2026年7月確認・税込）にもとづきます。最新かつ正確な数値・契約条件は<strong>公式サイトおよび無料相談</strong>で必ずご確認ください。</p>
        </div>

        <A8Banner ad="hero" />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="bg-[#8B7355] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
          <div className="divide-y divide-gray-50">
            {Object.entries({
              サービス名: overview.name,
              運営会社: overview.company,
              タイプ: overview.type,
              会員数: overview.members,
              対応エリア: overview.area,
              初期費用: overview.initialFee,
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">ヒーローマリッジの強み・特徴</h2>
          <div className="space-y-6">
            {strengths.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-medium text-lg mb-2 text-[#8B7355] tracking-wider">{s.title}</h3>
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">料金プランと総額の目安（税込・2026年7月公式確認）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            初期費用と成婚料は全プラン共通で、月会費が3プランに分かれています。お見合い料は0円のため、<strong>初期費用＋月会費×活動月数＋成婚料</strong>で総額を見積もれます。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">初期費用（全プラン共通）</td><td className="px-4 py-3">165,000円（入会金33,000＋登録料66,000＋活動サポート費66,000）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">月会費（ライト）</td><td className="px-4 py-3">14,300円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">月会費（スタンダード）</td><td className="px-4 py-3">16,500円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">月会費（プロ）</td><td className="px-4 py-3">27,500円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">お見合い料</td><td className="px-4 py-3">0円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">成婚料</td><td className="px-4 py-3">220,000円（自社イベント経由の成婚は50%割引と公式記載）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">スタンダード1年活動（成婚なし）</td><td className="px-4 py-3">約363,000円（初期165,000＋月16,500×12）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">スタンダード1年で成婚した場合</td><td className="px-4 py-3 font-medium">約583,000円（上記＋成婚料220,000）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※金額はすべて税込・2026年7月に公式サイト（料金ページ）で確認した公表値です。契約は6ヶ月ごとの自動更新、契約書面受領日から8日以内はクーリングオフ可能とされています。プランごとのサポート内容の違い・中途解約時の精算条件は、無料相談と契約書面で必ずご確認ください。相場との比較は<Link href="/knowledge/cost/" className="underline text-[#8B7355]">料金相場の解説</Link>も参考になります。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">成婚実績はどう読むべきか（正直な解説）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            2026年7月時点の当サイト調査では、ヒーローマリッジの<strong>成婚率を示す公式数値は公開されていません</strong>。公式サイトには「グループ累計支援男性数44,000人以上」という数字がありますが、これは運営グループ全体の支援人数であり、<strong>ヒーローマリッジ単体の成婚実績を示すものではありません</strong>。一方で、IBJ AWARDの4期連続受賞（自社公称）は活動実態の一つの参考になります。
          </p>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
            成婚率は相談所ごとに計算方法（分母の取り方）が異なるため、数値がある場合でも定義の確認が欠かせません。数値が非公開の場合は、無料相談で「直近1年の成婚退会数」「自分と近い条件の会員の活動事例」を具体的に質問し、回答の具体性で判断するのが現実的です。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">口コミ・評判はある？見極め方（正直な解説）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            当サイトの調査（2026年7月時点）では、ヒーローマリッジについて<strong>出典を確認できる口コミの一次情報は確認できませんでした</strong>。当サイトは実在しない口コミを作成・掲載しない方針のため、代わりに公式情報から検討時の見極めポイントを整理します。
          </p>
          <ul className="space-y-3 text-sm text-[#2C2C2C]/70">
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">1.</span><span><strong>客観的事実を確認する</strong>：IBJ加盟、特商法ページの運営者情報（株式会社アルファブル）、料金内訳の公開など、検証可能な情報は揃っています。トップページに法人名がない点は、特商法ページで自分の目で確認しておきましょう。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">2.</span><span><strong>無料相談で「数字」を質問する</strong>：成婚率が非公開のため、直近の成婚退会数・お見合い成立率・自分と近い年齢層の活動事例を具体的に聞き、回答の具体性を判断材料にします。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">3.</span><span><strong>契約条件を書面で確認する</strong>：6ヶ月自動更新の更新タイミング、中途解約時の精算、成婚の定義（IBJ準拠か）、成婚料の割引条件（自社イベント経由50%割引）の適用要件を必ず書面で確認しましょう。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">4.</span><span><strong>写真サポートの実際を確かめる</strong>：「何度でも無料」の撮影の予約の取りやすさや、ABテストの運用実態は無料相談で具体的に質問できると安心です。</span></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">他社と比較して選ぶ</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            男性専門という特化型が自分に合うか迷ったら、仲人型の大手・オンライン型と料金総額・サポート体制を見比べるのがおすすめです。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#8B7355] underline">結婚相談所の料金比較一覧を見る</Link></li>
            <li><Link href="/review/marriage-pro/" className="text-[#8B7355] underline">マリッジプロの評判・料金を見る（プロカウンセラー特化）</Link></li>
            <li><Link href="/review/musbell/" className="text-[#8B7355] underline">ムスベルの評判・料金を見る（複数連盟加盟の仲人型大手）</Link></li>
            <li><Link href="/review/naco-do/" className="text-[#8B7355] underline">naco-doの評判・料金を見る（オンライン完結・低価格帯）</Link></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">よくある質問</h2>
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

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">結婚相談所の基礎知識で判断材料を増やす</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/knowledge/cost/" className="text-[#8B7355] underline">結婚相談所の料金相場は？初期費用・月会費・成婚料の目安</Link></li>
            <li><Link href="/knowledge/how-to-choose/" className="text-[#8B7355] underline">結婚相談所の選び方｜仲人型とデータマッチング型の違い</Link></li>
            <li><Link href="/knowledge/flow/" className="text-[#8B7355] underline">結婚相談所の入会から成婚までの流れ・活動期間の目安</Link></li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-light mb-4 tracking-widest">他の結婚相談所も見る</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link key={s.name} href={s.path} className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm font-normal hover:border-[#8B7355] hover:text-[#8B7355] transition-colors tracking-wider">{s.name}</Link>
            ))}
          </div>
        </section>

      <A8Banner ad="hero" />

        <section className="mb-12">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">男性の婚活で比較したい相談所</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            男性専門のヒーローマリッジと比較するなら、<Link href="/review/bridal-tulip/" className="text-[#8B7355] underline">ブライダルチューリップ</Link>（高田馬場・3連盟で紹介可能会員約19万名）も候補になります。月会費7,550円〜と月額を抑えて始められる仲人型で、男性の入会も受け付けています。料金体系や成婚料の違いは各レビューで比較してください。男性会員としての費用実額・男性向けサポートの軸で複数社を見比べたい方は、<Link href="/mens/" className="text-[#8B7355] underline">男性の結婚相談所おすすめ比較（男性向けハブ）</Link>もあわせてご覧ください。
          </p>
          <A8Banner ad="tulip-men" />
        </section>

      <AuthorBox />
      </article>
    </>
  );
}
