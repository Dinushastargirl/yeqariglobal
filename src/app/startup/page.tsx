"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function StartupPage() {
  const [activePathway, setActivePathway] = useState<"mvp" | "roadmap" | "startup">("mvp");
  const [appName, setAppName] = useState("");
  const [appEmail, setAppEmail] = useState("");
  const [appWhatsapp, setAppWhatsapp] = useState("");
  const [appIdeaTitle, setAppIdeaTitle] = useState("");
  const [appIdeaPitch, setAppIdeaPitch] = useState("");
  const [appStage, setAppStage] = useState("Just an Idea (Zero to One)");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scrollToApply = (pathwayKey?: "mvp" | "roadmap" | "startup") => {
    if (pathwayKey) setActivePathway(pathwayKey);
    const el = document.getElementById("apply");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const pathways = {
    mvp: {
      id: "mvp",
      badge: "PATHWAY 01",
      title: "IDEA → MVP",
      quote: "I have an idea. Help me build the first real version.",
      target: "For founders with a concrete concept who need a working, testable product in users' hands fast.",
      focusPoints: [
        "Idea validation & scope sharpening",
        "Product definition & feature prioritization",
        "MVP architecture & database planning",
        "User experience (UX) & wireframing",
        "Production UI design system",
        "Rapid full-stack development",
        "End-to-end testing & bug triage",
        "Launch preparation & deployment to production"
      ],
      deliverable: "A fully working Minimum Viable Product (web or mobile app) deployed on your domain with live users, database, and analytics.",
      timeline: "4 to 8 Weeks",
      buttonText: "Build My MVP With YEQARI",
      accentBg: "from-[#7C3AED] to-[#C084FC]",
      accentColor: "#7C3AED",
      tag: "WORKING SOFTWARE"
    },
    roadmap: {
      id: "roadmap",
      badge: "PATHWAY 02",
      title: "IDEA → ROADMAP",
      quote: "I have an idea, but I don't know what comes next.",
      target: "For founders with an exciting concept who feel overwhelmed by technical choices, business direction, or execution sequence.",
      focusPoints: [
        "Idea clarification & core value proposition",
        "Market viability & competitor whitespace mapping",
        "Product feature roadmap & release milestones",
        "Technology architecture blueprint",
        "Engineering stack selection (avoiding bad choices)",
        "Resource budgeting & development phases",
        "Risk identification & mitigation strategy",
        "Growth planning & first 100 users acquisition playbook"
      ],
      deliverable: "A comprehensive, realistic, phased Technical & Business Roadmap ready for development or investor discussions.",
      timeline: "2 to 3 Weeks",
      buttonText: "Map My Roadmap With YEQARI",
      accentBg: "from-[#C084FC] to-[#D946EF]",
      accentColor: "#D946EF",
      tag: "EXECUTION BLUEPRINT"
    },
    startup: {
      id: "startup",
      badge: "PATHWAY 03",
      title: "IDEA → STARTUP",
      quote: "I want to turn my idea into a real startup.",
      target: "For ambitious builders who want to go beyond a side project and build an enduring, defensible technology venture.",
      focusPoints: [
        "Rigorous customer problem validation",
        "Business model & monetization mechanics",
        "Full-stack product design & engineering",
        "Brand identity, visual mark & narrative voice",
        "Digital presence, domain, email & social touchpoints",
        "Technical foundation & scalable cloud setup",
        "Go-to-market strategy & launch campaign",
        "Post-launch iteration & retention telemetry"
      ],
      deliverable: "A complete, launched startup venture: live software, brand identity, operational infrastructure, and go-to-market engine.",
      timeline: "8 to 12 Weeks",
      buttonText: "Launch My Startup With YEQARI",
      accentBg: "from-[#0D0422] via-[#2B075C] to-[#7C3AED]",
      accentColor: "#7C3AED",
      tag: "FULL VENTURE LAUNCH"
    }
  };

  const current = pathways[activePathway];

  return (
    <div className="min-h-screen bg-[#0D0422] text-white pt-28 pb-24 selection:bg-[#D946EF] selection:text-white">
      
      {/* Background Ambient Cyber Grid & Glow */}
      <div className="fixed inset-0 pointer-events-none -z-0 opacity-25">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#7C3AED] via-[#C084FC] to-[#D946EF] rounded-full blur-[140px]" />
      </div>

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 relative z-10">
        <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-300">
          <Link href="/" className="hover:text-white transition-colors">YEQARI</Link>
          <span>/</span>
          <span className="text-[#C084FC] font-bold">STARTUP HUB</span>
        </nav>
      </div>

      {/* ====================================================================
          HERO SECTION — PROMINENT BRANDING
          ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8">
            {/* Identity Lockup */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-8 bg-purple-950/70 border border-purple-500/30 text-[#C084FC] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#D946EF] animate-ping" />
              <span>YEQARI STARTUP</span>
            </div>

            {/* Official Program Tagline */}
            <h2 className="text-xl sm:text-2xl font-mono uppercase tracking-[0.2em] text-purple-300 font-semibold mb-4">
              NOT ANOTHER STARTUP PROGRAM
            </h2>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-['Outfit'] tracking-tight text-white mb-8 leading-[0.95]">
              Your idea does not need to stay an idea.
            </h1>

            {/* Direct, Realistic Proposition */}
            <p className="text-lg sm:text-2xl text-purple-100 font-light leading-relaxed max-w-3xl mb-10">
              We help students, young entrepreneurs and early-stage founders move from an idea to something real. No academic lectures, no generic slide decks. Just real engineering, design, and execution.
            </p>

            {/* Execution Loop Strip */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-mono text-xs sm:text-sm font-bold tracking-wider text-[#C084FC] bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 max-w-2xl backdrop-blur-md">
              <span>IDEA</span>
              <span className="text-[#D946EF]">→</span>
              <span>BUILD</span>
              <span className="text-[#D946EF]">→</span>
              <span>TEST</span>
              <span className="text-[#D946EF]">→</span>
              <span>LEARN</span>
              <span className="text-[#D946EF]">→</span>
              <span className="text-white bg-[#7C3AED] px-2 py-0.5 rounded">GROW</span>
            </div>
          </div>

          {/* Official Startup Logo Presentation (3D Iridescent Holographic NAS Badge) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="w-full max-w-sm bg-gradient-to-b from-white/10 via-purple-900/20 to-black/60 border border-purple-500/40 rounded-3xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-[0_0_50px_rgba(192,132,252,0.25)] group">
              {/* Iridescent Refractive Flare Glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-[#D946EF]/40 via-[#C084FC]/30 to-[#7C3AED]/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-gradient-to-tr from-[#38bdf8]/20 via-[#C084FC]/30 to-[#D946EF]/20 rounded-full blur-3xl pointer-events-none" />
              
              {/* Official Supplied Logo Slot */}
              <div className="w-full aspect-square max-w-[280px] mx-auto mb-6 rounded-2xl overflow-hidden border border-purple-400/40 shadow-2xl relative bg-black">
                <img
                  src="/assets/nas-logo.jpg"
                  alt="NAS — not another startup | YEQARI STARTUP Official Identity"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="text-center relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-purple-400/30 text-[11px] font-mono font-bold tracking-widest text-[#C084FC] uppercase mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D946EF]" />
                  <span>OFFICIAL PROGRAM IDENTITY</span>
                </div>
                <div className="text-xl font-black font-['Outfit'] tracking-tight text-white mb-1">
                  YEQARI STARTUP
                </div>
                <div className="text-xs font-mono font-semibold tracking-wider text-purple-300 uppercase mb-3">
                  NOT ANOTHER STARTUP PROGRAM
                </div>
                <p className="text-xs text-purple-200 leading-relaxed font-light">
                  A high-conviction incubator for students, young entrepreneurs, and first-time builders moving from idea to real software.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ====================================================================
          WHO THIS IS SPECIFICALLY DESIGNED FOR
          ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28 relative z-10">
        <div className="border-t border-b border-purple-900/40 py-12">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 mb-6">
            WHO THIS IS FOR
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Students With Ideas",
              "Young Entrepreneurs",
              "Aspiring Founders",
              "First-Time Builders",
              "Early-Stage Builders",
              "Makers Starting From Zero"
            ].map((persona, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-purple-400/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-[#D946EF] mx-auto mb-2.5" />
                <span className="text-xs font-mono font-semibold text-purple-100">{persona}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          THE THREE PATHWAYS — VISUAL & INTERACTIVE CENTREPIECE
          ==================================================================== */}
      <section id="pathways" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10 scroll-mt-28">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#C084FC] mb-3">
            CHOOSE YOUR STARTING POINT
          </div>
          <h2 className="text-4xl sm:text-6xl font-black font-['Outfit'] tracking-tight text-white mb-4">
            Three Pathways to Something Real
          </h2>
          <p className="text-base sm:text-lg text-purple-200 font-light">
            Every founder starts from a different place. Pick the pathway that fits where you are right now.
          </p>
        </div>

        {/* Interactive Pathway Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
          {(["mvp", "roadmap", "startup"] as const).map((key) => {
            const p = pathways[key];
            const isActive = activePathway === key;
            return (
              <button
                key={key}
                onClick={() => setActivePathway(key)}
                className={`p-6 rounded-2xl text-left border transition-all cursor-pointer relative ${
                  isActive
                    ? "bg-gradient-to-b from-white/15 to-white/5 border-[#C084FC] shadow-[0_0_30px_rgba(192,132,252,0.2)]"
                    : "bg-white/5 border-white/10 hover:border-white/20 text-slate-300"
                }`}
              >
                {isActive && (
                  <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#D946EF] animate-ping" />
                )}
                <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-purple-300 mb-1">
                  {p.badge}
                </div>
                <div className="text-2xl font-black font-['Outfit'] text-white mb-2">
                  {p.title}
                </div>
                <p className="text-xs text-purple-200 line-clamp-2 italic">
                  &ldquo;{p.quote}&rdquo;
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Pathway Detailed Showcase Card */}
        <div className="bg-gradient-to-b from-white/10 to-white/5 border border-purple-500/30 rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Positioning & Scope */}
            <div className="lg:col-span-7">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-4 bg-[#7C3AED]/30 text-[#C084FC] border border-[#7C3AED]/40">
                {current.tag} • {current.timeline}
              </div>

              <h3 className="text-3xl sm:text-5xl font-black font-['Outfit'] text-white mb-4">
                {current.title}
              </h3>

              <div className="text-lg sm:text-xl font-medium text-[#C084FC] mb-6 italic border-l-2 border-[#D946EF] pl-4">
                &ldquo;{current.quote}&rdquo;
              </div>

              <p className="text-sm sm:text-base text-purple-100 leading-relaxed mb-8">
                {current.target}
              </p>

              <div className="mb-8">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 mb-4">
                  What we focus on together:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.focusPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-white">
                      <svg className="w-4 h-4 text-[#D946EF] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Concrete Outcome & CTA */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full bg-[#0D0422]/70 border border-purple-500/20 rounded-2xl p-8">
              <div>
                <div className="text-xs font-mono font-bold tracking-wider uppercase text-purple-400 mb-2">
                  THE CONCRETE OUTCOME
                </div>
                <h4 className="text-xl font-bold text-white mb-4">
                  What You Walk Away With
                </h4>
                <p className="text-sm text-purple-200 leading-relaxed mb-8 bg-white/5 p-4 rounded-xl border border-white/5">
                  {current.deliverable}
                </p>

                <div className="space-y-3 mb-8 text-xs font-mono text-purple-300">
                  <div className="flex justify-between border-b border-purple-900/40 pb-2">
                    <span>Program Duration</span>
                    <span className="font-bold text-white">{current.timeline}</span>
                  </div>
                  <div className="flex justify-between border-b border-purple-900/40 pb-2">
                    <span>Technical Support</span>
                    <span className="font-bold text-white">Direct Lead Engineers</span>
                  </div>
                  <div className="flex justify-between border-b border-purple-900/40 pb-2">
                    <span>Code & IP Ownership</span>
                    <span className="font-bold text-[#C084FC]">100% You Own It</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => scrollToApply(activePathway)}
                  className="w-full block text-center py-4 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#D946EF] text-white font-bold text-sm tracking-wide shadow-lg hover:opacity-95 transition-all mb-3 cursor-pointer"
                >
                  {current.buttonText} →
                </button>
                <a
                  href={`https://wa.me/94722346167?text=Hi%20YEQARI,%20I'm%20interested%20in%20YEQARI%20STARTUP%20pathway:%20${encodeURIComponent(current.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs tracking-wide border border-white/20 transition-all"
                >
                  Chat with Founder on WhatsApp
                </a>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* ====================================================================
          NO CLICHÉS — REAL TALK COMPARISON
          ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-mono font-bold tracking-widest uppercase text-[#D946EF] mb-2">
            WHY THIS EXISTS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-['Outfit'] text-white">
            How We Differ From Generic Programs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Generic Incubator / University Trap */}
          <div className="bg-rose-950/20 border border-rose-900/40 rounded-3xl p-8">
            <div className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              Generic Incubators & Government Schemes
            </div>
            <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Endless theoretical lectures from people who haven&apos;t coded or shipped software in 10 years.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-400 font-bold">✕</span>
                <span>Obsession with pitch decks, business model canvases, and jargon while nothing is built.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-400 font-bold">✕</span>
                <span>You leave with a certificate of completion and zero working software or live users.</span>
              </li>
            </ul>
          </div>

          {/* YEQARI STARTUP Real Execution */}
          <div className="bg-purple-950/30 border border-purple-500/40 rounded-3xl p-8">
            <div className="text-xs font-mono font-bold text-[#C084FC] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D946EF]" />
              YEQARI STARTUP — NOT ANOTHER STARTUP PROGRAM
            </div>
            <ul className="space-y-4 text-xs sm:text-sm text-white">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Direct collaboration with active software engineers, product designers, and technical builders.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>We write actual code, build real UI systems, and deploy to real domains that accept payments.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>You walk away with an actual working product or real roadmap that is 100% owned by you.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ====================================================================
          DIRECT IN-PAGE APPLICATION FORM
          ==================================================================== */}
      <section id="apply" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-28 relative z-10 scroll-mt-28">
        <div className="bg-gradient-to-b from-[#180B38] to-[#0D0422] border border-purple-500/40 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#D946EF]/20 via-[#7C3AED]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-bold text-[#C084FC] uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D946EF] animate-pulse" />
              COHORT INTAKE
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-['Outfit'] text-white mb-3">
              Apply to YEQARI STARTUP
            </h2>
            <p className="text-sm sm:text-base text-purple-200 font-light">
              Submit your idea below. We review every application personally and reply within 24 hours.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-emerald-950/40 border border-emerald-500/50 rounded-2xl p-8 text-center max-w-lg mx-auto">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl mx-auto mb-4">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
              <p className="text-sm text-emerald-200 mb-6">
                Thank you, {appName || "Founder"}. We have logged your application for the {pathways[activePathway].title} pathway and will contact you via email/WhatsApp within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/94722346167?text=${encodeURIComponent(`Hi YEQARI, I just submitted an application for ${appName} - ${appIdeaTitle || "Startup Idea"} on the ${pathways[activePathway].title} pathway!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#10b981] hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Fast-Track on WhatsApp →
                </a>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs tracking-wider transition-all"
                >
                  Submit Another Idea
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsSubmitted(true);
              }}
              className="space-y-6 max-w-2xl mx-auto relative z-10"
            >
              {/* Pathway Choice */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold mb-2">
                  Select Your Program Pathway *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(["mvp", "roadmap", "startup"] as const).map((key) => {
                    const pw = pathways[key];
                    const isSelected = activePathway === key;
                    return (
                      <button
                        type="button"
                        key={key}
                        onClick={() => setActivePathway(key)}
                        className={`p-3.5 rounded-xl border text-left text-xs font-mono transition-all cursor-pointer ${
                          isSelected
                            ? "bg-purple-900/60 border-[#C084FC] text-white shadow-md font-bold"
                            : "bg-white/5 border-white/10 text-purple-200 hover:border-white/20"
                        }`}
                      >
                        <div className="text-[10px] text-[#C084FC]">{pw.badge}</div>
                        <div className="text-sm font-bold text-white">{pw.title}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:border-[#C084FC] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={appEmail}
                    onChange={(e) => setAppEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:border-[#C084FC] transition-colors"
                  />
                </div>
              </div>

              {/* WhatsApp & Current Stage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold mb-2">
                    WhatsApp / Phone Number
                  </label>
                  <input
                    type="tel"
                    value={appWhatsapp}
                    onChange={(e) => setAppWhatsapp(e.target.value)}
                    placeholder="+94 77 123 4567"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:border-[#C084FC] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold mb-2">
                    Current Stage of Idea
                  </label>
                  <select
                    value={appStage}
                    onChange={(e) => setAppStage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#1c0e3a] border border-white/15 text-white text-sm focus:outline-none focus:border-[#C084FC] transition-colors"
                  >
                    <option value="Just an Idea (Zero to One)">Just an Idea (Zero to One)</option>
                    <option value="Wireframes or Figma ready">Wireframes or Figma ready</option>
                    <option value="Half-built prototype / code exists">Half-built prototype / code exists</option>
                    <option value="Launched but need overhaul / pivot">Launched but need overhaul / pivot</option>
                  </select>
                </div>
              </div>

              {/* Idea Title */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold mb-2">
                  Idea / Project Name
                </label>
                <input
                  type="text"
                  value={appIdeaTitle}
                  onChange={(e) => setAppIdeaTitle(e.target.value)}
                  placeholder="e.g. CampusRent — Student Housing Discovery"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:border-[#C084FC] transition-colors"
                />
              </div>

              {/* Pitch */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold mb-2">
                  What does it do and who is it for? *
                </label>
                <textarea
                  rows={4}
                  required
                  value={appIdeaPitch}
                  onChange={(e) => setAppIdeaPitch(e.target.value)}
                  placeholder="Tell us briefly about the problem you are solving, who the users are, and what you hope to achieve with YEQARI STARTUP..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:border-[#C084FC] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#D946EF] text-white font-bold text-sm uppercase tracking-wider shadow-xl hover:opacity-95 transition-all cursor-pointer"
                >
                  Submit Application for Review →
                </button>
                <div className="text-center mt-3 text-xs text-purple-300/60 font-mono">
                  100% IP ownership guaranteed • Non-disclosure protected
                </div>
              </div>
            </form>
          )}

        </div>
      </section>

      {/* ====================================================================
          FOUNDER ACTION HUB
          ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-[#7C3AED]/20 via-[#C084FC]/20 to-[#D946EF]/20 border border-purple-500/40 rounded-3xl p-10 sm:p-16 text-center">
          <div className="text-xs font-mono font-bold tracking-widest text-[#C084FC] uppercase mb-4">
            TAKE THE FIRST STEP
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-['Outfit'] text-white mb-6">
            Tell us about what you want to build.
          </h2>
          <p className="text-sm sm:text-base text-purple-200 max-w-xl mx-auto mb-10 font-light">
            You don&apos;t need a 30-page business plan. You just need an idea, curiosity, and the commitment to turn it into something real.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollToApply()}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#D946EF] text-white font-bold text-sm tracking-wide shadow-xl hover:scale-105 transition-all cursor-pointer"
            >
              Apply to YEQARI STARTUP
            </button>
            <a
              href="mailto:hello@yeqari.global?subject=YEQARI%20STARTUP%20Inquiry"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm tracking-wide border border-white/20 transition-all"
            >
              Email hello@yeqari.global
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
