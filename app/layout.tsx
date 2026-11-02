import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AdugboHub — Your neighborhood, better connected",
    template: "%s | AdugboHub",
  },
  description: siteConfig.description,
  applicationName: "AdugboHub",
  openGraph: {
    type: "website",
    title: "AdugboHub — Your neighborhood, better connected",
    description: siteConfig.description,
    siteName: "AdugboHub",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="min-h-screen bg-white antialiased">
        <SiteHeader />

        <main>{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}
