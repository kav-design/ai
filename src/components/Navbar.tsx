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
          ? "border-b border-white/[0.06] bg-navy-950/80 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-milo-400 via-violet-500 to-emerald-400 text-sm font-bold text-white transition-transform group-hover:scale-105">
            M
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">
            milo
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-[13px] font-medium text-gray-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#"
            className="text-[13px] font-medium text-gray-400 transition-colors hover:text-white"
          >
            Log in
          </a>
          <a
            href="#pricing"
            className="btn-glow rounded-full bg-gradient-to-r from-milo-500 via-violet-500 to-milo-500 bg-[length:200%_100%] px-5 py-2 text-[13px] font-semibold text-white transition-all hover:bg-right"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-gray-400 transition-colors hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-navy-950/95 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-gray-400 transition-colors hover:bg-white/[0.03] hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="mt-3 rounded-full bg-gradient-to-r from-milo-500 to-violet-500 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
