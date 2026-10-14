import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FeePosition from "@/components/FeePosition";
import AuthorBox from "@/components/AuthorBox";
import A8Banner from "@/components/A8Banner";
import FlowGuide from "@/components/FlowGuide";
import ReviewFacts from "@/components/ReviewFacts";
import ReviewExtra from "@/components/ReviewExtra";

export const metadata = {
  title: "naco-do（ナコード）の口コミ・評判｜料金・成婚料0円・返金保証・古い料金情報の注意【2026年10月】",
  description:
    "naco-do（ナコード）の口コミ・評判を掲載媒体つきで整理。初期費用66,000円・月16,800円・成婚料0円（2026年10月14日公式確認）、1年総額、JBA/CONNECT-ship/SCRUMの19.1万人、90日返金保証、運営会社まで。古い記事の料金との違いも整理。",
};

const overview = {
  name: "naco-do（ナコード）",
  type: "オンライン完結型（パーソナル婚活・担当サポーター制）",
  members: "19.1万人（JBA・CONNECT-ship・SCRUMの3連盟で追加料金なしに検索可能）",
  area: "全国対応（オンライン）",
  initialFee: "66,000円",
  monthlyFee: "16,800円（1プランのみ）",
  matchingFee: "0円",
  age: "公式に年齢層の公表なし",
  successRate: "2026年10月14日の公式トップでは記載を確認できず（7月5日確認時は41.3%・自社発表）／成婚までの平均活動期間6.6ヶ月",
};

const strengths = [
  {
    title: "成婚料0円・1プランのシンプルな料金",
    desc: "初期費用66,000円・月16,800円・成婚料0円の1プランで、公式サイトは活動7ヶ月の目安を183,600円と示しています（2026年10月14日確認）。「後から費用が発生することはない」と明記されています。",
  },
  {
    title: "JBA・CONNECT-ship・SCRUMの3連盟19.1万人から探せる",
    desc: "追加料金なしで3つの連盟・プラットフォームの会員を検索できます。公式サイトは成婚までの平均活動期間を6.6ヶ月と公表しています（算出方法の記載はなし）。",
  },
  {
    title: "90日間お見合い不成立なら全額返金（条件あり）",
    desc: "公式サイトに「90日間お見合い不成立で全額返金（適用条件あり）」と記載があります。条件の詳細は無料相談で確認してください。",
  },
];

const pros = [
  "成婚料0円で、活動7ヶ月の目安は183,600円",
  "3連盟19.1万人を追加料金なしで検索できる",
  "完全オンラインで来店不要",
];

const cons = [
  "月16,800円のため、活動が長引くと総額が増える",
  "対面でのサポートは受けられない",
  "成婚率の算出方法は公式で確認できない",
];

const faqs = [
  {
    q: "naco-do（ナコード）の料金はいくらですか？",
    a: "初期費用66,000円、月16,800円、成婚料0円の1プランです（2026年10月14日に公式サイトで確認）。公式の目安は活動7ヶ月で183,600円。期間限定で入会金33,000円が0円になるキャンペーン（10/9〜10/18の無料面談予約が対象）が告知されています。",
  },
  {
    q: "以前の「月額6,980円〜」という料金はなくなりましたか？",
    a: "2026年10月14日時点の公式サイトの料金は月16,800円の1プランのみで、6,980円のプランは掲載されていません。古い比較記事の金額にご注意ください。",
  },
  {
    q: "naco-doの返金保証の条件は？",
    a: "公式サイトには「90日間お見合い不成立で全額返金（適用条件あり）」とあります。詳しい条件はページ上に記載がないため、無料相談（LINE）で確認してください。",
  },
  {
    q: "naco-doの運営会社はどこですか？",
    a: "株式会社いろもの（iromono inc.・東京都渋谷区笹塚・2016年4月設立・代表取締役 山田陵）です。結婚相手紹介サービス業認証制度（IMS）の認証を受けています。",
  },
  {
    q: "naco-doの口コミ・評判は？",
    a: "オリコン顧客満足度調査のnaco-doのページには、2026年10月14日時点で利用者コメントが1件（安心して前向きに利用できたという趣旨）掲載されています。件数が少ないため、口コミだけで判断せず、料金と返金条件を確認して選ぶのがおすすめです。",
  },
  {
    q: "naco-doの成婚退会までの平均期間はどのくらいですか？",
    a: "公式サイトは「成婚までの平均活動期間6.6ヶ月」と公表しています（対象者数・算出方法の記載はなし）。",
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
  { name: "スマリッジ", path: "/review/smartread/" },
  { name: "エン婚活エージェント", path: "/review/en-konkatsu/" },
  { name: "マーズカフェ", path: "/review/mars-cafe/" },
  { name: "結婚相談所セブン", path: "/review/seven/" },
];

// 競合上位記事との差分（2026-10-14 競合比較で追加）
const REVIEW_EXTRA = {
  "name": "naco-do（ナコード）",
  "ratings": [
    {
      "media": "オリコン顧客満足度 naco-do",
      "score": "総合得点の掲載なし",
      "count": "利用者コメント1件",
      "detail": "コメントが1件のみのため、評価の傾向は判断できない状態です。",
      "url": "https://life.oricon.co.jp/rank_marriage/company/naco-do/"
    }
  ],
  "ratingNotes": [
    "上位記事の多くは「編集部独自アンケート」の口コミ（回答者数・時期の記載なし）を使っています。当サイトは件数・出典を確認できない口コミは載せていません。"
  ],
  "fitYes": [
    "成婚料0円で、総額を先に計算しておきたい人",
    "来店せずにオンラインだけで活動したい人",
    "JBA・CONNECT-ship・SCRUMの3つのデータベースで相手を探したい人",
    "担当サポーターと一緒に活動の方針を決めたい人"
  ],
  "fitNo": [
    "対面のサロンで相談したい人",
    "IBJの会員と出会いたい人（naco-doの検索対象はJBA・CONNECT-ship・SCRUM）",
    "活動が長引きそうで、月16,800円の累計が気になる人"
  ],
  "facts": [
    "公式の利用者インタビューは37件（30代女性12・20代女性9・30代男性9・20代男性4・40代以上男性2・40代以上女性1）。20〜30代女性の事例が多い構成です。",
    "公式サイトはIBJメンバーズ（直営店）・リングベル（ベーシックプラン）との比較表を掲載し、「成婚までにかかる費用の目安（活動7ヶ月）」をnaco-do 183,600円としています（2026年8月14日時点の各社公式サイト掲載情報より・naco-do調べ）。",
    "インターネット異性紹介事業の届出済み（受理番号30180080000）、結婚相手紹介サービス業認証制度（IMS）の認定を受けていると公式サイトに記載があります。"
  ],
  "factsTitle": "naco-doの公式サイトで確認できた実績・届出",
  "outdated": [
    {
      "seen": "お試し1ヶ月2,980円・初期費用29,800円・月16,800円（3ヶ月一括43,800円）",
      "source": "駅探PICKS婚活（2023年6月29日更新）",
      "now": "初期費用66,000円・月16,800円・成婚料0円の1プラン。お試しプランの記載はありません。"
    },
    {
      "seen": "成婚率37.8%／50.5%（期間・定義が異なる2つの数値）",
      "source": "駅探PICKS婚活（2023年6月29日更新）",
      "now": "公式トップに成婚率の記載はなく、「成婚までの平均活動期間6.6ヶ月」を公表しています。"
    },
    {
      "seen": "JBA・良縁ネット（Rnet）・コネクトシップの3連盟",
      "source": "駅探PICKS婚活（2023年6月29日更新）",
      "now": "JBA・CONNECT-ship・SCRUMの3連盟（合計19.1万人）を追加料金なしで利用できると記載されています。"
    }
  ]
};

export default function NacoDoReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "naco-do（ナコード）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          naco-do（ナコード）の口コミ・評判｜料金・返金保証・運営会社を公式情報で確認
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月14日（料金・実績は2026年10月14日に公式サイトで確認）</p>

        <p className="mb-6 text-sm">
          <a href="https://t.felmat.net/fmcl?ak=Z50330.1.2894055.Z1361712" target="_blank" rel="nofollow noopener noreferrer" className="text-[#A08447] underline hover:text-[#8A7239] tracking-wider">naco-do の公式サイトはこちら</a>
        </p>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <img src="/ss-naco-do.jpg" alt="naco-do（ナコード） 公式サイト" className="w-full h-auto" />
          <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: 公式サイトより</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
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
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">ナコードの強み・特徴</h2>
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
            <h3 className="font-medium text-red-800 mb-4 tracking-wider">デメリット</h3>
            <ul className="space-y-2">
              {cons.map((c) => (<li key={c} className="text-sm text-[#2C2C2C]/70 flex gap-2"><span className="text-red-400 shrink-0">-</span>{c}</li>))}
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 tracking-widest">他社との比較</h2>
          <p className="text-xs text-[#2C2C2C]/50 mb-3">※3社とも2026年10月14日に各公式サイトで確認した金額です。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">naco-do（ナコード）</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">エン婚活エージェント</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">スマリッジ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">16,800円</td><td className="px-4 py-3 text-center">16,500円</td><td className="px-4 py-3 text-center">9,900円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">66,000円</td><td className="px-4 py-3 text-center">33,000円</td><td className="px-4 py-3 text-center">6,600円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">会員数</td><td className="px-4 py-3 text-center">19.1万人</td><td className="px-4 py-3 text-center">17.4万人以上（紹介可能）</td><td className="px-4 py-3 text-center">約5.1万人</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">オンライン完結型</td><td className="px-4 py-3 text-center">オンライン完結型</td><td className="px-4 py-3 text-center">オンライン完結型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">成婚料0円・90日返金保証</td><td className="px-4 py-3 text-center">成婚料0円・3ヶ月返金保証</td><td className="px-4 py-3 text-center">成婚料0円・3ヶ月返金保証</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <ReviewFacts
          name="naco-do（ナコード）"
          checkedOn="2026年10月14日"
          officialUrl="https://naco-do.com/"
          feeHead={["項目", "金額", "補足"]}
          feeRows={[
            ["初期費用", "66,000円", "キャンペーンで入会金33,000円が0円になる告知あり（10/9〜10/18の無料面談予約）"],
            ["月額", "16,800円", "1プランのみ"],
            ["成婚料", "0円", ""],
            ["活動7ヶ月の目安（公式）", "183,600円", ""],
          ]}
          feeNotes={["公式サイトに税込表記の明記はありません。", "90日間お見合い不成立で全額返金（適用条件あり）。"]}
          estimate={[{ label: "1年活動して成婚退会", formula: "66,000円＋16,800円×12＋0円", total: "267,600円" }]}
          company={[
            ["運営", "株式会社いろもの（iromono inc.）"],
            ["代表", "代表取締役 山田 陵"],
            ["所在地", "東京都渋谷区笹塚2-16-2 ウインド笹塚ビル7F"],
            ["設立", "2016年4月"],
            ["認証", "結婚相手紹介サービス業認証制度（IMS）"],
          ]}
          reviewNote="naco-doはオンライン専業のためGoogleマップの店舗口コミはありません。オリコン顧客満足度調査（回答3,922人）のnaco-doページに掲載されている利用者コメントは2026年10月14日時点で1件でした。"
          good={[{ text: "安心して前向きに利用できたという声（50代女性）", source: "オリコン顧客満足度調査 naco-do" }]}
          bad={[{ text: "掲載媒体で確認できた否定的な口コミはありませんでした。件数が少ないため、料金・返金条件・サポート形式（担当サポーター制）を無料相談で確認して判断してください", source: "当サイト調べ（2026年10月14日）" }]}
          sources={[{ name: "オリコン顧客満足度 naco-do", url: "https://life.oricon.co.jp/rank_marriage/company/naco-do/" }]}
        />

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            naco-do（ナコード）と他社を比較して選ぶ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            naco-do（ナコード）が自分に合うか迷ったら、料金総額・会員数・サポート形式を他社と見比べるのがおすすめです。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（24社一覧）を見る</Link></li>
            <li><Link href="/review/smartread/" className="text-[#A08447] underline">スマリッジの評判・料金を見る</Link></li>
            <li><Link href="/review/en-konkatsu/" className="text-[#A08447] underline">エン婚活エージェントの評判・料金を見る</Link></li>
            <li><Link href="/review/seven/" className="text-[#A08447] underline">結婚相談所セブンの評判・料金を見る</Link></li>
          </ul>
        </section>

        <ReviewExtra {...REVIEW_EXTRA} checkedOn="2026年10月14日" />
        <FlowGuide name={overview.name} initialFee={overview.initialFee} monthlyFee={overview.monthlyFee} matchingFee={overview.matchingFee} />

              <FeePosition slug="naco-do" />

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

        <div className="text-center mb-8">
          <a href="https://t.felmat.net/fmcl?ak=Z50330.1.2894055.Z1361712" target="_blank" rel="nofollow noopener noreferrer">
            <img src="https://t.felmat.net/fmimg/Z50330.2894055.Z1361712" width={936} height={120} alt="naco-do（ナコード）" className="mx-auto max-w-full h-auto" />
          </a>
        </div>

        

        <section className="bg-[#333333] rounded-2xl p-10 text-white text-center mb-12">
          <h2 className="text-xl font-light mb-4 tracking-widest">naco-doの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">成婚料0円のオンライン婚活を無料相談で確認しましょう</p>
          <a href="https://t.felmat.net/fmcl?ak=Z50330.1.2894055.Z1361712" target="_blank" rel="nofollow noopener noreferrer" className="inline-block bg-[#A08447] hover:bg-[#8A7239] text-white font-normal py-3 px-8 rounded-full transition-colors tracking-widest">公式サイトへ</a>
        </section>

        <section>
          <h2 className="text-lg font-light mb-4 tracking-widest">他の結婚相談所も見る</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link key={s.name} href={s.path} className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm font-normal hover:border-[#A08447] hover:text-[#A08447] transition-colors tracking-wider">{s.name}</Link>
            ))}
          </div>
        </section>
      <A8Banner ad="nacodo" />
      <AuthorBox />
      </article>
    </>
  );
}
