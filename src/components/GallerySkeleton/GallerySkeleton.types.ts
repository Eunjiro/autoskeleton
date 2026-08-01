import type { ReactNode } from "react";

import type { ResponsiveValue, SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `GallerySkeleton`.
 */
export interface GallerySkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction" | "layout" | "columns"> {
  /**
   * Extra content appended after the grid, for a near-miss layout without
   * reimplementing the gallery from primitives.
   */
  children?: ReactNode;

  /**
   * Total number of image placeholders.
   * @default 9
   */
  items?: number;

  /**
   * Number of columns in the grid. Accepts a `{ base, sm, md, lg, xl }`
   * object to vary by the gallery's own container width (see
   * `ResponsiveValue`).
   * @default 3
   */
  columns?: ResponsiveValue<number>;

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
