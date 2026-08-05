"use client";

import { cn } from "@nextui-org/react";
import React, { useMemo } from "react";

export type SegmentedGradientProgressProps = {
  value: number;
  gradient?: string;
  className?: string;
  barWidth?: number;
  gap?: number;
  inactiveClassName?: string;
};

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

const SegmentedGradientProgress = (props: SegmentedGradientProgressProps) => {
  const {
    value,
    gradient = "linear-gradient(90deg, #9BE22D 0%, #5FE3C6 55%, #B59A61 100%)",
    className,
    barWidth = 7,
    gap = 4,
    inactiveClassName = "bg-black/10 dark:bg-white/10",
  } = props;

  const pct = clamp(Number.isFinite(value) ? value : 0, 0, 100);

  const maskStyle = useMemo(() => {
    const step = barWidth + gap;
    const maskImage = `repeating-linear-gradient(90deg, #000 0 ${barWidth}px, transparent ${barWidth}px ${step}px)`;

    return {
      WebkitMaskImage: maskImage,
      maskImage,
      WebkitMaskRepeat: "repeat",
      maskRepeat: "repeat",
    } as React.CSSProperties;
  }, [barWidth, gap]);

  return (
    <div
      className={cn("relative w-full overflow-hidden rounded-lg", className)}
    >
      <div
        className={cn("absolute inset-0", inactiveClassName)}
        style={maskStyle}
      />
      <div
        className="absolute inset-y-0 left-0 transition-[width] duration-300"
        style={{
          ...maskStyle,
          width: `${pct}%`,
          backgroundImage: gradient,
        }}
      />
    </div>
  );
};

export default SegmentedGradientProgress;
