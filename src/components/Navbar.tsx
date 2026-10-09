"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { divisionLists } from "@/data/servicesData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
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
    setServicesDropdown(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesDropdown(false);
    }, 180);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 transition-all duration-300 ${
          isScrolled ? "py-2.5 shadow-sm" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* 1. Brand: YEQARI */}
          <Link href="/" className="flex items-center gap-3 group text-decoration-none">
            <div className="w-9 h-9 rounded-xl overflow-hidden bg-[#0D0422] p-1 flex items-center justify-center shrink-0 shadow-md group-hover:rotate-6 transition-transform duration-300">
              <img
                src="/assets/yekari-symbol-transparent.png"
                alt="YEQARI Symbol"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl sm:text-2xl font-bold font-['Outfit'] tracking-tight text-slate-900 group-hover:text-[#7C3AED] transition-colors">
              YEQARI<span className="text-[#7C3AED]">.</span>
            </span>
          </Link>

          {/* Desktop Navigation (Surge Global Architecture with YEQARI Brand) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* 1. DESIGN */}
            <Link
              href="/services#design"
              className={`px-3.5 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                pathname === "/services" && typeof window !== "undefined" && window.location.hash === "#design"
                  ? "text-[#7C3AED] bg-purple-50"
                  : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
              }`}
            >
              DESIGN
            </Link>

            {/* 2. MARKETING */}
            <Link
              href="/services#marketing"
              className="px-3.5 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-all"
            >
              MARKETING
            </Link>

            {/* 3. TECHNOLOGY */}
            <Link
              href="/services#technology"
              className="px-3.5 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-all"
            >
              TECHNOLOGY
            </Link>

            {/* 4. NOT ANOTHER STARTUP — Dedicated Prominent Headline in Navbar */}
            <Link
              href="/startup"
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center gap-2 border shadow-sm ${
                pathname === "/startup"
                  ? "bg-gradient-to-r from-[#7C3AED] to-[#D946EF] text-white border-transparent shadow-purple-500/30 shadow-lg scale-105"
                  : "bg-gradient-to-r from-purple-50 to-fuchsia-50 text-[#7C3AED] border-purple-200/80 hover:border-purple-400 hover:shadow-md hover:scale-[1.03]"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D946EF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D946EF]"></span>
              </span>
              <span className="font-extrabold bg-gradient-to-r from-[#7C3AED] to-[#D946EF] bg-clip-text text-transparent">
                NOT ANOTHER STARTUP
              </span>
            </Link>

            {/* 5. EXPERTISE */}
            <Link
              href="/services"
              className="px-3.5 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-all"
            >
              EXPERTISE
            </Link>

            {/* 6. WORK */}
            <Link
              href="/work"
              className={`px-3.5 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                pathname.startsWith("/work") || pathname.startsWith("/portfolio")
                  ? "text-[#7C3AED] bg-purple-50 font-bold"
                  : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
              }`}
            >
              WORK
            </Link>

            {/* 7. ABOUT */}
            <Link
              href="/about"
              className={`px-3.5 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                pathname === "/about"
                  ? "text-slate-950 bg-slate-100 font-bold"
                  : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
              }`}
            >
              ABOUT
            </Link>

          </nav>

          {/* Desktop Right CTA: Speak with Experts */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#0D0422] to-[#2B075C] hover:from-[#7C3AED] hover:to-[#D946EF] text-white text-xs font-mono font-bold tracking-wider uppercase shadow-md transition-all hover:scale-[1.03] flex items-center gap-2 group"
            >
              <span>Speak to our experts</span>
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl lg:hidden pt-24 px-6 pb-12 overflow-y-auto">
          <div className="flex flex-col gap-4 max-w-md mx-auto">
            
            <Link
              href="/services#design"
              className="py-3 px-4 rounded-xl text-base font-bold text-slate-900 hover:bg-slate-100 flex items-center justify-between"
            >
              <span>Design</span>
              <span className="text-xs font-mono text-[#7C3AED]">Capabilities →</span>
            </Link>

            <Link
              href="/services#marketing"
              className="py-3 px-4 rounded-xl text-base font-bold text-slate-900 hover:bg-slate-100 flex items-center justify-between"
            >
              <span>Marketing</span>
              <span className="text-xs font-mono text-[#7C3AED]">Growth Engine →</span>
            </Link>

            <Link
              href="/services#technology"
              className="py-3 px-4 rounded-xl text-base font-bold text-slate-900 hover:bg-slate-100 flex items-center justify-between"
            >
              <span>Technology</span>
              <span className="text-xs font-mono text-[#7C3AED]">Engineering →</span>
            </Link>

            {/* NOT ANOTHER STARTUP */}
            <Link
              href="/startup"
              className="py-3.5 px-4 rounded-2xl text-base font-extrabold text-[#7C3AED] bg-gradient-to-r from-purple-50 to-fuchsia-50 border border-purple-200 flex items-center justify-between shadow-sm"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D946EF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D946EF]"></span>
                </span>
                <span>NOT ANOTHER STARTUP</span>
              </div>
              <span className="text-[10px] font-mono uppercase bg-gradient-to-r from-[#7C3AED] to-[#D946EF] text-white px-2.5 py-0.5 rounded-full font-bold">
                VENTURE ACCELERATOR
              </span>
            </Link>

            {/* EXPERTISE */}
            <Link
              href="/services"
              className="py-3 px-4 rounded-xl text-base font-bold text-slate-900 hover:bg-slate-100"
            >
              Expertise & Industries
            </Link>

            {/* WORK */}
            <Link
              href="/work"
              className="py-3 px-4 rounded-xl text-base font-bold text-slate-900 hover:bg-slate-100"
            >
              Work & Case Studies
            </Link>

            {/* ABOUT */}
            <Link
              href="/about"
              className="py-3 px-4 rounded-xl text-base font-bold text-slate-900 hover:bg-slate-100"
            >
              About
            </Link>

            {/* CONTACT */}
            <Link
              href="/contact"
              className="py-3 px-4 rounded-xl text-base font-bold text-slate-900 hover:bg-slate-100"
            >
              Contact
            </Link>

            <div className="pt-6 border-t border-slate-200">
              <Link
                href="/contact"
                className="w-full block text-center py-3.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D946EF] text-white font-bold text-sm shadow-md"
              >
                Speak to our experts
              </Link>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
