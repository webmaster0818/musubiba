import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-25 確認）。
// ・OITAえんむす部の登録料助成（助成要件・過去に助成を受けた方は対象外・自己負担3,000円・市が7,000円をセンターへ支払う・対象期間・担当課と電話）：中津市「OITAえんむす部出会いサポートセンター登録料助成について」（2026年4月1日更新）
// ・婚活イベント情報のメール通知（登録無料・個人／法人）、市共催イベントの目的、結婚祝い金（5万円相当の商品券・平成26年10月以降の市主催・共催イベント）：中津市「あなたの春を応援します！ー中津市出会いの場づくり事業―」（2026年4月2日更新）
// ・婚活イベント事業の事業費800,000円（上限20万円×4団体の負担金）・事業開始年度（平成28年度）・R7実績（定員に対する参加者106.9%・満足度78.7%・カップル8組）とR8目標：中津市「中津市出会いの場づくり事業（婚活イベント）実施計画書」（PDF、地域少子化対策重点推進交付金）
// ・登録料助成の事業費196,000円（7,000円×新規25人＋更新3人）・7割補助（1回限り）・事業開始年度（令和5年度）・申請人数16人（R6）・目標28人（R8）・お引き合わせ成立者数76人（R8.1月時点）：中津市「中津市出会いの場づくり事業（中津市出会い応援助成金）実施計画書」（PDF）
// ・中津市の婚姻件数297件・婚姻率3.8（令和6年）・合計特殊出生率1.51（令和6年度）：上記の実施計画書（参考指標）
// ・令和8年度に公表された交付金の実施計画は3事業（婚活イベント・登録料助成・パパママクラブ）：中津市「地域少子化対策重点推進事業の計画を公表します」（2026年4月15日更新）
// ・結婚新生活支援事業：2026-11-25 時点で中津市公式サイトに令和8年度の案内を確認できず（本文に記載）
// ・OITAえんむす部の登録料10,000円（2年間有効）・対象年齢・オンライン登録・所在地（大分市高砂町）：OITAえんむす部「よくある質問」「センター紹介」
// ・助成の担当係（総合政策課 政策推進・人口減少対策係）：OITAえんむす部「会員向け費用補助のご案内」
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const CITY = "https://www.city-nakatsu.jp/doc";
const JOSEI_URL = `${CITY}/2023032900078/`;
const DEAI_URL = `${CITY}/2012040200089/`;
const PLAN_INDEX_URL = `${CITY}/2021041300032/`;
const PLAN_EVENT_PDF = `${CITY}/2021041300032/file_contents/file_20264105142741_1.pdf`;
const PLAN_JOSEI_PDF = `${CITY}/2021041300032/file_contents/file_20264105143045_1.pdf`;
const ENMUSUBU_FAQ_URL = "https://oita-enmusubu.com/question/";
const ENMUSUBU_CENTER_URL = "https://oita-enmusubu.com/center/";
const ENMUSUBU_SUBSIDY_URL = "https://oita-enmusubu.com/subsidy/";

const eventPlan = { budget: 800000, perGroup: 200000, groups: 4, rate: 106.9, satisfaction: 78.7, couplesR7: 8, couplesTarget: 15 };
const joseiPlan = { budget: 196000, perPerson: 7000, newcomers: 25, renewals: 3, appliedR6: 16, target: 28 };

export const metadata: Metadata = {
  title: "中津市の婚活支援｜OITAえんむす部の登録料1万円が市の助成で3,000円に、市共催の婚活イベントと結婚祝い金（5万円相当の商品券）",
  description:
    "中津市は県のOITAえんむす部の入会登録料・更新料10,000円のうち7,000円を助成しており、自己負担は3,000円です（1人1回）。市が共催する婚活イベントの仕組みと実績、イベント情報メール、結婚祝い金、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/nakatsu/" },
};

const faqs = [
  {
    q: "中津市に市営の結婚相談所はありますか？",
    a: "2026年11月25日時点で、中津市の公式サイトで確認できた結婚支援は、OITAえんむす部出会いサポートセンターの登録料助成、市内の企業・団体と共催する婚活イベント、市の主催・共催イベントで出会って結婚した方への結婚祝い金の3つです。市が運営する1対1のお見合い事業（市営の結婚相談所）の案内は確認できませんでした。1対1のお見合いを希望する場合は、市の助成を使って県のOITAえんむす部に登録する形になります。",
  },
  {
    q: "OITAえんむす部の登録料助成は誰が対象で、いくらになりますか？",
    a: "中津市内に住所があり住んでいる方で、2026年4月1日以降にOITAえんむす部出会いサポートセンターに新しく入会する方、または登録を更新する方が対象です。通常10,000円の入会登録料または更新料が3,000円になり、差額の7,000円は市が本人に代わってセンターへ支払います。助成の対象期間は2026年4月1日〜2027年3月31日です。問い合わせ先は総合政策課（0979-62-9031）です。",
  },
  {
    q: "更新のたびに助成を受けられますか？",
    a: "受けられません。過去にこの助成を受けたことがある方（令和7年度までの「中津市出会い応援助成金」を含む）は対象外です。市の実施計画書でも「1回限り」とされています。新規入会で助成を受けた方が2年後に更新する場合、更新料10,000円は自己負担になります。",
  },
  {
    q: "登録料助成に年齢制限はありますか？",
    a: "中津市の助成要件に年齢の条件は書かれていません。ただし、OITAえんむす部の対象は「20歳以上で概ね40代までの結婚を希望している方」とされています。50代以上の方は、入会できるかを事前にセンターへ確認してください。",
  },
  {
    q: "中津市の婚活イベントはどこで探せばよいですか？",
    a: "市が共催する婚活イベントがあるときは、登録したメールアドレスに案内が届きます（登録無料）。中津市の公式サイト「あなたの春を応援します！ー中津市出会いの場づくり事業―」に、個人用と法人用（従業員の婚活サポートなど）の登録フォームがあります。イベントへの参加は別に申し込みが必要で、参加費用はイベントごとに異なります。",
  },
  {
    q: "中津市に結婚新生活支援（新婚世帯への住居費補助）はありますか？",
    a: "2026年11月25日時点で、中津市の公式サイトに令和8年度の結婚新生活支援事業の案内は確認できませんでした。市が2026年4月に公表した地域少子化対策重点推進交付金の実施計画（3事業）にも含まれていません。民間の情報サイトには過去の制度が掲載されていることがあるため、利用を考えている方は市役所（代表0979-22-1111）に確認してください。",
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
  headline: "中津市の婚活支援：OITAえんむす部の登録料助成、市が共催する婚活イベント、結婚祝い金と民間の結婚相談所との比較",
  description:
    "中津市のOITAえんむす部登録料助成（自己負担3,000円）、市が共催する婚活イベントの仕組みと実績、結婚祝い金、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-25",
  dateModified: "2026-11-25",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/nakatsu/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "中津市の婚活（えんむす部登録料助成）", item: "https://mu-su-bi-ba.com/knowledge/nakatsu/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeNakatsu() {
  const perYear = (3000 / 2).toLocaleString();
  const joseiCheck = joseiPlan.perPerson * (joseiPlan.newcomers + joseiPlan.renewals);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "中津市の婚活（えんむす部登録料助成）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          中津市の婚活支援：OITAえんむす部の登録料助成、市が共催する婚活イベント、結婚祝い金と民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月25日（市の事業は同日に中津市公式サイトと市の実施計画書、県のセンターはOITAえんむす部 出会いサポートセンター公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />中津市の婚活支援は「県センターの登録料助成」「市共催の婚活イベント」「結婚祝い金」の3本立てです
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>中津市は、大分県の<strong>「OITAえんむす部 出会いサポートセンター」</strong>の入会登録料・更新料（通常10,000円）のうち<strong>7,000円を助成</strong>しています。中津市民の自己負担は<strong>3,000円</strong>で、助成は<strong>1人1回限り</strong>です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>センターの登録は2年間有効のため、助成を使った場合の負担は<strong>1年あたり{perYear}円</strong>です（当サイト算出）。市の助成要件に年齢の条件はありません。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>市は、市内の企業・団体が開く婚活イベントを<strong>共催</strong>し、会場費や広告費を負担しています（1団体あたり上限20万円）。令和7年度の実績は、定員に対する参加者の割合が<strong>{eventPlan.rate}%</strong>、カップル成立は<strong>{eventPlan.couplesR7}組</strong>です。市の主催・共催イベントで出会って結婚し、市内に住む方には<strong>5万円相当の商品券</strong>が贈られます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>令和8年度の結婚新生活支援事業（新婚世帯への住居費補助）の案内は、市の公式サイトで確認できませんでした。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">中津市から利用できる公的な結婚支援の一覧</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              中津市では、企画市民環境部の総合政策課が婚活支援を担当しています。市の事業と、市が案内している県のセンターを、当サイトで次のとおり整理しました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>名称・運営</th><th className={th}>内容</th><th className={th}>費用</th><th className={th}>主な条件</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/oita/" className="text-[#A08447] underline">OITAえんむす部 出会いサポートセンター</Link><br />大分県</td><td className={td}>会員制の1対1のお見合い支援。会員自身の検索に加え、AIによる紹介がある</td><td className={td}>入会登録料10,000円（2年間有効）。月会費・成婚料なし</td><td className={td}>20歳以上で概ね40代までの独身の方。大分県内在住、または県外在住で大分県への移住の意思がある方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={JOSEI_URL} {...ext}>OITAえんむす部出会いサポートセンター登録料助成</a><br />中津市</td><td className={td}>上記センターの入会登録料・更新料のうち7,000円を、市が本人に代わってセンターへ支払う</td><td className={td}>本人の負担は3,000円</td><td className={td}>市内に住所があり居住している方。過去にこの助成を受けたことがない方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={DEAI_URL} {...ext}>中津市出会いの場づくり事業（婚活イベント）</a><br />中津市（共催）</td><td className={td}>市内の企業・団体が開く婚活イベントを市が共催し、広報と会場費・広告費などを負担する。イベント情報はメールで案内</td><td className={td}>メール登録は無料。参加費はイベントごとに異なる</td><td className={td}>イベントごとに異なる</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={DEAI_URL} {...ext}>結婚祝い金</a><br />中津市</td><td className={td}>市の主催・共催イベントで出会って結婚した方に商品券を贈る</td><td className={td}>5万円相当の商品券を受け取れる</td><td className={td}>平成26年10月以降の市の主催・共催イベントで出会って結婚し、婚姻届の提出後に中津市に住む方</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              当サイトでは2026年11月25日時点で、市が運営する1対1のお見合い事業（市営の結婚相談所）や、令和8年度の結婚新生活支援事業の案内を、中津市の公式サイトで確認できませんでした。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={JOSEI_URL} {...ext}>中津市「OITAえんむす部出会いサポートセンター登録料助成について」（2026年4月1日更新）</a>・<a href={DEAI_URL} {...ext}>「あなたの春を応援します！ー中津市出会いの場づくり事業―」（2026年4月2日更新）</a>・<a href={PLAN_EVENT_PDF} {...ext}>「中津市出会いの場づくり事業（婚活イベント）実施計画書」（PDF）</a>・<a href={ENMUSUBU_FAQ_URL} {...ext}>OITAえんむす部 出会いサポートセンター「よくある質問」</a>（いずれも2026年11月25日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">OITAえんむす部の登録料助成（自己負担3,000円）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容（令和8年度）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>助成の対象</td><td className={td}>2026年4月1日以降にOITAえんむす部出会いサポートセンターに新しく入会する方、または登録を更新する方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>助成額</td><td className={td}>入会登録料または更新料（通常10,000円）が3,000円になる。差額の7,000円は市が本人に代わってセンターへ支払う</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象者</td><td className={td}>中津市内に住所があり居住している方。過去にこの助成を受けたことがある方（令和7年度までの中津市出会い応援助成金を含む）は対象外</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>助成の対象期間</td><td className={td}>2026年4月1日〜2027年3月31日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>問い合わせ</td><td className={td}>総合政策課（政策推進・人口減少対策係）0979-62-9031</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              市が本人に代わってセンターへ差額を支払う仕組みのため、後から申請して払い戻しを受ける形ではありません。市の公式ページに年齢の条件は書かれていませんが、センター側の対象は「20歳以上で概ね40代まで」です。助成は1人1回限りのため、新規入会で助成を受けた方が2年後に更新する場合、更新料10,000円は自己負担になります。
            </p>
            <p>
              市の実施計画書によると、この助成は令和5年度に始まった事業です。令和8年度の事業費は{joseiPlan.budget.toLocaleString()}円で、新規入会{joseiPlan.newcomers}人・更新{joseiPlan.renewals}人の計{joseiPlan.newcomers + joseiPlan.renewals}人分を見込んでいます（7,000円×{joseiPlan.newcomers + joseiPlan.renewals}人＝{joseiCheck.toLocaleString()}円）。申請人数は令和6年度の{joseiPlan.appliedR6}人に対し、令和8年度の目標は{joseiPlan.target}人です。同じ計画書では、成果指標「お引き合わせ成立者数」の現状値が76人（令和8年1月時点）とされていますが、集計の範囲（中津市民の会員に限るかなど）は計画書に書かれていません。
            </p>
            <p>
              センターの料金・活動のルール・登録者数などは、当サイトの<Link href="/knowledge/oita/" className="text-[#A08447] underline">大分県「OITAえんむす部」の解説</Link>で整理しています。センターの所在地は大分市高砂町です。Zoomを問題なく使えるなどの条件を満たせば、入会の面談をオンラインで受けられます。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={JOSEI_URL} {...ext}>中津市「OITAえんむす部出会いサポートセンター登録料助成について」（2026年4月1日更新）</a>・<a href={PLAN_JOSEI_PDF} {...ext}>「中津市出会いの場づくり事業（中津市出会い応援助成金）実施計画書」（PDF）</a>・<a href={ENMUSUBU_SUBSIDY_URL} {...ext}>OITAえんむす部「会員向け費用補助のご案内」</a>・<a href={ENMUSUBU_FAQ_URL} {...ext}>「よくある質問」</a>・<a href={ENMUSUBU_CENTER_URL} {...ext}>「センター紹介」</a>（いずれも2026年11月25日確認）。1年あたりの負担額は当サイト算出です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">市が共催する婚活イベント（中津市出会いの場づくり事業）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              中津市は、独身男女を対象にしたカップリングパーティーなどの出会いの場をつくる事業を支援しています。カップルになった男女が将来結婚して中津市に住むことで、少子化対策と定住対策の一助とすることが目的です。市の実施計画書によると、この事業は平成28年度に始まりました。市は共催者として公式媒体などで広報し、会場借上料・広告費などを負担します（1団体あたり上限20万円）。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>令和7年度の実績</th><th className={th}>令和8年度の目標</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>事業費</td><td className={td}>—</td><td className={td}>{eventPlan.budget.toLocaleString()}円（{eventPlan.perGroup.toLocaleString()}円×{eventPlan.groups}団体）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>募集定員に対する参加者の割合</td><td className={td}>{eventPlan.rate}%</td><td className={td}>100%</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>参加者の満足度</td><td className={td}>{eventPlan.satisfaction}%</td><td className={td}>80%</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>希望どおりの結婚に向けて後押ししてくれたと感じた人の割合</td><td className={td}>91.5%</td><td className={td}>93%</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>カップル成立数</td><td className={td}>{eventPlan.couplesR7}組</td><td className={td}>{eventPlan.couplesTarget}組</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              計画書には、令和7年度のイベントは想定を大きく上回る申し込みがあり、急きょ定員を増やして開催したと書かれています。市が共催する婚活イベントがあるときは、登録したメールアドレスに案内が届きます（登録無料・市外の方への案内もあり）。登録フォームは個人用と法人用（従業員の婚活サポートなど）に分かれており、市の公式ページから登録できます。イベントへの参加は別に申し込みが必要で、参加費用はイベントごとに異なります。
            </p>
            <p>
              当サイトでは、2026年11月25日時点で受付中の市共催イベントの日程を、市の公式サイトで確認できませんでした。OITAえんむす部 出会いサポートセンターのお知らせ・イベント情報でも、同日時点で中津市内の出張登録会の案内は確認できませんでした。最新の情報は、メール通知への登録か総合政策課への問い合わせで確認するのが確実です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={DEAI_URL} {...ext}>中津市「あなたの春を応援します！ー中津市出会いの場づくり事業―」（2026年4月2日更新）</a>・<a href={PLAN_EVENT_PDF} {...ext}>「中津市出会いの場づくり事業（婚活イベント）実施計画書」（PDF、実施期間2026年4月1日〜2027年3月31日）</a>・<a href={PLAN_INDEX_URL} {...ext}>「地域少子化対策重点推進事業の計画を公表します」（2026年4月15日更新）</a>（いずれも2026年11月25日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚祝い金と、結婚新生活支援の状況</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              中津市の婚活パーティーで出会って結婚し、中津市内に住む方には、5万円相当の商品券が贈られます。対象は、平成26年10月以降に中津市が主催・共催したイベントで出会って結婚し、婚姻届の提出後に中津市に住む方です。申し込みは、市の公式ページの「結婚祝い金」フォームから行います。この祝い金は市のイベントで出会った方が対象のため、OITAえんむす部で出会った方が対象になるかどうかは、市の公式ページからは読み取れません。該当する方は総合政策課に確認してください。
            </p>
            <p>
              結婚後の住居費・引越費用を補助する結婚新生活支援事業について、当サイトでは2026年11月25日時点で、中津市の公式サイトに令和8年度の案内を確認できませんでした。市が2026年4月に公表した地域少子化対策重点推進交付金の実施計画は、婚活イベント・登録料助成・パパママクラブ地域活動応援の3事業で、結婚新生活支援は含まれていません。民間の情報サイトには、過疎地域（三光・本耶馬渓・耶馬溪・山国）の新婚世帯を対象とした補助が載っている場合がありますが、市の公式情報で現行の制度を確認できないため、当サイトでは金額を掲載していません。
            </p>
            <p>
              市の実施計画書の参考指標では、中津市の婚姻件数は297件、婚姻率（人口1,000人あたり）は3.8です（いずれも令和6年）。計画書は、婚姻件数と婚姻率が年々低下していることを、出会いの場づくりを続ける理由に挙げています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={DEAI_URL} {...ext}>中津市「あなたの春を応援します！ー中津市出会いの場づくり事業―」（2026年4月2日更新）</a>・<a href={PLAN_INDEX_URL} {...ext}>「地域少子化対策重点推進事業の計画を公表します」（2026年4月15日更新）</a>・<a href={PLAN_EVENT_PDF} {...ext}>「中津市出会いの場づくり事業（婚活イベント）実施計画書」（PDF）</a>（いずれも2026年11月25日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な支援と民間の結婚相談所の費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>お相手の探し方</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/oita/" className="text-[#A08447] underline">OITAえんむす部</Link>・中津市の助成を使う場合（1回目）</td><td className={td}>3,000円（2年間有効。1年あたり{perYear}円・当サイト算出）</td><td className={td}>会員自身の検索・AIによる紹介</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>同・助成を受けた後の更新</td><td className={td}>10,000円（自己負担）</td><td className={td}>同上</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>市が共催する婚活イベント</td><td className={td}>イベントごとに異なる（情報メールの登録は無料）</td><td className={td}>イベントでのマッチング</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              中津市民は、市の助成を使うと県のセンターを2年間3,000円で利用でき、費用面では民間の結婚相談所より大幅に低く抑えられます。一方で、センターは会員自身が検索して申し込む仕組みが中心で、お見合いリクエストは月3人までといったルールがあります。担当者による継続的な紹介や交際中の助言を受けたい方には、民間の結婚相談所が選択肢になります。中津市から通いやすい福岡・北九州方面の結婚相談所や、自宅から活動できるオンライン型と比べて検討するのが目安です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。福岡の結婚相談所は<Link href="/area/fukuoka/" className="underline">福岡の結婚相談所</Link>で整理しています。公的な支援の料金は、各公式サイトで2026年11月25日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/tottori/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">えんトリー（鳥取県）</Link>
            <Link href="/knowledge/yamaguchi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">やまぐち結婚応縁センター（山口県）</Link>
            <Link href="/knowledge/ota/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">大田区の婚活支援（東京都）</Link>
            <Link href="/knowledge/chikugo/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">八女・筑後結婚サポートセンター（筑後市）</Link>
            <Link href="/knowledge/oita/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">大分県の結婚支援（OITAえんむす部）</Link>
            <Link href="/area/fukuoka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">福岡の結婚相談所</Link>
            <Link href="/knowledge/40s/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">42歳・40代の婚活の現状</Link>
            <Link href="/knowledge/kakogawa/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">加古川市の婚活（婚活支援補助金）</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
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
