import type { Metadata } from 'next';
import '@/styles/globals.css';
import '@/styles/design-tokens.css';

export const metadata: Metadata = {
  title: 'Starter Template',
  description: 'A starter template with CSS Modules and custom design system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
