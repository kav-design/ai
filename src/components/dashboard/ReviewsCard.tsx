"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const distribution = [
  { stars: 5, pct: 70, count: 42 },
  { stars: 4, pct: 20, count: 12 },
  { stars: 3, pct: 7, count: 4 },
  { stars: 2, pct: 2, count: 1 },
  { stars: 1, pct: 1, count: 1 },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function ReviewsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7, ease }}
      className="rounded-xl border border-border bg-white p-5"
    >
      <h3 className="mb-4 text-[14px] font-semibold text-charcoal">
        Google Reviews
      </h3>

      {/* Big rating */}
      <div className="mb-4 flex items-center gap-3">
        <p className="text-[42px] font-bold text-charcoal leading-none">4.8</p>
        <div>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < 5 ? "fill-gold text-gold" : "text-border"}
              />
            ))}
          </div>
          <p className="mt-1 text-[11px] text-muted">
            60 total &middot; 15 this month
          </p>
        </div>
      </div>

      {/* Distribution bars */}
      <div className="mb-5 space-y-2">
        {distribution.map((d, i) => (
          <div key={d.stars} className="flex items-center gap-2">
            <span className="w-4 text-[11px] text-muted text-right">
              {d.stars}
            </span>
            <Star size={10} className="fill-gold text-gold flex-shrink-0" />
            <div className="flex-1 h-2 rounded-full bg-cream-dark overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${d.pct}%` }}
                transition={{ duration: 0.8, delay: 0.9 + i * 0.08, ease }}
                className="h-full rounded-full bg-gold"
              />
            </div>
            <span className="w-6 text-[10px] text-muted text-right">
              {d.count}
            </span>
          </div>
        ))}
      </div>

      {/* Recent review */}
      <div className="rounded-lg border border-border bg-cream/50 p-3">
        <div className="mb-1.5 flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} className="fill-gold text-gold" />
          ))}
        </div>
        <p className="text-[12px] text-body leading-relaxed">
          &ldquo;Best dental experience ever! Milo booked my appointment instantly after I called.&rdquo;
        </p>
        <p className="mt-1.5 text-[11px] font-medium text-charcoal">
          Sarah M. &middot; 2 hours ago
        </p>
      </div>
    </motion.div>
  );
}
