"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [step, setStep] = useState(0); // 0: golden dot, 1: drawing logo, 2: text 1, 3: text 2, 4: exit

  useEffect(() => {
    // Check session storage to see if user has already loaded in this session
    const hasLoaded = sessionStorage.getItem("yeqari_loaded");
    if (hasLoaded === "true") {
      setIsVisible(false);
      return;
    }

    // Step-by-step loading animation timeline
    const timers = [
      setTimeout(() => setStep(1), 1000),  // Show golden dot, then start drawing logo
      setTimeout(() => setStep(2), 2500),  // Show "Every idea starts with a purpose."
      setTimeout(() => setStep(3), 4200),  // Show "Built for More."
      setTimeout(() => {
        setStep(4);
        sessionStorage.setItem("yeqari_loaded", "true");
      }, 5800),
      setTimeout(() => setIsVisible(false), 6800), // Hide component completely
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {step < 4 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          className="fixed inset-0 bg-[#050505] z-[9999] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle Ambient Background Light */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />

          <div className="relative flex flex-col items-center justify-center gap-12 w-full max-w-lg px-4">
            {/* The Logo and Golden Particle Container */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Golden Particle Dot */}
              {step === 0 && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.8] }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-3 h-3 bg-[#D4AF37] rounded-full shadow-[0_0_15px_#D4AF37]"
                />
              )}

              {/* Logo Drawing Stage */}
              {step >= 1 && (
                <motion.svg
                  width="120"
                  height="120"
                  viewBox="0 0 100 100"
                  className="w-full h-full filter drop-shadow-[0_0_12px_rgba(212,175,55,0.3)]"
                >
                  <defs>
                    <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#F3E5AB" />
                    </linearGradient>
                  </defs>

                  {/* Draw Logo Stem & Wings */}
                  <motion.path
                    d="M 16 31 C 28 32 38 46 48 61 C 45 72 40 82 36 90 C 39 80 47 70 51 61 C 60 51 72 38 85 30 C 72 36 57 48 51 61 C 48 61 48 61 48 61 C 38 46 28 32 16 31 Z"
                    fill="none"
                    stroke="url(#logoGold)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />

                  {/* Fill Logo Background slowly after drawing path */}
                  <motion.path
                    d="M 16 31 C 28 32 38 46 48 61 C 45 72 40 82 36 90 C 39 80 47 70 51 61 C 60 51 72 38 85 30 C 72 36 57 48 51 61 C 48 61 48 61 48 61 C 38 46 28 32 16 31 Z"
                    fill="url(#logoGold)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0, duration: 1.2 }}
                  />

                  {/* "Yeqari" Text Drawing */}
                  <motion.text
                    x="46"
                    y="28"
                    fill="#FFFFFF"
                    fontSize="11"
                    fontWeight="bold"
                    fontFamily="'Great Vibes', 'Alex Brush', cursive, sans-serif"
                    transform="rotate(-5 50 30)"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                  >
                    Yeqari
                  </motion.text>

                  {/* "Built for More" Text Drawing */}
                  <motion.text
                    x="42"
                    y="80"
                    fill="#D4AF37"
                    fontSize="4"
                    fontWeight="semibold"
                    fontFamily="'Great Vibes', 'Alex Brush', cursive, sans-serif"
                    transform="rotate(-58 42 80)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                  >
                    Built for More.
                  </motion.text>
                </motion.svg>
              )}
            </div>

            {/* Cinematic Statements */}
            <div className="h-16 flex flex-col items-center justify-center text-center">
              <AnimatePresence mode="wait">
                {step === 2 && (
                  <motion.p
                    key="purpose"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.6 }}
                    className="text-zinc-400 text-base md:text-lg tracking-[0.15em] uppercase font-light"
                  >
                    Every idea starts with a purpose.
                  </motion.p>
                )}

                {step === 3 && (
                  <motion.h2
                    key="built-for-more"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-white text-3xl md:text-4xl tracking-[0.25em] font-medium uppercase font-sans"
                  >
                    Built for <span className="text-[#D4AF37] font-semibold">More.</span>
                  </motion.h2>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
