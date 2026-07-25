import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Shield } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#050505] pt-16 pb-8 overflow-hidden z-10">
      {/* Light glow inside footer background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Logo size={36} interactive={false} />
              <span className="text-lg font-bold tracking-[0.15em] text-white">YEQARI</span>
            </div>
            <p className="text-zinc-500 text-xs md:text-sm leading-relaxed max-w-xs">
              We transform ideas into meaningful digital solutions through technology, creativity, and purpose-driven excellence.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.linkedin.com/company/beulex/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors p-2 rounded-full border border-white/5 hover:border-white/10 flex items-center justify-center w-8 h-8"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white transition-colors p-2 rounded-full border border-white/5 hover:border-white/10 flex items-center justify-center w-8 h-8"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="mailto:yekari.info@gmail.com"
                className="text-zinc-500 hover:text-white transition-colors p-2 rounded-full border border-white/5 hover:border-white/10"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links: Ecosystem */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-semibold mb-6">
              Ecosystem
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/services#digital"
                  className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>Yeqari Digital</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services#labs"
                  className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>Yeqari Labs</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ventures"
                  className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>Yeqari Ventures</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services#academy"
                  className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>Yeqari Academy</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Links: Navigate */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-semibold mb-6">
              Explore
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/about"
                  className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
                >
                  Philosophy & Values
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
                >
                  Choose Your Solution
                </Link>
              </li>
              <li>
                <Link
                  href="/how-we-work"
                  className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
                >
                  Mission Workflow
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
                >
                  Growth Paths
                </Link>
              </li>
            </ul>
          </div>

          {/* Vision Statement */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-semibold">
              The Mission
            </h4>
            <p className="text-[#D4AF37] font-serif text-sm italic leading-relaxed">
              &ldquo;Talents, skills, and opportunities are gifts meant to create impact.&rdquo;
            </p>
            <div className="text-zinc-600 text-xs mt-2 uppercase tracking-wider">
              A Purpose-Driven Innovation Company
            </div>
          </div>
        </div>

        {/* Lower Row */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-zinc-600 text-xs tracking-wider">
            YEQARI &copy; {currentYear}. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-[10px] uppercase tracking-widest text-zinc-600 hover:text-zinc-400 transition-colors flex items-center gap-1"
            >
              <Shield className="w-3 h-3" />
              <span>Privacy & Integrity Policy</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
