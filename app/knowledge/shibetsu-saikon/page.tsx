import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 数値・条文・制度はすべて一次情報から転記（2026-11-15 確認）。
// ・遺族年金の失権：日本年金機構「遺族年金を受けている方が結婚や養子縁組などをしたとき」
// ・姻族関係の終了・復氏：民法 第728条・第751条、戸籍法 第95条・第96条（e-Gov法令検索）
// ・年齢別の死別割合：国立社会保障・人口問題研究所「人口統計資料集（2024年版）」表6-24（国勢調査2020年・不詳補完値）
// ・再婚件数の割合：厚生労働省「令和6年(2024)人口動態統計月報年計（概数）の概況」表11

const NENKIN_URL = "https://www.nenkin.go.jp/service/jukyu/tetsuduki/izoku/jukyu/20140421-19.html";
const MINPO_URL = "https://laws.e-gov.go.jp/law/129AC0000000089";
const KOSEKI_URL = "https://laws.e-gov.go.jp/law/322AC0000000224";
const IPSS_URL = "https://www.ipss.go.jp/syoushika/tohkei/Popular/Popular2024.asp?chap=6";
const MHLW_URL = "https://www.mhlw.go.jp/toukei/saikin/hw/jinkou/geppo/nengai24/index.html";

const widowed = [
  { age: "50〜54歳", m: "0.6", f: "2.0" },
  { age: "55〜59歳", m: "1.2", f: "3.8" },
  { age: "60〜64歳", m: "2.1", f: "7.0" },
  { age: "65〜69歳", m: "3.7", f: "12.2" },
  { age: "70〜74歳", m: "6.0", f: "20.1" },
];

export const metadata: Metadata = {
  title: "死別後の再婚で確認したい手続き｜遺族年金は結婚（内縁を含む）で受給権がなくなる・姻族関係終了届と復氏届",
  description:
    "配偶者と死別した後に再婚する場合、遺族年金を受けている方は結婚（内縁関係を含む）で受給権がなくなり、失権届の提出が必要です（日本年金機構）。亡くなった配偶者の親族との関係を終わらせる姻族関係終了届、旧姓に戻る復氏届の根拠条文と、年齢別の死別割合を一次情報にもとづいて整理しています。",
  alternates: { canonical: "/knowledge/shibetsu-saikon/" },
};

const faqs = [
  {
    q: "遺族年金を受けていますが、再婚すると受け取れなくなりますか？",
    a: "日本年金機構は、遺族年金を受けている方が結婚したとき（内縁関係を含む）は、年金を受ける権利がなくなると案内しています。該当した日から、遺族基礎年金は14日以内、遺族厚生年金は10日以内に「遺族年金失権届」を提出する必要があります。最新の扱いや個別のケースは、年金事務所でご確認ください。",
  },
  {
    q: "婚姻届を出さない事実婚なら、遺族年金は止まりませんか？",
    a: "日本年金機構の案内では、受給権がなくなる事由として「結婚したとき（内縁関係を含む）」と記載されています。婚姻届を出していなくても、内縁関係にあたる場合は対象になります。どのような場合に内縁関係と判断されるかは個別の事情によるため、年金事務所にご相談ください。",
  },
  {
    q: "亡くなった配偶者の親族との関係は、再婚すると終わりますか？",
    a: "民法第728条では、姻族関係は離婚によって終了すると定める一方、配偶者が亡くなった場合は「生存配偶者が姻族関係を終了させる意思を表示したとき」に終了すると定めています（同条第2項）。この意思表示は、戸籍法第96条にもとづく届出（姻族関係終了届）で行います。",
  },
  {
    q: "旧姓に戻るにはどうすればよいですか？",
    a: "民法第751条第1項により、配偶者が亡くなった場合、生存配偶者は婚姻前の氏に戻ることができます。手続きは戸籍法第95条にもとづく届出（復氏届）です。姻族関係終了届とは別の届出のため、必要に応じてそれぞれ提出します。届出先や必要書類は市区町村の戸籍窓口でご確認ください。",
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
  headline: "死別後の再婚で確認したい手続き｜遺族年金・姻族関係終了届・復氏届",
  description: "死別後の再婚に関係する遺族年金の失権、姻族関係終了届、復氏届のルールと、年齢別の死別割合を整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-15",
  dateModified: "2026-11-15",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/shibetsu-saikon/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "死別後の再婚", item: "https://mu-su-bi-ba.com/knowledge/shibetsu-saikon/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";

export default function KnowledgeShibetsuSaikon() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "死別後の再婚" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          死別後の再婚で確認したい手続き｜遺族年金・姻族関係終了届・復氏届
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月15日（日本年金機構の案内・条文・統計値は同日に確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />結論：再婚の前に、遺族年金と2つの届出を確認しておくことをおすすめします
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>遺族年金を受けている方は、<strong>結婚（内縁関係を含む）で受給権がなくなります</strong>。遺族基礎年金は14日以内、遺族厚生年金は10日以内に失権届が必要です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>亡くなった配偶者の親族との姻族関係は、<strong>自分から終了の意思を表示したときに終了</strong>します（民法第728条第2項・姻族関係終了届）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>旧姓に戻りたい場合は、<strong>復氏届</strong>で婚姻前の氏に戻ることができます（民法第751条第1項）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>死別の割合は年齢とともに高くなり、<strong>70〜74歳の女性では20.1%</strong>です（2020年国勢調査）。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">遺族年金の受給権がなくなる主な事由</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>日本年金機構が「受給権者本人」について示している事由は、遺族基礎年金・遺族厚生年金で共通して次の3つです。</p>
            <ul className="space-y-1.5">
              <li>・亡くなったとき</li>
              <li>・<strong>結婚したとき（内縁関係を含む）</strong></li>
              <li>・直系血族または直系姻族以外の方の養子となったとき</li>
            </ul>
            <p>
              このほか、遺族厚生年金には、夫が亡くなった当時30歳未満で子のない妻が受給権を得てから5年を経過したときなど、年齢・期間による事由もあります。遺族基礎年金は、子の年齢や婚姻などによってもなくなります。
            </p>
            <div className="border border-[#E5DCCF] rounded-xl p-5">
              <p className="font-medium text-[#2C2C2C] mb-2">届出の期限</p>
              <p>事由に該当した日から、<strong>遺族基礎年金は14日以内、遺族厚生年金は10日以内</strong>に「遺族年金失権届」を提出します。届書の「失権の事由に該当した年月日」には、結婚などの事実に該当した日を記入します。</p>
            </div>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={NENKIN_URL} target="_blank" rel="noopener noreferrer" className="underline">日本年金機構「遺族年金を受けている方が結婚や養子縁組などをしたとき」</a>（2026年11月15日確認）。制度は改正されることがあるため、最新の扱いは年金事務所でご確認ください。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">姻族関係終了届と復氏届</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>届出</th><th className={th}>根拠条文</th><th className={th}>内容（要旨）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>姻族関係終了届</td><td className={td}>民法 第728条第2項／戸籍法 第96条</td><td className={td}>配偶者が亡くなった場合、生存配偶者が姻族関係を終了させる意思を表示したときに姻族関係が終了する。届書には死亡した配偶者の氏名・本籍・死亡の年月日を記載する</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>復氏届</td><td className={td}>民法 第751条第1項／戸籍法 第95条</td><td className={td}>配偶者が亡くなった場合、生存配偶者は婚姻前の氏に復することができる。復氏しようとする者は届け出なければならない</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              離婚の場合、姻族関係は離婚によって終了します（民法第728条第1項）。これに対し、死別の場合は届出をしない限り姻族関係は続きます。2つの届出は別々の手続きで、どちらか一方だけを提出することもできます。届出先・必要書類は市区町村の戸籍窓口でご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MINPO_URL} target="_blank" rel="noopener noreferrer" className="underline">民法</a>・<a href={KOSEKI_URL} target="_blank" rel="noopener noreferrer" className="underline">戸籍法</a>（e-Gov法令検索・2026年11月15日確認）。本ページは条文の要旨を紹介するもので、個別の法的助言ではありません。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">年齢別の死別割合（2020年国勢調査）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            各年齢層の人口のうち、配偶者と死別して現在配偶者がいない人の割合です。どの年齢でも女性の方が高く、60代後半からは差が大きく開きます。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full min-w-[420px] text-sm border border-[#E5DCCF]">
              <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年齢</th><th className={th}>男性</th><th className={th}>女性</th></tr></thead>
              <tbody>
                {widowed.map((r) => (
                  <tr key={r.age} className="border-t border-[#E5DCCF]"><td className={td}>{r.age}</td><td className={td}>{r.m}%</td><td className={td}>{r.f}%</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-2">
            なお、2024年の婚姻のうち再婚の割合は夫17.9%・妻15.6%でした。人口動態統計の再婚件数は死別後と離婚後を合わせた数値です。
          </p>
          <p className="text-xs text-[#2C2C2C]/55">出典：<a href={IPSS_URL} target="_blank" rel="noopener noreferrer" className="underline">国立社会保障・人口問題研究所「人口統計資料集（2024年版）」</a> 表6-24（総務省統計局『国勢調査報告』2020年・不詳補完値）、<a href={MHLW_URL} target="_blank" rel="noopener noreferrer" className="underline">厚生労働省「令和6年(2024)人口動態統計月報年計（概数）の概況」</a> 表11（いずれも2026年11月15日確認）。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚相談所を利用する場合</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              当サイトの実査では、パートナーエージェントが入会条件の説明で「再婚の方も入会できます」と記載しており（2026年10月24日公式確認）、東京フォリパートナーは再婚向けの「リスタート」コースを設けていました（2026年10月25日公式確認）。再婚の扱いを公表している相談所の一覧は<Link href="/knowledge/saikon/" className="text-[#A08447] underline">離婚後の再婚のページ</Link>にまとめています。
            </p>
            <p>
              入会時には独身証明書の提出を求める相談所があります。遺族年金や相続など、お金に関わる事情は入会前の無料相談で担当者に伝えておくと、希望条件に合う相手を紹介してもらいやすくなります。
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/saikon/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">離婚後の再婚</Link>
            <Link href="/knowledge/senior/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">60代以上のシニア婚活（相続のルール）</Link>
            <Link href="/knowledge/50s/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">50代の婚活の現状</Link>
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
