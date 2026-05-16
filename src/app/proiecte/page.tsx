'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/projects';
import { useLang } from '@/lib/useLang';

type Category = 'toate' | 'concept' | 'personalizat';

const CATS: { key: Category; ro: string; en: string }[] = [
  { key: 'toate', ro: 'Toate', en: 'All' },
  { key: 'concept', ro: 'Concept', en: 'Concept' },
  { key: 'personalizat', ro: 'Personalizate', en: 'Custom' },
];

function ProjectsContent() {
  const searchParams = useSearchParams();
  const { lang, t } = useLang();

  const initialCat = (searchParams.get('cat') as Category) || 'toate';
  const initialProject = searchParams.get('project') || null;

  const [cat, setCat] = useState<Category>(initialCat);
  const [idx, setIdx] = useState(0);
  const [tab, setTab] = useState<'photos' | 'plans'>('photos');
  const [imgIdx, setImgIdx] = useState(0);

  const list = cat === 'toate' ? projects : projects.filter((p) => p.category === cat);

  useEffect(() => {
    if (initialProject) {
      const i = list.findIndex((p) => p.slug === initialProject);
      if (i >= 0) setIdx(i);
    }
  }, [initialProject, list]);

  useEffect(() => {
    if (idx >= list.length) setIdx(0);
  }, [list.length, idx]);

  const project = list[idx] || list[0];
  if (!project) return null;

  const photos = project.images.filter((i) => i.type === 'photo' || i.type === 'render');
  const plans = project.images.filter((i) => i.type === 'plan');
  const imgs = tab === 'photos' ? photos : plans;

  function pick(i: number) { setIdx(i); setTab('photos'); setImgIdx(0); }
  function pickTab(t: 'photos' | 'plans') { setTab(t); setImgIdx(0); }
  function changeCat(c: Category) { setCat(c); setIdx(0); setTab('photos'); setImgIdx(0); }

  return (
    <div className="relative min-h-screen" style={{ paddingTop: 'var(--header-h)' }}>

      {/* Dynamic blurred cover background */}
      <div className="fixed inset-0 z-0 transition-opacity duration-700">
        <Image
          key={project.cover}
          src={project.cover}
          alt=""
          fill
          className="object-cover"
          style={{ filter: 'blur(40px) saturate(0.7) brightness(0.9)', transform: 'scale(1.2)' }}
          priority
        />
        <div className="absolute inset-0" style={{ background: 'rgba(232, 228, 223, 0.75)' }} />
      </div>

      {/* ── Sticky nav: categories + project tabs ── */}
      <nav
        className="sticky z-30 relative"
        style={{
          top: 'var(--header-h)',
          background: 'rgba(212, 207, 200, 0.6)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(180, 175, 168, 0.2)',
        }}
      >
        {/* Category row */}
        <div className="flex justify-center gap-8 pt-3 pb-2" style={{ borderBottom: '1px solid rgba(180, 175, 168, 0.2)' }}>
          {CATS.map((c) => (
            <button
              key={c.key}
              onClick={() => changeCat(c.key)}
              className="text-label cursor-pointer pb-1"
              style={{
                color: cat === c.key ? '#2C2824' : '#8a8070',
                background: 'none',
                border: 'none',
                minHeight: '44px',
                display: 'inline-flex',
                alignItems: 'center',
                borderBottom: cat === c.key ? '2px solid #2C2824' : '2px solid transparent',
                transition: 'color 0.3s ease',
              }}
            >
              {lang === 'ro' ? c.ro : c.en}
            </button>
          ))}
        </div>

        {/* Project tabs row */}
        <div className="relative">
          <div className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, rgba(212,207,200,0.6), transparent)' }} />
          <div className="flex gap-2 overflow-x-auto scrollbar-hide px-6 md:px-12 py-3">
            {list.map((p, i) => (
              <button
                key={p.slug}
                onClick={() => pick(i)}
                className="cursor-pointer shrink-0 flex items-center gap-2 transition-all"
                style={{
                  padding: '10px 16px',
                  minHeight: '44px',
                  background: idx === i ? 'rgba(255,255,255,0.6)' : 'transparent',
                  border: `1px solid ${idx === i ? '#2C2824' : 'rgba(180,175,168,0.4)'}`,
                  borderRadius: '2px',
                }}
              >
                {p.forSale && !p.sold && (
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#5a8a50', animation: 'pulse-gold 2s infinite' }} />
                )}
                <span className="text-display text-[14px] leading-tight" style={{ color: '#2C2824' }}>{p.name}</span>
                <span className="font-mono text-[8px] tracking-[1.5px] uppercase" style={{ color: p.sold && !p.forSale ? '#8a8070' : '#5a8a50' }}>
                  {p.sold && !p.forSale ? 'SOLD' : p.status[lang]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Viewer ── */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 py-8">

        {/* Title row — aligned with grid */}
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-display text-[clamp(28px,4vw,40px)] leading-none" style={{ color: '#2C2824' }}>{project.name}</h2>
              {project.sold && !project.forSale && (
                <span className="font-mono text-[9px] tracking-[2px] uppercase px-3 py-1" style={{ background: '#d4cfc8', color: '#7D766B', borderRadius: '100px' }}>SOLD</span>
              )}
              {project.forSale && (
                <span className="font-mono text-[9px] tracking-[2px] uppercase px-3 py-1" style={{ background: '#2C2824', color: '#f5f0e8', borderRadius: '100px' }}>{t('DE VÂNZARE', 'FOR SALE')}</span>
              )}
            </div>
            <div className="flex items-center gap-3 mt-2" style={{ color: '#7D766B' }}>
              <span className="font-mono text-[11px] tracking-wider">{project.year}</span>
              {project.team && (<><span style={{ color: '#B8B2A8' }}>·</span><span className="font-mono text-[11px] tracking-wider">{project.team}</span></>)}
              <span style={{ color: '#B8B2A8' }}>·</span>
              <span className="font-mono text-[11px] tracking-wider">{project.location}</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            {project.forSale && (
              <Link href="/contact" className="text-sm uppercase tracking-widest transition-colors px-6 py-3" style={{ background: '#2C2824', color: '#f5f0e8', borderRadius: '2px' }}>
                {t('Contactează-ne', 'Contact us')}
              </Link>
            )}
            <Link href={`/proiect/${project.slug}`} className="text-sm uppercase tracking-widest transition-all px-6 py-3" style={{ border: '1px solid rgba(180,175,168,0.5)', color: '#5E574E', borderRadius: '2px' }}>
              {t('Detalii', 'Details')} →
            </Link>
          </div>
        </div>

        {/* Main grid: image + specs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">

          {/* Image viewer (8 cols) */}
          <div className="md:col-span-8 flex flex-col gap-2">
            {/* Main image */}
            <div className="relative overflow-hidden" style={{ aspectRatio: '16/10', borderRadius: '4px', background: '#d4cfc8' }}>
              {imgs[imgIdx] ? (
                <Image
                  src={imgs[imgIdx].src}
                  alt={imgs[imgIdx].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 65vw"
                  className={tab === 'plans' ? 'object-contain p-4' : 'object-cover'}
                  style={tab === 'plans' ? { background: '#f5f3f0' } : undefined}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-sm" style={{ color: '#8a8070' }}>
                  {t('Nicio imagine', 'No image')}
                </div>
              )}

              {plans.length > 0 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 z-10" style={{ background: 'rgba(44, 40, 36, 0.7)', backdropFilter: 'blur(16px)', borderRadius: '100px', padding: '3px' }}>
                  <button onClick={() => pickTab('photos')} className="cursor-pointer font-mono text-[10px] tracking-[2px] uppercase px-4 py-2 rounded-full transition-all" style={{ background: tab === 'photos' ? '#f5f0e8' : 'transparent', color: tab === 'photos' ? '#2C2824' : '#B8B2A8', border: 'none' }}>
                    {t('Foto', 'Photos')}
                  </button>
                  <button onClick={() => pickTab('plans')} className="cursor-pointer font-mono text-[10px] tracking-[2px] uppercase px-4 py-2 rounded-full transition-all" style={{ background: tab === 'plans' ? '#f5f0e8' : 'transparent', color: tab === 'plans' ? '#2C2824' : '#B8B2A8', border: 'none' }}>
                    {t('Planuri', 'Plans')}
                  </button>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {imgs.length > 1 && (
              <div className="flex gap-1.5 overflow-x-auto scrollbar-hide">
                {imgs.map((img, i) => (
                  <button key={img.src} onClick={() => setImgIdx(i)} className="shrink-0 overflow-hidden cursor-pointer" style={{ width: '64px', height: '44px', borderRadius: '3px', border: `2px solid ${imgIdx === i ? '#2C2824' : 'transparent'}`, opacity: imgIdx === i ? 1 : 0.5, transition: 'all 0.3s ease', padding: 0, background: '#d4cfc8' }}>
                    <Image src={img.src} alt={img.alt} width={64} height={44} className={tab === 'plans' ? 'object-contain w-full h-full' : 'object-cover w-full h-full'} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Specs panel (4 cols) — same height as image */}
          <div className="md:col-span-4 flex flex-col">
            <div className="p-6 flex-1 flex flex-col justify-between" style={{ borderRadius: '4px', background: 'rgba(255,255,255,0.45)', backdropFilter: 'blur(16px)', border: '1px solid rgba(180,175,168,0.25)' }}>
            <div>
              <span className="text-label block mb-5" style={{ color: '#5E574E' }}>{t('SPECIFICAȚII', 'SPECIFICATIONS')}</span>
              <div className="space-y-5">
                {project.specs.teren && (
                  <div>
                    <span className="block font-mono text-[10px] tracking-widest uppercase" style={{ color: '#9C958A' }}>{t('Teren', 'Land')}</span>
                    <span className="text-display text-[24px] block mt-1" style={{ color: '#2C2824' }}>{project.specs.teren}</span>
                  </div>
                )}
                {project.specs.casa && (
                  <div>
                    <span className="block font-mono text-[10px] tracking-widest uppercase" style={{ color: '#9C958A' }}>{t('Casă', 'House')}</span>
                    <span className="text-display text-[24px] block mt-1" style={{ color: '#2C2824' }}>{project.specs.casa}</span>
                  </div>
                )}
                {project.specs.util && (
                  <div>
                    <span className="block font-mono text-[10px] tracking-widest uppercase" style={{ color: '#9C958A' }}>{t('Util', 'Usable')}</span>
                    <span className="text-display text-[24px] block mt-1" style={{ color: '#2C2824' }}>{project.specs.util}</span>
                  </div>
                )}
                {project.specs.regim && (
                  <div>
                    <span className="block font-mono text-[10px] tracking-widest uppercase" style={{ color: '#9C958A' }}>{t('Regim', 'Floors')}</span>
                    <span className="text-display text-[24px] block mt-1" style={{ color: '#2C2824' }}>{project.specs.regim}</span>
                  </div>
                )}
                {project.specs.dormitoare && (
                  <div>
                    <span className="block font-mono text-[10px] tracking-widest uppercase" style={{ color: '#9C958A' }}>{t('Dormitoare', 'Bedrooms')}</span>
                    <span className="text-display text-[24px] block mt-1" style={{ color: '#2C2824' }}>{project.specs.dormitoare}</span>
                  </div>
                )}
              </div>

            </div>

              {/* Location inside specs — pinned to bottom */}
              <div className="mt-6 pt-5 flex items-center gap-3" style={{ borderTop: '1px solid rgba(180,175,168,0.25)' }}>
                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" className="shrink-0" style={{ color: '#5E574E' }}><path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="currentColor" /></svg>
                <span className="font-mono text-[11px] tracking-wider uppercase" style={{ color: '#5E574E' }}>{project.location}</span>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="flex flex-col gap-2 mt-3 md:hidden">
              {project.forSale && (
                <Link href="/contact" className="block text-center py-4 text-sm uppercase tracking-widest" style={{ background: '#2C2824', color: '#f5f0e8', borderRadius: '2px' }}>
                  {t('Contactează-ne', 'Contact us')}
                </Link>
              )}
              <Link href={`/proiect/${project.slug}`} className="block text-center py-3 text-sm uppercase tracking-widest" style={{ border: '1px solid rgba(180,175,168,0.5)', color: '#5E574E', borderRadius: '2px' }}>
                {t('Detalii', 'Details')} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProiectePage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center bg-deep min-h-screen"><div className="divider-gold" style={{ width: '40px' }} /></div>}>
      <ProjectsContent />
    </Suspense>
  );
}
