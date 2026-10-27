import type { MetadataRoute } from "next";
import { DB_PREFS, loadAgencyDb, indexableAgencies } from "@/lib/agencies";

export const dynamic = "force-static";

const BASE = "https://mu-su-bi-ba.com";
const LASTMOD = "2026-08-23";
// 個別に更新したページの lastmod（2026-10-14: 提携16社のレビューを公式再確認・口コミの出典追記）
const UPDATED: Record<string, string> = Object.fromEntries(
  [
    "/review/fiore", "/review/smartread", "/review/seven", "/review/mars-cafe", "/review/naco-do",
    "/review/en-konkatsu", "/review/sunmarie", "/review/partner-agent", "/review/ibj-members",
    "/review/bridal-tulip", "/review/hero-marriage", "/review/wellsma", "/review/excellence-aoyama",
    "/review/folli-partner", "/review/pitto", "/review/bellroad",
    "", "/compare", "/compare/cheap", "/compare/30s", "/compare/sunmarie-vs-musbell", "/review/ringbell", "/review/musbell", "/knowledge/renmei", "/knowledge/seikon-ritsu",
  ].map((r) => [r, "2026-10-14"]),
);
// 2026-10-17: セブン（公式で確認できない記載のFAQ追加）・流山おおたかの森（title/冒頭の改善）
for (const r of ["/review/seven", "/review/nagareyama-otakanomori"]) UPDATED[r] = "2026-10-17";
// 2026-10-18: 解約・返金のルール（流山おおたかの森の解約・休会条件を公式で確認し更新）
UPDATED["/knowledge/kaiyaku"] = "2026-10-18";
// 2026-10-19: フィオーレ（料金ページを公式で再確認・確認日を更新）
UPDATED["/review/fiore"] = "2026-10-19";
// 2026-10-19: 費用ガイド（「月会費が一番安い」FAQを24社の料金データと一致させた）
UPDATED["/knowledge/cost"] = "2026-10-19";
// 2026-10-19: オンライン比較（/compare/cheap/ へのリンク文言の掲載社数を24社に修正）
UPDATED["/compare/online"] = "2026-10-19";
// 2026-10-21: 安い相談所の比較（確認日の表記を社ごとの実データに統一）・解約・返金のルール（未確認12社を公式で再確認）
UPDATED["/compare/cheap"] = "2026-10-21";
UPDATED["/knowledge/kaiyaku"] = "2026-10-21";
// 2026-10-21: フィオーレ（公式料金表の改定＝スマートコース・お見合い回数保証・活動制限1,100円を反映、解約・返金条件を追記）・料金比較一覧
for (const r of ["/review/fiore", "/compare", ""]) UPDATED[r] = "2026-10-21";
// 2026-10-21: 4社の公式再確認（チューリップ交際成立時の手数料・エクセレンス青山の男女別料金・ウェルスマIBJ会員数・フォリ成婚率期間/受賞）
for (const r of ["/review/bridal-tulip", "/review/excellence-aoyama", "/review/wellsma", "/review/folli-partner", "/mens", "/compare/online", "/knowledge/renmei", "/knowledge/seikon-ritsu", "/compare/folli-vs-musbell"]) UPDATED[r] = "2026-10-21";
// 2026-10-22: レビューの確認日表記を最終更新・公式で確認した日にそろえた（Code For Marriageは公式で再確認）
UPDATED["/review/code-for-marriage"] = "2026-10-22";
// 2026-10-22: マーズカフェ（2団体加盟オプション＋2,200円・休会費を公式で確認、エキテン口コミ13件の集計）
UPDATED["/review/mars-cafe"] = "2026-10-22";
// 2026-10-22: セブン（媒体別の口コミ傾向・悪い口コミの分類を追加）
UPDATED["/review/seven"] = "2026-10-22";
// 2026-10-23: ムスベル・ツヴァイ・オーネット・nikoブライダルの料金を公式で再確認（3社は料金改定後の値に更新）。関連する比較・知識ページも更新
UPDATED["/review/musbell"] = "2026-10-23";
UPDATED["/review/zwei"] = "2026-10-23";
UPDATED["/review/onet"] = "2026-10-23";
UPDATED["/review/niko-bridal"] = "2026-10-23";
UPDATED["/compare"] = "2026-10-23";
UPDATED["/compare/cheap"] = "2026-10-23";
UPDATED["/knowledge/cost"] = "2026-10-23";
UPDATED["/knowledge/renmei"] = "2026-10-23";
UPDATED["/knowledge/seikon-ritsu"] = "2026-10-23";
UPDATED["/compare/folli-vs-musbell"] = "2026-10-23";
UPDATED["/compare/musbell-vs-ringbell"] = "2026-10-23";
UPDATED["/compare/tulip-vs-musbell"] = "2026-10-23";
UPDATED["/compare/sunmarie-vs-musbell"] = "2026-10-23";
UPDATED["/compare/ibj-vs-musbell"] = "2026-10-23";
UPDATED["/concierge"] = "2026-10-23";
UPDATED[""] = "2026-10-23";
// 2026-10-23 12:00成長: スマリッジ・ヒーローマリッジ・P!っと縁結び（競合比較で不足していた口コミのテーマ別集計・悪い口コミFAQ等を追加）・成婚率（スマリッジ69%）
for (const r of ["/review/smartread", "/review/hero-marriage", "/review/pitto", "/knowledge/seikon-ritsu"]) UPDATED[r] = "2026-10-23";
// 2026-10-24 12:00成長: IBJメンバーズ・パートナーエージェント（オリコン利用者コメントのテーマ別集計・とは要約・公式再確認）・ベルロード（口コミの掲載状況と公式掲載の成婚者の声6件の集計）
for (const r of ["/review/ibj-members", "/review/partner-agent", "/review/bellroad"]) UPDATED[r] = "2026-10-24";
// 2026-10-25 12:00成長: ウェルスマ・エクセレンス青山・ブライダルチューリップ・フォリパートナー（IBJ口コミ全件のテーマ別集計・低評価の内容・媒体別件数・公式再確認）
for (const r of ["/review/wellsma", "/review/excellence-aoyama", "/review/bridal-tulip", "/review/folli-partner"]) UPDATED[r] = "2026-10-25";
// 2026-10-27 12:00成長: エン婚活エージェント（全額返金保証規約〈2026/7/1改定〉の適用条件・対象外7条件、口コミの論点と公式の定めの照合、とは要約、FAQ2問、公式再確認）
UPDATED["/review/en-konkatsu"] = "2026-10-27";
// 2026-10-27 16:00挽回: 流山おおたかの森（成婚率68.4%公表を反映・成婚者の声37件の集計・解約規定）、nikoブライダル（成婚実績40件の集計・AWARD 6年連続・会員数更新）、
// マリッジプロ（正式名称・根拠のない口コミ傾向を公式の声4件に置換・強みを公式記載に）、セブン（料金再確認・入会資格FAQ）、成婚率・連盟ページの該当社
for (const r of ["/review/nagareyama-otakanomori", "/review/niko-bridal", "/review/marriage-pro", "/review/seven", "/knowledge/seikon-ritsu", "/knowledge/renmei"]) UPDATED[r] = "2026-10-27";
// 2026-10-21: 打ち手3（10/21再計測で動かず）＝TOP・/compare/・/compare/cheap/ から各レビューへのアンカーを「社名＋口コミ・評判」に

const STATIC_ROUTES = [
  "", "/faq", "/compare",
  "/compare/musbell-vs-ringbell", "/compare/tulip-vs-musbell", "/compare/folli-vs-musbell",
  "/compare/ibj-vs-musbell", "/compare/sunmarie-vs-musbell",
  "/review/en-konkatsu", "/review/fiore", "/review/marriage-pro", "/review/mars-cafe",
  "/review/musbell", "/review/naco-do", "/review/onet", "/review/partner-agent",
  "/review/ringbell", "/review/seven", "/review/smartread", "/review/sunmarie",
  "/review/zwei", "/review/wellsma", "/review/hero-marriage", "/review/bridal-tulip",
  "/review/folli-partner", "/review/excellence-aoyama", "/review/ibj-members",
  "/review/pitto", "/review/bellroad", "/compare/online", "/compare/30s",
  "/about", "/editorial-policy", "/knowledge", "/knowledge/cost",
  "/knowledge/how-to-choose", "/knowledge/flow", "/knowledge/seikon-ritsu",
  "/knowledge/kaiyaku",
  "/knowledge/renmei",
  "/review/nagareyama-otakanomori", "/review/code-for-marriage", "/compare/cheap",
  "/review/niko-bridal", "/mens",
  "/area/tokyo", "/area/osaka", "/area/yokohama", "/area/nagoya", "/area/fukuoka",
  "/area/sapporo", "/area/sendai", "/area/kyoto", "/area/kobe", "/area/saitama", "/area/chiba",
  "/area/hiroshima", "/area/shizuoka",
];

// 店舗ページと同じ DB_PREFS・同じ条件(口コミ3件以上)で列挙する。
// 以前は都道府県を9つ手書きしていたため、京都・宮城・広島・静岡の店舗ページが漏れていた。
function agencySlugs(): string[] {
  const slugs: string[] = [];
  for (const { pref } of DB_PREFS) {
    const db = loadAgencyDb(pref);
    if (!db) continue;
    for (const a of indexableAgencies(db)) if (a.slug) slugs.push(a.slug);
  }
  return slugs;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = STATIC_ROUTES.map((r) => ({
    url: `${BASE}${r}/`.replace(/\/\/$/, "/"),
    lastModified: UPDATED[r] ?? LASTMOD,
  }));
  const agencies = agencySlugs().map((s) => ({
    url: `${BASE}/agency/${encodeURIComponent(s)}/`,
    lastModified: LASTMOD,
  }));
  return [...routes, ...agencies];
}
