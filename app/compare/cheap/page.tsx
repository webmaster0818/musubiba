import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import A8Banner from "@/components/A8Banner";

export const metadata: Metadata = {
  title: "安い結婚相談所はどこ？1年総額で比較【2026年】検証済み料金ランキング",
  description:
    "結婚相談所の「安さ」を1年活動の総額（初期費用＋月会費×12＋成婚料）で比較。当サイトが公式サイトで検証した料金のみ掲載（2026年7月5日確認・税込）。最安はスマリッジの125,400円。オンライン型と仲人型の総額差、成婚料の有無での逆転、安く始めるコツまで解説します。",
  alternates: { canonical: "/compare/cheap/" },
};

// 全て公式サイトで検証済みの料金（税込）。オンライン3社=2026年7月5日確認／仲人型2社=2026年7月公式確認。
type Row = {
  slug: string;
  name: string;
  type: string;
  initial: string;
  monthly: string;
  seikon: string;
  total1y: string;
  totalSeikon: string;
  note: string;
};
const rows: Row[] = [
  {
    slug: "smartread",
    name: "スマリッジ",
    type: "オンライン",
    initial: "6,600円",
    monthly: "9,900円",
    seikon: "0円",
    total1y: "125,400円",
    totalSeikon: "125,400円",
    note: "お見合い料は月8件まで0円。3ヶ月お見合い成立なしで返金保証。U28・エリア・シングル親の割引あり（各月1,100円引き）",
  },
  {
    slug: "code-for-marriage",
    name: "Code For Marriage（エンジニア専門）",
    type: "仲人型（IBJ）",
    initial: "77,000円",
    monthly: "11,000円",
    seikon: "220,000円",
    total1y: "209,000円",
    totalSeikon: "429,000円",
    note: "ITエンジニア専門・仲人全員元SE・100%リモート。U-30プラン（入会33,000円・月7,700円）あり",
  },
  {
    slug: "en-konkatsu",
    name: "エン婚活エージェント",
    type: "オンライン",
    initial: "33,000円",
    monthly: "16,500円",
    seikon: "0円",
    total1y: "231,000円",
    totalSeikon: "231,000円",
    note: "お見合い料0円。3ヶ月以内にお見合い不成立なら登録料＋3ヶ月分月会費を返金",
  },
  {
    slug: "naco-do",
    name: "naco-do（ナコード）",
    type: "オンライン",
    initial: "66,000円",
    monthly: "16,800円",
    seikon: "0円",
    total1y: "267,600円",
    totalSeikon: "267,600円",
    note: "1プランのみのシンプル体系。90日間出会えなければ全額返金。契約期間12ヶ月・成婚による中途解約の違約金なし",
  },
  {
    slug: "nagareyama-otakanomori",
    name: "流山おおたかの森結婚相談所",
    type: "仲人型（IBJ）",
    initial: "165,000円",
    monthly: "9,900円",
    seikon: "220,000円",
    total1y: "283,800円",
    totalSeikon: "503,800円",
    note: "カウンセラー歴23年の代表による1名運営。流山・柏・野田・松戸へ出張対応",
  },
];

const faqs = [
  {
    q: "一番安い結婚相談所はどこですか？",
    a: "当サイトが公式サイトで検証した範囲（2026年7月5日確認・税込）では、スマリッジが1年総額125,400円（登録料6,600円＋月会費9,900円×12・成婚料0円）で最安です。オンライン完結型のため店舗サポートはありませんが、3ヶ月お見合い成立なしの返金保証があります。",
  },
  {
    q: "「月会費が安い」と「総額が安い」は違うのですか？",
    a: "違います。結婚相談所の費用は初期費用＋月会費×活動月数＋成婚料の3要素で決まるため、月会費が安くても初期費用や成婚料が高ければ総額で逆転します。例えば仲人型は月会費1万円前後でも、成婚時に成婚料220,000円がかかる料金体系が一般的です。本ページの表は「1年総額」と「成婚した場合の総額」を分けて掲載しています。",
  },
  {
    q: "成婚料0円の相談所と成婚料ありの相談所、どちらが得ですか？",
    a: "成婚までの期間と重視するサポートによります。オンライン型（成婚料0円）は総額が安い一方、活動は自分主導が基本です。仲人型（成婚料あり）は費用が高いぶん、お相手紹介から交際・プロポーズまで伴走してもらえます。「安く長く」ならオンライン型、「多少かかっても早く決めたい」なら仲人型という整理が現実的です。",
  },
  {
    q: "表の料金は正確ですか？",
    a: "掲載料金はすべて当サイトが各公式サイトで確認した公表値です（オンライン3社は2026年7月5日、仲人型2社は2026年7月確認・税込）。ただし料金は改定されることがあり、キャンペーン（初月0円等）も随時変わるため、申し込み前に必ず公式サイト・無料相談で最新の料金をご確認ください。",
  },
  {
    q: "もっと安く始める方法はありますか？",
    a: "確認できた範囲では、①スマリッジの各種割引（28歳以下・対象エリア・シングル親は各月1,100円引き・併用可）、②各社の乗りかえ割（スマリッジは登録料0円、naco-doは初期費用33,000円OFF）、③返金保証の活用（スマリッジ・エン婚活・naco-doとも一定期間の保証あり）があります。適用条件は各公式サイトでご確認ください。",
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

export default function CheapComparePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "料金比較", href: "/compare/" }, { name: "安い結婚相談所の総額比較" }]} />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-light mb-4 tracking-wide text-[#2C2C2C]">
          安い結婚相談所はどこ？1年総額で比較【2026年】
        </h1>
        <p className="text-xs text-[#8B8580] mb-4">料金はすべて公式サイトで検証（オンライン3社=2026年7月5日・仲人型=2026年7月確認・税込）</p>
        <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-6">
          結婚相談所の「安さ」は月会費だけでは分かりません。<strong>初期費用＋月会費×12ヶ月＋成婚料</strong>の「1年総額」で並べ替えると、順位が大きく入れ替わります。このページでは、当サイトが公式サイトで料金を確認できた相談所だけを、総額の安い順に比較します。
        </p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 mb-10">
          <h2 className="text-base font-medium text-[#8B7355] mb-3 tracking-widest">結論（検証済み・税込）</h2>
          <ul className="space-y-2 text-sm text-[#2C2C2C]/80">
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>1年総額の最安はスマリッジ 125,400円</strong>（成婚料0円なので成婚しても増えません）</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span>オンライン型は総額12.5万〜26.8万円、仲人型は成婚時総額42.9万〜50.4万円が検証レンジ＝<strong>差は最大約4倍</strong></span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span>仲人型は高いぶん伴走サポートが厚い。<strong>「安さ」と「手厚さ」はトレードオフ</strong>なので、下の表で自分の優先順位に合わせて選んでください</span></li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">1年総額の安い順ランキング（検証済み5社）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#FAF7F2] text-left">
                  <th className="px-3 py-3">相談所</th>
                  <th className="px-3 py-3">タイプ</th>
                  <th className="px-3 py-3">初期費用</th>
                  <th className="px-3 py-3">月会費</th>
                  <th className="px-3 py-3">成婚料</th>
                  <th className="px-3 py-3">1年総額</th>
                  <th className="px-3 py-3">成婚した場合</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.slug} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-3 font-medium whitespace-nowrap">
                      <Link href={`/review/${r.slug}/`} className="text-[#8B7355] underline">{r.name}</Link>
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">{r.type}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{r.initial}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{r.monthly}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{r.seikon}</td>
                    <td className="px-3 py-3 whitespace-nowrap font-semibold text-[#8B7355]">{r.total1y}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{r.totalSeikon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-3 leading-relaxed">
            ※1年総額＝初期費用＋月会費×12ヶ月＋成婚料0円の場合。「成婚した場合」＝1年活動して成婚退会したときの総額（成婚料を加算）。お見合い料・オプション・キャンペーンは含みません。料金は改定される場合があるため、申込前に各公式サイトでご確認ください。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">各社の特徴と割引・返金保証</h2>
          <div className="space-y-4">
            {rows.map((r) => (
              <div key={r.slug} className="bg-white rounded-xl border border-gray-100 p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-medium text-[#8B7355] tracking-wider">{r.name}</h3>
                  <span className="text-sm font-semibold">{r.total1y}<span className="text-xs text-[#2C2C2C]/50">／1年</span></span>
                </div>
                <p className="text-sm text-[#2C2C2C]/70 leading-relaxed mb-2">{r.note}</p>
                <Link href={`/review/${r.slug}/`} className="text-sm text-[#8B7355] underline">詳しい口コミ・評判を見る →</Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">安さで選ぶときの3つの注意点</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-medium text-[#8B7355] mb-1">1. 総額は「成婚料込み」で見る</h3>
              <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">仲人型は月会費が1万円前後でも、成婚退会時に220,000円の成婚料がかかる体系が一般的です。「月いくら」ではなく「出口までの総額」で比較しましょう。</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-medium text-[#8B7355] mb-1">2. 安さの理由＝サポートの範囲を理解する</h3>
              <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">オンライン型が安いのは店舗と専任仲人のコストがないから。検索・申し込み・交際の進行を自分で回せる人には十分ですが、伴走してほしい人は仲人型のほうが結果的に早く安く済むこともあります。</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-medium text-[#8B7355] mb-1">3. 返金保証と割引の条件を必ず確認</h3>
              <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">オンライン3社にはいずれも返金保証があり（スマリッジ・エン婚活=3ヶ月お見合い不成立、naco-do=90日間出会えなければ全額）、乗りかえ割・年齢割などの割引も随時あります。適用条件は入会前に書面で確認しましょう。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-[#FAFAF8] rounded-xl border border-gray-100">
                <summary className="cursor-pointer px-5 py-4 font-normal text-[#2C2C2C] flex items-center justify-between tracking-wider text-sm">
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-[#8B7355] text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-[#2C2C2C]/60 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-light mb-4 tracking-widest">あわせて読みたい</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link href="/compare/online/" className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm hover:border-[#8B7355] hover:text-[#8B7355] transition-colors tracking-wider">オンライン型比較</Link>
            <Link href="/knowledge/cost/" className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm hover:border-[#8B7355] hover:text-[#8B7355] transition-colors tracking-wider">料金相場の解説</Link>
            <Link href="/knowledge/how-to-choose/" className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm hover:border-[#8B7355] hover:text-[#8B7355] transition-colors tracking-wider">相談所の選び方</Link>
            <Link href="/compare/" className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm hover:border-[#8B7355] hover:text-[#8B7355] transition-colors tracking-wider">料金比較一覧</Link>
          </div>
        </section>

        <A8Banner ad="nacodo" />
      </main>
    </>
  );
}
