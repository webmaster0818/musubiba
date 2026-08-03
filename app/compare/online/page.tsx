import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import A8Banner from "@/components/A8Banner";

export const metadata: Metadata = {
  title: "【2026年8月】オンライン結婚相談所おすすめ4社比較｜1年総額・成婚料0円で選ぶ決定版",
  description:
    "来店不要のオンライン結婚相談所4社（スマリッジ・ウェルスマ・エン婚活エージェント・naco-do）を、公式サイトで検証した実額データで比較。1年総額の最安はスマリッジ125,400円。初期費用・月会費・成婚料・お見合い料・会員基盤・サポート形式を横断比較し、失敗しない選び方3ステップまで解説します。",
  alternates: { canonical: "/compare/online/" },
};

// 料金は全て当サイトが各公式サイトで検証した公表値（税込）。
// スマリッジ・エン婚活・naco-do=2026年7月5日確認／ウェルスマ=2026年7月31日確認。確認日の捏造・数値の持ち込み禁止。
type Agency = {
  slug: string;
  name: string;
  initial: string;
  monthly: string;
  seikon: string;
  omiai: string;
  total1y: string;
  support: string;
  members: string;
  point: string;
};

const agencies: Agency[] = [
  {
    slug: "smartread",
    name: "スマリッジ",
    initial: "6,600円",
    monthly: "9,900円",
    seikon: "0円",
    omiai: "月8件まで0円",
    total1y: "125,400円",
    support: "オンライン完結型（データマッチング＋カウンセラー相談）",
    members: "約3万人（CONNECT-ship連携）",
    point:
      "初期費用6,600円・月会費9,900円・成婚料0円で、1年総額125,400円は当サイト検証済みの中で最安（2026年7月5日確認・税込）。3ヶ月お見合い成立なしの返金保証に加え、28歳以下・対象エリア・シングル親は各月1,100円引きの割引（併用可）もあり、とにかく低額で始めやすいのが魅力です。",
  },
  {
    slug: "wellsma",
    name: "ウェルスマ",
    initial: "49,800円",
    monthly: "11,800円〜",
    seikon: "149,800円",
    omiai: "0円",
    total1y: "191,400円",
    support: "オンライン仲人型（専任カウンセラーがZoom/LINEで伴走）",
    members: "IBJ約10.8万名（2024年末時点の公式掲載値）",
    point:
      "完全オンラインなのに専任カウンセラーが伴走する仲人型サポートが受けられる、いいとこ取りの1社。IBJ正規加盟で約10.8万名の会員基盤に申し込めます。成婚料149,800円は仲人型相場（20万円前後）より低めで、月会費11,800円〜（マイペースプラン）と仲人型としては始めやすい水準です（2026年7月31日確認・税込）。",
  },
  {
    slug: "en-konkatsu",
    name: "エン婚活エージェント",
    initial: "33,000円",
    monthly: "16,500円",
    seikon: "0円",
    omiai: "0円",
    total1y: "231,000円",
    support: "オンライン完結型（担当アドバイザー・毎月6名以上紹介）",
    members: "約3万人（CONNECT-ship連携）",
    point:
      "大手エン・ジャパングループ運営の安心感が持ち味。登録料33,000円・月会費16,500円・成婚料0円で1年総額231,000円（2026年7月5日確認・税込）。毎月6名以上の紹介に加えて検索申込みもでき、3ヶ月以内にお見合いが成立しなければ登録料＋3ヶ月分の月会費が返金される保証付きで始めやすい設計です。",
  },
  {
    slug: "naco-do",
    name: "naco-do（ナコード）",
    initial: "66,000円",
    monthly: "16,800円",
    seikon: "0円",
    omiai: "0円",
    total1y: "267,600円",
    support: "オンライン完結型（カウンセラーにビデオ通話で相談可）",
    members: "約12.1万人（JBA・CONNECT-ship・良縁ネット連携）",
    point:
      "3つの連盟・プラットフォーム連携で約12.1万人と、オンライン完結型では最大級の会員基盤が強み。初期費用66,000円・月会費16,800円の1プランのみのシンプル体系で、成婚料0円（2026年7月5日確認・税込）。90日間出会えなければ全額返金の保証があり、出会いの母数を重視する人にぴったりです。",
  },
];

const differences = [
  {
    t: "来店の要否：オンライン型は入会から活動まで来店不要",
    d: "オンライン型は登録・カウンセリング・お見合い調整までスマホ・PCで完結します。近くに店舗がない地方在住の方や、仕事が忙しくて店舗に通う時間が取れない方でも、全国どこからでも同じサービスを受けられるのが最大の利点です。",
  },
  {
    t: "料金水準：店舗コストがないぶん低額で始めやすい",
    d: "オンライン型は店舗・対面人員のコストが少ないぶん料金が抑えられており、今回の4社では1年総額125,400円〜267,600円（検証済み・税込）。成婚料0円の相談所が多いのも特徴で、成婚しても総額が増えない安心感があります。仲人型・大手型の1年総額はおおよそ30万〜60万円程度が目安とされるため、大きく差が出ます。",
  },
  {
    t: "サポート形式：データマッチング中心。仲人型が良ければウェルスマという選択肢も",
    d: "オンライン型は自分で検索・申し込みを進めるデータマッチングが中心で、その主体性が低料金の源泉です。一方で「オンラインの手軽さと専任カウンセラーの伴走を両立したい」場合は、完全オンラインの仲人型であるウェルスマが有力候補になります。対面サポートが必須かどうかは、無料相談で確認しておくと安心です。",
  },
];

const steps = [
  {
    t: "STEP1：総額（初期費用＋月会費×12＋成婚料）で予算を決める",
    d: "月会費だけで比べず、1年活動した場合の総額で見るのが基本です。検証済み4社の1年総額はスマリッジ125,400円＜ウェルスマ191,400円＜エン婚活231,000円＜naco-do267,600円。成婚料はウェルスマのみ149,800円で、他3社は0円のため成婚しても総額は変わりません。",
  },
  {
    t: "STEP2：サポート形式を選ぶ（自分主導か、仲人の伴走か）",
    d: "自分のペースで探して費用を抑えたいならデータマッチング中心のスマリッジ・エン婚活・naco-do。プロフィール作成からお見合い調整・交際の相談まで専任カウンセラーに伴走してほしいなら、オンライン仲人型のウェルスマが向いています。",
  },
  {
    t: "STEP3：会員基盤と返金保証を確認する",
    d: "出会いの母数はnaco-do約12.1万人（3連盟連携）・ウェルスマIBJ約10.8万名が大きく、スマリッジ・エン婚活は約3万人（CONNECT-ship連携）です。また4社とも保証・割引制度があり（スマリッジ＝3ヶ月お見合い成立なしで返金・各種割引、エン婚活＝3ヶ月不成立で登録料＋月会費返金、naco-do＝90日間出会えなければ全額返金）、条件を無料相談で確認しておくと安心して始められます。",
  },
];

const faqs = [
  {
    q: "オンライン結婚相談所で一番安いのはどこですか？",
    a: "当サイトが公式サイトで検証した4社の範囲（税込）では、スマリッジが1年総額125,400円（登録料6,600円＋月会費9,900円×12・成婚料0円・2026年7月5日確認）で最安です。以下ウェルスマ191,400円、エン婚活エージェント231,000円、naco-do267,600円と続きます。4社ともお見合い料は原則0円（スマリッジは月8件まで0円）で、追加費用を気にせず活動しやすいのもオンライン型の魅力です。",
  },
  {
    q: "オンライン結婚相談所と店舗型の違いは何ですか？",
    a: "最大の違いは「来店の要否」と「料金水準」です。オンライン型は登録から活動までスマホ・PCで完結して来店不要。店舗コストがないぶん低額で、成婚料0円の相談所が多いのが特徴です。店舗型・仲人型は対面の手厚いサポートが受けられる一方、1年総額はおおよそ30万〜60万円程度が目安と高めになります。まず低額で始めたい人・忙しい人・地方在住の人にはオンライン型が始めやすい選択肢です。",
  },
  {
    q: "オンラインでも仲人のサポートは受けられますか？",
    a: "受けられます。ウェルスマは実店舗を持たない完全オンラインでありながら、専任カウンセラーがZoom・LINEで伴走する仲人型サポートが特徴です。IBJ正規加盟で約10.8万名（2024年末時点の公式掲載値）の会員基盤から相手を探せて、成婚料149,800円は仲人型相場（20万円前後）より低め。月会費11,800円〜と仲人型としては始めやすい水準です（2026年7月31日確認・税込）。",
  },
  {
    q: "オンライン結婚相談所でもちゃんと成婚できますか？",
    a: "できます。オンライン型でも連盟に加盟していれば出会いの母数は十分で、naco-doは3連盟連携で約12.1万人、ウェルスマはIBJ約10.8万名の会員基盤があります。さらに4社とも返金保証や紹介保証など「成果が出なかった場合」の制度が用意されているため、リスクを抑えてスタートできます。自分に合うか不安な場合は、複数社の無料相談を受けて比べるのがおすすめです。",
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

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "【2026年8月】オンライン結婚相談所おすすめ4社比較｜1年総額・成婚料0円で選ぶ決定版",
  description:
    "来店不要のオンライン結婚相談所4社を、公式サイトで検証した実額データ（1年総額・初期費用・月会費・成婚料・会員基盤）で横断比較。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  dateModified: "2026-08-03",
  mainEntityOfPage: "https://mu-su-bi-ba.com/compare/online/",
};

export default function OnlineComparePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "料金比較", href: "/compare/" }, { name: "オンライン結婚相談所比較" }]} />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-light mb-4 tracking-wide text-[#2C2C2C]">
          オンライン結婚相談所おすすめ4社比較【2026年8月】来店不要・成婚料0円で選ぶ
        </h1>
        <p className="text-xs text-[#8B8580] mb-4">最終更新: 2026年8月3日｜料金は全て当サイトが各公式サイトで検証した公表値（スマリッジ・エン婚活・naco-do=2026年7月5日、ウェルスマ=2026年7月31日確認・税込）</p>
        <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-6">
          <strong>来店不要で活動できるオンライン結婚相談所</strong>は、店舗コストがないぶん低額で、<strong>成婚料0円</strong>の相談所が多いのが特徴です。このページでは、当サイトが公式サイトで料金を検証できた4社（スマリッジ・ウェルスマ・エン婚活エージェント・naco-do）を、<strong>1年総額・サポート形式・会員基盤</strong>で横断比較します。
        </p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 mb-10">
          <h2 className="text-base font-medium text-[#8B7355] mb-3 tracking-widest">結論：目的別の選び方（検証済み4社・税込）</h2>
          <ul className="space-y-2 text-sm text-[#2C2C2C]/80">
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>とにかく安く始めたい → スマリッジ</strong>（1年総額125,400円・検証済みで最安。成婚料0円なので成婚しても増えません）</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>専任カウンセラーの仲人サポートも欲しい → ウェルスマ</strong>（完全オンラインの仲人型・IBJ約10.8万名・1年総額191,400円）</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>大手グループの安心感と紹介保証 → エン婚活エージェント</strong>（エン・ジャパン系・毎月6名以上紹介・1年総額231,000円）</span></li>
            <li className="flex gap-2"><span className="text-[#8B7355] shrink-0">●</span><span><strong>出会いの母数を最大化したい → naco-do</strong>（3連盟連携で約12.1万人・90日間出会えなければ全額返金・1年総額267,600円）</span></li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">オンライン結婚相談所4社の横断比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#FAF7F2] text-left">
                  <th className="px-3 py-3">相談所</th>
                  <th className="px-3 py-3">初期費用</th>
                  <th className="px-3 py-3">月会費</th>
                  <th className="px-3 py-3">成婚料</th>
                  <th className="px-3 py-3">お見合い料</th>
                  <th className="px-3 py-3">1年総額</th>
                  <th className="px-3 py-3">サポート形式</th>
                  <th className="px-3 py-3">会員基盤</th>
                </tr>
              </thead>
              <tbody>
                {agencies.map((a) => (
                  <tr key={a.slug} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-3 font-medium whitespace-nowrap">
                      <Link href={`/review/${a.slug}/`} className="text-[#8B7355] underline">{a.name}</Link>
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">{a.initial}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{a.monthly}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{a.seikon}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{a.omiai}</td>
                    <td className="px-3 py-3 whitespace-nowrap font-semibold text-[#8B7355]">{a.total1y}</td>
                    <td className="px-3 py-3 text-xs">{a.support}</td>
                    <td className="px-3 py-3 text-xs">{a.members}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-3 leading-relaxed">
            ※1年総額＝初期費用＋月会費×12ヶ月（各社の最安プラン基準・成婚料0円の場合）。ウェルスマは成婚退会時に成婚料149,800円が加わります（成婚した場合の総額341,200円）。料金は当サイトが各公式サイトで確認した公表値（スマリッジ・エン婚活・naco-do=2026年7月5日／ウェルスマ=2026年7月31日確認・税込）ですが、改定・キャンペーンにより変わる場合があるため、申込前に各公式サイトでご確認ください。10社まで広げた総額ランキングは<Link href="/compare/cheap/" className="text-[#8B7355] underline">安い結婚相談所の総額比較</Link>をご覧ください。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">各社の特徴とおすすめな人</h2>
          <div className="space-y-4">
            {agencies.map((a) => (
              <div key={a.slug} className="bg-white rounded-xl border border-gray-100 p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-medium text-[#8B7355] tracking-wider">
                    <Link href={`/review/${a.slug}/`} className="hover:underline">{a.name}</Link>
                  </h3>
                  <span className="text-sm font-semibold">{a.total1y}<span className="text-xs text-[#2C2C2C]/50">／1年</span></span>
                </div>
                <p className="text-sm text-[#2C2C2C]/70 leading-relaxed mb-2">{a.point}</p>
                <Link href={`/review/${a.slug}/`} className="text-sm text-[#8B7355] underline">詳しい口コミ・評判を見る →</Link>
              </div>
            ))}
          </div>
        </section>

        <A8Banner ad="wellsma" />

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">オンライン型と店舗型の違い</h2>
          <div className="space-y-4">
            {differences.map((p) => (
              <div key={p.t} className="bg-white rounded-xl border border-gray-100 p-5">
                <h3 className="font-medium text-[#8B7355] mb-1">{p.t}</h3>
                <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-3 leading-relaxed">
            ※仲人型・大手型を含む料金相場の全体像は<Link href="/knowledge/cost/" className="text-[#8B7355] underline">結婚相談所の料金相場</Link>で詳しく解説しています。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">オンライン結婚相談所の選び方3ステップ</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.t} className="bg-white rounded-xl border border-gray-100 p-5">
                <h3 className="font-medium text-[#8B7355] mb-1">{s.t}</h3>
                <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        <A8Banner ad="nacodo" />

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#8B7355] pl-4 tracking-widest">よくある質問</h2>
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

        <section className="rounded-lg bg-[#FAF7F2] border border-gray-100 p-6">
          <h2 className="font-medium mb-3">関連ページ</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/cheap/" className="text-[#8B7355] underline">安い結婚相談所を1年総額で比較する（検証済み10社ランキング）</Link></li>
            <li><Link href="/knowledge/cost/" className="text-[#8B7355] underline">結婚相談所の料金相場（初期費用・月会費・成婚料の実額データ）</Link></li>
            <li><Link href="/review/smartread/" className="text-[#8B7355] underline">スマリッジの口コミ・評判</Link></li>
            <li><Link href="/review/wellsma/" className="text-[#8B7355] underline">ウェルスマの口コミ・評判</Link></li>
            <li><Link href="/review/en-konkatsu/" className="text-[#8B7355] underline">エン婚活エージェントの口コミ・評判</Link></li>
            <li><Link href="/review/naco-do/" className="text-[#8B7355] underline">naco-doの口コミ・評判</Link></li>
            <li><Link href="/compare/" className="text-[#8B7355] underline">結婚相談所の料金比較（13社一覧）</Link></li>
          </ul>
        </section>
      </main>
    </>
  );
}
