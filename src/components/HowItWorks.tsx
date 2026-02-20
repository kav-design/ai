"use client";

import { useRef } from "react";
import { Phone, MessageSquareText, CalendarCheck } from "lucide-react";
import { motion, useInView } from "framer-motion";

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
      "AI trained on dental knowledge chats naturally via voice or SMS \u2014 answering questions, understanding urgency, qualifying the lead.",
    iconBg: "bg-teal-light",
    iconColor: "text-teal",
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "You get a booked patient",
    description:
      "Name, service needed, appointment time \u2014 all captured and booked. You just show up and treat.",
    iconBg: "bg-sage-light",
    iconColor: "text-sage",
  },
];

export default function HowItWorks() {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">
            How it works
          </p>
          <h2 className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight text-charcoal sm:text-5xl">
            Three steps. Zero missed patients.
          </h2>
          <p className="mx-auto max-w-lg text-lg text-body">
            Set up in minutes. From there, every missed call becomes a
            conversation, every conversation becomes a booking.
          </p>
        </motion.div>

        <div ref={gridRef} className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full rounded-2xl border border-border bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
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
              <p className="text-sm leading-relaxed text-body">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
