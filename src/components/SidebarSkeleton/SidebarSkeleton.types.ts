import type { ReactNode } from "react";

import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `SidebarSkeleton`.
 */
export interface SidebarSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction"> {
  /**
   * Extra content appended after the user profile block, for a near-miss
   * layout without reimplementing the sidebar from primitives.
   */
  children?: ReactNode;

  /**
   * Number of navigation links to render.
   * @default 6
   */
  navItems?: number;

  /**
   * Show a branding / logo block at the top.
   * @default true
   */
  showLogo?: boolean;

  /**
   * Show a user profile block at the bottom.
   * @default true
   */
  showProfile?: boolean;

  /**
   * Show section heading separators between nav items.
   * @default false
   */
  showSectionHeadings?: boolean;

  /**
   * Number of nav items before a section heading is inserted.
   * Only relevant when `showSectionHeadings` is `true`.
   * @default 3
   */
  sectionInterval?: number;
}
