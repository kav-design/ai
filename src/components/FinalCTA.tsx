import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="section-line" />

      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-80" />
      <div className="absolute left-[30%] top-[20%] h-[500px] w-[500px] orb orb-blue opacity-30" />
      <div className="absolute right-[20%] bottom-[10%] h-[400px] w-[400px] orb orb-violet opacity-20" />

      <div className="relative mx-auto max-w-4xl px-6 pt-32 text-center lg:px-8">
        <ScrollReveal>
          {/* Urgency badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-400/10 px-5 py-2">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose-400" />
            <span className="text-[12px] font-medium text-rose-300">
              80% of patient leads are lost in the first 5 minutes
            </span>
          </div>

          <h2 className="mb-6 text-[2.5rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white sm:text-[3.5rem]">
            Stop losing patients to{" "}
            <span className="gradient-text">missed calls</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-[17px] leading-relaxed text-gray-400">
            Every missed call is a patient choosing your competitor. Milo
            responds in 2 seconds, books them in, and follows up until
            they&apos;re in your chair.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="btn-glow group flex items-center gap-2 rounded-full bg-gradient-to-r from-milo-500 via-violet-500 to-milo-500 bg-[length:200%_100%] px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-right"
            >
              Start Your Free Trial
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-8 py-4 text-[15px] font-medium text-gray-300 transition-all hover:border-white/[0.15] hover:bg-white/[0.04]"
            >
              Book a Demo
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[12px] text-gray-600">
            <span>14-day free trial</span>
            <span className="h-1 w-1 rounded-full bg-gray-700" />
            <span>No credit card required</span>
            <span className="h-1 w-1 rounded-full bg-gray-700" />
            <span>Cancel any time</span>
            <span className="h-1 w-1 rounded-full bg-gray-700" />
            <span>30-day money-back guarantee</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
