import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `GallerySkeleton`.
 */
export interface GallerySkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction"> {
  /**
   * Total number of image placeholders.
   * @default 9
   */
  items?: number;

  /**
   * Number of columns in the grid.
   * @default 3
   */
  columns?: number;

  /**
   * Aspect ratio of each cell (CSS `aspect-ratio` value).
   * @default "1"
   */
  aspectRatio?: string;

  /**
   * Gap between cells in pixels.
   * @default 8
   */
  cellGap?: number;
}
