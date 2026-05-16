'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('lsd-cookie-consent');
    if (consent) return;

    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  function handleChoice(accepted: boolean) {
    localStorage.setItem('lsd-cookie-consent', accepted ? 'accepted' : 'declined');
    setExiting(true);
    setTimeout(() => setVisible(false), 300);
  }

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        padding: '16px',
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          background: 'var(--color-card)',
          border: '1px solid var(--color-border)',
          borderRadius: '2px',
          padding: '16px 24px',
          maxWidth: '600px',
          width: '100%',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          animation: exiting
            ? 'cookieSlideOut 0.3s ease forwards'
            : 'cookieSlideIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        }}
      >
        <p style={{ color: 'var(--color-cream-muted)', fontSize: '13px', lineHeight: 1.5, margin: 0, flex: 1, minWidth: '200px' }}>
          Folosim cookie-uri pentru o experiență optimă.{' '}
          <Link
            href="/politica-cookie"
            style={{
              color: 'var(--color-gold)',
              textDecoration: 'none',
            }}
          >
            Politica Cookie
          </Link>
        </p>

        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => handleChoice(true)}
            style={{
              flex: 1,
              padding: '12px 20px',
              minHeight: '44px',
              background: 'var(--color-gold)',
              color: 'var(--color-deep)',
              border: 'none',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.background = 'var(--color-gold-light)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.background = 'var(--color-gold)';
            }}
          >
            Accept
          </button>
          <button
            onClick={() => handleChoice(false)}
            style={{
              flex: 1,
              padding: '12px 20px',
              minHeight: '44px',
              background: 'transparent',
              color: 'var(--color-stone)',
              border: '1px solid var(--color-border)',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.borderColor = 'var(--color-stone)';
              (e.target as HTMLButtonElement).style.color = 'var(--color-cream)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.borderColor = 'var(--color-border)';
              (e.target as HTMLButtonElement).style.color = 'var(--color-stone)';
            }}
          >
            Refuz
          </button>
        </div>
      </div>

      <style>{`
        @keyframes cookieSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes cookieSlideOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(20px);
          }
        }
      `}</style>
    </div>
  );
}
