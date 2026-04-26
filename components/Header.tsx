"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "ランキング" },
  { href: "/#area", label: "エリア別" },
  { href: "/#type", label: "タイプ別" },
  { href: "/faq/", label: "お役立ち" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#1E1B4B] text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold tracking-tight">
          結婚相談所<span className="text-[#E11D48]">びより</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium hover:text-[#E11D48] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#1E1B4B] border-t border-white/10 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block px-6 py-3 text-sm hover:text-[#E11D48] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
