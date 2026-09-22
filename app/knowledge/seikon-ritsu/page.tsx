import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "結婚相談所の成婚率は比較できない｜24社の公式表記を実査して分かったこと",
  description:
    "当サイトが実査した結婚相談所24社のうち、成婚率の数値を公表しているのは9社だけ。しかも27%〜86.1%と幅があり、分母も「総退会者数」「全会員数」「上位コース限定」などバラバラでした。各社の公式表記と算出定義を確認日つきで一覧化し、成婚率の正しい読み方と入会前の確認手順をまとめます。",
  alternates: { canonical: "/knowledge/seikon-ritsu/" },
};

// 当サイトが各社公式サイトを実査して記録した成婚率の表記。数値・定義は各レビューページと必ず一致させること。
const rows = [
  { slug: "wellsma", name: "ウェルスマ", value: "86.1%", scope: "「1年以内成婚率」として公称", surveyed: "2026年7月31日", type: "公表" },
  { slug: "excellence-aoyama", name: "エクセレンス青山", value: "85.7%", scope: "自社公称。2019年実績として掲載", surveyed: "2026年7月31日", type: "公表" },
  { slug: "folli-partner", name: "東京フォリパートナー", value: "71.5%", scope: "直近1年(2025年7月〜2026年7月)の成婚退会者 ÷ 全退会者(相談所以外での成婚を除く)", surveyed: "2026年7月31日", type: "公表" },
  { slug: "bridal-tulip", name: "ブライダルチューリップ", value: "60%以上", scope: "自社公称(算出の定義は公式ページに記載)", surveyed: "2026年7月", type: "公表" },
  { slug: "niko-bridal", name: "nikoブライダル", value: "56.3%", scope: "2025年1〜12月の成婚退会人数 ÷ 全退会人数", surveyed: "2026年7月7日", type: "公表" },
  { slug: "fiore", name: "FIORE(フィオーレ)", value: "52.8%", scope: "自社発表", surveyed: "2026年5月", type: "公表" },
  { slug: "naco-do", name: "naco-do(ナコード)", value: "41.3%", scope: "自社発表", surveyed: "2026年7月5日", type: "公表" },
  { slug: "en-konkatsu", name: "エン婚活エージェント", value: "30%以上", scope: "「6ヶ月以上活動した会員のうち30%以上が成婚」という活動期間つきの表現。率そのものは非公開", surveyed: "2026年7月5日", type: "条件つき" },
  { slug: "partner-agent", name: "パートナーエージェント", value: "27%", scope: "2022年10月〜2023年3月のコンシェルジュコース・エグゼクティブコースにおける成婚退会者数 ÷ 総退会者数(公式注記・2026年9月22日再確認)", surveyed: "2026年9月6日", type: "公表" },
  { slug: "ibj-members", name: "IBJメンバーズ", value: "成婚退会者の割合 1/2以上", scope: "％ではなく「割合」として公称", surveyed: "2026年1月", type: "条件つき" },
  { slug: "bellroad", name: "ベルロード縁結びサポート", value: "非公表", scope: "％数値なし。「成婚期間平均7ヶ月」「99%がお見合い実施」を公称。成婚の定義は『互いに結婚する意思を持つこと(プロポーズの受諾)』とFAQに明記", surveyed: "2026年8月6日", type: "非公表" },
  { slug: "pitto", name: "P!っと縁結び", value: "非公表", scope: "成婚の定義は「婚約またはそれと同等の状態」と明記", surveyed: "2026年8月6日", type: "非公表" },
  { slug: "code-for-marriage", name: "Code For Marriage", value: "非公表", scope: "IBJの成婚定義に準拠", surveyed: "2026年8月17日", type: "非公表" },
  { slug: "nagareyama-otakanomori", name: "流山おおたかの森の相談所", value: "非公表", scope: "IBJの成婚定義に準拠", surveyed: "2026年7月", type: "非公表" },
  { slug: "marriage-pro", name: "マリッジプロ", value: "非公表", scope: "公式サイトに数値の記載を確認できず", surveyed: "2026年8月17日", type: "非公表" },
  { slug: "hero-marriage", name: "ヒーローマリッジ", value: "非公表", scope: "公式サイトに数値の記載を確認できず", surveyed: "2026年7月", type: "非公表" },
  { slug: "onet", name: "オーネット", value: "非公表", scope: "公式サイトに数値の記載を確認できず", surveyed: "2026年9月5日", type: "非公表" },
  { slug: "zwei", name: "ツヴァイ", value: "非公表", scope: "公式サイトに数値の記載を確認できず", surveyed: "2026年9月5日", type: "非公表" },
  { slug: "sunmarie", name: "サンマリエ", value: "非公表", scope: "公式サイトに数値の記載を確認できず", surveyed: "2026年9月6日", type: "非公表" },
  { slug: "musbell", name: "ムスベル", value: "非公表", scope: "公式サイトに数値の記載を確認できず", surveyed: "2026年6月", type: "非公表" },
  { slug: "ringbell", name: "リングベル", value: "非公表", scope: "公式サイトに数値の記載を確認できず", surveyed: "2026年6月", type: "非公表" },
  { slug: "smartread", name: "スマリッジ", value: "非公表", scope: "公式サイトに数値の記載を確認できず", surveyed: "2026年5月", type: "非公表" },
  { slug: "mars-cafe", name: "マーズカフェ", value: "非公表", scope: "公式サイトに数値の記載を確認できず", surveyed: "2026年5月", type: "非公表" },
  { slug: "seven", name: "結婚相談所セブン", value: "非公表", scope: "公式サイトに数値の記載を確認できず", surveyed: "2026年5月", type: "非公表" },
];

const faqs = [
  {
    q: "結婚相談所の成婚率はどれくらいが普通ですか？",
    a: "「普通」と言える基準はありません。当サイトが実査した24社では、数値を公表していたのは9社だけで、27%〜86.1%と3倍以上の開きがありました。ただしこの数字は横並びで比べられるものではなく、分母(総退会者数か、全会員数か、特定コースの退会者数か)と対象期間が各社で異なります。数字の大小ではなく、算出の定義まで見て判断してください。",
  },
  {
    q: "成婚率の「からくり」とは何ですか？",
    a: "多くの相談所で「成婚」は入籍ではなく『婚約(プロポーズの受諾)して退会すること』を指します。つまり成婚率は「結婚できた率」ではなく「婚約して卒業した率」です。加えて、分母が『総退会者数』だと途中でやめた人が多いほど率は下がり、対象を上位コースに限定すれば率は上がります。当サイトの実査でも、パートナーエージェントの公式注記は『2022年10月〜2023年3月のコンシェルジュコース・エグゼクティブコースにおける成婚退会者数÷総退会者数』でした(2026年9月22日確認)。数字だけでなく、この注記を読むことが重要です。",
  },
  {
    q: "成婚率を公表していない相談所は避けたほうがいいですか？",
    a: "いいえ、そうとは限りません。当サイトの実査では、オーネット・ツヴァイ・サンマリエといった大手を含む15社が数値を公表していませんでした。定義が統一されていない指標を出さない判断は、むしろ誠実な姿勢とも言えます。逆に、成婚の定義(婚約なのか入籍なのか)をFAQで明示している相談所は、公表の有無にかかわらず情報開示の姿勢が確認できます。",
  },
  {
    q: "入会前に成婚率について何を確認すればいいですか？",
    a: "①成婚の定義(婚約か、入籍か、真剣交際の開始か) ②分母(総退会者数か、全会員数か、特定コースか) ③対象期間(いつからいつまでの実績か) ④自分が入るコースが対象に含まれるか——の4点です。無料相談でこの4つを質問し、答えられない、または資料に注記がない場合は、その数字を判断材料にしないのが安全です。",
  },
  {
    q: "成婚率以外に何を見て選べばいいですか？",
    a: "料金の総額(入会金・月会費・お見合い料・成婚料の合計)、会員層が自分の希望と合うか、サポート範囲、退会・休会の条件です。当サイトでは各社の料金を確認日つきで一覧化しているほか、Googleマップの実測データをもとに地域ごとの相談所も掲載しています。複数社の無料相談で比べるのが確実です。",
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
  headline: "結婚相談所の成婚率は比較できない｜24社の公式表記を実査して分かったこと",
  description:
    "結婚相談所24社の成婚率の公式表記と算出定義を確認日つきで一覧化。数値を公表しているのは9社だけで、分母も対象期間もバラバラでした。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-09-22",
  dateModified: "2026-09-22",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/seikon-ritsu/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "成婚率の読み方", item: "https://mu-su-bi-ba.com/knowledge/seikon-ritsu/" },
  ],
};

const published = rows.filter((r) => r.type === "公表").length;
const conditional = rows.filter((r) => r.type === "条件つき").length;
const undisclosed = rows.filter((r) => r.type === "非公表").length;

export default function KnowledgeSeikonRitsu() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "成婚率の読み方" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          結婚相談所の成婚率は比較できない｜24社の公式表記を実査して分かったこと
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年9月22日</p>

        <div className="rounded-2xl overflow-hidden mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/mb-seikon.jpg" alt="成婚（結婚指輪とブーケ）のイメージ" className="w-full h-auto" />
        </div>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />結論：24社を実査した結果
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>当サイトがレビューした<strong>24社のうち、成婚率の数値を公表していたのは{published}社だけ</strong>。{conditional}社は条件つきの表現、残り<strong>{undisclosed}社は非公表</strong>でした。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>公表値は<strong>27%〜86.1%と3倍以上の開き</strong>。しかし<strong>分母も対象期間もバラバラ</strong>で、そのまま比べられる数字ではありません。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>多くの相談所で「成婚」は<strong>入籍ではなく婚約して退会すること</strong>。成婚率は「結婚できた率」ではなく「婚約して卒業した率」です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>見るべきは数字ではなく<strong>注記</strong>。①定義 ②分母 ③対象期間 ④自分のコースが対象か——の4点を無料相談で確認しましょう。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本ページの数値は、当サイトが各社の公式サイトを実査して記録したものです(確認日は表に明記)。掲載内容は変わることがあるため、申し込み前に必ず公式サイト・無料相談でご確認ください。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">24社の成婚率 公式表記一覧（確認日つき）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            当サイトがレビューしている24社について、公式サイトに記載されていた成婚率の表記と、そこに添えられていた算出の定義をそのまま記録しました。
            <strong>数値がなかった場合は「非公表」と書いています</strong>（推定値や他サイトの数字で埋めることはしていません）。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden min-w-[720px]">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">相談所</th>
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C] whitespace-nowrap">公式の表記</th>
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">算出の定義・注記</th>
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C] whitespace-nowrap">当サイト確認日</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.slug} className="border-t border-gray-50 align-top">
                    <td className="px-4 py-3 font-medium whitespace-nowrap">
                      <Link href={`/review/${r.slug}/`} className="text-[#A08447] underline">{r.name}</Link>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap font-medium text-[#2C2C2C]">{r.value}</td>
                    <td className="px-4 py-3 text-xs text-[#2C2C2C]/70 leading-relaxed">{r.scope}</td>
                    <td className="px-4 py-3 text-xs text-[#2C2C2C]/50 whitespace-nowrap">{r.surveyed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※数値はいずれも各社の自社公称値です。第三者による検証を経た数字ではありません。確認日以降に各社が表記を変更している可能性があります。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">なぜ横並びで比べられないのか（実例）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-6">
            同じ「成婚率」という言葉でも、中身が違います。実査で定義まで確認できた3社を並べると、違いがはっきりします。
          </p>
          <div className="space-y-4">
            <div className="border border-[#E5DCCF] rounded-xl p-5">
              <h3 className="font-medium text-[#A08447] mb-2 tracking-wider">パートナーエージェント 27%</h3>
              <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">
                公式の注記は「<strong>2022年10月〜2023年3月</strong>のコンシェルジュコースとエグゼクティブコースにおける<strong>成婚退会者数 ÷ 総退会者数</strong>」（2026年9月22日に公式サイトで再確認）。
                対象期間が限定されており、<strong>全コースではなく上位2コースのみ</strong>が対象です。数字の低さ＝実力が低い、という意味ではなく、分母の取り方が厳しめであることの表れとも読めます。
              </p>
            </div>
            <div className="border border-[#E5DCCF] rounded-xl p-5">
              <h3 className="font-medium text-[#A08447] mb-2 tracking-wider">東京フォリパートナー 71.5%</h3>
              <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">
                「直近1年（2025年7月〜2026年7月）の<strong>成婚退会者 ÷ 全退会者</strong>、ただし<strong>相談所以外での成婚を除く</strong>」と定義が明示されています。分母の考え方はパートナーエージェントと近い一方、対象期間が新しく、コース限定もありません。
              </p>
            </div>
            <div className="border border-[#E5DCCF] rounded-xl p-5">
              <h3 className="font-medium text-[#A08447] mb-2 tracking-wider">ウェルスマ 86.1%（1年以内成婚率）</h3>
              <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">
                こちらは「<strong>1年以内</strong>成婚率」という別の指標です。活動期間で区切った数字なので、退会者ベースの成婚率とは分母がそもそも違います。
                エン婚活エージェントの「6ヶ月以上活動した会員のうち30%以上が成婚」も同じく<strong>活動期間つき</strong>の表現で、退会者ベースの数字と直接は比較できません。
              </p>
            </div>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">
            ※このように、分母（総退会者数／全会員数／特定コース）・対象期間・対象者の条件が各社で異なります。「A社70%、B社27%だからA社のほうが良い」とは言えません。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">そもそも「成婚」とは何を指すのか</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            実査の中で、成婚の定義を公式に明記している相談所がありました。たとえばベルロード縁結びサポートはFAQで「<strong>互いに結婚する意思を持つこと（プロポーズの受諾）</strong>」、P!っと縁結びは「<strong>婚約またはそれと同等の状態</strong>」と定めています（いずれも2026年8月6日確認）。
          </p>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            つまり<strong>入籍は成婚の条件に含まれていない</strong>のが一般的です。ここが「成婚率＝結婚できる確率」と誤解されやすい最大のポイントで、成婚後に破局した場合の扱いは数字に反映されません。
          </p>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
            また、IBJ加盟の相談所（Code For Marriageや流山おおたかの森の相談所など）は<strong>連盟の成婚定義に準拠</strong>しており、個社の独自定義ではありません。加盟連盟を確認すると、定義の背景が見えることがあります。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">入会前に確認したい4つの質問</h2>
          <div className="space-y-4">
            {[
              { n: 1, q: "御社の「成婚」はどの時点を指しますか？", why: "婚約か、真剣交際の開始か、入籍か。ここが違えば数字の意味が変わります。" },
              { n: 2, q: "その成婚率の分母は何ですか？", why: "総退会者数／全会員数／特定コースの退会者数。分母が変われば率は大きく動きます。" },
              { n: 3, q: "いつからいつまでの実績ですか？", why: "数年前の実績がそのまま掲載されている例もあります。最新の実績かを確認しましょう。" },
              { n: 4, q: "私が入るコースはその集計に含まれますか？", why: "上位コース限定の数字であれば、自分が入るコースの実績とは限りません。" },
            ].map((item) => (
              <div key={item.n} className="flex gap-4 items-start border border-[#E5DCCF] rounded-xl p-5">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#A08447] text-white flex items-center justify-center text-sm">{item.n}</span>
                <div>
                  <h3 className="font-medium text-[#2C2C2C] mb-1">「{item.q}」</h3>
                  <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">{item.why}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mt-6">
            この4つに明快に答えられる相談所は、少なくとも自社の実績を正しく把握しています。逆に、資料にも公式サイトにも注記がなく、質問にも答えが曖昧な場合は、その数字を判断材料にしないのが安全です。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">成婚率より先に見るべきもの</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            比較可能性という意味では、成婚率よりも<strong>料金の総額</strong>のほうがはるかに確実な判断材料です。入会金・月会費・お見合い料・成婚料の合計は、各社の公式表記から同じ条件で積み上げられます。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/compare/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">料金比較（確認日つき）を見る</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">料金相場・総額の目安</Link>
            <Link href="/knowledge/how-to-choose/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">タイプ別の選び方</Link>
            <Link href="/knowledge/flow/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">入会から成婚までの流れ</Link>
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
