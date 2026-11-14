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
    "セブン結婚相談所（結婚相談所セブン）の口コミ・評判をGoogleマップ等の掲載媒体を明記して整理しています。入会金9,800円・月会費9,800円・成婚料50,000円・更新料の料金表（2026年11月14日公式確認）、1年総額、運営会社・サロン所在地、IBJ/SCRUMの仕組み、よくある質問を掲載。",
};

const overview = {
  name: "セブン結婚相談所（結婚相談所セブン）",
  type: "IBJ加盟の担当カウンセラー制（オンライン中心）",
  members: "IBJ 約109,000人／SCRUM 約67,000人（公式掲載）",
  area: "五反田サロン（東京都品川区）・梅田サロン（大阪市北区）＋オンラインで全国",
  company: "株式会社ACパートナーズ（大阪市北区梅田）",
  record: "成婚実績89組（2024年1月〜2025年4月・公式トップページ掲載）",
  initialFee: "入会金9,800円",
  monthlyFee: "9,800円（SCRUM追加で＋1,500円）",
  matchingFee: "50,000円",
  age: "公式に年齢層の公表なし",
  successRate: "公式に成婚率の公表なし",
};

const strengths = [
  {
    title: "入会金9,800円・月会費9,800円・成婚料50,000円の低価格",
    desc: "公式の料金ページでは入会金9,800円、月会費9,800円、お見合い料0円、成婚料50,000円（いずれも税込）です（2026年10月27日確認）。1年活動して成婚退会した場合の単純計算は退会手数料込みで179,200円で、当サイトの24社料金データの中でも低い水準です。",
  },
  {
    title: "IBJを使って月50人までお見合いを申し込める",
    desc: "基本プランはIBJ（日本結婚相談所連盟）のシステムで活動し、お見合いの申し込みは月50人までです（10人追加は1,100円）。SCRUMを追加すると初回3,300円＋月1,500円で、2つの連盟の会員に申し込めます（合計50人まで）。",
  },
  {
    title: "専任カウンセラーに電話・メッセージ・ZOOMで相談できる",
    desc: "公式サイトは会員ごとの専任カウンセラーを最大の特徴として挙げ、2営業日以内の返信を目安にしています。公式の「サポート内容」ページでは、男性スタッフ1名・女性スタッフ1名の計2名が成婚まで担当すると説明しています。電話・メッセージ・ZOOM面談での相談は無料です（2026年11月14日確認）。",
  },
];

const pros = [
  "成婚料50,000円（成婚料20万円台が多い中で低い水準）",
  "お見合い料0円・相談無料で、追加費用が読みやすい",
  "IBJ＋SCRUMの2連盟を選べる",
];

const cons = [
  "活動1年後から毎年16,200円の更新料がかかる",
  "サロンは五反田と梅田の2か所",
  "成婚率・会員の年齢層などの実績は公表されていない",
];

const faqs = [
  {
    q: "セブン結婚相談所の料金はいくらですか？",
    a: "入会金9,800円、月会費9,800円、お見合い料0円、成婚料50,000円、活動1年後から1年ごとの更新料16,200円、退会・成婚退会の手数料1,800円です（税込・2026年10月27日に公式サイトで確認）。",
  },
  {
    q: "「成果報酬型」の相談所ですか？",
    a: "いいえ。公式の料金は月会費制（9,800円）に成婚料50,000円が加わる仕組みで、結果が出るまで費用がかからない成果報酬型ではありません。お見合い料は0円です。",
  },
  {
    q: "セブン結婚相談所の口コミ・評判は？",
    a: "Googleマップの五反田サロンには55件の口コミがあり、評価は4.3でした（当サイトが2026年8月に取得）。口コミサイト「みん評」には、カウンセラーのサポートや相手紹介を評価する声と、期待と違った点に触れる声の両方が掲載されています。",
  },
  {
    q: "セブン結婚相談所は料金が安すぎて不安です。問題はありませんか？",
    a: "安さの理由として、公式サイトは会員から依頼があった場合だけサポートする（頼まれていないお節介をしない）運営で費用を抑えていると説明しています。手厚い仲人型の伴走を求める方には、合わない可能性があります。",
  },
  {
    q: "LINEで相談できますか？　会員1人にカウンセラーが2人つくというのは本当ですか？",
    a: "担当が2人つく点は、公式の「サポート内容」ページに「男性スタッフ1名、女性スタッフ1名の計2名」が専任で担当すると記載されています。LINEは、公式のお問い合わせページで無料説明会の予約窓口（LINE登録・無料相談）として使われています。入会後の相談方法として公式の料金ページに書かれているのは電話・メッセージ・Zoom・来社面談で、入会後の相談にLINEを使えるかは公式サイトでは確認できませんでした。気になる方は無料説明会で確認してください（2026年11月14日確認。10月17日の確認時は2名体制の記載を見落としていたため訂正しました）。",
  },
  {
    q: "セブン結婚相談所の悪い口コミにはどのような内容がありますか？",
    a: "口コミサイト（jm-h.com）に掲載されている投稿8件（2022〜2026年）を当サイトで分類すると、相談への返答が定型的・サポートがほとんど無いという内容が5件、運営側の対応が高圧的だったという内容が2件、Googleマップの高評価に疑問を示す内容が2件、値上げや手数料に触れた内容が1件でした（1件に複数の論点を含みます）。公式サイトは「会員から依頼があった場合だけサポートする」運営で費用を抑えていると説明しており、自分で活動を進めたい方向けの相談所といえます（2026年10月22日確認）。",
  },
  {
    q: "どこにサロンがありますか？",
    a: "東京エリアの五反田サロン（東京都品川区東五反田2-3-5 五反田中央ビル7階・JR五反田駅から徒歩3分）と、関西エリアの梅田サロン（大阪市北区梅田1-2-2-300 大阪駅前第2ビル3階・地下鉄谷町線東梅田駅から徒歩2分）です。相談は電話・メッセージ・ZOOMでもでき、オンラインで全国から活動できます（2026年11月14日に公式の店舗ページで確認）。",
  },
  {
    q: "無料説明会はどのように予約しますか？",
    a: "公式のお問い合わせページで名前とふりがなを入力し、「LINE登録・無料相談」から予約します。説明会はオンラインと来社（五反田サロンか梅田サロン）から選べ、所要時間は60分ほどで、実際の会員検索や活動の流れを見られます。火曜・水曜は定休日です（2026年11月14日確認）。",
  },
  {
    q: "運営会社と成婚実績を教えてください",
    a: "運営は株式会社ACパートナーズ（大阪市北区梅田）で、公式サイトのプライバシーポリシーとお問い合わせページに記載があります。創業は2014年です。公式トップページには2024年1月〜2025年4月の成婚実績として89組が掲載されています。成婚率は公表されていません（2026年11月14日確認）。",
  },
  {
    q: "退会するときに費用はかかりますか？",
    a: "退会・成婚退会の手数料として1,800円がかかります。成婚退会の場合は別に成婚料50,000円（プロポーズ・結婚の口約束が成立した時点）が必要です。公式料金ページでは、短期間の退会でも違約金はかからないこと、退会当月の月会費は日割り返金がなく翌月以降分は返金されること、休会制度がないことも記載されています（2026年10月27日確認）。",
  },
  {
    q: "セブン結婚相談所の入会条件・必要書類を教えてください",
    a: "公式料金ページでは、入会資格（男女共通）を20歳〜59歳の独身の方・真剣に結婚を考えている方・スマートフォンかパソコンをお持ちの方としています。現在または過去にIBJ・SCRUM所属の会員と交際していて、その交際をすぐに再開させるつもりの方は入会できません。必要書類は身分証明書・住民票・独身証明書（いずれも取得後3か月以内、住民票と独身証明書は郵送取得の無料サポートあり）・学歴証明書（短大卒以上）で、男性は収入証明書と勤務先証明書も必要です。入会契約日から8日以内であればクーリングオフで契約を解除できます（2026年10月27日確認）。",
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
          セブン結婚相談所（結婚相談所セブン）の口コミ・評判｜料金・1年総額・サロンを公式情報で確認
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月14日（料金・入会資格は2026年11月14日に<a href="https://seven-007.net/price/" target="_blank" rel="noopener noreferrer" className="underline">公式サイトの料金ページ</a>で再確認し、10月14日確認時から変更はありません。運営会社・サロンの所在地・サポート体制・無料説明会を公式サイトで確認して追記しました）</p>

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
              成婚実績: overview.record, 運営会社: overview.company,
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
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            サロンの所在地・アクセスと無料説明会（公式サイトで確認）
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            現在案内されているサロンは五反田と梅田の2か所です（公式サイトのサロン一覧では恵比寿・池袋・京都・神戸・奈良・滋賀などのサロンは表示されていません）。古い紹介記事には閉鎖・移転前のサロンが載っていることがあるため、来社する場合は公式の店舗ページで確認してください。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <tbody>
                {([
                  ["五反田サロン", "東京都品川区東五反田2-3-5 五反田中央ビル7階（LiFEREE WORK五反田内）。JR・東急池上線「五反田駅」から徒歩3分、都営浅草線「五反田駅」から徒歩4分。郵送物は梅田サロン宛て"],
                  ["梅田サロン", "大阪市北区梅田1-2-2-300 大阪駅前第2ビル3階303（コモレンタルオフィス307号）。地下鉄谷町線「東梅田駅」・JR「北新地駅」から徒歩2分、地下鉄御堂筋線「梅田駅」から徒歩3分、JR「大阪駅」から徒歩7分"],
                  ["無料説明会", "オンラインか来社（五反田・梅田）を選択。所要60分ほどで、実際の会員検索と活動の流れを確認できる。予約は公式お問い合わせページの「LINE登録・無料相談」から"],
                  ["定休日", "火曜・水曜（営業時間は公式サイトに記載なし）"],
                  ["活動開始まで", "提出書類とプロフィール写真がそろえば1週間ほど"],
                  ["お見合いの場所", "ホテルのカフェかZoomで50分前後。日時と場所はスタッフ同士が調整し、お茶代は男性会員の負担"],
                  ["プロフィール写真", "提携スタジオを紹介。撮影代は自己負担で10,000〜20,000円ほど（相談所に払う料金とは別）"],
                ] as [string, string][]).map(([k, v]) => (
                  <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 whitespace-nowrap">{k}</td><td className="px-4 py-3">{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#8B8580] leading-relaxed">
            出典（2026年11月14日確認）: <a href="https://seven-007.net/company/gotanda/" target="_blank" rel="noopener noreferrer" className="underline">五反田サロン</a>・<a href="https://seven-007.net/company/umeda/" target="_blank" rel="noopener noreferrer" className="underline">梅田サロン</a>・<a href="https://seven-007.net/contact/" target="_blank" rel="noopener noreferrer" className="underline">お問い合わせ</a>・<a href="https://seven-007.net/" target="_blank" rel="noopener noreferrer" className="underline">トップページ</a>・<a href="https://seven-007.net/support/" target="_blank" rel="noopener noreferrer" className="underline">サポート内容</a>（いずれも公式サイト）
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            運営会社・実績・相手の探し方（公式サイトで確認）
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <tbody>
                {([
                  ["運営会社", "株式会社ACパートナーズ（大阪市北区梅田1-2-2-300 大阪駅前第2ビル3階303）。創業2014年"],
                  ["成婚実績", "89組（2024年1月〜2025年4月）。成婚率は非公表"],
                  ["入会者数", "ここ数年は毎月40人前後・年間500人前後が入会（公式「クチコミについて」ページの記載）"],
                  ["加盟連盟", "IBJ・SCRUM（料金ページで活動対象として案内）。公式サイトのヘッダーには「IBJ・SCRUM・BIU加盟店」とも表記"],
                  ["担当体制", "男性スタッフ1名・女性スタッフ1名の計2名が専任で担当。サポートの担当は正社員スタッフで、代表は原則として活動サポートには関わらない"],
                  ["相手の探し方", "①検索して自分から申し込み（月50人まで）②申し込まれは人数無制限 ③共感キーワード検索（30種類以上＋フリーワード）④担当スタッフの紹介 ⑤AIマッチングの紹介。④⑤は定期紹介ではなく、会員が依頼する方式で回数制限なし・無料"],
                  ["成婚の定義", "結婚の口約束・プロポーズが成立した時点"],
                ] as [string, string][]).map(([k, v]) => (
                  <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70 whitespace-nowrap">{k}</td><td className="px-4 py-3">{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-3">
            紹介を「依頼制」にしている点は、公式サイトが料金を抑えられる理由として説明している「会員から依頼があった場合にサポートする」運営と同じ考え方です。担当者から定期的に相手を紹介してほしい方は、入会前の無料説明会で紹介の頻度を確認しておくと安心です。
          </p>
          <p className="text-xs text-[#8B8580] leading-relaxed">
            出典（2026年11月14日確認）: <a href="https://seven-007.net/privacy/" target="_blank" rel="noopener noreferrer" className="underline">プライバシーポリシー</a>・<a href="https://seven-007.net/" target="_blank" rel="noopener noreferrer" className="underline">トップページ</a>・<a href="https://seven-007.net/greeting/" target="_blank" rel="noopener noreferrer" className="underline">クチコミについて</a>・<a href="https://seven-007.net/support/" target="_blank" rel="noopener noreferrer" className="underline">サポート内容</a>・<a href="https://seven-007.net/price/" target="_blank" rel="noopener noreferrer" className="underline">料金について</a>（いずれも公式サイト）
          </p>
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
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">初期費用</td><td className="px-4 py-3 text-center">9,800円</td><td className="px-4 py-3 text-center">66,000円</td><td className="px-4 py-3 text-center">6,600円</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">会員数</td><td className="px-4 py-3 text-center">IBJ約10.9万人</td><td className="px-4 py-3 text-center">検索会員数19.1万人（3連盟・2026年11月12日公式確認）</td><td className="px-4 py-3 text-center">約5.1万人</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">タイプ</td><td className="px-4 py-3 text-center">担当カウンセラー制</td><td className="px-4 py-3 text-center">オンライン完結型</td><td className="px-4 py-3 text-center">オンライン完結型</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3 font-medium text-[#2C2C2C]/70">特徴</td><td className="px-4 py-3 text-center">成婚料50,000円</td><td className="px-4 py-3 text-center">3連盟連携</td><td className="px-4 py-3 text-center">成婚料0円</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            口コミの評価が媒体によって分かれる理由
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            セブン結婚相談所の口コミは、Googleマップでは高評価が中心である一方、口コミ専門サイトでは否定的な投稿が中心です。当サイトが確認した媒体ごとの傾向は次のとおりです。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-gray-100 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F5F0EB]">
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">媒体（確認日）</th>
                  <th className="px-4 py-3 text-left font-medium text-[#2C2C2C]">件数・傾向</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">Googleマップ 五反田サロン（2026年8月18日）</td><td className="px-4 py-3">55件・評価4.3。カウンセラーの対応を評価する投稿が中心</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">口コミ評判サイト jm-h.com（2026年10月22日）</td><td className="px-4 py-3">表示10件のうち本文を確認できた8件（2022年4月〜2026年1月投稿）を分類：返答が定型的・サポートがほとんど無い 5件／運営側の対応が高圧的 2件／Googleマップの高評価への疑問 2件／値上げ・手数料 1件／スタッフのミス・ルール変更 1件（重複あり）</td></tr>
                <tr className="border-t border-gray-50"><td className="px-4 py-3">みん評（2026年10月22日）</td><td className="px-4 py-3">当サイトからは閲覧できず（アクセス制限）。2026年8月の確認時は、サポートを評価する声と期待と違った点に触れる声の両方が掲載されていました</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
            Googleマップの評価が高めに出る理由について、公式サイトの「クチコミについて」ページは、成婚した会員全員にGoogleのページへ成婚までの感想を書くよう依頼しているため、プラス寄りの内容が多くなると説明しています。同じページでは、成婚できずに退会した会員の口コミはマイナス寄りになりやすいとも書かれており、「代表の対応が高圧的だった」「返事が定型的だった」という趣旨の口コミを引用したうえで、運営側の見解を掲載しています（2026年11月14日確認）。媒体ごとの評価の差は、投稿を集める経路の違いも踏まえて読むことをおすすめします。
          </p>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed">
            否定的な投稿の多くは「サポートの少なさ」に関するものです。公式サイトは、会員から依頼があった場合だけサポートする運営で料金を抑えていると説明しています。担当者に活動を主導してほしい方は仲人型の相談所と、自分で申し込みを進めたい方はセブン結婚相談所と、料金総額をあわせて比較することをおすすめします。口コミは投稿者個人の見解で、当サイトでは事実関係を確認していません。
          </p>
        </section>

        <ReviewFacts
          name="セブン結婚相談所"
          checkedOn="2026年11月14日"
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
          feeNotes={[
            "公式サイトのお知らせ（2026年11月1日付）では、LINE友だち追加特典として入会金9,800円・SCRUM追加料3,300円・SCRUM月額加算料1,500円がいずれも0円、IBJオンラインが3か月間無料と案内されています。予告なく終了する場合があるとされています（2026年11月14日確認）。",
            "上の表は特典を使わない通常料金です。2026年11月14日に公式の料金ページで、入会金・月会費・成婚料・SCRUM追加・申し込み追加・更新料・退会手数料が10月14日確認時と同じであることを確認しました。",
          ]}
          estimate={[{ label: "IBJのみ・1年で成婚退会", formula: "9,800円＋9,800円×12＋50,000円＋退会手数料1,800円", total: "179,200円" }]}
          company={[
            ["屋号", "セブン結婚相談所（SEVEN）"],
            ["運営会社", "株式会社ACパートナーズ（大阪市北区梅田1-2-2-300 大阪駅前第2ビル3階303・公式プライバシーポリシーより）"],
            ["創業", "2014年（公式サイト記載）"],
            ["代表", "吉村氏（公式サイトの代表挨拶より。プライバシーポリシーでは個人情報管理責任者を吉村信孝氏と記載）"],
            ["拠点", "五反田サロン（東京都品川区東五反田）・梅田サロン（大阪市北区梅田）"],
            ["加盟連盟", "IBJ（日本結婚相談所連盟）・SCRUM（公式サイトのヘッダーには BIU 加盟の表記もあり）"],
          ]}
          reviewNote="Googleマップの「セブン結婚相談所 五反田サロン」には口コミが55件あり、評価は4.3です（当サイトが2026年8月18日に取得）。検索上位の比較記事もGoogleマップの口コミを出典にしているものが中心です。"
          good={[
            { text: "カウンセラーのサポートの手厚さ、趣味や価値観を踏まえた相手紹介を評価する声", source: "みん評 セブン結婚相談所" },
            { text: "スタッフの対応の良さを挙げる声", source: "みん評 セブン結婚相談所" },
          ]}
          bad={[
            { text: "期待と違った点や改善を求める声", source: "みん評 セブン結婚相談所（批判的な声を多く掲載する方針のサイト）" },
            { text: "相談への返答が定型的・サポートがほとんど無いと感じたという声（8件中5件）", source: "結婚相談所の口コミ評判サイト（jm-h.com）掲載の投稿8件を当サイトで分類" },
            { text: "希望条件が多く相手が見つからずに退会したという声", source: "みん評 セブン結婚相談所" },
          ]}
          sources={[
            { name: "セブン結婚相談所 料金・システム（公式）", url: "https://seven-007.net/price/" },
            { name: "セブン結婚相談所 サポート内容（公式・2026年11月14日確認）", url: "https://seven-007.net/support/" },
            { name: "セブン結婚相談所 クチコミについて（公式・2026年11月14日確認）", url: "https://seven-007.net/greeting/" },
            { name: "セブン結婚相談所 プライバシーポリシー（公式・運営会社の記載）", url: "https://seven-007.net/privacy/" },
            { name: "セブン結婚相談所 LINE友だち追加特典のお知らせ（公式・2026年11月1日付）", url: "https://seven-007.net/news/5889/" },
            { name: "みん評 セブン結婚相談所", url: "https://minhyo.jp/seven-marriagecounselor" },
            { name: "結婚相談所の口コミ評判サイト セブン（2026年10月22日確認）", url: "https://jm-h.com/kuchikomi-seven" },
          ]}
        />

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">
            結婚相談所セブンと他社の比較
          </h2>
          <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
            結婚相談所セブンが自分に合うか迷う場合は、料金総額・会員数・サポート形式を他社と比較することをおすすめします。
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
          <p className="text-white/50 text-sm mb-8 tracking-wider">料金と更新料の扱いは、無料相談で確認できます</p>
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
