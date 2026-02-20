"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Zap } from "lucide-react";

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
    text: "Oh no, I'm sorry to hear that! We can definitely fit you in today. What's your name so I can book you in?",
  },
  {
    role: "customer" as const,
    text: "Sarah Mitchell",
  },
  {
    role: "ai" as const,
    text: "Thanks Sarah! I've got a 10:30am or 2pm slot today. Which works better for you? 🦷",
  },
];

function AnimatedChat() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    if (visibleCount >= messages.length) return;

    const typingTimer = setTimeout(() => {
      setShowTyping(true);
    }, visibleCount === 0 ? 800 : 600);

    const msgTimer = setTimeout(
      () => {
        setShowTyping(false);
        setVisibleCount((c) => c + 1);
      },
      visibleCount === 0 ? 2200 : 1800 + Math.random() * 800
    );

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(msgTimer);
    };
  }, [visibleCount]);

  return (
    <div className="relative">
      <div className="rounded-2xl border border-border bg-white shadow-xl">
        {/* Chat header */}
        <div className="flex items-center gap-3 border-b border-border px-5 py-4">
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal text-xs font-bold text-white">
              M
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
          </div>
          <div>
            <p className="text-sm font-semibold text-charcoal">Milo AI</p>
            <p className="text-xs text-emerald-600">Responding now</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex min-h-[340px] flex-col gap-3 px-5 py-4 sm:min-h-[380px]">
          {messages.slice(0, visibleCount).map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.role === "customer" ? "justify-end" : "justify-start"
              } ${msg.role === "customer" ? "msg-right" : "msg-left"}`}
            >
              <div className="flex max-w-[85%] items-end gap-1.5">
                {msg.role === "ai" && (
                  <Zap
                    size={12}
                    className="mb-2 flex-shrink-0 text-terracotta"
                    fill="currentColor"
                  />
                )}
                <div
                  className={`rounded-2xl px-4 py-2.5 ${
                    msg.role === "ai"
                      ? "rounded-tl-sm bg-teal text-white"
                      : "rounded-tr-sm bg-cream-dark text-charcoal"
                  }`}
                >
                  <p className="text-[13px] leading-relaxed">{msg.text}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {showTyping && visibleCount < messages.length && (
            <div className="msg-left flex items-start">
              <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-teal/10 px-4 py-3">
                <span className="typing-dot h-[6px] w-[6px] rounded-full bg-teal" />
                <span className="typing-dot h-[6px] w-[6px] rounded-full bg-teal" />
                <span className="typing-dot h-[6px] w-[6px] rounded-full bg-teal" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating notification */}
      {visibleCount >= 4 && (
        <div className="absolute -left-4 top-24 z-10 msg-left sm:-left-12">
          <div className="rounded-xl border border-border bg-white p-3 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-light">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5f8577" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-charcoal">Lead Captured</p>
                <p className="text-[11px] text-muted">Sarah M. — Emergency</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

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
              <span className="font-[family-name:var(--font-display)] italic text-terracotta">
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

            {/* Proof points */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start">
              {[
                { value: "2s", label: "Response time" },
                { value: "24/7", label: "Availability" },
                { value: "3x", label: "More bookings" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-2xl font-bold text-charcoal">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Animated chat */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[400px]">
              <AnimatedChat />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
