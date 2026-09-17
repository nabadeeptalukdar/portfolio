import Link from "next/link";
import { siteConfig, navigationLinks } from "@/data/siteData";

export default function FooterSection() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 text-sm text-white/45 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <p className="font-medium text-white/70">{siteConfig.name}</p>
          <a href={`mailto:${siteConfig.email}`} className="block transition hover:text-white">Email: {siteConfig.email}</a>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="block transition hover:text-white">Phone: {siteConfig.phone}</a>
          <p>{siteConfig.location}</p>
        </div>
        <div className="flex flex-col gap-2">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">GitHub</a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">LinkedIn</a>
        </div>
        <p>© 2026 Designed & Developed by Naba</p>
      </div>
    </footer>
  );
}
