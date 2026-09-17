"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import GlassCard from "@/components/ui/GlassCard";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
    >
      <GlassCard className="group flex h-full flex-col p-5 sm:p-7">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/40">{project.label}</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/60 sm:text-base sm:leading-7">{project.description}</p>
        <Link href={project.href} className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white">
          View Case Study
          <HiArrowRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </GlassCard>
    </motion.article>
  );
}
