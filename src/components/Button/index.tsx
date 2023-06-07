import React from 'react';
import styles from './styles.module.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  className?: string;
  onClick?: () => void;
}

function Button({ children, type = 'button', className, onClick, ...rest }: IButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
