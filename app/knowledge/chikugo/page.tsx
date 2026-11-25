import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-25 確認）。
// ・八女・筑後結婚サポートセンターの設立（平成23年度）・2市1町の共同事業・所在地（チクロス内）・登録条件・登録料3,000円/登録管理料10,000円（2年間有効）・お見合い料/成婚料なし・成婚200組以上・年間15組程度・年間100名程度の新規会員・電話：筑後市「結婚サポートセンター」（2026年6月9日更新）
// ・入会資格・必要書類・来所での入会（代理不可）・プロフィール閲覧はセンター内のみ：同センター公式サイト「入会のご案内」
// ・ネットでのお相手検索は行っていない・お見合いの流れ・成婚時のプレゼント（先着30組）・アクセス：同センター公式サイト「よくある質問」
// ・営業時間（月・木・金・土11:00〜18:00、日・祝10:00〜17:00、火・水休み）：同センター公式サイト トップページ
// ・婚活パーティーin八女（2026年12月13日・35〜49歳・男女各10名・1,000円・男性は締切）と次回（2027年1月17日・広川・20〜39歳）：同センター公式サイト「イベント案内」・トップページのお知らせ（2026年11月19日）
// ・センターの会員登録数235名（R7.12.31）・スタッフ2名・R6年度のお見合い244組/カップル成立34組/成婚15組・週5日開所・パーティー年8回・総事業費5,500,000円・新規登録79人（R6.12.1）・成婚12組（R7.12.31）：筑後市掲載「地域少子化対策重点推進交付金実施計画書（八女・筑後結婚サポートセンター運営事業）」（PDF）
// ・筑後市の婚姻件数180件（R4年）・生涯未婚率16%（H27）→18%（R2）：同実施計画書
// ・恋活筑後の運営（筑後市総務部企画調整課）と市内イベント（2025年7月6日〜2026年12月12日の6件）：恋活筑後 各イベントページ
// ・福岡県出会い・結婚応援事業（出会い応援団体・あかい糸めーる・ふく♥こい公式LINE・個別相談・成婚組数720組・事務局の連絡先・委託先）：福岡県出会い・結婚応援事業「ふく♥こい」トップ・「どんなサポートをしてくれるの？」・「個別相談」
// ・筑後市の福岡県事業の案内（県内4か所の相談窓口・電話092-722-6111の記載）：筑後市「福岡県『出会い・結婚応援事業』」（2026年10月23日更新）。県サイトの記載と異なるため本文で注記
// ・結婚新生活家賃支援事業の要件・給付額（月額上限1万円・最長36か月、敷金等上限5万円）・申請期間・申込先：筑後市「筑後市結婚新生活家賃支援事業」（2026年6月9日更新）
// ・同事業の最大41万円：筑後市「筑後市の定住促進事業メニュー」（2026年9月9日更新）
// ・同事業の申請見込（新規30世帯・継続45世帯）・R7年度12月までの実績28世帯・総事業費15,189,000円・R5年度の支給率97.8%：筑後市掲載「地域少子化対策重点推進交付金実施計画書（筑後市結婚新生活家賃支援事業）」（PDF）
// ・福岡県の「結婚新生活支援事業」実施市町村一覧に筑後市が掲載：ふく♥こい「市町村等における結婚支援の取組」
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値。センター登録料との倍率は当サイト算出

const CITY = "https://www.city.chikugo.lg.jp";
const CITY_KSC_URL = `${CITY}/kurashi/_6063/_3835.html`;
const CITY_PREF_URL = `${CITY}/kurashi/_6063/_11998.html`;
const CITY_YACHIN_URL = `${CITY}/iju_teiju/_11823/_11824.html`;
const CITY_TEIJU_URL = `${CITY}/iju_teiju/_11823.html`;
const KSC_PLAN_PDF_URL = `${CITY}/var/rev0/0057/5039/1266916938.pdf`;
const YACHIN_PLAN_PDF_URL = `${CITY}/var/rev0/0057/5028/1266916455.pdf`;
const KSC_TOP_URL = "https://www.yamechikugo-ksc.com/";
const KSC_NYUKAI_URL = "https://www.yamechikugo-ksc.com/nyukai/";
const KSC_FAQ_URL = "https://www.yamechikugo-ksc.com/faq/";
const KSC_EVENT_URL = "https://www.yamechikugo-ksc.com/event/";
const KOI = "https://www.koikatsu-chikugo.com/main/";
const KOI_EVENT_URL = (id: number) => `${KOI}${id}.html`;
const PREF_TOP_URL = "https://kekkon-ouen.pref.fukuoka.lg.jp/fukuoka/";
const PREF_SUPPORT_URL = "https://kekkon-ouen.pref.fukuoka.lg.jp/fukuoka/support/";
const PREF_SODAN_URL = "https://kekkon-ouen.pref.fukuoka.lg.jp/fukuoka/contents/sodan.php";
const PREF_AREA_URL = "https://kekkon-ouen.pref.fukuoka.lg.jp/fukuoka/contents/area.php";
const PREF_MAIL_URL = "https://kekkon-ouen.pref.fukuoka.lg.jp/user/";

// 恋活筑後に掲載された、筑後市内を会場とする婚活イベント（2025年度・2026年度）。当サイトで1件ずつ確認して整理
const cityEvents = [
  { fy: "2025年度", date: "2025年7月6日（日）", name: "フォトジェニック恋活", host: "筑後市企画調整課（問い合わせ先）", detail: "MEIJIKAN（筑後市山ノ井）。30〜39歳の独身男女、男女各5名。参加費500円", id: 2418 },
  { fy: "2025年度", date: "2025年9月28日（日）", name: "秋の出逢いイベント", host: "mdesignp（民間）", detail: "MEIJIKAN。35歳前後、最大20名。7日前まで男性3,000円・女性1,000円（当日は男性5,000円・女性2,000円）", id: 2452 },
  { fy: "2025年度", date: "2025年10月18日（土）", name: "本de恋活", host: "筑後市立図書館", detail: "筑後市立図書館。33〜45歳の本が好きな独身者、男女各7名。参加無料", id: 2454 },
  { fy: "2026年度", date: "2026年7月26日（日）", name: "縁結びパーティー", host: "筑後市", detail: "野歩ほん（筑後市富久）。26〜38歳の独身男女、男女各5名。男性5,000円・女性4,500円", id: 2471 },
  { fy: "2026年度", date: "2026年11月15日（日）", name: "Meet New Me", host: "筑後市・福岡県", detail: "チクロス（筑後市北部交流センター）。30〜39歳の独身男女、男女各5名。参加費500円。メイク・スキンケアのレッスンと1対1トーク", id: 2472 },
  { fy: "2026年度", date: "2026年12月12日（土）", name: "本de恋活Special", host: "筑後市立図書館", detail: "チクロス。26〜40歳の独身者、男女各8名。参加費500円（材料費）。申込みは2026年11月25日で締切", id: 2473 },
];

export const metadata: Metadata = {
  title: "筑後市の婚活｜八女・筑後結婚サポートセンターは登録料3,000円・2年有効で会員235名、市の婚活イベントと新婚家賃支援（最大41万円）を公式情報で整理",
  description:
    "筑後市・八女市・広川町が共同で運営する「八女・筑後結婚サポートセンター」（チクロス内）は、登録料が2年で3,000円で、お見合い料・成婚料はかかりません。恋活筑後の市内婚活イベント、福岡県の出会い・結婚応援事業、新婚家賃支援（最大41万円）、民間との費用差を整理しています。",
  alternates: { canonical: "/knowledge/chikugo/" },
};

const faqs = [
  {
    q: "筑後市に公的な結婚相談所はありますか？",
    a: "あります。筑後市・八女市・広川町の2市1町が平成23年度に設立した「八女・筑後結婚サポートセンター」が、筑後市北部交流センター「チクロス」（筑後市大字蔵数515番地1）の中にあります。会員登録制のお見合いの仲介、結婚相談、婚活パーティーなどを行っており、市の実施計画書では会員登録数は235名（2025年12月31日時点）です。",
  },
  {
    q: "八女・筑後結婚サポートセンターの費用はいくらですか？",
    a: "登録料は3,000円（2年間有効）で、お見合い料・成婚料はかかりません。ただし、八女市・筑後市・広川町に住んでおらず勤めてもいない男性で、結婚後にこの2市1町へ移住する意思のある方は、登録料とは別に登録管理料10,000円（2年間有効）が必要です。入会には、6か月以内の写真、住所を確認できるもの、独身証明書または戸籍抄本などが必要です。",
  },
  {
    q: "筑後市外に住んでいても登録できますか？",
    a: "女性は住所を問わず登録できます。男性は、八女市・筑後市・広川町に住んでいるか勤めている方、または結婚後にこの2市1町へ移住する意思のある方（現住所は問わない）が対象です。いずれも20歳以上で結婚を希望する独身の方が条件です。",
  },
  {
    q: "インターネットでお相手を探すことはできますか？",
    a: "できません。センターの案内では、個人情報を守るため、お相手の写真やプロフィールはセンター内でのみ閲覧でき、外部からは見られないとしています。入会もご本人の来所が必要で（代理での登録は不可）、電話かお問い合わせフォームで来所の予約をしてから手続きします。お相手はスタッフと相談しながら探す形です。",
  },
  {
    q: "筑後市の結婚新生活家賃支援はいくらもらえますか？",
    a: "市内の賃貸住宅に住む新婚世帯に、家賃の一部（家賃から住宅手当等と4万4千円を差し引いた額で月額1万円が上限、最長36か月）と、敷金・礼金・仲介手数料（上限5万円）が支給されます。市は最大41万円と案内しています。婚姻届の提出日から1年以内で、婚姻日に夫婦の年齢の合計が80歳未満、月額4万4千円以上の家賃を払っていることなどが条件です。認定申請は婚姻届の提出日から1年以内で、予算枠を超えた時点で受付を締め切ります。",
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
  headline: "筑後市の婚活：八女・筑後結婚サポートセンター、恋活筑後の市内婚活イベント、福岡県の出会い・結婚応援事業、結婚新生活家賃支援と民間の結婚相談所との比較",
  description:
    "八女・筑後結婚サポートセンターの料金・登録条件・実績、恋活筑後に掲載された筑後市内の婚活イベント、福岡県の出会い・結婚応援事業、結婚新生活家賃支援事業、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-25",
  dateModified: "2026-11-25",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/chikugo/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "筑後市の婚活（八女・筑後結婚サポートセンター）", item: "https://mu-su-bi-ba.com/knowledge/chikugo/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeChikugo() {
  const fy2025 = cityEvents.filter((e) => e.fy === "2025年度").length;
  const fy2026 = cityEvents.filter((e) => e.fy === "2026年度").length;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "筑後市の婚活（八女・筑後結婚サポートセンター）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          筑後市の婚活：八女・筑後結婚サポートセンター、恋活筑後の市内婚活イベント、福岡県の出会い・結婚応援事業、結婚新生活家賃支援と民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月25日（市の事業と実施計画書は同日に筑後市公式サイト、センターは八女・筑後結婚サポートセンター公式サイト、イベントは恋活筑後、県の事業は福岡県出会い・結婚応援事業「ふく♥こい」で確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />筑後市には、2市1町が共同で運営する公的な結婚相談所があります
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>筑後市・八女市・広川町は、筑後市北部交流センター「チクロス」内で<strong>「八女・筑後結婚サポートセンター」</strong>を運営しています。<strong>登録料は2年で3,000円</strong>で、お見合い料・成婚料はかかりません。会員登録数は<strong>235名</strong>（2025年12月31日時点）です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>女性は住所を問わず登録できます。男性は2市1町に住んでいるか勤めている方、または結婚後に移住する意思のある方（登録管理料10,000円が別途必要）が対象です。お相手のプロフィールはセンター内でのみ閲覧でき、インターネットでの検索はできません。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>市の婚活情報サイト「恋活筑後」に掲載された筑後市内の婚活イベントは、当サイトの集計で<strong>2025年度{fy2025}件、2026年度{fy2026}件</strong>です。参加費は無料〜5,000円でした。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>結婚後は、市内の賃貸住宅に住む新婚世帯向けの<strong>結婚新生活家賃支援（最大41万円）</strong>があります。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">筑後市から利用できる公的な結婚支援の一覧</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              筑後市では、総務部企画調整課が結婚サポートセンター事業・婚活イベント・結婚新生活家賃支援を担当しています。市の事業と、市が案内している県の事業を、当サイトで次のとおり整理しました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>名称・運営</th><th className={th}>内容</th><th className={th}>費用</th><th className={th}>主な条件</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={KSC_TOP_URL} {...ext}>八女・筑後結婚サポートセンター</a><br />筑後市・八女市・広川町</td><td className={td}>会員登録制のお見合いの仲介、結婚相談、婚活パーティー、各種講座</td><td className={td}>登録料3,000円（2年間有効）。お見合い料・成婚料なし。条件により登録管理料10,000円（2年間有効）</td><td className={td}>20歳以上の独身。女性は住所不問。男性は2市1町に在住・在勤、または結婚後に移住する意思がある方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={KOI} {...ext}>恋活筑後</a><br />筑後市（企画調整課）</td><td className={td}>市や市立図書館、地域の団体が開く婚活イベントの情報を掲載</td><td className={td}>イベントごと（筑後市内の回は無料〜5,000円）</td><td className={td}>イベントごとに年齢・定員を設定</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={PREF_TOP_URL} {...ext}>福岡県出会い・結婚応援事業（ふく♥こい）</a><br />福岡県</td><td className={td}>出会い応援団体のイベント情報をサイト・メールマガジン「あかい糸めーる」・公式LINEで配信。無料の個別相談</td><td className={td}>イベントの参加費は主催者に支払う</td><td className={td}>イベントごとに設定</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={CITY_YACHIN_URL} {...ext}>結婚新生活家賃支援事業</a><br />筑後市</td><td className={td}>市内の賃貸住宅に住む新婚世帯に、家賃の一部と敷金等を支給</td><td className={td}>最大41万円（月額上限1万円×最長36か月＋敷金等上限5万円）</td><td className={td}>婚姻届の提出日から1年以内、夫婦の年齢の合計が80歳未満、家賃月額4万4千円以上など</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_KSC_URL} {...ext}>筑後市「結婚サポートセンター」（2026年6月9日更新）</a>・<a href={CITY_PREF_URL} {...ext}>筑後市「福岡県『出会い・結婚応援事業』」（2026年10月23日更新）</a>・<a href={CITY_YACHIN_URL} {...ext}>筑後市「筑後市結婚新生活家賃支援事業」（2026年6月9日更新）</a>・<a href={CITY_TEIJU_URL} {...ext}>筑後市「筑後市の定住促進事業メニュー」（2026年9月9日更新）</a>・<a href={KOI} {...ext}>恋活筑後</a>・<a href={PREF_SUPPORT_URL} {...ext}>ふく♥こい「どんなサポートをしてくれるの？」</a>（いずれも2026年11月25日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">八女・筑後結婚サポートセンターの料金・登録条件・利用方法</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会資格</td><td className={td}>20歳以上で結婚を希望している独身の方。女性は住所を問わない。男性は「八女市・筑後市・広川町に住んでいるか勤めている」「結婚後に八女市・筑後市・広川町に移住する意思がある」のいずれかに当てはまる方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>費用</td><td className={td}>登録料3,000円（2年間有効・更新制）。結婚後に移住する意思がある男性（2市1町に住んでおらず勤めてもいない方）は、登録管理料10,000円（2年間有効）が別途必要。お見合い料・成婚料は不要</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要なもの</td><td className={td}>6か月以内の写真、現住所が確認できるもの（運転免許証等）、勤務先や収入を証明できるもの（男性で勤めている方のみ。源泉徴収票等）、独身証明書または戸籍抄本</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会方法</td><td className={td}>電話かお問い合わせフォームで来所を予約し、本人が来所（代理での登録は不可）。見学は11時〜16時に予約なしで可能</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お相手の探し方</td><td className={td}>お相手の写真・プロフィールはセンター内でのみ閲覧可能（インターネットでの検索は行っていない）。スタッフと相談しながら探し、お見合いの日程はスタッフが調整</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>営業時間・連絡先</td><td className={td}>月・木・金・土 11:00〜18:00、日・祝 10:00〜17:00（火曜・水曜、年末年始は休み）。電話 0942-53-0555</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>所在地・アクセス</td><td className={td}>筑後市大字蔵数515番地1 筑後市北部交流センター「チクロス」内。JR西牟田駅から徒歩13分、西鉄バス九州大谷短大前バス停から徒歩5分。駐車場あり</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              センターの登録料は2年で3,000円で、1年あたりに直すと1,500円です（当サイト算出）。一方で、お相手を自宅のスマートフォンから探す仕組みではなく、センターに来所してスタッフと一緒に探す方式です。九州の他県の県センターのように、自宅からシステムでお相手を検索する仕組みとは利用の仕方が異なります。お見合いはセンターで待ち合わせ、スタッフが紹介した後、2人で食事などに出かける流れです。成婚が決まった場合はセンターに連絡し、先着30組にはお祝いの品が贈られます。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_KSC_URL} {...ext}>筑後市「結婚サポートセンター」（2026年6月9日更新）</a>・<a href={KSC_NYUKAI_URL} {...ext}>八女・筑後結婚サポートセンター「入会のご案内」</a>・<a href={KSC_FAQ_URL} {...ext}>「よくある質問」</a>・<a href={KSC_TOP_URL} {...ext}>トップページ</a>（いずれも2026年11月25日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">センターの会員数・お見合い・成婚の実績（市の実施計画書から）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              筑後市は、センターの運営に国の「地域少子化対策重点推進交付金」を活用しており、その実施計画書を市の公式サイトで公開しています。実施期間を2026年4月1日〜2027年3月31日とする計画書に記載された数値は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>数値（時点）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会員登録数</td><td className={td}>235名（2025年12月31日時点）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お見合い組数</td><td className={td}>244組（令和6年度）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>イベント・パーティーでのカップル成立</td><td className={td}>34組（令和6年度）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>成婚数</td><td className={td}>15組（令和6年度）／12組（令和7年度、2025年12月31日時点）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>新規登録数</td><td className={td}>79人（2024年12月1日時点）。令和8年度の目標は100人</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営体制</td><td className={td}>スタッフ2名。木〜月曜の週5日開所。マッチングイベント（パーティー）は年8回を予定</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>総事業費</td><td className={td}>5,500,000円（令和8年度の計画）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              市の「結婚サポートセンター」のページでは、設立以来200組以上の成婚実績があり、年間15組程度の成婚と年間100名程度の新規会員があると案内しています。計画書では、会員の固定化・高齢化を課題として挙げています。同じ計画書には、筑後市の婚姻件数が180件（令和4年）、生涯未婚率が16%（平成27年）から18%（令和2年）に上がったことも記載されています。
            </p>
            <p>
              令和6年度の成婚15組を、2025年12月31日時点の会員登録数235名で割ると約6.4%です（当サイト算出。時点が異なる数値どうしの比で、成婚率の公式な値ではありません）。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={KSC_PLAN_PDF_URL} {...ext}>筑後市掲載「地域少子化対策重点推進交付金実施計画書（八女・筑後結婚サポートセンター運営事業）」（PDF）</a>・<a href={CITY_KSC_URL} {...ext}>筑後市「結婚サポートセンター」（2026年6月9日更新）</a>（いずれも2026年11月25日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">筑後市内で開かれた婚活イベント（2025〜2026年度・当サイト集計）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              筑後市は、婚活情報サイト「恋活筑後」で、市や市立図書館、地域の団体が開く婚活イベントを案内しています。掲載されたイベントのうち、筑後市内を会場とするものを当サイトで1件ずつ確認しました。2025年度は{fy2025}件、2026年度は11月25日時点で{fy2026}件です。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日</th><th className={th}>名称</th><th className={th}>主催</th><th className={th}>会場・対象・定員・参加費</th></tr></thead>
                <tbody>
                  {cityEvents.map((e) => (
                    <tr key={e.id} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{e.date}</td>
                      <td className={td}><a href={KOI_EVENT_URL(e.id)} {...ext}>{e.name}</a></td>
                      <td className={td}>{e.host}</td>
                      <td className={td}>{e.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              上表の{cityEvents.length}件の定員は男女各5〜8名（民間主催の1件は最大20名）と少人数で、参加費は無料〜5,000円です。筑後市立図書館は本をテーマにした婚活イベントを開いており、2026年12月12日の回の申込みは11月25日で締め切られています。
            </p>
            <p>
              八女・筑後結婚サポートセンターも、会員以外が参加できる婚活パーティーを開いています。2026年12月13日（日）の「婚活パーティーin八女」（八女市立花市民センター・35〜49歳・男女各10名・参加費1,000円）は、11月19日時点で男性の応募を締め切り、女性は応募を受け付けています。次回は2027年1月17日に広川町の「はなやぎの里」で20〜39歳を対象に開かれる予定で、12月から応募を受け付けると案内されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={KOI} {...ext}>恋活筑後</a>と上表の各ページ・<a href={KSC_EVENT_URL} {...ext}>八女・筑後結婚サポートセンター「イベント案内」</a>・<a href={KSC_TOP_URL} {...ext}>トップページのお知らせ（2026年11月19日）</a>（いずれも2026年11月25日確認）。件数は当サイトが掲載ページから数えたもので、恋活筑後に掲載されていない催しは含まれません。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">福岡県の出会い・結婚応援事業（あかい糸めーる・個別相談）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              福岡県は、結婚を希望する独身者を応援する企業・団体を「出会い応援団体」として登録し、各団体が開く出会いイベントの情報を、サイト「ふく♥こい」、メールマガジン「あかい糸めーる」、ふく♥こい公式LINEで配信しています。イベントへの申込みと参加費の支払いは主催する団体に直接行います。県は、この事業での成婚組数を720組（2005年〜2026年10月31日）と公表しています。
            </p>
            <p>
              県の事務局は、出会い探しやお付き合い、結婚に関する個別相談を無料で受け付けています。相談は電話・メールのほか面談にも対応し、面談は事務局（福岡市中央区）で行いますが、必要に応じてオンラインや出張でも行うとされています。事務局の連絡先は電話092-733-8202、受付時間は10時〜18時（火曜定休）で、運営は株式会社アソウ・ヒューマニーセンターが県から受託しています。
            </p>
            <p>
              なお、筑後市の案内ページには「県内4か所に相談窓口を設置」との記載と、事務局の電話番号として092-722-6111が載っています。県のサイトとは内容が異なり、当サイトでは2026年11月25日時点で、4か所の窓口の所在を県のサイトで確認できませんでした。問い合わせの際は、県のサイトに載っている連絡先をご確認ください。
            </p>
            <p>
              福岡県の事業は、会員登録制のお見合いではなく、イベント情報の発信と個別相談が中心です。1対1のお見合いを希望する筑後市周辺の方にとっては、八女・筑後結婚サポートセンターが公的な選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_TOP_URL} {...ext}>福岡県出会い・結婚応援事業「ふく♥こい」</a>・<a href={PREF_SUPPORT_URL} {...ext}>「どんなサポートをしてくれるの？」</a>・<a href={PREF_SODAN_URL} {...ext}>「個別相談」</a>・<a href={PREF_MAIL_URL} {...ext}>「あかい糸めーる」登録ページ</a>・<a href={CITY_PREF_URL} {...ext}>筑後市「福岡県『出会い・結婚応援事業』」（2026年10月23日更新）</a>（いずれも2026年11月25日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚新生活家賃支援事業（最大41万円）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>給付額</td><td className={td}>（1）家賃から住宅手当等と4万4千円を差し引いた額（月額1万円が上限・最長36か月、年度ごとに一括支給）＋（2）婚姻日の前後1年間に支払った敷金・礼金・仲介手数料（上限5万円、最初の年度に一括支給）。市の案内では最大41万円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>主な要件</td><td className={td}>婚姻届の提出日（宣誓日）から1年以内の夫婦（再婚を含む）／婚姻日に夫婦の年齢の合計が80歳未満／月額4万4千円以上（共益費・駐車場使用料等を除く）の家賃を払う賃貸借契約の名義人／市営・県営住宅や社宅などは対象外／賃貸住宅に3年を超えて住む意思がある／市税等の滞納がない、など</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>パートナーシップ</td><td className={td}>福岡県パートナーシップ宣誓書受領証等を取得したカップルも申請できる</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申請期間・方法</td><td className={td}>認定申請は婚姻届の提出日から1年以内（予算枠を超えた時点で締切）。支給申請は年度ごとに3月まで。申込先は総務部企画調整課（電話0942-53-4245）。郵送可</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              市の実施計画書（実施期間2026年4月1日〜2027年3月31日）では、令和8年度の申請見込みを新規30世帯・継続45世帯、総事業費を15,189,000円としています。令和7年度は12月までの実績が28世帯で、年度全体の見込みは30世帯でした。令和5年度は、支給見込世帯数に対する支給実績の割合が97.8%です。計画書では、国の基準の対象外となる世帯（夫婦のどちらかが40歳以上の場合など）は市の一般財源で補助するとしています。
            </p>
            <p>
              筑後市は、福岡県の「ふく♥こい」が掲載している、令和8年度に結婚新生活支援事業を実施する市町村の一覧にも含まれています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_YACHIN_URL} {...ext}>筑後市「筑後市結婚新生活家賃支援事業」（2026年6月9日更新）</a>・<a href={CITY_TEIJU_URL} {...ext}>「筑後市の定住促進事業メニュー」（2026年9月9日更新）</a>・<a href={YACHIN_PLAN_PDF_URL} {...ext}>筑後市掲載「地域少子化対策重点推進交付金実施計画書（筑後市結婚新生活家賃支援事業）」（PDF）</a>・<a href={PREF_AREA_URL} {...ext}>ふく♥こい「市町村等における結婚支援の取組」</a>（いずれも2026年11月25日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な支援と民間の結婚相談所の費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>お相手の探し方</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>八女・筑後結婚サポートセンター（女性、2市1町に在住・在勤の男性）</td><td className={td}>3,000円/2年（お見合い料・成婚料なし）</td><td className={td}>センターに来所し、スタッフと相談しながら探す</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>同・結婚後に移住する意思がある男性</td><td className={td}>13,000円/2年（登録料＋登録管理料）</td><td className={td}>同上</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>筑後市内の婚活イベント（恋活筑後掲載分）・センターの婚活パーティー</td><td className={td}>1回あたり無料〜5,000円（2025〜2026年度の掲載分）</td><td className={td}>イベントでのマッチング</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              民間の結婚相談所22社の1年総額の中央値399,200円は、センターの2年分の登録料3,000円の約133倍です（当サイト算出）。費用面では、筑後市周辺に住む方や勤める方にとって、センターは大きく負担を抑えられる選択肢です。一方で、センターは来所してお相手を探す方式で、火曜・水曜が休みです。平日の日中に来所しにくい方や、自宅からシステムでお相手を探したい方、より多くの会員の中から探したい方には、オンライン型を含む民間の結婚相談所も選択肢になります。まずセンターを見学し（11時〜16時、予約不要）、活動の頻度やサポートが合わない場合に民間を検討するのが目安です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。福岡の結婚相談所は<Link href="/area/fukuoka/" className="underline">福岡の結婚相談所</Link>で整理しています。公的な支援の料金は、各公式サイトで2026年11月25日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/tottori/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">えんトリー（鳥取県）</Link>
            <Link href="/knowledge/yamaguchi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">やまぐち結婚応縁センター（山口県）</Link>
            <Link href="/knowledge/ota/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">大田区の婚活支援（東京都）</Link>
            <Link href="/knowledge/nakatsu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">中津市の婚活支援（大分県）</Link>
            <Link href="/area/fukuoka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">福岡の結婚相談所</Link>
            <Link href="/knowledge/saga/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">佐賀県の結婚支援（さが出会いサポートセンター）</Link>
            <Link href="/knowledge/kumamoto/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">熊本県の結婚支援（Kumarry）</Link>
            <Link href="/knowledge/40s/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">42歳・40代の婚活の現状</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
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
