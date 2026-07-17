import { memo } from "react";

import { Skeleton } from "../Skeleton";

import type { AvatarSkeletonProps } from "./AvatarSkeleton.types";

/**
 * A circular skeleton placeholder for user avatars and profile pictures.
 *
 * ```tsx
 * <AvatarSkeleton size={48} />
 * ```
 */
export const AvatarSkeleton = memo(function AvatarSkeleton({
  size = 40,
  ...skeletonProps
}: AvatarSkeletonProps) {
  return (
    <Skeleton
      variant="circle"
      size={size}
      {...skeletonProps}
    />
  );
});