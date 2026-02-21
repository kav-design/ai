export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Left — branded visual */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center bg-[var(--color-cream)]">
        {/* Flowing gradient washes — matching landing page */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: [
              "radial-gradient(ellipse 80% 60% at 15% 10%, rgba(133, 142, 98, 0.2), transparent 55%)",
              "radial-gradient(ellipse 70% 50% at 85% 15%, rgba(225, 166, 96, 0.18), transparent 50%)",
              "radial-gradient(ellipse 60% 45% at 75% 50%, rgba(184, 115, 51, 0.1), transparent 45%)",
              "radial-gradient(ellipse 80% 55% at 20% 65%, rgba(122, 158, 147, 0.16), transparent 50%)",
              "radial-gradient(ellipse 70% 45% at 80% 85%, rgba(225, 166, 96, 0.12), transparent 50%)",
            ].join(", "),
          }}
        />

        {/* Organic floating orbs */}
        <div className="organic-shape organic-sage absolute w-[350px] h-[350px] top-[-5%] right-[10%]" />
        <div className="organic-shape organic-gold absolute w-[280px] h-[280px] bottom-[5%] left-[-5%]" />
        <div className="organic-shape organic-teal absolute w-[200px] h-[200px] top-[40%] left-[15%]" />
        <div className="organic-shape organic-copper absolute w-[300px] h-[300px] bottom-[-10%] right-[20%]" />

        {/* Noise overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
            backgroundSize: "200px 200px",
          }}
        />

        {/* Subtle border on the right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-[var(--color-border)]" />

        {/* Content */}
        <div className="relative z-10 px-16 max-w-lg">
          <img
            src="/logo.png"
            alt="Milo AI"
            className="h-10 mb-12"
          />
          <h1 className="font-display text-[42px] text-[var(--color-charcoal)] leading-[1.15] mb-5">
            Never miss a patient again.
          </h1>
          <p className="text-[var(--color-body)] text-[15px] leading-relaxed max-w-sm">
            Milo handles missed calls, books appointments, follows up with
            leads, and collects Google reviews — 24/7.
          </p>

          {/* Stats row */}
          <div className="flex gap-10 mt-12">
            <div>
              <p className="font-display text-3xl text-[var(--color-charcoal)]">
                2s
              </p>
              <p className="text-xs text-[var(--color-muted)] mt-1">
                Avg. response time
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-[var(--color-charcoal)]">
                24/7
              </p>
              <p className="text-xs text-[var(--color-muted)] mt-1">
                Always on
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-[var(--color-charcoal)]">
                40%
              </p>
              <p className="text-xs text-[var(--color-muted)] mt-1">
                Calls recovered
              </p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-14 rounded-2xl border border-[var(--color-border)] bg-white/60 backdrop-blur-sm p-6">
            <p className="text-[var(--color-charcoal)] text-sm leading-relaxed">
              &ldquo;We recovered 34 patients in the first month that we
              would&apos;ve lost. Milo pays for itself many times over.&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-8 h-8 rounded-full bg-[var(--color-teal-light)] flex items-center justify-center text-xs font-semibold text-[var(--color-teal-dark)]">
                SC
              </div>
              <div>
                <p className="text-xs font-medium text-[var(--color-charcoal)]">
                  Dr. Sarah Chen
                </p>
                <p className="text-[11px] text-[var(--color-muted)]">
                  Smile Lane Dental
                </p>
              </div>
            </div>
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
