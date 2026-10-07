import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { divisionLists, servicesData } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Services & Capabilities — YEQARI GLOBAL",
  description: "Explore the three dedicated service divisions of YEQARI GLOBAL: YEQARI IT Infrastructure, YEQARI Digital, and YEQARI Academy.",
};

export default function ServicesIndexPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFC] text-slate-900 pt-28 pb-24">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase mb-6 bg-purple-50 text-[#7C3AED] border border-purple-200">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
            SOLUTIONS ARCHITECTURE
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-['Outfit'] tracking-tight text-slate-900 mb-6 leading-[1.08]">
            Three Specialized Divisions.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#D946EF]">
              One Unified Standard.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
            YEQARI delivers complete end-to-end technology, digital brand authority, and knowledge systems. Every capability is delivered by dedicated specialists with zero generic templates.
          </p>
        </div>
      </section>

      {/* Division Navigation Jump Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-wrap items-center gap-3 border-b border-slate-200 pb-6">
          <a
            href="#it-infrastructure"
            className="px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-slate-900 text-white hover:bg-slate-800 transition-colors"
          >
            01 — IT Infrastructure (9)
          </a>
          <a
            href="#digital"
            className="px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-purple-100 text-[#7C3AED] hover:bg-purple-200 transition-colors"
          >
            02 — YEQARI Digital (6)
          </a>
          <a
            href="#academy"
            className="px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors"
          >
            03 — YEQARI Academy (5)
          </a>
        </div>
      </section>

      {/* ====================================================================
          DIVISION 01 — YEQARI IT INFRASTRUCTURE
          ==================================================================== */}
      <section id="it-infrastructure" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28 scroll-mt-28">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7C3AED] mb-2">
              DIVISION 01
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight text-slate-900">
              YEQARI IT INFRASTRUCTURE
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-2">
              The technology, development, and engineering backbone. Scalable web systems, native apps, cloud architectures, and deterministic AI pipelines.
            </p>
          </div>
          <div className="text-xs font-mono text-slate-500 font-bold uppercase tracking-wider">
            9 Dedicated Services
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisionLists.itInfrastructure.map((item, idx) => {
            const data = servicesData[item.slug];
            return (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-[#7C3AED] hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#7C3AED] transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-purple-100 group-hover:text-[#7C3AED] flex items-center justify-center text-slate-600 transition-all text-sm font-bold">
                      →
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#7C3AED] transition-colors mb-3">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {data?.tagline || data?.heroSummary.slice(0, 110) + "..."}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Dedicated Page</span>
                  <span className="font-semibold text-[#7C3AED] group-hover:translate-x-1 transition-transform">Explore →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ====================================================================
          DIVISION 02 — YEQARI DIGITAL
          ==================================================================== */}
      <section id="digital" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28 scroll-mt-28">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#D946EF] mb-2">
              DIVISION 02
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight text-slate-900">
              YEQARI DIGITAL
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-2">
              The branding, marketing, content, and digital presence division. Built for modern tech companies that understand business, design, and growth together.
            </p>
          </div>
          <div className="text-xs font-mono text-slate-500 font-bold uppercase tracking-wider">
            6 Dedicated Services
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisionLists.digital.map((item, idx) => {
            const data = servicesData[item.slug];
            return (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-[#D946EF] hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#D946EF] transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-pink-100 group-hover:text-[#D946EF] flex items-center justify-center text-slate-600 transition-all text-sm font-bold">
                      →
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#D946EF] transition-colors mb-3">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {data?.tagline || data?.heroSummary.slice(0, 110) + "..."}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Dedicated Page</span>
                  <span className="font-semibold text-[#D946EF] group-hover:translate-x-1 transition-transform">Explore →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ====================================================================
          DIVISION 03 — YEQARI ACADEMY
          ==================================================================== */}
      <section id="academy" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 scroll-mt-28">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 mb-2">
              DIVISION 03
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight text-slate-900">
              YEQARI ACADEMY
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-2">
              The education, training, and knowledge division. Upskilling corporate teams, executives, youth, and curious learners in applied technology and innovation.
            </p>
          </div>
          <Link
            href="/academy"
            className="text-xs font-mono text-emerald-700 font-bold uppercase tracking-wider hover:underline"
          >
            Visit Full Academy Hub →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisionLists.academy.map((item, idx) => {
            const data = servicesData[item.slug];
            return (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
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
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {data?.tagline || data?.heroSummary.slice(0, 110) + "..."}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Dedicated Program</span>
                  <span className="font-semibold text-emerald-600 group-hover:translate-x-1 transition-transform">Explore →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0D0422] rounded-3xl p-10 sm:p-14 text-white text-center border border-purple-900/30">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] mb-4">
            Unsure which service matches your current challenge?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
            Our technology directors in Colombo will assess your architecture, timeline, and commercial goals to architect the exact package.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#D946EF] font-semibold text-sm shadow-lg hover:opacity-95 transition-all text-white"
            >
              Request Free Technical Scoping Call
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
