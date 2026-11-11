import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";
import FlowGuide from "@/components/FlowGuide";
import BrandStores from "@/components/BrandStores";
import ReviewFacts from "@/components/ReviewFacts";

export const metadata = {
  title: "結婚相談所フィオーレ（FIORE）の口コミ・評判｜オリコン18件の集計・料金3コース・割引【2026年11月】",
  description:
    "結婚相談所フィオーレ（FIORE）の口コミ・評判を、オリコン顧客満足度の利用者の声18件のテーマ別集計で整理しています。3コースの料金（月会費5,830円〜17,600円）と20代応援プラン・のりかえ割、会員数75,048名の内訳、成婚率52.0%の定義、解約・返金の条件も掲載しています。",
};

const overview = {
  name: "FIORE（フィオーレ）",
  type: "仲人型＋AIマッチング・会員検索（コース別）",
  members: "75,048名（2026年7月時点・公式。SCRUMとCONNECT-shipの会員の合算で、フィオーレ自社の会員は7,714名）",
  area: "全国17店舗（札幌〜大分。関西発）",
  initialFee: "入会登録費33,000円（フォーム予約で半額）",
  monthlyFee: "5,830円〜17,600円（コース別）",
  matchingFee: "0円〜220,000円（コース別）",
  age: "20〜50代",
  successRate: "52.0%（2012〜2025年・自社発表）",
};

const strengths = [
  {
    title: "成婚率52.0%（2012〜2025年・自社発表）と算出方法を公開",
    desc: "公式サイトは成婚率を「2012〜2025年の全退会者16,692名のうち、成婚退会した8,684名の割合＝52.0%」と、算出定義を明記して公表しています。成婚率の定義は相談所ごとに異なるため、他社と比較する際は分母（全退会者か、在籍会員か）をご確認ください。",
  },
  {
    title: "登録会員数75,048名（2026年7月時点）",
    desc: "公式サイトの登録会員数は75,048名（2026年7月時点）で、地域別の内訳は関東30,968名・関西17,826名・中部12,329名などです。この人数は、「SCRUM」の登録会員68,406名（うちフィオーレ自社の会員7,714名）と、「CONNECT-ship」の有効会員14,797名を合算し、重複する8,155名を除いた数と公式に注記されています（2026年11月11日確認）。75,048名のうち、フィオーレに直接在籍している会員は約1割です。",
  },
  {
    title: "目的別に選べる3コース",
    desc: "AIマッチングで毎月2名/4名の紹介を受けるリミテッドコース、会員検索と担当者の推薦紹介を使うスマートコース、成婚料0円でお見合い回数の保証（6/9/12回）が付くフィオーレコースの3つです（2026年10月21日公式確認）。料金の仕組みがコースによって大きく異なるため、下の料金表でご確認ください。",
  },
];

const pros = [
  "成婚率52.0%とその算出方法を公表している",
  "登録会員75,048名（2026年7月時点）・全国17店舗",
  "月会費はコース別に5,830円〜17,600円。公式サイトからの来店予約で入会登録費が半額（33,000円→16,500円）",
  "フィオーレコースは、約束したお見合い回数に届かない場合に会員期間の無料延長か費用の一部返金を選べる",
];

const cons = [
  "コースで料金体系が大きく違い、比較しにくい",
  "リミテッド/スマートは成婚時に110,000円/220,000円かかる",
  "フィオーレコースは入会時の支払いが30万円台になる",
];

const faqs = [
  {
    q: "FIORE（フィオーレ）の入会条件と必要書類を教えてください",
    a: "公式の料金ページ（2026年11月11日確認）では、入会資格を「法律上の独身で、同棲関係を含む事実上の婚姻関係のない方」「男女ともに20歳以上の方」「各コースの入会規定を基準とした当社の入会審査をクリアされる方」としています。必要書類は、預金口座振替の登録、本人確認書類（運転免許証・マイナンバーカード・パスポート）、公的に独身を証明する書類（原本）、最終学歴を証明する書類（卒業証書のコピーで可）、年収証明書（前年度の源泉徴収票）、登録用の顔写真です。",
  },
  {
    q: "フィオーレの成婚率52.0%はどのように算出されていますか？",
    a: "公式サイトでは「2012〜2025年の全退会者16,692名のうち、成婚退会した8,684名の割合」として52.0%と公表しています（2026年10月14日確認）。各社で算出方法が異なるため、単純な比較はできません。",
  },
  {
    q: "フィオーレの無料相談では何ができますか？",
    a: "公式の料金ページのよくある質問では、「無料相談では、あなたの場合の総額やコースの選び方をご説明するだけで、勧誘はいたしません。ご来店・オンラインのどちらでも承ります」と案内しています。公式のよくあるご質問には、来店時に実際に活動している会員のプロフィールを一部閲覧できること、来店前に希望条件に沿ったお相手のプロフィールが最大2名分メールで届く「会員紹介シミュレーション」を無料で利用できることも記載されています（2026年11月2日確認）。",
  },
  {
    q: "フィオーレの退会方法を教えてください",
    a: "公式サイトには中途退会の申し出方法の記載が見当たらないため、手続きの方法は契約書面か店舗でご確認ください。公式の料金ページ（2026年11月2日確認）では、入会契約書面を受け取った日を含む8日間は、書面または電磁的記録で無条件に契約を解除できる（クーリング・オフ）と案内しています。その後の中途解約は、会員活動開始日の前日までなら30,000円（税込）を除いた支払い済み料金の全額、活動開始日以降は入会登録費・提供済みの活動費用・特定商取引法にもとづく中途解約手数料を除いた額が返金されます。他社の解約条件は「結婚相談所の解約・返金ルール比較」にまとめています。",
  },
  {
    q: "フィオーレは関西以外でも利用できますか？",
    a: "利用できます。公式サイトの店舗一覧は札幌・仙台・新宿・東京・千葉・名古屋・心斎橋・梅田・神戸・京都・滋賀・岡山・高松・福岡・大分など17店舗で、登録会員も関東が30,968名と最多です（2026年10月14日確認）。",
  },
  {
    q: "フィオーレの成婚退会までの平均期間はどのくらいですか？",
    a: "全年代の平均期間の公表は見当たりませんでした。公式の20代応援プランのページ（2026年11月11日確認）には、20代の会員について「1年以内に成婚85.2%」「1年半以内に成婚97.7%」「7回くらいお見合いをして4〜5ヶ月の活動期間で成婚される方が最多」と掲載されていますが、集計期間や母数の記載はありません。リミテッド・スマートコースの活動期間は12ヶ月、フィオーレコースは12/18/24ヶ月の3プランです。",
  },
  {
    q: "フィオーレについて「勧誘がしつこい」「やばい」という口コミがありますが、実際はどうですか？",
    a: "口コミサイトには婚活パーティー参加後の勧誘や、契約前の説明と実際が違ったという声が掲載されています（Smartlog・みん評）。一方で担当者のサポートを評価する声もあります（オリコン顧客満足度調査）。無料相談では総額と中途解約時の精算方法を書面で確認し、その場で契約しないことをおすすめします。",
  },
  {
    q: "フィオーレを途中で解約したら返金はありますか？",
    a: "あります。活動開始日の前日までの解約は30,000円（税込）を除いて全額、活動開始日以降は入会登録費・提供済みの活動費用・中途解約手数料を除いた額が返金されます（公式の料金ページ、2026年11月11日確認）。料金ページでは、活動開始日以降の中途解約手数料を徴収するコースをリミテッドコース・スマートコースと明記しています。手数料の金額は料金ページに記載がないため、契約書面でご確認ください。なお、フィオーレコースで約束したお見合い回数（ショート6回・スタンダード9回・プレミアム12回）に届かなかった場合は、会員期間の無料延長か費用の一部返金を選べると公式に記載されています。",
  },
  {
    q: "フィオーレの割引にはどのようなものがありますか？",
    a: "公式サイト（2026年11月11日確認）には3つの割引が掲載されています。①公式サイト割：公式サイトから来店（オンライン相談を含む）を予約すると、全コースで入会登録費が33,000円から16,500円になります。②20代応援プラン：契約日時点で20〜29歳の方は、フィオーレコースの入会時初期費用が15％オフになります（例：スタンダード379,500円→322,575円）。③のりかえ割：過去1年以内にほかの結婚相談所で活動した方は、前の相談所の活動を証明する書類の提出により、フィオーレコースの入会時初期費用が10％オフになります（TMS加盟店からの転籍は対象外）。20代応援プランとのりかえ割は、他の割引と併用できません。",
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
          結婚相談所フィオーレ（FIORE）の口コミ・評判｜オリコン18件の集計・料金3コース・割引まで
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月11日（料金・割引・解約条件・会員数の内訳を2026年11月11日に公式サイトで確認。オリコン顧客満足度の利用者の声18件を同日に集計）</p>

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
          checkedOn="2026年11月11日"
          officialUrl="https://www.total-marriage.com/"
          feeHead={["コース", "入会時（公式サイト割の適用後）", "月会費", "お見合い成立時", "成婚退会時"]}
          feeRows={[
            ["リミテッド プラン2（毎月2名紹介）", "33,000円（16,500円）", "9,900円", "AI紹介以外で成立時5,500円", "110,000円"],
            ["リミテッド プラン4（毎月4名紹介）", "33,000円（16,500円）", "14,300円", "AI紹介以外で成立時5,500円", "110,000円"],
            ["スマートコース（会員検索＋推薦紹介）", "126,500円（110,000円）", "17,600円", "3,300円（札幌・仙台・高松・大分店は0円）", "220,000円"],
            ["フィオーレコース ショート（12ヶ月・お見合い6回保証）", "320,100円（303,600円）", "5,830円", "0円", "0円"],
            ["フィオーレコース スタンダード（18ヶ月・9回保証）", "379,500円（363,000円）", "5,830円", "0円", "0円"],
            ["フィオーレコース プレミアム（24ヶ月・12回保証）", "438,900円（422,400円）", "5,830円", "0円", "0円"],
          ]}
          feeNotes={[
            "金額は税込です。公式サイト割は、公式サイトから来店（オンライン相談を含む）を予約した場合に入会登録費が33,000円から16,500円になる割引です。",
            "リミテッド・スマートの活動期間は12ヶ月です。フィオーレコースの期間には無料更新期間が含まれます（ショート6ヶ月＋無料6ヶ月、スタンダード9ヶ月＋無料9ヶ月、プレミアム12ヶ月＋無料12ヶ月）。",
            "スマートコースの入会時の費用には、初期サポート費60,500円が含まれます。リミテッドコースで全国結婚相談事業者連盟にプロフィールを載せる場合は、別に33,000円かかります。",
            "活動開始から6ヶ月経過後（7ヶ月目以降）は、月額1,100円で活動を一部制限できます（リミテッドコースを除く。制限した月数分、会員期間が延長されます）。",
            "公式は、フィオーレコース ショートで1年活動した場合の総額を、成婚した場合もしなかった場合も373,560円（公式サイト割の適用後）と示しています。",
            "2026年10月19日に当サイトで確認した時点の「フレキシブル（会員検索）」コースは、10月21日の公式料金表には掲載がありません。",
          ]}
          estimate={[
            { label: "リミテッド プラン2（成婚した場合）", formula: "16,500円＋9,900円×12＋110,000円", total: "245,300円" },
            { label: "スマートコース（成婚・お見合い成立0件の場合）", formula: "110,000円＋17,600円×12＋220,000円", total: "541,200円" },
            { label: "フィオーレコース ショート", formula: "303,600円＋5,830円×12", total: "373,560円" },
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


        <section id="oricon-voices" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">フィオーレの口コミ：オリコン顧客満足度の利用者の声18件をテーマ別に集計（2026年11月11日確認）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            フィオーレの口コミを件数と投稿者の属性つきで確認できる媒体として、オリコン顧客満足度の企業ページ（過去5年以内に結婚相談所を利用した人など3,922人を対象とした調査の一部）があります。当サイトでは、掲載されている利用者の声18件（良い点12件・気になる点6件）を全件確認し、内容をテーマ別に分類しました。1件に複数の論点がある場合は、それぞれのテーマで数えています。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]"><th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">区分・テーマ</th><th className="px-4 py-3 text-left font-medium text-[#2C2C2C] whitespace-nowrap">件数</th><th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">内容の傾向</th></tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">良い点：紹介・お見合いの数や条件の合致</td><td className="px-4 py-3">4件</td><td className="px-4 py-3">条件に合う相手を紹介してもらえた、お見合いを継続的に組めたという声</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">良い点：担当者の対応</td><td className="px-4 py-3">3件</td><td className="px-4 py-3">話を親身に聞いてもらえた、サポートが丁寧だったという声</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">良い点：出会いの幅</td><td className="px-4 py-3">3件</td><td className="px-4 py-3">普段の生活圏では出会えない人と会えたという声</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">良い点：サイト・プロフィールの見やすさ</td><td className="px-4 py-3">2件</td><td className="px-4 py-3">会員サイトやプロフィールページが使いやすいという声（うち1件は入会後すぐに相手が見つかり結婚したと記載）</td></tr>
                <tr className="border-t border-gray-50 bg-red-50/40"><td className="px-4 py-3">気になる点：費用の負担</td><td className="px-4 py-3">3件</td><td className="px-4 py-3">料金が高い、活動の少ない月も定額で高く感じたという声。月会費の金額に触れた1件は「月6,000円弱」と記載しており、現在のフィオーレコースの月会費5,830円と同じ水準です</td></tr>
                <tr className="border-t border-gray-50 bg-red-50/40"><td className="px-4 py-3">気になる点：担当者による差</td><td className="px-4 py-3">2件</td><td className="px-4 py-3">スタッフによって対応が異なる、最初の担当が新人でサポートが少なかったという声</td></tr>
                <tr className="border-t border-gray-50 bg-red-50/40"><td className="px-4 py-3">気になる点：会員・お相手</td><td className="px-4 py-3">2件</td><td className="px-4 py-3">思っていたほど会員がいなかった、良いと思える相手が少なかったという声</td></tr>
                <tr className="border-t border-gray-50 bg-red-50/40"><td className="px-4 py-3">気になる点：プロフィールの記載</td><td className="px-4 py-3">1件</td><td className="px-4 py-3">担当者が書くプロフィールのコメントが良く書かれすぎているという声</td></tr>
              </tbody>
            </table>
          </div>
          <ul className="space-y-1 text-xs text-[#2C2C2C]/60 leading-relaxed mb-4">
            <li>※出典：<a href="https://life.oricon.co.jp/rank_marriage/company/fiore/" target="_blank" rel="nofollow noopener noreferrer" className="underline">オリコン顧客満足度 FIORE（フィオーレ）の評判・口コミ</a>（コメント総数18件・2026年11月11日確認）。分類は当サイトによるもので、本文は転載していません。</li>
            <li>※投稿者の内訳は女性13件・男性5件で、30代女性が11件と過半数です。投稿日は表示されていないため、現在の料金体系になる前の利用経験が含まれる可能性があります。</li>
            <li>※口コミは投稿者個人の見解で、当サイトでは事実関係を確認していません。</li>
          </ul>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
            集計からは、紹介やお見合いの組みやすさ、担当者の対応を評価する声が多い一方で、費用負担と担当者による対応の差に触れた声もあることがわかります。無料相談では、担当者の経験年数と担当変更の可否、ご自身の希望条件で紹介できる会員の人数を確認しておくことをおすすめします。勧誘やローンに関する声は、上の表とは別にSmartlog・みん評に掲載されています（前述の「口コミの傾向」をご参照ください）。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">フィオーレの割引（2026年11月11日公式確認・税込）</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]"><th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">割引</th><th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">対象</th><th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">内容</th></tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">公式サイト割</td><td className="px-4 py-3">公式サイトから来店（オンライン相談を含む）を予約した方・全コース</td><td className="px-4 py-3">入会登録費33,000円→16,500円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">20代応援プラン</td><td className="px-4 py-3">契約日時点で20〜29歳の方・フィオーレコース</td><td className="px-4 py-3">入会時初期費用15％オフ（ショート320,100円→272,052円／スタンダード379,500円→322,575円／プレミアム438,900円→372,966円）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">のりかえ割</td><td className="px-4 py-3">過去1年以内にほかの結婚相談所で活動した方（活動の証明書類が必要・TMS加盟店からの転籍は対象外）・フィオーレコース</td><td className="px-4 py-3">入会時初期費用10％オフ（ショート288,090円／スタンダード341,550円／プレミアム394,944円）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">※20代応援プランとのりかえ割は他の割引と併用できず、月会費（5,830円）は変わりません。出典：<a href="https://www.total-marriage.com/pricing/" target="_blank" rel="nofollow noopener noreferrer" className="underline">フィオーレ公式 コース・料金</a>・20代応援プラン・のりかえ割の各ページ（2026年11月11日確認）。割引の内容は変更される場合があります。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">年代別の成婚率（公式公表値）</h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            公式の20代応援プランのページ（2026年11月11日確認）には、年代別の成婚率として「〜29歳60.1%／30〜34歳56.2%／35〜39歳48.8%／40〜44歳50.6%／45〜49歳47.7%／50歳〜38.2%」が掲載されています。全体の成婚率52.0%は「2012〜2025年の全退会者のうち成婚退会した方の割合」と定義が明記されていますが、年代別の数値については集計期間や分母の記載がありません。目安として参照し、ご自身の年代の実績は無料相談で確認することをおすすめします。
          </p>
        </section>

        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="bg-[#FAF7F2] rounded-xl p-6">
            <h3 className="font-medium text-[#A08447] mb-4 tracking-wider">フィオーレが向いている方</h3>
            <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
              <li>・成婚料0円で、入会時に総額を確定させたい方（フィオーレコース）</li>
              <li>・お見合い回数の保証（6/9/12回）が付くプランを選びたい方</li>
              <li>・関西・関東などに対面の店舗がある相談所を選びたい方（全国17店舗）</li>
              <li>・20代の方、または過去1年以内に他の相談所で活動した方（初期費用の割引対象）</li>
            </ul>
          </div>
          <div className="bg-[#FAF7F2] rounded-xl p-6">
            <h3 className="font-medium text-[#2C2C2C]/70 mb-4 tracking-wider">ほかの相談所も比較したほうがよい方</h3>
            <ul className="space-y-2 text-sm text-[#2C2C2C]/70">
              <li>・入会時の支払いを10万円以下に抑えたい方（フィオーレコースは30万円台）</li>
              <li>・活動しない月の費用を抑えたい方（活動制限は7ヶ月目以降・月1,100円）</li>
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
                  <th className="px-4 py-3 text-center font-medium text-[#A08447]">フィオーレ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">ツヴァイ</th>
                  <th className="px-4 py-3 text-center font-medium text-[#2C2C2C]">サンマリエ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">月会費</td><td className="px-4 py-3 text-center">5,830円〜</td><td className="px-4 py-3 text-center">15,400円〜</td><td className="px-4 py-3 text-center">18,700円</td></tr>
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
            FIORE（フィオーレ）が自分に合うか迷ったら、料金総額・会員数・サポート形式を他社と見比べることをおすすめします。
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/compare/" className="text-[#A08447] underline">結婚相談所の料金比較（24社一覧）を見る</Link></li>
            <li><Link href="/knowledge/kaiyaku/" className="text-[#A08447] underline">結婚相談所の解約・返金ルール比較（クーリング・オフ・中途解約）を見る</Link></li>
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
          <p className="text-white/70 text-sm mb-6 tracking-wider">ご希望の条件に合うお相手の人数を、無料でシミュレーションできます</p>
          <a href="https://t.felmat.net/fmcl?ak=O8781X.1.R131784K.Z1361712" target="_blank" rel="nofollow noopener noreferrer">
            <img src="https://t.felmat.net/fmimg/O8781X.R131784K.Z1361712" width="300" height="250" alt="フィオーレ マッチングシミュレーション" className="mx-auto rounded-lg mb-4" />
          </a>
          <a href="https://t.felmat.net/fmcl?ak=O8781X.1.R131784K.Z1361712" target="_blank" rel="nofollow noopener noreferrer" className="inline-block bg-white text-[#A08447] font-normal py-3 px-8 rounded-full transition-colors tracking-widest hover:bg-gray-100">無料シミュレーションを試す</a>
        </section>

        <section className="bg-[#333333] rounded-2xl p-10 text-white text-center mb-12">
          <h2 className="text-xl font-light mb-4 tracking-widest">フィオーレの無料相談を予約する</h2>
          <p className="text-white/50 text-sm mb-8 tracking-wider">無料相談では、総額と解約条件を契約前に確認できます</p>
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
