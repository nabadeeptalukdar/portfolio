"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const experiences = [
  {
    role: "Understand",
    period: "01",
    summary: "First understand the business, audience, current problems and what the website actually needs to achieve.",
  },
  {
    role: "Plan",
    period: "02",
    summary: "Define the structure, user journey, content direction and right technical approach for the project.",
  },
  {
    role: "Build",
    period: "03",
    summary: "Design and develop the experience with responsiveness, performance and maintainability in mind.",
  },
  {
    role: "Launch & Improve",
    period: "04",
    summary: "Test, launch and continue improving the website where ongoing support is required.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="process" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Process"
          title="A clear process built around the problem you need to solve."
          description="Each project is structured to keep the work focused on what the website actually needs to achieve, from clearer user journeys to stronger usability and better business outcomes."
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
