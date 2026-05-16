'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/lib/useLang';
import { ScrollReveal } from '@/components/ScrollReveal';

export function Approach() {
  const { t } = useLang();

  return (
    <section className="bg-deep">
      {/* ===== FULL SCREEN — CASE CONCEPT ===== */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/img/casa-ph.jpg"
            alt="Case Concept"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/80 to-deep/30" />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left — Content */}
            <div>
              <ScrollReveal>
                <span className="font-mono text-[13px] text-gold tracking-widest">01</span>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h2 className="text-display text-[40px] md:text-[56px] text-cream mt-4 leading-[0.95]">
                  {t('Case', 'Concept')}
                  <br />
                  <span className="text-editorial text-gold">
                    {t('Concept', 'Houses')}
                  </span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="divider-gold mt-8 mb-6" />
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p className="text-cream-muted text-[16px] leading-[1.8] max-w-lg">
                  {t(
                    'Alege dintr-un portofoliu de proiecte gata concepute — fiecare casă este o viziune arhitecturală completă. De la planimetrie la materiale, totul este gândit în detaliu. Tu personalizezi finisajele și faci casa ta.',
                    'Choose from a portfolio of ready-made designs — each house is a complete architectural vision. From floor plans to materials, everything is thought out in detail. You customize the finishes and make it your home.',
                  )}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="flex flex-col gap-3 mt-8 text-stone text-[14px]">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {t('Proiecte gata concepute, gata de personalizare', 'Ready-made designs, ready for customization')}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {t('Arhitectură contemporană, materiale premium', 'Contemporary architecture, premium materials')}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {t('Teren inclus în Moara Vlăsiei', 'Land included in Moara Vlăsiei')}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {t('De la concept la cheie — proces complet', 'From concept to key — complete process')}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <Link
                  href="/proiecte?cat=concept"
                  className="inline-block mt-10 bg-gold text-deep px-8 py-4 text-sm uppercase tracking-widest hover:bg-gold-light transition-colors"
                >
                  {t('Vezi proiectele', 'View projects')}
                </Link>
              </ScrollReveal>
            </div>

            {/* Right — Stats on desktop */}
            <div className="hidden md:flex flex-col items-end gap-10">
              <ScrollReveal delay={300}>
                <div className="text-right">
                  <span className="text-display text-gold text-[64px] leading-none">3</span>
                  <p className="text-label text-stone mt-2">{t('PROIECTE CONCEPT', 'CONCEPT PROJECTS')}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="text-right">
                  <span className="text-display text-gold text-[64px] leading-none">1722</span>
                  <p className="text-label text-stone mt-2">M² {t('CEL MAI MARE LOT', 'LARGEST PLOT')}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={500}>
                <div className="text-right">
                  <span className="text-display text-cream text-[22px]">{t('De la', 'From')} P+1</span>
                  <p className="text-label text-stone mt-2">{t('REGIM DE ÎNĂLȚIME', 'HEIGHT REGIME')}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FULL SCREEN — DE LA ZERO ===== */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/img/t502/a_compressed.jpg"
            alt="Case Personalizate"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/80 to-deep/30" />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left — Content */}
            <div>
              <ScrollReveal>
                <span className="font-mono text-[13px] text-gold tracking-widest">02</span>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h2 className="text-display text-[40px] md:text-[56px] text-cream mt-4 leading-[0.95]">
                  {t('De la', 'From')}
                  <br />
                  <span className="text-editorial text-gold">
                    Zer0
                  </span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="divider-gold mt-8 mb-6" />
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p className="text-cream-muted text-[16px] leading-[1.8] max-w-lg">
                  {t(
                    'Tu visezi, noi construim. De la alegerea terenului din oferta noastră, la proiectarea personalizată cu arhitect dedicat, până la predarea la cheie — un proces complet, transparent, fără surprize.',
                    'You dream, we build. From choosing the land from our offer, to custom design with a dedicated architect, to turnkey delivery — a complete, transparent process, no surprises.',
                  )}
                </p>
              </ScrollReveal>

              {/* Mobile — Process steps */}
              <div className="md:hidden mt-8 space-y-6">
                {['Alege terenul', 'Definim proiectul', 'Construim', 'Primești cheia'].map((step, i) => (
                  <ScrollReveal key={step} delay={(i + 4) * 100}>
                    <div className="flex items-center gap-4">
                      <span className="text-gold font-mono text-[12px]">0{i + 1}</span>
                      <span className="text-cream text-[15px]">{step}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={500}>
                <Link
                  href="/proiecte?cat=personalizat"
                  className="inline-block mt-10 bg-gold text-deep px-8 py-4 text-sm uppercase tracking-widest hover:bg-gold-light transition-colors"
                >
                  {t('Vezi portofoliul', 'View portfolio')}
                </Link>
              </ScrollReveal>
            </div>

            {/* Right — Process steps on desktop */}
            <div className="hidden md:block">
              <ScrollReveal>
                <div className="space-y-12">
                  {[
                    {
                      step: '01',
                      title: { ro: 'Alege terenul', en: 'Choose the land' },
                      desc: { ro: 'Din oferta noastră sau aduci propriul lot', en: 'From our offer or bring your own plot' },
                    },
                    {
                      step: '02',
                      title: { ro: 'Definim proiectul', en: 'Define the project' },
                      desc: { ro: 'Împreună cu arhitectul, conturăm casa visurilor tale', en: 'Together with the architect, we shape your dream home' },
                    },
                    {
                      step: '03',
                      title: { ro: 'Construim', en: 'We build' },
                      desc: { ro: 'Cu materiale premium și atenție la fiecare detaliu', en: 'With premium materials and attention to every detail' },
                    },
                    {
                      step: '04',
                      title: { ro: 'Primești cheia', en: 'Get the key' },
                      desc: { ro: 'Casa ta, gata de trăit', en: 'Your home, ready to live' },
                    },
                  ].map((item, i) => (
                    <ScrollReveal key={item.step} delay={i * 150}>
                      <div className="flex gap-6 items-start">
                        <span className="text-display text-gold text-[32px] leading-none">{item.step}</span>
                        <div className="border-l border-border pl-6">
                          <h4 className="text-cream text-[18px] font-display">{t(item.title.ro, item.title.en)}</h4>
                          <p className="text-stone text-[14px] mt-1">{t(item.desc.ro, item.desc.en)}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
