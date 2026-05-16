import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, getProject } from '@/lib/projects';
import { ProjectGallery } from '@/components/ProjectGallery';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: 'Proiect negasit | LSD' };
  }

  return {
    title: `${project.name} | LSD — Living Spaces Design`,
    description: project.description.ro,
    openGraph: {
      title: `${project.name} | LSD — Living Spaces Design`,
      description: project.description.ro,
      url: `https://livingspacesdesign.ro/proiect/${slug}`,
      siteName: 'Living Spaces Design',
      locale: 'ro_RO',
      type: 'website',
      images: [{ url: project.cover, width: 1200, height: 630 }],
    },
  };
}

const SPEC_LABELS: Record<string, string> = {
  teren: 'Teren',
  casa: 'Casa',
  util: 'Util',
  regim: 'Regim',
  dormitoare: 'Dormitoare',
};

export default async function ProiectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  // Find prev/next projects
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const specs = Object.entries(project.specs).filter(
    ([, value]) => value !== undefined,
  );

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ height: '70vh', minHeight: '480px' }}
      >
        <Image
          src={project.cover}
          alt={project.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, transparent 30%, var(--color-deep) 100%)',
          }}
        />

        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ padding: 'clamp(24px, 5vw, 48px)' }}
        >
          <Link
            href="/proiecte"
            className="text-label hover-gold inline-block mb-6"
            style={{ color: 'var(--color-gold)' }}
          >
            &larr; Inapoi la proiecte
          </Link>

          <div className="animate-fade-up">
            <h1
              className="text-display text-cream"
              style={{ fontSize: 'clamp(44px, 7vw, 72px)' }}
            >
              {project.name}
            </h1>

            <div className="flex items-center gap-4 mt-4">
              {project.sold && !project.forSale ? (
                <span
                  className="text-label"
                  style={{
                    color: 'var(--color-ash)',
                    textDecoration: 'line-through',
                    textDecorationColor: 'var(--color-ash)',
                  }}
                >
                  VANDUT
                </span>
              ) : project.forSale ? (
                <span
                  className="text-label"
                  style={{
                    color: 'var(--color-deep)',
                    background: 'var(--color-gold)',
                    padding: '4px 12px',
                    borderRadius: '100px',
                  }}
                >
                  DE VANZARE
                </span>
              ) : null}
            </div>

            <p
              className="text-stone mt-3"
              style={{ fontSize: '14px', letterSpacing: '0.05em' }}
            >
              {project.year} &middot; {project.location}
            </p>
          </div>
        </div>
      </section>

      {/* Info section */}
      <section
        className="mx-auto"
        style={{ maxWidth: '1200px', padding: 'clamp(48px, 8vw, 80px) clamp(24px, 5vw, 48px)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Content */}
          <div className="md:col-span-7">
            <span
              className="text-label"
              style={{ color: 'var(--color-gold)' }}
            >
              DESPRE PROIECT
            </span>

            <p
              className="text-cream-muted mt-6"
              style={{ fontSize: '17px', lineHeight: '1.8' }}
            >
              {project.description.ro}
            </p>

            {project.extras && project.extras.length > 0 && (
              <div className="mt-10">
                <span
                  className="text-label"
                  style={{ color: 'var(--color-gold)' }}
                >
                  FACILITATI
                </span>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.extras.map((extra) => (
                    <span
                      key={extra}
                      className="text-stone border border-border rounded-sm"
                      style={{
                        fontSize: '13px',
                        padding: '4px 12px',
                      }}
                    >
                      {extra}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Specs card */}
          <div className="md:col-span-5">
            <div
              className="bg-card rounded-sm"
              style={{ padding: 'clamp(20px, 4vw, 32px)' }}
            >
              <span
                className="text-label"
                style={{ color: 'var(--color-gold)' }}
              >
                SPECIFICATII
              </span>

              <div className="mt-6 space-y-6">
                {specs.map(([key, value]) => (
                  <div key={key}>
                    <span className="text-label text-ash">
                      {SPEC_LABELS[key] || key}
                    </span>
                    <p
                      className="text-display text-cream mt-1"
                      style={{ fontSize: '28px' }}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Location */}
              <div className="mt-8 pt-6 border-t border-border">
                <span className="text-label text-ash">Locatie</span>
                <p
                  className="text-cream mt-1 flex items-center gap-2"
                  style={{ fontSize: '15px' }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gold"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {project.location}
                </p>
              </div>

              {/* CTA */}
              {project.forSale && (
                <Link
                  href="/contact"
                  className="block text-center mt-8 text-label"
                  style={{
                    background: 'var(--color-gold)',
                    color: 'var(--color-deep)',
                    padding: '14px 24px',
                    borderRadius: '2px',
                    letterSpacing: '0.15em',
                    transition: 'background 0.3s ease',
                  }}
                >
                  CONTACTEAZA-NE
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <ProjectGallery images={project.images} />

      {/* Prev / Next navigation */}
      <div
        className="border-t border-border"
        style={{ padding: 'clamp(24px, 4vw, 32px) clamp(24px, 5vw, 48px)' }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{ maxWidth: '1200px' }}
        >
          {prevProject ? (
            <Link
              href={`/proiect/${prevProject.slug}`}
              className="hover-gold text-stone"
              style={{ fontSize: '15px', transition: 'color 0.3s ease' }}
            >
              &larr; {prevProject.name}
            </Link>
          ) : (
            <span />
          )}

          {nextProject ? (
            <Link
              href={`/proiect/${nextProject.slug}`}
              className="hover-gold text-stone text-right"
              style={{ fontSize: '15px', transition: 'color 0.3s ease' }}
            >
              {nextProject.name} &rarr;
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </>
  );
}
