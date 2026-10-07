import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { servicesData, ServiceItem } from "@/data/servicesData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) {
    return { title: "Service Not Found — YEQARI GLOBAL" };
  }
  return {
    title: `${service.title} — ${service.division} | YEQARI GLOBAL`,
    description: service.heroSummary,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service: ServiceItem | undefined = servicesData[slug];

  if (!service) {
    notFound();
  }

  const divisionBadgeColor =
    service.divisionSlug === "it-infrastructure"
      ? "bg-[#7C3AED]/10 text-[#7C3AED] border-[#7C3AED]/20"
      : service.divisionSlug === "digital"
      ? "bg-[#D946EF]/10 text-[#D946EF] border-[#D946EF]/20"
      : "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20";

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-slate-900 pt-28 pb-20">
      
      {/* Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">YEQARI</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-slate-900 transition-colors">SERVICES</Link>
          <span>/</span>
          <span className="text-slate-400">{service.division}</span>
          <span>/</span>
          <span className="text-[#7C3AED] font-bold">{service.title}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#0D0422] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-purple-900/30">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#7C3AED]/20 to-[#D946EF]/10 rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#7C3AED]/10 rounded-full blur-2xl -z-0 pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            {/* Division Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-6 bg-white/10 backdrop-blur-md border border-white/10 text-[#C084FC]">
              <span className="w-2 h-2 rounded-full bg-[#D946EF] animate-pulse" />
              {service.division}
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold font-['Outfit'] tracking-tight mb-6 leading-[1.08] text-white">
              {service.title}
            </h1>

            <p className="text-xl sm:text-2xl text-purple-200 font-light leading-relaxed mb-8 max-w-3xl">
              {service.tagline}
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-3xl">
              {service.heroSummary}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#D946EF] text-white font-semibold text-sm tracking-wide shadow-lg shadow-purple-500/25 hover:opacity-95 hover:scale-[1.02] transition-all"
              >
                Request Technical Proposal
              </Link>
              <a
                href="https://wa.me/94722346167?text=Hello%20YEQARI,%20I%20would%20like%20to%20discuss%20"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm tracking-wide border border-white/20 transition-all flex items-center gap-2"
              >
                <span>Discuss on WhatsApp</span>
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.07-1.782-.406-1.47-.609-2.42-2.096-2.493-2.195-.074-.098-.59-1.042-.59-1.987 0-.946.496-1.412.673-1.608.176-.197.385-.246.514-.246.128 0 .257.002.368.007.118.005.276-.045.431.328.16.386.547 1.332.595 1.431.049.098.082.213.016.344-.065.131-.098.213-.197.328-.098.115-.207.257-.295.344-.098.098-.201.205-.087.401.115.197.511.843 1.096 1.364.754.671 1.389.879 1.587.978.197.098.312.082.427-.049.115-.131.492-.574.623-.77.131-.197.262-.164.443-.098.18.066 1.148.541 1.345.64.197.098.328.147.377.23.049.082.049.475-.095.88z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem It Solves */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mb-10">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-rose-500 mb-2">
            THE STRATEGIC PROBLEM
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight text-slate-900">
            {service.problemSolved.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.problemSolved.points.map((p, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:border-slate-300 transition-all">
              <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-200 text-rose-600 font-mono text-xs font-bold flex items-center justify-center mb-6">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {p.issue}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {p.impact}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What YEQARI Provides */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mb-10">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7C3AED] mb-2">
            WHAT YEQARI DELIVERS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight text-slate-900">
            Engineered deliverables designed for enduring impact.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {service.whatYeqariProvides.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:bg-white hover:shadow-md transition-all">
              <div>
                <div className="text-xs font-mono font-bold text-[#7C3AED] uppercase tracking-wider mb-3">
                  PILLAR 0{idx + 1}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="text-xs font-mono font-semibold uppercase text-slate-500 mb-3 tracking-wider">
                  Deliverables Included:
                </div>
                <ul className="space-y-2">
                  {item.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700">
                      <svg className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Capabilities Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-[#0D0422] rounded-3xl p-8 sm:p-12 text-white border border-purple-900/30">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#C084FC] mb-2">
              TECHNICAL & STRATEGIC DEPTH
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight text-white">
              Key Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.keyCapabilities.map((cap, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-[#7C3AED]/50 transition-all">
                {cap.metric && (
                  <div className="inline-block px-3 py-1 rounded-full bg-[#7C3AED]/20 text-[#C084FC] font-mono text-xs font-bold mb-4">
                    {cap.metric}
                  </div>
                )}
                <h3 className="text-lg font-bold text-white mb-2">
                  {cap.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phased Execution Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mb-10">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7C3AED] mb-2">
            HOW WE WORK
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight text-slate-900">
            Typical Execution Lifecycle
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {service.typicalProcess.map((step) => (
            <div key={step.step} className="bg-white border border-slate-200 rounded-2xl p-6 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-['Outfit'] text-[#7C3AED]">{step.step}</span>
                  <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{step.timeline}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Target Audience & Relevant Use Cases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Who It Is For */}
          <div className="lg:col-span-5">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7C3AED] mb-2">
              TARGET PROFILES
            </div>
            <h2 className="text-3xl font-extrabold font-['Outfit'] tracking-tight text-slate-900 mb-8">
              Who this service is engineered for.
            </h2>
            <div className="space-y-4">
              {service.targetAudience.map((aud, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                    {aud.profile}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {aud.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="lg:col-span-7">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7C3AED] mb-2">
              PROVEN OUTCOMES
            </div>
            <h2 className="text-3xl font-extrabold font-['Outfit'] tracking-tight text-slate-900 mb-8">
              Practical Enterprise Scenarios
            </h2>
            <div className="space-y-6">
              {service.relevantUseCases.map((uc, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                  <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-bold mb-4">
                    {uc.clientType}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-xs">
                    <div>
                      <strong className="text-slate-900 block mb-1">Challenge:</strong>
                      <p className="text-slate-600 leading-relaxed">{uc.challenge}</p>
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-1">YEQARI Solution:</strong>
                      <p className="text-slate-600 leading-relaxed">{uc.solution}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#7C3AED]">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Outcome: {uc.outcome}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Related YEQARI Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mb-8">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-1">
            ECOSYSTEM INTEGRATION
          </div>
          <h2 className="text-2xl font-bold font-['Outfit'] text-slate-900">
            Related YEQARI Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {service.relatedServices.map((rel) => (
            <Link
              key={rel.slug}
              href={`/services/${rel.slug}`}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#7C3AED] hover:shadow-md transition-all group"
            >
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                {rel.division}
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#7C3AED] transition-colors mb-2 flex items-center justify-between">
                <span>{rel.title}</span>
                <span className="text-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0D0422] to-[#2B075C] text-white rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] tracking-tight mb-4">
            Ready to engineer your {service.title.toLowerCase()}?
          </h2>
          <p className="text-base sm:text-lg text-purple-200 max-w-2xl mx-auto mb-8 font-light">
            Speak directly with our technical leads in Colombo. We deliver detailed scopes, deterministic architecture, and transparent milestones.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#D946EF] text-white font-semibold text-sm tracking-wide shadow-xl hover:opacity-95 transition-all"
            >
              Start Your Project
            </Link>
            <a
              href="mailto:hello@yeqari.global"
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
