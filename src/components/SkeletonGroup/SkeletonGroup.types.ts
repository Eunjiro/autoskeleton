import type { CSSProperties, ReactNode } from "react";

import type { SkeletonTheme } from "../../types/theme.types";

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
   * Main-axis (flex) direction.
   * @default "column"
   */
  direction?: "row" | "column";

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