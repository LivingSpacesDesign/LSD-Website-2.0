import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politica de Confidențialitate | LSD',
  description:
    'Politica de confidențialitate și protecția datelor personale — Living Spaces Design.',
  openGraph: {
    title: 'Politica de Confidențialitate | LSD',
    description:
      'Politica de confidențialitate și protecția datelor personale — Living Spaces Design.',
    url: 'https://livingspacesdesign.ro/politica-confidentialitate',
    siteName: 'Living Spaces Design',
    locale: 'ro_RO',
    type: 'website',
    images: [{ url: '/img/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function PoliticaConfidentialitatePage() {
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
        Politica de Confidențialitate
      </h1>
      <div className="divider-gold" style={{ marginBottom: '48px' }} />

      <div className="legal-content">
        <p>
          Ultima actualizare: ianuarie 2025
        </p>

        <h2>1. Date de identificare operator</h2>
        <p>
          Operatorul de date cu caracter personal este <strong>LIVING SPACES DESIGN - DEVELOPMENT S.R.L.</strong>,
          cu sediul în Moara Vlăsiei, Str. Paris, nr. 28, jud. Ilfov, România,
          înregistrată la Registrul Comerțului sub nr. J23/3224/2021,
          CIF RO44325772.
        </p>
        <p>
          Email: <a href="mailto:project2020@livingspacesdesign.ro">project2020@livingspacesdesign.ro</a><br />
          Telefon: <a href="tel:+40745760829">0745 760 829</a>
        </p>

        <h2>2. Categorii de date colectate</h2>
        <p>În cadrul utilizării site-ului nostru, putem colecta următoarele categorii de date:</p>
        <ul>
          <li><strong>Date de identificare:</strong> nume, prenume</li>
          <li><strong>Date de contact:</strong> adresă de email, număr de telefon</li>
          <li><strong>Date tehnice:</strong> adresa IP, tip browser, sistem de operare, pagini vizitate, durata vizitei</li>
          <li><strong>Cookie-uri:</strong> informații colectate prin cookie-uri și tehnologii similare (vezi <a href="/politica-cookie">Politica Cookie</a>)</li>
        </ul>

        <h2>3. Scopurile prelucrării</h2>
        <p>Datele personale sunt prelucrate în următoarele scopuri:</p>
        <ul>
          <li>Răspunsul la cererile și solicitările dumneavoastră trimise prin formularul de contact</li>
          <li>Îmbunătățirea experienței de navigare și a conținutului site-ului</li>
          <li>Asigurarea securității și funcționării corecte a site-ului</li>
          <li>Respectarea obligațiilor legale</li>
          <li>Comunicări comerciale, doar cu consimțământul dumneavoastră explicit</li>
        </ul>

        <h2>4. Baze legale pentru prelucrare</h2>
        <p>Prelucrarea datelor se bazează pe:</p>
        <ul>
          <li><strong>Consimțământul dumneavoastră</strong> — pentru trimiterea formularului de contact și cookie-uri opționale</li>
          <li><strong>Interesul nostru legitim</strong> — pentru îmbunătățirea serviciilor și securitatea site-ului</li>
          <li><strong>Obligații legale</strong> — când legislația ne obligă să prelucrăm anumite date</li>
        </ul>

        <h2>5. Drepturile dumneavoastră</h2>
        <p>
          Conform Regulamentului General privind Protecția Datelor (GDPR), aveți următoarele drepturi:
        </p>
        <ul>
          <li><strong>Dreptul de acces</strong> — puteți solicita o copie a datelor personale pe care le deținem</li>
          <li><strong>Dreptul la rectificare</strong> — puteți solicita corectarea datelor inexacte</li>
          <li><strong>Dreptul la ștergere</strong> — puteți solicita ștergerea datelor personale</li>
          <li><strong>Dreptul la portabilitate</strong> — puteți solicita transferul datelor într-un format structurat</li>
          <li><strong>Dreptul la opoziție</strong> — vă puteți opune prelucrării datelor în anumite situații</li>
          <li><strong>Dreptul de a retrage consimțământul</strong> — în orice moment, fără a afecta legalitatea prelucrării anterioare</li>
        </ul>
        <p>
          Pentru exercitarea acestor drepturi, ne puteți contacta la{' '}
          <a href="mailto:project2020@livingspacesdesign.ro">project2020@livingspacesdesign.ro</a>.
        </p>
        <p>
          De asemenea, aveți dreptul de a depune o plângere la Autoritatea Națională de Supraveghere
          a Prelucrării Datelor cu Caracter Personal (ANSPDCP).
        </p>

        <h2>6. Perioada de retenție</h2>
        <p>
          Datele personale sunt păstrate doar pe perioada necesară îndeplinirii scopurilor pentru care
          au fost colectate sau conform cerințelor legale aplicabile. Datele colectate prin formularul
          de contact sunt păstrate maximum 2 ani de la ultima interacțiune.
        </p>

        <h2>7. Transferuri de date</h2>
        <p>
          Datele dumneavoastră nu sunt transferate către terți, cu excepția furnizorilor de servicii
          esențiale pentru funcționarea site-ului (hosting, analiză web) și a autorităților competente,
          când legea o impune.
        </p>

        <h2>8. Securitatea datelor</h2>
        <p>
          Implementăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor personale
          împotriva accesului neautorizat, pierderii sau distrugerii.
        </p>

        <h2>9. Cookie-uri</h2>
        <p>
          Acest site utilizează cookie-uri. Pentru informații detaliate, consultați{' '}
          <a href="/politica-cookie">Politica Cookie</a>.
        </p>

        <h2>10. Modificări</h2>
        <p>
          Ne rezervăm dreptul de a actualiza această politică. Orice modificare va fi publicată pe
          această pagină, cu data ultimei actualizări menționată în partea de sus.
        </p>

        <h2>11. Contact</h2>
        <p>
          Pentru orice întrebări legate de protecția datelor personale, ne puteți contacta la:
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
