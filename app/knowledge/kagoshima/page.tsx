import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-19 確認）。
// ・入会登録料・有効期間・会員登録の条件・必要書類・返金なし・振込手数料：かごしま出会いサポートセンター「マッチングTOP」「入会申し込みについて」「ご利用の流れ」「マッチング会員利用規約」
// ・申込み上限・回答期限・お引き合わせ費用・オンラインお引き合わせ・初回はサポーター同席・更新と90日後の自動削除：同「マッチング会員利用規約」「ご利用の流れ」、新着情報「利用規約の改正とシステム改修のお知らせ」（2026年10月27日）
// ・お引き合わせ費用（オンラインは不要）、離島など遠方の方のオンライン対応：県掲載のセンターチラシ（PDF）
// ・成婚者数：同 公式トップページの表示（2026年10月31日現在）
// ・所在地・電話・開所時間・運営委託先：同「当センターについて」、鹿児島県「かごしま出会いサポートセンターについて」
// ・会費2年間で1万円、イベントユーザー会員（無料）、AIおすすめ機能：鹿児島県「かごしま出会いサポートセンターについて」
// ・開設年度（平成29年度）、会員登録数・延べ成婚数の推移（平成30年度〜令和4年度）：鹿児島県 子ども・子育て支援会議資料「令和4年度 かごしま子ども未来プラン2020 重点数値目標実績」
// ・会員登録数853人・延べ成婚数110組（令和5年度）、900人・156組（令和7年度）、令和7年度の成婚数20組、半額キャンペーンの予定：第26回鹿児島県子ども・子育て支援会議【資料4】（令和8年8月28日）
// ・市町の登録料助成：鹿児島県「会員登録料の助成」ページ（令和8年4月1日現在 8市町）と各市町の案内ページ
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const PREF_URL = "https://www.pref.kagoshima.jp/ab14/kagosapo-deai.html";
const PREF_JOSEI_URL = "https://www.pref.kagoshima.jp/ae32/kagosapo-deai-josei.html";
const TOP_URL = "https://www.msc-kagoshima.jp/";
const MATCHING_URL = "https://www.msc-kagoshima.jp/matching/";
const ABOUT_URL = "https://www.msc-kagoshima.jp/matching/about/";
const FLOW_URL = "https://www.msc-kagoshima.jp/matching/flow/";
const TERMS_URL = "https://www.msc-kagoshima.jp/matching/terms/";
const TERMS_NEWS_URL = "https://www.msc-kagoshima.jp/archive/information/5437";
const CENTER_URL = "https://www.msc-kagoshima.jp/center/";
const LEAFLET_URL = "https://www.pref.kagoshima.jp/ab14/documents/58341_20260417112109-1.pdf";
const PLAN2020_URL = "https://www.pref.kagoshima.jp/ab14/kenko-fukushi/kodomo/kosodate-kaigi/documents/109353_20231025144033-1.pdf";
const KAIGI26_URL = "https://www.pref.kagoshima.jp/ae34/shienkaigi26kekka.html";
const KAIGI26_PDF_URL = "https://www.pref.kagoshima.jp/ae34/documents/130519_20260910155333-1.pdf";

const members = [
  { year: "平成30年度", count: "1,131人", seikon: "10組" },
  { year: "令和元年度", count: "896人", seikon: "21組" },
  { year: "令和2年度", count: "905人", seikon: "39組" },
  { year: "令和3年度", count: "939人", seikon: "56組" },
  { year: "令和4年度", count: "915人", seikon: "85組" },
  { year: "令和5年度", count: "853人", seikon: "110組" },
  { year: "令和7年度", count: "900人", seikon: "156組" },
];

const seikonTop = { pair: 153, people: 306, withNonMember: 138, eventPair: 16 };

const subsidies = [
  {
    city: "鹿屋市",
    amount: "入会登録料の2分の1（1人1回限り）",
    cond: "市内在住・婚姻していない方で、令和8年4月1日以降に入会した方。入会した年度の3月31日までに申請",
    url: "https://www.city.kanoya.lg.jp/jinkou/shise/sonota/kekkonshien/deaisupporthojo.html",
  },
  {
    city: "いちき串木野市",
    amount: "対象経費の50％（上限10万円、1人1回限り）",
    cond: "婚活サイト・婚活アプリ・結婚相談所等、法人が運営する婚活事業所の入会金・登録料・会費（年度内の合計）が対象。申請時44歳以下、令和8年4月1日以後の支払い",
    url: "https://www.city.ichikikushikino.lg.jp/seisaku2/kurashi/seikatsu/sesaku/kekkonnkatudoushien.html",
  },
  {
    city: "志布志市",
    amount: "入会登録料の全額、初回更新料は5,000円",
    cond: "市内在住で、会員登録時に20〜39歳の独身の方。令和8年1月1日〜12月31日に会員登録した方",
    url: "https://will424.com/dssupport/",
  },
  {
    city: "伊佐市",
    amount: "入会登録料の2分の1（上限5,000円）",
    cond: "新規・更新の登録料の支払い日が令和6年4月1日以後。過去にこの補助を受けていない方",
    url: "https://www.city.isa.kagoshima.jp/kagoshimadeaisapoto/",
  },
  {
    city: "さつま町",
    amount: "入会登録料の額（1人1回限り）",
    cond: "申請時39歳以下、令和6年4月1日以後に入会した方。入会日から1年以内に申請",
    url: "https://www.satsuma-net.jp/soshiki/yakuba/1003/1/konkatsu/8326.html",
  },
  {
    city: "湧水町",
    amount: "5,000円（登録料の2分の1、1人1回限り）",
    cond: "令和7年4月1日以降に入会した方",
    url: "https://www.town.yusui.kagoshima.jp/soshiki/34/4029.html",
  },
  {
    city: "南さつま市",
    amount: "5,000円（登録料の2分の1、1人1回限り）",
    cond: "市内在住・婚姻していない方で、令和8年4月1日以降に入会した方。入会した年度の3月31日までに申請",
    url: "https://www.city.minamisatsuma.lg.jp/living/kenko-iryo-fukushi/jidoboshi/e031250.html",
  },
  {
    city: "霧島市",
    amount: "5,000円（登録料の2分の1、1人1回限り）",
    cond: "市内在住・婚姻していない方で、令和8年4月1日以後に入会した方。他の市町村から同じ補助を受けていないこと",
    url: "https://www.city-kirishima.jp/kikaku/kagoshimadeaisapo-tosenta-.html",
  },
];

export const metadata: Metadata = {
  title: "鹿児島県で結婚相談所を探す方へ｜県の「かごしま出会いサポートセンター」は登録料1万円・2年有効、登録料を助成する8市町と民間との費用比較",
  description:
    "鹿児島県の「かごしま出会いサポートセンター」は、入会登録料10,000円（2年間有効）で、お引き合わせごとに1,500円〜2,000円の費用がかかります。会員登録の条件、必要書類、申込みの上限、会員登録数（令和7年度900人）と成婚者数、登録料を助成する8市町、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/kagoshima/" },
};

const faqs = [
  {
    q: "かごしま出会いサポートセンターの料金はいくらですか？",
    a: "マッチング会員の入会登録料は10,000円で、登録日から2年間有効です。このほか、対面でのお引き合わせ（お見合い）1回ごとに、サポーター同席の場合はお一人2,000円（茶菓代1,500円・サポーター交通費500円）、会員同士のみの場合はお一人1,500円（茶菓代）がかかります。Zoomによるオンラインのお引き合わせは無料です（センター「マッチング会員利用規約」）。入会登録料は、一度も利用しないまま退会した場合でも返金されません。",
  },
  {
    q: "何歳から何歳まで登録できますか？",
    a: "会員登録の条件は「結婚を誠実に希望し、自ら努力する20歳以上の独身男女」で、上限年齢は定められていません（センター「入会申し込みについて」）。ただし、市町の登録料助成には、志布志市（登録時20〜39歳）、さつま町（申請時39歳以下）、いちき串木野市（申請時44歳以下）のように年齢の条件があるものがあります。",
  },
  {
    q: "鹿児島県外に住んでいても登録できますか？",
    a: "会員登録の条件には「鹿児島県内および県外にお住まいの方」と記載されており、県外にお住まいの方も登録の対象です。あわせて、インターネットとメールを使えるパソコンまたはスマートフォンを操作できること、センターからの身元確認や連絡に応対できることが条件です。面談はオンラインでも受けられます。",
  },
  {
    q: "お引き合わせの申込みに上限はありますか？",
    a: "利用規約では、1回につき希望順位を付けて最大3人まで申し込めます。申し込むとご自身のプロフィールは非公開になり、お相手の意思確認には1人につき最長4日かかるため、3人に申し込んだ場合は最長12日間、閲覧・検索ができません。申込みを受けた側は3日以内に回答します。",
  },
  {
    q: "登録期間が終わったらどうなりますか？",
    a: "登録期間（2年）が終了すると自動的に退会となり、続ける場合は入会登録料を支払って更新手続きを行います。更新手続きは期間満了日の2か月前から可能です。2026年10月28日からは、期間満了日から90日目に会員情報が自動的に削除される運用に変わっており、更新を希望する方は満了日から89日目までに手続きを行う必要があります。",
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
  headline: "鹿児島県の公的な婚活支援「かごしま出会いサポートセンター」の料金・会員登録の条件と、民間の結婚相談所との比較",
  description: "鹿児島県の「かごしま出会いサポートセンター」の料金・会員登録の条件・必要書類・お引き合わせのルール・会員登録数と成婚者数、登録料を助成する8市町、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/kagoshima/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "鹿児島県の結婚支援（かごしま出会いサポートセンター）", item: "https://mu-su-bi-ba.com/knowledge/kagoshima/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const linkCls = "underline";

export default function KnowledgeKagoshima() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "鹿児島県の結婚支援（かごしま出会いサポートセンター）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          鹿児島県の結婚相談所選び：県の「かごしま出会いサポートセンター」の料金・会員登録の条件と、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月19日（料金・会員登録の条件・利用規約・成婚者数・市町の助成は同日にかごしま出会いサポートセンター公式サイト、鹿児島県公式サイト、各市町の公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />鹿児島県の「かごしま出会いサポートセンター」は入会登録料10,000円・2年間有効で、お引き合わせごとに費用がかかります
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>鹿児島県は<strong>平成29年度</strong>に「かごしま出会いサポートセンター」を開設し、（一社）鹿児島県法人会連合会に運営を委託しています。会員制のマッチングシステムで1対1のお引き合わせ（お見合い）を支援する、県の少子化対策事業です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>入会登録料は<strong>10,000円（2年間有効）</strong>で、対面のお引き合わせ1回ごとに<strong>お一人1,500円〜2,000円</strong>（オンラインは無料）がかかります。対象は<strong>20歳以上</strong>の独身の方で、上限年齢の定めはなく、県外にお住まいの方も登録できます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>県の資料では、<strong>会員登録数は令和7年度900人</strong>、会員登録者の延べ成婚数は156組です。公式サイトの表示では、マッチング会員同士の成婚者数が<strong>{seikonTop.pair}組</strong>です（2026年10月31日現在）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>鹿屋市・いちき串木野市・志布志市・伊佐市・さつま町・湧水町・南さつま市・霧島市の<strong>8市町が登録料を助成</strong>しています（令和8年4月1日現在）。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">かごしま出会いサポートセンターの料金と会員登録の条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>鹿児島県（子ども政策課）が（一社）鹿児島県法人会連合会に委託</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>開設</td><td className={td}>平成29年度</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会登録料</td><td className={td}>10,000円（登録日から2年間有効）。一度も利用しないまま退会した場合も返金なし。オンライン登録の振込手数料は本人負担</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お引き合わせの費用</td><td className={td}>対面・サポーター同席：お一人2,000円（茶菓代1,500円・サポーター交通費500円）／対面・会員同士のみ：お一人1,500円（茶菓代）／オンライン（Zoom・30分）：無料</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>更新</td><td className={td}>2年の登録期間が終わると自動退会。続ける場合は入会登録料を支払って更新（期間満了日の2か月前から手続き可能）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会員登録の条件</td><td className={td}>結婚を誠実に希望し、自ら努力する20歳以上の独身男女／鹿児島県内および県外にお住まいの方／インターネットとメールを使えるパソコンまたはスマートフォンを操作できる方／センターからの身元確認や連絡に応対できる方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>本籍地の市区町村長が発行する独身証明書または戸籍抄本（発行から3か月以内の原本。戸籍謄本・住民票は不可）、顔写真付き身分証（運転免許証・マイナンバーカード等）、両方のコピー各1部（オンライン面談はコピー不要で原本をアップロード）、3か月以内に撮影した上半身の写真（L判程度。加工した写真は不可）、マッチング会員誓約書、入会登録料</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>無料の会員</td><td className={td}>婚活イベントの情報がメールで届く「イベントユーザー会員」は無料</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              入会は、ホームページから入会申込みと基本情報の入力を行い、マイページで来所面談またはオンライン面談を予約して、必要書類をそろえて登録する流れです。入会申込みから60日以内に本登録まで完了しない場合、登録情報は削除されます。なお、結婚している方のほか、交際中の異性がいる方も登録できない旨が利用規約の禁止事項に定められています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MATCHING_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>かごしま出会いサポートセンター「マッチングTOP」</a>・<a href={ABOUT_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>「入会申し込みについて」</a>・<a href={FLOW_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>「ご利用の流れ」</a>・<a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>「マッチング会員利用規約」</a>・<a href={PREF_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>鹿児島県「かごしま出会いサポートセンターについて」</a>・<a href={PLAN2020_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>鹿児島県「令和4年度 かごしま子ども未来プラン2020 重点数値目標実績」（PDF）</a>（いずれも2026年11月19日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">お引き合わせまでの流れと利用規約のルール</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>会員登録が完了すると、プロフィール（公開項目）がマッチングシステムで会員に公開される</li>
              <li>センター・出張窓口のタブレット（要予約・1回最長45分）、または自宅閲覧機能（同意した会員同士・1日1回最大60分）でお相手を検索する。AIによるおすすめ機能もある</li>
              <li>会ってみたい方に、希望順位を付けて最大3人までお引き合わせを申し込む</li>
              <li>お相手が受諾したら、サポーター同席の有無を選び、日時・場所を調整してお引き合わせを行う</li>
              <li>お引き合わせ日の翌日から3日以内に意思を入力し、双方が承諾すればお友達交際へ進む。入籍日が決まったらセンターが退会の手続きを行う</li>
            </ol>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>ルール</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お引き合わせの申込み</td><td className={td}>1回につき希望順位を付けて最大3人まで。申込み後のキャンセルは不可。申し込むと自分のプロフィールは非公開になり、意思確認の間（1人最長4日、3人なら最長12日）は閲覧・検索ができない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申込みへの回答</td><td className={td}>3日以内に「お受けする」「お断りする」を回答。返事をしないまま4日間経過すると無効</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>サポーターの同席</td><td className={td}>初めてのお引き合わせは「サポーター同席」のみ選択可能。どちらか一方でも同席を希望すればサポーター同席となる</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>場所</td><td className={td}>原則として申込みを受けた方の居住地で、かごしま出会い応援団として登録された店舗・ホテル等で行う。会員同士のみの場合は成立日を含め30日以内に実施</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>オンライン</td><td className={td}>双方が希望した場合にZoomで30分・無料。県掲載のチラシでは、離島など遠方の方や対面が難しい方向けと案内されている</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>個人情報の交換</td><td className={td}>交際が成立するまでは、氏名・電話番号・メールアドレス等の交換は不可。チャット内での連絡先（LINE・SNS等）の交換も禁止</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              マッチングサポーターはボランティアで、サポーター同席のお引き合わせでは日程調整と当日の立ち会いを担当します。お友達交際中は、サポーターまたはセンターが定期的にメールでフォローします。お相手探しと申込みは会員ご自身がシステムで行う仕組みのため、担当者がお相手を提案する民間の結婚相談所とは進め方が異なります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>かごしま出会いサポートセンター「マッチング会員利用規約」</a>・<a href={FLOW_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>「ご利用の流れ」</a>・<a href={TERMS_NEWS_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>「利用規約の改正とシステム改修のお知らせ」</a>・<a href={LEAFLET_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>県掲載のセンターチラシ（PDF）</a>・<a href={PREF_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>鹿児島県「かごしま出会いサポートセンターについて」</a>（いずれも2026年11月19日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">会員登録数と成婚数の推移</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年度</th><th className={th}>会員登録数</th><th className={th}>会員登録者の延べ成婚数</th></tr></thead>
                <tbody>
                  {members.map((m) => (
                    <tr key={m.year} className="border-t border-[#E5DCCF] align-top"><td className={td}>{m.year}</td><td className={td}>{m.count}</td><td className={td}>{m.seikon}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              県の資料によると、会員登録数は平成30年度の1,131人から令和5年度には853人まで減少し、令和7年度は900人です。令和4年度の資料では「新規登録会員はいるものの、期間満了後に更新する会員が少ない」ことが減少の理由として挙げられています。延べ成婚数は令和7年度までに156組で、令和7年度単年の成婚数は20組です。県は令和11年度に会員登録数1,200人・延べ成婚数230組を目標としています。令和6年度の値は、当サイトが確認した県の資料には掲載されていませんでした。
            </p>
            <p>
              公式サイトのトップページでは、2026年10月31日現在の成婚者数を、マッチング会員同士{seikonTop.pair}組（{seikonTop.people}名）、マッチング会員と非会員{seikonTop.withNonMember}名、イベント参加者同士{seikonTop.eventPair}組（{seikonTop.eventPair * 2}名）と表示しています。県の資料の延べ成婚数とは集計の区分や時点が異なるため、数値は一致しません。男女別・年代別の会員数は公表されていないため、希望する年代のお相手がどの程度いるかは、面談の際にセンターへ確認することをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PLAN2020_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>鹿児島県「令和4年度 かごしま子ども未来プラン2020 重点数値目標実績」（PDF）</a>（平成30年度〜令和4年度）・<a href={KAIGI26_PDF_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>第26回鹿児島県子ども・子育て支援会議【資料4】「かごしま子ども未来プラン2025」数値目標実績（PDF）</a>（令和5年度・令和7年度、<a href={KAIGI26_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>開催結果</a>）・<a href={TOP_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>かごしま出会いサポートセンター 公式サイト</a>（いずれも2026年11月19日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">センターの所在地と、登録料を助成する8市町</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>拠点</th><th className={th}>所在地・電話</th><th className={th}>開所時間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>かごしま出会いサポートセンター</td><td className={td}>鹿児島市金生町7番8号 フージャース鹿児島金生町ビル5階／099-208-1150</td><td className={td}>月・火・水曜 10:00〜18:00、土・日曜 10:00〜17:00。木・金曜と年末年始は休み</td></tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>市町</th><th className={th}>助成額</th><th className={th}>主な条件</th></tr></thead>
                <tbody>
                  {subsidies.map((s) => (
                    <tr key={s.city} className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={s.url} target="_blank" rel="noopener noreferrer" className={linkCls}>{s.city}</a></td><td className={td}>{s.amount}</td><td className={td}>{s.cond}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              鹿児島県のページでは、令和8年4月1日現在、上記の8市町が会員登録料の助成を行っていると案内されています。助成額・年齢・対象となる入会日・申請期限は市町ごとに異なり、市税等を滞納していないことなどの共通した条件もあります。いちき串木野市の制度は、センターに限らず婚活サイト・婚活アプリ・結婚相談所等の費用も対象としている点が特徴です。年度によって内容が変わる場合があるため、利用前にお住まいの市町の担当窓口で最新の条件をご確認ください。
            </p>
            <p>
              また、県の資料（令和8年8月）では、20代・30代を対象とした会員登録料の半額キャンペーンを令和8年7月〜9月に実施し、令和9年1月〜3月にも実施する予定とされています。実施の有無や条件は、センターの公式サイトでご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CENTER_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>かごしま出会いサポートセンター「当センターについて」</a>・<a href={PREF_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>鹿児島県「かごしま出会いサポートセンターについて」</a>・<a href={PREF_JOSEI_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>鹿児島県「会員登録料の助成を行っています」</a>・各市町の案内ページ（表のリンク先。志布志市は市の移住・定住サイトの案内）・<a href={KAIGI26_PDF_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>第26回鹿児島県子ども・子育て支援会議【資料4】（PDF）</a>（いずれも2026年11月19日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>登録の有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>鹿児島県「かごしま出会いサポートセンター」</td><td className={td}>10,000円＋対面のお引き合わせ1回ごとにお一人1,500円〜2,000円（オンラインは無料）</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/oita/" className="text-[#A08447] underline">大分県「OITAえんむす部」</Link></td><td className={td}>10,000円（結婚おうえん団の従業員は9,000円）</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/okinawa/" className="text-[#A08447] underline">沖縄県「おきなわ結マッチ」</Link></td><td className={td}>10,000円（出会い応援企業の従業員は5,000円）</td><td className={td}>2年（更新料10,000円）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              かごしま出会いサポートセンターの費用を当サイトで試算すると、2年間にサポーター同席のお引き合わせを6回行った場合で、入会登録料10,000円とお引き合わせ費用12,000円（2,000円×6回）の計22,000円が目安です。会員同士のみのお引き合わせやオンラインを選べば、さらに低くなります。民間の結婚相談所の1年総額の中央値399,200円と比べると、費用は大幅に抑えられます。
            </p>
            <p>
              一方で、お引き合わせの申込みは1回につき3人までで、意思確認の間は検索ができないなど、活動のペースに制約があります。会員登録数は令和7年度で900人です。民間の結婚相談所は、費用がかかる代わりに、担当者がお相手を提案したり、交際中の相談に継続的に応じたりするところが多くあります。鹿児島県内から利用できるオンライン型の結婚相談所や、福岡市の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。大分県・沖縄県のセンターの料金は、各センターの公式サイトで2026年11月18日に確認した内容です。お引き合わせ6回の試算は、利用規約に記載の費用をもとに当サイトが算出した例で、実際の回数は人によって異なります。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/nagasaki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">あいたか（長崎県）</Link>
            <Link href="/knowledge/saga/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">さが出会いサポートセンター（佐賀県）</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/area/fukuoka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">福岡の結婚相談所</Link>
            <Link href="/knowledge/oita/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">OITAえんむす部（大分県）</Link>
            <Link href="/knowledge/okinawa/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">おきなわ結マッチ（沖縄県）</Link>
            <Link href="/knowledge/okayama/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">おかやま縁むすびネット（岡山県）</Link>
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
