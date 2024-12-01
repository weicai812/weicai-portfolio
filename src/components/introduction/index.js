'use client'

import { useEffect } from 'react';
import styles from './styles.css'; // Import the CSS file

const Introduction = () => {
  useEffect(() => {
    const container = document.getElementById("particle-background");
    const particles = [];
    const lines = [];
    const numParticles = 150; // Increased number of particles for a denser background
    const maxDistance = 150; // Maximum distance to link particles

    // Create particles and position them randomly
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      container.appendChild(particle);

      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      particles.push({
        element: particle,
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 0.5, // Random velocity in X direction
        vy: (Math.random() - 0.5) * 0.5  // Random velocity in Y direction
      });
    }

    // Function to create a line between two particles
    function createLine(x1, y1, x2, y2) {
      const line = document.createElement("div");
      line.classList.add("line");
      container.appendChild(line);

      const distance = Math.hypot(x2 - x1, y2 - y1); // Calculate distance between particles

      line.style.width = `${distance}px`;
      const angle = Math.atan2(y2 - y1, x2 - x1);
      line.style.transform = `rotate(${angle}rad)`;
      line.style.left = `${x1}px`;
      line.style.top = `${y1}px`;

      return line;
    }

    // Function to update particle positions and lines
    function update() {
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Random movement within bounds
        if (particle.x < 0 || particle.x > window.innerWidth) particle.vx = -particle.vx;
        if (particle.y < 0 || particle.y > window.innerHeight) particle.vy = -particle.vy;

        // Update particle position
        particle.element.style.left = `${particle.x}px`;
        particle.element.style.top = `${particle.y}px`;
      });

      // Clear existing lines
      lines.forEach((line) => line.remove());
      lines.length = 0;

      // Draw lines between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (distance < maxDistance) {
            const line = createLine(p1.x, p1.y, p2.x, p2.y);
            lines.push(line);
          }
        });
      });

      requestAnimationFrame(update); // Call the update function repeatedly
    }

    // Mouse interaction to make particles move towards the mouse
    document.addEventListener("mousemove", (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      particles.forEach((particle) => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.hypot(dx, dy);
        const force = Math.min(1 / distance * 10, 0.1); // Control mouse influence

        particle.vx += (dx / distance) * force;
        particle.vy += (dy / distance) * force;
      });
    });

    // Start the animation loop
    update();

    // Clean up event listeners when the component is unmounted
    return () => {
      document.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <div className={styles.container}>
      <div id="particle-background"></div>
      <div className={styles.content}>
        <h1>Hello!</h1>
        <p>I am Motasim Foad</p>
        <p>Product & Project Manager II Software Engineer</p>
        <button>About Me</button>
        <button>Blog</button>
        <button>Contact Me</button>
      </div>
    </div>
  );
};

export default Introduction;

