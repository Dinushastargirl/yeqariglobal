import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { divisionLists, servicesData } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "YEQARI Academy — Technology Education & Knowledge",
  description: "The education, training, and knowledge division of YEQARI GLOBAL. Corporate training, executive tech webinars, youth innovation, and the Sri Lanka Mathematical Circle (SLMC²).",
};

export default function AcademyPage() {
  const programs = divisionLists.academy.map((item) => ({
    ...item,
    ...servicesData[item.slug],
  }));

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-slate-900 pt-28 pb-24">
      
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">YEQARI</Link>
          <span>/</span>
          <span className="text-[#10B981] font-bold">ACADEMY</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#0D0422] text-white rounded-3xl p-8 sm:p-14 lg:p-16 relative overflow-hidden border border-emerald-900/30 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase mb-6 bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              KNOWLEDGE & INNOVATION ECOSYSTEM
            </div>
            <h1 className="text-4xl sm:text-6xl font-black font-['Outfit'] tracking-tight mb-6 leading-[1.08] text-white">
              YEQARI ACADEMY<span className="text-emerald-400">.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-slate-200 font-light leading-relaxed mb-8">
              The education, training, and knowledge division of YEQARI GLOBAL. Bridging the gap between academic theory, corporate needs, and real-world technology mastery.
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
              We empower corporate engineering teams, C-suite executives, curious youth, and next-generation mathematical minds to understand, harness, and lead through technological change.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#programs"
                className="px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-emerald-500/20"
              >
                Explore Academy Programs
              </a>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm tracking-wide border border-white/20 transition-all"
              >
                Partner with Academy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Programs Grid */}
      <section id="programs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28 scroll-mt-28">
        <div className="mb-12">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 mb-2">
            ACADEMY OFFERINGS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] tracking-tight text-slate-900">
            Current Programs & Workshops
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mt-2">
            Every program is designed to deliver immediate, practical capability rather than passive video lectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog, idx) => (
            <Link
              key={prog.slug}
              href={`/services/${prog.slug}`}
              className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-emerald-500 hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-emerald-600 transition-colors">
                    0{idx + 1}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-emerald-100 group-hover:text-emerald-700 flex items-center justify-center text-slate-600 transition-all text-sm font-bold">
                    →
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors mb-3">
                  {prog.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {prog.tagline || prog.heroSummary?.slice(0, 110) + "..."}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Dedicated Program Page</span>
                <span className="font-semibold text-emerald-600 group-hover:translate-x-1 transition-transform">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ====================================================================
          FEATURED INITIATIVE: SRI LANKA MATHEMATICAL CIRCLE (SLMC²)
          ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Logo Presentation */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
              <div className="w-48 h-48 bg-white rounded-3xl p-4 border border-slate-200 shadow-md flex items-center justify-center mb-6">
                <img
                  src="/assets/slmc-logo.jpg"
                  alt="Sri Lanka Mathematical Circle (SLMC²)"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="font-['Outfit'] font-black text-2xl text-slate-900 tracking-tight">
                SLMC²
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mt-1">
                Sri Lanka Mathematical Circle
              </div>
            </div>

            {/* Description & Narrative */}
            <div className="lg:col-span-8">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-4 bg-emerald-100 text-emerald-800 border border-emerald-200">
                FOUNDER-BACKED INITIATIVE
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-slate-900 tracking-tight mb-4">
                Fostering Rigorous Mathematical & Computational Thinking
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                Founded by Dinusha Pushparajah (Founder & CEO of YEQARI GLOBAL), the <strong>Sri Lanka Mathematical Circle (SLMC²)</strong> is an intellectual haven for young mathematical talents, problem solvers, and future computer scientists across Sri Lanka.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 font-normal">
                Through non-routine olympiad problem solving, proof theory, computational logic, and collaborative workshops, SLMC² cultivates the foundational mathematical rigor that drives modern artificial intelligence and computer science breakthroughs.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://chat.whatsapp.com/BbKNlFjHcUQ2uBucvWzjXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wider uppercase font-mono flex items-center gap-2 transition-all shadow-md"
                >
                  <span>Join SLMC² WhatsApp Community</span>
                  <span>↗</span>
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-semibold text-xs tracking-wider uppercase font-mono transition-all"
                >
                  Inquire About Cohorts
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Scalable Future Platform Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0D0422] rounded-3xl p-10 sm:p-14 text-white text-center border border-purple-900/30">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 mb-2">
            FUTURE-READY ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight mb-4">
            Building the next generation of tech thinkers.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
            YEQARI Academy is continuously expanding with new bootcamps, executive webinars, and community innovation labs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#D946EF] font-semibold text-sm shadow-lg hover:opacity-95 transition-all text-white"
            >
              Contact Academy Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
