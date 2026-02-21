"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const supabase = createClient();

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setSent(true);
    setLoading(false);
  };

  return (
    <>
      <div className="lg:hidden mb-8">
        <img src="/logo.png" alt="Milo AI" className="h-8" />
      </div>

      {sent ? (
        <div className="text-center">
          <div className="w-14 h-14 rounded-full bg-[var(--color-teal-light)] flex items-center justify-center mx-auto mb-5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-teal)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <h2 className="font-display text-2xl text-[var(--color-charcoal)] mb-2">
            Check your email
          </h2>
          <p className="text-[var(--color-muted)] text-sm leading-relaxed">
            If an account exists for{" "}
            <span className="text-[var(--color-charcoal)] font-medium">
              {email}
            </span>
            , we sent a password reset link.
          </p>
          <Link
            href="/login"
            className="inline-block mt-6 text-sm text-[var(--color-terracotta)] font-medium hover:text-[var(--color-terracotta-dark)] transition-colors"
          >
            Back to sign in
          </Link>
        </div>
      ) : (
        <>
          <h2 className="font-display text-3xl text-[var(--color-charcoal)] mb-2">
            Reset your password
          </h2>
          <p className="text-[var(--color-muted)] text-sm mb-8">
            Enter your email and we&apos;ll send a reset link
          </p>

          <form onSubmit={handleReset} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[var(--color-body)] mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@clinic.com"
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
              {loading ? "Sending..." : "Send reset link"}
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
      )}
    </>
  );
}
