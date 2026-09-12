// エリアページのコンテンツ増強セクション。すべて収録DB(Googleマップ実データ)からの機械集計で、創作値はなし。
import Link from "next/link";
import type { AgencyDb } from "@/lib/agencies";
import { indexableAgencies } from "@/lib/agencies";

function median(nums: number[]): number {
  if (!nums.length) return 0;
  const s = [...nums].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : Math.round((s[m - 1] + s[m]) / 2);
}

export default function AreaInsights({ db, prefName }: { db: AgencyDb; prefName: string }) {
  const all = db.agencies;
  const main = indexableAgencies(db);
  const rated = all.filter((a) => typeof a.rating === "number" && (a.count || 0) >= 3);
  const hi48 = rated.filter((a) => (a.rating as number) >= 4.8).length;
  const hi45 = rated.filter((a) => (a.rating as number) >= 4.5 && (a.rating as number) < 4.8).length;
  const lo = rated.length - hi48 - hi45;
  const medCount = median(main.map((a) => a.count || 0));
  const top = [...main].sort((a, b) => (b.count || 0) - (a.count || 0)).slice(0, 3);
  const pct = (n: number) => (rated.length ? Math.round((n / rated.length) * 100) : 0);

  const faqs = [
    {
      q: `${prefName}には結婚相談所が何件ありますか？`,
      a: `当サイトの実査(Googleマップ・${db.surveyedAt}取得)では、${prefName}で${all.length}件の結婚相談所を確認できました。うち口コミ3件以上で実データ比較ができるのは${main.length}件です。フォトスタジオ・指輪店など別業態は実査で除外しています。`,
    },
    {
      q: `${prefName}の結婚相談所は評点で選べますか？`,
      a: `評点だけでは選びにくいのが実情です。${prefName}で口コミ3件以上の${rated.length}件のうち${hi48}件(${pct(hi48)}%)が評点4.8以上に集中しており、差がつきません。当サイトでは評点よりも「口コミ件数(実績の量)」と「口コミ本文の具体性」で比較することをおすすめしています。`,
    },
    {
      q: `${prefName}で口コミが多い結婚相談所はどこですか？`,
      a: `${db.surveyedAt}時点の実測では、${top.map((a) => `${a.name}(${a.count}件)`).join("、")}が口コミ件数の上位です。件数は変動するため、最新はGoogleマップでご確認ください。`,
    },
  ];

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <section className="my-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <h2 className="text-xl font-bold text-[#2C2C2C] mb-4 border-l-4 border-[#A08447] pl-3">データで見る{prefName}の結婚相談所</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        {[
          { num: `${all.length}件`, label: "実在確認できた相談所" },
          { num: `${main.length}件`, label: "口コミ3件以上" },
          { num: `${medCount}件`, label: "口コミ件数の中央値" },
          { num: `${pct(hi48)}%`, label: "評点4.8以上の割合" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center">
            <p className="text-xl font-bold text-[#A08447]">{s.num}</p>
            <p className="text-xs text-[#555] mt-1">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-5 text-sm leading-relaxed text-[#555] mb-4">
        <p>
          {prefName}で口コミ3件以上の{rated.length}件の評点分布は、<strong className="text-[#2C2C2C]">4.8以上が{hi48}件({pct(hi48)}%)</strong>・4.5〜4.7が{hi45}件({pct(hi45)}%)・4.5未満が{lo}件({pct(lo)}%)でした({db.surveyedAt}実測)。
          結婚相談所の口コミは成婚退会時などの高評価が集まりやすく評点が団子状になるため、
          <strong className="text-[#2C2C2C]">評点の0.1差よりも「件数の多さ」と「本文に活動内容(お見合い数・サポート・費用)が具体的に書かれているか」</strong>で比べるのが実用的です。
        </p>
        <p className="mt-3">
          口コミが多い順では{top.map((a, i) => (
            <span key={a.slug}>{i > 0 && "、"}<Link href={`/agency/${encodeURIComponent(a.slug)}/`} className="underline text-[#A08447]">{a.name}</Link>({a.count}件)</span>
          ))}が上位です。大手ブランド(オーネット・ツヴァイ・サンマリエ等)は<Link href="/compare/" className="underline text-[#A08447]">費用・仕組みの比較レビュー</Link>も参考にしてください。
        </p>
      </div>
      <div className="mb-2">
        {faqs.map((f, i) => (
          <details key={i} className="bg-white rounded-xl border border-gray-100 px-5 py-3 mb-2 text-sm">
            <summary className="cursor-pointer font-medium text-[#2C2C2C]">{f.q}</summary>
            <p className="mt-2 leading-relaxed text-[#555]">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
