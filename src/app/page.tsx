"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import HeroReel from "@/components/HeroReel";
import { divisionLists, servicesData } from "@/data/servicesData";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  division: "digital" | "labs" | "startup";
  description: string;
  fullDescription: string;
  tech: string[];
  image: string;
  link: string;
  goals: string[];
  metrics: { label: string; value: string }[];
  problemDetails: string;
  solutionBreakdown: string;
}

const SELECTED_WORKS = [
  { id: "nutrigpt-landing", title: "NutriGPT", category: "AI Landing Page", image: "https://picsum.photos/seed/nutrition/1200/800", link: "https://nutrigpt-h37z.vercel.app/" },
  { id: "market-store", title: "Little Heart Bakes", category: "E-Commerce", image: "https://picsum.photos/seed/bakery/1200/800", link: "https://little-heart-bakes.base44.app/" },
  { id: "aurum-bookings", title: "Aurum Bookings", category: "AI Software", image: "https://picsum.photos/seed/booking/1200/800", link: "https://aurum-bookings.vercel.app/login" },
  { id: "vork-global", title: "Vork Global", category: "Corporate Web", image: "https://picsum.photos/seed/corporate/1200/800", link: "https://vorkglobal.vercel.app/" }
];

const ALL_PROJECTS: ProjectItem[] = [
  {
    id: "animal-vision",
    title: "Animal Vision Camera – People's Bank",
    category: "Marketing",
    division: "digital",
    description: "An animal-vision simulator that uses camera input + pixel manipulation to recreate how animals see.",
    fullDescription: "A creative campaign required a unique interactive experience to visualize 'different perspectives.' Built an animal-vision simulator that uses camera input + pixel manipulation to recreate how cats, snakes, bees, and birds see.",
    tech: ["JavaScript", "TypeScript", "Canvas API", "WebRTC"],
    image: "https://picsum.photos/seed/vision/800/600",
    link: "https://merry-phoenix-e0c270.netlify.app/",
    goals: ["Visualize multiple animal perspectives", "Real-time canvas shader manipulation", "Low-latency camera frame mapping"],
    metrics: [{ label: "Frame Rate", value: "60 FPS" }, { label: "Campaign Reach", value: "85K+" }],
    problemDetails: "The campaign needed an intuitive digital experience without forcing visitors to download native mobile apps.",
    solutionBreakdown: "Engineered in-browser WebRTC video stream processing with GPU canvas filters."
  },
  {
    id: "goya-spin",
    title: "GOYA Spin The Wheel",
    category: "Marketing",
    division: "digital",
    description: "A fully animated promotional spinning wheel with easing, confetti, and sound.",
    fullDescription: "A promotional campaign needed an engaging digital mechanic to attract participants. Developed a fully animated spinning wheel with easing physics, confetti bursts, sound effects, and result logic.",
    tech: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
    image: "https://picsum.photos/seed/goya/800/600",
    link: "https://www.goyacompetition.com",
    goals: ["Engage consumers", "Smooth physical easing", "Immediate prize reveal"],
    metrics: [{ label: "Conversion Lift", value: "+42%" }, { label: "Wheel Spins", value: "120K+" }],
    problemDetails: "Static giveaway forms suffered high drop-off rates.",
    solutionBreakdown: "Replaced dull forms with interactive reward physics and celebratory micro-interactions."
  },
  {
    id: "mental-health",
    title: "Mental Health Reflection App",
    category: "Branding",
    division: "digital",
    description: "A mood-check app with reflective questions inspired by CBT and reward psychology.",
    fullDescription: "Created a gentle, privacy-conscious interactive app for wellness initiatives with reflective prompts and calming visual feedbacks.",
    tech: ["React", "CSS Transitions", "Local Storage"],
    image: "https://picsum.photos/seed/mental/800/600",
    link: "https://heroic-quokka-a46c13.netlify.app/",
    goals: ["Mental wellness reflection", "Zero data leakage", "Soothing user flows"],
    metrics: [{ label: "Daily Active Users", value: "14K" }, { label: "Privacy Rating", value: "100%" }],
    problemDetails: "Users hesitate to log emotions into platforms requiring logins and tracking cookies.",
    solutionBreakdown: "Built a client-only mood tracker that saves reflections exclusively inside local browser storage."
  },
  {
    id: "nutrigpt-landing",
    title: "NutriGPT Landing Page",
    category: "Website",
    division: "digital",
    description: "A high-conversion landing page for an AI-powered nutrition assistant.",
    fullDescription: "Conversion-optimized landing page for NutriGPT, showcasing automated meal analysis, macros breakdown, and personalized health recommendations.",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    image: "https://picsum.photos/seed/nutrition/800/600",
    link: "https://nutrigpt-h37z.vercel.app/",
    goals: ["High conversion waitlist", "Feature demo animations", "Responsive speed"],
    metrics: [{ label: "Lighthouse Score", value: "99/100" }, { label: "Waitlist Signups", value: "18.5K" }],
    problemDetails: "Explaining multi-step AI reasoning to health consumers without overwhelming them.",
    solutionBreakdown: "Segmented features into interactive interactive demonstration snippets."
  },
  {
    id: "market-store",
    title: "Online Store - Little Heart Bakes",
    category: "Website",
    division: "digital",
    description: "A full-featured e-commerce platform for an artisan bakery with dynamic order management.",
    fullDescription: "Artisan e-commerce platform featuring custom cake specification options, date pickers, visual order tracking, and fluid checkout.",
    tech: ["React", "Stripe API", "Tailwind CSS"],
    image: "https://picsum.photos/seed/bakery/800/600",
    link: "https://little-heart-bakes.base44.app/",
    goals: ["Custom pastry options", "Frictionless mobile ordering", "Live inventory sync"],
    metrics: [{ label: "Order Inquiry Lift", value: "+35%" }, { label: "Checkout Duration", value: "1.2s" }],
    problemDetails: "The bakery lost hours handling manual order chats across WhatsApp.",
    solutionBreakdown: "Engineered an interactive product configurator allowing custom text and cake tiers."
  },
  {
    id: "aurum-bookings",
    title: "Aurum Bookings Platform",
    category: "Software",
    division: "labs",
    description: "An AI-enhanced booking and resource management system for luxury operations.",
    fullDescription: "A sophisticated platform using intelligent scheduling heuristics to optimize slot allocations, staff assignment, and client concierge services.",
    tech: ["React", "Node.js", "PostgreSQL", "AI Engine"],
    image: "https://picsum.photos/seed/booking/800/600",
    link: "https://aurum-bookings.vercel.app/login",
    goals: ["Smart scheduling", "Multi-tier role management", "Zero double bookings"],
    metrics: [{ label: "Efficiency Gain", value: "+45%" }, { label: "Latency", value: "35ms" }],
    problemDetails: "High-end clients experienced calendar collisions and manual coordination delays.",
    solutionBreakdown: "Created an automated allocation matrix that calculates buffer times and VIP preferences."
  },
  {
    id: "vork-global",
    title: "Vork Global Workforce Portal",
    category: "Website",
    division: "startup",
    description: "A corporate platform for global workforce solutions and talent deployment.",
    fullDescription: "A multinational platform for Vork Global, facilitating enterprise talent screening, compliance verification, and international workforce deployment.",
    tech: ["React", "Next.js", "Tailwind CSS", "REST API"],
    image: "https://picsum.photos/seed/corporate/800/600",
    link: "https://vorkglobal.vercel.app/",
    goals: ["Corporate branding", "Global compliance portal", "Fast candidate intake"],
    metrics: [{ label: "Crawl Speed", value: "45ms" }, { label: "Client Inquiries", value: "+60%" }],
    problemDetails: "Enterprise partners demanded an authoritative, SOC-grade corporate portal.",
    solutionBreakdown: "Constructed structured division pathways with localized language routing."
  },
  {
    id: "visage-ai",
    title: "VisageAI - Face & Style Scanner",
    category: "AI",
    division: "labs",
    description: "AI-powered face scanner identifying facial proportions to recommend optimal hairstyles.",
    fullDescription: "A computer vision tool that computes facial geometry vector ratios in-browser without sending private photos to cloud servers.",
    tech: ["Computer Vision", "Canvas Context", "Neural Vectors"],
    image: "https://picsum.photos/seed/face/800/600",
    link: "https://visageai-iota.vercel.app/",
    goals: ["100% on-device vision", "Zero server GPU costs", "Instant styling lookup"],
    metrics: [{ label: "Scan Time", value: "340ms" }, { label: "Accuracy", value: "94%" }],
    problemDetails: "Users distrust uploading selfies to unknown remote databases.",
    solutionBreakdown: "Calculated geometry metrics directly inside the browser using HTML5 Canvas mathematical vectors."
  }
];

const VENTURES_DATA = [
  {
    id: "yeqari-crm",
    title: "Yeqari CRM Lite",
    tagline: "Privacy-first lightweight CRM for digital agencies and boutique studios.",
    description: "A fast, local-first CRM featuring drag-and-drop pipeline stages and localized SQLite storage. Built to replace heavy, expensive sales platforms for small teams.",
    status: "Active SaaS",
    problemSolved: "Traditional CRMs are complex, slow, and store client data in centralized public clouds, causing privacy and cost overhead for boutique studios.",
    solutionDetails: "A light, clean sales board that compiles client logs locally. Uses SQLite for zero latency, allowing teams to manage prospects, timeline dates, and proposals in one dashboard.",
    expectedImpact: "Saves up to $150 per user monthly in licensing fees and cuts lead logging time by 60%.",
    techStack: ["React", "Express", "SQLite", "Tailwind CSS"]
  },
  {
    id: "kala-vision",
    title: "Kala Vision Shelf Analyzer",
    tagline: "AI compliance auditor for retail product placement using computer vision.",
    description: "An experimental neural network pipeline that processes in-store security camera frames to detect out-of-stock items and compliance mistakes on shelves in real-time.",
    status: "AI Experiment",
    problemSolved: "Retail brands lose millions annually due to stock outs and incorrect shelf positioning that goes unnoticed by staff for hours.",
    solutionDetails: "An object detection module trained to recognize specific packaging designs. It flags empty hooks or misaligned items and triggers instant notifications to store staff.",
    expectedImpact: "Ensures 98% shelf compliance and increases overall sales velocity by preventing empty-shelf scenarios.",
    techStack: ["Python", "PyTorch", "OpenCV", "FastAPI", "React"]
  },
  {
    id: "pace-headless",
    title: "Pace Headless Commerce Bridge",
    tagline: "Next-gen Shopify API adapter compiling catalog queries in under 50ms.",
    description: "A developer tool designed to bridge old monolith e-commerce systems to high-speed Next.js frontends without rebuilding the billing databases.",
    status: "Concept Rebuild",
    problemSolved: "Migrating legacy online stores to modern frontend platforms usually requires complex, risky, and expensive backend overhauls.",
    solutionDetails: "Exposes a standardized schema query wrapper that maps old databases into modular React components, preserving orders and inventory systems intact.",
    expectedImpact: "Boosts e-commerce page speeds by 300% and reduces rebuild migrations from months to days.",
    techStack: ["Next.js", "GraphQL", "TypeScript", "Shopify API"]
  },
  {
    id: "agent-desk",
    title: "Agent Desk Support Hub",
    tagline: "Collaborative workspaces for AI agents and support teams.",
    description: "A customer ticket workspace coordinating multi-agent loops. Support agents can prompt research agents, translation modules, and auto-drafting tools side-by-side.",
    status: "Prototype",
    problemSolved: "Support teams struggle to research complex technical tickets under pressure, leading to long customer wait times and high churn.",
    solutionDetails: "Orchestrates background tasks where agents retrieve text fragments from technical manuals (RAG) and generate response alternatives for agents to review.",
    expectedImpact: "Reduces ticket resolution loops from 3 hours to under 3 minutes with 90% human approval on initial drafts.",
    techStack: ["Node.js", "WebSockets", "Gemini API", "React"]
  },
  {
    id: "yeqari-cortex",
    title: "Yeqari Cortex AI Layer",
    tagline: "Unified AI orchestration and intelligence layer for enterprise workflows.",
    description: "An advanced intelligence product layer designed to deploy secure LLM pipelines, Retrieval-Augmented Generation (RAG), and agentic workflows directly onto local infrastructure without training data leaks.",
    status: "Active SaaS",
    problemSolved: "Enterprises want to harness the power of LLMs and generative agents, but compliance rules and privacy concerns prevent sending sensitive corporate data to external APIs.",
    solutionDetails: "A modular AI pipeline that bridges private local vector stores and databases with secure model endpoints, supporting real-time data ingestion, local memory, and multi-agent coordination.",
    expectedImpact: "Eliminates public API leakage risks completely and lowers token processing expenses by 45% via local caching layers.",
    techStack: ["Python", "FastAPI", "LangChain", "Vector DB", "React"]
  }
];

export default function HomePage() {
  const [showcaseIdx, setShowcaseIdx] = useState(0);
  const [portfolioCategory, setPortfolioCategory] = useState("All");
  const [venturesStatus, setVenturesStatus] = useState("All");
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectItem | null>(null);
  const [proposalSubmitted, setProposalSubmitted] = useState(false);
  const [formName, setFormName] = useState("");
  const [formService, setFormService] = useState("");

  const currentShowcase = SELECTED_WORKS[showcaseIdx];

  // Auto rotate showcase
  useEffect(() => {
    const timer = setInterval(() => {
      setShowcaseIdx((prev) => (prev + 1) % SELECTED_WORKS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const filteredProjects = portfolioCategory === "All"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === portfolioCategory);

  const filteredVentures = venturesStatus === "All"
    ? VENTURES_DATA
    : VENTURES_DATA.filter((v) => v.status === venturesStatus);

  const handleProposalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProposalSubmitted(true);
  };

  return (
    <div className="pt-20">
      
      {/* =====================================================================
          HERO SECTION WITH 3D KINETIC CUBE
          ===================================================================== */}
      <section className="relative min-h-[92vh] flex items-center grid-bg overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Ambient atmospheric glow orbs */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Typography */}
          <div className="text-left z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[#7C3AED] text-xs font-mono font-bold mb-8 shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeWidth="2.5" />
              </svg>
              <span>EST. 2024 • GLOBAL TECH STUDIO</span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-[108px] font-['Outfit'] font-black tracking-tight leading-[0.88] mb-8 text-slate-950">
              YEQARI <br />
              <span className="text-gradient-magenta">STUDIO</span>
            </h1>

            <p className="max-w-xl text-slate-600 text-lg sm:text-xl lg:text-2xl mb-10 leading-snug">
              <strong className="text-slate-900 font-bold">BUILT FOR MORE</strong> — On a mission to help 1,000 small businesses scale up online and create a revolution to revaluate people&apos;s lives.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/portfolio"
                className="px-8 py-4 bg-[#0D0422] text-white rounded-full font-bold text-lg hover:bg-[#7C3AED] hover:scale-105 transition-all shadow-xl shadow-purple-900/20 flex items-center gap-2"
              >
                <span>View Portfolio</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 glass text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-all border border-slate-200"
              >
                Start Project
              </Link>
            </div>
          </div>

          {/* Hero Reel Showcase */}
          <div className="relative w-full">
            <HeroReel />
          </div>

        </div>
      </section>

      {/* =====================================================================
          CORE CAPABILITIES BENTO SECTION
          ===================================================================== */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl sm:text-7xl font-['Outfit'] font-black tracking-tight mb-4">
            CORE <span className="text-slate-400">CAPABILITIES</span>
          </h2>
          <p className="text-slate-600 text-xl max-w-2xl">
            Our expertise spans across the entire digital spectrum, from high-end web engineering to advanced AI integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento 1: Web Engineering (8 cols) */}
          <div className="md:col-span-8 bento-card p-10 flex flex-col justify-between min-h-[380px]">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <svg className="w-64 h-64" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <polygon points="12 2 2 7 12 12 22 7 12 2" strokeWidth="1.5" />
                <polyline points="2 17 12 22 22 17" strokeWidth="1.5" />
                <polyline points="2 12 12 17 22 12" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-100/80 text-[#7C3AED] flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <polyline points="16 18 22 12 16 6" strokeWidth="2.5" />
                  <polyline points="8 6 2 12 8 18" strokeWidth="2.5" />
                </svg>
              </div>
              <h3 className="text-3xl font-['Outfit'] font-bold mb-4">Web Engineering</h3>
              <p className="text-slate-600 text-lg max-w-md leading-relaxed">
                Building lightning-fast, scalable web platforms using the most modern tech stacks available today: Next.js, React, and cloud native architectures.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#7C3AED] font-mono text-sm uppercase tracking-widest font-bold mt-8 group"
            >
              <span>Explore Tech</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Bento 2: AI Integration (4 cols) */}
          <div className="md:col-span-4 bento-card p-8 flex flex-col justify-between bg-purple-50/40 border-purple-200/60">
            <div>
              <div className="w-11 h-11 rounded-xl bg-purple-100 text-[#7C3AED] flex items-center justify-center mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <h3 className="text-2xl font-['Outfit'] font-bold mb-2">AI Integration</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Smart solutions powered by cutting-edge machine learning models, autonomous pipelines, and conversational agents.
              </p>
            </div>
            <Link
              href="/services"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white hover:bg-slate-950 hover:text-white transition-all mt-6"
            >
              ↗
            </Link>
          </div>

          {/* Bento 3: Creative Digital (4 cols) */}
          <div className="md:col-span-4 bento-card p-8 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-pink-100 text-[#D946EF] flex items-center justify-center mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4.93 4.93 4.24 4.24M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24" />
                </svg>
              </div>
              <h3 className="text-2xl font-['Outfit'] font-bold mb-2">Creative Digital</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Interactive experiences, bespoke branding identity, and WebGL animations that push the boundaries of modern browsers.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white hover:bg-slate-950 hover:text-white transition-all mt-6"
            >
              ↗
            </Link>
          </div>

          {/* Bento 4: Performance & Cloud Scale (8 cols, Cosmic Obsidian Theme) */}
          <div className="md:col-span-8 bento-card p-10 flex flex-col justify-between min-h-[380px] bg-[#0D0422] text-white border-purple-500/30">
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-6xl font-['Outfit'] font-black text-[#C084FC] mb-2">99%</div>
                <div className="text-slate-400 font-mono text-xs uppercase tracking-wider">Performance Score</div>
              </div>
              <div>
                <div className="text-6xl font-['Outfit'] font-black text-[#D946EF] mb-2">24/7</div>
                <div className="text-slate-400 font-mono text-xs uppercase tracking-wider">Global Infrastructure</div>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-['Outfit'] font-bold mb-3">Ready to scale?</h4>
              <p className="text-slate-300 text-base max-w-md mb-6 leading-relaxed">
                Our infrastructure is engineered to handle millions of users with sub-second response times and zero downtime.
              </p>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#D946EF] text-white font-bold text-sm inline-block shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SERVICES ARCHITECTURE (Three Dedicated Divisions)
          ===================================================================== */}
      <section id="services" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 scroll-mt-24">
        <div className="mb-16">
          <div className="text-[#7C3AED] font-mono text-xs uppercase tracking-[0.3em] font-bold mb-3">
            Core Service Architecture
          </div>
          <h2 className="text-5xl sm:text-7xl font-['Outfit'] font-black tracking-tight leading-none mb-4">
            THREE SPECIALIZED <br />
            <span className="text-slate-400">DIVISIONS.</span>
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Every capability at YEQARI is delivered through dedicated specialized divisions. Every individual service has its own dedicated team and detailed architecture page.
          </p>
        </div>

        {/* Division 01: IT Infrastructure (9 Services) */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7C3AED] mb-1">
                DIVISION 01
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-['Outfit'] text-slate-900">
                YEQARI IT INFRASTRUCTURE
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                The technology, development, and engineering backbone of YEQARI.
              </p>
            </div>
            <Link href="/services#it-infrastructure" className="text-xs font-mono text-[#7C3AED] font-bold hover:underline">
              View Division Overview →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {divisionLists.itInfrastructure.map((item, idx) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="bg-white border border-slate-200 rounded-3xl p-6 hover:border-[#7C3AED] hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400 group-hover:text-[#7C3AED]">
                    <span>0{idx + 1}</span>
                    <span>→</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#7C3AED] transition-colors mb-2">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {servicesData[item.slug]?.tagline || servicesData[item.slug]?.heroSummary.slice(0, 95) + "..."}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Dedicated Page</span>
                  <span className="text-[#7C3AED] font-semibold group-hover:translate-x-1 transition-transform">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Division 02: YEQARI Digital (6 Services) */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#D946EF] mb-1">
                DIVISION 02
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-['Outfit'] text-slate-900">
                YEQARI DIGITAL
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Branding, marketing, content, and digital presence engineering.
              </p>
            </div>
            <Link href="/services#digital" className="text-xs font-mono text-[#D946EF] font-bold hover:underline">
              View Division Overview →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {divisionLists.digital.map((item, idx) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="bg-white border border-slate-200 rounded-3xl p-6 hover:border-[#D946EF] hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400 group-hover:text-[#D946EF]">
                    <span>0{idx + 1}</span>
                    <span>→</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#D946EF] transition-colors mb-2">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {servicesData[item.slug]?.tagline || servicesData[item.slug]?.heroSummary.slice(0, 95) + "..."}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Dedicated Page</span>
                  <span className="text-[#D946EF] font-semibold group-hover:translate-x-1 transition-transform">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Division 03: YEQARI Academy (5 Programs) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 mb-1">
                DIVISION 03
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-['Outfit'] text-slate-900">
                YEQARI ACADEMY
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Education, corporate workshops, AI awareness, and youth innovation programs.
              </p>
            </div>
            <Link href="/academy" className="text-xs font-mono text-emerald-600 font-bold hover:underline">
              Visit Full Academy Hub →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {divisionLists.academy.map((item, idx) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="bg-white border border-slate-200 rounded-3xl p-6 hover:border-emerald-500 hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400 group-hover:text-emerald-600">
                    <span>0{idx + 1}</span>
                    <span>→</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {servicesData[item.slug]?.tagline || servicesData[item.slug]?.heroSummary.slice(0, 95) + "..."}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Dedicated Program</span>
                  <span className="text-emerald-600 font-semibold group-hover:translate-x-1 transition-transform">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      {/* =====================================================================
          SELECTED WORKS DIAL SECTION (Cloned from Beulex Sticky Dial)
          ===================================================================== */}
      <section className="py-28 bg-slate-50/60 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Dial Controls */}
            <div>
              <div className="text-[#7C3AED] font-mono text-xs uppercase tracking-[0.3em] font-bold mb-4">
                Selected Works
              </div>
              <h2 className="text-5xl sm:text-7xl font-['Outfit'] font-black tracking-tight leading-none mb-10">
                OUR <br />
                <span className="text-slate-400">PROJECTS</span>
              </h2>

              <div className="flex items-center gap-10 mb-8">
                {/* Dial Circle Widget */}
                <div className="relative w-36 h-36 rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-sm shrink-0">
                  <div
                    className="absolute inset-0 rounded-full transition-transform duration-500"
                    style={{ transform: `rotate(${showcaseIdx * 90}deg)` }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#7C3AED] rounded-full shadow-[0_0_12px_rgba(124,58,237,0.6)]" />
                  </div>
                  <div className="text-5xl font-['Outfit'] font-black text-slate-950">
                    0{showcaseIdx + 1}
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1">
                  <h3 className="text-3xl font-['Outfit'] font-bold mb-2 text-slate-900">
                    {currentShowcase.title}
                  </h3>
                  <p className="text-slate-500 font-mono text-xs uppercase tracking-widest mb-6">
                    {currentShowcase.category}
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href={currentShowcase.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group"
                    >
                      <span>View Project</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Number Buttons */}
              <div className="flex gap-2">
                {SELECTED_WORKS.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setShowcaseIdx(idx)}
                    className={`w-11 h-11 rounded-full font-mono text-xs font-bold border transition-all ${
                      showcaseIdx === idx
                        ? "bg-[#0D0422] text-white border-[#0D0422] shadow-md"
                        : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                    }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Project Frame */}
            <div className="relative aspect-[16/10] rounded-[36px] overflow-hidden border border-slate-200 p-2 bg-white shadow-xl">
              <div className="w-full h-full rounded-[28px] overflow-hidden relative">
                <img
                  src={currentShowcase.image}
                  alt={currentShowcase.title}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          ABOUT THE STUDIO SECTION
          ===================================================================== */}
      <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-[#7C3AED] font-mono text-xs uppercase tracking-[0.3em] font-bold mb-3">
            The Studio
          </div>
          <h2 className="text-5xl sm:text-7xl font-['Outfit'] font-black tracking-tight leading-none">
            YEQARI <br />
            <span className="text-slate-400">STUDIO</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
          {/* Mission */}
          <div className="md:col-span-8 bento-card p-10 flex flex-col justify-between min-h-[380px]">
            <div>
              <h3 className="text-3xl font-['Outfit'] font-bold mb-6">Our Mission</h3>
              <p className="text-slate-600 text-xl leading-relaxed max-w-xl">
                The mission of YEQARI GLOBAL is to help 1,000 small businesses scale up their business online, converting high-level technical expertise into direct market advantage.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-4 py-2 rounded-full bg-slate-100 font-mono text-xs uppercase tracking-wider text-slate-600">Innovation</span>
              <span className="px-4 py-2 rounded-full bg-slate-100 font-mono text-xs uppercase tracking-wider text-slate-600">Creativity</span>
              <span className="px-4 py-2 rounded-full bg-slate-100 font-mono text-xs uppercase tracking-wider text-slate-600">Performance</span>
            </div>
          </div>

          {/* Vision */}
          <div className="md:col-span-4 bento-card p-8 bg-purple-50/40 border-purple-200/60 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-[#7C3AED] flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path d="m10 15 5-3-5-3v6Z" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-2xl font-['Outfit'] font-bold mb-3">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Create a revolution to revaluate people&apos;s lives through transformative, human-centered technology.
              </p>
            </div>
            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#7C3AED]">
              ✓
            </div>
          </div>

          {/* Founder Photo */}
          <div className="md:col-span-5 bento-card min-h-[420px] overflow-hidden relative group">
            <img
              src="https://picsum.photos/seed/founder/800/1000"
              alt="Dinusha Pushparajah"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0422] via-transparent to-transparent p-8 flex flex-col justify-end text-white">
              <h3 className="text-3xl font-['Outfit'] font-bold">Dinusha Pushparajah</h3>
              <p className="text-[#C084FC] font-mono text-xs uppercase tracking-widest">Founder & CEO</p>
            </div>
          </div>

          {/* Founder Bio */}
          <div className="md:col-span-7 bento-card p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-[#7C3AED] text-xs font-mono font-bold mb-6">
                <span>MEET THE FOUNDER</span>
              </div>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                YEQARI GLOBAL was founded by Dinusha Pushparajah, a young evolving Entrepreneur. Dinusha is the driving force behind YEQARI GLOBAL and the founder of <strong>SLMC² (Sri Lanka Mathematical Circle)</strong>.
              </p>
              <div className="space-y-3 text-sm font-semibold text-slate-600 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-[#7C3AED]">✓</span> Startup Mindset & Agile Execution
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#7C3AED]">✓</span> Impact-Driven Engineering
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#7C3AED]">✓</span> Creative Digital Problem Solving
                </div>
              </div>

              {/* SLMC² Card Showcase with Official Logo */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-white border border-slate-200 p-1.5 shrink-0 flex items-center justify-center shadow-sm">
                  <img src="/assets/slmc-logo.jpg" alt="SLMC² Sri Lanka Mathematical Circle" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                    FOUNDER-LED MOVEMENT
                  </div>
                  <div className="text-sm font-bold text-slate-900 font-['Outfit']">
                    SLMC² — Sri Lanka Mathematical Circle
                  </div>
                  <a
                    href="https://chat.whatsapp.com/BbKNlFjHcUQ2uBucvWzjXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#7C3AED] hover:underline flex items-center gap-1 mt-0.5"
                  >
                    <span>Join Mathematical Circle WhatsApp</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[#7C3AED] transition-colors mt-8"
            >
              <span>Work with Dinusha</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Technical Stack */}
        <div className="mb-24">
          <h3 className="text-3xl sm:text-4xl font-['Outfit'] font-bold mb-8">
            TECHNICAL <span className="text-slate-400">STACK</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {["TypeScript", "React", "Next.js", "Node.js", "Python", "Three.js", "Tailwind CSS", "PostgreSQL", "Docker", "AWS"].map((tech) => (
              <div
                key={tech}
                className="bento-card p-6 text-center font-mono text-sm font-bold uppercase tracking-widest text-slate-700 hover:bg-slate-950 hover:text-white transition-all cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          PORTFOLIO SHOWCASE (24 Curated Projects with Filters)
          ===================================================================== */}
      <section id="portfolio" className="py-28 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-[#7C3AED] font-mono text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
              <span>YEQARI GROUP PORTFOLIO</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-['Outfit'] font-black tracking-tight mb-4">
              Featured <span className="text-gradient-magenta">Works</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Explore solutions across our primary divisions: Yeqari Digital, Yeqari Labs, and Yeqari Startup.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-2 flex-wrap mb-12">
            {["All", "Website", "AI", "Branding", "Software", "Marketing"].map((cat) => (
              <button
                key={cat}
                onClick={() => setPortfolioCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                  portfolioCategory === cat
                    ? "bg-[#0D0422] text-white border-[#0D0422] shadow-md"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <div key={p.id} className="bento-card p-4 flex flex-col justify-between">
                <div>
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5 relative group">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm font-mono text-[10px] font-bold uppercase tracking-wider text-[#7C3AED] shadow-sm">
                      {p.category}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-slate-100 font-mono text-[10px] text-slate-500">
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-['Outfit'] font-bold mb-2 text-slate-900 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {p.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100 mt-2">
                  <button
                    onClick={() => setActiveCaseStudy(p)}
                    className="flex-1 py-2 px-3 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-800 text-center transition-colors"
                  >
                    Case Study
                  </button>
                  {p.link !== "#" && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-4 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0D0422] text-white hover:bg-[#7C3AED] transition-colors"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================================
          VENTURES LAB (Incubating Internal Products)
          ===================================================================== */}
      <section id="ventures" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-[#7C3AED] font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <span>YEQARI VENTURES</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-['Outfit'] font-black tracking-tight mb-4">
            Incubating the <span className="text-gradient-magenta">Future</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We don&apos;t just build software for clients — we design and launch our own internal SaaS platforms and AI tools.
          </p>
        </div>

        <div className="flex justify-center gap-2 flex-wrap mb-12">
          {["All", "Active SaaS", "AI Experiment", "Concept Rebuild", "Prototype"].map((st) => (
            <button
              key={st}
              onClick={() => setVenturesStatus(st)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                venturesStatus === st
                  ? "bg-[#0D0422] text-white border-[#0D0422] shadow-md"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredVentures.map((v) => (
            <div key={v.id} className="bento-card p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-['Outfit'] font-bold text-slate-900">{v.title}</h3>
                    <div className="text-xs font-medium italic text-slate-500 mt-1">{v.tagline}</div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-100 text-[#7C3AED] font-mono text-[10px] font-bold uppercase tracking-wider shrink-0">
                    {v.status}
                  </span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">{v.description}</p>

                <div className="bg-slate-50 rounded-2xl p-4 mb-6 text-xs space-y-3">
                  <div>
                    <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7C3AED] mb-1">The Problem</div>
                    <div className="text-slate-700">{v.problemSolved}</div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7C3AED] mb-1">Our Solution</div>
                    <div className="text-slate-700">{v.solutionDetails}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 mb-6">
                  <span>📈 Expected Impact:</span>
                  <span>{v.expectedImpact}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {v.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded bg-white border border-slate-200 font-mono text-[10px] text-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs uppercase tracking-wider text-center transition-colors block"
              >
                Inquire About Product ↗
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          PRICING PACKAGES & ESTIMATES
          ===================================================================== */}
      <section id="packages" className="py-28 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-[#7C3AED] font-mono text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
              <span>Transparent Pricing</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-['Outfit'] font-black tracking-tight mb-4">
              Digital <span className="text-gradient-magenta">Packages</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Choose the perfect plan for your business growth. From simple starters to complex enterprise solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            {/* Starter */}
            <div className="bento-card p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-['Outfit'] font-bold mb-2">Starter Website</h3>
                <p className="text-xs text-slate-500 mb-6">Small businesses, personal brands, small shops.</p>
                <div className="mb-6">
                  <div className="font-mono text-xs text-slate-400 uppercase">Starting from</div>
                  <div className="text-3xl font-['Outfit'] font-black text-slate-950">Rs 45,000</div>
                  <div className="text-xs text-slate-400 italic">LKR 30,000 – 60,000</div>
                </div>
                <div className="space-y-2.5 text-xs text-slate-600">
                  <div>✓ 3–5 Professional Pages</div>
                  <div>✓ Mobile Responsive Design</div>
                  <div>✓ Contact Form Integration</div>
                  <div>✓ Social Media Links</div>
                  <div>✓ Basic SEO Setup</div>
                  <div>✓ 1 Business Email Account</div>
                  <div>✓ Free Domain (1 Year)</div>
                  <div>✓ Free Hosting (1 Year)</div>
                </div>
              </div>
              <Link
                href="/contact"
                className="w-full mt-8 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs uppercase tracking-wider text-center transition-colors block"
              >
                Get Started
              </Link>
            </div>

            {/* Business (POPULAR) */}
            <div className="bento-card p-8 border-purple-300 shadow-xl shadow-purple-500/10 relative flex flex-col justify-between">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-xl bg-[#7C3AED] text-white font-mono text-[10px] font-bold uppercase tracking-widest">
                Most Popular
              </div>
              <div>
                <h3 className="text-2xl font-['Outfit'] font-bold mb-2">Business Website</h3>
                <p className="text-xs text-slate-500 mb-6">Growing companies, restaurants, agencies.</p>
                <div className="mb-6">
                  <div className="font-mono text-xs text-slate-400 uppercase">Starting from</div>
                  <div className="text-3xl font-['Outfit'] font-black text-[#7C3AED]">Rs 95,000</div>
                  <div className="text-xs text-slate-400 italic">LKR 70,000 – 150,000</div>
                </div>
                <div className="space-y-2.5 text-xs text-slate-600">
                  <div>✓ 8–15 Custom Pages</div>
                  <div>✓ Custom UI/UX Design</div>
                  <div>✓ CMS / Blog & News Section</div>
                  <div>✓ Advanced SEO Optimization</div>
                  <div>✓ Google Analytics Setup</div>
                  <div>✓ WhatsApp Integration</div>
                  <div>✓ 5 Business Email Accounts</div>
                  <div>✓ High Speed Optimization</div>
                </div>
              </div>
              <Link
                href="/contact"
                className="w-full mt-8 py-3 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#D946EF] text-white font-bold text-xs uppercase tracking-wider text-center transition-transform hover:scale-105 block shadow-md"
              >
                Get Started
              </Link>
            </div>

            {/* E-Commerce */}
            <div className="bento-card p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-['Outfit'] font-bold mb-2">E-Commerce Store</h3>
                <p className="text-xs text-slate-500 mb-6">Online retailers & digital merchants.</p>
                <div className="mb-6">
                  <div className="font-mono text-xs text-slate-400 uppercase">Starting from</div>
                  <div className="text-3xl font-['Outfit'] font-black text-slate-950">Rs 220,000</div>
                  <div className="text-xs text-slate-400 italic">LKR 150,000 – 350,000+</div>
                </div>
                <div className="space-y-2.5 text-xs text-slate-600">
                  <div>✓ Full Product Catalog</div>
                  <div>✓ Shopping Cart & Checkout</div>
                  <div>✓ PayHere / Stripe Gateway</div>
                  <div>✓ Order Management System</div>
                  <div>✓ Product Search & Filters</div>
                  <div>✓ Shipping Calculator</div>
                  <div>✓ Customer Account Vault</div>
                  <div>✓ Admin Sales Dashboard</div>
                </div>
              </div>
              <Link
                href="/contact"
                className="w-full mt-8 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs uppercase tracking-wider text-center transition-colors block"
              >
                Get Started
              </Link>
            </div>

            {/* Premium Web App */}
            <div className="bento-card p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-['Outfit'] font-bold mb-2">Premium Web App</h3>
                <p className="text-xs text-slate-500 mb-6">Startups, SaaS, enterprise platforms.</p>
                <div className="mb-6">
                  <div className="font-mono text-xs text-slate-400 uppercase">Starting from</div>
                  <div className="text-3xl font-['Outfit'] font-black text-slate-950">Rs 350,000+</div>
                  <div className="text-xs text-slate-400 italic">LKR 350,000 – 1M+</div>
                </div>
                <div className="space-y-2.5 text-xs text-slate-600">
                  <div>✓ Custom UI/UX Design System</div>
                  <div>✓ Full-Stack Engineering</div>
                  <div>✓ Scalable Database Architecture</div>
                  <div>✓ Secure User Auth & Roles</div>
                  <div>✓ Third-party API Integrations</div>
                  <div>✓ Custom Admin Dashboards</div>
                  <div>✓ AI / LLM Model Integration</div>
                  <div>✓ Enterprise Cloud Deployment</div>
                </div>
              </div>
              <Link
                href="/contact"
                className="w-full mt-8 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs uppercase tracking-wider text-center transition-colors block"
              >
                Get Started
              </Link>
            </div>

          </div>

          {/* Sri Lanka Market Localizations & Transparent Payment Policy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bento-card p-8">
              <h4 className="text-xl font-['Outfit'] font-bold mb-4">Optimized for Sri Lanka</h4>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Every package includes essential localized integrations to ensure your business thrives in the Sri Lankan digital landscape.
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-700">
                <div>💬 WhatsApp Float Integration</div>
                <div>🇱🇰 Sinhala & Tamil Support</div>
                <div>💳 PayHere Payment Gateway</div>
                <div>📍 Google Maps Verification</div>
                <div>📱 Mobile-First 4G Caching</div>
                <div>⚡ Sub-Second Speed Delivery</div>
              </div>
            </div>

            <div className="bento-card p-8 bg-purple-50/50 border-purple-200">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#7C3AED] font-mono text-[10px] font-bold uppercase tracking-wider mb-4">
                TRANSPARENT PAYMENT
              </div>
              <h4 className="text-xl font-['Outfit'] font-bold mb-2">50/50 Milestone Structure</h4>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                To guarantee complete project security and client confidence, we follow the established industry standard: <strong>50% upfront payment</strong> to commence sprint execution, and <strong>50% upon successful demonstration and production release</strong>.
              </p>
              <div className="text-xs text-slate-500">
                No hidden charges. Full source code and intellectual property transferred upon completion.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================================
          MEGA "LET'S BUILD" CTA
          ===================================================================== */}
      <section className="py-32 bg-[#0D0422] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-6xl sm:text-8xl lg:text-[120px] font-['Outfit'] font-black tracking-tight leading-[0.85] mb-8">
            LET&apos;S <br />
            <span className="text-gradient-magenta">BUILD</span>
          </h2>
          <p className="text-slate-300 text-xl sm:text-2xl max-w-xl mx-auto mb-12 leading-relaxed">
            Ready to transform your digital presence? We&apos;re currently accepting new client partnerships and ambitious builds.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#D946EF] text-white font-bold text-xl hover:scale-105 transition-all shadow-xl"
          >
            <span>Start a Conversation</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* =====================================================================
          REQUEST A PROPOSAL / CONTACT HUB
          ===================================================================== */}
      <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-[#7C3AED] font-mono text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
            <span>YEQARI PROPOSAL HUB</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-['Outfit'] font-black tracking-tight mb-4">
            Request a <span className="text-gradient-magenta">Proposal</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Fill out your project parameters below. Our division leads review every submission and prepare a tailored roadmap within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Office Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bento-card p-8">
              <h3 className="text-2xl font-['Outfit'] font-bold mb-6">Our Offices</h3>
              <div className="space-y-6">
                <div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase font-bold mb-1">Proposal Inquiries</div>
                  <a href="mailto:hello@yeqari.global" className="text-slate-900 font-bold hover:text-[#7C3AED] transition-colors">
                    hello@yeqari.global
                  </a>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase font-bold mb-1">Direct Helpline</div>
                  <div className="text-slate-900 font-bold">+94 77 000 0000</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase font-bold mb-1">HQ Location</div>
                  <div className="text-slate-900 font-bold">Colombo, Sri Lanka</div>
                </div>
              </div>
            </div>

            <div className="bento-card p-8">
              <h4 className="text-lg font-bold mb-2">Incubating Networks</h4>
              <p className="text-xs text-slate-500 mb-6">Connect with our open channels and developer tool pipelines.</p>
              <div className="flex gap-3">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors">
                  Git
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors">
                  In
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors">
                  X
                </a>
              </div>
            </div>
          </div>

          {/* Proposal Form (8 cols) */}
          <div className="lg:col-span-8 bento-card p-8 sm:p-12">
            <form onSubmit={handleProposalSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase font-bold text-slate-500 mb-2">Full Name *</label>
                  <input
                    required
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Dinusha Pushparajah"
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#7C3AED] focus:bg-white text-sm"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase font-bold text-slate-500 mb-2">Company / Brand *</label>
                  <input
                    required
                    type="text"
                    placeholder="Acme Corp"
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#7C3AED] focus:bg-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase font-bold text-slate-500 mb-2">Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="you@company.com"
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#7C3AED] focus:bg-white text-sm"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase font-bold text-slate-500 mb-2">Phone Number *</label>
                  <input
                    required
                    type="tel"
                    placeholder="+94 77 123 4567"
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#7C3AED] focus:bg-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase font-bold text-slate-500 mb-2">Service Division *</label>
                  <select
                    required
                    value={formService}
                    onChange={(e) => setFormService(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#7C3AED] focus:bg-white text-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="Website Development">Website Development</option>
                    <option value="E-Commerce Store">E-Commerce Development</option>
                    <option value="Branding & Identity">Branding & Identity</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="SaaS MVP Development">SaaS MVP Development</option>
                    <option value="AI Solutions & LLMs">AI Solutions & LLMs</option>
                    <option value="Startup Launch Package">Startup Launch Package</option>
                  </select>
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase font-bold text-slate-500 mb-2">Timeline *</label>
                  <select
                    required
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#7C3AED] focus:bg-white text-sm"
                  >
                    <option value="">Select expected timeline</option>
                    <option value="ASAP">As soon as possible (Urgent)</option>
                    <option value="1-3 Months">1 – 3 Months</option>
                    <option value="3-6 Months">3 – 6 Months</option>
                    <option value="Flexible">Flexible / Ongoing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase font-bold text-slate-500 mb-2">Project Scope *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Outline your project scope, problems you are facing, and expected features..."
                  className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#7C3AED] focus:bg-white text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4.5 rounded-full bg-[#0D0422] hover:bg-[#7C3AED] text-white font-bold text-base transition-all shadow-lg shadow-purple-900/20"
              >
                Submit Proposal Request
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* =====================================================================
          CASE STUDY MODAL
          ===================================================================== */}
      {activeCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-[36px] max-w-4xl w-full p-8 sm:p-12 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveCaseStudy(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 hover:text-slate-900"
            >
              ✕
            </button>

            <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-[#7C3AED] font-mono text-xs font-bold uppercase tracking-wider mb-4">
              {activeCaseStudy.category} Case Study
            </span>

            <h2 className="text-3xl sm:text-5xl font-['Outfit'] font-black tracking-tight mb-4">
              {activeCaseStudy.title}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {activeCaseStudy.description}
            </p>

            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-8 border border-slate-200">
              <img src={activeCaseStudy.image} alt={activeCaseStudy.title} className="w-full h-full object-cover" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-2xl bg-slate-50">
                <h4 className="font-bold text-[#7C3AED] mb-2 font-mono text-xs uppercase tracking-wider">The Challenge</h4>
                <p className="text-slate-700 text-sm leading-relaxed">{activeCaseStudy.problemDetails}</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50">
                <h4 className="font-bold text-emerald-600 mb-2 font-mono text-xs uppercase tracking-wider">The Solution</h4>
                <p className="text-slate-700 text-sm leading-relaxed">{activeCaseStudy.solutionBreakdown}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
              <div className="flex flex-wrap gap-2">
                {activeCaseStudy.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-slate-100 font-mono text-xs text-slate-600">
                    {t}
                  </span>
                ))}
              </div>
              {activeCaseStudy.link !== "#" && (
                <a
                  href={activeCaseStudy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#0D0422] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#7C3AED] transition-colors"
                >
                  Visit Live Site ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          SUCCESS MODAL
          ===================================================================== */}
      {proposalSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-['Outfit'] font-bold text-slate-900 mb-2">Proposal Requested!</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Thank you, {formName || "there"}! Your parameters have been securely registered. Our division heads will contact you with a structured proposal within 24 hours.
            </p>
            <button
              onClick={() => setProposalSubmitted(false)}
              className="px-8 py-3 rounded-full bg-[#0D0422] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#7C3AED] transition-colors"
            >
              Close & Continue
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
