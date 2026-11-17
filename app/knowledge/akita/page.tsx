import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-17 確認）。
// ・会員数861人（R8年10月末現在）・成婚報告者数2,145人（H23～累計）・設立団体：あきた結婚支援センター公式トップページの表示
// ・料金・入会条件・必要書類・入会/活動の流れ・AI紹介/検索の上限：同「入会のご案内・初めての方へ」
// ・2年間の起算・追加費用・回答期限・交際期間・写真公開：同「よくあるご質問」
// ・拠点（中央・北・南センター）：同「組織・アクセス」
// ・助成制度の様式がある25市町村：同「市町村との連携」
// ・市町村ごとの条件：秋田市・大館市・横手市・由利本荘市の各公式ページ
// ・他県センターとの比較：当サイト /knowledge/hyogo-deai/・/knowledge/deaiba/（各センター公式で2026-11-16確認）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社計算値

const TOP_URL = "https://www.sukoyaka-akita.com/";
const ABOUT_URL = "https://www.sukoyaka-akita.com/about/";
const FAQ_URL = "https://www.sukoyaka-akita.com/contact/#faq";
const ACCESS_URL = "https://www.sukoyaka-akita.com/access/";
const MUNI_URL = "https://www.sukoyaka-akita.com/supporter/municipality/";
const AKITA_CITY_URL = "https://www.city.akita.lg.jp/kurashi/kyosei-kyodo/1005942.html";
const ODATE_URL = "https://www.city.odate.lg.jp/city/soshiki/kikakuchosei/p10915";
const YOKOTE_URL = "https://www.city.yokote.lg.jp/kurashi/1001145/1005266/1003944.html";
const YURIHONJO_URL = "https://www.city.yurihonjo.lg.jp/1001506/1001550/1001580/1005457.html";

const municipalities = [
  "秋田市", "鹿角市", "小坂町", "大館市", "北秋田市", "上小阿仁村", "藤里町", "能代市", "八峰町", "三種町",
  "五城目町", "大潟村", "潟上市", "八郎潟町", "由利本荘市", "羽後町", "にかほ市", "男鹿市", "美郷町", "湯沢市",
  "井川町", "東成瀬村", "仙北市", "大仙市", "横手市",
];

const cityRules = [
  { city: "秋田市", rule: "入会日時点で秋田市民・49歳以下の方。1人につき2回まで", href: AKITA_CITY_URL, updated: "2026年6月12日更新" },
  { city: "大館市", rule: "40歳未満の市民。登録料1万円を全額負担", href: ODATE_URL, updated: "令和8年度の掲載" },
  { city: "横手市", rule: "入会日に横手市に住所があり、過去に助成を受けたことがない方。市への提出書類はなし", href: YOKOTE_URL, updated: "2026年7月23日更新" },
  { city: "由利本荘市", rule: "市内に住所がある独身の方。1回限り", href: YURIHONJO_URL, updated: "2026年8月31日更新" },
];

export const metadata: Metadata = {
  title: "あきた結婚支援センター（あきまっち）の料金と入会条件｜登録料1万円・2年有効、県内25市町村に助成制度【2026年】",
  description:
    "秋田県のあきた結婚支援センター（あきまっち）は、入会登録料10,000円・2年間有効で、月会費・成婚料はかかりません。会員861人・成婚報告者2,145人（公式表示）、入会条件、必要書類、AI紹介の流れ、3か所の拠点、登録料を助成する25市町村の条件を公式情報で整理しています。",
  alternates: { canonical: "/knowledge/akita/" },
};

const faqs = [
  {
    q: "あきた結婚支援センターの料金はいくらですか？",
    a: "入会登録料は10,000円（税込）で、会員番号を発行した月から2年間有効です。月会費・紹介料・成婚料はかかりません（公式「よくあるご質問」）。必要書類の発行手数料と、お見合いや交際時の飲食代は自己負担です。県内の市町村の助成制度を利用すると、入会登録料は実質無料になると案内されています。",
  },
  {
    q: "秋田県外に住んでいても入会できますか？",
    a: "公式の「登録できる方」では、秋田県にお住まいかお勤めの方に加えて、将来秋田県への移住をお考えの方も対象としています。あわせて、結婚を希望する20歳以上の独身の方で、インターネットやメールを利用できるスマートフォンを持ち、自分で操作できることが条件です。",
  },
  {
    q: "センターに行かずに入会できますか？",
    a: "できます。公式の入会の流れでは、WEBで仮登録とオリエンテーションの予約を行い、オリエンテーションは対面またはオンライン（Zoom）を選べます。オンラインの場合、入会登録料は振込（手数料は自己負担）か補助金申請で支払います。なお、入会申込はWEBのみで、代理申込は受け付けていません。",
  },
  {
    q: "AIから紹介される人数や、自分で申し込める人数に上限はありますか？",
    a: "あります。AI紹介は毎週水曜日に配信され、1か月に最大4名まで、自分で検索して申し込めるのは1か月に最大3名までです（公式「入会のご案内」）。条件の合うお相手がいない週は紹介がありません。",
  },
  {
    q: "どの市町村でも登録料の助成を受けられますか？",
    a: "センター公式サイトでは「県内全市町村で全額助成を実施中」と案内し、25市町村すべての申請様式を掲載しています。ただし、条件は市町村ごとに異なります。たとえば秋田市は入会日時点で49歳以下、大館市は40歳未満が対象です。お住まいの市町村の案内をご確認ください。",
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
  headline: "あきた結婚支援センター（あきまっち）の料金と入会条件",
  description: "秋田県のあきた結婚支援センター（あきまっち）の料金・会員数・入会条件・必要書類・活動の流れ・拠点と、登録料を助成する市町村の条件を整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-17",
  dateModified: "2026-11-17",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/akita/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "あきた結婚支援センター", item: "https://mu-su-bi-ba.com/knowledge/akita/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeAkita() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "あきた結婚支援センター" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          あきた結婚支援センター（あきまっち）の料金・入会条件と、市町村の登録料助成
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月17日（料金・会員数・条件・拠点・助成制度は同日にセンター公式サイトと各市の公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />入会登録料は2年間で1万円、市町村の助成の条件を満たせば実質無料です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>入会登録料は<strong>10,000円（税込・2年間有効）</strong>。<strong>月会費・紹介料・成婚料はかかりません</strong>。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>会員数は<strong>861人（令和8年10月末現在）</strong>、成婚報告者数は<strong>2,145人（平成23年からの累計）</strong>です（公式トップページの表示）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>オリエンテーションは<strong>対面かオンライン（Zoom）</strong>を選べるため、センターに行かずに入会できます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>県内<strong>25市町村すべて</strong>に登録料の助成様式がありますが、年齢・回数などの条件は市町村ごとに異なります。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">あきた結婚支援センターの概要と実績</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>一般社団法人あきた結婚支援センター（愛称「あきまっち」）。秋田県・県内全市町村・秋田県商工会議所連合会・秋田県医師会などが共同で設立した法人</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会登録料</td><td className={td}>10,000円（税込）。会員番号を発行した月から2年間有効</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>その他の費用</td><td className={td}>月会費・紹介料・成婚料はなし。必要書類の発行手数料、お見合い・交際時の飲食代は自己負担</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会員数</td><td className={td}>861人（令和8年10月末現在）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>成婚報告者数</td><td className={td}>2,145人（平成23年〜の累計）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>主な事業</td><td className={td}>会員制の個別マッチング（AI紹介・検索）、すこやかあきた出会い応援隊などによるイベント情報の発信、結婚コーディネーターによる無料相談</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              成婚報告者数は「人」単位の表示で、組数ではありません。また、公式の表示にはお見合い経由かイベント経由かの内訳が示されていないため、当サイトでは表示どおりの数値を掲載しています。会員数は男女別の内訳が公表されていません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TOP_URL} {...ext}>あきた結婚支援センター 公式トップページ</a>・<a href={ABOUT_URL} {...ext}>「入会のご案内・初めての方へ」</a>・<a href={FAQ_URL} {...ext}>「よくあるご質問」</a>（いずれも2026年11月17日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">入会条件と必要書類</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録できる方</td><td className={td}>結婚を希望する20歳以上の独身の方／秋田県にお住まいかお勤めの方、または将来秋田県に移住をお考えの方／インターネット環境やメールが利用可能なスマートフォンを持ち、自分で支障なく操作できる方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>写真付き身分証明書（運転免許証・マイナンバーカード等）、戸籍抄本または独身証明書いずれか1通（発行から2か月以内・本籍地の市町村が発行）、収入がわかる書類いずれか1つ（所得証明書・源泉徴収票・確定申告書の控、直近のもの）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>写真</td><td className={td}>3か月以内に撮影したバストアップ写真1枚は必須、プライベート写真は任意。公開は「紹介時から」か「お見合い成立時から」を選択</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申込方法</td><td className={td}>WEB申込のみ。代理申込は不可。フィーチャーフォン（スマートフォン以外の携帯電話）ではマッチングシステムを利用できません</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={ABOUT_URL} {...ext}>あきた結婚支援センター「入会のご案内・初めての方へ」</a>・<a href={FAQ_URL} {...ext}>「よくあるご質問」</a>（2026年11月17日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">入会から成婚退会までの流れ（マッチングシステム）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>WEBで仮登録とログインパスワードの設定を行い、オリエンテーション（対面またはオンラインZoom）を予約する</li>
              <li>オリエンテーションで本人確認、希望条件のヒアリング、活動の進め方の説明を受ける（プロフィール用写真の撮影も可能）</li>
              <li>入会登録料10,000円を支払う（対面は現金、オンラインは振込。いずれも補助金申請も可）。入金確認後、会員番号がメールで届く</li>
              <li>マイページでプロフィール・自己PR・希望条件を入力し、必要書類と写真をアップロードする。価値観診断テスト（EQアセスメント、任意・受検は1回限り）の受検が推奨されている</li>
              <li>AI紹介（毎週水曜日・1か月最大4名）や検索（1か月最大3名）でお相手を探す。紹介への回答期限は紹介日の翌日から7日目まで</li>
              <li>双方が「YES」ならお見合い。日程はマイページで調整し、場所は候補リストから選ぶ（女性の希望を優先）。お見合い後は翌日中に回答する</li>
              <li>双方が「YES」ならプレ交際（交際成立から3か月間）。この段階では複数の方との交際が可能</li>
              <li>お相手を1人に絞った真剣交際へ進むと、AI紹介・検索・他の方との交際は停止する</li>
              <li>結婚の意思が固まったら成婚退会</li>
            </ol>
            <p>
              公式FAQでは、確定したお見合いの当日の無断キャンセルは「1か月の活動休止ペナルティ」となる場合があると案内されています。また、システムはお見合いや成婚を約束するものではないと明記されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={ABOUT_URL} {...ext}>あきた結婚支援センター「入会のご案内・初めての方へ」</a>・<a href={FAQ_URL} {...ext}>「よくあるご質問」</a>（2026年11月17日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">拠点（中央・北・南センター）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>拠点</th><th className={th}>所在地</th><th className={th}>電話・休業日</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>中央センター</td><td className={td}>秋田市中通6-7-36（フォーラムアキタ1階）</td><td className={td}>018-874-9471／年末年始・夏季休業</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>北センター</td><td className={td}>大館市字中町5（旧正札竹村ビル2階）</td><td className={td}>0186-57-8611／火・水曜日、年末年始・夏季休業</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>南センター</td><td className={td}>横手市大町7-18（横手商工会議所 大町会館4階）</td><td className={td}>0182-38-8801／火・水曜日、年末年始・夏季休業</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              総合受付はフリーダイヤル0800-800-0413です。婚活相談は対面・オンライン（要予約）、電話（予約不要）、メールで受け付けています。営業時間はページによって表記が異なる箇所があるため、来所前に公式の「組織・アクセス」でご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={ACCESS_URL} {...ext}>あきた結婚支援センター「組織・アクセス」</a>（2026年11月17日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">登録料を助成している市町村と条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              センター公式の「市町村との連携」ページには、次の25市町村の助成申請様式（同意書・申請書など）が掲載されています。秋田県の市町村数は25のため、県内すべての市町村が対象です。
            </p>
            <p className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-4">{municipalities.join("・")}</p>
            <p>当サイトが4市の公式ページで条件を確認したところ、年齢や回数の条件は次のとおり異なっていました。</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>市</th><th className={th}>対象・条件</th><th className={th}>出典</th></tr></thead>
                <tbody>
                  {cityRules.map((c) => (
                    <tr key={c.city} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{c.city}</td>
                      <td className={td}>{c.rule}</td>
                      <td className={td}><a href={c.href} {...ext}>{c.city}公式</a>（{c.updated}）</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              来所して入会する場合は当日に様式が渡され、オンラインで入会する場合はマイページ開設後に様式をダウンロードしてアップロードします。秋田市の助成を利用してオンライン入会する場合は、秋田市の電子申請システムからの手続きとなります。上記4市以外の条件は当サイトでは確認していないため、お住まいの市町村の案内をご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MUNI_URL} {...ext}>あきた結婚支援センター「市町村との連携」</a>、<a href={AKITA_CITY_URL} {...ext}>秋田市</a>・<a href={ODATE_URL} {...ext}>大館市</a>・<a href={YOKOTE_URL} {...ext}>横手市</a>・<a href={YURIHONJO_URL} {...ext}>由利本荘市</a>の各公式ページ（いずれも2026年11月17日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>2年間の登録料（当サイト計算）</th><th className={th}>月あたりの紹介・申込みの上限</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>あきた結婚支援センター</td><td className={td}>10,000円（2年間有効）</td><td className={td}>10,000円（助成の条件を満たせば実質0円）</td><td className={td}>AI紹介4名＋検索3名</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンター</Link></td><td className={td}>5,000円/年</td><td className={td}>10,000円</td><td className={td}>AI紹介4人＋検索5名</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/deaiba/" className="text-[#A08447] underline">いばらき出会いサポートセンター（であイバ）</Link></td><td className={td}>11,000円（3年間有効。条件に当たらない方は22,000円）</td><td className={td}>11,000円</td><td className={td}>—</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>—</td><td className={td}>各社で異なる</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              あきた結婚支援センターの2年間の登録料は、兵庫県のセンターと同じ10,000円です。秋田県では市町村の助成（全額・条件あり）で実質無料になる点が異なります。一方、AI紹介と検索を合わせた月の上限は最大7名で、兵庫県のセンター（最大9名）より少なく設定されています。民間の結婚相談所は費用が高い代わりに、カウンセラーによるお相手の提案や交際中の助言など、サポートの範囲が広い傾向があります。会員数の規模や紹介の上限を考慮し、公的センターと民間の結婚相談所を併用する方法もあります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※他県センターの料金・上限は、当サイトが各センターの公式サイトで2026年11月16日に確認した値です。民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/area/sendai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">仙台・宮城の結婚相談所</Link>
            <Link href="/knowledge/hyogo-deai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ひょうご出会いサポートセンター</Link>
            <Link href="/knowledge/deaiba/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">であイバ（茨城県）</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/mie/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">みえむすび（三重県）</Link>
            <Link href="/knowledge/ishikawa/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">いしかわ結婚支援センター（石川県）</Link>
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
