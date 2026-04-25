'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './About.module.css';

function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const stats = [
    { value: 10, suffix: '+', label: 'Production Systems Built' },
    { value: 50, suffix: '%', label: 'Query Time Reduction (NL2BQ)' },
    { value: 3, suffix: '', label: 'Active Research Domains' },
    { value: 86, suffix: '%', label: 'ML Model Accuracy' },
  ];

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        {/* Left: Statement */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={styles.statement}
        >
          <span className={styles.eyebrow}>Philosophy & Approach</span>
          <h2 className={styles.title}>
            I don't just train models.
            <br />
            <span className={styles.titleAccent}>I architect systems.</span>
          </h2>
          <p className={styles.description}>
            Moving beyond experimentation to production-grade AI infrastructure. 
            Every project I ship is designed for real-world scale, validated against 
            business metrics, and built to survive in production environments where 
            "it works on my machine" isn't good enough.
          </p>
          <div className={styles.pillRow}>
            <span className={styles.pill}>Orchestration Design</span>
            <span className={styles.pill}>System Architecture</span>
            <span className={styles.pill}>Production Validation</span>
          </div>
        </motion.div>

        {/* Right: Stats Grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className={styles.statsGrid}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className={styles.statCard}
            >
              <div className={styles.statValue}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
