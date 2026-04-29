import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
import Header from "@/components/Header";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "結婚相談所おすすめランキング比較 | ムスビバ",
  description:
    "厳選15社の結婚相談所を徹底比較。料金・成婚率・会員数・サポート体制を分かりやすくランキング。あなたにぴったりの結婚相談所が見つかります。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Header */}
        <Header />

        {/* PR notice */}
        <div className="bg-[#FFFBF5] border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-1 text-right">
            <span className="text-xs text-gray-400">PRを含みます</span>
          </div>
        </div>

        {/* Main */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-[#134E4A] text-white/70 mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-white mb-3 text-sm">ムスビバ</h4>
                <ul className="space-y-2 text-xs">
                  <li><Link href="/" className="hover:text-[#5EEAD4]">トップページ</Link></li>
                  <li><Link href="/faq/" className="hover:text-[#5EEAD4]">よくある質問</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-3 text-sm">ランキング</h4>
                <ul className="space-y-2 text-xs">
                  <li><Link href="/review/zwei/" className="hover:text-[#5EEAD4]">ツヴァイ</Link></li>
                  <li><Link href="/review/onet/" className="hover:text-[#5EEAD4]">オーネット</Link></li>
                  <li><Link href="/review/partner-agent/" className="hover:text-[#5EEAD4]">パートナーエージェント</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-3 text-sm">サービス</h4>
                <ul className="space-y-2 text-xs">
                  <li><Link href="/review/ibj/" className="hover:text-[#5EEAD4]">IBJメンバーズ</Link></li>
                  <li><Link href="/review/zexy/" className="hover:text-[#5EEAD4]">ゼクシィ縁結びエージェント</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-3 text-sm">情報</h4>
                <ul className="space-y-2 text-xs">
                  <li><Link href="/faq/" className="hover:text-[#5EEAD4]">FAQ</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-6 text-center text-xs">
              <p>&copy; 2024 ムスビバ All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
