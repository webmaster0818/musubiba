import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import A8Banner from "@/components/A8Banner";

export const metadata: Metadata = {
  title: "安い結婚相談所はどこ？1年総額で10社比較【2026年】検証済み料金ランキング",
  description:
    "結婚相談所の「安さ」を1年活動の総額（初期費用＋月会費×12＋成婚料）で10社比較。当サイトが各公式サイトで検証した料金のみ掲載（2026年7月確認・税込）。最安はスマリッジの125,400円。お見合い料が都度かかる相談所の注意点、成婚料の有無での逆転、安く始めるコツまで解説します。",
  alternates: { canonical: "/compare/cheap/" },
};

// 全て公式サイトで検証済みの料金（税込）。オンライン3社=2026年7月5日確認／仲人型2社=2026年7月確認／追加5社=2026年7月31日確認。
// 総額は各社の最安プラン基準。お見合い料は回数依存のため総額に含めず列で明示。
type Row = {
  slug: string;
  name: string;
  type: string;
  initial: string;
  monthly: string;
  omiai: string;
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
    omiai: "月8件まで0円",
    seikon: "0円",
    total1y: "125,400円",
    totalSeikon: "125,400円",
    note: "お見合い料は月8件まで0円。3ヶ月お見合い成立なしで返金保証。U28・エリア・シングル親の割引あり（各月1,100円引き）",
  },
  {
    slug: "excellence-aoyama",
    name: "エクセレンス青山",
    type: "仲人型（4連盟）",
    initial: "55,000円",
    monthly: "7,700円",
    omiai: "女性5,500円／男性8,800円（都度）",
    seikon: "220,000円",
    total1y: "147,400円",
    totalSeikon: "367,400円",
    note: "スタンダードコース基準。月会費7,700円と月額は安いが、お見合い料が1回ごとにかかるため活動量次第で総額が増える点に注意。20代限定トライアル11,000円（1ヶ月）あり",
  },
  {
    slug: "wellsma",
    name: "ウェルスマ",
    type: "オンライン仲人型（IBJ）",
    initial: "49,800円",
    monthly: "11,800円",
    omiai: "0円",
    seikon: "149,800円",
    total1y: "191,400円",
    totalSeikon: "341,200円",
    note: "マイペースプラン基準。来店不要でIBJ約9.6万名に申し込めて、成婚料149,800円は仲人型相場（20万円前後）より低め。専任カウンセラー付き",
  },
  {
    slug: "bridal-tulip",
    name: "ブライダルチューリップ",
    type: "仲人型（3連盟）",
    initial: "105,000円",
    monthly: "7,550円",
    omiai: "6,100円または8,800円／件（都度）",
    seikon: "180,000円",
    total1y: "195,600円",
    totalSeikon: "375,600円",
    note: "42歳未満のAプラン基準（42歳以上は入会金150,800円）。お見合い料が都度かかるため、月3件以上ならBプラン（月12,950円・お見合い6,100円）のほうが安くなる場合あり",
  },
  {
    slug: "code-for-marriage",
    name: "Code For Marriage（エンジニア専門）",
    type: "仲人型（IBJ）",
    initial: "77,000円",
    monthly: "11,000円",
    omiai: "0円",
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
    omiai: "0円",
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
    omiai: "0円",
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
    omiai: "0円",
    seikon: "220,000円",
    total1y: "283,800円",
    totalSeikon: "503,800円",
    note: "カウンセラー歴23年の代表による1名運営。流山・柏・野田・松戸へ出張対応",
  },
  {
    slug: "folli-partner",
    name: "フォリパートナー",
    type: "仲人型（IBJ）",
    initial: "110,000円",
    monthly: "16,500円",
    omiai: "0円",
    seikon: "250,000円",
    total1y: "308,000円",
    totalSeikon: "558,000円",
    note: "ライトコース基準。毎月の紹介人数保証（コース別1〜3名）が特徴。2年目以降は月会費のみで継続可",
  },
  {
    slug: "hero-marriage",
    name: "ヒーローマリッジ（男性専門）",
    type: "仲人型（IBJ）",
    initial: "165,000円",
    monthly: "14,300円",
    omiai: "0円",
    seikon: "220,000円",
    total1y: "336,600円",
    totalSeikon: "556,600円",
    note: "ライトプラン基準・男性専門。プロカメラマン撮影が何度でも無料。自社イベント経由の成婚は成婚料50%割引の公式記載あり",
  },
];

const faqs = [
  {
    q: "一番安い結婚相談所はどこですか？",
    a: "当サイトが公式サイトで検証した10社の範囲（2026年7月確認・税込）では、スマリッジが1年総額125,400円（登録料6,600円＋月会費9,900円×12・成婚料0円）で最安です。オンライン完結型のため店舗サポートはありませんが、3ヶ月お見合い成立なしの返金保証があります。専任カウンセラーの仲人サポート付きで安く始めたい場合は、ウェルスマ（1年総額191,400円・お見合い料0円）が検証済みでは最安水準です。",
  },
  {
    q: "「月会費が安い」と「総額が安い」は違うのですか？",
    a: "違います。結婚相談所の費用は初期費用＋月会費×活動月数＋お見合い料＋成婚料で決まるため、月会費が安くても他の費用で総額が逆転します。例えばエクセレンス青山とブライダルチューリップは月会費7千円台ですが、お見合い料が1回ごと（5,500〜8,800円）にかかるため、月2回お見合いすると年間13万〜21万円が総額に上乗せされます。本ページの表は「お見合い料」を列で明示し、「1年総額」と「成婚した場合の総額」を分けて掲載しています。",
  },
  {
    q: "成婚料0円の相談所と成婚料ありの相談所、どちらが得ですか？",
    a: "成婚までの期間と重視するサポートによります。オンライン型（成婚料0円）は総額が安い一方、活動は自分主導が基本です。仲人型（成婚料あり）は費用が高いぶん、お相手紹介から交際・プロポーズまで伴走してもらえます。「安く長く」ならオンライン型、「多少かかっても早く決めたい」なら仲人型という整理が現実的です。",
  },
  {
    q: "表の料金は正確ですか？",
    a: "掲載料金はすべて当サイトが各公式サイトで確認した公表値です（オンライン3社は2026年7月5日、仲人型2社は2026年7月、追加5社［エクセレンス青山・ウェルスマ・ブライダルチューリップ・フォリパートナー・ヒーローマリッジ］は2026年7月31日確認・税込）。ただし料金は改定されることがあり、キャンペーン（初月0円等）も随時変わるため、申し込み前に必ず公式サイト・無料相談で最新の料金をご確認ください。",
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
          <h2 className="text-base font-medium text-[#8B7355] mb-3 tracking-widest">結論（検証済み10社・税込）</h2>
          <ul className="space-y-2 text-sm text-[#2C2C2C]/80">
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>1年総額の最安はスマリッジ 125,400円</strong>（成婚料0円なので成婚しても増えません）</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span>仲人サポート付きで安く始めるなら<strong>エクセレンス青山（1年147,400円・ただしお見合い料都度）</strong>か<strong>ウェルスマ（1年191,400円・お見合い料0円）</strong>が検証済みの安値圏</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span>⚠️ <strong>月会費の安さに注意</strong>：月7千円台でもお見合い料が都度かかる相談所（エクセレンス青山・ブライダルチューリップ）は、活動量次第で総額が数万円単位で増えます</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span>成婚時総額の検証レンジは12.5万〜55.8万円＝<strong>差は最大約4.5倍</strong>。仲人型は高いぶん伴走サポートが厚く、<strong>「安さ」と「手厚さ」はトレードオフ</strong>です</span></li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">1年総額の安い順ランキング（検証済み10社）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#FAF7F2] text-left">
                  <th className="px-3 py-3">相談所</th>
                  <th className="px-3 py-3">タイプ</th>
                  <th className="px-3 py-3">初期費用</th>
                  <th className="px-3 py-3">月会費</th>
                  <th className="px-3 py-3">お見合い料</th>
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
                    <td className="px-3 py-3">{r.omiai}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{r.seikon}</td>
                    <td className="px-3 py-3 whitespace-nowrap font-semibold text-[#8B7355]">{r.total1y}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{r.totalSeikon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-3 leading-relaxed">
            ※1年総額＝初期費用＋月会費×12ヶ月（各社の最安プラン基準・成婚料0円の場合）。「成婚した場合」＝1年活動して成婚退会したときの総額（成婚料を加算）。<strong>お見合い料（都度払いの相談所）・オプション・キャンペーンは含みません</strong>。料金は当サイトが各公式サイトで確認した公表値（オンライン3社=2026年7月5日／仲人型2社=2026年7月／エクセレンス青山・ウェルスマ・ブライダルチューリップ・フォリパートナー・ヒーローマリッジ=2026年7月31日確認・税込）ですが、改定される場合があるため申込前に各公式サイトでご確認ください。
          </p>
        </section>

        <A8Banner ad="wellsma" />

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
              <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">オンライン型が安いのは店舗と専任仲人のコストがないから。検索・申し込み・交際の進行を自分で回せる人には十分ですが、伴走してほしい人は仲人型のほうが結果的に早く安く済むこともあります。来店不要のオンライン型4社（スマリッジ・ウェルスマ・エン婚活・naco-do）のサポート形式・会員基盤まで含めた比較は<Link href="/compare/online/" className="text-[#8B7355] underline">オンライン結婚相談所の比較</Link>で確認できます。</p>
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
