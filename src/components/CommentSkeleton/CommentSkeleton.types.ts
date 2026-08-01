import type { ReactNode } from "react";

import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `CommentSkeleton`.
 */
export interface CommentSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction"> {
  /**
   * Extra content appended after the comment list, for a near-miss layout
   * without reimplementing the thread from primitives.
   */
  children?: ReactNode;

  /**
   * Number of comment items to render.
   * @default 3
   */
  items?: number;

  /**
   * Number of text lines per comment body.
   * @default 2
   */
  lines?: number;

  /**
   * Diameter of the commenter's avatar in pixels.
   * @default 36
   */
  avatarSize?: number;

  /**
   * Show action placeholders (like/reply) below each comment.
   * @default false
   */
  showActions?: boolean;
}
