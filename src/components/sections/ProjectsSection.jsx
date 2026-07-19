"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const projects = [
  {
    title: "JHBH",
    subtitle: "Luxury Jewelry eCommerce Website",
    description: "A premium ecommerce experience for a luxury jewellery brand with a refined customer journey, strong visual presentation, and a website designed to support sales.",
    tags: ["Ecommerce Website Development", "Premium UX", "Responsive"],
    accent: "from-[#f7e7c1] via-[#d4b777] to-[#8b6021]",
  },
  {
    title: "Shaanze",
    subtitle: "Premium Gifting Store",
    description: "An elegant Shopify store focused on gifting products with custom sections, premium UX, and an experience built to improve browsing and conversion.",
    tags: ["Shopify Store Development", "Shopify Customization", "Premium UX"],
    accent: "from-[#d5c4ff] via-[#8f78ff] to-[#4d31b4]",
  },
  {
    title: "Stryde Arena",
    subtitle: "Premium Sports Arena Website",
    description: "A modern business website helping users discover sports facilities and services with a clear structure, polished presentation, and a stronger path to enquiry.",
    tags: ["Business Website Development", "User Experience", "Conversion"],
    accent: "from-[#b9d7ff] via-[#6da9ff] to-[#1f4d80]",
  },
  {
    title: "The Flavour Alchemist",
    subtitle: "Exclusive Restaurant Website",
    description: "An elegant website designed for an invite-only restaurant experience with a strong sense of brand, detail, and a polished digital presence.",
    tags: ["Custom Website Development", "Luxury Brand", "Responsive"],
    accent: "from-[#ffd1a8] via-[#ff8f4f] to-[#8d3c16]",
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

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <GlassCard className="group h-full overflow-hidden p-0">
                <div className={`relative h-44 overflow-hidden rounded-[20px] bg-linear-to-br ${project.accent}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_35%)]" />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-6 sm:p-7 lg:p-8">
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/40">{project.subtitle}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 text-base leading-7 text-white/60">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-white/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white">
                    Discuss a similar project
                    <HiArrowRight className="text-base" />
                  </a>
                </div>
              </GlassCard>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
