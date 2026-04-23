'use client';

import { motion } from 'framer-motion';
import styles from './CategoryTabs.module.css';

export default function CategoryTabs({ categories, activeCategory, onSelect }) {
  return (
    <div className={styles.tabsContainer}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.tab} ${activeCategory === category ? styles.active : ''}`}
          onClick={() => onSelect(category)}
        >
          {category}
          {activeCategory === category && (
            <motion.div
              layoutId="activeTabUnderline"
              className={styles.underline}
              initial={false}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
