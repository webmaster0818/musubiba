import Link from "next/link";
import { brandStores } from "@/lib/agencies";

/*
 * ブランドの実店舗一覧(2026-10-01 新設)。
 * 数値はGoogleマップで取得した実測値で、当サイトによる評価ではない。
 * 評点の低い店舗を名指しで並べることはしない方針のため、口コミ件数の多い順に出す。
 */
export default function BrandStores({ href, brandName }: { href: string; brandName: string }) {
  const stores = brandStores(href, 30);
  if (stores.length === 0) return null;
  const rated = stores.filter((s) => typeof s.rating === "number");
  const avg = rated.length ? (rated.reduce((a, b) => a + (b.rating as number), 0) / rated.length).toFixed(2) : null;
  const min = rated.length ? Math.min(...rated.map((s) => s.rating as number)) : null;
  const max = rated.length ? Math.max(...rated.map((s) => s.rating as number)) : null;
  const reviews = stores.reduce((a, b) => a + b.count, 0);

  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-gray-900">{brandName}の店舗（Googleマップ実測）</h2>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        当サイトが収録している{brandName}の店舗は<strong>{stores.length}店舗</strong>、
        口コミは合計<strong>{reviews.toLocaleString()}件</strong>です。
        {avg && (
          <>
            {" "}評点の平均は<strong>{avg}</strong>、店舗ごとの幅は<strong>{min}〜{max}</strong>でした。
          </>
        )}
        数値はGoogleマップに表示されていた実数で、当サイトの評価ではありません。
      </p>
      {avg && min !== max && (
        <p className="mt-2 rounded-lg bg-gray-50 p-3 text-sm leading-relaxed text-gray-700">
          <strong>同じブランドでも店舗によって評点が{min}〜{max}まで違います。</strong>
          入会を決める前に、実際に通う店舗の評判を確認してください。店舗名をクリックすると所在地と口コミ件数が見られます。
        </p>
      )}
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {stores.map((s) => (
          <li key={s.slug} className="rounded-lg border border-gray-200 px-3 py-2 text-sm">
            <Link href={`/agency/${encodeURIComponent(s.slug)}/`} className="font-medium text-purple-700 hover:underline">
              {s.name}
            </Link>
            <span className="ml-2 text-xs text-gray-500">
              {s.prefName}／評点{s.rating ?? "－"}・口コミ{s.count}件
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs text-gray-500">
        ※ 全店舗を網羅したものではなく、当サイトが収録した範囲です。評点は投稿数が少ないほど振れやすく、店舗の良し悪しをそのまま表すものではありません。
      </p>
    </section>
  );
}
