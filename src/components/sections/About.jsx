'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './About.module.css';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading title="About Me" subtitle="Philosophy & Approach" />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={styles.grid}
        >
          {/* Engineering Evolution */}
          <motion.div variants={itemVariants} className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 className={styles.cardTitle}>Engineering Evolution</h3>
            <p className={styles.cardText}>
              I transitioned from academic ML projects to full-scale AI system design involving orchestration, validation, and deployment. I don't just train models—I think in terms of complete systems, infrastructure planning, and real-world architectures.
            </p>
          </motion.div>

          {/* Work Ethic */}
          <motion.div variants={itemVariants} className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <h3 className={styles.cardTitle}>Execution Style</h3>
            <p className={styles.cardText}>
              A strong self-driven learning approach allows me to independently build complex systems. I thrive when balancing multiple parallel projects with long execution cycles, focusing entirely on building real-world solutions rather than theoretical implementations.
            </p>
          </motion.div>

          {/* Leadership & Education */}
          <motion.div variants={itemVariants} className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3 className={styles.cardTitle}>Leadership & Foundation</h3>
            <p className={styles.cardText}>
              I led student initiatives under the AICTE IDEA Lab and IIC, mentoring peers in project development. Holding a B.Tech in CSE (8.6 CGPA, 2024), my foundation is rooted in computer science fundamentals, algorithms, and systems.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
