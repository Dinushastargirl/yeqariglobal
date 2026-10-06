"use client";

import React, { useState } from "react";
import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"digital" | "ventures" | "academy">("digital");

  const divisions = {
    digital: {
      name: "YEQARI DIGITAL",
      accent: "#6D28D9",
      badge: "DIGITAL & PRODUCT EXECUTION",
      desc: "Complete design, engineering, and digital marketing execution for established brands and modern enterprises.",
      items: [
        { name: "Website Development", desc: "High-performance websites, custom platforms, and responsive web applications engineered for speed, conversion, and global reach." },
        { name: "Branding & Identity", desc: "Distinctive visual systems, logo architecture, typography, guidelines, and brand narratives that make companies iconic." },
        { name: "Social Media Management", desc: "Multi-platform brand presence, content curation, community building, and algorithmic distribution." },
        { name: "Content Strategy", desc: "Editorial copywriting, multimedia assets, storytelling frameworks, and positioning that captivate audience attention." },
        { name: "Marketing Strategy", desc: "Full-funnel digital campaigns, paid performance advertising, search optimization, and data-driven customer acquisition." }
      ]
    },
    ventures: {
      name: "YEQARI VENTURES",
      accent: "#059669",
      badge: "STARTUP INCUBATION & ACCELERATION",
      desc: "Dedicated venture-building support to take early-stage founders and raw concepts into funded, operating realities.",
      items: [
        { name: "Startup Launch Package", desc: "All-in-one turnkey foundation: brand setup, launch page, pitch materials, infrastructure setup, and go-to-market plan." },
        { name: "Business Proposal Development", desc: "Institutional-grade investment proposals, pitch decks, market whitespace analysis, and financial feasibility models." },
        { name: "MVP Planning", desc: "Scoping core feature sets, user journey architecture, product requirement definitions (PRD), and prototype execution." },
        { name: "Digital Presence Setup", desc: "Corporate domain, email infrastructure, CRM integrations, analytics pipelines, and official digital touchpoint deployment." },
        { name: "Startup Growth Strategy", desc: "Early traction experiments, product-market fit validation, CAC/LTV tuning, and initial customer acquisition flywheels." }
      ]
    },
    academy: {
      name: "YEQARI ACADEMY",
      accent: "#A855F7",
      badge: "EDUCATION & AI EMPOWERMENT",
      desc: "Upskilling corporate teams, professionals, and students in applied AI, modern technology, and digital mastery.",
      items: [
        { name: "Corporate Training", desc: "Tailored executive and team workshops on modern software workflows, digital transformation, and organizational AI adoption." },
        { name: "Webinars", desc: "Live interactive digital masterclasses on emerging tech trends, digital marketing architecture, and product building." },
        { name: "Student Training", desc: "Hands-on development, design, and entrepreneurial bootcamps designed to bridge the gap between academic theory and real-world tech." },
        { name: "AI Awareness Programs", desc: "Demystifying artificial intelligence, generative tools, and intelligent automation for businesses and non-technical stakeholders." },
        { name: "AI Cert Awareness Program", desc: "Guided pathways and certification readiness for recognized international AI standards and professional accreditations." }
      ]
    }
  };

  const bridgeSteps = [
    { num: "01", name: "Idea", sub: "SPARK OF INSPIRATION", desc: "A raw concept with potential." },
    { num: "02", name: "Strategy", sub: "EXECUTION ROADMAP", desc: "Aligning purpose with market data." },
    { num: "03", name: "Design", sub: "USER EXPERIENCE", desc: "Premium interface layouts." },
    { num: "04", name: "Technology", sub: "NEXT.JS & CLOUD BUILD", desc: "Rigorous software engineering." },
    { num: "05", name: "Growth", sub: "SCALE & ACCELERATION", desc: "Vercel hosting and live scaling." }
  ];

  const projects = [
    {
      id: "pickher",
      category: "Mobility Platform & Safety Systems",
      name: "PICKHER",
      desc: "Women-to-women mobility network. We built the complete rider & verified driver ecosystem, realtime dispatch, biometric safety verification, and regional launch system.",
      tech: "React Native • Geospatial Engine • WebSockets • Redis",
      role: "Product Strategy • Mobile Engineering",
      image: "/assets/case-pickher.jpg"
    },
    {
      id: "samaranna",
      category: "E-Commerce & Interactive Storytelling",
      name: "SAMARANNA",
      desc: "Personalized digital gifts and sensory memory experiences. Built with a bespoke WebGL unboxing visualizer, automated media rendering pipeline, and high-conversion checkout.",
      tech: "Next.js • WebGL Three.js • Cloud Media Transcoder",
      role: "Creative Direction • Full-Stack Build",
      image: "/assets/case-samaranna.jpg"
    },
    {
      id: "speechxyz",
      category: "Intelligent Systems & Voice AI",
      name: "SPEECHXYZ",
      desc: "Sub-50ms conversational voice intelligence and speech interface. Engineered with custom audio worklets for bidirectional streaming, ambient noise rejection, and enterprise SDK.",
      tech: "Audio Worklets • WebSockets • Neural STT/TTS",
      role: "AI Architecture • Interface Design",
      image: "/assets/case-speechxyz.jpg"
    },
    {
      id: "yeqari",
      category: "Brand Identity & Digital Ecosystem",
      name: "YEQARI GLOBAL",
      desc: "Our own master digital ecosystem. Demonstrates that technical rigor and creative restraint create superior human outcomes. Incorporates precision typography and custom canvas lattices.",
      tech: "Modern Web Platform • Custom Canvas • Design System",
      role: "Brand Architecture • Design & Code",
      image: "/assets/case-yeqari.jpg"
    }
  ];

  const currentDiv = divisions[activeTab];

  return (
    <div className="flex flex-col">
      
      {/* HERO */}
      <section className="relative pt-16 pb-24 md:pt-20 md:pb-32 border-b border-[#121110]/8">
        <div className="max-w-[1360px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[#848079] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" />
                GLOBAL TECHNOLOGY & DIGITAL GROWTH
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#121110] leading-[0.95] mb-8">
                BUILT FOR MORE<span className="text-[#7C3AED]">.</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#57544F] leading-relaxed max-w-xl mb-10 font-normal">
                We turn ideas, technology and creativity into digital experiences that move businesses forward.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#121110] text-[#FAF9F6] text-sm font-semibold hover:bg-[#6D28D9] transition-all transform hover:-translate-y-0.5"
                >
                  Start a conversation <span>↗</span>
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#121110]/20 text-[#121110] text-sm font-semibold hover:border-[#121110] hover:bg-[#F4F2EC] transition-all transform hover:-translate-y-0.5"
                >
                  Explore our work <span>↓</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual: Abstract Typographic/Geometric Lattice */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[480px] aspect-square rounded-2xl border border-[#121110]/10 bg-[#F4F2EC] overflow-hidden shadow-sm">
                <HeroCanvas />
                <div className="absolute bottom-4 left-5 right-5 flex justify-between font-mono text-[11px] text-[#848079] pointer-events-none">
                  <span>COORDINATES: LATENT SPACE</span>
                  <span>STATUS: COHERING</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 01 — INTRODUCTION (EDITORIAL STATEMENT) */}
      <section className="py-28 md:py-36 border-b border-[#121110]/8">
        <div className="max-w-[1100px] mx-auto px-6 md:px-8">
          <div className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#848079] leading-[1.15] mb-3">
            Some ideas should stay ideas.
          </div>
          <div className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#121110] leading-[1.1] mb-12">
            Others deserve to become <span className="text-[#6D28D9] italic font-normal">real.</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-[#121110]/8">
            <div className="md:col-span-3 font-mono text-xs font-semibold tracking-wider text-[#848079] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" />
              MISSION MANIFESTO
            </div>
            <div className="md:col-span-9 text-lg sm:text-xl text-[#57544F] leading-relaxed">
              YEQARI GLOBAL brings strategy, design, technology and growth together to turn possibilities into things people can actually use. We partner with ambitious leaders to shape products that define categories.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — OUR THREE DIVISIONS (YEQARI DIGITAL, VENTURES, ACADEMY) */}
      <section className="py-28 md:py-36 border-b border-[#121110]/8">
        <div className="max-w-[1360px] mx-auto px-6 md:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[#848079] uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" />
                CORE ECOSYSTEM
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#121110]">
                Everything you need to build & scale.
              </h2>
            </div>
            <Link href="/services" className="text-sm font-semibold text-[#6D28D9] hover:underline">
              View full capabilities ↗
            </Link>
          </div>

          {/* Division Selector Tabs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <button
              onClick={() => setActiveTab("digital")}
              className={`px-6 py-3 rounded-full font-mono text-xs font-bold transition-all ${
                activeTab === "digital"
                  ? "bg-[#6D28D9] text-white shadow-sm"
                  : "bg-[#F4F2EC] text-[#57544F] hover:bg-[#EBE8E1]"
              }`}
            >
              YEQARI DIGITAL
            </button>
            <button
              onClick={() => setActiveTab("ventures")}
              className={`px-6 py-3 rounded-full font-mono text-xs font-bold transition-all ${
                activeTab === "ventures"
                  ? "bg-[#059669] text-white shadow-sm"
                  : "bg-[#F4F2EC] text-[#57544F] hover:bg-[#EBE8E1]"
              }`}
            >
              YEQARI VENTURES
            </button>
            <button
              onClick={() => setActiveTab("academy")}
              className={`px-6 py-3 rounded-full font-mono text-xs font-bold transition-all ${
                activeTab === "academy"
                  ? "bg-[#A855F7] text-white shadow-sm"
                  : "bg-[#F4F2EC] text-[#57544F] hover:bg-[#EBE8E1]"
              }`}
            >
              YEQARI ACADEMY
            </button>
          </div>

          {/* Active Division Panel */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F4F2EC] border border-[#121110]/10">
            <div className="mb-8 pb-6 border-b border-[#121110]/10 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
              <div>
                <span
                  className="font-mono text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white border border-[#121110]/10 inline-block mb-3"
                  style={{ color: currentDiv.accent }}
                >
                  {currentDiv.badge}
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#121110]">
                  {currentDiv.name}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#57544F] max-w-lg leading-relaxed">
                {currentDiv.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentDiv.items.map((it) => (
                <div
                  key={it.name}
                  className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#121110]/8 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span style={{ color: currentDiv.accent }}>✦</span>
                      <h4 className="text-base font-extrabold text-[#121110]">{it.name}</h4>
                    </div>
                    <p className="text-xs text-[#57544F] leading-relaxed">{it.desc}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-4 text-xs font-bold inline-flex items-center gap-1 hover:underline"
                    style={{ color: currentDiv.accent }}
                  >
                    Learn more ↗
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 03 — THE BRIDGE: IDEA TO GROWTH */}
      <section className="py-28 md:py-36 bg-[#121110] text-[#FAF9F6] border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-6 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold tracking-widest text-[#A855F7] uppercase block mb-3">
              OUR CORE PURPOSE
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              The Bridge: Idea to Growth
            </h2>
            <p className="text-sm sm:text-base text-[#848079] mt-4">
              You do not need five different partners. YEQARI guides an idea through the complete journey from initial hypothesis to compounding scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {bridgeSteps.map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-2xl bg-[#1A1918] border border-white/10 flex flex-col gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center font-mono text-xs font-bold text-[#E9D5FF]">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">{step.name}</h3>
                  <div className="font-mono text-[11px] text-[#A855F7] tracking-wider uppercase font-semibold mt-0.5 mb-2">
                    {step.sub}
                  </div>
                  <p className="text-xs text-[#848079] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 04 — SELECTED WORK */}
      <section className="py-28 md:py-36 border-b border-[#121110]/8">
        <div className="max-w-[1360px] mx-auto px-6 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[#848079] uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" />
                PORTFOLIO ARCHIVE
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#121110]">
                Selected work
              </h2>
            </div>
            <Link href="/work" className="text-sm font-semibold text-[#6D28D9] hover:underline">
              View all archives ↗
            </Link>
          </div>

          <div className="flex flex-col gap-24">
            {projects.map((proj, idx) => (
              <article
                key={proj.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                  idx % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:col-start-6" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-[#121110]/10 bg-[#F4F2EC] shadow-sm group">
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className={`lg:col-span-5 flex flex-col gap-3 ${idx % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#6D28D9] font-semibold">
                    {proj.category}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#121110]">
                    {proj.name}
                  </h3>
                  <p className="text-base text-[#57544F] leading-relaxed">
                    {proj.desc}
                  </p>
                  <div className="pt-4 border-t border-[#121110]/10 mt-2 flex flex-col gap-1 font-mono text-xs text-[#848079]">
                    <div>TECH: {proj.tech}</div>
                    <div>ROLE: {proj.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — WHY YEQARI */}
      <section className="py-28 md:py-36 border-b border-[#121110]/8">
        <div className="max-w-[1360px] mx-auto px-6 md:px-8">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[#848079] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" />
              OUR ETHOS
            </div>
            <div className="text-2xl text-[#848079] font-medium">Not another agency.</div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#121110] mt-1">
              A partner for what you&apos;re building.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "THINK BEYOND THE BRIEF", body: "We do not just execute instructions. We interrogate assumptions, uncover latent market opportunities, and help shape the better product." },
              { num: "02", title: "BUILD WITH PURPOSE", body: "Technology should solve something meaningful. We avoid complexity for its own sake and focus exclusively on what moves the business." },
              { num: "03", title: "DESIGN FOR PEOPLE", body: "Beautiful is never enough. The experience has to feel effortless, fast, and respectful of the human on the other side of the glass." },
              { num: "04", title: "STAY CLOSE TO THE OUTCOME", body: "Launch is not the finish line. It is the beginning of empirical learning. We stay engaged to measure, refine, and accelerate." }
            ].map((p) => (
              <div key={p.num} className="pt-6 border-t-2 border-[#121110] flex flex-col gap-3">
                <span className="font-mono text-xs font-bold text-[#6D28D9]">{p.num}</span>
                <h3 className="text-lg font-extrabold text-[#121110] tracking-tight">{p.title}</h3>
                <p className="text-sm text-[#57544F] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06 — FINAL CTA */}
      <section className="py-28 md:py-36 bg-[#F4F2EC] text-center">
        <div className="max-w-[800px] mx-auto px-6 md:px-8 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[#848079] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" />
            INITIATION
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#121110] mb-6">
            What could we build together?
          </h2>
          <p className="text-lg text-[#57544F] max-w-lg mb-10 leading-relaxed">
            Have an idea, a problem worth solving, or ready to scale through Yeqari Digital, Ventures, or Academy? Let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-[#121110] text-[#FAF9F6] text-base font-semibold hover:bg-[#6D28D9] transition-all transform hover:-translate-y-0.5 shadow-sm"
          >
            Start a conversation <span>↗</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
