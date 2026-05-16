import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/acasa', destination: '/', permanent: true },
      { source: '/case-construite', destination: '/proiecte', permanent: true },
      { source: '/case-concept', destination: '/proiecte?cat=concept', permanent: true },
      { source: '/case-personalizate', destination: '/proiecte?cat=personalizat', permanent: true },
      { source: '/contact-form', destination: '/contact', permanent: true },
      { source: '/politica-de-confidentialitate', destination: '/politica-confidentialitate', permanent: true },
      { source: '/politica-de-cookie-uri', destination: '/politica-cookie', permanent: true },
      { source: '/termene-si-conditii', destination: '/termeni', permanent: true },
    ];
  },
};

export default nextConfig;
