import Link from "next/link";
import { projects } from "@/data/siteData";
import ProjectCard from "@/components/ui/ProjectCard";
import { buildMetadata } from "@/lib/siteMetadata";

export const metadata = buildMetadata({
  title: "Selected Web Development Projects | Nabadeep Talukdar",
  description:
    "A selection of WordPress, Shopify and custom web development projects created for businesses across ecommerce, sports, hospitality, jewellery, senior living and digital tools.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-28">
      <section className="px-5 pb-16 pt-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.35em] text-white/45 sm:text-sm">
            Work
          </p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.96] tracking-[-0.03em] text-white">
            Selected Web Development Projects
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
            A selection of WordPress, Shopify and custom web development projects created for businesses across ecommerce, sports, hospitality, jewellery, senior living and digital tools.
          </p>

          <div className="mt-12 grid gap-4 sm:gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/services" className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white">
              Explore Services
            </Link>
            <Link href="/contact" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
