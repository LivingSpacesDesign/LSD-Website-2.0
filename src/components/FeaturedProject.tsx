'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/lib/useLang';
import { getFeaturedProject } from '@/lib/projects';
import { ScrollReveal } from '@/components/ScrollReveal';

export function FeaturedProject() {
  const { lang, t } = useLang();
  const project = getFeaturedProject();

  return (
    <section className="relative w-full min-h-[90vh] md:h-[90vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 animate-ken-burns">
        <Image
          src={project.cover}
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay — stronger on mobile for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep/60 via-deep/70 to-deep md:from-transparent md:via-deep/40 md:to-deep" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center md:justify-end h-full p-6 pt-24 pb-12 md:p-12 md:pb-16">

        {/* Mobile: stacked layout. Desktop: side by side */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

          {/* Text */}
          <div className="flex-1">
            <ScrollReveal>
              <p className="text-label text-gold mb-4">
                {t('PROIECT FEATURED', 'FEATURED PROJECT')}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-display text-[36px] md:text-[64px] text-cream">
                {project.name}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-cream-muted text-[14px] mt-3">
                {project.status[lang]} — {project.specs.teren} — {project.location}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="divider-gold mt-5 mb-4" />
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-cream text-[15px] max-w-lg leading-relaxed">
                {t(
                  '475 m² construiți pe un teren de 1722 m², cu 5 dormitoare și facilități complete — studio, bucătărie exterioară, fire pit, pistă de alergare. La 20 de minute de București.',
                  '475 sqm built on a 1722 sqm plot, with 5 bedrooms and full amenities — studio, outdoor kitchen, fire pit, running track. 20 minutes from Bucharest.',
                )}
              </p>
            </ScrollReveal>

            {/* Mobile specs — horizontal row */}
            <div className="flex md:hidden flex-wrap gap-x-6 gap-y-3 mt-6">
              <div>
                <span className="text-display text-gold text-[24px]">{project.specs.teren}</span>
                <p className="text-stone text-[11px] uppercase tracking-wider">{t('Teren', 'Land')}</p>
              </div>
              <div>
                <span className="text-display text-gold text-[24px]">{project.specs.casa}</span>
                <p className="text-stone text-[11px] uppercase tracking-wider">{t('Casă', 'House')}</p>
              </div>
              <div>
                <span className="text-display text-gold text-[24px]">{project.specs.dormitoare}</span>
                <p className="text-stone text-[11px] uppercase tracking-wider">{t('Dormitoare', 'Bedrooms')}</p>
              </div>
            </div>

            <ScrollReveal delay={500}>
              <Link
                href={`/proiect/${project.slug}`}
                className="inline-block mt-8 text-gold text-sm uppercase tracking-[0.15em] hover:text-gold-light transition-colors"
              >
                {t('Descoperă proiectul', 'Discover the project')} &rarr;
              </Link>
            </ScrollReveal>
          </div>

          {/* Desktop specs grid */}
          <div className="hidden md:grid grid-cols-2 gap-x-12 gap-y-6 ml-12">
            {project.specs.teren && (
              <ScrollReveal delay={300}>
                <div>
                  <span className="text-display text-gold text-[32px]">{project.specs.teren}</span>
                  <p className="text-label text-stone mt-1">{t('Teren', 'Land')}</p>
                </div>
              </ScrollReveal>
            )}
            {project.specs.casa && (
              <ScrollReveal delay={400}>
                <div>
                  <span className="text-display text-gold text-[32px]">{project.specs.casa}</span>
                  <p className="text-label text-stone mt-1">{t('Construită', 'Built')}</p>
                </div>
              </ScrollReveal>
            )}
            {project.specs.util && (
              <ScrollReveal delay={500}>
                <div>
                  <span className="text-display text-gold text-[32px]">{project.specs.util}</span>
                  <p className="text-label text-stone mt-1">{t('Utilă', 'Usable')}</p>
                </div>
              </ScrollReveal>
            )}
            {project.specs.dormitoare && (
              <ScrollReveal delay={600}>
                <div>
                  <span className="text-display text-gold text-[32px]">{project.specs.dormitoare}</span>
                  <p className="text-label text-stone mt-1">{t('Dormitoare', 'Bedrooms')}</p>
                </div>
              </ScrollReveal>
            )}
            {project.specs.regim && (
              <ScrollReveal delay={700}>
                <div>
                  <span className="text-display text-gold text-[32px]">{project.specs.regim}</span>
                  <p className="text-label text-stone mt-1">{t('Regim', 'Structure')}</p>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
