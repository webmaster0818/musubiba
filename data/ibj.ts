/*
 * IBJ（日本結婚相談所連盟）の会員数を1か所で持つ（2026-11-17 新設）。
 *
 * 出典: IBJ公式トップ https://www.ibjapan.com/ の「会員数 〇〇名（先月末時点）」
 *   （ページ内の数値は https://www.ibjapan.com/assign_ibjs_api/ から読み込まれ、
 *    2026-11-17 時点で member: "111,572"・update_year: "2026"・update_month: "10" ＝2026年10月末時点）
 * 確認日: 2026-11-17
 *
 * 以前は renmei・ibj-vs-musbell・data/partners.ts（店舗ページ約240本の提携先カード）に
 * 110,420名（2026年7月時点）が直書きで残っていたため、IBJ全体の会員数はここから参照する。
 * ウェルスマ公式が掲載している IBJ 会員数は data/wellsma.ts（ウェルスマ公式トップが出典）で別に持つ。
 */

export const IBJ_MEMBERS = {
  sourceUrl: "https://www.ibjapan.com/",
  checkedOn: "2026年11月17日",
  count: "111,572名",
  asOf: "2026年10月末時点",
} as const;

/** 例: 111,572名（2026年10月末時点） */
export const IBJ_MEMBERS_LABEL = `${IBJ_MEMBERS.count}（${IBJ_MEMBERS.asOf}）`;
