import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-deep)',
        padding: '24px',
      }}
    >
      <span
        className="text-display"
        style={{
          fontSize: 'clamp(80px, 12vw, 120px)',
          color: 'var(--color-gold)',
          lineHeight: 1,
        }}
      >
        404
      </span>

      <p
        style={{
          fontSize: '20px',
          color: 'var(--color-cream)',
          marginTop: '16px',
          textAlign: 'center',
        }}
      >
        Pagina nu a fost găsită
      </p>

      <div
        style={{
          display: 'flex',
          gap: '16px',
          marginTop: '40px',
        }}
      >
        <Link
          href="/"
          style={{
            padding: '14px 32px',
            background: 'var(--color-gold)',
            color: 'var(--color-deep)',
            textDecoration: 'none',
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            transition: 'background 0.3s ease',
          }}
        >
          Acasă
        </Link>
        <Link
          href="/contact"
          style={{
            padding: '14px 32px',
            border: '1px solid var(--color-border)',
            color: 'var(--color-cream)',
            textDecoration: 'none',
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            transition: 'all 0.3s ease',
          }}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
