export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.35em] text-white/45 sm:text-sm">
        {eyebrow}
      </p>
      <h2 className="text-balance text-[clamp(2rem,3.2vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-[clamp(2.2rem,4vw,3.5rem)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-[clamp(1rem,1.35vw,1.125rem)] leading-8 text-white/60">
          {description}
        </p>
      ) : null}
    </div>
  );
}
