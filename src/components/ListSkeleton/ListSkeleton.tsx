import { memo } from "react";

import { AvatarSkeleton } from "../AvatarSkeleton";
import { Skeleton } from "../Skeleton";
import { SkeletonGroup } from "../SkeletonGroup";
import { TextSkeleton } from "../TextSkeleton";

import type { ListSkeletonProps } from "./ListSkeleton.types";

/**
 * A skeleton placeholder for lists, menus, and feed items.
 *
 * Each row optionally shows a leading icon, one or more text lines, and an
 * optional trailing element.
 *
 * ```tsx
 * // Simple 5-item list
 * <ListSkeleton />
 *
 * // Chat-style with two lines per item
 * <ListSkeleton items={8} lines={2} iconSize={44} />
 * ```
 */
export const ListSkeleton = memo(function ListSkeleton({
  items = 5,
  showIcon = true,
  iconSize = 36,
  lines = 1,
  showTrailing = false,
  gap = 16,
  ...groupProps
}: ListSkeletonProps) {
  return (
    <SkeletonGroup gap={gap} {...groupProps}>
      {Array.from({ length: items }).map((_, i) => (
        <SkeletonGroup
          key={i}
          direction="row"
          gap={12}
          align="center"
        >
          {showIcon && <AvatarSkeleton size={iconSize} />}

          <div style={{ flex: 1, minWidth: 0 }}>
            <TextSkeleton
              lines={lines}
              lineHeight={lines === 1 ? 16 : 14}
              gap={6}
              lastLineWidth={lines > 1 ? "65%" : "100%"}
            />
          </div>

          {showTrailing && <Skeleton width={24} height={24} radius="sm" />}
        </SkeletonGroup>
      ))}
    </SkeletonGroup>
  );
});
