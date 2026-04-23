'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './Skills.module.css';
import skillsData from '@/data/skills.json';

// We'd use actual icons from lucide-react if imported, but using simple div for now
// or text representation if icons are not available.
const SkillCategory = ({ category, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className={styles.categoryColumn}
    >
      <h3 className={styles.categoryTitle}>{category.name}</h3>
      <div className={styles.skillList}>
        {category.items.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <div className={styles.skillHeader}>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
            {skill.usedIn && (
              <span className={styles.usedIn}>Used in: {skill.usedIn}</span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading title="Skills" subtitle="Contextual proof" />
        
        <div className={styles.skillsGrid}>
          {skillsData.map((category, index) => (
            <SkillCategory key={index} category={category} delay={index * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
