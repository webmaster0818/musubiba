import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AgencyIndex from "@/components/AgencyIndex";

export const metadata: Metadata = {
  title: "神戸・兵庫の結婚相談所一覧【125件調査・Google口コミ実データ】エリア別に比較",
  description:
    "神戸・兵庫の実在する結婚相談所125件をGoogleマップの実データ(評点・口コミ件数・2026年9月1日取得)で調査し、三宮・元町・神戸市内・姫路・西宮・尼崎など主要エリア別に掲載。式場・ジュエリー店等の別業態は業種データで除外済み。口コミ3件以上の相談所は評点・所在地の詳細ページつき。評点は実数のみで創作はありません。",
  alternates: { canonical: "https://mu-su-bi-ba.com/area/kobe/" },
};

export default function AreaPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumb items={[{ name: "神戸・兵庫の結婚相談所" }]} />
      <h1 className="text-2xl sm:text-3xl font-bold text-[#2C2C2C] mt-4 mb-4">神戸・兵庫の結婚相談所一覧【125件調査・Google口コミ実データ】</h1>
      <AgencyIndex pref="hyogo" prefName="兵庫" />
      <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-5 text-sm mt-4">
        <p className="font-medium text-[#8B7355] mb-2 tracking-wider">はじめての方へ</p>
        <p className="leading-relaxed text-[#555]">
          大手(オーネット・ツヴァイ・IBJメンバーズ等)は<Link href="/compare/" className="underline">当サイトの比較レビュー</Link>で費用・仕組みを確認できます。
          個人経営の仲人型相談所は掲載のGoogleマップから雰囲気・口コミをご確認ください。
          相談所選びの基本は<Link href="/knowledge/how-to-choose/" className="underline">選び方ガイド</Link>にまとめています。
        </p>
      </div>
    </main>
  );
}
