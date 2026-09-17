"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HiArrowRight } from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const links = [
  { href: "https://github.com/nabadeeptalukdar", icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/nabadeeptalukdar817/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "mailto:nabadeeptalukdarbusiness@gmail.com", icon: FaEnvelope, label: "Email" },
];

const helpItems = [
  "Launch a new website",
  "Redesign an outdated one",
  "Build an ecommerce experience",
  "Create something fully custom",
  "Improve speed & performance",
  "Fix technical SEO issues",
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100svh-5rem)] overflow-hidden px-5 py-[clamp(5rem,10vw,7rem)] sm:px-8 lg:px-10 lg:py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_50%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-xs font-medium uppercase tracking-[0.28em] text-white/45 sm:text-sm"
          >
            WEB DESIGN &amp; DEVELOPMENT FOR GROWING BUSINESSES
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-212.5 text-[clamp(2.75rem,6vw,5.2rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-white lg:text-[clamp(3.5rem,5vw,5.2rem)]"
          >
            Websites That Build Trust, Convert Better, and Grow With Your Business.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-7 max-w-176 text-[clamp(1rem,1.5vw,1.15rem)] leading-7 text-white/60 sm:leading-8"
          >
            I help businesses turn outdated, underperforming or limiting websites into fast, professional digital experiences built around real business goals — from stronger credibility and better conversions to ecommerce and fully custom functionality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <Link href="/contact" aria-label="Discuss Your Project">
              <Button className="h-13 rounded-full px-6 text-[1rem] text-black shadow-[0_16px_40px_-18px_rgba(255,255,255,0.55)] transition hover:scale-[1.01] sm:px-7">
                Discuss Your Project
                <HiArrowRight className="ml-2 text-lg" />
              </Button>
            </Link>

            <Link href="/work" aria-label="View My Work">
              <Button variant="outline" className="h-13 rounded-full border-white/20 bg-transparent px-6 text-[1rem] text-white transition hover:bg-white hover:text-black sm:px-7">
                View My Work
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.36 }}
            className="mt-5 flex flex-wrap gap-2 sm:gap-3"
          >
            {links.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white/70 transition hover:-translate-y-0.5 hover:bg-white hover:text-black"
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md lg:justify-self-end"
        >
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/45 sm:text-sm">
            What I Can Help With
          </p>
          <ul className="mt-5 border-t border-white/15">
            {helpItems.map((item) => (
              <li key={item} className="flex items-center justify-between gap-4 border-b border-white/10 py-3.5 text-sm text-white/75 sm:py-4 sm:text-base">
                <span>{item}</span>
                <span aria-hidden="true" className="text-white/35">↗</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}