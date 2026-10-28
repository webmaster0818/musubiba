import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FeePosition from "@/components/FeePosition";
import AuthorBox from "@/components/AuthorBox";
import FlowGuide from "@/components/FlowGuide";
import BrandStores from "@/components/BrandStores";

export const metadata = {
  title: "オーネットの口コミ・評判｜料金・会員数・特徴を解説【2026年】",
  description:
    "オーネットの口コミ・評判と料金を解説しています。アクティブプランは入会時費用99,000円・月会費13,200円、成婚料はIBJ会員と成婚した場合のみ220,000円です（2026年10月28日公式確認）。会員数12.1万人の内訳も掲載しています。",
};

// 2026-10-23: 公式サイト（料金・プランページ／トップページ）で再確認し、料金改定後の3プラン・IBJ加盟後の会員数・店舗数に更新。
// 旧記載（月会費16,500円・初期費用116,600円・成婚料0円・自社会員のみ約4.2万人・毎月6名以上の紹介）は公式と一致しないため削除。
const overview = {
  name: "オーネット",
  company: "株式会社オーネット（1980年創業・公式サイトのFAQ）",
  type: "データマッチング型（IBJ加盟）",
  members: "12.1万人（オーネット登録会員30,181名とIBJ会員104,859名の合計から重複13,313名を除いた人数・2026年1月1日時点の公式発表）",
  area: "全国39店舗（公式発表）・オンライン相談可",
  initialFee: "99,000円（アクティブ）／129,800円（スタンダード）／143,000円（プレステージ・招待制）",
  monthlyFee: "13,200円（アクティブ）／20,790円（スタンダード）／24,200円（プレステージ）",
  matchingFee: "IBJ会員と成婚した場合のみ220,000円（オーネット会員同士の成婚は0円。本交際に進む際に交際サポート料27,500円）",
  age: "公式に年齢層の公表なし（20代向けプランあり）",
  successRate: "公式に成婚率の公表なし（平成元年以降の成婚退会者163,031名と公表）",
};

const strengths = [
  {
    title: "1980年創業・運営実績45年以上",
    desc: "公式サイトでは、1980年の創業以来、累計343,885名が入会し、平成元年以降163,031名が成婚退会したと公表しています（2026年10月28日確認）。",
  },
  {
    title: "オーネット会員とIBJ会員の両方から探せる",
    desc: "オーネットはIBJの加盟相談所です。公式発表の会員数12.1万人は、オーネット登録会員とIBJ会員の合計から重複を除いた人数です。スタンダードプランでは、IBJ会員の検索が毎月20名まで利用できます。",
  },
  {
    title: "サポートの手厚さで選べる3プラン",
    desc: "自分で相手を探すアクティブプラン、担当アドバイザーと仲人が併走するスタンダードプラン（公式の「おすすめNo.1」）、専任アドバイザーが付く招待制のプレステージプランがあります。",
  },
];

const pros = [
  "1980年創業で、成婚退会者数（平成元年以降163,031名）を公表している",
  "オーネット会員とIBJ会員の両方から相手を探せる",
  "オーネット会員同士の成婚は成婚料0円",
  "全国39店舗に加え、オンラインでも相談できる",
];

const cons = [
  "IBJ会員と成婚した場合は成婚料220,000円がかかる",
  "オーネット会員同士で本交際に進む際に交際サポート料27,500円がかかる",
  "スタンダードプランは月会費20,790円で、大手の中でも高めの水準",
];

const faqs = [
  {
    q: "オーネットの料金はいくらですか？",
    a: "公式サイトの料金（税込・2026年10月28日確認）は、アクティブプランが入会時費用99,000円・月会費13,200円、スタンダードプランが入会時費用129,800円・月会費20,790円、招待制のプレステージプランが入会時費用143,000円・月会費24,200円です。全プラン共通で、本交際に進む際の交際サポート料27,500円と、IBJ会員と成婚した場合の成婚料220,000円がかかります。休止中の月会費は2,200円です。",
  },
  {
    q: "オーネットの成婚料は0円ですか？",
    a: "お相手によって異なります。オーネット会員同士の成婚は成婚料0円ですが、IBJ会員と成婚した場合は220,000円（税込）がかかります。また、オーネット会員同士で本交際に進む際には、交際サポート料27,500円（税込）がかかります（2026年10月28日公式確認）。",
  },
  {
    q: "オーネットで1年活動するといくらかかりますか？",
    a: "アクティブプランで1年間活動した場合、入会時費用99,000円＋月会費13,200円×12ヶ月＝257,400円です。オーネット会員と成婚した場合は交際サポート料27,500円を加えて284,900円、IBJ会員と成婚した場合は成婚料220,000円を加えて477,400円が目安です（お見合い料・オプションを除く当サイトの試算）。",
  },
  {
    q: "オーネットの会員数は何人ですか？",
    a: "公式サイトでは会員数12.1万人と公表しています。これは2026年1月1日時点のオーネット登録会員数30,181名とIBJ会員数104,859名の合計から、重複13,313名を除いた人数です。",
  },
  {
    q: "オーネットの入会条件はありますか？",
    a: "20歳以上の独身の方が対象です。入会時には独身証明書・収入証明書・本人確認書類などの提出が必要です。詳しい条件は公式サイトまたは無料相談でご確認ください。",
  },
  {
    q: "オーネットの活動はオンラインでもできますか？",
    a: "公式サイトでは、店舗での来店相談に加えてオンラインでの相談にも対応しています。来店が難しい方もご自宅から相談できます。",
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
  { name: "ツヴァイ", path: "/review/zwei/" },
  { name: "パートナーエージェント", path: "/review/partner-agent/" },
  { name: "サンマリエ", path: "/review/sunmarie/" },
  { name: "エン婚活エージェント", path: "/review/en-konkatsu/" },
];

export default function OnetReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "オーネット" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          オーネットの口コミ・評判｜料金・会員数・特徴を解説
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月28日（料金・会員数・店舗数は2026年10月28日に公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-8">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest">オーネットの概要（公式サイト・2026年10月28日確認）</h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li><strong>運営・実績</strong>：株式会社オーネットが運営する、1980年創業の結婚相談所です。累計343,885名が入会し、平成元年以降163,031名が成婚退会したと公表しています。</li>
            <li><strong>会員数</strong>：12.1万人（121,727人）です。オーネット登録会員30,181名とIBJ会員104,859名の合計から、重複13,313名を除いた人数です（2026年1月1日時点）。</li>
            <li><strong>料金</strong>：入会時費用99,000円・月会費13,200円のアクティブプランから、スタンダード（129,800円・20,790円）、招待制のプレステージ（143,000円・24,200円）までの3プランです（税込）。</li>
            <li><strong>成婚料</strong>：オーネット会員同士の成婚は0円、IBJ会員と成婚した場合のみ220,000円です。オーネット会員同士で交際に進む際は交際サポート料27,500円がかかります。</li>
            <li><strong>店舗</strong>：北海道から九州・沖縄まで全国39店舗で、オンライン相談にも対応しています。</li>
            <li><strong>口コミの傾向</strong>：Googleマップでは、アドバイザーの伴走に対する評価と、IBJ経由で他社会員と成婚したという報告が見られます（詳しくは下の口コミの傾向をご覧ください）。</li>
          </ul>
        </div>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <img src="/ss-onet.jpg" alt="オーネット 公式サイト" className="w-full h-auto" />
          <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: 公式サイトより</p>
        </div>

        {/* Overview table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="bg-[#A08447] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
          <div className="divide-y divide-gray-50">
            {Object.entries({
              サービス名: overview.name,
              運営会社: overview.company,
              タイプ: overview.type,
              会員数: overview.members,
              対応エリア: overview.area,
              初期費用: overview.initialFee,
              月会費: overview.monthlyFee,
              成婚料: overview.matchingFee,
              年齢層: overview.age,
              成婚率: overview.successRate,
            }).map(([k, v]) => (
              <div key={k} className="flex px-6 py-3.5 text-sm">
                <span className="w-28 shrink-0 font-medium text-[#2C2C2C]/50 tracking-wider">{k}</span>
                <span className="text-[#2C2C2C]">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            オーネットの強み・特徴
          </h2>
          <div className="space-y-6">
            {strengths.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-medium text-lg mb-2 text-[#A08447] tracking-wider">{s.title}</h3>
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
                  <span className="text-green-500 shrink-0">+</span>{p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50/50 rounded-xl p-6">
            <h3 className="font-medium text-red-800 mb-4 tracking-wider">デメリット</h3>
            <ul className="space-y-2">
              {cons.map((c) => (
                <li key={c} className="text-sm text-[#2C2C2C]/70 flex gap-2">
                  <span className="text-red-400 shrink-0">-</span>{c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Reviews */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 tracking-widest">他社との比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">オーネット</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">ツヴァイ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">パートナーエージェント</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">13,200円〜</td><td className="px-4 py-3 text-center">15,950円〜</td><td className="px-4 py-3 text-center">14,300円〜</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">99,000円〜</td><td className="px-4 py-3 text-center">118,800円〜</td><td className="px-4 py-3 text-center">99,000円〜（登録料込み）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">会員数</td><td className="px-4 py-3 text-center">12.1万人（IBJ会員を含む）</td><td className="px-4 py-3 text-center">11.7万人（IBJ会員を含む）</td><td className="px-4 py-3 text-center">192,000人（3連盟の合計）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">データマッチング型</td><td className="px-4 py-3 text-center">ハイブリッド型</td><td className="px-4 py-3 text-center">仲人型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">オーネット会員同士の成婚は成婚料0円</td><td className="px-4 py-3 text-center">ご紹介プランは成婚料0円</td><td className="px-4 py-3 text-center">成婚料220,000円</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            オーネットの評判・口コミの傾向まとめ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            「オーネット 評判」「オーネット 口コミ」で調べる方向けに、寄せられる声の<strong>良い評判・気になる評判</strong>を傾向ごとに整理しています。感じ方には個人差があるため、実際の評判は無料相談で直接確認することをおすすめします。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50/50 rounded-xl p-6">
              <h3 className="font-medium text-green-800 mb-4 tracking-wider">良い評判の傾向</h3>
              <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>成婚退会した方から「アドバイザーが親身だった」という声が多く見られます</li>
                <li className="flex gap-2"><span className="text-green-500 shrink-0">+</span>IBJのネットワーク経由で他社の会員と成婚したという報告が複数あります</li>
                                              </ul>
            </div>
            <div className="bg-red-50/50 rounded-xl p-6">
              <h3 className="font-medium text-red-800 mb-4 tracking-wider">気になる評判の傾向</h3>
              <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
                                                <li className="flex gap-2"><span className="text-red-400 shrink-0">-</span>申し込みが成立しない・返信が来ないなど、活動初期につまずいたという声が見られます</li>
                <li className="flex gap-2"><span className="text-red-400 shrink-0">-</span>プロフィールの更新が反映されないなど、事務対応への不満も見られます</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※上記は、下の「Googleマップの口コミの傾向」（2026年9月5日取得）を当サイトが要約したものです。感じ方には個人差があり、評価は担当者・プランによっても異なります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            オーネットと他社を比較して選ぶ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            オーネットがご自身に合うか迷われた場合は、料金総額・会員数・サポート形式を他社と比較することをおすすめします。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（24社一覧）を見る</Link></li>
            <li><Link href="/review/zwei/" className="text-[#A08447] underline">ツヴァイの評判・料金を見る</Link></li>
            <li><Link href="/review/partner-agent/" className="text-[#A08447] underline">パートナーエージェントの評判・料金を見る</Link></li>
            <li><Link href="/review/sunmarie/" className="text-[#A08447] underline">サンマリエの評判・料金を見る</Link></li>
          </ul>
        </section>

        {/* 口コミの傾向(編集部要約) */}
              <FeePosition slug="onet" />

<section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">Googleマップの口コミの傾向（2026年9月5日取得・当サイトによる要約）</h2>
          <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-6 space-y-3 text-sm leading-relaxed text-[#555]">
            <p><span className="font-medium text-[#A08447]">よく見られる好意的な声</span>：成婚退会者からの「アドバイザーが親身だった」という感謝が最も多く、「落ち込んだ時に一緒に悩んでくれた」「相談したい時に時間を作ってくれた」など伴走面の評価が中心です。特徴的なのは、<span className="font-medium">オーネット独自システムに加えてIBJ加盟のネットワーク経由で他社会員と成婚した</span>という報告が複数ある点で、出会いの母集団が2系統ある構造が口コミからも確認できます。</p>
            <p><span className="font-medium text-rose-700">気になる声</span>：「申し込みがマッチしない」「返信が返ってこない」という活動初期のつまずきや、「プロフィール更新が数ヶ月反映されなかった」という事務対応への強い不満も見られます。中間的な声として「紹介はあるが、自分で積極的に動かないと成果は出ない」という指摘が複数あり、受け身の活動では成果に差が出やすいサービスといえます。</p>
            <p className="text-xs text-[#999]">※Googleマップの複数店舗(銀座・大阪梅田・名古屋)の直近の口コミをPlaces APIで取得し、当サイトで内容を確認したうえで傾向を要約したものです（本文の転載は行っていません）。個々の体験は店舗・担当者・時期により異なります。</p>
          </div>
        </section>

        {/* FAQ */}

        <FlowGuide name={overview.name} initialFee={overview.initialFee} monthlyFee={overview.monthlyFee} matchingFee={overview.matchingFee} />
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

        {/* CTA */}
        

        <section className="bg-[#333333] rounded-2xl p-10 text-white text-center mb-12">
          <h2 className="text-xl font-light mb-4 tracking-widest">オーネットの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">料金・プランの詳細は無料相談でご確認ください</p>
          <Link href="/" className="inline-block bg-[#A08447] hover:bg-[#8A7239] text-white font-normal py-3 px-8 rounded-full transition-colors tracking-widest">
            ランキングに戻る
          </Link>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-lg font-light mb-4 tracking-widest">他の結婚相談所も見る</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link key={s.name} href={s.path} className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm font-normal hover:border-[#A08447] hover:text-[#A08447] transition-colors tracking-wider">
                {s.name}
              </Link>
            ))}
          </div>
        </section>
      <AuthorBox />
      <BrandStores href="/review/onet/" brandName="オーネット" />

      </article>
    </>
  );
}
