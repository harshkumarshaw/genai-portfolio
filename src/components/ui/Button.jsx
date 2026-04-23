import Link from 'next/link';
import styles from './Button.module.css';

export function Button({ 
  children, 
  variant = 'primary', 
  href, 
  className = '', 
  onClick, 
  type = 'button',
  disabled = false,
  ...props 
}) {
  const combinedClassName = `${styles.button} ${styles[variant]} ${className}`.trim();

  if (href) {
    // If it's an external link or mailto
    if (href.startsWith('http') || href.startsWith('mailto')) {
      return (
        <a href={href} className={combinedClassName} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} {...props}>
          {children}
        </a>
      );
    }
    
    // Internal Next.js link
    return (
      <Link href={href} className={combinedClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      className={combinedClassName} 
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
