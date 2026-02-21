import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "About — Milo AI",
  description: "Learn about Milo AI, the AI employee built in Australia for dental clinics.",
};

export default function AboutPage() {
  return (
    <SubPageLayout title="About Milo" subtitle="The AI employee built for Australian dental clinics.">
      <h2>Our Mission</h2>
      <p>
        Every day, dental clinics across Australia lose patients simply because they
        can&apos;t answer the phone. The receptionist is with a patient, the office is
        closed, or the lines are busy. Those missed calls don&apos;t leave voicemails
        &mdash; they call the next clinic on Google.
      </p>
      <p>
        Milo exists to make sure that never happens. We built an AI employee that
        responds in 2 seconds, books appointments, follows up with leads, and collects
        Google reviews &mdash; all on autopilot, 24 hours a day.
      </p>

      <h2>Why We Built Milo</h2>
      <p>
        We saw first-hand how much revenue clinics were leaving on the table. The
        average dental practice misses 23% of incoming calls, and each missed call
        represents roughly $2,500 in lifetime patient value. That&apos;s tens of
        thousands of dollars walking out the door every year.
      </p>
      <p>
        Hiring more staff isn&apos;t always the answer &mdash; it&apos;s expensive,
        hard to scale, and doesn&apos;t help after hours. Milo gives clinics an
        always-on team member that handles the repetitive work so your team can focus
        on what matters: patient care.
      </p>

      <h2>Built in Australia</h2>
      <p>
        Milo is designed and built in Australia, specifically for Australian dental
        clinics. We understand the local market, compliance requirements, and what
        Australian patients expect. Our AI is trained on dental-specific conversations
        and understands everything from emergency triage to cosmetic enquiries.
      </p>

      <h2>The Team</h2>
      <p>
        We&apos;re a small team of engineers, designers, and dental industry experts
        passionate about using AI to solve real business problems. We&apos;re not
        building another chatbot &mdash; we&apos;re building a reliable employee that
        earns its keep from day one.
      </p>
    </SubPageLayout>
  );
}
