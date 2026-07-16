import { useMemo } from "react";

import { Skeleton } from "../Skeleton";
import type { TextSkeletonProps } from "./TextSkeleton.types";
import { getRandomWidth } from "./TextSkeleton.utils";

export function TextSkeleton({
  lines = 3,
  gap = 8,
  lastLineWidth = "70%",
  lineHeight = 16,
  randomizeWidths = false,
  minLineWidth = 55,
  maxLineWidth = 90,
  ...skeletonProps
}: TextSkeletonProps) {
  const widths = useMemo(() => {
    return Array.from({ length: lines }, (_, index) => {
      // First line should always be full width.
      if (index === 0) {
        return "100%";
      }

      // Randomize remaining lines.
      if (randomizeWidths) {
        return getRandomWidth(minLineWidth, maxLineWidth);
      }

      // Last line is shorter when randomization is disabled.
      if (index === lines - 1) {
        return lastLineWidth;
      }

      return "100%";
    });
  }, [
    lines,
    randomizeWidths,
    minLineWidth,
    maxLineWidth,
    lastLineWidth,
  ]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap,
      }}
    >
      {widths.map((width, index) => (
        <Skeleton
          key={index}
          width={width}
          height={lineHeight}
          {...skeletonProps}
        />
      ))}
    </div>
  );
}