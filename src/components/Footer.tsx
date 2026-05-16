'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/lib/useLang';

const NAV_LINKS = [
  { href: '/', ro: 'Acasa', en: 'Home' },
  { href: '/proiecte', ro: 'Proiecte', en: 'Projects' },
  { href: '/localizare', ro: 'Localizare', en: 'Location' },
  { href: '/contact', ro: 'Contact', en: 'Contact' },
] as const;

const LEGAL_LINKS = [
  {
    href: '/politica-confidentialitate',
    ro: 'Politica de Confidentialitate',
    en: 'Privacy Policy',
  },
  {
    href: '/politica-cookie',
    ro: 'Politica Cookie',
    en: 'Cookie Policy',
  },
  {
    href: '/termeni',
    ro: 'Termeni si Conditii',
    en: 'Terms & Conditions',
  },
] as const;

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative overflow-hidden" style={{ borderTop: '1px solid var(--color-border)' }}>
      {/* Background image with blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/footer-bg.jpg"
          alt=""
          fill
          className="object-cover"
          style={{ filter: 'blur(8px)', transform: 'scale(1.05)' }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(5, 5, 4, 0.85)' }} />
      </div>
      {/* Main grid */}
      <div
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        style={{ padding: 'var(--footer-py) var(--footer-px)' }}
      >
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '32px',
              color: 'var(--color-cream)',
              lineHeight: 1,
            }}
          >
            LSD
          </span>
          <span style={{ color: 'var(--color-stone)', fontSize: '14px' }}>
            Living Spaces Design
          </span>
          <span style={{ color: 'var(--color-ash)', fontSize: '14px' }}>
            {t('Dezvoltator rezidential premium', 'Premium residential developer')}
          </span>
        </div>

        {/* Navigate */}
        <div className="flex flex-col gap-5">
          <span className="text-label">
            {t('NAVIGARE', 'NAVIGATE')}
          </span>
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover-gold"
                style={{
                  color: 'var(--color-stone)',
                  fontSize: '14px',
                  textDecoration: 'none',
                }}
              >
                {t(link.ro, link.en)}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-5">
          <span className="text-label">CONTACT</span>
          <div className="flex flex-col gap-3" style={{ fontSize: '14px' }}>
            <a
              href="tel:+40745760829"
              className="hover-gold"
              style={{ color: 'var(--color-stone)', textDecoration: 'none' }}
            >
              0745 760 829
            </a>
            <a
              href="mailto:project2020@livingspacesdesign.ro"
              className="hover-gold"
              style={{ color: 'var(--color-stone)', textDecoration: 'none' }}
            >
              project2020@livingspacesdesign.ro
            </a>
            <a
              href="https://wa.me/40745760829"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-gold"
              style={{ color: 'var(--color-stone)', textDecoration: 'none' }}
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/lsd_livingspacesdesign"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-gold"
              style={{ color: 'var(--color-stone)', textDecoration: 'none' }}
            >
              @lsd_livingspacesdesign
            </a>
            <a
              href="https://facebook.com/LSDLivingSpacesDesign"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-gold"
              style={{ color: 'var(--color-stone)', textDecoration: 'none' }}
            >
              LSDLivingSpacesDesign
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-5">
          <span className="text-label">LEGAL</span>
          <nav className="flex flex-col gap-3">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover-gold"
                style={{
                  color: 'var(--color-stone)',
                  fontSize: '14px',
                  textDecoration: 'none',
                }}
              >
                {t(link.ro, link.en)}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-4"
        style={{
          borderTop: '1px solid var(--color-border)',
          margin: '0 var(--footer-px)',
          padding: '32px 0',
        }}
      >
        <span style={{ color: 'var(--color-ash)', fontSize: '12px' }}>
          &copy; 2025 Living Spaces Design &mdash; Development S.R.L.
        </span>
        <a
          href="https://asap-office.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'var(--color-ash)',
            fontSize: '12px',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--color-cream)'; }}
          onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'var(--color-ash)'; }}
        >
          Webdesign by ASAP HUB
        </a>
      </div>

      {/* Footer responsive spacing */}
      <style>{`
        :root {
          --footer-py: 60px;
          --footer-px: 24px;
        }
        @media (min-width: 768px) {
          :root {
            --footer-py: 80px;
            --footer-px: 48px;
          }
        }
      `}</style>
    </footer>
  );
}
