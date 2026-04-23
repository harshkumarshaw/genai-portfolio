'use client';

import { motion } from 'framer-motion';
import styles from './CurrentlyBuilding.module.css';
import { Badge } from '@/components/ui/Badge';

export default function CurrentlyBuilding() {
  const items = [
    { text: 'VaultCall — Privacy-First AI Dialer', status: 'In Development', href: '#projects' },
    { text: 'HCC-AI — 6-Phase AI Drug Discovery Pipeline', status: 'Active Research', href: '#research' },
  ];

  return (
    <div className={styles.strip}>
      <div className={styles.container}>
        <div className={styles.label}>
          <span className={styles.dot} />
          Currently Building:
        </div>
        <div className={styles.marqueeContainer}>
          <motion.div 
            className={styles.items}
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          >
            {[...items, ...items, ...items, ...items].map((item, i) => (
              <a key={i} href={item.href} className={styles.item}>
                <span className={styles.text}>{item.text}</span>
                <Badge variant="blue" className={styles.badge}>{item.status}</Badge>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
