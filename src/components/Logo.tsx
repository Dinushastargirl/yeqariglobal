"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";

interface LogoProps {
  className?: string;
  size?: number;
  interactive?: boolean;
  activeSection?: string;
}

export default function Logo({ className = "", size = 120, interactive = true, activeSection = "" }: LogoProps) {
  const [clickCount, setClickCount] = useState(0);
  const [easterEggActive, setEasterEggActive] = useState(false);

  const handleClick = () => {
    if (!interactive) return;
    setClickCount((prev) => {
      const next = prev + 1;
      if (next === 3) {
        triggerEasterEgg();
        return 0;
      }
      return next;
    });
  };

  const triggerEasterEgg = () => {
    setEasterEggActive(true);
    // Confetti explosion
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#D4AF37", "#FFDF00", "#FFFFFF"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#D4AF37", "#FFDF00", "#FFFFFF"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    setTimeout(() => {
      setEasterEggActive(false);
    }, 4000);
  };

  // Determine logo accents based on active section
  const getThemeColors = () => {
    switch (activeSection) {
      case "digital":
        return {
          gradientStart: "#3b82f6", // Blue for digital / pixels
          gradientEnd: "#60a5fa",
          glowColor: "rgba(59, 130, 246, 0.5)",
          textStyle: "font-mono tracking-widest",
        };
      case "labs":
        return {
          gradientStart: "#10b981", // Green/circuit feel
          gradientEnd: "#34d399",
          glowColor: "rgba(16, 185, 129, 0.5)",
          textStyle: "font-mono tracking-tighter uppercase",
        };
      case "ventures":
        return {
          gradientStart: "#f59e0b", // Warm growth gold
          gradientEnd: "#fbbf24",
          glowColor: "rgba(245, 158, 11, 0.5)",
          textStyle: "font-sans font-bold tracking-tight",
        };
      case "academy":
        return {
          gradientStart: "#ec4899", // Pink creative learning
          gradientEnd: "#f472b6",
          glowColor: "rgba(236, 72, 153, 0.5)",
          textStyle: "font-serif tracking-normal italic",
        };
      default:
        return {
          gradientStart: "#D4AF37", // Default brand gold
          gradientEnd: "#F3E5AB",
          glowColor: "rgba(212, 175, 55, 0.4)",
          textStyle: "",
        };
    }
  };

  const colors = getThemeColors();

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {/* Easter Egg Overlay */}
      {easterEggActive && (
        <div className="fixed inset-x-0 top-10 flex justify-center z-[100] pointer-events-none">
          <div className="bg-[#0c0c0c]/90 border border-gold/30 px-6 py-3 rounded-full shadow-2xl backdrop-blur-md text-white font-medium tracking-wide animate-bounce text-sm flex items-center gap-2">
            <span className="text-gold">✨</span>
            <span>Every great creation starts with a purpose.</span>
            <span className="text-gold">✨</span>
          </div>
        </div>
      )}

      {/* Stylized Logo SVG */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        onClick={handleClick}
        className={`cursor-pointer transition-all duration-700 ${interactive ? "hover:scale-105 active:scale-95" : ""}`}
        style={{
          filter: `drop-shadow(0 0 8px ${colors.glowColor})`,
        }}
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.gradientStart} />
            <stop offset="100%" stopColor={colors.gradientEnd} />
          </linearGradient>
          <linearGradient id="glowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* Outer subtle glow ring */}
        <circle cx="50" cy="60" r="38" fill="url(#glowGrad)" className="opacity-20 animate-pulse" />

        {/* The Stylized Y Shape */}
        <path
          d="M 16 31 C 28 32 38 46 48 61 C 45 72 40 82 36 90 C 39 80 47 70 51 61 C 60 51 72 38 85 30 C 72 36 57 48 51 61 C 48 61 48 61 48 61 C 38 46 28 32 16 31 Z"
          fill="url(#logoGradient)"
          className="transition-all duration-700"
        />

        {/* Text: Yeqari (along top right) */}
        <text
          x="46"
          y="28"
          fill="#FFFFFF"
          fontSize="11"
          fontWeight="bold"
          fontFamily="'Great Vibes', 'Alex Brush', cursive, sans-serif"
          className="select-none tracking-wider fill-white"
          transform="rotate(-5 50 30)"
        >
          Yeqari
        </text>

        {/* Text: Built for More (along the stem) */}
        <text
          x="42"
          y="80"
          fill={colors.gradientStart}
          fontSize="4"
          fontWeight="semibold"
          fontFamily="'Great Vibes', 'Alex Brush', cursive, sans-serif"
          className="select-none transition-all duration-700"
          transform="rotate(-58 42 80)"
        >
          Built for More.
        </text>
      </svg>
    </div>
  );
}
