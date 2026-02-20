"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function useCounter(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, end, duration]);
  return count;
}

function AnimatedStat({
  value,
  prefix,
  suffix,
  label,
  color,
  divider,
  inView,
}: {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  color: string;
  divider: boolean;
  inView: boolean;
}) {
  const count = useCounter(value, 1500, inView);

  return (
    <div
      className={`flex flex-col items-center text-center px-4 ${
        divider ? "border-r border-border" : ""
      }`}
    >
      <p className={`text-4xl sm:text-5xl font-bold tracking-tight ${color}`}>
        {prefix ?? ""}
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}

const stats = [
  { value: 35, suffix: "%", label: "Calls missed", color: "text-charcoal" },
  {
    value: 87,
    prefix: "$",
    suffix: "K",
    label: "Revenue lost per year",
    color: "text-terracotta",
  },
  {
    value: 2,
    suffix: "s",
    label: "Milo\u2019s response time",
    color: "text-teal",
  },
  {
    value: 91,
    suffix: "%",
    label: "Patient response rate",
    color: "text-teal",
  },
];

export default function SpeedToLead() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Organic background shapes */}
      <div className="organic-shape organic-berry absolute -right-48 top-0 h-[500px] w-[500px]" />
      <div className="organic-shape organic-teal absolute -left-40 bottom-0 h-[400px] w-[400px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">
            The Problem
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-charcoal">
            Every missed call costs you{" "}
            <span className="text-terracotta">$2,500.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-body">
            Australian dental clinics miss 35% of incoming calls.
            That&rsquo;s $87,000 in lost revenue per year &mdash; per clinic.
          </p>
        </motion.div>

        {/* Stats row */}
        <div ref={sectionRef} className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <AnimatedStat
                  key={stat.label}
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  label={stat.label}
                  color={stat.color}
                  divider={i < stats.length - 1}
                  inView={isInView}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center text-lg text-body"
        >
          Milo responds in 2 seconds. Your competitor doesn&rsquo;t.
        </motion.p>
      </div>
    </section>
  );
}
