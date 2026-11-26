import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-26 再確認）。
// ・市の婚活応援イベント4件（名称・開催日・会場・参加費・定員・対象年齢・申込期限・運営事務局・問い合わせ先）：北九州市「婚活応援イベント「コミュラボ」令和8年度開催について」（2026年8月3日更新）、「海辺のリゾートを巡る「謎解き婚活」」（2026年8月24日更新）、「クリスマス婚活舞踏会」（2026年11月17日更新）、「映え婚活」（2026年3月2日更新）
// ・市のイベント関連カテゴリに掲載された婚活イベントのページが上記4件であること：北九州市「イベント関連」一覧
// ・クリスマス婚活舞踏会の申込フォームが2026-11-26時点で受付中であること：同ページから案内されている Google フォーム（男性用・女性用）を開いて確認（いずれも回答画面が表示され、受付終了の表示なし）
// ・未来の家庭を築く男女の育成事業（事業費100万円・平成30年度開始・参加予定110人・令和6年度の交流会等参加者82人）、婚姻件数3,569件・婚姻率3.9（令和6年度）、合計特殊出生率1.37（令和6年度）：北九州市「地域少子化対策重点推進交付金事業について」（2026年6月15日更新）と実施計画書（PDF）
// ・JUNOALL を「平成28年度の北九州出会いサポートセンター開設時に市が支援を行った機関」と紹介：北九州市「北九州市若者応援情報」（2026年11月2日更新）
// ・「有料の結婚相談所と同等のシステムを無料で利用でき、個別相談なども行っています」：北九州市「市政だより」2025年7月1日号 インフォメーション
// ・北九州出会いサポートセンター（創立・所在地・電話・開所時間・定休日・運営形態・費用無料）：JUNOALL「センター一覧」
// ・JUNOALL の入会条件（20歳以上の独身・年齢上限なし）、必要書類、お見合い申込は月最大5名、AI紹介は月最大4名、お見合いは約45分で女性の所属センターで対面、お見合い料・成婚料なし：JUNOALL「入会申込・来所予約」（ご入会について・よくあるご質問）
// ・JUNOALL 全センター合計の活動会員数3,748人・成婚者数（累計）1,834人（2026年11月現在）：JUNOALL トップページ
// ・福岡県出会い・結婚応援事業の内容（出会い応援団体・あかい糸めーる・ふく♥こい公式LINE・個別相談無料・事務局の所在地と受付時間・委託先）、成婚組数722組（2005年〜2026年11月26日。11-25時点の720組から更新）、県内の1対1のお見合いセンター一覧：福岡県出会い・結婚応援事業 公式サイト（トップ・はじめての方へ・個別相談・市町村等における結婚支援の取組・あかい糸めーる登録）
// ・福岡ふらっとカフェ（対象・定員・参加費・北九州会場の日程）：福岡県「「福岡ふらっとカフェ」毎月開催！」（2026年9月30日更新）
// ・結婚新生活支援事業の実施市町村一覧（令和6年4月1日現在・北九州市の記載なし）：福岡県にこにこ家族づくりポータルサイト「結婚新生活を応援します！」
// ・新婚・子育て賃貸応援メニュー（2人以上の世帯で市外から転入・同一企業グループ内の転勤・転職は除く・最大20万円・先着順・募集期間と戸数）：北九州市「令和8年度 住むなら北九州 移住推進事業（新婚・子育て賃貸応援メニュー）」（2026年11月19日更新）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const CITY = "https://www.city.kitakyushu.lg.jp";
const COMULAB_URL = `${CITY}/ko-katei/11901090.html`;
const HAE_URL = `${CITY}/contents/11901090_00001.html`;
const NAZOTOKI_URL = `${CITY}/contents/11901090_00003.html`;
const XMAS_URL = `${CITY}/contents/11901090_00004.html`;
const EVENT_CAT_URL = `${CITY}/kanko/menu02_00018.html`;
const WAKAMONO_URL = `${CITY}/contents/119_00005.html`;
const DAYORI_URL = `${CITY}/page/dayori/250701/infostation/information.html`;
const KOUFUKIN_URL = `${CITY}/contents/11500158.html`;
const KOUFUKIN_PDF_URL = `${CITY}/files/001148959.pdf`;
const CHINTAI_URL = `${CITY}/contents/07400241_00003.html`;
const JUNOALL_FACILITY_URL = "https://junoall.org/facility/";
const JUNOALL_RESERVE_URL = "https://junoall.org/reserve";
const JUNOALL_TOP_URL = "https://junoall.org/";
const PREF_OUEN = "https://kekkon-ouen.pref.fukuoka.lg.jp/fukuoka";
const PREF_TOP_URL = `${PREF_OUEN}/`;
const PREF_SUPPORT_URL = `${PREF_OUEN}/support/`;
const PREF_SODAN_URL = `${PREF_OUEN}/contents/sodan.php`;
const PREF_AREA_URL = `${PREF_OUEN}/contents/area.php`;
const AKAIITO_URL = "https://kekkon-ouen.pref.fukuoka.lg.jp/user/";
const FLATCAFE_URL = "https://www.pref.fukuoka.lg.jp/contents/flatcafe.html";
const SHINSEIKATSU_LIST_URL =
  "https://kazoku.pref.fukuoka.lg.jp/marriage/information/detail/8ebca7b4-51ff-4f67-a308-2eb389f9764e";

// 北九州市の公式サイト「イベント関連」に掲載されている市の婚活応援イベント（2026年11月26日時点で4件）。年度は開催日で判定
const cityEvents = [
  {
    fy: "2025年度",
    date: "2026年2月23日（月・祝）",
    name: "映え婚活（スマホでいい写真を撮ろう！）",
    place: "プレミアホテル門司港（門司区）",
    target: "市内在住・在勤の30〜39歳の独身男女",
    fee: "5,000円",
    cap: "30名（男女15名ずつ・抽選）",
    status: "終了",
    href: HAE_URL,
  },
  {
    fy: "2026年度",
    date: "2026年8月22日（土）",
    name: "海辺のリゾートを巡る「謎解き婚活」",
    place: "ザ マティルタスイート（若松区）",
    target: "市内在住・在勤の24〜36歳の独身男女",
    fee: "2,000円",
    cap: "30名（男女15名ずつ・先着）",
    status: "終了",
    href: NAZOTOKI_URL,
  },
  {
    fy: "2026年度",
    date: "2026年11月7日（土）",
    name: "コミュラボ（セミナーと交流会）",
    place: "北九州市立玄海青年の家（若松区）。JR黒崎駅から無料送迎バス",
    target: "24〜36歳の独身男女（市内在住・通勤のほか、ゆかりのある方）",
    fee: "2,000円（保険代・飲食代）",
    cap: "40名（男女20名ずつ・抽選）",
    status: "開催済み（11月7日）",
    href: COMULAB_URL,
  },
  {
    fy: "2026年度",
    date: "2026年12月19日（土）",
    name: "クリスマス婚活舞踏会（社交ダンス体験と交流）",
    place: "ザ マティルタスイート（若松区）",
    target: "市内在住・在勤の24〜39歳の独身男女",
    fee: "3,000円（税込）",
    cap: "30名（男女15名ずつ・抽選）",
    status: "受付中（申込期限 12月7日）",
    href: XMAS_URL,
  },
];

export const metadata: Metadata = {
  title: "北九州市の婚活支援｜市の婚活イベント（2026年度3件・参加費2,000〜3,000円）と無料のJUNOALL",
  description:
    "北九州市の婚活支援を公式情報で整理しています。市主催の婚活イベント（2026年度3件・参加費2,000〜3,000円、12月19日分は12月7日締切）、市が開設を支援した北九州出会いサポートセンター（利用料無料）、福岡県のふらっとカフェと無料個別相談、民間の結婚相談所との費用の違いをまとめています。",
  alternates: { canonical: "/knowledge/kitakyushu/" },
};

const faqs = [
  {
    q: "北九州市に市営の結婚相談所はありますか？",
    a: "2026年11月26日時点で、北九州市の公式サイトでは、市が直接運営する1対1のお見合い事業（市営の結婚相談所）の案内を確認できませんでした。市は、平成28年度の開設時に市が支援したNPO法人「北九州出会いサポートセンター・JUNOALL」を若者応援情報のページで紹介しており、市政だより（2025年7月1日号）では「有料の結婚相談所と同等のシステムを無料で利用でき、個別相談なども行っています」と案内しています。このほか、市（こども若者成育課）が婚活応援イベントを年に数回開いています。",
  },
  {
    q: "北九州出会いサポートセンター（JUNOALL）の費用と入会条件を教えてください。",
    a: "JUNOALLのセンター一覧では、北九州出会いサポートセンターの費用は「無料」と掲載されており、入会金・お見合い料・成婚料はかかりません（婚活パーティーやツアーは参加費がかかる場合があります）。入会条件は20歳以上の独身の方で、年齢の上限はありません。入会時にはセンターでの面談があり、収入確認書類・独身証明書（または個人事項証明書）・写真付きの本人確認書類が必要です。所在地は小倉北区浅野2-14-2（16号館8階）、電話は093-967-3001、開所時間は10時〜19時（火曜・年末年始・GW等は休み）です。",
  },
  {
    q: "北九州市の婚活イベントには誰が参加できますか？",
    a: "回ごとに条件が異なります。2026年度の3件は、対象年齢が24〜36歳または24〜39歳で、市内在住・在勤の独身男女が対象です（11月7日に開催済みのコミュラボは、市にゆかりのある方も対象でした）。参加費は2,000円〜3,000円、定員は30〜40名です。2026年12月19日のクリスマス婚活舞踏会は申込期限が12月7日で、定員を超えた場合は抽選になります（2026年11月26日時点で男性用・女性用の申込フォームとも受付中です）。問い合わせ先は北九州市子ども家庭局こども若者成育課（093-582-2392）です。",
  },
  {
    q: "福岡県の結婚支援で、北九州市民が利用できるものはありますか？",
    a: "福岡県出会い・結婚応援事業の事務局では、出会い探し・交際・結婚に関する個別相談を無料で受け付けています（電話・メール・面談。面談は福岡市中央区の事務局のほか、必要に応じてオンラインや出張で対応）。出会いイベントの情報はメールマガジン「九州・山口地域あかい糸めーる」と公式LINE「ふく♥こい」で配信されています。また、県の「福岡ふらっとカフェ」が小倉北区のATOMica北九州で月1回程度開かれており、主に20代〜30代の独身の方が対象で、参加費は1,000円程度です。",
  },
  {
    q: "北九州市に結婚新生活支援（新婚世帯の住居費・引越費用の補助）はありますか？",
    a: "福岡県のポータルサイトに掲載されている結婚新生活支援事業の実施市町村一覧（令和6年4月1日現在）に、北九州市は含まれていません。北九州市の令和8年度の地域少子化対策重点推進交付金の事業計画にも、この事業は記載されていません。当サイトでは2026年11月26日時点で、市の公式サイトで同事業の案内を確認できませんでした。なお、市外から転入する新婚世帯（申請者が39歳以下で結婚後5年以内など）には、「住むなら北九州 移住推進事業」の新婚・子育て賃貸応援メニュー（最大20万円・家賃2か月相当）があります。",
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
  headline: "北九州市の婚活支援：市の婚活応援イベント、北九州出会いサポートセンター（JUNOALL）、福岡県の出会い・結婚応援事業と民間の結婚相談所との比較",
  description:
    "北九州市が主催する婚活応援イベント、市が開設を支援した北九州出会いサポートセンター（JUNOALL）、福岡県の個別相談・ふらっとカフェ、結婚後の住まいの補助、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-26",
  dateModified: "2026-11-26",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/kitakyushu/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "北九州市の婚活（市のイベント・JUNOALL）", item: "https://mu-su-bi-ba.com/knowledge/kitakyushu/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeKitakyushu() {
  const fy2026 = cityEvents.filter((e) => e.fy === "2026年度").length;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "北九州市の婚活（市のイベント・JUNOALL）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          北九州市の婚活支援：市の婚活応援イベント、北九州出会いサポートセンター（JUNOALL）、福岡県の出会い・結婚応援事業と民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月26日（市の事業は同日に北九州市公式サイト、県の事業は福岡県と福岡県出会い・結婚応援事業の公式サイト、センターの情報はJUNOALL公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />北九州市の公的な婚活支援は、市のイベントと無料のNPOセンターが中心です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>北九州市の公式サイトでは、市が直接運営する1対1のお見合い事業（市営の結婚相談所）の案内を確認できませんでした（2026年11月26日時点）。市は、開設時に市が支援したNPO法人<strong>「北九州出会いサポートセンター・JUNOALL」</strong>を紹介しており、同センターの費用は<strong>無料</strong>と掲載されています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>市（こども若者成育課）は<strong>婚活応援イベント</strong>を開いており、2026年度は<strong>{fy2026}件</strong>（8月・11月・12月）、参加費は<strong>2,000円〜3,000円</strong>です。12月19日のクリスマス婚活舞踏会は<strong>12月7日まで申込受付中</strong>です（24〜39歳・抽選）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>福岡県の事業では、<strong>無料の個別相談</strong>、イベント情報の「あかい糸めーる」、小倉北区で月1回程度開かれる<strong>「福岡ふらっとカフェ」（参加費1,000円程度）</strong>を利用できます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>結婚新生活支援事業（新婚世帯の住居費補助）は、市の公式サイトで案内を確認できませんでした。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">北九州市から利用できる公的な婚活支援の一覧</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              北九州市では、子ども家庭局こども若者成育課が婚活支援を担当しています。市の事業、市が紹介している団体、県の事業を、当サイトで次のとおり整理しました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>名称・運営</th><th className={th}>内容</th><th className={th}>費用</th><th className={th}>主な条件</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={JUNOALL_FACILITY_URL} {...ext}>北九州出会いサポートセンター</a><br />NPO法人（JUNOALL）</td><td className={td}>会員がシステムで検索してお見合いを申し込むほか、AIによる紹介もある。お見合いはセンターで対面</td><td className={td}>無料（入会金・お見合い料・成婚料なし）</td><td className={td}>20歳以上の独身の方（年齢上限なし）。収入確認書類・独身証明書などが必要</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={COMULAB_URL} {...ext}>婚活応援イベント</a><br />北九州市</td><td className={td}>セミナーと交流会を組み合わせた「コミュラボ」や、ホテル・式場での交流イベント</td><td className={td}>2026年度は1回2,000円〜3,000円</td><td className={td}>回ごとに異なる（2026年度は24〜36歳または24〜39歳、市内在住・在勤など）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={PREF_TOP_URL} {...ext}>出会い・結婚応援事業</a><br />福岡県</td><td className={td}>出会い応援団体のイベント情報の配信（あかい糸めーる・公式LINE）、出会い・交際・結婚の個別相談</td><td className={td}>個別相談・メール登録は無料（イベントは各主催者の参加費）</td><td className={td}>イベントごとの条件による</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={FLATCAFE_URL} {...ext}>福岡ふらっとカフェ</a><br />福岡県</td><td className={td}>趣味などのテーマで交流する集まり。北九州会場はATOMica北九州（小倉北区）</td><td className={td}>1,000円程度</td><td className={td}>主に20代〜30代程度の独身の方。各会場20名程度</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              福岡県出会い・結婚応援事業の公式サイトでは、「市町村等における結婚支援の取組」として県内の1対1のお見合いセンターを一覧にしており、北九州市の欄には北九州出会いサポートセンターJUNOALLが掲載されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={WAKAMONO_URL} {...ext}>北九州市「北九州市若者応援情報」（2026年11月2日更新）</a>・<a href={EVENT_CAT_URL} {...ext}>「イベント関連」</a>・<a href={JUNOALL_FACILITY_URL} {...ext}>JUNOALL「センター一覧」</a>・<a href={JUNOALL_RESERVE_URL} {...ext}>「入会申込・来所予約」</a>・<a href={PREF_SUPPORT_URL} {...ext}>福岡県出会い・結婚応援事業「どんなサポートをしてくれるの？」</a>・<a href={PREF_AREA_URL} {...ext}>「市町村等における結婚支援の取組」</a>・<a href={FLATCAFE_URL} {...ext}>福岡県「「福岡ふらっとカフェ」毎月開催！」（2026年9月30日更新）</a>（いずれも2026年11月26日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">北九州市の婚活応援イベント（2025〜2026年度・当サイト集計）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              北九州市の公式サイト「イベント関連」に掲載されている市の婚活応援イベントのページは、2026年11月26日時点で次の4件です。当サイトで1件ずつ確認して整理しました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日</th><th className={th}>名称・会場</th><th className={th}>対象</th><th className={th}>参加費・定員</th><th className={th}>状況</th></tr></thead>
                <tbody>
                  {cityEvents.map((e) => (
                    <tr key={e.date} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{e.date}</td>
                      <td className={td}><a href={e.href} {...ext}>{e.name}</a><br />{e.place}</td>
                      <td className={td}>{e.target}</td>
                      <td className={td}>{e.fee}<br />{e.cap}</td>
                      <td className={td}>{e.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              2026年度に開催または募集している市の婚活応援イベントは{fy2026}件で、参加費は2,000円〜3,000円、定員は30〜40名です。12月19日のクリスマス婚活舞踏会は、申込期限が12月7日で、定員を超えた場合は抽選となります。当サイトでは2026年11月26日に、市のページから案内されている申込フォーム（男性用・女性用）がいずれも受付中であることを確認しました。運営事務局は、コミュラボが福岡県出会い・結婚応援事務局、そのほかの3件が北九州ブライダル協会です。
            </p>
            <p>
              市の令和8年度の実施計画書では、このうちセミナーと交流会を行う「未来の家庭を築く男女の育成事業」（平成30年度開始）の事業費を100万円、参加予定人数を110人としています。令和6年度の交流会等の参加者は82人でした。令和7年度は対象年齢を25〜36歳（1回目）と34〜45歳（2回目）に分けて開催し、2回目は男性の申込みが伸び悩んだと記載されています。同計画書には、北九州市の婚姻件数が3,569件、婚姻率が3.9（いずれも令和6年度）と記載されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={COMULAB_URL} {...ext}>北九州市「婚活応援イベント「コミュラボ」令和8年度開催について」（2026年8月3日更新）</a>・<a href={NAZOTOKI_URL} {...ext}>「海辺のリゾートを巡る「謎解き婚活」」（2026年8月24日更新）</a>・<a href={XMAS_URL} {...ext}>「クリスマス婚活舞踏会」（2026年11月17日更新）</a>・<a href={HAE_URL} {...ext}>「映え婚活」（2026年3月2日更新）</a>・<a href={KOUFUKIN_URL} {...ext}>「地域少子化対策重点推進交付金事業について」（2026年6月15日更新）</a>・<a href={KOUFUKIN_PDF_URL} {...ext}>実施計画書「未来の家庭を築く男女の育成事業」（PDF）</a>（いずれも2026年11月26日確認）。件数は当サイトが市の掲載ページから数えたもので、民間団体が市内で開くイベントは含みません。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">北九州出会いサポートセンター（JUNOALL）の概要</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              北九州出会いサポートセンターは、平成28年（2016年）4月に創立した特定非営利活動法人（NPO）のセンターです。北九州市は、平成28年度の開設時に市が支援を行った機関として紹介しており、市政だより（2025年7月1日号）では「有料の結婚相談所と同等のシステムを無料で利用でき、個別相談なども行っています」と案内しています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>所在地・連絡先</td><td className={td}>北九州市小倉北区浅野2-14-2 16号館8階。電話093-967-3001</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>開所時間</td><td className={td}>10時〜19時（火曜・年末年始・GW等は休み）。来所は予約制</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>費用</td><td className={td}>無料（センター一覧の掲載）。入会金・お見合い料・成婚料・退会時の解約料なし。婚活パーティーやツアーは参加費がかかる場合あり</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会条件</td><td className={td}>20歳以上の独身の方（年齢の上限なし）。離婚歴があっても再婚の意思があれば入会可</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>収入確認書類（源泉徴収票など）、独身証明書または個人事項証明書、写真付きの本人確認書類。入会時にセンターで面談</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>活動の方法</td><td className={td}>全国のJUNOALL会員から検索してお見合いを申し込む（月最大5名）。AI紹介は月最大4名。お見合いは約45分で、女性の所属センターで対面</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              JUNOALLが公表している全センター合計の実績は、活動会員数3,748人、成婚者数（累計）1,834人です（2026年11月現在）。北九州センター単独の会員数は、当サイトでは公式サイトで確認できませんでした。お見合いの申込みや日程調整は会員自身がシステムで行う仕組みで、スマートフォンなどの基本操作ができない方は利用できないとされています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={JUNOALL_FACILITY_URL} {...ext}>JUNOALL「センター一覧」</a>・<a href={JUNOALL_RESERVE_URL} {...ext}>「入会申込・来所予約」（ご入会について・よくあるご質問）</a>・<a href={JUNOALL_TOP_URL} {...ext}>トップページ</a>・<a href={WAKAMONO_URL} {...ext}>北九州市「北九州市若者応援情報」</a>・<a href={DAYORI_URL} {...ext}>「市政だより」2025年7月1日号 インフォメーション</a>（いずれも2026年11月26日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">福岡県の出会い・結婚応援事業と福岡ふらっとカフェ</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              福岡県は、県に登録した「出会い応援団体」（企業・団体）が開く出会いイベントの情報を、メールマガジン「九州・山口地域あかい糸めーる」と公式LINE「ふく♥こい」で配信しています。あかい糸めーるでは、九州各県・山口県・沖縄県のうち配信を希望する県を選べます。事業は株式会社アソウ・ヒューマニーセンターが県から委託を受けて実施しており、公式サイトに掲載されている当事業での成婚組数は722組（2005年〜2026年11月26日）です。
            </p>
            <p>
              県の事務局（福岡市中央区天神2-8-41 福岡朝日会館、電話092-733-8202、受付10時〜18時・火曜定休）では、出会い探し・交際・結婚に関する個別相談を無料で受け付けています。相談は電話・メール・面談で、面談は事務局で行い、必要に応じてオンラインや出張でも対応しています。2026年11月26日時点で公式サイトのトップページに掲載されていた出会いイベントは、福岡市や県南部の会場が中心で、北九州市内の会場は見当たりませんでした。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>福岡ふらっとカフェ 北九州会場の開催日（2026年）</th><th className={th}>時間</th><th className={th}>状況</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>8月19日（水）・9月11日（金）・10月15日（木）・11月12日（木）</td><td className={td}>19時〜21時</td><td className={td}>終了</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>12月3日（木）</td><td className={td}>19時〜21時</td><td className={td}>予定</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>12月23日（水）</td><td className={td}>19時〜21時</td><td className={td}>予定</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              福岡ふらっとカフェは、仕事帰りなどに立ち寄れる交流の場として、県内4地域（福岡・北九州・筑後・筑豊）で月1回程度開かれています。北九州会場はATOMica北九州（小倉北区京町3-1-1 セントシティ7階）で、県のページに掲載されている2026年8月〜12月の北九州会場の開催は6回です（当サイト集計）。対象は主に20代〜30代程度の独身の方、定員は各会場20名程度、参加費は1,000円程度です。開催ごとに条件が異なる場合があるため、申込み前にカフェの公式サイトでご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_TOP_URL} {...ext}>福岡県出会い・結婚応援事業 公式サイト</a>・<a href={PREF_SUPPORT_URL} {...ext}>「どんなサポートをしてくれるの？」</a>・<a href={PREF_SODAN_URL} {...ext}>「個別相談」</a>・<a href={AKAIITO_URL} {...ext}>「あかい糸めーる登録」</a>・<a href={FLATCAFE_URL} {...ext}>福岡県「「福岡ふらっとカフェ」毎月開催！」（2026年9月30日更新）</a>（いずれも2026年11月26日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚後の住まいの支援</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              国の交付金を使って新婚世帯の住居費や引越費用を補助する「結婚新生活支援事業」について、福岡県のポータルサイトに掲載されている実施市町村一覧（令和6年4月1日現在）に北九州市は含まれていません。北九州市の令和8年度の地域少子化対策重点推進交付金の事業計画に記載されているのは「子育てマップ北九州の運用、更新」と「未来の家庭を築く男女の育成事業」の2件です。当サイトでは2026年11月26日時点で、市の公式サイトで結婚新生活支援事業の案内を確認できませんでした。
            </p>
            <p>
              市外から北九州市へ転入する新婚世帯には、「住むなら北九州 移住推進事業」の新婚・子育て賃貸応援メニューがあります。対象は、市外から転入する2人以上の世帯のうち、申請者が39歳以下で結婚後5年以内または3か月以内に結婚予定の世帯などで（同一企業グループ内の転勤・転職による転入は除きます）、街なかの区域にある中古の民間賃貸住宅・特定優良賃貸住宅・空き家バンク登録住宅に転入する場合に、最大20万円（家賃2か月相当分）が補助されます。2026年度の募集は第1回（4月1日〜9月30日）・第2回（10月1日〜2027年3月31日）で、それぞれ新婚世帯20戸です。申込みは先着順で、募集戸数を上回る申込みがあった場合は募集期間中に締め切られます。認定申請は賃貸借契約の前に行う必要があり、「北九州市すまいるクラブ」に登録してから3か月以上経過していることが条件です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SHINSEIKATSU_LIST_URL} {...ext}>福岡県にこにこ家族づくりポータルサイト「結婚新生活を応援します！」</a>・<a href={KOUFUKIN_URL} {...ext}>北九州市「地域少子化対策重点推進交付金事業について」（2026年6月15日更新）</a>・<a href={CHINTAI_URL} {...ext}>「令和8年度 住むなら北九州 移住推進事業（新婚・子育て賃貸応援メニュー）」（2026年11月19日更新）</a>（いずれも2026年11月26日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な支援と民間の結婚相談所の費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>お相手の探し方</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>北九州出会いサポートセンター（JUNOALL）</td><td className={td}>無料（入会金・お見合い料・成婚料なし）</td><td className={td}>会員自身の検索・AI紹介</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>北九州市の婚活応援イベント</td><td className={td}>1回2,000円〜3,000円（2026年度）</td><td className={td}>イベントでのカップリング</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>福岡ふらっとカフェ（北九州会場）</td><td className={td}>1回1,000円程度</td><td className={td}>テーマに沿った交流</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              2026年度の市の婚活応援イベント3件すべてに参加した場合の参加費は合計7,000円で（当サイト算出）、JUNOALLの利用料と合わせても民間の結婚相談所の1年総額の下限（125,400円）を大きく下回ります。一方で、JUNOALLは会員自身がシステムで検索して申し込む仕組みが中心で、市のイベントは年に数回・対象年齢が24〜39歳の範囲に限られています。40代以上の方や、担当者による継続的な紹介と交際中の助言を受けたい方には、民間の結婚相談所が選択肢になります。小倉駅周辺など北九州エリアの結婚相談所は<Link href="/area/fukuoka/" className="text-[#A08447] underline">福岡の結婚相談所一覧</Link>で確認できます。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。公的な支援の料金は、各公式サイトで2026年11月26日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/kurashiki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">倉敷市の婚活支援（くら婚）</Link>
            <Link href="/knowledge/tome/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">登米市の婚活支援（とめ婚）</Link>
            <Link href="/knowledge/setagaya/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">世田谷区の婚活支援（せた婚）</Link>
            <Link href="/knowledge/shiojiri/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">塩尻市の結婚相談（NAGANO ai MATCH窓口）</Link>
            <Link href="/area/fukuoka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">福岡の結婚相談所一覧（北九州・小倉を含む）</Link>
            <Link href="/knowledge/chikugo/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">八女・筑後結婚サポートセンター（筑後市）</Link>
            <Link href="/knowledge/nakatsu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">中津市の婚活支援（大分県）</Link>
            <Link href="/knowledge/saga/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">佐賀県の婚活支援</Link>
            <Link href="/knowledge/oita/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">大分県の婚活支援</Link>
            <Link href="/knowledge/kumamoto/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">熊本県の婚活支援</Link>
            <Link href="/knowledge/40s/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">42歳・40代の婚活の現状</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/knowledge/how-to-choose/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の選び方</Link>
            <Link href="/knowledge/flow/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の流れ</Link>
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
