"use client";

export default function Error({ reset }) {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24 text-center">
      <div className="max-w-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-white/45">Error</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Something went wrong</h1>
        <p className="mt-4 text-lg leading-8 text-white/60">
          A temporary issue prevented this page from loading. Please refresh and try again.
        </p>
        <button
          onClick={() => reset()}
          className="mt-8 inline-flex rounded-full border border-white/10 bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
