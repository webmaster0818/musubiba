import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-28 確認）。
// ・自由が丘1〜3丁目の世帯数・人口・男女別・5歳階級別人口（令和8年3月1日現在・住民基本台帳）：目黒区「年齢別人口表（町丁別） 令和7年度（2025）」3月1日現在人口（Excel）。3町丁の合計・25〜49歳の合計・構成比・男性100人あたりの女性数・区全体（全88町丁の合計）は当サイト算出
// ・令和8年4月以降の町丁別データはオープンデータカタログサイトで提供と案内：同「年齢別人口表（町丁別）」索引ページ
// ・目黒区・特別区部・全国の年齢別未婚者数・配偶関係不詳：総務省統計局「令和2年国勢調査 人口等基本集計」第4-3表（e-Stat）。未婚率（配偶関係不詳を除いて算出）・未婚者数の合計・男女差・不詳の割合は当サイト算出
// ・地域少子化対策重点推進交付金を活用した令和8年度の区市町村実施事業に目黒区の掲載がないこと（区部は品川区・大田区・世田谷区・北区・板橋区・練馬区・江戸川区）：東京都福祉局「令和8年度 区市町村実施事業」（2026年10月1日更新）
// ・目黒区が運営する結婚相談・婚活イベント・結婚新生活支援事業の案内が確認できないこと：2026-11-28 に当サイトが目黒区公式サイト（「住まいに関する支援・助成」一覧を含む）を検索・確認した範囲（本文では「確認できませんでした（2026年11月28日時点）」と表記）
// ・目黒区総合庁舎ウェディング事業（区民以外も利用可・南口エントランス/らせん階段/目黒十五庭・土日休日・午前/午後の4時間枠・婚姻届提出または受理証明書受け取りの演出（条件あり）・区が選定した事業者2社・経費は事業者により異なる・問い合わせ 総務課庁舎管理係 03-5722-6107）：目黒区公式サイト ページID 6313（2025年2月12日更新）
// ・ファミリー世帯家賃助成（18歳未満の子を扶養・同居する世帯・月額2万円・最長3年・120世帯・令和8年度募集は6月10日〜7月10日で終了・所得基準・家賃5万〜18万円・パートナーシップ関係の相手方も対象・問い合わせ 住宅課居住支援係 03-5722-9878）：目黒区公式サイト ページID 4962（2026年7月11日更新）
// ・TOKYO縁結びの入会条件・必要書類・登録料11,000円（2年間）・累計入会申込数約42,000人（令和8年11月15日時点）・問い合わせ先：TOKYOふたりSTORY「AIマッチングシステム」
// ・男女比（男性61%・女性39%）：同「会員データ」（PDF、令和8年11月15日時点）
// ・登録料以外の費用がないこと、月会費・お見合い料・成婚料なし、更新時11,000円、在住/在勤/在学を満たさなくなった場合は退会：同「よくあるご質問」
// ・お試し結婚相談（令和8年6月8日〜令和9年1月31日・定員888人（毎月111人・先着順）・A/Bコース・Aコースは各相談所の入会資格が必要・交際サポートは対象外）：東京都 報道発表（2026年5月25日）
// ・目黒区内の相談所（名称・所在地）：当サイトの相談所データベース data-agencies-tokyo.json（Googleマップの公開情報、2026年8月18日取得）。個別ページを設けている（Googleマップの口コミ3件以上）3件のみ掲載。自由が丘1〜3丁目に所在する相談所は同データベースに無し
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const POP_URL = "https://www.city.meguro.tokyo.jp/koseki/kusei/gaiyou/nenbetsu_cho-r07.html";
const POP_XLSX_URL = "https://www.city.meguro.tokyo.jp/documents/17543/nmati-r080301.xlsx";
const POP_INDEX_URL = "https://www.city.meguro.tokyo.jp/kusei/gaiyou/toukei/toukei/jinkou/choubetsu/index.html";
const CENSUS_URL = "https://www.e-stat.go.jp/stat-search/file-download?statInfId=000032142476&fileKind=0";
const FUKUSHI_R8_URL = "https://www.fukushi.metro.tokyo.lg.jp/ja/kodomo/katei/tiikishoushikakyouka/08kushichousonzigyou";
const WEDDING_URL = "https://www.city.meguro.tokyo.jp/soumu/shisetsu/koukyoushisetsu/kekkonsiki.html";
const FAMILY_URL = "https://www.city.meguro.tokyo.jp/juutaku/kurashi/sumai/family.html";
const SUMAI_URL = "https://www.city.meguro.tokyo.jp/kurashi/sumai/shien/index.html";
const FS = "https://www.futari-story.metro.tokyo.lg.jp";
const ENMUSUBI_URL = `${FS}/ai-matching/`;
const ENMUSUBI_DATA_URL = `${FS}/ai-matching/file/enmusubi_data.pdf`;
const ENMUSUBI_FAQ_URL = `${FS}/ai-matching/questions_and_answers.php`;
const PRESS_OTAMESHI_URL = "https://www.metro.tokyo.lg.jp/information/press/2026/05/2026052504";

// 目黒区「年齢別人口表（町丁別）」令和8年3月1日現在（住民基本台帳）。合計は当サイト算出
const chome = [
  { name: "自由が丘1丁目", setai: "1,528", total: "2,573", m: "1,178", f: "1,395" },
  { name: "自由が丘2丁目", setai: "1,505", total: "2,638", m: "1,201", f: "1,437" },
  { name: "自由が丘3丁目", setai: "1,265", total: "2,307", m: "1,055", f: "1,252" },
];

// 同表の自由が丘1〜3丁目の合計（男性・女性）。当サイト算出
const jiyuAge = [
  { age: "25〜29歳", m: "262", f: "292" },
  { age: "30〜34歳", m: "225", f: "284" },
  { age: "35〜39歳", m: "230", f: "257" },
  { age: "40〜44歳", m: "218", f: "250" },
  { age: "45〜49歳", m: "276", f: "330" },
];

// 令和2年国勢調査 第4-3表（国籍総数）。未婚率は 未婚 ÷（総数 − 配偶関係不詳）で当サイト算出
const census = [
  { age: "25〜29歳", mM: "78.1%", mF: "71.0%", kuM: "77.0%", kuF: "69.5%", jpM: "72.9%", jpF: "62.4%" },
  { age: "30〜34歳", mM: "49.0%", mF: "44.3%", kuM: "48.7%", kuF: "40.9%", jpM: "47.4%", jpF: "35.2%" },
  { age: "35〜39歳", mM: "31.5%", mF: "31.2%", kuM: "34.0%", kuF: "27.6%", jpM: "34.5%", jpF: "23.6%" },
  { age: "40〜44歳", mM: "24.6%", mF: "26.3%", kuM: "28.3%", kuF: "23.3%", jpM: "29.1%", jpF: "19.4%" },
  { age: "45〜49歳", mM: "22.1%", mF: "25.1%", kuM: "27.5%", kuF: "22.5%", jpM: "27.2%", jpF: "17.6%" },
];

// 同表の目黒区の未婚者数（国籍総数・人）。差は当サイト算出
const singles = [
  { age: "25〜29歳", m: "5,505", f: "5,815", diff: "310" },
  { age: "30〜34歳", m: "4,011", f: "4,268", diff: "257" },
  { age: "35〜39歳", m: "2,910", f: "3,306", diff: "396" },
  { age: "40〜44歳", m: "2,462", f: "2,884", diff: "422" },
  { age: "45〜49歳", m: "2,208", f: "2,929", diff: "721" },
];

// 当サイトの相談所データベース（Googleマップの公開情報、2026年8月18日取得）のうち、所在地が目黒区で個別ページがあるもの
const dbAgencies = [
  { slug: "ディアブライド東京-0a36", name: "ディアブライド東京", address: "東京都目黒区東山3丁目1-15 Holon池尻ビル 8階" },
  { slug: "結婚相談所-ORANGE-ROSE-f194", name: "結婚相談所 ORANGE ROSE", address: "東京都目黒区目黒本町3丁目7" },
  { slug: "マッチメイク-目黒区の結婚相談所-5497", name: "マッチメイク", address: "東京都目黒区鷹番2丁目20-20 MIDPOINT" },
];

export const metadata: Metadata = {
  title: "自由が丘の結婚相談所・婚活支援｜目黒区の公的支援の状況、TOKYO縁結び、自由が丘1〜3丁目の人口と目黒区の未婚率、民間22社の費用",
  description:
    "自由が丘（目黒区）で結婚相談所を探す方向けに、目黒区の結婚関連の取組、東京都のTOKYO縁結び（2年11,000円）、国勢調査から算出した目黒区の未婚率、自由が丘1〜3丁目の男女別人口、民間22社の費用を整理しています。",
  alternates: { canonical: "/knowledge/jiyugaoka/" },
};

const faqs = [
  {
    q: "自由が丘のある目黒区に、区営の結婚相談所や婚活イベントはありますか？",
    a: "2026年11月28日に当サイトが目黒区公式サイトを確認した範囲では、区が独身の方にお相手を紹介する結婚相談や、区が主催する婚活イベントの案内は確認できませんでした。東京都福祉局が公表している令和8年度の地域少子化対策重点推進交付金の区市町村実施事業の一覧にも、目黒区の事業は掲載されていません。目黒区にお住まい・お勤めの方が利用できる公的な出会いの仕組みとしては、東京都のAIマッチングシステム「TOKYO縁結び」があります。",
  },
  {
    q: "目黒区に新婚世帯向けの補助はありますか？",
    a: "2026年11月28日に当サイトが目黒区公式サイトの「住まいに関する支援・助成」などを確認した範囲では、新婚世帯を対象とする家賃補助や、国の結婚新生活支援事業の案内は確認できませんでした。区のファミリー世帯家賃助成（月額2万円・最長3年間）は、18歳未満の子を扶養し同居している世帯が対象のため、夫婦のみの世帯は対象になりません。令和8年度の募集は2026年6月10日〜7月10日で、すでに終了しています。",
  },
  {
    q: "自由が丘の人口は男女でどのくらい違いますか？",
    a: "目黒区の住民基本台帳（2026年3月1日現在）では、自由が丘1〜3丁目の人口は7,518人で、男性3,434人・女性4,084人です。当サイトで計算すると男性100人あたりの女性は118.9人で、目黒区全体（111.9人）より女性の比率が高くなっています。25〜49歳に限ると男性1,211人・女性1,413人です。これは結婚している方を含む人口で、未婚の方の人数ではありません。",
  },
  {
    q: "TOKYO縁結びの費用はいくらですか？",
    a: "登録料は11,000円（税込）で、有効期間は本登録が完了し活動を開始した日の翌月1日から2年間です。公式のよくあるご質問では、登録料以外に必要な費用はなく、月会費・お見合い料・成婚料もかからないと案内されています。写真撮影や書類の取得、お見合い・交際にかかる費用は自己負担で、更新する場合は再度11,000円の支払いと書類の再提出が必要です。",
  },
  {
    q: "自由が丘に結婚相談所はありますか？",
    a: "当サイトの相談所データベース（Googleマップの公開情報をもとに2026年8月18日に取得）では、所在地が自由が丘1〜3丁目の相談所は掲載していません。目黒区内では、ディアブライド東京（東山）、結婚相談所 ORANGE ROSE（目黒本町）、マッチメイク（鷹番）の3件に個別ページを設けています。データベースに載っていない相談所や、オンラインで面談を行う相談所もあるため、料金や面談場所は各社の公式サイトでご確認ください。",
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
  headline: "自由が丘で結婚相談所を探す方へ：目黒区の結婚関連の取組、東京都のTOKYO縁結び、自由が丘1〜3丁目の男女別人口、目黒区の年代別未婚率と民間の結婚相談所との比較",
  description:
    "目黒区の結婚関連の取組、東京都のAIマッチングシステム「TOKYO縁結び」、住民基本台帳から集計した自由が丘1〜3丁目の男女別・年代別人口、国勢調査から算出した目黒区の年代別未婚率、当サイトのデータベースに掲載している目黒区の相談所、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-28",
  dateModified: "2026-11-28",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/jiyugaoka/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "自由が丘（目黒区）の結婚相談・婚活支援", item: "https://mu-su-bi-ba.com/knowledge/jiyugaoka/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;
const pill = "text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]";

export default function KnowledgeJiyugaoka() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "自由が丘（目黒区）の結婚相談・婚活支援" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          自由が丘で結婚相談所を探す方へ：目黒区の結婚関連の取組、東京都のTOKYO縁結び、自由が丘1〜3丁目の男女別人口、目黒区の年代別未婚率と民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月28日（区の取組は同日に目黒区公式サイトと東京都福祉局、都の事業はTOKYOふたりSTORYと東京都の報道発表、人口は目黒区の住民基本台帳（2026年3月1日現在）、未婚率は令和2年国勢調査で確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />自由が丘の方が使える公的な婚活支援は、東京都の「TOKYO縁結び」が中心です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>自由が丘1〜3丁目は目黒区に属します。<strong>目黒区が運営する結婚相談・婚活イベント・新婚世帯向けの補助は確認できませんでした（2026年11月28日時点）</strong>。区の結婚に関する取組として確認できたのは、総合庁舎を結婚式の会場として貸し出す「目黒区総合庁舎ウェディング事業」です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>住民基本台帳（2026年3月1日現在）では、自由が丘1〜3丁目の人口は<strong>7,518人（男性3,434人・女性4,084人）</strong>です。当サイトで計算した男性100人あたりの女性は118.9人で、目黒区全体の111.9人を上回ります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>令和2年国勢調査から当サイトが算出した目黒区の女性の未婚率は、<strong>40〜44歳で26.3%</strong>と特別区部（23.3%）・全国（19.4%）を上回り、40歳以上では男性の未婚率より高くなっています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>東京都の<strong>「TOKYO縁結び」は登録料11,000円（2年間）</strong>で、都内在住・在勤・在学の方が利用できます。担当者による支援を求める場合、当サイトが料金を確認した民間22社の1年総額は125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">目黒区の結婚に関する取組（2026年11月28日時点）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              2026年11月28日に当サイトが目黒区公式サイトを確認した範囲では、区が独身の方にお相手を紹介する結婚相談や、区が主催する婚活イベント、新婚世帯の住居費・引越費用を補助する結婚新生活支援事業の案内は確認できませんでした。区の「住まいに関する支援・助成」の一覧にも、新婚世帯を対象とする制度は掲載されていません。東京都福祉局が公表している令和8年度の地域少子化対策重点推進交付金の区市町村実施事業でも、区部で掲載されているのは品川区・大田区・世田谷区・北区・板橋区・練馬区・江戸川区で、目黒区の掲載はありません。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>目黒区の状況（2026年11月28日時点）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>区の結婚相談（お相手の紹介）</td><td className={td}>確認できませんでした</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>区主催の婚活イベント</td><td className={td}>確認できませんでした（都福祉局の令和8年度一覧にも目黒区の掲載なし）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>結婚新生活支援事業・新婚世帯向けの家賃補助</td><td className={td}>確認できませんでした</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>総合庁舎ウェディング事業</td><td className={td}>実施中（区が選定した事業者が運営）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>ファミリー世帯家賃助成</td><td className={td}>18歳未満の子がいる世帯が対象。令和8年度の募集は終了</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              目黒区総合庁舎ウェディング事業は、建築家の村野藤吾氏が設計した総合庁舎の南口エントランス、らせん階段、屋上庭園「目黒十五庭」を、結婚式やフォトウェディングの会場として利用できる事業です。利用できるのは土曜日・日曜日・休日（12月29日〜1月3日などを除く）の午前（9時〜13時）または午後（13時〜17時）の4時間枠で、目黒区民以外の方も利用できます。結婚式の演出として、婚姻届の提出や、事前に提出した婚姻届の受理証明書の受け取りを行うこともできます（実施には条件があります）。運営は区が選定した事業者2社が行い、経費やプランは事業者により異なると案内されています（問い合わせ先：総務課 庁舎管理係 03-5722-6107）。
            </p>
            <p>
              結婚後の住まいについては、区内の民間賃貸住宅に住む、18歳未満の子を扶養し同居している世帯を対象に、月額2万円を最長3年間助成する「ファミリー世帯家賃助成」があります。募集は120世帯で、所得基準（2人世帯は524.4万円以下など）や月額家賃5万円以上18万円以下などの条件があります。令和8年度は2026年6月10日〜7月10日に募集し、すでに終了しています。夫婦のみの世帯は対象外ですが、賃貸借契約者や家賃を支払う方には、配偶者のほかパートナーシップ関係の相手方も含まれます（問い合わせ先：住宅課 居住支援係 03-5722-9878）。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={WEDDING_URL} {...ext}>目黒区「目黒区総合庁舎で結婚式を挙げませんか（目黒区総合庁舎ウェディング事業）」（2025年2月12日更新）</a>・<a href={FAMILY_URL} {...ext}>同「ファミリー世帯家賃助成」（2026年7月11日更新）</a>・<a href={SUMAI_URL} {...ext}>同「住まいに関する支援・助成」</a>・<a href={FUKUSHI_R8_URL} {...ext}>東京都福祉局「令和8年度 区市町村実施事業」（2026年10月1日更新）</a>（いずれも2026年11月28日確認）。「確認できませんでした」とした項目は、当サイトが同日に目黒区公式サイトを検索・確認した範囲での判断です。実施の有無は年度によって変わる可能性があるため、区役所でご確認ください。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">自由が丘1〜3丁目の男女別・年代別人口（住民基本台帳・当サイト集計）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              目黒区が公表している町丁別の年齢別人口表（2026年3月1日現在）から、自由が丘1〜3丁目の人口を当サイトで集計しました。住民基本台帳に登録された人口で、外国人住民を含みます。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>町丁</th><th className={th}>世帯数</th><th className={th}>人口</th><th className={th}>男性</th><th className={th}>女性</th></tr></thead>
                <tbody>
                  {chome.map((c) => (
                    <tr key={c.name} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{c.name}</td>
                      <td className={td}>{c.setai}</td>
                      <td className={td}>{c.total}人</td>
                      <td className={td}>{c.m}人</td>
                      <td className={td}>{c.f}人</td>
                    </tr>
                  ))}
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>自由が丘1〜3丁目 計</td><td className={td}>4,298</td><td className={td}>7,518人</td><td className={td}>3,434人</td><td className={td}>4,084人</td></tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年齢</th><th className={th}>自由が丘1〜3丁目 男性</th><th className={th}>自由が丘1〜3丁目 女性</th></tr></thead>
                <tbody>
                  {jiyuAge.map((a) => (
                    <tr key={a.age} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{a.age}</td>
                      <td className={td}>{a.m}人</td>
                      <td className={td}>{a.f}人</td>
                    </tr>
                  ))}
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>25〜49歳 計</td><td className={td}>1,211人</td><td className={td}>1,413人</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              自由が丘1〜3丁目では、すべての町丁で女性が男性を上回り、男性100人あたりの女性は118.9人です。同じ表の全88町丁を合計した目黒区全体（人口282,526人、男性133,327人・女性149,199人）では111.9人のため、自由が丘は区全体よりも女性の比率が高い地域です。25〜49歳に限ると、自由が丘では男性100人あたり女性116.7人、区全体では107.2人です。一方、25〜49歳が人口に占める割合は、自由が丘1〜3丁目が34.9%、区全体が39.8%で、自由が丘は区全体よりやや低くなっています（いずれも当サイト算出）。
            </p>
            <p>
              この人口には結婚している方も含まれ、未婚の方の人数を示すものではありません。また、自由が丘駅の周辺には世田谷区の町域も隣接しており、婚活の相手は町内に限られないため、出会いやすさを直接示すものでもありません。なお、目黒区の案内では、2026年4月以降の町丁別のデータはオープンデータカタログサイトで提供されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={POP_URL} {...ext}>目黒区「年齢別人口表（町丁別） 令和7年度（2025）」</a>・<a href={POP_XLSX_URL} {...ext}>同 令和8年3月1日現在人口（Excel）</a>・<a href={POP_INDEX_URL} {...ext}>同「年齢別人口表（町丁別）」</a>（いずれも2026年11月28日確認）。3町丁の合計・区全体の合計・比率・構成比は同表の値から当サイトが算出しました。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">目黒区の年代別未婚率と未婚者数（令和2年国勢調査・当サイト算出）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              国勢調査の未婚者数は町丁単位では本ページで扱っていないため、目黒区全体の値を示します。令和2年国勢調査の配偶関係別人口から、目黒区・東京都特別区部・全国の未婚率を当サイトで算出しました。未婚率は「未婚者数 ÷（総数 − 配偶関係不詳）」で計算しています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年齢</th><th className={th}>目黒区 男性</th><th className={th}>目黒区 女性</th><th className={th}>特別区部 男性</th><th className={th}>特別区部 女性</th><th className={th}>全国 男性</th><th className={th}>全国 女性</th></tr></thead>
                <tbody>
                  {census.map((c) => (
                    <tr key={c.age} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{c.age}</td>
                      <td className={td}>{c.mM}</td>
                      <td className={td}>{c.mF}</td>
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
              目黒区の女性の未婚率は、30歳以上のすべての年齢階級で特別区部を上回り、35〜49歳では特別区部より2.6〜3.6ポイント高くなっています。男性の未婚率は、35〜49歳で特別区部より2.5〜5.4ポイント低い水準です。その結果、目黒区では40〜44歳・45〜49歳で女性の未婚率が男性を上回っており、特別区部・全国とは逆の傾向です。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年齢</th><th className={th}>目黒区 未婚男性</th><th className={th}>目黒区 未婚女性</th><th className={th}>女性が多い人数</th></tr></thead>
                <tbody>
                  {singles.map((s) => (
                    <tr key={s.age} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{s.age}</td>
                      <td className={td}>{s.m}人</td>
                      <td className={td}>{s.f}人</td>
                      <td className={td}>{s.diff}人</td>
                    </tr>
                  ))}
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>25〜49歳 計</td><td className={td}>17,096人</td><td className={td}>19,202人</td><td className={td}>2,106人</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              目黒区では25〜49歳のすべての年齢階級で未婚女性が未婚男性より多く、差は年齢が上がるほど大きくなり、45〜49歳では721人です。ただし、目黒区は配偶関係が「不詳」の方の割合が高く、25〜29歳の男性では33.7%（特別区部25.6%、全国10.3%）です。未婚率は不詳を除いて計算しているため実際の値とずれる可能性があり、2020年10月時点の値である点にもご留意ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CENSUS_URL} {...ext}>総務省統計局「令和2年国勢調査 人口等基本集計」第4-3表 男女，年齢（5歳階級），配偶関係別人口（e-Stat、Excel）</a>（2026年11月28日確認）。未婚率・合計・差・不詳の割合は同表の国籍総数の値から当サイトが算出しました。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">東京都のAIマッチングシステム「TOKYO縁結び」</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              目黒区には区の婚活事業が確認できないため、公的な仕組みで継続してお相手を探す場合は東京都の「TOKYO縁結び」が選択肢になります。価値観診断テストの結果をもとにAIが相性の良い方を紹介するほか、希望条件で検索することもでき、お見合いの日時・場所はシステム上で調整できます。オンラインお見合いにも対応しています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会条件</td><td className={td}>結婚を希望する18歳以上の独身の方／東京都内に在住・在勤・在学の方／インターネットに接続できるスマートフォンやパソコンを所有し、自力で操作できる方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>費用</td><td className={td}>登録料11,000円（税込）。有効期間は本登録完了・活動開始日の翌月1日から2年間。月会費・お見合い料・成婚料はなし。更新時は再度11,000円と書類の再提出が必要</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>写真付き本人確認書類、独身証明書（本籍のある区市町村で取得）、年収を確認できる書類（源泉徴収票など）、プロフィール掲載用写真、誓約書</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会員数・男女比</td><td className={td}>累計入会申込数 約42,000人、男女比は男性61%・女性39%（いずれも2026年11月15日時点）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>問い合わせ</td><td className={td}>TOKYOふたりSTORY AIマッチングシステム事務局 03-6682-7531（平日12時〜20時、土日10時〜18時、年末年始休み）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              TOKYO縁結びの会員は男性が6割を占めます。前の節のとおり、自由が丘1〜3丁目と目黒区ではいずれも女性の比率が高いため、都内全域の会員からお相手を探せる点は、特に女性にとって選択肢を広げる手段になります。自由が丘の職場に勤めている方は、都外にお住まいでも在勤の条件を満たします。累計入会申込数は申し込みの累計で、現在活動中の会員数ではありません。
            </p>
            <p>
              東京都は2026年6月8日〜2027年1月31日に、TOKYO縁結びの会員が結婚相談所のサービスを無料で体験できる「お試し結婚相談」を実施しています。定員は888人（毎月111人・先着順）で、婚活相談・プロフィール作成・無料お見合い1回のAコース（各結婚相談所の入会資格を満たす方が対象、お見合い後の交際サポートは対象外）と、婚活相談・プロフィール作成のBコースがあります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={ENMUSUBI_URL} {...ext}>TOKYOふたりSTORY「AIマッチングシステム（TOKYO縁結び）」</a>・<a href={ENMUSUBI_DATA_URL} {...ext}>同「会員データ」（PDF、2026年11月15日時点）</a>・<a href={ENMUSUBI_FAQ_URL} {...ext}>同「よくあるご質問」</a>・<a href={PRESS_OTAMESHI_URL} {...ext}>東京都 報道発表「お試し結婚相談を開始します」（2026年5月25日）</a>（いずれも2026年11月28日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">当サイトのデータベースに掲載している目黒区の相談所</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              当サイトの相談所データベース（Googleマップの公開情報をもとに2026年8月18日に取得）のうち、所在地が目黒区で個別ページを設けている相談所は次の3件です。所在地が自由が丘1〜3丁目の相談所は、同データベースには掲載していません。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>相談所</th><th className={th}>所在地（データベース掲載値）</th></tr></thead>
                <tbody>
                  {dbAgencies.map((a) => (
                    <tr key={a.slug} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}><Link href={`/agency/${a.slug}/`} className="text-[#A08447] underline">{a.name}</Link></td>
                      <td className={td}>{a.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              いずれも自由が丘駅から離れた地域にあるため、通いやすさは事前にご確認ください。データベースに載っていない相談所や、オンラインで面談を行う相談所もあります。料金・面談場所・営業状況は変わる可能性があるため、各社の公式サイトで最新の情報をご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※相談所名と所在地は当サイトの相談所データベース（Googleマップの公開情報、2026年8月18日取得）によります。掲載順は推奨順ではありません。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な支援と民間の結婚相談所の費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>お相手の探し方</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>TOKYO縁結び（東京都）</td><td className={td}>11,000円/2年（1年あたり5,500円・当サイト算出）。月会費・お見合い料・成婚料なし</td><td className={td}>AIによる紹介・会員自身の検索</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お試し結婚相談（東京都）</td><td className={td}>無料（TOKYO縁結びの会員が対象・2027年1月31日まで・定員888人）</td><td className={td}>結婚相談所の相談員による婚活相談・プロフィール作成・お見合い1回（Aコース）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>担当者によるお相手の提案や交際中の相談を行うところが多い</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              <Link href="/knowledge/cost/" className="underline">当サイトが料金を確認した22社の1年総額は125,400円〜709,500円（中央値399,200円）</Link>です。費用を抑えて始める場合は、TOKYO縁結びで活動し、担当者の支援が必要と感じた段階でお試し結婚相談を利用して結婚相談所のサポートを体験する順序が目安になります。お相手の提案や交際中の助言を継続して受けたい方は、民間の結婚相談所への入会を検討する方法があります。料金体系は各社で大きく異なるため、入会前に1年間の総額を確認することをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。東京都内の結婚相談所は<Link href="/area/tokyo/" className="underline">東京の結婚相談所一覧</Link>で整理しています。公的な支援の料金は、本ページの各出典（2026年11月28日確認）によります。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/setagaya/" className={pill}>世田谷区の結婚相談・婚活支援</Link>
            <Link href="/knowledge/ota/" className={pill}>大田区の結婚相談・婚活支援</Link>
            <Link href="/knowledge/kasai/" className={pill}>加西市の婚活支援</Link>
            <Link href="/knowledge/ogaki/" className={pill}>大垣市の婚活支援</Link>
            <Link href="/knowledge/tomakomai/" className={pill}>苫小牧市の婚活支援</Link>
            <Link href="/knowledge/joetsu/" className={pill}>上越市の婚活支援</Link>
            <Link href="/area/tokyo/" className={pill}>東京の結婚相談所一覧</Link>
            <Link href="/compare/online/" className={pill}>オンライン結婚相談所の比較</Link>
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
