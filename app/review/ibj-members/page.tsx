import Link from "next/link";
import { ReviewVoices } from "@/components/ReviewFacts";
import Breadcrumb from "@/components/Breadcrumb";
import FeePosition from "@/components/FeePosition";
import A8Banner from "@/components/A8Banner";
import AuthorBox from "@/components/AuthorBox";
import FlowGuide from "@/components/FlowGuide";
import BrandStores from "@/components/BrandStores";
import ReviewExtra from "@/components/ReviewExtra";

export const metadata = {
  title: "IBJメンバーズの口コミ・評判｜オリコン利用者コメント21件をテーマ別に集計・料金・年収基準【2026年10月】",
  description:
    "IBJメンバーズ（株式会社IBJ直営）の口コミ・評判を、オリコンの利用者コメント21件のテーマ別集計と項目別得点で整理しています。料金（2026年10月24日公式確認）、男性の年収基準、成婚率の定義、IBJ加盟店との違いも掲載しています。",
};

const overview = {
  name: "IBJメンバーズ",
  type: "ハイブリッド型（株式会社IBJ直営）",
  members: "111,160名（2026年9月時点・IBJ登録会員数）",
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
    desc: "IBJメンバーズは、結婚相談所ネットワーク「IBJ（日本結婚相談所連盟）」を運営する株式会社IBJ（東証プライム上場・証券コード6071）の直営結婚相談所です。連盟の仕組みを構築した会社自体が運営しているため、IBJのシステムとノウハウを直接活用できる点が特徴です。",
  },
  {
    title: "登録会員数111,160名の会員基盤にアクセス",
    desc: "IBJの登録会員数は111,160名（2026年9月時点）です。会員データ（2026年1月1日時点）では男性の90.2%が年収500万円以上、四大・大学院卒が全体の85%と、会員の属性も公表されています。このネットワークから検索・申込みができます。",
  },
  {
    title: "「成婚＝婚約」と定義したうえでのフルサポート",
    desc: "IBJメンバーズは、お見合い成立や交際開始ではなく「プロポーズが成功し婚約した時点」を成婚と定義しています。公表実績は成婚退会者の割合1/2以上（2025年1月〜12月の主要コース実績。全退会者のうち成婚退会者の割合・IBJシステム外での成婚を含む）で、婚約までを成婚として扱う方針が数値の定義にも表れています。",
  },
  {
    title: "カウンセラー1人あたり約60人の担当制",
    desc: "カウンセラー1人あたりの担当会員数は約60人と公表されており、活動設計からお見合い調整、交際中の相談、プロポーズ・両親挨拶まで一貫したサポートを受けられます。お見合い実現率94%・交際実現率83%（2025年1月〜6月にプロフィールを公開した会員）という実績も公表されています。",
  },
];

const pros = [
  "東証プライム上場企業の直営でシステム・ノウハウを直接活用できる",
  "登録会員数111,160名（2026年9月時点）の会員基盤",
  "「成婚＝婚約」定義で成婚退会者の割合1/2以上の実績を公表",
  "休会制度あり（1ヶ月単位で最長3ヶ月・休会中は月会費不要）",
  "クーリングオフ・未活動分返金の制度が明示されている",
];

const cons = [
  "初期費用252,450円は業界でも高めの水準（サポート内容との比較で判断）",
  "成婚料220,000円が発生する（婚約まで至った場合のみ）",
  "店舗は9店舗で首都圏・主要都市中心（通える範囲の店舗の有無は要確認）",
];

const fees = [
  { item: "登録料", price: "33,000円", note: "入会時" },
  { item: "活動サポート費", price: "219,450円", note: "入会時（初期費用合計252,450円）" },
  { item: "月会費", price: "17,050円", note: "毎月" },
  { item: "成婚料", price: "220,000円", note: "成婚退会時（成婚＝婚約）" },
  { item: "お見合い料", price: "記載なし", note: "公式料金ページに都度課金の記載なし" },
];

const faqs = [
  {
    q: "IBJメンバーズの成婚率はどのくらいですか？",
    a: "公式サイトでは「成婚退会者の割合1/2以上」と公表されています（2026年10月24日確認）。算出定義は「2025年1月〜12月の主要コース実績で、全退会者のうち成婚退会者が占める割合（IBJシステム外での成婚を含む）」です。なおIBJメンバーズの「成婚」はプロポーズが成功し婚約した時点を指し、お見合い成立や交際開始ではありません。定義とあわせて確認することが大切です。",
  },
  {
    q: "IBJメンバーズの入会条件はありますか？",
    a: "結婚の意思がある独身で定職をお持ちの方が対象です。公式FAQでは男性25〜49歳、女性20〜39歳とされ、男性には前年1年間の収入による年収基準があります。東京・有楽町・銀座・新宿西口・横浜の各店では20代400万円以上・30代500万円以上・40代600万円以上、名古屋・大阪・神戸・福岡の各店では20代300万円以上・30代400万円以上・40代500万円以上です（2026年10月24日確認）。必要書類は身分証・住民票・独身証明書・収入証明書・学歴証明書（短大卒以上）・職業証明書（該当者）です。条件の詳細は無料相談で確認できます。",
  },
  {
    q: "IBJメンバーズとIBJ加盟店の違いは何ですか？",
    a: "IBJメンバーズは株式会社IBJが直接運営する直営店、IBJ加盟店はIBJ連盟に加盟する独立した結婚相談所です。どちらも同じIBJの会員ネットワーク（111,160名・2026年9月時点）で活動できますが、料金体系やサポート方針は運営元ごとに異なります。広告の「会員数No.1」等はIBJ連盟全体の実績を指す場合が多いので、どの主体の数字かを確認したうえで比較することをおすすめします。",
  },
  {
    q: "IBJメンバーズは休会できますか？",
    a: "できます。公式FAQによると、契約期間中に1ヶ月単位で最長3ヶ月まで活動を休止でき、休会中の月会費はかかりません。仕事の繁忙期などに合わせて活動ペースを調整できるため、入会前に休会条件を確認しておくと安心です。",
  },
  {
    q: "IBJメンバーズを途中で退会した場合、返金はありますか？",
    a: "公式FAQによると、中途退会は可能で、入会時に支払った活動サポート費のうち未活動分が返金されます。また契約書面の受領日から8日以内であればクーリングオフにより無条件で契約を解除でき、支払済みの料金は全額返金されます。契約条件の詳細は、入会前に書面にてご確認ください。",
  },
  {
    q: "IBJメンバーズの1年間の活動費用総額はいくらですか？",
    a: "初期費用252,450円＋月会費17,050円×12ヶ月＝約457,050円が活動費用の目安です（税込・2026年10月24日に公式サイトで再確認した料金）。婚約に至って成婚退会する場合は成婚料220,000円が加わり、総額の目安は約677,050円です。最新の料金・キャンペーンは無料相談で確認することをおすすめします。",
  },
  {
    q: "IBJメンバーズの悪い口コミにはどのような内容がありますか？",
    a: "オリコン顧客満足度調査に掲載されたIBJメンバーズの利用者コメント21件のうち、「気になる点」は6件です。当サイトで分類すると、担当者からの働きかけが少ない・サポートを十分に受けられなかったという内容が3件、お見合いが成立しにくい・会える人数が少なかったという内容が3件でした（2026年10月24日確認）。料金に触れたコメントはありませんが、同じ調査の項目別得点では「コストパフォーマンス」が63.9点と8項目の中で最も低くなっています。",
  },
  {
    q: "IBJメンバーズに割引制度はありますか？",
    a: "公式FAQでは、他社から乗り換える方向けの「のりかえ割」が案内されています（2026年10月24日確認）。割引額や対象条件は公式サイトの案内ページまたは無料カウンセリングでご確認ください。",
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

// 競合上位記事との差分（2026-10-14 競合比較で追加）
const REVIEW_EXTRA = {
  "name": "IBJメンバーズ",
  "ratings": [
    {
      "media": "オリコン顧客満足度 IBJメンバーズ",
      "score": "総合67.2点",
      "count": "利用者コメント21件（調査全体の回答者3,922人）",
      "detail": "男性部門69.1点（1位）・40代68.3点（1位）・東海66.3点（1位）・関東67.8点（2位）・再婚目的69.5点（2位）・30代67.0点（2位）・近畿66.1点（2位）・オンライン66.3点（2位）・女性部門65.1点（4位）。推奨意向68.8%、希望の相手と出会えた人78.9%。項目別では「店舗の雰囲気・清潔さ」69.7点が最も高く、「コストパフォーマンス」63.9点が最も低くなっています。コメントは「良い点」15件・「気になる点」6件（2026年10月24日確認）。",
      "url": "https://life.oricon.co.jp/rank_marriage/company/loungemembers/"
    }
  ],
  "ratingNotes": [
    "サンマリエも同じ調査で総合67.2点です（2社の比較は /review/sunmarie/ を参照）。"
  ],
  "fitYes": [
    "婚約まで担当カウンセラーに伴走してほしい人",
    "男性で年収基準を満たし、IBJの会員基盤で活動したい人",
    "休会制度（最長3ヶ月・月会費なし）を使いながら活動したい人",
    "オリコンの調査で評価が高い男性・40代の人"
  ],
  "fitNo": [
    "初期費用252,450円・成婚料220,000円を負担したくない人",
    "男性は25〜49歳、女性は20〜39歳の入会条件に当てはまらない人",
    "オンライン完結の低価格サービスで十分な人"
  ],
  "outdated": [
    {
      "seen": "エントリー/アシスト/プライムの3コース・すべてのコースに中途退会時の返金保証・国家公務員割引（初期費用30,000円引き）",
      "source": "駅探PICKS婚活（2022年11月23日更新）",
      "now": "公式料金ページは登録料33,000円＋活動サポート費219,450円・月会費17,050円・成婚料220,000円の1体系です。返金保証・国家公務員割引の記載はありません（中途退会時の未活動分返金は公式FAQに記載）。"
    },
    {
      "seen": "成婚率50.5%（2021年1〜6月の主要コース実績）",
      "source": "駅探PICKS婚活（2022年11月23日更新）",
      "now": "「成婚退会者の割合1/2以上」（2025年1〜12月の主要コース実績・全退会者のうち成婚退会者の割合）。"
    },
    {
      "seen": "会員数約9万人・入会から平均8.7ヶ月で婚約（2023年1〜12月の成婚退会者）",
      "source": "オリコン顧客満足度 IBJメンバーズの企業情報欄（2026年10月24日確認時点の掲載）",
      "now": "公式サイトの登録会員数は111,160名（2026年9月時点）です。成婚までの平均期間は、2026年10月24日時点の公式「実績」ページには掲載されていません。"
    }
  ]
};

export default function IbjMembersReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "IBJメンバーズ" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          IBJメンバーズの口コミ・評判｜料金・成婚の定義・加盟店との違いを公式情報で確認
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月24日（料金・会員数・入会条件は2026年10月24日に公式サイトで再確認。オリコンの利用者コメント21件のテーマ別集計を追加）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />IBJメンバーズとは（運営・料金・入会条件・口コミの傾向）
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>運営・形態</strong>：結婚相談所の連盟「IBJ」を運営する株式会社IBJ（東証プライム上場）の<strong>直営の結婚相談所</strong>です。全国9店舗で、IBJの登録会員111,160名（2026年9月時点）からお相手を探せます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>料金</strong>：登録料33,000円＋活動サポート費219,450円＋月会費17,050円＋成婚料220,000円（税込）。<strong>1年で婚約・成婚退会した場合の総額目安は約67.7万円</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>入会条件</strong>：男性25〜49歳・女性20〜39歳。男性は店舗のエリアと年代に応じた年収基準（300万〜600万円以上）があります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>口コミの傾向</strong>：オリコンの利用者コメント21件では、担当者の助言・対応を評価する内容が5件と最も多い一方、「気になる点」6件はサポートが受け身だったという内容3件、お見合いが成立しにくかったという内容3件に分かれます（<a href="#review-themes" className="underline text-[#A08447]">テーマ別の集計</a>）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>実績の表記</strong>：成婚の定義は「婚約」で、成婚退会者の割合は1/2以上（2025年1〜12月の主要コース実績）です。公式サイトの「成婚率No.1」は、日本マーケティングリサーチ機構による2024年8月の主要8社を対象とした調査（公開情報と関係者へのヒアリングにもとづく比較）が根拠として注記されています。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※料金・会員数・入会条件は公式サイト（料金・会員データ・実績・よくあるご質問の各ページ）で2026年10月24日に確認した掲載値です。最新の条件は公式サイトおよび無料カウンセリングでご確認ください。</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          <div className="bg-[#A08447] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
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
          <p className="px-6 pb-4 text-xs text-[#2C2C2C]/50 leading-relaxed">※成婚率の定義: 2025年1月〜12月の主要コース実績。全退会者のうち成婚退会者が占める割合（IBJシステム外での成婚を含む）。IBJメンバーズの「成婚」はプロポーズ成功後の「婚約」時点を指します。料金はすべて税込で、2026年10月24日に公式サイトで再確認しています（成婚率の公表値も同日に公式「実績」ページで確認）。</p>
        </div>

        <A8Banner ad="ibj-members" />

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">IBJメンバーズの強み・特徴</h2>
          <div className="space-y-6">
            {strengths.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-medium text-lg mb-2 text-[#A08447] tracking-wider">{s.title}</h3>
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">IBJメンバーズの料金（税込・2026年10月24日公式再確認）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">金額（税込）</th>
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
            1年間活動した場合の目安は約457,050円（初期費用＋月会費12ヶ月）、婚約して成婚退会する場合は成婚料を加えて約677,050円です。クーリングオフ（契約書面受領日から8日以内・全額返金）や中途退会時の未活動分返金の制度も公式FAQに明示されているため、契約前に説明を受けておくと安心です。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">IBJメンバーズの入会条件と男性の年収基準（2026年10月24日公式確認）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            入会できるのは、結婚の意思がある独身で定職をお持ちの方です。年齢は男性25〜49歳・女性20〜39歳で、男性には前年1年間の収入による年収基準が店舗のエリア別に設けられています。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">エリア（店舗）</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">20代</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">30代</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">40代</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">東京・有楽町・銀座・新宿西口・横浜</td><td className="px-4 py-3 text-center">400万円以上</td><td className="px-4 py-3 text-center">500万円以上</td><td className="px-4 py-3 text-center">600万円以上</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">名古屋・大阪・神戸・福岡</td><td className="px-4 py-3 text-center">300万円以上</td><td className="px-4 py-3 text-center">400万円以上</td><td className="px-4 py-3 text-center">500万円以上</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">※出典：IBJメンバーズ公式「よくあるご質問」（2026年10月24日確認）。必要書類は身分証明書・独身証明書・収入証明書・最終学歴証明書などです。公式の会員データ（2026年1月1日時点）では、男性の90.2%が年収500万円以上、70.8%が600万円以上、大学卒以上は男性88.6%・女性82.4%と公表されています。オリコンの「気になる点」には、年収などの条件面で会える人が少なかったという男性の声もあるため、基準ぎりぎりの方は無料カウンセリングで活動見込みを確認されることをおすすめします。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            IBJメンバーズ（直営）とIBJ加盟店（連盟）の違い
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            「IBJ」と名の付くサービスには、株式会社IBJが直接運営する<strong>直営店のIBJメンバーズ</strong>と、IBJ連盟（日本結婚相談所連盟）に加盟する<strong>独立した結婚相談所（IBJ加盟店）</strong>の2種類があります。どちらも同じIBJの会員ネットワーク（登録会員数111,160名・2026年9月時点）でお相手検索・お見合いができる点は共通ですが、運営元・料金・サポート方針が異なります。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">IBJメンバーズ（直営）</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">IBJ加盟店（連盟）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">運営元</td><td className="px-4 py-3 text-center">株式会社IBJ（東証プライム上場）</td><td className="px-4 py-3 text-center">各加盟相談所（独立運営）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">出会える会員</td><td className="px-4 py-3 text-center" colSpan={2}>同じIBJネットワーク（111,160名・2026年9月時点）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">料金体系</td><td className="px-4 py-3 text-center">全店共通（初期費用252,450円・月会費17,050円・成婚料220,000円）</td><td className="px-4 py-3 text-center">相談所ごとに異なる</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">サポート</td><td className="px-4 py-3 text-center">カウンセラー約60人担当制・婚約までフルサポート</td><td className="px-4 py-3 text-center">仲人の個性・少人数担当など相談所ごとに特色</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">店舗</td><td className="px-4 py-3 text-center">全国9店舗（主要都市）</td><td className="px-4 py-3 text-center">全国各地に多数</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            広告でよく見る「会員数No.1」「成婚数No.1」といった表記は、多くの場合<strong>IBJ連盟全体の実績</strong>を指しています。直営・加盟店にはそれぞれ利点があるため、「どの主体の数字か」を確認したうえで、サポート体制と料金のバランスで比較することをおすすめします。当サイトではIBJ加盟店のレビューも公開しています。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/review/musbell/" className="text-[#A08447] underline">ムスベル（IBJ含む複数連盟加盟・全国展開）の評判・料金を見る</Link></li>
            <li><Link href="/review/folli-partner/" className="text-[#A08447] underline">東京フォリパートナー（IBJ正規加盟・優良認定加盟店）の評判・料金を見る</Link></li>
          </ul>
        </section>

        <ReviewVoices
          name="IBJメンバーズ"
          checkedOn="2026年10月24日"
          reviewNote="Googleマップでは、IBJメンバーズ9店舗（東京・銀座・有楽町・新宿西口・横浜・名古屋・大阪・神戸・福岡）に計1,444件の口コミがあり、評価は4.7〜4.9（口コミ件数で加重した平均4.72）でした（当サイトが2026年8〜9月に取得。店舗別はページ下部）。料金は登録料33,000円＋活動サポート費219,450円、月会費17,050円、成婚料220,000円（税込・2026年10月24日公式再確認）で、1年で成婚退会した場合の単純計算は677,050円です。"
          good={[{ text: "担当者の助言が的確・レスポンスが早いなど、担当者の対応を評価する声（5件）", source: "オリコン顧客満足度調査 IBJメンバーズ（利用者コメント21件・2026年10月24日確認）" }, { text: "アプリより効率よく多くの方と会えた、普段出会えない人と出会えたという声（3件）", source: "同上" }, { text: "独身証明書の提出があり、結婚目的の相手と安心して会えたという声（3件）", source: "同上" }]}
          bad={[{ text: "自分から動かないと担当者からの助言がなく、サポートを十分に受けられなかったという声（3件）", source: "オリコン顧客満足度調査 IBJメンバーズ（2026年10月24日確認）" }, { text: "申し込んでもお見合いが成立しにくく、会える人数が少なかったという声（3件）", source: "同上" }]}
          sources={[{ name: "オリコン顧客満足度 IBJメンバーズ", url: "https://life.oricon.co.jp/rank_marriage/company/loungemembers/" }]}
        />

        <section id="review-themes" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">オリコンの利用者コメント21件をテーマ別に集計（2026年10月24日確認）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            IBJメンバーズの口コミを件数と属性つきで確認できる媒体として、オリコン顧客満足度調査の企業ページがあります。掲載中の利用者コメント21件（「良い点」15件・「気になる点」6件、回答者の年代・性別つき）を全件確認し、内容をテーマ別に分類しました。1件に複数の論点がある場合は、それぞれのテーマで数えています。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">テーマ</th>
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C] whitespace-nowrap">件数</th>
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">内容の傾向</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">担当者の助言・対応を評価</td><td className="px-4 py-3">5件</td><td className="px-4 py-3">アドバイスが的確、数字にもとづいて助言してくれる、レスポンスが早い、サポート体制が整っているという内容</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">出会いの数・効率</td><td className="px-4 py-3">3件</td><td className="px-4 py-3">マッチングアプリより多くの方と会えた、最初から人選されていて時間を節約できた、普段出会えない人と出会えたという内容</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">身元の確かさ・結婚への真剣度</td><td className="px-4 py-3">3件</td><td className="px-4 py-3">独身証明書の提出で既婚者がいない、結婚が目的の人と会えるという内容</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">会員数・相談所の選択肢</td><td className="px-4 py-3">2件</td><td className="px-4 py-3">利用者が多く信頼できる、登録している相談所が多く担当者を選べるという内容（後者はIBJ連盟の加盟店を含む仕組みについての記述と考えられます）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">その他の良い点</td><td className="px-4 py-3">4件</td><td className="px-4 py-3">婚活パーティー・マナー講座がある、決まった面談がなく自分のペースで活動できる、成婚した、女性はお見合いのお茶代がかからない（各1件）</td></tr>
                <tr className="border-t border-gray-50 bg-red-50/40"><td className="px-4 py-3">サポートが受け身・不足</td><td className="px-4 py-3">3件</td><td className="px-4 py-3">こちらから動かないと助言がなかった、自分で対処する場面が多かった、お相手の見極めに客観的な助言がほしかったという内容</td></tr>
                <tr className="border-t border-gray-50 bg-red-50/40"><td className="px-4 py-3">お見合いが成立しにくい</td><td className="px-4 py-3">3件</td><td className="px-4 py-3">申し込んでもお見合いに至らない、マッチングできない時期がつらかった、年収等の条件で会える人が少なかったという内容（いずれも30〜40代男性）</td></tr>
              </tbody>
            </table>
          </div>
          <ul className="space-y-1 text-xs text-[#2C2C2C]/60 leading-relaxed">
            <li>※出典：<a href="https://life.oricon.co.jp/rank_marriage/company/loungemembers/" target="_blank" rel="nofollow noopener noreferrer" className="underline">オリコン顧客満足度 IBJメンバーズ 結婚相談所の評判・口コミ</a>（調査全体の回答者3,922人。2026年10月24日に確認）。分類は当サイトによるもので、コメントの本文は転載していません。</li>
            <li>※回答者の内訳は30代が15件と最も多く、20代1件・40代4件・60代以上1件です。件数が少ないため、傾向は目安としてご覧ください。</li>
            <li>※口コミサイト「みん評」にもIBJメンバーズの投稿がありますが、当サイトからはページを閲覧できなかったため、件数・内容は集計に含めていません。</li>
          </ul>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mt-4">
            集計からは、担当者の助言を評価する声が多い一方で、「決まった面談がなく自分のペースで活動できる」という評価と「自分から動かないと助言がない」という不満が同じ特徴の裏表になっていることがわかります。また、お見合いが成立しにくいという声はいずれも男性からで、年収などの条件面に触れたものもあります。無料カウンセリングでは、面談の頻度（定期面談の有無）と、ご自身の年齢・年収に近い会員のお見合い成立状況を確認しておくことをおすすめします。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            IBJメンバーズと他社を比較して選ぶ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            IBJメンバーズがご自身に合うかを判断する際は、料金総額・会員数・サポート形式を他社と比較することをおすすめします。同じIBJネットワークで活動できる加盟店との比較も判断材料になります。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/ibj-vs-musbell/" className="text-[#A08447] underline">IBJメンバーズとムスベルを比較する（直営と加盟店の違い・成婚までの総額試算）</Link></li>
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（24社一覧）を見る</Link></li>
            <li><Link href="/review/musbell/" className="text-[#A08447] underline">ムスベルの評判・料金を見る</Link></li>
            <li><Link href="/review/folli-partner/" className="text-[#A08447] underline">東京フォリパートナーの評判・料金を見る</Link></li>
            <li><Link href="/review/sunmarie/" className="text-[#A08447] underline">サンマリエの評判・料金を見る</Link></li>
          </ul>
        </section>

        <A8Banner ad="ibj-members" />

        <ReviewExtra {...REVIEW_EXTRA} checkedOn="2026年10月24日" />
        <FlowGuide name={overview.name} initialFee={overview.initialFee} monthlyFee={overview.monthlyFee} matchingFee={overview.matchingFee} />

              <FeePosition slug="ibj-members" />

<section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-[#FAFAF8] rounded-xl border border-gray-100">
                <summary className="cursor-pointer px-6 py-4 font-normal text-[#2C2C2C] flex items-center justify-between tracking-wider">
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-[#A08447] text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-[#2C2C2C]/60 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        

        <section className="bg-[#333333] rounded-2xl p-10 text-white text-center mb-12">
          <h2 className="text-xl font-light mb-4 tracking-widest">IBJメンバーズの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">無料相談で、総額と担当体制をご確認いただけます</p>
          <Link href="/" className="inline-block bg-[#A08447] hover:bg-[#8A7239] text-white font-normal py-3 px-8 rounded-full transition-colors tracking-widest">ランキングに戻る</Link>
        </section>

        <section>
          <h2 className="text-lg font-light mb-4 tracking-widest">他の結婚相談所も見る</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link key={s.name} href={s.path} className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm font-normal hover:border-[#A08447] hover:text-[#A08447] transition-colors tracking-wider">{s.name}</Link>
            ))}
          </div>
        </section>
      <AuthorBox />
      <BrandStores href="/review/ibj-members/" brandName="IBJメンバーズ" />

      </article>
    </>
  );
}
