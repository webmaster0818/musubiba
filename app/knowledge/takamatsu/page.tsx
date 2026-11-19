import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-19 確認）。
// ・登録できる方・登録方法・必要書類・入会登録料10,000円・登録期間2年・返金なし・閲覧45分・申込み3人まで・回答期限・お引合せ費用2,000円・当日不参加時の2,000円・交際開始後の連絡先の伝達・成婚の定義：かがわ縁結び支援センター「縁結びマッチング 利用規約」
// ・年齢の上限なし・独身証明書の3か月の起点・更新手続き・2回目以降はおせっかいさんの立会いなし：同「よくあるご質問」
// ・お引合せの流れ・成婚記念品と知事のお祝いメッセージ：同「縁結びマッチング」
// ・新規会員登録料の半額キャンペーン（令和8年10月1日〜令和9年3月31日）・協力団体従業員は無料・過去の会員は対象外：同 お知らせ（2026年10月6日）、香川県「開設10周年記念キャンペーン」
// ・マッチング会員数・イベントユーザー数・カップル数・成婚報告数（令和8年10月末現在）：同 お知らせ（2026年11月7日）
// ・センターの所在地・開所時間：同「アクセス」。高松市内の特設会場（瓦町FLAG8階）と日程：同「特設会場のお知らせ」
// ・県からかがわ健康福祉機構への委託：香川県「かがわ縁結び支援センター（EN‐MUSUかがわ）について」。開設10周年（2026年10月）：香川県「開設10周年記念行事等」
// ・市町の登録料補助（観音寺市・東かがわ市・土庄町・綾川町・琴平町・まんのう町）と結婚新生活支援補助金の実施市町（高松市の掲載なし）：香川県「市町の結婚支援の取組（令和8年度）」
// ・高松市がセンターを案内していること：高松市「はたちの扉」結婚（PDF）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const TOP_URL = "https://www.ems-kagawa.jp/";
const MATCHING_URL = "https://www.ems-kagawa.jp/matching/";
const TERMS_URL = "https://www.ems-kagawa.jp/matching/kiyaku.php";
const FAQ_URL = "https://www.ems-kagawa.jp/matching/faq.php";
const ACCESS_URL = "https://www.ems-kagawa.jp/matching/info.php";
const VENUE_URL = "https://www.ems-kagawa.jp/matching/tokubetsu.php";
const CAMPAIGN_URL = "https://www.ems-kagawa.jp/archive/?p=3477";
const MEMBERS_URL = "https://www.ems-kagawa.jp/archive/?p=3525";
const PREF_URL = "https://www.pref.kagawa.lg.jp/kosodate/shoshika/en-musu/index.html";
const PREF_CAMPAIGN_URL = "https://www.pref.kagawa.lg.jp/kosodate/shoshika/en-musu/10th-campaign.html";
const PREF_10TH_URL = "https://www.pref.kagawa.lg.jp/kosodate/shoshika/en-musu/10anniversary.html";
const PREF_SHIMACHI_URL = "https://www.pref.kagawa.lg.jp/kosodate/shoshika/en-musu/shimachishiensaku.html";
const CITY_PDF_URL = "https://www.city.takamatsu.kagawa.jp/link/hatachinotobirapdf.files/14kekkon.pdf";

const stats = { members: 814, m: 514, f: 300, eventUsers: 3241, couples: 2719, seikonMatching: 248, seikonEvent: 22 };

const subsidyTowns = ["観音寺市", "東かがわ市", "土庄町", "綾川町", "琴平町", "まんのう町"];

export const metadata: Metadata = {
  title: "高松市で結婚相談所を探す方へ｜県の「EN-MUSUかがわ」は2年1万円・2027年3月まで新規半額、成婚248組と民間との費用比較",
  description:
    "香川県のかがわ縁結び支援センター（EN-MUSUかがわ）は高松市番町にあり、縁結びマッチングの入会登録料は2年間10,000円（2027年3月31日までの新規登録は5,000円）です。登録条件、お引合せの費用とルール、会員814名・成婚報告248組、高松市内の特設会場、民間との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/takamatsu/" },
};

const faqs = [
  {
    q: "EN-MUSUかがわの縁結びマッチングの料金はいくらですか？",
    a: "利用規約では、入会登録料は登録期間（2年間）で10,000円です。利用規約に月会費や成婚料の定めはなく、お引合せのたびに1人2,000円（茶菓代・おせっかいさんの交通費）がかかります。令和8年10月1日から令和9年3月31日までに登録期間が始まる新規会員は、登録料が半額の5,000円、協力団体の従業員は無料です。過去にマッチング会員として活動したことのある方は対象外です。",
  },
  {
    q: "高松市に登録料の補助はありますか？",
    a: "香川県の「市町の結婚支援の取組（令和8年度）」で登録料の補助が掲載されているのは、観音寺市・東かがわ市・土庄町・綾川町・琴平町・まんのう町の6市町で、高松市は掲載されていません（2026年11月19日確認）。同じページの結婚新生活支援補助金の一覧にも高松市は掲載されていないため、最新の状況は高松市の担当窓口でご確認ください。",
  },
  {
    q: "高松市以外に住んでいても登録できますか？何歳まで登録できますか？",
    a: "登録できるのは、結婚を希望し自ら努力する20歳以上の独身の方で、香川県内にお住まいの方、県内にお勤めの方、または香川県での居住を希望される方です。よくあるご質問では、20歳以上であれば年齢の上限はないと案内されています。スマートフォン等でマッチングシステムを操作でき、本人のメールアドレスと電話番号を登録できることも条件です。",
  },
  {
    q: "一度に何人まで申し込めますか？",
    a: "利用規約では、お引合せの申込みは1回につき3人までです。第1希望の方から順にお相手へ申込みが送られ、お相手は3日・5日・7日のいずれかの回答期限までに返事をします。申込みの意思確認を行っている間は、ほかの会員のプロフィールを閲覧できません。一度申し込むとキャンセルはできません。",
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
  headline: "高松市で結婚相談所を探す方へ：県の「EN-MUSUかがわ」の料金・登録条件と、高松市内の会場、民間の結婚相談所との比較",
  description: "香川県のかがわ縁結び支援センター（EN-MUSUかがわ）の縁結びマッチングの料金・登録条件・活動のルール・会員数と成婚報告数、高松市内のセンターと特設会場、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/takamatsu/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "高松市の婚活（EN-MUSUかがわ）", item: "https://mu-su-bi-ba.com/knowledge/takamatsu/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";

export default function KnowledgeTakamatsu() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "高松市の婚活（EN-MUSUかがわ）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          高松市で結婚相談所を探す方へ：県の「EN-MUSUかがわ」の料金・登録条件と、高松市内の会場、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月19日（料金・登録条件・利用規約・会員数・会場は同日にかがわ縁結び支援センター公式サイト、キャンペーンと市町の支援は香川県公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />高松市にある県の「EN-MUSUかがわ」は、2年間10,000円で1対1のお引合せを利用できます
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>香川県は、公益財団法人かがわ健康福祉機構に委託して「かがわ縁結び支援センター（EN-MUSUかがわ）」を運営しています。センターは<strong>高松市番町</strong>の香川県社会福祉総合センター1階にあり、2026年10月に開設10周年を迎えました。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>1対1の「縁結びマッチング」の入会登録料は<strong>2年間10,000円</strong>です。令和8年10月1日〜令和9年3月31日に登録期間が始まる新規会員は<strong>半額の5,000円</strong>（協力団体の従業員は無料）です。お引合せのたびに1人2,000円がかかります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>公式サイトのお知らせでは、マッチング会員は<strong>{stats.members}名</strong>（男性{stats.m}名・女性{stats.f}名）、マッチングによる<strong>成婚報告は{stats.seikonMatching}組</strong>です（令和8年10月末現在）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>県の令和8年度の一覧では、高松市の登録料補助は掲載されていません。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">縁結びマッチングの料金と登録条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>香川県（公益財団法人かがわ健康福祉機構に委託）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会登録料</td><td className={td}>10,000円（登録期間2年間）。一度も閲覧やお引合せを利用しなくても、退会時の返金はなし。来所面談は現金払い、オンライン面談は面談後1週間以内に振込み</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>新規登録のキャンペーン</td><td className={td}>令和8年10月1日〜令和9年3月31日に登録期間が始まる新規会員は5,000円、協力団体の従業員は無料。過去にマッチング会員として活動したことのある方は対象外</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録期間</td><td className={td}>入会登録料の入金確認日から2年間。終了すると自動的に退会となり、休会しても期間は延長されない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お引合せの費用</td><td className={td}>1人2,000円（茶菓代・おせっかいさんの交通費）。当日来られなかった場合は、次回のお引合せ時に別途2,000円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録できる方</td><td className={td}>結婚を希望し自ら努力する20歳以上の独身の方（年齢の上限なし）／香川県内にお住まいの方、県内にお勤めの方、または香川県での居住を希望される方／スマートフォン等でマッチングシステムを操作でき、本人のメールアドレスと電話番号を登録できる方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>主な必要書類</td><td className={td}>本籍地の市区町村長が発行する独身証明書の原本（発行日から3か月以内。マイナンバーカードによるオンラインの独身確認でも可）、写真付き公的身分証明書の原本（マイナンバーカード・運転免許証等）、プロフィール用写真1枚（3か月以内に撮影した上半身の写真）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              登録は、ウェブサイトからの入会申込みのあと、センターへの来所面談またはオンライン面談で行います。入会申込日を含めて60日以内に入力を完了する必要があります。独身証明書と写真の「3か月以内」は、面談日を起点に数えると案内されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className="underline">かがわ縁結び支援センター「縁結びマッチング 利用規約」</a>・<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="underline">「よくあるご質問」</a>・<a href={CAMPAIGN_URL} target="_blank" rel="noopener noreferrer" className="underline">お知らせ「開設10周年記念新規会員登録料 無料・半額キャンペーン」（2026年10月6日）</a>・<a href={PREF_CAMPAIGN_URL} target="_blank" rel="noopener noreferrer" className="underline">香川県「開設10周年記念キャンペーン」</a>・<a href={PREF_URL} target="_blank" rel="noopener noreferrer" className="underline">香川県「かがわ縁結び支援センターについて」</a>（いずれも2026年11月19日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">お引合せから交際までの流れと利用規約のルール</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>活動は、プロフィールの閲覧、お引合せの申込み、お引合せ、交際、成婚の順に進みます。</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>ルール</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>プロフィールの閲覧</td><td className={td}>センターのタブレット端末（来所予約制・1回45分）または自宅のスマートフォン等（1日1回45分）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申込みの上限</td><td className={td}>1回につき3人まで。第1希望の方から順に申込みが送られ、意思確認の間はほかの会員のプロフィールを閲覧できない。申込み後のキャンセルは不可</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申込みへの回答</td><td className={td}>3日以内・5日以内・7日以内のいずれかの回答期限までに、承諾かお断りかを返事する</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お引合せ</td><td className={td}>ボランティアの「縁結びおせっかいさん」が立ち会い、県内の応援団体（飲食店・ホテル等）で個別に行う。場所は原則として申込みを受けた方のエリア</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お引合せ後の回答</td><td className={td}>翌日から3日以内に、交際するかどうかをおせっかいさんに伝える</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>個人情報の交換</td><td className={td}>交際が成立するまでは行わない。交際成立後、氏名と電話番号が双方に伝えられ、2回目以降はおせっかいさんの立会いなしで会う</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              交際中はおせっかいさんが定期的に交際状況を確認し、相談にも応じます。成婚（入籍に限らず、双方で結婚を決めた・婚約した場合など）を報告すると、成婚記念品と香川県知事からのお祝いメッセージが贈られます。お相手探しは会員ご自身がシステムで行う仕組みのため、担当者からお相手の提案や継続的な助言を受けたい方は、民間の結婚相談所のサポート内容とあわせて比べることをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className="underline">かがわ縁結び支援センター「縁結びマッチング 利用規約」</a>・<a href={MATCHING_URL} target="_blank" rel="noopener noreferrer" className="underline">「縁結びマッチング」</a>・<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="underline">「よくあるご質問」</a>（いずれも2026年11月19日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">高松市内のセンターと会場、会員数・成婚報告数</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>拠点</th><th className={th}>所在地</th><th className={th}>開所日時</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>かがわ縁結び支援センター</td><td className={td}>高松市番町一丁目10番35号 香川県社会福祉総合センター1階／087-862-1711</td><td className={td}>月・土・日 10:00〜17:00、火〜木 13:00〜20:00。金曜・祝日・年末年始（12/29〜1/3）は休み</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>特設会場（高松市内）</td><td className={td}>瓦町FLAG 8階 市民サービスセンター（高松市常磐町1-3-1）</td><td className={td}>月1回程度。2026年11月24日・12月22日、2027年1月26日（いずれも火曜 12:00〜18:00）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              センターでは、このほか丸亀市・善通寺市・観音寺市・東かがわ市・土庄町でも特設会場を設けています。日程は変更されることがあるため、来所予約の前に公式サイトの「特設会場のお知らせ」をご確認ください。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目（令和8年10月末現在）</th><th className={th}>縁結びマッチング</th><th className={th}>縁結びイベント</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会員・ユーザー数</td><td className={td}>{stats.members}名（男性{stats.m}名・女性{stats.f}名）</td><td className={td}>{stats.eventUsers.toLocaleString()}名（男性1,519名・女性1,722名）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>カップル数</td><td className={td}>{stats.couples.toLocaleString()}組</td><td className={td}>472組</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>成婚報告数</td><td className={td}>{stats.seikonMatching}組</td><td className={td}>{stats.seikonEvent}組</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              マッチング会員数は退会者を除いた人数で、男性が女性の約1.7倍です。カップル数・成婚報告数の集計期間は公式のお知らせに明記されていないため、当サイトでは目安として掲載しています。市町別の会員数は公表されていません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={ACCESS_URL} target="_blank" rel="noopener noreferrer" className="underline">かがわ縁結び支援センター「アクセス」</a>・<a href={VENUE_URL} target="_blank" rel="noopener noreferrer" className="underline">「特設会場のお知らせ」</a>・<a href={MEMBERS_URL} target="_blank" rel="noopener noreferrer" className="underline">お知らせ「EN-MUSUかがわのマッチング会員数等について（10月末）」（2026年11月7日）</a>・<a href={PREF_10TH_URL} target="_blank" rel="noopener noreferrer" className="underline">香川県「開設10周年記念行事等」</a>（いずれも2026年11月19日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">高松市と県内市町の支援制度</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              香川県の「市町の結婚支援の取組（令和8年度）」では、縁結びマッチングの入会登録料（10,000円）の2分の1を負担する市町として、次の{subsidyTowns.length}市町が掲載されています。
            </p>
            <ul className="list-disc pl-6 space-y-1">
              {subsidyTowns.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p>
              同じページには、高松市の登録料補助や結婚新生活支援補助金は掲載されていません（2026年11月19日確認）。高松市は、20歳を迎える市民向けの案内資料「はたちの扉」で、結婚の出会いの場としてかがわ縁結び支援センターを紹介しています。高松市独自の制度の有無や最新の状況は、申込みの前に高松市の担当窓口でご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_SHIMACHI_URL} target="_blank" rel="noopener noreferrer" className="underline">香川県「市町の結婚支援の取組（令和8年度）」</a>・<a href={CITY_PDF_URL} target="_blank" rel="noopener noreferrer" className="underline">高松市「はたちの扉」結婚（PDF）</a>（いずれも2026年11月19日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>登録の有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>香川県「EN-MUSUかがわ」縁結びマッチング</td><td className={td}>10,000円（令和9年3月31日までの新規登録は5,000円）＋お引合せ1回2,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/okayama/" className="text-[#A08447] underline">岡山県「おかやま縁むすびネット」</Link></td><td className={td}>10,000円（2027年3月31日まで無料）＋お引合せ1回2,000円（オンライン1,000円）</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/oita/" className="text-[#A08447] underline">大分県「OITAえんむす部」</Link></td><td className={td}>10,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用だけを比べると、EN-MUSUかがわは民間の結婚相談所よりも大幅に低く抑えられます。たとえば2年間でお引合せを5回利用した場合でも、登録料10,000円とお引合せ費用10,000円の計20,000円が目安です。一方で、お相手探しは会員ご自身が行い、申込みは1回3人までといった上限があります。民間の結婚相談所は、費用がかかる代わりに、担当者によるお相手の提案や交際中の相談などを行うところが多くあります。高松市内から利用できるオンライン型の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。岡山県・大分県のセンターの料金は、各センターの公式サイトで2026年11月18日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/fukuchiyama/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">福知山市の婚活（きょうと婚活応援センター）</Link>
            <Link href="/knowledge/kagoshima/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">かごしま出会いサポートセンター（鹿児島県）</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/knowledge/okayama/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">おかやま縁むすびネット（岡山県）</Link>
            <Link href="/knowledge/oita/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">OITAえんむす部（大分県）</Link>
            <Link href="/knowledge/hyogo-deai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ひょうご出会いサポートセンター（兵庫県）</Link>
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
