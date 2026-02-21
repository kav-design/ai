"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  MessageSquare,
  Users,
  Star,
  TrendingUp,
  Zap,
  ArrowRight,
} from "lucide-react";

/* ── Animated counter ── */
function Counter({ value, prefix = "" }: { value: number; prefix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1400, 1);
      setCount(Math.floor(p * value));
      if (p < 1) requestAnimationFrame(step);
    };
    const t = setTimeout(() => requestAnimationFrame(step), 600);
    return () => clearTimeout(t);
  }, [value]);
  return (
    <>
      {prefix}
      {count.toLocaleString()}
    </>
  );
}

/* ── Snake border (draws on mount) ── */
function SnakeBorder({ color }: { color: string }) {
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
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      <rect
        ref={rectRef}
        rx="16"
        ry="16"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
}

/* ── Mini conversation rows ── */
const conversations = [
  {
    name: "Sarah Mitchell",
    msg: "Emergency — toothache",
    time: "2m ago",
    status: "New Lead",
    sBg: "bg-terracotta-light",
    sText: "text-terracotta",
  },
  {
    name: "James Cooper",
    msg: "Check-up & clean",
    time: "14m ago",
    status: "Booked",
    sBg: "bg-teal-light",
    sText: "text-teal",
  },
  {
    name: "Emma Zhao",
    msg: "Teeth whitening",
    time: "1h ago",
    status: "Booked",
    sBg: "bg-teal-light",
    sText: "text-teal",
  },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* ══════════ LEFT — premium visual ══════════ */}
      <div className="hidden lg:flex lg:w-[52%] relative overflow-hidden items-center justify-center bg-[var(--color-cream)]">
        {/* Gradient washes */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: [
              "radial-gradient(ellipse 80% 60% at 15% 10%, rgba(133,142,98,0.18), transparent 55%)",
              "radial-gradient(ellipse 70% 50% at 85% 15%, rgba(225,166,96,0.16), transparent 50%)",
              "radial-gradient(ellipse 60% 45% at 75% 55%, rgba(184,115,51,0.08), transparent 45%)",
              "radial-gradient(ellipse 80% 55% at 20% 70%, rgba(122,158,147,0.14), transparent 50%)",
            ].join(", "),
          }}
        />

        {/* Organic orbs */}
        <motion.div
          className="organic-shape organic-sage absolute w-[400px] h-[400px] -top-[10%] right-[5%]"
          animate={{ x: [0, 20, -10, 0], y: [0, -15, 10, 0] }}
          transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="organic-shape organic-gold absolute w-[300px] h-[300px] bottom-[0%] -left-[8%]"
          animate={{ x: [0, -15, 20, 0], y: [0, 10, -20, 0] }}
          transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="organic-shape organic-teal absolute w-[250px] h-[250px] top-[45%] left-[10%]"
          animate={{ x: [0, 25, -15, 0], y: [0, -20, 15, 0] }}
          transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
        />

        {/* Noise */}
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

        {/* ── Content ── */}
        <div className="relative z-10 w-full max-w-[480px] px-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">
              Your command centre
            </p>
            <h1 className="font-display text-[34px] leading-[1.15] text-charcoal mb-3">
              See what Milo does for your{" "}
              <span className="gradient-text-copper">clinic</span>
            </h1>
            <p className="text-sm text-body leading-relaxed max-w-sm mb-8">
              Real-time dashboard with conversations, leads, and revenue.
            </p>
          </motion.div>

          {/* ── Dashboard mockup card ── */}
          <motion.div
            className="relative rounded-2xl border border-border bg-white shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <SnakeBorder color="var(--color-terracotta)" />

            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-border bg-cream-dark px-4 py-2.5">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-border" />
                <div className="h-2.5 w-2.5 rounded-full bg-border" />
                <div className="h-2.5 w-2.5 rounded-full bg-border" />
              </div>
              <div className="ml-2 flex-1 rounded-md border border-border bg-white px-3 py-1">
                <p className="text-[10px] text-muted">
                  app.getmilo.com.au/dashboard
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-px bg-border">
              {[
                {
                  icon: MessageSquare,
                  label: "Conversations",
                  val: 47,
                  change: "+18%",
                  bg: "bg-terracotta-light",
                  color: "text-terracotta",
                },
                {
                  icon: Users,
                  label: "Leads Captured",
                  val: 23,
                  change: "+24%",
                  bg: "bg-teal-light",
                  color: "text-teal",
                },
                {
                  icon: Star,
                  label: "Reviews",
                  val: 12,
                  change: "+50%",
                  bg: "bg-gold-light",
                  color: "text-gold",
                },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  className="bg-white p-3.5"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`w-7 h-7 rounded-lg ${s.bg} flex items-center justify-center`}
                    >
                      <s.icon size={13} className={s.color} />
                    </div>
                    <span className="flex items-center gap-0.5 text-[10px] font-medium text-emerald-600">
                      <TrendingUp size={10} />
                      {s.change}
                    </span>
                  </div>
                  <p className="text-lg font-bold text-charcoal leading-none">
                    <Counter value={s.val} />
                  </p>
                  <p className="text-[10px] text-muted mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Conversation list */}
            <motion.div
              className="border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="px-3.5 py-2 border-b border-border flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
                  Recent conversations
                </p>
                <Zap size={10} className="text-terracotta" />
              </div>
              {conversations.map((c, i) => (
                <motion.div
                  key={c.name}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 border-b border-border last:border-0 hover:bg-cream transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 1.0 + i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="w-7 h-7 rounded-full bg-cream-dark flex items-center justify-center text-[10px] font-semibold text-charcoal flex-shrink-0">
                    {c.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-medium text-charcoal truncate">
                      {c.name}
                    </p>
                    <p className="text-[10px] text-muted truncate">{c.msg}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-[9px] font-medium ${c.sBg} ${c.sText}`}
                    >
                      {c.status}
                    </span>
                    <p className="text-[9px] text-light mt-0.5">{c.time}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Proof points below */}
          <motion.div
            className="flex items-center justify-center gap-6 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            {[
              "2-second response",
              "No code setup",
              "Cancel anytime",
            ].map((t) => (
              <span
                key={t}
                className="flex items-center gap-1.5 text-[11px] text-muted"
              >
                <ArrowRight size={10} className="text-terracotta" />
                {t}
              </span>
            ))}
          </motion.div>
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
