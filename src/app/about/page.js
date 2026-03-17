'use client'

import React from "react";
import ParticleBackground from "@/components/ParticleBackground";
import Introduction from "@/components/introduction";
import ExperienceTimeline from "@/components/Experiences";
import './style.css';

export default function About() {
  return (
    <div style={{ position: "relative", background: "#000", color: "#00ffff" }}>
      {/* Particle background behind all content */}
      <ParticleBackground particleCount={250} color="#00ffff" />

      {/* Content */}
      <div className="about-wrapper">
        <div className="about-container">

          {/* About Title */}
          <h1 className="about-title">
            About Me
          </h1>

          <Introduction />

          {/* Experience Title */}
          <h1 id="experience" className="about-title">
            Experiences
          </h1>
          <ExperienceTimeline />
        </div>
      </div>
    </div>
  );
}
