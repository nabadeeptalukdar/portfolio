"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const groups = [
  {
    title: "I Think About the Business First",
    description: "Before touching the build, I look at what the website actually needs to accomplish — more enquiries, stronger credibility, easier buying, better usability or something entirely custom.",
  },
  {
    title: "I’m Not Locked Into One Platform",
    description: "WordPress, Shopify or custom code are tools, not the strategy. I choose the approach that makes sense for the project instead of forcing every business into the same setup.",
  },
  {
    title: "Design, Development & Technical Thinking",
    description: "I work across the complete website experience — structure, responsive development, interactions, performance and technical SEO — so fewer important details fall between different people.",
  },
  {
    title: "I Can Stay Involved After Launch",
    description: "A website doesn't stop needing attention once it goes live. I can continue helping with improvements, troubleshooting, performance and ongoing changes.",
  },
];

export default function SkillsSection() {
  return (
    <section id="why-work-with-me" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="WHY WORK WITH ME"
          title="More Than Someone Who Just Builds the Pages."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <GlassCard>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                  <div className="h-2.5 w-2.5 rounded-full bg-white/70" />
                </div>
                <p className="mt-4 text-sm leading-7 text-white/60">{group.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
