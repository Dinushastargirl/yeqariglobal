"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Target, Compass, Sparkles, Cpu, Globe, Layers, ArrowRight } from "lucide-react";

export default function SolutionsPage() {
  const [selectedChallenge, setSelectedChallenge] = useState<string>("presence");

  const challenges = [
    {
      id: "presence",
      badge: "Challenge 01",
      title: "I need a digital presence.",
      solutionTitle: "Digital Foundation",
      desc: "Perfect for growing businesses that need to establish high-end brand authority online, attract leads, and scale visibility.",
      icon: Globe,
      features: [
        { title: "Next.js Web Development", detail: "Fast loading speed, rich SEO, server-side render." },
        { title: "Premium UI/UX Experience", detail: "Beautiful styling, tailored animations, clear conversion paths." },
        { title: "High-Fidelity Branding", detail: "Vector logo assets, style guides, curated color schemes." },
      ],
      pricingRecommend: "Starter or Growth Path",
    },
    {
      id: "improvement",
      badge: "Challenge 02",
      title: "I want to improve my operations.",
      solutionTitle: "Digital Transformation",
      desc: "For established businesses looking to eliminate manual tasks, automate customer flows, and make data-driven decisions.",
      icon: Cpu,
      features: [
        { title: "Workflow Automation", detail: "Connect software, trigger webhooks, automate database backups." },
        { title: "AI Assistant & LLM Integration", detail: "Custom smart chat systems, document indexing, smart analysis." },
        { title: "Custom Dashboard & Tools", detail: "Manage inventory, track growth metrics, organize teams." },
      ],
      pricingRecommend: "Growth or Premium Path",
    },
    {
      id: "idea",
      badge: "Challenge 03",
      title: "I have a product idea.",
      solutionTitle: "Product Development",
      desc: "Designed for founders and software builders who want to launch a SaaS product or validate a software idea in record time.",
      icon: Layers,
      features: [
        { title: "Rapid MVP Bootstrapping", detail: "Launch a clean functional prototype in 4 - 6 weeks." },
        { title: "SaaS Architecture Design", detail: "Subscription integration, user authentication, security keys." },
        { title: "Startup Support & Consulting", detail: "Database modeling, cloud setup, growth analytics configuration." },
      ],
      pricingRecommend: "Premium & Ventures Path",
    },
  ];

  const activeChallenge = challenges.find((c) => c.id === selectedChallenge) || challenges[0];

  return (
    <div className="relative w-full py-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-20">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Page Header */}
      <div className="max-w-3xl flex flex-col gap-6">
        <div className="flex items-center gap-2 border border-gold/20 bg-gold/5 px-4 py-1.5 rounded-full self-start">
          <Compass className="w-3.5 h-3.5 text-gold" />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold">
            Solutions Suite
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
          Choose Your Challenge: <br />
          <span className="text-gradient-gold">We Engineer the Solution</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl">
          We understand that technology isn&apos;t one-size-fits-all. Select your primary operational hurdle below to discover how we customize our services to match your goals.
        </p>
      </div>

      {/* Interactive Challenge Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-white/5 pb-10">
        {challenges.map((c) => {
          const Icon = c.icon;
          const isActive = selectedChallenge === c.id;
          return (
            <button
              key={c.id}
              onClick={() => setSelectedChallenge(c.id)}
              className={`p-6 rounded-2xl border text-left flex items-start gap-4 transition-all duration-300 ${
                isActive
                  ? "border-[#D4AF37] bg-[#D4AF37]/5 shadow-[0_0_20px_rgba(212,175,55,0.05)]"
                  : "border-white/5 bg-[#0a0a0a]/50 hover:border-white/10 hover:bg-[#0a0a0a]"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
                  isActive ? "border-[#D4AF37] text-[#D4AF37] bg-gold/5" : "border-white/5 text-zinc-500"
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-widest font-bold text-zinc-500">
                  {c.badge}
                </span>
                <h3 className="text-sm font-bold text-white tracking-wide">{c.title}</h3>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Solution Display Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeChallenge.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left panel: Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] mb-2 inline-block">
                Tailored Solution Architecture
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-wide font-sans">
                {activeChallenge.solutionTitle}
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm mt-3 leading-relaxed">
                {activeChallenge.desc}
              </p>
            </div>

            {/* Quick Pricing Badge */}
            <div className="flex items-center gap-3 border border-white/5 bg-[#0a0a0a] p-4 rounded-xl">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <div className="flex flex-col">
                <span className="text-[9px] text-zinc-500 uppercase tracking-widest">
                  Recommended Path
                </span>
                <span className="text-xs font-bold text-white">
                  {activeChallenge.pricingRecommend}
                </span>
              </div>
            </div>

            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 rounded-full bg-white text-black hover:bg-[#D4AF37] hover:text-black font-semibold text-xs uppercase tracking-widest px-6 py-4 transition-colors self-start mt-2 w-full sm:w-auto"
            >
              <span>Build this Blueprint</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right panel: Included components */}
          <div className="lg:col-span-7 border border-white/5 bg-[#0a0a0a]/70 p-6 md:p-8 rounded-3xl backdrop-blur-sm flex flex-col gap-6">
            <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold border-b border-white/5 pb-4">
              Included Deliverables & Integrations
            </h3>

            <div className="flex flex-col gap-6">
              {activeChallenge.features.map((feature) => (
                <div key={feature.title} className="flex gap-4 items-start">
                  <div className="w-5 h-5 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mt-0.5 text-gold">
                    <Check className="w-3 h-3" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h4 className="text-sm font-bold text-white tracking-wide">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      {feature.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Yeqari is the bridge from blueprint to deployment.</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
