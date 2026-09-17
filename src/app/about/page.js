import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/siteMetadata";

export const metadata = buildMetadata({
  title: "About Nabadeep Talukdar | Web Developer in India",
  description:
    "I’m Nabadeep Talukdar, a web developer based in India working with businesses that need more than a good-looking website.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-28">
      <section className="px-5 pb-16 pt-10 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[minmax(220px,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
          <div className="mx-auto w-full max-w-xs lg:mx-0">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/4 p-3 shadow-[0_32px_90px_-36px_rgba(255,255,255,0.35)]">
              <Image
                src="/images/nabadeep.png"
                width={430}
                height={430}
                alt="Nabadeep Talukdar"
                className="rounded-[20px] object-cover"
                priority
                sizes="(max-width: 1024px) 80vw, 320px"
              />
            </div>
          </div>

          <div>
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.35em] text-white/45 sm:text-sm">
              About
            </p>
            <h1 className="mt-5 text-[clamp(2.4rem,5vw,4.2rem)] font-semibold leading-[0.96] tracking-[-0.03em] text-white">
              About Nabadeep Talukdar
            </h1>

            <div className="mt-8 space-y-6 text-lg leading-8 text-white/70">
              <p>
                I’m Nabadeep Talukdar, a web developer based in India working with businesses that need more than a good-looking website.
              </p>
              <p>
                My work spans WordPress, Shopify and custom web development, including ecommerce stores, corporate websites, performance optimization, technical SEO and ongoing website management.
              </p>
              <p>
                I focus on clean execution, reliable communication and websites that remain fast, maintainable and useful long after launch.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Based in India</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Available for remote projects worldwide</span>
            </div>

            <div className="mt-12 rounded-[32px] border border-white/10 bg-white/4 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-white">How I work</h2>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-white/65">
                <li>WordPress development for business websites, content-heavy sites and ecommerce experiences.</li>
                <li>Shopify stores and custom storefront improvements focused on conversion and usability.</li>
                <li>Custom web development with JavaScript, responsive frontends and performance-aware implementation.</li>
                <li>Technical SEO and performance work designed to support indexing, crawlability and better user experience.</li>
                <li>Remote collaboration with businesses worldwide through clear communication and practical project updates.</li>
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5">
                  Let&apos;s Talk About Your Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
