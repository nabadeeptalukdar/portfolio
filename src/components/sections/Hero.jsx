"use client";

import Image from "next/image";
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

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 py-24 pt-28 sm:px-8 sm:py-24 sm:pt-32 lg:px-10 lg:py-28 lg:pt-36 xl:py-32 xl:pt-30">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_50%)]" />

      <div className="mx-auto flex min-h-100vh max-w-7xl flex-col items-center justify-between gap-14 px-0 sm:gap-16 lg:flex-row lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <p className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
          AVAILABLE FOR NEW PROJECTS • WEB DEVELOPER BASED IN INDIA
          </p>

          <h1 className="max-w-4xl text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-white">
            Websites That Build Trust, Impress Customers, and Grow Businesses.
          </h1>

          <p className="mt-8 max-w-2xl text-[clamp(1rem,1.5vw,1.2rem)] leading-8 text-white/60">
            I am Nabadeep Talukdar, a website developer specializing in modern websites for businesses that care about quality, performance, and user experience. Every project is crafted to strengthen your brand, improve credibility, and turn visitors into customers.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="/book-call" aria-label="Book a Free Strategy Call">
              <Button className="h-[52px] rounded-full px-6 text-[1rem] text-black shadow-[0_16px_40px_-18px_rgba(255,255,255,0.55)] transition hover:scale-[1.01] sm:px-7">
                Start Your Project
                <HiArrowRight className="ml-2 text-lg" />
              </Button>
            </Link>

            <a href="#projects" aria-label="View My Work">
              <Button variant="outline" className="h-[52px] rounded-full border-white/20 bg-transparent px-6 text-[1rem] text-white transition hover:bg-white hover:text-black sm:px-7">
                View My Work
              </Button>
            </a>
          </div>

          <p className="mt-6 max-w-xl text-[clamp(0.95rem,1.1vw,1rem)] leading-7 text-white/50">
          ⚡ Fast Performance   ✓ SEO Ready   📱 Mobile Optimized   🛠 Easy to Manage    🤝 Ongoing Support</p>

          <div className="mt-10 flex flex-wrap gap-2 sm:gap-3">
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
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative w-full max-w-[420px]"
        >
          <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-full border border-white/10 bg-white/4 p-3 shadow-[0_40px_120px_-40px_rgba(255,255,255,0.45)] backdrop-blur-2xl sm:p-4">
            <Image
              src="/images/nabadeep.png"
              width={430}
              height={430}
              alt="Nabadeep Talukdar"
              className="rounded-full object-cover"
              priority
              sizes="(max-width: 1024px) 70vw, 430px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}