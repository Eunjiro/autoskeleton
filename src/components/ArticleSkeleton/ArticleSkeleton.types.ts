import type { SkeletonGroupProps } from "../SkeletonGroup";

/**
 * Props for `ArticleSkeleton`.
 */
export interface ArticleSkeletonProps
  extends Omit<SkeletonGroupProps, "children" | "direction" | "align"> {
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
