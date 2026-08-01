import type { ReactNode } from "react";

import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `ArticleSkeleton`.
 */
export interface ArticleSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction" | "align"> {
  /**
   * Extra content appended after the body text, for a near-miss layout
   * without reimplementing the article from primitives.
   */
  children?: ReactNode;

  /** Show a hero image placeholder at the top. @default true */
  showHeroImage?: boolean;

  /** Height of the hero image in pixels. @default 240 */
  heroHeight?: number;

  /** Show an author / meta row (avatar + name + date). @default true */
  showAuthor?: boolean;

  /** Number of body text lines. @default 6 */
  bodyLines?: number;

  /** Show a section heading placeholder in the body. @default true */
  showHeading?: boolean;
}
