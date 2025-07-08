# CSS Modules + Custom Design System Guide

**Version**: 1.0  
**Created**: July 2025  
**Purpose**: Comprehensive guide for using CSS Modules with our custom design system

## Overview

This project uses CSS Modules instead of Tailwind CSS to provide scoped styling with a custom design system built on CSS custom properties (design tokens). This approach offers better maintainability, type safety, and performance while maintaining design consistency.

## Key Benefits

### 1. **Scoped Styles**
- No global CSS conflicts
- Component-specific styling
- Better maintainability

### 2. **Type Safety**
- TypeScript integration for CSS class names
- Compile-time error checking
- IntelliSense support

### 3. **Performance**
- Only used styles are included in the bundle
- No unused CSS bloat
- Optimized for production builds

### 4. **Design Consistency**
- Centralized design tokens
- Consistent spacing, colors, and typography
- Easy theme customization

## Design Token System

### Color Palette
Our design system uses semantic color naming with CSS custom properties:

```css
/* Primary Colors */
--color-primary-50: #f8fafc;
--color-primary-500: #64748b;
--color-primary-600: #475569;

/* Semantic Colors */
--color-success-500: #22c55e;
--color-warning-500: #f59e0b;
--color-error-500: #ef4444;
--color-info-500: #3b82f6;
```

### Typography Scale
```css
/* Font Families */
--font-family-sans: 'Inter', system-ui, sans-serif;
--font-family-mono: 'JetBrains Mono', monospace;

/* Font Sizes */
--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-base: 1rem;
--font-size-lg: 1.125rem;
--font-size-xl: 1.25rem;
```

### Spacing System
```css
/* Spacing Scale */
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 0.75rem;   /* 12px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.5rem;    /* 24px */
--spacing-xl: 2rem;      /* 32px */
--spacing-2xl: 3rem;     /* 48px */
```

## Component Development Patterns

### 1. Basic Component Structure

```typescript
// Button.tsx
import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  ...props
}) => {
  return (
    <button 
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      {...props}
    >
      {children}
    </button>
  );
};
```

```css
/* Button.module.css */
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family-sans);
  font-weight: var(--font-weight-medium);
  border: 1px solid transparent;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.primary {
  background-color: var(--color-primary-600);
  color: var(--color-white);
}

.secondary {
  background-color: var(--color-white);
  color: var(--color-primary-600);
  border-color: var(--color-primary-600);
}

.small {
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: var(--font-size-sm);
}

.medium {
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--font-size-base);
}

.large {
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--font-size-lg);
}
```

### 2. Conditional Class Names

```typescript
// Using a utility function for conditional classes
const getButtonClasses = (variant: string, size: string, disabled: boolean) => {
  return [
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
  ].filter(Boolean).join(' ');
};

// Usage
<button className={getButtonClasses('primary', 'medium', false)}>
  Click me
</button>
```

### 3. Combining with Utility Classes

```typescript
// Import utility classes
import utilStyles from '@/styles/utilities.module.css';
import styles from './Card.module.css';

// Combine component and utility classes
<div className={`${styles.card} ${utilStyles.shadow} ${utilStyles.rounded}`}>
  <div className={`${styles.header} ${utilStyles.borderBottom}`}>
    <h3 className={utilStyles.textLg}>Card Title</h3>
  </div>
  <div className={styles.body}>
    Card content
  </div>
</div>
```

## Common Patterns and Examples

### 1. Layout Components

```css
/* Layout.module.css */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.header {
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-neutral-200);
  box-shadow: var(--shadow-sm);
}

.main {
  min-height: calc(100vh - 120px);
  padding: var(--spacing-2xl) 0;
}

.footer {
  background-color: var(--color-neutral-100);
  padding: var(--spacing-xl) 0;
  text-align: center;
}
```

### 2. Form Components

```css
/* Input.module.css */
.inputGroup {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-neutral-700);
}

.input {
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-neutral-300);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  transition: border-color var(--transition-fast);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary-500);
  box-shadow: var(--focus-ring);
}

.error .input {
  border-color: var(--color-error-500);
}
```

### 3. Responsive Design

```css
/* Card.module.css */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}

/* Mobile-first responsive design */
.card {
  padding: var(--spacing-md);
}

@media (min-width: 768px) {
  .card {
    padding: var(--spacing-lg);
  }
}

@media (min-width: 1024px) {
  .card {
    padding: var(--spacing-xl);
  }
}
```

## Best Practices

### 1. **Naming Conventions**
- Use descriptive, semantic class names
- Follow BEM-like naming for modifiers
- Keep names consistent across components

```css
/* Good */
.button { }
.buttonPrimary { }
.buttonLarge { }
.buttonDisabled { }

/* Avoid */
.btn { }
.blue { }
.big { }
```

### 2. **Design Token Usage**
- Always use design tokens for consistent values
- Avoid hardcoded values in component styles
- Use semantic color names over specific colors

```css
/* Good */
.button {
  background-color: var(--color-primary-600);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--border-radius-md);
}

/* Avoid */
.button {
  background-color: #475569;
  padding: 12px 24px;
  border-radius: 6px;
}
```

### 3. **Component Composition**
- Create small, reusable components
- Use composition over large monolithic components
- Leverage utility classes for common patterns

### 4. **TypeScript Integration**
- Use typed CSS modules for better developer experience
- Generate type definitions for CSS classes
- Leverage IntelliSense for class name completion

## Migration from Tailwind CSS

### Common Tailwind to CSS Modules Conversions

| Tailwind Class | CSS Modules Equivalent |
|----------------|------------------------|
| `bg-blue-500` | `background-color: var(--color-primary-500)` |
| `text-lg` | `font-size: var(--font-size-lg)` |
| `p-4` | `padding: var(--spacing-md)` |
| `rounded-md` | `border-radius: var(--border-radius-md)` |
| `shadow-lg` | `box-shadow: var(--shadow-lg)` |
| `flex items-center` | `display: flex; align-items: center` |

### Migration Strategy
1. **Identify Tailwind patterns** in existing components
2. **Create equivalent CSS Module classes** using design tokens
3. **Replace Tailwind classes** with CSS Module imports
4. **Test thoroughly** to ensure visual consistency
5. **Remove Tailwind dependencies** once migration is complete

## Troubleshooting

### Common Issues

#### 1. **Class Names Not Applying**
- Ensure CSS Module file is imported correctly
- Check that class names match exactly (case-sensitive)
- Verify CSS Module file has `.module.css` extension

#### 2. **Design Tokens Not Working**
- Ensure `design-tokens.css` is imported in your layout
- Check CSS custom property syntax (double dashes)
- Verify token names match exactly

#### 3. **TypeScript Errors**
- Ensure `css-modules.d.ts` type definitions are in place
- Check that TypeScript can find CSS Module files
- Verify `tsconfig.json` includes CSS Module paths

## Performance Optimization

### 1. **CSS Bundle Optimization**
- Only used styles are included in the final bundle
- Dead code elimination removes unused CSS
- CSS is automatically minified in production

### 2. **Runtime Performance**
- No runtime CSS-in-JS overhead
- Styles are applied at build time
- Minimal JavaScript bundle impact

### 3. **Development Experience**
- Fast hot reload for CSS changes
- Type-safe class name usage
- Better debugging with source maps

This guide provides a comprehensive foundation for using CSS Modules with our custom design system. For specific component examples, refer to the `/src/components/ui/` directory.
