import React from "react";
import ProjectBuilder from "@/components/ProjectBuilder";
import { Mail, Shield, MessageSquare, Compass, Sparkles } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative w-full py-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col gap-16">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="max-w-3xl flex flex-col gap-6 text-center md:text-left mx-auto md:mx-0">
        <div className="flex items-center gap-2 border border-gold/20 bg-gold/5 px-4 py-1.5 rounded-full self-center md:self-start">
          <MessageSquare className="w-3.5 h-3.5 text-gold" />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold">
            Get In Touch
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
          Let&apos;s Build Something <br />
          <span className="text-gradient-gold">Meaningful Together</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed">
          Skip generic contact forms. Use our step-by-step project builder below to specify your goals, outline your bottlenecks, and receive a tailored structural recommendation immediately.
        </p>
      </div>

      {/* Project Builder Section */}
      <div className="w-full py-6">
        <ProjectBuilder />
      </div>

      {/* Secondary Contacts and Ethics Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto w-full border-t border-white/5 pt-16">
        {/* Direct Email */}
        <div className="flex flex-col gap-3 p-6 border border-white/5 bg-[#0a0a0a]/50 rounded-2xl">
          <div className="w-9 h-9 rounded-lg bg-gold/5 border border-gold/20 flex items-center justify-center text-gold">
            <Mail className="w-4 h-4" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-bold text-white tracking-wide">Direct Inquiry</h4>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
              Standard Response: &lt; 24h
            </span>
            <a href="mailto:yekari.info@gmail.com" className="text-xs text-[#D4AF37] hover:underline mt-2">
              yekari.info@gmail.com
            </a>
          </div>
        </div>

        {/* Biblical Stewardship */}
        <div className="flex flex-col gap-3 p-6 border border-white/5 bg-[#0a0a0a]/50 rounded-2xl">
          <div className="w-9 h-9 rounded-lg bg-gold/5 border border-gold/20 flex items-center justify-center text-gold">
            <Shield className="w-4 h-4" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-bold text-white tracking-wide">Stewardship Guarantee</h4>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
              Ethics & Integrity
            </span>
            <p className="text-[11px] text-zinc-500 leading-relaxed mt-2">
              We operate with absolute transparency: no hidden costs, clear milestones, and complete data safety.
            </p>
          </div>
        </div>

        {/* Partnership / Ventures */}
        <div className="flex flex-col gap-3 p-6 border border-white/5 bg-[#0a0a0a]/50 rounded-2xl">
          <div className="w-9 h-9 rounded-lg bg-gold/5 border border-gold/20 flex items-center justify-center text-gold">
            <Compass className="w-4 h-4" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-bold text-white tracking-wide">Startups & Ventures</h4>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
              Co-creation
            </span>
            <p className="text-[11px] text-zinc-500 leading-relaxed mt-2">
              Have a disruptive SaaS model? We occasionally partner with early stage founders to build MVPs as co-creators.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
