import {
  PhoneMissed,
  MessageSquareText,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: PhoneMissed,
    number: "01",
    title: "A patient calls & you miss it",
    description:
      "Milo detects the missed call instantly. No patient is left waiting — within 2 seconds, Milo sends a friendly SMS.",
    color: "from-rose-400 to-rose-500",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-500",
  },
  {
    icon: MessageSquareText,
    number: "02",
    title: "Milo has a real conversation",
    description:
      "Using AI trained on dental industry knowledge, Milo chats naturally via SMS — answering questions, understanding urgency, and qualifying the lead.",
    color: "from-milo-400 to-milo-600",
    iconBg: "bg-milo-50",
    iconColor: "text-milo-600",
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "You get a qualified lead",
    description:
      "Milo captures the patient's name, what they need, and when they're available — then notifies you instantly. You just confirm the booking.",
    color: "from-emerald-400 to-emerald-500",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-milo-600 uppercase">
            How it works
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Three steps. Zero missed patients.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-500">
            Set up Milo in minutes. From there, every missed call becomes a
            conversation, and every conversation becomes a booking.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid gap-8 md:grid-cols-3">
          {/* Connecting line */}
          <div className="absolute top-16 left-[16.66%] right-[16.66%] hidden h-0.5 bg-gradient-to-r from-rose-200 via-milo-200 to-emerald-200 md:block" />

          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center">
              {/* Step number */}
              <div className="relative z-10 mx-auto mb-6 flex h-32 w-32 flex-col items-center justify-center rounded-3xl bg-white shadow-lg shadow-gray-200/50 ring-1 ring-gray-100">
                <div
                  className={`mb-2 flex h-12 w-12 items-center justify-center rounded-2xl ${step.iconBg}`}
                >
                  <step.icon size={24} className={step.iconColor} />
                </div>
                <span className="text-xs font-bold text-gray-300">
                  STEP {step.number}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {step.title}
              </h3>
              <p className="mx-auto max-w-xs text-sm leading-relaxed text-gray-500">
                {step.description}
              </p>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-16 hidden -translate-x-1/2 translate-y-[-50%] md:block">
                  <ArrowRight size={20} className="text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
