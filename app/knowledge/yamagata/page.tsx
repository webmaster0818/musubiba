import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-21 確認）。
// ・センターの設立（平成27年4月1日、山形県・県内全市町村・商工団体等で設立）、旧称（やまがた出会いサポートセンターを令和3年4月1日改称）、構成団体、事務局、事業内容：やまがたハッピーサポートセンター「やまがたハッピーサポートセンターとは」
// ・構成団体（山形県・35市町村・経済団体等）、所在地（山形センター・庄内・最上・置賜支所）：山形県「やまがたハッピーサポートセンター総会を開催します」（令和8年6月5日 報道発表・PDF）
// ・会員登録者数662人・成婚組数（報告任意・累計）475組（令和8年10月末現在）、各センター・支所の所在地・電話・開所時間：同 公式トップページ
// ・Aiナビやまがたの仕組み、利用条件（山形県での結婚を希望する18歳以上の独身）、料金（1年会員5,000円・更新時3,000円／2年会員7,000円）、登録に必要なもの、利用の流れ：同「Aiナビやまがた マッチングTOP」
// ・料金改定（令和8年9月15日から。9月14日までは2年会員10,000円）、更新時の料金の適用ルール：同「料金改定のお知らせ」（PDF）・お知らせ「『Ａｉナビやまがた』料金改定のお知らせ」（2026年9月15日）
// ・自宅閲覧45分/日、センター閲覧30分、申込結果は5日以内、AIのおすすめ（毎週月曜・最大3名）、お見合い30分、プレ交際最大60日・3名まで、本格交際は1人、交際状況の確認：同「ご利用の流れ」
// ・県外在住者の登録可否、企業会員割（3,000円割引）、お友達割の終了、市町村の登録料補助、センターはお相手の紹介を行わない、休会時の返金なし：同「よくあるご質問」
// ・Aiナビやまがた導入前後のお見合い件数（R4：541件→R5〜6平均720件/年）・交際成立組数（243組→292組/年）：山形県「市町村と連携した結婚支援に関する取組みについて」（資料4・PDF）
// ・やまがた縁結びたい（約55の個人・団体、ボランティア仲人、相談方法）：同「やまがた縁結びたい」ページ
// ・縁結びたいの登録対象（営利の結婚相談業者は対象外）、謝礼の請求不可：山形県「やまがた縁結びたい」チラシ（PDF）
// ・縁結びたいによる結婚相談会（無料・予約制・各回4組・1組45分程度・親御さん等の出席可、会場）：同「結婚相談会 令和8年度相談日程表（10月〜1月）山形」（PDF）
// ・市町村の結婚支援（35市町村の担当窓口・取組み概要、令和8年4月1日現在）：同「市町村結婚支援担当窓口」。登録料補助21市町・結婚相談所費用の補助6市町は当サイトが掲載内容を数えた値
// ・長野県・佐賀県の料金：当サイト /knowledge/nagano/・/knowledge/saga/ の確認内容
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const TOP_URL = "https://www.dsc-yamagata.jp/";
const CENTER_URL = "https://www.dsc-yamagata.jp/center/";
const MATCHING_URL = "https://www.yamagata-hsc.jp/matching/index.php";
const FLOW_URL = "https://www.yamagata-hsc.jp/matching/flow.php";
const PRICE_URL = "https://www.yamagata-hsc.jp/sp/matching/user/pdf/priceplan.pdf";
const PRICE_NEWS_URL = "https://www.dsc-yamagata.jp/2026/09/15/%e3%80%8c%ef%bd%81%ef%bd%89%e3%83%8a%e3%83%93%e3%82%84%e3%81%be%e3%81%8c%e3%81%9f%e3%80%8d%e6%96%99%e9%87%91%e6%94%b9%e5%ae%9a%e3%81%ae%e3%81%8a%e7%9f%a5%e3%82%89%e3%81%9b/";
const FAQ_URL = "https://www.dsc-yamagata.jp/faq/";
const ENMUSUBI_URL = "https://www.dsc-yamagata.jp/matching/";
const SOUDANKAI_URL = "https://www.dsc-yamagata.jp/wp-content/uploads/2023/12/2610matching_yamagata.pdf";
const MADOGUCHI_URL = "https://www.dsc-yamagata.jp/madoguchi/";
const PREF_PRESS_URL = "https://www.pref.yamagata.jp/documents/52698/hscsoukai_press.pdf";
const PREF_SHIRYO_URL = "https://www.pref.yamagata.jp/documents/50242/04kosodate_r7_2nd.pdf";
const PREF_ENMUSUBI_URL = "https://www200.pref.yamagata.jp/documents/2510/chirashi.pdf";

const members = 662;
const marriages = 475;

const offices = [
  { name: "山形センター", addr: "山形市本町2-4-18 ニーズビル2F／023-687-1972", hours: "月・火・金・土・日・祝 9:00〜18:00、水・木 11:00〜20:00" },
  { name: "庄内支所", addr: "鶴岡市錦町13-28 スイングII／0235-64-8895", hours: "月・火・土・日・祝 9:00〜18:00、水 10:00〜19:00" },
  { name: "最上支所", addr: "新庄市若葉町1-39／0233-29-8380", hours: "木・金・土 10:00〜19:00" },
  { name: "置賜支所", addr: "米沢市大町5-1-29 Aoiビル2F北／0238-27-7190", hours: "木・金・土 10:00〜19:00" },
];

const hscSubsidyCount = 21;
const agencySubsidyCount = 6;
const municipalityCount = 35;

const agencySubsidies = [
  { city: "寒河江市", detail: "結婚相談所初期費用補助（上限3万円）、結婚相談所への成婚料補助（上限10万円）。センター登録費用補助（上限1万円）もあり" },
  { city: "山辺町", detail: "婚活支援補助金（センター登録料補助、結婚相談所入会金補助）" },
  { city: "鮭川村", detail: "センターをはじめ、アプリおよび結婚相談所の登録補助" },
  { city: "米沢市", detail: "センター入会登録料および民間結婚相談所初期費用の半額補助" },
  { city: "高畠町", detail: "センターや県内の民間結婚相談所の入会金・登録料等の初期費用を補助（上限2万円）。県内に事業所がある結婚相談所の成婚料を補助（成婚料の2分の1または10万円のいずれか低い額。退会後6か月以内の入籍・町内居住などの条件あり）" },
  { city: "飯豊町", detail: "結婚相談所等の初期費用の2分の1または5千円のいずれか低い方を助成" },
];

export const metadata: Metadata = {
  title: "山形県で結婚相談所を探す方へ｜県の「Aiナビやまがた」は1年5,000円、会員662人・成婚475組と、市町村の登録料補助・民間との費用比較",
  description:
    "山形県の「やまがたハッピーサポートセンター」のAIマッチングシステム「Aiナビやまがた」は、2026年9月15日から1年会員5,000円・2年会員7,000円です。会員662人・成婚475組（2026年10月末）、利用条件と必要書類、登録料を補助する21市町、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/yamagata/" },
};

const faqs = [
  {
    q: "Aiナビやまがたの料金はいくらですか？",
    a: "令和8年9月15日から、1年会員は新規登録時5,000円（1年会員を継続して更新する場合は3,000円）、2年会員は7,000円です。それ以前の料金は2年会員10,000円でした。有効期間が過ぎると自動的に退会となり、結婚した場合は退会扱いで、退会時の返金はありません（やまがたハッピーサポートセンター「Aiナビやまがた」・「料金改定のお知らせ」）。",
  },
  {
    q: "山形県外に住んでいても登録できますか？",
    a: "18歳以上の独身の方で、山形県での結婚を望む方（将来的に山形県への移住を考えている方など）であれば、県外在住の方も登録できます。この場合、転勤の予定、出身地、移住相談の有無などを確認することがあると案内されています（やまがたハッピーサポートセンター「よくあるご質問」）。",
  },
  {
    q: "センターに登録すると、お相手を紹介してもらえますか？",
    a: "センターではお相手の紹介は行っておらず、会員がスマートフォンやセンターの専用タブレットでお相手を探します。閲覧できるのは、お互いの希望条件が近い方とAIがおすすめする方のプロフィールです。お相手を紹介してほしい場合は、ボランティア仲人「やまがた縁結びたい」に相談する方法があります（同「よくあるご質問」）。",
  },
  {
    q: "市町村の登録料補助はありますか？",
    a: "センターの「市町村結婚支援担当窓口」（令和8年4月1日現在）の掲載内容を当サイトが数えたところ、35市町村のうち21市町が、センター（Aiナビやまがた）の登録料の補助・助成を取組みとして記載しています。全額・半額・上限額など内容は市町村ごとに異なり、掲載は料金改定前の時点の内容です。お住まいの市町村の担当窓口にご確認ください。",
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
  headline: "山形県の公的な婚活支援「Aiナビやまがた」の料金・利用条件・実績、市町村の補助と、民間の結婚相談所との比較",
  description: "やまがたハッピーサポートセンターのAIマッチングシステム「Aiナビやまがた」の料金・利用条件・必要書類・会員数・成婚組数、やまがた縁結びたい、市町村の登録料補助と、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/yamagata/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "山形県の結婚支援（Aiナビやまがた）", item: "https://mu-su-bi-ba.com/knowledge/yamagata/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeYamagata() {
  const privateMin = 125400;
  const privateMedian = 399200;
  const minRatio = Math.round(privateMin / 5000);
  const medianRatio = Math.round(privateMedian / 5000);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "山形県の結婚支援（Aiナビやまがた）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          山形県の結婚相談所選び：県の「Aiナビやまがた」の料金・利用条件・実績、市町村の補助と、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月21日（料金・利用条件・会員数・市町村の取組みは同日にやまがたハッピーサポートセンター公式サイト、山形県公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />山形県の「Aiナビやまがた」は1年5,000円から利用でき、成婚料はかかりません
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>「やまがたハッピーサポートセンター」は、山形県・県内<strong>全35市町村</strong>・経済団体等が2015年4月に設立した公的な結婚支援団体です。AIのおすすめ機能があるマッチングシステム<strong>「Aiナビやまがた」</strong>を運営し、山形・庄内・最上・置賜の4か所に拠点があります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>料金は<strong>2026年9月15日に改定</strong>され、<strong>1年会員5,000円（継続更新時3,000円）・2年会員7,000円</strong>です（改定前は2年10,000円）。対象は山形県での結婚を希望する<strong>18歳以上の独身の方</strong>で、県外在住の方も登録できます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>会員登録者数は<strong>{members}人</strong>、成婚組数（報告任意・累計）は<strong>{marriages}組</strong>です（令和8年10月末現在）。センターはお相手の紹介を行わず、会員が自分で検索・申込みをする仕組みです。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>当サイトが数えたところ、<strong>{municipalityCount}市町村のうち{hscSubsidyCount}市町</strong>がセンターの登録料の補助・助成を、<strong>{agencySubsidyCount}市町</strong>が民間の結婚相談所の費用の補助を掲載しています。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">Aiナビやまがたの料金と利用条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>やまがたハッピーサポートセンター（平成27年4月1日設立。令和3年4月1日に「やまがた出会いサポートセンター」から改称）。会長は山形県知事、事務局は山形県しあわせ子育て応援部 多様性・女性若者活躍課</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>料金（令和8年9月15日以降）</td><td className={td}>1年会員：新規登録時5,000円、継続更新時3,000円／2年会員：7,000円。令和8年9月14日までは2年会員10,000円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>割引</td><td className={td}>企業会員割：センターの企業会員に登録した企業・団体の社員は3,000円割引（本登録時に社員証等で確認）。「お友達割」は料金改定に伴い終了</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>有効期間・退会</td><td className={td}>有効期間が過ぎると自動的に退会。結婚した場合は退会となり、退会時の返金はなし。休会しても登録期間の延長や返金はなし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>利用条件</td><td className={td}>山形県での結婚を希望する18歳以上の独身の方（県外在住で将来山形県への移住を考えている方を含む）。インターネットとメールが使え、センターからの連絡に対応できること。会員規約・利用規定の禁止事項に該当しないこと</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録に必要なもの</td><td className={td}>写真付きの身分証明書（コピー不可）、戸籍抄本または独身証明書（3か月以内に取得した原本。住民票は不可）、直近の所得を確認できる書類（所得証明書または源泉徴収票）、プロフィール用写真（3か月以内に撮影した上半身の写真。証明写真・加工した写真は不可）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録の方法</td><td className={td}>公式サイトで仮登録した後、書類のアップロードとオンライン面談で本人確認をして登録料を振り込むか、予約した日にセンターへ書類と登録料を持参して本登録</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              更新時の3,000円は、1年会員を続けて更新する場合だけに適用されます。2年会員から1年会員に切り替える場合や、一度退会してから再登録する場合は、1年会員の新規登録時の料金（5,000円）がかかります。料金は今後も変更される場合があるため、登録前に公式サイトで最新の内容をご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MATCHING_URL} {...ext}>やまがたハッピーサポートセンター「Aiナビやまがた」</a>・<a href={PRICE_URL} {...ext}>「料金改定のお知らせ」（PDF）</a>・<a href={PRICE_NEWS_URL} {...ext}>お知らせ「『Ａｉナビやまがた』料金改定のお知らせ」</a>・<a href={FAQ_URL} {...ext}>「よくあるご質問」</a>・<a href={CENTER_URL} {...ext}>「やまがたハッピーサポートセンターとは」</a>（いずれも2026年11月21日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">お見合いまでの流れと活動のルール</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>自分のスマートフォン等（自宅閲覧は1日45分まで）か、予約したうえでセンターの専用端末（30分）で、希望条件が近い方やAIがおすすめする方のプロフィールを閲覧する。AIのおすすめは毎週月曜日に最大3名が配信される（活動履歴によっては配信がない場合あり）</li>
              <li>会いたい方にお見合いを申し込む。結果は申込日を含めず5日以内にメールで届く</li>
              <li>お相手が承諾したら、システムで日時を調整し、センターまたはオンラインでお見合い（30分）。希望すればサポーターが同席する</li>
              <li>お見合い後3日以内にプレ交際へ進むかを回答し、双方がOKならプレ交際（最大60日・3名まで）。その後、双方の意思が合えば本格交際（お相手は1人）</li>
              <li>結婚が決まったらマイページから報告し、退会する。報告した方にはお祝い状と記念品が贈られる</li>
            </ol>
            <p>
              Aiナビやまがたでは、登録会員全員のプロフィールを見られるわけではなく、お互いの希望条件が近い方とAIがおすすめする方に限って閲覧・申込みができます。民間の結婚相談所のように担当者がお相手を紹介する仕組みではないため、自分で検索して申し込むことに抵抗がないかを、登録前に確認されることをおすすめします。交際が成立すると、おおむね2か月ごとにセンターから進行状況の確認メールが届きます。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={FLOW_URL} {...ext}>やまがたハッピーサポートセンター「ご利用の流れ」</a>・<a href={MATCHING_URL} {...ext}>「Aiナビやまがた」</a>・<a href={FAQ_URL} {...ext}>「よくあるご質問」</a>（いずれも2026年11月21日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">会員数・成婚組数などの実績</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>数値</th><th className={th}>時点・出典</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会員登録者数</td><td className={td}>{members}人</td><td className={td}>令和8年10月末現在（センター公式サイト）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>成婚組数（報告任意・累計）</td><td className={td}>{marriages}組</td><td className={td}>令和8年10月末現在（センター公式サイト）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お見合い件数</td><td className={td}>導入前年（令和4年）541件 → 導入後（令和5〜6年の2か年平均）720件/年</td><td className={td}>山形県の資料</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>交際成立組数</td><td className={td}>導入前年（令和4年）243組 → 導入後（令和5〜6年の2か年平均）292組/年</td><td className={td}>山形県の資料</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              Aiナビやまがたは、令和5年1月からAI機能を搭載したマッチングシステムとして使われています。県の資料では、導入後にお見合い件数や交際成立組数が大きく増加したとしています。成婚組数は会員からの報告が任意のため、実際の成婚数とは異なる可能性があります。男女別・年代別の会員数は公式サイトに記載がありません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TOP_URL} {...ext}>やまがたハッピーサポートセンター 公式トップページ「ご利用者の状況」</a>・<a href={PREF_SHIRYO_URL} {...ext}>山形県「市町村と連携した結婚支援に関する取組みについて」（資料4・PDF）</a>（いずれも2026年11月21日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">センターの拠点と、ボランティア仲人「やまがた縁結びたい」</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>拠点</th><th className={th}>所在地・電話</th><th className={th}>開所曜日・時間</th></tr></thead>
                <tbody>
                  {offices.map((o) => (
                    <tr key={o.name} className="border-t border-[#E5DCCF] align-top"><td className={td}>{o.name}</td><td className={td}>{o.addr}</td><td className={td}>{o.hours}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              センター・支所の利用は、プライバシー保護のため完全予約制です。各拠点に駐車場があり、センターの利用時間内は無料と案内されています。
            </p>
            <p>
              お相手を紹介してほしい方向けには、県に登録したボランティア仲人「やまがた縁結びたい」があります。県内各地で約55の個人・団体が活動しており、相談者にふさわしいお相手を探してお見合いを設定します。登録できるのは県内在住の個人、県内に本拠地を置く非営利団体、県内の自治体で、営利目的で結婚相談業を営む方は対象外です。相談者に謝礼を請求することはできないと定められています。
            </p>
            <p>
              縁結びたいへの相談は、登録者に直接相談するほか、センターが開く結婚相談会を利用できます。山形会場（文翔館・山形センター）の令和8年度の日程表では、相談会は無料・予約制で、各回4組（1組45分程度）、本人が出席できない場合は親御さん等でも相談できます。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TOP_URL} {...ext}>やまがたハッピーサポートセンター 公式トップページ</a>・<a href={FAQ_URL} {...ext}>「よくあるご質問」</a>・<a href={ENMUSUBI_URL} {...ext}>「やまがた縁結びたい」</a>・<a href={SOUDANKAI_URL} {...ext}>「結婚相談会 令和8年度相談日程表（10月〜1月）山形」（PDF）</a>・<a href={PREF_ENMUSUBI_URL} {...ext}>山形県「やまがた縁結びたい」チラシ（PDF）</a>・<a href={PREF_PRESS_URL} {...ext}>山形県「やまがたハッピーサポートセンター総会を開催します」（令和8年6月5日・PDF）</a>（いずれも2026年11月21日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">市町村の登録料補助と、結婚相談所の費用の補助</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              センターの「市町村結婚支援担当窓口」（令和8年4月1日現在）には、県内35市町村すべての担当部署と取組み概要が掲載されています。当サイトがこの掲載内容を数えたところ、センター（Aiナビやまがた）の登録料・登録費用の補助や助成を記載しているのは<strong>{hscSubsidyCount}市町</strong>でした（寒河江市・尾花沢市・山辺町・朝日町・大江町・大石田町・新庄市・金山町・最上町・舟形町・真室川町・大蔵村・鮭川村・戸沢村・米沢市・高畠町・白鷹町・鶴岡市・三川町・庄内町・遊佐町）。補助の内容は、全額（金山町・戸沢村・白鷹町・庄内町など）、半額（三川町・米沢市）、上限額（新庄市7千円・寒河江市1万円など）、女性は全額・男性は半額（遊佐町）と市町村ごとに異なります。
            </p>
            <p>
              民間の結婚相談所の入会金・初期費用・成婚料を補助する取組みを記載しているのは、次の{agencySubsidyCount}市町です（当サイトが数えた値）。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>市町村</th><th className={th}>掲載されている内容</th></tr></thead>
                <tbody>
                  {agencySubsidies.map((a) => (
                    <tr key={a.city} className="border-t border-[#E5DCCF] align-top"><td className={td}>{a.city}</td><td className={td}>{a.detail}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              この一覧は令和8年4月1日現在の内容で、センターの料金改定（令和8年9月15日）より前の時点のものです。補助額や対象者の条件は変更される場合があるため、利用を検討する際はお住まいの市町村の担当窓口にお問い合わせください。このほか、多くの市町村が仲人・結婚サポーターによる結婚相談や、新婚世帯の住居費などを補助する結婚新生活支援事業を実施しています。米沢市は「よねざわ結婚支援センター」、酒田市は「結婚サポートセンター」を運営しています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MADOGUCHI_URL} {...ext}>やまがたハッピーサポートセンター「市町村結婚支援担当窓口」（令和8年4月1日現在）</a>・<a href={FAQ_URL} {...ext}>「よくあるご質問」</a>（いずれも2026年11月21日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>登録の有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>山形県「Aiナビやまがた」</td><td className={td}>1年会員5,000円（継続更新時3,000円）、2年会員7,000円。成婚料なし</td><td className={td}>1年または2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/nagano/" className="text-[#A08447] underline">長野県「NAGANO ai MATCH」</Link></td><td className={td}>システム登録料10,000円（相談所の登録料等が別にかかる場合あり）</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/saga/" className="text-[#A08447] underline">佐賀県「さが出会いサポートセンター」</Link></td><td className={td}>5,000円/年</td><td className={td}>1年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              当サイトの計算では、Aiナビやまがたで2年間活動する場合の費用は、2年会員なら7,000円、1年会員を1回更新すると8,000円（5,000円＋3,000円）です。民間の結婚相談所の1年総額は、最も低い社でもAiナビやまがたの1年会員（5,000円）の約{minRatio}倍、中央値では約{medianRatio}倍にあたります（いずれも当サイト算出の目安）。
            </p>
            <p>
              費用を抑えたい方にとって、Aiナビやまがたは有力な選択肢です。一方で、センターはお相手の紹介を行わず、閲覧できるプロフィールは希望条件やAIのおすすめに限られます。民間の結婚相談所は費用がかかる代わりに、担当者がお相手を提案したり、交際中の相談に継続的に応じたりするところが多くあります。紹介を受けたい方は「やまがた縁結びたい」や市町村の仲人制度も検討できます。山形県内から利用できるオンライン型の結婚相談所や、仙台市の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。長野県・佐賀県の料金は、各公式サイトで2026年11月18日〜19日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/akita/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">秋田県の結婚支援</Link>
            <Link href="/knowledge/niigata/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ハートマッチにいがた（新潟県）</Link>
            <Link href="/knowledge/nagano/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">NAGANO ai MATCH（長野県）</Link>
            <Link href="/knowledge/saga/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">さが出会いサポートセンター（佐賀県）</Link>
            <Link href="/knowledge/gifu/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">おみサポ・ぎふ（岐阜県）</Link>
            <Link href="/knowledge/iwaki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">いわき市の婚活支援（福島県）</Link>
            <Link href="/knowledge/miyazaki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">みやざき結婚サポートセンター（宮崎県）</Link>
            <Link href="/area/sendai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">仙台の結婚相談所</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
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
