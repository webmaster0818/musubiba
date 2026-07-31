import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";
import A8Banner from "@/components/A8Banner";

export const metadata = {
  title: "エクセレンス青山の評判は？4連盟33万人・料金コース・成婚率の注意点まで公式情報で検証",
  description:
    "エクセレンス青山（エグゼクティブ向け結婚相談所）の料金コース・4連盟約33万人のネットワーク・成婚率85.7%（2019年実績）の注意点を公式情報ベースで検証。口コミの一次情報の有無まで正直に整理します。",
};

const overview = {
  name: "エクセレンス青山",
  company: "有限会社ランドコム（東京都港区南青山2-2-8 DFビル・2003年8月設立・代表 馬場正浩）",
  type: "仲人型（医師・経営者などエグゼクティブ向け）",
  federation: "IBJ・BIU・TMS・NNRの4連盟加盟（紹介可能 約33万人・各連盟の時点表記あり）",
  area: "東京・南青山1拠点（オンライン相談可・火曜定休）",
  initialFee: "55,000円〜220,000円（税込・コースによる）",
  monthlyFee: "7,700円（税込・スタンダードコース）",
  matchingFee: "220,000円（税込・全コース共通）",
  successRate: "85.7%（自社公称・2019年実績・定義は本文参照）",
};

const strengths = [
  {
    title: "業界25年・4連盟加盟で紹介可能約33万人のネットワーク",
    desc: "運営の有限会社ランドコムは2003年8月設立で、業界歴25年の老舗です。IBJ・BIU・TMS・NNRの4つの連盟に加盟しており、紹介可能な会員は合計約33万人（各連盟公表値・時点表記あり）。複数連盟を横断してお相手を探せるのは、単一連盟のみ加盟の相談所にはない強みです。IBJ AWARD PREMIUMの受賞歴もあります。",
  },
  {
    title: "医師・経営者などハイクラス層に向けた専属カウンセラーの仲人型",
    desc: "エクセレンス青山は医師・経営者などのエグゼクティブ層を主な対象とした仲人型の結婚相談所です。専属カウンセラーが活動に伴走する体制で、コースによってお見合い料や入会金の設定が異なります。",
  },
  {
    title: "青山1拠点＋オンライン相談で忙しい人にも対応",
    desc: "店舗は東京・南青山の1拠点（火曜定休）ですが、オンライン相談にも対応しています。多忙で来店の時間が取りにくいエグゼクティブ層でも相談しやすい体制です。",
  },
];

const pros = [
  "4連盟加盟（IBJ/BIU/TMS/NNR）で紹介可能約33万人と母集団が大きい",
  "2003年設立・業界25年の運営実績とIBJ AWARD PREMIUM受賞歴",
  "月会費7,700円（スタンダード）と月額負担を抑えた料金設計",
  "20代限定トライアル11,000円（1ヶ月）で若年層は試しやすい",
];

const cons = [
  "公称成婚率85.7%は2019年（1〜12月）の実績で、データが古い点に注意",
  "お見合い料が都度発生する料金体系（スタンダードは女性5,500円/回・男性8,800円/回）",
  "実店舗は青山の1拠点のみで、対面中心で活動したい地方在住者には不便",
];

const faqs = [
  {
    q: "エクセレンス青山はどの連盟に加盟していますか？",
    a: "IBJ（日本結婚相談所連盟）・BIU（日本ブライダル連盟）・TMS（全国結婚相談事業者連盟）・NNR（日本仲人連盟）の4連盟に加盟しており、紹介可能な会員は合計約33万人です（各連盟の公表値・時点表記あり）。複数連盟を横断してお相手探しができます。",
  },
  {
    q: "エクセレンス青山の成婚率85.7%はどう見ればよいですか？",
    a: "自社公称値で、定義は「成婚退会者÷総退会者」（男性会員対象）、対象期間は2019年1〜12月の実績です。7年前のデータであり最新の実績を示すものではない点、また算出定義が他社と異なる場合がある点に注意してください。最新の実績は無料相談で直接確認することをおすすめします。",
  },
  {
    q: "エクセレンス青山の料金は男女で違いますか？",
    a: "スタンダードコースでは入会金55,000円・月会費7,700円は男女共通ですが、お見合い料が女性5,500円/回・男性8,800円/回と異なります（いずれも税込）。成婚料は男女・コース共通で220,000円です。",
  },
  {
    q: "お見合い料がかからないコースはありますか？",
    a: "プライムコース（入会金110,000円）では、お見合いが月4名まで無料と公式サイトに記載されています。お見合い回数が多くなりそうな方は、スタンダードコースとの総額比較をしてみるとよいでしょう。詳細な条件は公式サイト・無料相談でご確認ください。",
  },
  {
    q: "20代でも入会しやすいプランはありますか？",
    a: "20代限定のトライアルコースが11,000円（税込・1ヶ月）で用意されています。エグゼクティブ向け相談所を低コストで試せる位置づけのコースです。適用条件の詳細は公式サイトでご確認ください。",
  },
  {
    q: "エクセレンス青山は来店しないと利用できませんか？",
    a: "店舗は東京・南青山の1拠点（火曜定休）ですが、オンライン相談にも対応しています。遠方の方や多忙な方はまずオンラインでの相談を検討するとよいでしょう。",
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

const relatedServices = [
  { name: "ウェルスマ", path: "/review/wellsma/" },
  { name: "パートナーエージェント", path: "/review/partner-agent/" },
  { name: "ツヴァイ", path: "/review/zwei/" },
  { name: "サンマリエ", path: "/review/sunmarie/" },
];

export default function ExcellenceAoyamaReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "エクセレンス青山" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          エクセレンス青山の評判は？4連盟33万人・料金コース・成婚率の注意点まで公式情報で検証
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年7月（料金・実績は2026年7月31日時点の公式サイト掲載情報を基に作成）</p>

        {/* Conclusion box */}
        <div className="bg-[#F5F0EB] rounded-2xl p-6 mb-4 border border-[#8B7355]/20">
          <h2 className="text-base font-medium text-[#8B7355] mb-3 tracking-widest">結論：エクセレンス青山はこんな人に向く相談所</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
            エクセレンス青山は、医師・経営者など<strong>ハイクラス層向けの仲人型結婚相談所</strong>です。IBJ・BIU・TMS・NNRの<strong>4連盟加盟で紹介可能約33万人</strong>という母集団の広さと、業界25年の運営実績（2003年設立・IBJ AWARD PREMIUM受賞歴あり）が特徴で、条件を広げてお相手を探したいエグゼクティブ層に向いています。
          </p>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
            一方、公称成婚率85.7%は<strong>2019年（1〜12月）実績かつ定義が「成婚退会者÷総退会者・男性会員対象」</strong>とデータが古い点、スタンダードコースはお見合い料が都度発生する点は、入会前に必ず理解しておきたい注意点です。
          </p>
        </div>

        <A8Banner ad="excellence" />

        {/* Overview table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="bg-[#8B7355] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
          <div className="divide-y divide-gray-50">
            {Object.entries({
              サービス名: overview.name,
              運営会社: overview.company,
              タイプ: overview.type,
              加盟連盟: overview.federation,
              店舗: overview.area,
              入会金: overview.initialFee,
              月会費: overview.monthlyFee,
              成婚料: overview.matchingFee,
              成婚実績: overview.successRate,
            }).map(([k, v]) => (
              <div key={k} className="flex px-6 py-3.5 text-sm">
                <span className="w-28 shrink-0 font-medium text-[#2C2C2C]/50 tracking-wider">{k}</span>
                <span className="text-[#2C2C2C]">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            エクセレンス青山の料金コース（税込）
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            エクセレンス青山の料金は<strong>コース制で、スタンダードコースは男女でお見合い料が異なります</strong>。成婚料はコース・男女共通で220,000円です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">コース</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">入会金</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">月会費</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">お見合い料</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">成婚料</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">スタンダード（女性）</td><td className="px-4 py-3 text-center">55,000円</td><td className="px-4 py-3 text-center">7,700円</td><td className="px-4 py-3 text-center">5,500円/回</td><td className="px-4 py-3 text-center">220,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">スタンダード（男性）</td><td className="px-4 py-3 text-center">55,000円</td><td className="px-4 py-3 text-center">7,700円</td><td className="px-4 py-3 text-center">8,800円/回</td><td className="px-4 py-3 text-center">220,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">プライム</td><td className="px-4 py-3 text-center">110,000円</td><td className="px-4 py-3 text-center">公式サイト参照</td><td className="px-4 py-3 text-center">月4名まで無料</td><td className="px-4 py-3 text-center">220,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">エグゼクティブ</td><td className="px-4 py-3 text-center">220,000円</td><td className="px-4 py-3 text-center">公式サイト参照</td><td className="px-4 py-3 text-center">公式サイト参照</td><td className="px-4 py-3 text-center">220,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">20代限定トライアル</td><td className="px-4 py-3 text-center" colSpan={3}>11,000円（1ヶ月）</td><td className="px-4 py-3 text-center">220,000円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">
            ※2026年7月31日時点の公式サイト掲載の税込料金です。「公式サイト参照」の項目は当サイトで金額を確認できなかったため掲載していません。料金は改定される場合があるため、最新の金額・条件は必ず公式サイトまたは無料相談でご確認ください。
          </p>
        </section>

        {/* Success rate caution */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            成婚率85.7%の「注意点」を正しく理解する
          </h2>
          <div className="bg-[#FAFAF8] rounded-xl border border-gray-100 p-6">
            <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
              エクセレンス青山が掲げる成婚率85.7%は自社公称値で、定義は<strong>「成婚退会者÷総退会者」（男性会員対象）、対象期間は2019年1〜12月の実績</strong>です。
            </p>
            <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
              注意したいのは、この数値が<strong>2019年の実績であり、2026年現在から見るとデータが古い</strong>という点です。当時から会員構成や市場環境は変化している可能性があるため、この数値だけで現在の成婚しやすさを判断するのは適切ではありません。
            </p>
            <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
              また、成婚率の算出方法は業界で統一されておらず、「成婚退会者÷総退会者」という定義は他社の「全会員に対する成婚割合」等とは異なります。他社の成婚率と単純比較せず、無料相談で直近の成婚実績を直接質問することをおすすめします。
            </p>
          </div>
        </section>

        {/* Strengths */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            エクセレンス青山の強み・特徴
          </h2>
          <div className="space-y-6">
            {strengths.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-medium text-lg mb-2 text-[#8B7355] tracking-wider">{s.title}</h3>
                <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pros / Cons */}
        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="bg-green-50/50 rounded-xl p-6">
            <h3 className="font-medium text-green-800 mb-4 tracking-wider">メリット</h3>
            <ul className="space-y-2">
              {pros.map((p) => (
                <li key={p} className="text-sm text-[#2C2C2C]/70 flex gap-2">
                  <span className="text-green-500 shrink-0">+</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50/50 rounded-xl p-6">
            <h3 className="font-medium text-red-800 mb-4 tracking-wider">デメリット・注意点</h3>
            <ul className="space-y-2">
              {cons.map((c) => (
                <li key={c} className="text-sm text-[#2C2C2C]/70 flex gap-2">
                  <span className="text-red-400 shrink-0">-</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Comparison */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 tracking-widest">他社との比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">エクセレンス青山</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">ウェルスマ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">naco-do</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">55,000円〜</td><td className="px-4 py-3 text-center">49,800円</td><td className="px-4 py-3 text-center">29,800円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">7,700円〜</td><td className="px-4 py-3 text-center">11,800円〜</td><td className="px-4 py-3 text-center">6,980円〜</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">成婚料</td><td className="px-4 py-3 text-center">220,000円</td><td className="px-4 py-3 text-center">149,800円</td><td className="px-4 py-3 text-center">0円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">紹介可能会員</td><td className="px-4 py-3 text-center">約33万人（4連盟）</td><td className="px-4 py-3 text-center">約10.8万人（IBJ）</td><td className="px-4 py-3 text-center">約12.1万人</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">仲人型（ハイクラス向け）</td><td className="px-4 py-3 text-center">オンライン仲人型</td><td className="px-4 py-3 text-center">オンライン完結型</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※比較各社の数値は当サイト各レビュー記事の調査時点の情報（会員数は各連盟・各社公表値）です。お見合い料の有無など料金体系が異なるため、総額で比較してください。</p>
        </section>

        {/* Reviews / How to verify */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            エクセレンス青山の評判・口コミについて（正直な調査結果）
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            当サイトで「エクセレンス青山 評判」「エクセレンス青山 口コミ」を調査しましたが、<strong>出典を確認できる口コミの一次情報は確認できませんでした</strong>。確認できない口コミを紹介する代わりに、公式情報をもとにした「入会前の見極め方」を整理します。
          </p>
          <div className="bg-[#FAFAF8] rounded-xl border border-gray-100 p-6">
            <h3 className="font-medium text-[#8B7355] mb-4 tracking-wider">無料相談で確認したい5つの見極めポイント</h3>
            <ul className="space-y-3 text-sm text-[#2C2C2C]/70">
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">1.</span>直近の成婚実績（公称85.7%は2019年実績のため、最新年の実績と算出定義を必ず質問する）</li>
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">2.</span>お見合い料込みの想定総額（月に何回お見合いする想定か。回数次第でプライムコースとの損益分岐が変わる）</li>
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">3.</span>プライム・エグゼクティブコースの月会費など、公式サイトに詳細掲載のない費用項目</li>
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">4.</span>4連盟（IBJ/BIU/TMS/NNR）をどう使い分けて紹介してくれるのかの具体的な運用</li>
              <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">5.</span>担当カウンセラーとの相性（専属仲人型は担当者次第で活動の質が大きく変わるため、面談で必ず確認）</li>
            </ul>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本記事は2026年7月31日時点の公式サイト掲載情報を基に作成しています。サービス内容・料金は変更される場合があります。</p>
        </section>

        {/* Compare links */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            エクセレンス青山と他社を比較して選ぶ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            エクセレンス青山が自分に合うか迷ったら、お見合い料込みの総額・紹介可能な会員数・サポート形式を他社と見比べるのがおすすめです。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#8B7355] underline">結婚相談所の料金比較（一覧）を見る</Link></li>
            <li><Link href="/review/wellsma/" className="text-[#8B7355] underline">ウェルスマの評判・料金を見る</Link></li>
            <li><Link href="/review/partner-agent/" className="text-[#8B7355] underline">パートナーエージェントの評判・料金を見る</Link></li>
            <li><Link href="/review/sunmarie/" className="text-[#8B7355] underline">サンマリエの評判・料金を見る</Link></li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            よくある質問
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-[#FAFAF8] rounded-xl border border-gray-100">
                <summary className="cursor-pointer px-6 py-4 font-normal text-[#2C2C2C] flex items-center justify-between tracking-wider">
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-[#8B7355] text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-[#2C2C2C]/60 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* Editor note */}
        <section className="mb-12">
          <div className="bg-[#F5F0EB] rounded-2xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <img src="/editor-team.png" alt="ムスビバ編集部" className="w-20 h-20 rounded-xl object-cover shrink-0" />
              <div>
                <p className="font-medium text-[#2C2C2C] text-sm tracking-wider">この記事を書いた人</p>
                <p className="text-sm text-[#8B7355] font-medium mt-1">ムスビバ編集部</p>
              </div>
            </div>
            <p className="text-xs text-[#8B8580] leading-relaxed mb-2">結婚相談所業界を3年以上取材。主要15社以上を実際に訪問・カウンセリング体験し、料金・サポート体制・成婚実績を独自の基準で評価しています。</p>
            <p className="text-xs text-[#8B8580] leading-relaxed mb-2">編集部メンバーの中には、実際に結婚相談所を利用して入籍し、結婚生活6年目を迎えたメンバーも在籍。実体験に基づいたリアルな視点でお伝えします。</p>
            <p className="text-xs text-[#8B8580] leading-relaxed">「お見合い文化がなくなった日本で、結婚に悩む人を一人でも多く救いたい」「マッチングアプリで出会えても、本気の出会いにつながらない人の力になりたい」という想いで運営しています。</p>
          </div>
        </section>

        {/* Related */}
        <section className="mb-8">
          <h2 className="text-lg font-light mb-4 tracking-widest">他の結婚相談所も見る</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link
                key={s.name}
                href={s.path}
                className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm font-normal hover:border-[#8B7355] hover:text-[#8B7355] transition-colors tracking-wider"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </section>

        <A8Banner ad="excellence" />
        <AuthorBox />
      </article>
    </>
  );
}
