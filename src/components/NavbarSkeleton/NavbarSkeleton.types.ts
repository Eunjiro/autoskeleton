import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `NavbarSkeleton`.
 */
export interface NavbarSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction"> {
  /**
   * Show a logo placeholder on the left.
   * @default true
   */
  showLogo?: boolean;

  /**
   * Number of navigation link placeholders in the center.
   * @default 4
   */
  navLinks?: number;

  /**
   * Number of action placeholders on the right (buttons, icons).
   * @default 2
   */
  actions?: number;
}
