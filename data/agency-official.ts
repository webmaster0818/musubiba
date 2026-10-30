/*
 * /agency/ 店舗ページの「公式情報」欄のデータ（2026-10-30 新設・施主承認「公式情報出してください」）。
 *
 * キーは店舗ページの slug（data-agencies-*.json の slug と同じ）。ここに無い店舗には欄を出さない。
 * 値は各店舗の公式サイトに記載されている内容だけを、表記（税込/税抜・時刻の書き方）を変えずに転記する。
 * 公式サイトで確認できなかった項目は書かない（項目ごと省く。「非公表」とも書かない）。
 * 公式サイト内で記載が食い違う項目も、どちらが正しいか判断できないため書かない。
 * checkedAt は公式サイトで確認した日（"YYYY-MM-DD"）。再確認したらここを更新する。
 */

import { jpDate } from "./fees";

/** 公式サイトの記載と、その記載があるページのURL */
export type Sourced = { value: string; sourceUrl: string };

export type OfficialFeeRow = { label: string; value: string };
export type OfficialPlan = { name: string; rows: OfficialFeeRow[] };

export type AgencyOfficial = {
  checkedAt: string;
  /** 料金表。taxNote は公式の税表記をそのまま書く */
  fees?: { plans: OfficialPlan[]; taxNote: string; sourceUrl: string };
  federation?: Sourced;
  /** label は公式の項目名（「営業時間」「受付時間」など）。省略時は「営業時間」 */
  hours?: Sourced & { label?: string };
  holiday?: Sourced;
  /** 公式サイトでの店舗の案内（業態が名称から読み取りにくい場合のみ） */
  note?: Sourced;
};

export const AGENCY_OFFICIAL: Record<string, AgencyOfficial> = {
  // 仙台市太白区。料金ページのフッターに「TEL：022-797-2877（代表） 10:00〜20:00 定休日:水曜日」
  // 「マリッジサンライズはIBJ正規加盟店の結婚相談所です。」の記載。料金表はHTMLコメントで非表示のコース（20代限定・先着10名）を除く。
  "仙台結婚相談所マリッジサンライズ-ddff": {
    checkedAt: "2026-10-30",
    fees: {
      sourceUrl: "https://marriage-sunrise.com/price",
      taxNote: "すべて税込価格です（公式サイトの表記）。",
      plans: [
        {
          name: "お見合いコース",
          rows: [
            { label: "入会金", value: "33,000円" },
            { label: "登録料", value: "33,000円" },
            { label: "初期指導料", value: "11,000円" },
            { label: "月会費", value: "8,800円" },
            { label: "お見合い料", value: "3,300円（お見合い成立1回につき）" },
            { label: "成婚料", value: "330,000円" },
          ],
        },
        {
          name: "婚活フルサポートコース",
          rows: [
            { label: "入会金", value: "33,000円" },
            { label: "登録料", value: "33,000円" },
            { label: "初期指導料", value: "22,000円" },
            { label: "婚活スタートダッシュサポート費", value: "88,000円" },
            { label: "月会費", value: "14,300円" },
            { label: "お見合い料", value: "0円" },
            { label: "成婚料", value: "220,000円" },
          ],
        },
      ],
    },
    federation: { value: "IBJ（日本結婚相談所連盟）正規加盟店", sourceUrl: "https://marriage-sunrise.com/price" },
    hours: { value: "10:00〜20:00", sourceUrl: "https://marriage-sunrise.com/price" },
    holiday: { value: "水曜日", sourceUrl: "https://marriage-sunrise.com/price" },
  },

  // 料金はとら婚全店共通の料金ページ。女性限定店舗「池袋オフィス」専用プランは福岡では対象外のため除く。
  // 加盟はトップページ「加盟する日本最大級の結婚相談所ネットワーク(IBJ)」。営業日はアクセスページの福岡オフィス欄。
  "とら婚-福岡オフィス-オタクに寄り添う結婚相談所-オタク婚活なら-fea0": {
    checkedAt: "2026-10-30",
    fees: {
      sourceUrl: "https://toracon.jp/plans/",
      taxNote: "価格はすべて税込です（公式サイトの表記）。",
      plans: [
        {
          name: "とら女子プラン（女性限定）",
          rows: [
            { label: "入会初期費用", value: "149,800円（登録料39,800円・活動初期費64,000円・活動サポート費46,000円）" },
            { label: "月会費", value: "15,800円" },
            { label: "お見合い料", value: "無料" },
            { label: "成婚料", value: "220,000円" },
          ],
        },
        {
          name: "ベーシックプラン",
          rows: [
            { label: "入会初期費用", value: "193,800円（登録料39,800円・活動初期費64,000円・活動サポート費90,000円）" },
            { label: "月会費", value: "19,800円" },
            { label: "お見合い料", value: "無料" },
            { label: "成婚料", value: "220,000円" },
          ],
        },
        {
          name: "ベーシック＋プラン",
          rows: [
            { label: "入会初期費用", value: "245,800円（登録料39,800円・活動初期費64,000円・活動サポート費120,000円・特典費22,000円）" },
            { label: "月会費", value: "22,800円" },
            { label: "お見合い料", value: "無料" },
            { label: "成婚料", value: "220,000円" },
          ],
        },
      ],
    },
    federation: { value: "IBJ（日本結婚相談所連盟）加盟", sourceUrl: "https://toracon.jp/" },
    hours: { label: "営業日", value: "全日11:00～19:00（予約制）", sourceUrl: "https://toracon.jp/access/" },
    holiday: { value: "火曜日、水曜日", sourceUrl: "https://toracon.jp/access/" },
  },

  // 料金はコース/ご入会手続きページ。加盟はトップページ「IBJの正規加盟店です」。
  // 営業時間は公式内で 10:00～20:00（ヘッダー・料金ページ）と 10:00～21:00（トップのアクセス欄）が食い違うため掲載しない。
  "マリアージュサロン-ブーゼ-6129": {
    checkedAt: "2026-10-30",
    fees: {
      sourceUrl: "https://www.mariage-buze.com/admission",
      taxNote: "料金はすべて税込価格です（公式サイトの表記）。",
      plans: [
        {
          name: "20歳代応援コース／シングルマザー応援コース",
          rows: [
            { label: "入会金", value: "33,000円" },
            { label: "登録料", value: "33,000円" },
            { label: "月会費", value: "13,200円" },
            { label: "お見合い費", value: "無料" },
            { label: "成婚料", value: "275,000円" },
          ],
        },
        {
          name: "ゴールドコース",
          rows: [
            { label: "入会金", value: "55,000円" },
            { label: "登録料", value: "55,000円" },
            { label: "月会費", value: "16,500円" },
            { label: "お見合い費", value: "無料" },
            { label: "成婚料", value: "275,000円" },
          ],
        },
        {
          name: "New プラチナコース",
          rows: [
            { label: "入会金", value: "77,000円" },
            { label: "登録料", value: "55,000円" },
            { label: "月会費", value: "19,800円" },
            { label: "お見合い費", value: "無料" },
            { label: "成婚料", value: "275,000円" },
          ],
        },
      ],
    },
    federation: { value: "IBJ（日本結婚相談所連盟）正規加盟店", sourceUrl: "https://www.mariage-buze.com/" },
    holiday: { value: "不定休", sourceUrl: "https://www.mariage-buze.com/" },
  },

  // 公式の店舗案内ページの広島パルコ店欄。公式サイトは結婚式場探し・ドレスの相談窓口として案内しており、
  // 結婚相談所としての料金・加盟連盟の記載はない（page-sitemap.xml 全24ページを確認）ため料金・加盟は書かない。
  "広島ブライダル館-相談カウンター-広島パルコ店-e002": {
    checkedAt: "2026-10-30",
    note: {
      value: "公式サイトでは「広島の結婚式やウェディングドレスの相談・確認」の窓口として案内されています。",
      sourceUrl: "https://hiroshima-bridalbox.jp/stores/",
    },
    hours: { label: "受付時間", value: "平日 11:00～19:00／土日祝 10:00～19:00", sourceUrl: "https://hiroshima-bridalbox.jp/stores/" },
    holiday: { value: "毎週火・水曜日", sourceUrl: "https://hiroshima-bridalbox.jp/stores/" },
  },
};

export function agencyOfficial(slug: string): AgencyOfficial | null {
  return AGENCY_OFFICIAL[slug] ?? null;
}

export function officialCheckedLabel(o: AgencyOfficial) {
  return `${jpDate(o.checkedAt)}に公式サイトで確認`;
}
