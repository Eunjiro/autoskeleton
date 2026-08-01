"use client";

import { memo } from "react";

import { Skeleton } from "../Skeleton";
import { SkeletonGroup } from "../SkeletonGroup";

import type { ChartSkeletonProps } from "./ChartSkeleton.types";

// Deterministic (not Math.random()) so server and client render identically —
// see TextSkeleton's randomizeWidths for why that matters for hydration.
const BAR_HEIGHTS = ["45%", "70%", "55%", "85%", "60%", "40%", "75%", "50%", "65%", "35%"];

const LINE_CLIP_POINTS = [
  "0% 70%",
  "10% 45%",
  "20% 60%",
  "30% 30%",
  "40% 50%",
  "50% 20%",
  "60% 40%",
  "70% 25%",
  "80% 55%",
  "90% 35%",
  "100% 50%",
].join(", ");

/**
 * A skeleton placeholder for chart regions in dashboards and analytics UIs —
 * a bar chart, a line/area chart, or a donut chart, rather than a single
 * flat rectangle.
 *
 * ```tsx
 * <ChartSkeleton type="bar" />
 * <ChartSkeleton type="line" height={200} />
 * <ChartSkeleton type="donut" height={160} />
 * ```
 */
export const ChartSkeleton = memo(function ChartSkeleton({
  type = "bar",
  height = 240,
  points = 7,
  gap = 8,
  children,
  ...groupProps
}: ChartSkeletonProps) {
  return (
    <SkeletonGroup
      direction={type === "bar" ? "row" : "column"}
      align={type === "bar" ? "flex-end" : "center"}
      gap={gap}
      style={{ height: type === "donut" ? undefined : height }}
      {...groupProps}
    >
      {type === "bar" &&
        Array.from({ length: points }).map((_, i) => (
          <Skeleton
            key={i}
            width="100%"
            height={BAR_HEIGHTS[i % BAR_HEIGHTS.length]}
            radius="sm"
          />
        ))}

      {type === "line" && (
        <Skeleton
          width="100%"
          height={height}
          radius="sm"
          style={{ clipPath: `polygon(${LINE_CLIP_POINTS}, 100% 100%, 0% 100%)` }}
        />
      )}

      {type === "donut" && (
        <Skeleton
          variant="circle"
          size={height}
          style={{
            backgroundColor: "transparent",
            border: `${Math.max(16, Math.round(height * 0.18))}px solid var(--skeleton-color)`,
            boxSizing: "border-box",
          }}
        />
      )}

      {children}
    </SkeletonGroup>
  );
});
