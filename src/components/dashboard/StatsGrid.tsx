"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Users,
  DollarSign,
  Star,
  TrendingUp,
} from "lucide-react";

function AnimatedValue({
  value,
  prefix = "",
  started,
}: {
  value: number;
  prefix?: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / 1200, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, value]);

  return (
    <>
      {prefix}
      {count.toLocaleString()}
    </>
  );
}

const stats = [
  {
    icon: MessageSquare,
    label: "Conversations",
    value: 47,
    change: "+18%",
    bg: "bg-terracotta-light",
    color: "text-terracotta",
  },
  {
    icon: Users,
    label: "Leads Captured",
    value: 23,
    change: "+24%",
    bg: "bg-teal-light",
    color: "text-teal",
  },
  {
    icon: DollarSign,
    label: "Est. Revenue",
    value: 8420,
    prefix: "$",
    change: "+32%",
    bg: "bg-gold-light",
    color: "text-gold",
  },
  {
    icon: Star,
    label: "Reviews",
    value: 12,
    change: "+50%",
    bg: "bg-blue-muted-light",
    color: "text-blue-muted",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function StatsGrid() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1 + i * 0.08,
            ease,
          }}
          className="group rounded-xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="mb-4 flex items-center justify-between">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.bg}`}
            >
              <stat.icon size={18} className={stat.color} />
            </div>
            <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5">
              <TrendingUp size={10} className="text-emerald-600" />
              <span className="text-[10px] font-semibold text-emerald-600">
                {stat.change}
              </span>
            </div>
          </div>
          <p className="text-[28px] font-bold text-charcoal leading-none">
            <AnimatedValue
              value={stat.value}
              prefix={stat.prefix}
              started={started}
            />
          </p>
          <p className="mt-1 text-[12px] text-muted">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
