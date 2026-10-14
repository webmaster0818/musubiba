import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FeePosition from "@/components/FeePosition";
import AuthorBox from "@/components/AuthorBox";
import FlowGuide from "@/components/FlowGuide";
import BrandStores from "@/components/BrandStores";
import ReviewFacts from "@/components/ReviewFacts";
import ReviewExtra from "@/components/ReviewExtra";

export const metadata = {
  title: "エン婚活エージェントの口コミ・評判｜オリコン オンライン1位・料金・入会条件・対応エリア【2026年10月】",
  description:
    "エン婚活エージェント（エン婚活）の口コミ・評判をオリコン顧客満足度調査・Googleマップの掲載内容つきで整理。登録料33,000円・月16,500円・成婚料0円（2026年10月14日公式確認）、1年総額、返金保証の条件まで。入会条件・対応エリア・退会ルールも。",
};

const overview = {
  name: "エン婚活エージェント",
  type: "オンライン完結型（専任アドバイザー制）",
  members: "紹介可能人数17.4万人以上（利用する全データベースの各社公表会員数の合計・2026年6月時点）",
  area: "全国対応（オンライン）",
  initialFee: "登録料33,000円",
  monthlyFee: "16,500円（休会中7,150円）",
  matchingFee: "0円（お見合い料も0円）",
  age: "公式に年齢層の公表なし",
  successRate: "成婚率の公表なし（累計成婚3,500組以上と公表）",
};

const strengths = [
  {
    title: "3ヶ月でお見合いが成立しなければ返金（条件あり）",
    desc: "公式サイトは「3ヶ月以内にコンタクト（お見合い）が成立しなければ、登録料と3か月分の月会費を返金」としています（2026年10月14日確認）。適用条件は規約で確認が必要です。",
  },
  {
    title: "登録料33,000円・月16,500円・成婚料0円",
    desc: "お見合い料・成婚料が0円のため、1年活動して成婚退会した場合の単純計算は231,000円です。運営は東証プライム上場のエン・ジャパングループです。",
  },
  {
    title: "IBJ Onlineも追加料金なしで利用可能に",
    desc: "2026年3月30日の提携発表により、IBJ Onlineを追加料金なしで利用できると公式サイトに記載があります。紹介可能人数は17.4万人以上（2026年6月時点の各社公表値の合計）です。",
  },
];

const pros = [
  "お見合い料・成婚料0円で、1年総額231,000円の計算",
  "3ヶ月お見合い不成立で登録料＋月会費3ヶ月分の返金保証",
  "オリコン顧客満足度調査のオンライン型で上位評価の掲載あり",
];

const cons = [
  "対面でのサポートは受けられない",
  "2026年7月に料金改定の告知があり、古い記事の料金と違う",
  "オリコン調査ではマッチングの少なさを挙げる声もある",
];

const faqs = [
  {
    q: "エン婚活エージェントの料金はいくらですか？",
    a: "登録料33,000円、月会費16,500円、お見合い料・成婚料0円です（税込・2026年10月14日に公式サイトで確認）。休会中の月会費は7,150円です。2026年7月1日に料金改定の告知があったため、古い記事の金額（月14,300円など）とは異なります。",
  },
  {
    q: "全額返金保証の条件を教えてください",
    a: "3ヶ月以内にコンタクト（お見合い）が成立しなかった場合、登録料と3か月分の月会費が返金されます。適用には条件があるため、公式サイトの規約で確認してください。",
  },
  {
    q: "エン婚活エージェントの口コミ・評判は？",
    a: "オリコン顧客満足度調査（回答3,922人）のページには、始めやすさ・アドバイザーの伴走・オンラインお見合いの手軽さを評価する声と、マッチングや返信が少ない・日程調整がわずらわしいという声の両方が掲載されています。Googleマップの事業所には口コミ41件・評価3.3（当サイトが2026年8月に取得）がありました。",
  },
  {
    q: "エン婚活エージェントは今も入会できますか？",
    a: "2026年10月14日時点の公式サイトに新規受付の終了やサービス終了の告知はなく、無料相談・キャンペーンの案内が掲載されています。",
  },
  {
    q: "エン婚活エージェントの運営会社は？",
    a: "東証プライム上場のエン・ジャパングループの会社で、公式サイトのフッターには「en-konkatsu agent inc.」と表記されています。",
  },
  {
    q: "成婚までの期間や実績は？",
    a: "公式サイトは累計の成婚数を3,500組以上としていますが、成婚率や平均活動期間の公表は確認できませんでした（2026年10月14日時点）。",
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
  { name: "マーズカフェ", path: "/review/mars-cafe/" },
  { name: "naco-do", path: "/review/naco-do/" },
  { name: "スマリッジ", path: "/review/smartread/" },
  { name: "オーネット", path: "/review/onet/" },
];

// 競合上位記事との差分（2026-10-14 競合比較で追加）
const REVIEW_EXTRA = {
  "name": "エン婚活エージェント",
  "ratings": [
    {
      "media": "オリコン顧客満足度 エン婚活エージェント",
      "score": "70.8点（利用形態別・オンライン部門1位）",
      "count": "利用者コメント18件（調査全体の回答者3,922人）",
      "detail": "コメント18件の内訳は「良い点」12件・「気になる点」6件。投稿者は30代男性7件・40代男性5件と男性が多めです。",
      "url": "https://life.oricon.co.jp/rank_marriage/company/en-konkatsu/"
    }
  ],
  "ratingNotes": [
    "オリコンの数字は利用者アンケートにもとづく調査結果で、口コミ投稿サイトの星評価とは集め方が異なります。"
  ],
  "fitYes": [
    "来店せず、電話・ビデオ通話・メールで活動を完結したい人",
    "お見合い料・成婚料0円で総額を抑えたい人",
    "3ヶ月の返金保証の条件を理解したうえで始めたい人",
    "関東・関西・東海など会員の多いエリアに住んでいる人"
  ],
  "fitNo": [
    "担当者と対面で相談したい人",
    "会員が少ないエリアに住んでいて、毎月の紹介人数を重視する人",
    "受け身で紹介を待ちたい人（オリコンには返信の少なさを挙げる声もあります）"
  ],
  "entry": [
    [
      "入会資格",
      "独身で、男性は20歳以上60歳以下・女性は20歳以上55歳以下。男性は定職に就き安定した収入があること。反社会的勢力でない、債務超過・自己破産の状態でない等の条件あり。"
    ],
    [
      "必要書類",
      "本人確認書類、独身証明書（発行から3ヶ月以内）、年収証明書（男性は必須・女性は就労している場合）、学歴証明書（該当する場合）。書類は入会後にマイページから提出でき、揃っていなくても入会手続きはできます。"
    ],
    [
      "対応エリア",
      "サービス提供エリアの制限はありません。ただし会員数が少ないエリアでは「毎月6名以上の紹介」を満たせない場合があります。会員が多いのは関東・関西・東海と、福岡・熊本・佐賀・広島・岡山・山口・静岡・宮城・北海道など。"
    ],
    [
      "休会",
      "毎月25日までの申し出で翌月1日から。休会中の月会費は7,150円（税込）。相談は続けられます。"
    ],
    [
      "退会",
      "毎月15日までの申し出で当月末（16日以降は翌月末）。成婚退会は25日まで。最低活動期間・解約手数料はなし。登録料は返金されません。"
    ],
    [
      "クーリング・オフ",
      "契約書面の受領日から8日以内は書面または電磁的記録で解除できます。"
    ]
  ],
  "entrySource": "エン婚活エージェント公式「よくある質問」",
  "outdated": [
    {
      "seen": "登録料10,780円・月会費14,300円",
      "source": "駅探PICKS婚活（2022年11月23日更新）",
      "now": "登録料33,000円・月会費16,500円・お見合い料/成婚料0円（2026年7月1日の料金改定後）。"
    },
    {
      "seen": "対応エリアは北海道・宮城・関東・東海・関西・中国・九州の一部に限定",
      "source": "駅探PICKS婚活（2022年11月23日更新）",
      "now": "公式FAQは「サービス提供エリアに制限はありません」（会員の少ない地域は紹介人数を満たせない場合あり）。"
    },
    {
      "seen": "紹介を受けられる人数30,166人",
      "source": "駅探PICKS婚活（2022年11月23日更新）",
      "now": "紹介可能人数17.4万人以上（利用できる全データベースの各社公表会員数の合計・2026年6月時点）。"
    }
  ]
};

export default function EnKonkatsuReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "エン婚活エージェント" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          エン婚活エージェントの口コミ・評判｜料金・返金保証・利用者の声の傾向
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月14日（料金は2026年10月14日に公式サイトで確認）</p>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <img src="/ss-en-konkatsu.jpg" alt="エン婚活エージェント 公式サイト" className="w-full h-auto" />
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">エン婚活エージェントの強み・特徴</h2>
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
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">エン婚活エージェント</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">naco-do</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">スマリッジ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">16,500円</td><td className="px-4 py-3 text-center">16,800円</td><td className="px-4 py-3 text-center">9,900円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">33,000円</td><td className="px-4 py-3 text-center">66,000円</td><td className="px-4 py-3 text-center">6,600円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">会員数</td><td className="px-4 py-3 text-center">17.4万人以上（紹介可能）</td><td className="px-4 py-3 text-center">19.1万人</td><td className="px-4 py-3 text-center">約5.1万人</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">オンライン完結型</td><td className="px-4 py-3 text-center">オンライン完結型</td><td className="px-4 py-3 text-center">オンライン完結型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">成婚料0円・3ヶ月返金保証</td><td className="px-4 py-3 text-center">成婚料0円・90日返金保証</td><td className="px-4 py-3 text-center">成婚料0円・3ヶ月返金保証</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <ReviewFacts
          name="エン婚活エージェント"
          checkedOn="2026年10月14日"
          officialUrl="https://en-konkatsu.com/"
          feeHead={["項目", "金額（税込）", "補足"]}
          feeRows={[
            ["登録料", "33,000円", ""],
            ["月会費", "16,500円", "休会中は7,150円"],
            ["お見合い料", "0円", ""],
            ["成婚料", "0円", ""],
          ]}
          feeNotes={["2026年7月1日に「サービスアップデートおよび料金改定」の告知あり。", "3ヶ月以内にお見合い不成立なら登録料＋月会費3ヶ月分を返金（条件あり）。"]}
          estimate={[{ label: "1年活動して成婚退会", formula: "33,000円＋16,500円×12＋0円", total: "231,000円" }]}
          company={[
            ["運営", "en-konkatsu agent inc.（公式サイトのフッター表記）"],
            ["グループ", "エン・ジャパングループ（東証プライム上場）"],
            ["形態", "オンライン完結型"],
            ["実績", "累計成婚3,500組以上（公式発表）"],
          ]}
          reviewNote="オリコン顧客満足度調査（過去5年以内の利用者など3,922人が回答）のエン婚活エージェントのページでは、オンライン型の結婚相談所として1位（70.8点）、2024〜2026年の3年連続と掲載されています（2026年10月14日確認）。Googleマップの事業所は口コミ41件・評価3.3（当サイトが2026年8月18日に取得）でした。"
          good={[
            { text: "サービスと入会手続きがシンプルで始めやすいという声", source: "オリコン顧客満足度調査 エン婚活エージェント" },
            { text: "初回相談から成婚までアドバイザーが伴走してくれて不安が減ったという声", source: "同上" },
            { text: "オンラインお見合いで移動が減り、忙しくても活動できたという声", source: "同上" },
          ]}
          bad={[
            { text: "マッチングや相手からの返信が少ない・遅いという声", source: "オリコン顧客満足度調査 エン婚活エージェント" },
            { text: "日程調整の仕組みがわずらわしいという声", source: "同上" },
            { text: "結果に対して費用が高いと感じた、条件に合う相手が見つかりにくいという声", source: "同上" },
          ]}
          sources={[{ name: "オリコン顧客満足度 エン婚活エージェント", url: "https://life.oricon.co.jp/rank_marriage/company/en-konkatsu/" }]}
        />

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            エン婚活エージェントと他社を比較して選ぶ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            エン婚活エージェントが自分に合うか迷ったら、料金総額・会員数・サポート形式を他社と見比べるのがおすすめです。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（24社一覧）を見る</Link></li>
            <li><Link href="/review/mars-cafe/" className="text-[#A08447] underline">マーズカフェの評判・料金を見る</Link></li>
            <li><Link href="/review/naco-do/" className="text-[#A08447] underline">naco-doの評判・料金を見る</Link></li>
            <li><Link href="/review/smartread/" className="text-[#A08447] underline">スマリッジの評判・料金を見る</Link></li>
          </ul>
        </section>

        <ReviewExtra {...REVIEW_EXTRA} checkedOn="2026年10月14日" />
        <FlowGuide name={overview.name} initialFee={overview.initialFee} monthlyFee={overview.monthlyFee} matchingFee={overview.matchingFee} />

        {/* 口コミの傾向(編集部要約) */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">口コミの傾向——実際の口コミを読んだ編集部要約(2026年9月6日取得)</h2>
          <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-6 space-y-3 text-sm leading-relaxed text-[#555]">
            <p><span className="font-medium text-[#A08447]">よく見られる好意的な声</span>——「オンライン完結なので仕事と両立して自分のペースで活動できた」「初期費用が手頃」というオンライン型ならではの利便性と価格への評価が中心で、1年〜1年半かけて成婚に至った報告があります。落ち込んだ時に担当者が電話で親身に対応してくれたという声もあります。</p>
            <p><span className="font-medium text-rose-700">気になる声</span>——口コミ件数自体が店舗型より少ない中で、「入会後の対応が遅い」「電話窓口の対応が悪い」「返金保証の期限直前の出来事に不信感を持った」という運営面の低評価の比率が高めです。オンライン型は対面の担当者がいない分、レスポンスの質がそのまま満足度に直結する構造なので、無料体験や初期のやり取りで対応スピードを見極めることをおすすめします。</p>
            <p className="text-xs text-[#999]">※Googleマップ(オンライン型のため拠点口コミは少数)の直近口コミをPlaces APIで取得し、編集部が読んだ上で傾向を要約したものです(本文の転載はしていません)。個々の体験は店舗・担当者・時期により異なります。</p>
          </div>
        </section>

              <FeePosition slug="en-konkatsu" />

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
          <h2 className="text-xl font-light mb-4 tracking-widest">エン婚活エージェントの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">全額返金保証付きの婚活を無料カウンセリングで詳しく聞いてみましょう</p>
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
      <BrandStores href="/review/en-konkatsu/" brandName="エン婚活エージェント" />

      </article>
    </>
  );
}
