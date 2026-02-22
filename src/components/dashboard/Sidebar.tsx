"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  Star,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: MessageSquare, label: "Conversations" },
  { icon: Users, label: "Leads" },
  { icon: Star, label: "Reviews" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Sidebar({ email }: { email: string }) {
  const [open, setOpen] = useState(false);
  const initials = email.charAt(0).toUpperCase();

  const nav = (
    <>
      <div className="mb-8 px-1">
        <img src="/logo.png" alt="Milo AI" className="h-9" />
      </div>

      <nav className="flex flex-1 flex-col gap-0.5">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-200 ${
              item.active
                ? "bg-cream text-charcoal shadow-sm"
                : "text-muted hover:bg-cream/60 hover:text-body"
            }`}
          >
            <item.icon size={16} className={item.active ? "text-terracotta" : ""} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="border-t border-border pt-4">
        <div className="flex items-center gap-2.5 px-1">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-terracotta text-[11px] font-bold text-white">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate text-[12px] font-medium text-charcoal">
              Bright Smile Dental
            </p>
            <p className="truncate text-[11px] text-muted">{email}</p>
          </div>
          <button className="p-1 text-muted hover:text-charcoal transition-colors">
            <LogOut size={14} />
          </button>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <motion.aside
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease }}
        className="hidden lg:flex lg:w-[240px] flex-shrink-0 flex-col border-r border-border bg-white p-5 fixed top-0 left-0 bottom-0 z-30"
      >
        {nav}
      </motion.aside>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-40 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white shadow-sm lg:hidden"
      >
        <Menu size={18} className="text-charcoal" />
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-charcoal/20 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ duration: 0.3, ease }}
              className="fixed top-0 left-0 bottom-0 z-50 flex w-[260px] flex-col border-r border-border bg-white p-5 lg:hidden"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-muted hover:text-charcoal"
              >
                <X size={18} />
              </button>
              {nav}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
