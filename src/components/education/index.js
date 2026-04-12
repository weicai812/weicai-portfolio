"use client";

import { useEffect, useRef } from "react";
import styles from "./style.module.css";
import { educationData } from "@/constants/education";
import { BsCalendar3 } from "react-icons/bs";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import { GiTrophy } from "react-icons/gi";
import { LuExternalLink } from "react-icons/lu";

/* ── Reusable hook: adds .visible when element enters viewport ── */
function useScrollReveal(ref) {
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target); // fire once
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

/* ── Animated wrappers ── */
function RevealLeft({ children, delay = 0 }) {
  const ref = useRef(null);
  useScrollReveal(ref);
  return (
    <div
      ref={ref}
      className={styles.revealLeft}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function RevealRight({ children, delay = 0 }) {
  const ref = useRef(null);
  useScrollReveal(ref);
  return (
    <div
      ref={ref}
      className={styles.revealRight}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function RevealUp({ children, delay = 0 }) {
  const ref = useRef(null);
  useScrollReveal(ref);
  return (
    <div
      ref={ref}
      className={styles.revealUp}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function RevealDot({ delay = 0 }) {
  const ref = useRef(null);
  useScrollReveal(ref);
  return (
    <div
      ref={ref}
      className={`${styles.dot} ${styles.revealDot}`}
      style={{ transitionDelay: `${delay}ms` }}
    />
  );
}

/* ── Card ── */
function EducationCard({ edu }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{edu.title}</h3>

      <div className={styles.metaRow}>
        <span className={styles.metaItem}>
          <span className={styles.metaIcon}><HiOutlineOfficeBuilding size={14} /></span>
          {edu.institution}
        </span>
        <span className={styles.metaItem}>
          <span className={styles.metaIcon}><MdOutlineLocationOn size={15} /></span>
          {edu.location}
        </span>
        {/* Date shown only on mobile */}
        <span className={`${styles.metaItem} ${styles.metaDateMobile}`}>
          <span className={styles.metaIcon}><BsCalendar3 size={12} /></span>
          {edu.date}
        </span>
      </div>

      <hr className={styles.divider} />

      <p className={styles.description}>{edu.description}</p>

      <hr className={styles.divider} />

      <div>
        <div className={styles.achievementsTitle}>
          <span className={styles.trophyIcon}><GiTrophy size={16} /></span>
          Achievements &amp; Honors
        </div>
        <div className={styles.achievementsGrid}>
          {edu.achievements.map((ach, i) => (
            <div key={i} className={styles.achievementItem}>
              <span className={styles.bullet} />
              {ach.label}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.logoPlaceholder}>
          <div className={styles.logoSquare}>T</div>
          TAR UMT
        </div>
        <a
          href={edu.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.certLink}
        >
          View certificate
          <span className={styles.certIcon}><LuExternalLink size={13} /></span>
        </a>
      </div>
    </div>
  );
}

/* ── Date badge ── */
function DateBadge({ date }) {
  return (
    <span className={styles.dateBadge}>
      <span className={styles.calIcon}><BsCalendar3 size={12} /></span>
      {date}
    </span>
  );
}

/* ── Main component ── */
export default function Education() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.timeline}>
          {educationData.map((edu, index) => {
            // even → card LEFT, date RIGHT
            // odd  → date LEFT, card RIGHT
            const isEven = index % 2 === 0;

            return (
              <div key={edu.id} className={styles.timelineItem}>

                {/* ── Left slot ── */}
                <div className={styles.leftSlot}>
                  {isEven ? (
                    /* Card slides in from the left */
                    <RevealLeft delay={100}>
                      <div className={styles.cardWrapperLeft}>
                        <EducationCard edu={edu} />
                      </div>
                    </RevealLeft>
                  ) : (
                    /* Date badge fades up from left — desktop only */
                    <RevealUp delay={200}>
                      <div className={`${styles.dateWrapperLeft} ${styles.desktopOnly}`}>
                        <DateBadge date={edu.date} />
                      </div>
                    </RevealUp>
                  )}
                </div>

                {/* ── Centre: animated dot ── */}
                <div className={styles.centerCol}>
                  <RevealDot delay={0} />
                </div>

                {/* ── Right slot ── */}
                <div className={styles.rightSlot}>
                  {isEven ? (
                    /* Date badge fades up from right — desktop only */
                    <RevealUp delay={200}>
                      <div className={`${styles.dateWrapperRight} ${styles.desktopOnly}`}>
                        <DateBadge date={edu.date} />
                      </div>
                    </RevealUp>
                  ) : (
                    /* Card slides in from the right */
                    <RevealRight delay={100}>
                      <div className={styles.cardWrapperRight}>
                        <EducationCard edu={edu} />
                      </div>
                    </RevealRight>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}