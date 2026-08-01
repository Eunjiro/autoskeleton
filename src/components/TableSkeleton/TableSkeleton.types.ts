import type { ReactNode } from "react";

import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `TableSkeleton`.
 */
export interface TableSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction"> {
  /**
   * Extra content appended after the data rows, for a near-miss layout
   * without reimplementing the table from primitives.
   */
  children?: ReactNode;

  /**
   * Number of data rows (excluding header).
   * @default 5
   */
  rows?: number;

  /**
   * Number of columns.
   * @default 4
   */
  columns?: number;

  /**
   * Show the header row with slightly taller cells.
   * @default true
   */
  showHeader?: boolean;

  /**
   * Height of header cells in pixels.
   * @default 20
   */
  headerHeight?: number;

  /**
   * Height of data cells in pixels.
   * @default 16
   */
  rowHeight?: number;

  /**
   * Vertical gap between rows in pixels.
   * @default 12
   */
  rowGap?: number;
}
