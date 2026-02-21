"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

export default function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
    el.style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)";
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) {
      el.style.transform = "";
      el.style.boxShadow = "";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-300 ease-out ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}
