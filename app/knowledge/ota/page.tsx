import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-25 確認）。
// ・大田区の婚姻届イベント（令和8年8月8日・区制80周年記念・記念台紙は先着300名・「TOKYO 八結び」協力・問い合わせ先 戸籍住民課）：大田区プレスリリース（2026年8月3日更新）
// ・令和7年7月7日の特別企画（フォトスポット・記念品は先着100名など）：大田区プレスリリース（2025年7月3日更新）
// ・地域少子化対策重点推進交付金を活用した令和8年度の大田区の事業が「こども・子育て支援ポータルサイトの運用」であること（結婚新生活支援事業は立川市などに掲載、大田区には掲載なし）：東京都福祉局「令和8年度 区市町村実施事業」
// ・大田区が運営する結婚相談・婚活事業・結婚新生活支援の案内が見当たらないこと：2026-11-25 に当サイトが大田区公式サイトを検索した範囲（本文では「見当たりませんでした」と表記）
// ・大田区・特別区部・全国の年齢別未婚者数・配偶関係不詳：総務省統計局「令和2年国勢調査 人口等基本集計」第4-3表（e-Stat）。未婚率（配偶関係不詳を除いて算出）と未婚者数の合計は当サイト算出
// ・TOKYO縁結びの入会条件・必要書類・登録料11,000円（2年間）・流れ・累計入会申込数約42,000人（令和8年11月15日時点）・問い合わせ先：TOKYOふたりSTORY「AIマッチングシステム」
// ・男女比（男性61%・女性39%）・年代別構成比（男女とも30代が最多）：同「会員データ」（PDF、令和8年11月15日時点）
// ・登録料以外の費用がないこと、月会費・お見合い料・成婚料なし、店舗なし、専任担当なし、更新時11,000円：同「よくあるご質問」
// ・マイナンバーカードによる本人確認・独身確認の追加：東京都 報道発表（2026年11月5日）
// ・お試し結婚相談（期間・対象・定員888人・内容・A/Bコース）：東京都 報道発表（2026年5月25日）
// ・東京都×JMIC 交流イベント（入会資格・独身証明書の提出）：TOKYOふたりSTORY「東京都×JMIC 交流イベント」「交流イベント」
// ・「大井競馬場de縁結び」（2026年12月20日・品川区勝島・参加費1,000円・200名程度・申込締切12月9日）：東京都 チラシ（PDF）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const OTA_888_URL = "https://www.city.ota.tokyo.jp/kuseijoho/press/releaseR08/2026080301.html";
const OTA_777_URL = "https://www.city.ota.tokyo.jp/kuseijoho/press/releaseR07/2025070302.html";
const FUKUSHI_R8_URL = "https://www.fukushi.metro.tokyo.lg.jp/ja/kodomo/katei/tiikishoushikakyouka/08kushichousonzigyou";
const CENSUS_URL = "https://www.e-stat.go.jp/stat-search/file-download?statInfId=000032142476&fileKind=0";
const FS = "https://www.futari-story.metro.tokyo.lg.jp";
const FS_TOP_URL = `${FS}/`;
const ENMUSUBI_URL = `${FS}/ai-matching/`;
const ENMUSUBI_DATA_URL = `${FS}/ai-matching/file/enmusubi_data.pdf`;
const ENMUSUBI_FAQ_URL = `${FS}/ai-matching/questions_and_answers.php`;
const KOURYU_URL = `${FS}/kouryu-event/`;
const JMIC_URL = `${FS}/kouryu-event/jmic.php`;
const PRESS_MYNA_URL = "https://www.metro.tokyo.lg.jp/information/press/2026/11/2026110505";
const PRESS_OTAMESHI_URL = "https://www.metro.tokyo.lg.jp/information/press/2026/05/2026052504";
const OI_EVENT_PDF_URL = "https://www.metro.tokyo.lg.jp/documents/d/tosei/20261113_05_09";

// 令和2年国勢調査 第4-3表（国籍総数）。未婚率は 未婚 ÷（総数 − 配偶関係不詳）で当サイト算出
const census = [
  { age: "25〜29歳", otaM: "76.7%", otaF: "70.6%", kuM: "77.0%", kuF: "69.5%", jpM: "72.9%", jpF: "62.4%" },
  { age: "30〜34歳", otaM: "49.5%", otaF: "41.1%", kuM: "48.7%", kuF: "40.9%", jpM: "47.4%", jpF: "35.2%" },
  { age: "35〜39歳", otaM: "36.6%", otaF: "27.8%", kuM: "34.0%", kuF: "27.6%", jpM: "34.5%", jpF: "23.6%" },
  { age: "40〜44歳", otaM: "30.2%", otaF: "23.1%", kuM: "28.3%", kuF: "23.3%", jpM: "29.1%", jpF: "19.4%" },
  { age: "45〜49歳", otaM: "29.2%", otaF: "21.6%", kuM: "27.5%", kuF: "22.5%", jpM: "27.2%", jpF: "17.6%" },
];

export const metadata: Metadata = {
  title: "大田区の結婚相談所・婚活支援｜区の婚活事業は見当たらず、東京都「TOKYO縁結び」は2年11,000円・大田区の年代別未婚率と民間22社の費用比較",
  description:
    "大田区では区が運営する結婚相談・婚活事業の案内が見当たらず、区民は東京都のAIマッチング「TOKYO縁結び」（2年11,000円）や都の交流イベントを利用できます。国勢調査から算出した大田区の未婚率、民間の結婚相談所との費用の違いを整理しています。",
  alternates: { canonical: "/knowledge/ota/" },
};

const faqs = [
  {
    q: "大田区に区営の結婚相談所や婚活イベントはありますか？",
    a: "2026年11月25日に当サイトが大田区公式サイトで確認した範囲では、区が運営する結婚相談（お相手の紹介）や婚活イベントの案内は見当たりませんでした。東京都福祉局が公表している令和8年度の地域少子化対策重点推進交付金の区市町村実施事業でも、大田区の事業は「こども・子育て支援ポータルサイトの運用」の1件です。大田区にお住まいの方が利用できる公的な出会いの仕組みは、東京都のAIマッチングシステム「TOKYO縁結び」と、都の交流イベントが中心です。",
  },
  {
    q: "TOKYO縁結びの費用はいくらですか？",
    a: "登録料は11,000円（税込）で、有効期間は本登録が完了し活動を開始した日の翌月1日から2年間です。公式のよくあるご質問では、登録料以外に必要な費用はなく、月会費・お見合い料・成婚料もかからないと案内されています。ただし、写真撮影や書類の取得、お見合い・交際にかかる費用は自己負担です。更新する場合は、再度11,000円の支払いと書類の再提出が必要です。",
  },
  {
    q: "大田区在住でなくても、大田区に勤めていればTOKYO縁結びを利用できますか？",
    a: "入会条件は、結婚を希望する18歳以上の独身の方で、東京都内に在住・在勤・在学のいずれかに当てはまる方です。大田区内の職場に勤めている方は、都外にお住まいでも条件を満たします。都内在住・在勤・在学のいずれにも当てはまらなくなった場合は退会となります。",
  },
  {
    q: "大田区に結婚新生活支援事業（新婚世帯の住居費補助）はありますか？",
    a: "2026年11月25日に当サイトが大田区公式サイトで確認した範囲では、結婚新生活支援事業の案内は見当たりませんでした。東京都福祉局の令和8年度の区市町村実施事業の一覧でも、結婚新生活支援事業は立川市などに掲載されており、大田区の掲載はありません。実施の有無は年度によって変わる可能性があるため、区役所でご確認ください。",
  },
  {
    q: "TOKYO縁結びと民間の結婚相談所はどう違いますか？",
    a: "TOKYO縁結びは完全オンラインのサービスで、店舗や専任の担当者はなく、AIによる紹介と会員自身の検索でお相手を探します。費用は2年間で11,000円です。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円（中央値399,200円）で、担当者によるお相手の提案や交際中の相談を行うところが多くあります。東京都は2026年6月8日〜2027年1月31日に、TOKYO縁結びの会員が結婚相談所のサービスを無料で体験できる「お試し結婚相談」（定員888人）を実施しています。",
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
  headline: "大田区で結婚相談所を探す方へ：区の婚活支援の状況、東京都のTOKYO縁結び・交流イベント、大田区の年代別未婚率と民間の結婚相談所との比較",
  description:
    "大田区の結婚支援の状況、東京都のAIマッチングシステム「TOKYO縁結び」と交流イベント、国勢調査から算出した大田区の年代別未婚率、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-25",
  dateModified: "2026-11-25",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/ota/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "大田区の結婚相談・婚活支援", item: "https://mu-su-bi-ba.com/knowledge/ota/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeOta() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "大田区の結婚相談・婚活支援" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          大田区で結婚相談所を探す方へ：区の婚活支援の状況、東京都のTOKYO縁結び・交流イベント、大田区の年代別未婚率と民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月25日（区の事業は同日に大田区公式サイトと東京都福祉局、都の事業はTOKYOふたりSTORYと東京都の報道発表、未婚率は令和2年国勢調査で確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />大田区の方が使える公的な婚活支援は、東京都の「TOKYO縁結び」が中心です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>2026年11月25日に当サイトが確認した範囲では、<strong>大田区が運営する結婚相談・婚活イベント・結婚新生活支援の案内は見当たりません</strong>でした。区の結婚に関する取組として確認できたのは、2025年7月7日・2026年8月8日の婚姻届の記念企画です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>東京都のAIマッチングシステム<strong>「TOKYO縁結び」は登録料11,000円（2年間）</strong>で、月会費・お見合い料・成婚料はかかりません。都内在住・在勤・在学の18歳以上の独身の方が対象で、累計入会申込数は<strong>約42,000人</strong>（2026年11月15日時点）です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>令和2年国勢調査から当サイトが算出した大田区の未婚率は、<strong>30〜34歳で男性49.5%・女性41.1%</strong>、35〜39歳で男性36.6%・女性27.8%で、いずれも全国を上回っています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>担当者による紹介や交際中の相談を求める場合は、民間の結婚相談所が選択肢になります。当サイトが料金を確認した22社の1年総額は<strong>125,400円〜709,500円</strong>です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">大田区の結婚支援の状況</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              2026年11月25日に当サイトが大田区公式サイトを確認した範囲では、区が独身の方にお相手を紹介する結婚相談や、区が主催・共催する婚活イベント、新婚世帯の住居費・引越費用を補助する結婚新生活支援事業の案内は見当たりませんでした。東京都福祉局が公表している令和8年度の地域少子化対策重点推進交付金の区市町村実施事業でも、大田区の事業は子育て支援ポータルサイト「おおた子育ちナビHug（はぐ）くみ」の運用の1件で、結婚新生活支援事業は立川市などに掲載されています。
            </p>
            <p>
              区の結婚に関する取組として確認できたのは、婚姻届を提出する方を祝う企画です。2025年7月7日（「777」の日）には本庁舎1階南ロビーに特別フォトスポットを設け、当日婚姻届を提出した先着100名に記念品を贈りました。2026年8月8日（「888」の日）には区制80周年記念事業として婚姻届イベントを開き、提出前の婚姻届のカラーコピーをオリジナル記念台紙にセットして先着300名に渡しました。この企画は東京都の「TOKYO 八結び」キャンペーンに協力するものと案内されています（問い合わせ先：戸籍住民課 03-5744-1185）。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>大田区の状況（2026年11月25日時点）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>区の結婚相談（お相手の紹介）</td><td className={td}>案内は見当たらない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>区主催の婚活イベント</td><td className={td}>案内は見当たらない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>結婚新生活支援事業</td><td className={td}>案内は見当たらない（都福祉局の令和8年度一覧にも掲載なし）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>婚姻届の記念企画</td><td className={td}>2025年7月7日（記念品・先着100名）、2026年8月8日（記念台紙・先着300名）に実施</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={OTA_888_URL} {...ext}>大田区 プレスリリース「『888』の特別な日に、人生の新たな一歩を。」（2026年8月3日更新）</a>・<a href={OTA_777_URL} {...ext}>同「令和7年7月7日 七夕に迎える人生のハレの日！」（2025年7月3日更新）</a>・<a href={FUKUSHI_R8_URL} {...ext}>東京都福祉局「令和8年度 区市町村実施事業」</a>（いずれも2026年11月25日確認）。区の事業が「見当たらない」とした項目は、当サイトが同日に確認した範囲での判断です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">大田区の年代別未婚率（令和2年国勢調査・当サイト算出）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              令和2年国勢調査の配偶関係別人口から、大田区・東京都特別区部・全国の未婚率を当サイトで算出しました。未婚率は「未婚者数 ÷（総数 − 配偶関係不詳）」で計算しています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年齢</th><th className={th}>大田区 男性</th><th className={th}>大田区 女性</th><th className={th}>特別区部 男性</th><th className={th}>特別区部 女性</th><th className={th}>全国 男性</th><th className={th}>全国 女性</th></tr></thead>
                <tbody>
                  {census.map((c) => (
                    <tr key={c.age} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{c.age}</td>
                      <td className={td}>{c.otaM}</td>
                      <td className={td}>{c.otaF}</td>
                      <td className={td}>{c.kuM}</td>
                      <td className={td}>{c.kuF}</td>
                      <td className={td}>{c.jpM}</td>
                      <td className={td}>{c.jpF}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              大田区の未婚率は、すべての年齢階級で男女とも全国を上回り、特別区部とはおおむね同じ水準です。35〜49歳の男性では、特別区部より1.7〜2.6ポイント高くなっています。25〜49歳の未婚者数は、大田区で男性49,489人・女性42,462人です（表の5つの年齢階級の合計、当サイト算出）。2020年10月時点の値のため、現在の状況とは異なる可能性があります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CENSUS_URL} {...ext}>総務省統計局「令和2年国勢調査 人口等基本集計」第4-3表 男女，年齢（5歳階級），配偶関係別人口（e-Stat、Excel）</a>（2026年11月25日確認）。未婚率・合計は同表の国籍総数の値から当サイトが算出しました。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">東京都のAIマッチングシステム「TOKYO縁結び」</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              TOKYO縁結びは、東京都が提供するオンラインの婚活システムです。価値観診断テストの結果をもとにAIが相性の良い方を紹介するほか、希望条件で検索することもできます。お見合いの日時・場所はシステム上で調整でき、オンラインお見合いも可能です。店舗はなく、入会面談や活動相談はオンライン・メール・電話で行います。専任の担当者はつきません。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会条件</td><td className={td}>結婚を希望する18歳以上の独身の方／東京都内に在住・在勤・在学の方／スマートフォンやパソコンを自力で操作できる方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>費用</td><td className={td}>登録料11,000円（税込）。有効期間は本登録完了・活動開始日の翌月1日から2年間。月会費・お見合い料・成婚料はなし（写真撮影・書類取得・お見合いや交際の費用は自己負担）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>写真付き本人確認書類、独身証明書、年収を確認できる書類（源泉徴収票など）、プロフィール用写真、誓約書</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>マイナンバーカード</td><td className={td}>2026年11月5日の都の発表で、マイナポータル連携による本人確認・独身確認の機能の追加が案内されています（独身証明書の取得・提出が不要になる）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会員数</td><td className={td}>累計入会申込数 約42,000人（2026年11月15日時点）。男女比は男性61%・女性39%で、年代別では男女とも30代が最も多い</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>問い合わせ</td><td className={td}>TOKYOふたりSTORY AIマッチングシステム事務局 03-6682-7531（平日12時〜20時、土日10時〜18時、年末年始休み）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              当サイトで換算すると、登録料11,000円は1年あたり5,500円です。会員の男女比は男性が6割を占めるため、女性会員にとってはお相手候補の男性が多く、男性会員にとっては女性が少ない構成です。累計入会申込数は申し込みの累計で、現在活動中の会員数ではない点にご注意ください。
            </p>
            <p>
              2026年6月8日〜2027年1月31日には、東京都が一般社団法人日本結婚相手紹介サービス協議会（JMIC）と連携し、TOKYO縁結びの会員が結婚相談所のサービスを無料で体験できる「お試し結婚相談」を実施しています。定員は888人（毎月111人・先着順）で、婚活相談・プロフィール作成・無料お見合い1回を体験するAコースと、婚活相談・プロフィール作成のBコースがあります。Aコースは各結婚相談所の入会資格を満たす方が対象で、お見合い後の交際サポートは含まれません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={ENMUSUBI_URL} {...ext}>TOKYOふたりSTORY「AIマッチングシステム（TOKYO縁結び）」</a>・<a href={ENMUSUBI_DATA_URL} {...ext}>同「会員データ」（PDF、2026年11月15日時点）</a>・<a href={ENMUSUBI_FAQ_URL} {...ext}>同「よくあるご質問」</a>・<a href={PRESS_MYNA_URL} {...ext}>東京都 報道発表（2026年11月5日）</a>・<a href={PRESS_OTAMESHI_URL} {...ext}>東京都 報道発表「お試し結婚相談を開始します」（2026年5月25日）</a>（いずれも2026年11月25日確認）。1年あたりの金額は当サイト算出です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">東京都の交流イベント（大田区の近隣での開催）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              東京都は、都主催の交流イベントと、JMICと連携した結婚相談所の相談員によるサポート付きの交流イベントを開いています。参加するには、都の交流イベント会員またはTOKYO縁結びの会員登録が必要です。入会資格は18歳以上の独身で都内在住・在学・在勤の方で、本人確認書類と独身証明書の提出が求められます。申し込みが多い場合は抽選です。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>大井競馬場de縁結び（東京都×JMIC）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>日時</td><td className={td}>2026年12月20日（日）16時〜18時（受付15時30分）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会場</td><td className={td}>大井競馬場 L-WING 4階（品川区勝島。東京モノレール「大井競馬場前駅」から徒歩約2分）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象・定員</td><td className={td}>18歳以上の独身の方（都内在住・在学・在勤）、200名程度（男女各100名程度）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>参加費</td><td className={td}>1,000円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申込締切</td><td className={td}>2026年12月9日（水）。締切日までに本人確認書類の提出と会員登録の承認が必要</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              大田区に隣接する品川区の会場で開かれるため、大田区の方も参加しやすいイベントです。今後の日程は、TOKYOふたりSTORYのイベントカレンダーと各交流イベントのページで案内されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={OI_EVENT_PDF_URL} {...ext}>東京都「大井競馬場de縁結び」チラシ（PDF）</a>・<a href={JMIC_URL} {...ext}>TOKYOふたりSTORY「東京都×JMIC 交流イベント」</a>・<a href={KOURYU_URL} {...ext}>同「交流イベント」</a>・<a href={FS_TOP_URL} {...ext}>同トップページ</a>（いずれも2026年11月25日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な支援と民間の結婚相談所の費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>お相手の探し方</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>TOKYO縁結び（東京都）</td><td className={td}>11,000円/2年（1年あたり5,500円・当サイト算出）。月会費・お見合い料・成婚料なし</td><td className={td}>AIによる紹介・会員自身の検索。専任担当なし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>東京都×JMIC 交流イベント</td><td className={td}>1回1,000円（2026年12月20日の大井競馬場の回）</td><td className={td}>イベントでの交流。結婚相談所の相談員がサポート</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>担当者によるお相手の提案や交際中の相談を行うところが多い</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用だけを比べると、TOKYO縁結びは民間の結婚相談所よりも大幅に低く抑えられます。一方で、TOKYO縁結びは完全オンラインで専任の担当者がつかないため、お相手の提案や交際中の助言を継続して受けたい方には、民間の結婚相談所が選択肢になります。まずTOKYO縁結びで活動し、サポートが足りないと感じた場合に「お試し結婚相談」で結婚相談所の支援を体験してから入会を検討する、という順序が目安です。大田区からは蒲田・大森・品川方面の店舗型のほか、オンライン型の結婚相談所も利用できます。入会前に1年間の総額を各社へ確認することをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。東京都内の結婚相談所は<Link href="/area/tokyo/" className="underline">東京の結婚相談所一覧</Link>で整理しています。公的な支援の料金は、本ページの各出典（2026年11月25日確認）によります。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/tottori/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">えんトリー（鳥取県）</Link>
            <Link href="/knowledge/yamaguchi/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">やまぐち結婚応縁センター（山口県）</Link>
            <Link href="/knowledge/chikugo/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">八女・筑後結婚サポートセンター（筑後市）</Link>
            <Link href="/knowledge/nakatsu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">中津市の婚活支援（大分県）</Link>
            <Link href="/area/tokyo/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">東京の結婚相談所一覧</Link>
            <Link href="/area/yokohama/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">横浜の結婚相談所</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/40s/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">42歳・40代の婚活の現状</Link>
            <Link href="/compare/30s/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">30代向け結婚相談所の比較</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/knowledge/flow/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の流れ</Link>
            <Link href="/knowledge/tsukuba/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">つくば市の婚活（であイバ）</Link>
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
