import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ムスベルとリングベルを比較【2026年】料金総額・対象年代・特徴の違いを中立解説",
  description:
    "ムスベルとリングベルを、月会費・初期費用・成婚料・総額目安・対象年代・タイプで中立に比較。全国・複数連盟加盟のムスベルと、仲人型・地域密着のリングベル、どちらが自分に合うかを公表料金ベースで整理します（最新の料金・条件は各公式サイトおよび無料相談でご確認ください）。",
  alternates: { canonical: "/compare/musbell-vs-ringbell/" },
};

// 料金は当サイト各レビューの調査・公表値（2026年時点）。最新・正確な料金は各公式サイトでご確認ください。
type Row = { item: string; musbell: string; ringbell: string };
const rows: Row[] = [
  { item: "タイプ", musbell: "ハイブリッド型（仲人＋データマッチング）", ringbell: "仲人型（地域密着）" },
  { item: "対応エリア", musbell: "全国対応（拠点数は公式参照）", ringbell: "関東・関西を中心に展開" },
  { item: "会員数", musbell: "複数連盟加盟で業界最大級（人数は公式参照・要確認）", ringbell: "非公開" },
  { item: "初期費用", musbell: "33,000円〜（プランにより変動・要確認）", ringbell: "88,000円〜" },
  { item: "月会費", musbell: "15,400円〜（要確認）", ringbell: "13,200円〜" },
  { item: "成婚料", musbell: "330,000円（成婚退会時・要確認）", ringbell: "220,000円（成婚退会時）" },
  { item: "対象年代", musbell: "20〜60代（中心は30代〜40代）", ringbell: "20〜50代（中心は30代〜40代）" },
  { item: "成婚率", musbell: "非公開", ringbell: "非公開" },
];

const totals = [
  { label: "1年活動の総額目安（成婚なし）", musbell: "約217,800円〜", ringbell: "約246,400円〜" },
  { label: "1年で成婚した場合の総額目安", musbell: "約547,800円〜", ringbell: "約466,400円〜" },
];

const faqs = [
  {
    q: "ムスベルとリングベル、料金が安いのはどちら？",
    a: "月会費・初期費用はリングベル（月13,200円〜・初期88,000円〜）よりムスベル（月15,400円〜・初期33,000円〜）の方が初期費用は低めです。一方で成婚料はムスベル330,000円・リングベル220,000円で、成婚まで進んだ場合の総額はリングベルの方が安くなる目安です（1年で成婚した場合：ムスベル約547,800円〜、リングベル約466,400円〜）。総額は活動期間で変わるため、初期費用＋月会費×活動月数＋成婚料で比較してください（公表料金にもとづく2026年時点の目安・要確認）。",
  },
  {
    q: "会員数（出会いの多さ）で選ぶならどちら？",
    a: "出会いの母数を重視するなら、複数の連盟に加盟し業界最大級の会員基盤にアクセスできるムスベルが向いています（正確な人数は公式サイトで要確認）。リングベルは会員数を非公開としており、数より質・地域密着の紹介を重視するスタイルです。",
  },
  {
    q: "地方在住でも使えるのはどちら？",
    a: "全国に拠点を展開するムスベルは地方在住の方でも対面サポートを受けやすいのが特徴です。リングベルは関東・関西を中心とした展開のため、エリア外の方は対応可否を無料相談で確認することをおすすめします。",
  },
  {
    q: "結局どちらを選べばいい？",
    a: "出会いの多さ・全国対応・仲人とデータ検索の併用を重視するならムスベル、数より質の仲人サポートと地元での出会い・成婚時の総額の抑えやすさを重視するならリングベルが目安です。どちらも無料相談で総額の見積もりと担当者との相性を確認してから決めるのが確実です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function MusbellVsRingbellPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "料金比較", href: "/compare/" }, { name: "ムスベルとリングベルを比較" }]} />

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-light mb-4 tracking-wide text-[#2C2C2C]">
          ムスベルとリングベルを比較【2026年】
        </h1>
        <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
          仲人サポートのある<strong>ムスベル</strong>（全国・複数連盟加盟のハイブリッド型）と<strong>リングベル</strong>（仲人型・地域密着）を、料金総額・対象年代・特徴で中立に比較しました。出会いの多さで選ぶか、数より質・地元での出会いで選ぶかで、向き不向きが分かれます。
        </p>
        <p className="text-xs text-[#2C2C2C]/50 mb-8">
          ※料金は当サイト各レビューの調査・公表値（2026年時点）です。初期費用・お見合い料・成婚料・最新料金はプラン・連盟・拠点により異なるため、各公式サイトおよび無料相談で必ずご確認ください。
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">基本スペック比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">ムスベル</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">リングベル</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.item} className="border-t border-gray-50 align-top">
                    <td className="px-4 py-3 font-medium text-[#2C2C2C]/70 whitespace-nowrap">{r.item}</td>
                    <td className="px-4 py-3 text-center">{r.musbell}</td>
                    <td className="px-4 py-3 text-center">{r.ringbell}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">総額の目安を比較（公表料金ベース）</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#FAF7F2]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">ケース</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">ムスベル</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">リングベル</th>
                </tr>
              </thead>
              <tbody>
                {totals.map((t) => (
                  <tr key={t.label} className="border-t border-gray-50">
                    <td className="px-4 py-3 font-medium text-[#2C2C2C]/70">{t.label}</td>
                    <td className="px-4 py-3 text-center">{t.musbell}</td>
                    <td className="px-4 py-3 text-center">{t.ringbell}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※総額は「初期費用＋月会費×12ヶ月＋成婚料」で試算した公表料金ベースの目安です。お見合い料などが別途かかる場合があり、プラン・連盟・拠点により変動します。正確な総額は無料相談での見積もりでご確認ください（2026年時点・要確認）。初期費用はムスベルが低め、成婚まで進んだ場合の総額はリングベルが抑えやすい傾向です。
          </p>
        </section>

        <section className="mb-10 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-medium text-[#8B7355] mb-3 tracking-wider">ムスベルが向いている人</h2>
            <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>出会いの母数・選択肢の多さを重視したい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>地方在住で全国対応・対面サポートを受けたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>仲人の紹介とデータ検索を併用したい</li>
            </ul>
            <p className="mt-4 text-sm"><Link href="/review/musbell/" className="text-[#8B7355] underline">ムスベルの評判・料金を詳しく見る</Link></p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-medium text-[#8B7355] mb-3 tracking-wider">リングベルが向いている人</h2>
            <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>数より質の仲人サポートを重視したい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>関東・関西で地元の出会いを探したい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>成婚まで進んだ場合の総額を抑えたい</li>
            </ul>
            <p className="mt-4 text-sm"><Link href="/review/ringbell/" className="text-[#8B7355] underline">リングベルの評判・料金を詳しく見る</Link></p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white border border-gray-100 rounded-lg p-4">
                <summary className="font-medium text-[#2C2C2C] cursor-pointer">{f.q}</summary>
                <p className="text-sm text-[#2C2C2C]/70 mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-lg bg-[#FAF7F2] border border-gray-100 p-6">
          <h2 className="font-medium mb-3">関連ページ</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/review/musbell/" className="text-[#8B7355] underline">ムスベルの評判・口コミ・料金を見る</Link></li>
            <li><Link href="/review/ringbell/" className="text-[#8B7355] underline">リングベルの評判・口コミ・料金を見る</Link></li>
            <li><Link href="/review/marriage-pro/" className="text-[#8B7355] underline">マリッジプロの評判・口コミ・料金を見る（プロカウンセラー専任）</Link></li>
            <li><Link href="/compare/" className="text-[#8B7355] underline">結婚相談所の料金比較（13社一覧）を見る</Link></li>
          </ul>
        </section>
      </main>
    </>
  );
}
