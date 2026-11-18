import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-18 確認）。
// ・登録できる方・成婚数291組（582名・2026年11月8日現在）・お引合せ費用2,100円・センター所在地と営業時間：にいがた出会いサポートセンター 公式サイト「ハートマッチにいがた」「アクセス」
// ・20〜39歳の登録料無料（令和8年4月1日以降の本登録）：同センター お知らせ（2026年3月27日）
// ・40歳以上の登録手数料11,000円・新潟市の登録料補助5,000円・申請方法：新潟市「ハートマッチにいがた登録料補助」（令和8年4月時点）
// ・登録期間・同時進行の上限・プレ交際・サポーターの立会い・回答期限・キャンセル料・必要書類：同センター「利用規約」
// ・センター設置（平成28年10月）：新潟県 ハートマッチにいがた関連ページ
// ・新潟市の結婚新生活支援：新潟市「令和8年度 結婚新生活支援事業」
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const TOP_URL = "https://www.msc-niigata.jp/";
const MATCHING_URL = "https://www.msc-niigata.jp/matching/";
const TERMS_URL = "https://www.msc-niigata.jp/matching/terms/";
const ACCESS_URL = "https://www.msc-niigata.jp/matching/access/";
const FREE_URL = "https://www.msc-niigata.jp/archive/category/topics/";
const PREF_URL = "https://www.pref.niigata.lg.jp/sec/kodomokatei/heart-match-online.html";
const CITY_HOJO_URL = "https://www.city.niigata.lg.jp/kosodate/deai-kekkon/deai/hearthojyo.html";
const CITY_SHINSEIKATSU_URL = "https://www.city.niigata.lg.jp/kosodate/deai-kekkon/kekkon/2026kekkonshinseika.html";

export const metadata: Metadata = {
  title: "新潟市で婚活する方へ｜県の「ハートマッチにいがた」は20〜39歳の登録料無料・新潟市の補助5,000円、成婚291組",
  description:
    "新潟県の婚活マッチングシステム「ハートマッチにいがた」は、令和8年4月から20〜39歳の入会登録料が無料（40歳以上は11,000円）です。新潟市の登録料補助5,000円、中央区万代のセンター、お引合せの費用とルール、会員同士の成婚291組、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/niigata/" },
};

const faqs = [
  {
    q: "ハートマッチにいがたの料金はいくらですか？",
    a: "にいがた出会いサポートセンターのお知らせでは、令和8年4月1日以降に本登録を完了する20〜39歳の方は、新規・更新とも入会登録料が無料です。新潟市の案内では、40歳以上の登録手数料は11,000円です（令和8年4月時点）。登録期間は2年間です。このほか、お引合せのたびに1人2,100円（茶菓代1,100円・サポーター交通通信費1,000円）がかかります。",
  },
  {
    q: "新潟市の登録料補助は誰が使えますか？",
    a: "新潟市に住民登録がある20歳以上の独身者が対象で、令和8年4月1日から令和9年3月31日までに支払ったハートマッチにいがたの2年間の登録料（初回または更新）に対して5,000円を補助します。申請は新潟市オンライン申請システム（e-NIIGATA）で行います。20〜39歳の方は登録料が無料のため、主に登録料がかかる40歳以上の方が対象になると考えられます。",
  },
  {
    q: "新潟県外に住んでいても登録できますか？",
    a: "登録できる方は、結婚を希望し自ら努力する20歳以上の独身の方で、新潟県在住の方、県内にお勤めの方、または新潟県への移住を希望される方です。インターネットやメールを使用できることも条件です。センターでの面談のほか、オンライン面談でも登録できます。",
  },
  {
    q: "同時に何人まで進められますか？",
    a: "利用規約では、お引合せと「プレ交際」を合わせて3人までを同時に進められます。プレ交際の期間は最大60日間で、ニックネームで呼び合い、個人情報を伝えずにやり取りします。交際へ進めるお相手は1人のみです。",
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
  headline: "新潟市で婚活する方へ：県の「ハートマッチにいがた」の料金・登録条件と、新潟市の補助、民間の結婚相談所との比較",
  description: "新潟県の婚活マッチングシステム「ハートマッチにいがた」の料金・登録条件・活動のルール・成婚数と、新潟市の登録料補助・結婚新生活支援、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-18",
  dateModified: "2026-11-18",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/niigata/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "新潟市の婚活（ハートマッチにいがた）", item: "https://mu-su-bi-ba.com/knowledge/niigata/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";

export default function KnowledgeNiigata() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "新潟市の婚活（ハートマッチにいがた）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          新潟市で婚活する方へ：県の「ハートマッチにいがた」の料金・登録条件と、新潟市の補助、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月18日（料金・登録条件・利用規約・成婚数は同日ににいがた出会いサポートセンター公式サイト、補助制度は新潟市公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />新潟県の「ハートマッチにいがた」は、令和8年4月から20〜39歳の登録料が無料です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>新潟県は平成28年10月に「にいがた出会いサポートセンター」を設置し、1対1のマッチングシステム「ハートマッチにいがた」を運営しています。メインのセンターは<strong>新潟市中央区万代</strong>にあります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>入会登録料は<strong>20〜39歳が無料</strong>（新規・更新とも）、<strong>40歳以上は11,000円</strong>で、登録期間は2年間です。お引合せのたびに1人2,100円がかかります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>新潟市は、市民の登録料に対して<strong>5,000円を補助</strong>しています（令和8年4月〜令和9年3月の支払い分）。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>公式サイトの表示では、<strong>会員同士の成婚は291組（582名）</strong>です（2026年11月8日現在）。民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が125,400円〜709,500円です。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">ハートマッチにいがたの料金と登録条件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>新潟県（にいがた出会いサポートセンター。平成28年10月設置）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会登録料</td><td className={td}>20〜39歳：無料（令和8年4月1日以降の本登録完了時の年齢。新規・更新とも）／40歳以上：11,000円（新潟市の案内・令和8年4月時点）。退会時の返金はなし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録期間</td><td className={td}>登録日から2年間。期間が終了すると自動的に退会となり、休会しても期間は延長されない</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お引合せの費用</td><td className={td}>1人2,100円（茶菓代1,100円・サポーター交通通信費1,000円）。当日来られなかった場合はキャンセル料4,200円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録できる方</td><td className={td}>結婚を希望し自ら努力する20歳以上の独身の方／新潟県在住の方、県内にお勤めの方、または新潟県への移住を希望される方／インターネットやメールを使用できる方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>主な必要書類</td><td className={td}>本籍地の市町村長が発行する独身証明書（戸籍抄本でも可。いずれも3か月以内に取得した原本）、写真付きの身分証（運転免許証・マイナンバーカード等）、プロフィール写真</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              登録は、センターでの面談のほか、オンライン面談でも行えます。入会申込日を含めて60日以内に本登録の手続きを終える必要があります。必要書類は登録方法によって案内が異なる場合があるため、申込みの際に公式サイトの最新の案内をご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MATCHING_URL} target="_blank" rel="noopener noreferrer" className="underline">にいがた出会いサポートセンター「ハートマッチにいがた」</a>・<a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className="underline">「利用規約」</a>・<a href={FREE_URL} target="_blank" rel="noopener noreferrer" className="underline">お知らせ「20歳～30歳代の新規・更新入会登録料無料について」（2026年3月27日）</a>・<a href={CITY_HOJO_URL} target="_blank" rel="noopener noreferrer" className="underline">新潟市「ハートマッチにいがた登録料補助」</a>・<a href={PREF_URL} target="_blank" rel="noopener noreferrer" className="underline">新潟県</a>（いずれも2026年11月18日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">お引合せから交際までの流れと利用規約のルール</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <p>活動は、プロフィールの閲覧、お引合せの申込み、お引合せ、プレ交際、交際の順に進みます。</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>ルール</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>同時進行の上限</td><td className={td}>お引合せとプレ交際を合わせて3人まで。交際へ進めるお相手は1人のみ</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お引合せ</td><td className={td}>サポーターが日程を調整し、立ち会う。1時間を目安とし、サポーターの立会いは冒頭の15分程度</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お引合せ後の回答</td><td className={td}>翌日から3日以内に、プレ交際に進むかどうかをサポーターに伝える</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>プレ交際</td><td className={td}>最大60日間。ニックネームで呼び合い、個人情報を伝えずにやり取りする</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>個人情報の交換</td><td className={td}>プレ交際を経て、お二人の交際の意思を確認するまでは行わない</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              ハートマッチにいがたでは、研修を受けたサポーターがお引合せの日程調整と立会い、交際のフォローを行います。お相手探しは会員ご自身がシステムで行う仕組みのため、担当者からお相手の提案や継続的な助言を受けたい方は、民間の結婚相談所のサポート内容とあわせて比べることをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className="underline">にいがた出会いサポートセンター「利用規約」</a>・<a href={MATCHING_URL} target="_blank" rel="noopener noreferrer" className="underline">「ハートマッチにいがた」</a>（いずれも2026年11月18日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">センターの所在地と成婚数</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>拠点</th><th className={th}>所在地</th><th className={th}>開設日時</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>にいがた出会いサポートセンター</td><td className={td}>新潟市中央区万代1丁目3番30号 万代シルバーホテルビル1階／025-384-4151</td><td className={td}>月・水・第2・4・5木 11:00〜19:00、日・祝日 10:00〜18:00、土 10:00〜20:00</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>長岡サポートセンター</td><td className={td}>長岡市台町1丁目8番18号 カンコービル2F</td><td className={td}>月・第2・4・5木・日 10:00〜18:00</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>上越サポートセンター</td><td className={td}>上越市中央1丁目3番18号「直江津学びの交流館」内</td><td className={td}>毎月3回程度（開設状況は公式サイトで案内）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              公式サイトの表示では、会員同士の成婚は<strong>291組（582名）</strong>です（2026年11月8日現在）。会員数は公式サイトに掲載されていないため、希望する年代のお相手がどの程度いるかは、面談の際にセンターへ確認することをおすすめします。センターは県内各地で臨時センターも開設しています。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TOP_URL} target="_blank" rel="noopener noreferrer" className="underline">にいがた出会いサポートセンター 公式サイト</a>・<a href={ACCESS_URL} target="_blank" rel="noopener noreferrer" className="underline">「アクセス」</a>（いずれも2026年11月18日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">新潟市の補助制度</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>制度</th><th className={th}>対象</th><th className={th}>金額</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>ハートマッチにいがた登録料補助</td><td className={td}>新潟市に住民登録がある20歳以上の独身者。令和8年4月1日〜令和9年3月31日に支払った2年間の登録料（初回または更新）</td><td className={td}>5,000円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>結婚新生活支援事業（令和8年度）</td><td className={td}>令和8年1月1日〜令和9年3月31日に婚姻届を提出した新婚世帯で、夫婦とも婚姻時の年齢が39歳以下、令和7年分の夫婦の合計所得が500万円未満など</td><td className={td}>住宅の取得・賃借、引越しの費用を最大30万円</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              登録料補助は、新潟市オンライン申請システム（e-NIIGATA）で申請します。結婚新生活支援事業には、ここに挙げた以外にも要件があります。いずれも申請前に、新潟市こども未来部こども政策課（025-226-1193）の案内ページで最新の条件をご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={CITY_HOJO_URL} target="_blank" rel="noopener noreferrer" className="underline">新潟市「ハートマッチにいがた登録料補助」</a>・<a href={CITY_SHINSEIKATSU_URL} target="_blank" rel="noopener noreferrer" className="underline">新潟市「令和8年度 結婚新生活支援事業」</a>（いずれも2026年11月18日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>登録の有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>新潟県「ハートマッチにいがた」</td><td className={td}>20〜39歳 無料／40歳以上 11,000円＋お引合せ1回2,100円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/akita/" className="text-[#A08447] underline">あきた結婚支援センター</Link></td><td className={td}>10,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/ishikawa/" className="text-[#A08447] underline">いしかわ結婚支援センター（縁結びマッチング）</Link></td><td className={td}>10,000円</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用だけを比べると、ハートマッチにいがたは民間の結婚相談所よりも大幅に低く抑えられ、特に20〜39歳の方は登録料がかかりません。一方で、同時に進められるのはお引合せとプレ交際を合わせて3人までといった上限があります。民間の結婚相談所は、費用がかかる代わりに、担当者によるお相手の提案や交際中の相談などを行うところが多くあります。新潟市内から利用できるオンライン型の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。秋田県・石川県のセンターの料金は、各センターの公式サイトで2026年11月17日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/knowledge/nagano/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">NAGANO ai MATCH（長野県）</Link>
            <Link href="/knowledge/akita/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">あきた結婚支援センター（秋田県）</Link>
            <Link href="/knowledge/ishikawa/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">いしかわ結婚支援センター（石川県）</Link>
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
