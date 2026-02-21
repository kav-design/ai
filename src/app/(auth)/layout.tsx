"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Zap, Phone, Star, Calendar } from "lucide-react";

const chatMessages = [
  {
    role: "ai" as const,
    text: "Hey! Thanks for calling Bright Smile Dental. Sorry we missed you — how can we help?",
  },
  {
    role: "customer" as const,
    text: "Hi! I have a really bad toothache, need an emergency appointment",
  },
  {
    role: "ai" as const,
    text: "I'm sorry to hear that! We can fit you in today. What's your name?",
  },
  { role: "customer" as const, text: "Sarah Mitchell" },
  {
    role: "ai" as const,
    text: "Thanks Sarah! I've got 10:30am or 2pm today — which works?",
  },
  { role: "customer" as const, text: "2pm works!" },
  {
    role: "ai" as const,
    text: "You're all booked for 2pm today! We'll text you a reminder 😊",
  },
];

function AnimatedChat() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= chatMessages.length) {
      const reset = setTimeout(() => setVisibleCount(0), 4000);
      return () => clearTimeout(reset);
    }
    const timer = setTimeout(
      () => setVisibleCount((c) => c + 1),
      visibleCount === 0 ? 800 : 1200,
    );
    return () => clearTimeout(timer);
  }, [visibleCount]);

  return (
    <div className="flex flex-col gap-2.5 px-4 py-3 overflow-hidden">
      {chatMessages.slice(0, visibleCount).map((msg, i) => (
        <motion.div
          key={`${i}-${visibleCount > chatMessages.length ? "r" : ""}`}
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`flex ${msg.role === "customer" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[82%] px-3.5 py-2.5 text-[12px] leading-relaxed ${
              msg.role === "ai"
                ? "bg-[var(--color-teal)] text-white rounded-[14px_14px_14px_4px]"
                : "bg-white text-[var(--color-charcoal)] rounded-[14px_14px_4px_14px] shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
            }`}
          >
            {msg.text}
          </div>
        </motion.div>
      ))}
      {visibleCount < chatMessages.length && visibleCount > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-start"
        >
          <div className="bg-[var(--color-teal)] rounded-full px-3.5 py-2.5 flex items-center gap-1">
            <span className="w-[5px] h-[5px] rounded-full bg-white/60 animate-pulse" />
            <span
              className="w-[5px] h-[5px] rounded-full bg-white/60 animate-pulse"
              style={{ animationDelay: "0.15s" }}
            />
            <span
              className="w-[5px] h-[5px] rounded-full bg-white/60 animate-pulse"
              style={{ animationDelay: "0.3s" }}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Left — branded visual */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center bg-[var(--color-cream)]">
        {/* Flowing gradient washes */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: [
              "radial-gradient(ellipse 80% 60% at 15% 10%, rgba(133, 142, 98, 0.2), transparent 55%)",
              "radial-gradient(ellipse 70% 50% at 85% 15%, rgba(225, 166, 96, 0.18), transparent 50%)",
              "radial-gradient(ellipse 60% 45% at 75% 50%, rgba(184, 115, 51, 0.1), transparent 45%)",
              "radial-gradient(ellipse 80% 55% at 20% 65%, rgba(122, 158, 147, 0.16), transparent 50%)",
            ].join(", "),
          }}
        />

        {/* Animated organic orbs */}
        <motion.div
          className="organic-shape organic-sage absolute w-[350px] h-[350px] top-[-5%] right-[10%]"
          animate={{ x: [0, 20, -10, 0], y: [0, -15, 10, 0] }}
          transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="organic-shape organic-gold absolute w-[280px] h-[280px] bottom-[5%] left-[-5%]"
          animate={{ x: [0, -15, 20, 0], y: [0, 10, -20, 0] }}
          transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="organic-shape organic-teal absolute w-[200px] h-[200px] top-[40%] left-[15%]"
          animate={{ x: [0, 25, -15, 0], y: [0, -20, 15, 0] }}
          transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
        />

        {/* Noise overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
            backgroundSize: "200px 200px",
          }}
        />

        {/* Right edge divider */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-[var(--color-border)]" />

        {/* Main visual content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Phone mockup with live chat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            {/* Floating badges around the phone */}
            <motion.div
              className="absolute -left-28 top-8 flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white/80 backdrop-blur-sm px-3.5 py-2.5 shadow-lg shadow-black/[0.03]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.8 },
                x: { duration: 0.5, delay: 0.8 },
                y: {
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 1,
                },
              }}
            >
              <div className="w-7 h-7 rounded-lg bg-[var(--color-teal-light)] flex items-center justify-center">
                <Phone size={13} className="text-[var(--color-teal-dark)]" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[var(--color-charcoal)]">
                  Missed call caught
                </p>
                <p className="text-[10px] text-[var(--color-muted)]">
                  2 seconds ago
                </p>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-24 top-28 flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white/80 backdrop-blur-sm px-3.5 py-2.5 shadow-lg shadow-black/[0.03]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 1.2 },
                x: { duration: 0.5, delay: 1.2 },
                y: {
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 1.5,
                },
              }}
            >
              <div className="w-7 h-7 rounded-lg bg-[var(--color-terracotta-light)] flex items-center justify-center">
                <Calendar
                  size={13}
                  className="text-[var(--color-terracotta)]"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[var(--color-charcoal)]">
                  Appointment booked
                </p>
                <p className="text-[10px] text-[var(--color-muted)]">
                  Today, 2:00 PM
                </p>
              </div>
            </motion.div>

            <motion.div
              className="absolute -left-20 bottom-24 flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white/80 backdrop-blur-sm px-3.5 py-2.5 shadow-lg shadow-black/[0.03]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 1.6 },
                x: { duration: 0.5, delay: 1.6 },
                y: {
                  duration: 4.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 2,
                },
              }}
            >
              <div className="w-7 h-7 rounded-lg bg-[var(--color-gold-light)] flex items-center justify-center">
                <Star size={13} className="text-[var(--color-gold)]" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[var(--color-charcoal)]">
                  Review requested
                </p>
                <p className="text-[10px] text-[var(--color-muted)]">
                  Sent via SMS
                </p>
              </div>
            </motion.div>

            {/* Phone frame */}
            <div className="w-[280px] rounded-[32px] border border-[var(--color-border)] bg-white shadow-2xl shadow-black/[0.08] overflow-hidden">
              {/* Phone notch area */}
              <div className="flex items-center justify-center pt-3 pb-1">
                <div className="w-20 h-[5px] rounded-full bg-[var(--color-cream-dark)]" />
              </div>

              {/* Chat header */}
              <div className="flex items-center gap-2.5 px-4 py-3 border-b border-[var(--color-border)]">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-teal)] flex items-center justify-center">
                    <Zap size={12} fill="white" stroke="none" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-[var(--color-charcoal)]">
                    Milo
                  </p>
                  <p className="text-[10px] text-emerald-500">Online now</p>
                </div>
              </div>

              {/* Live animated chat */}
              <div className="h-[340px] bg-[var(--color-cream)] overflow-hidden">
                <AnimatedChat />
              </div>

              {/* Input bar */}
              <div className="flex items-center gap-2 px-3 py-2.5 border-t border-[var(--color-border)] bg-white">
                <div className="flex-1 h-8 rounded-full bg-[var(--color-cream)] border border-[var(--color-border)] px-3 flex items-center">
                  <span className="text-[11px] text-[var(--color-light)]">
                    Type a message...
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[var(--color-border)] flex items-center justify-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-muted)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                  </svg>
                </div>
              </div>

              {/* Phone home bar */}
              <div className="flex items-center justify-center py-2">
                <div className="w-28 h-[4px] rounded-full bg-[var(--color-charcoal)] opacity-20" />
              </div>
            </div>
          </motion.div>

          {/* Tagline below phone */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="font-display text-xl text-[var(--color-charcoal)]">
              Your AI receptionist, always on.
            </p>
            <p className="text-[13px] text-[var(--color-muted)] mt-1.5">
              Missed call to booked appointment in under 30 seconds.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right — auth form */}
      <motion.div
        className="flex w-full lg:w-1/2 items-center justify-center bg-[var(--color-cream)] px-6 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-full max-w-[420px]">{children}</div>
      </motion.div>
    </div>
  );
}
