import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-16 確認）。
// ・料金・入会条件・必要書類・活動の流れ：いばらき出会いサポートセンター公式「新システムの特徴」「よくあるご質問」「事業内容」
// ・会員数・新システムの成婚者数：同センター公式トップページの表示（2026-11-16 時点）
// ・拠点：同センター公式「アクセス」（2022年4月1日に3センターを閉鎖し2か所に統合）
// ・市町村の入会登録料助成：同センター公式「入会登録料の助成制度設置市町村のご紹介」（23市町村）
// ・成婚3,000組：茨城県 福祉部子ども政策局少子化対策課 資料提供（2025年11月6日）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の24社実査値

const TOP_URL = "https://www.ibccnet.com/";
const SYSTEM_URL = "https://www.ibccnet.com/new-system/";
const FAQ_URL = "https://www.ibccnet.com/faq/";
const SERVICE_URL = "https://www.ibccnet.com/about/service.html";
const ACCESS_URL = "https://www.ibccnet.com/about/access.html";
const SUBSIDY_URL = "https://www.ibccnet.com/city/subsidy.html";
const PREF_URL = "https://www.pref.ibaraki.jp/somu/hodo/hodo/pressrelease/hodohappyoushiryou/2203/documents/251106shoushika.pdf";

const subsidies = [
  { amount: "11,000円", cities: "石岡市・龍ケ崎市・笠間市・稲敷市・桜川市・行方市・鉾田市・小美玉市・大子町・美浦村・阿見町" },
  { amount: "10,000円", cities: "高萩市・北茨城市・八千代町" },
  { amount: "8,000円", cities: "つくばみらい市" },
  { amount: "5,500円", cities: "坂東市" },
  { amount: "5,000円", cities: "下妻市・那珂市・筑西市・利根町" },
  { amount: "登録料の2分の1", cities: "常陸太田市（上限5,500円）・常陸大宮市（上限5,000円）・かすみがうら市" },
];

export const metadata: Metadata = {
  title: "であイバ（いばらき出会いサポートセンター）の料金と入会条件｜登録料11,000円・3年有効、助成は23市町村",
  description:
    "茨城県の結婚支援センター「であイバ」は、入会登録料11,000円（条件に当たらない方は22,000円）・3年間有効で、月会費・成婚料はかかりません。会員数3,646人（2026年11月16日確認）、入会条件、活動の流れ、登録料を助成する23市町村を公式情報で整理しています。",
  alternates: { canonical: "/knowledge/deaiba/" },
};

const faqs = [
  {
    q: "であイバの料金はいくらですか？",
    a: "入会登録料は、茨城県内にお住まいかお勤めの方、親御さんが茨城県内にお住まいの方、茨城県への移住に関心がある方は11,000円、これらに当たらない方は22,000円です。有効期間は本人確認面談を行った月から3年間で、月会費・紹介料・成婚料はかかりません（公式「よくあるご質問」）。センターが後援する有料イベントやお見合い時の飲食代は別途負担です。",
  },
  {
    q: "茨城県外に住んでいても入会できますか？",
    a: "入会できます。公式FAQには「茨城県外にお住まいの方でも入会は可能です」と記載されています。県内在住・在勤、親御さんが県内在住、県への移住に関心がある、のいずれにも当たらない方は、入会登録料が22,000円になります。",
  },
  {
    q: "センターに行かずに入会できますか？",
    a: "できません。本人確認のための対面面談が必須で、水戸センターか県南センター（牛久市）への来所が必要です。公式サイトでは出張登録会の利用も案内されています。入会後の活動は、スマートフォンやパソコンからマイページで行います。",
  },
  {
    q: "住んでいる市町村から登録料の助成を受けられますか？",
    a: "センターの公式ページでは、23市町村が入会登録料の助成制度を設けていると案内されています（2026年11月16日確認）。助成額は5,000円〜11,000円、または登録料の2分の1などで、年齢や入会時期、入会前の事前申請などの条件があります。申請先はお住まいの市町村です。",
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
  headline: "であイバ（いばらき出会いサポートセンター）の料金と入会条件",
  description: "茨城県の結婚支援センター「であイバ」の料金・入会条件・必要書類・活動の流れと、入会登録料を助成している市町村を整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/deaiba/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "であイバ（いばらき出会いサポートセンター）", item: "https://mu-su-bi-ba.com/knowledge/deaiba/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";

export default function KnowledgeDeaiba() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "であイバ（いばらき出会いサポートセンター）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          であイバ（いばらき出会いサポートセンター）の料金・入会条件と、市町村の登録料助成
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月16日（料金・条件・会員数・助成市町村は同日にセンター公式サイトで、成婚組数は茨城県の発表資料で確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />結論：費用は3年間で入会登録料11,000円のみ。入会時に一度だけ来所が必要です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>入会登録料は<strong>11,000円（3年間有効）</strong>。県内在住・在勤などの条件に当たらない方は22,000円です。<strong>月会費・成婚料はかかりません</strong>。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>公式サイトの表示では<strong>会員数3,646人</strong>、2021年4月からの新システムでの成婚者数は354組です（2026年11月16日確認）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>センターの支援による成婚組数は、<strong>2025年5月に累計3,000組</strong>に達しました（茨城県発表）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>23市町村</strong>が入会登録料の助成制度を設けています（5,000円〜11,000円など）。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">料金と入会条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>一般社団法人いばらき出会いサポートセンター（2006年6月に茨城県と茨城県労働者福祉協議会が共同で開設、2013年4月に一般社団法人化）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会登録料</td><td className={td}>11,000円（茨城県内に在住・在勤、親御さんが県内在住、県への移住に関心がある方）／22,000円（いずれにも当たらない方）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>有効期間</td><td className={td}>本人確認面談を行った月から3年間（継続の場合は満期月の翌月から3年間）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>その他の費用</td><td className={td}>月会費・紹介料・成婚料はなし。有料イベント・セミナーの参加費、書類の発行手数料、お見合いやデートの飲食代は自己負担</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象</td><td className={td}>結婚を希望する独身の方で、メールが使えるスマートフォンを持ち、自分で操作できる方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>写真付き身分証明書（運転免許証・マイナンバーカード等）、独身証明書または戸籍抄本（3か月以内）、写真1枚（3か月以内に撮影、2枚まで登録可）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              民間の結婚相談所では、当サイトが公式サイトで料金を確認した24社のうち3項目を公表している22社の1年総額が125,400円〜709,500円でした（<Link href="/knowledge/cost/" className="text-[#A08447] underline">結婚相談所の料金</Link>）。であイバは3年間の費用が入会登録料のみです。活動はお相手探しから日程調整、交際後のセンターへの相談まで、ご自身のスマートフォン等で行う仕組みと案内されています（公式「新システムの特徴」）。担当者の関わり方は相談所ごとに異なるため、費用と支援の内容の両方を比べて選ぶことをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="underline">いばらき出会いサポートセンター「よくあるご質問」</a>・<a href={SERVICE_URL} target="_blank" rel="noopener noreferrer" className="underline">「事業内容」</a>・<a href={SYSTEM_URL} target="_blank" rel="noopener noreferrer" className="underline">「新システムの特徴」</a>（いずれも2026年11月16日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">入会から成婚までの流れ</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>公式サイトから入会申込（仮登録）を行い、来所予約をとる</li>
              <li>センターで本人確認の面談を受け、入会登録料を支払う（本登録後、会員番号がメールで届く）</li>
              <li>マイページでプロフィール・希望条件を入力し、書類と写真をアップロードする。価値観診断テスト（EQアセスメント・全112問）の受検は任意</li>
              <li>毎週水曜日のAI紹介（紹介のない週もあり）と、月3名までの検索からお相手に申し込む</li>
              <li>お見合い（対面またはオンラインを日程調整時に選択）。お見合い後は翌日中にマイページから回答する</li>
              <li>双方がYESならプレ交際（複数交際が可能）。合意のうえ真剣交際に進むと1対1の交際となり、紹介・他の交際は止まる</li>
              <li>結婚の意思が固まったら成婚退会</li>
            </ol>
            <p>拠点は水戸センター（水戸市三の丸・茨城県三の丸庁舎3階）と県南センター（牛久市・ラウェル牛久2階）の2か所です。2022年4月1日に県北・県西・鹿行の3センターを閉鎖し、2か所に統合しています。</p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SYSTEM_URL} target="_blank" rel="noopener noreferrer" className="underline">いばらき出会いサポートセンター「新システムの特徴」</a>・<a href={ACCESS_URL} target="_blank" rel="noopener noreferrer" className="underline">「アクセス」</a>（いずれも2026年11月16日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">会員数と成婚数</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>数値</th><th className={th}>出典</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会員数</td><td className={td}>3,646人</td><td className={td}>センター公式トップページの表示（2026年11月16日確認）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>新システムの成婚者数</td><td className={td}>354組（2021年4月1日〜）</td><td className={td}>同上</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>センターの支援による累計成婚組数</td><td className={td}>2025年5月に3,000組を達成</td><td className={td}>茨城県 資料提供（2025年11月6日）</td></tr>
                </tbody>
              </table>
            </div>
            <p>会員数は時点によって変わります。男女別・年代別の内訳は公式トップページには掲載されていないため、入会前の面談で確認することをおすすめします。</p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TOP_URL} target="_blank" rel="noopener noreferrer" className="underline">いばらき出会いサポートセンター 公式サイト</a>、<a href={PREF_URL} target="_blank" rel="noopener noreferrer" className="underline">茨城県「いばらき出会いサポートセンター主催『成婚3,000組達成記念イベント』の開催について」</a>（いずれも2026年11月16日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">入会登録料を助成している市町村（23市町村）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>助成額</th><th className={th}>市町村</th></tr></thead>
                <tbody>
                  {subsidies.map((s) => (
                    <tr key={s.amount} className="border-t border-[#E5DCCF] align-top"><td className={td}>{s.amount}</td><td className={td}>{s.cities}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              多くの市町村で「1人1回限り」「市税等の滞納がないこと」「申請時点で退会していないこと」などの条件があります。石岡市のように入会前の事前申請が必要な市や、年齢の上限（例：龍ケ崎市は申請年度の4月1日時点で35歳未満、鉾田市は45歳以下）を設けている市もあります。申請前にお住まいの市町村の担当課にご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SUBSIDY_URL} target="_blank" rel="noopener noreferrer" className="underline">いばらき出会いサポートセンター「入会登録料の助成制度設置市町村のご紹介」</a>（2026年11月16日確認・掲載順を助成額ごとに並べ替え）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/hyogo-deai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ひょうご出会いサポートセンター（兵庫県）</Link>
            <Link href="/knowledge/how-to-choose/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">タイプ別の選び方</Link>
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
