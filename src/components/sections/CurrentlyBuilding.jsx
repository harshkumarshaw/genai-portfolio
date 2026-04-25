'use client';

import { useRef, useEffect } from 'react';
import styles from './CurrentlyBuilding.module.css';
import { Badge } from '@/components/ui/Badge';

export default function CurrentlyBuilding() {
  const items = [
    { text: 'VaultCall — Privacy-First AI Dialer', status: 'In Development', href: '#projects' },
    { text: 'HCC-AI — 6-Phase AI Drug Discovery Pipeline', status: 'Active Research', href: '#research' },
  ];

  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId;
    let position = 0;

    const animate = () => {
      position -= 0.5;
      const firstChild = track.firstElementChild;
      if (firstChild && Math.abs(position) >= firstChild.offsetWidth + 32) {
        position += firstChild.offsetWidth + 32;
        track.appendChild(firstChild);
      }
      track.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Repeat items enough for seamless loop
  const repeatedItems = [...items, ...items, ...items, ...items, ...items, ...items];

  return (
    <div className={styles.strip}>
      <div className={styles.container}>
        <div className={styles.label}>
          <span className={styles.dot} />
          Currently Building:
        </div>
        <div className={styles.marqueeContainer}>
          <div ref={trackRef} className={styles.items}>
            {repeatedItems.map((item, i) => (
              <a key={i} href={item.href} className={styles.item}>
                <span className={styles.text}>{item.text}</span>
                <Badge variant="blue" className={styles.badge}>{item.status}</Badge>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
