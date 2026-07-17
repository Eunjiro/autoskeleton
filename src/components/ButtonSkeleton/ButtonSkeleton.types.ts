import type { SkeletonProps } from "../Skeleton";

/**
 * Props for `ButtonSkeleton`.
 */
export interface ButtonSkeletonProps extends Omit<SkeletonProps, "variant"> {
  /**
   * Width of the button skeleton.
   * @default 120
   */
  width?: number | string;

  /**
   * Height of the button skeleton.
   * @default 40
   */
  height?: number | string;
}