import type {
  SkeletonRadius,
  SkeletonVariant,
} from "../../types/theme.types";

interface SkeletonDimensionsOptions {
  variant: SkeletonVariant;
  width?: number | string;
  height?: number | string;
  size?: number | string;
  radius: SkeletonRadius;
}

/**
 * Resolves a `SkeletonRadius` preset token (or any arbitrary CSS string) to a
 * concrete CSS border-radius value.
 *
 * Preset mapping:
 * - `"none"` → `"0"`
 * - `"sm"`   → `"4px"`
 * - `"md"`   → `"8px"`
 * - `"lg"`   → `"12px"`
 * - `"full"` → `"9999px"`
 *
 * Any other string is passed through unchanged, so consumers can supply
 * arbitrary values like `"50%"` or `"6px 12px"`.
 */
export function getRadiusValue(radius: SkeletonRadius): string {
  switch (radius) {
    case "none":
      return "0";
    case "sm":
      return "4px";
    case "md":
      return "8px";
    case "lg":
      return "12px";
    case "full":
      return "9999px";
    default:
      // Pass custom CSS strings through as-is.
      return radius;
  }
}

/**
 * Computes the CSS dimension properties for a given variant.
 */
export function getSkeletonDimensions({
  variant,
  width,
  height,
  size,
  radius,
}: SkeletonDimensionsOptions) {
  switch (variant) {
    case "circle":
      return {
        width: size ?? 40,
        height: size ?? 40,
        borderRadius: "50%",
        flexShrink: 0,
      };

    case "rounded":
      return {
        width: width ?? "100%",
        height: height ?? 16,
        borderRadius: "9999px",
      };

    case "default":
    default:
      return {
        width: width ?? "100%",
        height: height ?? 16,
        borderRadius: getRadiusValue(radius),
      };
  }
}