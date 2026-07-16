import type { SkeletonProps } from "../Skeleton";

export interface TextSkeletonProps extends SkeletonProps {
  /**
   * Number of lines to render.
   */
  lines?: number;

  /**
   * Space between lines.
   */
  gap?: number;

  /**
   * Width of the last line.
   */
  lastLineWidth?: number | string;

  /**
   * Height of each line.
   */
  lineHeight?: number | string;

   /**
   * Randomize each line's width.
   */
  randomizeWidths?: boolean;

  /**
   * Minimum random width percentage.
   */
  minLineWidth?: number;

  /**
   * Maximum random width percentage.
   */
  maxLineWidth?: number;

  className?: string;
}