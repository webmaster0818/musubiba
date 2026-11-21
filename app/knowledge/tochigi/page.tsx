import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-21 確認）。
// ・とちぎ結婚支援センターの設置主体（とちぎ未来クラブ）、4拠点の所在地・電話・開設時間、マッチングの仕組み、会員の条件、入会登録料10,000円・2年間・退会時返金なし・休会しても期間延長なし：栃木県「とちぎ結婚支援センター登録会員募集中！」（2024年3月31日更新）
// ・会員になれる方（県内在住・通勤、または栃木県への移住に関心がある方）、必要書類、登録の流れ（仮登録→書類アップロード→WEBまたは来所面談→振込→本登録）、小山センターの開設日（2017年11月22日）・開所時間・休業日、全体の成婚カップルの20％以上が小山センターで成立：小山市「とちぎ結婚支援センター小山のご紹介」
// ・小山センターの成婚カップル81組（令和8年6月30日現在）：小山市「【期間限定】とちぎ結婚支援センター女性登録料無料キャンペーン（20代～30代）」
// ・女性登録料無料キャンペーン（20代〜30代・2026年7月16日〜2027年2月28日・予定数到達で終了）：栃木県 報道発表（2026年7月9日）
// ・成婚実績 毎週1組以上（2022〜2025年度の平均）、交際後の成婚率36.2％（2025年度成婚数÷2024年度交際成立数）、成婚までの平均交際期間13か月（2025年10月〜2026年3月末の成婚者）、プレ交際は最大3名・60日間、初対面はセンターの専用ブースまたはオンライン：同キャンペーンチラシ（PDF）
// ・マッチング会員成婚300組達成記念セレモニー（2025年2月8日）、成婚祝いの協賛品：栃木県「とちぎハッピーマリッジ応援事業」
// ・東京交通会館での出張登録会（原則第4日曜日）、とちぎ結婚サポーター制度（2026年10月19日運用開始）：栃木県「結婚支援」（2026年10月19日更新）・報道発表（2026年10月19日）
// ・入会登録料の助成を行う市町の一覧（令和8年4月23日現在）：栃木県「とちぎ結婚支援センター登録助成市町一覧」（PDF）。掲載19市町は当サイトが数えた値
// ・宇都宮市の入会登録料補助（39歳以下は自己負担額の10分の10・上限10,000円、40歳以上は2分の1・上限5,000円、対象者の要件、申請期限、他制度の補助額を差し引く）：宇都宮市「とちぎ結婚支援センター入会登録料補助」（令和8年7月28日更新）・同交付要綱（PDF・令和8年4月1日改正）
// ・宇都宮市「みや恋デザイン」のイベント（対象・参加費・令和8年度の終了イベントのマッチング組数）：宇都宮市「みや恋デザイン」（令和8年11月10日更新）。マッチング組数の合計95組は当サイトが合計した値
// ・宇都宮市結婚新生活支援事業（最大30万円、夫婦ともに29歳以下は最大60万円）：宇都宮市「令和8年度宇都宮市結婚新生活支援事業」
// ・小山市の婚活塾（男性限定・無料・12月12日）、おしゃべりマッチング：小山市「男性限定婚活塾〜」。小山市結婚新生活支援事業補助金の終了（令和2年度末）：小山市「小山市結婚新生活支援事業補助金終了について」
// ・佐賀県・熊本県のセンターの料金：当サイト /knowledge/saga/・/knowledge/kumamoto/ の確認内容
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値
// ※とちぎ結婚支援センター公式サイト（msc-tochigi.jp）は2026年11月21日の確認時に応答がなかったため、県・市の公式ページと公式チラシで確認した。

const PREF_CENTER_URL = "https://www.pref.tochigi.lg.jp/a03/kekkonsien-center.html";
const PREF_TOP_URL = "https://www.pref.tochigi.lg.jp/a03/kekkonshien-top.html";
const PREF_CAMPAIGN_URL = "https://www.pref.tochigi.lg.jp/a03/houdou/houdouu/tmccampaign.html";
const PREF_FLYER_URL = "https://www.pref.tochigi.lg.jp/a03/houdou/houdouu/documents/0617flyer-004.pdf";
const PREF_HAPPY_URL = "https://www.pref.tochigi.lg.jp/a03/happymarriage.html";
const PREF_JOSEI_URL = "https://www.pref.tochigi.lg.jp/a03/documents/20260603132957.pdf";
const PREF_SUPPORTER_URL = "https://www.pref.tochigi.lg.jp/a03/houdou/tochigikekkon.html";
const UTSU_HOJO_URL = "https://www.city.utsunomiya.lg.jp/kurashi/teijyu/1013748/1029742.html";
const UTSU_YOUKOU_URL = "https://www.city.utsunomiya.lg.jp/_res/projects/default_project/_page_/001/029/742/youkousenta.pdf";
const UTSU_MIYAKOI_URL = "https://www.city.utsunomiya.lg.jp/kurashi/kekkon/1029861/1009484.html";
const UTSU_SHINSEIKATSU_URL = "https://www.city.utsunomiya.lg.jp/kurashi/kekkon/1029861/1026674.html";
const OYAMA_CENTER_URL = "https://www.city.oyama.tochigi.jp/kurashi/kekkon-rikon/page004052.html";
const OYAMA_CAMPAIGN_URL = "https://www.city.oyama.tochigi.jp/kurashi/kekkon-rikon/page011509.html";
const OYAMA_JUKU_URL = "https://www.city.oyama.tochigi.jp/kurashi/kekkon-rikon/page012033.html";
const OYAMA_SHINSEIKATSU_URL = "https://www.city.oyama.tochigi.jp/kurashi/kekkon-rikon/page004051.html";

const fee = 10000;
const oyamaCouples = 81;

const joseiTowns = [
  "宇都宮市", "足利市", "佐野市", "日光市", "真岡市", "矢板市", "那須塩原市", "さくら市", "那須烏山市", "上三川町",
  "益子町", "茂木町", "市貝町", "芳賀町", "壬生町", "塩谷町", "高根沢町", "那須町", "那珂川町",
];

const centers = [
  { name: "宇都宮センター", addr: "宇都宮市大通り2-1-5 明治安田生命宇都宮大通りビル6階／028-688-0880", hours: "平日 11:00〜20:00、土日祝 9:00〜18:00" },
  { name: "小山センター", addr: "小山市中央町3-7-1 ロブレ6階（小山駅側エレベーター隣）／0285-38-7213", hours: "10:00〜18:00。休業日は水・木曜日・お盆・年末年始（小山市の案内）" },
  { name: "那須塩原センター", addr: "那須塩原市本町1-1 那須塩原市図書館「みるる」内／0287-74-2004", hours: "平日（月曜・火曜を除く）・土日 10:00〜18:00" },
  { name: "足利センター", addr: "足利市南町4254-2 ニューミヤコホテル足利本館4階／0284-64-8215", hours: "金曜 16:00〜20:00（祝日の場合は11:00〜15:00）、土曜・日曜 11:00〜15:00" },
];

const miyakoi = [
  { month: "6月", name: "東京圏在住女性×宇都宮在住男性 恋活バスツアー", pairs: 17 },
  { month: "8月", name: "恋するアフタヌーンティー", pairs: 10 },
  { month: "8月", name: "恋する金曜から夜がたり", pairs: 8 },
  { month: "9月", name: "恋するBooBooカフェ", pairs: 12 },
  { month: "10月", name: "恋活マリッジビュッフェ（2部制）", pairs: 48 },
];

export const metadata: Metadata = {
  title: "栃木県で結婚相談所を探す方へ｜県の「とちぎ結婚支援センター」は登録料10,000円・2年間、宇都宮市は39歳以下の登録料を補助、小山センターの成婚81組と民間との費用比較",
  description:
    "栃木県の「とちぎ結婚支援センター」は入会登録料10,000円で2年間利用でき、宇都宮・小山・那須塩原・足利に拠点があります。20〜30代女性の登録料無料キャンペーン、宇都宮市など19市町の登録料助成、小山センターの成婚実績、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/tochigi/" },
};

const faqs = [
  {
    q: "とちぎ結婚支援センターの料金はいくらですか？",
    a: "入会登録料は10,000円で、登録期間は2年間です。登録にかかる経費のため、退会時の返金はありません。途中で休会することはできますが、登録期間は延長されません（栃木県「とちぎ結婚支援センター登録会員募集中！」）。2026年7月16日から2027年2月28日までは、20代〜30代の女性を対象に登録料が無料になるキャンペーンが実施されています（予定数に達した時点で終了）。",
  },
  {
    q: "宇都宮市に住んでいると、登録料の補助はありますか？",
    a: "宇都宮市は、市内に住民登録のある未婚の方を対象に、センターの入会登録料を補助しています。入会登録時に39歳以下の方は自己負担額の全額（上限10,000円）、40歳以上の方は自己負担額の2分の1（上限5,000円）です。令和8年度は、令和8年4月1日から令和9年2月28日までに登録（更新を含む）した方が対象で、申請期限は令和9年3月1日です。補助は1人1回限りで、婚姻後も市内に住み続ける意思があることなどが要件です。",
  },
  {
    q: "小山市には登録料の補助や、市の結婚相談所はありますか？",
    a: "県の「とちぎ結婚支援センター登録助成市町一覧」（令和8年4月23日現在）に、小山市は掲載されていません。小山市内には県のセンターの拠点「とちぎ結婚支援センター小山」（小山駅直結のロブレ6階）があり、市の公式サイトでは令和8年6月30日現在で81組の成婚カップルが誕生したと案内されています。市はこのほか、センター小山と連携したマッチングイベントや婚活セミナーを開催しています。",
  },
  {
    q: "県外に住んでいても登録できますか？",
    a: "小山市の案内では、会員になれるのは20歳以上の独身の方で、栃木県内に住んでいるか通勤している方、または栃木県への移住に関心がある方とされています。県の結婚支援のページでは、原則として第4日曜日に東京都内（有楽町の東京交通会館）で出張登録会を実施していると案内されています。",
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
  headline: "栃木県の公的な婚活支援「とちぎ結婚支援センター」の料金・入会条件と、宇都宮市・小山市の支援、民間の結婚相談所との比較",
  description: "栃木県の「とちぎ結婚支援センター」の料金・入会条件・4拠点・成婚実績、宇都宮市の登録料補助と婚活イベント、小山市のセンター小山と婚活事業、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/tochigi/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "栃木県の結婚支援（とちぎ結婚支援センター）", item: "https://mu-su-bi-ba.com/knowledge/tochigi/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeTochigi() {
  const perYear = fee / 2;
  const miyakoiTotal = miyakoi.reduce((s, e) => s + e.pairs, 0);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "栃木県の結婚支援（とちぎ結婚支援センター）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          栃木県の結婚相談所選び：県の「とちぎ結婚支援センター」の料金・入会条件、宇都宮市・小山市の支援と、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月21日（料金・入会条件・拠点・成婚実績・市町の補助は同日に栃木県公式サイト、宇都宮市公式サイト、小山市公式サイトと県の公式チラシで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />栃木県の「とちぎ結婚支援センター」は、入会登録料10,000円で2年間利用できます
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>「とちぎ結婚支援センター」は、県や市町、関係団体で構成する「とちぎ未来クラブ」が運営する結婚支援の総合窓口です。会員登録制のマッチングシステムでお相手を探し、<strong>結婚相談員の立ち会いのもとでお引き合わせ（お見合い）</strong>を行います。拠点は<strong>宇都宮・小山・那須塩原・足利</strong>の4か所です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>入会登録料は<strong>{fee.toLocaleString()}円（登録期間2年間）</strong>で、1年あたりに換算すると{perYear.toLocaleString()}円です（当サイト算出）。2026年7月16日〜2027年2月28日は、<strong>20代〜30代の女性の登録料が無料</strong>になるキャンペーンが実施されています（予定数に達した時点で終了）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>登録料を助成する市町は、県の一覧（令和8年4月23日現在）で<strong>{joseiTowns.length}市町</strong>です（当サイトが数えた値）。<strong>宇都宮市</strong>は入会登録時39歳以下の方に自己負担額の全額（上限10,000円）を補助しています。<strong>小山市</strong>は一覧に掲載されていませんが、市内の「とちぎ結婚支援センター小山」で<strong>{oyamaCouples}組</strong>の成婚カップルが誕生しています（令和8年6月30日現在）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。センターは費用を大きく抑えられる一方、登録できるのは原則として県内在住・通勤の方または栃木県への移住に関心がある方です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">とちぎ結婚支援センターの料金と入会条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>とちぎ未来クラブ（県・市町・関係団体で構成。事務局は栃木県総合政策部 人口未来課）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>料金</td><td className={td}>入会登録料10,000円（登録期間2年間）。登録にかかる経費のため退会時の返金なし。休会はできるが登録期間は延長されない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>キャンペーン</td><td className={td}>20代〜30代の女性（県内在住・在勤、または本県への移住に関心がある方）は、2026年7月16日〜2027年2月28日に登録手続きを完了すると登録料が無料。予定数に達した時点で終了</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会員になれる方</td><td className={td}>結婚を希望し自ら努力する20歳以上の独身の方で、栃木県内に住んでいるか通勤している方、または栃木県への移住に関心がある方。マッチングシステムを使えるパソコンかスマートフォンを持ち、自分で操作できること</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要なもの</td><td className={td}>独身証明書の原本（発行から3か月以内。戸籍抄本でも可。マイナンバーカードでオンラインの独身確認を行う場合は不要）、写真付き身分証の原本（運転免許証またはマイナンバーカード）、本人のみが写ったプロフィール写真1〜2枚（3か月以内に撮影）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録の流れ</td><td className={td}>センターのホームページから仮登録 → 会員情報の入力・必要書類のアップロード → WEBまたはセンターでの面談（本人確認と利用案内） → 入会登録料の振込 → 入金確認後に本登録</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              県の公式チラシでは、登録できるのは公的書類で本人確認と独身確認をした方のみで、交際に進むまではニックネームで活動できると案内されています。プロフィールに氏名・住所・生年月日など個人を特定できる情報は公開されません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_CENTER_URL} {...ext}>栃木県「とちぎ結婚支援センター登録会員募集中！」</a>・<a href={OYAMA_CENTER_URL} {...ext}>小山市「とちぎ結婚支援センター小山のご紹介」</a>・<a href={PREF_CAMPAIGN_URL} {...ext}>栃木県 報道発表「とちぎ結婚支援センター女性登録料無料キャンペーン（20代～30代）について」</a>・<a href={PREF_FLYER_URL} {...ext}>同キャンペーンチラシ（PDF）</a>（いずれも2026年11月21日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">お引き合わせまでの流れと成婚実績</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>会員登録後、自分のプロフィールをマッチングシステムに登録し、お相手のプロフィールを検索する</li>
              <li>気になる方にお引き合わせ（お見合い）を申し込む。プロフィールには結婚後の働き方・家事分担・子どもの希望などの項目がある</li>
              <li>お引き合わせは、結婚相談員の立ち会いのもと、センターの専用ブースまたはオンラインで行う</li>
              <li>「まずは友達から」のプレ交際は最大3名まで同時に可能で、やり取りは専用チャットで行う（60日間）。互いに希望すれば交際に進む</li>
              <li>交際中も、不安なことや困りごとは結婚相談員に相談できる</li>
            </ol>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>実績の項目</th><th className={th}>公表値</th><th className={th}>算出方法・時点</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>成婚実績</td><td className={td}>毎週1組以上</td><td className={td}>2022年度〜2025年度のマッチング会員同士の成婚報告数の平均</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>交際後の成婚率</td><td className={td}>36.2％</td><td className={td}>2025年度の成婚数を2024年度の交際成立数で割った値</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>成婚までの交際期間</td><td className={td}>平均13か月</td><td className={td}>2025年10月〜2026年3月末の成婚者の平均</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>マッチング会員の成婚</td><td className={td}>300組を達成</td><td className={td}>2025年2月8日に記念セレモニーを開催</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>小山センターの成婚</td><td className={td}>81組</td><td className={td}>令和8年6月30日現在（小山市の案内）。センター全体の成婚カップルの20％以上が小山センターで成立</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              上の表の成婚率は、県のチラシに記載された算出方法による値で、登録会員全体に占める成婚者の割合ではありません。民間の結婚相談所が公表する成婚率とは定義が異なる場合があるため、単純な比較はできない点にご注意ください。登録会員数は、今回確認した県・市の公式ページには記載がありません。
            </p>
            <p>
              このほか、センターでのマッチングなどを通じて成婚したカップルには、協賛団体からの成婚祝い（協賛品）が贈呈される「とちぎハッピーマリッジ応援事業」が2025年2月8日から実施されています（数に限りがあり先着順）。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_CENTER_URL} {...ext}>栃木県「とちぎ結婚支援センター登録会員募集中！」</a>・<a href={PREF_FLYER_URL} {...ext}>「とちぎ結婚支援センター女性登録料無料キャンペーン」チラシ（PDF）</a>・<a href={PREF_HAPPY_URL} {...ext}>栃木県「とちぎハッピーマリッジ応援事業」</a>・<a href={OYAMA_CAMPAIGN_URL} {...ext}>小山市「【期間限定】とちぎ結婚支援センター女性登録料無料キャンペーン（20代～30代）」</a>・<a href={OYAMA_CENTER_URL} {...ext}>小山市「とちぎ結婚支援センター小山のご紹介」</a>（いずれも2026年11月21日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">4つの拠点の所在地と開設時間</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>拠点</th><th className={th}>所在地・電話</th><th className={th}>開設時間</th></tr></thead>
                <tbody>
                  {centers.map((c) => (
                    <tr key={c.name} className="border-t border-[#E5DCCF] align-top"><td className={td}>{c.name}</td><td className={td}>{c.addr}</td><td className={td}>{c.hours}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              宇都宮・那須塩原・足利の開設時間は県のページ（2024年3月31日更新）の記載、小山の開所時間と休業日は小山市のページの記載です。小山センターは県のページでは「水曜除く」と記載されており、案内に差があります。開設時間は変更される場合があるため、来所の前に各センターへ電話でご確認ください。小山センターには専用の駐車場がありません。
            </p>
            <p>
              県の結婚支援のページでは、原則として第4日曜日に東京都内（有楽町の東京交通会館）で出張登録会を実施していると案内されています。メールで簡易登録をした後に予約する方式です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_CENTER_URL} {...ext}>栃木県「とちぎ結婚支援センター登録会員募集中！」</a>・<a href={OYAMA_CENTER_URL} {...ext}>小山市「とちぎ結婚支援センター小山のご紹介」</a>・<a href={PREF_TOP_URL} {...ext}>栃木県「結婚支援」</a>（いずれも2026年11月21日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">宇都宮市の支援：登録料の補助と「みや恋デザイン」</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>補助額</td><td className={td}>入会登録時に39歳以下：入会登録料の自己負担額の10分の10（上限10,000円）。40歳以上：自己負担額の2分の1（上限5,000円）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>主な要件</td><td className={td}>宇都宮市に住民登録がある未婚者／市税の滞納がない／婚姻後も継続して市内に住む意思がある／この補助を過去に受けていない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象期間・申請期限</td><td className={td}>令和8年4月1日〜令和9年2月28日に登録（更新を含む）した方。申請は令和9年3月1日まで（オンライン申請または郵送）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>注意点</td><td className={td}>他の制度で登録料の補助を受けた場合は、その額を差し引いて申請する。審査に2〜3か月程度かかる</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>担当</td><td className={td}>宇都宮市 都市ブランド戦略課 移住定住促進グループ</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              補助の対象は自己負担額のため、女性登録料無料キャンペーンで登録料がかからなかった場合は、補助の対象となる費用がありません。39歳以下の男性が通常料金で登録した場合は、補助により登録料の負担が実質0円になります（当サイトの整理）。
            </p>
            <p>
              宇都宮市は、出会いや結婚を希望する方向けの婚活セミナー・交流会「みや恋デザイン」も開催しています。対象は主に市内在住・在勤の20〜39歳の独身の方（女性は市内への移住を希望する方も可）で、参加費は1回500円〜1,000円です。市のページに掲載された令和8年度の終了イベントのマッチング組数は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催月</th><th className={th}>イベント</th><th className={th}>マッチング組数</th></tr></thead>
                <tbody>
                  {miyakoi.map((e) => (
                    <tr key={e.name} className="border-t border-[#E5DCCF] align-top"><td className={td}>{e.month}</td><td className={td}>{e.name}</td><td className={td}>{e.pairs}組</td></tr>
                  ))}
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>合計</td><td className={td}>上記5回（当サイトが合計した値）</td><td className={td}>{miyakoiTotal}組</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              マッチング組数はイベント当日のマッチングの数で、交際や成婚の数ではありません。5月の宇都宮ブレックス試合観戦イベントは、マッチング組数の記載がないため表に含めていません。イベントの申込みは、とちぎ結婚支援センターのホームページで受け付けています。結婚後の住まいについては、宇都宮市が結婚に伴う住宅取得・賃借・引越し・リフォームの費用を1世帯あたり最大30万円（婚姻届受理時に夫婦ともに29歳以下の場合は最大60万円）補助しています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={UTSU_HOJO_URL} {...ext}>宇都宮市「とちぎ結婚支援センター入会登録料補助」</a>・<a href={UTSU_YOUKOU_URL} {...ext}>「宇都宮市とちぎ結婚支援センター入会登録料補助金交付要綱」（PDF）</a>・<a href={UTSU_MIYAKOI_URL} {...ext}>宇都宮市「みや恋デザイン」</a>・<a href={UTSU_SHINSEIKATSU_URL} {...ext}>宇都宮市「令和8年度宇都宮市結婚新生活支援事業」</a>（いずれも2026年11月21日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">小山市の支援：とちぎ結婚支援センター小山と婚活イベント</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              小山市では、少子化対策・定住促進の観点から結婚活動応援事業に取り組んでおり、その一環として2017年11月22日に「とちぎ結婚支援センター小山」が小山駅直結のロブレ6階に設立されました。市の公式サイトでは、令和8年6月30日現在で{oyamaCouples}組の成婚カップルが誕生し、センター全体の成婚カップルの20％以上が小山センターで成立していると案内されています。
            </p>
            <p>
              市はセンター小山と連携して、参加者全員とのローテーショントークを行うマッチングイベント「おしゃべりマッチング」を開催しています。市の案内では、男性の当選倍率は約10倍とされています。2026年12月12日には、男性限定の婚活セミナー「本気の婚活塾」（小山市役所本庁舎・定員30名・参加無料、申込みは12月2日まで）が予定されています。2026年11月28日には、宇都宮市・さくら市と合同のマッチングイベントも開催されます（募集は締め切り済み）。
            </p>
            <p>
              一方で、県の「とちぎ結婚支援センター登録助成市町一覧」（令和8年4月23日現在）に小山市は掲載されておらず、市による登録料の助成は確認できませんでした。20代〜30代の女性は県のキャンペーンで登録料が無料になりますが、男性や40歳以上の方は10,000円の登録料がかかります。また、小山市の結婚新生活支援事業補助金は令和2年度末で終了しています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={OYAMA_CENTER_URL} {...ext}>小山市「とちぎ結婚支援センター小山のご紹介」</a>・<a href={OYAMA_CAMPAIGN_URL} {...ext}>小山市「【期間限定】とちぎ結婚支援センター女性登録料無料キャンペーン（20代～30代）」</a>・<a href={OYAMA_JUKU_URL} {...ext}>小山市「男性限定婚活塾であなただけの『魅力』を磨きませんか？」</a>・<a href={OYAMA_SHINSEIKATSU_URL} {...ext}>小山市「小山市結婚新生活支援事業補助金終了について」</a>・<a href={UTSU_MIYAKOI_URL} {...ext}>宇都宮市「みや恋デザイン」</a>・<a href={PREF_JOSEI_URL} {...ext}>栃木県「とちぎ結婚支援センター登録助成市町一覧」（PDF）</a>（いずれも2026年11月21日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">登録料を助成している市町（{joseiTowns.length}市町）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              県の一覧（令和8年4月23日現在）に掲載されている、とちぎ結婚支援センターの入会登録料を助成する市町は次の{joseiTowns.length}市町です（当サイトが数えた値）。助成の金額や条件は市町ごとに異なり、一覧には記載がないため、詳細はお住まいの市町のホームページでご確認ください。
            </p>
            <p className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-4">{joseiTowns.join("・")}</p>
            <p>
              県はこのほか、2026年10月19日から、結婚を応援する県民が県公式LINEで登録できる「とちぎ結婚サポーター制度」を始めています。サポーターは、周囲の方の結婚に関する相談相手になることや、センターのイベント情報を広めることなどを担うもので、お見合いの仲介を行う制度ではありません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_JOSEI_URL} {...ext}>栃木県「とちぎ結婚支援センター登録助成市町一覧」（令和8年4月23日現在・PDF）</a>・<a href={PREF_TOP_URL} {...ext}>栃木県「結婚支援」</a>・<a href={PREF_SUPPORTER_URL} {...ext}>栃木県 報道発表「とちぎ結婚サポーター制度の運用開始等について」</a>（いずれも2026年11月21日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス・条件</th><th className={th}>1年目にかかる登録費用の目安</th><th className={th}>登録の有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>とちぎ結婚支援センター（通常）</td><td className={td}>10,000円（1年あたり換算5,000円）</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>同・20代〜30代の女性（キャンペーン期間中）</td><td className={td}>0円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>同・宇都宮市在住で39歳以下（市の補助を利用）</td><td className={td}>実質0円（登録料を立て替えた後に補助）</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>同・宇都宮市在住で40歳以上（市の補助を利用）</td><td className={td}>実質5,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/saga/" className="text-[#A08447] underline">佐賀県「さが出会いサポートセンター」</Link></td><td className={td}>5,000円</td><td className={td}>1年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/kumamoto/" className="text-[#A08447] underline">熊本県「Kumarry」（対象市町村）</Link></td><td className={td}>10,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              上の表は、公式に公表されている登録料と市の補助額から当サイトが整理した目安です。センターの費用には、お引き合わせの際の交通費や飲食代などは含まれません。費用だけを比べると、とちぎ結婚支援センターは民間の結婚相談所よりも大幅に低く抑えられます。一方で、登録できる方は原則として県内在住・通勤の方または栃木県への移住に関心がある方に限られ、相談員の対応は拠点ごとの開設時間内となります。
            </p>
            <p>
              民間の結婚相談所は、費用がかかる代わりに、担当者がお相手を提案したり、交際中の相談に継続的に応じたりするところが多くあります。栃木県内から利用できるオンライン型の結婚相談所や、東京都内・埼玉県内の結婚相談所も選択肢になります。費用と支援の手厚さのどちらを重視するかを整理したうえで、センターと民間の結婚相談所を比べることをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。佐賀県・熊本県の料金は、当サイトの各ページで各公式サイトの情報を確認した内容です。料金や補助の内容は変更される場合があります。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/area/tokyo/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">東京の結婚相談所</Link>
            <Link href="/area/saitama/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">埼玉の結婚相談所</Link>
            <Link href="/knowledge/niigata/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ハートマッチにいがた（新潟県）</Link>
            <Link href="/knowledge/nagano/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">NAGANO ai MATCH（長野県）</Link>
            <Link href="/knowledge/saga/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">さが出会いサポートセンター（佐賀県）</Link>
            <Link href="/knowledge/kumamoto/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">Kumarry（熊本県）</Link>
            <Link href="/knowledge/gifu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">おみサポ・ぎふ（岐阜県）</Link>
            <Link href="/knowledge/yamanashi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">山梨県の結婚支援</Link>
            <Link href="/knowledge/gunma/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">群馬県の結婚支援</Link>
            <Link href="/knowledge/iwaki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">いわき市の婚活支援（福島県）</Link>
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
