import type { ReactNode } from "react";

import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `ChartSkeleton`.
 */
export interface ChartSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction" | "align"> {
  /**
   * Extra content appended after the chart shape — e.g. a legend row —
   * without reimplementing the chart from primitives.
   */
  children?: ReactNode;

  /**
   * Chart shape to mimic.
   * - `"bar"` — vertical bars of varying height (default)
   * - `"line"` — a jagged area/line-chart silhouette
   * - `"donut"` — a ring placeholder for pie/donut charts
   * @default "bar"
   */
  type?: "bar" | "line" | "donut";

  /**
   * Height of the chart area in pixels. For `type="donut"`, this is also
   * the ring's diameter.
   * @default 240
   */
  height?: number;

  /**
   * Number of bars to render. Only applies to `type="bar"`.
   * @default 7
   */
  points?: number;
}
