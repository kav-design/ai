export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-milo-500 to-emerald-500 font-bold text-white text-sm">
                M
              </div>
              <span className="text-xl font-bold text-gray-900">milo</span>
            </div>
            <p className="mb-4 text-sm text-gray-500 leading-relaxed">
              The AI employee that handles missed calls, books appointments, and
              grows your dental practice — 24/7.
            </p>
            <p className="text-xs text-gray-400">
              Built in Australia, for Australian businesses.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-900">
              Product
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                "Missed Call Text-Back",
                "AI Conversations",
                "Web Chat Widget",
                "Follow-Up Sequences",
                "Google Reviews",
                "Analytics Dashboard",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#features"
                    className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-900">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                "About Us",
                "Pricing",
                "Blog",
                "Careers",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-900">Legal</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Data Security",
                "Australian Spam Act Compliance",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 md:flex-row">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Milo AI Pty Ltd. All rights
            reserved. ABN 00 000 000 000
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-400 hover:text-gray-600">
              Twitter
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-gray-600">
              LinkedIn
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-gray-600">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
