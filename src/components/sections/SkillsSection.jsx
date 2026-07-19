"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const groups = [
  {
    title: "Business First",
    description: "Every decision is made with your business in mind—not just the code. From planning the user journey to improving conversions, I create websites that help visitors become customers.",
    items: ["Business Website Design", "Website Maintenance", "Website Redesign", "Conversion Focused"],
  },
  {
    title: "Built for Long-Term Success",
    description: "A successful website should stay fast, secure, and easy to maintain long after launch. I follow modern development practices so your website remains dependable as your business grows.",
    items: ["Technical SEO", "Performance Optimization", "Mobile Responsive", "Clean Code"],
  },
];

export default function SkillsSection() {
  return (
    <section id="testimonials" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="WHY CLIENTS WORK WITH ME"
          title="Your Website Should Bring You More Customers, Not More Problems."
          description="I build websites that are fast, reliable, easy to manage, and designed around your business goals—not just visual design. Whether you need a WordPress website, a Shopify store, a custom web application, or a complete website redesign, every project is developed with performance, SEO, security, and long-term scalability in mind. I focus on delivering websites that build trust, generate enquiries, and support real business growth."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
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
                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-black/25 px-3.5 py-2 text-sm text-white/70">
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
