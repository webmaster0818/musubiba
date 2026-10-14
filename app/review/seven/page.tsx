import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import FeePosition from "@/components/FeePosition";
import AuthorBox from "@/components/AuthorBox";
import FlowGuide from "@/components/FlowGuide";
import ReviewFacts from "@/components/ReviewFacts";
import BrandStores from "@/components/BrandStores";

export const metadata = {
  title: "セブン結婚相談所の口コミ・評判｜月会費9,800円・成婚料5万円の料金と1年総額【2026年10月】",
  description:
    "セブン結婚相談所（結婚相談所セブン）の口コミ・評判をGoogleマップ等の掲載媒体つきで整理。入会金9,800円・月会費9,800円・成婚料50,000円・更新料の料金表（2026年10月14日公式確認）と1年総額、IBJ/SCRUM、FAQまで。",
};

const overview = {
  name: "セブン結婚相談所（結婚相談所セブン）",
  type: "IBJ加盟の担当カウンセラー制（オンライン中心）",
  members: "IBJ 約109,000人／SCRUM 約67,000人（公式掲載）",
  area: "五反田サロン（東京）・梅田サロン（大阪）＋オンラインで全国",
  initialFee: "入会金9,800円",
  monthlyFee: "9,800円（SCRUM追加で＋1,500円）",
  matchingFee: "50,000円",
  age: "公式に年齢層の公表なし",
  successRate: "公式に成婚率の公表なし",
};

const strengths = [
  {
    title: "入会金9,800円・月会費9,800円・成婚料50,000円の低価格",
    desc: "公式の料金ページでは入会金9,800円、月会費9,800円、お見合い料0円、成婚料50,000円（いずれも税込）です（2026年10月14日確認）。1年活動して成婚退会した場合の単純計算は退会手数料込みで179,200円で、当サイトの24社料金データの中でも低い水準です。",
  },
  {
    title: "IBJを使って月50人までお見合いを申し込める",
    desc: "基本プランはIBJ（日本結婚相談所連盟）のシステムで活動し、お見合いの申し込みは月50人まで（10人追加は1,100円）。SCRUMを追加すると初回3,300円＋月1,500円で、2つの連盟の会員に申し込めます（合計50人まで）。",
  },
  {
    title: "専任カウンセラーにいつでも相談できる",
    desc: "公式サイトは会員ごとの専任カウンセラーを最大の特徴として挙げ、2営業日以内の返信を目安にしています。電話・メッセージ・ZOOM面談での相談は無料です。",
  },
];

const pros = [
  "成婚料50,000円と、成婚料20万円台が多い中で低い",
  "お見合い料0円・相談無料で、追加費用が読みやすい",
  "IBJ＋SCRUMの2連盟を選べる",
];

const cons = [
  "活動1年後から毎年16,200円の更新料がかかる",
  "サロンは五反田と梅田の2か所のみ",
  "成婚率・会員の年齢層などの実績は公表されていない",
];

const faqs = [
  {
    q: "セブン結婚相談所の料金はいくらですか？",
    a: "入会金9,800円、月会費9,800円、お見合い料0円、成婚料50,000円、活動1年後から1年ごとの更新料16,200円、退会・成婚退会の手数料1,800円です（税込・2026年10月14日に公式サイトで確認）。",
  },
  {
    q: "「成果報酬型」の相談所ですか？",
    a: "いいえ。公式の料金は月会費制（9,800円）に成婚料50,000円が加わる仕組みで、結果が出るまで費用がかからない成果報酬型ではありません。お見合い料は0円です。",
  },
  {
    q: "セブン結婚相談所の口コミ・評判は？",
    a: "Googleマップの五反田サロンには55件の口コミがあり評価は4.3でした（当サイトが2026年8月に取得）。口コミサイト「みん評」には、カウンセラーのサポートや相手紹介を評価する声と、期待と違った点に触れる声の両方が掲載されています。",
  },
  {
    q: "セブン結婚相談所はやばい？安すぎて不安です",
    a: "安さの理由として、公式サイトは会員から依頼があった場合だけサポートする（頼まれていないお節介をしない）運営で費用を抑えていると説明しています。手厚い仲人型の伴走を求める人には合わない可能性があります。",
  },
  {
    q: "どこにサロンがありますか？",
    a: "東京エリアの五反田サロンと、関西エリアの梅田サロンです。相談は電話・メッセージ・ZOOMでもでき、オンラインで全国から活動できます。",
  },
  {
    q: "退会するときに費用はかかりますか？",
    a: "退会・成婚退会の手数料として1,800円がかかります。成婚退会の場合は別に成婚料50,000円（プロポーズ・結婚の口約束が成立した時点）が必要です。",
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
  { name: "スマリッジ", path: "/review/smartread/" },
  { name: "フィオーレ", path: "/review/fiore/" },
  { name: "naco-do", path: "/review/naco-do/" },
  { name: "エン婚活エージェント", path: "/review/en-konkatsu/" },
];

export default function SevenReview() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "結婚相談所セブン" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          セブン結婚相談所の口コミ・評判｜料金・1年総額・サロンを公式情報で確認
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月14日（料金は2026年10月14日に公式サイトで確認）</p>

        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=M6895M.1.Y109522N.Z1361712" target="_blank" rel="nofollow noopener noreferrer" className="text-[#A08447] hover:underline font-medium">
            セブン結婚相談所 の公式サイトはこちら
          </a>
          <img src="https://t.felmat.net/fmimp/M6895M.Y109522N.Z1361712" width="1" height="1" alt="" className="inline" />
        </p>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <img src="/ss-seven.jpg" alt="結婚相談所セブン 公式サイト" className="w-full h-auto" />
          <p className="text-[10px] text-gray-400 p-2 text-right">画像引用: 公式サイトより</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="bg-[#A08447] text-white px-6 py-3.5 font-normal tracking-widest">基本情報</div>
          <div className="divide-y divide-gray-50">
            {Object.entries({
              サービス名: overview.name, タイプ: overview.type, 会員数: overview.members,
              対応エリア: overview.area, 初期費用: overview.initialFee, 月会費: overview.monthlyFee,
              成婚料: overview.matchingFee, 年齢層: overview.age, 成婚率: overview.successRate,
            }).map(([k, v]) => (
              <div key={k} className="flex px-6 py-3.5 text-sm">
                <span className="w-28 shrink-0 font-medium text-[#2C2C2C]/50 tracking-wider">{k}</span>
                <span className="text-[#2C2C2C]">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">セブンの強み・特徴</h2>
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
              {pros.map((p) => (<li key={p} className="text-sm text-[#2C2C2C]/70 flex gap-2"><span className="text-green-500 shrink-0">+</span>{p}</li>))}
            </ul>
          </div>
          <div className="bg-red-50/50 rounded-xl p-6">
            <h3 className="font-medium text-red-800 mb-4 tracking-wider">デメリット</h3>
            <ul className="space-y-2">
              {cons.map((c) => (<li key={c} className="text-sm text-[#2C2C2C]/70 flex gap-2"><span className="text-red-400 shrink-0">-</span>{c}</li>))}
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 tracking-widest">他社との比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">結婚相談所セブン</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">naco-do</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">スマリッジ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">9,800円</td><td className="px-4 py-3 text-center">16,800円</td><td className="px-4 py-3 text-center">9,900円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">9,800円</td><td className="px-4 py-3 text-center">29,800円</td><td className="px-4 py-3 text-center">6,600円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">会員数</td><td className="px-4 py-3 text-center">IBJ約10.9万人</td><td className="px-4 py-3 text-center">約12.1万人</td><td className="px-4 py-3 text-center">約5.1万人</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">担当カウンセラー制</td><td className="px-4 py-3 text-center">オンライン完結型</td><td className="px-4 py-3 text-center">オンライン完結型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">成婚料50,000円</td><td className="px-4 py-3 text-center">3連盟連携</td><td className="px-4 py-3 text-center">成婚料0円</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <ReviewFacts
          name="セブン結婚相談所"
          checkedOn="2026年10月14日"
          officialUrl="https://seven-007.net/"
          feeHead={["項目", "金額（税込）", "補足"]}
          feeRows={[
            ["入会金", "9,800円", ""],
            ["月会費", "9,800円", "毎月10日に口座振替。活動開始月は日割り"],
            ["お見合い料", "0円", "IBJで月50人まで申し込み可（10人追加1,100円）"],
            ["成婚料", "50,000円", "結婚の口約束・プロポーズが成立した時点"],
            ["更新料", "16,200円", "活動開始1年後から1年ごと"],
            ["退会・成婚退会の手数料", "1,800円", ""],
            ["SCRUM追加（任意）", "初回3,300円＋月1,500円", "IBJと合わせて申し込みは合計50人まで"],
          ]}
          estimate={[{ label: "IBJのみ・1年で成婚退会", formula: "9,800円＋9,800円×12＋50,000円＋退会手数料1,800円", total: "179,200円" }]}
          company={[
            ["屋号", "セブン結婚相談所（SEVEN）"],
            ["創業", "2014年（公式サイト記載）"],
            ["代表", "吉村氏（公式サイトの代表挨拶より。運営法人名の記載なし）"],
            ["拠点", "五反田サロン（東京）・梅田サロン（大阪）"],
            ["加盟連盟", "IBJ（日本結婚相談所連盟）・SCRUM"],
          ]}
          reviewNote="Googleマップの「セブン結婚相談所 五反田サロン」には口コミ55件・評価4.3（当サイトが2026年8月18日に取得）。上位の比較記事もGoogleマップの口コミを出典にしているものが中心です。"
          good={[
            { text: "カウンセラーのサポートの手厚さ、趣味や価値観を踏まえた相手紹介を評価する声", source: "みん評 セブン結婚相談所" },
            { text: "スタッフの対応の良さを挙げる声", source: "みん評 セブン結婚相談所" },
          ]}
          bad={[
            { text: "期待と違った点や改善を求める声", source: "みん評 セブン結婚相談所（批判的な声を多く掲載する方針のサイト）" },
            { text: "希望条件が多く相手が見つからずに退会したという声", source: "みん評 セブン結婚相談所" },
          ]}
          sources={[
            { name: "セブン結婚相談所 料金・システム（公式）", url: "https://seven-007.net/price/" },
            { name: "みん評 セブン結婚相談所", url: "https://minhyo.jp/seven-marriagecounselor" },
          ]}
        />

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            結婚相談所セブンと他社を比較して選ぶ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            結婚相談所セブンが自分に合うか迷ったら、料金総額・会員数・サポート形式を他社と見比べるのがおすすめです。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（24社一覧）を見る</Link></li>
            <li><Link href="/review/smartread/" className="text-[#A08447] underline">スマリッジの評判・料金を見る</Link></li>
            <li><Link href="/review/naco-do/" className="text-[#A08447] underline">naco-doの評判・料金を見る</Link></li>
            <li><Link href="/review/en-konkatsu/" className="text-[#A08447] underline">エン婚活エージェントの評判・料金を見る</Link></li>
          </ul>
        </section>

        <FlowGuide name={overview.name} initialFee={overview.initialFee} monthlyFee={overview.monthlyFee} matchingFee={overview.matchingFee} />

              <FeePosition slug="seven" />

<section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">よくある質問</h2>
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
          <h2 className="text-xl font-light mb-4 tracking-widest">セブンの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">まずは料金と更新料の扱いを無料相談で確認しましょう</p>
          <a href="https://t.felmat.net/fmcl?ak=M6895M.1.Y109522N.Z1361712" target="_blank" rel="nofollow noopener noreferrer" className="inline-block bg-[#A08447] hover:bg-[#8A7239] text-white font-normal py-3 px-8 rounded-full transition-colors tracking-widest">公式サイトへ</a>
          <img src="https://t.felmat.net/fmimp/M6895M.Y109522N.Z1361712" width="1" height="1" alt="" className="inline" />
        </section>

        <section>
          <h2 className="text-lg font-light mb-4 tracking-widest">他の結婚相談所も見る</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link key={s.name} href={s.path} className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm font-normal hover:border-[#A08447] hover:text-[#A08447] transition-colors tracking-wider">{s.name}</Link>
            ))}
          </div>
        </section>
      <AuthorBox />
      <BrandStores href="/review/seven/" brandName="セブン結婚相談所" />
      </article>
    </>
  );
}
