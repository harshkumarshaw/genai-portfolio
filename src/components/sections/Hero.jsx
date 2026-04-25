'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import styles from './Hero.module.css';
import Link from 'next/link';

const TERMINAL_LINES = [
  { type: 'command', text: '> harsh.init()', delay: 0 },
  { type: 'output', text: '⠋ Loading modules...', delay: 600 },
  { type: 'output', text: '✓ LangGraph orchestrator', delay: 1000 },
  { type: 'output', text: '✓ Claude reasoning engine', delay: 1300 },
  { type: 'output', text: '✓ BigQuery pipelines', delay: 1600 },
  { type: 'output', text: '✓ On-device inference layer', delay: 1900 },
  { type: 'success', text: '▸ Ready. Building systems that scale.', delay: 2400 },
];

function TypedText({ text, onComplete, speed = 35 }) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setDone(true);
        onComplete?.();
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span>
      {displayed}
      {!done && <span className={styles.cursor}>▊</span>}
    </span>
  );
}

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState([]);
  const [terminalDone, setTerminalDone] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    TERMINAL_LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, line]);
        if (i === TERMINAL_LINES.length - 1) {
          setTimeout(() => {
            setTerminalDone(true);
            setTimeout(() => setShowContent(true), 300);
          }, 800);
        }
      }, line.delay);
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className={styles.hero}>
      {/* Ambient glow orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />
      <div className={styles.gridOverlay} />

      <div className={styles.container}>
        {/* Terminal — the "wow moment" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.terminal}
        >
          <div className={styles.terminalHeader}>
            <div className={styles.terminalDots}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
            </div>
            <span className={styles.terminalTitle}>harsh@portfolio ~ </span>
          </div>
          <div className={styles.terminalBody}>
            {visibleLines.map((line, i) => (
              <div
                key={i}
                className={`${styles.terminalLine} ${styles[`terminal${line.type.charAt(0).toUpperCase() + line.type.slice(1)}`]}`}
              >
                {line.type === 'command' ? (
                  <TypedText text={line.text} speed={50} />
                ) : (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {line.text}
                  </motion.span>
                )}
              </div>
            ))}
            {terminalDone && (
              <div className={styles.terminalLine}>
                <span className={styles.cursorBlink}>▊</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Main Content — appears after terminal */}
        <AnimatePresence>
          {showContent && (
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
          )}
        </AnimatePresence>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className={styles.scrollIndicator}
      >
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
      </motion.div>
    </section>
  );
}
