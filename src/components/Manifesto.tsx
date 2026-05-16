'use client';

import { useLang } from '@/lib/useLang';
import { ScrollReveal } from '@/components/ScrollReveal';

export function Manifesto() {
  const { t } = useLang();

  return (
    <section className="py-20 md:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[7fr_5fr] gap-16 md:gap-12">
          {/* Left column — Quote */}
          <ScrollReveal>
            <blockquote className="text-display text-[28px] md:text-[36px] text-cream leading-[1.15]">
              {t('Nu construim doar case.', "We don\u2019t just build houses.")}
              <br />
              <span className="text-editorial text-gold">
                {t('Creăm spații în care viața capătă sens.', 'We create spaces where life finds meaning.')}
              </span>
            </blockquote>
            <div className="divider-gold mt-8 mb-4" />
            <p className="text-editorial text-stone text-[16px]">
              — Living Spaces Design, {t('din', 'since')} 2010
            </p>
          </ScrollReveal>

          {/* Right column — Stats (desktop) */}
          <div className="hidden md:flex flex-col justify-end gap-6">
            <ScrollReveal delay={200}>
              <div>
                <span className="text-display text-gold text-[48px]">12</span>
                <p className="text-label text-ash mt-1">
                  {t('CASE FINALIZATE', 'COMPLETED HOUSES')}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div>
                <span className="text-display text-gold text-[48px]">15</span>
                <p className="text-label text-ash mt-1">
                  {t('ANI DE EXPERIENȚĂ', 'YEARS OF EXPERIENCE')}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={600}>
              <div>
                <span className="text-display text-gold text-[48px]">1722</span>
                <p className="text-label text-ash mt-1">
                  {t('M² CEL MAI MARE PROIECT', 'SQM LARGEST PROJECT')}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
