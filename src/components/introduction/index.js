'use client';

import { useState, useEffect } from 'react';
import ComputersCanvas from '../canvas/computers';
import { motion } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';

const Introduction = () => {
  const [isVisible, setIsVisible] = useState(true);

  const languages = [
    { name: 'Mandarin', proficiency: '90%', level: 'Distinguished' },
    { name: 'Malay', proficiency: '70%', level: 'Superior' },
    { name: 'English', proficiency: '65%', level: 'Superior' },
  ];

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop < 50); // Show if scrolled less than 50px from top
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-screen relative flex flex-col items-center justify-center">
      {/* Computer Model */}
      <div className="w-full h-full">
        <ComputersCanvas />
      </div>

      {/* Scroll Down Icon */}
      {isVisible && (
        <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
          <a href="#education">
            <div className="w-[30px] h-[50px] rounded-3xl flex justify-center items-start p-2 xs:w-[35px] xs:h-[64px]">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="rounded-full mb-1 text-secondary"
              >
                <ArrowDownCircle size={32} className="xs:size-[36px]" />
              </motion.div>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default Introduction;
