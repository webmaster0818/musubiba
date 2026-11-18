import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorBox from "@/components/AuthorBox";

// 事実はすべて一次情報から転記（2026-11-18 確認）。
// ・入会登録料・無料期間・有効期間・お引合せ費用・登録要件・必要書類・申込みの上限：おかやま出会い・結婚サポートセンター「入会申込みについて」「よくある質問」「マッチング」
// ・オンライン引合せの費用：同「マッチング会員規約」（令和8年10月28日施行版・PDF）
// ・成婚数436組：同 公式トップページの表示（時点の記載なし）。400組到達：岡山県 報道発表（2026年6月9日更新）
// ・おためし検索の該当人数：同「おためし検索」（2026年11月18日現在の表示）
// ・拠点・開所時間・結婚相談：同「センターについて」
// ・開設日・運用開始：岡山県「おかやま出会い・結婚サポートセンター」「おかやま縁むすびネット」ページ。応援企業数：岡山県「縁むすび応援企業」（2026年11月10日更新）
// ・高梁市の婚活応援金：高梁市「婚活応援金」。岡山市の取り組み：岡山市「出会いのひろば」
// ・民間相談所の1年総額：当サイト /knowledge/cost/ の22社実査値

const PREF_CENTER_URL = "https://www.pref.okayama.jp/site/160/453637.html";
const PREF_NET_URL = "https://www.pref.okayama.jp/site/160/540714.html";
const PREF_PRESS_URL = "https://www.pref.okayama.jp/site/presssystem/1039370.html";
const PREF_KIGYO_URL = "https://www.pref.okayama.jp/page/1033604.html";
const TOP_URL = "https://www.okayama-musubi.jp/";
const ABOUT_URL = "https://www.okayama-musubi.jp/about.php";
const MATCHING_URL = "https://www.okayama-musubi.jp/matching/index.php";
const ENTRY_URL = "https://www.okayama-musubi.jp/matching/entry.php";
const FAQ_URL = "https://www.okayama-musubi.jp/matching/faq.php";
const KIYAKU_URL = "https://www.okayama-musubi.jp/assets/img/matching/matching-kiyaku.pdf";
const SIM_URL = "https://www.okayama-musubi.jp/matching/simulation/search_simulation.php";
const TAKAHASHI_URL = "https://www.city.takahashi.lg.jp/site/kosodate/konkatsuouen.html";
const OKAYAMA_CITY_URL = "https://www.city.okayama.jp/kankou/0000080268.html";

export const metadata: Metadata = {
  title: "岡山県で結婚相談所を探す方へ｜県の「おかやま縁むすびネット」は2027年3月まで登録無料・成婚436組、民間との費用比較",
  description:
    "岡山県の結婚支援システム「おかやま縁むすびネット」は、入会登録料10,000円（2年間有効）が2027年3月31日まで無料で、成婚料はかかりません。お引合せの費用、登録要件と必要書類、申込みの上限、3か所のセンター、民間の結婚相談所との費用の違いを公式情報で整理しています。",
  alternates: { canonical: "/knowledge/okayama/" },
};

const faqs = [
  {
    q: "おかやま縁むすびネットの料金はいくらですか？",
    a: "入会登録料は通常10,000円（2年間有効）ですが、2027年3月31日までは無料です。無料で登録した場合も会員期間は2年間です。成婚料はかかりません。お相手と会う「お引合せ」には、結びすと（ボランティア）の交通費等として1人2,000円がかかり、オンライン引合せは1人1,000円です（おかやま出会い・結婚サポートセンター「入会申込みについて」「よくある質問」、マッチング会員規約）。",
  },
  {
    q: "岡山県外に住んでいても登録できますか？",
    a: "登録要件は「岡山県内にお住まいの方、県内にお勤めの方、又は岡山での結婚を希望される方で、20歳以上の独身の方」です。公式FAQでは、県外にお住まいでも岡山で結婚を考えている方は登録でき、オンラインによる登録やお引合せも可能と案内されています。",
  },
  {
    q: "登録に年収の書類が必要なのはなぜですか？",
    a: "以前は健康保険証の提出を求めていましたが、健康保険証の新規発行の停止に伴い、代わりに直近の年収が確認できる書類（所得（課税）証明書・源泉徴収票・電子申告した確定申告書の控えのいずれか）を提出する形になりました。公式FAQでは、プロフィールの信用性を確保するためと説明されています。",
  },
  {
    q: "お引合せの申込みに上限はありますか？",
    a: "センターに来所して閲覧する場合は1回につき3人まで、自宅から閲覧する場合は1日につき1人まで申し込めます。お相手の返事は1人につき当日を含め最長4日で、3人に申し込んだ場合は最長12日かかります。",
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
  headline: "岡山県の公的な婚活支援「おかやま縁むすびネット」の料金・登録要件と、民間の結婚相談所との比較",
  description: "岡山県の結婚支援システム「おかやま縁むすびネット」の料金・登録要件・必要書類・活動のルール・成婚数と、3か所のセンター、民間の結婚相談所との費用の違いを整理しています。",
  author: { "@type": "Organization", name: "ムスビバ編集部" },
  publisher: { "@type": "Organization", name: "ムスビバ" },
  datePublished: "2026-11-18",
  dateModified: "2026-11-18",
  mainEntityOfPage: "https://mu-su-bi-ba.com/knowledge/okayama/",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://mu-su-bi-ba.com/" },
    { "@type": "ListItem", position: 2, name: "結婚相談所の基礎知識", item: "https://mu-su-bi-ba.com/knowledge/" },
    { "@type": "ListItem", position: 3, name: "岡山県の結婚支援（おかやま縁むすびネット）", item: "https://mu-su-bi-ba.com/knowledge/okayama/" },
  ],
};

const th = "px-4 py-3 font-medium text-[#2C2C2C]";
const td = "px-4 py-3 text-[#2C2C2C]/75";

export default function KnowledgeOkayama() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Breadcrumb items={[{ name: "結婚相談所の基礎知識", href: "/knowledge/" }, { name: "岡山県の結婚支援（おかやま縁むすびネット）" }]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <h1 className="text-2xl sm:text-3xl font-light mb-8 tracking-wider text-[#2C2C2C]">
          岡山県の結婚相談所選び：県の「おかやま縁むすびネット」の料金・登録要件と、民間の結婚相談所との比較
        </h1>
        <p className="text-xs text-[#8B8580] mb-6">最終更新: 2026年11月18日（料金・登録要件・成婚数・センターの開所時間は同日におかやま出会い・結婚サポートセンター公式サイトと岡山県公式サイトで確認）</p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 sm:p-7 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-4 tracking-widest flex items-center gap-2">
            <span className="inline-block w-1.5 h-5 bg-[#A08447] rounded-full" />岡山県の「おかやま縁むすびネット」は、2027年3月31日まで入会登録料が無料です
          </h2>
          <ul className="space-y-2.5 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>岡山県は2015年8月に「おかやま出会い・結婚サポートセンター」を設置し、2017年に会員制の結婚支援システム「おかやま縁むすびネット」の運用を始めました。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>入会登録料は通常<strong>10,000円（2年間有効）</strong>ですが、<strong>2027年3月31日までは無料</strong>です。成婚料はかからず、お引合せ1回につき1人2,000円（オンラインは1,000円）がかかります。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>公式サイトの表示では、マッチングによる<strong>成婚数は436組</strong>です（2026年6月2日に400組に到達したと県が発表）。お引合せには、ボランティアの「結びすと」が日程を調整し、当日も立ち会います。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>民間の結婚相談所は、当サイトが料金を確認した22社の1年総額が<strong>125,400円〜709,500円</strong>です。縁むすびネットは費用を大きく抑えられる一方、申込み数などに上限があります。</span></li>
          </ul>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">おかやま縁むすびネットの料金と登録要件</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>運営</td><td className={td}>岡山県（子ども・福祉部 縁むすび応援室）が設置する、おかやま出会い・結婚サポートセンター</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>開始時期</td><td className={td}>センター設置 2015年8月4日／縁むすびネットの運用開始 2017年5月17日（登録情報の閲覧は同年8月から）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>入会登録料</td><td className={td}>10,000円（2年間有効）。2027年3月31日までは無料（無料の場合も会員期間は2年間）。退会時の返金はなし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お引合せの費用</td><td className={td}>1人2,000円（3人分のお茶代と結びすとの交通費等）。センター引合せは施設利用料として1人2,000円、オンライン引合せは1人1,000円。当日来られなかった場合はキャンセル料2,000円</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>成婚料</td><td className={td}>なし</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>登録要件</td><td className={td}>岡山県内にお住まいの方、県内にお勤めの方、または岡山での結婚を希望される方で、20歳以上の独身の方／インターネットとメールを使え、センターからの連絡に応対できる方</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>必要書類</td><td className={td}>顔写真付きの公的身分証明書（オンライン登録はマイナンバーカード・運転免許証のみ）、戸籍個人事項証明書（抄本）または独身証明書（3か月以内。マイナンバーカードでのオンライン証明も可）、直近の年収が確認できる書類、プロフィール写真1枚（3か月以内に撮影・加工不可）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              登録は、オンライン（本人確認をオンラインで行う方式）か、センターへの来所（完全予約制・1枠45分）のどちらかで行います。代理による登録はできません。年齢の上限は公式サイトに記載がありません。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MATCHING_URL} target="_blank" rel="noopener noreferrer" className="underline">おかやま出会い・結婚サポートセンター「マッチング」</a>・<a href={ENTRY_URL} target="_blank" rel="noopener noreferrer" className="underline">「入会申込みについて」</a>・<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="underline">「よくある質問」</a>・<a href={KIYAKU_URL} target="_blank" rel="noopener noreferrer" className="underline">「マッチング会員規約」（PDF）</a>・<a href={PREF_CENTER_URL} target="_blank" rel="noopener noreferrer" className="underline">岡山県「おかやま出会い・結婚サポートセンター」</a>・<a href={PREF_NET_URL} target="_blank" rel="noopener noreferrer" className="underline">岡山県「おかやま縁むすびネット」</a>（いずれも2026年11月18日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">お引合せから交際までの流れと申込みのルール</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>会員登録が完了したら、センター（要来所予約）のタブレット端末、または自宅のスマートフォン等でお相手のプロフィールを閲覧する</li>
              <li>会ってみたいお相手にお引合せを申し込む。第1希望の方から順にお相手の意向が確認される</li>
              <li>お相手が承諾したら、結びすとが日時と場所を調整・決定し、当日も立ち会う（オンライン引合せ・センター引合せも選べる）</li>
              <li>お引合せの後は「チャット期間」として、最長30日程度、氏名や電話番号を伝えずにシステム上でやり取りする</li>
              <li>双方が希望すれば交際に進み、成婚へ</li>
            </ol>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>ルール</th><th className={th}>内容</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お引合せの申込み</td><td className={td}>センター来所の場合は1回につき3人まで、自宅からは1日につき1人まで</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>お相手の返事</td><td className={td}>1人につき当日を含め最長4日。3人に申し込んだ場合は最長12日</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>センター引合せ</td><td className={td}>会員双方が1回以上お引合せを経験している場合に選べる</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>チャット期間</td><td className={td}>最長30日程度。チャット期間を経ずに交際に進むことはできない</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              おかやま縁むすびネットは、お相手探しは会員ご自身が行い、お引合せの日程調整と当日の立ち会いをボランティアの結びすとが担う仕組みです。結びすともボランティアとして活動しているため、成婚料はかかりません。交際中の進め方について担当者から継続的な助言を受けたい方は、民間の結婚相談所のサポート内容とあわせて比べることをおすすめします。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={MATCHING_URL} target="_blank" rel="noopener noreferrer" className="underline">おかやま出会い・結婚サポートセンター「マッチング」</a>・<a href={ENTRY_URL} target="_blank" rel="noopener noreferrer" className="underline">「入会申込みについて」</a>・<a href={FAQ_URL} target="_blank" rel="noopener noreferrer" className="underline">「よくある質問」</a>（いずれも2026年11月18日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">成婚数と会員数の目安</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>項目</th><th className={th}>数値</th><th className={th}>出典</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>マッチングによる成婚数</td><td className={td}>436組（表示に時点の記載なし）</td><td className={td}>センター公式トップページ（2026年11月18日確認）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>成婚数400組への到達</td><td className={td}>2026年6月2日</td><td className={td}>岡山県 報道発表</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>おためし検索で条件を指定しない場合の該当人数</td><td className={td}>男性として検索：1,137人／女性として検索：1,467人（2026年11月18日現在の表示）</td><td className={td}>センター「おためし検索」</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>縁むすび応援企業</td><td className={td}>196の企業・団体（県内27市町村も事業に賛同）</td><td className={td}>岡山県「縁むすび応援企業」（2026年11月10日更新）</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              センターは性別ごとの会員数を公表していません。上の表の1,137人・1,467人は、公式サイトの「おためし検索」で年齢などの条件をすべて指定せずに検索したときに表示される該当人数で、当サイトが2026年11月18日に確認した値です。お相手として表示される異性の人数の目安としてご覧ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={TOP_URL} target="_blank" rel="noopener noreferrer" className="underline">おかやま出会い・結婚サポートセンター 公式サイト</a>・<a href={SIM_URL} target="_blank" rel="noopener noreferrer" className="underline">「おためし検索」</a>・<a href={PREF_PRESS_URL} target="_blank" rel="noopener noreferrer" className="underline">岡山県 報道発表</a>・<a href={PREF_KIGYO_URL} target="_blank" rel="noopener noreferrer" className="underline">岡山県「縁むすび応援企業」</a>（いずれも2026年11月18日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">センターの所在地と市の取り組み</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>拠点</th><th className={th}>所在地</th><th className={th}>開所日時（祝日・年末年始を除く）</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>岡山センター</td><td className={td}>岡山市北区中山下1-9-40 新岡山ビル4階（事務局は同ビル7階）</td><td className={td}>水〜金曜 12:00〜20:30、土・日曜 9:30〜18:00</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>津山センター</td><td className={td}>津山市新魚町17 アルネ・津山4階（津山市地域交流センター内・駐車場は3時間まで無料）</td><td className={td}>日〜木曜 10:00〜19:00、第2・4土曜 10:00〜17:00</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>倉敷センター</td><td className={td}>倉敷市阿知1-7-1 天満屋倉敷店6階</td><td className={td}>水〜日曜 10:00〜19:00</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              センターでは、結婚に関する相談も無料で受け付けています。予約は前日の午後5時までに電話（086-236-0802）で行います。
            </p>
            <p>
              高梁市は、市内にお住まいで令和8年3月1日以降に縁むすびネットへ入会登録をした方に、婚活応援金として1万円を交付しています（定員に達し次第終了）。岡山市は平成19年度から出会いのきっかけづくりに取り組んでおり、令和8年度は近隣の市町と連携して、主に20・30歳代の独身男女を対象とするセミナーや出会いイベントを行っています。そのほかの市町村の取り組みは、お住まいの市町村の担当窓口でご確認ください。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">出典：<a href={ABOUT_URL} target="_blank" rel="noopener noreferrer" className="underline">おかやま出会い・結婚サポートセンター「センターについて」</a>・<a href={TAKAHASHI_URL} target="_blank" rel="noopener noreferrer" className="underline">高梁市「婚活応援金」</a>・<a href={OKAYAMA_CITY_URL} target="_blank" rel="noopener noreferrer" className="underline">岡山市「出会いのひろば」</a>（いずれも2026年11月18日確認）。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">他県のセンター・民間の結婚相談所との費用の比較</h2>
          <div className="space-y-4 text-sm text-[#2C2C2C]/80 leading-relaxed">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-sm border border-[#E5DCCF]">
                <thead><tr className="bg-[#FAF7F2] text-left"><th className={th}>サービス</th><th className={th}>料金</th><th className={th}>登録の有効期間</th></tr></thead>
                <tbody>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>岡山県「おかやま縁むすびネット」</td><td className={td}>10,000円（2027年3月31日まで無料）＋お引合せ1回2,000円（オンライン1,000円）</td><td className={td}>2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/hyogo-deai/" className="text-[#A08447] underline">ひょうご出会いサポートセンター（はばタン会員）</Link></td><td className={td}>5,000円/年</td><td className={td}>1年（年ごとの登録手数料）</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}><Link href="/knowledge/mie/" className="text-[#A08447] underline">三重県「みえむすび」</Link></td><td className={td}>無料（地域サポーター同席は1回1,000円）</td><td className={td}>本登録から2年</td></tr>
                  <tr className="border-t border-[#E5DCCF] align-top"><td className={td}>民間の結婚相談所（当サイト実査22社）</td><td className={td}>1年で成婚退会した場合の総額 125,400円〜709,500円（中央値399,200円）</td><td className={td}>各社の規定による</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              費用だけを比べると、おかやま縁むすびネットは民間の結婚相談所よりも大幅に低く抑えられます。一方で、自宅からの申込みは1日1人まで、お相手の返事を待つ期間があるなど、活動のペースには上限があります。民間の結婚相談所は、費用がかかる代わりに、担当者によるお相手の提案や交際中の相談などを行うところが多くあります。岡山県内から利用できるオンライン型の結婚相談所や、隣接する兵庫県・広島県の結婚相談所も選択肢になります。
            </p>
            <p className="text-xs text-[#2C2C2C]/55">※民間相談所の1年総額は、当サイトが公式サイトで初期費用・月会費・成婚料を確認した22社の計算値です（<Link href="/knowledge/cost/" className="underline">結婚相談所の料金</Link>）。兵庫県・三重県のセンターの料金は、各センターの公式サイトで2026年11月16日〜17日に確認した内容です。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-light mb-6 border-l-4 border-[#A08447] pl-4 tracking-widest">関連ページ</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/knowledge/cost/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">結婚相談所の料金</Link>
            <Link href="/compare/online/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">オンライン結婚相談所の比較</Link>
            <Link href="/area/hiroshima/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">広島の結婚相談所</Link>
            <Link href="/area/kobe/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">神戸・兵庫の結婚相談所</Link>
            <Link href="/knowledge/hyogo-deai/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">ひょうご出会いサポートセンター（兵庫県）</Link>
            <Link href="/knowledge/oita/" className="text-sm border border-[#A08447] text-[#A08447] rounded-full px-5 py-2 hover:bg-[#FAF7F2]">OITAえんむす部（大分県）</Link>
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
