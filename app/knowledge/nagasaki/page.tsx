import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-19 確認）。
// ・名称・所在地・開所時間・閉所日・電話・事業内容・事業主体（長崎県→公益財団法人ながさき地域政策研究所へ委託）：
//   長崎県婚活サポートセンター あいたか「センターについて」
// ・登録料（2年間10,000円・月額換算約420円）・利用の流れ・お友達交際30日：同「婚活マッチング」
// ・対象（20歳以上の独身・県外在住も可）・必要書類・振込・企業割引制度の有無・更新・申込みの上限・回答期限・
//   サポーター同席・お友だち交際中の連絡先交換禁止・真剣交際の回答期限・21市町の窓口で利用可：同「よくあるご質問」
// ・お見合い件数・カップル数・成婚数：同 公式トップページ・「婚活マッチング」の表示
//   （お見合い件数・カップル数は平成29年1月からの累計。集計時点の注記はトップが令和8年9月末、マッチングページが令和8年10月末）
// ・20代・30代の登録料半額キャンペーン：同 お知らせ（2026/11/17）
// ・県内21市町の窓口：同「アクセスマップ」
// ・縁結び隊（ボランティア・相談料や紹介料なし・実費は自己負担）：同「縁結び隊」「よくあるご質問」
// ・無料の婚活相談（来所・電話・メール・Zoom）：同「婚活相談」
// ・市町独自の登録料補助：公式サイト上で一覧を確認できなかったため掲載しない
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const TOP_URL = "https://konkatu-nagasaki.net/";
const MATCHING_URL = "https://konkatu-nagasaki.net/matching";
const SUMMARY_URL = "https://konkatu-nagasaki.net/summary";
const FAQ_URL = "https://konkatu-nagasaki.net/faq";
const ACCESS_URL = "https://konkatu-nagasaki.net/access";
const CAMPAIGN_URL = "https://konkatu-nagasaki.net/news/20-30HalfPriceC26W";
const ENMUSUBI_URL = "https://konkatu-nagasaki.net/marriage-supporter";
const COUNSELING_URL = "https://konkatu-nagasaki.net/counseling";

const stats = { omiai: 9909, couple: 2744, seikon: 615 };

const windows = [
  { city: "長崎市", name: "長崎創生推進室" },
  { city: "佐世保市", name: "させぼ婚活サポートプラザ" },
  { city: "島原市", name: "シティプロモーション課" },
  { city: "諫早市", name: "移住定住推進課" },
  { city: "大村市", name: "大村市婚活サポートセンター" },
  { city: "平戸市", name: "企画財政課" },
  { city: "松浦市", name: "政策企画課" },
  { city: "対馬市", name: "つしま縁結びプロジェクト実行委員会（地域づくり課）" },
  { city: "壱岐市", name: "政策企画課" },
  { city: "五島市", name: "こども未来課" },
  { city: "西海市", name: "政策企画課" },
  { city: "雲仙市", name: "地域づくり推進課" },
  { city: "南島原市", name: "南島原結婚サポートセンター" },
  { city: "長与町", name: "政策企画課" },
  { city: "時津町", name: "企画財政課" },
  { city: "東彼杵町", name: "総務課" },
  { city: "川棚町", name: "企画財政課" },
  { city: "波佐見町", name: "企画財政課" },
  { city: "小値賀町", name: "総務課" },
  { city: "佐々町", name: "企画商工課" },
  { city: "新上五島町", name: "地域づくり課" },
];

export const metadata: Metadata = {
  title: "長崎県で結婚相談所を探す方へ｜県の「あいたか」は登録料1万円・2年有効、成婚615組と民間との費用比較",
  description:
    "長崎県婚活サポートセンター「あいたか」のお見合いシステムは、会員登録料10,000円（2年間）で利用できます。対象・必要書類・申込みの上限、成婚数615組などの実績、20代・30代の登録料半額キャンペーン、県内21市町の窓口、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/nagasaki/" },
};

const faqs = [
  {
    q: "あいたかのお見合いシステムの料金はいくらですか？",
    a: "会員登録料として2年間で10,000円が必要です（長崎県婚活サポートセンター「よくあるご質問」）。公式サイトでは、24か月で割った月額換算を約420円と案内しています。入金は振り込みで、企業割引制度があります。更新する場合は、初回登録時と同じ書類と登録料が必要です。",
  },
  {
    q: "何歳から何歳まで登録できますか？",
    a: "公式FAQでは、結婚を希望する20歳以上の独身の方で、インターネットへの接続やメールを使用できる方が登録できるとしています。上限年齢は示されていません。",
  },
  {
    q: "長崎県外に住んでいても利用できますか？",
    a: "公式FAQでは、長崎県外在住の方も利用できるとしています。独身者のご家族からの相談も受け付けています。",
  },
  {
    q: "お引き合わせの申込みに上限はありますか？",
    a: "申込みは1日1回1名まで、最大3名までです。一度申し込むとキャンセルはできません。申込みを受けた方は3日以内に回答するルールで、回答がないと自動キャンセルになる場合があります。",
  },
  {
    q: "登録料の割引はありますか？",
    a: "センターのお知らせでは、2026年12月1日から2027年3月15日まで、20歳代・30歳代の独身の方を対象に、2年間10,000円の登録料を半額の5,000円とするキャンペーンを実施すると案内しています。新規の方に加え、更新の方も利用できるとされています。このほか、公式FAQに企業割引制度があることが記載されています。",
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
  headline: "長崎県の公的な婚活支援「あいたか」の料金・登録条件と、民間の結婚相談所との比較",
  description: "長崎県婚活サポートセンター「あいたか」のお見合いシステムの料金・対象・必要書類・申込みのルール・実績と、県内21市町の窓口、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/nagasaki/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "長崎県の結婚支援（あいたか）", item: "https://mu-su-bi-ba.com/knowledge/nagasaki/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";

export default function KnowledgeNagasaki() {
  const coupleRate = ((stats.couple / stats.omiai) * 100).toFixed(1);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "長崎県の結婚支援（あいたか）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          長崎県の結婚相談所選び：県の「あいたか」の料金・登録条件と、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月19日（料金・登録条件・申込みのルール・実績・キャンペーン・窓口は同日に長崎県婚活サポートセンター「あいたか」の公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />長崎県の「あいたか」のお見合いシステムは、会員登録料10,000円で2年間利用できます
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>「長崎県婚活サポートセンター あいたか」は、長崎県が事業主体となり、公益財団法人ながさき地域政策研究所に委託して運営している婚活支援の窓口です。センターは<strong>長崎県庁2階</strong>にあります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>会員制のデータマッチング「お見合いシステム」の会員登録料は<strong>2年間で10,000円</strong>です。対象は<strong>結婚を希望する20歳以上の独身の方</strong>で、長崎県外在住の方も利用できます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>公式サイトの表示では、平成29年1月からの累計で<strong>お見合い件数{stats.omiai.toLocaleString()}組・カップル数{stats.couple.toLocaleString()}組</strong>、成婚数は<strong>{stats.seikon}組</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>2026年12月1日から2027年3月15日までは、<strong>20代・30代の登録料が半額の5,000円</strong>になるキャンペーンが案内されています。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">お見合いシステムの料金と登録条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>事業主体は長崎県。公益財団法人ながさき地域政策研究所へ委託して実施</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会員登録料</td><td className={td}>2年間で10,000円（振り込みによる入金）。企業割引制度あり。公式サイトの月額換算は約420円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>更新</td><td className={td}>初回登録時と同じ書類と登録料が必要。更新時期の2か月前から案内メールが届く</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象</td><td className={td}>結婚を希望する20歳以上の独身の方。長崎県外在住の方も利用できる</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>利用の条件</td><td className={td}>インターネットへの接続とメールを使用できること（仮登録や連絡の大部分をインターネット・メールで行うため）。メールアドレスは本人のものを登録する</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>(1) 3か月以内に取得した本籍地の市町村長が発行する独身証明書（戸籍抄本も可）／(2) 写真付きの身分証（運転免許証・パスポート等）／(3) 写真1〜2枚（3か月以内に撮影した本人のみのもの。来所面談では希望によりセンター職員が撮影）／(4) 入会登録料10,000円</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              登録は、ホームページでメールアドレスによる仮登録と詳細情報の入力を行い、センターへの来所面談またはオンライン面談を予約する流れです。来所面談では必要書類を持参し、オンライン面談では面談日の前日までに必要書類をアップロードします。面談を終えると会員登録が完了します。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MATCHING_URL} target="_blank" rel="noopener noreferrer" className="underline">長崎県婚活サポートセンター あいたか「婚活マッチング」</a>・<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="underline">「よくあるご質問」</a>・<a href={SUMMARY_URL} target="_blank" rel="noopener noreferrer" className="underline">「センターについて」</a>（いずれも2026年11月19日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">20代・30代の登録料半額キャンペーン</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>期間</td><td className={td}>2026年12月1日（火）〜2027年3月15日（月）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象</td><td className={td}>20歳代・30歳代の独身の方。新規の方に加え、更新の方も利用できる</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録料</td><td className={td}>通常2年間10,000円が半額の5,000円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>条件</td><td className={td}>キャンペーン期間中に、面談での本人確認などすべての登録手続きを完了（本登録）すること</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              センターは成婚者が600組を超えたことを記念して、このキャンペーンを実施すると案内しています。期間の前日（2026年11月30日）までに本登録を終えた場合は対象外となる可能性があるため、20代・30代の方は登録の時期をセンターへ確認することをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CAMPAIGN_URL} target="_blank" rel="noopener noreferrer" className="underline">長崎県婚活サポートセンター あいたか お知らせ「成婚者600組記念 20代･30代限定 お見合いシステム登録料半額キャンペーン」（2026年11月17日掲載）</a>（2026年11月19日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">お引き合わせまでの流れと申込みのルール</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>仮登録・詳細情報の登録と面談を経て、会員登録を完了する</li>
              <li>自宅のパソコン・スマートフォン（自宅閲覧機能に同意した場合）、またはセンター・県内21市町の窓口で条件を設定してお相手を検索し、お引き合わせを申し込む</li>
              <li>お引き合わせが決まると専用チャットが使えるようになり、原則としてサポーター同席のもとでお引き合わせを行う</li>
              <li>双方の意思を確認して、30日間の「お友だち交際」に進む</li>
              <li>お友だち交際の期間中に双方の意思が確認できたら「真剣交際」に進み、入籍後にサポーターが成婚退会の処理を行う</li>
            </ol>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>ルール</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お引き合わせの申込み</td><td className={td}>1日1回1名まで、最大3名まで。一度申し込むとキャンセルはできない。お友だち交際できる人数（最大3名）に空きがあれば、成立後も検索・申込みができる</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申込みへの回答</td><td className={td}>申込みを受けた方は3日以内に回答する。期限を過ぎると自動キャンセルになる場合がある</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>サポーターの同席</td><td className={td}>原則同席。会員双方にお引き合わせの経験があり、双方が同席を希望しない場合は会員同士のみで行える</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お友だち交際</td><td className={td}>30日間。チャットでの連絡や再度会うことはできるが、氏名・連絡先（LINE等を含む）の交換はできない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>真剣交際</td><td className={td}>どちらかが申し込み、もう一方が承諾して成立。回答期限は4日間。成立するとシステムから本名と連絡先がメールで届く</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              お相手探しと申込みは会員ご自身がシステムで行い、お引き合わせの日程調整や立ち合い、その後のフォローは県が認定したボランティアの「お見合いシステムサポーター」が担います。このほか、相談シートを預けてお相手を探してもらう婚活サポーター「縁結び隊」（相談料・紹介料はなく、交通費やお茶代などの実費は自己負担）や、来所・電話・メール・オンライン（Zoom）での無料の婚活相談も利用できます。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="underline">長崎県婚活サポートセンター あいたか「よくあるご質問」</a>・<a href={MATCHING_URL} target="_blank" rel="noopener noreferrer" className="underline">「婚活マッチング」</a>・<a href={ENMUSUBI_URL} target="_blank" rel="noopener noreferrer" className="underline">「縁結び隊」</a>・<a href={COUNSELING_URL} target="_blank" rel="noopener noreferrer" className="underline">「婚活相談」</a>（いずれも2026年11月19日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">お見合い件数・カップル数・成婚数</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>公式サイトの表示（2026年11月19日確認）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お見合い件数</td><td className={td}>{stats.omiai.toLocaleString()}組（平成29年1月からの累計）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>カップル数</td><td className={td}>{stats.couple.toLocaleString()}組（平成29年1月からの累計。お見合い件数に対する割合は{coupleRate}%で当サイト算出）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>成婚数</td><td className={td}>{stats.seikon}組</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              集計時点の注記は、トップページでは令和8年9月末、「婚活マッチング」のページでは令和8年10月末と表記が分かれています。成婚数の集計期間は明記されていません。会員数や年代別の内訳は公式サイトに掲載されていないため、希望する年代のお相手がどの程度いるかは、面談の際にセンターへ確認することをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TOP_URL} target="_blank" rel="noopener noreferrer" className="underline">長崎県婚活サポートセンター あいたか 公式サイト</a>・<a href={MATCHING_URL} target="_blank" rel="noopener noreferrer" className="underline">「婚活マッチング」</a>（いずれも2026年11月19日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">センターの所在地と、県内21市町の窓口</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>拠点</th><th className={th}>所在地・電話</th><th className={th}>開所時間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>長崎県婚活サポートセンター あいたか</td><td className={td}>長崎市尾上町3番1号 長崎県庁2階／095-893-8860</td><td className={td}>月・火・水・土・日曜 10:30〜18:30、金曜 10:30〜19:30。木曜・祝日・年末年始（12月29日〜1月3日）は閉所</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              公式FAQでは、お見合いシステムはセンターのほか、県内21市町の窓口でも利用できるとしています。アクセスマップに掲載されている窓口は次の{windows.length}か所です。各窓口の所在地・電話番号・来所予約の状況は、公式サイトのアクセスマップでご確認ください。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>市町</th><th className={th}>窓口</th></tr></thead>
                <tbody>
                  {windows.map((w) => (
                    <tr key={w.city} className="border-t border-[#E5DCCF] align-top"><td className={td}>{w.city}</td><td className={td}>{w.name}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              市町独自の登録料補助については、センターの公式サイト上で一覧を確認できなかったため、本ページでは掲載しておりません。お住まいの市町の窓口で、補助の有無と条件をご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SUMMARY_URL} target="_blank" rel="noopener noreferrer" className="underline">長崎県婚活サポートセンター あいたか「センターについて」</a>・<a href={ACCESS_URL} target="_blank" rel="noopener noreferrer" className="underline">「アクセスマップ」</a>・<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="underline">「よくあるご質問」</a>（いずれも2026年11月19日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>登録の有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>長崎県「あいたか」お見合いシステム</td><td className={td}>10,000円（企業割引制度あり。2026年12月1日〜2027年3月15日は20代・30代が5,000円）</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/oita/" className="text-[#A08447] underline">大分県「OITAえんむす部」</Link></td><td className={td}>10,000円（結婚おうえん団の従業員は9,000円）</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/mie/" className="text-[#A08447] underline">三重県「みえむすび」</Link></td><td className={td}>無料（地域サポーター同席は1回1,000円）</td><td className={td}>本登録から2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンター（はばタン会員）</Link></td><td className={td}>5,000円/年</td><td className={td}>1年（年ごとの登録手数料）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用だけを比べると、あいたかのお見合いシステムは民間の結婚相談所よりも大幅に低く抑えられます。一方で、お引き合わせの申込みは最大3名まで、申込みへの回答は3日以内といったルールがあり、お相手探しは会員ご自身がシステムで行います。民間の結婚相談所は、費用がかかる代わりに、担当者がお相手を提案したり、交際中の相談に継続的に応じたりするところが多くあります。長崎県内から利用できるオンライン型の結婚相談所や、福岡市の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。大分県・三重県・兵庫県のセンターの料金は、各センターの公式サイトで2026年11月16日〜18日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/saga/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">さが出会いサポートセンター（佐賀県）</Link>
            <Link href="/knowledge/kagoshima/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">かごしま出会いサポートセンター（鹿児島県）</Link>
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
