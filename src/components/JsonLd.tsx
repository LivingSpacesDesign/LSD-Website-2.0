export function JsonLd() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Living Spaces Design',
    alternateName: 'LSD — Living Spaces Design',
    url: 'https://livingspacesdesign.ro',
    telephone: '+40745760829',
    email: 'project2020@livingspacesdesign.ro',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Str. Paris, nr. 28',
      addressLocality: 'Căciulati',
      addressRegion: 'Ilfov',
      postalCode: '077105',
      addressCountry: 'RO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.567,
      longitude: 26.139,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    image: 'https://livingspacesdesign.ro/img/og-image.jpg',
    description: 'Dezvoltator rezidențial premium în Căciulati — case concept și case personalizate.',
    sameAs: [
      'https://www.instagram.com/lsd_livingspacesdesign/',
      'https://www.facebook.com/LSDLivingSpacesDesign',
    ],
  };

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Living Spaces Design',
    url: 'https://livingspacesdesign.ro',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://livingspacesdesign.ro/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
    </>
  );
}
