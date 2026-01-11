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
    <div
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: 20,
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: 32,
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
          }}
        />
      </div>

      {/* Mobile-first Tabs */}
      <div
        className="tabs-container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            style={{
              padding: "12px",
              borderRadius: 14,
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              background: active === tab.key ? "#00ffff" : "#222",
              color: "#fff",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Animated Skill Bars */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {skillData[active].map((skill, idx) => (
          <div key={idx} style={{ marginBottom: 20 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 14,
                marginBottom: 6,
              }}
            >
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div
              style={{
                height: 8,
                background: "#333",
                borderRadius: 4,
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
                  boxShadow: "0 0 8px rgba(0,255,255,0.6)",
                }}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
