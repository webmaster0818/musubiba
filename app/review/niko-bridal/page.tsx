import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";
import FlowGuide from "@/components/FlowGuide";

export const metadata = {
  title: "nikoブライダル（大阪）の評判・料金【2026年】成婚率56.3%の算出条件まで検証",
  description:
    "nikoブライダル（大阪市・IBJ正規加盟）の評判・料金を中立解説。初期費用110,000円・月会費13,200円・成婚料220,000円（税込・2026年7月7日公式確認）、成婚率56.3%（2025年実績・成婚退会÷全退会）の算出条件、梅田・難波・天王寺の出張面談型という特徴まで検証します。",
  alternates: { canonical: "/review/niko-bridal/" },
};

const overview = {
  name: "nikoブライダル",
  type: "仲人型（IBJ＝日本結婚相談所連盟 正規加盟・マル適マークCMS取得）",
  members: "IBJ会員ネットワーク 104,859名（2025年12月現在・公式表記）を利用",
  area: "大阪市東成区を拠点に、梅田・難波・天王寺など大阪市内へ無料出張面談（店舗来店型ではない）",
  initialFee: "初期費用 110,000円（入会金33,000円＋登録料77,000円・税込）",
  monthlyFee: "13,200円（税込）／男性婚活プランは16,500円",
  matchingFee: "220,000円（成婚退会時・税込）／男性婚活プランは198,000円",
  age: "公式に限定なし（男性プランは30〜40代向けの設計）",
  successRate: "56.3%（2025年1〜12月・成婚退会人数÷全退会人数・公式公表）",
};

const strengths = [
  {
    title: "成婚率56.3%を「算出条件付き」で公表している",
    desc: "公式サイトは成婚率56.3%について「2025年1月〜12月の自社会員実績・成婚退会人数÷全退会人数」と算出条件を明記しています。数字だけ掲げて条件を書かない相談所が多い中、検証可能な形で公表している点は誠実です。あわせて平均活動期間8.4ヶ月も公表されていますが、こちらは2024年実績で対象年が異なる点は注意です。",
  },
  {
    title: "IBJ AWARDを開業以来5年連続受賞",
    desc: "2021年のRookie部門を皮切りに、2022〜2025年はPremium部門を受賞（公式告知）。IBJ加盟店の中で一定の成婚実績を続けている客観的な指標です。IBJの「反響を呼んだ結婚相談所100社」（Googleクチコミ評価基準）にも大阪8社の1つとして入賞しています。",
  },
  {
    title: "代表カウンセラーの経歴が具体的",
    desc: "代表の森あゆみ氏は、企画営業職→ホテル運営約10年（支配人・研修講師）→自身も35歳から約8ヶ月の婚活で成婚という経歴を公式に開示。上級心理カウンセラー等の資格も明記されています。「誰が伴走してくれるか」が事前にわかるのは小規模相談所を選ぶ上で重要な材料です。",
  },
  {
    title: "出張面談型で梅田・難波・天王寺をカバー",
    desc: "店舗に通う形式ではなく、大阪市内中心の無料出張面談＋オンラインで活動する方式です。仕事帰りにターミナル駅近くで面談できる柔軟さがある一方、固定店舗の安心感を求める人には不向きです。",
  },
];

const pros = [
  "成婚率の算出条件を明記して公表（56.3%・2025年実績）",
  "IBJ AWARD 5年連続受賞という継続的な実績",
  "お見合い料無料・申込200名/月と活動量の制約が緩い",
  "男性向けプラン（お見合い同行・プロポーズ相談付き）がある",
  "初回プロフィール写真無料",
];

const cons = [
  "固定店舗がなく出張・オンライン面談型（店舗型を求める人には不向き）",
  "電話番号の公表がなく、連絡はフォーム・LINE・メール中心",
  "成婚料220,000円が成婚退会時に発生する",
  "拠点が大阪市のため、関西圏以外は実質オンライン利用になる",
];

const faqs = [
  {
    q: "nikoブライダルの料金は総額いくらかかりますか？",
    a: "公式公表の料金（税込・2026年7月7日確認）は、niko婚活プランで初期費用110,000円（入会金33,000円＋登録料77,000円）＋月会費13,200円＋成婚料220,000円、お見合い料は無料です。1年活動して成婚した場合の総額目安は約488,400円。男性婚活プラン（初期88,000円・月16,500円・成婚料198,000円）は約484,000円です。",
  },
  {
    q: "成婚率56.3%は本当ですか？",
    a: "公式サイトに「2025年1月〜12月の自社会員実績、成婚率＝成婚退会人数÷全退会人数」と算出条件付きで公表されています。これはIBJ標準の算出方法で、業界でよくある「根拠のない高成婚率」とは異なり検証可能な表記です。ただし自社会員ベースの数値であり、入会すれば56.3%で成婚できるという意味ではない点は理解しておきましょう。",
  },
  {
    q: "店舗はどこにありますか？",
    a: "拠点は大阪市東成区ですが、店舗来店型ではなく、梅田・難波・天王寺など大阪市内への無料出張面談＋オンライン面談で活動する方式です。関西圏以外の方はオンライン中心の利用になります。",
  },
  {
    q: "どんな人が担当してくれますか？",
    a: "代表カウンセラーの森あゆみ氏が担当します。企画営業→ホテル運営約10年（支配人経験）→自身も35歳からの婚活で約8ヶ月成婚という経歴で、上級心理カウンセラー・FP3級等の資格を公式に開示しています。1名運営のため、無料相談で相性を確かめてから決めるのがおすすめです。",
  },
  {
    q: "口コミはありますか？",
    a: "Googleビジネスプロフィールに口コミがあり、IBJの「反響を呼んだ結婚相談所100社」（Googleクチコミ評価を基準とした企画）に大阪8社の1つとして入賞しています。当サイトは口コミ本文の転載や創作をしない方針のため、最新の生の口コミはGoogleマップでご確認ください。",
  },
  {
    q: "無料相談はどこから申し込めますか？",
    a: "公式サイトの無料相談フォーム（男性用・女性用が分かれています）またはLINEから申し込めます。オンライン・対面（出張）どちらも対応しています。",
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
  { name: "Code For Marriage", path: "/review/code-for-marriage/" },
  { name: "ムスベル", path: "/review/musbell/" },
  { name: "料金比較一覧", path: "/compare/" },
];

export default function NikoBridalReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・レビュー", href: "/" }, { name: "nikoブライダル" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          nikoブライダル（大阪）の評判・料金｜成婚率56.3%の実態を検証
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年7月（料金・実績は2026年7月7日に公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#8B7355] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#8B7355] rounded-full" />結論：nikoブライダルはこんな人に向く
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>特徴</strong>：大阪の1名運営×IBJ正規加盟。<strong>成婚率56.3%を算出条件付きで公表</strong>（2025年・成婚退会÷全退会）し、IBJ AWARDを5年連続受賞している実績型の小規模相談所です。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>料金</strong>：初期110,000円＋月13,200円＋成婚料220,000円（税込・お見合い料無料）。<strong>1年で成婚した場合の総額目安は約48.8万円</strong>。男性向けプラン（総額約48.4万円・お見合い同行付き）もあります。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>向く人</strong>：大阪市内（梅田・難波・天王寺）で、数字の根拠を示す相談所を選びたい人。仕事帰りに出張面談で活動したい人。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>注意点</strong>：固定店舗なし・電話番号非公表（フォーム/LINE中心）。店舗の安心感を重視する人には不向きです。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本ページの料金・実績は公式サイトの公表情報（2026年7月7日確認・税込）にもとづきます。最新かつ正確な数値・契約条件は<strong>公式サイトおよび無料相談</strong>で必ずご確認ください。</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="bg-[#8B7355] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
          <div className="divide-y divide-gray-50">
            {Object.entries({
              サービス名: overview.name, タイプ: overview.type, 会員数: overview.members,
              対応エリア: overview.area, 初期費用: overview.initialFee, 月会費: overview.monthlyFee,
              成婚料: overview.matchingFee, 対象: overview.age, 成婚率: overview.successRate,
            }).map(([k, v]) => (
              <div key={k} className="flex px-6 py-3.5 text-sm">
                <span className="w-28 shrink-0 font-medium text-[#2C2C2C]/50 tracking-wider">{k}</span>
                <span className="text-[#2C2C2C]">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">nikoブライダルの強み・特徴</h2>
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">料金プランと総額の目安（税込・2026年7月7日公式確認）</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#FAF7F2] text-left">
                  <th className="px-4 py-3">項目</th>
                  <th className="px-4 py-3">niko婚活プラン</th>
                  <th className="px-4 py-3">男性婚活プラン</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["入会金＋登録料（初期費用）", "110,000円", "88,000円"],
                  ["月会費", "13,200円", "16,500円"],
                  ["お見合い料", "無料", "無料"],
                  ["成婚料", "220,000円", "198,000円"],
                  ["申込可能数", "200名/月", "200名/月"],
                  ["1年で成婚した場合の総額目安", "約488,400円", "約484,000円"],
                ].map(([k, a, b]) => (
                  <tr key={k} className="border-t border-gray-50">
                    <td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">{k}</td>
                    <td className="px-4 py-3">{a}</td>
                    <td className="px-4 py-3">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※男性婚活プランは30〜40代男性向け設計で、お見合い同行・プロポーズ相談が含まれます。仲人型の相場は<Link href="/knowledge/cost/" className="underline text-[#8B7355]">料金相場の解説</Link>、より安い選択肢は<Link href="/compare/cheap/" className="underline text-[#8B7355]">総額の安い結婚相談所比較</Link>をご覧ください。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">「成婚率56.3%」の正しい読み方（正直な解説）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            nikoブライダルの成婚率は<strong>「成婚退会人数÷全退会人数」（2025年1〜12月・自社会員実績）</strong>という条件付きで公表されています。これはIBJ標準の算出方法で、「退会した人のうち成婚して辞めた人の割合」を意味します。入会者全員の56.3%が成婚するという意味ではありませんが、算出条件を明示しない相談所が多い中で検証可能な公表姿勢は評価できます。あわせて公表されている平均活動期間8.4ヶ月は<strong>2024年実績で、成婚率と対象年が異なる</strong>点だけ留意してください。
          </p>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
            当サイトは口コミの創作をしない方針です。生の評判はGoogleマップの口コミ（IBJの「反響を呼んだ結婚相談所100社」にGoogleクチコミ評価基準で入賞）をご確認のうえ、無料相談で代表カウンセラーとの相性を確かめるのが確実です。
          </p>
        </section>

        <FlowGuide name={overview.name} initialFee={overview.initialFee} monthlyFee={overview.monthlyFee} matchingFee={overview.matchingFee} />

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

        <section>
          <h2 className="text-lg font-light mb-4 tracking-widest">他の結婚相談所も見る</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link key={s.name} href={s.path} className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm font-normal hover:border-[#8B7355] hover:text-[#8B7355] transition-colors tracking-wider">{s.name}</Link>
            ))}
          </div>
        </section>
      <AuthorBox />
      </article>
    </>
  );
}
