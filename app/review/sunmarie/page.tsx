import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FeePosition from "@/components/FeePosition";
import A8Banner from "@/components/A8Banner";
import AuthorBox from "@/components/AuthorBox";
import FlowGuide from "@/components/FlowGuide";
import BrandStores from "@/components/BrandStores";
import ReviewFacts from "@/components/ReviewFacts";
import ReviewExtra from "@/components/ReviewExtra";

export const metadata = {
  title: "サンマリエの口コミ・評判｜オリコン67.2点・料金・1年総額・成婚率86.3%の意味【2026年10月】",
  description:
    "結婚相談所サンマリエ（sunmarie）の口コミ・評判をオリコン顧客満足度調査・Googleマップ（13サロン913件）の掲載内容をもとに整理しています。月会費18,700円・成婚料220,000円などの料金（2026年10月14日公式確認）と1年総額、オリコン67.2点の部門別内訳も掲載しています。",
};

const overview = {
  name: "サンマリエ",
  type: "仲人型（1981年創業）",
  members: "101,240名（IBJで活動中の会員・2025年8月時点）",
  area: "全国23店舗＋オンライン相談",
  initialFee: "入会金33,000円＋初期活動費132,000円（ベーシック）",
  monthlyFee: "18,700円（全コース共通）",
  matchingFee: "220,000円（全コース共通）",
  age: "公式に年齢層の公表なし",
  successRate: "1年以内の成婚率86.3%（2023年1月〜2024年12月の成婚退会者実績・自社発表）",
};

const strengths = [
  {
    title: "1981年（昭和56年）創業の仲人型",
    desc: "公式サイトは「昭和56年創業」「東証プライム上場グループが運営」と表記しています。担当の仲人が紹介・お見合い調整・交際中の相談まで伴走する仲人型です。",
  },
  {
    title: "全国23店舗とオンライン相談",
    desc: "公式サイトによると全国23店舗を展開し、オンラインでのカウンセリングにも対応しています（2026年10月14日確認）。",
  },
  {
    title: "IBJの約10万人から探せる",
    desc: "IBJで活動中の会員101,240名（2025年8月時点）からお相手を探せます。お見合い料は全コース0円です。",
  },
];

const pros = [
  "担当者の対応を評価する声が多い（オリコン調査）",
  "お見合い料0円・全国23店舗",
  "乗り換え割（初期費用30,000円引き）がある",
];

const cons = [
  "成婚料220,000円で、1年総額は60万円台になる",
  "月会費18,700円と、オンライン型より高い",
  "「1年以内の成婚率86.3%」は分母が公表されていない",
];

const faqs = [
  {
    q: "サンマリエの料金はいくらですか？",
    a: "ベーシックは入会金33,000円・初期活動費132,000円、月会費18,700円、お見合い料0円、成婚料220,000円です（税込・2026年10月14日に公式サイトで確認）。安心セット・プレミアムセットは「定価より約8.2万円／約8.8万円お得」と案内されています。",
  },
  {
    q: "「1年以内の成婚率86.3%」とはどういう数字ですか？",
    a: "公式サイトの注記は「2023年1月〜2024年12月の成婚退会者実績」で、成婚退会者のうち1年以内に成婚した人の割合と読めますが、分母は明記されていません。入会者全体のうち86.3%が成婚するという意味ではない点にご注意ください。",
  },
  {
    q: "サンマリエの口コミ・評判は？",
    a: "オリコン顧客満足度調査のサンマリエのページでは、担当スタッフが親身で丁寧・相談しやすいという声が多く、紹介が希望に合わない・対応に時間がかかったという声も一部あります。Googleマップでは口コミ3件以上の13サロンに計913件、評価は4.1〜5.0でした（当サイトが2026年8〜9月に取得）。",
  },
  {
    q: "サンマリエの退会方法を教えてください",
    a: "公式サイトの「ご入会時の契約条件について」では、会員期間中の途中退会（中途解約）は、担当カウンセラーまたは同社スタッフに電話やメールで申し出ると案内しています。解約にかかる手数料等は発生せず、月会費の過払いが生じている会員にのみ返金が発生すると記載しています。また、入会契約日を含む8日間は、書面または電磁的記録による通知（通知書は担当支社あてに送付）でクーリング・オフができ、支払い済みの料金が全額返金されます（出典：https://www.sunmarie.co.jp/merit/・2026年10月31日確認）。成婚退会の場合は成婚料220,000円が発生します。",
  },
  {
    q: "サンマリエはオンラインでも相談できますか？",
    a: "はい。公式サイトによると、全国23店舗に加えてオンラインでの相談にも対応しています。",
  },
  {
    q: "他社から乗り換えると安くなりますか？",
    a: "公式の料金ページに「乗り換え割：初期費用30,000円OFF」の記載があります（2026年10月14日確認）。",
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
  { name: "オーネット", path: "/review/onet/" },
  { name: "ムスベル", path: "/review/musbell/" },
  { name: "リングベル", path: "/review/ringbell/" },
];

// 競合上位記事との差分（2026-10-14 競合比較で追加）
const REVIEW_EXTRA = {
  "name": "サンマリエ",
  "ratings": [
    {
      "media": "オリコン顧客満足度 サンマリエ",
      "score": "総合67.2点",
      "count": "利用者コメント19件（調査全体の回答者3,922人）",
      "detail": "部門別では男性68.5点（2位）・30代67.4点（1位）・再婚目的71.2点（1位）です。友人・知人への推奨意向は67.7%です。コメントは「良い点」13件・「気になる点」6件で、気になる点の半数は50代の回答です。",
      "url": "https://life.oricon.co.jp/rank_marriage/company/sunmarie/"
    }
  ],
  "ratingNotes": [
    "サンマリエの公式サイトは「2026年 オリコン顧客満足度調査 結婚相談所 総合 第1位」と表記しています。",
    "Googleマップのサロン別の口コミ件数・評価はページ下部の店舗一覧にまとめています。"
  ],
  "fitYes": [
    "担当の仲人に紹介・お見合い調整・交際の相談まで任せたい方",
    "全国23店舗のいずれかに通える方、または郵送・オンラインで入会したい方",
    "再婚に向けて活動したい方（オリコンの再婚目的部門で1位）",
    "乗り換え割（初期費用30,000円引き）を使える他社経験者の方"
  ],
  "fitNo": [
    "成婚料220,000円を含む60万円前後の総額を避けたい方",
    "オンライン完結の低価格サービスで十分な方",
    "パーティー・イベントの参加費など、追加費用をかけたくない方"
  ],
  "entry": [
    [
      "入会資格",
      "独身で、男性は20歳以上で定職がある方、女性は20歳以上の方が対象です。婚約者や同棲を含む事実上の婚姻関係がないことが条件で、独自の審査があります。"
    ],
    [
      "必要書類",
      "独身証明書・卒業証明書・収入証明書・資格証明書などが必要です。"
    ],
    [
      "来店しない入会",
      "オンラインの無料相談があり、入会手続きは郵送でのやり取りも可能です。"
    ],
    [
      "追加でかかる費用",
      "パーティー・イベントは参加ごとに費用がかかります。コースによってはお見合い費用が別途かかる場合があります。"
    ],
    [
      "中途解約",
      "会員期間中の途中退会が可能です。解約手数料はかからず、未払金・返金がある場合は精算後の退会となります。"
    ],
    [
      "クーリング・オフ",
      "契約日を含む8日間は書面または電磁的記録により無条件で解除でき、支払い済みの料金は全額返金されます。"
    ]
  ],
  "entrySource": "サンマリエ公式「よくあるご質問」",
  "outdated": [
    {
      "seen": "スタンダード月17,600円・カジュアル月16,500円（カジュアルはお見合い料11,000円/回）",
      "source": "駅探PICKS婚活（2022年11月23日更新）",
      "now": "月会費18,700円（全コース共通）・お見合い料0円・成婚料220,000円です。"
    },
    {
      "seen": "成婚率76.3%（2021年10〜12月の成婚退会者実績）",
      "source": "駅探PICKS婚活（2022年11月23日更新）",
      "now": "「1年以内の成婚率86.3%」（2023年1月〜2024年12月の成婚退会者実績）と記載されています。分母は成婚退会者で、入会者全体の成婚率ではありません。"
    },
    {
      "seen": "紹介可能会員数 約80,296人（2022年7月時点）",
      "source": "駅探PICKS婚活（2022年11月23日更新）",
      "now": "IBJの加盟会員数を含め101,240名です（2025年8月実績）。"
    }
  ]
};

export default function SunmarieReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "サンマリエ" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          サンマリエの口コミ・評判｜料金・1年総額・成婚率の注記を公式情報で確認
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月14日（料金・実績は2026年10月14日に公式サイトで確認）</p>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <img src="/ss-sunmarie.jpg" alt="サンマリエ 公式サイト" className="w-full h-auto" />
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

        <A8Banner ad="sunmarie" />

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">サンマリエの強み・特徴</h2>
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
          <p className="text-xs text-[#2C2C2C]/50 mb-3">※サンマリエ以外の数値は各社レビュー掲載時点のものです。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">サンマリエ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">ツヴァイ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">ムスベル</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">18,700円</td><td className="px-4 py-3 text-center">15,400円〜</td><td className="px-4 py-3 text-center">15,400円〜</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">165,000円（入会金＋初期活動費）</td><td className="px-4 py-3 text-center">115,500円〜</td><td className="px-4 py-3 text-center">33,000円〜</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">会員数</td><td className="px-4 py-3 text-center">101,240名（IBJ）</td><td className="px-4 py-3 text-center">約9.4万人</td><td className="px-4 py-3 text-center">約16万人</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">仲人型</td><td className="px-4 py-3 text-center">ハイブリッド型</td><td className="px-4 py-3 text-center">ハイブリッド型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">1981年創業・23店舗</td><td className="px-4 py-3 text-center">全国50店舗</td><td className="px-4 py-3 text-center">複数連盟加盟</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <ReviewFacts
          name="サンマリエ"
          checkedOn="2026年10月14日"
          officialUrl="https://www.sunmarie.co.jp/"
          feeHead={["項目", "ベーシック（税込）", "補足"]}
          feeRows={[
            ["入会金", "33,000円", ""],
            ["初期活動費", "132,000円", "乗り換え割で30,000円引き"],
            ["月会費", "18,700円", "全コース共通"],
            ["お見合い料", "0円", "全コース共通"],
            ["成婚料", "220,000円", "全コース共通（成功報酬として一律）"],
          ]}
          feeNotes={["安心セット・プレミアムセットは、セットにしなかった場合の定価より約8.2万円／約8.8万円お得と案内されています（内容と金額は公式の料金ページでご確認ください）。"]}
          estimate={[{ label: "ベーシック・1年で成婚退会", formula: "33,000円＋132,000円＋18,700円×12＋220,000円", total: "609,400円" }]}
          company={[
            ["運営", "東証プライム上場グループが運営（公式サイトの表記）"],
            ["創業", "1981年（昭和56年）"],
            ["店舗", "全国23店舗＋オンライン相談"],
            ["会員", "IBJで活動中の会員101,240名（2025年8月時点）"],
          ]}
          reviewNote="Googleマップでは、口コミ3件以上のサンマリエ13サロンに計913件の口コミがあり、評価は4.1〜5.0（口コミ件数で加重した平均4.51）でした（当サイトが2026年8〜9月に取得。サロン別の数値はページ下部に掲載しています）。"
          good={[
            { text: "担当スタッフが親身で丁寧、相談しやすいという声が多い", source: "オリコン顧客満足度調査 サンマリエ（利用者コメント19件）" },
            { text: "落ち着いて利用できたという声", source: "同上" },
          ]}
          bad={[
            { text: "紹介された相手が希望に合わないと感じたという声", source: "オリコン顧客満足度調査 サンマリエ" },
            { text: "担当者の対応に時間がかかったという声", source: "同上" },
          ]}
          sources={[
            { name: "サンマリエ 料金コース・割引制度（公式）", url: "https://www.sunmarie.co.jp/price/" },
            { name: "オリコン顧客満足度 サンマリエ", url: "https://life.oricon.co.jp/rank_marriage/company/sunmarie/" },
          ]}
        />

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            サンマリエと他社の比較
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            サンマリエが自分に合うか迷う場合は、料金総額・会員数・サポート形式を他社と比較することをおすすめします。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/sunmarie-vs-musbell/" className="text-[#A08447] underline">サンマリエとムスベルを比較する（仲人型どうしの実質総額・サポートの型）</Link></li>
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（24社一覧）を見る</Link></li>
            <li><Link href="/review/zwei/" className="text-[#A08447] underline">ツヴァイの評判・料金を見る</Link></li>
            <li><Link href="/review/onet/" className="text-[#A08447] underline">オーネットの評判・料金を見る</Link></li>
            <li><Link href="/review/musbell/" className="text-[#A08447] underline">ムスベルの評判・料金を見る</Link></li>
          </ul>
        </section>

        <A8Banner ad="sunmarie" />

        <ReviewExtra {...REVIEW_EXTRA} checkedOn="2026年10月14日" />
        <FlowGuide name={overview.name} initialFee={overview.initialFee} monthlyFee={overview.monthlyFee} matchingFee={overview.matchingFee} />

        {/* 口コミの傾向(編集部要約) */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">口コミの傾向（当サイトによる要約・2026年9月6日取得）</h2>
          <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-6 space-y-3 text-sm leading-relaxed text-[#555]">
            <p><span className="font-medium text-[#A08447]">よく見られる好意的な声</span>：「入会4ヶ月で成婚退会」「心が折れかけた時に月1面談で前向きにしてくれた」など、カウンセラーの手厚い伴走への感謝が中心です。「婚活経験ゼロでも一から丁寧に教えてくれた」という初心者への寄り添いや、20代前半からの長期活動を支えた例など、サポート密度を評価する声が目立ちます。</p>
            <p><span className="font-medium text-rose-700">気になる声</span>：「月会費を1年半払い続けたが成果がなかった」「カウンセラーの提案が自分に合わなかった」という費用対効果への強い不満も見られます。手厚い仲人型はサポート費用が相応にかかるため、活動が長期化した場合の総費用を、入会前に試算しておくことをおすすめします。</p>
            <p className="text-xs text-[#999]">※Googleマップ(新宿・大阪・名古屋)の直近口コミをPlaces APIで取得し、当サイトが内容を確認したうえで傾向を要約したものです（本文の転載は行っていません）。個々の体験は店舗・担当者・時期により異なります。</p>
          </div>
        </section>

              <FeePosition slug="sunmarie" />

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
          <h2 className="text-xl font-light mb-4 tracking-widest">サンマリエの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">総額と担当者との相性は、無料相談で確認できます</p>
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
      <BrandStores href="/review/sunmarie/" brandName="サンマリエ" />

      </article>
    </>
  );
}
