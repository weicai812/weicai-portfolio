'use client'

import React from "react";
import ParticleBackground from "@/components/ParticleBackground";
import Introduction from "@/components/introduction";
import ExperienceTimeline from "@/components/Experiences";
import EducationTimeline from "@/components/education";
import './style.css';

export default function About() {
  return (
    <div className="about-page">
      {/* Particle background behind all content */}
      <ParticleBackground color="#00ffff" />

      {/* Main content */}
      <div className="about-wrapper">
        <div className="about-container">

          {/* About Me Section */}
          <h1 className="about-title">About Me</h1>
          <Introduction />

          {/* Experiences Section */}
          <h1 id="experience" className="about-title">Experiences</h1>
          <ExperienceTimeline />

          {/* Education Section */}
          <h1 id="education" className="about-title">Education</h1>
          <EducationTimeline />

        </div>
      </div>
    </div>
  );
}