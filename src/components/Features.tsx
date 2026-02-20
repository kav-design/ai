import {
  PhoneOff, MessageSquare, Brain, Globe, BellRing, Star,
  BarChart3, Clock, CalendarDays, ShieldCheck, Repeat, Zap,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: PhoneOff,
    title: "Missed Call Text-Back",
    description: "Every missed call triggers an instant SMS within 2 seconds. Patients never feel ignored.",
    color: "text-rose-400",
    glow: "group-hover:shadow-rose-400/10",
  },
  {
    icon: Brain,
    title: "AI Conversation Engine",
    description: "Dental-specific AI that understands emergencies, suggests services, and handles objections naturally.",
    color: "text-violet-400",
    glow: "group-hover:shadow-violet-400/10",
  },
  {
    icon: Globe,
    title: "Web Chat Widget",
    description: "One line of code adds a chat widget to your site. Same smart AI catching leads from visitors.",
    color: "text-milo-400",
    glow: "group-hover:shadow-milo-400/10",
  },
  {
    icon: CalendarDays,
    title: "Appointment Booking",
    description: "Qualifies the patient, captures preferred time, sends your booking link — or notifies you to confirm.",
    color: "text-emerald-400",
    glow: "group-hover:shadow-emerald-400/10",
  },
  {
    icon: Repeat,
    title: "Smart Follow-Ups",
    description: "Automated 24h, 48h, and 5-day follow-ups with personalised messages that bring patients back.",
    color: "text-amber-400",
    glow: "group-hover:shadow-amber-400/10",
  },
  {
    icon: Star,
    title: "Google Review Collection",
    description: "Automated review requests after appointments with intelligent follow-up for non-responders.",
    color: "text-yellow-400",
    glow: "group-hover:shadow-yellow-400/10",
  },
  {
    icon: BellRing,
    title: "Real-Time Notifications",
    description: "SMS and email alerts when leads are qualified. Full transcript included. Respects quiet hours.",
    color: "text-milo-400",
    glow: "group-hover:shadow-milo-400/10",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Conversations, leads, estimated revenue, review rates, and busiest hours — all in one view.",
    color: "text-indigo-400",
    glow: "group-hover:shadow-indigo-400/10",
  },
  {
    icon: MessageSquare,
    title: "Unified Inbox",
    description: "All SMS and web chat threads in one place. Staff can take over from AI with one click.",
    color: "text-teal-400",
    glow: "group-hover:shadow-teal-400/10",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "After-hours, weekends, holidays — every patient gets an instant, intelligent response.",
    color: "text-rose-400",
    glow: "group-hover:shadow-rose-400/10",
  },
  {
    icon: Zap,
    title: "5-Minute Setup",
    description: "Complete the wizard, get your number, start catching leads. No complex integrations.",
    color: "text-amber-400",
    glow: "group-hover:shadow-amber-400/10",
  },
  {
    icon: ShieldCheck,
    title: "Dental Playbooks",
    description: "Emergency detection, whitening upsells, welcome-back offers — industry intelligence built in.",
    color: "text-violet-400",
    glow: "group-hover:shadow-violet-400/10",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32">
      <div className="section-line" />

      {/* Background orbs */}
      <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] orb orb-violet opacity-30" />
      <div className="absolute left-[-10%] bottom-[10%] h-[400px] w-[400px] orb orb-blue opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 pt-8 lg:px-8">
        <ScrollReveal>
          <div className="mb-20 text-center">
            <p className="mb-4 text-[11px] font-semibold tracking-[0.15em] text-milo-400 uppercase">
              Capabilities
            </p>
            <h2 className="mb-5 text-[2.5rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white sm:text-[3rem]">
              One AI employee.{" "}
              <span className="gradient-text">Every job covered.</span>
            </h2>
            <p className="mx-auto max-w-lg text-[16px] text-gray-400">
              From the moment a patient calls to the Google review they leave —
              Milo handles the entire journey.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={(i % 3) * 80}>
              <div
                className={`group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.04] hover:shadow-[0_0_60px] ${feature.glow}`}
              >
                <div className="mb-4">
                  <feature.icon size={22} className={`${feature.color} transition-transform duration-500 group-hover:scale-110`} />
                </div>
                <h3 className="mb-2 text-[15px] font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
