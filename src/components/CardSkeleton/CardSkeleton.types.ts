import type { ReactNode } from "react";

import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `CardSkeleton`.
 */
export interface CardSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction" | "align" | "justify"> {
  /**
   * Extra content appended after the default composition (image → avatar
   * row → text → button), inside the same content block — for a near-miss
   * layout that's the standard card plus one or two extra elements (a
   * badge, a tag row, a secondary line) without reimplementing the whole
   * card from primitives.
   *
   * ```tsx
   * <CardSkeleton>
   *   <Skeleton width={60} height={20} radius="full" />
   * </CardSkeleton>
   * ```
   */
  children?: ReactNode;
  /**
   * Layout direction of the card.
   * - `"column"` — image on top, content below (default).
   * - `"row"` — image on the left, content on the right.
   * @default "column"
   */
  direction?: "row" | "column";

  /** Show the image placeholder. @default true */
  showImage?: boolean;

  /** Show an avatar row inside the content block. @default false */
  showAvatar?: boolean;

  /** Show a button placeholder at the bottom of the content block. @default true */
  showButton?: boolean;

  /**
   * Height of the image placeholder in pixels.
   * @default 180
   */
  imageHeight?: number | string;

  /**
   * Width of the image placeholder.
   * @default "100%"
   */
  imageWidth?: number | string;

  /**
   * Diameter of the avatar in pixels (only relevant when `showAvatar` is `true`).
   * @default 48
   */
  avatarSize?: number;

  /**
   * Number of text lines in the content block.
   * @default 3
   */
  lines?: number;

  /**
   * Width of the last text line.
   * @default "70%"
   */
  lastLineWidth?: number | string;
}