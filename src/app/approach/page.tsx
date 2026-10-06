import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach — YEQARI GLOBAL",
  description: "The Bridge: Idea to Growth. Discover how YEQARI GLOBAL moves initiatives from conception to market acceleration.",
};

export default function ApproachPage() {
  const steps = [
    {
      num: "01",
      name: "Idea",
      sub: "SPARK OF INSPIRATION",
      headline: "A raw concept with potential.",
      desc: "Every initiative starts with a question and a hypothesis. We deconstruct the opportunity, evaluate technical feasibility, and uncover latent market whitespace before committing capital.",
      activities: [
        "Problem space interrogation & assumption testing",
        "Market whitespace & competitor benchmarking",
        "Technical viability audit",
        "Initial value hypothesis formulation"
      ]
    },
    {
      num: "02",
      name: "Strategy",
      sub: "EXECUTION ROADMAP",
      headline: "Aligning purpose with market data.",
      desc: "Great execution demands clarity. We define the product architecture, unit economics, go-to-market positioning, and milestone governance to keep risk low and trajectory high.",
      activities: [
        "Product architecture & feature scoping (PRD)",
        "Commercial positioning & audience segmentation",
        "Unit economics & capitalization planning",
        "Sprint schedule & milestone governance"
      ]
    },
    {
      num: "03",
      name: "Design",
      sub: "USER EXPERIENCE",
      headline: "Premium interface layouts.",
      desc: "Design is how it works and how it feels. We build bespoke visual systems, intuitive interaction patterns, and human ergonomics that build instant credibility.",
      activities: [
        "High-fashion Swiss typography & visual identity",
        "UX user flow & interactive wireframing",
        "Design systems & component tokenization",
        "Interactive prototypes & usability testing"
      ]
    },
    {
      num: "04",
      name: "Technology",
      sub: "NEXT.JS & CLOUD BUILD",
      headline: "Rigorous software engineering.",
      desc: "We write clean, resilient, production-grade code. From distributed APIs and AI agent workflows to sub-second edge web applications on Next.js, we build for longevity.",
      activities: [
        "Performant frontend engineering (Next.js / React)",
        "Resilient API & microservices architecture",
        "AI agents & LLM workflow integration",
        "Automated CI/CD & end-to-end telemetry"
      ]
    },
    {
      num: "05",
      name: "Growth",
      sub: "SCALE & ACCELERATION",
      headline: "Vercel hosting and live scaling.",
      desc: "Launch is merely day zero. We deploy onto high-availability edge networks, observe telemetry, optimize conversions, and run iterative growth flywheels.",
      activities: [
        "Global edge deployment on Vercel infrastructure",
        "Conversion rate optimization (CRO)",
        "Full-funnel attribution & telemetry observation",
        "Customer advocacy & expansion loops"
      ]
    }
  ];

  return (
    <div className="py-20 md:py-28">
      <div className="max-w-[1360px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="border-b border-[#121110]/8 pb-16 mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[#848079] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" />
            OUR CORE PURPOSE
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-[#121110] mb-6">
            The Bridge: Idea to Growth.
          </h1>
          <p className="text-xl text-[#57544F] max-w-2xl leading-relaxed">
            You do not need five fragmented partners. YEQARI guides an idea through the complete journey from initial hypothesis to compounding scale.
          </p>
        </div>

        {/* 5 Deep-Dive Stages */}
        <div className="flex flex-col gap-20">
          {steps.map((st) => (
            <div
              key={st.num}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-12 border-b border-[#121110]/8 items-start"
            >
              <div className="lg:col-span-4 flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-[#121110] text-[#FAF9F6] flex items-center justify-center font-mono text-sm font-bold shrink-0">
                  {st.num}
                </span>
                <div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-[#121110]">
                    {st.name}
                  </h2>
                  <span className="font-mono text-xs font-bold text-[#6D28D9] tracking-wider uppercase block mt-1">
                    {st.sub}
                  </span>
                  <div className="text-lg font-bold text-[#2A2825] mt-3">
                    {st.headline}
                  </div>
                  <p className="mt-3 text-sm text-[#57544F] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8 bg-[#F4F2EC] rounded-2xl p-8 border border-[#121110]/8">
                <span className="font-mono text-xs uppercase tracking-wider text-[#848079] block mb-4">
                  CORE DELIVERABLES & ACTIVITIES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {st.activities.map((act) => (
                    <div key={act} className="flex items-center gap-3 text-sm font-semibold text-[#121110]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" />
                      {act}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-28 p-12 md:p-16 rounded-2xl bg-[#F4F2EC] border border-[#121110]/10 text-center flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121110] mb-4">
            Where is your initiative right now?
          </h2>
          <p className="text-base text-[#57544F] max-w-md mb-8">
            Whether you have a raw concept or an operating system ready to scale, we meet you at your exact stage.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-[#121110] text-[#FAF9F6] text-sm font-semibold hover:bg-[#6D28D9] transition-colors"
          >
            Start a conversation ↗
          </Link>
        </div>

      </div>
    </div>
  );
}
