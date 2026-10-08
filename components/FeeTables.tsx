import Link from "next/link";
import { FEES, FEE_SURVEY_NOTE, oneYearTotal } from "@/data/fees";

const yen = (n: number) => n.toLocaleString() + "円";
const med = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b);
  return s.length % 2 ? s[(s.length - 1) / 2] : Math.round((s[s.length / 2 - 1] + s[s.length / 2]) / 2);
};

/*
 * 費用ガイド用の実データ表（2026-10-08 新設）。
 * data/fees.ts（＝/compare/ と同じ公式確認値）から機械的に生成する。
 * 「おおよそ10万〜25万円程度」のような推定レンジは置かず、公表値だけで書く。
 */
export function FeeAllTable() {
  const rows = [...FEES].sort((a, b) => (a.monthly ?? 9e9) - (b.monthly ?? 9e9));
  const monthlies = FEES.filter((f) => f.monthly !== null).map((f) => f.monthly!);
  const successes = FEES.filter((f) => f.success !== null).map((f) => f.success!);
  const zero = successes.filter((v) => v === 0).length;

  return (
    <>
      <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
        当サイトが各公式サイトを実査した<strong>24社</strong>の料金です。
        月会費を公表していたのは<strong>{monthlies.length}社</strong>で、
        中央値は<strong>{yen(med(monthlies))}</strong>、
        もっとも安い{yen(Math.min(...monthlies))}ともっとも高い{yen(Math.max(...monthlies))}で
        <strong>約{(Math.max(...monthlies) / Math.min(...monthlies)).toFixed(1)}倍</strong>の開きがあります。
        成婚料を公表していたのは{successes.length}社で、そのうち<strong>{zero}社が「成婚料なし」</strong>でした。
      </p>
      <div className="overflow-x-auto mb-3">
        <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden bg-white">
          <thead>
            <tr className="bg-[#F5F0EB] text-left">
              <th className="px-3 py-3 font-medium">相談所</th>
              <th className="px-3 py-3 font-medium">タイプ</th>
              <th className="px-3 py-3 font-medium">月会費</th>
              <th className="px-3 py-3 font-medium">入会時・成婚料</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((f) => (
              <tr key={f.slug} className="border-t border-gray-50">
                <td className="px-3 py-3">
                  <Link href={`/review/${f.slug}/`} className="text-[#A08447] underline">{f.name}</Link>
                </td>
                <td className="px-3 py-3 text-xs text-[#2C2C2C]/60">{f.type}</td>
                <td className="px-3 py-3 whitespace-nowrap">{f.monthlyText}</td>
                <td className="px-3 py-3 text-xs">{f.initialText}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">{FEE_SURVEY_NOTE}「—」は公式サイトで金額を確認できなかった項目です。料金は改定される場合があるため、申込前に各公式サイトでご確認ください。</p>
    </>
  );
}

export function FeeTotalTable() {
  const rows = FEES.map((f) => ({ f, total: oneYearTotal(f.slug) }))
    .filter((r): r is { f: typeof FEES[number]; total: number } => r.total !== null)
    .sort((a, b) => a.total - b.total);
  const totals = rows.map((r) => r.total);

  return (
    <>
      <p className="text-sm text-[#2C2C2C]/80 leading-relaxed mb-4">
        「入会時の費用」「月会費」「成婚料」の3つをすべて公表しているのは24社中<strong>{rows.length}社</strong>でした。
        その{rows.length}社について<strong>1年で成婚退会した場合（入会時の費用＋月会費×12ヶ月＋成婚料）</strong>を計算すると、
        もっとも安い{yen(Math.min(...totals))}からもっとも高い{yen(Math.max(...totals))}まで
        <strong>{yen(Math.max(...totals) - Math.min(...totals))}の差</strong>がありました。中央値は<strong>{yen(med(totals))}</strong>です。
      </p>
      <div className="overflow-x-auto mb-3">
        <table className="w-full text-sm border border-gray-100 rounded-lg overflow-hidden bg-white">
          <thead>
            <tr className="bg-[#F5F0EB] text-left">
              <th className="px-3 py-3 font-medium">順位</th>
              <th className="px-3 py-3 font-medium">相談所</th>
              <th className="px-3 py-3 font-medium text-right">1年の概算</th>
              <th className="px-3 py-3 font-medium">内訳</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.f.slug} className="border-t border-gray-50">
                <td className="px-3 py-3 text-[#2C2C2C]/60">{i + 1}</td>
                <td className="px-3 py-3">
                  <Link href={`/review/${r.f.slug}/`} className="text-[#A08447] underline">{r.f.name}</Link>
                </td>
                <td className="px-3 py-3 text-right whitespace-nowrap tabular-nums font-medium">{yen(r.total)}</td>
                <td className="px-3 py-3 text-xs text-[#2C2C2C]/60 whitespace-nowrap">
                  入会{yen(r.f.initial!)}＋月{yen(r.f.monthly!)}×12＋成婚{r.f.success === 0 ? "なし" : yen(r.f.success!)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-[#2C2C2C]/50 leading-relaxed">
        ※お見合い料・オプション費用・休会費は含みません。レンジで示されている項目は下限で計算しています。
        活動期間が1年より長いか短いかで総額は変わるため、月会費の比重が大きい相談所ほど期間の影響を受けます。
      </p>
    </>
  );
}
