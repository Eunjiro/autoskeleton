/*
 * Available skeleton animations.
 */
export type SkeletonAnimation =
  | "wave"
  | "pulse"
  | "fade"
  | "none";

/*
 * Available border radius presets.
 */
export type SkeletonRadius =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "full";

/*
 * Available skeleton variants.
 */
export type SkeletonVariant =
  | "default"
  | "rounded"
  | "circle";

/*
 * Global theme configuration.
 */
export interface SkeletonTheme {
  /*
   * Animation style.
   */
  animation: SkeletonAnimation;

  /*
   * Animation duration in seconds.
   */
  duration: number;

  /*
   * Radius preset.
   */
  radius: SkeletonRadius;

  /*
   * Skeleton base color.
   */
  color: string;

  /*
   * Skeleton highlight color.
   */
  highlight: string;
}