import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Ecosystem — YEQARI GLOBAL",
  description: "Explore Yeqari Digital, Yeqari Ventures, and Yeqari Academy. Helping businesses, startups, and learners move from idea to growth.",
};

export default function ServicesPage() {
  const divisions = [
    {
      title: "YEQARI DIGITAL",
      badge: "DIGITAL & PRODUCT EXECUTION",
      accent: "#6D28D9",
      description: "Complete design, engineering, and digital marketing execution for established brands and modern enterprises.",
      services: [
        {
          name: "Website Development",
          desc: "High-performance websites, custom platforms, and responsive web applications engineered for speed, conversion, and global reach."
        },
        {
          name: "Branding & Identity",
          desc: "Distinctive visual systems, logo architecture, typography, guidelines, and brand narratives that make companies iconic."
        },
        {
          name: "Social Media Management",
          desc: "Multi-platform brand presence, content curation, community building, and algorithmic distribution across Instagram, TikTok, Facebook, and LinkedIn."
        },
        {
          name: "Content Strategy",
          desc: "Editorial copywriting, multimedia assets, storytelling frameworks, and positioning that captivate audience attention."
        },
        {
          name: "Marketing Strategy",
          desc: "Full-funnel digital campaigns, paid performance advertising, search optimization, and data-driven customer acquisition."
        }
      ]
    },
    {
      title: "YEQARI VENTURES",
      badge: "STARTUP INCUBATION & ACCELERATION",
      accent: "#059669",
      description: "Dedicated venture-building support to take early-stage founders and raw concepts into funded, operating realities.",
      services: [
        {
          name: "Startup Launch Package",
          desc: "All-in-one turnkey foundation: brand setup, launch page, pitch materials, infrastructure setup, and go-to-market plan."
        },
        {
          name: "Business Proposal Development",
          desc: "Institutional-grade investment proposals, pitch decks, market whitespace analysis, and financial feasibility models."
        },
        {
          name: "MVP Planning",
          desc: "Scoping core feature sets, user journey architecture, product requirement definitions (PRD), and prototype execution."
        },
        {
          name: "Digital Presence Setup",
          desc: "Corporate domain, email infrastructure, CRM integrations, analytics pipelines, and official digital touchpoint deployment."
        },
        {
          name: "Startup Growth Strategy",
          desc: "Early traction experiments, product-market fit validation, CAC/LTV tuning, and initial customer acquisition flywheels."
        }
      ]
    },
    {
      title: "YEQARI ACADEMY",
      badge: "EDUCATION & AI EMPOWERMENT",
      accent: "#A855F7",
      description: "Upskilling corporate teams, professionals, and students in applied AI, modern technology, and digital mastery.",
      services: [
        {
          name: "Corporate Training",
          desc: "Tailored executive and team workshops on modern software workflows, digital transformation, and organizational AI adoption."
        },
        {
          name: "Webinars",
          desc: "Live interactive digital masterclasses on emerging tech trends, digital marketing architecture, and product building."
        },
        {
          name: "Student Training",
          desc: "Hands-on development, design, and entrepreneurial bootcamps designed to bridge the gap between academic theory and real-world tech."
        },
        {
          name: "AI Awareness Programs",
          desc: "Demystifying artificial intelligence, generative tools, and intelligent automation for businesses and non-technical stakeholders."
        },
        {
          name: "AI Cert Awareness Program",
          desc: "Guided pathways and certification readiness for recognized international AI standards and professional accreditations."
        }
      ]
    }
  ];

  const bridgeSteps = [
    {
      num: "01",
      name: "Idea",
      sub: "SPARK OF INSPIRATION",
      desc: "A raw concept with potential."
    },
    {
      num: "02",
      name: "Strategy",
      sub: "EXECUTION ROADMAP",
      desc: "Aligning purpose with market data."
    },
    {
      num: "03",
      name: "Design",
      sub: "USER EXPERIENCE",
      desc: "Premium interface layouts."
    },
    {
      num: "04",
      name: "Technology",
      sub: "NEXT.JS & CLOUD BUILD",
      desc: "Rigorous software engineering."
    },
    {
      num: "05",
      name: "Growth",
      sub: "SCALE & ACCELERATION",
      desc: "Vercel hosting and live scaling."
    }
  ];

  return (
    <div className="py-20 md:py-28">
      <div className="max-w-[1360px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="border-b border-[#121110]/8 pb-16 mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[#848079] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" />
            ORGANIZATIONAL STRUCTURE
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-[#121110] mb-6">
            Our ecosystem of services.
          </h1>
          <p className="text-xl text-[#57544F] max-w-3xl leading-relaxed">
            YEQARI operates through three specialized divisions: <strong>Yeqari Digital</strong> for digital product execution, <strong>Yeqari Ventures</strong> for startup creation, and <strong>Yeqari Academy</strong> for future-proof tech education.
          </p>
        </div>

        {/* 3 Main Divisions */}
        <div className="flex flex-col gap-24">
          {divisions.map((div) => (
            <section
              key={div.title}
              className="p-8 sm:p-12 rounded-3xl bg-[#F4F2EC] border border-[#121110]/10"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-10 pb-8 border-b border-[#121110]/10">
                <div>
                  <span
                    className="font-mono text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white border border-[#121110]/10 inline-block mb-3"
                    style={{ color: div.accent }}
                  >
                    {div.badge}
                  </span>
                  <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#121110]">
                    {div.title}
                  </h2>
                </div>
                <p className="text-base text-[#57544F] max-w-lg leading-relaxed">
                  {div.description}
                </p>
              </div>

              {/* Service Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {div.services.map((svc) => (
                  <div
                    key={svc.name}
                    className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#121110]/8 flex flex-col justify-between hover:border-[#121110]/25 transition-all shadow-sm"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-base" style={{ color: div.accent }}>✦</span>
                        <h3 className="text-lg font-extrabold text-[#121110] tracking-tight">
                          {svc.name}
                        </h3>
                      </div>
                      <p className="text-sm text-[#57544F] leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold hover:underline"
                      style={{ color: div.accent }}
                    >
                      Inquire service ↗
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* The Bridge: Idea to Growth */}
        <section className="mt-32 p-10 sm:p-16 rounded-3xl bg-[#121110] text-[#FAF9F6]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold tracking-widest text-[#A855F7] uppercase block mb-3">
              OUR CORE PURPOSE
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              The Bridge: Idea to Growth
            </h2>
            <p className="text-sm sm:text-base text-[#848079] mt-4">
              A seamless, structured pipeline designed to eliminate friction and translate pure ambition into compounding market success.
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
        </section>

        {/* CTA */}
        <div className="mt-28 p-12 md:p-16 rounded-2xl bg-[#F4F2EC] border border-[#121110]/10 text-center flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121110] mb-4">
            Which division can we help you with?
          </h2>
          <p className="text-base text-[#57544F] max-w-md mb-8">
            Reach out directly to discuss Yeqari Digital, Ventures, or Academy programs.
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
