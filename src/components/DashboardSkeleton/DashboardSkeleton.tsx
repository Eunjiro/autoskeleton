import { memo } from "react";

import { Skeleton } from "../Skeleton";
import { SkeletonGroup } from "../SkeletonGroup";
import { StatisticCardSkeleton } from "../StatisticCardSkeleton";
import { TableSkeleton } from "../TableSkeleton";

import type { DashboardSkeletonProps } from "./DashboardSkeleton.types";

/**
 * A skeleton placeholder for admin dashboards.
 *
 * Renders a row of KPI cards, a chart area, and an optional data table.
 *
 * ```tsx
 * <DashboardSkeleton />
 *
 * // Compact dashboard without table
 * <DashboardSkeleton tableRows={0} chartHeight={200} />
 * ```
 */
export const DashboardSkeleton = memo(function DashboardSkeleton({
  statCards = 4,
  showChart = true,
  chartHeight = 280,
  tableRows = 5,
  gap = 24,
  ...groupProps
}: DashboardSkeletonProps) {
  return (
    <SkeletonGroup gap={gap} {...groupProps}>
      {/* KPI / stat cards row */}
      <SkeletonGroup
        direction="row"
        gap={16}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${statCards}, 1fr)`,
        }}
      >
        {Array.from({ length: statCards }).map((_, i) => (
          <StatisticCardSkeleton key={i} gap={10} />
        ))}
      </SkeletonGroup>

      {/* Chart placeholder */}
      {showChart && (
        <SkeletonGroup gap={8}>
          <Skeleton width="30%" height={18} />
          <Skeleton width="100%" height={chartHeight} radius="md" />
        </SkeletonGroup>
      )}

      {/* Data table */}
      {tableRows > 0 && (
        <SkeletonGroup gap={12}>
          <SkeletonGroup direction="row" gap={12} align="center" justify="space-between">
            <Skeleton width="25%" height={18} />
            <Skeleton width={100} height={32} radius="md" />
          </SkeletonGroup>
          <TableSkeleton rows={tableRows} columns={5} />
        </SkeletonGroup>
      )}
    </SkeletonGroup>
  );
});
