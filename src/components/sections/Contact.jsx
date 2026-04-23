'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
          <div className={styles.badge}>WHAT'S NEXT?</div>
          
          <h2 className={styles.title}>Let's build something together.</h2>
          
          <p className={styles.description}>
            I'm currently open for new opportunities and collaborations. 
            Whether you have a question, a project idea, or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          
          <div className={styles.actions}>
            <Button href="mailto:kumarharshshaw@gmail.com?subject=Full-Time Engineering Role" variant="primary" className={styles.ctaButton}>
              Hire for Full-Time
            </Button>
            <Button href="mailto:kumarharshshaw@gmail.com?subject=Freelance / Contract Inquiry" variant="outline" className={styles.ctaButton}>
              Contract / Freelance
            </Button>
            <Button href="#resume" variant="ghost" className={styles.ctaButton}>
              Download Resumes ↓
            </Button>
          </div>
          
          <div className={styles.socialRow}>
            <a href="https://github.com/harshkumarshaw" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
            <span className={styles.separator}>·</span>
            <a href="https://linkedin.com/in/harshkumarshaw" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
            <span className={styles.separator}>·</span>
            <a href="https://x.com/Scientist_Harsh" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>X</a>
            <span className={styles.separator}>·</span>
            <a href="mailto:kumarharshshaw@gmail.com" className={styles.socialLink}>Email</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
