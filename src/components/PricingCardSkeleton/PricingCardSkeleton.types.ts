import type { ReactNode } from "react";

import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `PricingCardSkeleton`.
 */
export interface PricingCardSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction"> {
  /**
   * Extra content appended after the CTA button, for a near-miss layout
   * without reimplementing the pricing card from primitives.
   */
  children?: ReactNode;

  /**
   * Number of feature list items.
   * @default 5
   */
  features?: number;

  /**
   * Show a "most popular" badge placeholder.
   * @default false
   */
  showBadge?: boolean;

  /**
   * Show a CTA button at the bottom.
   * @default true
   */
  showButton?: boolean;
}
