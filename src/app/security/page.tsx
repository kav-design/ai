import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "Data Security — Milo AI",
  description: "How Milo AI protects your clinic's data with enterprise-grade security.",
};

export default function SecurityPage() {
  return (
    <SubPageLayout title="Data Security" subtitle="Enterprise-grade security for your clinic's data.">
      <p>
        At Milo, security isn&apos;t an afterthought &mdash; it&apos;s foundational to
        everything we build. Your patients trust you with their information, and you
        need to trust us with it. Here&apos;s how we earn that trust.
      </p>

      <h2>Infrastructure</h2>
      <ul>
        <li><strong>Australian hosting:</strong> All data is stored on servers located in Australia.</li>
        <li><strong>Encryption at rest:</strong> All data is encrypted using AES-256 encryption.</li>
        <li><strong>Encryption in transit:</strong> All communications use TLS 1.3 encryption.</li>
        <li><strong>Isolated environments:</strong> Each clinic&apos;s data is logically isolated from other tenants.</li>
      </ul>

      <h2>Access Controls</h2>
      <ul>
        <li><strong>Role-based access:</strong> Team members only access what they need.</li>
        <li><strong>Multi-factor authentication:</strong> Available for all accounts (required for Enterprise).</li>
        <li><strong>Audit logging:</strong> All access to patient data is logged and auditable.</li>
        <li><strong>Employee access:</strong> Milo staff access to production data requires approval and is logged.</li>
      </ul>

      <h2>AI &amp; Data Processing</h2>
      <ul>
        <li><strong>No training on your data:</strong> Patient conversations are never used to train AI models.</li>
        <li><strong>Data retention:</strong> You control how long conversation data is retained.</li>
        <li><strong>Data export:</strong> Export all your data at any time in standard formats.</li>
        <li><strong>Data deletion:</strong> Request full deletion of your data upon account closure.</li>
      </ul>

      <h2>Compliance</h2>
      <ul>
        <li><strong>Australian Privacy Act 1988:</strong> Fully compliant with all Australian Privacy Principles.</li>
        <li><strong>Spam Act 2003:</strong> All messaging complies with Australian anti-spam legislation.</li>
        <li><strong>Do Not Call Register:</strong> Integrated checks against the Australian DNCR.</li>
        <li><strong>AHPRA guidelines:</strong> AI communications follow healthcare advertising guidelines.</li>
      </ul>

      <h2>Incident Response</h2>
      <p>
        We maintain a documented incident response plan. In the event of a security
        incident, we will notify affected customers within 72 hours as required by the
        Notifiable Data Breaches scheme.
      </p>

      <h2>Responsible Disclosure</h2>
      <p>
        If you discover a security vulnerability, please report it to{" "}
        <a href="mailto:security@getmilo.com.au">security@getmilo.com.au</a>. We
        appreciate responsible disclosure and will acknowledge your report within 24
        hours.
      </p>
    </SubPageLayout>
  );
}
