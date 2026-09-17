import Link from "next/link";
import { services } from "@/data/siteData";
import ServiceCard from "@/components/ui/ServiceCard";
import { buildMetadata } from "@/lib/siteMetadata";

export const metadata = buildMetadata({
  title: "Web Development Services for Growing Businesses | Nabadeep Talukdar",
  description:
    "I help businesses build, improve and maintain fast, professional websites across WordPress, Shopify and custom web technologies.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-28">
      <section className="px-5 pb-16 pt-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.35em] text-white/45 sm:text-sm">
            Services
          </p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[0.96] tracking-[-0.03em] text-white">
            Web Development Services for Growing Businesses
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
            I help businesses build, improve and maintain fast, professional websites across WordPress, Shopify and custom web technologies.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>

          <div className="mt-12 rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white">Need a tailored recommendation?</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-white/60">
              Whether you need a WordPress business website, a conversion-focused Shopify store or a fully custom web experience, I can help map the right solution to your goals.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5">
                Discuss Your Project
              </Link>
              <Link href="/work" className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white">
                View Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
