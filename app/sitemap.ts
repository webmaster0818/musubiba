import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

export const dynamic = "force-static";

const BASE = "https://mu-su-bi-ba.com";
const LASTMOD = "2026-08-20";

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
  "/knowledge/how-to-choose", "/knowledge/flow",
  "/review/nagareyama-otakanomori", "/review/code-for-marriage", "/compare/cheap",
  "/review/niko-bridal", "/mens",
  "/area/tokyo", "/area/osaka", "/area/yokohama", "/area/nagoya", "/area/fukuoka",
  "/area/sapporo", "/area/sendai", "/area/kyoto", "/area/kobe",
];

function agencySlugs(): string[] {
  const slugs: string[] = [];
  for (const pref of ["tokyo", "osaka", "kanagawa"]) {
    const p = path.join(process.cwd(), `data-agencies-${pref}.json`);
    if (!fs.existsSync(p)) continue;
    const d = JSON.parse(fs.readFileSync(p, "utf-8"));
    for (const a of d.agencies || []) {
      if ((a.count || 0) >= 3 && a.slug) slugs.push(a.slug);
    }
  }
  return slugs;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = STATIC_ROUTES.map((r) => ({
    url: `${BASE}${r}/`.replace(/\/\/$/, "/"),
    lastModified: LASTMOD,
  }));
  const agencies = agencySlugs().map((s) => ({
    url: `${BASE}/agency/${encodeURIComponent(s)}/`,
    lastModified: LASTMOD,
  }));
  return [...routes, ...agencies];
}
