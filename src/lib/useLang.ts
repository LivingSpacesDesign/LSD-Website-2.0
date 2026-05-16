'use client';
import { useState, useEffect, useCallback } from 'react';

type Lang = 'ro' | 'en';

export function useLang() {
  const [lang, setLang] = useState<Lang>('ro');

  useEffect(() => {
    const stored = localStorage.getItem('lsd-lang') as Lang | null;
    if (stored === 'en') setLang('en');

    const handler = () => {
      const current = localStorage.getItem('lsd-lang') as Lang | null;
      setLang(current === 'en' ? 'en' : 'ro');
    };
    window.addEventListener('langchange', handler);
    return () => window.removeEventListener('langchange', handler);
  }, []);

  const toggle = useCallback(() => {
    const next = lang === 'ro' ? 'en' : 'ro';
    localStorage.setItem('lsd-lang', next);
    setLang(next);
    window.dispatchEvent(new Event('langchange'));
    document.documentElement.lang = next;
  }, [lang]);

  const t = useCallback(
    (ro: string, en: string) => (lang === 'ro' ? ro : en),
    [lang]
  );

  return { lang, toggle, t };
}
