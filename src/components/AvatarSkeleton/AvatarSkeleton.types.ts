import type { SkeletonProps } from "../Skeleton";

/**
 * Props for `AvatarSkeleton`.
 */
export interface AvatarSkeletonProps extends Omit<SkeletonProps, "variant" | "size"> {
  /**
   * Diameter of the avatar circle in pixels (or any CSS size string).
   * @default 40
   */
  size?: number | string;
}