'use client';

import { useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import AuthorBox from "@/components/AuthorBox";

/* ==========================================================================
   Agency type & database
   ========================================================================== */

type Agency = {
  name: string;
  slug: string;
  type: string;
  monthlyFee: string;
  initialFee: string;
  members: string;
  area: string[];
  ageRange: string[];
  budgetCategory: 'budget' | 'mid' | 'premium';
  features: string[];
  priority: string[];
  style: string[];
  affiliateUrl?: string;
  screenshotSlug: string;
};

/* --- affiliate links ------------------------------------------------------ */
const NACO_DO_AFF = 'https://t.felmat.net/fmcl?ak=Z50330.1.2894055.Z1361712';
const SEVEN_AFF = 'https://t.felmat.net/fmcl?ak=M6895M.1.Y109522N.Z1361712';
const MARS_CAFE_AFF = 'https://t.felmat.net/fmcl?ak=K2473Q.1.A49782R.Z1361712';

const agencies: Agency[] = [
  {
    name: 'ツヴァイ',
    slug: 'zwei',
    type: 'ハイブリッド型',
    monthlyFee: '月会費15,400円〜',
    initialFee: '初期費用115,500円〜',
    members: '約9.4万人',
    area: ['北海道', '東北', '関東', '中部', '関西', '中国', '四国', '九州'],
    ageRange: ['20代', '30代前半', '30代後半', '40代', '50代以上'],
    budgetCategory: 'mid',
    features: ['会員数9.4万人', '全国50店舗', 'データマッチング', '仲人型併用'],
    priority: ['会員数の多さ', 'データマッチング'],
    style: ['自分のペースでゆっくり', '積極的に活動'],
    screenshotSlug: 'zwei',
  },
  {
    name: 'オーネット',
    slug: 'onet',
    type: 'データマッチング型',
    monthlyFee: '月会費16,500円〜',
    initialFee: '初期費用116,600円〜',
    members: '約4.2万人',
    area: ['北海道', '東北', '関東', '中部', '関西', '中国', '四国', '九州'],
    ageRange: ['20代', '30代前半', '30代後半', '40代', '50代以上'],
    budgetCategory: 'mid',
    features: ['40年の実績', 'データマッチング', '自社会員のみ', '真剣度が高い'],
    priority: ['データマッチング', '会員数の多さ'],
    style: ['自分のペースでゆっくり'],
    screenshotSlug: 'onet',
  },
  {
    name: 'パートナーエージェント',
    slug: 'partner-agent',
    type: '仲人型',
    monthlyFee: '月会費18,700円〜',
    initialFee: '初期費用137,500円〜',
    members: '約3万人',
    area: ['関東', '中部', '関西', '九州'],
    ageRange: ['20代', '30代前半', '30代後半', '40代'],
    budgetCategory: 'premium',
    features: ['成婚率27%', '専任コンシェルジュ', 'PDCAサイクル', '1年以内成婚'],
    priority: ['成婚率の高さ', 'カウンセラーのサポート'],
    style: ['プロにお任せ', '積極的に活動'],
    screenshotSlug: 'partner-agent',
  },
  {
    name: 'マーズカフェ',
    slug: 'mars-cafe',
    type: 'カジュアル仲人型',
    monthlyFee: '月会費11,000円〜',
    initialFee: '初期費用33,000円〜',
    members: '約2万人',
    area: ['関東'],
    ageRange: ['20代', '30代前半', '30代後半'],
    budgetCategory: 'budget',
    features: ['カフェスタイル', '低価格', '気軽に始められる', 'カウンセラー付き'],
    priority: ['カウンセラーのサポート'],
    style: ['自分のペースでゆっくり', '積極的に活動'],
    affiliateUrl: MARS_CAFE_AFF,
    screenshotSlug: 'mars-cafe',
  },
  {
    name: 'スマリード',
    slug: 'smartread',
    type: 'オンライン型',
    monthlyFee: '月会費9,900円〜',
    initialFee: '初期費用6,600円〜',
    members: '約3万人（コネクトシップ）',
    area: ['関東', '関西', '中部', '北海道', '東北', '中国', '四国', '九州'],
    ageRange: ['20代', '30代前半', '30代後半', '40代'],
    budgetCategory: 'budget',
    features: ['低価格', 'オンライン完結', 'コネクトシップ連携', 'コスパ抜群'],
    priority: ['オンライン対応', 'データマッチング'],
    style: ['自分のペースでゆっくり', 'オンライン中心'],
    screenshotSlug: 'smartread',
    affiliateUrl: 'https://t.felmat.net/fmcl?ak=J112188.1.Z162495D.Z1361712',
  },
  {
    name: 'リングベル',
    slug: 'ringbell',
    type: '仲人型',
    monthlyFee: '月会費13,200円〜',
    initialFee: '初期費用104,500円〜',
    members: '約2.5万人',
    area: ['関東', '関西'],
    ageRange: ['30代前半', '30代後半', '40代', '50代以上'],
    budgetCategory: 'mid',
    features: ['丁寧な仲人サポート', 'お見合い保証', '成婚実績豊富', '少人数制'],
    priority: ['カウンセラーのサポート', 'お見合い保証'],
    style: ['プロにお任せ'],
    screenshotSlug: 'ringbell',
  },
  {
    name: 'フィオーレ',
    slug: 'fiore',
    type: 'ハイブリッド型',
    monthlyFee: '月会費8,800円〜',
    initialFee: '初期費用33,000円〜',
    members: '約5.2万人（IBJ連携）',
    area: ['関西', '中国', '四国', '九州'],
    ageRange: ['20代', '30代前半', '30代後半', '40代'],
    budgetCategory: 'budget',
    features: ['関西中心', 'IBJ連携', '低価格', 'カウンセラー付き'],
    priority: ['カウンセラーのサポート', '会員数の多さ'],
    style: ['自分のペースでゆっくり', '積極的に活動'],
    screenshotSlug: 'fiore',
    affiliateUrl: 'https://t.felmat.net/fmcl?ak=T8680S.1.X1309788.Z1361712',
  },
  {
    name: 'マリッジプロ',
    slug: 'marriage-pro',
    type: '仲人型',
    monthlyFee: '月会費16,500円〜',
    initialFee: '初期費用110,000円〜',
    members: '約8万人（IBJ連携）',
    area: ['関東'],
    ageRange: ['30代前半', '30代後半', '40代', '50代以上'],
    budgetCategory: 'mid',
    features: ['IBJ加盟', '手厚いサポート', '成婚重視', 'ベテラン仲人'],
    priority: ['成婚率の高さ', 'カウンセラーのサポート'],
    style: ['プロにお任せ', '積極的に活動'],
    screenshotSlug: 'marriage-pro',
  },
  {
    name: '結婚相談所セブン',
    slug: 'seven',
    type: 'オンライン対応型',
    monthlyFee: '月会費7,700円〜',
    initialFee: '初期費用30,800円〜',
    members: '約8万人（IBJ連携）',
    area: ['関東', '関西', '中部'],
    ageRange: ['20代', '30代前半', '30代後半', '40代'],
    budgetCategory: 'budget',
    features: ['低価格', 'IBJ連携', 'オンライン対応', '初期費用が安い'],
    priority: ['オンライン対応', 'データマッチング'],
    style: ['自分のペースでゆっくり', 'オンライン中心'],
    affiliateUrl: SEVEN_AFF,
    screenshotSlug: 'seven',
  },
  {
    name: 'ムスベル',
    slug: 'musbell',
    type: '仲人型',
    monthlyFee: '月会費15,400円〜',
    initialFee: '初期費用165,000円〜',
    members: '約8万人（複数連盟）',
    area: ['関東', '関西', '中部', '東北', '九州'],
    ageRange: ['30代前半', '30代後半', '40代', '50代以上'],
    budgetCategory: 'premium',
    features: ['3つの連盟加盟', '出会いの幅が広い', '手厚い仲人', '中高年に強い'],
    priority: ['会員数の多さ', 'カウンセラーのサポート'],
    style: ['プロにお任せ'],
    screenshotSlug: 'musbell',
  },
  {
    name: 'naco-do',
    slug: 'naco-do',
    type: 'オンライン型',
    monthlyFee: '月額6,980円〜',
    initialFee: '初期費用29,800円〜',
    members: '約12.1万人（複数連盟）',
    area: ['北海道', '東北', '関東', '中部', '関西', '中国', '四国', '九州'],
    ageRange: ['20代', '30代前半', '30代後半', '40代'],
    budgetCategory: 'budget',
    features: ['オンライン完結', '業界最安級', '12.1万人の会員', '3つの連盟連携'],
    priority: ['会員数の多さ', 'オンライン対応'],
    style: ['自分のペースでゆっくり', 'オンライン中心'],
    affiliateUrl: NACO_DO_AFF,
    screenshotSlug: 'naco-do',
  },
  {
    name: 'サンマリエ',
    slug: 'sunmarie',
    type: '仲人型',
    monthlyFee: '月会費16,500円〜',
    initialFee: '初期費用187,000円〜',
    members: '約8.5万人（IBJ連携）',
    area: ['北海道', '東北', '関東', '中部', '関西', '中国', '九州'],
    ageRange: ['20代', '30代前半', '30代後半', '40代', '50代以上'],
    budgetCategory: 'premium',
    features: ['40年以上の歴史', 'IBJ加盟', '手厚いサポート', 'お見合い保証'],
    priority: ['カウンセラーのサポート', 'お見合い保証', '成婚率の高さ'],
    style: ['プロにお任せ', '積極的に活動'],
    screenshotSlug: 'sunmarie',
  },
  {
    name: 'エン婚活エージェント',
    slug: 'en-konkatsu',
    type: 'オンライン型',
    monthlyFee: '月額14,300円',
    initialFee: '初期費用10,780円',
    members: '約3万人（コネクトシップ）',
    area: ['北海道', '東北', '関東', '中部', '関西', '中国', '四国', '九州'],
    ageRange: ['20代', '30代前半', '30代後半', '40代'],
    budgetCategory: 'mid',
    features: ['エン・ジャパングループ', '全額返金保証', 'オンライン完結', 'コネクトシップ連携'],
    priority: ['オンライン対応', 'データマッチング'],
    style: ['自分のペースでゆっくり', 'オンライン中心'],
    screenshotSlug: 'en-konkatsu',
  },
];

/* ==========================================================================
   Area mapping
   ========================================================================== */

const prefectureToRegion: Record<string, string> = {
  '北海道': '北海道', '青森': '東北', '岩手': '東北', '宮城': '東北', '秋田': '東北',
  '山形': '東北', '福島': '東北', '東京': '関東', '神奈川': '関東', '埼玉': '関東',
  '千葉': '関東', '茨城': '関東', '栃木': '関東', '群馬': '関東', '新潟': '中部',
  '富山': '中部', '石川': '中部', '福井': '中部', '山梨': '中部', '長野': '中部',
  '岐阜': '中部', '静岡': '中部', '愛知': '中部', '三重': '関西', '滋賀': '関西',
  '京都': '関西', '大阪': '関西', '兵庫': '関西', '奈良': '関西', '和歌山': '関西',
  '鳥取': '中国', '島根': '中国', '岡山': '中国', '広島': '中国', '山口': '中国',
  '徳島': '四国', '香川': '四国', '愛媛': '四国', '高知': '四国', '福岡': '九州',
  '佐賀': '九州', '長崎': '九州', '熊本': '九州', '大分': '九州', '宮崎': '九州',
  '鹿児島': '九州', '沖縄': '九州',
};

const regionPrefectures: Record<string, string[]> = {
  '北海道': ['北海道'],
  '東北': ['青森', '岩手', '宮城', '秋田', '山形', '福島'],
  '関東': ['東京', '神奈川', '埼玉', '千葉', '茨城', '栃木', '群馬'],
  '中部': ['新潟', '富山', '石川', '福井', '山梨', '長野', '岐阜', '静岡', '愛知'],
  '関西': ['三重', '滋賀', '京都', '大阪', '兵庫', '奈良', '和歌山'],
  '中国': ['鳥取', '島根', '岡山', '広島', '山口'],
  '四国': ['徳島', '香川', '愛媛', '高知'],
  '九州': ['福岡', '佐賀', '長崎', '熊本', '大分', '宮崎', '鹿児島', '沖縄'],
};

/* ==========================================================================
   Question options
   ========================================================================== */

const ageOpts = ['20代', '30代前半', '30代後半', '40代', '50代以上'];
const budgetOpts = ['月1万円以下', '月1〜3万円', '月3〜5万円', '月5万円以上', '初期費用重視', '成果報酬型希望'];
const priorityOpts = ['会員数の多さ', '成婚率の高さ', 'カウンセラーのサポート', 'オンライン対応', 'データマッチング', 'お見合い保証'];
const styleOpts = ['自分のペースでゆっくり', '積極的に活動', 'プロにお任せ', 'オンライン中心'];

/* ==========================================================================
   Scoring
   ========================================================================== */

type Answers = {
  prefecture: string;
  age: string;
  budget: string;
  priority: string;
  style: string;
};

function budgetToCategories(b: string): string[] {
  switch (b) {
    case '月1万円以下': return ['budget'];
    case '月1〜3万円': return ['budget', 'mid'];
    case '月3〜5万円': return ['mid', 'premium'];
    case '月5万円以上': return ['premium'];
    case '初期費用重視': return ['budget'];
    case '成果報酬型希望': return ['budget', 'mid'];
    default: return ['budget', 'mid', 'premium'];
  }
}

type ScoredAgency = Agency & { score: number; matchPct: number; reason: string };

function scoreAgencies(answers: Answers): ScoredAgency[] {
  const cats = budgetToCategories(answers.budget);
  const region = prefectureToRegion[answers.prefecture] || '';

  const scored = agencies.map((a) => {
    let score = 0;

    // Area match
    if (a.area.includes(region)) score += 25;
    else score -= 10;

    // Budget match
    if (cats.includes(a.budgetCategory)) score += 20;

    // Age match
    if (a.ageRange.includes(answers.age)) score += 15;

    // Priority match
    if (a.priority.includes(answers.priority)) score += 20;

    // Style match
    if (a.style.includes(answers.style)) score += 15;

    // Bonus for online agencies when area doesn't match
    if (!a.area.includes(region) && a.style.includes('オンライン中心')) score += 10;

    return { ...a, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const top = scored.slice(0, 3);
  const maxScore = Math.max(top[0]?.score ?? 1, 1);

  return top.map((a) => {
    const matchPct = Math.min(98, Math.max(45, Math.round((a.score / maxScore) * 97)));
    return { ...a, matchPct, reason: buildReason(a, answers) };
  });
}

function buildReason(a: Agency & { score: number }, ans: Answers): string {
  const parts: string[] = [];
  const region = prefectureToRegion[ans.prefecture] || '';

  if (a.area.includes(region)) {
    parts.push(`${ans.prefecture}エリアに対応しており、お近くで活動できます`);
  } else {
    parts.push(`オンラインで全国から利用可能です`);
  }

  if (a.priority.includes(ans.priority)) {
    if (ans.priority === '会員数の多さ') parts.push(`${a.members}の豊富な会員数が魅力です`);
    else if (ans.priority === '成婚率の高さ') parts.push(`成婚実績が豊富で、結果を出しやすい環境です`);
    else if (ans.priority === 'カウンセラーのサポート') parts.push(`専任カウンセラーが手厚くサポートしてくれます`);
    else if (ans.priority === 'オンライン対応') parts.push(`オンラインで効率的に婚活を進められます`);
    else if (ans.priority === 'データマッチング') parts.push(`データマッチングで相性の良いお相手と出会えます`);
    else if (ans.priority === 'お見合い保証') parts.push(`お見合い保証付きで安心して活動できます`);
  }

  if (ans.style === 'プロにお任せ' && a.style.includes('プロにお任せ')) {
    parts.push(`プロの仲人があなたの婚活をリードしてくれます`);
  } else if (ans.style === 'オンライン中心' && a.style.includes('オンライン中心')) {
    parts.push(`スマホ一つで婚活を始められる手軽さが魅力です`);
  }

  parts.push(`${a.monthlyFee}から始められます`);

  return parts.slice(0, 3).join('。') + '。';
}

/* ==========================================================================
   Component
   ========================================================================== */

const TOTAL_STEPS = 6;

export default function ConciergePage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    prefecture: '',
    age: '',
    budget: '',
    priority: '',
    style: '',
  });
  const [results, setResults] = useState<ScoredAgency[] | null>(null);

  const next = useCallback(() => {
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const prev = useCallback(() => {
    setStep((s) => Math.max(0, s - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const finish = useCallback(() => {
    setResults(scoreAgencies(answers));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(TOTAL_STEPS + 1);
  }, [answers]);

  const subPrefectures = useMemo(
    () => {
      // Find which region contains the selected prefecture group
      for (const [region, prefs] of Object.entries(regionPrefectures)) {
        if (answers.prefecture && prefs.includes(answers.prefecture)) return prefs;
        if (answers.prefecture === region) return prefs;
      }
      return [];
    },
    [answers.prefecture],
  );

  const progressPct = step === 0 ? 0 : Math.min(100, Math.round(((step) / (TOTAL_STEPS)) * 100));

  /* --- selection button helper --------------------------------------- */
  const Btn = ({
    label,
    selected,
    onClick,
  }: {
    label: string;
    selected: boolean;
    onClick: () => void;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all duration-200 ${
        selected
          ? 'border-[#8B7355] bg-[#F5F0EB] text-[#8B7355] font-medium ring-1 ring-[#C9B99A]'
          : 'border-gray-200 bg-white text-gray-700 hover:border-[#C9B99A] hover:bg-[#F5F0EB]/40'
      }`}
    >
      {label}
    </button>
  );

  /* --- card wrapper -------------------------------------------------- */
  const Card = ({ children, title, subtitle }: { children: React.ReactNode; title: string; subtitle?: string }) => (
    <div className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8" style={{ animation: 'fadeIn 0.4s ease-out' }}>
      <h2 className="text-lg sm:text-xl font-medium text-[#2C2C2C] mb-1 tracking-wider">{title}</h2>
      {subtitle && <p className="text-sm text-[#2C2C2C]/50 mb-5 tracking-wider">{subtitle}</p>}
      {!subtitle && <div className="mb-5" />}
      {children}
    </div>
  );

  /* --- navigation buttons -------------------------------------------- */
  const Nav = ({ canNext, onNext }: { canNext: boolean; onNext?: () => void }) => (
    <div className="flex justify-between mt-6 gap-3">
      {step > 1 && (
        <button type="button" onClick={prev} className="px-5 py-2.5 text-sm rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors tracking-wider">
          戻る
        </button>
      )}
      <button
        type="button"
        disabled={!canNext}
        onClick={onNext ?? next}
        className={`ml-auto px-6 py-2.5 text-sm rounded-lg font-medium transition-colors tracking-wider ${
          canNext
            ? 'bg-[#8B7355] text-white hover:bg-[#7A6548]'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        {step === TOTAL_STEPS ? '診断結果を見る' : '次へ'}
      </button>
    </div>
  );

  /* =================================================================== */
  return (
    <>
      <head>
        <meta name="robots" content="noindex,nofollow" />
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </head>

      <div className="min-h-screen bg-gradient-to-b from-[#FAFAF8] to-white py-8 px-4">
        {/* progress bar */}
        {step > 0 && step <= TOTAL_STEPS && (
          <div className="w-full max-w-lg mx-auto mb-6">
            <div className="flex justify-between text-xs text-[#2C2C2C]/40 mb-1 tracking-wider">
              <span>ステップ {step} / {TOTAL_STEPS}</span>
              <span>{progressPct}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#8B7355] rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        )}

        {/* ── Step 0: Welcome ──────────────────────────────────── */}
        {step === 0 && (
          <div className="w-full max-w-lg mx-auto text-center py-12" style={{ animation: 'fadeIn 0.4s ease-out' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F5F0EB] mb-6">
              <svg className="w-8 h-8 text-[#8B7355]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-light text-[#2C2C2C] mb-3 tracking-widest">
              結婚相談所コンシェルジュ
            </h1>
            <p className="text-sm sm:text-base text-[#2C2C2C]/60 leading-relaxed mb-8 max-w-sm mx-auto tracking-wider">
              あなたにぴったりの結婚相談所を診断します。簡単な質問に答えるだけで、最適な3社をご提案します。
            </p>
            <button
              type="button"
              onClick={next}
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#8B7355] text-white font-normal rounded-full hover:bg-[#7A6548] transition-colors shadow-md tracking-widest"
            >
              診断スタート
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* ── Step 1: エリア ──────────────────────────────────── */}
        {step === 1 && (
          <Card title="お住まいのエリア" subtitle="都道府県を選択してください">
            <p className="text-xs text-[#2C2C2C]/40 mb-2 tracking-wider">地域を選択</p>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {Object.keys(regionPrefectures).map((region) => (
                <Btn
                  key={region}
                  label={region}
                  selected={!!answers.prefecture && (regionPrefectures[region] || []).includes(answers.prefecture)}
                  onClick={() => {
                    const prefs = regionPrefectures[region];
                    if (prefs && prefs.length === 1) {
                      setAnswers((p) => ({ ...p, prefecture: prefs[0] }));
                    } else {
                      setAnswers((p) => ({ ...p, prefecture: region }));
                    }
                  }}
                />
              ))}
            </div>
            {(() => {
              const selectedRegion = Object.entries(regionPrefectures).find(
                ([, prefs]) => prefs.includes(answers.prefecture)
              )?.[0] || answers.prefecture;
              const prefs = regionPrefectures[selectedRegion];
              if (prefs && prefs.length > 1) {
                return (
                  <>
                    <p className="text-xs text-[#2C2C2C]/40 mb-2 mt-4 tracking-wider">都道府県を選択</p>
                    <div className="grid grid-cols-3 gap-2">
                      {prefs.map((p) => (
                        <Btn
                          key={p}
                          label={p}
                          selected={answers.prefecture === p}
                          onClick={() => setAnswers((prev) => ({ ...prev, prefecture: p }))}
                        />
                      ))}
                    </div>
                  </>
                );
              }
              return null;
            })()}
            <Nav canNext={!!answers.prefecture && !!prefectureToRegion[answers.prefecture]} />
          </Card>
        )}

        {/* ── Step 2: 年齢層 ─────────────────────────────────── */}
        {step === 2 && (
          <Card title="年齢層" subtitle="あなたの年齢層を教えてください">
            <div className="grid grid-cols-1 gap-2">
              {ageOpts.map((a) => (
                <Btn key={a} label={a} selected={answers.age === a} onClick={() => setAnswers((p) => ({ ...p, age: a }))} />
              ))}
            </div>
            <Nav canNext={!!answers.age} />
          </Card>
        )}

        {/* ── Step 3: 予算 ───────────────────────────────────── */}
        {step === 3 && (
          <Card title="ご予算" subtitle="月々の予算の目安を教えてください">
            <div className="grid grid-cols-1 gap-2">
              {budgetOpts.map((b) => (
                <Btn key={b} label={b} selected={answers.budget === b} onClick={() => setAnswers((p) => ({ ...p, budget: b }))} />
              ))}
            </div>
            <Nav canNext={!!answers.budget} />
          </Card>
        )}

        {/* ── Step 4: 重視するポイント ────────────────────────── */}
        {step === 4 && (
          <Card title="重視するポイント" subtitle="一番重視することを教えてください">
            <div className="grid grid-cols-1 gap-2">
              {priorityOpts.map((p) => (
                <Btn key={p} label={p} selected={answers.priority === p} onClick={() => setAnswers((prev) => ({ ...prev, priority: p }))} />
              ))}
            </div>
            <Nav canNext={!!answers.priority} />
          </Card>
        )}

        {/* ── Step 5: 活動スタイル ────────────────────────────── */}
        {step === 5 && (
          <Card title="活動スタイル" subtitle="どのように婚活を進めたいですか？">
            <div className="grid grid-cols-1 gap-2">
              {styleOpts.map((s) => (
                <Btn key={s} label={s} selected={answers.style === s} onClick={() => setAnswers((p) => ({ ...p, style: s }))} />
              ))}
            </div>
            <Nav canNext={!!answers.style} />
          </Card>
        )}

        {/* ── Step 6: 確認 → 結果 ─────────────────────────────── */}
        {step === TOTAL_STEPS && (
          <Card title="回答内容の確認" subtitle="以下の内容で診断します">
            <div className="space-y-3 mb-4">
              {[
                { label: 'エリア', value: answers.prefecture },
                { label: '年齢層', value: answers.age },
                { label: '予算', value: answers.budget },
                { label: '重視するポイント', value: answers.priority },
                { label: '活動スタイル', value: answers.style },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-sm text-[#2C2C2C]/50 tracking-wider">{item.label}</span>
                  <span className="text-sm font-medium text-[#2C2C2C] tracking-wider">{item.value}</span>
                </div>
              ))}
            </div>
            <Nav canNext onNext={finish} />
          </Card>
        )}

        {/* ── Results ─────────────────────────────────────────── */}
        {step === TOTAL_STEPS + 1 && results && (
          <div className="w-full max-w-2xl mx-auto" style={{ animation: 'fadeIn 0.4s ease-out' }}>
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl font-light text-[#2C2C2C] mb-2 tracking-widest">あなたにおすすめの結婚相談所</h2>
              <p className="text-sm text-[#2C2C2C]/50 tracking-wider">
                {answers.prefecture} / {answers.age} / {answers.budget}
              </p>
            </div>

            {results.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center">
                <p className="text-lg font-medium text-[#2C2C2C] mb-3 tracking-wider">該当する結婚相談所が見つかりませんでした</p>
                <p className="text-sm text-[#2C2C2C]/50 mb-6 tracking-wider">条件を変えて再度お試しください。</p>
                <button
                  type="button"
                  onClick={() => { setStep(0); setResults(null); }}
                  className="inline-block bg-[#8B7355] hover:bg-[#7A6548] text-white font-normal py-3 px-8 rounded-full transition-colors tracking-widest"
                >
                  もう一度診断する
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {results.map((r, i) => {
                  const isAffiliate = !!r.affiliateUrl;
                  return (
                    <div
                      key={r.slug}
                      className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
                    >
                      {/* Screenshot */}
                      {isAffiliate && r.affiliateUrl ? (
                        <a href={r.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow" className="block">
                          <img src={`/ss-${r.screenshotSlug}.jpg`} alt={`${r.name} 公式サイト`} className="w-full h-40 object-cover object-top" />
                        </a>
                      ) : (
                        <Link href={`/review/${r.slug}/`}>
                          <img src={`/ss-${r.screenshotSlug}.jpg`} alt={`${r.name} 公式サイト`} className="w-full h-40 object-cover object-top" />
                        </Link>
                      )}
                      <p className="text-[10px] text-gray-400 px-5 pt-1">画像引用: 公式サイトより</p>

                      {/* Header */}
                      <div className="flex items-center justify-between px-5 pt-4 pb-2">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8B7355] text-white text-sm font-medium">
                            {i + 1}
                          </span>
                          <div>
                            <p className="font-medium text-[#2C2C2C] text-base sm:text-lg leading-tight tracking-wider">
                              {r.name}
                            </p>
                            <p className="text-xs text-[#2C2C2C]/40 tracking-wider">{r.type}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-light text-[#8B7355]">
                            {r.matchPct}<span className="text-sm">%</span>
                          </p>
                          <p className="text-[10px] text-[#2C2C2C]/40 tracking-wider">マッチ度</p>
                        </div>
                      </div>

                      <div className="px-5 pb-5">
                        {/* Features */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {r.features.map((f) => (
                            <span key={f} className="bg-[#F5F0EB] text-[#8B7355] text-xs px-2.5 py-1 rounded-full tracking-wider">
                              {f}
                            </span>
                          ))}
                        </div>

                        {/* Fee info */}
                        <div className="flex gap-4 text-xs text-[#2C2C2C]/60 mb-3 tracking-wider">
                          <span>{r.monthlyFee}</span>
                          <span>{r.initialFee}</span>
                        </div>

                        {/* Reason */}
                        <p className="text-sm text-[#2C2C2C]/70 bg-[#FAFAF8] border border-[#8B7355]/15 rounded-lg p-3 mb-4 leading-relaxed">
                          {r.reason}
                        </p>

                        {/* CTA buttons */}
                        <div className="flex flex-col sm:flex-row gap-2.5">
                          {isAffiliate && r.affiliateUrl ? (
                            <a
                              href={r.affiliateUrl}
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="flex-1 text-center bg-[#8B7355] hover:bg-[#7A6548] text-white font-normal py-3 px-6 rounded-lg transition-colors tracking-widest text-sm"
                            >
                              公式サイトへ
                            </a>
                          ) : (
                            <Link
                              href={`/review/${r.slug}/`}
                              className="flex-1 text-center bg-[#8B7355] hover:bg-[#7A6548] text-white font-normal py-3 px-6 rounded-lg transition-colors tracking-widest text-sm"
                            >
                              口コミ・詳細を見る
                            </Link>
                          )}
                          {isAffiliate && (
                            <Link
                              href={`/review/${r.slug}/`}
                              className="flex-1 text-center border border-[#8B7355] text-[#8B7355] hover:bg-[#F5F0EB] font-normal py-3 px-6 rounded-lg transition-colors tracking-widest text-sm"
                            >
                              口コミ・詳細を見る
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Retry button */}
                <div className="text-center pt-4 pb-8">
                  <button
                    type="button"
                    onClick={() => { setStep(0); setResults(null); setAnswers({ prefecture: '', age: '', budget: '', priority: '', style: '' }); }}
                    className="inline-flex items-center gap-2 text-sm text-[#8B7355] hover:text-[#7A6548] tracking-widest"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    もう一度診断する
                  </button>
                  <div className="mt-4">
                    <Link href="/#ranking" className="text-sm text-[#2C2C2C]/50 hover:text-[#8B7355] tracking-wider">
                      ランキングページへ戻る
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
