"use client";

import { useEffect, useState, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

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
    label: "Milo's response time",
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
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center">
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
          </div>
        </ScrollReveal>

        {/* Stats row */}
        <div ref={sectionRef} className="mt-20">
          <ScrollReveal delay={150}>
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
                  inView={inView}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom CTA text */}
        <ScrollReveal delay={300}>
          <p className="mt-20 text-center text-lg text-body">
            Milo responds in 2 seconds. Your competitor doesn&rsquo;t.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
