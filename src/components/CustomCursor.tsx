"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let hovering = false;

    const onMove = (e: globalThis.MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.style.opacity = "1";
    };

    const onOver = (e: globalThis.MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = !!target.closest(
        "a, button, [role='button'], input, textarea, select"
      );
      if (isInteractive !== hovering) {
        hovering = isInteractive;
        cursor.style.transform = hovering
          ? "translate(-50%, -50%) scale(4)"
          : "translate(-50%, -50%) scale(1)";
      }
    };

    const onLeave = () => {
      cursor.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999] hidden h-2 w-2 rounded-full bg-charcoal opacity-0 mix-blend-difference md:block"
      style={{
        transform: "translate(-50%, -50%) scale(1)",
        transition: "transform 0.2s ease-out, opacity 0.15s",
      }}
    />
  );
}
