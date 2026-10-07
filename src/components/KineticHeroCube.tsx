"use client";

import React, { useEffect, useRef } from "react";

export default function KineticHeroCube() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Load Three.js dynamically if not already available
    let isDisposed = false;

    const setupScene = () => {
      // @ts-expect-error Three is loaded via script or window
      const THREE = window.THREE;
      if (!THREE || isDisposed) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, container.clientWidth / container.clientHeight, 0.1, 1000);
      camera.position.set(5.5, 4.5, 7.5);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.innerHTML = "";
      container.appendChild(renderer.domElement);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
      scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
      dirLight.position.set(8, 12, 10);
      scene.add(dirLight);

      const purplePointLight = new THREE.PointLight(0x7C3AED, 4, 30);
      purplePointLight.position.set(-6, 4, 6);
      scene.add(purplePointLight);

      const fuchsiaPointLight = new THREE.PointLight(0xD946EF, 3, 30);
      fuchsiaPointLight.position.set(6, -4, -6);
      scene.add(fuchsiaPointLight);

      // 3x3x3 Rubik's Kinetic Group
      const cubeGroup = new THREE.Group();
      scene.add(cubeGroup);

      const boxGeo = new THREE.BoxGeometry(0.92, 0.92, 0.92);
      const spacing = 1.05;

      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          for (let z = -1; z <= 1; z++) {
            if (x === 0 && y === 0 && z === 0) continue;

            const materials = [
              new THREE.MeshStandardMaterial({ color: x === 1 ? 0x7C3AED : 0x120A24, roughness: 0.25, metalness: 0.4 }),
              new THREE.MeshStandardMaterial({ color: x === -1 ? 0xD946EF : 0x120A24, roughness: 0.25, metalness: 0.4 }),
              new THREE.MeshStandardMaterial({ color: y === 1 ? 0xC084FC : 0x120A24, roughness: 0.2, metalness: 0.5 }),
              new THREE.MeshStandardMaterial({ color: y === -1 ? 0x2B075C : 0x120A24, roughness: 0.3, metalness: 0.3 }),
              new THREE.MeshStandardMaterial({ color: z === 1 ? 0xFFFFFF : 0x120A24, roughness: 0.15, metalness: 0.7 }),
              new THREE.MeshStandardMaterial({ color: z === -1 ? 0x9333EA : 0x120A24, roughness: 0.25, metalness: 0.4 })
            ];

            const cubelet = new THREE.Mesh(boxGeo, materials);
            cubelet.position.set(x * spacing, y * spacing, z * spacing);
            cubeGroup.add(cubelet);
          }
        }
      }

      // Drag interaction
      let isDragging = false;
      let prevPos = { x: 0, y: 0 };

      const onPointerDown = (e: MouseEvent | TouchEvent) => {
        isDragging = true;
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
        prevPos = { x: clientX, y: clientY };
      };

      const onPointerMove = (e: MouseEvent | TouchEvent) => {
        if (!isDragging) return;
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
        const deltaX = clientX - prevPos.x;
        const deltaY = clientY - prevPos.y;

        cubeGroup.rotation.y += deltaX * 0.008;
        cubeGroup.rotation.x += deltaY * 0.008;
        prevPos = { x: clientX, y: clientY };
      };

      const onPointerUp = () => {
        isDragging = false;
      };

      container.addEventListener("mousedown", onPointerDown);
      window.addEventListener("mousemove", onPointerMove);
      window.addEventListener("mouseup", onPointerUp);

      container.addEventListener("touchstart", onPointerDown, { passive: true });
      window.addEventListener("touchmove", onPointerMove, { passive: true });
      window.addEventListener("touchend", onPointerUp);

      const handleResize = () => {
        if (!container || isDisposed) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };
      window.addEventListener("resize", handleResize);

      let animId: number;
      const animate = () => {
        if (isDisposed) return;
        animId = requestAnimationFrame(animate);

        if (!isDragging) {
          cubeGroup.rotation.y += 0.004;
          cubeGroup.rotation.x += 0.002;
        }

        renderer.render(scene, camera);
      };
      animate();

      return () => {
        isDisposed = true;
        cancelAnimationFrame(animId);
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousemove", onPointerMove);
        window.removeEventListener("mouseup", onPointerUp);
        window.removeEventListener("touchmove", onPointerMove);
        window.removeEventListener("touchend", onPointerUp);
      };
    };

    // Check if Three.js is loaded
    // @ts-expect-error Three is checked on window
    if (window.THREE) {
      return setupScene();
    } else {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
      script.onload = () => setupScene();
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="relative w-full h-[420px] md:h-[540px] cursor-grab active:cursor-grabbing">
      <div ref={containerRef} className="w-full h-full" />
      <div className="absolute bottom-3 right-4 font-mono text-[11px] text-slate-400 uppercase tracking-widest bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200 pointer-events-none">
        Interactive 3D Matrix • Drag to Orbit
      </div>
    </div>
  );
}
