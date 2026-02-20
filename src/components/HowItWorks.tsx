import { Phone, MessageSquareText, CalendarCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Patient calls, Milo picks up",
    description:
      "Milo answers with a natural AI voice or sends an instant SMS within 2 seconds. No patient left waiting, day or night.",
    iconBg: "bg-terracotta-light",
    iconColor: "text-terracotta",
  },
  {
    icon: MessageSquareText,
    number: "02",
    title: "Milo has the conversation",
    description:
      "AI trained on dental knowledge chats naturally via voice or SMS — answering questions, understanding urgency, qualifying the lead.",
    iconBg: "bg-teal-light",
    iconColor: "text-teal",
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "You get a booked patient",
    description:
      "Name, service needed, appointment time — all captured and booked. You just show up and treat.",
    iconBg: "bg-sage-light",
    iconColor: "text-sage",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">
              How it works
            </p>
            <h2 className="mb-5 text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-charcoal">
              Three steps. Zero missed patients.
            </h2>
            <p className="mx-auto max-w-lg text-lg text-body">
              Set up in minutes. From there, every missed call becomes a
              conversation, every conversation becomes a booking.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 100}>
              <div className="h-full bg-white rounded-2xl border border-border shadow-sm p-8 hover:shadow-md transition-shadow">
                {/* Step number */}
                <p className="mb-6 text-xs font-bold tracking-[0.2em] text-muted">
                  STEP {step.number}
                </p>

                {/* Icon */}
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-full ${step.iconBg}`}
                >
                  <step.icon size={24} className={step.iconColor} />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold text-charcoal">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
