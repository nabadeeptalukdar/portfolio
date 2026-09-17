"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.06, duration: 0.35 }}
    >
      <Link href={service.href} className="block h-full">
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
      </Link>
    </motion.div>
  );
}
