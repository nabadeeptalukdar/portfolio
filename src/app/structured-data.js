import { siteConfig } from "@/data/siteData";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: "Web Developer",
  description:
    "Freelance web developer helping businesses with WordPress, Shopify and custom website development, performance optimization, and technical SEO.",
  url: siteConfig.baseUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guwahati",
    addressRegion: "Assam",
    addressCountry: "India",
  },
  sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
  email: siteConfig.email,
  telephone: "+917002969984",
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.baseUrl,
  image: `${siteConfig.baseUrl}/images/nabadeep.png`,
  telephone: "+917002969984",
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guwahati",
    addressRegion: "Assam",
    addressCountry: "India",
  },
  areaServed: "Worldwide",
  sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
  description:
    "Professional WordPress development, Shopify development, custom web development, technical SEO, website performance optimization and website redesign for businesses in India and worldwide.",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.baseUrl,
  description:
    "Fast, conversion-focused WordPress, Shopify and custom websites for businesses in India and worldwide.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.baseUrl}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.baseUrl,
    },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of websites do you build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I build WordPress websites, Shopify stores and custom websites for businesses that need professional, responsive and performance-focused digital experiences.",
      },
    },
    {
      "@type": "Question",
      name: "Do you only build WordPress and Shopify websites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. WordPress and Shopify are useful platforms for many projects, but they aren't the only solutions I work with. I also build custom-coded websites, frontend experiences and web tools when a project requires more flexibility or functionality than a standard platform provides.",
      },
    },
    {
      "@type": "Question",
      name: "Can you redesign my existing website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I can redesign existing websites to improve their visual presentation, structure, mobile experience, usability and performance while preserving important content and SEO considerations.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with international clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I’m based in India and work remotely with businesses worldwide. Projects can be managed through video calls, email and shared project tools, with communication arranged around different time zones where possible.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing website maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ongoing support can include website updates, troubleshooting, performance improvements, security-related maintenance and content changes depending on the project.",
      },
    },
    {
      "@type": "Question",
      name: "Can you improve an existing slow website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. I can audit performance issues and improve areas such as images, scripts, caching, rendering and Core Web Vitals where technically possible.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "My work includes technical SEO such as metadata, crawlability, indexing, website structure, structured data, redirects, sitemaps and performance. Broader content marketing or link-building can be handled separately if required.",
      },
    },
  ],
};
