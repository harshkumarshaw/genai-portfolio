import styles from './ImpactTag.module.css';
import { TrendingUp } from 'lucide-react';

export function ImpactTag({ children, className = '' }) {
  return (
    <div className={`${styles.tag} ${className}`}>
      <TrendingUp size={12} className={styles.icon} />
      <span className={styles.text}>{children}</span>
    </div>
  );
}
