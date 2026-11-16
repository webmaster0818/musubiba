import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "結婚相談所の基礎知識｜料金相場・選び方・活動の流れ【2026年】| ムスビバ",
  description:
    "結婚相談所の料金相場、仲人型とデータマッチング型の選び方、入会から成婚までの流れを分かりやすく解説しています。はじめて婚活をされる方が押さえておきたい基礎知識をまとめました。各社の詳しい料金・評判は個別レビューでご確認いただけます。",
  alternates: { canonical: "/knowledge/" },
};

const KNOWLEDGE_IMG: Record<string, string> = {
  "/knowledge/cost/": "/mb-cost.jpg",
  "/knowledge/how-to-choose/": "/mb-choose.jpg",
  "/knowledge/seikon-ritsu/": "/mb-seikon.jpg",
  "/knowledge/kaiyaku/": "/mb-kaiyaku.jpg",
  "/knowledge/renmei/": "/mb-renmei.jpg",
  "/knowledge/flow/": "/mb-flow.jpg",
}

const articles = [
  {
    href: "/knowledge/cost/",
    title: "結婚相談所の料金相場は？初期費用・月会費・成婚料の目安【2026年】",
    desc: "初期費用・月会費・成婚料の一般的な相場の範囲を整理しています。総額の考え方と、費用を抑えるポイントを解説します。",
  },
  {
    href: "/knowledge/how-to-choose/",
    title: "結婚相談所の選び方｜仲人型とデータマッチング型の違いと比較のポイント",
    desc: "仲人型・データマッチング型・ハイブリッド型の違いと、自分に合うタイプの見極め方を分かりやすく解説します。",
  },
  {
    href: "/knowledge/seikon-ritsu/",
    title: "結婚相談所の成婚率は比較できない｜24社の公式表記を実査して分かったこと",
    desc: "24社のうち成婚率の数値を公表しているのは13社です。分母や対象期間が各社で異なる成婚率の読み方と、入会前に確認したい4つの質問を、実査データにもとづいてまとめました。",
  },
  {
    href: "/knowledge/kaiyaku/",
    title: "結婚相談所の解約・返金は法律で上限が決まっている｜24社の公表実態",
    desc: "中途解約の違約金は提供開始前3万円、開始後は2万円か契約残額の20%の低いほうが法定の上限です。24社のうち、解約・休会の条件を公式サイトに記載していたのは23社でした。",
  },
  {
    href: "/knowledge/renmei/",
    title: "結婚相談所の「連盟」とは？IBJ・BIU・良縁ネットの違いと24社の加盟状況",
    desc: "連盟は、紹介を受けられる会員の母数を決める仕組みです。実査24社のうち13社がIBJ系で、同じネットワークでも月会費は約2.3倍、成婚料は約3.8倍の開きがありました。",
  },
  {
    href: "/knowledge/flow/",
    title: "結婚相談所の入会から成婚までの流れ・活動期間の目安",
    desc: "無料相談から入会、お見合い、交際、成婚退会までの一般的なステップと、活動期間の目安を紹介します。",
  },
  {
    href: "/knowledge/tekireiki/",
    title: "結婚適齢期は何歳？平均初婚年齢と年齢別の初婚率・未婚率【2024年統計】",
    desc: "2024年の平均初婚年齢は夫31.1歳・妻29.8歳です。人口動態統計と国勢調査から、年齢別の初婚率・未婚率の推移と、年齢で条件が変わる相談所の例を整理しました。",
  },
  {
    href: "/knowledge/50s/",
    title: "50代の婚活の現状｜独身割合の統計と結婚相談所の年代別データ",
    desc: "50〜54歳で配偶者がいない人は男性34.4%・女性29.9%です（2020年国勢調査）。相談所が公表している50代の成婚率や成婚者の声の年代内訳もまとめました。",
  },
  {
    href: "/knowledge/senior/",
    title: "シニア婚活（60代・70代）の基礎知識｜配偶者のいない人の割合と相続・遺族年金のルール",
    desc: "60代・70代の配偶関係の内訳と、再婚前に確認したい相続（民法）・遺族年金（日本年金機構）のルールを一次情報で整理しています。",
  },
  {
    href: "/knowledge/saikon/",
    title: "離婚後の再婚｜再婚禁止期間の廃止と、再婚の統計・結婚相談所での扱い",
    desc: "女性の再婚禁止期間は2024年4月1日に廃止されました。再婚の割合（夫17.9%・妻15.6%）や連れ子養子のルール、再婚の扱いを公表している相談所を紹介します。",
  },
  {
    href: "/knowledge/shibetsu-saikon/",
    title: "死別後の再婚で確認したい手続き｜遺族年金・姻族関係終了届・復氏届",
    desc: "遺族年金は結婚（内縁関係を含む）で受給権がなくなります。姻族関係終了届・復氏届の根拠条文と、年齢別の死別割合をまとめました。",
  },
  {
    href: "/knowledge/single-father/",
    title: "シングルファザーの再婚｜父子世帯の統計と、再婚前に確認したい手当・養子縁組・子の氏のルール",
    desc: "父子世帯は推計14.9万世帯、父の平均年齢は46.6歳です（令和3年度調査）。再婚（事実婚を含む）で児童扶養手当が支給されなくなる条文と、連れ子養子・子の氏・親権の民法の定めを整理しました。",
  },
  {
    href: "/knowledge/deaiba/",
    title: "であイバ（いばらき出会いサポートセンター）の料金・入会条件と、市町村の登録料助成",
    desc: "茨城県の結婚支援センターは入会登録料11,000円・3年間有効で、月会費・成婚料はかかりません。会員数、活動の流れ、登録料を助成している23市町村を公式情報でまとめました。",
  },
  {
    href: "/knowledge/hyogo-deai/",
    title: "ひょうご出会いサポートセンターの料金・入会条件と、はばタン会員・あいサポ会員の違い",
    desc: "お見合いのはばタン会員は年5,000円、イベントのあいサポ会員は無料です。会員3,351人（令和7年度実績）、AI紹介・申込みの上限、登録料を補助する9市町を公式情報で整理しました。",
  },
];

const relatedLinks = [
  { href: "/compare/", label: "結婚相談所の料金比較（24社一覧）を見る" },
  { href: "/review/musbell/", label: "ムスベルの評判・料金を見る（全国・複数連盟加盟）" },
  { href: "/review/ringbell/", label: "リングベルの評判・料金を見る（IBJ加盟のオンライン結婚相談所）" },
  { href: "/review/marriage-pro/", label: "マリッジプロの評判・料金を見る（20代・30代専門・新宿）" },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
  ],
};

export default function KnowledgeHub() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識" }]} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-6 tracking-wider text-[#2C2C2C]">
          結婚相談所の基礎知識
        </h1>

        <div className="rounded-2xl overflow-hidden mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/mb-knowledge.jpg" alt="結婚相談所の基礎知識のイメージ" className="w-full h-auto" />
        </div>
        <p className="text-sm text-[#2C2C2C]/70 leading-relaxed mb-4">
          はじめて結婚相談所を検討する方に向けて、料金の相場・タイプの選び方・活動の流れといった基礎知識をまとめました。全体像をつかんだうえで、各社の料金や評判は個別のレビューページや料金比較で見比べることをおすすめします。
        </p>
        <p className="text-xs text-[#2C2C2C]/50 mb-10 leading-relaxed">
          ※本カテゴリの内容は一般的な傾向・目安をまとめたものです。料金や条件は各社・プラン・時期により異なります。最新かつ正確な情報は各公式サイトおよび無料相談でご確認ください。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">基礎知識の記事一覧</h2>
          <div className="space-y-4">
            {articles.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="flex flex-col sm:flex-row gap-4 bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 hover:border-[#A08447] transition-colors"
              >
                {/* 各記事の画像（11/16 施主指示）。記事専用の画像がまだ無いものはカテゴリの画像 */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={KNOWLEDGE_IMG[a.href] ?? "/mb-knowledge.jpg"} alt="" loading="lazy" className="w-full sm:w-44 h-40 sm:h-28 object-cover rounded-xl shrink-0" />
                <div>
                  <h3 className="font-medium text-lg text-[#A08447] tracking-wider mb-2">{a.title}</h3>
                  <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">{a.desc}</p>
                  <p className="text-xs text-[#A08447] mt-3 font-medium">記事を読む →</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">気になる相談所の料金と評判を比較する</h2>
          <p className="text-sm text-[#2C2C2C]/70 leading-relaxed mb-4">
            基礎知識を把握されたら、実際の相談所の料金や評判を見比べることをおすすめします。料金比較や個別レビューから、ご自身の条件に合う相談所を探すことができます。
          </p>
          <ul className="space-y-2 text-sm">
            {relatedLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[#A08447] underline">{l.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-[#333333] rounded-2xl p-10 text-white text-center mb-12">
          <h2 className="text-xl font-light mb-4 tracking-widest">ランキングから相談所を探す</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">料金・成婚率・サポート体制をもとに選定した結婚相談所のランキングをご覧いただけます</p>
          <Link href="/" className="inline-block bg-[#A08447] hover:bg-[#8A7239] text-white font-normal py-3 px-8 rounded-full transition-colors tracking-widest">ランキングを見る</Link>
        </section>

        <AuthorBox />
      </main>
    </>
  );
}
