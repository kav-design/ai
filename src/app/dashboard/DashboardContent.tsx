"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import Sidebar from "@/components/dashboard/Sidebar";
import StatsGrid from "@/components/dashboard/StatsGrid";
import ConversationChart from "@/components/dashboard/ConversationChart";
import LeadsBarChart from "@/components/dashboard/LeadsBarChart";
import RecentConversations from "@/components/dashboard/RecentConversations";
import ReviewsCard from "@/components/dashboard/ReviewsCard";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import PerformanceRing from "@/components/dashboard/PerformanceRing";

const ease = [0.16, 1, 0.3, 1] as const;

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

export default function DashboardContent({ email }: { email: string }) {
  return (
    <div className="min-h-screen bg-cream">
      <Sidebar email={email} />

      {/* Main content — offset by sidebar width on desktop */}
      <main className="lg:ml-[240px] min-h-screen">
        <div className="mx-auto max-w-[1200px] px-5 py-8 lg:px-8 lg:py-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-8 flex items-center justify-between"
          >
            <div>
              <h1 className="text-[22px] font-semibold text-charcoal">
                {getGreeting()}, Dr. Chen
              </h1>
              <p className="mt-1 text-[13px] text-muted">
                Here&apos;s what Milo did this week
              </p>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5">
              <TrendingUp size={13} className="text-emerald-600" />
              <span className="text-[12px] font-semibold text-emerald-600">
                +32% this week
              </span>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="mb-6">
            <StatsGrid />
          </div>

          {/* Charts row */}
          <div className="mb-6 grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ConversationChart />
            </div>
            <div className="lg:col-span-2">
              <LeadsBarChart />
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid gap-6 lg:grid-cols-5">
            {/* Conversations — wider */}
            <div className="lg:col-span-3">
              <RecentConversations />
            </div>

            {/* Right column — reviews, performance, activity */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              <ReviewsCard />
              <PerformanceRing />
              <ActivityFeed />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
