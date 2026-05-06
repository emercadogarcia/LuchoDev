export const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Desarrollo web',
  provider: { '@type': 'Person', name: 'Lucho Dev' },
  areaServed: 'Latinoamérica',
  priceRange: '$$ (desde 300 USD)',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios web',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sitios web' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web apps' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landing pages' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecommerce' } },
    ],
  },
}

export const injectSchemaOrg = () => {
  if (typeof document === 'undefined') return

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.text = JSON.stringify(schemaOrg)
  document.head.appendChild(script)
}
