import Link from "next/link";
import { pickPartners } from "@/data/partners";

/*
 * 相談所の個別ページに置く、提携先への導線（2026-10-08 新設）。
 *
 * ・掲載する数値は各社レビューの公式確認値の転記。新しい数字は作らない。
 * ・順位も点数も付けない（サイト方針）。並びはページごとに散らすだけ。
 * ・PR表記を必ず出す。リンクは支給された計測URLをそのまま使う（文字列を変えない）。
 * ・未提携の相談所の外部リンクは従来どおり出さない。ここに出るのは提携先だけ。
 */
export default function PartnerPicks({
  pref,
  seed,
  prefName,
}: {
  pref: string;
  seed: string;
  prefName: string;
}) {
  const picks = pickPartners(pref, seed, 3);
  if (picks.length === 0) return null;

  return (
    <section className="mb-10">
      <h2 className="text-xl font-light mb-2 border-l-4 border-[#A08447] pl-4 tracking-widest">
        {prefName}で無料相談を受け付けている相談所
      </h2>
      <p className="text-[11px] tracking-widest text-gray-400 mb-4 pl-4">
        PR（当サイトが提携している相談所です）
      </p>
      <p className="text-sm text-[#555] leading-relaxed mb-4">
        結婚相談所は、入会前の無料相談で「どんな人が登録しているか」「総額でいくらかかるか」を確認してから決めるのが基本です。
        料金はいずれも各社の公式サイトに掲載されている金額で、当サイトの推定は含みません。
      </p>

      <ul className="space-y-3">
        {picks.map((p) => (
          <li key={p.ad} className="bg-white rounded-lg border border-gray-100 p-4">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
              <span className="text-base font-medium text-[#2C2C2C]">{p.name}</span>
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
              <a
                href={p.clickUrl}
                target="_blank"
                rel="sponsored nofollow noopener"
                className="inline-flex items-center justify-center rounded-lg bg-[#A08447] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity"
              >
                公式サイトで無料相談（PR）
              </a>
              <Link href={p.reviewHref} className="text-sm text-[#A08447] underline">
                {p.name}の詳細レビュー
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <p className="text-[11px] text-[#2C2C2C]/45 leading-relaxed mt-3">
        掲載順に優劣はありません。料金は改定される場合があるため、最新の金額は各社公式サイトでご確認ください。
      </p>
    </section>
  );
}
