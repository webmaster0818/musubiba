import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AgencyIndex from "@/components/AgencyIndex";

export const metadata: Metadata = {
  title: "静岡の結婚相談所一覧【98件調査・Google口コミ実データ】エリア別に比較",
  description:
    "静岡の実在する結婚相談所98件を、Googleマップの実データ（2026年9月8日取得）にもとづいて調査し、静岡市・浜松・沼津など主要エリア別に掲載しています。式場・指輪店等の別業態は、調査により除外しています。口コミ3件以上の相談所は、詳細ページも掲載しています。",
  alternates: { canonical: "https://mu-su-bi-ba.com/area/shizuoka/" },
};

export default function AreaPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumb items={[{ name: "静岡の結婚相談所" }]} />
      <h1 className="text-2xl sm:text-3xl font-bold text-[#2C2C2C] mt-4 mb-4">静岡の結婚相談所一覧【98件調査・Google口コミ実データ】</h1>
      <AgencyIndex pref="shizuoka" prefName="静岡" />
      <div className="bg-[#FAF7F2] border border-[#E5DCCF] rounded-xl p-5 text-sm mt-4">
        <p className="font-medium text-[#A08447] mb-2 tracking-wider">はじめての方へ</p>
        <p className="leading-relaxed text-[#555]">
          大手(オーネット・ツヴァイ・IBJメンバーズ等)の費用・仕組みは、<Link href="/compare/" className="underline">当サイトの比較レビュー</Link>でご確認いただけます。
          個人経営の仲人型相談所については、掲載しているGoogleマップのリンクから雰囲気や口コミをご確認ください。
          相談所選びの基本は、<Link href="/knowledge/how-to-choose/" className="underline">選び方ガイド</Link>にまとめています。
        </p>
      </div>
    </main>
  );
}
