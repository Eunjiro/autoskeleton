import type { SkeletonProps } from "../Skeleton";
import type { SkeletonRadius } from "../../types/theme.types";

/**
 * Props for `ButtonSkeleton`.
 */
export interface ButtonSkeletonProps extends Omit<SkeletonProps, "variant" | "radius"> {
  /**
   * Width of the button skeleton.
   * @default 120
   */
  width?: number | string;

  /**
   * Height of the button skeleton.
   * @default 40
   */
  height?: number | string;

  /**
   * Border-radius preset or any valid CSS radius string.
   *
   * Defaults to `"full"` for a pill-shaped button. Pass a smaller preset
   * (e.g. `"md"`) for a rectangular button with rounded corners instead.
   * @default "full"
   */
  radius?: SkeletonRadius;
}