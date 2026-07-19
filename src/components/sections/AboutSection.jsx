"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const highlights = [
  "WordPress Development",
  "Business Website Development",
  "Custom Website Development",
  "Technical SEO",
  "Website Maintenance",
  "Website Redesign",
];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10"
        >
          <GlassCard className="min-h-full">
            <SectionHeading
              eyebrow="About"
              title="I build professional websites that help businesses look stronger and perform better."
              description="I work with business owners, founders, and growing brands who need a website that is clear, trustworthy, and built to support enquiries and sales. From WordPress development and custom website development to business websites, ecommerce websites, full stack web solutions, and technical SEO, I focus on building digital experiences that solve real business problems."
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/70">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                  {item}
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="flex flex-col justify-between gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/45">
                What I Deliver
              </p>
              <p className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                Thoughtful design, dependable development, and a website that supports your business in the long term.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-4xl font-semibold text-white">Global</p>
                <p className="mt-2 text-sm text-white/60">Working with clients worldwide who need dependable development and clear communication.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-4xl font-semibold text-white">Support</p>
                <p className="mt-2 text-sm text-white/60">Ongoing website maintenance, updates, and performance support after launch.</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
