import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — YEQARI GLOBAL",
  description: "Built for More. Learn about YEQARI GLOBAL, our leadership ethos, and our commitment to turning possibility into reality.",
};

export default function AboutPage() {
  const principles = [
    {
      num: "01",
      title: "THINK BEYOND THE BRIEF",
      desc: "We do not just execute instructions. We interrogate assumptions, uncover latent market opportunities, and help shape the better product."
    },
    {
      num: "02",
      title: "BUILD WITH PURPOSE",
      desc: "Technology should solve something meaningful. We avoid complexity for its own sake and focus exclusively on what moves the business forward."
    },
    {
      num: "03",
      title: "DESIGN FOR PEOPLE",
      desc: "Beautiful is never enough. The experience has to feel effortless, fast, and respectful of the human on the other side of the glass."
    },
    {
      num: "04",
      title: "STAY CLOSE TO THE OUTCOME",
      desc: "Launch is not the finish line. It is the beginning of empirical learning. We stay engaged to measure, refine, and accelerate."
    }
  ];

  return (
    <div className="py-20 md:py-28">
      <div className="max-w-[1360px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="border-b border-[#121110]/8 pb-16 mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[#848079] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" />
            ORGANIZATIONAL ETHOS
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-[#121110] mb-6">
            Not another agency.
          </h1>
          <p className="text-xl sm:text-2xl text-[#57544F] max-w-3xl leading-relaxed font-normal">
            A partner for what you&apos;re building. YEQARI GLOBAL is a technology and digital growth company created to help ideas, platforms, and teams move from possibility to reality.
          </p>
        </div>

        {/* Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 border-b border-[#121110]/8">
          <div className="lg:col-span-5 font-mono text-xs font-semibold uppercase tracking-wider text-[#848079]">
            THE YEQARI PREMISE
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6 text-lg text-[#57544F] leading-relaxed">
            <p>
              The world does not lack ideas. It lacks the cohesive velocity to execute them properly. Most initiatives get fragmented across a web design boutique, a software contractor, an SEO freelancer, and an ad agency—leading to diluted vision, ballooning budgets, and missed market windows.
            </p>
            <p>
              We established <strong>YEQARI GLOBAL</strong> to provide a singular, disciplined bridge. Through our three operating arms—<strong>Yeqari Digital</strong>, <strong>Yeqari Ventures</strong>, and <strong>Yeqari Academy</strong>—we provide institutional-grade design, software engineering, startup incubation, and tech education under one roof.
            </p>
            <p className="text-[#121110] font-bold">
              We operate with rigorous international standards, modern Swiss typography, and clean architectures built for longevity.
            </p>
          </div>
        </div>

        {/* 4 Foundational Principles */}
        <div className="py-24 border-b border-[#121110]/8">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-wider text-[#6D28D9] font-bold block mb-2">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#121110]">
              How we think and work.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((p) => (
              <div key={p.num} className="pt-6 border-t-2 border-[#121110] flex flex-col gap-3">
                <span className="font-mono text-xs font-bold text-[#6D28D9]">{p.num}</span>
                <h3 className="text-lg font-extrabold text-[#121110] tracking-tight">{p.title}</h3>
                <p className="text-sm text-[#57544F] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Strip */}
        <div className="mt-28 p-12 md:p-16 rounded-2xl bg-[#F4F2EC] border border-[#121110]/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-[#121110] mb-2">
              Let&apos;s build what comes next.
            </h2>
            <p className="text-base text-[#57544F]">
              Direct dispatch: <a href="mailto:yeqariglobal.info@gmail.com" className="text-[#6D28D9] font-semibold underline">yeqariglobal.info@gmail.com</a> • <a href="tel:0722346167" className="text-[#121110] font-semibold">0722346167</a>
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-[#121110] text-[#FAF9F6] text-sm font-semibold hover:bg-[#6D28D9] transition-colors shrink-0"
          >
            Start a conversation ↗
          </Link>
        </div>

      </div>
    </div>
  );
}
