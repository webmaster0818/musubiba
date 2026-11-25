import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-25 確認）。
// ・センターの位置づけ（山口県が設置する独身者の出会いと結婚のサポート拠点、県内4か所に窓口、お引き合わせから成婚までのフォロー、イベントの開催・情報発信、やまぐち結婚応縁企業）：やまぐち結婚応縁センター「当センターについて」
// ・平成27年9月に山口県が開設、4か所のどのセンターでも受けられるサービスは同じ、センターから特定の方を紹介しない、お見合いの実現を約束しない：同 よくあるご質問「当センターについて」
// ・入会できる方（20歳以上の結婚を希望する独身の方）、入会金・更新料は無料、ネット接続料・お見合いの飲食料等は個人負担、必要書類3点、オンラインまたは来所で手続き（10日程度かかる場合あり）、お見合い30分、お友だち期間最大60日、交際成立で氏名と電話番号を伝える：同「マッチング会員」
// ・来所時の必要書類の詳細（独身証明書は発行後6か月以内の原本、外国籍の方の書類、写真の規格）、申込みは1日1回1人まで、お見合い調整以降の相手が2人で新規申込み不可、回答期限5日、お見合いは成立日から29日以内・スタッフは同席しない・飲食費は実費、オンラインお見合い30分、交際中はおおむね2か月ごとに状況確認：同「マッチング会員利用規程」（平成27年9月3日制定・令和7年4月1日改正）
// ・登録有効期間は本登録日から1年・更新は2回まで（最長3年）、オンライン手続きの本人確認書類は運転免許証かマイナンバーカードのみ、県外在住でも登録可、戸籍抄本は不可：同 よくあるご質問「新規登録について」
// ・更新案内のメール（60日前・30日前）、1・2回目の更新は独身証明書不要、休会中も登録期間は延長されない：同 よくあるご質問「更新・休会・復会・退会について」
// ・相談は完全予約制・30分・来所またはZoom、自宅閲覧は時間の制限なし・センター閲覧は30分、「AIからのおすすめ」は毎週金曜更新：同 よくあるご質問「ご活動について」
// ・4か所の窓口の所在地・受付時間・来所は事前予約制：同「当センターアクセス」
// ・成婚数292組（令和8年10月31日時点）：同 公式トップページ
// ・令和8年4月から運営委託事業者が学校法人YIC学院に変更（旧：株式会社パソナ パソナ・山口）：同 お知らせ「★令和８年度から運営体制が変わります★」（2026年3月31日）
// ・男性マッチング会員限定のコミュニケーション講座（11月29日）：同 お知らせ（2026年11月9日）
// ・やまぐち恋叶パーティーin防府（12月20日・30〜45歳・男女各50名・会費2,000円・締切11月25日・抽選）：同 お知らせ（2026年10月16日）
// ・やまぐち結婚応援団（民間の非営利団体・飲食店等が出会いの場づくりを行う登録制度、結婚斡旋業者は対象外）：同「やまぐち結婚応援団」
// ・マッチング会員登録状況（R7.3.31現在 男性584人・女性379人・計963人と年代別内訳）、お見合い状況（H27.9〜R7.3累計 申込66,218件・実施9,979件・お友だち成立1,309件・交際成立2,200件・結婚報告251件）、令和6年度のマッチングイベント、市町の結婚支援事業（GO-ENセンター、サザンセト、宇部市、イベント開催補助、成婚祝金、結婚新生活支援の実施市町）：やまぐち子育て連盟「やまぐち婚活応縁隊 活動の手引き」（令和7年4月・PDF）
// ・令和7年度予算「あなたの希望を叶える結婚応縁事業」103,000千円、会員増に向けた会費の無料化：山口県 令和7年度当初予算資料（PDF）
// ・やまぐちマッチングイベント（今年度は県内5か所、夏期は下関市・周南市、各回男女各30名、参加費2,000円）：山口県 記者配布資料（令和8年6月23日・PDF）
// ・GO-ENセンターの会員資格、入会登録料・更新登録料2,000円、有効期限は登録年度の3月31日、令和4〜7年度は無料とする附則：長門市掲載「ＧＯ－ＥＮセンター会員規約」（PDF）。令和8年度の扱いは2026-11-25時点で公式情報を確認できず（本文に記載）
// ・県内市町による民間結婚相談所の入会費用の補助：2026-11-25時点で公式情報を確認できず（本文に記載）
// ・岡山県・大分県・兵庫県・三重県のセンター等の料金：当サイト /knowledge/okayama/・/knowledge/oita/・/knowledge/hyogo-deai/・/knowledge/mie/ の確認内容
// ・パートナーエージェントのオンライン店（山口）：当サイト /review/partner-agent/（2026年11月20日確認）。エン婚活エージェントの会員の多い地域：当サイト /review/en-konkatsu/（2026年10月27日確認）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const MSC = "https://www.yamaguchi-msc.jp";
const TOP_URL = `${MSC}/`;
const ABOUT_URL = `${MSC}/about/`;
const ACCESS_URL = `${MSC}/access/`;
const MATCHING_URL = `${MSC}/matching/`;
const RULES_URL = `${MSC}/terms/rules.php`;
const FAQ_CENTER_URL = `${MSC}/contents/faq/center`;
const FAQ_ENTRY_URL = `${MSC}/contents/faq/entry`;
const FAQ_PROCESS_URL = `${MSC}/contents/faq/process`;
const FAQ_ACTIVITY_URL = `${MSC}/contents/faq/activity`;
const NEWS_OPERATOR_URL = `${MSC}/contents/news_topics/979`;
const NEWS_HOFU_URL = `${MSC}/contents/news_topics/1075`;
const NEWS_SEMINAR_URL = `${MSC}/contents/news_topics/1094`;
const CHEERING_URL = `${MSC}/cheering/`;
const HANDBOOK_URL = "https://www.pref.yamaguchi.lg.jp/uploaded/attachment/210377.pdf";
const BUDGET_URL = "https://www.pref.yamaguchi.lg.jp/uploaded/life/291440_550454_misc.pdf";
const PRESS_EVENT_URL = "https://www.pref.yamaguchi.lg.jp/uploaded/attachment/243163.pdf";
const GOEN_KIYAKU_URL = "https://www.city.nagato.yamaguchi.jp/uploaded/life/41724_171397_misc.pdf";

const marriages = 292;
const members = { male: 584, female: 379, total: 963 };
const omiaiHeld = 9979;
const dating = 2200;
const reports = 251;

const venues = [
  { name: "やまぐち結婚応縁センター（山口市）", addr: "山口市神田町1-80 パルトピアやまぐち（防長青年館）3階", hours: "月・木・金 12:00〜19:00、土・日・祝 10:00〜17:00（火・水・年末年始は休み）" },
  { name: "下関サポートセンター", addr: "下関市豊前田町三丁目3-1 海峡メッセ下関3階", hours: "第1・3・5の金・日曜日、第2・4の月・土曜日。月・金 12:00〜17:00、土・日・祝 11:00〜16:00（火〜木・年末年始は休み）" },
  { name: "萩サポートセンター", addr: "萩市江向531-1 萩健康福祉センター2階", hours: "金曜日 10:00〜17:00（月〜木・土・日・祝・年末年始は休み）" },
  { name: "岩国サポートセンター", addr: "岩国市三笠町一丁目1-1 岩国総合庁舎2階", hours: "第1・3・5の月・土曜日、第2・4の金・日曜日。月・金 12:00〜17:00、土・日・祝 11:00〜16:00（火〜木・年末年始は休み）" },
];

export const metadata: Metadata = {
  title: "山口県で結婚相談所を探す方へ｜県の「やまぐち結婚応縁センター（出逢いませ山口）」は入会金・更新料無料、県内4か所の窓口・成婚数292組と民間との費用比較",
  description:
    "山口県が設置する「やまぐち結婚応縁センター（出逢いませ山口）」は入会金・更新料が無料で、20歳以上の独身の方が登録できます。必要書類、登録期間（1年・更新2回まで）、県内4か所の窓口、成婚数292組（2026年10月31日時点）、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/yamaguchi/" },
};

const faqs = [
  {
    q: "やまぐち結婚応縁センター（出逢いませ山口）の料金はいくらですか？",
    a: "センターの公式サイトでは、マッチング会員の入会金・更新料は無料と案内されています。インターネットの接続料や、お見合いなどにかかる飲食代は個人の負担です。このほか、登録に必要な独身証明書の取得には、本籍地の市区町村が定める手数料がかかります。",
  },
  {
    q: "山口県外に住んでいても登録できますか？",
    a: "センターのよくあるご質問では、20歳以上で結婚を希望する独身の方であれば、県外にお住まいでも登録できると案内されています。手続きはオンラインまたは県内の窓口への来所（事前予約制）で行い、どちらも手続きの内容に違いはありません。オンラインの場合、写真付きの本人確認書類は運転免許証かマイナンバーカードに限られます。",
  },
  {
    q: "センターがお相手を紹介してくれますか？",
    a: "センターのよくあるご質問では、システムを使って会員が自分で会いたい方を選んでお見合いを申し込む方式で、センターから特定の方をおすすめしたり紹介したりすることはないと説明されています。活動履歴をもとに相性の良さそうな異性を表示する「AIからのおすすめ」機能があり、毎週金曜日に更新されます。お見合いや交際の悩みは、予約制の相談（30分・来所またはZoom）で相談員に相談できます。",
  },
  {
    q: "登録の有効期間はどのくらいですか？",
    a: "登録の有効期間は本登録日から1年間で、更新は2回まで、最長3年間活動できます。3回目の更新はできないため、続けて活動する場合は新規登録の手続きが必要です。更新の案内は有効期限の60日前と30日前にメールで届き、1回目・2回目の更新では独身証明書は不要です。休会しても登録期間は延長されません。",
  },
  {
    q: "萩市・長門市・美祢市にある「GO-ENセンター」とは何ですか？",
    a: "萩市・長門市・美祢市の3市で組織するGO-ENプロジェクト実行委員会が運営する結婚相談窓口です。3市のいずれかに住む20歳以上の独身の方と、市外に住み結婚後に3市のいずれかへ定住する意思のある20歳以上の独身の方が対象です。会員規約では入会登録料・更新登録料を2,000円としていますが、附則で令和4年度から令和7年度までは無料とされていました。令和8年度の扱いは当サイトでは公式情報を確認できていないため、各市の担当窓口にお問い合わせください。",
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
  headline: "山口県の公的な婚活支援「やまぐち結婚応縁センター（出逢いませ山口）」の料金・入会条件と、市町の支援、民間の結婚相談所との比較",
  description: "山口県の「やまぐち結婚応縁センター（出逢いませ山口）」の料金・入会条件・必要書類・活動のルール・窓口・実績、県のマッチングイベント、市町の結婚支援、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-25",
  dateModified: "2026-11-25",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/yamaguchi/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "山口県の結婚支援（やまぐち結婚応縁センター）", item: "https://mu-su-bi-ba.com/knowledge/yamaguchi/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeYamaguchi() {
  const maleShare = ((members.male / members.total) * 100).toFixed(1);
  const age3040Share = (((436 + 298) / members.total) * 100).toFixed(1);
  const reportPerOmiai = ((reports / omiaiHeld) * 100).toFixed(1);
  const reportPerDating = ((reports / dating) * 100).toFixed(1);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "山口県の結婚支援（やまぐち結婚応縁センター）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          山口県の結婚相談所選び：県の「やまぐち結婚応縁センター（出逢いませ山口）」の料金・入会条件、市町の支援と、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月25日（料金・入会条件・窓口・成婚数・イベントは同日にやまぐち結婚応縁センター公式サイト、山口県の公表資料、長門市の公表資料で確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />山口県の「やまぐち結婚応縁センター（出逢いませ山口）」は、入会金・更新料が無料です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>「やまぐち結婚応縁センター（出逢いませ山口）」は、山口県が平成27年9月に開設した独身者の出会いと結婚のサポート拠点です。会員制のマッチングシステムで<strong>自分でお相手を探してお見合いを申し込む方式</strong>で、センターから特定の方を紹介することはありません。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>マッチング会員の<strong>入会金・更新料は無料</strong>です。登録できるのは<strong>20歳以上の結婚を希望する独身の方</strong>で、県外在住の方も登録できます。手続きはオンラインまたは窓口への来所で行います。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>登録の有効期間は<strong>1年間で、更新は2回まで（最長3年）</strong>です。窓口は山口市・下関市・萩市・岩国市の<strong>4か所</strong>で、来所は事前予約制です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>公式サイトのトップには<strong>成婚数{marriages}組（令和8年10月31日時点）</strong>と表示されています。県の資料では、令和7年3月31日現在のマッチング会員は<strong>{members.total}人（男性{members.male}人・女性{members.female}人）</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。センターは費用がほとんどかからない一方、お相手探しは自分で行い、窓口の開設日時も限られます。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">やまぐち結婚応縁センター（出逢いませ山口）の料金と入会条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>設置・運営</td><td className={td}>山口県が設置（平成27年9月開設）。令和8年4月から運営委託事業者は学校法人YIC学院（それ以前は株式会社パソナ パソナ・山口）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会金・更新料</td><td className={td}>無料。インターネットの接続料、お見合い等にかかる飲食代は個人負担</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会できる方</td><td className={td}>20歳以上の結婚を希望する独身の方。県外在住の方も登録可</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>写真付き身分証明書（来所の場合は運転免許証・マイナンバーカード・パスポート＋住民票など。オンラインの場合は運転免許証かマイナンバーカードのみ。本人確認書類の住所と現住所が異なる場合は登録不可）、独身証明書（本籍地の市区町村長が発行した発行後6か月以内の原本。戸籍抄本は不可）、プロフィール用写真1〜2枚（無帽で本人のみ、3か月以内に撮影した縦Lサイズ。1枚目は上半身が写ったもの）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録の流れ</td><td className={td}>ホームページから新規入会申込み → オンラインまたは予約した窓口で手続き → 書類審査後に本登録・活動開始（手続きに10日程度かかる場合あり）。オンラインと来所で手続きの内容に違いはない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録の有効期間</td><td className={td}>本登録日から1年間。更新は2回まで（最長3年）で、3回目の更新はできず退会となる。更新案内は有効期限の60日前と30日前にメールで届く。1回目・2回目の更新では独身証明書は不要</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>休会・退会</td><td className={td}>マイページから手続き。休会中も登録期間は延長されない。申込み中・お見合い中・交際中は休会できない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>問合せ</td><td className={td}>やまぐち結婚応縁センター 083-976-8300</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              山口県の令和7年度当初予算資料では、センターの支援充実の一つとして「会員増に向けた会費の無料化」が挙げられています。2026年11月25日時点の公式サイトでは、入会金・更新料は無料と案内されており、無料の期限は記載されていません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MATCHING_URL} {...ext}>やまぐち結婚応縁センター「マッチング会員」</a>・<a href={RULES_URL} {...ext}>同「マッチング会員利用規程」</a>・<a href={FAQ_CENTER_URL} {...ext}>同 よくあるご質問「当センターについて」</a>・<a href={FAQ_ENTRY_URL} {...ext}>同「新規登録について」</a>・<a href={FAQ_PROCESS_URL} {...ext}>同「更新・休会・復会・退会について」</a>・<a href={NEWS_OPERATOR_URL} {...ext}>同 お知らせ「令和８年度から運営体制が変わります」</a>・<a href={BUDGET_URL} {...ext}>山口県 令和7年度当初予算資料（PDF）</a>（いずれも2026年11月25日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">お見合いから交際までの流れと活動のルール</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>自分のスマートフォンなど（自宅閲覧・時間の制限なし）または窓口の端末（予約制・30分）でお相手を検索し、お見合いを申し込む。申込みは1日1回・1人まで</li>
              <li>申込みを受けた方は、申し込まれた日を含めず5日以内に回答する。お見合いが成立したら、成立日を含めず29日以内に、会員同士がシステムで日時・場所を調整してお見合いを行う</li>
              <li>お見合いは30分〜1時間程度で、センターのスタッフは同席しない（オンラインお見合いは30分で、スタッフは冒頭と終了時に同席）。センター、センター以外の場所、オンライン（自宅またはセンター）から選べる。飲食代は実費</li>
              <li>双方が希望すれば「お友だち期間」（最大60日）に進み、システムのチャットでやり取りする</li>
              <li>双方の意思が確認できたら交際成立となり、お相手の氏名と電話番号がシステムから伝えられる。交際中はセンターのスタッフがおおむね2か月ごとに状況を確認する</li>
              <li>結婚が決まったら、システムの成婚報告フォームで報告する</li>
            </ol>
            <p>
              「お見合い成立〜お友だち期間」のお相手が2人になると、新たな検索・申込みはできなくなります。交際に進むと、ほかのお相手とのお友だち期間やお見合いは解除されます。活動の悩みは、完全予約制の相談（1回30分・来所またはZoom）で相談員に相談できますが、相談員がお相手を選ぶことはなく、相談できるのは本人のみです。
            </p>
            <p>
              センターからの紹介はなく、お相手探しは会員自身が行う方式です。担当者からの提案を受けながら活動したい方にとっては、この点が民間の結婚相談所との大きな違いになります（当サイトの整理）。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MATCHING_URL} {...ext}>やまぐち結婚応縁センター「マッチング会員」</a>・<a href={RULES_URL} {...ext}>同「マッチング会員利用規程」</a>・<a href={FAQ_ACTIVITY_URL} {...ext}>同 よくあるご質問「ご活動について」</a>（いずれも2026年11月25日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公表されている会員数と実績</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>区分（令和7年3月31日現在）</th><th className={th}>登録者数</th><th className={th}>20代</th><th className={th}>30代</th><th className={th}>40代</th><th className={th}>50代</th><th className={th}>60代以上</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>男性</td><td className={td}>584人</td><td className={td}>53人</td><td className={td}>234人</td><td className={td}>215人</td><td className={td}>66人</td><td className={td}>16人</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>女性</td><td className={td}>379人</td><td className={td}>78人</td><td className={td}>202人</td><td className={td}>83人</td><td className={td}>14人</td><td className={td}>2人</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>計</td><td className={td}>963人</td><td className={td}>131人</td><td className={td}>436人</td><td className={td}>298人</td><td className={td}>80人</td><td className={td}>18人</td></tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>実績の項目</th><th className={th}>公表値</th><th className={th}>備考</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>成婚数</td><td className={td}>{marriages}組</td><td className={td}>公式サイトのトップの表示（令和8年10月31日時点）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お見合い申込件数</td><td className={td}>66,218件</td><td className={td}>平成27年9月〜令和7年3月の累計（県の資料）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お見合い実施件数</td><td className={td}>{omiaiHeld.toLocaleString()}件</td><td className={td}>同上</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>交際成立件数</td><td className={td}>{dating.toLocaleString()}件</td><td className={td}>同上（お友だち成立は1,309件。お友だち機能は令和3年7月から導入）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>結婚報告件数</td><td className={td}>{reports}件</td><td className={td}>同上</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>結婚報告件数÷お見合い実施件数</td><td className={td}>約{reportPerOmiai}％</td><td className={td}>当サイト算出の参考値</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>結婚報告件数÷交際成立件数</td><td className={td}>約{reportPerDating}％</td><td className={td}>当サイト算出の参考値</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              令和7年3月31日現在の会員は、男性が{maleShare}％を占め、30代・40代が全体の{age3040Share}％です（いずれも当サイト算出）。20代は女性（78人）のほうが男性（53人）より多くなっています。
            </p>
            <p>
              表の割合は、県の資料にある累計値を当サイトが割り算したもので、センターが公表している成婚率ではありません。結婚の報告は会員からの申告にもとづくため、実際の成婚の件数と一致するとは限りません。また、トップページの「成婚数」と県の資料の「結婚報告件数」は、集計の時点も名称も異なるため、差し引いて期間ごとの件数を求めることはしていません。目安としてご覧ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TOP_URL} {...ext}>やまぐち結婚応縁センター 公式トップページ</a>・<a href={HANDBOOK_URL} {...ext}>やまぐち子育て連盟「やまぐち婚活応縁隊 活動の手引き」（令和7年4月・PDF）</a>（いずれも2026年11月25日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">窓口の所在地と受付時間</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>窓口</th><th className={th}>所在地</th><th className={th}>受付時間</th></tr></thead>
                <tbody>
                  {venues.map((v) => (
                    <tr key={v.name} className="border-t border-[#E5DCCF] align-top"><td className={td}>{v.name}</td><td className={td}>{v.addr}</td><td className={td}>{v.hours}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              いずれの窓口も、来所には事前予約が必要です。センターのよくあるご質問では、4か所のどのセンターでも受けられるサービスは同じと案内されています。入会手続きはオンラインでもできるため、窓口から遠い方は、運転免許証かマイナンバーカードがあればオンラインで手続きを進められます。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={ACCESS_URL} {...ext}>やまぐち結婚応縁センター「当センターアクセス」</a>・<a href={FAQ_CENTER_URL} {...ext}>同 よくあるご質問「当センターについて」</a>・<a href={FAQ_ENTRY_URL} {...ext}>同「新規登録について」</a>（いずれも2026年11月25日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">県のイベントと、市町の結婚支援</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>取組</th><th className={th}>内容</th><th className={th}>出典の時点</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>やまぐちマッチングイベント（県主催）</td><td className={td}>今年度は県内5か所で開催。夏期は下関市（7月26日）と周南市（8月22日）で、対象25〜39歳、各回男女各30名、参加費2,000円</td><td className={td}>山口県 記者配布資料（2026年6月23日）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>やまぐち恋叶パーティーin防府（県主催）</td><td className={td}>2026年12月20日・防府グランドホテル。対象30〜45歳、男女各50名、会費2,000円。申込みは11月25日で締め切られました（定員を超えた場合は抽選）</td><td className={td}>センター お知らせ（2026年10月16日）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>男性マッチング会員向けコミュニケーション講座</td><td className={td}>2026年11月29日開催。お見合いやデートでの会話、連絡の取り方などを扱う、男性マッチング会員限定の講座</td><td className={td}>センター お知らせ（2026年11月9日）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>やまぐち結婚応援団</td><td className={td}>県内の非営利団体や飲食店・ホテル等が出会いの場づくりを行う登録制度。団員のイベントはセンターのWebサイトで紹介される（結婚斡旋を業務とする企業は対象外）</td><td className={td}>センター「やまぐち結婚応援団」</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>GO-ENセンター（萩市・長門市・美祢市）</td><td className={td}>3市共同の結婚相談窓口。相談員による会員同士の1対1の出会い支援。会員規約上の入会登録料・更新登録料は2,000円（令和4〜7年度は附則で無料）</td><td className={td}>長門市掲載の会員規約、県の手引き（令和7年4月）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>市町の出会いイベント</td><td className={td}>柳井市・周防大島町・上関町・田布施町・平生町の「サザンセトマッチングイベント」、宇部市の結婚定住応援イベント、GO-ENプロジェクトの婚活イベントなど</td><td className={td}>県の手引き（令和7年4月）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>結婚後の支援</td><td className={td}>新婚世帯の住居費用の補助（下関市・柳井市・美祢市・田布施町・平生町・阿武町）、阿武町の結婚祝金</td><td className={td}>県の手引き（令和7年4月）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              GO-ENセンターの会員規約では、令和4年度から令和7年度まで、年度ごとの附則で登録料を無料としていました。令和8年度（2026年度）の登録料の扱いは、当サイトでは公式情報を確認できていません。また、市町の取組の一覧は令和7年4月時点の県の資料によるもので、実施状況や要件は年度によって変わります。利用を考えている方は、お住まいの市町の担当窓口でご確認ください。
            </p>
            <p>
              当サイトでは、山口県内の市町が民間の結婚相談所の入会費用を補助している事例は、2026年11月25日時点で確認できていません。県のセンターは入会金・更新料が無料のため、登録料の補助は設けられていないと考えられますが、これは当サイトの推測であり、公式の説明ではありません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PRESS_EVENT_URL} {...ext}>山口県 記者配布資料「やまぐちマッチングイベント（夏期実施分）参加者募集」（PDF）</a>・<a href={NEWS_HOFU_URL} {...ext}>やまぐち結婚応縁センター お知らせ「やまぐち恋叶パーティーin防府の参加者を募集」</a>・<a href={NEWS_SEMINAR_URL} {...ext}>同 お知らせ「婚活で実践できるコミュニケーション講座」</a>・<a href={CHEERING_URL} {...ext}>同「やまぐち結婚応援団」</a>・<a href={ABOUT_URL} {...ext}>同「当センターについて」</a>・<a href={GOEN_KIYAKU_URL} {...ext}>長門市掲載「ＧＯ－ＥＮセンター会員規約」（PDF）</a>・<a href={HANDBOOK_URL} {...ext}>やまぐち子育て連盟「やまぐち婚活応縁隊 活動の手引き」（令和7年4月・PDF）</a>（いずれも2026年11月25日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス・条件</th><th className={th}>登録費用</th><th className={th}>有効期間・特徴</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>やまぐち結婚応縁センター（マッチング会員）</td><td className={td}>入会金・更新料 0円</td><td className={td}>1年（更新2回まで・最長3年）。お見合い等の飲食代は実費</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>GO-ENセンター（萩市・長門市・美祢市）</td><td className={td}>規約上2,000円/年度（令和4〜7年度は無料。令和8年度は未確認）</td><td className={td}>登録年度の3月31日まで</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/okayama/" className="text-[#A08447] underline">岡山県「おかやま縁むすびネット」</Link></td><td className={td}>10,000円（2027年3月31日まで無料）＋お引合せ1回2,000円（オンライン1,000円）</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/oita/" className="text-[#A08447] underline">大分県「OITAえんむす部」</Link></td><td className={td}>10,000円</td><td className={td}>2年。月会費・成婚料なし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンター（はばタン会員）</Link></td><td className={td}>5,000円/年</td><td className={td}>1年（年ごとの登録手数料）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/mie/" className="text-[#A08447] underline">三重県「みえむすび」</Link></td><td className={td}>無料（地域サポーター同席は1回1,000円）</td><td className={td}>本登録から2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              やまぐち結婚応縁センターは、当サイトで料金を確認した他県のセンターと比べても登録費用がかからない部類に入ります。実際にかかるのは、独身証明書の取得手数料、お見合いやデートの飲食代、窓口までの交通費などです。民間の結婚相談所の1年総額の中央値399,200円と比べると、費用の差は大きくなります（当サイトの整理）。
            </p>
            <p>
              一方で、センターではお相手を自分で検索して申し込む必要があり、センターからの紹介はありません。窓口の受付日時も限られます。民間の結婚相談所は費用がかかる代わりに、担当者がお相手を提案したり、交際中の相談に継続的に応じたりするところが多くあります。当サイトの確認では、パートナーエージェントは山口にオンライン店を設けており（2026年11月20日確認）、エン婚活エージェントは会員の多い地域として山口を挙げています（2026年10月27日確認）。費用と支援の手厚さのどちらを重視するかを整理したうえで、センターと民間の結婚相談所を比べることをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。岡山県・大分県・兵庫県・三重県の料金は、当サイトの各ページで各公式サイトの情報を確認した内容です。パートナーエージェントとエン婚活エージェントの情報は、当サイトの<Link href="/review/partner-agent/" className="underline">パートナーエージェントの解説</Link>・<Link href="/review/en-konkatsu/" className="underline">エン婚活エージェントの解説</Link>で確認した内容です。料金や支援の内容は変更される場合があります。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/tottori/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">えんトリー（鳥取県）</Link>
            <Link href="/knowledge/ota/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">大田区の婚活支援（東京都）</Link>
            <Link href="/knowledge/chikugo/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">八女・筑後結婚サポートセンター（筑後市）</Link>
            <Link href="/knowledge/nakatsu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">中津市の婚活支援（大分県）</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/okayama/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">おかやま縁むすびネット（岡山県）</Link>
            <Link href="/knowledge/oita/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">OITAえんむす部（大分県）</Link>
            <Link href="/knowledge/hyogo-deai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ひょうご出会いサポートセンター</Link>
            <Link href="/area/hiroshima/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">広島の結婚相談所</Link>
            <Link href="/area/fukuoka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">福岡の結婚相談所</Link>
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
