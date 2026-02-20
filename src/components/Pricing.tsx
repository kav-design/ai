import { Check, Zap, Building2, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$197",
    period: "/month",
    description: "Perfect for single-location clinics getting started with AI.",
    icon: Zap,
    features: [
      "Missed call text-back",
      "AI SMS conversations",
      "Up to 200 conversations/mo",
      "Lead capture & notifications",
      "Basic analytics dashboard",
      "1 dedicated phone number",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
    gradient: "from-gray-600 to-gray-700",
  },
  {
    name: "Professional",
    price: "$397",
    period: "/month",
    description: "Full AI employee with web chat, follow-ups, and reviews.",
    icon: Sparkles,
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
    gradient: "from-milo-500 to-milo-700",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For multi-location practices needing custom integrations.",
    icon: Building2,
    features: [
      "Everything in Professional",
      "Multiple locations",
      "Custom AI playbooks",
      "PMS integration",
      "Custom API access",
      "Dedicated account manager",
      "Custom reporting",
      "SLA guarantee",
    ],
    cta: "Talk to Sales",
    popular: false,
    gradient: "from-emerald-500 to-emerald-700",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-milo-600 uppercase">
            Simple pricing
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Less than a part-time receptionist.{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">Works 10x harder.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-500">
            14-day free trial on all plans. No credit card required.
            Cancel any time.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border bg-white p-8 transition-all ${
                plan.popular
                  ? "border-milo-200 shadow-xl shadow-milo-100/50 ring-2 ring-milo-500"
                  : "border-gray-200 shadow-sm hover:shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-gradient-to-r from-milo-500 to-milo-600 px-4 py-1 text-xs font-bold text-white shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${plan.gradient}`}
              >
                <plan.icon size={22} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{plan.description}</p>

              <div className="my-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-sm text-gray-500">{plan.period}</span>
              </div>

              <a
                href="#"
                className={`mb-8 flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-milo-500 to-milo-600 text-white shadow-md shadow-milo-500/25 hover:shadow-lg"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {plan.cta}
              </a>

              <ul className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="mt-0.5 flex-shrink-0 text-emerald-500"
                    />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            <strong className="text-gray-700">30-day money-back guarantee.</strong>{" "}
            If Milo doesn&apos;t help capture more leads in 30 days, we&apos;ll refund
            every cent. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
