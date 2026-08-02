"use client";

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
  style,
  ...skeletonProps
}: ImageSkeletonProps) {
  // When aspectRatio drives the height, `height` is left undefined so CSS
  // can compute it — but Skeleton's own default ("no height given" -> 16px)
  // then sets an explicit `height: 16px` in its inline style, which blocks
  // aspect-ratio from ever running (it only computes a dimension that's
  // otherwise `auto`, never overrides one that's already definite). Forcing
  // `height: "auto"` here is what actually lets the ratio take effect.
  return (
    <Skeleton
      variant="default"
      width={width}
      height={aspectRatio ? undefined : height}
      {...skeletonProps}
      style={aspectRatio ? { aspectRatio, height: "auto", ...style } : style}
    />
  );
});