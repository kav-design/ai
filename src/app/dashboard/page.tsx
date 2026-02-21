import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <img src="/logo.png" alt="Milo AI" className="h-8 mb-10" />
        <h1 className="font-display text-3xl text-[var(--color-charcoal)] mb-3">
          Welcome to Milo
        </h1>
        <p className="text-[var(--color-muted)] text-sm mb-8">
          Signed in as {user.email}
        </p>
        <div className="rounded-xl border border-[var(--color-border)] bg-white p-8">
          <p className="text-[var(--color-body)] text-sm">
            Dashboard coming soon. We&apos;re building something great.
          </p>
        </div>
      </div>
    </div>
  );
}
