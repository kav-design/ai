"use client";

import { motion } from "framer-motion";

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
              "radial-gradient(ellipse 70% 45% at 80% 85%, rgba(225, 166, 96, 0.12), transparent 50%)",
            ].join(", "),
          }}
        />

        {/* Animated organic orbs */}
        <motion.div
          className="organic-shape organic-sage absolute w-[350px] h-[350px] top-[-5%] right-[10%]"
          animate={{
            x: [0, 20, -10, 0],
            y: [0, -15, 10, 0],
            scale: [1, 1.05, 0.97, 1],
          }}
          transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="organic-shape organic-gold absolute w-[280px] h-[280px] bottom-[5%] left-[-5%]"
          animate={{
            x: [0, -15, 20, 0],
            y: [0, 10, -20, 0],
            scale: [1, 0.95, 1.06, 1],
          }}
          transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="organic-shape organic-teal absolute w-[200px] h-[200px] top-[40%] left-[15%]"
          animate={{
            x: [0, 25, -15, 0],
            y: [0, -20, 15, 0],
          }}
          transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="organic-shape organic-copper absolute w-[300px] h-[300px] bottom-[-10%] right-[20%]"
          animate={{
            x: [0, -20, 10, 0],
            y: [0, 15, -10, 0],
            scale: [1, 1.04, 0.96, 1],
          }}
          transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
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

        {/* Content — staggered entrance */}
        <div className="relative z-10 px-16 max-w-lg">
          <motion.img
            src="/logo.png"
            alt="Milo AI"
            className="h-10 mb-12"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />

          <motion.h1
            className="font-display text-[42px] text-[var(--color-charcoal)] leading-[1.15] mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Never miss a patient again.
          </motion.h1>

          <motion.p
            className="text-[var(--color-body)] text-[15px] leading-relaxed max-w-sm"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Milo handles missed calls, books appointments, follows up with
            leads, and collects Google reviews — 24/7.
          </motion.p>

          {/* Stats row */}
          <motion.div
            className="flex gap-10 mt-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {[
              { value: "2s", label: "Avg. response time" },
              { value: "24/7", label: "Always on" },
              { value: "40%", label: "Calls recovered" },
            ].map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.55 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <p className="font-display text-3xl text-[var(--color-charcoal)]">
                  {stat.value}
                </p>
                <p className="text-xs text-[var(--color-muted)] mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial card */}
          <motion.div
            className="mt-14 rounded-2xl border border-[var(--color-border)] bg-white/60 backdrop-blur-sm p-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="text-[var(--color-charcoal)] text-sm leading-relaxed">
              &ldquo;We recovered 34 patients in the first month that we
              would&apos;ve lost. Milo pays for itself many times over.&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-8 h-8 rounded-full bg-[var(--color-teal-light)] flex items-center justify-center text-xs font-semibold text-[var(--color-teal-dark)]">
                SC
              </div>
              <div>
                <p className="text-xs font-medium text-[var(--color-charcoal)]">
                  Dr. Sarah Chen
                </p>
                <p className="text-[11px] text-[var(--color-muted)]">
                  Smile Lane Dental
                </p>
              </div>
            </div>
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
