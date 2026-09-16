"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const projects = [
  {
    title: "JHBH",
    technology: "Shopify, custom theme development",
    description: "A premium ecommerce experience for a luxury jewellery brand with a refined customer journey, strong visual presentation, and a website designed to support sales.",
    link: "https://jbhjewellery.com",
  },
  {
    title: "Shaanze",
    technology: "Shopify, custom sections, responsive UX",
    description: "An elegant Shopify store focused on gifting products with custom sections, premium UX, and an experience built to improve browsing and conversion.",
    link: "https://shaanze.com",
  },
  {
    title: "Stryde Arena",
    technology: "Next.js, responsive design, conversion UX",
    description: "A modern business website helping users discover sports facilities and services with a clear structure, polished presentation, and a stronger path to enquiry.",
    link: "https://strydearena.com",
  },
  {
    title: "The Flavour Alchemist",
    technology: "Custom website development, responsive UX",
    description: "An elegant website designed for an invite-only restaurant experience with a strong sense of brand, detail, and a polished digital presence.",
    link: "https://theflavouralchemist.com",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:mb-12">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Selected work for brands that value quality, trust, and performance."
            description="Each project is shaped around the business goals behind the website, from stronger brand presence to better conversion, clearer messaging, and stronger search visibility."
          />
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <GlassCard className="group flex h-full flex-col p-5 sm:p-7">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/40">{project.technology}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60 sm:text-base sm:leading-7">{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white">
                    View project
                    <HiArrowRight className="text-base" />
                </a>
              </GlassCard>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
