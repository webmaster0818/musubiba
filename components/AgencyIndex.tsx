// エリア広域版の相談所一覧(data-agencies-{pref}.json)。個別ページへの内部リンクハブ。
// 口コミ3件以上=個別ページあり/3件未満=名前+Gマップリンクのみ(薄いページを作らない方針)。
import Link from "next/link";
import { loadAgencyDb, indexableAgencies, findBrand, shortAddress, AREA_LABELS } from "@/lib/agencies";

export default function AgencyIndex({ pref, prefName }: { pref: string; prefName: string }) {
  const db = loadAgencyDb(pref);
  if (!db) return null;
  const main = indexableAgencies(db);
  const minor = db.agencies.filter((a) => (a.count || 0) < 3);

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${prefName}の結婚相談所一覧`,
    numberOfItems: main.length,
    itemListElement: main.slice(0, 50).map((a, i) => ({ "@type": "ListItem", position: i + 1, name: a.name })),
  };

  // エリア別グルーピング(primary area)
  const byArea: Record<string, typeof main> = {};
  for (const a of main) {
    const k = a.areas[0];
    (byArea[k] ||= []).push(a);
  }

  return (
    <section className="my-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <p className="text-sm text-[#555] leading-relaxed mb-2">
        {prefName}の実在する結婚相談所を、<strong>Googleマップの実データ(評点・口コミ件数)</strong>をもとに掲載しています(
        {db.surveyedAt}取得・主要{Object.keys(byArea).length}エリアで計{db.agencies.length}件を調査・口コミ3件以上の{main.length}件は詳細ページあり)。
        評点・件数は当サイトの創作ではなく実数です。未提携の相談所へのリンクはGoogleマップです。
      </p>
      <p className="text-xs text-[#999] mb-8">出典: Googleマップ(Google Places API・{db.surveyedAt}時点)。掲載順=口コミ件数順。評点・件数はその後変動する場合があります。</p>

      {Object.entries(byArea).map(([areaKey, list]) => (
        <div key={areaKey} className="mb-10">
          <h2 className="text-xl font-bold text-[#2C2C2C] mb-4 border-l-4 border-[#8B7355] pl-3">{AREA_LABELS[areaKey] || areaKey}エリア({list.length}件)</h2>
          <div className="space-y-3">
            {list.map((a) => {
              const brand = findBrand(a.name);
              return (
                <div key={a.slug} className="bg-white rounded-xl border border-gray-100 px-5 py-4 text-sm">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <Link href={`/agency/${encodeURIComponent(a.slug)}/`} className="font-bold text-[#8B7355] underline text-base">{a.name}</Link>
                    <span className="text-[#2C2C2C]/70">評点{a.rating ?? "－"}・口コミ{a.count}件</span>
                  </div>
                  <p className="text-xs text-[#2C2C2C]/50 mt-1">{shortAddress(a.address)}</p>
                  <p className="text-xs mt-1.5">
                    <Link href={`/agency/${encodeURIComponent(a.slug)}/`} className="text-[#8B7355] underline">詳細データを見る</Link>
                    {a.mapsUri && (
                      <>
                        <span className="mx-2 text-gray-300">|</span>
                        <a href={a.mapsUri} target="_blank" rel="nofollow noopener noreferrer" className="text-[#8B7355] underline">Googleマップ</a>
                      </>
                    )}
                    {brand && (
                      <>
                        <span className="mx-2 text-gray-300">|</span>
                        <Link href={brand.href} className="text-[#8B7355] underline">{brand.label}</Link>
                      </>
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {minor.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-[#2C2C2C] mb-3">その他の相談所(口コミ3件未満・{minor.length}件)</h2>
          <p className="text-xs text-[#999] mb-3">口コミ件数が少なく実データでの比較が難しいため、名称とGoogleマップへのリンクのみ掲載しています。</p>
          <ul className="text-sm space-y-1.5">
            {minor.map((a, i) => (
              <li key={i} className="flex flex-wrap gap-x-2">
                <span className="text-[#2C2C2C]/80">{a.name}</span>
                {a.mapsUri && <a href={a.mapsUri} target="_blank" rel="nofollow noopener noreferrer" className="text-[#8B7355] underline text-xs">Googleマップ</a>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
