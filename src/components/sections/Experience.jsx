'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './Experience.module.css';
import experienceData from '@/data/experience.json';

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading title="Experience" subtitle="Professional foundation" />
        
        <div className={styles.experienceList}>
          {experienceData.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ x: 8 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={styles.experienceItem}
            >
              <div className={styles.header}>
                <div>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <div className={styles.company}>{exp.company}</div>
                </div>
                <div className={styles.duration}>{exp.duration}</div>
              </div>
              
              <ul className={styles.bullets}>
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
