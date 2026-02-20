"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "How quickly can I get set up?",
    a: "Under 5 minutes. Complete the onboarding wizard, get your dedicated Australian number, set up call forwarding, and Milo starts immediately.",
  },
  {
    q: "Does Milo sound like a robot?",
    a: "Not at all. Milo uses advanced AI trained for dental conversations. Natural Australian English, understands context, has genuine personality. Patients regularly think they\u2019re chatting with a real person.",
  },
  {
    q: "What if Milo can\u2019t handle a conversation?",
    a: "Milo knows its limits. Complex conversations get smoothly escalated to you with a full transcript and instant notification. Staff can take over any conversation from the dashboard.",
  },
  {
    q: "Can I customise what Milo says?",
    a: "Yes. Set the AI personality, add custom FAQs, configure services and pricing, create custom playbooks. Milo adapts to your practice\u2019s unique voice.",
  },
  {
    q: "How does the web chat widget work?",
    a: "One line of code on your website. Chat bubble in the corner, same AI as SMS. Customisable colours and messaging. All conversations in the same inbox.",
  },
  {
    q: "Is my patient data secure?",
    a: "Enterprise-grade security with row-level isolation. Each clinic\u2019s data is completely separated. Encrypted in transit and at rest. Australian data privacy compliant.",
  },
  {
    q: "What if I already have a phone system?",
    a: "Milo works alongside it. You get a dedicated Milo number and set up call forwarding from your main line. When you miss a call, Milo handles the text-back.",
  },
  {
    q: "Can I cancel any time?",
    a: "Yes. No lock-in contracts. Cancel from your dashboard. Plus a 30-day money-back guarantee \u2014 if Milo doesn\u2019t help, full refund.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.04] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="pr-4 text-[15px] font-semibold text-white">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-gray-600 transition-transform duration-300 ${
            open ? "rotate-180 text-milo-400" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[14px] leading-relaxed text-gray-400">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-32">
      <div className="section-line" />

      <div className="relative mx-auto max-w-3xl px-6 pt-8 lg:px-8">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="mb-4 text-[11px] font-semibold tracking-[0.15em] text-milo-400 uppercase">
              FAQ
            </p>
            <h2 className="text-[2.5rem] font-extrabold tracking-[-0.02em] text-white">
              Got questions?
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="glass rounded-2xl px-6">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} {...faq} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
