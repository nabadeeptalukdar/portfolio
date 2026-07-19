export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Nabadeep Talukdar',
  jobTitle: 'Shopify Developer and Full Stack Web Developer',
  description:
    'Freelance web developer helping businesses with Shopify development, business websites, ecommerce websites, technical SEO, and premium web design.',
  url: 'https://nabadeeptalukdar.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Guwahati',
    addressRegion: 'Assam',
    addressCountry: 'India',
  },
  sameAs: [
    'https://github.com/nabadeeptalukdar',
    'https://www.linkedin.com/in/nabadeeptalukdar817/',
  ],
  email: 'nabadeeptalukdarbusiness@gmail.com',
  telephone: '+917002969984',
};

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Nabadeep Talukdar',
  url: 'https://nabadeeptalukdar.com',
  image: 'https://nabadeeptalukdar.com/images/nabadeep.png',
  telephone: '+917002969984',
  email: 'nabadeeptalukdarbusiness@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Guwahati',
    addressRegion: 'Assam',
    addressCountry: 'India',
  },
  areaServed: 'Worldwide',
  sameAs: [
    'https://github.com/nabadeeptalukdar',
    'https://www.linkedin.com/in/nabadeeptalukdar817/',
  ],
  description:
    'Professional Shopify development, Shopify store design, custom Shopify development, Shopify speed optimization, Shopify SEO, WordPress development, business websites, ecommerce websites, full stack web development, website redesign, website maintenance, technical SEO, and website performance optimization.',
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Nabadeep Talukdar',
  url: 'https://nabadeeptalukdar.com',
  description:
    'Premium Shopify development and modern website development services for businesses looking for better growth online.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://nabadeeptalukdar.com/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://nabadeeptalukdar.com',
    },
  ],
};
