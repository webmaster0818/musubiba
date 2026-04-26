import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "結婚相談所のよくある質問（FAQ）| 結婚相談所びより",
  description:
    "結婚相談所に関するよくある質問をまとめました。料金、入会条件、成婚率、活動の流れなど、婚活の疑問を解消します。",
};

const faqs = [
  {
    q: "結婚相談所の料金相場はどのくらいですか？",
    a: "一般的な結婚相談所の料金は、初期費用5万〜30万円、月会費1万〜2万円、成婚料5万〜30万円が相場です。トータルで年間30万〜60万円程度が目安となります。オンライン型は比較的安く、仲人型は手厚いサポートがある分やや高めの傾向です。",
  },
  {
    q: "結婚相談所と婚活アプリの違いは何ですか？",
    a: "結婚相談所は独身証明書や収入証明書の提出が必須で、身元確認が厳格です。専任のカウンセラーやアドバイザーによるサポートがあり、真剣に結婚を考えている方が多いのが特徴です。婚活アプリは手軽に始められますが、相手の真剣度にばらつきがある傾向があります。",
  },
  {
    q: "結婚相談所の成婚率はどのくらいですか？",
    a: "結婚相談所の成婚率は一般的に10〜30%程度です。ただし、成婚率の定義は各社で異なります。「退会者のうち成婚退会した割合」「在籍会員のうち1年以内に成婚した割合」など算出方法が違うため、単純比較は難しい面があります。",
  },
  {
    q: "結婚相談所はどんな人に向いていますか？",
    a: "真剣に結婚を考えている方、効率的に婚活したい方、プロのアドバイスが欲しい方、自分から積極的にアプローチするのが苦手な方に特に向いています。また、身元がしっかりした方と出会いたい方にもおすすめです。",
  },
  {
    q: "入会から成婚までどのくらいかかりますか？",
    a: "一般的に6ヶ月〜1年程度で成婚される方が多いです。早い方では3ヶ月、じっくり活動される方は1年半〜2年かかることもあります。活動頻度や希望条件の柔軟さによっても期間は変わります。",
  },
  {
    q: "結婚相談所の入会に必要な書類は何ですか？",
    a: "一般的に、本人確認書類（運転免許証・パスポートなど）、独身証明書、収入証明書（男性は必須の場合が多い）、学歴証明書、勤務先確認書類が必要です。結婚相談所によって求められる書類が異なるため、事前に確認しましょう。",
  },
  {
    q: "結婚相談所の無料相談では何をしますか？",
    a: "無料相談では、サービスの説明、料金プランの案内、婚活に関するアドバイス、お相手の条件のヒアリングなどを行います。相性診断やマッチングシミュレーションを受けられる場合もあります。入会を強制されることはありません。",
  },
  {
    q: "オンライン型と店舗型の結婚相談所の違いは何ですか？",
    a: "店舗型は対面でのカウンセリングが受けられ、きめ細かいサポートが特徴です。オンライン型は場所を選ばず活動でき、料金が比較的リーズナブルな傾向があります。最近はハイブリッド型（オンライン＋対面）のサービスも増えています。",
  },
  {
    q: "結婚相談所を途中で退会することはできますか？",
    a: "はい、途中退会は可能です。多くの結婚相談所では違約金なしで退会できますが、契約期間内の退会には一定の条件がある場合もあります。入会前に退会条件をしっかり確認することをおすすめします。",
  },
  {
    q: "複数の結婚相談所を掛け持ちすることはできますか？",
    a: "基本的に可能ですが、結婚相談所によっては掛け持ちを制限しているところもあります。掛け持ちのメリットは出会いの幅が広がることですが、費用や時間の負担が増えるため、まずは1社でしっかり活動してみることをおすすめします。",
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

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb items={[{ name: "よくある質問" }]} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">
          結婚相談所のよくある質問（FAQ）
        </h1>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white rounded-xl border border-gray-200 shadow-sm"
            >
              <summary className="cursor-pointer px-6 py-4 font-medium text-gray-800 flex items-center justify-between">
                <span className="pr-4">{faq.q}</span>
                <span className="text-[#E11D48] text-xl group-open:rotate-45 transition-transform shrink-0">
                  +
                </span>
              </summary>
              <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#1E1B4B] to-[#312E81] rounded-2xl p-8 text-white text-center">
          <h2 className="text-xl font-bold mb-3">
            あなたに合った結婚相談所を探す
          </h2>
          <p className="text-white/70 text-sm mb-6">
            厳選した結婚相談所のランキングをチェックしてみましょう
          </p>
          <Link
            href="/"
            className="inline-block bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            ランキングを見る
          </Link>
        </section>
      </div>
    </>
  );
}
