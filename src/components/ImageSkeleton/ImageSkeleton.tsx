import { memo } from "react";

import { Skeleton } from "../Skeleton";

import type { ImageSkeletonProps } from "./ImageSkeleton.types";

/**
 * A rectangular skeleton placeholder for images and media.
 *
 * ```tsx
 * // Fixed size
 * <ImageSkeleton width={400} height={300} />
 *
 * // Aspect-ratio driven (e.g. 16:9)
 * <ImageSkeleton aspectRatio="16/9" />
 * ```
 */
export const ImageSkeleton = memo(function ImageSkeleton({
  width = "100%",
  height = 200,
  aspectRatio,
  ...skeletonProps
}: ImageSkeletonProps) {
  return (
    <Skeleton
      variant="default"
      width={width}
      height={aspectRatio ? undefined : height}
      style={{ aspectRatio, ...(skeletonProps.style ?? {}) }}
      {...skeletonProps}
    />
  );
});