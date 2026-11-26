import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-26 確認）。
// ・結婚活動支援事業の全体（市独自の結婚支援事業・4市町合同婚活事業・関係機関・婚活イベント情報メール配信の登録資格25〜45歳／男性は市在住者／無料・担当課と電話）：登米市「結婚活動支援事業」（2026年11月2日更新）
// ・「とめ婚2027～Winter～」（2027年1月23日・長沼ボート場クラブハウス・25〜45歳の独身男女各25人程度・男性は市在住者・参加費3,500円・申込締切2027年1月6日・事務局 仙台リビング新聞社）：登米市「登米市結婚支援事業について」（2026年11月18日更新）
// ・4市町合同婚活事業「お見合いトラベルin一関・平泉」（2026年12月12〜13日・独身男女各25人・男性は4市町在住者・参加費11,000円・宿泊費等は含まない・申込締切12月2日）：登米市「4市町(栗原市・登米市・一関市・平泉町)による取り組み」（2026年10月5日更新）
// ・市単独の婚活イベントの開始年度（令和7年度）・R8事業費1,102,420円・R8は年2回（男女各10名／各15名）・R7実績（参加者33人・申込者56人・カップル6組・満足度83.3%）とR8目標、仙台方面への周知と送迎バスの方針：登米市「地域少子化対策重点推進交付金実施計画書」（PDF、市民協働課）
// ・4市町合同婚活事業の開始年度（平成27年度）・R8事業費400,000円（負担金）・R8は一関市が事務局・事前セミナーと婚活イベント各1回（定員50人）・R6実績（セミナー47人・イベント47人・カップル成立数6〔単位「人」〕・満足度63.8%）：同上
// ・登米市の婚姻件数183件（令和6年）・KPI目標178組（令和8年）・合計特殊出生率1.06（令和6年）・婚姻率8.79（20〜49歳人口に対する令和6年の婚姻率）：同上（参考指標）
// ・結婚新生活支援事業補助金（対象の婚姻期間・要件・上限40万円／30万円・対象経費・講座受講等の要件・予算終了で受付終了・子育て支援課と電話）：登米市「登米市結婚新生活支援事業補助金について」（2026年6月16日更新）
// ・結婚新生活支援の事業開始年度（令和3年度）・R8事業費6,336,000円・新規26世帯見込（うち29歳以下21世帯）・R7申請世帯数見込23世帯（12月まで実績16世帯）・国基準の上限60万円に対し市独自基準で40万円／30万円：登米市「令和8年度実施計画書」（PDF、子育て支援課）
// ・みやマリ！出張登録会（2026年11月14日・迫公民館・終了済み）、入会登録料11,000円（2年間有効）・20代は5,500円・月会費と成婚手数料なし・対象20〜49歳・独身証明書は各総合支所で発行（手数料300円）・センター所在地と電話：登米市「みやぎ結婚支援センター『みやマリ！』からのお知らせ」（2026年10月30日更新）
// ・みやマリ！の登録料助成実施市町村一覧（栗原市は全額・一関市は半額〔上限5,000円〕など21市町。登米市の掲載なし）：みやぎ結婚支援センター「登録料助成実施市町村一覧」（2026-11-26 時点）
// ・みやぎ青年婚活サポートセンター（25〜55歳・仙台市宮城野区・電話）：登米市「みやぎ青年婚活サポートセンターについて」（2025年1月30日更新）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const CITY = "https://www.city.tome.miyagi.jp";
const KONKATSU_URL = `${CITY}/shiminkyodo/shisejoho/machizukuri/sinotorikumi-top/konkatsujigyou/index.html`;
const TOMEKON_URL = `${CITY}/shiminkyodo/konkatsu/tomeshikekkonsiennzigyou.html`;
const YONSHI_URL = `${CITY}/shiminkyodo/shisejoho/machizukuri/sinotorikumi-top/konkatsujigyou/4shimachi.html`;
const KONKATSU_PLAN_PDF = `${CITY}/shiminkyodo/shisejoho/machizukuri/sinotorikumi-top/konkatsujigyou/documents/konkatsukeikaku.pdf`;
const SHINSEIKATSU_URL = `${CITY}/kosodateshien/kekkonsinseikatu.html`;
const SHINSEIKATSU_PLAN_PDF = `${CITY}/kosodateshien/documents/r8jissikeikakusyo.pdf`;
const MIYAMARI_CITY_URL = `${CITY}/shiminkyodo/shisejoho/machizukuri/sinotorikumi-top/konkatsujigyou/syuttyoutourokukai.html`;
const PISA_CITY_URL = `${CITY}/shiminkyodo/shisejoho/machizukuri/sinotorikumi-top/konkatsujigyou/miyagiseinen.html`;
const MIYAMARI_SUPPORT_URL = "https://miya-mari.net/support_town/";

const tomePlan = { budget: 1102420, participantsR7: 33, applicantsR7: 56, couplesR7: 6, satisfactionR7: 83.3, participantsTarget: 50, applicantsTarget: 80, couplesTarget: 10 };
const yonshiPlan = { budget: 400000, seminarR6: 47, eventR6: 47, couplesR6: 6, satisfactionR6: 63.8 };
const shinPlan = { budget: 6336000, households: 26, under29: 21, appliedR7: 23, actualR7Dec: 16 };

export const metadata: Metadata = {
  title: "登米市の婚活支援｜市主催「とめ婚」・4市町合同婚活イベント・結婚新生活支援（最大40万円）とみやマリの費用",
  description:
    "登米市は市主催の婚活イベント「とめ婚」と、栗原市・一関市・平泉町との合同婚活イベントを開いています。新婚世帯には住居費・引越費用を最大40万円補助します。県のみやマリ！の登録料（市の助成なし）と民間の結婚相談所の費用も公式情報で整理しています。",
  alternates: { canonical: "/knowledge/tome/" },
};

const faqs = [
  {
    q: "登米市に市営の結婚相談所はありますか？",
    a: "2026年11月26日時点で、登米市の公式サイトで確認できた結婚支援は、市主催の婚活イベント（とめ婚）、栗原市・一関市・平泉町との4市町合同婚活イベント、婚活イベント情報のメール配信、結婚新生活支援事業補助金の4つです。市が運営する1対1のお見合い事業（市営の結婚相談所）の案内は確認できませんでした。1対1のお見合いを希望する場合は、市が関係機関として案内している宮城県の「みやぎ結婚支援センター『みやマリ！』」などを利用する形になります。",
  },
  {
    q: "「とめ婚2027～Winter～」には誰が参加できますか？",
    a: "2027年3月31日時点で25歳から45歳の独身男女で、定員は各25人程度です。男性は登米市在住者に限られ、女性は居住地の制限がありません。応募者が多い場合は抽選です。開催は2027年1月23日（土）午前11時〜午後4時、会場は長沼ボート場クラブハウス、参加費は3,500円（体験・飲食代を含む、事前振込）です。申込締切は2027年1月6日（水）で、仙台リビング新聞社のウェブページから申し込みます。",
  },
  {
    q: "登米市民がみやマリ！に登録すると、市から登録料の助成はありますか？",
    a: "2026年11月26日時点で、みやマリ！の「登録料助成実施市町村一覧」に登米市は掲載されておらず、登米市の公式サイトでも登録料助成の案内は確認できませんでした。そのため登録料は通常どおり11,000円（2年間有効、20代は5,500円）です。近隣では栗原市が全額、一関市が半額（上限5,000円）の助成を実施していると同一覧に掲載されています。制度は年度ごとに変わる可能性があるため、登録前に市民協働課（0220-22-2173）にご確認ください。",
  },
  {
    q: "結婚新生活支援事業補助金はいくらもらえますか？",
    a: "2026年1月1日から2027年3月31日までに婚姻届が受理され、婚姻日に夫婦双方が39歳以下である世帯が対象です。補助上限は、夫婦双方が29歳以下の世帯が40万円、それ以外の世帯が30万円です。対象経費は、市内での住宅の取得費用、住宅の賃借費用（家賃・共益費3か月分、敷金、礼金、仲介手数料）、市内への引越費用で、2026年4月1日から2027年3月31日までに支出したものに限られます。夫婦の所得の合計が500万円未満であることや、夫婦双方が指定の講座の受講などを行うことも要件です。予算がなくなり次第受付終了のため、事前に子育て支援課（0220-58-5562）へ相談するよう案内されています。",
  },
  {
    q: "婚活イベントの情報はどこで受け取れますか？",
    a: "登米市の「婚活イベント情報メール配信」に登録すると、市が実施する婚活イベントの情報がメールで届きます。登録は無料で、登録資格は25歳〜45歳（46歳になる前日まで）の独身男女です。男性は登米市在住者に限られます。登録フォームは市の公式ページ「結婚活動支援事業」に掲載されています。",
  },
  {
    q: "46歳以上の場合、登米市で利用できる結婚支援はありますか？",
    a: "市主催の婚活イベントと4市町合同婚活イベント、イベント情報メールは、いずれも対象が45歳までです。みやマリ！は登録時の年齢が20歳〜49歳の方が対象です。市が関係機関として案内しているみやぎ青年婚活サポートセンター（仙台市宮城野区）は25歳から55歳までの独身の方（初婚・再婚を問わない）が対象と、市のページに記載されています（同ページの更新日は2025年1月30日）。56歳以上の方は、民間の結婚相談所が主な選択肢になります。入会できる年齢は各社の規定をご確認ください。",
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
  headline: "登米市の婚活支援：市主催の婚活イベント「とめ婚」、4市町合同婚活イベント、結婚新生活支援とみやマリ！・民間の結婚相談所の比較",
  description:
    "登米市主催の婚活イベント「とめ婚」と4市町合同婚活イベントの日程・実績、結婚新生活支援事業補助金（最大40万円）、みやマリ！の登録料、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-26",
  dateModified: "2026-11-26",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/tome/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "登米市の婚活（とめ婚・結婚新生活支援）", item: "https://mu-su-bi-ba.com/knowledge/tome/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeTome() {
  const perYear = (11000 / 2).toLocaleString();
  const perYear20s = (5500 / 2).toLocaleString();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "登米市の婚活（とめ婚・結婚新生活支援）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          登米市の婚活支援：市主催の婚活イベント「とめ婚」、4市町合同婚活イベント、結婚新生活支援とみやマリ！・民間の結婚相談所の比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月26日（市の事業は同日に登米市公式サイトと市の実施計画書、県のセンターはみやぎ結婚支援センター「みやマリ！」公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />登米市の結婚支援は「市主催の婚活イベント」「4市町合同婚活イベント」「結婚新生活支援」が中心です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>登米市は令和7年度から市単独の婚活イベントを開いています。次回は<strong>「とめ婚2027～Winter～」（2027年1月23日、参加費3,500円、申込締切1月6日）</strong>です。対象は25〜45歳の独身男女で、<strong>男性は登米市在住者に限られ、女性は居住地の制限がありません</strong>。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>栗原市・一関市・平泉町と合同の<strong>「お見合いトラベルin一関・平泉」（2026年12月12〜13日、参加費11,000円、申込締切12月2日）</strong>も募集中です（2026年11月26日時点）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>市内で新生活を始める新婚世帯には、住居費・引越費用を<strong>最大40万円</strong>（夫婦双方が29歳以下の場合。それ以外の39歳以下の世帯は30万円）補助しています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>県のみやマリ！の入会登録料は11,000円（2年間有効、20代は5,500円）です。<strong>登米市はみやマリ！の登録料助成実施市町村一覧に掲載されていません</strong>。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">登米市から利用できる公的な結婚支援の一覧</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              登米市では、婚活イベントをまちづくり推進部市民協働課が、結婚新生活支援を福祉事務所子育て支援課が担当しています。市の事業と、市が関係機関として案内している県などのセンターを、当サイトで次のとおり整理しました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>名称・運営</th><th className={th}>内容</th><th className={th}>費用</th><th className={th}>主な条件</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={TOMEKON_URL} {...ext}>登米市結婚支援事業（とめ婚）</a><br />登米市</td><td className={td}>市主催の婚活イベント。令和8年度は年2回の開催を計画</td><td className={td}>とめ婚2027～Winter～は3,500円</td><td className={td}>25〜45歳の独身男女。男性は登米市在住者、女性は居住地制限なし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={YONSHI_URL} {...ext}>4市町合同婚活事業</a><br />栗原市・登米市・一関市・平泉町</td><td className={td}>4市町が連携して開く婚活イベントと事前セミナー</td><td className={td}>お見合いトラベルは11,000円（宿泊費などは別）</td><td className={td}>25〜45歳の独身男女。男性は4市町の在住者、女性は居住地制限なし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={KONKATSU_URL} {...ext}>婚活イベント情報メール配信</a><br />登米市</td><td className={td}>市が実施する婚活イベントの情報をメールで配信</td><td className={td}>無料</td><td className={td}>25歳〜45歳（46歳になる前日まで）の独身男女。男性は登米市在住者</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={SHINSEIKATSU_URL} {...ext}>結婚新生活支援事業補助金</a><br />登米市</td><td className={td}>市内で新生活を始める新婚世帯の住居費・引越費用の一部を補助</td><td className={td}>上限40万円（夫婦双方29歳以下）・30万円（その他）を受け取れる</td><td className={td}>婚姻日に夫婦双方が39歳以下、夫婦の所得の合計が500万円未満など</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={MIYAMARI_CITY_URL} {...ext}>みやぎ結婚支援センター「みやマリ！」</a><br />宮城県</td><td className={td}>AIを活用したマッチングシステムによる会員制のマッチング支援と婚活イベント</td><td className={td}>入会登録料11,000円（2年間有効）。20代は5,500円。月会費・成婚手数料なし</td><td className={td}>20〜49歳で県内在住・在勤、または将来宮城県へ移住予定の独身の方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={PISA_CITY_URL} {...ext}>みやぎ青年婚活サポートセンター（みやぎPISA）</a><br />財団法人宮城県青年会館（市のページの記載）</td><td className={td}>交流会の開催、結婚相談、会員へのパートナー紹介</td><td className={td}>当サイトでは料金を確認していません</td><td className={td}>25歳から55歳までの独身の方（初婚・再婚を問わない）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              当サイトでは2026年11月26日時点で、市が運営する1対1のお見合い事業（市営の結婚相談所）や、みやマリ！の登録料に対する登米市の助成の案内を、登米市の公式サイトで確認できませんでした。みやぎ青年婚活サポートセンターの情報は、市のページ（2025年1月30日更新）の記載にもとづいています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={KONKATSU_URL} {...ext}>登米市「結婚活動支援事業」（2026年11月2日更新）</a>・<a href={TOMEKON_URL} {...ext}>「登米市結婚支援事業について」（2026年11月18日更新）</a>・<a href={YONSHI_URL} {...ext}>「4市町(栗原市・登米市・一関市・平泉町)による取り組み」（2026年10月5日更新）</a>・<a href={SHINSEIKATSU_URL} {...ext}>「登米市結婚新生活支援事業補助金について」（2026年6月16日更新）</a>・<a href={MIYAMARI_CITY_URL} {...ext}>「みやぎ結婚支援センター『みやマリ！』からのお知らせ」（2026年10月30日更新）</a>・<a href={PISA_CITY_URL} {...ext}>「みやぎ青年婚活サポートセンターについて」（2025年1月30日更新）</a>（いずれも2026年11月26日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">市主催の婚活イベント「とめ婚」</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              市の実施計画書によると、令和6年度の4市町合同婚活イベントで婚活イベントの開催を求める声が多かったことから、登米市は令和7年度から市単独の婚活イベントを開いています。2026年11月26日時点で募集中のイベントは次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>とめ婚2027～Winter～</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>開催日時</td><td className={td}>2027年1月23日（土）午前11時〜午後4時</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>内容</td><td className={td}>男女のグループで「伊達の純粋赤豚」と地元の野菜を使った豚まんを作り、ランチとトークタイム。1対1トークやチーム対抗のクイズ大会など</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象者</td><td className={td}>25歳から45歳（2027年3月31日時点）の独身男女各25人程度。男性は登米市在住者に限る、女性は居住地制限なし。応募者多数の場合は抽選</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会場</td><td className={td}>長沼ボート場クラブハウス（登米市迫町北方字天形114-2）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>参加費</td><td className={td}>3,500円（体験・飲食代を含む、事前振込）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申込方法・締切</td><td className={td}>仙台リビング新聞社のウェブページから申し込み。締切は2027年1月6日（水）。参加の可否は1月9日（土）までに申込者全員に通知</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>事務局</td><td className={td}>仙台リビング新聞社（022-265-4305）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              市の実施計画書では、令和8年度は年2回（男女各10名の計20名、男女各15名の計30名）の開催を計画しており、事業費は{tomePlan.budget.toLocaleString()}円（委託料）です。令和7年度の実績と令和8年度の目標は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>令和7年度の実績</th><th className={th}>令和8年度の目標</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>婚活イベントへの申込者数</td><td className={td}>{tomePlan.applicantsR7}人</td><td className={td}>{tomePlan.applicantsTarget}人</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>婚活イベントの参加者数</td><td className={td}>{tomePlan.participantsR7}人</td><td className={td}>{tomePlan.participantsTarget}人</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>カップル成立数</td><td className={td}>{tomePlan.couplesR7}組</td><td className={td}>{tomePlan.couplesTarget}組</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>参加者の満足度</td><td className={td}>{tomePlan.satisfactionR7}%</td><td className={td}>80%</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              計画書には、男性の参加申し込みが多く定員により参加できない方が多いこと、仙台方面への周知と仙台からの送迎バスにより女性が参加しやすくしていく方針が書かれています。参加を希望する男性は、申込者が定員を上回り抽選になる可能性があることを前提に、早めに申し込むのが目安です。市が実施する婚活イベントの情報は、無料の「婚活イベント情報メール配信」に登録すると届きます（登録資格は25歳〜45歳の独身男女、男性は登米市在住者）。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TOMEKON_URL} {...ext}>登米市「登米市結婚支援事業について」（2026年11月18日更新）</a>・<a href={KONKATSU_PLAN_PDF} {...ext}>「地域少子化対策重点推進交付金実施計画書」（PDF、実施期間2026年4月1日〜2027年3月31日）</a>・<a href={KONKATSU_URL} {...ext}>「結婚活動支援事業」（2026年11月2日更新）</a>（いずれも2026年11月26日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">4市町合同婚活イベント（栗原市・登米市・一関市・平泉町）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              登米市は、同じ課題を抱える栗原市・一関市（岩手県）・平泉町（岩手県）と連携し、広域で男女の出会いの場をつくる交流イベントを開いています。市の実施計画書によると、この事業は平成27年度に始まり、令和8年度は一関市が事務局を担います。登米市の負担金は{yonshiPlan.budget.toLocaleString()}円です。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>お見合いトラベルin一関・平泉（令和8年度）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>開催日程</td><td className={td}>2026年12月12日（土）・13日（日）の2日間（貸切バスツアー）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象者・定員</td><td className={td}>25歳から45歳（開催日時点）の独身男女各25人。男性は4市町在住者に限る、女性は居住地制限なし。応募者多数の場合は抽選</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>参加費</td><td className={td}>11,000円（食事・アクティビティ代・現地移動費込み。宿泊費、集合場所までの往復交通費、個人的な飲食・お土産代などは含まない）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申込方法・締切</td><td className={td}>「お見合いトラベル」公式LINEから申し込み。締切は2026年12月2日（水）。12月4日（金）に参加の可否を通知</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>問い合わせ</td><td className={td}>お見合いトラベル事務局（070-8999-4468）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              令和6年度の実績は、事前セミナーの参加者{yonshiPlan.seminarR6}人、婚活イベントの参加者{yonshiPlan.eventR6}人、カップル成立数{yonshiPlan.couplesR6}（計画書の単位は「人」）、参加者の満足度{yonshiPlan.satisfactionR6}%です。令和8年度の目標は、セミナー・イベントの参加者各50人、カップル成立数10です。計画書では、イベントの際にスタッフがマッチングからアフターフォローまで支援し、県の結婚支援センターへの登録を促すとされています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={YONSHI_URL} {...ext}>登米市「4市町(栗原市・登米市・一関市・平泉町)による取り組み」（2026年10月5日更新）</a>・<a href={KONKATSU_PLAN_PDF} {...ext}>「地域少子化対策重点推進交付金実施計画書」（PDF）</a>（いずれも2026年11月26日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚新生活支援事業補助金（最大40万円）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容（令和8年度）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象となる婚姻</td><td className={td}>2026年1月1日から2027年3月31日までに婚姻届を提出し、受理された夫婦</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>補助上限額</td><td className={td}>夫婦双方が29歳以下の世帯：40万円／それ以外の世帯（夫婦双方が39歳以下）：30万円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象経費</td><td className={td}>市内での住宅の取得費用（新築・建売・中古住宅の購入）、住宅の賃借費用（家賃・共益費3か月分、敷金、礼金、仲介手数料）、市内への引越費用。2026年4月1日〜2027年3月31日に支出したもの</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>主な要件</td><td className={td}>婚姻日に夫婦双方が39歳以下／夫婦の所得の合計（貸与型奨学金の返済額を差し引いた額）が500万円未満／過去にこの補助金を受けていない／市税の滞納がない／住居の取得費について登米市住まいサポート事業補助金を受けない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>講座などの要件</td><td className={td}>夫婦双方が、ライフデザイン支援講座、プレコンセプションケアに関する講座、医療機関への妊娠・出産に関する相談、共家事・共育て講座のいずれかを受講または実施</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>問い合わせ</td><td className={td}>福祉事務所子育て支援課（0220-58-5562）。予算がなくなり次第受付終了のため、事前相談を案内</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              勤務先から住宅手当が支給されている場合は、その額を除いて計算します。市の令和8年度実施計画書によると、この事業は令和3年度に始まりました。令和8年度の事業費は{shinPlan.budget.toLocaleString()}円で、新規{shinPlan.households}世帯（うち夫婦ともに29歳以下が{shinPlan.under29}世帯）の申請を見込んでいます。令和7年度の申請世帯数は{shinPlan.appliedR7}世帯の見込み（12月までの実績は{shinPlan.actualR7Dec}世帯）です。
            </p>
            <p>
              同じ計画書では、国の基準の補助上限が60万円であるのに対し、登米市は独自の基準で40万円（29歳以下）・30万円としていることが記載されています。他の自治体の情報を見て60万円と考えている方は、登米市の上限額が異なる点にご注意ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SHINSEIKATSU_URL} {...ext}>登米市「登米市結婚新生活支援事業補助金について」（2026年6月16日更新）</a>・<a href={SHINSEIKATSU_PLAN_PDF} {...ext}>「令和8年度実施計画書」（PDF、子育て支援課）</a>（いずれも2026年11月26日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">県のみやマリ！の登録料と、登米市の助成の状況</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              宮城県は、AIを活用したマッチングシステムによる会員登録制のマッチング支援や婚活イベントを行う「みやぎ結婚支援センター『みやマリ！』」を開設しています。登米市のページに記載された内容では、入会登録料は11,000円（2年間有効）、20代の方は5,500円で、月会費と成婚手数料はかかりません。対象は20歳から49歳の県内在住・在勤、または将来宮城県へ移住予定の独身の方で、スマートフォンを持ち操作できることが条件です。登録には写真付き本人確認書類、独身証明書（発行から3か月以内。市の各総合支所で発行、手数料300円）、収入証明書が必要です。
            </p>
            <p>
              みやマリ！の「登録料助成実施市町村一覧」には、2026年11月26日時点で21市町が掲載されています。近隣では栗原市が全額、一関市（岩手県）が半額（上限5,000円）の助成を実施していますが、<strong>登米市は掲載されていません</strong>。登米市の公式サイトでも、みやマリ！の登録料助成の案内は確認できませんでした。登米市民の場合、登録料は1年あたり{perYear}円（20代は{perYear20s}円）の負担になります（当サイト算出）。
            </p>
            <p>
              登米市内では、2026年11月14日に迫公民館でみやマリ！の出張登録会が開かれました（終了済み）。センターの所在地は仙台市青葉区中央二丁目11番19仙南ビル5階で、来所には事前予約が必要です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MIYAMARI_CITY_URL} {...ext}>登米市「みやぎ結婚支援センター『みやマリ！』からのお知らせ」（2026年10月30日更新）</a>・<a href={MIYAMARI_SUPPORT_URL} {...ext}>みやぎ結婚支援センター「登録料助成実施市町村一覧」</a>（いずれも2026年11月26日確認）。1年あたりの負担額は当サイト算出です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">登米市の婚姻件数</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              市の地域少子化対策重点推進交付金の実施計画書の参考指標では、登米市の婚姻件数は183件（令和6年）、合計特殊出生率は1.06（令和6年）です。婚姻率は「20〜49歳人口に対する令和6年の婚姻率」として8.79と記載されています。市は少子化対策全体の目標として、令和8年の婚姻件数を178組としています。計画書は、市の実情として「適齢年齢世代の人口流出」「婚姻年齢の上昇」「有配偶者率低下」の傾向を挙げ、出会いの場をつくる必要があるとしています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={KONKATSU_PLAN_PDF} {...ext}>登米市「地域少子化対策重点推進交付金実施計画書」（PDF）</a>・<a href={SHINSEIKATSU_PLAN_PDF} {...ext}>「令和8年度実施計画書」（PDF）</a>（いずれも2026年11月26日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な支援と民間の結婚相談所の費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>お相手の探し方</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>とめ婚（市主催の婚活イベント）</td><td className={td}>1回3,500円（とめ婚2027～Winter～の場合）</td><td className={td}>イベントでの交流・マッチング</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>4市町合同婚活イベント</td><td className={td}>11,000円（お見合いトラベルの場合。宿泊費などは別）</td><td className={td}>イベントでの交流・マッチング</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>みやマリ！（登米市の助成なし）</td><td className={td}>11,000円（2年間有効。1年あたり{perYear}円・当サイト算出）。20代は5,500円</td><td className={td}>AIを活用したマッチング・婚活イベント</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              登米市の公的な支援は、費用を抑えて出会いの機会を得られる点が特長です。一方で、市の婚活イベントは年数回で対象が45歳まで、みやマリ！は49歳までに限られます。担当者による継続的な紹介や交際中の助言を受けたい方、46歳以上の方には、民間の結婚相談所が選択肢になります。登米市から通える仙台の結婚相談所や、自宅から活動できるオンライン型と比べて検討するのが目安です。結婚が決まった後は、条件に当てはまれば市の結婚新生活支援事業補助金を住居費・引越費用に充てられます。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。仙台の結婚相談所は<Link href="/area/sendai/" className="underline">仙台の結婚相談所</Link>で整理しています。公的な支援の料金は、各公式サイトで2026年11月26日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/kitakyushu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">北九州市の婚活支援</Link>
            <Link href="/knowledge/kurashiki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">倉敷市の婚活支援（くら婚）</Link>
            <Link href="/knowledge/setagaya/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">世田谷区の婚活支援（せた婚）</Link>
            <Link href="/knowledge/shiojiri/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">塩尻市の結婚相談（NAGANO ai MATCH窓口）</Link>
            <Link href="/area/sendai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">仙台・宮城の結婚相談所</Link>
            <Link href="/knowledge/yamagata/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">山形県の結婚支援（Aiナビ）</Link>
            <Link href="/knowledge/akita/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">あきた結婚支援センター</Link>
            <Link href="/knowledge/iwaki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">いわき市の婚活支援</Link>
            <Link href="/knowledge/hachinohe/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">八戸市の婚活支援</Link>
            <Link href="/knowledge/nakatsu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">中津市の婚活（えんむす部登録料助成）</Link>
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
