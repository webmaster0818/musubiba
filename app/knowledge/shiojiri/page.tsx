import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-26 確認）。
// ・NAGANO ai MATCHの登録・利用の相談支援（担当：地域づくり課 移住定住係）・利用できる方の4条件・利用の流れ（仮登録→来所→本登録→お見合い→交際→成婚報告）・必要書類・システム登録料（2年間で10,000円）・有効期間2年：塩尻市「ながの結婚マッチングシステム『NAGANO ai MATCH』で婚活を支援します」（2024年10月1日更新）
// ・相談日時（月〜金 8:30〜17:15・要予約・祝日年末年始除く）・所在地（塩尻市役所1階 地域づくり課）・電話0263-52-0280・登録料/お見合い料/成婚料なし・登録期間2年：チアフルながの「塩尻市」（長野県内の結婚相談所）
// ・市役所の開庁時間（午前9時〜午後4時30分、試行的に変更）・人口64,629人（2026年11月1日）：塩尻市「地域づくり課」ページのフッター
// ・友愛クラブ連合会結婚相談部会の休会（令和6年9月）・昭和43年設立から56年：広報塩尻 令和6年9月号テキスト版 30〜31ページ
// ・同部会の解散（令和7年3月31日）・令和6年10月からNAGANO ai MATCHの相談支援を開始：塩尻市「塩尻市友愛クラブ連合会 結婚相談会を解散します」（2025年3月1日更新）
// ・Shiojiri Wine & Meet（2026年10月18日・フェリスクレール・20〜35歳・男女各10名程度・会費 男性4,000円/女性1,000円・抽選・募集終了・主催 塩尻市（地域ブランド推進活動協議会）・塩尻商工会議所）：チアフルながの イベントページ（市のイベントページは2026-11-26時点で公開終了）
// ・結婚新生活支援（結婚・妊娠・共育ての相談機会提供・支援プログラム補助金）令和8年度の要件・対象経費・補助額・申請期間・申請窓口：塩尻市 同補助金ページ（2026年10月22日更新）
// ・婚姻件数348件・婚姻率5.33（令和6年）・合計特殊出生率1.34（令和5年度）・令和7年度の補助金申請世帯数（12月まで実績29世帯、年度見込39世帯）・事業開始年度（令和5年度）：同ページ掲載の「令和8年度地域少子化対策重点推進交付金実施計画書」PDF
// ・松本市の結婚支援（市外在住者も相談・登録可、登録料等なし）：当サイト /knowledge/matsumoto/（2026-11-20 松本市公式で確認）
// ・NAGANO ai MATCHの制度の要点・新規女性キャンペーン：当サイト /knowledge/nagano/（2026-11-18 確認）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const AIMATCH_URL = "https://www.city.shiojiri.lg.jp/soshiki/14/46675.html";
const DEPT_URL = "https://www.city.shiojiri.lg.jp/soshiki/14/index-2.html";
const CHEERFUL_CITY_URL = "https://www.cheerful-nagano.com/marriage/counseling/18753/";
const KOHO_202409_URL = "https://www.city.shiojiri.lg.jp/soshiki/8/45599.html";
const DISSOLVE_URL = "https://www.city.shiojiri.lg.jp/soshiki/65/45617.html";
const WINE_EVENT_URL = "https://www.cheerful-nagano.com/marriage/event/32019/";
const SUBSIDY_URL = "https://www.city.shiojiri.lg.jp/site/iju/62785.html";
const PLAN_PDF_URL = "https://www.city.shiojiri.lg.jp/uploaded/life/67630_173674_misc.pdf";

// 令和8年度地域少子化対策重点推進交付金実施計画書（塩尻市）
const marriages = 348; // 婚姻件数（令和6年）
const marriageRate = 5.33; // 婚姻率（令和6年）
const subsidyApplied = 29; // 令和7年度 申請世帯数（12月までの実績）
const subsidyForecast = 39; // 令和7年度 申請世帯数見込

export const metadata: Metadata = {
  title: "塩尻市で結婚相談所を探す方へ｜市役所のNAGANO ai MATCH窓口の登録条件・料金、新婚補助最大70万円と民間との費用比較",
  description:
    "塩尻市は令和6年10月から、市役所地域づくり課で長野県の結婚マッチングシステム「NAGANO ai MATCH」の登録相談を行っています。登録条件・必要書類・費用、旧結婚相談会の解散、市の婚活イベント、結婚新生活支援補助金、婚姻件数、民間相談所との費用差を公式情報で整理しています。",
  alternates: { canonical: "/knowledge/shiojiri/" },
};

const faqs = [
  {
    q: "塩尻市に市の結婚相談所はありますか？",
    a: "塩尻市では、市役所1階の地域づくり課が、長野県の結婚マッチングシステム「NAGANO ai MATCH」の登録・利用に関する相談と支援を行っています（令和6年10月開始）。チアフルながのの掲載では、市の窓口としての登録料・お見合い料・成婚料はなく、別途NAGANO ai MATCHのシステム登録料（2年間で10,000円）がかかります。なお、昭和43年から活動していた塩尻市友愛クラブ連合会の結婚相談会は令和6年9月に休会し、令和7年3月31日に解散しています。",
  },
  {
    q: "塩尻市の窓口を利用できるのはどのような方ですか？",
    a: "市の案内では、(1)市内在住か勤務している方、または移住予定・意思のある方、(2)結婚を希望する18歳以上の独身の方、(3)システムへの登録を希望する方、(4)インターネット環境とメール利用可能なスマートフォン等をお持ちの方、のすべてを満たす方としています。",
  },
  {
    q: "登録には何が必要ですか？",
    a: "NAGANO ai MATCHの登録申込ページから仮登録（市役所への来所予約）をしたうえで、戸籍謄（抄）本または独身証明書と、写真付きの証明書（運転免許証・パスポートなど）を市役所に持参します。相談所の専用端末でプロフィールを登録した後、長野県婚活支援センターから届く案内に沿って登録料を振り込むと本登録が完了します。",
  },
  {
    q: "塩尻市に住んでいて、松本市の結婚支援を利用することはできますか？",
    a: "松本市の結婚支援の案内では、配偶者のいない結婚の意思がある方であれば、松本市外にお住まいの方も相談・登録できるとしています（当サイトが2026年11月20日に松本市公式サイトで確認）。松本市の結婚支援は相談員がお相手を紹介する形で、相談・登録料・会費・成功報酬はかかりません。詳細は松本市のページをご確認ください。",
  },
  {
    q: "塩尻市の結婚新生活支援補助金はいくらですか？",
    a: "令和8年度は、夫婦ともに29歳以下の場合は上限60万円に市独自の上乗せ10万円を加えて最大70万円、夫婦ともに39歳以下の場合は上限30万円に上乗せ10万円を加えて最大40万円です。上乗せは住宅の取得費用またはリフォーム費用が上限を超えた場合に限られます。令和8年4月1日から令和9年3月31日までに婚姻届が受理された夫婦が対象で、所得や講座受講などの要件があります。",
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
  headline: "塩尻市の結婚支援：市役所のNAGANO ai MATCH窓口の登録条件・料金と、婚活イベント・結婚新生活支援補助金、民間の結婚相談所との比較",
  description: "塩尻市が行うNAGANO ai MATCHの登録相談の条件・必要書類・費用、旧結婚相談会の解散の経緯、市の婚活イベント、結婚新生活支援補助金、婚姻件数、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-26",
  dateModified: "2026-11-26",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/shiojiri/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "塩尻市の結婚支援（市の結婚相談）", item: "https://mu-su-bi-ba.com/knowledge/shiojiri/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeShiojiri() {
  const perMonth = (marriages / 12).toFixed(0);
  const appliedShare = ((subsidyApplied / subsidyForecast) * 100).toFixed(0);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "塩尻市の結婚支援（市の結婚相談）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          塩尻市の結婚相談所選び：市役所のNAGANO ai MATCH窓口の登録条件・料金と、新婚補助・民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月26日（登録条件・費用・相談日時・イベント・補助金・婚姻件数は同日に塩尻市公式サイト、長野県の結婚・子育て応援サイト「チアフルながの」で確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />塩尻市の公的な結婚相談は、市役所でのNAGANO ai MATCHの登録支援が中心です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>塩尻市は<strong>令和6年10月から</strong>、市役所1階の地域づくり課で、長野県の結婚マッチングシステム<Link href="/knowledge/nagano/" className="underline">NAGANO ai MATCH</Link>の登録・利用に関する相談と支援を行っています。相談は平日の予約制です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>市の窓口としての登録料・お見合い料・成婚料は<strong>ありません</strong>。別途、NAGANO ai MATCHの<strong>システム登録料（2年間で10,000円）</strong>がかかります。対象は18歳以上の独身で、市内在住・在勤または移住予定の方です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>昭和43年から続いた塩尻市友愛クラブ連合会の結婚相談会は、相談員の高齢化や登録者の減少を理由に<strong>令和6年9月に休会し、令和7年3月31日に解散</strong>しました。松本市のような相談員がお相手を紹介する市独自の結婚相談は、当サイトの確認では見つかりませんでした。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>結婚後は、新婚世帯の住居費・引越費用などに<strong>最大70万円</strong>の補助があります（令和8年度）。塩尻市の婚姻件数は<strong>令和6年に{marriages}件</strong>です。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">塩尻市のNAGANO ai MATCH窓口の登録条件と料金</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>実施</td><td className={td}>塩尻市（担当：市民地域部 地域づくり課 移住定住係）。NAGANO ai MATCHの登録・利用に関する相談・支援を行う「システム利用団体」</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>利用できる方</td><td className={td}>次のすべてを満たす方：(1)市内在住か勤務している方、または移住予定・意思のある方　(2)結婚を希望する18歳以上の独身の方　(3)システムへの登録を希望する方　(4)インターネット環境とメール利用可能なスマートフォン等をお持ちの方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>市の窓口の費用</td><td className={td}>登録料・お見合い料・成婚料なし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>NAGANO ai MATCHの費用</td><td className={td}>システム登録料 2年間で10,000円（期間限定のキャンペーンが実施されている場合あり）。振込先の案内は長野県婚活支援センターから届く</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録の有効期間</td><td className={td}>登録手続き完了から2年間。更新しない場合は失効</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>戸籍謄（抄）本または独身証明書、写真付きの証明書（運転免許証・パスポートなど）</td></tr>
                </tbody>
              </table>
            </div>
            <ol className="list-decimal pl-5 space-y-2">
              <li>NAGANO ai MATCHの登録申込ページから仮登録（塩尻市役所への来所予約）をする</li>
              <li>市からメールで来所に関する詳細の連絡を受ける</li>
              <li>必要書類を持参して来所し、相談所の専用端末でプロフィールや希望条件を登録する。長野県婚活支援センターの案内に沿って登録料を振り込むと本登録が完了し、マイページのIDとパスワードが発行される</li>
              <li>スマートフォン等でお相手を検索し、システム上でお見合いを申し込む。お相手が受けるとチャットで日時や場所を調整できる</li>
              <li>お見合いの段階では名前や連絡先の交換は行わない。お互いに交際の意思が確認できたら、相談所からお相手の名前と連絡先が伝えられる</li>
              <li>結婚が決まったら相談所に知らせる</li>
            </ol>
            <p>
              塩尻市の窓口は、相談員がお相手を探して紹介する形ではなく、会員ご自身がシステムで長野県全域からお相手を探す仕組みの入口となる窓口です。交際は、市の案内のとおりそれぞれの責任において進めることになります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={AIMATCH_URL} {...ext}>塩尻市「ながの結婚マッチングシステム『NAGANO ai MATCH』で婚活を支援します」</a>（2024年10月1日更新）・<a href={CHEERFUL_CITY_URL} {...ext}>チアフルながの「塩尻市」</a>（いずれも2026年11月26日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">相談窓口の場所・日時と連絡先</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>場所</td><td className={td}>塩尻市役所1階 地域づくり課（〒399-0786 塩尻市大門七番町3番3号）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>相談日時（チアフルながのの掲載）</td><td className={td}>月〜金曜日 8時30分〜17時15分、要予約（祝日・年末年始を除く）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>電話</td><td className={td}>0263-52-0280（市役所代表）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>そのほかの連絡方法</td><td className={td}>市公式サイトの問い合わせフォーム</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              なお、塩尻市公式サイトでは、市役所の開庁時間を午前9時から午後4時30分まで（試行的に受付時間を変更）と案内しています。チアフルながのに掲載された相談時間と異なるため、来所の際は予約時に時間をご確認ください。土曜日・日曜日の相談枠は、当サイトの確認では掲載されていませんでした。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CHEERFUL_CITY_URL} {...ext}>チアフルながの「塩尻市」</a>・<a href={DEPT_URL} {...ext}>塩尻市「地域づくり課」</a>（いずれも2026年11月26日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">塩尻市友愛クラブ連合会の結婚相談会の解散</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>時期</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>昭和43年</td><td className={td}>塩尻市友愛クラブ連合会の結婚相談部会が設立され、以後56年にわたり結婚に関する活動を行う</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>令和6年9月</td><td className={td}>相談員の高齢化や登録者の減少などの課題から、結婚相談会を休会</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>令和6年10月</td><td className={td}>塩尻市がNAGANO ai MATCHの登録・利用に関する相談・支援を開始</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>令和7年3月31日</td><td className={td}>結婚相談部会を解散</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              インターネット上で「塩尻市の結婚相談会」の案内を見かけた場合、令和6年9月以前の情報である可能性があります。現在、塩尻市の公的な結婚相談の窓口は、上記の地域づくり課です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={KOHO_202409_URL} {...ext}>広報塩尻 令和6年9月号テキスト版 30〜31ページ</a>（2024年8月28日更新）・<a href={DISSOLVE_URL} {...ext}>塩尻市「塩尻市友愛クラブ連合会 結婚相談会を解散します」</a>（2025年3月1日更新）（いずれも2026年11月26日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">塩尻市の出会いイベント</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日</th><th className={th}>イベント・会場</th><th className={th}>対象・料金・主催</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={WINE_EVENT_URL} {...ext}>2026年10月18日（日）</a>（開催済み）</td><td className={td}>Shiojiri Wine &amp; Meet 〜ワインがつなぐ、大人のご縁〜（フェリスクレール、塩尻市広丘吉田）</td><td className={td}>20〜35歳の独身の方、男女各10名程度（抽選）。会費は男性4,000円・女性1,000円。主催は塩尻市（地域ブランド推進活動協議会）・塩尻商工会議所。追加募集も予定人数に達して終了</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              このイベントは、塩尻ワイン（ノンアルコールドリンクも用意）と軽食を楽しみながら、会話のゲームやフリートークで交流する内容で、JR広丘駅西口から会場までの無料送迎バスも運行されました。問い合わせ先は市の観光プロモーション課（0263-52-0786）です。2026年11月26日時点で、塩尻市が主催する今後の婚活イベントの案内は、当サイトの確認では見つかりませんでした。長野県内の他市町村のイベントは、チアフルながののイベント情報に掲載されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={WINE_EVENT_URL} {...ext}>チアフルながの「Shiojiri Wine &amp; Meet 〜ワインがつなぐ、大人のご縁〜」</a>（2026年11月26日確認。市公式のイベントページは同日時点で公開期間が終了していました）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚後の支援：塩尻市の結婚新生活支援補助金（令和8年度）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>正式名称</td><td className={td}>結婚・妊娠・共育ての相談機会提供・支援プログラム補助金（国の地域少子化対策重点推進交付金を活用）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象の婚姻日</td><td className={td}>令和8年4月1日〜令和9年3月31日に婚姻届を提出・受理された夫婦</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>年齢・所得</td><td className={td}>夫婦ともに婚姻日の年齢が39歳以下。夫婦の直近の所得の合計が500万円未満（貸与型奨学金の年間返還額は控除して計算）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>そのほかの要件</td><td className={td}>申請日に夫婦の住民票が市内の新居にあること。過去にこの制度の補助を受けていないこと。市税の滞納がないこと。夫婦の双方が、市の指定する講座動画（ライフデザイン・プレコンセプションケア・共家事共育て）の聴講または医療機関等への妊娠・出産に関する相談を行い、報告書を提出すること など</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>補助対象経費</td><td className={td}>住宅の取得費用（建物のみ）、住宅の賃借費用（賃料・敷金・礼金・共益費・仲介手数料）、引越業者等への引越費用、リフォーム費用。令和8年4月1日〜令和9年3月31日に支払ったもの</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>補助額</td><td className={td}>夫婦ともに29歳以下：上限60万円＋上乗せ10万円で最大70万円。夫婦ともに39歳以下：上限30万円＋上乗せ10万円で最大40万円（上乗せは住宅取得・リフォーム費用が上限を超えた場合の市独自分）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申請</td><td className={td}>令和8年4月1日〜令和9年3月31日、市役所本庁舎1階 地域づくり課（7番窓口）に提出。予算に達した場合は期限前に締切。令和8年4〜12月に婚姻した方は令和9年1月までの申請に協力を求めている</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              市の実施計画書によると、この補助金の令和7年度の申請世帯数は、12月までの実績で{subsidyApplied}世帯、年度全体の見込みで{subsidyForecast}世帯です（12月時点で見込みの約{appliedShare}%、当サイト算出）。市は例年2月〜3月に窓口が混み合うと案内しているため、対象となる方は早めの申請をおすすめします。要件や必要書類は申請者の状況によって異なるため、事前に地域づくり課 移住定住係（0263-52-0280 内線1153）へご相談ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SUBSIDY_URL} {...ext}>塩尻市「結婚新生活を支援します（結婚・妊娠・共育ての相談機会提供・支援プログラム補助金）」</a>（2026年10月22日更新）・<a href={PLAN_PDF_URL} {...ext}>同ページ掲載「令和8年度地域少子化対策重点推進交付金実施計画書」</a>（いずれも2026年11月26日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">塩尻市の婚姻件数と出生率</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>指標</th><th className={th}>値</th><th className={th}>時点</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>婚姻件数</td><td className={td}>{marriages}件</td><td className={td}>令和6年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>婚姻率</td><td className={td}>{marriageRate}</td><td className={td}>令和6年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>合計特殊出生率</td><td className={td}>1.34</td><td className={td}>令和5年度</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>人口</td><td className={td}>64,629人</td><td className={td}>2026年11月1日</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              令和6年の婚姻件数{marriages}件は、1か月あたり約{perMonth}件に相当します（当サイト算出）。市は実施計画書のなかで「婚姻率と出生率の低下が続く」としたうえで、「結婚を望む人が出会う機会があり、市内へ新しい家族・世帯が生まれている」状況を目指すとしています。婚姻率の算出方法（人口千人あたりかどうか）は計画書に記載がないため、数値の比較には注意が必要です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PLAN_PDF_URL} {...ext}>塩尻市「令和8年度地域少子化対策重点推進交付金実施計画書」</a>・人口は<a href={DEPT_URL} {...ext}>塩尻市公式サイト</a>の掲載値（いずれも2026年11月26日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">松本市の結婚支援・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>お相手の探し方</th><th className={th}>料金</th><th className={th}>有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>塩尻市の窓口＋<Link href="/knowledge/nagano/" className="text-[#A08447] underline">NAGANO ai MATCH</Link></td><td className={td}>ご自身でシステムを検索し、お見合いを申し込む（長野県全域）</td><td className={td}>市の登録料等なし＋システム登録料10,000円（新規女性先着200名は令和9年3月31日まで1年間無料のキャンペーンあり）</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/matsumoto/" className="text-[#A08447] underline">松本市の結婚支援</Link>（市外在住者も利用可）</td><td className={td}>相談員がお相手を探して紹介する</td><td className={td}>相談・登録料・会費・成功報酬なし（イベント参加費は別途）</td><td className={td}>5年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>各社の方式による（担当者の紹介・会員検索など）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              塩尻市の窓口を通じたNAGANO ai MATCHは、費用を抑えて長野県全域のお相手を探せる一方、お相手探しやお見合いの申込みはご自身で進める仕組みです。相談員による紹介を希望する場合は、市外在住者も相談・登録できる隣の松本市の結婚支援も選択肢になります。NAGANO ai MATCHの申込みのルールや県全体の実績は、<Link href="/knowledge/nagano/" className="underline">長野県の結婚支援のページ</Link>で整理しています。
            </p>
            <p>
              民間の結婚相談所は費用がかかる代わりに、担当者による継続的なお相手の提案や交際中の相談に応じるところが多くあります。塩尻市内から利用できるオンライン型の結婚相談所も含めて、サポートの範囲と総額を比較したうえでお選びください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。NAGANO ai MATCHのキャンペーンは当サイト長野県ページ（2026年11月18日確認）、松本市の結婚支援は当サイト松本市ページ（2026年11月20日に松本市公式サイトで確認）の内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/kitakyushu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">北九州市の婚活支援</Link>
            <Link href="/knowledge/kurashiki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">倉敷市の婚活支援（くら婚）</Link>
            <Link href="/knowledge/tome/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">登米市の婚活支援（とめ婚）</Link>
            <Link href="/knowledge/setagaya/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">世田谷区の婚活支援（せた婚）</Link>
            <Link href="/knowledge/matsumoto/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">松本市の結婚支援</Link>
            <Link href="/knowledge/nagano/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">NAGANO ai MATCH（長野県）</Link>
            <Link href="/knowledge/ueda/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">上田市の婚活支援</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/compare/cheap/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">料金の安い結婚相談所</Link>
            <Link href="/knowledge/yamanashi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">山梨県の結婚支援</Link>
            <Link href="/knowledge/gifu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">おみサポ・ぎふ（岐阜県）</Link>
            <Link href="/knowledge/niigata/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ハートマッチにいがた（新潟県）</Link>
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
