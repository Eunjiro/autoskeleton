import { memo, type CSSProperties } from "react";

import { useSkeleton } from "../../hooks/useSkeleton";
import type { SkeletonProps } from "./Skeleton.types";
import { getSkeletonDimensions } from "./Skeleton.utils";

import "./Skeleton.css";

/**
 * The core skeleton primitive.
 *
 * Every other skeleton component in this library is built on top of this one.
 * Use it directly when you need a custom placeholder shape.
 *
 * ```tsx
 * // Simple rectangle
 * <Skeleton width={300} height={20} />
 *
 * // Circle
 * <Skeleton variant="circle" size={48} />
 *
 * // Full-width block with custom radius
 * <Skeleton height={120} radius="lg" />
 * ```
 *
 * Theme values (color, animation, radius, etc.) are inherited from the
 * nearest `SkeletonProvider` or `SkeletonGroup` ancestor.
 */
export const Skeleton = memo(function Skeleton({
  width,
  height,
  size,
  radius,
  variant = "default",
  animation,
  className,
  style,
  "aria-label": ariaLabel,
  "data-testid": testId,
}: SkeletonProps) {
  const theme = useSkeleton();

  const resolvedRadius = radius ?? theme.radius;
  const resolvedAnimation = animation ?? theme.animation;

  const dimensions = getSkeletonDimensions({
    variant,
    width,
    height,
    size,
    radius: resolvedRadius,
  });

  const cssVars = {
    "--skeleton-color": theme.color,
    "--skeleton-highlight": theme.highlight,
    "--skeleton-duration": `${theme.duration}s`,
    "--skeleton-easing": theme.easing,
    "--skeleton-direction": theme.animationDirection,
  } as CSSProperties;

  // When an aria-label is provided the skeleton announces itself to screen
  // readers. Otherwise it is purely decorative and hidden from the a11y tree.
  const ariaProps = ariaLabel
    ? ({ role: "status" as const, "aria-label": ariaLabel } as const)
    : ({ "aria-hidden": true as const } as const);

  return (
    <div
      {...ariaProps}
      data-testid={testId}
      className={`skeleton skeleton-${resolvedAnimation}${className ? ` ${className}` : ""}`}
      style={{
        ...dimensions,
        backgroundColor: theme.color,
        ...cssVars,
        ...style,
      }}
    />
  );
});
