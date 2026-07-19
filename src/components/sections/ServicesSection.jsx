"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const services = [
  {
    title: "Business Website Development",
    description: "Professional websites built to establish trust, generate enquiries, and represent your business online with clarity and confidence.",
  },
  {
    title: "WordPress Development",
    description: "WordPress websites designed for business growth, easier content updates, and a strong online presence that is simple to manage.",
  },
  {
    title: "Custom Website Development",
    description: "Tailored web solutions built around your business goals, workflows, and the experience you want customers to have.",
  },
  {
    title: "Website Performance & Technical SEO",
    description: "Improve website speed, Core Web Vitals, technical SEO, and search visibility without sacrificing premium design or user experience.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Premium web solutions for businesses that need clarity, performance, and growth."
          description="From WordPress development and custom website development to business websites, ecommerce solutions, full stack web development, and technical SEO, each engagement is shaped around the needs of your customers and the growth of your business."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06, duration: 0.35 }}
            >
              <GlassCard className="group h-full">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/80">
                      0{index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/40">
                    Service
                  </span>
                </div>
                <p className="mt-6 text-sm leading-7 text-white/60">{service.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
