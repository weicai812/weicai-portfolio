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
          observer.unobserve(entry.target);
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
    <div ref={ref} className={styles.revealLeft} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function RevealRight({ children, delay = 0 }) {
  const ref = useRef(null);
  useScrollReveal(ref);
  return (
    <div ref={ref} className={styles.revealRight} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function RevealUp({ children, delay = 0 }) {
  const ref = useRef(null);
  useScrollReveal(ref);
  return (
    <div ref={ref} className={styles.revealUp} style={{ transitionDelay: `${delay}ms` }}>
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
  const hasAchievements = edu.achievements?.length > 0;
  const hasFooter = edu.logo || edu.certificateUrl;

  return (
    <div className={styles.card}>
      {/* Title */}
      <h3 className={styles.cardTitle}>{edu.title}</h3>

      {/* Meta: institution, location, date (mobile only) */}
      <div className={styles.metaRow}>
        {edu.institution && (
          <span className={styles.metaItem}>
            <span className={styles.metaIcon}><HiOutlineOfficeBuilding size={14} /></span>
            {edu.institution}
          </span>
        )}
        {edu.location && (
          <span className={styles.metaItem}>
            <span className={styles.metaIcon}><MdOutlineLocationOn size={15} /></span>
            {edu.location}
          </span>
        )}
        {/* Date shown only on mobile */}
        {edu.date && (
          <span className={`${styles.metaItem} ${styles.metaDateMobile}`}>
            <span className={styles.metaIcon}><BsCalendar3 size={12} /></span>
            {edu.date}
          </span>
        )}
      </div>

      {/* Description */}
      {edu.description && (
        <>
          <hr className={styles.divider} />
          <p className={styles.description}>{edu.description}</p>
        </>
      )}

      {/* Achievements */}
      {hasAchievements && (
        <>
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
        </>
      )}

      {/* Footer: logo + cert link — only if at least one exists */}
      {hasFooter && (
        <div className={styles.cardFooter}>
          {/* Logo placeholder — only if logo field exists */}
          {edu.logo ? (
            <div className={styles.logoPlaceholder}>
              <div className={styles.logoSquare}>
                {edu.institution?.charAt(0) ?? "U"}
              </div>
              {edu.institution?.split(" ").slice(0, 3).join(" ")}
            </div>
          ) : (
            /* Empty spacer so cert link stays right-aligned */
            <span />
          )}

          {/* Certificate link — only if certificateUrl exists */}
          {edu.certificateUrl && (
            <a
              href={edu.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certLink}
            >
              View certificate
              <span className={styles.certIcon}><LuExternalLink size={13} /></span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

/* ── Date badge ── */
function DateBadge({ date }) {
  if (!date) return null;
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
            const isEven = index % 2 === 0; // even → card LEFT, date RIGHT

            return (
              <div key={edu.id} className={styles.timelineItem}>

                {/* ── Left slot ── */}
                <div className={styles.leftSlot}>
                  {isEven ? (
                    <RevealLeft delay={100}>
                      <div className={styles.cardWrapperLeft}>
                        <EducationCard edu={edu} />
                      </div>
                    </RevealLeft>
                  ) : (
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
                    <RevealUp delay={200}>
                      <div className={`${styles.dateWrapperRight} ${styles.desktopOnly}`}>
                        <DateBadge date={edu.date} />
                      </div>
                    </RevealUp>
                  ) : (
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