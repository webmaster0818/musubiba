import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-18 確認）。
// ・登録料・有効期間・対象年齢・入会条件・必要書類：OITAえんむす部 出会いサポートセンター「初めての方へ」「よくある質問」
// ・結婚おうえん団割引：同「結婚おうえん団割引制度」
// ・申込み・紹介の上限、回答期限、お見合い時間、真剣交際後の扱い：同「利用規約」（令和6年8月16日改訂）
// ・登録者数・交際数・成婚数：同 公式トップページの表示（2026年11月18日現在）
// ・所在地・開所日時：同「センター紹介」。電話番号：県掲載のセンターリーフレット
// ・市町の登録料補助：同「会員向け費用補助のご案内」、由布市「出会い応援助成金」
// ・開設日：大分県「県政のあゆみ（令和元年版）」。県の担当課：大分県「OITAえんむす部」ページ
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const PREF_URL = "https://www.pref.oita.jp/site/deai-kekkon-ouen/";
const TOP_URL = "https://oita-enmusubu.com/";
const BEGINNER_URL = "https://oita-enmusubu.com/beginner/";
const DISCOUNT_URL = "https://oita-enmusubu.com/beginner/discount/";
const SUBSIDY_URL = "https://oita-enmusubu.com/subsidy/";
const FAQ_URL = "https://oita-enmusubu.com/question/";
const TERMS_URL = "https://oita-enmusubu.com/terms/";
const CENTER_URL = "https://oita-enmusubu.com/center/";
const LEAFLET_URL = "https://www.pref.oita.jp/uploaded/attachment/2228499.pdf";
const AYUMI_URL = "https://www.pref.oita.jp/uploaded/attachment/2275204.pdf";
const YUFU_URL = "https://www.city.yufu.oita.jp/cate_1/article_80707";

const members = { m: 929, f: 757, kousai: 262, seikon: 290 };

const subsidies = [
  { city: "中津市", amount: "7,000円" },
  { city: "豊後高田市", amount: "10,000円" },
  { city: "津久見市", amount: "10,000円" },
  { city: "由布市", amount: "10,000円（全額。申請不要で市がセンターに直接支払い）" },
  { city: "玖珠町", amount: "10,000円" },
  { city: "九重町", amount: "10,000円" },
];

export const metadata: Metadata = {
  title: "大分県で結婚相談所を探す方へ｜県の「OITAえんむす部」は登録料1万円・2年有効、会員1,686名と民間との費用比較",
  description:
    "大分県の「OITAえんむす部 出会いサポートセンター」は、入会登録料10,000円（2年間有効）で月会費・成婚料はかかりません。登録者数（男性929名・女性757名、2026年11月18日現在）、成婚数290組、申込みの上限、登録料を補助する6市町、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/oita/" },
};

const faqs = [
  {
    q: "OITAえんむす部の料金はいくらですか？",
    a: "入会登録料は10,000円で、2年間有効です。月会費・紹介料・成婚料はかかりません（OITAえんむす部 出会いサポートセンター「よくある質問」）。有効期間の終了後も続ける場合は、更新手続き（更新料）が必要です。県に登録した「結婚おうえん団」の企業・団体に勤める方は、在籍が確認できる書類の提示で入会登録料が1,000円割引されます。",
  },
  {
    q: "何歳まで入会できますか？",
    a: "公式FAQでは「20歳以上で概ね40代までの結婚を希望している方」を対象としています。明確な上限年齢は示されていないため、50代以上の方は事前にセンターへご相談ください。",
  },
  {
    q: "大分県外に住んでいても入会できますか？",
    a: "入会条件は、大分県内にお住まいの方、または県外にお住まいで大分県への移住の意思がある方です。あわせて、スマートフォン・タブレット・パソコン等でインターネットとメールを使えることが条件です（いわゆるガラパゴス携帯は不可）。Zoomを問題なく使えるなどの条件を満たせば、オンラインでの登録もできます。",
  },
  {
    q: "お見合いの申込みに上限はありますか？",
    a: "利用規約では、自分から出すお見合いリクエストは月に最大3人までで、翌月への繰り越しや取り消しはできません。このほか、AIが価値観診断（EQアセスメント）の結果などをもとに、月に最大4人を紹介します。紹介状が届いたら、紹介日の翌日から7日以内に回答します。",
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
  headline: "大分県の公的な婚活支援「OITAえんむす部」の料金・入会条件と、民間の結婚相談所との比較",
  description: "大分県の「OITAえんむす部 出会いサポートセンター」の料金・入会条件・必要書類・活動のルール・登録者数と、登録料を補助する市町、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-18",
  dateModified: "2026-11-18",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/oita/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "大分県の結婚支援（OITAえんむす部）", item: "https://mu-su-bi-ba.com/knowledge/oita/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";

export default function KnowledgeOita() {
  const total = members.m + members.f;
  const maleShare = ((members.m / total) * 100).toFixed(1);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "大分県の結婚支援（OITAえんむす部）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          大分県の結婚相談所選び：県の「OITAえんむす部」の料金・入会条件と、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月18日（料金・入会条件・登録者数・利用規約・市町の補助は同日にOITAえんむす部 出会いサポートセンター公式サイトと大分県公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />大分県の「OITAえんむす部」は入会登録料10,000円・2年間有効で、月会費・成婚料はかかりません
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>大分県は<strong>2018年6月27日</strong>に「OITAえんむす部 出会いサポートセンター」を開設しました。会員登録制で1対1のお見合いを支援する、県の結婚応援プロジェクトです。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>入会登録料は<strong>10,000円（2年間有効）</strong>で、月会費・紹介料・成婚料はかかりません。対象は<strong>20歳以上・概ね40代まで</strong>の独身の方です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>公式サイトの表示では、<strong>登録者は男性{members.m}名・女性{members.f}名（計{total.toLocaleString()}名）</strong>、交際数{members.kousai}組、これまでの成婚数<strong>{members.seikon}組</strong>です（2026年11月18日現在）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>中津市・豊後高田市・津久見市・由布市・玖珠町・九重町の<strong>6市町が登録料を補助</strong>しています。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">OITAえんむす部の料金と入会条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>大分県（こども未来政策課）。おおいた出会い応援プロジェクト「OITAえんむす部」の一環</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>開設</td><td className={td}>2018年6月27日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会登録料</td><td className={td}>10,000円（2年間有効）。結婚おうえん団の企業・団体の従業員は1,000円割引</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>月会費・紹介料・成婚料</td><td className={td}>かからない。有効期間の終了後に続ける場合は更新手続き（更新料）が必要</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象年齢</td><td className={td}>20歳以上で概ね40代までの結婚を希望している方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会条件</td><td className={td}>独身であること／大分県内にお住まいの方、または県外にお住まいで大分県への移住の意思がある方／スマートフォン・タブレット・パソコン等でインターネットとメールを使えること（ガラパゴス携帯は不可）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>面談時：写真付き身分証明書（運転免許証・マイナンバーカード等）と入会登録料。面談後にアップロード：独身証明書（本籍地の市町村が発行・3か月以内）、お見合い用写真（必須1枚・任意1枚、本人のみ・3か月以内に撮影）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              入会は、ホームページで仮登録と面談予約を行い、来所またはオンラインで本人確認の面談を受けて登録料を支払う流れです。オンラインでの登録は、Zoomの利用経験があり問題なく操作できることなどが条件です。家族による代理での登録はできません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={BEGINNER_URL} target="_blank" rel="noopener noreferrer" className="underline">OITAえんむす部 出会いサポートセンター「初めての方へ」</a>・<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="underline">「よくある質問」</a>・<a href={DISCOUNT_URL} target="_blank" rel="noopener noreferrer" className="underline">「結婚おうえん団割引制度」</a>・<a href={PREF_URL} target="_blank" rel="noopener noreferrer" className="underline">大分県「OITAえんむす部」</a>・<a href={AYUMI_URL} target="_blank" rel="noopener noreferrer" className="underline">大分県「県政のあゆみ（令和元年版）」（PDF）</a>（いずれも2026年11月18日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">お見合いまでの流れと利用規約のルール</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>マイページで書類・写真・プロフィールを登録し、センターの承認を受けたら活動開始</li>
              <li>スマートフォン、またはセンター内のタブレット（要予約）でお相手を検索する。AIからの紹介もある</li>
              <li>お相手が承諾したら、マイページ上でお見合いの日程を調整する</li>
              <li>センターのお見合いルーム、または自宅からのオンラインでお見合い（40分程度）</li>
              <li>双方が希望すれば交際（お知り合い）へ進み、真剣交際を経て、入籍したら成婚退会の手続きを行う</li>
            </ol>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>ルール</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お見合いリクエスト</td><td className={td}>月に最大3人まで。翌月への繰り越し・取り消しはできない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>AIからの紹介</td><td className={td}>希望条件と価値観診断（EQアセスメント）の結果をもとに、月に最大4人</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>紹介状への回答</td><td className={td}>紹介日の翌日から7日以内。期限内に回答しないと自動見送り</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お見合い</td><td className={td}>40分程度。基本は本人同士の会話で、支援員は冒頭の挨拶と終了の際に同席。オンラインは本人の自宅で行う</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>真剣交際</td><td className={td}>真剣交際になるまでは複数の方と知り合える。真剣交際に入るとプロフィールは非公開になり、検索とAI紹介は停止</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              センターの結婚支援員は、お見合いの立ち会いや交際についての相談などのサポートを行っています。お相手探し・申込みは会員ご自身がシステムで行い、お見合いの場に支援員が同席する点が、会員同士だけで進めるマッチングシステムとの違いです。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className="underline">OITAえんむす部 出会いサポートセンター「利用規約」（令和6年8月16日改訂）</a>・<a href={BEGINNER_URL} target="_blank" rel="noopener noreferrer" className="underline">「初めての方へ」</a>（いずれも2026年11月18日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">登録者数・交際数・成婚数</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>数値（2026年11月18日現在）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録者数</td><td className={td}>男性{members.m}名・女性{members.f}名（計{total.toLocaleString()}名。男性の割合は{maleShare}%で当サイト算出）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>現在の交際数</td><td className={td}>{members.kousai}組</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>これまでの成婚数</td><td className={td}>{members.seikon}組（2018年の開設からの累計）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              登録者は男性がやや多く、男性約1.2人に対して女性1人の比率です。年代別の内訳は公式サイトに掲載されていないため、希望する年代のお相手がどの程度いるかは、面談の際にセンターへ確認することをおすすめします。表示されている数値は日々更新されるため、最新の値は公式サイトでご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TOP_URL} target="_blank" rel="noopener noreferrer" className="underline">OITAえんむす部 出会いサポートセンター 公式サイト</a>（2026年11月18日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">センターの所在地と、登録料を補助する6市町</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>拠点</th><th className={th}>所在地・電話</th><th className={th}>開所日時</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>OITAえんむす部 出会いサポートセンター</td><td className={td}>大分市高砂町2番50号 OASISひろば21（3階）／097-578-7777</td><td className={td}>月・木・金・土曜 13:00〜20:00、日曜・祝日 11:00〜18:00、火・水曜定休</td></tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>市町</th><th className={th}>補助額</th><th className={th}>対象</th></tr></thead>
                <tbody>
                  {subsidies.map((s) => (
                    <tr key={s.city} className="border-t border-[#E5DCCF] align-top"><td className={td}>{s.city}</td><td className={td}>{s.amount}</td><td className={td}>新規入会登録料・更新料</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              補助額はセンターの「会員向け費用補助のご案内」に掲載されている値で、条件は市町ごとに異なります。由布市は、令和8年4月1日から令和9年3月31日までに入会または更新した市民を対象に、登録料・更新料の全額10,000円を補助しており、申請の手続きは不要です。由布市の補助は2022年時点では半額（5,000円）だったことがセンターのお知らせで確認でき、年度によって内容が変わる場合があります。利用前に各市町の担当窓口で最新の条件をご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CENTER_URL} target="_blank" rel="noopener noreferrer" className="underline">OITAえんむす部 出会いサポートセンター「センター紹介」</a>・<a href={LEAFLET_URL} target="_blank" rel="noopener noreferrer" className="underline">県掲載のセンターリーフレット（PDF）</a>・<a href={SUBSIDY_URL} target="_blank" rel="noopener noreferrer" className="underline">「会員向け費用補助のご案内」</a>・<a href={YUFU_URL} target="_blank" rel="noopener noreferrer" className="underline">由布市「出会い応援助成金」</a>（いずれも2026年11月18日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>登録の有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>大分県「OITAえんむす部」</td><td className={td}>10,000円（結婚おうえん団の従業員は9,000円）</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/mie/" className="text-[#A08447] underline">三重県「みえむすび」</Link></td><td className={td}>無料（地域サポーター同席は1回1,000円）</td><td className={td}>本登録から2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンター（はばタン会員）</Link></td><td className={td}>5,000円/年</td><td className={td}>1年（年ごとの登録手数料）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用だけを比べると、OITAえんむす部は民間の結婚相談所よりも大幅に低く抑えられます。一方で、お見合いリクエストは月3人まで、対象年齢は概ね40代までといった条件があります。民間の結婚相談所は、費用がかかる代わりに、担当者がお相手を提案したり、交際中の相談に継続的に応じたりするところが多くあります。大分県内から利用できるオンライン型の結婚相談所や、福岡市の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。三重県・兵庫県のセンターの料金は、各センターの公式サイトで2026年11月16日〜17日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/area/fukuoka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">福岡の結婚相談所</Link>
            <Link href="/knowledge/okinawa/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">おきなわ結マッチ（沖縄県）</Link>
            <Link href="/knowledge/okayama/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">おかやま縁むすびネット（岡山県）</Link>
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
