"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Check, Sparkles, Globe, Cpu, Layers, Award, Code, ArrowRight } from "lucide-react";
import Link from "next/link";

function ServicesContent() {
  const [activeTab, setActiveTab] = useState<string>("digital");
  const searchParams = useSearchParams();

  useEffect(() => {
    // Read category parameter from hash/query
    const hash = window.location.hash.replace("#", "");
    if (hash && ["digital", "labs", "ventures", "academy"].includes(hash)) {
      setActiveTab(hash);
    }
  }, [searchParams]);

  const categories = [
    { id: "digital", name: "Yeqari Digital", tagline: "Establishing Brand Authority & Presence" },
    { id: "labs", name: "Yeqari Labs", tagline: "Engineering the Future with Code & AI" },
    { id: "ventures", name: "Yeqari Ventures", tagline: "Building Napkin Sketches into SaaS Businesses" },
    { id: "academy", name: "Yeqari Academy", tagline: "Nurturing Creators & Developers" },
  ];

  const services = [
    {
      id: "web-dev",
      category: "digital",
      title: "Website Development",
      desc: "Fast, responsive, search-engine-optimized Next.js web systems styled using custom Tailwind utility classes.",
      deliverables: ["Full server-side rendering (SSR)", "Google Lighthouse performance auditing", "Dynamic database forms", "Vercel optimized hosting deployment"],
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    },
    {
      id: "ui-ux",
      category: "digital",
      title: "UI/UX Design",
      desc: "High-end visual prototypes, modern fonts, glassmorphism layouts, and smooth micro-animations that improve conversions.",
      deliverables: ["High-fidelity interactive Figma wireframes", "Custom layout design systems", "User journey and clickable mockups", "Theme color palettes"],
      tech: ["Figma", "Tailwind", "CSS Gradients", "Framer Motion"],
    },
    {
      id: "branding",
      category: "digital",
      title: "Branding & Identity",
      desc: "Creating memorable vector logos, vector assets, styling sheets, and brand design guidelines.",
      deliverables: ["Custom vector logo (SVG/PNG formats)", "Asset books with brand colors", "Typography matching guides", "Slide deck templates"],
      tech: ["Illustrator", "Inkscape", "SVG Code"],
    },
    {
      id: "personal-branding",
      category: "digital",
      title: "Personal Branding",
      desc: "Positioning founders and technical leaders as domain authorities through clean portfolio websites and content strategy.",
      deliverables: ["Clean personal portfolio site", "Social media graphic kits", "Domain setup and business email config"],
      tech: ["Next.js", "Tailwind", "Resend API"],
    },
    {
      id: "ai-solutions",
      category: "labs",
      title: "AI Solutions",
      desc: "Deploying custom cognitive AI nodes, Large Language Model (LLM) agents, and search index scrapers to augment team actions.",
      deliverables: ["Custom chatbot widgets", "Private document parsing pipelines", "Retrieval-Augmented Generation (RAG) configs"],
      tech: ["OpenAI API", "Langchain", "Python", "Vector Databases"],
    },
    {
      id: "automation",
      category: "labs",
      title: "Workflow Automation",
      desc: "Eliminating manual spreadsheets and repetitive tasks by setting up database triggers and webhook workflows.",
      deliverables: ["API database synchronization scripts", "Automated email newsletters", "Slack notification bots"],
      tech: ["n8n", "Zapier", "Node.js", "FastAPI"],
    },
    {
      id: "software-dev",
      category: "labs",
      title: "Software Development",
      desc: "Custom operational software designed to solve specific organizational issues.",
      deliverables: ["Custom business portals", "Secure API development & integration", "Robust database schemas"],
      tech: ["TypeScript", "Node.js", "PostgreSQL", "Docker"],
    },
    {
      id: "saas",
      category: "ventures",
      title: "SaaS Development",
      desc: "Building cloud subscription platforms featuring membership tiers, stripe integration, and user analytics.",
      deliverables: ["Stripe subscription webhooks", "Multi-tenant user authentication", "Admin dashboard control pages"],
      tech: ["Next.js Auth", "Stripe API", "PostgreSQL", "SupaBase"],
    },
    {
      id: "mvp",
      category: "ventures",
      title: "MVP Development",
      desc: "Rapid onboarding and coding of Minimum Viable Products in 4-6 weeks to validate ideas in the real market.",
      deliverables: ["Core feature layout coding", "Fast feedback collection integration", "Analytics dashboards"],
      tech: ["Next.js", "Tailwind CSS", "Prisma ORM", "Vercel"],
    },
    {
      id: "marketing-consulting",
      category: "ventures",
      title: "Digital Marketing Consulting",
      desc: "Consulting on organic analytics tracking, search auditing (SEO), and funnel automation models.",
      deliverables: ["SEO rank audit blueprints", "Funnel mapping blueprints", "Google Analytics dashboards"],
      tech: ["Google Analytics", "Ahrefs", "Hotjar"],
    },
    {
      id: "academy-workshops",
      category: "academy",
      title: "Education & Workshops",
      desc: "Custom team training on Next.js, headless CMS management (Sanity/Strapi), and AI tool integration.",
      deliverables: ["Screencast workshops", "Code templates & starter boilerplate packages", "Direct Q&A hours"],
      tech: ["Zoom", "GitHub Guides", "MDX docs"],
    },
  ];

  const activeServices = services.filter((s) => s.category === activeTab);

  return (
    <div className="relative w-full py-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-16">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="max-w-3xl flex flex-col gap-6">
        <div className="flex items-center gap-2 border border-gold/20 bg-gold/5 px-4 py-1.5 rounded-full self-start">
          <Award className="w-3.5 h-3.5 text-gold" />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold">
            Services Architecture
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
          Your Business Deserves <br />
          <span className="text-gradient-gold">A Premium Digital Home</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed">
          Explore all our capabilities across Yeqari. We organize our 10 service profiles into distinct operational pillars. Select a category below to explore specific details.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 border-b border-white/5 pb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveTab(cat.id);
              window.location.hash = cat.id;
            }}
            className={`px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest border transition-all duration-300 ${
              activeTab === cat.id
                ? "border-[#D4AF37] bg-[#D4AF37] text-black"
                : "border-white/5 bg-[#0a0a0a]/50 text-zinc-400 hover:border-white/10 hover:text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Services List inside selected category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {activeServices.map((service) => (
          <div
            key={service.id}
            className="p-6 md:p-8 rounded-3xl border border-white/5 bg-[#0a0a0a]/80 flex flex-col justify-between gap-6 hover:border-gold/20 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Background absolute ambient glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-full blur-2xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <h3 className="text-lg font-bold text-white tracking-wide">{service.title}</h3>
                <Sparkles className="w-4 h-4 text-gold/60" />
              </div>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">{service.desc}</p>
            </div>

            {/* Deliverables List */}
            <div className="flex flex-col gap-2.5">
              <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold">
                Deliverables:
              </span>
              <ul className="flex flex-col gap-2">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-1.5" />
                    <span className="text-zinc-400 text-xs">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack tags */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
              {service.tech.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] uppercase tracking-wider font-semibold border border-white/5 bg-white/5 px-2.5 py-1 rounded-md text-zinc-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="border border-gold/20 bg-gold/5 p-8 rounded-3xl backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-6 max-w-4xl mx-auto w-full mt-8">
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] uppercase font-bold tracking-widest text-gold">
            Ready to Take Action?
          </span>
          <h3 className="text-lg font-bold text-white tracking-wide">
            Let&apos;s Build Your Custom Brand Architecture
          </h3>
          <p className="text-zinc-400 text-xs">
            Open our interactive builder to specify your goals and get direct roadmap reviews.
          </p>
        </div>
        <Link
          href="/contact"
          className="group flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest px-6 py-3.5 transition-colors self-start md:self-center"
        >
          <span>Build Your Solution</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <React.Suspense fallback={
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center">
        <div className="w-6 h-6 border-2 border-gold border-t-transparent rounded-full animate-spin" />
        <span className="text-[10px] text-zinc-500 uppercase tracking-[0.2em]">Synchronizing Universe...</span>
      </div>
    }>
      <ServicesContent />
    </React.Suspense>
  );
}

