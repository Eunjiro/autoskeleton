import { memo } from "react";

import { AvatarSkeleton } from "../AvatarSkeleton";
import { Skeleton } from "../Skeleton";
import { SkeletonGroup } from "../SkeletonGroup";

import type { SidebarSkeletonProps } from "./SidebarSkeleton.types";

/**
 * A skeleton placeholder for application sidebars and navigation drawers.
 *
 * ```tsx
 * <SidebarSkeleton />
 *
 * // Compact sidebar without profile
 * <SidebarSkeleton showProfile={false} navItems={8} />
 * ```
 */
export const SidebarSkeleton = memo(function SidebarSkeleton({
  navItems = 6,
  showLogo = true,
  showProfile = true,
  showSectionHeadings = false,
  sectionInterval = 3,
  gap = 8,
  ...groupProps
}: SidebarSkeletonProps) {
  return (
    <SkeletonGroup
      gap={gap}
      style={{ height: "100%", justifyContent: "space-between" }}
      {...groupProps}
    >
      <SkeletonGroup gap={gap}>
        {/* Logo / branding */}
        {showLogo && (
          <SkeletonGroup direction="row" gap={10} align="center" style={{ marginBottom: 8 }}>
            <Skeleton width={32} height={32} radius="md" />
            <Skeleton width={100} height={20} />
          </SkeletonGroup>
        )}

        {/* Nav items */}
        {Array.from({ length: navItems }).map((_, i) => (
          <SkeletonGroup key={i} gap={gap}>
            {showSectionHeadings && i > 0 && i % sectionInterval === 0 && (
              <Skeleton width="50%" height={11} style={{ marginTop: 8, marginBottom: 4 }} />
            )}
            <SkeletonGroup direction="row" gap={10} align="center">
              <Skeleton width={20} height={20} radius="sm" />
              <Skeleton width={`${60 + ((i * 17) % 35)}%`} height={16} />
            </SkeletonGroup>
          </SkeletonGroup>
        ))}
      </SkeletonGroup>

      {/* User profile block */}
      {showProfile && (
        <SkeletonGroup direction="row" gap={10} align="center" style={{ marginTop: 16 }}>
          <AvatarSkeleton size={36} />
          <SkeletonGroup gap={5}>
            <Skeleton width={90} height={14} />
            <Skeleton width={70} height={12} />
          </SkeletonGroup>
        </SkeletonGroup>
      )}
    </SkeletonGroup>
  );
});
