import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";
import FlowGuide from "@/components/FlowGuide";
import BrandStores from "@/components/BrandStores";
import ReviewFacts from "@/components/ReviewFacts";

export const metadata = {
  title: "結婚相談所フィオーレ（FIORE）の口コミ・評判｜料金3コース・成婚率52.0%の定義【2026年10月】",
  description:
    "結婚相談所フィオーレ（FIORE）の口コミ・評判を掲載媒体つきで整理。3コースの料金（2026年10月14日公式確認）、1年総額の計算、成婚率52.0%の定義、運営会社、勧誘・退会のFAQまで。",
};

const overview = {
  name: "FIORE（フィオーレ）",
  type: "仲人型＋AIマッチング・会員検索（コース別）",
  members: "75,048名（2026年7月時点・公式）",
  area: "全国17店舗（札幌〜大分。関西発）",
  initialFee: "入会登録費33,000円（フォーム予約で半額）",
  monthlyFee: "7,700円〜14,300円（コース別）",
  matchingFee: "0円〜220,000円（コース別）",
  age: "20〜50代",
  successRate: "52.0%（2012〜2025年・自社発表）",
};

const strengths = [
  {
    title: "成婚率52.0%（2012〜2025年・自社発表）と算出方法を公開",
    desc: "公式サイトは成婚率を「2012〜2025年の全退会者16,692名のうち、成婚退会した8,684名の割合＝52.0%」と定義つきで公表しています。成婚率の定義は相談所ごとに異なるため、他社と比べるときは分母（全退会者か、在籍会員か）を確認しましょう。",
  },
  {
    title: "登録会員数75,048名（2026年7月時点）",
    desc: "公式サイトの登録会員数は75,048名（2026年7月時点）で、内訳は関東30,968名・関西17,826名・中部12,329名など。関東の会員が最も多く、関西以外でも活動できます。",
  },
  {
    title: "目的別に選べる3コース",
    desc: "AIマッチングで毎月2名/4名の紹介を受けるリミテッドコース、会員検索で自分から申し込むフレキシブルコース、成婚料なしで手厚いサポートを受けるフィオーレコースの3つ。料金の仕組みがコースで大きく違うため、下の料金表で確認してください。",
  },
];

const pros = [
  "成婚率52.0%を算出方法つきで公表している",
  "登録会員75,048名（2026年7月時点）・全国17店舗",
  "月会費7,700円〜のコースがあり、フォーム予約で入会登録費が半額",
];

const cons = [
  "コースで料金体系が大きく違い、比較しにくい",
  "リミテッド/フレキシブルは成婚時に110,000円/220,000円かかる",
  "フィオーレコースは入会時の支払いが30万円台になる",
];

const faqs = [
  {
    q: "FIORE（フィオーレ）の入会条件はありますか？",
    a: "20歳以上の独身の方が入会可能です。男性は定職に就いていることが条件となります。入会時には独身証明書、収入証明書、本人確認書類が必要です。",
  },
  {
    q: "フィオーレの成婚率52.0%はどのように算出されていますか？",
    a: "公式サイトでは「2012〜2025年の全退会者16,692名のうち、成婚退会した8,684名の割合」として52.0%と公表しています（2026年10月14日確認）。各社で算出方法が異なるため、単純な比較はできません。",
  },
  {
    q: "フィオーレの無料相談では何ができますか？",
    a: "無料相談では、カウンセラーとの面談、サービスの説明、料金プランの案内、婚活に関するアドバイスが受けられます。店舗またはオンラインで対応可能です。",
  },
  {
    q: "フィオーレの退会方法を教えてください",
    a: "担当カウンセラーに退会の意思を伝え、所定の手続きを行います。成婚退会の場合は成婚料が発生します。中途退会の場合、契約期間に応じた精算が行われます。",
  },
  {
    q: "フィオーレは関西以外でも利用できますか？",
    a: "利用できます。公式サイトの店舗一覧は札幌・仙台・新宿・東京・千葉・名古屋・心斎橋・梅田・神戸・京都・滋賀・岡山・高松・福岡・大分など17店舗で、登録会員も関東が30,968名と最多です（2026年10月14日確認）。",
  },
  {
    q: "フィオーレの成婚退会までの平均期間はどのくらいですか？",
    a: "公式サイトに平均期間の公表は見当たりませんでした。リミテッド・フレキシブルコースの活動期間は12ヶ月、フィオーレコースは12/18/24ヶ月の3プランで、プランの長さが目安になります。",
  },
  {
    q: "フィオーレは勧誘がしつこい・やばいという口コミは本当？",
    a: "口コミサイトには婚活パーティー参加後の勧誘や、契約前の説明と実際が違ったという声が掲載されています（Smartlog・みん評）。一方で担当者のサポートを評価する声もあります（オリコン顧客満足度調査）。無料相談では総額と中途解約時の精算方法を書面で確認し、その場で契約しないことをおすすめします。",
  },
  {
    q: "フィオーレを途中で解約したら返金はありますか？",
    a: "公式の料金ページに、フィオーレコース・ショートを3ヶ月活動して解約した場合の返金例（123,550円）が掲載されています（2026年10月14日確認）。条件は契約内容で変わるため、入会前に書面で確認してください。",
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
  { name: "ムスベル", path: "/review/musbell/" },
  { name: "ツヴァイ", path: "/review/zwei/" },
  { name: "パートナーエージェント", path: "/review/partner-agent/" },
  { name: "サンマリエ", path: "/review/sunmarie/" },
];

export default function FioreReview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb items={[{ name: "口コミ・評判", href: "/" }, { name: "FIORE（フィオーレ）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          結婚相談所フィオーレ（FIORE）の口コミ・評判｜料金3コース・成婚率の定義まで
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年10月14日（料金・実績は2026年10月14日に公式サイトで確認）</p>

        <p className="text-sm mb-6">
          <a href="https://t.felmat.net/fmcl?ak=T8680S.1.X1309788.Z1361712" target="_blank" rel="nofollow noopener noreferrer" className="text-[#A08447] hover:underline font-medium">
            フィオーレ の公式サイトはこちら
          </a>
        </p>

        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <img src="/ss-fiore.jpg" alt="FIORE（フィオーレ） 公式サイト" className="w-full h-auto" />
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">フィオーレの強み・特徴</h2>
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

        <ReviewFacts
          name="フィオーレ"
          checkedOn="2026年10月14日"
          officialUrl="https://www.total-marriage.com/"
          feeHead={["コース", "入会時", "月会費", "お見合い成立時", "成婚退会時"]}
          feeRows={[
            ["リミテッド プラン2（毎月2名紹介）", "33,000円（フォーム予約16,500円）", "9,900円", "AI紹介以外で成立時5,500円", "110,000円"],
            ["リミテッド プラン4（毎月4名紹介）", "33,000円（フォーム予約16,500円）", "14,300円", "AI紹介以外で成立時5,500円", "110,000円"],
            ["フレキシブル（会員検索）", "66,000円（フォーム予約49,500円）", "7,700円", "11,000円", "220,000円"],
            ["フィオーレコース ショート（12ヶ月）", "入会時〜6ヶ月の分割で計320,100円（フォーム予約303,600円）", "5,830円", "—", "0円"],
            ["フィオーレコース スタンダード（18ヶ月）", "9ヶ月の分割で計379,500円（フォーム予約363,000円）", "5,830円", "—", "0円"],
            ["フィオーレコース プレミアム（24ヶ月）", "12ヶ月の分割で計438,900円（フォーム予約422,400円）", "5,830円", "—", "0円"],
          ]}
          feeNotes={[
            "金額は税込。リミテッド・フレキシブルの活動期間は12ヶ月。",
            "平日来店キャンペーン（2026年10月5日〜10月30日・平日面談・フィオーレコース限定）で入会登録費0円の告知あり。",
            "フィオーレコースの月会費5,830円が上記の合計とは別にかかるかは、公式表記からは読み取れないため無料相談で確認してください。",
            "CONNECT-shipの紹介を受ける場合は月5,500円のオプション。休止期間中の月会費は0円。",
          ]}
          estimate={[
            { label: "リミテッド プラン2", formula: "33,000円＋9,900円×12＋110,000円", total: "261,800円" },
            { label: "フレキシブル（お見合い成立0件の場合）", formula: "66,000円＋7,700円×12＋220,000円", total: "378,400円" },
          ]}
          company={[
            ["屋号", "FIORE（フィオーレ）"],
            ["運営", "株式会社トータルマリアージュサポート（TMSグループの直営結婚相談所）"],
            ["本社", "大阪市中央区西心斎橋2-2-7 御堂筋ジュンアシダビル7F"],
            ["店舗", "全国17店舗（札幌・仙台・新宿・東京・千葉・名古屋・心斎橋・梅田・大阪駅前第3ビル・神戸・京都四条烏丸・JR京都駅前・滋賀・岡山・高松・福岡・大分）"],
            ["加盟・認証", "日本結婚相手紹介サービス協議会（JMIC）理事団体・ISO9001"],
          ]}
          good={[
            { text: "担当者が親身にサポートしてくれた、希望条件に合う人を紹介してもらえたという声", source: "オリコン顧客満足度調査 結婚相談所（FIORE）" },
            { text: "お見合いへの同行など、活動中のフォローを評価する声", source: "結婚相談所比較メディアの体験取材記事" },
          ]}
          bad={[
            { text: "婚活パーティー参加後に入会を勧められたという声", source: "Smartlog の口コミまとめ記事" },
            { text: "月々の費用に対して紹介やメールの数が少ないという声", source: "オリコン顧客満足度調査（気になった点）" },
            { text: "契約前の説明と実際の会員状況が違った、支払い（ローン）の負担が重いという声", source: "みん評（批判的な声が集まりやすいと明記している口コミサイト）" },
          ]}
          reviewNote="Googleマップでは、口コミ3件以上のフィオーレ12店舗に計365件の口コミがあり、店舗ごとの評価は2.1〜4.8（口コミ件数で加重した平均4.06）でした（当サイトが2026年8〜9月に取得。店舗別の内訳はページ下部）。店舗・担当者で評価に幅があります。"
          caution={["媒体ごとに評価の傾向が異なります。費用・勧誘に関する不満は、契約前に総額と解約条件を書面で確認することで避けやすくなります。"]}
          sources={[
            { name: "オリコン顧客満足度 FIORE", url: "https://life.oricon.co.jp/rank_marriage/company/fiore/" },
            { name: "みん評 FIORE", url: "https://minhyo.jp/fiore" },
            { name: "Smartlog", url: "https://smartlog.jp/284011" },
          ]}
        />

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 tracking-widest">他社との比較</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">比較項目</th>
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">フィオーレ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">ツヴァイ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">サンマリエ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">7,700円〜</td><td className="px-4 py-3 text-center">15,400円〜</td><td className="px-4 py-3 text-center">18,700円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">33,000円（入会登録費）</td><td className="px-4 py-3 text-center">115,500円〜</td><td className="px-4 py-3 text-center">165,000円（入会金＋初期活動費）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">会員数</td><td className="px-4 py-3 text-center">75,048名</td><td className="px-4 py-3 text-center">約9.4万人</td><td className="px-4 py-3 text-center">101,240名（IBJ）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">ハイブリッド型</td><td className="px-4 py-3 text-center">ハイブリッド型</td><td className="px-4 py-3 text-center">仲人型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">成婚率52.0%（自社発表）</td><td className="px-4 py-3 text-center">全国50店舗</td><td className="px-4 py-3 text-center">1981年創業・23店舗</td></tr>
              </tbody>
            </table>
          </div>
        </section>


        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            FIORE（フィオーレ）と他社を比較して選ぶ
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            FIORE（フィオーレ）が自分に合うか迷ったら、料金総額・会員数・サポート形式を他社と見比べるのがおすすめです。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（24社一覧）を見る</Link></li>
            <li><Link href="/review/zwei/" className="text-[#A08447] underline">ツヴァイの評判・料金を見る</Link></li>
            <li><Link href="/review/partner-agent/" className="text-[#A08447] underline">パートナーエージェントの評判・料金を見る</Link></li>
            <li><Link href="/review/sunmarie/" className="text-[#A08447] underline">サンマリエの評判・料金を見る</Link></li>
          </ul>
        </section>

        <FlowGuide name={overview.name} initialFee={overview.initialFee} monthlyFee={overview.monthlyFee} matchingFee={overview.matchingFee} />

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

        

        {/* マッチングシミュレーション CTA */}
        <section className="bg-gradient-to-r from-[#A08447] to-[#C9B99A] rounded-2xl p-8 text-white text-center mb-8">
          <h2 className="text-lg font-light mb-3 tracking-widest">結婚相手マッチングシミュレーション</h2>
          <p className="text-white/70 text-sm mb-6 tracking-wider">あなたに合う理想のお相手が何人いるか、無料でシミュレーションできます</p>
          <a href="https://t.felmat.net/fmcl?ak=O8781X.1.R131784K.Z1361712" target="_blank" rel="nofollow noopener noreferrer">
            <img src="https://t.felmat.net/fmimg/O8781X.R131784K.Z1361712" width="300" height="250" alt="フィオーレ マッチングシミュレーション" className="mx-auto rounded-lg mb-4" />
          </a>
          <a href="https://t.felmat.net/fmcl?ak=O8781X.1.R131784K.Z1361712" target="_blank" rel="nofollow noopener noreferrer" className="inline-block bg-white text-[#A08447] font-normal py-3 px-8 rounded-full transition-colors tracking-widest hover:bg-gray-100">無料シミュレーションを試す</a>
        </section>

        <section className="bg-[#333333] rounded-2xl p-10 text-white text-center mb-12">
          <h2 className="text-xl font-light mb-4 tracking-widest">フィオーレの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">まずは無料相談で総額と解約条件を確認しましょう</p>
          <div className="mb-6">
            <p className="text-[10px] tracking-widest text-gray-400 mb-2 text-center">PR（フィオーレ・提携広告）</p>
            <a href="https://t.felmat.net/fmcl?ak=T8680S.1.X1309788.Z1361712" target="_blank" rel="nofollow noopener noreferrer">
              <img src="https://t.felmat.net/fmimg/T8680S.X1309788.Z1361712" width="300" height="250" alt="フィオーレ" className="mx-auto rounded-lg" />
            </a>
          </div>
          <a href="https://t.felmat.net/fmcl?ak=T8680S.1.X1309788.Z1361712" target="_blank" rel="nofollow noopener noreferrer" className="inline-block bg-[#A08447] hover:bg-[#8A7239] text-white font-normal py-3 px-8 rounded-full transition-colors tracking-widest">公式サイトへ</a>
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
      <BrandStores href="/review/fiore/" brandName="フィオーレ" />

      </article>
    </>
  );
}
