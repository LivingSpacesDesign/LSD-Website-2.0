import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | LSD — Living Spaces Design',
  description:
    'Contactează Living Spaces Design — telefon, email, WhatsApp. Programează o întâlnire pentru proiectul tău rezidențial în Moara Vlăsiei.',
  openGraph: {
    title: 'Contact | LSD — Living Spaces Design',
    description:
      'Contactează Living Spaces Design — telefon, email, WhatsApp. Programează o întâlnire pentru proiectul tău rezidențial în Moara Vlăsiei.',
    url: 'https://livingspacesdesign.ro/contact',
    siteName: 'Living Spaces Design',
    locale: 'ro_RO',
    type: 'website',
    images: [{ url: '/img/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
