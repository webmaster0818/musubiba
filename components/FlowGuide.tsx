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
    d: "入会前にサービス内容・料金・「成婚」の定義(どの時点で成婚料が発生するか)を確認します。無料相談で入会を強制されることはなく、複数社の話を聞き比べてから決めるのが一般的です。",
    tip: "聞くべきこと: 総額いくらか/成婚の定義/中途退会時の精算",
  },
  {
    t: "入会手続き(必要書類の提出)",
    d: "独身証明書・住民票・本人確認書類・収入証明(主に男性)・学歴証明(短大卒以上)などを提出します。書類が揃っているからこそ、既婚者や身元不明の人がいない安心な出会いの場になります。",
    tip: "独身証明書は本籍地の市区町村役場(郵送可)で取得します",
  },
  {
    t: "プロフィール作成",
    d: "写真撮影とプロフィール文の作成。お見合いの申込率を最も左右するのは写真です。多くの相談所が提携スタジオでの撮影や服装アドバイスを用意しています。",
    tip: "スマホ自撮りではなくプロ撮影が基本",
  },
  {
    t: "お相手探し(検索・紹介)",
    d: "システムでの検索申込と、カウンセラーからの紹介を並行して進めます。申込可能件数は相談所・プランごとに決まっています。",
    tip: "最初の1〜2ヶ月は申込数を多めに(出会いの母数が結果を左右)",
  },
  {
    t: "お見合い",
    d: "ホテルラウンジ等で1時間程度お話しします(オンライン対応の相談所も多数)。連絡先の直接交換はせず、続けるかどうかは相談所を通じて回答します。",
    tip: "その場で合否を伝える必要はなく、断る連絡も相談所が代行",
  },
  {
    t: "仮交際(プレ交際)",
    d: "「もう少しお互いを知りたい」段階。複数の方と同時並行で交際できるのが結婚相談所のルールで、不誠実なことではありません。",
    tip: "迷ったらカウンセラーに相談(交際中の悩み相談もサポート範囲)",
  },
  {
    t: "真剣交際",
    d: "お相手を一人に絞り、結婚を前提に深く話し合う期間。他の方との交際・お見合いは全て終了します。",
    tip: "結婚観・お金・家族について具体的にすり合わせる時期",
  },
  {
    t: "プロポーズ・成婚退会",
    d: "婚約の意思が固まったら「成婚退会」となり、成婚料が設定されている相談所ではこのタイミングで支払います。活動開始から成婚退会までは1年前後が一つの目安です。",
    tip: "成婚料の金額と発生条件は入会前に必ず確認",
  },
];

const faqs = [
  {
    q: "無料相談に行くと勧誘されませんか？",
    a: "無料相談は説明の場で、その場で契約する義務はありません。「他社と比較してから決めます」で問題ありませんし、比較検討は業界でも一般的な行動です。",
  },
  {
    q: "入会後に「合わない」と感じたらやめられますか？",
    a: "やめられます。結婚相談所の契約は特定商取引法の特定継続的役務提供に当たり、契約書面の受領から8日以内ならクーリングオフ(無条件解約・全額返金)、その後も中途解約が法律で認められています(精算ルールは契約書に明記されます)。",
  },
  {
    q: "仕事が忙しくても活動できますか？",
    a: "オンライン面談・オンラインお見合いに対応する相談所が増えており、平日夜や土日での活動が主流です。活動ペースの相談もカウンセラーの仕事の一部です。",
  },
  {
    q: "費用はいつ・何に払いますか？",
    a: "①入会時(初期費用)②毎月(月会費)③お見合い時(お見合い料・無料の相談所も多い)④成婚退会時(成婚料)の4種類が基本の型です。総額で比較するのがコツで、月会費が安くても成婚料が高い場合があります。",
  },
];

export default function FlowGuide({ name, initialFee, monthlyFee, matchingFee }: Props) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-light mb-3 border-l-4 border-[#8B7355] pl-4 tracking-widest">
        {name}のご利用の流れ【初めての方向け】
      </h2>
      <p className="text-sm text-[#2C2C2C]/70 leading-relaxed mb-6">
        結婚相談所が初めての方向けに、無料相談から成婚退会までの標準的な流れを8ステップで整理しました。
        結婚相談所は<strong>身元確認された会員だけ・断る連絡は相談所が代行・法律で解約ルールが守られている</strong>という、
        婚活サービスの中で最も「仕組みで安心が担保されている」形態です。
      </p>
      <ol className="space-y-3 mb-6">
        {steps.map((s, i) => (
          <li key={i} className="bg-white rounded-xl border border-gray-100 p-4 flex gap-4">
            <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B7355] text-white text-sm font-medium flex items-center justify-center">{i + 1}</span>
            <div>
              <p className="font-medium text-[#2C2C2C] mb-1">{s.t}</p>
              <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">{s.d}</p>
              <p className="text-xs text-[#8B7355] mt-1.5">POINT: {s.tip}</p>
            </div>
          </li>
        ))}
      </ol>

      {(initialFee || monthlyFee || matchingFee) && (
        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-5 mb-6 text-sm">
          <p className="font-medium text-[#8B7355] mb-2 tracking-wider">{name}の場合に発生する費用(流れとの対応)</p>
          <ul className="space-y-1.5 text-[#2C2C2C]/75">
            {initialFee && <li>・STEP2(入会時): {initialFee}</li>}
            {monthlyFee && <li>・活動中(毎月): {monthlyFee}</li>}
            {matchingFee && <li>・STEP8(成婚退会時): {matchingFee}</li>}
          </ul>
          <p className="text-xs text-[#2C2C2C]/45 mt-2">※詳細は本ページの料金セクションおよび公式サイトでご確認ください。</p>
        </div>
      )}

      <div className="bg-white rounded-xl border border-gray-100 p-5">
        <p className="font-medium text-[#2C2C2C] mb-3 tracking-wider">初めてで不安な方のQ&A</p>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="border-b border-gray-50 pb-2">
              <summary className="cursor-pointer text-sm font-medium text-[#2C2C2C]/80">{f.q}</summary>
              <p className="text-sm text-[#2C2C2C]/60 leading-relaxed mt-2">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="text-sm mt-4">
          <Link href="/knowledge/flow/" className="text-[#8B7355] underline">→ 入会から成婚までの流れをもっと詳しく</Link>
          <span className="mx-2 text-gray-300">|</span>
          <Link href="/knowledge/cost/" className="text-[#8B7355] underline">→ 料金相場の考え方</Link>
        </p>
      </div>
    </section>
  );
}
