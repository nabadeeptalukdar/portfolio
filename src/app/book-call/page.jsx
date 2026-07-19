import { Metadata } from "next";
import CalEmbed from "@/components/sections/CalEmbed";

export const metadata = {
  title: "Book a Free Website Strategy Call | Nabadeep Talukdar",
  description:
    "Book a free 30-minute website strategy call to discuss your WordPress website, Shopify store, custom web application, SEO strategy, or redesign.",
};

export default function BookCallPage() {
  return (
    <main className="min-h-screen bg-black px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <section className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
            Free 30-minute consultation
          </p>
          <h1 className="mt-6 text-[clamp(2.25rem,4.8vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-white">
            Book a Free Website Strategy Call
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[clamp(1rem,1.35vw,1.15rem)] leading-8 text-white/60">
            Let&apos;s discuss your WordPress website, Shopify store, custom web application, SEO strategy, or website redesign. You&apos;ll receive practical recommendations tailored to your business.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 text-sm text-white/70 sm:flex-row sm:flex-wrap sm:gap-4">
            <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="text-emerald-400">✓</span>
              <span>Free 30-minute consultation</span>
            </div>
            <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="text-emerald-400">✓</span>
              <span>No sales pressure</span>
            </div>
            <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="text-emerald-400">✓</span>
              <span>Personalized recommendations</span>
            </div>
          </div>
        </div>

        <div className="mt-12 w-full max-w-6xl rounded-[32px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_30px_100px_-35px_rgba(0,0,0,0.95)] backdrop-blur-2xl sm:p-4 lg:p-6">
          <CalEmbed />
        </div>
      </section>
    </main>
  );
}
