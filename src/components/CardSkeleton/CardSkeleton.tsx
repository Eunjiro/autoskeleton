import { memo } from "react";

import { AvatarSkeleton } from "../AvatarSkeleton";
import { ButtonSkeleton } from "../ButtonSkeleton";
import { ImageSkeleton } from "../ImageSkeleton";
import { SkeletonGroup } from "../SkeletonGroup";
import { TextSkeleton } from "../TextSkeleton";

import type { CardSkeletonProps } from "./CardSkeleton.types";

/**
 * A composable card skeleton that mimics a typical content card layout:
 * image → text block → optional button.
 *
 * ```tsx
 * // Standard content card
 * <CardSkeleton />
 *
 * // Media card with avatar author row
 * <CardSkeleton showAvatar />
 *
 * // Horizontal card
 * <CardSkeleton direction="row" imageWidth={120} imageHeight={120} />
 * ```
 */
export const CardSkeleton = memo(function CardSkeleton({
  direction = "column",
  showImage = true,
  showAvatar = false,
  showButton = true,
  imageHeight = 180,
  imageWidth = "100%",
  avatarSize = 48,
  lines = 3,
  lastLineWidth = "70%",
  gap = 16,
  padding = 0,
  ...groupProps
}: CardSkeletonProps) {
  return (
    <SkeletonGroup direction={direction} gap={gap} padding={padding} {...groupProps}>
      {showImage && (
        <ImageSkeleton
          width={imageWidth}
          height={imageHeight}
        />
      )}

      <SkeletonGroup gap={12}>
        {showAvatar && (
          <SkeletonGroup direction="row" gap={10} align="center">
            <AvatarSkeleton size={avatarSize} />
            <TextSkeleton lines={1} lineHeight={14} />
          </SkeletonGroup>
        )}

        <TextSkeleton lines={lines} lastLineWidth={lastLineWidth} />

        {showButton && <ButtonSkeleton />}
      </SkeletonGroup>
    </SkeletonGroup>
  );
});
