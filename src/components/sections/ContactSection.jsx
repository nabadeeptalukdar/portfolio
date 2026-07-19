"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiCalendarDays, HiClock, HiMapPin, HiPhone } from "react-icons/hi2";

const contactRows = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: "nabadeeptalukdarbusiness@gmail.com",
    href: "mailto:nabadeeptalukdarbusiness@gmail.com",
  },
  {
    icon: HiPhone,
    title: "Phone",
    value: "+91 7002969984",
    href: "tel:+917002969984",
  },
  {
    icon: HiMapPin,
    title: "Location",
    value: "Guwahati, Assam, India",
    href: "https://maps.google.com/?q=Guwahati,Assam",
  },
  {
    icon: HiCalendarDays,
    title: "Availability",
    value: "Accepting select projects",
    href: null,
  },
  {
    icon: HiClock,
    title: "Response Time",
    value: "Usually replies within 24 hours",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_30px_100px_-35px_rgba(0,0,0,0.95)] backdrop-blur-2xl sm:rounded-[28px] sm:p-8 lg:rounded-[32px] lg:p-12 xl:p-16"
        >
          <div className="flex flex-col gap-8 sm:gap-10 lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div className="flex min-w-0 flex-col justify-start">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.35em] text-white/45 sm:text-sm">
                Contact
              </p>

              <h2 className="mt-5 max-w-full text-[clamp(2rem,7vw,4.5rem)] leading-[0.95] tracking-[-0.03em] text-white">
                Ready to Build a Website That Helps Your Business Grow?
              </h2>

              <p className="mt-5 max-w-full text-[clamp(0.95rem,1.5vw,1.08rem)] leading-7 text-white/65 sm:leading-8">
                Whether you need a custom WordPress website, Shopify store, redesign, SEO improvements, or a fully custom web application, let&apos;s discuss your project and find the best solution.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
                <Link
                  href="/book-call"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3.5 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto"
                >
                  Book a Free Strategy Call
                </Link>
                <a
                  href="mailto:nabadeeptalukdarbusiness@gmail.com"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-transparent px-5 py-3.5 text-sm font-medium text-white/80 transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto"
                >
                  Send an Email
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-white/55 sm:justify-start">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  Usually replies within 24 hours
                </span>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                <a href="https://github.com/nabadeeptalukdar" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white">
                  <FaGithub size={17} />
                </a>
                <a href="https://www.linkedin.com/in/nabadeeptalukdar817/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white">
                  <FaLinkedin size={17} />
                </a>
                <a href="mailto:nabadeeptalukdarbusiness@gmail.com" aria-label="Email" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white">
                  <FaEnvelope size={17} />
                </a>
              </div>
            </div>

            <div className="min-w-0 rounded-[24px] border border-white/10 bg-black/25 p-4 shadow-[0_22px_80px_-35px_rgba(0,0,0,0.95)] backdrop-blur-xl sm:p-5 lg:p-6">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1">
                {contactRows.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex min-w-0 items-start gap-3 rounded-[20px] border border-white/10 bg-white/[0.03] p-4 sm:p-4">
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70">
                        <Icon className="text-lg" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[0.72rem] font-medium uppercase tracking-[0.3em] text-white/40">
                          {item.title}
                        </p>
                        <p className={`mt-2 text-sm font-medium leading-6 text-white ${item.title === "Email" ? "break-all" : "break-words"}`}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return (
                    <div key={item.title} className="min-w-0">
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="block transition hover:bg-white/[0.03]">
                          {content}
                        </a>
                      ) : (
                        <div className="block">{content}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
