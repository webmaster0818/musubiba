import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-19 確認）。
// ・センターの設置（平成27年10月10日）・所在地・開館時間・婚活の手順・必要書類・「きょう婚ナビ」利用実費3,000円・婚活マスター講座の北部会場（福知山市総合福祉会館、令和8年8月30日）：京都府「きょうとの婚活情報」（2026年6月30日更新）
// ・入会条件（府内在住・在勤または移住を検討している20歳以上の独身者）・年齢上限なし・会員期間2年・成婚料なし・AI紹介月最大4人・検索申込月4名・地域スポット：きょうと婚活応援センター「よくある質問」「センターについて」
// ・利用の流れ・月会費なし・お見合い翌日中の回答：同「マッチングシステム（きょう婚ナビ）」。イベント会員の登録無料・センター内イベント参加費無料：同「イベントシステム」
// ・20代限定入会無料キャンペーン（令和9年3月31日まで）：同 お知らせ（2026年8月27日）
// ・検索申込を月8名に拡大する効果検証（令和8年11月1日〜令和9年1月31日）：同 お知らせ（2026年11月1日）
// ・福知山市内の開催実績・北部の開催予定：同 イベント一覧と各イベントページ（event/3519・3452・2555・3671・3717・3714）
// ・福知山市まちづくり推進課の業務「婚活支援に関すること」：福知山市「市民生活部」組織ページ
// ・府の地域少子化対策重点推進交付金の市町村実施事業一覧：京都府（2026年7月9日更新）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const PREF_URL = "https://www.pref.kyoto.jp/shoshi/konkatsu.html";
const TOP_URL = "https://pref-kyoto-konkatsu.jp/";
const ABOUT_URL = "https://pref-kyoto-konkatsu.jp/about/";
const FAQ_URL = "https://pref-kyoto-konkatsu.jp/faq/";
const MATCHING_URL = "https://pref-kyoto-konkatsu.jp/member/matching/";
const EVENT_SYSTEM_URL = "https://pref-kyoto-konkatsu.jp/member/event/";
const CAMPAIGN_URL =
  "https://pref-kyoto-konkatsu.jp/news/%e3%81%8d%e3%82%87%e3%81%86%e3%81%a8%e5%a9%9a%e6%b4%bb%e5%bf%9c%e6%8f%b4%e3%82%bb%e3%83%b3%e3%82%bf%e3%83%bc20%e4%bb%a3%e9%99%90%e5%ae%9a%e5%85%a5%e4%bc%9a%e7%84%a1%e6%96%99%e3%82%ad%e3%83%a3%e3%83%b3/";
const SEARCH8_URL =
  "https://pref-kyoto-konkatsu.jp/news/%e6%a4%9c%e7%b4%a2%e7%94%b3%e8%be%bc%e5%8f%af%e8%83%bd%e6%95%b0%e3%81%ae%e6%9c%80%e9%81%a9%e5%8c%96%e3%81%ae%e3%81%9f%e3%82%81%e3%81%ae%e5%8a%b9%e6%9e%9c%e6%a4%9c%e8%a8%bc%e3%82%92%e9%96%8b%e5%a7%8b/";
const EVENT_URL = (id: number) => `https://pref-kyoto-konkatsu.jp/event/${id}/`;
const CITY_ORG_URL = "https://www.city.fukuchiyama.lg.jp/soshiki/25.html";
const PREF_KOUFUKIN_URL = "https://www.pref.kyoto.jp/shoshi/shoshikakouhukin2601.html";

const pastEvents = [
  {
    id: 2555,
    date: "2025年7月27日",
    name: "ふくちde愛 第12章",
    org: "福知山商工会議所青年部",
    detail: "会場：福知山市末広町。男女各30名・25〜46歳。参加料金は男性10,000円・女性2,000円。男性は福知山市在住または福知山勤務の方、女性は居住地・勤務先不問",
  },
  {
    id: 3452,
    date: "2026年7月26日",
    name: "ふくちde愛 第13章",
    org: "福知山商工会議所青年部",
    detail: "会場：福知山市堀。男女各30名・25〜45歳。参加料金は男女とも5,000円（飲食代・ボウリング代）。男性は福知山市在住または在職で青年部会員の紹介者のみ、女性は全国から参加可能",
  },
  {
    id: 3519,
    date: "2026年8月30日",
    name: "会員登録会 in 福知山市",
    org: "京都府",
    detail: "会場：福知山市総合福祉会館（福知山市内記2丁目10-18）。きょうと婚活応援センターの会員登録の説明・受付",
  },
];

const upcomingEvents = [
  {
    id: 3671,
    date: "2026年12月13日",
    place: "京丹後市",
    org: "京都府婚活マスター",
    detail: "男女各12名・20〜39歳。参加料金は男女とも2,500円。募集終了日は2026年11月30日",
  },
  {
    id: 3717,
    date: "2026年12月19日（昼）",
    place: "舞鶴市",
    org: "舞鶴市役所ふるさと応援課",
    detail: "男女各15名・25〜39歳。参加料金は男女とも5,000円。男性は舞鶴市内在住者に限定。募集終了日は2026年12月1日",
  },
  {
    id: 3714,
    date: "2026年12月19日（夜）",
    place: "舞鶴市",
    org: "舞鶴市役所ふるさと応援課",
    detail: "男女各15名・40〜59歳。参加料金は男女とも6,000円。男性は舞鶴市内在住者に限定。募集終了日は2026年12月1日",
  },
];

export const metadata: Metadata = {
  title: "福知山市で婚活する方へ｜京都府の「きょうと婚活応援センター」は月会費・成婚料なし、AIマッチングは実費3,000円、2025年以降の市内開催3件",
  description:
    "福知山市から利用できる京都府の「きょうと婚活応援センター」は月会費・成婚料がなく、AIマッチング「きょう婚ナビ」の利用実費は3,000円（20代は令和9年3月まで無料）です。入会条件と申込みのルール、2025年以降の福知山市内の開催3件、民間との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/fukuchiyama/" },
};

const faqs = [
  {
    q: "きょうと婚活応援センターの料金はいくらですか？",
    a: "京都府の案内では、AIマッチングシステム「きょう婚ナビ」の利用を希望する方のみ、利用実費3,000円（1回限り）がかかります。センターの「よくある質問」では、月（年）会費・成婚料はかからないと案内されています。イベントだけを利用する会員の登録は無料です。また、令和9年3月31日までに入会し、20代のうちに活動を開始した方は、3,000円の利用料が無料になるキャンペーンが実施されています。",
  },
  {
    q: "福知山市に住んでいても入会できますか？",
    a: "入会条件は、京都府に在住・在勤、または結婚後に京都府への移住・在住を検討している20歳以上の独身の方です。福知山市にお住まいの方も対象です。センターは京都市中京区にありますが、入会の面談はオンラインでも受けられます。福知山市内でも、2026年8月30日に府の会員登録会が開かれました。",
  },
  {
    q: "年齢の上限はありますか？",
    a: "センターの「よくある質問」では、20歳以上であれば年齢の上限はないと案内されています。ただし、婚活マスターや婚活支援団体、センターが開催するイベントには年齢制限があるものもあります。",
  },
  {
    q: "福知山市独自の婚活支援はありますか？",
    a: "福知山市の組織ページでは、市民生活部まちづくり推進課の業務に「婚活支援に関すること」が挙げられています。当サイトでは、2026年11月19日時点で市の公式サイトに個別の婚活事業や登録料補助の案内ページを確認できませんでした。最新の取組は、福知山市役所（0773-22-6111・代表）へお問い合わせください。",
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
  headline: "福知山市で婚活する方へ：京都府「きょうと婚活応援センター」の料金・入会条件と、市内の開催実績、民間の結婚相談所との比較",
  description: "福知山市から利用できる京都府「きょうと婚活応援センター」の料金・入会条件・きょう婚ナビのルールと、福知山市内で開かれた婚活イベント・登録会、北部の開催予定、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/fukuchiyama/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "福知山市の婚活（きょうと婚活応援センター）", item: "https://mu-su-bi-ba.com/knowledge/fukuchiyama/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeFukuchiyama() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "福知山市の婚活（きょうと婚活応援センター）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          福知山市で婚活する方へ：京都府「きょうと婚活応援センター」の料金・入会条件と、市内の開催実績、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月19日（料金・入会条件・イベント情報は同日にきょうと婚活応援センター公式サイトと京都府公式サイト、市の体制は福知山市公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />福知山市の方は、京都府の「きょうと婚活応援センター」を月会費・成婚料なしで利用できます
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>京都府は平成27年10月10日に「きょうと婚活応援センター」（京都市中京区）を開設しました。<strong>府内在住・在勤の20歳以上の独身の方</strong>が対象で、福知山市の方も入会できます。面談はオンラインでも受けられます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>月会費・成婚料はかかりません。AIマッチングシステム「きょう婚ナビ」を使う場合のみ<strong>利用実費3,000円（1回限り）</strong>で、20代の方は令和9年3月31日までのキャンペーンで無料です。会員期間は2年間です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>福知山市内では、<strong>福知山商工会議所青年部の「ふくちde愛」（2025年7月・2026年7月）</strong>と、<strong>府の会員登録会（2026年8月30日）</strong>が開かれています（いずれも終了）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。費用を抑えたい方は府のセンター、担当者の継続的なサポートを重視する方は民間、という比べ方が目安になります。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">きょうと婚活応援センターの料金と入会条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>京都府（健康福祉部 こども・子育て総合支援室）。平成27年10月10日開設</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>費用</td><td className={td}>きょう婚ナビ（AIマッチング）の利用実費3,000円（1回限り）。月（年）会費・成婚料はなし。イベントのみ利用する会員の登録は無料</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>20代の特例</td><td className={td}>令和9年3月31日までに入会申込みを行い、書類提出・プロフィール登録等を終えて20代のうちに活動を開始した方は、3,000円の利用料が無料</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会員期間</td><td className={td}>会員登録日の属する月の翌月1日から2年間。退会・休会は自由</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会条件</td><td className={td}>京都府に在住・在勤、または結婚後に京都府への移住・在住を検討している20歳以上の独身の方。年齢の上限はなし。個人会員利用規約に了承し、誓約書に署名できること</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>写真付き身分証明書（運転免許証・パスポート・マイナンバーカード等）、独身証明書（本籍地の市町村が発行・発行後3か月以内の原本）、写真1枚（本人のみ・3か月以内に撮影）。独身証明書の代わりに戸籍謄本や住民票は受け付けていない</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              入会は、ホームページで事前登録と面談予約を行い、センターへの来所またはオンラインで本人確認の面談を受け、必要書類を提出する流れです。入会手続きはご本人に限られ、親御さんによる申込みはできません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={PREF_URL} {...ext}>京都府「きょうとの婚活情報」（2026年6月30日更新）</a>・<a href={ABOUT_URL} {...ext}>きょうと婚活応援センター「センターについて」</a>・<a href={FAQ_URL} {...ext}>「よくある質問」</a>・<a href={EVENT_SYSTEM_URL} {...ext}>「イベントシステム」</a>・<a href={CAMPAIGN_URL} {...ext}>お知らせ「20代限定入会無料キャンペーンの実施」（2026年8月27日）</a>（いずれも2026年11月19日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">きょう婚ナビの利用の流れと申込みのルール</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>ホームページで仮登録し、面談を予約する</li>
              <li>対面またはオンラインで本人確認の面談を受ける</li>
              <li>マイページでプロフィール・希望条件を入力し、書類と写真をアップロードして実費3,000円を振り込む。EQアセスメントテスト（行動価値観テスト）の受検が必須</li>
              <li>AIからの紹介と条件検索でお相手を探し、お見合いを申し込む</li>
              <li>お見合いの翌日中にマイページで交際の可否を回答し、お友達期間・真剣交際を経て、入籍したら成婚退会</li>
            </ol>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>ルール</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>AIからの紹介</td><td className={td}>毎週水曜日（祝日・年末年始を除く）にマイページへ届く。月に最大4人。条件の合うお相手がいない週は紹介なし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>検索からの申込み</td><td className={td}>通常は月4名まで（翌月への繰り越しなし）。令和8年11月1日〜令和9年1月31日は効果検証として月8名まで拡大</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お見合い後の回答</td><td className={td}>お見合いの翌日中に、マイページから交際のYES・NOを回答する</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>センター内のイベント</td><td className={td}>参加費無料（参加確定は抽選）。センター外のイベントは参加費がかかる場合がある</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              センターには専門スタッフの婚活相談員がいて、無料で相談に応じています。お相手探しは会員ご自身がシステムで行う仕組みのため、担当者からお相手の提案や継続的な助言を受けたい方は、民間の結婚相談所のサポート内容とあわせて比べることをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MATCHING_URL} {...ext}>きょうと婚活応援センター「マッチングシステム（きょう婚ナビ）」</a>・<a href={FAQ_URL} {...ext}>「よくある質問」</a>・<a href={EVENT_SYSTEM_URL} {...ext}>「イベントシステム」</a>・<a href={SEARCH8_URL} {...ext}>お知らせ「検索申込可能数の最適化のための効果検証を開始」（2026年11月1日）</a>（いずれも2026年11月19日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">2025年以降に福知山市内で開かれた婚活イベント・登録会（3件・いずれも終了）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>きょうと婚活応援センターのイベント一覧に掲載されている、2025年以降に福知山市内で開かれた催しです。いずれも開催済みで、次回の日程は2026年11月19日時点で掲載されていません。</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日</th><th className={th}>名称・主催</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  {pastEvents.map((e) => (
                    <tr key={e.id} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{e.date}（終了）</td>
                      <td className={td}><a href={EVENT_URL(e.id)} {...ext}>{e.name}</a><br />主催：{e.org}</td>
                      <td className={td}>{e.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              「ふくちde愛」は、福知山商工会議所青年部が主催する催しで、2026年のイベントページでは「毎年恒例」と案内されています（2025年は第12章、2026年は第13章。いずれも7月開催）。男性の参加条件は年によって異なり、2026年は青年部会員の紹介者に限られていました。このほか、京都府は2026年8月30日に、婚活支援のボランティアである「婚活マスター」の養成講座の北部会場を福知山市総合福祉会館で開いています。センターは府内各地で「地域スポット」として出会いイベントや会員登録会を定期的に開いているため、福知山市内での次回の開催は、センターのイベント一覧でご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TOP_URL} {...ext}>きょうと婚活応援センター イベント一覧</a>・各イベントページ（上表のリンク先）・<a href={FAQ_URL} {...ext}>「よくある質問」</a>・<a href={PREF_URL} {...ext}>京都府「きょうとの婚活情報」</a>（いずれも2026年11月19日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">府北部で受付中のイベント（2026年11月19日時点）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日・会場の市</th><th className={th}>主催</th><th className={th}>募集条件・参加料金</th></tr></thead>
                <tbody>
                  {upcomingEvents.map((e) => (
                    <tr key={e.id} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}><a href={EVENT_URL(e.id)} {...ext}>{e.date}・{e.place}</a></td>
                      <td className={td}>{e.org}</td>
                      <td className={td}>{e.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              舞鶴市の2件は男性の参加が舞鶴市内在住者に限られているため、福知山市在住の男性は参加の対象外です。募集状況は変わることがあるため、申込みの前に各イベントページで最新の情報をご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：きょうと婚活応援センター 各イベントページ（上表のリンク先。2026年11月19日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">福知山市の担当窓口と市の制度について</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              福知山市の組織ページでは、市民生活部まちづくり推進課（福知山市役所2階）の業務の一つに「婚活支援に関すること」が挙げられています。当サイトでは、2026年11月19日時点で、市の公式サイトに個別の婚活事業や登録料補助の案内ページを確認できませんでした。
            </p>
            <p>
              新婚世帯向けの支援については、京都府が公表している令和8年度の地域少子化対策重点推進交付金（2026年6月交付決定分）の市町村実施事業一覧に、舞鶴市・綾部市・宮津市などの新婚世帯支援事業が掲載されていますが、福知山市の事業は掲載されていません。この一覧は交付金を使う事業に限られるため、市の制度のすべてを示すものではありません。結婚に関する市の制度の有無は、福知山市役所（0773-22-6111・代表）でご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_ORG_URL} {...ext}>福知山市「市民生活部」</a>・<a href={PREF_KOUFUKIN_URL} {...ext}>京都府「令和8年度6月交付決定 地域少子化対策重点推進交付金の概要について」（2026年7月9日更新）</a>（いずれも2026年11月19日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>登録の有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>京都府「きょうと婚活応援センター」</td><td className={td}>きょう婚ナビ利用実費3,000円（1回限り。20代は令和9年3月31日まで無料）。イベント会員は登録無料</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンター（はばタン会員）</Link></td><td className={td}>5,000円/年</td><td className={td}>1年（年ごとの登録手数料）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/mie/" className="text-[#A08447] underline">三重県「みえむすび」</Link></td><td className={td}>無料（地域サポーター同席は1回1,000円）</td><td className={td}>本登録から2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用だけを比べると、きょうと婚活応援センターは民間の結婚相談所よりも大幅に低く抑えられます。一方で、検索からの申込みは通常月4名まで、センターの拠点は京都市内の1か所で、2025年以降に福知山市内で開かれた催しは上記の3件といった点があります。民間の結婚相談所は、費用がかかる代わりに、担当者がお相手を提案したり、交際中の相談に継続的に応じたりするところが多くあります。福知山市内から利用できるオンライン型の結婚相談所や、京都市の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。兵庫県・三重県のセンターの料金は、各センターの公式サイトで2026年11月16日〜17日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/takamatsu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">高松市の婚活（EN-MUSUかがわ）</Link>
            <Link href="/knowledge/saga/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">さが出会いサポートセンター（佐賀県）</Link>
            <Link href="/area/kyoto/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">京都の結婚相談所</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/knowledge/hyogo-deai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ひょうご出会いサポートセンター（兵庫県）</Link>
            <Link href="/knowledge/niigata/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">新潟市の婚活（ハートマッチにいがた）</Link>
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
