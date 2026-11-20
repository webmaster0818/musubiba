import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-20 確認）。
// ・おみサポ・ぎふの仕組み（平成26年10月にネットワーク開始、平成27年8月にセンター開設、市町村等の結婚相談所のネットワーク化）：ぎふマリッジサポートセンター「おみサポ・ぎふとは」
// ・登録・利用は無料、独身証明書が必要、お見合いの目安時間、立会人：同「どうやって登録するの？」
// ・会員登録できる方・必要書類・ネットワーク会員のみの登録不可・ID発行：同「登録方法」
// ・検索〜成婚の流れ、申込リスト20名、結果報告の期限（翌日17時）、更新・休会・退会、禁止事項：同「ご利用案内」
// ・センターでの閲覧（1日1回3名・15分以内）、申込み（一度に最大3名・第1希望から順に）、回答期限（3日以内・延長7日）、所在地・開所時間：同「センター利用案内」
// ・会員区分（正会員・女性おためし会員・従業員おためし会員・ぎふで婚活会員）、登録期間、独身確認：同「おみサポ・ぎふ会員利用規約」（令和8年4月1日施行・PDF）
// ・おためし会員の登録料無料・登録条件・必要書類・手続き：同 お知らせ「おみサポ・ぎふのおためし会員とは?」
// ・登録会員数1,631名（男性1,165名・女性466名、2026年3月末日現在）、入会金・お見合い料・成婚料なし、活動期間2027年3月末まで：同 R8おためし会員チラシ（女性・従業員・移住婚、2026年5月発行・PDF）
// ・18歳以上の独身男女を対象：同 公式トップページ
// ・年齢・住所などの登録条件（市町村ごと）・相談日時：同「市町村結婚相談窓口」と各窓口の詳細ページ（41か所。料金の記載はいずれもなし）
// ・よくある質問（市町村に相談所がない場合、年齢制限が相談所ごとに異なる、登録者の年代、1対1ルール、交際中の状況確認）：同「よくあるご質問（おみサポ・ぎふ）」
// ・問合せ件数・新規登録会員数・お見合い成立件数・交際発展件数・成婚報告数（令和5〜7年度）、県内自治体の専用窓口設置数：岐阜県「令和8年度結婚支援事業企画・運営業務委託プロポーザル募集」質問回答（3月5日分・PDF）
// ・センターの運営受託者（日本イベント企画株式会社）：同ページ「選定結果」（PDF）
// ・成婚報告数（累計）R6年度実績440組・事業費・担当課：岐阜県「令和8年度当初予算 予算要求資料 結婚支援事業費」（PDF）
// ・お見合い会（県内5圏域で計12回・参加費無料）：同 お知らせ「同世代とカジュアルに出会える！マッチングイベント参加者大募集」
// ・結婚新生活の補助（県内26市町村、上限60万円/30万円）：岐阜県「結婚・妊娠・共育ての相談機会提供・支援プログラム」
// ・三重県・長野県・佐賀県のセンター等の料金：当サイト /knowledge/mie/・/knowledge/nagano/・/knowledge/saga/ の確認内容
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const TOP_URL = "https://konsapo.pref.gifu.lg.jp/";
const ABOUT_URL = "https://konsapo.pref.gifu.lg.jp/omisapo/about.php";
const HOWTO_URL = "https://konsapo.pref.gifu.lg.jp/omisapo/howto/";
const ENTRY_URL = "https://konsapo.pref.gifu.lg.jp/omisapo/howto/entry.php";
const GUIDE_URL = "https://konsapo.pref.gifu.lg.jp/omisapo/howto/guide.php";
const CENTER_URL = "https://konsapo.pref.gifu.lg.jp/center/guide.php";
const CONSUL_URL = "https://konsapo.pref.gifu.lg.jp/omisapo/consul/";
const FAQ_URL = "https://konsapo.pref.gifu.lg.jp/category_faq/omisapo/";
const KIYAKU_URL = "https://konsapo.pref.gifu.lg.jp/file/riyoukiyaku.pdf";
const OTAMESHI_URL = "https://konsapo.pref.gifu.lg.jp/news/1315/";
const FLYER_F_URL = "https://konsapo.pref.gifu.lg.jp/archive/wp-content/uploads/2026/06/2605MarriageSupport_Otameshi_F_A4.pdf";
const EVENT_URL = "https://konsapo.pref.gifu.lg.jp/news/3425/";
const PREF_BID_URL = "https://www.pref.gifu.lg.jp/bid/bid/480144.html";
const PREF_QA_URL = "https://www.pref.gifu.lg.jp/uploaded/attachment/488128.pdf";
const PREF_RESULT_URL = "https://www.pref.gifu.lg.jp/uploaded/attachment/490623.pdf";
const PREF_BUDGET_URL = "https://www.pref.gifu.lg.jp/zaisei/r8koukai3/07/44147.pdf";
const PREF_SHINSEIKATSU_URL = "https://www.pref.gifu.lg.jp/page/221752.html";

const members = { m: 1165, f: 466 };

const results = [
  { item: "問合せ件数（入会面談件数を含む）", r7: "9,010件", r6: "5,562件", r5: "5,548件" },
  { item: "新規登録会員数", r7: "477人", r6: "573人", r5: "529人" },
  { item: "マッチング依頼件数", r7: "7,295件", r6: "6,964件", r5: "7,454件" },
  { item: "お見合い成立件数", r7: "738件", r6: "691件", r5: "729件" },
  { item: "交際発展件数", r7: "242組", r6: "216組", r5: "242組" },
  { item: "成婚報告数", r7: "15組", r6: "32組", r5: "38組" },
  { item: "おためし会員登録者数", r7: "152人", r6: "169人", r5: "191人" },
];

const desks = [
  { name: "岐阜市結婚相談所", cond: "18歳以上。岐阜市内または近接する市町村に在住・在勤" },
  { name: "大垣市結婚相談所", cond: "西濃地域の市町に在住・在勤、または結婚後に大垣市に住む意向がある方。年齢制限は特に設けていない" },
  { name: "各務原市結婚相談所", cond: "20歳以上" },
  { name: "関市婚活サポートセンター", cond: "市内に在住・在勤（結婚後に関市へ定住する意思がある方も可）、20歳以上49歳以下" },
  { name: "マリッジサポートたじみ", cond: "18歳以上。会員登録の記入はオンライン可（本登録には来所が必要）" },
  { name: "ハッピーマリッジサロン（中津川市）", cond: "20歳以上の独身の方。男性は中津川市に在住・在勤" },
  { name: "高山市結婚相談所", cond: "20歳以上。高山市・飛騨市・下呂市・白川村に居住、または将来移住する意思がある方" },
];

export const metadata: Metadata = {
  title: "岐阜県で結婚相談所を探す方へ｜県の「おみサポ・ぎふ」は登録・利用無料、会員1,631名・成婚報告数と民間との費用比較",
  description:
    "岐阜県の「おみサポ・ぎふ」は、市町村の結婚相談所またはぎふマリッジサポートセンターで登録し、登録・利用は無料です。登録会員1,631名（2026年3月末）、成婚報告数、入会条件・必要書類・申込みのルール、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/gifu/" },
};

const faqs = [
  {
    q: "おみサポ・ぎふの料金はいくらですか？",
    a: "公式サイトでは、市町村結婚相談所での会員登録について「登録・利用は無料」と案内しています。ぎふマリッジサポートセンターに直接登録するおためし会員も登録料は無料で、入会金・お見合い料・成婚料などの追加費用はかかりません。お見合いの際の交通費・飲食代は実費負担です（ぎふマリッジサポートセンター「どうやって登録するの？」・R8おためし会員チラシ）。",
  },
  {
    q: "何歳から登録できますか？",
    a: "ぎふマリッジサポートセンターは18歳以上の独身の男女を対象としています。ただし、市町村の結婚相談所ごとに登録条件が異なり、20歳以上や49歳以下などの年齢条件、市町村内に在住・在勤といった住所の条件を設けている相談所があります。登録を希望する相談所の条件を事前にご確認ください。",
  },
  {
    q: "岐阜県外に住んでいても登録できますか？",
    a: "女性おためし会員は県外在住の方も登録できます。従業員おためし会員は、県の認定を受けた従業員結婚支援団体に勤務していれば県外の方も登録できます。また、1年以内に岐阜県へUターン・Iターンする予定の方は「ぎふで婚活会員」に登録できます。男性が市町村の結婚相談所に登録する場合は、各相談所の住所要件によります。",
  },
  {
    q: "お見合いの申込みに上限はありますか？",
    a: "一度に申し込めるのは第3希望までの最大3名で、第1希望から順に意思確認が行われます。複数の方と同時に進めることはできません。申込みを受けた側は、申込みが届いた日から3日以内に回答し、相談所やセンターで詳しい情報を確認する場合は、一次回答の日から7日以内に回答します（ぎふマリッジサポートセンター「センター利用案内」・「よくあるご質問」）。",
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
  headline: "岐阜県の公的な婚活支援「おみサポ・ぎふ」の料金・入会条件・実績と、民間の結婚相談所との比較",
  description: "岐阜県の「おみサポ・ぎふ」とぎふマリッジサポートセンターの料金・入会条件・必要書類・申込みのルール・登録会員数・成婚報告数と、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-20",
  dateModified: "2026-11-20",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/gifu/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "岐阜県の結婚支援（おみサポ・ぎふ）", item: "https://mu-su-bi-ba.com/knowledge/gifu/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeGifu() {
  const total = members.m + members.f;
  const maleShare = ((members.m / total) * 100).toFixed(1);
  const ratio = (members.m / members.f).toFixed(1);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "岐阜県の結婚支援（おみサポ・ぎふ）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          岐阜県の結婚相談所選び：県の「おみサポ・ぎふ」の料金・入会条件・実績と、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月20日（料金・入会条件・会員数・利用規約・実績値は同日にぎふマリッジサポートセンター公式サイト、岐阜県公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />岐阜県の「おみサポ・ぎふ」は登録・利用が無料で、成婚料もかかりません
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>「おみサポ・ぎふ」は、岐阜県が運営する「ぎふ広域結婚相談事業支援ネットワーク」を使ったお見合いサポート事業です。<strong>市町村等が運営する結婚相談所に登録</strong>して利用し、県の「ぎふマリッジサポートセンター」（岐阜市・OKBふれあい会館）が相談所間の調整を行います。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>公式サイトでは<strong>登録・利用は無料</strong>と案内されています。市町村の相談所に登録せずセンターに直接登録する「おためし会員」も無料で、入会金・お見合い料・成婚料はかかりません。対象は<strong>18歳以上</strong>の独身の方で、独身証明書が必要です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>登録会員は<strong>男性{members.m.toLocaleString()}名・女性{members.f}名（計{total.toLocaleString()}名）</strong>です（2026年3月末日現在）。県の公表資料では、成婚報告数は<strong>令和5年度38組・令和6年度32組・令和7年度15組（令和8年1月末時点）</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>登録自体が無料のため、公式サイトに市町村による登録料補助の案内はありません。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">おみサポ・ぎふの料金と入会条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>岐阜県（担当は子ども・女性部 子ども・女性政策課）。ネットワークは平成26年10月、ぎふマリッジサポートセンターは平成27年8月に開始。令和8年度のセンター運営等の業務は、公募型プロポーザルで日本イベント企画株式会社が最優秀提案者に選定</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>料金</td><td className={td}>登録・利用は無料。おためし会員も登録料無料で、入会金・お見合い料・成婚料などの追加費用なし。お見合い時の交通費・飲食代は実費</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録の窓口</td><td className={td}>ネットワークに参画する市町村等が運営する結婚相談所、市町村等の窓口、またはぎふマリッジサポートセンター。ネットワーク会員のみの登録はできず、市町村の結婚相談所への登録と同時に申し込む</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象</td><td className={td}>18歳以上の独身の男女（センターの案内）。利用規約では、原則として岐阜県内で結婚を希望する方が対象。相談所ごとに年齢・住所の条件あり（下の表を参照）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録期間</td><td className={td}>正会員は登録相談所が定めた期間。満了前に更新手続きをしないと自動的に退会。おためし会員は登録した年度の末日まで（現在の募集は2027年3月末まで）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>おみサポ・ぎふ会員登録申込書、写真付き身分証明書のコピー（原本を提示）、独身証明書（発行後3か月以内）、本人近影の写真2枚（3か月以内に撮影）、その他各相談所が必要とする書類</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>インターネット環境</td><td className={td}>必須。IDとパスワードの発行やシステムからのお知らせはメールで届くため、スマートフォンかパソコンが必要</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              市町村の相談所に登録する前に試したい方向けに、センターへ直接登録する「おためし会員」が3種類あります。<strong>女性おためし会員</strong>は岐阜県で結婚を望む独身女性（県外在住・在勤も可）、<strong>従業員おためし会員</strong>は県の認定を受けた従業員結婚支援団体に勤務する独身の方、<strong>ぎふで婚活会員</strong>は県外に住み1年以内に岐阜県へUターン・Iターンする予定の独身の方が対象です。いずれも、おみサポ・ぎふと市町村結婚相談所に未登録であることが条件で、来所またはオンラインの面談で本人確認を行います。所属企業・団体に登録を報告することはないと案内されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={ABOUT_URL} {...ext}>ぎふマリッジサポートセンター「おみサポ・ぎふとは」</a>・<a href={HOWTO_URL} {...ext}>「どうやって登録するの？」</a>・<a href={ENTRY_URL} {...ext}>「登録方法」</a>・<a href={KIYAKU_URL} {...ext}>「おみサポ・ぎふ会員利用規約」（令和8年4月1日施行・PDF）</a>・<a href={OTAMESHI_URL} {...ext}>「おみサポ・ぎふのおためし会員とは?」</a>・<a href={FLYER_F_URL} {...ext}>「女性おためし会員」チラシ（2026年5月発行・PDF）</a>・<a href={FAQ_URL} {...ext}>「よくあるご質問」</a>・<a href={TOP_URL} {...ext}>公式トップページ</a>・<a href={PREF_RESULT_URL} {...ext}>岐阜県「令和8年度結婚支援事業企画・運営業務委託」選定結果（PDF）</a>（いずれも2026年11月20日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">お見合いまでの流れと申込みのルール</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>スマートフォンやパソコンでお相手を検索する（年齢・職業・身長・結婚歴などの「レベル1」の情報）。気になる方は申込リストに登録する（20名まで）</li>
              <li>登録相談所またはセンターで、写真・年収・学歴・子どもの有無などの「レベル2」の情報を閲覧し、お見合いを申し込む</li>
              <li>相手方も希望すれば、ぎふマリッジサポートセンターが日時・場所を調整し、喫茶店や飲食店などでお見合い（30分〜1時間程度）。希望に応じて立会人が同席する</li>
              <li>交際の意思をお見合いの翌日午後5時までにマイページで回答し、双方が希望すればセンターを通じて連絡先を交換する</li>
              <li>結婚が決まったら相談所またはセンターに報告して退会する。成婚を報告した方には岐阜県からお祝いの品が贈られる（一定の条件あり）</li>
            </ol>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>ルール</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お見合いの申込み</td><td className={td}>一度に最大3名（第3希望まで）。第1希望から順に意思確認を行い、複数人を同時に進めることはできない。申込み後のキャンセル・順番の変更は不可</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申込みへの回答</td><td className={td}>申込みが届いた日から3日以内に一次回答。レベル2の情報を相談所かセンターで見てから決める場合は、一次回答の日から7日以内。期限内に回答がないと期限切れ</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>1対1ルール</td><td className={td}>複数の方から申込みを受けても同時には受けられない。お見合いが成立したら原則キャンセル不可</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>センターでの閲覧</td><td className={td}>完全予約制（来所またはオンライン）。1日1回3名まで・15分以内。閲覧中のメモやスマートフォンの操作は不可</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>交際中</td><td className={td}>交際開始日から2週間後・2か月後、その後は2か月ごとにセンターから交際状況の確認メールが届く</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              検索はスマートフォンやパソコンでできますが、写真や年収などの詳しい情報は相談所かセンターでしか閲覧できない点が特徴です。登録相談所の開所日に都合が合わない場合は、センターを来所またはオンラインで利用できます。このほか、過去の申込みを受けた履歴（ビッグデータ）の分析結果からAIがお相手をおすすめする機能があります。県は、おみサポ・ぎふとは別に、県内5圏域で計12回のお見合い会（参加費無料）を令和8年度に開催しています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={GUIDE_URL} {...ext}>ぎふマリッジサポートセンター「ご利用案内」</a>・<a href={CENTER_URL} {...ext}>「センター利用案内」</a>・<a href={FAQ_URL} {...ext}>「よくあるご質問（おみサポ・ぎふ）」</a>・<a href={EVENT_URL} {...ext}>「マッチングイベント参加者大募集」</a>（いずれも2026年11月20日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">登録会員数・成婚報告数などの実績</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>令和7年度（令和8年1月末時点）</th><th className={th}>令和6年度</th><th className={th}>令和5年度</th></tr></thead>
                <tbody>
                  {results.map((r) => (
                    <tr key={r.item} className="border-t border-[#E5DCCF] align-top"><td className={td}>{r.item}</td><td className={td}>{r.r7}</td><td className={td}>{r.r6}</td><td className={td}>{r.r5}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              上の表は、岐阜県が令和8年度の結婚支援事業の委託先を公募した際に公表した、ぎふマリッジサポートセンターの実績値です。成婚報告数は、おみサポ・ぎふとイベント事業「コンサポ・ぎふ」の利用者からの報告数で、令和7年度は令和8年1月末時点のため年度の途中の値です。県の予算要求資料では、おみサポ・コンサポによる成婚報告数の累計は令和6年度実績で440組です。
            </p>
            <p>
              登録会員は1,631名（男性1,165名・女性466名、2026年3月末日現在）で、男性の割合は{maleShare}%、女性1人に対して男性約{ratio}人の比率です（当サイト算出）。県の資料でも、センター会員の男女比に差があることが課題として挙げられています。公式FAQでは、男女とも20代〜40代を中心に登録していると案内されていますが、年代別の人数は公表されていません。男性の方は、お相手となる女性会員が少ない点を踏まえて利用を検討されることをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_QA_URL} {...ext}>岐阜県「令和8年度結婚支援事業企画・運営業務委託プロポーザル」質問回答（令和8年3月5日・PDF）</a>（<a href={PREF_BID_URL} {...ext}>募集ページ</a>）・<a href={PREF_BUDGET_URL} {...ext}>岐阜県「令和8年度当初予算 予算要求資料 結婚支援事業費」（PDF）</a>・<a href={FLYER_F_URL} {...ext}>ぎふマリッジサポートセンター「女性おためし会員」チラシ（2026年5月発行・PDF）</a>・<a href={FAQ_URL} {...ext}>「よくあるご質問」</a>（いずれも2026年11月20日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">センターの拠点と、市町村の結婚相談所の登録条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>拠点</th><th className={th}>所在地・電話</th><th className={th}>開所日時</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>ぎふマリッジサポートセンター</td><td className={td}>岐阜市薮田南5-14-53 OKBふれあい会館第1棟2階／058-201-0141（直通）</td><td className={td}>月〜日曜日 9:00〜17:00。夜間対応は月・水・金曜日にオンラインで20:30まで（祝日・GW・お盆・年末年始を除く）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              公式サイトの「市町村結婚相談窓口」には、営利を目的としない公的な結婚相談窓口が41か所掲載されています。県の資料では、県内自治体の専用窓口の設置数は令和7年度で40市町村です。各窓口のページに料金の記載はなく、登録条件は相談所ごとに異なります。主な市の相談所の登録条件は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>相談所</th><th className={th}>登録条件（公式サイトの掲載内容）</th></tr></thead>
                <tbody>
                  {desks.map((d) => (
                    <tr key={d.name} className="border-t border-[#E5DCCF] align-top"><td className={td}>{d.name}</td><td className={td}>{d.cond}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              住んでいる市町村に結婚相談所がない場合は、センターが近くの登録可能な相談所を案内しています。住んでいる市町村以外の相談所でも申込みはできますが、受付できるかどうかは相談所によって異なります。相談日が月に数回の相談所もあるため、事前に電話等で確認することをおすすめします。
            </p>
            <p>
              岐阜県では登録・利用が無料のため、公式サイトに市町村による登録料補助の案内はありません。結婚後の費用については、県内26市町村が新婚世帯の住宅取得・リフォーム・家賃・引越しの費用を補助しており（県の基準では世帯所得500万円未満・夫婦ともに39歳以下が対象、上限は夫婦ともに29歳以下の世帯60万円・それ以外30万円）、条件は市町村によって異なります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CENTER_URL} {...ext}>ぎふマリッジサポートセンター「センター利用案内」</a>・<a href={CONSUL_URL} {...ext}>「市町村結婚相談窓口」と各窓口の詳細ページ</a>・<a href={FAQ_URL} {...ext}>「よくあるご質問」</a>・<a href={PREF_QA_URL} {...ext}>岐阜県 質問回答（令和8年3月5日・PDF）</a>・<a href={PREF_SHINSEIKATSU_URL} {...ext}>岐阜県「結婚・妊娠・共育ての相談機会提供・支援プログラム」</a>（いずれも2026年11月20日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>登録の有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>岐阜県「おみサポ・ぎふ」</td><td className={td}>登録・利用は無料（おためし会員も無料）</td><td className={td}>登録相談所が定める期間（おためし会員は年度末まで）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/mie/" className="text-[#A08447] underline">三重県「みえむすび」</Link></td><td className={td}>登録料・成婚料は無料</td><td className={td}>本登録から2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/nagano/" className="text-[#A08447] underline">長野県「NAGANO ai MATCH」</Link></td><td className={td}>システム登録料10,000円（相談所の登録料等が別にかかる場合あり）</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/saga/" className="text-[#A08447] underline">佐賀県「さが出会いサポートセンター」</Link></td><td className={td}>5,000円/年</td><td className={td}>1年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用だけを比べると、おみサポ・ぎふは民間の結婚相談所よりも大幅に低く抑えられます。長野県と同じく市町村の相談所に登録して使う仕組みですが、岐阜県ではシステムの登録料もかかりません。一方で、詳しい情報の閲覧は相談所かセンターに限られること、申込みは一度に3名までで順番に進むこと、登録会員は男性が女性の約{ratio}倍であることといった特徴があります。民間の結婚相談所は、費用がかかる代わりに、担当者がお相手を提案したり、交際中の相談に継続的に応じたりするところが多くあります。岐阜県内から利用できるオンライン型の結婚相談所や、名古屋市の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。三重県・長野県・佐賀県の料金は、各公式サイトで2026年11月17日〜19日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/mie/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">みえむすび（三重県）</Link>
            <Link href="/knowledge/nagano/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">NAGANO ai MATCH（長野県）</Link>
            <Link href="/knowledge/ishikawa/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">いしかわ結婚支援センター（石川県）</Link>
            <Link href="/area/nagoya/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">名古屋の結婚相談所</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/knowledge/saga/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">さが出会いサポートセンター（佐賀県）</Link>
            <Link href="/knowledge/matsumoto/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">松本市の結婚支援</Link>
            <Link href="/knowledge/yamanashi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">山梨県の結婚支援</Link>
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
