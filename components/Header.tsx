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
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-medium tracking-widest text-[#2C2C2C]">
          <span className="text-[#8B7355]">ムスビバ</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-light text-[#2C2C2C]/70 hover:text-[#8B7355] transition-colors tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-[#2C2C2C]/70"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block px-6 py-3 text-sm text-[#2C2C2C]/70 hover:text-[#8B7355] hover:bg-[#FAFAF8] transition-colors tracking-wider"
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
