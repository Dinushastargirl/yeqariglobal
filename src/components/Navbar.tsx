"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Close mega dropdown on click outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setIsMegaOpen(false);
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Ventures", href: "/ventures" },
    { name: "Contact", href: "/contact" },
  ];

  const megaMenuData = [
    {
      title: "Yeqari Digital",
      titleColor: "text-zinc-300",
      bulletColor: "text-zinc-500",
      items: [
        "Website Development",
        "Branding & Identity",
        "Social Media Management",
        "Content Strategy",
        "Marketing Strategy",
      ],
    },
    {
      title: "Yeqari Ventures",
      titleColor: "text-[#10b981]",
      bulletColor: "text-[#10b981]",
      items: [
        "Startup Launch Package",
        "Business Proposal Development",
        "MVP Planning",
        "Digital Presence Setup",
        "Startup Growth Strategy",
      ],
    },
    {
      title: "Yeqari Academy",
      titleColor: "text-[#a855f7]",
      bulletColor: "text-[#a855f7]",
      items: [
        "Corporate Training",
        "Webinars",
        "Student Training",
        "AI Awareness Programs",
        "AI Cert Awareness Program",
      ],
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMegaOpen
          ? "bg-[#050505]/85 border-b border-white/5 backdrop-blur-md py-3 shadow-lg shadow-black/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <Logo size={42} interactive={false} />
          <span className="text-xl font-bold tracking-[0.12em] text-white group-hover:text-gold transition-colors font-sans">
            YEQARI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 relative">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setIsMegaOpen(true)}
                  onMouseLeave={() => setIsMegaOpen(false)}
                >
                  <button
                    onClick={() => setIsMegaOpen(!isMegaOpen)}
                    className={`flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold transition-colors py-2 ${
                      pathname.startsWith("/services") ? "text-[#D4AF37]" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isMegaOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Mega Dropdown Panel */}
                  {isMegaOpen && (
                    <div
                      ref={dropdownRef}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[750px] z-50 pointer-events-auto animate-slide-down-in"
                    >
                      <div className="glass-gold rounded-3xl p-8 grid grid-cols-3 gap-8 shadow-2xl">
                        {megaMenuData.map((col) => (
                          <div key={col.title} className="flex flex-col gap-5">
                            {/* Column Header */}
                            <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                              <span className={`text-xs font-extrabold uppercase tracking-widest ${col.titleColor}`}>
                                {col.title}
                              </span>
                            </div>

                            {/* Column List */}
                            <ul className="flex flex-col gap-3.5">
                              {col.items.map((item) => (
                                <li key={item}>
                                  <Link
                                    href={`/services#${col.title.toLowerCase().replace("yeqari ", "")}`}
                                    className="group/item flex items-start gap-2.5 text-[11px] text-zinc-400 hover:text-white font-medium transition-colors"
                                  >
                                    <span className={`text-xs font-semibold ${col.bulletColor} group-hover/item:scale-110 transition-transform`}>
                                      ✦
                                    </span>
                                    <span className="leading-tight tracking-wide">{item}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-xs uppercase tracking-widest font-semibold transition-colors ${
                  isActive ? "text-[#D4AF37]" : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D4AF37] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button (Start a Project) */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="group relative flex items-center gap-1 overflow-hidden rounded-full border border-[#D4AF37]/30 bg-transparent px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37] transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black shadow-[0_0_15px_rgba(212,175,55,0.05)]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-zinc-400 hover:text-white transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-[#050505]/98 backdrop-blur-xl border-t border-white/5 z-40 flex flex-col justify-between p-8 overflow-y-auto animate-in fade-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-5 text-center">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="flex flex-col border-b border-white/5 py-1">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between py-2 text-lg uppercase tracking-[0.2em] font-light text-zinc-400"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>

                    {mobileServicesOpen && (
                      <div className="flex flex-col gap-6 text-left py-4 pl-4 animate-in fade-in slide-in-from-top-1 duration-200">
                        {megaMenuData.map((col) => (
                          <div key={col.title} className="flex flex-col gap-3">
                            <span className={`text-[10px] uppercase font-bold tracking-widest ${col.titleColor}`}>
                              {col.title}
                            </span>
                            <ul className="flex flex-col gap-2 pl-2 border-l border-white/5">
                              {col.items.map((item) => (
                                <li key={item}>
                                  <Link
                                    href={`/services#${col.title.toLowerCase().replace("yeqari ", "")}`}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xs text-zinc-500 hover:text-white transition-colors"
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg uppercase tracking-[0.2em] font-light py-2 border-b border-white/5 ${
                    isActive ? "text-[#D4AF37] font-medium" : "text-zinc-400"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-4 mt-8">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 rounded-full border border-[#D4AF37] bg-[#D4AF37] py-3.5 text-sm font-bold uppercase tracking-widest text-black"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <div className="text-center text-zinc-600 text-[10px] tracking-widest mt-4">
              YEQARI © 2026. BUILT FOR MORE.
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
