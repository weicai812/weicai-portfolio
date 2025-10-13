'use client'
import React from "react";
import ParticleBackground from "@/components/ParticleBackground";
import Introduction from "@/components/Introduction";

export default function About() {
  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", background: "#000" }}>
      <ParticleBackground particleCount={250} color="#00ffff" />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "50px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
          color: "#00ffff",
        }}
      >
        <h1 style={{ fontSize: "3rem", textAlign: "center", marginBottom: 40 }}>
          About Me
        </h1>
        <Introduction />
      </div>
    </div>
  );
}
