import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proiecte | LSD — Living Spaces Design',
  description:
    'Portofoliu de case concept și personalizate în Moara Vlăsiei — proiecte rezidențiale premium de la Living Spaces Design.',
  openGraph: {
    title: 'Proiecte | LSD — Living Spaces Design',
    description:
      'Portofoliu de case concept și personalizate în Moara Vlăsiei — proiecte rezidențiale premium de la Living Spaces Design.',
    url: 'https://livingspacesdesign.ro/proiecte',
    siteName: 'Living Spaces Design',
    locale: 'ro_RO',
    type: 'website',
    images: [{ url: '/img/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function ProiecteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
