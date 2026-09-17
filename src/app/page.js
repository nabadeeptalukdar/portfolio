import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";
import WhoIWorkWithSection from "@/components/sections/WhoIWorkWithSection";
import { personSchema, serviceSchema, websiteSchema, breadcrumbSchema, faqSchema } from "@/app/structured-data";

export const metadata = {
  title: "Web Developer for Business Websites & Custom Solutions | Nabadeep Talukdar",
  description:
    "I build and improve business websites, ecommerce experiences and custom web solutions focused on trust, performance, usability and growth.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Hero />
      <ProjectsSection />
      <ServicesSection />
      <SkillsSection />
      <AboutSection />
      <WhoIWorkWithSection />
      <ExperienceSection />
      <FaqSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}