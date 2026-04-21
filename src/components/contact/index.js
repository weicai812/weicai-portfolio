'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faPaperPlane, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Ovo } from 'next/font/google';
import styles from './style.module.css';

const ovo = Ovo({ weight: ['400'], subsets: ['latin'], display: 'swap' });

const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

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
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className={styles.section}>

      {/* ── Heading ── */}
      <div className={styles.headingWrapper}>
        <h2 className={`${styles.heading} ${ovo.className}`}>Contact.</h2>
        <p className={styles.subheading}>
          Have a project or opportunity in mind? Reach out — I&apos;ll get back within 24 hours.
        </p>
      </div>

      {/* ── Grid ── */}
      <div className={styles.grid}>

        {/* ── Left: Info Card ── */}
        <div className={styles.card}>
          <div className={styles.accentLine} />


          <div className={styles.cardBody}>

            {CONTACT_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <span className={styles.iconBox}>
                  {link.flag
                    ? <span className={styles.flag}>{link.flag}</span>
                    : <FontAwesomeIcon icon={link.icon} className={styles.linkIcon} />
                  }
                </span>
                <span className={styles.linkText}>
                  <span className={styles.linkLabel}>{link.label}</span>
                  <span className={styles.linkValue}>{link.value}</span>
                </span>
                <svg className={styles.arrow} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" width="13" height="13">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            ))}
          </div>

          <div className={styles.availability}>
            <span className={styles.pulseDot} />
            <span className={styles.availabilityText}>Available for freelance &amp; full-time roles</span>
          </div>

          <div className={styles.accentLine} />
        </div>

        {/* ── Right: Form Card ── */}
        <div className={styles.card}>
          <div className={styles.accentLine} />

          <div className={styles.cardBody}>

            <form ref={formRef} onSubmit={handleSubmit} className={styles.form} noValidate>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>
                    <span className={styles.codePink}>name</span>
                    <span className={styles.codeGray}>:</span>
                  </label>
                  <input id="name" name="name" type="text" required placeholder="Jane Doe"
                    value={formData.name} onChange={handleChange} className={styles.input} autoComplete="name" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>
                    <span className={styles.codePink}>email</span>
                    <span className={styles.codeGray}>:</span>
                  </label>
                  <input id="email" name="email" type="email" required placeholder="jane@example.com"
                    value={formData.email} onChange={handleChange} className={styles.input} autoComplete="email" />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="subject" className={styles.label}>
                  <span className={styles.codePink}>subject</span>
                  <span className={styles.codeGray}>:</span>
                </label>
                <input id="subject" name="subject" type="text" required placeholder="Project inquiry / collaboration"
                  value={formData.subject} onChange={handleChange} className={styles.input} />
              </div>

              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>
                  <span className={styles.codePink}>message</span>
                  <span className={styles.codeGray}>:</span>
                </label>
                <textarea id="message" name="message" required rows={5}
                  placeholder="Tell me about your project or just say hi..."
                  value={formData.message} onChange={handleChange} className={styles.textarea} />
              </div>

              <button type="submit" disabled={status === 'sending'} className={styles.submitBtn}>
                {status === 'sending' ? (
                  <><span className={styles.spinner} /> Sending…</>
                ) : (
                  <><FontAwesomeIcon icon={faPaperPlane} /> Send Message</>
                )}
              </button>

              {status === 'success' && (
                <p className={styles.successMsg}>
                  <FontAwesomeIcon icon={faCircleCheck} /> Message sent! I&apos;ll reply soon.
                </p>
              )}
              {status === 'error' && (
                <p className={styles.errorMsg}>
                  <FontAwesomeIcon icon={faCircleXmark} /> Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>

          <div className={styles.accentLine} />
        </div>

      </div>
    </section>
  );
}