import type { CSSProperties } from "react";
import type {
  SkeletonAnimation,
  SkeletonRadius,
  SkeletonVariant,
} from "../../types/theme.types";

/**
 * Props for the core `Skeleton` primitive.
 */
export interface SkeletonProps {
  /**
   * Width of the skeleton.
   *
   * Accepts a number (pixels) or any valid CSS string (`"100%"`, `"20rem"`,
   * `"50vw"`, etc.).
   *
   * @default "100%"
   */
  width?: number | string;

  /**
   * Height of the skeleton.
   *
   * Accepts a number (pixels) or any valid CSS string.
   *
   * @default 16
   */
  height?: number | string;

  /**
   * Shorthand for setting both `width` and `height` to the same value.
   * Useful for circles and square thumbnails.
   *
   * Overrides `width` and `height` when provided.
   */
  size?: number | string;

  /**
   * Border-radius preset or any valid CSS radius string.
   *
   * Falls back to the theme `radius` value when omitted.
   */
  radius?: SkeletonRadius;

  /**
   * Animation style for this skeleton.
   *
   * Falls back to the theme `animation` value when omitted.
   */
  animation?: SkeletonAnimation;

  /**
   * Shape variant.
   *
   * - `"default"` — Rectangle with theme radius.
   * - `"rounded"` — Rectangle with large rounded corners.
   * - `"circle"` — Perfect circle driven by `size`.
   *
   * @default "default"
   */
  variant?: SkeletonVariant;

  /** Additional CSS class names. */
  className?: string;

  /** Inline style overrides applied after all computed styles. */
  style?: CSSProperties;

  /**
   * Accessible label for the skeleton.
   *
   * When provided the skeleton is exposed to screen readers with
   * `role="status"` and this label. When omitted the skeleton is decorative
   * (`aria-hidden="true"`).
   *
   * @example
   * ```tsx
   * // Entire loading section announced once:
   * <div role="status" aria-label="Loading profile...">
   *   <AvatarSkeleton />
   *   <TextSkeleton lines={2} />
   * </div>
   * ```
   */
  "aria-label"?: string;

  /**
   * HTML `data-testid` attribute for testing.
   */
  "data-testid"?: string;
}
