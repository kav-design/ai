"use client";

import { motion } from "framer-motion";
import {
  Phone,
  PhoneOff,
  CalendarDays,
  Star,
  Repeat,
  Clock,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const features = [
  {
    icon: Phone,
    title: "AI Voice Agent",
    desc: "Answers every call like your best receptionist",
    variant: "dark" as const,
    span: true,
  },
  {
    icon: PhoneOff,
    title: "Missed Call Text-Back",
    desc: "Instant SMS within 2 seconds",
    variant: "stat" as const,
  },
  {
    icon: CalendarDays,
    title: "Appointment Booking",
    desc: "Books directly into your calendar",
  },
  {
    icon: Star,
    title: "Google Reviews",
    desc: "Collects 5-star reviews on autopilot",
    variant: "accent" as const,
    span: true,
  },
  {
    icon: Repeat,
    title: "Smart Follow-Ups",
    desc: "Re-engages no-shows automatically",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Never miss a patient, even after hours",
  },
];

const accentCycle = [
  { bg: "bg-terracotta-light", text: "text-terracotta" },
  { bg: "bg-teal-light", text: "text-teal" },
  { bg: "bg-sage-light", text: "text-sage" },
  { bg: "bg-gold-light", text: "text-gold" },
  { bg: "bg-blue-muted-light", text: "text-blue-muted" },
];

function MiniWaveform() {
  const heights = [40, 75, 55, 90, 65, 45, 85, 60, 78, 48, 88, 52, 72, 42, 62, 82, 58, 92, 68, 48];
  return (
    <div className="flex h-8 items-end gap-[2px]">
      {heights.map((_, i) => (
        <div
          key={i}
          className="waveform-bar w-[2px] rounded-full bg-teal/40"
          style={{
            height: "100%",
            animationDelay: `${i * 0.08}s`,
            animationDuration: `${0.8 + (i % 5) * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function FeaturesSlide() {
  let stdIdx = 0;

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="mb-6"
      >
        <h1 className="font-display text-[36px] leading-[1.12] text-charcoal">
          Everything your clinic{" "}
          <span className="gradient-text-copper">needs</span>
        </h1>
        <p className="mt-3 text-sm text-muted leading-relaxed">
          One AI assistant that handles it all.
        </p>
      </motion.div>

      {/* Let the grid overflow the parent for a more dramatic feel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease }}
        className="-mx-4 px-1"
      >
        <div className="grid grid-cols-2 gap-2.5">
          {features.map((f, i) => {
            const isDark = f.variant === "dark";
            const isAccent = f.variant === "accent";
            const isStat = f.variant === "stat";
            const isStandard = !f.variant;

            let accent = accentCycle[0];
            if (isStandard) {
              accent = accentCycle[stdIdx % accentCycle.length];
              stdIdx++;
            }

            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.08,
                  ease,
                }}
                className={`group relative overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                  f.span ? "col-span-2" : ""
                } ${
                  isDark
                    ? "border-white/5 bg-charcoal p-4"
                    : isAccent
                      ? "border-gold/20 bg-gold-light p-4"
                      : isStat
                        ? "border-terracotta/15 bg-terracotta-light p-4"
                        : "border-border bg-white p-4"
                }`}
              >
                <div className={`relative z-10 ${f.span ? "max-w-[70%]" : ""}`}>
                  <div
                    className={`mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg ${
                      isDark
                        ? "bg-white/10"
                        : isAccent
                          ? "bg-gold/15"
                          : isStat
                            ? "bg-terracotta/15"
                            : accent.bg
                    }`}
                  >
                    <f.icon
                      size={18}
                      className={
                        isDark
                          ? "text-teal"
                          : isAccent
                            ? "text-gold"
                            : isStat
                              ? "text-terracotta"
                              : accent.text
                      }
                    />
                  </div>
                  <p
                    className={`text-[13px] font-semibold leading-snug ${
                      isDark ? "text-white" : "text-charcoal"
                    }`}
                  >
                    {f.title}
                  </p>
                  <p
                    className={`mt-0.5 text-[11px] leading-relaxed ${
                      isDark ? "text-white/50" : "text-muted"
                    }`}
                  >
                    {f.desc}
                  </p>
                </div>

                {/* Decorative elements for variant cards */}
                {isDark && (
                  <div className="pointer-events-none absolute right-4 bottom-3 opacity-40">
                    <MiniWaveform />
                  </div>
                )}
                {isAccent && (
                  <div className="pointer-events-none absolute right-4 bottom-3 flex items-center gap-0.5 opacity-40">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={12} className="fill-gold text-gold" />
                    ))}
                  </div>
                )}
                {isStat && (
                  <div className="pointer-events-none absolute right-3 bottom-1.5">
                    <p className="text-4xl font-bold text-terracotta/10">2s</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
