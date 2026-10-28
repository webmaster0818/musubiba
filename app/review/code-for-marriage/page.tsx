import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FeePosition from "@/components/FeePosition";
import AuthorBox from "@/components/AuthorBox";
import FlowGuide from "@/components/FlowGuide";

export const metadata = {
  title: "Code For Marriage（コードフォーマリッジ）の評判・口コミ・料金【2026年】ITエンジニア専門の結婚相談所",
  description:
    "Code For Marriage（コードフォーマリッジ）は2022年開始のITエンジニア専門の結婚相談所です。IBJの口コミ評価4.8（13件）と、スタンダード入会費77,000円・月会費11,000円・成婚費220,000円（税込・2026年10月28日公式確認）、運営会社を掲載しています。",
  alternates: { canonical: "/review/code-for-marriage/" },
};

const overview = {
  name: "Code For Marriage（コードフォーマリッジ）",
  type: "仲人型（IBJ＝日本結婚相談所連盟 正規加盟）・ITエンジニア専門",
  members: "IBJ会員ネットワークを利用（相談所単体の会員数は非公開）",
  company: "CY株式会社（代表取締役社長 澤木陽太郎・公式の会社概要）",
  area: "東京都中央区銀座8-18-3 銀座加藤ビル2階（東銀座駅徒歩5分・IBJ掲載）。オンライン面談・オンラインお見合いに対応",
  initialFee: "スタンダード: 入会費77,000円（税込）",
  monthlyFee: "スタンダード: 11,000円（税込）／U-30: 7,700円",
  matchingFee: "220,000円（成婚退会時・税込）",
  age: "ITエンジニアの婚活に特化（公式FAQでは年齢・職業の制限なし。U-30プランは30歳以下）",
  successRate: "非公開（IBJの成婚定義に準拠）",
  ibjReview: "IBJの相談所ページで4.8点・13件（★5が85%・★4が15%／2026年10月28日確認）",
};

const strengths = [
  {
    title: "日本初を掲げるITエンジニア専門の結婚相談所",
    desc: "公式サイトでは「日本初のITエンジニア専門結婚相談所として2022年から運営」と説明しています。2025年12月17日にはブランドと料金プランを刷新し、キャッチコピーを「いっしょに考える、はじめる。ITエンジニアの結婚相談所。」に変更しました。エンジニアの働き方や価値観を前提にした婚活支援を掲げています。",
  },
  {
    title: "IT業界を経験したカウンセラーが担当",
    desc: "公式トップページでは「元ITエンジニアが担当カウンセラーをつとめている」と説明しています。代表カウンセラーの澤木氏の紹介ページには、リクルートなどでの就業経験と、民間企業での大規模なオフショア開発体制の構築経験が記載されています。職務内容や繁忙期の事情を前提に相談できる点が特徴です。",
  },
  {
    title: "オンライン面談・オンラインお見合いに対応",
    desc: "公式FAQでは、オンライン面談やオンラインお見合いが可能で、日程調整もカウンセラーが間に入ると説明しています。初回のお見合いは、ホテルのラウンジやカフェでの1時間程度の対面が基本で、遠方の場合などはオンラインでも行えます。サロンは東京都中央区銀座にあります。",
  },
  {
    title: "IBJ正規加盟＋U-30向けの割安プラン",
    desc: "IBJ（日本結婚相談所連盟）の正規加盟店で、お相手探しは全国規模の会員ネットワークが対象です。30歳以下限定のライトU-30プラン（入会費33,000円・月会費7,700円・毎月1名限定と公式明記）があり、若手エンジニアは初期負担を抑えて始められます。",
  },
];

const pros = [
  "IT業界を経験したカウンセラーに、エンジニアの働き方を前提に相談できる",
  "オンライン面談・オンラインお見合いに対応している",
  "IBJの相談所ページの口コミは13件で評価4.8（★4以上のみ）",
  "IBJ加盟で出会いの母数は全国規模",
  "U-30プランで若手は初期費用・月会費を抑えられる",
  "料金体系がシンプルで公式サイトに明記されている",
];

const cons = [
  "2022年開始と新しく、IBJの口コミは13件・公式の成婚者インタビューは2件と、判断材料の量はまだ多くない",
  "成婚料220,000円が成婚退会時に発生する",
  "エンジニア専門のため、他業種の相談ノウハウを求める人には不向き",
  "中途解約時は、システム利用開始後でも2万円または契約残額の20%のいずれか低い額が差し引かれる（公式FAQ）",
];

const faqs = [
  {
    q: "Code For Marriageの料金は総額いくらかかりますか？",
    a: "公式公表の料金（税込・2026年10月28日確認）は、スタンダードプランで入会費77,000円＋月会費11,000円＋成婚費220,000円です。1年活動して成婚した場合の総額目安は約429,000円（77,000＋11,000×12＋220,000）です。30歳未満はU-30プラン（入会33,000円・月7,700円）でさらに抑えられます。最新の料金は公式サイトでご確認ください。",
  },
  {
    q: "エンジニア以外でも入会できますか？",
    a: "公式FAQでは「基本的には独身で、真剣に結婚を希望されている方であればご入会いただけます。年齢や職業に制限はありません」と案内しています。入会時には身分証明書や独身証明書などの提出が必要です。サービスはITエンジニアの婚活に特化した設計のため、ご自身に合うかどうかは無料相談でご確認ください。",
  },
  {
    q: "地方在住でも利用できますか？",
    a: "公式FAQでは、オンライン面談やオンラインお見合いが可能と案内しています。初回のお見合いはホテルのラウンジやカフェでの対面が基本で、遠方の場合などはオンラインでも行えます。お相手探しはIBJの全国の会員が対象です。",
  },
  {
    q: "Code For Marriageの口コミ・評判はどこで確認できますか？",
    a: "IBJの相談所ページに利用者の口コミが掲載されており、2026年10月28日時点で評価4.8点・13件（★5が85%・★4が15%）です。公式サイトの「MARRIAGE INTERVIEW」には成婚者インタビューが2件（2023年5月1日・2025年9月28日）掲載されています。件数はまだ多くないため、無料相談での相性確認とあわせてご判断ください。当サイトでは口コミの創作・転載は行っていません。",
  },
  {
    q: "休会や中途解約はできますか？",
    a: "公式FAQによると、休会は1回に限り連続最長3か月まで取得でき、休会期間中の月会費はかかりません（休止開始希望日の10日前までに連絡が必要）。中途解約は、システム利用開始前であれば違約金3万円を除いた支払済み料金、利用開始後は2万円または契約残額の20%のいずれか低い額を除いた額が返金されます。クーリング・オフは契約書面の受領日を含む8営業日以内です。",
  },
  {
    q: "IBJ加盟とはどういう意味ですか？",
    a: "IBJ（日本結婚相談所連盟）は全国の結婚相談所が加盟する連盟で、加盟相談所の会員同士がお見合いできます。Code For Marriageは会社概要でIBJ正規加盟店と明記しており、小規模でも出会いの母数は全国規模です。",
  },
  {
    q: "他のエンジニア向け婚活サービスとの違いは何ですか？",
    a: "マッチングアプリと違い、独身証明書等の提出を前提とする結婚相談所の仕組み（IBJ）の上で、仲人が伴走する点が特徴です。その中でもITエンジニアに対象を絞った結婚相談所は少なく、職業への理解があるサポートを重視する方に適しています。",
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
  { name: "マリッジプロ", path: "/review/marriage-pro/" },
  { name: "nikoブライダル", path: "/review/niko-bridal/" },
  { name: "ムスベル", path: "/review/musbell/" },
  { name: "料金比較一覧", path: "/compare/" },
];

export default function CodeForMarriageReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "Code For Marriage" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          Code For Marriage（コードフォーマリッジ）の評判・口コミ・料金｜ITエンジニア専門の結婚相談所
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月28日（料金・会社概要・FAQは2026年10月28日に公式サイトで、所在地・口コミ件数はIBJの相談所ページで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />Code For Marriageの特徴と適している方
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>口コミ・評判</strong>：IBJの相談所ページで<strong>評価4.8点・13件</strong>（★5が85%・★4が15%、2026年10月28日確認）です。カウンセラーの話し方や信頼感、オンライン面談の継続を評価する声が見られます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>特徴</strong>：2022年開始のITエンジニア専門の結婚相談所で、運営はCY株式会社（東京都中央区銀座）です。元ITエンジニアのカウンセラーが担当すると公式に記載されています。IBJ正規加盟のため、出会いの母数は全国規模です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>料金</strong>：入会費77,000円＋月会費11,000円＋成婚費220,000円（税込）です。<strong>1年で成婚した場合の総額目安は約42.9万円</strong>。U-30プランなら若手はさらに割安です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>適している方</strong>：仕事や技術の話を詳しく説明しなくても理解してくれる担当者を求めるエンジニアの方、オンライン面談を中心に活動したい方に適しています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>注意点</strong>：口コミは13件と多くないため、無料相談での相性確認もあわせて判断材料にすることをおすすめします。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本ページの料金等は公式サイトの公表情報（2026年10月28日確認・税込）にもとづきます。最新かつ正確な数値・契約条件は<strong>公式サイトおよび無料相談</strong>で必ずご確認ください。</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="bg-[#A08447] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
          <div className="divide-y divide-gray-50">
            {Object.entries({
              サービス名: overview.name, 運営会社: overview.company, タイプ: overview.type, 会員数: overview.members,
              所在地: overview.area, 初期費用: overview.initialFee, 月会費: overview.monthlyFee,
              成婚料: overview.matchingFee, 対象: overview.age, 成婚率: overview.successRate, IBJの口コミ: overview.ibjReview,
            }).map(([k, v]) => (
              <div key={k} className="flex px-6 py-3.5 text-sm">
                <span className="w-28 shrink-0 font-medium text-[#2C2C2C]/50 tracking-wider">{k}</span>
                <span className="text-[#2C2C2C]">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">Code For Marriageの強み・特徴</h2>
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">料金プランと総額の目安（税込・2026年10月28日公式確認）</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">スタンダード：入会費</td><td className="px-4 py-3">77,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">スタンダード：月会費</td><td className="px-4 py-3">11,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">成婚費（成婚退会時）</td><td className="px-4 py-3">220,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">ライトU-30プラン（30歳以下・毎月1名限定）</td><td className="px-4 py-3">入会33,000円・月7,700円・成婚費220,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">フルサポートプラン（人数限定）</td><td className="px-4 py-3">入会220,000円・月会費0円・お見合い料10,000円/回・成婚費550,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">1年活動の総額目安（成婚なし）</td><td className="px-4 py-3">約209,000円（77,000＋11,000×12）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">1年で成婚した場合の総額目安</td><td className="px-4 py-3 font-medium">約429,000円（上記＋成婚費220,000）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※料金は2026年10月28日に公式サイトの料金ページで確認しました（10月22日の確認時から変更はありません）。公式の料金ページでは、ライトU-30・スタンダードはお見合い料無料・お申込みは月100名まで、いずれのプランもクーリング・オフと休会制度ありと記載されています。休会・中途解約の条件は下のよくある質問で公式FAQの記載をご紹介しています。仲人型の相場（<Link href="/knowledge/cost/" className="underline text-[#A08447]">料金相場の解説</Link>）と比べ、初期費用が抑えめの構成です。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">Code For Marriageの口コミの掲載状況と見極め方</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead><tr className="bg-[#FAF7F2]"><th className="px-4 py-3 text-left font-medium text-[#2C2C2C]/70">掲載先</th><th className="px-4 py-3 text-left font-medium text-[#2C2C2C]/70">件数・内容（2026年10月28日確認）</th></tr></thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">IBJの相談所ページ（クチコミ）</td><td className="px-4 py-3">評価4.8点・13件。★5が85%、★4が15%</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">公式サイト「MARRIAGE INTERVIEW」</td><td className="px-4 py-3">成婚者インタビュー2件（2023年5月1日・2025年9月28日）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">IBJの相談所ページ（ブログ）</td><td className="px-4 py-3">カウンセラーブログ163件</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            IBJの口コミには、エンジニアが結婚相手として評価される点への納得、カウンセラーの話し方や信頼感、オンライン面談を重ねて成婚に至った経緯などが書かれています（当サイトによる要約です。本文はIBJの相談所ページでご確認ください）。件数はまだ多くないため、当サイトでは以下の点もあわせて確認することをおすすめしています。
          </p>
          <ul className="space-y-3 text-sm text-[#2C2C2C]/70">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">1.</span><span><strong>担当カウンセラーの経歴を無料相談で確認する</strong>：担当カウンセラーの経歴（開発経験・業界）を聞き、自分の職種・働き方をどこまで理解して提案してくれるかを確認します。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">2.</span><span><strong>IBJ加盟という客観的事実を土台にする</strong>：出会いの母数はIBJネットワークに依存するため、相談所の規模より「サポートの質」で選ぶことが、専門特化型の相談所を評価する際の適切な基準です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">3.</span><span><strong>オンライン面談との相性を確かめる</strong>：無料相談はオンラインで受けられるため、画面越しに本音を話せるかをその場で確認できます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">4.</span><span><strong>契約条件を書面で確認する</strong>：中途退会時の精算・休会制度・成婚の定義（IBJ準拠か）は、必ず書面でご確認ください。</span></li>
          </ul>
        </section>

        <FlowGuide name={overview.name} initialFee={overview.initialFee} monthlyFee={overview.monthlyFee} matchingFee={overview.matchingFee} />

              <FeePosition slug="code-for-marriage" />

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
      <AuthorBox />
      </article>
    </>
  );
}
