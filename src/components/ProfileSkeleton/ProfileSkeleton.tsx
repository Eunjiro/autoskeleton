import { memo } from "react";

import { AvatarSkeleton } from "../AvatarSkeleton";
import { ButtonSkeleton } from "../ButtonSkeleton";
import { Skeleton } from "../Skeleton";
import { SkeletonGroup } from "../SkeletonGroup";
import { TextSkeleton } from "../TextSkeleton";

import type { ProfileSkeletonProps } from "./ProfileSkeleton.types";

/**
 * A skeleton placeholder for social-style user profile sections.
 *
 * Renders a centred avatar, a name block, an optional bio, optional stats
 * columns, and an optional action button.
 *
 * ```tsx
 * // Default profile card
 * <ProfileSkeleton />
 *
 * // Without stats
 * <ProfileSkeleton statsCount={0} />
 * ```
 */
export const ProfileSkeleton = memo(function ProfileSkeleton({
  avatarSize = 80,
  bioLines = 2,
  statsCount = 3,
  showButton = true,
  gap = 16,
  padding = 0,
  ...groupProps
}: ProfileSkeletonProps) {
  return (
    <SkeletonGroup
      align="center"
      gap={gap}
      padding={padding}
      {...groupProps}
    >
      {/* Avatar */}
      <AvatarSkeleton size={avatarSize} />

      {/* Name + bio */}
      <SkeletonGroup gap={8} align="center" style={{ width: "100%" }}>
        <Skeleton width="40%" height={20} />
        <TextSkeleton
          lines={bioLines}
          lineHeight={14}
          lastLineWidth="80%"
        />
      </SkeletonGroup>

      {/* Stats row */}
      {statsCount > 0 && (
        <SkeletonGroup
          direction="row"
          gap={0}
          style={{ width: "100%" }}
          justify="space-around"
        >
          {Array.from({ length: statsCount }).map((_, i) => (
            <SkeletonGroup key={i} gap={6} align="center">
              <Skeleton width={40} height={20} />
              <Skeleton width={56} height={12} />
            </SkeletonGroup>
          ))}
        </SkeletonGroup>
      )}

      {/* Action button */}
      {showButton && <ButtonSkeleton width={120} height={36} />}
    </SkeletonGroup>
  );
});
