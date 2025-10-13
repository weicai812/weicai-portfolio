'use client'
import React from "react";

const Introduction = () => {
  // Example skill data
  const hardSkills = [
    { name: "ReactJS", level: 90 },
    { name: "NextJS", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "Python", level: 80 },
  ];

  const softSkills = [
    { name: "Communication", level: 90 },
    { name: "Teamwork", level: 85 },
    { name: "Problem Solving", level: 80 },
  ];

  const languages = [
    { name: "English", level: 95 },
    { name: "Mandarin", level: 70 },
    { name: "Malay", level: 85 },
  ];

  // Component for rendering skills
  const SkillSet = ({ title, skills }) => (
    <div style={{ marginBottom: 20 }}>
      <h3 style={{ marginBottom: 10 }}>{title}</h3>
      {skills.map((skill, idx) => (
        <div key={idx} style={{ marginBottom: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div style={{ height: 8, background: "#333", borderRadius: 4 }}>
            <div
              style={{
                width: `${skill.level}%`,
                height: "100%",
                background: "#00ffff",
                borderRadius: 4,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 40,
        alignItems: "flex-start",
        padding: 20,
        flexWrap: "wrap",
        color: "#fff",
      }}
    >
      {/* Profile Picture */}
      <div style={{ flex: "0 0 200px" }}>
        <img
          src="/profile.jpg" // replace with your actual path
          alt="Profile"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #00ffff",
          }}
        />
      </div>

      {/* Skill Sets */}
      <div style={{ flex: "1 1 400px", minWidth: "250px" }}>
        <SkillSet title="Hard Skills" skills={hardSkills} />
        <SkillSet title="Soft Skills" skills={softSkills} />
        <SkillSet title="Languages" skills={languages} />
      </div>
    </div>
  );
};

export default Introduction;
