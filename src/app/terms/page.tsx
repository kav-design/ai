import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Milo AI",
  description: "Terms and conditions for using the Milo AI platform.",
};

export default function TermsPage() {
  return (
    <SubPageLayout title="Terms of Service" subtitle="Last updated: February 2026">
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the
        Milo AI platform (&quot;Service&quot;) provided by Milo AI Pty Ltd (ABN
        placeholder) (&quot;Milo&quot;, &quot;we&quot;, &quot;us&quot;). By using the
        Service, you agree to these Terms.
      </p>

      <h2>1. Service Description</h2>
      <p>
        Milo provides AI-powered communication tools for dental clinics, including
        missed call text-back, SMS conversations, voice call handling, web chat, review
        collection, and analytics. The Service is provided on a subscription basis.
      </p>

      <h2>2. Account Registration</h2>
      <p>
        You must provide accurate and complete information when creating an account.
        You are responsible for maintaining the security of your account credentials
        and for all activity under your account.
      </p>

      <h2>3. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful purpose</li>
        <li>Send unsolicited messages (spam) through the Service</li>
        <li>Attempt to reverse-engineer or interfere with the Service</li>
        <li>Misrepresent AI-generated communications as human where required by law</li>
        <li>Use the Service in ways that violate the Australian Spam Act 2003</li>
      </ul>

      <h2>4. Subscriptions &amp; Billing</h2>
      <p>
        Subscriptions are billed monthly. You may cancel at any time, and cancellation
        takes effect at the end of the current billing period. We offer a 14-day free
        trial for new accounts and a 30-day money-back guarantee.
      </p>

      <h2>5. Data &amp; Privacy</h2>
      <p>
        Your use of the Service is subject to our <a href="/privacy">Privacy Policy</a>.
        You retain ownership of all patient data processed through Milo. We process
        data solely to provide the Service.
      </p>

      <h2>6. AI-Generated Content</h2>
      <p>
        Milo uses artificial intelligence to generate responses. While we strive for
        accuracy and quality, AI-generated content may occasionally contain errors. You
        are responsible for reviewing and approving any AI playbooks or configurations
        that determine how Milo communicates with your patients.
      </p>

      <h2>7. Service Availability</h2>
      <p>
        We aim for 99.9% uptime but do not guarantee uninterrupted service. We will
        notify you in advance of planned maintenance. Enterprise customers may have
        separate SLA agreements.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by Australian law, Milo&apos;s liability is
        limited to the amount you have paid for the Service in the 12 months preceding
        the claim. We are not liable for indirect, incidental, or consequential damages.
      </p>

      <h2>9. Termination</h2>
      <p>
        We may suspend or terminate your account if you violate these Terms. Upon
        termination, you may request export of your data within 30 days.
      </p>

      <h2>10. Changes to Terms</h2>
      <p>
        We may update these Terms from time to time. We will notify you of material
        changes via email. Continued use of the Service after changes constitutes
        acceptance of the updated Terms.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms are governed by the laws of New South Wales, Australia. Any
        disputes will be resolved in the courts of New South Wales.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms? Contact us at{" "}
        <a href="mailto:legal@getmilo.com.au">legal@getmilo.com.au</a>.
      </p>
    </SubPageLayout>
  );
}
