'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, LayoutGrid, MessageSquare } from 'lucide-react';
import styles from './QuickJump.module.css';

export default function QuickJump() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsExpanded(false);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className={styles.wrapper}>
          <AnimatePresence>
            {isExpanded && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className={styles.menu}
              >
                <button onClick={() => scrollTo('projects')} className={styles.menuItem}>
                  <LayoutGrid size={18} />
                  <span>Projects</span>
                </button>
                <button onClick={() => scrollTo('contact')} className={styles.menuItem}>
                  <MessageSquare size={18} />
                  <span>Contact</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsExpanded(!isExpanded)}
            onDoubleClick={scrollToTop}
            className={`${styles.mainBtn} ${isExpanded ? styles.active : ''}`}
            aria-label="Quick navigation"
          >
            <ArrowUp size={24} className={isExpanded ? styles.rotate : ''} />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
