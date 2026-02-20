import { ArrowRight, Phone, Clock, Star } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-milo-600/20 via-transparent to-emerald-500/10" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-milo-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {/* Stat highlight */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-400/10 px-5 py-2">
          <Clock size={16} className="text-rose-400" />
          <span className="text-sm font-medium text-rose-300">
            80% of patient leads are lost in the first 5 minutes
          </span>
        </div>

        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Stop losing patients to{" "}
          <span className="gradient-text">missed calls</span>
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400">
          Every missed call is a patient choosing your competitor. Milo responds
          in 2 seconds, books them in, and follows up until they&apos;re in
          your chair. Start your free trial today.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-milo-500 to-milo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-milo-500/25 transition-all hover:shadow-xl hover:shadow-milo-500/30"
          >
            Start Your Free Trial
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-gray-300 transition-all hover:border-white/30 hover:text-white"
          >
            <Phone size={18} />
            Book a Demo
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <Star size={14} className="text-amber-400" />
            14-day free trial
          </span>
          <span>No credit card required</span>
          <span>Cancel any time</span>
          <span>30-day money-back guarantee</span>
        </div>
      </div>
    </section>
  );
}
