import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-24 確認）。
// ・縁結び課の業務（縁結び係＝婚活支援）・連絡先：三木市「縁結び課」組織ページ（soshiki/6）
// ・みきで愛（出会い）サポートセンターの概要（平成20年11月22日設立・市の委託事業）・受付時間・所在地：同センター公式サイト トップ・よくある質問
// ・サポートの流れ・必要書類・出会いサポーターの活動内容・募集停止：同センター「出会いサポート事業」
// ・相談の費用（無料）・対象（未成年者を除く50歳未満、市外は三木市に縁がある方など）・成婚プレゼント：同センター「よくある質問」・相談お申込みフォーム
// ・相談は三木市内で行う・登録後2年をめどにサポート終了：同センター「確認事項」
// ・出会いサポーターの登録状況（令和5年3月末現在 23人）：同センター「出会いサポーターの登録状況」
// ・2026年4〜12月のイベント20件（主催者・参加費・対象）：同センター「イベント情報」1〜5ページ
// ・みきハート部会のイベント（直近は2025年2月9日・男女各10名・カップル2組）：同センター「みきハート事業」
// ・みきで愛婚活応援団の登録要件：同センター「お知らせ」（2018年6月1日）
// ・縁結び事業の成婚数（138組）・例年の開催回数：三木市 記者発表資料（令和4年7月19日発表）
// ・トカイナカ三木新生活応援事業（新婚・移住世帯の補助、上限30万〜100万円）：三木市（2026年6月11日更新）
// ・県の結婚新生活支援事業の実施市町（令和7年度に三木市を掲載）：兵庫県（2026年1月27日更新）
// ・ひょうご出会いサポートセンターの登録手数料・会員数・入会条件：habatan-hyogo.jp（はばタン会員TOP・よくあるご質問）
// ・はばタン会員登録料の補助自治体（令和8年度・9市町、三木市は含まれない）：同センター お知らせ（2026年8月24日）
// ・三木市での出張登録会（令和8年10月25日）：兵庫県 記者発表（2026年10月9日）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const MD = "https://www.mikideai.jp";
const MD_TOP_URL = `${MD}/index.html`;
const MD_SUPPORT_URL = `${MD}/support.html`;
const MD_FAQ_URL = `${MD}/faq.html`;
const MD_KAKUNIN_URL = `${MD}/kakunin.html`;
const MD_TOROKU_URL = `${MD}/toroku_status.html`;
const MD_HEART_URL = `${MD}/mikiheart.html`;
const MD_NEWS_URL = `${MD}/news.html`;
const MD_CONTACT_URL = `${MD}/contact.html`;
const MD_EVENT_URL = `${MD}/event.html`;
const MD_EVENT_P2 = `${MD}/post/update?dir=event&page=2`;
const MD_EVENT_P3 = `${MD}/post/update?dir=event&page=3`;
const MD_EVENT_P4 = `${MD}/post/update?dir=event&page=4`;
const MD_EVENT_P5 = `${MD}/post/update?dir=event&page=5`;
const CITY_ENMUSUBI_URL = "https://www.city.miki.lg.jp/soshiki/6/";
const CITY_SHINSEIKATSU_URL = "https://www.city.miki.lg.jp/soshiki/6/1072.html";
const CITY_PRESS_2022_URL = "https://www.city.miki.lg.jp/uploaded/attachment/31802.pdf";
const HABATAN_TOP_URL = "https://habatan-hyogo.jp/pages/habatan_top";
const HABATAN_FAQ_URL = "https://habatan-hyogo.jp/pages/faq";
const HABATAN_SUBSIDY_URL =
  "https://habatan-hyogo.jp/blogs/news-topics/%E4%BB%A4%E5%92%8C8%E5%B9%B4%E5%BA%A6-%E3%81%AF%E3%81%B0%E3%82%BF%E3%83%B3%E4%BC%9A%E5%93%A1%E7%99%BB%E9%8C%B2%E6%96%99-%E8%A3%9C%E5%8A%A9%E9%87%91%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B";
const PREF_MIKI_TOROKU_URL = "https://web.pref.hyogo.lg.jp/kk17/20261009.html";
const PREF_SHINSEIKATSU_URL = "https://web.pref.hyogo.lg.jp/kf11/kekkonnshien.html";

type Organizer = "center" | "harima" | "dei";

const ORGANIZER_LABEL: Record<Organizer, string> = {
  center: "みきで愛サポートセンター（市）",
  harima: "はりま縁結び委員会（婚活応援団）",
  dei: "NPO法人幸せの窓口De-i（婚活応援団）",
};

// みきで愛（出会い）サポートセンター「イベント情報」1〜5ページに掲載の2026年4〜12月開催分（2026-11-24 確認）
const events: { date: string; name: string; org: Organizer; fee: string; target: string; href: string; open?: boolean }[] = [
  { date: "4月11日（土）", name: "三木市で恋活", org: "harima", fee: "男性4,000円・女性500円", target: "30〜48歳", href: MD_EVENT_P5 },
  { date: "4月25日（土）", name: "恋するおとなのBBQ恋活 in エオの森", org: "dei", fee: "男性5,500円・女性3,500円", target: "30代〜40代", href: MD_EVENT_P4 },
  { date: "5月10日（日）", name: "独身者のためのスプリング婚活パーティ", org: "center", fee: "2,000円", target: "50歳未満・合計10名", href: MD_EVENT_P4 },
  { date: "5月23日（土）", name: "夜タコパDE恋活 IN三木", org: "dei", fee: "男性5,300円・女性2,000円", target: "30代〜40代", href: MD_EVENT_P4 },
  { date: "6月12日（金）", name: "縁結びセミナー・ブートニアレッスン（夕食付）", org: "center", fee: "4,500円（夕食代2,500円・レッスン料2,000円）", target: "50歳未満・合計10名", href: MD_EVENT_P4 },
  { date: "6月20日（土）", name: "三木市で恋活", org: "harima", fee: "男性4,000円・女性500円", target: "30〜49歳", href: MD_EVENT_P4 },
  { date: "6月21日（日）", name: "恋するおとなの料理コン", org: "dei", fee: "男性5,300円・女性2,000円", target: "30代〜40代", href: MD_EVENT_P3 },
  { date: "7月4日（土）", name: "七夕前夜 恋活ディナーパーティー", org: "dei", fee: "男性5,500円・女性3,500円", target: "30〜45歳／46〜59歳位／60歳以上の3グループ", href: MD_EVENT_P3 },
  { date: "7月10日（金）", name: "平日夜の縁結びパーティー", org: "center", fee: "2,500円（夕食代）", target: "35歳未満・合計10名", href: MD_EVENT_P3 },
  { date: "8月1日（土）", name: "三木市で恋活", org: "harima", fee: "男性4,000円・女性500円", target: "30〜48歳", href: MD_EVENT_P3 },
  { date: "8月9日（日）", name: "Summer恋活 恋するおとなの夏恋パーティー", org: "dei", fee: "男性4,000円・女性2,000円", target: "30〜49歳／50〜59歳位の2グループ", href: MD_EVENT_P2 },
  { date: "9月11日（金）", name: "平日夜の縁結びセミナー「結婚前のお金のこと」", org: "center", fee: "2,500円（夕食代）", target: "49歳以下・合計10名", href: MD_EVENT_P2 },
  { date: "9月12日（土）", name: "三木市で恋活", org: "harima", fee: "男性4,000円・女性500円", target: "30〜48歳", href: MD_EVENT_P2 },
  { date: "9月20日（日）", name: "恋するおとなのBBQ恋活", org: "dei", fee: "男性5,500円・女性3,500円", target: "30〜49歳", href: MD_EVENT_P2 },
  { date: "10月24日（土）", name: "秋のときめきナイト 恋活パーティ in みき", org: "dei", fee: "男性7,000円・女性4,500円", target: "30代・40代を中心に50代前半まで", href: MD_EVENT_P2 },
  { date: "11月7日（土）", name: "三木市で恋活", org: "harima", fee: "男性4,000円・女性500円", target: "30〜48歳", href: MD_EVENT_URL },
  { date: "11月29日（日）", name: "恋するおとなのBBQ＆フィッシング恋活", org: "dei", fee: "男性7,500円・女性4,500円", target: "25〜59歳", href: MD_EVENT_URL, open: true },
  { date: "12月11日（金）", name: "金曜夜のクリスマス婚活", org: "center", fee: "2,500円（夕食代）", target: "30〜40歳・合計10名", href: MD_EVENT_URL, open: true },
  { date: "12月19日（土）", name: "クリスマスナイト恋活ディナーパーティー in みき 2026", org: "dei", fee: "男性6,500円・女性3,500円", target: "28〜70歳", href: MD_EVENT_URL, open: true },
  { date: "12月27日（日）", name: "三木市で恋活", org: "harima", fee: "男性4,000円・女性500円", target: "30〜48歳", href: MD_EVENT_URL, open: true },
];

const EVENT_TOTAL = events.length;
const countBy = (o: Organizer) => events.filter((e) => e.org === o).length;

export const metadata: Metadata = {
  title: "三木市の婚活｜市の「みきで愛サポートセンター」は相談無料、2026年4〜12月の掲載イベント20件と新婚補助（上限30万円〜）",
  description:
    "三木市の婚活支援は、市の委託で縁結び課内にある「みきで愛（出会い）サポートセンター」が中心で、出会いサポーターによる相談・紹介は無料です。2026年4〜12月に掲載されたイベント20件の主催者と参加費、新婚・移住世帯への補助（上限30万〜100万円）、県センターや民間との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/miki/" },
};

const faqs = [
  {
    q: "三木市の婚活支援に費用はかかりますか？",
    a: "みきで愛（出会い）サポートセンターでの結婚相談は無料で、紹介料などの費用もかからないと案内されています。ただし、相談場所や出会いの場での飲食費、パーティーの参加費は自己負担です。2026年4〜12月にセンターが主催したイベントの参加費は2,000円〜4,500円でした（当サイト集計）。",
  },
  {
    q: "三木市外に住んでいても相談できますか？",
    a: "センターのよくある質問では、未成年者を除く50歳未満の独身の方であれば市内外を問わず受け付けるとしています。ただし市外の方は、三木市内に勤務している、三木市出身であるなど三木市に縁がある方か、三木市に住んでみたい方が対象です。出会いサポーターとの相談は三木市内で行います。",
  },
  {
    q: "相談を始めるにはどうすればよいですか？",
    a: "センターの相談お申込みフォームから受付希望日時を送り、センターから正式な受付日時の連絡を受けます。受付は本人がセンター（三木市役所 縁結び課窓口）に来庁して行い、顔写真付きの身分証明書が必要です。面接で本人確認を行ったうえで、担当の出会いサポーターが紹介されます。受付は平日9時〜16時（12時〜12時45分を除く）です。",
  },
  {
    q: "ひょうご出会いサポートセンターの登録料に三木市の補助はありますか？",
    a: "ひょうご出会いサポートセンターが公表している令和8年度のはばタン会員登録料の補助自治体（姫路市・加古川市・西脇市・多可町・宍粟市・養父市・高砂市・上郡町・神河町の9市町）に、三木市は含まれていません。当サイトでは、2026年11月24日時点で三木市の公式サイトに登録料補助の案内を確認できませんでした。センターの登録手数料は年5,000円です。",
  },
  {
    q: "三木市に結婚新生活支援（新婚世帯への補助）はありますか？",
    a: "三木市は「トカイナカ三木新生活応援事業」として、39歳以下の新婚世帯・移住世帯の住宅取得費・家賃・引越費用などを補助しています。上限は夫婦ともに39歳以下で30万円、29歳以下で60万円で、中古戸建住宅の購入は80万円、空き家バンクの利用は100万円まで上乗せされます。世帯の総所得金額等が500万円未満であることなどの条件があります（2026年6月11日更新の市のページで確認）。",
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
  headline: "三木市で婚活する方へ：市の「みきで愛（出会い）サポートセンター」と婚活応援団のイベント、新生活の補助、県センター・民間の結婚相談所との比較",
  description: "三木市の結婚支援（みきで愛（出会い）サポートセンターの相談・紹介、センターと婚活応援団のイベント、トカイナカ三木新生活応援事業）と、ひょうご出会いサポートセンター・民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-24",
  dateModified: "2026-11-24",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/miki/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "三木市の婚活（みきで愛サポートセンター）", item: "https://mu-su-bi-ba.com/knowledge/miki/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeMiki() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "三木市の婚活（みきで愛サポートセンター）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          三木市で婚活する方へ：市の「みきで愛（出会い）サポートセンター」と婚活応援団のイベント、新生活の補助、県センター・民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月24日（市の事業は同日に三木市公式サイトとみきで愛（出会い）サポートセンター公式サイト、県のセンターはひょうご出会いサポートセンター公式サイトと兵庫県公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />三木市には、市役所内に無料の結婚相談窓口があり、市内では月に2件前後の婚活イベントが開かれています
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>三木市の婚活支援の中心は、市の委託で三木市役所 縁結び課内に置かれている<strong>「みきで愛（出会い）サポートセンター」</strong>です。ボランティアの「出会いサポーター」が相談を受けてお相手を紹介する仕組みで、<strong>相談・紹介の費用は無料</strong>です（飲食代やパーティー参加費は自己負担）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>対象は未成年者を除く<strong>50歳未満</strong>の独身の方で、市外の方も三木市に縁がある方や三木市に住んでみたい方であれば相談できます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>センターのイベント情報には、2026年4〜12月開催分として<strong>{EVENT_TOTAL}件</strong>が掲載されています（センター主催{countBy("center")}件・センターに登録した「婚活応援団」の主催{countBy("harima") + countBy("dei")}件、当サイト集計）。<strong>11月29日・12月11日・12月19日・12月27日の4件</strong>は2026年11月24日時点で申込締切前です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>結婚後は、市の「トカイナカ三木新生活応援事業」で、39歳以下の新婚世帯に住居費・引越費用などを<strong>上限30万円</strong>（夫婦ともに29歳以下は60万円、空き家バンク利用で最大100万円）補助しています。県の「ひょうご出会いサポートセンター」は年5,000円で、三木市は登録料の補助対象に入っていません。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">三木市で利用できる結婚支援の一覧</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              三木市では、総合政策部 縁結び課の縁結び係が婚活支援を担当しています。市の事業と、市内で利用できる県の事業を、当サイトで次のとおり整理しました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>名称・運営</th><th className={th}>内容</th><th className={th}>費用</th><th className={th}>主な条件</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={MD_SUPPORT_URL} {...ext}>出会いサポート事業</a><br />みきで愛（出会い）サポートセンター（三木市の委託事業）</td><td className={td}>ボランティアの出会いサポーターが結婚相談に応じ、お相手を探して引き合わせる</td><td className={td}>相談・紹介は無料（飲食費などは自己負担）</td><td className={td}>未成年者を除く50歳未満の独身の方。市外の方は三木市に縁がある方、または三木市に住んでみたい方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={MD_EVENT_URL} {...ext}>センター主催イベント</a><br />みきで愛（出会い）サポートセンター</td><td className={td}>平日夜の少人数パーティー・セミナーなど。センター未登録の方も参加できる</td><td className={td}>2,000円〜4,500円（2026年4〜12月の回）</td><td className={td}>回ごとに設定（例：35歳未満、49歳以下、30〜40歳）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={MD_EVENT_URL} {...ext}>婚活応援団の主催イベント</a><br />センターに登録した団体</td><td className={td}>非営利目的で出会いイベントを開く団体がセンターに登録し、市内で開催</td><td className={td}>男性4,000円〜7,500円・女性500円〜4,500円（2026年4〜12月の回）</td><td className={td}>回ごとに設定（25〜59歳、28〜70歳など）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={CITY_SHINSEIKATSU_URL} {...ext}>トカイナカ三木新生活応援事業</a><br />三木市</td><td className={td}>新婚・移住世帯の住宅取得費・家賃・引越費用・リフォーム費用の補助</td><td className={td}>上限30万円〜100万円</td><td className={td}>39歳以下の新婚世帯・移住世帯で、世帯の総所得金額等が500万円未満など</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンター</Link><br />兵庫県</td><td className={td}>スマートフォンで会員を検索してお見合いを申し込む仕組み。AIによる紹介もある</td><td className={td}>はばタン会員は登録手数料5,000円/年（三木市の補助なし）</td><td className={td}>20歳以上の独身で、兵庫県内に在住・在勤の方など</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_ENMUSUBI_URL} {...ext}>三木市「縁結び課」</a>・<a href={MD_TOP_URL} {...ext}>みきで愛（出会い）サポートセンター</a>・<a href={MD_SUPPORT_URL} {...ext}>「出会いサポート事業」</a>・<a href={MD_FAQ_URL} {...ext}>「よくある質問」</a>・<a href={MD_EVENT_URL} {...ext}>「イベント情報」</a>・<a href={CITY_SHINSEIKATSU_URL} {...ext}>三木市「新生活（新婚さん・移住世帯）を始められる方へ」（2026年6月11日更新）</a>・<a href={HABATAN_TOP_URL} {...ext}>ひょうご出会いサポートセンター「はばタン会員TOP」</a>・<a href={HABATAN_FAQ_URL} {...ext}>「よくあるご質問」</a>（いずれも2026年11月24日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">みきで愛（出会い）サポートセンターの仕組みと相談の流れ</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              みきで愛（出会い）サポートセンターは、結婚を希望しながら出会いの機会が少ない方を応援するため、平成20年11月22日（いい夫婦の日）に設立されました。センターの事業は三木市から委託を受けて実施していると案内されています。お相手探しを担うのは「出会いサポーター」と呼ばれる市民ボランティアで、相談者の状況や希望を聞き取り、お相手を見つけて引き合わせる、いわば現代版の仲人です。
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>センターの「確認事項」を読み、相談お申込みフォームから受付希望日時（平日9時〜16時）を送る（仮申込み）</li>
              <li>センターから、希望した連絡方法で正式な受付日時の連絡を受ける</li>
              <li>本人がセンター（三木市役所 縁結び課窓口）に来庁し、担当者と面接する。顔写真付きの身分証明書（運転免許証など）が必要</li>
              <li>本人確認のうえで、担当する出会いサポーターが紹介される</li>
              <li>出会いサポーターと相談日を決め、自己紹介書・誓約書・全身写真（L版）などを提出して、結婚相談・紹介に進む</li>
            </ol>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>場所</td><td className={td}>三木市役所 縁結び課内（三木市上の丸町10番30号）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>受付</td><td className={td}>月〜金曜日 9時〜16時（12時〜12時45分、祝日、年末年始12月29日〜1月3日を除く）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>費用</td><td className={td}>結婚相談・紹介は無料。相談場所や出会いの場での飲食費、パーティー参加費は自己負担</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>相談場所</td><td className={td}>出会いサポーターとの相談は三木市内で行う</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>サポート期間</td><td className={td}>センター登録後、2年をめどにサポーターによる活動は終了</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>問い合わせ</td><td className={td}>みきで愛（出会い）サポートセンター 電話・FAX 0794-82-8833</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              センターが公表している出会いサポーターの登録状況は、令和5年3月末現在で23人（男性8人・女性15人）で、年代別では70代が14人と最も多く、60代以上が22人を占めます。出会いサポーターの新規募集は現在行っていないと案内されています。市の記者発表資料（令和4年7月19日発表）では、市の縁結び事業でそれまでに138組が成婚したとされています。当サイトでは、2026年11月24日時点でそれ以降の成婚数の公表を確認できませんでした。
            </p>
            <p>
              また、三木市内の婚活パーティーで知り合って成婚した方には、申込書を提出するとセンターから記念品が贈られます。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MD_TOP_URL} {...ext}>みきで愛（出会い）サポートセンター トップ</a>・<a href={MD_SUPPORT_URL} {...ext}>「出会いサポート事業」</a>・<a href={MD_KAKUNIN_URL} {...ext}>「確認事項」</a>・<a href={MD_FAQ_URL} {...ext}>「よくある質問」</a>・<a href={MD_CONTACT_URL} {...ext}>「相談お申込みフォーム」</a>・<a href={MD_TOROKU_URL} {...ext}>「出会いサポーターの登録状況」</a>・<a href={CITY_PRESS_2022_URL} {...ext}>三木市 記者発表資料「みき縁結びひろばを開催」（令和4年7月19日発表）</a>（いずれも2026年11月24日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">2026年4〜12月に三木市内で開かれる・開かれた婚活イベント（{EVENT_TOTAL}件）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              みきで愛（出会い）サポートセンターの「イベント情報」に掲載されている、2026年4月〜12月開催分を当サイトで一覧にしました。センター主催のほか、センターに登録した「みきで愛婚活応援団」（非営利目的で出会いイベントを企画・実施する企業・団体）の主催分も掲載されています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日（2026年）</th><th className={th}>名称</th><th className={th}>主催</th><th className={th}>参加費</th><th className={th}>対象</th></tr></thead>
                <tbody>
                  {events.map((e) => (
                    <tr key={e.date + e.name} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{e.date}{e.open ? "（11月24日時点で受付中）" : "（終了）"}</td>
                      <td className={td}><a href={e.href} {...ext}>{e.name}</a></td>
                      <td className={td}>{ORGANIZER_LABEL[e.org]}</td>
                      <td className={td}>{e.fee}</td>
                      <td className={td}>{e.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>主催者</th><th className={th}>件数</th><th className={th}>参加費の幅（当サイト集計）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>{ORGANIZER_LABEL.center}</td><td className={td}>{countBy("center")}件</td><td className={td}>男女同額 2,000円〜4,500円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>{ORGANIZER_LABEL.harima}</td><td className={td}>{countBy("harima")}件</td><td className={td}>男性4,000円・女性500円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>{ORGANIZER_LABEL.dei}</td><td className={td}>{countBy("dei")}件</td><td className={td}>男性4,000円〜7,500円・女性2,000円〜4,500円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>合計</td><td className={td}>{EVENT_TOTAL}件</td><td className={td}>—</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              9か月で{EVENT_TOTAL}件、月平均で約2.2件です（当サイト計算）。センター主催の回は定員が合計10名前後の少人数制で、平日（金曜日）夜の開催が多く、男女同額です。婚活応援団の回は土日開催が中心で、男女別の料金設定になっています。対象年齢は回によって異なり、30代〜40代を想定した回が多い一方、60歳以上のグループを設けた回（7月4日）や28〜70歳を対象とする回（12月19日）もあります。申込締切前の4件の締切は、11月29日の回が11月26日17時、12月11日の回が12月3日17時、12月19日の回が12月17日17時、12月27日の回が12月21日です。
            </p>
            <p>
              このほか、市民ボランティア団体「みきハート」（現在はセンターのみきハート部会）が平成13年から婚活パーティーを開いてきました。同部会のページに掲載されている直近の開催は2025年2月9日のバレンタインパーティーで、男女各10名が参加し、2組のカップルが誕生しています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：みきで愛（出会い）サポートセンター「イベント情報」<a href={MD_EVENT_URL} {...ext}>1ページ</a>・<a href={MD_EVENT_P2} {...ext}>2ページ</a>・<a href={MD_EVENT_P3} {...ext}>3ページ</a>・<a href={MD_EVENT_P4} {...ext}>4ページ</a>・<a href={MD_EVENT_P5} {...ext}>5ページ</a>・<a href={MD_NEWS_URL} {...ext}>お知らせ「みきで愛婚活応援団を募集」</a>・<a href={MD_HEART_URL} {...ext}>「みきハート事業」</a>（いずれも2026年11月24日確認）。件数・参加費の幅・月平均は当サイトが掲載内容から集計しています。12月27日の回は、一覧の見出しが「2026/12/12」、本文の開催日が「令和8年12月27日（日）」（応募締切12月21日）となっているため、本文の日付で掲載しています。募集状況は変わることがあるため、申込みの前に各イベントページでご確認ください。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚後の新生活の補助（トカイナカ三木新生活応援事業）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              三木市は、若者世帯の新生活（新婚・移住）にかかる住宅取得費用・賃貸費用・引越費用などを補助する「三木市新生活支援事業」（トカイナカ三木新生活応援事業）を実施しています。事業の一部には国の結婚新生活支援事業費補助金が充てられており、兵庫県が公表している令和7年度の結婚新生活支援事業の実施市町一覧にも三木市が掲載されています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>区分</th><th className={th}>補助の上限</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>夫婦等がともに39歳以下</td><td className={td}>30万円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>夫婦等がともに29歳以下</td><td className={td}>60万円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>上記に加え、三木市内で中古戸建住宅を購入（市独自）</td><td className={td}>80万円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>さらに三木市空き家バンク制度を利用（市独自）</td><td className={td}>100万円</td></tr>
                </tbody>
              </table>
            </div>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>対象は39歳以下の新婚世帯（申請年度以前の1月1日以降の婚姻）または39歳以下の移住世帯。申請期間は4月1日〜翌年3月31日</li>
              <li>世帯の総所得金額等が500万円未満（ひとり親世帯は250万円未満）。貸与型奨学金を返済中の場合は年間返済額を控除でき、空き家バンク掲載の戸建住宅を購入・賃借した場合は所得制限なし</li>
              <li>補助金を申請した翌年度から2年以上三木市に住むこと、市税の滞納がないこと</li>
              <li>新婚世帯は、夫婦ともに国が定める講座等（共家事・共育て講座、ライフデザイン支援講座、プレコンセプションケアに関する講座、医療機関での妊娠・出産に関する相談のいずれか）を受講していること</li>
              <li>対象費用は住宅取得費用・住宅賃借費用（公営住宅を除く）・引越費用・リフォーム費用（工事費100万円以上・着工前の申請が必要）。移住世帯はリフォーム費用以外が対象。国の「みらいエコ住宅2026事業」との併用は不可</li>
            </ul>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_SHINSEIKATSU_URL} {...ext}>三木市「新生活（新婚さん・移住世帯）を始められる方へ」（2026年6月11日更新）</a>・<a href={PREF_SHINSEIKATSU_URL} {...ext}>兵庫県「結婚に伴う新生活支援事業について」（2026年1月27日更新）</a>（いずれも2026年11月24日確認）。申請の可否や予算の残りは、三木市 縁結び課でご確認ください。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">ひょうご出会いサポートセンターと三木市</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              兵庫県の「ひょうご出会いサポートセンター」は、スマートフォンで会員を検索してお見合いを申し込む仕組みで、はばタン会員の登録手数料は年5,000円です（お見合い・成婚の費用はかかりません）。センターの公表では、令和7年度のはばタン会員登録者は3,351人（男性1,920人・女性1,431人）です。料金・入会条件・活動の流れの詳細は、当サイトの<Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンターの解説</Link>をご覧ください。
            </p>
            <p>
              センターが公表している令和8年度のはばタン会員登録料の補助自治体は、姫路市・加古川市・西脇市・多可町・宍粟市・養父市・高砂市・上郡町・神河町の9市町で、三木市は含まれていません。三木市の窓口が年齢50歳未満を対象としているのに対し、県のセンターの入会条件は「結婚を希望する20歳以上の独身の方」で、よくあるご質問には年齢の上限の記載がありません。50歳以上の方は、県のセンターが選択肢になります。
            </p>
            <p>
              なお、2026年10月25日には三木市青山公民館で、県のセンターの出張登録会（入会・更新を考えている方向けの説明と登録方法のレクチャー）が開かれました（終了）。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={HABATAN_TOP_URL} {...ext}>ひょうご出会いサポートセンター「はばタン会員TOP」</a>・<a href={HABATAN_FAQ_URL} {...ext}>「よくあるご質問」</a>・<a href={HABATAN_SUBSIDY_URL} {...ext}>お知らせ「令和8年度 はばタン会員登録料 補助金のお知らせ」（2026年8月24日）</a>・<a href={PREF_MIKI_TOROKU_URL} {...ext}>兵庫県 記者発表「ひょうご出会いサポートセンター 出張登録会を三木市で開催します！」（2026年10月9日）</a>（いずれも2026年11月24日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な支援と民間の結婚相談所の費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>お相手の探し方</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>みきで愛（出会い）サポートセンター（相談・紹介）</td><td className={td}>無料（飲食費などは自己負担）</td><td className={td}>出会いサポーター（ボランティア）が紹介</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>市内の婚活イベント</td><td className={td}>1回ごとの参加費（2026年4〜12月の回は500円〜7,500円）</td><td className={td}>イベントでのマッチング</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンター（はばタン会員）</Link></td><td className={td}>5,000円/年（三木市の補助なし）</td><td className={td}>会員自身の検索・AIによる紹介</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              三木市にお住まい・お勤めの方や三木市に縁のある方は、市役所内の窓口で無料の結婚相談・紹介を受けられ、費用面では民間の結婚相談所より大幅に低く抑えられます。一方で、紹介はボランティアの出会いサポーターによるもので、お相手を自分で検索する仕組みはなく、対象は50歳未満です。会員数の多い仕組みで自分から探したい方は県のセンター、担当者による継続的な提案や交際中の助言を重視する方は民間の結婚相談所、という比べ方が目安になります。三木市からは神戸市内の結婚相談所や、オンライン型の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。公的な支援の料金は、各公式サイトで2026年11月24日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/kakogawa/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">加古川市の婚活（婚活支援補助金）</Link>
            <Link href="/knowledge/hyogo-deai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ひょうご出会いサポートセンター（兵庫県）</Link>
            <Link href="/knowledge/toyooka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">豊岡市の婚活（omiai事業・Hapimari）</Link>
            <Link href="/area/kobe/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">神戸の結婚相談所</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/miai-renai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">お見合い結婚と恋愛結婚の割合</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/knowledge/flow/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の流れ</Link>
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
