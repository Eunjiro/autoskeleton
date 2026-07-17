import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `DashboardSkeleton`.
 */
export interface DashboardSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction"> {
  /**
   * Number of statistic cards in the top row.
   * @default 4
   */
  statCards?: number;

  /**
   * Show a large chart placeholder below the stat cards.
   * @default true
   */
  showChart?: boolean;

  /**
   * Height of the chart placeholder in pixels.
   * @default 280
   */
  chartHeight?: number;

  /**
   * Number of table rows to render below the chart.
   * Set to `0` to hide the table section.
   * @default 5
   */
  tableRows?: number;
}
