import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";
import { FEES, PLAN_FEES, yen } from "@/data/fees";


// 各社の加盟連盟は、各レビューページの実査記録（公式サイト確認）から転記。
// レビュー本文に加盟の明記がない社は「公表を確認できず」とし、推測で補わない。
// プラン別料金を data/fees.ts の PLAN_FEES から「下限〜上限」で表示する（金額を直書きしない）。
function planRange(slug: string, key: "monthly" | "success") {
  const v = PLAN_FEES.filter((p) => p.slug === slug).map((p) => p[key]);
  if (!v.length) throw new Error(`PLAN_FEES に ${slug} がありません`);
  const lo = Math.min(...v);
  const hi = Math.max(...v);
  return lo === hi ? yen(lo) : `${lo.toLocaleString("ja-JP")}円〜${yen(hi)}`;
}
const mpMonthly = (plan: string) => yen(PLAN_FEES.find((p) => p.slug === "marriage-pro" && p.plan === plan)!.monthly);

type Row = {
  slug: string;
  name: string;
  federation: string;
  monthly: string;
  success: string;
};

const ibjRows: Row[] = [
  { slug: "bridal-tulip", name: "Bridalチューリップ", federation: "IBJ・SCRUM・CONNECT-ship（3連盟／紹介可能 約19万名）", monthly: "7,550円〜12,950円", success: "180,000円" },
  { slug: "excellence-aoyama", name: "エクセレンス青山", federation: "IBJ・BIU・TMS・NNR（4連盟／紹介可能 約33万人）", monthly: "7,700円〜", success: "220,000円" },
  { slug: "bellroad", name: "ベルロード縁結びサポート", federation: "IBJ加盟", monthly: "9,800円", success: "80,000円" },
  { slug: "nagareyama-otakanomori", name: "流山おおたかの森結婚相談所", federation: "IBJ加盟", monthly: "9,900円", success: "220,000円" },
  { slug: "code-for-marriage", name: "Code For Marriage", federation: "IBJ正規加盟", monthly: "11,000円〜", success: "220,000円" },
  { slug: "pitto", name: "P!っと縁結び", federation: "IBJ正規加盟", monthly: "11,000円〜16,500円", success: "220,000円" },
  { slug: "wellsma", name: "ウェルスマ", federation: "IBJ正規加盟（IBJ会員110,885名・2026年10月21日公式確認）", monthly: "11,800円〜19,800円", success: "149,800円" },
  { slug: "niko-bridal", name: "nikoブライダル", federation: "IBJ正規加盟（ネットワーク 104,859名）", monthly: "13,200円〜", success: "220,000円" },
  { slug: "hero-marriage", name: "ヒーローマリッジ", federation: "IBJ加盟", monthly: "14,300円〜27,500円", success: "220,000円" },
  { slug: "folli-partner", name: "東京フォリパートナー", federation: "IBJ正規加盟・優良認定加盟店", monthly: "16,500円〜22,000円", success: "250,000円〜300,000円" },
  { slug: "ibj-members", name: "IBJメンバーズ", federation: "株式会社IBJの直営（登録会員 110,420名・2026年7月時点）", monthly: "17,050円", success: "220,000円" },
  { slug: "marriage-pro", name: "マリッジプロ", federation: "IBJ加盟", monthly: `${planRange("marriage-pro", "monthly")}（男性${mpMonthly("男性プラン")}・女性${mpMonthly("女性プラン")}）`, success: planRange("marriage-pro", "success") },
  // 2026-10-27 公式トップ（https://ringbell-marriage.com/）の「IBJ加盟」表記と「IBJ連盟の会員11.1万人からお相手を探せます」で確認
  { slug: "ringbell", name: "リングベル", federation: "IBJ加盟（IBJ連盟の会員11.1万人から検索可・2026年10月27日公式確認）", monthly: planRange("ringbell", "monthly"), success: planRange("ringbell", "success") },
];

const otherRows: Row[] = [
  { slug: "musbell", name: "ムスベル", federation: "JBU・BIU・IBJ・TMSの4連盟を利用可能（公式記載）", monthly: "16,500円〜", success: "330,000円" },
  { slug: "naco-do", name: "naco-do（ナコード）", federation: "JBA・CONNECT-ship・SCRUM（3連盟／19.1万人・2026年10月14日公式確認）", monthly: "16,800円", success: "0円（公式明記）" },
  { slug: "en-konkatsu", name: "エン婚活エージェント", federation: "複数データベース（紹介可能17.4万人以上）・IBJ Online利用可", monthly: "16,500円", success: "0円（公式明記）" },
  { slug: "onet", name: "オーネット", federation: "独自会員システム＋IBJ加盟ネットワークの2系統", monthly: "13,200円〜", success: "IBJ会員と成婚時220,000円（オーネット会員同士は0円）" },
];

const unknownNames = ["ツヴァイ", "サンマリエ", "パートナーエージェント", "スマリッジ", "FIORE（フィオーレ）", "マーズカフェ", "結婚相談所セブン"];

const ibjCount = ibjRows.length;
const otherCount = otherRows.length;
const disclosed = ibjCount + otherCount;

// IBJ系の月会費（各社の下限）の最小・最大を data/fees.ts の FEES から出す
const ibjFees = ibjRows.map((r) => {
  const f = FEES.find((x) => x.slug === r.slug);
  if (!f || f.monthly == null) throw new Error(`FEES に ${r.slug} の月会費がありません`);
  return { name: r.name, monthly: f.monthly };
});
const ibjLo = ibjFees.reduce((a, b) => (b.monthly < a.monthly ? b : a));
const ibjHi = ibjFees.reduce((a, b) => (b.monthly > a.monthly ? b : a));
const ibjMonthlyRange = `${yen(ibjLo.monthly)}〜${yen(ibjHi.monthly)}`;
const ibjMonthlyRatio = (ibjHi.monthly / ibjLo.monthly).toFixed(1);

export const metadata: Metadata = {
  title: "結婚相談所の「連盟」とは？IBJ・BIU・良縁ネットの違いと24社の加盟状況【2026年9月】",
  description:
    `結婚相談所の連盟は、紹介される会員の母数を決める仕組みです。実査24社中${disclosed}社が加盟連盟を公表しており、そのうち${ibjCount}社がIBJ系でした。同じIBJ系でも月会費${ibjMonthlyRange}、成婚料80,000円〜300,000円と開きがあります。連盟だけで選ぶことをおすすめしない理由を解説します。`,
  alternates: { canonical: "/knowledge/renmei/" },
};

const faqs = [
  {
    q: "結婚相談所の「連盟」とは何ですか？",
    a: "複数の結婚相談所が会員情報を共有するためのネットワークのことです。個々の相談所が抱えている会員だけでは出会いの数に限りがあるため、加盟している相談所どうしで会員を紹介し合う仕組みが作られています。代表的なものにIBJ（日本結婚相談所連盟）、BIU（日本ブライダル連盟）、TMS（全国結婚相談事業者連盟）、JBA（日本結婚相談協会）、良縁ネットなどがあります。CONNECT-ship（コネクトシップ）のように、異なる事業者間で会員を相互に紹介できるようにしたプラットフォームもあります。",
  },
  {
    q: "どの連盟に加盟している相談所を選べばよいですか？",
    a: `連盟だけで選ぶのはおすすめしません。当サイトが実査した24社のうち加盟連盟を公表していたのは${disclosed}社で、そのうち${ibjCount}社がIBJ系でした。つまり「IBJ加盟」は差別化要素になりにくく、同じIBJのネットワークを使っていても月会費は${ibjMonthlyRange}、成婚料は80,000円〜300,000円と開きがあります。重視すべきは連盟ではなく、その相談所の料金体系・サポート内容・担当者との相性です。`,
  },
  {
    q: "複数の連盟に加盟している相談所のほうが有利ですか？",
    a: "出会える母数という点では有利になり得ます。当サイトの実査では、エクセレンス青山がIBJ・BIU・TMS・NNRの4連盟（紹介可能 約33万人）、Bridalチューリップが IBJ・SCRUM・CONNECT-ship の3連盟（約19万名）と公表していました。ただし母数が増えても、実際にお見合いが組めるかどうかは、希望条件と担当者のサポート内容によって変わります。また会員数の公表値は連盟ごとに集計時点が異なるため、単純な足し算で比べられる数字ではない点にもご注意ください。",
  },
  {
    q: "連盟をまたいでお見合いはできますか？",
    a: "原則として、同じ連盟に加盟している相談所の会員どうしでお見合いを組みます。連盟が違うと会員情報が共有されないためです。例外として、CONNECT-ship のように複数の事業者間で会員を相互紹介できる仕組みもあります。複数連盟に加盟している相談所であれば、それぞれの連盟の会員に申し込めます。",
  },
  {
    q: "連盟に加盟していない結婚相談所は避けるべきですか？",
    a: "一概には言えません。自社会員だけで十分な規模を持っている大手（オーネットなど）もあり、その場合は独自システムが主な出会いの場になります。確認すべきは「加盟の有無」そのものではなく、『自分が紹介を受けられる会員は何人いるのか』『その数字はいつ時点のものか』です。無料相談で確認することをおすすめします。",
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
  headline: "結婚相談所の「連盟」とは？IBJ・BIU・良縁ネットの違いと24社の加盟状況",
  description:
    "結婚相談所の連盟の仕組みと、当サイトが実査した24社の加盟状況・料金差を整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-09-24",
  dateModified: "2026-10-27",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/renmei/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "連盟の違い", item: "https://mu-su-bi-ba.com/knowledge/renmei/" },
  ],
};

function Table({ rows, caption }: { rows: Row[]; caption: string }) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full min-w-[760px] text-sm border border-[#E5DCCF]">
        <caption className="text-left text-sm font-medium text-[#2C2C2C] mb-2">{caption}</caption>
        <thead>
          <tr className="bg-[#FAF7F2] text-left">
            <th className="px-4 py-3 font-medium text-[#2C2C2C]">相談所</th>
            <th className="px-4 py-3 font-medium text-[#2C2C2C]">公表されていた加盟連盟</th>
            <th className="px-4 py-3 font-medium text-[#2C2C2C]">月会費</th>
            <th className="px-4 py-3 font-medium text-[#2C2C2C]">成婚料</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.slug} className="border-t border-[#E5DCCF] align-top">
              <td className="px-4 py-3 font-medium whitespace-nowrap">
                <Link href={`/review/${r.slug}/`} className="text-[#A08447] underline">{r.name}</Link>
              </td>
              <td className="px-4 py-3 text-[#2C2C2C]/75 text-xs leading-relaxed">{r.federation}</td>
              <td className="px-4 py-3 text-[#2C2C2C]/75 text-xs whitespace-nowrap">{r.monthly}</td>
              <td className="px-4 py-3 text-[#2C2C2C]/75 text-xs whitespace-nowrap">{r.success}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function KnowledgeRenmei() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "連盟の違い" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          結婚相談所の「連盟」とは？IBJ・BIU・良縁ネットの違いと24社の加盟状況
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月27日</p>

        <div className="rounded-2xl overflow-hidden mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/mb-renmei.jpg" alt="結婚相談所のネットワークをイメージした静物" className="w-full h-auto" />
        </div>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />連盟だけで相談所を選ぶことはおすすめしません
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>連盟は<strong>紹介してもらえる会員の母数を決める仕組み</strong>です。相談所どうしが会員情報を共有し、お見合いを組めるようにしています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>当サイトが実査した24社のうち、加盟連盟を公表していたのは<strong>{disclosed}社</strong>で、そのうち<strong>{ibjCount}社がIBJ系</strong>でした。<strong>「IBJ加盟」は加盟連盟を公表している相談所の多くに共通する条件</strong>であり、それだけでは相談所ごとの違いは分かりません。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>同じIBJのネットワークを使っていても、<strong>月会費は{ibjMonthlyRange}（約{ibjMonthlyRatio}倍）、成婚料は80,000円〜300,000円（約3.8倍）</strong>の開きがあります。差がつくのは連盟ではなく<strong>相談所側の料金とサポート</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>複数連盟に加盟していれば母数は増えます（最大は4連盟・紹介可能約33万人）。ただし<strong>会員数の公表値は連盟ごとに集計時点が違う</strong>ため、単純に足し算して比べられる数字ではありません。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本ページの加盟状況・金額は、当サイトが各社公式サイトを実査して各レビューページに記録したものです（確認日は各レビューページに明記）。公式に記載が見つからなかった項目は「確認できず」と表示しています。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">連盟の役割</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              1つの結婚相談所が自社で抱えている会員は、多くても数百人から数千人の規模です。それだけでは、希望条件に合う相手を見つけることは容易ではありません。
              そこで、<strong>複数の相談所が会員情報を持ち寄って共有するネットワーク</strong>が作られています。これが連盟です。
            </p>
            <p>
              規模の小さな相談所に入会した場合でも、その相談所が加盟している連盟の会員全員に対してお見合いを申し込めます。
              そのため、<strong>出会える人数には「その相談所が何人の会員を抱えているか」よりも「どの連盟に加盟しているか」が大きく影響します</strong>。
            </p>
            <div className="border border-[#E5DCCF] rounded-xl p-5">
              <p className="font-medium text-[#2C2C2C] mb-2">主な連盟・プラットフォーム</p>
              <ul className="space-y-1.5">
                <li>・<strong>IBJ（日本結婚相談所連盟）</strong> — 株式会社IBJが運営。当サイトの実査では、加盟連盟を公表していた{disclosed}社のうち{ibjCount}社がIBJ系</li>
                <li>・<strong>BIU（日本ブライダル連盟）</strong> — 仲人型の相談所が多く加盟</li>
                <li>・<strong>TMS（全国結婚相談事業者連盟）</strong> — 良縁ネットと統合</li>
                <li>・<strong>JBA（日本結婚相談協会）</strong></li>
                <li>・<strong>CONNECT-ship（コネクトシップ）</strong> — 連盟ではなく、事業者間で会員を相互紹介できるプラットフォーム</li>
              </ul>
              <p className="text-xs text-[#2C2C2C]/55 mt-3">※ 連盟ごとの会員数は各連盟が公表していますが、集計時点がそろっていないため、当サイトでは横並びの比較表は作成していません。各社が公表している「紹介可能会員数」を下の表にそのまま記載しています。</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">実査24社の加盟状況</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-6">
            当サイトがレビューしている24社について、公式サイトに書かれていた加盟連盟をそのまま記録しました。
            あわせて月会費・成婚料も掲載しています。<strong>同じ連盟を利用していても金額にどの程度の差があるか</strong>を確認いただくためです。
          </p>

          <Table rows={ibjRows} caption={`■ IBJ（日本結婚相談所連盟）系 ${ibjCount}社`} />

          <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-5 mb-8 text-sm leading-relaxed">
            <p className="font-medium text-[#2C2C2C] mb-2">この表から読み取れること</p>
            <ul className="space-y-2 text-[#2C2C2C]/80">
              <li>・<strong>月会費は{yen(ibjLo.monthly)}（{ibjLo.name}）〜{yen(ibjHi.monthly)}（{ibjHi.name}）で約{ibjMonthlyRatio}倍です</strong>。同じネットワークの会員に申し込める点は変わりません。</li>
              <li>・<strong>成婚料は80,000円（ベルロード）〜300,000円（東京フォリパートナー上限）で約3.8倍です</strong>。総額に最も大きく影響する項目です。</li>
              <li>・<strong>会員数を具体的な人数で公表していたのは5社</strong>でした（IBJメンバーズ110,420名・nikoブライダル104,859名・ウェルスマ110,885名（IBJ会員）・リングベル11.1万人（IBJ会員）・Bridalチューリップ約19万名）。多くは「IBJ会員ネットワークを利用」とのみ記載されています。</li>
            </ul>
          </div>

          <Table rows={otherRows} caption={`■ IBJ以外の連盟・プラットフォーム ${otherCount}社`} />

          <p className="text-xs text-[#2C2C2C]/55 mb-8 -mt-2">
            ※ オーネットは自社の独自会員システムを主軸としつつ、IBJ加盟のネットワーク経由でも成婚に至った事例が確認できたため、こちらの表に入れています。
            IBJのネットワークを使うと明記していた相談所は、上の表の{ibjCount}社とオーネットを合わせて{ibjCount + 1}社です。
          </p>

          <div className="border border-[#E5DCCF] rounded-xl p-5 text-sm leading-relaxed">
            <p className="font-medium text-[#2C2C2C] mb-2">加盟連盟を公式サイトで確認できなかった{unknownNames.length}社</p>
            <p className="text-[#2C2C2C]/75">{unknownNames.join("／")}</p>
            <p className="text-xs text-[#2C2C2C]/55 mt-2">
              「確認できず」は加盟していないことを意味するものではなく、公式サイト上で記載を確認できなかったことを示しています。
              自社会員のみで運営している場合もあるため、無料相談で紹介を受けられる会員数を直接ご確認ください。
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">複数連盟に加盟している相談所</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              実査した中で、複数の連盟への加盟を明記していたのは次の4社でした。母数を広げたい場合の選択肢になります。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-[#E5DCCF] rounded-xl p-5">
                <p className="font-medium text-[#2C2C2C] mb-1">エクセレンス青山</p>
                <p className="text-xs">IBJ・BIU・TMS・NNR の<strong>4連盟</strong>／紹介可能 約33万人</p>
              </div>
              <div className="border border-[#E5DCCF] rounded-xl p-5">
                <p className="font-medium text-[#2C2C2C] mb-1">Bridalチューリップ</p>
                <p className="text-xs">IBJ・SCRUM・CONNECT-ship の<strong>3連盟</strong>／約19万名（IBJ約10.5万＋他）</p>
              </div>
              <div className="border border-[#E5DCCF] rounded-xl p-5">
                <p className="font-medium text-[#2C2C2C] mb-1">naco-do（ナコード）</p>
                <p className="text-xs">JBA・CONNECT-ship・SCRUMの<strong>3連盟</strong>／19.1万人（2026年10月21日公式確認）</p>
              </div>
              <div className="border border-[#E5DCCF] rounded-xl p-5">
                <p className="font-medium text-[#2C2C2C] mb-1">ムスベル</p>
                <p className="text-xs">JBU・BIU・IBJ・TMSの<strong>4連盟</strong>／94,763人（公式掲載の2024年10月時点の値・2026年10月23日確認）</p>
              </div>
            </div>
            <p className="text-xs text-[#2C2C2C]/55">
              ※ 各社が公表している人数をそのまま記載しています。集計時点が社ごと・連盟ごとに異なるため、この数字どうしを直接比べることはできません。
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">無料相談で確認したい3つの質問</h2>
          <ol className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">1.</span><span><strong>紹介を受けられる会員は何人で、それはいつ時点の数字ですか</strong>：「業界最大級」といった表現ではなく、人数と時点での回答を求めることをおすすめします。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">2.</span><span><strong>そのうち、私の希望条件に合うのは何人ですか</strong>：母数ではなく、実際に申し込める相手の数が重要です。その場で検索して見せてくれる相談所もあります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">3.</span><span><strong>1か月に何人まで申し込めますか</strong>：連盟の会員数が多くても、申し込み数に上限があると実際の出会いは増えません。</span></li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/compare/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">料金比較（24社・確認日記載）</Link>
            <Link href="/compare/cheap/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">1年総額の安い順ランキング</Link>
            <Link href="/knowledge/seikon-ritsu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">成婚率の読み方（24社実査）</Link>
            <Link href="/knowledge/kaiyaku/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">解約・返金のルール</Link>
            <Link href="/knowledge/how-to-choose/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">タイプ別の選び方</Link>
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
