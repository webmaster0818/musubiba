import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FeePosition from "@/components/FeePosition";
import AuthorBox from "@/components/AuthorBox";
import FlowGuide from "@/components/FlowGuide";
import ReviewFacts from "@/components/ReviewFacts";

export const metadata = {
  title: "スマリッジ（smarriage）の口コミ・評判｜料金・全額返金保証の条件・運営会社【2026年10月】",
  description:
    "オンライン結婚相談所スマリッジの口コミ・評判と、登録料6,600円・月会費9,900円・成婚料0円の料金（2026年10月14日公式確認）、全額返金保証の対象外条件、1年総額、運営会社を整理しています。",
};

const overview = {
  name: "スマリッジ",
  type: "オンライン完結型",
  members: "利用事業者会員数 約51,000人（2026年10月時点・公式）",
  area: "全国対応（オンライン）",
  initialFee: "6,600円",
  monthlyFee: "9,900円（割引適用で毎月1,100円引き）",
  matchingFee: "0円",
  age: "20歳以上（U28割引は20〜28歳）",
  successRate: "非公開",
};

const strengths = [
  {
    title: "登録料6,600円・月会費9,900円・成婚料0円のワンプラン",
    desc: "料金は1プランのみで、公式サイトの半年間の費用イメージは66,000円です（2026年10月14日確認）。成婚料がかからないため、1年活動して成婚退会しても総額は125,400円の計算です。当サイトの24社料金データでも初期費用は最も低い水準です。",
  },
  {
    title: "IBJ online／コネクトシップの2つから活動先を選べる",
    desc: "IBJ online（チームサポート・お相手検索40名まで）と、コネクトシップ（担当制・お相手検索10名まで）の2つのプラットフォームで活動できます。紹介は毎月最大6名で、利用事業者会員数は約51,000人（2026年10月時点）と公表されています。",
  },
  {
    title: "手続きから相談までオンラインで完結します",
    desc: "入会手続きからカウンセリング、お見合いの申し込みまで、すべてオンラインで完結します。来店の必要がないため、仕事が忙しい方や地方在住の方でも場所を選ばず活動できます。",
  },
];

const pros = [
  "登録料6,600円・成婚料0円で1年総額125,400円の計算",
  "3ヶ月でお見合いが成立しなければ登録料と月会費3ヶ月分を返金する保証あり（適用条件あり）",
  "完全オンライン完結で来店不要",
];

const cons = [
  "対面でのサポートが受けられない",
  "全額返金保証は割引・のりかえ割と併用できない",
  "カウンセラーとの関係構築に時間がかかる場合がある",
];

const faqs = [
  {
    q: "スマリッジの入会条件はありますか？",
    a: "20歳以上の独身の方が入会可能です。男性は定職に就いていることが条件となります。入会時には独身証明書、収入証明書、本人確認書類などの提出が必要です。",
  },
  {
    q: "コネクトシップとは何ですか？",
    a: "複数の結婚相談所が会員データベースを共有するプラットフォームです。スマリッジではコネクトシップのお見合い（コンタクト）成立は毎月8件まで無料、9件目以降は1件1,100円です（2026年10月14日公式確認）。",
  },
  {
    q: "スマリッジの無料相談では何ができますか？",
    a: "オンラインで無料相談を受けられます。婚活に関する相談、サービスの説明、料金プランの案内を行います。入会を強制されることはありません。",
  },
  {
    q: "スマリッジの退会方法を教えてください",
    a: "マイページから退会手続きを行うか、担当カウンセラーに退会の意思を伝えて手続きを進めます。成婚料は0円のため、成婚退会時の追加費用はかかりません。",
  },
  {
    q: "スマリッジは対面でのお見合いもできますか？",
    a: "はい。お見合い自体は対面で行うことも可能です。お見合いの日程調整やセッティングはオンラインで行いますが、実際のお見合いはカフェやホテルラウンジにて対面で実施できます。",
  },
  {
    q: "スマリッジの成婚退会までの平均期間はどのくらいですか？",
    a: "公式サイトに平均期間の公表は見当たりませんでした（2026年10月14日確認）。月会費制で成婚料が0円のため、期間が延びた分だけ月会費9,900円が加算されます。",
  },
  {
    q: "スマリッジの全額返金保証の条件は？",
    a: "紹介可能な状態になった月から3ヶ月目の末日までにお見合いが成立しなかった場合、登録料と3ヶ月分の月会費が返金されます。期間中の退会、紹介を自分から断った場合、U28・エリア・シングル親・のりかえ等の割引を使った場合は対象外で、申し出は期間満了の翌日から2週間以内です（2026年10月14日公式確認）。",
  },
  {
    q: "スマリッジは料金が安い分、サービス内容に問題はありませんか？",
    a: "運営はSEモバイル・アンド・オンライン株式会社（東証スタンダード上場のSEH&Iグループ）です。安さの理由は来店型の店舗を持たないオンライン専業である点と、サポートがチーム制（IBJ online）または担当制（コネクトシップ）に絞られている点です。手厚い仲人型サポートを求める方には、物足りない可能性があります。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const relatedServices = [
  { name: "naco-do", path: "/review/naco-do/" },
  { name: "エン婚活エージェント", path: "/review/en-konkatsu/" },
  { name: "フィオーレ", path: "/review/fiore/" },
  { name: "マーズカフェ", path: "/review/mars-cafe/" },
];

export default function SmartreadReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "スマリッジ" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          スマリッジ（smarriage）の口コミ・評判｜料金・返金保証の条件・運営会社
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月14日（料金・会員数は2026年10月14日に公式サイトで確認）</p>

        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=J112188.1.Z162495D.Z1361712" target="_blank" rel="nofollow noopener noreferrer" className="text-[#A08447] hover:underline font-medium">
            スマリッジ の公式サイトはこちら
          </a>
        </p>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <img src="/ss-smartread.jpg" alt="スマリッジ 公式サイト" className="w-full h-auto" />
          <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: 公式サイトより</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="bg-[#A08447] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
          <div className="divide-y divide-gray-50">
            {Object.entries({
              サービス名: overview.name,
              タイプ: overview.type,
              会員数: overview.members,
              対応エリア: overview.area,
              初期費用: overview.initialFee,
              月会費: overview.monthlyFee,
              成婚料: overview.matchingFee,
              年齢層: overview.age,
              成婚率: overview.successRate,
            }).map(([k, v]) => (
              <div key={k} className="flex px-6 py-3.5 text-sm">
                <span className="w-28 shrink-0 font-medium text-[#2C2C2C]/50 tracking-wider">{k}</span>
                <span className="text-[#2C2C2C]">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            スマリッジの強み・特徴
          </h2>
          <div className="space-y-6">
            {strengths.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-medium text-lg mb-2 text-[#A08447] tracking-wider">{s.title}</h3>
                <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="bg-green-50/50 rounded-xl p-6">
            <h3 className="font-medium text-green-800 mb-4 tracking-wider">メリット</h3>
            <ul className="space-y-2">
              {pros.map((p) => (
                <li key={p} className="text-sm text-[#2C2C2C]/70 flex gap-2">
                  <span className="text-green-500 shrink-0">+</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50/50 rounded-xl p-6">
            <h3 className="font-medium text-red-800 mb-4 tracking-wider">デメリット</h3>
            <ul className="space-y-2">
              {cons.map((c) => (
                <li key={c} className="text-sm text-[#2C2C2C]/70 flex gap-2">
                  <span className="text-red-400 shrink-0">-</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ReviewFacts
          name="スマリッジ"
          checkedOn="2026年10月14日"
          officialUrl="https://s-marriage.jp/"
          feeHead={["項目", "金額", "補足"]}
          feeRows={[
            ["登録料", "6,600円", "のりかえ割（他社で1年以内に活動）の対象者は無料"],
            ["月会費", "9,900円", "U28・エリア・シングル親の各割引で毎月1,100円引き（併用可）"],
            ["お見合い料", "IBJ online：0円／コネクトシップ：月8件まで0円・9件目から1件1,100円", "コネクトシップは「コンタクトし放題」月3,300円のオプションあり"],
            ["成婚料", "0円", ""],
          ]}
          feeNotes={["公式サイトの半年間の費用イメージは66,000円です。", "キャンペーン「月会費初月0円」が告知されています（2026年10月14日時点）。"]}
          estimate={[{ label: "割引なし", formula: "6,600円＋9,900円×12＋0円", total: "125,400円" }]}
          company={[
            ["運営", "SEモバイル・アンド・オンライン株式会社（東証スタンダード上場 SEH&Iグループ）"],
            ["形態", "オンライン専業（店舗なし）"],
            ["活動先", "IBJ online（チームサポート）／コネクトシップ（担当制）"],
            ["会員数", "利用事業者会員数 約51,000人（2026年10月時点・公式）"],
          ]}
          reviewNote="主要な口コミサイトに、スマリッジ単独の口コミページは2026年10月14日時点で確認できませんでした（名前の似た「スマ婚」「スマ留」など別サービスの口コミが混ざりやすいため、ご注意ください）。店舗がないためGoogleマップの口コミもありません。判断材料は公式の料金と返金保証の条件が中心になります。"
          caution={["名前が似た別サービス（スマ婚＝結婚式、スマ留＝留学）の口コミと混同しないようにしてください。"]}
          sources={[{ name: "スマリッジ 料金案内（公式）", url: "https://s-marriage.jp/price/", note: "全額返金保証・割引の条件" }]}
        />

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 tracking-widest">他社との比較</h2>
          <p className="text-xs text-[#2C2C2C]/50 mb-3">※スマリッジ以外の数値は各社レビュー掲載時点のものです。最新情報は各レビューページをご確認ください。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">スマリッジ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">naco-do</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">エン婚活エージェント</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">9,900円</td><td className="px-4 py-3 text-center">16,800円</td><td className="px-4 py-3 text-center">14,300円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">6,600円</td><td className="px-4 py-3 text-center">29,800円</td><td className="px-4 py-3 text-center">10,780円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">会員数</td><td className="px-4 py-3 text-center">約51,000人</td><td className="px-4 py-3 text-center">約12.1万人</td><td className="px-4 py-3 text-center">約3万人</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">オンライン完結型</td><td className="px-4 py-3 text-center">オンライン完結型</td><td className="px-4 py-3 text-center">オンライン完結型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">成婚料0円・返金保証</td><td className="px-4 py-3 text-center">3連盟連携</td><td className="px-4 py-3 text-center">全額返金保証</td></tr>
              </tbody>
            </table>
          </div>
        </section>


        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            スマリッジと他社の比較
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            スマリッジが自分に合うか迷う場合は、料金総額・会員数・サポート形式を他社と比較することをおすすめします。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（24社一覧）を見る</Link></li>
            <li><Link href="/review/naco-do/" className="text-[#A08447] underline">naco-doの評判・料金を見る</Link></li>
            <li><Link href="/review/en-konkatsu/" className="text-[#A08447] underline">エン婚活エージェントの評判・料金を見る</Link></li>
            <li><Link href="/review/fiore/" className="text-[#A08447] underline">フィオーレの評判・料金を見る</Link></li>
            <li><Link href="/review/wellsma/" className="text-[#A08447] underline">ウェルスマの評判・料金を見る（オンラインでも専任仲人のサポートを希望する方向け・月会費11,800円〜）</Link></li>
          </ul>
        </section>

        <FlowGuide name={overview.name} initialFee={overview.initialFee} monthlyFee={overview.monthlyFee} matchingFee={overview.matchingFee} />

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            よくある質問
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-[#FAFAF8] rounded-xl border border-gray-100">
                <summary className="cursor-pointer px-6 py-4 font-normal text-[#2C2C2C] flex items-center justify-between tracking-wider">
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-[#A08447] text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="px-6 pb-4 text-sm text-[#2C2C2C]/60 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        

        <section className="bg-[#333333] rounded-2xl p-10 text-white text-center mb-12">
          <h2 className="text-xl font-light mb-4 tracking-widest">スマリッジの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">オンライン婚活の進め方は、無料相談で確認できます</p>
          <div className="mb-6">
            <a href="https://t.felmat.net/fmcl?ak=J112188.1.Z162495D.Z1361712" target="_blank" rel="nofollow noopener noreferrer">
              <img src="https://t.felmat.net/fmimg/J112188.Z162495D.Z1361712" width="300" height="250" alt="スマリッジ" className="mx-auto rounded-lg" />
            </a>
          </div>
          <a
            href="https://t.felmat.net/fmcl?ak=J112188.1.Z162495D.Z1361712"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-block bg-[#A08447] hover:bg-[#8A7239] text-white font-normal py-3 px-8 rounded-full transition-colors tracking-widest"
          >
            公式サイトへ
          </a>
        </section>

        <section>
          <h2 className="text-lg font-light mb-4 tracking-widest">他の結婚相談所も見る</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link
                key={s.name}
                href={s.path}
                className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm font-normal hover:border-[#A08447] hover:text-[#A08447] transition-colors tracking-wider"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </section>
      <AuthorBox />
            <FeePosition slug="smartread" />
</article>
    </>
  );
}
