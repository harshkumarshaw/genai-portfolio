'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import styles from './Hero.module.css';

import Link from 'next/link';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className={styles.hero}>

      {/* Ambient glow orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.gridOverlay} />

      <div className={styles.container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={styles.content}
        >
          {/* Eyebrow badge */}
          <motion.div variants={itemVariants} className={styles.badge}>
            <span className={styles.badgeDot} />
            <span className={styles.badgeText}>GenAI Engineer & Researcher</span>
            <span className={styles.badgePill}>Open to Roles</span>
          </motion.div>

          {/* Name */}
          <motion.p variants={itemVariants} className={styles.name}>
            Harsh Kumar Shaw
          </motion.p>

          {/* Main headline */}
          <motion.h1 variants={itemVariants} className={styles.title}>
            Building systems that{' '}
            <span className={styles.highlight}>reason,</span>{' '}
            <span className={styles.highlight2}>automate,</span>
            <br />
            and <span className={styles.highlight}>scale.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className={styles.subtitle}>
            I build production-grade AI systems—from <strong>enterprise SQL generation</strong> to <strong>privacy-first on-device inference</strong>—focusing on architectural scale and measurable business impact.
          </motion.p>

          {/* CTA Row */}
          <motion.div variants={itemVariants} className={styles.actions}>
            <Button href="#projects" variant="primary">View Projects</Button>
            <Button href="/projects/nl2bq" variant="outline">Case Study ↗</Button>
            <a href="https://github.com/harshkumarshaw" target="_blank" rel="noopener noreferrer" className={styles.ghostLink}>
              GitHub ↗
            </a>
          </motion.div>

          {/* Flagship Callout */}
          <motion.div variants={itemVariants} className={styles.flagshipPreview}>
            <div className={styles.flagshipHeader}>
              <span className={styles.flagshipBadge}>Live System Impact</span>
            </div>
            <p className={styles.flagshipText}>
              <strong>NL2BQ Pipeline:</strong> Reduced enterprise SQL query generation time by 40-50% using a LangGraph + Claude orchestration layer.
            </p>
            <Link href="/projects/nl2bq" className={styles.flagshipLink}>
              Read the Case Study ↗
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className={styles.scrollIndicator}
      >
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
      </motion.div>
    </section>
  );
}
