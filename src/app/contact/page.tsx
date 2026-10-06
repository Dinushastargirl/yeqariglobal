"use client";

import React, { useState } from "react";
import type { Metadata } from "next";

export default function ContactPage() {
  const [selectedDivision, setSelectedDivision] = useState("Yeqari Digital");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-20 md:py-28">
      <div className="max-w-[1360px] mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="border-b border-[#121110]/8 pb-16 mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[#848079] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" />
            DISPATCH & ENGAGEMENT
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-[#121110] mb-6">
            Let&apos;s talk.
          </h1>
          <p className="text-xl text-[#57544F] max-w-2xl leading-relaxed">
            Have an idea, a problem worth solving, or ready to scale through Yeqari Digital, Ventures, or Academy? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Contact Information & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#848079] block mb-2 font-semibold">
                PRIMARY EMAIL
              </span>
              <a
                href="mailto:yeqariglobal.info@gmail.com"
                className="text-2xl font-extrabold text-[#121110] hover:text-[#6D28D9] transition-colors"
              >
                yeqariglobal.info@gmail.com
              </a>
              <p className="text-xs text-[#848079] mt-1 font-mono">
                Response SLA: Within 24 business hours
              </p>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#848079] block mb-2 font-semibold">
                DIRECT TELEPHONE / WHATSAPP
              </span>
              <a
                href="tel:0722346167"
                className="text-2xl font-extrabold text-[#121110] hover:text-[#6D28D9] transition-colors"
              >
                0722346167
              </a>
              <p className="text-xs text-[#848079] mt-1 font-mono">
                Direct Client Support & Partnership Inquiries
              </p>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#848079] block mb-3 font-semibold">
                OFFICIAL SOCIALS (@YEQARIGLOBAL)
              </span>
              <div className="flex flex-col gap-2.5">
                <a
                  href="https://instagram.com/yeqariglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#F4F2EC] border border-[#121110]/8 hover:border-[#6D28D9] text-sm font-semibold text-[#121110] transition-colors"
                >
                  <span>Instagram • @yeqariglobal</span>
                  <span className="text-[#6D28D9]">↗</span>
                </a>
                <a
                  href="https://facebook.com/yeqariglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#F4F2EC] border border-[#121110]/8 hover:border-[#6D28D9] text-sm font-semibold text-[#121110] transition-colors"
                >
                  <span>Facebook • @yeqariglobal</span>
                  <span className="text-[#6D28D9]">↗</span>
                </a>
                <a
                  href="https://tiktok.com/@yeqariglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#F4F2EC] border border-[#121110]/8 hover:border-[#6D28D9] text-sm font-semibold text-[#121110] transition-colors"
                >
                  <span>TikTok • @yeqariglobal</span>
                  <span className="text-[#6D28D9]">↗</span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F4F2EC] border border-[#121110]/8 font-mono text-xs text-[#57544F]">
              <div className="font-bold text-[#121110] mb-1">GLOBAL OPERATIONS</div>
              <div>Digital First • Supporting international clients across all timezones.</div>
            </div>
          </div>

          {/* Right: Interactive Project Inquiry Form */}
          <div className="lg:col-span-7 bg-[#F4F2EC] p-8 sm:p-12 rounded-3xl border border-[#121110]/10 shadow-sm">
            {submitted ? (
              <div className="p-8 text-center flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#6D28D9] text-white flex items-center justify-center text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-3xl font-extrabold text-[#121110]">
                  Brief received.
                </h3>
                <p className="text-base text-[#57544F] max-w-md leading-relaxed">
                  Thank you for reaching out to YEQARI GLOBAL. Our leadership will review your submission and respond via email or phone within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-[#6D28D9] hover:underline"
                >
                  Submit another brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="font-mono text-xs uppercase tracking-wider text-[#848079] block mb-3 font-semibold">
                    WHICH DIVISION ARE YOU INTERESTED IN?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Yeqari Digital", "Yeqari Ventures", "Yeqari Academy", "Full Journey / General"].map((div) => (
                      <button
                        type="button"
                        key={div}
                        onClick={() => setSelectedDivision(div)}
                        className={`px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all ${
                          selectedDivision === div
                            ? "bg-[#121110] text-white"
                            : "bg-white border border-[#121110]/15 text-[#57544F] hover:border-[#121110]"
                        }`}
                      >
                        {div}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-[#848079] block mb-2 font-semibold">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Eleanor Vance"
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#121110]/15 text-sm text-[#121110] focus:outline-none focus:border-[#6D28D9] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-[#848079] block mb-2 font-semibold">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="eleanor@company.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#121110]/15 text-sm text-[#121110] focus:outline-none focus:border-[#6D28D9] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="font-mono text-xs uppercase tracking-wider text-[#848079] block mb-2 font-semibold">
                    PHONE / WHATSAPP NUMBER (OPTIONAL)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+94 72 234 6167"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#121110]/15 text-sm text-[#121110] focus:outline-none focus:border-[#6D28D9] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-[#848079] block mb-2 font-semibold">
                    PROJECT OVERVIEW OR INQUIRY BRIEF
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell us about the project, the stage you are at, and your goals..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#121110]/15 text-sm text-[#121110] focus:outline-none focus:border-[#6D28D9] transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#121110] text-[#FAF9F6] text-sm font-semibold hover:bg-[#6D28D9] transition-all transform hover:-translate-y-0.5"
                >
                  Transmit Brief <span>↗</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
