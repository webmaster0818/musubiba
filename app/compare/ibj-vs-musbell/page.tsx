import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import A8Banner from "@/components/A8Banner";

export const metadata: Metadata = {
  title: "IBJメンバーズとムスベルの比較｜直営と加盟店の違い・成婚までの総額【2026年】",
  description:
    "IBJメンバーズ（IBJ直営）とムスベル（IBJ含む複数連盟加盟の加盟店）を比較しています。同じIBJネットワークで活動できる2社の直営と加盟店の違い、入会時費用252,450円vs181,500円〜、成婚退会時の総額試算（約677,050円vs約709,500円〜）を公表料金にもとづいて整理しています。",
  alternates: { canonical: "/compare/ibj-vs-musbell/" },
};

// 料金は当サイト各レビューの検証値（IBJメンバーズ=2026年8月3日公式サイト確認・税込／ムスベル=2026年10月23日公式確認・税込）。最新・正確な料金は各公式サイトでご確認ください。
type Row = { item: string; ibj: string; musbell: string };
const rows: Row[] = [
  { item: "運営形態", ibj: "株式会社IBJの直営店（東証プライム上場・証券コード6071）", musbell: "IBJ含む複数連盟に加盟する加盟店（独立運営・全国展開）" },
  { item: "タイプ", ibj: "ハイブリッド型（婚約までのフルサポート）", musbell: "ハイブリッド型（仲人＋データマッチング）" },
  { item: "出会える会員", ibj: "IBJ登録会員110,420名（2026年7月時点）", musbell: "IBJに加えJBU・BIU・TMSの4連盟（公式掲載の会員数94,763人・2024年10月時点の値）" },
  { item: "店舗", ibj: "全国9店舗（東京・銀座・有楽町・新宿西口・横浜・名古屋・大阪・神戸・福岡）", musbell: "全国に拠点を展開（拠点数は公式サイト参照）" },
  { item: "初期費用", ibj: "252,450円（登録料33,000円＋活動サポート費219,450円）", musbell: "181,500円〜（初期費用33,000円＋入会金148,500円・カジュアルコース）" },
  { item: "月会費", ibj: "17,050円", musbell: "16,500円〜（エクセレントコースは17,000円）" },
  { item: "成婚料", ibj: "220,000円（成婚＝婚約時点）", musbell: "330,000円（成婚退会時・全コース共通）" },
  { item: "お見合い料", ibj: "公式料金ページに都度課金の記載は確認できず", musbell: "カジュアルコースは11,000円/回（レギュラー・エクセレントは無料）" },
  { item: "成婚実績の公表", ibj: "成婚退会者の割合1/2以上（定義公開・2025年1月〜12月主要コース実績）", musbell: "非公開" },
];

const totals = [
  { label: "1年活動の総額目安（成婚なし）", ibj: "約457,050円", musbell: "約379,500円〜" },
  { label: "1年で成婚退会した場合の総額目安", ibj: "約677,050円", musbell: "約709,500円〜" },
];

const faqs = [
  {
    q: "IBJメンバーズとムスベルは同じ相手に出会えますか？",
    a: "IBJのネットワーク上では重なります。IBJメンバーズは連盟を運営する株式会社IBJの直営店、ムスベルはIBJを含む複数連盟に加盟する加盟店で、どちらも同じIBJ登録会員110,420名（2026年7月時点）を対象にお相手検索・お見合いができます。加えてムスベルは、公式サイトでJBU・BIU・TMSなどIBJ以外の連盟も利用できると記載しています（一部の連盟は地域により利用不可、または別途オプション費用が必要）。そのため、出会える相手は一部共通しており、料金とサポート内容が2社を比較する際の主な観点になります。",
  },
  {
    q: "成婚までの総額が安いのはどちらですか？",
    a: "公表料金ベースの試算では、1年で成婚退会した場合の総額目安はIBJメンバーズ約677,050円（初期252,450円＋月17,050円×12＋成婚料220,000円）、ムスベル約709,500円〜（カジュアルコース：初期181,500円＋月16,500円×12＋成婚料330,000円）で、IBJメンバーズのほうが約3万円低い試算です。一方、成婚前の1年間の負担はムスベル約379,500円〜、IBJメンバーズ約457,050円で、ムスベルのほうが約8万円低くなります。ムスベルのカジュアルコースはお見合い1回ごとに11,000円がかかるため、活動量が多いほどムスベルの総額は増えます（ムスベルは2026年10月23日公式確認）。正確な総額は、両社の無料相談で見積もりを取って比較してください。",
  },
  {
    q: "直営のIBJメンバーズと加盟店のムスベル、どちらを選ぶべきですか？",
    a: "実績の透明性と婚約までのフルサポートを重視する方には、IBJメンバーズが適しています。「成婚＝婚約」と定義したうえで成婚退会者の割合1/2以上（2025年1月〜12月主要コース実績）やお見合い実現率94%（2025年1月〜6月・プロフィール公開会員）を公表し、カウンセラー1人あたり約60人の担当制を明示しています。一方、入会時費用と月会費を抑えて活動したい方、IBJ以外の連盟会員にも出会いたい方、地方在住で全国拠点の対面サポートを受けたい方には、ムスベルが適しています。どちらも無料相談から始められるため、両社で総額とサポート内容を確認したうえで比較することをおすすめします。",
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

export default function IbjVsMusbellPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "料金比較", href: "/compare/" }, { name: "IBJメンバーズとムスベルを比較" }]} />

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-light mb-4 tracking-wide text-[#2C2C2C]">
          IBJメンバーズとムスベルの比較【2026年】直営と加盟店の違いと総額
        </h1>
        <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
          <strong>IBJメンバーズ</strong>は結婚相談所の連盟「IBJ（日本結婚相談所連盟）」を運営する株式会社IBJの<strong>直営店</strong>、<strong>ムスベル</strong>はIBJを含む複数連盟に加盟する<strong>加盟店</strong>です。どちらも同じIBJネットワーク（登録会員110,420名・2026年7月時点）で活動できるため、この2社の比較では、出会える相手よりも<strong>料金とサポート内容</strong>が重要な観点になります。当サイトでは、初期費用と成婚料で差の方向が逆になる料金構造・成婚定義・サポート体制を、検証済みの公表料金にもとづいて中立的に整理しています。どちらも無料相談から始められるため、迷われた場合は両社で総額の見積もりを取り、比較することをおすすめします。
        </p>
        <p className="text-xs text-[#2C2C2C]/50 mb-8">
          ※料金は当サイト各レビューの検証値です（IBJメンバーズ=2026年8月3日に公式サイトで確認・税込／ムスベル=2026年10月23日公式確認・税込）。プラン・連盟・拠点により異なるため、最新の料金・契約条件は各公式サイトおよび無料相談で必ずご確認ください。
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">基本スペック比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">IBJメンバーズ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">ムスベル</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.item} className="border-t border-gray-50 align-top">
                    <td className="px-4 py-3 font-medium text-[#2C2C2C]/70 whitespace-nowrap">{r.item}</td>
                    <td className="px-4 py-3 text-center">{r.ibj}</td>
                    <td className="px-4 py-3 text-center">{r.musbell}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">「IBJ直営」と「IBJ加盟店」の仕組みの違い</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
            「IBJ」と名の付く婚活サービスには、株式会社IBJ（東証プライム上場）が直接運営する<strong>直営店＝IBJメンバーズ</strong>と、IBJ連盟に加盟して同じ会員ネットワークを使う<strong>独立した結婚相談所＝IBJ加盟店</strong>の2種類があります。ムスベルは後者にあたり、公式サイトではIBJに加えてJBU・BIU・TMSの<strong>4連盟を利用できる</strong>と記載しているのが特徴です。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#FAF7F2]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">観点</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">IBJメンバーズ（直営）</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">ムスベル（加盟店）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50 align-top"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 whitespace-nowrap">IBJ会員への接点</td><td className="px-4 py-3 text-center" colSpan={2}>同じIBJネットワーク（110,420名・2026年7月時点）で検索・お見合い可能</td></tr>
                <tr className="border-t border-gray-50 align-top"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 whitespace-nowrap">IBJ以外の会員</td><td className="px-4 py-3 text-center">対象外（IBJネットワークのみ）</td><td className="px-4 py-3 text-center">JBU・BIU・TMSの会員にも出会える（一部の連盟は地域により利用不可・別途費用あり）</td></tr>
                <tr className="border-t border-gray-50 align-top"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 whitespace-nowrap">料金の決まり方</td><td className="px-4 py-3 text-center">全店共通（初期252,450円・月17,050円・成婚料220,000円）</td><td className="px-4 py-3 text-center">相談所が独自に設定（3コース：入会時費用181,500円〜484,000円・月16,500円〜17,000円・成婚料330,000円）</td></tr>
                <tr className="border-t border-gray-50 align-top"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 whitespace-nowrap">サポート</td><td className="px-4 py-3 text-center">カウンセラー1人あたり約60人の担当制・婚約までフルサポート</td><td className="px-4 py-3 text-center">専任仲人の紹介＋データ検索の併用（拠点・担当により特色）</td></tr>
                <tr className="border-t border-gray-50 align-top"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 whitespace-nowrap">実績の公表</td><td className="px-4 py-3 text-center">成婚退会者の割合1/2以上・お見合い実現率94%などを定義とともに公表</td><td className="px-4 py-3 text-center">成婚率は非公開</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
            重要な点は、<strong>直営か加盟店かによって、出会えるIBJ会員は変わらない</strong>ということです。差が生じるのは、①IBJ以外の連盟会員にも出会えるか（ムスベルは出会えます）、②料金体系（直営は全店共通、加盟店は独自設定）、③サポートの型と実績公表の透明性、の3点です。広告の「会員数No.1」「成婚数No.1」といった表記はIBJ連盟全体の実績を指す場合が多いため、どの主体の数字であるかを確認しながら比較することをおすすめします。
          </p>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※IBJメンバーズの「成婚」はプロポーズ成功後の婚約時点を指し、成婚退会者の割合1/2以上は2025年1月〜12月の主要コース実績（全退会者のうち成婚退会者が占める割合・IBJシステム外での成婚を含む）です。ムスベルの成婚定義・退会条件は無料相談でご確認ください。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">成婚退会までの総額を試算比較（公表料金ベース）</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#FAF7F2]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">ケース</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">IBJメンバーズ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">ムスベル</th>
                </tr>
              </thead>
              <tbody>
                {totals.map((t) => (
                  <tr key={t.label} className="border-t border-gray-50">
                    <td className="px-4 py-3 font-medium text-[#2C2C2C]/70">{t.label}</td>
                    <td className="px-4 py-3 text-center">{t.ibj}</td>
                    <td className="px-4 py-3 text-center">{t.musbell}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
            総額は「初期費用＋月会費×12ヶ月＋成婚料」の試算で、2社の料金構造は<strong>差の方向が逆になる</strong>点が特徴です。IBJメンバーズは初期費用252,450円と入会時の負担が大きい一方、成婚料は220,000円です。ムスベルは入会時費用181,500円〜（カジュアルコース）と入会時の負担が小さい一方、成婚料は330,000円と成婚時の負担が大きめです。成婚前の1年間はムスベルが約8万円低く、1年で成婚した場合はIBJメンバーズが約3万円低くなります。ムスベルのカジュアルコースはお見合い料11,000円/回がかかり、レギュラーコースは入会時費用363,000円のため、<strong>想定する活動期間とプラン条件次第で差は変わります</strong>。
          </p>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※IBJメンバーズは税込・2026年8月3日公式サイト確認、ムスベルは税込・2026年10月23日公式サイト確認（カジュアルコース基準）です。IBJメンバーズには休会制度（1ヶ月単位・最長3ヶ月・休会中の月会費不要）やクーリングオフ・未活動分返金の制度が公式FAQに明示されています。正確な総額は各社の無料相談での見積もりでご確認ください。
          </p>
        </section>

        <section className="mb-10 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-medium text-[#A08447] mb-3 tracking-wider">IBJメンバーズが向いている方</h2>
            <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>「成婚＝婚約」と定義したフルサポートで、婚約まで支援を受けたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>成婚退会者の割合1/2以上など、定義が明記された公表実績で選びたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>上場企業直営・全店共通料金の分かりやすさを重視したい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>成婚料が低め（220,000円）で、1年で成婚した場合の総額も抑えたい</li>
            </ul>
            <p className="mt-4 text-sm"><Link href="/review/ibj-members/" className="text-[#A08447] underline">IBJメンバーズの評判・料金を詳しく見る</Link></p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-medium text-[#A08447] mb-3 tracking-wider">ムスベルが向いている方</h2>
            <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>入会時費用を抑えて始めたい（カジュアルコース181,500円）</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>IBJに加えJBU・BIU・TMSの会員にも出会いたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>地方在住で全国拠点の対面サポートを受けたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>仲人の紹介とデータ検索を併用して幅広く探したい</li>
            </ul>
            <p className="mt-4 text-sm"><Link href="/review/musbell/" className="text-[#A08447] underline">ムスベルの評判・料金を詳しく見る</Link></p>
          </div>
        </section>

        <A8Banner ad="ibj-members" />

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">よくある質問</h2>
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
            <li><Link href="/review/ibj-members/" className="text-[#A08447] underline">IBJメンバーズの評判・料金を見る（直営と加盟店の違いを詳しく解説）</Link></li>
            <li><Link href="/review/musbell/" className="text-[#A08447] underline">ムスベルの評判・口コミ・料金を見る（複数連盟・全国拠点）</Link></li>
            <li><Link href="/compare/sunmarie-vs-musbell/" className="text-[#A08447] underline">サンマリエとムスベルを比較する（仲人型どうしの総額・サポート）</Link></li>
            <li><Link href="/compare/tulip-vs-musbell/" className="text-[#A08447] underline">ブライダルチューリップとムスベルを比較する（料金・成婚率・サポート）</Link></li>
            <li><Link href="/compare/cheap/" className="text-[#A08447] underline">安い結婚相談所を1年総額で比較する（初期費用＋月会費＋成婚料）</Link></li>
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（24社一覧）を見る</Link></li>
          </ul>
        </section>
      </main>
    </>
  );
}
