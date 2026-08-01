import type { ReactNode } from "react";

import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `ProfileSkeleton`.
 */
export interface ProfileSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction" | "align"> {
  /**
   * Extra content appended after the default composition (avatar → name →
   * bio → stats → button) — for a near-miss layout that's the standard
   * profile plus one or two extra elements, without reimplementing the
   * whole thing from primitives.
   */
  children?: ReactNode;
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
