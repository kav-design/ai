"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AVG_PATIENT_VALUE = 250;
const WEEKS_PER_YEAR = 52;
const MILO_CONVERSION = 0.7;

export default function ROICalculator() {
  const [missedCalls, setMissedCalls] = useState(10);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const revenueLost = missedCalls * WEEKS_PER_YEAR * AVG_PATIENT_VALUE;
  const patientsRecovered = Math.round(
    missedCalls * WEEKS_PER_YEAR * MILO_CONVERSION
  );
  const revenueRecovered = patientsRecovered * AVG_PATIENT_VALUE;

  return (
    <section
      ref={sectionRef}
      className="gradient-warm relative overflow-hidden py-24 sm:py-32"
    >
      <div className="organic-shape organic-gold absolute -right-40 top-10 h-[450px] w-[450px]" />
      <div className="organic-shape organic-copper absolute -left-32 bottom-0 h-[400px] w-[400px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
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
          <p className="mx-auto max-w-lg text-lg leading-relaxed text-body">
            Drag the slider to see the revenue impact for your clinic.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="rounded-2xl border border-border bg-white p-8 shadow-lg sm:p-12">
            {/* Slider */}
            <div className="mb-12">
              <div className="mb-6 flex items-center justify-between">
                <label className="text-sm font-medium text-charcoal">
                  Missed calls per week
                </label>
                <span className="text-3xl font-bold tracking-tight text-terracotta">
                  {missedCalls}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={50}
                value={missedCalls}
                onChange={(e) => setMissedCalls(Number(e.target.value))}
              />
              <div className="mt-2 flex justify-between text-xs text-muted">
                <span>1 call</span>
                <span>50 calls</span>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-red-50 p-6 text-center transition-shadow hover:shadow-md">
                <p className="text-3xl font-bold tracking-tight text-red-600">
                  ${revenueLost.toLocaleString()}
                </p>
                <p className="mt-1 text-sm text-red-600/70">
                  Revenue lost per year
                </p>
              </div>
              <div className="rounded-xl bg-teal-light p-6 text-center transition-shadow hover:shadow-md">
                <p className="text-3xl font-bold tracking-tight text-teal">
                  {patientsRecovered}
                </p>
                <p className="mt-1 text-sm text-teal/70">
                  Patients Milo recovers
                </p>
              </div>
              <div className="rounded-xl bg-terracotta-light p-6 text-center transition-shadow hover:shadow-md">
                <p className="text-3xl font-bold tracking-tight text-terracotta">
                  ${revenueRecovered.toLocaleString()}
                </p>
                <p className="mt-1 text-sm text-terracotta/70">
                  Revenue recovered
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
