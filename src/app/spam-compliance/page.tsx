import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "Spam Act Compliance — Milo AI",
  description: "How Milo AI ensures compliance with the Australian Spam Act 2003.",
};

export default function SpamCompliancePage() {
  return (
    <SubPageLayout title="Spam Act Compliance" subtitle="How Milo stays compliant with Australian messaging laws.">
      <p>
        Milo is fully compliant with the Spam Act 2003 (Cth) and the
        Telecommunications (Do Not Call Register) Act 2006. We take messaging
        compliance seriously and have built safeguards directly into the platform.
      </p>

      <h2>Consent</h2>
      <p>
        Milo only sends messages to patients who have provided consent, either by:
      </p>
      <ul>
        <li><strong>Inferred consent:</strong> The patient called your clinic (missed call text-back), initiating the business relationship.</li>
        <li><strong>Express consent:</strong> The patient opted in via your web chat widget, booking form, or other contact method.</li>
        <li><strong>Existing relationship:</strong> The patient is an existing patient of your clinic.</li>
      </ul>

      <h2>Identification</h2>
      <p>
        All messages sent through Milo clearly identify your clinic as the sender.
        Messages include your clinic name and are sent from your dedicated phone
        number or verified sender ID.
      </p>

      <h2>Unsubscribe</h2>
      <p>
        Every automated message sequence includes a functional opt-out mechanism.
        When a patient replies &quot;STOP&quot; or requests to be removed:
      </p>
      <ul>
        <li>All automated messaging ceases immediately</li>
        <li>The patient is added to your clinic&apos;s suppression list</li>
        <li>The opt-out is honoured within 5 business days (typically instant)</li>
        <li>Staff are notified so they can follow up manually if appropriate</li>
      </ul>

      <h2>Do Not Call Register</h2>
      <p>
        For voice AI calls, Milo integrates with the Australian Do Not Call Register
        (DNCR). Numbers are checked against the register before any outbound calls are
        made. Inbound call responses are exempt as they are responding to a
        customer-initiated enquiry.
      </p>

      <h2>Message Frequency</h2>
      <p>
        Milo enforces sensible message limits to prevent over-messaging:
      </p>
      <ul>
        <li>Follow-up sequences are capped at 3 messages per lead</li>
        <li>Review requests are sent once per appointment, with one follow-up</li>
        <li>Quiet hours are respected (no messages between 8pm and 8am by default)</li>
        <li>Clinics can customise frequency limits and quiet hours in settings</li>
      </ul>

      <h2>Record Keeping</h2>
      <p>
        Milo maintains records of all consent, message logs, and opt-outs as required
        by the Spam Act. These records are available to you in the dashboard and can
        be exported at any time.
      </p>

      <h2>Questions</h2>
      <p>
        For compliance-related enquiries, contact{" "}
        <a href="mailto:compliance@getmilo.com.au">compliance@getmilo.com.au</a>.
      </p>
    </SubPageLayout>
  );
}
