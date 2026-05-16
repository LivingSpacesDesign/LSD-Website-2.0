'use client';

import Link from 'next/link';
import { useLang } from '@/lib/useLang';
import { ScrollReveal } from '@/components/ScrollReveal';

export function LocationWidget() {
  const { t } = useLang();

  return (
    <section className="bg-surface border-y border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

          {/* Coordinates + Location */}
          <div className="md:col-span-4">
            <ScrollReveal>
              <a
                href="https://maps.google.com/?q=44.386,26.194"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-label text-gold">{t('LOCAȚIE', 'LOCATION')}</span>
                </div>
                <p className="text-cream text-[16px] group-hover:text-gold transition-colors">
                  Moara Vlăsiei, Ilfov
                </p>
                <p className="font-mono text-ash text-[13px] mt-1 group-hover:text-stone transition-colors">
                  44.386°N &nbsp; 26.194°E
                </p>
                <p className="text-stone text-[14px] mt-2">
                  {t('20 min de București', '20 min from Bucharest')}
                </p>
              </a>
            </ScrollReveal>
          </div>

          {/* Divider */}
          <div className="hidden md:block md:col-span-1">
            <div className="h-16 w-px bg-border mx-auto" />
          </div>

          {/* Quick Contact */}
          <div className="md:col-span-4">
            <ScrollReveal delay={100}>
              <p className="text-label text-gold mb-3">{t('CONTACT RAPID', 'QUICK CONTACT')}</p>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+40745760829"
                  className="text-cream text-[16px] hover-gold transition-colors"
                >
                  0745 760 829
                </a>
                <a
                  href="https://wa.me/40745760829"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone text-[14px] hover-gold transition-colors"
                >
                  WhatsApp →
                </a>
                <a
                  href="mailto:project2020@livingspacesdesign.ro"
                  className="text-stone text-[14px] hover-gold transition-colors"
                >
                  project2020@livingspacesdesign.ro
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Divider */}
          <div className="hidden md:block md:col-span-1">
            <div className="h-16 w-px bg-border mx-auto" />
          </div>

          {/* CTA */}
          <div className="md:col-span-2">
            <ScrollReveal delay={200}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-gold text-sm uppercase tracking-[0.15em] hover:text-gold-light transition-colors"
              >
                <span>{t('Scrie-ne', 'Write us')}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/localizare"
                className="block mt-4 text-stone text-[13px] hover-gold transition-colors"
              >
                {t('Vezi harta', 'View map')} →
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
