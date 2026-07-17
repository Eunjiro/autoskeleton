import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `ListSkeleton`.
 */
export interface ListSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction"> {
  /**
   * Number of list items to render.
   * @default 5
   */
  items?: number;

  /**
   * Show a circular icon/avatar placeholder on the left of each item.
   * @default true
   */
  showIcon?: boolean;

  /**
   * Diameter of the icon placeholder in pixels.
   * @default 36
   */
  iconSize?: number;

  /**
   * Number of text lines per list item.
   * @default 1
   */
  lines?: number;

  /**
   * Show a small trailing action placeholder (e.g. chevron, badge).
   * @default false
   */
  showTrailing?: boolean;
}
