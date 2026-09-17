import Link from "next/link";
import { futureInsights } from "@/data/siteData";
import { buildMetadata } from "@/lib/siteMetadata";

export const metadata = buildMetadata({
  title: "Insights | Nabadeep Talukdar",
  description:
    "Practical notes on web development, WordPress, Shopify, performance and technical SEO.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <main className="min-h-screen pt-28">
      <section className="px-5 pb-16 pt-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.35em] text-white/45 sm:text-sm">
            Insights
          </p>
          <h1 className="mt-5 text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[0.96] tracking-[-0.03em] text-white">
            Practical notes for better websites
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
            Practical notes on web development, WordPress, Shopify, performance and technical SEO.
          </p>

          <div className="mt-12 rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-white/45">Upcoming topics</p>
            <ul className="mt-6 space-y-4 text-base leading-7 text-white/70">
              {futureInsights.map((topic) => (
                <li key={topic} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  {topic}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-white/60">
              Article content will be published here as it becomes available.
            </p>
          </div>

          <div className="mt-10">
            <Link href="/contact" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5">
              Discuss a Website Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
