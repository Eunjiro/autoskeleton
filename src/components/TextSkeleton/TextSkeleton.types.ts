import type { SkeletonProps } from "../Skeleton";

/**
 * Props for `TextSkeleton`.
 */
export interface TextSkeletonProps extends Omit<SkeletonProps, "width" | "height" | "size" | "variant"> {
  /**
   * Number of text lines to render.
   * @default 3
   */
  lines?: number;

  /**
   * Vertical gap between lines in pixels (or CSS string).
   * @default 8
   */
  gap?: number | string;

  /**
   * Width of the last line. Shortens it to mimic natural paragraph endings.
   * Ignored when `randomizeWidths` is `true`.
   * @default "70%"
   */
  lastLineWidth?: number | string;

  /**
   * Height of each line in pixels (or CSS string).
   * @default 16
   */
  lineHeight?: number | string;

  /**
   * When `true`, each line (except the first) gets a random width between
   * `minLineWidth` and `maxLineWidth`.
   * @default false
   */
  randomizeWidths?: boolean;

  /**
   * Minimum line width percentage when `randomizeWidths` is `true`.
   * @default 55
   */
  minLineWidth?: number;

  /**
   * Maximum line width percentage when `randomizeWidths` is `true`.
   * @default 90
   */
  maxLineWidth?: number;

  /** Additional CSS class names. */
  className?: string;
}