"use client";

import React, { useState } from "react";
import { Check, Info, HelpCircle, ArrowRight, DollarSign, Calendar, Sparkles } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const [sliderValue, setSliderValue] = useState<number>(2); // 1: Starter, 2: Growth, 3: Premium

  const packages = [
    {
      level: 1,
      id: "starter",
      name: "Starter Path",
      sub: "For businesses beginning their online journey.",
      price: "$1,200 - $2,500",
      timeline: "2-3 Weeks",
      features: [
        "1 - 3 Premium Responsive Next.js Pages",
        "Tailwind CSS theme styling configuration",
        "Standard SVG brand logo integration",
        "Responsive glassmorphic navigation menu",
        "Vercel hosting setup & configurations",
        "Basic SEO audit setup & analytics triggers",
      ],
      cta: "Launch Starter Build",
    },
    {
      level: 2,
      id: "growth",
      name: "Growth Path",
      sub: "For scaling businesses ready to expand visibility.",
      price: "$3,000 - $6,000",
      timeline: "4-6 Weeks",
      features: [
        "Up to 8 Premium Next.js Pages",
        "Sanity CMS integration for blogs & portfolios",
        "Interactive Canvas background scripts",
        "Structured contact & database forms",
        "Simple operational automation integrations",
        "Framer Motion transitions and scroll styling",
        "Full schema layout setups",
      ],
      cta: "Accelerate Growth Build",
    },
    {
      level: 3,
      id: "premium",
      name: "Premium Path",
      sub: "For companies seeking total transformation.",
      price: "$8,000+",
      timeline: "8-12 Weeks",
      features: [
        "Custom SaaS platform architectures",
        "Multi-tenant auth systems (NextAuth/SupaBase)",
        "Advanced Stripe subscription integration",
        "Cognitive AI assistant chatbot integrations",
        "Secure database triggers and webhook scripting",
        "Full dashboard control panels",
        "Dedicated weekly workflow strategy sessions",
      ],
      cta: "Engineer Custom Systems",
    },
  ];

  const activePack = packages.find((p) => p.level === sliderValue) || packages[1];

  return (
    <div className="relative w-full py-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-20">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="max-w-3xl flex flex-col gap-6">
        <div className="flex items-center gap-2 border border-gold/20 bg-gold/5 px-4 py-1.5 rounded-full self-start">
          <DollarSign className="w-3.5 h-3.5 text-gold" />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold">
            Investment Structure
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
          Choose Your Growth Path: <br />
          <span className="text-gradient-gold">Transparent, Value-First Pricing</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed">
          We believe in direct alignment between your business milestones and our engineering scope. Explore our standard packages or adjust the scope slider below to estimate outputs.
        </p>
      </div>

      {/* Interactive Scope Estimator Slider */}
      <div className="border border-white/5 bg-[#0a0a0a]/80 p-8 rounded-3xl backdrop-blur-md max-w-3xl mx-auto w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
            Interactive Budget & Scope Estimator
          </span>
          <h3 className="text-lg font-bold text-white tracking-wide">
            Slide to Customize Your Project Blueprint
          </h3>
          <p className="text-zinc-500 text-xs">
            Drag the slider to preview matching features, estimated cost, and timeline options.
          </p>
        </div>

        {/* The Slider Control */}
        <div className="flex flex-col gap-4 mt-2">
          <input
            type="range"
            min="1"
            max="3"
            step="1"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
          />
          <div className="flex justify-between text-[10px] text-zinc-500 font-bold uppercase tracking-widest px-1">
            <span className={sliderValue === 1 ? "text-gold" : ""}>Starter</span>
            <span className={sliderValue === 2 ? "text-gold" : ""}>Growth</span>
            <span className={sliderValue === 3 ? "text-gold" : ""}>Premium</span>
          </div>
        </div>

        {/* Dynamic Slider Preview Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/5 pt-6 items-start">
          {/* Left info column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div>
              <span className="text-[9px] uppercase tracking-widest font-bold text-zinc-500">
                Selected Package
              </span>
              <h4 className="text-xl font-bold text-white tracking-wide mt-1">
                {activePack.name}
              </h4>
              <p className="text-zinc-500 text-xs mt-1 leading-relaxed">
                {activePack.sub}
              </p>
            </div>

            <div className="flex flex-col gap-2.5 mt-2">
              <div className="flex items-center gap-2 text-xs text-white">
                <DollarSign className="w-4 h-4 text-gold" />
                <span className="font-bold text-base text-[#D4AF37]">{activePack.price}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Calendar className="w-4 h-4 text-zinc-500" />
                <span>Est. timeline: {activePack.timeline}</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 rounded-full bg-white text-black hover:bg-[#D4AF37] hover:text-black font-semibold text-[10px] uppercase tracking-widest px-5 py-3 transition-colors mt-2"
            >
              <span>{activePack.cta}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Right features column */}
          <div className="md:col-span-7 border-l border-white/5 pl-0 md:pl-8 flex flex-col gap-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">
              Features Included
            </span>
            <div className="flex flex-col gap-3">
              {activePack.features.map((feat) => (
                <div key={feat} className="flex gap-2.5 items-start">
                  <div className="w-4 h-4 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-zinc-400 text-xs leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detail Table */}
      <div className="flex flex-col gap-8 border-t border-white/5 pt-16">
        <h3 className="text-lg font-bold text-center text-white tracking-wide">
          Growth Paths Comparison Table
        </h3>

        <div className="overflow-x-auto border border-white/5 bg-[#0a0a0a]/50 rounded-2xl backdrop-blur-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-[9px] uppercase tracking-widest text-zinc-400">
                <th className="p-5 font-bold">Scope Pillar</th>
                <th className="p-5 font-bold text-[#D4AF37]">Starter</th>
                <th className="p-5 font-bold text-white">Growth</th>
                <th className="p-5 font-bold text-white">Premium</th>
              </tr>
            </thead>
            <tbody className="text-zinc-400 divide-y divide-white/5">
              <tr>
                <td className="p-5 font-bold text-white">Next.js Page Limit</td>
                <td className="p-5">1 - 3 pages</td>
                <td className="p-5">Up to 8 pages</td>
                <td className="p-5">Unlimited / Dynamic</td>
              </tr>
              <tr>
                <td className="p-5 font-bold text-white">Content CMS (Sanity)</td>
                <td className="p-5">No</td>
                <td className="p-5">Yes (Blog/Portfolio)</td>
                <td className="p-5">Yes (Full Multi-tenant dashboard)</td>
              </tr>
              <tr>
                <td className="p-5 font-bold text-white">Stripe Integration</td>
                <td className="p-5">No</td>
                <td className="p-5">Simple Donate/Checkout Link</td>
                <td className="p-5">Yes (Advanced subscription models)</td>
              </tr>
              <tr>
                <td className="p-5 font-bold text-white">AI integrations</td>
                <td className="p-5">No</td>
                <td className="p-5">No</td>
                <td className="p-5">Custom RAG chatbots & scrapers</td>
              </tr>
              <tr>
                <td className="p-5 font-bold text-white">Support SLA</td>
                <td className="p-5">Email only</td>
                <td className="p-5">Slack channels + Email</td>
                <td className="p-5">Weekly calls + Private slack channel</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
