import type { Metadata } from "next";
import SubPageLayout from "@/components/SubPageLayout";

export const metadata: Metadata = {
  title: "Blog — Milo AI",
  description: "Insights on AI, dental marketing, and patient engagement from the Milo team.",
};

const posts = [
  {
    title: "Why 23% of Dental Calls Go Unanswered (And What It Costs You)",
    excerpt: "Australian clinics miss nearly a quarter of all incoming calls. We break down why it happens and the real revenue impact.",
    date: "Feb 2026",
    tag: "Industry",
  },
  {
    title: "Speed to Lead: Why 2-Second Response Times Win Patients",
    excerpt: "Research shows that responding within 5 minutes makes you 100x more likely to convert a lead. Here's how AI makes sub-2-second responses possible.",
    date: "Feb 2026",
    tag: "AI",
  },
  {
    title: "How to Get More Google Reviews Without Annoying Your Patients",
    excerpt: "The secret to 5-star review collection is timing and tone. We share the exact sequences that generate 7x more reviews.",
    date: "Jan 2026",
    tag: "Marketing",
  },
  {
    title: "AI Voice Agents: The Future of Dental Front Desk",
    excerpt: "Voice AI is no longer science fiction. Learn how clinics are using AI phone agents to handle calls, book appointments, and triage emergencies.",
    date: "Jan 2026",
    tag: "AI",
  },
  {
    title: "The True Cost of a Missed Call for Dental Clinics",
    excerpt: "It's not just one appointment — it's the lifetime value of a patient. We calculate the real cost and show how to recover it.",
    date: "Dec 2025",
    tag: "Industry",
  },
];

export default function BlogPage() {
  return (
    <SubPageLayout title="Blog" subtitle="Insights on AI, dental marketing, and patient engagement.">
      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <article
            key={post.title}
            className="-mx-6 rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-terracotta-light px-2.5 py-0.5 text-xs font-semibold text-terracotta">
                {post.tag}
              </span>
              <span className="text-xs text-muted">{post.date}</span>
            </div>
            <h3 className="!mt-0 mb-2 text-lg font-semibold text-charcoal">
              {post.title}
            </h3>
            <p className="!mb-0 text-sm text-body">{post.excerpt}</p>
          </article>
        ))}
      </div>
      <p className="mt-12 text-center text-sm text-muted">
        More posts coming soon. Stay tuned.
      </p>
    </SubPageLayout>
  );
}
