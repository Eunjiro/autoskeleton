import type { ReactNode } from "react";

import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `StoriesBarSkeleton`.
 */
export interface StoriesBarSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction" | "align"> {
  /**
   * Extra content appended after the last item in the row, for a near-miss
   * layout without reimplementing the bar from primitives.
   */
  children?: ReactNode;

  /**
   * Number of items in the row.
   * @default 6
   */
  items?: number;

  /**
   * Diameter of each avatar in pixels.
   * @default 64
   */
  avatarSize?: number;

  /**
   * Show a short label placeholder under each avatar.
   * @default true
   */
  showLabel?: boolean;
}
