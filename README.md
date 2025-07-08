# Starter Template - CSS Modules + Custom Design System

A modern Next.js starter template featuring CSS Modules with a comprehensive custom design system, replacing Tailwind CSS for better maintainability and type safety.

## 🚀 Features

- **CSS Modules**: Scoped styling with TypeScript support
- **Custom Design System**: Comprehensive design tokens using CSS custom properties
- **Type Safety**: Full TypeScript integration with CSS class name checking
- **Performance Optimized**: Only used styles are included in the bundle
- **Accessibility First**: WCAG AA compliant components with proper focus management
- **Responsive Design**: Mobile-first approach with consistent breakpoints
- **Component Library**: Pre-built, reusable UI components

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules + CSS Custom Properties
- **Components**: Custom UI component library
- **Development**: ESLint, TypeScript strict mode

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd starter-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🎨 Design System

### Design Tokens

Our design system is built on CSS custom properties for consistency and maintainability:

```css
/* Colors */
--color-primary-500: #64748b;
--color-accent-500: #10b981;
--color-neutral-500: #71717a;

/* Typography */
--font-size-base: 1rem;
--font-weight-medium: 500;
--line-height-normal: 1.5;

/* Spacing */
--spacing-xs: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
```

### Component Usage

```tsx
import { Button, Card, CardHeader, CardBody } from '@/components/ui';

export default function Example() {
  return (
    <Card variant="elevated">
      <CardHeader>
        <h2>Card Title</h2>
      </CardHeader>
      <CardBody>
        <p>Card content goes here.</p>
        <Button variant="primary" size="medium">
          Action Button
        </Button>
      </CardBody>
    </Card>
  );
}
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── page.module.css    # Page-specific styles
├── components/
│   └── ui/                # Reusable UI components
│       ├── Button/
│       │   ├── Button.tsx
│       │   └── Button.module.css
│       ├── Card/
│       │   ├── Card.tsx
│       │   └── Card.module.css
│       └── index.ts       # Component exports
├── styles/
│   ├── design-tokens.css  # Design system tokens
│   ├── globals.css        # Global styles
│   └── utilities.module.css # Utility classes
└── types/
    └── css-modules.d.ts   # CSS Modules type definitions
```

## 🎯 Development Guidelines

### CSS Modules Best Practices

1. **Use semantic class names**
   ```css
   .button { }           /* Good */
   .btn { }              /* Avoid */
   ```

2. **Leverage design tokens**
   ```css
   .button {
     background-color: var(--color-primary-500);  /* Good */
     background-color: #64748b;                   /* Avoid */
   }
   ```

3. **Follow naming conventions**
   ```css
   .component { }
   .componentVariant { }
   .componentState { }
   ```

### Component Development

1. **Create TypeScript interfaces**
   ```tsx
   interface ButtonProps {
     variant?: 'primary' | 'secondary';
     size?: 'small' | 'medium' | 'large';
     children: React.ReactNode;
   }
   ```

2. **Use CSS Modules imports**
   ```tsx
   import styles from './Button.module.css';
   ```

3. **Combine classes conditionally**
   ```tsx
   const buttonClasses = [
     styles.button,
     styles[variant],
     styles[size],
   ].filter(Boolean).join(' ');
   ```

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📚 Documentation

- [CSS Modules Guide](./docs/CSS_MODULES_GUIDE.md) - Comprehensive guide for using CSS Modules
- [Design System](./src/styles/design-tokens.css) - Complete design token reference
- [Component Library](./src/components/ui/) - UI component documentation

## 🔧 Configuration

### Next.js Configuration

The project is configured for CSS Modules support with TypeScript integration:

```javascript
// next.config.js
const nextConfig = {
  cssModules: true,
  cssLoaderOptions: {
    modules: {
      localIdentName: '[name]__[local]___[hash:base64:5]',
      exportLocalsConvention: 'camelCase',
    },
  },
};
```

### TypeScript Configuration

CSS Modules are fully typed with TypeScript:

```typescript
// css-modules.d.ts
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
```

## 🚀 Deployment

This project supports static export for easy deployment to platforms like Vercel, Netlify, or GitHub Pages:

```bash
npm run build
```

The built files will be in the `out/` directory (for static export) or `.next/` directory (for server deployment).

## 🤝 Contributing

1. Follow the established coding patterns
2. Use design tokens for all styling values
3. Ensure TypeScript strict mode compliance
4. Test components across different screen sizes
5. Maintain accessibility standards

## 📄 License

This project is licensed under the MIT License.

---

**Migration from Tailwind CSS**: This template was specifically designed to replace Tailwind CSS with a more maintainable CSS Modules approach while preserving design consistency through a comprehensive design token system.
