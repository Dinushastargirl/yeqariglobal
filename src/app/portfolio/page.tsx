"use client";

import React, { useState } from "react";
import { Sparkles, Layout, FolderOpen, ArrowRight, Code, Eye } from "lucide-react";
import Link from "next/link";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Next.js Websites" },
    { id: "ai", label: "AI Integration" },
    { id: "saas", label: "SaaS Platforms" },
    { id: "brand", label: "Brand Identity" },
  ];

  return (
    <div className="relative w-full py-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-16">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />

      {/* Header */}
      <div className="max-w-3xl flex flex-col gap-6">
        <div className="flex items-center gap-2 border border-gold/20 bg-gold/5 px-4 py-1.5 rounded-full self-start">
          <FolderOpen className="w-3.5 h-3.5 text-gold" />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold">
            Our Work
          </span>
        </div>
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-sans text-glow-white">
          Work That <br />
          <span className="text-gradient-gold text-glow-gold">Creates Impact</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-lg max-w-2xl mt-2 leading-relaxed">
          We focus on building functional digital products that solve actual business challenges. Explore our upcoming portfolio filter structure below.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-white/5 pb-6">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest border transition-all duration-300 ${
              activeFilter === f.id
                ? "border-gold bg-gold text-black shadow-lg shadow-gold/5"
                : "border-white/5 bg-[#0a0a0a]/50 text-zinc-400 hover:border-white/10 hover:text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Empty State Showcase */}
      <div className="border border-white/5 bg-[#0a0a0a]/40 rounded-3xl p-12 md:p-20 text-center flex flex-col items-center justify-center gap-6 backdrop-blur-md relative overflow-hidden">
        {/* Ambient grid lines background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

        <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center text-gold relative z-10 animate-bounce">
          <Eye className="w-7 h-7" />
        </div>

        <div className="relative z-10 flex flex-col gap-2 max-w-md mx-auto">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold">
            Phase 1 Deployment
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white font-sans mt-1">
            Projects Incubating
          </h2>
          <p className="text-zinc-500 text-xs md:text-sm mt-2 leading-relaxed">
            Our developers are actively building premium user systems, automated API connectors, and startup SaaS models. Case studies will be deployed here soon.
          </p>
        </div>

        {/* Floating abstract code shapes to look premium */}
        <div className="hidden lg:flex items-center gap-2 border border-white/5 bg-[#0a0a0a]/60 px-4 py-2 rounded-xl text-[10px] text-zinc-500 font-mono select-none relative z-10 shadow-lg">
          <Code className="w-3.5 h-3.5 text-gold" />
          <span>const yeqariProject = await buildFuturePossibilities();</span>
        </div>
      </div>

      {/* CTA Box */}
      <div className="border border-gold/20 bg-gold/5 p-8 md:p-10 rounded-3xl backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-6 max-w-4xl mx-auto w-full mt-6 shadow-[0_0_20px_rgba(212,175,55,0.02)]">
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] uppercase font-bold tracking-widest text-gold">
            Next Success Case Study
          </span>
          <h3 className="text-xl font-bold text-white tracking-wide">
            Your Project Belongs Here
          </h3>
          <p className="text-zinc-400 text-xs md:text-sm">
            Let&apos;s build a custom digital presence, automate your workflows, or structure your SaaS application.
          </p>
        </div>
        <Link
          href="/contact"
          className="group flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest px-6 py-4 transition-all hover:scale-[1.02] shadow-lg shadow-gold/5 shrink-0"
        >
          <span>Start Your Project</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
