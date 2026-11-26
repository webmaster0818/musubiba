import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-26 確認）。
// ・令和8年度「せたがや婚活イベント（せた婚）」（2026年12月5日・2部制・会場 オークラレストランスカイキャロット（太子堂4-1-1 キャロットタワー26F）・第1部30〜39歳/第2部20〜39歳・都内在住/在勤/在学・各回先着32名（男女各16名）・最小催行 男女各8名・参加料各回3,000円・申込期間11月1日〜11月28日・Peatixのみ・どちらか一方のみ申込可・個別トーク/フリータイム/マッチング発表・身分証持参・問い合わせ 池之上青少年交流センター 03-3413-9504・所管 子ども・若者支援課・運営 株式会社日本仲人連盟）：世田谷区公式サイト ページID 19872（2026年11月1日更新）
// ・地域少子化対策重点推進交付金を活用した令和8年度の世田谷区の事業（乳幼児ふれあい体験事業・若者の出会と交流の機会創出事業・LINEを活用した子育て関連情報発信等事業。結婚新生活支援事業は立川市などに掲載、世田谷区には掲載なし）：東京都福祉局「令和8年度 区市町村実施事業」
// ・“ずっと、世田谷。”子育て・若者夫婦世帯定住応援事業（令和8年度から・若者夫婦世帯＝夫婦のいずれかが39歳以下・夫婦のいずれかが引き続き5年以上区内在住・令和8年4月1日以降の売買/建築工事請負契約・区内・新耐震・50平米以上・転居日から90日以内に申請・予算上限で終了・地域活動への参加意向の確認・多世代近居/同居応援事業と併用で最大70万円相当・問い合わせ 補助金受付窓口）：世田谷区公式サイト ページID 31163（2026年11月20日更新）
// ・定住応援金の内容（現金30万円・せたがやPayポイント10万ポイント）：世田谷区子育て・若者夫婦世帯定住応援事業要綱 第5条（PDF）
// ・“ずっと、世田谷。”子育て・若者夫婦世帯住み替え応援事業（令和8年度から・夫婦のいずれかが引き続き1年以上区内在住・令和8年4月1日以降の民間賃貸住宅の賃貸借契約・公社/URは対象・公的住宅/社宅等は対象外・最低居住面積水準以上・90日以内・併用で最大40万円相当）：世田谷区公式サイト ページID 31164（2026年11月20日更新）
// ・住み替え応援金の内容（せたがやPayポイント10万ポイント）：世田谷区子育て・若者夫婦世帯住み替え応援事業要綱 第5条（PDF）
// ・世田谷区での事業が「見当たらない」とした項目（区が運営するお相手紹介型の結婚相談・国の結婚新生活支援事業の案内）：2026-11-26 に当サイトが世田谷区公式サイトを確認した範囲（本文では「見当たりませんでした」と表記）
// ・世田谷区・特別区部・全国の年齢別未婚者数・配偶関係不詳：総務省統計局「令和2年国勢調査 人口等基本集計」第4-3表（e-Stat）。未婚率（配偶関係不詳を除いて算出）・未婚者数の合計・男女差・不詳の割合は当サイト算出
// ・TOKYO縁結びの入会条件・必要書類・登録料11,000円（2年間）・流れ・累計入会申込数約42,000人（令和8年11月15日時点）・問い合わせ先：TOKYOふたりSTORY「AIマッチングシステム」
// ・男女比（男性61%・女性39%）：同「会員データ」（PDF、令和8年11月15日時点）
// ・登録料以外の費用がないこと、月会費・お見合い料・成婚料なし、実店舗なし、専任担当なし、更新時11,000円：同「よくあるご質問」
// ・お試し結婚相談（期間・定員888人（毎月111人・先着順）・A/Bコース・Aコースは各相談所の入会資格が必要・交際サポートは対象外）：東京都 報道発表（2026年5月25日）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const SETAKON_URL = "https://www.city.setagaya.lg.jp/02236/19872.html";
const TEIJU_URL = "https://www.city.setagaya.lg.jp/03665/31163.html";
const TEIJU_YOUKOU_URL = "https://www.city.setagaya.lg.jp/documents/31163/teizyuuyoukou.pdf";
const SUMIKAE_URL = "https://www.city.setagaya.lg.jp/03665/31164.html";
const SUMIKAE_YOUKOU_URL = "https://www.city.setagaya.lg.jp/documents/31164/sumikaeyoukou.pdf";
const FUKUSHI_R8_URL = "https://www.fukushi.metro.tokyo.lg.jp/ja/kodomo/katei/tiikishoushikakyouka/08kushichousonzigyou";
const CENSUS_URL = "https://www.e-stat.go.jp/stat-search/file-download?statInfId=000032142476&fileKind=0";
const FS = "https://www.futari-story.metro.tokyo.lg.jp";
const ENMUSUBI_URL = `${FS}/ai-matching/`;
const ENMUSUBI_DATA_URL = `${FS}/ai-matching/file/enmusubi_data.pdf`;
const ENMUSUBI_FAQ_URL = `${FS}/ai-matching/questions_and_answers.php`;
const PRESS_OTAMESHI_URL = "https://www.metro.tokyo.lg.jp/information/press/2026/05/2026052504";

// 令和2年国勢調査 第4-3表（国籍総数）。未婚率は 未婚 ÷（総数 − 配偶関係不詳）で当サイト算出
const census = [
  { age: "25〜29歳", sM: "77.5%", sF: "72.5%", kuM: "77.0%", kuF: "69.5%", jpM: "72.9%", jpF: "62.4%" },
  { age: "30〜34歳", sM: "45.7%", sF: "42.5%", kuM: "48.7%", kuF: "40.9%", jpM: "47.4%", jpF: "35.2%" },
  { age: "35〜39歳", sM: "29.0%", sF: "28.0%", kuM: "34.0%", kuF: "27.6%", jpM: "34.5%", jpF: "23.6%" },
  { age: "40〜44歳", sM: "21.5%", sF: "22.4%", kuM: "28.3%", kuF: "23.3%", jpM: "29.1%", jpF: "19.4%" },
  { age: "45〜49歳", sM: "20.7%", sF: "21.3%", kuM: "27.5%", kuF: "22.5%", jpM: "27.2%", jpF: "17.6%" },
];

// 同表の世田谷区の未婚者数（国籍総数・人）。差は当サイト算出
const singles = [
  { age: "25〜29歳", m: "15,530", f: "18,003", diff: "2,473" },
  { age: "30〜34歳", m: "10,242", f: "11,426", diff: "1,184" },
  { age: "35〜39歳", m: "7,734", f: "8,776", diff: "1,042" },
  { age: "40〜44歳", m: "6,642", f: "7,976", diff: "1,334" },
  { age: "45〜49歳", m: "6,818", f: "8,181", diff: "1,363" },
];

export const metadata: Metadata = {
  title: "世田谷区の結婚相談所・婚活支援｜区の「せた婚」、若者夫婦の定住応援金30万円、TOKYO縁結びと年代別未婚率",
  description:
    "世田谷区は区の婚活イベント「せた婚」（2026年12月5日・各回3,000円）を開催し、住宅を取得した若者夫婦世帯には現金30万円とせたがやPay10万ポイントの定住応援金があります。東京都のTOKYO縁結び、国勢調査から算出した世田谷区の未婚率、民間22社の費用を整理しています。",
  alternates: { canonical: "/knowledge/setagaya/" },
};

const faqs = [
  {
    q: "世田谷区に区営の結婚相談所はありますか？",
    a: "2026年11月26日に当サイトが世田谷区公式サイトで確認した範囲では、区が独身の方にお相手を継続して紹介する結婚相談の案内は見当たりませんでした。区の婚活支援として確認できたのは、子ども・若者支援課が所管する婚活イベント「せたがや婚活イベント（せた婚）」です。東京都福祉局の令和8年度の区市町村実施事業の一覧にも、世田谷区の事業として「若者の出会と交流の機会創出事業」が掲載されています。継続的に紹介を受けたい場合は、東京都の「TOKYO縁結び」や民間の結婚相談所が選択肢になります。",
  },
  {
    q: "せた婚の参加条件と費用を教えてください。",
    a: "令和8年度のせた婚は2026年12月5日（土）に世田谷区太子堂のキャロットタワー26階のレストランで2部制で開かれます。第1部は30〜39歳、第2部は20〜39歳の、結婚を希望する東京都内在住・在勤・在学の方が対象です（年齢は開催日当日時点）。定員は各回先着32名（男女各16名）、参加料は各回3,000円です。申込期間は2026年11月1日〜11月28日で、Peatixからの申し込み・決済のみ受け付けています。第1部・第2部のどちらか一方にのみ申し込めます。",
  },
  {
    q: "世田谷区に新婚世帯向けの補助はありますか？",
    a: "令和8年度から、夫婦のいずれかが39歳以下の若者夫婦世帯などを対象とする「“ずっと、世田谷。”」の応援事業が始まっています。区内で住宅を購入・建築して転居した場合の定住応援金は現金30万円とせたがやPay10万ポイント、区内の民間賃貸住宅に住み替えた場合の住み替え応援金はせたがやPay10万ポイントです。いずれも夫婦のいずれかが一定期間（定住は5年以上、住み替えは1年以上）区内に住んでいることが条件で、転居した日から90日以内の申請が必要です。なお、国の結婚新生活支援事業の案内は、当サイトが2026年11月26日に確認した範囲では見当たりませんでした。",
  },
  {
    q: "TOKYO縁結びの費用はいくらですか？",
    a: "登録料は11,000円（税込）で、有効期間は本登録が完了し活動を開始した日の翌月1日から2年間です。公式のよくあるご質問では、登録料以外に必要な費用はなく、月会費・お見合い料・成婚料もかからないと案内されています。写真撮影や書類の取得、お見合い・交際にかかる費用は自己負担で、更新する場合は再度11,000円の支払いと書類の再提出が必要です。",
  },
  {
    q: "世田谷区の公的な婚活支援と民間の結婚相談所はどう違いますか？",
    a: "せた婚は1回3,000円のイベント、TOKYO縁結びは2年間11,000円のオンラインのマッチングで、どちらも専任の担当者がお相手を継続して提案する仕組みではありません。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円（中央値399,200円）で、担当者によるお相手の提案や交際中の相談を行うところが多くあります。東京都は2027年1月31日まで、TOKYO縁結びの会員が結婚相談所のサービスを無料で体験できる「お試し結婚相談」を実施しています。",
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
  headline: "世田谷区で結婚相談所を探す方へ：区の婚活イベント「せた婚」、若者夫婦世帯の定住・住み替え応援金、TOKYO縁結び、世田谷区の年代別未婚率と民間の結婚相談所との比較",
  description:
    "世田谷区の婚活イベント「せた婚」、若者夫婦世帯向けの定住・住み替え応援金、東京都のAIマッチングシステム「TOKYO縁結び」、国勢調査から算出した世田谷区の年代別未婚率と男女別の未婚者数、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-26",
  dateModified: "2026-11-26",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/setagaya/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "世田谷区の結婚相談・婚活支援", item: "https://mu-su-bi-ba.com/knowledge/setagaya/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeSetagaya() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "世田谷区の結婚相談・婚活支援" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          世田谷区で結婚相談所を探す方へ：区の婚活イベント「せた婚」、若者夫婦世帯の定住・住み替え応援金、TOKYO縁結び、世田谷区の年代別未婚率と民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月26日（区の事業は同日に世田谷区公式サイトと東京都福祉局、都の事業はTOKYOふたりSTORYと東京都の報道発表、未婚率は令和2年国勢調査で確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />世田谷区は区の婚活イベントと、若者夫婦世帯への応援金を実施しています
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>世田谷区は婚活イベント<strong>「せたがや婚活イベント（せた婚）」を2026年12月5日に開催</strong>します。参加料は各回3,000円、定員は各回先着32名（男女各16名）で、申込期間は11月28日までです。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>令和8年度から、夫婦のいずれかが39歳以下の若者夫婦世帯などが区内で住宅を取得した場合に<strong>現金30万円とせたがやPay10万ポイント</strong>、区内の民間賃貸住宅に住み替えた場合にせたがやPay10万ポイントの応援金が交付されます（区内の居住期間などの条件があります）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>令和2年国勢調査から当サイトが算出した世田谷区の男性の未婚率は、<strong>40〜44歳で21.5%</strong>と特別区部（28.3%）・全国（29.1%）を下回ります。一方、25〜49歳の未婚者数は<strong>女性54,362人・男性46,966人</strong>で、すべての年齢階級で女性が男性を上回っています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>継続的にお相手の紹介を受ける公的な仕組みとしては、東京都の<strong>「TOKYO縁結び」（登録料11,000円・2年間）</strong>があります。担当者による支援を求める場合、当サイトが料金を確認した民間22社の1年総額は125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">世田谷区の婚活イベント「せた婚」（令和8年度）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              世田谷区は、結婚を希望する若者に出会いや交流の場を提供するため、区の子ども・若者支援課の所管で婚活イベント「せた婚」を開いています。東京都福祉局が公表している令和8年度の地域少子化対策重点推進交付金の区市町村実施事業でも、世田谷区の事業として「世田谷区若者の出会と交流の機会創出事業」が掲載されています。令和8年度は年代を分けた2部制で、1対1の個別トーク、フリータイム、終了後のマッチング発表が予定されています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>日時</td><td className={td}>2026年12月5日（土）第1部 11時30分〜14時30分（受付11時〜）／第2部 16時30分〜19時30分（受付16時〜）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会場</td><td className={td}>オークラレストランスカイキャロット（世田谷区太子堂4-1-1 キャロットタワー26階）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象</td><td className={td}>結婚を希望する東京都内在住・在勤・在学の方。第1部は30〜39歳、第2部は20〜39歳（開催日当日時点の年齢）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>定員</td><td className={td}>各回先着32名（男性16名・女性16名）。最小催行人数は男女各8名</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>参加料</td><td className={td}>各回3,000円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申込</td><td className={td}>2026年11月1日〜11月28日にPeatixで申し込み・決済。第1部・第2部のどちらか一方のみ。定員に達した場合はキャンセル待ちを受け付け</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>当日の持ち物</td><td className={td}>本人確認のための身分証（運転免許証・マイナンバーカードなど）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>問い合わせ・運営</td><td className={td}>世田谷区立池之上青少年交流センター 03-3413-9504（所管：子ども・若者部 子ども・若者支援課）。運営は株式会社日本仲人連盟</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              参加者同士の連絡先交換も可能と案内されています。参加条件は都内在住・在勤・在学のため、世田谷区民以外の方も対象です。申込締切日の翌日以降のキャンセルは原則として返金されない点にご注意ください。2026年11月26日時点の情報のため、空き状況は区のページと申し込みフォームでご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={SETAKON_URL} {...ext}>世田谷区「令和8年度『せたがや婚活イベント（せた婚）』の開催」（2026年11月1日更新）</a>・<a href={FUKUSHI_R8_URL} {...ext}>東京都福祉局「令和8年度 区市町村実施事業」</a>（いずれも2026年11月26日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚後に使える世田谷区の応援金（若者夫婦世帯）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              世田谷区は令和8年度から、子育て世帯や若者夫婦世帯の住宅取得・住み替えを応援する「“ずっと、世田谷。”」の事業を実施しています。若者夫婦世帯とは、転居した日において夫婦のいずれかが39歳以下である夫婦のみの世帯です（転居した日が2026年4月1日〜2027年3月31日の場合、夫婦のいずれかが1987年4月2日以降生まれ）。転居した日に夫婦でなくても、申請日時点で夫婦となっていれば対象になります。世田谷区パートナーシップ・ファミリーシップ宣誓や東京都パートナーシップ宣誓制度の関係にある方も、夫婦に含まれます。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>定住応援事業（住宅の取得）</th><th className={th}>住み替え応援事業（賃貸）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>応援金</td><td className={td}>現金30万円＋せたがやPayポイント10万ポイント</td><td className={td}>せたがやPayポイント10万ポイント</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>区内の居住期間</td><td className={td}>夫婦のいずれかが引き続き5年以上区内に在住</td><td className={td}>夫婦のいずれかが引き続き1年以上区内に在住</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>住宅の条件</td><td className={td}>2026年4月1日以降に売買契約・建築工事請負契約を結んだ区内の住宅。新耐震基準相当・50平方メートル以上</td><td className={td}>2026年4月1日以降に賃貸借契約を結んだ区内の民間賃貸住宅（公社住宅・UR賃貸住宅は対象、公的住宅・社宅等は対象外）。新耐震基準相当・最低居住面積水準以上（2人世帯は30平方メートル）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申請期限</td><td className={td} colSpan={2}>転居した日（住民票上の住所を定めた日）から90日以内。書類の不備の補正も期限内に必要</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>その他</td><td className={td} colSpan={2}>5年以上区内に住む意思があること、夫婦のいずれかに地域活動への参加意向があることなど。予算上限に達した場合は受付終了。多世代近居・同居応援事業と併用すると、定住は最大70万円相当、住み替えは最大40万円相当</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              どちらの事業も、すでに世田谷区に住んでいる方が区内で住まいを移す場合を想定した条件です。結婚を機に区外から世田谷区へ転入する場合は、夫婦のいずれかが区内の居住期間の条件を満たしているかを先にご確認ください。国の結婚新生活支援事業（新婚世帯の住居費・引越費用の補助）については、2026年11月26日に当サイトが世田谷区公式サイトを確認した範囲では案内が見当たらず、東京都福祉局の令和8年度の一覧でも立川市などに掲載され、世田谷区の掲載はありませんでした。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TEIJU_URL} {...ext}>世田谷区「“ずっと、世田谷。”子育て・若者夫婦世帯定住応援事業」（2026年11月20日更新）</a>・<a href={TEIJU_YOUKOU_URL} {...ext}>同 定住応援事業要綱（PDF）</a>・<a href={SUMIKAE_URL} {...ext}>同「子育て・若者夫婦世帯住み替え応援事業」（2026年11月20日更新）</a>・<a href={SUMIKAE_YOUKOU_URL} {...ext}>同 住み替え応援事業要綱（PDF）</a>・<a href={FUKUSHI_R8_URL} {...ext}>東京都福祉局「令和8年度 区市町村実施事業」</a>（いずれも2026年11月26日確認）。問い合わせ先は世田谷区補助金受付窓口（03-5432-2260 または 03-6379-4012）です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">世田谷区の年代別未婚率と未婚者数（令和2年国勢調査・当サイト算出）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              令和2年国勢調査の配偶関係別人口から、世田谷区・東京都特別区部・全国の未婚率を当サイトで算出しました。未婚率は「未婚者数 ÷（総数 − 配偶関係不詳）」で計算しています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年齢</th><th className={th}>世田谷区 男性</th><th className={th}>世田谷区 女性</th><th className={th}>特別区部 男性</th><th className={th}>特別区部 女性</th><th className={th}>全国 男性</th><th className={th}>全国 女性</th></tr></thead>
                <tbody>
                  {census.map((c) => (
                    <tr key={c.age} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{c.age}</td>
                      <td className={td}>{c.sM}</td>
                      <td className={td}>{c.sF}</td>
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
              世田谷区の男性の未婚率は、35歳以上の年齢階級で特別区部より5.0〜6.8ポイント低く、全国も下回っています。女性の未婚率は25〜34歳で特別区部より高く、35〜49歳では特別区部とおおむね同じ水準で、すべての年齢階級で全国を上回っています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年齢</th><th className={th}>世田谷区 未婚男性</th><th className={th}>世田谷区 未婚女性</th><th className={th}>女性が多い人数</th></tr></thead>
                <tbody>
                  {singles.map((s) => (
                    <tr key={s.age} className="border-t border-[#E5DCCF] align-top">
                      <td className={td}>{s.age}</td>
                      <td className={td}>{s.m}人</td>
                      <td className={td}>{s.f}人</td>
                      <td className={td}>{s.diff}人</td>
                    </tr>
                  ))}
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>25〜49歳 計</td><td className={td}>46,966人</td><td className={td}>54,362人</td><td className={td}>7,396人</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              世田谷区では、25〜49歳のすべての年齢階級で未婚女性が未婚男性より多く、合計で7,396人の差があります。同じ表で大田区の25〜49歳の未婚者数は男性49,489人・女性42,462人で男性が多く、同じ23区でも男女の構成が異なります。ただし、国勢調査の未婚者数は区内に住む方の人数で、婚活の相手は区内に限られないため、出会いやすさを直接示すものではありません。
            </p>
            <p>
              また、世田谷区は配偶関係が「不詳」の方の割合が高く、25〜29歳の男性では34.6%（特別区部25.6%、全国10.3%）です。未婚率は不詳を除いて計算しているため、実際の値とずれる可能性があります。2020年10月時点の値であり、現在の状況とは異なる可能性がある点もご留意ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CENSUS_URL} {...ext}>総務省統計局「令和2年国勢調査 人口等基本集計」第4-3表 男女，年齢（5歳階級），配偶関係別人口（e-Stat、Excel）</a>（2026年11月26日確認）。未婚率・合計・差・不詳の割合は同表の国籍総数の値から当サイトが算出しました。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">東京都のAIマッチングシステム「TOKYO縁結び」</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              せた婚は開催日が決まったイベント型の支援のため、継続してお相手を探す場合は東京都の「TOKYO縁結び」を併用する方法があります。価値観診断テストの結果をもとにAIが相性の良い方を紹介するほか、希望条件で検索することもでき、お見合いの日時・場所はシステム上で調整できます。完全オンラインのサービスで実店舗はなく、専任の担当者もつきません。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会条件</td><td className={td}>結婚を希望する18歳以上の独身の方／東京都内に在住・在勤・在学の方／スマートフォンやパソコンを自力で操作できる方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>費用</td><td className={td}>登録料11,000円（税込）・2年間。月会費・お見合い料・成婚料はなし。更新時は再度11,000円と書類の再提出が必要</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>写真付き本人確認書類、独身証明書（本籍地の区市町村で取得）、年収を確認できる書類、プロフィール用写真、誓約書</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会員数・男女比</td><td className={td}>累計入会申込数 約42,000人、男女比は男性61%・女性39%（いずれも2026年11月15日時点）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>問い合わせ</td><td className={td}>TOKYOふたりSTORY AIマッチングシステム事務局 03-6682-7531（平日12時〜20時、土日10時〜18時、年末年始休み）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              TOKYO縁結びの会員は男性が6割を占めます。前の節のとおり世田谷区内では未婚女性が未婚男性より多いため、区内だけでなく都内全域の会員からお相手を探せる点は、特に女性にとって選択肢を広げる手段になります。累計入会申込数は申し込みの累計で、現在活動中の会員数ではありません。
            </p>
            <p>
              東京都は2026年6月8日〜2027年1月31日に、TOKYO縁結びの会員が結婚相談所のサービスを無料で体験できる「お試し結婚相談」を実施しています。定員は888人（毎月111人・先着順）で、婚活相談・プロフィール作成・無料お見合い1回のAコース（各結婚相談所の入会資格を満たす方が対象、お見合い後の交際サポートは対象外）と、婚活相談・プロフィール作成のBコースがあります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={ENMUSUBI_URL} {...ext}>TOKYOふたりSTORY「AIマッチングシステム（TOKYO縁結び）」</a>・<a href={ENMUSUBI_DATA_URL} {...ext}>同「会員データ」（PDF、2026年11月15日時点）</a>・<a href={ENMUSUBI_FAQ_URL} {...ext}>同「よくあるご質問」</a>・<a href={PRESS_OTAMESHI_URL} {...ext}>東京都 報道発表（2026年5月25日）</a>（いずれも2026年11月26日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な支援と民間の結婚相談所の費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>お相手の探し方</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>せた婚（世田谷区）</td><td className={td}>1回3,000円（2026年12月5日の回）</td><td className={td}>1日限りのイベントでの個別トーク・フリータイム・マッチング発表</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>TOKYO縁結び（東京都）</td><td className={td}>11,000円/2年（1年あたり5,500円・当サイト算出）。月会費・お見合い料・成婚料なし</td><td className={td}>AIによる紹介・会員自身の検索。専任担当なし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>担当者によるお相手の提案や交際中の相談を行うところが多い</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用を抑えて始める場合は、せた婚で対面の出会いの機会をつくりつつ、TOKYO縁結びで継続的にお相手を探す方法が目安になります。お相手の提案や交際中の助言を継続して受けたい方は、お試し結婚相談で結婚相談所の支援を体験したうえで、民間の結婚相談所への入会を検討する順序が考えられます。民間の結婚相談所は料金体系が各社で大きく異なるため、入会前に1年間の総額を確認することをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。東京都内の結婚相談所は<Link href="/area/tokyo/" className="underline">東京の結婚相談所一覧</Link>で整理しています。公的な支援の料金は、本ページの各出典（2026年11月26日確認）によります。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/kitakyushu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">北九州市の婚活支援</Link>
            <Link href="/knowledge/kurashiki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">倉敷市の婚活支援（くら婚）</Link>
            <Link href="/knowledge/tome/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">登米市の婚活支援（とめ婚）</Link>
            <Link href="/knowledge/shiojiri/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">塩尻市の結婚相談（NAGANO ai MATCH窓口）</Link>
            <Link href="/knowledge/ota/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">大田区の結婚相談・婚活支援</Link>
            <Link href="/area/tokyo/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">東京の結婚相談所一覧</Link>
            <Link href="/area/yokohama/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">横浜の結婚相談所</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/how-to-choose/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の選び方</Link>
            <Link href="/knowledge/tekireiki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚適齢期と平均初婚年齢</Link>
            <Link href="/knowledge/40s/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">42歳・40代の婚活の現状</Link>
            <Link href="/compare/30s/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">30代向け結婚相談所の比較</Link>
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
