'use client'

import ComputersCanvas from "../canvas/computers";

const Introduction = () => {
  const languages = [
    { name: 'Mandarin', proficiency: '90%', level: 'Distinguished' },
    { name: 'Malay', proficiency: '70%', level: 'Superior' },
    { name: 'English', proficiency: '65%', level: 'Superior' },
  ];

  return (
    <div className="w-full h-screen">

      {/* Computer Model */}
      <ComputersCanvas />

    </div>
  );
};

export default Introduction;
