'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './Experience.module.css';
import experienceData from '@/data/experience.json';

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading title="Experience" subtitle="git log --oneline" />
        
        <div className={styles.terminalWrapper}>
          <div className={styles.terminalBar}>
            <span className={styles.terminalBarText}>~/career</span>
          </div>
          <div className={styles.terminalContent}>
            {experienceData.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className={styles.logEntry}
              >
                <div className={styles.logHash}>
                  <span className={styles.hash}>{`${(index + 1).toString(16).padStart(7, 'a0b3c')}`}</span>
                </div>
                <div className={styles.logBody}>
                  <div className={styles.logHeader}>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <span className={styles.duration}>{exp.duration}</span>
                  </div>
                  <div className={styles.company}>@ {exp.company}</div>
                  <ul className={styles.bullets}>
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
            <div className={styles.logEnd}>
              <span className={styles.endCursor}>▊</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
