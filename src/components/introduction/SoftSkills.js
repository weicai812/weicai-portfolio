'use client';
import { motion } from 'framer-motion';
import useIsDesktop from './useIsDesktop';

export default function SoftSkills({ data }) {
  const isDesktop = useIsDesktop();

  return (
    <ul
      className="soft-skills-list"
      style={{ gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr' }}
    >
      {data.map((skill, idx) => (
        <motion.li
          key={idx}
          className="soft-skill-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
            delay: idx * 0.25,
          }}
        >
          <motion.span
            className="soft-skill-bullet"
            whileHover={{
              scale: 1.6,
              boxShadow: '0 0 14px #00ffff, 0 0 28px #00ffff',
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          {skill}
        </motion.li>
      ))}
    </ul>
  );
}
