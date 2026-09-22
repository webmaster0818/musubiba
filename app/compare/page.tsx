import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "結婚相談所の料金比較【2026年】月会費・入会金・成婚料を24社一覧で比べる",
  description:
    "当サイトが公式サイトを実査した結婚相談所24社の月会費・入会金(初期費用)・成婚料を一覧比較。月会費6,980円のオンライン型から入会金25万円超の大手まで、総額を左右する3つの費用をまとめて見比べられます。成婚料の有無で総額が20万円以上変わる点も解説します。",
  alternates: { canonical: "/compare/" },
};

// 料金・成婚率は当サイト各レビューの調査値（2026年時点）。最新・正確な料金は各公式でご確認ください。
type Agency = { slug: string; name: string; monthly: string; initial: string; type: string };
const agencies: Agency[] = [
  { slug: "naco-do", name: "naco-do（ナコード）", monthly: "月額6,980円〜", initial: "比較的安価", type: "オンライン型・低価格" },
  { slug: "seven", name: "結婚相談所セブン", monthly: "月会費7,700円〜", initial: "初期費用30,000円", type: "成果重視・リーズナブル" },
  { slug: "bridal-tulip", name: "Bridalチューリップ", monthly: "月会費7,550円〜12,950円", initial: "入会金105,000円（42歳以上プランは150,800円）／成婚料180,000円", type: "仲人型・3連盟加盟" },
  { slug: "excellence-aoyama", name: "エクセレンス青山", monthly: "月会費7,700円〜", initial: "入会金55,000円〜220,000円（コース別）／成婚料220,000円", type: "ハイスペック特化" },
  { slug: "smartread", name: "スマリッジ", monthly: "月会費9,900円", initial: "初期費用6,600円", type: "低初期費用・オンライン" },
  { slug: "bellroad", name: "ベルロード縁結びサポート", monthly: "月会費9,800円（1ヶ月プラン）", initial: "入会金30,000円／成婚料80,000円", type: "サブスク型・IBJ加盟" },
  { slug: "nagareyama-otakanomori", name: "流山おおたかの森の相談所", monthly: "月会費9,900円", initial: "初期費用165,000円／成婚料220,000円", type: "地域密着・IBJ加盟" },
  { slug: "mars-cafe", name: "マーズカフェ", monthly: "月会費11,000円", initial: "初期費用33,000円", type: "アットホーム型" },
  { slug: "code-for-marriage", name: "Code For Marriage", monthly: "月会費11,000円（スタンダード）", initial: "入会費77,000円／成婚料220,000円", type: "年代別プランあり" },
  { slug: "pitto", name: "P!っと縁結び", monthly: "月会費11,000円〜16,500円", initial: "初期費用88,000円〜110,000円／成婚料220,000円", type: "ピップ運営・全国対応" },
  { slug: "wellsma", name: "ウェルスマ", monthly: "月会費11,800円〜19,800円", initial: "入会金49,800円／成婚料149,800円", type: "オンライン仲人型" },
  { slug: "niko-bridal", name: "nikoブライダル", monthly: "月会費13,200円（男性婚活プラン16,500円）", initial: "初期費用110,000円／成婚料220,000円", type: "大阪・仲人型" },
  { slug: "en-konkatsu", name: "エン婚活エージェント", monthly: "月額14,300円", initial: "比較的安価", type: "オンライン型" },
  { slug: "hero-marriage", name: "ヒーローマリッジ", monthly: "月会費14,300円〜27,500円", initial: "初期費用165,000円／成婚料220,000円", type: "男性専門" },
  { slug: "musbell", name: "ムスベル", monthly: "月会費15,400円", initial: "—", type: "仲人・データ併用型" },
  { slug: "zwei", name: "ツヴァイ", monthly: "月会費15,400円", initial: "—", type: "大手・データマッチング" },
  { slug: "onet", name: "オーネット", monthly: "月会費16,500円", initial: "—", type: "大手・会員数多" },
  { slug: "sunmarie", name: "サンマリエ", monthly: "月会費16,500円", initial: "—", type: "大手・手厚いサポート" },
  { slug: "folli-partner", name: "東京フォリパートナー", monthly: "月会費16,500円〜22,000円", initial: "入会金110,000円〜250,000円／成婚料250,000円〜300,000円", type: "少人数担当・成婚重視" },
  { slug: "ibj-members", name: "IBJメンバーズ", monthly: "月会費17,050円", initial: "初期費用252,450円／成婚料220,000円", type: "IBJ直営・大手" },
  { slug: "partner-agent", name: "パートナーエージェント", monthly: "月会費18,700円", initial: "—", type: "成婚重視・コンシェルジュ" },
  { slug: "fiore", name: "FIORE（フィオーレ）", monthly: "—", initial: "—", type: "ハイブリッド型（成婚率52.8%）" },
  { slug: "marriage-pro", name: "マリッジプロ", monthly: "—", initial: "成婚料22万円", type: "プロカウンセラー専任" },
  { slug: "ringbell", name: "リングベル", monthly: "—", initial: "—", type: "仲人型・地域密着" },
];


const tips = [
  { t: "月会費だけでなく初期費用・成婚料も合算", d: "結婚相談所の総額は「初期費用＋月会費×活動月数＋お見合い料＋成婚料」で決まります。月会費が安くても成婚料が高い（例：22万円）ケースもあるため、活動期間を想定して総額で比較しましょう。" },
  { t: "オンライン型 vs 仲人型で選ぶ", d: "naco-do・エン婚活・スマリッジなどオンライン型は低価格で自分のペースで進められます。サンマリエ・パートナーエージェント等の仲人型は費用は上がりますが、専任カウンセラーの手厚い支援が受けられます。" },
  { t: "成婚率の定義を確認", d: "成婚率は相談所ごとに計算方法（分母）が異なります。数字の大小だけで判断せず、サポート内容・会員数・自分との相性も含めて総合的に選びましょう。" },
  { t: "無料相談・体験で相性を確認", d: "多くの相談所が無料カウンセリングを用意しています。カウンセラーとの相性や会員層は実際に話して確認するのが確実です。複数社を比較しましょう。" },
];

const faqs = [
  { q: "結婚相談所の料金相場はいくらですか？", a: "月会費はオンライン型で月7,000〜10,000円前後（naco-do 6,980円〜、結婚相談所セブン 7,700円〜、スマリッジ 9,900円）、仲人・大手型で月15,000〜19,000円前後（ツヴァイ・ムスベル 15,400円、オーネット・サンマリエ 16,500円、パートナーエージェント 18,700円）が目安です。これに初期費用・成婚料が加わります（2026年時点の当サイト調査値）。" },
  { q: "いちばん安い結婚相談所はどこですか？", a: "本ページ掲載では naco-do（月額6,980円〜）が最も手頃で、次いで結婚相談所セブン（7,700円〜）、スマリッジ（月会費9,900円・初期費用6,600円）が低価格です。ただし総額は活動期間や成婚料で変わるため、月会費だけでなく総額で比較してください。" },
  { q: "オンライン型と仲人型はどちらがいい？", a: "費用を抑えて自分のペースで進めたいならオンライン型（naco-do・エン婚活・スマリッジ等）、専任カウンセラーの手厚いサポートで成婚を目指すなら仲人型（サンマリエ・パートナーエージェント等）が向いています。料金はオンライン型が月7,000〜10,000円、仲人型が月15,000円以上が目安です。" },
];

export default function ComparePage() {
  return (
    <>
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "料金比較" }]} />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">結婚相談所の料金比較【2026年】</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          当サイトが公式サイトを実査した結婚相談所24社の月会費・入会金(初期費用)・成婚料を一覧で比較しました。低価格のオンライン型から手厚い仲人型・大手まで、総額を左右する費用をまとめて見比べられます。
        </p>
        <p className="text-xs text-gray-500 mb-8">料金・成婚率は当サイト各レビューの調査値（2026年時点）です。初期費用・お見合い料・成婚料・最新料金は各公式サイトでご確認ください。「—」は本ページで金額を確定できなかった項目です。</p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">月会費 比較表（安い順）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 p-2 text-left">結婚相談所</th>
                  <th className="border border-gray-200 p-2 text-left">月会費</th>
                  <th className="border border-gray-200 p-2 text-left">初期費用ほか</th>
                  <th className="border border-gray-200 p-2 text-left">タイプ</th>
                </tr>
              </thead>
              <tbody>
                {agencies.map((a) => (
                  <tr key={a.slug}>
                    <td className="border border-gray-200 p-2 font-bold whitespace-nowrap"><Link href={`/review/${a.slug}/`} className="text-rose-700 hover:underline">{a.name}</Link></td>
                    <td className="border border-gray-200 p-2 whitespace-nowrap">{a.monthly}</td>
                    <td className="border border-gray-200 p-2 text-xs">{a.initial}</td>
                    <td className="border border-gray-200 p-2 text-xs">{a.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-500 leading-relaxed">
            ※金額は当サイトが各社公式サイトを実査して記録した税込表記です(確認日は各レビューページに明記)。「—」は公式に金額の掲載を確認できなかったもので、無料という意味ではありません。
            プラン・年齢・コースで変わる社は幅で記載しています。最新の料金は必ず公式サイト・無料相談でご確認ください。
          </p>

          <div className="mt-6 rounded-xl border border-[#E5DCCF] bg-[#FAF7F2] p-6">
            <h3 className="font-bold text-[#A08447] mb-2">月会費だけで比べると、総額を1年で20万円以上読み違える</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              この表で分かるのは、<strong>月会費が安い相談所ほど成婚料が発生する傾向</strong>があることです。たとえば月会費7,550円〜のBridalチューリップは入会金105,000円+成婚料180,000円、
              月会費9,900円の流山おおたかの森の相談所は初期費用165,000円+成婚料220,000円。一方でオーネット・ツヴァイなど大手のデータマッチング型は月会費が15,000円台でも、
              公式サイト上で成婚料の記載を確認できない社があります。
            </p>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              つまり<strong>「月会費×活動月数」だけで比べると総額を読み違えます</strong>。入会金・月会費・お見合い料・成婚料の4つを、想定する活動期間(1年が目安)で足し算してから比べてください。
              成婚率の数字を横並びで比べられない理由は<Link href="/knowledge/seikon-ritsu/" className="text-[#A08447] underline">成婚率の読み方</Link>にまとめています。
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">料金で選ぶときの4つのポイント</h2>
          <div className="space-y-4">
            {tips.map((x, i) => (
              <div key={x.t} className="bg-rose-50 rounded-lg p-5">
                <h3 className="font-bold text-rose-900 mb-1">{i + 1}. {x.t}</h3>
                <p className="text-sm text-gray-700">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white border border-gray-200 rounded-lg p-4">
                <summary className="font-medium text-gray-900 cursor-pointer">{f.q}</summary>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">仲人型で迷ったら：人気2社の比較・個別レビュー</h2>
          <p className="text-sm text-gray-700 mb-4">手厚い仲人サポートのある相談所は、月会費だけでなく成婚料を含む総額で比べるのが大切です。代表的な2社の比較と個別レビューをチェックしましょう。</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/musbell-vs-ringbell/" className="text-rose-700 underline">ムスベルとリングベルを比較する（料金総額・対象年代・特徴）</Link></li>
            <li><Link href="/review/musbell/" className="text-rose-700 underline">ムスベルの評判・料金を見る（全国・複数連盟加盟）</Link></li>
            <li><Link href="/review/ringbell/" className="text-rose-700 underline">リングベルの評判・料金を見る（仲人型・地域密着）</Link></li>
            <li><Link href="/review/marriage-pro/" className="text-rose-700 underline">マリッジプロの評判・料金を見る（プロカウンセラー専任）</Link></li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">はじめての方向け：結婚相談所の基礎知識</h2>
          <p className="text-sm text-gray-700 mb-4">料金の見方やタイプの違い、活動の流れを知っておくと、比較の精度が上がります。基礎から確認したい方はこちらもどうぞ。</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/knowledge/cost/" className="text-rose-700 underline">結婚相談所の料金相場は？初期費用・月会費・成婚料の目安</Link></li>
            <li><Link href="/knowledge/how-to-choose/" className="text-rose-700 underline">結婚相談所の選び方｜仲人型とデータマッチング型の違い</Link></li>
            <li><Link href="/knowledge/flow/" className="text-rose-700 underline">結婚相談所の入会から成婚までの流れ・活動期間の目安</Link></li>
            <li><Link href="/knowledge/" className="text-rose-700 underline">結婚相談所の基礎知識をまとめて見る</Link></li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">各相談所の詳しい口コミ・評判</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {agencies.map((a) => (
              <Link key={a.slug} href={`/review/${a.slug}/`} className="block bg-white border border-gray-200 rounded-lg p-3 text-center font-medium text-gray-700 hover:border-rose-400 hover:text-rose-700 transition-colors">{a.name}</Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
