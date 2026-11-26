import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-26 確認）。
// ・倉敷市の婚活支援事業の一覧（イベント3件・施策等6件）、担当課（企画財政部 くらしき移住定住推進室・086-426-3153）：倉敷市「婚活支援事業」
// ・令和8年度の市主催イベント（対象＝高梁川流域圏の10市町、くら婚の日程と内容、くら婚Lightの会場・参加費500円・定員男女各6名・日程と年齢区分、セミナー2回は参加無料で終了済み、共催の支援者向けセミナー）：倉敷市「令和8年度 婚活イベント・セミナーの予定」（2026年9月18日更新）
// ・応募資格22歳〜45歳、くら婚の各回の参加費（第1回2,000円・第2〜4回1,000円）、第4回の会場（菊池酒造）と締切（1/30）、くら婚Lightの締切（12/5・1/24）、申込みは公式サイトのみ・応募多数は抽選：同ページ掲載の「くら婚2026チラシ」（PDF）
// ・Winter Party 2027（2027年1月24日・倉敷アイビースクエア・20代30代・無料・定員200名・締切1月17日・企業版ふるさと納税）：倉敷市「くら婚応援プロジェクト Winter Party 2027」（2026年11月17日更新）
// ・くらしきまち活（市内企業に勤務する34歳までの独身者・全4回＋第5回・申込期限2026年10月21日）：倉敷市「くらしきまち活」（2026年10月15日更新）
// ・同窓会開催支援補助金（目的・対象・要件・23〜35歳の参加者1人1,000円・上限5万円・申請期限令和9年3月12日・手続き）：倉敷市「倉敷市同窓会開催支援補助金」（2026年11月25日更新）
// ・婚活メールマガジン：倉敷市「婚活メールマガジン」（2025年2月26日更新）
// ・オリジナルご当地婚姻届（真備陵南高校の生徒の協力・ゼクシィ「まちキュンご当地婚姻届」で配信）：倉敷市「オリジナルご当地婚姻届」（2025年2月19日更新）
// ・結婚応援冊子「and」：倉敷市「結婚応援冊子「and」」（2025年2月19日更新）
// ・交付金の活用実績（令和3年度 結婚相談所マッチングシステム開発・導入 5,026千円、平成28年度 8,828千円）：倉敷市「地域少子化対策重点推進交付金」（2025年2月1日更新）
// ・縁むすびネットの市の案内（約3,000名・登録料無料）：倉敷市「岡山県「おかやま縁むすびネット」」（2026年10月16日更新）
// ・結婚記念樹（負担金500円・婚姻届を提出して市内に住む夫婦）：倉敷市「結婚・誕生記念樹」（2025年1月25日更新）
// ・婚姻数・婚姻率（平成29年〜令和6年、倉敷市・岡山県・全国）：倉敷市保健所「人口動態統計」（2025年10月1日更新）
// ・市の旧「結婚相談所事業」ページ（/cityinfo/plan/1002142/1013463.html）は2026-11-26 に「ページが見つかりません」。婚活支援事業の一覧にも掲載なし（本文に記載）
// ・結婚新生活支援事業：2026-11-26 時点で倉敷市公式サイトに案内を確認できず（本文に記載）
// ・倉敷センターの所在地・開所時間・結婚相談の日程、入会登録料10,000円（2年間有効）・無料キャンペーン実施中：おかやま出会い・結婚サポートセンター「センターについて」「入会申込みについて」・公式トップ
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値
// ・倉敷市の婚姻数の県内シェア（28.9%）と平成29年→令和6年の減少率（倉敷市19.6%・岡山県23.5%）は上記統計から当サイト算出

const CITY = "https://www.city.kurashiki.okayama.jp/cityinfo/plan/1002142";
const INDEX_URL = `${CITY}/index.html`;
const EVENT_URL = `${CITY}/1026260.html`;
const EVENT_PDF = "https://www.city.kurashiki.okayama.jp/_res/projects/default_project/_page_/001/026/260/kurakonnchirashi.pdf";
const WINTER_URL = `${CITY}/1028628.html`;
const MACHIKATSU_URL = `${CITY}/1027848.html`;
const DOUSOUKAI_URL = `${CITY}/1018528.html`;
const MAIL_URL = `${CITY}/1015537.html`;
const KONINTODOKE_URL = `${CITY}/1014692.html`;
const AND_URL = `${CITY}/1014835.html`;
const KOUFUKIN_URL = `${CITY}/1002141.html`;
const ENMUSUBI_CITY_URL = `${CITY}/1027512.html`;
const KINENJU_URL = "https://www.city.kurashiki.okayama.jp/1934.htm";
const STATS_URL = "https://www.city.kurashiki.okayama.jp/fukushi/health/1011753/1004731/1004737.html";
const MUSUBI_TOP_URL = "https://www.okayama-musubi.jp/";
const MUSUBI_ABOUT_URL = "https://www.okayama-musubi.jp/about.php";
const MUSUBI_ENTRY_URL = "https://www.okayama-musubi.jp/matching/entry.php";

const years = ["平成29年", "平成30年", "令和元年", "令和2年", "令和3年", "令和4年", "令和5年", "令和6年"];
const marriages = {
  city: [2424, 2393, 2448, 2261, 2109, 2189, 1986, 1950],
  pref: [8832, 8436, 8734, 7852, 7399, 7399, 6781, 6753],
};
const rates = {
  city: [5.1, 5.0, 5.1, 4.8, 4.5, 4.6, 4.2, 4.2],
  pref: [4.7, 4.5, 4.7, 4.2, 4.0, 4.0, 3.7, 3.8],
  national: [4.9, 4.7, 4.8, 4.3, 4.1, 4.1, 3.9, 4.0],
};

export const metadata: Metadata = {
  title: "倉敷市の婚活支援｜市主催「くら婚」などの婚活イベント日程と参加費、同窓会開催支援補助金、婚姻件数の推移",
  description:
    "倉敷市は市主催の婚活イベント「くら婚」（参加費1,000円）、「くら婚Light」（500円）、Winter Party 2027（無料）を開催し、23〜35歳の参加者1人につき1,000円を補助する同窓会開催支援補助金を設けています。今後の日程と締切、婚姻件数の推移、県のセンターとの使い分けを整理しています。",
  alternates: { canonical: "/knowledge/kurashiki/" },
};

const faqs = [
  {
    q: "倉敷市に市営の結婚相談所はありますか？",
    a: "2026年11月26日時点で、倉敷市の「婚活支援事業」の一覧に、市が運営する1対1のお見合い事業（結婚相談所）の案内は掲載されていません。以前公開されていた市の「結婚相談所事業」のページも、同日時点で表示できませんでした。市は、岡山県が運営する「おかやま縁むすびネット」を案内しています。県のおかやま出会い・結婚サポートセンターは、倉敷市阿知の天満屋倉敷店6階に「倉敷センター」を設けています。",
  },
  {
    q: "倉敷市主催の婚活イベントは、これからどの回に申し込めますか？",
    a: "2026年11月26日時点で日程が残っているのは、くら婚Light（12月12日・2027年1月31日、参加費500円）、くら婚応援プロジェクト Winter Party 2027（2027年1月24日、無料）、くら婚の第4回「酒蔵見学＆甘酒体験」（2027年2月6日、参加費1,000円）です。締切はそれぞれ12月5日、1月24日、1月17日、1月30日です。申込みは各イベントの専用サイトからのみ受け付けており、電話・郵送・FAXでは申し込めません。",
  },
  {
    q: "倉敷市民でなくても参加できますか？",
    a: "参加できます。令和8年度の市主催イベントの対象は、高梁川流域圏（倉敷市・新見市・高梁市・総社市・早島町・矢掛町・井原市・浅口市・里庄町・笠岡市）に住んでいるか勤めている独身の方、または今後この圏域での結婚を希望している独身の方です。対象年齢はイベントごとに異なり、チラシでは応募資格を22歳〜45歳としています。Winter Party 2027は20代・30代が対象です。",
  },
  {
    q: "同窓会開催支援補助金はいくらで、どのような同窓会が対象ですか？",
    a: "年度末（3月31日）時点で23歳以上35歳以下の参加者1人につき1,000円で、1回の同窓会の上限は5万円です。市内に所在する（していた）小学校・中学校・高校・特別支援学校・大学・専門学校の、学級・学年・部活動単位の同窓会が対象で、学校全体の同窓会は対象外です。23〜35歳の参加者が一定人数以上（同窓生100名以上なら20名以上、100名未満なら10名以上）いること、市内の飲食店・ホテル・旅館で開くことなどが要件です。開催7日前までに実施計画書を出し、開催後30日以内に申請書兼報告書を提出します。令和8年度の申請期限は2027年3月12日で、予算に達した時点で終了します。",
  },
  {
    q: "倉敷市に結婚新生活支援（新婚世帯への住居費補助）はありますか？",
    a: "2026年11月26日時点で、倉敷市の公式サイトに結婚新生活支援事業の案内は確認できませんでした。市の移住支援の補助金一覧（移住支援金など）は移住者向けの制度で、新婚世帯を対象としたものではありません。結婚に関連する市の制度としては、婚姻届を提出して市内に住む夫婦に、負担金500円で記念樹の苗木を配布する「結婚・誕生記念樹」があります。",
  },
  {
    q: "県のおかやま縁むすびネットと市のイベントは、どう使い分ければよいですか？",
    a: "縁むすびネットは会員の中からお相手を探して1対1で会う仕組みで、市の案内では約3,000名の会員がおり、2026年11月26日時点で入会登録料（通常10,000円・2年間有効）の無料キャンペーンを実施しています。市のイベントは少人数のグループで複数の方と話せる形式で、1回500円〜1,000円（Winter Partyは無料）で参加できます。まず市のイベントで婚活に慣れ、並行して縁むすびネットに登録するという使い方も可能です。縁むすびネットの料金や利用条件は、当サイトの岡山県のページで整理しています。",
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
  headline: "倉敷市の婚活支援：市主催の婚活イベント（くら婚・くら婚Light・Winter Party）、同窓会開催支援補助金、婚姻件数の推移と民間の結婚相談所との比較",
  description:
    "倉敷市が主催する婚活イベントの今後の日程と参加費、同窓会開催支援補助金、市の婚姻件数の推移、県のセンターや民間の結婚相談所との違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-26",
  dateModified: "2026-11-26",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/kurashiki/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "倉敷市の婚活（くら婚・同窓会補助金）", item: "https://mu-su-bi-ba.com/knowledge/kurashiki/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeKurashiki() {
  const last = marriages.city.length - 1;
  const share = ((marriages.city[last] / marriages.pref[last]) * 100).toFixed(1);
  const cityDrop = marriages.city[0] - marriages.city[last];
  const cityDropPct = ((cityDrop / marriages.city[0]) * 100).toFixed(1);
  const prefDropPct = (((marriages.pref[0] - marriages.pref[last]) / marriages.pref[0]) * 100).toFixed(1);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "倉敷市の婚活（くら婚・同窓会補助金）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          倉敷市の婚活支援：市主催の婚活イベント（くら婚・くら婚Light・Winter Party）、同窓会開催支援補助金、婚姻件数の推移と民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月26日（市の事業と統計は同日に倉敷市公式サイト、県のセンターはおかやま出会い・結婚サポートセンター公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />倉敷市の婚活支援は「市主催の婚活イベント」と「同窓会開催支援補助金」が中心です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>倉敷市は令和8年度、高梁川流域圏の独身の方を対象に婚活イベントを主催しています。2026年11月26日時点で申し込める回は、<strong>くら婚Light（参加費500円）</strong>が12月12日と2027年1月31日、<strong>Winter Party 2027（無料・定員200名）</strong>が1月24日、<strong>くら婚 第4回（参加費1,000円）</strong>が2月6日です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>23〜35歳の同窓生の交流を促すため、市内で開く同窓会に<strong>参加者1人につき1,000円（上限5万円）</strong>を補助しています。令和8年度の申請期限は<strong>2027年3月12日</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>倉敷市の婚姻数は令和6年に<strong>{marriages.city[last].toLocaleString()}件</strong>で、岡山県全体の<strong>{share}%</strong>を占めます。平成29年からの減少率は{cityDropPct}%で、県全体（{prefDropPct}%）より小さくなっています（当サイト算出）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>市営の結婚相談所と結婚新生活支援事業の案内は、市の公式サイトで確認できませんでした。1対1のお見合いは県の「おかやま縁むすびネット」（倉敷センターあり）が受け皿です。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">倉敷市から利用できる公的な結婚支援の一覧</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              倉敷市では、企画財政部のくらしき移住定住推進室が婚活支援を担当しています（電話 086-426-3153）。市の「婚活支援事業」のページに掲載されている事業と、市が案内している県の仕組みを、当サイトで次のとおり整理しました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>名称・運営</th><th className={th}>内容</th><th className={th}>費用</th><th className={th}>主な条件</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={EVENT_URL} {...ext}>くら婚・くら婚Light・婚活セミナー</a><br />倉敷市（主催）</td><td className={td}>体験型のマッチングイベント、少人数のトーク型イベント、婚活スキルを学ぶセミナー</td><td className={td}>くら婚1,000円〜2,000円、くら婚Light500円、セミナー無料</td><td className={td}>高梁川流域圏に在住・在勤、または圏内での結婚を希望する独身の方。応募資格は22歳〜45歳</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={WINTER_URL} {...ext}>くら婚応援プロジェクト Winter Party 2027</a><br />倉敷市（主催）</td><td className={td}>トークショー、価値観BINGO、相談ブースなどを設けた交流会</td><td className={td}>無料</td><td className={td}>高梁川流域圏に在住・在勤、または圏内での出会いを希望する20代・30代の独身の方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={MACHIKATSU_URL} {...ext}>くらしきまち活</a><br />倉敷市（主催）</td><td className={td}>市内で働く同世代の独身者が全4回のワークショップ等で交流する</td><td className={td}>第5回のみ1,000円（希望者）</td><td className={td}>市内の企業等に勤める34歳までの独身の方。令和8年度の申込みは終了</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={DOUSOUKAI_URL} {...ext}>倉敷市同窓会開催支援補助金</a><br />倉敷市</td><td className={td}>市内の学校の同窓会の開催費用の一部を補助する</td><td className={td}>23〜35歳の参加者1人につき1,000円（上限5万円）を受け取れる</td><td className={td}>市内の飲食店・ホテル・旅館で開くことなど</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={MAIL_URL} {...ext}>婚活メールマガジン</a><br />倉敷市</td><td className={td}>婚活イベントやセミナーの情報をLINE・メールで配信する</td><td className={td}>無料</td><td className={td}>どなたでも登録できる</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/okayama/" className="text-[#A08447] underline">おかやま縁むすびネット</Link><br />岡山県</td><td className={td}>会員制の1対1のお見合い支援。倉敷市内に「倉敷センター」がある</td><td className={td}>入会登録料10,000円（2年間有効）。2026年11月26日時点で無料キャンペーン実施中</td><td className={td}>県の要件による（<Link href="/knowledge/okayama/" className="underline">岡山県のページ</Link>で整理）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              このほか、市は結婚応援冊子「and」の配布、市内の真備陵南高校の生徒の協力で作成したオリジナル婚姻届の配信（ゼクシィ「まちキュンご当地婚姻届」）を行っています。当サイトでは2026年11月26日時点で、市が運営する1対1のお見合い事業（市営の結婚相談所）の案内を、倉敷市の公式サイトで確認できませんでした。以前公開されていた市の「結婚相談所事業」のページは、同日時点で表示できず、婚活支援事業の一覧にも掲載されていません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={INDEX_URL} {...ext}>倉敷市「婚活支援事業」</a>・<a href={EVENT_URL} {...ext}>「令和8年度 婚活イベント・セミナーの予定」（2026年9月18日更新）</a>・<a href={EVENT_PDF} {...ext}>「くら婚2026チラシ」（PDF）</a>・<a href={WINTER_URL} {...ext}>「くら婚応援プロジェクト Winter Party 2027」（2026年11月17日更新）</a>・<a href={MACHIKATSU_URL} {...ext}>「くらしきまち活」（2026年10月15日更新）</a>・<a href={MAIL_URL} {...ext}>「婚活メールマガジン」</a>・<a href={AND_URL} {...ext}>「結婚応援冊子「and」」</a>・<a href={KONINTODOKE_URL} {...ext}>「オリジナルご当地婚姻届」</a>・<a href={MUSUBI_ENTRY_URL} {...ext}>おかやま出会い・結婚サポートセンター「入会申込みについて」</a>（いずれも2026年11月26日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">市主催の婚活イベントの日程と参加費（令和8年度）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              倉敷市は、高梁川流域連携中枢都市圏事業として婚活イベントを主催しています。対象は、高梁川流域圏（倉敷市・新見市・高梁市・総社市・早島町・矢掛町・井原市・浅口市・里庄町・笠岡市）に住んでいるか勤めている独身の方、または今後この圏域での結婚を希望している独身の方です。2026年11月26日時点で申込みの締切が来ていない回は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日</th><th className={th}>イベント</th><th className={th}>会場・定員</th><th className={th}>参加費</th><th className={th}>申込締切</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>2026年12月12日（土）</td><td className={td}>くら婚Light「インドアまったりデート派」13時〜（35〜45歳）／15時〜（22〜34歳）</td><td className={td}>Cafe&amp;Bar KAG（倉敷市阿知3丁目1-2）・各回男女各6名</td><td className={td}>500円</td><td className={td}>12月5日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>2027年1月24日（日）</td><td className={td}>くら婚応援プロジェクト Winter Party 2027（14時〜18時）</td><td className={td}>倉敷アイビースクエア エメラルドホール・定員200名（先着）</td><td className={td}>無料</td><td className={td}>1月17日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>2027年1月31日（日）</td><td className={td}>くら婚Light「プチボードゲームで交流」13時〜（35〜45歳）／15時〜（22〜34歳）</td><td className={td}>Cafe&amp;Bar KAG・各回男女各6名</td><td className={td}>500円</td><td className={td}>1月24日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>2027年2月6日（土）</td><td className={td}>くら婚 第4回「酒蔵見学＆甘酒体験」</td><td className={td}>菊池酒造</td><td className={td}>1,000円</td><td className={td}>1月30日</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              くら婚は、少人数のグループでの会話と1対1の会話を組み合わせた「ダブルトーク制」の体験型イベントで、カップル成立後も3か月間のフォローアップがあります。令和8年度は9月5日（フルーツ狩り×クイズ・参加費2,000円）、10月31日（マルシェ巡り・1,000円）、11月21日（美観地区謎解き街歩き・1,000円）にも開催されました。くら婚Lightは各回90分・男女各6名のトーク中心のイベントで、リストバンド型の脈拍計とスマートフォンのアプリを連携させた相性診断を導入しています。8月9日・9月12日・11月22日にも開催されました。
            </p>
            <p>
              20代・30代の独身の方を対象とするWinter Party 2027は、トークショー、価値観BINGO、相談ブース、ボードゲームコーナーなどを設けた交流会で、友人同士でも1人でも参加できます。この事業は、明治安田生命保険相互会社からの企業版ふるさと納税を活用して実施されています。当日は身分証明書が必要で、無料駐車場はありません。
            </p>
            <p>
              申込みはイベントごとの専用サイトからのみ受け付けており、電話・郵送・FAXでは申し込めません。応募が多い場合は締切後に抽選となり、結果はメールで通知されます。締切後はキャンセル料がかかる場合があります。婚活スキルを学ぶ「くらしき婚活セミナー」（22〜34歳・参加無料）は、7月12日と10月17日に開催されました。市内の企業等に勤める34歳までの独身の方が全4回で交流する「くらしきまち活」は、2026年10月21日で令和8年度の申込みを締め切っています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={EVENT_URL} {...ext}>倉敷市「令和8年度 婚活イベント・セミナーの予定」（2026年9月18日更新）</a>・<a href={EVENT_PDF} {...ext}>「くら婚2026チラシ」（PDF）</a>・<a href={WINTER_URL} {...ext}>「くら婚応援プロジェクト Winter Party 2027」（2026年11月17日更新）</a>・<a href={MACHIKATSU_URL} {...ext}>「くらしきまち活」（2026年10月15日更新）</a>（いずれも2026年11月26日確認）。くら婚の第4回の会場・参加費・締切はチラシの記載です。最新の受付状況は各専用サイトでご確認ください。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">倉敷市同窓会開催支援補助金（参加者1人1,000円）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              倉敷市は、若い世代の同窓生の交流を促して出会いの機会をつくり、結婚への関心の向上やUターン・定住の促進につなげるため、同窓会の開催費用の一部を補助しています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容（令和8年度）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>補助対象</td><td className={td}>市内に所在する（していた）小学校・中学校・高等学校・特別支援学校・大学・専門学校の同窓会の開催経費。学級・学年・部活動等の単位で開くもの（学校単位の同窓会は対象外）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>参加人数の要件</td><td className={td}>年度末（3月31日）時点で23歳以上35歳以下の参加者が、同窓生100名以上の場合は20名以上、100名未満の場合は10名以上</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>その他の要件</td><td className={td}>市内の飲食店・ホテル・旅館で開くこと、開催経費が補助金額を上回ること、参加者全員が個別にアンケートに協力できること</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>補助金額</td><td className={td}>23歳以上35歳以下の参加者1人につき1,000円。1回の同窓会の上限は5万円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>手続き</td><td className={td}>開催7日前までに実施計画書（出席予定者名簿を添付）を提出し、開催後30日以内に申請書兼報告書（出席者名簿・領収証・集合写真・アンケート等）を提出。電子申請も可</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申請期限</td><td className={td}>2027年3月12日。期限前でも予算の上限に達した時点で終了</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              上限の5万円は、対象年齢の参加者50名分にあたります（当サイト算出）。補助金は参加者一人ひとりではなく、申請者（幹事）にまとめて交付されます。開催前の実施計画書の提出が必要なため、同窓会の日程が決まった段階で、くらしき移住定住推進室に確認することをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={DOUSOUKAI_URL} {...ext}>倉敷市「倉敷市同窓会開催支援補助金」（2026年11月25日更新）</a>（2026年11月26日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">倉敷市の婚姻件数の推移（平成29年〜令和6年）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              倉敷市保健所が公表している人口動態統計から、婚姻数と婚姻率（人口1,000人あたり）を当サイトで次のとおり整理しました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年</th><th className={th}>倉敷市の婚姻数</th><th className={th}>岡山県の婚姻数</th><th className={th}>婚姻率 倉敷市</th><th className={th}>婚姻率 岡山県</th><th className={th}>婚姻率 全国</th></tr></thead>
                <tbody>
                  {years.map((y, i) => (
                    <tr key={y} className="border-t border-[#E5DCCF] align-top"><td className={td}>{y}</td><td className={td}>{marriages.city[i].toLocaleString()}件</td><td className={td}>{marriages.pref[i].toLocaleString()}件</td><td className={td}>{rates.city[i].toFixed(1)}</td><td className={td}>{rates.pref[i].toFixed(1)}</td><td className={td}>{rates.national[i].toFixed(1)}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              倉敷市の婚姻数は、平成29年の{marriages.city[0].toLocaleString()}件から令和6年の{marriages.city[last].toLocaleString()}件へ{cityDrop.toLocaleString()}件（{cityDropPct}%）減少しました。同じ期間の岡山県全体の減少率は{prefDropPct}%です。令和6年の倉敷市の婚姻数は岡山県全体の{share}%を占め、婚姻率4.2は岡山県（3.8）と全国（4.0）を上回っています（減少率と割合は当サイト算出）。婚姻率の算出に用いる人口は、市は9月30日現在の住民基本台帳の日本人人口、県と全国は厚生労働省の公表値によるため、厳密な比較には注意が必要です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={STATS_URL} {...ext}>倉敷市保健所「人口動態統計」（2025年10月1日更新）</a>（2026年11月26日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">県のセンター（倉敷センター）と、結婚新生活支援の状況</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              1対1のお見合いを希望する場合、倉敷市が案内しているのは岡山県の「おかやま縁むすびネット」です。市の案内では、約3,000名の会員からお相手を探すことができ、お引合せには結婚支援ボランティア「結びすと」が立ち会います。県のおかやま出会い・結婚サポートセンターは、倉敷市内に「倉敷センター」（倉敷市阿知1-7-1 天満屋倉敷店6階、水〜日曜10時〜19時、祝日・年末年始を除く）を設けています。倉敷センターでは毎月第2木曜日・第4土曜日に結婚相談を受け付けており、前日の17時までに電話（086-236-0802）で予約が必要です。入会登録料、お引合せの費用、登録要件などは、当サイトの<Link href="/knowledge/okayama/" className="text-[#A08447] underline">岡山県「おかやま縁むすびネット」の解説</Link>で整理しています。
            </p>
            <p>
              倉敷市は、令和3年度に国の地域少子化対策重点推進交付金（交付決定額5,026千円）を活用し、当時市が運営していた結婚相談所のマッチングシステムを開発・導入しました。現在、市の婚活支援事業の一覧に結婚相談所の案内はありません。
            </p>
            <p>
              結婚後の住居費・引越費用を補助する結婚新生活支援事業について、当サイトでは2026年11月26日時点で、倉敷市の公式サイトに案内を確認できませんでした。市の移住支援の補助金（移住支援金・移住等希望者支援交通費補助金・くらしき移住者応援補助金）は移住者向けの制度です。結婚に関連する制度としては、婚姻届を提出して市内に住む夫婦に、負担金500円で記念樹の苗木を配布する「結婚・誕生記念樹」があります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={ENMUSUBI_CITY_URL} {...ext}>倉敷市「岡山県「おかやま縁むすびネット」」（2026年10月16日更新）</a>・<a href={MUSUBI_ABOUT_URL} {...ext}>おかやま出会い・結婚サポートセンター「センターについて」</a>・<a href={MUSUBI_TOP_URL} {...ext}>同 公式トップ</a>・<a href={KOUFUKIN_URL} {...ext}>倉敷市「地域少子化対策重点推進交付金」</a>・<a href={KINENJU_URL} {...ext}>「結婚・誕生記念樹」</a>（いずれも2026年11月26日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な支援と民間の結婚相談所の費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>お相手の探し方</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>倉敷市主催の婚活イベント</td><td className={td}>1回500円〜2,000円（Winter Party 2027は無料）</td><td className={td}>少人数のグループでの会話と1対1の会話</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/okayama/" className="text-[#A08447] underline">おかやま縁むすびネット</Link>（岡山県）</td><td className={td}>入会登録料10,000円（2年間有効）。2026年11月26日時点で無料キャンペーン実施中。別にお引合せの費用がかかる</td><td className={td}>会員の検索と申込み、結びすとの立ち会い</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              倉敷市の婚活イベントと県の縁むすびネットは、費用面では民間の結婚相談所より大幅に低く抑えられます。一方で、市のイベントは開催日と定員が限られ、応募多数の場合は抽選になります。担当者による継続的な紹介や交際中の助言を受けたい方には、民間の結婚相談所が選択肢になります。岡山市・倉敷市に店舗を置く相談所や、自宅から活動できるオンライン型と比べて検討するのが目安です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。近隣の広島県の結婚相談所は<Link href="/area/hiroshima/" className="underline">広島の結婚相談所</Link>で整理しています。公的な支援の料金は、各公式サイトで2026年11月26日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/kitakyushu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">北九州市の婚活支援</Link>
            <Link href="/knowledge/tome/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">登米市の婚活支援（とめ婚）</Link>
            <Link href="/knowledge/setagaya/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">世田谷区の婚活支援（せた婚）</Link>
            <Link href="/knowledge/shiojiri/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">塩尻市の結婚相談（NAGANO ai MATCH窓口）</Link>
            <Link href="/knowledge/okayama/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">岡山県の結婚支援（おかやま縁むすびネット）</Link>
            <Link href="/knowledge/tottori/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">えんトリー（鳥取県）</Link>
            <Link href="/knowledge/yamaguchi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">やまぐち結婚応縁センター（山口県）</Link>
            <Link href="/knowledge/takamatsu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">高松市の婚活支援</Link>
            <Link href="/knowledge/kakogawa/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">加古川市の婚活（婚活支援補助金）</Link>
            <Link href="/knowledge/nakatsu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">中津市の婚活（えんむす部登録料助成）</Link>
            <Link href="/area/hiroshima/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">広島の結婚相談所</Link>
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
