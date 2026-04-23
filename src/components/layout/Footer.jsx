import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>HARSH.</span>
            <p className={styles.tagline}>Building GenAI systems for real-world impact.</p>
          </div>
          
          <div className={styles.socials}>
            <a href="https://github.com/harshkumarshaw" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
            <a href="https://linkedin.com/in/harshkumarshaw" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://x.com/Scientist_Harsh" target="_blank" rel="noopener noreferrer" aria-label="Twitter">X</a>
            <a href="mailto:kumarharshshaw@gmail.com" aria-label="Email">Email</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; {currentYear} Harsh Kumar Shaw. All rights reserved.</p>
          <div className={styles.links}>
            <p className={styles.builtWith}>Built with Next.js 15 & Framer Motion</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
