"use client";

import { memo, useId, useMemo, type CSSProperties } from "react";

import { SkeletonContext } from "../../context/SkeletonContext";
import { SkeletonLayoutContext } from "../../context/SkeletonLayoutContext";
import { useSkeleton } from "../../hooks/useSkeleton";

import type { SkeletonGroupProps } from "./SkeletonGroup.types";
import {
  buildResponsiveCss,
  isResponsive,
  resolveBaseLayout,
} from "./SkeletonGroup.utils";

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
 * // 3-column grid
 * <SkeletonGroup layout="grid" columns={3} gap={16}>
 *   <ProductCardSkeleton />
 *   <ProductCardSkeleton />
 *   <ProductCardSkeleton />
 * </SkeletonGroup>
 *
 * // Responsive: 1 column by default, 3 from a 640px container width
 * <SkeletonGroup layout="grid" columns={{ base: 1, md: 3 }} gap={16}>
 *   <ProductCardSkeleton />
 *   <ProductCardSkeleton />
 *   <ProductCardSkeleton />
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
  layout = "flex",
  columns,
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

  const isGrid = layout === "grid";
  const base = resolveBaseLayout(columns, direction);
  const responsive = isResponsive(columns, direction);

  // When responsive, gridTemplateColumns/flexDirection are owned entirely by
  // the generated stylesheet (see buildResponsiveCss) instead of inline
  // style — an inline style value would out-rank the @container overrides
  // no matter what they say, since inline style always beats stylesheet
  // rules regardless of specificity or media/container conditions.
  const groupStyle: CSSProperties = isGrid
    ? {
        display: "grid",
        ...(!responsive && {
          gridTemplateColumns:
            typeof base.columns === "number" ? `repeat(${base.columns}, 1fr)` : base.columns,
        }),
        gap,
        padding,
        alignItems: align,
        justifyContent: justify,
        ...style,
      }
    : {
        display: "flex",
        ...(!responsive && { flexDirection: base.direction }),
        gap,
        padding,
        alignItems: align,
        justifyContent: justify,
        ...style,
      };

  const ariaProps = ariaLabel
    ? ({ role: "status" as const, "aria-label": ariaLabel, "aria-busy": ariaBusy } as const)
    : {};

  // Percentage-width children resolve normally against a grid track (unlike
  // a flex row's shrink-to-fit main axis — see Skeleton.tsx), so grid mode
  // never needs the flex-fill treatment regardless of `direction`.
  //
  // Caveat: this reflects the JS-resolved *base* direction only. If
  // `direction` is responsive (e.g. `{ base: "column", md: "row" }`), a
  // percentage-width child won't get flex-fill protection at breakpoints
  // where CSS switches it to a row, since that switch happens purely via
  // `@container` and isn't visible to this context. Give such children an
  // explicit `width`/`flex` if you need a guaranteed fill across breakpoints.
  const layoutDirection = isGrid ? "column" : base.direction;

  const rawId = useId().replace(/:/g, "");
  const responsiveClassName = `sg-${rawId}`;
  const responsiveCss = responsive
    ? buildResponsiveCss(responsiveClassName, isGrid, columns, direction)
    : "";

  const groupElement = (
    <div
      {...ariaProps}
      className={
        responsive
          ? [className, responsiveClassName].filter(Boolean).join(" ")
          : className
      }
      style={groupStyle}
    >
      {children}
    </div>
  );

  return (
    <SkeletonContext.Provider value={theme}>
      <SkeletonLayoutContext.Provider value={layoutDirection}>
        {responsive ? (
          <div style={{ containerType: "inline-size" }}>
            <style>{responsiveCss}</style>
            {groupElement}
          </div>
        ) : (
          groupElement
        )}
      </SkeletonLayoutContext.Provider>
    </SkeletonContext.Provider>
  );
});