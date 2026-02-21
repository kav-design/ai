"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "We were missing 30% of our calls. Now Milo catches every one and books them before we even know they called.",
    name: "Dr. Emily Chen",
    role: "Bright Smile Dental",
    location: "Melbourne, VIC",
    metric: "+40%",
    metricLabel: "bookings",
  },
  {
    quote:
      "The follow-up sequences are incredible. Patients who would have disappeared now come back and book. Milo paid for itself in the first week.",
    name: "Dr. James Patel",
    role: "Pacific Dental Group",
    location: "Sydney, NSW",
    metric: "12x",
    metricLabel: "ROI month one",
  },
  {
    quote:
      "Google reviews went from 2 per month to 15. We\u2019re now the top-rated clinic in our area. The automated texts make it effortless.",
    name: "Dr. Sarah Kim",
    role: "Coastal Smiles",
    location: "Gold Coast, QLD",
    metric: "7x",
    metricLabel: "more reviews",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function ReviewSlide() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="mb-8"
      >
        <h1 className="font-display text-[36px] leading-[1.12] text-charcoal">
          What clinics{" "}
          <span className="gradient-text-copper">say</span>
        </h1>
        <p className="mt-3 text-sm text-muted leading-relaxed">
          Don&apos;t take our word for it &mdash; hear from real dental practices.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease }}
      >
        {/* Testimonial card */}
        <div className="relative rounded-2xl border border-border bg-white p-7 shadow-sm min-h-[280px]">
          {/* Quote mark */}
          <div className="mb-3 text-5xl leading-none text-border font-display">
            &ldquo;
          </div>

          {/* Stars */}
          <div className="mb-4 flex gap-1">
            {[...Array(5)].map((_, j) => (
              <Star key={j} size={14} className="fill-gold text-gold" />
            ))}
          </div>

          {/* Rotating quote */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease }}
            >
              <p className="mb-5 text-[14px] leading-relaxed text-body">
                {t.quote}
              </p>

              {/* Metric badge */}
              <div className="mb-5 inline-flex items-baseline gap-1.5 rounded-full bg-teal-light px-3 py-1">
                <span className="text-sm font-bold text-teal">
                  {t.metric}
                </span>
                <span className="text-xs text-teal">{t.metricLabel}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-dark text-[12px] font-bold text-body">
                  {t.name
                    .split(" ")
                    .slice(1)
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted">
                    {t.role} &middot; {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mini dots for testimonial rotation */}
          <div className="mt-5 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "h-2 w-2 bg-terracotta"
                    : "h-1.5 w-1.5 bg-charcoal/15 hover:bg-charcoal/30"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
