"use client";

import React, { useState } from "react";
import { Compass, Check, Users, Shield, Cpu, Play, Layout, ChevronRight, Zap } from "lucide-react";
import Link from "next/link";

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: "Discover",
      label: "Understanding the Mission",
      desc: "Before drafting wireframes or writing TypeScript controllers, we seek to align with your overall purpose. We look at your current roadblocks, technical specs, and target opportunities.",
      duration: "Week 1",
      icon: Users,
      checklist: [
        "Unpack business target metrics",
        "Perform developer stack audits",
        "Document user journey assumptions",
        "Outline target solution architecture",
      ],
    },
    {
      title: "Strategize",
      label: "Creating the Roadmap",
      desc: "We formulate a definitive technical blueprint. We plan server configuration routes, select third-party integrations (APIs), establish security standards, and define timeline tiers.",
      duration: "Week 2",
      icon: Compass,
      checklist: [
        "Design schema models (Postgres/SupaBase)",
        "Select external API connections",
        "Draft database architecture models",
        "Submit final scope documents",
      ],
    },
    {
      title: "Design",
      label: "Building the Experience",
      desc: "Our design system covers the entire user interaction. We create premium styling layouts in Figma using sleek typography, CSS glassmorphism, responsive frames, and micro-animations.",
      duration: "Weeks 3-4",
      icon: Layout,
      checklist: [
        "High-fidelity desktop/mobile Figma files",
        "Establish styling guidelines & tokens",
        "Prototype micro-animations & transitions",
        "Obtain layout approvals",
      ],
    },
    {
      title: "Develop",
      label: "Engineering the Solution",
      desc: "Our engineering is fast, clean, and highly secure. We structure pages inside Next.js App Router, write clean TypeScript types, build Tailwind UI frames, and run performance checks.",
      duration: "Weeks 5-8",
      icon: Cpu,
      checklist: [
        "Initialize Next.js typescript environments",
        "Write clean component libraries",
        "Integrate Stripe billing workflows",
        "Run unit testing checks & type validation",
      ],
    },
    {
      title: "Deliver",
      label: "Launching and Improving",
      desc: "Deploying code live onto Vercel. We set up analytic metrics, perform SEO crawlers auditing, verify security parameters, and hand over dashboard control tools.",
      duration: "Ongoing",
      icon: Play,
      checklist: [
        "Launch Vercel production environments",
        "Map domain names & check security keys",
        "Configure SEO indexing meta headers",
        "Perform handover tutorials",
      ],
    },
  ];

  return (
    <div className="relative w-full py-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-20">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="max-w-3xl flex flex-col gap-6">
        <div className="flex items-center gap-2 border border-gold/20 bg-gold/5 px-4 py-1.5 rounded-full self-start">
          <Zap className="w-3.5 h-3.5 text-gold" />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold">
            Our Work Method
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
          From Vision To Reality: <br />
          <span className="text-gradient-gold">Our Collaborative Workflow</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed">
          We operate as your strategic technical partner. Explore our structured 5-stage workflow to understand how we carry your idea from its loading sequence to market scaling.
        </p>
      </div>

      {/* Workflow Timeline layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left selector timeline: Steps lists */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-2 block">
            Select Step to Expand Details
          </span>

          <div className="flex flex-col gap-3">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={s.title}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 ${
                    isActive
                      ? "border-[#D4AF37] bg-[#D4AF37]/5 shadow-[0_0_15px_rgba(212,175,55,0.05)]"
                      : "border-white/5 bg-[#0a0a0a]/50 hover:border-white/10 hover:bg-[#0a0a0a]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all ${
                        isActive ? "border-[#D4AF37] text-[#D4AF37]" : "border-white/5 text-zinc-500"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[9px] uppercase tracking-widest text-zinc-500">
                        Stage 0{idx + 1}
                      </span>
                      <h3 className="text-sm font-bold text-white tracking-wide">{s.title}</h3>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 text-zinc-500 transition-transform ${
                      isActive ? "translate-x-0.5 text-[#D4AF37]" : ""
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right detailed dashboard panel */}
        <div className="lg:col-span-7 border border-white/5 bg-[#0a0a0a]/80 p-6 md:p-8 rounded-3xl backdrop-blur-md flex flex-col gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-[40px] pointer-events-none" />

          {/* Heading */}
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
                {steps[activeStep].label}
              </span>
              <h2 className="text-2xl font-bold tracking-wide text-white mt-1">
                {steps[activeStep].title} Process
              </h2>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest border border-white/10 bg-white/5 px-3 py-1 rounded-md text-zinc-400">
              {steps[activeStep].duration}
            </span>
          </div>

          {/* Description */}
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
            {steps[activeStep].desc}
          </p>

          {/* Checklist */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">
              Key Focus Deliverables:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {steps[activeStep].checklist.map((item) => (
                <div key={item} className="flex gap-2.5 items-center">
                  <div className="w-4 h-4 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-zinc-300 text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Prompt */}
          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">
              Every detail is engineered with responsibility and integrity.
            </span>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-[10px] uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-colors self-start sm:self-center"
            >
              Start Project Session
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
