"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const experiences = [
  {
    role: "Discovery Call",
    period: "01",
    summary: "We begin with a conversation about your goals, audience, and the outcomes you need from your website, whether that means a new website, a redesign, better conversion, or stronger online visibility.",
  },
  {
    role: "Planning",
    period: "02",
    summary: "We define the structure, messaging, and priorities so the website is aligned with your business objectives and built for the right audience.",
  },
  {
    role: "Design & Strategy",
    period: "03",
    summary: "We shape the visual direction and user experience to ensure the site feels polished, premium, and built to convert.",
  },
  {
    role: "Development",
    period: "04",
    summary: "The website is built with attention to speed, reliability, scalability, and long-term maintainability.",
  },
  {
    role: "Testing & Launch",
    period: "05",
    summary: "We review performance, functionality, content, and technical SEO before releasing the site with confidence.",
  },
  {
    role: "Ongoing Support",
    period: "06",
    summary: "We remain available for updates, maintenance, performance improvements, and continued support as your business evolves.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="process" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Process"
          title="A clear process for building websites that work."
          description="Each engagement is designed to keep the project focused, transparent, and aligned with the outcome your business needs, whether that’s better enquiries, stronger credibility, or a more effective online presence."
        />

        <div className="mt-12 space-y-5">
          {experiences.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <GlassCard className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
                <div className="w-90px shrink-0">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/40">{item.period}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{item.role}</h3>
                </div>
                <p className="max-w-2xl text-sm leading-7 text-white/60">{item.summary}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
