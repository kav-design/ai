"use client";

import { useEffect, useRef } from "react";

export function SnakeBorder({ label, color }: { label: string; color: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const rectRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const rect = rectRef.current;
    if (!svg || !rect) return;
    const { width, height } = svg.getBoundingClientRect();
    const i = 3;
    rect.setAttribute("x", String(i));
    rect.setAttribute("y", String(i));
    rect.setAttribute("width", String(Math.max(0, width - i * 2)));
    rect.setAttribute("height", String(Math.max(0, height - i * 2)));
    const len = rect.getTotalLength();
    rect.style.strokeDasharray = `${len}`;
    rect.style.strokeDashoffset = `${len}`;
    requestAnimationFrame(() => {
      if (rect) {
        rect.style.transition =
          "stroke-dashoffset 1.4s cubic-bezier(0.16, 1, 0.3, 1)";
        rect.style.strokeDashoffset = "0";
      }
    });
  }, []);

  return (
    <>
      <svg
        ref={svgRef}
        className="pointer-events-none absolute"
        style={{
          top: "-3px",
          left: "-3px",
          width: "calc(100% + 6px)",
          height: "calc(100% + 6px)",
        }}
        fill="none"
      >
        <rect
          ref={rectRef}
          rx="14"
          ry="14"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      <span
        className="absolute -bottom-[18px] left-1 text-[10px] font-semibold tracking-wide animate-in"
        style={{ color }}
      >
        {label}
      </span>
    </>
  );
}
