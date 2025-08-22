import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick, variant, className }) => {
  const variantClass = variant === 'primary' ? styles.primary : styles.secondary;

  return (
    <button
      className={`${styles.btn} ${variantClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;