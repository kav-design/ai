"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight, Zap, Clock, Wifi, TrendingUp } from "lucide-react";

const messages = [
  {
    role: "ai" as const,
    text: "Hey! Thanks for calling Bright Smile Dental. Sorry we missed you — how can we help? 😊",
  },
  {
    role: "customer" as const,
    text: "Hi! I have a really bad toothache, need an emergency appointment",
  },
  {
    role: "ai" as const,
    text: "I'm sorry to hear that! We can fit you in today. What's your name?",
  },
  {
    role: "customer" as const,
    text: "Sarah Mitchell",
  },
  {
    role: "ai" as const,
    text: "Thanks Sarah! I've got 10:30am or 2pm today — which works? 🦷",
  },
  {
    role: "customer" as const,
    text: "2pm works!",
  },
  {
    role: "ai" as const,
    text: "You're all booked for 2pm today, Sarah! We'll text you a reminder. See you soon! ✨",
  },
];

function FloatingBubbles() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [showBooked, setShowBooked] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visibleCount >= messages.length) {
      // Show "Appointment Booked" after last message
      const t = setTimeout(() => setShowBooked(true), 600);
      return () => clearTimeout(t);
    }

    // Show "Lead Captured" after customer gives name (index 3)
    if (visibleCount === 4 && !showLeadCapture) {
      setShowLeadCapture(true);
    }

    const delay = visibleCount === 0 ? 500 : 800;
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleCount, showLeadCapture]);

  // Auto-scroll to bottom as messages appear
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleCount]);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex max-h-[460px] flex-col gap-2.5 overflow-y-auto pr-2"
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.role === "customer" ? "justify-end" : "justify-start"
            } transition-all duration-500 ${
              i < visibleCount
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-3 opacity-0"
            }`}
          >
            <div className="flex max-w-[82%] items-end gap-1.5">
              {msg.role === "ai" && (
                <Zap
                  size={11}
                  className="mb-2.5 flex-shrink-0 text-teal"
                  fill="currentColor"
                />
              )}
              <div
                className={`rounded-2xl px-4 py-2.5 ${
                  msg.role === "ai"
                    ? "rounded-tl-sm bg-teal text-white shadow-lg shadow-teal/10"
                    : "rounded-tr-sm bg-white text-charcoal shadow-md"
                }`}
              >
                <p className="text-[13px] leading-relaxed">{msg.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lead Captured — subtle floating pill */}
      {showLeadCapture && (
        <div className="absolute -left-3 top-[45%] z-10 transition-all duration-500 animate-in sm:-left-8">
          <div className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2 shadow-lg">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-teal-light">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5f8577" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <polyline points="16 11 18 13 22 9" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-semibold text-charcoal">Lead Captured</p>
              <p className="text-[9px] text-muted">Sarah M. — Emergency</p>
            </div>
          </div>
        </div>
      )}

      {/* Appointment Booked — subtle floating pill */}
      {showBooked && (
        <div className="absolute -right-2 bottom-2 z-10 transition-all duration-500 animate-in sm:-right-6">
          <div className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2 shadow-lg">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-50">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-semibold text-charcoal">Appointment Booked</p>
              <p className="text-[9px] text-muted">Today 2:00pm — Emergency</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const stats = [
  { value: "2s", label: "Response time", icon: Clock, color: "text-teal", bg: "bg-teal-light" },
  { value: "24/7", label: "Availability", icon: Wifi, color: "text-terracotta", bg: "bg-terracotta-light" },
  { value: "3x", label: "More bookings", icon: TrendingUp, color: "text-sage", bg: "bg-sage-light" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Organic background shapes */}
      <div className="organic-shape organic-sage absolute -top-40 -left-32 h-[550px] w-[550px]" />
      <div className="organic-shape organic-gold absolute -top-20 -right-40 h-[600px] w-[600px]" />
      <div className="organic-shape organic-blue absolute -bottom-32 left-1/3 h-[450px] w-[450px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 shadow-sm">
              <div className="relative h-2 w-2">
                <div className="absolute inset-0 animate-ping rounded-full bg-terracotta opacity-75" />
                <div className="relative h-2 w-2 rounded-full bg-terracotta" />
              </div>
              <span className="text-xs font-medium text-body">
                AI Employee for Dental Clinics
              </span>
            </div>

            <h1 className="mb-6 text-[2.75rem] font-bold leading-[1.08] tracking-tight text-charcoal sm:text-5xl lg:text-[3.5rem]">
              Turn missed calls into{" "}
              <br />
              <span className="text-terracotta">
                booked patients.
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-lg text-[17px] leading-relaxed text-body lg:mx-0">
              Milo responds in 2 seconds via SMS and voice, books appointments,
              follows up with leads, and collects Google reviews — 24/7, on
              autopilot.
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2.5 rounded-full bg-terracotta px-8 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-terracotta-dark"
              >
                Start Free Trial
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border-2 border-charcoal px-8 py-3.5 text-[15px] font-semibold text-charcoal transition-colors hover:bg-charcoal hover:text-white"
              >
                See How It Works
              </a>
            </div>

            {/* Proof points — styled cards */}
            <div className="mt-12 flex flex-wrap justify-center gap-4 lg:justify-start">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-white px-5 py-3 shadow-sm"
                >
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${stat.bg}`}>
                    <stat.icon size={16} className={stat.color} />
                  </div>
                  <div>
                    <p className={`text-lg font-bold leading-none ${stat.color}`}>
                      {stat.value}
                    </p>
                    <p className="text-[11px] text-muted">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Floating chat bubbles */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[420px]">
              <FloatingBubbles />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
