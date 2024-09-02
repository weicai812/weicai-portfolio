'use client'

import { useState } from 'react';
import './styles.css';  // Import the CSS file

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false); // State to control About dropdown in mobile view

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  return (
    <nav className="bg-cyan-950 text-white p-4 flex justify-between items-center fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Title at Top Left */}
        <div className="text-3xl title-font"><a href='/'>Gan Wei Cai</a></div>

        {/* Toggle Button for Mobile View */}
        <div className="block lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu - Align Right */}
        <div className="hidden lg:flex lg:items-center lg:w-auto ml-auto">
          <div className="flex flex-row items-center">
            <div className="relative group">
              <a
                href="/about"
                className="nav-item text-white px-4 py-2 flex items-center"
              >
                About
                <svg
                  className="ml-1 w-4 h-4 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              <div className="absolute mt-2 bg-cyan-950 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <a href="/about#education" className="dropdown-item text-white px-4 py-2 block hover:bg-cyan-800">Education</a>
                <a href="/about#experiences" className="dropdown-item text-white px-4 py-2 block hover:bg-cyan-800">Experiences</a>
                <a href="/about#certificate" className="dropdown-item text-white px-4 py-2 block hover:bg-cyan-800">Certificate</a>
                <a href="/about#activities" className="dropdown-item text-white px-4 py-2 block hover:bg-cyan-800">Activities</a>
              </div>
            </div>
            <a href="/projects" className="nav-item text-white px-4 py-2">Projects</a>
            <a href="/blogs" className="nav-item text-white px-4 py-2">Blogs</a>
            <a href="/contact" className="nav-item text-white px-4 py-2">Contact</a>
          </div>
        </div>
      </div>

{/* Mobile Menu */}
{isMenuOpen && (
  <div className="mobile-menu absolute right-0 top-16 bg-cyan-950 w-64 rounded-lg border-2 border-blue-500">
    <div className="flex flex-col items-start w-full">
      <button
        className="menu-item text-white text-sm px-4 py-2 block flex items-center"
        aria-label="Toggle About dropdown"
        onClick={toggleAboutDropdown}
      >
        About
        <svg
          className={`ml-1 w-4 h-4 transition-transform duration-200 transform ${isAboutOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isAboutOpen && (
        <div className="pl-4">
          <a href="/about#introduction" className="dropdown-item text-white text-sm px-4 py-2 block hover:bg-cyan-800">Introduction</a>
          <a href="/about#education" className="dropdown-item text-white text-sm px-4 py-2 block hover:bg-cyan-800">Education</a>
          <a href="/about#experiences" className="dropdown-item text-white text-sm px-4 py-2 block hover:bg-cyan-800">Experiences</a>
          <a href="/about#certificate" className="dropdown-item text-white text-sm px-4 py-2 block hover:bg-cyan-800">Certificate</a>
          <a href="/about#activities" className="dropdown-item text-white text-sm px-4 py-2 block hover:bg-cyan-800">Activities</a>
        </div>
      )}
      <a href="/projects" className="menu-item text-white text-sm px-4 py-2 block">Projects</a>
      <a href="/blogs" className="menu-item text-white text-sm px-4 py-2 block">Blogs</a>
      <a href="/contact" className="menu-item text-white text-sm px-4 py-2 block">Contact</a>
    </div>
  </div>
)}

    </nav>
  );
}
