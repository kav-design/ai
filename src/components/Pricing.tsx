import { Check, Zap, Sparkles, Building2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const plans = [
  {
    name: "Starter",
    price: "$197",
    period: "/mo",
    description: "For single-location clinics getting started.",
    icon: Zap,
    gradient: "from-gray-500 to-gray-600",
    features: [
      "Missed call text-back",
      "AI SMS conversations",
      "Up to 200 conversations/mo",
      "Lead capture & notifications",
      "Basic analytics",
      "1 phone number",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$397",
    period: "/mo",
    description: "Full AI employee. Everything you need.",
    icon: Sparkles,
    gradient: "from-milo-500 via-violet-500 to-milo-500",
    features: [
      "Everything in Starter",
      "Unlimited conversations",
      "Web chat widget",
      "Smart follow-up sequences",
      "Google review collection",
      "Unified inbox",
      "Weekly email summaries",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Multi-location with custom integrations.",
    icon: Building2,
    gradient: "from-emerald-500 to-emerald-600",
    features: [
      "Everything in Professional",
      "Multiple locations",
      "Custom AI playbooks",
      "PMS integration",
      "API access",
      "Dedicated account manager",
      "Custom reporting",
      "SLA guarantee",
    ],
    cta: "Talk to Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32">
      <div className="section-line" />

      <div className="absolute left-[20%] top-[30%] h-[500px] w-[500px] orb orb-violet opacity-15" />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 lg:px-8">
        <ScrollReveal>
          <div className="mb-20 text-center">
            <p className="mb-4 text-[11px] font-semibold tracking-[0.15em] text-milo-400 uppercase">
              Pricing
            </p>
            <h2 className="mb-5 text-[2.5rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white sm:text-[3rem]">
              Less than a part-time receptionist.
              <br />
              <span className="gradient-text">Works 10x harder.</span>
            </h2>
            <p className="mx-auto max-w-lg text-[16px] text-gray-400">
              14-day free trial. No credit card required. Cancel any time.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 100}>
              <div
                className={`group relative h-full overflow-hidden rounded-2xl transition-all duration-500 ${
                  plan.popular
                    ? "glow-border glass-strong"
                    : "glass hover:border-white/[0.1] hover:bg-white/[0.04]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-milo-400 to-transparent" />
                )}

                <div className="p-7">
                  {plan.popular && (
                    <div className="mb-4 inline-flex rounded-full border border-milo-400/20 bg-milo-400/10 px-3 py-0.5">
                      <span className="text-[10px] font-bold tracking-wider text-milo-400 uppercase">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${plan.gradient}`}>
                    <plan.icon size={20} className="text-white" />
                  </div>

                  <h3 className="text-[18px] font-bold text-white">{plan.name}</h3>
                  <p className="mt-1 text-[13px] text-gray-500">{plan.description}</p>

                  <div className="my-6 flex items-baseline gap-1">
                    <span className="text-[2.5rem] font-extrabold tracking-tight text-white">
                      {plan.price}
                    </span>
                    <span className="text-[14px] text-gray-500">{plan.period}</span>
                  </div>

                  <a
                    href="#"
                    className={`mb-7 flex w-full items-center justify-center rounded-full py-3 text-[13px] font-semibold transition-all ${
                      plan.popular
                        ? "btn-glow bg-gradient-to-r from-milo-500 via-violet-500 to-milo-500 bg-[length:200%_100%] text-white hover:bg-right"
                        : "border border-white/[0.08] bg-white/[0.03] text-white hover:border-white/[0.15] hover:bg-white/[0.06]"
                    }`}
                  >
                    {plan.cta}
                  </a>

                  <ul className="flex flex-col gap-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check size={14} className="mt-0.5 flex-shrink-0 text-emerald-400" />
                        <span className="text-[13px] text-gray-400">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <p className="mt-12 text-center text-[13px] text-gray-600">
            30-day money-back guarantee. If Milo doesn&apos;t capture more leads
            in 30 days, full refund. No questions.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
