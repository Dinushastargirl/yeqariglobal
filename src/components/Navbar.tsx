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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">
            
            {/* 2. SERVICES MEGA MENU */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setServicesDropdown(!servicesDropdown)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-1.5 transition-all cursor-pointer ${
                  servicesDropdown || pathname.startsWith("/services")
                    ? "text-[#7C3AED] bg-purple-50"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                SERVICES
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdown ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Menu Dropdown */}
              {servicesDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[920px] animate-in fade-in duration-200">
                  <div className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-2xl grid grid-cols-3 gap-8">
                    
                    {/* Column 1: YEQARI IT INFRASTRUCTURE (9 Services) */}
                    <div className="border-r border-slate-100 pr-4">
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#7C3AED] mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                        <span>YEQARI IT INFRASTRUCTURE</span>
                      </div>
                      <div className="flex flex-col gap-1 text-xs">
                        {divisionLists.itInfrastructure.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/services/${item.slug}`}
                            className="text-slate-600 hover:text-slate-950 hover:bg-purple-50 px-2 py-1.5 rounded-lg transition-colors font-medium flex items-center justify-between group"
                          >
                            <span>{item.name}</span>
                            <span className="text-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Column 2: YEQARI DIGITAL (6 Services) */}
                    <div className="border-r border-slate-100 pr-4">
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D946EF] mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#D946EF]" />
                        <span>YEQARI DIGITAL</span>
                      </div>
                      <div className="flex flex-col gap-1 text-xs">
                        {divisionLists.digital.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/services/${item.slug}`}
                            className="text-slate-600 hover:text-slate-950 hover:bg-pink-50 px-2 py-1.5 rounded-lg transition-colors font-medium flex items-center justify-between group"
                          >
                            <span>{item.name}</span>
                            <span className="text-[#D946EF] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Column 3: YEQARI ACADEMY (5 Programs) */}
                    <div>
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>YEQARI ACADEMY</span>
                      </div>
                      <div className="flex flex-col gap-1 text-xs mb-6">
                        {divisionLists.academy.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/services/${item.slug}`}
                            className="text-slate-600 hover:text-slate-950 hover:bg-emerald-50 px-2 py-1.5 rounded-lg transition-colors font-medium flex items-center justify-between group"
                          >
                            <span>{item.name}</span>
                            <span className="text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                          </Link>
                        ))}
                      </div>

                      {/* Jump to All Services overview */}
                      <Link
                        href="/services"
                        className="block text-center py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider transition-colors"
                      >
                        View All Services Hub →
                      </Link>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* 3. YEQARI STARTUP (Separate Item with distinct badge) */}
            <Link
              href="/startup"
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center gap-2 ${
                pathname === "/startup"
                  ? "bg-[#0D0422] text-[#C084FC] shadow-sm"
                  : "text-slate-800 hover:text-[#7C3AED] hover:bg-purple-50"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D946EF] animate-pulse" />
              <span>YEQARI STARTUP</span>
            </Link>

            {/* 4. ACADEMY */}
            <Link
              href="/academy"
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                pathname === "/academy"
                  ? "text-emerald-800 bg-emerald-50"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              ACADEMY
            </Link>

            {/* 5. ABOUT */}
            <Link
              href="/about"
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                pathname === "/about"
                  ? "text-slate-950 bg-slate-100 font-bold"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              ABOUT
            </Link>

            {/* 6. CONTACT */}
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                pathname === "/contact"
                  ? "text-slate-950 bg-slate-100 font-bold"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              CONTACT
            </Link>

          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-[#0D0422] hover:bg-[#2B075C] text-white text-xs font-mono font-bold tracking-wider uppercase shadow-md transition-all hover:scale-[1.02]"
            >
              Get In Touch
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
              href="/"
              className="py-3 px-4 rounded-xl text-base font-bold text-slate-900 hover:bg-slate-100"
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-3 px-4 rounded-xl text-base font-bold text-slate-900 hover:bg-slate-100"
              >
                <span>Services (3 Divisions)</span>
                <span className="text-xs font-mono text-[#7C3AED]">{mobileServicesOpen ? "−" : "+"}</span>
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 pr-2 py-3 space-y-4 bg-slate-50 rounded-2xl mt-2 border border-slate-200">
                  {/* Division 1 */}
                  <div>
                    <div className="text-xs font-mono font-bold text-[#7C3AED] uppercase mb-2">
                      01 — YEQARI IT INFRASTRUCTURE
                    </div>
                    <div className="space-y-1.5 pl-2 text-xs">
                      {divisionLists.itInfrastructure.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/services/${item.slug}`}
                          className="block text-slate-600 hover:text-slate-950 py-1"
                        >
                          • {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Division 2 */}
                  <div>
                    <div className="text-xs font-mono font-bold text-[#D946EF] uppercase mb-2">
                      02 — YEQARI DIGITAL
                    </div>
                    <div className="space-y-1.5 pl-2 text-xs">
                      {divisionLists.digital.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/services/${item.slug}`}
                          className="block text-slate-600 hover:text-slate-950 py-1"
                        >
                          • {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Division 3 */}
                  <div>
                    <div className="text-xs font-mono font-bold text-emerald-600 uppercase mb-2">
                      03 — YEQARI ACADEMY
                    </div>
                    <div className="space-y-1.5 pl-2 text-xs">
                      {divisionLists.academy.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/services/${item.slug}`}
                          className="block text-slate-600 hover:text-slate-950 py-1"
                        >
                          • {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* YEQARI STARTUP */}
            <Link
              href="/startup"
              className="py-3 px-4 rounded-xl text-base font-bold text-[#7C3AED] bg-purple-50 flex items-center justify-between"
            >
              <span>YEQARI STARTUP</span>
              <span className="text-[10px] font-mono uppercase bg-[#7C3AED] text-white px-2 py-0.5 rounded">
                NOT ANOTHER STARTUP PROGRAM
              </span>
            </Link>

            {/* ACADEMY */}
            <Link
              href="/academy"
              className="py-3 px-4 rounded-xl text-base font-bold text-slate-900 hover:bg-slate-100"
            >
              Academy
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
                Request Proposal
              </Link>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
