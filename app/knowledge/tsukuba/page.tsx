import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-24 確認）。
// ・入会登録料11,000円（条件外22,000円）・3年間有効・入会条件・必要書類・活動の流れ（AI紹介は毎週水曜、検索からの申込み月3名）：いばらき出会いサポートセンター「新システムの特徴」
// ・登録料以外の費用（月会費・紹介料・成婚料）なし・有効期間の起算日・本人確認面談の来所必須：同「よくあるご質問」
// ・会員数3,646人・新システムの成婚者数354組（2021年4月1日〜）：同 公式トップページの表示
// ・年代別・男女別会員数（2026年11月1日現在、男性2,214人・女性1,432人）：同 トップページから開くPDF「年代別・男女別会員数」（common/img/index/married/2026-11.pdf）
// ・拠点（水戸センター・県南センター＝牛久市）と営業時間：同「各センターのご案内」
// ・女性の入会登録料無料キャンペーン（2026年8月1日〜2027年1月31日、本人確認面談まで終了が条件）：同 トピックス（2026年6月30日・10月1日）
// ・出張相談会・登録会の開催市町村（19回分・74会場）：同 トピックス一覧1〜2ページ（2025年3月26日〜2026年11月24日掲載分）を当サイトが集計。12月分の日程・会場：同 トピックス（2026年10月22日）
// ・入会登録料助成の設置市町村（23市町村・R8.4.1現在）：同「入会登録料助成制度設置市町村一覧」
// ・つくば市結婚相談会（2026年12月22日・予約制・無料・対象・申込方法）：つくば市「【12月22日開催】つくば市結婚相談会」（2026年11月1日更新）
// ・結婚支援事業の担当課：つくば市「こども政策課」（2026年4月1日更新）
// ・結婚新生活支援事業の令和8年度実施市町村（21市町村）・国の基準：茨城県「結婚・妊娠・共育ての相談機会提供・支援プログラム」（2026年8月31日更新）
// ・県の入会登録料の案内：茨城県「いばらき出会いサポートセンター（AIマッチングシステム）」（2026年8月6日更新）
// ・結婚支援コンシェルジュのイベント：茨城県「結婚支援コンシェルジュによるイベント」（2026年11月17日更新）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値。栃木県センターの料金：当サイト /knowledge/tochigi/（2026年11月21日確認）

const TOP_URL = "https://www.ibccnet.com/";
const SYSTEM_URL = "https://www.ibccnet.com/new-system/";
const FAQ_URL = "https://www.ibccnet.com/faq/";
const ACCESS_URL = "https://www.ibccnet.com/about/access.html";
const MEMBER_PDF_URL = "https://www.ibccnet.com/common/img/index/married/2026-11.pdf";
const SUBSIDY_URL = "https://www.ibccnet.com/city/subsidy.html";
const TOPICS_URL = "https://www.ibccnet.com/cgi-bin/topics/topics.cgi";
const CAMPAIGN_URL = "https://www.ibccnet.com/cgi-bin/topics/topics.cgi?id=282";
const DEC_TOUR_URL = "https://www.ibccnet.com/cgi-bin/topics/topics.cgi?id=285";
const CITY_SOUDAN_URL = "https://www.city.tsukuba.lg.jp/soshikikarasagasu/kodomobukodomoseisakuka/gyomuannai/1/29691.html";
const CITY_KA_URL = "https://www.city.tsukuba.lg.jp/shisei/joho/soshiki/kodomo_hoken/1003495.html";
const PREF_SHINSEIKATSU_URL = "https://www.pref.ibaraki.jp/hokenfukushi/shotaisaku/kekonsien/kekkonshinseikatsu.html";
const PREF_DEAIBA_URL = "https://www.pref.ibaraki.jp/hokenfukushi/shotaisaku/kekonsien/deaiba.html";
const PREF_CONCIERGE_URL = "https://www.pref.ibaraki.jp/hokenfukushi/shotaisaku/kekonsien/concierge.html";

// 年代別・男女別会員数（2026年11月1日現在・センター公表PDFから転記）
const members = [
  { age: "20〜24歳", m: 7, f: 16 },
  { age: "25〜29歳", m: 144, f: 169 },
  { age: "30〜34歳", m: 400, f: 363 },
  { age: "35〜39歳", m: 518, f: 339 },
  { age: "40〜44歳", m: 382, f: 212 },
  { age: "45〜49歳", m: 307, f: 151 },
  { age: "50〜54歳", m: 221, f: 97 },
  { age: "55〜59歳", m: 133, f: 55 },
  { age: "60歳〜", m: 102, f: 30 },
];

// 県南地域の市町村の入会登録料助成（センター「入会登録料助成制度設置市町村一覧」R8.4.1現在から、県南地域の掲載分を抜粋）
const nearbySubsidies = [
  { city: "つくばみらい市", amount: "8,000円", note: "市の婚活支援事業の会員で、市の住民基本台帳に記録されている方" },
  { city: "龍ケ崎市", amount: "11,000円", note: "申請年度の4月1日時点で35歳未満の市民" },
  { city: "稲敷市", amount: "11,000円", note: "令和4年4月1日以降に入会し、申請時点で退会していない市民" },
  { city: "阿見町", amount: "11,000円", note: "令和8年4月1日以降に入会し、申請時点で退会していない町民" },
  { city: "美浦村", amount: "11,000円", note: "1年以上村内に住み、入会後1年以内に申請した方" },
  { city: "かすみがうら市", amount: "入会登録料の2分の1", note: "今後も市内に居住する意思がある市民" },
  { city: "石岡市", amount: "11,000円", note: "18歳以上の市民。入会前の事前申請が必要" },
  { city: "利根町", amount: "5,000円", note: "令和4年4月1日以降に入会し、申請時点で退会していない町民" },
];

export const metadata: Metadata = {
  title: "つくば市で結婚相談所を探す方へ｜県の「であイバ」は登録料11,000円・3年有効、つくば市の登録料助成はなし、市の無料結婚相談会と民間との費用比較",
  description:
    "つくば市から利用できる茨城県の「いばらき出会いサポートセンター（であイバ）」は登録料11,000円・3年有効で、つくば市は登録料助成の設置市町村に入っていません。会員の男女・年代構成、出張登録会の開催実績、市の無料結婚相談会、民間との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/tsukuba/" },
};

const faqs = [
  {
    q: "つくば市に住んでいる場合、であイバの費用はいくらですか？",
    a: "茨城県内にお住まいかお勤めの方の入会登録料は11,000円で、本人確認面談を行った月から3年間有効です。月会費・紹介料・成婚料はかかりません。2026年11月24日時点で、つくば市はセンターの「入会登録料助成制度設置市町村一覧」（R8.4.1現在・23市町村）に掲載されていないため、市の助成による減額は確認できませんでした。なお、女性は2027年1月31日までに本人確認面談を終えると入会登録料が無料になるキャンペーンが実施されています。",
  },
  {
    q: "つくば市から一番近いセンターはどこですか？",
    a: "センターの拠点は水戸センター（水戸市三の丸・茨城県三の丸庁舎3階）と県南センター（牛久市中央1-16-1 ラウェル牛久2階）の2か所です。県南センターの営業時間は9時30分〜18時で、月曜・水曜が休業日です。入会には対面の本人確認面談が必要なため、ホームページから入会申込と来所予約を行ったうえで、いずれかのセンターか出張登録会へ出向く必要があります。",
  },
  {
    q: "つくば市で出張登録会は開かれていますか？",
    a: "当サイトがセンターのトピックスに掲載された出張相談会・登録会の案内19回分（2025年5月〜2027年1月開催分、計74会場）を数えたところ、つくば市での開催はありませんでした。近隣では、つくばみらい市・龍ケ崎市で各3回、土浦市・守谷市・下妻市・阿見町などで各2回開かれています。2026年12月は阿見町（5日）・美浦村（12日）・守谷市（19日）・笠間市（26日）で予定されています。",
  },
  {
    q: "つくば市独自の結婚支援はありますか？",
    a: "つくば市はこども・保健部こども政策課が結婚支援事業を担当しており、茨城県から委嘱されたボランティア「いばらきマリッジサポーター」が相談に応じる「つくば市結婚相談会」を開いています。直近の回は2026年12月22日（火）10時〜15時、つくば市役所3階で、相談は無料・予約制です（申込受付は2026年12月1日から）。新婚世帯の住居費や引越費用を補助する結婚新生活支援事業は、茨城県の令和8年度実施市町村一覧につくば市の掲載がなく、当サイトでは確認できませんでした。",
  },
  {
    q: "つくば市外に住んでいて、つくば市内に勤めている場合も相談会を利用できますか？",
    a: "利用できます。つくば市の案内では、相談会の対象はつくば市に在住または在勤で結婚を希望する独身の方とされ、市外在住でも市内に勤務している方は相談できると記載されています。年齢制限はなく、ご家族からの相談も受け付けています。",
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
  headline: "つくば市で結婚相談所を探す方へ：茨城県「であイバ」の料金・会員構成とつくば市の結婚相談会、近隣市町村の助成、民間の結婚相談所との比較",
  description: "つくば市から利用できる茨城県のいばらき出会いサポートセンター（であイバ）の料金・拠点・会員の男女年代構成と、出張登録会の開催実績、つくば市の結婚相談会、近隣市町村の登録料助成、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-24",
  dateModified: "2026-11-24",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/tsukuba/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "つくば市の婚活（いばらき出会いサポートセンター）", item: "https://mu-su-bi-ba.com/knowledge/tsukuba/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeTsukuba() {
  const totalM = members.reduce((s, r) => s + r.m, 0);
  const totalF = members.reduce((s, r) => s + r.f, 0);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "つくば市の婚活（いばらき出会いサポートセンター）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          つくば市で結婚相談所を探す方へ：茨城県「であイバ」の料金・会員構成とつくば市の結婚相談会、近隣市町村の助成、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月24日（料金・会員数・出張登録会・助成制度は同日にいばらき出会いサポートセンター公式サイト、結婚相談会はつくば市公式サイト、結婚新生活支援とイベントは茨城県公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />つくば市の方が使える公的な結婚支援は、県の「であイバ」（3年11,000円）と市の無料結婚相談会です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>茨城県の「いばらき出会いサポートセンター（愛称：であイバ）」は、<strong>入会登録料11,000円で3年間</strong>利用でき、月会費・紹介料・成婚料はかかりません。つくば市から最も近い拠点は<strong>県南センター（牛久市）</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>つくば市は、センターが公表している<strong>入会登録料助成の設置市町村（23市町村）に入っていません</strong>（R8.4.1現在）。近隣ではつくばみらい市（8,000円）・龍ケ崎市（11,000円）などが助成しています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>女性は<strong>2027年1月31日まで入会登録料が無料</strong>のキャンペーン中です。2026年11月1日現在の会員は3,646人で、<strong>男性が約61%</strong>を占めます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>つくば市は、マリッジサポーターが相談に応じる<strong>無料の「つくば市結婚相談会」を2026年12月22日</strong>に市役所で開きます（予約制）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。費用を抑えたい方は県のセンター、担当者の継続的なサポートを重視する方は民間、という比べ方が目安になります。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">つくば市から利用できる公的な結婚支援の一覧（2026年11月24日時点）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>県・市・センターの公式サイトに掲載されている事業を、当サイトがつくば市在住の方の視点で整理しました。</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>支援</th><th className={th}>実施主体</th><th className={th}>つくば市の方の利用</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会員制のお相手探し（AIマッチング）</td><td className={td}>いばらき出会いサポートセンター（県などが支援する一般社団法人）</td><td className={td}>利用可。入会登録料11,000円・3年間有効</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会登録料の助成</td><td className={td}>各市町村</td><td className={td}>つくば市は設置市町村一覧（R8.4.1現在）に掲載なし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>つくば市結婚相談会</td><td className={td}>つくば市（協力：いばらきマリッジサポーター県南・つくば支部）</td><td className={td}>市内在住・在勤の方が対象。無料・予約制。次回は2026年12月22日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>出張相談会・登録会</td><td className={td}>いばらき出会いサポートセンター</td><td className={td}>2025年5月〜2027年1月の案内につくば市での開催はなし（下記で集計）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>結婚支援コンシェルジュのイベント</td><td className={td}>茨城県</td><td className={td}>県内各地で開催。2026年12月20日は常総市で開催予定</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>結婚新生活支援（住居費・引越費用の補助）</td><td className={td}>各市町村（国・県の交付金を活用）</td><td className={td}>県の令和8年度実施市町村一覧（21市町村）につくば市の掲載なし</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SUBSIDY_URL} {...ext}>いばらき出会いサポートセンター「入会登録料助成制度設置市町村一覧」</a>・<a href={CITY_SOUDAN_URL} {...ext}>つくば市「【12月22日開催】つくば市結婚相談会」（2026年11月1日更新）</a>・<a href={PREF_CONCIERGE_URL} {...ext}>茨城県「結婚支援コンシェルジュによるイベント」（2026年11月17日更新）</a>・<a href={PREF_SHINSEIKATSU_URL} {...ext}>茨城県「結婚・妊娠・共育ての相談機会提供・支援プログラム」（2026年8月31日更新）</a>（いずれも2026年11月24日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">であイバの料金と、つくば市の方が入会するときの流れ</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              料金・入会条件・成婚までの流れの詳細は、当サイトの<Link href="/knowledge/deaiba/" className="text-[#A08447] underline">であイバ（いばらき出会いサポートセンター）の料金と入会条件</Link>で解説しています。ここでは、つくば市の方に関係する点と、2026年11月24日に公式サイトで確認した現在の値をまとめます。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会登録料</td><td className={td}>11,000円（茨城県内に在住・在勤、親が県内在住、または県への移住に関心がある方）。いずれにも当たらない方は22,000円。本人確認面談を行った月から3年間有効</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>その他の費用</td><td className={td}>月会費・紹介料・成婚料はなし。センターが後援する有料イベントの参加費、書類の取得手数料、お見合いやデートの飲食費は自己負担</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>女性の無料キャンペーン</td><td className={td}>女性の入会登録料（11,000円または22,000円）が無料。2026年8月1日開始、2027年1月31日まで延長。期間中に本人確認面談まで終えることが条件</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>最寄りの拠点</td><td className={td}>県南センター：牛久市中央1-16-1（ラウェル牛久2階）、電話029-830-7502、9:30〜18:00、月曜・水曜休業。もう1か所は水戸センター（水戸市三の丸・茨城県三の丸庁舎3階）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会の手順</td><td className={td}>ホームページから入会申込（仮登録）と来所予約を行い、センターまたは出張登録会で対面の本人確認面談を受け、入会登録料を支払う。代理申込みは不可</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会後の活動</td><td className={td}>スマートフォン等で活動し、来所は不要。AI紹介は毎週水曜日に配信（紹介のない週もある）、検索からの申込みは毎月3名まで。オンラインお見合いも選択できる</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>実績</td><td className={td}>新システムの成婚者数354組（2021年4月1日〜、公式トップページの表示）</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SYSTEM_URL} {...ext}>いばらき出会いサポートセンター「新システムの特徴」</a>・<a href={FAQ_URL} {...ext}>「よくあるご質問」</a>・<a href={ACCESS_URL} {...ext}>「各センターのご案内」</a>・<a href={CAMPAIGN_URL} {...ext}>トピックス「女性限定！入会登録料無料キャンペーンの『期間延長』について」（2026年10月1日）</a>・<a href={TOP_URL} {...ext}>公式トップページ</a>・<a href={PREF_DEAIBA_URL} {...ext}>茨城県「いばらき出会いサポートセンター（AIマッチングシステム）」（2026年8月6日更新）</a>（いずれも2026年11月24日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">会員の男女・年代構成（2026年11月1日現在・3,646人）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>センターが公表している「年代別・男女別会員数」を転記し、当サイトで割合を計算しました。会員は県内全域の方で、つくば市在住の会員数は公表されていません。</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年代</th><th className={th}>男性</th><th className={th}>女性</th><th className={th}>計</th></tr></thead>
                <tbody>
                  {members.map((r) => (
                    <tr key={r.age} className="border-t border-[#E5DCCF]">
                      <td className={td}>{r.age}</td>
                      <td className={td}>{r.m.toLocaleString()}人</td>
                      <td className={td}>{r.f.toLocaleString()}人</td>
                      <td className={td}>{(r.m + r.f).toLocaleString()}人</td>
                    </tr>
                  ))}
                  <tr className="border-t border-[#E5DCCF] font-medium">
                    <td className={td}>合計</td>
                    <td className={td}>{totalM.toLocaleString()}人</td>
                    <td className={td}>{totalF.toLocaleString()}人</td>
                    <td className={td}>{(totalM + totalF).toLocaleString()}人</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>男性2,214人・女性1,432人で、男性が全体の約61%（女性1人に対して男性約1.5人）です。</li>
              <li>30代（30〜39歳）が1,620人で全体の約44%を占め、最も多い層は男性35〜39歳（518人）です。</li>
              <li>女性は25〜39歳が871人で女性会員の約61%を占めます。男性は40歳以上が1,145人で男性会員の約52%です。</li>
            </ul>
            <p>
              女性の入会登録料無料キャンペーンは、センターが「女性会員の増加を目的」として実施しているものです。男性の方は同年代の女性会員が少ない年代があること、女性の方は30代以上の男性会員が多いことを、入会前の目安としてご覧ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MEMBER_PDF_URL} {...ext}>いばらき出会いサポートセンター「年代別・男女別会員数（2026年11月1日現在）」（PDF）</a>（2026年11月24日確認）。割合は当サイトの計算値で、小数点以下を四捨五入しています。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">出張相談会・登録会の開催実績：19回分74会場のうち、つくば市は0回</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              センターは、身近な場所で入会相談と本人確認面談ができるよう、市町村で出張相談会・登録会を開いています。当サイトが、センターのトピックスに掲載された案内19回分（2025年3月26日〜2026年11月24日掲載、2025年5月〜2027年1月開催分）の開催市町村を数えたところ、延べ74会場・37市町村で、<strong>つくば市での開催はありませんでした</strong>。県南センターのある牛久市も含まれていません。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>市町村（つくば市周辺）</th><th className={th}>開催回数</th><th className={th}>開催月</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>つくば市</td><td className={td}>0回</td><td className={td}>―</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>つくばみらい市</td><td className={td}>3回</td><td className={td}>2025年11月・2026年2月・2026年10月</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>龍ケ崎市</td><td className={td}>3回</td><td className={td}>2025年11月・2026年1月・2026年5月</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>土浦市</td><td className={td}>2回</td><td className={td}>2025年6月・2026年6月</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>守谷市</td><td className={td}>2回</td><td className={td}>2025年12月・2026年12月</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>下妻市</td><td className={td}>2回</td><td className={td}>2025年8月・2026年9月</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>阿見町</td><td className={td}>2回</td><td className={td}>2025年12月・2026年12月</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>常総市</td><td className={td}>1回</td><td className={td}>2026年1月</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              2026年12月は、阿見町（12月5日・本郷ふれあいセンター）、美浦村（12月12日・地域交流館みほふれ愛プラザ）、守谷市（12月19日・守谷市役所議会棟）、笠間市（12月26日）で、いずれも土曜日の10時30分〜16時に予定されています。2027年1月は古河市と高萩市です。出張登録会で面談を受ける場合は、事前にホームページから入会申込と来所予約を行い、写真付き身分証明書と入会登録料を持参します。案内には開催市町村以外の方が参加できるかの記載がないため、つくば市の方が利用する場合は事前にセンター（029-224-8888）へご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TOPICS_URL} {...ext}>いばらき出会いサポートセンター トピックス一覧（1〜2ページ）</a>・<a href={DEC_TOUR_URL} {...ext}>トピックス「12月は4市町村で出張相談会・登録会を開催します」（2026年10月22日）</a>（いずれも2026年11月24日確認）。開催回数は各月の案内タイトルに記載された市町村を当サイトが集計したもので、案内が掲載されていない月（3月・4月）は含みません。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">つくば市の結婚支援：無料の結婚相談会（2026年12月22日）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>内容</td><td className={td}>茨城県から委嘱された結婚支援ボランティア「いばらきマリッジサポーター」が、結婚を希望する独身の方やご家族の相談に応じる</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>日時・会場</td><td className={td}>2026年12月22日（火）10時〜15時、つくば市役所3階 会議室301・302</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象</td><td className={td}>つくば市に在住または在勤で、結婚を希望する独身の方（市外在住で市内勤務の方も可）。ご家族の相談も可。年齢制限なし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>定員・費用</td><td className={td}>10時・11時・13時・14時からの各1時間に2枠ずつ（予約制）。相談は無料</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申込み</td><td className={td}>受付は2026年12月1日（火）から。電話（こども政策課 029-883-1111 内線1525、12月18日12時締切）またはいばらき電子申請・届出サービス（12月16日23時59分締切）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>主催・協力</td><td className={td}>主催：つくば市、協力：いばらきマリッジサポーター県南・つくば支部</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              市の案内では、次回以降の相談会の予約は受け付けておらず、各回の予約開始日に申し込む形です。つくば市の結婚支援事業は、こども・保健部こども政策課が担当しています。市のサイトでは、相談会の関連情報としていばらき出会いサポートセンターを案内しています。
            </p>
            <p>
              新婚世帯の住宅取得費・家賃・引越費用などを補助する結婚新生活支援事業（国の基準は世帯所得500万円未満・夫婦ともに婚姻日に39歳以下、上限は夫婦ともに29歳以下の世帯で60万円、それ以外で30万円）について、茨城県の令和8年度実施市町村一覧（21市町村）につくば市の掲載はありません。近隣では土浦市・取手市・坂東市・稲敷市・かすみがうら市・美浦村・利根町が掲載されています。県は、一覧以外の市町村でも類似事業を実施している場合があると案内しているため、つくば市の制度はこども政策課でご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_SOUDAN_URL} {...ext}>つくば市「【12月22日開催】つくば市結婚相談会」（2026年11月1日更新）</a>・<a href={CITY_KA_URL} {...ext}>つくば市「こども政策課」（2026年4月1日更新）</a>・<a href={PREF_SHINSEIKATSU_URL} {...ext}>茨城県「結婚・妊娠・共育ての相談機会提供・支援プログラム」（2026年8月31日更新）</a>（いずれも2026年11月24日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">県南地域で入会登録料を助成している市町村</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              センターの一覧（R8.4.1現在）に掲載されている23市町村のうち、つくば市周辺・県南地域の掲載分を抜粋しました。つくば市・土浦市・牛久市・守谷市・常総市・取手市は掲載されていません。助成の条件・申請時期は市町村ごとに異なり、石岡市のように入会前の事前申請が必要な場合もあるため、各市町村の担当課でご確認ください。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>市町村</th><th className={th}>助成額</th><th className={th}>主な条件（抜粋）</th></tr></thead>
                <tbody>
                  {nearbySubsidies.map((s) => (
                    <tr key={s.city} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{s.city}</td>
                      <td className={td}>{s.amount}</td>
                      <td className={td}>{s.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SUBSIDY_URL} {...ext}>いばらき出会いサポートセンター「令和8年度 入会登録料助成制度 設置市町村一覧」（R8.4.1現在）</a>（2026年11月24日確認）。市町村全体の一覧は<Link href="/knowledge/deaiba/" className="underline">であイバの解説ページ</Link>に掲載しています。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>茨城県「であイバ」（つくば市在住の方）</td><td className={td}>入会登録料11,000円（1年あたり約3,700円）。女性は2027年1月31日までの面談完了で無料</td><td className={td}>3年間</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>茨城県「であイバ」（つくばみらい市民で市の助成を利用）</td><td className={td}>11,000円から市の助成8,000円を差し引いた額（助成の条件は市に確認）</td><td className={td}>3年間</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/tochigi/" className="text-[#A08447] underline">栃木県「とちぎ結婚支援センター」</Link></td><td className={td}>入会登録料10,000円</td><td className={td}>2年間</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用だけを比べると、であイバは3年で11,000円で、民間の結婚相談所の1年総額（中央値399,200円）より大幅に低く抑えられます。一方で、検索からの申込みは月3名まで、入会時の面談は牛久市か水戸市のセンター（または出張登録会）で受ける必要があり、会員は男性が約61%という点があります。民間の結婚相談所は、費用がかかる代わりに、担当者がお相手を提案したり、交際中の相談に継続的に応じたりするところが多くあります。つくば市から利用できるオンライン型の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。栃木県のセンターの料金は、センターの公式サイトで2026年11月21日に確認した内容です。であイバの1年あたりの額は、11,000円を3で割った当サイトの計算値です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/takasaki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">高崎市の結婚相談・婚活支援</Link>
            <Link href="/knowledge/deaiba/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">であイバ（いばらき出会いサポートセンター）の料金と入会条件</Link>
            <Link href="/knowledge/tochigi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">栃木県の婚活（とちぎ結婚支援センター）</Link>
            <Link href="/knowledge/gunma/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">群馬県の婚活</Link>
            <Link href="/knowledge/asahi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">旭市の婚活（旭市出会いコンシェルジュ）</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
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
