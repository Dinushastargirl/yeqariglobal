"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "Approach", href: "/approach" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 w-full bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#121110]/8 transition-all duration-300 ${isScrolled ? "py-3" : "py-5"}`}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-8 flex items-center justify-between">
          
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 text-lg font-extrabold tracking-tight text-[#121110]">
            <div className="w-7 h-7 rounded-md overflow-hidden bg-[#120A24] flex items-center justify-center shrink-0">
              <img src="/assets/yeqari global.jpg" alt="Yeqari Logo" className="w-full h-full object-cover" />
            </div>
            <span>YEQARI GLOBAL</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#121110] relative py-1 ${
                    isActive ? "text-[#121110] font-semibold" : "text-[#57544F]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#121110] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border border-[#121110]/20 text-[#121110] hover:bg-[#121110] hover:text-[#FAF9F6] transition-all"
            >
              Let&apos;s talk <span className="text-[11px]">↗</span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 text-[#121110]"
              aria-label="Toggle Navigation"
            >
              <span className={`w-5 h-[1.5px] bg-[#121110] transition-transform ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`w-5 h-[1.5px] bg-[#121110] transition-transform ${mobileOpen ? "-rotate-45 -translate-y-1" : ""}`} />
            </button>
          </div>

        </div>
      </header>

      {/* Fullscreen Mobile Navigation */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF9F6] flex flex-col justify-between p-8 pt-28 md:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-3xl font-bold tracking-tight text-[#121110] flex items-baseline gap-4"
              >
                <span className="font-mono text-xs text-[#6D28D9]">0{idx + 1}</span>
                {link.name}
              </Link>
            ))}
          </div>

          <div className="border-t border-[#121110]/10 pt-6 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#848079]">BUILT FOR MORE.</span>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold bg-[#121110] text-[#FAF9F6] py-3.5 rounded-full"
            >
              Start a conversation ↗
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
