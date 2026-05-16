import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termeni și Condiții | LSD',
  description:
    'Termenii și condițiile de utilizare a site-ului Living Spaces Design.',
  openGraph: {
    title: 'Termeni și Condiții | LSD',
    description:
      'Termenii și condițiile de utilizare a site-ului Living Spaces Design.',
    url: 'https://livingspacesdesign.ro/termeni',
    siteName: 'Living Spaces Design',
    locale: 'ro_RO',
    type: 'website',
    images: [{ url: '/img/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function TermeniPage() {
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
        Termeni și Condiții
      </h1>
      <div className="divider-gold" style={{ marginBottom: '48px' }} />

      <div className="legal-content">
        <p>
          Ultima actualizare: ianuarie 2025
        </p>

        <h2>1. Informații generale</h2>
        <p>
          Site-ul <strong>livingspacesdesign.ro</strong> este operat de{' '}
          <strong>LIVING SPACES DESIGN - DEVELOPMENT S.R.L.</strong>, cu sediul în
          Moara Vlăsiei, Str. Paris, nr. 28, jud. Ilfov, România, înregistrată la
          Registrul Comerțului sub nr. J23/3224/2021, CIF RO44325772.
        </p>
        <p>
          Prin accesarea și utilizarea acestui site, acceptați în mod implicit acești termeni și condiții.
          Dacă nu sunteți de acord, vă rugăm să nu utilizați site-ul.
        </p>

        <h2>2. Scopul site-ului</h2>
        <p>
          Acest site are caracter informativ și prezintă activitatea, portofoliul și serviciile
          oferite de Living Spaces Design. Informațiile prezentate pe site au scop orientativ și nu
          constituie ofertă comercială fermă.
        </p>
        <p>
          Detaliile proiectelor, specificațiile tehnice, prețurile și disponibilitatea pot fi
          modificate fără notificare prealabilă. Pentru informații actualizate, vă rugăm să ne
          contactați direct.
        </p>

        <h2>3. Proprietate intelectuală</h2>
        <p>
          Întregul conținut al site-ului — texte, imagini, fotografii, randări, planuri, logo-uri,
          design, cod sursă — este proprietatea Living Spaces Design sau a colaboratorilor săi și
          este protejat de legislația privind drepturile de autor și proprietatea intelectuală.
        </p>
        <p>
          Este interzisă reproducerea, distribuirea, modificarea sau utilizarea conținutului fără
          acordul prealabil scris al Living Spaces Design.
        </p>

        <h2>4. Limitarea răspunderii</h2>
        <p>
          Living Spaces Design depune eforturi rezonabile pentru a asigura exactitatea informațiilor
          publicate pe site, însă nu garantează că acestea sunt complete, actuale sau lipsite de erori.
        </p>
        <p>
          Nu ne asumăm răspunderea pentru:
        </p>
        <ul>
          <li>Eventuale erori sau omisiuni din conținutul site-ului</li>
          <li>Daune rezultate din utilizarea sau imposibilitatea utilizării site-ului</li>
          <li>Conținutul sau practicile site-urilor terțe către care se face trimitere</li>
          <li>Întreruperi ale funcționării site-ului din motive tehnice</li>
        </ul>

        <h2>5. Utilizarea site-ului</h2>
        <p>
          Prin utilizarea acestui site, vă angajați:
        </p>
        <ul>
          <li>Să utilizați site-ul doar în scopuri legale</li>
          <li>Să nu întreprindeți acțiuni care pot afecta funcționarea site-ului</li>
          <li>Să nu colectați sau extrageți date de pe site în mod automat (scraping)</li>
          <li>Să furnizați informații corecte prin formularul de contact</li>
        </ul>

        <h2>6. Protecția datelor</h2>
        <p>
          Prelucrarea datelor personale se realizează în conformitate cu Regulamentul General
          privind Protecția Datelor (GDPR) și legislația națională aplicabilă. Pentru detalii
          complete, consultați <a href="/politica-confidentialitate">Politica de Confidențialitate</a>.
        </p>
        <p>
          Pentru informații despre cookie-urile utilizate, consultați{' '}
          <a href="/politica-cookie">Politica Cookie</a>.
        </p>

        <h2>7. Modificări</h2>
        <p>
          Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment. Modificările
          intră în vigoare la publicarea pe această pagină. Utilizarea continuă a site-ului după
          publicarea modificărilor constituie acceptarea noilor termeni.
        </p>

        <h2>8. Legea aplicabilă</h2>
        <p>
          Acești termeni și condiții sunt guvernați de legislația României. Orice litigiu va fi
          soluționat de instanțele competente din România.
        </p>

        <h2>9. Contact</h2>
        <p>
          Pentru orice întrebări legate de acești termeni, ne puteți contacta la:
        </p>
        <ul>
          <li>Email: <a href="mailto:project2020@livingspacesdesign.ro">project2020@livingspacesdesign.ro</a></li>
          <li>Telefon: <a href="tel:+40745760829">0745 760 829</a></li>
          <li>Adresă: Moara Vlăsiei, Str. Paris, nr. 28, jud. Ilfov</li>
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
