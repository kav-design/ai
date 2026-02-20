"use client";

import ScrollReveal from "./ScrollReveal";

const timeline = [
  {
    time: "0–5 min",
    text: "Patient is ready to book — highest intent, easiest conversion.",
    badge: "Milo responds in 2 seconds",
    dotColor: "bg-teal",
    labelColor: "text-teal",
  },
  {
    time: "5–30 min",
    text: "80% of leads already lost. They've called your competitor down the road.",
    badge: null,
    dotColor: "bg-gold",
    labelColor: "text-gold",
  },
  {
    time: "30+ min",
    text: "Patient has booked elsewhere. Lost lifetime value: $2,500/year.",
    badge: null,
    dotColor: "bg-terracotta",
    labelColor: "text-terracotta",
  },
];

const stats = [
  { value: "35%", label: "Calls missed by average clinic", valueColor: "text-charcoal" },
  { value: "$87K", label: "Lost revenue per year", valueColor: "text-charcoal" },
  { value: "2s", label: "Milo's response time", valueColor: "text-teal" },
  { value: "91%", label: "Patients respond to Milo", valueColor: "text-teal" },
];

export default function SpeedToLead() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Visual Timeline */}
          <ScrollReveal>
            <div className="bg-white rounded-2xl border border-border shadow-sm p-8">
              <h3 className="mb-8 text-sm font-semibold text-charcoal">
                What happens when you miss a call
              </h3>

              <div className="relative flex flex-col gap-0">
                {/* Vertical connecting line */}
                <div className="absolute left-[9px] top-6 bottom-6 border-l-2 border-border" />

                {timeline.map((step, i) => (
                  <div key={i} className="relative flex items-start gap-5 pb-8 last:pb-0">
                    {/* Dot */}
                    <div
                      className={`relative z-10 mt-1.5 h-[10px] w-[10px] flex-shrink-0 rounded-full ${step.dotColor}`}
                    />
                    <div>
                      <p className={`text-sm font-semibold ${step.labelColor}`}>
                        {step.time}
                      </p>
                      <p className="mt-0.5 text-sm leading-relaxed text-body">
                        {step.text}
                      </p>
                      {step.badge && (
                        <div className="mt-2.5 inline-flex">
                          <span className="bg-teal-light text-teal text-xs font-semibold rounded-full px-3 py-1">
                            {step.badge}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <ScrollReveal delay={150}>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">
                The problem
              </p>
              <h2 className="mb-5 text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-charcoal">
                Your competitors answer in 5 minutes.{" "}
                <span className="text-terracotta font-bold">
                  $2,500 lost.
                </span>
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-body">
                Australian dental clinics miss 35% of incoming calls. Every
                unanswered ring is a patient calling someone else — and
                $2,500 in lifetime value walking out the door.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-xl border border-border p-5"
                  >
                    <p className={`text-3xl font-bold tracking-tight ${stat.valueColor}`}>
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
