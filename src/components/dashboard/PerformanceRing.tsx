"use client";

import { motion } from "framer-motion";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  { name: "Review Rate", value: 73, fill: "#858E62" },
  { name: "Booking Rate", value: 68, fill: "#7a9e93" },
  { name: "Response Rate", value: 94, fill: "#B87333" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function PerformanceRing() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6, ease }}
      className="rounded-xl border border-border bg-white p-5"
    >
      <h3 className="mb-2 text-[14px] font-semibold text-charcoal">
        Performance
      </h3>
      <p className="mb-3 text-[11px] text-muted">This month</p>

      <div className="h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="30%"
            outerRadius="90%"
            data={data}
            startAngle={90}
            endAngle={-270}
            barSize={12}
          >
            <RadialBar
              background={{ fill: "#f5f1eb" }}
              dataKey="value"
              cornerRadius={6}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center gap-4 mt-1">
        {data.map((d) => (
          <div key={d.name} className="flex items-center gap-1.5">
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: d.fill }}
            />
            <div className="text-[10px]">
              <span className="font-semibold text-charcoal">{d.value}%</span>{" "}
              <span className="text-muted">{d.name.split(" ")[0]}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
