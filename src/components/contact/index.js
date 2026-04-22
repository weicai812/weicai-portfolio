'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faPaperPlane,
  faCircleCheck,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Ovo } from 'next/font/google';
import styles from './style.module.css';

const ovo = Ovo({ weight: ['400'], subsets: ['latin'], display: 'swap' });

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const CONTACT_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/weicai812',
    href: 'https://github.com/weicai812',
    icon: faGithub,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/gan-wei-cai-5183c',
    href: 'https://www.linkedin.com/in/gan-wei-cai-5183c/',
    icon: faLinkedin,
  },
  {
    id: 'email',
    label: 'Email',
    value: 'weicai6919@gmail.com',
    href: 'mailto:weicai6919@gmail.com',
    icon: faEnvelope,
  },
  {
    id: 'phone-sg',
    label: 'Phone (SG)',
    value: '+65 9645 8117',
    href: 'tel:+6596458117',
    icon: faPhone,
    flag: '🇸🇬',
  },
  {
    id: 'phone-my',
    label: 'Phone (MY)',
    value: '+60 18-394 4253',
    href: 'tel:+60183944253',
    icon: faPhone,
    flag: '🇲🇾',
  },
];

export default function ContactPage() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className={styles.section}>
      
      {/* HERO */}
      <div className={styles.headingWrapperCentered}>
        <div className={styles.topIcon}>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>

        <h2 className={`${styles.heroTitle} ${ovo.className}`}>
          Let’s Connect
        </h2>

        <div className={styles.heroUnderline} />

        <p className={styles.heroSubtitle}>
          Interested in working together? Feel free to reach out!
        </p>
      </div>

      {/* GRID */}
      <div className={styles.grid}>

        {/* LEFT: CONTACT DETAILS */}
        <div className={styles.card}>
          <div className={styles.accentLine} />

          <div className={styles.cardBody}>
            <div className={styles.contactList}>
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={styles.contactItem}
                >
                  <div className={styles.iconWrap}>
                    {link.flag ? (
                      <span className={styles.flag}>{link.flag}</span>
                    ) : (
                      <FontAwesomeIcon icon={link.icon} />
                    )}
                  </div>

                  <div className={styles.textWrap}>
                    <span className={styles.label}>{link.label}</span>
                    <span className={styles.value}>{link.value}</span>
                  </div>

                  <div className={styles.arrow}>→</div>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.availability}>
            <span className={styles.pulseDot} />
            <span>Available for freelance & full-time roles</span>
          </div>

          <div className={styles.accentLine} />
        </div>

        {/* RIGHT: FORM */}
        <div className={styles.card}>
          <div className={styles.accentLine} />

          <div className={styles.cardBody}>
            <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>

              <div className={styles.row}>
                <input name="name" placeholder="Your name" value={formData.name} onChange={handleChange} className={styles.input} required />
                <input name="email" type="email" placeholder="Your email" value={formData.email} onChange={handleChange} className={styles.input} required />
              </div>

              <input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className={styles.input} required />

              <textarea name="message" rows={5} placeholder="Your message..." value={formData.message} onChange={handleChange} className={styles.textarea} required />

              <button type="submit" disabled={status === 'sending'} className={styles.submitBtn}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && <p className={styles.successMsg}>Message sent successfully.</p>}
              {status === 'error' && <p className={styles.errorMsg}>Failed to send. Try again.</p>}
            </form>
          </div>

          <div className={styles.accentLine} />
        </div>

      </div>
    </section>
  );
}