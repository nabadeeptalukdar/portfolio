import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, services } from "@/data/siteData";
import { buildMetadata } from "@/lib/siteMetadata";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return buildMetadata({
      title: "Project Case Study | Nabadeep Talukdar",
      description: "Web development project case study.",
      path: "/work",
    });
  }

  return buildMetadata({
    title: `${project.title} | Project Case Study | Nabadeep Talukdar`,
    description: project.intro,
    path: `/work/${project.slug}`,
  });
}

export default function WorkDetailPage({ params }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const matchingServices = services.filter((service) => {
    if (project.slug === "ogconverter") return service.slug === "custom-web-development" || service.slug === "website-performance";
    if (project.slug === "shaanze") return service.slug === "shopify-development";
    if (project.slug === "anandalok") return service.slug === "wordpress-development" || service.slug === "technical-seo";
    if (project.slug === "stryde-arena") return service.slug === "wordpress-development" || service.slug === "custom-web-development";
    if (project.slug === "jhbh") return service.slug === "wordpress-development";
    if (project.slug === "the-flavour-alchemist") return service.slug === "wordpress-development" || service.slug === "custom-web-development";
    return false;
  });

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <main className="min-h-screen pt-28">
      <section className="px-5 pb-16 pt-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.35em] text-white/45 sm:text-sm">{project.label}</p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.96] tracking-[-0.03em] text-white">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-white/65">{project.intro}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5">
              Live Website
            </a>
            <Link href="/work" className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white">
              All Projects
            </Link>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="space-y-8">
              <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-white">Overview</h2>
                <p className="mt-4 text-base leading-8 text-white/65">{project.intro}</p>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-white">The Challenge</h2>
                <p className="mt-4 text-base leading-8 text-white/65">
                  The goal was to create a website that matched the business goals behind the project while improving clarity, trust and usability. Each build needed to work well across devices and present content in a way that encouraged action without sacrificing visual quality.
                </p>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-white">The Approach / Solution</h2>
                <p className="mt-4 text-base leading-8 text-white/65">
                  The implementation focused on the right platform, content structure and user flow for the project, with attention to responsiveness, engagement and a refined experience. Technical decisions were made to support maintainability, performance and future growth.
                </p>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                <h2 className="text-2xl font-semibold text-white">What I Built</h2>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-7 text-white/65">
                  <li>Clear website structure and messaging tailored to the target audience.</li>
                  <li>Responsive design and polished frontend implementation.</li>
                  <li>Platform-specific development that suits the project requirements.</li>
                  <li>Improved browsing experience with performance-conscious frontend choices.</li>
                </ul>
              </div>
            </article>

            <aside className="space-y-8">
              <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-white">Platform / Technology</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.platform.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/70">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-white">Relevant services</h2>
                <ul className="mt-5 space-y-3 text-base leading-7 text-white/65">
                  {matchingServices.map((service) => (
                    <li key={service.slug}>
                      <Link href={service.href} className="text-white/80 hover:text-white">
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <div className="mt-16 rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white">Screenshots / Visuals</h2>
            <p className="mt-4 text-base leading-8 text-white/65">
              Visuals for this project are available on the live website and the project presentation, with the site itself serving as the primary reference for the final implementation.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-white">Related projects</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <div key={item.slug} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">{item.label}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                  <Link href={item.href} className="mt-4 inline-flex text-sm font-medium text-white/80 hover:text-white">
                    View case study →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5">
              Start a Conversation
            </Link>
            <Link href="/services" className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
