import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-28 確認）。
// ・苫小牧市主催「婚活パーティー」（令和8年10月25日14:00〜16:00・苫小牧市民文化ホール ART CUBES アートスペース、対象＝結婚を希望する25〜39歳以下の独身者で現に就業している方のうち市内在住または将来的に市への居住意思・意向がある方、定員男女各20名（先着順）・最小催行30名（男女各15名）、参加費1,000円、添付書類＝独身証明書・収入証明書・顔写真付き身分証明書、当日の参加者男性19名・女性16名の計35名（25〜39歳）、8組のカップル成立、1対1トーク中心・プロフィールカード交換、受付終了、問合せ先＝総合政策部政策推進室政策推進課）：苫小牧市「苫小牧市主催！婚活パーティー」
// ・苫小牧市若者出会い創出サポート助成金（18〜39歳の独身者（高校生を除く）・市内居住・市税滞納なし、令和8年4月1日以降の指定マッチングアプリの基本料金の合計が1万円に達した場合に一律1万円・同一年度1人1万円まで、IMS認証サービス8件、申請期限＝利用終了後30日以内または当該年度3月31日のいずれか早い日）：苫小牧市「苫小牧市若者出会い創出サポート助成金」・「令和8年度苫小牧市若者出会い創出サポート助成金交付要綱」（PDF）
// ・苫小牧地域結婚支援事業（平成27年10月15日に市・苫小牧商工会議所・苫小牧信用金庫が連携協定、商工会議所の「とまこ My Love 婚活パーティー」、信用金庫の結婚相談所）：苫小牧市「苫小牧地域結婚支援事業について」
// ・届け出挙式（婚姻届またはパートナーシップ宣誓書の提出とセット、利用料無料、15分程度、最大10名、実施日（2026年12月16日・21日、2027年1月13日・19日・25日、2月なし、3月17日・23日・29日）、5営業日前までに申込み、会場は市役所11階議会本会議場）：苫小牧市「届け出挙式」
// ・婚姻件数・婚姻率（平成28年〜令和7年、市役所窓口に提出された件数、率は9月末日人口で算出）：苫小牧市「令和7年版（2025年版）苫小牧市統計書」（PDF・令和8年3月）p.25
// ・胆振管内の結婚支援事業（室蘭市・厚真町の2市町のみ掲載、苫小牧市の掲載なし、令和7年5月時点）：北海道「道内市町村の結婚支援に係る取組みについて」（2025年6月12日更新）胆振管内PDF
// ・結婚新生活支援（令和8年度実施61市町村、胆振管内は登別市・伊達市・壮瞥町・白老町・厚真町・むかわ町の6市町。苫小牧市は掲載なし）：北海道「結婚･妊娠･共育ての相談機会提供･支援プログラム（旧結婚新生活支援事業）について」（2026年9月3日更新）
// ・北海道コンカツ情報コンシェルのイベント一覧に苫小牧市で開催される催しの掲載なし（2026年11月28日時点）、道主催オンライン婚活イベント（2026年12月11日・30〜45歳・男女最大各8名・無料・締切12月6日）、陸上自衛隊婚活パーティin千歳（2026年12月19日・女性30〜53歳20名・女性6,000円・締切12月4日17:00・主催 第7警備地区曹友会連合）：同センターのイベント一覧と各イベントページ
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const TOMAKON_URL = "https://www.city.tomakomai.hokkaido.jp/shisei/shisei/shiseihoshin/sonohoka/tomakon.html";
const DEAI_URL = "https://www.city.tomakomai.hokkaido.jp/shisei/shisei/shiseihoshin/sonohoka/wakamonodeai.html";
const DEAI_YOUKOU_PDF = "https://www.city.tomakomai.hokkaido.jp/files/00069000/00069027/20260401123234.pdf";
const KEKKON_URL = "https://www.city.tomakomai.hokkaido.jp/shisei/shisei/shiseihoshin/sonohoka/kekkon.html";
const WEDDING_URL = "https://www.city.tomakomai.hokkaido.jp/shisei/shisei/shiseihoshin/sonohoka/wedding.html";
const TOUKEI_PDF = "https://www.city.tomakomai.hokkaido.jp/files/00006300/00006397/%EF%BC%B27toukeisyo.pdf";
const PREF_MUNI_URL = "https://www.pref.hokkaido.lg.jp/hf/kms/dounai-konkatsu.html";
const PREF_IBURI_PDF = "https://www.pref.hokkaido.lg.jp/fs/1/1/7/3/2/1/7/7/_/04%E8%83%86%E6%8C%AF.pdf";
const PREF_SHINSEIKATSU_URL = "https://www.pref.hokkaido.lg.jp/hf/kms/kekkon-sinseikatusien.html";
const KIC_EVENT_LIST_URL = "https://hokkaido-kic.com/event_list/";
const KIC_DEC11_URL =
  "https://hokkaido-kic.com/event/%ef%bc%bc%e5%8c%97%e6%b5%b7%e9%81%93%e4%b8%bb%e5%82%ac%ef%bc%8f%e3%82%a4%e3%83%a4%e3%83%bc%e3%82%a8%e3%83%b3%e3%83%89%e3%83%bb%e3%83%80%e3%82%a4%e3%82%a2%e3%83%aa%e3%83%bcde%e7%b8%81%e7%b5%90%e3%81%b3";
const KIC_CHITOSE_URL =
  "https://hokkaido-kic.com/event/%e5%8c%97%e6%b5%b7%e9%81%93-%e9%99%b8%e4%b8%8a%e8%87%aa%e8%a1%9b%e9%9a%8a%e5%a9%9a%e6%b4%bb%e3%83%91%e3%83%bc%e3%83%86%e3%82%a3in%e5%8d%83%e6%ad%b3-3";

// 苫小牧市「苫小牧市主催！婚活パーティー」に掲載された令和8年10月25日開催分（2026年11月28日確認）
const party = { men: 19, women: 16, couples: 8, capacityEach: 20 };

// 「令和7年版（2025年版）苫小牧市統計書」p.25「婚姻・離婚件数」から転記
const marriages = [
  { y: "平成28年（2016年）", n: 950, rate: "5.48" },
  { y: "平成30年（2018年）", n: 828, rate: "4.82" },
  { y: "令和2年（2020年）", n: 791, rate: "4.64" },
  { y: "令和4年（2022年）", n: 704, rate: "4.17" },
  { y: "令和5年（2023年）", n: 624, rate: "3.73" },
  { y: "令和6年（2024年）", n: 625, rate: "3.77" },
  { y: "令和7年（2025年）", n: 622, rate: "3.78" },
];

export const metadata: Metadata = {
  title: "苫小牧の婚活パーティー｜市主催パーティー（25〜39歳・参加費1,000円・2026年10月は8組成立）とアプリ利用料1万円助成、道の無料オンライン婚活",
  description:
    "苫小牧市主催の婚活パーティー（25〜39歳の就業中の独身者・参加費1,000円）は2026年10月25日に35名が参加し8組が成立しました。次回日程の掲載状況、マッチングアプリ利用料の1万円助成、北海道の無料オンライン婚活、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/tomakomai/" },
};

const faqs = [
  {
    q: "苫小牧市主催の婚活パーティーは、次回いつ開催されますか？",
    a: "2026年11月28日時点で、苫小牧市の公式ページに掲載されているのは2026年10月25日（日）に開催された回（受付終了・開催済み）で、次回の日程は確認できませんでした。開催予定は、総合政策部政策推進室政策推進課（企画担当 0144-32-6039）にお問い合わせください。",
  },
  {
    q: "苫小牧市の婚活パーティーの参加条件と必要書類を教えてください。",
    a: "2026年10月25日の回の対象は、結婚を希望する25歳〜39歳以下の独身者で、現に就業している方（会社員、公務員、自営業、団体職員、パート・アルバイト等を含む）のうち、苫小牧市内に在住している方、または将来的に苫小牧市への居住意思・居住意向を有する方でした。参加費は1,000円、定員は男女各20名（先着順）で、申込みには独身証明書・収入証明書（いずれも直近3か月以内）と顔写真付き身分証明書の添付が必要でした。次回の条件は変わる可能性があります。",
  },
  {
    q: "苫小牧市外に住んでいても、市の婚活パーティーに参加できますか？",
    a: "2026年10月25日の回では、苫小牧市内に在住していなくても、将来的に苫小牧市への居住意思または居住意向を有する方は対象に含まれていました。年齢（25〜39歳）と就業の条件は市内在住の方と同じです。",
  },
  {
    q: "苫小牧市のマッチングアプリ利用料の助成はいくらですか？",
    a: "苫小牧市若者出会い創出サポート助成金は、市内に住む18歳以上39歳以下の独身者（高校生を除く）が、市の指定するマッチングアプリ（IMS認証を受けたサービス）を利用した場合に、令和8年4月1日以降の基本料金の合計が1万円に達したときに限り、一律1万円を予算の範囲内で交付する制度です。同一年度内の上限は1人1万円で、申請はサービス利用終了後30日以内または当該年度の3月31日のいずれか早い日までです。",
  },
  {
    q: "苫小牧市で結婚新生活支援（新居の家賃や引越費用の補助）は受けられますか？",
    a: "北海道が公表している令和8年度の実施市町村一覧（2026年9月3日更新・61市町村）に、苫小牧市は掲載されていません。胆振管内で掲載されているのは、登別市・伊達市・壮瞥町・白老町・厚真町・むかわ町の6市町です。苫小牧市の公式サイトでも、2026年11月28日時点で結婚新生活支援の事業は確認できませんでした。",
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
  headline: "苫小牧の婚活パーティー：苫小牧市主催パーティーの参加条件・参加費・開催結果と、マッチングアプリ利用料の助成、北海道の婚活支援",
  description:
    "苫小牧市主催の婚活パーティーの参加条件・参加費・2026年10月の開催結果、苫小牧市若者出会い創出サポート助成金、北海道の結婚サポートセンターとオンライン婚活イベント、胆振管内の結婚支援、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-28",
  dateModified: "2026-11-28",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/tomakomai/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "苫小牧の婚活パーティー", item: "https://mu-su-bi-ba.com/knowledge/tomakomai/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;
const pill = "text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]";

export default function KnowledgeTomakomai() {
  const total = party.men + party.women;
  const matched = party.couples * 2;
  const matchedPct = ((matched / total) * 100).toFixed(1);
  const menPct = ((party.couples / party.men) * 100).toFixed(1);
  const womenPct = ((party.couples / party.women) * 100).toFixed(1);
  const first = marriages[0];
  const last = marriages[marriages.length - 1];
  const declinePct = (((first.n - last.n) / first.n) * 100).toFixed(1);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "苫小牧の婚活パーティー" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          苫小牧の婚活パーティー：市主催パーティーの参加条件・参加費と開催結果、マッチングアプリ利用料の助成、北海道の婚活支援と民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月28日（苫小牧市の婚活パーティー・助成金・結婚支援事業・統計書、北海道の結婚支援事業、北海道コンカツ情報コンシェルのイベントは、同日に苫小牧市・北海道・同センターの公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />苫小牧の公的な婚活パーティーは、苫小牧市主催の「婚活パーティー」です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>苫小牧市（政策推進課）は<strong>2026年10月25日（日）</strong>に、苫小牧市民文化ホール ART CUBESで市主催の婚活パーティーを開催しました。対象は<strong>25〜39歳以下の就業している独身者</strong>で、市内在住の方または将来苫小牧市に住む意思のある方、<strong>参加費は1,000円</strong>、定員は男女各20名でした。当日は<strong>男女35名が参加し、8組のカップル</strong>が成立しています。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>この回は<strong>受付を終了し、開催済み</strong>です。2026年11月28日時点で、次回の日程は市の公式ページで確認できませんでした。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>パーティー以外に、苫小牧市は<strong>マッチングアプリの利用料を一律1万円助成</strong>しています（市内在住の18〜39歳の独身者、令和8年4月1日以降の基本料金の合計が1万円に達した場合）。北海道主催のオンライン婚活イベントは<strong>参加費無料</strong>で、12月11日の回（30〜45歳）は12月6日まで受付中です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>継続してお相手の紹介を受けたい場合は民間の結婚相談所が選択肢になります。<Link href="/knowledge/cost/" className="underline">当サイトが料金を確認した22社の1年総額は125,400円〜709,500円（中央値399,200円）</Link>です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">苫小牧市主催「婚活パーティー」の参加条件・参加費</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              苫小牧市は、結婚を希望する方の出会いを応援するため、苫小牧市内外に在住する未婚者を対象とした婚活パーティーを主催しています。市の公式ページに掲載されている2026年10月25日開催分の募集要項は次のとおりです（申込受付は終了しています）。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><th className={`${th} bg-[#FAF7F2] text-left w-32`}>日時</th><td className={td}>2026年（令和8年）10月25日（日）14:00〜16:00（終了）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><th className={`${th} bg-[#FAF7F2] text-left`}>会場</th><td className={td}>苫小牧市民文化ホール ART CUBES 1階「アートスペース」</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><th className={`${th} bg-[#FAF7F2] text-left`}>対象</th><td className={td}>結婚を希望する25歳〜39歳以下の独身者で、現に就業している方（会社員、公務員、自営業、団体職員、パート・アルバイト等を含む）のうち、①苫小牧市内に在住している方、②将来的に苫小牧市への居住意思または居住意向を有する方のいずれかに該当する方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><th className={`${th} bg-[#FAF7F2] text-left`}>定員</th><td className={td}>男女各20名（先着順）。最小催行人数は30名（男女各15名）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><th className={`${th} bg-[#FAF7F2] text-left`}>参加費</th><td className={td}>1,000円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><th className={`${th} bg-[#FAF7F2] text-left`}>申込方法</th><td className={td}>男女別の申込フォームから、独身証明書（直近3か月以内に発行）、収入証明書（直近3か月以内の給与明細等）、顔写真付き身分証明書（運転免許証・マイナンバーカード等）を添付して申し込み</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><th className={`${th} bg-[#FAF7F2] text-left`}>問合せ先</th><td className={td}>苫小牧市 総合政策部政策推進室政策推進課（企画担当 0144-32-6039）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              申込みの時点で独身証明書と収入証明書（いずれも直近3か月以内のもの）の添付が求められている点が、この市主催パーティーの特徴です。次回の募集が始まってから書類をそろえると間に合わない場合があるため、参加を検討している方は、発行に要する日数を事前に確認しておくと安心です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TOMAKON_URL} {...ext}>苫小牧市「苫小牧市主催！婚活パーティー」</a>（2026年11月28日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">2026年10月25日の開催結果（35名参加・8組成立）</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              市の公式ページには、当日の参加者は男性{party.men}名・女性{party.women}名の計{total}名（25歳〜39歳）で、最後のマッチングで{party.couples}組のカップルが成立したと掲載されています。内容は1対1のトークが中心で、プロフィールカードを交換しながら会話し、後半には気になった相手ともう一度話せる時間が設けられました。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>男性</th><th className={th}>女性</th><th className={th}>合計</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF]"><td className={td}>定員</td><td className={td}>{party.capacityEach}名</td><td className={td}>{party.capacityEach}名</td><td className={td}>{party.capacityEach * 2}名</td></tr>
                  <tr className="border-t border-[#E5DCCF]"><td className={td}>当日の参加者</td><td className={td}>{party.men}名</td><td className={td}>{party.women}名</td><td className={td}>{total}名</td></tr>
                  <tr className="border-t border-[#E5DCCF]"><td className={td}>カップル成立者</td><td className={td}>{party.couples}名</td><td className={td}>{party.couples}名</td><td className={td}>{matched}名（{party.couples}組）</td></tr>
                  <tr className="border-t border-[#E5DCCF]"><td className={td}>参加者に占めるカップル成立者の割合（当サイト計算）</td><td className={td}>{menPct}%</td><td className={td}>{womenPct}%</td><td className={td}>{matchedPct}%</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              当サイトの計算では、参加者{total}名のうちカップルが成立した方は{matched}名で、割合は{matchedPct}%です。ただし、公開されている開催結果は1回分のみで、カップル成立後の交際や成婚の状況は掲載されていません。この割合は次回以降の結果を保証するものではなく、1回の開催実績の目安としてご覧ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TOMAKON_URL} {...ext}>苫小牧市「苫小牧市主催！婚活パーティー」</a>（2026年11月28日確認）。割合は掲載人数から当サイトが計算した値です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">苫小牧市のマッチングアプリ利用料助成と、その他の結婚支援</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              苫小牧市は、出会いのきっかけづくりを目的として、マッチングアプリの利用料の一部を助成する「苫小牧市若者出会い創出サポート助成金」を設けています。パーティーの開催を待たずに利用できる制度です。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><th className={`${th} bg-[#FAF7F2] text-left w-32`}>対象者</th><td className={td}>18歳以上39歳以下の独身者（高校生を除く）で、市内に住所を有し現に居住し、市税に滞納がない方など</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><th className={`${th} bg-[#FAF7F2] text-left`}>対象経費</th><td className={td}>令和8年4月1日以降の、市が指定するマッチングアプリの基本料金</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><th className={`${th} bg-[#FAF7F2] text-left`}>助成額</th><td className={td}>対象経費の合計が1万円に達した場合に限り一律1万円（予算の範囲内・同一年度内で1人1万円まで）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><th className={`${th} bg-[#FAF7F2] text-left`}>対象サービス</th><td className={td}>特定非営利活動法人結婚相手紹介サービス業認証機構の認証（IMS認証）を受けたサービス。令和8年4月1日現在で8サービスが掲載されています</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><th className={`${th} bg-[#FAF7F2] text-left`}>申請期限</th><td className={td}>サービス利用終了後30日以内、または当該年度の3月31日のいずれか早い日まで</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              このほか、苫小牧市は平成27年10月15日に苫小牧商工会議所・苫小牧信用金庫と「苫小牧地域結婚支援事業」の連携協定を締結しており、市のページには商工会議所の「とまこ My Love 婚活パーティー」と信用金庫の結婚相談所が取組みとして掲載されています。ただし、市のページに掲載されている案内は2015年の婚活パーティーのもので、両事業の現在の実施状況は2026年11月28日時点で確認できませんでした。
            </p>
            <p>
              結婚後の手続きに関しては、婚姻届またはパートナーシップ宣誓書の提出とセットで、市役所11階の議会本会議場で15分程度のセレモニーを行う「届け出挙式」があります。利用料は無料で、参加は申込者を含め最大10名です。今後の実施日は2026年12月16日・21日、2027年1月13日・19日・25日、3月17日・23日・29日（2月は実施なし）で、実施希望日の5営業日前までの申込みが必要です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={DEAI_URL} {...ext}>苫小牧市「苫小牧市若者出会い創出サポート助成金」</a>・<a href={DEAI_YOUKOU_PDF} {...ext}>「令和8年度苫小牧市若者出会い創出サポート助成金交付要綱」（PDF）</a>・<a href={KEKKON_URL} {...ext}>「苫小牧地域結婚支援事業について」</a>・<a href={WEDDING_URL} {...ext}>「届け出挙式」</a>（いずれも2026年11月28日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">苫小牧市の婚姻件数の推移</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              苫小牧市統計書（令和7年版・令和8年3月発行）には、市役所の窓口に提出された婚姻届の件数と婚姻率（9月末日人口千人あたり）が掲載されています。主な年の値は次のとおりです。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>年</th><th className={th}>婚姻件数</th><th className={th}>婚姻率（‰）</th></tr></thead>
                <tbody>
                  {marriages.map((m) => (
                    <tr key={m.y} className="border-t border-[#E5DCCF]"><td className={td}>{m.y}</td><td className={td}>{m.n.toLocaleString()}件</td><td className={td}>{m.rate}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              婚姻件数は平成28年の{first.n}件から令和7年の{last.n}件へ、当サイトの計算で約{declinePct}%減少しています。令和5年以降は620件台で推移しています。件数は市役所窓口に提出された届出の数で、苫小牧市民どうしの婚姻件数と一致するとは限りません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TOUKEI_PDF} {...ext}>苫小牧市「令和7年版（2025年版）苫小牧市統計書」（PDF）</a>p.25「婚姻・離婚件数」（2026年11月28日確認）。表は掲載年のうち一部を抜粋しています。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">北海道の婚活イベントと、胆振管内の結婚支援</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              北海道の結婚サポートセンター「北海道コンカツ情報コンシェル」のイベント一覧には、2026年11月28日時点で苫小牧市内で開催される催しは掲載されていませんでした。苫小牧市から参加できるものとして、北海道主催のオンライン婚活イベントと、近隣の千歳市で開催される催しが掲載されています。センターの制度（無料の個別オンライン相談会など）は、当サイトの<Link href="/knowledge/obihiro/" className="text-[#A08447] underline">帯広・十勝の婚活支援</Link>と<Link href="/knowledge/kitami/" className="text-[#A08447] underline">北見市の婚活支援</Link>で整理しています。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>開催日・名称</th><th className={th}>対象・定員</th><th className={th}>会場</th><th className={th}>参加費・募集状況</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={KIC_DEC11_URL} {...ext}>2026年12月11日（金）19:30〜「イヤーエンド・ダイアリーde縁結び」</a>（北海道主催）</td><td className={td}>30〜45歳の独身で、北海道在住または北海道への移住を希望する方。男女最大各8名</td><td className={td}>オンライン</td><td className={td}>無料（通信費は自己負担）。12月6日まで受付（応募多数の場合は抽選）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={KIC_CHITOSE_URL} {...ext}>2026年12月19日（土）15:00〜18:00「北海道 陸上自衛隊婚活パーティin千歳」</a>（主催：第7警備地区曹友会連合、運営：民間の結婚相談所）</td><td className={td}>日本国籍を有する30〜53歳の女性20名（独身男性陸上自衛官との交流）</td><td className={td}>千歳市錦町4丁目</td><td className={td}>女性6,000円。12月4日17:00締切（申込多数の場合は抽選）。参加決定後のキャンセルは全額負担</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              北海道が公表している市町村の結婚支援事業の取りまとめ（令和7年5月時点の開催計画）では、胆振管内で掲載されているのは室蘭市と厚真町の2市町で、苫小牧市は掲載されていません。室蘭市は、20歳以上の独身者で参加者の半数以上が市内居住者となる出会いの場づくりを行う団体に補助を行う事業（令和7年度中に3回実施予定）、厚真町は町内の独身農業者・後継者の男性と25〜45歳の独身女性の交流イベント（原則無料）を予定していました。
            </p>
            <p>
              結婚後の新生活については、北海道の一覧（2026年9月3日更新）で、令和8年度に結婚新生活支援（新居の購入費・家賃・リフォーム費用・引越費用等の支援）を実施する市町村は61市町村です。胆振管内では登別市・伊達市・壮瞥町・白老町・厚真町・むかわ町の6市町が掲載されており、苫小牧市は含まれていません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={KIC_EVENT_LIST_URL} {...ext}>北海道コンカツ情報コンシェル「イベント・パーティー情報」</a>と表内の各イベントページ・<a href={PREF_MUNI_URL} {...ext}>北海道「道内市町村の結婚支援に係る取組みについて」（2025年6月12日更新）</a>・<a href={PREF_IBURI_PDF} {...ext}>同 胆振管内（PDF・令和7年5月時点）</a>・<a href={PREF_SHINSEIKATSU_URL} {...ext}>北海道「結婚･妊娠･共育ての相談機会提供･支援プログラム（旧結婚新生活支援事業）について」（2026年9月3日更新）</a>（いずれも2026年11月28日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">公的な婚活支援と民間の結婚相談所の費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>費用</th><th className={th}>1対1の紹介</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>苫小牧市主催の婚活パーティー</td><td className={td}>1,000円（2026年10月25日の回）</td><td className={td}>なし（パーティー形式）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>苫小牧市若者出会い創出サポート助成金</td><td className={td}>アプリの基本料金が合計1万円に達した場合に1万円を助成（年度内1回まで）</td><td className={td}>なし（アプリ利用の助成）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>北海道主催のオンライン婚活イベント</td><td className={td}>無料（通信費は自己負担）</td><td className={td}>なし（イベント形式）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              苫小牧市と北海道の公的な支援は費用を低く抑えられる一方で、市主催のパーティーは市の公式ページに掲載されている開催結果が1回分で、対象年齢も25〜39歳に限られます。40歳以上の方や、担当者からお相手の紹介を継続して受けたい方は、民間の結婚相談所が選択肢になります。当サイトが料金を確認した22社の1年総額は125,400円〜709,500円（中央値399,200円）です（<Link href="/knowledge/cost/" className="text-[#A08447] underline">結婚相談所の料金</Link>）。苫小牧市から利用する場合は、自宅から活動できるオンライン型の結婚相談所や、札幌市の結婚相談所と比べて検討するのが目安です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です。公的な支援の費用は、各公式サイトで2026年11月28日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/kitami/" className={pill}>北見市の婚活支援</Link>
            <Link href="/knowledge/obihiro/" className={pill}>帯広・十勝の婚活支援</Link>
            <Link href="/knowledge/kasai/" className={pill}>加西市の婚活支援</Link>
            <Link href="/knowledge/ogaki/" className={pill}>大垣市の婚活支援</Link>
            <Link href="/knowledge/joetsu/" className={pill}>上越市の婚活支援</Link>
            <Link href="/knowledge/jiyugaoka/" className={pill}>自由が丘の結婚相談所</Link>
            <Link href="/area/sapporo/" className={pill}>札幌・北海道の結婚相談所</Link>
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
