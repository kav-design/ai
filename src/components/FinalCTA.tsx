import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-cream-dark" />
      <div className="organic-shape organic-sage" />
      <div className="organic-shape organic-gold" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <ScrollReveal>
          {/* Urgency badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-terracotta-light px-4 py-2">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-terracotta" />
            <span className="text-xs font-medium text-terracotta">
              80% of patient leads are lost in the first 5 minutes
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
            Stop losing patients to{" "}
            <span className="font-[family-name:var(--font-display)] italic text-terracotta">
              missed calls
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-body">
            Every missed call is a patient choosing your competitor. Milo
            responds in 2 seconds, books them in, and follows up until
            they&apos;re in your chair.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="group flex items-center gap-2 rounded-full bg-terracotta px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
            >
              Start Your Free Trial
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#"
              className="rounded-full border-2 border-charcoal px-8 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:bg-charcoal hover:text-white"
            >
              Book a Demo
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-muted">
            <span>14-day free trial</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>No credit card required</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>Cancel any time</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>30-day money-back guarantee</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
