import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `ProductCardSkeleton`.
 */
export interface ProductCardSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction"> {
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
   * Show an "Add to cart" button placeholder.
   * @default true
   */
  showButton?: boolean;
}
