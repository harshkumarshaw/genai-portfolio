'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from './Badge';
import { ImpactTag } from './ImpactTag';
import { Button } from './Button';
import styles from './FlagshipCard.module.css';

export default function FlagshipCard({ project }) {
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
    
    // subtle tilt effect: max 3 degrees for the flagship card
    const rotateXValue = ((y - centerY) / centerY) * -3;
    const rotateYValue = ((x - centerX) / centerX) * 3;
    
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
      <div className={styles.card}>
        <div className={styles.glow} />
        
        <div className={styles.imageContainer}>
          {project.image ? (
            <Image 
              src={project.image} 
              alt={project.title || "Project Image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
              className={styles.image}
              priority
            />
          ) : (
            <div className={styles.imagePlaceholder} />
          )}
          <div className={styles.imageOverlay} />
        </div>

        <div className={styles.content}>
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
          
          <div className={styles.actions}>
            <Button href={project.caseStudyUrl || '#'} variant="primary">
              View Case Study
            </Button>
            {project.links && project.links.find(l => l.label === 'GitHub') && (
              <Button href={project.links.find(l => l.label === 'GitHub').url} variant="ghost">
                View Source
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
