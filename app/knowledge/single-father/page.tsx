import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 数値・条文はすべて一次情報から転記（2026-11-16 確認）。
// ・父子世帯の統計：厚生労働省「令和3年度 全国ひとり親世帯等調査結果の概要」（令和4年12月26日公表・推計値）。
//   原ページは国立国会図書館WARPに保存（こども家庭庁「全国ひとり親世帯等調査」ページからリンク）。次回調査は令和8年11月1日実施予定。
// ・児童扶養手当の額・受給者数：こども家庭庁「児童扶養手当制度の概要」（令和8年4月8日更新の資料）
// ・支給しない場合・事実婚の扱い：児童扶養手当法 第3条第3項・第4条第2項（e-Gov法令検索）
// ・養子縁組・子の氏・親権：民法 第791条・第798条・第810条・第818条（e-Gov法令検索）

const SURVEY_URL = "https://www.cfa.go.jp/policies/hitori-oya/reserch_single-parent_households";
const SURVEY_PDF = "https://warp.da.ndl.go.jp/20230423/20230404180946/http://www.mhlw.go.jp/content/11920000/001027754.pdf";
const CFA_TEATE_URL = "https://www.cfa.go.jp/policies/hitori-oya/fuyou-teate/";
const TEATE_LAW_URL = "https://laws.e-gov.go.jp/law/336AC0000000238";
const MINPO_URL = "https://laws.e-gov.go.jp/law/129AC0000000089";

const stats = [
  { item: "推計世帯数", f: "14.9万世帯", m: "119.5万世帯" },
  { item: "ひとり親になった理由：死別", f: "21.3%", m: "5.3%" },
  { item: "ひとり親になった理由：生別（離婚など）", f: "77.2%", m: "93.5%" },
  { item: "調査時点の親の平均年齢", f: "46.6歳", m: "41.9歳" },
  { item: "調査時点の末子の平均年齢", f: "13.0歳", m: "11.2歳" },
  { item: "親と同居している世帯", f: "34.3%", m: "24.2%" },
  { item: "親自身の平均年間収入（2020年）", f: "518万円", m: "272万円" },
  { item: "養育費の取り決めをしている（離婚の場合）", f: "28.3%", m: "46.7%" },
];

export const metadata: Metadata = {
  title: "シングルファザーの再婚｜父子世帯14.9万世帯の統計と、児童扶養手当・連れ子養子・子の氏のルール",
  description:
    "父子世帯は全国で推計14.9万世帯、父の平均年齢は46.6歳、末子の平均年齢は13.0歳です（厚生労働省 令和3年度全国ひとり親世帯等調査）。再婚（事実婚を含む）で児童扶養手当が支給されなくなる条文、再婚相手と子の養子縁組、子の氏と親権のルールを一次情報にもとづいて整理しています。",
  alternates: { canonical: "/knowledge/single-father/" },
};

const faqs = [
  {
    q: "シングルファザーが再婚すると、児童扶養手当はどうなりますか？",
    a: "児童扶養手当法第4条第2項第6号により、子どもが「父の配偶者」に養育されているときは、その子についての手当は支給されません。同法第3条第3項で、ここでいう「配偶者」には婚姻届を出していない事実婚の相手も含まれます。再婚や事実婚の状態になったときは、お住まいの市区町村の窓口に届け出てください。",
  },
  {
    q: "再婚相手に子どもと養子縁組をしてもらうには、家庭裁判所の許可が必要ですか？",
    a: "不要です。民法第798条は未成年者を養子とする場合に家庭裁判所の許可を求めていますが、「自己又は配偶者の直系卑属を養子とする場合は、この限りでない」と定めています。再婚相手から見て、あなたの子は「配偶者の直系卑属」にあたります。届出は市区町村の戸籍窓口で行います。",
  },
  {
    q: "養子縁組をしないと、子どもの氏（名字）はどうなりますか？",
    a: "養子縁組をすると、子は養親の氏を称します（民法第810条）。縁組をせずに父と子の氏が異なることになった場合、子が父の氏を称するには、原則として家庭裁判所の許可を得て届け出ます（民法第791条第1項）。子が15歳未満のときは法定代理人が手続きを行います（同条第3項）。",
  },
  {
    q: "子連れでも結婚相談所に入会できますか？",
    a: "入会できる相談所があります。当サイトの実査では、パートナーエージェントが「再婚の方も入会できます」と記載し（2026年10月24日公式確認）、東京フォリパートナーが婚歴のある方向けの「リスタート」コースを設けていました（2026年10月25日公式確認）。子どもの有無をプロフィールにどう載せるかは相談所によって異なるため、無料相談でご確認ください。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "シングルファザーの再婚｜父子世帯の統計と再婚時の手続き",
  description: "父子世帯の統計（令和3年度全国ひとり親世帯等調査）、再婚で児童扶養手当が支給されなくなる条文、連れ子養子・子の氏・親権のルールを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/single-father/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "シングルファザーの再婚", item: "https://mu-su-bi-ba.com/knowledge/single-father/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";

export default function KnowledgeSingleFather() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "シングルファザーの再婚" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          シングルファザーの再婚｜父子世帯の統計と、再婚前に確認したい手当・養子縁組・子の氏のルール
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月16日（統計・制度・条文は同日に厚生労働省・こども家庭庁・e-Gov法令検索で確認。相談所の情報は各行に公式確認日を併記）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />結論：再婚の前に「手当」「養子縁組」「子の氏」の3点を確認しておくと手続きで迷いません
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>父子世帯は全国で<strong>推計14.9万世帯</strong>。父の平均年齢は46.6歳、末子の平均年齢は13.0歳です（厚生労働省 令和3年度調査）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>子どもが<strong>父の配偶者（事実婚の相手を含む）に養育されると、児童扶養手当は支給されません</strong>（児童扶養手当法第4条第2項第6号・第3条第3項）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>再婚相手が子と養子縁組をする場合、<strong>未成年でも家庭裁判所の許可は不要</strong>です（民法第798条ただし書）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>縁組をすると子は養親の氏を称します（民法第810条）。縁組をしない場合の氏の変更は、原則として家庭裁判所の許可が必要です（民法第791条）。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">父子世帯の現状（令和3年度 全国ひとり親世帯等調査）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              厚生労働省が2021年11月1日時点で実施した調査の推計値です。比較のため母子世帯の値を並べています。父子世帯はひとり親世帯（母子世帯と父子世帯の合計134.4万世帯）の約11%にあたります（当サイトによる計算）。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>父子世帯</th><th className={th}>（参考）母子世帯</th></tr></thead>
                <tbody>
                  {stats.map((r) => (
                    <tr key={r.item} className="border-t border-[#E5DCCF]"><td className={td}>{r.item}</td><td className={td}>{r.f}</td><td className={td}>{r.m}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              父子世帯は母子世帯に比べて、ひとり親になった理由に占める死別の割合が高く（21.3%）、親・子ともに年齢が高い傾向があります。末子の平均年齢が13.0歳であることから、再婚を考える時点で子どもが中学生以上の家庭も少なくないと考えられます。養子縁組では、子が15歳未満のときは法定代理人が子に代わって縁組の承諾をすると定められています（民法第797条第1項）。15歳以上の子は、本人が縁組の承諾をすることになります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SURVEY_PDF} target="_blank" rel="noopener noreferrer" className="underline">厚生労働省「令和3年度 全国ひとり親世帯等調査結果の概要」</a>（2022年12月26日公表。国立国会図書館インターネット資料収集保存事業で保存された原資料。<a href={SURVEY_URL} target="_blank" rel="noopener noreferrer" className="underline">こども家庭庁の調査ページ</a>からリンク）。2026年11月16日確認。令和3年度の結果は推計値です。次回調査は2026年11月1日に実施予定とされています。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">再婚と児童扶養手当</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              児童扶養手当は、2010年8月から父子家庭の父も支給対象となっています（こども家庭庁）。2025年3月時点の受給者777,962人のうち、父は35,915人です。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>手当月額（2026年4月〜・見込額）</td><td className={td}>全部支給 48,050円／一部支給 48,040円〜11,340円。児童2人目以降は1人につき全部支給 11,350円／一部支給 11,340円〜5,680円を加算</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>所得制限限度額（収入ベース・2人世帯）</td><td className={td}>全部支給 190万円／一部支給 385万円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>父に支給されない場合（再婚に関係するもの）</td><td className={td}>児童が「父の配偶者」に養育されているとき（第4条第2項第6号）。「母と生計を同じくしているとき」も支給されません（同第5号）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>事実婚の扱い</td><td className={td}>この法律の「配偶者」には、婚姻の届出をしていないが事実上婚姻関係と同様の事情にある者を含む（第3条第3項）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              婚姻届を出す前でも、交際相手と同居して事実婚と同様の状態になれば、支給の対象外となる可能性があります。個別の判断は市区町村が行いますので、同居や再婚を予定している段階で窓口にご相談ください。ひとり親家庭向けの医療費助成など、自治体独自の制度にも同様の要件が設けられていることがあります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CFA_TEATE_URL} target="_blank" rel="noopener noreferrer" className="underline">こども家庭庁「児童扶養手当について」・同「児童扶養手当制度の概要」（2026年4月8日更新の資料）</a>、<a href={TEATE_LAW_URL} target="_blank" rel="noopener noreferrer" className="underline">児童扶養手当法（e-Gov法令検索）</a>（いずれも2026年11月16日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">再婚相手と子の養子縁組・子の氏・親権</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>民法の定め</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>家庭裁判所の許可</td><td className={td}>未成年者を養子とするには許可が必要。ただし「自己又は配偶者の直系卑属を養子とする場合は、この限りでない」（第798条）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>縁組後の子の氏</td><td className={td}>養子は養親の氏を称する（第810条）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>縁組をしない場合の子の氏</td><td className={td}>子が父又は母と氏を異にする場合、家庭裁判所の許可を得て届け出ることで父又は母の氏を称することができる（第791条第1項）。15歳未満は法定代理人が代わって行う（同条第3項）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>縁組後の親権者</td><td className={td}>子が養子であるときは、養親と、養親の配偶者である子の父母が親権者となる（第818条第3項）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              養子縁組をするかどうかは、子どもの氏や親権だけでなく、扶養義務や相続にも関わります。縁組をすると再婚相手と子の間に法律上の親子関係が生じ、互いに扶養義務を負います（民法第877条第1項は直系血族の扶養義務を定めています）。死別による父子家庭の方は、遺族年金の扱いも合わせて<Link href="/knowledge/shibetsu-saikon/" className="text-[#A08447] underline">死別後の再婚で確認したい手続き</Link>でご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MINPO_URL} target="_blank" rel="noopener noreferrer" className="underline">民法（e-Gov法令検索）</a> 第791条・第797条・第798条・第810条・第818条・第877条（2026年11月16日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">子連れで利用できる結婚相談所の例</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>当サイトがレビューしている24社の公式サイトで確認できた、婚歴のある方に関する記載の例です。</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>相談所</th><th className={th}>確認できた内容</th><th className={th}>確認日</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/review/folli-partner/" className="text-[#A08447] underline">東京フォリパートナー</Link></td><td className={td}>公式FAQで婚歴のある方の入会可を明記。再婚向けの「リスタート」コースあり</td><td className={td}>2026年10月25日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/review/partner-agent/" className="text-[#A08447] underline">パートナーエージェント</Link></td><td className={td}>入会条件の説明で「再婚の方も入会できます」と記載（独身証明書が必要）</td><td className={td}>2026年10月24日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/review/bellroad/" className="text-[#A08447] underline">ベルロード縁結びサポート</Link></td><td className={td}>公式サイトに「再婚希望の方へ」のページあり</td><td className={td}>2026年11月11日</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              当サイトの相談所データベースには、ひとり親向けを掲げる相談所（例：<Link href="/agency/AddOne-Marriage-自衛官-ひとり親に強い結婚相談所-b309/" className="text-[#A08447] underline">AddOne Marriage</Link>）も掲載しています。再婚全般の統計や再婚禁止期間の廃止については<Link href="/knowledge/saikon/" className="text-[#A08447] underline">離婚後の再婚</Link>のページでまとめています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※記載のない相談所が子連れの方を受け入れていないことを示すものではありません。料金・条件は変わることがあるため、各社の公式サイトと無料相談でご確認ください。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/saikon/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">離婚後の再婚</Link>
            <Link href="/knowledge/shibetsu-saikon/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">死別後の再婚</Link>
            <Link href="/knowledge/50s/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">50代の婚活の現状</Link>
            <Link href="/knowledge/how-to-choose/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">タイプ別の選び方</Link>
            <Link href="/compare/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">24社の料金比較</Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="border border-[#E5DCCF] rounded-xl">
                <summary className="cursor-pointer px-5 py-4 text-sm font-medium text-[#2C2C2C]">{f.q}</summary>
                <p className="px-5 pb-5 text-sm text-[#2C2C2C]/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <AuthorBox />
      </article>
    </>
  );
}
