'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLang } from '@/lib/useLang';
import { ScrollReveal } from '@/components/ScrollReveal';

const INTERESTS = [
  { ro: 'Case Concept', en: 'Concept Houses' },
  { ro: 'Case Personalizate', en: 'Custom Houses' },
  { ro: 'Casa HH', en: 'Casa HH' },
  { ro: 'Noutăți', en: 'Updates' },
];

export function NatureNewsletter() {
  const { t } = useLang();
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Drone aerial background */}
      <div className="absolute inset-0">
        <Image
          src="/img/hero-bg_compressed.jpg"
          alt={t('Vedere aeriană Moara Vlăsiei', 'Aerial view Moara Vlăsiei')}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-deep/70" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left — Statement */}
          <div>
            <ScrollReveal>
              <p className="text-label text-gold mb-6">
                {t('VIZIUNEA NOASTRĂ', 'OUR VISION')}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-display text-[36px] md:text-[52px] text-cream leading-[0.95]">
                {t('Alege să trăiești', 'Choose to live')}
                <br />
                {t('mai bine.', 'better.')}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h3 className="text-editorial text-gold text-[32px] md:text-[44px] mt-2">
                {t('Alege natura.', 'Choose nature.')}
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="divider-gold mt-8 mb-6" />
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="flex gap-12 mt-8">
                <div>
                  <span className="text-display text-gold text-[48px] leading-none">12</span>
                  <p className="text-label text-ash mt-2">{t('CASE', 'HOUSES')}</p>
                </div>
                <div className="border-l border-border pl-12">
                  <span className="text-display text-gold text-[48px] leading-none">15</span>
                  <p className="text-label text-ash mt-2">{t('ANI', 'YEARS')}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Newsletter form */}
          <div>
            <ScrollReveal delay={200}>
              <div
                className="bg-card/80 backdrop-blur-sm border border-border rounded-sm"
                style={{ padding: 'clamp(24px, 4vw, 40px)' }}
              >
                <h3 className="text-display text-[22px] text-cream mb-2">
                  {t('Rămâi conectat', 'Stay connected')}
                </h3>
                <p className="text-stone text-[15px] mb-8 leading-relaxed">
                  {t(
                    'Primește noutăți despre cele mai recente proiecte — viitorul tău cămin.',
                    'Get updates about our latest projects — your future home.',
                  )}
                </p>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                  {/* Name */}
                  <input
                    type="text"
                    placeholder={t('Nume', 'Name')}
                    className="w-full bg-transparent border-b border-border text-cream text-[15px] pb-3 outline-none focus:border-gold transition-colors placeholder:text-ash"
                  />

                  {/* Email */}
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-border text-cream text-[15px] pb-3 outline-none focus:border-gold transition-colors placeholder:text-ash"
                  />

                  {/* Interest pills */}
                  <div>
                    <p className="text-label text-ash mb-3">{t('INTERES', 'INTEREST')}</p>
                    <div className="flex flex-wrap gap-2">
                      {INTERESTS.map((interest) => {
                        const label = t(interest.ro, interest.en);
                        const isActive = selectedInterest === interest.ro;
                        return (
                          <button
                            key={interest.ro}
                            type="button"
                            onClick={() => setSelectedInterest(isActive ? null : interest.ro)}
                            className="cursor-pointer text-[13px] transition-all"
                            style={{
                              padding: '10px 16px',
                              minHeight: '44px',
                              border: `1px solid ${isActive ? 'var(--color-gold)' : 'var(--color-border)'}`,
                              color: isActive ? 'var(--color-gold)' : 'var(--color-stone)',
                              background: isActive ? 'rgba(196, 168, 124, 0.1)' : 'transparent',
                              borderRadius: '2px',
                            }}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-gold text-deep py-4 text-sm uppercase tracking-widest hover:bg-gold-light transition-colors cursor-pointer mt-4"
                  >
                    {t('Abonează-te', 'Subscribe')}
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
