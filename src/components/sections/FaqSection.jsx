"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi2";

const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "Most projects begin with a clear timeline after the discovery call. Simple builds can move quickly, while more custom work may take several weeks depending on complexity and content readiness.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. I can improve an existing site with stronger messaging, better structure, faster performance, and a more premium experience that supports your business goals.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. I work with clients worldwide and maintain clear communication throughout the process so projects stay aligned and on track.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes. I can support your site after launch with updates, performance improvements, content changes, and long-term reliability.",
  },
  {
    question: "Can you build a WordPress or Shopify website for my company?",
    answer:
      "Yes. I build polished WordPress websites, Shopify stores, and custom web experiences that are practical, modern, and focused on measurable results.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.35em] text-white/45 sm:text-sm">
            Frequently Asked Questions
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.6rem]">
            Answers to common questions before starting a project.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            A clear and straightforward process helps you understand what to expect, how we work together, and what kind of result you can expect.
          </p>
        </motion.div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.04, duration: 0.35 }}
                className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_70px_-35px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-6"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                  <span className={`rounded-full border border-white/10 bg-black/20 p-2 text-white/70 transition ${isOpen ? "rotate-180" : "rotate-0"}`}>
                    <HiChevronDown className="text-lg" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-base leading-8 text-white/60">{faq.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
