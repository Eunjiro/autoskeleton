import type { CSSProperties } from "react";
import type {
  SkeletonAnimation,
  SkeletonRadius,
  SkeletonVariant,
} from "../../types/theme.types";

export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  radius?: SkeletonRadius;
  animation?: SkeletonAnimation;
  className?: string;
  style?: CSSProperties;
  variant?: SkeletonVariant;
  size?: number | string;
}
