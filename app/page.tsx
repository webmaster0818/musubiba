import Link from "next/link";

export const metadata = {
  title: "結婚相談所おすすめランキング15社比較【2024年最新】| ムスビバ",
  description:
    "厳選15社の結婚相談所を徹底比較。料金・成婚率・会員数・サポート体制を分かりやすくランキング。あなたにぴったりの結婚相談所が見つかります。",
};

const services = [
  {
    rank: 1,
    name: "ツヴァイ",
    tagline: "IBJ連携で出会いの幅が広がる大手結婚相談所",
    monthlyFee: "月会費15,400円〜",
    features: ["会員数9.4万人", "IBJ連携", "全国50店舗", "データマッチング"],
    pros: [
      "IBJネットワーク連携で業界最大級の会員数",
      "全国50店舗で地方でも利用しやすい",
      "データマッチングとカウンセラーの両方で出会える",
    ],
    cons: [
      "初期費用がやや高め",
      "店舗によってカウンセラーの質に差がある",
    ],
    recommend: "会員数の多さと全国展開を重視する方におすすめ",
    reviewPath: "/review/zwei/",
  },
  {
    rank: 2,
    name: "オーネット",
    tagline: "40年の実績を持つデータマッチング型の老舗",
    monthlyFee: "月会費16,500円〜",
    features: ["会員数4.2万人", "データマッチング", "40年の実績", "自社会員のみ"],
    pros: [
      "40年以上の運営実績で信頼性が高い",
      "データマッチングで効率的に相手を探せる",
      "自社会員のみなので真剣度が高い",
    ],
    cons: [
      "会員数がIBJ系と比べると少なめ",
      "カウンセラーのサポートは手厚くない",
    ],
    recommend: "実績重視で効率的に活動したい方におすすめ",
    reviewPath: "/review/onet/",
  },
  {
    rank: 3,
    name: "パートナーエージェント",
    tagline: "成婚率No.1の手厚いサポート型結婚相談所",
    monthlyFee: "月会費18,700円〜",
    features: ["成婚率27%", "専任コンシェルジュ", "1年以内成婚", "PDCAサイクル"],
    pros: [
      "業界トップクラスの成婚率27%を誇る",
      "専任コンシェルジュが活動を徹底サポート",
      "1年以内の成婚を目指す明確なプラン",
    ],
    cons: [
      "月会費が他社と比べてやや高い",
      "会員数自体は大手と比べると少なめ",
    ],
    recommend: "手厚いサポートで確実に成婚を目指したい方におすすめ",
    reviewPath: "/review/partner-agent/",
  },
  {
    rank: 4,
    name: "IBJメンバーズ",
    tagline: "最大級ネットワークを活かした少人数制サポート",
    monthlyFee: "月会費17,050円〜",
    features: ["会員数8.5万人", "最大級ネットワーク", "少人数制サポート", "成婚主義"],
    pros: [
      "IBJネットワークで8.5万人の会員と出会える",
      "少人数制で一人ひとりに手厚いサポート",
      "成婚主義で結果にコミットした運営",
    ],
    cons: [
      "初期費用・月会費ともにやや高め",
      "店舗が都市部に集中している",
    ],
    recommend: "大規模ネットワークと丁寧なサポートの両方を求める方におすすめ",
    reviewPath: "/review/ibj/",
  },
  {
    rank: 5,
    name: "ゼクシィ縁結びエージェント",
    tagline: "リクルート運営のコスパ最強結婚相談所",
    monthlyFee: "月会費9,900円〜",
    features: ["リクルート運営", "オンライン対応", "コスパ良い", "入会金33,000円"],
    pros: [
      "月会費9,900円〜で業界最安クラスの料金設定",
      "リクルートグループ運営の安心感",
      "オンラインでも活動できる柔軟なシステム",
    ],
    cons: [
      "会員数は大手と比べると少なめ",
      "サポートはやや控えめな印象",
    ],
    recommend: "コストを抑えて気軽に婚活を始めたい方におすすめ",
    reviewPath: "/review/zexy/",
  },
];

const faqs = [
  {
    q: "結婚相談所の料金相場はどのくらいですか？",
    a: "一般的な結婚相談所の料金は、初期費用5万〜30万円、月会費1万〜2万円、成婚料5万〜30万円が相場です。トータルで年間30万〜60万円程度が目安となります。",
  },
  {
    q: "結婚相談所と婚活アプリの違いは何ですか？",
    a: "結婚相談所は身元確認が厳格で、カウンセラーによるサポートがあるため、真剣な出会いが期待できます。婚活アプリは手軽に始められますが、相手の真剣度にばらつきがある傾向です。",
  },
  {
    q: "結婚相談所の成婚率はどのくらいですか？",
    a: "結婚相談所の成婚率は一般的に10〜30%程度です。ただし、成婚率の定義は各社で異なるため、単純比較は難しい面があります。活動期間や本人の積極性によっても大きく変わります。",
  },
  {
    q: "結婚相談所はどんな人に向いていますか？",
    a: "真剣に結婚を考えている方、効率的に婚活したい方、プロのアドバイスが欲しい方、自分から積極的にアプローチするのが苦手な方に特に向いています。",
  },
  {
    q: "入会から成婚までどのくらいかかりますか？",
    a: "一般的に6ヶ月〜1年程度で成婚される方が多いです。早い方では3ヶ月、じっくり活動される方は1年半〜2年かかることもあります。",
  },
  {
    q: "結婚相談所の無料相談では何をしますか？",
    a: "無料相談では、サービスの説明、料金プランの案内、婚活に関するアドバイス、お相手の条件のヒアリングなどを行います。入会を強制されることはありません。",
  },
  {
    q: "オンライン型と店舗型の違いは何ですか？",
    a: "店舗型は対面でのカウンセリングが受けられ手厚いサポートが特徴です。オンライン型は場所を選ばず活動でき、料金が比較的リーズナブルな傾向があります。",
  },
  {
    q: "結婚相談所を途中で退会することはできますか？",
    a: "はい、途中退会は可能です。多くの結婚相談所では違約金なしで退会できますが、契約期間や条件は各社で異なるため、入会前に確認することをおすすめします。",
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
          style={{ backgroundImage: "url('/design-c.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#1a1510]/60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-6 tracking-widest">
            あなたにぴったりの<br className="sm:hidden" />
            <span className="text-[#C9B99A]">結婚相談所</span>が見つかる
          </h1>
          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light tracking-wider leading-relaxed">
            厳選した結婚相談所を料金・成婚率・サポート体制で徹底比較。
            あなたの婚活スタイルに合った結婚相談所選びをサポートします。
          </p>
          <Link
            href="#ranking"
            className="inline-block bg-[#8B7355] hover:bg-[#7A6548] text-white font-normal py-4 px-10 rounded-full text-base transition-colors tracking-widest"
          >
            ランキングを見る
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "15社", label: "厳選比較" },
              { value: "全国", label: "対応エリア" },
              { value: "料金", label: "徹底比較" },
              { value: "成婚率", label: "掲載あり" },
            ].map((stat) => (
              <div key={stat.label} className="p-4">
                <div className="text-2xl sm:text-3xl font-light text-[#8B7355] tracking-wider">
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
            料金・サービス・サポート体制を総合的に評価しました
          </p>

          <div className="space-y-10">
            {services.map((s) => (
              <div
                key={s.rank}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Rank header */}
                <div className="bg-[#8B7355] text-white px-6 py-3.5 flex items-center gap-3">
                  <span className="bg-white text-[#8B7355] font-medium w-8 h-8 rounded-full flex items-center justify-center text-sm">
                    {s.rank}
                  </span>
                  <span className="font-medium text-lg tracking-wider">{s.name}</span>
                  <span className="text-white/60 text-sm ml-auto hidden sm:inline tracking-wider">
                    {s.monthlyFee}
                  </span>
                </div>

                <div className="p-7">
                  <p className="text-[#8B7355] font-normal mb-4 tracking-wider">{s.tagline}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {s.features.map((f) => (
                      <span
                        key={f}
                        className="bg-[#F5F0EB] text-[#8B7355] text-xs font-normal px-3 py-1.5 rounded-full tracking-wider"
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
                  <p className="text-sm bg-[#FAFAF8] border border-[#8B7355]/15 rounded-lg p-4 mb-6 text-[#2C2C2C]/70">
                    {s.recommend}
                  </p>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={s.reviewPath}
                      className="flex-1 text-center bg-[#8B7355] hover:bg-[#7A6548] text-white font-normal py-3.5 px-6 rounded-lg transition-colors tracking-wider"
                    >
                      口コミ・詳細を見る
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
                  <span className="text-[#8B7355] text-xl group-open:rotate-45 transition-transform shrink-0">
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

      {/* CTA bottom */}
      <section className="py-20 bg-[#333333] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-light mb-6 tracking-widest">
            まずは無料相談から始めてみませんか？
          </h2>
          <p className="text-white/50 mb-10 tracking-wider leading-relaxed">
            気になる結婚相談所の詳細ページから、無料相談の申し込みができます。
            複数社の無料相談を受けて比較することをおすすめします。
          </p>
          <Link
            href="#ranking"
            className="inline-block bg-[#8B7355] hover:bg-[#7A6548] text-white font-normal py-4 px-12 rounded-full text-base transition-colors tracking-widest"
          >
            ランキングに戻る
          </Link>
        </div>
      </section>
    </>
  );
}
