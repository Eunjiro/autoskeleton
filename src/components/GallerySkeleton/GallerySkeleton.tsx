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
 * ```
 */
export const GallerySkeleton = memo(function GallerySkeleton({
  items = 9,
  columns = 3,
  aspectRatio = "1",
  cellGap = 8,
  ...groupProps
}: GallerySkeletonProps) {
  return (
    <SkeletonGroup
      gap={0}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: cellGap,
      }}
      {...groupProps}
    >
      {Array.from({ length: items }).map((_, i) => (
        <ImageSkeleton
          key={i}
          aspectRatio={aspectRatio}
          radius="sm"
        />
      ))}
    </SkeletonGroup>
  );
});
