'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function FloatingCTA() {
  const pathname = usePathname();

  // Hide on concierge page
  if (pathname === '/concierge' || pathname === '/concierge/') {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:bottom-4 sm:left-4 sm:right-4">
      <div className="mx-auto max-w-2xl">
        <div className="bg-[#333333]/95 backdrop-blur-sm border-t border-[#8B7355]/30 sm:border sm:rounded-2xl shadow-2xl px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-white/90 text-xs sm:text-sm font-light tracking-wider truncate">
                どの相談所が合うかわからない？
              </p>
            </div>
            <Link
              href="/concierge/"
              className="shrink-0 inline-flex items-center gap-1.5 bg-[#8B7355] hover:bg-[#7A6548] text-white text-xs sm:text-sm font-normal py-2.5 px-5 sm:px-6 rounded-full transition-colors tracking-widest shadow-md"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              無料診断する
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
