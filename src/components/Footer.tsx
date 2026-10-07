"use client";

import React from "react";
import Link from "next/link";
import { divisionLists } from "@/data/servicesData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-24 pb-12 bg-[#0D0422] text-white border-t border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-20">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-11 h-11 rounded-xl bg-purple-950/80 p-2 flex items-center justify-center border border-purple-500/20 group-hover:rotate-12 transition-transform duration-300">
                <img src="/assets/yekari-symbol-transparent.png" alt="YEQARI Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold font-['Outfit'] tracking-tight">
                YEQARI GLOBAL<span className="text-[#D946EF]">.</span>
              </span>
            </Link>

            <p className="text-slate-300 text-lg font-['Outfit'] font-normal leading-relaxed max-w-sm mb-6">
              BUILT FOR MORE — Creating a revolution to revaluate people&apos;s lives through transformative, human-centered technology.
            </p>

            <div className="font-mono text-xs uppercase tracking-widest text-[#C084FC] mb-4">
              HQ: Colombo, Sri Lanka • Global Delivery
            </div>

            <div className="text-xs font-mono text-slate-400 mb-6">
              Inquiries: <a href="mailto:hello@yeqari.global" className="text-purple-300 hover:underline">hello@yeqari.global</a><br />
              Direct: <a href="tel:+94722346167" className="text-purple-300 hover:underline">+94 72 234 6167</a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2.5">
              <a
                href="https://wa.me/94722346167"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600/30 transition-all text-xs font-bold"
                aria-label="WhatsApp"
              >
                WA
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-purple-600/30 transition-all text-xs font-bold"
                aria-label="LinkedIn"
              >
                IN
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-purple-600/30 transition-all text-xs font-bold"
                aria-label="GitHub"
              >
                GH
              </a>
            </div>
          </div>

          {/* Division 1: IT Infrastructure (3 cols) */}
          <div className="lg:col-span-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[#7C3AED] mb-4 font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
              IT Infrastructure
            </div>
            <ul className="flex flex-col gap-2 text-xs text-slate-300">
              {divisionLists.itInfrastructure.map((item) => (
                <li key={item.slug}>
                  <Link href={`/services/${item.slug}`} className="hover:text-white hover:underline transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Division 2: YEQARI Digital (2 cols) */}
          <div className="lg:col-span-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#D946EF] mb-4 font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D946EF]" />
              YEQARI Digital
            </div>
            <ul className="flex flex-col gap-2 text-xs text-slate-300">
              {divisionLists.digital.map((item) => (
                <li key={item.slug}>
                  <Link href={`/services/${item.slug}`} className="hover:text-white hover:underline transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs: Startup & Academy (3 cols) */}
          <div className="lg:col-span-3">
            
            {/* Startup Hub */}
            <div className="mb-6">
              <div className="font-mono text-xs uppercase tracking-widest text-[#C084FC] mb-2 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC]" />
                YEQARI STARTUP
              </div>
              <div className="text-[11px] font-mono text-purple-300 mb-2">NOT ANOTHER STARTUP PROGRAM</div>
              <ul className="flex flex-col gap-1.5 text-xs text-slate-300">
                <li><Link href="/startup#pathways" className="hover:text-white hover:underline">IDEA → MVP</Link></li>
                <li><Link href="/startup#pathways" className="hover:text-white hover:underline">IDEA → ROADMAP</Link></li>
                <li><Link href="/startup#pathways" className="hover:text-white hover:underline">IDEA → STARTUP</Link></li>
              </ul>
            </div>

            {/* Academy */}
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                YEQARI ACADEMY
              </div>
              <ul className="flex flex-col gap-1.5 text-xs text-slate-300">
                {divisionLists.academy.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/services/${item.slug}`} className="hover:text-white hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/academy" className="text-emerald-400 hover:underline">
                    SLMC² Math Circle ↗
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} YEQARI GLOBAL (PVT) LTD. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white">ABOUT</Link>
            <Link href="/services" className="hover:text-white">SERVICES</Link>
            <Link href="/startup" className="hover:text-white">STARTUP</Link>
            <Link href="/contact" className="hover:text-white">CONTACT</Link>
            <button
              onClick={scrollToTop}
              className="text-[#C084FC] hover:text-white flex items-center gap-1 cursor-pointer"
            >
              <span>TOP</span>
              <span>↑</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
