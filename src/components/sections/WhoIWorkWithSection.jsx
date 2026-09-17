import GlassCard from "@/components/ui/GlassCard";

const industries = [
  "Ecommerce Brands",
  "Professional Services",
  "Startups",
  "Education",
  "Hospitality",
  "Sports & Fitness",
  "Healthcare & Senior Living",
];

export default function WhoIWorkWithSection() {
  return (
    <section id="who-i-work-with" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.35em] text-white/45 sm:text-sm">
            Who I Work With
          </p>
          <h2 className="mt-5 text-balance text-[clamp(2rem,3vw,3rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white">
            Built for Businesses That Want More From Their Website.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <GlassCard key={industry} className="p-5" hover={false}>
              <p className="text-lg font-medium text-white">{industry}</p>
            </GlassCard>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-base leading-8 text-white/60">
          The industry may change, but the goal is usually similar: build a clearer, faster and more useful digital experience for the people the business needs to reach.
        </p>
      </div>
    </section>
  );
}
