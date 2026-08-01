"use client";

import { memo } from "react";

import { Skeleton } from "../Skeleton";

import type { ButtonSkeletonProps } from "./ButtonSkeleton.types";

/**
 * A pill-shaped skeleton placeholder for buttons and CTAs.
 *
 * ```tsx
 * <ButtonSkeleton width={120} height={40} />
 *
 * // Rectangular button instead of a pill
 * <ButtonSkeleton radius="md" />
 * ```
 */
export const ButtonSkeleton = memo(function ButtonSkeleton({
  width = 120,
  height = 40,
  radius = "full",
  ...skeletonProps
}: ButtonSkeletonProps) {
  return (
    <Skeleton
      variant="rounded"
      width={width}
      height={height}
      radius={radius}
      {...skeletonProps}
    />
  );
});