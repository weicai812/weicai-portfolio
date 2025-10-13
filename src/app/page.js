'use client'

import React, { useState, useEffect } from "react";
import Loader from "../components/loader";
import Hero from "../pages/Hero";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    // If everything is already loaded (e.g. cached)
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div>
      {loading ? <Loader /> : <Hero />}
    </div>
  );
}
