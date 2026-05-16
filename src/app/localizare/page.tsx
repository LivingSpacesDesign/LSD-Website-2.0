import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Localizare | LSD — Living Spaces Design',
  description:
    'Moara Vlăsiei, Ilfov — la 20 de minute de București. Vizitează locația proiectelor Living Spaces Design.',
  openGraph: {
    title: 'Localizare | LSD — Living Spaces Design',
    description:
      'Moara Vlăsiei, Ilfov — la 20 de minute de București. Vizitează locația proiectelor Living Spaces Design.',
    url: 'https://livingspacesdesign.ro/localizare',
    siteName: 'Living Spaces Design',
    locale: 'ro_RO',
    type: 'website',
    images: [{ url: '/img/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function LocalizarePage() {
  return (
    <div
      style={{
        height: 'calc(100vh - 72px)',
        marginTop: '72px',
        position: 'relative',
        background: 'var(--color-void)',
      }}
    >
      <iframe
        src="/map/index.html"
        title="Localizare Living Spaces Design"
        style={{
          width: '100%',
          height: '100%',
          border: 0,
        }}
        loading="lazy"
        allowFullScreen
      />

      {/* Fallback link */}
      <noscript>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--color-deep)',
          }}
        >
          <a
            href="https://www.google.com/maps?q=44.386,26.194"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--color-gold)',
              fontSize: '16px',
              textDecoration: 'underline',
            }}
          >
            Deschide harta in Google Maps
          </a>
        </div>
      </noscript>
    </div>
  );
}
