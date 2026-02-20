"use client";

import { useEffect, useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const transcriptLines = [
  {
    speaker: "milo" as const,
    text: "Good morning, Bright Smile Dental. This is Milo, how can I help?",
  },
  {
    speaker: "patient" as const,
    text: "I\u2019d like to book a teeth cleaning for next week.",
  },
  {
    speaker: "milo" as const,
    text: "I have Tuesday 10am or Thursday 2pm. Which works better?",
  },
  {
    speaker: "patient" as const,
    text: "Thursday at 2pm would be perfect.",
  },
];

function WaveformVisualizer() {
  const barCount = 36;

  return (
    <div className="flex h-[120px] items-center justify-center gap-[3px]">
      {Array.from({ length: barCount }).map((_, i) => (
        <div
          key={i}
          className="waveform-bar w-1 rounded-full bg-teal"
          style={{
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${0.8 + Math.random() * 0.8}s`,
            height: "100%",
          }}
        />
      ))}
    </div>
  );
}

function LiveCallCard() {
  const [seconds, setSeconds] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);

  // Timer counting up from 0:00
  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  // Transcript lines appearing one at a time
  useEffect(() => {
    if (visibleLines >= transcriptLines.length) return;
    const delay = visibleLines === 0 ? 2500 : 2500;
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), delay);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
      {/* Call status header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-sm font-semibold text-emerald-400">
              Live Call
            </span>
          </div>
          <span className="font-mono text-sm text-white/50">
            {formatTime(seconds)}
          </span>
        </div>
        <p className="mt-1 text-sm text-white/40">Milo AI &rarr; Patient</p>
      </div>

      {/* Waveform */}
      <WaveformVisualizer />

      {/* Live transcript */}
      <div className="mt-6 border-t border-white/10 pt-5">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-white/30">
          Live Transcript
        </p>
        <div className="flex flex-col gap-2.5">
          {transcriptLines.slice(0, visibleLines).map((line, i) => (
            <p
              key={i}
              className={`bubble-in text-[13px] leading-relaxed ${
                line.speaker === "milo" ? "text-teal" : "text-white/70"
              }`}
            >
              <span className="font-semibold">
                {line.speaker === "milo" ? "Milo: " : "Patient: "}
              </span>
              {line.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function VoiceAgent() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
      {/* Subtle organic shape */}
      <div
        className="organic-shape absolute -right-40 top-0 h-[500px] w-[500px] opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(122,158,147,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left column - Content */}
          <ScrollReveal>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                AI Voice Agent
              </p>
              <h2 className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
                Hear Milo{" "}
                <span className="font-[family-name:var(--font-display)] italic text-terracotta">
                  answer
                </span>{" "}
                your phone.
              </h2>
              <p className="mb-8 max-w-md text-[17px] leading-relaxed text-white/70">
                When patients call and you can&apos;t pick up, Milo answers with
                a natural AI voice. It books appointments, answers FAQs, and
                transfers to staff when needed.
              </p>

              {/* Play button */}
              <a
                href="#pricing"
                className="mb-10 inline-flex items-center gap-3 rounded-full bg-terracotta px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-terracotta-dark"
              >
                <span className="text-lg">&#9654;</span>
                Listen to a sample call
              </a>

              {/* Feature bullets */}
              <div className="mt-8 flex flex-col gap-4">
                {[
                  "Natural conversational voice",
                  "Books directly into your calendar",
                  "Handles after-hours & overflow",
                  "Transfers to staff for complex cases",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="text-sm text-white/60">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right column - Animated Waveform Visualization */}
          <ScrollReveal delay={150}>
            <LiveCallCard />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
