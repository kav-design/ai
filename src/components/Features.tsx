"use client";

import { useRef } from "react";
import {
  PhoneOff, MessageSquare, Brain, Globe, BellRing, Star,
  BarChart3, Clock, CalendarDays, ShieldCheck, Repeat, Phone,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

function MiniWaveform() {
  const heights = [40, 75, 55, 90, 65, 45, 85, 60, 78, 48, 88, 52, 72, 42, 62, 82, 58, 92, 68, 48];
  return (
    <div className="flex h-10 items-end gap-[3px]">
      {heights.map((h, i) => (
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

function MiniChart() {
  const bars = [30, 50, 42, 65, 55, 78, 60, 88, 70, 58, 82];
  return (
    <div className="flex h-10 items-end gap-1">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-1.5 rounded-sm bg-teal/30"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

const accentCycle = [
  { bg: "bg-terracotta-light", text: "text-terracotta" },
  { bg: "bg-teal-light", text: "text-teal" },
  { bg: "bg-sage-light", text: "text-sage" },
  { bg: "bg-gold-light", text: "text-gold" },
  { bg: "bg-blue-muted-light", text: "text-blue-muted" },
];

type Feature = {
  icon: typeof Phone;
  title: string;
  desc: string;
  colSpan?: 2;
  variant?: "dark" | "stat" | "accent" | "gradient";
};

const features: Feature[] = [
  {
    icon: Phone,
    title: "AI Voice Agent",
    desc: "Milo answers calls with a natural AI voice \u2014 books appointments, answers FAQs, and transfers to staff when needed.",
    colSpan: 2,
    variant: "dark",
  },
  {
    icon: PhoneOff,
    title: "Missed Call Text-Back",
    desc: "Every missed call triggers an instant SMS within 2 seconds. Patients never feel ignored.",
    variant: "stat",
  },
  {
    icon: Brain,
    title: "AI Conversation Engine",
    desc: "Dental-specific AI that understands emergencies, suggests services, and handles objections naturally.",
  },
  {
    icon: Globe,
    title: "Web Chat Widget",
    desc: "One line of code adds a chat widget to your site. Same smart AI catching leads from visitors.",
  },
  {
    icon: CalendarDays,
    title: "Appointment Booking",
    desc: "Qualifies the patient, captures preferred time, sends your booking link \u2014 or notifies you to confirm.",
  },
  {
    icon: Repeat,
    title: "Smart Follow-Ups",
    desc: "Automated 24h, 48h, and 5-day follow-ups with personalised messages that bring patients back.",
  },
  {
    icon: Star,
    title: "Google Review Collection",
    desc: "Automated review requests after appointments with intelligent follow-up for non-responders.",
    colSpan: 2,
    variant: "accent",
  },
  {
    icon: BellRing,
    title: "Real-Time Notifications",
    desc: "SMS and email alerts when leads are qualified. Full transcript included. Respects quiet hours.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Conversations, leads, estimated revenue, review rates, and busiest hours \u2014 all in one view.",
    colSpan: 2,
    variant: "gradient",
  },
  {
    icon: MessageSquare,
    title: "Unified Inbox",
    desc: "All SMS and web chat threads in one place. Staff can take over from AI with one click.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "After-hours, weekends, holidays \u2014 every patient gets an instant, intelligent response.",
  },
  {
    icon: ShieldCheck,
    title: "Dental Playbooks",
    desc: "Emergency detection, whitening upsells, welcome-back offers \u2014 industry intelligence built in.",
  },
];

export default function Features() {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-60px" });

  let stdIdx = 0;

  return (
    <section id="features" className="relative overflow-hidden py-24 sm:py-32">
      {/* Organic background shapes */}
      <div className="organic-shape organic-gold absolute -left-40 top-20 h-[500px] w-[500px]" />
      <div className="organic-shape organic-sage absolute -right-32 bottom-40 h-[450px] w-[450px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">
            Capabilities
          </p>
          <h2 className="mb-5 text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
            One AI employee.{" "}
            <span className="text-terracotta">Every job covered.</span>
          </h2>
          <p className="mx-auto max-w-lg text-lg leading-relaxed text-body">
            From the first missed call to the 5-star Google review &mdash; Milo
            handles the entire patient journey.
          </p>
        </motion.div>

        <div
          ref={gridRef}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f, i) => {
            const isDark = f.variant === "dark";
            const isAccent = f.variant === "accent";
            const isStat = f.variant === "stat";
            const isGradient = f.variant === "gradient";
            const isHero = !!f.variant;

            let accent = { bg: "bg-cream-dark", text: "text-body" };
            if (!isHero) {
              accent = accentCycle[stdIdx % accentCycle.length];
              stdIdx++;
            }

            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-md ${
                  f.colSpan === 2 ? "sm:col-span-2" : ""
                } ${
                  isDark
                    ? "border-white/5 bg-charcoal p-7 sm:p-8"
                    : isAccent
                      ? "border-gold/20 bg-gold-light p-7 sm:p-8"
                      : isStat
                        ? "border-terracotta/15 bg-terracotta-light p-6"
                        : isGradient
                          ? "border-teal/15 bg-teal-light p-7 sm:p-8"
                          : "border-border bg-white p-6"
                }`}
              >
                <div
                  className={`relative z-10 ${f.colSpan === 2 ? "max-w-sm" : ""}`}
                >
                  <div
                    className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${
                      isDark
                        ? "bg-white/10"
                        : isAccent
                          ? "bg-gold/15"
                          : isStat
                            ? "bg-terracotta/15"
                            : isGradient
                              ? "bg-teal/15"
                              : accent.bg
                    }`}
                  >
                    <f.icon
                      size={20}
                      className={
                        isDark
                          ? "text-teal"
                          : isAccent
                            ? "text-gold"
                            : isStat
                              ? "text-terracotta"
                              : isGradient
                                ? "text-teal"
                                : accent.text
                      }
                    />
                  </div>
                  <h3
                    className={`mb-2 text-base font-semibold ${
                      isDark ? "text-white" : "text-charcoal"
                    }`}
                  >
                    {f.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-white/60" : "text-body"
                    }`}
                  >
                    {f.desc}
                  </p>
                </div>

                {/* Decorative visuals for hero cards */}
                {isDark && (
                  <div className="pointer-events-none absolute right-6 bottom-6 hidden opacity-40 sm:block">
                    <MiniWaveform />
                  </div>
                )}
                {isGradient && (
                  <div className="pointer-events-none absolute right-6 bottom-6 hidden opacity-50 sm:block">
                    <MiniChart />
                  </div>
                )}
                {isAccent && (
                  <div className="pointer-events-none absolute right-6 bottom-6 hidden items-center gap-0.5 opacity-40 sm:flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={14}
                        className="fill-gold text-gold"
                      />
                    ))}
                  </div>
                )}
                {isStat && (
                  <div className="pointer-events-none absolute right-5 bottom-3">
                    <p className="text-5xl font-bold text-terracotta/15">2s</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
