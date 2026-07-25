"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Sparkles, Send, RefreshCw } from "lucide-react";
import confetti from "canvas-confetti";

export default function ProjectBuilder() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: "",
    challenge: "",
    name: "",
    email: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const goals = [
    { id: "launch", title: "Launch a business", desc: "Turn a fresh idea into a working product or MVP." },
    { id: "grow", title: "Grow online", desc: "Scale branding, search visibility, and UI experience." },
    { id: "automate", title: "Automate operations", desc: "Integrate workflow bots, AI, and smart systems." },
    { id: "software", title: "Build software", desc: "Construct advanced SaaS, web platforms, and mobile apps." },
  ];

  const challenges = [
    { id: "complexity", title: "Technical complexity", desc: "Struggling with architecture, APIs, or coding." },
    { id: "branding", title: "Design & branding", desc: "Need a premium identity and beautiful user experience." },
    { id: "speed", title: "Speed of execution", desc: "Need to launch quickly without sacrificing code quality." },
    { id: "strategy", title: "Growth & strategy", desc: "Need guidance on market fit, analytics, and scaling." },
  ];

  const handleSelectGoal = (id: string) => {
    setFormData((prev) => ({ ...prev, goal: id }));
    setTimeout(() => setStep(2), 250);
  };

  const handleSelectChallenge = (id: string) => {
    setFormData((prev) => ({ ...prev, challenge: id }));
    setTimeout(() => setStep(3), 250);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getRecommendation = () => {
    const { goal, challenge } = formData;
    if (goal === "launch" || goal === "software") {
      return {
        title: "Yeqari Ventures & Product Development",
        desc: "We recommend our Product Development path. We specialize in building fast, scalable MVPs and full-featured SaaS solutions using high-end React/Next.js frameworks coupled with serverless backends.",
        time: "6 - 12 Weeks",
        service: "MVP & SaaS Engineering",
      };
    }
    if (goal === "automate") {
      return {
        title: "Yeqari Labs Custom Automations",
        desc: "We recommend our Custom Automation & Digital Intelligence suite. We will construct tailored scripts, integrations, and AI LLM workflows to automate your operations.",
        time: "3 - 6 Weeks",
        service: "AI Agents & Automation",
      };
    }
    return {
      title: "Yeqari Digital Brand Experience",
      desc: "We recommend our Digital Presence & Brand Strategy. We will build a premium responsive website, perform high-converting UI/UX design, and define a unique logo asset structure.",
      time: "4 - 8 Weeks",
      service: "Next.js Web Dev & Branding",
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4);

      // Launch confetti
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#FFFFFF", "#1a1a1a"],
      });
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      goal: "",
      challenge: "",
      name: "",
      email: "",
      description: "",
    });
    setStep(1);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full max-w-2xl mx-auto border border-white/5 bg-[#0a0a0a]/80 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Steps indicator */}
      {step < 4 && (
        <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">
            Interactive Project Builder
          </span>
          <div className="flex items-center gap-1.5">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-1 rounded-full transition-all duration-300 ${
                  s === step ? "w-8 bg-[#D4AF37]" : s < step ? "w-4 bg-white" : "w-2 bg-zinc-800"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      <AnimatePresence mode="wait" custom={step}>
        {step === 1 && (
          <motion.div
            key="step1"
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h2 className="text-xl md:text-2xl font-bold tracking-wide text-white">
                Step 1: Choose Your Ultimate Goal
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm mt-1">
                Select the option that matches your current business mission.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {goals.map((g) => (
                <button
                  key={g.id}
                  onClick={() => handleSelectGoal(g.id)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col gap-2 ${
                    formData.goal === g.id
                      ? "border-[#D4AF37] bg-[#D4AF37]/5 shadow-[0_0_15px_rgba(212,175,55,0.05)]"
                      : "border-white/5 bg-[#121212]/40 hover:border-white/10 hover:bg-[#121212]/60"
                  }`}
                >
                  <span
                    className={`text-sm font-bold tracking-wide transition-colors ${
                      formData.goal === g.id ? "text-[#D4AF37]" : "text-white"
                    }`}
                  >
                    {g.title}
                  </span>
                  <span className="text-zinc-500 text-xs leading-relaxed">{g.desc}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl md:text-2xl font-bold tracking-wide text-white">
                  Step 2: Identify Your Biggest Hurdle
                </h2>
                <p className="text-zinc-400 text-xs md:text-sm mt-1">
                  What roadblock is stopping your project from execution?
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {challenges.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleSelectChallenge(c.id)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col gap-2 ${
                    formData.challenge === c.id
                      ? "border-[#D4AF37] bg-[#D4AF37]/5 shadow-[0_0_15px_rgba(212,175,55,0.05)]"
                      : "border-white/5 bg-[#121212]/40 hover:border-white/10 hover:bg-[#121212]/60"
                  }`}
                >
                  <span
                    className={`text-sm font-bold tracking-wide transition-colors ${
                      formData.challenge === c.id ? "text-[#D4AF37]" : "text-white"
                    }`}
                  >
                    {c.title}
                  </span>
                  <span className="text-zinc-500 text-xs leading-relaxed">{c.desc}</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors self-start mt-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Step 1
            </button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h2 className="text-xl md:text-2xl font-bold tracking-wide text-white">
                Step 3: Tell Us About Your Vision
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm mt-1">
                Enter your details to generate your tailored development blueprint.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleTextChange}
                    className="w-full bg-[#121212] border border-white/5 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleTextChange}
                    className="w-full bg-[#121212] border border-white/5 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors"
                    placeholder="name@company.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">
                  Project Brief (Optional)
                </label>
                <textarea
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleTextChange}
                  className="w-full bg-[#121212] border border-white/5 focus:border-[#D4AF37] rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none transition-colors resize-none"
                  placeholder="Describe your idea or what you are trying to build..."
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to Step 2
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-semibold text-xs uppercase tracking-widest transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Analysing Blueprint...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Blueprint</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-6 text-center py-6"
          >
            <div className="mx-auto w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20 mb-2">
              <Check className="w-8 h-8 text-[#D4AF37]" />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide text-white">
                Blueprint Formed Successfully!
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm mt-2 max-w-md mx-auto">
                Thank you, <span className="text-[#D4AF37] font-semibold">{formData.name}</span>. Yeqari has mapped out a solution architecture for you. Our team will review this briefing and contact you within 24 hours.
              </p>
            </div>

            {/* Recommendation block */}
            <div className="border border-white/5 bg-[#121212]/50 p-6 rounded-2xl text-left max-w-lg mx-auto flex flex-col gap-4 mt-2">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Recommended Path
                </span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                  Est. Delivery: {getRecommendation().time}
                </span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  {getRecommendation().title}
                </h4>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  {getRecommendation().desc}
                </p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] text-zinc-500 uppercase tracking-widest">
                <span>Core Area: {getRecommendation().service}</span>
                <span className="text-[#D4AF37]">Yeqari as the Bridge</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors self-center mt-4 border border-white/5 hover:border-white/10 px-4 py-2 rounded-full"
            >
              <RefreshCw className="w-3 h-3" /> Rebuild Solution
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
