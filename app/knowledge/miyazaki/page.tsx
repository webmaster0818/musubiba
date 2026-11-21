import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-21 確認）。
// ・会員資格（18歳以上の独身・県内在住または移住の意向がある県外在住者・PCかスマートフォン必須）、入会登録料10,000円＋税（2年間有効・返金なし）、必要書類、都城・延岡センターで登録する場合の入金方法、登録方法：みやざき結婚サポートセンター「入会のご案内」
// ・入会登録料・更新料（各10,000円＋税・2年）、お引合せ時の縁結びサポーターの交通費・お茶代1人1,000円、成婚料などはかからない：同「費用について」（料金は掲載画像の表示を転記）
// ・入会から成婚までの流れ、お引合せ（1時間程度・縁結びサポーター同席）、交際後のフォロー（2週間後・2か月後・半年ごと）：同「結婚までの流れ」
// ・3センターの所在地・電話・開所時間・休み：同「センターのご案内」・公式トップページ
// ・成婚数383組（会員同士194組・会員と非会員189組、2026年10月31日更新）：同 公式トップページ
// ・会員資格・入会登録料・更新料・返還しない旨・規約の施行日（平成27年8月19日）：同「みやざき結婚サポートセンター会員規約」
// ・お相手検索（センター閲覧1回45分）、申込み（1日1回3人まで）、回答期限（翌日から4日以内）、交際希望の回答（翌日から3日以内）、サポーター同席は最初の15分程度、交際中は検索・申込不可：同「みやざき結婚サポートセンター利用規程」（令和7年12月26日改正）
// ・どのセンターでも利用可、県外在住者の入会、独身証明書の有効期限の数え方、データ写真不可：同「よくあるご質問」
// ・登録料を補助する市町村（8市町村）：同「市町村の取り組み」の掲載を当サイトが数えた値
// ・県内3か所設置、令和7年度に開設10周年、県の補助件数100件超（R7.9現在）：宮崎県「【令和7年度】ひなたの出逢い・子育て応援運動推進会議」資料1（PDF）
// ・結婚支援サービス利用促進事業補助金（18〜39歳・上限1万円・対象経費・申請期限）：宮崎県 同補助金のページ、交付要綱（令和7年4月1日）
// ・センターの登録料は同補助金の対象外、令和8年4月1日時点の対象アプリ：同「よくある質問」（令和8年4月23日更新・5月14日修正・PDF）
// ・ひなたの縁結びさん（相談できる内容）・担当課：宮崎県「「ひなたの縁結びさん」に出逢いや結婚についての相談をしてみませんか？」
// ・県の結婚支援ポータル（kodomoseisaku.pref.miyazaki.lg.jp）のサービス一時停止：当サイトが2026-11-21にアクセスして確認した表示
// ・都城市「ONIAI」（登録料・紹介料無料、利用の流れ、面談、独身証明書300円、お見合い約30分・トーク約15分、仮交際2人まで）：都城市「お見合い事業（愛称「ONIAI」）」
// ・ONIAIの登録資格（市内在住・在勤または定住意思のある20〜49歳の独身者）・登録期間2年・マッチング基準非公開：都城市「都城市お見合い事業（ONIAI）利用規約」（PDF）
// ・縁結び課の新設（令和8年4月1日）、連絡先：都城市「「縁結び課」開設のお知らせ」・「縁結び課（本庁舎5階）」
// ・縁結びプロジェクト（これまで81名参加、第8回は35〜39歳・男女各8人・参加費無料）：都城市「第8回 縁結びプロジェクトin都城市役所」
// ・都城市婚活応援事業の総事業費、カップル成立数174組（R6年度）、婚姻件数612件（R6年）、センター新規登録者数の目標：都城市「令和8年度地域少子化対策重点推進交付金実施計画書」（PDF）
// ・鹿児島県・大分県・熊本県のセンターの料金：当サイト /knowledge/kagoshima/・/knowledge/oita/・/knowledge/kumamoto/ の確認内容
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const TOP_URL = "https://www.miyazakikekkon.com/";
const ADMISSION_URL = "https://www.miyazakikekkon.com/admission-information";
const EXPENSES_URL = "https://www.miyazakikekkon.com/expenses";
const FLOW_URL = "https://www.miyazakikekkon.com/flow-of-marriage";
const CENTER_URL = "https://www.miyazakikekkon.com/support-center-information";
const AGREEMENT_URL = "https://www.miyazakikekkon.com/membership-agreement";
const RULES_URL = "https://www.miyazakikekkon.com/mmsc-terms-of-use";
const FAQ_URL = "https://www.miyazakikekkon.com/faq";
const MUNICIPAL_URL = "https://www.miyazakikekkon.com/municipal-initiative";
const PREF_MEETING_URL = "https://www.pref.miyazaki.lg.jp/kodomo-seisaku/kyoikukosodate/kodomo/20251010113212.html";
const PREF_MEETING_PDF_URL = "https://www.pref.miyazaki.lg.jp/documents/103060/103060_20251010114416-1.pdf";
const PREF_SUBSIDY_URL = "https://www.pref.miyazaki.lg.jp/kodomo-seisaku/kyoikukosodate/kodomo/20250319133017.html";
const PREF_SUBSIDY_YOUKOU_URL = "https://www.pref.miyazaki.lg.jp/documents/97227/97227_20250327112504-1.pdf";
const PREF_SUBSIDY_FAQ_URL = "https://www.pref.miyazaki.lg.jp/documents/97227/97227_20260514090329-1.pdf";
const PREF_ENMUSUBI_URL = "https://www.pref.miyazaki.lg.jp/kodomo-seisaku/kyoikukosodate/kodomo/20260902095538.html";
const MK_ONIAI_URL = "https://www.city.miyakonojo.miyazaki.jp/site/konkatsu/73546.html";
const MK_ONIAI_KIYAKU_URL = "https://www.city.miyakonojo.miyazaki.jp/uploaded/attachment/39594.pdf";
const MK_KA_URL = "https://www.city.miyakonojo.miyazaki.jp/soshiki/10/";
const MK_KA_OPEN_URL = "https://www.city.miyakonojo.miyazaki.jp/site/konkatsu/84146.html";
const MK_EVENT_URL = "https://www.city.miyakonojo.miyazaki.jp/site/konkatsu/90728.html";
const MK_PLAN_URL = "https://www.city.miyakonojo.miyazaki.jp/uploaded/attachment/46535.pdf";

const fee = 11000; // 10,000円＋税（当サイトが税込額に換算）
const meetingFee = 1000; // お引合せ1回あたり本人負担（縁結びサポーターの交通費・お茶代）
const marriages = { total: 383, members: 194, mixed: 189 };

const municipalities = ["宮崎市", "延岡市", "日向市", "西都市", "国富町", "諸塚村", "日之影町", "五ヶ瀬町"];

const centers = [
  { name: "宮崎センター", addr: "宮崎市錦町1-10 宮崎グリーンスフィア壱番館（KITEN）7階", tel: "0985-41-4110" },
  { name: "都城センター", addr: "都城市中町17街区2号 TERRASTA 3階（ホテル テラスタ都城内）", tel: "0986-51-4110" },
  { name: "延岡センター", addr: "延岡市紺屋町1丁目4-28 エンシティホテル延岡1階", tel: "0982-20-4110" },
];

export const metadata: Metadata = {
  title: "宮崎県で結婚相談所を探す方へ｜県の「みやざき結婚サポートセンター」は登録料11,000円・2年有効、成婚383組。都城市の無料お見合い「ONIAI」と民間との費用比較",
  description:
    "宮崎県の「みやざき結婚サポートセンター」は入会登録料10,000円＋税（2年間有効）で成婚料はなく、成婚数は383組です（2026年10月31日更新）。入会条件・必要書類・お引合せのルール、登録料を補助する8市町村、都城市が運営する登録無料の「ONIAI」、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/miyazaki/" },
};

const faqs = [
  {
    q: "みやざき結婚サポートセンターの料金はいくらですか？",
    a: "入会登録料は10,000円＋税（税込11,000円）で、登録日から2年間有効です。2年を過ぎて続ける場合は、更新料10,000円＋税がかかります。お引合せのたびに、同席する縁結びサポーターの交通費・お茶代として1人1,000円が必要です。公式サイトでは、成婚料などこれ以外の費用はかからないと案内されています。入会登録料はいかなる理由でも返金されません（みやざき結婚サポートセンター「費用について」・会員規約）。",
  },
  {
    q: "宮崎県外に住んでいても登録できますか？",
    a: "会員規約では、宮崎県内に住んでいる方のほか、県外に住んでいて宮崎県への移住等の意向がある方も会員になれると定めています。公式のよくあるご質問でも、県外在住者は入会条件を満たしていれば入会できると案内されています。お相手の承諾があれば、オンラインでのお引合せも行われています。",
  },
  {
    q: "県の「結婚支援サービス利用促進事業補助金」は、センターの登録料に使えますか？",
    a: "使えません。県の補助金のよくある質問（令和8年4月23日更新）では、みやざき結婚サポートセンターの登録利用料は補助対象にならないと明記されています。この補助金は、認証を受けたマッチングアプリや県の結婚支援ポータルサイトに掲載された民間の結婚相談所の利用料等が対象で、18歳以上39歳以下の県内在住者に1年度あたり上限1万円が補助されます。センターの登録料については、宮崎市・延岡市など一部の市町村が独自に補助しています。",
  },
  {
    q: "都城市に住んでいる場合、どのような公的支援がありますか？",
    a: "都城市は、市の職員が仲介する1対1のお見合い事業「ONIAI」を運営しており、登録料・紹介料は無料です。対象は市内に在住・在勤、または都城市に定住する意思がある20歳から49歳までの独身の方です。あわせて、県のみやざき結婚サポートセンターの都城センター（TERRASTA 3階）も利用できます。センターに登録すれば、宮崎・延岡の会員とも同じシステムでお相手を探せます。",
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
  headline: "宮崎県の公的な婚活支援「みやざき結婚サポートセンター」の料金・入会条件・成婚数、都城市の「ONIAI」と、民間の結婚相談所との比較",
  description: "宮崎県の「みやざき結婚サポートセンター」の料金・入会条件・必要書類・お引合せのルール・成婚数、登録料を補助する市町村、都城市のお見合い事業「ONIAI」と、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/miyazaki/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "宮崎県の結婚支援（みやざき結婚サポートセンター・都城市ONIAI）", item: "https://mu-su-bi-ba.com/knowledge/miyazaki/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";
const ext = { target: "_blank", rel: "noopener noreferrer", className: "underline" } as const;

export default function KnowledgeMiyazaki() {
  const memberShare = ((marriages.members / marriages.total) * 100).toFixed(1);
  const cost = (n: number) => (fee + meetingFee * n).toLocaleString();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "宮崎県の結婚支援（みやざき結婚サポートセンター・都城市ONIAI）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          宮崎県の結婚相談所選び：県の「みやざき結婚サポートセンター」の料金・入会条件・成婚数、都城市の「ONIAI」と、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月21日（料金・入会条件・成婚数・会員規約・利用規程は同日にみやざき結婚サポートセンター公式サイト、宮崎県公式サイト、都城市公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />宮崎県の「みやざき結婚サポートセンター」は2年間で登録料11,000円、成婚料はかかりません
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>「みやざき結婚サポートセンター」は、宮崎県が<strong>宮崎・都城・延岡の3か所</strong>に設置している会員制の結婚支援センターです。マッチングシステム「Hana michi」でお相手を探し、センターが1対1のお引合せを調整します。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>入会登録料は<strong>10,000円＋税（税込{fee.toLocaleString()}円）で2年間有効</strong>です。お引合せのたびに縁結びサポーターの交通費・お茶代として1人1,000円がかかり、成婚料などそれ以外の費用はかかりません。対象は<strong>18歳以上</strong>の独身の方で、独身証明書が必要です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>公式サイトに掲載されている成婚数は<strong>{marriages.total}組</strong>（会員同士{marriages.members}組・会員と非会員{marriages.mixed}組、2026年10月31日更新）です。会員数は公式サイトに記載がありません。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>都城市</strong>は、市の職員が仲介する1対1のお見合い事業<strong>「ONIAI」を登録料・紹介料無料</strong>で運営しています（20〜49歳）。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">みやざき結婚サポートセンターの料金と入会条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>設置</td><td className={td}>宮崎県（担当は福祉保健部こども政策局こども政策課）。会員規約は平成27年8月19日施行で、県の資料では令和7年度に開設10周年を迎えています</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会登録料</td><td className={td}>10,000円＋税（登録日から2年間有効）。登録後に一度も閲覧やお見合いを利用しなくても、退会時の返金はなし。都城・延岡センターで登録する場合は、銀行振込（振込手数料は本人負担）または宮崎センターで直接入金</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>更新料</td><td className={td}>10,000円＋税（更新日から2年間）。登録期間が終わると自動的に退会となり、続ける場合は更新手続きが必要</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お引合せの費用</td><td className={td}>縁結びサポーターの交通費・お茶代として1人1,000円（2人で2,000円）。お引合せ場所での飲食費は実費</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>成婚料など</td><td className={td}>上記以外の費用はかからない（公式サイトの案内）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>会員資格</td><td className={td}>18歳以上で結婚を希望している独身の方／宮崎県内に居住しているか、県外に居住していて宮崎県への移住等の意向がある方／本人が操作できるパソコンかスマートフォンと、本人のみが使うメールアドレス・電話番号を登録できる方（従来型の携帯電話は利用不可）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>独身証明書（発行から3か月以内。戸籍抄本でも可）、写真付きの身分証1点（運転免許証・パスポート・マイナンバーカードなど）、閲覧用写真2枚（2枚目は任意。本人のみ・3か月以内に撮影・L判程度。データでの提出は不可）。代理登録の場合は本人自筆の委任状と代理人の身分証明書</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録方法</td><td className={td}>パソコンかスマートフォンで入会を申し込み、3センターのいずれかに来所予約をして必要書類を持参する。書類がすべて揃わないと登録は完了しない。仮登録後90日が過ぎるとデータは自動で消去される</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              独身証明書の有効期限は、発行日を1日目として3か月後の応当日の前日までとして扱われます（例：9月1日発行なら11月30日まで）。登録後は、登録したセンターに限らず、宮崎・都城・延岡のどのセンターでも利用できます。外国籍の方は、独身証明書の代わりに婚姻要件具備証明書とその日本語訳が必要です。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={ADMISSION_URL} {...ext}>みやざき結婚サポートセンター「入会のご案内」</a>・<a href={EXPENSES_URL} {...ext}>「費用について」</a>・<a href={AGREEMENT_URL} {...ext}>「みやざき結婚サポートセンター会員規約」</a>・<a href={RULES_URL} {...ext}>「みやざき結婚サポートセンター利用規程」（令和7年12月26日改正）</a>・<a href={FAQ_URL} {...ext}>「よくあるご質問」</a>・<a href={PREF_MEETING_PDF_URL} {...ext}>宮崎県「ひなたの出逢い・子育て応援運動推進会議」資料1（令和7年10月・PDF）</a>（いずれも2026年11月21日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">お引合せまでの流れと申込みのルール</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>自分のパソコンやスマートフォン、またはセンター内の専用タブレットでお相手の情報を閲覧し、会いたいお相手を選んでお引合せを申し込む（本人以外の閲覧・申込みは不可。センターでの閲覧のみ要予約）</li>
              <li>お相手が承諾すると、センターが日程を調整し、お引合せ場所を選ぶ</li>
              <li>ボランティアの「縁結びサポーター」が同席してお引合せ（1時間程度が目安）。当日はお互いの氏名などの個人情報は伝えない</li>
              <li>システムのマイページから交際するかどうかを回答し、双方が希望すればセンターからお相手の連絡先が伝えられる</li>
              <li>交際開始後は、縁結びサポーターが2週間後・2か月後・半年ごとにフォローする。結婚が決まったらセンターに連絡し、記念品が贈られる</li>
            </ol>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>ルール</th><th className={th}>内容（利用規程）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お相手検索</td><td className={td}>センターまたは自宅で閲覧（自宅閲覧は本人が同意した場合のみ）。自宅閲覧で見られる範囲は、自分が開示を選んだ内容と同じ条件の方に限られる。センターでの検索は相談時間を含めて1回45分</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お引合せの申込み</td><td className={td}>1日1回、希望順位を付けて3人まで</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申込みへの回答</td><td className={td}>申込みを受けた日の翌日から4日以内</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お引合せ当日</td><td className={td}>1時間程度。最初の15分程度は縁結びサポーターが同席</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>交際希望の回答</td><td className={td}>お引合せの翌日から3日以内にマイページで回答。センターでの「交際」は友人としてのスタートと位置づけられている</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>交際中</td><td className={td}>登録内容は非開示となり、お相手検索やお引合せの申込みはできない</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              公開される項目は、性別・年齢・居住地（県内7圏域の区分まで）・身長・最終学歴・職業・婚歴などで、氏名・生年月日・現住所・勤務先などは非開示です。写真には悪用防止のため閲覧者のIDと名前が表示されます。センターは、宮崎・都城・延岡の各地域で個別相談会やセミナーも開催しています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={FLOW_URL} {...ext}>みやざき結婚サポートセンター「結婚までの流れ」</a>・<a href={RULES_URL} {...ext}>「みやざき結婚サポートセンター利用規程」</a>・<a href={FAQ_URL} {...ext}>「よくあるご質問」</a>・<a href={TOP_URL} {...ext}>公式トップページ</a>（いずれも2026年11月21日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">成婚数とセンターの拠点</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>件数（2026年10月31日更新）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>これまでの成婚数</td><td className={td}>{marriages.total}組</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>うち会員同士の成婚数</td><td className={td}>{marriages.members}組（全体の{memberShare}%、当サイト算出）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>うち会員と非会員の成婚数</td><td className={td}>{marriages.mixed}組</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              成婚数は開設以来の累計で、公式サイトでは会員同士と、会員と非会員の組み合わせに分けて掲載されています。年度ごとの成婚数や、現在の会員数・男女比は公式サイトに記載がありません。会員数を重視される方は、来所予約の際にセンターへお問い合わせください。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>センター</th><th className={th}>所在地</th><th className={th}>電話</th></tr></thead>
                <tbody>
                  {centers.map((c) => (
                    <tr key={c.name} className="border-t border-[#E5DCCF] align-top"><td className={td}>{c.name}</td><td className={td}>{c.addr}</td><td className={td}>{c.tel}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              開所時間は3センターとも平日12:00〜19:00、土・日・祝日10:00〜17:00で、毎週火曜日・水曜日と年末年始（12月29日〜1月3日）は休みです。定休日の振替や臨時閉所が公式サイトのお知らせで案内される場合があります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TOP_URL} {...ext}>みやざき結婚サポートセンター 公式トップページ</a>・<a href={CENTER_URL} {...ext}>「センターのご案内」</a>（いずれも2026年11月21日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">登録料を補助する市町村と、県の結婚支援サービス利用補助金</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>
              センター公式サイトの「市町村の取り組み」には、センターの入会登録料を補助する市町村として<strong>{municipalities.length}市町村</strong>（{municipalities.join("・")}）の案内が掲載されています（当サイトが掲載を数えた値）。掲載日は2021年〜2025年で、補助額や対象者の条件は市町村ごとに異なり、変更される場合があります。利用を検討する際は、お住まいの市町村の担当窓口で最新の条件をご確認ください。都城市はこの一覧に掲載されていませんが、市独自の無料のお見合い事業を運営しています（次の節を参照）。
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>宮崎県結婚支援サービス利用促進事業補助金</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象者</td><td className={td}>申請日に宮崎県内に住所がある18歳以上39歳以下の独身者で、令和7年4月1日以降に対象サービスの利用を開始した方（県税の未納がないことなどの要件あり）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>対象サービス</td><td className={td}>「インターネット型結婚相手紹介サービス認証」を受けた民間のマッチングアプリ、または県の結婚支援ポータルサイトに掲載されている民間の結婚相談所</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>補助額</td><td className={td}>入会金・登録料・利用料・月会費等の10/10以内、1人あたり各年度1万円まで（千円未満切り捨て）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>申請期限</td><td className={td}>支払った日から3か月を経過した日か、支払った日の属する年度の3月31日の、いずれか早い日まで。原則として電子申請</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>センターの登録料</td><td className={td}>補助の対象外（県のよくある質問 Q7）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              県の資料では、この補助金の令和7年度の補助件数は100件超（令和7年9月現在）です。よくある質問は令和8年4月23日に更新され、令和8年4月1日時点の対象アプリが掲載されています。なお、対象の結婚相談所を掲載している県の結婚支援ポータルサイトは、当サイトが2026年11月21日にアクセスした時点でサービスを一時停止していました。対象となる相談所は、県のこども政策課（0985-44-2835）でご確認ください。このほか県は、地域のボランティア「ひなたの縁結びさん」によるお相手紹介や結婚の相談の取り組みも行っています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MUNICIPAL_URL} {...ext}>みやざき結婚サポートセンター「市町村の取り組み」</a>・<a href={PREF_SUBSIDY_URL} {...ext}>宮崎県「マッチングアプリ利用料等を補助！宮崎県結婚支援サービス利用促進事業補助金」</a>・<a href={PREF_SUBSIDY_YOUKOU_URL} {...ext}>同 交付要綱（令和7年4月1日・PDF）</a>・<a href={PREF_SUBSIDY_FAQ_URL} {...ext}>同 よくある質問（令和8年4月23日更新・PDF）</a>・<a href={PREF_MEETING_URL} {...ext}>宮崎県「【令和7年度】ひなたの出逢い・子育て応援運動推進会議の開催結果」</a>・<a href={PREF_ENMUSUBI_URL} {...ext}>宮崎県「「ひなたの縁結びさん」に出逢いや結婚についての相談をしてみませんか？」</a>（いずれも2026年11月21日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">都城市で婚活する方へ：市のお見合い事業「ONIAI」と出会いイベント</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>都城市お見合い事業「ONIAI」</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>都城市 総合政策部 縁結び課（令和8年4月1日に新設。本庁舎5階、0986-23-2213）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>料金</td><td className={td}>登録料・紹介料・お見合い料は無料。飲食店でのお見合いは1人1ドリンク以上の注文が必要で、代金は自己負担</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録資格</td><td className={td}>市内に居住・勤務している方、または都城市に定住する意思のある20歳から49歳までの独身の方で、結婚を真摯に希望し、市が登録を適当と認める方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>独身証明書（発行から3か月以内。戸籍謄本・抄本でも可）、顔写真付きの本人確認書類。独身証明書は市役所1階の市民課で本籍地にかかわらず取得できる（300円）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録の流れ</td><td className={td}>公式LINE「都城市縁結び担当」または申請フォームで仮登録 → 市役所で面談（平日9時〜16時・1時間程度。オンライン面談も相談可）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お見合い</td><td className={td}>市のスタッフが面談内容をもとにマッチング（基準は非公開）し、日程を調整。市のスタッフ等が立ち会い、集合から解散まで約30分（2人のトークは約15分）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>交際・登録期間</td><td className={td}>連絡先を交換した「仮交際」は2人まで同時に進められる。登録期間は2年間で、継続する場合は申し出て面談を受ける</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              ONIAIは、県のセンターのように自分でシステムを検索して申し込む方式ではなく、市のスタッフが面談を通じてお相手を提案する方式です。都城市にお住まいの方は、無料のONIAIと、県のセンターの都城センター（有料・県内全域の会員が対象）を併用することもできます。市の計画書では、ONIAIの会員に対してみやざき結婚サポートセンターへの登録も促すこととされています。
            </p>
            <p>
              出会いイベントとしては、市役所を会場とする「縁結びプロジェクトin都城市役所」（参加費無料・抽選制）が開催されており、市の案内ではこれまでに81名が参加しています。第8回は2026年12月19日開催で、対象は35〜39歳の独身者（男女各8人、申込締切12月10日）です。都城市の令和8年度の婚活応援事業の総事業費は10,064,300円で、市の計画書には、各種団体と連携した婚活イベントでのカップル成立数が令和6年度に174組、市の婚姻件数が令和6年に612件と記載されています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MK_ONIAI_URL} {...ext}>都城市「お見合い事業（愛称「ONIAI」）」</a>・<a href={MK_ONIAI_KIYAKU_URL} {...ext}>「都城市お見合い事業（ONIAI）利用規約」（PDF）</a>・<a href={MK_KA_OPEN_URL} {...ext}>「「縁結び課」開設のお知らせ」</a>・<a href={MK_KA_URL} {...ext}>「縁結び課（本庁舎5階）」</a>・<a href={MK_EVENT_URL} {...ext}>「第8回 縁結びプロジェクトin都城市役所」</a>・<a href={MK_PLAN_URL} {...ext}>「令和8年度地域少子化対策重点推進交付金実施計画書」（PDF）</a>（いずれも2026年11月21日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">近県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>みやざき結婚サポートセンターの利用例（2年間）</th><th className={th}>本人負担の合計（当サイト試算）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お引合せ0回</td><td className={td}>{cost(0)}円（入会登録料のみ）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お引合せ5回</td><td className={td}>{cost(5)}円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お引合せ10回</td><td className={td}>{cost(10)}円</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#2C2C2C]/55">※入会登録料10,000円＋税を税込11,000円とし、お引合せ1回につき縁結びサポーターの交通費・お茶代1,000円を加えた目安です。お引合せ場所での飲食費、都城・延岡センターで登録する場合の振込手数料、写真代、独身証明書の発行手数料は含みません。</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>登録の有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>宮崎県「みやざき結婚サポートセンター」</td><td className={td}>入会登録料10,000円＋税、お引合せごとに1,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>都城市「ONIAI」</td><td className={td}>登録料・紹介料無料（飲食店での飲料代は自己負担）</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/kagoshima/" className="text-[#A08447] underline">鹿児島県「かごしま出会いサポートセンター」</Link></td><td className={td}>入会登録料10,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/kumamoto/" className="text-[#A08447] underline">熊本県「Kumarry」</Link></td><td className={td}>入会登録料10,000円（共同実施15市町村に住む方）、それ以外の方は20,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/oita/" className="text-[#A08447] underline">大分県「OITAえんむす部」</Link></td><td className={td}>入会登録料10,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用だけを比べると、みやざき結婚サポートセンターはお引合せを10回利用した場合でも2年間で{cost(10)}円が目安で、民間の結婚相談所の1年総額の最低額（125,400円）を大きく下回ります。九州の近県のセンターと比べると、登録料の水準はほぼ同じで、お引合せごとに縁結びサポーターへの1,000円がかかる点が特徴です。一方で、お相手探しは会員自身がシステムで検索して申し込む方式で、会員数は公表されていません。民間の結婚相談所は、費用がかかる代わりに、担当者がお相手を提案したり、交際中の相談に継続的に応じたりするところが多くあります。宮崎県内から利用できるオンライン型の結婚相談所や、福岡市の結婚相談所も選択肢になります。料金は変更される場合がありますので、申込み前に各公式サイトで最新の情報をご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。鹿児島県・熊本県・大分県の料金は、各公式サイトで2026年11月18日〜20日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/knowledge/kagoshima/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">かごしま出会いサポートセンター（鹿児島県）</Link>
            <Link href="/knowledge/kumamoto/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">Kumarry（熊本県）</Link>
            <Link href="/knowledge/oita/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">OITAえんむす部（大分県）</Link>
            <Link href="/knowledge/saga/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">さが出会いサポートセンター（佐賀県）</Link>
            <Link href="/knowledge/nagasaki/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">長崎県の結婚支援</Link>
            <Link href="/knowledge/yamagata/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">Aiナビやまがた（山形県）</Link>
            <Link href="/area/fukuoka/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">福岡の結婚相談所</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
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
