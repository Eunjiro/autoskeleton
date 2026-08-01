"use client";

import { memo } from "react";

import { ImageSkeleton } from "../ImageSkeleton";
import { SkeletonGroup } from "../SkeletonGroup";

import type { GallerySkeletonProps } from "./GallerySkeleton.types";

/**
 * A skeleton placeholder for image galleries and media grids.
 *
 * Renders a CSS grid of equal-sized image placeholders.
 *
 * ```tsx
 * // 3×3 square grid
 * <GallerySkeleton />
 *
 * // 4-column landscape grid
 * <GallerySkeleton columns={4} aspectRatio="4/3" items={12} />
 *
 * // Responsive: 2 columns by default, 4 from a 640px container width
 * <GallerySkeleton columns={{ base: 2, md: 4 }} items={12} />
 * ```
 */
export const GallerySkeleton = memo(function GallerySkeleton({
  items = 9,
  columns = 3,
  aspectRatio = "1",
  cellGap = 8,
  children,
  ...groupProps
}: GallerySkeletonProps) {
  return (
    <SkeletonGroup
      layout="grid"
      columns={columns}
      gap={cellGap}
      {...groupProps}
    >
      {Array.from({ length: items }).map((_, i) => (
        <ImageSkeleton
          key={i}
          aspectRatio={aspectRatio}
          radius="sm"
        />
      ))}

      {children}
    </SkeletonGroup>
  );
});
