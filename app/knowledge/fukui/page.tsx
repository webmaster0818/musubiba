import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-22 確認）。
// ・ふくい婚活サポートセンター「ふく恋」の運営主体（ふくい結婚応援協議会＝県と県内全市町）、マッチングの仕組み、入会の流れ、面談時に必要なもの、利用登録料10,000円（2年間有効・面談時に現金一括、WEB面談は口座振込）、女性限定半額キャンペーン、法人割引、アップロード書類、お見合い・交際の流れ：ふく恋 ふくい結婚応援ポータル「マッチングシステム」
// ・会員登録ができる方（20歳以上の独身、スマホまたはPC、県内在住・在勤で定住予定または近い将来の移住予定）、登録料の不返還・一度も紹介されない場合も返金なし・月会費/紹介料/成婚料なし、登録期間2年・休止しても延長なし・更新時は再度登録料、回答期限7日：同「マッチングシステム利用規約」（PDF）
// ・女性限定半額キャンペーン（2026年8月1日〜2027年3月31日、新規の独身女性、結婚応援企業勤務なら0円）：同 お知らせ「女性限定！システム利用登録料半額キャンペーン実施中」（2026年8月1日）
// ・法人割引制度（令和6年6月1日開始、ふくい結婚応援企業に勤務する方の新規登録料が男女とも5,000円）：同 お知らせ（2024年6月1日）
// ・20代限定半額キャンペーンの終了：同 お知らせ一覧（「【終了】20代限定システム利用登録料半額のキャンペーンを実施」）
// ・成婚報告数累計100組、お見合い実施数累計約4,900組、交際成立数累計約2,000組、登録者数約1,400人（令和7年11月末時点）、令和2年11月運用開始：同 お知らせ「ふく恋成婚報告数が累計100組になりました！」（2025年12月24日）。比率は当サイト算出
// ・センターと嶺南サテライトの所在地・電話・開所時間・休業日・駐車場：同「ふくい婚活サポートセンターについて」
// ・緊急メンテナンス（2026年10月23日14:00〜10月24日14:00予定）：同 お知らせ（2026年10月23日）。お知らせ一覧に事業の停止・休止の告知はない（当サイトが同日に一覧を確認）
// ・福井県結婚相談所（福井県婦人福祉協議会）の仕組み・登録料1,000円・成婚時4,000円・必要書類・所在地・相談日：同「福井県結婚相談所」。相談会場の一覧（22か所）：同「福井県結婚相談所の一覧」（会場数は当サイトが数えた値）
// ・越前市の結婚相談（越前市婦人福祉協議会に委託、11月の相談日、持ち物、申込金1,000円）：越前市「結婚相談について（11月開催）」（2026年10月29日更新）
// ・地域の縁結びさん（ボランティア、相談・相談者登録は無料、相談窓口、実績値）：ふく恋「地域の縁結びさん」。福井県「地域の縁結びさんにご相談ください」（2023年11月27日更新）
// ・登録料の助成：勝山市（2026年4月1日更新）・敦賀市（2026年2月25日更新）・越前市（2026年4月10日更新・同市チラシPDF）・池田町（2024年4月1日更新）の各公式ページ、鯖江市「令和8年度地域少子化対策重点推進事業実施計画書（鯖江市ふく恋マッチングシステム登録料助成事業）」（PDF）
// ・石川県・岐阜県・長野県・新潟県の料金：当サイト /knowledge/ishikawa/・/knowledge/gifu/・/knowledge/nagano/・/knowledge/niigata/ の確認内容
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値
// ※福井県公式サイトの結婚対策の資料PDF（ふく恋の委託仕様書等）は2026年11月22日の確認時に取得できなかったため、会員数・実績はふく恋の公式お知らせの値を使用した。

const PORTAL_URL = "https://www.fukui-konkatsucafe.jp/";
const MATCHING_URL = "https://www.fukui-konkatsucafe.jp/matching_system";
const KIYAKU_URL = "https://www.fukui-konkatsucafe.jp/files/uploads/%E3%83%9E%E3%83%83%E3%83%81%E3%83%B3%E3%82%B0%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E5%88%A9%E7%94%A8%E8%A6%8F%E7%B4%84.pdf";
const CAMPAIGN_URL = "https://www.fukui-konkatsucafe.jp/information/archives/26";
const HOUJIN_URL = "https://www.fukui-konkatsucafe.jp/information/archives/23";
const SEIKON_URL = "https://www.fukui-konkatsucafe.jp/information/archives/25";
const MAINTE_URL = "https://www.fukui-konkatsucafe.jp/information/archives/27";
const INFO_URL = "https://www.fukui-konkatsucafe.jp/information/";
const CENTER_URL = "https://www.fukui-konkatsucafe.jp/siteinfo/center";
const SOUDANJO_URL = "https://www.fukui-konkatsucafe.jp/projects/matrimonial_center/";
const SOUDANJO_LIST_URL = "https://www.fukui-konkatsucafe.jp/projects/matrimonial_center/matrimonial_centerlist/";
const CUPID_URL = "https://www.fukui-konkatsucafe.jp/projects/local_cupid/";
const PREF_CUPID_URL = "https://www.pref.fukui.lg.jp/doc/012480/marriage/emmusubisoudan.html";
const ECHIZEN_SOUDAN_URL = "https://www.city.echizen.lg.jp/office/030/011/kosodate02.html";
const ECHIZEN_JOSEI_URL = "https://www.city.echizen.lg.jp/office/030/011/fukukoi.html";
const ECHIZEN_CHIRASHI_URL = "https://www.city.echizen.lg.jp/office/030/011/fukukoi_d/fil/R8_chirashi.pdf";
const KATSUYAMA_URL = "https://www.city.katsuyama.fukui.jp/site/shinsei-navi/36451.html";
const TSURUGA_URL = "https://www.city.tsuruga.lg.jp/page/3404.html";
const IKEDA_URL = "https://www.town.ikeda.fukui.jp/pick/pickkankon/p002857.html";
const SABAE_URL = "https://www.city.sabae.fukui.jp/life_event/kekkon_rikon/kekkonshinseikatsu.files/R8hukukoi.pdf";

const fee = 10000;
const members = 1400;
const omiai = 4900;
const kousai = 2000;
const seikon = 100;
const venues = 22; // 福井県結婚相談所の一覧に掲載された相談会場数（当サイトが数えた値）

const josei = [
  { town: "池田町", amount: "全額（10,000円）", cond: "面談日に池田町に住民登録があること、町民税等の滞納がないこと。センターの割引で登録料が変わる場合も全額を助成", updated: "2024年4月1日更新" },
  { town: "勝山市", amount: "5,000円（半額）", cond: "勝山市民で結婚を希望する20歳以上の独身男女。新規登録のみ（満期継続は対象外）。別のキャンペーン等とは重複して助成を受けられる", updated: "2026年4月1日更新" },
  { town: "敦賀市", amount: "5,000円（半額）", cond: "敦賀市民で結婚を希望する20歳以上の独身男女。新規登録のみ（満期継続は対象外）。別のキャンペーン等とは重複して助成を受けられる", updated: "2026年2月25日更新" },
  { town: "越前市", amount: "半額", cond: "面談日に越前市に住民登録があること（住民票の住所が越前市）、新規登録であること、越前市税の滞納がないこと", updated: "2026年4月10日更新" },
  { town: "鯖江市", amount: "半額（市民の支払いは5,000円）", cond: "市内在住の20歳以上の男女。登録時に市内に住民登録があること・市税の滞納がないことを市が確認。残りの5,000円は市がセンターに支払う", updated: "令和8年度実施計画書" },
];

export const metadata: Metadata = {
  title: "福井県で結婚相談所を探す方へ｜県の「ふく恋」は登録料10,000円・2年間（女性は半額）、池田町など5市町の登録料助成、県結婚相談所の登録料1,000円と民間との費用比較",
  description:
    "福井県の公的な婚活支援「ふく恋（ふくい婚活サポートセンター）」は利用登録料10,000円で2年間利用でき、月会費・成婚料はかかりません。女性の半額キャンペーン、池田町・勝山市・敦賀市・越前市・鯖江市の登録料助成、登録料1,000円の福井県結婚相談所、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/fukui/" },
};

const faqs = [
  {
    q: "ふく恋（ふくい婚活サポートセンター）の料金はいくらですか？",
    a: "マッチングシステムの利用登録料は10,000円（税込）で、登録から2年間有効です。本人確認の面談時に現金で一括して支払います（WEB面談の場合は口座振込）。利用規約では、月会費・紹介料・成婚料はかからないとされています。一度納めた登録料は、登録期間内に一度も紹介されなかった場合を含め返還されません。2026年8月1日から2027年3月31日までは、新たに登録する独身女性の登録料が5,000円になるキャンペーンが実施されています。",
  },
  {
    q: "市町の登録料の助成はありますか？",
    a: "当サイトが2026年11月22日に確認した範囲では、池田町が登録料の全額、勝山市・敦賀市・越前市・鯖江市が半額を助成しています。いずれも新規登録の方が対象で、住民登録や税の滞納がないことなどが条件です。勝山市・敦賀市は、センターのキャンペーン等とは重複して助成を受けられると案内しています。助成を受けるには、センターでの本人確認の面談時に同意書を提出する手続きが必要な市町があります。お住まいの市町の担当課でご確認ください。",
  },
  {
    q: "福井県結婚相談所とふく恋は何が違いますか？",
    a: "ふく恋は、県と県内全市町でつくる「ふくい結婚応援協議会」が運営するマッチングシステムで、スマートフォンでお相手を検索したり、AIからの紹介を受けたりします。福井県結婚相談所は、福井県婦人福祉協議会の結婚相談員が県内各地の相談会場で相談に応じ、登録票を見てお相手を選ぶ対面型の仕組みです。登録料は1,000円（通信費実費相当）で、結婚が成立した場合に1組につき4,000円（相談諸経費）がかかります。",
  },
  {
    q: "県外に住んでいても登録できますか？",
    a: "ふく恋の利用規約では、会員登録ができるのは、福井県に住んでいるか勤めていて今後も福井県に定住する予定の方、または県外に住んでいても近い将来福井県に移住を予定している方とされています。あわせて、20歳以上の独身であること、システムを使えるスマートフォンまたはパソコンを持っていることが条件です。",
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
  headline: "福井県の公的な婚活支援「ふく恋」の料金・入会条件と、市町の登録料助成・福井県結婚相談所、民間の結婚相談所との比較",
  description: "福井県の「ふく恋（ふくい婚活サポートセンター）」の料金・入会条件・拠点・実績、池田町・勝山市・敦賀市・越前市・鯖江市の登録料助成、福井県結婚相談所と地域の縁結びさん、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-22",
  dateModified: "2026-11-22",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/fukui/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "福井県の結婚支援（ふく恋・福井県結婚相談所）", item: "https://mu-su-bi-ba.com/knowledge/fukui/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeFukui() {
  const perYear = fee / 2;
  const kousaiRate = Math.round((kousai / omiai) * 1000) / 10;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "福井県の結婚支援（ふく恋・福井県結婚相談所）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          福井県の結婚相談所選び：県の「ふく恋」の料金・入会条件、市町の登録料助成・福井県結婚相談所と、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月22日（料金・入会条件・拠点・実績・相談会場は同日にふく恋 ふくい結婚応援ポータル、福井県公式サイトで、登録料の助成は勝山市・敦賀市・越前市・鯖江市・池田町の公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />福井県の「ふく恋」は、利用登録料10,000円で2年間利用でき、月会費・成婚料はかかりません
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>「ふく恋（ふくい婚活サポートセンター）」は、<strong>県と県内全市町で構成する「ふくい結婚応援協議会」</strong>が運営する公的な結婚支援センターです。スマートフォンでお相手を検索できるほか、AIが希望条件や価値観診断の結果をもとにお相手の紹介状を配信します。拠点は<strong>福井市中央のセンターと、若狭町の嶺南サテライト</strong>の2か所です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>利用登録料は<strong>{fee.toLocaleString()}円（登録から2年間有効）</strong>で、1年あたりに換算すると{perYear.toLocaleString()}円です（当サイト算出）。2026年8月1日〜2027年3月31日は、<strong>新たに登録する独身女性の登録料が5,000円</strong>になるキャンペーンが実施されています。「ふくい結婚応援企業」に勤務する方は男女とも5,000円です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>登録料の助成は、<strong>池田町が全額、勝山市・敦賀市・越前市・鯖江市が半額</strong>です（当サイトが2026年11月22日に確認した範囲）。このほか、福井県婦人福祉協議会が運営する<strong>福井県結婚相談所（登録料1,000円・成婚時4,000円）</strong>が県内{venues}か所の会場で相談に応じています（会場数は当サイトが数えた値）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。公的な窓口は費用を大きく抑えられる一方、ふく恋に登録できるのは原則として県内在住・在勤で定住予定の方、または福井県への移住を予定している方です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">ふく恋（ふくい婚活サポートセンター）の料金と入会条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>ふくい結婚応援協議会（県と県内全市町で構成）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>料金</td><td className={td}>利用登録料10,000円（税込・登録から2年間有効）。本人確認の面談時に現金で一括払い（WEB面談の場合は口座振込）。月会費・紹介料・成婚料はかからない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>返金・更新</td><td className={td}>納めた登録料は返還されない（登録期間内に一度も紹介されない場合も返金なし）。紹介ストップ・活動休止の期間があっても登録期間は延長されない。満期後も続ける場合は再度登録料が必要</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>割引</td><td className={td}>女性限定キャンペーン：2026年8月1日〜2027年3月31日に本人確認の面談を受けた新規の独身女性は5,000円。法人割引：「ふくい結婚応援企業」に勤務する方の新規登録料は男女とも5,000円（令和6年6月1日開始）。両方に該当する女性は0円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会員になれる方</td><td className={td}>結婚を誠実に希望し、自ら婚活の努力をする意思のある20歳以上の独身男女で、システムを使えるスマートフォンまたはパソコンを持ち、福井県に住んでいるか勤めていて今後も定住する予定の方、または県外に住んでいても近い将来福井県に移住を予定している方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>面談時に必要なもの</td><td className={td}>写真付きの身分証明書の原本（運転免許証、マイナンバーカード等）、利用登録料、法人割引の該当者は勤務先を証明する書類（社員証、健康保険証等）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>本登録後にアップロードする書類</td><td className={td}>写真付き身分証、本籍地の市町村が発行する独身証明書または戸籍抄本（発行から3か月以内）、所得証明書・源泉徴収票・確定申告書の控えのいずれか1つ、本人のみが写った3か月以内の写真1〜2枚（バストアップ1枚は必須）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              ふく恋では、以前実施されていた20代限定の登録料半額キャンペーンは終了しています。現在実施されている割引は、上の表の女性限定キャンペーンと法人割引です。勤務先が「ふくい結婚応援企業」に該当するかどうかは、ふく恋のサイトに掲載された企業一覧で確認できます。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MATCHING_URL} {...ext}>ふく恋 ふくい結婚応援ポータル「マッチングシステム」</a>・<a href={KIYAKU_URL} {...ext}>「ふくい婚活サポートセンター マッチングシステム利用規約」（PDF）</a>・<a href={CAMPAIGN_URL} {...ext}>「女性限定！システム利用登録料半額キャンペーン実施中」</a>・<a href={HOUJIN_URL} {...ext}>「ふくい結婚応援企業で働く方はシステム利用登録料が5,000円になります」</a>・<a href={INFO_URL} {...ext}>「お知らせ」一覧</a>（いずれも2026年11月22日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">お見合いまでの流れと実績</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>WEBで入会申込（仮登録）をし、面談を予約する</li>
              <li>センター来所・嶺南サテライト来所・WEBのいずれかで本人確認の面談を受け、続けて活動開始前アドバイスを受講する（合わせて1時間程度）</li>
              <li>会員番号がメールで届いたら、マイページでプロフィールを登録し、必要書類をアップロードする</li>
              <li>AIによる紹介状の配信、または自分での検索・申込みでお相手を探す。紹介状の回答期限は7日間で、双方がYESと回答するとお見合いが成立する</li>
              <li>お見合いの日程はマイページで調整し、場所は候補リストから選ぶ（女性の希望を優先）</li>
              <li>お見合い後に双方がYESと回答するとプレ交際となり、この段階では他の方とのお見合いも可能。1対1の真剣交際に進むと新たな紹介は止まり、結婚の意思が固まれば成婚退会となる</li>
            </ol>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>実績の項目</th><th className={th}>公表値</th><th className={th}>時点・備考</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>成婚報告数</td><td className={td}>累計{seikon}組</td><td className={td}>令和2年11月の運用開始からの累計。2025年12月15日に記念セレモニーを開催</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お見合い実施数</td><td className={td}>累計約{omiai.toLocaleString()}組</td><td className={td}>令和7年11月末時点</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>交際成立数</td><td className={td}>累計約{kousai.toLocaleString()}組</td><td className={td}>令和7年11月末時点</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録者数</td><td className={td}>約{members.toLocaleString()}人</td><td className={td}>令和7年11月末時点</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              公表値から当サイトが計算すると、お見合い約{omiai.toLocaleString()}組に対して交際成立は約{kousai.toLocaleString()}組で、お見合いから交際に進んだ割合は約{kousaiRate}％です。いずれも「約」の付いた累計値をもとにした目安で、センターが公表している成婚率ではありません。民間の結婚相談所が公表する成婚率とは定義が異なるため、単純な比較はできない点にご注意ください。
            </p>
            <p>
              ふく恋のお知らせ一覧（2026年11月22日確認）に、事業の停止や休止の告知はありません。直近では、2026年10月23日14時から24日14時（予定）まで、セキュリティ強化のための緊急メンテナンスが告知されていました。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MATCHING_URL} {...ext}>ふく恋「マッチングシステム」</a>・<a href={KIYAKU_URL} {...ext}>「マッチングシステム利用規約」（PDF）</a>・<a href={SEIKON_URL} {...ext}>「ふく恋成婚報告数が累計100組になりました！」（2025年12月24日）</a>・<a href={MAINTE_URL} {...ext}>「ふく恋マッチングシステムセキュリティ強化緊急メンテナンスのお知らせ」</a>（いずれも2026年11月22日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">センターと嶺南サテライトの所在地・開所時間</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>拠点</th><th className={th}>所在地・電話</th><th className={th}>開所時間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>ふくい婚活サポートセンター</td><td className={td}>福井市中央1丁目21-37 リベラルアーツビル4階／0776-89-1086。無料駐車場なし</td><td className={td}>予約制。月・木・金 11:00〜19:00、土・日・祝日 9:00〜17:00。火・水曜日と、4月29日〜5月6日、8月11日〜8月17日、12月29日〜1月3日は休業</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>嶺南サテライト</td><td className={td}>三方上中郡若狭町北前川16-16-1（YUMI KATSURA MUSEUM WAKASA内）／0776-89-1086。無料駐車場あり</td><td className={td}>完全予約制。第2・第4日曜 12:00〜15:00。職員は常駐していない</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              本人確認の面談はWEBでも受けられるため、来所が難しい場合はWEB面談を選ぶことができます。開所時間は変更される場合があるため、来所の前にセンターへご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CENTER_URL} {...ext}>ふく恋「ふくい婚活サポートセンターについて」</a>・<a href={MATCHING_URL} {...ext}>「マッチングシステム」</a>（いずれも2026年11月22日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">市町の登録料助成（池田町・勝山市・敦賀市・越前市・鯖江市）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>市町</th><th className={th}>助成額</th><th className={th}>主な条件</th><th className={th}>公式の掲載時点</th></tr></thead>
                <tbody>
                  {josei.map((j) => (
                    <tr key={j.town} className="border-t border-[#E5DCCF] align-top"><td className={td}>{j.town}</td><td className={td}>{j.amount}</td><td className={td}>{j.cond}</td><td className={td}>{j.updated}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              勝山市・敦賀市・越前市・池田町では、助成を受けるためにセンターでの本人確認の面談時に同意書を提出します（オンライン面談の場合はメールで提出する旨を案内している市町もあります）。勝山市と敦賀市は、「ふくい結婚応援企業」に勤務する市民は法人割引と市の助成を合わせて無料で登録できると案内しています。女性限定キャンペーンについても、両市は「別途助成キャンペーン等が実施されている場合は重複して助成を受けられる」としています。キャンペーンと市の助成を併用した場合の自己負担額は公式に明記されていないため、登録前に市またはセンターでご確認ください。
            </p>
            <p>
              上の5市町以外の市町については、当サイトでは登録料助成の公式ページを確認できていません。池田町のページは2024年4月1日更新のため、現在の内容は町の保健福祉課にご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={IKEDA_URL} {...ext}>池田町「ふくい婚活サポートセンターのマッチングシステム利用登録料を助成します！」</a>・<a href={KATSUYAMA_URL} {...ext}>勝山市「ふく恋マッチングシステムの新規登録料を半額助成します」</a>・<a href={TSURUGA_URL} {...ext}>敦賀市「『ふく恋』マッチングシステムの新規登録料を助成します」</a>・<a href={ECHIZEN_JOSEI_URL} {...ext}>越前市「『ふく恋』マッチングシステムの利用登録料の助成について」</a>・<a href={ECHIZEN_CHIRASHI_URL} {...ext}>同 R8登録料助成周知チラシ（PDF）</a>・<a href={SABAE_URL} {...ext}>鯖江市「令和8年度地域少子化対策重点推進事業実施計画書（鯖江市ふく恋マッチングシステム登録料助成事業）」（PDF）</a>（いずれも2026年11月22日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">福井県結婚相談所と地域の縁結びさん</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>福井県結婚相談所</th><th className={th}>地域の縁結びさん</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営・担い手</td><td className={td}>福井県婦人福祉協議会（結婚相談員が対応）</td><td className={td}>福井県の登録を受けたボランティア。相談窓口は県の「地域の縁結び活動応援事業」を受託した（株）キャストコミュニケーションズ</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>費用</td><td className={td}>登録料1,000円（通信費実費相当）。結婚成立時に1組につき4,000円（相談諸経費）</td><td className={td}>相談窓口・縁結びさんへの相談、相談者登録は無料</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>仕組み</td><td className={td}>相談会場で登録し、相手方の登録票を見て希望の方を選ぶ。双方の希望が一致した場合に紹介（お見合い）</td><td className={td}>窓口スタッフと希望に合う縁結びさんを探し、縁結びさんに直接相談。縁結びさんの紹介でお見合いし、成婚までサポートを受ける</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要なもの</td><td className={td}>写真L版2枚（3か月以内に撮影）、独身証明書（6か月以内）、登録・通信料1,000円</td><td className={td}>公式には記載がありません</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>窓口</td><td className={td}>福井市松本3丁目16-10 福井県職員会館2階／0776-27-3184。月・水・金曜日 10:00〜15:00（受付終了14:30、新規受付は13:00まで）。県内の相談会場は一覧に{venues}か所</td><td className={td}>福井市西開発1丁目2310 株式会社キャスト3F／0776-50-7819。水曜日〜日曜日・祝日 11:00〜19:00（事前予約制、対面またはオンライン）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>実績</td><td className={td}>公式には記載がありません</td><td className={td}>活動人数245人、相談者数1,091人（時点の記載なし）。平成22年からの累計で成婚571件、お見合い10,500件</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              福井県結婚相談所の相談会場一覧には、福井市役所本館（毎週水曜日、第5週は休み）、AOSSA（第3土曜日・要予約）、坂井市・あわら市・大野市・勝山市・鯖江市・越前市・越前町・敦賀市・美浜町・高浜町・おおい町・若狭町・永平寺町の会場など、{venues}か所が掲載されています（当サイトが数えた値）。嶺南の一部の会場は奇数月または偶数月のみの開催です。越前市は、越前市婦人福祉協議会に委託して毎月第1・第3水曜日と第4土曜日に市民プラザたけふで結婚相談を行っており、持ち物は独身証明書・写真2枚・申込金1,000円です（予約不要）。
            </p>
            <p>
              地域の縁結びさんは、理美容業やブライダル関連業の方、民生児童委員などが務めるボランティアで、県内17市町に在住して活動しています。福井県は縁結びさんの定例相談会も開催しており、ふく恋のイベント情報には2026年11月29日に嶺南で開催される相談会（20歳以上の独身男女・無料）が掲載されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SOUDANJO_URL} {...ext}>ふく恋「福井県結婚相談所」</a>・<a href={SOUDANJO_LIST_URL} {...ext}>「福井県結婚相談所の一覧」</a>・<a href={CUPID_URL} {...ext}>「地域の縁結びさん」</a>・<a href={PORTAL_URL} {...ext}>ふく恋 トップページ（イベント情報）</a>・<a href={PREF_CUPID_URL} {...ext}>福井県「地域の縁結びさんにご相談ください」</a>・<a href={ECHIZEN_SOUDAN_URL} {...ext}>越前市「結婚相談について（11月開催）」</a>（いずれも2026年11月22日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス・条件</th><th className={th}>登録費用の目安</th><th className={th}>登録の有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>ふく恋（通常）</td><td className={td}>10,000円（1年あたり換算5,000円）。月会費・成婚料なし</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>同・新規の独身女性（キャンペーン期間中）／結婚応援企業に勤務する方</td><td className={td}>5,000円（両方に該当する女性は0円）</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>同・池田町在住（町の助成を利用）</td><td className={td}>0円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>同・勝山市／敦賀市／越前市／鯖江市在住（市の助成を利用）</td><td className={td}>5,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>福井県結婚相談所</td><td className={td}>登録料1,000円。結婚成立時に1組4,000円</td><td className={td}>公式には記載がありません</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>地域の縁結びさん</td><td className={td}>相談・相談者登録は無料</td><td className={td}>—</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/ishikawa/" className="text-[#A08447] underline">石川県「いしかわ縁結びマッチング」</Link></td><td className={td}>10,000円（キャンペーンで20歳代は無料・30歳代は5,000円）。お見合いごとに交通費1,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/gifu/" className="text-[#A08447] underline">岐阜県「おみサポ・ぎふ」</Link></td><td className={td}>登録・利用無料</td><td className={td}>—</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/nagano/" className="text-[#A08447] underline">長野県「NAGANO ai MATCH」</Link></td><td className={td}>システム登録料10,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/niigata/" className="text-[#A08447] underline">新潟県「ハートマッチにいがた」</Link></td><td className={td}>20〜39歳は入会登録料無料、40歳以上11,000円。お引合せごとに1人2,100円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              上の表は、公式に公表されている登録料と市町の助成額から当サイトが整理した目安です。公的な窓口の費用には、お見合いの際の交通費や飲食代などは含まれません。費用だけを比べると、ふく恋や福井県結婚相談所は民間の結婚相談所よりも大幅に低く抑えられます。一方で、ふく恋は自分で検索・判断して進める仕組みが中心で、センターの開所日は週5日（火・水曜日は休業）です。
            </p>
            <p>
              民間の結婚相談所は、費用がかかる代わりに、担当者がお相手を提案したり、交際中の相談に継続的に応じたりするところが多くあります。福井県内から利用できるオンライン型の結婚相談所や、京都府・大阪府の結婚相談所も選択肢になります。費用と支援の手厚さのどちらを重視するかを整理したうえで、公的な窓口と民間の結婚相談所を比べることをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。石川県・岐阜県・長野県・新潟県の料金は、当サイトの各ページで各公式サイトの情報を確認した内容です。料金や助成の内容は変更される場合があります。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/shiga/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">しが結（滋賀県）</Link>
            <Link href="/knowledge/toyama/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">とやまマリッジサポートセンター（富山県）</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/knowledge/ishikawa/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">いしかわ結婚支援センター（石川県）</Link>
            <Link href="/knowledge/gifu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">おみサポ・ぎふ（岐阜県）</Link>
            <Link href="/knowledge/mie/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">みえむすび（三重県）</Link>
            <Link href="/knowledge/nagano/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">NAGANO ai MATCH（長野県）</Link>
            <Link href="/knowledge/niigata/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ハートマッチにいがた（新潟県）</Link>
            <Link href="/knowledge/tochigi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">とちぎ結婚支援センター（栃木県）</Link>
            <Link href="/area/kyoto/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">京都の結婚相談所</Link>
            <Link href="/area/osaka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">大阪の結婚相談所</Link>
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
