"use client";

import { memo } from "react";

import { AvatarSkeleton } from "../AvatarSkeleton";
import { Skeleton } from "../Skeleton";
import { SkeletonGroup } from "../SkeletonGroup";

import type { StoriesBarSkeletonProps } from "./StoriesBarSkeleton.types";

/**
 * A horizontally-scrolling row of avatar placeholders — the "stories bar"
 * pattern seen in Instagram, Snapchat, and similar feeds, or a horizontal
 * carousel of avatars/chips more generally.
 *
 * Unlike a plain `direction="row"` `SkeletonGroup`, items here never shrink
 * to fit the available width — the row scrolls instead of squeezing or
 * wrapping, matching how these UIs actually behave.
 *
 * ```tsx
 * <StoriesBarSkeleton items={8} />
 *
 * // Chips without labels
 * <StoriesBarSkeleton items={10} avatarSize={40} showLabel={false} />
 * ```
 */
export const StoriesBarSkeleton = memo(function StoriesBarSkeleton({
  items = 6,
  avatarSize = 64,
  showLabel = true,
  gap = 16,
  children,
  ...groupProps
}: StoriesBarSkeletonProps) {
  return (
    <SkeletonGroup
      direction="row"
      gap={gap}
      style={{ overflowX: "auto" }}
      {...groupProps}
    >
      {Array.from({ length: items }).map((_, i) => (
        <SkeletonGroup
          key={i}
          gap={6}
          align="center"
          style={{ flexShrink: 0, width: avatarSize + 16 }}
        >
          <AvatarSkeleton size={avatarSize} />
          {showLabel && <Skeleton width={Math.round(avatarSize * 0.7)} height={11} />}
        </SkeletonGroup>
      ))}

      {children}
    </SkeletonGroup>
  );
});
