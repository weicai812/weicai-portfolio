'use client'

import React, { useEffect, useRef, useState } from "react";

export default function ParticleBackground({
  color = "#00ffff",
  lineDistance = 120,
  cursorDistance = 100,
  damping = 0.25,
  speedMultiplier = 1.4 // 🔹 slightly faster particles
}) {
  const canvasRef = useRef(null);
  const cursorRef = useRef({ x: -9999, y: -9999 });
  const [particleCount, setParticleCount] = useState(250); // default mobile

  // Set particle count based on screen width
  useEffect(() => {
    function updateParticleCount() {
      if (window.innerWidth >= 768) {
        setParticleCount(450); // desktop
      } else {
        setParticleCount(250); // mobile
      }
    }
    updateParticleCount();
    window.addEventListener("resize", updateParticleCount);
    return () => window.removeEventListener("resize", updateParticleCount);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    function setSize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    setSize();
    window.addEventListener("resize", setSize);

    // Track cursor
    function handleMouseMove(e) {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    }
    function handleMouseLeave() {
      cursorRef.current = { x: -9999, y: -9999 };
    }
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    canvas.style.pointerEvents = "none";
    canvas.style.position = "absolute";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.zIndex = 0;

    // Create particles
    const particles = Array.from({ length: particleCount }, () => {
      const dx = (Math.random() - 0.5) * 0.3 * speedMultiplier;
      const dy = (Math.random() - 0.5) * 0.3 * speedMultiplier;

      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.5,
        dx,
        dy,
        baseDx: dx,
        baseDy: dy
      };
    });

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cursor = cursorRef.current;

      particles.forEach(p => {
        // Distance to cursor
        const dxMouse = p.x - cursor.x;
        const dyMouse = p.y - cursor.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        // Repel from cursor
        if (distMouse < cursorDistance && distMouse > 0) {
          const force = ((cursorDistance - distMouse) / cursorDistance) * 2;
          p.dx += (dxMouse / distMouse) * force;
          p.dy += (dyMouse / distMouse) * force;
        }

        // Smooth return to base velocity
        p.dx += (p.baseDx - p.dx) * damping;
        p.dy += (p.baseDy - p.dy) * damping;

        // Move
        p.x += p.dx;
        p.y += p.dy;

        // Wrap edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

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
            ctx.globalAlpha = 1 - dist / lineDistance;
            ctx.lineWidth = 0.4;
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
  }, [particleCount, color, lineDistance, cursorDistance, damping, speedMultiplier]);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
}
