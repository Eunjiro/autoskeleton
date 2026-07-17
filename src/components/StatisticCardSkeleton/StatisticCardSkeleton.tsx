import { memo } from "react";

import { Skeleton } from "../Skeleton";
import { SkeletonGroup } from "../SkeletonGroup";

import type { StatisticCardSkeletonProps } from "./StatisticCardSkeleton.types";

/**
 * A skeleton placeholder for KPI / statistic cards.
 *
 * Shows a label, a large metric, and an optional icon.
 *
 * ```tsx
 * <StatisticCardSkeleton />
 *
 * // Grid of four stat cards
 * <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
 *   {Array.from({ length: 4 }).map((_, i) => (
 *     <StatisticCardSkeleton key={i} />
 *   ))}
 * </div>
 * ```
 */
export const StatisticCardSkeleton = memo(function StatisticCardSkeleton({
  showIcon = true,
  iconSize = 40,
  metricWidth = "60%",
  gap = 12,
  ...groupProps
}: StatisticCardSkeletonProps) {
  return (
    <SkeletonGroup gap={gap} {...groupProps}>
      {/* Label row — label + optional icon */}
      <SkeletonGroup direction="row" gap={8} align="center" justify="space-between">
        <Skeleton width="50%" height={14} />
        {showIcon && <Skeleton width={iconSize} height={iconSize} radius="md" />}
      </SkeletonGroup>

      {/* Big metric */}
      <Skeleton width={metricWidth} height={32} />

      {/* Trend / secondary label */}
      <Skeleton width="40%" height={12} />
    </SkeletonGroup>
  );
});
