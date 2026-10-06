"use client";

import React, { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0, height = 0;
    let mouseX = -1000, mouseY = -1000;
    let targetX = -1000, targetY = -1000;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const cols = 9;
    const rows = 9;
    interface Point {
      originX: number;
      originY: number;
      x: number;
      y: number;
    }
    const points: Point[] = [];

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const originX = (i + 1) * (width / (cols + 1));
        const originY = (j + 1) * (height / (rows + 1));
        points.push({ originX, originY, x: originX, y: originY });
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      targetX = -1000;
      targetY = -1000;
    };
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;
    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      mouseX += (targetX - mouseX) * 0.1;
      mouseY += (targetY - mouseY) * 0.1;

      // Coordinate axes
      ctx.strokeStyle = "rgba(18, 17, 16, 0.05)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(width / 2, 20);
      ctx.lineTo(width / 2, height - 20);
      ctx.moveTo(20, height / 2);
      ctx.lineTo(width - 20, height / 2);
      ctx.stroke();

      // Update positions
      points.forEach((p, idx) => {
        const wave = Math.sin(time + p.originX * 0.02 + p.originY * 0.02) * 3;
        const dx = mouseX - p.originX;
        const dy = mouseY - p.originY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let pushX = 0, pushY = 0;
        if (dist < 130) {
          const force = (1 - dist / 130) * 24;
          pushX = (dx / dist) * force;
          pushY = (dy / dist) * force;
        }
        p.x = p.originX + pushX + wave;
        p.y = p.originY + pushY + Math.cos(time + idx) * 2.5;
      });

      // Draw lattice connections
      ctx.lineWidth = 0.8;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const curr = points[i * rows + j];
          if (i < cols - 1) {
            const right = points[(i + 1) * rows + j];
            const distH = Math.hypot(curr.x - right.x, curr.y - right.y);
            ctx.strokeStyle = distH < 65 ? "rgba(109, 40, 217, 0.28)" : "rgba(18, 17, 16, 0.1)";
            ctx.beginPath();
            ctx.moveTo(curr.x, curr.y);
            ctx.lineTo(right.x, right.y);
            ctx.stroke();
          }
          if (j < rows - 1) {
            const bottom = points[i * rows + (j + 1)];
            const distV = Math.hypot(curr.x - bottom.x, curr.y - bottom.y);
            ctx.strokeStyle = distV < 65 ? "rgba(109, 40, 217, 0.28)" : "rgba(18, 17, 16, 0.1)";
            ctx.beginPath();
            ctx.moveTo(curr.x, curr.y);
            ctx.lineTo(bottom.x, bottom.y);
            ctx.stroke();
          }

          const isCenter = Math.hypot(curr.x - width / 2, curr.y - height / 2) < 85;
          ctx.fillStyle = isCenter ? "#6D28D9" : "rgba(18, 17, 16, 0.55)";
          ctx.beginPath();
          ctx.arc(curr.x, curr.y, isCenter ? 2.5 : 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Harmonic center ring
      ctx.strokeStyle = "rgba(109, 40, 217, 0.22)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 70 + Math.sin(time) * 3, 0, Math.PI * 2);
      ctx.stroke();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
}
