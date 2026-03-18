'use client';
import { useState } from 'react';
import HardSkills from './HardSkills';
import SoftSkills from './SoftSkills';
import LanguageSkills from './LanguageSkills';
import useIsDesktop from './useIsDesktop';
import './style.css';
import { skillData, tabs } from '@/constants/skills';

export default function Introduction() {
  const [active, setActive] = useState('hard');
  const [hovered, setHovered] = useState(null);
  const isDesktop = useIsDesktop();

  const renderContent = () => {
    switch (active) {
      case 'hard':
        return <HardSkills data={skillData.hard} />;
      case 'soft':
        return <SoftSkills data={skillData.soft} />;
      case 'language':
        return <LanguageSkills data={skillData.language} />;
      default:
        return null;
    }
  };

  return (
    <section className="intro-section">
      {/* Profile */}
      <div className="intro-profile">
        <img src="/profile.png" alt="Profile" />
      </div>

      {/* Name */}
      <div className="intro-name">
        Gan Wei Cai
      </div>

      {/* Tabs */}
      <div
        className="intro-tabs"
        style={{ flexDirection: isDesktop ? 'row' : 'column' }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`intro-tab ${active === tab.key ? 'active' : ''}`}
            onClick={() => setActive(tab.key)}
            onMouseEnter={() => setHovered(tab.key)}
            onMouseLeave={() => setHovered(null)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skill Content */}
      {renderContent()}
    </section>
  );
}
