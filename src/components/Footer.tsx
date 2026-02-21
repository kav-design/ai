import Link from "next/link";

const productLinks = [
  { label: "Missed Call Text-Back", href: "/#features" },
  { label: "AI Conversations", href: "/#features" },
  { label: "Web Chat Widget", href: "/#features" },
  { label: "Follow-Up Sequences", href: "/#features" },
  { label: "Google Reviews", href: "/#features" },
  { label: "Analytics", href: "/#features" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Data Security", href: "/security" },
  { label: "Spam Act Compliance", href: "/spam-compliance" },
];

const socialLinks = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-4 inline-block">
              <img src="/logo.png" alt="Milo AI" className="h-12" />
            </Link>
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
              {productLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-body transition-colors hover:text-charcoal">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-body transition-colors hover:text-charcoal">
                    {item.label}
                  </Link>
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
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-body transition-colors hover:text-charcoal">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted">
            &copy; 2026 Milo AI Pty Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted transition-colors hover:text-charcoal"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
