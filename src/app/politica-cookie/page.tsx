import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politica Cookie | LSD',
  description:
    'Informații despre cookie-urile utilizate pe site-ul Living Spaces Design.',
  openGraph: {
    title: 'Politica Cookie | LSD',
    description:
      'Informații despre cookie-urile utilizate pe site-ul Living Spaces Design.',
    url: 'https://livingspacesdesign.ro/politica-cookie',
    siteName: 'Living Spaces Design',
    locale: 'ro_RO',
    type: 'website',
    images: [{ url: '/img/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function PoliticaCookiePage() {
  return (
    <article
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '192px 24px 120px',
      }}
      className="md:!px-12"
    >
      <h1
        className="text-display"
        style={{
          fontSize: 'clamp(28px, 4vw, 40px)',
          color: 'var(--color-cream)',
          marginBottom: '16px',
        }}
      >
        Politica Cookie
      </h1>
      <div className="divider-gold" style={{ marginBottom: '48px' }} />

      <div className="legal-content">
        <p>
          Ultima actualizare: ianuarie 2025
        </p>

        <h2>1. Ce sunt cookie-urile?</h2>
        <p>
          Cookie-urile sunt fișiere text de mici dimensiuni, stocate pe dispozitivul dumneavoastră
          (computer, telefon, tabletă) atunci când vizitați un site web. Acestea permit site-ului să
          rețină informații despre vizita dumneavoastră, facilitând navigarea și îmbunătățind
          experiența de utilizare.
        </p>

        <h2>2. Tipuri de cookie-uri utilizate</h2>

        <h3>Cookie-uri esențiale</h3>
        <p>
          Sunt necesare pentru funcționarea de bază a site-ului. Fără acestea, site-ul nu poate
          funcționa corect. Nu necesită consimțământ.
        </p>
        <ul>
          <li>Preferințe de limbă</li>
          <li>Consimțământ cookie</li>
          <li>Sesiune de navigare</li>
        </ul>

        <h3>Cookie-uri de performanță</h3>
        <p>
          Colectează informații anonime despre modul în care vizitatorii utilizează site-ul,
          ajutându-ne să îmbunătățim funcționarea acestuia.
        </p>

        <h3>Cookie-uri de funcționalitate</h3>
        <p>
          Permit site-ului să rețină preferințele dumneavoastră (limba, regiune) pentru a oferi
          o experiență personalizată.
        </p>

        <h3>Cookie-uri analitice</h3>
        <p>
          Utilizăm Google Analytics pentru a analiza traficul site-ului și comportamentul
          vizitatorilor. Aceste cookie-uri colectează date anonime precum paginile vizitate,
          durata vizitei și sursa traficului.
        </p>

        <h2>3. Cookie-uri terțe</h2>
        <p>
          Pe site-ul nostru pot fi plasate cookie-uri de către servicii terțe:
        </p>
        <ul>
          <li>
            <strong>Google Analytics / Google Tag Manager</strong> (ID container: GTM-T59B9ZM) — pentru
            analiza traficului și comportamentului vizitatorilor. Datele colectate sunt anonimizate.
            Mai multe detalii: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Politica de confidențialitate Google</a>.
          </li>
        </ul>

        <h2>4. Controlul cookie-urilor</h2>
        <p>
          Puteți controla și gestiona cookie-urile în mai multe moduri:
        </p>
        <ul>
          <li>
            <strong>Banner cookie:</strong> La prima vizită pe site, veți primi un banner care vă
            permite să acceptați sau să refuzați cookie-urile opționale.
          </li>
          <li>
            <strong>Setări browser:</strong> Majoritatea browserelor vă permit să blocați sau să
            ștergeți cookie-urile. Consultați secțiunea de ajutor a browserului dumneavoastră.
          </li>
          <li>
            <strong>Opt-out Google Analytics:</strong> Puteți utiliza{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              extensia Google Analytics Opt-out
            </a>.
          </li>
        </ul>
        <p>
          Atenție: blocarea cookie-urilor esențiale poate afecta funcționarea site-ului.
        </p>

        <h2>5. Modificări</h2>
        <p>
          Această politică poate fi actualizată periodic. Orice modificare va fi publicată pe
          această pagină, cu data ultimei actualizări menționată în partea de sus.
        </p>

        <h2>6. Contact</h2>
        <p>
          Pentru întrebări sau solicitări legate de cookie-uri, ne puteți contacta la:
        </p>
        <ul>
          <li>Email: <a href="mailto:project2020@livingspacesdesign.ro">project2020@livingspacesdesign.ro</a></li>
          <li>Telefon: <a href="tel:+40745760829">0745 760 829</a></li>
        </ul>
      </div>

      <style>{`
        .legal-content {
          color: var(--color-cream-muted);
          font-size: 15px;
          line-height: 1.8;
        }
        .legal-content h2 {
          font-family: var(--font-display);
          font-size: 24px;
          color: var(--color-cream);
          margin-top: 48px;
          margin-bottom: 16px;
          font-weight: 400;
        }
        .legal-content h3 {
          font-family: var(--font-display);
          font-size: 18px;
          color: var(--color-cream);
          margin-top: 32px;
          margin-bottom: 12px;
          font-weight: 400;
        }
        .legal-content p {
          margin-bottom: 16px;
        }
        .legal-content ul {
          margin-bottom: 16px;
          padding-left: 24px;
        }
        .legal-content li {
          margin-bottom: 8px;
        }
        .legal-content a {
          color: var(--color-gold);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .legal-content a:hover {
          color: var(--color-gold-light);
        }
        .legal-content strong {
          color: var(--color-cream);
        }
      `}</style>
    </article>
  );
}
