export const siteConfig = {
  name: "Nabadeep Talukdar",
  title: "WordPress, Shopify & Custom Web Developer",
  email: "nabadeeptalukdarbusiness@gmail.com",
  phone: "+91 7002969984",
  location: "Guwahati, Assam, India",
  baseUrl: "https://nabadeeptalukdar.com",
  social: {
    github: "https://github.com/nabadeeptalukdar",
    linkedin: "https://www.linkedin.com/in/nabadeeptalukdar817/",
  },
};

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    shortTitle: "WordPress Development",
    description:
      "Fast, responsive and easy-to-manage WordPress websites built around your business goals, users and content requirements.",
    longDescription:
      "Professional WordPress development for business websites, ecommerce, redesigns, custom functionality, performance and ongoing support.",
    cover: [
      "business WordPress websites",
      "responsive development",
      "custom functionality",
      "WooCommerce",
      "redesign",
      "performance",
      "technical SEO",
      "maintenance",
    ],
    relatedProjects: ["stryde-arena", "jhbh", "the-flavour-alchemist", "anandalok"],
    href: "/services/wordpress-development",
  },
  {
    slug: "shopify-development",
    title: "Shopify Development",
    shortTitle: "Shopify Development",
    description:
      "Conversion-focused Shopify stores with custom sections, refined product experiences and responsive ecommerce functionality.",
    longDescription:
      "Shopify development for ecommerce brands including custom sections, Liquid development, product experiences, responsive UX and store improvements.",
    cover: [
      "custom storefronts",
      "Shopify themes",
      "product pages",
      "conversion UX",
      "mobile commerce",
      "store improvements",
    ],
    relatedProjects: ["shaanze"],
    href: "/services/shopify-development",
  },
  {
    slug: "custom-web-development",
    title: "Custom Web Development",
    shortTitle: "Custom Website Development",
    description:
      "Custom websites and web experiences built when standard templates or page builders are not enough.",
    longDescription:
      "Custom website development for unique interfaces, bespoke performance and tailored experiences.",
    cover: [
      "custom frontend experiences",
      "JavaScript",
      "Astro",
      "modern responsive interfaces",
      "animations",
      "web tools",
      "performance",
    ],
    relatedProjects: ["ogconverter", "stryde-arena", "the-flavour-alchemist"],
    href: "/services/custom-web-development",
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    shortTitle: "Website Redesign",
    description:
      "Modern redesigns for outdated websites with improved structure, usability, responsiveness and visual presentation.",
    longDescription:
      "Website redesign services focused on clarity, structure, mobile improvement and stronger conversion paths.",
    cover: [
      "outdated design",
      "poor responsiveness",
      "confusing navigation",
      "weak conversion paths",
      "content structure",
      "visual improvements",
      "performance considerations",
    ],
    relatedProjects: ["stryde-arena", "jhbh", "anandalok"],
    href: "/services/website-redesign",
  },
  {
    slug: "website-performance",
    title: "Performance Optimization",
    shortTitle: "Performance Optimization",
    description:
      "Website speed and Core Web Vitals improvements focused on loading performance, responsiveness and user experience.",
    longDescription:
      "Website speed and Core Web Vitals optimization for faster loading, smoother interaction and better conversions.",
    cover: [
      "LCP",
      "CLS",
      "INP",
      "image optimization",
      "JavaScript optimization",
      "caching",
      "rendering",
      "responsive assets",
    ],
    relatedProjects: ["ogconverter", "stryde-arena", "shaanze"],
    href: "/services/website-performance",
  },
  {
    slug: "technical-seo",
    title: "Technical SEO",
    shortTitle: "Technical SEO",
    description:
      "Technical SEO improvements covering crawlability, metadata, internal structure, indexing and search-friendly implementation.",
    longDescription:
      "Technical SEO services for business websites covering structure, metadata, indexing and search-friendly architecture.",
    cover: [
      "crawlability",
      "indexing",
      "sitemap",
      "robots.txt",
      "canonical URLs",
      "metadata",
      "structured data",
      "internal linking",
      "redirect issues",
      "duplicate URLs",
      "website architecture",
      "Core Web Vitals",
    ],
    relatedProjects: ["anandalok", "stryde-arena", "shaanze"],
    href: "/services/technical-seo",
  },
];

export const projects = [
  {
    slug: "ogconverter",
    title: "OGConverter",
    label: "BROWSER-BASED IMAGE TOOLKIT",
    href: "/work/ogconverter",
    liveUrl: "https://ogconverter.com/",
    intro:
      "OGConverter is a browser-based image toolkit built to make image conversion, compression, resizing and optimization fast, simple and privacy-focused.",
    description:
      "A privacy-first image toolkit for converting, compressing, resizing, and optimizing images directly in the browser with fast, local processing.",
    platform: ["Astro", "Tailwind CSS", "JavaScript", "Browser APIs"],
    summary:
      "A browser-based image toolkit built to make image conversion, compression, resizing and optimization fast, simple and privacy-focused.",
  },
  {
    slug: "stryde-arena",
    title: "Stryde Arena",
    label: "PREMIUM MULTI-SPORTS ARENA WEBSITE",
    href: "/work/stryde-arena",
    liveUrl: "https://strydearena.com/",
    intro:
      "A dynamic website for a premium multi-sport destination, combining strong visual storytelling, interactive animation and clear user journeys for sports, coaching and memberships.",
    description:
      "A dynamic website for a premium multi-sport destination, combining bold visual storytelling, interactive animations, and clear journeys for sports, coaching, and memberships.",
    platform: ["WordPress", "Custom JavaScript", "GSAP", "Custom CSS", "Responsive Development"],
    summary:
      "A premium multi-sport destination website built with dynamic storytelling, polished motion and clear user journeys.",
  },
  {
    slug: "jhbh",
    title: "JHBH",
    label: "LUXURY JEWELLERY BRAND WEBSITE",
    href: "/work/jhbh",
    liveUrl: "https://jhbh.in/",
    intro:
      "A luxury jewellery website built around immersive storytelling, elegant product presentation and refined interactions designed to reflect the brand’s premium identity.",
    description:
      "A luxury jewellery website built around immersive storytelling, elegant product presentation, and refined interactions that reflect the brand’s premium identity.",
    platform: ["WordPress", "Custom Development", "JavaScript", "GSAP", "Responsive Development"],
    summary:
      "A luxury jewellery website focused on immersive storytelling and a premium digital experience.",
  },
  {
    slug: "shaanze",
    title: "Shaanze",
    label: "PREMIUM GIFTING ECOMMERCE STORE",
    href: "/work/shaanze",
    liveUrl: "https://shaanze.in/",
    intro:
      "A premium Shopify gifting store built with custom sections, refined product presentation and a smooth ecommerce experience designed around product discovery and conversion.",
    description:
      "A premium Shopify gifting store built with custom sections, refined product presentation, and a smooth ecommerce experience designed around discovery and conversion.",
    platform: ["Shopify", "Liquid", "Custom Sections", "JavaScript", "Responsive Ecommerce UX"],
    summary:
      "A premium ecommerce store designed for product discovery, polished storytelling and a strong conversion path.",
  },
  {
    slug: "the-flavour-alchemist",
    title: "The Flavour Alchemist",
    label: "EXCLUSIVE RESTAURANT WEBSITE",
    href: "/work/the-flavour-alchemist",
    liveUrl: "https://theflavouralchemist.in/",
    intro:
      "An immersive website created for an invite-only dining experience, combining sophisticated visual direction, motion and brand storytelling.",
    description:
      "An immersive website created for an invite-only dining experience, blending sophisticated visual direction, motion, and brand storytelling into a distinctive digital presence.",
    platform: ["WordPress", "Custom Development", "JavaScript", "GSAP", "Responsive Development"],
    summary:
      "An immersive restaurant website designed around brand storytelling, elegance and motion-led presentation.",
  },
  {
    slug: "anandalok",
    title: "Anandalok",
    label: "SENIOR LIVING & CARE WEBSITE",
    href: "/work/anandalok",
    liveUrl: "https://anandalokbongora.org/",
    intro:
      "A clear and accessible WordPress website created to help families explore accommodation, care services, facilities, pricing and essential senior-living information.",
    description:
      "A clear and accessible WordPress website for a senior living community, helping families explore accommodation, care services, pricing, and essential information with confidence.",
    platform: ["WordPress", "Responsive Development", "Custom Design", "SEO"],
    summary:
      "A clear and accessible senior living website built for easy communication, trust and information discovery.",
  },
];

export const faqItems = [
  {
    question: "What types of websites do you build?",
    answer:
      "I build WordPress websites, Shopify stores and custom websites for businesses that need professional, responsive and performance-focused digital experiences.",
  },
  {
    question: "Do you only build WordPress and Shopify websites?",
    answer:
      "No. WordPress and Shopify are useful platforms for many projects, but they aren't the only solutions I work with. I also build custom-coded websites, frontend experiences and web tools when a project requires more flexibility or functionality than a standard platform provides.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. I can redesign existing websites to improve their visual presentation, structure, mobile experience, usability and performance while preserving important content and SEO considerations.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. I’m based in India and work remotely with businesses worldwide. Projects can be managed through video calls, email and shared project tools, with communication arranged around different time zones where possible.",
  },
  {
    question: "Do you provide ongoing website maintenance?",
    answer:
      "Yes. Ongoing support can include website updates, troubleshooting, performance improvements, security-related maintenance and content changes depending on the project.",
  },
  {
    question: "Can you improve an existing slow website?",
    answer:
      "Yes. I can audit performance issues and improve areas such as images, scripts, caching, rendering and Core Web Vitals where technically possible.",
  },
  {
    question: "Do you provide SEO?",
    answer:
      "My work includes technical SEO such as metadata, crawlability, indexing, website structure, structured data, redirects, sitemaps and performance. Broader content marketing or link-building can be handled separately if required.",
  },
];

export const futureInsights = [
  "How to Speed Up a Slow WordPress Website",
  "WordPress Core Web Vitals Optimization Guide",
  "Shopify vs WordPress for Ecommerce",
  "How to Migrate WordPress Without Downtime",
  "How to Improve LCP on WordPress",
  "Why WordPress Websites Get Hacked",
  "Website Redesign Checklist for Businesses",
  "WordPress vs Custom Development",
];
