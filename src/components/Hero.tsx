'use client';

import Image from 'next/image';
import { useLang } from '@/lib/useLang';

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0 animate-ken-burns">
        <Image
          src="/img/hero-light_compressed.jpg"
          alt={t(
            'Dezvoltare rezidențială premium Căciulati',
            'Premium residential development Căciulati',
          )}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep/40 via-deep/60 to-deep" />

      {/* Content — bottom-left */}
      <div className="absolute inset-0 flex flex-col justify-center md:justify-end p-6 pb-16 md:p-12 md:pb-[120px]">
        {/* Label */}
        <p className="text-label mb-6" style={{ color: 'rgba(245, 240, 232, 0.7)' }}>
          {t('DEZVOLTATOR REZIDENȚIAL PREMIUM', 'PREMIUM RESIDENTIAL DEVELOPER')}
        </p>

        {/* Title */}
        <h1 className="text-display text-[42px] md:text-[72px] text-cream leading-[0.95]">
          {t('Arhitectura', 'Architecture')}
          <br />
          {t('ca mod de', 'as a way of')}
          <br />
          <span className="text-editorial text-gold">
            {t('viață', 'life')}
          </span>
        </h1>

        {/* Gold divider */}
        <div className="divider-gold mt-8 mb-6" />

        {/* Description */}
        <p className="text-stone text-[15px] max-w-md leading-relaxed">
          {t(
            'Din 2010, creăm spații rezidențiale care transformă modul în care trăiești. Căciulati, la 20 de minute de București.',
            'Since 2010, we create residential spaces that transform the way you live. Căciulati, 20 minutes from Bucharest.',
          )}
        </p>
      </div>

      {/* Location widget — desktop, bottom-right */}
      <a
        href="https://maps.app.goo.gl/R1heYFauwnKY8TkW7"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex absolute bottom-[120px] right-12 items-center gap-4 group min-h-[44px]"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
        <div>
          <p className="text-cream text-[14px] group-hover:text-gold transition-colors">Căciulati, Ilfov</p>
          <p className="font-mono text-ash text-[12px] group-hover:text-stone transition-colors">44.567°N · 26.139°E</p>
        </div>
      </a>

      {/* Scroll indicator — centered bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gold"
        >
          <path
            d="M4 7L10 13L16 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
