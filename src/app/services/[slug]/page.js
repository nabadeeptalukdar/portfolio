import Link from "next/link";
import { notFound } from "next/navigation";
import { services, projects } from "@/data/siteData";
import { buildMetadata } from "@/lib/siteMetadata";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    return buildMetadata({
      title: "Service | Nabadeep Talukdar",
      description: "Web development services for businesses.",
      path: "/services",
    });
  }

  return buildMetadata({
    title: `${service.title} | Nabadeep Talukdar`,
    description: service.longDescription,
    path: `/services/${service.slug}`,
  });
}

export default function ServiceDetailPage({ params }) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  const related = projects.filter((project) => service.relatedProjects.includes(project.slug));

  return (
    <main className="min-h-screen pt-28">
      <section className="px-5 pb-16 pt-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.35em] text-white/45 sm:text-sm">
            Service
          </p>
          <h1 className="mt-5 text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.96] tracking-[-0.03em] text-white">
            {service.title}
          </h1>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <p className="text-base leading-8 text-white/65">{service.longDescription}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {service.cover.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/70">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white">What this includes</h2>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-white/65">
                <li>Planning and structure tailored to your business goals.</li>
                <li>Responsive implementation across desktop, tablet and mobile.</li>
                <li>Performance, UX and technical SEO considerations built into the build.</li>
                <li>Ongoing support and iterative improvements after launch.</li>
              </ul>
            </div>
          </div>

          {related.length > 0 ? (
            <div className="mt-16">
              <h2 className="text-2xl font-semibold text-white">Related projects</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {related.map((project) => (
                  <div key={project.slug} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/40">{project.label}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/60">{project.summary}</p>
                    <Link href={project.href} className="mt-4 inline-flex text-sm font-medium text-white/80 hover:text-white">
                      View case study →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5">
              Discuss Your {service.title} Project
            </Link>
            <Link href="/services" className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white">
              All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
