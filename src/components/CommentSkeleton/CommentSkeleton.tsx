import { memo } from "react";

import { AvatarSkeleton } from "../AvatarSkeleton";
import { Skeleton } from "../Skeleton";
import { SkeletonGroup } from "../SkeletonGroup";
import { TextSkeleton } from "../TextSkeleton";

import type { CommentSkeletonProps } from "./CommentSkeleton.types";

/**
 * A skeleton placeholder for comment threads.
 *
 * Each item shows an avatar, a username line, and a comment body.
 *
 * ```tsx
 * <CommentSkeleton items={5} />
 * ```
 */
export const CommentSkeleton = memo(function CommentSkeleton({
  items = 3,
  lines = 2,
  avatarSize = 36,
  showActions = false,
  gap = 20,
  ...groupProps
}: CommentSkeletonProps) {
  return (
    <SkeletonGroup gap={gap} {...groupProps}>
      {Array.from({ length: items }).map((_, i) => (
        <SkeletonGroup key={i} direction="row" gap={12} align="flex-start">
          <AvatarSkeleton size={avatarSize} />

          <SkeletonGroup gap={8} style={{ flex: 1 }}>
            {/* Username + timestamp */}
            <SkeletonGroup direction="row" gap={8} align="center">
              <Skeleton width={100} height={14} />
              <Skeleton width={60} height={12} />
            </SkeletonGroup>

            {/* Comment body */}
            <TextSkeleton lines={lines} lineHeight={14} gap={6} lastLineWidth="75%" />

            {/* Optional action row */}
            {showActions && (
              <SkeletonGroup direction="row" gap={12}>
                <Skeleton width={40} height={12} />
                <Skeleton width={40} height={12} />
              </SkeletonGroup>
            )}
          </SkeletonGroup>
        </SkeletonGroup>
      ))}
    </SkeletonGroup>
  );
});
