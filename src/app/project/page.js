'use client';

import { useState } from 'react';
import styles from './style.module.css';
import { projects } from '@/constants/project';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaFolderOpen
} from 'react-icons/fa';

export default function ProjectPage() {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const [tagOpen, setTagOpen] = useState(false);
  const [tagSearch, setTagSearch] = useState('');

  const tags = ['All', ...new Set(projects.flatMap(p => p.tags))];

  const filteredProjects = projects.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchTag = activeTag === 'All' || p.tags.includes(activeTag);
    return matchSearch && matchTag;
  });

  return (
    <div className={styles.container}>

      {/* TITLE */}
      <h1 className={styles.title}>
        <FaFolderOpen className={styles.titleIcon} />
        <span className={styles.titleText}>Projects Portfolio</span>
      </h1>

      <p className={styles.subtitle}>
        Browse my work and projects.
      </p>

      {/* SEARCH */}
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TAG DROPDOWN */}
      <div className={styles.tagWrapper}>

        <button
          className={styles.tagToggle}
          onClick={() => setTagOpen(!tagOpen)}
        >
          {activeTag === 'All' ? 'All Tags' : activeTag}
          <span className={styles.arrow}>
            {tagOpen ? '▲' : '▼'}
          </span>
        </button>

        {tagOpen && (
          <div className={styles.tagDropdown}>

            <input
              className={styles.tagSearch}
              placeholder="Search tags..."
              value={tagSearch}
              onChange={(e) => setTagSearch(e.target.value)}
            />

            <div className={styles.tagList}>
              {tags
                .filter(tag =>
                  tag.toLowerCase().includes(tagSearch.toLowerCase())
                )
                .map(tag => (
                  <button
                    key={tag}
                    onClick={() => {
                      setActiveTag(tag);
                      setTagOpen(false);
                    }}
                    className={`${styles.tagItem} ${
                      activeTag === tag ? styles.activeTagItem : ''
                    }`}
                  >
                    {tag}
                  </button>
                ))}
            </div>

          </div>
        )}
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >

            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>
                {selectedProject.title}
              </h2>

              <button
                className={styles.closeIcon}
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
            </div>

            {selectedProject.image && (
              <div className={styles.modalImageWrapper}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                />
              </div>
            )}

            <div className={styles.modalBody}>

              <p className={styles.modalDesc}>
                {selectedProject.fullDescription}
              </p>

              <p className={styles.modalStatus}>
                <strong>Status:</strong> {selectedProject.statusLabel}
              </p>

              <div className={styles.modalTags}>
                {selectedProject.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}

/* ================= CARD ================= */

function ProjectCard({ project, onOpen }) {
  return (
    <div className={styles.card}>

      <div className={styles.imageWrapper}>
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className={styles.noImage}>
            <FaFolderOpen />
            <span>{project.title}</span>
          </div>
        )}

        <span className={`${styles.badge} ${styles[project.status]}`}>
          {project.statusLabel}
        </span>
      </div>

      <div className={styles.content}>
        <h3>{project.title}</h3>

        <p className={styles.fullDesc}>
          {project.fullDescription}
        </p>

        <div className={styles.tags}>
          {project.tags.slice(0, 2).map(tag => (
            <span key={tag}>{tag}</span>
          ))}

          {project.tags.length > 2 && (
            <span className={styles.moreTag}>
              +{project.tags.length - 2}
            </span>
          )}
        </div>

        <div className={styles.actionRow}>
          <div className={styles.leftActions}>
            {project.github && (
              <a href={project.github} target="_blank">
                <FaGithub /> GitHub
              </a>
            )}

            {project.demo && (
              <a href={project.demo} target="_blank">
                <FaExternalLinkAlt /> Live
              </a>
            )}
          </div>

          <button className={styles.detailsBtn} onClick={onOpen}>
            <FaInfoCircle /> Details
          </button>
        </div>

      </div>
    </div>
  );
}