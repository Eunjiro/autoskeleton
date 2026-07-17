/**
 * Available skeleton animation styles.
 *
 * - `"wave"` — A shimmer sweep from left to right.
 * - `"pulse"` — A gentle opacity pulse.
 * - `"fade"` — A soft fade in/out.
 * - `"none"` — No animation (static placeholder).
 */
export type SkeletonAnimation = "wave" | "pulse" | "fade" | "none";

/**
 * Border-radius size presets.
 *
 * - `"none"` — 0px (sharp corners)
 * - `"sm"` — 4px
 * - `"md"` — 8px
 * - `"lg"` — 12px
 * - `"full"` — 9999px (pill / circle)
 *
 * Pass any valid CSS string (e.g. `"50%"` or `"6px"`) for custom values.
 */
export type SkeletonRadius = "none" | "sm" | "md" | "lg" | "full" | (string & {});

/**
 * CSS `animation-direction` values for the skeleton animation.
 */
export type SkeletonAnimationDirection =
  | "normal"
  | "reverse"
  | "alternate"
  | "alternate-reverse";

/**
 * Available skeleton shape variants.
 *
 * - `"default"` — Rectangular block.
 * - `"rounded"` — Rectangle with rounded corners.
 * - `"circle"` — Perfect circle (uses `size` for both width and height).
 */
export type SkeletonVariant = "default" | "rounded" | "circle";

/**
 * Global theme configuration passed through `SkeletonProvider`.
 *
 * All values have sensible defaults and can be partially overridden at any
 * level of the tree via `SkeletonProvider` or `SkeletonGroup`.
 */
export interface SkeletonTheme {
  /**
   * Animation style applied to every skeleton.
   * @default "wave"
   */
  animation: SkeletonAnimation;

  /**
   * Animation duration in seconds.
   * @default 1.2
   */
  duration: number;

  /**
   * CSS `animation-timing-function` for the skeleton animation.
   * Accepts any valid CSS easing string (e.g. `"ease-in-out"`, `"linear"`,
   * `"cubic-bezier(0.4, 0, 0.2, 1)"`).
   * @default "ease-in-out"
   */
  easing: string;

  /**
   * CSS `animation-direction` for the skeleton animation.
   * @default "normal"
   */
  animationDirection: SkeletonAnimationDirection;

  /**
   * Border-radius size preset or any valid CSS radius string.
   * @default "md"
   */
  radius: SkeletonRadius;

  /**
   * Base background color of the skeleton.
   * @default "#E5E7EB"
   */
  color: string;

  /**
   * Highlight / shimmer color used by the wave animation.
   * @default "#F9FAFB"
   */
  highlight: string;
}