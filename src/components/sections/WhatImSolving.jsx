'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Activity, Zap, Cpu } from 'lucide-react';
import styles from './WhatImSolving.module.css';

export default function WhatImSolving() {
  const domains = [
    {
      icon: <Activity size={32} />,
      title: "Natural Language to Enterprise SQL",
      description: "Enabling non-technical business users to query enterprise data warehouses without SQL knowledge."
    },
    {
      icon: <Zap size={32} />,
      title: "Privacy-First AI Systems",
      description: "Building AI systems with real privacy guarantees—moving inference away from cloud APIs to on-device infrastructure."
    },
    {
      icon: <Cpu size={32} />,
      title: "AI Drug Discovery Acceleration",
      description: "Accelerating drug discovery for rare diseases by applying SOTA deep learning in a structured, reproducible pipeline."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="solving" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading 
          subtitle="Problem Ownership"
          title="What I'm Solving"
          align="center"
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={styles.grid}
        >
          {domains.map((domain, i) => (
            <motion.div key={i} variants={itemVariants} className={styles.card}>
              <div className={styles.iconWrapper}>
                {domain.icon}
              </div>
              <h3 className={styles.cardTitle}>{domain.title}</h3>
              <p className={styles.cardText}>{domain.description}</p>
              <div className={styles.cardGlow} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
