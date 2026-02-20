import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote: "We were missing 30% of our calls. Now Milo catches every one and books them before we even know they called. Bookings up 40% this quarter.",
    name: "Dr. Emily Chen",
    role: "Bright Smile Dental",
    location: "Melbourne, VIC",
    metric: "+40%",
    metricLabel: "bookings",
  },
  {
    quote: "The follow-up sequences are incredible. Patients who would have disappeared now come back and book. Milo paid for itself in the first week.",
    name: "Dr. James Patel",
    role: "Pacific Dental Group",
    location: "Sydney, NSW",
    metric: "12x",
    metricLabel: "ROI month one",
  },
  {
    quote: "Google reviews went from 2 per month to 15. We\u2019re now the top-rated clinic in our area. The automated texts make it effortless.",
    name: "Dr. Sarah Kim",
    role: "Coastal Smiles",
    location: "Gold Coast, QLD",
    metric: "7x",
    metricLabel: "more reviews",
  },
];

export default function Testimonials() {
  return (
    <section className="gradient-mixed relative overflow-hidden py-24 sm:py-32">
      {/* Organic background shapes */}
      <div className="organic-shape organic-gold absolute -left-40 top-10 h-[450px] w-[450px]" />
      <div className="organic-shape organic-blue absolute -right-32 bottom-0 h-[400px] w-[400px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-20 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">
              Testimonials
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
              Don&apos;t take our word for it
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <div className="h-full rounded-2xl border border-border bg-white p-8 shadow-sm">
                {/* Stars */}
                <div className="mb-5 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mb-6 text-base leading-relaxed text-body">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Metric */}
                <div className="mb-6 inline-flex items-baseline gap-1.5 rounded-full bg-teal-light px-3 py-1">
                  <span className="text-sm font-bold text-teal">{t.metric}</span>
                  <span className="text-xs text-teal">{t.metricLabel}</span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-dark text-[12px] font-bold text-body">
                    {t.name.split(" ").slice(1).map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">{t.name}</p>
                    <p className="text-xs text-muted">{t.role} &middot; {t.location}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
