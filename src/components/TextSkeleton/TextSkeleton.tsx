"use client";

import { memo, useEffect, useMemo, useState, type CSSProperties } from "react";

import { Skeleton } from "../Skeleton";
import { SkeletonLayoutContext } from "../../context/SkeletonLayoutContext";
import { useSkeletonLayoutDirection } from "../../hooks/useSkeletonLayoutDirection";
import type { TextSkeletonProps } from "./TextSkeleton.types";
import { getRandomWidth } from "./TextSkeleton.utils";

function computeWidths(
  lines: number,
  randomize: boolean,
  minLineWidth: number,
  maxLineWidth: number,
  lastLineWidth: number | string,
): (number | string)[] {
  return Array.from({ length: lines }, (_, index) => {
    // First line is always full width.
    if (index === 0) return "100%";
    // Randomize remaining lines when requested.
    if (randomize) return getRandomWidth(minLineWidth, maxLineWidth);
    // Last line is shorter by convention.
    if (index === lines - 1) return lastLineWidth;
    return "100%";
  });
}

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
  // `randomizeWidths` used to call Math.random() straight from a useMemo
  // evaluated during render, which runs on both the server and the client's
  // first render pass in any SSR framework (Next.js, Remix, etc.). Since
  // Math.random() isn't seeded, those two passes produce different widths,
  // and React throws a hydration mismatch error. The deterministic (i.e.
  // non-randomized) layout below is what's used for every render up to and
  // including the client's first paint, so it always matches whatever the
  // server sent — the *actual* randomized widths are then applied from an
  // effect, which only ever runs on the client, after hydration has already
  // reconciled successfully.
  const deterministicWidths = useMemo(
    () => computeWidths(lines, false, minLineWidth, maxLineWidth, lastLineWidth),
    [lines, minLineWidth, maxLineWidth, lastLineWidth],
  );

  const [widths, setWidths] = useState(deterministicWidths);

  useEffect(() => {
    setWidths(
      randomizeWidths
        ? computeWidths(lines, true, minLineWidth, maxLineWidth, lastLineWidth)
        : deterministicWidths,
    );
  }, [lines, randomizeWidths, minLineWidth, maxLineWidth, lastLineWidth, deterministicWidths]);

  // Same collapse risk as a percentage-width Skeleton (see Skeleton.tsx):
  // this wrapper has no intrinsic width of its own, so as the main-axis
  // flex item of a row SkeletonGroup it shrinks to 0 instead of filling
  // the row next to a fixed-size sibling like AvatarSkeleton.
  const layoutDirection = useSkeletonLayoutDirection();
  const fillStyle: CSSProperties | undefined =
    layoutDirection === "row"
      ? { flexGrow: 1, flexShrink: 1, flexBasis: 0, minWidth: 0 }
      : undefined;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap,
        ...fillStyle,
      }}
    >
      {/* This wrapper is always a column flex container for its own lines,
          regardless of the ambient SkeletonLayoutContext (which describes
          this wrapper's own relationship to ITS parent, e.g. a row
          SkeletonGroup — not the relationship between the wrapper and the
          lines inside it). Re-providing "column" here stops each line from
          incorrectly inheriting a "row" signal and misapplying the flex-fill
          treatment to its own height instead of width. */}
      <SkeletonLayoutContext.Provider value="column">
        {widths.map((width, index) => (
          <Skeleton
            key={index}
            width={width}
            height={lineHeight}
            {...skeletonProps}
          />
        ))}
      </SkeletonLayoutContext.Provider>
    </div>
  );
});
