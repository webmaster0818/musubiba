import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-23 確認）。
// ・協議会の設置目的・委員約20人・事務局（旭市役所市民生活課市民生活支援班内）：旭市出会いコンシェルジュ「旭市出会いコンシェルジュについて」
// ・会員登録の要件・特典・登録方法：同「会員登録について」「会員登録ガイド」
// ・登録料無料・参加費とキャンセル料はイベントごと・男性は会員に限る・結婚祝い（市内30,000円分／市外5,000円分／イベント外3,000円分の旭市共通商品券）・登録期間5年（35歳未満の延長）：同「利用規約」（令和4年4月1日施行分、第15条は令和7年4月1日施行）
// ・入会費なし・会員数196名（令和2年12月17日現在）・年齢上限なし・再婚の方も登録可：同「よくある質問」
// ・2025年7月〜2026年9月の開催10回の日時・会場・参加人数：同 各イベント報告ページ（events/20250726〜20260927）
// ・受付中・満席のイベント2件：同 events/20261129・20261218
// ・旭市出会いの場創出事業（令和8年度、事業費1,300,000円、婚活イベント年7回程度・延べ110人程度、市の婚姻件数162件（R6）・目標300件（R11）、事業経由の婚姻7件（R6年度））：旭市「地域少子化対策重点推進交付金」（企画政策課、2026年6月11日更新）掲載の実施計画PDF
// ・平成19年度の協議会設置・H29〜R2の会員数と結婚報告数：旭市「事務事業評価シート（令和2年度事後評価・決算）出会いの場創出事業」（令和4年2月10日時点）
// ・千葉県の令和8年度の県事業（広域連携婚活支援事業・結婚支援コンシェルジュ・ちば部 等）：千葉県「地域少子化対策重点推進交付金の活用について」（2026年9月24日更新）
// ・結婚新生活支援を実施する30市町村の一覧（旭市は掲載なし）：千葉県「令和8年度地域少子化対策重点推進交付金」（2026年8月27日更新）
// ・ちばメタ婚（令和8年1月18日開催・参加費1,000円）：千葉県 発表資料（2026年1月7日更新）
// ・松本市・とちぎ結婚支援センターの料金：当サイト /knowledge/matsumoto/（2026-11-20 確認）・/knowledge/tochigi/（2026-11-21 確認）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const DC_TOP_URL = "https://www.asahishi-dc.com/";
const DC_ABOUT_URL = "https://www.asahishi-dc.com/about-acec/";
const DC_MEMBER_URL = "https://www.asahishi-dc.com/member-registration/";
const DC_GUIDE_URL = "https://www.asahishi-dc.com/member-registration/guide/";
const DC_TERMS_URL = "https://www.asahishi-dc.com/terms/";
const DC_FAQ_URL = "https://www.asahishi-dc.com/faq/";
const DC_EVENTS_URL = "https://www.asahishi-dc.com/events/";
const DC_EVENT_URL = (d: string) => `https://www.asahishi-dc.com/events/${d}/`;
const CITY_PLAN_URL = "https://www.city.asahi.lg.jp/soshiki/4/18842.html";
const CITY_PLAN_PDF_URL = "https://www.city.asahi.lg.jp/uploaded/attachment/34005.pdf";
const CITY_EVAL_PDF_URL = "https://www.city.asahi.lg.jp/uploaded/attachment/18247.pdf";
const PREF_KOUFUKIN_URL = "https://www.pref.chiba.lg.jp/kosodate/syousikakouhukin.html";
const PREF_R8_LIST_URL = "https://www.pref.chiba.lg.jp/kosodate/shoshikataisaku/r8sicyousonzigyou.html";
const PREF_METAKON_URL = "https://www.pref.chiba.lg.jp/kosodate/press/2025/03metakon2025.html";

const pastEvents = [
  { d: "20250726", date: "2025年7月26日（土）", name: "Board game恋活", venue: "おひさまテラスパーティールーム", men: 7, women: 8 },
  { d: "20250823", date: "2025年8月23日（土）", name: "レザークラフト恋活", venue: "旭市役所1階 市民ホール", men: 6, women: 5 },
  { d: "20250927", date: "2025年9月27日（土）", name: "昭和レトロ恋活", venue: "銚子電鉄（貸し切り）・喫茶店", men: 9, women: 8 },
  { d: "20251115", date: "2025年11月15日（土）", name: "手打ちうどん恋活", venue: "おひさまテラスキッチンスタジオ", men: 8, women: 8 },
  { d: "20251205", date: "2025年12月5日（金）", name: "恋するクリスマス（旭市雇用対策協議会と合同）", venue: "ホテルサンモール", men: 19, women: 18 },
  { d: "20260202", date: "2026年2月2日（月）", name: "夜景を眺めながら まったり恋活", venue: "旭市役所 展望階", men: 8, women: 8 },
  { d: "20260301", date: "2026年3月1日（日）", name: "カフェでゆったり恋活", venue: "COMFY Cafe.421", men: 8, women: 8 },
  { d: "20260729", date: "2026年7月29日（水）", name: "夜景を眺めながら まったり恋活", venue: "旭市役所 展望階", men: 8, women: 8 },
  { d: "20260816", date: "2026年8月16日（日）", name: "カフェでゆったり恋活", venue: "Neene table（旭市内）", men: 8, women: 8 },
  { d: "20260927", date: "2026年9月27日（日）", name: "金魚釣り恋活", venue: "新昭園芸（旭市内）", men: 7, women: 7 },
];

const totalMen = pastEvents.reduce((s, e) => s + e.men, 0);
const totalWomen = pastEvents.reduce((s, e) => s + e.women, 0);

const upcomingEvents = [
  {
    d: "20261129",
    date: "2026年11月29日（日）16:00〜18:30",
    name: "りんご飴づくり恋活",
    detail: "旭市内（会場は参加決定後に案内）。20〜39歳の独身の方、男女各8名。参加費は男性1,500円・女性1,000円（当日現金払い）。申込締切は2026年11月16日",
    status: "満席・受付終了",
  },
  {
    d: "20261218",
    date: "2026年12月18日（金）19:00〜21:30",
    name: "恋するクリスマス（市内企業で構成する雇用対策協議会と合同）",
    detail: "旭市内（会場は参加決定後に案内）。20歳以上の独身の方、男女各16名（出会いコンシェルジュ・雇用対策協議会から男女各8名ずつの予定）。参加費は男性3,000円・女性2,000円（当日現金払い）。申込締切は2026年12月8日",
    status: "受付中（2026年11月23日時点）",
  },
];

export const metadata: Metadata = {
  title: "旭市で婚活する方へ｜市の「旭市出会いコンシェルジュ」は登録無料・参加費のみ、2025年7月以降の開催10回・参加174名を集計",
  description:
    "旭市の婚活支援「旭市出会いコンシェルジュ」は登録料が無料で、費用はイベントの参加費のみです。男性の登録条件、イベントをきっかけに結婚した場合の商品券、2025年7月以降に開かれた10回の参加人数、受付中のイベント、千葉県の取組、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/asahi/" },
};

const faqs = [
  {
    q: "旭市出会いコンシェルジュの費用はいくらですか？",
    a: "利用規約では、会員登録料は無料と定められています。費用はイベントに参加する場合の参加費のみで、金額はイベントごとに異なります。2026年11月・12月のイベントでは、男性1,500円・女性1,000円、男性3,000円・女性2,000円と案内されています。参加者側の都合でキャンセルした場合は、イベントごとに定めるキャンセル料がかかります。",
  },
  {
    q: "旭市外に住んでいても参加できますか？",
    a: "男性は、旭市に在住・在勤または在住予定の方が会員登録でき、イベントへの参加は会員に限られます。女性は旭市外にお住まいの方も会員登録でき、会員登録をしなくてもイベントに申し込めます（応募多数の場合は会員が優先されます）。",
  },
  {
    q: "登録の期間や年齢の上限はありますか？",
    a: "会員登録の期間は原則5年間で、登録日から5年を経過した後の最初の3月31日に登録が抹消されます。抹消日に35歳未満の方は、35歳の誕生日後の最初の3月31日まで延長できます。登録に年齢の上限はありませんが、イベントごとに年齢制限が設けられています。結婚の経験がある方も、独身であれば登録できます。",
  },
  {
    q: "結婚した場合のお祝いはありますか？",
    a: "利用規約では、双方またはいずれかが会員で、結婚した日から1年以内に結婚報告を提出した場合に、旭市共通商品券を進呈すると定められています。協議会のイベントをきっかけに結婚し旭市内に住む場合は30,000円分、旭市外に住む場合は5,000円分、イベント外の出会いで結婚した場合は3,000円分です。",
  },
  {
    q: "千葉県に会員制の結婚支援センターはありますか？",
    a: "千葉県が公表している令和8年度の実施計画には、県内の市町村が連携して婚活イベントを行う「広域連携婚活支援事業」や、市町村を支援する「結婚支援コンシェルジュ」などが掲載されていますが、他県のような会員登録制のお見合いセンターは掲載されていません。当サイトでは、2026年11月23日時点で千葉県が運営する会員制のマッチングセンターを確認できませんでした。",
  },
  {
    q: "旭市に結婚新生活支援（新婚世帯の住居費補助）はありますか？",
    a: "千葉県が公表している令和8年度に結婚新生活支援を実施する30市町村の一覧に、旭市は掲載されていません（近隣では銚子市・匝瑳市・香取市・東庄町が掲載されています）。当サイトでは、2026年11月23日時点で旭市の公式サイトに同様の補助の案内ページを確認できませんでした。最新の状況は、旭市役所（0479-62-1212・代表）へお問い合わせください。",
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
  headline: "旭市で婚活する方へ：市の「旭市出会いコンシェルジュ」の費用・登録条件と開催実績、千葉県の取組、民間の結婚相談所との比較",
  description: "旭市の婚活支援「旭市出会いコンシェルジュ」の費用・登録条件・結婚祝いと、2025年7月以降に開かれた婚活イベント10回の参加人数、受付中のイベント、千葉県の結婚支援、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-23",
  dateModified: "2026-11-23",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/asahi/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "旭市の婚活（旭市出会いコンシェルジュ）", item: "https://mu-su-bi-ba.com/knowledge/asahi/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeAsahi() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "旭市の婚活（旭市出会いコンシェルジュ）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          旭市で婚活する方へ：市の「旭市出会いコンシェルジュ」の費用・登録条件と開催実績、千葉県の取組、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月23日（費用・登録条件・イベント情報は同日に旭市出会いコンシェルジュ公式サイト、市の事業計画は旭市公式サイト、県の取組は千葉県公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />旭市の婚活支援は、市が設置する「旭市出会いコンシェルジュ」のイベントが中心です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>旭市出会いコンシェルジュは、旭市が設置する旭市後継者対策協議会の通称で、事務局は旭市役所市民生活課にあります。<strong>会員登録料は無料</strong>で、費用はイベントの参加費のみです（2026年秋冬のイベントは1,000円〜3,000円）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>男性は旭市に在住・在勤・在住予定の方</strong>が登録でき、イベントへの参加は会員に限られます。<strong>女性は市外在住でも登録でき、登録しなくても申し込めます。</strong></span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>当サイトが公式サイトの開催報告を集計したところ、2025年7月〜2026年9月に開かれた<strong>10回の参加者は合計{totalMen + totalWomen}名（男性{totalMen}名・女性{totalWomen}名）</strong>で、10回のうち8回は14〜17名の少人数でした。2026年12月18日のイベントが受付中です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。費用を抑えて地元で出会いの機会を持ちたい方は市のイベント、担当者による紹介や継続的なサポートを重視する方は民間、という比べ方が目安になります。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">旭市出会いコンシェルジュの費用と登録条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>旭市後継者対策協議会（通称：旭市出会いコンシェルジュ）。約20人の委員と事務局で活動。事務局は旭市役所市民生活課市民生活支援班内（0479-62-5396）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>費用</td><td className={td}>会員登録料は無料。イベントの参加費とキャンセル料はイベントごとに定める</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録できる方</td><td className={td}>結婚を前提とした交際を希望し、20歳以上で独身の方。旭市に在住・在勤または在住予定の方（女性は旭市外でも可）。過去に登録したことがなく、メールで連絡を受けられること</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>イベントの参加</td><td className={td}>男性は会員に限る。女性は会員登録なしでも申込み可能（応募多数の場合は会員を優先・抽選）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録期間</td><td className={td}>原則5年間（登録日から5年を経過した後の最初の3月31日に抹消）。抹消日に35歳未満の方は、35歳の誕生日後の最初の3月31日まで延長可能。年齢の上限はなし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録方法</td><td className={td}>ホームページの会員登録フォーム、または登録申込書に写真付き身分証明書のコピーを添えて事務局へ郵送・持参</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>結婚祝い</td><td className={td}>協議会のイベントをきっかけに結婚し、旭市内に住む場合は旭市共通商品券30,000円分（市外に住む場合は5,000円分、イベント外の出会いの場合は3,000円分）。結婚した日から1年以内の結婚報告が条件</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              当サイトが確認した範囲では、公式サイトに会員同士の個別の紹介（お見合い）の案内は見当たらず、活動の中心は婚活イベントです。会員登録の案内では、イベントで気になる人に声をかけられない場合などは、コンシェルジュに相談できると案内されています。旭市の事務事業評価シートによると、協議会は平成19年度に設置されました。なお、公式サイトの「よくある質問」に記載されている会員数は196名（令和2年12月17日現在）で、現在の会員数は当サイトでは確認できませんでした。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={DC_ABOUT_URL} {...ext}>旭市出会いコンシェルジュ「旭市出会いコンシェルジュについて」</a>・<a href={DC_MEMBER_URL} {...ext}>「会員登録について」</a>・<a href={DC_GUIDE_URL} {...ext}>「会員登録ガイド」</a>・<a href={DC_TERMS_URL} {...ext}>「利用規約」</a>・<a href={DC_FAQ_URL} {...ext}>「よくある質問」</a>・<a href={CITY_EVAL_PDF_URL} {...ext}>旭市「事務事業評価シート 出会いの場創出事業」（令和2年度事後評価・令和4年2月10日時点）</a>（いずれも2026年11月23日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">受付中・直近のイベント（2026年11月23日時点）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日時</th><th className={th}>名称・状況</th><th className={th}>募集条件・参加費</th></tr></thead>
                <tbody>
                  {upcomingEvents.map((e) => (
                    <tr key={e.d} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{e.date}</td>
                      <td className={td}><a href={DC_EVENT_URL(e.d)} {...ext}>{e.name}</a><br />{e.status}</td>
                      <td className={td}>{e.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              いずれのイベントも、男性は事前の会員登録が必要で、女性は住所に関わりなく申し込めます。申込み後は抽選結果がメールで届き、当選者には事務局から決定通知と案内が郵送されます。募集状況は変わることがあるため、申込みの前に各イベントページで最新の情報をご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：旭市出会いコンシェルジュ 各イベントページ（上表のリンク先。2026年11月23日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">2025年7月〜2026年9月の開催実績（10回・当サイト集計）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>旭市出会いコンシェルジュの公式サイトに掲載されている開催報告のうち、直近10回の日時・会場・参加人数を当サイトで一覧にしました。</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日</th><th className={th}>名称</th><th className={th}>会場</th><th className={th}>参加人数</th></tr></thead>
                <tbody>
                  {pastEvents.map((e) => (
                    <tr key={e.d} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{e.date}</td>
                      <td className={td}><a href={DC_EVENT_URL(e.d)} {...ext}>{e.name}</a></td>
                      <td className={td}>{e.venue}</td>
                      <td className={td}>{e.men + e.women}名（男性{e.men}名・女性{e.women}名）</td>
                    </tr>
                  ))}
                  <tr className="border-t border-[#E5DCCF] align-top bg-[#FAF7F2]"><td className={th} colSpan={3}>合計（10回）</td><td className={th}>{totalMen + totalWomen}名（男性{totalMen}名・女性{totalWomen}名）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              10回のうち8回は参加者14〜17名で、ほかは2025年8月のレザークラフト恋活が11名、旭市雇用対策協議会と合同で開いた2025年12月のクリスマスイベントが37名でした。内容は、ボードゲームやレザークラフト、うどん作り、金魚釣りなどの体験の後に1対1で話す形式が多く、旭市役所の展望階や市内のカフェも会場になっています。男女の人数がほぼ同数にそろっている点も、開催報告から読み取れる特徴です。
            </p>
            <p>
              旭市が公表している令和8年度の実施計画では、婚活イベントを年7回程度（延べ110人程度の参加）予定しています。2026年4月以降は、上表の3回と受付中・直近の2回の計5回が公式サイトに掲載されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={DC_EVENTS_URL} {...ext}>旭市出会いコンシェルジュ「イベント情報」</a>・各イベント報告ページ（上表のリンク先）・<a href={CITY_PLAN_PDF_URL} {...ext}>旭市「旭市出会いの場創出事業」実施計画（令和8年度）</a>（いずれも2026年11月23日確認）。参加人数の合計は当サイトの集計です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">旭市の事業計画と婚姻の状況</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>事業名・期間</td><td className={td}>旭市出会いの場創出事業（令和8年4月1日〜令和9年3月31日）。担当は市民生活課</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>事業費</td><td className={td}>1,300,000円（協議会の事業経費の不足分を、市が補助金として交付）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>イベントの計画</td><td className={td}>年7回程度・延べ110人程度。定員は男女各5〜20名、1対1でのトークが中心、対象は20歳以上（イベントごとに設定）。協議会の会議（年3回程度）で内容・定員・対象年齢・参加費を決定</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>旭市の婚姻件数（届出数）</td><td className={td}>162件（令和6年）。目標は300件（令和11年）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>出会いの場創出事業による婚姻件数</td><td className={td}>7件（令和6年度）。令和8年度の目標も7件</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              旭市は、第3期旭市総合戦略の基本目標の一つに「結婚・出産・子育ての希望がかない、誰もが生きがいを持てるまちづくり」を掲げており、令和8年度は国の地域少子化対策重点推進交付金を活用する事業として、この実施計画を公表しています。また、令和2年度の事務事業評価シートでは、会員登録者数が平成29年度493人・平成30年度518人・令和元年度230人・令和2年度194人、会員からの結婚報告が年4〜10人と記録されています（令和2年度は新型コロナウイルス感染症の影響でイベントの実施回数が2回でした）。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_PLAN_URL} {...ext}>旭市「地域少子化対策重点推進交付金」（企画政策課、2026年6月11日更新）</a>掲載の<a href={CITY_PLAN_PDF_URL} {...ext}>実施計画「旭市出会いの場創出事業」</a>・<a href={CITY_EVAL_PDF_URL} {...ext}>旭市「事務事業評価シート 出会いの場創出事業」（令和4年2月10日時点）</a>（いずれも2026年11月23日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">千葉県の結婚支援と、新婚世帯向けの補助</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              千葉県が公表している令和8年度の実施計画では、県の事業として、地元企業・団体と連携してモデル的な官製婚活を行う「千葉県広域連携婚活支援事業」、市町村の結婚支援を技術面・情報面から支える「千葉県結婚支援コンシェルジュ事業」、若者が趣味などでつながるコミュニティ「ちば部」を含む「若者の仲間づくり支援事業」などが挙げられています。他県のような会員登録制のお見合いセンターは掲載されておらず、当サイトでは2026年11月23日時点で、千葉県が運営する会員制のマッチングセンターを確認できませんでした。広域連携婚活支援事業の開催時期・会場も、同日時点で確認できませんでした。
            </p>
            <p>
              令和7年度には、メタバース（インターネット上の仮想空間）を使った婚活支援モデル事業「ちばメタ婚」が開かれました。令和8年1月18日の回は、千葉県内在住または在勤で結婚を希望する20代・30代の独身の方が対象で、定員は男女各12名、参加費は1,000円でした。
            </p>
            <p>
              新婚世帯の新生活の費用（新居の賃借・取得費用、引越費用等）を補助する事業は、令和8年度に県内30市町村で実施されています。千葉県の一覧には、近隣の銚子市・匝瑳市・香取市・東庄町は掲載されていますが、旭市は掲載されていません。当サイトでは、2026年11月23日時点で旭市の公式サイトに同様の補助の案内ページを確認できませんでした。結婚後に住む市町村を検討している方は、各市町村のホームページでご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_KOUFUKIN_URL} {...ext}>千葉県「地域少子化対策重点推進交付金の活用について」（2026年9月24日更新）</a>・<a href={PREF_R8_LIST_URL} {...ext}>千葉県「令和8年度地域少子化対策重点推進交付金（結婚・妊娠・共育ての相談機会提供・支援プログラム 等）」（2026年8月27日更新）</a>・<a href={PREF_METAKON_URL} {...ext}>千葉県「メタバースを活用した婚活支援モデル事業の実施について（令和8年1月18日開催）」（2026年1月7日更新）</a>（いずれも2026年11月23日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">自治体の結婚支援・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>登録の有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>旭市出会いコンシェルジュ</td><td className={td}>登録料無料。イベントの参加費のみ（2026年11月・12月の例：1,000円〜3,000円）</td><td className={td}>原則5年（35歳未満は延長あり）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/matsumoto/" className="text-[#A08447] underline">松本市の結婚支援（長野県）</Link></td><td className={td}>相談・登録料・会費・成功報酬なし</td><td className={td}>5年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/tochigi/" className="text-[#A08447] underline">とちぎ結婚支援センター（栃木県）</Link></td><td className={td}>入会登録料10,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用だけを比べると、旭市出会いコンシェルジュは民間の結婚相談所よりも大幅に低く抑えられます。一方で、活動の中心は年数回のイベントで、1回の定員も男女各8名程度が多く、抽選になる場合もあります。民間の結婚相談所は、費用がかかる代わりに、会員データベースからお相手を探せることや、担当者がお相手を提案したり交際中の相談に継続的に応じたりするところが多くあります。市のイベントで出会いの機会を持ちながら、千葉市・船橋市など県内の結婚相談所やオンライン型の結婚相談所を併用することも選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。松本市・栃木県の料金は、各公式サイトで2026年11月20日〜21日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/hachinohe/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">八戸市の婚活（AI（あい）であう）</Link>
            <Link href="/knowledge/toyooka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">豊岡市の婚活（omiai事業・Hapimari）</Link>
            <Link href="/knowledge/miai-renai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">お見合い結婚と恋愛結婚の割合</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/area/chiba/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">千葉の結婚相談所</Link>
            <Link href="/knowledge/matsumoto/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">松本市の結婚支援</Link>
            <Link href="/knowledge/tochigi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">とちぎ結婚支援センター（栃木県）</Link>
            <Link href="/knowledge/gunma/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">群馬県の結婚支援</Link>
            <Link href="/knowledge/iwaki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">いわき市の婚活</Link>
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
