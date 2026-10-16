/*
 * 全レビュー共通の「ご利用の流れ」初心者ガイド。
 * 流れは結婚相談所業界の標準的なプロセス(IBJ等の連盟型・仲人型・データマッチング型に共通する骨格)で、
 * 各社固有の料金は overview から差し込む。クーリングオフ8日は特定商取引法の確立ルール。
 */
import Link from "next/link";

type Props = {
  name: string;
  initialFee?: string;
  monthlyFee?: string;
  matchingFee?: string;
};

const steps = [
  {
    t: "無料相談・資料請求",
    d: "入会前に、サービス内容・料金・「成婚」の定義（どの時点で成婚料が発生するか）を確認します。無料相談で入会を強制されることはなく、複数社の説明を聞いて比較してから決めるのが一般的です。",
    tip: "総額・成婚の定義・中途退会時の精算方法を確認します",
  },
  {
    t: "入会手続き（必要書類の提出）",
    d: "独身証明書・住民票・本人確認書類・収入証明（主に男性）・学歴証明（短大卒以上）などを提出します。全会員が書類を提出する仕組みのため、既婚者や身元の不明な方が入会しにくく、安心して利用しやすい環境です。",
    tip: "独身証明書は本籍地の市区町村役場で取得できます（郵送での請求も可能）",
  },
  {
    t: "プロフィール作成",
    d: "写真撮影とプロフィール文の作成を行います。お見合いの申込率にもっとも大きく影響するのは写真です。多くの相談所が、提携スタジオでの撮影や服装のアドバイスを用意しています。",
    tip: "写真はスマートフォンでの自撮りではなく、プロによる撮影が基本です",
  },
  {
    t: "お相手探し（検索・紹介）",
    d: "システムでの検索・申込と、カウンセラーからの紹介を並行して進めます。申込可能件数は、相談所・プランごとに定められています。",
    tip: "活動開始から1〜2ヶ月は、申込数を多めにすることをおすすめします（出会いの母数が結果に影響するためです）",
  },
  {
    t: "お見合い",
    d: "ホテルのラウンジなどで1時間程度お話しします（オンラインに対応する相談所も多くあります）。連絡先は直接交換せず、交際を希望するかどうかは相談所を通じて回答します。",
    tip: "その場で返事をする必要はなく、お断りの連絡も相談所が代行します",
  },
  {
    t: "仮交際（プレ交際）",
    d: "お互いをもう少し知りたいと感じた段階の交際です。結婚相談所では複数の方と並行して交際することがルールとして認められており、不誠実な行為にはあたりません。",
    tip: "判断に迷う場合はカウンセラーに相談できます（交際中の悩み相談もサポートの範囲です）",
  },
  {
    t: "真剣交際",
    d: "お相手を1人に絞り、結婚を前提に話し合いを深める期間です。ほかの方との交際・お見合いはすべて終了します。",
    tip: "結婚観・お金・家族について、具体的に話し合う時期です",
  },
  {
    t: "プロポーズ・成婚退会",
    d: "婚約の意思が固まると「成婚退会」となります。成婚料が設定されている相談所では、この時点で支払います。活動開始から成婚退会までの期間は、1年前後が1つの目安です。",
    tip: "成婚料の金額と発生条件は、入会前にご確認ください",
  },
];

const faqs = [
  {
    q: "無料相談に行くと勧誘されませんか？",
    a: "無料相談はサービスの説明を受ける場です。その場で契約する義務はありません。「他社と比較してから決めます」とお伝えいただいて問題なく、複数社の比較検討は一般的に行われています。",
  },
  {
    q: "入会後に「合わない」と感じたらやめられますか？",
    a: "退会できます。結婚相談所の契約は特定商取引法の特定継続的役務提供にあたり、契約書面の受領から8日以内であればクーリングオフ（無条件解約・全額返金）が、その後も中途解約が法律で認められています（精算方法は契約書に記載されます）。",
  },
  {
    q: "仕事が忙しくても活動できますか？",
    a: "オンライン面談・オンラインお見合いに対応する相談所が増えており、平日の夜や土日に活動する方が多数です。活動ペースについても、カウンセラーに相談できます。",
  },
  {
    q: "費用はいつ・何に払いますか？",
    a: "①入会時（初期費用）、②毎月（月会費）、③お見合い時（お見合い料。無料の相談所も多くあります）、④成婚退会時（成婚料）の4種類が基本です。月会費が安くても成婚料が高い場合があるため、総額で比較することをおすすめします。",
  },
];

export default function FlowGuide({ name, initialFee, monthlyFee, matchingFee }: Props) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-light mb-3 border-l-4 border-[#A08447] pl-4 tracking-widest">
        {name}のご利用の流れ（初めての方向け）
      </h2>
      <p className="text-sm text-[#2C2C2C]/70 leading-relaxed mb-6">
        結婚相談所を初めて利用する方に向けて、無料相談から成婚退会までの標準的な流れを8つのステップでご説明します。
        結婚相談所は、<strong>会員全員が身元確認を受けている、お断りの連絡を相談所が代行する、解約のルールが法律で定められている</strong>という点で、
        婚活サービスの中でも仕組みとして安心して利用しやすい形態です。
      </p>
      <ol className="space-y-3 mb-6">
        {steps.map((s, i) => (
          <li key={i} className="bg-white rounded-xl border border-gray-100 p-4 flex gap-4">
            <span className="shrink-0 w-8 h-8 rounded-full bg-[#A08447] text-white text-sm font-medium flex items-center justify-center">{i + 1}</span>
            <div>
              <p className="font-medium text-[#2C2C2C] mb-1">{s.t}</p>
              <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">{s.d}</p>
              <p className="text-xs text-[#A08447] mt-1.5">ポイント：{s.tip}</p>
            </div>
          </li>
        ))}
      </ol>

      {(initialFee || monthlyFee || matchingFee) && (
        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-5 mb-6 text-sm">
          <p className="font-medium text-[#A08447] mb-2 tracking-wider">{name}の場合に発生する費用（流れとの対応）</p>
          <ul className="space-y-1.5 text-[#2C2C2C]/75">
            {initialFee && <li>STEP2（入会時）：{initialFee}</li>}
            {monthlyFee && <li>活動中（毎月）：{monthlyFee}</li>}
            {matchingFee && <li>STEP8（成婚退会時）：{matchingFee}</li>}
          </ul>
          <p className="text-xs text-[#2C2C2C]/45 mt-2">※詳細は本ページの料金セクションおよび公式サイトでご確認ください。</p>
        </div>
      )}

      <div className="bg-white rounded-xl border border-gray-100 p-5">
        <p className="font-medium text-[#2C2C2C] mb-3 tracking-wider">初めて利用する方からのよくある質問</p>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="border-b border-gray-50 pb-2">
              <summary className="cursor-pointer text-sm font-medium text-[#2C2C2C]/80">{f.q}</summary>
              <p className="text-sm text-[#2C2C2C]/60 leading-relaxed mt-2">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="text-sm mt-4">
          <Link href="/knowledge/flow/" className="text-[#A08447] underline">→ 入会から成婚までの流れ（詳細）</Link>
          <span className="mx-2 text-gray-300">|</span>
          <Link href="/knowledge/cost/" className="text-[#A08447] underline">→ 料金相場の考え方</Link>
        </p>
      </div>
    </section>
  );
}
