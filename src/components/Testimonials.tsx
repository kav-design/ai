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
    <section className="relative py-32">
      <div className="section-line" />

      <div className="relative mx-auto max-w-7xl px-6 pt-8 lg:px-8">
        <ScrollReveal>
          <div className="mb-20 text-center">
            <p className="mb-4 text-[11px] font-semibold tracking-[0.15em] text-milo-400 uppercase">
              Testimonials
            </p>
            <h2 className="mb-5 text-[2.5rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white sm:text-[3rem]">
              Don&apos;t take our word for it
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <div className="group glass relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.04]">
                {/* Stars */}
                <div className="mb-5 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mb-6 text-[14px] leading-relaxed text-gray-300">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Metric */}
                <div className="mb-6 inline-flex items-baseline gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1">
                  <span className="text-[16px] font-extrabold text-emerald-400">{t.metric}</span>
                  <span className="text-[11px] text-emerald-400/70">{t.metricLabel}</span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-white/[0.06] to-white/[0.02] text-[12px] font-bold text-gray-400 ring-1 ring-white/[0.06]">
                    {t.name.split(" ").slice(1).map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-white">{t.name}</p>
                    <p className="text-[11px] text-gray-500">{t.role} &middot; {t.location}</p>
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
