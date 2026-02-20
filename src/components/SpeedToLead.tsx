"use client";

import ScrollReveal from "./ScrollReveal";

export default function SpeedToLead() {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Visual */}
          <ScrollReveal>
            <div className="relative">
              <div className="glass rounded-3xl p-8">
                <h3 className="mb-8 text-[15px] font-semibold text-white">
                  What happens when you miss a call
                </h3>

                <div className="relative flex flex-col gap-0">
                  {/* Gradient line */}
                  <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-emerald-400/60 via-amber-400/60 to-rose-400/60" />

                  {[
                    {
                      time: "0–5 min",
                      text: "Patient is ready to book",
                      badge: "Milo responds in 2 seconds",
                      color: "emerald",
                      dotBg: "bg-emerald-400",
                      dotGlow: "shadow-emerald-400/40",
                    },
                    {
                      time: "5–30 min",
                      text: "80% of leads already lost. They've called your competitor.",
                      badge: null,
                      color: "amber",
                      dotBg: "bg-amber-400",
                      dotGlow: "shadow-amber-400/40",
                    },
                    {
                      time: "30+ min",
                      text: "Patient has booked elsewhere. Lost value: $2,500/year.",
                      badge: null,
                      color: "rose",
                      dotBg: "bg-rose-400",
                      dotGlow: "shadow-rose-400/40",
                    },
                  ].map((step, i) => (
                    <div key={i} className="relative flex items-start gap-5 pb-8 last:pb-0">
                      <div
                        className={`relative z-10 mt-1 h-[10px] w-[10px] flex-shrink-0 rounded-full ${step.dotBg} shadow-[0_0_12px] ${step.dotGlow}`}
                      />
                      <div>
                        <p className="text-[13px] font-semibold text-white">
                          {step.time}
                        </p>
                        <p className="mt-0.5 text-[13px] leading-relaxed text-gray-400">
                          {step.text}
                        </p>
                        {step.badge && (
                          <div className="mt-2 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1">
                            <p className="text-[11px] font-semibold text-emerald-400">
                              {step.badge}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Content */}
          <ScrollReveal delay={150}>
            <div>
              <p className="mb-4 text-[11px] font-semibold tracking-[0.15em] text-milo-400 uppercase">
                The problem
              </p>
              <h2 className="mb-5 text-[2.5rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white sm:text-[3rem]">
                Every minute costs you{" "}
                <span className="gradient-text-warm">$2,500</span>
              </h2>
              <p className="mb-10 text-[16px] leading-relaxed text-gray-400">
                Australian dental clinics miss 35% of incoming calls. Each one
                is a patient who needed you right now — and will call someone
                else if they don&apos;t hear back fast.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "35%", label: "Calls missed by average clinic", color: "text-white" },
                  { value: "$87K", label: "Lost revenue per year", color: "text-white" },
                  { value: "2s", label: "Milo's response time", color: "text-emerald-400" },
                  { value: "91%", label: "Patients respond to Milo", color: "text-emerald-400" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass rounded-2xl p-5"
                  >
                    <p className={`text-[2rem] font-extrabold tracking-tight ${stat.color}`}>
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[12px] leading-snug text-gray-500">
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
