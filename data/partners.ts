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
 *  - prefs は各社が公表している拠点のうち、実店舗を確認できた都道府県（店舗ページの「拠点あり」表示に使う）。
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
    fee: "初期費用66,000円／月16,800円／成婚料0円（2026年10月14日公式確認）",
    point: "成婚料0円のオンライン型。3連盟19.1万人を追加料金なしで検索できる。",
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
    area: "東京・新宿の拠点「ヒーローベース」＋全国オンライン対応",
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
    // 2026-10-15: 当サイトのGoogleマップ実測DBにサロンがある県だけに絞った（北海道はサロン未確認のため外した）
    prefs: ["tokyo", "osaka", "kanagawa", "aichi", "fukuoka", "hyogo", "saitama", "chiba", "kyoto", "miyagi", "hiroshima", "shizuoka"],
    area: "全国23店舗＋オンライン相談",
    fee: "入会金33,000円＋初期活動費132,000円／月会費18,700円／成婚料220,000円（税込）",
    point: "お見合いのセッティングを代行してくれる仲人型の老舗。",
  },
  {
    ad: "partner-agent",
    name: "パートナーエージェント",
    reviewHref: "/review/partner-agent/",
    clickUrl: "https://t.felmat.net/fmcl?ak=L20406.1.R50563Q.Z1361712",
    nationwide: false,
    // 2026-10-15: 広島は実店舗ではなく「オンライン店」（公式・10/14確認）のため外した
    prefs: ["tokyo", "osaka", "kanagawa", "aichi", "fukuoka", "hokkaido", "hyogo", "saitama", "chiba", "kyoto", "miyagi", "shizuoka"],
    area: "実店舗23店舗＋オンライン店11店舗",
    fee: "登録料33,000円＋初期費用66,000円〜／月会費14,300円〜／成婚料220,000円（税込）",
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
  // 2026-10-15 追加: felmat で提携済みだが店舗ページの導線に入っていなかった4社。
  // 料金・拠点は各社レビュー(2026年10月14日公式確認)からの転記。計測URLは各レビューの既存リンクと同一。
  // 2026-10-15: フィオーレの料金を公式料金ページで再確認。月会費7,700〜→5,830〜14,300円（フィオーレコース5,830円が範囲外だった）、66,000円は入会登録費ではなく入会時合計。
  {
    ad: "fiore",
    name: "フィオーレ",
    reviewHref: "/review/fiore/",
    clickUrl: "https://t.felmat.net/fmcl?ak=T8680S.1.X1309788.Z1361712",
    nationwide: false,
    prefs: ["hokkaido", "miyagi", "tokyo", "chiba", "aichi", "osaka", "hyogo", "kyoto", "fukuoka"],
    area: "全国17店舗（札幌〜大分）。無料相談は店舗またはオンライン",
    fee: "入会時33,000〜66,000円（成婚料0円のフィオーレコースは320,100円〜）／月会費5,830〜14,300円／成婚料0〜220,000円（税込）",
    point: "AI紹介・会員検索・成婚料0円の3タイプからコースを選ぶ。登録会員75,048名（2026年7月時点）。",
  },
  {
    ad: "seven",
    name: "セブン結婚相談所",
    reviewHref: "/review/seven/",
    clickUrl: "https://t.felmat.net/fmcl?ak=M6895M.1.Y109522N.Z1361712",
    nationwide: true,
    prefs: ["tokyo", "osaka"],
    area: "五反田サロン（東京）・梅田サロン（大阪）＋オンラインで全国",
    fee: "入会金9,800円／月会費9,800円／成婚料50,000円（税込）",
    point: "IBJ加盟の担当カウンセラー制。お見合い料0円。",
    caution: "活動1年後から更新料16,200円（年1回）がかかります",
  },
  {
    ad: "mars-cafe",
    name: "マーズカフェ",
    reviewHref: "/review/mars-cafe/",
    clickUrl: "https://t.felmat.net/fmcl?ak=K2473Q.1.A49782R.Z1361712",
    nationwide: true,
    prefs: ["tokyo"],
    area: "東京・中野1拠点（Zoom面談で全国対応）",
    fee: "入会金66,000円＋登録料22,000円／月額7,700円または11,000円／成婚料220,000円（税込）",
    point: "IBJ・TMS加盟の仲人型。紹介は月3名以上・面談無制限（A/Bコース共通）。",
  },
  {
    ad: "smartread",
    name: "スマリッジ",
    reviewHref: "/review/smartread/",
    clickUrl: "https://t.felmat.net/fmcl?ak=J112188.1.Z162495D.Z1361712",
    nationwide: true,
    prefs: [],
    area: "全国対応（オンライン専業・店舗なし）",
    fee: "登録料6,600円／月会費9,900円／成婚料0円（税込）",
    point: "IBJ online／コネクトシップで活動するオンライン専業。条件つきの返金保証あり。",
  },
];

export type Pick = Partner & {
  /** この都道府県に拠点がある */
  local: boolean;
  /** 表示中の店舗と同じブランド */
  self: boolean;
};

/** その都道府県で利用できる提携先を返す。拠点がある社を先に、次にオンライン全国対応。 */
export function partnersFor(pref: string): Partner[] {
  const local = PARTNERS.filter((p) => p.prefs.includes(pref));
  const online = PARTNERS.filter((p) => !p.prefs.includes(pref) && p.nationwide);
  return [...local, ...online];
}

function rotate<T>(list: T[], h: number): T[] {
  if (list.length === 0) return list;
  const start = h % list.length;
  return list.map((_, i) => list[(start + i) % list.length]);
}

/**
 * 店舗ページに出す提携先を選ぶ（2026-10-15 改訂）。
 *
 * 旧版は「拠点あり＋オンライン」を1本の輪にしてslugで開始位置を散らしていたため、
 * 拠点のある県でもオンライン専業ばかり出るページがあり、見出しの「近くで」と合わなかった。
 *  1. 表示中の店舗が提携ブランドの店舗なら、そのブランドを先頭に出す
 *  2. 次に、その都道府県に拠点がある提携先（slugで開始位置を散らす）
 *  3. 最後の1枠はオンライン全国対応の提携先（あれば）
 * slugから決まるので毎回同じ結果になる。順位・優劣は付けない。
 */
export function pickPartners(pref: string, seed: string, count = 3, selfReviewHref?: string): Pick[] {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const self = selfReviewHref ? PARTNERS.find((p) => p.reviewHref === selfReviewHref) : undefined;
  const rest = PARTNERS.filter((p) => p !== self);
  const local = rotate(rest.filter((p) => p.prefs.includes(pref)), h);
  const online = rotate(rest.filter((p) => !p.prefs.includes(pref) && p.nationwide), h);

  const out: Pick[] = [];
  if (self) out.push({ ...self, local: self.prefs.includes(pref), self: true });
  const onlineSlots = online.length > 0 ? 1 : 0;
  for (const p of local) {
    if (out.length >= count - onlineSlots) break;
    out.push({ ...p, local: true, self: false });
  }
  for (const p of online) {
    if (out.length >= count) break;
    out.push({ ...p, local: false, self: false });
  }
  return out;
}
