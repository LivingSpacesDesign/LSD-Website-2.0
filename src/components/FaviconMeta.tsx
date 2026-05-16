'use client';

import { useEffect } from 'react';

export function FaviconMeta() {
  useEffect(() => {
    const setFavicon = (isDark: boolean) => {
      const link = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
      if (link) {
        link.href = isDark ? '/icon-dark.png' : '/icon-light.png';
      }
    };

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setFavicon(mq.matches);
    const handler = (e: MediaQueryListEvent) => setFavicon(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return null;
}
