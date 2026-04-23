'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import ParticleBackground from '@/components/ui/ParticleBackground';
import styles from './Hero.module.css';

const STATS = [
  { value: '2', label: 'Papers Published' },
  { value: '9+', label: 'Projects Shipped' },
  { value: '8.6', label: 'CGPA' },
];

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
      <ParticleBackground />

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
            I engineer <strong>privacy-first AI</strong> that lives on-device, translate
            natural language into <strong>enterprise SQL at scale</strong>, and apply deep
            learning to accelerate <strong>drug discovery</strong> — all shipped to production.
          </motion.p>

          {/* CTA Row */}
          <motion.div variants={itemVariants} className={styles.actions}>
            <Button href="#projects" variant="primary">View Projects</Button>
            <Button href="/projects/nl2bq" variant="outline">Case Study ↗</Button>
            <a href="https://github.com/harshkumarshaw" target="_blank" rel="noopener noreferrer" className={styles.ghostLink}>
              GitHub ↗
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={itemVariants} className={styles.stats}>
            {STATS.map((s, i) => (
              <div key={i} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
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
