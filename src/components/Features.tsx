import {
  PhoneOff,
  MessageSquare,
  Brain,
  Globe,
  BellRing,
  Star,
  BarChart3,
  Clock,
  CalendarDays,
  ShieldCheck,
  Repeat,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: PhoneOff,
    title: "Missed Call Text-Back",
    description:
      "Every missed call gets an instant SMS within 2 seconds. Milo starts the conversation so patients never feel ignored.",
    tag: "Core",
    tagColor: "bg-milo-100 text-milo-700",
  },
  {
    icon: Brain,
    title: "AI Conversation Engine",
    description:
      "Powered by advanced AI with dental-specific knowledge. Milo understands emergencies, suggests services, and handles objections.",
    tag: "AI",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    icon: Globe,
    title: "Web Chat Widget",
    description:
      "Add a chat widget to your website with one line of code. Same smart AI, now catching leads from your site visitors.",
    tag: "Core",
    tagColor: "bg-milo-100 text-milo-700",
  },
  {
    icon: CalendarDays,
    title: "Appointment Booking",
    description:
      "Milo qualifies the patient, captures their preferred time, and sends your booking link — or notifies you to confirm.",
    tag: "Automation",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: Repeat,
    title: "Smart Follow-Ups",
    description:
      "Leads go quiet? Milo follows up at 24h, 48h, and 5 days with personalised messages that bring patients back.",
    tag: "Automation",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: Star,
    title: "Google Review Collection",
    description:
      "After appointments, Milo texts patients a review request. Automated follow-up if they haven't left one after 3 days.",
    tag: "Growth",
    tagColor: "bg-amber-100 text-amber-700",
  },
  {
    icon: BellRing,
    title: "Real-Time Notifications",
    description:
      "Get SMS and email alerts the moment a lead is qualified. Full conversation transcript included. Respects quiet hours.",
    tag: "Core",
    tagColor: "bg-milo-100 text-milo-700",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "See conversations, leads captured, estimated revenue, review conversion rates, and your busiest hours — all in one place.",
    tag: "Insights",
    tagColor: "bg-indigo-100 text-indigo-700",
  },
  {
    icon: MessageSquare,
    title: "Unified Inbox",
    description:
      "All SMS and web chat conversations in one place. Staff can jump in and take over from AI at any time with one click.",
    tag: "Core",
    tagColor: "bg-milo-100 text-milo-700",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Milo never sleeps. After-hours calls, weekend enquiries, public holidays — every patient gets an instant response.",
    tag: "Always On",
    tagColor: "bg-rose-100 text-rose-700",
  },
  {
    icon: Zap,
    title: "5-Minute Setup",
    description:
      "Complete the onboarding wizard, get your dedicated phone number, and Milo is ready. No complex integrations needed.",
    tag: "Easy",
    tagColor: "bg-teal-100 text-teal-700",
  },
  {
    icon: ShieldCheck,
    title: "Dental Industry Playbooks",
    description:
      "Milo knows dental. Emergency detection, upselling whitening after cleans, welcome-back offers — all built in.",
    tag: "AI",
    tagColor: "bg-purple-100 text-purple-700",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-milo-600 uppercase">
            Everything Milo can do
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            One AI employee. Every job covered.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-500">
            From the moment a patient calls to the Google review they leave after
            their visit — Milo handles the entire journey.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-hover group rounded-2xl border border-gray-100 bg-white p-6"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 transition-colors group-hover:bg-milo-50">
                  <feature.icon
                    size={22}
                    className="text-gray-600 transition-colors group-hover:text-milo-600"
                  />
                </div>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${feature.tagColor}`}
                >
                  {feature.tag}
                </span>
              </div>
              <h3 className="mb-2 text-base font-bold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
