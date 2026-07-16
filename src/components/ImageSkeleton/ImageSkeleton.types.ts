import type { SkeletonProps } from "../Skeleton";

export interface ImageSkeletonProps extends SkeletonProps {
  width?: number | string;

  height?: number | string;

  aspectRatio?: string;
}