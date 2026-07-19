import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24 text-center">
      <div className="max-w-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-white/45">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Page not found</h1>
        <p className="mt-4 text-lg leading-8 text-white/60">
          The page you are looking for may have moved or no longer exists. Return home to continue exploring the work.
        </p>
        <Link href="/" className="mt-8 inline-flex rounded-full border border-white/10 bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90">
          Return Home
        </Link>
      </div>
    </main>
  );
}
