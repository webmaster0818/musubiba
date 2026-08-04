import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import A8Banner from "@/components/A8Banner";
import AuthorBox from "@/components/AuthorBox";

export const metadata = {
  title: "IBJメンバーズの口コミ・評判｜料金・成婚率の定義・加盟店との違いを徹底解説【2026年】",
  description:
    "IBJメンバーズ（株式会社IBJ直営）の口コミ・評判を徹底調査。登録会員数110,420名（2026年7月時点）・成婚退会者の割合1/2以上（全退会者のうち成婚退会者の割合）・月会費17,050円の料金体系、IBJ加盟店との違いまで詳しく解説します。",
};

const overview = {
  name: "IBJメンバーズ",
  type: "ハイブリッド型（株式会社IBJ直営）",
  members: "110,420名（2026年7月時点・IBJ登録会員数）",
  area: "全国9店舗（東京・銀座・有楽町・新宿西口・横浜・名古屋・大阪・神戸・福岡）",
  initialFee: "252,450円（登録料33,000円＋活動サポート費219,450円）",
  monthlyFee: "17,050円",
  matchingFee: "220,000円",
  age: "男性25〜49歳・女性20〜39歳（入会条件）",
  successRate: "成婚退会者の割合1/2以上※",
};

const strengths = [
  {
    title: "東証プライム上場・株式会社IBJの直営店",
    desc: "IBJメンバーズは、日本最大級の結婚相談所ネットワーク「IBJ（日本結婚相談所連盟）」を運営する株式会社IBJ（東証プライム上場・証券コード6071）の直営結婚相談所です。連盟の仕組みをつくっている会社そのものが運営しているため、IBJのシステムとノウハウをダイレクトに活用できる安心感があります。",
  },
  {
    title: "登録会員数110,420名の会員基盤にアクセス",
    desc: "IBJの登録会員数は110,420名（2026年7月時点）と業界最大級。会員データ（2026年1月1日時点）では男性の90.2%が年収500万円以上、四大・大学院卒が全体の85%と、会員の質の高さも公表されています。この大規模ネットワークから検索・申込みができます。",
  },
  {
    title: "「成婚＝婚約」と定義した本気のフルサポート",
    desc: "IBJメンバーズは、お見合い成立や交際開始ではなく「プロポーズが成功し婚約した時点」を成婚と定義。公表実績は成婚退会者の割合1/2以上（2025年1月〜12月の主要コース実績。全退会者のうち成婚退会者の割合・IBJシステム外での成婚を含む）で、婚約まで責任を持って伴走する姿勢が明確です。",
  },
  {
    title: "カウンセラー1人あたり約60人の担当制",
    desc: "カウンセラー1人あたりの担当会員数は約60人と公表されており、活動設計からお見合い調整、交際中の相談、プロポーズ・両親挨拶まで一貫したサポートを受けられます。お見合い実現率94%・交際実現率83%（2025年1月〜6月にプロフィールを公開した会員）という実績も公表されています。",
  },
];

const pros = [
  "東証プライム上場企業の直営でシステム・ノウハウを直接活用できる",
  "登録会員数110,420名（2026年7月時点）と業界最大級の会員基盤",
  "「成婚＝婚約」定義で成婚退会者の割合1/2以上の実績を公表",
  "休会制度あり（1ヶ月単位で最長3ヶ月・休会中は月会費不要）",
  "クーリングオフ・未活動分返金の制度が明示されている",
];

const cons = [
  "初期費用252,450円は業界でも高めの水準（サポートの手厚さとのバランスで判断を）",
  "成婚料220,000円が発生する（婚約まで至った場合のみ）",
  "店舗は9店舗で首都圏・主要都市中心（近くに店舗があるか確認しておくと安心）",
];

const fees = [
  { item: "登録料", price: "33,000円", note: "入会時" },
  { item: "活動サポート費", price: "219,450円", note: "入会時（初期費用合計252,450円）" },
  { item: "月会費", price: "17,050円", note: "毎月" },
  { item: "成婚料", price: "220,000円", note: "成婚退会時（成婚＝婚約）" },
  { item: "お見合い料", price: "記載なし", note: "公式料金ページに都度課金の記載は確認できず" },
];

const faqs = [
  {
    q: "IBJメンバーズの成婚率はどのくらいですか？",
    a: "公式サイトでは「成婚退会者の割合1/2以上」と公表されています（2026年8月3日確認）。算出定義は「2025年1月〜12月の主要コース実績で、全退会者のうち成婚退会者が占める割合（IBJシステム外での成婚を含む）」です。なおIBJメンバーズの「成婚」はプロポーズが成功し婚約した時点を指し、お見合い成立や交際開始ではありません。定義とあわせて確認することが大切です。",
  },
  {
    q: "IBJメンバーズの入会条件はありますか？",
    a: "結婚の意思がある独身で定職をお持ちの方が対象です。公式FAQでは男性25〜49歳（年収基準あり・20代400万円以上〜40代600万円以上などエリアにより異なる）、女性20〜39歳とされています。必要書類は身分証・住民票・独身証明書・収入証明書・学歴証明書（短大卒以上）・職業証明書（該当者）です。条件の詳細は無料カウンセリングで確認できます。",
  },
  {
    q: "IBJメンバーズとIBJ加盟店の違いは何ですか？",
    a: "IBJメンバーズは株式会社IBJが直接運営する直営店、IBJ加盟店はIBJ連盟に加盟する独立した結婚相談所です。どちらも同じIBJの会員ネットワーク（110,420名・2026年7月時点）で活動できますが、料金体系やサポート方針は運営元ごとに異なります。広告の「会員数No.1」等はIBJ連盟全体の実績を指す場合が多いので、どの主体の数字かを確認して比較しましょう。",
  },
  {
    q: "IBJメンバーズは休会できますか？",
    a: "できます。公式FAQによると、契約期間中に1ヶ月単位で最長3ヶ月まで活動を休止でき、休会中の月会費はかかりません。仕事の繁忙期などに合わせて活動ペースを調整できるので、入会前に休会条件を確認しておくと安心です。",
  },
  {
    q: "IBJメンバーズを途中で退会した場合、返金はありますか？",
    a: "公式FAQによると、中途退会は可能で、入会時に支払った活動サポート費のうち未活動分が返金されます。また契約書面の受領日から8日以内であればクーリングオフにより無条件で契約を解除でき、支払済みの料金は全額返金されます。契約条件の詳細は入会前に書面で確認しましょう。",
  },
  {
    q: "IBJメンバーズの1年間の活動費用総額はいくらですか？",
    a: "初期費用252,450円＋月会費17,050円×12ヶ月＝約457,050円が活動費用の目安です（税込・2026年8月3日時点の公式料金）。婚約に至って成婚退会する場合は成婚料220,000円が加わり、総額の目安は約677,050円です。最新の料金・キャンペーンは無料カウンセリングで確認することをおすすめします。",
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
  { name: "ムスベル", path: "/review/musbell/" },
  { name: "東京フォリパートナー", path: "/review/folli-partner/" },
  { name: "サンマリエ", path: "/review/sunmarie/" },
  { name: "ツヴァイ", path: "/review/zwei/" },
];

export default function IbjMembersReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "IBJメンバーズ" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          IBJメンバーズの口コミ・評判｜料金・成婚率の定義・加盟店との違いを徹底解説
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年8月（料金・実績は2026年8月3日に公式サイトで確認）</p>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          <div className="bg-[#8B7355] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
          <div className="divide-y divide-gray-50">
            {Object.entries({
              サービス名: overview.name, タイプ: overview.type, 会員数: overview.members,
              対応エリア: overview.area, 初期費用: overview.initialFee, 月会費: overview.monthlyFee,
              成婚料: overview.matchingFee, 年齢層: overview.age, 成婚率: overview.successRate,
            }).map(([k, v]) => (
              <div key={k} className="flex px-6 py-3.5 text-sm">
                <span className="w-28 shrink-0 font-medium text-[#2C2C2C]/50 tracking-wider">{k}</span>
                <span className="text-[#2C2C2C]">{v}</span>
              </div>
            ))}
          </div>
          <p className="px-6 pb-4 text-xs text-[#2C2C2C]/50 leading-relaxed">※成婚率の定義: 2025年1月〜12月の主要コース実績。全退会者のうち成婚退会者が占める割合（IBJシステム外での成婚を含む）。IBJメンバーズの「成婚」はプロポーズ成功後の「婚約」時点を指します。料金は全て税込・2026年8月3日公式サイト確認。</p>
        </div>

        <A8Banner ad="ibj-members" />

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">IBJメンバーズの強み・特徴</h2>
          <div className="space-y-6">
            {strengths.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-medium text-lg mb-2 text-[#8B7355] tracking-wider">{s.title}</h3>
                <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="bg-green-50/50 rounded-xl p-6">
            <h3 className="font-medium text-green-800 mb-4 tracking-wider">メリット</h3>
            <ul className="space-y-2">
              {pros.map((p) => (<li key={p} className="text-sm text-[#2C2C2C]/70 flex gap-2"><span className="text-green-500 shrink-0">+</span>{p}</li>))}
            </ul>
          </div>
          <div className="bg-red-50/50 rounded-xl p-6">
            <h3 className="font-medium text-red-800 mb-4 tracking-wider">確認しておきたいポイント</h3>
            <ul className="space-y-2">
              {cons.map((c) => (<li key={c} className="text-sm text-[#2C2C2C]/70 flex gap-2"><span className="text-red-400 shrink-0">-</span>{c}</li>))}
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">IBJメンバーズの料金（税込・2026年8月3日公式確認）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">金額（税込）</th>
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">支払いタイミング</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((f) => (
                  <tr key={f.item} className="border-t border-gray-50">
                    <td className="px-4 py-3 font-medium text-[#2C2C2C]/70">{f.item}</td>
                    <td className="px-4 py-3 text-center">{f.price}</td>
                    <td className="px-4 py-3 text-[#2C2C2C]/60">{f.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-3 leading-relaxed">
            1年間活動した場合の目安は約457,050円（初期費用＋月会費12ヶ月）、婚約して成婚退会する場合は成婚料を加えて約677,050円です。クーリングオフ（契約書面受領日から8日以内・全額返金）や中途退会時の未活動分返金の制度も公式FAQに明示されているので、契約前に説明を受けておくと安心です。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            IBJメンバーズ（直営）とIBJ加盟店（連盟）の違い
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            「IBJ」と名の付くサービスには、株式会社IBJが直接運営する<strong>直営店のIBJメンバーズ</strong>と、IBJ連盟（日本結婚相談所連盟）に加盟する<strong>独立した結婚相談所（IBJ加盟店）</strong>の2種類があります。どちらも同じIBJの会員ネットワーク（登録会員数110,420名・2026年7月時点）でお相手検索・お見合いができる点は共通ですが、運営元・料金・サポート方針が異なります。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#8B7355]">IBJメンバーズ（直営）</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">IBJ加盟店（連盟）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">運営元</td><td className="px-4 py-3 text-center">株式会社IBJ（東証プライム上場）</td><td className="px-4 py-3 text-center">各加盟相談所（独立運営）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">出会える会員</td><td className="px-4 py-3 text-center" colSpan={2}>同じIBJネットワーク（110,420名・2026年7月時点）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">料金体系</td><td className="px-4 py-3 text-center">全店共通（初期252,450円・月17,050円・成婚料220,000円）</td><td className="px-4 py-3 text-center">相談所ごとに異なる</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">サポート</td><td className="px-4 py-3 text-center">カウンセラー約60人担当制・婚約までフルサポート</td><td className="px-4 py-3 text-center">仲人の個性・少人数担当など相談所ごとに特色</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">店舗</td><td className="px-4 py-3 text-center">全国9店舗（主要都市）</td><td className="px-4 py-3 text-center">全国各地に多数</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            広告でよく見る「会員数No.1」「成婚数No.1」といった表記は、多くの場合<strong>IBJ連盟全体の実績</strong>を指しています。直営・加盟店それぞれの良さがあるので、「どの主体の数字か」を確認しながら、サポート体制と料金のバランスで比較するのがおすすめです。当サイトではIBJ加盟店のレビューも公開しています。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/review/musbell/" className="text-[#8B7355] underline">ムスベル（IBJ含む複数連盟加盟・全国展開）の評判・料金を見る</Link></li>
            <li><Link href="/review/folli-partner/" className="text-[#8B7355] underline">東京フォリパートナー（IBJ正規加盟・優良認定加盟店）の評判・料金を見る</Link></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            IBJメンバーズの評判・口コミの傾向まとめ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            「IBJメンバーズ 評判」「IBJメンバーズ 口コミ」で調べる方向けに、寄せられる声の<strong>良い評判・気になる評判</strong>を傾向ごとに整理しました。感じ方には個人差があるため、実際の雰囲気は無料カウンセリングで直接確認することをおすすめします。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50/50 rounded-xl p-6">
              <h3 className="font-medium text-green-800 mb-4 tracking-wider">良い評判の傾向</h3>
              <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>上場企業直営の安心感と業界最大級の会員数を評価する声が多い傾向です</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>「成婚＝婚約」まで伴走するサポートの手厚さを挙げる声が見られます</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>会員の年収・学歴データが公表されており相手の質に期待できるという声があります</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>お見合い実現率94%（2025年1〜6月・プロフィール公開会員）など実績の透明性を評価する声もあります</li>
              </ul>
            </div>
            <div className="bg-red-50/50 rounded-xl p-6">
              <h3 className="font-medium text-red-800 mb-4 tracking-wider">気になる評判の傾向</h3>
              <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
                <li className="flex gap-2"><span className="text-red-400 shrink-0">-</span>初期費用252,450円と成婚料220,000円で総額が高めだと感じる声があります</li>
                <li className="flex gap-2"><span className="text-red-400 shrink-0">-</span>店舗が9店舗と主要都市中心のため、通いやすさを事前に確認したという声が見られます</li>
                <li className="flex gap-2"><span className="text-red-400 shrink-0">-</span>入会条件（年齢・年収基準）があるため、まず無料相談で自分が対象か確認したという声もあります</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※上記は当サイトが収集・整理した口コミ傾向です。感じ方には個人差があり、評価は担当者・店舗によっても異なります。特定の個人の体験談ではなく一般的な傾向としてご参照ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">
            IBJメンバーズと他社を比較して選ぶ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            IBJメンバーズが自分に合うか迷ったら、料金総額・会員数・サポート形式を他社と見比べるのがおすすめです。同じIBJネットワークで活動できる加盟店との比較も判断材料になります。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/ibj-vs-musbell/" className="text-[#8B7355] underline">IBJメンバーズとムスベルを比較する（直営と加盟店の違い・成婚までの総額試算）</Link></li>
            <li><Link href="/compare/" className="text-[#8B7355] underline">結婚相談所の料金比較（13社一覧）を見る</Link></li>
            <li><Link href="/review/musbell/" className="text-[#8B7355] underline">ムスベルの評判・料金を見る</Link></li>
            <li><Link href="/review/folli-partner/" className="text-[#8B7355] underline">東京フォリパートナーの評判・料金を見る</Link></li>
            <li><Link href="/review/sunmarie/" className="text-[#8B7355] underline">サンマリエの評判・料金を見る</Link></li>
          </ul>
        </section>

        <A8Banner ad="ibj-members" />

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#8B7355] pl-4 tracking-widest">よくある質問</h2>
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

        <section className="bg-[#333333] rounded-2xl p-10 text-white text-center mb-12">
          <h2 className="text-xl font-light mb-4 tracking-widest">IBJメンバーズの無料カウンセリングを予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">上場企業直営・業界最大級ネットワークの婚活を無料相談で体験してみましょう</p>
          <Link href="/" className="inline-block bg-[#8B7355] hover:bg-[#7A6548] text-white font-normal py-3 px-8 rounded-full transition-colors tracking-widest">ランキングに戻る</Link>
        </section>

        <section>
          <h2 className="text-lg font-light mb-4 tracking-widest">他の結婚相談所も見る</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link key={s.name} href={s.path} className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm font-normal hover:border-[#8B7355] hover:text-[#8B7355] transition-colors tracking-wider">{s.name}</Link>
            ))}
          </div>
        </section>
      <AuthorBox />
      </article>
    </>
  );
}
