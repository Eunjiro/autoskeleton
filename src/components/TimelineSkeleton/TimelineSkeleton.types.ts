import type { ReactNode } from "react";

import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `TimelineSkeleton`.
 */
export interface TimelineSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction"> {
  /**
   * Extra content appended after the last event, for a near-miss layout
   * without reimplementing the timeline from primitives.
   */
  children?: ReactNode;

  /**
   * Number of timeline events.
   * @default 4
   */
  events?: number;

  /**
   * Number of text lines per event description.
   * @default 2
   */
  lines?: number;

  /**
   * Show a timestamp placeholder next to each event.
   * @default true
   */
  showTimestamp?: boolean;
}
