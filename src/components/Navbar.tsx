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
            
            {/* SERVICES MEGA DROPDOWN (DESIGN, MARKETING, TECHNOLOGY SEGREGATED) */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/services"
                onClick={() => setServicesDropdown(false)}
                className={`px-3.5 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all inline-flex items-center gap-1.5 ${
                  pathname.startsWith("/services") || servicesDropdown
                    ? "text-[#7C3AED] bg-purple-50"
                    : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                }`}
                aria-expanded={servicesDropdown}
              >
                <span>SERVICES</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdown ? "rotate-180 text-[#7C3AED]" : "text-slate-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Mega Menu Dropdown */}
              {servicesDropdown && (
                <div
                  ref={dropdownRef}
                  className="absolute top-full left-0 mt-2 z-50 w-[840px] max-w-[95vw] bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-3xl shadow-2xl p-6 xl:p-8 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="grid grid-cols-3 gap-6 divide-x divide-slate-100">
                    
                    {/* COLUMN 1: DESIGN */}
                    <div className="pr-2">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-6 h-6 rounded-lg bg-purple-100 text-[#7C3AED] flex items-center justify-center font-mono font-bold text-xs">
                          01
                        </span>
                        <div>
                          <Link
                            href="/services#design"
                            onClick={() => setServicesDropdown(false)}
                            className="font-mono text-xs font-extrabold uppercase tracking-wider text-slate-900 hover:text-[#7C3AED] transition-colors block"
                          >
                            DESIGN
                          </Link>
                          <span className="text-[10px] text-slate-500 font-medium block">
                            Brand, Experience & Motion
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1 pt-2 border-t border-slate-100">
                        <Link
                          href="/services/branding-identity"
                          onClick={() => setServicesDropdown(false)}
                          className="text-xs font-medium text-slate-700 hover:text-[#7C3AED] hover:bg-purple-50/60 px-2 py-1.5 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <span>Branding & Identity</span>
                          <span className="text-[10px] text-slate-400 group-hover:text-[#7C3AED] group-hover:translate-x-0.5 transition-all">→</span>
                        </Link>
                        <Link
                          href="/services/ui-ux-engineering"
                          onClick={() => setServicesDropdown(false)}
                          className="text-xs font-medium text-slate-700 hover:text-[#7C3AED] hover:bg-purple-50/60 px-2 py-1.5 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <span>UI/UX Engineering</span>
                          <span className="text-[10px] text-slate-400 group-hover:text-[#7C3AED] group-hover:translate-x-0.5 transition-all">→</span>
                        </Link>
                        <Link
                          href="/services/creative-content"
                          onClick={() => setServicesDropdown(false)}
                          className="text-xs font-medium text-slate-700 hover:text-[#7C3AED] hover:bg-purple-50/60 px-2 py-1.5 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <span>Creative Content</span>
                          <span className="text-[10px] text-slate-400 group-hover:text-[#7C3AED] group-hover:translate-x-0.5 transition-all">→</span>
                        </Link>
                        <Link
                          href="/services/website-development"
                          onClick={() => setServicesDropdown(false)}
                          className="text-xs font-medium text-slate-700 hover:text-[#7C3AED] hover:bg-purple-50/60 px-2 py-1.5 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <span>Product & Web Design</span>
                          <span className="text-[10px] text-slate-400 group-hover:text-[#7C3AED] group-hover:translate-x-0.5 transition-all">→</span>
                        </Link>
                        <Link
                          href="/services#design"
                          onClick={() => setServicesDropdown(false)}
                          className="text-xs font-medium text-slate-700 hover:text-[#7C3AED] hover:bg-purple-50/60 px-2 py-1.5 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <span>Motion Design</span>
                          <span className="text-[10px] text-slate-400 group-hover:text-[#7C3AED] group-hover:translate-x-0.5 transition-all">→</span>
                        </Link>
                        <Link
                          href="/services#design"
                          onClick={() => setServicesDropdown(false)}
                          className="text-xs font-medium text-slate-700 hover:text-[#7C3AED] hover:bg-purple-50/60 px-2 py-1.5 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <span>Design Systems</span>
                          <span className="text-[10px] text-slate-400 group-hover:text-[#7C3AED] group-hover:translate-x-0.5 transition-all">→</span>
                        </Link>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-slate-100">
                        <Link
                          href="/services#design"
                          onClick={() => setServicesDropdown(false)}
                          className="text-[11px] font-mono font-bold text-[#7C3AED] hover:underline flex items-center gap-1"
                        >
                          <span>All Design Capabilities</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>

                    {/* COLUMN 2: MARKETING */}
                    <div className="px-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-6 h-6 rounded-lg bg-fuchsia-100 text-[#D946EF] flex items-center justify-center font-mono font-bold text-xs">
                          02
                        </span>
                        <div>
                          <Link
                            href="/services#marketing"
                            onClick={() => setServicesDropdown(false)}
                            className="font-mono text-xs font-extrabold uppercase tracking-wider text-slate-900 hover:text-[#D946EF] transition-colors block"
                          >
                            MARKETING
                          </Link>
                          <span className="text-[10px] text-slate-500 font-medium block">
                            Growth, Search & Conversion
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1 pt-2 border-t border-slate-100">
                        <Link
                          href="/services/digital-marketing"
                          onClick={() => setServicesDropdown(false)}
                          className="text-xs font-medium text-slate-700 hover:text-[#D946EF] hover:bg-fuchsia-50/60 px-2 py-1.5 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <span>Digital Marketing</span>
                          <span className="text-[10px] text-slate-400 group-hover:text-[#D946EF] group-hover:translate-x-0.5 transition-all">→</span>
                        </Link>
                        <Link
                          href="/services/marketing-strategy"
                          onClick={() => setServicesDropdown(false)}
                          className="text-xs font-medium text-slate-700 hover:text-[#D946EF] hover:bg-fuchsia-50/60 px-2 py-1.5 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <span>Marketing Strategy</span>
                          <span className="text-[10px] text-slate-400 group-hover:text-[#D946EF] group-hover:translate-x-0.5 transition-all">→</span>
                        </Link>
                        <Link
                          href="/services/social-media-management"
                          onClick={() => setServicesDropdown(false)}
                          className="text-xs font-medium text-slate-700 hover:text-[#D946EF] hover:bg-fuchsia-50/60 px-2 py-1.5 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <span>Social Media Mgmt</span>
                          <span className="text-[10px] text-slate-400 group-hover:text-[#D946EF] group-hover:translate-x-0.5 transition-all">→</span>
                        </Link>
                        <Link
                          href="/services/content-strategy"
                          onClick={() => setServicesDropdown(false)}
                          className="text-xs font-medium text-slate-700 hover:text-[#D946EF] hover:bg-fuchsia-50/60 px-2 py-1.5 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <span>Content Strategy</span>
                          <span className="text-[10px] text-slate-400 group-hover:text-[#D946EF] group-hover:translate-x-0.5 transition-all">→</span>
                        </Link>
                        <Link
                          href="/services#marketing"
                          onClick={() => setServicesDropdown(false)}
                          className="text-xs font-medium text-slate-700 hover:text-[#D946EF] hover:bg-fuchsia-50/60 px-2 py-1.5 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <span>SEO & Search Dominance</span>
                          <span className="text-[10px] text-slate-400 group-hover:text-[#D946EF] group-hover:translate-x-0.5 transition-all">→</span>
                        </Link>
                        <Link
                          href="/services#marketing"
                          onClick={() => setServicesDropdown(false)}
                          className="text-xs font-medium text-slate-700 hover:text-[#D946EF] hover:bg-fuchsia-50/60 px-2 py-1.5 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <span>Performance Funnels</span>
                          <span className="text-[10px] text-slate-400 group-hover:text-[#D946EF] group-hover:translate-x-0.5 transition-all">→</span>
                        </Link>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-slate-100">
                        <Link
                          href="/services#marketing"
                          onClick={() => setServicesDropdown(false)}
                          className="text-[11px] font-mono font-bold text-[#D946EF] hover:underline flex items-center gap-1"
                        >
                          <span>All Marketing Engines</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>

                    {/* COLUMN 3: TECHNOLOGY */}
                    <div className="pl-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-6 h-6 rounded-lg bg-indigo-100 text-[#7C3AED] flex items-center justify-center font-mono font-bold text-xs">
                          03
                        </span>
                        <div>
                          <Link
                            href="/services#technology"
                            onClick={() => setServicesDropdown(false)}
                            className="font-mono text-xs font-extrabold uppercase tracking-wider text-slate-900 hover:text-[#7C3AED] transition-colors block"
                          >
                            TECHNOLOGY
                          </Link>
                          <span className="text-[10px] text-slate-500 font-medium block">
                            Engineering, Cloud & AI
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1 pt-2 border-t border-slate-100">
                        <Link
                          href="/services/website-development"
                          onClick={() => setServicesDropdown(false)}
                          className="text-xs font-medium text-slate-700 hover:text-[#7C3AED] hover:bg-indigo-50/60 px-2 py-1.5 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <span>Website Development</span>
                          <span className="text-[10px] text-slate-400 group-hover:text-[#7C3AED] group-hover:translate-x-0.5 transition-all">→</span>
                        </Link>
                        <Link
                          href="/services/web-app-development"
                          onClick={() => setServicesDropdown(false)}
                          className="text-xs font-medium text-slate-700 hover:text-[#7C3AED] hover:bg-indigo-50/60 px-2 py-1.5 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <span>Web App Development</span>
                          <span className="text-[10px] text-slate-400 group-hover:text-[#7C3AED] group-hover:translate-x-0.5 transition-all">→</span>
                        </Link>
                        <Link
                          href="/services/mobile-app-development"
                          onClick={() => setServicesDropdown(false)}
                          className="text-xs font-medium text-slate-700 hover:text-[#7C3AED] hover:bg-indigo-50/60 px-2 py-1.5 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <span>Mobile App Development</span>
                          <span className="text-[10px] text-slate-400 group-hover:text-[#7C3AED] group-hover:translate-x-0.5 transition-all">→</span>
                        </Link>
                        <Link
                          href="/services/custom-software"
                          onClick={() => setServicesDropdown(false)}
                          className="text-xs font-medium text-slate-700 hover:text-[#7C3AED] hover:bg-indigo-50/60 px-2 py-1.5 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <span>Custom Software</span>
                          <span className="text-[10px] text-slate-400 group-hover:text-[#7C3AED] group-hover:translate-x-0.5 transition-all">→</span>
                        </Link>
                        <Link
                          href="/services/cloud-it-infrastructure"
                          onClick={() => setServicesDropdown(false)}
                          className="text-xs font-medium text-slate-700 hover:text-[#7C3AED] hover:bg-indigo-50/60 px-2 py-1.5 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <span>Cloud & IT Infrastructure</span>
                          <span className="text-[10px] text-slate-400 group-hover:text-[#7C3AED] group-hover:translate-x-0.5 transition-all">→</span>
                        </Link>
                        <Link
                          href="/services/ai-engineering"
                          onClick={() => setServicesDropdown(false)}
                          className="text-xs font-medium text-slate-700 hover:text-[#7C3AED] hover:bg-indigo-50/60 px-2 py-1.5 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <span>AI Engineering</span>
                          <span className="text-[10px] text-slate-400 group-hover:text-[#7C3AED] group-hover:translate-x-0.5 transition-all">→</span>
                        </Link>
                        <Link
                          href="/services/automation"
                          onClick={() => setServicesDropdown(false)}
                          className="text-xs font-medium text-slate-700 hover:text-[#7C3AED] hover:bg-indigo-50/60 px-2 py-1.5 rounded-lg transition-colors flex items-center justify-between group"
                        >
                          <span>Automation & Systems</span>
                          <span className="text-[10px] text-slate-400 group-hover:text-[#7C3AED] group-hover:translate-x-0.5 transition-all">→</span>
                        </Link>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-slate-100">
                        <Link
                          href="/services#technology"
                          onClick={() => setServicesDropdown(false)}
                          className="text-[11px] font-mono font-bold text-[#7C3AED] hover:underline flex items-center gap-1"
                        >
                          <span>All Technology Stacks</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>

                  </div>

                  {/* Mega Menu Footer Banner */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/80 -mx-6 -mb-6 px-6 py-3.5 rounded-b-3xl">
                    <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                      <span>Ready to architect your custom transformation roadmap?</span>
                    </div>
                    <Link
                      href="/services"
                      onClick={() => setServicesDropdown(false)}
                      className="text-xs font-mono font-bold text-[#7C3AED] hover:text-[#D946EF] transition-colors flex items-center gap-1"
                    >
                      <span>View All 20+ Capabilities</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

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
            
            {/* SERVICES ACCORDION ON MOBILE */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full py-3.5 px-4 text-base font-bold text-slate-900 flex items-center justify-between bg-white transition-colors hover:bg-slate-50"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-[#7C3AED]">SERVICES</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#7C3AED] font-mono">
                  <span>{mobileServicesOpen ? "Close" : "3 Pillars"}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {mobileServicesOpen && (
                <div className="p-4 space-y-4 bg-slate-50 border-t border-slate-100 animate-in fade-in duration-150">
                  {/* Design */}
                  <div>
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7C3AED] mb-2 flex items-center justify-between">
                      <span>01 — DESIGN</span>
                      <Link href="/services#design" onClick={() => setMobileOpen(false)} className="text-[10px] text-slate-500 hover:text-slate-900">All →</Link>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 pl-2 text-xs text-slate-700">
                      <Link href="/services/branding-identity" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#7C3AED]">Branding & Identity</Link>
                      <Link href="/services/ui-ux-engineering" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#7C3AED]">UI/UX Engineering</Link>
                      <Link href="/services/creative-content" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#7C3AED]">Creative Content</Link>
                      <Link href="/services/website-development" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#7C3AED]">Product & Web</Link>
                    </div>
                  </div>

                  {/* Marketing */}
                  <div className="pt-2 border-t border-slate-200/60">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#D946EF] mb-2 flex items-center justify-between">
                      <span>02 — MARKETING</span>
                      <Link href="/services#marketing" onClick={() => setMobileOpen(false)} className="text-[10px] text-slate-500 hover:text-slate-900">All →</Link>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 pl-2 text-xs text-slate-700">
                      <Link href="/services/digital-marketing" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#D946EF]">Digital Marketing</Link>
                      <Link href="/services/marketing-strategy" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#D946EF]">Marketing Strategy</Link>
                      <Link href="/services/social-media-management" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#D946EF]">Social Media Mgmt</Link>
                      <Link href="/services/content-strategy" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#D946EF]">Content Strategy</Link>
                    </div>
                  </div>

                  {/* Technology */}
                  <div className="pt-2 border-t border-slate-200/60">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7C3AED] mb-2 flex items-center justify-between">
                      <span>03 — TECHNOLOGY</span>
                      <Link href="/services#technology" onClick={() => setMobileOpen(false)} className="text-[10px] text-slate-500 hover:text-slate-900">All →</Link>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 pl-2 text-xs text-slate-700">
                      <Link href="/services/website-development" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#7C3AED]">Websites</Link>
                      <Link href="/services/web-app-development" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#7C3AED]">Web Apps</Link>
                      <Link href="/services/mobile-app-development" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#7C3AED]">Mobile Apps</Link>
                      <Link href="/services/ai-engineering" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#7C3AED]">AI Engineering</Link>
                      <Link href="/services/custom-software" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#7C3AED]">Custom Software</Link>
                      <Link href="/services/cloud-it-infrastructure" onClick={() => setMobileOpen(false)} className="py-1 hover:text-[#7C3AED]">Cloud & IT</Link>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/services"
                      onClick={() => setMobileOpen(false)}
                      className="block text-center py-2 rounded-xl bg-purple-100 text-[#7C3AED] text-xs font-mono font-bold"
                    >
                      View All 20+ Capabilities →
                    </Link>
                  </div>
                </div>
              )}
            </div>

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
