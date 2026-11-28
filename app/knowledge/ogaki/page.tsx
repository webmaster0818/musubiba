import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-28 確認）。
// ・大垣市結婚相談所の対象（西濃地域の市町に在住・在勤で独身の方／結婚後に大垣市に住む意向のある独身の方）、場所（スイトピアセンター学習館1階「ハートリンクおおがき」内）、相談日時（毎週月・木・日曜9時30分〜16時、12〜13時を除く、来所は15時30分まで、スイトピアセンター休館日は休み）、本人来所での登録、登録に必要な物（顔写真付き身分証・上半身または全身の写真データ1枚・発行日から3か月以内の独身証明書）、記入書類、登録料不要、電話予約の推奨・来所閲覧の予約制、おみサポ・ぎふのマッチングシステムの利用、電話0584-47-8282、担当（市民活動部男女共同参画推進室）：大垣市「大垣市結婚相談所」（2026年3月27日更新）
// ・同相談所の所在地（大垣市室本町5丁目51番地）、令和8年度の相談所カレンダー、市が婚活パーティーも開催している旨：大垣市「令和8年度 結婚相談所チラシ」（PDF）
// ・年齢制限は特に設けていない旨：ぎふマリッジサポートセンター「市町村結婚相談窓口」大垣市結婚相談所の詳細ページ
// ・かがやき婚活事業『水都おおがき♡縁むすび』（平成22年度から実施、300組を超えるカップル成立）、令和8年度の開催スケジュール（全6回の日付・内容・会場）、結婚記念品、主催・企画運営（かがやき婚活プロジェクト＝青年団体OB等）・協力（大垣商工会議所ほか）：大垣市「かがやき婚活事業」（2026年10月8日更新）
// ・約50組が結婚、各回の申込期間、参加資格（水都大垣を愛する独身男女）、申込方法、抽選の優先条件、返金なし、写真付き身分証の提示、問合せ先（市民活動推進課 0584-47-7169）：大垣市「水都おおがき♡縁むすび」2026年度チラシ（PDF）
// ・第5回「クリスマスパーティー」（2026年12月5日16時〜19時30分、OKB Sky Lounge OGAKI、25〜37歳、男性5,000円・女性3,000円、男女各16人、締切11月16日17時）：大垣市「令和8年度『水都おおがき♡縁むすび』第5回事業「クリスマスパーティー」」（2026年11月16日更新）
// ・大垣市の15歳以上人口の配偶関係（令和2年10月1日現在・国勢調査、年齢5歳階級別・男女別の未婚者数と未婚割合）：大垣市「大垣市統計書（令和7年度版）」3 国勢調査 表3-4（xlsx）
// ・岐阜県主催お見合い会（西濃会場：2026年11月28日・海津市・40〜50歳・受付終了／2027年1月23日・ソフトピアジャパンセンター（大垣市）・22〜32歳・締切1月8日、参加費無料・各回男女6名、対象者の条件）：ぎふマリッジサポートセンター お知らせ「同世代とカジュアルに出会える！マッチングイベント参加者大募集」（2026年9月30日）
// ・結婚新生活の補助（令和8年度の実施は県内26市町村、県の基準、大垣市は一覧に掲載なし）：岐阜県「結婚・妊娠・共育ての相談機会提供・支援プログラム」（2026年6月19日更新）
// ・大垣市の結婚関連の案内（オリジナル婚姻届、市役所1階のメモリアルフォトスポット）：大垣市「大垣市オリジナル婚姻届・出生届」「メモリアルフォトスポットの設置について」
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const SOUDAN_URL = "https://www.city.ogaki.lg.jp/0000064799.html";
const SOUDAN_PDF_URL = "https://www.city.ogaki.lg.jp/cmsfiles/contents/0000064/64799/R8kekkonntirashi.pdf";
const OMISAPO_OGAKI_URL = "https://konsapo.pref.gifu.lg.jp/omisapo/consul/57";
const KONKATSU_URL = "https://www.city.ogaki.lg.jp/0000006462.html";
const KONKATSU_PDF_URL = "https://www.city.ogaki.lg.jp/cmsfiles/contents/0000006/6462/soe2026_flyer_260423.pdf";
const XMAS_URL = "https://www.city.ogaki.lg.jp/0000070944.html";
const TOUKEI_URL = "https://www.city.ogaki.lg.jp/0000069421.html";
const TOUKEI_XLSX_URL = "https://www.city.ogaki.lg.jp/cmsfiles/contents/0000069/69421/R7-03.xlsx";
const PREF_OMIAI_URL = "https://konsapo.pref.gifu.lg.jp/news/3425/";
const PREF_SHINSEIKATSU_URL = "https://www.pref.gifu.lg.jp/page/221752.html";
const KONIN_URL = "https://www.city.ogaki.lg.jp/0000040026.html";
const PHOTO_URL = "https://www.city.ogaki.lg.jp/0000054549.html";

// 大垣市「かがやき婚活事業」・2026年度チラシに掲載された令和8年度の開催スケジュール（2026年11月28日時点）
const parties = [
  { no: "第1回", date: "2026年5月31日（日）", name: "スイーツパーティー", venue: "大垣市役所8階「キッチン楠木」", entry: "2026年4月15日〜5月11日", status: "終了" },
  { no: "第2回", date: "2026年7月25日（土）", name: "サマーパーティー", venue: "RISE ON CAFE（ライズオンカフェ）", entry: "2026年6月1日〜7月6日", status: "終了" },
  { no: "第3回", date: "2026年9月12日（土）", name: "バーベキューパーティー", venue: "やったね！", entry: "2026年7月15日〜8月24日", status: "終了" },
  { no: "第4回", date: "2026年10月25日（日）", name: "レストランパーティー", venue: "BERGE（ベルジュ）", entry: "2026年9月1日〜10月16日", status: "終了" },
  { no: "第5回", date: "2026年12月5日（土）", name: "クリスマスパーティー", venue: "OKB Sky Lounge OGAKI", entry: "2026年10月15日〜11月16日", status: "申込みは締め切られました" },
  { no: "第6回", date: "2027年2月11日（木・祝）", name: "バレンタインパーティー", venue: "大垣フォーラムホテル", entry: "2027年1月1日〜1月25日", status: "申込み開始前" },
];

// 大垣市統計書（令和7年度版）表3-4（令和2年国勢調査・令和2年10月1日現在）から転記。未婚割合は配偶関係「不詳」を除いて算出された同表の値（小数第2位を四捨五入）
const census = [
  { age: "20〜24歳", menN: 3550, menR: "94.9", womenN: 3430, womenR: "91.8" },
  { age: "25〜29歳", menN: 2716, menR: "71.8", womenN: 2038, womenR: "57.7" },
  { age: "30〜34歳", menN: 2030, menR: "47.7", womenN: 1176, womenR: "30.2" },
  { age: "35〜39歳", menN: 1596, menR: "34.8", womenN: 915, womenR: "20.2" },
  { age: "40〜44歳", menN: 1573, menR: "29.5", womenN: 799, womenR: "15.6" },
  { age: "45〜49歳", menN: 1599, menR: "26.2", womenN: 827, womenR: "13.7" },
];

export const metadata: Metadata = {
  title: "大垣市の婚活支援｜登録料不要の市結婚相談所（月・木・日開設）と婚活パーティー「縁むすび」の日程・参加費、民間との費用比較",
  description:
    "大垣市の公的な婚活支援は、登録料不要の大垣市結婚相談所（スイトピアセンター内）と、平成22年度から続く婚活パーティー「水都おおがき縁むすび」が中心です。登録条件、日程と参加費、県のお見合い会、市の未婚割合、民間との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/ogaki/" },
};

const faqs = [
  {
    q: "大垣市結婚相談所には誰が登録できますか？費用はかかりますか？",
    a: "大垣市の公式ページでは、登録できる方を「西濃地域の市町に在住・在勤で独身の方」と「結婚後、大垣市に住む意向のある独身の方」としています。登録料は不要です。登録には本人の来所が必要で、顔写真付きの身分証（運転免許証、マイナンバーカード等）、上半身または全身の写真データ1枚、市町村が発行する独身証明書（発行日から3か月以内のもの）を持参します。ぎふマリッジサポートセンターの窓口案内には、年齢制限は特に設けていないと記載されています（いずれも2026年11月28日確認）。",
  },
  {
    q: "大垣市結婚相談所はいつ開いていますか？",
    a: "毎週月曜日・木曜日・日曜日の9時30分〜16時（12時〜13時を除く）で、来所は15時30分までとされています。上記の曜日でもスイトピアセンターの休館日は休みです。場所はスイトピアセンター学習館1階「ハートリンクおおがき」内（大垣市室本町5丁目51番地）です。予約の方が優先されるため、市は電話予約（0584-47-8282、相談日時に対応）を勧めています。",
  },
  {
    q: "大垣市の婚活パーティー「水都おおがき♡縁むすび」には誰が参加できますか？参加費はいくらですか？",
    a: "チラシでは参加資格を「水都大垣を愛する独身男女」としています。対象年齢と参加費は回ごとに決められており、第5回「クリスマスパーティー」（2026年12月5日）は25歳〜37歳、男性5,000円・女性3,000円、募集32人（男女各16人）でした。この回の申込みは2026年11月16日に締め切られました。申込多数の場合は、市内在住・在勤または市内の団体で活動している方のうち、初めて申し込む方や1年以上参加していない方を優先して抽選します。",
  },
  {
    q: "次に申し込める大垣市の婚活パーティーはいつですか？",
    a: "2026年11月28日時点のスケジュールでは、第6回「バレンタインパーティー」が2027年2月11日（木・祝）に大垣フォーラムホテルで予定されており、チラシに記載された申込期間は2027年1月1日〜1月25日です。対象年齢と参加費は、同日時点で第6回の個別ページが掲載されていないため確認できませんでした。申込開始時期に市のかがやき婚活事業のページをご確認ください。",
  },
  {
    q: "大垣市で結婚新生活支援（新居の家賃や引越費用の補助）は受けられますか？",
    a: "岐阜県が公表している令和8年度の実施市町村一覧（26市町村、2026年6月19日更新）に、大垣市は掲載されていません。大垣市の公式サイトでも、結婚新生活支援事業の案内は確認できませんでした（2026年11月28日時点）。一覧には養老町・垂井町・関ケ原町・神戸町・輪之内町・安八町・揖斐川町・大野町・池田町が掲載されています。対象世帯や補助額は自治体ごとに異なるため、各町の窓口でご確認ください。",
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
  headline: "大垣市の公的な婚活支援：大垣市結婚相談所の登録条件と開設日、婚活パーティー「水都おおがき♡縁むすび」、県のお見合い会と民間の結婚相談所との比較",
  description:
    "大垣市結婚相談所の登録条件・必要書類・開設日、かがやき婚活事業『水都おおがき♡縁むすび』の令和8年度日程と参加費、岐阜県のお見合い会の大垣市会場、令和2年国勢調査による市の未婚割合、結婚新生活支援の実施状況、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-28",
  dateModified: "2026-11-28",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/ogaki/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "大垣市の婚活支援", item: "https://mu-su-bi-ba.com/knowledge/ogaki/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeOgaki() {
  const men2539 = census.slice(1, 4).reduce((s, c) => s + c.menN, 0);
  const women2539 = census.slice(1, 4).reduce((s, c) => s + c.womenN, 0);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "大垣市の婚活支援" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          大垣市で婚活する方へ：大垣市結婚相談所の登録条件と開設日、婚活パーティー「水都おおがき♡縁むすび」、県のお見合い会と民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月28日（大垣市結婚相談所、かがやき婚活事業、大垣市統計書、岐阜県のお見合い会と結婚新生活支援の実施状況は、同日に大垣市・岐阜県・ぎふマリッジサポートセンターの公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />大垣市には、登録料不要の市の結婚相談所と、市主催の婚活パーティーがあります
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>大垣市結婚相談所</strong>は、スイトピアセンター学習館1階「ハートリンクおおがき」内で、<strong>毎週月・木・日曜日の9時30分〜16時</strong>に開いています。<strong>登録料は不要</strong>で、西濃地域の市町に在住・在勤の独身の方、または結婚後に大垣市に住む意向のある独身の方が登録できます。お相手探しには岐阜県の「おみサポ・ぎふ」のマッチングシステムを利用しています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>市は平成22年度から婚活パーティー<strong>「水都おおがき♡縁むすび」</strong>を開いており、令和8年度は全6回です。第5回（2026年12月5日・25〜37歳・男性5,000円・女性3,000円）の申込みは締め切られ、次は<strong>第6回（2027年2月11日）</strong>で、申込期間は2027年1月1日〜1月25日です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>岐阜県主催の<strong>参加費無料のお見合い会</strong>は、2027年1月23日に大垣市のソフトピアジャパンセンターで開かれます（22〜32歳・締切1月8日）。新居の家賃などを補助する<strong>結婚新生活支援</strong>は、県の令和8年度実施市町村一覧に<strong>大垣市の掲載がありません</strong>。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>継続してお相手の紹介や交際中の助言を受けたい場合は、民間の結婚相談所が選択肢になります。当サイトが料金を確認した22社の1年総額は125,400円〜709,500円（中央値399,200円）です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">大垣市結婚相談所の登録条件・必要書類・開設日</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              大垣市は、西濃地域の市町に在住または在勤で結婚を希望する方を対象に「結婚相談所」を開設しています。担当は市民活動部男女共同参画推進室です。市の公式ページとチラシに記載されている利用条件は次のとおりです（2026年11月28日時点）。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>場所</td><td className={td}>大垣市スイトピアセンター学習館1階「ハートリンクおおがき」内（大垣市室本町5丁目51番地）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>相談日時</td><td className={td}>毎週月曜日・木曜日・日曜日 9時30分〜16時（12時〜13時を除く）。来所は15時30分まで。上記の曜日でもスイトピアセンターの休館日は休み</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録できる方</td><td className={td}>西濃地域の市町に在住・在勤で独身の方／結婚後、大垣市に住む意向のある独身の方（年齢制限は特に設けていない）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録に必要な物</td><td className={td}>顔写真付きの身分証（運転免許証、マイナンバーカード等）、上半身または全身の写真データ1枚（登録時にメールで送信）、市町村が発行する独身証明書（発行日から3か月以内のもの）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>記入する書類</td><td className={td}>会員登録申込書および会員登録情報（公開用）。様式は相談所で配布。氏名、ニックネーム、性別、生年月日、住所、電話番号、勤務先、学歴、家族の状況、自己紹介などを記入</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録料</td><td className={td}>不要</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>予約</td><td className={td}>登録の来所は電話予約を推奨（予約がない場合は待つことがある）。来所閲覧は予約制で、予約なしの来所も可能だが予約の方を優先</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>問合せ</td><td className={td}>大垣市結婚相談所 0584-47-8282（相談日時に対応）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              登録は本人が来所して手続きする必要があり、オンラインだけでは完結しません。独身証明書には発行日から3か月以内という期限があるため、来所日が決まってから取得するのが目安です。令和8年度の開設日はチラシの「結婚相談所カレンダー」に掲載されています。
            </p>
            <p>
              大垣市結婚相談所は、岐阜県が運営する「ぎふ広域結婚相談事業支援ネットワーク（おみサポ・ぎふ）」のマッチングシステムを利用して、広域での出会いを支援しています。おみサポ・ぎふの会員数、成婚報告数、お見合いの申込みのルールは、当サイトの<Link href="/knowledge/gifu/" className="text-[#A08447] underline">岐阜県の結婚相談所（おみサポ・ぎふ）</Link>で整理しています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SOUDAN_URL} {...ext}>大垣市「大垣市結婚相談所」（2026年3月27日更新）</a>・<a href={SOUDAN_PDF_URL} {...ext}>同「令和8年度 結婚相談所チラシ」（PDF）</a>・<a href={OMISAPO_OGAKI_URL} {...ext}>ぎふマリッジサポートセンター「市町村結婚相談窓口」大垣市結婚相談所</a>（いずれも2026年11月28日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">市の婚活パーティー「水都おおがき♡縁むすび」（かがやき婚活事業）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              大垣市は平成22年度から、かがやき婚活事業『水都おおがき♡縁むすび』として、結婚を希望する独身男女に出会いの場を提供しています。主催は大垣市、企画運営は青年団体OB等で構成する「かがやき婚活プロジェクト」、協力は大垣商工会議所ほかです。市の公式ページでは、これまでのイベントで300組を超えるカップルが成立したとしており、チラシには約50組が結婚したと記載されています。
            </p>
            <p>令和8年度の開催スケジュールは次のとおりです（2026年11月28日時点）。</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>回・開催日</th><th className={th}>内容</th><th className={th}>会場</th><th className={th}>申込期間（チラシ記載）・状況</th></tr></thead>
                <tbody>
                  {parties.map((p) => (
                    <tr key={p.no} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{p.no}<br />{p.date}</td>
                      <td className={td}>{p.name}</td>
                      <td className={td}>{p.venue}</td>
                      <td className={td}>{p.entry}<br />（{p.status}）</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              対象年齢・参加費・定員は回ごとに個別ページで案内されます。第5回「クリスマスパーティー」は、2026年12月5日（土）16時〜19時30分にOKB Sky Lounge OGAKI（大垣市郭町3丁目98、大垣共立銀行本店ビル17階）で開かれ、参加資格は「水都大垣を愛する25歳〜37歳の独身男女」、参加費は男性5,000円・女性3,000円、募集人数は32人（男女各16人）でした。申込みは2026年11月16日17時に締め切られました。第6回の対象年齢と参加費は、2026年11月28日時点で個別ページが掲載されていないため確認できませんでした。
            </p>
            <p>
              申込みは参加申込フォーム、または参加申込書の郵送・ファクス・持参（大垣市役所市民活動推進課）で行います。申込多数の場合は、市内在住・在勤または市内の団体で活動している方のうち、初めて申し込む方や1年以上参加していない方を優先して抽選し、結果はメールで通知されます。参加費は納入後、原則として返金されず、当日は写真付きの身分証の提示が必要です。チラシによると、当日は一対一の自己紹介、中間印象カード、グループでのフリートーク、告白カードの発表という流れが一般的とされています。
            </p>
            <p>
              このパーティーで出会って結婚した方には、市から記念品（桧升を使ったあかり「灯（とも）します」）が贈られます。大垣市は、このほかにもオリジナルデザインの婚姻届を配布し、市役所1階の窓口サービス課前に婚姻届などの届出の記念撮影ができるメモリアルフォトスポットを設けています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={KONKATSU_URL} {...ext}>大垣市「かがやき婚活事業」（2026年10月8日更新）</a>・<a href={KONKATSU_PDF_URL} {...ext}>同「水都おおがき♡縁むすび」2026年度チラシ（PDF）</a>・<a href={XMAS_URL} {...ext}>同「令和8年度『水都おおがき♡縁むすび』第5回事業「クリスマスパーティー」」（2026年11月16日更新）</a>・<a href={KONIN_URL} {...ext}>同「大垣市オリジナル婚姻届・出生届」</a>・<a href={PHOTO_URL} {...ext}>同「メモリアルフォトスポットの設置について」</a>（いずれも2026年11月28日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">大垣市の年代別の未婚割合（令和2年国勢調査）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              大垣市統計書（令和7年度版）には、令和2年国勢調査（令和2年10月1日現在）による年齢別・男女別の配偶関係が掲載されています。婚活の中心となる年代の未婚者数と未婚割合は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年齢</th><th className={th}>男性の未婚者数</th><th className={th}>男性の未婚割合</th><th className={th}>女性の未婚者数</th><th className={th}>女性の未婚割合</th></tr></thead>
                <tbody>
                  {census.map((c) => (
                    <tr key={c.age} className="border-t border-[#E5DCCF]">
                      <td className={td}>{c.age}</td>
                      <td className={td}>{c.menN.toLocaleString()}人</td>
                      <td className={td}>{c.menR}%</td>
                      <td className={td}>{c.womenN.toLocaleString()}人</td>
                      <td className={td}>{c.womenR}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              30〜34歳の未婚割合は男性47.7%・女性30.2%、35〜39歳は男性34.8%・女性20.2%で、いずれの年代も男性の未婚割合が女性を上回っています。当サイトで25〜39歳の未婚者数を合計すると、男性{men2539.toLocaleString()}人・女性{women2539.toLocaleString()}人です。15歳以上全体の未婚割合は、男性31.4%・女性21.6%です。
            </p>
            <p>
              この数値は令和2年時点のもので、現在の状況とは異なる可能性があります。また、結婚の希望の有無は国勢調査では把握されていないため、未婚者数がそのまま婚活をしている方の人数を示すものではありません。市の結婚相談所は西濃地域の在住・在勤者を、県のおみサポ・ぎふは県内の会員を対象にしているため、実際の出会いの範囲は大垣市内に限られません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TOUKEI_URL} {...ext}>大垣市「大垣市統計書（令和7年度版）」（2026年3月25日更新）</a>の<a href={TOUKEI_XLSX_URL} {...ext}>「3 国勢調査」表3-4（xlsx）</a>（2026年11月28日確認）。未婚割合は配偶関係「不詳」を除いて算出された同表の値を、小数第2位で四捨五入しています。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">岐阜県のお見合い会（西濃会場）と結婚新生活支援</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              岐阜県は令和8年度、県内5圏域で計12回のお見合い会を開いています。参加者のプロフィールを確認したうえで、仕切られた空間で1組約10分の個別トークを行う形式で、参加費は無料、各回男女6名です。対象は、男性が岐阜県内在住・在勤の方（おみサポ・ぎふ会員は県外在住・在勤でも参加可能）、女性は居住地・勤務地を問いません（県外在住・在勤の方は岐阜県とつながりたい方）。西濃会場の開催は次のとおりです（2026年11月28日時点）。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日</th><th className={th}>会場</th><th className={th}>対象年齢</th><th className={th}>締切・状況</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>2026年11月28日（土）14:00〜16:00</td><td className={td}>海津総合福祉会館「ひまわり」（海津市）</td><td className={td}>40〜50歳</td><td className={td}>11月24日締切。申込み受付は終了しました</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>2027年1月23日（土）14:00〜16:00</td><td className={td}>ソフトピアジャパンセンター（大垣市加賀野4丁目1-7）</td><td className={td}>22〜32歳</td><td className={td}>2027年1月8日（金）17:00締切。受付中</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              申込みは県の「コンサポ・ぎふ」から行い、電話・メールでは申し込めません。先着順ではなく、応募者多数の場合は抽選です。このほか、2027年2月6日にはオンライン（Zoom）の回（25〜35歳・締切1月22日）も予定されています。
            </p>
            <p>
              結婚後の新生活については、岐阜県の一覧（2026年6月19日更新）で、令和8年度に新婚世帯の住宅取得費用・リフォーム費用・住宅賃貸費用・引越費用を補助する市町村は26市町村です。県の基準では、対象は世帯所得500万円未満で夫婦ともに婚姻日における年齢が39歳以下の世帯、補助上限額は夫婦ともに29歳以下の世帯が60万円、それ以外の世帯が30万円です。この一覧に大垣市は掲載されておらず、大垣市の公式サイトでも結婚新生活支援事業の案内は確認できませんでした（2026年11月28日時点）。一覧には養老町・垂井町・関ケ原町・神戸町・輪之内町・安八町・揖斐川町・大野町・池田町が掲載されており、対象世帯や補助額は町ごとに異なります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_OMIAI_URL} {...ext}>ぎふマリッジサポートセンター「同世代とカジュアルに出会える！マッチングイベント参加者大募集」（2026年9月30日）</a>・<a href={PREF_SHINSEIKATSU_URL} {...ext}>岐阜県「結婚・妊娠・共育ての相談機会提供・支援プログラム」（2026年6月19日更新）</a>（いずれも2026年11月28日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な支援と民間の結婚相談所の費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>費用</th><th className={th}>1対1の紹介</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>大垣市結婚相談所（おみサポ・ぎふのマッチングシステムを利用）</td><td className={td}>登録料不要</td><td className={td}>あり（おみサポ・ぎふの仕組みによるお見合い）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>大垣市の婚活パーティー「水都おおがき♡縁むすび」</td><td className={td}>回ごとに設定（第5回は男性5,000円・女性3,000円）</td><td className={td}>なし（パーティー形式）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>岐阜県主催のお見合い会</td><td className={td}>無料</td><td className={td}>なし（イベント形式。1対1の個別トークあり）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              大垣市の公的な支援は、登録料不要の結婚相談所と参加費が数千円のパーティーを組み合わせて利用でき、費用を低く抑えられます。一方で、相談所の開設は週3日で登録には来所が必要なこと、パーティーは年6回で抽選があることが制約になります。平日夜や自宅から活動したい場合、担当者による継続的なお相手の紹介や交際中の助言を受けたい場合は、民間の結婚相談所が選択肢になります。大垣市から通える範囲として、名古屋市の結婚相談所やオンライン型の結婚相談所と比べて検討するのが目安です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。公的な支援の費用は、各公式サイトで2026年11月28日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/gifu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">岐阜県の結婚相談所（おみサポ・ぎふ）</Link>
            <Link href="/knowledge/ichinomiya/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">一宮市の婚活支援</Link>
            <Link href="/area/nagoya/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">名古屋・愛知の結婚相談所</Link>
            <Link href="/knowledge/kasai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">加西市の婚活支援</Link>
            <Link href="/knowledge/tomakomai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">苫小牧市の婚活支援</Link>
            <Link href="/knowledge/joetsu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">上越市の婚活支援</Link>
            <Link href="/knowledge/jiyugaoka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">自由が丘の結婚相談所</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
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
