"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Zap } from "lucide-react";

/* ── Snake border (draws on mount) ── */
function SnakeBorder({ label, color }: { label: string; color: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const rectRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const rect = rectRef.current;
    if (!svg || !rect) return;
    const { width, height } = svg.getBoundingClientRect();
    const i = 3;
    rect.setAttribute("x", String(i));
    rect.setAttribute("y", String(i));
    rect.setAttribute("width", String(Math.max(0, width - i * 2)));
    rect.setAttribute("height", String(Math.max(0, height - i * 2)));
    const len = rect.getTotalLength();
    rect.style.strokeDasharray = `${len}`;
    rect.style.strokeDashoffset = `${len}`;
    requestAnimationFrame(() => {
      if (rect) {
        rect.style.transition =
          "stroke-dashoffset 1.4s cubic-bezier(0.16, 1, 0.3, 1)";
        rect.style.strokeDashoffset = "0";
      }
    });
  }, []);

  return (
    <>
      <svg
        ref={svgRef}
        className="pointer-events-none absolute"
        style={{
          top: "-3px",
          left: "-3px",
          width: "calc(100% + 6px)",
          height: "calc(100% + 6px)",
        }}
        fill="none"
      >
        <rect
          ref={rectRef}
          rx="14"
          ry="14"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      <span
        className="absolute -bottom-[18px] left-1 text-[10px] font-semibold tracking-wide animate-in"
        style={{ color }}
      >
        {label}
      </span>
    </>
  );
}

/* ── Chat messages ── */
const messages = [
  {
    role: "ai" as const,
    text: "Hey! Thanks for calling Bright Smile Dental. Sorry we missed you \u2014 how can we help?",
  },
  {
    role: "customer" as const,
    text: "Hi! I have a really bad toothache, need an emergency appointment",
  },
  {
    role: "ai" as const,
    text: "I\u2019m sorry to hear that! We can fit you in today. What\u2019s your name?",
  },
  {
    role: "customer" as const,
    text: "Sarah Mitchell",
  },
  {
    role: "ai" as const,
    text: "Thanks Sarah! I\u2019ve got 10:30am or 2pm today \u2014 which works?",
  },
  {
    role: "customer" as const,
    text: "2pm works!",
  },
  {
    role: "ai" as const,
    text: "You\u2019re all booked for 2pm today, Sarah! We\u2019ll text you a reminder. See you soon!",
  },
];

/* ── Floating chat bubbles (same as Hero) ── */
function FloatingBubbles() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [showBooked, setShowBooked] = useState(false);

  useEffect(() => {
    if (visibleCount >= messages.length) {
      const t = setTimeout(() => setShowBooked(true), 500);
      return () => clearTimeout(t);
    }

    if (visibleCount === 4 && !showLeadCapture) {
      setShowLeadCapture(true);
    }

    const delay = visibleCount === 0 ? 600 : 900;
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleCount, showLeadCapture]);

  return (
    <div className="flex flex-col gap-3 py-4">
      {messages.map((msg, i) => {
        const isLeadMsg = i === 3;
        const isBookedMsg = i === 6;
        const hasSnake =
          (isLeadMsg && showLeadCapture) || (isBookedMsg && showBooked);

        return (
          <div
            key={i}
            className={`flex ${
              msg.role === "customer" ? "justify-end" : "justify-start"
            } transition-all duration-500 ${
              i < visibleCount
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-3 opacity-0"
            } ${hasSnake ? "mb-5" : ""}`}
          >
            <div className="flex max-w-[82%] items-end gap-1.5">
              {msg.role === "ai" && (
                <Zap
                  size={12}
                  className="mb-2.5 flex-shrink-0 text-teal"
                  fill="currentColor"
                />
              )}
              <div className="relative">
                <div
                  className={`rounded-2xl px-4 py-2.5 ${
                    msg.role === "ai"
                      ? "rounded-tl-sm bg-teal text-white shadow-lg shadow-teal/10"
                      : "rounded-tr-sm bg-white text-charcoal shadow-md"
                  }`}
                >
                  <p className="text-[13px] leading-relaxed">{msg.text}</p>
                </div>
                {hasSnake && (
                  <SnakeBorder
                    label={isLeadMsg ? "Lead captured" : "Booked \u2713"}
                    color={isLeadMsg ? "#7a9e93" : "#22c55e"}
                  />
                )}
              </div>
            </div>
          </div>
        );
      })}
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
      {/* ══════════ LEFT — atmospheric visual ══════════ */}
      <div className="hidden lg:flex lg:w-[52%] relative overflow-hidden items-center justify-center bg-[var(--color-cream)]">
        {/* Gradient washes — same as body */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: [
              "radial-gradient(ellipse 90% 60% at 10% 5%, rgba(133,142,98,0.22), transparent 55%)",
              "radial-gradient(ellipse 80% 50% at 90% 10%, rgba(225,166,96,0.18), transparent 50%)",
              "radial-gradient(ellipse 70% 45% at 80% 55%, rgba(184,115,51,0.10), transparent 45%)",
              "radial-gradient(ellipse 90% 55% at 15% 70%, rgba(122,158,147,0.16), transparent 50%)",
            ].join(", "),
          }}
        />

        {/* Large organic floating orbs */}
        <motion.div
          className="organic-shape organic-sage absolute w-[500px] h-[500px] -top-[15%] -left-[10%]"
          animate={{ x: [0, 30, -15, 0], y: [0, -20, 15, 0] }}
          transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="organic-shape organic-gold absolute w-[450px] h-[450px] -bottom-[10%] right-[5%]"
          animate={{ x: [0, -20, 25, 0], y: [0, 15, -25, 0] }}
          transition={{ duration: 24, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="organic-shape organic-teal absolute w-[350px] h-[350px] top-[30%] -right-[5%]"
          animate={{ x: [0, -25, 10, 0], y: [0, 20, -10, 0] }}
          transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="organic-shape organic-copper absolute w-[300px] h-[300px] top-[10%] left-[40%]"
          animate={{ x: [0, 15, -20, 0], y: [0, -15, 20, 0] }}
          transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
        />

        {/* Noise texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
            backgroundSize: "200px 200px",
          }}
        />

        {/* Right divider */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-[var(--color-border)]" />

        {/* ── Content: headline + live chat demo ── */}
        <div className="relative z-10 w-full max-w-[440px] px-10">
          {/* Minimal headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <h1 className="font-display text-[36px] leading-[1.12] text-charcoal">
              See Milo in{" "}
              <span className="gradient-text-copper">action</span>
            </h1>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              A missed call turns into a booked patient in under 60 seconds.
            </p>
          </motion.div>

          {/* Live chat conversation — the hero element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <FloatingBubbles />
          </motion.div>

          {/* Subtle proof line */}
          <motion.p
            className="mt-8 text-xs text-muted text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            2-second response &middot; 24/7 availability &middot; No code setup
          </motion.p>
        </div>
      </div>

      {/* ══════════ RIGHT — auth form ══════════ */}
      <motion.div
        className="flex w-full lg:w-[48%] items-center justify-center bg-[var(--color-cream)] px-6 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="w-full max-w-[420px]">{children}</div>
      </motion.div>
    </div>
  );
}
