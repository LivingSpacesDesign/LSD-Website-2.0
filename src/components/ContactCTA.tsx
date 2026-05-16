'use client';

import Link from 'next/link';
import { useLang } from '@/lib/useLang';
import { ScrollReveal } from '@/components/ScrollReveal';

export function ContactCTA() {
  const { t } = useLang();

  return (
    <section className="bg-surface py-[100px] md:py-[160px]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 text-center">
        <ScrollReveal>
          <p className="text-label text-gold mb-6">
            {t('URMĂTORUL PAS', 'NEXT STEP')}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="text-display text-[36px] md:text-[56px] text-cream">
            {t('Începe povestea ta', 'Start your story')}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-stone text-[16px] max-w-lg mx-auto mt-6 leading-relaxed">
            {t(
              'Programează o întâlnire și descoperă cum putem transforma viziunea ta în realitate.',
              'Schedule a meeting and discover how we can turn your vision into reality.',
            )}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="/contact"
              className="bg-gold text-deep px-8 py-4 text-sm uppercase tracking-widest hover:bg-gold-light transition-colors"
            >
              {t('Contactează-ne', 'Contact us')}
            </Link>
            <a
              href="tel:+40745760829"
              className="border border-gold text-gold px-8 py-4 text-sm uppercase tracking-widest hover:bg-gold/10 transition-colors"
            >
              0745 760 829
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
