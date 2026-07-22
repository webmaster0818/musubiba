import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AreaAgencyList from "@/components/AreaAgencyList";

export const metadata: Metadata = {
  title: "福岡の結婚相談所一覧｜Google口コミ実データで比較【2026年】",
  description:
    "東京の実在する結婚相談所を、Googleマップの実データ（評点・口コミ件数）をもとに口コミ件数順で紹介。天神・博多・薬院など主要エリアの相談所を、Googleマップの口コミと公式サイトへのリンク付きで比較できます。",
  alternates: { canonical: "https://mu-su-bi-ba.com/area/fukuoka/" },
};

export default function AreaPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumb items={[{ name: "福岡の結婚相談所" }]} />
      <h1 className="text-2xl sm:text-3xl font-bold text-[#2C2C2C] mt-4 mb-4">福岡の結婚相談所一覧【Google口コミ実データ】</h1>
      <AreaAgencyList area="fukuoka" areaName="福岡" />
    </main>
  );
}
