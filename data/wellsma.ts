/*
 * ウェルスマの会員数（IBJ・IBJ online）を1か所で持つ（2026-11-16 新設）。
 *
 * 出典: ウェルスマ公式トップ https://www.wealsma.com/ の会員数の図
 *   「IBJ 111,572名（2026年10月末時点）＋ IBJ online 40,000名（2026年10月時点・有料オプション）
 *    最大約15.2万人規模（各サービスの公表値を基にした単純合計。重複を含む場合があります）」
 * 確認日: 2026-11-16
 *
 * 以前はページごとに 110,885名（10/21確認）・10.8万名（2024年末）・約10.8万人 が混在していたため、
 * 会員数を載せるページはすべてここから参照する。公式の値が変わったらここだけ直す。
 */

export const WELLSMA_MEMBERS = {
  sourceUrl: "https://www.wealsma.com/",
  checkedOn: "2026年11月16日",
  ibj: "111,572名",
  ibjAsOf: "2026年10月末時点",
  ibjOnline: "40,000名",
  ibjOnlineAsOf: "2026年10月時点",
  total: "約15.2万人",
} as const;

const M = WELLSMA_MEMBERS;

/** 例: IBJ会員111,572名（2026年10月末時点・2026年11月16日公式確認） */
export const WELLSMA_IBJ_LABEL = `IBJ会員${M.ibj}（${M.ibjAsOf}・${M.checkedOn}公式確認）`;

/** IBJ online を含めた説明文 */
export const WELLSMA_NETWORK_NOTE = `公式トップでは、IBJ会員${M.ibj}（${M.ibjAsOf}）と、有料オプションのIBJ online会員${M.ibjOnline}（${M.ibjOnlineAsOf}）を合わせて最大${M.total}規模と案内しています（各サービスの公表値の単純合計で、重複を含む場合があります。${M.checkedOn}確認）。`;
