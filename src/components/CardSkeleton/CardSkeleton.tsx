import { AvatarSkeleton } from "../AvatarSkeleton";
import { ButtonSkeleton } from "../ButtonSkeleton";
import { ImageSkeleton } from "../ImageSkeleton";
import { SkeletonGroup } from "../SkeletonGroup";
import { TextSkeleton } from "../TextSkeleton";

import type { CardSkeletonProps } from "./CardSkeleton.types";

export function CardSkeleton({
  direction = "column",

  showImage = true,
  showAvatar = false,
  showButton = true,

  imageHeight = 180,
  imageWidth = "100%",

  avatarSize = 48,

  lines = 3,
  lastLineWidth = "70%",

  ...groupProps
}: CardSkeletonProps) {
  return (
    <SkeletonGroup direction={direction} {...groupProps}>
      {showImage && (
        <ImageSkeleton
          width={imageWidth}
          height={imageHeight}
        />
      )}

      <SkeletonGroup gap={12}>
        {showAvatar && (
          <AvatarSkeleton size={avatarSize} />
        )}

        <TextSkeleton lines={lines} lastLineWidth={lastLineWidth} />

        

        {showButton && (
          <ButtonSkeleton />
        )}
      </SkeletonGroup>
    </SkeletonGroup>
  );
}