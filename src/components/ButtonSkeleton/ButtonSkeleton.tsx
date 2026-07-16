import { Skeleton } from "../Skeleton";

import type { ButtonSkeletonProps } from "./ButtonSkeleton.types";


export function ButtonSkeleton({
  width = 120,
  height = 40,
  ...skeletonProps
}: ButtonSkeletonProps) {
  return (
    <Skeleton
      variant="rounded"
      width={width}
      height={height}
      {...skeletonProps}
    />
  );
}