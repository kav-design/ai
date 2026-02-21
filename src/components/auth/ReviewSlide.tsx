"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Star, Zap } from "lucide-react";
import { SnakeBorder } from "./SnakeBorder";

const smsMessages = [
  {
    role: "ai" as const,
    text: "Hi Sarah! Thanks for visiting Bright Smile Dental today. We hope everything went well! \ud83d\ude0a",
  },
  {
    role: "customer" as const,
    text: "It was great, thank you!",
  },
  {
    role: "ai" as const,
    text: "So glad to hear that! Would you mind leaving us a quick Google review? It really helps us out \u2764\ufe0f",
  },
  {
    role: "customer" as const,
    text: "Sure, happy to!",
  },
  {
    role: "ai" as const,
    text: "Amazing, here\u2019s the link: g.page/brightsmile/review \u2014 Thank you Sarah!",
  },
];

function ReviewCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative mt-6 rounded-xl bg-white p-4 shadow-lg shadow-terracotta/5"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className="text-gold fill-gold"
            />
          ))}
        </div>
        <span className="text-[11px] text-muted">Just now</span>
      </div>
      <p className="text-[13px] text-charcoal leading-relaxed">
        &ldquo;Best dental experience ever! The staff was so friendly and everything was seamless.&rdquo;
      </p>
      <p className="mt-1.5 text-[11px] font-medium text-charcoal">
        Sarah M.
      </p>
      <SnakeBorder label="Review collected" color="#B87333" />
    </motion.div>
  );
}

function SMSBubbles() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showReviewCard, setShowReviewCard] = useState(false);

  useEffect(() => {
    if (visibleCount >= smsMessages.length) {
      const t = setTimeout(() => setShowReviewCard(true), 600);
      return () => clearTimeout(t);
    }

    const delay = visibleCount === 0 ? 600 : 900;
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  return (
    <div>
      <div className="flex flex-col gap-3 py-4">
        {smsMessages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.role === "customer" ? "justify-end" : "justify-start"
            } transition-all duration-500 ${
              i < visibleCount
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-3 opacity-0"
            }`}
          >
            <div className="flex max-w-[82%] items-end gap-1.5">
              {msg.role === "ai" && (
                <Zap
                  size={12}
                  className="mb-2.5 flex-shrink-0 text-terracotta"
                  fill="currentColor"
                />
              )}
              <div className="relative">
                <div
                  className={`rounded-2xl px-4 py-2.5 ${
                    msg.role === "ai"
                      ? "rounded-tl-sm bg-terracotta text-white shadow-lg shadow-terracotta/10"
                      : "rounded-tr-sm bg-white text-charcoal shadow-md"
                  }`}
                >
                  <p className="text-[13px] leading-relaxed">{msg.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showReviewCard && <ReviewCard />}
    </div>
  );
}

export default function ReviewSlide() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8"
      >
        <h1 className="font-display text-[36px] leading-[1.12] text-charcoal">
          Reviews on{" "}
          <span className="gradient-text-copper">autopilot</span>
        </h1>
        <p className="mt-3 text-sm text-muted leading-relaxed">
          Milo follows up after every visit and collects 5-star reviews automatically.
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
        <SMSBubbles />
      </motion.div>

      <motion.div
        className="mt-8 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <span className="inline-flex items-center gap-1.5 rounded-full bg-terracotta/10 px-3 py-1 text-xs font-semibold text-terracotta">
          <Star size={12} fill="currentColor" />
          7x more reviews
        </span>
      </motion.div>
    </div>
  );
}
