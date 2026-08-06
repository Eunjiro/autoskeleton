import type { ReactNode } from "react";

import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `ProductCardSkeleton`.
 */
export interface ProductCardSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction"> {
  /**
   * Extra content appended after the "Add to cart" button, for a near-miss
   * layout without reimplementing the product card from primitives.
   */
  children?: ReactNode;

  /**
   * Height of the product image placeholder in pixels.
   * @default 220
   */
  imageHeight?: number;

  /**
   * Show a rating row (star icons placeholder).
   * @default true
   */
  showRating?: boolean;

  /**
   * Width/height of each rating icon placeholder in pixels.
   * @default 20
   */
  ratingIconSize?: number;

  /**
   * Show an "Add to cart" button placeholder.
   * @default true
   */
  showButton?: boolean;
}
