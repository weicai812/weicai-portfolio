'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../../pages/resume/style.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faDownload } from '@fortawesome/free-solid-svg-icons';

export default function ResumePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [pdfUrl, setPdfUrl] = useState(null);

  const blobUrlRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/Resume.pdf', true);
    xhr.responseType = 'blob';

    xhr.onprogress = (event) => {
      if (event.lengthComputable) {
        setProgress(Math.round((event.loaded / event.total) * 100));
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        const blob = xhr.response;
        const url = URL.createObjectURL(blob);

        blobUrlRef.current = url;
        setPdfUrl(url);
        setLoading(false);
      }
    };

    xhr.onerror = () => {
      setLoading(false);
    };

    xhr.send();

    return () => {
      window.removeEventListener('resize', checkMobile);

      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }
    };
  }, []);

  const handleFullscreen = () => {
    const el = document.getElementById('pdfViewer');
    if (!el) return;

    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
  };

  const handleDownload = (e) => {
    if (loading || !pdfUrl) {
      e.preventDefault();
    }
  };

  const downloadLabel = loading
    ? `Preparing Resume... ${progress}%`
    : 'Download Resume';

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <div className={styles.header}>
        {!isMobile && <h1 className={styles.title}>Resume</h1>}

        <div className={styles.actions}>
          {!isMobile && (
            <button
              className={styles.fullscreenBtn}
              onClick={handleFullscreen}
            >
              <FontAwesomeIcon icon={faExpand} />
              <span>Fullscreen</span>
            </button>
          )}

          {!isMobile && (
            <a
              href={pdfUrl || '#'}
              download
              onClick={handleDownload}
              className={`${styles.downloadBtn} ${loading ? styles.disabledBtn : ''}`}
            >
              <FontAwesomeIcon icon={faDownload} />
              <span className={styles.btnText}>{downloadLabel}</span>
            </a>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        {isMobile ? (
          <div className={styles.mobileWrapper}>
            <div className={styles.mobileIcon}>📱</div>

            <p className={styles.mobileText}>
              <strong>Mobile Device Detected</strong>
              <br />
              For best experience, please download the resume and open it in your PDF reader.
            </p>

            <a
              href={pdfUrl || '#'}
              download
              onClick={handleDownload}
              className={`${styles.downloadBtn} ${loading ? styles.disabledBtn : ''}`}
            >
              <FontAwesomeIcon icon={faDownload} />
              <span className={styles.btnText}>{downloadLabel}</span>
            </a>
          </div>
        ) : (
          <div className={styles.viewerWrapper}>
            {loading ? (
              <div className={styles.loader}>
                <p>Preparing Resume... {progress}%</p>

                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            ) : (
              <iframe
                id="pdfViewer"
                src={pdfUrl}
                className={styles.viewer}
                title="Resume PDF"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}