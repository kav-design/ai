export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Left — branded visual */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center bg-[var(--color-charcoal)]">
        {/* Gradient orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--color-terracotta)] opacity-[0.08] blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[var(--color-teal)] opacity-[0.1] blur-[100px]" />

        <div className="relative z-10 px-16 max-w-lg">
          <img
            src="/logo.png"
            alt="Milo AI"
            className="h-12 mb-10 opacity-90"
          />
          <h1 className="font-display text-4xl text-white leading-tight mb-5">
            Never miss a patient again.
          </h1>
          <p className="text-[var(--color-light)] text-base leading-relaxed">
            Milo handles missed calls, books appointments, follows up with
            leads, and collects Google reviews — 24/7.
          </p>

          {/* Testimonial */}
          <div className="mt-12 border-l-2 border-[var(--color-terracotta)] pl-5">
            <p className="text-white/70 text-sm italic leading-relaxed">
              &ldquo;We recovered 34 patients in the first month that we
              would&apos;ve lost. Milo pays for itself many times over.&rdquo;
            </p>
            <p className="text-white/40 text-xs mt-3">
              Dr. Sarah Chen — Smile Lane Dental
            </p>
          </div>
        </div>
      </div>

      {/* Right — auth form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-[var(--color-cream)] px-6 py-12">
        <div className="w-full max-w-[420px]">{children}</div>
      </div>
    </div>
  );
}
