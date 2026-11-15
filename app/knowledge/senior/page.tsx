import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 数値・条文はすべて一次情報から転記（2026-11-15 確認）。
// ・年齢別の配偶関係：国立社会保障・人口問題研究所「人口統計資料集（2024年版）」表6-24（総務省統計局『国勢調査報告』2020年・不詳補完値）
// ・相続：民法 第887条・第890条・第900条（e-Gov法令検索）
// ・遺族年金：日本年金機構「遺族年金を受けている方が結婚や養子縁組などをしたとき」
// ・相談所の年代別データ：当サイトのレビューページの実査記録（流山おおたかの森 2026-10-27・Bridalチューリップ 2026-10-25・リングベル 2026-10-26 公式確認）

const IPSS_URL = "https://www.ipss.go.jp/syoushika/tohkei/Popular/Popular2024.asp?chap=6";
const MINPO_URL = "https://laws.e-gov.go.jp/law/129AC0000000089";
const NENKIN_URL = "https://www.nenkin.go.jp/service/jukyu/tetsuduki/izoku/jukyu/20140421-19.html";

const status = [
  { age: "60〜64歳", sex: "男性", mikon: 17.3, shibetsu: 2.1, ribetsu: 8.1 },
  { age: "60〜64歳", sex: "女性", mikon: 8.5, shibetsu: 7.0, ribetsu: 10.6 },
  { age: "65〜69歳", sex: "男性", mikon: 14.1, shibetsu: 3.7, ribetsu: 7.6 },
  { age: "65〜69歳", sex: "女性", mikon: 6.4, shibetsu: 12.2, ribetsu: 9.6 },
  { age: "70〜74歳", sex: "男性", mikon: 9.6, shibetsu: 6.0, ribetsu: 6.8 },
  { age: "70〜74歳", sex: "女性", mikon: 5.4, shibetsu: 20.1, ribetsu: 8.6 },
];
const single = (r: (typeof status)[number]) => (r.mikon + r.shibetsu + r.ribetsu).toFixed(1);

export const metadata: Metadata = {
  title: "シニア婚活（60代・70代）の基礎知識｜配偶者のいない人の割合と、再婚前に確認したい相続・遺族年金のルール",
  description:
    "2020年国勢調査では、70〜74歳の女性の34.1%が配偶者のいない状態で、その多くは死別でした。60代・70代の配偶関係の内訳と、シニアの再婚で確認しておきたい相続（民法）・遺族年金（日本年金機構）のルール、結婚相談所を選ぶ際の確認点を一次情報にもとづいて整理しています。",
  alternates: { canonical: "/knowledge/senior/" },
};

const faqs = [
  {
    q: "60代・70代で配偶者のいない人はどのくらいいますか？",
    a: "国立社会保障・人口問題研究所が国勢調査（2020年）から算出した値では、配偶者がいない人（未婚・死別・離別の合計）の割合は、60〜64歳で男性27.5%・女性26.1%、70〜74歳で男性22.4%・女性34.1%でした。女性は年齢が上がるにつれて死別の割合が高くなり、70〜74歳では20.1%です。",
  },
  {
    q: "再婚すると、相手の財産を相続することになりますか？",
    a: "民法第890条では「被相続人の配偶者は、常に相続人となる」と定められています。子がいる場合の法定相続分は、配偶者と子が各2分の1です（第900条第1号）。再婚によって相続人の構成が変わるため、お子さまがいらっしゃる場合は、事前に家族で話し合っておくことをおすすめします。個別の判断は弁護士・司法書士・税理士などの専門家にご相談ください。",
  },
  {
    q: "遺族年金を受け取っていますが、再婚すると止まりますか？",
    a: "日本年金機構は、遺族年金を受けている方が結婚したとき（内縁関係を含む）は年金を受ける権利がなくなると案内しています。届出期限は遺族基礎年金が14日以内、遺族厚生年金が10日以内です。婚姻届を出さない事実婚でも対象になる点にご注意ください。詳しくは当サイトの「死別後の再婚」のページで整理しています。",
  },
  {
    q: "60代でも結婚相談所に入会できますか？",
    a: "入会できる相談所はありますが、年齢の上限を設けている相談所もあります。当サイトの実査では、リングベルは入会資格を男性20〜44歳・女性20〜39歳としていました（2026年10月26日公式確認）。一方、流山おおたかの森結婚相談所の公式「お客様の声」37件のうち3件は60代以上の成婚者でした（2026年10月27日確認）。年齢条件と同年代の会員数を無料相談で確認することをおすすめします。",
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
  headline: "シニア婚活（60代・70代）の基礎知識｜配偶者のいない人の割合と相続・遺族年金のルール",
  description: "国勢調査にもとづく60代・70代の配偶関係の内訳と、再婚前に確認したい相続・遺族年金のルールを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-15",
  dateModified: "2026-11-15",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/senior/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "シニア婚活", item: "https://mu-su-bi-ba.com/knowledge/senior/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";

export default function KnowledgeSenior() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "シニア婚活" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          シニア婚活（60代・70代）の基礎知識｜配偶者のいない人の割合と、再婚前に確認したい相続・遺族年金のルール
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月15日（統計値・条文・日本年金機構の案内は同日に確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />結論：シニアの婚活は「お金と家族のルール」を先に確認することが大切です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>2020年国勢調査では、<strong>60〜64歳の男性{single(status[0])}%・女性{single(status[1])}%</strong>、<strong>70〜74歳の男性{single(status[4])}%・女性{single(status[5])}%</strong>が配偶者のいない状態でした。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>女性は年齢とともに<strong>死別の割合が高くなり、70〜74歳では20.1%</strong>です。シニアの婚活は、死別・離別を経験した方どうしの出会いが多くなります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>婚姻届を出すと、<strong>配偶者は常に相続人</strong>になります（民法第890条）。お子さまがいる場合は、事前の話し合いが欠かせません。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>遺族年金を受けている方は、<strong>結婚（内縁関係を含む）で受給権がなくなります</strong>（日本年金機構）。事実婚を選んでも対象になる点にご注意ください。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">60代・70代の配偶関係の内訳（2020年国勢調査）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            各年齢層の人口に占める割合です。「配偶者なし計」は未婚・死別・離別を合計した値で、当サイトが算出しました。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full min-w-[620px] text-sm border border-[#E5DCCF]">
              <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年齢</th><th className={th}>性別</th><th className={th}>未婚</th><th className={th}>死別</th><th className={th}>離別</th><th className={th}>配偶者なし計</th></tr></thead>
              <tbody>
                {status.map((r) => (
                  <tr key={r.age + r.sex} className="border-t border-[#E5DCCF]"><td className={td}>{r.age}</td><td className={td}>{r.sex}</td><td className={td}>{r.mikon}%</td><td className={td}>{r.shibetsu}%</td><td className={td}>{r.ribetsu}%</td><td className={`${td} font-medium`}>{single(r)}%</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-2">
            男性は年齢が上がるほど配偶者のいない人の割合が下がるのに対し、女性は65歳以降に上がります。死別の割合に男女差が大きいためです。同年代の相手を探す場合、男性は配偶者のいない女性の方が多い状況、女性はその逆になる点を踏まえておくと、活動の見通しが立てやすくなります。
          </p>
          <p className="text-xs text-[#2C2C2C]/55">出典：<a href={IPSS_URL} target="_blank" rel="noopener noreferrer" className="underline">国立社会保障・人口問題研究所「人口統計資料集（2024年版）」</a> 表6-24（総務省統計局『国勢調査報告』2020年・不詳補完値。2026年11月15日確認）。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">再婚前に確認したい相続のルール</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>条文</th><th className={th}>定められている内容（要旨）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民法 第890条</td><td className={td}>被相続人の配偶者は、常に相続人となる</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民法 第900条第1号</td><td className={td}>子と配偶者が相続人のときは、相続分は各2分の1</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民法 第887条第1項</td><td className={td}>被相続人の子は、相続人となる</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              婚姻届を出して再婚すると、新しい配偶者は相続人になり、前の結婚で生まれたお子さまの法定相続分は変わります。また、再婚相手のお子さま（いわゆる連れ子）は、養子縁組をしない限り第887条の「被相続人の子」には当たらないと一般に解されています。
            </p>
            <p>
              遺言の作成や養子縁組の要否など、具体的な対応は弁護士・司法書士・税理士などの専門家にご相談ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MINPO_URL} target="_blank" rel="noopener noreferrer" className="underline">民法（e-Gov法令検索）</a>（2026年11月15日確認）。本ページは条文の要旨を紹介するもので、個別の法的助言ではありません。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">遺族年金を受けている方の注意点</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              日本年金機構は、遺族年金を受けている方が<strong>結婚したとき（内縁関係を含む）</strong>は年金を受ける権利がなくなると案内しています。該当した日から、遺族基礎年金は14日以内、遺族厚生年金は10日以内に「遺族年金失権届」の提出が必要です。
            </p>
            <p>
              「婚姻届を出さなければ遺族年金を受け取り続けられる」とは限らない点にご注意ください。手続きの詳細と、死別後の再婚に関係する届出（姻族関係終了届・復氏届）は<Link href="/knowledge/shibetsu-saikon/" className="text-[#A08447] underline">死別後の再婚のページ</Link>で整理しています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={NENKIN_URL} target="_blank" rel="noopener noreferrer" className="underline">日本年金機構「遺族年金を受けている方が結婚や養子縁組などをしたとき」</a>（2026年11月15日確認）。制度は改正されることがあるため、最新の扱いは年金事務所でご確認ください。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚相談所を選ぶときの確認点</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>当サイトがレビューしている24社の公式サイトで確認できた、60代以上に関係する情報は次のとおりです。</p>
            <ul className="space-y-2">
              <li>・<Link href="/review/ringbell/" className="text-[#A08447] underline">リングベル</Link>：入会資格は男性20〜44歳・女性20〜39歳のため、60代は対象外です（2026年10月26日公式確認）。</li>
              <li>・<Link href="/review/nagareyama-otakanomori/" className="text-[#A08447] underline">流山おおたかの森結婚相談所</Link>：公式「お客様の声」のうち年齢の記載がある成婚者37件中、60代以上は3件でした（2026年10月27日確認・当サイト集計）。</li>
              <li>・<Link href="/review/bridal-tulip/" className="text-[#A08447] underline">Bridalチューリップ</Link>：公式「お客様の声」205件中、60代は1件でした（2026年10月25日確認・当サイト集計）。42歳以上は入会金150,800円の専用プランです。</li>
            </ul>
            <p>年代別の会員数は公式サイトに載っていないことが多いため、無料相談では、入会できる年齢の上限と、希望する年代の会員が何人いるかを具体的に確認することをおすすめします。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/shibetsu-saikon/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">死別後の再婚</Link>
            <Link href="/knowledge/saikon/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">離婚後の再婚</Link>
            <Link href="/knowledge/50s/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">50代の婚活の現状</Link>
            <Link href="/knowledge/kaiyaku/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">解約・返金のルール</Link>
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
