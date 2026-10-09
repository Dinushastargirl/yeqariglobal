"use client";

import React, { useState, useRef, useEffect } from "react";
import KineticHeroCube from "./KineticHeroCube";

interface HeroReelProps {
  className?: string;
}

export default function HeroReel({ className = "" }: HeroReelProps) {
  const [activeTab, setActiveTab] = useState<"reel" | "3d">("reel");
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Auto-play on mount when reel is active
  useEffect(() => {
    if (activeTab === "reel" && videoRef.current) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay policy fallback: ensure muted
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().catch(() => setIsPlaying(false));
          }
        });
    }
  }, [activeTab]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const cur = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setCurrentTime(cur);
    setProgress((cur / dur) * 100);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration || 0);
    setIsLoaded(true);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    videoRef.current.currentTime = ratio * duration;
    setProgress(ratio * 100);
  };

  const toggleFullscreen = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return "00:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className={`relative w-full max-w-2xl mx-auto ${className}`}>
      {/* Dynamic Ambient Glow Behind Card */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[#7C3AED]/40 via-[#D946EF]/30 to-[#7C3AED]/40 rounded-[2.5rem] blur-2xl opacity-60 transition duration-1000 -z-10 animate-pulse pointer-events-none" />

      {/* Main Bezel Card */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group bg-[#0D0422] rounded-[2rem] border border-white/10 shadow-2xl shadow-purple-950/40 overflow-hidden flex flex-col backdrop-blur-xl"
      >
        {/* Top Control Bar with Tab Switcher */}
        <div className="relative z-20 px-4 sm:px-6 py-3.5 bg-black/40 backdrop-blur-md border-b border-white/10 flex items-center justify-between gap-3">
          {/* Status & Identity Badge */}
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D946EF]"></span>
            </span>
            <span className="font-['Outfit'] font-bold text-xs sm:text-sm tracking-wide text-white truncate">
              YEQARI <span className="text-[#C084FC]">HERO REEL</span>
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-purple-200 border border-white/10">
              4K STUDIO
            </span>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center bg-white/5 p-1 rounded-full border border-white/10 shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab("reel")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-['Inter'] transition-all ${
                activeTab === "reel"
                  ? "bg-gradient-to-r from-[#7C3AED] to-[#D946EF] text-white shadow-md shadow-purple-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Watch Official Hero Reel"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>Hero Reel</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("3d")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-['Inter'] transition-all ${
                activeTab === "3d"
                  ? "bg-gradient-to-r from-[#7C3AED] to-[#D946EF] text-white shadow-md shadow-purple-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Interactive 3D Matrix"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="3" />
                <path d="M7 2v20M17 2v20M2 7h20M2 17h20" />
              </svg>
              <span>3D Cube</span>
            </button>
          </div>
        </div>

        {/* Media Frame */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-black flex items-center justify-center overflow-hidden">
          {activeTab === "reel" ? (
            <>
              {/* HTML5 Video */}
              <video
                ref={videoRef}
                onClick={togglePlay}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover cursor-pointer"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                preload="auto"
                poster="/assets/case-yeqari.jpg"
              >
                <source src="/assets/intro video/yeqari global hero reel.mp4" type="video/mp4" />
                <source src="/assets/hero-reel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Click to Play / Pause Big Center Overlay Button */}
              {(!isPlaying || isHovered) && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer pointer-events-auto bg-black/20 backdrop-blur-[2px] transition-all duration-300"
                >
                  <button
                    type="button"
                    aria-label={isPlaying ? "Pause Video" : "Play Video"}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 hover:bg-[#7C3AED] hover:scale-110 active:scale-95 text-white flex items-center justify-center backdrop-blur-xl border border-white/30 shadow-2xl transition-all duration-200 group/btn"
                  >
                    {isPlaying ? (
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    ) : (
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              )}

              {/* Floating Quick Action Pills */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                {/* Audio Mute/Unmute Toggle Button */}
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-xl border transition-all duration-200 ${
                    isMuted
                      ? "bg-black/60 text-slate-300 border-white/20 hover:bg-black/80 hover:text-white"
                      : "bg-[#7C3AED]/90 text-white border-purple-400/60 shadow-lg shadow-purple-500/30 animate-pulse"
                  }`}
                >
                  {isMuted ? (
                    <>
                      <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                      <span className="hidden xs:inline">Sound Off</span>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-0.5 h-3">
                        <span className="w-0.5 h-3 bg-white animate-[bounce_0.8s_infinite]"></span>
                        <span className="w-0.5 h-2 bg-white animate-[bounce_0.6s_infinite_0.2s]"></span>
                        <span className="w-0.5 h-3.5 bg-white animate-[bounce_0.7s_infinite_0.4s]"></span>
                      </div>
                      <span className="hidden xs:inline">Sound On</span>
                    </>
                  )}
                </button>

                {/* Fullscreen Expand Button */}
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  aria-label="Toggle Fullscreen"
                  className="p-2 rounded-full bg-black/60 hover:bg-[#7C3AED] text-slate-300 hover:text-white backdrop-blur-xl border border-white/20 transition-all duration-200"
                  title="Expand to Fullscreen"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0 0l-5-5m5 11v4m0 0h-4m4 0l-5-5M4 16v4m0 0h4m-4 0l5-5" />
                  </svg>
                </button>
              </div>

              {/* Bottom Scrubber & Metadata Bar */}
              <div
                className={`absolute bottom-0 inset-x-0 z-20 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${
                  isHovered || !isPlaying ? "opacity-100" : "opacity-0 sm:opacity-75"
                }`}
              >
                {/* Timeline Progress Bar */}
                <div
                  onClick={handleSeek}
                  className="w-full h-1.5 bg-white/20 hover:h-2.5 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 mb-2.5"
                >
                  <div
                    className="h-full bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#D946EF] rounded-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">
                      {formatTime(currentTime)}
                    </span>
                    <span className="text-slate-500">/</span>
                    <span className="text-slate-400">
                      {formatTime(duration)}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-purple-300 font-semibold tracking-wider">
                      YEQARI DIGITAL INNOVATION
                    </span>
                    <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#D946EF]"></span>
                    <span className="hidden sm:inline-block text-slate-400">
                      REEL 2026
                    </span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* 3D Kinetic Rubik's Cube View */
            <div className="w-full h-full relative">
              <KineticHeroCube />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
