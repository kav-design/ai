"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can I get set up?",
    answer:
      "Most clinics are fully set up in under 5 minutes. Complete the onboarding wizard, get your dedicated Australian phone number, set up call forwarding, and Milo starts handling conversations immediately.",
  },
  {
    question: "Does Milo sound like a robot?",
    answer:
      "Not at all. Milo uses advanced AI trained specifically for dental conversations. It uses natural Australian English, understands context, and has genuine personality. Patients regularly think they're chatting with a real receptionist.",
  },
  {
    question: "What happens if Milo can't handle a conversation?",
    answer:
      "Milo knows its limits. If a conversation becomes too complex or the patient specifically asks for a human, Milo smoothly escalates to you with a full conversation transcript and sends you an instant notification. Your staff can take over the conversation at any time from the dashboard.",
  },
  {
    question: "Can I customise what Milo says?",
    answer:
      "Absolutely. You can set the AI personality (professional, friendly, or casual), add custom FAQs and responses, configure your services and pricing, and even add custom playbooks. Milo adapts to your practice's unique voice and offerings.",
  },
  {
    question: "How does the web chat widget work?",
    answer:
      "Add a single line of code to your website and a chat bubble appears in the bottom-right corner. Visitors can chat with Milo just like they would via SMS. You can customise the colours and welcome message to match your website. All conversations appear in the same unified inbox.",
  },
  {
    question: "Is my patient data secure?",
    answer:
      "Yes. We use enterprise-grade security with Supabase (built on PostgreSQL) with row-level security policies ensuring each clinic's data is completely isolated. All data is encrypted in transit and at rest. We're committed to Australian data privacy standards.",
  },
  {
    question: "What if I already have a phone system?",
    answer:
      "Milo works alongside your existing system. You get a dedicated Milo phone number and simply set up call forwarding from your main number. When you miss a call, it routes to Milo, which then handles the text-back. Your existing number stays the same.",
  },
  {
    question: "Can I cancel any time?",
    answer:
      "Yes, no lock-in contracts. You can cancel your subscription at any time from your dashboard. We also offer a 30-day money-back guarantee — if Milo doesn't help you capture more leads in the first month, we'll refund every cent.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="pr-4 text-base font-semibold text-gray-900">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-gray-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-gray-500">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-milo-600 uppercase">
            FAQ
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Got questions?
          </h2>
        </div>

        {/* FAQ items */}
        <div className="rounded-2xl border border-gray-100 bg-white px-6 shadow-sm">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
