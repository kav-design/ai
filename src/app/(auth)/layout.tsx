"use client";

import { motion } from "framer-motion";
import AuthCarousel from "@/components/auth/AuthCarousel";

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

        {/* ── Content: auto-rotating carousel ── */}
        <AuthCarousel />
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
