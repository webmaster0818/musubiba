import Link from "next/link";

// 2026-09-22: 架空の監修者(個人名・資格・経歴つき)を掲載していたため全面差し替え。
// 実在しない人物を監修者として表示するのは、当サイトの編集方針(創作しない/確認日を明記する)に反するため、
// 実体である「ムスビバ編集部」(組織)名義に統一した。about・editorial-policy の記載とも整合。
export default function AuthorBox() {
  return (
    <div className="border border-gray-200 bg-[#FAFAF8] rounded-lg p-6 mt-10">
      <p className="text-xs font-medium text-[#A08447] tracking-wider mb-4">
        この記事の作成・更新
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-16 h-16 rounded-full bg-[#A08447]/10 border-2 border-[#A08447] flex items-center justify-center text-[#A08447] text-sm font-bold shrink-0 text-center leading-tight">
          ムスビバ
          <br />
          編集部
        </div>
        <div className="flex-1">
          <p className="text-[#2C2C2C] font-bold text-base mb-1">ムスビバ編集部</p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-[10px] px-2 py-0.5 rounded-full border border-[#A08447] text-[#A08447]">
              公式一次情報のみを掲載
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full border border-[#A08447] text-[#A08447]">
              確認日を明記
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full border border-[#A08447] text-[#A08447]">
              口コミの創作なし
            </span>
          </div>
          <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">
            結婚相談所の料金・サービス条件を各社公式サイトで継続的に調査している編集部です。料金や成婚率などの数値は
            <strong>確認した日付とあわせて</strong>掲載し、公式に記載が見つからない項目は「非公表」「確認できず」と書きます。
            推測で数字を補ったり、体験談を創作したりはしません。詳しくは
            <Link href="/editorial-policy/" className="text-[#A08447] underline">編集方針・掲載基準</Link>
            をご覧ください。
          </p>
        </div>
      </div>
    </div>
  );
}
