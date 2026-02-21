import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Milo AI",
  description: "How Milo AI collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <SubPageLayout title="Privacy Policy" subtitle="Last updated: February 2026">
      <p>
        Milo AI Pty Ltd (&quot;Milo&quot;, &quot;we&quot;, &quot;us&quot;, or
        &quot;our&quot;) is committed to protecting your privacy. This policy explains
        how we collect, use, and safeguard personal information in compliance with the
        Australian Privacy Act 1988 and the Australian Privacy Principles (APPs).
      </p>

      <h2>Information We Collect</h2>
      <p>We collect the following types of information:</p>
      <ul>
        <li><strong>Account information:</strong> Name, email address, phone number, clinic name, and billing details when you sign up.</li>
        <li><strong>Patient interaction data:</strong> SMS messages, voice call transcripts, and web chat conversations processed through Milo on behalf of your clinic.</li>
        <li><strong>Usage data:</strong> How you interact with the Milo dashboard, including pages visited, features used, and analytics viewed.</li>
        <li><strong>Technical data:</strong> IP address, browser type, device information, and cookies for service functionality.</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To provide and improve the Milo service</li>
        <li>To process AI conversations on behalf of your clinic</li>
        <li>To send you account notifications and service updates</li>
        <li>To generate anonymised analytics and usage reports</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>Data Ownership</h2>
      <p>
        Your clinic owns all patient interaction data processed through Milo. We act
        as a data processor on your behalf. We do not sell, share, or use patient data
        for any purpose other than providing the Milo service to your clinic.
      </p>

      <h2>Data Storage &amp; Security</h2>
      <p>
        All data is stored on encrypted servers in Australia. We use industry-standard
        security measures including TLS encryption, access controls, and regular
        security audits. See our <a href="/security">Data Security</a> page for more
        details.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We use select third-party services to operate Milo, including cloud hosting,
        SMS delivery, and payment processing. All third parties are bound by data
        processing agreements and comply with Australian privacy requirements.
      </p>

      <h2>Your Rights</h2>
      <p>Under the Australian Privacy Act, you have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you</li>
        <li>Request correction of inaccurate information</li>
        <li>Request deletion of your data (subject to legal retention requirements)</li>
        <li>Lodge a complaint with the Office of the Australian Information Commissioner (OAIC)</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        We use essential cookies for service functionality and optional analytics
        cookies to understand how the service is used. You can disable non-essential
        cookies in your browser settings.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy-related enquiries, contact us at{" "}
        <a href="mailto:privacy@getmilo.com.au">privacy@getmilo.com.au</a>.
      </p>
    </SubPageLayout>
  );
}
