import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-19 確認）。
// ・会員登録料・有効期間・支払方法・会員資格・必要書類：さが出会いサポートセンター「ご利用案内」「よくある質問」
// ・更新料（期限前4,000円／期限後5,000円）・月会費等なし・返金なし・休会：同「会員規約」（令和8年10月1日施行）
// ・申込みの上限、AI紹介の上限、回答期限、お見合いの期限・時間、真剣交際後の扱い：同「利用規程」（令和8年10月1日改定）
// ・県外在住者の条件、オンライン登録の条件：同「よくある質問」
// ・成婚数・交際数・登録者数：同 公式トップページの表示（2026年9月末現在）。男女の別はサイトのスタイル定義（1番目＝男性・2番目＝女性）で確認
// ・運営（佐賀県の委託で株式会社佐賀広告センターが設置運営）・所在地・開所時間：同 公式トップページ・「センターのご案内」
// ・事業内容（婚活サポーターの立会い）：同「さが出会いサポートについて」
// ・サテライト会場の日程・会場：同「サテライト会場のご案内」
// ・県の担当課：佐賀県「婚活支援について」（こども未来課）。システム新規構築の計画：佐賀県「結婚支援管理システム構築・運用・保守業務委託に係る公募型プロポーザル」
// ・市町の登録料補助：唐津市・伊万里市・鹿島市・嬉野市・有田町の各公式ページ（センターのお知らせで案内されている5市町）
// ・大分県・兵庫県のセンターの料金：当サイト /knowledge/oita/（2026-11-18 確認）・/knowledge/hyogo-deai/ の確認内容
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const TOP_URL = "https://sagadeai.com/main/1.html";
const ABOUT_URL = "https://sagadeai.com/main/422.html";
const GUIDE_URL = "https://sagadeai.com/main/425.html";
const CENTER_URL = "https://sagadeai.com/main/426.html";
const SATELLITE_URL = "https://sagadeai.com/main/597.html";
const FAQ_URL = "https://sagadeai.com/main/692.html";
const KIYAKU_URL = "https://sagadeai.com/site_files/file/R081001_SDSC_kaiinkiyaku.pdf";
const KITEI_URL = "https://sagadeai.com/site_files/file/R081001_SDSC_riyokitei.pdf";
const PREF_URL = "https://www.pref.saga.lg.jp/kiji003107798/index.html";
const PREF_SYSTEM_URL = "https://www.pref.saga.lg.jp/kiji003118189/index.html";
const KARATSU_URL = "https://www.city.karatsu.lg.jp/page/36283.html";
const IMARI_URL = "https://www.city.imari.lg.jp/25218.htm";
const KASHIMA_URL = "https://www.city.saga-kashima.lg.jp/main/35153.html";
const URESHINO_URL = "https://www.city.ureshino.lg.jp/kurashi/deai/_33015.html";
const ARITA_URL = "https://www.town.arita.lg.jp/main/12816.html";

const members = { m: 329, f: 178, kousai: 49, seikon: 331 };

const subsidies = [
  { city: "唐津市", url: KARATSU_URL, amount: "新規登録料5,000円（初めての登録時のみ・1回限り）", target: "令和7年7月1日以降に初めて登録した市民" },
  { city: "伊万里市", url: IMARI_URL, amount: "登録にかかる実費（上限5,000円。新規登録・更新は各1回まで）", target: "市の婚活推進事業に登録している方。令和8年4月1日〜令和9年3月31日の登録・支払い分" },
  { city: "鹿島市", url: KASHIMA_URL, amount: "会員登録料5,000円（更新料は対象外）", target: "市内に住所がある会員（令和8年4月1日以後の会員期間に限る）" },
  { city: "嬉野市", url: URESHINO_URL, amount: "会員登録料または更新料の実費（上限5,000円）", target: "市内に住所がある会員。令和8年4月1日以降の登録・更新分" },
  { city: "有田町", url: ARITA_URL, amount: "会員登録料・更新料の全額", target: "町内に住所がある会員（登録・更新の日から1年以内に申請）" },
];

export const metadata: Metadata = {
  title: "佐賀県で結婚相談所を探す方へ｜県の「さが出会いサポートセンター」は登録料5,000円・1年有効、会員507名と民間との費用比較",
  description:
    "佐賀県の「さが出会いサポートセンター」は、会員登録料5,000円（1年間有効）で月会費・紹介料・成婚料はかかりません。登録者数（男性329名・女性178名、2026年9月末現在）、成婚数331組、申込みの上限、登録料を補助する5市町、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/saga/" },
};

const faqs = [
  {
    q: "さが出会いサポートセンターの料金はいくらですか？",
    a: "会員登録料は年5,000円で、登録日から1年間有効です。月会費・紹介料・成婚料はかかりません。有効期限前に更新する場合、2年目以降の会費は4,000円で、有効期限を過ぎてから更新する場合は5,000円です。一度納入した会員登録料は返還されません（さが出会いサポートセンター「会員規約」）。",
  },
  {
    q: "何歳から入会できますか？上限はありますか？",
    a: "会員規約では、18歳以上で結婚を希望していることを条件としています。ただし、18歳に達してから最初の年度末までの間にある学生は除かれます。公式の案内に上限年齢の記載はありません。",
  },
  {
    q: "佐賀県外に住んでいても入会できますか？",
    a: "公式FAQでは、将来佐賀県に住む意思があることを条件に入会できるとしています。オンラインお見合いも選べますが、お見合いが「センターお見合いルーム」での実施となった場合には、センターに来所できることも条件です。",
  },
  {
    q: "お見合いの申込みに上限はありますか？",
    a: "利用規程では、自分からの申込みは月に最大3人までで、翌月への繰り越しや申込み後のキャンセルはできません。このほか、価値観診断テスト（EQアセスメント）の結果と希望条件をもとに、システムが月に最大4名を自動で紹介します。申込みを受けた会員は、5日以内（センター閉所日を含む）に回答します。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "佐賀県の公的な婚活支援「さが出会いサポートセンター」の料金・入会条件と、民間の結婚相談所との比較",
  description: "佐賀県の「さが出会いサポートセンター」の料金・入会条件・必要書類・活動のルール・登録者数と、登録料を補助する市町、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/saga/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "佐賀県の結婚支援（さが出会いサポートセンター）", item: "https://mu-su-bi-ba.com/knowledge/saga/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeSaga() {
  const total = members.m + members.f;
  const maleShare = ((members.m / total) * 100).toFixed(1);
  const ratio = (members.m / members.f).toFixed(1);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "佐賀県の結婚支援（さが出会いサポートセンター）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          佐賀県の結婚相談所選び：県の「さが出会いサポートセンター」の料金・入会条件と、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月19日（料金・入会条件・登録者数・会員規約・利用規程・市町の補助は同日にさが出会いサポートセンター公式サイト、佐賀県公式サイト、各市町の公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />佐賀県の「さが出会いサポートセンター」は会員登録料5,000円・1年間有効で、月会費・成婚料はかかりません
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>さが出会いサポートセンターは、佐賀県の委託を受けて株式会社佐賀広告センターが設置・運営する、会員制で1対1の出会いを支援する窓口です。拠点は<strong>モラージュ佐賀 北館2階</strong>で、鳥栖市・唐津市にサテライト会場があります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>会員登録料は<strong>年5,000円（登録日から1年間有効）</strong>で、月会費・紹介料・成婚料はかかりません。期限前に更新すると2年目以降は4,000円です。対象は<strong>18歳以上</strong>で結婚を希望する独身の方です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>公式サイトの表示では、<strong>登録者は男性{members.m}名・女性{members.f}名（計{total}名）</strong>、交際数{members.kousai}組、これまでの成婚数<strong>{members.seikon}組</strong>です（2026年9月末現在）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>唐津市・伊万里市・鹿島市・嬉野市・有田町の<strong>5市町が登録料を補助</strong>しています。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">さが出会いサポートセンターの料金と入会条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>佐賀県の委託を受け、株式会社佐賀広告センターが設置・運営。県の担当課はこども未来課</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会員登録料</td><td className={td}>年5,000円（登録日から1年間有効）。支払方法は現金・クレジットカード・PayPay・振込</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>更新料</td><td className={td}>有効期限前の更新は4,000円、有効期限を過ぎてからの更新は5,000円。休会中・交際中も同様</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>月会費・紹介料・成婚料</td><td className={td}>かからない。納入した会員登録料は、退会時を含め返還されない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象年齢</td><td className={td}>18歳以上で結婚を希望している方（18歳に達してから最初の年度末までの間にある学生は除く）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会条件</td><td className={td}>独身であること（内縁関係を含め婚姻していないこと）／佐賀県内にお住まいの方、または県外にお住まいで佐賀県への移住の意思がある方／スマートフォン・タブレット・パソコン等でインターネットとメールを使え、メールアドレスを持っていること</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>面談時：写真付き本人確認書類（運転免許証・マイナンバーカード等）と会員登録料。面談後にアップロード：独身証明書（発行から3か月以内）、お見合い用写真（必須1枚・任意1枚、本人のみ・3か月以内に撮影）、所得を証明する書類（源泉徴収票・所得証明書・確定申告書控え等）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              入会は、ホームページで仮登録と面談予約を行い、来所またはオンラインで本人確認の面談を受けて会員登録料を支払う流れです。オンラインでの面談は、Zoomを問題なく操作できること、本人の自宅で実施することなどが条件です。家族による代理での登録はできません。所得を証明する書類の提出が必要な点は、当サイトで確認した大分県のOITAえんむす部の必要書類にはない項目です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={GUIDE_URL} {...ext}>さが出会いサポートセンター「ご利用案内」</a>・<a href={FAQ_URL} {...ext}>「よくある質問」</a>・<a href={KIYAKU_URL} {...ext}>「会員規約」（令和8年10月1日施行・PDF）</a>・<a href={TOP_URL} {...ext}>公式トップページ</a>・<a href={PREF_URL} {...ext}>佐賀県「婚活支援について」</a>（いずれも2026年11月19日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">お見合いまでの流れと利用規程のルール</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>マイページで書類・写真・プロフィールを登録し、センターの承認を受けたら活動開始</li>
              <li>スマートフォン・パソコン、またはセンターのタブレット端末でお相手を検索する。システムからの自動紹介（AI紹介）もある</li>
              <li>お相手が承諾したら、マイページ上でお見合いの日程を調整する</li>
              <li>センター・サテライト会場のお見合いルーム、または自宅からのオンラインでお見合い（30分程度）</li>
              <li>双方が希望すれば仮交際へ進み、マイページのWEBメールでやり取りする。真剣交際を経て、結婚が決まったら退会の手続きを行う</li>
            </ol>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>ルール</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お申込み</td><td className={td}>月に最大3人まで。翌月への繰り越し・申込み後のキャンセルはできない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>システムの自動紹介</td><td className={td}>価値観診断テスト（EQアセスメント）の結果と希望条件をもとに、月に最大4名。紹介がない月も繰り越しはない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申込みへの回答</td><td className={td}>5日以内（センター閉所日を含む）。回答がない場合は、翌開所日にお引合せの希望なしとして処理される</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お見合いの日程</td><td className={td}>原則として申込みから30日以内。お見合い成立から70日を過ぎると成立は無効。日時・場所は申込みを受けた側の希望を優先</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お見合い</td><td className={td}>30分程度。当日はお互いの氏名・住所・連絡先などの個人情報を伝えない。オンラインは本人の自宅で行い、表示名はニックネーム。結果はお見合いの翌日中に回答</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>真剣交際</td><td className={td}>仮交際の段階では複数の方とお見合いができる。真剣交際に入るとプロフィールは非公開になり、検索とAI紹介は停止</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              センターの事業内容には、マッチングが成立した会員同士のお引き合わせに婚活サポーターが立ち会い、フォローすることが含まれています。交際開始後も、スタッフがシステム等で定期的に交際の状況を確認します。会員規約・利用規程は2026年10月1日に改定されており、佐賀県は2026年2月に、登録・お見合い・相談をオンラインでも行えるよう結婚支援管理システムを新たに構築する公募を実施しています。利用の際は、最新の規程を公式サイトでご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={KITEI_URL} {...ext}>さが出会いサポートセンター「利用規程」（令和8年10月1日改定・PDF）</a>・<a href={ABOUT_URL} {...ext}>「さが出会いサポートについて」</a>・<a href={PREF_SYSTEM_URL} {...ext}>佐賀県「結婚支援管理システム構築・運用・保守業務委託に係る公募型プロポーザル」</a>（いずれも2026年11月19日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">登録者数・交際数・成婚数</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>数値（2026年9月末現在）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録者数</td><td className={td}>男性{members.m}名・女性{members.f}名（計{total}名。男性の割合は{maleShare}%で当サイト算出）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>現在の交際数</td><td className={td}>{members.kousai}組</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>これまでの成婚数</td><td className={td}>{members.seikon}組（累計。集計の起点は公式サイトに記載なし）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              登録者は男性が多く、女性1人に対して男性約{ratio}人の比率です（当サイト算出）。男性の方は、お相手となる女性会員の人数が男性会員より少ない点を踏まえて利用を検討されることをおすすめします。年代別の内訳は公式サイトに掲載されていないため、希望する年代のお相手がどの程度いるかは、面談の際にセンターへ確認することをおすすめします。表示されている数値は更新されるため、最新の値は公式サイトでご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TOP_URL} {...ext}>さが出会いサポートセンター 公式サイト</a>（2026年11月19日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">センター・サテライト会場と、登録料を補助する5市町</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>拠点</th><th className={th}>所在地・電話</th><th className={th}>開所日時</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>佐賀センター</td><td className={td}>佐賀市巨勢町大字牛島730 モラージュ佐賀 北館2階／0952-20-0151</td><td className={td}>13:00〜20:00（予約の最終受付19:00）、毎週火曜日定休。来所は事前予約制</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>鳥栖サテライト会場</td><td className={td}>ANAホリデイ・イン鳥栖（鳥栖市酒井西町789-1）</td><td className={td}>毎月第2土曜日 13:00〜20:00（事前予約制）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>唐津サテライト会場</td><td className={td}>唐津市民交流プラザ 小会議室（唐津市南城内1番地1 大手口センタービル3階）。駐車場なし</td><td className={td}>毎月第2日曜日 13:00〜20:00（事前予約制）</td></tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>市町</th><th className={th}>補助額</th><th className={th}>対象</th></tr></thead>
                <tbody>
                  {subsidies.map((s) => (
                    <tr key={s.city} className="border-t border-[#E5DCCF] align-top"><td className={td}><a href={s.url} {...ext}>{s.city}</a></td><td className={td}>{s.amount}</td><td className={td}>{s.target}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              上の5市町は、センター公式サイトのお知らせで補助の取り組みが案内されている市町で、補助額・対象は各市町の公式ページに掲載されている内容です。いずれも市町税等の滞納がないことや、会員証・領収書の写しの提出などが条件で、多くは登録日から1年以内の申請が必要です。唐津市は新規登録のみ、鹿島市は更新料を対象外としているなど、条件は市町ごとに異なります。年度によって内容が変わる場合があるため、利用前に各市町の担当窓口で最新の条件をご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CENTER_URL} {...ext}>さが出会いサポートセンター「センターのご案内」</a>・<a href={SATELLITE_URL} {...ext}>「サテライト会場のご案内」</a>・唐津市・伊万里市・鹿島市・嬉野市・有田町の各公式ページ（表内のリンク先。いずれも2026年11月19日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>登録の有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>佐賀県「さが出会いサポートセンター」</td><td className={td}>5,000円/年（期限前の更新は4,000円。2年間続けた場合は9,000円で当サイト算出）</td><td className={td}>1年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/oita/" className="text-[#A08447] underline">大分県「OITAえんむす部」</Link></td><td className={td}>10,000円（結婚おうえん団の従業員は9,000円）</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンター（はばタン会員）</Link></td><td className={td}>5,000円/年</td><td className={td}>1年（年ごとの登録手数料）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用だけを比べると、さが出会いサポートセンターは民間の結婚相談所よりも大幅に低く抑えられます。一方で、申込みは月3人まで、登録者は男性が女性の約{ratio}倍といった特徴があります。民間の結婚相談所は、費用がかかる代わりに、担当者がお相手を提案したり、交際中の相談に継続的に応じたりするところが多くあります。佐賀県内から利用できるオンライン型の結婚相談所や、福岡市の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。大分県・兵庫県のセンターの料金は、各センターの公式サイトで2026年11月16日〜18日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/nagasaki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">あいたか（長崎県）</Link>
            <Link href="/knowledge/kagoshima/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">かごしま出会いサポートセンター（鹿児島県）</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/area/fukuoka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">福岡の結婚相談所</Link>
            <Link href="/knowledge/oita/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">OITAえんむす部（大分県）</Link>
            <Link href="/knowledge/okinawa/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">おきなわ結マッチ（沖縄県）</Link>
            <Link href="/knowledge/okayama/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">おかやま縁むすびネット（岡山県）</Link>
            <Link href="/compare/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">24社の料金比較</Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="border border-[#E5DCCF] rounded-xl">
                <summary className="cursor-pointer px-5 py-4 text-sm font-medium text-[#2C2C2C]">{f.q}</summary>
                <p className="px-5 pb-5 text-sm text-[#2C2C2C]/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <AuthorBox />
      </article>
    </>
  );
}
