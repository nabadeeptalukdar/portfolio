"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

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
              title="A Developer Who Looks Beyond the Build."
              description="I’m Nabadeep Talukdar, a web developer based in India. I work with businesses that need more than a website that simply looks good."
            />

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-black/20 px-4 py-3">Based in India • Working with businesses worldwide</span>
            </div>

            <div className="mt-8">
              <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white">
                More About Me
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </GlassCard>

          <GlassCard className="flex flex-col justify-between gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/45">
                What I Deliver
              </p>
              <p className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                Clean execution, reliable communication and websites that stay useful long after launch.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-4xl font-semibold text-white">Strategy</p>
                <p className="mt-2 text-sm text-white/60">Understanding the business goal before choosing the right solution.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-4xl font-semibold text-white">Execution</p>
                <p className="mt-2 text-sm text-white/60">Building websites that balance usability, performance and maintainability.</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
