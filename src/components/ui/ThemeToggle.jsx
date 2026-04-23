'use client';

import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className={styles.toggle} 
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className={`${styles.icon} ${theme === 'light' ? styles.active : ''}`}>
        <Sun size={20} />
      </div>
      <div className={`${styles.icon} ${theme === 'dark' ? styles.active : ''}`}>
        <Moon size={20} />
      </div>
    </button>
  );
}
