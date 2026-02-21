"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import ChatDemoSlide from "./ChatDemoSlide";
import ReviewSlide from "./ReviewSlide";
import FeaturesSlide from "./FeaturesSlide";

const INTERVAL_MS = 8000;
const SLIDE_COUNT = 3;
const ease = [0.16, 1, 0.3, 1] as const;

const slides = [ChatDemoSlide, ReviewSlide, FeaturesSlide];

export default function AuthCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDE_COUNT);
    }, INTERVAL_MS);
  }, []);

  useEffect(() => {
    if (!paused) startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, startTimer]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
    // Reset timer so user gets full 8s after clicking
    if (!paused) startTimer();
  };

  const ActiveComponent = slides[activeSlide];

  return (
    <div
      className="relative z-10 w-full max-w-[440px] px-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease }}
        >
          <ActiveComponent />
        </motion.div>
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="mt-8 flex justify-center gap-2.5">
        {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative flex items-center justify-center"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === activeSlide
                  ? "h-2.5 w-2.5 bg-terracotta"
                  : "h-2 w-2 bg-charcoal/20 hover:bg-charcoal/35"
              }`}
            />
            {/* Progress ring on active dot */}
            {i === activeSlide && !paused && (
              <svg
                className="absolute -inset-1 h-[18px] w-[18px]"
                viewBox="0 0 18 18"
              >
                <circle
                  cx="9"
                  cy="9"
                  r="7"
                  fill="none"
                  stroke="var(--color-terracotta)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="progress-ring"
                  style={{
                    animationDuration: `${INTERVAL_MS}ms`,
                  }}
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
