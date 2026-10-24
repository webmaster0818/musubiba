import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import A8Banner from "@/components/A8Banner";
import { FEE_CHECKED, jpDate, planFee, planTotal, PLAN_SCENARIO, yen } from "@/data/fees";

// 料金は共通データ data/fees.ts（PLAN_FEES・FEE_CHECKED）から計算する。金額をこのページに直書きしない。
const tA = planFee("bridal-tulip", "Aプラン");
const tB = planFee("bridal-tulip", "Bプラン");
const t42 = planFee("bridal-tulip", "42歳以上プラン");
const mC = planFee("musbell", "カジュアルコース");
const tulipChecked = jpDate(FEE_CHECKED["bridal-tulip"].date);
const musbellChecked = jpDate(FEE_CHECKED["musbell"].date);
const base = { omiai: 0, kosai: 0 };
const tulipNoSeikon = planTotal(tA, { ...base, seikon: false });
const musbellNoSeikon = planTotal(mC, { ...base, seikon: false });
const tulipSeikon = planTotal(tA, base);
const musbellSeikon = planTotal(mC, base);
const tulipScenario = planTotal(tA);
const tulipScenarioB = planTotal(tB);
const musbellScenario = planTotal(mC);
const scenarioLabel = `お見合い年${PLAN_SCENARIO.omiai}件・交際成立${PLAN_SCENARIO.kosai}件と仮定`;

export const metadata: Metadata = {
  title: "ブライダルチューリップとムスベルの比較｜料金・成婚率・サポートの違い【2026年】",
  description:
    "ブライダルチューリップとムスベルを初期費用・月会費・成婚料・お見合い料・1年総額・成婚率の公表定義・店舗/オンライン対応の観点から中立的に比較しています。成婚まで含めた総額を抑えやすいチューリップと、4連盟を使え全国で活動しやすいムスベルを、公表料金にもとづいて整理しています。最新情報は各公式サイトでご確認ください。",
  alternates: { canonical: "/compare/tulip-vs-musbell/" },
};

type Row = { item: string; tulip: string; musbell: string };
const rows: Row[] = [
  { item: "タイプ", tulip: "仲人型（IBJ・SCRUM・CONNECT-shipの3連盟加盟）", musbell: "ハイブリッド型（仲人＋データマッチング・複数連盟加盟）" },
  { item: "店舗・オンライン対応", tulip: "高田馬場サロン1拠点＋オンライン対応", musbell: "全国に拠点を展開（拠点数は公式サイト参照）＋オンライン対応" },
  { item: "会員数", tulip: "紹介可能会員 約19万名（3連盟合計・2026年1月時点の公式表記）", musbell: "94,763人（JBU・BIU・IBJ・TMSの4連盟・公式掲載の2024年10月時点の値）" },
  { item: "初期費用（入会金）", tulip: "105,000円（42歳以上プランは150,800円）", musbell: "181,500円〜（初期費用33,000円＋入会金148,500円・カジュアルコース）" },
  { item: "月会費", tulip: "7,550円〜12,950円（プランにより異なる）", musbell: "16,500円〜（エクセレントコースは17,000円）" },
  { item: "お見合い料", tulip: `${yen(tB.perOmiai)}または${yen(tA.perOmiai)}／件（都度払い）`, musbell: `カジュアルコースは${yen(mC.perOmiai)}/回（レギュラー・エクセレントは無料）` },
  { item: "交際成立時の手数料", tulip: `Aプラン${yen(tA.perKosai!)}・Bプラン${yen(tB.perKosai!)}・42歳以上プラン${yen(t42.perKosai!)}／件（直コンタクト事務手数料及び交際開始アドバイス料）`, musbell: "公式の料金表に該当する項目はありません（2026年10月24日確認）" },
  { item: "成婚料", tulip: "180,000円（全プラン共通）", musbell: "330,000円（成婚退会時・全コース共通）" },
  { item: "成婚率の公表", tulip: "60%以上（自社公称・定義公開：成婚退会者数÷全退会者数）", musbell: "非公開" },
];

const totals = [
  { label: "1年活動の総額目安（成婚なし・お見合い料等を除く）", tulip: `${yen(tulipNoSeikon)}〜（Aプラン・お見合い料と交際成立時の手数料は別）`, musbell: `約${yen(musbellNoSeikon)}〜（カジュアルコース・お見合い料は別）` },
  { label: "1年で成婚した場合の総額目安（お見合い料等を除く）", tulip: `約${yen(tulipSeikon)}〜（お見合い料と交際成立時の手数料は別）`, musbell: `約${yen(musbellSeikon)}〜（お見合い料は別）` },
  { label: `1年で成婚した場合の総額目安（${scenarioLabel}）`, tulip: `約${yen(tulipScenario)}（Aプラン。Bプランは約${yen(tulipScenarioB)}）`, musbell: `約${yen(musbellScenario)}（カジュアルコース）` },
];

const faqs = [
  {
    q: "ブライダルチューリップとムスベルでは、料金が安くなるのはどちらですか？",
    a: `成婚まで含めた総額はブライダルチューリップのほうが抑えやすい目安です。成婚料がチューリップ${yen(tA.success)}・ムスベル${yen(mC.success)}と${yen(mC.success - tA.success)}の差があります。1年で成婚し、${scenarioLabel}した場合の総額目安は、チューリップ（Aプラン）約${yen(tulipScenario)}、ムスベル（カジュアルコース）約${yen(musbellScenario)}です。入会時費用もチューリップ${yen(tA.initial)}、ムスベル${yen(mC.initial)}〜（カジュアルコース）で、チューリップのほうが低めです。チューリップはお見合い料（${yen(tB.perOmiai)}または${yen(tA.perOmiai)}／件）に加えて、交際が1件成立するごとに手数料（Aプラン${yen(tA.perKosai!)}・Bプラン${yen(tB.perKosai!)}・42歳以上プラン${yen(t42.perKosai!)}）がかかるため、活動量が多い方はお見合いと交際の件数を含めて見積もってください（各社の公表料金にもとづく目安です。詳細は各社にご確認ください）。`,
  },
  {
    q: "出会いの数（会員数）で選ぶ場合、どちらが適していますか？",
    a: "どちらも複数連盟に加盟しており、出会える会員の母集団が広い点が特徴です。ブライダルチューリップはIBJ・SCRUM・CONNECT-shipの3連盟で紹介可能会員約19万名（2026年1月時点の公式表記）と内訳を開示しています。ムスベルは公式サイトでJBU・BIU・IBJ・TMSの4連盟が利用できると記載し、会員数94,763人（2024年10月時点の値）を掲載しています。内訳の透明性を重視する方にはチューリップ、仲人紹介とデータ検索を併用して幅広く探したい方にはムスベルが適しています。",
  },
  {
    q: "地方在住の場合、利用しやすいのはどちらですか？",
    a: "対面サポートを重視する方には、ムスベルが適しています。全国に拠点を展開しており、地方在住でも最寄り拠点で面談を受けられます。ブライダルチューリップの対面拠点は高田馬場の1ヶ所のみですが、面談・活動はオンラインに対応しており、面談回数無制限＋サブカウンセラー体制のサポートを遠方からも受けられます。オンライン完結での活動に支障がなければ、チューリップも十分に選択肢となります。",
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

export default function TulipVsMusbellPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "料金比較", href: "/compare/" }, { name: "ブライダルチューリップとムスベルを比較" }]} />

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-light mb-4 tracking-wide text-[#2C2C2C]">
          ブライダルチューリップとムスベルを比較【2026年】
        </h1>
        <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
          どちらも複数連盟に加盟し仲人サポートが受けられる<strong>ブライダルチューリップ</strong>（3連盟・高田馬場＋オンライン）と<strong>ムスベル</strong>（複数連盟・全国拠点のハイブリッド型）を、料金総額・成婚率の公表定義・サポート形式の観点から中立的に比較しています。総額を抑えたいか、全国の拠点での対面サポートを重視するかで、向き不向きが分かれます。どちらも無料相談から始められるため、迷われた場合は両社で総額の見積もりを取り、比較することをおすすめします。
        </p>
        <p className="text-xs text-[#2C2C2C]/50 mb-8">
          ※料金は当サイト各レビューの検証値です（ブライダルチューリップ={tulipChecked}に公式サイトで確認・税込／ムスベル={musbellChecked}に公式サイトで確認・税込）。プラン・連盟・拠点により異なるため、最新の料金・契約条件は各公式サイトおよび無料相談で必ずご確認ください。
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">基本スペック比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">ブライダルチューリップ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">ムスベル</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.item} className="border-t border-gray-50 align-top">
                    <td className="px-4 py-3 font-medium text-[#2C2C2C]/70 whitespace-nowrap">{r.item}</td>
                    <td className="px-4 py-3 text-center">{r.tulip}</td>
                    <td className="px-4 py-3 text-center">{r.musbell}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">総額の目安を比較（公表料金ベース）</h2>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#FAF7F2]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">ケース</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">ブライダルチューリップ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">ムスベル</th>
                </tr>
              </thead>
              <tbody>
                {totals.map((t) => (
                  <tr key={t.label} className="border-t border-gray-50">
                    <td className="px-4 py-3 font-medium text-[#2C2C2C]/70">{t.label}</td>
                    <td className="px-4 py-3 text-center">{t.tulip}</td>
                    <td className="px-4 py-3 text-center">{t.musbell}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※上の2行は「初期費用＋月会費×12ヶ月（＋成婚料）」、3行目はさらに「お見合い料×{PLAN_SCENARIO.omiai}件＋交際成立時の手数料×{PLAN_SCENARIO.kosai}件」を加えた当サイトの試算です（チューリップは42歳未満のAプラン基準・{tulipChecked}公式確認、ムスベルはカジュアルコース基準・{musbellChecked}公式確認）。チューリップの交際成立時の手数料は2026年10月21日の公式確認で反映したもので、以前の試算には含めていませんでした。ムスベルの公式料金表には交際成立時の費用の項目がないため、ムスベルの3行目はお見合い料のみを加えています（2026年10月24日確認）。お見合い・交際の件数により総額は変動するため、正確な総額は各社の無料相談での見積もりでご確認ください。成婚料の差（{yen(tA.success)}と{yen(mC.success)}）が大きいため、成婚まで進んだ場合の総額はチューリップが抑えやすい傾向です。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">成婚率は公表定義を確認して比較します</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
            ブライダルチューリップは<strong>成婚率60%以上・1年以内成婚率70%以上</strong>（いずれも自社公称）を公表し、算出定義（成婚率＝成婚退会者数÷全退会者数、2010年〜2026年1月の実績）まで開示しています。定義次第で数値が大きく変わる指標のため、定義を明示している点は判断材料として評価できます。一方、<strong>ムスベルは成婚率を非公開</strong>としています。非公開であること自体が問題というわけではありません。数字で比較したい場合は、無料相談で直近1年の成婚退会数を確認することをおすすめします。
          </p>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
            ※チューリップの成婚率は第三者機関の検証値ではなく自社公称値です。分母が「全退会者」であり「入会者全体」ではない点にもご注意ください。
          </p>
        </section>

        <section className="mb-10 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-medium text-[#A08447] mb-3 tracking-wider">ブライダルチューリップが向いている方</h2>
            <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>成婚まで含めた総額を抑えたい（成婚料180,000円）</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>月会費7,550円〜の低めの料金で仲人型を始めたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>成婚率の定義など数字の根拠を開示する相談所を選びたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>面談回数無制限＋サブカウンセラーの体制で進めたい（オンライン対応）</li>
            </ul>
            <p className="mt-4 text-sm"><Link href="/review/bridal-tulip/" className="text-[#A08447] underline">ブライダルチューリップの評判・料金を詳しく見る</Link></p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-medium text-[#A08447] mb-3 tracking-wider">ムスベルが向いている方</h2>
            <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>4連盟（JBU・BIU・IBJ・TMS）の会員から相手を探したい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>地方在住で全国拠点の対面サポートを受けたい</li>
              <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>仲人の紹介とデータ検索を併用して幅広く探したい</li>
            </ul>
            <p className="mt-4 text-sm"><Link href="/review/musbell/" className="text-[#A08447] underline">ムスベルの評判・料金を詳しく見る</Link></p>
          </div>
        </section>

        <A8Banner ad="tulip" />

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
            <li><Link href="/review/bridal-tulip/" className="text-[#A08447] underline">ブライダルチューリップの評判・料金を見る（3連盟・成婚率の定義まで検証）</Link></li>
            <li><Link href="/review/musbell/" className="text-[#A08447] underline">ムスベルの評判・口コミ・料金を見る（複数連盟・全国拠点）</Link></li>
            <li><Link href="/compare/folli-vs-musbell/" className="text-[#A08447] underline">フォリパートナーとムスベルを比較する（料金・成婚率・サポート）</Link></li>
            <li><Link href="/compare/musbell-vs-ringbell/" className="text-[#A08447] underline">ムスベルとリングベルを比較する（料金総額・対象年代・特徴）</Link></li>
            <li><Link href="/compare/cheap/" className="text-[#A08447] underline">安い結婚相談所を1年総額で比較する（初期費用＋月会費＋成婚料）</Link></li>
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（24社一覧）を見る</Link></li>
          </ul>
        </section>
      </main>
    </>
  );
}
