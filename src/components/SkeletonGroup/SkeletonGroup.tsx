import { memo, useMemo, type CSSProperties } from "react";

import { SkeletonContext } from "../../context/SkeletonContext";
import { useSkeleton } from "../../hooks/useSkeleton";

import type { SkeletonGroupProps } from "./SkeletonGroup.types";

/**
 * A layout wrapper that arranges skeleton children and optionally overrides
 * the inherited theme for its subtree.
 *
 * ```tsx
 * // Horizontal row with gap
 * <SkeletonGroup direction="row" gap={12}>
 *   <AvatarSkeleton />
 *   <TextSkeleton lines={2} />
 * </SkeletonGroup>
 *
 * // Dark-mode override for a section
 * <SkeletonGroup color="#374151" highlight="#4B5563">
 *   <CardSkeleton />
 * </SkeletonGroup>
 * ```
 */
export const SkeletonGroup = memo(function SkeletonGroup({
  children,
  gap = 16,
  padding = 0,
  direction = "column",
  align = "stretch",
  justify = "flex-start",
  className,
  style,
  "aria-label": ariaLabel,
  "aria-busy": ariaBusy = true,
  // Theme overrides
  animation,
  duration,
  easing,
  animationDirection,
  radius,
  color,
  highlight,
}: SkeletonGroupProps) {
  const parentTheme = useSkeleton();

  const theme = useMemo(
    () => ({
      animation: animation ?? parentTheme.animation,
      duration: duration ?? parentTheme.duration,
      easing: easing ?? parentTheme.easing,
      animationDirection: animationDirection ?? parentTheme.animationDirection,
      radius: radius ?? parentTheme.radius,
      color: color ?? parentTheme.color,
      highlight: highlight ?? parentTheme.highlight,
    }),
    [
      animation,
      duration,
      easing,
      animationDirection,
      radius,
      color,
      highlight,
      parentTheme,
    ],
  );

  const groupStyle: CSSProperties = {
    display: "flex",
    flexDirection: direction,
    gap,
    padding,
    alignItems: align,
    justifyContent: justify,
    ...style,
  };

  const ariaProps = ariaLabel
    ? ({ role: "status" as const, "aria-label": ariaLabel, "aria-busy": ariaBusy } as const)
    : {};

  return (
    <SkeletonContext.Provider value={theme}>
      <div
        {...ariaProps}
        className={className}
        style={groupStyle}
      >
        {children}
      </div>
    </SkeletonContext.Provider>
  );
});