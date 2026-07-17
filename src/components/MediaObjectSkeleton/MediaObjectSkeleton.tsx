import { memo } from "react";

import { AvatarSkeleton } from "../AvatarSkeleton";
import { Skeleton } from "../Skeleton";
import { SkeletonGroup } from "../SkeletonGroup";
import { TextSkeleton } from "../TextSkeleton";

import type { MediaObjectSkeletonProps } from "./MediaObjectSkeleton.types";

/**
 * A skeleton for the classic "media object" pattern — a thumbnail alongside
 * a text block, as seen in tweets, email previews, and search results.
 *
 * ```tsx
 * <MediaObjectSkeleton />
 *
 * // Circle avatar variant
 * <MediaObjectSkeleton mediaShape="circle" mediaSize={48} />
 * ```
 */
export const MediaObjectSkeleton = memo(function MediaObjectSkeleton({
  mediaSize = 64,
  mediaShape = "square",
  lines = 2,
  mediaPosition = "left",
  gap = 16,
  ...groupProps
}: MediaObjectSkeletonProps) {
  const media =
    mediaShape === "circle" ? (
      <AvatarSkeleton size={mediaSize} />
    ) : (
      <Skeleton
        width={mediaSize}
        height={mediaSize}
        radius="md"
        style={{ flexShrink: 0 }}
      />
    );

  const content = (
    <div style={{ flex: 1, minWidth: 0 }}>
      <TextSkeleton lines={lines} lineHeight={15} gap={8} lastLineWidth="60%" />
    </div>
  );

  return (
    <SkeletonGroup direction="row" gap={gap} align="flex-start" {...groupProps}>
      {mediaPosition === "left" ? (
        <>
          {media}
          {content}
        </>
      ) : (
        <>
          {content}
          {media}
        </>
      )}
    </SkeletonGroup>
  );
});
