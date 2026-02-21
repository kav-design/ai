import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "Careers — Milo AI",
  description: "Join the Milo team. We're building AI employees for dental clinics across Australia.",
};

const openings = [
  {
    title: "Senior Full-Stack Engineer",
    type: "Full-time",
    location: "Remote (Australia)",
    description: "Build the core product — AI conversation engine, dashboard, and integrations.",
  },
  {
    title: "AI/ML Engineer",
    type: "Full-time",
    location: "Remote (Australia)",
    description: "Improve conversation quality, intent detection, and voice agent capabilities.",
  },
  {
    title: "Customer Success Manager",
    type: "Full-time",
    location: "Sydney / Remote",
    description: "Onboard dental clinics, ensure they see ROI, and build long-term relationships.",
  },
];

export default function CareersPage() {
  return (
    <SubPageLayout title="Careers" subtitle="Help us build the future of dental clinic operations.">
      <p>
        Milo is growing fast. We&apos;re looking for people who are passionate about
        building AI products that solve real business problems. We&apos;re remote-first,
        based in Australia, and move quickly.
      </p>

      <h2>What We Value</h2>
      <ul>
        <li><strong>Ownership</strong> &mdash; You own your work from idea to production.</li>
        <li><strong>Speed</strong> &mdash; We ship fast, learn fast, and iterate fast.</li>
        <li><strong>Craft</strong> &mdash; We care about the details that make products great.</li>
        <li><strong>Impact</strong> &mdash; Every feature should measurably help our customers.</li>
      </ul>

      <h2>Open Positions</h2>
      <div className="flex flex-col gap-4">
        {openings.map((role) => (
          <div
            key={role.title}
            className="-mx-6 rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="!mt-0 mb-1 text-base font-semibold text-charcoal">
                  {role.title}
                </h3>
                <p className="!mb-0 text-sm text-body">{role.description}</p>
              </div>
              <div className="flex flex-shrink-0 flex-col items-end gap-1">
                <span className="rounded-full bg-teal-light px-2.5 py-0.5 text-xs font-medium text-teal">
                  {role.type}
                </span>
                <span className="text-xs text-muted">{role.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8">
        Don&apos;t see a role that fits? We&apos;re always interested in hearing from
        talented people. Reach out at{" "}
        <a href="mailto:careers@getmilo.com.au">careers@getmilo.com.au</a>.
      </p>
    </SubPageLayout>
  );
}
