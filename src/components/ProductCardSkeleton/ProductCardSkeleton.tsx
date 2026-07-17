import { memo } from "react";

import { ButtonSkeleton } from "../ButtonSkeleton";
import { ImageSkeleton } from "../ImageSkeleton";
import { Skeleton } from "../Skeleton";
import { SkeletonGroup } from "../SkeletonGroup";

import type { ProductCardSkeletonProps } from "./ProductCardSkeleton.types";

/**
 * A skeleton placeholder for e-commerce product cards.
 *
 * Shows a product image, name, optional rating, price, and a CTA button.
 *
 * ```tsx
 * // 3-column product grid
 * <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
 *   {Array.from({ length: 6 }).map((_, i) => (
 *     <ProductCardSkeleton key={i} />
 *   ))}
 * </div>
 * ```
 */
export const ProductCardSkeleton = memo(function ProductCardSkeleton({
  imageHeight = 220,
  showRating = true,
  showButton = true,
  gap = 12,
  ...groupProps
}: ProductCardSkeletonProps) {
  return (
    <SkeletonGroup gap={gap} {...groupProps}>
      {/* Product image */}
      <ImageSkeleton height={imageHeight} />

      {/* Product name */}
      <SkeletonGroup gap={6}>
        <Skeleton width="90%" height={18} />
        <Skeleton width="65%" height={16} />
      </SkeletonGroup>

      {/* Rating */}
      {showRating && (
        <SkeletonGroup direction="row" gap={4} align="center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} width={16} height={16} radius="sm" />
          ))}
          <Skeleton width={40} height={13} />
        </SkeletonGroup>
      )}

      {/* Price */}
      <Skeleton width={80} height={22} />

      {/* Add to cart */}
      {showButton && <ButtonSkeleton width="100%" height={40} />}
    </SkeletonGroup>
  );
});
