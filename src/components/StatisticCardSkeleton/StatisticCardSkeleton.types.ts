import type { ReactNode } from "react";

import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `StatisticCardSkeleton`.
 */
export interface StatisticCardSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction"> {
  /**
   * Extra content appended after the trend label, for a near-miss layout
   * without reimplementing the stat card from primitives.
   */
  children?: ReactNode;

  /**
   * Show an icon placeholder in the top-right corner.
   * @default true
   */
  showIcon?: boolean;

  /**
   * Width of the icon placeholder in pixels.
   * @default 40
   */
  iconSize?: number;

  /**
   * Width of the metric/number placeholder.
   * @default "60%"
   */
  metricWidth?: number | string;
}
