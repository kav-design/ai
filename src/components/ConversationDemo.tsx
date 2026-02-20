"use client";

import { useState } from "react";
import { Phone, Globe, MessageSquare, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

type Scenario = "missed-call" | "web-chat" | "follow-up";

const scenarios: Record<
  Scenario,
  {
    label: string;
    icon: typeof Phone;
    status: string;
    messages: { role: "ai" | "customer"; text: string }[];
  }
> = {
  "missed-call": {
    label: "Missed Call",
    icon: Phone,
    status: "Responding to missed call",
    messages: [
      {
        role: "ai",
        text: "Hey! Thanks for calling Bright Smile Dental. Sorry we missed you \u2014 how can we help? \ud83d\ude0a",
      },
      {
        role: "customer",
        text: "Hi, I need a check-up and clean. Haven\u2019t been in about 2 years...",
      },
      {
        role: "ai",
        text: "No worries at all \u2014 welcome back! \ud83d\ude04 A check-up and clean is $199. We\u2019ve got spots this week \u2014 Thursday or Friday work?",
      },
      {
        role: "customer",
        text: "Thursday arvo would be great!",
      },
      {
        role: "ai",
        text: "Perfect! 2:30pm or 4:00pm on Thursday. What\u2019s your name so I can book you in? \ud83d\udcdd",
      },
      {
        role: "customer",
        text: "James Cooper. 4pm works",
      },
      {
        role: "ai",
        text: "Awesome, James! Locked in for 4pm Thursday. You\u2019ll get a confirmation shortly. See you then! \ud83e\uddb7\u2728",
      },
    ],
  },
  "web-chat": {
    label: "Web Chat",
    icon: Globe,
    status: "Website visitor",
    messages: [
      {
        role: "ai",
        text: "Hi there! \ud83d\udc4b Welcome to Bright Smile Dental. How can I help?",
      },
      {
        role: "customer",
        text: "How much does teeth whitening cost?",
      },
      {
        role: "ai",
        text: "Great question! In-chair whitening starts from $495 \u2014 results in just one visit, 4\u20138 shades whiter! \u2728 Want to book a free consult?",
      },
      {
        role: "customer",
        text: "The in-chair one sounds good. Anything this week?",
      },
      {
        role: "ai",
        text: "Wednesday 11am or Friday 3pm available. Can I grab your name and number?",
      },
      {
        role: "customer",
        text: "Emma Zhao, 0412 345 678. Wednesday please!",
      },
      {
        role: "ai",
        text: "You\u2019re all set, Emma! Wednesday 11am. Confirmation text incoming. Can\u2019t wait for you to see the results! \ud83d\ude01",
      },
    ],
  },
  "follow-up": {
    label: "Follow-Up",
    icon: MessageSquare,
    status: "Automated follow-up \u2022 Day 1",
    messages: [
      {
        role: "ai",
        text: "Hey Sarah! Just checking in \u2014 did you still want to book that check-up? We\u2019ve got spots this week \ud83d\ude0a",
      },
      {
        role: "customer",
        text: "Oh yeah sorry, totally forgot! Yes please",
      },
      {
        role: "ai",
        text: "No worries! Thursday 10am or Friday 2pm \u2014 which works?",
      },
      {
        role: "customer",
        text: "Friday 2pm!",
      },
      {
        role: "ai",
        text: "Done! Friday 2pm. We\u2019ll text you a reminder the day before. See you soon, Sarah! \ud83e\uddb7",
      },
    ],
  },
};

export default function ConversationDemo() {
  const [active, setActive] = useState<Scenario>("missed-call");
  const s = scenarios[active];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Text content */}
          <ScrollReveal>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">
                See it in action
              </p>
              <h2 className="mb-5 text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-charcoal">
                Real conversations.
                <br />
                <span className="font-[family-name:var(--font-display)] italic text-terracotta">
                  Real bookings.
                </span>
              </h2>
              <p className="mb-10 max-w-md text-lg leading-relaxed text-body">
                Milo doesn&apos;t sound like a chatbot. Natural, helpful
                conversations that patients actually enjoy.
              </p>

              {/* Tab switcher */}
              <div className="flex flex-wrap gap-2">
                {(Object.keys(scenarios) as Scenario[]).map((key) => {
                  const Icon = scenarios[key].icon;
                  const isActive = active === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActive(key)}
                      className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-charcoal text-white"
                          : "text-body hover:text-charcoal font-medium border border-border hover:border-charcoal/20"
                      }`}
                    >
                      <Icon size={15} />
                      {scenarios[key].label}
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Chat panel */}
          <ScrollReveal delay={150}>
            <div className="mx-auto w-full max-w-md">
              <div className="bg-white rounded-2xl border border-border shadow-lg overflow-hidden">
                {/* Chat header */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
                  <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                      M
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-teal" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">
                      Milo AI
                    </p>
                    <p className="text-xs text-muted">{s.status}</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex max-h-[400px] flex-col gap-3 overflow-y-auto p-5">
                  {s.messages.map((msg, i) => (
                    <div
                      key={`${active}-${i}`}
                      className={`flex items-end gap-2 ${
                        msg.role === "customer"
                          ? "flex-row-reverse"
                          : "flex-row"
                      }`}
                    >
                      {/* Zap icon for AI messages */}
                      {msg.role === "ai" && (
                        <div className="flex-shrink-0 mb-1">
                          <Zap size={12} className="text-terracotta" />
                        </div>
                      )}

                      <div
                        className={`max-w-[84%] px-4 py-3 ${
                          msg.role === "ai"
                            ? "bg-teal text-white rounded-2xl rounded-tl-sm"
                            : "bg-cream-dark text-charcoal rounded-2xl rounded-tr-sm"
                        }`}
                      >
                        <p className="text-[13px] leading-[1.55]">
                          {msg.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input bar */}
                <div className="flex items-center gap-2 border-t border-border px-4 py-3">
                  <div className="flex-1 rounded-full bg-cream px-4 py-2.5 border border-border">
                    <p className="text-xs text-muted">Message...</p>
                  </div>
                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-teal hover:bg-teal/90 transition-colors">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 2L11 13" />
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
