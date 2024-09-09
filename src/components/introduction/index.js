'use client'

import ComputersCanvas from "../canvas/computers";

const Introduction = () => {
  const languages = [
    { name: 'Mandarin', proficiency: '90%', level: 'Distinguished' },
    { name: 'Malay', proficiency: '70%', level: 'Superior' },
    { name: 'English', proficiency: '65%', level: 'Superior' },
  ];

  return (
    <section className="relative w-full h-screen mx-auto">

      {/* Computer Model */}
      <ComputersCanvas />

    </section>
  );
};

export default Introduction;
