import Link from "next/link";

// 2026-09-22: 架空の監修者(個人名・資格・経歴つき)を掲載していたため全面差し替え。
//   実在しない人物を監修者として表示するのは編集方針(創作しない/確認日を明記する)に反するため、
//   実体である「ムスビバ編集部」(組織)名義に統一した。
// 2026-10-02: 著者表記がレビュー24ページで二重になっていた(本コンポーネント＋各ページ直書きの
//   「この記事を書いた人」ブロック)。直書き側を18ページから削除し、本コンポーネントに一本化。
//   直書き側にしか無かった運営の想い・編集部の背景はこちらへ移した。
//   なお直書き側にあった「独自の基準で評価しています」という表現は引き継いでいない。
//   当サイトは点数付けやランキングを行わない方針で、同じ枠内の「口コミの創作なし」と矛盾するため。
export default function AuthorBox() {
  return (
    <div className="border border-gray-200 bg-[#FAFAF8] rounded-lg p-6 mt-10">
      <p className="text-xs font-medium text-[#A08447] tracking-wider mb-4">
        この記事を書いた人
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <img
          src="/editor-team.png"
          alt="ムスビバ編集部"
          className="w-20 h-20 rounded-xl object-cover shrink-0"
        />
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
          <p className="mt-3 text-sm text-[#2C2C2C]/60 leading-relaxed">
            編集部メンバーの中には、実際に結婚相談所を利用して入籍し、結婚生活6年目を迎えたメンバーも在籍しています。
          </p>
          <p className="mt-2 text-sm text-[#2C2C2C]/60 leading-relaxed">
            「お見合い文化がなくなった日本で、結婚に悩む人を一人でも多く救いたい」「マッチングアプリで出会えても、本気の出会いにつながらない人の力になりたい」という想いで運営しています。
          </p>
        </div>
      </div>
    </div>
  );
}
