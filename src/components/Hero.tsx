"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const messages = [
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
    text: "Oh no, I'm sorry to hear that! 😟 We can definitely fit you in today. What's your name so I can book you in?",
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

function AnimatedPhone() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    if (visibleCount >= messages.length) return;

    // Show typing first
    const typingTimer = setTimeout(() => {
      setShowTyping(true);
    }, visibleCount === 0 ? 800 : 600);

    // Then show message
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
      {/* Phone frame */}
      <div className="phone-glow relative w-[300px] rounded-[2.8rem] border border-white/[0.08] bg-gradient-to-b from-navy-700 to-navy-800 p-[6px] sm:w-[340px]">
        <div className="overflow-hidden rounded-[2.5rem] bg-navy-950">
          {/* Dynamic island */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="h-[22px] w-[90px] rounded-full bg-black" />
          </div>

          {/* Chat header */}
          <div className="flex items-center gap-3 px-5 py-3">
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-milo-400 via-violet-500 to-emerald-400 text-xs font-bold text-white">
                M
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-navy-950 bg-emerald-400" />
            </div>
            <div>
              <p className="text-[13px] font-semibold text-white">Milo AI</p>
              <p className="text-[11px] text-emerald-400">Active now</p>
            </div>
          </div>

          <div className="h-px bg-white/[0.04]" />

          {/* Messages area */}
          <div className="flex min-h-[360px] flex-col gap-2.5 px-4 py-4 sm:min-h-[400px]">
            {messages.slice(0, visibleCount).map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  msg.role === "customer" ? "items-end" : "items-start"
                } ${msg.role === "customer" ? "msg-right" : "msg-left"}`}
              >
                <div
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 ${
                    msg.role === "ai"
                      ? "rounded-tl-sm bg-white/[0.06] ring-1 ring-white/[0.04]"
                      : "rounded-tr-sm bg-gradient-to-br from-milo-500 to-violet-500"
                  }`}
                >
                  <p
                    className={`text-[13px] leading-[1.5] ${
                      msg.role === "ai" ? "text-gray-200" : "text-white"
                    }`}
                  >
                    {msg.text}
                  </p>
                </div>
                <p className="mt-1 px-1 text-[10px] text-gray-600">
                  {msg.time}
                </p>
              </div>
            ))}

            {/* Typing indicator */}
            {showTyping && visibleCount < messages.length && (
              <div className="msg-left flex items-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-white/[0.06] px-4 py-3 ring-1 ring-white/[0.04]">
                  <span className="typing-dot h-[6px] w-[6px] rounded-full bg-gray-500" />
                  <span className="typing-dot h-[6px] w-[6px] rounded-full bg-gray-500" />
                  <span className="typing-dot h-[6px] w-[6px] rounded-full bg-gray-500" />
                </div>
              </div>
            )}
          </div>

          {/* Input bar */}
          <div className="flex items-center gap-2 border-t border-white/[0.04] px-4 py-3">
            <div className="flex-1 rounded-full bg-white/[0.04] px-4 py-2.5 ring-1 ring-white/[0.04]">
              <p className="text-[12px] text-gray-600">Message...</p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-milo-500 to-violet-500">
              <ArrowRight size={14} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification card */}
      {visibleCount >= 4 && (
        <div className="absolute -left-8 top-28 msg-left z-10 sm:-left-16">
          <div className="glass-strong rounded-2xl p-3.5 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <p className="text-[12px] font-semibold text-white">Lead Qualified</p>
                <p className="text-[11px] text-gray-400">Sarah M. — Emergency</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Background glow */}
      <div className="absolute -inset-32 -z-10 orb orb-blue opacity-60" />
      <div className="absolute -inset-24 -z-10 orb orb-violet opacity-40" style={{ animationDelay: "-5s" }} />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-18">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 noise" />

      {/* Orbs */}
      <div className="absolute left-[-10%] top-[-10%] h-[600px] w-[600px] orb orb-blue" />
      <div className="absolute right-[-5%] top-[10%] h-[500px] w-[500px] orb orb-violet" />
      <div className="absolute bottom-[-10%] left-[20%] h-[400px] w-[400px] orb orb-emerald" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-32 pt-16 sm:pt-24 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
              <div className="relative h-2 w-2">
                <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75" />
                <div className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[12px] font-medium text-gray-400">
                AI Employee for Dental Clinics
              </span>
            </div>

            <h1 className="mb-6 text-[3rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-[3.75rem] lg:text-[4.25rem]">
              Never miss a
              <br />
              <span className="gradient-text">patient</span> again
            </h1>

            <p className="mx-auto mb-10 max-w-lg text-[17px] leading-relaxed text-gray-400 lg:mx-0">
              Milo answers missed calls via SMS, books appointments, follows up
              with leads, and collects Google reviews — all on autopilot.
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#pricing"
                className="btn-glow group flex items-center gap-2 rounded-full bg-gradient-to-r from-milo-500 via-violet-500 to-milo-500 bg-[length:200%_100%] px-7 py-3.5 text-[14px] font-semibold text-white transition-all hover:bg-right"
              >
                Start Free Trial
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#how-it-works"
                className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-7 py-3.5 text-[14px] font-medium text-gray-300 transition-all hover:border-white/[0.15] hover:bg-white/[0.04]"
              >
                Watch Demo
              </a>
            </div>

            {/* Proof points */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start">
              {[
                { value: "2s", label: "Response time" },
                { value: "24/7", label: "Availability" },
                { value: "3x", label: "More reviews" },
              ].map((item) => (
                <div key={item.label} className="text-center lg:text-left">
                  <p className="text-xl font-bold text-white stat-glow">
                    {item.value}
                  </p>
                  <p className="text-[12px] text-gray-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Phone */}
          <div className="flex justify-center lg:justify-end">
            <AnimatedPhone />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
    </section>
  );
}
