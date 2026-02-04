'use client'

import React from "react";
import ParticleBackground from "@/components/ParticleBackground";
import Introduction from "@/components/introduction";

export default function About() {
  return (
    <div style={{ position: "relative", background: "#000", color: "#00ffff" }}>
      {/* Particle background behind all content */}
      <ParticleBackground particleCount={250} color="#00ffff" />

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 1, padding: "50px 20px", minHeight: "100vh" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "3rem", textAlign: "center", marginBottom: 40 }}>
            About Me
          </h1>

          <Introduction />
        </div>
      </div>
    </div>
  );
}
