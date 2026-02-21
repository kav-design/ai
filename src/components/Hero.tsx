"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

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

function SnakeBorder({ label, color }: { label: string; color: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const rectRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const rect = rectRef.current;
    if (!svg || !rect) return;

    const { width, height } = svg.getBoundingClientRect();
    const inset = 3;
    rect.setAttribute("x", String(inset));
    rect.setAttribute("y", String(inset));
    rect.setAttribute("width", String(Math.max(0, width - inset * 2)));
    rect.setAttribute("height", String(Math.max(0, height - inset * 2)));

    const totalLength = rect.getTotalLength();
    rect.style.strokeDasharray = `${totalLength}`;
    rect.style.strokeDashoffset = `${totalLength}`;

    requestAnimationFrame(() => {
      if (rect) {
        rect.style.transition =
          "stroke-dashoffset 1.4s cubic-bezier(0.16, 1, 0.3, 1)";
        rect.style.strokeDashoffset = "0";
      }
    });
  }, []);

  return (
    <>
      <svg
        ref={svgRef}
        className="pointer-events-none absolute"
        style={{
          top: "-3px",
          left: "-3px",
          width: "calc(100% + 6px)",
          height: "calc(100% + 6px)",
        }}
        fill="none"
      >
        <rect
          ref={rectRef}
          rx="14"
          ry="14"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      <span
        className="absolute -bottom-[18px] left-1 text-[10px] font-semibold tracking-wide animate-in"
        style={{ color }}
      >
        {label}
      </span>
    </>
  );
}

function FloatingBubbles() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [showBooked, setShowBooked] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visibleCount >= messages.length) {
      const t = setTimeout(() => setShowBooked(true), 500);
      return () => clearTimeout(t);
    }

    if (visibleCount === 4 && !showLeadCapture) {
      setShowLeadCapture(true);
    }

    const delay = visibleCount === 0 ? 500 : 800;
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleCount, showLeadCapture]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleCount]);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex flex-col gap-2.5 pt-2 pb-8"
      >
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
              } ${hasSnake ? "mb-4" : ""}`}
            >
              <div className="flex max-w-[82%] items-end gap-1.5">
                {msg.role === "ai" && (
                  <Zap
                    size={11}
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
    </div>
  );
}

const roles = [
  "Receptionist",
  "Appointment Booker",
  "Review Collector",
  "Follow-Up Specialist",
  "After-Hours Agent",
];

function RoleTyper() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = roles[roleIndex];

    if (!isDeleting) {
      setText(current.slice(0, text.length + 1));
      if (text.length + 1 === current.length) {
        setTimeout(() => setIsDeleting(true), 1800);
        return;
      }
    } else {
      setText(current.slice(0, text.length - 1));
      if (text.length - 1 === 0) {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
        return;
      }
    }
  }, [text, isDeleting, roleIndex]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <p className="mb-5 text-sm font-medium tracking-wide text-muted lg:text-base">
      Your AI{" "}
      <span className="text-terracotta">
        {text}
        <span className="ml-[1px] inline-block w-[2px] animate-pulse bg-terracotta align-middle" style={{ height: "1.1em" }} />
      </span>
    </p>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const bgY3 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const bgY4 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      {/* Organic background shapes with parallax */}
      <motion.div style={{ y: bgY1 }} className="absolute -top-40 -left-32">
        <div className="organic-shape organic-sage float-slow h-[600px] w-[600px]" />
      </motion.div>
      <motion.div style={{ y: bgY2 }} className="absolute -top-20 -right-40">
        <div className="organic-shape organic-gold float-medium h-[650px] w-[650px]" />
      </motion.div>
      <motion.div style={{ y: bgY3 }} className="absolute -bottom-32 left-1/3">
        <div className="organic-shape organic-blue float-fast h-[500px] w-[500px]" />
      </motion.div>
      <motion.div style={{ y: bgY4 }} className="absolute top-20 right-1/4">
        <div className="organic-shape organic-copper float-medium h-[400px] w-[400px]" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <RoleTyper />

            <h1 className="mb-6 text-[2.75rem] font-bold leading-[1.08] tracking-tight text-charcoal sm:text-5xl lg:text-[3.5rem]">
              Turn missed calls into{" "}
              <br />
              <span className="gradient-text-copper">booked patients.</span>
            </h1>

            <p className="mx-auto mb-10 max-w-lg text-[17px] leading-relaxed text-body lg:mx-0">
              Milo responds in 2 seconds via SMS and voice, books appointments,
              follows up with leads, and collects Google reviews &mdash; 24/7, on
              autopilot.
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2.5 rounded-full bg-terracotta px-8 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-terracotta-dark"
              >
                Start Free Trial
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border-2 border-charcoal px-8 py-3.5 text-[15px] font-semibold text-charcoal transition-colors hover:bg-charcoal hover:text-white"
              >
                See How It Works
              </a>
            </div>

            {/* Proof points */}
            <div className="mt-12 flex items-center justify-center gap-0 lg:justify-start">
              {[
                { value: "2s", label: "Response time", color: "text-teal" },
                { value: "24/7", label: "Availability", color: "text-terracotta" },
                { value: "3x", label: "More bookings", color: "text-charcoal" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  {i > 0 && <div className="mx-6 h-8 w-px bg-border" />}
                  <div className="text-center lg:text-left">
                    <p
                      className={`text-2xl font-bold tracking-tight ${stat.color}`}
                    >
                      {stat.value}
                    </p>
                    <p className="text-[11px] text-muted">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Floating chat bubbles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[420px]">
              <FloatingBubbles />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
