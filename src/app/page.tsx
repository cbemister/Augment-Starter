import styles from './page.module.css';
import { Button, Card, CardHeader, CardBody, CardTitle, CardContent } from '@/components/ui';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Welcome to CSS Modules Starter
        </h1>
        <p className={styles.description}>
          This starter template uses CSS Modules with a custom design system
          instead of Tailwind CSS. Below are examples of our reusable components.
        </p>

        <div className={styles.buttonDemo}>
          <Button variant="primary" size="medium">
            Primary Button
          </Button>
          <Button variant="secondary" size="medium">
            Secondary Button
          </Button>
          <Button variant="accent" size="large">
            Accent Button
          </Button>
        </div>

        <div className={styles.grid}>
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Design Tokens</CardTitle>
            </CardHeader>
            <CardBody>
              <CardContent>
                Consistent colors, typography, and spacing using CSS custom properties.
                Our design system provides a solid foundation for scalable UI development.
              </CardContent>
            </CardBody>
          </Card>

          <Card variant="outlined">
            <CardHeader>
              <CardTitle>CSS Modules</CardTitle>
            </CardHeader>
            <CardBody>
              <CardContent>
                Scoped CSS classes with TypeScript support for better maintainability.
                No more global CSS conflicts or naming collisions.
              </CardContent>
            </CardBody>
          </Card>

          <Card variant="default">
            <CardHeader>
              <CardTitle>Custom Components</CardTitle>
            </CardHeader>
            <CardBody>
              <CardContent>
                Reusable UI components built with our design system.
                Each component follows consistent patterns and accessibility standards.
              </CardContent>
            </CardBody>
          </Card>
        </div>
      </div>
    </main>
  );
}
