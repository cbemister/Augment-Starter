import React from 'react';
import styles from './Card.module.css';

export interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'flat';
  padding?: 'compact' | 'default' | 'spacious';
  interactive?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardActionsProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right' | 'between';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'default',
  interactive = false,
  className = '',
  children,
  onClick,
}) => {
  const cardClasses = [
    styles.card,
    variant !== 'default' && styles[variant],
    padding !== 'default' && styles[padding],
    interactive && styles.interactive,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const CardComponent = interactive ? 'button' : 'div';

  return (
    <CardComponent className={cardClasses} onClick={onClick}>
      {children}
    </CardComponent>
  );
};

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => (
  <div className={`${styles.header} ${className}`}>{children}</div>
);

export const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => (
  <div className={`${styles.body} ${className}`}>{children}</div>
);

export const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => (
  <div className={`${styles.footer} ${className}`}>{children}</div>
);

export const CardTitle: React.FC<CardTitleProps> = ({ children, className = '' }) => (
  <h3 className={`${styles.title} ${className}`}>{children}</h3>
);

export const CardSubtitle: React.FC<CardSubtitleProps> = ({ children, className = '' }) => (
  <p className={`${styles.subtitle} ${className}`}>{children}</p>
);

export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => (
  <div className={`${styles.content} ${className}`}>{children}</div>
);

export const CardActions: React.FC<CardActionsProps> = ({ 
  children, 
  align = 'right', 
  className = '' 
}) => (
  <div className={`${styles.actions} ${styles[align]} ${className}`}>
    {children}
  </div>
);

export default Card;
