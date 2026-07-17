import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `MediaObjectSkeleton`.
 */
export interface MediaObjectSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction"> {
  /**
   * Width/height of the leading media placeholder in pixels.
   * @default 64
   */
  mediaSize?: number;

  /**
   * Shape of the media placeholder.
   * @default "square"
   */
  mediaShape?: "square" | "circle";

  /**
   * Number of text lines in the content block.
   * @default 2
   */
  lines?: number;

  /**
   * Position of the media element.
   * @default "left"
   */
  mediaPosition?: "left" | "right";
}
