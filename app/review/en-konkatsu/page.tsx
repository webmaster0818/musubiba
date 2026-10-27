import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FeePosition from "@/components/FeePosition";
import AuthorBox from "@/components/AuthorBox";
import FlowGuide from "@/components/FlowGuide";
import BrandStores from "@/components/BrandStores";
import ReviewFacts from "@/components/ReviewFacts";
import ReviewExtra from "@/components/ReviewExtra";

export const metadata = {
  title: "エン婚活エージェントの口コミ・評判｜オリコン オンライン型1位・返金保証の対象外7条件・料金【2026年10月】",
  description:
    "エン婚活エージェントの口コミ・評判を、オリコン顧客満足度調査の利用者コメント18件と公式の定めの照合で整理しています。登録料33,000円・月会費16,500円・成婚料0円（2026年10月27日公式確認）、全額返金保証の対象外7条件、入会条件・対応エリアも掲載しています。",
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
    desc: "公式サイトは「3ヶ月以内にコンタクト（お見合い）が成立しなければ、登録料と3か月分の月会費を返金」としています（2026年10月27日確認）。適用条件と対象外となる場合は下記「全額返金保証の適用条件」で整理しています。",
  },
  {
    title: "登録料33,000円・月会費16,500円・成婚料0円",
    desc: "お見合い料・成婚料が0円のため、1年活動して成婚退会した場合の単純計算は231,000円です。運営は東証プライム上場のエン・ジャパングループです。",
  },
  {
    title: "IBJ Onlineも追加料金なしで利用できます",
    desc: "2026年3月30日の提携発表により、IBJ Onlineを追加料金なしで利用できると公式サイトに記載があります。紹介可能人数は17.4万人以上（2026年6月時点の各社公表値の合計）です。",
  },
];

const pros = [
  "お見合い料・成婚料0円で、1年総額は231,000円（当サイト試算）",
  "3ヶ月お見合い不成立で登録料＋月会費3ヶ月分の返金保証",
  "オリコン顧客満足度調査のオンライン型で2024年〜2026年の1位（70.8点）",
];

const cons = [
  "対面でのサポートは受けられない",
  "2026年7月に料金改定の告知があり、古い記事の料金とは異なる",
  "オリコン調査ではマッチングの少なさを挙げる声もある",
];

const faqs = [
  {
    q: "エン婚活エージェントの料金はいくらですか？",
    a: "登録料33,000円、月会費16,500円、お見合い料・成婚料0円です（税込・2026年10月27日に公式サイトで確認）。休会中の月会費は7,150円です。2026年7月1日に料金改定の告知があったため、古い記事の金額（月会費14,300円など）とは異なります。",
  },
  {
    q: "全額返金保証の条件を教えてください",
    a: "全額返金保証規約（2026年7月1日改定）では、利用契約成立月の翌月から3ヵ月目の末日までにコンタクトが成立しなかった場合、登録料と3ヵ月分の月会費（請求確定済みの金額が上限）が返金されます。期間中は毎月、紹介された相手のうち最低1名に「会いたい」と回答すること、入会申込日から1ヵ月以内に紹介可能状態（書類提出・プロフィール登録・支払方法の登録）になることが条件です。期間満了日までの退会、紹介中止の申し出、回答期限内に一度も回答しなかった場合、支払い遅延によるサービス停止、過去に本特典で返金を受けたことがある場合などは対象外です（2026年10月27日確認）。",
  },
  {
    q: "エン婚活エージェントの口コミ・評判はどうですか？",
    a: "オリコン顧客満足度調査（回答3,922人）のページ（オンライン型で2024年・2025年・2026年の1位、70.8点）には、利用者コメント18件（良い点12件・気になる点6件）が掲載されており、始めやすさ・アドバイザーの伴走・オンラインお見合いの手軽さを評価する声と、マッチングや返信が少ない・日程調整がわずらわしいという声の両方が掲載されています。Googleマップの事業所には口コミ41件・評価3.3（当サイトが2026年8月に取得）がありました。",
  },
  {
    q: "毎月何人紹介されますか？地方でも利用できますか？",
    a: "公式FAQと返金保証規約では、データマッチングで毎月6名以上を紹介するとしています。サービス提供エリアに制限はありませんが、会員が多い地域（関東7都県・関西6府県・東海3県と、福岡・熊本・佐賀・広島・岡山・山口・静岡・宮城・北海道）以外では6名以上の紹介が難しい場合があると記載されています。なお、宮城・福岡・熊本・佐賀・広島・岡山・山口・静岡・北海道とサービス提供エリア外にお住まいの方は、紹介人数の条件にかかわらず返金保証の対象とされています（2026年10月27日確認）。",
  },
  {
    q: "サクラや業者はいますか？",
    a: "公式FAQにサクラ・業者についての記載はありません。入会時には本人確認書類と、発行から3ヵ月以内の独身証明書（または戸籍抄本・謄本）の提出が必要で、男性は年収証明書も必須です。当サイトではサクラの有無を確認する手段がないため、書類提出が入会条件であることのみを掲載しています。",
  },
  {
    q: "エン婚活エージェントは今も入会できますか？",
    a: "2026年10月27日時点の公式サイトに新規受付の終了やサービス終了の告知はなく、無料相談・キャンペーンの案内が掲載されています。",
  },
  {
    q: "エン婚活エージェントの運営会社はどこですか？",
    a: "東証プライム上場のエン・ジャパングループの会社で、公式サイトのフッターには「en-konkatsu agent inc.」と表記されています。",
  },
  {
    q: "成婚までの期間や実績を教えてください",
    a: "公式サイトは累計の成婚数を3,500組以上としていますが、成婚率や平均活動期間の公表は確認できませんでした（2026年10月27日時点）。",
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
      "detail": "コメント18件の内訳は「良い点」12件・「気になる点」6件です。投稿者は30代男性7件・40代男性5件と男性が多めです。",
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
      "独身で、男性は20歳以上60歳以下・女性は20歳以上55歳以下の方が対象です。男性は定職に就き、安定した収入があることが条件です。このほか、反社会的勢力でないこと、債務超過・自己破産の状態でないこと等の条件があります。"
    ],
    [
      "必要書類",
      "本人確認書類、独身証明書（発行から3ヶ月以内）、年収証明書（男性は必須・女性は就労している場合）、学歴証明書（該当する場合）が必要です。書類は入会後にマイページから提出でき、揃っていなくても入会手続きはできます。"
    ],
    [
      "対応エリア",
      "サービス提供エリアの制限はありません。ただし会員数が少ないエリアでは「毎月6名以上の紹介」を満たせない場合があります。会員が多いのは関東・関西・東海と、福岡・熊本・佐賀・広島・岡山・山口・静岡・宮城・北海道などのエリアです。"
    ],
    [
      "休会",
      "毎月25日までに申し出ると、翌月1日から休会できます。休会中の月会費は7,150円（税込）で、相談は続けられます。"
    ],
    [
      "退会",
      "毎月15日までの申し出で当月末（16日以降の申し出は翌月末）に退会となります。成婚退会の申し出は25日までです。最低活動期間・解約手数料はありません。登録料は返金されません。"
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
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月27日（料金・全額返金保証規約・よくある質問は2026年10月27日に公式サイトで確認）</p>
        <section className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-6 mb-8 text-sm leading-relaxed text-[#2C2C2C]/80">
          <h2 className="text-base font-medium text-[#A08447] mb-3 tracking-wider">エン婚活エージェントとは（要点）</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>エン・ジャパングループ（東証プライム上場）が運営する、来店不要のオンライン完結型の結婚相談所です。</li>
            <li>料金は登録料33,000円・月会費16,500円で、お見合い料・成婚料は0円です（税込・2026年10月27日公式確認）。1年活動して成婚退会した場合の総額は231,000円です（当サイト試算）。</li>
            <li>毎月6名以上の紹介を掲げ、3ヵ月以内にコンタクトが成立しなければ登録料と3ヵ月分の月会費を返金する保証があります。返金には毎月の回答などの条件があり、対象外となる場合が7つ定められています（下記）。</li>
            <li>オリコン顧客満足度調査ではオンライン型で2024年から2026年まで1位（70.8点）です。一方、会員の少ない地域では紹介が少ないという声があり、公式も会員の多い地域以外では6名以上の紹介が難しい場合があるとしています。</li>
          </ul>
        </section>

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
          <p className="text-xs text-[#2C2C2C]/50 mb-3">※エン婚活エージェントは2026年10月27日、naco-doは2026年10月14日、スマリッジは2026年10月23日に各公式サイトで確認した数値です。</p>
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

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">口コミでよく挙がる論点と公式の定め</h2>
          <p className="text-sm text-[#2C2C2C]/70 leading-relaxed mb-4">
            口コミ・評判を扱う上位記事（2026年10月27日に当サイトで確認）で繰り返し取り上げられている論点について、公式サイトの「よくある質問」と「全額返金保証規約」に何が書かれているかを照合しました。口コミそのものの真偽ではなく、公式の定めを確認するための表です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100">
              <thead><tr className="bg-[#F5F0EB]"><th className="px-4 py-3 text-left font-medium">口コミで挙がる論点</th><th className="px-4 py-3 text-left font-medium">公式の定め（2026年10月27日確認）</th></tr></thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 align-top">地方では紹介される人数が少ない</td><td className="px-4 py-3">提供エリアの制限はありませんが、会員の多い地域（関東・関西・東海と、福岡・熊本・佐賀・広島・岡山・山口・静岡・宮城・北海道）以外では6名以上の紹介が難しい場合があるとFAQに記載があります。上記9道県とエリア外の方は、紹介人数にかかわらず返金保証の対象です。</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 align-top">毎月6人紹介してもらえる</td><td className="px-4 py-3">返金保証規約は「毎月最低6名の紹介を保証」としたうえで、希望条件やエリアによる例外があると定めています。</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 align-top">会う約束がキャンセルされてもお金が戻らない</td><td className="px-4 py-3">お見合いがキャンセルされた場合の返金についての定めは、FAQ・返金保証規約のいずれにも見当たりません。返金保証は「3ヵ月間コンタクトが一度も成立しなかった場合」が対象です。</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 align-top">サクラや業者がいるのではないか</td><td className="px-4 py-3">公式にサクラ・業者についての記載はありません。入会時に本人確認書類と独身証明書（発行から3ヵ月以内）の提出が必要で、男性は年収証明書も必須です。</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 align-top">日程調整がわずらわしい・返信が少ない</td><td className="px-4 py-3">オリコンの「気になる点」6件にも同じ趣旨の声があります。公式は遅刻や相手と会えない場合の連絡手段として、マイページのクラウド電話サービスとファーストコンタクトセンターを案内しています。</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#999] mt-3">出典: エン婚活エージェント公式「よくある質問」「全額返金保証規約」、オリコン顧客満足度 エン婚活エージェント（いずれも2026年10月27日確認）。論点は口コミ記事の見出しから当サイトが整理したもので、件数を示すものではありません。</p>
        </section>
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">全額返金保証の適用条件と対象外となる7つの場合</h2>
          <p className="text-sm text-[#2C2C2C]/70 leading-relaxed mb-4">
            公式の全額返金保証規約（2026年7月1日改定・2026年10月27日確認）の要点です。返金額は登録料と3ヵ月分の月会費で、請求確定済みの金額が上限です。返金は期間満了日の属する月の翌々月末日までに指定口座へ振り込まれます。
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <h3 className="font-medium text-[#A08447] mb-3">適用の条件</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2C]/70">
                <li>利用契約成立月の翌月を起算月とし、3ヵ月目の末日までにコンタクトが成立しなかったこと（成立月に紹介が始まった場合は成立月が起算月）</li>
                <li>期間満了日まで毎月、紹介された相手のうち最低1名に「会いたい」と回答していること</li>
                <li>入会申込日から1ヵ月以内に「紹介可能状態」（入会書類の提出・プロフィール登録・支払方法の登録）になっていること</li>
                <li>TMSコース・JBAコースの場合も、返金対象は通常コースの登録料と3ヵ月分の月会費です</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <h3 className="font-medium text-rose-700 mb-3">対象外となる場合</h3>
              <ol className="list-decimal pl-5 space-y-1.5 text-[#2C2C2C]/70">
                <li>希望条件を大きく変えるなどして、紹介が難しくなった場合</li>
                <li>期間満了日までに退会した場合</li>
                <li>期間満了日までに、本人の希望で紹介の中止を申し出た場合</li>
                <li>紹介を受けた後、回答期限内に一度も回答しなかった場合</li>
                <li>入会申込日から1ヵ月以内に紹介可能状態にならなかった場合</li>
                <li>期間満了日までに、支払い遅延でサービスが停止された場合</li>
                <li>過去に入会して本特典で全額返金を受けたことがある場合</li>
              </ol>
            </div>
          </div>
          <p className="text-xs text-[#999] mt-3">出典: <a href="https://en-konkatsu.com/repayment-rule/" target="_blank" rel="noopener noreferrer" className="underline">エン婚活エージェント公式「全額返金保証規約」</a>（当サイトによる要約）。申込前に必ず原文をご確認ください。</p>
        </section>
        <ReviewFacts
          name="エン婚活エージェント"
          checkedOn="2026年10月27日"
          officialUrl="https://en-konkatsu.com/"
          feeHead={["項目", "金額（税込）", "補足"]}
          feeRows={[
            ["登録料", "33,000円", ""],
            ["月会費", "16,500円", "休会中は7,150円"],
            ["お見合い料", "0円", ""],
            ["成婚料", "0円", ""],
          ]}
          feeNotes={["2026年7月1日に「サービスアップデートおよび料金改定」の告知がありました。", "3ヶ月以内にお見合いが成立しなかった場合、登録料＋月会費3ヶ月分が返金されます（条件あり）。"]}
          estimate={[{ label: "1年活動して成婚退会", formula: "33,000円＋16,500円×12＋0円", total: "231,000円" }]}
          company={[
            ["運営", "en-konkatsu agent inc.（公式サイトのフッター表記）"],
            ["グループ", "エン・ジャパングループ（東証プライム上場）"],
            ["形態", "オンライン完結型"],
            ["実績", "累計成婚3,500組以上（公式発表）"],
          ]}
          reviewNote="オリコン顧客満足度調査（過去5年以内の利用者など3,922人が回答）のエン婚活エージェントのページでは、オンライン型の結婚相談所として1位（70.8点）、2024〜2026年の3年連続と掲載されています（2026年10月27日確認）。Googleマップの事業所は口コミ41件・評価3.3（当サイトが2026年8月18日に取得）でした。"
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
            エン婚活エージェントが自分に合うか迷ったら、料金総額・会員数・サポート形式を他社と見比べることをおすすめします。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（24社一覧）を見る</Link></li>
            <li><Link href="/review/mars-cafe/" className="text-[#A08447] underline">マーズカフェの評判・料金を見る</Link></li>
            <li><Link href="/review/naco-do/" className="text-[#A08447] underline">naco-doの評判・料金を見る</Link></li>
            <li><Link href="/review/smartread/" className="text-[#A08447] underline">スマリッジの評判・料金を見る</Link></li>
          </ul>
        </section>

        <ReviewExtra {...REVIEW_EXTRA} checkedOn="2026年10月27日" />
        <FlowGuide name={overview.name} initialFee={overview.initialFee} monthlyFee={overview.monthlyFee} matchingFee={overview.matchingFee} />

        {/* 口コミの傾向(編集部要約) */}
        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">口コミの傾向（当サイトによる要約・2026年9月6日取得）</h2>
          <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-6 space-y-3 text-sm leading-relaxed text-[#555]">
            <p><span className="font-medium text-[#A08447]">よく見られる好意的な声</span>：「オンライン完結なので仕事と両立して自分のペースで活動できた」「初期費用が手頃」というオンライン型ならではの利便性と価格への評価が中心で、1年〜1年半かけて成婚に至った報告があります。落ち込んだ時に担当者が電話で親身に対応してくれたという声もあります。</p>
            <p><span className="font-medium text-rose-700">気になる声</span>：口コミ件数自体は店舗型より少ないものの、「入会後の対応が遅い」「電話窓口の対応が悪い」「返金保証の期限直前の出来事に不信感を持った」といった運営面の低評価の比率が高めです。オンライン型は対面の担当者がいない分、レスポンスの質が満足度に直結しやすいため、無料体験や初期のやり取りで対応スピードを確認することをおすすめします。</p>
            <p className="text-xs text-[#999]">※Googleマップ(オンライン型のため拠点口コミは少数)の直近の口コミをPlaces APIで取得し、当サイトで内容を確認したうえで傾向を要約したものです(本文の転載は行っていません)。個々の体験は店舗・担当者・時期により異なります。</p>
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
          <p className="text-white/50 text-sm mb-8 tracking-wider">全額返金保証付きのサービス内容を、無料相談で詳しく確認できます</p>
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
