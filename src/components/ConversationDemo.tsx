"use client";

import { useState } from "react";
import { Phone, Globe, MessageSquare } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

type Scenario = "missed-call" | "web-chat" | "follow-up";

const scenarios: Record<Scenario, {
  label: string;
  icon: typeof Phone;
  status: string;
  messages: { role: "ai" | "customer"; text: string }[];
}> = {
  "missed-call": {
    label: "Missed Call",
    icon: Phone,
    status: "Responding to missed call",
    messages: [
      { role: "ai", text: "Hey! Thanks for calling Bright Smile Dental. Sorry we missed you \u2014 how can we help? \ud83d\ude0a" },
      { role: "customer", text: "Hi, I need a check-up and clean. Haven\u2019t been in about 2 years..." },
      { role: "ai", text: "No worries at all \u2014 welcome back! \ud83d\ude04 A check-up and clean is $199. We\u2019ve got spots this week \u2014 Thursday or Friday work?" },
      { role: "customer", text: "Thursday arvo would be great!" },
      { role: "ai", text: "Perfect! 2:30pm or 4:00pm on Thursday. What\u2019s your name so I can book you in? \ud83d\udcdd" },
      { role: "customer", text: "James Cooper. 4pm works" },
      { role: "ai", text: "Awesome, James! Locked in for 4pm Thursday. You\u2019ll get a confirmation shortly. See you then! \ud83e\uddb7\u2728" },
    ],
  },
  "web-chat": {
    label: "Web Chat",
    icon: Globe,
    status: "Website visitor",
    messages: [
      { role: "ai", text: "Hi there! \ud83d\udc4b Welcome to Bright Smile Dental. How can I help?" },
      { role: "customer", text: "How much does teeth whitening cost?" },
      { role: "ai", text: "Great question! In-chair whitening starts from $495 \u2014 results in just one visit, 4\u20138 shades whiter! \u2728 Want to book a free consult?" },
      { role: "customer", text: "The in-chair one sounds good. Anything this week?" },
      { role: "ai", text: "Wednesday 11am or Friday 3pm available. Can I grab your name and number?" },
      { role: "customer", text: "Emma Zhao, 0412 345 678. Wednesday please!" },
      { role: "ai", text: "You\u2019re all set, Emma! Wednesday 11am. Confirmation text incoming. Can\u2019t wait for you to see the results! \ud83d\ude01" },
    ],
  },
  "follow-up": {
    label: "Follow-Up",
    icon: MessageSquare,
    status: "Automated follow-up \u2022 Day 1",
    messages: [
      { role: "ai", text: "Hey Sarah! Just checking in \u2014 did you still want to book that check-up? We\u2019ve got spots this week \ud83d\ude0a" },
      { role: "customer", text: "Oh yeah sorry, totally forgot! Yes please" },
      { role: "ai", text: "No worries! Thursday 10am or Friday 2pm \u2014 which works?" },
      { role: "customer", text: "Friday 2pm!" },
      { role: "ai", text: "Done! Friday 2pm. We\u2019ll text you a reminder the day before. See you soon, Sarah! \ud83e\uddb7" },
    ],
  },
};

export default function ConversationDemo() {
  const [active, setActive] = useState<Scenario>("missed-call");
  const s = scenarios[active];

  return (
    <section className="relative py-32">
      <div className="section-line" />
      <div className="absolute left-[-5%] top-[30%] h-[400px] w-[400px] orb orb-emerald opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <ScrollReveal>
            <div>
              <p className="mb-4 text-[11px] font-semibold tracking-[0.15em] text-milo-400 uppercase">
                See it in action
              </p>
              <h2 className="mb-5 text-[2.5rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white sm:text-[3rem]">
                Real conversations.
                <br />
                <span className="gradient-text">Real bookings.</span>
              </h2>
              <p className="mb-10 max-w-md text-[16px] leading-relaxed text-gray-400">
                Milo doesn&apos;t sound like a chatbot. Natural, helpful
                conversations that patients actually enjoy.
              </p>

              {/* Tabs */}
              <div className="flex flex-wrap gap-2">
                {(Object.keys(scenarios) as Scenario[]).map((key) => {
                  const Icon = scenarios[key].icon;
                  return (
                    <button
                      key={key}
                      onClick={() => setActive(key)}
                      className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                        active === key
                          ? "bg-gradient-to-r from-milo-500 to-violet-500 text-white shadow-lg shadow-milo-500/20"
                          : "border border-white/[0.06] bg-white/[0.02] text-gray-400 hover:border-white/[0.1] hover:text-white"
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

          {/* Right - Chat */}
          <ScrollReveal delay={150}>
            <div className="mx-auto w-full max-w-md">
              <div className="glass overflow-hidden rounded-3xl">
                {/* Header */}
                <div className="flex items-center gap-3 border-b border-white/[0.04] px-5 py-4">
                  <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-milo-400 via-violet-500 to-emerald-400 text-xs font-bold text-white">
                      M
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-navy-800 bg-emerald-400" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-white">
                      Milo AI
                    </p>
                    <p className="text-[11px] text-gray-500">{s.status}</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex max-h-[380px] flex-col gap-2.5 overflow-y-auto p-4">
                  {s.messages.map((msg, i) => (
                    <div
                      key={`${active}-${i}`}
                      className={`flex flex-col ${
                        msg.role === "customer" ? "items-end" : "items-start"
                      }`}
                    >
                      <div
                        className={`max-w-[84%] rounded-2xl px-3.5 py-2.5 ${
                          msg.role === "ai"
                            ? "rounded-tl-sm bg-white/[0.05] ring-1 ring-white/[0.04]"
                            : "rounded-tr-sm bg-gradient-to-br from-milo-500 to-violet-500"
                        }`}
                      >
                        <p className={`text-[13px] leading-[1.5] ${
                          msg.role === "ai" ? "text-gray-200" : "text-white"
                        }`}>
                          {msg.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="flex items-center gap-2 border-t border-white/[0.04] px-4 py-3">
                  <div className="flex-1 rounded-full bg-white/[0.03] px-4 py-2.5 ring-1 ring-white/[0.04]">
                    <p className="text-[12px] text-gray-600">Message...</p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-milo-500 to-violet-500">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13" /><path d="M22 2L15 22L11 13L2 9L22 2Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
