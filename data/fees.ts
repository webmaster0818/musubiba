/*
 * 結婚相談所24社の料金（2026-10-08 新設）。
 *
 * 値は /compare/ に掲載済みの「各社公式サイトの実査値」をそのまま数値化したもので、
 * 新しい金額は一切作っていない。
 * 2026-10-14: 提携先のうち naco-do・セブン・スマリッジ・マーズカフェ・エン婚活・サンマリエ・
 * パートナーエージェント・フィオーレを公式サイトで再確認し、食い違っていた値を修正。下限がレンジで示されているものは下限を取り、
 * 公表が確認できなかった項目は null にして「非公表」と表示する。
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
  { slug: "musbell", name: "ムスベル", monthly: 15400, initial: null, success: null, monthlyText: "月会費15,400円", initialText: "—", type: "仲人・データ併用型" },
  { slug: "zwei", name: "ツヴァイ", monthly: 15400, initial: null, success: null, monthlyText: "月会費15,400円", initialText: "—", type: "大手・データマッチング" },
  { slug: "onet", name: "オーネット", monthly: 16500, initial: null, success: null, monthlyText: "月会費16,500円", initialText: "—", type: "大手・会員数多数" },
  { slug: "sunmarie", name: "サンマリエ", monthly: 18700, initial: 165000, success: 220000, monthlyText: "月会費18,700円", initialText: "入会金33,000円＋初期活動費132,000円／成婚料220,000円", type: "仲人型・1981年創業" },
  { slug: "folli-partner", name: "東京フォリパートナー", monthly: 16500, initial: 110000, success: 250000, monthlyText: "月会費16,500円〜22,000円", initialText: "入会金110,000円〜250,000円／成婚料250,000円〜300,000円", type: "少人数担当・成婚重視" },
  { slug: "ibj-members", name: "IBJメンバーズ", monthly: 17050, initial: 252450, success: 220000, monthlyText: "月会費17,050円", initialText: "初期費用252,450円／成婚料220,000円", type: "IBJ直営・大手" },
  { slug: "partner-agent", name: "パートナーエージェント", monthly: 14300, initial: 99000, success: 220000, monthlyText: "月会費14,300円〜26,400円", initialText: "登録料33,000円＋初期費用66,000円〜／成婚料220,000円", type: "成婚重視・コンシェルジュ" },
  { slug: "fiore", name: "FIORE（フィオーレ）", monthly: 5830, initial: 33000, success: null, monthlyText: "月会費5,830円〜17,600円", initialText: "入会登録費33,000円／成婚料0円〜220,000円（コース別）", type: "仲人型＋AI・会員検索" },
  { slug: "marriage-pro", name: "マリッジプロ", monthly: null, initial: null, success: 220000, monthlyText: "—", initialText: "成婚料22万円", type: "プロカウンセラー専任" },
  { slug: "ringbell", name: "リングベル", monthly: null, initial: null, success: null, monthlyText: "—", initialText: "—", type: "仲人型・地域密着" },
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
  seven: { date: "2026-10-14" },
  "bridal-tulip": { date: "2026-10-21" },
  "excellence-aoyama": { date: "2026-10-14" },
  smartread: { date: "2026-10-14" },
  bellroad: { date: "2026-10-14" },
  "nagareyama-otakanomori": { date: "2026-10-17" },
  "mars-cafe": { date: "2026-10-14" },
  "code-for-marriage": { date: "2026-08-17" },
  pitto: { date: "2026-10-14" },
  wellsma: { date: "2026-10-14" },
  "niko-bridal": { date: "2026-07-07" },
  "en-konkatsu": { date: "2026-10-14" },
  "hero-marriage": { date: "2026-10-14" },
  musbell: { date: "2026-06", approx: true },
  zwei: { date: "2026-05", approx: true },
  onet: { date: "2026-05", approx: true },
  sunmarie: { date: "2026-10-14" },
  "folli-partner": { date: "2026-10-14" },
  "ibj-members": { date: "2026-10-14" },
  "partner-agent": { date: "2026-10-14" },
  fiore: { date: "2026-10-21" },
  "marriage-pro": { date: "2026-08-17" },
  ringbell: { date: "2026-06", approx: true },
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

/** 1年総額を出せる社だけで並べたときの安い順の順位。 */
export function totalRank(slug: string) {
  const rows = FEES.map((f) => ({ slug: f.slug, total: oneYearTotal(f.slug) }))
    .filter((r): r is { slug: string; total: number } => r.total !== null)
    .sort((a, b) => a.total - b.total);
  const i = rows.findIndex((r) => r.slug === slug);
  return i < 0 ? null : { rank: i + 1, total: rows.length, value: rows[i].total, rows };
}
