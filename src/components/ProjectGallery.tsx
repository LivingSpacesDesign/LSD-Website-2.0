'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import type { ProjectImage } from '@/lib/projects';

type Tab = 'photo' | 'plan';

const TAB_CONFIG: { key: Tab; label: string }[] = [
  { key: 'photo', label: 'Fotografii' },
  { key: 'plan', label: 'Planuri' },
];

export function ProjectGallery({ images }: { images: ProjectImage[] }) {
  const [activeTab, setActiveTab] = useState<Tab>('photo');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Photos include 'photo' and 'render' types
  const photos = images.filter((img) => img.type === 'photo' || img.type === 'render');
  const plans = images.filter((img) => img.type === 'plan');

  const currentImages = activeTab === 'photo' ? photos : plans;
  const lightboxOpen = lightboxIndex !== null;

  // If no plans, only show photos tab
  const showTabs = plans.length > 0;

  // Switch to photo tab if plans is empty and active
  useEffect(() => {
    if (activeTab === 'plan' && plans.length === 0) {
      setActiveTab('photo');
    }
  }, [activeTab, plans.length]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev < currentImages.length - 1 ? prev + 1 : 0;
    });
  }, [currentImages.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev > 0 ? prev - 1 : currentImages.length - 1;
    });
  }, [currentImages.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxOpen, closeLightbox, goNext, goPrev]);

  if (photos.length === 0 && plans.length === 0) return null;

  return (
    <section className="bg-surface" style={{ padding: '80px 0' }}>
      {/* Label */}
      <div className="text-center mb-8">
        <span className="text-label" style={{ color: 'var(--color-gold)' }}>
          GALERIE
        </span>
      </div>

      {/* Tabs */}
      {showTabs && (
        <div className="flex items-center justify-center gap-8 mb-10">
          {TAB_CONFIG.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="text-label cursor-pointer"
              style={{
                color:
                  activeTab === tab.key
                    ? 'var(--color-gold)'
                    : 'var(--color-stone)',
                background: 'none',
                border: 'none',
                padding: '0 0 8px 0',
                borderBottom:
                  activeTab === tab.key
                    ? '2px solid var(--color-gold)'
                    : '2px solid transparent',
                transition: 'color 0.3s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div
        className="mx-auto"
        style={{ maxWidth: '1200px', padding: '0 clamp(16px, 4vw, 48px)' }}
      >
        <div
          className={
            activeTab === 'photo'
              ? 'grid grid-cols-2 md:grid-cols-3 gap-2'
              : 'grid grid-cols-1 md:grid-cols-2 gap-2'
          }
        >
          {currentImages.map((img, i) => (
            <button
              key={img.src}
              onClick={() => openLightbox(i)}
              className="img-reveal overflow-hidden rounded-sm cursor-pointer relative block w-full"
              style={{
                aspectRatio: activeTab === 'plan' ? '4/3' : 'auto',
                background: 'var(--color-card)',
                border: 'none',
                padding: 0,
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={activeTab === 'plan' ? 800 : 600}
                height={activeTab === 'plan' ? 600 : 400}
                sizes={
                  activeTab === 'photo'
                    ? '(max-width: 768px) 50vw, 380px'
                    : '(max-width: 768px) 100vw, 580px'
                }
                className="object-cover w-full h-full"
                style={activeTab === 'plan' ? { objectFit: 'contain', background: 'var(--color-card)' } : undefined}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && lightboxIndex !== null && currentImages[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: 'rgba(5, 5, 4, 0.95)',
          }}
        >
          {/* Backdrop click */}
          <button
            onClick={closeLightbox}
            className="absolute inset-0 cursor-pointer"
            style={{ background: 'transparent', border: 'none' }}
            aria-label="Close lightbox"
          />

          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-cream hover-gold cursor-pointer z-10"
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              padding: '12px',
              minWidth: '44px',
              minHeight: '44px',
              lineHeight: 1,
            }}
            aria-label="Close"
          >
            &times;
          </button>

          {/* Prev */}
          {currentImages.length > 1 && (
            <button
              onClick={goPrev}
              className="absolute left-4 md:left-8 text-cream hover-gold cursor-pointer z-10"
              style={{
                background: 'none',
                border: 'none',
                fontSize: '28px',
                padding: '16px',
                minWidth: '44px',
                minHeight: '44px',
                lineHeight: 1,
              }}
              aria-label="Previous image"
            >
              &lsaquo;
            </button>
          )}

          {/* Image */}
          <div
            className="relative z-10"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
            }}
          >
            <Image
              src={currentImages[lightboxIndex].src}
              alt={currentImages[lightboxIndex].alt}
              width={1400}
              height={900}
              sizes="90vw"
              className="object-contain"
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                width: 'auto',
                height: 'auto',
              }}
              priority
            />
          </div>

          {/* Next */}
          {currentImages.length > 1 && (
            <button
              onClick={goNext}
              className="absolute right-4 md:right-8 text-cream hover-gold cursor-pointer z-10"
              style={{
                background: 'none',
                border: 'none',
                fontSize: '28px',
                padding: '16px',
                minWidth: '44px',
                minHeight: '44px',
                lineHeight: 1,
              }}
              aria-label="Next image"
            >
              &rsaquo;
            </button>
          )}

          {/* Counter */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-stone z-10"
            style={{ fontSize: '13px', letterSpacing: '0.1em' }}
          >
            {lightboxIndex + 1} / {currentImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
