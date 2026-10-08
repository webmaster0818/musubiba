/*
 * 結婚相談所24社の料金（2026-10-08 新設）。
 *
 * 値は /compare/ に掲載済みの「各社公式サイトの実査値」をそのまま数値化したもので、
 * 新しい金額は一切作っていない。下限がレンジで示されているものは下限を取り、
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
  { slug: "naco-do", name: "naco-do（ナコード）", monthly: 6980, initial: null, success: 0, monthlyText: "月額6,980円〜", initialText: "比較的安価", type: "オンライン型・低価格" },
  { slug: "seven", name: "結婚相談所セブン", monthly: 7700, initial: 30000, success: null, monthlyText: "月会費7,700円〜", initialText: "初期費用30,000円", type: "成果重視・リーズナブル" },
  { slug: "bridal-tulip", name: "Bridalチューリップ", monthly: 7550, initial: 105000, success: 180000, monthlyText: "月会費7,550円〜12,950円", initialText: "入会金105,000円（42歳以上プランは150,800円）／成婚料180,000円", type: "仲人型・3連盟加盟" },
  { slug: "excellence-aoyama", name: "エクセレンス青山", monthly: 7700, initial: 55000, success: 220000, monthlyText: "月会費7,700円〜", initialText: "入会金55,000円〜220,000円（コース別）／成婚料220,000円", type: "ハイスペック特化" },
  { slug: "smartread", name: "スマリッジ", monthly: 9900, initial: 6600, success: null, monthlyText: "月会費9,900円", initialText: "初期費用6,600円", type: "低初期費用・オンライン" },
  { slug: "bellroad", name: "ベルロード縁結びサポート", monthly: 9800, initial: 30000, success: 80000, monthlyText: "月会費9,800円（1ヶ月プラン）", initialText: "入会金30,000円／成婚料80,000円", type: "サブスク型・IBJ加盟" },
  { slug: "nagareyama-otakanomori", name: "流山おおたかの森の相談所", monthly: 9900, initial: 165000, success: 220000, monthlyText: "月会費9,900円", initialText: "初期費用165,000円／成婚料220,000円", type: "地域密着・IBJ加盟" },
  { slug: "mars-cafe", name: "マーズカフェ", monthly: 11000, initial: 33000, success: null, monthlyText: "月会費11,000円", initialText: "初期費用33,000円", type: "アットホーム型" },
  { slug: "code-for-marriage", name: "Code For Marriage", monthly: 11000, initial: 77000, success: 220000, monthlyText: "月会費11,000円（スタンダード）", initialText: "入会費77,000円／成婚料220,000円", type: "年代別プランあり" },
  { slug: "pitto", name: "P!っと縁結び", monthly: 11000, initial: 88000, success: 220000, monthlyText: "月会費11,000円〜16,500円", initialText: "初期費用88,000円〜110,000円／成婚料220,000円", type: "ピップ運営・全国対応" },
  { slug: "wellsma", name: "ウェルスマ", monthly: 11800, initial: 49800, success: 149800, monthlyText: "月会費11,800円〜19,800円", initialText: "入会金49,800円／成婚料149,800円", type: "オンライン仲人型" },
  { slug: "niko-bridal", name: "nikoブライダル", monthly: 13200, initial: 110000, success: 220000, monthlyText: "月会費13,200円（男性婚活プラン16,500円）", initialText: "初期費用110,000円／成婚料220,000円", type: "大阪・仲人型" },
  { slug: "en-konkatsu", name: "エン婚活エージェント", monthly: 14300, initial: null, success: null, monthlyText: "月額14,300円", initialText: "比較的安価", type: "オンライン型" },
  { slug: "hero-marriage", name: "ヒーローマリッジ", monthly: 14300, initial: 165000, success: 220000, monthlyText: "月会費14,300円〜27,500円", initialText: "初期費用165,000円／成婚料220,000円", type: "男性専門" },
  { slug: "musbell", name: "ムスベル", monthly: 15400, initial: null, success: null, monthlyText: "月会費15,400円", initialText: "—", type: "仲人・データ併用型" },
  { slug: "zwei", name: "ツヴァイ", monthly: 15400, initial: null, success: null, monthlyText: "月会費15,400円", initialText: "—", type: "大手・データマッチング" },
  { slug: "onet", name: "オーネット", monthly: 16500, initial: null, success: null, monthlyText: "月会費16,500円", initialText: "—", type: "大手・会員数多" },
  { slug: "sunmarie", name: "サンマリエ", monthly: 16500, initial: null, success: 220000, monthlyText: "月会費16,500円", initialText: "—", type: "大手・手厚いサポート" },
  { slug: "folli-partner", name: "東京フォリパートナー", monthly: 16500, initial: 110000, success: 250000, monthlyText: "月会費16,500円〜22,000円", initialText: "入会金110,000円〜250,000円／成婚料250,000円〜300,000円", type: "少人数担当・成婚重視" },
  { slug: "ibj-members", name: "IBJメンバーズ", monthly: 17050, initial: 252450, success: 220000, monthlyText: "月会費17,050円", initialText: "初期費用252,450円／成婚料220,000円", type: "IBJ直営・大手" },
  { slug: "partner-agent", name: "パートナーエージェント", monthly: 18700, initial: 137500, success: 55000, monthlyText: "月会費18,700円", initialText: "初期費用137,500円〜／成婚料55,000円", type: "成婚重視・コンシェルジュ" },
  { slug: "fiore", name: "FIORE（フィオーレ）", monthly: null, initial: null, success: null, monthlyText: "—", initialText: "—", type: "ハイブリッド型" },
  { slug: "marriage-pro", name: "マリッジプロ", monthly: null, initial: null, success: 220000, monthlyText: "—", initialText: "成婚料22万円", type: "プロカウンセラー専任" },
  { slug: "ringbell", name: "リングベル", monthly: null, initial: null, success: null, monthlyText: "—", initialText: "—", type: "仲人型・地域密着" },
];

export const FEE_SURVEY_NOTE =
  "金額はいずれも各社公式サイトの掲載値（税込）を当サイトが実査したものです。レンジで示されている項目は下限を採用しています。";

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
