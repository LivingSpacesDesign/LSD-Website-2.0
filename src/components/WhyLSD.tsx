'use client';

import { useLang } from '@/lib/useLang';
import { ScrollReveal } from '@/components/ScrollReveal';

const REASONS = [
  {
    num: '01',
    title: { ro: 'Design personalizat', en: 'Custom design' },
    desc: {
      ro: 'Fiecare proiect pornește de la zero, cu un arhitect dedicat care traduce viziunea ta în spații care funcționează.',
      en: 'Every project starts from scratch, with a dedicated architect who translates your vision into spaces that work.',
    },
  },
  {
    num: '02',
    title: { ro: 'Proces transparent', en: 'Transparent process' },
    desc: {
      ro: 'De la primul desen la ultima cheie — fără costuri ascunse, fără surprize, fără devieri de la plan.',
      en: 'From first sketch to final key — no hidden costs, no surprises, no plan deviations.',
    },
  },
  {
    num: '03',
    title: { ro: 'Locație premium', en: 'Premium location' },
    desc: {
      ro: 'Căciulati — la 20 de minute de București, înconjurat de natură, departe de agitația urbană.',
      en: 'Căciulati — 20 minutes from Bucharest, surrounded by nature, away from urban chaos.',
    },
  },
  {
    num: '04',
    title: { ro: '15 ani de experiență', en: '15 years of experience' },
    desc: {
      ro: '12 case finalizate, fiecare cu povestea ei. Experiența se vede în detalii.',
      en: '12 completed houses, each with its own story. Experience shows in the details.',
    },
  },
];

export function WhyLSD() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden" style={{ background: '#141210' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-28">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <p className="text-label text-gold mb-4">
              {t('DE CE LSD', 'WHY LSD')}
            </p>
            <h2 className="text-display text-[32px] md:text-[44px] text-cream">
              {t('Construim mai mult', 'We build more')}
              <br />
              <span className="text-editorial text-gold">
                {t('decât case', 'than houses')}
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* 4 reasons — horizontal with dividers */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          {REASONS.map((r, i) => (
            <ScrollReveal key={r.num} delay={i * 120}>
              <div className="flex flex-col">
                <span
                  className="text-display text-[40px] md:text-[48px] leading-none"
                  style={{ color: 'var(--color-gold)', opacity: 0.3 }}
                >
                  {r.num}
                </span>
                <h4 className="text-cream text-[17px] mt-4 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  {t(r.title.ro, r.title.en)}
                </h4>
                <p className="text-stone text-[15px] leading-relaxed">
                  {t(r.desc.ro, r.desc.en)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
