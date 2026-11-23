import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-23 確認）。
// ・登録料（県内10,000円・弘前市と県外12,000円・登録月の2年後の同月末まで有効）・登録条件・ひとり親の無料・独身証明書の代用（戸籍抄本）・申込みはWebのみ：青森県「あおもりマッチングシステム『AI（あい）であう』」（2026年5月15日更新）
// ・運営（青森県と県内37市町村の共同運営・NPO法人プラットフォームあおもり）・所在地・営業時間・登録者数806人・成婚退会159人（令和8年11月1日現在）・必要書類：あおもり出会いサポートセンター 公式トップページ
// ・AI紹介月最大4名・リクエスト送信月3件・面談オンライン可・面談約2時間・月額費用/お見合い料/成婚料なし：同「AI（あい）であう」ご利用案内
// ・市町村の登録料補助（八戸市は振込前申請・2分の1上限5,000円）：同「市町村による登録料の補助について」
// ・出張登録会（平川市・十和田市・おいらせ町）：同「出張登録会」。メルマガ会員無料：同「事業概要」
// ・三八地域の開催予定3件：同 イベント一覧（area=sanpachi）と各イベントページ（2026/10/17/42928・2026/11/11/42991・2026/11/13/43021）
// ・システム停止と侵害調査結果：同 お知らせ（2026年10月28日）
// ・八戸市の登録料助成の要件・申請期限・確認証の提示期限：八戸市「あおもり出会いサポートセンター あおもりマッチングシステム『AI（あい）であう』会員募集」（2026年4月24日更新）
// ・縁結び志隊（市内15町内会）：八戸市（2026年5月20日更新）。あおもり結婚応援パスポート：八戸市（2025年1月6日更新）
// ・八戸圏域婚活イベント事業（年3回・定員160人・参加費・R7実績150人/20組）・助成事業（R7実績37人）：八戸市「令和8年度地域少子化対策重点推進交付金活用事業について」（2026年6月15日更新）と実施計画書PDF
// ・結婚新生活支援の実施市町村一覧：青森県「地域少子化対策重点推進交付金を活用した取組について」（2026年6月18日更新）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const PREF_URL = "https://www.pref.aomori.lg.jp/soshiki/kodomo/kodomo/r4_aideau.html";
const PREF_KOUFUKIN_URL = "https://www.pref.aomori.lg.jp/soshiki/kodomo/kodomo/chiikisyoushika_taisaku.html";
const TOP_URL = "https://adsc.jp/";
const AIDEAU_URL = "https://adsc.jp/aideau/";
const ABOUT_URL = "https://adsc.jp/about/";
const HOJO_URL = "https://adsc.jp/aideau_hojo_2025/";
const SHUTCHOU_URL = "https://adsc.jp/category/shutchou/";
const EVENTS_URL = "https://adsc.jp/events/?area=sanpachi";
const NOTICE_URL = "https://adsc.jp/2026/10/28/20261028/";
const CITY_JOSEI_URL = "https://www.city.hachinohe.aomori.jp/soshikikarasagasu/wakamono/shiminkatsudo_chiikikatsudo/1894.html";
const CITY_ENMUSUBI_URL = "https://www.city.hachinohe.aomori.jp/soshikikarasagasu/wakamono/shiminkatsudo_chiikikatsudo/1617.html";
const CITY_PASSPORT_URL = "https://www.city.hachinohe.aomori.jp/soshikikarasagasu/wakamono/shiminkatsudo_chiikikatsudo/23359.html";
const CITY_KOUFUKIN_URL = "https://www.city.hachinohe.aomori.jp/soshikikarasagasu/wakamono/shiminkatsudo_chiikikatsudo/24014.html";
const CITY_EVENT_PLAN_URL = "https://www.city.hachinohe.aomori.jp/material/files/group/99/R8konkatujissikeikaku.pdf";
const CITY_JOSEI_PLAN_URL = "https://www.city.hachinohe.aomori.jp/material/files/group/99/R8macchingujoseikeikaku.pdf";

const upcomingEvents = [
  {
    url: "https://adsc.jp/2026/11/11/42991/",
    date: "2026年12月19日（土）18:00〜20:30",
    name: "八戸圏域冬婚パーティー「恋するほろ酔いNight」",
    org: "八戸圏域連携中枢都市圏縁結び支援事業協議会",
    detail:
      "会場：八戸グランドホテル（八戸市番町）。八戸圏域8市町村に在住・在勤、または移住を予定・希望している20〜49歳の独身の方。定員は男女各30名で、申込多数の場合は抽選。参加費は男性4,000円・女性2,000円。応募締切は2026年12月9日18時",
  },
  {
    url: "https://adsc.jp/2026/11/13/43021/",
    date: "2026年12月20日（日）第一部13:00〜・第二部16:00〜",
    name: "八戸アートミュージアムむすび",
    org: "東北電力フロンティア株式会社",
    detail:
      "会場：八戸市美術館。第一部は20〜39歳、第二部は40〜59歳の独身の方。各部男女各40名。前売り参加費は女性4,400円・男性5,800円（税込）",
  },
];

export const metadata: Metadata = {
  title: "八戸市で結婚相談所を探す方へ｜青森県の「AI（あい）であう」は2年10,000円・八戸市民は半額助成で5,000円、市内の婚活イベント2件と民間との費用比較",
  description:
    "八戸市から利用できる青森県の「あおもり出会いサポートセンター」のAIマッチング「AI（あい）であう」は2年10,000円で、八戸市の助成を使うと自己負担は5,000円です。入会条件・登録者数・申請の順番、市内で受付中の婚活イベント2件、民間との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/hachinohe/" },
};

const faqs = [
  {
    q: "八戸市に住んでいる場合、「AI（あい）であう」の費用はいくらですか？",
    a: "登録料は青森県内（弘前市を除く）にお住まいの方で10,000円（税込）、登録月の2年後の同月末まで有効です。月額費用・お見合い料・成婚料はかかりません。八戸市に住民票がある方は、市の助成（登録料の2分の1・上限5,000円・1人1回限り）を受けると、自己負担は5,000円になります。児童扶養手当を受給しているひとり親家庭の父母は、居住地に関わらず無料です。",
  },
  {
    q: "八戸市の助成はどのような順番で申請しますか？",
    a: "登録料を振り込む前に、八戸市若者活躍応援課へ「助成対象者確認申請書」と本人確認書類の写しを窓口または郵送で提出します。審査後に交付される「助成対象者確認証」をあおもり出会いサポートセンターに提示し、助成適用後の金額を支払います。対象は令和8年4月1日以降に新規に本登録をする方で、申請期限は令和9年2月末日、確認証の提示期限は令和9年3月15日です。振込後に申請しても助成は受けられません。",
  },
  {
    q: "センターは青森市にありますが、八戸市から登録できますか？",
    a: "登録できます。申込みはセンターのホームページからのWeb申込みのみで、電話や来所での申込みは受け付けていません。仮登録の後に本人確認の面談（約1時間半〜2時間）を受けますが、センターの案内では面談はオンラインでも可能とされています。市町村主催の出張登録会もありますが、2026年11月23日時点で八戸市内での開催は掲載されていませんでした。",
  },
  {
    q: "八戸市独自の結婚支援はありますか？",
    a: "八戸市（総合政策部 若者活躍応援課）は、AI（あい）であうの登録料助成、八戸圏域8市町村で連携した婚活イベント、町内会のボランティア「縁結び志隊」に取り組んでいます。新婚世帯の家賃や引越費用を補助する結婚新生活支援事業については、青森県の実施市町村一覧に八戸市の掲載がなく、当サイトでは2026年11月23日時点で確認できませんでした。最新の情報は若者活躍応援課（0178-43-2319）でご確認ください。",
  },
  {
    q: "年齢の条件はありますか？",
    a: "AI（あい）であうは18歳以上（本人確認面談時の年齢）の独身の方が対象で、18歳に到達してから最初の年度末までの方は除かれます。年齢の上限は県・センターの案内には記載がありません。婚活イベントは主催者ごとに年齢の条件があり、例えば2026年12月19日の八戸圏域冬婚パーティーは20〜49歳が対象です。",
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
  headline: "八戸市で結婚相談所を探す方へ：青森県「AI（あい）であう」の料金・入会条件と八戸市の登録料助成、市内の婚活イベント、民間の結婚相談所との比較",
  description: "八戸市から利用できる青森県のあおもり出会いサポートセンター「AI（あい）であう」の料金・入会条件・登録者数と、八戸市の登録料助成の手順、八戸市内で受付中の婚活イベント、八戸圏域婚活イベント事業の実績、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-23",
  dateModified: "2026-11-23",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/hachinohe/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "八戸市の婚活（あおもり出会いサポートセンター）", item: "https://mu-su-bi-ba.com/knowledge/hachinohe/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeHachinohe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "八戸市の婚活（あおもり出会いサポートセンター）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          八戸市で結婚相談所を探す方へ：青森県「AI（あい）であう」の料金・入会条件と八戸市の登録料助成、市内の婚活イベント、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月23日（料金・入会条件・登録者数・イベント情報は同日にあおもり出会いサポートセンター公式サイトと青森県公式サイト、助成制度と市の取組は八戸市公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />八戸市の方は、県の「AI（あい）であう」を市の助成を使って2年5,000円で利用できます
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>青森県と県内37市町村が共同で運営する「あおもり出会いサポートセンター」（青森市）が、AIマッチングシステム「AI（あい）であう」を運営しています。<strong>登録料は2年で10,000円</strong>で、月額費用・お見合い料・成婚料はかかりません。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>八戸市は登録料の<strong>2分の1（上限5,000円）を助成</strong>しています。<strong>登録料を振り込む前</strong>に市の若者活躍応援課へ申請する必要があります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>令和8年11月1日現在の登録者は806人（男性537人・女性269人）、成婚退会は159人です。面談はオンラインでも受けられます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>八戸市内では、<strong>2026年12月に婚活イベント2件</strong>がセンターのイベント一覧に掲載されています（八戸圏域の婚活パーティーを含む）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。費用を抑えたい方は県のシステム、担当者の継続的なサポートを重視する方は民間、という比べ方が目安になります。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">あおもり出会いサポートセンター「AI（あい）であう」の料金と登録条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>青森県と県内37市町村の共同運営。運営はNPO法人プラットフォームあおもり（県の委託）。AI（あい）であうは令和4年10月に開始</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録料</td><td className={td}>青森県内（弘前市を除く）10,000円、弘前市・県外12,000円（いずれも税込・令和6年5月1日〜）。登録月の2年後の同月末まで有効。児童扶養手当を受給しているひとり親家庭の父母は無料</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>その他の費用</td><td className={td}>月額費用・お見合い料・成婚料はなし。イベント情報のメールマガジン会員は登録料・年会費とも無料（イベントの参加費は自己負担）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録条件</td><td className={td}>18歳以上（本人確認面談時）の独身の方（18歳到達後最初の年度末までの方を除く）、スマートフォンとメールアドレスを持っている方、青森県内に居住している方（県外の方は結婚後に県内居住を考えている方）、過去に会員登録を抹消されたことのない方。代理人による登録はできない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>本人確認書類（運転免許証など）、独身証明書（戸籍抄本でも代用可）、収入証明書。プロフィール写真は任意で、面談時の撮影も可能</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>拠点・営業時間</td><td className={td}>青森市古川1-20-11 メゾンビル2階。火・水・金11:00〜19:00、土・日・祝11:00〜17:00（月曜・木曜定休）。電話017-721-1250</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録者数・成婚</td><td className={td}>令和8年11月1日現在、利用登録者806人（男性537人・女性269人）。成婚退会159人（利用登録者同士61組122人、外部成婚37人）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              登録者は男性が女性の約2倍です。センターの「よくある質問」では、20代〜50代が登録しており、特に20代後半〜30代が多いと案内されています。なお、センターは2026年10月23日14時〜24日11時にセキュリティ強化のため会員用マイページを停止し、10月28日のお知らせで、攻撃は確認されたもののすべて遮断され、侵害を示す痕跡は確認されなかったと公表しています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_URL} {...ext}>青森県「あおもりマッチングシステム『AI（あい）であう』」（2026年5月15日更新）</a>・<a href={TOP_URL} {...ext}>あおもり出会いサポートセンター 公式トップページ</a>・<a href={AIDEAU_URL} {...ext}>「AI（あい）であう」ご利用案内</a>・<a href={ABOUT_URL} {...ext}>「事業概要」</a>・<a href={NOTICE_URL} {...ext}>お知らせ「システムメンテナンスに伴う侵害調査結果のお知らせ」（2026年10月28日）</a>（いずれも2026年11月23日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">登録から成婚退会までの流れと利用のルール</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>センターのホームページから仮入会（Web申込みのみ。電話・来所での申込みは不可）</li>
              <li>本人確認の面談と本登録（オンライン可・約1時間半〜2時間）。身分証の確認、システムの使い方の説明、登録作業を行う</li>
              <li>利用登録料を振り込む（八戸市の助成を使う場合は、振込前に市への申請が必要）</li>
              <li>AIからの紹介やリクエストでお相手を探し、マッチングが成立したら日程を調整してお見合い（カフェなどで約1時間程度が多い）</li>
              <li>双方が希望すればおともだち交際（連絡先が分かり、複数の方と同時進行も可）、真剣交際を経て、結婚の意思が固まったら成婚退会</li>
            </ol>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>ルール</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>AIからの紹介</td><td className={td}>月に最大4名。条件などにより4名に満たない場合がある。EQアセスメント（価値観診断）を活用</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>リクエスト</td><td className={td}>送信は月3件まで、受信は制限なし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>真剣交際に入った後</td><td className={td}>AI紹介などの出会いの機会の提供が停止される</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>退会・休会</td><td className={td}>いつでも退会でき、追加費用はかからない。休会も可能</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              センターの案内では、自己PR文の作成サポートやお見合いの助言など個別のサポートも行い、コーディネーターが必要に応じて交際をサポートするとされています。ただし、お相手探しは会員ご自身がシステムで進める仕組みです。担当者から継続的に提案や助言を受けたい方は、民間の結婚相談所のサポート内容とあわせて比べることをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={AIDEAU_URL} {...ext}>あおもり出会いサポートセンター「AI（あい）であう」ご利用案内</a>・<a href={PREF_URL} {...ext}>青森県「あおもりマッチングシステム『AI（あい）であう』」</a>（いずれも2026年11月23日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">八戸市の登録料助成（2分の1・上限5,000円）の条件と申請の順番</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象者</td><td className={td}>令和8年4月1日以降にAI（あい）であうへ新規に本登録をする方で、八戸市に住民票があり、市税等の滞納がなく、暴力団に関係していない方（すべてを満たすこと）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>助成額</td><td className={td}>利用登録料（他の割引を受けている場合は割引後の額）の2分の1。上限5,000円・1人1回限り。市がセンターに直接支払う方式</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申請</td><td className={td}>登録料の支払前に、助成対象者確認申請書（第1号様式）と本人確認書類の写しを八戸市若者活躍応援課へ窓口または郵送で提出</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>期限</td><td className={td}>申請は令和9年2月末日まで。交付された「助成対象者確認証」は令和9年3月15日までにセンターへ提示し、助成適用後の登録料を支払う</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>注意点</td><td className={td}>登録料を支払った後に本登録を完了しない場合は、助成相当額を返還する</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              センターの補助一覧では、八戸市は「登録料の振込前に申請が必要な自治体」に分類されています。確認証は面談時に提出するか、間に合わない場合は後日の提出も可能とされています。市の令和8年度実施計画書によると、この助成を受けた方は令和7年度に37人で、令和8年度は60人を見込んでいます。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_JOSEI_URL} {...ext}>八戸市「あおもり出会いサポートセンター あおもりマッチングシステム『AI（あい）であう』会員募集」（2026年4月24日更新）</a>・<a href={HOJO_URL} {...ext}>あおもり出会いサポートセンター「市町村による登録料の補助について」</a>・<a href={CITY_JOSEI_PLAN_URL} {...ext}>八戸市「令和8年度 あおもりマッチングシステム利用登録料助成事業 実施計画書」（PDF）</a>（いずれも2026年11月23日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">八戸市内で受付中・開催予定の婚活イベント（2件・2026年11月23日時点）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>あおもり出会いサポートセンターのイベント一覧（三八地域）に掲載されている、八戸市内で開かれる婚活イベントです。このほか、一覧には交流目的（恋愛目的の参加は不可）のイベントも掲載されていますが、ここでは除いています。いずれも各団体が主催しており、申込みは主催団体へ直接行います（センターでは受け付けていません）。</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日時</th><th className={th}>名称・主催</th><th className={th}>募集条件・参加費</th></tr></thead>
                <tbody>
                  {upcomingEvents.map((e) => (
                    <tr key={e.url} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{e.date}</td>
                      <td className={td}><a href={e.url} {...ext}>{e.name}</a><br />主催：{e.org}</td>
                      <td className={td}>{e.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              八戸市は、八戸圏域の8市町村（八戸市・三戸町・五戸町・田子町・南部町・階上町・新郷村・おいらせ町）と連携して婚活イベントを開いています。市が公表している令和8年度の実施計画書では、年3回・定員計160人（男女各20人×1回、男女各30人×2回）、対象はおおむね20〜49歳、参加費は男性4,000円・女性2,000円と定められています。令和7年度の実績は参加者150人・カップル成立20組で、令和8年度は参加者160人・25組を目標としています。12月19日の「恋するほろ酔いNight」は、主催が八戸圏域連携中枢都市圏縁結び支援事業協議会で、定員・参加費とも計画書の内容と同じです。
            </p>
            <p>
              市町村主催の「AI（あい）であう」出張登録会は、2026年11月23日時点で平川市（11月29日）、十和田市（12月5日）、おいらせ町（12月20日）の3件が掲載されており、八戸市内での開催は掲載されていません。出張登録会の申込みは各主催の市町村へ行います。住民以外が参加できるかは、当サイトでは確認できませんでした。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={EVENTS_URL} {...ext}>あおもり出会いサポートセンター イベント一覧（三八地域）</a>・各イベントページ（上表のリンク先）・<a href={SHUTCHOU_URL} {...ext}>「出張登録会」</a>・<a href={CITY_KOUFUKIN_URL} {...ext}>八戸市「令和8年度地域少子化対策重点推進交付金活用事業について」（2026年6月15日更新）</a>・<a href={CITY_EVENT_PLAN_URL} {...ext}>同「八戸圏域婚活イベント事業 実施計画書」（PDF）</a>（いずれも2026年11月23日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">八戸市の担当窓口とその他の結婚支援</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              八戸市の結婚支援は、総合政策部 若者活躍応援課（市庁本館4階・電話0178-43-2319）が担当しています。市のページでは、令和5年度に八戸市の方がAI（あい）であうで成婚に至ったことも紹介されています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>取組</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>縁結び志隊（えんむすびしたい）</td><td className={td}>町内会で独身の方にセンターの婚活イベント情報を届け、「さりげない世話焼き」で後押しする無報酬のボランティア。特定の相手を紹介する仲人ではない。市内15町内会が参加</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>あおもり結婚応援パスポート</td><td className={td}>青森県の制度（令和6年1月4日開始）。新婚夫婦または結婚を予定している方が協賛店で提示すると、割引やポイント加算などのサービスを受けられる。利用は無料</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>結婚新生活支援（家賃・引越費用など）</td><td className={td}>青森県の実施市町村一覧（2026年6月18日更新）に八戸市の掲載はなし。当サイトでは2026年11月23日時点で八戸市の同事業を確認できませんでした</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              青森県の一覧では、八戸市の地域少子化対策重点推進交付金を使う事業として、八戸圏域婚活イベント事業、登録料助成事業、センター共同運営事業の3つが掲載されています。結婚新生活支援事業は、近隣ではおいらせ町・三戸町・階上町などが実施市町村として掲載されています（令和8年1月1日〜令和9年3月31日に入籍、夫婦ともに婚姻日に39歳以下、夫婦の所得の合計が500万円未満などの要件。補助額は市町村により異なる）。この一覧は交付金を使う事業に限られるため、市の制度のすべてを示すものではありません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_ENMUSUBI_URL} {...ext}>八戸市「地域のさりげない世話焼きさん『縁結び志隊』について」（2026年5月20日更新）</a>・<a href={CITY_PASSPORT_URL} {...ext}>同「あおもり結婚応援パスポート」（2025年1月6日更新）</a>・<a href={CITY_JOSEI_URL} {...ext}>同「AI（あい）であう」会員募集ページ</a>・<a href={PREF_KOUFUKIN_URL} {...ext}>青森県「地域少子化対策重点推進交付金を活用した取組について」（2026年6月18日更新）</a>（いずれも2026年11月23日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">東北各県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>登録の有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>青森県「AI（あい）であう」（八戸市の助成を利用）</td><td className={td}>自己負担5,000円（登録料10,000円の2分の1を市が助成）</td><td className={td}>登録月の2年後の同月末まで</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/akita/" className="text-[#A08447] underline">秋田県「あきた結婚支援センター」</Link></td><td className={td}>登録料10,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/yamagata/" className="text-[#A08447] underline">山形県「Aiナビやまがた」</Link></td><td className={td}>5,000円/年</td><td className={td}>1年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/iwaki/" className="text-[#A08447] underline">福島県「はぴ福なび」</Link></td><td className={td}>登録料10,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用だけを比べると、八戸市の方がAI（あい）であうを助成つきで利用する場合の負担は5,000円で、民間の結婚相談所の1年総額（中央値399,200円）より大幅に低く抑えられます。一方で、リクエストの送信は月3件まで、センターの拠点は青森市の1か所で、登録者は男性が女性の約2倍という点があります。民間の結婚相談所は、費用がかかる代わりに、担当者がお相手を提案したり、交際中の相談に継続的に応じたりするところが多くあります。八戸市内から利用できるオンライン型の結婚相談所や、仙台市の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。秋田県・山形県・福島県のセンターの料金は、各センターの公式サイトで2026年11月17日〜21日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/asahi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">旭市の婚活（旭市出会いコンシェルジュ）</Link>
            <Link href="/knowledge/ueda/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">上田市の婚活</Link>
            <Link href="/knowledge/miai-renai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">お見合い結婚と恋愛結婚の割合</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/akita/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">あきた結婚支援センター（秋田県）</Link>
            <Link href="/knowledge/yamagata/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">山形県の婚活（Aiナビやまがた）</Link>
            <Link href="/knowledge/iwaki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">いわき市の婚活（はぴ福なび）</Link>
            <Link href="/area/sendai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">仙台の結婚相談所</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/knowledge/kochi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">高知県の婚活（こうち出会いサポートセンター）</Link>
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
