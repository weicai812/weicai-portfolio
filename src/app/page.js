'use client'


import Loader from "../components/loader";
import React, { useState, useEffect } from "react";
import Hero from "../pages/Hero";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setLoading(false);
          clearInterval(interval);
          return 100;
        }
        return prev + 10; // Increase progress by 10%
      });
    }, 300); // Update every 300ms
  }, []);

  return (
    <div>
      {loading ? (
        <Loader progress={progress} />
      ) : (
        <div>
          <Hero />
        </div>
      )}
    </div>
  );
}
