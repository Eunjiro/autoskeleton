import type { ReactNode } from "react";

import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `ChatMessageSkeleton`.
 */
export interface ChatMessageSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction"> {
  /**
   * Extra content appended after the input bar, for a near-miss layout
   * without reimplementing the chat from primitives.
   */
  children?: ReactNode;

  /**
   * Number of chat bubbles to render.
   * @default 4
   */
  messages?: number;

  /**
   * Show a message input placeholder at the bottom.
   * @default true
   */
  showInput?: boolean;
}
