import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

export const metadata: Metadata = {
  title: "結婚相談所の解約・返金は法律で上限が決まっている｜24社の公表実態【2026年9月実査】",
  description:
    "結婚相談所は特定商取引法の「特定継続的役務提供」にあたり、8日間のクーリング・オフと、中途解約時に事業者が請求できる違約金の上限（提供開始前3万円／開始後は2万円か契約残額の20%の低いほう）が法律で定められています。当サイトが実査した24社のうち解約・休会条件を公式サイトに書いていたのは9社だけ。法定ルールと各社の公表状況を確認日つきで整理しました。",
  alternates: { canonical: "/knowledge/kaiyaku/" },
};

// 各社の解約・休会に関する「公式サイトに書かれていた内容」。
// 出所は各レビューページの実査記録、または本ページ作成時(2026年9月22日)の公式サイト実査。
// 確認できなかった社は空欄にせず「公式サイトで確認できず」と書く(推測で埋めない)。
type Row = {
  slug: string;
  name: string;
  cooling: string;
  midterm: string;
  rest: string;
  surveyed: string;
  status: "確認" | "未確認";
};

const rows: Row[] = [
  {
    slug: "ibj-members",
    name: "IBJメンバーズ",
    cooling: "契約書面の受領日から8日以内は無条件解除・全額返金",
    midterm: "中途退会可。入会時に支払った活動サポート費のうち未活動分を返金",
    rest: "1ヶ月単位で最長3ヶ月・休会中の月会費は不要",
    surveyed: "2026年1月",
    status: "確認",
  },
  {
    slug: "musbell",
    name: "ムスベル",
    cooling: "通常コースは8日以内、プラスコース（ご家族へのサポート含む）は14日以内で全額返金。書面または電磁的記録で申請",
    midterm: "活動が難しくなった場合、退会申請により契約途中でも解約可",
    rest: "契約期間内であれば休会可",
    surveyed: "2026年9月22日",
    status: "確認",
  },
  {
    slug: "pitto",
    name: "P!っと縁結び",
    cooling: "契約日から8日以内は無条件解除・全額返金",
    midterm: "中途退会時に月会費の日割り返金なし。お見合いキャンセル1万円・当日変更/15分以上の遅刻2万円などの違約金規定あり",
    rest: "月1,100円（税込）で最大3ヶ月・開始希望日の10日前までに申請",
    surveyed: "2026年8月6日",
    status: "確認",
  },
  {
    slug: "folli-partner",
    name: "東京フォリパートナー",
    cooling: "契約書面の受領日を含めて8日以内",
    midterm: "サービス提供前の中途解約は3万円のみ（＝法定上限と同じ額）",
    rest: "公式サイトで確認できず",
    surveyed: "2026年7月31日",
    status: "確認",
  },
  {
    slug: "zwei",
    name: "ツヴァイ",
    cooling: "契約後8日以内の申し出で支払済み料金を全額返金",
    midterm: "公式Q&Aに中途解約時の精算方法の記載を確認できず",
    rest: "最大1ヶ月の活動休止を累計6ヶ月まで利用可",
    surveyed: "2026年9月22日",
    status: "確認",
  },
  {
    slug: "marriage-pro",
    name: "マリッジプロ",
    cooling: "契約から8日以内・全額返金",
    midterm: "中途退会時は契約内容に応じた精算。成婚退会は成婚料220,000円",
    rest: "公式サイトで確認できず",
    surveyed: "2026年8月17日",
    status: "確認",
  },
  {
    slug: "hero-marriage",
    name: "ヒーローマリッジ",
    cooling: "契約書面の受領日から8日以内",
    midterm: "契約は6ヶ月ごとの自動更新。中途解約時の精算条件は書面での確認が必要",
    rest: "公式サイトで確認できず",
    surveyed: "2026年7月",
    status: "確認",
  },
  {
    slug: "bellroad",
    name: "ベルロード縁結びサポート",
    cooling: "8日以内のクーリング・オフを除き返金なしと明記",
    midterm: "中途解約してもプラン費用・初期費用の返金はない。プランは都度自動更新のため、退会は契約満了日の1日前までに連絡が必要",
    rest: "休会はプロフィール非公開化。休会してもプラン費用の減額・期間延長はない",
    surveyed: "2026年8月6日",
    status: "確認",
  },
  {
    slug: "en-konkatsu",
    name: "エン婚活エージェント",
    cooling: "公式サイトで確認できず",
    midterm: "3ヶ月以内にコンタクト（お見合い）が成立しなかった場合、登録料と3ヶ月分の月会費を全額返金する保証制度あり",
    rest: "公式サイトで確認できず",
    surveyed: "2026年7月5日",
    status: "確認",
  },
  { slug: "onet", name: "オーネット", cooling: "公式サイトで確認できず", midterm: "公式サイトで確認できず", rest: "公式サイトで確認できず", surveyed: "2026年9月22日", status: "未確認" },
  { slug: "partner-agent", name: "パートナーエージェント", cooling: "公式サイトで確認できず", midterm: "公式サイトで確認できず", rest: "公式サイトで確認できず", surveyed: "2026年9月22日", status: "未確認" },
  { slug: "sunmarie", name: "サンマリエ", cooling: "公式サイトで確認できず", midterm: "公式サイトで確認できず", rest: "公式サイトで確認できず", surveyed: "2026年9月22日", status: "未確認" },
  { slug: "naco-do", name: "naco-do（ナコード）", cooling: "公式サイトで確認できず", midterm: "中途退会時はプランの残期間に応じた精算（金額の記載は確認できず）", rest: "公式サイトで確認できず", surveyed: "2026年9月22日", status: "未確認" },
  { slug: "ringbell", name: "リングベル", cooling: "公式サイトで確認できず", midterm: "公式サイトで確認できず", rest: "公式サイトで確認できず", surveyed: "2026年6月", status: "未確認" },
  { slug: "smartread", name: "スマリッジ", cooling: "公式サイトで確認できず", midterm: "公式サイトで確認できず", rest: "公式サイトで確認できず", surveyed: "2026年5月", status: "未確認" },
  { slug: "wellsma", name: "ウェルスマ", cooling: "公式サイトで確認できず", midterm: "公式サイトで確認できず", rest: "公式サイトで確認できず", surveyed: "2026年7月31日", status: "未確認" },
  { slug: "fiore", name: "FIORE（フィオーレ）", cooling: "公式サイトで確認できず", midterm: "公式サイトで確認できず", rest: "公式サイトで確認できず", surveyed: "2026年5月", status: "未確認" },
  { slug: "niko-bridal", name: "nikoブライダル", cooling: "公式サイトで確認できず", midterm: "公式サイトで確認できず", rest: "公式サイトで確認できず", surveyed: "2026年7月7日", status: "未確認" },
  { slug: "excellence-aoyama", name: "エクセレンス青山", cooling: "公式サイトで確認できず", midterm: "公式サイトで確認できず", rest: "公式サイトで確認できず", surveyed: "2026年7月31日", status: "未確認" },
  { slug: "bridal-tulip", name: "ブライダルチューリップ", cooling: "公式サイトで確認できず", midterm: "公式サイトで確認できず", rest: "公式サイトで確認できず", surveyed: "2026年7月", status: "未確認" },
  { slug: "code-for-marriage", name: "Code For Marriage", cooling: "公式サイトで確認できず", midterm: "公式サイトで確認できず", rest: "公式サイトで確認できず", surveyed: "2026年8月17日", status: "未確認" },
  { slug: "nagareyama-otakanomori", name: "流山おおたかの森の相談所", cooling: "公式サイトで確認できず", midterm: "公式サイトで確認できず", rest: "公式サイトで確認できず", surveyed: "2026年7月", status: "未確認" },
  { slug: "mars-cafe", name: "マーズカフェ", cooling: "公式サイトで確認できず", midterm: "公式サイトで確認できず", rest: "公式サイトで確認できず", surveyed: "2026年5月", status: "未確認" },
  { slug: "seven", name: "結婚相談所セブン", cooling: "公式サイトで確認できず", midterm: "公式サイトで確認できず", rest: "公式サイトで確認できず", surveyed: "2026年5月", status: "未確認" },
];

const confirmed = rows.filter((r) => r.status === "確認").length;
const unconfirmed = rows.filter((r) => r.status === "未確認").length;
const withRest = rows.filter((r) => r.rest !== "公式サイトで確認できず").length;

const faqs = [
  {
    q: "結婚相談所は途中で解約できますか？違約金はいくらですか？",
    a: "いつでも解約できます。結婚相談所（結婚相手紹介サービス）は、契約期間が2ヶ月を超え、かつ支払額が5万円を超える場合、特定商取引法の「特定継続的役務提供」にあたります。この場合、中途解約は法律上いつでも可能で、事業者が請求できる違約金の上限も政令で決まっています。サービスの提供開始前なら30,000円まで、提供開始後なら「20,000円」か「契約残額の20%に相当する額」のいずれか低いほうまでです（これに加えて、すでに提供を受けたサービスの対価は支払う必要があります）。契約書にこれを超える違約金が書かれていても、超える部分は無効です。",
  },
  {
    q: "クーリング・オフは結婚相談所でも使えますか？",
    a: "使えます。契約書面（法定書面）を受け取った日から数えて8日以内であれば、理由を問わず契約を解除でき、支払った金額は全額返金されます。当サイトが実査した24社のうち、8日間のクーリング・オフを公式サイトに明記していたのは8社でした。なおムスベルは「プラスコース（ご家族へのサポート含む）」について14日以内と公表しており（2026年9月22日確認）、これは法定の8日を上回る自主的な設定です。",
  },
  {
    q: "公式サイトに「中途解約しても返金しません」と書かれていました。従うしかないですか？",
    a: "書かれている内容がそのまま有効とは限りません。特定継続的役務提供にあたる契約では、中途解約の権利そのものを事業者が奪うことはできず、請求できる金額にも法律で上限があります。一方で、すでに提供を受けたサービスの対価や、入会金のうち法令上の上限内の金額については、返金されないことがあります。「一切返金しない」という記載と法律のどちらが優先されるかは個別の契約内容によるため、疑問があるときは消費者ホットライン（188）や最寄りの消費生活センターに相談してください。当サイトは法律の一般的な内容を案内するもので、個別の契約についての法的判断はできません。",
  },
  {
    q: "休会制度がある相談所はどこですか？",
    a: `当サイトが実査した24社のうち、休会（活動の一時停止）の条件を公式サイトで確認できたのは${withRest}社です。IBJメンバーズは1ヶ月単位で最長3ヶ月・休会中の月会費は不要、P!っと縁結びは月1,100円（税込）で最大3ヶ月・開始希望日の10日前までに申請、ツヴァイは最大1ヶ月の活動休止を累計6ヶ月まで、ムスベルは契約期間内であれば休会可と公表しています。ベルロードは休会中もプラン費用の減額・期間延長はないと明記しています。条件は各社で大きく異なるため、繁忙期や転勤の可能性がある方は入会前に必ず確認してください。`,
  },
  {
    q: "入会前に解約条件のどこを確認すればいいですか？",
    a: "①クーリング・オフの起算日（契約日か、契約書面の受領日か） ②中途解約したときの精算方法と金額 ③契約が自動更新かどうかと、更新を止める連絡の期限 ④休会の可否・費用・申請期限 ⑤お見合いのキャンセル料や遅刻の違約金——の5点です。これらは口頭ではなく、契約書面（法定書面）と概要書面に書かれているはずのものです。書面を渡さない、あるいはその場での契約を急がせる事業者は避けてください。",
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
  headline: "結婚相談所の解約・返金は法律で上限が決まっている｜24社の公表実態",
  description:
    "結婚相談所の中途解約・クーリング・オフの法定ルールと、当サイトが実査した24社の公表状況を確認日つきで整理しました。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-09-22",
  dateModified: "2026-09-22",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/kaiyaku/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "解約・返金のルール", item: "https://mu-su-bi-ba.com/knowledge/kaiyaku/" },
  ],
};

export default function KnowledgeKaiyaku() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "解約・返金のルール" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          結婚相談所の解約・返金は法律で上限が決まっている｜24社の公表実態
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年9月22日</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />結論：まず知っておくべき3つのこと
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>結婚相談所は<strong>特定商取引法の「特定継続的役務提供」</strong>にあたります（契約期間2ヶ月超・支払額5万円超の場合）。つまり<strong>中途解約はいつでもでき、違約金の上限も法律で決まっています</strong>。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>上限は<strong>サービス提供開始前なら30,000円</strong>、<strong>開始後なら「20,000円」か「契約残額の20%」の低いほう</strong>（＋提供済みサービスの対価）。契約書にこれを超える違約金が書かれていても、<strong>超える部分は無効</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>それでも各社の公表姿勢には差があります。当サイトが実査した<strong>24社のうち、解約・休会の条件を公式サイトに書いていたのは{confirmed}社だけ</strong>。残り{unconfirmed}社は公式サイト上で確認できませんでした。</span></li>
          </ul>
          <p className="text-xs text-[#2C2C2C]/50 mt-4 leading-relaxed">※本ページは特定商取引法の一般的な内容と、各社公式サイトの記載を整理したものです。個別の契約についての法的な判断はできません。トラブル時は消費者ホットライン<strong>188</strong>（いやや）または最寄りの消費生活センターにご相談ください。</p>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">法律で決まっている解約ルール</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            結婚相談所のサービスは、特定商取引法で「特定継続的役務」の1つ（<strong>結婚相手紹介サービス</strong>）として指定されています。
            対象になるのは<strong>契約期間が2ヶ月を超え、かつ支払う金額が5万円を超える</strong>契約です。
            一般的な結婚相談所の契約はほぼこれに該当します。該当する契約には、次のルールが適用されます。
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
              <thead>
                <tr className="bg-[#FAF7F2] text-left">
                  <th className="px-4 py-3 font-medium text-[#2C2C2C]">場面</th>
                  <th className="px-4 py-3 font-medium text-[#2C2C2C]">できること</th>
                  <th className="px-4 py-3 font-medium text-[#2C2C2C]">事業者が請求できる上限</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#E5DCCF] align-top">
                  <td className="px-4 py-3 font-medium">契約書面の受領日から8日以内</td>
                  <td className="px-4 py-3">クーリング・オフ（無条件で解除）</td>
                  <td className="px-4 py-3"><strong>0円（支払済みは全額返金）</strong>。違約金・損害賠償の請求は不可</td>
                </tr>
                <tr className="border-t border-[#E5DCCF] align-top">
                  <td className="px-4 py-3 font-medium">9日目以降・サービス提供が<strong>始まる前</strong></td>
                  <td className="px-4 py-3">中途解約（理由を問わずいつでも可）</td>
                  <td className="px-4 py-3"><strong>30,000円</strong>まで</td>
                </tr>
                <tr className="border-t border-[#E5DCCF] align-top">
                  <td className="px-4 py-3 font-medium">9日目以降・サービス提供が<strong>始まった後</strong></td>
                  <td className="px-4 py-3">中途解約（理由を問わずいつでも可）</td>
                  <td className="px-4 py-3"><strong>20,000円</strong>または<strong>契約残額の20%に相当する額</strong>の<strong>いずれか低いほう</strong>まで（＋すでに提供を受けたサービスの対価）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/55 leading-relaxed">
            ※金額は特定商取引法施行令が定める「結婚相手紹介サービス」の上限額です。契約書にこれを超える違約金が定められていても、超える部分の定めは無効とされています。
            また、事業者には契約前の<strong>概要書面</strong>と契約時の<strong>契約書面</strong>を交付する義務があり、クーリング・オフの8日間は<strong>契約書面を受け取った日</strong>から数えます（契約日からではありません）。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">24社の解約・休会条件 公式表記一覧（確認日つき）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            当サイトがレビューしている24社について、公式サイト（FAQ・料金ページ・特定商取引法に基づく表記）に書かれていた解約・休会の条件をそのまま記録しました。
            <strong>記載が見つからなかった場合は「公式サイトで確認できず」と書いています</strong>。他サイトの情報や推測で埋めることはしていません。
            「確認できず」は制度がないという意味ではなく、あくまで<strong>公式サイト上で読み取れなかった</strong>という意味です。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full min-w-[880px] text-sm border border-[#E5DCCF]">
              <thead>
                <tr className="bg-[#FAF7F2] text-left">
                  <th className="px-4 py-3 font-medium text-[#2C2C2C]">相談所</th>
                  <th className="px-4 py-3 font-medium text-[#2C2C2C]">クーリング・オフの公式記載</th>
                  <th className="px-4 py-3 font-medium text-[#2C2C2C]">中途解約・返金の公式記載</th>
                  <th className="px-4 py-3 font-medium text-[#2C2C2C]">休会</th>
                  <th className="px-4 py-3 font-medium text-[#2C2C2C]">確認日</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.slug} className="border-t border-[#E5DCCF] align-top">
                    <td className="px-4 py-3 font-medium whitespace-nowrap">
                      <Link href={`/review/${r.slug}/`} className="text-[#A08447] underline">{r.name}</Link>
                    </td>
                    <td className="px-4 py-3 text-[#2C2C2C]/75 text-xs leading-relaxed">{r.cooling}</td>
                    <td className="px-4 py-3 text-[#2C2C2C]/75 text-xs leading-relaxed">{r.midterm}</td>
                    <td className="px-4 py-3 text-[#2C2C2C]/75 text-xs leading-relaxed">{r.rest}</td>
                    <td className="px-4 py-3 text-[#2C2C2C]/55 text-xs whitespace-nowrap">{r.surveyed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/55 leading-relaxed">
            ※各社の公式サイトは随時更新されます。上記は確認日時点の記載です。申し込み前に必ず公式サイトと契約書面でご確認ください。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">一覧にして見えてきたこと</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="border border-[#E5DCCF] rounded-xl p-5">
              <p className="font-medium text-[#2C2C2C] mb-2">① 解約条件を公式サイトに書いている相談所は、24社中{confirmed}社だった</p>
              <p>
                料金は多くの相談所が公開しています。しかし<strong>やめるときのルール</strong>まで書いている相談所は、当サイトの実査では{confirmed}社にとどまりました。
                法律で守られている権利であっても、公式サイトに書いていない＝入会前に読めない、ということです。
                無料相談の場で「途中でやめる場合はどうなりますか」と質問し、口頭ではなく<strong>書面で</strong>答えをもらうことをおすすめします。
              </p>
            </div>
            <div className="border border-[#E5DCCF] rounded-xl p-5">
              <p className="font-medium text-[#2C2C2C] mb-2">② 法定の8日を上回る設定をしている相談所もある</p>
              <p>
                ムスベルは「プラスコース（ご家族へのサポート含む）」について、クーリング・オフの期間を<strong>14日以内</strong>と公表していました（2026年9月22日確認）。
                法律の下限は8日なので、これは自主的に上乗せされた条件です。ご家族が関わる契約ほど検討に時間がかかる、という実態に沿った設定と読めます。
              </p>
            </div>
            <div className="border border-[#E5DCCF] rounded-xl p-5">
              <p className="font-medium text-[#2C2C2C] mb-2">③ 「返金なし」と書かれていても、法律の上限は別に存在する</p>
              <p>
                ベルロード縁結びサポートは「中途解約してもプラン費用・初期費用の返金はない（クーリング・オフ8日以内を除く）」と公式に明記しています（2026年8月6日確認）。
                一方で、特定継続的役務提供にあたる契約では、事業者が請求できる額に法律上の上限があります。
                <strong>公式サイトの記載と法律のどちらが優先されるかは、契約の中身（提供開始前か後か、何にいくら支払ったか）によって変わります</strong>。
                当サイトでは個別の判断はできないため、納得できない請求を受けた場合は消費者ホットライン<strong>188</strong>にご相談ください。
              </p>
            </div>
            <div className="border border-[#E5DCCF] rounded-xl p-5">
              <p className="font-medium text-[#2C2C2C] mb-2">④ 見落としやすいのは「自動更新」と「休会中の費用」</p>
              <p>
                ベルロードはプランが都度自動更新で、退会するには<strong>契約満了日の1日前まで</strong>の連絡が必要と明記しています。ヒーローマリッジは6ヶ月ごとの自動更新です。
                また休会についても、IBJメンバーズは休会中の月会費が不要、P!っと縁結びは月1,100円（税込）が必要、ベルロードは休会してもプラン費用の減額・期間延長はない——と扱いが分かれます。
                「やめ方」と同じくらい「止め方」の条件差が大きい、というのが一覧にして分かったことです。
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">入会前に書面で確認する5項目</h2>
          <ol className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">1.</span><span><strong>クーリング・オフの起算日</strong>——「契約日から」ではなく「契約書面を受け取った日から」8日間です。書面をいつ受け取ったか記録しておきましょう。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">2.</span><span><strong>中途解約したときの精算方法</strong>——提供開始前か後かで上限が変わります。「何をもって提供開始とするか」も確認してください。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">3.</span><span><strong>自動更新の有無と、更新を止める連絡の期限</strong>——満了日の直前が期限になっている場合があります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">4.</span><span><strong>休会の可否・費用・申請期限</strong>——無料か有料か、何ヶ月前までに申請が必要かは相談所ごとに違います。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">5.</span><span><strong>お見合いのキャンセル料・遅刻の違約金</strong>——月会費とは別に発生します。P!っと縁結びはキャンセル1万円・当日変更や15分以上の遅刻2万円と公表しています。</span></li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">あわせて読みたい</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/compare/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">料金比較（確認日つき）を見る</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">料金相場・総額の目安</Link>
            <Link href="/knowledge/seikon-ritsu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">成婚率の読み方（24社実査）</Link>
            <Link href="/knowledge/how-to-choose/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">タイプ別の選び方</Link>
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

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">出典</h2>
          <ul className="space-y-2 text-xs text-[#2C2C2C]/65 leading-relaxed">
            <li>・特定商取引法（特定継続的役務提供）および同法施行令の定める指定役務・上限額——消費者庁「特定商取引法ガイド」</li>
            <li>・各社の解約・休会条件——各社公式サイト（FAQ・料金ページ・特定商取引法に基づく表記）。確認日は表に明記</li>
            <li>・消費者ホットライン 188（いやや）——消費者庁</li>
          </ul>
        </section>

        <AuthorBox />
      </article>
    </>
  );
}
