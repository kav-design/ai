"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-cream/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="transition-opacity hover:opacity-80">
          <img src="/logo.png" alt="Milo AI" className="h-20" />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative rounded-lg px-4 py-2 text-sm font-medium text-body transition-colors hover:text-charcoal"
            >
              {link.label}
              <span className="absolute bottom-0.5 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-terracotta transition-all duration-300 group-hover:w-2/3" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="/login"
            className="text-sm font-medium text-body transition-colors hover:text-charcoal"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="rounded-full bg-charcoal px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#333] hover:shadow-lg hover:shadow-charcoal/15"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-body transition-colors hover:text-charcoal md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-cream/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-body transition-colors hover:bg-cream-dark hover:text-charcoal"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/signup"
              className="mt-3 rounded-full bg-charcoal px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#333]"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
