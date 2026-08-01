"use client";

import { memo } from "react";

import { ChartSkeleton } from "../ChartSkeleton";
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
 *
 * // Stat cards wrap to 2 columns below a 640px container width
 * <DashboardSkeleton statCardColumns={{ base: 2, md: 4 }} />
 * ```
 */
export const DashboardSkeleton = memo(function DashboardSkeleton({
  statCards = 4,
  statCardColumns,
  showChart = true,
  chartHeight = 280,
  chartType = "bar",
  tableRows = 5,
  gap = 24,
  children,
  ...groupProps
}: DashboardSkeletonProps) {
  return (
    <SkeletonGroup gap={gap} {...groupProps}>
      {/* KPI / stat cards row */}
      <SkeletonGroup layout="grid" columns={statCardColumns ?? statCards} gap={16}>
        {Array.from({ length: statCards }).map((_, i) => (
          <StatisticCardSkeleton key={i} gap={10} />
        ))}
      </SkeletonGroup>

      {/* Chart placeholder */}
      {showChart && (
        <SkeletonGroup gap={8}>
          <Skeleton width="30%" height={18} />
          <ChartSkeleton type={chartType} height={chartHeight} />
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

      {children}
    </SkeletonGroup>
  );
});
