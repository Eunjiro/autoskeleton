import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `ChatMessageSkeleton`.
 */
export interface ChatMessageSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction"> {
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
