import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-20 確認）。
// ・熊本県の事業と県内市町村・広域組合の結婚支援事業の一覧（Kumarry・定住自立圏結婚サポートセンター・KOIBANA、宇土市・宇城市・大津町の結婚チャレンジ事業、結婚新生活支援19市町村）：
//   熊本県「地域少子化対策重点推進交付金（令和8年度執行分）を活用した事業一覧」（子ども未来課・2026年6月17日更新）
// ・県の結婚・子育て応援サイト hapiモン（婚活イベント情報の掲載、運営は熊本県健康福祉部子ども未来課）：hapiモン「結婚相手を見つけたい」
// ・Kumarry の開設日（令和7年1月27日）・共同運営（熊本市と14市町村）・AIおすすめ（毎週水曜日に最大3名）・窓口15か所：熊本市「くまもと出会いサポートセンター“Kumarry（クマリー）”について」（2026年5月25日更新）
// ・Kumarry の入会条件・入会登録料（共同実施15市町村居住者 10,000円/2年、それ以外 20,000円/2年）・必要書類・利用の流れ：同センター「マッチング」
// ・Kumarry の登録期間・返金なし・更新・休会・お見合いの申込み上限・回答期限・お見合い費用（応援団店舗 2,000円/1,000円、欠席時1,500円、センター・オンラインは不要）・お友だち交際60日・真剣交際：同「マッチング会員利用規約」（令和8年4月1日改正施行）
// ・お見合い時間、初回のサポーター同席、真剣交際後の状況確認：同「ご利用の流れ」
// ・成婚料等なし、更新時の有効期間の起算、期限後1年以内の更新、代理登録不可、駐車場なし：同「よくあるご質問」
// ・会員数・お見合い成立数・真剣交際成立数・成婚数（令和7年1月末〜令和8年11月15日の累計、会員数は令和8年11月15日時点）：同 公式トップページ（HTMLコメント内の旧表記は除外して読んだ）
// ・所在地・開所時間・閉所日：同「センターについて」。共同実施市町村窓口：同「センターアクセス」
// ・Lynk（八代市・氷川町・芦北町）の対象・登録料無料・事業内容・所在地・開所時間：氷川町「令和8年度から新たに八代市と芦北町と共同で婚活事業をスタートします！」（2026年4月30日更新）
// ・Lynk の対象地域外の年会費10,000円・女性の無料キャンペーン：八代市 やつしろあったかねっと「対象地域外の方もLynkへご登録いただけるようになりました」（2026年7月23日掲載）
// ・KOIBANA（荒尾・玉名地域結婚サポートセンター）の入会条件・費用無料・会員期限2年：同センター「KOIBANA入会方法について」（2023年1月13日更新）
// ・KOIBANA の年齢条件（20歳以上・学生を除く）：同「初めての方へ」（2018年6月7日更新）。所在地・受付時間・定休日：同 公式トップページ
// ・Kumarry の登録料を個人に補助する市町村の制度：上記の県一覧・熊本市・センターの各ページで確認できなかったため、補助額は掲載しない
// ・鹿児島県・長崎県・佐賀県のセンターの料金：当サイト /knowledge/kagoshima/・/knowledge/nagasaki/・/knowledge/saga/（いずれも2026-11-19 確認）の内容
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const TOP_URL = "https://www.msc-kumamoto.jp/";
const ABOUT_URL = "https://www.msc-kumamoto.jp/about/";
const ACCESS_URL = "https://www.msc-kumamoto.jp/about/access/";
const MATCHING_URL = "https://www.msc-kumamoto.jp/matching/";
const FLOW_URL = "https://www.msc-kumamoto.jp/matching/flow/";
const TERMS_URL = "https://www.msc-kumamoto.jp/matching/terms/";
const FAQ_URL = "https://www.msc-kumamoto.jp/contents/faq/";
const CITY_URL = "https://www.city.kumamoto.jp/kiji00358895/index.html";
const PREF_LIST_URL = "https://www.pref.kumamoto.jp/soshiki/35/237686.html";
const HAPIMON_URL = "https://www.hapimon.jp/list00005.html";
const HIKAWA_LYNK_URL = "https://www.town.hikawa.kumamoto.jp/ijuu/kiji0036666/index.html";
const YATSUSHIRO_LYNK_URL = "https://attaka.city.yatsushiro.kumamoto.jp/6713";
const KOIBANA_TOP_URL = "https://www.ariake-kouiki.or.jp/konkatsu/";
const KOIBANA_JOIN_URL = "https://www.ariake-kouiki.or.jp/konkatsu/hajimete/20385";
const KOIBANA_FIRST_URL = "https://www.ariake-kouiki.or.jp/konkatsu/hajimete/20179";
const UTO_URL = "https://www.city.uto.lg.jp/article/view/1609/15410.html";
const UKI_URL = "https://www.city.uki.kumamoto.jp/kurashi/kekkon/2487120";
const OZU_URL = "https://www.town.ozu.kumamoto.jp/page/25856.html";

const stats = { members: 1082, omiai: 3615, shinken: 260, seikon: 33 };

const centers = [
  {
    name: "くまもと出会いサポートセンター“Kumarry”",
    area: "熊本市と近隣14市町村が共同運営。熊本連携中枢都市圏（24市町村）に在住・在勤・在学、または将来移住を考えている方が対象",
    fee: "共同実施15市町村に住む方は10,000円/2年、それ以外の方は20,000円/2年",
    method: "会員自身がシステムで検索・申込み（AIによるおすすめあり）",
  },
  {
    name: "結婚サポートセンター“Lynk”",
    area: "八代市・氷川町・芦北町に在住・在勤する20〜40歳代の独身の方。2026年6月18日からは対象地域外の方も登録可",
    fee: "対象地域の方は無料。対象地域外の方は年会費10,000円（女性は2027年3月31日まで無料キャンペーン）",
    method: "カウンセラーによる手組みのマッチングと、会員専用のマッチングシステム",
  },
  {
    name: "荒尾・玉名地域結婚サポートセンター“KOIBANA”",
    area: "荒尾市・玉名市・玉東町・南関町・長洲町・和水町に在住・在勤、またはこの地域への将来の移住を希望する独身の方",
    fee: "入会・活動の費用は無料（通信料のみ負担。イベントは実費）。会員期限は2年",
    method: "センターでのお見合いのセッティング、イベントの開催",
  },
];

export const metadata: Metadata = {
  title: "熊本で結婚相談所を探す方へ｜公的な「Kumarry」は登録料1万円・2年有効、会員1,082名。八代・荒尾玉名の無料センターと民間との費用比較",
  description:
    "熊本市など15市町村の「くまもと出会いサポートセンター“Kumarry”」は入会登録料10,000円（2年間・対象外の市町村は20,000円）です。会員1,082名・成婚33組（2026年11月15日時点）、入会条件、お見合いのルール、八代・荒尾玉名のセンター、民間との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/kumamoto/" },
};

const faqs = [
  {
    q: "くまもと出会いサポートセンター“Kumarry”の料金はいくらですか？",
    a: "入会登録料は、共同実施する15市町村（熊本市、菊池市、宇土市、宇城市、合志市、美里町、大津町、高森町、西原村、南阿蘇村、御船町、嘉島町、益城町、甲佐町、山都町）に住む方は2年間で10,000円、それ以外の方は2年間で20,000円です。成婚料などはかかりません。登録後に利用がなかった場合や途中で退会した場合も返金はなく、更新する際は再び入会登録料が必要です（マッチング会員利用規約・よくあるご質問）。",
  },
  {
    q: "熊本市以外に住んでいても入会できますか？",
    a: "熊本連携中枢都市圏の24市町村（熊本市、玉名市、山鹿市、菊池市、宇土市、宇城市、阿蘇市、合志市、美里町、玉東町、大津町、菊陽町、高森町、西原村、南阿蘇村、御船町、嘉島町、益城町、甲佐町、山都町、荒尾市、南関町、長洲町、和水町）に在住・在勤・在学している方、または将来移住を考えている方が対象です。共同実施の15市町村以外にお住まいの場合、入会登録料は2年間20,000円です。",
  },
  {
    q: "お見合いのたびに費用はかかりますか？",
    a: "センターまたはオンラインでのお見合いは費用がかかりません。くまもと出会い応援団の店舗等でお見合いをする場合は、サポーターが立ち会うと1人2,000円、お二人のみで行うと1人1,000円が必要です。お見合い会場にサポーターとお相手が到着した後に欠席した場合は、1,500円がかかります（マッチング会員利用規約）。",
  },
  {
    q: "八代市や荒尾市・玉名市に住んでいる場合はどこを利用できますか？",
    a: "八代市・氷川町・芦北町では結婚サポートセンター“Lynk”が、在住・在勤の20〜40歳代の独身の方を対象に登録料無料で支援しています。荒尾市・玉名市・玉東町・南関町・長洲町・和水町では、有明広域行政事務組合の荒尾・玉名地域結婚サポートセンター“KOIBANA”が入会・活動の費用を無料としています。荒尾市・玉名市・玉東町・南関町・長洲町・和水町は熊本連携中枢都市圏にも含まれるため、条件を満たせばKumarryにも登録できます（入会登録料は2年間20,000円）。",
  },
  {
    q: "熊本県が運営する結婚相談センターはありますか？",
    a: "熊本県の「地域少子化対策重点推進交付金（令和8年度執行分）を活用した事業一覧」では、県の事業は人生デッサン普及啓発事業などで、1対1のお見合いを支援するセンターは熊本市・八代市・氷川町・芦北町・有明広域行政事務組合などの事業として掲載されています。県は結婚・子育て応援サイト「hapiモン」で、県内の婚活イベント情報を掲載しています。",
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
  headline: "熊本県の公的な婚活支援「Kumarry」「Lynk」「KOIBANA」の料金・入会条件と、民間の結婚相談所との比較",
  description: "熊本市など15市町村の「くまもと出会いサポートセンター“Kumarry”」の料金・入会条件・必要書類・お見合いのルール・会員数と成婚数、八代地域のLynk・荒尾玉名地域のKOIBANA、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-20",
  dateModified: "2026-11-20",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/kumamoto/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "熊本県の結婚支援（くまもと出会いサポートセンター）", item: "https://mu-su-bi-ba.com/knowledge/kumamoto/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeKumamoto() {
  const seikonPerShinken = ((stats.seikon / stats.shinken) * 100).toFixed(1);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "熊本県の結婚支援（くまもと出会いサポートセンター）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          熊本の結婚相談所選び：公的な「くまもと出会いサポートセンター“Kumarry”」の料金・入会条件と、八代・荒尾玉名のセンター、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月20日（料金・入会条件・会員数・利用規約・各地域のセンターは同日にくまもと出会いサポートセンター公式サイト、熊本県・熊本市・氷川町・八代市の公式サイト、荒尾・玉名地域結婚サポートセンター公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />熊本市など15市町村の「Kumarry」は入会登録料10,000円・2年間有効で、成婚料はかかりません
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>熊本県の公的な1対1の結婚支援は、県ではなく市町村が運営しています。中心となる<strong>くまもと出会いサポートセンター“Kumarry（クマリー）”</strong>は、熊本市と近隣14市町村が2025年1月27日に共同で開設したセンターで、拠点は<strong>熊本市中央区中央街の東洋銀座ビル4階</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>入会登録料は、共同実施の15市町村に住む方は<strong>2年間で10,000円</strong>、それ以外の方は2年間で20,000円です。成婚料はかかりません。対象は<strong>18歳以上</strong>で、熊本連携中枢都市圏の24市町村に在住・在勤・在学、または将来移住を考えている独身の方です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>公式サイトの表示では、<strong>会員数は{stats.members.toLocaleString()}名</strong>（2026年11月15日時点）、開設から2026年11月15日までの累計で、お見合い成立{stats.omiai.toLocaleString()}組、真剣交際成立{stats.shinken}組、<strong>成婚{stats.seikon}組</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>八代市・氷川町・芦北町の<strong>Lynk</strong>と、荒尾・玉名地域の<strong>KOIBANA</strong>は、地域内の方の登録料を無料としています。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">Kumarryの料金と入会条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>熊本市と近隣14市町村（菊池市、宇土市、宇城市、合志市、美里町、大津町、高森町、西原村、南阿蘇村、御船町、嘉島町、益城町、甲佐町、山都町）の共同運営。開設は2025年1月27日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会登録料</td><td className={td}>共同実施15市町村に住む方：10,000円/2年間。それ以外の方：20,000円/2年間。来所面談の場合は面談時に現金で、オンライン面談の場合は案内された口座へ振込（振込手数料は自己負担）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録期間・更新</td><td className={td}>入会登録料の入金をセンターが確認した日から2年間。期間終了で自動退会となり、継続する場合は更新手続（入会登録料が必要）と5〜10分程度の面談を行う。期限前に更新しても、次の有効期間は満了日の翌日から2年間</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>成婚料など</td><td className={td}>かからない。登録後に利用がない場合や中途退会の場合も返金はなく、休会しても登録期間は延長されない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象年齢</td><td className={td}>18歳以上（公式の案内に上限年齢の記載はありません）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会条件</td><td className={td}>結婚を誠実に希望し自ら努力する意思のある独身の方／熊本連携中枢都市圏の24市町村に在住・在勤・在学、または将来移住を考えている方／スマートフォン・パソコン等を自分で操作でき、メールアドレスと電話番号を登録できる方（スマートフォン以外の携帯電話では利用不可）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>顔写真付きの本人確認書類の写し（運転免許証・マイナンバーカード等）／独身証明書の写し（本籍地の市区町村が3か月以内に発行したもの。戸籍抄本も可。マイナンバーカードによるオンラインの独身確認を使う場合は不要）／プロフィール用写真1〜2枚（本人のみ・3か月以内に撮影）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              入会は、ホームページから利用規約に同意して仮登録と面談予約を行い、センターへの来所またはオンライン（Zoom）で面談を受ける流れです。電話やセンターの窓口での申込み、本人以外による代理登録はできません。共同実施15市町村の範囲は、熊本市の公式ページの表で「13市町村」と見出しが付いていますが、列挙されている自治体と利用規約の記載はいずれも15市町村です。当サイトでは利用規約の記載に合わせています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MATCHING_URL} {...ext}>くまもと出会いサポートセンター「マッチング」</a>・<a href={TERMS_URL} {...ext}>「マッチング会員利用規約」（令和8年4月1日改正施行）</a>・<a href={FAQ_URL} {...ext}>「よくあるご質問」</a>・<a href={ABOUT_URL} {...ext}>「センターについて」</a>・<a href={CITY_URL} {...ext}>熊本市「くまもと出会いサポートセンター“Kumarry（クマリー）”について」</a>（いずれも2026年11月20日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">お見合いまでの流れと利用規約のルール</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>自分のスマートフォン・パソコン、またはセンター・共同実施市町村の窓口の専用端末（予約制）でお相手を検索し、お見合いを申し込む</li>
              <li>お相手が承諾したらお見合い成立。初めての場合やどちらかが希望する場合は、サポーターが立ち会う</li>
              <li>センター（45分）、くまもと出会い応援団の店舗等（1時間）、オンライン（45分）のいずれかでお見合い</li>
              <li>双方が希望すれば「お友だち交際」（最大60日）へ。連絡はシステム内のチャットで行い、個人情報の交換はできない</li>
              <li>双方が希望すれば「真剣交際」成立。センターから双方の氏名・電話番号が知らされ、結婚が決まったらセンターに連絡して成婚退会の手続きを行う</li>
            </ol>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>ルール</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お相手の閲覧</td><td className={td}>自宅閲覧は24時間利用できるが、1日1回最大60分。窓口閲覧は1回45分（予約制）。窓口はセンターと共同実施14市町村の計15か所</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お見合いの申込み</td><td className={td}>1日1回1人まで。申込み後のキャンセルは不可。お見合い成立とお友だち交際の相手が合わせて3人になると、検索と新たな申込みはできない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>AIからのおすすめ</td><td className={td}>閲覧・申込みの履歴をもとに、毎週水曜日に最大3名を自動で紹介（履歴が少ない場合は紹介がないこともある）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申込みへの回答</td><td className={td}>申し込まれた日を含めて5日以内。回答がない場合はお見合い不成立</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お見合いの期限・費用</td><td className={td}>成立後30日以内に実施しない場合はキャンセル。センター・オンラインは費用不要。応援団の店舗等はサポーター立会いで1人2,000円、お二人のみで1人1,000円。会場到着後の欠席等は1,500円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>交際の意思確認</td><td className={td}>お見合いの翌日から3日以内に、お友だち交際へ進むかを回答。お友だち交際は最大60日・同時に3人まで</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>真剣交際</td><td className={td}>相手は1人。プロフィールは非公開になり、検索・お見合いはできない。センターまたはサポーターが概ね2か月ごとに交際状況を確認</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              Kumarryでは、会員がシステムで自らお相手を探して申し込む方式を基本とし、お見合いの立会いや交際成立後のフォローを「くまもと出会いサポーター」（ボランティア）とセンター職員が担います。センター職員による婚活相談は、対面またはオンラインで予約して受けられます。利用規約はこれまでに4回改正されており（直近は令和8年4月1日施行）、利用の際は最新の規約を公式サイトでご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={FLOW_URL} {...ext}>くまもと出会いサポートセンター「ご利用の流れ」</a>・<a href={TERMS_URL} {...ext}>「マッチング会員利用規約」</a>・<a href={CITY_URL} {...ext}>熊本市「くまもと出会いサポートセンター“Kumarry（クマリー）”について」</a>（いずれも2026年11月20日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">会員数・お見合い成立数・成婚数</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>数値</th><th className={th}>時点</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会員数</td><td className={td}>{stats.members.toLocaleString()}名（男女別の内訳は公式サイトに記載なし）</td><td className={td}>2026年11月15日時点</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お見合い成立</td><td className={td}>{stats.omiai.toLocaleString()}組</td><td className={td}>2025年1月末〜2026年11月15日の累計</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>真剣交際成立</td><td className={td}>{stats.shinken}組</td><td className={td}>同上</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>成婚</td><td className={td}>{stats.seikon}組</td><td className={td}>同上</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              開設から約1年10か月の累計で、真剣交際の成立260組に対して成婚は33組です（真剣交際成立数に対する成婚数の割合は{seikonPerShinken}%で当サイト算出。両者は同じ会員を追跡した数値ではないため、目安としてご覧ください）。開設から日が浅く、真剣交際中の会員が成婚に至るまでには時間がかかるため、今後数値が変わる可能性があります。男女比や年代別の内訳は公式サイトに掲載されていないため、希望する年代のお相手がどの程度いるかは、入会時の面談でセンターに確認することをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TOP_URL} {...ext}>くまもと出会いサポートセンター 公式サイト</a>（2026年11月20日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">Kumarryの拠点と、八代・荒尾玉名地域のセンター</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>拠点</th><th className={th}>所在地・電話</th><th className={th}>開所日時</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>Kumarry（熊本市）</td><td className={td}>熊本市中央区中央街6-7 東洋銀座ビル4F／096-326-3378。駐車場なし（通町筋のバス停・市電電停から徒歩5分）</td><td className={td}>月・木・金・土・日曜日 11:00〜19:00。火曜日・水曜日・年末年始（12月29日〜1月3日）は休み</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>Lynk（八代市）</td><td className={td}>八代市花園町11-1 ガレリア4F／0965-33-3848</td><td className={td}>11:00〜19:00（土・日は隔週開所、利用は事前予約制）。毎週火曜日・祝日は休み</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>KOIBANA（玉名市）</td><td className={td}>玉名市岱明町野口2129（岱明支所3階）／0968-57-5144</td><td className={td}>受付13:00〜19:00（土・日・祝日は12:00〜18:00）。月曜日・火曜日は休み</td></tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>センター</th><th className={th}>対象</th><th className={th}>料金</th><th className={th}>出会い方</th></tr></thead>
                <tbody>
                  {centers.map((c) => (
                    <tr key={c.name} className="border-t border-[#E5DCCF] align-top"><td className={td}>{c.name}</td><td className={td}>{c.area}</td><td className={td}>{c.fee}</td><td className={td}>{c.method}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Kumarryの窓口閲覧は、熊本市のセンターのほか、菊池市・宇土市・宇城市・合志市・美里町・大津町・高森町・西原村・南阿蘇村・御船町・嘉島町・益城町・甲佐町・山都町の担当課でも予約して利用できます。KOIBANAの入会方法のページは2023年1月13日、年齢条件（20歳以上・学生を除く）を記載したページは2018年6月7日の更新で、Lynkの専用サイトは当サイトの確認時に本文を取得できませんでした。両センターの最新の条件は、各センターへ直接ご確認ください。
            </p>
            <p>
              Kumarryの入会登録料を個人に補助する市町村の制度は、当サイトが確認した範囲（熊本県の事業一覧、熊本市・センターの公式ページ）では見当たりませんでした。共同実施15市町村の住民は、それ以外の方の半額（2年間10,000円）で登録できる料金設定です。なお、宇土市・宇城市・大津町の「結婚チャレンジ事業」は、出会いの場となるイベントを開く団体に1事業あたり上限10万円を補助する制度で、個人の登録料を補助するものではありません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={ABOUT_URL} {...ext}>くまもと出会いサポートセンター「センターについて」</a>・<a href={ACCESS_URL} {...ext}>「センターアクセス」</a>・<a href={HIKAWA_LYNK_URL} {...ext}>氷川町「令和8年度から新たに八代市と芦北町と共同で婚活事業をスタートします！」</a>・<a href={YATSUSHIRO_LYNK_URL} {...ext}>八代市 やつしろあったかねっと「対象地域外の方もLynkへご登録いただけるようになりました」</a>・<a href={KOIBANA_JOIN_URL} {...ext}>荒尾・玉名地域結婚サポートセンター「KOIBANA入会方法について」</a>・<a href={KOIBANA_FIRST_URL} {...ext}>「初めての方へ」</a>・<a href={KOIBANA_TOP_URL} {...ext}>KOIBANA公式サイト</a>・<a href={PREF_LIST_URL} {...ext}>熊本県「地域少子化対策重点推進交付金（令和8年度執行分）を活用した事業一覧」</a>・<a href={UTO_URL} {...ext}>宇土市</a>・<a href={UKI_URL} {...ext}>宇城市</a>・<a href={OZU_URL} {...ext}>大津町</a>の各公式ページ（いずれも2026年11月20日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">熊本県の役割と、九州の他県センター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              熊本県が公表している令和8年度の交付金事業一覧では、県の事業は人生デッサン普及啓発事業、人生デッサンモデル事業、「こどもまんなか熊本」情報発信事業・推進事業の4つで、1対1のお見合いを支援するセンターの運営は熊本市・八代市・氷川町・芦北町・有明広域行政事務組合の事業として掲載されています。県は結婚・子育て応援サイト「hapiモン」で県内の婚活イベント情報を掲載しています。また、同じ一覧では、新婚世帯の住居費や引越費用を補助する結婚新生活支援事業を令和8年度に19市町村が実施するとしています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>登録の有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>熊本「Kumarry」</td><td className={td}>10,000円（共同実施15市町村以外の方は20,000円）。年あたり5,000円（10,000円）で当サイト算出</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>八代地域「Lynk」・荒尾玉名地域「KOIBANA」</td><td className={td}>地域内の方は無料（Lynkの対象地域外の方は年会費10,000円）</td><td className={td}>KOIBANAは2年。Lynkは公式の案内で確認できず</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/kagoshima/" className="text-[#A08447] underline">鹿児島県「かごしま出会いサポートセンター」</Link></td><td className={td}>10,000円。お引き合わせごとに1,500円〜2,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/nagasaki/" className="text-[#A08447] underline">長崎県「あいたか」</Link></td><td className={td}>10,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/saga/" className="text-[#A08447] underline">佐賀県「さが出会いサポートセンター」</Link></td><td className={td}>5,000円/年（期限前の更新は4,000円）</td><td className={td}>1年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用だけを比べると、Kumarryは民間の結婚相談所よりも大幅に低く抑えられ、九州の他県の県センターと同じ水準です。一方で、お相手は会員自身がシステムで探して申し込む方式が基本で、申込みは1日1人まで、同時に進められるお見合い・お友だち交際は3人までといった制限があります。民間の結婚相談所は、費用がかかる代わりに、担当者がお相手を提案したり、交際中の相談に継続的に応じたりするところが多くあります。熊本県内から利用できるオンライン型の結婚相談所や、福岡市の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。鹿児島県・長崎県・佐賀県のセンターの料金は、各センターの公式サイトで2026年11月19日に確認した内容です。熊本県の事業は<a href={PREF_LIST_URL} {...ext}>熊本県「地域少子化対策重点推進交付金（令和8年度執行分）を活用した事業一覧」</a>・<a href={HAPIMON_URL} {...ext}>hapiモン「結婚相手を見つけたい」</a>（いずれも2026年11月20日確認）によります。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/kagoshima/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">かごしま出会いサポートセンター（鹿児島県）</Link>
            <Link href="/knowledge/saga/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">さが出会いサポートセンター（佐賀県）</Link>
            <Link href="/knowledge/nagasaki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">あいたか（長崎県）</Link>
            <Link href="/knowledge/oita/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">OITAえんむす部（大分県）</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/area/fukuoka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">福岡の結婚相談所</Link>
            <Link href="/knowledge/obihiro/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">帯広市・十勝の婚活支援</Link>
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
