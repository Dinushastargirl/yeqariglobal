"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Compass, Shield, Award, Sparkles, BookOpen } from "lucide-react";

export default function AboutPage() {
  const beliefs = [
    {
      title: "Purpose",
      desc: "Technology should create meaningful impact.",
      longDesc: "We don't build features just because they are possible; we build them because they serve a real need. Every platform is designed to align with human values and positive goals.",
      icon: Heart,
      color: "border-pink-500/20 text-pink-400 bg-pink-500/5",
    },
    {
      title: "Excellence",
      desc: "Quality reflects our values.",
      longDesc: "Stewardship requires that we perform our crafts with dedication and thoroughness. We avoid shortcuts, building clean, secure architectures that stand the test of time.",
      icon: Award,
      color: "border-amber-500/20 text-amber-400 bg-amber-500/5",
    },
    {
      title: "Innovation",
      desc: "We continuously improve.",
      longDesc: "The tech landscape is in constant motion. We stay curious, continuously mastering Next.js developments, LLMs, and micro-automations to deliver state-of-the-art results.",
      icon: Sparkles,
      color: "border-emerald-500/20 text-emerald-400 bg-emerald-500/5",
    },
    {
      title: "Integrity",
      desc: "Trust builds everything.",
      longDesc: "We operate with total transparency. From clear pricing sheets to honest timelines, we prioritize truth, collaboration, and ethical data governance.",
      icon: Shield,
      color: "border-blue-500/20 text-blue-400 bg-blue-500/5",
    },
  ];

  const visionTimeline = [
    {
      stage: "Today",
      label: "Bespoke Architecture",
      desc: "Building beautiful Next.js user interfaces, automating operations using advanced scripts, and formulating product concepts for scaling businesses.",
    },
    {
      stage: "Tomorrow",
      label: "Proprietary Software Systems",
      desc: "Transitioning into building in-house tooling, productivity platforms, and automated workflow applications that empower millions of operations globally.",
    },
    {
      stage: "Future",
      label: "Global Innovation Company",
      desc: "An integrated technological network linking SaaS tools, education platforms (Yeqari Academy), and advanced laboratories to support purpose-driven creators.",
    },
  ];

  return (
    <div className="relative w-full py-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-28">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-gradient-to-tr from-[#D4AF37]/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />

      {/* Hero Header */}
      <div className="max-w-4xl flex flex-col gap-6">
        <div className="flex items-center gap-2 border border-[#D4AF37]/35 bg-[#D4AF37]/5 px-4.5 py-2 rounded-full self-start shadow-[0_0_15px_rgba(212,175,55,0.05)]">
          <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#D4AF37]">
            Our Story & Stewardship
          </span>
        </div>
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-sans text-glow-white">
          More Than Technology: <br />
          <span className="text-gradient-gold text-glow-gold">A Journey of Purpose</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-lg leading-relaxed tracking-wide max-w-3xl mt-4">
          At Yeqari, we believe that technology is not just about writing clean lines of code. It is about unlocking the latent potential that exists inside every person, business, and idea. Built on a foundation of biblical stewardship, we look at engineering as a service meant to create positive, meaningful, and ethical impact.
        </p>
      </div>

      {/* Philosophy Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-white/5 pt-20">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Driven by <span className="text-[#D4AF37]">Purpose</span>,<br />Engineered for <span className="text-gradient-gold">Excellence</span>
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-xl">
            Our name stands for a set of values: Why we start, Excellence in our execution, Quest for continuous improvement, Advancement of human potential, Responsibility to our stakeholders, and Innovation in our products.
          </p>
          <div className="border-l-2 border-[#D4AF37] pl-5 py-2 italic text-zinc-300 text-xs md:text-base font-serif leading-relaxed max-w-lg mt-2">
            &ldquo;To whom much is given, much will be required. We view our technical skills as talents entrusted to us to construct tools that help people work smarter and build their vision.&rdquo;
          </div>
        </div>

        <div className="lg:col-span-5 relative border border-[#D4AF37]/15 bg-[#0a0a0a]/90 rounded-3xl p-8 md:p-10 backdrop-blur-md overflow-hidden flex flex-col gap-5 shadow-[0_0_30px_rgba(212,175,55,0.02)]">
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl" />
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#D4AF37] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Core Philosophy
          </h3>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
            Every business begins with an idea. But to bridge the gap between idea and scaling reality, you need solid design, bulletproof technology, and strategic marketing. Yeqari exists to serve as that bridge, providing high-quality Next.js frontend development, customized AI configurations, and workflow tools.
          </p>
        </div>
      </div>

      {/* Beliefs Section */}
      <div className="flex flex-col gap-16 border-t border-white/5 pt-20">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#D4AF37]">
            Operating Pillars
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Our Core Beliefs
          </h2>
          <p className="text-zinc-500 text-xs md:text-sm">
            These four pillars dictate how we interact with customers, engineer systems, and design software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {beliefs.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="group p-6 md:p-8 rounded-3xl border border-white/5 bg-[#0a0a0a]/50 hover:border-[#D4AF37]/35 hover:bg-[#0a0a0a]/90 hover:shadow-[0_0_25px_rgba(212,175,55,0.03)] transition-all duration-300 flex flex-col gap-5"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${b.color} transition-transform group-hover:scale-105 duration-300`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-extrabold text-white tracking-widest uppercase">{b.title}</h3>
                  <span className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold">
                    {b.desc}
                  </span>
                  <p className="text-[11px] text-zinc-500 leading-relaxed mt-2">{b.longDesc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="flex flex-col gap-16 border-t border-white/5 pt-20 pb-8">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#D4AF37]">
            Vision Blueprint
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Our Vision Timeline
          </h2>
          <p className="text-zinc-500 text-xs md:text-sm">
            How we scale our efforts to impact more creators and businesses worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {visionTimeline.map((item, idx) => (
            <div
              key={item.stage}
              className="relative p-8 rounded-3xl border border-white/5 bg-[#0c0c0c]/80 flex flex-col gap-6 hover:border-[#D4AF37]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl font-extrabold text-[#D4AF37] font-sans">
                  0{idx + 1}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 border border-white/5 bg-white/5 px-2.5 py-0.5 rounded">
                  {item.stage}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-base font-bold text-white tracking-wide">
                  {item.label}
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
