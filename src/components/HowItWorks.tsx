import { PhoneMissed, MessageSquareText, CalendarCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: PhoneMissed,
    number: "01",
    title: "Patient calls, you miss it",
    description:
      "Milo detects the missed call instantly. Within 2 seconds, a personalised SMS is sent — no patient left waiting.",
    gradient: "from-rose-400/20 to-rose-400/5",
    iconColor: "text-rose-400",
    glowColor: "shadow-rose-400/20",
  },
  {
    icon: MessageSquareText,
    number: "02",
    title: "Milo has the conversation",
    description:
      "AI trained on dental industry knowledge chats naturally via SMS — answering questions, understanding urgency, qualifying the lead.",
    gradient: "from-milo-400/20 to-violet-400/5",
    iconColor: "text-milo-400",
    glowColor: "shadow-milo-400/20",
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "You get a qualified lead",
    description:
      "Name, service needed, preferred time — all captured and sent to you instantly. You just confirm the booking.",
    gradient: "from-emerald-400/20 to-emerald-400/5",
    iconColor: "text-emerald-400",
    glowColor: "shadow-emerald-400/20",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32">
      <div className="section-line" />

      <div className="mx-auto max-w-7xl px-6 pt-8 lg:px-8">
        <ScrollReveal>
          <div className="mb-20 text-center">
            <p className="mb-4 text-[11px] font-semibold tracking-[0.15em] text-milo-400 uppercase">
              How it works
            </p>
            <h2 className="mb-5 text-[2.5rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white sm:text-[3rem]">
              Three steps. Zero missed patients.
            </h2>
            <p className="mx-auto max-w-lg text-[16px] text-gray-400">
              Set up in minutes. From there, every missed call becomes a
              conversation, every conversation becomes a booking.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 100}>
              <div className="group relative h-full">
                {/* Card */}
                <div className={`glass relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.04]`}>
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${step.gradient} opacity-0 transition-opacity group-hover:opacity-100`}
                  />

                  <div className="relative">
                    {/* Number */}
                    <p className="mb-6 text-[11px] font-bold tracking-[0.2em] text-gray-600">
                      STEP {step.number}
                    </p>

                    {/* Icon */}
                    <div
                      className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.04] shadow-[0_0_30px] ${step.glowColor} ring-1 ring-white/[0.06] transition-all group-hover:bg-white/[0.06]`}
                    >
                      <step.icon size={24} className={step.iconColor} />
                    </div>

                    <h3 className="mb-3 text-[18px] font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
