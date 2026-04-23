'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Badge } from './Badge';
import { ImpactTag } from './ImpactTag';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // subtle tilt effect: max 5 degrees
    const rotateXValue = ((y - centerY) / centerY) * -5;
    const rotateYValue = ((x - centerX) / centerX) * 5;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ perspective: 1000 }}
      className={styles.cardWrapper}
    >
      <Link href={project.caseStudyUrl || '#'} className={styles.card}>
        <div className={styles.glow} />
        
        <div className={styles.header}>
          <div className={styles.categoryInfo}>
            <span className={styles.category}>{project.category}</span>
          </div>
          {project.metrics && project.metrics.length > 0 && (
            <ImpactTag metric={project.metrics[0]} />
          )}
        </div>
        
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.impact}>{project.description}</p>
        
        <div className={styles.techStack}>
          {project.tags && project.tags.map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
        
        <div className={styles.footer}>
          <span className={styles.viewLink}>View Case Study →</span>
        </div>
      </Link>
    </motion.div>
  );
}
