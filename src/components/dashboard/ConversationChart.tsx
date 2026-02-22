"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", conversations: 12 },
  { day: "Tue", conversations: 18 },
  { day: "Wed", conversations: 15 },
  { day: "Thu", conversations: 22 },
  { day: "Fri", conversations: 28 },
  { day: "Sat", conversations: 19 },
  { day: "Sun", conversations: 24 },
];

const ease = [0.16, 1, 0.3, 1] as const;

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-white px-3 py-2 shadow-lg">
      <p className="text-[11px] font-medium text-charcoal">{label}</p>
      <p className="text-[13px] font-bold text-terracotta">
        {payload[0].value} conversations
      </p>
    </div>
  );
}

export default function ConversationChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.45, ease }}
      className="rounded-xl border border-border bg-white p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-[14px] font-semibold text-charcoal">
            Conversations
          </h3>
          <p className="text-[11px] text-muted">Last 7 days</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-terracotta" />
            <span className="text-[10px] text-muted">Total</span>
          </div>
        </div>
      </div>
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="convGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#B87333" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#B87333" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e8e2d9"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 11, fill: "#999" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#999" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="conversations"
              stroke="#B87333"
              strokeWidth={2.5}
              fill="url(#convGradient)"
              dot={{ r: 3, fill: "#B87333", stroke: "#fff", strokeWidth: 2 }}
              activeDot={{ r: 5, fill: "#B87333", stroke: "#fff", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
