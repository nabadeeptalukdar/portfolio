"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/siteData";

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="HOW I CAN HELP"
          title="Whatever Is Holding Your Website Back, Let’s Fix It."
          description="Whether you're starting from scratch or improving an existing website, I can help with the strategy, design, development and technical work needed to turn it into a stronger business asset."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <ServiceCard service={{ title: "Build a New Website", description: "Need a professional website from the ground up? I can take it from structure and user experience through development, launch and optimization.", href: "/services/wordpress-development" }} index={0} />
          <ServiceCard service={{ title: "Redesign an Outdated Website", description: "If your current website feels dated, confusing or no longer represents your business, I can rebuild the experience around clearer structure, better usability and stronger presentation.", href: "/services/website-redesign" }} index={1} />
          <ServiceCard service={{ title: "Improve Speed & Performance", description: "Slow load times, poor Core Web Vitals or heavy pages? I can identify the bottlenecks and improve the experience across devices.", href: "/services/website-performance" }} index={2} />
          <ServiceCard service={{ title: "Build an Ecommerce Experience", description: "Create a smoother path from product discovery to purchase with an ecommerce experience built around usability, performance and conversion.", href: "/services/shopify-development" }} index={3} />
          <ServiceCard service={{ title: "Build Something Custom", description: "When templates, plugins or standard platforms aren't enough, I can build custom-coded interfaces, interactions and web functionality around your requirements.", href: "/services/custom-web-development" }} index={4} />
          <ServiceCard service={{ title: "Fix Technical SEO Issues", description: "Resolve crawlability, indexing, metadata, site structure, redirects and other technical problems that can hold back search visibility.", href: "/services/technical-seo" }} index={5} />
        </div>
      </div>
    </section>
  );
}
