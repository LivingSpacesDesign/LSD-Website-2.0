'use client';

import { useState } from 'react';

const INTEREST_OPTIONS = [
  'Case Concept',
  'Case Personalizate',
  'Casa HH',
  'Altceva',
] as const;

export default function ContactPage() {
  const [interest, setInterest] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const fd = new FormData(e.currentTarget);
    console.log('Contact:', { name: fd.get('name'), phone: fd.get('phone'), email: fd.get('email'), interest, message: fd.get('message') });
    await new Promise((r) => setTimeout(r, 800));
    setStatus('sent');
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Video background — fixed */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/img/contact-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: 'rgba(10, 10, 8, 0.85)' }} />
      </div>

      {/* Content — centered vertically */}
      <div
        className="relative z-10 flex-1 flex items-center"
        style={{ paddingTop: 'var(--header-h)' }}
      >
        <div className="w-full max-w-[1100px] mx-auto px-6 md:px-12 py-8">

          {/* 3-column layout: info | form | quick actions */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr_1fr] gap-8 lg:gap-10 items-start">

            {/* ── Col 1: Info ── */}
            <div className="hidden lg:flex flex-col justify-between h-full">
              <div>
                <p className="text-display text-[28px] text-cream leading-tight">
                  Hai să<br />
                  <span className="text-editorial text-gold">vorbim.</span>
                </p>
                <div className="divider-gold mt-6 mb-8" />

                <div className="space-y-5">
                  <div>
                    <span className="text-label text-stone block mb-1">TELEFON</span>
                    <a href="tel:+40745760829" className="text-cream text-[15px] hover-gold transition-colors">0745 760 829</a>
                  </div>
                  <div>
                    <span className="text-label text-stone block mb-1">EMAIL</span>
                    <a href="mailto:project2020@livingspacesdesign.ro" className="text-cream text-[15px] hover-gold transition-colors break-all">project2020@livingspacesdesign.ro</a>
                  </div>
                  <div>
                    <span className="text-label text-stone block mb-1">ADRESĂ</span>
                    <span className="text-cream text-[15px]">Moara Vlăsiei, Str. Paris,<br />nr. 28, jud. Ilfov</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <span style={{ color: 'var(--color-ash)', fontSize: '11px' }}>
                  LIVING SPACES DESIGN - DEVELOPMENT S.R.L.
                  <br />
                  CIF: RO44325772 · J23/3224/2021
                </span>
              </div>
            </div>

            {/* ── Col 2: Form (center, prominent) ── */}
            <div
              className="bg-card/60 backdrop-blur-sm border border-border"
              style={{ padding: 'clamp(24px, 4vw, 40px)', borderRadius: '2px' }}
            >
              {status === 'sent' ? (
                <div className="text-center py-12 animate-fade-up">
                  <p className="text-display text-gold text-[28px] mb-3">Mulțumim!</p>
                  <p className="text-stone text-[15px]">Te vom contacta în cel mai scurt timp.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                    <input name="name" type="text" required placeholder="Nume" className="contact-input col-span-1" />
                    <input name="phone" type="tel" placeholder="Telefon" className="contact-input col-span-1" />
                  </div>
                  <input name="email" type="email" required placeholder="Email" className="contact-input" />

                  {/* Interest pills */}
                  <div style={{ padding: '16px 0 8px' }}>
                    <span className="text-label text-stone block mb-3">INTERES</span>
                    <div className="flex flex-wrap gap-2">
                      {INTEREST_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setInterest(interest === opt ? '' : opt)}
                          className="cursor-pointer text-[13px] transition-all"
                          style={{
                            padding: '10px 16px',
                            minHeight: '44px',
                            border: `1px solid ${interest === opt ? 'var(--color-gold)' : 'var(--color-border)'}`,
                            color: interest === opt ? 'var(--color-gold)' : 'var(--color-stone)',
                            background: interest === opt ? 'rgba(196, 168, 124, 0.1)' : 'transparent',
                            borderRadius: '2px',
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <textarea
                    name="message"
                    placeholder="Mesaj"
                    required
                    className="contact-input"
                    style={{ minHeight: '80px', resize: 'none' }}
                  />

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full cursor-pointer mt-6"
                    style={{
                      padding: '14px',
                      background: 'var(--color-gold)',
                      color: 'var(--color-deep)',
                      border: 'none',
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                      transition: 'background 0.3s ease',
                      opacity: status === 'sending' ? 0.7 : 1,
                    }}
                  >
                    {status === 'sending' ? 'Se trimite...' : 'Trimite mesajul'}
                  </button>
                </form>
              )}
            </div>

            {/* ── Col 3: Quick actions ── */}
            <div className="flex flex-col gap-4">
              {/* WhatsApp — big CTA */}
              <a
                href="https://wa.me/40745760829"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-border p-5 hover:border-gold transition-colors"
                style={{ borderRadius: '2px' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gold shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div>
                  <span className="text-cream text-[15px] group-hover:text-gold transition-colors">WhatsApp</span>
                  <span className="text-stone text-[12px] block mt-0.5">Răspuns rapid</span>
                </div>
              </a>

              {/* Call */}
              <a
                href="tel:+40745760829"
                className="group flex items-center gap-4 border border-border p-5 hover:border-gold transition-colors"
                style={{ borderRadius: '2px' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold shrink-0">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <div>
                  <span className="text-cream text-[15px] group-hover:text-gold transition-colors">0745 760 829</span>
                  <span className="text-stone text-[12px] block mt-0.5">Sună acum</span>
                </div>
              </a>

              {/* Social */}
              <div className="border border-border p-5" style={{ borderRadius: '2px' }}>
                <span className="text-label text-stone block mb-3">SOCIAL</span>
                <div className="flex flex-col gap-2">
                  <a href="https://instagram.com/lsd_livingspacesdesign" target="_blank" rel="noopener noreferrer" className="text-cream text-[14px] hover-gold transition-colors">
                    Instagram →
                  </a>
                  <a href="https://facebook.com/LSDLivingSpacesDesign" target="_blank" rel="noopener noreferrer" className="text-cream text-[14px] hover-gold transition-colors">
                    Facebook →
                  </a>
                </div>
              </div>

              {/* Location */}
              <a
                href="https://maps.google.com/?q=44.386,26.194"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-border p-5 hover:border-gold transition-colors"
                style={{ borderRadius: '2px' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <span className="text-cream text-[14px] group-hover:text-gold transition-colors">Moara Vlăsiei</span>
                  <span className="font-mono text-ash text-[11px] block mt-0.5">44.386°N · 26.194°E</span>
                </div>
              </a>

              {/* Mobile-only info */}
              <div className="lg:hidden border border-border p-5" style={{ borderRadius: '2px' }}>
                <span className="text-label text-stone block mb-3">EMAIL</span>
                <a href="mailto:project2020@livingspacesdesign.ro" className="text-cream text-[14px] hover-gold transition-colors break-all">
                  project2020@livingspacesdesign.ro
                </a>
                <div className="divider mt-4 mb-3" />
                <span style={{ color: 'var(--color-ash)', fontSize: '11px' }}>
                  LIVING SPACES DESIGN - DEVELOPMENT S.R.L.<br />
                  CIF: RO44325772 · J23/3224/2021
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-input {
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--color-border);
          padding: 16px 0;
          color: var(--color-cream);
          font-size: 16px;
          font-family: var(--font-sans);
          width: 100%;
          outline: none;
          transition: border-color 0.3s ease;
        }
        .contact-input::placeholder {
          color: var(--color-ash);
        }
        .contact-input:focus {
          border-bottom-color: var(--color-gold);
        }
      `}</style>
    </div>
  );
}
