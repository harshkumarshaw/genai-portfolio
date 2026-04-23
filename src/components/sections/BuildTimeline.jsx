'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import styles from './BuildTimeline.module.css';
import timelineData from '@/data/timeline.json';

export default function BuildTimeline() {
  return (
    <section id="timeline" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading title="What I've Built" subtitle="Output over tenure" />
        
        <div className={styles.timeline}>
          <div className={styles.line} />
          
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            const alignClass = isEven ? styles.left : styles.right;
            const markerClass = item.isMajor ? styles.markerGold : styles.markerStandard;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className={`${styles.item} ${alignClass}`}
              >
                <div className={`${styles.marker} ${markerClass}`} />
                
                <div className={styles.content}>
                  <div className={styles.header}>
                    <span className={styles.year}>{item.year}</span>
                    <span className={styles.category}>{item.category}</span>
                  </div>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
