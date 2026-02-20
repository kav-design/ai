import {
  MessageSquare,
  Users,
  DollarSign,
  Star,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

function StatCard({
  icon: Icon,
  label,
  value,
  change,
  color,
}: {
  icon: typeof MessageSquare;
  label: string;
  value: string;
  change: string;
  color: string;
}) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${color}`}
        >
          <Icon size={18} className="text-white" />
        </div>
        <span className="flex items-center gap-0.5 text-xs font-semibold text-emerald-600">
          <ArrowUpRight size={12} />
          {change}
        </span>
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}

function ConversationRow({
  name,
  service,
  time,
  status,
  source,
}: {
  name: string;
  service: string;
  time: string;
  status: string;
  source: string;
}) {
  const statusColor =
    status === "Booked"
      ? "bg-emerald-100 text-emerald-700"
      : status === "New Lead"
        ? "bg-milo-100 text-milo-700"
        : "bg-amber-100 text-amber-700";

  return (
    <div className="flex items-center justify-between border-b border-gray-50 py-3 last:border-0">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-600">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{service}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs text-gray-400">{source}</span>
        <span
          className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${statusColor}`}
        >
          {status}
        </span>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
    </div>
  );
}

export default function DashboardPreview() {
  return (
    <section className="bg-navy-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-milo-400 uppercase">
            Your command centre
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            See everything Milo is doing for you
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            A clean, real-time dashboard showing conversations, leads, revenue,
            and reviews. Jump in and take over from AI at any time.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-sm">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-gray-200/10 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400/60" />
                <div className="h-3 w-3 rounded-full bg-amber-400/60" />
                <div className="h-3 w-3 rounded-full bg-emerald-400/60" />
              </div>
              <div className="ml-4 flex-1 rounded-md bg-white/10 px-3 py-1.5">
                <p className="text-xs text-gray-400">app.getmilo.com.au/dashboard</p>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="flex rounded-b-xl overflow-hidden">
              {/* Sidebar */}
              <div className="hidden w-52 flex-shrink-0 bg-navy-800 p-4 md:block">
                <div className="mb-6 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-milo-500 to-emerald-500 text-xs font-bold text-white">
                    M
                  </div>
                  <span className="text-sm font-bold text-white">milo</span>
                </div>
                <nav className="flex flex-col gap-1">
                  {[
                    { label: "Dashboard", active: true },
                    { label: "Conversations", active: false },
                    { label: "Leads", active: false },
                    { label: "Reviews", active: false },
                    { label: "Analytics", active: false },
                    { label: "Settings", active: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`rounded-lg px-3 py-2 text-xs font-medium ${
                        item.active
                          ? "bg-milo-600/20 text-milo-300"
                          : "text-gray-500"
                      }`}
                    >
                      {item.label}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Main content */}
              <div className="flex-1 bg-gray-50 p-4 md:p-6">
                {/* Header */}
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Good morning, Dr. Chen
                    </h3>
                    <p className="text-xs text-gray-500">
                      Here&apos;s what Milo did this week
                    </p>
                  </div>
                  <div className="rounded-lg bg-emerald-50 px-3 py-1.5">
                    <p className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                      <TrendingUp size={12} />
                      +32% vs last week
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="mb-5 grid grid-cols-2 gap-3 md:grid-cols-4">
                  <StatCard
                    icon={MessageSquare}
                    label="Conversations"
                    value="47"
                    change="+18%"
                    color="bg-milo-600"
                  />
                  <StatCard
                    icon={Users}
                    label="Leads Captured"
                    value="23"
                    change="+24%"
                    color="bg-emerald-500"
                  />
                  <StatCard
                    icon={DollarSign}
                    label="Est. Revenue"
                    value="$8,420"
                    change="+32%"
                    color="bg-amber-500"
                  />
                  <StatCard
                    icon={Star}
                    label="Reviews Collected"
                    value="12"
                    change="+50%"
                    color="bg-purple-500"
                  />
                </div>

                {/* Recent conversations */}
                <div className="rounded-xl border border-gray-100 bg-white p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-gray-900">
                      Recent Conversations
                    </h4>
                    <span className="text-xs text-milo-600 font-medium">
                      View all
                    </span>
                  </div>
                  <ConversationRow
                    name="Sarah Mitchell"
                    service="Emergency — toothache"
                    time="2m ago"
                    status="New Lead"
                    source="SMS"
                  />
                  <ConversationRow
                    name="James Cooper"
                    service="Check-up & clean"
                    time="14m ago"
                    status="Booked"
                    source="SMS"
                  />
                  <ConversationRow
                    name="Emma Zhao"
                    service="Teeth whitening"
                    time="1h ago"
                    status="Booked"
                    source="Web"
                  />
                  <ConversationRow
                    name="Michael Park"
                    service="Orthodontics consult"
                    time="3h ago"
                    status="Following Up"
                    source="SMS"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
