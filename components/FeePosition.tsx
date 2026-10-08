import Link from "next/link";
import { FEES, FEE_SURVEY_NOTE, monthlyRank, initialRank, successRank, oneYearTotal, totalRank } from "@/data/fees";

const yen = (n: number) => n.toLocaleString() + "円";

/*
 * 「この相談所の料金は24社の中でどの位置か」を出すブロック（2026-10-08 新設）。
 *
 * 競合のレビュー記事は口コミ本文の引用で差をつけているが、当サイトは口コミを
 * 転載しない方針なので同じ土俵では戦えない。代わりに、このサイトだけが持っている
 * 「24社を同じ基準で実査した料金データ」で比較を出す。
 * 数値は data/fees.ts（＝/compare/ と同じ公式確認値）からのみ算出し、推定は入れない。
 */
export default function FeePosition({ slug }: { slug: string }) {
  const self = FEES.find((f) => f.slug === slug);
  if (!self) return null;

  const m = monthlyRank(slug);
  const i = initialRank(slug);
  const s = successRank(slug);
  const t = totalRank(slug);
  const total = oneYearTotal(slug);
  if (!m && !i && !s) return null;

  // 1年総額を出せる社の中で、前後3社を見せる
  const neighbours = t
    ? t.rows
        .slice(Math.max(0, t.rank - 3), Math.min(t.rows.length, t.rank + 2))
        .map((r) => ({ ...r, name: FEES.find((f) => f.slug === r.slug)!.name }))
    : [];

  return (
    <section className="mb-12">
      <h2 className="text-xl font-light mb-4 border-l-4 border-[#A08447] pl-4 tracking-widest">
        24社の中での料金の位置
      </h2>
      <p className="text-sm text-[#555] leading-relaxed mb-5">
        当サイトが公式サイトを実査した結婚相談所24社と、同じ基準で並べたときの{self.name}の位置です。
        {FEE_SURVEY_NOTE}
      </p>

      <div className="grid sm:grid-cols-3 gap-3 mb-5">
        {[
          { label: "月会費", r: m, unit: "社中" },
          { label: "入会時の費用", r: i, unit: "社中" },
          { label: "成婚料", r: s, unit: "社中" },
        ].map((x) => (
          <div key={x.label} className="bg-white rounded-lg border border-gray-100 p-4">
            <p className="text-[11px] tracking-widest text-[#2C2C2C]/45 mb-1">{x.label}</p>
            {x.r ? (
              <>
                <p className="text-2xl font-light text-[#2C2C2C]">
                  {x.r.value === 0 ? "なし" : yen(x.r.value)}
                </p>
                <p className="text-xs text-[#2C2C2C]/60 mt-1">
                  公表{x.r.total}
                  {x.unit}
                  <span className="text-[#A08447] font-medium mx-1">安いほうから{x.r.rank}番目</span>
                </p>
              </>
            ) : (
              <p className="text-sm text-[#2C2C2C]/45 mt-2">公式サイトで確認できず</p>
            )}
          </div>
        ))}
      </div>

      {total !== null && t && (
        <>
          <p className="text-sm text-[#555] leading-relaxed mb-3">
            入会時の費用・月会費・成婚料の3つをすべて公表している
            <strong>{t.total}社</strong>について、
            <strong>1年で成婚退会した場合の概算（入会時の費用＋月会費×12ヶ月＋成婚料）</strong>
            を計算すると、{self.name}は <strong>{yen(total)}</strong>で
            <strong className="text-[#A08447]">安いほうから{t.rank}番目</strong>です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-lg border border-gray-100">
              <thead>
                <tr className="text-left text-xs text-[#2C2C2C]/50">
                  <th className="px-4 py-2 font-normal">順位</th>
                  <th className="px-4 py-2 font-normal">相談所</th>
                  <th className="px-4 py-2 font-normal text-right">1年の概算</th>
                </tr>
              </thead>
              <tbody>
                {neighbours.map((n) => {
                  const rank = t.rows.findIndex((r) => r.slug === n.slug) + 1;
                  const me = n.slug === slug;
                  return (
                    <tr key={n.slug} className={me ? "bg-[#A08447]/5" : ""}>
                      <td className="px-4 py-2 text-[#2C2C2C]/60">{rank}</td>
                      <td className="px-4 py-2">
                        {me ? (
                          <span className="font-medium text-[#2C2C2C]">{n.name}（このページ）</span>
                        ) : (
                          <Link href={`/review/${n.slug}/`} className="text-[#A08447] underline">
                            {n.name}
                          </Link>
                        )}
                      </td>
                      <td className="px-4 py-2 text-right tabular-nums">{yen(n.total)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-[#2C2C2C]/45 leading-relaxed mt-3">
            ※お見合い料・オプション費用・休会費は含みません。活動期間が1年より長いか短いかで総額は変わります。
            月会費やコースがレンジで示されている相談所は下限で計算しています。
          </p>
        </>
      )}

      <p className="text-sm mt-4">
        <Link href="/compare/" className="text-[#A08447] underline">
          → 24社の料金を一覧で比べる
        </Link>
        <span className="mx-2 text-gray-300">|</span>
        <Link href="/knowledge/cost/" className="text-[#A08447] underline">
          → 総額の考え方（費用ガイド）
        </Link>
      </p>
    </section>
  );
}
