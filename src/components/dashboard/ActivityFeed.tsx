"use client";

import { motion } from "framer-motion";

const activities = [
  {
    text: "Milo booked Sarah Mitchell for 2:00 PM today",
    time: "2m ago",
    color: "bg-teal",
  },
  {
    text: "Review request sent to James Cooper",
    time: "14m ago",
    color: "bg-gold",
  },
  {
    text: "New lead captured: Emma Zhao — teeth whitening",
    time: "1h ago",
    color: "bg-terracotta",
  },
  {
    text: "Follow-up #2 sent to Michael Park",
    time: "3h ago",
    color: "bg-sage",
  },
  {
    text: "5-star review received from Lisa Nguyen",
    time: "5h ago",
    color: "bg-gold",
  },
  {
    text: "Missed call caught — David Chen rebooked",
    time: "8h ago",
    color: "bg-blue-muted",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function ActivityFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8, ease }}
      className="rounded-xl border border-border bg-white p-5"
    >
      <h3 className="mb-4 text-[14px] font-semibold text-charcoal">
        Activity
      </h3>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border" />

        <div className="space-y-4">
          {activities.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.85 + i * 0.06, ease }}
              className="flex items-start gap-3 pl-0"
            >
              <div
                className={`mt-1.5 h-[10px] w-[10px] flex-shrink-0 rounded-full ${a.color} ring-2 ring-white`}
              />
              <div className="flex-1 min-w-0">
                <p className="text-[12px] text-body leading-relaxed">
                  {a.text}
                </p>
                <p className="text-[10px] text-light">{a.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
