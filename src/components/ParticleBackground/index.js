'use client'

import React, { useEffect, useRef, useState } from "react";

export default function ParticleBackground({
  color = "#00ffff",
  lineDistance = 140,
  cursorDistance = 120,
  particleSize = 1.5,
  particleCountDesktop = 300,
  particleCountMobile = 150,
  speedMultiplier = 0.4 // adjust speed
}) {
  const canvasRef = useRef(null);
  const cursorRef = useRef({ x: -9999, y: -9999 });
  const [particleCount, setParticleCount] = useState(particleCountMobile);

  useEffect(() => {
    const handleResize = () => {
      setParticleCount(window.innerWidth >= 768 ? particleCountDesktop : particleCountMobile);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [particleCountDesktop, particleCountMobile]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    const handleMouseMove = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseLeave = () => {
      cursorRef.current = { x: -9999, y: -9999 };
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    // Initialize particles
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * particleSize + 0.5,
      dx: (Math.random() - 0.5) * speedMultiplier * 2, // stronger initial velocity
      dy: (Math.random() - 0.5) * speedMultiplier * 2
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cursor = cursorRef.current;

      particles.forEach(p => {
        // Cursor repulsion
        const dxMouse = p.x - cursor.x;
        const dyMouse = p.y - cursor.y;
        const distMouse = Math.sqrt(dxMouse ** 2 + dyMouse ** 2);
        if (distMouse < cursorDistance && distMouse > 0) {
          const force = (cursorDistance - distMouse) / cursorDistance;
          p.dx += (dxMouse / distMouse) * force * 0.3;
          p.dy += (dyMouse / distMouse) * force * 0.3;
        }

        // Move particle
        p.x += p.dx;
        p.y += p.dy;

        // **No damping** — keeps drifting continuously
        // p.dx *= 0.99;
        // p.dy *= 0.99;

        // Wrap around edges
        if (p.x < -p.r) p.x = canvas.width + p.r;
        if (p.x > canvas.width + p.r) p.x = -p.r;
        if (p.y < -p.r) p.y = canvas.height + p.r;
        if (p.y > canvas.height + p.r) p.y = -p.r;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < lineDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = color;
            ctx.globalAlpha = 0.3 * (1 - dist / lineDistance);
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [particleCount, color, lineDistance, cursorDistance, particleSize, speedMultiplier]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}