"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface Planet {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  color: string;
  glow: string;
  radius: number; // Orbit radius
  size: number; // Sphere size
  speed: number;
  angle: number;
  yScale: number; // 3D tilt y-scale factor
  x?: number;
  y?: number;
  hovered?: boolean;
}

export default function EcosystemCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();
  const [hoveredPlanet, setHoveredPlanet] = useState<Planet | null>(null);

  // Initialize the 4 planets with orbits, colors, speeds and angles
  const planetsRef = useRef<Planet[]>([
    {
      id: "digital",
      name: "Yeqari Digital",
      tagline: "Creating Experiences",
      desc: "Websites, UI/UX design, branding, and digital growth services to elevate your brand presence.",
      color: "#3b82f6", // Blue
      glow: "rgba(59, 130, 246, 0.6)",
      radius: 120,
      size: 16,
      speed: 0.007,
      angle: 0,
      yScale: 0.35,
    },
    {
      id: "labs",
      name: "Yeqari Labs",
      tagline: "Engineering the Future",
      desc: "Deep tech, advanced integrations, workflows, customized AI agents, and workflow automations.",
      color: "#10b981", // Green
      glow: "rgba(16, 185, 129, 0.6)",
      radius: 180,
      size: 20,
      speed: -0.005,
      angle: Math.PI / 2,
      yScale: 0.35,
    },
    {
      id: "ventures",
      name: "Yeqari Ventures",
      tagline: "Building Ideas",
      desc: "Transforming napkin drafts into scalable businesses with MVP support, SaaS design, and growth advice.",
      color: "#f59e0b", // Amber
      glow: "rgba(245, 158, 11, 0.6)",
      radius: 240,
      size: 22,
      speed: 0.003,
      angle: Math.PI,
      yScale: 0.35,
    },
    {
      id: "academy",
      name: "Yeqari Academy",
      tagline: "Growing Creators",
      desc: "Workshops, resources, and collaborative code-along modules to train the developers of tomorrow.",
      color: "#ec4899", // Pink
      glow: "rgba(236, 72, 153, 0.6)",
      radius: 300,
      size: 18,
      speed: -0.002,
      angle: Math.PI * 1.5,
      yScale: 0.35,
    },
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 500);

    const mouse = { x: 0, y: 0 };

    const handleResize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || 800;
      height = canvas.height = 500;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      // Check hover
      let foundHover: Planet | null = null;
      planetsRef.current.forEach((planet) => {
        if (planet.x !== undefined && planet.y !== undefined) {
          const dist = Math.hypot(mouse.x - planet.x, mouse.y - planet.y);
          if (dist < planet.size + 10) {
            planet.hovered = true;
            foundHover = planet;
          } else {
            planet.hovered = false;
          }
        }
      });

      // Update cursor
      canvas.style.cursor = foundHover ? "pointer" : "default";
      setHoveredPlanet(foundHover);
    };

    const handleClick = () => {
      const active = planetsRef.current.find((p) => p.hovered);
      if (active) {
        // Navigate or scroll to services section of the ecosystem page
        router.push(`/services#${active.id}`);
      }
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // 1. Draw Orbit Trails (under the planets)
      ctx.lineWidth = 1;
      planetsRef.current.forEach((planet) => {
        ctx.strokeStyle = "rgba(212, 175, 55, 0.1)";
        ctx.beginPath();
        // Drawing an ellipse represents the tilted 3D orbit
        ctx.ellipse(
          centerX,
          centerY,
          planet.radius,
          planet.radius * planet.yScale,
          0,
          0,
          Math.PI * 2
        );
        ctx.stroke();

        // Subtle glowing connection line back to center on hover
        if (planet.hovered && planet.x !== undefined && planet.y !== undefined) {
          ctx.strokeStyle = `rgba(${
            planet.id === "digital"
              ? "59, 130, 246"
              : planet.id === "labs"
              ? "16, 185, 129"
              : planet.id === "ventures"
              ? "245, 158, 11"
              : "236, 72, 153"
          }, 0.25)`;
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(planet.x, planet.y);
          ctx.stroke();
        }
      });

      // 2. Draw Center: Yeqari Sphere
      ctx.save();
      const centerGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        35
      );
      centerGrad.addColorStop(0, "#FFF7C2");
      centerGrad.addColorStop(0.3, "#D4AF37");
      centerGrad.addColorStop(1, "rgba(5, 5, 5, 0.9)");

      ctx.fillStyle = centerGrad;
      ctx.shadowBlur = 30;
      ctx.shadowColor = "#D4AF37";
      ctx.beginPath();
      ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
      ctx.fill();

      // Golden core ring overlay
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
      ctx.stroke();

      // Center text Y
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 16px 'Outfit', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Y", centerX, centerY);
      ctx.restore();

      // 3. Update & Draw Orbiting Planets
      planetsRef.current.forEach((planet) => {
        // Update angle
        planet.angle += planet.hovered ? planet.speed * 0.2 : planet.speed;

        // Calculate coordinates (with 3D perspective squish)
        planet.x = centerX + Math.cos(planet.angle) * planet.radius;
        planet.y = centerY + Math.sin(planet.angle) * planet.radius * planet.yScale;

        // Visual size scaling depending on "z-depth" (y coordinate relative to centerY)
        // Planets "in front" (y > centerY) should look larger, "behind" smaller.
        const zFactor = (planet.y - centerY) / (planet.radius * planet.yScale); // Range [-1, 1]
        const sizeOffset = zFactor * (planet.size * 0.25);
        const actualSize = planet.size + sizeOffset;

        // Calculate styling
        ctx.save();
        const grad = ctx.createRadialGradient(
          planet.x - actualSize * 0.3,
          planet.y - actualSize * 0.3,
          actualSize * 0.1,
          planet.x,
          planet.y,
          actualSize
        );
        grad.addColorStop(0, "#FFFFFF");
        grad.addColorStop(0.2, planet.color);
        grad.addColorStop(1, "#050505");

        ctx.fillStyle = grad;
        ctx.shadowBlur = planet.hovered ? 25 : 12;
        ctx.shadowColor = planet.color;

        ctx.beginPath();
        ctx.arc(planet.x, planet.y, actualSize, 0, Math.PI * 2);
        ctx.fill();

        // Thin glow rim
        ctx.strokeStyle = planet.hovered ? "#FFFFFF" : "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Planet text label (if close to viewer or hovered)
        if (planet.hovered || zFactor > 0.2) {
          ctx.fillStyle = "#FFFFFF";
          ctx.font = "500 10px 'Outfit', sans-serif";
          ctx.fillText(planet.name, planet.x, planet.y + actualSize + 15);
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [router]);

  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
      {/* Ecosystem Interactive Screen */}
      <div className="relative border border-white/5 bg-black/40 rounded-3xl w-full p-4 md:p-8 backdrop-blur-md overflow-hidden flex items-center justify-center min-h-[500px]">
        {/* Subtle grid lines background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <canvas ref={canvasRef} className="max-w-full block z-10" />

        {/* Informational Planet Overlay */}
        <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 bg-[#090909]/90 border border-white/5 px-6 py-5 rounded-2xl backdrop-blur-lg flex flex-col md:flex-row md:items-center justify-between gap-4 z-20 transition-all duration-500">
          {hoveredPlanet ? (
            <div className="flex-1 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <span
                className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border mb-2 inline-block"
                style={{
                  color: hoveredPlanet.color,
                  borderColor: `${hoveredPlanet.color}30`,
                  backgroundColor: `${hoveredPlanet.color}0a`,
                }}
              >
                {hoveredPlanet.tagline}
              </span>
              <h3 className="text-white text-lg font-bold tracking-wide">{hoveredPlanet.name}</h3>
              <p className="text-zinc-400 text-xs md:text-sm mt-1 leading-relaxed">
                {hoveredPlanet.desc}
              </p>
            </div>
          ) : (
            <div className="flex-1">
              <span className="text-[10px] uppercase font-semibold text-gold tracking-widest block mb-1">
                Interactive Navigation
              </span>
              <h3 className="text-white text-base font-medium tracking-wide">
                Explore the Yeqari Ecosystem
              </h3>
              <p className="text-zinc-500 text-xs mt-1">
                Hover over and click any orbiting planet to enter their dedicated service structures.
              </p>
            </div>
          )}

          {hoveredPlanet && (
            <button
              onClick={() => router.push(`/services#${hoveredPlanet.id}`)}
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-white text-black rounded-full hover:bg-gold hover:text-black transition-colors self-start md:self-center flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Explore World</span>
              <span>&rarr;</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
