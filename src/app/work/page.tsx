import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work — YEQARI GLOBAL",
  description: "A curated selection of platforms, intelligent systems, brand ecosystems, and digital products engineered by YEQARI GLOBAL.",
};

export default function WorkPage() {
  const projects = [
    {
      id: "pickher",
      category: "Mobility Platform & Safety Systems",
      name: "PICKHER",
      desc: "Women-to-women mobility and safety network built from zero. We engineered the end-to-end rider application, automated biometric identity verification, real-time trip monitoring telemetry, and regional launch system.",
      metrics: [
        { val: "25,000+", lbl: "Active Riders Q1" },
        { val: "99.98%", lbl: "Safety Verification Score" }
      ],
      tech: "React Native • Geospatial Engine • WebSockets • Redis Dispatch",
      image: "/assets/case-pickher.jpg"
    },
    {
      id: "samaranna",
      category: "E-Commerce & Interactive Storytelling",
      name: "SAMARANNA",
      desc: "Personalized digital gifts and sensory memory experiences. Crafted with tactile editorial aesthetics, a 3D keepsake visualizer, dynamic video compilation pipeline in sub-3 seconds, and a high-conversion checkout flow.",
      metrics: [
        { val: "+42%", lbl: "Conversion Lift" },
        { val: "< 3.2s", lbl: "Video Synthesis Latency" }
      ],
      tech: "Next.js • WebGL Three.js • Cloud Media Transcoder • Stripe Custom",
      image: "/assets/case-samaranna.jpg"
    },
    {
      id: "speechxyz",
      category: "Intelligent Systems & Voice AI",
      name: "SPEECHXYZ",
      desc: "Sub-50ms conversational voice intelligence and speech interface. Designed for seamless human-computer dialogue with real-time bidirectional audio streaming, ambient noise rejection, and enterprise SDK.",
      metrics: [
        { val: "42ms", lbl: "Average Pipeline Latency" },
        { val: "99.7%", lbl: "Speech Recognition Accuracy" }
      ],
      tech: "Custom Audio Worklet • WebSockets • Neural STT/TTS • Python Core",
      image: "/assets/case-speechxyz.jpg"
    },
    {
      id: "yeqari",
      category: "Brand Identity & Digital Ecosystem",
      name: "YEQARI GLOBAL",
      desc: "Our own master digital ecosystem and design language. Built upon the sculptural 3D kinetic ribbon, precision Swiss typography, responsive mathematical canvas lattices, and multi-tier project delivery workflows.",
      metrics: [
        { val: "60 FPS", lbl: "Canvas Lattice Engine" },
        { val: "100%", lbl: "Proprietary Architecture" }
      ],
      tech: "Modern Web Platform • Custom Canvas • Unified Design System",
      image: "/assets/case-yeqari.jpg"
    }
  ];

  return (
    <div className="py-20 md:py-28">
      <div className="max-w-[1360px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="border-b border-[#121110]/8 pb-16 mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[#848079] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" />
            PORTFOLIO ARCHIVE
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-[#121110] mb-6">
            Selected work.
          </h1>
          <p className="text-xl text-[#57544F] max-w-2xl leading-relaxed">
            A curated selection of platforms, intelligent systems, brand ecosystems, and digital products engineered by YEQARI GLOBAL.
          </p>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-28">
          {projects.map((proj, idx) => (
            <article
              key={proj.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                idx % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? "lg:col-start-6" : ""}`}>
                <div className="rounded-2xl overflow-hidden border border-[#121110]/10 bg-[#F4F2EC] shadow-sm">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className={`lg:col-span-5 flex flex-col gap-4 ${idx % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <span className="font-mono text-xs uppercase tracking-wider text-[#6D28D9] font-semibold">
                  {proj.category}
                </span>
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#121110]">
                  {proj.name}
                </h2>
                <p className="text-base text-[#57544F] leading-relaxed">
                  {proj.desc}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#121110]/10 my-2">
                  {proj.metrics.map((m) => (
                    <div key={m.lbl}>
                      <div className="text-2xl font-extrabold font-mono text-[#121110]">{m.val}</div>
                      <div className="text-xs uppercase text-[#848079] font-semibold">{m.lbl}</div>
                    </div>
                  ))}
                </div>

                <div className="font-mono text-xs text-[#848079]">
                  {proj.tech}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 p-12 md:p-16 rounded-2xl bg-[#F4F2EC] border border-[#121110]/10 text-center flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121110] mb-4">
            Ready to build something iconic?
          </h2>
          <p className="text-base text-[#57544F] max-w-md mb-8">
            Tell us about your project or problem space. We will review your brief within 24 hours.
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
