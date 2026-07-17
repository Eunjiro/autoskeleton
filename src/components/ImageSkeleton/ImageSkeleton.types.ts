import type { SkeletonProps } from "../Skeleton";

/**
 * Props for `ImageSkeleton`.
 */
export interface ImageSkeletonProps extends Omit<SkeletonProps, "variant"> {
  /**
   * Width of the image skeleton.
   * @default "100%"
   */
  width?: number | string;

  /**
   * Height of the image skeleton. Ignored when `aspectRatio` is set.
   * @default 200
   */
  height?: number | string;

  /**
   * CSS `aspect-ratio` value (e.g. `"16/9"`, `"4/3"`, `"1"`). When set,
   * `height` is derived from the width so the skeleton matches the image
   * proportions.
   */
  aspectRatio?: string;
}