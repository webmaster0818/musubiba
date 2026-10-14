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
