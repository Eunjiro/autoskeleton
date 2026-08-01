import type { ReactNode } from "react";

import type { ResponsiveValue, SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `DashboardSkeleton`.
 */
export interface DashboardSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction"> {
  /**
   * Extra content appended after the table section, for a near-miss layout
   * without reimplementing the dashboard from primitives.
   */
  children?: ReactNode;

  /**
   * Number of statistic cards in the top row.
   * @default 4
   */
  statCards?: number;

  /**
   * Number of columns in the stat-card grid. Defaults to `statCards` (one
   * column per card, no wrapping). Pass a smaller number, or a
   * `{ base, sm, md, lg, xl }` object (see `ResponsiveValue`), to wrap the
   * cards onto multiple rows instead of always laying them out in one.
   * @default statCards
   */
  statCardColumns?: ResponsiveValue<number | string>;

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
   * Chart shape to mimic. See `ChartSkeleton`.
   * @default "bar"
   */
  chartType?: "bar" | "line" | "donut";

  /**
   * Number of table rows to render below the chart.
   * Set to `0` to hide the table section.
   * @default 5
   */
  tableRows?: number;
}
