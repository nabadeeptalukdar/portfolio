import { buildMetadata } from "@/lib/siteMetadata";

export const metadata = buildMetadata({
  title: "Contact | Nabadeep Talukdar",
  description:
    "Tell me about your business, website and what you’re trying to improve. I’ll review the requirements and get back to you with the next steps.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-28">
      <section className="px-5 pb-16 pt-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.35em] text-white/45 sm:text-sm">
            Contact
          </p>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.4rem,5vw,4.2rem)] font-semibold leading-[0.96] tracking-[-0.03em] text-white">
            Let&apos;s Build a Better Website
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
            Tell me about your business, website and what you&apos;re trying to improve. I&apos;ll review the requirements and get back to you with the next steps.
          </p>

          <form className="mt-10 grid gap-5 rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">Name</label>
                <input id="name" name="name" className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">Email</label>
                <input id="email" name="email" type="email" className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35" placeholder="you@example.com" />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-white/80">Company / Business</label>
                <input id="company" name="company" className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35" placeholder="Business name" />
              </div>
              <div>
                <label htmlFor="website" className="mb-2 block text-sm font-medium text-white/80">Website URL</label>
                <input id="website" name="website" className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35" placeholder="https://example.com" />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="mb-2 block text-sm font-medium text-white/80">Service options</label>
              <select id="service" name="service" className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none">
                <option value="">Select a service</option>
                <option>WordPress Development</option>
                <option>Shopify Development</option>
                <option>Custom Website</option>
                <option>Website Redesign</option>
                <option>Performance Optimization</option>
                <option>Technical SEO</option>
                <option>Ongoing Support</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="needs" className="mb-2 block text-sm font-medium text-white/80">What do you need help with?</label>
              <textarea id="needs" name="needs" rows="5" className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none placeholder:text-white/35" placeholder="Project details" />
            </div>

            <div className="flex flex-wrap gap-3">
              <button type="submit" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5">
                Send Inquiry
              </button>
              <a href="mailto:nabadeeptalukdarbusiness@gmail.com" className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white">
                Email Directly
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
