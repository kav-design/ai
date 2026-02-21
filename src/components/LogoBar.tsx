"use client";

const logos = [
  "Bright Smile Dental",
  "Pacific Dental Group",
  "Coastal Smiles",
  "Sydney Dental Co.",
  "Melbourne Family Dental",
  "Brisbane Dental Care",
  "Perth Dental Studio",
  "Adelaide Smiles",
];

export default function LogoBar() {
  return (
    <section className="border-y border-border py-10 overflow-hidden">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.15em] text-muted">
        Trusted by dental clinics across Australia
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent" />

        <div
          className="flex w-max items-center gap-16 hover:[animation-play-state:paused]"
          style={{ animation: "marquee 35s linear infinite" }}
        >
          {[...logos, ...logos].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex-shrink-0 text-base font-semibold text-charcoal/20 transition-colors duration-500 hover:text-charcoal/40"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
