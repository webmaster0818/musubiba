import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-22 確認）。
// ・adoorの位置づけ（富山県の結婚支援の一環として提供する公的サービス、会員制マッチングシステム、サポーターの同席・交際フォロー）、会場3か所の所在地・受付時間：とやまマリッジサポートセンター公式「adoorについて」
// ・会員になれる方（結婚を誠実に希望する18歳以上の独身の方・県外在住も可）、入会登録料10,000円（2年間有効）、20代までは無料、お引き合わせ時2,000円/回：同「マッチングシステム」
// ・入会の流れ、必要書類、申込みは1回3名まで、お引き合わせの方法、交際中のフォロー時期、2年で自動退会・更新手続き、電話申込み不可、代理登録、登録の抹消事由：同「マッチングシステムの流れ」
// ・退会時の返金なし、来所時の持参物：同 よくあるご質問「adoorへの入会方法」
// ・会員数692人・マッチング数4,269組・成婚数186組：同 公式トップページの表示（2026年11月22日閲覧。集計期間の記載なし）。成婚数÷マッチング数は当サイトの算出値
// ・2026年12月のサテライト会場の開設日、平日の開設場所（富山県民会館703号室・火〜金10時〜18時）、自宅閲覧は随時可能：同 お知らせ「2026年12月サテライト会場のご案内」（2026年11月12日）
// ・滑川市での出張登録会（11月29日・定員5名・29歳までは無料・申込み11月19日まで）：同 お知らせ「『とやまマリッジサポートセンター』出張登録会in滑川」（2026年10月15日）
// ・来所予約の1人40分：同 マッチングシステム「来所予約・日付指定」画面
// ・運営委託先（公益財団法人富山県女性財団）、高岡・氷見・小矢部3市の入会登録料半額助成（満30歳以上・上限5,000円・要件・必要書類）、縁結びボランティア（対象20〜50歳、費用なし）、無料婚活相談事業（令和8年6月1日〜令和9年2月28日）：高岡地区広域圏事務組合「広域縁結び事業」「あなたの婚活を応援します!」
// ・とやま出会い応援ポータル（TOYAMATCH）の概要・3つの出会い方・掲載市町村：TOYAMATCH公式トップ・「出会い方で選ぶ」・「市町村からのお知らせ」
// ・婚活倶楽部なんとの会員向け相談会（参加料無料・主催 婚活倶楽部なんと・なんと未来支援センター）：TOYAMATCH イベント「第56回『婚活相談会＆写真お見合い会』」
// ・TOYAMA goen（県と(株)Aillの共同運用、県内企業等の独身従業員専用、企業の負担金、従業員の利用料 プランA無料・プランB月額1,100円、検索機能なし、クレジットカード等による本人確認で料金は発生しない、導入企業100社突破）：富山県「とやま出会い応援アプリ『TOYAMA goen』」・同「導入企業、団体、事業所募集受付中」（2026年9月25日更新）・同「導入企業等募集要項」（令和8年5月22日一部改正・PDF）・同「よくあるご質問（FAQ）等」
// ・魚津市の結婚相談所優待クーポン（黒部結婚相談所と連携、初期費用・月会費3か月分 最大99,000円相当、市内在住20〜44歳、先着10名、応募要件）：とやまマリッジサポートセンター お知らせ「【魚津市×黒部結婚相談所】婚活のプロと一緒に婚活しませんか？」（2026年5月12日）掲載チラシ・魚津市「地域少子化対策重点推進交付金 実施計画書」（実施期間 令和8年4月1日〜令和9年3月31日・PDF）
// ・石川県・新潟県・長野県・岐阜県のセンター等の料金：当サイト /knowledge/ishikawa/・/knowledge/niigata/・/knowledge/nagano/・/knowledge/gifu/ の確認内容
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const MSC_TOP_URL = "https://www.msc-toyama.jp/";
const MSC_ABOUT_URL = "https://www.msc-toyama.jp/about/index.php";
const MSC_OMIAI_URL = "https://www.msc-toyama.jp/omiai/index.php";
const MSC_FLOW_URL = "https://www.msc-toyama.jp/omiai/flow/index.php";
const MSC_QA_URL = "https://www.msc-toyama.jp/archive/qanda/adoor%e3%81%b8%e3%81%ae%e5%85%a5%e4%bc%9a%e6%96%b9%e6%b3%95/";
const MSC_SATELLITE_URL = "https://www.msc-toyama.jp/archive/news/center/2026%e5%b9%b412%e6%9c%88%e3%82%b5%e3%83%86%e3%83%a9%e3%82%a4%e3%83%88%e4%bc%9a%e5%a0%b4%e3%81%ae%e3%81%94%e6%a1%88%e5%86%85/";
const MSC_NAMERIKAWA_URL = "https://www.msc-toyama.jp/archive/news/center/%e3%80%8c%e3%81%a8%e3%82%84%e3%81%be%e3%83%9e%e3%83%aa%e3%83%83%e3%82%b8%e3%82%b5%e3%83%9d%e3%83%bc%e3%83%88%e3%82%bb%e3%83%b3%e3%82%bf%e3%83%bc%e3%80%8d%e5%87%ba%e5%bc%b5%e7%99%bb%e9%8c%b2%e4%bc%9a-8/";
const MSC_UOZU_URL = "https://www.msc-toyama.jp/archive/news/info/cities/%e3%80%90%e9%ab%98%e5%b2%a1%e5%9c%b0%e5%8c%ba%e5%ba%83%e5%9f%9f%e5%9c%8f%e7%b5%84%e5%90%88%e3%80%91%ef%bc%97%e6%9c%88%e5%8f%8a%e3%81%b3%ef%bc%98%e6%9c%88%e3%81%ae%e3%82%a4%e3%83%99%e3%83%b3%e3%83%88/%e3%80%90%e9%ad%9a%e6%b4%a5%e5%b8%82x%e9%bb%92%e9%83%a8%e7%b5%90%e5%a9%9a%e7%9b%b8%e8%ab%87%e6%89%80%e3%80%91%e5%a9%9a%e6%b4%bb%e3%81%ae%e3%83%97%e3%83%ad%e3%81%a8%e4%b8%80%e7%b7%92%e3%81%ab-2/";
const UOZU_PLAN_URL = "https://www.city.uozu.toyama.jp/attach/EDIT/079/079886.pdf";
const KOUIKI_KIBOU_URL = "https://www.takaoka-kouiki.jp/enmusubi/kibou/";
const KOUIKI_JIGYOU_URL = "https://www.takaoka-kouiki.jp/enmusubi/jigyou/";
const TOYAMATCH_URL = "https://toyamatch.jp/";
const TOYAMATCH_HOWTO_URL = "https://toyamatch.jp/how-to-meet";
const TOYAMATCH_CITIES_URL = "https://toyamatch.jp/cities";
const TOYAMATCH_NANTO_URL = "https://toyamatch.jp/event/597";
const GOEN_TOP_URL = "https://www.pref.toyama.jp/101721/toyamagoen_top2.html";
const GOEN_BOSHU_URL = "https://www.pref.toyama.jp/101721/20251222toyamagoen.html";
const GOEN_YOUKOU_URL = "https://www.pref.toyama.jp/documents/51588/toyamagoenyoukou0522.pdf";
const GOEN_FAQ_URL = "https://www.pref.toyama.jp/101721/toyamagoen_faq.html";

const fee = 10000;
const omiaiFee = 2000;
const members = 692;
const matchings = 4269;
const marriages = 186;

const venues = [
  { name: "富山県民会館（富山市）", addr: "富山市新総曲輪4-18", hours: "火〜金 10:00〜18:00、土・日 10:00〜16:00" },
  { name: "ウイング・ウイング高岡（高岡市）", addr: "高岡市末広町1-7", hours: "日曜 10:00〜16:00" },
  { name: "新川文化ホール（魚津市）", addr: "魚津市宮津110", hours: "日曜。午前（10:00〜12:00）と午後（13:00〜15:00）をそれぞれ月1回" },
];

export const metadata: Metadata = {
  title: "富山県で結婚相談所を探す方へ｜県の「とやまマリッジサポートセンター（adoor）」は登録料10,000円・2年間で20代は無料、高岡・氷見・小矢部は登録料の半額助成、魚津市の民間相談所クーポンと民間との費用比較",
  description:
    "富山県の「とやまマリッジサポートセンター（adoor）」は入会登録料10,000円で2年間利用でき、20代までは無料です。お引き合わせ1回2,000円、会員数692人・成婚数186組、高岡・氷見・小矢部3市の登録料半額助成、魚津市の結婚相談所クーポン、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/toyama/" },
};

const faqs = [
  {
    q: "とやまマリッジサポートセンター（adoor）の料金はいくらですか？",
    a: "公式サイトでは、入会登録料は10,000円（2年間有効）で、20代までの方は入会登録料が無料と案内されています。退会時の返金はありません。このほか、お引き合わせ（お見合い）のたびに1人2,000円（お茶代とサポーターの交通費など）がかかります。登録期間の2年が過ぎると自動的に退会となり、続けて利用する場合は更新手続きが必要です。",
  },
  {
    q: "富山県外に住んでいても登録できますか？",
    a: "公式サイトでは、結婚を誠実に希望し、自ら努力される18歳以上の独身の方であれば会員になれ、富山県内に限らず県外にお住まいの方も登録できると案内されています。登録は、ホームページから入会申込みと来所予約をしたうえで、県内の会場に必要書類を持参して行います。電話での入会申込みは受け付けていません。",
  },
  {
    q: "高岡市・氷見市・小矢部市に住んでいると、登録料の補助はありますか？",
    a: "高岡地区広域圏事務組合が、高岡市・氷見市・小矢部市に住所がある方を対象に、とやまマリッジサポートセンターの入会登録料の2分の1（上限5,000円）を助成しています。申請日時点で満30歳以上であること、女性は平成28年4月1日以降、男性は令和3年4月1日以降に入会したこと、過去にこの補助を受けていないことが要件です。申請は、申請書・入会登録料の領収書の写し・住所が分かる証明書の写しを同組合総務課へ郵送または持参します。",
  },
  {
    q: "魚津市の結婚相談所のクーポンとは何ですか？",
    a: "魚津市が民間の結婚相談所（黒部結婚相談所）と連携して実施している事業で、結婚相談所の入会に係る初期費用と月会費3か月分（最大99,000円相当）の優待クーポン券が交付されます。対象は魚津市内に住む20歳以上44歳以下の独身の方で、婚姻後も市内に住み続ける意思があること、市税等の滞納がないこと、活動状況の報告に同意することが要件です。先着10名で、定員に達し次第終了するため、申込みの前に魚津市市民自治推進課（0765-23-1131）へ受付状況をご確認ください。",
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
  headline: "富山県の公的な婚活支援「とやまマリッジサポートセンター（adoor）」の料金・入会条件と、市町村の支援、民間の結婚相談所との比較",
  description: "富山県の「とやまマリッジサポートセンター（adoor）」の料金・入会条件・必要書類・会場・実績、高岡地区広域圏の登録料助成、魚津市の結婚相談所クーポン、県の出会い応援アプリ、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-22",
  dateModified: "2026-11-22",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/toyama/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "富山県の結婚支援（とやまマリッジサポートセンター）", item: "https://mu-su-bi-ba.com/knowledge/toyama/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeToyama() {
  const perYear = fee / 2;
  const ratio = ((marriages / matchings) * 100).toFixed(1);
  const perMarriage = Math.round(matchings / marriages);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "富山県の結婚支援（とやまマリッジサポートセンター）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          富山県の結婚相談所選び：県の「とやまマリッジサポートセンター（adoor）」の料金・入会条件、市町村の支援と、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月22日（料金・入会条件・会場・会員数・市町村の助成は同日にとやまマリッジサポートセンター公式サイト、富山県公式サイト、とやま出会い応援ポータル、高岡地区広域圏事務組合公式サイト、魚津市の公表資料で確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />富山県の「とやまマリッジサポートセンター（adoor）」は、入会登録料10,000円で2年間利用でき、20代までは無料です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>「とやまマリッジサポートセンター（愛称：adoor）」は、富山県の結婚支援の一環として提供されている公的サービスです。会員制のマッチングシステムでお相手を探し、<strong>サポーターの同席のもとでお引き合わせ（お見合い）</strong>を行います。登録は18歳以上の独身の方が対象で、<strong>県外在住の方も登録できます</strong>。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>入会登録料は<strong>{fee.toLocaleString()}円（2年間有効）</strong>で、1年あたりに換算すると{perYear.toLocaleString()}円です（当サイト算出）。<strong>20代までの方は入会登録料が無料</strong>です。お引き合わせのたびに1人<strong>{omiaiFee.toLocaleString()}円</strong>がかかります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>公式サイトのトップには、<strong>会員数{members}人・マッチング数{matchings.toLocaleString()}組・成婚数{marriages}組</strong>と表示されています（2026年11月22日閲覧）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>高岡市・氷見市・小矢部市</strong>に住む満30歳以上の方は、高岡地区広域圏事務組合から入会登録料の<strong>半額（上限5,000円）の助成</strong>を受けられます。<strong>魚津市</strong>は、民間の結婚相談所の初期費用と月会費3か月分（最大99,000円相当）の<strong>優待クーポン</strong>を先着10名に交付しています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。センターは費用を大きく抑えられる一方、来所での登録が必要で、会場の開設日時が限られます。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">とやまマリッジサポートセンター（adoor）の料金と入会条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>富山県が少子化対策の一環として開設し、公益財団法人富山県女性財団に運営を委託（高岡地区広域圏事務組合の案内による）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会登録料</td><td className={td}>10,000円（登録日から2年間有効）。20代までの方は無料（滑川市の出張登録会の案内では「会員登録時点で29歳までの方は無料」）。退会時の返金なし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お引き合わせの費用</td><td className={td}>1回につき1人2,000円（お茶代とサポーターの交通費など）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会員になれる方</td><td className={td}>結婚を誠実に希望し、自ら努力される18歳以上の独身の方。富山県外に住んでいる方も登録可。インターネットとメールが使えるパソコンまたはスマートフォンが必要</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要なもの</td><td className={td}>入会申込書（本人が記入。会員誓約書も本人が署名）、本籍地の市町村長が発行する独身証明書（3か月以内に取得した原本）、写真付きの身分証1点（運転免許証・パスポート等）、マッチングシステムに掲載する本人のみの写真1〜2枚（3か月以内に撮影した上半身または全身・L判程度）。サテライト会場では、独身証明書と身分証について原本とコピーが必要</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録の流れ</td><td className={td}>ホームページで入会申込み（メールアドレスの登録）→ 受付メールのURLから氏名・住所等を入力 → 来所予約 → 会場で入会申込書の記入・会員誓約書への署名・登録料の支払い → タブレット端末でプロフィールを入力して会員登録完了。電話での入会申込みは不可。委任状と代理登録者の写真付き身分証があれば代理登録も可</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録期間</td><td className={td}>登録日から2年間。期間が過ぎると自動的に退会となり、継続する場合は更新手続きが必要。結婚の連絡を受けた時点で退会</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>問合せ</td><td className={td}>とやまマリッジサポートセンター（富山県民会館内）076-471-6510</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              公式サイトでは、不正な手段での入会、システムの悪用、暴力団員等に該当する場合、会員誓約書の誓約事項に反した場合などは、入会を断るか会員登録を抹消すると定められています。また、希望する条件の方とのお引き合わせや成婚を約束するものではないと明記されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MSC_OMIAI_URL} {...ext}>とやまマリッジサポートセンター「マッチングシステム」</a>・<a href={MSC_FLOW_URL} {...ext}>同「マッチングシステムの流れ」</a>・<a href={MSC_QA_URL} {...ext}>同 よくあるご質問「adoorへの入会方法」</a>・<a href={MSC_NAMERIKAWA_URL} {...ext}>同 お知らせ「出張登録会in滑川」</a>・<a href={KOUIKI_JIGYOU_URL} {...ext}>高岡地区広域圏事務組合「広域縁結び事業」</a>（いずれも2026年11月22日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">お引き合わせまでの流れと公表されている実績</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>会場のタブレット端末、または自分のスマートフォンなどで会員情報を閲覧し、会いたいお相手にお引き合わせを申し込む。申込みは1回につき3名まで。会場の端末を使う場合は来所予約が必要</li>
              <li>お相手が承諾した場合、サポーターが日程を調整し、adoorが指定するレストランやカフェなどで、サポーターの同席のもとお引き合わせを行う。この段階では名前・住所・電話番号は伝えられない</li>
              <li>サポーターが双方の交際の意思を確認し、互いに交際を希望した場合に、お相手の名前と電話番号が伝えられる</li>
              <li>交際中は、2週間後・2か月後・4か月後・半年後にサポーターがフォローする</li>
              <li>結婚が決まったらサポーターに連絡し、退会手続きを行う（記念品の贈呈あり）</li>
            </ol>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>実績の項目</th><th className={th}>公表値</th><th className={th}>備考</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会員数</td><td className={td}>{members}人</td><td className={td}>公式サイトのトップの表示（2026年11月22日閲覧）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>マッチング数</td><td className={td}>{matchings.toLocaleString()}組</td><td className={td}>同上。集計期間の記載なし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>成婚数</td><td className={td}>{marriages}組</td><td className={td}>同上。集計期間の記載なし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>成婚数÷マッチング数</td><td className={td}>約{ratio}％（約{perMarriage}組に1組）</td><td className={td}>当サイトが上の2つの表示値から算出した参考値</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              上の表の割合は、公式サイトに表示されている2つの数値を当サイトが割り算したもので、センターが公表している成婚率ではありません。マッチング数・成婚数の集計期間や定義は公式サイトに記載がないため、民間の結婚相談所が公表する成婚率と単純に比べることはできません。目安としてご覧ください。
            </p>
            <p>
              マッチングシステムには、お引き合わせの申込み・被申込みの履歴から「あなたを好んでいそうな人」をおすすめする機能があります。来所予約は1人40分で、会員情報の自宅での閲覧は随時可能と案内されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MSC_FLOW_URL} {...ext}>とやまマリッジサポートセンター「マッチングシステムの流れ」</a>・<a href={MSC_TOP_URL} {...ext}>同 公式トップページ</a>・<a href={MSC_SATELLITE_URL} {...ext}>同 お知らせ「2026年12月サテライト会場のご案内」</a>（いずれも2026年11月22日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">会場の所在地と受付時間</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>会場</th><th className={th}>所在地</th><th className={th}>受付時間</th></tr></thead>
                <tbody>
                  {venues.map((v) => (
                    <tr key={v.name} className="border-t border-[#E5DCCF] align-top"><td className={td}>{v.name}</td><td className={td}>{v.addr}</td><td className={td}>{v.hours}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              入会申込みや来所（相談など）は、予約のうえで都合のよい会場を利用します。2026年12月の案内では、富山県民会館703号室で平日（火〜金 10:00〜18:00）に開設しているほか、土日の富山サテライト会場（8日間）、日曜の高岡サテライト会場（4日間）、新川サテライト会場（2日間）の開設日が示されています。サテライト会場でも、新規の会員登録とお相手の閲覧・申込みができます。
            </p>
            <p>
              このほか、市町村の協力を得て出張登録会も開催されています。2026年11月29日には滑川市民交流プラザで出張登録会（定員5名）が予定されていました（申込みは11月19日で締切）。開設日は月ごとに変わるため、来所前に公式サイトの開設状況カレンダーでご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MSC_ABOUT_URL} {...ext}>とやまマリッジサポートセンター「adoorについて」</a>・<a href={MSC_SATELLITE_URL} {...ext}>同 お知らせ「2026年12月サテライト会場のご案内」</a>・<a href={MSC_NAMERIKAWA_URL} {...ext}>同 お知らせ「出張登録会in滑川」</a>（いずれも2026年11月22日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">市町村の支援：高岡地区広域圏の登録料助成と魚津市の結婚相談所クーポン</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>高岡地区広域圏事務組合（高岡市・氷見市・小矢部市）</th><th className={th}>魚津市（黒部結婚相談所と連携）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象となる費用</td><td className={td}>とやまマリッジサポートセンターの入会登録料</td><td className={td}>民間の結婚相談所の入会に係る初期費用と月会費3か月分</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>支援の額</td><td className={td}>入会登録料の2分の1相当額（上限5,000円）</td><td className={td}>最大99,000円相当の優待クーポン券（月会費のクーポンは令和9年2月分まで）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象者</td><td className={td}>申請日時点で高岡市・氷見市・小矢部市に住所がある満30歳以上の方。女性は平成28年4月1日以降、男性は令和3年4月1日以降に入会した方。過去にこの補助を受けていない方</td><td className={td}>魚津市内に住む20歳以上44歳以下の独身の方で、婚姻後も市内に住み続ける意思がある、市税等の滞納がない、活動状況の報告に同意する方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>定員・期間</td><td className={td}>公式には定員の記載がありません</td><td className={td}>先着10名（定員に達し次第終了）。市の実施計画書では実施期間を令和8年4月1日〜令和9年3月31日としている</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申込み・必要書類</td><td className={td}>補助金交付申請書、入会登録料の領収書の写し、3市のいずれかに住所があることが分かる証明書の写し（運転免許証・マイナンバーカード表面・住民票など）を総務課へ郵送または持参</td><td className={td}>魚津市のホームページで詳細を確認のうえ申込み</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>問合せ</td><td className={td}>高岡地区広域圏事務組合 総務課（0766-91-2101）</td><td className={td}>魚津市 市民自治推進課（0765-23-1131）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              高岡地区広域圏の助成は満30歳以上が対象のため、20代で登録料が無料になる方とは重なりません。30歳以上の方が10,000円で入会し、助成を受けた場合、登録料の自己負担は実質5,000円になります（当サイトの整理）。
            </p>
            <p>
              高岡地区広域圏事務組合は、このほかに3市で活動する縁結びボランティア（広域縁結びボランティア・氷見市縁結びおせっかいさん・おやべの縁結びさん）による出会いのお手伝いも行っています。対象は20〜50歳の独身の方で（高岡市・小矢部市のボランティアは、男性は市内在住または在勤、女性は住所要件なし）、相談やサポート登録に費用はかかりません。令和8年度は、令和8年6月1日から令和9年2月28日まで、ご本人と三親等内のご親族が各分野の専門家に相談できる無料婚活相談事業も実施されています（お見合いの相手を紹介する事業ではありません）。
            </p>
            <p>
              南砺市では「婚活倶楽部なんと」が会員向けに婚活相談会と写真お見合い会を開催しており、2026年12月の第56回の参加料は無料です（主催：婚活倶楽部なんと・なんと未来支援センター）。入会の費用や条件は、今回確認した公式情報には記載がありませんでした。県のとやま出会い応援ポータルには、富山市・魚津市・氷見市・滑川市・黒部市・砺波市・小矢部市・南砺市・射水市・上市町・立山町・入善町・朝日町・高岡地区広域圏事務組合の結婚支援のページへのリンクがまとめられています。上記以外の市町村による登録料の補助は、当サイトでは確認できていません。お住まいの市町村の窓口にお問い合わせください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={KOUIKI_KIBOU_URL} {...ext}>高岡地区広域圏事務組合「あなたの婚活を応援します!」</a>・<a href={KOUIKI_JIGYOU_URL} {...ext}>同「広域縁結び事業」</a>・<a href={MSC_UOZU_URL} {...ext}>とやまマリッジサポートセンター お知らせ「【魚津市×黒部結婚相談所】婚活のプロと一緒に婚活しませんか？」（掲載チラシ）</a>・<a href={UOZU_PLAN_URL} {...ext}>魚津市「地域少子化対策重点推進交付金 実施計画書」（PDF）</a>・<a href={TOYAMATCH_NANTO_URL} {...ext}>とやま出会い応援ポータル「第56回『婚活相談会＆写真お見合い会』」</a>・<a href={TOYAMATCH_CITIES_URL} {...ext}>同「市町村からのお知らせ」</a>（いずれも2026年11月22日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">県のその他の取組：出会い応援ポータルと企業向けアプリ「TOYAMA goen」</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>とやま出会い応援ポータル（TOYAMATCH）</td><td className={td}>県・市町村・県内企業・団体が連携して運営するポータルサイト（主催：富山県）。県内の交流イベント・セミナーの情報を掲載し、「イベント」「アプリ」「お引き合わせ（とやまマリッジサポートセンター）」の3つの出会い方を紹介している</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>TOYAMA goen の対象</td><td className={td}>導入した県内企業・団体・事業所の独身従業員のみ。県と株式会社Aillが共同で運用する</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>費用</td><td className={td}>企業等が県内の全従業員数に応じた負担金（年額）を支払う。従業員の利用料は、プランAの場合は無料、プランBの場合は月額1,100円（税込）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>仕組み</td><td className={td}>AIが価値観の近い社外の独身従業員を紹介する方式で、登録者一覧から相手を探す検索機能はない。登録時にクレジットカード等で本人確認を行うが、登録手続きで料金は発生しない。誰が登録しているかなどの情報は企業に提供されない</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              富山県のページでは、TOYAMA goen の利用企業が100社を突破したと案内されています。勤務先が導入しているかどうかは、勤務先の担当部署または県の導入企業・団体一覧でご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TOYAMATCH_URL} {...ext}>とやま出会い応援ポータル（TOYAMATCH）</a>・<a href={TOYAMATCH_HOWTO_URL} {...ext}>同「出会い方で選ぶ」</a>・<a href={GOEN_TOP_URL} {...ext}>富山県「とやま出会い応援アプリ『TOYAMA goen』」</a>・<a href={GOEN_BOSHU_URL} {...ext}>同「導入企業、団体、事業所募集受付中」</a>・<a href={GOEN_YOUKOU_URL} {...ext}>同「導入企業等募集要項」（令和8年5月22日一部改正・PDF）</a>・<a href={GOEN_FAQ_URL} {...ext}>同「よくあるご質問（FAQ）等」</a>（いずれも2026年11月22日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス・条件</th><th className={th}>登録費用</th><th className={th}>お見合い等の費用・特徴</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>とやまマリッジサポートセンター（通常）</td><td className={td}>10,000円（2年間有効。1年あたり換算5,000円）</td><td className={td}>お引き合わせ1回につき1人2,000円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>同・20代までの方</td><td className={td}>0円</td><td className={td}>同上</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>同・高岡市・氷見市・小矢部市在住で満30歳以上（助成を利用）</td><td className={td}>実質5,000円（登録料を支払った後に助成）</td><td className={td}>同上</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/ishikawa/" className="text-[#A08447] underline">石川県「いしかわ結婚支援センター」（マッチング）</Link></td><td className={td}>10,000円/2年（2026年10月1日〜2027年3月31日の登録キャンペーンで20代無料・30代半額）</td><td className={td}>お見合いごとにマッチングサポーターの交通費1,000円＋飲食代</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/niigata/" className="text-[#A08447] underline">新潟県「ハートマッチにいがた」</Link></td><td className={td}>20〜39歳は入会登録料無料、40歳以上11,000円（2年間）</td><td className={td}>お引合せごとに1人2,100円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/nagano/" className="text-[#A08447] underline">長野県「NAGANO ai MATCH」</Link></td><td className={td}>システム登録料10,000円（2年間）</td><td className={td}>市町村などの公的結婚相談所に登録して使うマッチングシステム</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/gifu/" className="text-[#A08447] underline">岐阜県「おみサポ・ぎふ」</Link></td><td className={td}>登録・利用は無料</td><td className={td}>お見合いの交通費・飲食代は実費</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>同・魚津市のクーポンを利用（対象者のみ）</td><td className={td}>初期費用と月会費3か月分（最大99,000円相当）がクーポンの対象</td><td className={td}>対象は黒部結婚相談所。成婚料などクーポンの対象外の費用は各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              上の表は、公式に公表されている登録料と助成額から当サイトが整理した目安です。とやまマリッジサポートセンターの費用は、お引き合わせの回数に応じて1回2,000円ずつ増えます。例えば、20代の方が2年間に5回お引き合わせをした場合の費用は10,000円、30歳以上の方なら登録料と合わせて20,000円です（当サイトの試算。交際中の飲食代などは含みません）。それでも民間の結婚相談所と比べると、費用は大幅に低く抑えられます。
            </p>
            <p>
              一方で、センターでは登録に来所が必要で、会場の開設日時も限られます。民間の結婚相談所は、費用がかかる代わりに、担当者がお相手を提案したり、交際中の相談に継続的に応じたりするところが多くあります。富山県内から利用できるオンライン型の結婚相談所も選択肢になります。費用と支援の手厚さのどちらを重視するかを整理したうえで、センターと民間の結婚相談所を比べることをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。石川県・新潟県・長野県・岐阜県の料金は、当サイトの各ページで各公式サイトの情報を確認した内容です。料金や助成の内容は変更される場合があります。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/fukui/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ふく恋（福井県）</Link>
            <Link href="/knowledge/ishikawa/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">いしかわ結婚支援センター（石川県）</Link>
            <Link href="/knowledge/niigata/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ハートマッチにいがた（新潟県）</Link>
            <Link href="/knowledge/nagano/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">NAGANO ai MATCH（長野県）</Link>
            <Link href="/knowledge/gifu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">おみサポ・ぎふ（岐阜県）</Link>
            <Link href="/knowledge/matsumoto/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">松本市の婚活支援（長野県）</Link>
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
