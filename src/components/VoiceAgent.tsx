"use client";

import { useEffect, useState } from "react";
import { Phone, Mic, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const transcript = [
  {
    speaker: "milo" as const,
    text: "Good morning, Bright Smile Dental. This is Milo, how can I help you today?",
  },
  {
    speaker: "caller" as const,
    text: "Hi, I'd like to book a teeth cleaning appointment for next week.",
  },
  {
    speaker: "milo" as const,
    text: "Of course! I have availability on Tuesday at 10am or Thursday at 2pm. Which works better for you?",
  },
  {
    speaker: "caller" as const,
    text: "Thursday at 2pm would be perfect.",
  },
  {
    speaker: "milo" as const,
    text: "Great! I've booked you in for Thursday at 2pm. Can I grab your name and a contact number?",
  },
];

function AnimatedCall() {
  const [phase, setPhase] = useState<"ringing" | "connected" | "transcript">("ringing");
  const [seconds, setSeconds] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("connected"), 2000);
    const t2 = setTimeout(() => setPhase("transcript"), 3200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    if (phase !== "connected" && phase !== "transcript") return;
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== "transcript") return;
    if (visibleLines >= transcript.length) return;
    const timer = setTimeout(
      () => setVisibleLines((v) => v + 1),
      visibleLines === 0 ? 800 : 2000 + Math.random() * 800
    );
    return () => clearTimeout(timer);
  }, [phase, visibleLines]);

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div className="rounded-2xl border border-border bg-white shadow-xl overflow-hidden">
      {/* Call header */}
      <div className="bg-charcoal px-6 py-5 text-center">
        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-teal">
          {phase === "ringing" ? (
            <Phone size={24} className="animate-pulse text-white" />
          ) : (
            <Mic size={24} className="text-white" />
          )}
        </div>
        <p className="text-sm font-semibold text-white">
          {phase === "ringing" ? "Incoming Call..." : "Milo AI — Connected"}
        </p>
        <p className="text-xs text-white/60">
          {phase === "ringing" ? "0412 345 678" : `0412 345 678 · ${formatTime(seconds)}`}
        </p>
        {phase === "ringing" && (
          <div className="mt-3 flex justify-center gap-1">
            <span className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-400" style={{ animationDelay: "0ms" }} />
            <span className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-400" style={{ animationDelay: "150ms" }} />
            <span className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-400" style={{ animationDelay: "300ms" }} />
          </div>
        )}
        {phase !== "ringing" && (
          <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-[10px] font-medium text-emerald-400">Live</span>
          </div>
        )}
      </div>

      {/* Live transcript */}
      <div className="min-h-[260px] px-5 py-4">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted">
          Live Transcript
        </p>
        <div className="flex flex-col gap-3">
          {transcript.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="msg-left flex gap-2.5">
              <div
                className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${
                  line.speaker === "milo"
                    ? "bg-teal text-white"
                    : "bg-cream-dark text-body"
                }`}
              >
                {line.speaker === "milo" ? "M" : "C"}
              </div>
              <div>
                <p className="text-[10px] font-semibold text-muted">
                  {line.speaker === "milo" ? "Milo AI" : "Caller"}
                </p>
                <p className="text-[13px] leading-relaxed text-charcoal">
                  {line.text}
                </p>
              </div>
            </div>
          ))}
          {phase === "transcript" && visibleLines < transcript.length && (
            <div className="msg-left flex items-center gap-2 text-xs text-muted">
              <div className="flex gap-1">
                <span className="typing-dot h-1 w-1 rounded-full bg-teal" />
                <span className="typing-dot h-1 w-1 rounded-full bg-teal" />
                <span className="typing-dot h-1 w-1 rounded-full bg-teal" />
              </div>
              Transcribing...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function VoiceAgent() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="organic-shape organic-teal absolute -right-32 top-1/4 h-[400px] w-[400px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Content */}
          <ScrollReveal>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-terracotta">
                AI Voice Agent
              </p>
              <h2 className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight text-charcoal sm:text-5xl">
                Answers your phone with a{" "}
                <span className="font-[family-name:var(--font-display)] italic text-terracotta">
                  real voice.
                </span>
              </h2>
              <p className="mb-8 max-w-md text-[17px] leading-relaxed text-body">
                When patients call and you can&apos;t pick up, Milo answers with a
                natural-sounding AI voice. It handles scheduling, answers FAQs,
                and transfers to your team when needed.
              </p>

              <div className="mb-8 flex flex-col gap-4">
                {[
                  "Natural conversational voice — patients can't tell it's AI",
                  "Books appointments directly into your calendar",
                  "Handles after-hours and overflow calls",
                  "Seamlessly transfers to staff for complex cases",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal-light">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#5f8577" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="text-sm text-body">{point}</p>
                  </div>
                ))}
              </div>

              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-terracotta transition-colors hover:text-terracotta-dark"
              >
                Try the voice agent
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </ScrollReveal>

          {/* Right - Animated call */}
          <ScrollReveal delay={150}>
            <div className="mx-auto w-full max-w-sm">
              <AnimatedCall />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
