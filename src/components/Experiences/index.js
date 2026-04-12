'use client';

import styles from "./style.module.css";
import { experiences } from "@/constants/experience";
import { useEffect, useRef } from "react";
import { FiExternalLink } from "react-icons/fi";

export default function ExperienceTimeline() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.inView);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentItems = itemsRef.current;

    currentItems.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.timeline}>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={styles.timelineItem}
          ref={(el) => (itemsRef.current[index] = el)}
        >
          <div className={styles.timelineDot} />

          <div className={styles.timelineContent}>
            <div className={styles.expHeader}>
              <div className={styles.expLeft}>
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className={styles.expLogo}
                />
                <div>
                  <h3 className={styles.expRole}>{exp.role}</h3>

                  <div className={styles.expMeta}>
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.companyLink}
                    >
                      {exp.company}
                    </a>
                    <span> | {exp.location}</span>
                  </div>
                </div>
              </div>

              <div className={styles.expRight}>
                <span className={styles.badge}>{exp.type}</span>
                <div className={styles.date}>{exp.date}</div>
              </div>
            </div>

            <p className={styles.expDescription}>{exp.description}</p>

            <ul className={styles.expList}>
              {exp.achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className={styles.techStack}>
              {exp.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            {exp.projects &&
              exp.projects.map((project, i) => (
                <div className={styles.projectSection} key={i}>
                  <div className={styles.projectHeader}>
                    <h4 className={styles.projectTitle}>
                      {project.name}
                    </h4>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLinkIcon}
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>

                  <p className={styles.projectDesc}>
                    {project.description}
                  </p>

                  <div className={styles.techStack}>
                    {project.tech.map((t, j) => (
                      <span key={j}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}