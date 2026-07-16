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
      return "8px";
  }
}

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
      };

    case "rounded":
      return {
        width: width ?? "100%",
        height: height ?? 16,
        borderRadius: "12px",
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