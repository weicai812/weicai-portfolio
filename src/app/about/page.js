'use client'

import React from "react";
import ParticleBackground from "@/components/ParticleBackground";
import Introduction from "@/components/introduction";
import './style.css';

export default function About() {
  return (
    <div style={{ position: "relative", background: "#000", color: "#00ffff" }}>
      {/* Particle background behind all content */}
      <ParticleBackground particleCount={250} color="#00ffff" />

      {/* Main content */}
      <div className="about-wrapper">
      <div className="about-container">
        <h1 className="about-title">
          About Me
        </h1>

          <Introduction />
        </div>
      </div>
    </div>
  );
}
