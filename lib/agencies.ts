// エリア別・結婚相談所DB(Google Places API実測)の読み込みとブランド判定の共通ロジック
import fs from "node:fs";
import path from "node:path";

export type Agency = {
  name: string;
  rating?: number;
  count: number;
  address: string;
  mapsUri?: string;
  website?: string;
  areas: string[];
  slug: string;
};

export type AgencyDb = { surveyedAt: string; prefName: string; agencies: Agency[] };

export const AREA_LABELS: Record<string, string> = {
  "tokyo-core": "東京駅・丸の内",
  shinjuku: "新宿",
  ginza: "銀座・有楽町",
  shibuya: "渋谷",
  ikebukuro: "池袋",
  kichijoji: "吉祥寺",
  tachikawa: "立川",
  machida: "町田",
  ueno: "上野・北千住",
  shinagawa: "品川・五反田",
  umeda: "梅田",
  namba: "難波・心斎橋",
  tennoji: "天王寺・阿倍野",
  kyobashi: "京橋",
  "shin-osaka": "新大阪・淀川",
  "sakai-osaka": "堺",
  toyonaka: "豊中",
  suita: "吹田・江坂",
  "takatsuki-osaka": "高槻・茨木",
  higashiosaka: "東大阪・八尾",
  "yokohama-eki": "横浜駅",
  "kannai-mm": "関内・みなとみらい",
  "shin-yokohama": "新横浜",
  "kawasaki-kanagawa": "川崎",
  musashikosugi: "武蔵小杉",
  fujisawa: "藤沢",
  "sagamihara-kanagawa": "相模原",
  yokosuka: "横須賀",
  "atsugi-kanagawa": "厚木・海老名",
  odawara: "小田原",
  "nagoya-eki": "名古屋駅(名駅)",
  sakae: "栄・伏見",
  kanayama: "金山・熱田",
  "chikusa-meito": "千種・名東・昭和",
  "nagoya-other": "名古屋市その他",
  "toyota-aichi": "豊田",
  okazaki: "岡崎・三河",
  "ichinomiya-aichi": "一宮・尾張",
  "aichi-other": "愛知その他",
  tenjin: "天神・大名・薬院",
  hakata: "博多",
  "fukuoka-city-other": "福岡市その他",
  kitakyushu: "北九州・小倉",
  kurume: "久留米",
  "fukuoka-other": "福岡その他",
  "sapporo-chuo": "札幌・大通(中央区)",
  "sapporo-other": "札幌市その他",
  asahikawa: "旭川",
  hakodate: "函館",
  "hokkaido-other": "北海道その他",
};

// 相談所DBを持つ都道府県(横展開時はここに追加)
export const DB_PREFS: { pref: string; prefName: string; areaHref: string }[] = [
  { pref: "tokyo", prefName: "東京", areaHref: "/area/tokyo/" },
  { pref: "osaka", prefName: "大阪", areaHref: "/area/osaka/" },
  { pref: "kanagawa", prefName: "神奈川", areaHref: "/area/yokohama/" },
  { pref: "aichi", prefName: "愛知", areaHref: "/area/nagoya/" },
  { pref: "fukuoka", prefName: "福岡", areaHref: "/area/fukuoka/" },
  { pref: "hokkaido", prefName: "北海道", areaHref: "/area/sapporo/" },
];

// 自社レビューがある大手ブランド(未提携の相談所はGoogleマップへリンクする方針)
export const BRAND_REVIEWS: { match: RegExp; href: string; label: string }[] = [
  { match: /オーネット|O-net|onet/i, href: "/review/onet/", label: "オーネットの詳細レビュー" },
  { match: /ツヴァイ|zwei/i, href: "/review/zwei/", label: "ツヴァイの詳細レビュー" },
  { match: /パートナーエージェント|partner ?agent/i, href: "/review/partner-agent/", label: "パートナーエージェントの詳細レビュー" },
  { match: /サンマリエ|sunmarie/i, href: "/review/sunmarie/", label: "サンマリエの詳細レビュー" },
  { match: /フィオーレ|fiore/i, href: "/review/fiore/", label: "フィオーレの詳細レビュー" },
  { match: /エン婚活|en-?konkatsu/i, href: "/review/en-konkatsu/", label: "エン婚活エージェントの詳細レビュー" },
  { match: /リングベル|ringbell/i, href: "/review/ringbell/", label: "リングベルの詳細レビュー" },
  { match: /ムスベル|musbell/i, href: "/review/musbell/", label: "ムスベルの詳細レビュー" },
  { match: /マーズカフェ|mars ?cafe/i, href: "/review/mars-cafe/", label: "Mars cafeの詳細レビュー" },
  { match: /IBJ ?メンバーズ|IBJ ?members/i, href: "/review/ibj-members/", label: "IBJメンバーズの詳細レビュー" },
  { match: /P!?っと縁結び|ピッと縁結び|ピット縁結び/i, href: "/review/pitto/", label: "P!っと縁結びの詳細レビュー" },
  { match: /ベルロード/i, href: "/review/bellroad/", label: "ベルロード縁結びサポートの詳細レビュー" },
  { match: /マリッジプロ/i, href: "/review/marriage-pro/", label: "マリッジプロの詳細レビュー" },
  { match: /ナコード|naco-?do/i, href: "/review/naco-do/", label: "naco-doの詳細レビュー" },
  { match: /スマリッジ/i, href: "/review/smartread/", label: "スマリッジの詳細レビュー" },
];

export function loadAgencyDb(pref: string): AgencyDb | null {
  const p = path.join(process.cwd(), `data-agencies-${pref}.json`);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf-8"));
}

export function indexableAgencies(db: AgencyDb): Agency[] {
  return db.agencies.filter((a) => (a.count || 0) >= 3);
}

export function findBrand(name: string) {
  return BRAND_REVIEWS.find((b) => b.match.test(name)) || null;
}

// 住所から市区部分をざっくり表示用に抜く(表示のみ・分類には使わない)
export function shortAddress(address: string): string {
  return address.replace(/^日本、?/, "").replace(/^〒\d{3}-\d{4}\s*/, "");
}
