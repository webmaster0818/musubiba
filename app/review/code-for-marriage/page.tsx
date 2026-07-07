import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

export const metadata = {
  title: "Code For Marriageの評判・料金【2026年】エンジニア専門結婚相談所の実態を解説",
  description:
    "Code For Marriage（コードフォーマリッジ）はITエンジニア専門・仲人が全員元SEの結婚相談所。IBJ正規加盟、スタンダード入会77,000円・月11,000円・成婚費220,000円（税込・2026年7月公式確認）、U-30プラン、100%リモート対応の実態と向き不向きを中立解説します。",
  alternates: { canonical: "/review/code-for-marriage/" },
};

const overview = {
  name: "Code For Marriage（コードフォーマリッジ）",
  type: "仲人型（IBJ＝日本結婚相談所連盟 正規加盟）・ITエンジニア専門",
  members: "IBJ会員ネットワークを利用（相談所単体の会員数は非公開）",
  area: "東京都中央区（100%リモート対応のため全国から利用可・公式記載）",
  initialFee: "スタンダード: 入会費77,000円（税込）",
  monthlyFee: "スタンダード: 11,000円（税込）／U-30: 7,700円",
  matchingFee: "220,000円（成婚退会時・税込）",
  age: "エンジニア・IT職が中心（U-30プランあり）",
  successRate: "非公開（IBJの成婚定義に準拠）",
};

const strengths = [
  {
    title: "日本初を掲げるITエンジニア専門の結婚相談所",
    desc: "2022年設立で、対象をITエンジニア・IT職に特化。エンジニアの働き方（リモート・裁量労働・技術の話題）を前提にした婚活支援を掲げており、「趣味や仕事を理解してもらえない」という婚活のミスマッチを減らしやすい設計です。",
  },
  {
    title: "仲人（カウンセラー）が全員元SE",
    desc: "公式サイトによれば、担当する仲人は全員がシステムエンジニア出身。職務内容や繁忙期の事情を説明なしで理解してもらえるのは、他の相談所にはない強みです。技術職特有の「自己PRの言語化」も相談しやすい環境といえます。",
  },
  {
    title: "100%リモート対応で全国から利用できる",
    desc: "カウンセリングから活動サポートまでオンラインで完結します。所在地は東京ですが、地方在住のエンジニアやフルリモート勤務者でも利用可能です（お見合い自体はIBJの仕組みで対面・オンライン両方があります）。",
  },
  {
    title: "IBJ正規加盟＋U-30向けの割安プラン",
    desc: "IBJ（日本結婚相談所連盟）の正規加盟店で、お相手探しは全国規模の会員ネットワークが対象。30歳未満向けのU-30プラン（入会33,000円・月7,700円）があり、若手エンジニアは初期負担を抑えて始められます。",
  },
];

const pros = [
  "仲人全員が元SEで、エンジニアの事情を前提に相談できる",
  "100%リモート対応・全国から利用可",
  "IBJ加盟で出会いの母数は全国規模",
  "U-30プランで若手は初期費用・月会費を抑えられる",
  "料金体系がシンプルで公式サイトに明記されている",
];

const cons = [
  "2022年設立と新しく、第三者の口コミがWeb上にほとんどない",
  "成婚料220,000円が成婚退会時に発生する",
  "エンジニア専門のため、他業種の相談ノウハウを求める人には不向き",
  "対面でじっくり会って相談したい人にはリモート中心が合わない場合がある",
];

const faqs = [
  {
    q: "Code For Marriageの料金は総額いくらかかりますか？",
    a: "公式公表の料金（税込・2026年7月確認）は、スタンダードプランで入会費77,000円＋月会費11,000円＋成婚費220,000円です。1年活動して成婚した場合の総額目安は約429,000円（77,000＋11,000×12＋220,000）。30歳未満はU-30プラン（入会33,000円・月7,700円）でさらに抑えられます。最新の料金は公式サイトでご確認ください。",
  },
  {
    q: "エンジニア以外でも入会できますか？",
    a: "サービスはITエンジニア・IT職向けに設計されています。エンジニア以外の方の入会可否は公式サイトに明記がないため、無料相談でご確認ください。「エンジニアと結婚したい」お相手探しはIBJネットワーク全体が対象になります。",
  },
  {
    q: "地方在住でも利用できますか？",
    a: "利用できます。公式サイトは100%リモート対応を明記しており、カウンセリングやサポートはオンラインで完結します。お見合いはIBJの仕組み上、対面・オンラインの両方があります。",
  },
  {
    q: "口コミがほとんど見つからないのですが大丈夫ですか？",
    a: "2022年設立の小規模専門相談所のため、第三者の口コミはWeb上にまだほとんどありません（2026年7月時点の当サイト調査）。判断材料は、IBJ正規加盟という客観的事実、料金の透明性、無料相談での相性確認に置くのが現実的です。当サイトは実在しない口コミを掲載しない方針のため、体験談の紹介はしていません。",
  },
  {
    q: "IBJ加盟とはどういう意味ですか？",
    a: "IBJ（日本結婚相談所連盟）は国内最大級の結婚相談所ネットワークで、加盟相談所の会員同士がお見合いできます。Code For Marriageは会社概要等でIBJ正規加盟を明記しており、小規模でも出会いの母数は全国規模です。",
  },
  {
    q: "他のエンジニア向け婚活サービスとの違いは？",
    a: "マッチングアプリと違い、独身証明書等の提出を前提とする結婚相談所の仕組み（IBJ）の上で、仲人が伴走する点が特徴です。その中でも「仲人が全員元SE」という専門特化は珍しく、職業理解のあるサポートを重視する人に向いています。",
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
          Code For Marriageの評判・料金｜エンジニア専門結婚相談所の実態
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年7月（料金は2026年7月に公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#8B7355] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#8B7355] rounded-full" />結論：Code For Marriageはこんな人に向く
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>特徴</strong>：ITエンジニア専門×<strong>仲人が全員元SE</strong>×100%リモートという、他にない組み合わせの相談所。IBJ正規加盟で出会いの母数は全国規模です。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>料金</strong>：入会77,000円＋月11,000円＋成婚費220,000円（税込）。<strong>1年で成婚した場合の総額目安は約42.9万円</strong>。U-30プランなら若手はさらに割安です。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>向く人</strong>：仕事や技術の話を「説明しなくても分かってくれる」担当者が欲しいエンジニア。地方・リモート勤務で通所が難しい人。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>注意点</strong>：2022年設立で第三者口コミが少ないため、無料相談での相性確認が判断の中心になります。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本ページの料金等は公式サイトの公表情報（2026年7月確認・税込）にもとづきます。最新かつ正確な数値・契約条件は<strong>公式サイトおよび無料相談</strong>で必ずご確認ください。</p>
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">Code For Marriageの強み・特徴</h2>
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
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">スタンダード：入会費</td><td className="px-4 py-3">77,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">スタンダード：月会費</td><td className="px-4 py-3">11,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">成婚費（成婚退会時）</td><td className="px-4 py-3">220,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">U-30プラン（30歳未満）</td><td className="px-4 py-3">入会33,000円・月7,700円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">1年活動の総額目安（成婚なし）</td><td className="px-4 py-3">約209,000円（77,000＋11,000×12）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">1年で成婚した場合の総額目安</td><td className="px-4 py-3 font-medium">約429,000円（上記＋成婚費220,000）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※お見合い料等の細部条件は無料相談でご確認ください。仲人型の相場（<Link href="/knowledge/cost/" className="underline text-[#8B7355]">料金相場の解説</Link>）と比べ、初期費用が抑えめの構成です。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">口コミがまだ少ない専門相談所の見極め方（正直な解説）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            当サイトの調査（2026年7月時点）では、Code For Marriageの<strong>第三者による口コミ・体験談はWeb上にまだほとんど存在しません</strong>。当サイトは実在しない口コミを作成・掲載しない方針のため、代わりにエンジニアが専門特化型の相談所を見極めるポイントを整理します。
          </p>
          <ul className="space-y-3 text-sm text-[#2C2C2C]/70">
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">1.</span><span><strong>「元SE」の具体度を無料相談で確認</strong>：担当仲人の経歴（開発経験・業界）を聞き、自分の職種・働き方をどこまで理解して提案してくれるかを見ます。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">2.</span><span><strong>IBJ加盟という客観的事実を土台にする</strong>：出会いの母数はIBJネットワークに依存するため、相談所の規模より「サポートの質」で選ぶのが専門特化型の正しい評価軸です。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">3.</span><span><strong>リモート完結の相性を試す</strong>：無料相談自体がオンラインなので、「画面越しで本音を話せるか」をそのままテストできます。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">4.</span><span><strong>契約条件を書面で確認</strong>：中途退会時の精算・休会制度・成婚の定義（IBJ準拠か）は必ず書面で確認しましょう。</span></li>
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
      <AuthorBox />
      </article>
    </>
  );
}
