"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Milo catches every missed call and books them before we even know they called.",
    name: "Dr. Emily Chen",
    role: "Bright Smile Dental",
    metric: "+40%",
    metricLabel: "bookings",
  },
  {
    quote:
      "Patients who would have disappeared now come back and book. Paid for itself week one.",
    name: "Dr. James Patel",
    role: "Pacific Dental Group",
    metric: "12x",
    metricLabel: "ROI",
  },
  {
    quote:
      "Google reviews went from 2 per month to 15. We\u2019re now the top-rated clinic in our area.",
    name: "Dr. Sarah Kim",
    role: "Coastal Smiles",
    metric: "7x",
    metricLabel: "more reviews",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function ReviewSlide() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="mb-6"
      >
        <h1 className="font-display text-[36px] leading-[1.12] text-charcoal">
          What clinics{" "}
          <span className="gradient-text-copper">say</span>
        </h1>
        <p className="mt-3 text-sm text-muted leading-relaxed">
          Don&apos;t take our word for it &mdash; hear from real dental practices.
        </p>
      </motion.div>

      <div className="flex flex-col gap-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.12, ease }}
            className="rounded-xl border border-border bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                {/* Stars */}
                <div className="mb-2 flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={11} className="fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[13px] leading-relaxed text-body">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-3 flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cream-dark text-[10px] font-bold text-body">
                    {t.name
                      .split(" ")
                      .slice(1)
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-charcoal">
                      {t.name}
                    </p>
                    <p className="text-[11px] text-muted">{t.role}</p>
                  </div>
                </div>
              </div>

              {/* Metric */}
              <div className="flex flex-col items-center rounded-lg bg-teal-light px-2.5 py-1.5">
                <span className="text-base font-bold text-teal leading-none">
                  {t.metric}
                </span>
                <span className="text-[9px] text-teal mt-0.5">
                  {t.metricLabel}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
