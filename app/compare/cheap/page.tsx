import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import A8Banner from "@/components/A8Banner";
import { FEE_CHECKED, jpDate, checkedLabel, checkedRange, planFee, yen as fmtYen } from "@/data/fees";

// ブライダルチューリップはプランと件数で費用が変わるため、data/fees.ts の PLAN_FEES から文言を作る（直書きしない）。
const tA = planFee("bridal-tulip", "Aプラン");
const tB = planFee("bridal-tulip", "Bプラン");
const t42 = planFee("bridal-tulip", "42歳以上プラン");
const tulipMonthlyDiff = tB.monthly - tA.monthly; // 5,400円
const tulipOmiaiDiff = tA.perOmiai - tB.perOmiai; // 2,700円
const tulipBreakEven = tulipMonthlyDiff / tulipOmiaiDiff; // お見合いのみで比べた損益分岐（月の件数）

// マリッジプロ・リングベルも PLAN_FEES（2026-10-26 公式確認）から表示する。
const mpW = planFee("marriage-pro", "女性プラン");
const mpM = planFee("marriage-pro", "男性プラン");
const rbB = planFee("ringbell", "ベーシック");
const rbH = planFee("ringbell", "ハイブリッド");
const rbC = planFee("ringbell", "コミットメント");
const y1 = (p: { initial: number; monthly: number }) => p.initial + p.monthly * 12;

export const metadata: Metadata = {
  title: "安い結婚相談所はどこ？1年総額で24社比較【2026年10月更新】検証済み料金ランキング",
  description:
    `結婚相談所の「安さ」を、1年活動した場合の総額（初期費用＋月会費×12＋成婚料）で、24社を比較しています。掲載しているのは、当サイトが各公式サイトで確認した料金です（${checkedRange(Object.keys(FEE_CHECKED))}確認・税込）。最安はスマリッジの125,400円です。お見合い料や成婚料の有無による総額の違いも解説します。`,
  alternates: { canonical: "/compare/cheap/" },
};

// 料金は各社公式サイトの公表値（税込）。社ごとの確認日は data/fees.ts の FEE_CHECKED に持ち、本文の確認日表記はすべてそこから生成する。
// 2026-10-14: セブン・フィオーレ・マーズカフェ・サンマリエ・パートナーエージェントを公式で再確認して修正（旧値は公式と不一致だった）。
// 2026-10-23: ムスベル・ツヴァイ・オーネットを公式で再確認し、改定後の料金に修正。
// 2026-10-21: 本文中の確認日（7月のまま残っていた表記）を FEE_CHECKED 由来に置き換え。
// 総額は各社の最安プラン基準。お見合い料は回数依存のため総額に含めず列で明示。
type Row = {
  slug: string;
  name: string;
  type: string;
  initial: string;
  monthly: string;
  omiai: string;
  seikon: string;
  total1y: string;
  totalSeikon: string;
  note: string;
};
const rowsRaw: Row[] = [
  {
    slug: "seven",
    name: "結婚相談所セブン",
    type: "IBJ加盟・担当カウンセラー制",
    initial: "9,800円",
    monthly: "9,800円",
    omiai: "0円",
    seikon: "50,000円",
    total1y: "127,400円",
    totalSeikon: "177,400円",
    note: "IBJプランを基準としています。活動1年後から更新料16,200円/年、退会・成婚退会の手数料1,800円がかかります。SCRUMの追加は初回3,300円＋月1,500円です。",
  },
  {
    slug: "smartread",
    name: "スマリッジ",
    type: "オンライン",
    initial: "6,600円",
    monthly: "9,900円",
    omiai: "月8件まで0円",
    seikon: "0円",
    total1y: "125,400円",
    totalSeikon: "125,400円",
    note: "お見合い料は月8件まで0円です。3ヶ月間お見合いが成立しなかった場合の返金保証があります。U28・エリア・シングル親の割引があります（各月1,100円引き）。",
  },
  {
    slug: "fiore",
    name: "FIORE（フィオーレ）",
    type: "仲人型",
    initial: "33,000円",
    monthly: "9,900円",
    omiai: "AI紹介以外で成立時5,500円",
    seikon: "110,000円",
    total1y: "151,800円",
    totalSeikon: "261,800円",
    note: "リミテッド プラン2（毎月2名紹介）を基準としています。会員検索型のフレキシブル（月会費7,700円・成婚料220,000円）や、成婚料0円のフィオーレコースもあります。フォームから予約すると入会登録費が半額になります。",
  },
  {
    slug: "excellence-aoyama",
    name: "エクセレンス青山",
    type: "仲人型（4連盟）",
    initial: "55,000円",
    monthly: "7,700円",
    omiai: "女性5,500円／男性8,800円（都度）",
    seikon: "220,000円",
    total1y: "147,400円",
    totalSeikon: "367,400円",
    note: "スタンダードコースを基準としています。月会費は7,700円と安い一方、お見合い料が1回ごとにかかるため、活動量に応じて総額が増える点にご注意ください。20代限定トライアル11,000円（1ヶ月）があります。",
  },
  {
    slug: "bellroad",
    name: "ベルロード縁結びサポート",
    type: "オンライン（IBJ）",
    initial: "30,000円",
    monthly: "9,800円",
    omiai: "0円",
    seikon: "80,000円",
    total1y: "147,600円",
    totalSeikon: "227,600円",
    note: "1ヶ月プランを基準としています。成婚料80,000円は、IBJ加盟店の中では特に低い水準です（他社の多くは220,000円）。お見合い料・更新料がかからないことが公式サイトに明記されています。ただし、中途解約時の返金はありません。",
  },
  {
    slug: "mars-cafe",
    name: "マーズカフェ",
    type: "仲人型",
    initial: "88,000円",
    monthly: "7,700円",
    omiai: "2,200円／件",
    seikon: "220,000円",
    total1y: "180,400円",
    totalSeikon: "400,400円",
    note: "Aコースを基準としています（入会金66,000円＋登録料22,000円）。お見合い料0円のBコースは月会費11,000円です。成婚率72.5%（2025年・成婚退会者÷全退会者）を公表しています。",
  },
  {
    slug: "marriage-pro",
    name: "マリッジプロ",
    type: "仲人型（IBJ）",
    initial: `${fmtYen(mpW.initial)}（女性プラン）`,
    monthly: fmtYen(mpW.monthly),
    omiai: "0円",
    seikon: fmtYen(mpW.success),
    total1y: fmtYen(y1(mpW)),
    totalSeikon: fmtYen(y1(mpW) + mpW.success),
    note: `誰でも選べる女性プラン（入会金50,000円＋登録料50,000円）を基準としています。男性プランは初期費用${fmtYen(mpM.initial)}・月会費${fmtYen(mpM.monthly)}・成婚料${fmtYen(mpM.success)}で、1年で成婚した場合は${fmtYen(y1(mpM) + mpM.success)}です。28歳以下の女性向けのU-28プラン、東京・神奈川・千葉・埼玉・愛知・大阪・京都の方とお見合いをしない方向けの地方プラン、乗換えプランなど、条件付きでより安いプランがあります。`,
  },
  {
    slug: "wellsma",
    name: "ウェルスマ",
    type: "オンライン仲人型（IBJ）",
    initial: "49,800円",
    monthly: "11,800円",
    omiai: "0円",
    seikon: "149,800円",
    total1y: "191,400円",
    totalSeikon: "341,200円",
    note: "マイペースプランを基準としています。来店不要でIBJ約9.6万名に申し込めます。成婚料149,800円は仲人型の相場（20万円前後）より低めです。専任カウンセラーが付きます。",
  },
  {
    slug: "bridal-tulip",
    name: "ブライダルチューリップ",
    type: "仲人型（3連盟）",
    initial: "105,000円",
    monthly: "7,550円",
    omiai: `${fmtYen(tB.perOmiai)}または${fmtYen(tA.perOmiai)}／件（都度）。交際成立時の手数料は別途 Aプラン${fmtYen(tA.perKosai!)}／件`,
    seikon: "180,000円",
    total1y: "195,600円",
    totalSeikon: "375,600円",
    note: `42歳未満のAプランを基準としています（42歳以上プランは入会金${fmtYen(t42.initial)}・月会費${fmtYen(t42.monthly)}）。お見合い料のほかに、交際（連絡先交換）が1件成立するごとに「直コンタクト事務手数料及び交際開始アドバイス料」がかかります（Aプラン${fmtYen(tA.perKosai!)}・Bプラン${fmtYen(tB.perKosai!)}・42歳以上プラン${fmtYen(t42.perKosai!)}／件）。表の総額にはお見合い料と交際成立時の手数料を含めていません。Bプラン（月会費${fmtYen(tB.monthly)}・お見合い料${fmtYen(tB.perOmiai)}）はAプランより月会費が${fmtYen(tulipMonthlyDiff)}高い一方、お見合い料が1件${fmtYen(tulipOmiaiDiff)}安く、交際成立時の手数料はかかりません。お見合い料だけで比べると月${tulipBreakEven}件で同額、月${tulipBreakEven + 1}件以上ではBプランのほうが安くなります。交際が成立した場合はAプランに1件${fmtYen(tA.perKosai!)}が加わるため、お見合いが月${tulipBreakEven}件未満でもBプランのほうが安くなることがあります（2026年10月25日に公式料金表で再確認・当サイトの試算）。`,
  },
  {
    slug: "code-for-marriage",
    name: "Code For Marriage（エンジニア専門）",
    type: "仲人型（IBJ）",
    initial: "77,000円",
    monthly: "11,000円",
    omiai: "0円",
    seikon: "220,000円",
    total1y: "209,000円",
    totalSeikon: "429,000円",
    note: "ITエンジニア専門の相談所で、仲人は全員が元SE、活動は100%リモートです。U-30プラン（入会33,000円・月会費7,700円）があります。",
  },
  {
    slug: "musbell",
    name: "ムスベル",
    type: "仲人型（複数連盟）",
    initial: "181,500円〜",
    monthly: "16,500円〜",
    omiai: "カジュアルコースは11,000円/回（他コースは無料）",
    seikon: "330,000円",
    total1y: "379,500円〜",
    totalSeikon: "709,500円〜",
    note: "カジュアルコース（初期費用33,000円＋入会金148,500円・月会費16,500円）を基準としています。レギュラーコースは入会金330,000円、エクセレントコースは入会金451,000円・月会費17,000円です。成婚料330,000円は全コース共通で、更新時には更新料55,000円がかかります。今回比較した24社の中で、成婚込みの総額は最も高い水準です。",
  },
  {
    slug: "pitto",
    name: "P!っと縁結び",
    type: "仲人型（IBJ）",
    initial: "88,000円〜",
    monthly: "11,000円〜",
    omiai: "0円（ベーシックプラン）",
    seikon: "220,000円",
    total1y: "220,000円〜",
    totalSeikon: "440,000円〜",
    note: "ピップエレキバンのピップ株式会社が運営しています。休会は月1,100円で最大3ヶ月です。お見合いのキャンセルは1万円、当日変更や15分以上の遅刻は2万円の違約金規定があります。",
  },
  {
    slug: "en-konkatsu",
    name: "エン婚活エージェント",
    type: "オンライン",
    initial: "33,000円",
    monthly: "16,500円",
    omiai: "0円",
    seikon: "0円",
    total1y: "231,000円",
    totalSeikon: "231,000円",
    note: "お見合い料は0円です。3ヶ月以内にお見合いが成立しなかった場合、登録料と3ヶ月分の月会費が返金されます。",
  },
  {
    slug: "ringbell",
    name: "リングベル",
    type: "オンライン型（IBJ）",
    initial: `${fmtYen(rbB.initial)}（ベーシック）`,
    monthly: fmtYen(rbB.monthly),
    omiai: "0円",
    seikon: fmtYen(rbB.success),
    total1y: fmtYen(y1(rbB)),
    totalSeikon: fmtYen(y1(rbB) + rbB.success),
    note: `ベーシックプランを基準としています。月会費は全プラン共通で、ハイブリッドは入会金${fmtYen(rbH.initial)}・成婚料${fmtYen(rbH.success)}（1年で成婚した場合${fmtYen(y1(rbH) + rbH.success)}）、コミットメントは入会金${fmtYen(rbC.initial)}・成婚料${fmtYen(rbC.success)}（同${fmtYen(y1(rbC) + rbC.success)}）です。お見合いのたびに支払う費用はないと公式サイトに記載されています。手続きからサポートまでオンラインで完結するIBJ加盟の相談所です。`,
  },
  {
    slug: "naco-do",
    name: "naco-do（ナコード）",
    type: "オンライン",
    initial: "66,000円",
    monthly: "16,800円",
    omiai: "0円",
    seikon: "0円",
    total1y: "267,600円",
    totalSeikon: "267,600円",
    note: "1プランのみのシンプルな料金体系です。90日間出会えなかった場合は全額返金されます。契約期間は12ヶ月で、成婚による中途解約の違約金はありません。",
  },
  {
    slug: "niko-bridal",
    name: "nikoブライダル",
    type: "仲人型（IBJ正規加盟）",
    initial: "110,000円",
    monthly: "13,200円",
    omiai: "0円（申込200名/月）",
    seikon: "220,000円",
    total1y: "268,400円",
    totalSeikon: "488,400円",
    note: "入会金33,000円＋登録料77,000円です。男性婚活プランは月会費16,500円・成婚料198,000円です。お見合い料は無料で月200名まで申し込めるため、活動量の制約が緩やかです。",
  },
  {
    slug: "nagareyama-otakanomori",
    name: "流山おおたかの森結婚相談所",
    type: "仲人型（IBJ）",
    initial: "165,000円",
    monthly: "9,900円",
    omiai: "0円",
    seikon: "220,000円",
    total1y: "283,800円",
    totalSeikon: "503,800円",
    note: "カウンセラー歴23年の代表が1名で運営しています。流山・柏・野田・松戸へ出張対応しています。",
  },
  {
    slug: "zwei",
    name: "ツヴァイ",
    type: "データマッチング＋仲人",
    initial: "118,800円〜",
    monthly: "15,950円〜",
    omiai: "IBJ会員とのお見合いは0円（IBJプラン）",
    seikon: "0〜220,000円",
    total1y: "310,200円〜",
    totalSeikon: "310,200〜574,200円",
    note: "ご紹介プラン（入会初期費用118,800円・月会費15,950円・成婚料0円）を基準としています。IBJプランは入会初期費用129,800円・月会費18,700円で、IBJ会員と成婚した場合のみ成婚料220,000円がかかります（ツヴァイ会員同士の成婚は0円）。20代割では、ご紹介プランの入会初期費用が60,500円・月会費が12,100円になります。",
  },
  {
    slug: "sunmarie",
    name: "サンマリエ",
    type: "仲人型",
    initial: "165,000円",
    monthly: "18,700円",
    omiai: "0円",
    seikon: "220,000円",
    total1y: "389,400円",
    totalSeikon: "609,400円",
    note: "ベーシックを基準としています（入会金33,000円＋初期活動費132,000円）。1981年創業で、全国23店舗を展開しています。乗り換え割で初期費用が30,000円引きになります。",
  },
  {
    slug: "folli-partner",
    name: "フォリパートナー",
    type: "仲人型（IBJ）",
    initial: "110,000円",
    monthly: "16,500円",
    omiai: "0円",
    seikon: "250,000円",
    total1y: "308,000円",
    totalSeikon: "558,000円",
    note: "ライトコースを基準としています。毎月の紹介人数保証（コース別1〜3名）が特徴です。2年目以降は月会費のみで継続できます。",
  },
  {
    slug: "onet",
    name: "オーネット",
    type: "データマッチング",
    initial: "99,000円〜",
    monthly: "13,200円〜",
    omiai: "公式に記載を確認できず",
    seikon: "0円／220,000円（相手により異なる）",
    total1y: "257,400円〜",
    totalSeikon: "284,900〜477,400円",
    note: "アクティブプラン（入会時費用99,000円・月会費13,200円）を基準としています。オーネット会員同士の成婚は成婚料0円ですが、本交際に進む際に交際サポート料27,500円がかかります。IBJ会員と成婚した場合は成婚料220,000円です。スタンダードプランは入会時費用129,800円・月会費20,790円です。",
  },
  {
    slug: "hero-marriage",
    name: "ヒーローマリッジ（男性専門）",
    type: "仲人型（IBJ）",
    initial: "165,000円",
    monthly: "14,300円",
    omiai: "0円",
    seikon: "220,000円",
    total1y: "336,600円",
    totalSeikon: "556,600円",
    note: "ライトプランを基準としています。男性専門の相談所で、プロカメラマンによる撮影が何度でも無料です。自社イベント経由の成婚は成婚料が50%割引になると公式サイトに記載されています。",
  },
  {
    slug: "partner-agent",
    name: "パートナーエージェント",
    type: "仲人型（専任コンシェルジュ）",
    initial: "99,000円",
    monthly: "14,300円",
    omiai: "0円",
    seikon: "220,000円",
    total1y: "270,600円",
    totalSeikon: "490,600円",
    note: "オンラインコースを基準としています（登録料33,000円＋初期費用66,000円）。コンシェルジュコースは初期費用132,000円・月会費18,700円です。成婚料は全コース220,000円です。",
  },
  {
    slug: "ibj-members",
    name: "IBJメンバーズ",
    type: "仲人型（IBJ直営）",
    initial: "252,450円",
    monthly: "17,050円",
    omiai: "公式料金ページに都度課金の記載なし",
    seikon: "220,000円",
    total1y: "457,050円",
    totalSeikon: "677,050円",
    note: "登録料33,000円＋活動サポート費219,450円です。今回比較した24社の中で、総額はムスベルに次いで高い水準です。中途退会時には、未活動分が返金される制度があります。",
  },
];
const yen = (t: string) => Number(t.replace(/[^0-9]/g, "")) || 0;
const rows: Row[] = [...rowsRaw].sort((a, b) => yen(a.total1y) - yen(b.total1y));

// 確認日ごとに社名をまとめる（新しい順）。確認日の記録がない社は最後にまとめる。
const RANGE = checkedRange(rowsRaw.map((r) => r.slug)) ?? "2026年";
const exactGroups = (() => {
  const m = new Map<string, string[]>();
  for (const r of rowsRaw) {
    const c = FEE_CHECKED[r.slug];
    if (!c || c.approx) continue;
    m.set(c.date, [...(m.get(c.date) ?? []), r.name]);
  }
  return [...m.entries()].sort((a, b) => (a[0] < b[0] ? 1 : -1));
})();
const approxRows = rowsRaw.filter((r) => !FEE_CHECKED[r.slug] || FEE_CHECKED[r.slug].approx);
const approxRange = checkedRange(approxRows.map((r) => r.slug));
const CHECKED_SUMMARY =
  exactGroups.map(([d, names]) => `${jpDate(d)}＝${names.length >= 5 ? `${names.length}社（${names.join("・")}）` : names.join("・")}`).join("／") +
  (approxRows.length
    ? `／確認日の記録がない${approxRows.length}社（${approxRows.map((r) => r.name).join("・")}）＝${approxRange}時点の当サイト調査値`
    : "");
const LATEST = exactGroups.length ? jpDate(exactGroups[0][0]) : null;

const faqs = [
  {
    q: "一番安い結婚相談所はどこですか？",
    a: `当サイトが公式サイトで検証した24社の範囲（${RANGE}確認・税込）では、スマリッジが1年総額125,400円（登録料6,600円＋月会費9,900円×12・成婚料0円）で最安です。オンライン完結型のため店舗サポートはありませんが、3ヶ月お見合い成立なしの返金保証があります。専任カウンセラーによる仲人サポートを受けながら費用を抑えたい場合は、ウェルスマ（1年総額191,400円・お見合い料0円）が検証済みの相談所の中で最安水準です。`,
  },
  {
    q: "「月会費が安い」と「総額が安い」は違うのですか？",
    a: "違います。結婚相談所の費用は初期費用＋月会費×活動月数＋お見合い料＋成婚料で決まるため、月会費が安くても、他の費用によって総額が逆転する場合があります。例えばエクセレンス青山とブライダルチューリップは月会費7千円台ですが、お見合い料が1回ごと（5,500〜8,800円）にかかるため、月2回お見合いすると年間13万〜21万円が総額に上乗せされます。本ページの表は「お見合い料」を列で明示し、「1年総額」と「成婚した場合の総額」を分けて掲載しています。",
  },
  {
    q: "成婚料0円の相談所と成婚料ありの相談所、どちらが得ですか？",
    a: "成婚までの期間と重視するサポートによります。オンライン型（成婚料0円）は総額が安い一方、活動は自分主導が基本です。仲人型（成婚料あり）は費用が高い分、お相手紹介から交際・プロポーズまで伴走してもらえます。費用を抑えて長く活動したい場合はオンライン型、費用がかかっても早期の成婚を目指したい場合は仲人型が適しています。",
  },
  {
    q: "表の料金は正確ですか？",
    a: `掲載料金は当サイトが各公式サイトで確認した公表値です（税込）。社ごとの確認日は次のとおりです：${CHECKED_SUMMARY}。確認日の記録がない社は、無料相談で最新の金額をご確認ください。ただし料金は改定されることがあり、キャンペーン（初月0円等）も随時変わるため、申し込み前に必ず公式サイト・無料相談で最新の料金をご確認ください。`,
  },
  {
    q: "もっと安く始める方法はありますか？",
    a: "確認できた範囲では、①スマリッジの各種割引（28歳以下・対象エリア・シングル親は各月1,100円引き・併用可）、②各社の乗りかえ割（スマリッジは登録料0円、naco-doは初期費用33,000円OFF）、③返金保証の活用（スマリッジ・エン婚活・naco-doとも一定期間の保証あり）があります。適用条件は各公式サイトでご確認ください。",
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

export default function CheapComparePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "料金比較", href: "/compare/" }, { name: "安い結婚相談所の総額比較" }]} />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-light mb-4 tracking-wide text-[#2C2C2C]">
          安い結婚相談所はどこ？1年総額で比較【2026年】
        </h1>
        <p className="text-xs text-[#8B8580] mb-4">料金は各社の公式サイトで確認した公表値です（{RANGE}確認・税込）。確認日は各社の欄に記載しています{LATEST ? `（最新の確認は${LATEST}）` : ""}。</p>
        <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-6">
          結婚相談所の「安さ」は月会費だけでは分かりません。<strong>初期費用＋月会費×12ヶ月＋成婚料</strong>の「1年総額」で並べ替えると、順位が大きく入れ替わります。本ページでは、当サイトが公式サイトで料金を確認できた相談所のみを、総額の安い順に掲載しています。
        </p>

        <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-2xl p-6 mb-10">
          <h2 className="text-base font-medium text-[#A08447] mb-3 tracking-widest">比較結果の要点（検証済み24社・税込）</h2>
          <ul className="space-y-2 text-sm text-[#2C2C2C]/80">
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span><strong>1年総額の最安はスマリッジの125,400円</strong>で、次いで<strong>セブン結婚相談所の127,400円</strong>です。スマリッジは成婚料0円のため、成婚しても総額は増えません。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>担当者が付く相談所で<strong>「成婚まで」安いのはセブン結婚相談所（成婚込177,400円・成婚料50,000円）とベルロード縁結びサポート（成婚込227,600円・成婚料80,000円）</strong>です。どちらもIBJ加盟で、他のIBJ加盟店の多く（成婚料220,000円）と比べて成婚料が大幅に低い水準です。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>⚠️ <strong>「1年総額」と「成婚込み総額」で順位が入れ替わります</strong>。エクセレンス青山は1年総額では3位（147,400円）ですが、成婚料220,000円を加えると367,400円になります。一方、ベルロードは1年総額では4位ですが、成婚込みの総額は227,600円に抑えられます。また、月会費が7千円台でもお見合い料が都度かかる相談所（エクセレンス青山・ブライダルチューリップ）は、活動量に応じて総額が増えます。</span></li>
            <li className="flex gap-2"><span className="text-[#A08447] shrink-0">●</span><span>成婚時総額の幅は<strong>12.5万円（スマリッジ）〜67.7万円（IBJメンバーズ）で、差は最大約5.4倍</strong>です。仲人型は費用が高い分、伴走サポートが手厚く、<strong>費用の安さとサポートの手厚さは両立しにくい関係</strong>にあります。</span></li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">1年総額の安い順ランキング（検証済み24社）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#FAF7F2] text-left">
                  <th className="px-3 py-3">相談所</th>
                  <th className="px-3 py-3">タイプ</th>
                  <th className="px-3 py-3">初期費用</th>
                  <th className="px-3 py-3">月会費</th>
                  <th className="px-3 py-3">お見合い料</th>
                  <th className="px-3 py-3">成婚料</th>
                  <th className="px-3 py-3">1年総額</th>
                  <th className="px-3 py-3">成婚した場合</th>
                  <th className="px-3 py-3">料金の確認日</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.slug} className="border-t border-gray-100 align-top">
                    <td className="px-3 py-3 font-medium whitespace-nowrap">
                      <Link href={`/review/${r.slug}/`} className="text-[#A08447] underline">{r.name}</Link>
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">{r.type}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{r.initial}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{r.monthly}</td>
                    <td className="px-3 py-3">{r.omiai}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{r.seikon}</td>
                    <td className="px-3 py-3 whitespace-nowrap font-semibold text-[#A08447]">{r.total1y}</td>
                    <td className="px-3 py-3 whitespace-nowrap">{r.totalSeikon}</td>
                    <td className="px-3 py-3 text-xs text-[#2C2C2C]/60">{FEE_CHECKED[r.slug] ? (FEE_CHECKED[r.slug].approx ? `${jpDate(FEE_CHECKED[r.slug].date)}時点（記録なし）` : jpDate(FEE_CHECKED[r.slug].date)) : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-3 leading-relaxed">
            ※1年総額＝初期費用＋月会費×12ヶ月（各社の最安プラン基準・成婚料0円の場合）。「成婚した場合」＝1年活動して成婚退会したときの総額（成婚料を加算）。<strong>お見合い料（都度払いの相談所）・オプション・キャンペーンは含みません</strong>。料金は当サイトが各公式サイトで確認した公表値です（税込）。確認日：{CHECKED_SUMMARY}。改定される場合があるため、お申し込み前に各公式サイトでご確認ください。
          </p>
        </section>

        <A8Banner ad="wellsma" />

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">各社の特徴と割引・返金保証</h2>
          <div className="space-y-4">
            {rows.map((r) => (
              <div key={r.slug} className="bg-white rounded-xl border border-gray-100 p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-medium text-[#A08447] tracking-wider">{r.name}</h3>
                  <span className="text-sm font-semibold">{r.total1y}<span className="text-xs text-[#2C2C2C]/50">／1年</span></span>
                </div>
                <p className="text-sm text-[#2C2C2C]/70 leading-relaxed mb-2">{r.note}</p>
                {checkedLabel(r.slug) && <p className="text-xs text-[#2C2C2C]/50 mb-2">料金の確認日：{checkedLabel(r.slug)}</p>}
                <Link href={`/review/${r.slug}/`} className="text-sm text-[#A08447] underline">{r.name}の口コミ・評判を見る →</Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">安さで選ぶときの3つの注意点</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-medium text-[#A08447] mb-1">1. 総額は成婚料を含めて比較することをおすすめします</h3>
              <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">仲人型は月会費が1万円前後でも、成婚退会時に220,000円の成婚料がかかる体系が一般的です。月々の費用ではなく、成婚退会までの総額で比較することをおすすめします。</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-medium text-[#A08447] mb-1">2. 料金が安い理由とサポートの範囲を確認することが大切です</h3>
              <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">オンライン型が安いのは、店舗と専任仲人のコストがかからないためです。検索・申し込み・交際の進行を自分で進められる方には十分な内容ですが、伴走を希望する方は、仲人型のほうが結果的に短期間・低コストで済む場合もあります。来店不要のオンライン型4社（スマリッジ・ウェルスマ・エン婚活・naco-do）のサポート形式・会員基盤まで含めた比較は<Link href="/compare/online/" className="text-[#A08447] underline">オンライン結婚相談所の比較</Link>で確認できます。</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="font-medium text-[#A08447] mb-1">3. 返金保証と割引の適用条件をご確認ください</h3>
              <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">オンライン3社にはいずれも返金保証があります（スマリッジ・エン婚活=3ヶ月お見合い不成立、naco-do=90日間出会えなければ全額）。乗りかえ割・年齢割などの割引も随時実施されています。適用条件は、入会前に書面でご確認ください。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-[#FAFAF8] rounded-xl border border-gray-100">
                <summary className="cursor-pointer px-5 py-4 font-normal text-[#2C2C2C] flex items-center justify-between tracking-wider text-sm">
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-[#A08447] text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-[#2C2C2C]/60 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-light mb-4 tracking-widest">関連ページ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link href="/compare/online/" className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm hover:border-[#A08447] hover:text-[#A08447] transition-colors tracking-wider">オンライン型比較</Link>
            <Link href="/knowledge/cost/" className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm hover:border-[#A08447] hover:text-[#A08447] transition-colors tracking-wider">料金相場の解説</Link>
            <Link href="/knowledge/how-to-choose/" className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm hover:border-[#A08447] hover:text-[#A08447] transition-colors tracking-wider">相談所の選び方</Link>
            <Link href="/compare/" className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm hover:border-[#A08447] hover:text-[#A08447] transition-colors tracking-wider">料金比較一覧</Link>
            <Link href="/compare/30s/" className="bg-white border border-gray-100 rounded-lg p-4 text-center text-sm hover:border-[#A08447] hover:text-[#A08447] transition-colors tracking-wider">30代向けの比較</Link>
          </div>
        </section>

        <A8Banner ad="nacodo" />
      </main>
    </>
  );
}
