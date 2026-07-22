// エリア別 結婚相談所一覧（Googleマップ実データ・捏造ゼロ）
// 評点・件数・住所はGoogle Places APIの実数のみ。提携ブランドは自社レビューへ、未提携はGoogleマップURLへ。
import Link from "next/link";
import fs from "node:fs";
import path from "node:path";

type Agency = { name: string; rating?: number; count: number; address: string; mapsUri?: string; website?: string };

// 自社レビューがある大手ブランドを店名から判定（部分一致）
const BRAND_REVIEWS: { match: RegExp; href: string; label: string }[] = [
  { match: /オーネット|O-net|onet/i, href: "/review/onet/", label: "オーネットの詳細レビュー" },
  { match: /ツヴァイ|zwei/i, href: "/review/zwei/", label: "ツヴァイの詳細レビュー" },
  { match: /パートナーエージェント|partner ?agent/i, href: "/review/partner-agent/", label: "パートナーエージェントの詳細レビュー" },
  { match: /サンマリエ|sunmarie/i, href: "/review/sunmarie/", label: "サンマリエの詳細レビュー" },
  { match: /フィオーレ|fiore/i, href: "/review/fiore/", label: "フィオーレの詳細レビュー" },
  { match: /エン婚活|en-?konkatsu/i, href: "/review/en-konkatsu/", label: "エン婚活エージェントの詳細レビュー" },
  { match: /リングベル|ringbell/i, href: "/review/ringbell/", label: "リングベルの詳細レビュー" },
  { match: /ムスベル|musbell/i, href: "/review/musbell/", label: "ムスベルの詳細レビュー" },
  { match: /サンマーレ|マーズカフェ|mars ?cafe/i, href: "/review/mars-cafe/", label: "Mars cafeの詳細レビュー" },
];

export default function AreaAgencyList({ area, areaName }: { area: string; areaName: string }) {
  const raw = JSON.parse(fs.readFileSync(path.join(process.cwd(), "data-area-agencies.json"), "utf-8"));
  const all: Agency[] = raw[area] || [];
  const list = all.filter((a) => a.count >= 3).slice(0, 30);
  const surveyedAt: string = raw.surveyedAt;

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${areaName}の結婚相談所一覧`,
    numberOfItems: list.length,
    itemListElement: list.map((a, i) => ({ "@type": "ListItem", position: i + 1, name: a.name })),
  };

  return (
    <section className="my-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <h2 className="text-2xl font-bold mb-3 text-[#2C2C2C]">{areaName}の結婚相談所一覧【Google口コミ実データ】</h2>
      <p className="text-sm text-[#555] leading-relaxed mb-2">
        {areaName}の実在する結婚相談所を、<strong>Googleマップの実データ（評点・口コミ件数）</strong>をもとに口コミ件数順で掲載しています（{surveyedAt}取得・全{all.length}件を調査し口コミ3件以上の{list.length}件を掲載）。評点・件数は当サイトの創作ではなく実数です。料金・サービス内容は各相談所の公式サイト・無料相談でご確認ください。
      </p>
      <p className="text-xs text-[#999] mb-8">出典: Google マップ（Google Places API・{surveyedAt}時点）。掲載順＝口コミ件数順。評点・件数はその後変動する場合があります。</p>

      <div className="space-y-4">
        {list.map((a, i) => {
          const b = BRAND_REVIEWS.find((x) => x.match.test(a.name));
          return (
            <div key={a.name + i} className="bg-white rounded-xl border border-[#E8E0D5] p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div className="min-w-0">
                  <p className="text-xs text-[#B0A48F] font-bold">#{i + 1}</p>
                  <h3 className="font-bold text-lg text-[#2C2C2C] leading-snug">{a.name}</h3>
                </div>
                {typeof a.rating === "number" && (
                  <div className="shrink-0 text-right">
                    <p className="text-[#C9A227] font-extrabold text-lg">★ {a.rating.toFixed(1)}</p>
                    <p className="text-xs text-[#999]">Google口コミ {a.count}件</p>
                  </div>
                )}
              </div>
              <p className="text-sm text-[#555] mt-2">{a.address}</p>
              <div className="flex flex-wrap gap-3 mt-3 text-sm font-bold">
                {b && (
                  <Link href={b.href} className="text-[#8B7355] underline underline-offset-2">
                    {b.label}
                  </Link>
                )}
                {a.mapsUri && (
                  <a href={a.mapsUri} target="_blank" rel="noopener noreferrer nofollow" className="text-[#6B8E7F] underline underline-offset-2">
                    Googleマップで口コミを見る
                  </a>
                )}
                {!b && a.website && (
                  <a href={a.website} target="_blank" rel="noopener noreferrer nofollow" className="text-[#777] underline underline-offset-2">
                    公式サイト
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 bg-[#F5F0EB] rounded-xl p-6 border border-[#E8E0D5]">
        <p className="font-bold text-[#2C2C2C] mb-2">結婚相談所選びに迷ったら</p>
        <p className="text-sm text-[#555] leading-relaxed">
          大手相談所は当サイトで料金・サービスを詳しく解説しています。
          <Link href="/compare/cheap/" className="text-[#8B7355] underline mx-1">料金の安い相談所ランキング</Link>や
          <Link href="/faq/" className="text-[#8B7355] underline mx-1">よくある質問</Link>もあわせてご覧ください。
        </p>
      </div>
    </section>
  );
}
