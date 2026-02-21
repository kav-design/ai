"use client";

import { useRef, useEffect, useState } from "react";
import {
  MessageSquare,
  Users,
  DollarSign,
  Star,
  TrendingUp,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

function AnimatedValue({
  value,
  prefix = "",
  inView,
}: {
  value: number;
  prefix?: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / 1200, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

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

const conversations = [
  {
    name: "Sarah Mitchell",
    service: "Emergency — toothache",
    time: "2m ago",
    status: "New Lead",
    statusBg: "bg-terracotta-light",
    statusText: "text-terracotta",
    source: "SMS",
  },
  {
    name: "James Cooper",
    service: "Check-up & clean",
    time: "14m ago",
    status: "Booked",
    statusBg: "bg-teal-light",
    statusText: "text-teal",
    source: "SMS",
  },
  {
    name: "Emma Zhao",
    service: "Teeth whitening",
    time: "1h ago",
    status: "Booked",
    statusBg: "bg-teal-light",
    statusText: "text-teal",
    source: "Web",
  },
  {
    name: "Michael Park",
    service: "Orthodontics consult",
    time: "3h ago",
    status: "Following Up",
    statusBg: "bg-gold-light",
    statusText: "text-gold",
    source: "SMS",
  },
];

export default function DashboardPreview() {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.3 });

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="organic-shape organic-blue absolute -left-40 top-20 h-[450px] w-[450px]" />
      <div className="organic-shape organic-sage absolute -right-32 bottom-10 h-[400px] w-[400px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">
            Your command centre
          </p>
          <h2 className="mb-5 text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
            Everything Milo does, in one dashboard
          </h2>
          <p className="mx-auto max-w-lg text-lg leading-relaxed text-body">
            Real-time dashboard with conversations, leads, revenue, and reviews.
            Jump in and take over from AI at any time.
          </p>
        </motion.div>

        <div ref={gridRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="mx-auto max-w-5xl">
              <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-xl transition-shadow hover:shadow-2xl">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 border-b border-border bg-cream-dark px-5 py-3.5">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-border" />
                    <div className="h-3 w-3 rounded-full bg-border" />
                    <div className="h-3 w-3 rounded-full bg-border" />
                  </div>
                  <div className="ml-3 flex-1 rounded-lg border border-border bg-white px-4 py-1.5">
                    <p className="text-[11px] text-muted">
                      app.getmilo.com.au/dashboard
                    </p>
                  </div>
                </div>

                {/* Dashboard */}
                <div className="flex">
                  {/* Sidebar */}
                  <div className="hidden w-48 flex-shrink-0 border-r border-border bg-white p-4 md:block">
                    <div className="mb-8">
                      <img src="/logo.png" alt="Milo AI" className="h-8" />
                    </div>
                    <nav className="flex flex-col gap-0.5">
                      {[
                        "Dashboard",
                        "Conversations",
                        "Leads",
                        "Reviews",
                        "Analytics",
                        "Settings",
                      ].map((item, i) => (
                        <div
                          key={item}
                          className={`rounded-lg px-3 py-2 text-[12px] font-medium transition-colors ${
                            i === 0
                              ? "bg-cream text-charcoal"
                              : "text-muted hover:text-body"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </nav>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 bg-cream p-5 md:p-7">
                    {/* Header */}
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <h3 className="text-[16px] font-semibold text-charcoal">
                          Good morning, Dr. Chen
                        </h3>
                        <p className="text-[12px] text-muted">
                          Here&apos;s what Milo did this week
                        </p>
                      </div>
                      <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1">
                        <TrendingUp size={12} className="text-emerald-600" />
                        <span className="text-[11px] font-semibold text-emerald-600">
                          +32%
                        </span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                      {stats.map((stat, i) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 16 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{
                            duration: 0.5,
                            delay: 0.3 + i * 0.1,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="rounded-xl border border-border bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                        >
                          <div className="mb-3 flex items-center justify-between">
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-lg ${stat.bg}`}
                            >
                              <stat.icon size={14} className={stat.color} />
                            </div>
                            <span className="text-[10px] font-semibold text-emerald-600">
                              {stat.change}
                            </span>
                          </div>
                          <p className="text-[20px] font-bold text-charcoal">
                            <AnimatedValue
                              value={stat.value}
                              prefix={stat.prefix}
                              inView={isInView}
                            />
                          </p>
                          <p className="text-[11px] text-muted">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Conversations list */}
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.7,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="rounded-xl border border-border bg-white p-4"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <h4 className="text-[13px] font-semibold text-charcoal">
                          Recent Conversations
                        </h4>
                        <span className="text-[11px] font-medium text-terracotta">
                          View all
                        </span>
                      </div>
                      {conversations.map((row) => (
                        <div
                          key={row.name}
                          className="flex items-center justify-between border-b border-border py-3 transition-colors hover:bg-cream/50 last:border-0 last:pb-0"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cream-dark text-[10px] font-semibold text-body">
                              {row.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div>
                              <p className="text-[12px] font-medium text-charcoal">
                                {row.name}
                              </p>
                              <p className="text-[11px] text-muted">
                                {row.service}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="hidden text-[10px] text-muted sm:inline">
                              {row.source}
                            </span>
                            <span
                              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${row.statusBg} ${row.statusText}`}
                            >
                              {row.status}
                            </span>
                            <span className="text-[10px] text-muted">
                              {row.time}
                            </span>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
