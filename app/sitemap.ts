import type { MetadataRoute } from "next";
import { DB_PREFS, loadAgencyDb, indexableAgencies } from "@/lib/agencies";
import AGENCY_IBJ_20261117 from "@/data/lastmod-agency-2026-11-17.json";

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
UPDATED["/review/code-for-marriage"] = "2026-10-28";
// 2026-10-22: マーズカフェ（2団体加盟オプション＋2,200円・休会費を公式で確認、エキテン口コミ13件の集計）
UPDATED["/review/mars-cafe"] = "2026-10-28";
// 2026-10-22: セブン（媒体別の口コミ傾向・悪い口コミの分類を追加）
UPDATED["/review/seven"] = "2026-10-22";
// 2026-10-23: ムスベル・ツヴァイ・オーネット・nikoブライダルの料金を公式で再確認（3社は料金改定後の値に更新）。関連する比較・知識ページも更新
UPDATED["/review/musbell"] = "2026-10-23";
UPDATED["/review/zwei"] = "2026-10-23";
UPDATED["/review/onet"] = "2026-10-28";
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
// 2026-11-11 12:00成長: フィオーレ（オリコン利用者の声18件の集計・割引3種・会員数の内訳・年代別成婚率）、ヒーローマリッジ（プラン別内容・解約条件・支援人数を公式で更新）、
// チューリップ（入会金の内訳・返金対象外の費用）、エクセレンス青山（11月のキャンペーン）、ベルロード（FAQ3問）、ウェルスマ（IBJ口コミ件数）
for (const r of ["/review/fiore", "/review/hero-marriage", "/review/bridal-tulip", "/review/excellence-aoyama", "/review/bellroad", "/review/wellsma"]) UPDATED[r] = "2026-11-11";
// 2026-11-14 前倒し再対策（施主判断）: セブン（運営会社・サロン所在地とアクセス・無料説明会・2名担当体制の訂正・成婚実績・口コミ方針・LINE特典を公式で確認して追記）
UPDATED["/review/seven"] = "2026-11-14";
// 2026-11-14 12:00成長: マーズカフェ（入会金改定88,000円・IBJ口コミ44件の集計・口コミの要点・2026年10月の成婚退会者数）と、料金・成婚率を参照するページ
for (const r of ["/review/mars-cafe", "/compare", "/compare/cheap", "/concierge", "/knowledge/cost", "/knowledge/seikon-ritsu", "/knowledge"]) UPDATED[r] = "2026-11-14";
// 2026-11-15 12:00成長: 変更済みなのに lastmod が古かった受け皿を実際の修正日に（smartread 11/3・サンマリエ 10/31・エン婚活 11/14〈マーズカフェへのリンク〉・naco-do/compare/online 11/15 朝の公式再照合）
UPDATED["/review/smartread"] = "2026-11-03";
UPDATED["/review/sunmarie"] = "2026-10-31";
UPDATED["/review/en-konkatsu"] = "2026-11-14";
for (const r of ["/review/naco-do", "/compare/online"]) UPDATED[r] = "2026-11-15";
// 2026-11-15 12:00成長(2): changes.jsonl に記録した修正日より lastmod が古かったページ（トップ・FAQ・連盟・4社レビュー・相談所ページ13件）
UPDATED[""] = "2026-11-01";
UPDATED["/knowledge/renmei"] = "2026-10-28";
UPDATED["/review/marriage-pro"] = "2026-10-31";
UPDATED["/review/ringbell"] = "2026-10-31";
UPDATED["/faq"] = "2026-11-01";
UPDATED["/review/musbell"] = "2026-10-31";
// 2026-11-15: 競合参考ページ拡張（kwexp）で knowledge に5本追加
for (const r of ["/knowledge/tekireiki", "/knowledge/50s", "/knowledge/senior", "/knowledge/saikon", "/knowledge/shibetsu-saikon", "/knowledge"]) UPDATED[r] = "2026-11-15";
// 2026-11-16: ウェルスマの会員数をページ間で統一（公式トップ IBJ 111,572名・2026年10月末時点、data/wellsma.ts から参照）、kaiyaku のエン婚活行を公式で再確認
for (const r of ["/review/wellsma", "/knowledge/renmei", "/compare/online", "/review/bellroad", "/review/excellence-aoyama", "/knowledge/kaiyaku"]) UPDATED[r] = "2026-11-16";
// 2026-11-16(2): ウェルスマの料金変更（マイペースプラン 初期19,800円・月9,800円・成婚料109,800円、公式 plan-2 で確認）を data/fees.ts・PLAN_FEES と各ページに反映。/mens/ の IBJ 会員数を IBJ 公式の111,572名（2026年10月末時点）に更新
for (const r of ["/compare", "/compare/cheap", "/mens", "/knowledge/cost", "", "/review/pitto", "/review/ringbell", "/review/smartread", "/review/musbell"]) UPDATED[r] = "2026-11-16";
// 2026-11-16(3): 競合参考ページ拡張（kwexp）で knowledge に3本追加
for (const r of ["/knowledge/single-father", "/knowledge/deaiba", "/knowledge/hyogo-deai", "/knowledge", "/knowledge/saikon", "/knowledge/shibetsu-saikon"]) UPDATED[r] = "2026-11-16";
// 2026-11-17: エン婚活エージェントの比較表の料金（旧値 登録料10,780円・月会費14,300円 → 公式 33,000円・16,500円、data/fees.ts 参照に変更）、
// IBJ会員数（110,420名・2026年7月時点 → IBJ公式 111,572名・2026年10月末時点、data/ibj.ts 参照に変更）
for (const r of ["/review/wellsma", "/review/pitto", "/review/mars-cafe", "/knowledge/renmei", "/compare/ibj-vs-musbell"]) UPDATED[r] = "2026-11-17";
// 2026-11-17: 競合参考ページ拡張（kwexp）で knowledge に5本追加
for (const r of ["/knowledge/single-mother", "/knowledge/jieikan", "/knowledge/mie", "/knowledge/ishikawa", "/knowledge/akita", "/knowledge"]) UPDATED[r] = "2026-11-17";
// 2026-11-18: kaiyaku のスマリッジ行・休会FAQを公式利用規約（2026年10月13日改定版）で再照合し確認日を更新（内容は一致）
UPDATED["/knowledge/kaiyaku"] = "2026-11-18";
// 2026-11-18: 競合参考ページ拡張（kwexp）で knowledge に5本追加
for (const r of ["/knowledge/okinawa", "/knowledge/oita", "/knowledge/okayama", "/knowledge/nagano", "/knowledge/niigata", "/knowledge"]) UPDATED[r] = "2026-11-18";
// 2026-11-19: 競合参考ページ拡張（kwexp）で knowledge に5本追加
for (const r of ["/knowledge/kagoshima", "/knowledge/fukuchiyama", "/knowledge/takamatsu", "/knowledge/nagasaki", "/knowledge/saga", "/knowledge"]) UPDATED[r] = "2026-11-19";
// 2026-11-20: 競合参考ページ拡張（kwexp）で knowledge に5本追加
for (const r of ["/knowledge/kumamoto", "/knowledge/gifu", "/knowledge/yamanashi", "/knowledge/obihiro", "/knowledge/matsumoto", "/knowledge"]) UPDATED[r] = "2026-11-20";
// 2026-11-19: kaiyaku の10月確認3社（マリッジプロ・リングベル・流山）と7〜8月確認4社（フォリ・ヒーロー・ベルロード・Code For Marriage）を公式で再照合。フォリのレビューはクーリングオフの起算を公式表記に修正
for (const r of ["/knowledge/kaiyaku", "/review/folli-partner"]) UPDATED[r] = "2026-11-19";
// 2026-11-20: マリッジプロの乗換えプラン2種・パパママキッズ婚活を公式 price で確認し PLAN_FEES に追加。renmei の月会費レンジ（0円〜）に対象条件を明記
UPDATED["/knowledge/renmei"] = "2026-11-20";
// 2026-11-21: スマリッジ（停止中・施主判断待ち）・マーズカフェ・ウェルスマを除く21社の料金を公式料金ページで照合（全社一致・金額変更なし）。各レビューの料金確認日と
// FEE_CHECKED 由来の確認日（/compare/cheap/・2社比較）を 2026-11-21 に更新。/compare/ はフォリパートナーの初期費用の表記を公式の項目名に修正
for (const r of ["/review/naco-do", "/review/seven", "/review/bridal-tulip", "/review/excellence-aoyama", "/review/bellroad", "/review/nagareyama-otakanomori", "/review/code-for-marriage", "/review/pitto", "/review/niko-bridal", "/review/en-konkatsu", "/review/hero-marriage", "/review/musbell", "/review/zwei", "/review/onet", "/review/sunmarie", "/review/folli-partner", "/review/ibj-members", "/review/partner-agent", "/review/fiore", "/review/marriage-pro", "/review/ringbell", "/compare", "/compare/cheap", "/compare/musbell-vs-ringbell", "/compare/tulip-vs-musbell"]) UPDATED[r] = "2026-11-21";
// 2026-11-21: 競合参考ページ拡張（kwexp）で knowledge に5本追加
for (const r of ["/knowledge/tochigi", "/knowledge/gunma", "/knowledge/miyazaki", "/knowledge/yamagata", "/knowledge/iwaki", "/knowledge"]) UPDATED[r] = "2026-11-21";
// 2026-11-22: 競合参考ページ拡張（kwexp）で knowledge に5本追加
for (const r of ["/knowledge/fukui", "/knowledge/shiga", "/knowledge/tokushima", "/knowledge/toyama", "/knowledge/kochi", "/knowledge"]) UPDATED[r] = "2026-11-22";
// 2026-11-23: 競合参考ページ拡張（kwexp）で knowledge に5本追加
for (const r of ["/knowledge/ueda", "/knowledge/toyooka", "/knowledge/hachinohe", "/knowledge/miai-renai", "/knowledge/asahi", "/knowledge"]) UPDATED[r] = "2026-11-23";
// 2026-11-24: 競合参考ページ拡張（kwexp）で knowledge に5本追加
for (const r of ["/knowledge/miki", "/knowledge/40s", "/knowledge/kakogawa", "/knowledge/takasaki", "/knowledge/tsukuba", "/knowledge"]) UPDATED[r] = "2026-11-24";
// 2026-11-25: 乗り換えガイド新設（結婚相談所見直しの窓口・施主 mi26rock 11/24 依頼）
for (const r of ["/knowledge/norikae", "/knowledge"]) UPDATED[r] = "2026-11-25";
const AGENCY_UPDATED: Record<string, string> = {
  "とら婚-横浜オフィス-オタクに寄り添う結婚相談所-オタク婚活なら-a827": "2026-10-29",
  "仙台結婚相談所マリッジサンライズ-ddff": "2026-10-30",
  "とら婚-福岡オフィス-オタクに寄り添う結婚相談所-オタク婚活なら-fea0": "2026-10-30",
  "マリアージュサロン-ブーゼ-6129": "2026-10-30",
  "結婚相談所ハッピーカムカム銀座サロン-becd": "2026-10-31",
  "結婚相談所IBJメンバーズ-神戸店-f92b": "2026-10-31",
  "エンエール-de0c": "2026-10-31",
  "結婚相談所-結婚物語-大阪ベース-53f3": "2026-10-31",
  "みやぎ結婚支援センター-244a": "2026-10-31",
  "結婚相談所ツヴァイ-姫路店-86a6": "2026-11-03",
  "東大阪の結婚相談所Scena-シーナ-IBJ加盟店-f9bd": "2026-11-03",
  "結婚相談所Enishell-小田原-78c7": "2026-11-03",
  "結婚相談-婚活サポート-結愛花-yumeka-7d88": "2026-11-03"
};
// 2026-11-17: 提携先カード（IBJメンバーズ）の IBJ 会員数を更新した店舗ページ（data/lastmod-agency-2026-11-17.json）
for (const s of AGENCY_IBJ_20261117 as string[]) AGENCY_UPDATED[s] = "2026-11-17";
// 11/20: スマリッジ 11/19 不正アクセス・サービス一時停止の告知を反映
UPDATED["/review/smartread"] = "2026-11-20";
// 2026-11-22: /compare/ FAQ の確認日（旧 10/14 固定）と各レビューの3社比較表の注記を FEE_CHECKED から出す形に変更。
// 3社比較表のうち改定前の値が残っていた他社列（ツヴァイ・ムスベル・パートナーエージェント・サンマリエ・フィオーレ）を data/fees.ts の値に修正。
// FEE_CHECKED.smartread を最後に公式で照合した 11/15 に更新（/compare/cheap/ の確認日表記が変わる）。/compare/online/ のウェルスマ確認日を 11/16 に修正
for (const r of ["/compare", "/compare/cheap", "/compare/online", "/review/naco-do", "/review/en-konkatsu", "/review/smartread", "/review/partner-agent", "/review/fiore", "/review/sunmarie", "/review/ringbell", "/review/marriage-pro"]) UPDATED[r] = "2026-11-22";
// 2026-11-23: naco-do・サンマリエ・セブン・フィオーレ・スマリッジの料金表見出し（ReviewFacts）の確認日を FEE_CHECKED から出す形に変更
// （4社は公式で再照合し一致。スマリッジは公式がメンテナンス表示のため照合できず 11/15 のまま）。スマリッジ FAQ の 10/14 表記を現状に合わせて修正。
// /compare/sunmarie-vs-musbell/ の確認日3か所を FEE_CHECKED 由来にし、サンマリエの成婚率公表の誤記（非公開）を訂正
for (const r of ["/review/naco-do", "/review/sunmarie", "/review/seven", "/review/fiore", "/review/smartread", "/compare/sunmarie-vs-musbell"]) UPDATED[r] = "2026-11-23";
// 2026-11-25: パートナーエージェント・エン婚活エージェントの料金表見出し（ReviewFacts）と本文の料金確認日を FEE_CHECKED から出す形に変更（公式で再照合し一致）
for (const r of ["/review/partner-agent", "/review/en-konkatsu"]) UPDATED[r] = "2026-11-25";
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
  "/knowledge/tekireiki", "/knowledge/50s", "/knowledge/senior", "/knowledge/saikon", "/knowledge/shibetsu-saikon",
  "/knowledge/single-father", "/knowledge/deaiba", "/knowledge/hyogo-deai",
  "/knowledge/single-mother", "/knowledge/jieikan", "/knowledge/mie", "/knowledge/ishikawa", "/knowledge/akita",
  "/knowledge/okinawa", "/knowledge/oita", "/knowledge/okayama", "/knowledge/nagano", "/knowledge/niigata",
  "/knowledge/kagoshima", "/knowledge/fukuchiyama", "/knowledge/takamatsu", "/knowledge/nagasaki", "/knowledge/saga",
  "/knowledge/kumamoto", "/knowledge/gifu", "/knowledge/yamanashi", "/knowledge/obihiro", "/knowledge/matsumoto",
  "/knowledge/tochigi", "/knowledge/gunma", "/knowledge/miyazaki", "/knowledge/yamagata", "/knowledge/iwaki",
  "/knowledge/fukui", "/knowledge/shiga", "/knowledge/tokushima", "/knowledge/toyama", "/knowledge/kochi",
  "/knowledge/ueda", "/knowledge/toyooka", "/knowledge/hachinohe", "/knowledge/miai-renai", "/knowledge/asahi",
  "/knowledge/miki", "/knowledge/40s", "/knowledge/kakogawa", "/knowledge/takasaki", "/knowledge/tsukuba",
  "/knowledge/norikae",
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
    lastModified: AGENCY_UPDATED[s] ?? LASTMOD,
  }));
  return [...routes, ...agencies];
}
