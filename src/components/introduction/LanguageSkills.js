'use client';
import { motion } from 'framer-motion';

export default function LanguageSkills({ data }) {
  return (
    <div className="skills-container">
      {data.map((lang, index) => (
        <motion.div
          key={lang.name}
          className="skill-bar-container"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.15, ease: 'easeOut' }}
        >
          <div className="skill-bar-header">
            <span>{lang.name}</span>
            <span>{lang.level}%</span>
          </div>
          <div className="skill-bar">
            <motion.div
              className="skill-bar-fill"
              initial={{ width: 0 }}
              animate={{ width: `${lang.level}%` }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
