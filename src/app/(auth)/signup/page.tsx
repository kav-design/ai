"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function SignupPage() {
  const [clinicName, setClinicName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const supabase = createClient();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          clinic_name: clinicName,
        },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  };

  const handleGoogleSignup = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  if (success) {
    return (
      <>
        <div className="lg:hidden mb-8">
          <img src="/logo.png" alt="Milo AI" className="h-8" />
        </div>

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
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="font-display text-2xl text-[var(--color-charcoal)] mb-2">
            Check your email
          </h2>
          <p className="text-[var(--color-muted)] text-sm leading-relaxed">
            We sent a confirmation link to{" "}
            <span className="text-[var(--color-charcoal)] font-medium">
              {email}
            </span>
            . Click the link to activate your account.
          </p>
          <Link
            href="/login"
            className="inline-block mt-6 text-sm text-[var(--color-terracotta)] font-medium hover:text-[var(--color-terracotta-dark)] transition-colors"
          >
            Back to sign in
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="lg:hidden mb-8">
        <img src="/logo.png" alt="Milo AI" className="h-8" />
      </div>

      <h2 className="font-display text-3xl text-[var(--color-charcoal)] mb-2">
        Get started with Milo
      </h2>
      <p className="text-[var(--color-muted)] text-sm mb-8">
        Set up your clinic in under 2 minutes
      </p>

      {/* Google OAuth */}
      <button
        onClick={handleGoogleSignup}
        className="w-full flex items-center justify-center gap-3 h-11 rounded-lg border border-[var(--color-border)] bg-white text-sm font-medium text-[var(--color-charcoal)] hover:bg-[var(--color-cream-dark)] transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
            fill="#4285F4"
          />
          <path
            d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
            fill="#34A853"
          />
          <path
            d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.997 8.997 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
            fill="#FBBC05"
          />
          <path
            d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
            fill="#EA4335"
          />
        </svg>
        Continue with Google
      </button>

      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-[var(--color-border)]" />
        <span className="text-xs text-[var(--color-muted)]">or</span>
        <div className="flex-1 h-px bg-[var(--color-border)]" />
      </div>

      <form onSubmit={handleSignup} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-[var(--color-body)] mb-1.5">
            Clinic name
          </label>
          <input
            type="text"
            value={clinicName}
            onChange={(e) => setClinicName(e.target.value)}
            placeholder="Smile Lane Dental"
            required
            className="w-full h-11 px-3.5 rounded-lg border border-[var(--color-border)] bg-white text-sm text-[var(--color-charcoal)] placeholder:text-[var(--color-light)] outline-none focus:border-[var(--color-teal)] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[var(--color-body)] mb-1.5">
            Full name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Dr. Sarah Chen"
            required
            className="w-full h-11 px-3.5 rounded-lg border border-[var(--color-border)] bg-white text-sm text-[var(--color-charcoal)] placeholder:text-[var(--color-light)] outline-none focus:border-[var(--color-teal)] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[var(--color-body)] mb-1.5">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="sarah@smilelane.com.au"
            required
            className="w-full h-11 px-3.5 rounded-lg border border-[var(--color-border)] bg-white text-sm text-[var(--color-charcoal)] placeholder:text-[var(--color-light)] outline-none focus:border-[var(--color-teal)] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[var(--color-body)] mb-1.5">
            Password
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
          {loading ? "Creating account..." : "Create account"}
        </button>
      </form>

      <p className="text-center text-xs text-[var(--color-muted)] mt-5 leading-relaxed">
        By signing up you agree to our{" "}
        <Link
          href="/terms"
          className="text-[var(--color-body)] underline underline-offset-2"
        >
          Terms
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="text-[var(--color-body)] underline underline-offset-2"
        >
          Privacy Policy
        </Link>
      </p>

      <p className="text-center text-sm text-[var(--color-muted)] mt-4">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-[var(--color-terracotta)] font-medium hover:text-[var(--color-terracotta-dark)] transition-colors"
        >
          Sign in
        </Link>
      </p>
    </>
  );
}
