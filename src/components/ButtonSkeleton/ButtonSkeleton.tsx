import { memo } from "react";

import { Skeleton } from "../Skeleton";

import type { ButtonSkeletonProps } from "./ButtonSkeleton.types";

/**
 * A pill-shaped skeleton placeholder for buttons and CTAs.
 *
 * ```tsx
 * <ButtonSkeleton width={120} height={40} />
 * ```
 */
export const ButtonSkeleton = memo(function ButtonSkeleton({
  width = 120,
  height = 40,
  ...skeletonProps
}: ButtonSkeletonProps) {
  return (
    <Skeleton
      variant="rounded"
      width={width}
      height={height}
      {...skeletonProps}
    />
  );
});