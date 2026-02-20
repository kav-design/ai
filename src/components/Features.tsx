import {
  PhoneOff, MessageSquare, Brain, Globe, BellRing, Star,
  BarChart3, Clock, CalendarDays, ShieldCheck, Repeat, Zap, Phone,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const accentCycle = [
  { bg: "bg-terracotta-light", text: "text-terracotta" },
  { bg: "bg-teal-light", text: "text-teal" },
  { bg: "bg-sage-light", text: "text-sage" },
  { bg: "bg-gold-light", text: "text-gold" },
  { bg: "bg-blue-muted-light", text: "text-blue-muted" },
];

const features = [
  {
    icon: Phone,
    title: "AI Voice Agent",
    description: "Milo answers calls with a natural AI voice — books appointments, answers FAQs, and transfers to staff when needed.",
  },
  {
    icon: PhoneOff,
    title: "Missed Call Text-Back",
    description: "Every missed call triggers an instant SMS within 2 seconds. Patients never feel ignored.",
  },
  {
    icon: Brain,
    title: "AI Conversation Engine",
    description: "Dental-specific AI that understands emergencies, suggests services, and handles objections naturally.",
  },
  {
    icon: Globe,
    title: "Web Chat Widget",
    description: "One line of code adds a chat widget to your site. Same smart AI catching leads from visitors.",
  },
  {
    icon: CalendarDays,
    title: "Appointment Booking",
    description: "Qualifies the patient, captures preferred time, sends your booking link — or notifies you to confirm.",
  },
  {
    icon: Repeat,
    title: "Smart Follow-Ups",
    description: "Automated 24h, 48h, and 5-day follow-ups with personalised messages that bring patients back.",
  },
  {
    icon: Star,
    title: "Google Review Collection",
    description: "Automated review requests after appointments with intelligent follow-up for non-responders.",
  },
  {
    icon: BellRing,
    title: "Real-Time Notifications",
    description: "SMS and email alerts when leads are qualified. Full transcript included. Respects quiet hours.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Conversations, leads, estimated revenue, review rates, and busiest hours — all in one view.",
  },
  {
    icon: MessageSquare,
    title: "Unified Inbox",
    description: "All SMS and web chat threads in one place. Staff can take over from AI with one click.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "After-hours, weekends, holidays — every patient gets an instant, intelligent response.",
  },
  {
    icon: ShieldCheck,
    title: "Dental Playbooks",
    description: "Emergency detection, whitening upsells, welcome-back offers — industry intelligence built in.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-20 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">
              Capabilities
            </p>
            <h2 className="mb-5 text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
              One AI employee.{" "}
              <span className="text-terracotta">
                Every job covered.
              </span>
            </h2>
            <p className="mx-auto max-w-lg text-lg text-body leading-relaxed">
              From the first missed call to the 5-star Google review — Milo
              handles the entire patient journey.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const accent = accentCycle[i % accentCycle.length];
            return (
              <ScrollReveal key={feature.title} delay={(i % 3) * 80}>
                <div className="group rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-md">
                  <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${accent.bg}`}>
                    <feature.icon size={20} className={accent.text} />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-charcoal">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-body">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
