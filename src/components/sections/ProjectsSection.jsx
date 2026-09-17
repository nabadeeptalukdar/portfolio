"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const projects = [
  {
    title: "OGConverter",
    technology: "ASTRO.JS, TAILWIND CSS, JAVASCRIPT, BROWSER APIs",
    description: "A privacy-first image toolkit for converting, compressing, resizing, and optimizing images directly in the browser with fast, local processing.",
    link: "https://ogconverter.com/",
  },
  {
    title: "Stryde Arena",
    technology: "WORDPRESS, CUSTOM DEVELOPMENT, GSAP, RESPONSIVE UX",
    description: "A dynamic website for a premium multi-sport destination, combining bold visual storytelling, interactive animations, and clear journeys for sports, coaching, and memberships.",
    link: "https://strydearena.com/",
  },
  {
    title: "JHBH",
    technology: "WORDPRESS, CUSTOM DEVELOPMENT, GSAP, RESPONSIVE UX",
    description: "A luxury jewellery website built around immersive storytelling, elegant product presentation, and refined interactions that reflect the brand’s premium identity.",
    link: "https://jhbh.in/",
  },
  {
    title: "Shaanze",
    technology: "SHOPIFY, LIQUID, CUSTOM SECTIONS, ECOMMERCE UX",
    description: "A premium Shopify gifting store built with custom sections, refined product presentation, and a smooth shopping experience designed around discovery and conversion.",
    link: "https://shaanze.in/",
  },
  {
    title: "The Flavour Alchemist",
    technology: "WORDPRESS, CUSTOM DEVELOPMENT, GSAP, RESPONSIVE UX",
    description: "An immersive website created for an invite-only dining experience, blending sophisticated visual direction, motion, and brand storytelling into a distinctive digital presence.",
    link: "https://theflavouralchemist.in/",
  },
  {
    title: "Anandalok",
    technology: "WORDPRESS, CUSTOM DESIGN, RESPONSIVE UX, SEO",
    description: "A clear and accessible website for a senior living community, helping families explore accommodation, care services, pricing, and essential information with confidence.",
    link: "https://anandalokbongora.org/",
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
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white">
                  View project
                  <HiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </GlassCard>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
