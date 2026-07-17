import { useMemo, type ReactNode } from "react";

import { DEFAULT_THEME } from "../constants/defaultTheme";
import { SkeletonContext } from "./SkeletonContext";

import type { SkeletonTheme } from "../types/theme.types";

/**
 * Props for `SkeletonProvider`.
 *
 * All theme properties are optional — omitted ones fall back to the default
 * light-mode theme.
 */
export interface SkeletonProviderProps extends Partial<SkeletonTheme> {
  /** React children. */
  children: ReactNode;
}

/**
 * Provides a theme context to all `Skeleton` components in its subtree.
 *
 * Wrap your application (or a section of it) to set global skeleton
 * defaults for color, animation, radius, and timing.
 *
 * ```tsx
 * import { SkeletonProvider } from '@gyojiro/autoskeleton-react';
 *
 * <SkeletonProvider color="#D1D5DB" highlight="#F3F4F6" animation="wave">
 *   <App />
 * </SkeletonProvider>
 * ```
 *
 * You can also use the built-in `DARK_THEME` preset:
 *
 * ```tsx
 * import { SkeletonProvider, DARK_THEME } from '@gyojiro/autoskeleton-react';
 *
 * <SkeletonProvider {...DARK_THEME}>
 *   <App />
 * </SkeletonProvider>
 * ```
 */
export function SkeletonProvider({
  children,
  animation,
  duration,
  easing,
  animationDirection,
  radius,
  color,
  highlight,
}: SkeletonProviderProps) {
  const theme = useMemo<SkeletonTheme>(
    () => ({
      animation: animation ?? DEFAULT_THEME.animation,
      duration: duration ?? DEFAULT_THEME.duration,
      easing: easing ?? DEFAULT_THEME.easing,
      animationDirection: animationDirection ?? DEFAULT_THEME.animationDirection,
      radius: radius ?? DEFAULT_THEME.radius,
      color: color ?? DEFAULT_THEME.color,
      highlight: highlight ?? DEFAULT_THEME.highlight,
    }),
    [animation, duration, easing, animationDirection, radius, color, highlight],
  );

  return (
    <SkeletonContext.Provider value={theme}>
      {children}
    </SkeletonContext.Provider>
  );
}