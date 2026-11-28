import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-28 確認）。
// ・上越市結婚活動支援補助金（ハートマッチにいがた登録料の2分の1を助成・通常11,000円なら5,500円・対象要件・登録前の申請・申請期限令和9年3月5日・実績報告期限令和9年3月19日・電子申請・予算到達で締切・令和8年4月から20代30代の登録料無料・問合せ先 総合政策課企画政策係 025-520-5624・掲載日2026年4月1日）：上越市「新潟県婚活マッチングシステム「ハートマッチにいがた」入会登録料の助成」
// ・新潟県結婚支援パスポート（マリパス）の対象（県内在住の2年以内に結婚予定のカップル・結婚後2年以内の新婚夫婦・ハートマッチにいがた会員）：上越市「新潟県結婚支援パスポート（mari＊pass「マリパス」）」（2026年7月10日更新）
// ・こむすびインターン（令和8年度に県が開始・18〜29歳の未婚者で県内在住または在住希望）：上越市「こむすびインターンのご紹介」（2026年6月5日更新）
// ・市の結婚・出産・子育て関連ページ一覧（市の結婚関連の掲載は上記3件と婚姻届関係）：上越市「結婚」分類ページ・「相談」分類ページ・総合政策課ページ一覧
// ・上越市オリジナル婚姻届（桜モチーフ・複写式・記念台紙・配布場所）：上越市「上越市オリジナル婚姻届・出生届」（2026年6月9日更新）
// ・婚姻件数・離婚件数（令和2〜6年、資料 人口動態調査）、合計特殊出生率（令和2〜6年、資料 県福祉保健部「人口動態統計の概況」）：上越市「上越市統計要覧 令和8年版」2章 人口・世帯（PDF）
// ・令和元年度市民アンケートで未婚者の約83%が結婚したいと回答、結婚相談員・エンゼルサポートセンター・婚活バンク・婚活イベント・祝い金制度に対する市の取組（令和4年10月現在）：上越市「令和4年12月16日開催 人口減少社会対策特別委員会資料」（PDF）
// ・住宅リフォーム促進事業（子育て・若者夫婦世帯支援枠：若者夫婦世帯の定義・補助率50%上限40万円・予算額2,000万円・受付終了）：上越市「令和8年度上越市住宅リフォーム促進事業（子育て・若者夫婦世帯支援枠）」（2026年11月10日更新）
// ・結婚新生活支援の令和8年度実施26市町村（上越市は掲載なし、妙高市・糸魚川市は掲載あり）、対象世帯・上限額：新潟県「令和8年度結婚新生活支援連携推進補助金について」（2026年6月10日更新）
// ・上越サポートセンターの所在地・開設頻度：にいがた出会いサポートセンター「アクセス」
// ・上越サポートセンターの2026年12月の予約枠（5日・19日・26日）、予約時間帯（10:00〜16:30・1人45分）：同センター「来所予約状況」
// ・12月臨時センターのお知らせ（上越会場は直江津学びの交流館1階・「12月6日（土）20日（土）27日（土）」の記載）：同センター お知らせ（2026年11月2日）
// ・成婚295組（590名・2026年11月25日現在）・登録できる方：同センター トップページ
// ・入会登録料（30歳以上11,000円等）・登録期間2年・新潟及び長岡以外のセンターで登録する場合は原本とコピーを持参・お引合せ費用2,100円：同センター「利用規約」
// ・新潟市のハートマッチにいがた登録料補助5,000円（比較用）：新潟市「ハートマッチにいがた登録料補助」
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const CITY_HOJO_URL = "https://www.city.joetsu.niigata.jp/soshiki/kikaku/heartmatching.html";
const NIIGATA_CITY_HOJO_URL = "https://www.city.niigata.lg.jp/kosodate/deai-kekkon/deai/hearthojyo.html";
const CITY_KEKKON_URL = "https://www.city.joetsu.niigata.jp/life/1/2/5/";
const CITY_MARIPASS_URL = "https://www.city.joetsu.niigata.jp/soshiki/kikaku/jyouetusi-maripasu.html";
const CITY_KOMUSUBI_URL = "https://www.city.joetsu.niigata.jp/soshiki/kikaku/jyouetusi-komusubiinta-n.html";
const CITY_TODOKE_URL = "https://www.city.joetsu.niigata.jp/soshiki/shiminka/original-notification.html";
const CITY_YORAN_URL = "https://www.city.joetsu.niigata.jp/soshiki/kikaku/toukei-youran-r8.html";
const CITY_YORAN_CH2_PDF = "https://www.city.joetsu.niigata.jp/uploaded/attachment/282135.pdf";
const CITY_COUNCIL_PDF = "https://www.city.joetsu.niigata.jp/uploaded/attachment/228576.pdf";
const CITY_REFORM_URL = "https://www.city.joetsu.niigata.jp/soshiki/kenjuu/reform08-kosodate.html";
const PREF_SHINSEIKATSU_URL = "https://www.pref.niigata.lg.jp/sec/kodomokatei/shinseikatu26.html";
const MSC_TOP_URL = "https://www.msc-niigata.jp/";
const MSC_ACCESS_URL = "https://www.msc-niigata.jp/matching/access/";
const MSC_TERMS_URL = "https://www.msc-niigata.jp/matching/terms/";
const MSC_RESERVE_URL = "https://www.msc-niigata.jp/sp/matching/user/raisyo_date.php";
const MSC_DEC_URL =
  "https://www.msc-niigata.jp/archive/2026/11/02/%e4%bb%a4%e5%92%8c%ef%bc%98%e5%b9%b4%ef%bc%91%ef%bc%92%e6%9c%88%e8%87%a8%e6%99%82%e3%82%bb%e3%83%b3%e3%82%bf%e3%83%bc%e9%96%8b%e8%a8%ad%e3%81%ae%e3%81%94%e6%a1%88%e5%86%85/";

// 上越市統計要覧 令和8年版 2章「婚姻・離婚件数」（資料 人口動態調査）から転記
const marriages = [
  { year: "令和2年（2020年）", marriage: 687, divorce: 218 },
  { year: "令和3年（2021年）", marriage: 627, divorce: 210 },
  { year: "令和4年（2022年）", marriage: 628, divorce: 211 },
  { year: "令和5年（2023年）", marriage: 587, divorce: 236 },
  { year: "令和6年（2024年）", marriage: 599, divorce: 248 },
];

// 同 2章「合計特殊出生率」（資料 県福祉保健部「人口動態統計の概況」）から転記
const tfr = [
  { area: "上越市", v: ["1.36", "1.32", "1.38", "1.29", "1.25"] },
  { area: "新潟県", v: ["1.33", "1.27", "1.32", "1.23", "1.14"] },
  { area: "全国", v: ["1.33", "1.26", "1.30", "1.20", "1.15"] },
];

export const metadata: Metadata = {
  title: "上越市で結婚相談所を探す方へ｜ハートマッチにいがた登録料の半額補助・上越サポートセンターの12月の開設日と民間との費用比較",
  description:
    "上越市の公的な結婚支援は、県の「ハートマッチにいがた」の登録料を市が半額補助する制度が中心です。直江津学びの交流館にある上越サポートセンターの12月の開設日、市の婚姻件数、結婚新生活支援の実施状況、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/joetsu/" },
};

const faqs = [
  {
    q: "上越市に市営の結婚相談所や結婚相談員はありますか？",
    a: "2026年11月28日時点で、上越市の公式サイトの「結婚」「相談」の分類ページと総合政策課のページ一覧を確認しましたが、市が運営する結婚相談所や結婚相談員の窓口は確認できませんでした。市の公式サイトに掲載されている結婚支援は、新潟県の婚活マッチングシステム「ハートマッチにいがた」の登録料助成、県の結婚支援パスポート（マリパス）、県の「こむすびインターン」の案内です。令和4年の市議会委員会資料では、結婚相談員などの支援体制は、市として設置する必要性や効果を引き続き研究するとされていました。",
  },
  {
    q: "上越市のハートマッチにいがた登録料の補助はいくらですか？",
    a: "上越市に住民登録している20歳以上の独身の方などを対象に、ハートマッチにいがたの登録料の2分の1を助成します。通常の登録料11,000円の場合は5,500円です。初回登録・更新登録のどちらも対象ですが、過去にこの補助金を受けた方は対象外です。登録・更新の前に市へ申請する必要があり、申請期限は令和9年3月5日（金曜日）、実績報告の期限は令和9年3月19日（金曜日）です。なお、令和8年4月から20代・30代の登録料は無料になっています。",
  },
  {
    q: "上越サポートセンターはいつ開いていますか？",
    a: "上越サポートセンターは上越市中央1丁目3番18号の「直江津学びの交流館」内にあり、開設は毎月3回程度です。2026年11月28日時点の来所予約状況では、12月の予約枠は5日・19日・26日（いずれも土曜日）の10時〜16時30分（1人45分）に表示されています。一方、同センターのお知らせ（11月2日）には「12月6日（土）20日（土）27日（土）」と記載されており、日付と曜日が一致していません。来所の前に、予約画面または電話（025-384-4151）で日程をご確認ください。",
  },
  {
    q: "上越市で結婚新生活支援（新居の家賃や引越費用の補助）は受けられますか？",
    a: "新潟県が公表している令和8年度の結婚新生活支援の実施市町村（26市町村）に、上越市は掲載されていません。近隣では妙高市と糸魚川市が掲載されています。上越市には、本人または配偶者のいずれかが39歳以下の若者夫婦世帯などを対象とする住宅リフォーム補助（補助率50%・上限40万円）がありましたが、令和8年度分の受付は終了しています。",
  },
  {
    q: "上越サポートセンターで登録するときの注意点はありますか？",
    a: "ハートマッチにいがたの利用規約では、新潟と長岡のセンター以外で登録する場合は、必要書類の原本に加えてコピーも持参するよう定められています。上越サポートセンターで来所登録する場合は、原本とコピーの両方を用意してください。お引合せには1人2,100円（茶菓代1,100円・サポーター交通通信費1,000円）がかかります。",
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
  headline: "上越市で結婚相談所を探す方へ：ハートマッチにいがたの登録料補助、上越サポートセンター、市の婚姻件数と民間の結婚相談所との比較",
  description:
    "上越市結婚活動支援補助金（ハートマッチにいがた登録料の2分の1助成）、直江津学びの交流館の上越サポートセンターの開設日、上越市の婚姻件数の推移、結婚新生活支援の実施状況、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-28",
  dateModified: "2026-11-28",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/joetsu/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "上越市の結婚相談所と婚活支援", item: "https://mu-su-bi-ba.com/knowledge/joetsu/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;
const pill = "text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]";

export default function KnowledgeJoetsu() {
  const first = marriages[0];
  const last = marriages[marriages.length - 1];
  const diff = first.marriage - last.marriage;
  const diffPct = ((diff / first.marriage) * 100).toFixed(1);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "上越市の結婚相談所と婚活支援" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          上越市で結婚相談所を探す方へ：ハートマッチにいがたの登録料補助、上越サポートセンター、市の婚姻件数と民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月28日（上越市の結婚支援・統計・委員会資料、新潟県の結婚新生活支援、にいがた出会いサポートセンターの開設日と規約は、同日に上越市・新潟県・同センターの公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />上越市の公的な結婚支援は、県の「ハートマッチにいがた」と市の登録料補助が中心です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>上越市は、新潟県の1対1の婚活マッチングシステム「ハートマッチにいがた」の<strong>登録料の2分の1</strong>を助成しています（通常11,000円なら<strong>5,500円</strong>）。<strong>登録・更新の前に市へ申請</strong>する必要があり、申請期限は令和9年3月5日です。20代・30代は令和8年4月から登録料が無料です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>市内の窓口は、直江津学びの交流館内の<strong>上越サポートセンター</strong>（毎月3回程度）です。2026年12月の予約枠は<strong>5日・19日・26日（土曜日）</strong>に表示されています。市が運営する結婚相談所や結婚相談員は、2026年11月28日時点で確認できませんでした。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>上越市の婚姻件数は令和2年の{first.marriage}件から令和6年の{last.marriage}件へ、{diff}件（{diffPct}%）減っています。<strong>結婚新生活支援</strong>は、新潟県の令和8年度実施市町村一覧に<strong>上越市の掲載がありません</strong>。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>担当者からお相手の紹介や交際の助言を受けたい場合は、民間の結婚相談所が選択肢になります。<Link href="/knowledge/cost/" className="underline">当サイトが料金を確認した22社の1年総額は125,400円〜709,500円（中央値399,200円）</Link>です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">上越市結婚活動支援補助金（ハートマッチにいがたの登録料助成）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              上越市総合政策課は、結婚を希望する方の出会いを支援するため、新潟県が運営する婚活マッチングシステム「ハートマッチにいがた」の入会登録料を助成しています。制度の内容は次のとおりです（2026年4月1日更新の市公式ページより）。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象者</td><td className={td}>20歳以上で現に婚姻をしていない方、上越市に住民登録している方、市税を滞納していない方、過去にこの補助金の交付を受けていない方（すべてに該当すること）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>補助額</td><td className={td}>登録料の2分の1（通常の登録料11,000円の場合は5,500円）。初回登録・更新登録を問いません。割引後の登録料の場合は割引後の額の2分の1</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申請の時期</td><td className={td}>ハートマッチにいがたの登録・更新の前に申請し、交付決定通知書を受け取ってから本登録・更新をします</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>期限</td><td className={td}>申請は令和9年3月5日（金曜日）まで、実績報告は令和9年3月19日（金曜日）まで。予算に達した場合は受付を締め切ります</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申請方法</td><td className={td}>上越市電子申請システム、または窓口・郵送（本人確認書類の写しなど）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>問合せ先</td><td className={td}>総合政策課 企画政策係（上越市木田一丁目1番3号 木田庁舎3階）電話025-520-5624</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              市のページには「令和8年4月より20代・30代の入会登録料が無料となりました」と注記されています。このため、この補助で実際に負担が軽くなるのは、主に登録料がかかる40歳以上の方と考えられます。40歳以上の方が2年間の通常登録（11,000円）をする場合、補助を受けた後の自己負担は5,500円です。補助金は登録料を支払った後、実績報告と請求書の提出を経て入金されるため、いったん全額を支払う必要があります。
            </p>
            <p>
              新潟市も同じ登録料に対して5,000円の定額補助を設けており、上越市は「2分の1」という定率の補助である点が異なります。県の制度そのもの（登録条件・活動のルール）は、当サイトの<Link href="/knowledge/niigata/" className="text-[#A08447] underline">新潟市の婚活（ハートマッチにいがた）</Link>で整理しています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_HOJO_URL} {...ext}>上越市「新潟県婚活マッチングシステム「ハートマッチにいがた」入会登録料の助成」</a>・<a href={NIIGATA_CITY_HOJO_URL} {...ext}>新潟市「ハートマッチにいがた登録料補助」</a>（いずれも2026年11月28日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">上越サポートセンター（直江津学びの交流館）の場所と開設日</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              ハートマッチにいがたを運営するにいがた出会いサポートセンターは、新潟市・長岡市のセンターのほか、上越市に「上越サポートセンター」を設けています。登録の面談やプロフィールの閲覧は、予約制で来所して行います。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>所在地</td><td className={td}>〒942-0001 上越市中央1丁目3番18号「直江津学びの交流館」内（12月のお知らせでは1階と案内）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>開設頻度</td><td className={td}>毎月3回程度</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>2026年12月の予約枠</td><td className={td}>12月5日・19日・26日（いずれも土曜日）。予約時間帯は10:00〜16:30の30分刻みで、1人45分（2026年11月28日時点の来所予約状況）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>電話（センター共通）</td><td className={td}>025-384-4151</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              センターが11月2日に掲載した「令和８年１２月臨時センター開設のご案内」では、上越会場の日程が「１２月６日（土）２０日（土）２７日（土）」と記載されています。2026年12月6日・20日・27日はいずれも日曜日で、来所予約画面の表示（5日・19日・26日の土曜日）と一致していません。当サイトでは予約画面の表示を掲載していますが、来所の前に予約画面または電話で日程をご確認ください。
            </p>
            <p>
              利用規約では、新潟と長岡のセンター以外で登録する場合、必要書類の原本に加えてコピーも持参するよう定められています。上越サポートセンターで登録する場合は、コピーの用意が必要です。お引合せの費用は1人2,100円（茶菓代1,100円・サポーター交通通信費1,000円）です。県全体の会員同士の成婚は295組（590名）と表示されています（2026年11月25日現在）。上越サポートセンターの開設時期と、上越市在住の会員数は公式サイトで確認できませんでした（2026年11月28日時点）。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MSC_ACCESS_URL} {...ext}>にいがた出会いサポートセンター「アクセス」</a>・<a href={MSC_RESERVE_URL} {...ext}>「来所予約状況」</a>・<a href={MSC_DEC_URL} {...ext}>お知らせ「令和８年１２月臨時センター開設のご案内」（2026年11月2日）</a>・<a href={MSC_TERMS_URL} {...ext}>「利用規約」</a>・<a href={MSC_TOP_URL} {...ext}>トップページ</a>（いずれも2026年11月28日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">上越市の婚姻件数と出生率の推移</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              上越市統計要覧（令和8年版）に掲載されている婚姻・離婚件数は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年</th><th className={th}>婚姻件数</th><th className={th}>離婚件数</th></tr></thead>
                <tbody>
                  {marriages.map((m) => (
                    <tr key={m.year} className="border-t border-[#E5DCCF]"><td className={td}>{m.year}</td><td className={td}>{m.marriage}件</td><td className={td}>{m.divorce}件</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              婚姻件数は、令和2年の{first.marriage}件から令和6年の{last.marriage}件へ{diff}件減りました（当サイトの計算で{diffPct}%減）。令和5年の587件から令和6年は599件にやや増えていますが、5年間を通しては減少傾向です。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>合計特殊出生率</th><th className={th}>令和2年</th><th className={th}>令和3年</th><th className={th}>令和4年</th><th className={th}>令和5年</th><th className={th}>令和6年</th></tr></thead>
                <tbody>
                  {tfr.map((r) => (
                    <tr key={r.area} className="border-t border-[#E5DCCF]"><td className={td}>{r.area}</td>{r.v.map((v, i) => (<td key={i} className={td}>{v}</td>))}</tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              上越市の合計特殊出生率は5年間とも新潟県を上回っていますが、令和4年の1.38から令和6年の1.25に下がっています。
            </p>
            <p>
              なお、上越市は婚姻届を出す方に向けて、市の木である桜をモチーフにした複写式の「上越市オリジナル婚姻届」（記入例・提出用届書・記念台紙の一組）を市民課・各総合事務所・南北出張所で配布しています。上越市以外の市区町村にも提出できます。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_YORAN_CH2_PDF} {...ext}>上越市「上越市統計要覧 令和8年版」2章 人口・世帯（PDF）</a>（婚姻・離婚件数の資料は人口動態調査、合計特殊出生率の資料は県福祉保健部「人口動態統計の概況」）・<a href={CITY_YORAN_URL} {...ext}>「上越市統計要覧 令和8年版」</a>・<a href={CITY_TODOKE_URL} {...ext}>上越市「上越市オリジナル婚姻届・出生届」</a>（いずれも2026年11月28日確認）。表の値は統計要覧から当サイトで転記したものです。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">市の結婚支援の方針：結婚相談員・婚活イベントについて</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              上越市議会の人口減少社会対策特別委員会（令和4年12月16日開催）の資料には、市議会からの提言に対する市の取組が、令和4年10月現在の内容として掲載されています。結婚支援に関する主な記載は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>提言</th><th className={th}>市の取組（令和4年10月現在）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>結婚相談員／（仮称）エンゼルサポートセンター</td><td className={td}>県が「地域の世話焼き人制度」を令和5年度から本格化させることを踏まえ、市として設置する必要性や効果を引き続き研究する</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>婚活バンク（市による結婚希望者の情報管理）</td><td className={td}>県のハートマッチにいがたや民間の取組があるため、設置は考えていない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>婚活イベントの推進</td><td className={td}>民間団体等の取組を支援する「地方創生推進事業補助金」で「婚活」や「自然な出逢いの場の創出」などの事業を支援した実績があり、引き続き支援する</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>結婚・子育て祝い金制度</td><td className={td}>提案内容による試算では毎年度12億円を超える歳出となるため、現時点で創設する考えはない</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              同資料では、令和元年度の「若者・子育て世代の市民アンケート」で未婚者の約83%が結婚したいと回答したことから、市は潜在的な結婚希望者が多いと認識していると説明しています。また、同アンケートで結婚していない理由として「結婚後の生活資金が足りないと思うから」（23.1%）、「結婚資金が足りないから」（16.0%）が挙げられていたことも紹介されています。
            </p>
            <p>
              2026年11月28日時点で、上越市の公式サイトでは、市が主催する婚活イベントの案内は確認できませんでした。市の公式サイトに掲載されている結婚支援は、上記の登録料助成のほか、県の結婚支援パスポート「マリパス」（県内在住の2年以内に結婚予定のカップル、結婚後2年以内の新婚夫婦、ハートマッチにいがたの会員が対象）と、令和8年度に県が始めた「こむすびインターン」（18〜29歳の未婚者が子育て中の家庭を訪問する体験型プログラム）の案内です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_COUNCIL_PDF} {...ext}>上越市「令和4年12月16日開催 人口減少社会対策特別委員会資料」（PDF）</a>・<a href={CITY_KEKKON_URL} {...ext}>上越市「結婚」</a>・<a href={CITY_MARIPASS_URL} {...ext}>上越市「新潟県結婚支援パスポート（mari＊pass「マリパス」）」</a>・<a href={CITY_KOMUSUBI_URL} {...ext}>上越市「こむすびインターンのご紹介」</a>（いずれも2026年11月28日確認）。委員会資料の内容は令和4年10月時点のもので、その後に方針が変わっている可能性があります。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚後の新生活の支援：結婚新生活支援と住宅リフォーム補助</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              新潟県は、新婚世帯の住宅取得費・リフォーム費・家賃・引越費用を支援する市町村に補助しています（県の基準では、世帯所得500万円未満で夫婦ともに婚姻日の年齢が39歳以下の世帯が対象、上限は夫婦ともに29歳以下の世帯60万円・それ以外30万円）。県が公表している令和8年度の実施市町村は26市町村で、上越市は掲載されていません。上越地域では、妙高市と糸魚川市が掲載されています。
            </p>
            <p>
              上越市には、子育て世帯・若者夫婦世帯を対象とした「住宅リフォーム促進事業（子育て・若者夫婦世帯支援枠）」があります。若者夫婦世帯は「令和8年4月1日時点において、本人またはその配偶者のいずれかが39歳以下である世帯」と定義され、補助額は対象工事費の50%（上限40万円）、予算額は2,000万円でした。令和8年度分の受付は終了しています（2026年11月10日更新）。次年度の実施の有無は、市の建築住宅課にご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_SHINSEIKATSU_URL} {...ext}>新潟県「令和8年度結婚新生活支援連携推進補助金について」（2026年6月10日更新）</a>・<a href={CITY_REFORM_URL} {...ext}>上越市「令和8年度上越市住宅リフォーム促進事業（子育て・若者夫婦世帯支援枠）」</a>（いずれも2026年11月28日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な支援と民間の結婚相談所の費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>費用</th><th className={th}>お相手の探し方</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>ハートマッチにいがた（20〜39歳）</td><td className={td}>登録料無料＋お引合せ1回2,100円</td><td className={td}>会員がシステムで検索し、サポーター立会いでお引合せ</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>ハートマッチにいがた（40歳以上・上越市の補助を利用）</td><td className={td}>2年登録11,000円のうち自己負担5,500円＋お引合せ1回2,100円</td><td className={td}>同上</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による（担当者による紹介・助言を行う会社が多い）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用だけを比べると、上越市の補助を利用したハートマッチにいがたは、民間の結婚相談所よりも大幅に低く抑えられます。一方で、上越サポートセンターの開設は毎月3回程度で、お相手探しは会員ご自身がシステムで行う仕組みです。担当者からお相手の提案を継続して受けたい方や、交際中の相談をしたい方は、民間の結婚相談所も比べて検討するのが目安です。上越市から利用する場合は、自宅から活動できるオンライン型の結婚相談所や、長野県・富山県など近隣の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。公的な支援の費用は、上越市とにいがた出会いサポートセンターの公式サイトで2026年11月28日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/niigata/" className={pill}>新潟市の婚活（ハートマッチにいがた）</Link>
            <Link href="/knowledge/nagano/" className={pill}>長野県の結婚支援（NAGANO ai MATCH）</Link>
            <Link href="/knowledge/toyama/" className={pill}>富山県の結婚支援（とやまマリッジサポートセンター）</Link>
            <Link href="/knowledge/kasai/" className={pill}>加西市の婚活支援</Link>
            <Link href="/knowledge/ogaki/" className={pill}>大垣市の婚活支援</Link>
            <Link href="/knowledge/tomakomai/" className={pill}>苫小牧市の婚活支援</Link>
            <Link href="/knowledge/jiyugaoka/" className={pill}>自由が丘の結婚相談所</Link>
            <Link href="/knowledge/cost/" className={pill}>結婚相談所の料金</Link>
            <Link href="/compare/" className={pill}>24社の料金比較</Link>
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
