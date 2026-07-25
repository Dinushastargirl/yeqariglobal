"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Cpu,
  Layers,
  Globe,
  Compass,
  Code,
  LineChart,
  Target,
  Milestone,
  Heart,
  TrendingUp,
  Workflow
} from "lucide-react";
import EcosystemCanvas from "@/components/EcosystemCanvas";

export default function Home() {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const philosophy = [
    {
      letter: "Y",
      title: "Why",
      sub: "Every creation begins with a question:",
      text: "Why does this matter? We start with the purpose to ensure every line of code has real-world impact.",
    },
    {
      letter: "E",
      title: "Excellence",
      sub: "We pursue quality.",
      text: "We believe quality reflects our values. Our work is crafted with meticulous engineering and detail.",
    },
    {
      letter: "Q",
      title: "Quest",
      sub: "We continuously improve.",
      text: "We view technology as an ongoing quest. We push boundaries to solve harder problems daily.",
    },
    {
      letter: "A",
      title: "Advancement",
      sub: "We move forward.",
      text: "Innovations are only useful if they advance human capabilities. We keep you ahead of the digital curve.",
    },
    {
      letter: "R",
      title: "Responsibility",
      sub: "We build with purpose.",
      text: "Skills and opportunities are gifts. We hold ourselves responsible to create positive ethical impact.",
    },
    {
      letter: "I",
      title: "Innovation",
      sub: "We create what comes next.",
      text: "We build modern tech systems, combining custom AI, responsive styling, and SaaS architectures.",
    },
  ];

  const problemSteps = [
    { stage: "Idea", label: "Spark of Inspiration", desc: "A raw concept with potential." },
    { stage: "Strategy", label: "Execution Roadmap", desc: "Aligning purpose with market data." },
    { stage: "Design", label: "User Experience", desc: "Premium interface layouts." },
    { stage: "Technology", label: "Next.js & Cloud Build", desc: "Rigorous software engineering." },
    { stage: "Growth", label: "Scale & Acceleration", desc: "Vercel hosting and live scaling." },
  ];

  const solutions = [
    {
      title: "Digital Presence",
      tagline: "Be Visible, Trusted, & Scalable",
      desc: "We build modern websites that tell your brand story and convert visitors into partners.",
      items: ["Website Development", "UI/UX Experience Design", "High-Fidelity Branding"],
      icon: Globe,
      color: "from-blue-500/20 to-indigo-500/20",
      borderColor: "group-hover:border-blue-500/30",
    },
    {
      title: "Digital Intelligence",
      tagline: "Work Smarter Through Code",
      desc: "Optimize operations by deploying custom integrations, automated scripts, and smart database triggers.",
      items: ["AI Integrations & LLMs", "Workflow Automation", "Data Analysis Systems"],
      icon: Cpu,
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "group-hover:border-emerald-500/30",
    },
    {
      title: "Digital Products",
      tagline: "Turn Ambition into Businesses",
      desc: "Engineering high-performance software, custom SaaS frameworks, and responsive minimum viable products (MVPs).",
      items: ["SaaS Architecture", "MVP Rapid Bootstrapping", "Custom Enterprise Software"],
      icon: Layers,
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "group-hover:border-amber-500/30",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* ---------------- SECTION 1: HERO ---------------- */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 px-6 md:px-12 text-center">
        {/* Glow backdrop */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 border border-gold/20 bg-gold/5 px-4 py-1.5 rounded-full backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold">
              Welcome to the Yeqari Universe
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight font-sans"
          >
            We don&apos;t just build technology.<br />
            <span className="text-gradient-gold">We build possibilities.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-zinc-400 text-sm md:text-lg max-w-2xl leading-relaxed tracking-wide"
          >
            We transform complex ideas into meaningful digital solutions. From custom SaaS platforms to automated digital intelligence, we bridge the gap between vision and execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-6"
          >
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full bg-[#D4AF37] px-8 py-4 text-xs font-bold uppercase tracking-widest text-black shadow-lg shadow-gold/10 hover:bg-[#D4AF37]/90 transition-all hover:scale-[1.02]"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all"
            >
              Explore Our Philosophy
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ---------------- SECTION 2: PHILOSOPHY ---------------- */}
      <section className="py-20 px-6 md:px-12 border-t border-white/5 bg-[#070707]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold">
              Why We Exist
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-white">
              The Meaning Behind Yeqari
            </h2>
            <p className="text-zinc-500 text-xs md:text-sm">
              We believe purpose-driven engineering leads to extraordinary products. Hover over each letter of our name to explore our core operational philosophy.
            </p>
          </div>

          {/* Interactive Letter Grid */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {philosophy.map((item) => {
              const isHovered = activeLetter === item.letter;
              return (
                <div
                  key={item.letter}
                  onMouseEnter={() => setActiveLetter(item.letter)}
                  onMouseLeave={() => setActiveLetter(null)}
                  className={`relative p-6 rounded-2xl border transition-all duration-500 flex flex-col justify-between min-h-[180px] cursor-pointer ${
                    isHovered
                      ? "border-[#D4AF37] bg-[#D4AF37]/5 shadow-[0_0_20px_rgba(212,175,55,0.08)]"
                      : "border-white/5 bg-[#0a0a0a]"
                  }`}
                >
                  <span
                    className={`text-5xl font-extrabold font-sans leading-none tracking-tight select-none transition-colors duration-500 ${
                      isHovered ? "text-[#D4AF37]" : "text-zinc-800"
                    }`}
                  >
                    {item.letter}
                  </span>

                  <div className="flex flex-col gap-1.5 mt-4">
                    <span className="text-sm font-bold text-white tracking-wide">
                      {item.title}
                    </span>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">
                      {item.sub}
                    </span>
                  </div>

                  {/* Absolute details hover modal inside grid item for mobile visibility */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute inset-0 bg-[#0c0c0c] border border-gold/30 p-5 rounded-2xl z-20 flex flex-col justify-center text-left"
                    >
                      <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-zinc-300 leading-relaxed">{item.text}</p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 3: ECOSYSTEM ---------------- */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold">
              Interactive 3D Simulation
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-white font-sans">
              The Yeqari Universe
            </h2>
            <p className="text-zinc-500 text-xs md:text-sm">
              Our capability spans four distinct sub-entities, orbiting around our unified mission. Explore the planet network to discover custom services.
            </p>
          </div>

          <EcosystemCanvas />
        </div>
      </section>

      {/* ---------------- SECTION 4: PROBLEM WE SOLVE ---------------- */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5 bg-[#070707]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col gap-3">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold">
              Our Core Purpose
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-white font-sans">
              The Bridge: Idea to Growth
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
              Businesses have incredible ideas. But ideas require execution. We act as the technical infrastructure that bridges the gap.
            </p>
          </div>

          {/* Visual Bridge Flow */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 py-8 px-4 border border-white/5 bg-[#0a0a0a] rounded-3xl backdrop-blur-md">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-zinc-800 via-gold/30 to-zinc-800 hidden lg:block -z-10" />

            {problemSteps.map((step, idx) => (
              <div
                key={step.stage}
                className="flex flex-col items-center text-center gap-3 relative z-10 w-full max-w-[200px]"
              >
                <div className="w-12 h-12 rounded-full border border-white/5 bg-[#121212] flex items-center justify-center text-xs font-bold text-[#D4AF37] shadow-xl group hover:border-[#D4AF37]/50 hover:bg-gold/5 transition-all">
                  0{idx + 1}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-bold text-white tracking-wide">{step.stage}</h3>
                  <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">
                    {step.label}
                  </span>
                  <p className="text-[11px] text-zinc-500 leading-relaxed mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 5: SERVICES AS SOLUTIONS ---------------- */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold">
              What We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-white font-sans">
              Services As Scalable Solutions
            </h2>
            <p className="text-zinc-500 text-xs md:text-sm">
              We package professional engineering, design, and workflows into specific outcomes to matches your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className={`group relative p-8 rounded-3xl border border-white/5 bg-[#0a0a0a]/90 hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.04)] transition-all duration-500 flex flex-col justify-between min-h-[380px] overflow-hidden`}
                >
                  {/* Subtle Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none -z-10`} />

                  <div className="flex flex-col gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#D4AF37] border border-white/5 group-hover:border-gold/30 transition-all duration-500">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#D4AF37]">
                        {s.tagline}
                      </span>
                      <h3 className="text-xl font-bold tracking-wide text-white">{s.title}</h3>
                      <p className="text-zinc-500 text-xs md:text-sm leading-relaxed mt-1">
                        {s.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bullet list */}
                  <div className="flex flex-col gap-3 mt-8 border-t border-white/5 pt-6">
                    {s.items.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                        <span className="text-[11px] uppercase tracking-widest text-zinc-400 font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 6 & 9: ROADMAP TIMELINE ---------------- */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5 bg-[#070707]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold">
              Operational Timeline
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-white font-sans">
              The Journey of Building More
            </h2>
            <p className="text-zinc-500 text-xs md:text-sm">
              We align our services structure with a long-term growth projection, shifting from a bespoke service agency to a global tech ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                year: "2026",
                title: "Digital Services",
                desc: "Phase 1: Establishing brand authority. Delivering custom Next.js websites, branding, automation workflows, and MVPs for businesses globally.",
                status: "Active",
              },
              {
                year: "2027",
                title: "Team & Products",
                desc: "Phase 2: Expanding talent networks. Bootstrapping initial in-house productivity software and scaling workflow automation tooling.",
                status: "Planning",
              },
              {
                year: "2028",
                title: "AI & SaaS Ecosystem",
                desc: "Phase 3: Launching specialized cloud SaaS. Injecting advanced cognitive AI solutions for operations and business automation.",
                status: "Future",
              },
              {
                year: "2030",
                title: "Global Tech Ecosystem",
                desc: "Phase 4: Establishing a unified innovation framework. Hosting startups, digital education hubs, and scalable cloud products under Yeqari.",
                status: "Vision",
              },
            ].map((node) => (
              <div
                key={node.year}
                className="relative p-6 rounded-2xl border border-white/5 bg-[#0a0a0a] flex flex-col gap-4 overflow-hidden"
              >
                {/* Year tag */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold tracking-tight text-white font-sans">
                    {node.year}
                  </span>
                  <span
                    className={`text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded border ${
                      node.status === "Active"
                        ? "text-gold border-gold/30 bg-gold/5"
                        : "text-zinc-500 border-white/5 bg-white/5"
                    }`}
                  >
                    {node.status}
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    {node.title}
                  </h4>
                  <p className="text-[11px] text-zinc-500 leading-relaxed mt-1">{node.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 7: HOW WE WORK (PROCESS) ---------------- */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold">
              Our Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-white font-sans">
              Our Process is a Mission
            </h2>
            <p className="text-zinc-500 text-xs md:text-sm">
              We guide every project through a systematic 4-stage lifecycle to deliver excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Discover", label: "Understand Vision", desc: "We unpack your brand objectives, technical roadblocks, and target opportunities." },
              { title: "Create", label: "Design Solution", desc: "Mapping UI/UX wireframes, styling tokens, and custom database integrations." },
              { title: "Build", label: "Engineer Tech", desc: "Writing production-grade TypeScript code, Tailwind designs, and cloud databases." },
              { title: "Scale", label: "Grow Together", desc: "Continuous improvement, Vercel analytics, search auditing, and SaaS upgrades." },
            ].map((p, idx) => (
              <div key={p.title} className="flex flex-col gap-4 relative">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-extrabold text-zinc-800 font-sans">
                    0{idx + 1}
                  </span>
                  <span className="h-[1px] bg-white/5 flex-grow hidden md:block" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-bold text-white tracking-wide uppercase">
                    {p.title}
                  </h4>
                  <span className="text-[10px] text-gold uppercase tracking-widest">
                    {p.label}
                  </span>
                  <p className="text-zinc-500 text-[11px] leading-relaxed mt-2">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 8: FOUNDER VISION ---------------- */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.02)_0%,rgba(0,0,0,0)_80%)]">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <div className="w-12 h-12 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 flex items-center justify-center text-[#D4AF37]">
            <Heart className="w-5 h-5" />
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold">
              Founder Vision
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-white italic font-serif max-w-2xl leading-relaxed mx-auto">
              &ldquo;A company built from the belief that talents, skills, and opportunities are gifts meant to create positive, lasting impact.&rdquo;
            </h2>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-widest font-bold text-white">
              The Yeqari Foundation
            </span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
              Purpose-Driven Innovation & Stewardship
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
