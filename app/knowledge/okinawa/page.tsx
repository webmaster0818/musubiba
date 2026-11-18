import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-18 確認）。
// ・登録料・更新料・有効期間・利用資格・必要書類：沖縄えんまーる「おきなわ結マッチ」紹介ページ、同「よくある質問」
// ・本公開日：沖縄えんまーる お知らせ「マッチングシステム『おきなわ結マッチ』本公開」。試験運用の開始日：沖縄県の回答文書（令和7年9月17日）
// ・申込み・成立の上限、回答期限、休会・退会：おきなわ結マッチ 利用規約（登録画面に表示）
// ・相談窓口：沖縄えんまーる 公式トップ・FAQ
// ・県の担当課・生涯未婚率・平均初婚年齢・結婚新生活支援の実施市町村：沖縄県「結婚支援」ページ
// ・石垣市の事業：石垣市「半年成婚サポート事業について」「結婚新生活支援補助金」
// ・会員数・成婚数：公式サイト・県ページに記載なし（掲載しない）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const PREF_URL = "https://www.pref.okinawa.jp/kyoiku/kosodate/1008226/1008241.html";
const TOP_URL = "https://enmaru.okinawa/";
const SYSTEM_URL = "https://enmaru.okinawa/yui-match/";
const FAQ_URL = "https://enmaru.okinawa/faq/";
const OPEN_URL = "https://enmaru.okinawa/news/20251001_open-yui-match/";
const PRE_URL = "https://www.pref.okinawa.lg.jp/_res/projects/default_project/_page_/001/034/874/0924/018_0917_1_12_goiken.pdf";
const TERMS_URL = "https://yui-match.okinawa/register";
const ISHIGAKI_SUPPORT_URL = "https://www.city.ishigaki.okinawa.jp/soshiki/furusato_sousei/ketsukon/12247.html";
const ISHIGAKI_SHINSEIKATSU_URL = "https://www.city.ishigaki.okinawa.jp/soshiki/furusato_sousei/ketsukon/9576.html";

export const metadata: Metadata = {
  title: "沖縄県で結婚相談所を探す方へ｜県の「おきなわ結マッチ」は登録料1万円・2年有効、民間との費用比較",
  description:
    "沖縄県が運営するマッチングシステム「おきなわ結マッチ」は、登録料10,000円（2年間有効）で月会費はかかりません。利用資格、必要書類、申込みの上限、オンライン型の相談窓口、石垣市の結婚相談所費用の支援、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/okinawa/" },
};

const faqs = [
  {
    q: "沖縄県の「おきなわ結マッチ」の料金はいくらですか？",
    a: "一般会員の登録料は10,000円（税込）で、有効期間は2年間です。「おきなわ出会い応援企業」に勤める方は5,000円（税込・2年間）です。月会費などの継続費用はかからず、2年後に続ける場合は更新料10,000円がかかります（沖縄えんまーる「おきなわ結マッチ」紹介ページ・よくある質問）。成婚料についての記載は公式サイトにありません。",
  },
  {
    q: "沖縄県外に住んでいても登録できますか？",
    a: "利用資格は「沖縄県内在住・在勤または近い将来沖縄県に移住をお考えの方」です。公式FAQでは、県外在住の方も、沖縄県内への移住を考えている場合は登録できると案内されています。",
  },
  {
    q: "センターに行って相談できますか？",
    a: "沖縄えんまーるサポートセンターは対面の窓口を設けていないオンライン型のセンターで、相談はオンライン・電話・メールで受け付けています。電話の受付時間は平日10:00〜17:00です。会員登録もWeb申込みのみで、郵送や窓口での申込み、代理申込みはできません。",
  },
  {
    q: "お相手への申込みに上限はありますか？",
    a: "利用規約では、マッチング申請は同時に3名まで、マッチング成立も同時に3名までとされています。申請を受けた側は1週間以内に回答し、期限を過ぎるとマッチング不成立になります。「いいね」の数の上限は、公式サイトに記載がありません。",
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
  headline: "沖縄県の公的な婚活支援「おきなわ結マッチ」の料金・利用資格と、民間の結婚相談所との比較",
  description: "沖縄県が運営するマッチングシステム「おきなわ結マッチ」の料金・利用資格・必要書類・活動のルールと、石垣市の支援、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-18",
  dateModified: "2026-11-18",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/okinawa/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "沖縄県の結婚支援（おきなわ結マッチ）", item: "https://mu-su-bi-ba.com/knowledge/okinawa/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";

export default function KnowledgeOkinawa() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "沖縄県の結婚支援（おきなわ結マッチ）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          沖縄県の結婚相談所選び：県の「おきなわ結マッチ」の料金・利用資格と、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月18日（料金・利用資格・利用規約・相談窓口は同日に沖縄えんまーる公式サイトと沖縄県公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />沖縄県の「おきなわ結マッチ」は登録料10,000円・2年間有効で、月会費はかかりません
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>沖縄県は、マッチングシステム「おきなわ結マッチ」を<strong>2025年10月1日に本公開</strong>しました（同年8月14日から試験運用）。窓口は沖縄えんまーるサポートセンターで、県の委託により株式会社プロアライアンスが運営しています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>登録料は<strong>一般会員10,000円（税込）・2年間有効</strong>です。出会い応援企業の従業員は5,000円です。月会費はかからず、更新時に10,000円がかかります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>センターは<strong>対面窓口のないオンライン型</strong>で、相談は電話・メール・オンラインで受け付けています。県外在住でも、沖縄県への移住を考えている方は登録できます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が<strong>125,400円〜709,500円</strong>です。結マッチは費用を抑えられる一方、会員同士で活動を進める仕組みで、会員数・成婚数は公表されていません。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">おきなわ結マッチの料金と利用資格</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>沖縄県（こども未来部 こども若者政策課）。沖縄えんまーるサポートセンターとして、県の委託により株式会社プロアライアンスが実施</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>開始時期</td><td className={td}>2025年8月14日に試験運用を開始し、2025年10月1日に本公開</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録料</td><td className={td}>一般会員 10,000円（税込）／出会い応援企業の従業員 5,000円（税込）。支払いは郵送される納付書で行う</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>有効期間・更新料</td><td className={td}>本登録完了メールが届いた日から2年間。継続する場合は更新料10,000円（期間終了の2か月前から更新手続きが可能）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>月会費・その他の費用</td><td className={td}>月会費などの継続費用はなし。通信費は自己負担。途中退会しても登録料の返金はない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>利用資格</td><td className={td}>結婚を誠実に希望し、自ら婚活に取り組む意思のある18歳以上の独身男女／インターネット環境とメールを利用できるパソコン・スマートフォン等を持っている方／沖縄県内在住・在勤または近い将来沖縄県に移住を考えている方／契約・利用規約に同意した方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>顔写真付き本人確認書類（運転免許証・マイナンバーカード・パスポート等）、独身証明書（本籍地の市区町村が発行した3か月以内のもの。戸籍抄本でも可）、写真（本人のみ・3か月以内に撮影）、健康保険証（任意）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              会員登録はパソコンまたはスマートフォンからのWeb申込みのみで、郵送・窓口での申込みや代理申込みは受け付けていません。公式FAQによると、本登録の申請から利用開始までは通常2〜4週間程度かかります。外国籍の方は、婚姻要件具備証明書など日本の独身証明書に当たる書類と、その日本語訳が必要です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SYSTEM_URL} target="_blank" rel="noopener noreferrer" className="underline">沖縄えんまーる「おきなわ結マッチ」</a>・<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="underline">「よくある質問」</a>・<a href={OPEN_URL} target="_blank" rel="noopener noreferrer" className="underline">「おきなわ結マッチ」本公開のお知らせ</a>・<a href={PRE_URL} target="_blank" rel="noopener noreferrer" className="underline">沖縄県 回答文書（令和7年9月17日・PDF）</a>（いずれも2026年11月18日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">活動の流れと利用規約のルール</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>沖縄えんまーるの画面から仮登録を申し込む</li>
              <li>システムにログインし、プロフィール設定と必要書類のアップロードを行って本登録を申請する</li>
              <li>郵送される納付書で登録料を支払い、入金が確認されると本登録が完了する</li>
              <li>お相手を検索して「いいね」を送り、双方の「いいね」がそろうとメッセージのやり取りができる</li>
              <li>マッチング申請を相手が承認するとマッチング成立となり、お互いの連絡先が公開される</li>
              <li>「真剣交際」を始めたら、会員自身で休会の手続きを行う</li>
            </ol>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>ルール</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>マッチング申請</td><td className={td}>同時に3名まで。申請を受けた側は1週間以内に回答し、期限を過ぎるとマッチング不成立</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>マッチング成立</td><td className={td}>同時に3名まで。一度成立すると1か月間はその方と成立状態が続く。「マッチング成立」は知り合い・友だちとしての関係で、交際を意味しない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>交際の管理</td><td className={td}>センターは交際状況の管理や、真剣交際に伴うプロフィールの停止などを行わない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>有効期間の満了</td><td className={td}>満了日から自動的に休会となり、3か月経過すると自動的に退会</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>検索の機能</td><td className={td}>出身市町村・出身校などで表示を絞り込める「身バレ防止機能」がある</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              おきなわ結マッチは、お相手探しから連絡先の交換後のやり取りまで、会員ご自身が進める仕組みです。担当者がお見合いを調整したり、交際の進め方を継続的に助言したりする形ではないため、手厚い伴走を希望する方は、民間の結婚相談所のサポート内容とあわせて比べることをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SYSTEM_URL} target="_blank" rel="noopener noreferrer" className="underline">沖縄えんまーる「おきなわ結マッチ」</a>・<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="underline">「よくある質問」</a>・<a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className="underline">おきなわ結マッチ 利用規約（登録画面に表示）</a>（いずれも2026年11月18日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">沖縄県の未婚の状況と、公表されている数値</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>数値</th><th className={th}>出典</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>生涯未婚率（令和2年）</td><td className={td}>男性29.12%（47都道府県中7位）・女性19.33%（同7位）</td><td className={td}>沖縄県「結婚支援」ページ</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>平均初婚年齢（令和5年）</td><td className={td}>男性30.2歳・女性29.5歳</td><td className={td}>同上</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>おきなわ結マッチの会員数・成婚数</td><td className={td}>公表なし</td><td className={td}>沖縄えんまーる公式サイト・県ページに記載なし（2026年11月18日確認）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              沖縄県は生涯未婚率が男女とも全国で7番目に高く、県はこうした状況を踏まえて結婚支援に取り組んでいると説明しています。おきなわ結マッチは本公開から1年あまりのシステムで、会員数や成婚数は公式サイトに掲載されていません。登録を検討する際は、年代ごとの会員の状況などをサポートセンターに問い合わせて確認することをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_URL} target="_blank" rel="noopener noreferrer" className="underline">沖縄県「結婚支援」</a>（2026年11月18日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">相談窓口と市町村の取り組み</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>窓口</th><th className={th}>連絡先</th><th className={th}>受付</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>沖縄えんまーるサポートセンター（株式会社プロアライアンス内）</td><td className={td}>電話 098-975-7253／メール support@enmaru.okinawa</td><td className={td}>電話は平日10:00〜17:00、メールは24時間受付。対面窓口なし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>沖縄県 こども未来部 こども若者政策課</td><td className={td}>電話 098-866-2100</td><td className={td}>—</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              石垣市は「半年成婚サポート事業」として、市が指定する結婚相談所に入会する方の初期費用（合計110,000円分）を市が負担する事業を行っています。対象は市内在住の20歳以上40歳以下の独身者などで、自己負担は月会費5,000円と、成婚退会時の成婚料165,000円です。令和8年度の募集（10名・8月20日締切）はすでに終了しています。
            </p>
            <p>
              また、県のページでは、結婚に伴う住居費や引越費用を補助する「結婚新生活支援事業」の実施市町村として、石垣市・久米島町・宮古島市が挙げられています。石垣市の補助は、夫婦ともに39歳以下で所得の合計が500万円未満の世帯が対象で、上限は夫婦の年齢が29歳以下の場合60万円、39歳以下の場合30万円です（令和9年度以降の継続は未定）。そのほかの市町村の取り組みは、お住まいの市町村の担当窓口でご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TOP_URL} target="_blank" rel="noopener noreferrer" className="underline">沖縄えんまーる 公式サイト</a>・<a href={PREF_URL} target="_blank" rel="noopener noreferrer" className="underline">沖縄県「結婚支援」</a>・<a href={ISHIGAKI_SUPPORT_URL} target="_blank" rel="noopener noreferrer" className="underline">石垣市「半年成婚サポート事業について」</a>・<a href={ISHIGAKI_SHINSEIKATSU_URL} target="_blank" rel="noopener noreferrer" className="underline">石垣市「結婚新生活支援補助金」</a>（いずれも2026年11月18日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>登録の有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>沖縄県「おきなわ結マッチ」</td><td className={td}>10,000円（出会い応援企業の従業員は5,000円）</td><td className={td}>2年（更新料10,000円）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/mie/" className="text-[#A08447] underline">三重県「みえむすび」</Link></td><td className={td}>無料（地域サポーター同席は1回1,000円）</td><td className={td}>本登録から2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンター（はばタン会員）</Link></td><td className={td}>5,000円/年</td><td className={td}>1年（年ごとの登録手数料）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用だけを比べると、おきなわ結マッチは民間の結婚相談所よりも大幅に低く抑えられます。一方で、マッチング申請・成立はそれぞれ同時に3名までで、お見合いの調整や交際中の助言を担当者から継続的に受ける仕組みではありません。民間の結婚相談所は、費用がかかる代わりに、担当者によるお見合いの調整や交際中の相談などを行うところが多くあります。沖縄県内からでも利用できるオンライン型の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。三重県・兵庫県のセンターの料金は、各センターの公式サイトで2026年11月16日〜17日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/area/fukuoka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">福岡の結婚相談所</Link>
            <Link href="/knowledge/mie/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">みえむすび（三重県）</Link>
            <Link href="/knowledge/oita/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">OITAえんむす部（大分県）</Link>
            <Link href="/knowledge/akita/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">あきた結婚支援センター（秋田県）</Link>
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
