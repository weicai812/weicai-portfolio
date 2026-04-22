'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const pathname = usePathname();

  // Auto collapse mobile menu & submenu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsAboutOpen(false);
  }, [pathname]);

  return (
    <nav>
      <div className="container">
        {/* Left: Logo */}
        <Link href="/">
          <span className="title-font nav-item">Gan Wei Cai</span>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <Link href="/" className="nav-item">Home</Link>
          <div
            className={`nav-item ${isAboutOpen ? 'active' : ''}`}
            onMouseEnter={() => setIsAboutOpen(true)}
            onMouseLeave={() => setIsAboutOpen(false)}
          >
            About
            <div className="dropdown">
              <Link href="/about#skills" className="menu-item">Skills</Link>
              <Link href="/about#experience" className="menu-item">Experience</Link>
              <Link href="/about#education" className="menu-item">Education</Link>
            </div>
          </div>
          <Link href="/projects" className="nav-item">Projects</Link>
          <Link href="/contact" className="nav-item">Contact</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link href="/" className="menu-item">Home</Link>

        {/* About collapsible submenu */}
        <button
          className="menu-item"
          onClick={() => setIsAboutOpen(!isAboutOpen)}
        >
          About {isAboutOpen ? '▲' : '▼'}
        </button>
        <div className={`dropdown-mobile ${isAboutOpen ? 'open' : ''}`}>
          <Link href="/about#skills" className="menu-item">Skills</Link>
          <Link href="/about#experience" className="menu-item">Experience</Link>
          <Link href="/about#education" className="menu-item">Education</Link>
        </div>

        <Link href="/projects" className="menu-item">Projects</Link>
        <Link href="/contact" className="menu-item">Contact</Link>
      </div>
    </nav>
  );
}