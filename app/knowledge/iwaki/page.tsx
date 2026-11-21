import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-21 確認）。
// ・いわき市の結婚支援の目的、「現在、いわき市主催による出会いの場の提供等、婚活イベントは実施しておりません」との記載、福島県と協力して結婚支援を行っていること、担当（市民協働部 地域振興課・0246-22-7414）、県主催イベント「大川荘 恋結び 2026」（11月29日・会津芦ノ牧温泉 大川荘・県内在住又は在勤の18〜35歳の独身男女（学生を除く）・男女各50名・参加料金3,000円・申込期限11月15日）：いわき市「結婚支援の取組について」（2026年11月2日更新）
// ・記念樹のプレゼント（いわき市民・結婚は夫婦で1本・6種から選択・事実の発生した日から1年間・往復はがきで申込み・年2回21世紀の森公園で交付）：いわき市「記念樹のプレゼント」
// ・ふくしま結婚・子育て応援センターの設置（平成27年8月）、はぴ福なびの開始（平成29年2月）・会員同士の成婚154人（令和7年3月末）、世話やき人による成婚440人（令和7年3月末）、運営団体：福島県「ふくしま結婚・子育て応援センターについて」
// ・はぴ福なびの仕組み（オンライン型紹介システム、紹介状は水曜日に配信、検索してリクエスト、EQアセスメント）、会員になれる方、必要書類、利用者状況（2026年9月末：会員数1,701人・お見合い実施数10,162人・交際人数4,812人）、出張登録会の掲載（11月28日 郡山市のみ）、センターの所在地・開所日：同センター「はぴ福なび」
// ・登録料10,000円（税込）・返還なし、登録期間2年間（申込月から2年後の同月末まで）、満期退会・再入会時の登録料：同センター「利用規約及び誓約」（2025年9月改定）
// ・登録から活動開始までの流れ、登録料の納入方法、回答期間8日間、交際期間おおむね3か月：同センター「利用方法」
// ・登録料助成制度実施市町村（コメントアウト部分を除いた掲載13市町村、いわき市の掲載なし）：同センター「はぴ福なび登録料 助成制度実施市町村」
// ・結婚世話やき人の活動内容・相談無料・登録状況（2026年9月末：世話やき人98人・相談者数439人・お見合い2,805組・成婚報告数249組）・利用の流れ・登録期間原則2年：同センター「結婚世話やき人」
// ・世話やき人リストの居住地別人数（掲載84人中、いわき市11人）：同センター「結婚世話やき人を探す」全9ページを当サイトが集計
// ・結婚相談日（土曜日）・相談方法：同センター「結婚相談」
// ・いわき地域の民間イベント掲載例（11月28日・いわき市田人町・25〜59歳・参加費 男性5,500円／女性3,500円）：同センター「婚活イベント情報」イベント詳細
// ・結婚新生活支援事業（対象世帯・補助上限60万円／30万円）と令和8年度実施49市町村、地域結婚支援重点推進事業ほかの令和8年度実施24市町村（いずれもいわき市の掲載なし）：福島県「市町村における地域少子化対策重点推進交付金を活用した事業について」
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const CITY_URL = "https://www.city.iwaki.lg.jp/www/contents/1637884643474/index.html";
const CITY_KINEN_URL = "https://www.city.iwaki.lg.jp/www/contents/1001000001250/index.html";
const PREF_CENTER_URL = "https://www.pref.fukushima.lg.jp/sec/21055a/kekkon-kosodate-ouen.html";
const PREF_KOUFU_URL = "https://www.pref.fukushima.lg.jp/sec/21055a/shousikakouhukin.html";
const HAPI_URL = "https://hapifukunavi.jp/hapifuku/";
const HAPI_HOWTO_URL = "https://hapifukunavi.jp/hapifuku/howto.html";
const HAPI_KIYAKU_URL = "https://hapifukunavi.jp/hapifuku/kiyaku.html";
const HAPI_SEIDO_URL = "https://hapifukunavi.jp/hapifuku/seido.html";
const MEDIATOR_URL = "https://hapifukunavi.jp/mediator/";
const MEDIATOR_LIST_URL = "https://hapifukunavi.jp/mediator/search.html";
const CONSULT_URL = "https://hapifukunavi.jp/consult/";
const EVENT_URL = "https://hapifukunavi.jp/line/";
const EVENT_IWAKI_URL = "https://hapifukunavi.jp/line/detail_other.html?no=640";

// ふくしま結婚・子育て応援センター「結婚世話やき人を探す」全9ページ（2026年11月21日時点・掲載84人）を当サイトが居住地別に集計した上位
const mediatorTop = [
  { city: "福島市", n: 13 },
  { city: "郡山市", n: 12 },
  { city: "いわき市", n: 11 },
  { city: "会津若松市", n: 7 },
  { city: "須賀川市", n: 4 },
  { city: "喜多方市", n: 4 },
];
const MEDIATOR_LISTED = 84;

// 福島県・同センターの一覧に掲載された市町村数（2026年11月21日に当サイトが数えた値）
const prefLists = [
  { name: "結婚新生活支援事業（令和8年度実施市町村）", count: 49, iwaki: "掲載なし", url: PREF_KOUFU_URL },
  { name: "婚活イベント・セミナー等の結婚支援事業（令和8年度実施市町村）", count: 24, iwaki: "掲載なし", url: PREF_KOUFU_URL },
  { name: "はぴ福なび登録料の助成制度実施市町村", count: 13, iwaki: "掲載なし", url: HAPI_SEIDO_URL },
];

export const metadata: Metadata = {
  title: "いわき市で婚活する方へ｜市主催の婚活イベントは実施なし、福島県の「はぴ福なび」は登録料10,000円で2年間、いわき市在住の世話やき人11人と民間との費用比較",
  description:
    "いわき市は現在、市主催の婚活イベントを実施していません。いわき市民が使える県の「はぴ福なび」（登録料10,000円・登録期間2年間・会員1,701人）、相談無料の結婚世話やき人（いわき市在住11人）、県の一覧でのいわき市の掲載状況、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/iwaki/" },
};

const faqs = [
  {
    q: "いわき市が主催する婚活イベントや結婚相談所はありますか？",
    a: "いわき市の公式ページ「結婚支援の取組について」（2026年11月2日更新）には、「現在、いわき市主催による出会いの場の提供等、婚活イベントは実施しておりません」と記載されています。市は福島県と協力して結婚支援を行っており、同ページでは県が設置した「ふくしま結婚・子育て応援センター」の相談・情報提供・イベント・オンライン型紹介システム「はぴ福なび」を案内しています。担当は市民協働部 地域振興課（0246-22-7414）です。",
  },
  {
    q: "はぴ福なびの費用はいくらですか？いわき市の助成はありますか？",
    a: "はぴ福なびの利用規約では、登録料は10,000円（税込）で、登録期間は申込み（仮登録）日から2年間です。納入された登録料は理由を問わず返還されません。規約に月会費やお見合い料、成婚料の記載はありません。登録料を助成する市町村はセンターの公式サイトに一覧で掲載されていますが、2026年11月21日時点で、いわき市は一覧に含まれていませんでした。",
  },
  {
    q: "いわき市に住んでいて、はぴ福なびに登録するにはどこへ行けばよいですか？",
    a: "はぴ福なびは、スマートフォンからの申込み（仮登録）のあと、必要書類をマイページからアップロードするか、センターへ郵送または持参して本登録を行います。登録料は振込みでも納入できるため、来所しなくても登録できます。センターは二本松市郭内の福島県男女共生センター4階にあり、県内各地で出張登録会も行っていますが、2026年11月21日時点で掲載されていた出張登録会は11月28日の郡山市の1回のみで、いわき市内の開催予定は掲載されていませんでした。",
  },
  {
    q: "結婚世話やき人とは何ですか？いわき市にもいますか？",
    a: "結婚世話やき人は、ふくしま結婚・子育て応援センターの研修を受けて認定されたボランティアで、結婚に関する相談、お相手探しの手伝い、お見合いの立ち会いなどを行います。公式ページでは相談無料と案内されています。センターの世話やき人リスト（2026年11月21日時点で84人掲載）を当サイトが居住地別に数えたところ、いわき市在住の方は11人で、福島市（13人）、郡山市（12人）に次いで多い結果でした。はぴ福なびとは別の制度で、併用できます。",
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
  headline: "いわき市の婚活支援：市の取組状況、福島県の「はぴ福なび」と結婚世話やき人、民間の結婚相談所との比較",
  description: "いわき市の結婚支援の取組状況、いわき市民が使える福島県の「はぴ福なび」の料金・登録方法・利用者状況、結婚世話やき人、県の支援一覧でのいわき市の掲載状況、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/iwaki/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "いわき市の婚活支援", item: "https://mu-su-bi-ba.com/knowledge/iwaki/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeIwaki() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "いわき市の婚活支援" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          いわき市で婚活する方へ：市の取組状況、福島県の「はぴ福なび」と結婚世話やき人、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月21日（いわき市の結婚支援の取組、福島県の市町村事業一覧、ふくしま結婚・子育て応援センターの料金・利用者状況・世話やき人リスト・イベント情報は同日にいわき市・福島県・同センターの公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />いわき市は現在、市主催の婚活イベントを実施しておらず、公的な支援は福島県のセンターが中心です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>いわき市の公式ページには「<strong>現在、いわき市主催による出会いの場の提供等、婚活イベントは実施しておりません</strong>」と記載されています。市は福島県と協力して結婚支援を行うとしており、県の「ふくしま結婚・子育て応援センター」を案内しています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>県のオンライン型紹介システム「<strong>はぴ福なび</strong>」は、県内在住の20歳以上の独身の方が登録でき、<strong>登録料10,000円（税込）で登録期間は2年間</strong>です。会員数は1,701人（2026年9月末）で、来所しなくても書類のアップロードと振込みで登録できます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>相談無料のボランティア「<strong>結婚世話やき人</strong>」の公開リスト84人のうち、<strong>いわき市在住の方は11人</strong>でした（当サイト集計）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>県の結婚新生活支援（令和8年度49市町村）や、はぴ福なびの登録料助成（13市町村）の一覧に<strong>いわき市は含まれていません</strong>（当サイトが2026年11月21日に確認）。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">いわき市の結婚支援の取組</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              いわき市は、少子化の進行による経済や地域コミュニティへの影響が懸念されることから、結婚に対する意識の醸成を目的として、福島県と協力しながら結婚支援を行うとしています。一方で、2026年11月2日更新の公式ページには「現在、いわき市主催による出会いの場の提供等、婚活イベントは実施しておりません」と明記されており、市が独自に運営する結婚相談所や会員制の紹介制度も同ページでは案内されていません。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容（いわき市の公式ページの記載）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>市主催の婚活イベント</td><td className={td}>現在は実施していない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>市が案内している支援</td><td className={td}>福島県の「ふくしま結婚・子育て応援センター」（相談事業・情報提供・イベント開催・はぴ福なび）、県主催の婚活イベント</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>担当窓口</td><td className={td}>市民協働部 地域振興課（電話0246-22-7414）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>結婚の記念品</td><td className={td}>記念樹のプレゼント（いわき市民が対象。結婚は夫婦で1本、ツツジ・クロマツなど6種から選択。結婚した日から1年以内に往復はがきで公園緑地課へ申込み、年2回21世紀の森公園で交付）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              市の公式ページでは、県が県内市町村と開く婚活イベントの例として、2026年11月29日の「大川荘 恋結び 2026」（会津若松市の会津芦ノ牧温泉 大川荘、県内在住または在勤の18〜35歳の独身男女（学生を除く）、男女各50名、参加料金3,000円）が紹介されていました。この回の申込期限は11月15日で、すでに締め切られています。会場は会津地方ですが、県内在住者が対象のため、いわき市民も応募の対象に含まれます。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_URL} {...ext}>いわき市「結婚支援の取組について」</a>・<a href={CITY_KINEN_URL} {...ext}>いわき市「記念樹のプレゼント」</a>（いずれも2026年11月21日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">福島県の紹介システム「はぴ福なび」</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              福島県は平成27年（2015年）8月に「ふくしま結婚・子育て応援センター」を設置し、公益財団法人福島県青少年育成・男女共生推進機構が運営しています。平成29年（2017年）2月に始まった「はぴ福なび」は、希望条件に合う会員をシステムが紹介するオンライン型の紹介システムです。いわき市民も、県内在住者として登録できます。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会員になれる方</td><td className={td}>結婚を誠実に希望し、自ら婚活の努力をする20歳以上の独身男女／インターネット環境とメールが使えるスマートフォンを持っている方／福島県内に住んでいる方、または近い将来福島県への移住を考えている方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録料</td><td className={td}>10,000円（税込）。納入後は理由を問わず返還なし。利用規約に月会費・お見合い料・成婚料の記載はありません</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録期間</td><td className={td}>申込み（仮登録）日から2年間（申込月から2年後の同月末まで）。満了すると自動的に退会となり、継続する場合は改めて手続きが必要</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>独身証明書または戸籍抄本（発行から3か月以内）、写真付きの身分証、健康保険証、所得証明書または源泉徴収票、本人の写真1枚</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>紹介の仕組み</td><td className={td}>希望条件に合う方の紹介状が水曜日にマイページへ届く。利用方法のページでは検索してリクエストする方法も案内されているが、登録者全員の情報を検索できるものではない。価値観診断（EQアセスメント・任意）を双方が受検すると合致度が表示される。紹介状の配信は約束されていない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>利用者状況</td><td className={td}>2026年9月末現在：会員数1,701人、お見合い実施数10,162人、交際人数4,812人。会員同士の成婚は令和7年3月末までに154人（福島県発表）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              登録は、スマートフォンからの申込み（仮登録）のあと、必要書類をマイページからアップロードするか、センターへ郵送または持参して行います。登録料はゆうちょ銀行への振込みでも納入できるため、いわき市から二本松市のセンターへ出向かなくても手続きを完了できます。出張登録会ではログインIDを即日発行していますが、2026年11月21日時点で公式サイトに掲載されていた出張登録会は11月28日の郡山市（大槻ふれあいセンター）の1回のみで、いわき市内の開催予定は掲載されていませんでした。
            </p>
            <p>
              お見合いは30分〜1時間程度で、お互いの居住地が離れている場合は女性の居住地の近くで行うよう求められています。交際期間はおおむね3か月とされています。会員数・成婚数は県全体の数値で、いわき市在住の会員数は公式には記載がありません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={HAPI_URL} {...ext}>ふくしま結婚・子育て応援センター「はぴ福なび」</a>・<a href={HAPI_KIYAKU_URL} {...ext}>「利用規約及び誓約」（2025年9月改定）</a>・<a href={HAPI_HOWTO_URL} {...ext}>「利用方法」</a>・<a href={PREF_CENTER_URL} {...ext}>福島県「ふくしま結婚・子育て応援センターについて」</a>（いずれも2026年11月21日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚世話やき人と結婚相談</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              結婚世話やき人は、センターが主催する研修を受講し、認定を受けたボランティアです。結婚に関する相談、お相手探しの手伝い、お見合いの立ち会い、自主イベントの企画などを行っており、公式ページでは相談無料と案内されています。はぴ福なびとは別の制度で、並行して利用できます。2026年9月末現在の登録状況は、世話やき人98人、相談者数439人、お見合い2,805組、成婚報告数249組です。
            </p>
            <p>
              センターの「世話やき人リスト」に掲載されている方を、当サイトが居住地別に数えた結果は次のとおりです（2026年11月21日時点、掲載{MEDIATOR_LISTED}人。公式の登録者数98人とは一致しないため、リストに掲載されていない方もいると考えられます）。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[400px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>世話やき人の居住地</th><th className={th}>リスト掲載人数</th></tr></thead>
                <tbody>
                  {mediatorTop.map((m) => (
                    <tr key={m.city} className="border-t border-[#E5DCCF] align-top"><td className={td}>{m.city === "いわき市" ? <strong>{m.city}</strong> : m.city}</td><td className={td}>{m.city === "いわき市" ? <strong>{m.n}人（男性5人・女性6人）</strong> : `${m.n}人`}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              いわき市在住の世話やき人は11人で、県内では福島市・郡山市に次いで多い結果でした。利用する場合は、リストから相談したい世話やき人を2人まで選んでセンターへ連絡し、センターが面談を打診する流れです。ボランティアによる活動のため相談を受けられない場合があり、紹介や成婚は確約されていません。登録期間は原則2年間です。
            </p>
            <p>
              このほか、センターでは相談員による結婚相談を土曜日を中心に行っており、面談（来所予約制）のほか、電話・メール・ファックスでの相談も受け付けています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MEDIATOR_URL} {...ext}>ふくしま結婚・子育て応援センター「結婚世話やき人」</a>・<a href={MEDIATOR_LIST_URL} {...ext}>「結婚世話やき人を探す」（全9ページを当サイトが集計）</a>・<a href={CONSULT_URL} {...ext}>「結婚相談」</a>（いずれも2026年11月21日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">福島県の支援一覧でのいわき市の掲載状況</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              福島県では、国の交付金を活用して市町村ごとに結婚支援事業が行われています。当サイトが県とセンターの一覧に掲載された市町村を数え、いわき市の掲載状況を確認した結果は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>一覧</th><th className={th}>掲載市町村数（当サイト集計）</th><th className={th}>いわき市</th></tr></thead>
                <tbody>
                  {prefLists.map((l) => (
                    <tr key={l.name} className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={l.url} {...ext}>{l.name}</a></td><td className={td}>{l.count}市町村</td><td className={td}>{l.iwaki}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              県の結婚新生活支援事業は、令和8年1月1日から令和9年3月31日までに入籍し、夫婦ともに婚姻日の年齢が39歳以下、夫婦の所得の合計が500万円未満などの条件を満たす世帯に、住宅の購入・賃借や引越しの費用を補助するもので、上限は夫婦ともに29歳以下の場合60万円、それ以外は30万円です。新居のある市町村で申請する制度のため、いわき市に新居を構える場合は、2026年11月21日時点の一覧では対象になりません。
            </p>
            <p>
              はぴ福なびの登録料助成は、須賀川市・石川町・喜多方市・南相馬市など13市町村が実施しており、いわき市民は登録料10,000円を自己負担することになります。いずれの一覧も年度途中で更新される可能性があるため、最新の状況はいわき市の地域振興課または県にご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_KOUFU_URL} {...ext}>福島県「市町村における地域少子化対策重点推進交付金を活用した事業について」</a>・<a href={HAPI_SEIDO_URL} {...ext}>ふくしま結婚・子育て応援センター「はぴ福なび登録料 助成制度実施市町村」</a>（いずれも2026年11月21日確認。掲載数は当サイトが数えた値で、センターの一覧はページ上に表示されている市町村のみを数えています）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">いわき地域の婚活イベント情報</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              ふくしま結婚・子育て応援センターの「婚活イベント情報」では、開催地域に「いわき」を選んで、センター・自治体が主催するイベントと民間のイベントを探せます。2026年11月21日時点で受付中として表示されていたいわき地域のイベントは、民間主催の1件（11月28日、いわき市田人町の古民家カフェで開かれる婚活ワークショップと交流会。25〜59歳の独身男女、参加費は男性5,500円・女性3,500円、抽選、申込締切11月24日）で、自治体主催のいわき地域のイベントは表示されていませんでした。
            </p>
            <p>
              民間のイベントはセンターが主催するものではなく、内容や条件は主催者ごとに異なります。参加の際は主催者の案内をご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={EVENT_URL} {...ext}>ふくしま結婚・子育て応援センター「婚活イベント情報」</a>・<a href={EVENT_IWAKI_URL} {...ext}>同 イベント詳細（11月28日・いわき市田人町）</a>（いずれも2026年11月21日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な支援と民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>費用</th><th className={th}>1年あたりの目安（当サイト計算）</th><th className={th}>1対1の紹介</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>はぴ福なび（福島県）</td><td className={td}>登録料10,000円で2年間（いわき市の助成なし）</td><td className={td}>5,000円</td><td className={td}>あり（システムによる紹介）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>結婚世話やき人（福島県）</td><td className={td}>相談無料（公式ページの表記）</td><td className={td}>0円（相談無料の表記による）</td><td className={td}>あり（ボランティアによる紹介・確約なし）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>県主催の婚活イベント（例：大川荘 恋結び 2026）</td><td className={td}>参加料金3,000円/回</td><td className={td}>参加回数による</td><td className={td}>なし（イベント形式）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>初期費用・月会費・成婚料</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              はぴ福なびの1年あたりの目安は、登録料10,000円を登録期間の2年間で割った当サイトの計算値で、民間の結婚相談所の1年総額の中央値（399,200円）と比べると約80分の1です。ただし、はぴ福なびは紹介状の配信が約束されておらず、合致するお相手がいない場合は紹介されないことが公式サイトに明記されています。登録料は返還されないため、登録前に仕組みを確認しておくことをおすすめします。
            </p>
            <p>
              いわき市には市主催の婚活事業が現在ないため、費用を抑えたい場合は県のはぴ福なびと世話やき人を併用し、担当者の継続的な支援や会員数の多さを重視する場合は民間の結婚相談所を検討するのが一つの目安です。いわき市から通える範囲の対面型の相談所のほか、オンライン型の結婚相談所や、仙台市の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。はぴ福なび・世話やき人・県主催イベントの費用は、各公式ページで2026年11月21日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/area/sendai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">仙台・宮城の結婚相談所</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/knowledge/akita/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">あきた結婚支援センター（秋田県）</Link>
            <Link href="/knowledge/niigata/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">新潟市の婚活支援</Link>
            <Link href="/knowledge/obihiro/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">帯広市・十勝の婚活支援</Link>
            <Link href="/knowledge/yamagata/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">Aiナビやまがた（山形県）</Link>
            <Link href="/knowledge/tochigi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">とちぎ結婚支援センター（栃木県）</Link>
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
