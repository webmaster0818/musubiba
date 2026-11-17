import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-17 確認）。
// ・3つの制度・あいきゅん会員の条件（18歳以上・県内在住/在勤または県内で結婚を考えている方・登録無料）：いしかわ結婚支援センター公式「あいきゅん」「あいきゅん会員登録について」
// ・マッチングの利用登録料（10,000円/2年・返金なし）・必要書類・流れ・交通費1,000円・当日キャンセル2,000円・回答4日以内：同「縁結びマッチング」、同「よく頂くご質問」
// ・縁結びistによるお見合い（担当最大2か月・財団への登録料/相談料無料・交通費1,000円）：同「縁結びist」、同「よく頂くご質問」
// ・登録縁結びist数363人（2026年3月末）・活動拠点（金沢・七尾・小松、輪島は休止中）：同「縁結びistとは？」
// ・登録キャンペーン（2026/10/1〜2027/3/31、20代無料・30代半額）：同 お知らせ（公開日2026年10月1日）
// ・婚カフェいしかわ（相談日時・出張相談・オンライン相談）：同「婚カフェいしかわ」
// ・市町の結婚支援事業：同「市町窓口・事業一覧」（マッチング登録料の補助事業の掲載はなし）
// ・システム運用開始（2023年3月21日）：石川県 資料提供（2023年1月20日）
// ・あいきゅん会員登録者数4,002人（令和5年度）：石川県「いしかわエンゼルプラン2025」第4章
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の24社実査値

const TOP_URL = "https://kekkon.i-oyacomi.net/";
const IKYUN_URL = "https://kekkon.i-oyacomi.net/ikyun/";
const IKYUN_ABOUT_URL = "https://kekkon.i-oyacomi.net/ikyun/about/";
const MATCHING_URL = "https://kekkon.i-oyacomi.net/matching/";
const HAPPY_URL = "https://kekkon.i-oyacomi.net/happy/";
const IST_URL = "https://kekkon.i-oyacomi.net/happy/ist/";
const FAQ_URL = "https://kekkon.i-oyacomi.net/faq/";
const CAFE_URL = "https://kekkon.i-oyacomi.net/cafe/";
const TOWN_URL = "https://kekkon.i-oyacomi.net/town/";
const CAMPAIGN_URL = "https://kekkon.i-oyacomi.net/news/2026/02/17/219/";
const PREF_START_URL = "https://www.pref.ishikawa.lg.jp/kisya/r4/documents/0120syousika_enmusubi.pdf";
const ANGEL_URL = "https://www.pref.ishikawa.lg.jp/kodomoseisaku/angelplan2025/documents/06_4syou.pdf";

const townSupport = [
  { town: "白山市", detail: "縁結びサポーター（28名）による結婚相談、婚活イベントの開催" },
  { town: "津幡町", detail: "津幡町結婚推進員（6名）による相談・お相手探し" },
  { town: "七尾市", detail: "結婚相談員（9名）による相談・お相手探し" },
  { town: "羽咋市", detail: "結婚相談員（12名）による個別の結婚相談" },
  { town: "中能登町", detail: "結婚推進員（7名）による結婚相談・お見合いの斡旋" },
  { town: "宝達志水町", detail: "結婚アドバイザーによる相談・お相手探し（成婚時に成婚祝金10万円分の商品券）" },
  { town: "能登町", detail: "婚活登録者のお見合い開催、婚活パーティ（3対3）の開催" },
];

export const metadata: Metadata = {
  title: "いしかわ結婚支援センターの料金と登録条件｜石川県の公的婚活は2年1万円、民間の結婚相談所と費用比較【2026年】",
  description:
    "石川県のいしかわ結婚支援センターは、自分で探す「いしかわ縁結びマッチング」が利用登録料10,000円/2年、ボランティアが紹介する「縁結びist」は財団への登録料が無料です。登録条件・必要書類・お見合いごとの費用・拠点を公式情報で整理し、民間の結婚相談所の費用と比較しています。",
  alternates: { canonical: "/knowledge/ishikawa/" },
};

const faqs = [
  {
    q: "いしかわ結婚支援センターの料金はいくらですか？",
    a: "センター会員「あいきゅん会員」の登録は無料です。システムで自分でお相手を探す「いしかわ縁結びマッチング」は利用登録料10,000円/2年で、途中退会や一度も利用がない場合でも返金はありません。「縁結びistによるお見合い」は、公式FAQで財団への登録料・相談料などは無料とされています。どちらもお見合いのたびに担当者の交通費1,000円と、対面の場合は担当者の分を含む飲食代の負担があります（公式「縁結びマッチング」「縁結びist」「よく頂くご質問」）。",
  },
  {
    q: "石川県外に住んでいても登録できますか？",
    a: "公式の利用条件は、結婚を希望する18歳以上の独身の方で、石川県内に在住・在勤の方、または石川県内で結婚を考えている方です。県外にお住まいでも、石川県内での結婚を考えている方は条件に当たります。スマートフォンかパソコンを持っていること、過去に会員登録を抹消されたことがないことも条件です（公式「あいきゅん」）。",
  },
  {
    q: "マッチングと縁結びistによるお見合いは、どう違いますか？",
    a: "マッチングは、ご自身のスマートフォンやパソコンでお相手を検索してお見合いを申し込む仕組みで、成立後はボランティアのマッチングサポーターが日程調整とお見合いの同席を行います。縁結びistによるお見合いは、ボランティアの縁結びistがプロフィールをもとにお相手を紹介する仕組みで、会員自身は他の会員を検索できません。縁結びistは紹介相手に心当たりがある場合に担当となるため、必ず紹介されるとは限らず、担当期間は最大2か月です。両方に登録することもできます。",
  },
  {
    q: "住んでいる市町から登録料の補助を受けられますか？",
    a: "センター公式の「市町窓口・事業一覧」（2026年11月17日確認）には、マッチングの利用登録料を補助する市町の事業は掲載されていません。登録料の負担を軽くする制度としては、県とセンターの登録キャンペーン（2026年10月1日〜2027年3月31日、新規登録の20歳代は無料・30歳代は半額の5,000円）があります。なお、七尾市・羽咋市・津幡町などは、市町独自の結婚相談員によるお相手探しを行っています。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "いしかわ結婚支援センターの料金と登録条件",
  description: "石川県のいしかわ結婚支援センター（あいきゅん・いしかわ縁結びマッチング・縁結びistによるお見合い）の料金・登録条件・必要書類・活動の流れ・拠点と、民間の結婚相談所との費用の比較を整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-17",
  dateModified: "2026-11-17",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/ishikawa/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "いしかわ結婚支援センター", item: "https://mu-su-bi-ba.com/knowledge/ishikawa/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";

export default function KnowledgeIshikawa() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "いしかわ結婚支援センター" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          いしかわ結婚支援センターの料金・登録条件と、石川県で結婚相談所を選ぶときの費用比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月17日（料金・条件・拠点・キャンペーンは同日にセンター公式サイトで、運用開始日と会員登録者数は石川県の資料で確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />自分で探すなら「マッチング」で2年1万円、紹介を待つなら「縁結びist」で登録料無料です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>入口となる<strong>「あいきゅん会員」の登録は無料</strong>で、イベント・マッチング・縁結びistによるお見合いの3つの制度を利用できます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>「いしかわ縁結びマッチング」の利用登録料は<strong>10,000円/2年</strong>。2027年3月31日までのキャンペーンでは、新規登録の<strong>20歳代は無料・30歳代は5,000円</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>月会費・成婚料の案内はありません。お見合いごとに<strong>担当者の交通費1,000円</strong>と飲食代（担当者の分を含む）がかかります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>あいきゅんの会員登録者数は<strong>4,002人（令和5年度）</strong>、登録縁結びistは<strong>363人（2026年3月末）</strong>です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">3つの制度と料金</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>いしかわ縁結びマッチング</th><th className={th}>縁結びistによるお見合い</th><th className={th}>いしかわ縁結びイベント</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>出会い方</td><td className={td}>スマートフォン・パソコンで自分で検索し、お見合いを申し込む</td><td className={td}>ボランティアの縁結びistがお相手を紹介（会員自身は検索不可）</td><td className={td}>企業・団体等が開催するイベントに申し込む</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録料</td><td className={td}>10,000円/2年（返金なし）</td><td className={td}>財団への登録料・相談料は無料</td><td className={td}>あいきゅん会員登録のみ（無料）。参加費は主催者の規定による</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お見合いごとの費用</td><td className={td}>マッチングサポーターの交通費1,000円＋飲食代（サポーター分を含む）</td><td className={td}>縁結びistの交通費1,000円＋飲食代（縁結びist分を含む）</td><td className={td}>—</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>当日キャンセル</td><td className={td}>連絡なしの場合、交通費として2,000円。システムの利用制限の場合あり</td><td className={td}>交通費として2,000円</td><td className={td}>キャンセル料は主催者の規定による</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>サポート</td><td className={td}>マッチングサポーター（ボランティア）が日程調整・お見合いに同席・交際中のフォロー</td><td className={td}>担当縁結びistがお見合いに同席・交際中のフォロー。担当期間は最大2か月</td><td className={td}>—</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              マッチングのシステムは2023年3月21日に運用を開始しました。2つの制度に同時に登録することもできますが、マッチングで交際中の期間は縁結びistからの紹介は止まります。縁結びistは紹介相手に心当たりがある場合に担当となる仕組みのため、公式FAQでは「必ず紹介できるとは限りません」と案内されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MATCHING_URL} target="_blank" rel="noopener noreferrer" className="underline">いしかわ結婚支援センター「縁結びマッチング」</a>・<a href={HAPPY_URL} target="_blank" rel="noopener noreferrer" className="underline">「縁結びist」</a>・<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="underline">「よく頂くご質問」</a>・<a href={IKYUN_ABOUT_URL} target="_blank" rel="noopener noreferrer" className="underline">「あいきゅん会員登録について」</a>（いずれも2026年11月17日確認）、<a href={PREF_START_URL} target="_blank" rel="noopener noreferrer" className="underline">石川県「『いしかわ縁結びマッチング』システム 会員募集開始について」</a>（2023年1月20日・2026年11月17日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">登録条件と必要書類</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>公益財団法人いしかわ結婚・子育て支援財団 いしかわ結婚支援センター（金沢市鞍月東2丁目1番地・石川県立総合看護専門学校1階、TEL 076-255-1535）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>利用条件</td><td className={td}>結婚を希望する18歳以上の独身の方／石川県内に在住・在勤の方、または石川県内で結婚を考えている方／スマートフォンもしくはパソコンを持っている方／過去に会員登録を抹消されたことのない方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類（マッチング・縁結びist共通）</td><td className={td}>プロフィール用写真（縦型1〜2枚、本人のみ・3か月以内に撮影、バストアップ1枚は必須）、写真付き身分証（運転免許証またはマイナンバーカード）、本籍地の市町村が発行する独身証明書（戸籍抄本で代用可）。書類は発行日から3か月以内の原本に限る</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>手続きの方法</td><td className={td}>「あいきゅん」のマイページから各制度の会員登録を選び、写真と本人確認書類の画像をアップロードする。マッチングは本人確認の完了後、センターが案内する口座に利用登録料を振り込む</td></tr>
                </tbody>
              </table>
            </div>
            <p>公式の登録手順には、来所しての面談は記載されていません。来所の要否や書類の不明点は、登録前にセンターへお問い合わせください。</p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={IKYUN_URL} target="_blank" rel="noopener noreferrer" className="underline">いしかわ結婚支援センター「あいきゅん」</a>・<a href={MATCHING_URL} target="_blank" rel="noopener noreferrer" className="underline">「縁結びマッチング」</a>・<a href={HAPPY_URL} target="_blank" rel="noopener noreferrer" className="underline">「縁結びist」</a>・<a href={TOP_URL} target="_blank" rel="noopener noreferrer" className="underline">公式トップページ</a>（いずれも2026年11月17日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">いしかわ縁結びマッチングの活動の流れ</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>専用サイト「あいきゅん」で会員登録する（無料）</li>
              <li>マイページから「いしかわ縁結びマッチング」の会員登録を選び、プロフィールを作成する。お見合いの形式は「対面」「オンライン（Zoom）」「どちらでもよい」から選ぶ</li>
              <li>写真と本人確認書類をアップロードし、利用登録料を振り込む</li>
              <li>お相手を検索してお見合いを申し込む。申込みを受けた側は申込み日を含む4日以内に回答し、双方が希望すればマッチング成立。申込み後の取り下げはできない</li>
              <li>担当のマッチングサポーターが日程・場所を調整し、お見合い（1時間程度）に同席する。当日は氏名・住所・連絡先を聞き出さないことが決まりです</li>
              <li>お見合い日を含めて4日以内にマイページで交際意思を回答する。双方が「交際に進む」と回答すると、センターからお相手の氏名と電話番号が伝えられる</li>
              <li>結婚が決まったら担当マッチングサポーターに連絡し、マイページから退会手続きを行う</li>
            </ol>
            <p>2025年10月からは、質問に答えて性格タイプを判定し、お相手探しに活用する性格診断の機能が加わっています（石川県 資料提供・2025年10月1日）。</p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MATCHING_URL} target="_blank" rel="noopener noreferrer" className="underline">いしかわ結婚支援センター「縁結びマッチング」</a>・<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="underline">「よく頂くご質問」</a>（いずれも2026年11月17日確認）、<a href="https://www.pref.ishikawa.lg.jp/kisya/r7/documents/1001_15_syosika.pdf" target="_blank" rel="noopener noreferrer" className="underline">石川県「『いしかわ縁結びマッチング』システムへの性格診断の導入…について」</a>（2026年11月17日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">会員数・拠点・相談窓口</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th><th className={th}>出典</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>あいきゅん会員登録者数</td><td className={td}>4,002人（令和5年度。県の目標は令和11年度に6,000人）</td><td className={td}>石川県「いしかわエンゼルプラン2025」第4章</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録縁結びist数</td><td className={td}>363人（男性102人・女性261人、2026年3月末現在）</td><td className={td}>センター公式「縁結びistとは？」</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>縁結びistの活動拠点</td><td className={td}>交流サロン金沢（センター内）、サテライト七尾（のとしん国分センター）、サテライト小松（いしかわ子ども交流センター小松館）。サテライト輪島（奥能登行政センター）は能登半島地震の影響により休止中</td><td className={td}>同上</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>婚カフェいしかわ（無料相談の窓口）</td><td className={td}>専任の相談員による1対1の相談（1時間程度）。火・水・木曜日 9:30〜13:00（予約優先）、土曜日 9:30〜13:30（予約者のみ・第1土曜日を除く）。七尾・小松での出張相談、オンライン相談にも対応</td><td className={td}>センター公式「婚カフェいしかわ」</td></tr>
                </tbody>
              </table>
            </div>
            <p>会員登録者数は令和5年度の値で、現在の人数や男女別・年代別の内訳はセンターの公式サイトに掲載されていません。登録前に内訳を知りたい場合は、センターへお問い合わせください。婚カフェの相談回数に制限はなく、縁結びistに相談内容が伝わることはないと公式FAQで案内されています。</p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={ANGEL_URL} target="_blank" rel="noopener noreferrer" className="underline">石川県「いしかわエンゼルプラン2025」第4章 具体的施策の展開</a>、<a href={IST_URL} target="_blank" rel="noopener noreferrer" className="underline">いしかわ結婚支援センター「縁結びistとは？」</a>・<a href={CAFE_URL} target="_blank" rel="noopener noreferrer" className="underline">「婚カフェいしかわ」</a>・<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="underline">「よく頂くご質問」</a>（いずれも2026年11月17日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">登録料の割引キャンペーンと、市町の結婚支援</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              センター公式の「市町窓口・事業一覧」（2026年11月17日確認）には、マッチングの利用登録料を補助する市町の事業は掲載されていません。登録料の負担を軽くする制度としては、県とセンターが実施する次のキャンペーンがあります。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>実施期間</td><td className={td}>2026年10月1日〜2027年3月31日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>割引の内容（申込み時点の年齢）</td><td className={td}>20歳代は無料、30歳代は5,000円（通常10,000円/2年）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>条件</td><td className={td}>新規登録の方に限る（更新は対象外）。2027年3月24日までにプロフィール写真と本人確認書類の提出を完了し、2027年3月31日までに利用登録料の入金を完了すること</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              また、センターの一覧では、次の市町が市町独自の結婚相談員などによる相談・お相手探しを行っていると案内されています。センターの制度と併用できるかどうかは、各市町の担当課にご確認ください。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>市町</th><th className={th}>事業の内容（センター一覧の記載）</th></tr></thead>
                <tbody>
                  {townSupport.map((s) => (
                    <tr key={s.town} className="border-t border-[#E5DCCF] align-top"><td className={td}>{s.town}</td><td className={td}>{s.detail}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>このほか、多くの市町が新婚世帯の住居費・引越費用の補助を設けています。対象年齢や所得の条件は市町ごとに異なります。</p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CAMPAIGN_URL} target="_blank" rel="noopener noreferrer" className="underline">いしかわ結婚支援センター「『いしかわ縁結びマッチング登録キャンペーン！』実施中！」</a>（公開日2026年10月1日）・<a href={TOWN_URL} target="_blank" rel="noopener noreferrer" className="underline">「市町窓口・事業一覧」</a>（いずれも2026年11月17日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>2年間の登録料（当サイト計算）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>いしかわ結婚支援センター（マッチング）</td><td className={td}>10,000円/2年</td><td className={td}>10,000円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>いしかわ結婚支援センター（縁結びist）</td><td className={td}>財団への登録料は無料</td><td className={td}>0円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンター（はばタン会員）</Link></td><td className={td}>5,000円/年</td><td className={td}>10,000円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/deaiba/" className="text-[#A08447] underline">いばらき出会いサポートセンター（であイバ）</Link></td><td className={td}>11,000円（3年間有効。条件に当たらない方は22,000円）</td><td className={td}>11,000円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>—</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              石川県のセンターでは、登録料とは別にお見合いのたびに担当者の交通費1,000円がかかります。当サイトの計算では、2年間でお見合いを10回行った場合、マッチングの費用は登録料10,000円と交通費10,000円の計20,000円（飲食代は別）です。民間の結婚相談所は費用が高くなる一方、料金に含まれる担当者の紹介や相談などの支援の内容は相談所ごとに異なります。費用と支援の内容の両方を比べて選ぶことをおすすめします。
            </p>
            <p>
              当サイトでは現在、石川県内の民間の結婚相談所の一覧を掲載しておりません。オンラインで活動できる相談所は、<Link href="/compare/online/" className="text-[#A08447] underline">オンライン結婚相談所の比較</Link>で比べることができます。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。お見合い10回の費用は、公式に案内されている交通費1,000円/回をもとにした当サイトの試算です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/knowledge/hyogo-deai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ひょうご出会いサポートセンター（兵庫県）</Link>
            <Link href="/knowledge/deaiba/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">であイバ（茨城県）</Link>
            <Link href="/knowledge/mie/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">みえむすび（三重県）</Link>
            <Link href="/knowledge/akita/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">あきた結婚支援センター（秋田県）</Link>
            <Link href="/compare/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">24社の料金比較</Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="border border-[#E5DCCF] rounded-xl">
                <summary className="cursor-pointer px-5 py-4 text-sm font-medium text-[#2C2C2C]">{f.q}</summary>
                <p className="px-5 pb-5 text-sm text-[#2C2C2C]/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <AuthorBox />
      </article>
    </>
  );
}
