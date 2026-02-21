"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (password !== confirm) {
      setError("Passwords don't match");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <>
      <div className="lg:hidden mb-8">
        <img src="/logo.png" alt="Milo AI" className="h-8" />
      </div>

      <h2 className="font-display text-3xl text-[var(--color-charcoal)] mb-2">
        Set new password
      </h2>
      <p className="text-[var(--color-muted)] text-sm mb-8">
        Choose a strong password for your account
      </p>

      <form onSubmit={handleReset} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-[var(--color-body)] mb-1.5">
            New password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Min. 8 characters"
            required
            className="w-full h-11 px-3.5 rounded-lg border border-[var(--color-border)] bg-white text-sm text-[var(--color-charcoal)] placeholder:text-[var(--color-light)] outline-none focus:border-[var(--color-teal)] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[var(--color-body)] mb-1.5">
            Confirm password
          </label>
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Re-enter password"
            required
            className="w-full h-11 px-3.5 rounded-lg border border-[var(--color-border)] bg-white text-sm text-[var(--color-charcoal)] placeholder:text-[var(--color-light)] outline-none focus:border-[var(--color-teal)] transition-colors"
          />
        </div>

        {error && (
          <p className="text-xs text-red-600 bg-red-50 px-3 py-2 rounded-lg">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full h-11 rounded-lg bg-[var(--color-charcoal)] text-white text-sm font-medium hover:bg-[#2a2a2a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? "Updating..." : "Update password"}
        </button>
      </form>

      <p className="text-center text-sm text-[var(--color-muted)] mt-6">
        <Link
          href="/login"
          className="text-[var(--color-terracotta)] font-medium hover:text-[var(--color-terracotta-dark)] transition-colors"
        >
          Back to sign in
        </Link>
      </p>
    </>
  );
}
