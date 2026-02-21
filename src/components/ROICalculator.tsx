"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";

// Conservative assumptions:
// - Only 30% of missed calls are genuine new patients who would have booked
//   (rest are existing patients, repeat callers, spam, tyre-kickers)
// - Average first-visit value: $350 (check-up + x-rays + clean)
// - Milo recovers 40% of those potential patients
//   (texts back → conversation → books → actually shows up)
const NEW_PATIENT_RATE = 0.3;
const FIRST_VISIT_VALUE = 350;
const WEEKS_PER_YEAR = 52;
const MILO_RECOVERY = 0.4;

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const prevRef = useRef(0);
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    const start = prevRef.current;
    const end = value;
    const duration = 500;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + (end - start) * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        prevRef.current = end;
      }
    };
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(step);
  }, [value]);

  useEffect(() => {
    animate();
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  return (
    <span>
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  );
}

function SliderTrack({ value, min, max }: { value: number; min: number; max: number }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="relative h-2 w-full rounded-full bg-cream-dark">
      <div
        className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-terracotta/60 to-terracotta transition-all duration-150"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export default function ROICalculator() {
  const [missedCalls, setMissedCalls] = useState(10);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const lostPatientsPerYear = Math.round(missedCalls * WEEKS_PER_YEAR * NEW_PATIENT_RATE);
  const revenueLost = lostPatientsPerYear * FIRST_VISIT_VALUE;
  const patientsRecovered = Math.round(lostPatientsPerYear * MILO_RECOVERY);
  const revenueRecovered = patientsRecovered * FIRST_VISIT_VALUE;
  const miloCost = 397 * 12;
  const netROI = revenueRecovered - miloCost;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="organic-shape organic-gold absolute -right-40 top-10 h-[450px] w-[450px]" />
      <div className="organic-shape organic-copper absolute -left-32 bottom-0 h-[400px] w-[400px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">
            ROI Calculator
          </p>
          <h2 className="mb-5 text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
            See what Milo could{" "}
            <span className="gradient-text-copper">save you</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="grid items-stretch gap-8 lg:grid-cols-5"
        >
          {/* Left — Slider control */}
          <div className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-8 shadow-sm">
              <p className="mb-1 text-sm font-medium text-charcoal">
                Missed calls per week
              </p>
              <p className="mb-8 text-xs text-muted">
                How many calls does your clinic miss?
              </p>

              {/* Big number */}
              <div className="mb-6 text-center">
                <span className="text-6xl font-bold tracking-tight text-charcoal">
                  {missedCalls}
                </span>
                <span className="ml-2 text-lg text-muted">calls</span>
              </div>

              {/* Custom slider */}
              <div className="relative mb-2">
                <SliderTrack value={missedCalls} min={1} max={50} />
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={missedCalls}
                  onChange={(e) => setMissedCalls(Number(e.target.value))}
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                />
                {/* Thumb indicator */}
                <div
                  className="pointer-events-none absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${((missedCalls - 1) / 49) * 100}%` }}
                >
                  <div className="h-5 w-5 rounded-full border-[3px] border-white bg-terracotta shadow-md" />
                </div>
              </div>
              <div className="flex justify-between text-[11px] text-muted">
                <span>1</span>
                <span>25</span>
                <span>50</span>
              </div>

              {/* Lost revenue callout */}
              <div className="mt-auto rounded-xl bg-cream-dark p-4 pt-8">
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  You're losing
                </p>
                <p className="mt-1 text-2xl font-bold tracking-tight text-charcoal">
                  <AnimatedNumber value={revenueLost} prefix="$" />
                  <span className="text-sm font-normal text-muted">/year</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right — Results */}
          <div className="lg:col-span-3">
            {/* Hero metric */}
            <div className="mb-4 rounded-2xl border border-teal/20 bg-charcoal p-8 sm:p-10">
              <div className="mb-1 flex items-center gap-2">
                <TrendingUp size={16} className="text-teal" />
                <p className="text-xs font-semibold uppercase tracking-wider text-teal">
                  With Milo
                </p>
              </div>
              <p className="mt-3 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                <AnimatedNumber value={revenueRecovered} prefix="$" />
              </p>
              <p className="mt-2 text-sm text-white/50">
                Revenue recovered per year
              </p>

              {/* ROI bar */}
              <div className="mt-6 flex items-center gap-4">
                <div className="flex-1">
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-teal to-teal/60"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${Math.min((revenueRecovered / revenueLost) * 100, 100)}%` } : {}}
                      transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
                <span className="text-sm font-semibold text-teal">
                  {Math.round((revenueRecovered / (revenueLost || 1)) * 100)}% recovered
                </span>
              </div>
            </div>

            {/* Supporting stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-border bg-white p-5 text-center shadow-sm">
                <p className="text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">
                  <AnimatedNumber value={patientsRecovered} />
                </p>
                <p className="mt-1 text-xs text-muted">
                  Patients recovered
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-white p-5 text-center shadow-sm">
                <p className="text-2xl font-bold tracking-tight text-teal sm:text-3xl">
                  <AnimatedNumber value={Math.round(revenueRecovered / miloCost)} suffix="x" />
                </p>
                <p className="mt-1 text-xs text-muted">
                  Return on investment
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-white p-5 text-center shadow-sm">
                <p className="text-2xl font-bold tracking-tight text-terracotta sm:text-3xl">
                  $<AnimatedNumber value={Math.round(netROI / 12)} />
                </p>
                <p className="mt-1 text-xs text-muted">
                  Net gain per month
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 flex items-center justify-between rounded-2xl border border-border bg-white p-5 shadow-sm">
              <div>
                <p className="text-sm font-semibold text-charcoal">
                  Milo Professional costs $397/mo
                </p>
                <p className="text-xs text-muted">
                  Milo pays for itself with just 1 new patient per month.
                </p>
              </div>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
