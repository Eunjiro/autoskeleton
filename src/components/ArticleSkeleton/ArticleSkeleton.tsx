import { memo } from "react";

import { AvatarSkeleton } from "../AvatarSkeleton";
import { ImageSkeleton } from "../ImageSkeleton";
import { Skeleton } from "../Skeleton";
import { SkeletonGroup } from "../SkeletonGroup";
import { TextSkeleton } from "../TextSkeleton";

import type { ArticleSkeletonProps } from "./ArticleSkeleton.types";

/**
 * A skeleton placeholder for blog posts and article pages.
 *
 * Renders a hero image, a title, an author meta row, and a body text block.
 *
 * ```tsx
 * <ArticleSkeleton />
 *
 * // No hero image
 * <ArticleSkeleton showHeroImage={false} />
 * ```
 */
export const ArticleSkeleton = memo(function ArticleSkeleton({
  showHeroImage = true,
  heroHeight = 240,
  showAuthor = true,
  bodyLines = 6,
  showHeading = true,
  gap = 20,
  padding = 0,
  ...groupProps
}: ArticleSkeletonProps) {
  return (
    <SkeletonGroup gap={gap} padding={padding} {...groupProps}>
      {/* Hero image */}
      {showHeroImage && <ImageSkeleton height={heroHeight} />}

      {/* Article title */}
      <SkeletonGroup gap={8}>
        <Skeleton height={28} width="85%" />
        <Skeleton height={28} width="60%" />
      </SkeletonGroup>

      {/* Author meta row */}
      {showAuthor && (
        <SkeletonGroup direction="row" gap={10} align="center">
          <AvatarSkeleton size={36} />
          <SkeletonGroup gap={6}>
            <Skeleton width={120} height={14} />
            <Skeleton width={80} height={12} />
          </SkeletonGroup>
        </SkeletonGroup>
      )}

      {/* Optional subheading */}
      {showHeading && <Skeleton height={22} width="70%" />}

      {/* Body text */}
      <TextSkeleton lines={bodyLines} lineHeight={15} gap={10} />
    </SkeletonGroup>
  );
});
