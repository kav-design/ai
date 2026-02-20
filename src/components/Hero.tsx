"use client";

import { ArrowRight, Phone, MessageSquare, Star } from "lucide-react";

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px]">
      {/* Phone frame */}
      <div className="phone-shadow rounded-[3rem] border border-white/20 bg-navy-800 p-3">
        <div className="rounded-[2.4rem] bg-gray-950 pb-6 pt-2 overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-8 py-2 text-xs text-gray-400">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="h-2.5 w-4 rounded-sm bg-gray-400" />
              <div className="h-2.5 w-2.5 rounded-full border border-gray-400" />
            </div>
          </div>

          {/* Chat header */}
          <div className="mb-3 flex items-center gap-3 border-b border-gray-800 px-5 pb-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-milo-500 to-emerald-500 text-xs font-bold text-white">
              M
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Milo AI</p>
              <p className="text-xs text-emerald-400">Online now</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex flex-col gap-3 px-4">
            {/* Milo message */}
            <div className="max-w-[85%] self-start">
              <div className="rounded-2xl rounded-tl-md bg-navy-700 px-4 py-2.5">
                <p className="text-[13px] leading-relaxed text-gray-100">
                  Hey! Thanks for calling Bright Smile Dental. Sorry we missed you — how can we help? 😊
                </p>
              </div>
              <p className="mt-1 px-1 text-[10px] text-gray-500">9:41 AM</p>
            </div>

            {/* Customer message */}
            <div className="max-w-[80%] self-end">
              <div className="rounded-2xl rounded-tr-md bg-milo-600 px-4 py-2.5">
                <p className="text-[13px] leading-relaxed text-white">
                  Hi! I need an emergency appointment, I have a really bad toothache
                </p>
              </div>
              <p className="mt-1 px-1 text-right text-[10px] text-gray-500">
                9:42 AM
              </p>
            </div>

            {/* Milo response */}
            <div className="max-w-[85%] self-start">
              <div className="rounded-2xl rounded-tl-md bg-navy-700 px-4 py-2.5">
                <p className="text-[13px] leading-relaxed text-gray-100">
                  Oh no, I&apos;m sorry to hear that! 😟 We can definitely fit you in as an emergency today. What&apos;s your name so I can book you in?
                </p>
              </div>
              <p className="mt-1 px-1 text-[10px] text-gray-500">9:42 AM</p>
            </div>

            {/* Customer message */}
            <div className="max-w-[80%] self-end">
              <div className="rounded-2xl rounded-tr-md bg-milo-600 px-4 py-2.5">
                <p className="text-[13px] leading-relaxed text-white">
                  Sarah Mitchell
                </p>
              </div>
            </div>

            {/* Typing indicator */}
            <div className="max-w-[30%] self-start">
              <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-md bg-navy-700 px-4 py-3">
                <span className="typing-dot h-2 w-2 rounded-full bg-gray-400" />
                <span className="typing-dot h-2 w-2 rounded-full bg-gray-400" />
                <span className="typing-dot h-2 w-2 rounded-full bg-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notification popup */}
      <div className="absolute -right-4 top-20 animate-float-delayed rounded-2xl border border-white/10 bg-navy-800/90 p-3 shadow-2xl backdrop-blur-sm sm:-right-12">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
            <Star size={14} className="text-emerald-400" />
          </div>
          <div>
            <p className="text-xs font-semibold text-white">New Lead Captured</p>
            <p className="text-[10px] text-gray-400">Sarah M. — Emergency</p>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-20 -z-10 rounded-full bg-milo-500/10 blur-3xl" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-navy-900 pt-16">
      {/* Background gradients */}
      <div className="hero-gradient absolute inset-0" />
      <div className="animate-pulse-glow absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-milo-500/5 blur-3xl" />
      <div className="animate-pulse-glow absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 sm:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-milo-500/30 bg-milo-500/10 px-4 py-1.5">
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-milo-300">
                Built for Australian dental clinics
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Never miss a{" "}
              <span className="gradient-text">patient</span>{" "}
              again
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-gray-400 lg:mx-0 lg:text-xl">
              Milo is your AI employee that answers missed calls via SMS,
              books appointments, follows up with leads, and collects
              Google reviews — all on autopilot, 24/7.
            </p>

            {/* Stats row */}
            <div className="mb-8 flex flex-wrap justify-center gap-8 lg:justify-start">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-milo-400" />
                <span className="text-sm text-gray-300">
                  <strong className="text-white">2 sec</strong> response time
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare size={18} className="text-emerald-400" />
                <span className="text-sm text-gray-300">
                  <strong className="text-white">24/7</strong> availability
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={18} className="text-amber-400" />
                <span className="text-sm text-gray-300">
                  <strong className="text-white">3x</strong> more reviews
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#pricing"
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-milo-500 to-milo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-milo-500/25 transition-all hover:shadow-xl hover:shadow-milo-500/30"
              >
                Start Free Trial
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#how-it-works"
                className="flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-gray-300 transition-all hover:border-white/30 hover:text-white"
              >
                See How it Works
              </a>
            </div>
          </div>

          {/* Right - Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
