import Link from "next/link";
import AuthorBox from "@/components/AuthorBox";

export const metadata = {
  title: "結婚相談所おすすめ比較【2026年】24社のレビューと全国1,500件超の店舗データ | ムスビバ",
  description:
    "結婚相談所24社のレビューと、Googleマップの掲載情報をもとにした13都道府県1,543件（詳細ページ933件）の店舗データベースを掲載しています。料金・成婚率・会員数・サポート体制から、ご自身に合う結婚相談所を比較できます。",
};

const services = [
  {
    rank: 1,
    name: "naco-do",
    slug: "naco-do",
    tagline: "成婚料0円・3連盟19.1万人から探せるオンライン型",
    monthlyFee: "月会費16,800円",
    features: ["会員数19.1万人", "オンライン完結", "3連盟連携", "成婚料0円"],
    pros: [
      "JBA・CONNECT-ship・SCRUMの3連盟を追加料金なしで検索",
      "成婚料0円で、活動7ヶ月の公式目安は183,600円",
      "オンライン完結のため、自宅から活動できる",
    ],
    cons: [
      "対面でのサポートがない",
      "自主的に活動を進める姿勢が求められる",
    ],
    recommend: "費用を抑えてオンラインで婚活を始めたい方におすすめです",
    reviewPath: "/review/naco-do/",
    affiliateUrl: "https://t.felmat.net/fmcl?ak=Z50330.1.2894055.Z1361712",
  },
  {
    rank: 2,
    name: "フィオーレ",
    slug: "fiore",
    tagline: "成婚率52.0%（自社発表）を算出の定義とあわせて公表する関西発の相談所",
    monthlyFee: "月会費5,830円〜",
    features: ["成婚率52.0%", "ハイブリッド型", "全国17店舗", "連盟連携"],
    pros: [
      "成婚率52.0%（2012〜2025年・全退会者に占める成婚退会）を公表",
      "仲人型とデータマッチング型のハイブリッドに対応",
      "丁寧なカウンセラーサポート",
    ],
    cons: [
      "コースによって料金体系が大きく異なる",
      "成婚料はコースにより0〜220,000円と差がある",
    ],
    recommend: "紹介型・検索型・成婚料なしのコースから選びたい方におすすめです",
    reviewPath: "/review/fiore/",
    affiliateUrl: "https://t.felmat.net/fmcl?ak=T8680S.1.X1309788.Z1361712",
  },
  {
    rank: 3,
    name: "スマリッジ",
    slug: "smartread",
    tagline: "登録料6,600円・月会費9,900円・成婚料0円のオンライン型",
    monthlyFee: "月会費9,900円",
    features: ["登録料6,600円", "IBJ online／コネクトシップ", "オンライン完結", "成婚料0円"],
    pros: [
      "1年で成婚退会した場合の総額は125,400円（試算）",
      "3ヶ月お見合い不成立なら返金保証（条件あり）",
      "利用事業者会員数 約51,000人（2026年10月時点）",
    ],
    cons: [
      "対面サポートがない",
      "返金保証は割引と併用できない",
    ],
    recommend: "予算を抑えて婚活を始めたい方におすすめです",
    reviewPath: "/review/smartread/",
    affiliateUrl: "https://t.felmat.net/fmcl?ak=J112188.1.Z162495D.Z1361712",
  },
  {
    rank: 4,
    name: "結婚相談所セブン",
    slug: "seven",
    tagline: "入会金9,800円・月会費9,800円・成婚料5万円の低価格",
    monthlyFee: "月会費9,800円",
    features: ["成婚料50,000円", "月会費9,800円", "IBJ加盟", "お見合い料0円"],
    pros: [
      "成婚料50,000円・お見合い料0円で、総額を把握しやすい",
      "1年で成婚退会した場合の総額は約18万円（試算）",
      "IBJで月50人までお見合いを申し込める",
    ],
    cons: [
      "サロンは五反田・梅田の2か所",
      "1年後から更新料16,200円/年",
    ],
    recommend: "費用を抑えながら担当カウンセラーに相談したい方におすすめです",
    reviewPath: "/review/seven/",
    affiliateUrl: "https://t.felmat.net/fmcl?ak=M6895M.1.Y109522N.Z1361712",
  },
  {
    rank: 5,
    name: "マーズカフェ",
    slug: "mars-cafe",
    tagline: "東京・中野の仲人型相談所。成婚率72.5%（自社発表）を算出の定義とあわせて公表",
    monthlyFee: "月会費7,700円〜",
    features: ["IBJ・TMS加盟", "約18万人", "成婚率72.5%", "年中無休"],
    pros: [
      "成婚率72.5%（2025年・成婚退会者÷全退会者）を公表",
      "IBJ＋TMSで約18万人から探せる",
      "Zoom面談で全国から相談できる",
    ],
    cons: [
      "拠点は中野の1か所のみ",
      "成婚料220,000円がかかる",
    ],
    recommend: "担当者のサポートを受けながら活動したい方におすすめです",
    reviewPath: "/review/mars-cafe/",
    affiliateUrl: "https://t.felmat.net/fmcl?ak=K2473Q.1.A49782R.Z1361712",
  },
];

type AgencyCard = { name: string; slug: string; path: string; fee: string; noImage?: boolean };

const allAgencies: AgencyCard[] = [
  { name: "ツヴァイ", slug: "zwei", path: "/review/zwei/", fee: "月会費15,950円〜" },
  { name: "オーネット", slug: "onet", path: "/review/onet/", fee: "月会費13,200円〜" },
  { name: "パートナーエージェント", slug: "partner-agent", path: "/review/partner-agent/", fee: "月会費14,300円〜" },
  { name: "マーズカフェ", slug: "mars-cafe", path: "/review/mars-cafe/", fee: "月会費7,700円〜" },
  { name: "スマリッジ", slug: "smartread", path: "/review/smartread/", fee: "月会費9,900円" },
  { name: "リングベル", slug: "ringbell", path: "/review/ringbell/", fee: "月会費17,600円", noImage: true },
  { name: "フィオーレ", slug: "fiore", path: "/review/fiore/", fee: "月会費5,830円〜" },
  { name: "マリッジプロ", slug: "marriage-pro", path: "/review/marriage-pro/", fee: "月会費9,000円〜", noImage: true },
  { name: "結婚相談所セブン", slug: "seven", path: "/review/seven/", fee: "月会費9,800円" },
  { name: "ムスベル", slug: "musbell", path: "/review/musbell/", fee: "月会費16,500円〜" },
  { name: "naco-do", slug: "naco-do", path: "/review/naco-do/", fee: "月会費16,800円" },
  { name: "サンマリエ", slug: "sunmarie", path: "/review/sunmarie/", fee: "月会費18,700円" },
  { name: "エン婚活エージェント", slug: "en-konkatsu", path: "/review/en-konkatsu/", fee: "月会費16,500円" },
  { name: "ウェルスマ", slug: "wellsma", path: "/review/wellsma/", fee: "月会費11,800円〜" },
  { name: "ブライダルチューリップ", slug: "bridal-tulip", path: "/review/bridal-tulip/", fee: "月会費7,550円〜" },
  { name: "東京フォリパートナー", slug: "folli-partner", path: "/review/folli-partner/", fee: "月会費16,500円〜" },
  { name: "ヒーローマリッジ", slug: "hero-marriage", path: "/review/hero-marriage/", fee: "月会費14,300円〜" },
  { name: "エクセレンス青山", slug: "excellence-aoyama", path: "/review/excellence-aoyama/", fee: "月会費7,700円〜" },
  { name: "IBJメンバーズ", slug: "ibj-members", path: "/review/ibj-members/", fee: "月会費17,050円" },
  { name: "P!っと縁結び", slug: "pitto", path: "/review/pitto/", fee: "月会費7,700円〜" },
  { name: "ベルロード縁結びサポート", slug: "bellroad", path: "/review/bellroad/", fee: "月会費9,800円（サブスク型）" },
  { name: "流山おおたかの森結婚相談所", slug: "nagareyama-otakanomori", path: "/review/nagareyama-otakanomori/", fee: "月会費9,900円", noImage: true },
  { name: "Code For Marriage", slug: "code-for-marriage", path: "/review/code-for-marriage/", fee: "月会費11,000円（スタンダード）", noImage: true },
  { name: "nikoブライダル", slug: "niko-bridal", path: "/review/niko-bridal/", fee: "月会費13,200円〜", noImage: true },
];

const faqs = [
  {
    q: "結婚相談所の料金相場はどのくらいですか？",
    a: "一般的な結婚相談所の料金は、初期費用5万〜30万円、月会費1万〜2万円、成婚料5万〜30万円が相場です。年間の総額は30万〜60万円程度が目安です。",
  },
  {
    q: "結婚相談所と婚活アプリの違いは何ですか？",
    a: "結婚相談所は身元確認が厳格で、カウンセラーによるサポートがあるため、結婚に真剣な方と出会いやすい環境です。婚活アプリは手軽に始められる一方、利用者の結婚に対する意欲にはばらつきがある傾向があります。",
  },
  {
    q: "結婚相談所の成婚率はどのくらいですか？",
    a: "結婚相談所の成婚率は一般的に10〜30%程度です。ただし、成婚率の定義は各社で異なるため、単純に比較することはできません。活動期間や本人の取り組み方によっても大きく変わります。",
  },
  {
    q: "結婚相談所はどんな人に向いていますか？",
    a: "真剣に結婚を考えている方、効率的に婚活を進めたい方、専門家のアドバイスを受けたい方、ご自身から積極的にアプローチすることが苦手な方に向いています。",
  },
  {
    q: "入会から成婚までどのくらいかかりますか？",
    a: "一般的には、6ヶ月〜1年程度で成婚される方が多い傾向です。早い方では3ヶ月、時間をかけて活動される方では1年半〜2年かかる場合もあります。",
  },
  {
    q: "結婚相談所の無料相談では何をしますか？",
    a: "無料相談では、サービスの説明、料金プランの案内、婚活に関するアドバイス、お相手の条件のヒアリングなどを行います。入会を強制されることはありません。",
  },
  {
    q: "オンライン型と店舗型の違いは何ですか？",
    a: "店舗型は、対面でカウンセリングを受けられる手厚いサポートが特徴です。オンライン型は場所を選ばずに活動でき、料金が比較的安い傾向があります。",
  },
  {
    q: "結婚相談所を途中で退会することはできますか？",
    a: "はい、途中で退会できます。多くの結婚相談所では違約金なしで退会できますが、契約期間や条件は各社で異なるため、入会前にご確認ください。",
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero with background image */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-couple.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#1a1510]/60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-6 tracking-widest">
            ご自身に合う<br className="sm:hidden" />
            <span className="text-[#C9B99A]">結婚相談所</span>を比較できます
          </h1>
          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light tracking-wider leading-relaxed">
            当サイトでは、結婚相談所を料金・成婚率・サポート体制の観点から比較しています。
            一人ひとりの婚活スタイルに合った結婚相談所選びを支援します。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#ranking"
              className="inline-block bg-[#A08447] hover:bg-[#8A7239] text-white font-normal py-4 px-10 rounded-full text-base transition-colors tracking-widest"
            >
              ランキングを見る
            </Link>
            <Link
              href="/concierge/"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-normal py-4 px-10 rounded-full text-base transition-colors tracking-widest"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              無料で診断する
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "24社", label: "レビュー掲載" },
              { value: "1,543件", label: "店舗データベース" },
              { value: "13都道府県", label: "掲載エリア" },
              { value: "933件", label: "店舗詳細ページ" },
            ].map((stat) => (
              <div key={stat.label} className="p-4">
                <div className="text-2xl sm:text-3xl font-light text-[#A08447] tracking-wider">
                  {stat.value}
                </div>
                <div className="text-sm text-[#2C2C2C]/50 mt-2 tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking */}
      <section id="ranking" className="py-20 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-light text-center mb-4 tracking-widest text-[#2C2C2C]">
            結婚相談所おすすめランキング
          </h2>
          <p className="text-center text-[#2C2C2C]/50 mb-14 tracking-wider">
            料金・サービス・サポート体制をもとに、当サイトが選定した結婚相談所です
          </p>

          <div className="space-y-10">
            {services.map((s) => (
              <div
                key={s.rank}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Rank header */}
                <div className="bg-[#A08447] text-white px-6 py-3.5 flex items-center gap-3">
                  <span className="bg-white text-[#A08447] font-medium w-8 h-8 rounded-full flex items-center justify-center text-sm">
                    {s.rank}
                  </span>
                  <span className="font-medium text-lg tracking-wider">{s.name}</span>
                  <span className="text-white/60 text-sm ml-auto hidden sm:inline tracking-wider">
                    {s.monthlyFee}
                  </span>
                </div>

                {/* Screenshot */}
                <div className="aspect-video overflow-hidden">
                  <img src={`/ss-${s.slug}.jpg`} alt={`${s.name} 公式サイト`} className="w-full h-full object-cover object-top" />
                </div>
                <p className="text-[10px] text-gray-400 px-6 pt-2">画像引用：公式サイトより</p>

                <div className="p-7 pt-4">
                  <p className="text-[#A08447] font-normal mb-4 tracking-wider">{s.tagline}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {s.features.map((f) => (
                      <span
                        key={f}
                        className="bg-[#F5F0EB] text-[#A08447] text-xs font-normal px-3 py-1.5 rounded-full tracking-wider"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Mobile fee */}
                  <p className="sm:hidden text-sm text-[#2C2C2C]/50 mb-4 tracking-wider">
                    {s.monthlyFee}
                  </p>

                  {/* Pros & Cons */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-sm font-medium text-green-700 mb-2 tracking-wider">
                        メリット
                      </h4>
                      <ul className="space-y-1.5">
                        {s.pros.map((p) => (
                          <li key={p} className="text-sm text-[#2C2C2C]/70 flex gap-2">
                            <span className="text-green-500 mt-0.5 shrink-0">+</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-red-700 mb-2 tracking-wider">
                        デメリット
                      </h4>
                      <ul className="space-y-1.5">
                        {s.cons.map((c) => (
                          <li key={c} className="text-sm text-[#2C2C2C]/70 flex gap-2">
                            <span className="text-red-400 mt-0.5 shrink-0">-</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Recommend */}
                  <p className="text-sm bg-[#FAFAF8] border border-[#A08447]/15 rounded-lg p-4 mb-6 text-[#2C2C2C]/70">
                    {s.recommend}
                  </p>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    {s.affiliateUrl && (
                      <a
                        href={s.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="flex-1 text-center bg-[#A08447] hover:bg-[#8A7239] text-white font-normal py-3.5 px-6 rounded-lg transition-colors tracking-wider"
                      >
                        公式サイトへ
                      </a>
                    )}
                    <Link
                      href={s.reviewPath}
                      className="flex-1 text-center border border-[#A08447] text-[#A08447] hover:bg-[#F5F0EB] font-normal py-3.5 px-6 rounded-lg transition-colors tracking-wider"
                    >
                      {s.name}の口コミ・評判を見る
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-light text-center mb-12 tracking-widest text-[#2C2C2C]">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-[#FAFAF8] rounded-xl border border-gray-100"
              >
                <summary className="cursor-pointer px-6 py-5 font-normal text-[#2C2C2C] flex items-center justify-between tracking-wider">
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-[#A08447] text-xl group-open:rotate-45 transition-transform shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm text-[#2C2C2C]/60 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* All agencies */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-light text-center mb-4 tracking-widest text-[#2C2C2C]">
            全結婚相談所一覧
          </h2>
          <p className="text-center text-[#2C2C2C]/50 mb-12 tracking-wider">
            {`掲載している${allAgencies.length}社のレビューと、都道府県別の店舗データベースをご覧いただけます`}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {allAgencies.map((agency) => (
              <Link
                key={agency.name}
                href={agency.path}
                className="block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                {agency.noImage ? (
                  <div className="aspect-video flex items-center justify-center bg-[#FAF7F2] px-3 text-center">
                    <span className="text-xs text-[#A08447] tracking-wider leading-relaxed">{agency.name}</span>
                  </div>
                ) : (
                  <div className="aspect-video overflow-hidden">
                    <img src={`/ss-${agency.slug}.jpg`} alt={`${agency.name} 公式サイト`} className="w-full h-full object-cover object-top" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 text-sm">{agency.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{agency.fee}</p>
                  <p className="text-xs text-[#A08447] mt-2 font-medium">口コミ・評判を見る →</p>
                </div>
                {!agency.noImage && <p className="text-[10px] text-gray-400 px-4 pb-2">画像引用：公式サイトより</p>}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured reviews / comparison links */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-light text-center mb-4 tracking-widest text-[#2C2C2C]">
            注目の結婚相談所・比較ガイド
          </h2>
          <p className="text-center text-[#2C2C2C]/50 mb-12 tracking-wider">
            仲人のサポートがある相談所の評判・料金と、人気の2社の比較を掲載しています
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <Link href="/compare/musbell-vs-ringbell/" className="block bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-5 hover:border-[#A08447] transition-colors">
              <p className="font-medium text-[#A08447] tracking-wider">ムスベルとリングベルを比較する</p>
              <p className="text-sm text-[#2C2C2C]/60 mt-1">料金総額・対象年代・特徴の違いを中立的な立場で解説</p>
            </Link>
            <Link href="/review/musbell/" className="block bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-5 hover:border-[#A08447] transition-colors">
              <p className="font-medium text-[#A08447] tracking-wider">ムスベルの評判・料金を見る</p>
              <p className="text-sm text-[#2C2C2C]/60 mt-1">全国対応・複数連盟に加盟／「やばい」という評判についても解説</p>
            </Link>
            <Link href="/review/ringbell/" className="block bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-5 hover:border-[#A08447] transition-colors">
              <p className="font-medium text-[#A08447] tracking-wider">リングベルの評判・料金を見る</p>
              <p className="text-sm text-[#2C2C2C]/60 mt-1">IBJ加盟のオンライン結婚相談所で、手続きからサポートまでオンラインで完結</p>
            </Link>
            <Link href="/review/marriage-pro/" className="block bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-5 hover:border-[#A08447] transition-colors">
              <p className="font-medium text-[#A08447] tracking-wider">マリッジプロの評判・料金を見る</p>
              <p className="text-sm text-[#2C2C2C]/60 mt-1">新宿の20代・30代専門のIBJ加盟相談所で、同世代カウンセラーの男女チームがサポート</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Purpose / area picks */}
      <section className="py-20 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-light text-center mb-4 tracking-widest text-[#2C2C2C]">
            目的・エリアで結婚相談所を選ぶ
          </h2>
          <p className="text-center text-[#2C2C2C]/50 mb-12 tracking-wider">
            料金の安さ・専門性・エリアなど、重視する条件から候補を絞り込めます
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <Link href="/compare/cheap/" className="block bg-white border border-gray-100 rounded-xl p-5 hover:border-[#A08447] transition-colors">
              <p className="font-medium text-[#A08447] tracking-wider">安い結婚相談所を1年総額で比較</p>
              <p className="text-sm text-[#2C2C2C]/60 mt-1">初期費用・月会費・成婚料の合計で比較した料金ランキング</p>
            </Link>
            <Link href="/area/tokyo/" className="block bg-white border border-gray-100 rounded-xl p-5 hover:border-[#A08447] transition-colors">
              <p className="font-medium text-[#A08447] tracking-wider">東京の結婚相談所を比較</p>
              <p className="text-sm text-[#2C2C2C]/60 mt-1">東京で通いやすい相談所を、料金の実額と拠点で比較</p>
            </Link>
            <Link href="/area/osaka/" className="block bg-white border border-gray-100 rounded-xl p-5 hover:border-[#A08447] transition-colors">
              <p className="font-medium text-[#A08447] tracking-wider">大阪の結婚相談所を比較</p>
              <p className="text-sm text-[#2C2C2C]/60 mt-1">大阪・梅田エリアの相談所を料金の実額で比較</p>
            </Link>
            <Link href="/mens/" className="block bg-white border border-gray-100 rounded-xl p-5 hover:border-[#A08447] transition-colors">
              <p className="font-medium text-[#A08447] tracking-wider">男性の結婚相談所おすすめ比較</p>
              <p className="text-sm text-[#2C2C2C]/60 mt-1">男性の費用の実額と男性向けサポートで比較／30代の始め方も解説</p>
            </Link>
            <Link href="/review/code-for-marriage/" className="block bg-white border border-gray-100 rounded-xl p-5 hover:border-[#A08447] transition-colors">
              <p className="font-medium text-[#A08447] tracking-wider">Code For Marriageの評判・料金</p>
              <p className="text-sm text-[#2C2C2C]/60 mt-1">ITエンジニア専門・元ITエンジニアのカウンセラーが担当／オンライン面談対応</p>
            </Link>
            <Link href="/review/niko-bridal/" className="block bg-white border border-gray-100 rounded-xl p-5 hover:border-[#A08447] transition-colors">
              <p className="font-medium text-[#A08447] tracking-wider">nikoブライダル（大阪）の評判・料金</p>
              <p className="text-sm text-[#2C2C2C]/60 mt-1">成婚率56.3%を算出条件付きで公表／IBJ加盟</p>
            </Link>
            <Link href="/review/nagareyama-otakanomori/" className="block bg-white border border-gray-100 rounded-xl p-5 hover:border-[#A08447] transition-colors">
              <p className="font-medium text-[#A08447] tracking-wider">流山おおたかの森結婚相談所の評判・料金</p>
              <p className="text-sm text-[#2C2C2C]/60 mt-1">IBJ加盟・月会費9,900円のシンプルな料金体系</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Knowledge / basics */}
      <section className="py-20 bg-[#FAFAF8] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-light text-center mb-4 tracking-widest text-[#2C2C2C]">
            結婚相談所の基礎知識
          </h2>
          <p className="text-center text-[#2C2C2C]/50 mb-12 tracking-wider">
            料金の相場・タイプの選び方・活動の流れを、初めての方にも分かりやすく解説しています
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <Link href="/knowledge/cost/" className="block bg-white border border-gray-100 rounded-xl p-5 hover:border-[#A08447] transition-colors">
              <p className="font-medium text-[#A08447] tracking-wider">結婚相談所の料金相場は？</p>
              <p className="text-sm text-[#2C2C2C]/60 mt-1">初期費用・月会費・成婚料の目安と総額の考え方</p>
            </Link>
            <Link href="/knowledge/how-to-choose/" className="block bg-white border border-gray-100 rounded-xl p-5 hover:border-[#A08447] transition-colors">
              <p className="font-medium text-[#A08447] tracking-wider">結婚相談所の選び方</p>
              <p className="text-sm text-[#2C2C2C]/60 mt-1">仲人型とデータマッチング型の違いと比較のポイント</p>
            </Link>
            <Link href="/knowledge/flow/" className="block bg-white border border-gray-100 rounded-xl p-5 hover:border-[#A08447] transition-colors">
              <p className="font-medium text-[#A08447] tracking-wider">入会から成婚までの流れ</p>
              <p className="text-sm text-[#2C2C2C]/60 mt-1">活動のステップと活動期間の目安</p>
            </Link>
            <Link href="/knowledge/" className="block bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-5 hover:border-[#A08447] transition-colors">
              <p className="font-medium text-[#A08447] tracking-wider">基礎知識をまとめて見る</p>
              <p className="text-sm text-[#2C2C2C]/60 mt-1">結婚相談所の基礎知識カテゴリの記事一覧へ</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA bottom */}
      <section className="py-20 bg-[#333333] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-light mb-6 tracking-widest">
            無料相談のご案内
          </h2>
          <p className="text-white/50 mb-10 tracking-wider leading-relaxed">
            各結婚相談所の詳細ページから、無料相談を申し込むことができます。
            複数社の無料相談を受けて比較することをおすすめします。
          </p>
          <Link
            href="#ranking"
            className="inline-block bg-[#A08447] hover:bg-[#8A7239] text-white font-normal py-4 px-12 rounded-full text-base transition-colors tracking-widest"
          >
            ランキングに戻る
          </Link>
        </div>
      <AuthorBox />
      </section>
    </>
  );
}
