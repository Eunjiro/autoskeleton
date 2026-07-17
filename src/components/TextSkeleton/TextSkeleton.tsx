import { memo, useMemo } from "react";

import { Skeleton } from "../Skeleton";
import type { TextSkeletonProps } from "./TextSkeleton.types";
import { getRandomWidth } from "./TextSkeleton.utils";

/**
 * A multi-line text skeleton that mimics a paragraph or heading block.
 *
 * ```tsx
 * // Three-line paragraph
 * <TextSkeleton lines={3} />
 *
 * // Heading + subtext
 * <TextSkeleton lines={1} lineHeight={24} />
 * <TextSkeleton lines={2} lineHeight={14} />
 *
 * // Randomized widths (decorative)
 * <TextSkeleton lines={4} randomizeWidths />
 * ```
 */
export const TextSkeleton = memo(function TextSkeleton({
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
      // First line is always full width.
      if (index === 0) return "100%";
      // Randomize remaining lines when requested.
      if (randomizeWidths) return getRandomWidth(minLineWidth, maxLineWidth);
      // Last line is shorter by convention.
      if (index === lines - 1) return lastLineWidth;
      return "100%";
    });
    // randomizeWidths intentionally uses random values — keep the seed stable
    // across re-renders by only regenerating when line count or bounds change.
  }, [lines, randomizeWidths, minLineWidth, maxLineWidth, lastLineWidth]);

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
});
