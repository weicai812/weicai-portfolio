import React from 'react';
import styles from './Footer.module.css'; // Assuming you are using CSS Modules for styling

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>©{new Date().getFullYear()} Gan Wei Cai. All rights reserved.</p>
        <div className={styles.links}>
          <a href="/privacy-policy" className={styles.link}>Privacy Policy</a>
          <span className={styles.separator}>|</span>
          <a href="/disclaimer" className={styles.link}>Disclaimer</a>
          <span className={styles.separator}>|</span>
          <a href="/security-policy" className={styles.link}>Security Policy</a>
          <span className={styles.separator}>|</span>
          <a href="/sitemap" className={styles.link}>Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
