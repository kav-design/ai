"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", sms: 3, web: 1 },
  { day: "Tue", sms: 5, web: 2 },
  { day: "Wed", sms: 4, web: 1 },
  { day: "Thu", sms: 6, web: 3 },
  { day: "Fri", sms: 8, web: 2 },
  { day: "Sat", sms: 4, web: 3 },
  { day: "Sun", sms: 5, web: 2 },
];

const ease = [0.16, 1, 0.3, 1] as const;

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; dataKey: string }>; label?: string }) {
  if (!active || !payload?.length) return null;
  const total = payload.reduce((sum, p) => sum + p.value, 0);
  return (
    <div className="rounded-lg border border-border bg-white px-3 py-2 shadow-lg">
      <p className="text-[11px] font-medium text-charcoal">{label}</p>
      <p className="text-[13px] font-bold text-teal">{total} leads</p>
      <div className="mt-1 flex gap-3 text-[10px] text-muted">
        <span>SMS: {payload.find((p) => p.dataKey === "sms")?.value}</span>
        <span>Web: {payload.find((p) => p.dataKey === "web")?.value}</span>
      </div>
    </div>
  );
}

export default function LeadsBarChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.55, ease }}
      className="rounded-xl border border-border bg-white p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-[14px] font-semibold text-charcoal">
            Leads by Source
          </h3>
          <p className="text-[11px] text-muted">Last 7 days</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-teal" />
            <span className="text-[10px] text-muted">SMS</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-sage" />
            <span className="text-[10px] text-muted">Web</span>
          </div>
        </div>
      </div>
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
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
            <Bar
              dataKey="sms"
              stackId="a"
              fill="#7a9e93"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="web"
              stackId="a"
              fill="#858E62"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
