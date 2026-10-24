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
  title: "パートナーエージェントの口コミ・評判｜オリコン利用者コメント19件をテーマ別に集計・3コースの料金【2026年10月】",
  description:
    "パートナーエージェントの口コミ・評判を、オリコンの利用者コメント19件のテーマ別集計とGoogleマップ（17店舗770件）で整理しています。3コースの料金（2026年10月24日公式確認）、月会費無料保証、1年総額、成婚率No.1の調査条件も掲載しています。",
};

const overview = {
  name: "パートナーエージェント",
  type: "仲人型（専任コンシェルジュ制）",
  members: "192,000人（CONNECT-ship 25,000名・SCRUM 67,000名・IBJ 100,000名の合計／2025年9月18日時点）",
  area: "実店舗23店舗＋オンライン店11店舗",
  initialFee: "登録料33,000円＋初期費用66,000〜198,000円（コース別）",
  monthlyFee: "14,300〜26,400円（コース別）",
  matchingFee: "220,000円",
  age: "公式に年齢層の公表なし（20代・30〜31歳向けの割引プランあり）",
  successRate: "「成婚率No.1」（DRC調査・2026年5月・11店舗以上の相談所が比較対象）",
};

const strengths = [
  {
    title: "「成婚率No.1」を調査条件とあわせて表示しています",
    desc: "公式サイトは株式会社デジタルライツコンサルティングの調査（2026年5月1日〜8日）で成婚率No.1と表示しています。成婚は「婚約（双方が結婚の意思を確認）」、成婚率は「成婚数÷利用者数」、比較対象は店舗・支社が11以上の相談所に限られます（2026年10月14日確認）。",
  },
  {
    title: "専任コンシェルジュの紹介が月6〜8名",
    desc: "コンシェルジュコースは成婚コンシェルジュ紹介6名/月＋AIマッチング2名/月＋検索申込24名/月、コミットメントコースは紹介8名/月にIBJ検索申込30名/月が付きます。",
  },
  {
    title: "3つの連盟・プラットフォームで19.2万人",
    desc: "CONNECT-ship・SCRUM・IBJを合わせた会員数は192,000人です（2025年9月18日時点）。2007年〜2026年6月の成婚者数は35,953名と公表されています。なお公式の注記によると、成婚者数はパートナーエージェントの会員同士の成婚を「2名」、他の結婚相談所の会員との成婚を「1名」として数えています。",
  },
];

const pros = [
  "専任コンシェルジュの紹介人数がコースごとに明示されている",
  "お見合い料0円、20代・30〜31歳・シングルマザー向けの割引プランあり",
  "運営は東証グロース上場のタメニー株式会社",
];

const cons = [
  "成婚料220,000円で、1年総額は49万円台から",
  "コンシェルジュコースの月会費は18,700円と高め",
  "オリコンの「気になる点」には、担当者との相性や交代後の対応に触れる声がある",
];

const faqs = [
  {
    q: "パートナーエージェントの料金はいくらですか？",
    a: "登録料33,000円は共通で、初期費用・月会費はコンシェルジュ132,000円・18,700円、コミットメント198,000円・26,400円、オンライン66,000円・14,300円です。成婚料は220,000円、お見合い料は0円です（税込・2026年10月14日に公式サイトで確認）。",
  },
  {
    q: "成婚料は55,000円ではないのですか？",
    a: "2026年10月14日時点の公式サイトでは、成婚料は220,000円（税込）と記載されています。古い比較記事の金額にご注意ください。",
  },
  {
    q: "「成婚率No.1」の根拠は何ですか？",
    a: "株式会社デジタルライツコンサルティング（DRC）の調査（2026年5月1日〜5月8日）によるもので、成婚の定義は婚約、成婚率は成婚数÷利用者数、比較対象は店舗数または支社数が11以上の結婚相談所です（公式サイトの注記）。なお別の公式注記では、2022年10月〜2023年3月のコンシェルジュ・エグゼクティブコースの成婚退会者数÷総退会者数を27%としています（当サイト2026年9月22日確認）。",
  },
  {
    q: "パートナーエージェントの口コミ・評判はどのような内容ですか？",
    a: "オリコン顧客満足度調査に掲載された利用者コメント19件（良い点13件・気になる点6件）を当サイトで分類すると、担当者の助言・対応を評価する内容が8件と最も多い一方、気になる点では担当者との相性・交代後の対応（2件）、紹介された相手が合わない（2件）、受け身だと教えてもらえない・日程調整の負担・交際を見送られた理由が分からない（各1件）が挙がっています（2026年10月24日確認）。Googleマップでは口コミ3件以上の17店舗に計770件、評価は4.0〜5.0でした（当サイトが2026年8〜9月に取得）。",
  },
  {
    q: "割引プランはありますか？",
    a: "U29プラン（20代限定）、30歳・31歳応援割プラン、シングルマザー応援プランがあり、初期費用・月会費が割り引かれます（割引額はコースにより異なります）。",
  },
  {
    q: "パートナーエージェントの対応エリアはどこですか？",
    a: "札幌・仙台・新宿・銀座・横浜・名古屋・大阪・京都・神戸・福岡など実店舗23店舗と、オンライン店11店舗（栃木・新潟・長野・広島・熊本など）があります（2026年10月14日確認）。",
  },
  {
    q: "コミットメントコースの「月会費無料保証」とは何ですか？",
    a: "公式のコース一覧によると、コミットメントコース限定で、万が一お見合いが成立しなかった場合に月会費を無料にする制度です。適用期間は紹介開始の翌月から1年間に限られます（2026年10月24日確認）。コンシェルジュコース・オンラインコースには付いていないため、適用条件の詳細は無料相談でご確認ください。",
  },
  {
    q: "パートナーエージェントの成婚者数35,953名はどのように数えていますか？",
    a: "公式サイトの注記によると、パートナーエージェントの会員同士が成婚した場合は「2名」、会員相互紹介を行っている他の結婚相談所の会員と成婚した場合は「1名」として数えています（集計期間2007年〜2026年6月）。そのため成婚者数は偶数にならない場合があります。成婚の定義は婚約です。",
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
  { name: "サンマリエ", path: "/review/sunmarie/" },
  { name: "エン婚活エージェント", path: "/review/en-konkatsu/" },
];

// 競合上位記事との差分（2026-10-14 競合比較で追加）
const REVIEW_EXTRA = {
  "name": "パートナーエージェント",
  "ratings": [
    {
      "media": "オリコン顧客満足度 パートナーエージェント",
      "score": "総合66.8点",
      "count": "利用者コメント19件（調査全体の回答者3,922人）",
      "detail": "女性部門66.0点（1位）・40代67.6点（3位）・男性部門67.5点（4位）・30代66.0点（4位）・関東67.3点（4位）。推奨意向67.5%。項目別では「店舗の雰囲気・清潔さ」70.0点が最も高く、「コストパフォーマンス」63.1点（4位）が最も低くなっています。コメントは「良い点」13件・「気になる点」6件で、気になる点6件はすべて20〜30代女性によるものです。",
      "url": "https://life.oricon.co.jp/rank_marriage/company/p-a/"
    }
  ],
  "ratingNotes": [
    "上位の比較記事（みんなの結婚相談所 2026年10月1日更新）は、みん評・Googleレビュー・オリコンを出典に挙げていますが、件数・取得日は示していません。"
  ],
  "fitYes": [
    "専任コンシェルジュに毎月の紹介と活動の振り返りを任せたい方",
    "CONNECT-ship・SCRUM・IBJの複数データベースで探したい方",
    "店舗に通える方（実店舗23店舗）",
    "20代・30〜31歳・シングルマザー向け割引の対象になる方"
  ],
  "fitNo": [
    "成婚料220,000円を含む総額を抑えたい方",
    "担当者との相性に左右されたくない方（オリコンには担当者の交代・相性に触れる声があります）",
    "対面サポートを受けられる店舗が近くにない方"
  ],
  "entry": [
    [
      "入会資格",
      "20歳以上で、結婚・内縁関係のない独身の方（独身証明書が必要です）。入会時に必要な書類を提出できることが条件で、男性は安定した収入があることも求められます。再婚の方も入会できます。入会には規定の審査があります。"
    ],
    [
      "会員期間",
      "1年6ヵ月です。活動期間内でもコース変更が可能です（例: コンシェルジュコース→オンラインコース）。"
    ],
    [
      "成婚の定義",
      "真剣交際中の2人が婚約したことを指します。成婚退会者の61.4%が活動開始から1年以内に成婚しています（2022年10月〜2023年3月の成婚退会者実績）。"
    ],
    [
      "会員プロフィール（公式掲載）",
      "20〜30代の会員は男性43.8%・女性65.9%、年収500万円以上の男性は69.5%、大卒以上は男性76.1%・女性69.0%です（公式トップ掲載・時点の記載なし）。"
    ]
  ],
  "entrySource": "パートナーエージェント公式「Q&A」・公式トップ",
  "outdated": [
    {
      "seen": "成婚退会＝婚約ではなく、真剣交際のスタート",
      "source": "みんなの結婚相談所（2026年10月1日更新）",
      "now": "公式Q&Aは「成婚とは、真剣交際中のお二人が婚約されたこと」と定義しています。"
    },
    {
      "seen": "成婚料55,000円",
      "source": "2026年5月以前の比較記事（当サイトの旧記載を含む）",
      "now": "成婚料220,000円（税込）と記載されています。"
    },
    {
      "seen": "紹介可能会員数約83,000人（2023年9月時点）・入会から1年以内の成婚率61.4%（2022年10〜12月の入会者実績）",
      "source": "オリコン顧客満足度 パートナーエージェントの企業情報欄（2026年10月24日確認時点の掲載）",
      "now": "公式サイトの会員数は192,000人（CONNECT-ship・SCRUM・IBJの合計／2025年9月18日時点）です。成婚率は「成婚率No.1」（DRC調査・2026年5月）の表記に変わっています。"
    }
  ]
};

export default function PartnerAgentReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "パートナーエージェント" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          パートナーエージェントの口コミ・評判｜3コースの料金・成婚率No.1の根拠を公式情報で確認
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月24日（料金・コース内容・実績は2026年10月24日に公式サイトで再確認。オリコンの利用者コメント19件のテーマ別集計を追加）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />パートナーエージェントとは（運営・料金・特徴・口コミの傾向）
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>運営・形態</strong>：タメニー株式会社（東証グロース上場）が運営する、専任の「成婚コンシェルジュ」が付く仲人型の結婚相談所です。実店舗23店舗とオンライン店11店舗があり、CONNECT-ship・SCRUM・IBJの3つの会員基盤（合計192,000人・2025年9月18日時点）からお相手を探せます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>料金</strong>：登録料33,000円＋初期費用66,000〜198,000円＋月会費14,300〜26,400円＋成婚料220,000円（税込・お見合い料0円）。<strong>1年で成婚した場合の総額目安はオンライン約49.1万円・コンシェルジュ約60.9万円・コミットメント約76.8万円</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>特徴</strong>：コンシェルジュからの紹介がコース別に月2〜8名と明示されています。最上位のコミットメントコースには、お見合いが成立しなかった場合の「月会費無料保証」（紹介開始の翌月から1年間）が付きます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>口コミの傾向</strong>：オリコンの利用者コメント19件では、担当者の助言・対応を評価する内容が8件と最も多い一方、「気になる点」6件には担当者との相性・交代後の対応や、紹介された相手が合わないという内容が含まれます（<a href="#review-themes" className="underline text-[#A08447]">テーマ別の集計</a>）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>実績の表記</strong>：「成婚率No.1」はデジタルライツコンサルティングの調査（2026年5月・店舗数11以上の相談所が比較対象・成婚率＝成婚数÷利用者数）にもとづく表記です。成婚の定義は婚約です。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※料金・コース内容は公式「コース一覧」ページ、実績は公式トップの注記で2026年10月24日に確認した掲載値です。最新の条件は公式サイトおよび無料相談でご確認ください。</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <img src="/ss-partner-agent.jpg" alt="パートナーエージェント 公式サイト" className="w-full h-auto" />
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

        <A8Banner ad="partner-agent" />

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">パートナーエージェントの強み・特徴</h2>
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
              {pros.map((p) => (
                <li key={p} className="text-sm text-[#2C2C2C]/70 flex gap-2"><span className="text-green-500 shrink-0">+</span>{p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50/50 rounded-xl p-6">
            <h3 className="font-medium text-red-800 mb-4 tracking-wider">デメリット</h3>
            <ul className="space-y-2">
              {cons.map((c) => (
                <li key={c} className="text-sm text-[#2C2C2C]/70 flex gap-2"><span className="text-red-400 shrink-0">-</span>{c}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 tracking-widest">他社との比較</h2>
          <p className="text-xs text-[#2C2C2C]/50 mb-3">※パートナーエージェントは2026年10月24日、サンマリエは2026年10月14日に公式サイトで確認。ツヴァイはレビュー掲載時点の数値です。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">パートナーエージェント</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">ツヴァイ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">サンマリエ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">14,300円〜26,400円</td><td className="px-4 py-3 text-center">15,400円〜</td><td className="px-4 py-3 text-center">18,700円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">99,000円〜（登録料込み）</td><td className="px-4 py-3 text-center">115,500円〜</td><td className="px-4 py-3 text-center">165,000円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">会員数</td><td className="px-4 py-3 text-center">192,000人</td><td className="px-4 py-3 text-center">約9.4万人</td><td className="px-4 py-3 text-center">101,240名（IBJ）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">仲人型</td><td className="px-4 py-3 text-center">ハイブリッド型</td><td className="px-4 py-3 text-center">仲人型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">専任コンシェルジュ</td><td className="px-4 py-3 text-center">全国50店舗</td><td className="px-4 py-3 text-center">1981年創業</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <ReviewFacts
          name="パートナーエージェント"
          checkedOn="2026年10月24日"
          officialUrl="https://www.p-a.jp/"
          feeHead={["項目", "コンシェルジュ", "コミットメント", "オンライン"]}
          feeRows={[
            ["登録料", "33,000円", "33,000円", "33,000円"],
            ["初期費用", "132,000円", "198,000円", "66,000円"],
            ["月会費", "18,700円", "26,400円", "14,300円"],
            ["成婚コンシェルジュ紹介", "6名/月", "8名/月", "2名/月"],
            ["AIマッチング紹介", "2名/月", "2名/月", "2名/月"],
            ["検索申込", "24名/月", "24名/月", "14名/月"],
            ["IBJ検索申込", "オプション", "30名/月", "オプション"],
            ["お見合い料", "0円", "0円", "0円"],
            ["成婚料", "220,000円", "220,000円", "220,000円"],
            ["月会費無料保証", "なし", "あり", "なし"],
            ["面談", "無制限", "無制限", "なし（電話・メール・チャット）"],
          ]}
          feeNotes={["金額は税込です。", "月会費無料保証はコミットメントコース限定で、お見合いが成立しなかった場合に月会費を無料にする制度です（紹介開始の翌月から1年間）。", "全コース共通で、お見合いの事前練習・フィードバック、お断りの代行、交際フォロー、プロポーズサポート、成婚退会後1年間の無料サポート、休会制度があります（公式コース一覧）。", "公式のよくある質問ページには「初期費用33,000円〜、月会費11,000円〜」との記載もあり、コース表と一致しません。契約前にコースごとの金額をご確認ください。"]}
          estimate={[
            { label: "オンライン", formula: "33,000円＋66,000円＋14,300円×12＋220,000円", total: "490,600円" },
            { label: "コンシェルジュ", formula: "33,000円＋132,000円＋18,700円×12＋220,000円", total: "609,400円" },
            { label: "コミットメント", formula: "33,000円＋198,000円＋26,400円×12＋220,000円", total: "767,800円" },
          ]}
          company={[
            ["運営", "タメニー株式会社（東証グロース上場・証券コード6181）"],
            ["店舗", "実店舗23店舗＋オンライン店11店舗＋WEB相談"],
            ["会員", "192,000人（CONNECT-ship・SCRUM・IBJの合計／2025年9月18日時点）"],
            ["成婚者数", "35,953名（2007年〜2026年6月・公式発表）"],
          ]}
          reviewNote="Googleマップでは、口コミ3件以上のパートナーエージェント17店舗に計770件の口コミがあり、評価は4.0〜5.0（口コミ件数で加重した平均4.43）でした（当サイトが2026年8〜9月に取得。店舗別はページ下部）。"
          good={[
            { text: "担当者が親身で、アプローチの時期や進め方の助言が的確だったという声（8件）", source: "オリコン顧客満足度調査 パートナーエージェント（利用者コメント19件・2026年10月24日確認）" },
            { text: "定期的に紹介を受けられ、出会いの機会が増えたという声（3件）", source: "同上" },
          ]}
          bad={[
            { text: "担当者との相性が合わなかった、担当者の交代後に合わなくなったという声（2件）", source: "オリコン顧客満足度調査 パートナーエージェント（2026年10月24日確認）" },
            { text: "紹介された相手が自分に合わなかった、希望条件に合う紹介がなかったという声（2件）", source: "同上" },
          ]}
          sources={[{ name: "オリコン顧客満足度 パートナーエージェント", url: "https://life.oricon.co.jp/rank_marriage/company/p-a/" }]}
        />

        <section id="review-themes" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">オリコンの利用者コメント19件をテーマ別に集計（2026年10月24日確認）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            パートナーエージェントの口コミを件数と回答者の属性つきで確認できる媒体として、オリコン顧客満足度調査の企業ページがあります。掲載中の利用者コメント19件（「良い点」13件・「気になる点」6件）を全件確認し、内容をテーマ別に分類しました。1件に複数の論点がある場合は、それぞれのテーマで数えています。
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
                <tr className="border-t border-gray-50"><td className="px-4 py-3">担当者の助言・対応を評価</td><td className="px-4 py-3">8件</td><td className="px-4 py-3">アドバイザーが手厚い、アプローチの時期を的確に後押ししてくれた、説明が丁寧、チャットで気軽に相談できる、面談でフォローしてくれるという内容</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">紹介・出会いの機会</td><td className="px-4 py-3">3件</td><td className="px-4 py-3">定期的に紹介してくれる、いろいろな方を紹介してくれる、出会いが少ない中で紹介を受けられるという内容</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">活動の進めやすさ・成果</td><td className="px-4 py-3">2件</td><td className="px-4 py-3">やり取りの前に一度会えるので時間を無駄にしない、計画的に動いて相手を見つけ退会できたという内容</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">その他の良い点</td><td className="px-4 py-3">3件</td><td className="px-4 py-3">お相手のプロフィールが信頼できる、店舗が駅から近い、合わない担当者をすぐに交代してもらえた（各1件）</td></tr>
                <tr className="border-t border-gray-50 bg-red-50/40"><td className="px-4 py-3">担当者との相性・交代後の対応</td><td className="px-4 py-3">2件</td><td className="px-4 py-3">担当者の発言に不満があった、担当者が退職して交代した後の方と合わなかったという内容</td></tr>
                <tr className="border-t border-gray-50 bg-red-50/40"><td className="px-4 py-3">紹介された相手が合わない</td><td className="px-4 py-3">2件</td><td className="px-4 py-3">希望条件に合う紹介がなかった、勧められた相手が自分には合わなかったという内容</td></tr>
                <tr className="border-t border-gray-50 bg-red-50/40"><td className="px-4 py-3">その他の気になる点</td><td className="px-4 py-3">3件</td><td className="px-4 py-3">質問しないと教えてもらえず受け身では進まない、申し込みが多く日程調整（コールセンター経由）が大変だった、交際を見送られた理由が分からない（各1件）</td></tr>
              </tbody>
            </table>
          </div>
          <ul className="space-y-1 text-xs text-[#2C2C2C]/60 leading-relaxed">
            <li>※出典：<a href="https://life.oricon.co.jp/rank_marriage/company/p-a/" target="_blank" rel="nofollow noopener noreferrer" className="underline">オリコン顧客満足度 パートナーエージェント 結婚相談所の評判・口コミ</a>（調査全体の回答者3,922人。2026年10月24日に確認）。分類は当サイトによるもので、コメントの本文は転載していません。</li>
            <li>※回答者の内訳は女性15件・男性4件で、「気になる点」6件はすべて20〜30代の女性によるものです。件数が少ないため、傾向は目安としてご覧ください。</li>
            <li>※口コミサイト「みん評」にもパートナーエージェントの投稿がありますが、当サイトからはページを閲覧できなかったため、件数・内容は集計に含めていません。</li>
          </ul>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mt-4">
            集計からは、専任コンシェルジュの助言を評価する声が多い一方で、満足度が担当者との相性に左右されやすいことがわかります。良い点にも「合わない担当者をすぐに交代してもらえた」という声があるため、無料相談では担当者の交代の可否と手順、交際を見送られた場合にどこまで理由のフィードバックを受けられるかを確認しておくことをおすすめします。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            パートナーエージェントと他社を比較して選ぶ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            パートナーエージェントがご自身に合うか迷われた場合は、料金総額・会員数・サポート形式を他社と比較することをおすすめします。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（24社一覧）を見る</Link></li>
            <li><Link href="/review/zwei/" className="text-[#A08447] underline">ツヴァイの評判・料金を見る</Link></li>
            <li><Link href="/review/onet/" className="text-[#A08447] underline">オーネットの評判・料金を見る</Link></li>
            <li><Link href="/review/sunmarie/" className="text-[#A08447] underline">サンマリエの評判・料金を見る</Link></li>
          </ul>
        </section>

        <A8Banner ad="partner-agent" />

        <ReviewExtra {...REVIEW_EXTRA} checkedOn="2026年10月24日" />
        <FlowGuide name={overview.name} initialFee={overview.initialFee} monthlyFee={overview.monthlyFee} matchingFee={overview.matchingFee} />

        {/* 口コミの傾向(編集部要約) */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">Googleマップの口コミの傾向（2026年9月6日取得・当サイトによる要約）</h2>
          <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-6 space-y-3 text-sm leading-relaxed text-[#555]">
            <p><span className="font-medium text-[#A08447]">よく見られる好意的な声</span>：成婚退会者から「担当コンシェルジュが親身」「プロフィール作成を一緒に磨いてくれた」という伴走面の感謝が最も多く、「半年以内に成婚できた」というスピード感の報告も複数あります。IBJ併用で出会いを広げた声や、「担当者同士が情報共有して相性の良い相手を引き合わせてくれた」という仲人型ならではの評価も特徴的です。</p>
            <p><span className="font-medium text-rose-700">気になる声</span>：一方で「説明会で担当者の物言いが高圧的だった」「電話対応に不満」という接客面の強い低評価も複数あり、運営側が上席者による謝罪・是正で対応した経緯も口コミに記載されています。担当者によって対応に差があると考えられるため、無料相談の段階で担当者との相性を見極めることが重要です。</p>
            <p className="text-xs text-[#999]">※Googleマップ(新宿・大阪・横浜)の直近の口コミをPlaces APIで取得し、当サイトで内容を確認したうえで傾向を要約したものです（本文の転載は行っていません）。個々の体験は店舗・担当者・時期により異なります。</p>
          </div>
        </section>

              <FeePosition slug="partner-agent" />

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
          <h2 className="text-xl font-light mb-4 tracking-widest">パートナーエージェントの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">コースごとの総額は、無料相談で確認できます</p>
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
      <BrandStores href="/review/partner-agent/" brandName="パートナーエージェント" />

      </article>
    </>
  );
}
