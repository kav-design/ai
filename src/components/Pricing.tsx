import { Check, Zap, Sparkles, Building2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const plans = [
  {
    name: "Starter",
    price: "$197",
    period: "/mo",
    description: "For single-location clinics getting started.",
    icon: Zap,
    iconBg: "bg-sage-light",
    iconColor: "text-sage",
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
    iconBg: "bg-terracotta-light",
    iconColor: "text-terracotta",
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
    iconBg: "bg-teal-light",
    iconColor: "text-teal",
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
    <section id="pricing" className="gradient-cool relative overflow-hidden py-24 sm:py-32">
      {/* Organic background shapes */}
      <div className="organic-shape organic-teal absolute -right-48 top-0 h-[500px] w-[500px]" />
      <div className="organic-shape organic-sage absolute -left-40 bottom-20 h-[450px] w-[450px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-20 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">
              Pricing
            </p>
            <h2 className="mb-5 text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
              Less than a part-time receptionist.
              <br />
              <span className="text-terracotta">
                Works 10x harder.
              </span>
            </h2>
            <p className="mx-auto max-w-lg text-lg text-body leading-relaxed">
              14-day free trial. No credit card required. Cancel any time.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 100}>
              <div
                className={`relative h-full overflow-hidden rounded-2xl ${
                  plan.popular
                    ? "border-2 border-charcoal shadow-lg"
                    : "border border-border shadow-sm"
                } bg-white`}
              >
                <div className="p-7">
                  {plan.popular && (
                    <div className="mb-4 inline-flex rounded-full bg-charcoal px-3 py-1">
                      <span className="text-xs font-bold uppercase text-white">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${plan.iconBg}`}>
                    <plan.icon size={20} className={plan.iconColor} />
                  </div>

                  <h3 className="text-lg font-bold text-charcoal">{plan.name}</h3>
                  <p className="mt-1 text-sm text-body">{plan.description}</p>

                  <div className="my-6 flex items-baseline gap-1">
                    <span className="text-5xl font-bold tracking-tight text-charcoal">
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted">{plan.period}</span>
                  </div>

                  <a
                    href="#"
                    className={`mb-7 flex w-full items-center justify-center rounded-full py-3.5 text-sm font-semibold transition-colors ${
                      plan.popular
                        ? "bg-terracotta text-white hover:bg-terracotta-dark"
                        : "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
                    }`}
                  >
                    {plan.cta}
                  </a>

                  <ul className="flex flex-col gap-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check size={14} className="mt-0.5 flex-shrink-0 text-teal" />
                        <span className="text-sm text-body">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <p className="mt-12 text-center text-sm text-muted">
            30-day money-back guarantee. If Milo doesn&apos;t capture more leads
            in 30 days, full refund. No questions.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
