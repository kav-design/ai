import { MessageSquare, Users, DollarSign, Star, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function DashboardPreview() {
  return (
    <section className="relative py-32">
      <div className="section-line" />
      <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] orb orb-blue opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 pt-8 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-4 text-[11px] font-semibold tracking-[0.15em] text-milo-400 uppercase">
              Your command centre
            </p>
            <h2 className="mb-5 text-[2.5rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white sm:text-[3rem]">
              See everything Milo does for you
            </h2>
            <p className="mx-auto max-w-lg text-[16px] text-gray-400">
              Real-time dashboard with conversations, leads, revenue, and
              reviews. Jump in and take over from AI at any time.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mx-auto max-w-5xl">
            <div className="glow-border glass overflow-hidden rounded-2xl">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-white/[0.04] px-5 py-3.5">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-white/[0.06]" />
                  <div className="h-3 w-3 rounded-full bg-white/[0.06]" />
                  <div className="h-3 w-3 rounded-full bg-white/[0.06]" />
                </div>
                <div className="ml-3 flex-1 rounded-lg bg-white/[0.03] px-4 py-1.5 ring-1 ring-white/[0.04]">
                  <p className="text-[11px] text-gray-600">app.getmilo.com.au/dashboard</p>
                </div>
              </div>

              {/* Dashboard */}
              <div className="flex">
                {/* Sidebar */}
                <div className="hidden w-48 flex-shrink-0 border-r border-white/[0.04] bg-navy-900/50 p-4 md:block">
                  <div className="mb-8 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-milo-400 via-violet-500 to-emerald-400 text-[10px] font-bold text-white">
                      M
                    </div>
                    <span className="text-[13px] font-semibold text-white">milo</span>
                  </div>
                  <nav className="flex flex-col gap-0.5">
                    {["Dashboard", "Conversations", "Leads", "Reviews", "Analytics", "Settings"].map((item, i) => (
                      <div
                        key={item}
                        className={`rounded-lg px-3 py-2 text-[12px] font-medium ${
                          i === 0
                            ? "bg-white/[0.06] text-white"
                            : "text-gray-600 hover:text-gray-400"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </nav>
                </div>

                {/* Main content */}
                <div className="flex-1 bg-navy-950/50 p-5 md:p-7">
                  {/* Header */}
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-[16px] font-semibold text-white">
                        Good morning, Dr. Chen
                      </h3>
                      <p className="text-[12px] text-gray-500">
                        Here&apos;s what Milo did this week
                      </p>
                    </div>
                    <div className="flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1">
                      <TrendingUp size={12} className="text-emerald-400" />
                      <span className="text-[11px] font-semibold text-emerald-400">+32%</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                    {[
                      { icon: MessageSquare, label: "Conversations", value: "47", change: "+18%", color: "from-milo-500 to-milo-600" },
                      { icon: Users, label: "Leads Captured", value: "23", change: "+24%", color: "from-emerald-500 to-emerald-600" },
                      { icon: DollarSign, label: "Est. Revenue", value: "$8,420", change: "+32%", color: "from-amber-500 to-amber-600" },
                      { icon: Star, label: "Reviews", value: "12", change: "+50%", color: "from-violet-500 to-violet-600" },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-xl bg-white/[0.03] p-4 ring-1 ring-white/[0.04]">
                        <div className="mb-3 flex items-center justify-between">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${stat.color}`}>
                            <stat.icon size={14} className="text-white" />
                          </div>
                          <span className="text-[10px] font-semibold text-emerald-400">{stat.change}</span>
                        </div>
                        <p className="text-[20px] font-bold text-white">{stat.value}</p>
                        <p className="text-[11px] text-gray-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Conversations list */}
                  <div className="rounded-xl bg-white/[0.02] p-4 ring-1 ring-white/[0.04]">
                    <div className="mb-3 flex items-center justify-between">
                      <h4 className="text-[13px] font-semibold text-white">Recent Conversations</h4>
                      <span className="text-[11px] font-medium text-milo-400">View all</span>
                    </div>
                    {[
                      { name: "Sarah Mitchell", service: "Emergency — toothache", time: "2m ago", status: "New Lead", statusColor: "border-milo-400/30 bg-milo-400/10 text-milo-400", source: "SMS" },
                      { name: "James Cooper", service: "Check-up & clean", time: "14m ago", status: "Booked", statusColor: "border-emerald-400/30 bg-emerald-400/10 text-emerald-400", source: "SMS" },
                      { name: "Emma Zhao", service: "Teeth whitening", time: "1h ago", status: "Booked", statusColor: "border-emerald-400/30 bg-emerald-400/10 text-emerald-400", source: "Web" },
                      { name: "Michael Park", service: "Orthodontics consult", time: "3h ago", status: "Following Up", statusColor: "border-amber-400/30 bg-amber-400/10 text-amber-400", source: "SMS" },
                    ].map((row) => (
                      <div key={row.name} className="flex items-center justify-between border-b border-white/[0.03] py-3 last:border-0 last:pb-0">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.04] text-[10px] font-semibold text-gray-400 ring-1 ring-white/[0.04]">
                            {row.name.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div>
                            <p className="text-[12px] font-medium text-white">{row.name}</p>
                            <p className="text-[11px] text-gray-600">{row.service}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="hidden text-[10px] text-gray-600 sm:inline">{row.source}</span>
                          <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${row.statusColor}`}>
                            {row.status}
                          </span>
                          <span className="text-[10px] text-gray-600">{row.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
