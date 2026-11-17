import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-17 確認）。
// ・導入時期・登録開始日・運営の委託先：三重県 報道発表「マッチングシステム『みえむすび』の会員登録を開始します」
// ・登録要件・登録料：三重県「マッチングシステム『みえむすび』」（イベント・募集情報）、みえ出逢いサポートセンター「AIマッチングシステム みえむすび」
// ・登録有効期間・費用・申込み上限・AIおすすめの更新日・交際ルール：同センター「みえむすびに関するよくある質問」
// ・申込者数・成婚数：同センター公式トップページの表示（HTML の data-target 値。2026-11-17 時点）
// ・相談窓口・開所時間：同センター「出会いや結婚について相談したい」
// ・市町の取り組み：同センター「市町の取り組み」（29市町）、同「四日市市」
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の24社実査値

const PREF_TOPICS_URL = "https://www.pref.mie.lg.jp/TOPICS/m0323600414.htm";
const PREF_EVENT_URL = "https://www.pref.mie.lg.jp/EVENTS/evt0005800358.htm";
const TOP_URL = "https://deai-mie.jp/";
const SYSTEM_URL = "https://deai-mie.jp/aimatching-miemusubi/";
const FAQ_URL = "https://deai-mie.jp/miemusubi_faq/";
const SOUDAN_URL = "https://deai-mie.jp/soudan/";
const CITY_URL = "https://deai-mie.jp/cityiniti/";
const YOKKAICHI_URL = "https://deai-mie.jp/cityiniti/yokkaichi/";

export const metadata: Metadata = {
  title: "三重県で結婚相談所を探す方へ｜県の「みえむすび」は登録無料・2年有効、民間との費用比較",
  description:
    "三重県が運営するマッチングシステム「みえむすび」は、登録料・成婚料が無料で、登録有効期間は本登録から2年です。申込者数1,452名（令和8年10月末時点）、登録要件、必要書類、活動の流れ、相談窓口、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/mie/" },
};

const faqs = [
  {
    q: "三重県の「みえむすび」の料金はいくらですか？",
    a: "登録料・成婚料などの費用はかかりません（みえ出逢いサポートセンター「みえむすびに関するよくある質問」）。インターネットの接続料・通信費、顔合わせの交通費や飲食代は自己負担です。顔合わせに「みえの縁むすび地域サポーター」の同席を希望する場合は、同席代として1回1,000円がかかります。",
  },
  {
    q: "三重県外に住んでいても登録できますか？",
    a: "三重県の案内では、登録要件を「三重県在住・在勤・在学もしくは三重県にゆかりのある18歳以上の方」としています。県外にお住まいでも、県内に勤務・通学している方や三重県にゆかりのある方は対象となります。「ゆかり」の範囲は公式ページに具体的な記載がないため、センターにお問い合わせください。",
  },
  {
    q: "センターに行かずに登録できますか？",
    a: "できます。公式の「利用の流れ」では、入会申込（仮登録）の際に面談を予約し、来所での面談とオンライン面談のどちらかを選べると案内されています。オンライン面談の場合は、面談の前日までに必要書類をマイページからアップロードします。代理での登録はできません。",
  },
  {
    q: "お相手への申込みに上限はありますか？",
    a: "あります。公式FAQでは、マッチングの申込みは1日1回1人まで、お相手探し（検索・閲覧）は1日1回最大60分までとされています。マッチング成立とお友だち交際のお相手が合計3人になると、新たな申込みはできません。AIからのおすすめは、おすすめがある場合に毎週月曜日に更新されます。",
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
  headline: "三重県の公的な婚活支援「みえむすび」の料金・登録要件と、民間の結婚相談所との比較",
  description: "三重県が運営するマッチングシステム「みえむすび」の料金・登録要件・必要書類・活動の流れと、みえ出逢いサポートセンターの相談窓口、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-17",
  dateModified: "2026-11-17",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/mie/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "三重県の結婚支援（みえむすび）", item: "https://mu-su-bi-ba.com/knowledge/mie/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";

export default function KnowledgeMie() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "三重県の結婚支援（みえむすび）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          三重県の結婚相談所選び：県の「みえむすび」の料金・登録要件と、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月17日（料金・登録要件・申込者数・相談窓口は同日にみえ出逢いサポートセンター公式サイトと三重県公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />三重県の「みえむすび」は登録料・成婚料が無料で、登録は2年間有効です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>三重県は<strong>2025年12月</strong>に、ご自身でお相手を探すマッチングシステム「みえむすび」を導入しました。運営はみえ出逢いサポートセンター（県の委託で株式会社デルタスタジオが運営）です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>登録料・成婚料はかかりません</strong>。登録有効期間は本登録完了日から<strong>2年</strong>です。地域サポーターの顔合わせ同席を希望する場合のみ、1回1,000円がかかります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>公式サイトの表示では、<strong>みえむすび申込者数は1,452名</strong>（令和8年10月末日時点）、センターを利用した成婚数は<strong>43組</strong>（平成26年度からの累計・イベント等による成婚を含む）です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が<strong>125,400円〜709,500円</strong>です。費用の差は大きい一方、みえむすびは申込み数などに上限があり、活動はご自身で進める仕組みです。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">みえむすびの料金と登録要件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>三重県（子ども・福祉部 少子化対策課）。みえ出逢いサポートセンターとして、県の委託により株式会社デルタスタジオが実施</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>開始時期</td><td className={td}>2025年12月1日（月）10時から会員登録の受付を開始</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録料・成婚料</td><td className={td}>無料（登録やシステム利用に費用はかからない）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録有効期間</td><td className={td}>本登録完了日から2年を経過する日まで。休会しても期間は延長されない。有効期限の90日前・60日前・30日前・7日前に更新の案内あり</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>自己負担となる費用</td><td className={td}>インターネット接続料・通信費、顔合わせの交通費・飲食代、地域サポーターの同席代（1回1,000円・希望者のみ）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録要件</td><td className={td}>真に結婚を希望し、自ら婚活に取り組む意欲のある18歳以上の独身の方／三重県在住・在勤・在学もしくは三重県にゆかりのある方（18歳に達してから最初の年度末までの学生を除く）／スマートフォン・パソコン等を自分で操作でき、ご自身のメールアドレスと電話番号を登録できる方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>顔写真付き身分証明書の写し（運転免許証・マイナンバーカード表面など）、独身証明書の写し（本籍地の市区町村で3か月以内に発行。マイナンバーカードでオンライン確認する場合は不要）、プロフィール用写真（3か月以内に撮影・無帽で本人のみ。バストアップ1枚は必須、もう1枚は任意）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              独身証明書は原則として本籍地の市区町村で発行されます。センターの公式FAQでは、本籍地でなくても発行できることが確認できた市町として、津市・松阪市・鈴鹿市・名張市・亀山市・熊野市・いなべ市・東員町・川越町・明和町・玉城町・大紀町の12市町を挙げています（令和7年10月末時点）。手数料や申請書の様式は市区町村ごとに異なるため、事前に戸籍担当の窓口にご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_TOPICS_URL} target="_blank" rel="noopener noreferrer" className="underline">三重県「マッチングシステム『みえむすび』の会員登録を開始します」</a>・<a href={PREF_EVENT_URL} target="_blank" rel="noopener noreferrer" className="underline">三重県「マッチングシステム『みえむすび』」</a>・<a href={SYSTEM_URL} target="_blank" rel="noopener noreferrer" className="underline">みえ出逢いサポートセンター「AIマッチングシステム みえむすび」</a>・<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="underline">「みえむすびに関するよくある質問」</a>（いずれも2026年11月17日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">登録から成婚までの流れと利用上のルール</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>利用規約を確認し、入会申込（仮登録）と面談予約を行う。面談は来所かオンラインを選べる</li>
              <li>予約した日に面談を受けて本登録。必要書類は面談の前日までにマイページからアップロードする（来所面談・出張登録会では当日持参も可）</li>
              <li>スマートフォンやパソコンでお相手を検索し、マッチングを申し込む。AIからのおすすめもある（おすすめがない場合もある）</li>
              <li>申し込まれた側は、申込日を含めて3日以内に回答する。マッチングが成立したら、地域サポーターの同席の有無を選び、会員同士のみの場合は成立日から30日以内に顔合わせを行う</li>
              <li>顔合わせ日を含めて4日以内に結果を入力し、双方がOKなら「お友だち交際」へ（最大90日・同時に3名まで、ニックネームでやり取り）</li>
              <li>双方が希望すれば「真剣交際」が成立し、センターからお相手の氏名と電話番号が伝えられる。真剣交際中は他の方への申込みはできない</li>
              <li>ご結婚が決まったら成婚退会の手続きを行う</li>
            </ol>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>ルール</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>マッチングの申込み</td><td className={td}>1日1回1人まで（毎日深夜0時にリセット）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お相手探し（検索・閲覧）</td><td className={td}>1日1回最大60分まで</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>同時進行の上限</td><td className={td}>マッチング成立とお友だち交際のお相手が合計3人になると、新たな申込み・検索はできない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>AIからのおすすめ</td><td className={td}>おすすめがある場合、毎週月曜日に更新</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>顔合わせの無断欠席</td><td className={td}>当日お相手に連絡せず遅刻・欠席・キャンセルした場合、会員登録抹消となる場合がある</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              みえむすびは、お相手探しから顔合わせの日程調整まで、会員ご自身が進める仕組みです。担当者が定期的に面談して活動を支える形ではないため、手厚い伴走を希望する方は、民間の結婚相談所のサポート内容とあわせて比べることをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SYSTEM_URL} target="_blank" rel="noopener noreferrer" className="underline">みえ出逢いサポートセンター「AIマッチングシステム みえむすび」</a>・<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="underline">「みえむすびに関するよくある質問」</a>（いずれも2026年11月17日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">申込者数と成婚数</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>数値</th><th className={th}>出典</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>みえむすび申込者数</td><td className={td}>1,452名（令和8年10月末日時点）</td><td className={td}>センター公式トップページの表示（2026年11月17日確認）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>センターを利用した成婚数</td><td className={td}>43組（センター開設の平成26年度からの累計。出逢いイベント等による成婚を含む）</td><td className={td}>同上</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              公式サイトに表示されているのは「申込者数」で、本登録を終えた会員数や男女別・年代別の内訳は掲載されていません。また、成婚数43組はみえむすび導入前のイベント等による成婚を含む累計値で、みえむすび単独の成婚数ではありません。活動中の会員数の目安を知りたい方は、面談の際にセンターへご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TOP_URL} target="_blank" rel="noopener noreferrer" className="underline">みえ出逢いサポートセンター 公式サイト</a>（2026年11月17日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">相談窓口と市町の取り組み</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>拠点</th><th className={th}>所在地</th><th className={th}>開所日時</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>みえ出逢いサポートセンター</td><td className={td}>四日市市安島1-3-31 トナリエ四日市4階（近鉄四日市駅から徒歩3分）</td><td className={td}>不定休・10:00〜18:00（開所日はカレンダーで案内）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>南勢サテライト</td><td className={td}>伊勢市船江1丁目471-1 ミタス伊勢内（伊勢市駅から徒歩約15分）</td><td className={td}>毎週月・火・水・土曜 11:00〜19:00（祝日も開所）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              センターでは、結婚を希望する方やそのご家族からの出逢い・結婚に関する相談を、来所（予約制・個室）、電話、メールで受け付けています。Zoomを使ったオンライン相談会も月3回程度開催されています。
            </p>
            <p>
              センター公式サイトの「市町の取り組み」には、県内29市町それぞれの出会い・結婚支援の担当窓口や取り組みが掲載されています。たとえば四日市市は「四日市マリッジサポート事業」として、イベント・セミナーのほかにLINEで婚活相談ができる「マリサポコンシェルジュサービス」を運用しています。みえむすびは登録料がかからないため、茨城県・兵庫県のセンターのような登録料の助成制度は、当サイトでは確認していません。お住まいの市町の取り組みは、上記ページまたは各市町の担当窓口でご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SOUDAN_URL} target="_blank" rel="noopener noreferrer" className="underline">みえ出逢いサポートセンター「出会いや結婚について相談したい」</a>・<a href={CITY_URL} target="_blank" rel="noopener noreferrer" className="underline">「市町の取り組み」</a>・<a href={YOKKAICHI_URL} target="_blank" rel="noopener noreferrer" className="underline">「四日市市」</a>（いずれも2026年11月17日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>登録の有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>三重県「みえむすび」</td><td className={td}>無料（地域サポーター同席は1回1,000円）</td><td className={td}>本登録から2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンター（はばタン会員）</Link></td><td className={td}>5,000円/年</td><td className={td}>1年（年ごとの登録手数料）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/deaiba/" className="text-[#A08447] underline">いばらき出会いサポートセンター（であイバ）</Link></td><td className={td}>11,000円（条件に当たらない方は22,000円）</td><td className={td}>3年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用だけを比べると、みえむすびは民間の結婚相談所よりも大幅に低く抑えられます。一方で、申込みは1日1人まで、同時に進められるお相手は合計3人までといった上限があり、お相手の紹介や交際の進め方について担当者から継続的な助言を受ける仕組みではありません。民間の結婚相談所は、費用がかかる代わりに、担当者によるお見合いの調整や交際中の相談などを行うところが多くあります。三重県内でも利用できるオンライン型の結婚相談所や、隣接する愛知県の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。兵庫県・茨城県のセンターの料金は、各センターの公式サイトで2026年11月16日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/area/nagoya/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">名古屋の結婚相談所</Link>
            <Link href="/knowledge/hyogo-deai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ひょうご出会いサポートセンター（兵庫県）</Link>
            <Link href="/knowledge/deaiba/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">であイバ（茨城県）</Link>
            <Link href="/knowledge/ishikawa/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">いしかわ結婚支援センター（石川県）</Link>
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
