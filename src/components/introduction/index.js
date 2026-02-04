'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";

const skillData = {
  hard: [
    { name: "Java", level: 90 },
    { name: "Python", level: 90 },
    { name: "R", level: 90 },
    { name: "SQL", level: 90 },
    { name: "Next.js (React)", level: 80 },
    { name: "Laravel", level: 70 },
    { name: "Flutter", level: 70 },
  ],
  soft: [
    { name: "Problem Solving", level: 90 },
    { name: "Leadership", level: 85 },
    { name: "Teamwork", level: 80 },
  ],
  language: [
    { name: "Mandarin", level: 95 },
    { name: "English", level: 85 },
    { name: "Malay", level: 80 },
  ],
};

const tabs = [
  { key: "hard", label: "Hard Skills" },
  { key: "soft", label: "Soft Skills" },
  { key: "language", label: "Languages" },
];

export default function Introduction() {
  const [active, setActive] = useState("hard");

  return (
    <section
      style={{
        maxWidth: 900,
        margin: "60px auto",
        padding: 28,
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        gap: 32,
        background: "rgba(0, 0, 0, 0.45)",          // 👈 particle visible
        backdropFilter: "blur(8px)",               // 👈 glass effect
        WebkitBackdropFilter: "blur(8px)",
        borderRadius: 24,
        border: "1px solid rgba(0,255,255,0.25)",
        boxShadow: "0 0 30px rgba(0,255,255,0.15)",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Profile */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/profile.jpg"
          alt="Profile"
          style={{
            width: 160,
            height: 160,
            borderRadius: "50%",
            border: "3px solid #00ffff",
            objectFit: "cover",
            boxShadow: "0 0 20px rgba(0,255,255,0.6)",
          }}
        />
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            style={{
              padding: "14px",
              borderRadius: 16,
              border: "1px solid rgba(0,255,255,0.3)",
              cursor: "pointer",
              fontWeight: 600,
              letterSpacing: 0.5,
              background:
                active === tab.key
                  ? "rgba(0,255,255,0.9)"
                  : "rgba(30,30,30,0.6)",
              color: active === tab.key ? "#000" : "#fff",
              transition: "all 0.25s ease",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skills */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {skillData[active].map((skill, idx) => (
          <div key={idx} style={{ marginBottom: 22 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 14,
                marginBottom: 6,
                opacity: 0.9,
              }}
            >
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div
              style={{
                height: 9,
                background: "rgba(255,255,255,0.15)",
                borderRadius: 6,
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                  height: "100%",
                  background: "#00ffff",
                  boxShadow: "0 0 12px rgba(0,255,255,0.8)",
                }}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
