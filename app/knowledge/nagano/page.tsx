import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-18 確認）。
// ・登録料・利用できる方・キャンペーン：ながの結婚マッチングシステム「NAGANO ai MATCH」公式ページ、チアフルながの（長野県の結婚・子育て応援サイト）「新規女性限定キャンペーン」
// ・登録条件・回答期限・お見合い日程・交際成立後の扱い：同システム「利用規約」。申込みの上限・県外在住の扱い・相談員の役割：同「よくある質問」
// ・相談所の掲載数73件・システム利用団体61件：チアフルながの「結婚相談所」一覧の表示を当サイトが数えた値（2026-11-18）
// ・相談所ごとの登録料（千曲市社協・佐久市社協）、栄村・木祖村の登録料負担：チアフルながの 各相談所ページ
// ・新規登録者数・お見合い件数・成婚件数（R7実績）：長野県「令和8年度 結婚支援施策」参考資料2（PDF）
// ・長野県婚活支援センター：チアフルながの「長野県婚活支援センター」
// ・長野市・須坂市：各市公式サイト
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const SYSTEM_URL = "https://www.nagano-aimatch.jp/matching/";
const TERMS_URL = "https://www.nagano-aimatch.jp/matching/terms.php";
const FAQ_URL = "https://www.nagano-aimatch.jp/matching/ai_match/faq/category03.php";
const FAQ_ENTRY_URL = "https://www.nagano-aimatch.jp/matching/ai_match/faq/category01.php";
const CAMPAIGN_URL = "https://www.cheerful-nagano.com/news-marriage/31543/";
const COUNSELING_URL = "https://www.cheerful-nagano.com/marriage/counseling/";
const OFFICE_URL = "https://www.cheerful-nagano.com/marriage/office";
const CENTER_PAGE_URL = "https://www.cheerful-nagano.com/marriage/counseling/20478/";
const CHIKUMA_URL = "https://www.cheerful-nagano.com/marriage/counseling/573/";
const SAKU_URL = "https://www.cheerful-nagano.com/marriage/counseling/618/";
const SAKAE_URL = "https://www.cheerful-nagano.com/marriage/counseling/604/";
const KISO_URL = "https://www.cheerful-nagano.com/marriage/counseling/630/";
const PREF_PDF_URL = "https://www.pref.nagano.lg.jp/jisedai/kyoiku/kodomo/shisaku/documents/r8sannkou2.pdf";
const NAGANO_CITY_URL = "https://www.city.nagano.nagano.jp/n041600/marriage/p001352.html";
const SUZAKA_URL = "https://www.city.suzaka.nagano.jp/soshiki/1020/2/3/suzakasikekkonn/6338.html";

export const metadata: Metadata = {
  title: "長野県で結婚相談所を探す方へ｜県の「NAGANO ai MATCH」は登録料1万円・2年、公的結婚相談所61か所と民間との費用比較",
  description:
    "長野県の「NAGANO ai MATCH」は、市町村などの公的結婚相談所に登録して使う仕組みで、システム登録料は10,000円（2年間）です。利用できる相談所の数、新規女性の無料キャンペーン、申込みのルール、令和7年度の実績、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/nagano/" },
};

const faqs = [
  {
    q: "長野県の「NAGANO ai MATCH」の料金はいくらですか？",
    a: "システムの登録料は10,000円（2年間）です。これとは別に、登録（所属）する相談所が独自に登録料・お見合い料・成婚料を定めている場合があります。令和8年5月1日から令和9年3月31日までは、新規登録の女性先着200名を対象に、登録料が1年間無料になるキャンペーンが実施されています（更新は対象外）。",
  },
  {
    q: "マッチングシステムだけに登録できますか？",
    a: "できません。利用規約では、システムを利用している公的結婚相談所（システム利用団体）の窓口に登録（所属）していることが条件です。まずお近くの相談所に来所して登録し、そのうえでシステムに登録します。代理人による登録はできません。",
  },
  {
    q: "長野県外に住んでいても登録できますか？",
    a: "公式FAQでは、長野県外にお住まいの方でも登録できると案内されています。ただし、長野県内の公的結婚相談所に来所して会員登録をする必要があります。在住・在勤の条件は相談所ごとに異なるため、登録先の相談所にご確認ください。",
  },
  {
    q: "お見合いの申込みに上限はありますか？",
    a: "1回に最大3人まで申し込め、設定した順番で1人ずつ申込みが行われます。お見合いを1人にでも申し込んでいる間は、ほかの方への新たな申込みはできません。申込みを受けた側は、申込日の翌日から4日以内に回答します。",
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
  headline: "長野県の公的な婚活支援「NAGANO ai MATCH」の料金・登録の仕組みと、民間の結婚相談所との比較",
  description: "長野県の「ながの結婚マッチングシステム（NAGANO ai MATCH）」の料金・登録条件・申込みのルール・実績と、公的結婚相談所の数、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-18",
  dateModified: "2026-11-18",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/nagano/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "長野県の結婚支援（NAGANO ai MATCH）", item: "https://mu-su-bi-ba.com/knowledge/nagano/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";

export default function KnowledgeNagano() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "長野県の結婚支援（NAGANO ai MATCH）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          長野県の結婚相談所選び：県の「NAGANO ai MATCH」の料金・登録の仕組みと、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月18日（料金・登録条件・利用規約・相談所の掲載数・実績は同日にNAGANO ai MATCH公式サイト、長野県の結婚・子育て応援サイト「チアフルながの」、長野県公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />長野県では、市町村などの公的結婚相談所に登録して、県のマッチングシステムを使います
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>「ながの結婚マッチングシステム（NAGANO ai MATCH）」は、<strong>システムを利用している公的結婚相談所に登録している方</strong>が使える仕組みです。県の結婚・子育て応援サイトには相談所が73件掲載され、うち<strong>61件がシステム利用団体</strong>です（当サイトが2026年11月18日に数えた値）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>システム登録料は<strong>10,000円（2年間）</strong>です。新規登録の女性先着200名は、令和9年3月31日まで<strong>1年間無料</strong>のキャンペーンがあります。相談所の登録料等は別にかかる場合があります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>県の資料によると、令和7年度の実績は<strong>新規登録者585人・お見合い814組・成婚41組</strong>で、いずれも前年度を上回りました。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が<strong>125,400円〜709,500円</strong>です。公的な仕組みは費用を抑えられる一方、申込みは1回3人までなどの上限があります。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">NAGANO ai MATCHの料金と登録条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>長野県将来世代応援県民会議（事務局：長野県婚活支援センター）。県の担当は県民文化部こども若者局次世代サポート課</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>システム登録料</td><td className={td}>10,000円（2年間）。登録（所属）する相談所の登録料とは別に必要</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>キャンペーン</td><td className={td}>新規女性限定・1年間無料（先着200名）。実施期間は令和8年5月1日〜令和9年3月31日で、更新には適用されない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>利用できる方</td><td className={td}>結婚を希望する満18歳以上の独身の方で、システムを利用できる公的結婚相談所に登録している方／インターネットとメールが使えるスマートフォン・タブレット・パソコンを持っている方／利用規約に同意した方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録の手順</td><td className={td}>お近くの相談所に来所して登録し、その後にマッチングシステムへ登録する。代理人による登録は不可</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>県外在住の方</td><td className={td}>登録できる。ただし長野県内の公的結婚相談所に来所して会員登録をする必要がある</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              相談所ごとの料金は、県の結婚・子育て応援サイトの相談所ページで確認できます。当サイトが確認した範囲では、システム利用団体の多くは登録料・お見合い料・成婚料の欄が「なし」で、千曲市社会福祉協議会の結婚相談所は登録料4,000円（2年間有効）、佐久市社会福祉協議会の結婚相談所は登録料2,000円（2年間有効）と記載されていました。栄村（村に住所がある方）と木祖村は、システムの登録料を村が負担すると案内しています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SYSTEM_URL} target="_blank" rel="noopener noreferrer" className="underline">ながの結婚マッチングシステム「NAGANO ai MATCH」</a>・<a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className="underline">「利用規約」</a>・<a href={FAQ_ENTRY_URL} target="_blank" rel="noopener noreferrer" className="underline">「よくある質問」</a>・<a href={CAMPAIGN_URL} target="_blank" rel="noopener noreferrer" className="underline">チアフルながの「新規女性200名様限定 無料キャンペーン」</a>・<a href={CHIKUMA_URL} target="_blank" rel="noopener noreferrer" className="underline">千曲市社協</a>・<a href={SAKU_URL} target="_blank" rel="noopener noreferrer" className="underline">佐久市社協</a>・<a href={SAKAE_URL} target="_blank" rel="noopener noreferrer" className="underline">栄村社協</a>・<a href={KISO_URL} target="_blank" rel="noopener noreferrer" className="underline">木祖村</a>の各相談所ページ（いずれも2026年11月18日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">お見合いから交際までの流れと利用規約のルール</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>ルール</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お見合いの申込み</td><td className={td}>1回に最大3人まで。設定した順番で1人ずつ申し込まれ、申込み中はほかの方へ新たに申し込めない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申込みへの回答</td><td className={td}>申込みを受けた側は、申込日の翌日から4日以内にシステム上で回答する</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お見合いの日程</td><td className={td}>お見合いが成立したら、受けた側が30日以内に希望の日時と場所をシステムに登録し、申込側が調整する</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>交際の成立後</td><td className={td}>担当の相談員がお相手の名前と連絡先を伝える。交際中・お見合い中はお相手の検索ができない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>相談員の役割</td><td className={td}>登録した相談所の相談員が活動をサポートする。システムで選んだお相手を相談員が直接紹介することはない</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              お相手探しはシステムで会員ご自身が行い、登録した相談所の相談員が活動を支える仕組みです。相談所によって窓口の開設日や在住・在勤の条件が異なるため、通いやすさも含めて登録先を選ぶことをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className="underline">NAGANO ai MATCH「利用規約」</a>・<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="underline">「よくある質問」</a>・<a href={SYSTEM_URL} target="_blank" rel="noopener noreferrer" className="underline">公式ページ</a>（いずれも2026年11月18日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">令和7年度の実績</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>令和7年度</th><th className={th}>前年度</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>マッチングシステム新規登録者数</td><td className={td}>585人</td><td className={td}>498人</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>マッチングシステムお見合い件数</td><td className={td}>814組</td><td className={td}>646組</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>成婚件数</td><td className={td}>41組</td><td className={td}>28組</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              県の資料に掲載されているのは年度ごとの新規登録者数で、現在活動している会員の総数は公表されていません。希望する年代のお相手がどの程度いるかは、登録先の相談所で確認することをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_PDF_URL} target="_blank" rel="noopener noreferrer" className="underline">長野県「令和8年度 結婚支援施策」参考資料2（PDF）</a>のR7実績（2026年11月18日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">長野県婚活支援センターと市の窓口</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>窓口</th><th className={th}>所在地・電話</th><th className={th}>受付</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>長野県婚活支援センター</td><td className={td}>長野市南県町657 信濃毎日新聞社 長野本社ビル3階／026-236-3277</td><td className={td}>月〜金曜 9:00〜17:00（祝祭日・年末年始を除く）。土曜は指定日のみ13:00〜16:00。完全予約制、オンライン面談あり</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              長野県は令和7年4月から、長野県婚活支援センターの運営を信濃毎日新聞社に委託しています。センターでもマッチングシステムに登録できるほか、セミナーやイベントの主催、個別相談を行っています（センターからお相手を直接紹介することはありません）。
            </p>
            <p>
              長野市は、市のマリッジサポートデスクでのシステム登録・更新の受付を令和8年3月31日で終了しました。すでに登録している方へのフォローは、登録期間が満了するまで続けるとしています。長野市にお住まいの方は、県婚活支援センターなどほかのシステム利用団体での登録を検討することになります。須坂市は「須坂市結婚サポートデスク」で、システムへの登録支援や出会いイベント・セミナーの案内を行っています（平日9:00〜17:00と毎月第1・3日曜の午前、完全予約制）。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={OFFICE_URL} target="_blank" rel="noopener noreferrer" className="underline">チアフルながの「長野県婚活支援センター」</a>・<a href={CENTER_PAGE_URL} target="_blank" rel="noopener noreferrer" className="underline">同 相談所ページ</a>・<a href={COUNSELING_URL} target="_blank" rel="noopener noreferrer" className="underline">「結婚相談所」一覧</a>・<a href={NAGANO_CITY_URL} target="_blank" rel="noopener noreferrer" className="underline">長野市</a>・<a href={SUZAKA_URL} target="_blank" rel="noopener noreferrer" className="underline">須坂市「須坂市結婚サポートデスク」</a>（いずれも2026年11月18日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>登録の有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>長野県「NAGANO ai MATCH」</td><td className={td}>システム登録料10,000円（新規女性先着200名は1年間無料）＋相談所の登録料等（多くは無料）</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/mie/" className="text-[#A08447] underline">三重県「みえむすび」</Link></td><td className={td}>無料（地域サポーター同席は1回1,000円）</td><td className={td}>本登録から2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/ishikawa/" className="text-[#A08447] underline">いしかわ結婚支援センター（縁結びマッチング）</Link></td><td className={td}>10,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用だけを比べると、NAGANO ai MATCHは民間の結婚相談所よりも大幅に低く抑えられます。一方で、申込みは1回3人までで申込み中は追加できないなど、活動のペースには上限があります。民間の結婚相談所は、費用がかかる代わりに、担当者によるお相手の提案や交際中の相談などを行うところが多くあります。長野県内から利用できるオンライン型の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。三重県・石川県のセンターの料金は、各センターの公式サイトで2026年11月17日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/area/tokyo/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">東京の結婚相談所</Link>
            <Link href="/knowledge/ishikawa/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">いしかわ結婚支援センター（石川県）</Link>
            <Link href="/knowledge/mie/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">みえむすび（三重県）</Link>
            <Link href="/knowledge/niigata/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ハートマッチにいがた（新潟県）</Link>
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
