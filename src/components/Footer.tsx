export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-terracotta text-sm font-bold text-white">
                M
              </div>
              <span className="text-lg font-semibold text-charcoal">milo</span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-body">
              The AI employee that handles missed calls, books appointments, and
              grows your practice — 24/7.
            </p>
            <p className="text-xs text-muted">
              Built in Australia, for Australian businesses.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
              Product
            </h4>
            <ul className="flex flex-col gap-2.5">
              {["Missed Call Text-Back", "AI Conversations", "Web Chat Widget", "Follow-Up Sequences", "Google Reviews", "Analytics"].map(
                (item) => (
                  <li key={item}>
                    <a href="#features" className="text-sm text-body transition-colors hover:text-charcoal">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {["About", "Pricing", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-body transition-colors hover:text-charcoal">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
              Legal
            </h4>
            <ul className="flex flex-col gap-2.5">
              {["Privacy Policy", "Terms of Service", "Data Security", "Spam Act Compliance"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-body transition-colors hover:text-charcoal">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted">
            &copy; 2026 Milo AI Pty Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "Instagram"].map((s) => (
              <a key={s} href="#" className="text-xs text-muted transition-colors hover:text-charcoal">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
