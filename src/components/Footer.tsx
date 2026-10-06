import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FAF9F6] border-t border-[#121110]/8 pt-20 pb-12">
      <div className="max-w-[1360px] mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-[#121110]/8">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-1">
            <div className="text-xl font-extrabold tracking-tight text-[#121110] mb-3">
              YEQARI GLOBAL
            </div>
            <p className="text-sm text-[#57544F] leading-relaxed max-w-xs">
              Built for More. Helping businesses and ideas move from possibility to reality.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#848079] mb-4">
              Navigation
            </div>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/work" className="text-[#57544F] hover:text-[#6D28D9] transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#57544F] hover:text-[#6D28D9] transition-colors">
                  Core Capabilities
                </Link>
              </li>
              <li>
                <Link href="/approach" className="text-[#57544F] hover:text-[#6D28D9] transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#57544F] hover:text-[#6D28D9] transition-colors">
                  About & Ethos
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#848079] mb-4">
              Direct Contact
            </div>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a href="mailto:yeqariglobal.info@gmail.com" className="text-[#57544F] hover:text-[#6D28D9] transition-colors">
                  yeqariglobal.info@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:0722346167" className="text-[#57544F] hover:text-[#6D28D9] transition-colors">
                  0722346167
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-[#6D28D9] font-semibold hover:underline">
                  Initiate Brief ↗
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Social Channels */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#848079] mb-4">
              Social Channels
            </div>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a
                  href="https://instagram.com/yeqariglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#57544F] hover:text-[#6D28D9] transition-colors"
                >
                  Instagram @yeqariglobal
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/yeqariglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#57544F] hover:text-[#6D28D9] transition-colors"
                >
                  Facebook @yeqariglobal
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@yeqariglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#57544F] hover:text-[#6D28D9] transition-colors"
                >
                  TikTok @yeqariglobal
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#848079]">
          <div>© {new Date().getFullYear()} YEQARI GLOBAL (PVT) LTD. ALL RIGHTS RESERVED.</div>
          <div>COORDINATES: DIGITAL FIRST • SCALE WORLDWIDE</div>
        </div>

      </div>
    </footer>
  );
}
