import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: 'AdugboHub — Your neighborhood, better connected', template: '%s | AdugboHub' },
  description: siteConfig.description,
  applicationName: 'AdugboHub',
  openGraph: {
    type: 'website',
    title: 'AdugboHub — Your neighborhood, better connected',
    description: siteConfig.description,
    siteName: 'AdugboHub',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
