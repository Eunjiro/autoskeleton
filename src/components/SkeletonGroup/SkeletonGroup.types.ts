import type { CSSProperties, ReactNode } from "react";

import type { SkeletonTheme } from "../../types/theme.types";

/**
 * Container-width breakpoints available to responsive `SkeletonGroup` props.
 *
 * These describe the width of the `SkeletonGroup` itself (via a CSS
 * container query), not the viewport — so a grid nested inside a narrow
 * sidebar responds to the sidebar's width, not the window's.
 */
export type SkeletonBreakpoint = "sm" | "md" | "lg" | "xl";

/**
 * A value that can either be constant, or vary by container-width
 * breakpoint. `base` is the default, applied below the smallest breakpoint.
 *
 * ```tsx
 * // 1 column by default, 2 from 480px, 3 from 640px container width
 * <SkeletonGroup layout="grid" columns={{ base: 1, sm: 2, md: 3 }}>
 * ```
 */
export type ResponsiveValue<T> = T | ({ base?: T } & Partial<Record<SkeletonBreakpoint, T>>);

/**
 * Props for `SkeletonGroup`.
 *
 * `SkeletonGroup` serves two purposes:
 * 1. **Layout wrapper** — arranges children with flexbox.
 * 2. **Local theme scope** — any `SkeletonTheme` prop overrides the inherited
 *    theme for all descendants.
 */
export interface SkeletonGroupProps extends Partial<SkeletonTheme> {
  /** The skeleton children to lay out. */
  children: ReactNode;

  /**
   * Space between children.
   *
   * Accepts a number (pixels) or any valid CSS string.
   * @default 16
   */
  gap?: number | string;

  /**
   * Inner padding of the group container.
   *
   * Accepts a number (pixels) or any valid CSS string.
   * @default 0
   */
  padding?: number | string;

  /**
   * Layout mode.
   * - `"flex"` — flexbox (default). Arranges children along `direction`.
   * - `"grid"` — CSS grid. Arranges children into `columns` equal-width
   *   tracks (or a custom `grid-template-columns` value). `direction` is
   *   ignored in this mode.
   * @default "flex"
   */
  layout?: "flex" | "grid";

  /**
   * Grid column tracks. A number renders `repeat(columns, 1fr)` — that many
   * equal-width columns. A string is used as a raw CSS
   * `grid-template-columns` value (e.g. `"200px 1fr 1fr"`) for full control.
   * Accepts a `{ base, sm, md, lg, xl }` object to vary by the group's own
   * container width (see `ResponsiveValue`).
   *
   * Only applies when `layout="grid"`.
   */
  columns?: ResponsiveValue<number | string>;

  /**
   * Main-axis (flex) direction. Ignored when `layout="grid"`. Accepts a
   * `{ base, sm, md, lg, xl }` object to flip direction by the group's own
   * container width — e.g. row on desktop, column on mobile — regardless of
   * viewport size (see `ResponsiveValue`).
   * @default "column"
   */
  direction?: ResponsiveValue<"row" | "column">;

  /**
   * Cross-axis alignment (`align-items`).
   * @default "stretch"
   */
  align?: CSSProperties["alignItems"];

  /**
   * Main-axis alignment (`justify-content`).
   * @default "flex-start"
   */
  justify?: CSSProperties["justifyContent"];

  /** Additional CSS class names. */
  className?: string;

  /** Inline style overrides. */
  style?: CSSProperties;

  /**
   * Accessible label for the loading region.
   *
   * When provided the group renders with `role="status"` and announces itself
   * to screen readers.
   *
   * @example
   * ```tsx
   * <SkeletonGroup aria-label="Loading user profile...">
   *   <AvatarSkeleton />
   *   <TextSkeleton />
   * </SkeletonGroup>
   * ```
   */
  "aria-label"?: string;

  /**
   * Whether the region is in a loading state.
   *
   * Maps to the HTML `aria-busy` attribute.
   * @default true
   */
  "aria-busy"?: boolean;
}