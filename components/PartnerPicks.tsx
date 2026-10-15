import Link from "next/link";
import { pickPartners } from "@/data/partners";

/*
 * 相談所の個別ページに置く、提携先への導線（2026-10-08 新設・10-15 改訂）。
 *
 * ・掲載する数値は各社レビューの公式確認値の転記。新しい数字は作らない。
 * ・順位も点数も付けない（サイト方針）。並びは「同じブランド→県内に拠点あり→オンライン」。
 * ・PR表記を必ず出す。リンクは支給された計測URLをそのまま使う（文字列を変えない）。
 * ・未提携の相談所の外部リンクは従来どおり出さない。ここに出るのは提携先だけ。
 *
 * 10-15 改訂の理由: 店舗ページへの流入クエリは「◯◯ レビュー」「◯◯ 口コミ」が中心
 * （GSC 90日・/agency/ のクエリ表示の大半）。比べる材料を探している読者なので、
 * 各社の「口コミ・評判」レビューへの内部リンクを主ボタンにし、公式サイト（PR）は副ボタンにした。
 */
export default function PartnerPicks({
  pref,
  seed,
  prefName,
  agencyName,
  selfReviewHref,
}: {
  pref: string;
  seed: string;
  prefName: string;
  agencyName: string;
  selfReviewHref?: string;
}) {
  const picks = pickPartners(pref, seed, 3, selfReviewHref);
  if (picks.length === 0) return null;
  const hasSelf = picks.some((p) => p.self);

  return (
    <section className="mb-10">
      <h2 className="text-xl font-light mb-2 border-l-4 border-[#A08447] pl-4 tracking-widest">
        近くで使える提携相談所（{prefName}の店舗・オンライン）
      </h2>
      <p className="text-[11px] tracking-widest text-gray-400 mb-4 pl-4">
        PR（当サイトが提携している相談所です）
      </p>
      <p className="text-sm text-[#555] leading-relaxed mb-4">
        {hasSelf
          ? `「${agencyName}」と同じブランドの相談所と、${prefName}で利用できるほかの提携相談所です。`
          : `「${agencyName}」と比べる候補として、${prefName}に店舗がある、またはオンラインで全国から利用できる提携相談所です。`}
        各社の口コミ・評判（掲載媒体つき）と公式料金・1年総額は、レビューページにまとめています。
        料金はいずれも各社の公式サイトに掲載されている金額で、当サイトの推定は含みません。
      </p>

      <ul className="space-y-3">
        {picks.map((p) => (
          <li key={p.ad} className="bg-white rounded-lg border border-gray-100 p-4">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
              <span className="text-base font-medium text-[#2C2C2C]">{p.name}</span>
              <span className="text-[11px] rounded-full border border-[#E5DCCF] bg-[#FAF7F2] px-2 py-0.5 text-[#8A7239]">
                {p.self ? "この店舗と同じブランド" : p.local ? `${prefName}に拠点あり` : "オンラインで全国対応"}
              </span>
              <span className="text-[11px] text-[#2C2C2C]/50">{p.area}</span>
            </div>
            <p className="text-sm text-[#555] leading-relaxed mb-2">{p.point}</p>
            <p className="text-sm text-[#2C2C2C]/75 mb-1">
              <span className="text-[#2C2C2C]/45 mr-1">料金</span>
              {p.fee}
            </p>
            {p.caution && (
              <p className="text-xs text-[#A4453C] mb-2">※{p.caution}</p>
            )}
            <div className="flex flex-wrap items-center gap-3 mt-3">
              <Link
                href={p.reviewHref}
                className="inline-flex items-center justify-center rounded-lg bg-[#A08447] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
              >
                {p.name}の口コミ・評判と料金を見る
              </Link>
              <a
                href={p.clickUrl}
                target="_blank"
                rel="sponsored nofollow noopener"
                className="inline-flex items-center justify-center rounded-lg border border-[#A08447] px-5 py-2.5 text-sm font-medium text-[#A08447] hover:bg-[#FAF7F2] transition-colors"
              >
                公式サイトで無料相談（PR）
              </a>
            </div>
          </li>
        ))}
      </ul>

      <p className="text-[11px] text-[#2C2C2C]/45 leading-relaxed mt-3">
        掲載順に優劣はありません。料金は改定される場合があるため、最新の金額は各社公式サイトでご確認ください。
        <Link href="/compare/" className="ml-1 text-[#A08447] underline">大手結婚相談所の料金・特徴の比較</Link>
      </p>
    </section>
  );
}
