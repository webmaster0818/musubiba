import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-28 確認）。
// ・加西市・丹波市・多可町合同恋活イベント（2027年3月7日13:00〜16:00・あすみる（多可町）・概ね20〜39歳の独身男女で3市町への移住定住を考えている方・
//   男女各12名・申込多数は抽選・参加費無料・申込2027年1月1日〜2月14日・申込フォームは1月1日公開・内容・問合せ先）：
//   加西市「加西市・丹波市・多可町合同恋活イベントを開催します！！」（2026年11月26日更新）
// ・加西市新婚世帯向け家賃補助（月額上限12,000円・最長36か月・婚姻届出日から3年以内の申請・夫婦の合計年齢80歳以下・所得制限なし・
//   対象外の住宅・交付時期・ふるさと振興課）：加西市「加西市では新婚世帯の家賃補助を実施しています（所得制限なし）」（2025年4月1日更新）
// ・加西市結婚新生活支援事業（令和8年1月1日〜令和9年3月31日に婚姻届・夫婦の令和7年分総所得500万円未満・婚姻日に夫婦とも39歳以下・
//   上限30万円（夫婦とも29歳以下は60万円）・対象経費・申請受付期間・市の相談・支援プログラムの受講が必須）：
//   加西市「令和8年度 加西市結婚新生活支援事業」（2026年4月1日更新）と同ページ掲載PDF「加西市が実施する相談・支援プログラム」
// ・県の結婚新生活支援の制度概要、令和7年度の県内実施市町（加西市を含む・県の表記は「実施市町数：26市町」）、
//   過去の実施状況（加西市は令和3〜6年度に掲載）：兵庫県「結婚に伴う新生活支援事業について」（2026年1月27日更新）
// ・加西市若者定住促進住宅補助（借入額の5%・上限50万円・合計年齢80歳以下（独身は40歳以下）または未就学児のいる世帯）：
//   加西市「若者世帯の持ち家取得（新築・購入）を補助します」（2025年4月1日更新）
// ・加西市オリジナル婚姻届（複写式2枚組・市花サルビア）と記念撮影用フレーム（市民課・平日9:00〜16:30）：
//   加西市「オリジナル婚姻届と記念撮影用フォトフレームを作成しました」（2026年11月24日更新）
// ・婚姻届の届出先・必要なもの・市民課の電話番号：加西市「婚姻届」（/site/kekkon/）
// ・人口（年度末・外国人を含む）、出生・死亡・婚姻・離婚（婚姻・離婚は加西市に本籍を置く者）、合計特殊出生率（日本人のみ）：
//   「加西市統計書（令和7年度版）」人口編（令和8年3月作成）
// ・ひょうご出会いサポートセンターの北播磨イベント情報に掲載された加西市内の催し（2026年2月22日「愛され塾＆交流会」・
//   主催 加西市出会いサポートセンター／2026年7月19日 入会前相談会＆出張登録会・相談会）：同センター イベント情報（北播磨）のフィード（2026-11-28 取得）
// ・はばタン会員登録料の補助自治体（令和8年度・9市町、加西市は含まれない）：同センター お知らせ「令和8年度 はばタン会員登録料 補助金のお知らせ」
// ・加西市公式サイトの組織別ページ（50課・室等の一覧に掲載された約1,700ページ）で、市が運営する結婚相談窓口・はばタン会員登録料補助の案内は確認できず（2026-11-28 時点）
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const CITY = "https://www.city.kasai.hyogo.jp";
const CITY_KOIKATSU_URL = `${CITY}/soshiki/6/65426.html`;
const CITY_YACHIN_URL = `${CITY}/site/iju/1534.html`;
const CITY_SHINSEIKATSU_URL = `${CITY}/site/iju/14106.html`;
const CITY_PROGRAM_PDF = `${CITY}/uploaded/attachment/35074.pdf`;
const CITY_WAKAMONO_URL = `${CITY}/site/iju/1536.html`;
const CITY_KONINTODOKE_URL = `${CITY}/site/kekkon/1004.html`;
const CITY_KEKKON_URL = `${CITY}/site/kekkon/`;
const CITY_TOKEI_URL = `${CITY}/soshiki/8/1982.html`;
const CITY_TOKEI_JINKO_PDF = `${CITY}/uploaded/attachment/33026.pdf`;
const PREF_SHINSEIKATSU_URL = "https://web.pref.hyogo.lg.jp/kf11/kekkonnshien.html";
const HABATAN_SUBSIDY_URL =
  "https://habatan-hyogo.jp/blogs/news-topics/%E4%BB%A4%E5%92%8C8%E5%B9%B4%E5%BA%A6-%E3%81%AF%E3%81%B0%E3%82%BF%E3%83%B3%E4%BC%9A%E5%93%A1%E7%99%BB%E9%8C%B2%E6%96%99-%E8%A3%9C%E5%8A%A9%E9%87%91%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B";
const HABATAN_KITA_URL = "https://habatan-hyogo.jp/blogs/event/tagged/%E5%8C%97%E6%92%AD%E7%A3%A8";
const EV = "https://habatan-hyogo.jp/blogs/event/";
const EV_KASAI_0222 = `${EV}%E5%8A%A0%E8%A5%BF%E5%B8%82%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88-2-22-%E5%9C%9F-%E3%81%AE%E3%81%94%E6%A1%88%E5%86%85`;
const EV_KASAI_0719 = `${EV}%E5%8A%A0%E8%A5%BF%E5%B8%82-%E3%81%B2%E3%82%87%E3%81%86%E3%81%94%E5%87%BA%E4%BC%9A%E3%81%84%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E5%87%BA%E5%BC%B5%E7%99%BB%E9%8C%B2%E7%9B%B8%E8%AB%87%E4%BC%9A-7-19-%E6%97%A5`;

// 「加西市統計書（令和7年度版）」2 人口（1．世帯と人口の推移、2．人口動態と婚姻数、4．合計特殊出生率）から当サイトで転記
const stats: { year: string; pop: number; births: number; marriages: number; tfr: number }[] = [
  { year: "平成27年（2015年）", pop: 45171, births: 270, marriages: 626, tfr: 1.35 },
  { year: "平成30年（2018年）", pop: 44302, births: 250, marriages: 571, tfr: 1.28 },
  { year: "令和2年（2020年）", pop: 43252, births: 190, marriages: 490, tfr: 1.17 },
  { year: "令和3年（2021年）", pop: 42494, births: 174, marriages: 467, tfr: 0.91 },
  { year: "令和4年（2022年）", pop: 42093, births: 197, marriages: 491, tfr: 1.11 },
  { year: "令和5年（2023年）", pop: 41792, births: 179, marriages: 451, tfr: 1.12 },
  { year: "令和6年（2024年）", pop: 41244, births: 184, marriages: 513, tfr: 1.05 },
];

export const metadata: Metadata = {
  title: "加西市の婚活支援｜2市1町合同恋活イベント（2027年3月・無料）と新婚家賃補助月1.2万円、民間との費用比較",
  description:
    "加西市の婚活と結婚後の支援を公式情報で整理しています。2027年3月7日の加西市・丹波市・多可町合同恋活イベント（無料・男女各12名）、新婚世帯向け家賃補助（月1.2万円・最長36か月）、結婚新生活支援（上限30万円）、民間の結婚相談所との費用差をまとめています。",
  alternates: { canonical: "/knowledge/kasai/" },
};

const faqs = [
  {
    q: "加西市が開く婚活イベントはありますか？",
    a: "加西市・丹波市・多可町の2市1町による合同恋活イベントが、2027年3月7日（日）13時〜16時に多可町の「あすみる」で初めて開かれます。対象は概ね20〜39歳の独身男女で、将来3市町への移住定住を考えている方です。定員は男女各12名（申込多数の場合は抽選）、参加費は無料です。申込期間は2027年1月1日（金）〜2月14日（日）で、申込フォームは1月1日に公開されます（2026年11月28日時点の加西市の案内による）。",
  },
  {
    q: "加西市に市営の結婚相談所はありますか？",
    a: "当サイトでは、2026年11月27〜28日に加西市公式サイトの組織別ページを確認しましたが、市が運営する1対1の結婚相談・お見合いの窓口の案内は確認できませんでした（2026年11月28日時点）。加西市の婚姻届のページからは、兵庫県の「ひょうご出会いサポートセンター」へのリンクが案内されています。最新の状況は加西市役所（代表 0790-42-1110）でご確認ください。",
  },
  {
    q: "ひょうご出会いサポートセンターの登録料に加西市の補助はありますか？",
    a: "センターが公表している令和8年度のはばタン会員登録料の補助自治体（姫路市・加古川市・西脇市・多可町・宍粟市・養父市・高砂市・上郡町・神河町の9市町）に加西市は含まれていません。加西市の公式サイトでも、2026年11月28日時点で登録料補助の案内は確認できませんでした。",
  },
  {
    q: "加西市の新婚世帯向け家賃補助と結婚新生活支援は、どう違いますか？",
    a: "新婚世帯向け家賃補助は、市内の民間賃貸住宅に住む新婚世帯に月額12,000円を上限に最長36か月補助する制度で、婚姻届出日から3年以内の申請、夫婦の合計年齢80歳以下が条件です（所得制限なし）。結婚新生活支援は、令和8年1月1日〜令和9年3月31日に婚姻届を出し、夫婦の総所得が合計500万円未満、婚姻日に夫婦とも39歳以下の世帯に、敷金・礼金・家賃・引越費用・リフォーム費用を上限30万円（夫婦とも29歳以下は60万円）まで補助する制度です。どちらも他の公的制度による住居費等の補助を受けていないことが要件に含まれているため、両方を利用できるかは事前にふるさと振興課（0790-42-8764）でご確認ください。",
  },
  {
    q: "加西市の結婚新生活支援を受けるために必要な講座とは何ですか？",
    a: "令和8年度から、加西市が案内する相談・支援プログラムのいずれかを申請前に受講することが必須の要件になりました。県が作成したライフデザインやプレコンセプションケアの動画視聴、医療機関への妊娠・出産に関する相談、両親学級（パパママクラブ）、共家事・共育ての動画視聴などから選び、申請書に講座名と受講日を記載します。詳細は市の結婚新生活支援のページに掲載されているPDFでご確認ください。",
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
  headline: "加西市の婚活支援：2市1町合同恋活イベント、市内で開かれた婚活の催し、新婚世帯向け家賃補助と結婚新生活支援、婚姻数の推移と民間の結婚相談所との比較",
  description:
    "加西市・丹波市・多可町の合同恋活イベント、加西市内で開かれた婚活の催し、新婚世帯向け家賃補助・結婚新生活支援・若者定住促進住宅補助、市の統計書による婚姻数の推移、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-28",
  dateModified: "2026-11-28",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/kasai/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "加西市の婚活支援", item: "https://mu-su-bi-ba.com/knowledge/kasai/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeKasai() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "加西市の婚活支援" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          加西市で婚活する方へ：2市1町合同恋活イベント、市内で開かれた婚活の催し、新婚世帯向けの補助制度と民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月28日（加西市の事業・補助制度・統計は同日に加西市公式サイト、県の事業は兵庫県公式サイト、県のセンターのイベントと補助自治体はひょうご出会いサポートセンター公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />加西市の公的な支援は、2市1町の合同恋活イベントと新婚世帯の住まいの補助が中心です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>加西市・丹波市・多可町の2市1町による<strong>合同恋活イベント</strong>が、<strong>2027年3月7日（日）</strong>に多可町で初めて開かれます。概ね20〜39歳の独身男女が対象で、<strong>男女各12名・参加費無料</strong>、申込みは2027年1月1日〜2月14日です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>結婚後の住まいについては、<strong>新婚世帯向け家賃補助（月額上限12,000円・最長36か月・所得制限なし）</strong>と、<strong>結婚新生活支援（上限30万円、夫婦とも29歳以下は60万円）</strong>が用意されています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>市が運営する1対1の結婚相談窓口と、ひょうご出会いサポートセンターの<strong>登録料補助</strong>は、2026年11月28日時点で確認できませんでした。継続的な紹介を受ける公的な手段は、県のセンター（はばタン会員 年5,000円）が中心です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>市の統計書では、加西市に本籍を置く方の婚姻数は平成27年の626から令和6年の513に、合計特殊出生率は1.35から1.05に下がっています。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">加西市・丹波市・多可町合同恋活イベント（2027年3月7日）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              加西市は、丹波市・多可町と合同で、「小さな遠距離、はじめませんか？ ～寄り道気分で まちあわせ～」と題した恋活イベントを初めて開催します。加西市の担当はまちづくり課です。市の案内（2026年11月26日更新）の内容は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><th className={`${th} bg-[#FAF7F2] text-left w-1/4`}>開催日時</th><td className={td}>2027年3月7日（日）13:00〜16:00（受付12:30〜）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><th className={`${th} bg-[#FAF7F2] text-left`}>会場</th><td className={td}>あすみる（多可町生涯学習まちづくりプラザ）1階 大会議室（多可郡多可町中区岸上281-17）。駐車場29台</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><th className={`${th} bg-[#FAF7F2] text-left`}>対象</th><td className={td}>概ね20〜39歳の独身男女で、将来的に加西市・丹波市・多可町への移住定住を考えている方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><th className={`${th} bg-[#FAF7F2] text-left`}>定員</th><td className={td}>男女各12名（計24名）。申込多数の場合は抽選</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><th className={`${th} bg-[#FAF7F2] text-left`}>内容</th><td className={td}>自己紹介、ミニゲーム大会、1対1トークタイムなど。マッチング結果は当日、個別に封筒でお知らせ（結果の公表なし）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><th className={`${th} bg-[#FAF7F2] text-left`}>参加費</th><td className={td}>無料（飲み物の提供はないため必要に応じて持参）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><th className={`${th} bg-[#FAF7F2] text-left`}>申込期間</th><td className={td}>2027年1月1日（金）〜2月14日（日）。申込フォームは1月1日から公開</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><th className={`${th} bg-[#FAF7F2] text-left`}>持参物</th><td className={td}>顔写真付きの本人確認書類（マイナンバーカード・運転免許証など）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><th className={`${th} bg-[#FAF7F2] text-left`}>問合せ先</th><td className={td}>加西市 まちづくり課（0790-42-8706）／丹波市 こども福祉課（0790-88-5750）／多可町 定住促進課（0795-32-4776）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              2026年11月28日時点では申込受付前です。会場は加西市内ではなく多可町の施設です。対象が「移住定住を考えている方」とされているため、3市町以外にお住まいの方も、条件に当てはまるかどうかを問合せ先でご確認のうえお申し込みください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_KOIKATSU_URL} {...ext}>加西市「加西市・丹波市・多可町合同恋活イベントを開催します！！」（2026年11月26日更新）</a>（2026年11月28日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">2026年に加西市内で開かれた婚活の催し（いずれも終了）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              ひょうご出会いサポートセンターのイベント情報（北播磨）には、2026年に加西市内で開かれた次の2件が掲載されています。いずれも会場は北条町北条の「アスティアかさい」で、すでに終了しています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日・名称</th><th className={th}>主催</th><th className={th}>対象・定員</th><th className={th}>内容・参加費</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={EV_KASAI_0222} {...ext}>2026年2月22日（日）「愛され塾＆交流会」</a>（終了）</td><td className={td}>加西市出会いサポートセンター</td><td className={td}>25〜49歳の独身男女・定員20名</td><td className={td}>婚活スキルアップセミナー（10:00〜11:30）と交流会（1対1トークタイム・フリータイム、マッチングなし）。無料</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={EV_KASAI_0719} {...ext}>2026年7月19日（日）入会前相談会＆出張登録会・相談会 in 加西</a>（終了）</td><td className={td}>ひょうご出会いサポートセンター</td><td className={td}>入会を検討している方（家族のみの参加も可）、新規登録・更新をする方、活動中の会員</td><td className={td}>入会前相談会（予約不要・約30分）、出張登録会（要予約・約1時間）、活動相談会（要予約・約40分）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              2月22日の催しの主催者「加西市出会いサポートセンター」について、当サイトでは2026年11月28日時点で、加西市公式サイトに運営主体や活動内容の案内を確認できませんでした。問合せ先は、表内のイベントページでご確認ください。
            </p>
            <p>
              兵庫県のひょうご出会いサポートセンターは、加西市にお住まい・お勤めの方も利用できます。はばタン会員の登録手数料は年5,000円ですが、センターが公表している令和8年度の登録料補助自治体（9市町）に加西市は含まれていません。センターの料金・入会条件・必要書類は<Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンターの解説</Link>で、北播磨の他市で開かれるイベントの掲載状況は<Link href="/knowledge/ono/" className="text-[#A08447] underline">小野市の結婚支援</Link>と<Link href="/knowledge/miki/" className="text-[#A08447] underline">三木市の婚活（みきで愛サポートセンター）</Link>で整理しています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={HABATAN_KITA_URL} {...ext}>ひょうご出会いサポートセンター イベント情報（北播磨）</a>と表内の各イベントページ・<a href={HABATAN_SUBSIDY_URL} {...ext}>お知らせ「令和8年度 はばタン会員登録料 補助金のお知らせ」</a>（いずれも2026年11月28日確認）。センターに掲載されていない催しは含まれません。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">加西市の新婚世帯向けの補助制度</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              加西市の公式サイトの「結婚」のページには、婚姻届の案内とあわせて、新婚世帯や若者世帯向けの補助制度が掲載されています。いずれも担当はふるさと振興課（0790-42-8764）です。主な内容を当サイトで次のとおり整理しました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>制度</th><th className={th}>主な対象</th><th className={th}>補助額</th><th className={th}>申請の時期</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={CITY_YACHIN_URL} {...ext}>新婚世帯向け家賃補助</a></td><td className={td}>市内の民間賃貸住宅に住む新婚世帯。夫婦の満年齢の合計80歳以下（再婚を含む）。所得制限なし。市営・県営住宅、社宅、3親等以内の親族が所有する住宅などは対象外</td><td className={td}>実質家賃負担額（家賃から住宅手当を差し引いた額）について月額12,000円が上限。最長36か月</td><td className={td}>婚姻届出日から3年以内。補助金の請求は年2回（10月・4月）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={CITY_SHINSEIKATSU_URL} {...ext}>結婚新生活支援（令和8年度）</a></td><td className={td}>令和8年1月1日〜令和9年3月31日に婚姻届を提出し、夫婦の令和7年分の総所得金額が合計500万円未満、婚姻日に夫婦とも39歳以下の世帯。市の相談・支援プログラムの受講が必須</td><td className={td}>新居の敷金・礼金・仲介手数料・家賃、引越費用、リフォーム費用の合計で上限30万円（婚姻日に夫婦とも29歳以下は上限60万円）</td><td className={td}>令和8年4月1日〜令和9年3月31日（窓口で受付）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={CITY_WAKAMONO_URL} {...ext}>若者定住促進住宅補助</a></td><td className={td}>市内に住宅を新築・購入し、夫婦の合計年齢80歳以下（独身の場合は40歳以下）または未就学の子どものいる世帯。借入期間10年以上の住宅ローンがあり、自治会に加入していることなど</td><td className={td}>借入額の5%（上限50万円）</td><td className={td}>初めて固定資産税が課税される年度の4月1日〜翌年3月31日</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              当サイトの計算では、新婚世帯向け家賃補助を上限額（月12,000円）で36か月受けた場合の合計は最大432,000円です（実際の額は家賃と住宅手当により異なります）。結婚新生活支援と家賃補助は、いずれも「他の公的制度による家賃（住居費）の補助を受けていないこと」が要件に含まれているため、両方を利用できるかどうかは申請前にふるさと振興課でご確認ください。
            </p>
            <p>
              結婚新生活支援は、令和8年度から国の事業が「結婚・妊娠・共育ての相談機会提供・支援プログラム」と改称されたことに伴い、市が案内する講座のいずれかの受講・相談が必須の要件になりました。県作成のライフデザインやプレコンセプションケアの動画視聴、医療機関への妊娠・出産に関する相談、両親学級（パパママクラブ）、共家事・共育ての動画視聴などから選び、申請書に講座名と受講日を記載します。
            </p>
            <p>
              兵庫県の一覧では、加西市は令和3年度から令和6年度までの結婚新生活支援の実施市町に掲載されており、令和7年度の実施市町にも含まれています。県の制度では、対象は世帯所得500万円未満で夫婦とも婚姻日に39歳以下の世帯、1世帯あたりの上限は夫婦とも29歳以下の世帯が60万円、それ以外が30万円とされています。なお、北播磨で隣接する小野市は、県の令和7年度の実施市町に含まれていません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_YACHIN_URL} {...ext}>加西市「加西市では新婚世帯の家賃補助を実施しています（所得制限なし）」（2025年4月1日更新）</a>・<a href={CITY_SHINSEIKATSU_URL} {...ext}>加西市「令和8年度 加西市結婚新生活支援事業」（2026年4月1日更新）</a>・<a href={CITY_PROGRAM_PDF} {...ext}>「加西市が実施する相談・支援プログラム」（PDF）</a>・<a href={CITY_WAKAMONO_URL} {...ext}>加西市「若者世帯の持ち家取得（新築・購入）を補助します」（2025年4月1日更新）</a>・<a href={PREF_SHINSEIKATSU_URL} {...ext}>兵庫県「結婚に伴う新生活支援事業について」（2026年1月27日更新）</a>（いずれも2026年11月28日確認）。補助金は税法上の所得として申告が必要になる場合があります。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">加西市の婚姻数・出生数の推移（市の統計書より）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              「加西市統計書（令和7年度版）」の人口編に掲載されている数値から、当サイトで主な年を抜粋しました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年</th><th className={th}>人口（年度末）</th><th className={th}>出生</th><th className={th}>婚姻（加西市に本籍を置く方）</th><th className={th}>合計特殊出生率</th></tr></thead>
                <tbody>
                  {stats.map((s) => (
                    <tr key={s.year} className="border-t border-[#E5DCCF] align-top"><td className={td}>{s.year}</td><td className={td}>{s.pop.toLocaleString()}人</td><td className={td}>{s.births}</td><td className={td}>{s.marriages}</td><td className={td}>{s.tfr.toFixed(2)}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              平成27年と令和6年を比べると、人口は約9%、出生は約32%、婚姻は約18%減っています（いずれも当サイト計算）。令和6年の合計特殊出生率は1.05で、同じ統計書に掲載されている兵庫県（1.23）と国（1.15）を下回っています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_TOKEI_JINKO_PDF} {...ext}>「加西市統計書（令和7年度版）」人口（PDF）</a>（<a href={CITY_TOKEI_URL} {...ext}>加西市統計書（令和7年度版）</a>、2026年3月31日更新）（2026年11月28日確認）。統計書の注記のとおり、婚姻は加西市に本籍を置く方を集計したもので、市内に住む方の婚姻件数とは一致しません。人口は外国人を含み、合計特殊出生率は日本人のみで計算されています。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な支援と民間の結婚相談所の費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>費用</th><th className={th}>お相手の探し方</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>加西市・丹波市・多可町合同恋活イベント</td><td className={td}>無料</td><td className={td}>イベントでのマッチング（2027年3月に初開催）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンター（はばタン会員）</Link></td><td className={td}>5,000円/年（加西市の補助なし）</td><td className={td}>会員自身の検索・お見合いの申込み</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              加西市の公的な婚活支援は、合同恋活イベントのように費用を抑えて参加できる一方、開催回数が限られます。継続してお相手を探す公的な手段は県のセンターで、担当者による継続的な紹介や交際中の助言を重視する場合は民間の結婚相談所が選択肢になります。結婚が決まった後は、市の家賃補助や結婚新生活支援で住まいの費用を抑えられる場合があるため、婚活の費用と合わせて検討するのが目安です。加西市からは、神戸・姫路方面の結婚相談所や、自宅から活動できるオンライン型の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。公的な支援の費用は、各公式サイトで2026年11月28日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">結婚が決まった後の手続き（婚姻届とオリジナル婚姻届）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              加西市での婚姻届は、婚姻される夫と妻が届出人となり、婚姻届（成年の証人2名が必要）と本人確認書類を持参して提出します。令和6年3月1日から戸籍謄本の添付は不要になりました。平日9時〜16時30分は市役所1階の市民課、夜間・休日は市役所東玄関の宿直室で受け付けています。
            </p>
            <p>
              加西市は、複写式2枚組の「加西市オリジナル婚姻届」を市民課で配布しています。1枚目は全国の市区町村に提出でき、2枚目は市花のサルビアをモチーフにした記念の控えです（婚姻届受理証明書の代わりにはなりません）。市民課には気球をイメージした記念撮影用フレームも設置されており、平日9時〜16時30分は職員が撮影を手伝います（撮影機材は持参）。問い合わせ先は市民課（0790-42-8720）です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_KEKKON_URL} {...ext}>加西市「婚姻届」</a>・<a href={CITY_KONINTODOKE_URL} {...ext}>加西市「オリジナル婚姻届と記念撮影用フォトフレームを作成しました」（2026年11月24日更新）</a>（いずれも2026年11月28日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/ogaki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">大垣市の婚活支援</Link>
            <Link href="/knowledge/tomakomai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">苫小牧市の婚活支援</Link>
            <Link href="/knowledge/jiyugaoka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">自由が丘の結婚相談所</Link>
            <Link href="/knowledge/joetsu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">上越市の婚活支援</Link>
            <Link href="/knowledge/ono/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">小野市の結婚支援</Link>
            <Link href="/knowledge/hyogo-deai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ひょうご出会いサポートセンター（兵庫県）</Link>
            <Link href="/knowledge/miki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">三木市の婚活（みきで愛サポートセンター）</Link>
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
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
