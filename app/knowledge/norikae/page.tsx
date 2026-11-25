import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 2026-11-25 新設：結婚相談所の乗り換えガイド（施主 mi26rock 11/24「結婚相談所見直しの窓口」を紹介する乗り換えガイドページ）。
// 見直しの窓口の内容は公式サイト（https://koisapo-college.jp/minaoshi/madoguchi ・/faq ・/company ・/partner）で 2026-11-25 に確認した表記のみ。
// 公式「利用者の声」の星評価は運営会社の掲載のため転記しない。計測リンクは提携承認後に追加する。

const CHECKED = "2026年11月25日";

export const metadata: Metadata = {
  title: "結婚相談所の乗り換えガイド｜無料で相談できる「見直しの窓口」と解約のルール【2026年11月確認】",
  description:
    "今の結婚相談所を続けるか乗り換えるか迷ったときに、無料で第三者に相談できる「結婚相談所見直しの窓口」（運営：株式会社コイサポ）の内容を公式サイトで確認しました。相談料・紹介料0円、オンライン最大60分の相談の流れと、乗り換え前に確認したい解約のルールをまとめています。",
  alternates: { canonical: "/knowledge/norikae/" },
};

const facts: [string, string][] = [
  ["サービス名", "結婚相談所見直しの窓口"],
  ["運営会社", "株式会社コイサポ（代表取締役 安彦大地・東京都新宿区西新宿7-7-21-B1）。事業内容は婚活サービスの企画・運営、婚活業界専門の求人サービス「婚キャリ」の運営など"],
  ["対象", "すでに結婚相談所で活動している方（これから相談所を探す方向けには「はじめての窓口」も用意されています）"],
  ["相談料・紹介料", "相談料0円（初回だけでなく2回目以降も無料）、結婚相談所の紹介料0円。紹介先の相談所に入会する場合は、各相談所の入会金・月会費などが別途必要"],
  ["相談の方法", "オンライン・最大60分。公式サイトで空いている日時を選んで予約（お名前・メールアドレス・主な相談内容を入力）"],
  ["相談できること", "婚活がうまくいかない原因、今の相談所で改善できること、担当者との進め方、他社との比較が必要か、今後の具体的なアクション"],
  ["運営会社の立場（公式表記）", "結婚相談所を運営していない／紹介・入会・成婚に応じた成果報酬は受け取っていない／乗り換えを前提とした相談ではない"],
  ["乗り換え先の紹介", "必要な場合、独自基準（サポート体制・レスポンス・活動改善への取り組み・契約と料金の説明・法令遵守）を確認した「見直しの窓口 認定相談所」から複数を提案。認定相談所以外の相談所の比較・相談も可能"],
  ["乗り換え優待", "見直しの窓口経由で紹介された方を対象に、入会時の費用割引などの優待を用意している認定相談所あり（有無・内容は相談所ごとに異なる）"],
  ["今の相談所への連絡", "本人の許可なく、現在活動中の結婚相談所へ連絡することはないと案内されています"],
  ["取材実績（公式表記）", "全国200社以上の結婚相談所を取材（運営会社ページの記載）"],
];

const faqs = [
  {
    q: "結婚相談所見直しの窓口に相談すると、乗り換えないといけませんか？",
    a: "いいえ。公式サイトでは、今の相談所を続けたほうがよい場合はそのまま継続することも伝える、乗り換えを前提とした相談ではないと案内されています。相談の結果として、活動方法の改善や担当者との進め方の見直しを提案されることもあります（2026年11月25日確認）。",
  },
  {
    q: "本当に無料で相談できますか？",
    a: "公式サイトでは、相談料は初回だけでなく2回目以降も無料、結婚相談所を紹介する場合の紹介料も無料と案内されています。紹介先の結婚相談所に入会する場合は、その相談所が定める入会金・月会費などが別途必要です（2026年11月25日確認）。",
  },
  {
    q: "今の結婚相談所に、相談したことが知られることはありますか？",
    a: "公式FAQでは、本人の許可なく、現在活動中の結婚相談所へ連絡することはないと案内されています（2026年11月25日確認）。",
  },
  {
    q: "なぜ無料で相談できるのですか？運営会社はどこですか？",
    a: "運営は株式会社コイサポ（東京都新宿区）です。公式FAQでは、相談者から相談料・紹介料を受け取らず、結婚相談所への入会・成約に応じた紹介手数料も受け取っていないと説明されています。同社は結婚相談所を自社で運営しておらず、婚活業界専門の求人サービスや婚活パーティーなど、婚活に関する複数の事業を行っています（2026年11月25日確認）。",
  },
  {
    q: "乗り換えるときに、今の相談所の解約で損をしないためには？",
    a: "結婚相談所の契約は、多くの場合、特定商取引法の「特定継続的役務提供」にあたり、中途解約はいつでも可能で、違約金の上限は法律で決まっています（提供開始前は3万円、開始後は2万円か契約残額の20%の低いほう。これに提供済みサービスの対価が加わります）。退会の申し出期限や、お見合い・交際中の案件をキャンセルする際の違約金は相談所ごとに異なるため、退会前に今の相談所の規約をご確認ください。詳しくは「結婚相談所の解約・返金のルール」で各社の公表内容を整理しています。",
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
  headline: "結婚相談所の乗り換えガイド｜無料で相談できる「見直しの窓口」と解約のルール",
  description:
    "結婚相談所の乗り換えを迷ったときに無料で相談できる「結婚相談所見直しの窓口」の内容と、乗り換え前に確認したい解約のルールを、公式サイトの確認日を記載して整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-25",
  dateModified: "2026-11-25",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/norikae/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "乗り換えガイド", item: "https://mu-su-bi-ba.com/knowledge/norikae/" },
  ],
};

const H2 = "text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest";
const P = "text-sm text-[#2C2C2C]/80 leading-relaxed mb-4";

export default function KnowledgeNorikae() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "乗り換えガイド" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          結婚相談所の乗り換えガイド｜無料で相談できる「見直しの窓口」と解約のルール
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: {CHECKED}／当ページは提携広告（PR）を含む場合があります</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />このページの要点
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>「今の相談所を続けるか、乗り換えるか」は、所属している相談所の担当者には相談しにくい悩みです。<strong>結婚相談所見直しの窓口</strong>では、結婚相談所を運営していない第三者に、<strong>オンラインで最大60分・相談料0円</strong>で相談できます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>相談の結論は乗り換えだけではありません。公式サイトでは、<strong>今の相談所を続ける・活動方法を改善する・担当者との進め方を変える・別の相談所へ乗り換える</strong>の4つの選択肢から整理すると案内されています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>乗り換える場合は、今の相談所の<strong>退会の申し出期限と違約金</strong>を先に確認しておくと、余計な費用を避けられます。中途解約の違約金の上限は法律で決まっています。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className={H2}>乗り換えを考えるきっかけと、乗り換え以外の選択肢</h2>
          <p className={P}>
            結婚相談所で活動していると、「担当者に相談しても具体的なアドバイスがない」「お見合いが組めない」「活動期間が長くなってきた」といった理由で、乗り換えを考える方がいます。
            ただし、原因がプロフィールや申し込み方、担当者とのやり取りにある場合は、相談所を変えなくても改善できることがあります。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
              <thead>
                <tr className="bg-[#FAF7F2]">
                  <th className="text-left p-3 border-b border-[#E5DCCF]">選択肢</th>
                  <th className="text-left p-3 border-b border-[#E5DCCF]">向いている状況</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border-b border-[#E5DCCF] whitespace-nowrap">今の相談所を続ける</td><td className="p-3 border-b border-[#E5DCCF]">サポート内容や会員の母数に大きな不満はなく、活動方法の工夫で改善できそうな場合</td></tr>
                <tr><td className="p-3 border-b border-[#E5DCCF] whitespace-nowrap">活動方法を改善する</td><td className="p-3 border-b border-[#E5DCCF]">お見合いが組めない原因が、写真・自己紹介文・申し込みの条件などにありそうな場合</td></tr>
                <tr><td className="p-3 border-b border-[#E5DCCF] whitespace-nowrap">担当者との進め方を変える</td><td className="p-3 border-b border-[#E5DCCF]">相談所自体には不満がなく、担当者との相性や相談のしかたに課題がある場合（担当者の変更ができるかは相談所ごとに異なります）</td></tr>
                <tr><td className="p-3 whitespace-nowrap">別の相談所へ乗り換える</td><td className="p-3">サポートの形（仲人型・データマッチング型）や加盟している連盟が自分に合っていない場合</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/55 leading-relaxed">
            選択肢の4つの分け方は、結婚相談所見直しの窓口の公式サイトの表記にもとづいています（{CHECKED}確認）。向いている状況は当サイトの整理です。
          </p>
        </section>

        <section className="mb-12">
          <h2 className={H2}>結婚相談所見直しの窓口とは（公式サイトの表記）</h2>
          <p className={P}>
            結婚相談所見直しの窓口は、すでに結婚相談所で活動している方が、今の活動を続けるか見直すかを第三者に相談できる無料のサービスです。
            乗り換えた方がよいと判断した場合は、希望や婚活スタイルに合う相談所を複数提案してもらうこともできます。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
              <tbody>
                {facts.map(([k, v]) => (
                  <tr key={k}>
                    <th className="text-left align-top p-3 border-b border-[#E5DCCF] bg-[#FAF7F2] w-[30%] font-medium">{k}</th>
                    <td className="p-3 border-b border-[#E5DCCF] leading-relaxed">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/55 leading-relaxed">
            出典：結婚相談所見直しの窓口 公式サイト（見直しの窓口・よくある質問・運営会社・認定相談所制度の各ページ、{CHECKED}確認）。数値や制度は変わることがあるため、申し込み前に公式サイトでご確認ください。
          </p>
        </section>

        <section className="mb-12">
          <h2 className={H2}>相談の流れ</h2>
          <ol className="space-y-3 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">1.</span><span><strong>無料相談を予約</strong>：公式サイトで空いている日時を選び、お名前・メールアドレス・主な相談内容を入力します。予約後に案内メールが届きます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">2.</span><span><strong>オンライン相談（最大60分）</strong>：今の活動状況、担当者、サポート内容、困っていることなどを伝えます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">3.</span><span><strong>今後の方向性を整理</strong>：続ける・改善する・担当者との進め方を変える・乗り換えるの中から、状況に合う選択肢を整理します。乗り換えを検討する場合は、複数の相談所を比較して提案を受けられます。</span></li>
          </ol>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mt-4">
            公式サイトでは、相談したからといって入会や乗り換えを決める必要はないと案内されています。相談の前に、今の相談所の月会費・活動期間・お見合いの件数などを手元にまとめておくと、話が具体的になります。
          </p>
        </section>

        <section className="mb-12">
          <h2 className={H2}>乗り換える前に確認したい3つのこと</h2>
          <ol className="space-y-3 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">1.</span><span><strong>今の相談所の退会の申し出期限</strong>：「退会希望日の10日前まで」など、相談所ごとに期限があります。月会費が日割りにならない相談所もあります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">2.</span><span><strong>お見合い・交際中の案件の扱い</strong>：申し込み中や交際中の案件をキャンセルして退会すると、1件ごとに違約金がかかる相談所があります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">3.</span><span><strong>乗り換え先の連盟</strong>：同じ連盟（IBJなど）に加盟する相談所へ移っても、紹介を受けられる会員の母数は大きく変わりません。母数を広げたい場合は、連盟の違いも確認しておくと判断しやすくなります。</span></li>
          </ol>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mt-4">
            中途解約の違約金の上限や、各社の解約・休会の条件は<Link href="/knowledge/kaiyaku/" className="text-[#A08447] underline">結婚相談所の解約・返金のルール</Link>、連盟ごとの違いは<Link href="/knowledge/renmei/" className="text-[#A08447] underline">連盟の違い</Link>で整理しています。
          </p>
        </section>

        <section className="mb-12">
          <h2 className={H2}>関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/compare/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">料金比較（確認日記載）を見る</Link>
            <Link href="/knowledge/kaiyaku/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">解約・返金のルール</Link>
            <Link href="/knowledge/renmei/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">連盟の違い</Link>
            <Link href="/knowledge/how-to-choose/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">タイプ別の選び方</Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className={H2}>よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="border border-[#E5DCCF] rounded-xl">
                <summary className="cursor-pointer px-5 py-4 text-sm font-medium text-[#2C2C2C]">{f.q}</summary>
                <p className="px-5 pb-5 text-sm text-[#2C2C2C]/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className={H2}>出典</h2>
          <ul className="space-y-2 text-xs text-[#2C2C2C]/65 leading-relaxed">
            <li>・結婚相談所見直しの窓口 公式サイト「見直しの窓口」「よくある質問」「運営会社」「認定相談所制度」（koisapo-college.jp/minaoshi/・{CHECKED}確認）</li>
            <li>・特定商取引法（特定継続的役務提供）の中途解約の上限：消費者庁「特定商取引法ガイド」（詳細は当サイト「解約・返金のルール」）</li>
          </ul>
        </section>

        <AuthorBox />
      </article>
    </>
  );
}
