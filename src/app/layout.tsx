import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';
import { GoogleTagManager } from '@/components/GoogleTagManager';
import { JsonLd } from '@/components/JsonLd';
import { FaviconMeta } from '@/components/FaviconMeta';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LSD | Living Spaces Design',
  description:
    'Dezvoltator rezidential premium in Moara Vlasiei. Case si vile de lux proiectate cu atentie la detalii, materiale naturale si design contemporan.',
  metadataBase: new URL('https://livingspacesdesign.ro'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'LSD | Living Spaces Design',
    description:
      'Dezvoltator rezidential premium in Moara Vlasiei. Case si vile de lux proiectate cu atentie la detalii, materiale naturale si design contemporan.',
    url: 'https://livingspacesdesign.ro',
    siteName: 'Living Spaces Design',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Living Spaces Design — Dezvoltator rezidential premium',
      },
    ],
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LSD | Living Spaces Design',
    description:
      'Dezvoltator rezidential premium in Moara Vlasiei.',
    images: ['/img/og-image.jpg'],
  },
  icons: {
    icon: '/icon-dark.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-deep text-cream min-h-screen antialiased">
        <GoogleTagManager />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <JsonLd />
        <FaviconMeta />
      </body>
    </html>
  );
}
