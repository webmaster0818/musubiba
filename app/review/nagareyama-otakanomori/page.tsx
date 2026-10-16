import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FeePosition from "@/components/FeePosition";
import AuthorBox from "@/components/AuthorBox";
import FlowGuide from "@/components/FlowGuide";

export const metadata = {
  title: "流山おおたかの森結婚相談所の評判・料金【2026年】IBJ加盟・月会費9,900円の料金と特徴を解説",
  description:
    "流山おおたかの森結婚相談所（千葉県流山市）の評判・料金を、中立的な立場で解説しています。IBJ加盟、初期費用165,000円・月会費9,900円・成婚料220,000円（税込・2026年7月公式確認）の総額目安、カウンセラー歴23年の代表による1名運営の特徴、流山・柏・野田・松戸への出張対応について整理しています。",
  alternates: { canonical: "/review/nagareyama-otakanomori/" },
};

const overview = {
  name: "流山おおたかの森結婚相談所",
  type: "仲人型（IBJ＝日本結婚相談所連盟 加盟）",
  members: "IBJ会員ネットワークを利用（相談所単体の会員数は非公開）",
  area: "千葉県流山市を拠点に、流山・柏・野田・松戸エリアへ出張対応（公式記載）",
  initialFee: "165,000円（入会金38,000＋登録料34,000＋スタートアップ30,000＋サポート63,000・税込）",
  monthlyFee: "9,900円（税込）",
  matchingFee: "220,000円（成婚退会時・税込）",
  age: "公式に限定の記載なし（要確認）",
  successRate: "非公開（IBJの成婚定義に準拠）",
};

const strengths = [
  {
    title: "カウンセラー歴23年の代表が最初から最後まで担当する1名運営",
    desc: "公式プロフィールによれば、代表カウンセラーは業界歴23年を経て48歳で独立しています。大手のように担当が交代する仕組みではなく、入会相談から成婚まで同じカウンセラーが担当します。担当が変わる心配がない一方、相性の見極めが重要になるため、入会前の無料相談で話しやすさを確認することをおすすめします。",
  },
  {
    title: "IBJ加盟で全国規模の会員ネットワークを利用できる",
    desc: "小規模相談所でも、日本結婚相談所連盟（IBJ）加盟のため、お相手探しはIBJの全国会員ネットワークが対象です。相談所の規模が小さくても出会いの数が限られない点が、連盟加盟型の特徴です。",
  },
  {
    title: "月会費9,900円・単一プランのシンプルな料金体系",
    desc: "料金はプランが1つだけで、月会費9,900円（税込）は仲人型の相場（月1〜2万円程度）と比べて低めの設定です。初期費用の内訳（入会金・登録料・スタートアップ・サポート費）も公式サイトに明記されており、料金の透明性が高い相談所といえます。",
  },
  {
    title: "流山おおたかの森を拠点にした出張型の地域密着サポート",
    desc: "TX沿線の流山おおたかの森を中心に、柏・野田・松戸エリアへの出張対応を公式に掲げています。店舗へ通う形ではなく、地域で会って相談したい方に適しています。",
  },
];

const pros = [
  "IBJ加盟で全国の会員ネットワークからお相手を探せる",
  "月会費9,900円（税込）と、仲人型では低めの設定",
  "単一プラン・内訳明記で料金が分かりやすい",
  "代表が一貫して担当し、担当交代がない",
  "流山・柏・野田・松戸へ出張対応の地域密着型",
];

const cons = [
  "初期費用165,000円は月会費の安さに比べるとまとまった額",
  "成婚料220,000円が成婚退会時に発生する",
  "1名運営のため、担当者との相性がそのまま活動の質に直結する",
  "開業から日が浅く、第三者の口コミがWeb上にほとんどない",
];

const faqs = [
  {
    q: "流山おおたかの森結婚相談所の料金は総額いくらかかりますか？",
    a: "公式公表の料金（税込・2026年7月確認）は、初期費用165,000円＋月会費9,900円＋成婚料220,000円です。1年活動して成婚した場合の総額目安は約503,800円（165,000＋9,900×12＋220,000）です。成婚しなかった場合の1年総額は約283,800円です。最新の料金は公式サイト・無料相談でご確認ください。",
  },
  {
    q: "IBJ加盟とはどういう意味ですか？出会いの数に影響はありますか？",
    a: "IBJ（日本結婚相談所連盟）は、加盟相談所の会員同士がお見合いできる結婚相談所ネットワークです。流山おおたかの森結婚相談所は公式サイトでIBJ加盟を明記しており、お相手探しはIBJの全国会員が対象です。相談所の規模と出会いの数は、別のものとお考えください。",
  },
  {
    q: "どのエリアに対応していますか？",
    a: "公式サイトでは千葉県流山市（流山おおたかの森）を拠点に、柏・野田・松戸エリアへの出張対応を掲げています。それ以外の地域やオンライン面談の可否は公式に明記がないため、無料相談時にご確認ください。",
  },
  {
    q: "1名運営の相談所は大手と比べて不安はありませんか？",
    a: "1名運営には、担当が交代しない、対応や方針が一貫するという強みがある一方、相性が合わない場合に担当を替えられない、サポート量が代表の対応可能な範囲に左右されるという注意点があります。無料相談で話しやすさや提案の具体性を確認したうえで、ご判断いただくことをおすすめします。",
  },
  {
    q: "口コミや評判がほとんど見つからない場合、どのように判断すればよいですか？",
    a: "開業からの年数が浅い小規模相談所のため、第三者の口コミはWeb上にほとんどありません（2026年7月時点の当サイト調査）。口コミの少なさ自体は小規模相談所に共通の特徴で、良し悪しの証拠にはなりません。判断材料は、公式の料金透明性（本相談所は内訳まで明記）、IBJ加盟という客観的事実、無料相談での対応の質に置くことをおすすめします。",
  },
  {
    q: "入会条件はありますか？",
    a: "公式サイトに詳細な入会条件の明記は確認できませんでした（2026年7月時点）。一般にIBJ加盟相談所では独身証明書・本人確認書類等の提出が必要です。詳細は無料相談でご確認ください。",
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
  { name: "Code For Marriage", path: "/review/code-for-marriage/" },
  { name: "マリッジプロ", path: "/review/marriage-pro/" },
  { name: "nikoブライダル", path: "/review/niko-bridal/" },
  { name: "ムスベル", path: "/review/musbell/" },
  { name: "リングベル", path: "/review/ringbell/" },
  { name: "料金比較一覧", path: "/compare/" },
];

export default function NagareyamaOtakanomoriReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "流山おおたかの森結婚相談所" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          流山おおたかの森結婚相談所の評判・料金｜IBJ加盟・月会費9,900円の料金と特徴を解説
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年7月（料金は2026年7月に公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />流山おおたかの森結婚相談所が適している方
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>特徴</strong>：カウンセラー歴23年の代表による<strong>1名運営・IBJ加盟</strong>の地域密着型の相談所です。担当が交代しない継続的なサポートと、IBJ全国ネットワークでの出会いを両立できます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>料金</strong>：初期費用165,000円＋月会費9,900円＋成婚料220,000円（税込・単一プラン）です。<strong>1年で成婚した場合の総額目安は約50.4万円</strong>です。月会費は仲人型の相場より低めです。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>適している方</strong>：流山・柏・野田・松戸エリアで、大手よりも同じ担当者に継続してサポートを受けたい方や、TX沿線で対面相談をご希望の方です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>注意点</strong>：第三者の口コミが少ないため、判断は無料相談での相性確認が中心になります（見極めのポイントは本文で解説しています）。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本ページの料金等は公式サイトの公表情報（2026年7月確認・税込）にもとづきます。最新かつ正確な数値・契約条件は<strong>公式サイトおよび無料相談</strong>で必ずご確認ください。</p>
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
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">流山おおたかの森結婚相談所の強み・特徴</h2>
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">料金プランと総額の目安（税込・2026年7月公式確認）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            プランは1つだけのシンプルな体系です。月会費だけでなく<strong>入会から成婚までの総額</strong>で把握することをおすすめします。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">初期費用（内訳）</td><td className="px-4 py-3">165,000円（入会金38,000＋登録料34,000＋スタートアップ30,000＋サポート63,000）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">月会費</td><td className="px-4 py-3">9,900円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">成婚料</td><td className="px-4 py-3">220,000円（成婚退会時）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">1年活動の総額目安（成婚なし）</td><td className="px-4 py-3">約283,800円（初期165,000＋月9,900×12）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 bg-[#FAF7F2]">1年で成婚した場合の総額目安</td><td className="px-4 py-3 font-medium">約503,800円（上記＋成婚料220,000）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※金額はすべて税込・2026年7月に公式サイトで確認した公表値です。お見合い料の有無など細部の条件は無料相談でご確認ください。仲人型の一般的な相場（初期10〜20万円・月1〜2万円・成婚料20万円前後、<Link href="/knowledge/cost/" className="underline text-[#A08447]">料金相場の解説</Link>参照）と比べると、月会費が低めの構成です。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">口コミが少ない相談所の見極め方</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            当サイトの調査（2026年7月時点）では、流山おおたかの森結婚相談所の<strong>第三者による口コミ・体験談は、Web上でほとんど確認できません</strong>。当サイトでは実在しない口コミを作成・掲載しない方針のため、代わりに口コミが少ない小規模相談所を検討する際の見極めポイントを整理しています。
          </p>
          <ul className="space-y-3 text-sm text-[#2C2C2C]/70">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">1.</span><span><strong>客観的事実を確認する</strong>：IBJ加盟（公式サイトに明記・IBJ公式の加盟店ページも存在）、料金の内訳公開など、検証可能な事実は揃っています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">2.</span><span><strong>無料相談で「具体性」を見る</strong>：ご自身の条件での活動プラン・お見合い成立の見込み・過去の成婚事例を、どこまで具体的に話せるかが力量の判断材料になります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">3.</span><span><strong>契約条件を書面で確認する</strong>：中途退会時の精算・休会制度・成婚の定義（IBJ準拠か）は、必ず書面で確認することをおすすめします。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">4.</span><span><strong>担当者との相性を重視する</strong>：担当が交代しない分、担当者に率直に相談できるかどうかが、大手以上に重要です。</span></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他社と比較して選ぶ</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            千葉・首都圏で仲人型を検討される場合は、大手・中堅とも比較し、料金総額とサポート体制の違いを確認しておくと判断しやすくなります。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/review/musbell/" className="text-[#A08447] underline">ムスベルの評判・料金を見る（全国・複数連盟加盟の仲人型大手）</Link></li>
            <li><Link href="/review/marriage-pro/" className="text-[#A08447] underline">マリッジプロの評判・料金を見る（プロカウンセラー特化）</Link></li>
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較一覧を見る</Link></li>
          </ul>
        </section>

        <FlowGuide name={overview.name} initialFee={overview.initialFee} monthlyFee={overview.monthlyFee} matchingFee={overview.matchingFee} />

              <FeePosition slug="nagareyama-otakanomori" />

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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">判断に役立つ結婚相談所の基礎知識</h2>
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
