import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AgencyIndex from "@/components/AgencyIndex";

export const metadata: Metadata = {
  title: "大阪の結婚相談所一覧【約200件調査・Google口コミ実データ】エリア別に比較",
  description:
    "大阪の実在する結婚相談所約200件をGoogleマップの実データ(評点・口コミ件数・2026年8月19日取得)で調査し、梅田・難波・心斎橋・天王寺・堺・豊中・高槻など主要エリア別に掲載。式場・ジュエリー店等の別業態は業種データで除外済み。口コミ3件以上の相談所は評点・所在地の詳細ページつき。評点は実数のみで創作はありません。",
  alternates: { canonical: "https://mu-su-bi-ba.com/area/osaka/" },
};

export default function AreaPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumb items={[{ name: "大阪の結婚相談所" }]} />
      <h1 className="text-2xl sm:text-3xl font-bold text-[#2C2C2C] mt-4 mb-4">大阪の結婚相談所一覧【約200件調査・Google口コミ実データ】</h1>
      <AgencyIndex pref="osaka" prefName="大阪" />
      <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-5 text-sm mt-4">
        <p className="font-medium text-[#8B7355] mb-2 tracking-wider">はじめての方へ</p>
        <p className="text-[#2C2C2C]/70 leading-relaxed mb-2">
          結婚相談所は「無料相談→入会(独身証明書等)→お見合い→交際→成婚退会」の流れで進み、費用は入会時・毎月・成婚退会時の3タイミングで発生するのが標準形です。
        </p>
        <p>
          <Link href="/knowledge/flow/" className="text-[#8B7355] underline">→ 入会から成婚までの流れ</Link>
          <span className="mx-2 text-gray-300">|</span>
          <Link href="/knowledge/cost/" className="text-[#8B7355] underline">→ 料金相場の考え方</Link>
          <span className="mx-2 text-gray-300">|</span>
          <Link href="/compare/" className="text-[#8B7355] underline">→ 大手の比較</Link>
        </p>
      </div>
    </main>
  );
}
