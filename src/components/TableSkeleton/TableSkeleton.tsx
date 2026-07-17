import { memo } from "react";

import { Skeleton } from "../Skeleton";
import { SkeletonGroup } from "../SkeletonGroup";

import type { TableSkeletonProps } from "./TableSkeleton.types";

/**
 * A skeleton placeholder for data tables.
 *
 * Renders a header row followed by configurable data rows, each containing
 * evenly-spaced cell placeholders.
 *
 * ```tsx
 * // Default 5-row, 4-column table
 * <TableSkeleton />
 *
 * // Custom dimensions
 * <TableSkeleton rows={8} columns={6} />
 * ```
 */
export const TableSkeleton = memo(function TableSkeleton({
  rows = 5,
  columns = 4,
  showHeader = true,
  headerHeight = 20,
  rowHeight = 16,
  rowGap = 12,
  gap = 0,
  ...groupProps
}: TableSkeletonProps) {
  const renderRow = (height: number, keyPrefix: string) => (
    <SkeletonGroup
      direction="row"
      gap={16}
      align="center"
      style={{ width: "100%" }}
    >
      {Array.from({ length: columns }).map((_, col) => (
        <Skeleton
          key={`${keyPrefix}-${col}`}
          width="100%"
          height={height}
          style={{ flex: 1 }}
        />
      ))}
    </SkeletonGroup>
  );

  return (
    <SkeletonGroup gap={gap} {...groupProps}>
      {/* Header row */}
      {showHeader && (
        <>
          {renderRow(headerHeight, "header")}
          {/* Divider gap */}
          <div style={{ height: rowGap }} />
        </>
      )}

      {/* Data rows */}
      <SkeletonGroup gap={rowGap}>
        {Array.from({ length: rows }).map((_, row) =>
          renderRow(rowHeight, `row-${row}`),
        )}
      </SkeletonGroup>
    </SkeletonGroup>
  );
});
