"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, Globe } from "lucide-react";

const conversations = [
  {
    name: "Sarah Mitchell",
    service: "Emergency — toothache",
    time: "2m ago",
    status: "New Lead",
    statusBg: "bg-terracotta-light",
    statusText: "text-terracotta",
    source: "Voice",
    sourceIcon: Phone,
  },
  {
    name: "James Cooper",
    service: "Check-up & clean",
    time: "14m ago",
    status: "Booked",
    statusBg: "bg-teal-light",
    statusText: "text-teal",
    source: "SMS",
    sourceIcon: MessageSquare,
  },
  {
    name: "Emma Zhao",
    service: "Teeth whitening enquiry",
    time: "1h ago",
    status: "Booked",
    statusBg: "bg-teal-light",
    statusText: "text-teal",
    source: "Web",
    sourceIcon: Globe,
  },
  {
    name: "Michael Park",
    service: "Orthodontics consult",
    time: "3h ago",
    status: "Following Up",
    statusBg: "bg-gold-light",
    statusText: "text-gold",
    source: "SMS",
    sourceIcon: MessageSquare,
  },
  {
    name: "Lisa Nguyen",
    service: "Dental implant pricing",
    time: "5h ago",
    status: "New Lead",
    statusBg: "bg-terracotta-light",
    statusText: "text-terracotta",
    source: "Voice",
    sourceIcon: Phone,
  },
  {
    name: "David Chen",
    service: "Wisdom tooth removal",
    time: "8h ago",
    status: "Booked",
    statusBg: "bg-teal-light",
    statusText: "text-teal",
    source: "Web",
    sourceIcon: Globe,
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function RecentConversations() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.65, ease }}
      className="rounded-xl border border-border bg-white p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-[14px] font-semibold text-charcoal">
          Recent Conversations
        </h3>
        <button className="text-[12px] font-medium text-terracotta hover:text-terracotta-dark transition-colors">
          View all
        </button>
      </div>

      <div className="divide-y divide-border">
        {conversations.map((row, i) => (
          <motion.div
            key={row.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.7 + i * 0.05, ease }}
            className="flex items-center justify-between py-3 transition-colors hover:bg-cream/40 -mx-2 px-2 rounded-lg cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-dark text-[11px] font-semibold text-body">
                {row.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="text-[13px] font-medium text-charcoal">
                  {row.name}
                </p>
                <p className="text-[11px] text-muted">{row.service}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="hidden sm:flex items-center gap-1 text-muted">
                <row.sourceIcon size={11} />
                <span className="text-[10px]">{row.source}</span>
              </div>
              <span
                className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${row.statusBg} ${row.statusText}`}
              >
                {row.status}
              </span>
              <span className="text-[10px] text-light w-12 text-right">
                {row.time}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
