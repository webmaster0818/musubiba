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
for (const r of ["/review/fiore", "/compare"]) UPDATED[r] = "2026-10-21";

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
