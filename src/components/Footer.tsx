export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-milo-400 via-violet-500 to-emerald-400 text-sm font-bold text-white">
                M
              </div>
              <span className="text-lg font-semibold text-white">milo</span>
            </div>
            <p className="mb-4 text-[13px] leading-relaxed text-gray-500">
              The AI employee that handles missed calls, books appointments, and
              grows your practice — 24/7.
            </p>
            <p className="text-[11px] text-gray-700">
              Built in Australia, for Australian businesses.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-[12px] font-semibold tracking-wider text-gray-400 uppercase">
              Product
            </h4>
            <ul className="flex flex-col gap-2.5">
              {["Missed Call Text-Back", "AI Conversations", "Web Chat Widget", "Follow-Up Sequences", "Google Reviews", "Analytics"].map(
                (item) => (
                  <li key={item}>
                    <a href="#features" className="text-[13px] text-gray-600 transition-colors hover:text-white">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-[12px] font-semibold tracking-wider text-gray-400 uppercase">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {["About", "Pricing", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-gray-600 transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-[12px] font-semibold tracking-wider text-gray-400 uppercase">
              Legal
            </h4>
            <ul className="flex flex-col gap-2.5">
              {["Privacy Policy", "Terms of Service", "Data Security", "Spam Act Compliance"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-[13px] text-gray-600 transition-colors hover:text-white">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.04] pt-8 md:flex-row">
          <p className="text-[11px] text-gray-700">
            &copy; 2026 Milo AI Pty Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "Instagram"].map((s) => (
              <a key={s} href="#" className="text-[11px] text-gray-700 transition-colors hover:text-white">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
