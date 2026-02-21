import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "Contact — Milo AI",
  description: "Get in touch with the Milo team. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <SubPageLayout title="Contact Us" subtitle="We'd love to hear from you.">
      <div className="-mx-6 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h3 className="!mt-0 mb-2 text-base font-semibold text-charcoal">Sales</h3>
          <p className="!mb-2 text-sm text-body">
            Interested in Milo for your clinic? We&apos;ll walk you through a demo and
            get you set up in minutes.
          </p>
          <a
            href="mailto:hello@getmilo.com.au"
            className="text-sm font-semibold text-terracotta hover:text-terracotta-dark"
          >
            hello@getmilo.com.au
          </a>
        </div>
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h3 className="!mt-0 mb-2 text-base font-semibold text-charcoal">Support</h3>
          <p className="!mb-2 text-sm text-body">
            Already a Milo customer? Our support team is here to help with any
            questions or issues.
          </p>
          <a
            href="mailto:support@getmilo.com.au"
            className="text-sm font-semibold text-terracotta hover:text-terracotta-dark"
          >
            support@getmilo.com.au
          </a>
        </div>
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h3 className="!mt-0 mb-2 text-base font-semibold text-charcoal">Partnerships</h3>
          <p className="!mb-2 text-sm text-body">
            Interested in integrating with Milo or exploring a partnership
            opportunity?
          </p>
          <a
            href="mailto:partners@getmilo.com.au"
            className="text-sm font-semibold text-terracotta hover:text-terracotta-dark"
          >
            partners@getmilo.com.au
          </a>
        </div>
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h3 className="!mt-0 mb-2 text-base font-semibold text-charcoal">Careers</h3>
          <p className="!mb-2 text-sm text-body">
            Want to join the team? Check our open positions or send us your resume.
          </p>
          <a
            href="/careers"
            className="text-sm font-semibold text-terracotta hover:text-terracotta-dark"
          >
            View open roles &rarr;
          </a>
        </div>
      </div>

      <h2>Office</h2>
      <p>
        Milo AI Pty Ltd<br />
        Sydney, Australia
      </p>
      <p className="text-sm text-muted">
        We&apos;re a remote-first team, but always happy to meet in person for coffee.
      </p>
    </SubPageLayout>
  );
}
