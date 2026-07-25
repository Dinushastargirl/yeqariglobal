"use client";

import React from "react";
import { Sparkles, TrendingUp, Layers, Cpu, Box, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function VenturesPage() {
  const ventures = [
    {
      id: "yeqari-digital",
      name: "Yeqari Digital",
      tagline: "Presence & Experience",
      status: "Live & Scaling",
      desc: "Our primary agency service branch. We construct premium responsive Next.js websites, high-end branding vectors, and detailed UI/UX layouts for businesses globally.",
      icon: Layers,
      color: "border-blue-500/20 text-blue-400 bg-blue-500/5",
    },
    {
      id: "yeqari-labs",
      name: "Yeqari Labs",
      tagline: "Advanced Automation & AI",
      status: "Active Research",
      desc: "Dedicated to building custom operational integrations, AI assistants, scraper indexing configurations, and smart webhook automations to streamline workflow operations.",
      icon: Cpu,
      color: "border-emerald-500/20 text-emerald-400 bg-emerald-500/5",
    },
    {
      id: "beulex-commerce",
      name: "Beulex Commerce",
      tagline: "Automated Commerce & Retail",
      status: "Incubating",
      desc: "Developing next-generation direct-to-consumer pipelines, automated drop-shipping scripts, analytics syncs, and custom online storefront modules.",
      icon: Box,
      color: "border-amber-500/20 text-amber-400 bg-amber-500/5",
    },
    {
      id: "academy-creator",
      name: "Yeqari Academy",
      tagline: "Nurturing Future Creators",
      status: "Beta Launch",
      desc: "Our education branch focusing on workshops, code-along modules, and starter templates to train the next wave of full-stack developer talent.",
      icon: Rocket,
      color: "border-purple-500/20 text-purple-400 bg-purple-500/5",
    },
  ];

  return (
    <div className="relative w-full py-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-20">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 left-1/3 w-[30rem] h-[30rem] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Page Header */}
      <div className="max-w-3xl flex flex-col gap-6">
        <div className="flex items-center gap-2 border border-gold/20 bg-gold/5 px-4 py-1.5 rounded-full self-start">
          <TrendingUp className="w-3.5 h-3.5 text-gold" />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold">
            Ecosystem Expansion
          </span>
        </div>
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-sans text-glow-white">
          Incubating Ideas, <br />
          <span className="text-gradient-gold text-glow-gold">Building Ventures</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-lg leading-relaxed max-w-2xl mt-2">
          At Yeqari, our ultimate vision is to transition from bespoke digital services into a global technology ecosystem. We co-create, fund, and engineer proprietary digital platforms that help people work smarter.
        </p>
      </div>

      {/* Ventures Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ventures.map((v) => {
          const Icon = v.icon;
          return (
            <div
              key={v.id}
              className="group p-8 rounded-3xl border border-white/5 bg-[#0a0a0a]/80 hover:border-gold/25 hover:shadow-[0_0_30px_rgba(212,175,55,0.03)] hover:bg-[#0a0a0a]/95 transition-all duration-300 flex flex-col justify-between min-h-[280px]"
            >
              <div className="flex flex-col gap-6">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${v.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-base font-extrabold text-white tracking-wide">{v.name}</h3>
                      <span className="text-[10px] text-zinc-500 tracking-wider font-medium">{v.tagline}</span>
                    </div>
                  </div>
                  <span className="text-[9px] uppercase font-bold tracking-widest border border-white/5 bg-white/5 px-2.5 py-0.5 rounded text-zinc-400">
                    {v.status}
                  </span>
                </div>

                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6 flex justify-between items-center text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                <span>Core Ecosystem Asset</span>
                <Link
                  href="/contact"
                  className="flex items-center gap-1 text-gold hover:text-white transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to action */}
      <div className="border border-gold/20 bg-gold/5 p-8 md:p-10 rounded-3xl backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-6 max-w-4xl mx-auto w-full mt-10 shadow-[0_0_20px_rgba(212,175,55,0.02)]">
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] uppercase font-bold tracking-widest text-gold flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Have a Venture Concept?
          </span>
          <h3 className="text-xl font-bold text-white tracking-wide">
            Let&apos;s Build and Launch It Together
          </h3>
          <p className="text-zinc-400 text-xs md:text-sm">
            We partner with passionate creators. Submit your idea through our interactive project scoping dashboard.
          </p>
        </div>
        <Link
          href="/contact"
          className="group flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest px-6 py-4 transition-all hover:scale-[1.02] shadow-lg shadow-gold/5 shrink-0"
        >
          <span>Submit Venture Briefing</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
