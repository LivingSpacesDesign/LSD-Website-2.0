'use client';

import { useEffect } from 'react';

export function FaviconMeta() {
  useEffect(() => {
    const setFavicon = (isDark: boolean) => {
      const href = isDark ? '/icon-dark.png' : '/icon-light.png';

      // Try to find existing icon link
      let link = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;

      if (!link) {
        // Also try rel="shortcut icon"
        link = document.querySelector("link[rel='shortcut icon']") as HTMLLinkElement | null;
      }

      if (link) {
        link.href = href;
      } else {
        // Create one if none exists
        const newLink = document.createElement('link');
        newLink.rel = 'icon';
        newLink.href = href;
        document.head.appendChild(newLink);
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
