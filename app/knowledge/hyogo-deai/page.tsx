import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-16 確認）。
// ・料金・会員数（R7年度実績）・累積成婚数：ひょうご出会いサポートセンター公式「はばタン会員TOP」
// ・入会条件・必要書類・AI紹介/検索の上限・写真：同「よくあるご質問」
// ・活動の流れ：同「はばタン会員ご利用の流れ」
// ・あいサポ会員（無料・イベント開催数）：同「あいサポ会員TOP」
// ・設置の経緯：同「ひょうご出会いサポートセンターについて」
// ・登録料を補助する自治体：同 お知らせ「令和8年度 はばタン会員登録料 補助金のお知らせ」（2026-08-24）
// ・であイバとの比較：当サイト /knowledge/deaiba/（いばらき出会いサポートセンター公式で同日確認）

const HABATAN_URL = "https://habatan-hyogo.jp/pages/habatan_top";
const FLOW_URL = "https://habatan-hyogo.jp/pages/habatan_flow";
const FAQ_URL = "https://habatan-hyogo.jp/pages/faq";
const AISAPO_URL = "https://habatan-hyogo.jp/pages/aisapo_top";
const ABOUT_URL = "https://habatan-hyogo.jp/pages/about";
const SUBSIDY_URL = "https://habatan-hyogo.jp/blogs/news-topics/%E4%BB%A4%E5%92%8C8%E5%B9%B4%E5%BA%A6-%E3%81%AF%E3%81%B0%E3%82%BF%E3%83%B3%E4%BC%9A%E5%93%A1%E7%99%BB%E9%8C%B2%E6%96%99-%E8%A3%9C%E5%8A%A9%E9%87%91%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B";

const subsidies = [
  { city: "姫路市", detail: "登録料・更新料 5,000ポイントの給付（ひめじポイント）" },
  { city: "加古川市", detail: "登録料・更新料 5,000円全額補助" },
  { city: "西脇市", detail: "登録料・更新料 5,000円全額補助" },
  { city: "高砂市", detail: "登録料・更新料 5,000円全額補助" },
  { city: "多可町", detail: "登録料 5,000円全額補助" },
  { city: "宍粟市", detail: "登録料 5,000円全額補助" },
  { city: "養父市", detail: "登録料 5,000円全額補助" },
  { city: "上郡町", detail: "登録料 5,000円全額補助" },
  { city: "神河町", detail: "登録料 5,000円全額補助" },
];

export const metadata: Metadata = {
  title: "ひょうご出会いサポートセンターの料金と入会条件｜はばタン会員は年5,000円・会員3,351人【2026年】",
  description:
    "兵庫県のひょうご出会いサポートセンターは、お見合いの「はばタン会員」が年5,000円（月会費・成婚料なし）、イベントの「あいサポ会員」が無料です。会員3,351人（令和7年度実績）、入会条件、活動の流れ、登録料を補助する9市町を公式情報で整理しています。",
  alternates: { canonical: "/knowledge/hyogo-deai/" },
};

const faqs = [
  {
    q: "ひょうご出会いサポートセンターの料金はいくらですか？",
    a: "お見合いができる「はばタン会員」は登録手数料5,000円/年、イベント参加が中心の「あいサポ会員」は無料です。月会費・紹介料・成婚料はかかりません（公式「よくあるご質問」）。有料イベント・セミナーの参加費、必要書類の発行手数料、通信料、お見合いやデートの飲食代は自己負担です。",
  },
  {
    q: "兵庫県外に住んでいても入会できますか？",
    a: "公式FAQでは、入会条件を兵庫県内に在住・在勤の方としたうえで、「県外の方でも登録は可能ですが、将来兵庫県に住む意思があることが条件」と記載しています。あわせて、結婚を希望する20歳以上の独身の方で、スマートフォンを自分で操作できることが条件です。",
  },
  {
    q: "センターに行く必要はありますか？",
    a: "公式の「はばタン会員ご利用の流れ」では、仮登録後にマイページで活動準備を行い、マイページから予約した「初回オンライン面談」を受け、登録手数料を振り込むと本登録が完了すると案内されています。お見合いは指定のお見合い場所での対面か、Zoomによるオンラインを選べます。",
  },
  {
    q: "AIから紹介される人数や、自分で申し込める人数に上限はありますか？",
    a: "あります。公式FAQでは、AIによる紹介は月に最大4人、自分で検索して申し込めるのは月5名までで、いずれも翌月への繰り越しはできないとされています。AI紹介は水曜日（祝日・年末年始を除く）にマイページに届きます。",
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
  headline: "ひょうご出会いサポートセンターの料金と入会条件",
  description: "兵庫県のひょうご出会いサポートセンター（はばタン会員・あいサポ会員）の料金・会員数・入会条件・活動の流れと、登録料を補助する自治体を整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/hyogo-deai/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "ひょうご出会いサポートセンター", item: "https://mu-su-bi-ba.com/knowledge/hyogo-deai/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";

export default function KnowledgeHyogoDeai() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "ひょうご出会いサポートセンター" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          ひょうご出会いサポートセンターの料金・入会条件と、はばタン会員・あいサポ会員の違い
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月16日（料金・会員数・条件・補助自治体は同日にセンター公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />結論：お見合いは「はばタン会員」で年5,000円、イベントだけなら「あいサポ会員」で無料です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>はばタン会員の登録手数料は<strong>5,000円/年</strong>。<strong>月会費・紹介料・成婚料はかかりません</strong>。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>はばタン会員の登録者は<strong>3,351人（男性1,920人・女性1,431人）</strong>、累積成婚数は<strong>2,300組</strong>（イベント等による成婚を含む）です（公式表示・令和7年度実績）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>本登録には<strong>初回オンライン面談</strong>があり、お見合いは対面かZoomを選べます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>姫路市・加古川市など<strong>9市町</strong>が登録料5,000円の補助制度を設けています（令和8年度）。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">はばタン会員とあいサポ会員の違い</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>はばタン会員（お見合い）</th><th className={th}>あいサポ会員（イベント）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録手数料</td><td className={td}>5,000円/年</td><td className={td}>無料</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>出会い方</td><td className={td}>AI紹介（月最大4人）・自分で検索して申込み（月5名まで）・イベント申込み</td><td className={td}>センターや協力団体が開催するイベントに申込み</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>実績（令和7年度）</td><td className={td}>登録者3,351人（男性1,920人・女性1,431人）</td><td className={td}>イベント開催数49回</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>面談・写真</td><td className={td}>初回オンライン面談あり。写真は原則公開（紹介時またはお見合い成立時の公開を選択）</td><td className={td}>面談・写真のアップロードはなし</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              センターは、兵庫県が未婚化・晩婚化への対策として2006年6月に設置したものです。はばタン会員は1対1のお見合い、あいサポ会員はレストランやホテルなどの協力を得たイベントで出会いの場を提供しています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={HABATAN_URL} target="_blank" rel="noopener noreferrer" className="underline">ひょうご出会いサポートセンター「はばタン会員TOP」</a>・<a href={AISAPO_URL} target="_blank" rel="noopener noreferrer" className="underline">「あいサポ会員TOP」</a>・<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="underline">「よくあるご質問」</a>・<a href={ABOUT_URL} target="_blank" rel="noopener noreferrer" className="underline">「ひょうご出会いサポートセンターについて」</a>（いずれも2026年11月16日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">入会条件と必要書類</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会条件</td><td className={td}>結婚を希望する20歳以上の独身の方／センターのシステムにアクセスできるスマートフォンを持ち、自分で操作できる方／兵庫県内に在住・在勤の方（県外の方は将来兵庫県に住む意思があることが条件）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>独身証明書または戸籍抄（謄）本（3か月以内）、写真付き身分証明書、健康保険証、写真1〜2枚（3か月以内に撮影・バストアップ1枚は必須。はばタン会員のみ）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>写真の規定</td><td className={td}>本人のみが写ったもの。縦600px・横450px、4MBまでのJPEG。編集・合成・加工した写真（フレーム等を含む）は不可</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>その他の費用</td><td className={td}>有料イベント・セミナーの参加費、書類の発行手数料、通信料、お見合い・デートの飲食代は自己負担</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="underline">ひょうご出会いサポートセンター「よくあるご質問」</a>（2026年11月16日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">はばタン会員の活動の流れ</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>公式サイトの入会申込ページで会員規約に同意し、仮登録する</li>
              <li>マイページでプロフィール・写真・必要書類を登録し、初回オンライン面談を予約して受ける。登録手数料5,000円/年を振り込むと本登録完了</li>
              <li>AIからの紹介（水曜日）や検索でお相手を探し、お見合いを申し込む。お相手は紹介日の翌日から7日以内に返事をする</li>
              <li>お見合い（30分〜1時間程度）。指定のお見合い場所で会うか、Zoomでオンライン。当日はニックネームを使い、連絡先は伝えない</li>
              <li>翌日までに回答し、双方がOKなら交際（お友だち）期間へ。双方に真剣交際の意思があれば、システムから氏名・連絡先が伝えられる（真剣交際のお相手は1人）</li>
              <li>結婚が決まったら結婚報告書を提出（記念品の贈呈あり）</li>
            </ol>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={FLOW_URL} target="_blank" rel="noopener noreferrer" className="underline">ひょうご出会いサポートセンター「はばタン会員ご利用の流れ」</a>（2026年11月16日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">登録料を補助している自治体（令和8年度・9市町）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>自治体</th><th className={th}>補助の内容</th></tr></thead>
                <tbody>
                  {subsidies.map((s) => (
                    <tr key={s.city} className="border-t border-[#E5DCCF]"><td className={td}>{s.city}</td><td className={td}>{s.detail}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>補助を受けるには各自治体が定める申請手続きが必要で、実施期間や条件は自治体ごとに異なります。申請前にお住まいの自治体の案内をご確認ください。</p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SUBSIDY_URL} target="_blank" rel="noopener noreferrer" className="underline">ひょうご出会いサポートセンター「令和8年度 はばタン会員登録料 補助金のお知らせ」</a>（2026年8月24日掲載・2026年11月16日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>3年間の登録料（当サイト計算）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>ひょうご出会いサポートセンター（はばタン会員）</td><td className={td}>5,000円/年</td><td className={td}>15,000円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/deaiba/" className="text-[#A08447] underline">いばらき出会いサポートセンター（であイバ）</Link></td><td className={td}>11,000円（3年間有効。条件に当たらない方は22,000円）</td><td className={td}>11,000円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円</td><td className={td}>—</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              公的センターは費用が低い一方、AI紹介・申込みの数に月ごとの上限があります。兵庫県内の民間の結婚相談所は、当サイトの<Link href="/area/kobe/" className="text-[#A08447] underline">神戸・兵庫の結婚相談所一覧</Link>で探すことができます。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/area/kobe/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">神戸・兵庫の結婚相談所</Link>
            <Link href="/knowledge/deaiba/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">であイバ（茨城県）</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
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
