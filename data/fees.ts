/*
 * 結婚相談所24社の料金（2026-10-08 新設）。
 *
 * 値は /compare/ に掲載済みの「各社公式サイトの実査値」をそのまま数値化したもので、
 * 新しい金額は一切作っていない。
 * 2026-10-14: 提携先のうち naco-do・セブン・スマリッジ・マーズカフェ・エン婚活・サンマリエ・
 * パートナーエージェント・フィオーレを公式サイトで再確認し、食い違っていた値を修正。下限がレンジで示されているものは下限を取り、
 * 公表が確認できなかった項目は null にして「非公表」と表示する。
 * 2026-10-23: ムスベル・ツヴァイ・オーネット・nikoブライダルを公式サイトで再確認。ムスベル・ツヴァイ・オーネットは料金改定後の値に更新。
 * オーネットの成婚料は相手により0円/220,000円に分かれるため null（順位・総額の計算から外す）。
 * 2026-10-26: マリッジプロ（公式 prop-p.com/price/）・リングベル（公式 ringbell-marriage.com/price）を公式サイトで確認し、
 * 未確認（—）だった月会費・初期費用・成婚料を下限値で登録。プラン別の金額は PLAN_FEES に持つ。
 *
 * ここを作った理由: このサイトが競合に対して持っている唯一の資産は
 * 「24社の料金を同じ基準で並べたデータ」であるため、各レビューページから
 * 「その相談所が24社の中でどの位置にあるか」を出せるようにする。
 */

export type Fee = {
  slug: string;
  name: string;
  /** 月会費の下限（円・税込）。公表が確認できなければ null */
  monthly: number | null;
  /** 入会時にかかる費用の下限（円・税込）。公表が確認できなければ null */
  initial: number | null;
  /** 成婚料（円・税込）。0 は「成婚料なし」と公表されているもの。null は未確認 */
  success: number | null;
  /** 画面に出す表記（/compare/ と同じ文言） */
  monthlyText: string;
  initialText: string;
  type: string;
};

export const FEES: Fee[] = [
  { slug: "naco-do", name: "naco-do（ナコード）", monthly: 16800, initial: 66000, success: 0, monthlyText: "月会費16,800円", initialText: "初期費用66,000円／成婚料0円", type: "オンライン型・成婚料0円" },
  { slug: "seven", name: "セブン結婚相談所", monthly: 9800, initial: 9800, success: 50000, monthlyText: "月会費9,800円", initialText: "入会金9,800円／成婚料50,000円", type: "IBJ加盟・低価格" },
  { slug: "bridal-tulip", name: "Bridalチューリップ", monthly: 7550, initial: 105000, success: 180000, monthlyText: "月会費7,550円〜12,950円", initialText: "入会金105,000円（42歳以上プランは150,800円）／成婚料180,000円", type: "仲人型・3連盟加盟" },
  { slug: "excellence-aoyama", name: "エクセレンス青山", monthly: 7700, initial: 55000, success: 220000, monthlyText: "月会費7,700円〜", initialText: "入会金55,000円〜220,000円（コース別）／成婚料220,000円", type: "ハイスペック特化" },
  { slug: "smartread", name: "スマリッジ", monthly: 9900, initial: 6600, success: 0, monthlyText: "月会費9,900円", initialText: "初期費用6,600円", type: "低初期費用・オンライン" },
  { slug: "bellroad", name: "ベルロード縁結びサポート", monthly: 9800, initial: 30000, success: 80000, monthlyText: "月会費9,800円（1ヶ月プラン）", initialText: "入会金30,000円／成婚料80,000円", type: "サブスク型・IBJ加盟" },
  { slug: "nagareyama-otakanomori", name: "流山おおたかの森の相談所", monthly: 9900, initial: 165000, success: 220000, monthlyText: "月会費9,900円", initialText: "初期費用165,000円／成婚料220,000円", type: "地域密着・IBJ加盟" },
  { slug: "mars-cafe", name: "マーズカフェ", monthly: 7700, initial: 88000, success: 220000, monthlyText: "月会費7,700円〜11,000円", initialText: "入会金66,000円＋登録料22,000円／成婚料220,000円", type: "仲人型・IBJ/TMS加盟" },
  { slug: "code-for-marriage", name: "Code For Marriage", monthly: 11000, initial: 77000, success: 220000, monthlyText: "月会費11,000円（スタンダード）", initialText: "入会費77,000円／成婚料220,000円", type: "年代別プランあり" },
  { slug: "pitto", name: "P!っと縁結び", monthly: 11000, initial: 88000, success: 220000, monthlyText: "月会費11,000円〜16,500円", initialText: "初期費用88,000円〜110,000円／成婚料220,000円", type: "ピップ運営・全国対応" },
  { slug: "wellsma", name: "ウェルスマ", monthly: 11800, initial: 49800, success: 149800, monthlyText: "月会費11,800円〜19,800円", initialText: "入会金49,800円／成婚料149,800円", type: "オンライン仲人型" },
  { slug: "niko-bridal", name: "nikoブライダル", monthly: 13200, initial: 110000, success: 220000, monthlyText: "月会費13,200円（男性婚活プラン16,500円）", initialText: "初期費用110,000円／成婚料220,000円", type: "大阪・仲人型" },
  { slug: "en-konkatsu", name: "エン婚活エージェント", monthly: 16500, initial: 33000, success: 0, monthlyText: "月会費16,500円", initialText: "登録料33,000円／成婚料0円", type: "オンライン型" },
  { slug: "hero-marriage", name: "ヒーローマリッジ", monthly: 14300, initial: 165000, success: 220000, monthlyText: "月会費14,300円〜27,500円", initialText: "初期費用165,000円／成婚料220,000円", type: "男性専門" },
  { slug: "musbell", name: "ムスベル", monthly: 16500, initial: 181500, success: 330000, monthlyText: "月会費16,500円〜17,000円", initialText: "初期費用33,000円＋入会金148,500円〜451,000円（コース別）／成婚料330,000円", type: "仲人・データ併用型" },
  { slug: "zwei", name: "ツヴァイ", monthly: 15950, initial: 118800, success: 0, monthlyText: "月会費15,950円（ご紹介プラン）／18,700円（IBJプラン）", initialText: "入会初期費用118,800円（ご紹介プラン・成婚料0円）／129,800円（IBJプラン・IBJ会員との成婚時のみ成婚料220,000円）", type: "大手・データマッチング" },
  { slug: "onet", name: "オーネット", monthly: 13200, initial: 99000, success: null, monthlyText: "月会費13,200円〜24,200円", initialText: "入会時費用99,000円〜143,000円／成婚料はIBJ会員との成婚時のみ220,000円（オーネット会員同士は0円・別途交際サポート料27,500円）", type: "大手・会員数多数" },
  { slug: "sunmarie", name: "サンマリエ", monthly: 18700, initial: 165000, success: 220000, monthlyText: "月会費18,700円", initialText: "入会金33,000円＋初期活動費132,000円／成婚料220,000円", type: "仲人型・1981年創業" },
  { slug: "folli-partner", name: "東京フォリパートナー", monthly: 16500, initial: 110000, success: 250000, monthlyText: "月会費16,500円〜22,000円", initialText: "入会金110,000円〜250,000円／成婚料250,000円〜300,000円", type: "少人数担当・成婚重視" },
  { slug: "ibj-members", name: "IBJメンバーズ", monthly: 17050, initial: 252450, success: 220000, monthlyText: "月会費17,050円", initialText: "初期費用252,450円／成婚料220,000円", type: "IBJ直営・大手" },
  { slug: "partner-agent", name: "パートナーエージェント", monthly: 14300, initial: 99000, success: 220000, monthlyText: "月会費14,300円〜26,400円", initialText: "登録料33,000円＋初期費用66,000円〜／成婚料220,000円", type: "成婚重視・コンシェルジュ" },
  { slug: "fiore", name: "FIORE（フィオーレ）", monthly: 5830, initial: 33000, success: null, monthlyText: "月会費5,830円〜17,600円", initialText: "入会登録費33,000円／成婚料0円〜220,000円（コース別）", type: "仲人型＋AI・会員検索" },
  { slug: "marriage-pro", name: "マリッジプロ", monthly: 9000, initial: 80000, success: 180000, monthlyText: "月会費9,000円〜13,000円", initialText: "入会金＋登録料80,000円〜110,000円／成婚料180,000円〜220,000円（プラン別）", type: "IBJ加盟・20代30代専門" },
  { slug: "ringbell", name: "リングベル", monthly: 17600, initial: 55000, success: 109800, monthlyText: "月会費17,600円", initialText: "入会金55,000円〜242,000円／成婚料109,800円〜220,000円（プラン別）", type: "IBJ加盟・オンライン型" },
];

/**
 * 各社の料金を公式サイトで最後に確認した日（2026-10-21 新設）。
 * 根拠は各レビューページの「最終更新／料金は○月○日に公式サイトで確認」の記載。
 * 日付は "YYYY-MM-DD"。確認日の記録がなく月しか分からない社は "YYYY-MM" とし、approx を立てる
 * （画面では「○月時点の当サイト調査値」と表示し、公式確認日とは書かない）。
 * 料金を再確認したら、ここを更新すれば /compare/cheap/ の確認日表記がすべて追従する。
 */
export type FeeChecked = { date: string; approx?: boolean };
export const FEE_CHECKED: Record<string, FeeChecked> = {
  "naco-do": { date: "2026-10-14" },
  seven: { date: "2026-10-27" },
  "bridal-tulip": { date: "2026-10-25" },
  "excellence-aoyama": { date: "2026-10-25" },
  smartread: { date: "2026-10-14" },
  bellroad: { date: "2026-10-24" },
  "nagareyama-otakanomori": { date: "2026-10-27" },
  "mars-cafe": { date: "2026-10-14" },
  "code-for-marriage": { date: "2026-10-22" },
  pitto: { date: "2026-10-23" },
  wellsma: { date: "2026-10-25" },
  "niko-bridal": { date: "2026-10-27" },
  "en-konkatsu": { date: "2026-10-27" },
  "hero-marriage": { date: "2026-10-24" },
  musbell: { date: "2026-10-23" },
  zwei: { date: "2026-10-23" },
  onet: { date: "2026-10-23" },
  sunmarie: { date: "2026-10-14" },
  "folli-partner": { date: "2026-10-25" },
  "ibj-members": { date: "2026-10-24" },
  "partner-agent": { date: "2026-10-24" },
  fiore: { date: "2026-10-21" },
  "marriage-pro": { date: "2026-10-26" },
  ringbell: { date: "2026-10-26" },
};

/** "2026-10-14" → "2026年10月14日"、"2026-06" → "2026年6月" */
export function jpDate(d: string) {
  const [y, m, day] = d.split("-").map(Number);
  return day ? `${y}年${m}月${day}日` : `${y}年${m}月`;
}

/** 画面表示用の確認日ラベル。記録がない社は null */
export function checkedLabel(slug: string) {
  const c = FEE_CHECKED[slug];
  if (!c) return null;
  return c.approx ? `${jpDate(c.date)}時点の当サイト調査値（公式での確認日の記録なし）` : `${jpDate(c.date)}に公式サイトで確認`;
}

/** 指定した社の確認時期の範囲（"2026年5月〜10月" 形式） */
export function checkedRange(slugs: string[]) {
  const ds = slugs.map((s) => FEE_CHECKED[s]?.date).filter((d): d is string => !!d).sort();
  if (!ds.length) return null;
  const [y1, m1] = ds[0].split("-").map(Number);
  const [y2, m2] = ds[ds.length - 1].split("-").map(Number);
  if (y1 === y2) return m1 === m2 ? `${y1}年${m1}月` : `${y1}年${m1}月〜${m2}月`;
  return `${y1}年${m1}月〜${y2}年${m2}月`;
}

export const FEE_SURVEY_NOTE =
  "金額はいずれも、各社公式サイトの掲載値（税込）を当サイトが確認したものです。範囲で示されている項目は、下限の金額を採用しています。";

/** 月会費を公表している社の中での安い順の順位。公表していなければ null */
export function monthlyRank(slug: string) {
  const known = FEES.filter((f) => f.monthly !== null).sort((a, b) => a.monthly! - b.monthly!);
  const i = known.findIndex((f) => f.slug === slug);
  return i < 0 ? null : { rank: i + 1, total: known.length, value: known[i].monthly! };
}

/** 成婚料を公表している社の中での安い順の順位。 */
export function successRank(slug: string) {
  const known = FEES.filter((f) => f.success !== null).sort((a, b) => a.success! - b.success!);
  const i = known.findIndex((f) => f.slug === slug);
  return i < 0 ? null : { rank: i + 1, total: known.length, value: known[i].success! };
}

/** 初期費用を公表している社の中での安い順の順位。 */
export function initialRank(slug: string) {
  const known = FEES.filter((f) => f.initial !== null).sort((a, b) => a.initial! - b.initial!);
  const i = known.findIndex((f) => f.slug === slug);
  return i < 0 ? null : { rank: i + 1, total: known.length, value: known[i].initial! };
}

/** 1年活動した場合の概算（初期費用＋月会費×12＋成婚料）。未公表の項目があれば null。 */
export function oneYearTotal(slug: string): number | null {
  const f = FEES.find((x) => x.slug === slug);
  if (!f || f.monthly === null || f.initial === null || f.success === null) return null;
  return f.initial + f.monthly * 12 + f.success;
}

/**
 * 件数に応じてかかる費用まで含めたプラン別の料金（2026-10-24 新設）。
 * FEES は「初期費用＋月会費×12＋成婚料」の下限比較用で、お見合い料や交際成立時の手数料を持たない。
 * そのため、件数で総額が変わる社の「1年で成婚した場合の目安」はここから計算する（金額を各ページに直書きしない）。
 * - bridal-tulip: 公式「BasicPlan」料金表（2026-10-21確認、2026-10-24・2026-10-25に同値を再確認）。
 *   perKosai＝直コンタクト事務手数料及び交際開始アドバイス料（交際・連絡先交換1件成立ごと）。
 * - musbell: 公式「コース・料金」ページ（2026-10-23確認）。料金表に交際成立時の費用の項目はない（2026-10-24確認）ため perKosai は null。
 */
export type PlanFee = {
  slug: string;
  plan: string;
  initial: number;
  monthly: number;
  /** お見合い1件ごとの費用（無料は0） */
  perOmiai: number;
  /** 交際成立1件ごとの費用。料金表に項目がなければ null */
  perKosai: number | null;
  success: number;
};

export const PLAN_FEES: PlanFee[] = [
  { slug: "bridal-tulip", plan: "Aプラン", initial: 105000, monthly: 7550, perOmiai: 8800, perKosai: 20300, success: 180000 },
  { slug: "bridal-tulip", plan: "Bプラン", initial: 105000, monthly: 12950, perOmiai: 6100, perKosai: 0, success: 180000 },
  { slug: "bridal-tulip", plan: "42歳以上プラン", initial: 150800, monthly: 11250, perOmiai: 8800, perKosai: 10100, success: 180000 },
  { slug: "musbell", plan: "カジュアルコース", initial: 181500, monthly: 16500, perOmiai: 11000, perKosai: null, success: 330000 },
  { slug: "musbell", plan: "レギュラーコース", initial: 363000, monthly: 16500, perOmiai: 0, perKosai: null, success: 330000 },
  { slug: "musbell", plan: "エクセレントコース", initial: 484000, monthly: 17000, perOmiai: 0, perKosai: null, success: 330000 },
  // marriage-pro: 公式「料金・サポート内容」ページ（2026-10-26確認・税込）。initial は入会金＋登録料。
  { slug: "marriage-pro", plan: "男性プラン", initial: 110000, monthly: 13000, perOmiai: 0, perKosai: null, success: 220000 },
  { slug: "marriage-pro", plan: "女性プラン", initial: 100000, monthly: 12000, perOmiai: 0, perKosai: null, success: 220000 },
  { slug: "marriage-pro", plan: "U-28プラン", initial: 80000, monthly: 11000, perOmiai: 0, perKosai: null, success: 180000 },
  { slug: "marriage-pro", plan: "地方プラン", initial: 95000, monthly: 9000, perOmiai: 0, perKosai: null, success: 220000 },
  // ringbell: 公式「料金プラン」ページ（2026-10-26確認・税込）。お見合い料なし（公式FAQ）。
  { slug: "ringbell", plan: "ベーシック", initial: 55000, monthly: 17600, perOmiai: 0, perKosai: null, success: 109800 },
  { slug: "ringbell", plan: "ハイブリッド", initial: 88000, monthly: 17600, perOmiai: 0, perKosai: null, success: 220000 },
  { slug: "ringbell", plan: "コミットメント", initial: 242000, monthly: 17600, perOmiai: 0, perKosai: null, success: 220000 },
];

export function planFee(slug: string, plan: string): PlanFee {
  const p = PLAN_FEES.find((x) => x.slug === slug && x.plan === plan);
  if (!p) throw new Error(`PLAN_FEES に ${slug} / ${plan} がありません`);
  return p;
}

/** 当サイトの試算の前提（1年で成婚・お見合い月1件＝年12件・交際成立1件） */
export const PLAN_SCENARIO = { months: 12, omiai: 12, kosai: 1 };

/** 初期費用＋月会費×月数＋お見合い料×件数＋交際成立時の費用×件数（＋成婚料） */
export function planTotal(p: PlanFee, opts: { months?: number; omiai?: number; kosai?: number; seikon?: boolean } = {}) {
  const { months = PLAN_SCENARIO.months, omiai = PLAN_SCENARIO.omiai, kosai = PLAN_SCENARIO.kosai, seikon = true } = opts;
  return p.initial + p.monthly * months + p.perOmiai * omiai + (p.perKosai ?? 0) * kosai + (seikon ? p.success : 0);
}

/** 123456 → "123,456円" */
export function yen(n: number) {
  return `${n.toLocaleString("ja-JP")}円`;
}

/** 1年総額を出せる社だけで並べたときの安い順の順位。 */
export function totalRank(slug: string) {
  const rows = FEES.map((f) => ({ slug: f.slug, total: oneYearTotal(f.slug) }))
    .filter((r): r is { slug: string; total: number } => r.total !== null)
    .sort((a, b) => a.total - b.total);
  const i = rows.findIndex((r) => r.slug === slug);
  return i < 0 ? null : { rank: i + 1, total: rows.length, value: rows[i].total, rows };
}
