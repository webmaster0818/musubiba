import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";
import A8Banner from "@/components/A8Banner";

export const metadata: Metadata = {
  title: "男性の結婚相談所おすすめ比較【2026年】30代・40代は何から始めるべきか",
  description:
    "男性目線で結婚相談所を比較。男性会員としての1年成婚総額（検証済み実額）は約34.1万〜67.7万円。男性専門のヒーローマリッジ、男性お見合い料が明示されたエクセレンス青山など5社を「費用実額・男女比の公表有無・男性向けサポート」の3基準で整理し、30代男性が何から始めるかをデータで解説します。",
  alternates: { canonical: "/mens/" },
};

// 男性が1年活動して成婚した場合の総額試算（税込・当サイト検証済み料金のみ使用）。
// お見合い料が都度払いの相談所は「月1件＝年12件」で試算。
type Row = {
  slug: string;
  name: string;
  type: string;
  initial: string;
  monthly: string;
  omiai: string;
  seikon: string;
  totalMen: string;
  disclosure: string;
};
const rows: Row[] = [
  {
    slug: "wellsma",
    name: "ウェルスマ",
    type: "オンライン仲人型（IBJ）",
    initial: "49,800円",
    monthly: "11,800円〜19,800円",
    omiai: "0円",
    seikon: "149,800円",
    totalMen: "約341,200円",
    disclosure: "男女比は公表なし。1年以内成婚率86.1%（自社公称・分母＝成婚退会者）",
  },
  {
    slug: "excellence-aoyama",
    name: "エクセレンス青山",
    type: "仲人型（4連盟）",
    initial: "55,000円",
    monthly: "7,700円",
    omiai: "男性8,800円／回（女性5,500円）",
    seikon: "220,000円",
    totalMen: "約473,000円",
    disclosure: "男女比は公表なし。お見合い料が男女別に明示されている（男性は割高）",
  },
  {
    slug: "bridal-tulip",
    name: "ブライダルチューリップ",
    type: "仲人型（3連盟・紹介可能約19万名）",
    initial: "105,000円（42歳未満）",
    monthly: "7,550円〜12,950円",
    omiai: "6,100円または8,800円／件",
    seikon: "180,000円",
    totalMen: "約481,200円",
    disclosure: "男女比は公表なし。成婚率60%以上（自社公称・算出定義を開示）",
  },
  {
    slug: "hero-marriage",
    name: "ヒーローマリッジ",
    type: "男性専門・仲人型（IBJ）",
    initial: "165,000円",
    monthly: "14,300円〜27,500円",
    omiai: "0円",
    seikon: "220,000円",
    totalMen: "約583,000円",
    disclosure: "会員は男性のみ（男性専門）。成婚率は非公開（2026年7月確認）",
  },
  {
    slug: "ibj-members",
    name: "IBJメンバーズ",
    type: "ハイブリッド型（IBJ直営・110,420名）",
    initial: "252,450円",
    monthly: "17,050円",
    omiai: "公式料金ページに都度課金の記載なし",
    seikon: "220,000円",
    totalMen: "約677,050円",
    disclosure: "男女比は公表なし。男性の90.2%が年収500万円以上等の会員データを公表（2026年1月1日時点）",
  },
];

const faqs = [
  {
    q: "男性におすすめの結婚相談所はどこですか？",
    a: "「男性におすすめ」を1社に決める前に、①男性会員としての費用実額（お見合い料が男女別の相談所もあります）、②男女比・会員構成の公表有無、③男性向けサポートの有無、の3基準で絞るのが確実です。当サイト検証5社の範囲（税込・2026年7〜8月に公式サイトで確認）では、男性の1年成婚総額の試算はウェルスマ約341,200円〜IBJメンバーズ約677,050円。男性専門のサポートを最優先するならヒーローマリッジ（初期165,000円＋月14,300円〜＋成婚料220,000円・お見合い料0円）、費用を抑えるならウェルスマが検証済みでは最安水準です。",
  },
  {
    q: "男性専門の結婚相談所はありますか？",
    a: "あります。ヒーローマリッジ（株式会社アルファブル運営・IBJ加盟）は会員を男性に限定した男性専門の結婚相談所で、プロカメラマンによるプロフィール写真撮影が何度でも無料・複数写真のABテスト・月3名紹介＋LINEサポートなど、男性がつまずきやすいポイントに特化した設計です。一方で成婚率の公式数値は非公開（2026年7月確認）のため、無料相談で直近の成婚退会数など具体的な数字を確認して判断することをおすすめします。",
  },
  {
    q: "結婚相談所の男女比は公表されていますか？",
    a: "当サイトが検証した範囲では、男女比の数値を公式に公表している相談所は確認できませんでした（ヒーローマリッジは男性専門のため会員は男性のみ）。代わりに確認できる公式データとして、IBJメンバーズは会員データ（2026年1月1日時点）で男性の90.2%が年収500万円以上・四大/大学院卒85%と会員構成を公表しています。またIBJメンバーズの入会条件は男性25〜49歳（20代400万円以上〜40代600万円以上などエリアにより年収基準あり）・女性20〜39歳と公開されており、自分がどの層と比較されるかの参考になります。男女比が気になる場合は、無料相談で「自分の年代の男性会員数とお見合い成立の実績」を直接質問するのが確実です。",
  },
  {
    q: "30代男性の結婚相談所の費用はいくらかかりますか？",
    a: "費用は「初期費用＋月会費×活動月数＋お見合い料＋成婚料」で決まります。当サイトが公式サイトで検証した5社（税込）で、1年活動して成婚した場合の男性の総額を試算すると、ウェルスマ約341,200円・エクセレンス青山約473,000円（男性お見合い料8,800円×年12回込み）・ブライダルチューリップ約481,200円（お見合い年12件込み）・ヒーローマリッジ約583,000円（スタンダードプラン）・IBJメンバーズ約677,050円です。お見合い料が都度払いの相談所は活動量で総額が変わる点、料金は改定される場合がある点に注意し、申込前に必ず公式サイトでご確認ください。",
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

export default function MensHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "男性の結婚相談所比較" }]} />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-light mb-4 tracking-wide text-[#2C2C2C]">
          男性の結婚相談所おすすめ比較【2026年】30代・40代は何から始めるべきか
        </h1>
        <p className="text-xs text-[#8B8580] mb-4">料金はすべて当サイトが各公式サイトで検証（2026年7月〜8月確認・税込）</p>
        <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-6">
          「男性 結婚相談所」で検索すると、実は<strong>女性向け（ハイクラス男性と出会いたい人向け）の記事</strong>が多く混ざっています。このページは<strong>男性ユーザー専用</strong>の比較ハブです。男性会員として実際に払う費用の実額、男女比・会員構成の公表有無、男性向けサポートの3点だけで、検証済みの相談所を比較します。
        </p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#8B7355] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#8B7355] rounded-full" />結論：男性が結婚相談所を選ぶ3基準
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">1.</span><span><strong>男性会員としての費用実額で比べる</strong>：お見合い料が男女別の相談所があります（例：エクセレンス青山は男性8,800円／女性5,500円）。検証5社の「男性の1年成婚総額」試算は<strong>約34.1万〜67.7万円</strong>で、差は約2倍です。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">2.</span><span><strong>男女比・会員構成の公表有無を確認する</strong>：当サイト検証の範囲では<strong>男女比を数値公表している相談所は確認できませんでした</strong>。公表データがあるのはIBJメンバーズの会員構成（男性の90.2%が年収500万円以上・2026年1月1日時点）など一部のみ。非公表の相談所は無料相談で「自分の年代の実績」を質問して補いましょう。</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">3.</span><span><strong>男性向けサポートの有無で選ぶ</strong>：男性専門の<strong>ヒーローマリッジ</strong>は写真撮影何度でも無料＋ABテストなど男性特化の設計。男女両方対応の相談所でも、写真・プロフィール添削のサポート範囲は無料相談で確認できます。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本ページの料金・実績は各公式サイトの公表情報（2026年7月〜8月に当サイト確認・税込）にもとづきます。最新の数値・契約条件は必ず公式サイトおよび無料相談でご確認ください。</p>
        </div>

        <A8Banner ad="hero" />

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">男性向け比較表（検証済み5社・男性の実額）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            「男性の1年成婚総額」は<strong>初期費用＋月会費×12ヶ月＋男性のお見合い料（都度払いは月1件＝年12件で試算）＋成婚料</strong>の当サイト試算です。安い順に並べています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#FAF7F2] text-left">
                  <th className="px-3 py-3">相談所</th>
                  <th className="px-3 py-3">タイプ</th>
                  <th className="px-3 py-3">初期費用</th>
                  <th className="px-3 py-3">月会費</th>
                  <th className="px-3 py-3">お見合い料（男性）</th>
                  <th className="px-3 py-3">成婚料</th>
                  <th className="px-3 py-3">男性の1年成婚総額（試算）</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.slug} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-3 font-medium whitespace-nowrap">
                      <Link href={`/review/${r.slug}/`} className="text-[#8B7355] underline">{r.name}</Link>
                    </td>
                    <td className="px-3 py-3">{r.type}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{r.initial}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{r.monthly}</td>
                    <td className="px-3 py-3">{r.omiai}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{r.seikon}</td>
                    <td className="px-3 py-3 whitespace-nowrap font-semibold text-[#8B7355]">{r.totalMen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-3 leading-relaxed">
            ※試算の基準プラン：ウェルスマ＝マイペースプラン（月11,800円）、エクセレンス青山＝スタンダードコース＋男性お見合い料8,800円×12回、ブライダルチューリップ＝Aプラン（42歳未満・月7,550円）＋お見合い料8,800円×12件、ヒーローマリッジ＝スタンダードプラン（月16,500円）、IBJメンバーズ＝初期252,450円＋月17,050円×12＋成婚料220,000円。お見合い件数・活動期間で総額は変動します。料金はすべて税込・当サイトが各公式サイトで確認した公表値（2026年7月〜8月）ですが、改定される場合があるため申込前に各公式サイトでご確認ください。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">男女比・会員構成は公表されている？（正直な整理）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            男性にとって「相手候補となる女性会員がどれだけいるか」は重要ですが、当サイトが検証した範囲では、<strong>男女比の数値を公式サイトで公表している相談所は確認できませんでした</strong>。存在しない数字を掲載しない方針のため、確認できた公式データのみを整理します。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#FAF7F2] text-left">
                  <th className="px-3 py-3">相談所</th>
                  <th className="px-3 py-3">男女比・会員構成の公表状況</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.slug} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-3 font-medium whitespace-nowrap">{r.name}</td>
                    <td className="px-3 py-3">{r.disclosure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-3 leading-relaxed">
            ※IBJ加盟の相談所（ウェルスマ・ヒーローマリッジ・IBJメンバーズ等）は同じIBJ会員ネットワーク（登録会員数110,420名・2026年7月時点）でお相手を探します。連盟レベルの会員数は公表されていますが、相談所単体・連盟全体とも男女比の数値は当サイトでは確認できていません。無料相談で「自分の年代・条件でのお見合い成立実績」を質問するのが最も確実です。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">30代男性は何から始めるべきか（データで進める3ステップ）</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-medium text-[#8B7355] mb-1">STEP1. 総額の予算レンジを先に決める（検証実額：約34.1万〜67.7万円）</h3>
              <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">
                結婚相談所の費用は「初期費用＋月会費×活動月数＋お見合い料＋成婚料」で決まります。当サイト検証5社の男性1年成婚総額の試算は<strong>約341,200円〜約677,050円</strong>。まず「成婚まで出せる総額」を決めると、候補は自動的に絞れます。月会費の安さだけで選ぶと、お見合い料都度払い（男性8,800円／回の例あり）や成婚料で総額が逆転する点に注意してください。詳細は<Link href="/compare/cheap/" className="text-[#8B7355] underline">1年総額の10社比較</Link>で確認できます。
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-medium text-[#8B7355] mb-1">STEP2. 入会条件と公表データで「自分が戦う環境」を確認する</h3>
              <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">
                公開されている数字で環境を把握します。例えばIBJメンバーズの入会条件は<strong>男性25〜49歳・年収基準あり（20代400万円以上〜40代600万円以上などエリアにより異なる）</strong>で、会員データ（2026年1月1日時点）では<strong>男性の90.2%が年収500万円以上・四大/大学院卒85%</strong>と公表されています。つまり大手連盟では、30代男性は同条件帯の男性と比較される前提で活動することになります。写真・プロフィールのサポートが手厚い相談所（例：ヒーローマリッジは撮影何度でも無料＋ABテスト）を選ぶ価値は、この競争環境のデータから判断できます。
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-medium text-[#8B7355] mb-1">STEP3. 無料相談を2〜3社受けて「定義つきの数字」で比較する</h3>
              <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">
                成婚率は各社で定義が異なるため、数字単体では比較できません。IBJメンバーズは「成婚＝婚約」で成婚退会者の割合1/2以上（2025年実績・全退会者のうち成婚退会者の割合）、ブライダルチューリップは成婚率60%以上（成婚退会者数÷全退会者数・2010年〜2026年1月）、ウェルスマは1年以内成婚率86.1%（分母＝成婚退会者）。いずれも自社公称値です。無料相談では「直近1年の成婚退会数」「自分と近い年代・年収の男性の活動事例」「成婚の定義と成婚料の発生時点」を同じ質問で聞き、回答の具体性で比べるのが確実です。活動期間の参考値として、ウェルスマは成婚まで平均7.9ヶ月（自社公称）を公表しています。
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">男性向けサポートで選ぶ2社</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="font-medium text-[#8B7355] tracking-wider">ヒーローマリッジ（男性専門）</h3>
                <span className="text-sm font-semibold">約583,000円<span className="text-xs text-[#2C2C2C]/50">／1年成婚試算</span></span>
              </div>
              <p className="text-sm text-[#2C2C2C]/70 leading-relaxed mb-2">
                会員を男性に限定したIBJ加盟の男性専門相談所。プロカメラマン撮影が何度でも無料＋写真ABテスト、データ重視の「ロジカル婚活」、月3名紹介＋LINEサポート、お見合い申込み月200件・お見合い料0円。成婚率は非公開（2026年7月確認）のため、無料相談で直近実績の確認を。
              </p>
              <Link href="/review/hero-marriage/" className="text-sm text-[#8B7355] underline">ヒーローマリッジの評判・料金を詳しく見る →</Link>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="font-medium text-[#8B7355] tracking-wider">ブライダルチューリップ（男性の入会歓迎・3連盟）</h3>
                <span className="text-sm font-semibold">約481,200円<span className="text-xs text-[#2C2C2C]/50">／1年成婚試算（お見合い年12件）</span></span>
              </div>
              <p className="text-sm text-[#2C2C2C]/70 leading-relaxed mb-2">
                IBJ・SCRUM・CONNECT-shipの3連盟加盟で紹介可能会員は約19万名（2026年1月時点・公式表記）と母集団が広く、男性の入会も受け付けています。月会費7,550円〜と月額を抑えて始められ、面談回数無制限＋サブカウンセラー体制。お見合い料が都度払いのため、月3件以上ならBプラン（月12,950円・お見合い6,100円）が有利な構造です。
              </p>
              <Link href="/review/bridal-tulip/" className="text-sm text-[#8B7355] underline">ブライダルチューリップの評判・料金を詳しく見る →</Link>
            </div>
          </div>
        </section>

        <A8Banner ad="tulip-men" />

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">よくある質問（男性の結婚相談所選び）</h2>
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

        <section className="mb-8">
          <h2 className="text-lg font-light mb-4 tracking-widest">あわせて読みたい</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link href="/compare/cheap/" className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm hover:border-[#8B7355] hover:text-[#8B7355] transition-colors tracking-wider">1年総額で10社比較</Link>
            <Link href="/compare/30s/" className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm hover:border-[#8B7355] hover:text-[#8B7355] transition-colors tracking-wider">30代向け比較</Link>
            <Link href="/knowledge/how-to-choose/" className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm hover:border-[#8B7355] hover:text-[#8B7355] transition-colors tracking-wider">相談所の選び方</Link>
            <Link href="/knowledge/flow/" className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm hover:border-[#8B7355] hover:text-[#8B7355] transition-colors tracking-wider">入会から成婚までの流れ</Link>
          </div>
        </section>

        <AuthorBox />
      </main>
    </>
  );
}
