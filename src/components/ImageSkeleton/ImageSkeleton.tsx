import { Skeleton } from "../Skeleton";

import type { ImageSkeletonProps } from "./ImageSkeleton.types";


export function ImageSkeleton({
  width = "100%",
  height = 200,
  aspectRatio,
  ...skeletonProps
}: ImageSkeletonProps) {
  return (
    <Skeleton
      variant="default"
      width={width}
      height={height}
      style={{
        aspectRatio,
      }}
      {...skeletonProps}
    />
  );
}