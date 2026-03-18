'use client'

import "./style.css";
import { experiences } from "@/constants/experience";
import { useEffect, useRef } from "react";
import { FiExternalLink } from "react-icons/fi";

export default function ExperienceTimeline() {

  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });
  }, []);

  return (
    <div className="timeline">
      {experiences.map((exp, index) => (
        <div
          className="timeline-item"
          key={index}
          ref={(el) => (itemsRef.current[index] = el)}
        >

          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <div className="exp-header">
              <div className="exp-left">
                <img src={exp.logo} alt={exp.company} className="exp-logo" />
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-meta">
                    <a href={exp.website} target="_blank" rel="noopener noreferrer" className="company-link">
                      {exp.company}
                    </a>
                    <span> | {exp.location}</span>
                  </div>
                </div>
              </div>
              <div className="exp-right">
                <span className="badge">{exp.type}</span>
                <div className="date">{exp.date}</div>
              </div>
            </div>

            <p className="exp-description">{exp.description}</p>

            <ul className="exp-list">
              {exp.achievements.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <div className="tech-stack">
              {exp.tech.map((t, i) => <span key={i}>{t}</span>)}
            </div>

            {exp.projects && exp.projects.map((project, i) => (
              <div className="project-section" key={i}>

                {/* Project Header + Icon */}
                <div className="project-header">
                  <h4 className="project-title">{project.name}</h4>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-icon"
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>

                <p className="project-desc">{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((t, j) => <span key={j}>{t}</span>)}
                </div>

              </div>
            ))}

          </div>

        </div>
      ))}
    </div>
  );
}