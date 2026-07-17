import { memo } from "react";

import { Skeleton } from "../Skeleton";
import { SkeletonGroup } from "../SkeletonGroup";

import type { NavbarSkeletonProps } from "./NavbarSkeleton.types";

/**
 * A skeleton placeholder for top navigation bars.
 *
 * ```tsx
 * <NavbarSkeleton />
 *
 * // Minimal navbar with no nav links
 * <NavbarSkeleton navLinks={0} actions={1} />
 * ```
 */
export const NavbarSkeleton = memo(function NavbarSkeleton({
  showLogo = true,
  navLinks = 4,
  actions = 2,
  gap = 0,
  ...groupProps
}: NavbarSkeletonProps) {
  return (
    <SkeletonGroup
      direction="row"
      gap={gap}
      align="center"
      justify="space-between"
      {...groupProps}
    >
      {/* Logo */}
      {showLogo && (
        <SkeletonGroup direction="row" gap={8} align="center">
          <Skeleton width={32} height={32} radius="md" />
          <Skeleton width={80} height={20} />
        </SkeletonGroup>
      )}

      {/* Center nav links */}
      {navLinks > 0 && (
        <SkeletonGroup direction="row" gap={24} align="center">
          {Array.from({ length: navLinks }).map((_, i) => (
            <Skeleton
              key={i}
              width={48 + (i % 3) * 16}
              height={16}
              radius="full"
            />
          ))}
        </SkeletonGroup>
      )}

      {/* Right-side actions */}
      {actions > 0 && (
        <SkeletonGroup direction="row" gap={12} align="center">
          {Array.from({ length: actions }).map((_, i) => (
            <Skeleton key={i} width={i === 0 ? 80 : 36} height={36} radius="full" />
          ))}
        </SkeletonGroup>
      )}
    </SkeletonGroup>
  );
});
