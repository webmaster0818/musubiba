/*
 * 提携している相談所のデータ（2026-10-08 新設）。
 *
 * 目的: 相談所の個別ページ（934件）はGSC上このサイトの流入の76%を占めるのに、
 * 提携導線が1本も無く、来た人がそのまま帰っていた。その受け皿を作る。
 *
 * 方針:
 *  - 掲載する数値は各社レビューページに記載済みの「公式確認値」のみを転記する。
 *    新しい数字は作らない。確認日はレビューページ側に記載があるため、ここでは
 *    「公式サイト掲載の料金」であることを明示するにとどめる。
 *  - prefs は各社が公表している拠点・対応エリアから機械的に決める。
 *    nationwide=true はオンライン完結で全国から利用できると公式に明記があるもの。
 *  - 未提携の相談所の外部リンクを出さない方針は変更しない（従来どおりGoogleマップのみ）。
 */

export type Partner = {
  /** A8Banner / 計測URLのキー */
  ad: string;
  name: string;
  reviewHref: string;
  /** 公式の計測URL（支給コードと同一。文字列を変更しないこと） */
  clickUrl: string;
  /** オンライン完結で全国から利用できると公式に明記があるか */
  nationwide: boolean;
  /** 実拠点のある都道府県（DB_PREFSのpref名と合わせる） */
  prefs: string[];
  /** 対応エリアの公式表記 */
  area: string;
  /** 料金の要点（レビューページに記載済みの公式確認値を転記） */
  fee: string;
  /** 1行の特徴。評価ではなく事実を書く */
  point: string;
  /** 利用条件の注意（あれば必ず出す） */
  caution?: string;
};

export const PARTNERS: Partner[] = [
  {
    ad: "wellsma",
    name: "ウェルスマ",
    reviewHref: "/review/wellsma/",
    clickUrl: "https://px.a8.net/svt/ejp?a8mat=4B8DGP+FYJWDM+5BUE+5Z6WX",
    nationwide: true,
    prefs: [],
    area: "全国（実店舗なし・Zoom/LINEで完結）",
    fee: "入会金49,800円／月会費11,800円〜／成婚料149,800円（税込）",
    point: "来店不要の完全オンラインで、専任カウンセラーが付く仲人型。IBJ正規加盟。",
  },
  {
    ad: "nacodo",
    name: "naco-do（ナコード）",
    reviewHref: "/review/naco-do/",
    clickUrl: "https://px.a8.net/svt/ejp?a8mat=4B8DGP+G994FM+4HHW+63OY9",
    nationwide: true,
    prefs: [],
    area: "全国対応（オンライン）",
    fee: "月額6,980円〜（6ヶ月プラン）／成婚料0円",
    point: "成婚料がかからないオンライン型。総額を抑えたい人向け。",
  },
  {
    ad: "bellroad",
    name: "ベルロード縁結びサポート",
    reviewHref: "/review/bellroad/",
    clickUrl: "https://px.a8.net/svt/ejp?a8mat=4B8DGP+G7GTMA+4MPE+61C2P",
    nationwide: true,
    prefs: ["shiga"],
    area: "全国（オンライン完結。彦根本店・銀座営業所あり）",
    fee: "入会金30,000円／1ヶ月プラン9,800円／成婚料80,000円（税込）",
    point: "お見合い料・更新料が一切かからない定額制。IBJ加盟。",
  },
  {
    ad: "pitto",
    name: "P!っと縁結び",
    reviewHref: "/review/pitto/",
    clickUrl: "https://px.a8.net/svt/ejp?a8mat=4B8DGP+GAFZN6+5UBE+5YZ75",
    nationwide: true,
    prefs: ["tokyo"],
    area: "全国（東京拠点・オンライン面談/お見合い対応）",
    fee: "初期費用88,000〜110,000円／月会費11,000〜16,500円／成婚料220,000円（税込）",
    point: "お見合い料無料のベーシックと、月会費を抑えたエントリーの2プラン制。",
  },
  {
    ad: "hero",
    name: "ヒーローマリッジ",
    reviewHref: "/review/hero-marriage/",
    clickUrl: "https://px.a8.net/svt/ejp?a8mat=4B8DGP+G69YEQ+4HMW+NTZCH",
    nationwide: true,
    prefs: ["tokyo"],
    area: "新宿サロン＋全国オンライン対応",
    fee: "初期費用165,000円／月会費14,300円〜／成婚料220,000円（税込）",
    point: "プロカメラマンの撮影が無料。IBJ加盟。",
    caution: "男性専門の相談所です",
  },
  {
    ad: "sunmarie",
    name: "サンマリエ",
    reviewHref: "/review/sunmarie/",
    clickUrl: "https://t.felmat.net/fmcl?ak=N4707F.1.T84894Q.Z1361712",
    nationwide: false,
    prefs: ["tokyo", "osaka", "kanagawa", "aichi", "fukuoka", "hokkaido", "hyogo", "saitama", "chiba", "kyoto", "miyagi", "hiroshima", "shizuoka"],
    area: "全国対応（約30拠点）",
    fee: "月会費16,500円〜／成婚料220,000円（税込）",
    point: "お見合いのセッティングを代行してくれる仲人型の老舗。",
  },
  {
    ad: "partner-agent",
    name: "パートナーエージェント",
    reviewHref: "/review/partner-agent/",
    clickUrl: "https://t.felmat.net/fmcl?ak=L20406.1.R50563Q.Z1361712",
    nationwide: false,
    prefs: ["tokyo", "osaka", "kanagawa", "aichi", "fukuoka", "hokkaido", "hyogo", "saitama", "chiba", "kyoto", "miyagi", "hiroshima", "shizuoka"],
    area: "全国主要都市（約30店舗）",
    fee: "初期費用137,500円〜／月会費18,700円〜／成婚料55,000円",
    point: "専任コンシェルジュが活動計画を立てて伴走する体制。",
  },
  {
    ad: "ibj-members",
    name: "IBJメンバーズ",
    reviewHref: "/review/ibj-members/",
    clickUrl: "https://t.felmat.net/fmcl?ak=T4375L.1.T84236V.Z1361712",
    nationwide: false,
    prefs: ["tokyo", "kanagawa", "aichi", "osaka", "hyogo", "fukuoka"],
    area: "全国9店舗（東京・銀座・有楽町・新宿西口・横浜・名古屋・大阪・神戸・福岡）",
    fee: "登録料33,000円／月会費17,050円／成婚料220,000円（税込）",
    point: "IBJの直営店。登録会員110,420名（2026年7月時点）から探せる。",
  },
  {
    ad: "folli",
    name: "フォリパートナー",
    reviewHref: "/review/folli-partner/",
    clickUrl: "https://px.a8.net/svt/ejp?a8mat=4B8DGP+GDFQI2+4NUS+5ZMCH",
    nationwide: true,
    prefs: ["tokyo", "kanagawa"],
    area: "東京4店舗＋横浜1店舗＋Zoomで全国対応",
    fee: "初期費用110,000〜250,000円／月会費16,500〜22,000円／成婚料250,000〜300,000円（税込）",
    point: "全コースお見合い料0円。コース別に毎月1〜3名の紹介人数保証あり。",
  },
  {
    ad: "tulip",
    name: "ブライダルチューリップ",
    reviewHref: "/review/bridal-tulip/",
    clickUrl: "https://px.a8.net/svt/ejp?a8mat=4B8DGP+G82982+32P0+626XT",
    nationwide: true,
    prefs: ["tokyo"],
    area: "高田馬場サロン1拠点＋オンライン対応",
    fee: "入会金105,000円〜／月会費7,550円〜／成婚料180,000円（税込）",
    point: "IBJ・SCRUM・CONNECT-shipの3連盟で紹介可能会員は約19万名。",
  },
  {
    ad: "excellence",
    name: "エクセレンス青山",
    reviewHref: "/review/excellence-aoyama/",
    clickUrl: "https://px.a8.net/svt/ejp?a8mat=4B8DGP+GCTQ2A+VO0+C465T",
    nationwide: false,
    prefs: ["tokyo"],
    area: "東京・南青山1拠点（オンライン相談可・火曜定休）",
    fee: "入会金55,000円／月会費7,700円／成婚料220,000円（税込・スタンダード）",
    point: "医師・経営者などを主な対象にした仲人型。",
  },
];

/** その都道府県で利用できる提携先を返す。拠点がある社を先に、次にオンライン全国対応。 */
export function partnersFor(pref: string): Partner[] {
  const local = PARTNERS.filter((p) => p.prefs.includes(pref));
  const online = PARTNERS.filter((p) => !p.prefs.includes(pref) && p.nationwide);
  return [...local, ...online];
}

/** ページごとに出す順番を散らす（全ページ同じ並びにしないため）。slugから決まるので毎回同じ結果になる。 */
export function pickPartners(pref: string, seed: string, count = 3): Partner[] {
  const list = partnersFor(pref);
  if (list.length <= count) return list;
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const start = h % list.length;
  return Array.from({ length: count }, (_, i) => list[(start + i) % list.length]);
}
