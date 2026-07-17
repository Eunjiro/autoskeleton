import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `ProfileSkeleton`.
 */
export interface ProfileSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction" | "align"> {
  /**
   * Diameter of the profile avatar in pixels.
   * @default 80
   */
  avatarSize?: number;

  /**
   * Number of text lines below the name.
   * @default 2
   */
  bioLines?: number;

  /**
   * Number of stat columns to render (e.g. followers / following / posts).
   * Set to `0` to hide the stats row.
   * @default 3
   */
  statsCount?: number;

  /**
   * Show a "follow / connect" button placeholder.
   * @default true
   */
  showButton?: boolean;
}
