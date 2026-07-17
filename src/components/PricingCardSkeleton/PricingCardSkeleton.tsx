import { memo } from "react";

import { ButtonSkeleton } from "../ButtonSkeleton";
import { Skeleton } from "../Skeleton";
import { SkeletonGroup } from "../SkeletonGroup";

import type { PricingCardSkeletonProps } from "./PricingCardSkeleton.types";

/**
 * A skeleton placeholder for pricing / subscription plan cards.
 *
 * ```tsx
 * // Three-tier pricing grid
 * <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
 *   <PricingCardSkeleton />
 *   <PricingCardSkeleton showBadge />
 *   <PricingCardSkeleton />
 * </div>
 * ```
 */
export const PricingCardSkeleton = memo(function PricingCardSkeleton({
  features = 5,
  showBadge = false,
  showButton = true,
  gap = 16,
  ...groupProps
}: PricingCardSkeletonProps) {
  return (
    <SkeletonGroup gap={gap} align="center" {...groupProps}>
      {/* Optional badge */}
      {showBadge && <Skeleton width={100} height={26} radius="full" />}

      {/* Plan name */}
      <Skeleton width="50%" height={22} />

      {/* Price */}
      <SkeletonGroup gap={4} align="center">
        <Skeleton width={80} height={44} />
        <Skeleton width={60} height={14} />
      </SkeletonGroup>

      {/* Feature list */}
      <SkeletonGroup gap={10} style={{ width: "100%" }}>
        {Array.from({ length: features }).map((_, i) => (
          <SkeletonGroup key={i} direction="row" gap={8} align="center">
            <Skeleton width={16} height={16} variant="circle" />
            <Skeleton width={`${55 + (i % 4) * 10}%`} height={14} />
          </SkeletonGroup>
        ))}
      </SkeletonGroup>

      {/* CTA button */}
      {showButton && <ButtonSkeleton width="100%" height={44} />}
    </SkeletonGroup>
  );
});
