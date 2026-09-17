"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiArrowRight, HiBars3, HiXMark } from "react-icons/hi2";
import { navigationLinks } from "@/data/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) setActiveSection(visibleEntry.target.id);
      },
      { rootMargin: "-20% 0px -45% 0px", threshold: [0.2, 0.45, 0.7] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className={`fixed left-0 top-0 z-[9999] w-full transition-all duration-250 ${isScrolled ? "border-b border-white/10 bg-[rgba(8,8,8,0.85)] shadow-[0_10px_40px_-24px_rgba(0,0,0,0.8)] backdrop-blur-[18px]" : "border-b border-transparent bg-transparent shadow-none"}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link
  href="/"
  className="text-white transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
>
  <span className="text-[1.05rem] font-semibold tracking-[0.45em] text-white">
    N A B A
  </span>
</Link>

          <nav className="hidden md:block" aria-label="Primary navigation">
            <ul className="flex items-center gap-7 lg:gap-9">
              {navigationLinks.map((link) => {
                const isHome = link.href === "/";
                const isActive = isHome ? activeSection === "home" : false;

                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`group relative text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${isActive ? "text-white" : "text-white/60 hover:text-white"}`}
                    >
                      <span>{link.label}</span>
                      <span className={`absolute bottom-[-6px] left-0 h-px w-full origin-left bg-white/80 transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-16px_rgba(255,255,255,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:inline-flex"
            >
              Discuss Your Project
            </Link>

            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black md:hidden"
            >
              {open ? <HiXMark className="text-xl" /> : <HiBars3 className="text-xl" />}
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm transition duration-300 md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setOpen(false)} />

      <aside id="mobile-nav" role="dialog" aria-modal="true" aria-label="Mobile navigation" className={`fixed right-0 top-0 z-[9999] flex h-full w-[320px] max-w-[90vw] flex-col border-l border-white/10 bg-[#080808]/95 px-6 py-7 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.95)] transition-transform duration-300 md:hidden ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between">
          <Link
  href="/"
  onClick={() => setOpen(false)}
  className="text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
>
  <span className="text-lg font-semibold tracking-[0.55em] uppercase">
    N A B A
  </span>
</Link>
          <button type="button" aria-label="Close navigation" onClick={() => setOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
            <HiXMark className="text-lg" />
          </button>
        </div>

        <nav className="mt-10" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-2">
            {navigationLinks.map((link) => {
              const isActive = link.href === "/" ? activeSection === "home" : false;
              return (
                <li key={link.label}>
                  <Link href={link.href} onClick={() => setOpen(false)} className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${isActive ? "bg-white/10 text-white" : "bg-transparent text-white/70 hover:bg-white/10 hover:text-white"}`}>
                    <span>{link.label}</span>
                    <HiArrowRight className="text-base" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto space-y-4">
          <Link href="/contact" onClick={() => setOpen(false)} className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
            Discuss Your Project
          </Link>
        </div>
      </aside>
    </>
  );
}