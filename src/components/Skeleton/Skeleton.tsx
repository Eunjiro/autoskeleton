import type { CSSProperties } from "react";

import { useSkeleton } from "../../hooks/useSkeleton";
import type { SkeletonProps } from "./Skeleton.types";
import {
  getSkeletonDimensions,
} from "./Skeleton.utils";

import "./Skeleton.css";

export function Skeleton({
  width,
  height,
  size,
  radius,
  variant = "default",
  animation,
  className,
  style,
}: SkeletonProps) {
  const theme = useSkeleton();

  const skeletonRadius = radius ?? theme.radius;
  const skeletonAnimation = animation ?? theme.animation;

  const dimensions = getSkeletonDimensions({
    variant,
    width,
    height,
    size,
    radius: skeletonRadius,
  });

  const skeletonStyle: CSSProperties = {
    ...dimensions,
    backgroundColor: theme.color,
    ...style,
  };

  return (
    <div
      className={`skeleton skeleton-${skeletonAnimation} ${className ?? ""}`}
      style={{
        ...skeletonStyle,
        "--skeleton-color": theme.color,
        "--skeleton-highlight": theme.highlight,
        "--skeleton-duration": `${theme.duration}s`,
      } as CSSProperties}
      aria-hidden="true"
    />
  );
}