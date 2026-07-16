import { Skeleton } from "../Skeleton";

import type { AvatarSkeletonProps } from "./AvatarSkeleton.types";


export function AvatarSkeleton({
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
}