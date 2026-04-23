'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './Research.module.css';
import researchData from '@/data/research.json';

const StatusPill = ({ status }) => {
  const getStatusClass = (status) => {
    switch(status.toLowerCase()) {
      case 'concept': return styles.statusConcept;
      case 'prototype': return styles.statusPrototype;
      case 'paper-ready': return styles.statusPaperReady;
      default: return '';
    }
  };

  return (
    <span className={`${styles.statusPill} ${getStatusClass(status)}`}>
      {status}
    </span>
  );
};

export default function Research() {
  return (
    <section id="research" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading title="Research" subtitle="Exploring the edges" />
        
        <div className={styles.focusBlock}>
          <h3 className={styles.focusTitle}>Current Research Focus</h3>
          <p className={styles.focusText}>
            Investigating advanced architectures for robust AI decision-making in high-stakes environments, exploring the intersection of large language models, structured knowledge representation, and dynamic validation pipelines.
          </p>
        </div>
        
        <div className={styles.researchList}>
          {researchData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.01 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={styles.researchItem}
            >
              <div className={styles.header}>
                <h4 className={styles.title}>{item.title}</h4>
                <StatusPill status={item.status} />
              </div>
              
              <p className={styles.abstract}>{item.abstract}</p>
              
              <div className={styles.footer}>
                {item.appliedIn && (
                  <div className={styles.appliedLink}>
                    Applied in: <span className={styles.appliedTarget}>{item.appliedIn}</span>
                  </div>
                )}
                {item.link && (
                  <Link href={item.link} className={styles.paperLink}>
                    Read Paper →
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
