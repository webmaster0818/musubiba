import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import A8Banner from "@/components/A8Banner";

export const metadata: Metadata = {
  title: "IBJメンバーズとムスベルどっちがいい？直営と加盟店の違い・成婚までの総額を徹底比較【2026年】",
  description:
    "IBJメンバーズ（株式会社IBJ直営）とムスベル（IBJ含む複数連盟加盟の加盟店）を比較。同じIBJネットワーク（110,420名・2026年7月時点）で活動できる2社の「直営と加盟店」の仕組みの違い、初期費用252,450円vs33,000円〜の料金構造、成婚退会時の総額試算（約677,050円vs約547,800円〜）、成婚定義・サポート体制まで検証済みの公表料金ベースで中立に整理します（最新の料金・条件は各公式サイトおよび無料相談でご確認ください）。",
  alternates: { canonical: "/compare/ibj-vs-musbell/" },
};

// 料金は当サイト各レビューの検証値（IBJメンバーズ=2026年8月3日公式サイト確認・税込／ムスベル=2026年時点の調査値）。最新・正確な料金は各公式サイトでご確認ください。
type Row = { item: string; ibj: string; musbell: string };
const rows: Row[] = [
  { item: "運営形態", ibj: "株式会社IBJの直営店（東証プライム上場・証券コード6071）", musbell: "IBJ含む複数連盟に加盟する加盟店（独立運営・全国展開）" },
  { item: "タイプ", ibj: "ハイブリッド型（婚約までのフルサポート）", musbell: "ハイブリッド型（仲人＋データマッチング）" },
  { item: "出会える会員", ibj: "IBJ登録会員110,420名（2026年7月時点）", musbell: "IBJに加えBIU・良縁ネットなど複数連盟の会員基盤（人数は公式参照・要確認）" },
  { item: "店舗", ibj: "全国9店舗（東京・銀座・有楽町・新宿西口・横浜・名古屋・大阪・神戸・福岡）", musbell: "全国に拠点を展開（拠点数は公式参照）" },
  { item: "初期費用", ibj: "252,450円（登録料33,000円＋活動サポート費219,450円）", musbell: "33,000円〜（プランにより115,500円〜の場合あり）" },
  { item: "月会費", ibj: "17,050円", musbell: "15,400円〜（要確認）" },
  { item: "成婚料", ibj: "220,000円（成婚＝婚約時点）", musbell: "330,000円（成婚退会時・要確認）" },
  { item: "お見合い料", ibj: "公式料金ページに都度課金の記載は確認できず", musbell: "別途かかる場合あり（プラン・連盟により異なる・要確認）" },
  { item: "成婚実績の公表", ibj: "成婚退会者の割合1/2以上（定義公開・2025年1月〜12月主要コース実績）", musbell: "非公開" },
];

const totals = [
  { label: "1年活動の総額目安（成婚なし）", ibj: "約457,050円", musbell: "約217,800円〜" },
  { label: "1年で成婚退会した場合の総額目安", ibj: "約677,050円", musbell: "約547,800円〜" },
];

const faqs = [
  {
    q: "IBJメンバーズとムスベルは同じ相手に出会えますか？",
    a: "IBJのネットワーク上では重なります。IBJメンバーズは連盟を運営する株式会社IBJの直営店、ムスベルはIBJを含む複数連盟に加盟する加盟店で、どちらも同じIBJ登録会員110,420名（2026年7月時点）を対象にお相手検索・お見合いができます。加えてムスベルはBIU・良縁ネットなどIBJ以外の連盟会員にも会える点が違いです（正確な会員数は公式参照）。つまり「誰に会えるか」は一部共通で、「いくらで・どんなサポートで活動するか」が2社を分ける比較軸になります。",
  },
  {
    q: "成婚までの総額が安いのはどっちですか？",
    a: "公表料金ベースの試算では、1年で成婚退会した場合の総額目安はムスベル約547,800円〜（初期33,000円〜＋月15,400円×12＋成婚料330,000円）、IBJメンバーズ約677,050円（初期252,450円＋月17,050円×12＋成婚料220,000円）で、ムスベルのほうが約13万円抑えやすい試算です。ただしムスベルはプランにより初期費用115,500円〜の場合やお見合い料が別途かかる場合があり、条件次第で差は縮まります。逆に成婚料単体はIBJメンバーズ220,000円のほうがムスベル330,000円より110,000円低く、初期費用と成婚料のどちらを重く見るかで印象が変わる料金構造です。正確な総額は両社の無料相談で見積もりを取って比べてください。",
  },
  {
    q: "直営のIBJメンバーズと加盟店のムスベル、どちらを選ぶべきですか？",
    a: "実績の透明性と婚約までのフルサポートを重視するならIBJメンバーズが目安です。「成婚＝婚約」と定義した上で成婚退会者の割合1/2以上（2025年1月〜12月主要コース実績）やお見合い実現率94%（2025年1月〜6月・プロフィール公開会員）を公表し、カウンセラー1人あたり約60人の担当制を明示しています。一方、初期費用を33,000円〜に抑えて始めたい人、IBJ以外の連盟会員にも会いたい人、地方在住で全国拠点の対面サポートを受けたい人はムスベルが候補です。どちらも無料相談から始められるため、両方で総額とサポート内容を確認して比べるのが確実です。",
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
          IBJメンバーズとムスベルを比較【2026年】直営と加盟店の違いから総額まで
        </h1>
        <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
          <strong>IBJメンバーズ</strong>は日本最大級の連盟「IBJ（日本結婚相談所連盟）」を運営する株式会社IBJの<strong>直営店</strong>、<strong>ムスベル</strong>はIBJを含む複数連盟に加盟する<strong>加盟店</strong>です。どちらも同じIBJネットワーク（登録会員110,420名・2026年7月時点）で活動できるため、この2社の比較は「誰に会えるか」よりも<strong>「いくらで・どんなサポートで活動するか」</strong>が本質です。初期費用と成婚料が逆方向に差がつく料金構造・成婚定義・サポート体制を、検証済みの公表料金ベースで中立に整理しました。どちらも無料相談から始められるため、迷ったら両方で総額見積もりを取って比べるのが確実です。
        </p>
        <p className="text-xs text-[#2C2C2C]/50 mb-8">
          ※料金は当サイト各レビューの検証値です（IBJメンバーズ=2026年8月3日に公式サイトで確認・税込／ムスベル=2026年時点の調査値）。プラン・連盟・拠点により異なるため、最新の料金・契約条件は各公式サイトおよび無料相談で必ずご確認ください。
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">基本スペック比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">IBJメンバーズ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">ムスベル</th>
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
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">「IBJ直営」と「IBJ加盟店」の仕組みの違い</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
            「IBJ」と名の付く婚活サービスには、株式会社IBJ（東証プライム上場）が直接運営する<strong>直営店＝IBJメンバーズ</strong>と、IBJ連盟に加盟して同じ会員ネットワークを使う<strong>独立した結婚相談所＝IBJ加盟店</strong>の2種類があります。ムスベルは後者にあたり、IBJに加えてBIU（日本ブライダル連盟）・良縁ネットなど<strong>複数の連盟に同時加盟</strong>しているのが特徴です。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#FAF7F2]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">観点</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">IBJメンバーズ（直営）</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">ムスベル（加盟店）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50 align-top"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 whitespace-nowrap">IBJ会員への接点</td><td className="px-4 py-3 text-center" colSpan={2}>同じIBJネットワーク（110,420名・2026年7月時点）で検索・お見合い可能</td></tr>
                <tr className="border-t border-gray-50 align-top"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 whitespace-nowrap">IBJ以外の会員</td><td className="px-4 py-3 text-center">対象外（IBJネットワークのみ）</td><td className="px-4 py-3 text-center">BIU・良縁ネットなど他連盟の会員にも会える（人数は公式参照）</td></tr>
                <tr className="border-t border-gray-50 align-top"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 whitespace-nowrap">料金の決まり方</td><td className="px-4 py-3 text-center">全店共通（初期252,450円・月17,050円・成婚料220,000円）</td><td className="px-4 py-3 text-center">相談所が独自に設定（プランにより幅がある・要確認）</td></tr>
                <tr className="border-t border-gray-50 align-top"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 whitespace-nowrap">サポート</td><td className="px-4 py-3 text-center">カウンセラー1人あたり約60人の担当制・婚約までフルサポート</td><td className="px-4 py-3 text-center">専任仲人の紹介＋データ検索の併用（拠点・担当により特色）</td></tr>
                <tr className="border-t border-gray-50 align-top"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 whitespace-nowrap">実績の公表</td><td className="px-4 py-3 text-center">成婚退会者の割合1/2以上・お見合い実現率94%など定義つきで公表</td><td className="px-4 py-3 text-center">成婚率は非公開</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
            ポイントは、<strong>直営か加盟店かで「出会えるIBJ会員」は変わらない</strong>ということです。差が出るのは、①IBJ以外の連盟会員にも会えるか（ムスベルは会える）、②料金体系（直営は全店共通、加盟店は独自設定）、③サポートの型と実績公表の透明性、の3点です。広告の「会員数No.1」「成婚数No.1」といった表記はIBJ連盟全体の実績を指す場合が多いため、「どの主体の数字か」を確認しながら比較しましょう。
          </p>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※IBJメンバーズの「成婚」はプロポーズ成功後の婚約時点を指し、成婚退会者の割合1/2以上は2025年1月〜12月の主要コース実績（全退会者のうち成婚退会者が占める割合・IBJシステム外での成婚を含む）です。ムスベルの成婚定義・退会条件は無料相談でご確認ください。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">成婚退会までの総額を試算比較（公表料金ベース）</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#FAF7F2]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">ケース</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">IBJメンバーズ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">ムスベル</th>
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
            総額は「初期費用＋月会費×12ヶ月＋成婚料」の試算で、2社の料金構造は<strong>逆方向に差がつく</strong>のが特徴です。IBJメンバーズは初期費用252,450円と入口が高い一方、成婚料は220,000円。ムスベルは初期費用33,000円〜と入口が低い一方、成婚料は330,000円と出口が高めです。1年成婚の試算ではムスベルが約13万円低くなりますが、ムスベルはプランにより初期費用115,500円〜の場合やお見合い料が別途かかる場合があり、活動が長引くほど月会費差も効いてくるため、<strong>想定する活動期間とプラン条件次第で差は変わります</strong>。
          </p>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※IBJメンバーズは税込・2026年8月3日公式サイト確認、ムスベルは2026年時点の調査値（最安プラン基準）。IBJメンバーズには休会制度（1ヶ月単位・最長3ヶ月・休会中の月会費不要）やクーリングオフ・未活動分返金の制度が公式FAQに明示されています。正確な総額は各社の無料相談での見積もりでご確認ください。
          </p>
        </section>

        <section className="mb-10 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-medium text-[#8B7355] mb-3 tracking-wider">IBJメンバーズが向いている人</h2>
            <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>「成婚＝婚約」定義のフルサポートで婚約まで伴走してほしい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>成婚退会者の割合1/2以上など定義つきの公表実績で選びたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>上場企業直営・全店共通料金の分かりやすさを重視したい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>成婚料は低め（220,000円）の体系で出口の負担を抑えたい</li>
            </ul>
            <p className="mt-4 text-sm"><Link href="/review/ibj-members/" className="text-[#8B7355] underline">IBJメンバーズの評判・料金を詳しく見る</Link></p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-medium text-[#8B7355] mb-3 tracking-wider">ムスベルが向いている人</h2>
            <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>初期費用33,000円〜で入口の負担を抑えて始めたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>IBJに加えBIU・良縁ネットなど複数連盟の会員にも会いたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>地方在住で全国拠点の対面サポートを受けたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>仲人の紹介とデータ検索を併用して幅広く探したい</li>
            </ul>
            <p className="mt-4 text-sm"><Link href="/review/musbell/" className="text-[#8B7355] underline">ムスベルの評判・料金を詳しく見る</Link></p>
          </div>
        </section>

        <A8Banner ad="ibj-members" />

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
            <li><Link href="/review/ibj-members/" className="text-[#8B7355] underline">IBJメンバーズの評判・料金を見る（直営と加盟店の違いを詳しく解説）</Link></li>
            <li><Link href="/review/musbell/" className="text-[#8B7355] underline">ムスベルの評判・口コミ・料金を見る（複数連盟・全国拠点）</Link></li>
            <li><Link href="/compare/sunmarie-vs-musbell/" className="text-[#8B7355] underline">サンマリエとムスベルを比較する（仲人型どうしの総額・サポート）</Link></li>
            <li><Link href="/compare/tulip-vs-musbell/" className="text-[#8B7355] underline">ブライダルチューリップとムスベルを比較する（料金・成婚率・サポート）</Link></li>
            <li><Link href="/compare/cheap/" className="text-[#8B7355] underline">安い結婚相談所を1年総額で比較する（初期費用＋月会費＋成婚料）</Link></li>
            <li><Link href="/compare/" className="text-[#8B7355] underline">結婚相談所の料金比較（13社一覧）を見る</Link></li>
          </ul>
        </section>
      </main>
    </>
  );
}
