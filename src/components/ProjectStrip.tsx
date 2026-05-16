'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/lib/useLang';
import { projects } from '@/lib/projects';

const STRIP_SLUGS = ['casa-hh', 't503', 'casa-ph', 't502', 'casa-o', 'casa-p'];

export function ProjectStrip() {
  const { lang, t } = useLang();

  const stripProjects = STRIP_SLUGS.map((slug) =>
    projects.find((p) => p.slug === slug),
  ).filter(Boolean);

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ background: 'var(--color-surface)' }}
    >
      {/* Section label */}
      <p className="relative z-10 text-label text-stone text-center mb-12">
        {t('SELECȚIE DIN PORTOFOLIU', 'PORTFOLIO SELECTION')}
      </p>

      {/* Horizontal scroll */}
      <div className="relative z-10 flex gap-6 overflow-x-auto scrollbar-hide px-6 md:px-12">
        {stripProjects.map((project) => {
          if (!project) return null;
          const showStatus = project.forSale || !project.sold;

          return (
            <Link
              key={project.slug}
              href={`/proiect/${project.slug}`}
              className="group flex-shrink-0 w-[300px] md:w-[400px] aspect-[4/3] relative overflow-hidden"
              style={{ borderRadius: '2px' }}
            >
              <Image
                src={project.cover}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(10, 10, 8, 0.8))' }} />

              <div className="absolute bottom-0 left-0 right-0 p-4">
                {showStatus && (
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full inline-block bg-gold" />
                    <span className="text-gold text-[11px] uppercase tracking-widest">
                      {project.status[lang]}
                    </span>
                  </div>
                )}
                <h3 className="text-display text-[20px] text-cream mt-1">
                  {project.name}
                </h3>
                <span className="text-stone text-[12px]">{project.year}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
