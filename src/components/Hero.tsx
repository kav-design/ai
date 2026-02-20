"use client";

import { ArrowRight, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const chatMessages = [
  {
    role: "ai" as const,
    text: "Hey! Thanks for calling Bright Smile Dental. Sorry we missed you — how can we help? 😊",
    time: "9:41 AM",
  },
  {
    role: "customer" as const,
    text: "Hi! I have a really bad toothache, need an emergency appointment",
    time: "9:42 AM",
  },
  {
    role: "ai" as const,
    text: "Oh no, I'm sorry to hear that! We can definitely fit you in today. What's your name so I can book you in?",
    time: "9:42 AM",
  },
  {
    role: "customer" as const,
    text: "Sarah Mitchell",
    time: "9:43 AM",
  },
  {
    role: "ai" as const,
    text: "Thanks Sarah! I've got a 10:30am or 2pm slot today. Which works better for you? 🦷",
    time: "9:43 AM",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Organic background shapes */}
      <div className="organic-shape organic-sage absolute -top-40 -left-32 h-[500px] w-[500px]" />
      <div className="organic-shape organic-gold absolute -top-20 -right-40 h-[600px] w-[600px]" />
      <div className="organic-shape organic-blue absolute -bottom-32 left-1/3 h-[450px] w-[450px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Centered content */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <ScrollReveal>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 shadow-sm">
              <div className="relative h-2 w-2">
                <div className="absolute inset-0 animate-ping rounded-full bg-terracotta opacity-75" />
                <div className="relative h-2 w-2 rounded-full bg-terracotta" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">
                AI Employee for Dental Clinics
              </span>
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal delay={100}>
            <h1 className="mb-6 text-5xl font-bold leading-[1.05] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
              Never miss a
              <br />
              <em className="font-[family-name:var(--font-display)] italic text-terracotta not-italic">
                patient
              </em>{" "}
              again.
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal delay={200}>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-body">
              Milo answers missed calls via SMS, books appointments, follows up
              with leads, and collects Google reviews — all on autopilot. Your
              AI employee that never takes a day off.
            </p>
          </ScrollReveal>

          {/* CTA Button */}
          <ScrollReveal delay={300}>
            <div className="mb-12">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2.5 rounded-full bg-charcoal px-10 py-4 text-base font-semibold text-white transition-colors hover:bg-[#333]"
              >
                Try it now
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </ScrollReveal>

          {/* Stats row */}
          <ScrollReveal delay={400}>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              {[
                { value: "2s", label: "Response time" },
                { value: "24/7", label: "Availability" },
                { value: "91%", label: "Engagement" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8 sm:gap-12">
                  {i > 0 && (
                    <div className="hidden h-8 w-px bg-border sm:block" />
                  )}
                  <div className="text-center">
                    <p className="text-xl font-bold text-charcoal">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Chat preview card */}
        <ScrollReveal delay={500}>
          <div className="mx-auto mt-20 max-w-lg sm:mt-24">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-lg sm:p-8">
              {/* Chat header */}
              <div className="mb-5 flex items-center gap-3 border-b border-border pb-4">
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal text-xs font-bold text-white">
                    M
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-charcoal">
                    Milo AI
                  </p>
                  <p className="text-xs text-muted">Active now</p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex flex-col gap-3">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.role === "customer"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div className="flex max-w-[85%] flex-col gap-1">
                      <div className="flex items-end gap-1.5">
                        {msg.role === "ai" && (
                          <Zap
                            size={12}
                            className="mb-1.5 flex-shrink-0 text-terracotta"
                            fill="currentColor"
                          />
                        )}
                        <div
                          className={`rounded-2xl px-4 py-2.5 ${
                            msg.role === "ai"
                              ? "rounded-tl-sm bg-teal text-white"
                              : "rounded-tr-sm border border-border bg-white text-charcoal"
                          }`}
                        >
                          <p className="text-[13px] leading-relaxed">
                            {msg.text}
                          </p>
                        </div>
                      </div>
                      <p
                        className={`px-1 text-[10px] text-muted ${
                          msg.role === "customer" ? "text-right" : "text-left"
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
