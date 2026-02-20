"use client";

import { useState } from "react";
import { MessageSquare, Phone, Globe } from "lucide-react";

type Scenario = "missed-call" | "web-chat" | "follow-up";

const scenarios: Record<
  Scenario,
  {
    label: string;
    icon: typeof MessageSquare;
    messages: { role: "ai" | "customer"; text: string; time: string }[];
  }
> = {
  "missed-call": {
    label: "Missed Call",
    icon: Phone,
    messages: [
      {
        role: "ai",
        text: "Hey! Thanks for calling Bright Smile Dental. Sorry we missed you \u2014 how can we help? \ud83d\ude0a",
        time: "2:14 PM",
      },
      {
        role: "customer",
        text: "Hi, I need a check-up and clean. Haven't been to the dentist in about 2 years...",
        time: "2:15 PM",
      },
      {
        role: "ai",
        text: "No worries at all \u2014 welcome back! \ud83d\ude04 We love seeing patients who are ready to get back on track. A check-up and clean is $199. We\u2019ve got spots available this week \u2014 would Thursday or Friday work for you?",
        time: "2:15 PM",
      },
      {
        role: "customer",
        text: "Thursday arvo would be great!",
        time: "2:16 PM",
      },
      {
        role: "ai",
        text: "Perfect! I\u2019ve got a 2:30pm or 4:00pm on Thursday. What\u2019s your name so I can book you in? \ud83d\udcdd",
        time: "2:16 PM",
      },
      {
        role: "customer",
        text: "James Cooper. 4pm works",
        time: "2:17 PM",
      },
      {
        role: "ai",
        text: "Awesome, James! I\u2019ll lock in 4:00pm Thursday for your check-up and clean. You\u2019ll get a confirmation shortly. See you then! \ud83e\uddb7\u2728",
        time: "2:17 PM",
      },
    ],
  },
  "web-chat": {
    label: "Web Chat",
    icon: Globe,
    messages: [
      {
        role: "ai",
        text: "Hi there! \ud83d\udc4b Welcome to Bright Smile Dental. How can I help you today?",
        time: "10:02 AM",
      },
      {
        role: "customer",
        text: "How much does teeth whitening cost?",
        time: "10:03 AM",
      },
      {
        role: "ai",
        text: "Great question! Our professional in-chair whitening starts from $495, and we also offer take-home kits from $295. The in-chair option gives you results in just one visit \u2014 most patients see 4\u20138 shades whiter! \u2728 Would you like to book a free consultation?",
        time: "10:03 AM",
      },
      {
        role: "customer",
        text: "The in-chair one sounds good. Do you have anything this week?",
        time: "10:04 AM",
      },
      {
        role: "ai",
        text: "We do! I\u2019ve got Wednesday at 11am or Friday at 3pm available. Can I grab your name and number to book you in?",
        time: "10:04 AM",
      },
      {
        role: "customer",
        text: "Emma Zhao, 0412 345 678. Wednesday please!",
        time: "10:05 AM",
      },
      {
        role: "ai",
        text: "You\u2019re all set, Emma! Wednesday 11am for your whitening session. We\u2019ll send you a confirmation text shortly. Can\u2019t wait for you to see the results! \ud83d\ude01",
        time: "10:05 AM",
      },
    ],
  },
  "follow-up": {
    label: "Follow-Up",
    icon: MessageSquare,
    messages: [
      {
        role: "ai",
        text: "Hey Sarah! Just checking in \u2014 did you still want to book that check-up and clean? We\u2019ve got a few spots this week \ud83d\ude0a",
        time: "Mon 9:00 AM",
      },
      {
        role: "customer",
        text: "Oh yeah sorry, totally forgot! Yes please",
        time: "Mon 11:22 AM",
      },
      {
        role: "ai",
        text: "No worries at all! I\u2019ve got Thursday at 10am or Friday at 2pm. Which works better for you?",
        time: "Mon 11:22 AM",
      },
      {
        role: "customer",
        text: "Friday 2pm!",
        time: "Mon 11:24 AM",
      },
      {
        role: "ai",
        text: "Done! You\u2019re booked in for Friday at 2pm. We\u2019ll text you a reminder the day before. See you soon, Sarah! \ud83e\uddb7",
        time: "Mon 11:24 AM",
      },
    ],
  },
};

export default function ConversationDemo() {
  const [active, setActive] = useState<Scenario>("missed-call");
  const scenario = scenarios[active];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <p className="mb-3 text-sm font-semibold tracking-wide text-milo-600 uppercase">
              See Milo in action
            </p>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Real conversations.{" "}
              <span className="gradient-text">Real bookings.</span>
            </h2>
            <p className="mb-8 max-w-lg text-lg text-gray-500">
              Milo doesn&apos;t sound like a robot. It has natural, helpful
              conversations that patients actually enjoy — across SMS, web chat,
              and follow-ups.
            </p>

            {/* Scenario tabs */}
            <div className="flex flex-wrap gap-3">
              {(Object.keys(scenarios) as Scenario[]).map((key) => {
                const s = scenarios[key];
                const Icon = s.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setActive(key)}
                    className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                      active === key
                        ? "bg-milo-600 text-white shadow-md shadow-milo-500/25"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <Icon size={16} />
                    {s.label}
                  </button>
                );
              })}
            </div>

            {/* Key stats for current scenario */}
            <div className="mt-8 flex gap-6">
              <div>
                <p className="text-2xl font-bold text-gray-900">~2 min</p>
                <p className="text-sm text-gray-500">Avg. to qualified lead</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">93%</p>
                <p className="text-sm text-gray-500">Patient satisfaction</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">24/7</p>
                <p className="text-sm text-gray-500">Always available</p>
              </div>
            </div>
          </div>

          {/* Right - Chat mockup */}
          <div className="mx-auto w-full max-w-md">
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-1 shadow-xl shadow-gray-200/50">
              {/* Chat header */}
              <div className="flex items-center gap-3 rounded-t-[22px] bg-white px-5 py-4 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-milo-500 to-emerald-500 text-sm font-bold text-white">
                  M
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Milo AI &mdash; Bright Smile Dental
                  </p>
                  <div className="flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                    <p className="text-xs text-gray-500">
                      {active === "missed-call"
                        ? "Responding to missed call"
                        : active === "web-chat"
                          ? "Website visitor"
                          : "Automated follow-up"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex max-h-[420px] flex-col gap-3 overflow-y-auto px-4 py-4">
                {scenario.messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${
                      msg.role === "customer" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                        msg.role === "ai"
                          ? "rounded-tl-md bg-white shadow-sm ring-1 ring-gray-100"
                          : "rounded-tr-md bg-milo-600 text-white"
                      }`}
                    >
                      <p className="text-[13px] leading-relaxed">{msg.text}</p>
                    </div>
                    <p className="mt-1 px-1 text-[10px] text-gray-400">
                      {msg.time}
                    </p>
                  </div>
                ))}
              </div>

              {/* Input area */}
              <div className="flex items-center gap-2 rounded-b-[22px] border-t border-gray-100 bg-white px-4 py-3">
                <div className="flex-1 rounded-full bg-gray-100 px-4 py-2">
                  <p className="text-sm text-gray-400">Type a message...</p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-milo-600">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
