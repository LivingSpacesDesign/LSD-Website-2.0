'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang } from '@/lib/useLang';

const NAV_LINKS = [
  { href: '/proiecte', ro: 'Proiecte', en: 'Projects' },
  { href: '/localizare', ro: 'Localizare', en: 'Location' },
  { href: '/contact', ro: 'Contact', en: 'Contact' },
] as const;

export function Header() {
  const pathname = usePathname();
  const { lang, toggle, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isLightPage = pathname === '/proiecte';

  const textColor = isLightPage ? '#2C2824' : 'var(--color-cream)';
  const mutedColor = isLightPage ? '#5E574E' : 'var(--color-stone)';
  const activeColor = isLightPage ? '#2C2824' : 'var(--color-gold)';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center"
        style={{
          height: 'var(--header-h)',
          padding: '0 var(--header-px)',
          background: isLightPage
            ? 'rgba(232, 228, 223, 0.9)'
            : (scrolled ? 'rgba(10, 10, 8, 0.9)' : 'transparent'),
          backdropFilter: (isLightPage || scrolled) ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: (isLightPage || scrolled) ? 'blur(24px)' : 'none',
          transition: 'background 0.4s ease, backdrop-filter 0.4s ease',
        }}
      >
        {/* Left: Logo — fixed width for centering */}
        <Link
          href="/"
          className="relative z-50 shrink-0 w-[140px]"
          style={{
            fontSize: '18px',
            letterSpacing: '0.35em',
            fontWeight: 500,
            color: textColor,
            textDecoration: 'none',
            transition: 'color 0.4s ease',
          }}
        >
          LSD
        </Link>

        {/* Center: Nav (desktop only) */}
        <nav className="hidden md:flex items-center justify-center gap-10 flex-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-label hover-gold"
              style={{
                color: pathname === link.href ? activeColor : mutedColor,
                transition: 'color 0.4s ease',
              }}
            >
              {lang === 'ro' ? link.ro : link.en}
            </Link>
          ))}
        </nav>

        {/* Right: RO/EN + Call (desktop) */}
        <div className="hidden md:flex items-center justify-end gap-6 shrink-0 w-auto">
          <button
            onClick={toggle}
            className="text-label hover-gold cursor-pointer"
            style={{
              color: mutedColor,
              transition: 'color 0.4s ease',
              background: 'none',
              border: 'none',
              padding: 0,
            }}
          >
            <span style={{ color: lang === 'ro' ? textColor : mutedColor }}>RO</span>
            {' / '}
            <span style={{ color: lang === 'en' ? textColor : mutedColor }}>EN</span>
          </button>

        </div>

        {/* Right: Hamburger (mobile only) */}
        <button
          className="relative z-50 hidden max-md:flex flex-col justify-center items-center cursor-pointer ml-auto"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          style={{
            width: '44px',
            height: '44px',
            background: 'none',
            border: 'none',
            padding: 0,
          }}
        >
          <span style={{
            display: 'block', width: '20px', height: '1px',
            background: menuOpen ? 'var(--color-cream)' : (isLightPage ? '#2C2824' : 'var(--color-cream)'),
            transition: 'transform 0.4s ease, opacity 0.4s ease',
            transform: menuOpen ? 'translateY(3.5px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '20px', height: '1px',
            background: menuOpen ? 'var(--color-cream)' : (isLightPage ? '#2C2824' : 'var(--color-cream)'),
            marginTop: '6px', transition: 'opacity 0.4s ease',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: '20px', height: '1px',
            background: menuOpen ? 'var(--color-cream)' : (isLightPage ? '#2C2824' : 'var(--color-cream)'),
            marginTop: '6px', transition: 'transform 0.4s ease, opacity 0.4s ease',
            transform: menuOpen ? 'translateY(-9.5px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </header>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden flex-col items-center justify-center"
        style={{
          display: menuOpen ? 'flex' : 'none',
          background: 'var(--color-deep)',
        }}
      >
        <nav className="flex flex-col items-center gap-10">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '24px',
                letterSpacing: '0.05em',
                color: pathname === link.href ? 'var(--color-gold)' : 'var(--color-cream)',
                textDecoration: 'none',
                animation: `fadeUp 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${(i + 1) * 100}ms both`,
              }}
            >
              {lang === 'ro' ? link.ro : link.en}
            </Link>
          ))}

          {/* Call link in mobile menu */}
          <a
            href="tel:+40745760829"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              color: 'var(--color-gold)',
              textDecoration: 'none',
              animation: `fadeUp 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${(NAV_LINKS.length + 1) * 100}ms both`,
            }}
          >
            0745 760 829
          </a>

          {/* Language toggle */}
          <button
            onClick={toggle}
            className="text-label cursor-pointer"
            style={{
              color: 'var(--color-stone)',
              background: 'none',
              border: 'none',
              padding: '12px',
              minHeight: '44px',
              animation: `fadeUp 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${(NAV_LINKS.length + 2) * 100}ms both`,
            }}
          >
            <span style={{ color: lang === 'ro' ? 'var(--color-cream)' : 'var(--color-stone)' }}>RO</span>
            {' / '}
            <span style={{ color: lang === 'en' ? 'var(--color-cream)' : 'var(--color-stone)' }}>EN</span>
          </button>
        </nav>
      </div>

      {/* Fixed call button — right side */}
      <a
        href="tel:+40745760829"
        aria-label="Sună"
        className="fixed z-50 flex items-center justify-center hover-lift"
        style={{
          right: '24px',
          bottom: '24px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'var(--color-gold)',
          boxShadow: '0 4px 20px rgba(196, 168, 124, 0.3)',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-deep)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      </a>

      <style>{`
        :root {
          --header-h: 60px;
          --header-px: 24px;
        }
        @media (min-width: 768px) {
          :root {
            --header-h: 72px;
            --header-px: 48px;
          }
        }
      `}</style>
    </>
  );
}
