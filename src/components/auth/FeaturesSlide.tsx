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

const accentCycle = [
  { bg: "bg-terracotta-light", text: "text-terracotta" },
  { bg: "bg-teal-light", text: "text-teal" },
  { bg: "bg-sage-light", text: "text-sage" },
  { bg: "bg-gold-light", text: "text-gold" },
  { bg: "bg-blue-muted-light", text: "text-blue-muted" },
];

const features = [
  {
    icon: Phone,
    title: "AI Voice Agent",
    desc: "Answers every call like your best receptionist",
  },
  {
    icon: PhoneOff,
    title: "Missed Call Text-Back",
    desc: "Instantly texts patients you couldn\u2019t pick up",
  },
  {
    icon: CalendarDays,
    title: "Appointment Booking",
    desc: "Books directly into your calendar, 24/7",
  },
  {
    icon: Star,
    title: "Google Reviews",
    desc: "Collects 5-star reviews on autopilot",
  },
  {
    icon: Repeat,
    title: "Smart Follow-Ups",
    desc: "Re-engages no-shows and pending patients",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Never miss a patient, even after hours",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function FeaturesSlide() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="mb-8"
      >
        <h1 className="font-display text-[36px] leading-[1.12] text-charcoal">
          Everything your clinic{" "}
          <span className="gradient-text-copper">needs</span>
        </h1>
        <p className="mt-3 text-sm text-muted leading-relaxed">
          One AI assistant that handles calls, bookings, reviews, and follow-ups.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease }}
        className="grid grid-cols-2 gap-3"
      >
        {features.map((f, i) => {
          const accent = accentCycle[i % accentCycle.length];
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.1,
                ease,
              }}
              className="rounded-xl bg-white/70 p-3.5 shadow-sm backdrop-blur-sm"
            >
              <div
                className={`mb-2.5 flex h-9 w-9 items-center justify-center rounded-full ${accent.bg}`}
              >
                <f.icon size={18} className={accent.text} />
              </div>
              <p className="text-[13px] font-semibold text-charcoal leading-snug">
                {f.title}
              </p>
              <p className="mt-0.5 text-[11px] text-muted leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
