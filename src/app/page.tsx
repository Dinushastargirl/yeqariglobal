"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  division: "Design" | "Marketing" | "Technology";
  description: string;
  impactMetric: string;
  image: string;
  link: string;
  tags: string[];
}

const PROJECTS: ProjectItem[] = [
  {
    id: "pickher",
    title: "PickHer Mobility Platform",
    client: "PickHer Global",
    category: "Mobile & AI Engineering",
    division: "Technology",
    description: "Women-first ride and mobility network engineered for high-concurrency dispatch, geo-fencing safety, and real-time biometric driver verification.",
    impactMetric: "+180% User Velocity",
    image: "/assets/case-pickher.jpg",
    link: "https://merry-phoenix-e0c270.netlify.app/",
    tags: ["React Native", "WebRTC", "Geo-Clustering", "Safety AI"]
  },
  {
    id: "speechxyz",
    title: "SpeechXYZ Voice Intelligence",
    client: "SpeechXYZ Labs",
    category: "AI & ML Architecture",
    division: "Technology",
    description: "Real-time speech synthesis and neural transcription pipeline capable of low-latency multilingual voice agent interactions.",
    impactMetric: "35ms Stream Latency",
    image: "/assets/case-speechxyz.jpg",
    link: "/work",
    tags: ["Whisper AI", "FastAPI", "WebSocket", "Neural TTS"]
  },
  {
    id: "samaranna",
    title: "Samaranna Luxury Marketplace",
    client: "Samaranna Resorts",
    category: "E-Commerce & Digital Experience",
    division: "Design",
    description: "Ultra-luxury booking engine and dynamic packaging experience for high-net-worth travellers with personalized concierge integrations.",
    impactMetric: "$4.2M Bookings GMV",
    image: "/assets/case-samaranna.jpg",
    link: "https://little-heart-bakes.base44.app/",
    tags: ["Next.js", "Stripe Connect", "Tailwind CSS", "Micro-Interactions"]
  },
  {
    id: "nutrigpt",
    title: "NutriGPT Automated Assistant",
    client: "HealthScale Bio",
    category: "AI Landing Page & Funnel",
    division: "Marketing",
    description: "Conversion-optimized AI nutrition diagnostic engine that analyzes dietary inputs and generates personalized macro regimens in seconds.",
    impactMetric: "18.5K Signups • 99 Lighthouse",
    image: "https://picsum.photos/seed/nutrition/1200/800",
    link: "https://nutrigpt-h37z.vercel.app/",
    tags: ["Next.js", "Growth Loops", "AI Reasoning", "Framer Motion"]
  },
  {
    id: "little-heart-bakes",
    title: "Little Heart Bakes E-Store",
    client: "Little Heart Bakes",
    category: "E-Commerce & Brand",
    division: "Design",
    description: "Artisan confectionery e-commerce with visual 3D cake customization, live date scheduling, and frictionless WhatsApp order sync.",
    impactMetric: "+42% Conversion Lift",
    image: "https://picsum.photos/seed/bakery/1200/800",
    link: "https://little-heart-bakes.base44.app/",
    tags: ["Interactive 3D", "Cart Optimization", "Brand Systems"]
  }
];

const INDUSTRIES = [
  {
    id: "education",
    name: "Education",
    headline: "Transforming the learning lifecycle through interactive digital ecosystems.",
    description: "We build student portals, admissions automation pipelines, and high-engagement LMS architectures that connect learners, educators, and global institutions seamlessly.",
    stats: "250K+ Students Reached",
    tags: ["Admissions Automation", "Interactive LMS", "Applicant Funnels", "Global Verification"]
  },
  {
    id: "government",
    name: "Government & Enterprise",
    headline: "Public-sector products engineered with zero-compromise security.",
    description: "We support ministries, state departments, and large enterprises with modernizing legacy infrastructure, digitizing citizen services, and enforcing multi-tier compliance standards.",
    stats: "99.99% Enterprise SLA",
    tags: ["Citizen Experience", "High Concurrency", "ISO Compliance", "Zero-Trust Data"]
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    headline: "Raising the bar for frictionless commerce and customer lifetime value.",
    description: "From custom headless storefronts to real-time omnichannel inventory engines, we build commerce machines that convert curious browsers into compounding brand advocates.",
    stats: "+38% Avg Conversion Lift",
    tags: ["Headless Shopify / Next.js", "Stripe Architecture", "Dynamic Bundling", "Instant Checkout"]
  },
  {
    id: "fitness",
    name: "Health & Fitness",
    headline: "Connecting wellness enthusiasts through habit-forming digital interfaces.",
    description: "We develop client apps, booking engines, telemetry health trackers, and coach-client communities that drive retention through psychological reward mechanics.",
    stats: "14K Daily Active Users",
    tags: ["Biometric Telemetry", "Class Schedulers", "Gamified Habits", "Zero-Leakage Privacy"]
  },
  {
    id: "fintech",
    name: "Fintech & Web3",
    headline: "Architecting high-frequency financial platforms and asset pipelines.",
    description: "Building automated ledger systems, payment routers, crypto wallets, and algorithmic scheduling engines that process mission-critical transactions flawlessly.",
    stats: "$50M+ Volume Processed",
    tags: ["Smart Contracts", "Idempotent Payments", "Fraud Heuristics", "Real-Time BI"]
  }
];

export default function HomePage() {
  const [activeIndustry, setActiveIndustry] = useState("education");
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const desktopVideoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);
  const heroContainerRef = useRef<HTMLDivElement | null>(null);

  // Auto-play on mount
  useEffect(() => {
    const playVideos = () => {
      if (desktopVideoRef.current) {
        desktopVideoRef.current.muted = true;
        desktopVideoRef.current.play().catch(() => {});
      }
      if (mobileVideoRef.current) {
        mobileVideoRef.current.muted = true;
        mobileVideoRef.current.play().catch(() => {});
      }
    };
    playVideos();
  }, []);

  const togglePlay = () => {
    const v = window.innerWidth < 640 ? mobileVideoRef.current : desktopVideoRef.current;
    if (!v) return;
    if (v.paused) {
      desktopVideoRef.current?.play().catch(() => {});
      mobileVideoRef.current?.play().catch(() => {});
      setIsPlaying(true);
    } else {
      desktopVideoRef.current?.pause();
      mobileVideoRef.current?.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    if (desktopVideoRef.current) desktopVideoRef.current.muted = nextMuted;
    if (mobileVideoRef.current) mobileVideoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const toggleFullscreen = () => {
    if (!heroContainerRef.current) return;
    if (!document.fullscreenElement) {
      heroContainerRef.current.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div className="bg-[#FFFFFF] text-slate-900 selection:bg-purple-200 selection:text-[#0D0422] min-h-screen">
      
      {/* =========================================================================
          1. HERO REEL SECTION (EXPANSIVE FULL-WIDTH HERO VIDEO FILLING WHOLE AREA)
          ========================================================================= */}
      <section className="pt-20 sm:pt-24 pb-12 w-full">
        
        {/* Full-Width Video Container Spreading & Filling Whole Area */}
        <div className="w-full px-2 sm:px-4 lg:px-6 box-border">
          <div
            ref={heroContainerRef}
            className="relative w-full h-[75vh] sm:h-[82vh] lg:h-[88vh] min-h-[520px] sm:min-h-[640px] max-h-[960px] rounded-[24px] sm:rounded-[36px] overflow-hidden bg-[#0D0422] border border-slate-200/90 shadow-2xl shadow-purple-950/20 group"
          >
            {/* Ambient Video Backlight Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#7C3AED]/30 via-[#D946EF]/20 to-[#7C3AED]/30 rounded-[40px] blur-2xl -z-10 pointer-events-none" />

            {/* Phone Video Version (Displays on Phone / Mobile Screens) */}
            <video
              ref={mobileVideoRef}
              onClick={togglePlay}
              className="block sm:hidden w-full h-full object-cover cursor-pointer"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="auto"
              poster="/assets/case-yeqari.jpg"
            >
              <source src="/assets/intro video/YEQARI_GLOBAL_brand_film_production_20261009145209.mp4" type="video/mp4" />
              <source src="/assets/hero-reel-mobile.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Laptop / Desktop Video Version (Displays on Laptop / Desktop Screens) */}
            <video
              ref={desktopVideoRef}
              onClick={togglePlay}
              className="hidden sm:block w-full h-full object-cover cursor-pointer"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="auto"
              poster="/assets/case-yeqari.jpg"
            >
              <source src="/assets/intro video/yeqari global hero reel.mp4" type="video/mp4" />
              <source src="/assets/hero-reel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Clean Top-Right Controls: Sound & Fullscreen */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 flex items-center gap-2">
              <button
                type="button"
                onClick={toggleMute}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold backdrop-blur-md border transition-all duration-200 cursor-pointer ${
                  isMuted
                    ? "bg-black/50 text-white border-white/20 hover:bg-black/70"
                    : "bg-gradient-to-r from-[#7C3AED] to-[#D946EF] text-white border-white/40 shadow-lg shadow-purple-500/30"
                }`}
              >
                {isMuted ? (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                    <span>Sound Off</span>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-0.5 h-3">
                      <span className="w-0.5 h-3 bg-white animate-[bounce_0.8s_infinite]" />
                      <span className="w-0.5 h-2 bg-white animate-[bounce_0.6s_infinite_0.2s]" />
                      <span className="w-0.5 h-3.5 bg-white animate-[bounce_0.7s_infinite_0.4s]" />
                    </div>
                    <span>Sound On</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={toggleFullscreen}
                className="p-2 rounded-full bg-black/50 hover:bg-[#7C3AED] text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer"
                title="Full Screen"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0 0l-5-5m5 11v4m0 0h-4m4 0l-5-5M4 16v4m0 0h4m-4 0l5-5" />
                </svg>
              </button>
            </div>

            {/* Center Play/Pause button on hover / pause */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] cursor-pointer"
              >
                <div className="w-20 h-20 rounded-full bg-white/20 hover:bg-[#7C3AED] text-white flex items-center justify-center backdrop-blur-xl border border-white/30 shadow-2xl transition-all">
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Hero Title & Subtitle in Container */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-['Outfit'] font-black tracking-tight leading-[0.98] text-slate-950 max-w-6xl">
            Best-in-class{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#D946EF] bg-clip-text text-transparent">
              design, marketing
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#D946EF] bg-clip-text text-transparent">
              technology
            </span>
          </h1>

          <p className="mt-8 text-xl sm:text-2xl text-slate-600 max-w-3xl leading-relaxed">
            <strong className="text-slate-900 font-bold">BUILT FOR MORE</strong> — Ambitious companies leverage our capabilities to ideate, build and scale exponential digital systems.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D946EF] hover:opacity-95 text-white font-bold text-base shadow-xl shadow-purple-600/25 transition-all hover:scale-105 flex items-center gap-2 group"
            >
              <span>Speak to our experts</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link
              href="#capabilities"
              className="px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-bold text-base border border-slate-200 transition-all hover:border-slate-400"
            >
              Explore Capabilities
            </Link>

            <Link
              href="/startup"
              className="px-6 py-4 rounded-full bg-purple-50 hover:bg-purple-100/80 text-[#7C3AED] font-bold text-base border border-purple-200/80 transition-all flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#D946EF] animate-pulse" />
              <span>Not Another Startup Program</span>
            </Link>
          </div>
        </div>

      </section>

      {/* =========================================================================
          2. CLIENTS & TRUST TICKER
          ========================================================================= */}
      <section className="py-12 border-y border-slate-200/80 bg-slate-50/60">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center font-mono text-xs uppercase tracking-widest text-slate-500 font-bold mb-8">
            Trusted by ambitious teams & industry leaders worldwide
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center opacity-80 hover:opacity-100 transition-opacity">
            <span className="font-['Outfit'] font-black text-xl text-slate-700 tracking-wider">PEOPLE&apos;S BANK</span>
            <span className="font-['Outfit'] font-black text-xl text-slate-700 tracking-widest">GOYA</span>
            <span className="font-['Outfit'] font-black text-xl text-slate-700 tracking-wider">SAMARANNA</span>
            <span className="font-['Outfit'] font-black text-xl text-slate-700 tracking-wide">SPEECHXYZ</span>
            <span className="font-['Outfit'] font-black text-xl text-slate-700 tracking-wide">PICKHER</span>
            <span className="font-['Outfit'] font-black text-xl text-slate-700 tracking-wide">AURUM GROUP</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. CORE CAPABILITIES (SURGE 3-COLUMN BENTO: DESIGN, MARKETING, TECHNOLOGY)
          ========================================================================= */}
      <section id="capabilities" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        
        <div className="mb-16 max-w-4xl">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-3">
            01 / CAPABILITIES
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-['Outfit'] font-black tracking-tight leading-[1.05] text-slate-950">
            Ambitious companies leverage <br />
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#D946EF] bg-clip-text text-transparent">
              our capabilities to ideate, build and scale
            </span>
          </h2>
        </div>

        {/* 3 Column Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: DESIGN */}
          <div className="group relative bg-[#0D0422] rounded-[32px] p-8 sm:p-10 flex flex-col justify-between text-white border border-white/10 shadow-2xl overflow-hidden transition-all duration-300 hover:border-[#C084FC]/40 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#7C3AED]/15 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#C084FC] mb-8 font-mono font-bold text-sm">
                01
              </div>

              <h3 className="text-3xl sm:text-4xl font-['Outfit'] font-black mb-4">
                Design
              </h3>

              <p className="text-slate-300 text-base leading-relaxed mb-8">
                Crafting iconic brand systems, human-centered UI/UX architectures, and captivating motion experiences that command industry attention.
              </p>

              {/* Capability Pills */}
              <div className="flex flex-wrap gap-2 mb-10">
                {["Branding", "Creative Design", "Motion Design", "Product Design", "Web Design", "UI/UX Audits", "Design Systems"].map((pill) => (
                  <span
                    key={pill}
                    className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#7C3AED]/40 text-xs font-semibold text-purple-200 border border-white/10 transition-colors"
                  >
                    {pill}
                  </span>
                ))}
                <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D946EF] text-xs font-bold text-white">
                  + More
                </span>
              </div>
            </div>

            <Link
              href="/services#design"
              className="inline-flex items-center gap-2 text-[#C084FC] font-mono text-xs uppercase tracking-wider font-bold group-hover:text-white transition-colors"
            >
              <span>Explore Design Services</span>
              <span>→</span>
            </Link>
          </div>

          {/* Card 2: MARKETING */}
          <div className="group relative bg-[#0D0422] rounded-[32px] p-8 sm:p-10 flex flex-col justify-between text-white border border-white/10 shadow-2xl overflow-hidden transition-all duration-300 hover:border-[#D946EF]/40 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D946EF]/15 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#D946EF] mb-8 font-mono font-bold text-sm">
                02
              </div>

              <h3 className="text-3xl sm:text-4xl font-['Outfit'] font-black mb-4">
                Marketing
              </h3>

              <p className="text-slate-300 text-base leading-relaxed mb-8">
                Data-backed growth engines, high-intent customer acquisition funnels, and precision SEO that turn digital curiosity into compounding ARR.
              </p>

              {/* Capability Pills */}
              <div className="flex flex-wrap gap-2 mb-10">
                {["Growth Strategy", "Performance Marketing", "SEO & Search Dominance", "Lead Nurturing", "Go-To-Market", "Conversion Optimization", "Content Engine"].map((pill) => (
                  <span
                    key={pill}
                    className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#D946EF]/40 text-xs font-semibold text-pink-200 border border-white/10 transition-colors"
                  >
                    {pill}
                  </span>
                ))}
                <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D946EF] text-xs font-bold text-white">
                  + More
                </span>
              </div>
            </div>

            <Link
              href="/services#marketing"
              className="inline-flex items-center gap-2 text-[#D946EF] font-mono text-xs uppercase tracking-wider font-bold group-hover:text-white transition-colors"
            >
              <span>Explore Marketing Services</span>
              <span>→</span>
            </Link>
          </div>

          {/* Card 3: TECHNOLOGY */}
          <div className="group relative bg-[#0D0422] rounded-[32px] p-8 sm:p-10 flex flex-col justify-between text-white border border-white/10 shadow-2xl overflow-hidden transition-all duration-300 hover:border-[#7C3AED]/40 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#7C3AED]/20 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#7C3AED] mb-8 font-mono font-bold text-sm">
                03
              </div>

              <h3 className="text-3xl sm:text-4xl font-['Outfit'] font-black mb-4">
                Technology
              </h3>

              <p className="text-slate-300 text-base leading-relaxed mb-8">
                Building resilient software, cloud-native Web & Mobile apps, enterprise AI/ML integrations, and secure data infrastructures that never slow down.
              </p>

              {/* Capability Pills */}
              <div className="flex flex-wrap gap-2 mb-10">
                {["Web & Mobile Apps", "AI & Machine Learning", "Data Engineering & BI", "Cloud Infrastructure", "Cyber Security", "API Platforms", "DevOps Pipelines"].map((pill) => (
                  <span
                    key={pill}
                    className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#7C3AED]/40 text-xs font-semibold text-purple-200 border border-white/10 transition-colors"
                  >
                    {pill}
                  </span>
                ))}
                <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D946EF] text-xs font-bold text-white">
                  + More
                </span>
              </div>
            </div>

            <Link
              href="/services#technology"
              className="inline-flex items-center gap-2 text-[#7C3AED] font-mono text-xs uppercase tracking-wider font-bold group-hover:text-white transition-colors"
            >
              <span>Explore Technology Services</span>
              <span>→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. SPOTLIGHT: NOT ANOTHER STARTUP PROGRAM
          ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="relative rounded-[36px] bg-gradient-to-br from-[#0D0422] via-[#14052E] to-[#2B075C] text-white p-8 sm:p-16 border border-purple-500/30 shadow-2xl overflow-hidden">
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D946EF]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#7C3AED]/30 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#7C3AED]/30 to-[#D946EF]/30 border border-[#D946EF]/50 text-xs font-mono font-bold tracking-widest text-[#C084FC] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D946EF] animate-ping" />
              <span>THE ZERO-TO-ONE VENTURE ENGINE</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-['Outfit'] font-black tracking-tight leading-[1.05] mb-6">
              NOT ANOTHER STARTUP — <br />
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#D946EF] bg-clip-text text-transparent">
                Turn your raw idea into a live, market-validated venture.
              </span>
            </h2>

            <p className="text-slate-300 text-lg sm:text-xl max-w-3xl leading-relaxed mb-10">
              Most startup ideas die in pitch decks. The <strong>Not Another Startup</strong> program provides early founders, university innovators, and ambitious creators with 3 concrete technical execution pathways to launch in weeks — with zero equity traps.
            </p>

            {/* 3 Concrete Pathways */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="font-mono text-xs text-[#C084FC] font-bold block mb-2">PATHWAY 01</span>
                <h4 className="text-xl font-bold font-['Outfit'] mb-2">IDEA → MVP</h4>
                <p className="text-sm text-slate-300">
                  A high-velocity 4-week sprint building a functional, real-world prototype ready for early user signups and initial validation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="font-mono text-xs text-[#D946EF] font-bold block mb-2">PATHWAY 02</span>
                <h4 className="text-xl font-bold font-['Outfit'] mb-2">IDEA → ROADMAP</h4>
                <p className="text-sm text-slate-300">
                  Comprehensive architectural PRD, UX wireframe specifications, technical stack selection, and precision budget forecasting.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="font-mono text-xs text-[#7C3AED] font-bold block mb-2">PATHWAY 03</span>
                <h4 className="text-xl font-bold font-['Outfit'] mb-2">IDEA → STARTUP</h4>
                <p className="text-sm text-slate-300">
                  Full zero-to-one co-engineering partnership: product development, growth architecture, GTM launch, and seed investor decks.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/startup"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D946EF] hover:scale-105 text-white font-bold text-base shadow-xl shadow-purple-900/40 transition-all flex items-center gap-2"
              >
                <span>Explore Startup Program</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 transition-all"
              >
                Apply for Founder Intake
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          5. EXPANSIVE AREAS OF EXPERTISE (INDUSTRIES TABS)
          ========================================================================= */}
      <section id="expertise" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        
        <div className="mb-16">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-3">
            02 / INDUSTRY VERTICALS
          </p>
          <h2 className="text-4xl sm:text-6xl font-['Outfit'] font-black tracking-tight text-slate-950 mb-4">
            Expansive areas of expertise
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl">
            We provide customized digital solutions to help you capture market opportunities in a variety of complex industries.
          </p>
        </div>

        {/* Industry Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 border-b border-slate-200">
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveIndustry(ind.id)}
              className={`px-6 py-3 rounded-full text-sm font-['Outfit'] font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeIndustry === ind.id
                  ? "bg-[#0D0422] text-white shadow-md shadow-purple-900/20 scale-105"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {ind.name}
            </button>
          ))}
        </div>

        {/* Selected Industry Detail Card */}
        {(() => {
          const selected = INDUSTRIES.find((i) => i.id === activeIndustry) || INDUSTRIES[0];
          return (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 rounded-[32px] p-8 sm:p-14 border border-slate-200">
              
              <div className="lg:col-span-7">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-3 block">
                  {selected.name} FOCUS
                </span>
                <h3 className="text-3xl sm:text-5xl font-['Outfit'] font-bold text-slate-950 mb-6 leading-tight">
                  {selected.headline}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {selected.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selected.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3.5 py-1.5 rounded-full bg-white text-slate-800 text-xs font-mono font-bold border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-full bg-[#0D0422] hover:bg-[#7C3AED] text-white font-bold text-sm transition-all"
                  >
                    Build for {selected.name} →
                  </Link>
                  <span className="font-mono text-xs font-bold text-slate-500">
                    Proven in Production
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center items-center p-8 bg-white rounded-3xl border border-slate-200 text-center shadow-lg">
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">
                  VERIFIED IMPACT
                </span>
                <div className="text-4xl sm:text-5xl font-['Outfit'] font-black bg-gradient-to-r from-[#7C3AED] to-[#D946EF] bg-clip-text text-transparent mb-4">
                  {selected.stats}
                </div>
                <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                  Engineered with end-to-end security compliance, high-availability microservices, and dedicated analytics.
                </p>
              </div>

            </div>
          );
        })()}

      </section>

      {/* =========================================================================
          6. SELECTED WORK / CASE STUDIES (SURGE STRUCTURE)
          ========================================================================= */}
      <section id="work" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto bg-slate-50/50 rounded-[40px] my-12 border border-slate-100">
        
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-3">
              03 / PROVEN CASE STUDIES
            </p>
            <h2 className="text-4xl sm:text-6xl font-['Outfit'] font-black tracking-tight text-slate-950">
              Work that moves the needle
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-mono font-bold uppercase tracking-wider text-[#7C3AED] hover:text-[#D946EF] transition-colors"
          >
            <span>Browse All Work (30+ Projects)</span>
            <span>→</span>
          </Link>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0D0422]/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-[#C084FC] font-bold border border-white/10">
                    {project.category}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-slate-400 uppercase">
                      {project.client}
                    </span>
                    <span className="text-xs font-mono font-extrabold text-[#7C3AED] bg-purple-50 px-2.5 py-0.5 rounded-full">
                      {project.impactMetric}
                    </span>
                  </div>

                  <h3 className="text-2xl font-['Outfit'] font-bold text-slate-950 mb-3 group-hover:text-[#7C3AED] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono font-medium px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-900 group-hover:text-[#7C3AED] transition-colors"
                >
                  <span>Launch Live Site</span>
                  <span>↗</span>
                </a>
                <span className="text-xs font-mono text-slate-400">{project.division}</span>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* =========================================================================
          7. TRUSTED PARTNERSHIPS & TESTIMONIALS
          ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-3">
            04 / TESTIMONIALS
          </p>
          <h2 className="text-4xl sm:text-6xl font-['Outfit'] font-black tracking-tight text-slate-950 mb-4">
            Trusted partnerships and successful collaborations
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl">
            We’re true partners — not vendors. Our relationships with our clients are long term, high-trust, and value-compounding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 flex flex-col justify-between">
            <p className="text-slate-700 text-base leading-relaxed mb-8 italic">
              &ldquo;The YEQARI team has done a fantastic job getting us to a position where we have a live pipeline of data coming into the organization, helping us make real-time decisions. This allows us to move away from retroactive thinking and focus on tackling exponential business opportunities.&rdquo;
            </p>
            <div>
              <div className="font-['Outfit'] font-bold text-slate-950 text-lg">Andrew McKee</div>
              <div className="font-mono text-xs text-[#7C3AED] font-bold">Chief Information Officer (CIO)</div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 flex flex-col justify-between">
            <p className="text-slate-700 text-base leading-relaxed mb-8 italic">
              &ldquo;I’ve largely felt like YEQARI is a natural extension of our team and our business. It feels like we’re working together as one unit with one common goal, and I think that’s critical in a venture. I feel like we have a dedicated engineering team just as passionate about delivery as we are.&rdquo;
            </p>
            <div>
              <div className="font-['Outfit'] font-bold text-slate-950 text-lg">Luke Jecks</div>
              <div className="font-mono text-xs text-[#D946EF] font-bold">Co-founder &amp; CEO</div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 flex flex-col justify-between">
            <p className="text-slate-700 text-base leading-relaxed mb-8 italic">
              &ldquo;Every week I would look forward to what other discoveries they engineered, performance benchmarks they achieved, and architectural efficiencies they deployed. Working with YEQARI raised our entire organization&apos;s technical standard.&rdquo;
            </p>
            <div>
              <div className="font-['Outfit'] font-bold text-slate-950 text-lg">Husam Al-Saleh</div>
              <div className="font-mono text-xs text-[#7C3AED] font-bold">Deputy CEO • Enterprise Operations</div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. IMPACT & METRICS ("WE FOCUS ON VALUE AND IMPACT")
          ========================================================================= */}
      <section className="py-20 bg-[#0D0422] text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14 text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#C084FC] mb-2">
              05 / MEASURABLE RESULTS
            </p>
            <h2 className="text-4xl sm:text-6xl font-['Outfit'] font-black tracking-tight">
              We focus on{" "}
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#D946EF] bg-clip-text text-transparent">
                value and impact
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-['Outfit'] font-black bg-gradient-to-r from-[#7C3AED] to-[#C084FC] bg-clip-text text-transparent mb-2">
                400+
              </div>
              <div className="font-mono text-sm text-slate-300 font-bold">
                Specialists in Network
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-['Outfit'] font-black bg-gradient-to-r from-[#C084FC] to-[#D946EF] bg-clip-text text-transparent mb-2">
                12+
              </div>
              <div className="font-mono text-sm text-slate-300 font-bold">
                Countries of Deployment
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-['Outfit'] font-black bg-gradient-to-r from-[#D946EF] to-[#7C3AED] bg-clip-text text-transparent mb-2">
                75%
              </div>
              <div className="font-mono text-sm text-slate-300 font-bold">
                Remain Engaged After 1 Year
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-['Outfit'] font-black bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#D946EF] bg-clip-text text-transparent mb-2">
                1,000
              </div>
              <div className="font-mono text-sm text-slate-300 font-bold">
                Small Businesses Mission
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          9. CAREERS CALLOUT
          ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs font-bold text-[#7C3AED] uppercase tracking-wider block mb-2">
              CAREERS &amp; CULTURE
            </span>
            <h3 className="text-2xl sm:text-3xl font-['Outfit'] font-bold text-slate-950">
              Interested in joining our team of experts?
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              We&apos;re always looking for world-class designers, full-stack engineers, and growth strategists.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-full bg-[#0D0422] hover:bg-[#7C3AED] text-white font-mono text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all shadow-md"
          >
            Explore Opportunities →
          </Link>
        </div>
      </section>

      {/* =========================================================================
          10. ACCELERATE YOUR GROWTH GOALS (FULL CTA BANNER)
          ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="relative rounded-[40px] bg-gradient-to-r from-[#0D0422] via-[#2B075C] to-[#0D0422] text-white p-10 sm:p-20 text-center overflow-hidden border border-purple-500/20 shadow-2xl">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#7C3AED]/30 via-[#D946EF]/20 to-transparent rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="font-mono text-xs font-bold tracking-widest text-[#C084FC] uppercase block mb-4">
              READY TO SCALE?
            </span>

            <h2 className="text-4xl sm:text-6xl font-['Outfit'] font-black tracking-tight mb-6">
              Accelerate your{" "}
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#D946EF] bg-clip-text text-transparent">
                growth goals
              </span>
            </h2>

            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10">
              Speak directly with our senior architects, design directors, and venture strategists to build your next breakthrough product.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-9 py-4 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#D946EF] hover:scale-105 text-white font-bold text-lg shadow-xl shadow-purple-900/40 transition-all flex items-center gap-2"
              >
                <span>Speak to our experts</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/startup"
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-lg border border-white/20 transition-all"
              >
                Join Not Another Startup
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
