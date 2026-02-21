"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Zap } from "lucide-react";
import { SnakeBorder } from "./SnakeBorder";

const messages = [
  {
    role: "ai" as const,
    text: "Hey! Thanks for calling Bright Smile Dental. Sorry we missed you \u2014 how can we help?",
  },
  {
    role: "customer" as const,
    text: "Hi! I have a really bad toothache, need an emergency appointment",
  },
  {
    role: "ai" as const,
    text: "I\u2019m sorry to hear that! We can fit you in today. What\u2019s your name?",
  },
  {
    role: "customer" as const,
    text: "Sarah Mitchell",
  },
  {
    role: "ai" as const,
    text: "Thanks Sarah! I\u2019ve got 10:30am or 2pm today \u2014 which works?",
  },
  {
    role: "customer" as const,
    text: "2pm works!",
  },
  {
    role: "ai" as const,
    text: "You\u2019re all booked for 2pm today, Sarah! We\u2019ll text you a reminder. See you soon!",
  },
];

function FloatingBubbles() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [showBooked, setShowBooked] = useState(false);

  useEffect(() => {
    if (visibleCount >= messages.length) {
      const t = setTimeout(() => setShowBooked(true), 500);
      return () => clearTimeout(t);
    }

    if (visibleCount === 4 && !showLeadCapture) {
      setShowLeadCapture(true);
    }

    const delay = visibleCount === 0 ? 600 : 900;
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleCount, showLeadCapture]);

  return (
    <div className="flex flex-col gap-3 py-4">
      {messages.map((msg, i) => {
        const isLeadMsg = i === 3;
        const isBookedMsg = i === 6;
        const hasSnake =
          (isLeadMsg && showLeadCapture) || (isBookedMsg && showBooked);

        return (
          <div
            key={i}
            className={`flex ${
              msg.role === "customer" ? "justify-end" : "justify-start"
            } transition-all duration-500 ${
              i < visibleCount
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-3 opacity-0"
            } ${hasSnake ? "mb-5" : ""}`}
          >
            <div className="flex max-w-[82%] items-end gap-1.5">
              {msg.role === "ai" && (
                <Zap
                  size={12}
                  className="mb-2.5 flex-shrink-0 text-teal"
                  fill="currentColor"
                />
              )}
              <div className="relative">
                <div
                  className={`rounded-2xl px-4 py-2.5 ${
                    msg.role === "ai"
                      ? "rounded-tl-sm bg-teal text-white shadow-lg shadow-teal/10"
                      : "rounded-tr-sm bg-white text-charcoal shadow-md"
                  }`}
                >
                  <p className="text-[13px] leading-relaxed">{msg.text}</p>
                </div>
                {hasSnake && (
                  <SnakeBorder
                    label={isLeadMsg ? "Lead captured" : "Booked \u2713"}
                    color={isLeadMsg ? "#7a9e93" : "#22c55e"}
                  />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ChatDemoSlide() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8"
      >
        <h1 className="font-display text-[36px] leading-[1.12] text-charcoal">
          See Milo in{" "}
          <span className="gradient-text-copper">action</span>
        </h1>
        <p className="mt-3 text-sm text-muted leading-relaxed">
          A missed call turns into a booked patient in under 60 seconds.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <FloatingBubbles />
      </motion.div>

      <motion.p
        className="mt-8 text-xs text-muted text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        2-second response &middot; 24/7 availability &middot; No code setup
      </motion.p>
    </div>
  );
}
